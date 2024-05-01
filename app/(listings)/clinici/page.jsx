import dynamic from "next/dynamic";
import SliderStyle from "@/components/listing-style/slider-style";
import { handleGetFirestore } from "@/utils/firestoreUtils";

export const metadata = {
  title: "Judete",
  description: "Judete",
};

export async function getServerData() {
  let data = {};
  try {
    // Interoghează Firestore (sau orice altă bază de date) folosind 'locationPart'
    let judete = await handleGetFirestore("Judete");
    let categorii = await handleGetFirestore("Categorii");
    data = { judete, categorii };
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

const index = async () => {
  const data = await getServerData();
  return (
    <>
      <SliderStyle judete={data.judete} categorii={data.categorii} />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
