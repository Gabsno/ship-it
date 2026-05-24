import type { BuildAlong } from '@/types/buildAlong';

export const BA_3_EXPENSE_TRACKER: BuildAlong = {
  id: 'ba-3-expense-tracker',
  title: 'Build-Along #3 — Expense tracker',
  summary:
    'React + Express + SQLite + JWT. Register, log in, add expenses, list and filter. The integration leap — your first real full-stack app.',
  unlockedByModule: 'auth-jwt',
  estimatedHours: 12,
  rules: [
    'React frontend (Vite) + Express/SQLite backend (reuse BA-2 as the starting backend).',
    'JWT for auth. bcrypt for password hashing.',
    'No AI assistance. No Copilot. No ChatGPT. No Claude.',
    'No CSS frameworks beyond plain CSS or Tailwind — choose one.',
    'You will be slower than at BA-1 and BA-2. That is the point.',
  ],
  spec: `## What you're building

A real, usable expense tracker. A user can sign up, log in, add expenses
with a date and category, see a list of their own expenses, and filter
by date range.

## Required features

### Backend (extend BA-2's setup)

- \`POST /auth/register\` — { email, password } → creates user (hashed
  password), returns JWT.
- \`POST /auth/login\` — { email, password } → returns JWT.
- Middleware that reads \`Authorization: Bearer <token>\` and attaches
  \`req.user\`.
- \`GET /expenses\` — protected. Returns the logged-in user's expenses.
  Query params: \`?from=YYYY-MM-DD&to=YYYY-MM-DD\` for date filtering.
- \`POST /expenses\` — protected. Creates an expense for the logged-in user.
- \`DELETE /expenses/:id\` — protected. Only deletes if the expense
  belongs to the logged-in user.

### Frontend

- Login + Register pages.
- After login, store the JWT in localStorage.
- Expenses page: add-form on top, list below, date-range filter at the top.
- Logout button clears the token and redirects to /login.

## Hard constraints

- React 18 + Vite. No Next.js, no CRA.
- React Router for routing.
- \`fetch\` for API calls (no axios).
- Plain CSS or Tailwind — your call.

## Done means

- You can register a brand-new user from the UI.
- After login, you stay logged in across reloads (token persists).
- Two different users see two different expense lists.
- The date filter actually filters.
- Logout works and protected routes redirect.`,
  milestones: [
    { id: 'ms-1', title: 'Scaffold the React frontend with Vite + React Router' },
    { id: 'ms-2', title: 'Add bcrypt + jsonwebtoken to the BA-2 backend' },
    { id: 'ms-3', title: 'POST /auth/register works (returns a token)' },
    { id: 'ms-4', title: 'POST /auth/login works (returns a token)' },
    { id: 'ms-5', title: 'Auth middleware validates Bearer tokens' },
    { id: 'ms-6', title: 'Expenses table with a user_id foreign key' },
    { id: 'ms-7', title: 'GET /expenses returns only the logged-in user\'s rows' },
    { id: 'ms-8', title: 'POST /expenses creates a row tied to the logged-in user' },
    { id: 'ms-9', title: 'DELETE /expenses/:id enforces ownership' },
    { id: 'ms-10', title: 'Frontend Login + Register pages, token stored in localStorage' },
    { id: 'ms-11', title: 'Expenses page: add-form, list, delete button' },
    { id: 'ms-12', title: 'Date-range filter wired to GET /expenses query params' },
  ],
  starterFiles: [
    {
      path: 'README.md',
      language: 'md',
      content: `# BA-3 — Expense tracker

Two projects in one repo:

\`\`\`
expense-tracker/
├── server/       # extends BA-2's Express + SQLite
│   ├── index.js
│   ├── auth.js
│   └── package.json
└── web/          # new React + Vite app
    ├── src/
    └── package.json
\`\`\`

## Running

\`\`\`bash
# terminal 1
cd server && npm install && npm start

# terminal 2
cd web && npm install && npm run dev
\`\`\`

## Milestones

- [ ] Scaffold React + Vite frontend
- [ ] bcrypt + jsonwebtoken installed in server
- [ ] POST /auth/register
- [ ] POST /auth/login
- [ ] Auth middleware
- [ ] Expenses table with user_id FK
- [ ] GET /expenses (filtered to logged-in user)
- [ ] POST /expenses
- [ ] DELETE /expenses/:id (ownership check)
- [ ] Frontend Login + Register pages, token in localStorage
- [ ] Expenses page: add, list, delete
- [ ] Date range filter

## Rules

- Real JWT, real bcrypt. No fake "session = user_id" shortcuts.
- No AI assistance.
- Two users must see two different lists. This is the test that owns BA-3.
`,
    },
  ],
};
