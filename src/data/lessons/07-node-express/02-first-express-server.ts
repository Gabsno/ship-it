import type { Lesson } from '@/types/lesson';

export const M7_L2_FIRST_EXPRESS_SERVER: Lesson = {
  id: 'm7-l2-first-express-server',
  moduleId: 'node-express',
  title: 'Your first Express server',
  objective: 'Write, run, and hit a tiny Express server.',
  estimatedMinutes: 8,
  blocks: [
    {
      type: 'explain',
      id: 'm7-l2-e1',
      listen: true,
      markdown: `## Three lines of Express

\`\`\`js
import express from 'express';
const app = express();
app.listen(3000);
\`\`\`

That's a server. It does nothing useful — every request returns "404
Not Found" — but it's running. To actually respond, you add a **route**:

\`\`\`js
import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('hello, world');
});

app.listen(3000, () => {
  console.log('listening on http://localhost:3000');
});
\`\`\`

Now \`GET /\` returns "hello, world".

The handler function gets two arguments — \`req\` (the incoming request)
and \`res\` (the response you build). The most common methods on \`res\`:

- \`res.send(string)\` — send a string.
- \`res.json(object)\` — send a JSON response. Auto-sets Content-Type.
- \`res.status(code)\` — set the HTTP status. Chainable: \`res.status(404).json({...})\`.`,
    },
    {
      type: 'explain',
      id: 'm7-l2-e2',
      listen: true,
      markdown: `### Running it

Save the code as \`index.js\`. In your terminal:

\`\`\`
node index.js
\`\`\`

You'll see "listening on http://localhost:3000". Open that URL in your
browser. You should see "hello, world".

To stop the server: **Ctrl+C** in the terminal.

When you change the code, you have to stop and restart Node. That gets
old fast — \`nodemon\` watches your files and auto-restarts:

\`\`\`
npm install -D nodemon
npx nodemon index.js
\`\`\`

For Ship It-pace work, nodemon (or Node's built-in \`--watch\` flag)
is essential. Without it you'll waste a minute every change.`,
    },
    {
      type: 'typealong',
      id: 'm7-l2-ta1',
      language: 'js',
      instructions: 'Retype the minimal Express server.',
      code: `import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('hello, world');
});

app.listen(3000, () => {
  console.log('listening on http://localhost:3000');
});`,
    },
    {
      type: 'readthis',
      id: 'm7-l2-r1',
      language: 'js',
      code: `app.get('/api/health', (req, res) => {
  res.json({ ok: true, version: '1.0.0' });
});`,
      question: 'When a client GETs /api/health, what content-type header is set automatically?',
      options: [
        'text/plain',
        'text/html',
        'application/json',
        'No content-type is set',
      ],
      answerIndex: 2,
      explanation:
        '`res.json(obj)` serializes the object to JSON and sets `Content-Type: application/json`. Use it for any JSON response.',
    },
  ],
};
