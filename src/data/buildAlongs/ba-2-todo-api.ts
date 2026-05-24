import type { BuildAlong } from '@/types/buildAlong';

export const BA_2_TODO_API: BuildAlong = {
  id: 'ba-2-todo-api',
  title: 'Build-Along #2 — Todo API',
  summary:
    'Node + Express + SQLite. CRUD endpoints for /todos. Persist to a SQLite file. Test with curl or Postman. No frontend.',
  unlockedByModule: 'sql-sqlite',
  estimatedHours: 6,
  rules: [
    'Vanilla Node + Express + better-sqlite3. No ORMs, no Prisma, no Drizzle.',
    'No AI assistance. No Copilot. No ChatGPT. No Claude.',
    'No frontend in this build-along. Test with curl or Postman.',
    'When you get stuck for 20+ minutes, write the question down, keep moving.',
  ],
  spec: `## What you're building

A small HTTP API for managing a list of todos. Five endpoints. Data
persists to a SQLite file on disk so the server can restart without
losing data.

## The five endpoints

| Method | Path             | What it does                       |
|--------|------------------|------------------------------------|
| GET    | /todos           | List all todos                     |
| GET    | /todos/:id       | Get one todo by id                 |
| POST   | /todos           | Create a todo (body: { title })    |
| PUT    | /todos/:id       | Update title or done (body: any)   |
| DELETE | /todos/:id       | Delete a todo                      |

## Data shape

A todo is:

\`\`\`json
{ "id": 1, "title": "Buy milk", "done": false, "createdAt": "..." }
\`\`\`

## Hard constraints

- One file (\`index.js\`) is enough — split only if you want to.
- The database is a single file: \`todos.db\` in the project root.
- Status codes matter: 201 after POST, 204 after DELETE, 404 when an
  id doesn't exist.

## Done means

You can run \`node index.js\`, then in another terminal hit each endpoint
with curl and get the expected responses. Stop the server. Start it again.
The todos you created are still there.`,
  milestones: [
    { id: 'ms-1', title: 'npm init -y, install express and better-sqlite3' },
    { id: 'ms-2', title: 'Boot an Express server that responds to GET / with hello' },
    { id: 'ms-3', title: 'Open a SQLite file and run CREATE TABLE for todos on startup' },
    { id: 'ms-4', title: 'GET /todos returns all rows as JSON' },
    { id: 'ms-5', title: 'POST /todos inserts a row, returns 201 with the new todo' },
    { id: 'ms-6', title: 'GET /todos/:id returns one row, or 404 if not found' },
    { id: 'ms-7', title: 'PUT /todos/:id updates title and/or done' },
    { id: 'ms-8', title: 'DELETE /todos/:id removes a row, returns 204' },
    { id: 'ms-9', title: 'Validation: POST without a title returns 400 with an error message' },
    { id: 'ms-10', title: 'Test the full flow with curl: create, list, update, delete, restart server, verify persistence' },
  ],
  starterFiles: [
    {
      path: 'package.json',
      language: 'json',
      content: `{
  "name": "todo-api",
  "version": "1.0.0",
  "type": "module",
  "main": "index.js",
  "scripts": {
    "start": "node index.js"
  },
  "dependencies": {
    "better-sqlite3": "^11.0.0",
    "express": "^4.19.0"
  }
}
`,
    },
    {
      path: 'index.js',
      language: 'js',
      content: `import express from 'express';
import Database from 'better-sqlite3';

const app = express();
app.use(express.json());

const db = new Database('todos.db');

// TODO: CREATE TABLE IF NOT EXISTS todos (...)

// Test endpoint to confirm the server boots
app.get('/', (req, res) => {
  res.send('todo api ok');
});

// TODO: GET /todos
// TODO: GET /todos/:id
// TODO: POST /todos
// TODO: PUT /todos/:id
// TODO: DELETE /todos/:id

const port = 3000;
app.listen(port, () => {
  console.log(\`listening on http://localhost:\${port}\`);
});
`,
    },
    {
      path: 'README.md',
      language: 'md',
      content: `# BA-2 — Todo API

\`\`\`bash
npm install
npm start
\`\`\`

Then in another terminal:

\`\`\`bash
curl http://localhost:3000/
curl -X POST http://localhost:3000/todos -H "Content-Type: application/json" -d '{"title":"buy milk"}'
curl http://localhost:3000/todos
\`\`\`

## Milestones

- [ ] npm init + install express, better-sqlite3
- [ ] Express boots, GET / returns hello
- [ ] SQLite open + CREATE TABLE on startup
- [ ] GET /todos
- [ ] POST /todos (201)
- [ ] GET /todos/:id (404 when missing)
- [ ] PUT /todos/:id
- [ ] DELETE /todos/:id (204)
- [ ] Validation: missing title returns 400
- [ ] Full flow with persistence test

## Rules

- Vanilla express + better-sqlite3. No ORMs.
- No AI assistance.
- One file is fine. Split only if you want.
- Stuck 20+ min: write the question down, keep moving.
`,
    },
  ],
};
