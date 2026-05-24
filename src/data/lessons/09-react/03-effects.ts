import type { Lesson } from '@/types/lesson';

export const M9_L3_EFFECTS: Lesson = {
  id: 'm9-l3-effects',
  moduleId: 'react',
  title: 'Side effects with useEffect',
  objective: 'Run code when a component mounts. Fetch data. Clean up.',
  estimatedMinutes: 9,
  blocks: [
    {
      type: 'explain',
      id: 'm9-l3-e1',
      listen: true,
      markdown: `## useEffect — code that runs after render

Rendering should be pure — given the same state and props, return the
same JSX. But sometimes you need to do something on the side: fetch
data, set a timer, subscribe to something.

That's \`useEffect\`:

\`\`\`jsx
import { useEffect, useState } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('/api/users')
      .then((r) => r.json())
      .then(setUsers);
  }, []);

  return (
    <ul>
      {users.map((u) => <li key={u.id}>{u.email}</li>)}
    </ul>
  );
}
\`\`\`

Two arguments:

1. **The effect function** — what to do.
2. **The dependency array** — when to do it.`,
    },
    {
      type: 'explain',
      id: 'm9-l3-e2',
      listen: true,
      markdown: `### Three dependency-array patterns

\`\`\`jsx
// 1. Run after every render
useEffect(() => { ... });

// 2. Run once, on mount
useEffect(() => { ... }, []);

// 3. Run when these values change
useEffect(() => { ... }, [userId, filter]);
\`\`\`

Pattern 2 is what you want for "load data once when the component
shows up." Pattern 3 is for "reload when the user picks a different
ID." Pattern 1 is rare — it usually means a bug.

The dependency array is a promise from you to React: "if any of these
change, re-run the effect." Forget to list something and you'll get
stale data. Lint rules (\`react-hooks/exhaustive-deps\`) catch this
for you.`,
    },
    {
      type: 'explain',
      id: 'm9-l3-e3',
      listen: true,
      markdown: `### Cleanup — for things you started

If your effect started something — a timer, a subscription, an event
listener — return a cleanup function:

\`\`\`jsx
useEffect(() => {
  const id = setInterval(() => {
    console.log('tick');
  }, 1000);

  return () => clearInterval(id);
}, []);
\`\`\`

React calls the cleanup when:

- The component unmounts.
- The effect is about to run again (because a dependency changed).

This is how you avoid memory leaks and zombie subscriptions. If you
don't return a cleanup but you should have, you'll see weird bugs
where things keep happening after you navigate away.

For a simple \`fetch\`, no cleanup is needed — it's a one-shot
operation.`,
    },
    {
      type: 'readthis',
      id: 'm9-l3-r1',
      language: 'js',
      code: `function ProductDetail({ productId }) {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch('/api/products/' + productId)
      .then((r) => r.json())
      .then(setProduct);
  }, []);

  return product ? <h1>{product.name}</h1> : <p>Loading...</p>;
}`,
      question: 'What\'s the bug?',
      options: [
        'No bug — this is the recommended pattern',
        'productId is missing from the dependency array — changing it won\'t refetch',
        'useEffect should be called inside the return',
        'Should use useState(null) without the explicit null',
      ],
      answerIndex: 1,
      explanation:
        'If a parent passes a new `productId`, this effect doesn\'t re-run — it only runs once. Should be `[productId]`. Common React beginner bug.',
    },
  ],
};
