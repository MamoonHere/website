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
    headline: "Buried in spreadsheets and manual processes",
    description: "Excel sheets, email chains, and paper workflows are slowing your team down. They're error-prone, impossible to scale, and give you zero real-time visibility into what's actually happening across your business.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    cta: { label: "SEE HOW WE AUTOMATE THIS", href: "/services" },
  },
  {
    tab: "No AI Strategy",
    headline: "Your competitors are moving faster with AI",
    description: "While your team spends hours on tasks AI could handle in minutes, others are pulling ahead. Without a clear AI strategy the gap only widens — and catching up gets harder every quarter.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
    cta: { label: "EXPLORE OUR AI SOLUTIONS", href: "/ai-audit-strategy" },
  },
  {
    tab: "Legacy Systems",
    headline: "Outdated software holding your team hostage",
    description: "Systems built a decade ago weren't designed for today's scale. Every integration is a battle, every update a risk, and every workaround is technical debt you'll eventually have to pay — with interest.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
    cta: { label: "MODERNIZE YOUR STACK", href: "/services" },
  },
  {
    tab: "Disconnected Data",
    headline: "Your data is scattered, your decisions are blind",
    description: "When sales, ops, and finance each live in their own tools, you're never working from the same picture. Decisions get delayed, opportunities get missed, and nothing connects the way it should.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    cta: { label: "UNIFY YOUR DATA", href: "/services" },
  },
  {
    tab: "No Dev Team",
    headline: "Great ideas sitting on a whiteboard",
    description: "You know what needs to be built. You just don't have the engineering talent to execute it. Hiring is slow, expensive, and risky — especially when you need to move fast and can't afford mistakes.",
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
