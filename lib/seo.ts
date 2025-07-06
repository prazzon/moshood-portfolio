import { PageSEO, defaultSEO, siteConfig } from "@/constants";

/**
 * Generates canonical URL for a given path
 */
export function getCanonicalUrl(path: string = ""): string {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.url}${cleanPath}`;
}

/**
 * Generates Open Graph image URL with proper dimensions
 */
export function getOgImageUrl(imagePath: string): string {
  if (imagePath.startsWith("http")) {
    return imagePath;
  }
  return `${siteConfig.url}${imagePath}`;
}

/**
 * Merges page-specific SEO with defaults
 */
export function mergeSEO(pageSEO: Partial<PageSEO>): PageSEO {
  return {
    ...defaultSEO,
    ...pageSEO,
    keywords: pageSEO.keywords || defaultSEO.keywords,
  };
}

/**
 * Generates structured data for Person schema
 */
export function generatePersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: "Filmmaker and Director",
    description: siteConfig.description,
    url: siteConfig.url,
    image: getOgImageUrl(siteConfig.ogImage),
    worksFor: {
      "@type": "Organization",
      name: siteConfig.company,
    },
    address: {
      "@type": "Place",
      name: siteConfig.location,
    },
    //  sameAs: [
    //    `https://twitter.com/${siteConfig.author.twitter.replace("@", "")}`,
    //    `https://linkedin.com/in/${siteConfig.author.linkedin}`,
    //  ],
    knowsAbout: [
      "Film Direction",
      "Executive Production",
      "Cinematography",
      "Storytelling",
      "Magical Realism",
      "African Cinema",
    ],
  };
}

/**
 * Generates structured data for CreativeWork schema
 */
export function generateCreativeWorkSchema(work: {
  name: string;
  description: string;
  dateCreated: string;
  genre?: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: work.name,
    description: work.description,
    dateCreated: work.dateCreated,
    genre: work.genre || "Film",
    image: work.image ? getOgImageUrl(work.image) : undefined,
    creator: {
      "@type": "Person",
      name: siteConfig.name,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.company,
    },
  };
}

/**
 * Generates structured data for Organization schema
 */
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.company,
    url: siteConfig.url,
    founder: {
      "@type": "Person",
      name: siteConfig.name,
    },
    address: {
      "@type": "Place",
      name: siteConfig.location,
    },
    description:
      "Film production company specializing in distinctive storytelling and magical realism",
    industry: "Film Production",
    foundingLocation: {
      "@type": "Place",
      name: siteConfig.location,
    },
  };
}

/**
 * Generates structured data for WebSite schema
 */
export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    author: {
      "@type": "Person",
      name: siteConfig.name,
    },
    inLanguage: "en-US",
    copyrightHolder: {
      "@type": "Person",
      name: siteConfig.name,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteConfig.url}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

/**
 * Generates structured data for BreadcrumbList schema
 */
export function generateBreadcrumbSchema(
  breadcrumbs: Array<{ name: string; url: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  };
}

/**
 * Formats keywords for meta tag
 */
export function formatKeywords(keywords: string[]): string {
  return keywords.join(", ");
}

/**
 * Truncates description to optimal length for meta description
 */
export function truncateDescription(
  description: string,
  maxLength: number = 160,
): string {
  if (description.length <= maxLength) {
    return description;
  }

  const truncated = description.substring(0, maxLength);
  const lastSpace = truncated.lastIndexOf(" ");

  return lastSpace > 0
    ? truncated.substring(0, lastSpace) + "..."
    : truncated + "...";
}
