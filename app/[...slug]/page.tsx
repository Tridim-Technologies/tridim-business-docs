import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ApiExplorerFilter } from "../../components/ApiExplorerFilter";
import { documents, getDocument } from "../../lib/docs";

export function generateStaticParams() {
  return documents.map(({ slug }) => ({ slug: slug.split("/") }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string[] }> }): Promise<Metadata> {
  const document = await getDocument((await params).slug.join("/"));
  return document ? { title: document.title, description: document.description } : {};
}

export default async function DocumentPage({ params }: { params: Promise<{ slug: string[] }> }) {
  const slug = (await params).slug.join("/");
  const document = await getDocument(slug);
  if (!document) notFound();
  return <main className="shell doc-layout">
    <aside className="doc-sidebar"><Link href="/">← All documentation</Link><nav aria-label="Documentation pages">
      {documents.map((item) => <Link className={item.slug === slug ? "active" : ""} key={item.slug} href={`/${item.slug}/`}>{item.title}</Link>)}
    </nav></aside>
    <div>
      {slug === "api-explorer" && <ApiExplorerFilter />}
      <article className="prose" dangerouslySetInnerHTML={{ __html: document.html }} />
    </div>
  </main>;
}
