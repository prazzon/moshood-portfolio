import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import TextReveal from "../ui/text-reveal";

export default function Section() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div
      ref={container}
      className="relative mb-24 flex h-[180vh] items-center justify-center overflow-hidden md:h-[200vh]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative z-10 flex h-full w-full flex-col justify-between p-8 text-white md:p-20">
        <TextReveal>
          <p className="w-[70vw] self-end text-xl leading-8 font-thin tracking-wider uppercase md:w-[50vw] md:text-3xl md:leading-11">
            From supernatural thrillers to contemporary drama, Moshood’s
            filmography showcases his distinctive storytelling style and
            collaborative strength.
            <Link
              className="flex w-full justify-end tracking-wider"
              href="/filmography"
            >
              <span className="mt-2 border-b-2 border-gray-300 text-base md:text-lg">
                View Filmography
              </span>
            </Link>
          </p>
        </TextReveal>
        <TextReveal>
          <p className="w-[70vw] text-xl leading-8 font-thin tracking-wider uppercase md:w-[50vw] md:text-3xl md:leading-11">
            Over the years, Moshood has worked with a diverse and talented
            network of actors, creatives, musicians, and media personalities.
            These collaborations have helped shape bold narratives and
            unforgettable screen moments across projects like Agemo, The
            Godfather, Invest Naija, and Create the Future.
            <Link
              className="flex w-full pt-4 tracking-wider"
              href="/collaborators"
            >
              <span className="mt-2 border-b-2 border-gray-300 text-base md:text-lg">
                View Collaborations
              </span>
            </Link>
          </p>
        </TextReveal>
        <TextReveal>
          <p className="w-[70vw] self-end text-xl leading-8 font-thin tracking-wider uppercase md:w-[50vw] md:text-3xl md:leading-11">
            Moshood’s bold style and genre-defining works have caught the
            attention of notable media outlets and film lovers across Africa and
            beyond.
            <Link
              className="flex w-full justify-end tracking-wider"
              href="/press"
            >
              <span className="mt-2 border-b-2 border-gray-300 text-base md:text-lg">
                View Press
              </span>
            </Link>
          </p>
        </TextReveal>
      </div>
      <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
        <motion.div style={{ y }} className="relative h-full w-full">
          <Image
            src={"/images/biography-2.png"}
            fill
            alt="image"
            className="object-cover object-[50%_50%] grayscale"
            priority
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </motion.div>
      </div>
    </div>
  );
}
