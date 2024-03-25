import dynamic from "next/dynamic";
import AdaugaImagini from "@/components/dashboard/adauga-imagini";

export const metadata = {
  title: "titlu",
  description: "descriere",
};

const index = () => {
  return (
    <>
      <AdaugaImagini />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
