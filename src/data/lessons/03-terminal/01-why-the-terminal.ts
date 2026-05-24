import type { Lesson } from '@/types/lesson';

export const M3_L1_WHY_THE_TERMINAL: Lesson = {
  id: 'm3-l1-why-the-terminal',
  moduleId: 'terminal',
  title: 'Why the terminal',
  objective: 'Open a terminal and understand what the prompt is telling you.',
  estimatedMinutes: 6,
  blocks: [
    {
      type: 'explain',
      id: 'm3-l1-e1',
      listen: true,
      markdown: `## The terminal is a typing interface for your computer

A graphical app shows you buttons. The terminal shows you a **prompt** —
a place to type a command, hit Enter, and see what comes back.

It feels old-fashioned because it is. It also happens to be how most
serious development gets done. Why?

- It's **fast**. One command can move a hundred files. Try clicking that.
- It's **scriptable**. Anything you type can be saved to a file and run
  later, or in CI, or on a server.
- It's **honest**. Every tool — Node, Git, npm, your build scripts — runs
  in the terminal. You can read the actual error message instead of a
  loading spinner.

In Module 4 you'll use Git from the terminal. In Modules 7 and 8 you'll
run a server. None of that has a button.`,
    },
    {
      type: 'explain',
      id: 'm3-l1-e2',
      listen: true,
      markdown: `### How to open one

- **Windows** — open the Start menu, type "Terminal" or "PowerShell", press Enter.
  (PowerShell is fine for everything in Ship It.)
- **Mac** — Cmd+Space, type "Terminal", press Enter.
- **Linux** — you know.

You'll see a window with some text and a blinking cursor. That blinking
cursor is the **prompt** — it's waiting for you to type.

### What the prompt usually shows

\`\`\`
ntako@DESKTOP-XYZ MINGW64 ~/Desktop
$
\`\`\`

Three pieces of info in one line:

- \`ntako@DESKTOP-XYZ\` — your username and machine name.
- \`~/Desktop\` — your **current directory** (where commands will run).
- \`$\` — the actual prompt. The cursor sits after this.

The \`~\` is a shortcut for your home folder. Different shells use
different prompts, but they all show "who you are, where you are."`,
    },
    {
      type: 'command',
      id: 'm3-l1-c1',
      label: 'See where you are',
      command: 'pwd',
      expectedOutput:
        'Something like:\n\n/c/Users/ntako/Desktop\n\n(pwd = "print working directory")',
    },
    {
      type: 'command',
      id: 'm3-l1-c2',
      label: 'See who you are',
      command: 'whoami',
      expectedOutput: 'Your username — e.g.: ntako',
    },
  ],
};
