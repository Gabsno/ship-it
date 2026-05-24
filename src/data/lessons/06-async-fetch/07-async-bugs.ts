import type { Lesson } from '@/types/lesson';

export const M6_L7_ASYNC_BUGS: Lesson = {
  id: 'm6-l7-async-bugs',
  moduleId: 'async-fetch',
  title: 'Async bugs you\'ll write',
  objective: 'Recognise three async mistakes everyone makes.',
  estimatedMinutes: 9,
  blocks: [
    {
      type: 'explain',
      id: 'm6-l7-e1',
      listen: true,
      markdown: `## Three async footguns

The next blocks are Debug This challenges for the three most common
async mistakes. You'll write each of these at least once — better to
recognise them.`,
    },
    {
      type: 'debugthis',
      id: 'm6-l7-d1',
      brokenCode: `function delay(ms, value) {
  return new Promise((resolve) => setTimeout(() => resolve(value), ms));
}

async function main() {
  const a = delay(10, 'one');
  const b = delay(10, 'two');
  console.log(a, b);
}

main();`,
      errorMessage: '(no error — but the logs are Promise objects, not the string values)',
      expectedConsoleOutput: 'one two',
      hint: 'You declared main async but never awaited the delays. Add `await` to a and b.',
    },
    {
      type: 'debugthis',
      id: 'm6-l7-d2',
      brokenCode: `async function getValue() {
  return 42;
}

const v = getValue();
console.log(v);`,
      errorMessage: '(no error — but the log shows a Promise instead of 42)',
      expectedConsoleOutput: '42',
      hint: 'Async functions always return a Promise, even when you return a plain value. Use .then(v => console.log(v)) — or wrap the call in an async function and await it.',
    },
    {
      type: 'debugthis',
      id: 'm6-l7-d3',
      brokenCode: `function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function run() {
  const items = ['a', 'b', 'c'];
  items.forEach(async (item) => {
    await delay(10);
    console.log(item);
  });
  console.log('done');
}

run();`,
      errorMessage: '(no error — but "done" prints BEFORE the items, when it should print after)',
      expectedConsoleOutput: 'a\nb\nc\ndone',
      hint: 'Array.forEach does not wait for async callbacks. Replace forEach with a for..of loop — that does respect await.',
    },
  ],
};
