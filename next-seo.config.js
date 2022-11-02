/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  defaultTitle: "BJK OG Generator",
  description: "OG Image Generator (using Vercel OG)",
  canonical: "https://og-v2.brian.dev",
  openGraph: {
    url: "https://og-v2.brian.dev",
    title: "BJK OG Generator",
    description: "OG Image Generator (using Vercel OG)",
    type: "website",
    images: [
      {
        url: "https://og-v2.brian.dev/api/og?title=YehezGun%20OG&desc=OG%20Image%20Generator%20(using%20Vercel%20OG)&imgUrl=https://www.saashub.com/images/app/service_logos/61/ad5f7085bd71/large.png?1587515045&siteName=og-v2.brian.dev",
        alt: "og-v2.brian.dev og-image",
        width: 800,
        height: 600,
      },
    ],
    site_name: "bjk-og",
  },
  twitter: {
    handle: "@bketelsen",
    site: "@bketelsen",
    cardType: "summary_large_image",
  },
  additionalLinkTags: [
    {
      rel: "icon",
      href: "https://assets.vercel.com/image/upload/v1607554385/repositories/next-js/next-logo.png",
    },
  ],
};

export default defaultSEOConfig;
