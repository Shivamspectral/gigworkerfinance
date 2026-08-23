import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of Service for ${siteConfig.name}.`,
  alternates: { canonical: `${siteConfig.url}/terms` },
};

export default function TermsPage() {
  return (
    <main id="main-content" className="mx-auto max-w-3xl px-4 py-12 md:px-6">
      <h1 className="font-serif text-4xl font-bold text-navy-950">Terms of Service</h1>
      <p className="mt-3 text-sm text-navy-500">Last updated: March 20, 2025</p>
      <div className="article-content">
        <p>
          Welcome to {siteConfig.name}. By accessing {siteConfig.url} (the &quot;Site&quot;), you agree to these Terms of Service. If you do not agree, do not use the Site.
        </p>
        <h2>Educational content only</h2>
        <p>
          The Site publishes general information about taxes, deductions, budgeting, and money management for gig economy workers. Nothing on the Site is tax, legal, accounting, or financial advice, and nothing here creates a client relationship with {siteConfig.name} or its authors. Tax law changes, and your facts are unique. Confirm anything important with the IRS, your state tax agency, or a qualified professional before you act.
        </p>
        <h2>No professional warranty</h2>
        <p>
          We work to keep guides accurate and current, but we do not warrant that content is complete, error-free, or suitable for your situation. Examples, dollar amounts, mileage rates, and deadlines can change. You use the Site at your own risk.
        </p>
        <h2>Acceptable use</h2>
        <p>You agree not to:</p>
        <ul>
          <li>Scrape, overload, or disrupt the Site</li>
          <li>Attempt to gain unauthorized access to systems or data</li>
          <li>Submit unlawful, abusive, or misleading content through forms</li>
          <li>Impersonate another person or misrepresent your affiliation</li>
          <li>Use the Site to violate any law</li>
        </ul>
        <h2>Intellectual property</h2>
        <p>
          Unless otherwise noted, articles, graphics, logos, and the {siteConfig.name} name are owned by us or our licensors. You may share links and quote short excerpts with attribution. You may not copy entire articles, republish our guides, or use our brand in a way that suggests endorsement without written permission.
        </p>
        <h2>User submissions</h2>
        <p>
          If you send comments, topic ideas, or other material, you grant us a non-exclusive, royalty-free license to use that material to operate and improve the Site. Do not send confidential tax documents or information you do not have the right to share.
        </p>
        <h2>Third-party services and ads</h2>
        <p>
          The Site may include links, embeds, affiliate mentions, or advertisements (including Google AdSense). We are not responsible for third-party sites, products, or privacy practices. App recommendations are editorial opinions, not paid audits of every feature.
        </p>
        <h2>Affiliate and advertising disclosure</h2>
        <p>
          Some pages may later include affiliate links or display ads. If we earn a commission or advertising revenue, it will not increase the price you pay a third party. Editorial recommendations are not guaranteed results.
        </p>
        <h2>Disclaimer of warranties</h2>
        <p>
          THE SITE IS PROVIDED “AS IS” AND “AS AVAILABLE.” TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
        </p>
        <h2>Limitation of liability</h2>
        <p>
          TO THE FULLEST EXTENT PERMITTED BY LAW, {siteConfig.name.toUpperCase()} AND ITS AUTHORS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, DATA, OR TAX SAVINGS, ARISING FROM YOUR USE OF THE SITE. OUR TOTAL LIABILITY FOR ANY CLAIM SHALL NOT EXCEED ONE HUNDRED DOLLARS ($100).
        </p>
        <h2>Indemnity</h2>
        <p>
          You agree to indemnify and hold harmless {siteConfig.name} and its authors from claims arising out of your misuse of the Site or violation of these Terms.
        </p>
        <h2>Changes and termination</h2>
        <p>
          We may update these Terms or discontinue any part of the Site at any time. Continued use after changes means you accept the new Terms. We may suspend access if we believe you have violated these Terms.
        </p>
        <h2>Governing law</h2>
        <p>
          These Terms are governed by the laws of the United States and the state in which the Site operator resides, without regard to conflict-of-law rules. Courts in that state shall have exclusive jurisdiction, except where prohibited.
        </p>
        <h2>Contact</h2>
        <p>
          Questions about these Terms can be sent through the <a href="/contact">contact page</a>.
        </p>
      </div>
    </main>
  );
}
