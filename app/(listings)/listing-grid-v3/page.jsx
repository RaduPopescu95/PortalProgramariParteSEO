import dynamic from "next/dynamic";
import GridV3 from "@/components/listing-grid/grid-v3";

export const metadata = {
  title: 'Titlu',
  description:
    'Descriere',
}

const index = () => {
  return (
    <>
      <GridV3 />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
