import type { Lesson } from '@/types/lesson';

export const M2_L8_REVIEW_QUIZ: Lesson = {
  id: 'm2-l8-review-quiz',
  moduleId: 'javascript',
  title: 'Module 2 review',
  objective: 'Self-check on everything from variables through loops.',
  estimatedMinutes: 8,
  blocks: [
    {
      type: 'explain',
      id: 'm2-l8-e1',
      listen: true,
      markdown: `## You've finished the language module

Ten questions on what you just learned. Variables, types, operators,
control flow, functions, arrays, objects, loops, common bugs.

Don't worry about the score on the first pass — if you get six or
seven right, the module did its job. The rest will land when you
write code that uses them.`,
    },
  ],
  quiz: [
    {
      id: 'm2-l8-q1',
      prompt: 'Which keyword would you use for a variable whose value will never change?',
      options: ['var', 'let', 'const', 'final'],
      answerIndex: 2,
      explanation: 'const for values that won\'t be reassigned. let when you actually need to change them. var is the old keyword — skip it.',
    },
    {
      id: 'm2-l8-q2',
      prompt: 'What is the type of the value `null`?',
      options: ['undefined', 'object (a historical quirk)', 'null', 'boolean'],
      answerIndex: 1,
      explanation: '`typeof null` returns `"object"` — a famous JS mistake from 1995 that\'s still around.',
    },
    {
      id: 'm2-l8-q3',
      prompt: 'Which operator should you almost always use to compare two values?',
      options: ['==', '===', 'is', 'eq'],
      answerIndex: 1,
      explanation: '`===` checks value and type. `==` does loose comparison with surprise type coercion — skip it.',
    },
    {
      id: 'm2-l8-q4',
      prompt: 'What does `arr.length` return for `const arr = [10, 20, 30]`?',
      options: ['2', '3', '30', '[10, 20, 30]'],
      answerIndex: 1,
    },
    {
      id: 'm2-l8-q5',
      prompt: 'What\'s the last valid index of an array of length N?',
      options: ['N', 'N + 1', 'N - 1', '0'],
      answerIndex: 2,
      explanation: 'Arrays are zero-indexed. Length 3 means indexes 0, 1, 2.',
    },
    {
      id: 'm2-l8-q6',
      prompt: 'A function with no `return` statement returns what?',
      options: ['null', '0', 'undefined', 'It throws an error'],
      answerIndex: 2,
    },
    {
      id: 'm2-l8-q7',
      prompt: 'Which loop is best when you want to walk every element of an array without managing an index?',
      options: ['for (let i = 0; i < arr.length; i++)', 'while', 'for...of', 'do...while'],
      answerIndex: 2,
    },
    {
      id: 'm2-l8-q8',
      prompt:
        'Given `const user = { name: "Gabs", age: 28 }`, what does `user["name"]` return?',
      options: ['"Gabs"', 'undefined', 'It throws — bracket notation needs a number', 'Gabs (without quotes)'],
      answerIndex: 0,
      explanation: 'Bracket notation works with string keys, just like dot notation. The return value is the string "Gabs".',
    },
    {
      id: 'm2-l8-q9',
      prompt: 'Why is `for (let i = 0; i <= arr.length; i++)` almost always a bug?',
      options: [
        'It\'s slower',
        'The last iteration accesses arr[length], which is undefined',
        'It only works on numbers',
        'It runs the loop in reverse',
      ],
      answerIndex: 1,
      explanation: 'The off-by-one. Use `<` not `<=`.',
    },
    {
      id: 'm2-l8-q10',
      prompt: 'Which expression evaluates to `true`?',
      options: ['5 === "5"', '0 === false', '"abc".length === 3', 'undefined === null'],
      answerIndex: 2,
      explanation:
        '`===` requires same type and same value. The string "abc" has length 3, and 3 === 3.',
    },
  ],
};
