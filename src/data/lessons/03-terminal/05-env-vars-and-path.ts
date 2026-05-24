import type { Lesson } from '@/types/lesson';

export const M3_L5_ENV_VARS_AND_PATH: Lesson = {
  id: 'm3-l5-env-vars-and-path',
  moduleId: 'terminal',
  title: 'Environment variables and PATH',
  objective: 'Understand what env vars are and why PATH matters.',
  estimatedMinutes: 7,
  blocks: [
    {
      type: 'explain',
      id: 'm3-l5-e1',
      listen: true,
      markdown: `## Env vars — settings the shell carries around

An **environment variable** is a named value the shell remembers. Every
process you start inherits those values.

You'll meet a few specific ones constantly:

- \`PATH\` — folders the shell searches when you type a command.
- \`HOME\` — your home folder.
- \`USER\` — your username.

Read one with \`echo $NAME\`:

\`\`\`
echo $HOME
\`\`\`

In PowerShell the syntax is \`$env:HOME\` or \`$env:USERPROFILE\`.`,
    },
    {
      type: 'command',
      id: 'm3-l5-c1',
      label: 'Show your HOME path',
      command: 'echo $HOME',
      expectedOutput:
        'Something like: /c/Users/ntako\n\nPowerShell: $env:USERPROFILE',
    },
    {
      type: 'explain',
      id: 'm3-l5-e2',
      listen: true,
      markdown: `## PATH — where the shell finds programs

When you type \`node\`, the shell doesn't magically know where node lives.
It walks every folder in \`PATH\`, in order, and runs the first \`node\`
it finds.

\`\`\`
echo $PATH
\`\`\`

You'll see a long string of folders separated by \`:\` (or \`;\` on
Windows). That's why the **first** thing to check when "command not found"
shows up is whether the installer added the program's folder to PATH —
and whether you closed and reopened the terminal so the new PATH is picked up.

This is also why some installers tell you "you may need to restart your
terminal." The PATH only loads when the terminal starts.`,
    },
    {
      type: 'command',
      id: 'm3-l5-c2',
      label: 'Find where a command actually lives',
      command: 'which node',
      expectedOutput:
        'A full path like: /c/Program Files/nodejs/node\n\nPowerShell: (Get-Command node).Source',
    },
  ],
};
