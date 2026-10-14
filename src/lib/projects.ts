export type ProjectGroup = "films" | "ai" | "design" | "photo" | "experiments";

export interface Project {
  num: string;
  slug: string;
  title: string;
  category: string;
  year: string;
  /** Which universe this work belongs to — drives the showcase filters. */
  group: ProjectGroup;
  /** Placeholder description — replace with real copy. */
  description: string;
  image: string;
  /** Placeholder detail lines for the modal — replace with real copy. */
  details: string[];
}

export const PROJECT_GROUPS: { id: ProjectGroup; label: string }[] = [
  { id: "films", label: "Films" },
  { id: "ai", label: "AI Projects" },
  { id: "design", label: "Graphic Designs" },
  { id: "photo", label: "Photography" },
  { id: "experiments", label: "Experiments" },
];

/**
 * SAMPLE CONTENT — every title, description and detail below is a placeholder
 * to be replaced with Rishi's real projects, artwork and links.
 */
export const projects: Project[] = [
  {
    num: "01",
    slug: "cinematic-visuals",
    title: "Cinematic Visuals",
    category: "Motion / Grade",
    year: "20XX",
    group: "films",
    description:
      "Sample copy — a short line about the mood, palette and frame language of this piece goes here.",
    image:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=70",
    details: [
      "Placeholder — role, tools and format.",
      "Placeholder — one line on the idea behind the work.",
    ],
  },
  {
    num: "02",
    slug: "posters-and-campaigns",
    title: "Posters & Campaigns",
    category: "Print / Art Direction",
    year: "20XX",
    group: "design",
    description:
      "Sample copy — how the poster system adapts across formats and placements goes here.",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1200&q=70",
    details: [
      "Placeholder — deliverables and formats.",
      "Placeholder — one line on the typographic approach.",
    ],
  },
  {
    num: "03",
    slug: "brand-identity",
    title: "Brand Identity",
    category: "Identity / Systems",
    year: "20XX",
    group: "design",
    description:
      "Sample copy — a note on the mark, the type pairing and how the system stays consistent goes here.",
    image:
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=1200&q=70",
    details: [
      "Placeholder — scope of the identity work.",
      "Placeholder — one line on usage and rules.",
    ],
  },
  {
    num: "04",
    slug: "social-media-design",
    title: "Social Media Design",
    category: "Digital / Content",
    year: "20XX",
    group: "design",
    description:
      "Sample copy — how the feed holds together as one visual story goes here.",
    image:
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=1200&q=70",
    details: [
      "Placeholder — channels and cadence.",
      "Placeholder — one line on the template system.",
    ],
  },
  {
    num: "05",
    slug: "film-and-photography",
    title: "Film & Photography",
    category: "Direction / Still",
    year: "20XX",
    group: "photo",
    description:
      "Sample copy — a line on the lens, the light and the cut of this story goes here.",
    image:
      "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=1200&q=70",
    details: [
      "Placeholder — format, duration, credits.",
      "Placeholder — one line on the visual concept.",
    ],
  },
  {
    num: "06",
    slug: "experimental-design",
    title: "Experimental Design",
    category: "R&D / Type",
    year: "20XX",
    group: "experiments",
    description:
      "Sample copy — the rule that was broken on purpose, and what it revealed, goes here.",
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=70",
    details: [
      "Placeholder — the experiment and the tooling.",
      "Placeholder — one line on what was learned.",
    ],
  },
  {
    num: "07",
    slug: "ai-experiments",
    title: "AI Experiments",
    category: "Machine Learning / Visual",
    year: "20XX",
    group: "ai",
    description:
      "Sample copy — how this experiment combines machine learning with imagery, type or film goes here.",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=70",
    details: [
      "Placeholder — model, pipeline and tooling.",
      "Placeholder — one line on what the experiment set out to prove.",
    ],
  },
];
