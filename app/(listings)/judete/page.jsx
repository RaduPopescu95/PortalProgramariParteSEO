import dynamic from "next/dynamic";
import Judete from "../../../components/listing-style/judete";

export const metadata = {
  title: 'Judete',
  description:
    'Judete',
}

const index = () => {
  return (
    <>
      <Judete />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
