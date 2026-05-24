import type { Lesson } from '@/types/lesson';

export const M4_L1_WHAT_IS_GIT: Lesson = {
  id: 'm4-l1-what-is-git',
  moduleId: 'git-github',
  title: 'What Git is (and isn\'t)',
  objective: 'Build a clear mental model of Git before touching the commands.',
  estimatedMinutes: 6,
  blocks: [
    {
      type: 'explain',
      id: 'm4-l1-e1',
      listen: true,
      markdown: `## Git is a time machine for your code

Every time you take a snapshot ("commit"), Git remembers the exact state
of every file in your project. You can go back to any commit. You can
see what changed between any two. You can branch off in a new direction
and come back later.

That's the whole point.

### Git vs GitHub

People use the two words interchangeably. They're not the same:

- **Git** — the tool that runs on your laptop. Tracks changes. No
  internet needed.
- **GitHub** — a website that hosts Git repositories online. It's where
  you push your local Git history so you (and others, and your laptop's
  replacement) can pull it back down.

You can use Git without GitHub (just local history). You cannot use
GitHub without Git.`,
    },
    {
      type: 'explain',
      id: 'm4-l1-e2',
      listen: true,
      markdown: `### Three places your code lives once Git is involved

1. **Working directory** — the actual files you edit in your editor.
2. **Staging area (the "index")** — a holding pen for changes you've
   marked as ready to commit.
3. **The repository** — the saved history of commits.

A typical cycle:

\`\`\`
edit some files                    -> working directory
git add <files>                    -> staging area
git commit -m "message"            -> repository
git push                           -> GitHub
\`\`\`

The staging area trips up beginners. It exists so you can edit ten
files but commit only the three that belong together. We'll drill it.`,
    },
    {
      type: 'readthis',
      id: 'm4-l1-r1',
      language: 'bash',
      code: `# user edits A.js and B.js
git add A.js
git commit -m "update A"
# what happened to B.js?`,
      question: 'What state is B.js in after these commands?',
      options: [
        'Committed too — `git commit -m` commits everything',
        'Still in the working directory, not staged, not committed',
        'Staged but not committed',
        'Deleted',
      ],
      answerIndex: 1,
      explanation:
        'Only files passed to `git add` get staged. The commit only includes staged changes. B.js is still sitting modified in the working directory.',
    },
  ],
};
