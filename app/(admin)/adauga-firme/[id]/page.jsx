import dynamic from "next/dynamic";
import AdaugaFirme from "@/components/dashboard/adauga-firme";

export const metadata = {
  title: "Adauga Firme",
  description: "Adauga Firme",
};

const index = () => {
  return (
    <>
      <AdaugaFirme />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
