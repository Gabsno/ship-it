import type { Lesson } from '@/types/lesson';

export const M7_L5_STATUS_CODES: Lesson = {
  id: 'm7-l5-status-codes',
  moduleId: 'node-express',
  title: 'Status codes — speak HTTP properly',
  objective: 'Return the right HTTP status for each outcome.',
  estimatedMinutes: 6,
  blocks: [
    {
      type: 'explain',
      id: 'm7-l5-e1',
      listen: true,
      markdown: `## The eight status codes you actually need

Module 6 covered these from the client side. Here they are from the
server side — when you should send each one.

- **200 OK** — default. Use for successful GET, PUT, PATCH.
- **201 Created** — POST that created a new resource. Set this manually
  after every successful insert.
- **204 No Content** — DELETE that succeeded. Don't include a body.
- **400 Bad Request** — the client sent something invalid (missing
  field, wrong type).
- **401 Unauthorized** — no auth token, or the token is invalid.
- **403 Forbidden** — authenticated, but not allowed to do this.
- **404 Not Found** — the resource doesn't exist.
- **500 Internal Server Error** — something blew up server-side.
  (Express catches uncaught throws and sends 500 automatically.)

For Ship It's APIs, these eight cover everything.`,
    },
    {
      type: 'explain',
      id: 'm7-l5-e2',
      listen: true,
      markdown: `### A CRUD route, with proper statuses

\`\`\`js
app.post('/todos', (req, res) => {
  const { title } = req.body;
  if (!title) {
    return res.status(400).json({ error: 'title is required' });
  }
  const newTodo = { id: nextId++, title, done: false };
  todos.push(newTodo);
  res.status(201).json(newTodo);            // 201 — created
});

app.get('/todos/:id', (req, res) => {
  const todo = todos.find((t) => t.id === Number(req.params.id));
  if (!todo) {
    return res.status(404).json({ error: 'not found' });
  }
  res.json(todo);                            // implicit 200
});

app.delete('/todos/:id', (req, res) => {
  const idx = todos.findIndex((t) => t.id === Number(req.params.id));
  if (idx === -1) {
    return res.status(404).json({ error: 'not found' });
  }
  todos.splice(idx, 1);
  res.status(204).end();                     // 204 — no body
});
\`\`\`

Notice the pattern: validate → act → respond. Every route is some
variant of these three steps.`,
    },
    {
      type: 'readthis',
      id: 'm7-l5-r1',
      language: 'js',
      code: `app.put('/todos/:id', (req, res) => {
  const todo = todos.find((t) => t.id === Number(req.params.id));
  if (!todo) {
    return res.status(404).json({ error: 'not found' });
  }
  Object.assign(todo, req.body);
  res.json(todo);
});`,
      question: 'A client PUTs to /todos/999 but no todo with that id exists. What status is returned?',
      options: ['200', '201', '404', '500'],
      answerIndex: 2,
      explanation:
        'The handler explicitly returns 404 when the todo isn\'t found. Without that check, you\'d hit `Object.assign(undefined, ...)` which throws — Express would catch it and return 500. Always check before you act.',
    },
  ],
};
