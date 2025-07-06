import Biography from "@/components/biography/biography";
import Hero from "@/components/biography/hero";
import Section from "@/components/biography/section";
import CTA from "@/components/home/cta";
import SEO from "@/components/seo/seo";
import { pageSEO } from "@/constants";
import { generatePersonSchema } from "@/lib/seo";
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

  // Generate structured data for biography page
  const personSchema = generatePersonSchema();

  return (
    <>
      <SEO
        title={pageSEO.biography.title}
        description={pageSEO.biography.description}
        keywords={pageSEO.biography.keywords}
        ogImage={pageSEO.biography.ogImage}
        ogType={pageSEO.biography.ogType}
        structuredData={personSchema}
      />
      <ReactLenis root options={{ autoRaf: false }} ref={lenisRef}>
        <Hero />
        <Biography />
        <Section />
        <CTA />
      </ReactLenis>
    </>
  );
}
