import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkHtml from "remark-html";
import { documents, type DocumentInfo } from "./doc-index";

export { documents } from "./doc-index";

const contentRoot = path.join(process.cwd(), "site-docs");
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

type ParsedDocument = DocumentInfo & {
  html: string;
  text: string;
  metadata: Record<string, unknown>;
};

function routeForMarkdownLink(sourceSlug: string, href: string) {
  if (/^(?:[a-z]+:|\/\/|mailto:|#)/i.test(href)) return href;
  const [relativePath, fragment] = href.split("#", 2);
  const targetPath = path.posix.normalize(path.posix.join(path.posix.dirname(sourceSlug), relativePath));
  const targetSlug = targetPath.replace(/\.md$/i, "").replace(/\/index$/i, "");
  const route = targetSlug ? `/${targetSlug}/` : "/";
  return `${basePath}${route}${fragment ? `#${fragment}` : ""}`;
}

function rewriteMarkdownLinks(html: string, sourceSlug: string) {
  return html.replace(/href="([^"]+\.md(?:#[^"]*)?)"/gi, (_match, href: string) => {
    return `href="${routeForMarkdownLink(sourceSlug, href)}"`;
  }).replace(/src="assets\//g, `src="${basePath}/assets/`);
}

export async function getDocument(slug: string): Promise<ParsedDocument | null> {
  const metadata = documents.find((document) => document.slug === slug);
  if (!metadata) return null;

  const source = await fs.readFile(path.join(contentRoot, `${slug}.md`), "utf8");
  const parsed = matter(source);
  const rendered = await remark().use(remarkGfm).use(remarkHtml).process(parsed.content);
  const html = rewriteMarkdownLinks(String(rendered), slug);
  const text = parsed.content.replace(/<[^>]*>/g, " ").replace(/[`*_#>[\]|-]/g, " ").replace(/\s+/g, " ").trim();

  return { ...metadata, html, text, metadata: parsed.data as Record<string, unknown> };
}

export async function getSearchDocuments() {
  return Promise.all(documents.map(async (document) => {
    const loaded = await getDocument(document.slug);
    return { slug: document.slug, title: document.title, description: document.description, text: loaded?.text ?? "" };
  }));
}

export async function getHomeDocument() {
  const source = await fs.readFile(path.join(contentRoot, "index.md"), "utf8");
  const parsed = matter(source);
  const rendered = await remark().use(remarkGfm).use(remarkHtml).process(parsed.content);
  const html = rewriteMarkdownLinks(String(rendered), "index");
  return { html, metadata: parsed.data as Record<string, unknown> };
}
