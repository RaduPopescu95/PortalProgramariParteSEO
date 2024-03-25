import dynamic from "next/dynamic";
import AdaugaJudete from "@/components/dashboard/adauga-judete";

export const metadata = {
  title: "Adauga-judete",
  description: "Adauga-judete",
};

const index = () => {
  return (
    <>
      <AdaugaJudete />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
