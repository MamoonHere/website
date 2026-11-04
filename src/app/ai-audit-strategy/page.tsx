import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections";

export const metadata: Metadata = {
  title: "AI Audit & Strategy — First Nations Digital",
  description: "A structured assessment of where AI delivers real ROI in your business — ranked by value, not by what's technically impressive.",
};

const PROBLEMS = [
  {
    heading: "The demo worked. Production didn't.",
    body: "Generic AI tools rarely connect cleanly to your systems, your data formats, or your team's actual workflow. The gap between a proof-of-concept and something your business depends on is where most AI projects go quiet.",
  },
  {
    heading: "The build started before the thinking did.",
    body: "Most AI projects begin with a technology choice, not a business problem. When the solution comes before the problem definition, the result is a tool nobody uses — and a budget that's hard to defend.",
  },
  {
    heading: "Nobody tracked whether it worked.",
    body: "Without baseline measurement before deployment, there's no way to prove ROI, no signal for when to adjust, and no honest answer to whether the investment was worth making.",
  },
];

const PHASES = [
  {
    step: "1",
    title: "Map",
    timeframe: "Weeks 1–2",
    description: "We document every workflow that touches decisions or data. We identify the ones burning the most time, carrying the most compliance risk, or blocking growth — without assumptions.",
  },
  {
    step: "2",
    title: "Score",
    timeframe: "Week 3",
    description: "We run each candidate workflow through a feasibility and ROI matrix. You get an honest prioritised list — including the ones where AI genuinely isn't the right answer.",
  },
  {
    step: "3",
    title: "Roadmap",
    timeframe: "Week 4",
    description: "A ranked implementation plan with effort estimates, risk flags, and a recommended first sprint — scoped and ready to execute the moment you give the go-ahead.",
  },
];

const DELIVERABLES = [
  "Workflow map covering 20–50 documented processes",
  "AI readiness score per workflow",
  "Build vs. buy recommendation for each opportunity",
  "ROI-ranked implementation roadmap",
  "First-win sprint scoped and ready to execute",
  "90-day implementation calendar",
];

export default function AiAuditStrategyPage() {
  return (
    <main className="flex-1">
      <PageHero
        headline={<>Find where AI earns<br />its place in your business.</>}
        description="Most AI projects fail not because the technology doesn't work — but because nobody mapped it to a workflow that actually needed it. We fix that before you spend a dollar on build."
        cta={{ label: "BOOK A FREE DISCOVERY CALL", href: "/contact" }}
      />

      <section className="bg-brand-bg-subtle py-28 lg:py-40">
        <div className="max-w-screen-2xl mx-auto px-8 lg:px-20">
          <h2 className="font-heading font-bold text-brand-dark leading-[1.05]
                         text-3xl sm:text-5xl xl:text-[3.5rem] mb-14 lg:mb-16
                         animate-hero-fade-up [animation-delay:100ms]">
            Where AI projects<br />typically break down.
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8
                          animate-hero-fade-up [animation-delay:200ms]">
            {PROBLEMS.map(({ heading, body }) => (
              <div key={heading} className="bg-white rounded-2xl p-8 lg:p-9 shadow-sm">
                <h3 className="font-heading font-bold text-brand-dark text-xl lg:text-2xl leading-tight mb-4">
                  {heading}
                </h3>
                <p className="font-body text-neutral-600 text-base leading-relaxed">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0a0a0a] py-28 lg:py-40">
        <div className="max-w-screen-2xl mx-auto px-8 lg:px-20">
          <h2 className="font-heading font-bold text-white leading-[1.05]
                         text-3xl sm:text-5xl xl:text-[3.5rem] mb-14 lg:mb-16
                         animate-hero-fade-up [animation-delay:100ms]">
            The four-week<br />audit process.
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8
                          animate-hero-fade-up [animation-delay:200ms]">
            {PHASES.map(({ step, title, timeframe, description }) => (
              <div key={title} className="bg-white/[0.04] rounded-2xl p-8 lg:p-10">
                <div className="font-heading font-bold text-brand-primary text-7xl lg:text-8xl leading-none mb-6 select-none">
                  {step}
                </div>
                <p className="font-body text-white/40 text-sm mb-2">{timeframe}</p>
                <h3 className="font-heading font-bold text-white text-2xl mb-4">{title}</h3>
                <p className="font-body text-white/60 text-base leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-bg-subtle py-28 lg:py-40">
        <div className="max-w-screen-2xl mx-auto px-8 lg:px-20">
          <div className="flex flex-col lg:flex-row lg:items-start gap-14 lg:gap-20 xl:gap-28">
            <div className="lg:w-[40%] shrink-0">
              <h2 className="font-heading font-bold text-brand-dark leading-[1.05]
                             text-3xl sm:text-5xl xl:text-[3.5rem] mb-6
                             animate-hero-fade-up [animation-delay:100ms]">
                What you<br />walk away with.
              </h2>
              <p className="font-body text-neutral-600 text-lg leading-relaxed
                            animate-hero-fade-up [animation-delay:200ms]">
                At the end of the four weeks, you have a clear, executable plan — not a slide deck of possibilities. The roadmap is scoped to your actual constraints and ready to hand to any engineering team, including ours.
              </p>
            </div>
            <ul className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-5
                           animate-hero-fade-up [animation-delay:300ms]">
              {DELIVERABLES.map(item => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-[0.5em] w-1.5 h-1.5 rounded-full bg-brand-primary shrink-0" />
                  <span className="font-body text-neutral-700 text-base leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[#0a0a0a] py-24 lg:py-28">
        <div className="max-w-screen-2xl mx-auto px-8 lg:px-20 text-center">
          <h2 className="font-heading font-bold text-white leading-[1.05]
                         text-3xl sm:text-4xl xl:text-5xl mb-6
                         animate-hero-fade-up [animation-delay:100ms]">
            Start with a free 30-minute call.
          </h2>
          <p className="font-body text-white/55 text-lg leading-relaxed max-w-lg mx-auto mb-10
                        animate-hero-fade-up [animation-delay:200ms]">
            We&apos;ll tell you honestly whether an audit is the right next step — and if it isn&apos;t, we&apos;ll tell you what is.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 font-heading font-bold
                       text-[13px] sm:text-[14px] tracking-[0.18em]
                       px-8 py-4 rounded-md bg-brand-primary text-brand-dark
                       hover:bg-brand-primary-hover transition-all duration-300"
          >
            BOOK YOUR FREE DISCOVERY CALL
          </Link>
        </div>
      </section>
    </main>
  );
}
