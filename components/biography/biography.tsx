import TextReveal from "../ui/text-reveal";

export default function Biography() {
  return (
    <div className="mx-auto my-40 flex max-w-7xl flex-col justify-center">
      <TextReveal delay={0.2}>
        <h1 className="mb-8 px-8 text-6xl font-bold tracking-wide md:text-8xl">
          Biography
        </h1>
      </TextReveal>
      <TextReveal delay={0.4}>
        <p className="px-8 text-2xl leading-12 tracking-widest md:text-4xl md:leading-15">
          Moshood Obatula is an award-winning filmmaker, director, and managing
          director behind RelatedMotion. Born in the vibrant city of Lagos,
          Nigeria, he nurtured his early passion for the arts. His journey into
          the world of filmmaking led him to study film and TV at City Varsity
          University, Johannesburg Campus. He seamlessly blends genres, infusing
          his films with elements of magical realism and vibrant cultural motifs
          that contribute to the distinctiveness of his work. This earned him
          the monicker “The Dark Visionary”.
        </p>
      </TextReveal>
    </div>
  );
}
