import dynamic from "next/dynamic";
import InscrieClinica from "@/components/inscrie-clinica";

export const metadata = {
  title: "InscrieClinica",
  description: "InscrieClinica",
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
      <InscrieClinica />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
