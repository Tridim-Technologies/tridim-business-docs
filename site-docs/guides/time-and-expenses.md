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

Uploads are for local synthetic development only. The tools used in this walkthrough are the official universal macOS package (or **Homebrew**) to install **ClamAV**, **GnuPG (`gpg`)** to verify the package signature, macOS's built-in `installer` to install the verified package, ClamAV's `freshclam` command to download malware definitions, ClamAV's `clamd` daemon to scan uploads over a Unix socket, **uv + Python 3.12 + Django** for the backend, and **Node.js + npm/Vite** for the React frontend. See the [core developer guide](https://github.com/Tridim-Technologies/tridim-business/blob/main/docs/EXPENSE_CLAIM_ALPHA.md#macos-developer-setup) for setup commands, the [official ClamAV macOS installation instructions](https://docs.clamav.net/manual/Installing.html#macos), and the [configuration guide](https://docs.clamav.net/manual/Usage/Configuration.html).

The official package requires administrator authentication and installs to `/usr/local/clamav`. It includes sample configurations, but local scanner and database setup is still required. On some macOS/Intel setups, Homebrew builds large dependencies from source and needs substantial temporary disk space; check `df -h /` before installing that way.

Django must run with `DEBUG=1`, `DJANGO_ALLOWED_HOSTS` limited to `localhost,127.0.0.1`, and `EXPENSE_EVIDENCE_ENABLED=1`. Set `EXPENSE_EVIDENCE_CLAMD_SOCKET` to the local ClamAV Unix socket. The app does not install or start ClamAV. Files stay in the ignored `.private-evidence/` directory by default, outside static/media serving. If storage or scanning is unavailable, the upload is rejected or stays quarantined and cannot be downloaded.

Before enabling the synthetic upload gate, run `uv run python backend/manage.py check_local_readiness`. The command checks debug mode, the local host policy, bounded evidence and cleanup settings, private paths, and the ClamAV Unix socket. It is a diagnostic only: a passing result does not authorize real evidence, production use, or hosted deployment.

Use a disposable local database and a separate private evidence directory by setting `DATABASE_URL` and `EXPENSE_EVIDENCE_STORAGE_ROOT` for this walkthrough. Do not use a database or evidence directory containing real or otherwise valuable local data. After stopping the backend, frontend, and `clamd`, remove only the temporary database and evidence directory you created; leave normal development data alone. The `cleanup_expense_evidence` management command separately handles stale quarantined/rejected files and retries deleted-object cleanup.

The initial limits are 10 MiB per file, five files per claim version, and 25 MiB total per claim. The server accepts JPEG, PNG, and PDF only after checking declared type, file content, image decoding or PDF parsing, and a clean malware scan. Downloads are authorized for each request and served as attachments. Claimants may remove evidence from a draft or the new version of a returned claim; submitted versions remain unchanged. Run `python backend/manage.py cleanup_expense_evidence` to purge stale quarantined/rejected files and retry deleted-object cleanup.

This path is disabled outside local debug mode and is not a production storage or scanning service. A clean local scan does not authorize real evidence. Production parser isolation, object storage and scanner selection, backup/deletion behavior, customer-specific retention, monitoring, support ownership, and incident response remain unresolved.

The separate local deletion journal can replay synthetic deletes after some older local restores, but it is not an independent production recovery service. See the [expense-evidence recovery guide](evidence-recovery.md) for the current boundary and production gate.

## Local operating checklist

Before enabling synthetic uploads, run:

```sh
uv run python backend/manage.py check_local_readiness
```

This checks local debug mode, host policy, bounded evidence settings, private
paths, cleanup commands, and the ClamAV Unix socket when scanning is enabled.
It is a diagnostic for synthetic development only and never authorizes real
evidence, hosted deployment, or production use. During local callback or login
rehearsals, run `uv run python backend/manage.py cleanup_abuse_records` at least
every five minutes. After evidence tests, run
`uv run python backend/manage.py cleanup_expense_evidence`. Use disposable
synthetic data and remove only temporary directories created for the rehearsal.

## Expected result

Time entries and expense claims appear on the associated job or in the expense register with their status and review history. The records make submitted work and review decisions visible to the organization.

## Current limits

- Use synthetic information and generated receipt files only. Never use real expense data or receipts.
- Claim approval does not reimburse the employee, create an invoice line, or post an accounting entry.
- Time entries and expense claims are operational records, not payroll or accounting transactions.
- The employee who submitted a claim cannot review or approve that claim.
