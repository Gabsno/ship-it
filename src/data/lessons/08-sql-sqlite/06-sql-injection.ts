import type { Lesson } from '@/types/lesson';

export const M8_L6_SQL_INJECTION: Lesson = {
  id: 'm8-l6-sql-injection',
  moduleId: 'sql-sqlite',
  title: 'SQL injection and parameterised queries',
  objective: 'Understand the most famous database vulnerability — and the one-line fix.',
  estimatedMinutes: 8,
  blocks: [
    {
      type: 'explain',
      id: 'm8-l6-e1',
      listen: true,
      markdown: `## The mistake

\`\`\`js
// 🚨 NEVER do this
const email = req.body.email;
const sql = "SELECT * FROM users WHERE email = '" + email + "'";
const user = db.prepare(sql).get();
\`\`\`

You're concatenating user input straight into SQL. If the user submits:

\`\`\`
email = ' OR 1=1 --
\`\`\`

The string becomes:

\`\`\`sql
SELECT * FROM users WHERE email = '' OR 1=1 --'
\`\`\`

\`OR 1=1\` is always true — the query returns every user. The \`--\`
comments out the rest. You just leaked the user table.

Worse versions can DROP your tables, INSERT admin users, or extract
hashed passwords. **This is the famous SQL injection attack.** It's
been ranked one of the top web vulnerabilities for two decades.`,
    },
    {
      type: 'explain',
      id: 'm8-l6-e2',
      listen: true,
      markdown: `## The fix — parameterised queries

Use placeholders. Pass the value as a separate argument:

\`\`\`js
// ✅ safe
const user = db.prepare('SELECT * FROM users WHERE email = ?')
  .get(req.body.email);
\`\`\`

The \`?\` is a **bind parameter**. The database engine receives the
query and the value separately and treats the value as data, not SQL.
No amount of cleverness in the input can break out of the value slot.

This is exactly what \`.get(...)\`, \`.all(...)\`, and \`.run(...)\` in
\`better-sqlite3\` do for you. **Always use them with placeholders.**

Multiple parameters work the same way, in order:

\`\`\`js
db.prepare('UPDATE todos SET title = ?, done = ? WHERE id = ?')
  .run('buy oat milk', 1, 42);
\`\`\`

You can also use named parameters if you prefer:

\`\`\`js
db.prepare('UPDATE todos SET title = @title, done = @done WHERE id = @id')
  .run({ title: 'buy oat milk', done: 1, id: 42 });
\`\`\``,
    },
    {
      type: 'readthis',
      id: 'm8-l6-r1',
      language: 'js',
      code: `// Code A
const title = req.body.title;
db.prepare(\`INSERT INTO todos (title) VALUES ('\${title}')\`).run();

// Code B
db.prepare('INSERT INTO todos (title) VALUES (?)').run(req.body.title);`,
      question: 'Which is safe?',
      options: [
        'Both — better-sqlite3 escapes everything automatically',
        'Only A',
        'Only B',
        'Neither — you should never accept user input in SQL',
      ],
      answerIndex: 2,
      explanation:
        'Code A interpolates user input directly into the SQL string with template literals — the engine sees it as SQL. Code B uses a placeholder; the engine sees it as a value. **B is the only safe pattern.**',
    },
    {
      type: 'explain',
      id: 'm8-l6-e3',
      listen: true,
      markdown: `## You've now finished Module 8

You can write tables, query them, link them with foreign keys, join
across them, speed them up with indexes, wrap multi-step changes in
transactions, and talk to them from Node safely.

That's enough SQL to ship **BA-2 (Todo API)** and the data layer of
**BA-3 (Expense tracker)**. The advanced stuff — window functions,
CTEs, query plans — comes later when a real query gets slow.

Next: Module 9, React.`,
    },
  ],
};
