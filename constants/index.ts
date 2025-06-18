export type Item = {
  title: string;
  subTitle: string;
  rightText: string;
  src: string;
  color?: string;
};

const getRandomColor = () => {
  const colors = [
    "#FF6B6B",
    "#6BCB77",
    "#4D96FF",
    "#FFD93D",
    "#845EC2",
    "#FF9671",
    "#FFC75F",
    "#0081CF",
    "#B39CD0",
    "#F9F871",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

export const filmographyItems = [
  {
    title: "Agemo",
    subTitle: "2024",
    rightText: "Director & EP",
    src: "1.png",
    color: getRandomColor(),
  },
  {
    title: "Invest Naija",
    subTitle: "2024",
    rightText: "Director & EP",
    src: "1.png",
    color: getRandomColor(),
  },
  {
    title: "CTF Trailer",
    subTitle: "2024",
    rightText: "Director & EP",
    src: "1.png",
    color: getRandomColor(),
  },
  {
    title: "Plagued",
    subTitle: "2020",
    rightText: "Director & EP",
    src: "1.png",
    color: getRandomColor(),
  },
  {
    title: "South African Love Story | Stretch",
    subTitle: "2019",
    rightText: "Director & EP",
    src: "1.png",
    color: getRandomColor(),
  },
  {
    title: "Now",
    subTitle: "2019",
    rightText: "Director & EP",
    src: "1.png",
    color: getRandomColor(),
  },
  {
    title: "Part of Me",
    subTitle: "2019",
    rightText: "Director & EP",
    src: "1.png",
    color: getRandomColor(),
  },
  {
    title: "The Olympian's Torch",
    subTitle: "2015",
    rightText: "Director & EP",
    src: "1.png",
    color: getRandomColor(),
  },
];

export const pressItems = [
  {
    title:
      "Related Motions Teases “Agemo” First Look Photos Ahead of 2024 Release",
    subTitle: "2024",
    rightText: "ShockNG",
    src: "press-1.png",
    color: "#f0f0f0",
  },
  {
    title: "Agemo – dir. Moshood Abiola Obatula",
    subTitle: "2024",
    rightText: "festregards",
    src: "press-2.png",
    color: "#f1f1f1",
  },
  {
    title: "Abiola’s supernatural thriller set for 2024",
    subTitle: "2024",
    rightText: "contentnigeria",
    src: "press-3.png",
    color: "#000",
  },
];
