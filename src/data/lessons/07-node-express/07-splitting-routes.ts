import type { Lesson } from '@/types/lesson';

export const M7_L7_SPLITTING_ROUTES: Lesson = {
  id: 'm7-l7-splitting-routes',
  moduleId: 'node-express',
  title: 'Splitting routes across files',
  objective: 'Stop putting everything in index.js. Use express.Router().',
  estimatedMinutes: 7,
  blocks: [
    {
      type: 'explain',
      id: 'm7-l7-e1',
      listen: true,
      markdown: `## When index.js hits 200 lines, split it

\`express.Router()\` is a mini-app you can build separately and mount
into the main app:

\`\`\`js
// routes/todos.js
import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => res.json(allTodos));
router.get('/:id', (req, res) => res.json(getOne(req.params.id)));
router.post('/', (req, res) => res.status(201).json(create(req.body)));

export default router;
\`\`\`

\`\`\`js
// index.js
import express from 'express';
import todosRouter from './routes/todos.js';

const app = express();
app.use(express.json());

app.use('/todos', todosRouter);    // <-- mount it under /todos

app.listen(3000);
\`\`\`

Now every route inside the router automatically gets prefixed with
\`/todos\`. \`router.get('/')\` becomes \`GET /todos\`.
\`router.get('/:id')\` becomes \`GET /todos/:id\`. The router file
doesn't know or care about the prefix.`,
    },
    {
      type: 'explain',
      id: 'm7-l7-e2',
      listen: true,
      markdown: `### A clean small project layout

\`\`\`
my-api/
├── index.js              # boot app, mount routers, listen
├── routes/
│   ├── todos.js
│   ├── users.js
│   └── auth.js
├── db.js                 # database connection
├── middleware/
│   ├── auth.js           # requireAuth
│   └── logger.js
└── package.json
\`\`\`

This is the structure BA-2 and BA-3 will start to feel like as they
grow. The rule of thumb: when a file gets hard to navigate (you scroll
to find things), split it.`,
    },
    {
      type: 'readthis',
      id: 'm7-l7-r1',
      language: 'js',
      code: `// routes/users.js
const router = Router();
router.get('/', listUsers);
router.get('/:id', getUser);
export default router;

// index.js
app.use('/api/users', usersRouter);`,
      question: 'What URL hits `getUser`?',
      options: [
        '/getUser',
        '/users/:id',
        '/api/users/:id',
        '/api/getUser',
      ],
      answerIndex: 2,
      explanation:
        'The mount prefix /api/users joins with the router path /:id to give /api/users/:id. Routers don\'t know their own prefix — the mounter decides.',
    },
  ],
};
