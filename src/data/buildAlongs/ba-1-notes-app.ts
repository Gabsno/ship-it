import type { BuildAlong } from '@/types/buildAlong';

// TODO(gabs): Phase 5 — flesh out the spec text and starter files.
// This is a working placeholder so the BuildAlongPage has something real to render.

export const BA_1_NOTES_APP: BuildAlong = {
  id: 'ba-1-notes-app',
  title: 'Build-Along #1 — Notes app',
  summary:
    'Plain HTML, CSS, JS. localStorage for persistence. Add, edit, delete notes. Filter by tag. No frameworks. No AI.',
  unlockedByModule: 'html-css-dom',
  estimatedHours: 4,
  rules: [
    'No frameworks. Vanilla HTML, CSS, JS only.',
    'No AI assistance — no Copilot, no ChatGPT, no Claude. Honor code.',
    'localStorage only — no backend, no database.',
    "If you get stuck for more than 20 minutes, write down the exact question and keep going. Don't quit.",
  ],
  spec: `## What you're building

A small notes app you can use in your browser. Notes survive page reloads.
Notes can be tagged, and you can filter the list by tag.

## Required features

- Add a note (title + body + optional comma-separated tags)
- Edit an existing note
- Delete a note (with a confirm prompt)
- Filter the visible list by tag
- Persist everything to \`localStorage\` under a single key

## Hard constraints

- Three files only: \`index.html\`, \`style.css\`, \`script.js\`
- No frameworks, no build step. You open \`index.html\` directly.
- All JS in \`script.js\` — no inline \`<script>\` in HTML.

## Done means

- You can add 3 notes, refresh the page, all 3 are still there
- You can tag two of them \`#work\` and one \`#home\`, click the \`#work\` tag,
  and only the two work notes show
- You can edit a note's title and the change persists
- You can delete a note and confirm dialog stops accidental deletion`,
  milestones: [
    { id: 'ms-1', title: 'index.html boilerplate + header + empty note list container' },
    { id: 'ms-2', title: 'style.css with a layout you don\'t hate' },
    { id: 'ms-3', title: 'Add-note form with title + body + tags fields' },
    { id: 'ms-4', title: 'Add-note saves to localStorage and renders into the list' },
    { id: 'ms-5', title: 'Notes survive a page refresh' },
    { id: 'ms-6', title: 'Edit-note flow (click a note → fields populate → Save updates it)' },
    { id: 'ms-7', title: 'Delete-note flow with a confirm prompt' },
    { id: 'ms-8', title: 'Tag filter: clicking a tag chip filters the list' },
  ],
  starterFiles: [
    {
      path: 'index.html',
      language: 'html',
      content: `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Notes</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <header>
      <h1>Notes</h1>
    </header>
    <main>
      <!-- TODO: add-note form -->
      <!-- TODO: tag filter row -->
      <!-- TODO: note list -->
    </main>
    <script src="script.js"></script>
  </body>
</html>
`,
    },
    {
      path: 'style.css',
      language: 'css',
      content: `/* Start simple. Make it readable before you make it pretty. */

* { box-sizing: border-box; }
body {
  margin: 0;
  font-family: system-ui, sans-serif;
  background: #0e1116;
  color: #e7ebf0;
}
header {
  padding: 1rem 1.5rem;
  border-bottom: 1px solid #262b33;
}
main {
  padding: 1.5rem;
  max-width: 720px;
  margin: 0 auto;
}
`,
    },
    {
      path: 'script.js',
      language: 'js',
      content: `// Ship It — BA-1 Notes app starter
// No frameworks. No AI. Read each line; type each line.

const STORAGE_KEY = 'notes-app:v1';

function loadNotes() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveNotes(notes) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
}

// TODO: render notes into the list
// TODO: wire the add-note form
// TODO: wire edit / delete
// TODO: wire tag filter

console.log('notes app loaded with', loadNotes().length, 'notes');
`,
    },
    {
      path: 'README.md',
      language: 'md',
      content: `# BA-1 — Notes app

Open \`index.html\` directly in your browser. No build step.

## Milestones (tick as you go)

- [ ] index.html boilerplate + header + empty note list container
- [ ] style.css with a layout you don't hate
- [ ] Add-note form with title + body + tags fields
- [ ] Add-note saves to localStorage and renders into the list
- [ ] Notes survive a page refresh
- [ ] Edit-note flow (click a note → fields populate → Save updates it)
- [ ] Delete-note flow with a confirm prompt
- [ ] Tag filter: clicking a tag chip filters the list

## Rules

- Vanilla HTML/CSS/JS only.
- No AI. No Copilot. No ChatGPT. No Claude.
- localStorage only. No backend.
- Stuck 20+ min? Write the question down, then keep going.
`,
    },
  ],
};
