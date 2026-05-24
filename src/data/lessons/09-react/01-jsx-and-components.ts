import type { Lesson } from '@/types/lesson';

export const M9_L1_JSX_AND_COMPONENTS: Lesson = {
  id: 'm9-l1-jsx-and-components',
  moduleId: 'react',
  title: 'JSX and your first component',
  objective: 'Write components. Pass them props.',
  estimatedMinutes: 8,
  blocks: [
    {
      type: 'explain',
      id: 'm9-l1-e1',
      listen: true,
      markdown: `## JSX — HTML in JavaScript

JSX lets you write what looks like HTML inside JavaScript files:

\`\`\`jsx
const heading = <h1>Hello</h1>;
\`\`\`

That's not a string. It's a real JS expression that produces a React
element. A build step (Vite handles it) compiles it to:

\`\`\`js
const heading = React.createElement('h1', null, 'Hello');
\`\`\`

You'll never call \`createElement\` directly — just write JSX.

The basics that trip people up:

- Use \`className\`, not \`class\` (because \`class\` is a JS keyword).
- Use \`onClick\`, not \`onclick\` (camelCase for all events).
- Self-close every empty tag: \`<img />\`, \`<br />\`, \`<input />\`.
- Embed JavaScript inside JSX with curly braces: \`<p>{user.name}</p>\`.`,
    },
    {
      type: 'explain',
      id: 'm9-l1-e2',
      listen: true,
      markdown: `## A component is a function that returns JSX

\`\`\`jsx
function Greeting() {
  return <h1>Hello</h1>;
}
\`\`\`

To use it, write it as if it were a tag:

\`\`\`jsx
<Greeting />
\`\`\`

Two rules:

1. Component names must start with a **capital letter**. \`greeting\`
   (lowercase) would be treated as the HTML tag \`<greeting>\`.
2. A component returns exactly **one root element**. If you need
   multiple, wrap them in a fragment: \`<>...</>\`.

\`\`\`jsx
function Header() {
  return (
    <>
      <h1>Ship It</h1>
      <p>Drill, build, ship.</p>
    </>
  );
}
\`\`\``,
    },
    {
      type: 'explain',
      id: 'm9-l1-e3',
      listen: true,
      markdown: `## Props — inputs to a component

Props are like function arguments, but passed as JSX attributes:

\`\`\`jsx
function Greeting({ name }) {
  return <h1>Hello, {name}</h1>;
}

// usage
<Greeting name="Gabs" />
<Greeting name="Ama" />
\`\`\`

The component receives one object — \`{ name: 'Gabs' }\` — and destructures
it. Pass any number of props:

\`\`\`jsx
function ExpenseRow({ amount, category, date }) {
  return (
    <div className="row">
      <span>{date}</span>
      <span>{category}</span>
      <strong>{amount} GHS</strong>
    </div>
  );
}
\`\`\`

Components compose like Lego. You'll build small ones (a Button, a
Row, an Avatar) and combine them into bigger ones (a Form, a List,
a Page).`,
    },
    {
      type: 'typealong',
      id: 'm9-l1-ta1',
      language: 'js',
      instructions: 'Retype this component pair.',
      code: `function ExpenseRow({ amount, category }) {
  return (
    <div>
      <span>{category}</span>
      <strong>{amount}</strong>
    </div>
  );
}

function App() {
  return (
    <main>
      <ExpenseRow amount={500} category="Groceries" />
      <ExpenseRow amount={120} category="Transport" />
    </main>
  );
}`,
    },
  ],
};
