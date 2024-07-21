import dynamic from "next/dynamic";
import SliderStyle from "@/components/listing-style/slider-style";
import { handleGetFirestore } from "@/utils/firestoreUtils";

import { fetchFirme, transferaImagini } from "@/utils/localProjectlUtils";
import { cache } from "react";
import { filtrareOferte } from "@/utils/commonUtils";

export const metadata = {
  title: "Firme de proiectare, amenajare si intretinere spatii verzi",
  description:
    "Cauti un partener de incredere pentru gradina ta rezidentiala sau comerciala? Vezi firmele de pe portalul nostrum!",
  openGraph: {
    title: "Firme de proiectare, amenajare si intretinere spatii verzi",
    description:
      "Cauti un partener de incredere pentru gradina ta rezidentiala sau comerciala? Vezi firmele de pe portalul nostrum!",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/clinici`,
  },
  manifest: `${process.env.NEXT_PUBLIC_SITE_URL}/manifest.json`,
  robots: {
    index: true,
    follow: true,
  },
};

export const revalidate = 60; // revalidate at most every minute , hour at 3600

const getFirme = cache(async (params) => {
  let firme = fetchFirme(params);
  return firme;
});

export async function getServerData(params, searchParams) {
  let data = {};

  try {
    console.log("params..start.....", params);
    // if (params[1] === "favicon.ico") {
    //   return null; // Returnează null sau orice alt component care indică că pagina nu trebuie să proceseze acest id.
    // }
    console.log("params..start.....passed", params);
    // Interoghează Firestore (sau orice altă bază de date) folosind 'locationPart'
    let judete = await handleGetFirestore("Judete");
    let categorii = await handleGetFirestore("Categorii");
    console.log("here...params...", params);
    let firms = await getFirme(params);
    let firme = await transferaImagini(firms);
    let firmeFinal = [];
    if (searchParams) {
      firmeFinal = await filtrareOferte(firme, searchParams);
    } else {
      firmeFinal = [...firme];
    }
    data = { judete, categorii, firme: firmeFinal };
    return data;
  } catch (error) {
    console.error("Failed to fetch locations:", error);
    return {
      props: {
        error: "Failed to load data.",
      },
    };
  }
}

const index = async ({ params, searchParams }) => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Firma Amenajari Spatii Verzi",
    // image: product.image,
    description:
      "Cauta un furnizor de servicii de amenajari spatii verzi in apropiere si solicita o oferta personalizata.",
  };
  console.log("searchParams...", searchParams);
  const data = await getServerData(params, searchParams.slug);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <SliderStyle
        params={params.clinici}
        judete={data.judete}
        categorii={data.categorii}
        firme={data.firme}
        searchParams={searchParams.slug}
      />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
