import type { Lesson } from '@/types/lesson';

export const M13_L1_INTRO: Lesson = {
  id: 'm13-l1-intro',
  moduleId: 'capstone',
  title: 'The capstone — Mini-Viszio',
  objective: 'Read the capstone brief and accept the no-AI honor code.',
  estimatedMinutes: 5,
  blocks: [
    {
      type: 'explain',
      id: 'm13-l1-e1',
      listen: true,
      markdown: `## This is the exit exam

If you've worked through the modules, attempted BA-1, BA-2, and BA-3,
you've already done the studying. The capstone is the test.

**Mini-Viszio** is a stripped-down mobile-first version of the real
Viszio: clock in with GPS, clock out, see a history. Two screens. One
real device.

You'll do it **without any AI assistance**. No Claude, no ChatGPT, no
Copilot. The point is not the code. The point is proving to yourself
that you can build a real full-stack app alone.`,
    },
    {
      type: 'explain',
      id: 'm13-l1-e2',
      listen: true,
      markdown: `## When to start it

Don't rush this. Recommended order:

1. Finish Module 1 → 12 (or at least Modules 1-5 and the relevant intros).
2. Complete BA-1, BA-2, BA-3.
3. Sit with the BA-4 spec. Sleep on it.
4. Start with Day 1 = environment setup. Don't try to code on Day 1.
5. Allocate roughly 25 hours across multiple sessions. Maybe a week.

The link to the capstone build-along is in the curriculum card for this
module, and on your Home page.`,
    },
    {
      type: 'explain',
      id: 'm13-l1-e3',
      listen: true,
      markdown: `## The promise

When you ship this — when the clock-in cycle works on your phone, no
AI involved — Ship It has done its job.

Take a screenshot. Send it to past-you who started this app. You owed
yourself that.`,
    },
  ],
};
