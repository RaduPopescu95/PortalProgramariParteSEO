import agenceis from "@/data/agency";
import AgencyDetails from "@/components/agency-details";
import { handleQueryFirestore } from "@/utils/firestoreUtils";
import { unstable_noStore as noStore } from "next/cache";

export async function getServerData(id) {
  let data = [];
  try {
    // Interoghează Firestore (sau orice altă bază de date) folosind 'locationPart'
    data = await handleQueryFirestore("Firme", "id", id);
  } catch (error) {
    console.error("Failed to fetch firma:", error);
    return {
      props: {
        error: "Failed to load data.",
      },
    };
  }
  return data[0]; // Data will be available as props in your component
}

const AgencyDetailsDynamic = async ({ params }) => {
  noStore();
  const id = params.id;
  const parts = id.split("-");
  const number = parseFloat(parts[0]);

  const firma = await getServerData(number);
  return (
    <>
      <AgencyDetails firma={firma} />
    </>
  );
};

export default AgencyDetailsDynamic;
