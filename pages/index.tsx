import Biography from "@/components/home/biography";
import Collaborators from "@/components/home/collaborators";
import CTA from "@/components/home/cta";
import Filmography from "@/components/home/filmography";
import Hero from "@/components/home/hero";
import Press from "@/components/home/press";
import ShowreelHome from "@/components/home/showreel-home";
import SEO from "@/components/seo/seo";
import { pageSEO } from "@/constants";
import {
  generateOrganizationSchema,
  generatePersonSchema,
  generateWebSiteSchema,
} from "@/lib/seo";
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

  // Generate structured data for homepage
  const personSchema = generatePersonSchema();
  const organizationSchema = generateOrganizationSchema();
  const websiteSchema = generateWebSiteSchema();

  // Combine schemas into an array
  const structuredData = [personSchema, organizationSchema, websiteSchema];

  return (
    <>
      <SEO
        title={pageSEO.home.title}
        description={pageSEO.home.description}
        keywords={pageSEO.home.keywords}
        ogType={pageSEO.home.ogType}
        structuredData={structuredData}
      />
      <ReactLenis root options={{ autoRaf: false }} ref={lenisRef}>
        <Hero />
        <Biography />
        <ShowreelHome />
        <Filmography />
        <Press />
        <Collaborators />
        <CTA />
      </ReactLenis>
    </>
  );
}
