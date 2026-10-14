import Link from "next/link";
import { LogoMark } from "@/components/ui";
import { WaveRings } from "@/components/layout";
import { SERVICE_TAGS, TECH_LOGOS } from "@/constants";

export default function Hero() {
  return (
    <section
      className="relative flex overflow-hidden
                 flex-col min-h-[calc(100svh-5rem)]
                 lg:flex-row lg:h-[calc(100svh-5rem)]"
      aria-label="Hero"
    >
      <WaveRings />
      <div className="
        relative flex-shrink-0 flex items-center justify-center
        pt-8 pb-4 px-8
        lg:w-[38%] lg:px-10 lg:pt-0 lg:pb-16
      ">
        <LogoMark bodyFill="white" accentFill="#12D9DE" size={220} className="lg:hidden" />
        <LogoMark
          bodyFill="white"
          accentFill="#12D9DE"
          width={1024}
          height={1190}
          className="hidden lg:block lg:w-full lg:h-auto"
        />
      </div>

      <div className="
        relative flex-1 flex flex-col justify-center
        px-8 pb-12
        lg:pl-6 lg:pr-12 lg:pb-24 lg:pt-0
        xl:pl-8 xl:pr-16
        2xl:pr-20
      ">
        <h1
          className="font-heading font-bold text-white leading-[1.08] mb-6
                     text-3xl sm:text-4xl md:text-5xl xl:text-[4.75rem] 2xl:text-[5.5rem]
                     animate-hero-fade-up [animation-delay:150ms]"
        >
          Your Goals.<br />
          <span className="shimmer-text">Engineered for Growth</span>
        </h1>

        <p
          className="font-body text-white/50 leading-relaxed max-w-lg mb-8
                     text-base sm:text-lg xl:text-[1.15rem]
                     animate-hero-fade-up [animation-delay:300ms]"
        >
          We turn ambitious ideas into scalable software, intelligent AI
          workflows, and automation that move your business forward. More than
          a technology partner, we&apos;re invested in building what comes
          next with you.
        </p>

        <div className="flex flex-wrap gap-2 mb-8 animate-hero-fade-up [animation-delay:400ms]">
          {SERVICE_TAGS.map(tag => (
            <span
              key={tag}
              className="font-body text-[12px] sm:text-[13px] tracking-[0.12em] uppercase
                         px-3 py-1.5 sm:px-4 sm:py-2 rounded-full
                         border bg-emerald-500/10 border-emerald-400/30 text-emerald-300/90"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 sm:gap-4 mb-10 animate-hero-fade-up [animation-delay:500ms]">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 font-heading font-bold
                       text-[12px] sm:text-[14px] tracking-[0.2em]
                       px-5 py-3 sm:px-7 sm:py-4 rounded-md bg-brand-primary text-brand-dark
                       shadow-[0_0_22px_rgba(18,217,222,0.35)]
                       hover:bg-brand-primary-hover hover:shadow-[0_0_38px_rgba(18,217,222,0.6)]
                       transition-all duration-300"
          >
            FREE DISCOVERY SESSION
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 font-heading font-bold
                       text-[12px] sm:text-[14px] tracking-[0.2em]
                       px-5 py-3 sm:px-7 sm:py-4 rounded-md border border-white/20 text-white/70
                       hover:border-brand-primary hover:text-white transition-colors duration-200"
          >
            AI FOR YOU
          </Link>
        </div>

        <div className="animate-hero-fade-up [animation-delay:600ms]">
          <p className="font-body text-[11px] sm:text-[12px] tracking-[0.2em] uppercase text-white/50 mb-3 sm:mb-4">
            We build with
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-3 sm:gap-x-6 sm:gap-y-4 lg:gap-x-8 lg:gap-y-5">
            {TECH_LOGOS.map(({ name, src, filter }) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={name}
                src={src}
                alt={name}
                style={filter ? { filter } : undefined}
                className="h-7 w-auto sm:h-9 md:h-11 lg:h-[60px]
                           transition-transform duration-200 hover:scale-110"
              />
            ))}
            <span className="font-body text-[13px] sm:text-[15px] text-white/50 italic self-center">
              & many more
            </span>
          </div>
        </div>
      </div>
      <div className="absolute bottom-7 left-1/2 -translate-x-1/2">
        <div className="relative w-0.5 h-10 bg-white/10 overflow-hidden rounded-full">
          <div
            className="absolute inset-x-0 top-0 h-4 bg-brand-primary rounded-full"
            style={{ animation: "scroll-dot 1.8s ease-in infinite" }}
          />
        </div>
      </div>
    </section>
  );
}
