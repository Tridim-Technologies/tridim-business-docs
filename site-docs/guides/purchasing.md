# Supplier orders and stock receiving

The open-source alpha supports a quantity-only supplier workflow that connects supplier orders to inventory receipts. It is intended for synthetic data and internal evaluation.

## Set up suppliers

An organization manager can create a supplier using a unique code and name, then deactivate it when it should no longer be selected for new orders. Order records preserve the supplier code and name as they were when the draft was created. This workflow does not collect supplier contact or payment details.

## Create and issue an order

1. Create a draft for an active supplier.
2. Add one or more active catalog products and the requested quantity in each product's base unit.
3. Edit or delete the draft as needed. A product can appear only once per order.
4. Issue the draft to freeze its supplier and line quantities.

Each draft receives a generated reference. Product SKU, name, and unit are snapshotted on the line. Issue requests can be retried safely. Issued orders cannot be edited or deleted.

## Receive stock

An issued order can be received in one or more deliveries. For each delivery, choose an active stock location and enter the quantities received for one or more order lines. The app records a receipt and creates one linked immutable inventory receipt movement per received line. A receipt can be split across multiple locations. The total received for a line cannot exceed its ordered quantity.

Order status changes to **partially received** when only some quantities have arrived and **received** when all ordered quantities have arrived. An issued or partially received order can be cancelled. Cancellation stops further receiving; quantities already received and their stock movements remain in history.

Each receipt request requires a UUID idempotency key. Retrying an identical request returns the original receipt. Reusing the key with different order, location, or quantities returns a conflict. Receipt records, order progress, and stock movements commit together, so a failed movement does not leave a partial receipt.

## Roles and data scope

Owners, administrators, and operations members can manage suppliers, orders, and receipts. Owners, administrators, operations, sales, and finance members can read purchasing history. Other roles are denied. All suppliers, orders, products, locations, and receipt lines are scoped to the active organization.

## API routes

Routes are organization-scoped beneath `/api/organizations/{organization_id}`:

| Method | Route | Purpose |
| --- | --- | --- |
| `GET` | `/purchasing/` | Read suppliers, orders, receipts, products, and locations |
| `POST` | `/purchasing/suppliers/` | Create a supplier |
| `PATCH` | `/purchasing/suppliers/{supplier_id}/` | Update supplier code, name, or active state |
| `POST` | `/purchasing/orders/` | Create a draft with `supplier_id` and product lines |
| `PATCH`, `DELETE` | `/purchasing/orders/{order_id}/` | Edit or delete a draft |
| `POST` | `/purchasing/orders/{order_id}/issue/` | Issue a non-empty draft |
| `POST` | `/purchasing/orders/{order_id}/cancel/` | Cancel an issued or partially received order |
| `GET`, `POST` | `/purchasing/orders/{order_id}/receipts/` | Read receipts or record a partial/full receipt |

Order line quantities use `ordered_quantity`; receipt line quantities use `quantity`. Both are positive decimal strings with three decimal places, such as `"2.500"`. A receipt request includes `location_id`, `idempotency_key`, and a `lines` array with `order_line_id` and `quantity`.

## Current limits

The workflow does not capture supplier prices, currency, taxes, freight, supplier invoices, payables, payments, approval chains, or accounting entries. It does not include email or external supplier integrations. It does not change inventory valuation, and there is no hosted customer service or production-data approval. See the [inventory guide](inventory.md) for quantity and movement behavior.
