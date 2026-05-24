import type { Lesson } from '@/types/lesson';

export const M6_L6_PARALLEL_REQUESTS: Lesson = {
  id: 'm6-l6-parallel-requests',
  moduleId: 'async-fetch',
  title: 'Parallel requests with Promise.all',
  objective: 'Run multiple fetches at the same time and wait for all to finish.',
  estimatedMinutes: 7,
  blocks: [
    {
      type: 'explain',
      id: 'm6-l6-e1',
      listen: true,
      markdown: `## Sequential vs parallel

Sequential — each \`await\` waits for the previous:

\`\`\`js
const users = await fetch('/users').then(r => r.json());
const posts = await fetch('/posts').then(r => r.json());
// total time: users time + posts time
\`\`\`

If both requests take 200ms, total is 400ms. But they don't depend on
each other — they could run **in parallel**:

\`\`\`js
const [users, posts] = await Promise.all([
  fetch('/users').then(r => r.json()),
  fetch('/posts').then(r => r.json()),
]);
// total time: ~200ms — the slower of the two
\`\`\`

\`Promise.all([p1, p2, ...])\` returns a Promise that resolves when **all**
promises in the array resolve. The resolved value is an array of results
in the same order.

If any promise rejects, the whole \`Promise.all\` rejects. Use
\`Promise.allSettled\` if you want every result even when some fail.`,
    },
    {
      type: 'codechallenge',
      id: 'm6-l6-cc1',
      spec:
        'Two delay functions return values after a short wait. Use Promise.all to start them in parallel and log the two results joined by " and ".\n\nExpected output:\n\none and two',
      starterCode: `function delay(ms, value) {
  return new Promise((resolve) => setTimeout(() => resolve(value), ms));
}

async function main() {
  // use Promise.all to run delay(10, 'one') and delay(10, 'two') in parallel
  // then console.log them joined by ' and '
}

main();
`,
      expectedConsoleOutput: 'one and two',
    },
  ],
};
