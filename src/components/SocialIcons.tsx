import { useState } from "react";
import { useNavigate } from "react-router";
import { Github, Linkedin, X, Instagram } from "lucide-react";

/**
 * SocialIcons — four square, outlined brand buttons.
 *
 * Design tokens mirror the site's editorial headroom: small square buttons,
 * a subtle dark chip, a charcoal border, muted light-gray icons, and a crimson
 * hover lift. Dimensions, gaps and padding stay aligned with the header's
 * 72px/96px tight editorial rhythm.
 */
export function SocialIcons() {
  const navigate = useNavigate();

  const href = (path: string) => {
    if (path.startsWith("http") || path.startsWith("//")) return path;
    return `/${path.startsWith("/") ? path.slice(1) : path}`;
  };

  return (
    <div className="flex items-center gap-3">
      {/* GitHub */}
      <a
        href={href(LINKS.github)}
        target="_blank"
        rel="noreferrer noopener"
        aria-label="Rishi Naskar — GitHub"
        className="flex size-9 items-center justify-center rounded-md border border-line/90 bg-[#0e0c0e] transition-colors duration-300 hover:border-crimson hover:bg-[#1a0f13] hover:text-ivory focus-visible:border-crimson focus-visible:ring-2 focus-visible:ring-crimson/40"
      >
        <Github className="size-4" aria-hidden="true" />
      </a>

      {/* LinkedIn */}
      <a
        href={href(LINKS.linkedin)}
        target="_blank"
        rel="noreferrer noopener"
        aria-label="Rishi Naskar — LinkedIn"
        className="flex size-9 items-center justify-center rounded-md border border-line/90 bg-[#0e0c0e] transition-colors duration-300 hover:border-crimson hover:bg-[#1a0f13] hover:text-ivory focus-visible:border-crimson focus-visible:ring-2 focus-visible:ring-crimson/40"
      >
        <Linkedin className="size-4" aria-hidden="true" />
      </a>

      {/* X */}
      <a
        href={href(LINKS.twitter)}
        target="_blank"
        rel="noreferrer noopener"
        aria-label="Rishi Naskar — X"
        className="flex size-9 items-center justify-center rounded-md border border-line/90 bg-[#0e0c0e] transition-colors duration-300 hover:border-crimson hover:bg-[#1a0f13] hover:text-ivory focus-visible:border-crimson focus-visible:ring-2 focus-visible:ring-crimson/40"
      >
        <X className="size-4" aria-hidden="true" />
      </a>

      {/* Instagram */}
      <a
        href={href(LINKS.instagram)}
        target="_blank"
        rel="noreferrer noopener"
        aria-label="Rishi Naskar — Instagram"
        className="flex size-9 items-center justify-center rounded-md border border-line/90 bg-[#0e0c0e] transition-colors duration-300 hover:border-crimson hover:bg-[#1a0f13] hover:text-ivory focus-visible:border-crimson focus-visible:ring-2 focus-visible:ring-crimson/40"
      >
        <Instagram className="size-4" aria-hidden="true" />
      </a>
    </div>
  );
}

export default SocialIcons;
