"use client";

import { motion } from "framer-motion";

const letterAni = {
  initial: { y: 400, rotate: 100 },
  animate: (custom: number) => ({
    y: 0,
    rotate: 0,
    transition: {
      // ease: [0.6, 0.01, -0.05, 0.95],
      // ease: "easeOut",
      ease: [0.83, 0, 0.17, 1],
      duration: 1,
      delay: custom,
    },
  }),
};

type Props = {
  title: string;
  delay?: number;
  direction?: "forwards" | "reversed";
};

export const AnimatedLetters = ({
  title,
  delay = 0,
  direction = "forwards",
}: Props) => (
  <motion.span
    className="relative inline-block overflow-hidden whitespace-nowrap"
    initial="initial"
    animate="animate"
  >
    {[...title].map((letter, i, arr) => {
      const index = direction === "reversed" ? arr.length - 1 - i : i;
      return (
        <motion.span
          className="relative inline-block whitespace-nowrap"
          variants={letterAni}
          custom={delay + index * 0.075}
          key={letter + i}
        >
          {letter}
        </motion.span>
      );
    })}
  </motion.span>
);
