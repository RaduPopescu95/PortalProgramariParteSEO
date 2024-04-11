import dynamic from "next/dynamic";
import SliderStyle from "@/components/listing-style/slider-style";

export const metadata = {
  title: 'Judete',
  description:
    'Judete',
}

const index = () => {
  return (
    <>
      <SliderStyle />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
