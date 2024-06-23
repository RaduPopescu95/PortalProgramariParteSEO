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
import { cache } from "react";
import { notFound } from "next/navigation";

export const revalidate = 60; // revalidate at most every minute , hour at 3600

//FOLOSIM CACHE PENTRU A DEACTIVA DUPLICAREA FUNCTIEI DE GET DIN FIRESTORE (DACA ESTE FOLOSIT FETCH SE POATE FOLOSI SI SERVER COMPONENT SI IN GET METADATA DINAMIC)
const getFirme = cache(async (params, cats) => {
  let firme = fetchFirme(params, cats);
  return firme;
});

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
  let firme = await getFirme(params);

  console.log("firme....just one...", firme);
  return {
    title: `${firme[0].metaTitle}`,
    description: `${firme[0].metaDescription}`,
    openGraph: {
      images: [
        {
          url: firme[0].imagini.imgs[0].finalUri,
        },
      ],
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/${id}`,
    },
    manifest: `${process.env.NEXT_PUBLIC_SITE_URL}/manifest.json`,
    robots: {
      index: false,
      follow: false,
    },
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
    console.log("here...firme...", firms);
    let firme = await transferaImagini(firms);

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

const index = async ({ params, searchParams }) => {
  // noStore();
  console.log("params...", params);
  console.log("searchParams....", searchParams);

  const data = await getServerData(params, searchParams);
  if (data.firme.length === 0) {
    notFound();
  }
  console.log("data....", data);
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
