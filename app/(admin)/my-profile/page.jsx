import dynamic from "next/dynamic";
import MyProfile from "@/components/dashboard/my-profile";

export const metadata = {
  title: 'titlu',
  description:
    'descriere',
}

const index = () => {
  return (
    <>
      <MyProfile />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
