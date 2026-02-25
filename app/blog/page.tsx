import Link from "next/link";
import HeroArt from "../components/hero-art";
import SiteHeader from "../components/site-header";
import { blogPosts } from "./posts";

export default function BlogPage() {
  return (
    <main className="landing">
      <SiteHeader />

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
        <HeroArt />
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
