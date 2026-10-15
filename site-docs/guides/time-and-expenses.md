# Time and expense claims

This guide covers time entries and synthetic expense claims recorded against jobs. **Use synthetic data only. Do not enter real employee expenses or receipt details.**

## Before you start

- Sign in to the right organization.
- A job manager must assign you to the job before you can submit time or create an expense claim.
- For expense claims, use made-up data only. A private receipt-upload path is available only when deliberately enabled for local synthetic development; it is disabled by default.

## Submit time on a job

1. Open **Jobs** and find a job assigned to you.
2. In **Time entries**, enter the work date, hours, and an optional work description. The date cannot be in the future; hours must be greater than zero and no more than 24.
3. Choose **Submit time**. The entry appears with a submitted status.
4. An owner, admin, or operations member reviews it. They can approve it or reject it with a reason.
5. If rejected, correct the date, hours, or description and choose **Correct and resubmit**. The review history remains available.

Employees see their own entries. Job managers can review entries for the organization.

## Submit an expense claim

Each claim represents one expense and must be linked to a job.

1. Open **Expenses** and choose an assigned job under **New expense draft**.
2. Enter the expense date, exact amount, three-letter uppercase currency, category, business purpose, and optionally a merchant. Use synthetic values only.
3. If the local development upload gate is enabled, attach a generated synthetic JPEG, PNG, or PDF receipt. Otherwise enter a made-up explanation in **Why is the receipt missing?** Real receipts and expense details must not be used.
4. Choose **Create draft**, check the claim, then choose **Submit for review**.
5. A reviewer who is an owner, admin, or operations member and is not the claimant can return the claim with a correction reason, reject it with a reason, or record a reasoned waiver when evidence is missing. A claim can be approved when its current version has clean accepted evidence or a reasoned waiver.
6. If the claim is returned, the claimant edits it and submits a corrected version. A waiver from an earlier version does not carry forward.

Claimants can withdraw a draft or pending claim. Approved, rejected, and withdrawn claims are final in the current alpha.

## Local synthetic receipt uploads

Uploads are for local synthetic development only. Django must run with `DEBUG=1`, `DJANGO_ALLOWED_HOSTS` limited to `localhost,127.0.0.1`, and `EXPENSE_EVIDENCE_ENABLED=1`. Set `EXPENSE_EVIDENCE_CLAMD_SOCKET` to a local ClamAV Unix socket. The app does not install or start ClamAV. Files stay in the ignored `.private-evidence/` directory by default, outside static/media serving. If storage or scanning is unavailable, the upload is rejected or stays quarantined and cannot be downloaded.

The initial limits are 10 MiB per file, five files per claim version, and 25 MiB total per claim. The server accepts JPEG, PNG, and PDF only after checking declared type, file content, image decoding or PDF parsing, and a clean malware scan. Downloads are authorized for each request and served as attachments. Claimants may remove evidence from a draft or the new version of a returned claim; submitted versions remain unchanged. Run `python backend/manage.py cleanup_expense_evidence` to purge stale quarantined/rejected files and retry deleted-object cleanup.

This path is disabled outside local debug mode and is not a production storage or scanning service. A clean local scan does not authorize real evidence. Production parser isolation, object storage and scanner selection, backup/deletion behavior, customer-specific retention, monitoring, support ownership, and incident response remain unresolved.

## Expected result

Time entries and expense claims appear on the associated job or in the expense register with their status and review history. The records make submitted work and review decisions visible to the organization.

## Current limits

- Use synthetic information and generated receipt files only. Never use real expense data or receipts.
- Claim approval does not reimburse the employee, create an invoice line, or post an accounting entry.
- Time entries and expense claims are operational records, not payroll or accounting transactions.
- The employee who submitted a claim cannot review or approve that claim.
