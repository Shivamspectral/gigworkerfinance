import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkHtml from "remark-html";
import { categoryToSlug, siteConfig } from "@/lib/site";

const postsDirectory = path.join(process.cwd(), "posts");

export type PostFrontmatter = {
  title: string;
  date: string;
  excerpt: string;
  category: string;
  readTime: string;
  author?: string;
  image?: string;
};

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  category: string;
  categorySlug: string;
  readTime: string;
  author: string;
  image: string;
};

export type Heading = {
  id: string;
  text: string;
  level: 2 | 3;
};

export type Post = PostMeta & {
  content: string;
  html: string;
  headings: Heading[];
};

function isString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function parseFrontmatter(data: Record<string, unknown>, slug: string): PostMeta {
  if (!isString(data.title) || !isString(data.date) || !isString(data.excerpt) || !isString(data.category) || !isString(data.readTime)) {
    throw new Error(`Post "${slug}" is missing required frontmatter.`);
  }

  return {
    slug,
    title: data.title,
    date: data.date,
    excerpt: data.excerpt,
    category: data.category,
    categorySlug: categoryToSlug(data.category),
    readTime: data.readTime,
    author: isString(data.author) ? data.author : siteConfig.author,
    image: isString(data.image) ? data.image : "/images/og-default.jpg",
  };
}

export function slugifyHeading(value: string): string {
  return value
    .toLowerCase()
    .replace(/<[^>]+>/g, "")
    .replace(/&[a-z]+;/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

function enhanceHtml(html: string): { html: string; headings: Heading[] } {
  const headings: Heading[] = [];

  const withIds = html.replace(/<h([23])>([\s\S]*?)<\/h\1>/g, (_match, level: string, inner: string) => {
    const text = inner.replace(/<[^>]+>/g, "").trim();
    const id = slugifyHeading(text);
    headings.push({ id, text, level: Number(level) as 2 | 3 });
    return `<h${level} id="${id}">${inner}</h${level}>`;
  });

  return { html: withIds, headings };
}

export function getPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  return fs
    .readdirSync(postsDirectory)
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => fileName.replace(/\.md$/, ""));
}

export function getPostMeta(slug: string): PostMeta {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data } = matter(fileContents);
  return parseFrontmatter(data, slug);
}

export function getAllPosts(): PostMeta[] {
  return getPostSlugs()
    .map((slug) => getPostMeta(slug))
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostsByCategory(categorySlug: string): PostMeta[] {
  return getAllPosts().filter((post) => post.categorySlug === categorySlug);
}

export function getRelatedPosts(slug: string, categorySlug: string, limit = 3): PostMeta[] {
  const sameCategory = getAllPosts().filter((post) => post.slug !== slug && post.categorySlug === categorySlug);
  if (sameCategory.length >= limit) {
    return sameCategory.slice(0, limit);
  }

  const extras = getAllPosts().filter(
    (post) => post.slug !== slug && !sameCategory.some((related) => related.slug === post.slug),
  );

  return [...sameCategory, ...extras].slice(0, limit);
}

export async function getPostBySlug(slug: string): Promise<Post> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const meta = parseFrontmatter(data, slug);

  const processed = await remark().use(remarkGfm).use(remarkHtml, { sanitize: false }).process(content);
  const { html, headings } = enhanceHtml(processed.toString());

  return {
    ...meta,
    content,
    html,
    headings,
  };
}

export function splitContentForAds(html: string): { intro: string; middle: string; rest: string } {
  const chunks = html.split(/(?=<h2\b)/);
  if (chunks.length >= 3) {
    return {
      intro: chunks[0] ?? "",
      middle: chunks.slice(1, Math.ceil(chunks.length / 2) + 1).join(""),
      rest: chunks.slice(Math.ceil(chunks.length / 2) + 1).join(""),
    };
  }

  const firstClose = html.indexOf("</p>");
  if (firstClose === -1) {
    return { intro: html, middle: "", rest: "" };
  }

  const introEnd = firstClose + 4;
  const remainder = html.slice(introEnd);
  const midpoint = Math.floor(remainder.length / 2);
  const splitAt = remainder.indexOf("</p>", midpoint);

  if (splitAt === -1) {
    return { intro: html.slice(0, introEnd), middle: remainder, rest: "" };
  }

  return {
    intro: html.slice(0, introEnd),
    middle: remainder.slice(0, splitAt + 4),
    rest: remainder.slice(splitAt + 4),
  };
}

export function formatPostDate(date: string): string {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00.000Z`));
}

export const POSTS_PER_PAGE = 9;

export function paginatePosts(posts: PostMeta[], page = 1) {
  const safePage = Number.isFinite(page) && page > 0 ? Math.floor(page) : 1;
  const totalPages = Math.max(1, Math.ceil(posts.length / POSTS_PER_PAGE));
  const currentPage = Math.min(safePage, totalPages);
  const start = (currentPage - 1) * POSTS_PER_PAGE;

  return {
    items: posts.slice(start, start + POSTS_PER_PAGE),
    currentPage,
    totalPages,
    totalItems: posts.length,
  };
}
