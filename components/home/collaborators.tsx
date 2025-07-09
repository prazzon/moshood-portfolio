import Image from "next/image";
import InfiniteScroll from "../ui/infinite-scroll/infinite-scroll";
import Intro from "../ui/intro";

const collaborators = [
  {
    name: "Eniola Badmus",
    connection: "Collaborator",
    project: "Create The Future",
    date: 2024,
    image: "/images/collaborators/eniola_badmus.png",
  },
  {
    name: "Praise",
    connection: "Collaborator",
    project: "The Godfather",
    date: 2025,
    image: "/images/collaborators/praiz.png",
  },
  {
    name: "Kelechi Amadi-Obi",
    connection: "Collaborator",
    project: "Create The Future",
    date: 2024,
    image: "/images/collaborators/kelechi_amadi_obi.png",
  },
  {
    name: 'Jide "JBlaze" Oyegbile',
    connection: "Collaborator",
    project: "Create The Future",
    date: 2024,
    image: "/images/collaborators/jblaze.png",
  },
  {
    name: "Bisola Aiyeola",
    connection: "Collaborator",
    project: "Invest Naija",
    date: 2024,
    image: "/images/collaborators/bisola_aiyeola.png",
  },
  {
    name: "Papama Tungela",
    connection: "Collaborator",
    project: "Agemo, Plague, Now, Part Of Me",
    date: 2025,
    image: "/images/collaborators/papama_tungela.png",
  },
  {
    name: "Tshepo Mkwanazi",
    connection: "Collaborator",
    project: "Cardbury Triplet Commercial",
    date: 2016,
    image: "/images/collaborators/tshepo_mkwanazi.png",
  },
  {
    name: "Uzoamaka Onuoha",
    connection: "Collaborator",
    project: "Agemo",
    date: 2024,
    image: "/images/collaborators/uzoamaka_onuoha.png",
  },
  {
    name: "Jide Kosoko",
    connection: "Collaborator",
    project: "Agemo",
    date: 2024,
    image: "/images/collaborators/jide_kosoko.png",
  },
  {
    name: "Yinka Quadri",
    connection: "Collaborator",
    project: "Agemo",
    date: 2024,
    image: "/images/collaborators/yinka_quadri.png",
  },
  {
    name: "Denrele Edun",
    connection: "Collaborator",
    project: "The Godfather",
    date: 2025,
    image: "/images/collaborators/denrele_edun.png",
  },
  {
    name: "Moet Abebe",
    connection: "Collaborator",
    project: "The Godfather",
    date: 2025,
    image: "/images/collaborators/moet_abebe.png",
  },
  {
    name: "Venita Akpofure",
    connection: "Collaborator",
    project: "The Godfather",
    date: 2025,
    image: "/images/collaborators/venita_akpofure.png",
  },
  {
    name: "Frank Edoho",
    connection: "Collaborator",
    project: "The Godfather",
    date: 2025,
    image: "/images/collaborators/frank_edoho.png",
  },
  {
    name: "Chimezie Imo",
    connection: "Collaborator",
    project: "The Godfather",
    date: 2025,
    image: "/images/collaborators/chimezie_imo.png",
  },
  {
    name: "Tolani Baj",
    connection: "Collaborator",
    project: "The Godfather",
    date: 2025,
    image: "/images/collaborators/tolani_baj.png",
  },
  {
    name: "Stephanie Coker",
    connection: "Collaborator",
    project: "The Godfather",
    date: 2025,
    image: "/images/collaborators/stephanie_coker.png",
  },
  {
    name: "Darasimi Nadi",
    connection: "Collaborator",
    project: "Agemo",
    date: 2024,
    image: "/images/collaborators/darasimi_nadi.png",
  },
  {
    name: "Seun Kuti",
    connection: "Collaborator",
    project: "The Godfather",
    date: 2025,
    image: "/images/collaborators/seun_kuti.jpg",
  },
  {
    name: "Yetunde Kuti",
    connection: "Collaborator",
    project: "The Godfather",
    date: 2025,
    image: "/images/collaborators/yetunde_kuti.png",
  },
  {
    name: "Ric Hassani",
    connection: "Collaborator",
    project: "The Godfather",
    date: 2025,
    image: "/images/collaborators/ric_hassani.png",
  },
  {
    name: "Foluke Daramola",
    connection: "Collaborator",
    project: "Agemo",
    date: 2024,
    image: "/images/collaborators/foluke_daramola.png",
  },
  {
    name: "Katarina Ataman",
    connection: "Collaborator",
    project: "The Godfather, Starbite With Katrina",
    date: 2025,
    image: "/images/collaborators/katarina_ataman.png",
  },
];

export default function Collaborators() {
  return (
    <div className="mb-24 overflow-hidden">
      <Intro text="Collaborators" className="p-8" />
      <div className="mt-8">
        <InfiniteScroll
          speed="slow"
          direction="left"
          className="mx-auto !max-w-full"
          innerClassName="!gap-4 md:!gap-12"
        >
          {collaborators.slice(0, 16).map((collaborator, index) => (
            <CollaboratorCard key={index} collaborator={collaborator} />
          ))}
        </InfiniteScroll>
        <InfiniteScroll
          speed="slow"
          direction="right"
          className="mx-auto !max-w-full"
          innerClassName="!gap-4 md:!gap-12"
        >
          {collaborators
            .slice(16, collaborators.length)
            .map((collaborator, index) => (
              <CollaboratorCard key={index} collaborator={collaborator} />
            ))}
        </InfiniteScroll>
        {/* <InfiniteScroll
          speed="slow"
          direction="left"
          className="mx-auto !max-w-full"
          innerClassName="!gap-4 md:!gap-12"
        >
          {collaborators
            .slice(16, collaborators.length)
            .map((collaborator, index) => (
              <CollaboratorCard key={index} collaborator={collaborator} />
            ))}
        </InfiniteScroll> */}
      </div>
    </div>
  );
}

type Collaborator = (typeof collaborators)[0];

function CollaboratorCard({ collaborator }: { collaborator: Collaborator }) {
  return (
    //  <li
    //    key={collaborator.name}
    //    className="group relative flex size-40 flex-col items-center gap-6 overflow-hidden !rounded-2xl md:size-52"
    //  >
    <li
      key={collaborator.name}
      className="group relative mt-8 flex size-40 cursor-pointer flex-col items-center gap-6 overflow-hidden !rounded-2xl sm:h-68 sm:w-52"
    >
      <div className="absolute top-0 z-5 h-full w-full bg-gradient-to-b from-transparent to-black/80" />
      <Image
        src={collaborator.image}
        className="object-cover grayscale transition-all duration-300 group-hover:scale-102 group-hover:grayscale-0"
        fill
        alt="image"
      />
      <div className="absolute bottom-0 flex w-full flex-col justify-center space-y-2 p-3 text-center text-white">
        <h2 className="z-10 leading-none font-medium tracking-widest md:text-xl">
          {collaborator.name}
        </h2>
        <span className="z-10 text-sm leading-none tracking-wide md:text-lg">
          {collaborator.project}
        </span>
      </div>
    </li>
  );
}
