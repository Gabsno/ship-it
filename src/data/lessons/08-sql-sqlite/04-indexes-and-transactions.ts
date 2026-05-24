import type { Lesson } from '@/types/lesson';

export const M8_L4_INDEXES_AND_TRANSACTIONS: Lesson = {
  id: 'm8-l4-indexes-and-transactions',
  moduleId: 'sql-sqlite',
  title: 'Indexes and transactions',
  objective: 'Make common queries fast. Wrap multi-step writes in transactions.',
  estimatedMinutes: 8,
  blocks: [
    {
      type: 'explain',
      id: 'm8-l4-e1',
      listen: true,
      markdown: `## Indexes — your query's shortcut

Without an index, the database walks every row to answer a \`WHERE\`
query. With a million rows, that's slow.

An **index** is a separate sorted lookup table the database maintains
for one or more columns. Queries that filter on those columns become
near-instant.

\`\`\`sql
CREATE INDEX idx_expenses_user_id ON expenses(user_id);
\`\`\`

After that, \`WHERE user_id = ?\` queries are fast no matter how many
rows the table has.

Index every foreign key. Index every column you filter or sort by.
Don't index everything — indexes cost space and slow down writes
(every insert/update has to update the index too).

\`\`\`sql
CREATE UNIQUE INDEX idx_users_email ON users(email);
\`\`\`

\`UNIQUE INDEX\` does double duty: fast lookups AND enforces no duplicates.
Often the easiest way to express a uniqueness constraint after the table
already exists.`,
    },
    {
      type: 'explain',
      id: 'm8-l4-e2',
      listen: true,
      markdown: `## Transactions — all-or-nothing changes

A transaction groups multiple SQL statements into a single atomic unit.
Either all of them apply, or none of them do.

\`\`\`sql
BEGIN;
UPDATE accounts SET balance = balance - 100 WHERE id = 1;
UPDATE accounts SET balance = balance + 100 WHERE id = 2;
COMMIT;
\`\`\`

If the second \`UPDATE\` fails (the receiving account doesn't exist,
say), \`ROLLBACK\` undoes the first one. The first account didn't lose
its 100. The database is never in a half-finished state.

For BA-2 (Todo API), single-row writes don't need transactions. For
anything with multiple steps — transferring money, inserting a user
plus a session, creating an expense and updating a totals cache —
wrap it in a transaction.

In \`better-sqlite3\`, transactions are dead simple:

\`\`\`js
const transfer = db.transaction((from, to, amount) => {
  db.prepare('UPDATE accounts SET balance = balance - ? WHERE id = ?').run(amount, from);
  db.prepare('UPDATE accounts SET balance = balance + ? WHERE id = ?').run(amount, to);
});

transfer(1, 2, 100);   // either both updates run, or neither does
\`\`\``,
    },
    {
      type: 'readthis',
      id: 'm8-l4-r1',
      language: 'sql',
      code: `BEGIN;
INSERT INTO users (email) VALUES ('a@example.com');
INSERT INTO users (email) VALUES ('a@example.com');
COMMIT;`,
      question: 'Assuming users.email has a UNIQUE constraint, what happens?',
      options: [
        'Both rows are inserted',
        'The first succeeds, the second fails, but the first stays',
        'The first succeeds, the second fails, and the transaction rolls back the first',
        'Neither runs because COMMIT must come before INSERT',
      ],
      answerIndex: 2,
      explanation:
        'The second INSERT throws a UNIQUE constraint violation. SQLite rolls back the transaction — the first INSERT is undone. Same email never gets inserted.',
    },
  ],
};
