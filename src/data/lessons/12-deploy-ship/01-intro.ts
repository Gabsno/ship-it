import type { Lesson } from '@/types/lesson';

export const M12_L1_INTRO: Lesson = {
  id: 'm12-l1-intro',
  moduleId: 'deploy-ship',
  title: 'Deploying and shipping — module roadmap',
  objective: 'See the deploy landscape and the 6 production-hardening fixes.',
  estimatedMinutes: 8,
  blocks: [
    {
      type: 'explain',
      id: 'm12-l1-e1',
      listen: true,
      markdown: `## "Working on my laptop" is not shipping

A real app lives on the internet — at a URL you can send to people,
that stays up when your laptop is off. Deploying is the act of getting
your code from "runs locally" to "runs in production."

Three big categories:

1. **Static sites** — pure HTML/CSS/JS that any host can serve. Ship It
   itself deploys this way to **GitHub Pages**. Vercel and Netlify are
   the popular alternatives, with more features.
2. **Backends** — Node servers, Express APIs. Need a host that runs Node.
   **Railway**, **Render**, **Fly.io** are common.
3. **Mobile** — React Native apps. **EAS Build** compiles your binary.
   You upload it to the App Store / Play Store.`,
    },
    {
      type: 'explain',
      id: 'm12-l1-e2',
      listen: true,
      markdown: `## What this module will cover

~6 lessons. The last few are the "production hardening" pass — six
specific fixes every shipped app needs:

1. Picking a host. Vercel vs Netlify vs Railway. Why each one.
2. Environment variables — secrets in production.
3. \`npm run build\` and what the dist/ folder contains.
4. Custom domains and HTTPS.
5. Logging and monitoring (Sentry, basic uptime).
6. The 6 stability fixes:
   - Sentry for error reporting.
   - Uptime monitoring (BetterStack or similar).
   - API versioning (\`/v1/\` prefix so you can change the contract later).
   - JWT blacklist (invalidate tokens on logout).
   - Database migrations (don't lose data on schema changes).
   - Real tests with Jest before each deploy.

## TODO(gabs) — content lands in a future drop

Until then: you've already deployed Ship It to GitHub Pages. That's
deploy #1 of your career. Repeat that pattern for every web project.`,
    },
  ],
};
