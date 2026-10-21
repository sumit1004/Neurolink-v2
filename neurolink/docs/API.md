# NeuroLink API (implemented routes)

All API responses use `{ "data": ... }` on success or `{ "error": { "code", "message" } }` on failure. Protected requests require `Authorization: Bearer <access-token>`.

## Public and authentication

| Method | Path | Purpose |
| --- | --- | --- |
| GET | `/api/v1/health` | Service health response |
| POST | `/api/v1/auth/register` | Register caregiver (`email`, `password`, `displayName`) |
| POST | `/api/v1/auth/login` | Obtain a 15-minute access token |
| POST | `/api/v1/auth/logout` | Client-token logout acknowledgement |
| GET | `/api/v1/auth/me` | Current authenticated caregiver |

## Patient-authorized resources

`GET/POST /api/v1/patients` lists or creates patients. `GET/PUT /api/v1/patients/:patientId` reads or updates an authorized patient.

The following routes require current access to `:patientId`:

| Resource | Routes |
| --- | --- |
| People | `GET/POST/DELETE /api/v1/patients/:patientId/people[/:id]` |
| Routines | `GET/POST/DELETE /api/v1/patients/:patientId/routines[/:id]` |
| Tasks | `GET/POST /api/v1/patients/:patientId/tasks`, `PATCH /tasks/:id/complete` |
| Locations | `GET/POST/DELETE /api/v1/patients/:patientId/locations[/:id]` |
| Alerts | `GET/POST/DELETE /api/v1/patients/:patientId/alerts[/:id]` |
| Doctors | `GET/POST/DELETE /api/v1/patients/:patientId/doctors[/:id]` |
| Overview | `GET /api/v1/patients/:patientId/overview` |

## AI

`POST /api/v1/ai/daily-recap` accepts `patientId` and ISO date. It returns HTTP 422 for insufficient source data and HTTP 503 when Gemini is unconfigured. `POST /api/v1/ai/chat` accepts `patientId` and a bounded `message`. Both use patient access checks and rate limits.

Routes not listed here are not implemented and must not be represented as available in a production UI.
