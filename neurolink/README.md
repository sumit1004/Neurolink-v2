# NeuroLink — Phase 2 (in progress)

Family caregiver dashboard foundation for NeuroLink. Phase 2 adds PostgreSQL migrations, JWT authentication, role-aware patient access control, and persisted APIs for patients, people, routines/tasks, locations, alerts and doctor contacts.

## Requirements

- Node.js 20+ (Node 24 tested)
- PostgreSQL 14+ is required for persisted Phase 2 features.

## Run locally

Open two terminals from this directory:

```powershell
cd server
Copy-Item .env.example .env
npm run migrate
npm run seed
npm run dev
```

```powershell
cd client
npm install
npm run dev
```

Visit the URL printed by Vite, normally `http://localhost:5173`. The server health check is at `http://localhost:4000/api/v1/health`.

## Phase 2 commands

- `npm run migrate` — applies versioned SQL migrations.
- `npm run seed` — creates a repeatable local demo caregiver and patient. Set `DEMO_PASSWORD` before running in a shared environment.
- `npm test` — runs middleware security tests. Full database integration tests require a dedicated `DATABASE_URL` test database and are not included yet.

## Phase 2 status

- [x] PostgreSQL schema migration, connection pooling and transactions
- [x] JWT login, registration and current-user endpoint
- [x] Patient-level access control and caregiver roles
- [x] Patients, known people, routines/tasks, locations, alerts and doctors API foundations
- [ ] Private health document storage, invitations, conversations, devices, report endpoints and comprehensive UI CRUD
- [ ] Gemini, device ingestion, location and notifications (Phase 3)
- [ ] Analytics, integration testing and deployment readiness (Phase 4)
