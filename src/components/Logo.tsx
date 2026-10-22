import { useNavigate } from "react-router";

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
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}) {
  const navigate = useNavigate();

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) onClick(event);
    if (window.location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/", { replace: true });
    }
  };

  return (
    <a
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
