"use client";

import Picture3 from "@/public/images/showreel/3.png";
import Picture4 from "@/public/images/showreel/4.png";
import Picture1 from "@/public/images/showreel/7.png";
import Picture2 from "@/public/images/showreel/8.png";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { Play } from "../icons/play";
import VideoPlayerModal from "../ui/video-player";
import styles from "./showreel-list.module.css";

// const word = "with framer-motion";

export default function ShowreelList() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const sm = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const md = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const lg = useTransform(scrollYProgress, [0, 1], [0, -250]);

  const images = [
    {
      src: Picture1,
      y: 0,
    },
    {
      src: Picture2,
      y: lg,
    },
    {
      src: Picture3,
      y: md,
    },
    {
      src: Picture4,
      y: md,
    },
  ];

  return (
    <div ref={container} className={styles.container}>
      {/* <div className={styles.body}>
        <motion.h1 style={{ y: sm }}>Agemo</motion.h1> <h1>Scroll</h1>
        <div className={styles.word}>
          <p>2025</p>
          <p>
            {word.split("").map((letter, i) => {
              const y = useTransform(
                scrollYProgress,
                [0, 1],
                [0, Math.floor(Math.random() * -75) - 25],
              );
              return (
                <motion.span style={{ top: y }} key={`l_${i}`}>
                  {letter}
                </motion.span>
              );
            })}
          </p>
        </div>
      </div> */}
      <div className={styles.images}>
        {images.map(({ src, y }, i) => {
          return (
            <motion.div
              style={{ y }}
              key={`i_${i}`}
              className={styles.imageContainer}
            >
              <Image src={src} placeholder="blur" alt="image" fill />
              {i === 0 && (
                <div className="relative z-50 flex h-full w-full items-center justify-center">
                  <motion.p
                    className="text-[8px] font-bold tracking-wide md:text-xl"
                    style={{ y: sm }}
                  >
                    <VideoPlayerModal
                      videoUrl="https://res.cloudinary.com/relatedmotion/video/upload/v1751660504/director-mosh/thriller_MD_1_qewutm.mp4"
                      autoPlay
                      trigger={
                        <button className="flex cursor-pointer items-center gap-1 overflow-hidden rounded-full bg-black/80 p-6">
                          <Play className="size-10 fill-white" />
                        </button>
                      }
                    />
                  </motion.p>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
