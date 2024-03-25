import dynamic from "next/dynamic";
import Membership from "@/components/membership";

export const metadata = {
  title: 'titlu',
  description:
    'titlu',
}

const index = () => {
  return (
    <>
      <Membership />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
