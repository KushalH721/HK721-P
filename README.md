# HK721-P — Performance Management System (Demo)

This repository contains a small demo Performance Management System (PMS).

Contents:
- `dashboard/` — static demo dashboard (HTML/CSS/JS + Chart.js)
- `backend/` — minimal Node/Express demo API storing data in `backend/data.json`
- `docker-compose.yml` — runs backend (port 4000) and static dashboard (port 8000)

Quick run (dev):

1. Start backend locally:

```bash
cd backend
npm install
npm start
```

2. Serve dashboard:

```bash
cd dashboard
python3 -m http.server 8000
# open http://localhost:8000
```

Run with Docker Compose:

```bash
docker compose up --build
# dashboard: http://localhost:8000
# backend: http://localhost:4000
```

CI: A simple GitHub Actions workflow is present at `.github/workflows/ci.yml`.

Notes:
- This is a demo; replace the JSON storage with a proper DB for production.
- JWT secret is `JWT_SECRET` env; change it before deploying.