import type { Lesson } from '@/types/lesson';

export const M4_L4_STATUS_AND_LOG: Lesson = {
  id: 'm4-l4-status-and-log',
  moduleId: 'git-github',
  title: 'status and log — your two reality checks',
  objective: 'Always know what changed and what\'s already saved.',
  estimatedMinutes: 6,
  blocks: [
    {
      type: 'explain',
      id: 'm4-l4-e1',
      listen: true,
      markdown: `## Run \`git status\` constantly

\`git status\` shows three buckets:

1. **Untracked files** — files Git has never seen.
2. **Changes not staged for commit** — tracked files you've modified
   but haven't \`git add\`-ed yet.
3. **Changes to be committed** — files in the staging area, waiting
   for \`git commit\`.

Run this before every commit. It tells you exactly what's about to be
saved.`,
    },
    {
      type: 'command',
      id: 'm4-l4-c1',
      label: 'See current state of the repo',
      command: 'git status',
      expectedOutput:
        'A report of branches, staged changes, unstaged changes, and untracked files.\n\nNothing changed? You\'ll see: "nothing to commit, working tree clean."',
    },
    {
      type: 'explain',
      id: 'm4-l4-e2',
      listen: true,
      markdown: `## \`git log\` — the history

Shows the chain of commits, newest first:

\`\`\`
git log
\`\`\`

Each entry shows the commit hash (a long ID), the author, the date,
and the message. Press \`q\` to exit if it scrolls into a pager.

A more compact view that fits in one screen:

\`\`\`
git log --oneline
\`\`\`

That shows one commit per line, short hash + message. Use this 99% of
the time.`,
    },
    {
      type: 'command',
      id: 'm4-l4-c2',
      label: 'See your commit history compactly',
      command: 'git log --oneline',
      expectedOutput: 'A list of commits like:\n\nabc1234 first commit',
    },
    {
      type: 'command',
      id: 'm4-l4-c3',
      label: 'See what actually changed in your unstaged work',
      command: 'git diff',
      expectedOutput:
        'Shows line-by-line additions (+) and removals (-) in modified files.\n\nFor staged changes use: git diff --staged',
    },
  ],
};
