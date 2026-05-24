import type { Lesson } from '@/types/lesson';

export const M8_L1_THE_FOUR_VERBS: Lesson = {
  id: 'm8-l1-the-four-verbs',
  moduleId: 'sql-sqlite',
  title: 'The four verbs — SELECT, INSERT, UPDATE, DELETE',
  objective: 'Read and write the core SQL operations.',
  estimatedMinutes: 8,
  blocks: [
    {
      type: 'explain',
      id: 'm8-l1-e1',
      listen: true,
      markdown: `## Why SQL

A relational database stores data in **tables**. Each table has columns
(the shape) and rows (the data). You talk to it with **SQL** — a language
designed in the 1970s and still everywhere.

**SQLite** is the friendliest dialect to learn. It stores the whole
database in one file. No server. \`better-sqlite3\` is the Node library
that talks to a SQLite file.

The four verbs that cover 95% of all real code:

- \`SELECT\` — read.
- \`INSERT\` — create.
- \`UPDATE\` — change existing rows.
- \`DELETE\` — remove rows.`,
    },
    {
      type: 'explain',
      id: 'm8-l1-e2',
      listen: true,
      markdown: `### SELECT — read rows

\`\`\`sql
SELECT * FROM todos;
\`\`\`

\`*\` means "every column." The result is every row of the todos table.

You usually want to filter:

\`\`\`sql
SELECT id, title FROM todos WHERE done = 0;
\`\`\`

- \`SELECT id, title\` — only return those two columns.
- \`FROM todos\` — from this table.
- \`WHERE done = 0\` — only rows where the \`done\` column is 0.

You can also order and limit:

\`\`\`sql
SELECT * FROM todos
WHERE done = 0
ORDER BY created_at DESC
LIMIT 10;
\`\`\`

Most-recently-created undone todos, ten at most. This is roughly the
shape of every "list" query you'll write.`,
    },
    {
      type: 'explain',
      id: 'm8-l1-e3',
      listen: true,
      markdown: `### INSERT, UPDATE, DELETE

**Create a row:**

\`\`\`sql
INSERT INTO todos (title, done)
VALUES ('buy milk', 0);
\`\`\`

You list the columns, then the values to put in them.

**Change a row:**

\`\`\`sql
UPDATE todos
SET done = 1
WHERE id = 42;
\`\`\`

\`SET column = value\`. **Always include a \`WHERE\`** — without it, you
update *every* row. (The number of careers ended by \`UPDATE\` without
\`WHERE\` is uncountable.)

**Remove a row:**

\`\`\`sql
DELETE FROM todos
WHERE id = 42;
\`\`\`

Same rule. Without \`WHERE\` you delete the entire table's contents.`,
    },
    {
      type: 'readthis',
      id: 'm8-l1-r1',
      language: 'sql',
      code: `SELECT title FROM todos WHERE done = 1 ORDER BY id DESC LIMIT 3;`,
      question: 'What does this query return?',
      options: [
        'All completed todos, oldest first',
        'The titles of the 3 most recently inserted completed todos',
        'The first 3 todos in the table',
        'A single row with all titles concatenated',
      ],
      answerIndex: 1,
      explanation:
        '`WHERE done = 1` filters to completed. `ORDER BY id DESC` sorts newest first (highest id). `LIMIT 3` takes the first three. We select only the `title` column.',
    },
  ],
};
