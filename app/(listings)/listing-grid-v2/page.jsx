import dynamic from "next/dynamic";
import GridV2 from "@/components/listing-grid/grid-v2";

export const metadata = {
  title: 'Titlu',
  description:
    'Descriere',
}

const index = () => {
  return (
    <>
      <GridV2 />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
