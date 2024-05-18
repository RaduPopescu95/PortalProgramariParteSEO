import dynamic from "next/dynamic";
import Judete from "../../../../components/judete";
import {
  handleQueryFirestore,
  handleQueryFirestoreSubcollection,
} from "@/utils/firestoreUtils";
import { unstable_noStore as noStore } from "next/cache";

export const metadata = {
  title: "Judete",
  description: "Judete",
};

const index = async ({ params }) => {
  noStore();
  let parts = params.id.split("-"); // Împărțim ID-ul în părți bazat pe separatorul '-'
  let judet = parts[0]; // Folosim prima parte pentru interogări

  return (
    <>
      <Judete judet={judet} params={params} />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
