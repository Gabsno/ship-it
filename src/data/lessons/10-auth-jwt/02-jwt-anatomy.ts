import type { Lesson } from '@/types/lesson';

export const M10_L2_JWT_ANATOMY: Lesson = {
  id: 'm10-l2-jwt-anatomy',
  moduleId: 'auth-jwt',
  title: 'JWT — anatomy of a token',
  objective: 'Understand what\'s in a JWT and what the signature actually proves.',
  estimatedMinutes: 7,
  blocks: [
    {
      type: 'explain',
      id: 'm10-l2-e1',
      listen: true,
      markdown: `## A JWT is three base64 strings separated by dots

\`\`\`
eyJhbGciOi...  .  eyJ1c2VySWQ...  .  SflKxwRJSMe...
   header              payload              signature
\`\`\`

Decode the first two and you get JSON:

\`\`\`json
// header
{ "alg": "HS256", "typ": "JWT" }

// payload
{ "userId": 42, "email": "gabs@example.com", "iat": 1716537600 }
\`\`\`

The header says what algorithm signed the token. The payload is whatever
data you put in. **The payload is NOT encrypted** — anyone with the
token can read it. (Try it: paste a JWT into jwt.io.)

So what's the point of the signature?

The signature proves the token was issued by a server holding the
secret key. If an attacker tampers with the payload (\`"userId": 1\`
→ \`"userId": 999\`), the signature no longer matches. The server
rejects it on next request.`,
    },
    {
      type: 'explain',
      id: 'm10-l2-e2',
      listen: true,
      markdown: `### Signing and verifying in Node

\`\`\`bash
npm install jsonwebtoken
\`\`\`

\`\`\`js
import jwt from 'jsonwebtoken';

// SIGN — create a token
const token = jwt.sign(
  { userId: user.id, email: user.email },
  process.env.JWT_SECRET,
  { expiresIn: '7d' }
);

// VERIFY — read a token (throws if signature is bad or expired)
try {
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  console.log(decoded.userId);   // 42
} catch (err) {
  // bad token — reject the request
}
\`\`\`

Three things to know:

1. **The secret is global.** Same secret signs and verifies every token.
   Lose it = anyone can forge tokens. Treat it like a database password.
   Store it in \`.env\`, never commit it.
2. **\`expiresIn\`** sets a deadline. After it passes, \`verify\` throws.
   Use \`'7d'\` for app sessions, \`'15m'\` for short-lived API tokens.
3. **Payload should be small.** Just enough to look up the user
   (\`userId\` is plenty). Don't stuff the whole user object in there —
   the token gets long and bloats every request.`,
    },
    {
      type: 'readthis',
      id: 'm10-l2-r1',
      language: 'js',
      code: `const token = jwt.sign({ userId: 42 }, process.env.JWT_SECRET);

// later... a malicious client base64-edits the payload
// to change userId to 999 before sending the request`,
      question: 'What happens on the server when it gets the tampered token?',
      options: [
        'Server decodes it and uses userId 999 — you\'ve been compromised',
        'jwt.verify throws because the signature no longer matches the payload',
        'It returns a 200 with the wrong data',
        'Nothing — JWTs can\'t be tampered with at all',
      ],
      answerIndex: 1,
      explanation:
        'The signature is computed over the header + payload. Changing the payload invalidates the signature. `jwt.verify` throws, you catch it, you return 401. This is exactly why JWTs work — not because the contents are hidden, but because tampering is detectable.',
    },
  ],
};
