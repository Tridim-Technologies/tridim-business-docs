# Business workflow

Tridim Business is being built around linked operational records, so teams can follow work from a customer request through delivery and collection.

## Current alpha flow

1. **Manage a customer.** Create and maintain a customer record within an organization.
2. **Prepare a quotation.** Record a proposed scope and manage the customer's decision. Tax and quotation totals are not calculated by the current product.
3. **Start a job.** An accepted quotation can create one linked job. Members can be assigned and update job status and delivery notes.
4. **Record work.** Assigned members can submit time entries for review.
5. **Plan stock replenishment.** Authorized managers can create supplier drafts, issue them, and receive partial or complete deliveries into a stock location. Supplier receipts add quantities through linked inventory movement records.
6. **Track stock.** Authorized inventory managers can maintain products and locations and record reasoned receipts, issues, adjustments, and transfers. Balances are quantity-only and do not create accounting entries.
   Job managers can also issue stock against a job. Linked immutable movements reduce on-hand quantities and appear in the job and inventory histories.
7. **Review expenses.** Members can submit synthetic expense claims linked to a job. Reviewers can request changes, waive missing evidence, approve, or reject. Generated receipt files can be used only through the disabled-by-default local development path; real expense data is not supported.
8. **Invoice and record collection.** Finance members can create an invoice from completed work, record manual receipts, allocate them to invoices, and reverse allocations or receipts.
9. **Review finance exports.** Finance members can export available invoice and payment data.

## Optional public catalog

Owners and administrators can publish a separate read-only catalog of selected active products. Anonymous visitors see only the storefront name, currency, and explicitly published product names, public descriptions, units, and prices. This catalog is not connected to order creation, checkout, payments, or stock reservation.

## Payment integration boundary

The current Daraja M-Pesa Express integration is sandbox-only and intended for synthetic data. It supports a sandbox payment attempt and status flow; it does not automatically create a finance receipt or enable live settlement.

## What the workflow does not imply

A link between operational records does not mean that every business event automatically creates an accounting entry. Time and expense claims do not automatically become invoice lines or ledger transactions. Tax calculation and a complete accounting ledger are not part of the current alpha.

Supplier orders and receipts do not record a supplier price, payable, payment, tax, or accounting entry.
