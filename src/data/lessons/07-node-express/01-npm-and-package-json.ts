import type { Lesson } from '@/types/lesson';

export const M7_L1_NPM_AND_PACKAGE_JSON: Lesson = {
  id: 'm7-l1-npm-and-package-json',
  moduleId: 'node-express',
  title: 'npm and package.json',
  objective: 'Start a Node project and understand package.json.',
  estimatedMinutes: 7,
  blocks: [
    {
      type: 'explain',
      id: 'm7-l1-e1',
      listen: true,
      markdown: `## npm — Node's package manager

\`npm\` is installed alongside Node. It does three things you'll use
every day:

1. **Initialises projects** — creates a \`package.json\` file that
   records what your project is and what libraries it depends on.
2. **Installs libraries** — pulls third-party code from the npm
   registry into a \`node_modules\` folder.
3. **Runs scripts** — \`npm start\`, \`npm run dev\`, etc.

A \`package.json\` is just a JSON file that describes your project.
Every Node project has one. Open it in your editor any time you want
to see what a project depends on.`,
    },
    {
      type: 'command',
      id: 'm7-l1-c1',
      label: 'Start a new Node project',
      command: 'mkdir my-api && cd my-api && npm init -y',
      expectedOutput:
        'Creates my-api/, jumps in, and runs npm init with defaults (-y means "yes to all questions").\n\nNow ls shows package.json.',
    },
    {
      type: 'readthis',
      id: 'm7-l1-r1',
      language: 'js',
      code: `{
  "name": "my-api",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "start": "node index.js"
  }
}`,
      question: 'What does `npm start` do based on this package.json?',
      options: [
        'Installs all dependencies',
        'Runs `node index.js`',
        'Opens the package.json in your editor',
        'Nothing — start isn\'t a real npm command',
      ],
      answerIndex: 1,
      explanation:
        '`npm start` looks for `scripts.start` and runs whatever\'s there. Same for `npm run <name>` — it runs `scripts.<name>`.',
    },
    {
      type: 'explain',
      id: 'm7-l1-e2',
      listen: true,
      markdown: `### Two kinds of dependencies

When you install a package, you can mark it as either:

- A regular **dependency** (\`npm install express\`) — needed at runtime.
- A **dev dependency** (\`npm install -D nodemon\`) — only needed during
  development (testing tools, type definitions, dev servers).

Both end up in \`node_modules/\`. The split only matters for production
deploys, which often skip dev dependencies to save space.

You'll see them in \`package.json\` as \`"dependencies"\` and
\`"devDependencies"\` blocks.`,
    },
    {
      type: 'command',
      id: 'm7-l1-c2',
      label: 'Install express as a regular dependency',
      command: 'npm install express',
      expectedOutput:
        'Downloads express into node_modules/, adds it to package.json\'s "dependencies", and creates package-lock.json (a record of exact versions for reproducible installs).',
    },
  ],
};
