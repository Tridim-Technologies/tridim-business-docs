import Link from "next/link";
import { documents } from "../lib/doc-index";
import { getHomeDocument } from "../lib/docs";

export default async function Home() {
  const home = await getHomeDocument();
  const metadata = home.metadata;
  const [intro, rest = ""] = home.html.split("<h2>What is in the alpha?</h2>");
  return <main className="shell">
    <section className="hero">
      <div className="hero-copy">
        <p className="eyebrow">{String(metadata.eyebrow)}</p>
        <h1>{String(metadata.heroTitle)}</h1>
        <p className="lede">{String(metadata.heroDescription)}</p>
        <div className="hero-actions">
          <Link className="button" href={String(metadata.primaryHref)}>{String(metadata.primaryCta)}</Link>
          <Link className="text-link" href={String(metadata.secondaryHref)}>{String(metadata.secondaryCta)} →</Link>
        </div>
      </div>
      <aside className="hero-panel">
        <span className="status-dot">● {String(metadata.status)}</span>
        <h2>{String(metadata.statusTitle)}</h2>
        <p>{String(metadata.statusDescription)}</p>
        <Link href="/roadmap/">See current priorities →</Link>
      </aside>
    </section>
    <section className="signal-grid" aria-label="Platform summary">
      <div><strong>Django + React</strong><span>Python API and TypeScript web app</span></div>
      <div><strong>PostgreSQL</strong><span>Relational data foundation</span></div>
      <div><strong>Organization roles</strong><span>Tenant-scoped business access</span></div>
      <div><strong>GitHub Actions</strong><span>Repeatable docs validation and publishing</span></div>
    </section>
    <section className="home-content">
      <article className="prose" dangerouslySetInnerHTML={{ __html: intro }} />
      <section className="docs-grid" aria-label="Documentation sections">
        {documents.map((document) => <Link className="doc-card" key={document.slug} href={`/${document.slug}/`}>
          <h2>{document.title}</h2><p>{document.description}</p><span>Read guide →</span>
        </Link>)}
      </section>
      <article className="prose" dangerouslySetInnerHTML={{ __html: `<h2>What is in the alpha?</h2>${rest}` }} />
    </section>
  </main>;
}
