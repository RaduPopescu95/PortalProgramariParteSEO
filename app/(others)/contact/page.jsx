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
    canonical: `https://www.portal.ro/contact`,
  },
  manifest: "https://portal.ro/manifest.json",
  robots: {
    index: false,
    follow: false,
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
