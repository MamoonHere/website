import Link from "next/link";
import { LogoMark, IconLinkedIn, IconX, IconGitHub } from "@/components/ui";

const FOOTER_SERVICES = [
  { label: "Custom Software", href: "/services" },
  { label: "AI & Automation", href: "/services" },
  { label: "Cloud Architecture", href: "/services" },
  { label: "Data Engineering", href: "/services" },
  { label: "AI Audit & Strategy", href: "/ai-audit-strategy" },
  { label: "Mobile Development", href: "/services" },
];

const FOOTER_COMPANY = [
  { label: "About", href: "/company" },
  { label: "Industries", href: "/industries" },
  { label: "Technologies", href: "/technologies" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "https://linkedin.com", Icon: IconLinkedIn },
  { label: "X / Twitter", href: "https://x.com", Icon: IconX },
  { label: "GitHub", href: "https://github.com", Icon: IconGitHub },
];

export default function Footer() {
  return (
    <>
      <section className="bg-[#0a0a0a] py-28 lg:py-40">
        <div className="max-w-screen-2xl mx-auto px-8 lg:px-20">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 lg:gap-20">

            <div className="lg:max-w-[60%]">
              <p className="font-body text-[13px] tracking-[0.35em] uppercase text-brand-primary mb-5">
                Start building
              </p>
              <h2 className="font-heading font-bold text-white leading-[1.02]
                             text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] mb-6">
                Ready to build<br />what&apos;s next?
              </h2>
              <p className="font-body text-white/45 text-lg lg:text-xl leading-relaxed">
                We partner with ambitious teams to turn complex problems into polished, scalable digital products.
              </p>
            </div>

            <div className="shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 font-heading font-bold
                           text-[12px] sm:text-[14px] tracking-[0.2em]
                           px-5 py-3 sm:px-7 sm:py-4 rounded-md bg-brand-primary text-brand-dark
                           shadow-[0_0_22px_rgba(18,217,222,0.35)]
                           hover:bg-brand-primary-hover hover:shadow-[0_0_38px_rgba(18,217,222,0.6)]
                           transition-all duration-300"
              >
                FREE DISCOVERY SESSION
              </Link>
            </div>

          </div>
        </div>
      </section>

      <footer className="bg-[#060606] border-t border-white/[0.06]">
        <div className="max-w-screen-2xl mx-auto px-8 lg:px-20 pt-20 pb-10 lg:pt-24 lg:pb-12">

          <div className="grid grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-x-8 gap-y-12 mb-16 lg:mb-20">

            <div className="col-span-2 lg:col-span-1">
              <LogoMark
                bodyFill="white"
                accentFill="#12D9DE"
                className="h-52 w-auto mb-5"
              />
              <p className="font-body text-white/35 text-sm leading-relaxed mb-8 max-w-[280px]">
                Engineering-led digital transformation for ambitious organisations.
              </p>
              <div className="flex items-center gap-3">
                {SOCIAL_LINKS.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center
                               text-white/35 hover:text-brand-primary hover:border-brand-primary/40
                               transition-colors duration-200"
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-heading font-semibold text-[11px] tracking-[0.3em] uppercase
                             text-white/25 mb-6">
                Services
              </h3>
              <ul className="flex flex-col gap-3.5">
                {FOOTER_SERVICES.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="font-body text-[14px] text-white/45 hover:text-brand-primary
                                 transition-colors duration-200"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-heading font-semibold text-[11px] tracking-[0.3em] uppercase
                             text-white/25 mb-6">
                Company
              </h3>
              <ul className="flex flex-col gap-3.5">
                {FOOTER_COMPANY.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="font-body text-[14px] text-white/45 hover:text-brand-primary
                                 transition-colors duration-200"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-heading font-semibold text-[11px] tracking-[0.3em] uppercase
                             text-white/25 mb-6">
                Get in touch
              </h3>
              <ul className="flex flex-col gap-3.5">
                <li>
                  <a
                    href="mailto:hello@firstnationsdigital.com.au"
                    className="font-body text-[14px] text-white/45 hover:text-brand-primary
                               transition-colors duration-200 break-all"
                  >
                    hello@firstnationsdigital.com.au
                  </a>
                </li>
                <li className="pt-1">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 font-body text-[14px]
                               text-white/45 hover:text-brand-primary transition-colors duration-200 group"
                  >
                    Book a discovery call
                    <span className="inline-block transition-transform duration-200 group-hover:translate-x-0.5">→</span>
                  </Link>
                </li>
              </ul>
            </div>

          </div>

          <div className="border-t border-white/[0.06] pt-8 flex flex-col sm:flex-row
                          items-start sm:items-center justify-between gap-4">
            <p className="font-body text-[13px] text-white/20 flex items-center gap-2.5">
              © {new Date().getFullYear()}
              <LogoMark bodyFill="white" accentFill="#12D9DE" className="h-4 w-auto opacity-40" />
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/privacy"
                className="font-body text-[13px] text-white/20 hover:text-white/50
                           transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="font-body text-[13px] text-white/20 hover:text-white/50
                           transition-colors duration-200"
              >
                Terms of Service
              </Link>
            </div>
          </div>

        </div>
      </footer>
    </>
  );
}
