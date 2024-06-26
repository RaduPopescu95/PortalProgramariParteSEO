export default function robots() {
  return {
    rules: {
      userAgent: "*",
      Disallow: "/",
    },
    sitemap: `${process.env.NEXT_PUBLIC_SITE_URL}/sitemap.xml`,
  };
}
