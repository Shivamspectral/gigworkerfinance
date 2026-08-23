import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${siteConfig.name} with topic ideas, corrections, or partnership questions.`,
  alternates: { canonical: `${siteConfig.url}/contact` },
};

export default function ContactPage() {
  return (
    <main id="main-content" className="mx-auto grid max-w-5xl gap-10 px-4 py-12 md:grid-cols-[0.9fr_1.1fr] md:px-6">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-forest-700">Contact</p>
        <h1 className="mt-2 font-serif text-4xl font-bold text-navy-950">Tell us what you need explained next.</h1>
        <p className="mt-4 text-navy-700">
          Questions about a guide, a correction, or a topic you want us to cover? Send a note. We read every message, even if we can&apos;t give personal tax advice.
        </p>
        <ul className="mt-6 space-y-3 text-sm text-navy-600">
          <li>We do not provide personalized tax, legal, or investment advice.</li>
          <li>For account issues with Uber, Lyft, DoorDash, or another platform, contact that company directly.</li>
          <li>Partnership and guest-post inquiries are welcome — include your URL.</li>
        </ul>
      </div>
      <ContactForm />
    </main>
  );
}
