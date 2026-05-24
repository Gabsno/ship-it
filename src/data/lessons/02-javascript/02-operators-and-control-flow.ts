import type { Lesson } from '@/types/lesson';

export const M2_L2_OPERATORS_AND_CONTROL_FLOW: Lesson = {
  id: 'm2-l2-operators-and-control-flow',
  moduleId: 'javascript',
  title: 'Operators and control flow',
  objective: 'Do arithmetic, compare values, branch with if/else.',
  estimatedMinutes: 9,
  blocks: [
    {
      type: 'explain',
      id: 'm2-l2-e1',
      listen: true,
      markdown: `## Operators — symbols that do work

**Arithmetic** — what you'd expect from a calculator:

\`\`\`js
1 + 2   // 3
10 - 4  // 6
3 * 4   // 12
10 / 2  // 5
10 % 3  // 1  (remainder — read as "modulo")
\`\`\`

**Comparison** — these always return \`true\` or \`false\`:

\`\`\`js
5 === 5    // true   (equal)
5 !== 6    // true   (not equal)
5 < 10     // true
5 > 10     // false
5 <= 5     // true
\`\`\`

Notice the three equals signs. \`===\` checks **value and type** —
the safe one, always use this. \`==\` (two equals) does loose comparison
with weird type coercion rules. Skip it.`,
    },
    {
      type: 'explain',
      id: 'm2-l2-e2',
      listen: true,
      markdown: `### Control flow — if / else

A program runs top to bottom — unless you tell it to branch.

\`\`\`js
const score = 72;

if (score >= 60) {
  console.log('pass');
} else {
  console.log('fail');
}
\`\`\`

The parentheses hold a **condition** — anything that evaluates to
\`true\` or \`false\`. If true, the first block runs. If false, the
\`else\` block runs.

You can chain with \`else if\`:

\`\`\`js
if (score >= 80) {
  console.log('great');
} else if (score >= 60) {
  console.log('pass');
} else {
  console.log('fail');
}
\`\`\`

The first true branch wins — the rest are skipped.`,
    },
    {
      type: 'codechallenge',
      id: 'm2-l2-cc1',
      spec:
        'Given the variable `n`, print "even" if it is even, "odd" if it is odd.\n\nFor n = 4 the output should be:\n\neven',
      starterCode: `const n = 4;

// hint: n % 2 === 0 is true for even numbers
`,
      expectedConsoleOutput: 'even',
    },
    {
      type: 'codechallenge',
      id: 'm2-l2-cc2',
      spec:
        'Given two variables `a` and `b`, print the larger one. For a = 7 and b = 12 the output is:\n\n12',
      starterCode: `const a = 7;
const b = 12;

// print whichever is larger
`,
      expectedConsoleOutput: '12',
    },
    {
      type: 'explain',
      id: 'm2-l2-e3',
      listen: true,
      markdown: `### Logical operators

When you need to combine conditions:

- \`&&\` — **and**. Both sides must be true.
- \`||\` — **or**. Either side true is enough.
- \`!\` — **not**. Flips true to false.

\`\`\`js
const age = 28;
const hasLicense = true;

if (age >= 18 && hasLicense) {
  console.log('can drive');
}
\`\`\`

These are the same symbols you'll use in every conditional from here on.`,
    },
  ],
};
