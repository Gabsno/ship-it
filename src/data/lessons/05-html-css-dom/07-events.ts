import type { Lesson } from '@/types/lesson';

export const M5_L7_EVENTS: Lesson = {
  id: 'm5-l7-events',
  moduleId: 'html-css-dom',
  title: 'Events — making the page interactive',
  objective: 'Listen for clicks. React with code.',
  estimatedMinutes: 7,
  blocks: [
    {
      type: 'explain',
      id: 'm5-l7-e1',
      listen: true,
      markdown: `## addEventListener

\`element.addEventListener(event, handler)\` — when \`event\` happens on
\`element\`, run \`handler\`.

\`\`\`js
const btn = document.querySelector('button');

btn.addEventListener('click', () => {
  console.log('button clicked');
});
\`\`\`

Common events:

- \`'click'\` — mouse click or tap.
- \`'input'\` — every keystroke in a text field.
- \`'change'\` — when an input loses focus and value changed.
- \`'submit'\` — form submit.
- \`'keydown'\` — keyboard key pressed.
- \`'load'\` — page or resource finished loading.

The handler function gets an **event object** as its argument. You'll
mostly care about \`event.target\` (the element that fired the event)
and \`event.preventDefault()\` (stop the browser's default behaviour —
needed for forms so they don't reload the page).`,
    },
    {
      type: 'explain',
      id: 'm5-l7-e2',
      listen: true,
      markdown: `### The form submit pattern

\`\`\`html
<form id="add-note">
  <input id="title" />
  <button type="submit">Add</button>
</form>
\`\`\`

\`\`\`js
const form = document.querySelector('#add-note');

form.addEventListener('submit', (event) => {
  event.preventDefault();    // stop the page reload
  const title = document.querySelector('#title').value;
  console.log('new note:', title);
});
\`\`\`

This pattern is the entire backbone of every form on the web — until
you reach React in Module 9 and learn the more declarative version.`,
    },
    {
      type: 'typealong',
      id: 'm5-l7-ta1',
      language: 'js',
      instructions: 'A counter button.',
      code: `let count = 0;

const btn = document.querySelector('#counter');
const display = document.querySelector('#display');

btn.addEventListener('click', () => {
  count = count + 1;
  display.textContent = 'Count: ' + count;
});`,
    },
  ],
};
