import { siteConfig } from "@/constants";
import {
  formatKeywords,
  getCanonicalUrl,
  getOgImageUrl,
  mergeSEO,
  truncateDescription,
} from "@/lib/seo";
import Head from "next/head";
import { useRouter } from "next/router";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: "website" | "article" | "profile";
  canonicalUrl?: string;
  noindex?: boolean;
  structuredData?: object;
}

export default function SEO({
  title,
  description,
  keywords,
  ogImage,
  ogType = "website",
  canonicalUrl,
  noindex = false,
  structuredData,
}: SEOProps) {
  const router = useRouter();

  // Merge with defaults
  const seoData = mergeSEO({
    title,
    description,
    keywords,
    ogImage,
    ogType,
    canonicalUrl,
    noindex,
    structuredData,
  });

  // Generate URLs
  const currentUrl = canonicalUrl || getCanonicalUrl(router.asPath);
  const imageUrl = getOgImageUrl(seoData.ogImage || siteConfig.ogImage);

  // Optimize description length
  const optimizedDescription = truncateDescription(seoData.description);

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{seoData.title}</title>
      <meta name="description" content={optimizedDescription} />
      {seoData.keywords && (
        <meta name="keywords" content={formatKeywords(seoData.keywords)} />
      )}
      <meta name="author" content={siteConfig.author.name} />
      <link rel="canonical" href={currentUrl} />

      {/* Robots */}
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      {/* Open Graph */}
      <meta property="og:type" content={seoData.ogType} />
      <meta property="og:title" content={seoData.title} />
      <meta property="og:description" content={optimizedDescription} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:alt" content={seoData.title} />
      <meta
        property="og:image:width"
        content={siteConfig.ogImageDimensions.width.toString()}
      />
      <meta
        property="og:image:height"
        content={siteConfig.ogImageDimensions.height.toString()}
      />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:site_name" content={siteConfig.name} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      {/* <meta name="twitter:site" content={siteConfig.author.twitter} /> */}
      {/* <meta name="twitter:creator" content={siteConfig.author.twitter} /> */}
      <meta name="twitter:title" content={seoData.title} />
      <meta name="twitter:description" content={optimizedDescription} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:image:alt" content={seoData.title} />
      <meta
        name="twitter:image:width"
        content={siteConfig.twitterImageDimensions.width.toString()}
      />
      <meta
        name="twitter:image:height"
        content={siteConfig.twitterImageDimensions.height.toString()}
      />

      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#000000" />
      <meta name="msapplication-TileColor" content="#000000" />

      {/* Structured Data */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      )}
    </Head>
  );
}
