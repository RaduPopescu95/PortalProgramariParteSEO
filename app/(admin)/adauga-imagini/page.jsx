import dynamic from "next/dynamic";
import AdaugaImagini from "@/components/dashboard/adauga-imagini";

export const metadata = {
  title: "Adauga statie ITP || FindHouse - Real Estate React Template",
  description: "FindHouse - Real Estate React Template",
};

const index = () => {
  return (
    <>
      <AdaugaImagini />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
