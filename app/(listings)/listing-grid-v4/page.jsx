import dynamic from "next/dynamic";
import GridV4 from "@/components/listing-grid/grid-v4";

export const metadata = {
  title: 'Titlu',
  description:
    'Desciere',
}

const index = () => {
  return (
    <>
      <GridV4 />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
