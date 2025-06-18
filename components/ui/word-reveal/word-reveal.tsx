import { cn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import styles from "./styles.module.css";

export const slideUp = {
  initial: {
    y: "100%",
  },
  open: (i: number) => ({
    y: "0%",
    transition: { duration: 0.5, delay: 0.01 * i },
  }),
  closed: {
    y: "100%",
    transition: { duration: 0.5 },
  },
};

type Props = {
  text: string;
  className?: string;
};

export default function WordReveal({ text, className }: Props) {
  const description = useRef(null);
  const isInView = useInView(description, {
    margin: "0px 0px -20% 0px",
  });

  return (
    <div ref={description} className={cn(styles.description, className)}>
      <div className={styles.body}>
        <p>
          {text.split(" ").map((word, index) => {
            return (
              <span key={index} className={styles.mask}>
                <motion.span
                  variants={slideUp}
                  custom={index}
                  animate={isInView ? "open" : "closed"}
                  // initial={{ y: "100%" }}
                  // whileInView={{ y: "0%" }}
                  // transition={{ duration: 0.5 }}
                  // viewport={{ margin: "0px 0px -20% 0px" }}
                  key={index}
                >
                  {word}
                </motion.span>
              </span>
            );
          })}
        </p>
      </div>
    </div>
  );
}
