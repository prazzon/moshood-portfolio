"use client";

import Hero from "@/components/press/hero";
import SEO from "@/components/seo/seo";
import ItemList from "@/components/ui/item-list";
import { pageSEO, pressItems } from "@/constants";
import { cancelFrame, frame } from "framer-motion";
import { LenisRef, ReactLenis } from "lenis/react";
import { useEffect, useRef } from "react";

export default function Press() {
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
        title={pageSEO.press.title}
        description={pageSEO.press.description}
        keywords={pageSEO.press.keywords}
        ogImage={pageSEO.press.ogImage}
        ogType={pageSEO.press.ogType}
      />
      <ReactLenis root options={{ autoRaf: false }} ref={lenisRef}>
        <Hero />
        <div className="mx-auto max-w-7xl p-8 px-4 pb-0">
          <ItemList items={pressItems} />
        </div>
      </ReactLenis>
    </>
  );
}
