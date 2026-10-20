# Architecture map

Tridim Business is currently a web application built as a Django backend and React/TypeScript frontend, with PostgreSQL as its relational data store. The diagram describes the current internal alpha; it is not a promise of a hosted or production deployment.

<figure class="architecture-map" aria-labelledby="architecture-caption">
<svg viewBox="0 0 1000 520" role="img" aria-labelledby="architecture-title architecture-description" xmlns="http://www.w3.org/2000/svg">
  <title id="architecture-title">Tridim Business application architecture</title>
  <desc id="architecture-description">A browser uses the React and TypeScript interface, which calls same-origin Django HTTP routes. Django contains accounts, customer, sales, delivery, inventory, supplier purchasing, and finance domains. It stores business data in PostgreSQL and connects to the Daraja sandbox for payment attempts and callbacks.</desc>
  <defs>
    <marker id="arrow" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth"><path d="M0,0 L0,6 L9,3 z" fill="#3175a8" /></marker>
  </defs>
  <rect class="node node-client" x="28" y="160" width="205" height="190" rx="18" />
  <text class="node-kicker" x="52" y="196">WEB CLIENT</text>
  <text class="node-title" x="52" y="232">React +</text>
  <text class="node-title" x="52" y="264">TypeScript</text>
  <text class="node-copy" x="52" y="302">Browser interface</text>
  <text class="node-copy" x="52" y="326">Session + CSRF</text>

  <rect class="node node-api" x="330" y="115" width="300" height="280" rx="18" />
  <text class="node-kicker" x="356" y="152">APPLICATION</text>
  <text class="node-title" x="356" y="190">Django HTTP API</text>
  <rect class="domain-chip" x="356" y="216" width="116" height="48" rx="10" /><text class="chip-text" x="370" y="246">Accounts</text>
  <rect class="domain-chip" x="486" y="216" width="116" height="48" rx="10" /><text class="chip-text" x="500" y="246">Customers</text>
  <rect class="domain-chip" x="356" y="278" width="116" height="48" rx="10" /><text class="chip-text" x="368" y="308">Quotations</text>
  <rect class="domain-chip" x="486" y="278" width="116" height="48" rx="10" /><text class="chip-text" x="509" y="308">Jobs</text>
  <rect class="domain-chip" x="356" y="340" width="246" height="32" rx="10" /><text class="chip-text" x="420" y="362">Invoicing and payments</text>

  <rect class="node node-data" x="732" y="70" width="236" height="150" rx="18" />
  <text class="node-kicker" x="758" y="108">DATA</text>
  <text class="node-title" x="758" y="148">PostgreSQL</text>
  <text class="node-copy" x="758" y="181">Organizations and records</text>

  <rect class="node node-external" x="732" y="300" width="236" height="150" rx="18" />
  <text class="node-kicker" x="758" y="338">EXTERNAL SANDBOX</text>
  <text class="node-title" x="758" y="378">Daraja</text>
  <text class="node-copy" x="758" y="411">STK attempts and callbacks</text>

  <path class="connector" d="M233 255 H315" marker-end="url(#arrow)" />
  <text class="connector-label" x="245" y="240">HTTP + JSON</text>
  <path class="connector" d="M630 175 H715" marker-end="url(#arrow)" />
  <text class="connector-label" x="640" y="159">ORM</text>
  <path class="connector" d="M630 335 H715" marker-end="url(#arrow)" />
  <text class="connector-label" x="638" y="320">sandbox requests</text>
</svg>
<figcaption id="architecture-caption">Current application boundaries. The Daraja connection is sandbox-only, and finance receipts remain a separate manual workflow.</figcaption>
</figure>

## Component responsibilities

| Component | Responsibility in the alpha |
| --- | --- |
| React and TypeScript | Browser interface for the organization workspace and business workflows |
| Django | Session authentication, organization and role checks, domain workflows, and HTTP JSON responses |
| PostgreSQL | Relational persistence for organizations and business records |
| Inventory and purchasing | Product/location quantities, supplier orders, receipts, and linked inventory movements |
| Daraja sandbox adapter | Starts and reconciles test payment attempts and accepts provider callbacks; it does not create a finance receipt |

## Data and access flow

1. A user signs in through the session endpoint and selects an organization they belong to.
2. The browser sends same-origin requests to Django using the signed-in session. Unsafe cookie-authenticated requests include a CSRF token.
3. Django checks organization membership and role before returning or changing organization-scoped records.
4. Finance staff record a receipt separately and allocate it through the finance workflow. A provider callback alone is not a receipt.

The [API explorer](api-explorer.md) lists the current route groups. The [security and data page](product/security-and-data.md) describes current safeguards and known limits.
