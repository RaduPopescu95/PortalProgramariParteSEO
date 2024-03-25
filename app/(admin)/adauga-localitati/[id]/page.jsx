import dynamic from "next/dynamic";
import AdaugaLocalitati from "@/components/dashboard/adauga-localitati";

export const metadata = {
  title: "Adauga-localitati",
  description: "Adauga-localitati",
};

const index = () => {
  return (
    <>
      <AdaugaLocalitati />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
