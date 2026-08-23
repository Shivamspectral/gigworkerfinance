import Link from "next/link";
import { categoryToSlug } from "@/lib/site";

type CategoryBadgeProps = {
  category: string;
  href?: string;
  className?: string;
};

const palette: Record<string, string> = {
  taxes: "bg-navy-100 text-navy-800",
  budgeting: "bg-forest-100 text-forest-800",
  "apps-tools": "bg-emerald-100 text-emerald-800",
  "income-tips": "bg-amber-100 text-amber-900",
};

export default function CategoryBadge({ category, href, className = "" }: CategoryBadgeProps) {
  const slug = categoryToSlug(category);
  const classes = `inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold tracking-wide ${palette[slug] ?? "bg-navy-100 text-navy-800"} ${className}`;

  if (href === undefined) {
    return <span className={classes}>{category}</span>;
  }

  return (
    <Link href={href || `/category/${slug}`} className={`${classes} transition hover:opacity-80`}>
      {category}
    </Link>
  );
}
