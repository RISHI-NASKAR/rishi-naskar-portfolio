import { Github, Linkedin, X, Instagram } from "lucide-react";
import { LINKS } from "@/lib/links";

function resolveHref(path: string): string {
  if (path.startsWith("http") || path.startsWith("//")) return path;
  return `/${path.startsWith("/") ? path.slice(1) : path}`;
}

export default function SocialIcons() {
  return (
    <div className="flex items-center gap-3">
      <a
        href={resolveHref(LINKS.github)}
        target="_blank"
        rel="noreferrer noopener"
        aria-label="Rishi Naskar — GitHub"
        className="flex size-9 items-center justify-center rounded-md border border-line/90 bg-[#0e0c0e] transition-colors duration-300 hover:border-crimson hover:bg-[#1a0f13] hover:text-ivory focus-visible:border-crimson focus-visible:ring-2 focus-visible:ring-crimson/40"
      >
        <Github className="size-4" aria-hidden="true" />
      </a>
      <a
        href={resolveHref(LINKS.linkedin)}
        target="_blank"
        rel="noreferrer noopener"
        aria-label="Rishi Naskar — LinkedIn"
        className="flex size-9 items-center justify-center rounded-md border border-line/90 bg-[#0e0c0e] transition-colors duration-300 hover:border-crimson hover:bg-[#1a0f13] hover:text-ivory focus-visible:border-crimson focus-visible:ring-2 focus-visible:ring-crimson/40"
      >
        <Linkedin className="size-4" aria-hidden="true" />
      </a>
      <a
        href={resolveHref(LINKS.twitter)}
        target="_blank"
        rel="noreferrer noopener"
        aria-label="Rishi Naskar — X"
        className="flex size-9 items-center justify-center rounded-md border border-line/90 bg-[#0e0c0e] transition-colors duration-300 hover:border-crimson hover:bg-[#1a0f13] hover:text-ivory focus-visible:border-crimson focus-visible:ring-2 focus-visible:ring-crimson/40"
      >
        <X className="size-4" aria-hidden="true" />
      </a>
      <a
        href={resolveHref(LINKS.instagram)}
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
