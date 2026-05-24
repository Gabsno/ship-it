import type { Lesson } from '@/types/lesson';

export const TEST_BLOCKS_LESSON: Lesson = {
  id: 'test-blocks',
  moduleId: 'diagnostics',
  title: 'Test lesson — all six block types',
  objective: 'Exercise every Phase 1 block type end-to-end with progress persistence.',
  estimatedMinutes: 8,
  blocks: [
    {
      type: 'explain',
      id: 'tb-explain-1',
      listen: true,
      markdown: `## Welcome to Ship It

This page exists to **prove** every lesson block works.

You'll see six block types in order:

1. **Explain** — the prose you're reading (with a Listen button up top).
2. **Command** — a copyable shell command you check off when you run it.
3. **TypeAlong** — retype the snippet to advance.
4. **ReadThis** — answer a comprehension question on a code sample.
5. **CodeChallenge** — write code, run it in a sandbox, match the expected output.
6. **DebugThis** — fix broken code that throws.

If you complete all six and reload the page, the checkmarks should still be here.`,
    },
    {
      type: 'command',
      id: 'tb-cmd-1',
      label: 'Confirm Node is installed',
      command: 'node -v',
      expectedOutput: 'v20.x.x (or anything starting with v18+)',
    },
    {
      type: 'typealong',
      id: 'tb-typealong-1',
      language: 'js',
      instructions: 'Retype the function exactly into the empty editor below.',
      code: `function greet(name) {
  return 'Hello, ' + name + '!';
}

console.log(greet('Gabs'));`,
    },
    {
      type: 'readthis',
      id: 'tb-readthis-1',
      language: 'js',
      code: `const xs = [1, 2, 3];
const ys = xs.map((n) => n * 2);
console.log(ys);`,
      question: 'What does this program print?',
      options: ['[1, 2, 3]', '[2, 4, 6]', '[1, 4, 9]', 'undefined'],
      answerIndex: 1,
      explanation: '`map` builds a new array with the callback applied to every element.',
    },
    {
      type: 'codechallenge',
      id: 'tb-cc-1',
      spec:
        'Write a program that prints the squares of 1 through 5, one per line.\nExpected output:\n1\n4\n9\n16\n25',
      starterCode: `// Print the squares of 1..5, one per line.
for (let i = 1; i <= 5; i++) {
  // TODO: console.log the square
}`,
      expectedConsoleOutput: `1
4
9
16
25`,
    },
    {
      type: 'debugthis',
      id: 'tb-debug-1',
      brokenCode: `const items = ['apple', 'banana', 'cherry'];
for (let i = 0; i <= items.length; i++) {
  console.log(items[i].toUpperCase());
}`,
      errorMessage: "TypeError: Cannot read properties of undefined (reading 'toUpperCase')",
      expectedConsoleOutput: `APPLE
BANANA
CHERRY`,
      hint: 'The loop runs one step too far — check the comparison in the for-loop condition.',
    },
  ],
  quiz: [
    {
      id: 'tb-quiz-1',
      prompt: 'Which block type uses a sandboxed iframe to run JavaScript?',
      options: ['Explain', 'TypeAlong', 'CodeChallenge', 'Command'],
      answerIndex: 2,
    },
    {
      id: 'tb-quiz-2',
      prompt: 'Where does Ship It store your progress?',
      options: ['A backend database', 'sessionStorage', 'localStorage', 'A cookie'],
      answerIndex: 2,
      explanation: 'No backend in v1 — everything is in localStorage under `ship-it:progress:v1`.',
    },
  ],
};
