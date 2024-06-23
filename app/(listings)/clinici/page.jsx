import dynamic from "next/dynamic";
import SliderStyle from "@/components/listing-style/slider-style";
import { handleGetFirestore } from "@/utils/firestoreUtils";

import { fetchFirme } from "@/utils/localProjectlUtils";
import { cache } from "react";

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
    index: false,
    follow: false,
  },
};

export const revalidate = 60; // revalidate at most every minute , hour at 3600

const getFirme = cache(async (params) => {
  let firme = fetchFirme(params);
  return firme;
});

export async function getServerData(params) {
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
    let firme = await getFirme(params);
    console.log("here...firme...", firme);

    data = { judete, categorii, firme };
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

const index = async ({ params }) => {
  console.log("asdaddaad", params);

  const data = await getServerData(params);
  return (
    <>
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
