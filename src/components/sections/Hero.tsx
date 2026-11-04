import Link from "next/link";
import { LogoMark } from "@/components/ui";

export default function Hero() {
  return (
    <section
      className="relative flex overflow-hidden
                 flex-col min-h-[calc(100svh-5rem)]
                 lg:flex-row lg:h-[calc(100svh-5rem)]"
      aria-label="Hero"
    >
      <div className="
        relative flex-shrink-0 flex items-center justify-center
        pt-8 pb-4 px-8
        lg:w-[38%] lg:px-10 lg:pt-0 lg:pb-16
      ">
        <LogoMark bodyFill="white" accentFill="#12D9DE" size={220} className="lg:hidden" />
        <div className="hidden lg:block w-full">
          <LogoMark
            bodyFill="white"
            accentFill="#12D9DE"
            width={1024}
            height={1190}
            className="w-full h-auto"
          />
        </div>
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
                     text-3xl sm:text-4xl md:text-5xl xl:text-[4rem] 2xl:text-[4.75rem]
                     animate-hero-fade-up [animation-delay:150ms]"
        >
          Your Goals.<br />
          <span className="text-brand-primary">Engineered for Growth</span>
        </h1>

        <p
          className="font-body text-white/70 leading-relaxed max-w-lg mb-10
                     text-base sm:text-lg xl:text-[1.15rem]
                     animate-hero-fade-up [animation-delay:300ms]"
        >
          We turn ambitious ideas into scalable software, intelligent AI
          workflows, and automation that move your business forward. More than
          a technology partner, we&apos;re invested in building what comes
          next with you.
        </p>

        <div className="flex flex-wrap gap-3 sm:gap-4 animate-hero-fade-up [animation-delay:450ms]">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 font-heading font-bold
                       text-[13px] sm:text-[14px] tracking-[0.18em]
                       px-6 py-3.5 sm:px-8 sm:py-4 rounded-md bg-brand-primary text-brand-dark
                       hover:bg-brand-primary-hover
                       transition-all duration-300"
          >
            FREE DISCOVERY SESSION
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 font-heading font-bold
                       text-[13px] sm:text-[14px] tracking-[0.18em]
                       px-6 py-3.5 sm:px-8 sm:py-4 rounded-md border border-white/20 text-white/70
                       hover:border-brand-primary hover:text-white transition-colors duration-200"
          >
            AI FOR YOU
          </Link>
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
