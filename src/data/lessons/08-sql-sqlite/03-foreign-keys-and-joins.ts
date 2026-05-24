import type { Lesson } from '@/types/lesson';

export const M8_L3_FOREIGN_KEYS_AND_JOINS: Lesson = {
  id: 'm8-l3-foreign-keys-and-joins',
  moduleId: 'sql-sqlite',
  title: 'Foreign keys and JOINs',
  objective: 'Connect tables by id. Query across them in one statement.',
  estimatedMinutes: 10,
  blocks: [
    {
      type: 'explain',
      id: 'm8-l3-e1',
      listen: true,
      markdown: `## Two tables that know about each other

\`\`\`sql
CREATE TABLE users (
  id       INTEGER PRIMARY KEY AUTOINCREMENT,
  email    TEXT NOT NULL UNIQUE
);

CREATE TABLE expenses (
  id        INTEGER PRIMARY KEY AUTOINCREMENT,
  amount    REAL NOT NULL,
  user_id   INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE
);
\`\`\`

\`expenses.user_id\` is a **foreign key** — it points at \`users.id\`.
That single line buys you:

- A way to find who owns an expense.
- An integrity check — you can't insert an expense for a user that
  doesn't exist.
- \`ON DELETE CASCADE\` — when a user is deleted, their expenses are
  deleted too. (Alternatives: \`ON DELETE SET NULL\`, or default
  \`ON DELETE RESTRICT\` which blocks the delete.)

> SQLite note: foreign keys are off by default. Enable them once per
> connection with \`PRAGMA foreign_keys = ON;\`. \`better-sqlite3\`
> handles this for you in most setups.`,
    },
    {
      type: 'explain',
      id: 'm8-l3-e2',
      listen: true,
      markdown: `## JOIN — combining tables in one query

You want every expense alongside the user's email. Without JOIN you'd
need two queries. With JOIN it's one:

\`\`\`sql
SELECT
  expenses.id,
  expenses.amount,
  users.email
FROM expenses
INNER JOIN users ON users.id = expenses.user_id;
\`\`\`

Read it as: "for each row in expenses, find the matching row in users
where users.id = expenses.user_id, and combine them."

The result is one row per matched pair. If an expense has no matching
user (shouldn't happen with FKs, but bear with me), \`INNER JOIN\`
drops it. \`LEFT JOIN\` keeps it, with \`users.email\` as NULL.`,
    },
    {
      type: 'explain',
      id: 'm8-l3-e3',
      listen: true,
      markdown: `### Filtering joined data

Add a \`WHERE\` to filter the joined result:

\`\`\`sql
SELECT amount, email
FROM expenses
INNER JOIN users ON users.id = expenses.user_id
WHERE users.email = 'gabs@example.com'
ORDER BY expenses.amount DESC;
\`\`\`

This is the same shape you'll use in BA-3 — "list this user's expenses,
biggest first." The auth middleware sets \`req.user.id\` and you plug
that into a parameterised query (we'll cover that in lesson 6).

### Aliases for readability

Long table names get ugly. Aliases shorten them:

\`\`\`sql
SELECT e.amount, u.email
FROM expenses AS e
INNER JOIN users AS u ON u.id = e.user_id;
\`\`\`

\`AS\` is optional — \`expenses e\` works the same way. Once you've
seen a 5-table JOIN, you'll always use aliases.`,
    },
    {
      type: 'readthis',
      id: 'm8-l3-r1',
      language: 'sql',
      code: `SELECT COUNT(*) AS total, users.email
FROM expenses
INNER JOIN users ON users.id = expenses.user_id
GROUP BY users.id;`,
      question: 'What does this query return?',
      options: [
        'Every expense, alongside its user\'s email',
        'One row per user, showing how many expenses they have',
        'The total amount of all expenses',
        'Just user emails, no counts',
      ],
      answerIndex: 1,
      explanation:
        '`GROUP BY users.id` collapses all expenses for the same user into one row. `COUNT(*)` then counts the rows in each group. Classic "expenses per user" report.',
    },
  ],
};
