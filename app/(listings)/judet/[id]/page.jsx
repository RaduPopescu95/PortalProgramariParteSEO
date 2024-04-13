import dynamic from "next/dynamic";
import Judete from "../../../../components/judete";
import { handleQueryFirestoreSubcollection } from "@/utils/firestoreUtils";

export const metadata = {
  title: "Judete",
  description: "Judete",
};

export async function getServerData(params) {
  let data = [];
  try {
    let judet = params.id;
    let locationPart =
      judet.charAt(0).toUpperCase() + judet.slice(1).toLowerCase();

    // Interoghează Firestore (sau orice altă bază de date) folosind 'locationPart'
    data = await handleQueryFirestoreSubcollection(
      "Localitati",
      "judet",
      locationPart
    );
  } catch (error) {
    console.error("Failed to fetch locations:", error);
    return {
      props: {
        error: "Failed to load data.",
      },
    };
  }
  return data; // Data will be available as props in your component
}

const index = async ({ params: id }) => {
  const localitati = await getServerData(id);
  return (
    <>
      <Judete localitati={localitati} />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
