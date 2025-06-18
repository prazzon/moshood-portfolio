"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface CircularButtonProps {
  onClick: () => void;
  className?: string;
}

export function CircularButton({ onClick, className }: CircularButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      className={cn(
        "group relative flex h-32 w-32 items-center justify-center rounded-full",
        "cursor-pointer transition-transform duration-300 hover:scale-105",
        className,
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Inner circle with play icon */}
      <div className="absolute flex h-20 w-20 items-center justify-center rounded-full bg-black text-white transition-transform duration-300 group-hover:scale-110">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-8 w-8"
        >
          <path
            fillRule="evenodd"
            d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286l-11.54 6.347c-1.25.687-2.779-.217-2.779-1.643V5.653z"
            clipRule="evenodd"
          />
        </svg>
      </div>{" "}
      {/* Rotating text ring */}
      <div className="spinning-text absolute h-full w-full">
        <svg className="h-full w-full" viewBox="0 0 100 100">
          <defs>
            <path
              id="circle"
              d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
            />
          </defs>
          <text className="text-xs font-medium tracking-wider">
            <textPath
              href="#circle"
              className="fill-stone-900 dark:fill-gray-200"
            >
              PLAY SHOWREEL • PLAY SHOWREEL • PLAY SHOWREEL •
            </textPath>
          </text>
        </svg>
      </div>
    </motion.button>
  );
}
