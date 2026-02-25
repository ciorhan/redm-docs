import Link from "next/link";

const siteTitle = "REDM - The Developer's Outlaw Journal";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/docs", label: "Documentation" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  return (
    <header className="landing-header">
      <Link href="/" className="landing-brand">
        {siteTitle}
      </Link>
      <nav className="landing-nav" aria-label="Main menu">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

