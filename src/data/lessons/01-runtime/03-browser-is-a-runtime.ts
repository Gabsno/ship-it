import type { Lesson } from '@/types/lesson';

export const M1_L3_BROWSER_IS_A_RUNTIME: Lesson = {
  id: 'm1-l3-browser-is-a-runtime',
  moduleId: 'runtime',
  title: 'The browser is a runtime',
  objective: 'Understand what "runtime" means and why the browser is one.',
  estimatedMinutes: 6,
  blocks: [
    {
      type: 'explain',
      id: 'm1-l3-e1',
      listen: true,
      markdown: `## What's a runtime?

A **runtime** is the thing that runs your code. Without a runtime, your
JavaScript file is just text on disk. With a runtime, the text becomes
action — variables get values, functions get called, things happen on
screen.

JavaScript has two big runtimes:

- **The browser** (Chrome, Firefox, Safari, Edge — they all include one).
- **Node.js** (which we'll meet in the next lesson).

Same language. Different tools attached. The language itself can add
two numbers, but it can't "open a window" — that's the browser's job.
The language can't "read a file from disk" — that's Node's job.`,
    },
    {
      type: 'explain',
      id: 'm1-l3-e2',
      listen: true,
      markdown: `### What the browser gives you

When your JS runs in a browser, you get extra superpowers the language
doesn't have on its own:

- A **window** — the page the user sees.
- A **document** — the HTML structure inside that page.
- **Events** — clicks, key presses, mouse movement.
- **fetch** — the ability to talk to other computers over the network.

You write JavaScript; the browser runs it; the browser exposes these
extras so your code can do real things. We'll use all of them later.

For now: when someone says "browser JS," they mean JavaScript code that
runs inside a browser tab. Same language, runtime-specific powers.`,
    },
    {
      type: 'readthis',
      id: 'm1-l3-r1',
      language: 'html',
      code: `<!doctype html>
<html>
  <body>
    <h1>Hello</h1>
    <script>
      console.log('the page loaded');
    </script>
  </body>
</html>`,
      question: 'When the browser opens this HTML file, when does the `console.log` run?',
      options: [
        'Immediately, before the page renders',
        'When the browser reaches the <script> tag — after the <h1> is parsed',
        'Only when the user clicks somewhere',
        'It never runs — <script> in <body> is invalid',
      ],
      answerIndex: 1,
      explanation:
        'The browser parses HTML top to bottom. When it hits the <script> tag, it executes the JavaScript inside, then continues.',
    },
  ],
};
