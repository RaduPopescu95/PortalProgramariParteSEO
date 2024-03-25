import dynamic from "next/dynamic";
import Localitati from "@/components/dashboard/lista-localitati";

export const metadata = {
  title: "Lista-localitati",
  description: "Lista-localitati",
};

const index = () => {
  return (
    <>
      <Localitati />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
