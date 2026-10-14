import type { NavLink, TechLogo, PainPoint } from "@/types";

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
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    cta: { label: "SEE HOW WE AUTOMATE THIS", href: "/services" },
  },
  {
    tab: "No AI Strategy",
    headline: "Your competitors aren't waiting",
    description: "Every day without an AI strategy is a day they pull further ahead.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
    cta: { label: "EXPLORE OUR AI SOLUTIONS", href: "/ai-audit-strategy" },
  },
  {
    tab: "Legacy Systems",
    headline: "Old systems block every new initiative",
    description: "They cost more to maintain than replace — and they slow everything down.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
    cta: { label: "MODERNIZE YOUR STACK", href: "/services" },
  },
  {
    tab: "Disconnected Data",
    headline: "Siloed tools mean siloed decisions",
    description: "Your teams can't move fast when they're not working from the same data.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    cta: { label: "UNIFY YOUR DATA", href: "/services" },
  },
  {
    tab: "No Dev Team",
    headline: "Ideas don't ship themselves",
    description: "Without engineering capacity, your roadmap stays a roadmap.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    cta: { label: "WORK WITH OUR TEAM", href: "/company" },
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
