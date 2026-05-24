import type { Lesson } from '@/types/lesson';

export const M4_L8_REMOTES_AND_PUSH: Lesson = {
  id: 'm4-l8-remotes-and-push',
  moduleId: 'git-github',
  title: 'Remotes, push, and pull',
  objective: 'Connect a local repo to GitHub, push commits up, pull changes down.',
  estimatedMinutes: 8,
  blocks: [
    {
      type: 'explain',
      id: 'm4-l8-e1',
      listen: true,
      markdown: `## A "remote" is a Git repo somewhere else

Usually on GitHub. Sometimes on your colleague's machine. Sometimes on
a private server. Git doesn't care — to Git, a remote is just a URL it
can talk to.

The standard remote name is \`origin\`. By convention it's the place
you originally cloned from, or the place you primarily push to.`,
    },
    {
      type: 'command',
      id: 'm4-l8-c1',
      label: 'Add a remote',
      command: 'git remote add origin https://github.com/your-name/your-repo.git',
      expectedOutput:
        'No output. Use the URL of an empty GitHub repo you just created.',
    },
    {
      type: 'command',
      id: 'm4-l8-c2',
      label: 'List configured remotes',
      command: 'git remote -v',
      expectedOutput:
        'origin <url> (fetch)\norigin <url> (push)',
    },
    {
      type: 'explain',
      id: 'm4-l8-e2',
      listen: true,
      markdown: `### Push and pull

\`git push\` — send your local commits **up** to the remote.

\`git pull\` — bring the remote's commits **down** to your local copy.
(This is actually \`git fetch\` + \`git merge\` in one step.)

First push of a new branch:

\`\`\`
git push -u origin main
\`\`\`

The \`-u\` sets up tracking — after that, plain \`git push\` and
\`git pull\` know what to do.`,
    },
    {
      type: 'command',
      id: 'm4-l8-c3',
      label: 'Push your main branch and start tracking',
      command: 'git push -u origin main',
      expectedOutput:
        'Counting objects... Writing objects... \nTo https://github.com/your-name/your-repo.git\n * [new branch]      main -> main',
    },
    {
      type: 'command',
      id: 'm4-l8-c4',
      label: 'Pull any new changes from the remote',
      command: 'git pull',
      expectedOutput:
        'If you\'re up to date: "Already up to date."\nOtherwise: Updating <hash>..<hash> followed by a list of changed files.',
    },
  ],
};
