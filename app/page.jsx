import Wrapper from "@/components/layout/Wrapper";
import HomeMain from "./(homes)/home-page/page";

export const metadata = {
  title: "Amenajari Gradini – Amenajari Spatii Verzi – Peisagisti",
  description:
    "Cauti o firma de amenajari gradini care sa amenajeze spatiu tau residential sau sediul companiei tale? Vezi specialistii in amenajari spatii verzi de pe portal",
  openGraph: {
    title: "Amenajari Gradini – Amenajari Spatii Verzi – Peisagisti",
    description:
      "Cauti o firma de amenajari gradini care sa amenajeze spatiu tau residential sau sediul companiei tale? Vezi specialistii in amenajari spatii verzi de pe portal",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/`,
  },
  manifest: `${process.env.NEXT_PUBLIC_SITE_URL}/manifest.json`,
  robots: {
    index: true,
    follow: true,
  },
};

export const revalidate = 60; // revalidate at most every minute , hour at 3600

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Amenajari Gradini – Amenajari Spatii Verzi – Peisagisti",
    // image: product.image,
    description:
      "Cauti o firma de amenajari gradini care sa amenajeze spatiu tau residential sau sediul companiei tale? Vezi specialistii in amenajari spatii verzi de pe portal",
  };
  return (
    <>
      <section>
        {/* Add JSON-LD to your page */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* ... */}
      </section>
      <Wrapper>
        <HomeMain />
      </Wrapper>
    </>
  );
}
