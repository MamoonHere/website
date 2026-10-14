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
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-10">

        <div className="mb-16 lg:mb-24">
          <p className="font-body text-[11px] tracking-[0.35em] uppercase text-brand-primary mb-5">
            Challenges
          </p>
          <h2 className="font-heading font-bold text-brand-dark leading-[1.05]
                         text-4xl sm:text-5xl lg:text-6xl xl:text-[5.25rem] max-w-3xl">
            What&apos;s holding your business back?
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-20">

          {/* Tab list */}
          <ul className="flex flex-col lg:w-[30%] shrink-0 self-start lg:sticky lg:top-28" role="list">
            {PAIN_POINTS.map((p, i) => (
              <li key={p.tab}>
                <button
                  onClick={() => handleTabClick(i)}
                  className={`relative w-full text-left px-6 py-5 overflow-hidden transition-all duration-200 ${
                    active === i
                      ? "bg-brand-primary/5 text-brand-dark"
                      : "text-neutral-400 hover:text-neutral-600"
                  }`}
                >
                  <span className="absolute left-0 top-0 w-[3px] h-full bg-neutral-200" />
                  {active === i && (
                    <span
                      className="absolute left-0 top-0 w-[3px] bg-brand-primary"
                      style={{ animation: `tab-progress ${TAB_DURATION}ms linear forwards` }}
                    />
                  )}
                  <span className="relative flex items-center gap-3">
                    <span className="font-mono text-[10px] text-neutral-300 shrink-0 tabular-nums">
                      0{i + 1}
                    </span>
                    <span className="font-heading font-semibold text-[13px] lg:text-[14px] tracking-[0.06em]">
                      {p.tab}
                    </span>
                  </span>
                </button>
              </li>
            ))}
          </ul>

          {/* Content panel */}
          <div
            key={active}
            className="flex-1 flex flex-col xl:flex-row gap-10 xl:gap-14 animate-hero-fade-up"
            style={{ animationDuration: "0.35s" }}
          >
            {/* Text */}
            <div className="flex-1 flex flex-col justify-center xl:py-4">
              <span className="font-heading font-bold text-brand-primary text-[11px] tracking-[0.4em] uppercase mb-6 block">
                0{active + 1}
              </span>
              <h3 className="font-heading font-bold text-brand-dark leading-[1.1] mb-8
                             text-3xl sm:text-4xl lg:text-[2.75rem]">
                {point.headline}
              </h3>
              <p className="font-heading font-light text-neutral-400 leading-[1.65] mb-10
                            text-2xl lg:text-[1.75rem] max-w-sm">
                {point.description}
              </p>
              <Link
                href={point.cta.href}
                className="self-start inline-flex items-center font-heading font-bold
                           text-[11px] sm:text-[12px] tracking-[0.2em]
                           px-7 py-4 rounded-md bg-brand-primary text-brand-dark
                           shadow-[0_4px_24px_rgba(18,217,222,0.3)]
                           hover:bg-brand-primary-hover hover:shadow-[0_4px_32px_rgba(18,217,222,0.5)]
                           transition-all duration-200"
              >
                {point.cta.label}
              </Link>
            </div>

            {/* Image */}
            <div className="xl:w-[46%] shrink-0 group">
              <div className="relative h-64 sm:h-80 xl:h-full min-h-[380px] rounded-2xl overflow-hidden
                              shadow-[0_24px_64px_rgba(0,0,0,0.12)]">
                <Image
                  src={point.image}
                  alt={point.headline}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 1280px) 100vw, 46vw"
                />
                <div className="absolute inset-0 bg-brand-primary/10" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
