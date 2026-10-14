# Tridim Business documentation

Public product information for the Tridim Business Platform, an all-in-one business operations platform being developed by Tridim Technologies. This site is built with MkDocs Material and published with GitHub Pages. Python tooling is managed with [uv](https://docs.astral.sh/uv/).

## Preview locally

Requirements: Python 3.12+ and [uv](https://docs.astral.sh/uv/getting-started/installation/).

```sh
uv sync --locked
uv run mkdocs serve
```

Open the local address printed by MkDocs. Build the production site with strict checks using:

```sh
uv run mkdocs build --strict
```

## Published site

The GitHub Pages site is configured at <https://tridim-technologies.github.io/tridim-business-docs/>. Publication begins after the Pages source is enabled for this repository and the default branch contains a successful deployment workflow.

## Content scope

This repository contains public product information. It describes the current internal alpha accurately and does not publish private planning materials.
