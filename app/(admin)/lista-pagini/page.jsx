import dynamic from "next/dynamic";
import ListaPagini from "@/components/dashboard/lista-pagini";

export const metadata = {
  title: "Lista pagini",
  description: "Lista pagini",
};

const index = () => {
  return (
    <>
      <ListaPagini />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
