import type { Lesson } from '@/types/lesson';

export const M4_L10_GITIGNORE: Lesson = {
  id: 'm4-l10-gitignore',
  moduleId: 'git-github',
  title: '.gitignore — files you never want to commit',
  objective: 'Write a .gitignore that excludes node_modules, build output, and secrets.',
  estimatedMinutes: 6,
  blocks: [
    {
      type: 'explain',
      id: 'm4-l10-e1',
      listen: true,
      markdown: `## Some files don't belong in Git

\`.gitignore\` is a text file at the root of your repo. Every line is
a pattern Git uses to **skip** matching files when staging.

You should ignore:

- **\`node_modules/\`** — hundreds of MB of installed packages. Anyone
  who clones your repo runs \`npm install\` to recreate them.
- **\`dist/\`, \`build/\`** — compiled output. Regenerated from source.
- **\`.env\`, \`.env.local\`** — environment variables, often containing
  secrets like API keys. **Never commit these.**
- **\`*.log\`** — runtime logs.
- **Editor files** — \`.vscode/\`, \`.idea/\` (sometimes).
- **OS files** — \`.DS_Store\` (Mac), \`Thumbs.db\` (Windows).`,
    },
    {
      type: 'readthis',
      id: 'm4-l10-r1',
      language: 'bash',
      code: `# .gitignore
node_modules
dist
.env
.env.local
*.log
.DS_Store
.vscode/*
!.vscode/extensions.json`,
      question: 'What does the last line do?',
      options: [
        'Adds .vscode/extensions.json to the ignore list',
        'Comments out the .vscode rule above',
        'Whitelists .vscode/extensions.json — ignore everything in .vscode EXCEPT this file',
        'Marks the file as important',
      ],
      answerIndex: 2,
      explanation:
        'A `!` prefix means "do NOT ignore this." It overrides the previous pattern. Useful when you want to ignore a folder but keep one file in it.',
    },
    {
      type: 'explain',
      id: 'm4-l10-e2',
      listen: true,
      markdown: `### If you already committed something you shouldn't have

\`.gitignore\` only affects untracked files. If a file is already tracked
by Git, adding it to .gitignore does nothing.

To stop tracking a file (but keep it on disk):

\`\`\`
git rm --cached <file>
\`\`\`

Then commit. The file stays in your working directory but Git stops
following changes to it.

This is what to do if you accidentally committed \`node_modules\` or
\`.env\`. (For \`.env\` specifically — if you pushed it to GitHub, also
**rotate the secrets** immediately. Git history keeps everything forever.)`,
    },
    {
      type: 'command',
      id: 'm4-l10-c1',
      label: 'Stop tracking a file that shouldn\'t be in Git',
      command: 'git rm --cached .env',
      expectedOutput:
        'rm \'.env\'\n\nThen commit the removal: git commit -m "stop tracking .env"',
    },
  ],
};
