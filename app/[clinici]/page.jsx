import dynamic from "next/dynamic";
import Categorii from "../../components/categorii";
import SliderStyle from "@/components/listing-style/slider-style";
// import { unstable_noStore as noStore } from "next/cache";
import {
  handleGetFirestore,
  handleQueryFirestore,
  handleQueryFirestoreSubcollection,
} from "@/utils/firestoreUtils";
import {
  fetchFirme,
  fetchFirmeParams,
  transferaImagini,
} from "@/utils/localProjectlUtils";
// import { cache } from "react";
import { notFound } from "next/navigation";
import { filtrareOferte } from "@/utils/commonUtils";

export const revalidate = 60; // revalidate at most every minute , hour at 3600

//FOLOSIM CACHE PENTRU A DEACTIVA DUPLICAREA FUNCTIEI DE GET DIN FIRESTORE (DACA ESTE FOLOSIT FETCH SE POATE FOLOSI SI SERVER COMPONENT SI IN GET METADATA DINAMIC)
const getFirme = async (params, cats) => {
  let firme = fetchFirme(params, cats);
  return firme;
};
// const getFirme = cache(async (params, cats) => {
//   let firme = fetchFirme(params, cats);
//   return firme;
// });

export async function generateStaticParams() {
  let combinatii = await fetchFirmeParams();
  console.log("combinatii...firme....", combinatii);
  return combinatii.map((post) => ({
    clinci: post,
  }));
}

export async function generateMetadata({ params, searchParams }, parent) {
  // read route params
  const id = params.clinici;

  // fetch data

  let firms = await getFirme(params);

  let firme = await transferaImagini(firms);
  let firmeFinal = [];
  console.log("test here....", searchParams);
  if (false) {
    // console.log("test here....is slug", searchParams.slug);
    // firmeFinal = await filtrareOferte(firme, searchParams.slug);
  } else {
    console.log("test here....no is slug");
    firmeFinal = [...firme];
  }

  console.log("firme....just one...", firme);
  return {
    title: `${firme[0]?.metaTitle || ""}`,
    description: `${firme[0]?.metaDescription || ""}`,
    openGraph: {
      images: [
        {
          url: firme[0]?.imagini?.imgs[0]?.finalUri || "",
        },
      ],
    },
    // alternates: {
    //   canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/${id}`,
    // },
    // manifest: `${process.env.NEXT_PUBLIC_SITE_URL}/manifest.json`,
    // robots: {
    //   index: true,
    //   follow: true,
    // },
  };

  // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || [];
}

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
    let firms = await getFirme(params, categorii);

    let firme = await transferaImagini(firms);
    let firmeFinal = [];
    if (false) {
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

const index = async ({ params, searchParams = null }) => {
  // noStore();
  console.log("params...in...clinici", params);
  console.log("searchParams....", searchParams);
  //searchParams.slug provoaca eroarea DynamicServerError, cumva forteaza pagina dorita statica in pagina dinamica
  const data = await getServerData(params);
  console.log("data....here..", data.firme);
  if (data.firme.length === 0) {
    notFound();
  }
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    name: data.firme[0]?.metaTitle,
    // image: product.image,
    description: data.firme[0]?.metaDescription,
  };

  return (
    <>
      {/* Add JSON-LD to your page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SliderStyle
        params={params.clinici}
        judete={data.judete}
        categorii={data.categorii}
        firme={data.firme}
      />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
