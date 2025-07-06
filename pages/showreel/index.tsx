"use client";

import SEO from "@/components/seo/seo";
import Hero from "@/components/showreel/hero";
import ShowreelList from "@/components/showreel/showreel-list";
import { pageSEO } from "@/constants";
import { cancelFrame, frame } from "framer-motion";
import ReactLenis, { LenisRef } from "lenis/react";
import { useEffect, useRef } from "react";

export default function Showreel() {
  const lenisRef = useRef<LenisRef>(null);

  useEffect(() => {
    function update(data: { timestamp: number }) {
      const time = data.timestamp;
      lenisRef.current?.lenis?.raf(time);
    }

    frame.update(update, true);

    return () => cancelFrame(update);
  }, []);

  return (
    <>
      <SEO
        title={pageSEO.showreel.title}
        description={pageSEO.showreel.description}
        keywords={pageSEO.showreel.keywords}
        ogImage={pageSEO.showreel.ogImage}
        ogType={pageSEO.showreel.ogType}
      />
      <ReactLenis root options={{ autoRaf: false }} ref={lenisRef}>
        <Hero />
        <ShowreelList />
      </ReactLenis>
    </>
  );
}
