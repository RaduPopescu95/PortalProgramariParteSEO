import dynamic from "next/dynamic";
import ListingDetailsV4 from "@/components/listing-details-v4";

export const metadata = {
  title: 'titlu',
  description:
    'descriere',
}

const index = () => {
  return (
    <>
      <ListingDetailsV4 />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
