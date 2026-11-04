import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections";

export const metadata: Metadata = {
  title: "Services — First Nations Digital",
  description: "Custom software, AI & automation, cloud architecture, data engineering, mobile development, and legacy modernisation — delivered by one integrated team.",
};

const SERVICES = [
  {
    name: "Custom Software Development",
    description: "Bespoke applications built around your exact workflows, not the other way around. From internal tooling to customer-facing platforms, we design and ship production software that fits how your business actually operates.",
    tags: ["Internal tools", "Customer platforms", "Workflow automation", "System integrations"],
  },
  {
    name: "AI & Automation",
    description: "Intelligent workflows, LLM integrations, and AI agents that put real productivity back in your team's hands. We focus on AI your people will actually use — not demos that look impressive in a boardroom.",
    tags: ["AI agents & copilots", "Process automation", "RAG systems", "LLM integrations"],
  },
  {
    name: "Cloud Architecture",
    description: "Scalable, secure infrastructure on AWS, Azure, or GCP — designed to grow as you grow. Cloud-native systems with CI/CD, infrastructure-as-code, and security baked in from day one.",
    tags: ["Cloud migration", "Infrastructure as code", "DevSecOps", "Cost optimisation"],
  },
  {
    name: "Data Engineering",
    description: "Pipelines, warehouses, and dashboards that turn raw data into decisions you can act on. We build the foundations that make your analytics and AI actually reliable.",
    tags: ["Data pipelines", "Warehousing & BI", "Analytics platforms", "Single source of truth"],
  },
  {
    name: "AI Audit & Strategy",
    description: "A structured assessment of where AI delivers the most value in your operations — ranked by ROI, not by what's technically impressive. Including a scoped first sprint ready to execute immediately.",
    tags: ["Workflow mapping", "AI readiness scoring", "ROI-ranked roadmap", "First-win sprint"],
  },
  {
    name: "Mobile Development",
    description: "Native and cross-platform apps your customers and teams want to use every day — built with the same engineering rigour as our backend systems, not bolted on as an afterthought.",
    tags: ["iOS & Android", "React Native", "Offline-first", "App Store delivery"],
  },
  {
    name: "Legacy Modernisation",
    description: "Incremental modernisation that keeps your business running while we rebuild underneath. We untangle legacy systems, replace what's worth replacing, and integrate what isn't.",
    tags: ["System migration", "API extraction", "ERP & CRM integration", "Incremental rebuild"],
  },
  {
    name: "Dedicated Engineering Teams",
    description: "On-demand senior engineers embedded in your workflow. The people you meet in the sales process are the people who build — no bait-and-switch with junior staff after the proposal.",
    tags: ["Team augmentation", "Project-based", "Embedded sprints", "Interim CTO support"],
  },
];

const PROCESS_STEPS = [
  {
    step: "1",
    title: "Discovery",
    description: "We learn your business before we write a line of code. The first week is for understanding your operations, constraints, and goals — not making assumptions.",
  },
  {
    step: "2",
    title: "Architecture",
    description: "We design before we build. A clear technical plan means no expensive surprises mid-delivery and no rewrites six months in.",
  },
  {
    step: "3",
    title: "Delivery",
    description: "Weekly builds. Weekly demos. You see real progress every week — not a reveal at the end when it's too late to change direction.",
  },
  {
    step: "4",
    title: "Handover",
    description: "Full documentation, team training, and a support window post-launch. We don't disappear at go-live and we don't make you dependent on us to maintain it.",
  },
];

export default function ServicesPage() {
  return (
    <main className="flex-1">
      <PageHero
        headline={<>What we build,<br />and how we build it.</>}
        description="Eight core practices, one integrated team. The same senior engineers who scope your project design, build, test, and ship it — with no handoffs in between."
      />

      <section className="bg-brand-bg-subtle py-28 lg:py-40">
        <div className="max-w-screen-2xl mx-auto px-8 lg:px-20">
          <ul className="flex flex-col animate-hero-fade-up [animation-delay:100ms]">
            {SERVICES.map((service, i) => (
              <li
                key={service.name}
                className={`py-10 lg:py-12 ${i < SERVICES.length - 1 ? "border-b border-black/[0.07]" : ""}`}
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:gap-16 xl:gap-24">
                  <h2 className="font-heading font-bold text-brand-dark text-2xl lg:text-[1.75rem]
                                 leading-tight lg:w-[30%] shrink-0 mb-4 lg:mb-0">
                    {service.name}
                  </h2>
                  <div className="flex-1">
                    <p className="font-body text-neutral-600 text-base lg:text-lg leading-relaxed mb-5">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service.tags.map(tag => (
                        <span
                          key={tag}
                          className="font-body text-[13px] text-neutral-500 bg-black/[0.05] px-3 py-1.5 rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-[#0a0a0a] py-28 lg:py-40">
        <div className="max-w-screen-2xl mx-auto px-8 lg:px-20">
          <h2 className="font-heading font-bold text-white leading-[1.05]
                         text-3xl sm:text-5xl xl:text-[3.5rem] mb-16 lg:mb-20
                         animate-hero-fade-up [animation-delay:100ms]">
            How a typical<br />engagement runs.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8
                          animate-hero-fade-up [animation-delay:200ms]">
            {PROCESS_STEPS.map(({ step, title, description }) => (
              <div key={title} className="bg-white/[0.04] rounded-2xl p-8 lg:p-10">
                <div className="font-heading font-bold text-brand-primary text-7xl lg:text-8xl leading-none mb-8 select-none">
                  {step}
                </div>
                <h3 className="font-heading font-bold text-white text-xl lg:text-2xl mb-4">
                  {title}
                </h3>
                <p className="font-body text-white/60 text-base leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-bg-subtle py-28 lg:py-32">
        <div className="max-w-screen-2xl mx-auto px-8 lg:px-20 text-center">
          <h2 className="font-heading font-bold text-brand-dark leading-[1.05]
                         text-3xl sm:text-5xl xl:text-[3.5rem] mb-6
                         animate-hero-fade-up [animation-delay:100ms]">
            Not sure where to start?
          </h2>
          <p className="font-body text-neutral-600 text-lg leading-relaxed max-w-xl mx-auto mb-10
                        animate-hero-fade-up [animation-delay:200ms]">
            A free discovery session takes 30 minutes and gives you a clear picture of what&apos;s possible, what it costs, and how long it takes.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 font-heading font-bold
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
