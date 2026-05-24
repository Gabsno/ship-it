import type { Lesson } from '@/types/lesson';

export const M3_L6_SURVIVAL_CHEATSHEET: Lesson = {
  id: 'm3-l6-survival-cheatsheet',
  moduleId: 'terminal',
  title: 'Survival cheatsheet',
  objective: 'Memorise the 20 commands that cover 95% of daily terminal work.',
  estimatedMinutes: 5,
  blocks: [
    {
      type: 'explain',
      id: 'm3-l6-e1',
      listen: true,
      markdown: `## The 20 that matter

You don't need to memorise hundreds of commands. These twenty get you
through nearly everything.

### Navigation
- \`pwd\` — print current directory.
- \`ls\` — list files. \`ls -la\` = detailed + hidden.
- \`cd <dir>\` — change directory. \`cd ..\` = up. \`cd ~\` = home. \`cd -\` = back to previous.

### Files & folders
- \`mkdir <name>\` — make folder. \`mkdir -p a/b/c\` = make nested.
- \`touch <name>\` — create empty file (Mac/Linux/Git Bash).
- \`cp <src> <dest>\` — copy.
- \`mv <src> <dest>\` — move or rename.
- \`rm <file>\` — delete file. \`rm -r <folder>\` = delete folder.

### Reading
- \`cat <file>\` — print file.
- \`head -20 <file>\` — first 20 lines.
- \`tail -20 <file>\` — last 20 lines. \`tail -f\` = follow as it grows.

### Searching
- \`grep "pattern" <file>\` — find lines matching.
- \`grep -r "pattern" .\` — search recursively in current folder.

### Plumbing
- \`|\` pipe one command into another.
- \`>\` write to file. \`>>\` append.
- \`&&\` chain — only run the next if the previous succeeds.
- \`Ctrl+C\` — stop the currently running command.
- \`Ctrl+L\` — clear the screen.
- \`Tab\` — autocomplete.`,
    },
    {
      type: 'explain',
      id: 'm3-l6-e2',
      listen: true,
      markdown: `## Two patterns to drill until they're reflex

### "Where am I, what's here, who am I?"

\`\`\`
pwd
ls
whoami
\`\`\`

Run these any time you're confused. They take 2 seconds and tell you
where you are in the tree, what's around you, and what user is doing
the typing. That's enough to unstick most "wait what?" moments.

### "Show me what just happened"

If a command fails, the error is in the terminal — scroll up. If it
ran but you can't see the result, try:

\`\`\`
ls -la                    # latest changes first with -lt
cat <file you just made>  # confirm the contents
\`\`\`

That's the whole loop: run command → look at output → adjust. The
terminal isn't trying to trick you. It's the bluntest tool in the box.`,
    },
    {
      type: 'command',
      id: 'm3-l6-c1',
      label: 'Print Ship It\'s starting incantation',
      command: 'pwd && ls && whoami',
      expectedOutput:
        'Three sections of output, one per command. && only runs the next command if the previous succeeded.',
    },
  ],
};
