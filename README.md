# Tridim Business documentation

Public product information for the Tridim Business Platform, an all-in-one business operations platform being developed by Tridim Technologies. The site is built with Next.js and published as a static site with GitHub Pages. Markdown files in `site-docs/` are the canonical source; the site reads and renders them at build time.

## Preview locally

Requirements: Node.js 24.21.0 (see `.nvmrc`) and npm.

```sh
npm ci
npm run dev
```

Open the local address printed by Next.js. Check types and build the static site using:

```sh
npm run lint
NEXT_PUBLIC_BASE_PATH=/tridim-business-docs npm run build
```

The generated website is written to `out/`. Leave `NEXT_PUBLIC_BASE_PATH` unset for local development; GitHub Pages builds set it to `/tridim-business-docs`.

## Published site

The GitHub Pages site is configured at <https://tridim-technologies.github.io/tridim-business-docs/>. The deployment workflow publishes the static export from `main`.

## Content scope

This repository contains public product information. It describes the current internal alpha accurately and does not publish private planning materials.

## Documentation site tools

- [Next.js](https://nextjs.org/) App Router generates the static site and page routes.
- [React](https://react.dev/) renders the navigation, search, and interactive API route filter.
- [remark](https://github.com/remarkjs/remark) and [remark-gfm](https://github.com/remarkjs/remark-gfm) render Markdown and GitHub Flavored Markdown tables.
- [gray-matter](https://github.com/jonschlinkert/gray-matter) reads page metadata stored at the top of Markdown files.
- GitHub Actions type-checks and builds pull requests, then publishes the static export to GitHub Pages from `main`.

## Dependency updates

Dependabot checks npm packages and GitHub Actions weekly and opens pull requests; updates are reviewed and merged through the normal pull request workflow, with auto-merge disabled. Check the manifest and lockfile changes, review upstream release notes and any linked security advisory, and wait for CI before merging. GitHub security alerts and security-update pull requests are managed separately in repository security settings.

The committed `package-lock.json` is authoritative for installs. To make an intentional dependency change, use npm to update both `package.json` and the lockfile, then validate with:

```sh
npm ci
npm run lint
NEXT_PUBLIC_BASE_PATH=/tridim-business-docs npm run build
```
