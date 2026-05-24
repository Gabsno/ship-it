import type { Lesson } from '@/types/lesson';

export const M5_L1_HTML_STRUCTURE: Lesson = {
  id: 'm5-l1-html-structure',
  moduleId: 'html-css-dom',
  title: 'HTML — the structure of a page',
  objective: 'Read and write the basic HTML skeleton every page has.',
  estimatedMinutes: 7,
  blocks: [
    {
      type: 'explain',
      id: 'm5-l1-e1',
      listen: true,
      markdown: `## HTML is the bones of the web

An HTML document is text written with **tags**. Tags come in pairs:
an opening tag, content, and a closing tag.

\`\`\`html
<p>This is a paragraph.</p>
\`\`\`

\`<p>\` opens. \`</p>\` closes (note the slash). The text in between is
what shows on the page.

Some tags are self-closing — no closing pair:

\`\`\`html
<img src="cat.jpg" alt="A cat" />
<br />
\`\`\``,
    },
    {
      type: 'explain',
      id: 'm5-l1-e2',
      listen: true,
      markdown: `### Every HTML file has the same skeleton

\`\`\`html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>My Page</title>
  </head>
  <body>
    <h1>Hello</h1>
    <p>This is the visible content.</p>
  </body>
</html>
\`\`\`

- \`<!doctype html>\` — tells the browser "this is HTML5."
- \`<html>\` — the root of the document.
- \`<head>\` — metadata the user doesn't see directly: title, scripts,
  styles, viewport settings.
- \`<body>\` — everything visible on the page.

You'll never write this skeleton from scratch in real projects — your
framework (or a snippet) gives it to you. But you should be able to
read it.`,
    },
    {
      type: 'readthis',
      id: 'm5-l1-r1',
      language: 'html',
      code: `<!doctype html>
<html>
  <head>
    <title>About</title>
  </head>
  <body>
    <h1>About me</h1>
    <p>Hello, I'm Gabs.</p>
  </body>
</html>`,
      question: 'What shows up in the browser tab\'s title?',
      options: ['About me', 'About', 'Hello, I\'m Gabs.', '<title>About</title>'],
      answerIndex: 1,
      explanation: 'The <title> in <head> sets the tab title. <h1> shows on the page.',
    },
    {
      type: 'typealong',
      id: 'm5-l1-ta1',
      language: 'html',
      instructions: 'Retype this skeleton. You\'ll write it dozens of times.',
      code: `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Hello</title>
  </head>
  <body>
    <h1>Hello, world</h1>
  </body>
</html>`,
    },
  ],
};
