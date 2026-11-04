import Image from "next/image";
import Link from "next/link";
import { INDUSTRIES } from "@/constants";

export default function Industries() {
  return (
    <section className="bg-brand-bg-subtle py-28 lg:py-40">
      <div className="max-w-screen-2xl mx-auto px-8 lg:px-20">

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 lg:mb-20">
          <h2 className="font-heading font-bold text-brand-dark leading-[1.05]
                         text-3xl sm:text-5xl lg:text-5xl xl:text-[3.5rem]
                         animate-hero-fade-up [animation-delay:100ms]">
            Deep expertise<br />across key sectors
          </h2>
          <Link
            href="/industries"
            className="shrink-0 inline-flex items-center gap-2 font-body text-sm
                       text-neutral-500 hover:text-brand-primary transition-colors duration-200 group"
          >
            All industries
            <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5
                        animate-hero-fade-up [animation-delay:200ms]">
          {INDUSTRIES.map((industry) => (
            <Link
              key={industry.name}
              href="/industries"
              className="group overflow-hidden rounded-2xl bg-[#0e0e0e] transition-colors duration-300 hover:bg-[#161616]"
            >
              <div className="relative h-52 lg:h-56 overflow-hidden">
                <Image
                  src={industry.image}
                  alt={industry.name}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-6 lg:p-7">
                <h3 className="font-heading font-bold text-white text-xl lg:text-[1.35rem]
                               leading-tight mb-2 group-hover:text-brand-primary transition-colors duration-200">
                  {industry.name}
                </h3>
                <p className="font-body text-white/55 text-base leading-snug">
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
