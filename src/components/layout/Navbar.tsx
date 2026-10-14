"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/constants";
import { IconMail, IconPhone } from "@/components/ui";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <nav
      className="relative sticky top-0 z-50 border-b border-white/10 backdrop-blur-md"
      style={{ background: "rgba(8, 8, 8, 0.80)" }}
      aria-label="Main navigation"
    >
      <div className="hidden xl:flex items-center justify-between max-w-screen-2xl mx-auto px-10 h-20">
        <ul className="flex items-center gap-8" role="list">
          {NAV_LINKS.map(({ label, href }) => {
            const active = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={[
                    "font-heading font-semibold text-[13px] tracking-[0.15em] transition-all duration-200",
                    active
                      ? "text-brand-primary drop-shadow-[0_0_10px_rgba(18,217,222,0.55)]"
                      : "text-white/45 hover:text-brand-primary hover:drop-shadow-[0_0_12px_rgba(18,217,222,0.65)]",
                  ].join(" ")}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        <Link
          href="/contact"
          className="inline-flex items-center gap-3 font-heading font-bold text-[13px] tracking-[0.15em]
                     px-6 py-2.5 rounded-md bg-brand-primary text-brand-dark
                     shadow-[0_0_18px_rgba(18,217,222,0.25)]
                     hover:bg-brand-primary-hover hover:shadow-[0_0_28px_rgba(18,217,222,0.5)]
                     transition-all duration-200"
        >
          CONTACT US
          <span className="flex items-center gap-1.5">
            <IconMail />
            <IconPhone />
          </span>
        </Link>
      </div>

      <div className="xl:hidden flex items-center px-6 h-20">
        <button
          onClick={() => setMobileOpen(o => !o)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          className="p-2 -ml-2"
        >
          <span className="flex flex-col gap-[5px]">
            <span className={`block h-px bg-white transition-all duration-300 origin-left ${mobileOpen ? "w-[22px] rotate-[38deg] translate-x-px" : "w-5"}`} />
            <span className={`block h-px bg-white transition-all duration-200 ${mobileOpen ? "w-0 opacity-0" : "w-3.5"}`} />
            <span className={`block h-px bg-white transition-all duration-300 origin-left ${mobileOpen ? "w-[22px] -rotate-[38deg] translate-x-px" : "w-2.5"}`} />
          </span>
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`xl:hidden fixed inset-x-0 top-20 z-40 overflow-hidden backdrop-blur-md border-b border-white/10 transition-[max-height] duration-300 ease-in-out ${mobileOpen ? "max-h-screen" : "max-h-0"}`}
        style={{ background: "rgba(8, 8, 8, 0.95)" }}
      >
        <ul className="flex flex-col px-6 py-6 gap-5" role="list">
          {NAV_LINKS.map(({ label, href }) => {
            const active = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`font-heading font-semibold text-sm tracking-[0.18em] transition-all duration-200 ${
                    active
                      ? "text-brand-primary drop-shadow-[0_0_8px_rgba(18,217,222,0.5)]"
                      : "text-white/55 hover:text-brand-primary"
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
          <li className="pt-3 border-t border-white/10">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 font-heading font-bold text-[12px] tracking-[0.15em]
                         px-6 py-3 rounded-md bg-brand-primary text-brand-dark
                         hover:bg-brand-primary-hover transition-all duration-200"
            >
              CONTACT US
              <span className="flex items-center gap-1.5">
                <IconMail />
                <IconPhone />
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
