import type { Lesson } from '@/types/lesson';

export const M7_L1_INTRO: Lesson = {
  id: 'm7-l1-intro',
  moduleId: 'node-express',
  title: 'Node and Express — module roadmap',
  objective: 'See what Module 7 will cover. Boot your first Express server.',
  estimatedMinutes: 8,
  blocks: [
    {
      type: 'explain',
      id: 'm7-l1-e1',
      listen: true,
      markdown: `## Module 7 in one paragraph

You'll write your first **HTTP server**. The server runs on Node (from
Module 1). It uses **Express**, a small library that makes "respond to
a request at this path" easy.

By the end of this module you'll be able to write a CRUD API for any
data type — and BA-2 (Todo API) is exactly that: a CRUD API. Module 8
adds the database layer.

This module will cover, across ~8 lessons:

1. \`npm init\` and what \`package.json\` is.
2. Installing Express and writing a first GET route.
3. Routes, params, and the request/response cycle.
4. JSON request bodies and \`express.json()\` middleware.
5. Status codes (200, 201, 204, 400, 404, 500).
6. Middleware patterns — logging, error handling.
7. Organising routes into separate files.
8. Common Express bugs (DebugThis).`,
    },
    {
      type: 'explain',
      id: 'm7-l1-e2',
      listen: true,
      markdown: `## A taste — the smallest Express server

\`\`\`js
import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('hello');
});

app.listen(3000, () => {
  console.log('listening on 3000');
});
\`\`\`

Three concepts:

- \`app\` — the Express application.
- \`app.get(path, handler)\` — "when a GET request comes in at this
  path, run this function." The handler gets \`req\` (the incoming
  request) and \`res\` (the response you'll send).
- \`app.listen(port, cb)\` — start the server on a port.

Restart the server after every code change (or use \`nodemon\` to
auto-restart).

Module 7 fleshes out everything around this shape.`,
    },
    {
      type: 'command',
      id: 'm7-l1-c1',
      label: 'Try it: install express in a fresh folder',
      command: 'npm init -y && npm install express',
      expectedOutput:
        'Creates package.json with default values, then installs express into node_modules/.',
    },
    {
      type: 'explain',
      id: 'm7-l1-e3',
      listen: true,
      markdown: `## TODO(gabs) — finish this module

The remaining lessons land in a future content drop. For now you have
the shape of an Express server. If you want to push forward on your
own, the BA-2 build-along is exactly where to apply this.`,
    },
  ],
};
