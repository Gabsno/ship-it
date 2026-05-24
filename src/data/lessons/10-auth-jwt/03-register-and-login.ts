import type { Lesson } from '@/types/lesson';

export const M10_L3_REGISTER_AND_LOGIN: Lesson = {
  id: 'm10-l3-register-and-login',
  moduleId: 'auth-jwt',
  title: 'Register and login routes end to end',
  objective: 'Wire bcrypt + jwt into Express. The exact pattern you\'ll use in BA-3.',
  estimatedMinutes: 9,
  blocks: [
    {
      type: 'explain',
      id: 'm10-l3-e1',
      listen: true,
      markdown: `## The two routes that own auth

\`\`\`js
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// POST /auth/register
router.post('/register', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: 'email and password required' });
  }
  try {
    const hash = await bcrypt.hash(password, 10);
    const info = db.prepare(
      'INSERT INTO users (email, password_hash) VALUES (?, ?)'
    ).run(email, hash);
    const token = jwt.sign(
      { userId: info.lastInsertRowid },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );
    res.status(201).json({ token });
  } catch (err) {
    if (err.code === 'SQLITE_CONSTRAINT_UNIQUE') {
      return res.status(409).json({ error: 'email already in use' });
    }
    throw err;
  }
});
\`\`\``,
    },
    {
      type: 'explain',
      id: 'm10-l3-e2',
      listen: true,
      markdown: `\`\`\`js
// POST /auth/login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: 'email and password required' });
  }
  const user = db.prepare('SELECT * FROM users WHERE email = ?').get(email);
  const ok = user && await bcrypt.compare(password, user.password_hash);
  if (!ok) {
    return res.status(401).json({ error: 'invalid credentials' });
  }
  const token = jwt.sign(
    { userId: user.id },
    process.env.JWT_SECRET,
    { expiresIn: '7d' }
  );
  res.json({ token });
});
\`\`\`

The whole auth surface is **two routes and ~20 lines of code**.
Don't let people tell you it's harder than this. (Adding password
reset, email verification, OAuth — that's harder. Plain register/login
is straightforward.)`,
    },
    {
      type: 'explain',
      id: 'm10-l3-e3',
      listen: true,
      markdown: `### A few details that matter

**Same error for "user not found" and "wrong password."** Don't reveal
which one. Return \`401 invalid credentials\` for both — otherwise an
attacker can enumerate valid emails by watching error messages.

**409 for duplicate email** on register. Some folks return 400, some
422 — 409 (Conflict) is technically correct for "this resource already
exists."

**Hash the password BEFORE the INSERT.** Don't store plain-text "just
for now to test." The first leak makes you wish you'd done it right.

**Return only the token.** Not the user record (definitely not the
\`password_hash\`). The client uses the token to fetch user data via
a separate \`/me\` endpoint that uses the auth middleware (next lesson).`,
    },
  ],
};
