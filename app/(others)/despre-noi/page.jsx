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
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/despre-noi`,
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
      <AboutUs />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
