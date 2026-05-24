import type { Lesson } from '@/types/lesson';

export const M5_L2_SEMANTIC_TAGS: Lesson = {
  id: 'm5-l2-semantic-tags',
  moduleId: 'html-css-dom',
  title: 'Semantic tags',
  objective: 'Pick the right tag for the job. Stop wrapping everything in <div>.',
  estimatedMinutes: 6,
  blocks: [
    {
      type: 'explain',
      id: 'm5-l2-e1',
      listen: true,
      markdown: `## Tags carry meaning

Beginners reach for \`<div>\` for everything. Don't. HTML has tags
that describe what something **is**, not just where it sits.

The big ones:

- \`<header>\` — top-of-page banner.
- \`<nav>\` — navigation links.
- \`<main>\` — the main content of the page.
- \`<section>\` — a thematic grouping (with a heading inside).
- \`<article>\` — a self-contained piece (a blog post, a note).
- \`<aside>\` — tangential content (a sidebar).
- \`<footer>\` — bottom-of-page area.

For typography:

- \`<h1>\` through \`<h6>\` — headings. Use one \`<h1>\` per page.
- \`<p>\` — a paragraph.
- \`<ul>\`, \`<ol>\`, \`<li>\` — unordered/ordered list, list item.
- \`<a href="...">\` — a link.
- \`<strong>\` — important. (Bold is the default style but the meaning
  is "important.")
- \`<em>\` — emphasized. (Italic by default, meaning is "stressed.")

When you use these, screen readers, search engines, and other developers
all understand your page better. Bonus: CSS can target them directly.`,
    },
    {
      type: 'readthis',
      id: 'm5-l2-r1',
      language: 'html',
      code: `<main>
  <article>
    <h2>My note</h2>
    <p>Today I learned about HTML.</p>
  </article>
</main>`,
      question: 'Which tag would you replace with a <div> if you had to flatten this?',
      options: [
        'You\'d need to replace <main> with a <div>',
        'None — the semantic version is fine as-is',
        'All of them are wrong, this should be all <div>s',
        '<h2> should be a <p> with a class',
      ],
      answerIndex: 1,
      explanation:
        'This is already correctly structured. <main> wraps the main content, <article> wraps a self-contained piece, <h2> for the heading, <p> for prose. Don\'t fix what isn\'t broken.',
    },
    {
      type: 'typealong',
      id: 'm5-l2-ta1',
      language: 'html',
      instructions: 'Retype this semantic structure.',
      code: `<header>
  <h1>Ship It</h1>
  <nav>
    <a href="/">Home</a>
    <a href="/gauntlet">Gauntlet</a>
  </nav>
</header>
<main>
  <article>
    <h2>Welcome</h2>
    <p>This is your training rig.</p>
  </article>
</main>`,
    },
  ],
};
