import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main-content" className="mx-auto max-w-xl px-4 py-24 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-forest-700">404</p>
      <h1 className="mt-3 font-serif text-4xl font-bold text-navy-950">That page took a wrong turn.</h1>
      <p className="mt-4 text-navy-600">The link may be outdated, or the guide has moved. Try the blog or head back home.</p>
      <div className="mt-8 flex justify-center gap-3">
        <Link href="/" className="rounded-full bg-navy-950 px-5 py-2.5 text-sm font-semibold text-white">
          Home
        </Link>
        <Link href="/blog" className="rounded-full border border-navy-200 px-5 py-2.5 text-sm font-semibold text-navy-800">
          Browse guides
        </Link>
      </div>
    </main>
  );
}
