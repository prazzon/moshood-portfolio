import { collaborators } from "@/constants";
import Image from "next/image";
import InfiniteScroll from "../ui/infinite-scroll/infinite-scroll";
import Intro from "../ui/intro";

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
          {collaborators.slice(0, 16).map((collaborator) => (
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
                <h1 className="z-10 leading-none font-medium tracking-widest md:text-xl">
                  {collaborator.name}
                </h1>
                <span className="z-10 text-sm leading-none tracking-wide md:text-lg">
                  {collaborator.project}
                </span>
              </div>
            </li>
          ))}
        </InfiniteScroll>
        <InfiniteScroll
          speed="slow"
          direction="right"
          className="mx-auto !max-w-full"
          innerClassName="!gap-4 md:!gap-12"
        >
          {collaborators.slice(16, collaborators.length).map((collaborator) => (
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
                <h1 className="z-10 leading-none font-medium tracking-widest md:text-xl">
                  {collaborator.name}
                </h1>
                <span className="z-10 text-sm leading-none tracking-wide md:text-lg">
                  {collaborator.project}
                </span>
              </div>
            </li>
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

// type Collaborator = (typeof collaborators)[0];

// function CollaboratorCard({ collaborator }: { collaborator: Collaborator }) {
// function CollaboratorCard({ collaborator }: { collaborator: Collaborator }) {
//   return (
//     //  <li
//     //    key={collaborator.name}
//     //    className="group relative flex size-40 flex-col items-center gap-6 overflow-hidden !rounded-2xl md:size-52"
//     //  >
//     <li
//       key={collaborator.name}
//       className="group relative mt-8 flex size-40 cursor-pointer flex-col items-center gap-6 overflow-hidden !rounded-2xl sm:h-68 sm:w-52"
//     >
//       <div className="absolute top-0 z-5 h-full w-full bg-gradient-to-b from-transparent to-black/80" />
//       <Image
//         src={collaborator.image}
//         className="object-cover grayscale transition-all duration-300 group-hover:scale-102 group-hover:grayscale-0"
//         fill
//         alt="image"
//       />
//       <div className="absolute bottom-0 flex w-full flex-col justify-center space-y-2 p-3 text-center text-white">
//         <h1 className="z-10 leading-none font-medium tracking-widest md:text-xl">
//           {collaborator.name}
//         </h1>
//         <span className="z-10 text-sm leading-none tracking-wide md:text-lg">
//           {collaborator.project}
//         </span>
//       </div>
//     </li>
//   );
// }
