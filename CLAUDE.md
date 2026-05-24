# CLAUDE.md — Ship It

Persistent context for Claude Code working on this project. Read it every session.

## Project identity

- **Name:** Ship It
- **Owner:** Gabs (Yakuver Solutions / Viszio)
- **Purpose:** Train one person to build a Viszio-shaped full-stack app from scratch, no AI
  assistance. Drill syntax, patterns, debugging; then graduate via build-alongs.
- **Repository:** `gabsno/ship-it` (to be created)
- **Local path:** `C:\Users\ntako\OneDrive\Desktop\GABS BUSINESS\Apps\Personal Studies\Hvac App`
- **Deploy target:** `gabsno.github.io/ship-it/`
- **Reference repo:** BMS Mastery — `gabsno.github.io/bms-mastery/` — port patterns from here

## Stack and tooling

- React 18 + TypeScript (strict — no `any`, no implicit any)
- Vite 5+ (with `base: '/ship-it/'` for GitHub Pages)
- Tailwind CSS 3+
- React Router 6
- `@monaco-editor/react` for code editor blocks
- Web Speech API (no library — built-in)
- `gh-pages` for deploy
- localStorage for all persistence

No backend. No database. No AI Tutor in v1.

## File layout

```
ship-it/
├── public/
├── src/
│   ├── components/
│   │   ├── blocks/
│   │   │   ├── ExplainBlock.tsx
│   │   │   ├── CommandBlock.tsx
│   │   │   ├── TypeAlongBlock.tsx
│   │   │   ├── ReadThisBlock.tsx
│   │   │   ├── CodeChallengeBlock.tsx
│   │   │   └── DebugThisBlock.tsx
│   │   ├── ListenPlayer.tsx          ← ported from BMS Mastery
│   │   ├── WhatsNewModal.tsx         ← ported
│   │   ├── UpdateBanner.tsx          ← ported
│   │   ├── QuizBlock.tsx             ← ported
│   │   └── ModuleCard.tsx
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   ├── ModulePage.tsx
│   │   ├── LessonPage.tsx
│   │   ├── BuildAlongPage.tsx
│   │   ├── GauntletPage.tsx
│   │   └── SettingsPage.tsx
│   ├── data/
│   │   ├── curriculum.ts             ← 12 modules + capstone metadata
│   │   ├── lessons/
│   │   │   ├── 01-runtime/
│   │   │   ├── 02-javascript/
│   │   │   ├── 03-terminal/
│   │   │   ├── 04-git-github/
│   │   │   ├── 05-html-css-dom/
│   │   │   ├── 06-async-fetch/
│   │   │   ├── 07-node-express/
│   │   │   ├── 08-sql-sqlite/
│   │   │   ├── 09-react/
│   │   │   ├── 10-auth-jwt/
│   │   │   ├── 11-react-native/
│   │   │   └── 12-deploy-ship/
│   │   ├── build-alongs/
│   │   │   ├── ba-1-notes-app.ts
│   │   │   ├── ba-2-todo-api.ts
│   │   │   ├── ba-3-expense-tracker.ts
│   │   │   └── ba-4-mini-viszio.ts
│   │   ├── gauntlet/
│   │   │   └── snippets.ts           ← 30+ broken code samples
│   │   ├── voicePresets.ts           ← exact port from BMS Mastery
│   │   └── whatsNew.ts
│   ├── hooks/
│   │   ├── useListen.ts
│   │   ├── useProgress.ts            ← reads/writes localStorage
│   │   └── useCodeRunner.ts          ← runs JS in a sandboxed iframe, captures console.log
│   ├── lib/
│   │   ├── sandbox.ts                ← iframe-based JS execution
│   │   └── progress.ts               ← localStorage schema + helpers
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── CLAUDE.md
├── 01-kickoff-prompt.md
├── 02-phase-guide.md
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## Coding conventions

- TypeScript strict. No `any`. Prefer `unknown` + narrowing.
- Single quotes, trailing commas, Prettier defaults.
- Imports: external → absolute (`@/...`) → relative. Blank line between groups.
- PascalCase for components/types, camelCase for funcs/vars, kebab-case for non-component files.
- React state only — no Redux, no Zustand. Progress is in localStorage via `useProgress`.
- Catch errors in event handlers and `useEffect`. Never let one bubble to the console silently.
- Comments only for the "why", never the "what".

## Lesson content schema

```ts
interface Lesson {
  id: string;                      // e.g. "js-functions-01"
  moduleId: string;                // e.g. "javascript"
  title: string;
  objective: string;               // one sentence — what user can do after
  blocks: LessonBlock[];
  quiz?: QuizQuestion[];           // optional 3-5 questions
  estimatedMinutes: number;
}

type LessonBlock =
  | { type: 'explain'; markdown: string }
  | { type: 'command'; id: string; label: string; command: string; expectedOutput?: string }
  | { type: 'typealong'; id: string; language: 'js' | 'ts' | 'html' | 'sql' | 'bash'; code: string }
  | { type: 'readthis'; id: string; language: string; code: string; question: string; options: string[]; answerIndex: number }
  | { type: 'codechallenge'; id: string; spec: string; starterCode: string; expectedConsoleOutput: string }
  | { type: 'debugthis'; id: string; brokenCode: string; errorMessage: string; expectedConsoleOutput: string };
```

Keep each lesson to **3–7 blocks** and **5–10 minutes**. If longer, split.

## CodeChallenge v1 rules

- Single function or single script per challenge — no React, no async-heavy code
- User code runs in a sandboxed iframe; we capture `console.log` calls into a string
- Pass = trimmed captured output === trimmed `expectedConsoleOutput`
- Show captured output vs expected on fail, side-by-side
- **No real test runner.** A v2 decision is deferred to after Module 8 is shipped.

## DebugThis v1 rules

- Same runner as CodeChallenge
- User receives broken code + the real error message it throws
- Pass = same captured-output equality after fix
- Track attempts; after 2 fails, show a `Hint` button

## TypeAlong v1 rules

- Pre-written code shown above a blank Monaco editor
- User types it in; on each keystroke, check prefix match
- Advance is gated on character-level match within ~95% (allow typos? — start strict, soften only if needed)

## Progress storage (localStorage)

Single key: `ship-it:progress:v1`

```ts
interface Progress {
  lessonsCompleted: Record<string, { completedAt: string }>;
  blocksCompleted: Record<string, { completedAt: string; attempts?: number }>;
  quizScores: Record<string, { score: number; total: number; takenAt: string }>;
  gauntletSolved: Record<string, { solvedAt: string; attempts: number }>;
  buildAlongsStarted: Record<string, { startedAt: string }>;
  settings: { voicePresetId?: string; rate?: number; pitch?: number };
  schemaVersion: 1;
}
```

Bump `schemaVersion` and write a migration in `lib/progress.ts` if shape changes.

## Build, run, test, deploy

```bash
npm install
npm run dev           # http://localhost:5173/ship-it/
npm run build         # outputs to dist/
npm run preview       # serve build locally
npm run deploy        # gh-pages -d dist
```

## What to ALWAYS do

- Port working patterns from BMS Mastery before writing new ones
- Mark every block in `data/lessons/...` with a stable `id` — progress depends on it
- Persist progress under `ship-it:progress:v1`; never use sessionStorage
- Add new lessons by appending to a module's lesson array — never reorder existing ones
- Use `// TODO(gabs)` for content placeholders that need the user to verify before publishing

## What to NEVER do

- No backend. Static + localStorage only.
- No streak counters, no "you missed a day", no daily reminders. The user opted out of schedules.
- No real test runner in v1. String-equality on console output is the v1 contract.
- No copyrighted lesson content — write all explanations from scratch, do not reproduce from
  tutorials or docs verbatim.

## The 12 modules + capstone

1. **How a computer runs your code** — mental model: source → parser → runtime → memory
2. **JavaScript fundamentals** — variables, types, functions, arrays, objects, control flow
3. **The terminal and your filesystem** — cd, ls, mkdir, pipes, env vars, PATH
4. **Git and GitHub from zero** — init, add, commit, branch, merge, conflict, PR, remote, .gitignore
5. **HTML, CSS, and the DOM** — semantics, layout, querySelector, events → unlocks **BA-1 Notes app**
6. **Async, fetch, and APIs** — promises, await, error handling, real HTTP
7. **Node.js and Express** — routes, middleware, request/response, body parsing
8. **SQL and SQLite** — DDL, DML, joins, FKs, transactions → unlocks **BA-2 Todo API**
9. **React** — components, state, effects, props, routing
10. **Auth, JWT, and integrations** — hashing, tokens, secrets, webhooks → unlocks **BA-3 Expense tracker**
11. **React Native + Expo** — same React patterns, mobile flavour, EAS
12. **Deploying and shipping** — Vercel, Railway, GitHub Pages, EAS, the 6 stability fixes
13. **🎓 Capstone: BA-4 Mini-Viszio** — clock-in with GPS. No AI. Exit exam.

**Debug Gauntlet** unlocks after Module 4 and is permanently available alongside everything else.

## Open questions to revisit

- **CodeChallenge v2 (real test runner) — decide after Module 8 ships.** Mark as `// TODO: revisit v2`
  in the phase guide. Don't quietly start building it.
- **AI Tutor** — defer to v2. Off by default.
- **Mobile responsiveness of Monaco editor** — Monaco is heavy on mobile. If Gabs uses the app
  on his phone often, evaluate CodeMirror as a fallback for small viewports in Phase 1.
- **Module locking** — start with free navigation. Add soft "recommended order" hints, not hard locks.
