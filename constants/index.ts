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
    type: "video",
    src: "/videos/video-1.mp4",
    image: "1.png",
  },
  {
    title: "Invest Naija",
    subTitle: "2024",
    rightText: "Director & EP",
    type: "link",
    href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    image: "1.png",
  },
  {
    title: "CTF Trailer",
    subTitle: "2024",
    rightText: "Director & EP",
    type: "none",
    image: "1.png",
  },
  {
    title: "Plagued",
    subTitle: "2020",
    rightText: "Director & EP",
    type: "video",
    src: "/videos/video-1.mp4",
    image: "1.png",
  },
  {
    title: "South African Love Story | Stretch",
    subTitle: "2019",
    rightText: "Director & EP",
    type: "video",
    src: "/videos/video-1.mp4",
    image: "1.png",
  },
  {
    title: "Now",
    subTitle: "2019",
    rightText: "Director & EP",
    type: "video",
    src: "/videos/video-1.mp4",
    image: "1.png",
  },
  {
    title: "Part of Me",
    subTitle: "2019",
    rightText: "Director & EP",
    type: "video",
    src: "/videos/video-1.mp4",
    image: "1.png",
  },
  {
    title: "The Olympian's Torch",
    subTitle: "2015",
    rightText: "Director & EP",
    type: "video",
    src: "/videos/video-1.mp4",
    image: "1.png",
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
    image: "press-1.png",
  },
  {
    title: "Agemo – dir. Moshood Abiola Obatula",
    subTitle: "2024",
    rightText: "festregards",
    type: "link",
    href: "https://festregards.com/2024/09/18/agemo-dir-moshood-abiola-obatula/",
    image: "press-2.png",
  },
  {
    title: "Abiola’s supernatural thriller set for 2024",
    subTitle: "2024",
    rightText: "contentnigeria",
    type: "link",
    href: "https://contentnigeria.net/tag/moshood-abiola-obatula/",
    image: "press-3.png",
  },
];
