import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {
  children: string;
  href: string;
  className?: string;
};

const DURATION = 0.25;
const STAGGER = 0.025;

const FlipLink = ({ children, href, className }: Props) => {
  return (
    <Link href={href}>
      <motion.div
        initial="initial"
        whileHover="hovered"
        className={cn(
          "relative block overflow-hidden whitespace-nowrap uppercase",
          className,
        )}
        // style={{
        //   lineHeight: 0.75,
        // }}
      >
        <div>
          {children.split("").map((l, i) =>
            l === " " ? (
              <span key={i} className="inline-block w-1" aria-hidden="true" />
            ) : (
              <motion.span
                variants={{
                  initial: {
                    y: 0,
                  },
                  hovered: {
                    y: "-100%",
                  },
                }}
                transition={{
                  duration: DURATION,
                  ease: "easeInOut",
                  delay: STAGGER * i,
                }}
                className="inline-block"
                key={i}
              >
                {l}
              </motion.span>
            ),
          )}
        </div>
        <div className="absolute inset-0">
          {children.split("").map((l, i) =>
            l === " " ? (
              <span key={i} className="inline-block w-1" aria-hidden="true" />
            ) : (
              <motion.span
                variants={{
                  initial: {
                    y: "100%",
                  },
                  hovered: {
                    y: 0,
                  },
                }}
                transition={{
                  duration: DURATION,
                  ease: "easeInOut",
                  delay: STAGGER * i,
                }}
                className="inline-block"
                key={i}
              >
                {l}
              </motion.span>
            ),
          )}
        </div>
      </motion.div>
    </Link>
  );
};

export default FlipLink;
