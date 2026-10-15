"use client";

import { useEffect, useState } from "react";

export function ApiExplorerFilter() {
  const [query, setQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    const rows = Array.from(document.querySelectorAll(".prose table tbody tr"));
    const normalizedQuery = query.trim().toLowerCase();
    let count = 0;
    for (const row of rows) {
      const visible = !normalizedQuery || row.textContent?.toLowerCase().includes(normalizedQuery) === true;
      (row as HTMLElement).hidden = !visible;
      if (visible) count += 1;
    }
    setVisibleCount(count);
  }, [query]);

  return <div className="api-filter">
    <label htmlFor="api-route-search">Filter routes</label>
    <input id="api-route-search" type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search paths, methods, or resources" />
    <p aria-live="polite">Showing {visibleCount} route {visibleCount === 1 ? "entry" : "entries"}.</p>
  </div>;
}
