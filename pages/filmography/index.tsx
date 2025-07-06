"use client";

import Hero from "@/components/filmography/hero";
import SEO from "@/components/seo/seo";
import ItemList from "@/components/ui/item-list";
import { filmographyItems, pageSEO } from "@/constants";
import { generateCreativeWorkSchema } from "@/lib/seo";
import { cancelFrame, frame } from "framer-motion";
import { LenisRef, ReactLenis } from "lenis/react";
import { useEffect, useRef } from "react";

export default function Filmography() {
  const lenisRef = useRef<LenisRef>(null);

  useEffect(() => {
    function update(data: { timestamp: number }) {
      const time = data.timestamp;
      lenisRef.current?.lenis?.raf(time);
    }

    frame.update(update, true);

    return () => cancelFrame(update);
  }, []);

  // Generate structured data for filmography works
  const filmWorksSchema = filmographyItems.map((item) =>
    generateCreativeWorkSchema({
      name: item.title,
      description: `${item.title} - ${item.rightText} (${item.subTitle})`,
      dateCreated: item.subTitle,
      genre: "Film",
      image: item.image,
    }),
  );

  return (
    <>
      <SEO
        title={pageSEO.filmography.title}
        description={pageSEO.filmography.description}
        keywords={pageSEO.filmography.keywords}
        ogImage={pageSEO.filmography.ogImage}
        ogType={pageSEO.filmography.ogType}
        structuredData={filmWorksSchema}
      />
      <ReactLenis root options={{ autoRaf: false }} ref={lenisRef}>
        <Hero />
        <div className="mx-auto min-h-screen max-w-7xl p-8 px-4 pb-0">
          <ItemList items={filmographyItems} />
        </div>
      </ReactLenis>
    </>
  );
}
