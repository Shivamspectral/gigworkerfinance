import Image from "next/image";
import Link from "next/link";
import CategoryBadge from "@/components/CategoryBadge";
import { formatPostDate, type PostMeta } from "@/lib/posts";

type PostCardProps = {
  post: PostMeta;
  featured?: boolean;
};

export default function PostCard({ post, featured = false }: PostCardProps) {
  return (
    <article className={`group flex h-full flex-col overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-[0_10px_30px_rgba(18,35,58,0.06)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(18,35,58,0.1)] ${featured ? "md:flex-row" : ""}`}>
      <Link href={`/blog/${post.slug}`} className={`relative block overflow-hidden bg-navy-100 ${featured ? "min-h-56 md:w-[46%] md:min-h-[280px]" : "aspect-[16/10]"}`}>
        <Image
          src={post.image}
          alt=""
          fill
          sizes={featured ? "(min-width: 768px) 46vw, 100vw" : "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"}
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
        />
      </Link>
      <div className={`flex flex-1 flex-col p-5 ${featured ? "md:p-8" : ""}`}>
        <div className="mb-3 flex flex-wrap items-center gap-2 text-xs text-navy-500">
          <CategoryBadge category={post.category} href={`/category/${post.categorySlug}`} />
          <time dateTime={post.date}>{formatPostDate(post.date)}</time>
          <span aria-hidden="true">•</span>
          <span>{post.readTime} read</span>
        </div>
        <h3 className={`font-serif font-bold leading-snug text-navy-950 ${featured ? "text-2xl md:text-3xl" : "text-xl"}`}>
          <Link href={`/blog/${post.slug}`} className="hover:text-forest-700">
            {post.title}
          </Link>
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-navy-600 md:text-[0.95rem]">{post.excerpt}</p>
        <Link href={`/blog/${post.slug}`} className="mt-4 inline-flex items-center text-sm font-semibold text-forest-700 hover:text-forest-800">
          Read guide
          <span aria-hidden="true" className="ml-1">
            →
          </span>
        </Link>
      </div>
    </article>
  );
}
