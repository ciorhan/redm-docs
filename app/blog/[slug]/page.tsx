import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "../../components/site-header";
import { blogPosts } from "../posts";

type BlogArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return { title: "Article Not Found | REDM - The Developer's Outlaw Journal" };
  }

  return {
    title: `${post.title} | REDM - The Developer's Outlaw Journal`,
    description: post.excerpt,
  };
}

export default async function BlogArticlePage({ params }: BlogArticlePageProps) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="landing">
      <SiteHeader />

      <article className="blog-article">
        <p className="eyebrow">Blog Article</p>
        <h1>{post.title}</h1>
        <p className="blog-meta">
          {post.date} - {post.author}
        </p>

        <div className="blog-prose">
          {post.content.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <Link href="/blog" className="blog-link">
          Back to Blog
        </Link>
      </article>
    </main>
  );
}
