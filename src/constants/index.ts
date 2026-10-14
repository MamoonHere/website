import type { NavLink, TechLogo, PainPoint, ServiceCard, Industry } from "@/types";

export const SITE_NAME = "First Nations Digital";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const NAV_LINKS: NavLink[] = [
  { label: "HOME",              href: "/"                },
  { label: "SERVICES",          href: "/services"        },
  { label: "TECHNOLOGIES",      href: "/technologies"    },
  { label: "AI AUDIT & STRATEGY", href: "/ai-audit-strategy" },
  { label: "INDUSTRIES",        href: "/industries"      },
  { label: "COMPANY",           href: "/company"         },
];

export const SERVICE_TAGS = [
  "Custom Software",
  "AI Automation",
  "Cloud Architecture",
  "Data Engineering",
  "Mobile Apps",
];

export const PAIN_POINTS: PainPoint[] = [
  {
    tab: "Manual Operations",
    headline: "Spreadsheets don't scale",
    description: "Manual workflows breed errors and blind spots that compound as you grow.",
    points: ["Zero real-time visibility", "Errors compound as you scale", "Teams working from different versions"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    cta: { label: "SEE HOW WE AUTOMATE THIS", href: "/services" },
  },
  {
    tab: "No AI Strategy",
    headline: "Your competitors aren't waiting",
    description: "Every day without an AI strategy is a day they pull further ahead.",
    points: ["Hours lost to repetitive tasks", "Competitors automating faster", "No clear path to adoption"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
    cta: { label: "EXPLORE OUR AI SOLUTIONS", href: "/ai-audit-strategy" },
  },
  {
    tab: "Legacy Systems",
    headline: "Old systems block every new initiative",
    description: "They cost more to maintain than replace — and they slow everything down.",
    points: ["Every integration is a battle", "Updates carry too much risk", "New ideas blocked before they start"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
    cta: { label: "MODERNIZE YOUR STACK", href: "/services" },
  },
  {
    tab: "Disconnected Data",
    headline: "Siloed tools mean siloed decisions",
    description: "Your teams can't move fast when they're not working from the same data.",
    points: ["No single source of truth", "Decisions made on stale information", "Teams moving in different directions"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    cta: { label: "UNIFY YOUR DATA", href: "/services" },
  },
  {
    tab: "No Dev Team",
    headline: "Ideas don't ship themselves",
    description: "Without engineering capacity, your roadmap stays a roadmap.",
    points: ["Hiring is slow and expensive", "Freelancers lack the full picture", "Momentum stalls between projects"],
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    cta: { label: "WORK WITH OUR TEAM", href: "/company" },
  },
];

export const SERVICE_CARDS: ServiceCard[] = [
  {
    number: "01",
    name: "Custom Software Development",
    description: "Bespoke applications built around your exact workflows — not the other way around.",
    href: "/services",
  },
  {
    number: "02",
    name: "AI & Automation",
    description: "Intelligent workflows and custom LLM integrations that put AI to work in your operations.",
    href: "/services",
  },
  {
    number: "03",
    name: "Cloud Architecture",
    description: "Scalable, secure infrastructure designed for growth on AWS, Azure, or GCP.",
    href: "/services",
  },
  {
    number: "04",
    name: "Data Engineering",
    description: "Pipelines, warehouses, and dashboards that turn raw data into reliable decisions.",
    href: "/services",
  },
  {
    number: "05",
    name: "AI Audit & Strategy",
    description: "A structured assessment of where AI delivers the most value in your organisation.",
    href: "/ai-audit-strategy",
  },
  {
    number: "06",
    name: "Mobile Development",
    description: "Native and cross-platform apps your customers actually want to use.",
    href: "/services",
  },
];

export const INDUSTRIES: Industry[] = [
  {
    name: "Healthcare",
    description: "Patient systems, clinical workflows, and compliance-ready platforms.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Financial Services",
    description: "Secure fintech solutions built for regulatory environments.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Resources & Energy",
    description: "Asset management, IoT integration, and operational tools for field teams.",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Government & Public Sector",
    description: "Civic platforms and digital services built to earn public trust.",
    image: "https://images.unsplash.com/photo-1568219656418-15c329312bf1?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Retail & E-Commerce",
    description: "End-to-end commerce platforms and personalisation engines that convert.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Education",
    description: "Learning platforms and administration systems that grow with enrolment.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80",
  },
];

export const TECH_LOGOS: TechLogo[] = [
  { name: "React",      src: "https://api.iconify.design/logos:react.svg?width=120&height=120" },
  { name: "Next.js",    src: "https://api.iconify.design/logos:nextjs-icon.svg?width=120&height=120" },
  { name: "TypeScript", src: "https://api.iconify.design/logos:typescript-icon.svg?width=120&height=120" },
  { name: "AWS",        src: "https://api.iconify.design/logos:aws.svg?width=120&height=120", filter: "invert(1) hue-rotate(180deg)" },
  { name: "OpenAI",     src: "https://api.iconify.design/simple-icons:openai.svg?color=white&width=120&height=120" },
  { name: "Azure",      src: "https://api.iconify.design/logos:microsoft-azure.svg?width=120&height=120" },
];
