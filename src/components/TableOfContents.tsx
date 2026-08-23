"use client";

import { useState } from "react";
import type { Heading } from "@/lib/posts";

export default function TableOfContents({ headings }: { headings: Heading[] }) {
  const [open, setOpen] = useState(false);

  if (headings.length === 0) {
    return null;
  }

  return (
    <nav aria-label="Table of contents" className="rounded-2xl border border-navy-100 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm font-bold text-navy-950">On this page</p>
        <button
          type="button"
          className="text-sm font-semibold text-forest-700 lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
        >
          {open ? "Hide" : "Show"}
        </button>
      </div>
      <ol className={`${open ? "mt-4 block" : "hidden"} space-y-2 lg:mt-4 lg:block`}>
        {headings.map((heading) => (
          <li key={heading.id} className={heading.level === 3 ? "ml-4" : ""}>
            <a href={`#${heading.id}`} className="text-sm leading-snug text-navy-600 hover:text-forest-700">
              {heading.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
