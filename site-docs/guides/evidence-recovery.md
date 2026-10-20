# Expense-evidence recovery

Tridim Business currently supports generated receipt files only in a deliberately enabled local development environment. Real receipts and customer expense evidence are not supported.

## What the local journal does

When a synthetic evidence file is deleted or expires, the application first makes it inaccessible, records a deletion intent in a separate local SQLite journal, removes the file bytes, records completion, and then finalizes the database state. The dry-run-first replay command can reapply deletions after restoring an older local database and file-directory snapshot, if the newer journal is preserved.

The local journal is a development rehearsal. It is stored on the same machine and can be lost or rolled back with local files. Its integrity checkpoint is not independently anchored. It does not provide hosted durability, a production backup, or proof that every storage copy has been permanently removed.

## Production recovery requirements

Before real evidence is supported, a production design must provide:

- A deletion history outside the application database and the evidence-storage recovery boundary, with separate access controls.
- An independently protected integrity checkpoint so a restore can detect a missing or rolled-back part of the history.
- The exact immutable object version for every original and any derivative that can contain evidence.
- A restore procedure that verifies and replays deletion events before evidence is made available.
- Provider-specific proof for versions, replicas, soft-deleted objects, backups, and retention locks. A successful delete request alone does not prove permanent purge.
- Approved retention and legal-hold rules, monitoring, support ownership, and a reviewed restore rehearsal.

During recovery, evidence access must remain disabled until the journal is verified, replay reaches its protected checkpoint, and storage inventory confirms every relevant version is handled. Any unresolved or ambiguous deletion keeps evidence unavailable.

## Current boundary

The production ledger, storage provider, region, retention duration, deployment, and hosted restore process have not been selected or configured. The design is recorded in the [core repository's production recovery document](https://github.com/Tridim-Technologies/tridim-business/blob/main/docs/PRODUCTION_EVIDENCE_RECOVERY_DESIGN.md) and [expense-evidence decision record](https://github.com/Tridim-Technologies/tridim-business/blob/main/docs/ADR-005-EXPENSE-EVIDENCE-HANDLING.md). These documents describe requirements and do not authorize real evidence or production use.
