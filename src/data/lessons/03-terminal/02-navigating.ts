import type { Lesson } from '@/types/lesson';

export const M3_L2_NAVIGATING: Lesson = {
  id: 'm3-l2-navigating',
  moduleId: 'terminal',
  title: 'Navigating the filesystem',
  objective: 'Move between folders with cd, list contents with ls.',
  estimatedMinutes: 7,
  blocks: [
    {
      type: 'explain',
      id: 'm3-l2-e1',
      listen: true,
      markdown: `## Your computer is a tree of folders

Every file lives inside a folder. Folders live inside other folders. The
**root** is the very top — \`C:\\\` on Windows, \`/\` on Mac/Linux.

In the terminal, you're always **inside** one folder at a time — your
**current working directory**. Commands run from there. You move around
with two commands:

- \`cd <folder>\` — change directory.
- \`ls\` — list what's in the current folder.`,
    },
    {
      type: 'command',
      id: 'm3-l2-c1',
      label: 'List what\'s in the current folder',
      command: 'ls',
      expectedOutput:
        'A list of files and folders in the current directory.\n\nTry "ls -la" for more detail (hidden files + sizes).',
    },
    {
      type: 'command',
      id: 'm3-l2-c2',
      label: 'Move into a subfolder',
      command: 'cd Desktop',
      expectedOutput:
        'No output if it works — but pwd should now show you\'re inside Desktop.\n\nIf you see "No such file or directory", check the spelling and case.',
    },
    {
      type: 'explain',
      id: 'm3-l2-e2',
      listen: true,
      markdown: `### Going back up

To move **up** one folder, use \`..\` (two dots):

\`\`\`
cd ..
\`\`\`

To go up two: \`cd ../..\`. To jump straight to your home folder, just
\`cd\` with no argument, or \`cd ~\`.

### Tab completion is your best friend

Start typing a folder name and press **Tab**. The shell completes it for
you. If there's more than one match, press Tab twice to see the options.

You will save hours of your life by using Tab instead of typing full paths.`,
    },
    {
      type: 'command',
      id: 'm3-l2-c3',
      label: 'Go back to your home folder',
      command: 'cd ~',
      expectedOutput: 'No output — pwd will now show your home directory.',
    },
  ],
};
