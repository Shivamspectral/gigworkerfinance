import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `Learn why ${siteConfig.name} exists and how we help US gig drivers with taxes, deductions, and money management.`,
  alternates: { canonical: `${siteConfig.url}/about` },
};

export default function AboutPage() {
  return (
    <main id="main-content" className="mx-auto max-w-4xl px-4 py-12 md:px-6">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-forest-700">About {siteConfig.name}</p>
      <h1 className="mt-2 font-serif text-4xl font-bold text-navy-950 md:text-5xl">Money help written from the driver&apos;s seat.</h1>
      <p className="mt-5 text-lg leading-relaxed text-navy-700">{siteConfig.tagline}. That&apos;s the whole assignment.</p>

      <div className="mt-10 overflow-hidden rounded-3xl border border-navy-100 bg-white shadow-sm md:grid md:grid-cols-[280px_1fr]">
        <div className="relative min-h-72">
          <Image src="https://i.ibb.co/HLb2g5Jb/about-author.jpg" alt={`${siteConfig.author}, ${siteConfig.authorRole}`} fill className="object-cover" sizes="280px" />
        </div>
        <div className="p-6 md:p-8">
          <p className="text-sm font-semibold text-forest-700">Author</p>
          <h2 className="mt-1 font-serif text-3xl font-bold text-navy-950">{siteConfig.author}</h2>
          <p className="mt-1 text-sm text-navy-500">{siteConfig.authorRole}</p>
          <p className="mt-4 text-navy-700">
            I started driving nights to cover rent and quickly learned the hard way that platform deposits are not the same thing as take-home pay. Self-employment tax, mileage logs, and quarterly estimates were not covered in the onboarding video.
          </p>
          <p className="mt-3 text-navy-700">
            After a few tax seasons of doing this myself — and answering the same questions from other drivers in parking lots — I started writing the guides I wish I&apos;d had during week one. Customize this bio with your own story, credentials, and photo.
          </p>
        </div>
      </div>

      <section className="mt-12">
        <h2 className="font-serif text-3xl font-bold text-navy-950">Our mission</h2>
        <p className="mt-4 text-navy-700">
          {siteConfig.name} helps US gig economy drivers keep more of what they earn. We translate IRS rules, 1099 paperwork, and everyday money decisions into checklists you can follow without an accounting degree.
        </p>
        <p className="mt-3 text-navy-700">
          We focus on rideshare and delivery work because the details are specific: standard mileage vs. actual expenses, phone mounts and hot bags, mixed personal/business cars, and income that spikes one week and disappears the next.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="font-serif text-3xl font-bold text-navy-950">Why you can trust these guides</h2>
        <ul className="mt-5 grid gap-4 md:grid-cols-2">
          {[
            ["Plain-English, source-aware", "We explain current IRS concepts (Schedule C, 1099-NEC/K, Form 1040-ES, standard mileage) and tell you when to verify a number."],
            ["Written for 1099 work", "No recycled W-2 advice. The examples assume you pay both halves of Social Security and Medicare."],
            ["No miracle claims", "We will not promise a secret loophole or a guaranteed refund. Real tax planning is boring, documented, and legal."],
            ["Updated for the year on the page", "Each guide is dated and written around that tax year’s commonly used figures, with reminders to confirm IRS publications."],
          ].map(([title, copy]) => (
            <li key={title} className="rounded-2xl border border-navy-100 bg-white p-5">
              <h3 className="font-bold text-navy-950">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-600">{copy}</p>
            </li>
          ))}
        </ul>
      </section>

      <p className="mt-10 text-navy-700">
        Have a topic you want covered? <Link href="/contact" className="font-semibold text-forest-700">Send a note</Link> or browse the latest on the <Link href="/blog" className="font-semibold text-forest-700">blog</Link>.
      </p>
    </main>
  );
}
