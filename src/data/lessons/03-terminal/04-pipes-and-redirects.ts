import type { Lesson } from '@/types/lesson';

export const M3_L4_PIPES_AND_REDIRECTS: Lesson = {
  id: 'm3-l4-pipes-and-redirects',
  moduleId: 'terminal',
  title: 'Pipes and redirects',
  objective: 'Chain commands together. Save output to files.',
  estimatedMinutes: 6,
  blocks: [
    {
      type: 'explain',
      id: 'm3-l4-e1',
      listen: true,
      markdown: `## Pipes — feeding one command's output into another

The pipe character is \`|\`. It takes the output of the command on the
left and feeds it as input to the command on the right.

\`\`\`
ls | wc -l
\`\`\`

\`ls\` lists files. \`wc -l\` counts lines. Together: "count the files
in this folder." One pipe replaces a script you'd otherwise have to
write.

You'll see real chains like:

\`\`\`
git log | grep "fix:" | head -20
\`\`\`

— "show me the last 20 commit messages that start with fix:".`,
    },
    {
      type: 'explain',
      id: 'm3-l4-e2',
      listen: true,
      markdown: `### Redirects — saving output to a file

Three operators:

- \`>\` — write output to a file, **overwriting** what was there.
- \`>>\` — **append** output to a file.
- \`<\` — feed a file's contents in as input.

\`\`\`
echo "hello" > greetings.txt        # creates greetings.txt with "hello"
echo "again" >> greetings.txt       # adds "again" as a second line
cat greetings.txt                   # hello\\nagain
\`\`\`

Quick mental model: \`|\` connects commands. \`>\` and \`>>\` connect
commands to files. That's the whole story.`,
    },
    {
      type: 'command',
      id: 'm3-l4-c1',
      label: 'Count files in the current folder',
      command: 'ls | wc -l',
      expectedOutput: 'A number — the count of items ls printed.',
    },
    {
      type: 'command',
      id: 'm3-l4-c2',
      label: 'Save the file list to a file',
      command: 'ls > files.txt',
      expectedOutput:
        'No output — but cat files.txt now shows the listing.\n\nClean up after with: rm files.txt',
    },
  ],
};
