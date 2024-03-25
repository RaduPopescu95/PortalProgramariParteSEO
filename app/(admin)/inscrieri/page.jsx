import dynamic from "next/dynamic";
import Inscrieri from "@/components/dashboard/inscrieri";

export const metadata = {
  title: "Inscrieri",
  description: "Inscrieri",
};

const index = () => {
  return (
    <>
      <Inscrieri />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
