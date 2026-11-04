"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { PAIN_POINTS } from "@/constants";

const TAB_DURATION = 5000;

export default function PainPoints() {
  const [active, setActive] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const point = PAIN_POINTS[active];

  const startTimer = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActive(prev => (prev + 1) % PAIN_POINTS.length);
    }, TAB_DURATION);
  };

  useEffect(() => {
    startTimer();
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, []);

  const handleTabClick = (i: number) => {
    setActive(i);
    startTimer();
  };

  return (
    <section className="bg-brand-bg-subtle py-28 lg:py-40">
      <div className="max-w-screen-2xl mx-auto px-8 lg:px-20">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-12">

          <div className="lg:w-[38%] shrink-0 flex flex-col">
            <h2 className="font-heading font-bold text-brand-dark leading-[1.05]
                           text-4xl sm:text-5xl lg:text-5xl xl:text-[3.5rem] mb-12
                           animate-hero-fade-up [animation-delay:100ms]">
              What&apos;s holding you back?
            </h2>

            <ul className="flex flex-col" role="list">
              {PAIN_POINTS.map((p, i) => (
                <li key={p.tab}>
                  <button
                    onClick={() => handleTabClick(i)}
                    className={`relative w-full text-left px-6 py-5 overflow-hidden transition-all duration-200 ${
                      active === i
                        ? "bg-brand-primary/[0.10] text-brand-dark"
                        : "text-neutral-500 hover:text-neutral-700"
                    }`}
                  >
                    <span className="absolute left-0 top-0 w-[3px] h-full bg-neutral-200" />
                    {active === i && (
                      <span
                        className="absolute left-0 top-0 w-[3px] bg-brand-primary"
                        style={{ animation: `tab-progress ${TAB_DURATION}ms linear forwards` }}
                      />
                    )}
                    <span className="relative font-heading font-semibold text-[15px]">
                      {p.tab}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div
            key={active}
            className="flex-1 flex flex-col xl:flex-row gap-10 xl:gap-12 animate-hero-fade-up"
            style={{ animationDuration: "0.35s" }}
          >
            <div className="flex-1 flex flex-col justify-center xl:py-4">
              <h3 className="font-heading font-bold text-brand-dark leading-[1.1] mb-4
                             text-3xl sm:text-4xl lg:text-[2.5rem]">
                {point.headline}
              </h3>
              <p className="font-body text-neutral-600 leading-relaxed mb-6 text-base lg:text-lg">
                {point.description}
              </p>
              <ul className="flex flex-col gap-3 mb-10">
                {point.points.map(pt => (
                  <li key={pt} className="flex items-start gap-3">
                    <span className="mt-[0.45em] w-1.5 h-1.5 rounded-full bg-brand-primary shrink-0" />
                    <span className="font-body text-neutral-600 text-base leading-snug">{pt}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={point.cta.href}
                className="self-start inline-flex items-center gap-2 font-heading font-bold
                           text-[13px] sm:text-[14px] tracking-[0.18em]
                           px-6 py-3.5 sm:px-8 sm:py-4 rounded-md bg-brand-primary text-brand-dark
                           hover:bg-brand-primary-hover
                           transition-all duration-300"
              >
                {point.cta.label}
              </Link>
            </div>

            <div className="xl:w-[46%] shrink-0 group">
              <div className="relative h-64 sm:h-80 xl:h-full min-h-[380px] rounded-2xl overflow-hidden">
                <Image
                  src={point.image}
                  alt={point.headline}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 1280px) 100vw, 46vw"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
