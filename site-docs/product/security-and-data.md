# Security and data handling

The current product is an internal alpha. It is intended for development and controlled evaluation with synthetic data only; do not enter customer, employee, financial, or other sensitive real-world data.

## Current handling boundaries

- Business records are organized by organization and access depends on membership and role.
- Changes to selected operational records have history records.
- Expense claims currently accept synthetic claim information only. Receipt uploads and evidence-file storage are not supported.
- Payment-provider credentials are intended for server-side configuration. The M-Pesa integration is sandbox-only.

These are descriptions of the current implementation direction, not a security certification or a promise that every alpha path is suitable for production.

## Before production use

Production use requires a completed security and privacy review, operational monitoring and support ownership, tested backup and recovery, documented retention and deletion rules, and review of the applicable requirements for each market. These conditions are not yet represented as completed.
