import type { Lesson } from '@/types/lesson';

export const M1_L4_NODE_IS_A_RUNTIME: Lesson = {
  id: 'm1-l4-node-is-a-runtime',
  moduleId: 'runtime',
  title: 'Node is also a runtime',
  objective: 'Install Node and run JavaScript from the terminal.',
  estimatedMinutes: 8,
  blocks: [
    {
      type: 'explain',
      id: 'm1-l4-e1',
      listen: true,
      markdown: `## Node.js — JavaScript outside the browser

Node.js is a program you install on your laptop. Once installed, you
can run JavaScript files directly from the terminal, without any browser
involved.

That's huge. It means you can write:

- Server-side code (the things that respond when a website's frontend
  talks to its backend).
- Command-line tools.
- Build scripts that prepare your code for shipping.

The Vite dev server you're using right now to view Ship It? That's a
Node program. Almost every modern JS tool runs on Node.

### What Node gives you (that the browser doesn't)

- Read and write files on disk (\`fs\` module).
- Listen for network connections (\`http\` module — this is how a server works).
- Run other programs from your script.

What Node *doesn't* give you: a window, a document, or anything visual.
Node is headless.`,
    },
    {
      type: 'command',
      id: 'm1-l4-c1',
      label: 'Check if Node is already installed',
      command: 'node -v',
      expectedOutput:
        'Something like: v20.11.0\n\nIf you see "command not found", install Node from the next step.',
    },
    {
      type: 'explain',
      id: 'm1-l4-e2',
      listen: true,
      markdown: `### If you don't have Node yet

Go to **nodejs.org** in your browser. Download the **LTS** version (Long
Term Support — the boring stable one, which is what you want).

Run the installer with default options. When it finishes, **close and
reopen your terminal** — the new \`node\` command only appears in fresh
terminal sessions.

Then try the command above again.`,
    },
    {
      type: 'command',
      id: 'm1-l4-c2',
      label: 'Run a one-liner with Node',
      command: 'node -e "console.log(2 + 2)"',
      expectedOutput: '4',
    },
    {
      type: 'explain',
      id: 'm1-l4-e3',
      listen: true,
      markdown: `### Two runtimes, one language

You've now seen JavaScript run in two places:

- Inside this Ship It app (browser runtime).
- From the terminal via Node.

Same syntax, same rules. The only difference is what extras are available.
\`console.log\` works in both because logging is part of the language itself.
\`document.querySelector\` only works in the browser. \`require('fs')\` only
works in Node.

When we get to Module 6 and 7, we'll write real Node servers.`,
    },
  ],
};
