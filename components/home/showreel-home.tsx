import Picture1 from "@/public/images/showreel/1.png";
import Picture2 from "@/public/images/showreel/2.png";
import Picture3 from "@/public/images/showreel/3.png";
import Picture4 from "@/public/images/showreel/4.png";
import Picture5 from "@/public/images/showreel/5.png";
import Picture6 from "@/public/images/showreel/6.png";
import Picture7 from "@/public/images/showreel/7.png";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { ChevronDown, Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
export default function ShowreelHome() {
  const container = useRef(null);
  const imageRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const { scrollYProgress: opacityProgress } = useScroll({
    target: imageRef,
    offset: ["end start", "end end"],
  });

  useMotionValueEvent(opacityProgress, "change", (latest) => {
    console.log("Page scroll: ", latest);
  });

  const opacity = useTransform(opacityProgress, [0.5, 0], [1, 0.2]);
  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);
  const textY = useTransform(scrollYProgress, [0.8, 0.9], ["105%", "0%"]);

  // Progress indicator animations
  const progressWidth = useTransform(scrollYProgress, [0, 0.95], ["0%", "95%"]);
  const progressOpacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.9, 1],
    [0, 1, 1, 0],
  );
  const indicatorY = useTransform(scrollYProgress, [0, 0.2], ["20px", "0px"]);
  const chevronBounce = useTransform(scrollYProgress, [0, 0.5], [0, 10]);

  const pictures = [
    {
      src: Picture3,
      scale: scale4,
      opacity,
    },
    {
      src: Picture2,
      scale: scale5,
    },
    {
      src: Picture1,
      scale: scale6,
    },
    {
      src: Picture4,
      scale: scale5,
    },
    {
      src: Picture5,
      scale: scale6,
    },
    {
      src: Picture6,
      scale: scale8,
    },
    {
      src: Picture7,
      scale: scale9,
    },
  ];

  return (
    <div ref={container} className="relative mb-28 h-[300vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        {pictures.map(({ src, scale, opacity }, index) => {
          return (
            <motion.div
              key={index}
              style={{ scale, opacity }}
              className={`absolute top-0 flex h-full w-full items-center justify-center ${index === 0 ? "z-10" : ""}`}
            >
              <div
                className={`relative grid place-items-center ${index === 1 ? "-top-[28.5vh] left-[5vw] h-[30vh] w-[40vw] md:-top-[30vh] md:w-[35vw]" : ""} ${index === 2 ? "-top-[10vh] -left-[31vw] h-[45vh] w-[28vw] md:-left-[24vw] md:w-[20vw]" : ""} ${index === 3 ? "left-[31.5vw] h-[25vh] w-[30vw] md:left-[26.5vw] md:w-[25vw]" : ""} ${index === 4 ? "top-[26vh] left-[5vw] h-[25vh] w-[25vw] md:top-[27.5vh] md:w-[20vw]" : ""} ${index === 5 ? "top-[26vh] -left-[26.5vw] h-[25vh] w-[35vw] md:top-[27.5vh] md:-left-[21.5vw] md:w-[30vw]" : ""} ${index === 6 ? "top-[21vh] left-[29vw] h-[15vh] w-[20vw] md:top-[22.5vh] md:left-[24vw] md:w-[15vw]" : ""} ${index === 0 ? "h-[25vh] w-[30vw] md:w-[25vw]" : ""} `}
              >
                <Image
                  ref={index === 0 ? imageRef : null}
                  src={src}
                  fill
                  className="object-cover grayscale"
                  alt="image"
                  placeholder="blur"
                />
                {index === 0 && (
                  <div className="absolute z-5 w-full overflow-hidden">
                    <motion.p
                      className="flex justify-center text-center text-[8px] font-bold tracking-wide md:text-xl"
                      style={{ y: textY }}
                    >
                      <Link href="/showreel">
                        <button className="flex cursor-pointer items-center gap-1 overflow-hidden rounded-full bg-black/80 px-2 py-1 md:gap-2 md:px-4">
                          <Play className="size-2 md:size-4" />
                          View Showreel
                        </button>
                      </Link>
                    </motion.p>
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Keep Scrolling Progress Indicator */}
      <motion.div
        className="fixed top-1/2 right-6 z-20 -translate-y-1/2 mix-blend-difference md:right-12"
        style={{ opacity: progressOpacity, y: indicatorY }}
      >
        <div className="flex flex-col items-center gap-4">
          {/* Progress Bar */}
          <div className="relative h-32 w-2 rounded-full bg-white/20 md:h-40">
            <motion.div
              className="absolute bottom-0 left-0 w-full rounded-full bg-white"
              style={{ height: progressWidth }}
            />
          </div>

          {/* Keep Scrolling Text */}
          <div className="flex flex-col items-center gap-2">
            <motion.div className="animate-bounce" style={{ y: chevronBounce }}>
              <ChevronDown className="h-5 w-5 text-white md:h-6 md:w-6" />
            </motion.div>
            <p className="text-invert text-center text-base font-medium tracking-wider text-white">
              KEEP
              <br />
              SCROLLING
            </p>
          </div>
        </div>
      </motion.div>

      <div className="absolute right-0 bottom-0 left-0 h-96 bg-gradient-to-b from-zinc-950/0 to-zinc-950" />
    </div>
  );
}
