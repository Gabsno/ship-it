import type { Lesson } from '@/types/lesson';

export const M4_L6_MERGING: Lesson = {
  id: 'm4-l6-merging',
  moduleId: 'git-github',
  title: 'Merging — pulling a branch back into main',
  objective: 'Merge a feature branch into main and understand fast-forward vs merge commit.',
  estimatedMinutes: 7,
  blocks: [
    {
      type: 'explain',
      id: 'm4-l6-e1',
      listen: true,
      markdown: `## The merge workflow

You finished work on \`new-feature\`. Now you want those commits to be
part of \`main\`.

The pattern is always:

\`\`\`
git checkout main             # switch to the branch you want to merge INTO
git merge new-feature         # bring new-feature's commits into main
\`\`\`

Two things can happen:

1. **Fast-forward merge** — \`main\` hasn't moved since you branched off,
   so Git just slides the \`main\` label forward to match \`new-feature\`.
   Clean, no merge commit.

2. **Merge commit** — \`main\` got new commits while you were working
   on \`new-feature\`. Git creates a new "merge commit" that has both
   branches as parents.

Most workflows are fine with either. Some teams insist on no merge
commits — they rebase instead. That's a Module-12 conversation.`,
    },
    {
      type: 'readthis',
      id: 'm4-l6-r1',
      language: 'bash',
      code: `# starting on main, 1 commit ahead of new-feature
git checkout new-feature
# add 2 more commits on new-feature
# meanwhile no one touches main
git checkout main
git merge new-feature`,
      question: 'What kind of merge happens here?',
      options: [
        'A merge commit (because new-feature has more commits)',
        'Fast-forward — main hasn\'t moved, so the label just slides forward',
        'It fails — you have to rebase first',
        'It creates a new branch',
      ],
      answerIndex: 1,
      explanation:
        'Fast-forward applies when the branch you\'re merging into hasn\'t diverged. main has no new commits since the branch point, so its label moves forward to match new-feature.',
    },
    {
      type: 'command',
      id: 'm4-l6-c1',
      label: 'Merge a feature branch into main',
      command: 'git merge new-feature',
      expectedOutput:
        'If fast-forward:\n  Updating abc1234..def5678\n  Fast-forward\n\nIf merge commit: editor opens for the merge message — save and close to finish.',
    },
    {
      type: 'command',
      id: 'm4-l6-c2',
      label: 'Delete the feature branch after merging',
      command: 'git branch -d new-feature',
      expectedOutput:
        'Deleted branch new-feature (was abc1234).\n\nUse -D (capital) to force delete if Git refuses (e.g. unmerged work).',
    },
  ],
};
