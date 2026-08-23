import Image from "next/image";
import Link from "next/link";
import NewsletterSignup from "@/components/NewsletterSignup";
import PostCard from "@/components/PostCard";
import { getAllPosts } from "@/lib/posts";
import { categories, siteConfig } from "@/lib/site";

export default function HomePage() {
  const posts = getAllPosts();
  const [featured, ...rest] = posts;
  const recent = rest.slice(0, 3);

  return (
    <main id="main-content">
      <section className="relative overflow-hidden bg-navy-950 text-white">
        <div className="absolute inset-0">
          <Image src="/images/hero-driver.jpg" alt="" fill priority sizes="100vw" className="object-cover opacity-35" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/88 to-navy-950/55" />
        </div>
        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-[1.15fr_0.85fr] md:px-6 md:py-24">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-forest-300">{siteConfig.name}</p>
            <h1 className="mt-3 font-serif text-4xl font-bold leading-[1.05] md:text-6xl">{siteConfig.tagline}</h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-navy-100 md:text-lg">
              Taxes, deductions, mileage, and take-home pay — explained for Uber, Lyft, DoorDash, Instacart, and Grubhub drivers in the US. No jargon. No fluff. Just money help you can use between rides.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/blog" className="rounded-full bg-forest-500 px-6 py-3 text-center text-sm font-semibold text-white hover:bg-forest-400">
                Browse tax & money guides
              </Link>
              <Link href="/about" className="rounded-full border border-white/20 px-6 py-3 text-center text-sm font-semibold text-white hover:bg-white/10">
                Why this site exists
              </Link>
            </div>
            <dl className="mt-10 grid grid-cols-3 gap-3 text-center sm:max-w-lg">
              <div className="rounded-2xl bg-white/8 px-3 py-4">
                <dt className="text-[11px] uppercase tracking-wide text-navy-300">Written for</dt>
                <dd className="mt-1 text-sm font-bold">1099 drivers</dd>
              </div>
              <div className="rounded-2xl bg-white/8 px-3 py-4">
                <dt className="text-[11px] uppercase tracking-wide text-navy-300">Focus</dt>
                <dd className="mt-1 text-sm font-bold">US tax rules</dd>
              </div>
              <div className="rounded-2xl bg-white/8 px-3 py-4">
                <dt className="text-[11px] uppercase tracking-wide text-navy-300">Format</dt>
                <dd className="mt-1 text-sm font-bold">Phone-friendly</dd>
              </div>
            </dl>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/8 p-6 backdrop-blur-sm">
            <p className="text-sm font-semibold text-forest-300">Start with the big three</p>
            <ul className="mt-4 space-y-4">
              {posts.slice(0, 3).map((post) => (
                <li key={post.slug}>
                  <Link href={`/blog/${post.slug}`} className="block rounded-2xl bg-navy-900/70 p-4 hover:bg-navy-900">
                    <p className="text-xs uppercase tracking-wide text-navy-300">{post.category}</p>
                    <p className="mt-1 font-semibold leading-snug">{post.title}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 md:px-6">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-forest-700">Latest from the blog</p>
            <h2 className="mt-2 font-serif text-3xl font-bold text-navy-950">Guides drivers actually search for</h2>
          </div>
          <Link href="/blog" className="hidden text-sm font-semibold text-forest-700 hover:text-forest-800 sm:inline">
            View all posts →
          </Link>
        </div>
        <div className="grid gap-6">
          {featured ? <PostCard post={featured} featured /> : null}
          <div className="grid gap-6 md:grid-cols-3">
            {recent.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-2 md:px-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-forest-700">About this site</p>
            <h2 className="mt-2 font-serif text-3xl font-bold text-navy-950">Built for people who get paid by the trip, not the W-2.</h2>
            <p className="mt-4 text-navy-700">
              {siteConfig.name} exists because most tax articles talk past gig drivers. You don&apos;t get a paycheck withholding. You get a 1099, a pile of miles, and a surprise bill in April unless you plan ahead.
            </p>
            <p className="mt-3 text-navy-700">
              Every guide here is written in plain English, checked against current IRS rules, and aimed at US rideshare and delivery work. We&apos;re not your CPA — we&apos;re the explainer you can read at a red light.
            </p>
            <Link href="/about" className="mt-6 inline-flex font-semibold text-forest-700 hover:text-forest-800">
              Meet the author →
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {categories.map((category) => (
              <Link key={category.slug} href={`/category/${category.slug}`} className="rounded-2xl border border-navy-100 bg-navy-50 p-5 hover:border-forest-300">
                <h3 className="font-bold text-navy-950">{category.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-600">{category.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 md:px-6">
        <NewsletterSignup />
      </section>
    </main>
  );
}
