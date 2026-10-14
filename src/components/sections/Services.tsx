import Link from "next/link";
import { SERVICE_CARDS } from "@/constants";

export default function Services() {
  return (
    <section className="bg-[#0a0a0a] py-28 lg:py-40">
      <div className="max-w-screen-2xl mx-auto px-8 lg:px-20">

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 lg:mb-20">
          <div>
            <p className="font-body text-[13px] tracking-[0.35em] uppercase text-brand-primary mb-5">
              Services
            </p>
            <h2 className="font-heading font-bold text-white leading-[1.05]
                           text-4xl sm:text-5xl lg:text-5xl xl:text-[3.5rem]">
              Built to move<br />your business forward
            </h2>
          </div>
          <Link
            href="/services"
            className="shrink-0 inline-flex items-center gap-2 font-body text-sm
                       text-white/40 hover:text-brand-primary transition-colors duration-200 group"
          >
            View all services
            <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
          </Link>
        </div>

        <ul className="flex flex-col">
          {SERVICE_CARDS.map((service) => (
            <li key={service.number} className="border-t border-white/[0.07]">
              <Link
                href={service.href}
                className="group flex items-center gap-6 lg:gap-12 py-7 lg:py-9 px-4 lg:px-6
                           -mx-4 lg:-mx-6 rounded-xl transition-colors duration-200 hover:bg-white/[0.03]"
              >
                <span className="font-mono text-[13px] tabular-nums text-white/20
                                 group-hover:text-brand-primary transition-colors duration-200 shrink-0 w-7">
                  {service.number}
                </span>

                <span className="font-heading font-bold text-white leading-tight
                                 text-xl sm:text-2xl lg:text-[1.75rem]
                                 group-hover:text-brand-primary transition-colors duration-200
                                 flex-1 min-w-0">
                  {service.name}
                </span>

                <span className="hidden lg:block font-body text-white/35 text-[15px]
                                 leading-relaxed lg:w-[38%] xl:w-[42%] shrink-0">
                  {service.description}
                </span>

                <span className="inline-block text-white/20 text-xl shrink-0
                                 group-hover:text-brand-primary group-hover:translate-x-1
                                 transition-all duration-200">
                  ↗
                </span>
              </Link>
            </li>
          ))}
          <li className="border-t border-white/[0.07]" />
        </ul>

      </div>
    </section>
  );
}
