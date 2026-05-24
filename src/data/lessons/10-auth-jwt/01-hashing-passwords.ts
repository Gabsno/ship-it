import type { Lesson } from '@/types/lesson';

export const M10_L1_HASHING_PASSWORDS: Lesson = {
  id: 'm10-l1-hashing-passwords',
  moduleId: 'auth-jwt',
  title: 'Hashing passwords with bcrypt',
  objective: 'Store passwords safely. Verify a typed password against the stored hash.',
  estimatedMinutes: 8,
  blocks: [
    {
      type: 'explain',
      id: 'm10-l1-e1',
      listen: true,
      markdown: `## Never store passwords. Store hashes.

A **hash** is a one-way scramble. \`bcrypt.hash('hunter2')\` produces
something like:

\`\`\`
$2b$10$N9qo8uLOickgx2ZMRZoMye.Qm5gKWxnZ.kQEHvxC4xL3kP6FRyy7e
\`\`\`

That's 60 characters of garbage. You can't reverse it. You can only
verify by hashing the typed password and comparing:

\`\`\`js
import bcrypt from 'bcrypt';

// REGISTER — store the hash
const hash = await bcrypt.hash(password, 10);
db.prepare('INSERT INTO users (email, password_hash) VALUES (?, ?)')
  .run(email, hash);

// LOGIN — verify against the stored hash
const user = db.prepare('SELECT * FROM users WHERE email = ?').get(email);
const ok = user && await bcrypt.compare(password, user.password_hash);
\`\`\`

The \`10\` in \`bcrypt.hash(password, 10)\` is the "cost factor." Higher
= slower = harder to brute-force. 10 is the modern default; 12 if you
want extra security and don't mind the ~250ms login delay.`,
    },
    {
      type: 'explain',
      id: 'm10-l1-e2',
      listen: true,
      markdown: `### Why not just plain text?

If your database leaks (and many do), every user's password is exposed.
And because people reuse passwords across sites, you've also compromised
their email, bank, everything. **The reputational damage is enormous.**

With bcrypt hashes:

- The attacker can't read the passwords. They'd have to brute-force
  each one — billions of guesses per password.
- The salt (the random bit bcrypt adds before hashing) means two users
  with the same password get different hashes. No rainbow tables.

### What about MD5 or SHA-256?

Fast hashes. Wrong for passwords. They're too fast — an attacker with
a GPU can try billions of guesses per second. bcrypt is deliberately
slow.

For Ship It and Viszio: bcrypt is the right answer. argon2 is also
fine if you want the newer alternative.`,
    },
    {
      type: 'readthis',
      id: 'm10-l1-r1',
      language: 'js',
      code: `async function login(req, res) {
  const { email, password } = req.body;
  const user = db.prepare('SELECT * FROM users WHERE email = ?').get(email);
  if (!user) return res.status(401).json({ error: 'invalid credentials' });
  if (user.password_hash === password) {
    return res.json({ ok: true });
  }
  return res.status(401).json({ error: 'invalid credentials' });
}`,
      question: 'What\'s wrong with this login handler?',
      options: [
        'Nothing — it correctly checks the password',
        'It compares the typed password to the stored hash with === instead of bcrypt.compare',
        'It should use res.send instead of res.json',
        'It should return 404 if the user is missing',
      ],
      answerIndex: 1,
      explanation:
        'You can\'t compare a plain-text password to a hash with ===. The hashes are intentionally not the same as the input. Use `await bcrypt.compare(password, user.password_hash)`.',
    },
  ],
};
