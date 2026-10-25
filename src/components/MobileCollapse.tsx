import type { ReactNode } from "react";

/**
 * Progressive disclosure for small screens: the content renders in a compact
 * expandable <details> on mobile and stays directly visible from lg up. Nothing
 * is removed — the long form is simply one tap away, so the page scrolls faster
 * without losing any information.
 */
export function MobileCollapse({
  summary,
  children,
}: {
  summary: string;
  children: ReactNode;
}) {
  return (
    <>
      <details className="group my-4 lg:hidden">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 border-b border-line/40 pb-3 font-mono text-[10px] uppercase tracking-[0.24em] text-ash">
          {summary}
          <span
            aria-hidden="true"
            className="shrink-0 text-crimson transition-transform duration-300 group-open:rotate-45"
          >
            +
          </span>
        </summary>
        <div>{children}</div>
      </details>
      <div className="hidden lg:block">{children}</div>
    </>
  );
}
