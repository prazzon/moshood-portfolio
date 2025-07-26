import FlipLink from "@/components/ui/flip-link";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import MobileNavLink from "./mobile-nav-link";

const navLinks = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Biography",
    href: "/biography",
  },
  {
    title: "Filmography",
    href: "/filmography",
  },
  {
    title: "Press",
    href: "/press",
  },
  {
    title: "BTS",
    href: "/bts",
  },
];

const menuVars = {
  initial: {
    scaleY: 0,
  },
  animate: {
    scaleY: 1,
    transition: {
      duration: 0.5,
      ease: [0.12, 0, 0.39, 0],
    },
  },
  exit: {
    scaleY: 0,
    transition: {
      delay: 0.5,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};
const containerVars = {
  initial: {
    transition: {
      staggerChildren: 0.09,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.09,
      staggerDirection: 1,
    },
  },
};

const headerElementVars = {
  initial: {
    opacity: 0,
    y: -10,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      delay: 0.5, // Starts after container animation
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: {
      duration: 0.3, // Quick exit before container animation
    },
  },
};

export default function Navigation() {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();

  const handleClick = (href: string) => {
    router.push(href);
    setOpen(false);
  };

  const toggleMenu = () => {
    setOpen((prev) => !prev);
  };

  return (
    <header className="sticky top-0 z-50">
      <motion.div
        initial={{ opacity: 0, y: -180 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          ease: "easeInOut",
          duration: 1,
          delay: 0.6,
        }}
        className="flex h-32 justify-center px-12 text-white md:px-20 lg:px-28"
      >
        <div className="flex w-full items-center justify-between">
          <Link href="/">
            <Image
              src="/images/signature.png"
              alt="signature"
              width={100}
              height={50}
            />
          </Link>
          <nav className="absolute left-[50%] hidden translate-x-[-50%] list-none items-center justify-center gap-4 space-x-4 text-xl tracking-wider md:flex">
            {navLinks.map((link, index) => {
              return (
                <FlipLink
                  key={index}
                  href={link.href}
                  className="text-xl tracking-wider"
                >
                  {link.title}
                </FlipLink>
              );
            })}
          </nav>
          <div className="ml-auto hidden -translate-y-1 border-b-2 border-white text-xl tracking-wide sm:block">
            <FlipLink href="/showreel" className="text-xl tracking-wider">
              Check out Showreel
            </FlipLink>
          </div>
          {/* Mobile menu button */}
          <div
            className="group flex h-13 w-13 cursor-pointer flex-col items-center justify-center rounded-full transition-colors hover:bg-white md:hidden"
            onClick={toggleMenu}
          >
            <span className="my-1 h-1 w-5 bg-white group-hover:bg-black"></span>
            <span className="my-1 h-1 w-5 bg-white group-hover:bg-black"></span>
          </div>
        </div>
      </motion.div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed top-0 left-0 z-99 h-screen w-full origin-top bg-white p-10 py-4 text-black"
          >
            <div className="relative flex h-full flex-col">
              {" "}
              <div className="flex justify-between">
                <motion.div
                  variants={headerElementVars}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <Image
                    src="/images/signature-black.png"
                    alt="signature"
                    width={100}
                    height={50}
                  />
                </motion.div>
                <motion.p
                  variants={headerElementVars}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="z-99 mt-6 cursor-pointer text-2xl text-black"
                  onClick={toggleMenu}
                >
                  Close
                </motion.p>
              </div>
              <motion.div
                variants={containerVars}
                initial="initial"
                animate="open"
                exit="initial"
                className="absolute top-0 left-0 flex h-full w-full flex-col items-center justify-center gap-6"
              >
                {navLinks.map((link, index) => {
                  return (
                    <div className="overflow-hidden" key={index}>
                      <MobileNavLink
                        onClick={handleClick}
                        title={link.title}
                        href={link.href}
                      />
                    </div>
                  );
                })}
              </motion.div>
              <motion.div
                variants={headerElementVars}
                initial="initial"
                animate="animate"
                exit="exit"
                className="mt-auto mb-4 flex justify-center"
              >
                <FlipLink
                  href="/showreel"
                  className="cursor-pointer border-b-4 border-black text-center text-4xl tracking-wide"
                  onClick={() => handleClick("/showreel")}
                >
                  View Showreel
                </FlipLink>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
