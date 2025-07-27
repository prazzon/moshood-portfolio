"use client";

import VideoPlayerModal from "@/components/ui/video-player";
import { showreelVideos } from "@/constants";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
import { Play } from "../icons/play";
import TextReveal from "../ui/text-reveal";

export default function ShowreelGallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const { scrollXProgress } = useScroll({
    container: containerRef,
  });

  const handleScroll = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (containerRef.current) {
      const scrollAmount = 400;
      const newScrollLeft =
        containerRef.current.scrollLeft +
        (direction === "right" ? scrollAmount : -scrollAmount);
      containerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="relative mx-auto mb-24 max-w-5xl px-4 py-12">
      <div className="mt-8 text-center">
        <div className="mb-4 flex items-center justify-center gap-3">
          <TextReveal>
            <h2 className="text-5xl font-bold text-white md:text-7xl">
              Check out Showreel Gallery
            </h2>
          </TextReveal>
        </div>
        <TextReveal delay={0.1}>
          <p className="pb-18 text-xl text-gray-400 md:text-2xl">
            A collection of Moshood’s best work, showcasing his unique
            storytelling style and cinematic flair.
          </p>
        </TextReveal>
      </div>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="relative"
      >
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="h-1 overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="h-full rounded-full bg-white"
              style={{ scaleX: scrollXProgress }}
              initial={{ scaleX: 0 }}
            />
          </div>
        </div>
        {/* Navigation Buttons - Hidden on mobile */}
        {canScrollLeft && (
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              className="absolute top-1/2 -left-6 z-10 hidden -translate-y-1/2 md:block"
            >
              <motion.button
                onClick={() => scroll("left")}
                disabled={!canScrollLeft}
                aria-label="Scroll left"
                className={`"bg-white/20 rounded-full bg-white/20 p-4 text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20 focus:ring-2 focus:ring-white/50 focus:outline-none`}
                whileHover={canScrollLeft ? { scale: 1.1 } : {}}
                whileTap={canScrollLeft ? { scale: 0.9 } : {}}
              >
                <ArrowLeft className="h-5 w-5" />
              </motion.button>
            </motion.div>
          </AnimatePresence>
        )}
        {canScrollRight && (
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              className="absolute top-1/2 -right-6 z-10 hidden -translate-y-1/2 md:block"
            >
              <motion.button
                onClick={() => scroll("right")}
                disabled={!canScrollRight}
                aria-label="Scroll right"
                className={`rounded-full bg-white/20 p-4 text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20 focus:ring-2 focus:ring-white/50 focus:outline-none`}
                whileHover={canScrollRight ? { scale: 1.1 } : {}}
                whileTap={canScrollRight ? { scale: 0.9 } : {}}
              >
                <ArrowRight className="h-5 w-5" />
              </motion.button>
            </motion.div>
          </AnimatePresence>
        )}
        {/* Horizontal Scroll Container */}
        <motion.div
          ref={containerRef}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="scrollbar-hide flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 md:gap-8"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          onScroll={handleScroll}
        >
          {showreelVideos.map((video) => {
            return (
              <motion.div
                key={video.id}
                variants={itemVariants}
                className="group relative aspect-video w-[80vw] flex-shrink-0 snap-center md:w-[800px]"
              >
                <VideoPlayerModal
                  videoUrl={video.videoUrl}
                  trigger={
                    <div className="h-full cursor-pointer overflow-hidden rounded-4xl bg-zinc-900 shadow-2xl">
                      {/* Thumbnail */}
                      <div className="relative h-full overflow-hidden">
                        <Image
                          src={video.thumbnail}
                          alt={video.title}
                          fill
                          className="object-cover grayscale transition-all duration-700 group-hover:scale-110"
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        {/* Play Button */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-100 transition-all duration-500 group-hover:opacity-100">
                          <motion.button
                            whileHover={{ scale: 1.2, rotate: 10 }}
                            whileTap={{ scale: 0.8 }}
                            className="flex cursor-pointer items-center gap-1 overflow-hidden rounded-full bg-black/80 p-4 md:p-6"
                          >
                            <Play className="size-8 fill-white md:size-10" />
                          </motion.button>
                        </div>
                        {/* Category & Duration */}
                        <div className="absolute top-4 right-4 left-4 flex items-start justify-between">
                          <span className="rounded-full bg-black/60 px-2 py-1 text-sm font-medium tracking-widest text-white">
                            {video.duration}
                          </span>
                        </div>
                      </div>
                    </div>
                  }
                />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>

      {/* Custom scrollbar styles */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
