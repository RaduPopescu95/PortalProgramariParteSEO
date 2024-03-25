import dynamic from "next/dynamic";
import AdaugaLink from "@/components/dashboard/adauga-link";

export const metadata = {
  title: "Adauga-links",
  description: "Adauga-links",
};

const index = () => {
  return (
    <>
      <AdaugaLink />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
