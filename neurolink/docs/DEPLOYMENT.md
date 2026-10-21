# Deployment and recovery notes

## Required environment

Set `NODE_ENV=production`, `PORT`, `DATABASE_URL`, `JWT_SECRET` (a strong unique secret), `CLIENT_URL`, and optionally `GEMINI_API_KEY` and `GEMINI_MODEL`. Do not commit the resulting `.env` file.

## Release steps

1. Provision a PostgreSQL 14+ database with TLS enabled.
2. Run `npm ci` in `server/`, then `npm run migrate` with the production `DATABASE_URL`.
3. Run `npm ci && npm run build` in `client/`; deploy the generated `client/dist/` with `VITE_API_URL` set during its build.
4. Run `npm test` before release and verify `GET /api/v1/health` after deployment.
5. Configure the backend CORS origin to exactly match the deployed frontend origin.

## Backup and recovery

Use provider-managed encrypted backups or a scheduled `pg_dump` job outside this repository. Test restores into an isolated environment. A typical backup command is `pg_dump --format=custom --file=neurolink.backup "$DATABASE_URL"`; restore with `pg_restore --clean --if-exists` only against a confirmed non-production target. Do not claim backup coverage until the provider schedule and restore test have been verified.

## Known release blockers

Private health-record storage, device ingestion, notifications, durable scheduler, full database integration tests, and complete frontend API integration are unfinished. This repository is not production-ready.
