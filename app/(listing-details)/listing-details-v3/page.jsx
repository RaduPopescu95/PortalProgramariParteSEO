import dynamic from "next/dynamic";
import ListingDetailsV3 from "@/components/listing-details-v3";

export const metadata = {
  title: 'titlu',
  description:
    'descriere',
}

const index = () => {
  return (
    <>
      <ListingDetailsV3 />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
