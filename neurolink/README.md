# NeuroLink — Phase 1

Family caregiver dashboard foundation for NeuroLink. The UI is navigable and responsive, but intentionally uses labelled interface fixtures; protected data, authentication, PostgreSQL CRUD, private files, Gemini and device integrations begin in later phases.

## Requirements

- Node.js 20+ (Node 24 tested)
- PostgreSQL is **not required for Phase 1**. A connection string is reserved in `server/.env.example` for Phase 2.

## Run locally

Open two terminals from this directory:

```powershell
cd server
Copy-Item .env.example .env
npm run dev
```

```powershell
cd client
npm install
npm run dev
```

Visit the URL printed by Vite, normally `http://localhost:5173`. The server health check is at `http://localhost:4000/api/v1/health`.

## Phase 1 checklist

- [x] Vite React client and Express API skeleton
- [x] CSS tokens, responsive landing page, login preview and complete dashboard navigation
- [x] UI states clearly label unavailable data and development fixtures
- [x] Versioned backend health endpoint with security headers, CORS and structured errors
- [ ] PostgreSQL schema, authentication and CRUD (Phase 2)
- [ ] Gemini, device ingestion, location and notifications (Phase 3)
- [ ] Analytics, integration testing and deployment readiness (Phase 4)
