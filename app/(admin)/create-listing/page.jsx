import dynamic from "next/dynamic";
import CreateListing from "@/components/dashboard/create-listing";

export const metadata = {
  title: "Adauga statie ITP || FindHouse - Real Estate React Template",
  description: "FindHouse - Real Estate React Template",
};

const index = () => {
  return (
    <>
      <CreateListing />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
