"use client";

import Link from "next/link";
import { useState } from "react";
import { navLinks, siteConfig } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-navy-100/80 bg-white/92 backdrop-blur-md">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-navy-950 focus:px-3 focus:py-2 focus:text-white">
        Skip to content
      </a>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-navy-950 font-serif text-lg font-bold text-white">
            G
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-extrabold tracking-tight text-navy-950 md:text-base">{siteConfig.name}</span>
            <span className="hidden text-[11px] text-navy-500 sm:block">{siteConfig.tagline}</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-semibold text-navy-700 hover:text-forest-700">
              {link.label}
            </Link>
          ))}
          <Link href="/blog" className="rounded-full bg-forest-600 px-4 py-2 text-sm font-semibold text-white hover:bg-forest-500">
            Latest guides
          </Link>
        </nav>
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-navy-200 text-navy-800 md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          <span className="sr-only">Menu</span>
          <span className="flex flex-col gap-1.5">
            <span className={`block h-0.5 w-5 bg-current transition ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-5 bg-current transition ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-5 bg-current transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </span>
        </button>
      </div>
      {open ? (
        <nav className="border-t border-navy-100 bg-white px-4 py-4 md:hidden" aria-label="Mobile">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-2 py-2 text-base font-semibold text-navy-800"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
