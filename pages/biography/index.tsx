import Biography from "@/components/biography/biography";
import Hero from "@/components/biography/hero";
import Section from "@/components/biography/section";
import CTA from "@/components/home/cta";
import { cancelFrame, frame } from "framer-motion";
import { LenisRef, ReactLenis } from "lenis/react";
import { useEffect, useRef } from "react";

export default function AboutPage() {
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
      <Biography />
      <Section />
      <CTA />
    </ReactLenis>
  );
}
