# API explorer

This page is a searchable route catalog for the current application API. The routes support the Tridim Business web app and internal alpha workflows; they are not a versioned public integration contract. There is no published OpenAPI schema yet.

Route details are based on the current application source. Use the linked repository for implementation details. Organization-scoped routes require a signed-in member; public invitation inspect/accept routes require a valid one-time token. Permissions vary by role.

| Resource | Method | Route | Purpose |
| --- | --- | --- | --- |
| Health | `GET` | `/health/live/` | Process liveness |
| Health | `GET` | `/health/ready/` | Application readiness |
| Session | `GET` | `/api/csrf/` | Obtain a CSRF token for cookie-authenticated requests |
| Session | `GET`, `POST`, `DELETE` | `/api/session/` | Read session, sign in, or sign out |
| Organizations | `GET` | `/api/organizations/` | List organizations available to the signed-in user |
| Invitations | `POST` | `/api/invitations/inspect/` | Inspect a valid one-time invitation using a token in the JSON request body |
| Invitations | `POST` | `/api/invitations/accept/` | Accept an invitation with a signed-in matching account, or create an account and accept |
| Invitations | `GET`, `POST` | `/api/organizations/{organization_id}/invitations/` | List recent invitations or create an invitation link (owner/admin; role limits apply) |
| Invitations | `POST` | `/api/organizations/{organization_id}/invitations/{invitation_id}/revoke/` | Revoke a pending invitation (owner/admin) |
| Employees | `GET`, `POST` | `/api/organizations/{organization_id}/employees/` | Read the active employee directory or create a work profile (owner/admin/operations); managers may request `?status=all` to include inactive profiles |
| Employees | `PATCH` | `/api/organizations/{organization_id}/employees/{profile_id}/` | Update a work profile or its active status (owner/admin/operations only) |
| Leave requests | `GET`, `POST` | `/api/organizations/{organization_id}/leave-requests/` | List the caller's requests or organization requests for owner/admin/operations; submit a request for the signed-in member |
| Leave requests | `GET` | `/api/organizations/{organization_id}/leave-requests/{request_id}/` | Read a request within the caller's organization and role scope |
| Leave requests | `POST` | `/api/organizations/{organization_id}/leave-requests/{request_id}/transition/` | Approve or reject another member's pending request (owner/admin/operations), or cancel the caller's pending request |
| Customers | `GET`, `POST` | `/api/organizations/{organization_id}/customers/` | List, filter, search, or create customers |
| Customers | `PATCH`, `POST` | `/api/organizations/{organization_id}/customers/{customer_id}/` | Update a customer |
| Quotations | `GET`, `POST` | `/api/organizations/{organization_id}/quotations/` | List or create quotations |
| Quotations | `GET` | `/api/organizations/{organization_id}/quotations/{quotation_id}/` | Read a quotation |
| Quotations | `POST` | `/api/organizations/{organization_id}/quotations/{quotation_id}/transition/` | Accept, reject, or otherwise transition a quotation |
| Quotations | `POST` | `/api/organizations/{organization_id}/quotations/{quotation_id}/revise/` | Create a quotation revision |
| Jobs | `GET` | `/api/organizations/{organization_id}/jobs/` | List jobs |
| Jobs | `GET`, `PATCH` | `/api/organizations/{organization_id}/jobs/{job_id}/` | Read or update a job |
| Jobs | `POST` | `/api/organizations/{organization_id}/jobs/{job_id}/assignments/` | Assign a team member |
| Jobs | `POST` | `/api/organizations/{organization_id}/jobs/{job_id}/assignments/{assignment_id}/remove/` | Remove an assignment |
| Jobs | `POST` | `/api/organizations/{organization_id}/jobs/{job_id}/notes/` | Add a delivery note |
| Time entries | `GET`, `POST` | `/api/organizations/{organization_id}/jobs/{job_id}/time-entries/` | List or submit job time entries |
| Time entries | `POST` | `/api/organizations/{organization_id}/jobs/{job_id}/time-entries/{entry_id}/review/` | Review a time entry |
| Time entries | `POST` | `/api/organizations/{organization_id}/jobs/{job_id}/time-entries/{entry_id}/resubmit/` | Resubmit a time entry |
| Expense claims | `GET`, `POST` | `/api/organizations/{organization_id}/expense-claims/` | List or submit synthetic expense claims |
| Expense claims | `GET`, `PATCH` | `/api/organizations/{organization_id}/expense-claims/{claim_id}/` | Read or update a claim while allowed by its state |
| Expense claims | `POST` | `/api/organizations/{organization_id}/expense-claims/{claim_id}/transition/` | Submit or review a claim transition |
| Expense evidence | `GET`, `POST` | `/api/organizations/{organization_id}/expense-claims/{claim_id}/evidence/` | List evidence or upload a multipart file; upload is disabled unless local synthetic-development settings and scanning are configured |
| Expense evidence | `GET`, `DELETE` | `/api/organizations/{organization_id}/expense-claims/{claim_id}/evidence/{evidence_id}/` | Download accepted evidence as an attachment or remove it from an editable claim version |
| Invoices | `GET` | `/api/organizations/{organization_id}/invoices/` | List invoices |
| Invoices | `POST` | `/api/organizations/{organization_id}/jobs/{job_id}/invoice/` | Issue an invoice for a job |
| Invoices | `POST` | `/api/organizations/{organization_id}/invoices/{invoice_id}/void/` | Void an invoice through the controlled correction path |
| Payments | `GET`, `POST` | `/api/organizations/{organization_id}/payments/` | List or record finance receipts |
| Payments | `POST` | `/api/organizations/{organization_id}/payments/{payment_id}/allocate/` | Allocate a receipt to an invoice |
| Payments | `POST` | `/api/organizations/{organization_id}/payments/{payment_id}/reverse/` | Reverse a receipt |
| Payments | `POST` | `/api/organizations/{organization_id}/payment-allocations/{allocation_id}/reverse/` | Reverse an allocation |
| Finance exports | `GET` | `/api/organizations/{organization_id}/exports/{resource}.csv` | Download an available finance CSV export |
| Daraja sandbox | `GET`, `POST` | `/api/organizations/{organization_id}/invoices/{invoice_id}/daraja/sandbox-attempts/` | List or start a sandbox payment attempt for an invoice |
| Daraja sandbox | `GET` | `/api/organizations/{organization_id}/daraja/sandbox-attempts/{attempt_id}/` | Read a sandbox attempt |
| Daraja sandbox | `POST` | `/api/organizations/{organization_id}/daraja/sandbox-attempts/{attempt_id}/reconcile/` | Retry sandbox status reconciliation |
| Daraja callback | `POST` | `/api/payments/daraja/sandbox/stk/callback/` | Receive a provider sandbox callback; not a user-facing route |

## Authentication and request handling

- The web app uses a Django session cookie. Obtain a CSRF token from `/api/csrf/` before unsafe session-authenticated requests.
- Organization routes require membership in the `{organization_id}` tenant. Domain operations also check the caller's role.
- JSON is used for request and response bodies unless the route returns a CSV export or a plain-text health response.
- Evidence uploads use `multipart/form-data`, the session cookie, and a CSRF token. Let the browser set the multipart `Content-Type` boundary. Evidence downloads are per-request authorized; finance metadata access does not grant receipt access.
- The Daraja callback is a provider endpoint. It is not an alternate login method and does not create a finance receipt.
- Invitation routes use one-time tokens; the raw token is returned only when a manager creates an invitation. The app does not send invitation email or verify mailbox ownership.
- Use synthetic data and sandbox credentials only. The local evidence routes fail closed without a scanner and are not a production integration contract.

For implementation details, see [`backend/config/urls.py`](https://github.com/Tridim-Technologies/tridim-business/blob/main/backend/config/urls.py) and the [source repository](https://github.com/Tridim-Technologies/tridim-business).
