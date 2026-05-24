# Ship It — Claude Code Kickoff

You're starting a new project. Read this whole prompt before writing any code.

## What we're building

**Ship It** — a Duolingo-style training app whose goal is to make one specific user able to
build a Viszio-shaped full-stack app from scratch with no AI assistance.

Three deliverables, ordered:

1. **The app itself** — drills syntax, patterns, and concepts via short interactive lessons
2. **Build-along project specs** (in-app, downloadable) — 4 mini-projects the user builds in
   real VS Code, no AI
3. **Debug Gauntlet** (a module inside the app) — broken code snippets the user fixes

Audience: one person — Gabs (owner of Yakuver Solutions / Viszio). Treat this as a personal
training tool, not a course product.

## The stack

This is a fork of the BMS Mastery App pattern. Same stack:

- React 18 + TypeScript (strict)
- Vite 5+
- Tailwind CSS 3+
- React Router 6
- **Monaco Editor** (`@monaco-editor/react`) for the new CodeChallenge / DebugThis / TypeAlong blocks
- Web Speech API (Listen player — port from BMS Mastery)
- localStorage for all persistence — no backend
- GitHub Pages for deploy
- Optional AI Tutor (Gemini + Claude, BYO key) — off by default, v2

## Where the code lives

`C:\Users\ntako\OneDrive\Desktop\GABS BUSINESS\Apps\Personal Studies\Hvac App`

Deploy target: `gabsno.github.io/ship-it/` (new repo: `ship-it`).

Note: the folder is named "Hvac App" for the user's organisation, but the app itself is called
**Ship It** and that's its name everywhere in code, the repo, and the deployment. Don't rename
internal references to match the folder.

## What to do right now (Phase 0)

1. Scaffold: `npm create vite@latest ship-it -- --template react-ts`
2. Install: Tailwind, React Router, `@monaco-editor/react`, `gh-pages`
3. Port from BMS Mastery (copy + adapt, don't reinvent):
   - `src/data/voicePresets.ts` — exact copy
   - `ListenPlayer` component (Pause/Resume/Restart/Stop with the resume-from-stop fix)
   - What's New modal + `src/data/whatsNew.ts` pattern
   - Auto-update banner (60-second poll)
   - SettingsPage voice/speed/pitch UI with `[local]`/`[online]` voice tags
4. Set up routing: `/`, `/module/:moduleId`, `/lesson/:lessonId`, `/build-along/:id`, `/gauntlet`, `/settings`
5. Configure `gh-pages` deploy script with `base: '/ship-it/'` in vite.config
6. Render placeholder Home page listing the 12 modules from `src/data/curriculum.ts`
7. **Verify:** `npm run dev` opens the home page, modules render, navigation works
8. **Stop and confirm Phase 0 complete before Phase 1**

## What comes next

See `02-phase-guide.md` for all 8 phases. Do not jump ahead — each phase has an observable
verification step. Finish, verify, then move on.

## Read these before coding

- `CLAUDE.md` — project conventions and rules (at repo root)
- `02-phase-guide.md` — the build order
- Reference repo: BMS Mastery (live at gabsno.github.io/bms-mastery/) — the voice player,
  presets, modal, and banner are already production-tested there. Copy structures, don't
  reinvent.

## The six new lesson block types you'll build in Phase 1

| Block | Purpose | Storage |
|---|---|---|
| `Explain` | Prose teaching, supports Listen player | Markdown string |
| `CommandBlock` | Copyable shell command, "ran this" state | `ran: boolean` per command id |
| `TypeAlong` | Pre-written code; user retypes to advance, soft char-match | `completed: boolean` |
| `ReadThis` | Syntax-highlighted code + comprehension quiz | Quiz result |
| `CodeChallenge` (v1) | Empty editor, spec, run-output-and-string-match-against-expected | Pass/fail + last submission |
| `DebugThis` | Broken code + error msg, fix-and-resubmit | Pass/fail + attempts |

CodeChallenge v1 is **string equality on captured `console.log` output**. No real test runner.
A v2 decision is deferred to after Module 8 — see CLAUDE.md and the phase guide.

## What NOT to do in Phase 0

- Don't write any lesson content yet — Phase 4 onward
- Don't build the AI Tutor — v2
- Don't add a backend — there is none
- Don't add streak / daily gamification — user explicitly said no schedule pressure
