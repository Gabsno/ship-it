import type { Lesson } from '@/types/lesson';

export const M4_L11_UNDOING_THINGS: Lesson = {
  id: 'm4-l11-undoing-things',
  moduleId: 'git-github',
  title: 'Undoing things — the safety net',
  objective: 'Roll back unsaved edits, undo a stage, fix the last commit, panic less.',
  estimatedMinutes: 8,
  blocks: [
    {
      type: 'explain',
      id: 'm4-l11-e1',
      listen: true,
      markdown: `## The four levels of "undo"

### 1. Throw away unsaved changes in a file

You edited a file, didn't commit, want to go back to the last committed
version:

\`\`\`
git checkout -- <file>
# or in newer Git:
git restore <file>
\`\`\`

The edits are gone. This is destructive. Don't run it if you wanted
those edits.`,
    },
    {
      type: 'explain',
      id: 'm4-l11-e2',
      listen: true,
      markdown: `### 2. Unstage a file (but keep the changes)

You ran \`git add\` on something you didn't mean to. Take it back out
of the staging area:

\`\`\`
git restore --staged <file>
# or older syntax:
git reset HEAD <file>
\`\`\`

The file is unstaged. Your edits to it are preserved.`,
    },
    {
      type: 'explain',
      id: 'm4-l11-e3',
      listen: true,
      markdown: `### 3. Fix the last commit (message or contents)

You committed but the message has a typo, OR you forgot to stage a file:

\`\`\`
git add <forgotten-file>          # optional
git commit --amend
\`\`\`

This **rewrites** the most recent commit. If you haven't pushed yet,
no harm. If you've already pushed, you'll have to force-push — which
can cause problems for anyone who pulled. Be careful on shared branches.`,
    },
    {
      type: 'explain',
      id: 'm4-l11-e4',
      listen: true,
      markdown: `### 4. Throw away the last commit (keep the changes)

You committed but you want to redo the whole commit:

\`\`\`
git reset HEAD~1
\`\`\`

The commit is gone from history, but the changes are still in your
working directory (unstaged). Re-stage and re-commit how you want.

### Nuclear option: throw away the last commit AND the changes

\`\`\`
git reset --hard HEAD~1
\`\`\`

**Destructive.** Your last commit and all the changes in it are gone.
Use this only when you're sure.

### When you're really lost

\`git reflog\` — shows the recent history of where HEAD has been. Often
you can recover from "I just did a hard reset and want to undo that"
by finding the right commit hash in reflog and \`git reset --hard <hash>\`
back to it. Git almost never truly loses data within ~30 days.`,
    },
    {
      type: 'command',
      id: 'm4-l11-c1',
      label: 'Find old commits if you panic',
      command: 'git reflog',
      expectedOutput:
        'A history of every move HEAD has made — including resets, checkouts, commits. Each line has a hash you can git reset --hard back to.',
    },
  ],
};
