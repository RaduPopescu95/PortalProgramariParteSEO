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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `Amenajari Gradini – Amenajari Spatii Verzi – Peisagisti`,
    // image: product.image,
    description:
      "Cauti o firma de amenajari gradini care sa amenajeze spatiu tau residential sau sediul companiei tale? Vezi specialistii in amenajari spatii verzi de pe portal.",
  };

  return (
    <>
      {/* Add JSON-LD to your page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <AboutUs />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
