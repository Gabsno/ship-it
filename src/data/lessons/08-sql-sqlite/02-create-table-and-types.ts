import type { Lesson } from '@/types/lesson';

export const M8_L2_CREATE_TABLE_AND_TYPES: Lesson = {
  id: 'm8-l2-create-table-and-types',
  moduleId: 'sql-sqlite',
  title: 'CREATE TABLE, types, and constraints',
  objective: 'Design a schema that prevents bad data getting in.',
  estimatedMinutes: 9,
  blocks: [
    {
      type: 'explain',
      id: 'm8-l2-e1',
      listen: true,
      markdown: `## Defining a table

\`\`\`sql
CREATE TABLE todos (
  id          INTEGER PRIMARY KEY AUTOINCREMENT,
  title       TEXT NOT NULL,
  done        INTEGER NOT NULL DEFAULT 0,
  created_at  TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);
\`\`\`

For each column you say:

1. The name (\`id\`, \`title\`, ...).
2. The type (\`INTEGER\`, \`TEXT\`, etc).
3. Optional **constraints** — rules the database enforces.

SQLite types:

- \`INTEGER\` — whole numbers.
- \`TEXT\` — strings.
- \`REAL\` — floating-point numbers.
- \`BLOB\` — raw bytes (rarely used for app code).

SQLite has no boolean type. Use \`INTEGER\` with 0/1.

There's no native \`DATETIME\` either — store dates as \`TEXT\` in ISO
8601 format (\`'2026-05-24T12:00:00Z'\`). Sortable and human-readable.`,
    },
    {
      type: 'explain',
      id: 'm8-l2-e2',
      listen: true,
      markdown: `### Constraints — the database's first line of defence

- **\`PRIMARY KEY\`** — this column is the unique id. Most tables have one.
- **\`AUTOINCREMENT\`** — SQLite picks the next integer for you (used
  with PRIMARY KEY).
- **\`NOT NULL\`** — this column must have a value. Without it, you can
  \`INSERT\` rows that leave this column empty (\`NULL\`).
- **\`DEFAULT <value>\`** — if no value is provided on \`INSERT\`,
  use this.
- **\`UNIQUE\`** — no two rows can have the same value here. Use this
  on emails, usernames, slugs.

Validate at the database level **first**. Your Node code might forget
to check; the database won't.

\`\`\`sql
CREATE TABLE users (
  id       INTEGER PRIMARY KEY AUTOINCREMENT,
  email    TEXT NOT NULL UNIQUE,
  password TEXT NOT NULL
);
\`\`\`

Inserting a duplicate email throws a constraint violation. That's good —
you catch the error in Node and return 400 to the client.`,
    },
    {
      type: 'readthis',
      id: 'm8-l2-r1',
      language: 'sql',
      code: `CREATE TABLE notes (
  id    INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  body  TEXT
);

INSERT INTO notes (title) VALUES ('first');
INSERT INTO notes (body) VALUES ('orphan');`,
      question: 'What happens with the two INSERT statements?',
      options: [
        'Both succeed',
        'Both fail',
        'The first succeeds, the second fails because title is NOT NULL',
        'The second succeeds, the first fails because body is required',
      ],
      answerIndex: 2,
      explanation:
        '`body` is nullable (no NOT NULL), so the first INSERT (no body) is fine. `title` is NOT NULL, so the second (no title) fails.',
    },
  ],
};
