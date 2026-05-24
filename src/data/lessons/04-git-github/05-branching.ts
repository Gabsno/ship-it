import type { Lesson } from '@/types/lesson';

export const M4_L5_BRANCHING: Lesson = {
  id: 'm4-l5-branching',
  moduleId: 'git-github',
  title: 'Branches — parallel timelines',
  objective: 'Create a branch, switch between branches, see what branch you\'re on.',
  estimatedMinutes: 7,
  blocks: [
    {
      type: 'explain',
      id: 'm4-l5-e1',
      listen: true,
      markdown: `## A branch is a moveable label

A branch is just a name that points at a commit. When you commit on a
branch, the label moves forward to the new commit. That's it.

This sounds boring until you realise what it means: you can have **two**
labels — one called \`main\` and one called \`new-feature\` — and they
can move independently. You're now developing in two parallel timelines.

The default branch in new repos is called \`main\`. (Older repos use
\`master\`.) Every commit you've made so far has been on \`main\`.`,
    },
    {
      type: 'command',
      id: 'm4-l5-c1',
      label: 'See your branches',
      command: 'git branch',
      expectedOutput:
        'A list of branches with a * next to the current one:\n\n* main',
    },
    {
      type: 'command',
      id: 'm4-l5-c2',
      label: 'Create a new branch and switch to it',
      command: 'git checkout -b new-feature',
      expectedOutput:
        'Switched to a new branch \'new-feature\'\n\nThe -b flag means "create the branch as well as switch to it."',
    },
    {
      type: 'explain',
      id: 'm4-l5-e2',
      listen: true,
      markdown: `### Switching back and forth

\`\`\`
git checkout main             # go back to main
git checkout new-feature      # back to the feature branch
\`\`\`

Modern Git also has \`git switch <branch>\` which does the same thing
with cleaner syntax. Both work.

When you switch, **your working files change** to match the branch
you switched to. If you had uncommitted work, Git either carries it
with you or refuses to switch (if it would lose the changes). Commit
or stash first to be safe.`,
    },
    {
      type: 'command',
      id: 'm4-l5-c3',
      label: 'Switch back to main',
      command: 'git checkout main',
      expectedOutput: 'Switched to branch \'main\'',
    },
  ],
};
