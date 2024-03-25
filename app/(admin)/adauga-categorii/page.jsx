import dynamic from "next/dynamic";
import AdaugaCategorii from "@/components/dashboard/adauga-categorii";

export const metadata = {
  title: "Adauga Categorii",
  description: "Adauga Categorii",
};

const index = () => {
  return (
    <>
      <AdaugaCategorii />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
