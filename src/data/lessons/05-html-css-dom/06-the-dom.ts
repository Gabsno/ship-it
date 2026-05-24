import type { Lesson } from '@/types/lesson';

export const M5_L6_THE_DOM: Lesson = {
  id: 'm5-l6-the-dom',
  moduleId: 'html-css-dom',
  title: 'The DOM — HTML as a JS tree',
  objective: 'Understand that the browser turns your HTML into JS-reachable objects.',
  estimatedMinutes: 6,
  blocks: [
    {
      type: 'explain',
      id: 'm5-l6-e1',
      listen: true,
      markdown: `## DOM = Document Object Model

When the browser loads HTML, it builds a tree of objects in memory.
Each tag becomes a JS object. Each text node becomes a JS object.
This tree is the **DOM**.

Your JavaScript can read from and write to that tree. That's how a
page becomes interactive — JS doesn't manipulate the HTML text on disk,
it manipulates the live tree.

The global \`document\` is the entry point. Everything dangles off it.

\`\`\`js
console.log(document.title);     // the current <title>
console.log(document.body);      // the <body> element
\`\`\``,
    },
    {
      type: 'explain',
      id: 'm5-l6-e2',
      listen: true,
      markdown: `### The two queries you need

\`document.querySelector(selector)\` — find the first element matching
a CSS selector. Returns the element, or \`null\`.

\`document.querySelectorAll(selector)\` — find all elements matching.
Returns a NodeList (array-like).

\`\`\`js
const title = document.querySelector('h1');
const allParagraphs = document.querySelectorAll('p');
\`\`\`

The selector syntax is the same as CSS — \`'h1'\`, \`'.card'\`, \`'#hero'\`,
\`'main > p:first-child'\`, all of it.

If you can find it with CSS, you can find it with \`querySelector\`.`,
    },
    {
      type: 'readthis',
      id: 'm5-l6-r1',
      language: 'js',
      code: `// page has <h1 id="hero">Hello</h1>
const el = document.querySelector('#hero');
console.log(el.textContent);`,
      question: 'What does this log?',
      options: ['<h1>Hello</h1>', 'Hello', 'null', 'undefined'],
      answerIndex: 1,
      explanation:
        '`textContent` is the text inside the element — just "Hello", without the tags.',
    },
  ],
};
