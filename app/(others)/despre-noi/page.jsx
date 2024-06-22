import dynamic from "next/dynamic";
import AboutUs from "@/components/about-us";

export const metadata = {
  title: "Pagina despre noi",
  description: "Pagina despre noi descriere",
  openGraph: {
    title: "Pagina despre noi",
    description: "Pagina despre noi descriere",
  },
  alternates: {
    canonical: `https://www.portal.ro/despre-noi`,
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
      <AboutUs />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
