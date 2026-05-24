import type { Lesson } from '@/types/lesson';

export const M6_L3_ASYNC_AWAIT: Lesson = {
  id: 'm6-l3-async-await',
  moduleId: 'async-fetch',
  title: 'async / await',
  objective: 'Write async code that reads like sync code.',
  estimatedMinutes: 8,
  blocks: [
    {
      type: 'explain',
      id: 'm6-l3-e1',
      listen: true,
      markdown: `## async and await — sugar for promises

\`await\` pauses an async function until a promise resolves, then gives
you the resolved value. The whole \`.then\` chain becomes ordinary-looking
lines:

\`\`\`js
async function loadUsers() {
  const response = await fetch('/users');
  const users = await response.json();
  console.log('first user:', users[0]);
}

loadUsers();
\`\`\`

Two rules:

1. \`await\` only works inside a function marked \`async\`.
2. An async function **always** returns a Promise. Even if you
   \`return 5\`, the caller gets a Promise that resolves to 5.

Internally, this code does exactly what the \`.then\` chain did. It just
reads better.`,
    },
    {
      type: 'explain',
      id: 'm6-l3-e2',
      listen: true,
      markdown: `### Error handling with try/catch

Use the regular \`try { } catch (err) { }\` block:

\`\`\`js
async function loadUsers() {
  try {
    const response = await fetch('/users');
    const users = await response.json();
    console.log('got', users.length, 'users');
  } catch (err) {
    console.log('failed:', err.message);
  }
}
\`\`\`

This is the pattern you'll write for every API call in Modules 7 onward.
Memorise the shape.`,
    },
    {
      type: 'codechallenge',
      id: 'm6-l3-cc1',
      spec:
        'Write an async function `wait` that returns the string "done" after 50ms. Call it and log the resolved value.\n\nExpected output:\n\ndone',
      starterCode: `function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function wait() {
  // await delay(50), then return 'done'
}

wait().then((value) => console.log(value));
`,
      expectedConsoleOutput: 'done',
    },
  ],
};
