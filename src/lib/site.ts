export const siteConfig = {
  name: "GigWorkerFinance",
  tagline: "Money Smarts for Gig Drivers",
  alternateTaglines: [
    "Keep More of Every Fare",
    "Tax-Smart Money Tips for 1099 Drivers",
    "Take-Home Pay Help for Uber, Lyft & DoorDash Drivers",
  ],
  description:
    "Practical tax, deduction, budgeting, and money guides for US gig drivers on Uber, Lyft, DoorDash, Instacart, and Grubhub.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://gigworkerfinance.vercel.app",
  author: "Alex Rivera",
  authorRole: "Former gig driver and personal-finance writer",
  locale: "en_US",
  twitterHandle: "@gigworkerfinance",
};

export const categories = [
  { name: "Taxes", slug: "taxes", description: "1099 taxes, deductions, quarterly estimates, and IRS basics for gig drivers." },
  { name: "Budgeting", slug: "budgeting", description: "Simple systems to save for taxes, cover slow weeks, and keep more take-home pay." },
  { name: "Apps & Tools", slug: "apps-tools", description: "Mileage trackers, expense apps, and free tools that make gig-work bookkeeping easier." },
  { name: "Income Tips", slug: "income-tips", description: "Ways to raise net pay, cut costs per mile, and treat gig work like a real business." },
] as const;

export type CategoryName = (typeof categories)[number]["name"];
export type CategorySlug = (typeof categories)[number]["slug"];

export function categoryToSlug(category: string): string {
  return category
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function getCategoryBySlug(slug: string) {
  return categories.find((category) => category.slug === slug);
}

export function getCategoryByName(name: string) {
  return categories.find((category) => category.name.toLowerCase() === name.toLowerCase());
}

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const footerLegalLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
] as const;
