import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div
      className="relative h-[500px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed bottom-0 h-[500px] w-full">
        <div className="flex h-full w-full flex-col justify-between bg-[#4E4E5A] px-12 py-8">
          <Nav />
          <div className="flex items-end justify-between">
            <h1 className="mt-10 text-[14vw] leading-[0.8]">Moshood Obatula</h1>
            <p>©copyright</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const Nav = () => {
  return (
    <div className="flex shrink-0 gap-20">
      <div className="flex flex-col gap-2 tracking-widest">
        <h3 className="mb-2 text-2xl text-[#ffffff80] uppercase">Navigation</h3>
        <Link href="/" className="text-xl">
          Home
        </Link>
        <Link href="/biography" className="text-xl">
          Biography
        </Link>
        <Link href="/filmography" className="text-xl">
          Filmography
        </Link>
        <Link href="/press" className="text-xl">
          Press
        </Link>
      </div>
      {/* <div className="flex flex-col gap-2">
        <h3 className="mb-2 text-[#ffffff80] uppercase">Education</h3>
        <p>News</p>
        <p>Learn</p>
        <p>Certification</p>
        <p>Publications</p>
      </div> */}
    </div>
  );
};
