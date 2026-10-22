/**
 * The work, grouped by the three disciplines.
 *
 * Only what Rishi has actually described is listed here. There are no years,
 * images, clients, metrics or links that have not been confirmed — a project
 * without a `link` simply renders without one, and a project without `stack`
 * renders without a tool list. Add real values and the detail panel picks them
 * up automatically.
 */

export type DisciplineId = "ai" | "cinematic" | "creative";

export interface Discipline {
  id: DisciplineId;
  /** Roman numeral used in the editorial index. */
  numeral: string;
  label: string;
  /** Short line under the discipline heading. */
  tagline: string;
  blurb: string;
}

export interface Project {
  title: string;
  category: string;
  discipline: DisciplineId;
  description: string;
  /** Lines describing the scope of the work — keep to what is known. */
  details: string[];
  /** Verified tools only. Hidden when empty. */
  stack?: string[];
  /** Real destination (repository, film, case study). Hidden when absent. */
  link?: string;
  linkLabel?: string;
}

export const DISCIPLINES: Discipline[] = [
  {
    id: "ai",
    numeral: "I",
    label: "Artificial Intelligence",
    tagline: "Intelligence as material",
    blurb:
      "Machine learning experiments and intelligent systems — the technical work underneath the images, treated as a creative instrument.",
  },
  {
    id: "cinematic",
    numeral: "II",
    label: "Cinematography & Film",
    tagline: "Stories in motion",
    blurb:
      "Direction, camera and the cut: films, photography and the frames that carry a mood long after the scene has ended.",
  },
  {
    id: "creative",
    numeral: "III",
    label: "Graphic Design",
    tagline: "Identity, type, composition",
    blurb:
      "Poster systems, visual identities and editorial design — work that holds its shape from a printed wall down to a phone screen.",
  },
];

export const projects: Project[] = [
  {
    title: "AI Experiments",
    category: "Machine Learning / Visual",
    discipline: "ai",
    description:
      "Machine learning pushed into imagery, type and film — models used as a creative instrument rather than a novelty.",
    details: [
      "Model, pipeline and tooling for each experiment.",
      "What the experiment set out to test, and what it revealed.",
    ],
    stack: ["Machine learning", "Generative tooling", "Computer vision"],
  },
  {
    title: "Cinematic Visuals",
    category: "Motion / Grade",
    discipline: "cinematic",
    description:
      "Frame language, colour and mood — building images that feel like stills pulled from a film.",
    details: [
      "Direction, camera and grade.",
      "References, mood and the final look.",
    ],
  },
  {
    title: "Film & Photography",
    category: "Direction / Still",
    discipline: "cinematic",
    description:
      "Light, lens and cut — stories told in motion, and the frames that stay after.",
    details: [
      "Format, duration and credits.",
      "The visual concept behind the frame.",
    ],
  },
  {
    title: "Posters & Campaigns",
    category: "Print / Art Direction",
    discipline: "creative",
    description:
      "Poster systems that hold their shape from a printed wall down to a phone screen.",
    details: [
      "Print, art direction and adaptation.",
      "Type, hierarchy and the campaign grid.",
    ],
  },
  {
    title: "Brand Identity",
    category: "Identity / Systems",
    discipline: "creative",
    description:
      "Marks, type pairings and rules that keep a brand recognisable wherever it lands.",
    details: [
      "Scope of the identity system.",
      "Usage, colour and typography rules.",
    ],
  },
  {
    title: "Social Media Design",
    category: "Digital / Content",
    discipline: "creative",
    description:
      "Feeds designed as one continuous visual story instead of a pile of posts.",
    details: [
      "Channels, cadence and formats.",
      "A template system that scales without flattening.",
    ],
  },
  {
    title: "Experimental Design",
    category: "R&D / Type",
    discipline: "creative",
    description:
      "Rules broken on purpose to find out what the medium does next.",
    details: [
      "The experiment and its tooling.",
      "What the process revealed.",
    ],
  },
];

export function projectsByDiscipline(id: DisciplineId): Project[] {
  return projects.filter((project) => project.discipline === id);
}

/** Display index (01, 02, …) for a project inside the full work list. */
export function projectNumber(project: Project): string {
  const index = projects.indexOf(project);
  return String(index + 1).padStart(2, "0");
}
