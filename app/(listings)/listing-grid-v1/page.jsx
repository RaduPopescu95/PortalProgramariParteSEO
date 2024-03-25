import dynamic from "next/dynamic";
import GridV1 from "@/components/listing-grid/grid-v1";

export const metadata = {
  title: 'Titlu',
  description:
    'Descriere',
}

const index = () => {
  return (
    <>
      <GridV1 />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
