import type { Lesson } from '@/types/lesson';

export const M10_L1_INTRO: Lesson = {
  id: 'm10-l1-intro',
  moduleId: 'auth-jwt',
  title: 'Auth and JWT — module roadmap',
  objective: 'Get the mental model for password hashing and token-based auth.',
  estimatedMinutes: 8,
  blocks: [
    {
      type: 'explain',
      id: 'm10-l1-e1',
      listen: true,
      markdown: `## Two ideas. That's it.

### 1. Never store raw passwords.

If your database leaks, every password leaks. Store a **hash** — a
one-way scramble — and verify by hashing the user's typed password and
comparing.

You'll use \`bcrypt\` for this. \`bcrypt.hash(password, 10)\` returns
a hash. \`bcrypt.compare(typed, stored)\` returns true/false.

### 2. A token says "this person is logged in"

After login, the server gives the client a signed token (a **JWT**).
The client sends that token on every future request. The server
verifies the signature and trusts the user info inside.

JWTs are signed, not encrypted. Anyone can read the contents. **What
the signature does is prove no one tampered with it.**

The client typically stores the token in localStorage and sends it as:

\`\`\`
Authorization: Bearer <token>
\`\`\``,
    },
    {
      type: 'explain',
      id: 'm10-l1-e2',
      listen: true,
      markdown: `## A taste — register + login

\`\`\`js
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// register
const hash = await bcrypt.hash(req.body.password, 10);
db.prepare('INSERT INTO users (email, password_hash) VALUES (?, ?)')
  .run(req.body.email, hash);

// login
const user = db.prepare('SELECT * FROM users WHERE email = ?').get(req.body.email);
const ok = user && await bcrypt.compare(req.body.password, user.password_hash);
if (!ok) return res.status(401).json({ error: 'invalid credentials' });

const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
  expiresIn: '7d',
});
res.json({ token });
\`\`\`

Six lines per side. That's auth.`,
    },
    {
      type: 'explain',
      id: 'm10-l1-e3',
      listen: true,
      markdown: `## What this module will cover

~8 lessons:

1. Hashing — what it is, why bcrypt.
2. JWT structure — header, payload, signature.
3. Register flow end to end.
4. Login flow end to end.
5. Auth middleware that extracts \`req.user\` from the token.
6. Protecting routes.
7. Token storage on the frontend (localStorage vs httpOnly cookies).
8. Common auth bugs (DebugThis).

This module + Module 9 (React) unlock **BA-3 (Expense tracker)**.

## TODO(gabs) — content lands in a future drop`,
    },
  ],
};
