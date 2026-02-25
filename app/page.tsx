import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1>Welcome to the RedM Documentation Site</h1>
      <p>Documentation for developing RedM scripts and server resources.</p>
      <Link href="/docs">Go to documentation</Link>
    </main>
  );
}
