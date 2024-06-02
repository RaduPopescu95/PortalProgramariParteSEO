// "use client";

import { Provider } from "react-redux";
import { store } from "../store/store";
// import ScrollToTop from "@/components/common/ScrollTop";
import "../public/assets/scss/index.scss";
import { Inter } from "next/font/google";
// import { AuthProvider } from "@/context/AuthContext";
// import { LoadScript } from "@react-google-maps/api";

export const metadata = {
  title: {
    default: "Portal clinici",
    template: "%s - Portal Clinici",
  },
  description: "Descriere din root layout",
};

export default function RootLayout({ children }) {
  const libraries = ["places"];
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Nunito:400,400i,500,600,700&display=swap"
        />
        <link rel="icon" href="./favicon.ico" />
        <meta name="robots" content="noindex, nofollow" />
      </head>
      <body>
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
