// "use client";

import { Provider } from "react-redux";
import { store } from "../store/store";
// import ScrollToTop from "@/components/common/ScrollTop";
import "../public/assets/scss/index.scss";
import { Nunito } from "next/font/google";
import CookieBanner from "@/components/Cookies/CookieBanner";
// import { AuthProvider } from "@/context/AuthContext";
// import { LoadScript } from "@react-google-maps/api";

export const metadata = {
  title: {
    default: "Portal clinici",
    template: "%s - Portal Clinici",
  },
  description: "Descriere din root layout",
  openGraph: {
    title: "Portal clinici",
    description: "%s - Portal Clinici",
    url: "https://nextjs.org/",
    siteName: "Nume site",
    images: [
      {
        url: "https://nextjs.org/og.png",
        width: 800,
        height: 600,
      },
    ],
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  applicationName: "Portalul tau",
  authors: [{ name: "Pro Web" }],
  generator: "Next.js",
  keywords: ["Portal", "Clinici"],
  referrer: "origin-when-cross-origin",
  creator: "Pro web",
  publisher: "Pro web",
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_SITE_URL}/`),
  manifest: `${process.env.NEXT_PUBLIC_SITE_URL}/manifest.json`,
};

// If loading a variable font, you don't need to specify the font weight
const nunito = Nunito({
  weight: ["200", "300", "400", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const libraries = ["places"];
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="./favicon.ico" />
      </head>
      <body className={nunito.className}>
        {/* <LoadScript
          googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
          libraries={libraries}
        > */}
        {/* <AuthProvider> */}
        {children}
        {/* </AuthProvider> */}
        {/* </LoadScript> */}
        {/* <ScrollToTop /> */}
      </body>
    </html>
  );
}
