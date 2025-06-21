import { pressItems } from "@/constants";
import Intro from "../ui/intro";
import ItemList from "../ui/item-list";

export default function Press() {
  return (
    <>
      <div className="mx-auto min-h-screen max-w-7xl p-8 py-32 pt-8 pb-0">
        <Intro text="Press" />
        <ItemList items={pressItems} />
      </div>
    </>
  );
}
