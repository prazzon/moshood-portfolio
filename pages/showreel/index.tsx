"use client";

import Hero from "@/components/showreel/hero";
import ShowreelList from "@/components/showreel/showreel-list";
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
    <ReactLenis root options={{ autoRaf: false }} ref={lenisRef}>
      <Hero />
      <ShowreelList />
    </ReactLenis>
  );
}
