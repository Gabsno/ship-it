import type { Lesson } from '@/types/lesson';

export const M12_L1_DEPLOY_TARGETS: Lesson = {
  id: 'm12-l1-deploy-targets',
  moduleId: 'deploy-ship',
  title: 'Picking a deploy target',
  objective: 'Know which host to use for which kind of app.',
  estimatedMinutes: 7,
  blocks: [
    {
      type: 'explain',
      id: 'm12-l1-e1',
      listen: true,
      markdown: `## The map

Three categories of app, three families of host:

### Static frontend (HTML + CSS + JS, no Node server)
- **GitHub Pages** — free, dead simple, what Ship It uses. Best for
  personal projects and docs sites.
- **Vercel** — also free for personal projects. Faster CDN, better DX.
  Auto-deploys on every push.
- **Netlify** — similar to Vercel.
- **Cloudflare Pages** — also free, very fast CDN.

Pick Vercel or Cloudflare Pages by default. GitHub Pages is fine for
small things.

### Backend (Node, Express, anything running a server)
- **Railway** — easiest. Connects to GitHub, deploys on push. Generous
  free tier, then a few dollars a month.
- **Render** — similar to Railway. Slightly more configuration.
- **Fly.io** — closer to bare metal, runs your Docker image globally.
  Cheap, fast, but slightly steeper learning curve.

Pick Railway by default for Ship It-scale projects.

### Mobile (React Native + Expo)
- **EAS Build** — Expo's build service. Produces the iOS .ipa and
  Android .aab files.
- **App Store Connect** (iOS) and **Google Play Console** (Android) —
  where you upload the binaries and submit for review.

### Database
- For SQLite — just deploy alongside the backend (file on disk).
- For Postgres — **Railway**, **Supabase**, or **Neon** are popular
  free-tier options.`,
    },
    {
      type: 'explain',
      id: 'm12-l1-e2',
      listen: true,
      markdown: `### What does "free" actually mean?

For Ship It-scale and Viszio-scale (early users), free tiers genuinely
cover the cost. A typical stack:

- GitHub Pages or Vercel frontend: **free** forever.
- Railway backend: free tier sleeps after inactivity. ~$5/month for
  always-on.
- SQLite or Supabase Postgres: **free** for small dbs.

You'll spend more on the domain name (~$12/year) than on hosting for
months. The cost only matters once you have hundreds of paying users.`,
    },
    {
      type: 'readthis',
      id: 'm12-l1-r1',
      language: 'bash',
      code: `# You have:
# - React frontend (Vite build = static files)
# - Express + SQLite backend
# - React Native app via Expo`,
      question: 'What\'s the typical deploy stack?',
      options: [
        'Everything goes on GitHub Pages',
        'Frontend → Vercel or GitHub Pages. Backend → Railway. Mobile → EAS Build + App Store / Play Store.',
        'Backend → GitHub Pages. Frontend → Railway.',
        'You need a single VPS to run all three',
      ],
      answerIndex: 1,
      explanation:
        'Each piece goes to the host that specialises in its kind. GitHub Pages can\'t run Node. Railway can\'t natively host the App Store binary. Use the right tool for each.',
    },
  ],
};
