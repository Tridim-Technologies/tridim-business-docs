<div class="landing-hero" markdown>

<div class="hero-copy" markdown>

<p class="eyebrow">OPEN-SOURCE BUSINESS OPERATIONS PLATFORM</p>

# Understand the work. Run the business.

Tridim Business connects customer records, quotations, job delivery, staff time, expenses and finance workflows in one platform. The public project is building a dependable foundation for businesses across markets.

[Read the architecture](architecture.md){ .md-button .md-button--primary }
[Explore the project on GitHub](https://github.com/Tridim-Technologies/tridim-business){ .text-link }

</div>

<aside class="status-card" markdown>

<span class="status-label"><span class="status-dot"></span> Internal alpha</span>

## One guide for builders and operators

The platform is under active development and is not a hosted customer service. These pages explain what works today, what remains in progress, and how the current application is put together.

[See current priorities →](roadmap.md){ .card-link }

</aside>
</div>

<div class="platform-strip" markdown>

<div><strong>Django + React</strong><span>Python API and TypeScript web app</span></div>
<div><strong>PostgreSQL</strong><span>Relational data foundation</span></div>
<div><strong>Organization roles</strong><span>Tenant-scoped business access</span></div>
<div><strong>Sandbox payments</strong><span>Manual finance controls stay explicit</span></div>

</div>

## Choose a path through the platform

Use these guides to understand the product and the current implementation. Public documentation describes the open-source platform only.

<div class="docs-grid" markdown>

<a class="docs-card" href="product/workflow/"><span class="card-kicker">PRODUCT</span><strong>How work flows</strong><span>Follow customers, quotations, delivery, time, expenses and invoicing through the current workflow.</span><span class="card-link">Read the guide →</span></a>

<a class="docs-card" href="product/capabilities/"><span class="card-kicker">PRODUCT</span><strong>Current capabilities</strong><span>See what is implemented, what is limited, and what remains outside the alpha.</span><span class="card-link">Review capabilities →</span></a>

<a class="docs-card" href="guides/sales-and-delivery/"><span class="card-kicker">OPERATIONS</span><strong>Sales and delivery</strong><span>Learn the customer, quotation and job workflow, including the current role boundaries.</span><span class="card-link">Read the guide →</span></a>

<a class="docs-card" href="guides/finance-operations/"><span class="card-kicker">OPERATIONS</span><strong>Finance operations</strong><span>Understand invoices, manual receipts, allocations, reversals and sandbox payment attempts.</span><span class="card-link">Read the guide →</span></a>

<a class="docs-card" href="guides/people-and-teams/"><span class="card-kicker">OPERATIONS</span><strong>People and teams</strong><span>Learn how work profiles connect to organization membership and role-based access.</span><span class="card-link">Read the guide →</span></a>

<a class="docs-card" href="architecture/"><span class="card-kicker">BUILDERS</span><strong>Architecture map</strong><span>Explore the web app, backend domains, database and external sandbox boundary.</span><span class="card-link">Explore architecture →</span></a>

<a class="docs-card" href="api-explorer/"><span class="card-kicker">BUILDERS</span><strong>API explorer</strong><span>Search the current HTTP routes, methods and authentication expectations.</span><span class="card-link">Explore API routes →</span></a>

</div>

## What is in the alpha?

- Customer and quotation management, including controlled quotation transitions.
- Jobs linked to accepted quotations, with assignments, delivery notes and status history.
- Staff time submission and review, plus synthetic expense claims.
- An employee work directory with organization-scoped profiles and manager-controlled updates.
- Invoicing, manual payment recording and allocation, reversals, and finance exports.
- A sandbox-only M-Pesa Express flow for synthetic data. A sandbox attempt is not a finance receipt.

The [capabilities page](product/capabilities.md) explains important limits. The [roadmap](roadmap.md) shows the current delivery sequence and open-source priorities.

<div class="site-note" markdown>

**Current availability:** internal alpha only. Do not use real business records or production payment credentials. Market-specific compliance and production readiness have not been established.

</div>
