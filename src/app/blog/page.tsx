import type { Metadata } from "next";
import Link from "next/link";
import PostCard from "@/components/PostCard";
import { getAllPosts, paginatePosts } from "@/lib/posts";
import { categories, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog",
  description: `All ${siteConfig.name} guides on gig-worker taxes, deductions, budgeting, mileage apps, and take-home pay.`,
  alternates: { canonical: `${siteConfig.url}/blog` },
};

type BlogPageProps = {
  searchParams: Promise<{ page?: string }>;
};

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const { page } = await searchParams;
  const allPosts = getAllPosts();
  const { items, currentPage, totalPages, totalItems } = paginatePosts(allPosts, Number(page ?? "1"));

  return (
    <main id="main-content" className="mx-auto max-w-6xl px-4 py-12 md:px-6">
      <header className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-forest-700">{siteConfig.name} blog</p>
        <h1 className="mt-2 font-serif text-4xl font-bold text-navy-950">Money guides for gig drivers</h1>
        <p className="mt-4 text-navy-700">
          {totalItems} practical articles on taxes, deductions, apps, and budgeting for US rideshare and delivery drivers.
        </p>
      </header>

      <div className="mt-8 flex flex-wrap gap-2">
        {categories.map((category) => (
          <Link
            key={category.slug}
            href={`/category/${category.slug}`}
            className="rounded-full border border-navy-200 bg-white px-3 py-1.5 text-sm font-semibold text-navy-700 hover:border-forest-400"
          >
            {category.name}
          </Link>
        ))}
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {items.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>

      {totalPages > 1 ? (
        <nav className="mt-10 flex items-center justify-center gap-3" aria-label="Pagination">
          {currentPage > 1 ? (
            <Link href={`/blog?page=${currentPage - 1}`} className="rounded-full border border-navy-200 px-4 py-2 text-sm font-semibold">
              Previous
            </Link>
          ) : null}
          <span className="text-sm text-navy-600">
            Page {currentPage} of {totalPages}
          </span>
          {currentPage < totalPages ? (
            <Link href={`/blog?page=${currentPage + 1}`} className="rounded-full border border-navy-200 px-4 py-2 text-sm font-semibold">
              Next
            </Link>
          ) : null}
        </nav>
      ) : (
        <p className="mt-10 text-center text-sm text-navy-500">Showing all {totalItems} guides. Pagination will appear as the library grows.</p>
      )}
    </main>
  );
}
