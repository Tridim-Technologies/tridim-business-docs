# People and teams

The employee directory is a limited internal-alpha feature for work identity. It does not provide a complete HR information system and is not a hosted customer service.

## Profiles and organization access

Each profile belongs to one existing organization membership. Adding a profile does not create a login or change the member's role. Owners and admins can invite a person separately; employees see only the work profile. Profile fields are limited to:

- Display name
- Job title
- Optional department
- Active or inactive directory status

The directory does not collect personal email or phone numbers, home addresses, salary, payroll details, government identifiers, or employment-contract documents.

## Who can view and manage profiles?

| Role | Access |
| --- | --- |
| Owner, admin, operations | View and maintain profiles for active member accounts; view inactive profiles and restore them |
| Employee | View active profiles in the organization; cannot create or change manager-controlled work details |
| Sales, finance, and support | No employee-directory access in this increment |

Every request is scoped to the organization in the route. A profile cannot grant access on its own: the account must still be active and have membership in the organization. Inactive profiles are hidden from employees. Deactivated accounts are excluded from the directory and profile-management choices.

## Current limits

- Owners and admins can create an invitation with an allowed role; only owners can invite admins, and nobody can invite an owner. Pending invitations can be revoked.
- When optional SMTP email is configured, the app submits the single-use link to the invited address and hides the raw token from the manager response. The link expires after seven days; SMTP acceptance does not confirm inbox delivery.
- If email delivery is disabled or unavailable, the manager receives a one-time link to share directly. The raw link is not shown again after creation.
- Email submission and link acceptance do not verify mailbox ownership. Do not treat an invited address as verified.
- SMTP acceptance does not confirm that a message reached an inbox. If the recipient cannot find it, revoke the invitation and create a replacement; the new link can be shared manually if SMTP submission is unavailable.
- Invitees can create an account or sign in with an existing account whose email matches the invitation. Acceptance adds membership only to the invited organization.
- Members can submit and track their own leave requests. Owners, admins, and operations managers can review requests from other members in their organization. A requester can cancel a pending request; rejection requires a reason, decisions are recorded, and managers cannot review their own request.
- Requests use inclusive dates, one of four categories (annual, personal, parental, or other), and an optional short note. Past starts, reversed dates, long ranges, and overlaps with pending or approved requests are blocked.
- Keep request notes brief and do not include medical details or other sensitive information. Leave balances, accrual, paid/unpaid entitlements, public holidays, statutory rules, notifications, calendar integrations, onboarding checklists, and payroll are not included.
- Use synthetic data only while the application remains an internal alpha. Do not treat this directory as a verified employee record system for production or compliance purposes.

See the [current capabilities](../product/capabilities.md), [public roadmap](../roadmap.md), and [API explorer](../api-explorer.md) for current implementation status and route details.
