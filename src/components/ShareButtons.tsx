import { siteConfig } from "@/lib/site";

type ShareButtonsProps = {
  title: string;
  slug: string;
};

function shareUrl(path: string) {
  return `${siteConfig.url}${path}`;
}

export default function ShareButtons({ title, slug }: ShareButtonsProps) {
  const url = shareUrl(`/blog/${slug}`);
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const links = [
    {
      name: "X",
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    },
    {
      name: "Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    },
    {
      name: "Reddit",
      href: `https://www.reddit.com/submit?url=${encodedUrl}&title=${encodedTitle}`,
    },
    {
      name: "Pinterest",
      href: `https://pinterest.com/pin/create/button/?url=${encodedUrl}&description=${encodedTitle}`,
    },
  ];

  return (
    <div className="flex flex-wrap items-center gap-2">
      <p className="mr-1 text-sm font-semibold text-navy-700">Share</p>
      {links.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-navy-200 bg-white px-3 py-1.5 text-xs font-semibold text-navy-700 transition hover:border-forest-400 hover:text-forest-700"
        >
          {link.name}
        </a>
      ))}
    </div>
  );
}
