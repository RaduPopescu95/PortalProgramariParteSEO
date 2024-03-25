import dynamic from "next/dynamic";
import Setari from "@/components/dashboard/setari";

export const metadata = {
  title: "Setari",
  description: "Setari",
};

const index = () => {
  return (
    <>
      <Setari />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
