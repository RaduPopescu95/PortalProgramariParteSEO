import dynamic from "next/dynamic";
import SliderStyle from "@/components/listing-style/slider-style";
import { unstable_noStore as noStore } from "next/cache";
import {
  handleGetFirestore,
  handleQueryDoubleParam,
  handleQueryFirestore,
} from "@/utils/firestoreUtils";
import { fetchFirme } from "@/utils/localProjectlUtils";

import { cache } from "react";

export const metadata = {
  title: "Firma Amenajari Spatii Verzi",
  description:
    "Cauta un furnizor de servicii de amenajari spatii verzi in apropiere si solicita o oferta personalizata.",
  openGraph: {
    title: "Firma Amenajari Spatii Verzi",
    description:
      "Cauta un furnizor de servicii de amenajari spatii verzi in apropiere si solicita o oferta personalizata.",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/cauta`,
  },
  manifest: `${process.env.NEXT_PUBLIC_SITE_URL}/manifest.json`,
  robots: {
    index: false,
    follow: false,
  },
};

const getFirme = cache(async (params, categorii) => {
  let firme = fetchFirme(params, categorii);
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
    let firme = await getFirme(params, categorii);

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
  noStore();
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
