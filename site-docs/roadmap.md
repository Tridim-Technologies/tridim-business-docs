# Public roadmap

**Status:** founder-directed build sequence. Dates and delivery commitments are not set.

This roadmap covers the public, open-source Tridim Business platform. It reflects the current internal alpha and may change as implementation evidence and capacity change.

## Current baseline

The platform has an organization-scoped foundation and a connected workflow for customers, quotations, jobs, delivery, time, synthetic expense claims and finance. Finance supports invoices, manually recorded receipts, allocations, reversals and exports. Daraja M-Pesa Express is available for sandbox attempts only; it does not settle payments or create finance receipts automatically.

## Milestones

| Milestone | Focus | Current state |
| --- | --- | --- |
| Core business workflow | Customers, quotations, job delivery, time and synthetic claims | Implemented in the internal alpha; continue improving usability and coverage |
| Finance foundation | Invoices, manual receipts, allocation, reversals and exports | Implemented for synthetic workflows; this is not a full accounting ledger |
| Sandbox payment verification | Callback handling, query reconciliation and accurate pending states | In progress; confirm final simulator responses and preserve manual finance controls |
| Internal alpha readiness | Access review, data safeguards, recovery instructions and operating checks | In progress; keep real business data out until safeguards and ownership are reviewed |
| Repeatable product foundation | Setup, upgrades, support practices and evidence for expansion | Later milestone; no delivery date committed |

## Next priority

Complete the sandbox handset follow-up in [issue #35](https://github.com/Tridim-Technologies/tridim-business/issues/35). The previous handset prompt was cancelled, so it confirmed callback delivery and cancellation handling but did not verify a successful payment result or receipt allocation. A later test should use only sandbox credentials, synthetic records and a test flow explicitly initiated by the operator.

## Later candidates

Inventory, point of sale, storefronts, payroll, deeper accounting, native apps and additional payment integrations are candidates for future evaluation. They are not delivery commitments. Prioritize them only when implementation evidence, a clear use case and available capacity support the work.

## Roadmap principles

- Complete and harden the connected job-to-cash workflow before broadening the product.
- Treat tenant isolation, permissions, auditability and data portability as baseline requirements.
- Use synthetic scenarios to verify behavior; they do not establish market demand.
- Keep market-specific legal, tax and compliance claims out until verified by qualified reviewers.
- Keep calendar estimates out until dependencies and delivery capacity are known.
