import dynamic from "next/dynamic";
import Categorii from "@/components/dashboard/categorii";

export const metadata = {
  title: "Lista-Categorii",
  description: "Lista-Categorii",
};

const index = () => {
  return (
    <>
      <Categorii />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
