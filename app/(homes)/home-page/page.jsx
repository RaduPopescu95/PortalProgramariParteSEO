import dynamic from "next/dynamic";
import HomeMain from "@/components/home-4";

// export const metadata = {
//   title: "HomePage",
//   description: "HomePage",
// };

const index = () => {
  return (
    <>
      <HomeMain />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
