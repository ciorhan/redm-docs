export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  content: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "launching-a-clean-redm-core",
    title: "Launching A Clean RedM Core",
    date: "2026-02-20",
    author: "Marshal Dev Team",
    excerpt: "How we structured resources, naming, and deployment conventions before opening the server to players.",
    content: [
      "Starting with a clean server core saves weeks of rework. We split resources by domain: identity, economy, jobs, and social systems.",
      "Every resource uses a strict naming convention and shared utility exports. That prevents duplicate logic and keeps event contracts stable.",
      "Our deployment checklist includes startup order verification, missing dependency checks, and smoke tests against core gameplay loops.",
    ],
  },
  {
    slug: "improving-script-event-safety",
    title: "Improving Script Event Safety",
    date: "2026-02-17",
    author: "Marshal Dev Team",
    excerpt: "Defensive patterns for network events, payload validation, and cleaner failure handling in multiplayer scripts.",
    content: [
      "Network events are a frequent source of runtime instability. We added payload validation to all external event entry points.",
      "Server handlers now reject malformed data early and log structured diagnostics with resource name, player id, and event signature.",
      "This reduced silent failures and made bug reproduction easier for both developers and moderators.",
    ],
  },
  {
    slug: "ui-tone-inspired-by-rdo",
    title: "UI Tone Inspired By Red Dead Online",
    date: "2026-02-12",
    author: "Design Desk",
    excerpt: "Applying a high-contrast black, white, red, and warm orange palette without losing readability.",
    content: [
      "We anchored the visual system around deep black surfaces, bold red actions, and warm orange accents for utility cues.",
      "Interactive states were tuned to stay sharp and readable, especially on darker backgrounds where low-contrast hovers can disappear.",
      "Typography keeps a western-inspired display style for headings while body text remains practical for long-form docs.",
    ],
  },
  {
    slug: "resource-release-checklist-v1",
    title: "Resource Release Checklist v1",
    date: "2026-02-08",
    author: "Ops Team",
    excerpt: "A lightweight release checklist for scripts and map resources before going live in production.",
    content: [
      "Each release now includes linting, route checks, startup profiling, and dependency lock validation.",
      "We also run a restart resilience test to make sure reconnect behavior and state restoration work as expected.",
      "The checklist is short on purpose: clear enough to run every release, strict enough to prevent obvious regressions.",
    ],
  },
];

