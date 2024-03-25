import dynamic from "next/dynamic";
import Mesaje from "@/components/dashboard/mesaje";

export const metadata = {
  title: "Mesaje",
  description: "Mesaje",
};

const index = () => {
  return (
    <>
      <Mesaje />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
