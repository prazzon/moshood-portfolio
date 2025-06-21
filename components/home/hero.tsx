"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { AnimatedLetters } from "../ui/animated-letters";
import { CircularButton } from "../ui/circular-button";
import InfiniteScroll from "../ui/infinite-scroll/infinite-scroll";
import VideoPlayerModal from "../ui/video-player";

export default function Hero() {
  const handleShowreel = () => {
    // TODO: Add showreel functionality
    console.log("Play showreel");
  };

  return (
    <div className="flex min-h-[calc(100vh-8rem)] -translate-y-22 flex-col items-center justify-center overflow-hidden overflow-x-hidden md:min-h-[calc(100vh-5rem)]">
      {/* Dotted background */}
      {/* <div
        className={cn(
          "absolute inset-0",
          "[background-size:80px_80px]",
          "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
          "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]",
        )}
      /> */}

      {/* Grid background */}
      <motion.div
        initial={{ scale: 1.5 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className={cn(
          "absolute inset-0",
          "[background-size:80px_80px]",
          "[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      />

      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      {/* Hero content */}
      <div className="relative flex flex-col text-center text-8xl md:text-9xl">
        <AnimatedLetters title="Moshood" />
        <AnimatedLetters title="Obatula" direction="reversed" delay={0.2} />
      </div>
      <div className="mt-4 flex w-[80%] justify-center text-xl tracking-wide md:w-2xl">
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: "100%" }}
          transition={{ delay: 1.5, duration: 1.4, ease: [0.76, 0, 0.24, 1] }}
          className="z-99 rounded-2xl border-none border-[#262626]/50 bg-black"
        >
          <InfiniteScroll speed="normal" direction="left">
            <span>Executive Producer</span>
            <span>{"//"}</span>
            <span>Director</span>
            <span>{"//"}</span>
            <span>Managing Director</span>
            <span>{"//"}</span>
            <span>Creative Director</span>
            <span>{"//"}</span>
          </InfiniteScroll>
        </motion.div>
      </div>

      {/* Showreel Button */}
      <VideoPlayerModal
        videoUrl="/videos/video-1.mp4"
        autoPlay
        trigger={
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2, duration: 0.5 }}
            className="absolute right-8 bottom-8 z-10 md:right-12"
          >
            <CircularButton onClick={handleShowreel} />
          </motion.div>
        }
      />
    </div>
  );
}
