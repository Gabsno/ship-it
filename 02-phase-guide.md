# Ship It — Phase Guide

Build the app in the order below. Each phase has an observable verification step.
Do not start phase N+1 until phase N is verified working in the browser.

---

## Phase 0 — Scaffolding and shell port

**Deliverable:** Empty app shell that runs in dev mode, with all BMS Mastery patterns ported.

Steps:
1. `npm create vite@latest ship-it -- --template react-ts`
2. Install: `tailwindcss`, `postcss`, `autoprefixer`, `react-router-dom`, `@monaco-editor/react`, `gh-pages`
3. Configure Tailwind (`tailwind.config.js`, `index.css` directives)
4. Configure Vite for GitHub Pages: `base: '/ship-it/'` in `vite.config.ts`
5. Set up React Router with routes: `/`, `/module/:moduleId`, `/lesson/:lessonId`, `/build-along/:id`, `/gauntlet`, `/settings`
6. Port from BMS Mastery (copy files, adapt imports):
   - `src/data/voicePresets.ts` (exact copy)
   - `src/components/ListenPlayer.tsx` (Pause/Resume/Restart/Stop with the resume-from-stop fix)
   - `src/components/WhatsNewModal.tsx` + `src/data/whatsNew.ts` pattern
   - `src/components/UpdateBanner.tsx` (60-second poll)
   - `src/pages/SettingsPage.tsx` (voice picker with `[local]`/`[online]` tags, speed + pitch sliders)
   - `src/components/QuizBlock.tsx`
7. Add `npm run deploy` → `gh-pages -d dist`
8. Render placeholder `HomePage` listing the 12 modules from `src/data/curriculum.ts` (titles only)

**Verification:** `npm run dev` opens the home page, all 12 modules render as cards, clicking
one navigates to `/module/:id` (which can show a "Coming soon" placeholder). Settings page
opens, Listen Test button works on a placeholder string.

---

## Phase 1 — The six lesson block components

**Deliverable:** All six block types render correctly with hardcoded test data.

Build in this order — each one isolated, with a test lesson that exercises only that block:

### 1.1 `ExplainBlock`
- Renders markdown → HTML
- Inlines the `ListenPlayer` so any explain block can be read aloud
- Uses `react-markdown` (add as dependency)

### 1.2 `CommandBlock`
- Renders `label`, the command in a monospace box, a copy button
- Copy button writes to clipboard and shows a "Copied!" confirm for 1.5s
- "I ran this" checkbox persists to `useProgress` keyed by block id
- Optional `expectedOutput` shown in a collapsible "What you should see" section

### 1.3 `TypeAlongBlock`
- Shows the target code (read-only Monaco) above an empty Monaco editor
- On every keystroke in the empty editor, compare to target prefix
- Show progress bar: chars matched / total chars
- On 100% match, mark complete in `useProgress` and show a green confirm
- Allow trailing whitespace tolerance

### 1.4 `ReadThisBlock`
- Read-only Monaco with the code
- Below it: one multiple-choice question testing comprehension
- On correct answer, mark complete; on incorrect, show explanation

### 1.5 `CodeChallengeBlock` (v1)
- Spec text at top
- Monaco editor with `starterCode` prefilled
- "Run" button → executes code in sandboxed iframe via `lib/sandbox.ts`
- Show captured `console.log` output below
- "Submit" button → string-equality check against `expectedConsoleOutput`
- On pass, mark complete; on fail, show diff view (your output vs expected)
- Track attempts in `useProgress`

### 1.6 `DebugThisBlock`
- Like CodeChallenge but `starterCode` is broken and `errorMessage` is shown at the top
- Same run/submit flow
- After 2 failed attempts, reveal a "Hint" button with a vague nudge (e.g. "Look at line 4")

### 1.7 `lib/sandbox.ts`
- Creates a hidden iframe with `sandbox="allow-scripts"`
- Overrides `console.log` inside the iframe to post messages back to parent
- Parent listens for messages and collects them into a single string
- 3-second timeout — if the iframe hangs, kill it and report "Timed out"
- Catch thrown errors and report them as part of captured output

**Verification:** Visit `/lesson/test-blocks` (a hardcoded test lesson) and exercise each
block type. All six work end-to-end. Progress is persisted across page reloads.

---

## Phase 2 — Lesson page and progress wiring

**Deliverable:** A real lesson page that renders any lesson from data, tracks progress,
and shows completion state.

Steps:
1. Build `LessonPage.tsx` — reads `:lessonId` from URL, looks up lesson in `data/lessons/...`,
   renders blocks in order
2. Build `useProgress` hook on top of `lib/progress.ts` (localStorage with the schema in CLAUDE.md)
3. Build `ModulePage.tsx` — lists lessons in a module, shows completion % per lesson, recommended order
4. Update `HomePage` — show completion % per module, show "Continue where you left off" card
5. Add "Mark lesson complete" button at the bottom of each lesson (manual gate, since not every
   block type is auto-checkable)
6. Build the What's New modal (port pattern) — add the first entry announcing Ship It v0.1

**Verification:** Complete a test lesson (using the hardcoded test blocks from Phase 1). Reload
the browser. The lesson shows as complete on home + module pages. Progress survives across
sessions.

---

## Phase 3 — Build-Along page + Debug Gauntlet shell

**Deliverable:** The two non-lesson pages render with placeholder content.

Steps:
1. Build `BuildAlongPage.tsx` — renders a build-along as long-form markdown + downloadable
   `starter.zip` link + checklist of "I did this" milestones the user can tick
2. Build `GauntletPage.tsx` — renders a grid of debug snippets; each opens in a focused view
   that's just a `DebugThisBlock` with no surrounding lesson
3. Add 1 placeholder build-along (`ba-1`) and 3 placeholder gauntlet snippets so the pages
   aren't empty

**Verification:** Both pages render, navigation works, the placeholder build-along is readable,
and the 3 gauntlet snippets are solvable.

---

## Phase 4 — Author Module 1 + Module 2 content

**Deliverable:** Real, complete content for Module 1 (How a computer runs your code) and
Module 2 (JavaScript fundamentals).

Content per module: aim for **6–10 lessons**, each **5–10 min**, mixing block types.

Module 1 lessons (suggested):
1. What is a program? (Explain + ReadThis)
2. Files, processes, and memory (Explain)
3. The browser is a runtime (Explain + ReadThis)
4. Node is also a runtime (Explain + Command — install Node, run `node -v`)
5. Source code → execution (Explain + small CodeChallenge: "print hello world")

Module 2 lessons (suggested):
1. Variables and types (Explain + TypeAlong + CodeChallenge)
2. Operators and control flow (Explain + CodeChallenge ×2)
3. Functions (Explain + TypeAlong + CodeChallenge ×3)
4. Arrays (Explain + CodeChallenge ×3)
5. Objects (Explain + CodeChallenge ×3)
6. Loops and iteration (Explain + CodeChallenge ×3)
7. Common bugs (DebugThis ×5)
8. Module 2 review (Quiz, 8–10 questions)

Each lesson must include the user-defined Listen-supported Explain blocks so audio works
end-to-end.

**Verification:** Gabs completes Module 1 and at least 4 lessons of Module 2 personally.
He confirms the pacing and block mix feel right before content scales further.

---

## Phase 5 — Author Modules 3, 4, 5 + Build-Along BA-1

**Deliverable:** Through Module 5 (HTML/CSS/DOM), with BA-1 (Notes app) authored and ready
to attempt.

Module 3 (Terminal): mostly CommandBlocks. ~6 lessons.
Module 4 (Git/GitHub): full beginner track — ~12 lessons. Heavy CommandBlock + Explain mix.
   This is the largest content module. Cover: init, add, status, commit, log, branch, merge,
   conflict resolution, remote, push, pull, .gitignore, PR workflow, undoing things.
Module 5 (HTML/CSS/DOM): ~8 lessons. Mix Explain + TypeAlong + small CodeChallenges (write a
   function that toggles a class, etc.)

BA-1 (Notes app) spec:
- Plain HTML + CSS + JS only, no React
- localStorage for persistence
- Add, edit, delete notes
- Filter by tag
- Provide a starter.zip with an empty `index.html`, `style.css`, `script.js` and a `README.md`
  that's the spec broken into 8 milestones the user ticks off as they build

**Verification:** Gabs completes BA-1 in his own VS Code, no AI help. App tracks the build-along
as completed. **The Debug Gauntlet is unlocked from this phase onward — confirm the gauntlet
link appears in the nav.**

---

## Phase 6 — Author Modules 6, 7, 8 + BA-2

**Deliverable:** Through Module 8 (SQL/SQLite), with BA-2 (Todo API) authored.

Module 6 (Async/fetch): ~8 lessons. Heavy on CodeChallenge with promises + await.
Module 7 (Node/Express): ~8 lessons. CommandBlocks for `npm init`, `express` install. CodeChallenges
   for route handlers (output of GET / handler).
Module 8 (SQL/SQLite): ~10 lessons. ReadThis-heavy for query shape; CodeChallenges where the user
   writes a query and we run it against an in-browser SQLite via sql.js. **This is the one place
   v1 might strain — if the in-browser SQL runner is too much work, fall back to ReadThis + Quiz
   for this module and revisit in v2.**

BA-2 (Todo API) spec:
- Node + Express + SQLite (better-sqlite3 is fine here since it's the user's local machine)
- CRUD endpoints: GET, POST, PUT, DELETE for `/todos`
- Persist to a SQLite file
- No frontend — user tests with `curl` or Postman
- Starter.zip with empty `index.js`, `package.json`, and a README spec with 10 milestones

**Verification:** Gabs completes BA-2. **At end of Phase 6, decide: build CodeChallenge v2 or
defer? See `// TODO: revisit v2` note in CLAUDE.md.**

---

## Phase 7 — Author Modules 9, 10 + BA-3

**Deliverable:** Through Module 10 (Auth/JWT), with BA-3 (Expense tracker) authored.

Module 9 (React): ~10 lessons. This module is where v1 CodeChallenge starts to feel limiting —
   leaning more on TypeAlong + ReadThis + DebugThis for component-shaped exercises. That's fine.
Module 10 (Auth/JWT): ~8 lessons. CommandBlocks for installing `bcrypt`, `jsonwebtoken`. ReadThis
   for middleware patterns. DebugThis for common auth bugs.

BA-3 (Expense tracker) spec:
- React frontend + Express/SQLite backend (reusing BA-2 as the starting backend)
- JWT auth: register, login, protected routes
- Add expenses, list them, filter by date
- Starter.zip is more substantial — pre-scaffolded React project + the BA-2 backend
- Milestones: 12

**Verification:** Gabs completes BA-3. By this point he should be visibly faster than at BA-1.

---

## Phase 8 — Author Modules 11, 12 + Capstone BA-4 + final polish

**Deliverable:** All modules complete. Capstone defined. App ready to use as a daily tool.

Module 11 (React Native + Expo): ~8 lessons. Heavy on CommandBlocks (Expo CLI, EAS). Most
   "code" content is TypeAlong + ReadThis — running native code in a browser sandbox isn't
   useful, so this module leans into spec-reading and patterns.
Module 12 (Deploy/ship): ~6 lessons. CommandBlock-heavy. The 6 stability fixes (Sentry, uptime,
   API versioning, JWT blacklist, migrations, Jest) get one lesson each as a final hardening pass.

Capstone BA-4 (Mini-Viszio) spec:
- React Native + Expo frontend
- Express + SQLite backend
- One feature: GPS clock-in/clock-out with a list of past clock-ins
- No AI assistance permitted (honour code)
- Milestones: 15
- This is the **exit exam**. If Gabs ships this, the app has done its job.

Final polish:
- Author the What's New entries for the v0.1 → v1.0 launch
- Audit all lesson `id`s for stability (renaming an id breaks the user's progress — never rename)
- Run a full pass through the app on Gabs's phone — confirm the Monaco editor is usable on mobile;
  if not, evaluate CodeMirror swap (see CLAUDE.md open question)
- `npm run deploy` to GitHub Pages

**Verification:** Gabs completes the capstone. The app stays in his daily-use rotation for at
least 2 weeks without major friction. Any friction goes into a v1.1 changelog.

---

## Out of scope for v1

- AI Tutor (Gemini + Claude integration) — defer to v2
- CodeChallenge v2 with real test runner — decision deferred to end of Phase 6
- Mobile-native version of Ship It itself (React Native fork) — not needed; the web version
  works on phones via GitHub Pages
- Social / sharing features
- Streak counters / daily reminders (explicitly out of scope per user direction)

## Phase timing (rough, no schedule pressure)

| Phase | Effort estimate | Notes |
|---|---|---|
| 0 | 1 day | Mostly porting |
| 1 | 4–6 days | The six blocks + sandbox — the hardest engineering phase |
| 2 | 2 days | Wiring + progress |
| 3 | 1 day | Two page shells |
| 4 | 3–5 days | First content authored |
| 5 | 5–7 days | Module 4 (Git) is the longest single module |
| 6 | 4–6 days | SQL module may need the sql.js detour |
| 7 | 4–6 days | React + Auth content |
| 8 | 3–5 days | Capstone spec + polish |

Total: ~5 weeks of focused work, but the user explicitly chose no daily schedule.
Build at whatever pace fits between MEP client work.
