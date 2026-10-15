import type { Metadata } from "next";
import Link from "next/link";
import { SearchBox } from "../components/SearchBox";
import { getSearchDocuments } from "../lib/docs";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Tridim Business Docs", template: "%s · Tridim Business Docs" },
  description: "Public product, architecture, and implementation documentation for Tridim Business.",
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const searchDocuments = await getSearchDocuments();
  return <html lang="en"><body>
    <header className="site-header">
      <Link className="brand" href="/">Tridim Business <span>Docs</span></Link>
      <SearchBox documents={searchDocuments} />
      <nav className="header-links" aria-label="Primary navigation">
        <Link href="/roadmap/">Roadmap</Link>
        <Link href="/architecture/">Architecture map</Link>
        <Link href="/api-explorer/">API explorer</Link>
        <a href="https://github.com/Tridim-Technologies/tridim-business-docs">GitHub</a>
      </nav>
    </header>
    {children}
    <footer className="site-footer"><span>Tridim Business public documentation</span><span>Canonical source: Markdown in <a href="https://github.com/Tridim-Technologies/tridim-business-docs">GitHub</a></span></footer>
  </body></html>;
}
