# Inventory

The internal alpha includes quantity-only stock tracking for synthetic data. Inventory is scoped to an organization and links a product catalog to stock locations through an append-only movement history.

## Products and locations

Owners, administrators, and operations members can add products and locations and maintain their catalog details. Each product has an organization-unique, case-insensitive SKU, a name, and a base unit. Each location has an organization-unique code and a name. A product's base unit cannot be changed after its first movement, because that would reinterpret earlier quantities.

Owners, administrators, operations, sales, and finance members can view inventory. Other roles do not have access. API identifiers are resolved within the selected organization.

## Record stock changes

Authorized inventory managers can record:

- **Receipts** to add stock to a location.
- **Issues** to remove stock from a location.
- **Adjustments** to increase or decrease a count with a reason.
- **Transfers** to move stock between two different locations in one transaction.

Every movement records the product, quantity, actor, time, reason, and a request idempotency key. Quantities use three decimal places and must be positive. Issues, adjustment decreases, and transfers cannot reduce stock below zero. Repeating a movement request with the same key and payload returns the original movement; reusing its key for different data is rejected.

On-hand quantities are derived from the movement history. Movement records cannot be edited or deleted through the application. Corrections are recorded as new movements. Locations with stock on hand cannot be deactivated.

## API routes

| Method | Route | Purpose |
|---|---|---|
| `GET` | `/api/organizations/{organization_id}/inventory/` | List products with per-location balances, locations, and the latest 100 movements |
| `POST` | `/api/organizations/{organization_id}/inventory/products/` | Create a product |
| `PATCH` | `/api/organizations/{organization_id}/inventory/products/{product_id}/` | Update product fields |
| `POST` | `/api/organizations/{organization_id}/inventory/locations/` | Create a location |
| `PATCH` | `/api/organizations/{organization_id}/inventory/locations/{location_id}/` | Update a location; deactivation requires zero stock |
| `GET`, `POST` | `/api/organizations/{organization_id}/inventory/movements/` | List recent movements or record one |

Movement requests use `product_id`, `kind`, `location_id`, `quantity`, `reason`, and a UUID `idempotency_key`. A transfer also uses `destination_id`. An adjustment uses `direction` set to `increase` or `decrease`. Send quantity as a decimal string for exact validation.

## Current limits

This is quantity tracking, not inventory accounting. There is no purchasing, supplier receiving, sales order, reservation, bundle, serial/batch tracking, unit conversion, costing, valuation, tax, invoice linkage, or general-ledger posting. The alpha uses synthetic records only and does not imply a hosted service or production readiness.
