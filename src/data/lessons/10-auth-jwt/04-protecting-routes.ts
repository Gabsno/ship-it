import type { Lesson } from '@/types/lesson';

export const M10_L4_PROTECTING_ROUTES: Lesson = {
  id: 'm10-l4-protecting-routes',
  moduleId: 'auth-jwt',
  title: 'Protecting routes with middleware',
  objective: 'Reject unauthorised requests. Attach req.user. Enforce ownership.',
  estimatedMinutes: 8,
  blocks: [
    {
      type: 'explain',
      id: 'm10-l4-e1',
      listen: true,
      markdown: `## The middleware

\`\`\`js
import jwt from 'jsonwebtoken';

export function requireAuth(req, res, next) {
  const header = req.headers.authorization;
  if (!header || !header.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'no token' });
  }
  const token = header.slice(7);   // strip "Bearer "
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch {
    return res.status(401).json({ error: 'invalid or expired token' });
  }
}
\`\`\`

Apply it to specific routes:

\`\`\`js
app.get('/me', requireAuth, (req, res) => {
  const user = db.prepare('SELECT id, email FROM users WHERE id = ?')
    .get(req.user.userId);
  res.json(user);
});
\`\`\`

Or to a whole router:

\`\`\`js
app.use('/api/expenses', requireAuth, expensesRouter);
\`\`\`

Every route inside \`expensesRouter\` now has \`req.user\` populated,
or never runs at all.`,
    },
    {
      type: 'explain',
      id: 'm10-l4-e2',
      listen: true,
      markdown: `### Ownership checks — beyond "logged in"

\`requireAuth\` proves the user is logged in. It doesn't prove they
own the thing they're trying to access. That's a separate check inside
each route:

\`\`\`js
router.get('/:id', requireAuth, (req, res) => {
  const expense = db.prepare('SELECT * FROM expenses WHERE id = ?')
    .get(req.params.id);
  if (!expense) {
    return res.status(404).json({ error: 'not found' });
  }
  if (expense.user_id !== req.user.userId) {
    return res.status(403).json({ error: 'forbidden' });
  }
  res.json(expense);
});
\`\`\`

Or fold ownership into the query — cleaner and prevents leaking
existence:

\`\`\`js
router.get('/:id', requireAuth, (req, res) => {
  const expense = db.prepare(
    'SELECT * FROM expenses WHERE id = ? AND user_id = ?'
  ).get(req.params.id, req.user.userId);
  if (!expense) {
    return res.status(404).json({ error: 'not found' });
  }
  res.json(expense);
});
\`\`\`

This returns 404 even if the expense exists but belongs to someone
else. From the client's perspective they're indistinguishable —
"doesn't exist for you."`,
    },
    {
      type: 'explain',
      id: 'm10-l4-e3',
      listen: true,
      markdown: `## Frontend side — sending the token

Once the user logs in, save the token (localStorage is fine for
Ship It's scope) and attach it on every subsequent request:

\`\`\`js
async function api(path, options = {}) {
  const token = localStorage.getItem('token');
  const headers = {
    'Content-Type': 'application/json',
    ...options.headers,
    ...(token ? { Authorization: \`Bearer \${token}\` } : {}),
  };
  const res = await fetch(path, { ...options, headers });
  if (res.status === 401) {
    localStorage.removeItem('token');
    window.location.href = '/login';
    return;
  }
  if (!res.ok) throw new Error('HTTP ' + res.status);
  return res.json();
}
\`\`\`

Wrap fetch in a helper like this and you don't have to remember the
auth header at every call site.

That's all of Module 10. Combine it with Module 9 and you have what
you need for BA-3.`,
    },
    {
      type: 'readthis',
      id: 'm10-l4-r1',
      language: 'js',
      code: `router.delete('/:id', requireAuth, (req, res) => {
  const info = db.prepare('DELETE FROM expenses WHERE id = ?')
    .run(req.params.id);
  if (info.changes === 0) {
    return res.status(404).json({ error: 'not found' });
  }
  res.status(204).end();
});`,
      question: 'What\'s the security bug?',
      options: [
        'No bug — requireAuth checks for a valid token',
        'requireAuth proves login but doesn\'t enforce ownership. Any logged-in user can delete any expense.',
        'It should return 200 not 204',
        'It needs to use POST instead of DELETE',
      ],
      answerIndex: 1,
      explanation:
        'Logged-in is not the same as authorized. Add `AND user_id = ?` to the DELETE and pass `req.user.userId`. Otherwise any user with a valid token can delete anyone\'s expense by guessing IDs.',
    },
  ],
};
