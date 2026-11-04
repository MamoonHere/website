import Link from "next/link";
import type { ReactNode } from "react";

interface PageHeroProps {
  headline: ReactNode;
  description: string;
  cta?: { label: string; href: string };
}

export default function PageHero({ headline, description, cta }: PageHeroProps) {
  return (
    <section className="pt-24 pb-20 lg:pt-32 lg:pb-28">
      <div className="max-w-screen-2xl mx-auto px-8 lg:px-20">
        <h1
          className="font-heading font-bold text-white leading-[0.92] mb-8
                     text-5xl sm:text-6xl lg:text-7xl xl:text-[5rem]
                     animate-hero-fade-up [animation-delay:100ms]"
        >
          {headline}
        </h1>
        <p
          className="font-body text-white/60 text-lg lg:text-xl leading-relaxed max-w-2xl
                     animate-hero-fade-up [animation-delay:250ms]"
        >
          {description}
        </p>
        {cta && (
          <div className="mt-10 animate-hero-fade-up [animation-delay:400ms]">
            <Link
              href={cta.href}
              className="inline-flex items-center gap-2 font-heading font-bold
                         text-[13px] sm:text-[14px] tracking-[0.18em]
                         px-8 py-4 rounded-md bg-brand-primary text-brand-dark
                         hover:bg-brand-primary-hover transition-all duration-300"
            >
              {cta.label}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
