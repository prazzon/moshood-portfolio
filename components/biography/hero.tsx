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
      <div className="mx-auto flex max-w-7xl flex-col gap-4 p-8 text-6xl font-semibold tracking-wider md:text-9xl">
        <TextReveal>
          <motion.h1 className="pl-0">Moshood</motion.h1>
        </TextReveal>
        <TextReveal delay={0.3}>
          <motion.h1 className="pl-12 md:pl-48">Abiola</motion.h1>
        </TextReveal>
        <TextReveal delay={0.6}>
          <motion.h1 className="pl-24 md:pl-96">Obatula</motion.h1>
        </TextReveal>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8, borderRadius: "50%" }}
        animate={{ opacity: 1, scale: 1, borderRadius: "0%" }}
        transition={{ duration: 0.4, delay: 0.8 }}
        className="h-[calc(100vh-8rem)] overflow-hidden"
      >
        <motion.div style={{ y }} className="relative h-full">
          <Image
            src={"/images/biography.png"}
            fill
            alt="image"
            className="object-cover object-[50%_10%] grayscale"
            priority
            // style={{ objectFit: "cover" }}
          />
        </motion.div>
      </motion.div>
    </>
  );
}
