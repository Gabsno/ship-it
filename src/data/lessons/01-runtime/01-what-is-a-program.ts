import type { Lesson } from '@/types/lesson';

export const M1_L1_WHAT_IS_A_PROGRAM: Lesson = {
  id: 'm1-l1-what-is-a-program',
  moduleId: 'runtime',
  title: 'What is a program?',
  objective: 'Be able to say in one sentence what a program is and what it isn\'t.',
  estimatedMinutes: 5,
  blocks: [
    {
      type: 'explain',
      id: 'm1-l1-e1',
      listen: true,
      markdown: `## A program is text the computer follows

That's it. That's the whole idea.

A program is text — saved in a file — that the computer reads top to bottom
and follows like a recipe. Each line tells the computer to do one small thing:
store a number, print a word, ask the user a question, draw a pixel.

You're not "speaking to the computer." You're writing instructions in a
language the computer already knows how to follow. The language we'll use
in this app is **JavaScript**.

### What a program isn't

It isn't magic. It isn't smart. It does exactly what you wrote — including
the things you didn't mean to write. The bugs you'll spend time on later
are almost always the gap between what you wrote and what you meant.`,
    },
    {
      type: 'explain',
      id: 'm1-l1-e2',
      listen: true,
      markdown: `### A tiny example

The smallest useful JavaScript program is one line:

\`\`\`js
console.log('hello');
\`\`\`

When the computer runs that line, it prints the word \`hello\` to a place
called the **console** (a kind of scratch pad for programmers).

You'll see \`console.log\` everywhere in this app. It's how we peek at
what's happening inside a program.`,
    },
    {
      type: 'readthis',
      id: 'm1-l1-r1',
      language: 'js',
      code: `console.log('one');
console.log('two');
console.log('three');`,
      question: 'When you run this program, what does the console show?',
      options: [
        'one two three (all on one line)',
        'one\\ntwo\\nthree (three separate lines, in that order)',
        'three\\ntwo\\none (last line first)',
        'Nothing — console.log is just a comment',
      ],
      answerIndex: 1,
      explanation:
        'Programs run top to bottom. Each `console.log` prints its own line in the order it appears.',
    },
  ],
};
