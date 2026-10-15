# Capabilities

This page describes the current internal alpha. Availability here does not mean a capability is production-ready or available as a hosted customer service.

## Customer and sales operations

- Create and update organization-scoped customer records.
- Prepare quotations and record decisions.
- Create a linked job when a quotation is accepted.

Quotation pricing and taxes are not calculated by the current product.

## Job delivery

- Assign members and update job status.
- Add delivery notes.
- Submit and review job time entries.

## People and teams

- Maintain organization-scoped employee work profiles with a display name, job title, department, and active status.
- Employees can view active directory profiles. Owner, admin, and operations roles can create and update profiles, including restoring inactive profiles.
- Profiles use existing organization membership and do not create accounts or change access roles.
- The directory does not collect personal contact details, salary, payroll, government identifiers, or home addresses.
- Organization members can submit and track their own leave requests; owner, admin, and operations roles can review other members' requests. Decisions and reasons are retained as request history, and the requester can cancel a pending request.
- Leave categories are labels only. Balances, accrual, entitlements, holidays, statutory policies, payroll, notifications, and calendar integrations are not included.

## Expense claims

- Submit synthetic expense claims for a job.
- Reviewers can return, waive missing evidence, approve, or reject a claim; accepted evidence can satisfy the receipt requirement for its claim version.
- A disabled-by-default local development path supports generated synthetic JPEG, PNG, and PDF receipts after validation and malware scanning. It must not be used with real expense data.

## Invoicing and payments

- Create invoices from completed jobs.
- Correct invoices with a recorded reason.
- Record manual receipts, allocate and reverse payments, and export finance data.
- Initiate and track sandbox M-Pesa Express attempts from issued KES invoice cards. Use a phone number controlled by the test operator; the number is retained on the attempt for provider-response verification and is not shown in the UI or attempt-list response. Sandbox attempts do not settle live payments or automatically create finance receipts.

## Not yet provided

The current product does not provide a complete accounting ledger, tax calculation, payroll, production expense evidence storage, live payment processing, or a public hosted service. Features and boundaries can change as development continues.
