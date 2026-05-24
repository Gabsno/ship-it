import type { Lesson } from '@/types/lesson';

export const M7_L3_ROUTES_AND_PARAMS: Lesson = {
  id: 'm7-l3-routes-and-params',
  moduleId: 'node-express',
  title: 'Routes and URL params',
  objective: 'Match URL patterns. Read path parameters and query strings.',
  estimatedMinutes: 8,
  blocks: [
    {
      type: 'explain',
      id: 'm7-l3-e1',
      listen: true,
      markdown: `## Verb + path = route

Each route registers a handler for one HTTP method on one URL pattern:

\`\`\`js
app.get('/todos', listAll);
app.get('/todos/:id', getOne);
app.post('/todos', create);
app.put('/todos/:id', update);
app.delete('/todos/:id', remove);
\`\`\`

Express matches incoming requests against these in registration order
and runs the first match's handler. The five methods above are the
ones you'll use for CRUD APIs.`,
    },
    {
      type: 'explain',
      id: 'm7-l3-e2',
      listen: true,
      markdown: `### Path parameters — \`:name\` in the URL

\`\`\`js
app.get('/todos/:id', (req, res) => {
  const id = req.params.id;     // a string like "42"
  res.json({ id });
});
\`\`\`

A colon in the path declares a parameter. Express extracts it into
\`req.params\`. The name on the left of the colon (\`id\`) is the key.

Note: \`req.params.id\` is always a **string**, even when the URL is
\`/todos/42\`. Convert with \`Number(req.params.id)\` if you need a number.`,
    },
    {
      type: 'explain',
      id: 'm7-l3-e3',
      listen: true,
      markdown: `### Query strings — \`?key=value\` after the path

\`\`\`js
// GET /todos?done=true&limit=10
app.get('/todos', (req, res) => {
  console.log(req.query.done);    // "true"
  console.log(req.query.limit);   // "10"
});
\`\`\`

Anything after \`?\` in the URL is parsed into \`req.query\`. Like params,
all values are strings — coerce them yourself if you need a number or
boolean.

Query strings are for **filtering, paginating, and sorting**. Path
parameters are for **identifying a resource**. Loose rule:

- \`GET /users/42\` — give me user 42.
- \`GET /users?role=admin\` — give me the users matching this filter.`,
    },
    {
      type: 'readthis',
      id: 'm7-l3-r1',
      language: 'js',
      code: `app.get('/products/:category/:id', (req, res) => {
  const { category, id } = req.params;
  res.json({ category, id });
});

// request: GET /products/shoes/123`,
      question: 'What does the response JSON look like?',
      options: [
        '{ "category": "shoes", "id": "123" }',
        '{ "category": "shoes", "id": 123 }',
        '{ "params": ["shoes", "123"] }',
        'An error — Express can\'t have two params',
      ],
      answerIndex: 0,
      explanation:
        'You can have as many path params as you want. All values come through as strings — `123` stays "123".',
    },
  ],
};
