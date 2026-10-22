import { cn } from "@/lib/utils";

/**
 * Hand-drawn Victorian separators and the RN crest.
 *
 * These are the only ornaments on the site, and they are deliberately rare:
 * a swelling rule under the name, a hairline between chapters, and the crest
 * that stands in for the portrait until the photograph is in place.
 */

export function Flourish({
  className,
  strokeWidth = 0.75,
}: {
  className?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 360 30"
      fill="none"
      className={cn("text-crimson", className)}
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    >
      {/* mirrored scrollwork */}
      <g>
        <path d="M178 15c-14 0-21-6-32-6-10 0-15 5-15 10.5" />
        <path d="M163 9c3-3.4 8-4.6 12-3.2-3.4 1.2-6.6 3-9 5.6" />
        <path d="M146 19.5c0 4 3.4 6.2 6.4 5.2 2.6-1 3.2-4.6.7-5.9-2.2-1.1-4.6.4-4.3 2.8" />
        <path d="M196 12c9-4 18-4.5 26-2" />
        <circle cx="226" cy="9.6" r="1.15" fill="currentColor" stroke="none" />
      </g>
      <g transform="translate(360 0) scale(-1 1)">
        <path d="M178 15c-14 0-21-6-32-6-10 0-15 5-15 10.5" />
        <path d="M163 9c3-3.4 8-4.6 12-3.2-3.4 1.2-6.6 3-9 5.6" />
        <path d="M146 19.5c0 4 3.4 6.2 6.4 5.2 2.6-1 3.2-4.6.7-5.9-2.2-1.1-4.6.4-4.3 2.8" />
        <path d="M196 12c9-4 18-4.5 26-2" />
        <circle cx="226" cy="9.6" r="1.15" fill="currentColor" stroke="none" />
      </g>
      {/* centre lozenge */}
      <path d="M180 7.6 187.4 15 180 22.4 172.6 15Z" fill="currentColor" stroke="none" />
      <path d="M180 10.6 183.8 15 180 19.4 176.2 15Z" fill="#080808" stroke="none" />
      <circle cx="155" cy="26" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="205" cy="26" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

/** A long, tapering rule with a lozenge in the middle — used between chapters. */
export function ChapterRule({ className }: { className?: string }) {
  return (
    <div aria-hidden="true" className={cn("flex items-center gap-4", className)}>
      <span className="h-px flex-1 bg-gradient-to-r from-transparent via-line to-line/70" />
      <span className="size-1.5 rotate-45 border border-crimson/70" />
      <span className="h-px flex-1 bg-gradient-to-l from-transparent via-line to-line/70" />
    </div>
  );
}

/** The RN crest. Drawn, never a webfont glyph, so it holds its shape everywhere. */
export function Monogram({
  className,
  initials = "RN",
  label,
}: {
  className?: string;
  initials?: string;
  label?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "relative grid aspect-square place-items-center text-crimson",
        className,
      )}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 140 140"
        fill="none"
        className="absolute inset-0 h-full w-full"
        stroke="currentColor"
      >
        <circle cx="70" cy="70" r="66" strokeWidth="0.8" opacity="0.7" />
        <circle cx="70" cy="70" r="60" strokeWidth="0.4" opacity="0.5" />
        <circle
          cx="70"
          cy="70"
          r="63"
          strokeWidth="0.6"
          strokeDasharray="1 5"
          opacity="0.6"
        />
        {/* corner scrolls */}
        {[0, 90, 180, 270].map((angle) => (
          <g key={angle} transform={`rotate(${angle} 70 70)`}>
            <path
              d="M70 4c5 4 8 8 9 13-5-1-9-2-13-1"
              strokeWidth="0.7"
              opacity="0.9"
            />
            <path d="M70 4v9" strokeWidth="0.6" opacity="0.6" />
            <circle cx="70" cy="3.2" r="1" fill="currentColor" stroke="none" />
          </g>
        ))}
        {/* laurel arcs */}
        <path
          d="M34 104c-8-9-12-21-12-34 0-5 .7-10 2-15"
          strokeWidth="0.55"
          opacity="0.5"
        />
        <path
          d="M106 104c8-9 12-21 12-34 0-5-.7-10-2-15"
          strokeWidth="0.55"
          opacity="0.5"
        />
        <path d="M70 26v14" strokeWidth="0.5" opacity="0.55" />
        <path d="M70 100v14" strokeWidth="0.5" opacity="0.55" />
      </svg>
      <span className="font-signature text-[2.1em] leading-none tracking-[0.04em] text-ivory">
        {initials}
      </span>
      {label ? (
        <span className="meta absolute bottom-[-1.9em] left-1/2 -translate-x-1/2 whitespace-nowrap text-[0.58em] tracking-[0.34em]">
          {label}
        </span>
      ) : null}
    </div>
  );
}
