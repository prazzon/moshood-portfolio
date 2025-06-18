import { cn } from "@/lib/utils";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import useMobile from "../../hooks/useMobile";

type Props = {
  text: string;
  className?: string;
};

export default function Intro({ text, className }: Props) {
  const container = useRef(null);
  const isMobile = useMobile();

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start center", "end center"],
  });

  const fontSize = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? ["4rem", "3rem"] : ["10rem", "4.5rem"],
  );
  const yPos = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
  const xPos = useTransform(scrollYProgress, [0, 1], ["50%", "0%"]);
  const translateX = useTransform(scrollYProgress, [0, 1], ["-50%", "0%"]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("Page scroll: ", latest);
    console.log("Translate X: ", translateX.get());
  });

  return (
    <div className="relative mx-auto h-[300px] max-w-7xl" ref={container}>
      <motion.h1
        className={cn("absolute overflow-hidden font-bold", className)}
        style={{
          fontSize,
          top: yPos,
          left: xPos,
          x: translateX,
        }}
      >
        <motion.p
          initial={{ opacity: 0, y: "100%" }}
          whileInView={{ opacity: 1, y: "0%" }}
          viewport={{ margin: "0px 0px -10% 0px" }}
          transition={{
            ease: "easeInOut",
            duration: 0.4,
            delay: 0,
          }}
          className="leading-none tracking-wider"
        >
          {text}
        </motion.p>
      </motion.h1>
    </div>
  );
}
