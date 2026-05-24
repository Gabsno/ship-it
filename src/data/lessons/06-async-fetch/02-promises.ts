import type { Lesson } from '@/types/lesson';

export const M6_L2_PROMISES: Lesson = {
  id: 'm6-l2-promises',
  moduleId: 'async-fetch',
  title: 'Promises',
  objective: 'Read and chain promises. Recognise then/catch.',
  estimatedMinutes: 8,
  blocks: [
    {
      type: 'explain',
      id: 'm6-l2-e1',
      listen: true,
      markdown: `## A Promise is "a value, eventually"

A Promise represents work in progress. It will eventually finish, with
one of two outcomes:

- **Resolved** with a value (the work succeeded).
- **Rejected** with an error (the work failed).

You don't wait for it directly. You attach callbacks for each outcome:

\`\`\`js
fetch('https://api.example.com/users')
  .then((response) => {
    console.log('got response', response);
  })
  .catch((error) => {
    console.log('failed', error);
  });
\`\`\`

\`.then(fn)\` — "when this promise resolves, run fn with the value."
\`.catch(fn)\` — "if it rejects, run fn with the error."`,
    },
    {
      type: 'explain',
      id: 'm6-l2-e2',
      listen: true,
      markdown: `### Chaining

Each \`.then\` returns a new promise. Return a value from inside
\`.then\` and the next \`.then\` receives it:

\`\`\`js
fetch('/users')
  .then((response) => response.json())   // parse body, return promise
  .then((users) => {
    console.log('first user:', users[0]);
  })
  .catch((error) => {
    console.log('something failed:', error);
  });
\`\`\`

A single \`.catch\` at the end catches errors from any earlier step in
the chain. That's why this pattern is clean.

The old callback style — passing callbacks into callbacks into
callbacks — leads to "callback hell." Promises flatten it.`,
    },
    {
      type: 'readthis',
      id: 'm6-l2-r1',
      language: 'js',
      code: `function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

console.log('a');
delay(100).then(() => console.log('b'));
console.log('c');`,
      question: 'What\'s the output order?',
      options: ['a, b, c', 'a, c, b', 'a, c, then b ~100ms later', 'b, a, c'],
      answerIndex: 2,
      explanation:
        '`delay(100)` returns a Promise that resolves after 100ms. The .then callback runs then. Synchronous logs run first.',
    },
  ],
};
