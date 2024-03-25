import dynamic from "next/dynamic";
import Articole from "@/components/dashboard/lista-articole";

export const metadata = {
  title: "Lista Articole",
  description: "Lista Articole",
};

const index = () => {
  return (
    <>
      <Articole />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
