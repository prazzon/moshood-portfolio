import { siteConfig } from "@/constants";
import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Basic Meta Tags */}
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        {/* Favicon and Icons */}
        <link rel="icon" href="/favicon.svg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.svg" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.svg" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.svg" />

        {/* Theme and App Configuration */}
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="application-name" content={siteConfig.name} />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="apple-mobile-web-app-title" content={siteConfig.name} />

        {/* DNS Prefetch for Performance */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//res.cloudinary.com" />

        {/* Security Headers */}
        <meta name="referrer" content="origin-when-cross-origin" />

        {/* Default Global Meta (will be overridden by page-specific SEO) */}
        <meta name="description" content={siteConfig.description} />
        <meta name="keywords" content={siteConfig.keywords.join(", ")} />
        <meta name="author" content={siteConfig.author.name} />

        {/* Default Open Graph */}
        <meta property="og:site_name" content={siteConfig.name} />
        <meta property="og:locale" content="en_US" />

        {/* Default Twitter Card */}
        {/* <meta name="twitter:site" content={siteConfig.author.twitter} /> */}
        {/* <meta name="twitter:creator" content={siteConfig.author.twitter} /> */}
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
