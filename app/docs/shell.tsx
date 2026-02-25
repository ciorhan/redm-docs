"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";
import ThemeToggle from "./theme-toggle";

type NavItem = { label: string; href: string };
type NavSection = { id: string; label: string; items: NavItem[] };

const navSections: NavSection[] = [
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
    label: "Resources",
    items: [
      { label: "Resource Guide", href: "/docs/resources" },
      { label: "Folder Structure", href: "/docs/resources/structure" },
      { label: "Deploy Checklist", href: "/docs/resources/deploy" },
    ],
  },
];

function isItemActive(pathname: string, href: string): boolean {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function DocsShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    "getting-started": true,
    scripting: true,
    resources: true,
  });

  const sectionsWithActiveState = useMemo(
    () =>
      navSections.map((section) => ({
        ...section,
        isActive: section.items.some((item) => isItemActive(pathname, item.href)),
      })),
    [pathname],
  );

  const toggleSection = (id: string) => {
    setOpenSections((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="docs-layout">
      <header className="docs-mobile-header">
        <button
          type="button"
          className="mobile-menu-btn"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle docs navigation menu"
          aria-expanded={mobileOpen}
        >
          Menu
        </button>
        <Link href="/docs" className="docs-mobile-title">
          RedM Docs
        </Link>
        <ThemeToggle />
      </header>

      <aside className={`docs-sidebar ${mobileOpen ? "open" : ""}`}>
        <div className="docs-brand">
          <Link href="/docs" className="brand-link">
            RedM Documentation
          </Link>
          <p className="brand-subtitle">Reference and guides for server development.</p>
        </div>

        <nav className="docs-accordion" aria-label="Documentation navigation">
          {sectionsWithActiveState.map((section) => (
            <section key={section.id} className="accordion-section">
              <button
                type="button"
                className={`accordion-trigger ${section.isActive ? "active" : ""}`}
                onClick={() => toggleSection(section.id)}
                aria-expanded={openSections[section.id]}
              >
                {section.label}
              </button>
              {openSections[section.id] ? (
                <ul className="submenu-list">
                  {section.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className={isItemActive(pathname, item.href) ? "submenu-link active" : "submenu-link"}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
        </nav>

        <div className="docs-sidebar-footer">
          <ThemeToggle />
          <Link href="/" className="back-home-link">
            Back to Home
          </Link>
        </div>
      </aside>

      {mobileOpen ? <button className="docs-overlay" onClick={() => setMobileOpen(false)} aria-label="Close menu" /> : null}

      <main className="docs-main">
        <article className="docs-content">{children}</article>
      </main>
    </div>
  );
}
