import dynamic from "next/dynamic";
import AdaugaPagini from "@/components/dashboard/adauga-pagini";

export const metadata = {
  title: "Adauga Pagini",
  description: "Adauga Pagini",
};

const index = () => {
  return (
    <>
      <AdaugaPagini />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
