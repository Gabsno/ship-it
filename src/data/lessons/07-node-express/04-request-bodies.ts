import type { Lesson } from '@/types/lesson';

export const M7_L4_REQUEST_BODIES: Lesson = {
  id: 'm7-l4-request-bodies',
  moduleId: 'node-express',
  title: 'Request bodies and express.json()',
  objective: 'Accept JSON payloads in POST and PUT requests.',
  estimatedMinutes: 7,
  blocks: [
    {
      type: 'explain',
      id: 'm7-l4-e1',
      listen: true,
      markdown: `## Reading the body of a request

GET requests don't have a body. POST, PUT, and PATCH usually do.

Express doesn't parse the body by default — you have to tell it how.
For JSON APIs, that's one line:

\`\`\`js
import express from 'express';

const app = express();
app.use(express.json());   // <-- this

app.post('/todos', (req, res) => {
  const { title } = req.body;
  console.log('got new todo:', title);
  res.status(201).json({ id: 1, title });
});
\`\`\`

\`express.json()\` is **middleware** — code that runs on every incoming
request before your route handlers. It reads the body as a JSON string
and puts the parsed object on \`req.body\`.

Without that line, \`req.body\` is \`undefined\`. **The single most
common Express beginner bug.**`,
    },
    {
      type: 'explain',
      id: 'm7-l4-e2',
      listen: true,
      markdown: `### Testing it with curl

\`\`\`bash
curl -X POST http://localhost:3000/todos \\
  -H "Content-Type: application/json" \\
  -d '{"title":"buy milk"}'
\`\`\`

Three things:

- \`-X POST\` — use the POST method.
- \`-H "Content-Type: application/json"\` — tell the server it's JSON.
  If you omit this, \`express.json()\` doesn't run and req.body stays empty.
- \`-d '{"title":"buy milk"}'\` — the body.

The response should be a JSON object the server sent back. If it isn't,
the first thing to check is the Content-Type header and whether
\`app.use(express.json())\` is in your code.`,
    },
    {
      type: 'typealong',
      id: 'm7-l4-ta1',
      language: 'js',
      instructions: 'A POST route that echoes the body back.',
      code: `import express from 'express';

const app = express();
app.use(express.json());

app.post('/echo', (req, res) => {
  res.json({ youSent: req.body });
});

app.listen(3000);`,
    },
    {
      type: 'readthis',
      id: 'm7-l4-r1',
      language: 'js',
      code: `app.post('/todos', (req, res) => {
  const { title } = req.body;
  if (!title) {
    return res.status(400).json({ error: 'title is required' });
  }
  res.status(201).json({ id: 1, title });
});`,
      question: 'A client POSTs `{}` (empty body, but valid JSON). What does the response look like?',
      options: [
        '500 Internal Server Error',
        '201 Created with { id: 1, title: undefined }',
        '400 Bad Request with { error: "title is required" }',
        '404 Not Found',
      ],
      answerIndex: 2,
      explanation:
        'When `req.body.title` is missing, the truthy check fails and we return 400. Always validate the input you actually need.',
    },
  ],
};
