import dynamic from "next/dynamic";
import InscrieClinica from "@/components/inscrie-clinica";

export const metadata = {
  title: "InscrieClinica",
  description: "InscrieClinica",
};

const index = () => {
  return (
    <>
      <InscrieClinica />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
