import dynamic from "next/dynamic";
import Login from "@/components/login";

export const metadata = {
  title: 'titlu',
  description:
    'titlu',
}

const index = () => {
  return (
    <>
      <Login />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
