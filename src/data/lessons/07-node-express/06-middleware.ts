import type { Lesson } from '@/types/lesson';

export const M7_L6_MIDDLEWARE: Lesson = {
  id: 'm7-l6-middleware',
  moduleId: 'node-express',
  title: 'Middleware',
  objective: 'Understand the request pipeline. Write a logger and an error handler.',
  estimatedMinutes: 8,
  blocks: [
    {
      type: 'explain',
      id: 'm7-l6-e1',
      listen: true,
      markdown: `## Middleware = "code that runs before the route"

You've already seen one: \`app.use(express.json())\`. Middleware
functions have the shape:

\`\`\`js
function logger(req, res, next) {
  console.log(req.method, req.url);
  next();    // hand off to the next middleware (or the route)
}

app.use(logger);
\`\`\`

Three arguments: \`req\`, \`res\`, \`next\`. **You must call \`next()\`**
to pass control along — otherwise the request hangs forever.

Middleware runs in the order you registered it. A typical request walks
through:

\`\`\`
incoming request
  → express.json() (parse body)
  → logger (log it)
  → auth middleware (check token)
  → your route handler
  → response goes out
\`\`\``,
    },
    {
      type: 'explain',
      id: 'm7-l6-e2',
      listen: true,
      markdown: `### Auth middleware — the most common real example

\`\`\`js
function requireAuth(req, res, next) {
  const header = req.headers.authorization;
  if (!header || !header.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'no token' });
  }
  const token = header.slice(7);
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch {
    return res.status(401).json({ error: 'invalid token' });
  }
}

// apply to specific routes
app.get('/me', requireAuth, (req, res) => {
  res.json(req.user);
});

// or to ALL routes under a prefix
app.use('/api/', requireAuth);
\`\`\`

If \`next()\` is never called, the route handler never runs. The
response goes out from inside the middleware. That's how you "block"
unauthorised requests cleanly.`,
    },
    {
      type: 'explain',
      id: 'm7-l6-e3',
      listen: true,
      markdown: `### Error-handling middleware

Middleware with **four** arguments is treated specially — Express
recognises it as an error handler. Register it LAST:

\`\`\`js
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'something went wrong' });
});
\`\`\`

Whenever a route or earlier middleware throws (synchronously) or calls
\`next(err)\`, this runs. Without it, Express's default would still
send 500, but with a less useful HTML page.

For async route handlers, throwing inside an \`async\` function needs
extra care — wrap in try/catch and call \`next(err)\`, or use the
\`express-async-errors\` package which automates it.`,
    },
    {
      type: 'readthis',
      id: 'm7-l6-r1',
      language: 'js',
      code: `function brokenLogger(req, res, next) {
  console.log(req.method, req.url);
}

app.use(brokenLogger);
app.get('/', (req, res) => res.send('hi'));`,
      question: 'A client GETs /. What happens?',
      options: [
        'The response is "hi"',
        'The request hangs forever — brokenLogger never calls next()',
        '500 Internal Server Error',
        'Express auto-detects and calls next() for you',
      ],
      answerIndex: 1,
      explanation:
        'Forgetting `next()` is the single most common middleware bug. The browser will spin until it times out.',
    },
  ],
};
