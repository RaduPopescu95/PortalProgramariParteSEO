import dynamic from "next/dynamic";
import Judete from "../../../components/judete";

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
