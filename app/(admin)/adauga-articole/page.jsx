import dynamic from "next/dynamic";
import AdaugaArticole from "@/components/dashboard/adauga-articole";

export const metadata = {
  title: "Adauga Articole",
  description: "Adauga Articole",
};

const index = () => {
  return (
    <>
      <AdaugaArticole />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
