import type { Lesson } from '@/types/lesson';

export const M1_L2_FILES_PROCESSES_MEMORY: Lesson = {
  id: 'm1-l2-files-processes-memory',
  moduleId: 'runtime',
  title: 'Files, processes, and memory',
  objective: 'Build the mental picture of what happens between double-click and screen.',
  estimatedMinutes: 6,
  blocks: [
    {
      type: 'explain',
      id: 'm1-l2-e1',
      listen: true,
      markdown: `## What happens when you "run" something

When you double-click an app — or run a program from the terminal —
three things happen, in this order:

1. **The file is read from disk.** Your program lives as bytes on the
   hard drive. The operating system pulls those bytes into memory so
   the CPU can read them.
2. **A process is created.** A process is just a name for "a running
   copy of a program." Your laptop has dozens running right now — the
   browser, the editor, the menu bar clock.
3. **Memory is given to the process.** The process gets a slice of
   the computer's memory (RAM) to store its variables, its open files,
   the pixels on screen.

When you close the program, the process ends and its memory is freed.
Nothing about that process survives — unless it deliberately wrote
something back to disk.`,
    },
    {
      type: 'explain',
      id: 'm1-l2-e2',
      listen: true,
      markdown: `### Why this matters for JavaScript

Every JS program you write runs inside one of these processes.
A browser tab is a process. A Node script is a process.

Each process has its own memory. Two browser tabs don't share variables.
Two Node scripts on the same machine don't share variables. If you want
two programs to talk to each other, you have to send data through
something they both can see — usually a file on disk, or a network message.

This is the difference between **runtime memory** (lives only while the
process is alive) and **persistent storage** (a file, a database — survives
the process ending). We'll come back to this when we hit Module 8.`,
    },
    {
      type: 'readthis',
      id: 'm1-l2-r1',
      language: 'js',
      code: `// Tab A
let counter = 0;
counter = counter + 1;
console.log(counter);`,
      question:
        'You open Tab B in the same browser and run the exact same code. Does Tab B\'s counter start at 0 or at the value Tab A reached?',
      options: [
        'Tab B starts where Tab A left off',
        'Tab B starts at 0 — separate processes have separate memory',
        'Tab B sees Tab A\'s value but can\'t change it',
        'It depends on the browser',
      ],
      answerIndex: 1,
      explanation:
        'Each tab is its own process with its own memory. Variables in one tab don\'t exist in another.',
    },
  ],
};
