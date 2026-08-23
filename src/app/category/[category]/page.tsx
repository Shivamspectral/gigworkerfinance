import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PostCard from "@/components/PostCard";
import { getPostsByCategory } from "@/lib/posts";
import { categories, getCategoryBySlug, siteConfig } from "@/lib/site";

type CategoryPageProps = {
  params: Promise<{ category: string }>;
};

export function generateStaticParams() {
  return categories.map((category) => ({ category: category.slug }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category } = await params;
  const match = getCategoryBySlug(category);
  if (!match) {
    return { title: "Category not found" };
  }

  return {
    title: `${match.name} guides`,
    description: match.description,
    alternates: { canonical: `${siteConfig.url}/category/${match.slug}` },
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;
  const match = getCategoryBySlug(category);

  if (!match) {
    notFound();
  }

  const posts = getPostsByCategory(match.slug);

  return (
    <main id="main-content" className="mx-auto max-w-6xl px-4 py-12 md:px-6">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-forest-700">Category</p>
      <h1 className="mt-2 font-serif text-4xl font-bold text-navy-950">{match.name}</h1>
      <p className="mt-4 max-w-3xl text-navy-700">{match.description}</p>

      {posts.length > 0 ? (
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <div className="mt-10 rounded-3xl border border-navy-100 bg-white p-8">
          <p className="text-navy-700">No {match.name.toLowerCase()} guides yet. Check the full library while we publish the next one.</p>
          <Link href="/blog" className="mt-4 inline-flex font-semibold text-forest-700">
            Browse all posts →
          </Link>
        </div>
      )}
    </main>
  );
}
