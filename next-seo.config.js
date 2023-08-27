/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  defaultTitle: "bigpod OG Generator",
  description: "OG Image Generator (using Vercel OG)",
  canonical: "https://og.bigpod.si",
  openGraph: {
    url: "https://og.bigpod.si",
    title: "bigpod OG Generator",
    description: "OG Image Generator (using Vercel OG)",
    type: "website",
    images: [
      {
        url: "https://og.bigpod.si/api/og?title=YehezGun%20OG&desc=OG%20Image%20Generator%20(using%20Vercel%20OG)&imgUrl=https://www.saashub.com/images/app/service_logos/61/ad5f7085bd71/large.png?1587515045&siteName=og-v2.brian.dev",
        alt: "og.bigpod.si og-image",
        width: 800,
        height: 600,
      },
    ],
    site_name: "bigpod-og",
  },
  twitter: {
    handle: "@bigpod98",
    site: "@bigpod98",
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
