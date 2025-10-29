import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import TextReveal from "../ui/text-reveal";

export default function Hero() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "150vh"]);

  return (
    <>
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 p-8 pb-12">
        <TextReveal>
          <h1 className="text-6xl font-semibold tracking-wider md:text-9xl">
            Press
          </h1>
        </TextReveal>
        <TextReveal delay={0.3}>
          <p className="self-end text-xl tracking-wide md:w-1/2 md:text-2xl">
            Industry press and media platforms continue to recognize Moshood’s
            contributions to African cinema and his visionary approach to
            filmmaking.
          </p>
        </TextReveal>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8, borderRadius: "50%" }}
        animate={{ opacity: 1, scale: 1, borderRadius: "0%" }}
        transition={{ duration: 0.4, delay: 0.4 }}
        className="h-[calc(100vh-8rem)] overflow-hidden"
      >
        <motion.div style={{ y }} className="relative h-full">
          <Image
            src={"/images/press.png"}
            fill
            alt="image"
            className="object-cover object-bottom grayscale"
            priority
          />
        </motion.div>
      </motion.div>
    </>
  );
}
