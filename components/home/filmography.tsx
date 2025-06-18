import { filmographyItems } from "@/constants";
import Intro from "../ui/intro";
import ItemList from "../ui/item-list";

export default function Filmography() {
  return (
    <div className="mx-auto min-h-screen max-w-7xl p-8 px-4 pb-0">
      <Intro text="Filmography" />
      <ItemList items={filmographyItems} />
    </div>
  );
}
