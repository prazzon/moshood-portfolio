"use client";

import BTSList from "@/components/bts/bts-list";
import Hero from "@/components/bts/hero";
import SEO from "@/components/seo/seo";
import { pageSEO } from "@/constants";
import { cancelFrame, frame } from "framer-motion";
import ReactLenis, { LenisRef } from "lenis/react";
import { useEffect, useRef } from "react";

export default function BTS() {
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
        title={pageSEO.bts.title}
        description={pageSEO.bts.description}
        keywords={pageSEO.bts.keywords}
        ogImage={pageSEO.bts.ogImage}
        ogType={pageSEO.bts.ogType}
      />
      <ReactLenis root options={{ autoRaf: false }} ref={lenisRef}>
        <Hero />
        <BTSList />
      </ReactLenis>
    </>
  );
}
