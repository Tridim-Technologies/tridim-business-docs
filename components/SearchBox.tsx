"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type SearchDocument = { slug: string; title: string; description: string; text: string };

export function SearchBox({ documents }: { documents: SearchDocument[] }) {
  const [query, setQuery] = useState("");
  const matches = useMemo(() => {
    const terms = query.toLowerCase().trim().split(/\s+/).filter(Boolean);
    if (!terms.length) return [];
    return documents.filter((document) => terms.every((term) => `${document.title} ${document.description} ${document.text}`.toLowerCase().includes(term))).slice(0, 6);
  }, [documents, query]);

  return <div className="search">
    <label className="visually-hidden" htmlFor="docs-search">Search documentation</label>
    <input id="docs-search" type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search the docs" aria-expanded={Boolean(query)} aria-controls="docs-search-results" />
    {query && <div className="search-results" id="docs-search-results" role="listbox">
      {matches.length ? matches.map((item) => <Link key={item.slug} href={`/${item.slug}/`} role="option" onClick={() => setQuery("")}>
        <strong>{item.title}</strong><span>{item.description}</span>
      </Link>) : <p>No matching pages.</p>}
    </div>}
  </div>;
}
