# Current status

## Internal alpha

Tridim Business is in active development as an internal alpha. The core workflow includes customer and quotation records, linked jobs, time review, synthetic expense claims, quantity-only inventory with an optional public read-only merchant catalog, an employee work directory, leave requests and manager decisions, one-time organization invitations, invoicing, manual payment recording, finance exports, and a sandbox-only payment attempt flow.

## Availability

- No public hosted customer service is available.
- The app is not ready for production use.
- Use synthetic data only.
- Live payment settlement, production receipt storage, tax calculation, payroll, and a complete accounting ledger are not available. A local synthetic receipt-upload path is disabled by default and is not approved for real data. Its separate deletion journal and restore replay improve local synthetic rehearsals only; the journal is not independently protected and does not establish production durability. See the [expense-evidence recovery guide](guides/evidence-recovery.md).
- Inventory stores quantities from an immutable movement history. Supplier orders support partial/full receiving linked to stock movements. Sales orders, reservations, costing, valuation, supplier prices, tax, and accounting integration are not available. See the [inventory guide](guides/inventory.md) and [purchasing guide](guides/purchasing.md).
- The public merchant storefront is a read-only catalog of explicitly published active products. It does not accept orders or payments and does not reserve stock.
- Compliance and market requirements have not been validated for any jurisdiction.
- Leave requests do not calculate balances, paid/unpaid entitlements, public holidays, statutory policy, or payroll.
- Invitation email submission is optional and requires SMTP configuration; manual link sharing remains the fallback. SMTP handoff does not confirm inbox delivery or verify mailbox ownership.

The product is being designed with the intention to support businesses across markets. That is a direction, not a statement of present availability or verified suitability in any country.
