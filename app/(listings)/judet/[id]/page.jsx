import dynamic from "next/dynamic";
import Judete from "../../../../components/judete";
import {
  handleQueryFirestore,
  handleQueryFirestoreSubcollection,
} from "@/utils/firestoreUtils";
import {
  fetchJudeteParams,
  transferaImagini,
} from "@/utils/localProjectlUtils";
import { notFound } from "next/navigation";
import { filtrareOferte } from "@/utils/commonUtils";

export const revalidate = 60; // revalidate at most every minute , hour at 3600

export async function generateStaticParams() {
  let combinatii = await fetchJudeteParams();
  console.log("combinatii...", combinatii);
  return combinatii.map((judet) => ({
    id: judet,
  }));
}

export async function generateMetadata({ params, searchParams }, parent) {
  // read route params
  let parts = params.id.split("-"); // Împărțim ID-ul în părți bazat pe separatorul '-'
  let judet = parts[0]; // Folosim prima parte pentru interogări
  let judetParam =
    judet.charAt(0).toUpperCase() + judet?.slice(1).toLowerCase();
  console.log("judetparam...", judetParam);
  return {
    title: `Specialisti In Peisagistica Si Gradinarit  ${judetParam}`,
    description: `Aici vei gasi firme seriose, care iti vor amenaja spatiul verde rezidential sau comercial asa cum ti l-ai dorit intotdeauna. Vezi firme acum!`,
    openGraph: {
      title: `Specialisti In Peisagistica Si Gradinarit  ${judetParam}`,
      description: `Aici vei gasi firme seriose, care iti vor amenaja spatiul verde rezidential sau comercial asa cum ti l-ai dorit intotdeauna. Vezi firme acum!`,
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/${judet}`,
    },
    manifest: `${process.env.NEXT_PUBLIC_SITE_URL}/manifest.json`,
    robots: {
      index: true,
      follow: true,
    },
  };
}

export async function getServerData(params, searchParams) {
  let data = {};
  let localitati = [];
  let firme = [];

  try {
    let parts = params.id; // Împărțim ID-ul în părți bazat pe separatorul '-'
    let judet = parts; // Folosim prima parte pentru interogări
    let judetParam =
      judet.charAt(0).toUpperCase() + judet?.slice(1).toLowerCase();

    // Interoghează Firestore (sau orice altă bază de date) folosind 'judetParam'
    localitati = await handleQueryFirestoreSubcollection(
      "Localitati",
      "judet",
      judetParam
    );
    console.log("judet...alta...", localitati);
    // query zone
    // if (parts[1]) {
    //   let localitateParam =
    //     parts[1].charAt(0).toUpperCase() + parts[1].slice(1).toLowerCase();
    //   firme = await handleQueryFirestore(
    //     "Firme",
    //     "localitate",
    //     localitateParam
    //   );
    // } else {
    firme = await handleQueryFirestore("Firme", "judet", judetParam);
    // }
    // query zone

    let firms = await transferaImagini(firme);
    console.log("judetParam....", searchParams);
    let firmeFinal = [];
    if (searchParams) {
      firmeFinal = await filtrareOferte(firms, searchParams);
    } else {
      firmeFinal = [...firms];
    }

    data = { localitati, firms: firmeFinal };
  } catch (error) {
    console.error("Failed to fetch data....:", error);
    return {
      props: {
        error: "Failed to load data.",
      },
    };
  }
  return data; // Datele vor fi disponibile ca props în componentă
}

const index = async ({ params, searchParams }) => {
  let parts = params.id;
  let judet = parts; // Folosim prima parte pentru interogări
  if (judet === "favicon.ico") {
    return null; // Returnează null sau orice alt component care indică că pagina nu trebuie să proceseze acest id.
  }
  console.log("judet...", judet);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `Specialisti In Peisagistica Si Gradinarit  ${judet}`,
    // image: product.image,
    description:
      "Aici vei gasi firme seriose, care iti vor amenaja spatiul verde rezidential sau comercial asa cum ti l-ai dorit intotdeauna. Vezi firme acum!",
  };
  const data = await getServerData(params, searchParams.slug);

  console.log("judete....firms...", data.firms);

  if (!data.firms) {
    notFound();
  }

  return (
    <>
      {/* Add JSON-LD to your page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* ... */}

      <Judete
        data={data}
        judet={judet}
        params={params}
        searchParams={searchParams.slug}
      />
    </>
  );
};

// ES LINT COMAND npx eslint --fix D:\NextJs\Portal\Portal\functions

export default dynamic(() => Promise.resolve(index), { ssr: false });
