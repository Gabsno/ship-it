import type { Lesson } from '@/types/lesson';

export const M9_L1_INTRO: Lesson = {
  id: 'm9-l1-intro',
  moduleId: 'react',
  title: 'React — module roadmap',
  objective: 'Get the React mental model. See your first component.',
  estimatedMinutes: 8,
  blocks: [
    {
      type: 'explain',
      id: 'm9-l1-e1',
      listen: true,
      markdown: `## React in one paragraph

React is a JavaScript library for building user interfaces by **declaring**
what the UI should look like, given the current state. Instead of writing
imperative code that mutates DOM nodes ("click button → manually change
the text"), you write a function that returns the UI, and React diffs
the result to update the DOM.

This Ship It app you're using right now is React. So is BMS Mastery.
So will be the frontends of BA-3 and BA-4.`,
    },
    {
      type: 'explain',
      id: 'm9-l1-e2',
      listen: true,
      markdown: `## A taste — a component

\`\`\`jsx
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

Three things:

1. A **component** — a function that returns JSX (HTML-like syntax).
2. **State** — \`useState(0)\` gives you a value and a setter. When the
   setter runs, React re-renders the component.
3. **Event handlers** — \`onClick={...}\` is a prop, not a DOM listener.
   React wires it for you.

You'll write hundreds of these. The whole module is variations on this
pattern.`,
    },
    {
      type: 'explain',
      id: 'm9-l1-e3',
      listen: true,
      markdown: `## What this module will cover

~10 lessons. Topics:

1. JSX — HTML-in-JS syntax.
2. Components and props.
3. State with \`useState\`.
4. Events.
5. Conditional rendering.
6. Lists and keys.
7. Forms.
8. Effects with \`useEffect\`.
9. Routing with React Router.
10. Common React bugs (DebugThis).

This module + Module 10 (Auth) unlock **BA-3 (Expense tracker)**.

## TODO(gabs) — content lands in a future drop

For now you have the shape. If you want to push ahead, the source code
of Ship It itself is a working reference — every \`.tsx\` file in
\`src/\` is a real React component you've already been using.`,
    },
  ],
};
