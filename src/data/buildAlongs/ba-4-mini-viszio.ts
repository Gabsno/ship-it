import type { BuildAlong } from '@/types/buildAlong';

export const BA_4_MINI_VISZIO: BuildAlong = {
  id: 'ba-4-mini-viszio',
  title: 'Capstone — Mini-Viszio',
  summary:
    'React Native + Expo + Express + SQLite. GPS clock-in / clock-out with a list of past entries. This is the exit exam — when you ship this, the app has done its job.',
  unlockedByModule: 'deploy-ship',
  estimatedHours: 25,
  rules: [
    'No AI assistance. Honor code. The whole point of Ship It is to prove you can do this alone.',
    'React Native + Expo (managed workflow) for the app.',
    'Reuse the Express + SQLite backend pattern from BA-2/BA-3.',
    'You may consult the Ship It lessons, MDN, the Expo docs, and Stack Overflow. You may not paste code into Claude/ChatGPT.',
    'If you get stuck for 30+ minutes on the same problem, write the question down and keep moving. Come back after sleep.',
  ],
  spec: `## What you're building

A mobile app that lets a single user clock in (recording GPS + timestamp),
clock out (recording GPS + timestamp), and see a list of past clock-in/out
sessions. The backend stores everything; the app talks to it.

This is the minimum viable shape of Viszio — the real product you've
been training to build.

## Required features

### Mobile app (React Native + Expo)

- Single-user login (reuse JWT from BA-3 — one hardcoded user is fine
  for the capstone).
- "Clock in" button. When pressed:
  - Request location permission (if not granted).
  - Get the current GPS coords.
  - POST to backend with { lat, lng, type: 'in' }.
- "Clock out" button. Same flow with type: 'out'.
- "History" screen — list of past entries, newest first. Each row shows
  type, timestamp, and a short address (or just "lat,lng" — geocoding is
  out of scope).
- The button respects current state — if last entry was an "in",
  showing "Clock out" is the right choice.

### Backend

- \`POST /auth/login\` — same JWT pattern as BA-3.
- \`POST /entries\` — protected, body { lat, lng, type }, stores row.
- \`GET /entries\` — protected, returns the user's entries newest first.

## Hard constraints

- React Native + Expo (managed). No bare workflow, no Flutter, no native iOS/Android tooling.
- One screen for clock-in/out, one for history. That's it. Resist scope creep.
- Backend stays on localhost during development. Deployment is bonus.

## Done means

- You can install the Expo Go app on your phone, scan a QR code, and
  open Mini-Viszio.
- You can clock in. Stand somewhere else. Clock out. See both entries
  in the history.
- You did all this **without any AI help**.

## When you ship this

Take a screenshot. Send it to past-you who started Ship It. Past-you
needed to see it.`,
  milestones: [
    { id: 'ms-1', title: 'Scaffold the Expo app with create-expo-app' },
    { id: 'ms-2', title: 'App runs on your phone via Expo Go' },
    { id: 'ms-3', title: 'Two-screen navigation (Clock / History) with React Navigation' },
    { id: 'ms-4', title: 'expo-location wired — you can log your own coords from the Clock screen' },
    { id: 'ms-5', title: 'Backend boots (extend BA-3 or fresh) with /auth/login and /entries routes' },
    { id: 'ms-6', title: 'POST /auth/login works — the app stores the token' },
    { id: 'ms-7', title: 'Clock In button POSTs an entry with GPS coords' },
    { id: 'ms-8', title: 'Clock Out button POSTs an entry with GPS coords' },
    { id: 'ms-9', title: 'GET /entries returns the user\'s history' },
    { id: 'ms-10', title: 'History screen renders the list, newest first' },
    { id: 'ms-11', title: 'Button shows "Clock in" or "Clock out" based on last entry' },
    { id: 'ms-12', title: 'Refreshing the History screen pulls fresh data from the backend' },
    { id: 'ms-13', title: 'Empty state for History when there are no entries' },
    { id: 'ms-14', title: 'Loading + error states for the buttons (no spinner forever, no silent fail)' },
    { id: 'ms-15', title: 'You install Expo Go on your phone, open the app via QR, and complete one clock-in cycle' },
  ],
  starterFiles: [
    {
      path: 'README.md',
      language: 'md',
      content: `# Capstone — Mini-Viszio

The exit exam. Ship this without AI and Ship It has done its job.

## Stack

- Mobile: React Native + Expo (managed)
- Backend: Express + SQLite (reuse BA-2 / BA-3 patterns)
- Auth: JWT (one hardcoded user is fine for capstone)

## Two screens

- **Clock** — single button. "Clock in" or "Clock out" based on state.
- **History** — list of past entries, newest first.

## Rules (read every time you sit down to work on this)

- No AI assistance. This is the test.
- MDN, Expo docs, Stack Overflow, Ship It lessons — all fair game.
- Stuck 30+ min on the same thing? Write the question down. Move on.
- The point isn't the code. The point is you proving to yourself you
  can do this alone.

## Milestones

- [ ] Scaffold the Expo app
- [ ] App runs on phone via Expo Go
- [ ] Two-screen navigation
- [ ] expo-location wired
- [ ] Backend boots with /auth/login + /entries
- [ ] Login works, token stored
- [ ] Clock In button POSTs entry
- [ ] Clock Out button POSTs entry
- [ ] GET /entries works
- [ ] History screen renders the list
- [ ] Button reflects last-entry state
- [ ] History refreshes pull fresh data
- [ ] Empty state
- [ ] Loading + error states
- [ ] Full clock-in cycle on a real phone

## When done

Take a screenshot. You earned it.
`,
    },
  ],
};
