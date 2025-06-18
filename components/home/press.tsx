import Intro from "../ui/intro";
import ItemList from "../ui/item-list";

const items = [
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

export default function Press() {
  return (
    <>
      <div className="mx-auto min-h-screen max-w-7xl p-8 py-32 pt-8 pb-0">
        <Intro text="Press" />
        <ItemList items={items} />
      </div>
    </>
  );
}
