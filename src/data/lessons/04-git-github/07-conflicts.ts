import type { Lesson } from '@/types/lesson';

export const M4_L7_CONFLICTS: Lesson = {
  id: 'm4-l7-conflicts',
  moduleId: 'git-github',
  title: 'Merge conflicts',
  objective: 'Recognise a merge conflict, resolve it, finish the merge.',
  estimatedMinutes: 9,
  blocks: [
    {
      type: 'explain',
      id: 'm4-l7-e1',
      listen: true,
      markdown: `## What's a conflict?

A conflict happens when two branches both changed the same line in
the same file, and Git can't tell which version you want.

Imagine \`main\` has this line:

\`\`\`
const port = 3000;
\`\`\`

You're on \`new-feature\` and change it to:

\`\`\`
const port = 4000;
\`\`\`

Meanwhile, someone else changed \`main\` to:

\`\`\`
const port = 5000;
\`\`\`

When you merge, Git stops and says: "I don't know which one you want.
You decide."`,
    },
    {
      type: 'explain',
      id: 'm4-l7-e2',
      listen: true,
      markdown: `### What a conflict looks like in the file

Git rewrites the conflicting file with both versions marked:

\`\`\`
<<<<<<< HEAD
const port = 5000;
=======
const port = 4000;
>>>>>>> new-feature
\`\`\`

\`<<<<<<< HEAD\` — beginning of "what's on the current branch (main)".
\`=======\` — divider.
\`>>>>>>> new-feature\` — end of "what's on the incoming branch".

### How to fix it

1. Open the file.
2. **Delete** the \`<<<\`, \`===\`, \`>>>\` lines.
3. **Keep** the version you actually want — or write a third version that
   combines both.
4. Save the file.
5. \`git add <file>\` to mark the conflict resolved.
6. \`git commit\` (no \`-m\` needed — Git prefills a merge message).

Repeat for every conflicting file.`,
    },
    {
      type: 'explain',
      id: 'm4-l7-e3',
      listen: true,
      markdown: `### If you're in over your head — abort

If a merge gets messy and you want to undo and pretend you never tried:

\`\`\`
git merge --abort
\`\`\`

Back to the state you were in before \`git merge\`. No harm done.

This is good to know. The first time you hit a real merge conflict in
a project with 50 files changed, the urge to back out is healthy.`,
    },
    {
      type: 'readthis',
      id: 'm4-l7-r1',
      language: 'bash',
      code: `<<<<<<< HEAD
const greeting = 'hello';
=======
const greeting = 'hi';
>>>>>>> feature-branch`,
      question: 'You want to keep "hello". What should the file look like after you edit it?',
      options: [
        'Just the line: const greeting = \'hello\';',
        'Both lines, with the conflict markers',
        'Both lines, without the conflict markers',
        'You should run git merge --abort instead',
      ],
      answerIndex: 0,
      explanation:
        'Remove all conflict markers AND the version you don\'t want. The file should end up as if the conflict never existed.',
    },
  ],
};
