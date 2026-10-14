# Invoices, payments, and exports

The finance workspace records invoices and receipts confirmed outside the app, and provides CSV exports of those records. These are operational finance tools; they are not a complete accounting system.

## Before you start

- Sign in to the correct organization as an owner, admin, or finance member.
- A job must be completed and linked to an accepted quotation before you can issue its invoice.
- Only record a payment after the receipt has been independently confirmed outside the app.

## Issue an invoice

1. Open **Jobs** and find the completed job.
2. Check the customer and source quotation. The invoice uses the quotation's saved lines, quantities, unit prices, and currency.
3. Enter an invoice due date and choose **Issue invoice**.
4. Open **Invoices** to review the issued invoice, its lines, amount, due date, and outstanding balance.

The app does not calculate tax. The invoice total is calculated from the saved quotation line quantities and unit prices; it is not a tax-inclusive or jurisdiction-specific total.

## Record and allocate a confirmed receipt

1. In **Invoices**, use **Record a payment** after confirming the receipt outside the app.
2. Select the customer and enter the received date, amount, currency, and method. Add a reference if useful. Choose **Record payment**.
3. Find the receipt in **Payment receipts**. Select a matching issued invoice for the same customer and currency.
4. Enter the amount to allocate and choose **Allocate**. Any unapplied amount remains visible and can be allocated later to another eligible invoice.

A manual payment entry records an externally confirmed receipt; it does not initiate a bank, card, or mobile-money transfer. The Daraja M-Pesa Express attempt flow is sandbox-only and does not automatically create a finance receipt.

## Try a sandbox M-Pesa Express prompt

Owners, admins, and finance members can start a sandbox M-Pesa Express attempt from an issued KES invoice with available balance. Enter a Kenyan phone number and a whole-KES amount no greater than the available balance, then confirm the browser prompt. Use only a phone number you control for testing. The attempt stores the number for provider-response verification; the UI and attempt-list response do not display it.

The invoice shows the attempt state after reload. Use **Refresh status** to see a callback/query result received since the page was opened. Sandbox requests are not live payments, and a sandbox attempt does not create a receipt.

When the provider result is confirmed as successful, record the receipt through **Record a payment** with method **Mobile money** and the attempt's checkout reference. Then allocate it to the invoice as described above. A callback or query result alone never changes the invoice balance.

## Correct an invoice or payment record

- **Payment allocation:** Choose **Reverse allocation** when an amount was applied to the wrong invoice. The reversal is recorded and the amount becomes unapplied again.
- **Payment receipt:** Choose **Reverse payment** to record that a receipt entry was incorrect or reversed at its source. A reversed receipt cannot be allocated.
- **Invoice:** Correcting an issued invoice requires a reason. Reverse its active allocations first; then void it and issue a replacement from the completed job. The replacement preserves the relationship to the original invoice and can include corrected line values.

Reversals preserve the record and history. They do not move or refund money. Follow your external finance process for any real-world correction.

## Download finance exports

Use the links at the top of **Invoices** to download **Invoices CSV**, **Payments CSV**, or **Allocations CSV**. These organization-scoped downloads are available to owners, admins, and finance members. The files include a generation timestamp and state definitions; review the export notes before using them for reconciliation.

## Expected result

The invoice register shows issued and void invoices with balances derived from active allocations. The receipt register shows recorded, allocated, unapplied, and reversed amounts. CSV downloads contain the corresponding operational records and history fields.

## Current limits

- The exports are not accounting statements. They do not perform bank matching, tax calculations, revenue recognition, or ledger balancing.
- Currencies remain separate; the app does not convert or combine different currencies.
- A sandbox payment attempt is not a live payment and does not itself create a finance receipt. Live tenant payment processing is not available.
- Confirm all values through your existing financial process before relying on them outside this alpha.
