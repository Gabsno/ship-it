import type { Lesson } from '@/types/lesson';

export const M2_L1_VARIABLES_AND_TYPES: Lesson = {
  id: 'm2-l1-variables-and-types',
  moduleId: 'javascript',
  title: 'Variables and types',
  objective: 'Declare variables with let and const, and name the basic types.',
  estimatedMinutes: 7,
  blocks: [
    {
      type: 'explain',
      id: 'm2-l1-e1',
      listen: true,
      markdown: `## A variable is a labelled box

You put a value in. You read the value out by name.

\`\`\`js
let age = 27;
console.log(age);
\`\`\`

That's it. \`let\` is the keyword that creates the box. \`age\` is the
label. \`27\` is the value. From now on, \`age\` means \`27\` in this
program — until you assign a new value.

\`\`\`js
let age = 27;
age = 28;
console.log(age); // 28
\`\`\``,
    },
    {
      type: 'explain',
      id: 'm2-l1-e2',
      listen: true,
      markdown: `### let vs const

There are two ways to declare a variable:

- \`let\` — you can change the value later.
- \`const\` — you can't. Trying to reassign a \`const\` is an error.

Default to \`const\`. Use \`let\` only when you actually need to change
the value. Smaller surface for bugs.

\`\`\`js
const name = 'Gabs';
// name = 'Other';  // <- TypeError: Assignment to constant variable
\`\`\``,
    },
    {
      type: 'explain',
      id: 'm2-l1-e3',
      listen: true,
      markdown: `### The basic types

Every value in JS has a type. The five you'll use constantly:

- **number** — \`27\`, \`3.14\`, \`-5\`.
- **string** — text in quotes, \`'hello'\` or \`"hello"\`. Both work.
- **boolean** — \`true\` or \`false\`. Nothing else.
- **null** — the explicit "nothing here." You set it yourself.
- **undefined** — "this was never set." The runtime sets this for you.

Two more you'll see soon: **array** (\`[1, 2, 3]\`) and **object**
(\`{ name: 'Gabs' }\`). We'll cover those properly later in the module.`,
    },
    {
      type: 'typealong',
      id: 'm2-l1-ta1',
      language: 'js',
      instructions:
        'Retype the snippet exactly. The point isn\'t cleverness — it\'s muscle memory for the syntax.',
      code: `const name = 'Gabs';
let age = 27;
const isLearning = true;

console.log(name);
console.log(age);
console.log(isLearning);`,
    },
    {
      type: 'codechallenge',
      id: 'm2-l1-cc1',
      spec:
        'Declare a const called `city` with the value `Accra`, then log it. Output should be exactly:\n\nAccra',
      starterCode: `// declare a const called city with the value 'Accra'
// then console.log it
`,
      expectedConsoleOutput: 'Accra',
    },
  ],
  quiz: [
    {
      id: 'm2-l1-q1',
      prompt: 'Which line is illegal?',
      options: [
        'let n = 5;',
        'const PI = 3.14;',
        'const greeting = "hi"; greeting = "hello";',
        'let count = 0; count = count + 1;',
      ],
      answerIndex: 2,
      explanation:
        'You can\'t reassign a const. Use let if you need to change the value later.',
    },
    {
      id: 'm2-l1-q2',
      prompt: 'What is the type of the value `true`?',
      options: ['string', 'boolean', 'number', 'null'],
      answerIndex: 1,
    },
  ],
};
