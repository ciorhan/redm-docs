import Link from "next/link";
import { blogPosts } from "./posts";

export default function BlogPage() {
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
          <p className="eyebrow">Blog</p>
          <h1>Frontier Dispatch</h1>
          <p>Latest updates, development stories, and technical notes for your RedM server ecosystem.</p>
          <div className="hero-actions">
            <Link href="/docs" className="btn-red">
              Read Docs
            </Link>
            <Link href="/contact" className="btn-outline">
              Contact Team
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

      <section className="blog-list" aria-label="Blog articles">
        {blogPosts.map((post) => (
          <article key={post.slug} className="blog-card">
            <p className="blog-meta">
              {post.date} - {post.author}
            </p>
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>
            <Link href={`/blog/${post.slug}`} className="blog-link">
              Read Article
            </Link>
          </article>
        ))}
      </section>
    </main>
  );
}
