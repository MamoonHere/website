"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

interface Target {
  tab: string;
  headline: ReactNode;
  description: string;
  useCases: string[];
  cta: { label: string; href: string };
  image: { src: string; alt: string };
}

const TARGETS: Record<"nonprofit" | "education", Target> = {
  nonprofit: {
    tab: "Non-Profits",
    headline: <>Technology built for<br />organisations that give back.</>,
    description:
      "We work with registered not-for-profits at substantially reduced rates — because production-grade software shouldn't be out of reach for the people doing the most important work. Same senior team. Same long-term thinking.",
    useCases: [
      "Donor CRM and contribution management",
      "Grant tracking and compliance reporting",
      "Volunteer coordination and scheduling",
      "Impact measurement dashboards",
      "Accessible public-facing websites",
      "Third-party integrations (Xero, Salesforce, and more)",
    ],
    cta: { label: "TALK ABOUT YOUR MISSION", href: "/contact" },
    image: {
      src: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1200&q=80",
      alt: "Community volunteers working together",
    },
  },
  education: {
    tab: "Education",
    headline: <>Learning platforms built<br />for how education works.</>,
    description:
      "From primary schools to universities, we build education technology that's accessible, maintainable, and shaped around your institution — not someone else's template or licensing model.",
    useCases: [
      "Student information and enrolment systems",
      "E-learning platforms and LMS integrations",
      "Parent and student portals",
      "Attendance, progress, and reporting tools",
      "Curriculum and content management",
      "Compliance and accreditation support",
    ],
    cta: { label: "TALK ABOUT YOUR INSTITUTION", href: "/contact" },
    image: {
      src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80",
      alt: "Students learning in a modern environment",
    },
  },
};

type TargetKey = keyof typeof TARGETS;

export default function SocialImpact() {
  const [active, setActive] = useState<TargetKey>("nonprofit");
  const target = TARGETS[active];

  return (
    <section id="social-impact" className="bg-[#0a0a0a] py-28 lg:py-40">
      <div className="max-w-screen-2xl mx-auto px-8 lg:px-20">

        <div className="mb-14 lg:mb-16">
          <p className="font-body text-xs text-brand-primary tracking-[0.22em] uppercase mb-5">
            Community Commitment
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end gap-6 sm:gap-10">
            <h2
              className="font-heading font-bold text-white leading-[1.05] flex-1
                         text-3xl sm:text-5xl xl:text-[3.5rem]
                         animate-hero-fade-up [animation-delay:100ms]"
            >
              Dedicated support for<br />mission-driven organisations.
            </h2>
            <div className="flex gap-2 shrink-0 self-start sm:self-auto sm:pb-1">
              {(Object.keys(TARGETS) as TargetKey[]).map((key) => (
                <button
                  key={key}
                  onClick={() => setActive(key)}
                  className={`font-heading font-bold text-[13px] tracking-[0.12em] uppercase
                              px-5 py-2.5 rounded-full transition-all duration-300
                              ${active === key
                                ? "bg-brand-primary text-brand-dark"
                                : "bg-white/[0.06] text-white/50 hover:text-white hover:bg-white/10"
                              }`}
                >
                  {TARGETS[key].tab}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-16 xl:gap-24
                        animate-hero-fade-up [animation-delay:200ms]">

          <div className="flex-1 min-w-0">
            <h3 className="font-heading font-bold text-white leading-[1.1]
                           text-3xl lg:text-4xl xl:text-[2.75rem] mb-6">
              {target.headline}
            </h3>
            <p className="font-body text-white/60 text-lg leading-relaxed mb-8 max-w-xl">
              {target.description}
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 mb-10">
              {target.useCases.map((uc) => (
                <li key={uc} className="flex items-start gap-3">
                  <span className="mt-[0.55em] w-1.5 h-1.5 rounded-full bg-brand-primary shrink-0" />
                  <span className="font-body text-white/65 text-[15px] leading-snug">{uc}</span>
                </li>
              ))}
            </ul>
            <Link
              href={target.cta.href}
              className="inline-flex items-center gap-2 font-heading font-bold
                         text-[13px] sm:text-[14px] tracking-[0.18em]
                         px-8 py-4 rounded-md bg-brand-primary text-brand-dark
                         hover:bg-brand-primary-hover transition-all duration-300"
            >
              {target.cta.label}
            </Link>
          </div>

          <div className="relative h-64 sm:h-80 lg:h-[480px] lg:w-[42%] xl:w-[44%]
                          shrink-0 rounded-3xl overflow-hidden">
            <Image
              key={active}
              src={target.image.src}
              alt={target.image.alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 44vw"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
