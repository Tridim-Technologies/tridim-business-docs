import fs from "node:fs/promises";
import path from "node:path";
import { load as loadYaml } from "js-yaml";
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

function parseFrontMatter(source: string) {
  const normalized = source.replace(/^\uFEFF/, "");
  const match = normalized.match(/^---\s*\r?\n([\s\S]*?)\r?\n---\s*(?:\r?\n|$)([\s\S]*)$/);
  if (!match) return { data: {}, content: normalized };

  const data = loadYaml(match[1]);
  if (data !== undefined && (typeof data !== "object" || data === null || Array.isArray(data))) {
    throw new Error("Markdown front matter must be a YAML mapping.");
  }

  return { data: (data ?? {}) as Record<string, unknown>, content: match[2] };
}

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
  const parsed = parseFrontMatter(source);
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
  const parsed = parseFrontMatter(source);
  const rendered = await remark().use(remarkGfm).use(remarkHtml).process(parsed.content);
  const html = rewriteMarkdownLinks(String(rendered), "index");
  return { html, metadata: parsed.data as Record<string, unknown> };
}
