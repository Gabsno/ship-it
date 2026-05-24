export interface ModuleSummary {
  id: string;
  index: number;
  title: string;
  blurb: string;
  badge: string;
  unlocksBuildAlong?: string;
  isCapstone?: boolean;
}

export const CURRICULUM: ModuleSummary[] = [
  {
    id: 'runtime',
    index: 1,
    title: 'How a computer runs your code',
    blurb: 'The mental model — source → parser → runtime → memory. Without this nothing else clicks.',
    badge: 'Foundations',
  },
  {
    id: 'javascript',
    index: 2,
    title: 'JavaScript fundamentals',
    blurb: 'Variables, types, functions, arrays, objects, control flow. The language you live in.',
    badge: 'Language',
  },
  {
    id: 'terminal',
    index: 3,
    title: 'The terminal and your filesystem',
    blurb: 'cd, ls, mkdir, pipes, env vars, PATH. Stop being scared of the black window.',
    badge: 'Tooling',
  },
  {
    id: 'git-github',
    index: 4,
    title: 'Git and GitHub from zero',
    blurb: 'init, add, commit, branch, merge, conflict, PR, remote, .gitignore — the whole spine.',
    badge: 'Tooling',
  },
  {
    id: 'html-css-dom',
    index: 5,
    title: 'HTML, CSS, and the DOM',
    blurb: 'Semantics, layout, querySelector, events. Unlocks Build-Along #1 (Notes app).',
    badge: 'Frontend',
    unlocksBuildAlong: 'ba-1-notes-app',
  },
  {
    id: 'async-fetch',
    index: 6,
    title: 'Async, fetch, and APIs',
    blurb: 'Promises, await, error handling, real HTTP. Where most beginners drown.',
    badge: 'Language',
  },
  {
    id: 'node-express',
    index: 7,
    title: 'Node.js and Express',
    blurb: 'Routes, middleware, request/response, body parsing. Your first server.',
    badge: 'Backend',
  },
  {
    id: 'sql-sqlite',
    index: 8,
    title: 'SQL and SQLite',
    blurb: 'DDL, DML, joins, FKs, transactions. Unlocks Build-Along #2 (Todo API).',
    badge: 'Backend',
    unlocksBuildAlong: 'ba-2-todo-api',
  },
  {
    id: 'react',
    index: 9,
    title: 'React',
    blurb: 'Components, state, effects, props, routing. The frontend you actually ship.',
    badge: 'Frontend',
  },
  {
    id: 'auth-jwt',
    index: 10,
    title: 'Auth, JWT, and integrations',
    blurb: 'Hashing, tokens, secrets, webhooks. Unlocks Build-Along #3 (Expense tracker).',
    badge: 'Backend',
    unlocksBuildAlong: 'ba-3-expense-tracker',
  },
  {
    id: 'react-native',
    index: 11,
    title: 'React Native + Expo',
    blurb: 'Same React patterns, mobile flavour, EAS. Lean on TypeAlong + ReadThis.',
    badge: 'Mobile',
  },
  {
    id: 'deploy-ship',
    index: 12,
    title: 'Deploying and shipping',
    blurb: 'Vercel, Railway, GitHub Pages, EAS, the 6 stability fixes. Cross the finish line.',
    badge: 'Ops',
  },
  {
    id: 'capstone',
    index: 13,
    title: 'Capstone — Mini-Viszio',
    blurb: 'BA-4: clock-in with GPS. No AI. The exit exam — when you ship this, the app has done its job.',
    badge: 'Capstone',
    unlocksBuildAlong: 'ba-4-mini-viszio',
    isCapstone: true,
  },
];

export function getModule(id: string): ModuleSummary | undefined {
  return CURRICULUM.find((m) => m.id === id);
}
