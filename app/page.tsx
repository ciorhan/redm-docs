import Link from "next/link";
import HeroArt from "./components/hero-art";
import SiteHeader from "./components/site-header";

export default function Home() {
  return (
    <main className="landing" id="home">
      <SiteHeader />
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">RedM Server Development</p>
          <h1>Build Your Own Frontier Story</h1>
          <p>
            Clean guides, scripting references, and deployment practices for
            RedM communities. Designed with the same bold menu spirit as Red
            Dead Online.
          </p>
          <div className="hero-actions">
            <Link href="/docs" className="btn-red">
              Start Documentation
            </Link>
            <Link href="/contact" className="btn-outline">
              Join the Crew
            </Link>
          </div>
        </div>

        <HeroArt />
      </section>

      <section className="frontier-grid" aria-label="Platform highlights">
        <article className="frontier-card">
          <h2>Home</h2>
          <p>
            Landing page for announcements, server identity, and fast
            onboarding.
          </p>
        </article>
        <article className="frontier-card">
          <h2>Documentation</h2>
          <p>
            Practical guides for commands, events, resources, and production
            setup.
          </p>
        </article>
        <article className="frontier-card">
          <h2>Blog</h2>
          <p>
            Release notes, scripting insights, and roleplay ecosystem updates.
          </p>
        </article>
        <article className="frontier-card">
          <h2>Contact</h2>
          <p>
            Reach the team for partnerships, support, and custom implementation
            work.
          </p>
        </article>
      </section>
    </main>
  );
}
