import type { NavLink, TechLogo } from "@/types";

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

export const TECH_LOGOS: TechLogo[] = [
  { name: "React",      src: "https://api.iconify.design/logos:react.svg?width=120&height=120" },
  { name: "Next.js",    src: "https://api.iconify.design/logos:nextjs-icon.svg?width=120&height=120" },
  { name: "TypeScript", src: "https://api.iconify.design/logos:typescript-icon.svg?width=120&height=120" },
  { name: "AWS",        src: "https://api.iconify.design/logos:aws.svg?width=120&height=120", filter: "invert(1) hue-rotate(180deg)" },
  { name: "OpenAI",     src: "https://api.iconify.design/simple-icons:openai.svg?color=white&width=120&height=120" },
  { name: "Azure",      src: "https://api.iconify.design/logos:microsoft-azure.svg?width=120&height=120" },
];
