"use client";

import gsap from "gsap";
import { useCallback, useEffect, useRef } from "react";

type Props = {
  text: string;
};

export default function InfiniteTextSlider({ text }: Props) {
  const firstText = useRef<HTMLParagraphElement>(null);
  const secondText = useRef<HTMLParagraphElement>(null);
  const thirdText = useRef<HTMLParagraphElement>(null);
  const forthText = useRef<HTMLParagraphElement>(null);
  const fifthText = useRef<HTMLParagraphElement>(null);
  const sixthText = useRef<HTMLParagraphElement>(null);
  const seventhText = useRef<HTMLParagraphElement>(null);
  const eighthText = useRef<HTMLParagraphElement>(null);
  const ninthText = useRef<HTMLParagraphElement>(null);
  const tenthText = useRef<HTMLParagraphElement>(null);
  const slider = useRef<HTMLDivElement>(null);

  const xPercent = useRef(0);
  const direction = useRef(-1);
  const animate = useCallback(() => {
    if (xPercent.current <= -100) {
      xPercent.current = 0;
    }
    if (xPercent.current > 0) {
      xPercent.current = -100;
    }

    gsap.set(
      [
        firstText.current,
        secondText.current,
        thirdText.current,
        forthText.current,
        fifthText.current,
        sixthText.current,
        seventhText.current,
        eighthText.current,
        ninthText.current,
        tenthText.current,
      ],
      {
        xPercent: xPercent.current,
      },
    );

    requestAnimationFrame(animate);
    xPercent.current += 0.05 * direction.current;
  }, []);

  useEffect(() => {
    const initScrollTrigger = async () => {
      const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
      gsap.registerPlugin(ScrollTrigger);

      gsap.to(slider.current, {
        scrollTrigger: {
          trigger: document.documentElement,
          scrub: 0.25,
          start: 0,
          end: window.innerHeight,
          onUpdate: (e) => {
            direction.current = e.direction * -1;
          },
        },
        x: "-500px",
      });
    };

    initScrollTrigger();
    requestAnimationFrame(animate);
  }, [animate]);

  return (
    <div className="relative overflow-hidden">
      <div>
        <div
          ref={slider}
          className={
            "relative flex rotate-1 text-[50px] whitespace-nowrap md:text-[80px] lg:text-[100px]"
          }
        >
          <p ref={firstText} className="relative m-0 inline-block pr-[50px]">
            {text} -
          </p>
          <p ref={secondText} className="relative m-0 inline-block pr-[50px]">
            {text} -
          </p>
          <p ref={thirdText} className="relative m-0 inline-block pr-[50px]">
            {text} -
          </p>
          <p ref={forthText} className="relative m-0 inline-block pr-[50px]">
            {text} -
          </p>
          <p ref={fifthText} className="relative m-0 inline-block pr-[50px]">
            {text} -
          </p>
          <p ref={sixthText} className="relative m-0 inline-block pr-[50px]">
            {text} -
          </p>
          <p ref={seventhText} className="relative m-0 inline-block pr-[50px]">
            {text} -
          </p>
          <p ref={eighthText} className="relative m-0 inline-block pr-[50px]">
            {text} -
          </p>
          <p ref={ninthText} className="relative m-0 inline-block pr-[50px]">
            {text} -
          </p>
          <p ref={tenthText} className="relative m-0 inline-block pr-[50px]">
            {text} -
          </p>
        </div>
      </div>
    </div>
  );
}
