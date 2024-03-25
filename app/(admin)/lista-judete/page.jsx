import dynamic from "next/dynamic";
import Judete from "@/components/dashboard/lista-judete";

export const metadata = {
  title: "Lista - judete",
  description: "Lista - judete",
};

const index = () => {
  return (
    <>
      <Judete />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
