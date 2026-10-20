# Security and data handling

The current product is an internal alpha. It is intended for development and controlled evaluation with synthetic data only; do not enter customer, employee, financial, or other sensitive real-world data.

## Current handling boundaries

- Business records are organized by organization and access depends on membership and role.
- Changes to selected operational records have history records.
- Successful platform-superuser list and record-detail reads in the support-scoped Django Admin create access-metadata audit events. Record-detail events include the record's organization; list events do not claim a single organization. The event records actor, time, model, access type, and record identifier without copying the business record contents. This covers tenant models using that scoped admin only; it is not a log of every admin action or direct database access.
- Expense claims accept synthetic information only. A disabled-by-default local development path stores generated test receipts privately and scans them before use. A separate local journal supports synthetic deletion replay after an older local restore, but it can be lost or rolled back and is not a production recovery control. Production storage, parser isolation, retention, deletion, and backup controls remain open. See the [expense-evidence recovery guide](../guides/evidence-recovery.md).
- Payment-provider credentials are intended for server-side configuration. The M-Pesa integration is sandbox-only.

These are descriptions of the current implementation direction, not a security certification or a promise that every alpha path is suitable for production.

## Before production use

Production use requires a completed security and privacy review, operational monitoring and support ownership, tested backup and recovery, documented retention and deletion rules, and review of the applicable requirements for each market. For evidence specifically, this includes an independently protected deletion history and integrity checkpoint, exact-version purge behavior, and a restore rehearsal that proves replay completed before access is enabled. These conditions are not yet represented as completed.
