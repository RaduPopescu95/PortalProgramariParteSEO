import dynamic from "next/dynamic";
import ListCereri from "@/components/dashboard/lista-cereri";

export const metadata = {
  title: "Cereri",
  description: "Cereri",
};

const index = () => {
  return (
    <>
      <ListCereri />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
