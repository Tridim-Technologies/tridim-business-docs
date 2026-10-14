# People and teams

The employee directory is a limited internal-alpha feature for work identity. It does not provide a complete HR information system and is not a hosted customer service.

## Profiles and organization access

Each profile belongs to one existing organization membership. Adding a profile does not create a login, invite a user, or change the member's role. Managers see the account username when selecting an existing member; employees see only the work profile. Profile fields are limited to:

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

- The directory does not manage invitations or organization membership roles.
- Leave requests, leave balances, onboarding checklists, payroll, and statutory records are not included.
- Use synthetic data only while the application remains an internal alpha. Do not treat this directory as a verified employee record system for production or compliance purposes.

See the [current capabilities](../product/capabilities.md), [public roadmap](../roadmap.md), and [API explorer](../api-explorer.md) for current implementation status and route details.
