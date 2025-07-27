"use client";

import VideoPlayerModal from "@/components/ui/video-player";
import { btsVideos } from "@/constants";
import { motion, useScroll, useTransform } from "framer-motion";
import { Play } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import TextReveal from "../ui/text-reveal";

export default function BTSList() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const filmstripY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const frameVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -10 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  // Create film perforations
  const Perforations = ({ side }: { side: "left" | "right" }) => (
    <div
      className={`absolute top-0 ${side === "left" ? "left-0" : "right-0"} flex h-full w-8 flex-col items-center justify-evenly bg-zinc-800`}
    >
      {Array.from({ length: 12 }).map((_, i) => (
        <div key={i} className="h-4 w-4 rounded-full bg-black" />
      ))}
    </div>
  );

  return (
    <div ref={containerRef} className="relative py-16">
      {/* Filmstrip Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-16 mb-12 px-4 text-center"
      >
        <div className="mb-4 flex items-center justify-center gap-3">
          <TextReveal>
            <h2 className="text-5xl font-bold text-white md:text-7xl">
              Behind The Scenes Reel
            </h2>
          </TextReveal>
        </div>
        <TextReveal delay={0.1}>
          <p className="pb-18 text-xl text-gray-400 md:text-2xl">
            A cinematic journey through Moshood&apos;s creative process
          </p>
        </TextReveal>
      </motion.div>

      {/* Main Filmstrip */}
      <motion.div
        style={{ y: filmstripY }}
        className="relative border-t-4 border-b-4 border-zinc-700 bg-zinc-900 shadow-2xl"
      >
        {/* Film Perforations */}
        <Perforations side="left" />
        <Perforations side="right" />

        {/* Film Frames Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 gap-8 px-12 py-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {btsVideos.map((video, index) => (
            <motion.div
              key={video.id}
              variants={frameVariants}
              initial="hidden"
              whileInView="visible"
              className="group relative"
            >
              {/* Film Frame */}
              <div className="relative rounded-lg border-2 border-zinc-600 bg-black p-2 shadow-xl">
                {/* Frame Numbers */}
                <div className="absolute -top-6 right-0 left-0 flex justify-between font-mono text-xs text-gray-500">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <span>35mm</span>
                  <span>{video.year}</span>
                </div>

                <VideoPlayerModal
                  videoUrl={video.videoUrl}
                  trigger={
                    <div className="relative aspect-video cursor-pointer overflow-hidden rounded">
                      {/* Thumbnail */}
                      <Image
                        src={video.thumbnail}
                        alt={video.title}
                        fill
                        className="object-cover grayscale sepia-[0.3] transition-all duration-700 group-hover:scale-110 group-hover:sepia-0"
                      />

                      {/* Vintage Film Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-orange-500/10 mix-blend-overlay" />

                      {/* Scratches and Dust Effect */}
                      <div className="pointer-events-none absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZmlsbSIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiPjxjaXJjbGUgY3g9IjUwIiBjeT0iNTAiIHI9IjEiIGZpbGw9IndoaXRlIiBvcGFjaXR5PSIwLjMiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSJ1cmwoI2ZpbG0pIi8+PC9zdmc+')] opacity-20" />

                      {/* Play Button */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-500 group-hover:opacity-100">
                        <motion.div
                          className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-amber-400/50 bg-amber-500/20"
                          whileHover={{ scale: 1.2, rotate: 5 }}
                          whileTap={{ scale: 0.8 }}
                        >
                          <Play
                            className="ml-1 h-6 w-6 text-amber-200"
                            fill="currentColor"
                          />
                        </motion.div>
                      </div>

                      {/* Category Label */}
                      <div className="absolute top-2 left-2 rounded border border-amber-500/30 bg-black/70 px-2 py-1 font-mono text-xs text-amber-200">
                        {video.category.replace("-", " ").toUpperCase()}
                      </div>

                      {/* Duration */}
                      <div className="absolute top-2 right-2 rounded border border-amber-500/30 bg-black/70 px-2 py-1 font-mono text-xs text-amber-200">
                        {video.duration}
                      </div>

                      {/* Film Edge Markings */}
                      <div className="absolute top-0 bottom-0 left-0 w-1 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
                      <div className="absolute top-0 right-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
                    </div>
                  }
                />

                {/* Frame Info */}
                <div className="mt-3 rounded border border-zinc-600 bg-zinc-800 p-3">
                  <h3 className="mb-1 line-clamp-1 text-lg font-bold tracking-wider text-amber-200">
                    {video.title}
                  </h3>
                  <p className="mb-2 line-clamp-2 text-base tracking-wide text-gray-400">
                    {video.description}
                  </p>
                  <div className="flex items-center justify-between font-mono text-xs text-gray-500">
                    <span>{video.project}</span>
                    <span>FRAME {String(index + 1).padStart(3, "0")}</span>
                  </div>
                </div>

                {/* Film Sprocket Holes */}
                <div className="absolute top-1/2 -left-1 flex h-8 w-2 -translate-y-1/2 flex-col justify-evenly rounded-r bg-zinc-700">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div
                      key={i}
                      className="mx-auto h-1 w-1 rounded-full bg-black"
                    />
                  ))}
                </div>
                <div className="absolute top-1/2 -right-1 flex h-8 w-2 -translate-y-1/2 flex-col justify-evenly rounded-l bg-zinc-700">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div
                      key={i}
                      className="mx-auto h-1 w-1 rounded-full bg-black"
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Film Strip Bottom Info */}
        <div className="flex items-center justify-between px-12 pb-4 font-mono text-xs text-gray-500">
          <span>KODAK VISION3 500T</span>
          <span>BEHIND THE SCENES COLLECTION</span>
          <span>© MOSHOOD ABIOLA OBATULA</span>
        </div>
      </motion.div>

      {/* Vintage Film Grain Overlay */}
      <div className="pointer-events-none fixed inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JhaW4iIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48Y2lyY2xlIGN4PSIxMCIgY3k9IjEwIiByPSIwLjUiIGZpbGw9IndoaXRlIi8+PGNpcmNsZSBjeD0iNTAiIGN5PSIzMCIgcj0iMC4zIiBmaWxsPSJ3aGl0ZSIvPjxjaXJjbGUgY3g9IjkwIiBjeT0iNjAiIHI9IjAuNCIgZmlsbD0id2hpdGUiLz48Y2lyY2xlIGN4PSIxMzAiIGN5PSI5MCIgcj0iMC4yIiBmaWxsPSJ3aGl0ZSIvPjxjaXJjbGUgY3g9IjE3MCIgY3k9IjEyMCIgcj0iMC42IiBmaWxsPSJ3aGl0ZSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiIGZpbGw9InVybCgjZ3JhaW4pIi8+PC9zdmc+')] opacity-5 mix-blend-overlay" />
    </div>
  );
}
