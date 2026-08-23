import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Plus_Jakarta_Sans, Source_Serif_4 } from "next/font/google";
import Script from "next/script";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: J8jk-qbSmaLTTrQ-hNE5esYFc08TCY_vLL8OebiIimk,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.author }],
  keywords: [
    "gig worker taxes",
    "DoorDash tax deductions",
    "Uber taxes",
    "Lyft taxes",
    "1099 gig worker",
    "quarterly estimated taxes",
    "mileage tracker",
    "rideshare tax tips",
  ],
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [
      {
        url: "https://i.ibb.co/4nHRZf7c/hero-driver.jpg",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — ${siteConfig.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: ["https://i.ibb.co/4nHRZf7c/hero-driver.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const adsenseId = process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/*
          Google AdSense verification / publisher meta tag.
          When you have a publisher ID, set NEXT_PUBLIC_ADSENSE_PUBLISHER_ID in .env
          (example: ca-pub-xxxxxxxxxxxxxxxx). The tag below is injected automatically.
          You can also paste this by hand:
          <meta name="google-adsense-account" content="ca-pub-xxxxxxxxxxxxxxxx" />
        */}
        {adsenseId ? <meta name="google-adsense-account" content={adsenseId} /> : null}
      </head>
      <body className={`${plusJakarta.variable} ${sourceSerif.variable} bg-[#f7f9fc] font-sans text-navy-900 antialiased`}>
        {/*
          Google Analytics 4
          Set NEXT_PUBLIC_GA_MEASUREMENT_ID (example: G-XXXXXXXXXX) to enable tracking.
          To add the script manually later, place it here:
          <Script src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" strategy="afterInteractive" />
        */}
        {gaId ? (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
            <Script id="ga4-init" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${gaId}');`}
            </Script>
          </>
        ) : null}
        {adsenseId ? (
          <Script
            id="adsense-loader"
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseId}`}
            crossOrigin="anonymous"
            strategy="afterInteractive"
          />
        ) : null}
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
