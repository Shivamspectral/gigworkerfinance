import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/posts";
import { categories, siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes = ["", "/blog", "/about", "/contact", "/privacy-policy", "/terms"].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified,
    changeFrequency: path === "" || path === "/blog" ? "weekly" as const : "monthly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const postRoutes = getAllPosts().map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const categoryRoutes = categories.map((category) => ({
    url: `${siteConfig.url}/category/${category.slug}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...postRoutes, ...categoryRoutes];
}
