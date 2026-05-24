import type { Lesson } from '@/types/lesson';

export const M9_L4_LISTS_AND_KEYS: Lesson = {
  id: 'm9-l4-lists-and-keys',
  moduleId: 'react',
  title: 'Lists, keys, and forms',
  objective: 'Render arrays of data. Handle form input. Submit without page reload.',
  estimatedMinutes: 9,
  blocks: [
    {
      type: 'explain',
      id: 'm9-l4-e1',
      listen: true,
      markdown: `## Rendering a list

Use \`.map()\` to turn an array of data into an array of JSX:

\`\`\`jsx
const notes = [
  { id: 1, title: 'First note' },
  { id: 2, title: 'Second note' },
];

<ul>
  {notes.map((note) => (
    <li key={note.id}>{note.title}</li>
  ))}
</ul>
\`\`\`

### The \`key\` prop — required for lists

Every element in a list needs a unique \`key\`. React uses it to track
which item is which between renders. Without it, when you add or remove
items, React might re-render the wrong ones (or all of them).

**Use a real stable id.** Database ids are ideal. As a last resort, the
array index works but only if the list doesn't reorder or insert/remove
items in the middle.

\`\`\`jsx
{notes.map((n) => <li key={n.id}>{n.title}</li>)}      // ✅ ideal
{notes.map((n, i) => <li key={i}>{n.title}</li>)}      // ⚠️ only if order is fixed
{notes.map((n) => <li key={Math.random()}>...</li>)}   // ❌ new key each render = wasted work
\`\`\``,
    },
    {
      type: 'explain',
      id: 'm9-l4-e2',
      listen: true,
      markdown: `## Forms — controlled inputs

Tie an input's value to state so React owns the source of truth:

\`\`\`jsx
function AddNote() {
  const [title, setTitle] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    console.log('saving:', title);
    setTitle('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Note title"
      />
      <button type="submit">Add</button>
    </form>
  );
}
\`\`\`

Two pieces:

- \`value={title}\` — the input shows whatever state says.
- \`onChange={(e) => setTitle(e.target.value)}\` — every keystroke
  updates state, which re-renders the input.

This is a "controlled component." Slightly verbose but it lets you
validate as the user types, reset the form after submit, or
programmatically set values.`,
    },
    {
      type: 'explain',
      id: 'm9-l4-e3',
      listen: true,
      markdown: `### Don't forget e.preventDefault()

A \`<form>\` submits by reloading the page by default. \`e.preventDefault()\`
stops that so you can handle the submit in JS.

If you forget it, the page refreshes and your state is wiped before you
notice anything happening. Classic beginner head-scratcher.`,
    },
    {
      type: 'readthis',
      id: 'm9-l4-r1',
      language: 'js',
      code: `function ItemList({ items }) {
  return (
    <ul>
      {items.map((item, i) => (
        <li key={i}>{item.name}</li>
      ))}
    </ul>
  );
}`,
      question: 'You add a new item at the START of the items array. What\'s wrong with using index as key?',
      options: [
        'Nothing wrong — index keys are fine for any list',
        'React will mismatch elements — the existing items get new indices, so their identity in React\'s eyes flips',
        'It only works for arrays of strings',
        'It throws a console error',
      ],
      answerIndex: 1,
      explanation:
        'When you insert at the start, the old "index 0" item is now at index 1, "index 1" is at 2, etc. React thinks "the item with key 0 has new content!" and re-renders mistakenly. Use a stable id from the data instead.',
    },
  ],
};
