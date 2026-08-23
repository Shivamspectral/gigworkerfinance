import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${siteConfig.name}, including Google AdSense and Google Analytics disclosures.`,
  alternates: { canonical: `${siteConfig.url}/privacy-policy` },
};

export default function PrivacyPolicyPage() {
  return (
    <main id="main-content" className="mx-auto max-w-3xl px-4 py-12 md:px-6">
      <h1 className="font-serif text-4xl font-bold text-navy-950">Privacy Policy</h1>
      <p className="mt-3 text-sm text-navy-500">Last updated: March 20, 2025</p>
      <div className="article-content">
        <p>
          {siteConfig.name} (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates the website at {siteConfig.url} (the &quot;Site&quot;). This Privacy Policy explains how we collect, use, disclose, and safeguard information when you visit the Site. The Site is intended for a US audience of gig economy drivers and other visitors.
        </p>
        <h2>Information we collect</h2>
        <p>We may collect the following categories of information:</p>
        <ul>
          <li>
            <strong>Information you provide.</strong> Name, email address, and message content if you use the contact form or newsletter signup.
          </li>
          <li>
            <strong>Automatic technical data.</strong> IP address, browser type, device type, referring URL, pages viewed, and approximate location derived from IP address.
          </li>
          <li>
            <strong>Cookies and similar technologies.</strong> Small files stored on your device that help the Site function, measure traffic, and (when enabled) display advertising.
          </li>
        </ul>
        <h2>How we use information</h2>
        <ul>
          <li>To operate, maintain, and improve the Site and its content</li>
          <li>To respond to inquiries and send newsletter emails you requested</li>
          <li>To understand which guides are useful and to improve performance</li>
          <li>To detect abuse and protect the Site</li>
          <li>To display advertising, including personalized ads, when Google AdSense or a similar partner is enabled</li>
          <li>To comply with law and enforce our Terms of Service</li>
        </ul>
        <h2>Google Analytics</h2>
        <p>
          We may use Google Analytics to understand how visitors use the Site. Google Analytics uses cookies to collect information such as how often users visit, which pages they visit, and which other sites referred them. Google&apos;s ability to use and share information collected by Google Analytics is restricted by the Google Analytics Terms of Service and Google&apos;s Privacy Policy. You can opt out with the{" "}
          <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">
            Google Analytics Opt-out Browser Add-on
          </a>
          .
        </p>
        <h2>Google AdSense and advertising cookies</h2>
        <p>
          We may use Google AdSense to display ads. Google, as a third-party vendor, uses cookies to serve ads on the Site. Google&apos;s use of advertising cookies enables it and its partners to serve ads based on your visit to this Site and/or other sites on the Internet.
        </p>
        <p>
          Users may opt out of personalized advertising by visiting{" "}
          <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">
            Google Ads Settings
          </a>
          . Alternatively, you can opt out of some third-party vendors&apos; uses of cookies for personalized advertising by visiting{" "}
          <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer">
            www.aboutads.info/choices
          </a>
          .
        </p>
        <p>
          Third-party vendors, including Google, may use cookies, web beacons, and similar technologies to collect or receive information from the Site and elsewhere on the internet and use that information to provide measurement services and target ads. We do not control these third-party cookies.
        </p>
        <h2>Cookies</h2>
        <p>Cookies may be:</p>
        <ul>
          <li>
            <strong>Essential</strong> — required for basic Site functions such as security and form submissions
          </li>
          <li>
            <strong>Analytics</strong> — used to understand traffic and content performance
          </li>
          <li>
            <strong>Advertising</strong> — used by Google AdSense and partners to deliver and measure ads, including ads based on your prior visits
          </li>
        </ul>
        <p>You can control cookies through your browser settings. Blocking some cookies may affect Site functionality or the ads you see.</p>
        <h2>Legal bases and regional rights</h2>
        <p>
          If you are located in the European Economic Area or United Kingdom, we process personal data based on consent (for optional cookies, analytics, and advertising), legitimate interests (to operate a secure, useful Site), and/or performance of a request you make (such as answering a contact form). You may have rights to access, correct, delete, restrict, or port your data, and to object to certain processing or withdraw consent.
        </p>
        <p>
          If you are a California resident, you may have rights under the CCPA/CPRA to know, delete, and correct personal information, and to opt out of the “sale” or “sharing” of personal information for cross-context behavioral advertising. Advertising cookies used by Google and similar partners may be considered “sharing” under California law. Use the opt-out links above or email us to exercise a request. We will not discriminate against you for exercising privacy rights.
        </p>
        <h2>How we share information</h2>
        <p>We do not sell your name or email address. We may share information with:</p>
        <ul>
          <li>Service providers that host the Site, send email, or process forms</li>
          <li>Analytics and advertising partners such as Google</li>
          <li>Authorities if required by law or to protect rights and safety</li>
          <li>A successor if the Site is transferred as part of a merger or sale</li>
        </ul>
        <h2>Data retention</h2>
        <p>
          Contact messages and newsletter emails are kept only as long as needed to respond, operate the mailing list, or meet legal obligations. Analytics data is retained according to the settings we configure with Google.
        </p>
        <h2>Children</h2>
        <p>The Site is not directed to children under 13, and we do not knowingly collect personal information from children under 13.</p>
        <h2>Security</h2>
        <p>
          We use reasonable administrative and technical safeguards, but no internet transmission is completely secure. Please do not send Social Security numbers, full tax returns, or other highly sensitive documents through the contact form.
        </p>
        <h2>Third-party links</h2>
        <p>Guides may link to IRS pages, app stores, or other websites. Their privacy practices are their own.</p>
        <h2>Changes</h2>
        <p>We may update this Privacy Policy from time to time. The “Last updated” date at the top will change when we do. Continued use of the Site after an update means you accept the revised policy.</p>
        <h2>Contact</h2>
        <p>
          Questions about this Privacy Policy can be sent through our{" "}
          <a href="/contact">contact page</a>. Please include “Privacy” in the subject line of your message.
        </p>
      </div>
    </main>
  );
}
