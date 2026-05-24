import type { Lesson } from '@/types/lesson';

export const M8_L1_INTRO: Lesson = {
  id: 'm8-l1-intro',
  moduleId: 'sql-sqlite',
  title: 'SQL and SQLite — module roadmap',
  objective: 'Understand what SQL is, why SQLite, and read your first query.',
  estimatedMinutes: 8,
  blocks: [
    {
      type: 'explain',
      id: 'm8-l1-e1',
      listen: true,
      markdown: `## SQL — talking to databases

A **database** stores data in a way that survives your program shutting
down. The most common kind is **relational** — data lives in tables
with rows and columns, like a spreadsheet.

**SQL** (Structured Query Language) is how you talk to a relational
database. Four verbs do 95% of the work:

- \`SELECT\` — read.
- \`INSERT\` — create.
- \`UPDATE\` — change existing rows.
- \`DELETE\` — remove.

**SQLite** is a tiny relational database that stores everything in a
single file. No server, no setup. It's perfect for learning and for
small-to-medium apps. BA-2's todos.db is a SQLite file.`,
    },
    {
      type: 'explain',
      id: 'm8-l1-e2',
      listen: true,
      markdown: `## A taste — SQL by example

Create a table:

\`\`\`sql
CREATE TABLE todos (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  done INTEGER DEFAULT 0,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP
);
\`\`\`

Add a row:

\`\`\`sql
INSERT INTO todos (title) VALUES ('buy milk');
\`\`\`

Read rows:

\`\`\`sql
SELECT * FROM todos WHERE done = 0;
\`\`\`

Change a row:

\`\`\`sql
UPDATE todos SET done = 1 WHERE id = 1;
\`\`\`

Delete a row:

\`\`\`sql
DELETE FROM todos WHERE id = 1;
\`\`\``,
    },
    {
      type: 'explain',
      id: 'm8-l1-e3',
      listen: true,
      markdown: `## What this module will cover

~10 lessons. Topics in order:

1. The 4 verbs in detail (today's appetiser).
2. Data types (INTEGER, TEXT, REAL, BLOB).
3. Primary keys and AUTOINCREMENT.
4. Foreign keys (linking tables — users to expenses).
5. JOIN — combining data across tables.
6. Indexes (when queries get slow).
7. Transactions (all-or-nothing changes).
8. Using SQLite from Node via \`better-sqlite3\`.
9. Parameterised queries (avoiding SQL injection).
10. Common SQL bugs.

This module unlocks **BA-2 (Todo API)** — and BA-3 and BA-4 use the
same patterns.

## TODO(gabs) — content lands in a future drop

For now you have the shape and a taste. If you want to push ahead,
BA-2's spec walks you through CREATE TABLE, INSERT, SELECT, UPDATE,
and DELETE in context.`,
    },
  ],
};
