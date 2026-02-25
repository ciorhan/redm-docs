import Link from "next/link";
import HeroArt from "../components/hero-art";
import SiteHeader from "../components/site-header";

export default function ContactPage() {
  return (
    <main className="landing">
      <SiteHeader />

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
        <HeroArt />
      </section>
    </main>
  );
}
