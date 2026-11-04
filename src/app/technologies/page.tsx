import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections";

export const metadata: Metadata = {
  title: "Technologies — First Nations Digital",
  description: "The technology stack behind every First Nations Digital build — chosen for production reliability, not for the pitch deck.",
};

const CDN = "https://api.iconify.design";

interface TechItem {
  label: string;
  icon?: string;
  filter?: string;
  color?: string;
}

interface TechCategory {
  name: string;
  description: string;
  items: TechItem[];
}

const TECH_CATEGORIES: TechCategory[] = [
  {
    name: "Frontend",
    description: "Fast, accessible, typesafe interfaces that work across every device.",
    items: [
      { label: "React", icon: "logos/react" },
      { label: "Next.js", icon: "logos/nextjs-icon" },
      { label: "TypeScript", icon: "logos/typescript-icon" },
      { label: "Tailwind CSS", icon: "logos/tailwindcss" },
    ],
  },
  {
    name: "Backend",
    description: "Reliable, well-structured APIs and services built for long-term maintainability.",
    items: [
      { label: "Node.js", icon: "logos/nodejs-icon" },
      { label: "Python", icon: "logos/python" },
      { label: "REST APIs" },
      { label: "GraphQL", icon: "logos/graphql" },
    ],
  },
  {
    name: "AI & Machine Learning",
    description: "LLM integrations, agentic workflows, and custom AI built on proven foundations.",
    items: [
      { label: "OpenAI GPT-4", icon: "simple-icons/openai", color: "white" },
      { label: "Anthropic Claude" },
      { label: "LangChain" },
      { label: "RAG Pipelines" },
      { label: "Fine-tuning" },
    ],
  },
  {
    name: "Cloud & Infrastructure",
    description: "Scalable, secure, and reproducible infrastructure on the world's leading platforms.",
    items: [
      { label: "AWS", icon: "logos/aws", filter: "invert(1) hue-rotate(180deg)" },
      { label: "Microsoft Azure", icon: "logos/microsoft-azure" },
      { label: "Google Cloud", icon: "logos/google-cloud" },
      { label: "Docker", icon: "logos/docker-icon" },
      { label: "Kubernetes", icon: "logos/kubernetes" },
      { label: "Terraform", icon: "logos/terraform-icon" },
    ],
  },
  {
    name: "Mobile",
    description: "Native and cross-platform apps that feel at home on every device.",
    items: [
      { label: "React Native", icon: "logos/react" },
      { label: "iOS (Swift)", icon: "logos/swift" },
      { label: "Android (Kotlin)", icon: "logos/android-icon" },
    ],
  },
  {
    name: "Data & Integrations",
    description: "The pipelines, warehouses, and connectors that make everything else reliable.",
    items: [
      { label: "PostgreSQL", icon: "logos/postgresql" },
      { label: "Salesforce", icon: "logos/salesforce" },
      { label: "Microsoft 365" },
      { label: "Power Platform" },
      { label: "ERP / CRM connectors" },
    ],
  },
];

export default function TechnologiesPage() {
  return (
    <main className="flex-1">
      <PageHero
        headline={<>The stack behind<br />every build.</>}
        description="Tools are chosen for production reliability, not for the pitch deck. These are the technologies we trust with real client workloads."
        image={{
          src: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
          alt: "Circuit board macro — the hardware behind modern software",
          className: "relative h-64 w-64 sm:h-72 sm:w-72 lg:h-[400px] lg:w-[400px] shrink-0 self-center rounded-full overflow-hidden animate-hero-fade-up [animation-delay:300ms]",
        }}
      />

      <section className="bg-[#0a0a0a] py-28 lg:py-40">
        <div className="max-w-screen-2xl mx-auto px-8 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10">
            {TECH_CATEGORIES.map(({ name, description, items }) => (
              <div key={name} className="bg-white/[0.04] rounded-2xl p-8 lg:p-9">
                <h2 className="font-heading font-bold text-white text-xl lg:text-2xl mb-3">
                  {name}
                </h2>
                <p className="font-body text-white/50 text-base leading-relaxed mb-7">
                  {description}
                </p>
                <ul className="flex flex-wrap gap-2.5">
                  {items.map(({ label, icon, filter, color }) => {
                    const src = icon
                      ? `${CDN}/${icon}.svg${color ? `?color=${encodeURIComponent(color)}` : ""}`
                      : null;
                    return (
                      <li
                        key={label}
                        className="flex items-center gap-2 bg-white/[0.06] rounded-lg px-3.5 py-2"
                      >
                        {src && (
                          <img
                            src={src}
                            alt={label}
                            className="h-4 w-auto shrink-0"
                            style={filter ? { filter } : undefined}
                          />
                        )}
                        <span className="font-body text-[14px] text-white/70">{label}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-bg-subtle py-28 lg:py-40">
        <div className="max-w-screen-2xl mx-auto px-8 lg:px-20">
          <div className="max-w-3xl">
            <h2 className="font-heading font-bold text-brand-dark leading-[1.05]
                           text-3xl sm:text-5xl xl:text-[3.5rem] mb-8
                           animate-hero-fade-up [animation-delay:100ms]">
              How we choose<br />what to build with.
            </h2>
            <div className="space-y-6 animate-hero-fade-up [animation-delay:200ms]">
              <p className="font-body text-neutral-600 text-lg leading-relaxed">
                Every technology decision starts with the same question: what does this problem actually need? Not what&apos;s trending, not what the team has already invested in learning. We pick the tool that fits the job and that your team can maintain without us long-term.
              </p>
              <p className="font-body text-neutral-600 text-lg leading-relaxed">
                That usually means well-established, widely-supported tools with large ecosystems — not bleeding-edge frameworks that will be deprecated before your project is finished.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0a0a0a] py-20 lg:py-24">
        <div className="max-w-screen-2xl mx-auto px-8 lg:px-20 flex flex-col sm:flex-row
                        items-start sm:items-center justify-between gap-8">
          <p className="font-heading font-bold text-white text-2xl lg:text-3xl leading-tight max-w-lg">
            Want to talk through the right stack for your project?
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
