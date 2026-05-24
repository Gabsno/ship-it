import type { Lesson } from '@/types/lesson';

export const M6_L4_FETCH_AND_HTTP: Lesson = {
  id: 'm6-l4-fetch-and-http',
  moduleId: 'async-fetch',
  title: 'fetch and the HTTP basics',
  objective: 'Send a GET request. Parse JSON. Recognise the four common HTTP methods.',
  estimatedMinutes: 9,
  blocks: [
    {
      type: 'explain',
      id: 'm6-l4-e1',
      listen: true,
      markdown: `## fetch — the modern HTTP client

\`\`\`js
const response = await fetch('https://api.example.com/users');
const users = await response.json();
\`\`\`

\`fetch(url)\` returns a Promise that resolves to a **Response object**.
The response isn't the data yet — it's the response object you get to
inspect:

- \`response.ok\` — true if status 200-299.
- \`response.status\` — the HTTP status code (200, 404, 500, ...).
- \`response.json()\` — read the body as JSON. Returns a Promise.
- \`response.text()\` — read the body as plain text.

The double \`await\` (\`await fetch\` then \`await response.json()\`) is
not a mistake. The network handshake and the body download are two
separate stages.`,
    },
    {
      type: 'explain',
      id: 'm6-l4-e2',
      listen: true,
      markdown: `### HTTP methods you'll use

- **GET** — read. \`fetch(url)\` defaults to GET.
- **POST** — create.
- **PUT** — replace (or sometimes update).
- **PATCH** — partial update.
- **DELETE** — delete.

Sending data — POST a JSON body:

\`\`\`js
await fetch('/notes', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ title: 'new note' }),
});
\`\`\`

Three things you must set:

1. \`method\` — \`'POST'\`, \`'PUT'\`, etc.
2. \`headers\` with \`Content-Type: application/json\`.
3. \`body\` — your data, **JSON.stringify-ed** (fetch doesn't do this
   for you).`,
    },
    {
      type: 'readthis',
      id: 'm6-l4-r1',
      language: 'js',
      code: `async function load() {
  const res = await fetch('/missing');
  console.log('status:', res.status);
  console.log('ok?', res.ok);
}`,
      question: 'The /missing endpoint returns 404. Does fetch throw?',
      options: [
        'Yes — fetch rejects on any non-2xx response',
        'No — fetch only rejects on network failure. 404 is still a "successful" response.',
        'Only if you forget to await it',
        'Only in Node, not in the browser',
      ],
      answerIndex: 1,
      explanation:
        'A common gotcha. fetch resolves for any HTTP status. Check `res.ok` (or `res.status`) yourself and throw if the response is bad.',
    },
  ],
};
