"use client";

import { useState } from "react";
import { navigation } from "@/data/navigation";
import { siteConfig } from "@/data/siteConfig";
import WhatsAppButton from "./WhatsAppButton";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-plum-900/10 bg-sand-50/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#top" className="font-display text-lg font-bold text-plum-900">
          {siteConfig.coachNameArabic}
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink/80 transition-colors hover:text-plum-800"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <WhatsAppButton label="تواصلي على واتساب" />
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="فتح القائمة"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-plum-900/15 md:hidden"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-ink stroke-2">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav id="mobile-menu" className="border-t border-plum-900/10 bg-sand-50 px-4 py-4 md:hidden">
          <ul className="flex flex-col gap-4">
            {navigation.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block text-sm font-medium text-ink/80"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <WhatsAppButton label="تواصلي على واتساب" className="w-full" />
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
