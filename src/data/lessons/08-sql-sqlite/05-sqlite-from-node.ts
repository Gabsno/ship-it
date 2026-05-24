import type { Lesson } from '@/types/lesson';

export const M8_L5_SQLITE_FROM_NODE: Lesson = {
  id: 'm8-l5-sqlite-from-node',
  moduleId: 'sql-sqlite',
  title: 'SQLite from Node with better-sqlite3',
  objective: 'Open a database, run queries, read results from JavaScript.',
  estimatedMinutes: 9,
  blocks: [
    {
      type: 'explain',
      id: 'm8-l5-e1',
      listen: true,
      markdown: `## better-sqlite3 — synchronous, simple, fast

\`\`\`bash
npm install better-sqlite3
\`\`\`

\`\`\`js
import Database from 'better-sqlite3';
const db = new Database('todos.db');
\`\`\`

That opens (or creates) \`todos.db\` in the project root. From here on,
every query is one method call.

Unlike most Node libraries, \`better-sqlite3\` is **synchronous** — no
promises, no callbacks. It works because SQLite is so fast for typical
app loads that the synchronous API is faster than async overhead. Your
Express handlers don't need \`await\` for queries.

### Setting up the schema once

\`\`\`js
db.exec(\`
  CREATE TABLE IF NOT EXISTS todos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    done INTEGER NOT NULL DEFAULT 0
  );
\`);
\`\`\`

\`db.exec\` runs SQL that returns no rows — CREATE TABLE, CREATE INDEX,
PRAGMA, DROP. Wrap your whole schema in one call at startup; the
\`IF NOT EXISTS\` makes it safe to re-run.`,
    },
    {
      type: 'explain',
      id: 'm8-l5-e2',
      listen: true,
      markdown: `### Prepared statements — the right way to query

For every query that returns or accepts data, **prepare** the SQL once
and reuse the prepared statement:

\`\`\`js
const listAll = db.prepare('SELECT * FROM todos ORDER BY id DESC');
const getOne = db.prepare('SELECT * FROM todos WHERE id = ?');
const insert = db.prepare('INSERT INTO todos (title) VALUES (?)');
const update = db.prepare('UPDATE todos SET title = ?, done = ? WHERE id = ?');
const remove = db.prepare('DELETE FROM todos WHERE id = ?');
\`\`\`

Then run them:

\`\`\`js
const rows  = listAll.all();           // many rows
const row   = getOne.get(42);          // one row, or undefined
const info  = insert.run('buy milk');  // returns { changes, lastInsertRowid }
update.run('buy oat milk', 0, 42);
remove.run(42);
\`\`\`

Three methods to remember:

- **\`.all(...)\`** — for SELECTs that return many rows (returns an array).
- **\`.get(...)\`** — for SELECTs that return one row (or undefined).
- **\`.run(...)\`** — for INSERT/UPDATE/DELETE (returns metadata).

The \`?\` placeholders in the SQL get replaced by the arguments to
\`all/get/run\`. **Never use string concatenation to build SQL** —
next lesson.`,
    },
    {
      type: 'typealong',
      id: 'm8-l5-ta1',
      language: 'js',
      instructions: 'A complete tiny Node + SQLite script.',
      code: `import Database from 'better-sqlite3';

const db = new Database('todos.db');

db.exec(\`
  CREATE TABLE IF NOT EXISTS todos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL
  );
\`);

const insert = db.prepare('INSERT INTO todos (title) VALUES (?)');
const list   = db.prepare('SELECT * FROM todos');

insert.run('buy milk');
insert.run('write code');

console.log(list.all());`,
    },
  ],
};
