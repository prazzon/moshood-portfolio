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

export type BTSVideo = {
  id: string;
  title: string;
  description: string;
  project?: string;
  year: number;
  duration: string;
  thumbnail: string;
  videoUrl: string;
  category: "production" | "interview" | "process" | "behind-scenes";
};

export const btsVideos: BTSVideo[] = [
  {
    id: "director_mosh_thriller",
    title: "Director Moshood - Thriller",
    description:
      "The suspense starts before the first take. Go behind the scenes with Director Mosh.",
    year: 2024,
    duration: "0:50",
    thumbnail: "/images/showreel/7.png",
    videoUrl:
      "https://res.cloudinary.com/dt5hzczvg/video/upload/v1751660504/thriller_MD_1_qewutm.mp4",
    category: "process",
  },
  {
    id: "invest_naija_bts",
    title: "Invest Naija: On Set with Moshood",
    description:
      "Watch Moshood as he works on the set of Invest Naija, capturing his creative process and directorial approach.",
    project: "Invest Naija",
    year: 2024,
    duration: "1:55",
    thumbnail: "/images/bts/invest_9ja.png",
    videoUrl:
      "https://res.cloudinary.com/dt5hzczvg/video/upload/v1753552346/Related_Motion_-_Invest_9ja_BTS_dxtqjl.mp4",
    category: "behind-scenes",
  },
];

export type ShowreelVideo = {
  id: string;
  title: string;
  description: string;
  year: number;
  duration: string;
  thumbnail: string;
  videoUrl: string;
};

export const showreelVideos: ShowreelVideo[] = [
  {
    id: "agemo-bts-1",
    title: "Agemo: Director's Vision",
    description:
      "Moshood discusses his creative vision and approach to bringing the supernatural thriller Agemo to life.",
    year: 2024,
    duration: "3:45",
    thumbnail: "/images/biography.png",
    videoUrl:
      "https://res.cloudinary.com/dt5hzczvg/video/upload/v1753311347/showreel_yi22rk.mp4",
  },
  {
    id: "ctf-production",
    title: "Create The Future: Production Insights",
    description:
      "An intimate look at the production process of Create The Future, from pre-production to final cut.",
    year: 2024,
    duration: "4:28",
    thumbnail: "/images/bts.png",
    videoUrl:
      "https://res.cloudinary.com/dt5hzczvg/video/upload/v1753311489/showreel2_ojznku.mp4",
  },
  {
    id: "invest-naija-process",
    title: "Invest Naija: Creative Process",
    description:
      "Exploring the creative decisions and storytelling approach behind the Invest Naija project.",
    year: 2024,
    duration: "2:56",
    thumbnail: "/images/filmography.png",
    videoUrl:
      "https://res.cloudinary.com/dt5hzczvg/video/upload/v1753285553/showreel3_ecowjr.mp4",
  },
];

export const collaborators = [
  {
    name: "Eniola Badmus",
    connection: "Collaborator",
    project: "Create The Future",
    date: 2024,
    image: "/images/collaborators/eniola_badmus.png",
  },
  {
    name: "Praise",
    connection: "Collaborator",
    project: "The Godfather",
    date: 2025,
    image: "/images/collaborators/praiz.png",
  },
  {
    name: "Kelechi Amadi-Obi",
    connection: "Collaborator",
    project: "Create The Future",
    date: 2024,
    image: "/images/collaborators/kelechi_amadi_obi.png",
  },
  {
    name: 'Jide "JBlaze" Oyegbile',
    connection: "Collaborator",
    project: "Create The Future",
    date: 2024,
    image: "/images/collaborators/jblaze.png",
  },
  {
    name: "Bisola Aiyeola",
    connection: "Collaborator",
    project: "Invest Naija",
    date: 2024,
    image: "/images/collaborators/bisola_aiyeola.png",
  },
  {
    name: "Papama Tungela",
    connection: "Collaborator",
    project: "Agemo, Plague, Now, Part Of Me",
    date: 2025,
    image: "/images/collaborators/papama_tungela.png",
  },
  {
    name: "Tshepo Mkwanazi",
    connection: "Collaborator",
    project: "Cardbury Triplet Commercial",
    date: 2016,
    image: "/images/collaborators/tshepo_mkwanazi.png",
  },
  {
    name: "Uzoamaka Onuoha",
    connection: "Collaborator",
    project: "Agemo",
    date: 2024,
    image: "/images/collaborators/uzoamaka_onuoha.png",
  },
  {
    name: "Jide Kosoko",
    connection: "Collaborator",
    project: "Agemo",
    date: 2024,
    image: "/images/collaborators/jide_kosoko.png",
  },
  {
    name: "Yinka Quadri",
    connection: "Collaborator",
    project: "Agemo",
    date: 2024,
    image: "/images/collaborators/yinka_quadri.png",
  },
  {
    name: "Denrele Edun",
    connection: "Collaborator",
    project: "The Godfather",
    date: 2025,
    image: "/images/collaborators/denrele_edun.png",
  },
  {
    name: "Moet Abebe",
    connection: "Collaborator",
    project: "The Godfather",
    date: 2025,
    image: "/images/collaborators/moet_abebe.png",
  },
  {
    name: "Venita Akpofure",
    connection: "Collaborator",
    project: "The Godfather",
    date: 2025,
    image: "/images/collaborators/venita_akpofure.png",
  },
  {
    name: "Frank Edoho",
    connection: "Collaborator",
    project: "The Godfather",
    date: 2025,
    image: "/images/collaborators/frank_edoho.png",
  },
  {
    name: "Chimezie Imo",
    connection: "Collaborator",
    project: "The Godfather",
    date: 2025,
    image: "/images/collaborators/chimezie_imo.png",
  },
  {
    name: "Tolani Baj",
    connection: "Collaborator",
    project: "The Godfather",
    date: 2025,
    image: "/images/collaborators/tolani_baj.png",
  },
  {
    name: "Stephanie Coker",
    connection: "Collaborator",
    project: "The Godfather",
    date: 2025,
    image: "/images/collaborators/stephanie_coker.png",
  },
  {
    name: "Darasimi Nadi",
    connection: "Collaborator",
    project: "Agemo",
    date: 2024,
    image: "/images/collaborators/darasimi_nadi.png",
  },
  {
    name: "Seun Kuti",
    connection: "Collaborator",
    project: "The Godfather",
    date: 2025,
    image: "/images/collaborators/seun_kuti.jpg",
  },
  {
    name: "Yetunde Kuti",
    connection: "Collaborator",
    project: "The Godfather",
    date: 2025,
    image: "/images/collaborators/yetunde_kuti.png",
  },
  {
    name: "Ric Hassani",
    connection: "Collaborator",
    project: "The Godfather",
    date: 2025,
    image: "/images/collaborators/ric_hassani.png",
  },
  {
    name: "Foluke Daramola",
    connection: "Collaborator",
    project: "Agemo",
    date: 2024,
    image: "/images/collaborators/foluke_daramola.png",
  },
  {
    name: "Katarina Ataman",
    connection: "Collaborator",
    project: "The Godfather, Starbite With Katrina",
    date: 2025,
    image: "/images/collaborators/katarina_ataman.png",
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
  bts: {
    title: `Behind The Scenes | ${siteConfig.name}`,
    description:
      "Go behind the scenes with Moshood Abiola Obatula. Explore exclusive behind-the-scenes footage, creative process insights, and intimate glimpses into the making of his acclaimed films.",
    keywords: [
      ...siteConfig.keywords,
      "behind the scenes",
      "BTS",
      "making of",
      "creative process",
      "film production",
      "director insights",
      "exclusive footage",
    ],
    ogImage: "/images/bts.png",
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
