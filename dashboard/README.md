PMS Demo Dashboard

This is a small, self-contained static demo of a Performance Management System dashboard.

Files:
- `index.html` — main dashboard page
- `styles.css` — simple styles
- `app.js` — demo data + Chart.js charts

How to run:

1. From the repo root, start a simple static server in the `dashboard` folder:

```bash
cd dashboard
# Python 3 built-in server (recommended)
python3 -m http.server 8000

# OR using Node's http-server (if installed)
# npx http-server -p 8000
```

2. Open `http://localhost:8000` in your browser.

Next steps you might ask me to do:
- Convert this into a React/Vite frontend connected to a backend API
- Add authentication and role-based views (manager vs employee)
- Replace demo data with API calls and wire up goal/review CRUD
