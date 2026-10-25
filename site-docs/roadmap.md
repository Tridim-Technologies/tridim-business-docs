# Public roadmap

**Status:** founder-directed build sequence. Dates and delivery commitments are not set.

This roadmap covers the public, open-source Tridim Business platform. It reflects the current internal alpha and may change as implementation evidence and capacity change.

## Current baseline

The platform has an organization-scoped foundation and a connected workflow for customers, quotations, jobs, delivery, time, synthetic expense claims, quantity-only inventory and supplier purchasing, finance, and an optional public read-only merchant catalog. Inventory supports products, locations, auditable stock movements, reorder suggestions, available-stock tracking, location-specific job reservations, supplier orders, partial/full receiving linked to movements, and quantity-only stock issues against jobs. Job material reservations can be consumed partially or explicitly released; no costing or accounting integration is included. Finance supports invoices, manually recorded receipts, allocations, reversals and exports. The People area provides work-only employee profiles, basic leave requests, and one-time organization invitations. Optional invitation email with manual-link fallback is in progress; mailbox verification is not included. The gated expense-evidence path is implemented for local synthetic files only; it is not ready for real files. Daraja M-Pesa Express is available for sandbox attempts only; it does not settle payments or create finance receipts automatically.

The local synthetic PostgreSQL backup/restore rehearsal has passed. The internal-alpha planning baseline is RPO up to 24 hours, RTO by the next business day, and a seven-day recovery window. These are planning assumptions, not customer commitments or configured/verified hosted recovery targets. Cloud Monitoring and Cloud Logging are the preferred future monitoring direction; no project, services, retention, or alert routing are configured.

## Milestones

| Milestone | Focus | Current state |
| --- | --- | --- |
| Core business workflow | Customers, quotations, job delivery, time and synthetic claims | Implemented in the internal alpha; continue improving usability and coverage |
| Expense evidence | Private local synthetic upload, scanning, claim-version access, and deletion replay | Local synthetic deletion journal/replay is implemented in [core issue #99](https://github.com/Tridim-Technologies/tridim-business/issues/99); real files remain out of scope until independent production recovery, storage-specific purge, isolation, retention, and support controls are addressed |
| Core HR | Work profiles, basic leave requests, role-bounded organization invitations | Implemented in the internal alpha; no payroll or leave-entitlement calculations |
| Finance foundation | Invoices, manual receipts, allocation, reversals and exports | Implemented for synthetic workflows; this is not a full accounting ledger |
| Inventory foundation | Product catalog, locations, stock movements, reorder suggestions, and available quantities | Implemented for synthetic workflows; quantity-only and without costing, tax, or accounting integration |
| Merchant storefront catalog | Optional public catalog with owner/admin controls and explicit product publication | Implemented as a read-only catalog; no customer accounts, cart, checkout, orders, payments, or stock reservation |
| Supplier purchasing | Supplier records, purchase orders, and partial/full stock receiving | Implemented for synthetic quantities; no prices, payables, tax, payment, or accounting |
| Job materials | Location-specific reservations and quantity-only issues recorded against jobs | Implemented in the internal alpha; reservations support partial consumption and explicit release, without cost allocation |
| Sandbox payment verification | Callback handling, query reconciliation and accurate pending states | In progress; confirm final simulator responses and preserve manual finance controls |
| Internal alpha readiness | Access review, data safeguards, recovery instructions and operating checks | In progress; keep real business data out until safeguards and ownership are reviewed |
| Repeatable product foundation | Setup, upgrades, support practices and evidence for expansion | Later milestone; no delivery date committed |

## Next priority

Continue internal alpha readiness using synthetic data. The current review covers tenant and role checks, scoped support access, local synthetic evidence handling, recovery instructions, and incident guidance. The provider-neutral production evidence recovery design is documented in the [core repository](https://github.com/Tridim-Technologies/tridim-business/blob/main/docs/PRODUCTION_EVIDENCE_RECOVERY_DESIGN.md) and summarized in the [evidence recovery guide](guides/evidence-recovery.md); provider, region, retention, and deployment remain undecided. Remaining gates include privileged-access review, named operational responsibilities and incident contact paths, correct cleanup scheduling in a future environment, and a provider-specific evidence lifecycle and restore rehearsal. Hosted deployment, real business data, and live payments remain deferred. The uncancelled Daraja sandbox handset follow-up remains deferred in [core issue #35](https://github.com/Tridim-Technologies/tridim-business/issues/35) until explicitly scheduled.

## Later candidates

Checkout and broader commerce, point of sale, payroll, deeper accounting, native apps and additional payment integrations are candidates for future evaluation. They are not delivery commitments. Prioritize them only when implementation evidence, a clear use case and available capacity support the work.

## Roadmap principles

- Complete and harden the connected job-to-cash workflow before broadening the product.
- Treat tenant isolation, permissions, auditability and data portability as baseline requirements.
- Use synthetic scenarios to verify behavior; they do not establish market demand.
- Keep market-specific legal, tax and compliance claims out until verified by qualified reviewers.
- Keep calendar estimates out until dependencies and delivery capacity are known.
