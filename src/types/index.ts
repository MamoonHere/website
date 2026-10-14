export interface NavLink {
  label: string;
  href: string;
}

export interface TechLogo {
  name: string;
  src: string;
  filter?: string;
}

export interface PainPoint {
  tab: string;
  headline: string;
  description: string;
  points: string[];
  image: string;
  cta: { label: string; href: string };
}

export interface SeoMeta {
  title: string;
  description: string;
  ogImage?: string;
}
