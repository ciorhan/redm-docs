import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="landing">
      <header className="landing-header">
        <Link href="/" className="landing-brand">
          REDM - The Developer's Outlaw Journal
        </Link>
        <nav className="landing-nav" aria-label="Main menu">
          <Link href="/">Home</Link>
          <Link href="/docs">Documentation</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Contact</p>
          <h1>Ride With Us</h1>
          <p>Share your server goals, feature requests, or partnership ideas. We will get back with a clear plan.</p>
          <div className="hero-actions">
            <Link href="mailto:contact@scarlet-mesa.example" className="btn-red">
              contact@scarlet-mesa.example
            </Link>
            <Link href="/docs" className="btn-outline">
              View Setup Guides
            </Link>
          </div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="sun" />
          <div className="mesa mesa-back" />
          <div className="mesa mesa-mid" />
          <div className="mesa mesa-front" />
          <div className="horizon" />
        </div>
      </section>
    </main>
  );
}
