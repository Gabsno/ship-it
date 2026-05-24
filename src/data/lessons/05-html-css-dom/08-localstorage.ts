import type { Lesson } from '@/types/lesson';

export const M5_L8_LOCALSTORAGE: Lesson = {
  id: 'm5-l8-localstorage',
  moduleId: 'html-css-dom',
  title: 'localStorage — persistence without a backend',
  objective: 'Save data that survives a page reload. Read it back. Delete it.',
  estimatedMinutes: 7,
  blocks: [
    {
      type: 'explain',
      id: 'm5-l8-e1',
      listen: true,
      markdown: `## localStorage — a small key-value store in the browser

The browser gives every site a few MB of permanent storage per origin
(domain + port). Anything you write there survives reloads, restarts,
and closing the tab. It's wiped only if the user clears site data.

The API is small — four methods:

\`\`\`js
localStorage.setItem('key', 'value');    // save
const v = localStorage.getItem('key');   // read
localStorage.removeItem('key');          // delete one
localStorage.clear();                    // delete everything
\`\`\`

**Important:** localStorage only stores strings. For anything else
(arrays, objects), serialise with JSON.`,
    },
    {
      type: 'explain',
      id: 'm5-l8-e2',
      listen: true,
      markdown: `### The JSON dance

\`\`\`js
const notes = [
  { id: 1, title: 'first' },
  { id: 2, title: 'second' },
];

// Save
localStorage.setItem('notes', JSON.stringify(notes));

// Read
const raw = localStorage.getItem('notes');
const restored = raw ? JSON.parse(raw) : [];

console.log(restored);   // [{ id: 1, title: 'first' }, ...]
\`\`\`

\`JSON.stringify\` turns a JS value into a string. \`JSON.parse\` turns
that string back. Always check for \`null\` from \`getItem\` — that's
what you get if the key has never been set.

This is also exactly how Ship It saves your progress. Go look at
\`ship-it:progress:v1\` in DevTools → Application → Local Storage.`,
    },
    {
      type: 'codechallenge',
      id: 'm5-l8-cc1',
      spec:
        'Write code that saves the array [1, 2, 3] under the key "nums", reads it back, and logs the parsed array.\n\nExpected output:\n\n[1,2,3]',
      starterCode: `// localStorage isn't available in the sandbox, so we'll fake it:
const store = {};
const fakeStorage = {
  setItem: (k, v) => { store[k] = v; },
  getItem: (k) => k in store ? store[k] : null,
};

// 1. JSON.stringify [1, 2, 3] and save under 'nums'
// 2. Get it back, JSON.parse it
// 3. console.log the parsed array
`,
      expectedConsoleOutput: '[1,2,3]',
    },
  ],
};
