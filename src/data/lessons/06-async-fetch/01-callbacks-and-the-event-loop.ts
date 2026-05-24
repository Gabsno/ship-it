import type { Lesson } from '@/types/lesson';

export const M6_L1_CALLBACKS_AND_THE_EVENT_LOOP: Lesson = {
  id: 'm6-l1-callbacks-and-the-event-loop',
  moduleId: 'async-fetch',
  title: 'Callbacks and the event loop',
  objective: 'Understand why JS uses callbacks for things that take time.',
  estimatedMinutes: 7,
  blocks: [
    {
      type: 'explain',
      id: 'm6-l1-e1',
      listen: true,
      markdown: `## JS runs on one thread

Your JavaScript runs on a single thread — one thing at a time, in order.
If a line of code takes 10 seconds, the whole page locks up for 10 seconds.

So JS doesn't *block* on slow things. When you ask for something that
takes time — a network request, a timer, reading a file in Node — JS
hands the work off, keeps going, and **calls you back when it's done**.

That callback is a function you pass in. The runtime stashes it and
runs it later when the result is ready.

\`\`\`js
console.log('start');

setTimeout(() => {
  console.log('after 1 second');
}, 1000);

console.log('end');
\`\`\`

Output:

\`\`\`
start
end
after 1 second
\`\`\`

The \`setTimeout\` doesn't pause execution. It registers the callback,
\`console.log('end')\` runs immediately, then a second later the callback
fires.`,
    },
    {
      type: 'explain',
      id: 'm6-l1-e2',
      listen: true,
      markdown: `### The event loop in one sentence

The event loop is the thing that watches the queue of "callbacks ready
to run," and runs them one by one as soon as the main thread is free.

You don't manage it. You just need to know it exists, because it
explains why:

- \`setTimeout(fn, 0)\` still doesn't run \`fn\` synchronously — it
  schedules it for "after this turn of the loop."
- A \`while (true) {}\` loop locks up the entire page — it never lets
  the loop pick up the next callback.
- You can write code that *looks* sequential but actually runs in a
  surprising order (next lesson).`,
    },
    {
      type: 'readthis',
      id: 'm6-l1-r1',
      language: 'js',
      code: `console.log('a');
setTimeout(() => console.log('b'), 0);
console.log('c');`,
      question: 'What\'s the output order?',
      options: ['a, b, c', 'a, c, b', 'b, a, c', 'c, a, b'],
      answerIndex: 1,
      explanation:
        '`setTimeout(..., 0)` still defers to the next event-loop tick. The synchronous lines `a` and `c` run first.',
    },
  ],
};
