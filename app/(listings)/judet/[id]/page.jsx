import dynamic from "next/dynamic";
import Judete from "../../../../components/judete";
import {
  handleQueryFirestore,
  handleQueryFirestoreSubcollection,
} from "@/utils/firestoreUtils";

export const metadata = {
  title: "Judete",
  description: "Judete",
};

export async function getServerData(params) {
  let data = {};
  let localitati = [];
  let firme = [];
  try {
    let parts = params.id.split("-"); // Împărțim ID-ul în părți bazat pe separatorul '-'
    let judet = parts[0]; // Folosim prima parte pentru interogări
    let judetParam =
      judet.charAt(0).toUpperCase() + judet?.slice(1).toLowerCase();

    // Interoghează Firestore (sau orice altă bază de date) folosind 'judetParam'
    localitati = await handleQueryFirestoreSubcollection(
      "Localitati",
      "judet",
      judetParam
    );

    // query zone
    if (parts[1]) {
      let localitateParam =
        parts[1].charAt(0).toUpperCase() + parts[1].slice(1).toLowerCase();
      firme = await handleQueryFirestore(
        "Firme",
        "localitate",
        localitateParam
      );
    } else {
      firme = await handleQueryFirestore("Firme", "judet", judetParam);
    }
    // query zone

    data = { localitati, firme };
  } catch (error) {
    console.error("Failed to fetch data....:", error);
    return {
      props: {
        error: "Failed to load data.",
      },
    };
  }
  console.log("data returned...", data.firme);
  return data; // Datele vor fi disponibile ca props în componentă
}

const index = async ({ params }) => {
  let parts = params.id.split("-"); // Împărțim ID-ul în părți bazat pe separatorul '-'
  let judet = parts[0]; // Folosim prima parte pentru interogări
  const data = await getServerData(params);
  return (
    <>
      <Judete localitati={data.localitati} firme={data.firme} judet={judet} />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
