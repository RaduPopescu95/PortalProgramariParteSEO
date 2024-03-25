import dynamic from "next/dynamic";
import HomeMain from "@/components/home-7";

export const metadata = {
  title: "titlu",
  description: "descriere",
};

const index = () => {
  return (
    <>
      <HomeMain />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
