import Image from "next/image";
import Link from "next/link";
import { INDUSTRIES } from "@/constants";

export default function Industries() {
  return (
    <section className="bg-brand-bg-subtle py-28 lg:py-40">
      <div className="max-w-screen-2xl mx-auto px-8 lg:px-20">

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 lg:mb-20">
          <div>
            <p className="font-body text-[13px] tracking-[0.35em] uppercase text-brand-primary mb-5">
              Industries
            </p>
            <h2 className="font-heading font-bold text-brand-dark leading-[1.05]
                           text-4xl sm:text-5xl lg:text-5xl xl:text-[3.5rem]">
              Deep expertise<br />across key sectors
            </h2>
          </div>
          <Link
            href="/industries"
            className="shrink-0 inline-flex items-center gap-2 font-body text-sm
                       text-neutral-400 hover:text-brand-primary transition-colors duration-200 group"
          >
            All industries
            <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES.map((industry) => (
            <Link
              key={industry.name}
              href="/industries"
              className="group relative overflow-hidden rounded-2xl min-h-[340px] lg:min-h-[380px]
                         flex flex-col justify-end
                         shadow-[0_16px_48px_rgba(0,0,0,0.10)]
                         hover:shadow-[0_24px_64px_rgba(0,0,0,0.16)]
                         transition-shadow duration-300"
            >
              <Image
                src={industry.image}
                alt={industry.name}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

              <div className="absolute inset-0 bg-brand-primary/0 group-hover:bg-brand-primary/[0.08]
                              transition-colors duration-300" />

              <div className="relative z-10 p-7 lg:p-8">
                <h3 className="font-heading font-bold text-white text-2xl lg:text-[1.6rem]
                               leading-tight mb-2">
                  {industry.name}
                </h3>
                <p className="font-body text-white/60 text-sm lg:text-[15px] leading-snug">
                  {industry.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
