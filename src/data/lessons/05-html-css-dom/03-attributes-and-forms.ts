import type { Lesson } from '@/types/lesson';

export const M5_L3_ATTRIBUTES_AND_FORMS: Lesson = {
  id: 'm5-l3-attributes-and-forms',
  moduleId: 'html-css-dom',
  title: 'Attributes and forms',
  objective: 'Add attributes to tags. Build a simple input form.',
  estimatedMinutes: 8,
  blocks: [
    {
      type: 'explain',
      id: 'm5-l3-e1',
      listen: true,
      markdown: `## Attributes — extra info on a tag

Attributes go inside the opening tag, name and value separated by \`=\`:

\`\`\`html
<a href="https://example.com" target="_blank">link</a>
<img src="photo.jpg" alt="A photo" width="200" />
\`\`\`

A few you'll use constantly:

- \`id\` — a unique label for one element. Use it sparingly.
- \`class\` — a label for styling. Many elements can share the same
  class.
- \`href\` — the URL for a link.
- \`src\` — the source for images, scripts.
- \`alt\` — text shown if the image fails to load (and read out by
  screen readers).
- \`type\`, \`name\`, \`value\` — for form inputs.`,
    },
    {
      type: 'explain',
      id: 'm5-l3-e2',
      listen: true,
      markdown: `## Forms — the input layer

\`\`\`html
<form>
  <label for="name">Name</label>
  <input id="name" type="text" />

  <label for="age">Age</label>
  <input id="age" type="number" />

  <button type="submit">Save</button>
</form>
\`\`\`

Three core pieces:

- \`<form>\` — the wrapper.
- \`<input>\` — a single field. The \`type\` decides what kind:
  \`text\`, \`number\`, \`email\`, \`password\`, \`checkbox\`, \`radio\`,
  \`date\`, more.
- \`<label>\` — describes a field. The \`for\` attribute matches the
  input's \`id\` — clicking the label focuses the input.

\`<button>\` ends the form. By default, clicking it submits the form
(triggering a page reload). In Module 9 you'll wire JS to intercept the
submit and handle it without reloading.`,
    },
    {
      type: 'typealong',
      id: 'm5-l3-ta1',
      language: 'html',
      instructions: 'Retype a simple two-field form.',
      code: `<form>
  <label for="title">Title</label>
  <input id="title" type="text" />

  <label for="body">Body</label>
  <textarea id="body"></textarea>

  <button type="submit">Save note</button>
</form>`,
    },
  ],
};
