import type { Lesson } from '@/types/lesson';

export const M9_L2_STATE_WITH_USESTATE: Lesson = {
  id: 'm9-l2-state-with-useState',
  moduleId: 'react',
  title: 'State with useState',
  objective: 'Track values that change. Make the UI re-render when they do.',
  estimatedMinutes: 9,
  blocks: [
    {
      type: 'explain',
      id: 'm9-l2-e1',
      listen: true,
      markdown: `## useState — a value React watches

\`\`\`jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
}
\`\`\`

\`useState(0)\` returns two things:

1. The current value (\`count\`).
2. A setter function (\`setCount\`).

When you call \`setCount\`, React **re-renders** the component with the
new value. The JSX is recomputed; the DOM updates to match.

A regular variable wouldn't work — the function would run, set the
variable, and never tell React anything changed. \`useState\` is the
bridge between "value changed" and "screen updated."`,
    },
    {
      type: 'explain',
      id: 'm9-l2-e2',
      listen: true,
      markdown: `### Updating from the previous value

If the new value depends on the current one, pass a function to the
setter instead of a value:

\`\`\`jsx
setCount((c) => c + 1);
\`\`\`

Why? When updates happen quickly or React batches them, \`count\` might
be stale by the time your update runs. The function form gets the
freshest value from React directly.

Habit: when the new value depends on the old, use the function form.
When you're setting a brand new value, the direct form is fine.

\`\`\`jsx
setCount(0);                      // resetting — direct is fine
setCount(c => c + 1);             // incrementing — function form
setCount(c => c * 2);             // doubling — function form
\`\`\``,
    },
    {
      type: 'explain',
      id: 'm9-l2-e3',
      listen: true,
      markdown: `### State with non-primitive values

You can hold arrays, objects, anything:

\`\`\`jsx
const [notes, setNotes] = useState([]);

function addNote(title) {
  setNotes((prev) => [...prev, { id: Date.now(), title }]);
}
\`\`\`

**Critical rule:** never mutate state directly. \`notes.push(...)\` won't
trigger a re-render and will eventually break in subtle ways. Always
create a new array or object:

\`\`\`jsx
// ✅
setNotes((prev) => [...prev, newNote]);             // add
setNotes((prev) => prev.filter((n) => n.id !== id)); // remove
setNotes((prev) => prev.map((n) =>                   // update one
  n.id === id ? { ...n, done: true } : n
));

// ❌
notes.push(newNote);
setNotes(notes);
\`\`\`

The \`...spread\` pattern is everywhere in React state updates. Memorise it.`,
    },
    {
      type: 'readthis',
      id: 'm9-l2-r1',
      language: 'js',
      code: `function Counter() {
  const [n, setN] = useState(0);

  function increment() {
    setN(n + 1);
    setN(n + 1);
    setN(n + 1);
  }

  return <button onClick={increment}>{n}</button>;
}`,
      question: 'You click the button. What does `n` become?',
      options: ['1', '3', '0', 'It throws an error'],
      answerIndex: 0,
      explanation:
        '`n` is captured at the moment increment runs. All three `setN(n + 1)` calls compute `0 + 1 = 1`. Use the function form — `setN(prev => prev + 1)` — to actually increment three times.',
    },
  ],
};
