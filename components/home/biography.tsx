import TextReveal from "../ui/text-reveal";

export default function Biography() {
  return (
    <>
      <div className="min-h-screen pt-28 md:pt-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start space-y-4 px-2 pb-42 md:grid-cols-[400px_1fr] md:px-4">
          <TextReveal delay={0.2}>
            <h1 className="px-8 text-6xl font-bold tracking-wide">Biography</h1>
          </TextReveal>
          <TextReveal delay={0.4}>
            <p className="px-8 text-3xl leading-12 tracking-wider md:leading-15">
              {/* <p className="font-poppins text-3xl leading-14"> */}
              Moshood Obatula is an award-winning filmmaker, director, and
              managing director behind RelatedMotion. Born in the vibrant city
              of Lagos, Nigeria, he nurtured his early passion for the arts. His
              journey into the world of filmmaking led him to study film and TV
              at City Varsity University, Johannesburg Campus. He seamlessly
              blends genres, infusing his films with elements of magical realism
              and vibrant cultural motifs that contribute to the distinctiveness
              of his work. This earned him the monicker “The Dark Visionary”.
            </p>
          </TextReveal>
        </div>
      </div>
    </>
  );
}
