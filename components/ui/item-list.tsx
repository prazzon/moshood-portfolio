import { type Item } from "@/constants";
import { useTouchDevice } from "@/hooks/useMobile";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useState } from "react";
import ListModal from "./list-modal/list-modal";
import VideoPlayerModal from "./video-player";

type ItemListProps = {
  items: Item[];
  className?: string;
};

export default function ItemList({ items, className }: ItemListProps) {
  const [modal, setModal] = useState({ active: false, index: 0 });
  const isTouchDevice = useTouchDevice();

  return (
    <section
      className={cn("overflow-x-hidden py-48 pt-8 text-white", className)}
    >
      {items.map((item, index) => (
        <Item key={index} setModal={setModal} index={index} {...item} />
      ))}
      {!isTouchDevice && <ListModal modal={modal} projects={items} />}
    </section>
  );
}

type ItemProps = Item & {
  rightText: string;
  setModal: (modal: { active: boolean; index: number }) => void;
  index: number;
};

const Item = ({
  title,
  subTitle,
  rightText,
  setModal,
  index,
  ...item
}: ItemProps) => {
  if (item.type === "video") {
    return (
      <VideoPlayerModal
        videoUrl={item.src || "/videos/video-1.mp4"}
        trigger={
          <motion.div
            initial={{ y: 48, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.75 }}
            className="group flex cursor-pointer items-center justify-between border-b border-zinc-800 px-3 py-9"
            onMouseEnter={() => {
              setModal({ active: true, index });
            }}
            onMouseLeave={() => {
              setModal({ active: false, index });
            }}
          >
            <div>
              <p className="mb-1.5 text-2xl text-zinc-50 transition-transform duration-300 group-hover:-translate-x-2">
                {title}
              </p>
              <p className="text-lg text-zinc-500 uppercase">{subTitle}</p>
            </div>
            <div className="flex items-center gap-1.5 text-end text-lg text-zinc-500 uppercase">
              <p>{rightText}</p>
            </div>
          </motion.div>
        }
      />
    );
  }

  if (item.type === "link") {
    return (
      <motion.a
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className="group flex cursor-pointer items-center justify-between border-b border-zinc-800 px-3 py-9"
        onMouseEnter={() => {
          setModal({ active: true, index });
        }}
        onMouseLeave={() => {
          setModal({ active: false, index });
        }}
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div>
          <p className="mb-1.5 text-2xl text-zinc-50 transition-transform duration-300 group-hover:-translate-x-2">
            {title}
          </p>
          <p className="text-lg text-zinc-500 uppercase">{subTitle}</p>
        </div>
        <div className="flex items-center gap-1.5 text-end text-lg text-zinc-500 uppercase">
          <p>{rightText}</p>
        </div>
      </motion.a>
    );
  }

  return (
    <motion.div
      initial={{ y: 48, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      className="group flex items-center justify-between border-b border-zinc-800 px-3 py-9"
      onMouseEnter={() => {
        setModal({ active: true, index });
      }}
      onMouseLeave={() => {
        setModal({ active: false, index });
      }}
    >
      <div>
        <p className="mb-1.5 text-2xl text-zinc-50 transition-transform duration-300 group-hover:-translate-x-2">
          {title}
        </p>
        <p className="text-lg text-zinc-500 uppercase">{subTitle}</p>
      </div>
      <div className="flex items-center gap-1.5 text-end text-lg text-zinc-500 uppercase">
        <p>{rightText}</p>
      </div>
    </motion.div>
  );
};
