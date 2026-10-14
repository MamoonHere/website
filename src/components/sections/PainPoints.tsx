"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PAIN_POINTS } from "@/constants";

export default function PainPoints() {
  const [active, setActive] = useState(0);
  const point = PAIN_POINTS[active];

  return (
    <section className="py-24 lg:py-32 border-t border-white/5">
      <div className="max-w-screen-xl mx-auto px-8 lg:px-12">

        <div className="mb-12 lg:mb-16">
          <p className="font-body text-[11px] tracking-[0.25em] uppercase text-brand-primary mb-3">
            Challenges
          </p>
          <h2 className="font-heading font-bold text-white leading-tight
                         text-3xl sm:text-4xl lg:text-5xl max-w-2xl">
            What&apos;s holding your business back?
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">

          <ul className="flex flex-col lg:w-[30%] shrink-0" role="list">
            {PAIN_POINTS.map((p, i) => (
              <li key={p.tab}>
                <button
                  onClick={() => setActive(i)}
                  className={`w-full text-left px-5 py-4 border-l-[3px] transition-all duration-200 ${
                    active === i
                      ? "border-brand-primary bg-white/[0.04] text-white"
                      : "border-white/10 text-white/35 hover:text-white/65 hover:border-white/25"
                  }`}
                >
                  <span className="font-heading font-semibold text-[13px] tracking-[0.08em]">
                    {p.tab}
                  </span>
                </button>
              </li>
            ))}
          </ul>

          <div
            key={active}
            className="flex-1 flex flex-col lg:flex-row gap-8 lg:gap-10 animate-hero-fade-up"
            style={{ animationDuration: "0.4s" }}
          >
            <div className="flex-1 flex flex-col justify-center">
              <span className="font-heading text-brand-primary text-[11px] tracking-[0.3em] mb-4 block">
                0{active + 1}
              </span>
              <h3 className="font-heading font-bold text-white leading-tight mb-4 text-2xl sm:text-3xl">
                {point.headline}
              </h3>
              <p className="font-body text-white/55 leading-relaxed mb-8 max-w-md">
                {point.description}
              </p>
              <Link
                href={point.cta.href}
                className="self-start inline-flex items-center font-heading font-bold
                           text-[11px] sm:text-[12px] tracking-[0.18em]
                           px-6 py-3 rounded-md bg-brand-primary text-brand-dark
                           shadow-[0_0_18px_rgba(18,217,222,0.25)]
                           hover:bg-brand-primary-hover hover:shadow-[0_0_28px_rgba(18,217,222,0.5)]
                           transition-all duration-200"
              >
                {point.cta.label}
              </Link>
            </div>

            <div className="lg:w-[45%] shrink-0">
              <div className="relative h-56 sm:h-72 lg:h-full min-h-[300px] rounded-xl overflow-hidden">
                <Image
                  src={point.image}
                  alt={point.headline}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
