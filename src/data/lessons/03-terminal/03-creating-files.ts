import type { Lesson } from '@/types/lesson';

export const M3_L3_CREATING_FILES: Lesson = {
  id: 'm3-l3-creating-files',
  moduleId: 'terminal',
  title: 'Creating files and folders',
  objective: 'Make a folder, create a file inside it, view its contents.',
  estimatedMinutes: 7,
  blocks: [
    {
      type: 'explain',
      id: 'm3-l3-e1',
      listen: true,
      markdown: `## Four commands that do everything

\`mkdir <name>\` — make a directory (folder).

\`touch <name>\` — create an empty file. (Mac/Linux/Git Bash. On
PowerShell use \`New-Item <name>\` instead.)

\`cat <file>\` — print a file's contents to the terminal.

\`rm <file>\` — delete a file. \`rm -r <folder>\` deletes a folder and
everything in it. **No undo, no recycle bin** — the file is gone.

A good drill: make a folder, jump into it, create a file, look at it,
delete it, jump out.`,
    },
    {
      type: 'command',
      id: 'm3-l3-c1',
      label: 'Make a practice folder',
      command: 'mkdir ship-it-practice',
      expectedOutput:
        'No output — but `ls` should now show ship-it-practice in the current directory.',
    },
    {
      type: 'command',
      id: 'm3-l3-c2',
      label: 'Move into it',
      command: 'cd ship-it-practice',
      expectedOutput: 'No output. pwd will confirm you\'re inside.',
    },
    {
      type: 'command',
      id: 'm3-l3-c3',
      label: 'Create an empty file',
      command: 'touch hello.txt',
      expectedOutput:
        'No output. ls should show hello.txt.\n\nPowerShell users: use "New-Item hello.txt" instead.',
    },
    {
      type: 'command',
      id: 'm3-l3-c4',
      label: 'Write something into the file with echo',
      command: 'echo "first line" > hello.txt',
      expectedOutput:
        'No output. The > redirects echo\'s output INTO the file (overwriting).\n\nUse >> to append instead of overwrite.',
    },
    {
      type: 'command',
      id: 'm3-l3-c5',
      label: 'Read the file back',
      command: 'cat hello.txt',
      expectedOutput: 'first line',
    },
    {
      type: 'explain',
      id: 'm3-l3-e2',
      listen: true,
      markdown: `### Clean up after yourself

To remove the practice folder, first go back up:

\`\`\`
cd ..
rm -r ship-it-practice
\`\`\`

\`rm -r\` (recursive) deletes the folder and everything inside it. Be
careful — there's no recycle bin in the terminal. Always double-check
the path before you press Enter on an \`rm -r\` command. Especially
\`rm -rf /\`. Don't ever run that. (Ask a senior engineer one day what
happens. Then never run it.)`,
    },
  ],
};
