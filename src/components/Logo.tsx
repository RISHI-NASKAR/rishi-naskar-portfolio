import { useEffect, useRef } from "react";

/**
 * Logo — the typographic "Rishi Naskar" wordmark in the header.
 *
 * It is a link: homepage (`/`) on any page, smooth top scroll on the home
 * page. It never points at "#".
 */
export function Logo({
  className,
  onClick,
}: {
  className?: string;
  onClick?: () => void;
}) {
  const anchorRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const a = anchorRef.current;
    if (!a) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        a.click();
      }
    };
    a.addEventListener("keydown", onKeyDown);
    return () => a.removeEventListener("keydown", onKeyDown);
  }, []);

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) onClick(event);
    if (window.location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.location.href = window.location.href.replace(/\?.*$/, "/").replace(/#.*/, "/");
      window.location.search = "";
      window.location.hash = "";
    }
  };

  return (
    <a
      ref={anchorRef}
      href="/"
      onClick={handleClick}
      className={className}
      aria-label="Rishi Naskar — back to homepage"
    >
      <span className="font-signature block leading-none tracking-[0.14em] text-ivory">
        Rishi Naskar
      </span>
      <span className="meta mt-1.5 block text-[10px] tracking-[0.28em] text-ash">
        AI · Cinema · Design
      </span>
    </a>
  );
}

export default Logo;
