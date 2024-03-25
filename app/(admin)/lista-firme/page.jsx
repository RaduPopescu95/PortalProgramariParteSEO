import dynamic from "next/dynamic";
import Firme from "@/components/dashboard/lista-firme";

export const metadata = {
  title: "Lista-Firme",
  description: "Lista-Firme",
};

const index = () => {
  return (
    <>
      <Firme />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
