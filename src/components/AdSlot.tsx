type AdSlotProps = {
  position: string;
  format?: "in-article" | "rectangle" | "leaderboard";
  className?: string;
};

const formatClasses = {
  "in-article": "min-h-[250px] md:min-h-[280px]",
  rectangle: "min-h-[250px]",
  leaderboard: "min-h-[90px] md:min-h-[120px]",
};

export default function AdSlot({ position, format = "in-article", className = "" }: AdSlotProps) {
  return (
    <aside
      data-ad-slot={position}
      aria-label="Advertisement placeholder"
      className={`my-8 flex w-full flex-col items-center justify-center rounded-xl border-2 border-dashed border-navy-200 bg-navy-50/80 px-4 py-6 text-center ${formatClasses[format]} ${className}`}
    >
      {/*
        Replace this placeholder with your Google AdSense <ins class="adsbygoogle"> unit.
        Keep the wrapper so layout space is reserved and Core Web Vitals stay stable.
      */}
      <p className="m-0 text-xs font-semibold uppercase tracking-[0.18em] text-navy-400">Ad Space</p>
      <p className="mt-2 max-w-xs text-sm text-navy-500">Reserved for Google AdSense · {position}</p>
    </aside>
  );
}
