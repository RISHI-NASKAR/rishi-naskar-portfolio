export type ProjectGroup = "films" | "ai" | "design" | "photo" | "experiments";

/**
 * The three universes the works phase is built from. Every project belongs to
 * exactly one, and the section's copy, accent colour and the 3D environment all
 * follow the selected universe.
 */
export type ProjectUniverse = "ai" | "cinematic" | "creative";

export interface Project {
  num: string;
  slug: string;
  title: string;
  category: string;
  year: string;
  /** Which universe this work belongs to — drives the showcase chapters. */
  universe: ProjectUniverse;
  /** Finer practice tag, kept from the original gallery filters. */
  group: ProjectGroup;
  /** Placeholder description — replace with real copy. */
  description: string;
  image: string;
  /** Placeholder detail lines for the modal — replace with real copy. */
  details: string[];
  /** Real tooling/technologies, once known. Rendered only when present. */
  stack?: string[];
  /** A real destination for the project (case study, film, repo). Optional. */
  link?: string;
  linkLabel?: string;
}

export interface Universe {
  id: ProjectUniverse;
  index: string;
  label: string;
  /** Short line shown as the chapter's standfirst. */
  blurb: string;
  /** Accent colour used by the chapter, the cards and the scene. */
  accent: string;
  /** Scene palette: the wires re-colour toward these. */
  wire: [string, string];
}

export const UNIVERSES: Universe[] = [
  {
    id: "ai",
    index: "01",
    label: "AI universe",
    blurb:
      "AI and machine learning experiments, intelligent systems and the technical work underneath them.",
    accent: "#5aa9ff",
    wire: ["#2f6bff", "#7fb6ff"],
  },
  {
    id: "cinematic",
    index: "02",
    label: "Cinematic universe",
    blurb:
      "Filmmaking, directing, cinematography, photography and storytelling through the moving image.",
    accent: "#ff9a4d",
    wire: ["#ff7a3d", "#ffc48a"],
  },
  {
    id: "creative",
    index: "03",
    label: "Creative universe",
    blurb:
      "Graphic design, visual identity, posters, social systems and creative experiments.",
    accent: "#a96bff",
    wire: ["#7a4bff", "#c39bff"],
  },
];

export const PROJECT_GROUPS: { id: ProjectGroup; label: string }[] = [
  { id: "films", label: "Films" },
  { id: "ai", label: "AI Projects" },
  { id: "design", label: "Graphic Designs" },
  { id: "photo", label: "Photography" },
  { id: "experiments", label: "Experiments" },
];

/**
 * True while a project still carries the starter year ("20XX"). Such a year is
 * never displayed — an unfinished marker should not ship to visitors.
 */
export function isPlaceholderYear(year: string) {
  return /^20[xy?]{2}$/i.test(year.trim());
}

/**
 * STARTER CONTENT — titles, years and images below are starters to be replaced
 * with Rishi's real projects, artwork and links. Add `stack`, `link` and
 * `linkLabel` to a project and the detail panel shows them automatically;
 * nothing on the site invents tools, credits, metrics or links.
 */
export const projects: Project[] = [
  {
    num: "01",
    slug: "cinematic-visuals",
    title: "Cinematic Visuals",
    category: "Motion / Grade",
    year: "20XX",
    universe: "cinematic",
    group: "films",
    description:
      "Frame language, colour and mood — building images that feel like stills from a film.",
    image:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=70",
    details: ["Direction, camera and grade.", "References, mood and the final look."],
  },
  {
    num: "02",
    slug: "posters-and-campaigns",
    title: "Posters & Campaigns",
    category: "Print / Art Direction",
    year: "20XX",
    universe: "creative",
    group: "design",
    description:
      "Poster systems that hold their shape from a printed wall down to a phone screen.",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1200&q=70",
    details: ["Print, art direction and adaptation.", "Type, hierarchy and the campaign grid."],
  },
  {
    num: "03",
    slug: "brand-identity",
    title: "Brand Identity",
    category: "Identity / Systems",
    year: "20XX",
    universe: "creative",
    group: "design",
    description:
      "Marks, type pairings and rules that keep a brand recognisable wherever it lands.",
    image:
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=1200&q=70",
    details: ["Scope of the identity system.", "Usage, colour and typography rules."],
  },
  {
    num: "04",
    slug: "social-media-design",
    title: "Social Media Design",
    category: "Digital / Content",
    year: "20XX",
    universe: "creative",
    group: "design",
    description:
      "Feeds designed as one continuous visual story instead of a pile of posts.",
    image:
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=1200&q=70",
    details: ["Channels, cadence and formats.", "A template system that scales without flattening."],
  },
  {
    num: "05",
    slug: "film-and-photography",
    title: "Film & Photography",
    category: "Direction / Still",
    year: "20XX",
    universe: "cinematic",
    group: "photo",
    description:
      "Light, lens and cut — stories told in motion, and the frames that stay after.",
    image:
      "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=1200&q=70",
    details: ["Format, duration and credits.", "The visual concept behind the frame."],
  },
  {
    num: "06",
    slug: "experimental-design",
    title: "Experimental Design",
    category: "R&D / Type",
    year: "20XX",
    universe: "creative",
    group: "experiments",
    description:
      "Rules broken on purpose to find out what the medium does next.",
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=70",
    details: ["The experiment and its tooling.", "What the process revealed."],
  },
  {
    num: "07",
    slug: "ai-experiments",
    title: "AI Experiments",
    category: "Machine Learning / Visual",
    year: "20XX",
    universe: "ai",
    group: "ai",
    description:
      "Machine learning pushed into imagery, type and film — models used as a creative instrument.",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=70",
    details: ["Model, pipeline and tooling.", "What the experiment set out to test."],
  },
];
