import type { Lesson } from '@/types/lesson';

export const M1_L5_SOURCE_TO_EXECUTION: Lesson = {
  id: 'm1-l5-source-to-execution',
  moduleId: 'runtime',
  title: 'From source code to execution',
  objective: 'See what the runtime actually does with your text, then run your first program.',
  estimatedMinutes: 8,
  blocks: [
    {
      type: 'explain',
      id: 'm1-l5-e1',
      listen: true,
      markdown: `## Source → action

You write text. The runtime turns it into action. There are three stops
along the way:

1. **Parse.** The runtime reads your text character by character and
   checks the grammar. If you forgot a closing bracket or misspelled
   \`functoin\` instead of \`function\`, the parser yells at you with a
   **SyntaxError**. Nothing runs until the parse succeeds.

2. **Build a tree.** Once the syntax checks out, the runtime arranges
   your code into a tree of meaning — what depends on what, which
   function lives inside which, the order of operations.

3. **Execute.** The runtime walks the tree and does the work — store
   the value, call the function, print the line.

If you've ever seen \`Uncaught SyntaxError\` in a console, that's step 1
failing. If you've seen \`ReferenceError\` or \`TypeError\`, that's step 3
failing — the syntax was fine, but the program made an illegal move at
runtime.`,
    },
    {
      type: 'explain',
      id: 'm1-l5-e2',
      listen: true,
      markdown: `### Your first program

Time to write one. The Code Challenge below asks for the smallest
useful program: print the words \`hello, world\` to the console.

The editor is real. The Run button runs your code in a sandbox (a
locked-down iframe so it can't touch the rest of the page). The Submit
button checks your console output matches what we expect.

If you get stuck, the spec tells you exactly what to print. Single
\`console.log\` call, single string.`,
    },
    {
      type: 'codechallenge',
      id: 'm1-l5-cc1',
      spec:
        'Write a program that prints exactly: hello, world\n\n(One line. Lowercase. The comma and the space matter.)',
      starterCode: `// Use console.log to print: hello, world
`,
      expectedConsoleOutput: 'hello, world',
    },
    {
      type: 'explain',
      id: 'm1-l5-e3',
      listen: true,
      markdown: `### You ran code

That was Module 1. You now know:

- A program is text the runtime follows.
- Files turn into processes that get their own memory.
- The browser and Node are two runtimes for the same language.
- Code becomes action by parse → tree → execute.
- And you've executed a program with your name on it.

Next module: the JavaScript language itself — variables, types,
functions, the building blocks you'll use every day.`,
    },
  ],
};
