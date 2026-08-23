import Link from "next/link";
import { categories, footerLegalLinks, navLinks, siteConfig } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-navy-900 bg-navy-950 text-navy-200">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-4 md:px-6">
        <div className="md:col-span-2">
          <p className="font-serif text-2xl font-bold text-white">{siteConfig.name}</p>
          <p className="mt-2 text-sm text-forest-300">{siteConfig.tagline}</p>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-navy-300">
            Straight-talk money guides for US rideshare and delivery drivers. Taxes, deductions, mileage, and budgeting — written so you can actually use them between rides.
          </p>
        </div>
        <div>
          <p className="text-sm font-bold text-white">Explore</p>
          <ul className="mt-3 space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-bold text-white">Guides by topic</p>
          <ul className="mt-3 space-y-2 text-sm">
            {categories.map((category) => (
              <li key={category.slug}>
                <Link href={`/category/${category.slug}`} className="hover:text-white">
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-navy-800">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-5 text-xs text-navy-400 md:flex-row md:items-center md:justify-between md:px-6">
          <p>© 2025 {siteConfig.name}. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-4">
            {footerLegalLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-white">
                {link.label}
              </Link>
            ))}
            <a href="https://twitter.com/intent/tweet?text=GigWorkerFinance" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              X
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              Facebook
            </a>
            <a href="https://www.reddit.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              Reddit
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
