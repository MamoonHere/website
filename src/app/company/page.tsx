import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections";

export const metadata: Metadata = {
  title: "Company — First Nations Digital",
  description: "First Nations Digital is an engineering-led, Indigenous-owned technology firm built on long-term partnerships, honest delivery, and senior-only teams.",
};

const PILLARS = [
  {
    title: "Principal-delivered",
    body: "The engineers who scope your project are the engineers who build it. We don't have a 'presentation team' and a 'delivery team' — there's one team, and you meet them on day one.",
  },
  {
    title: "Honest scoping",
    body: "We'll tell you when something isn't the right fit for custom software or AI. A solution that doesn't solve your actual problem is a liability, not an asset — and billing you for one isn't a business we want to run.",
  },
  {
    title: "Transparent delivery",
    body: "Weekly builds. Weekly demos. You always know exactly where your project stands — there's no big reveal at the end when it's too late to change direction.",
  },
  {
    title: "Long-term thinking",
    body: "We build businesses, not billable hours. That means designing for maintainability, documentation that actually exists, and handovers your team can understand without us in the room.",
  },
];

const APPROACH_ITEMS = [
  {
    heading: "Engineering decisions made by engineers.",
    body: "Account managers don't decide how your project is built. The technical leads who own the delivery make the architecture calls — which means the people closest to the problem are the ones solving it.",
  },
  {
    heading: "Small by design.",
    body: "We work with a deliberately small number of clients at any given time. That means every project gets genuine senior attention — not divided across a portfolio of thirty accounts.",
  },
  {
    heading: "Built for the long run.",
    body: "We're not interested in finishing a project and moving on. The relationships that work best for us are the ones where we're a consistent technical partner across multiple initiatives over multiple years.",
  },
];

export default function CompanyPage() {
  return (
    <main className="flex-1">
      <PageHero
        headline={<>Engineering-led.<br />Principal-delivered.</>}
        description="We're a small firm by design. The people you meet are the people who build — and we're invested in what comes next with you, not just what ships next sprint."
        image={{
          src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
          alt: "Team collaborating around a table",
          className: "relative h-64 sm:h-80 lg:h-[480px] lg:w-[42%] shrink-0 self-center overflow-hidden animate-hero-fade-up [animation-delay:300ms]",
          style: { borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" },
        }}
      />

      <section className="bg-brand-bg-subtle py-28 lg:py-40">
        <div className="max-w-screen-2xl mx-auto px-8 lg:px-20">
          <div className="flex flex-col lg:flex-row gap-14 lg:gap-20 xl:gap-28">
            <div className="lg:w-[42%] shrink-0">
              <h2 className="font-heading font-bold text-brand-dark leading-[1.05]
                             text-3xl sm:text-5xl xl:text-[3.5rem] mb-8
                             animate-hero-fade-up [animation-delay:100ms]">
                Why we exist.
              </h2>
            </div>
            <div className="flex-1 space-y-6 animate-hero-fade-up [animation-delay:200ms]">
              <p className="font-body text-neutral-600 text-lg leading-relaxed">
                First Nations Digital was built on a belief that the best technology partnerships look more like long-term relationships than vendor contracts. Too many firms win a project with senior people, then staff it with whoever&apos;s available. We were founded to operate differently.
              </p>
              <p className="font-body text-neutral-600 text-lg leading-relaxed">
                We&apos;re an Indigenous-owned engineering firm, and that shapes how we work. Long-term relationships, honest communication, and a genuine investment in the success of the people we work with — these aren&apos;t values we put on a website. They&apos;re the reason the firm exists.
              </p>
              <p className="font-body text-neutral-600 text-lg leading-relaxed">
                Every project we take on is one we can deliver properly. That means being selective about what we commit to, being clear about what we can and can&apos;t do, and building things that last past the go-live date.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0a0a0a] py-28 lg:py-40">
        <div className="max-w-screen-2xl mx-auto px-8 lg:px-20">
          <h2 className="font-heading font-bold text-white leading-[1.05]
                         text-3xl sm:text-5xl xl:text-[3.5rem] mb-14 lg:mb-16
                         animate-hero-fade-up [animation-delay:100ms]">
            What sets us apart.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8
                          animate-hero-fade-up [animation-delay:200ms]">
            {PILLARS.map(({ title, body }) => (
              <div key={title} className="bg-white/[0.04] rounded-2xl p-8 lg:p-10">
                <h3 className="font-heading font-bold text-brand-primary text-xl lg:text-2xl mb-4">
                  {title}
                </h3>
                <p className="font-body text-white/60 text-base leading-relaxed">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-bg-subtle py-28 lg:py-40">
        <div className="max-w-screen-2xl mx-auto px-8 lg:px-20">
          <h2 className="font-heading font-bold text-brand-dark leading-[1.05]
                         text-3xl sm:text-5xl xl:text-[3.5rem] mb-14 lg:mb-16
                         animate-hero-fade-up [animation-delay:100ms]">
            How we work.
          </h2>
          <div className="flex flex-col gap-10 lg:gap-12
                          animate-hero-fade-up [animation-delay:200ms]">
            {APPROACH_ITEMS.map(({ heading, body }) => (
              <div key={heading} className="flex flex-col lg:flex-row lg:gap-16 xl:gap-24">
                <h3 className="font-heading font-bold text-brand-dark text-xl lg:text-2xl
                               leading-tight lg:w-[36%] shrink-0 mb-4 lg:mb-0">
                  {heading}
                </h3>
                <p className="flex-1 font-body text-neutral-600 text-lg leading-relaxed">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0a0a0a] py-20 lg:py-24">
        <div className="max-w-screen-2xl mx-auto px-8 lg:px-20 flex flex-col sm:flex-row
                        items-start sm:items-center justify-between gap-8">
          <p className="font-heading font-bold text-white text-2xl lg:text-3xl leading-tight max-w-lg">
            Want to work with a team that&apos;s actually invested in your outcome?
          </p>
          <Link
            href="/contact"
            className="shrink-0 inline-flex items-center gap-2 font-heading font-bold
                       text-[13px] sm:text-[14px] tracking-[0.18em]
                       px-8 py-4 rounded-md bg-brand-primary text-brand-dark
                       hover:bg-brand-primary-hover transition-all duration-300"
          >
            FREE DISCOVERY SESSION
          </Link>
        </div>
      </section>
    </main>
  );
}
