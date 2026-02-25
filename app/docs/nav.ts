export type DocsNavItem = { label: string; href: string };
export type DocsNavSection = { id: string; label: string; items: DocsNavItem[] };

export const docsNavSections: DocsNavSection[] = [
  {
    id: "getting-started",
    label: "Getting Started",
    items: [
      { label: "Overview", href: "/docs" },
      { label: "Installation", href: "/docs/getting-started" },
    ],
  },
  {
    id: "scripting",
    label: "Scripting",
    items: [
      { label: "Script Basics", href: "/docs/scripting" },
      { label: "Events", href: "/docs/scripting/events" },
      { label: "Commands", href: "/docs/scripting/commands" },
    ],
  },
  {
    id: "resources",
    label: "Operations",
    items: [
      { label: "Resource Guide", href: "/docs/resources" },
      { label: "Folder Structure", href: "/docs/resources/structure" },
      { label: "Deploy Checklist", href: "/docs/resources/deploy" },
    ],
  },
];

