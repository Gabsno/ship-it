import type { Lesson } from '@/types/lesson';

export const M5_L4_CSS_BASICS: Lesson = {
  id: 'm5-l4-css-basics',
  moduleId: 'html-css-dom',
  title: 'CSS — style for the page',
  objective: 'Write CSS rules. Connect them to HTML by tag, class, and id.',
  estimatedMinutes: 8,
  blocks: [
    {
      type: 'explain',
      id: 'm5-l4-e1',
      listen: true,
      markdown: `## CSS — selector + declarations

\`\`\`css
h1 {
  color: red;
  font-size: 24px;
}
\`\`\`

Two parts:

1. **Selector** — \`h1\` — picks which elements to style.
2. **Declaration block** — the \`{ ... }\` — pairs of \`property: value;\`.

This rule means: every \`<h1>\` on the page gets red text at 24px.`,
    },
    {
      type: 'explain',
      id: 'm5-l4-e2',
      listen: true,
      markdown: `### Three kinds of selectors you'll use 99% of the time

\`\`\`css
/* By tag — every <p> */
p {
  line-height: 1.5;
}

/* By class — every element with class="card" */
.card {
  border: 1px solid gray;
  padding: 16px;
}

/* By id — the single element with id="hero" */
#hero {
  background: black;
}
\`\`\`

Prefer **classes** for almost everything. IDs are global and exclusive
(one per page). Classes are reusable.`,
    },
    {
      type: 'explain',
      id: 'm5-l4-e3',
      listen: true,
      markdown: `### Loading CSS into HTML

External file (recommended):

\`\`\`html
<head>
  <link rel="stylesheet" href="style.css" />
</head>
\`\`\`

Inline in a \`<style>\` block (fine for small things):

\`\`\`html
<head>
  <style>
    body { font-family: sans-serif; }
  </style>
</head>
\`\`\`

Avoid the \`style="..."\` attribute on individual elements. It works but
mixing styling into HTML scales badly.`,
    },
    {
      type: 'readthis',
      id: 'm5-l4-r1',
      language: 'html',
      code: `<style>
  .danger { color: red; }
  #title { font-size: 32px; }
  p { line-height: 1.5; }
</style>

<h1 id="title">Hello</h1>
<p class="danger">Oh no</p>
<p>Normal text</p>`,
      question: 'What colour is the second <p>?',
      options: ['Red', 'Black (default — no rule matches)', 'It inherits red from .danger', 'Undefined'],
      answerIndex: 1,
      explanation:
        'The .danger class is only on the first <p>. The second <p> matches only the `p` selector (line-height) and inherits the default text colour.',
    },
  ],
};
