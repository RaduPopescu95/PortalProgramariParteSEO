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

const index = async ({ params }) => {
  return (
    <>
      <SliderStyle params={params.clinici} />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
