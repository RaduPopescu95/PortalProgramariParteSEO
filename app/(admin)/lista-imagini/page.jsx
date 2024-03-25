import dynamic from "next/dynamic";
import Imagini from "@/components/dashboard/lista-imagini";

export const metadata = {
  title: "Lista Imagini",
  description: "Lista Imagini",
};

const index = () => {
  return (
    <>
      <Imagini />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
