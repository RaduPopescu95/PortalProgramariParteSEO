import dynamic from "next/dynamic";
import ListingDetailsV2 from "@/components/listing-details-v2";

export const metadata = {
  title: 'titlu',
  description:
    'descreire',
}

const index = () => {
  return (
    <>
      <ListingDetailsV2 />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
