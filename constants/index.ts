type VideoItem = {
  type: "video";
  src: string;
};

type LinkItem = {
  type: "link";
  href: string;
};

type ItemType = VideoItem | LinkItem | { type: "none" };

export type Item = ItemType & {
  title: string;
  subTitle: string;
  rightText: string;
  image: string;
};

export const filmographyItems: Item[] = [
  {
    title: "Agemo",
    subTitle: "2024",
    rightText: "Director & EP",
    type: "link",
    href: "https://youtu.be/_eNYhwHmeaY?si=NWjBOlE6nKlrrzDc",
    image: "/images/filmography/agemo.png",
  },
  {
    title: "Invest Naija",
    subTitle: "2024",
    rightText: "Director & EP",
    type: "link",
    href: "https://www.youtube.com/watch?v=bs3jOubJ2mQ",
    image: "/images/filmography/invest_9ja.png",
  },
  {
    title: "CTF Trailer",
    subTitle: "2024",
    rightText: "Director & EP",
    type: "video",
    src: "https://res.cloudinary.com/dt5hzczvg/video/upload/v1750765028/jwsg0ct6xwtklxbjhdyl.mp4",
    image: "/images/filmography/ctf.png",
  },
  {
    title: "Plagued",
    subTitle: "2020",
    rightText: "Director & EP",
    type: "video",
    src: "https://res.cloudinary.com/dt5hzczvg/video/upload/v1750765705/xe2uuyxsyggzfoprsedq.mp4",
    image: "/images/filmography/plagued.png",
  },
  {
    title: "South African Love Story | Stretch",
    subTitle: "2019",
    rightText: "Director & EP",
    type: "video",
    src: "https://res.cloudinary.com/dt5hzczvg/video/upload/v1750766564/kbkeguycblpbd0hz6oub.mp4",
    image: "/images/filmography/stretched.png",
  },
  {
    title: "Now",
    subTitle: "2019",
    rightText: "Director & EP",
    type: "video",
    src: "https://res.cloudinary.com/dt5hzczvg/video/upload/v1750766589/ago1twsbwxo6izezuplc.mp4",
    image: "/images/filmography/now.png",
  },
  {
    title: "Part of Me",
    subTitle: "2019",
    rightText: "Director & EP",
    type: "video",
    src: "https://res.cloudinary.com/dt5hzczvg/video/upload/v1750767517/skokpufjeevydoekoqbf.mp4",
    image: "/images/filmography/part_of_me.png",
  },
  {
    title: "The Olympian's Torch",
    subTitle: "2015",
    rightText: "Director & EP",
    type: "link",
    href: "https://youtu.be/XF_TJ4yBJNU",
    image: "/images/filmography/the_olympians_torch.png",
  },
];

export const pressItems: Item[] = [
  {
    title:
      "Related Motions Teases “Agemo” First Look Photos Ahead of 2024 Release",
    subTitle: "2024",
    rightText: "ShockNG",
    type: "link",
    href: "https://shockng.com/agemo-movie-directed-by-moshood-abiola-obatula/",
    image: "/images/press/press-1.png",
  },
  {
    title: "Agemo – dir. Moshood Abiola Obatula",
    subTitle: "2024",
    rightText: "festregards",
    type: "link",
    href: "https://festregards.com/2024/09/18/agemo-dir-moshood-abiola-obatula/",
    image: "/images/press/press-2.png",
  },
  {
    title: "Abiola’s supernatural thriller set for 2024",
    subTitle: "2024",
    rightText: "contentnigeria",
    type: "link",
    href: "https://contentnigeria.net/tag/moshood-abiola-obatula/",
    image: "/images/press/press-3.png",
  },
];

// SEO Configuration
export const siteConfig = {
  name: "Moshood Abiola Obatula",
  title: "Moshood Abiola Obatula - Award-Winning Filmmaker & Director",
  description:
    "Award-winning filmmaker, director, and managing director behind RelatedMotion. Known as 'The Dark Visionary' for his distinctive storytelling style blending magical realism with vibrant cultural motifs.",
  url: "https://directormosh.com",
  ogImage: "/images/biography.png",
  author: {
    name: "Moshood Abiola Obatula",
    //  twitter: "@moshoodobatula", // Update with actual handle
    //  linkedin: "moshood-obatula", // Update with actual handle
  },
  company: "RelatedMotion",
  location: "Lagos, Nigeria",
  keywords: [
    "Moshood Abiola Obatula",
    "filmmaker",
    "director",
    "executive producer",
    "RelatedMotion",
    "Nigerian cinema",
    "African filmmaker",
    "The Dark Visionary",
    "magical realism",
    "film director",
    "cinematography",
    "Lagos filmmaker",
    "Agemo",
    "supernatural thriller",
    "film production",
  ],
  // Social sharing image dimensions (recommended: 1200x630px for OG, 1200x600px for Twitter)
  ogImageDimensions: {
    width: 1200,
    height: 630,
  },
  twitterImageDimensions: {
    width: 1200,
    height: 600,
  },
};

export type PageSEO = {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: "website" | "article" | "profile";
  canonicalUrl?: string;
  noindex?: boolean;
  structuredData?: object;
};

export const defaultSEO: PageSEO = {
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  ogImage: siteConfig.ogImage,
  ogType: "website",
};

// Page-specific SEO configurations
export const pageSEO = {
  home: {
    title: `${siteConfig.name} - Award-Winning Filmmaker & Director`,
    description:
      "Award-winning filmmaker and director Moshood Abiola Obatula, known as 'The Dark Visionary'. Managing Director of RelatedMotion, creating distinctive films with magical realism and cultural depth.",
    keywords: [
      ...siteConfig.keywords,
      "portfolio",
      "home",
      "filmmaker portfolio",
    ],
    ogType: "profile" as const,
  },
  biography: {
    title: `Biography | ${siteConfig.name}`,
    description:
      "Learn about Moshood Abiola Obatula's journey from Lagos to becoming an award-winning filmmaker. Studied at City Varsity University, Johannesburg, and earned the moniker 'The Dark Visionary'.",
    keywords: [
      ...siteConfig.keywords,
      "biography",
      "about",
      "background",
      "City Varsity University",
      "Johannesburg",
    ],
    ogImage: "/images/biography.png",
    ogType: "profile" as const,
  },
  filmography: {
    title: `Filmography | ${siteConfig.name}`,
    description:
      "Explore Moshood Abiola Obatula's complete filmography including Agemo, Invest Naija, CTF Trailer, Plagued, and more. Award-winning films spanning supernatural thrillers to contemporary drama.",
    keywords: [
      ...siteConfig.keywords,
      "filmography",
      "movies",
      "films",
      "Agemo",
      "Invest Naija",
      "Plagued",
      "CTF",
      "Part of Me",
    ],
    ogImage: "/images/filmography.png",
    ogType: "website" as const,
  },
  press: {
    title: `Press & Media | ${siteConfig.name}`,
    description:
      "Media coverage and press features of Moshood Abiola Obatula's work. Recognition from ShockNG, festregards, and other notable media outlets across Africa and beyond.",
    keywords: [
      ...siteConfig.keywords,
      "press",
      "media",
      "news",
      "coverage",
      "recognition",
      "ShockNG",
      "festregards",
    ],
    ogImage: "/images/press.png",
    ogType: "website" as const,
  },
  showreel: {
    title: `Showreel | ${siteConfig.name}`,
    description:
      "Watch Moshood Abiola Obatula's showreel showcasing his unique storytelling style and cinematic flair. A collection of his best work demonstrating his distinctive visual approach.",
    keywords: [
      ...siteConfig.keywords,
      "showreel",
      "demo reel",
      "video",
      "cinematography",
      "visual style",
      "storytelling",
    ],
    ogImage: "/images/showreel.png",
    ogType: "website" as const,
  },
};
