import dynamic from "next/dynamic";
import Link from "@/components/dashboard/lista-links";

export const metadata = {
  title: "Lista-links",
  description: "Lista-links",
};

const index = () => {
  return (
    <>
      <Link />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
