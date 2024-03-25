import dynamic from "next/dynamic";
import ParallaxStyle from "@/components/listing-style/parallax-style";

export const metadata = {
  title: 'titlu',
  description:
    'titlu',
}

const index = () => {
  return (
    <>
      <ParallaxStyle />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
