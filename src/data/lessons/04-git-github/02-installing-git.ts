import type { Lesson } from '@/types/lesson';

export const M4_L2_INSTALLING_GIT: Lesson = {
  id: 'm4-l2-installing-git',
  moduleId: 'git-github',
  title: 'Installing Git and configuring identity',
  objective: 'Have Git installed, your name and email set, ready to commit.',
  estimatedMinutes: 5,
  blocks: [
    {
      type: 'explain',
      id: 'm4-l2-e1',
      listen: true,
      markdown: `## Install Git, then tell it who you are

Git is one download. On Windows, Git for Windows includes "Git Bash" —
a Unix-style terminal that's better than CMD for everything in this app.

- **Windows** — go to git-scm.com, download, install with default
  options. Reopen your terminal afterwards.
- **Mac** — usually pre-installed. Open Terminal and run \`git --version\`.
  If missing, you'll be prompted to install Xcode command-line tools.
- **Linux** — \`sudo apt install git\` (Debian/Ubuntu) or your package
  manager's equivalent.

Then set two values so your commits know who made them:`,
    },
    {
      type: 'command',
      id: 'm4-l2-c1',
      label: 'Check Git is installed',
      command: 'git --version',
      expectedOutput: 'Something like: git version 2.52.0',
    },
    {
      type: 'command',
      id: 'm4-l2-c2',
      label: 'Set your name (used on every commit)',
      command: 'git config --global user.name "Your Name"',
      expectedOutput: 'No output. Replace "Your Name" with your actual name.',
    },
    {
      type: 'command',
      id: 'm4-l2-c3',
      label: 'Set your email (matches your GitHub account)',
      command: 'git config --global user.email "you@example.com"',
      expectedOutput:
        'No output. Use the same email you\'ll use on GitHub so commits show up linked to your profile.',
    },
    {
      type: 'command',
      id: 'm4-l2-c4',
      label: 'Confirm the config',
      command: 'git config --global --list',
      expectedOutput:
        'A list including user.name=... and user.email=...\n\nThis is stored in ~/.gitconfig.',
    },
  ],
};
