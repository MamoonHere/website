import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/sections";
import { INDUSTRIES } from "@/constants";

export const metadata: Metadata = {
  title: "Industries — First Nations Digital",
  description: "Deep sector expertise across healthcare, financial services, government, resources & energy, retail, education, logistics, and manufacturing.",
};

export default function IndustriesPage() {
  return (
    <main className="flex-1">
      <PageHero
        headline={<>Sector expertise that<br />shows up in the work.</>}
        description="Generic software can be bought off the shelf. We build for the compliance requirements, operational constraints, and regulatory environments of your specific sector."
      />

      <section className="bg-brand-bg-subtle py-28 lg:py-40">
        <div className="max-w-screen-2xl mx-auto px-8 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10
                          animate-hero-fade-up [animation-delay:100ms]">
            {INDUSTRIES.map((industry) => (
              <div
                key={industry.name}
                className="group bg-white rounded-2xl overflow-hidden
                           transition-shadow duration-300 hover:shadow-md"
              >
                <div className="relative h-56 lg:h-64 overflow-hidden">
                  <Image
                    src={industry.image}
                    alt={industry.name}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-8 lg:p-9">
                  <h2 className="font-heading font-bold text-brand-dark text-2xl lg:text-[1.6rem]
                                 leading-tight mb-3">
                    {industry.name}
                  </h2>
                  <p className="font-body text-neutral-600 text-base leading-relaxed mb-6">
                    {industry.description}
                  </p>
                  {industry.useCases && (
                    <ul className="flex flex-col gap-2.5">
                      {industry.useCases.map(uc => (
                        <li key={uc} className="flex items-start gap-3">
                          <span className="mt-[0.5em] w-1.5 h-1.5 rounded-full bg-brand-primary shrink-0" />
                          <span className="font-body text-neutral-500 text-[15px] leading-snug">{uc}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0a0a0a] py-20 lg:py-24">
        <div className="max-w-screen-2xl mx-auto px-8 lg:px-20 flex flex-col sm:flex-row
                        items-start sm:items-center justify-between gap-8">
          <p className="font-heading font-bold text-white text-2xl lg:text-3xl leading-tight max-w-lg">
            Don&apos;t see your sector? We&apos;ve likely built in it.
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
