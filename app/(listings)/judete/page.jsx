import dynamic from "next/dynamic";
import Judete from "@/components/listing-style/judete";

export const metadata = {
  title: 'Listing - Slider Style || FindHouse - Real Estate React Template',
  description:
    'FindHouse - Real Estate React Template',
}

const index = () => {
  return (
    <>
      <Judete />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
