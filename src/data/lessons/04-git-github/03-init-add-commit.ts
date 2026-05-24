import type { Lesson } from '@/types/lesson';

export const M4_L3_INIT_ADD_COMMIT: Lesson = {
  id: 'm4-l3-init-add-commit',
  moduleId: 'git-github',
  title: 'init, add, commit — the core loop',
  objective: 'Turn any folder into a Git repo and make your first commit.',
  estimatedMinutes: 8,
  blocks: [
    {
      type: 'explain',
      id: 'm4-l3-e1',
      listen: true,
      markdown: `## Three commands. Memorise them.

\`git init\` — turn the current folder into a Git repository. Creates a
hidden \`.git\` folder where all history is stored.

\`git add <file>\` — stage a file for the next commit. \`git add .\`
stages everything that changed.

\`git commit -m "message"\` — take a snapshot of the staged files with
a message describing what changed.

That's the loop. You'll run \`add\` and \`commit\` hundreds of times
per project.`,
    },
    {
      type: 'command',
      id: 'm4-l3-c1',
      label: 'Make and enter a practice folder',
      command: 'mkdir git-practice && cd git-practice',
      expectedOutput: 'No output. pwd should show you\'re inside git-practice.',
    },
    {
      type: 'command',
      id: 'm4-l3-c2',
      label: 'Turn it into a Git repo',
      command: 'git init',
      expectedOutput:
        'Initialized empty Git repository in <path>/git-practice/.git/\n\nls -la now shows a hidden .git folder.',
    },
    {
      type: 'command',
      id: 'm4-l3-c3',
      label: 'Make a file',
      command: 'echo "hello git" > readme.txt',
      expectedOutput: 'No output. cat readme.txt shows: hello git',
    },
    {
      type: 'command',
      id: 'm4-l3-c4',
      label: 'Stage it',
      command: 'git add readme.txt',
      expectedOutput: 'No output. The file is now in the staging area.',
    },
    {
      type: 'command',
      id: 'm4-l3-c5',
      label: 'Commit it',
      command: 'git commit -m "first commit"',
      expectedOutput:
        '[main (root-commit) abc1234] first commit\n 1 file changed, 1 insertion(+)\n create mode 100644 readme.txt',
    },
    {
      type: 'explain',
      id: 'm4-l3-e2',
      listen: true,
      markdown: `### Commit messages — the rule

Write commit messages in the imperative mood, like you're giving an
order to the codebase:

✅ \`add login page\`
✅ \`fix off-by-one in invoice loop\`
✅ \`refactor payment service into modules\`

❌ \`added login page\`
❌ \`I fixed a bug\`
❌ \`stuff\`

Future-you reading the log will thank present-you. Keep it under 70
characters. If you need more detail, add a blank line and a longer
paragraph below.`,
    },
  ],
};
