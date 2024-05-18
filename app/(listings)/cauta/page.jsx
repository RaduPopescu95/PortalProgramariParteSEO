import dynamic from "next/dynamic";
import SliderStyle from "@/components/listing-style/slider-style";
import { unstable_noStore as noStore } from "next/cache";
import {
  handleGetFirestore,
  handleQueryDoubleParam,
  handleQueryFirestore,
} from "@/utils/firestoreUtils";

export const metadata = {
  title: "Judete",
  description: "Judete",
};

const index = async ({ params }) => {
  return (
    <>
      <SliderStyle />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
