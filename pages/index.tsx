import Biography from "@/components/home/biography";
import Collaborators from "@/components/home/collaborators";
import CTA from "@/components/home/cta";
import Filmography from "@/components/home/filmography";
import Hero from "@/components/home/hero";
import Press from "@/components/home/press";
import ShowreelHome from "@/components/home/showreel-home";
import { cancelFrame, frame } from "framer-motion";
import ReactLenis, { LenisRef } from "lenis/react";
import { useEffect, useRef } from "react";

export default function Home() {
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
      <ShowreelHome />
      <Filmography />
      <Press />
      <Collaborators />
      <CTA />
    </ReactLenis>
  );
}
