import dynamic from "next/dynamic";
import Contact from "@/components/contact";

export const metadata = {
  title: "Pagina contact",
  description: "Pagina contact descriere",
  openGraph: {
    title: "Pagina contact",
    description: "Pagina contact descriere",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/contact`,
  },
  manifest: `${process.env.NEXT_PUBLIC_SITE_URL}/manifest.json`,
  robots: {
    index: true,
    follow: true,
  },
};

const index = () => {
  return (
    <>
      <Contact />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
