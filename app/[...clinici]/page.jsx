import dynamic from "next/dynamic";
import Categorii from "../../components/categorii";
import SliderStyle from "@/components/listing-style/slider-style";
import {
  handleGetFirestore,
  handleQueryFirestore,
  handleQueryFirestoreSubcollection,
} from "@/utils/firestoreUtils";
import { fetchFirme } from "@/utils/localProjectlUtils";

export async function generateMetadata({ params, searchParams }, parent) {
  // read route params
  const id = params.id;

  // fetch data
  let firme = await fetchFirme(params);

  if (Array.isArray(params.clinici)) {
    console.log("firme....just one...", firme);
    return {
      title: `${firme[0].metaTitle}`,
      description: `${firme[0].metaDescription}`,
    };
  } else {
    console.log("firme....just one...many...", firme);
    return {
      title: `titlu test`,
      description: `descriere test`,
    };
  }
  // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || [];
}

// export async function getServerData(params) {
//   let data = {};
//   let localitati = [];
//   let firme = [];
//   try {
//     let parts = params.id.split("-"); // Împărțim ID-ul în părți bazat pe separatorul '-'
//     let judet = parts[0]; // Folosim prima parte pentru interogări
//     let judetParam =
//       judet.charAt(0).toUpperCase() + judet.slice(1).toLowerCase();

//     // Interoghează Firestore (sau orice altă bază de date) folosind 'judetParam'
//     localitati = await handleQueryFirestoreSubcollection(
//       "Localitati",
//       "judet",
//       judetParam
//     );

//     // query zone
//     if (parts[1]) {
//       let localitateParam =
//         parts[1].charAt(0).toUpperCase() + parts[1].slice(1).toLowerCase();
//       firme = await handleQueryFirestore(
//         "Firme",
//         "localitate",
//         localitateParam
//       );
//     } else {
//       firme = await handleQueryFirestore("Firme", "judet", judetParam);
//     }
//     // query zone

//     data = { localitati, firme };
//   } catch (error) {
//     console.error("Failed to fetch data....:", error);
//     return {
//       props: {
//         error: "Failed to load data.",
//       },
//     };
//   }
//   console.log("data returned...", data.firme);
//   return data; // Datele vor fi disponibile ca props în componentă
// }

// export async function getServerData() {
//   let data = {};
//   try {
//     // Interoghează Firestore (sau orice altă bază de date) folosind 'locationPart'
//     let judete = await handleGetFirestore("Judete");
//     let categorii = await handleGetFirestore("Categorii");
//     data = { judete, categorii };
//   } catch (error) {
//     console.error("Failed to fetch locations:", error);
//     return {
//       props: {
//         error: "Failed to load data.",
//       },
//     };
//   }
//   return data; // Data will be available as props in your component
// }

const index = async ({ params }) => {
  // // let parts = params.id.split("-"); // Împărțim ID-ul în părți bazat pe separatorul '-'
  // // let judet = parts[0]; // Folosim prima parte pentru interogări
  // // const data = await getServerData(params);
  // const data = await getServerData();

  return (
    <>
      <SliderStyle params={params.clinici} />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
