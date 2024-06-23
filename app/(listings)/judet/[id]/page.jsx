import dynamic from "next/dynamic";
import Judete from "../../../../components/judete";
import {
  handleQueryFirestore,
  handleQueryFirestoreSubcollection,
} from "@/utils/firestoreUtils";
import { fetchJudeteParams } from "@/utils/localProjectlUtils";

export const revalidate = 60; // revalidate at most every minute , hour at 3600

export async function generateStaticParams() {
  let combinatii = await fetchJudeteParams();
  console.log("combinatii...", combinatii);
  return combinatii.map((judet) => ({
    id: judet,
  }));
}

export async function generateMetadata({ params, searchParams }, parent) {
  // read route params
  let parts = params.id.split("-"); // Împărțim ID-ul în părți bazat pe separatorul '-'
  let judet = parts[0]; // Folosim prima parte pentru interogări
  let judetParam =
    judet.charAt(0).toUpperCase() + judet?.slice(1).toLowerCase();
  console.log("judetparam...", judetParam);
  return {
    title: `Specialisti In Peisagistica Si Gradinarit  ${judetParam}`,
    description: `Aici vei gasi firme seriose, care iti vor amenaja spatiul verde rezidential sau comercial asa cum ti l-ai dorit intotdeauna. Vezi firme acum!`,
    openGraph: {
      title: `Specialisti In Peisagistica Si Gradinarit  ${judetParam}`,
      description: `Aici vei gasi firme seriose, care iti vor amenaja spatiul verde rezidential sau comercial asa cum ti l-ai dorit intotdeauna. Vezi firme acum!`,
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/${judet}`,
    },
    manifest: `${process.env.NEXT_PUBLIC_SITE_URL}/manifest.json`,
    robots: {
      index: false,
      follow: false,
    },
  };
}

const index = async ({ params }) => {
  let parts = params.id.split("-"); // Împărțim ID-ul în părți bazat pe separatorul '-'
  let judet = parts[0]; // Folosim prima parte pentru interogări
  console.log("judet...", judet);
  return (
    <>
      <Judete judet={judet} params={params} />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
