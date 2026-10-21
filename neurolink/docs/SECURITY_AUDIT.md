# Security audit — 2026-10-22

## Fixed / present controls

- Passwords use bcrypt hashing; password hashes are not returned.
- JWT expiry, authorization header parsing, patient access checks, parameterized `pg` queries, request validation, auth/AI rate limiting, Helmet, JSON-size limits, and production-safe server error responses are implemented.
- The Gemini key is server-only and unavailable AI requests fail explicitly.

## High-risk release blockers

1. Private health-record upload/download has not been implemented; do not add public file URLs.
2. Session refresh/revocation and caregiver invitation/revocation workflows are incomplete.
3. Most dashboard views still show Phase 1 fixtures rather than authorized API data.
4. Database-backed authorization, IDOR, and end-to-end tests cannot run until an isolated PostgreSQL test database is configured.
5. No notification or wearable provider has been configured or verified.

## Operational findings

Run `npm audit` as part of the release process and address dependency advisories based on compatibility testing. Never use `npm audit fix --force` blindly in a healthcare-adjacent system.
