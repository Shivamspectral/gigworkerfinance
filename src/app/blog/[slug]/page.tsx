import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import AdSlot from "@/components/AdSlot";
import CategoryBadge from "@/components/CategoryBadge";
import NewsletterSignup from "@/components/NewsletterSignup";
import PostCard from "@/components/PostCard";
import ShareButtons from "@/components/ShareButtons";
import TableOfContents from "@/components/TableOfContents";
import { formatPostDate, getAllPosts, getPostBySlug, getRelatedPosts, splitContentForAds } from "@/lib/posts";
import { siteConfig } from "@/lib/site";

type PostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params;

  try {
    const post = await getPostBySlug(slug);
    const url = `${siteConfig.url}/blog/${post.slug}`;

    return {
      title: post.title,
      description: post.excerpt,
      authors: [{ name: post.author }],
      alternates: { canonical: url },
      openGraph: {
        type: "article",
        url,
        title: post.title,
        description: post.excerpt,
        publishedTime: post.date,
        authors: [post.author],
        siteName: siteConfig.name,
        images: [{ url: post.image, alt: post.title }],
      },
      twitter: {
        card: "summary_large_image",
        title: post.title,
        description: post.excerpt,
        images: [post.image],
      },
    };
  } catch {
    return { title: "Post not found" };
  }
}

export default async function BlogPostPage({ params }: PostPageProps) {
  const { slug } = await params;
  let post;

  try {
    post = await getPostBySlug(slug);
  } catch {
    notFound();
  }

  const related = getRelatedPosts(post.slug, post.categorySlug);
  const { intro, middle, rest } = splitContentForAds(post.html);
  const url = `${siteConfig.url}/blog/${post.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    description: post.excerpt,
    image: `${siteConfig.url}${post.image}`,
    mainEntityOfPage: url,
  };

  return (
    <main id="main-content" className="mx-auto max-w-6xl px-4 py-10 md:px-6">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article>
        <header className="mx-auto max-w-3xl">
          <p className="text-sm text-navy-500">
            <Link href="/blog" className="hover:text-forest-700">
              Blog
            </Link>
            <span aria-hidden="true"> / </span>
            <Link href={`/category/${post.categorySlug}`} className="hover:text-forest-700">
              {post.category}
            </Link>
          </p>
          <h1 className="mt-3 font-serif text-3xl font-bold leading-tight text-navy-950 md:text-5xl">{post.title}</h1>
          <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-navy-600">
            <CategoryBadge category={post.category} href={`/category/${post.categorySlug}`} />
            <span>By {post.author}</span>
            <time dateTime={post.date}>{formatPostDate(post.date)}</time>
            <span>{post.readTime} read</span>
          </div>
        </header>

        <div className="relative mx-auto mt-8 aspect-[16/9] max-w-4xl overflow-hidden rounded-3xl bg-navy-100">
          <Image src={post.image} alt="" fill priority sizes="(min-width: 896px) 896px, 100vw" className="object-cover" />
        </div>

        <div className="mx-auto mt-10 grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,1fr)_280px]">
          <div>
            <div className="article-content" dangerouslySetInnerHTML={{ __html: intro }} />
            <AdSlot position="after-intro" format="in-article" />
            {middle ? <div className="article-content" dangerouslySetInnerHTML={{ __html: middle }} /> : null}
            {rest ? <AdSlot position="mid-article" format="in-article" /> : null}
            {rest ? <div className="article-content" dangerouslySetInnerHTML={{ __html: rest }} /> : null}

            <div className="mt-10 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-relaxed text-navy-700">
              <strong>Not tax advice.</strong> {siteConfig.name} publishes educational guides for US gig workers. Tax situations vary by state, filing status, and income. Confirm numbers with the IRS or a qualified tax pro before you file.
            </div>

            <div className="mt-8">
              <ShareButtons title={post.title} slug={post.slug} />
            </div>
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <TableOfContents headings={post.headings} />
          </aside>
        </div>
      </article>

      <AdSlot position="before-related-posts" format="leaderboard" className="mx-auto max-w-4xl" />

      <section className="mt-4">
        <h2 className="font-serif text-3xl font-bold text-navy-950">Related posts</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {related.map((item) => (
            <PostCard key={item.slug} post={item} />
          ))}
        </div>
      </section>

      <section className="mt-12">
        <NewsletterSignup compact />
      </section>
    </main>
  );
}
