import type { Lesson } from '@/types/lesson';

export const M2_L3_FUNCTIONS: Lesson = {
  id: 'm2-l3-functions',
  moduleId: 'javascript',
  title: 'Functions',
  objective: 'Define and call functions. Pass arguments. Return values.',
  estimatedMinutes: 9,
  blocks: [
    {
      type: 'explain',
      id: 'm2-l3-e1',
      listen: true,
      markdown: `## A function is a named set of steps

You define it once. You call it as many times as you want.

\`\`\`js
function greet(name) {
  return 'Hello, ' + name + '!';
}

const message = greet('Gabs');
console.log(message);
// → Hello, Gabs!
\`\`\`

Three parts:

1. **The signature** — \`function greet(name)\` — the name of the function
   and the names of the values it expects (its **parameters**).
2. **The body** — the lines between \`{\` and \`}\` — what runs each time
   you call it.
3. **The return** — \`return\` followed by an expression — the value
   the function hands back. Anything after \`return\` is skipped.`,
    },
    {
      type: 'explain',
      id: 'm2-l3-e2',
      listen: true,
      markdown: `### Functions without a return

If you don't return anything, the function still works — it just gives
back the special value \`undefined\`.

\`\`\`js
function shout(word) {
  console.log(word.toUpperCase());
  // no return here
}

const result = shout('hello'); // logs: HELLO
console.log(result);            // undefined
\`\`\`

This is the source of one of the most common beginner bugs: writing
a function that does some math but **forgets to return the answer**.
You'll see it in the Debug Gauntlet — and you'll see it again in
real code.`,
    },
    {
      type: 'typealong',
      id: 'm2-l3-ta1',
      language: 'js',
      instructions:
        'Retype this. Notice the curly braces, the parentheses, and the return statement.',
      code: `function add(a, b) {
  return a + b;
}

console.log(add(2, 3));
console.log(add(10, 20));`,
    },
    {
      type: 'codechallenge',
      id: 'm2-l3-cc1',
      spec:
        'Write a function called `square` that takes a number `n` and returns n times n. Then call square(5) and log the result.\n\nExpected output:\n\n25',
      starterCode: `function square(n) {
  // return n * n
}

console.log(square(5));
`,
      expectedConsoleOutput: '25',
    },
    {
      type: 'codechallenge',
      id: 'm2-l3-cc2',
      spec:
        'Write a function `greet` that takes a name and returns the string "Hello, <name>!". Then log greet("Gabs").\n\nExpected output:\n\nHello, Gabs!',
      starterCode: `function greet(name) {
  // return 'Hello, ' + name + '!'
}

console.log(greet('Gabs'));
`,
      expectedConsoleOutput: 'Hello, Gabs!',
    },
    {
      type: 'codechallenge',
      id: 'm2-l3-cc3',
      spec:
        'Write a function `isEven` that takes a number and returns true if it is even, false otherwise. Log isEven(4) and isEven(7), one per line.\n\nExpected output:\n\ntrue\nfalse',
      starterCode: `function isEven(n) {
  // return whether n % 2 === 0
}

console.log(isEven(4));
console.log(isEven(7));
`,
      expectedConsoleOutput: 'true\nfalse',
    },
  ],
};
