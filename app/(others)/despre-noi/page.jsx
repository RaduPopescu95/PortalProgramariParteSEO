import dynamic from "next/dynamic";
import AboutUs from "@/components/about-us";

export const metadata = {
  title: 'Despre noi',
  description:
    'Despre noi descrire',
}

const index = () => {
  return (
    <>
      <AboutUs />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
