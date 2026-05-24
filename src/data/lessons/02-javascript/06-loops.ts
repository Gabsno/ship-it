import type { Lesson } from '@/types/lesson';

export const M2_L6_LOOPS: Lesson = {
  id: 'm2-l6-loops',
  moduleId: 'javascript',
  title: 'Loops and iteration',
  objective: 'Repeat work without copy-paste. Walk over arrays.',
  estimatedMinutes: 10,
  blocks: [
    {
      type: 'explain',
      id: 'm2-l6-e1',
      listen: true,
      markdown: `## The for loop

A loop runs the same block of code many times. The classic one is the
**for loop**:

\`\`\`js
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
\`\`\`

It has three parts in the parentheses, separated by semicolons:

1. **Start** — \`let i = 1\` — runs once, before the loop begins.
2. **Condition** — \`i <= 5\` — checked before each iteration. If true,
   the loop runs another round. If false, the loop exits.
3. **Step** — \`i++\` — runs after each iteration. Same as \`i = i + 1\`.

The above logs 1, 2, 3, 4, 5 — five lines.`,
    },
    {
      type: 'explain',
      id: 'm2-l6-e2',
      listen: true,
      markdown: `### Walking an array with for

The most common shape — visit each element by index:

\`\`\`js
const fruits = ['apple', 'banana', 'cherry'];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
\`\`\`

Note the comparison: \`i < fruits.length\`, **not** \`<=\`. Array indexes
go from \`0\` to \`length - 1\`. Use \`<=\` and you walk off the end and
get \`undefined\` — the classic off-by-one bug.`,
    },
    {
      type: 'explain',
      id: 'm2-l6-e3',
      listen: true,
      markdown: `### for...of — the cleaner array loop

If you don't need the index, there's a shorter form:

\`\`\`js
const fruits = ['apple', 'banana', 'cherry'];

for (const fruit of fruits) {
  console.log(fruit);
}
\`\`\`

Each loop, \`fruit\` is set to the next element. No index to manage,
no off-by-one risk. Prefer this when you can.

### while — loop until a condition becomes false

When you don't know how many times you'll need to loop:

\`\`\`js
let n = 1;
while (n < 100) {
  n = n * 2;
}
console.log(n);   // 128
\`\`\`

\`while\` checks the condition before each iteration. Forget to update
\`n\` inside the loop and you've got an infinite loop. (The sandbox will
time out after 3 seconds, but your tab can lock up in real apps.)`,
    },
    {
      type: 'typealong',
      id: 'm2-l6-ta1',
      language: 'js',
      instructions: 'Retype both loops. Notice the difference in syntax.',
      code: `const nums = [10, 20, 30];

for (let i = 0; i < nums.length; i++) {
  console.log(nums[i]);
}

for (const n of nums) {
  console.log(n * 2);
}`,
    },
    {
      type: 'codechallenge',
      id: 'm2-l6-cc1',
      spec:
        'Print the numbers 1 through 5, one per line.\n\nExpected output:\n\n1\n2\n3\n4\n5',
      starterCode: `// for loop from 1 to 5, log each number
`,
      expectedConsoleOutput: '1\n2\n3\n4\n5',
    },
    {
      type: 'codechallenge',
      id: 'm2-l6-cc2',
      spec:
        'Given an array of numbers, sum them all and log the total.\n\nFor [4, 8, 15, 16, 23, 42] the expected output is:\n\n108',
      starterCode: `const nums = [4, 8, 15, 16, 23, 42];

let total = 0;
// walk the array, add each n to total
// then log total
`,
      expectedConsoleOutput: '108',
    },
    {
      type: 'codechallenge',
      id: 'm2-l6-cc3',
      spec:
        'Given an array of numbers, find the largest one and log it.\n\nFor [3, 9, 2, 7, 14, 5] the expected output is:\n\n14',
      starterCode: `const nums = [3, 9, 2, 7, 14, 5];

let max = nums[0];
// walk the rest of the array, update max when you see a bigger value
// then log max
`,
      expectedConsoleOutput: '14',
    },
  ],
};
