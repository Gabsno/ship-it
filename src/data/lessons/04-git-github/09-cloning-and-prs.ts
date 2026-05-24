import type { Lesson } from '@/types/lesson';

export const M4_L9_CLONING_AND_PRS: Lesson = {
  id: 'm4-l9-cloning-and-prs',
  moduleId: 'git-github',
  title: 'Cloning and pull requests',
  objective: 'Copy a GitHub repo to your machine. Submit changes via a PR.',
  estimatedMinutes: 8,
  blocks: [
    {
      type: 'explain',
      id: 'm4-l9-e1',
      listen: true,
      markdown: `## Clone — getting a remote repo down to your machine

If a repo already exists on GitHub (yours or someone else's), \`git clone\`
copies it locally with full history:

\`\`\`
git clone https://github.com/some-user/some-repo.git
\`\`\`

That creates a new folder named \`some-repo\` containing the files and
the \`.git\` history. The \`origin\` remote is set up automatically.`,
    },
    {
      type: 'explain',
      id: 'm4-l9-e2',
      listen: true,
      markdown: `## Pull requests — the GitHub workflow

A pull request (PR) is GitHub-specific. The flow:

1. Create a feature branch locally: \`git checkout -b add-tag-filter\`.
2. Commit your work on that branch.
3. Push the branch: \`git push -u origin add-tag-filter\`.
4. Go to GitHub. It shows a yellow banner: "Compare & pull request."
   Click it.
5. Write a title, write a description, click "Create pull request."
6. Reviewers comment. You push more commits to the same branch. The PR
   updates automatically.
7. When approved, click "Merge pull request."

A PR is just a UI on top of \`git merge\`. The Git stuff is the same.
GitHub adds: a review interface, discussion, status checks (CI), and
the ability to require approvals before merging.

For solo work (Ship It is solo work) you usually skip PRs and merge
directly into \`main\`. But you should know how PRs work because every
team uses them.`,
    },
    {
      type: 'command',
      id: 'm4-l9-c1',
      label: 'Clone a repo to your machine',
      command: 'git clone https://github.com/some-user/some-repo.git',
      expectedOutput:
        'Cloning into \'some-repo\'...\nremote: Counting objects...\nReceiving objects: 100%\n...',
    },
  ],
};
