import { MetadataRoute } from "next";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      disallow: "/",
    },
    // sitemap: "https://portal.ro/sitemap.xml",
  };
}
