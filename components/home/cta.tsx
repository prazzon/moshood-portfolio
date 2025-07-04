import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import InfiniteScroll from "../ui/infinite-scroll/infinite-scroll";
import TextReveal from "../ui/text-reveal";

export default function CTA() {
  return (
    <div className="overflow-hidden py-8 md:py-0 md:pb-24">
      <InfiniteScroll
        className="mb-14 w-full !max-w-full border-y border-gray-400 text-xl text-gray-300 md:border-y-2 md:text-3xl"
        speed="normal"
        direction="left"
      >
        <span>Executive Producer</span>
        <span>{"+"}</span>
        <span>Director</span>
        <span>{"+"}</span>
        <span>Managing Director</span>
        <span>{"+"}</span>
        <span>Creative Director</span>
        <span>{"+"}</span>
        <span>Executive Producer</span>
        <span>{"+"}</span>
        <span>Director</span>
        <span>{"+"}</span>
        <span>Managing Director</span>
        <span>{"+"}</span>
        <span>Creative Director</span>
        <span>{"+"}</span>
      </InfiniteScroll>
      <div className="mx-auto flex max-w-7xl flex-col justify-between p-8 md:flex-row">
        <TextReveal>
          <h1 className="pb-12 text-6xl font-thin tracking-wider md:text-7xl">
            Let&apos;s work together
          </h1>
        </TextReveal>
        <div className="flex flex-col items-end gap-8 text-right text-2xl md:text-4xl">
          <TextReveal>
            <Link
              className="align-center flex border-b-2 border-gray-300 tracking-wider md:border-b-4"
              href="mailto:directormosh@gmail.com"
            >
              <div className="flex">
                <ArrowUpRight className="flex size-7 md:size-10" />
                Email
              </div>
            </Link>
          </TextReveal>
          <TextReveal>
            <Link
              className="align-center flex border-b-2 border-gray-300 tracking-wider md:border-b-4"
              href="https://www.instagram.com/directormosh?igsh=MWh2bWZ2YmYzN3BsMQ=="
            >
              <div className="flex justify-start">
                <ArrowUpRight className="flex size-7 md:size-10" />
                Instagram
              </div>
            </Link>
          </TextReveal>
          <TextReveal>
            <Link
              className="align-center flex border-b-2 border-gray-300 tracking-wider md:border-b-4"
              href="https://www.linkedin.com/in/moshood-obatula-814049343"
            >
              <div className="flex justify-start">
                <ArrowUpRight className="flex size-7 md:size-10" />
                LinkedIn
              </div>
            </Link>
          </TextReveal>
        </div>
      </div>
      <InfiniteScroll
        className="mt-14 w-full !max-w-full border-y border-gray-400 text-xl text-gray-300 md:border-y-2 md:text-3xl"
        speed="normal"
        direction="left"
      >
        <span>Executive Producer</span>
        <span>{"+"}</span>
        <span>Director</span>
        <span>{"+"}</span>
        <span>Managing Director</span>
        <span>{"+"}</span>
        <span>Creative Director</span>
        <span>{"+"}</span>
        <span>Executive Producer</span>
        <span>{"+"}</span>
        <span>Director</span>
        <span>{"+"}</span>
        <span>Managing Director</span>
        <span>{"+"}</span>
        <span>Creative Director</span>
        <span>{"+"}</span>
      </InfiniteScroll>
    </div>
  );
}
