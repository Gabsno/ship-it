import type { Lesson } from '@/types/lesson';

export const M2_L4_ARRAYS: Lesson = {
  id: 'm2-l4-arrays',
  moduleId: 'javascript',
  title: 'Arrays',
  objective: 'Create arrays, access by index, add and remove items, get the length.',
  estimatedMinutes: 9,
  blocks: [
    {
      type: 'explain',
      id: 'm2-l4-e1',
      listen: true,
      markdown: `## An array is an ordered list

\`\`\`js
const fruits = ['apple', 'banana', 'cherry'];
\`\`\`

Three values, kept in order. You read them by their **index** — a
number starting at \`0\`, not \`1\`:

\`\`\`js
fruits[0];  // 'apple'
fruits[1];  // 'banana'
fruits[2];  // 'cherry'
fruits[3];  // undefined  (nothing at that index)
\`\`\`

You can find out how many items an array has with \`.length\`:

\`\`\`js
fruits.length;  // 3
\`\`\`

The last index is always \`length - 1\`. That's why so many beginner
bugs are off-by-one errors — you'll see them in the Gauntlet.`,
    },
    {
      type: 'explain',
      id: 'm2-l4-e2',
      listen: true,
      markdown: `### Adding and removing items

\`\`\`js
const fruits = ['apple', 'banana'];

fruits.push('cherry');     // add to end
console.log(fruits);
// → ['apple', 'banana', 'cherry']

fruits.pop();              // remove from end
console.log(fruits);
// → ['apple', 'banana']
\`\`\`

There are more (\`unshift\`, \`shift\`, \`splice\`) but you can get
surprisingly far with just \`push\` and \`pop\`.

You can also change a value at a specific index:

\`\`\`js
fruits[0] = 'mango';
console.log(fruits);
// → ['mango', 'banana']
\`\`\``,
    },
    {
      type: 'typealong',
      id: 'm2-l4-ta1',
      language: 'js',
      instructions: 'Retype. Watch the square brackets and the dots.',
      code: `const colors = ['red', 'green', 'blue'];

console.log(colors[0]);
console.log(colors.length);

colors.push('yellow');
console.log(colors);`,
    },
    {
      type: 'codechallenge',
      id: 'm2-l4-cc1',
      spec:
        'Declare an array `cities` with three string values: "Accra", "Kumasi", "Tema". Log the middle one (index 1).\n\nExpected output:\n\nKumasi',
      starterCode: `// declare const cities = [...]
// then log cities[1]
`,
      expectedConsoleOutput: 'Kumasi',
    },
    {
      type: 'codechallenge',
      id: 'm2-l4-cc2',
      spec:
        'Given `const nums = [10, 20, 30]`, push the value 40 onto it, then log the resulting array.\n\nExpected output:\n\n[10,20,30,40]',
      starterCode: `const nums = [10, 20, 30];

// push 40 onto nums
// then console.log(nums)
`,
      expectedConsoleOutput: '[10,20,30,40]',
    },
    {
      type: 'codechallenge',
      id: 'm2-l4-cc3',
      spec:
        'Write a function `firstAndLast` that takes an array and returns the first element joined with the last element by a space.\n\nFor ["apple", "banana", "cherry"] the result is:\n\napple cherry',
      starterCode: `function firstAndLast(arr) {
  // return arr[0] + ' ' + arr[arr.length - 1]
}

console.log(firstAndLast(['apple', 'banana', 'cherry']));
`,
      expectedConsoleOutput: 'apple cherry',
    },
  ],
};
