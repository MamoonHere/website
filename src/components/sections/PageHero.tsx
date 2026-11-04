import Image from "next/image";
import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";

interface PageHeroImage {
  src: string;
  alt: string;
  className?: string;
  style?: CSSProperties;
}

interface PageHeroProps {
  headline: ReactNode;
  description: string;
  cta?: { label: string; href: string };
  image?: PageHeroImage;
}

const DEFAULT_IMAGE_CLASS =
  "relative h-64 sm:h-80 lg:h-auto lg:self-stretch lg:w-[44%] xl:w-[46%] shrink-0 " +
  "rounded-2xl overflow-hidden animate-hero-fade-up [animation-delay:300ms]";

export default function PageHero({ headline, description, cta, image }: PageHeroProps) {
  return (
    <section className="pt-24 pb-20 lg:pt-32 lg:pb-28">
      <div className="max-w-screen-2xl mx-auto px-8 lg:px-20">
        <div className={`flex flex-col gap-10 lg:gap-16 xl:gap-20 ${image ? "lg:flex-row lg:items-center" : ""}`}>

          <div className="flex-1 min-w-0">
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

          {image && (
            <div
              className={image.className ?? DEFAULT_IMAGE_CLASS}
              style={image.style}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 46vw"
              />
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
