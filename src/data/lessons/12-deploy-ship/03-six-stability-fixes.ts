import type { Lesson } from '@/types/lesson';

export const M12_L3_SIX_STABILITY_FIXES: Lesson = {
  id: 'm12-l3-six-stability-fixes',
  moduleId: 'deploy-ship',
  title: 'The 6 production hardening fixes',
  objective: 'Make your app survive contact with real users.',
  estimatedMinutes: 12,
  blocks: [
    {
      type: 'explain',
      id: 'm12-l3-e1',
      listen: true,
      markdown: `## The 6 fixes every shipped app needs

You can deploy a Hello World in 10 minutes. You can deploy a real app
that survives the first 100 users in maybe a week. These six are what
separates the two.

### 1. Sentry — error reporting

When something blows up in production, you need to know. You can't
\`console.log\` your way through it because there's no terminal to read.

\`\`\`bash
npm install @sentry/node @sentry/react
\`\`\`

\`\`\`js
import * as Sentry from '@sentry/node';

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  environment: process.env.NODE_ENV,
});
\`\`\`

Sentry catches every unhandled exception and shows you the stack trace
in their dashboard, with context. Free tier is enough for Ship It /
Viszio scale.`,
    },
    {
      type: 'explain',
      id: 'm12-l3-e2',
      listen: true,
      markdown: `### 2. Uptime monitoring

Sentry tells you when something throws. **Uptime monitoring tells you
when your app is unreachable at all.**

Free tools that work: **BetterStack** (formerly Better Uptime), **Uptime
Robot**, **Pingdom**. Set up a check that hits \`/api/health\` every
minute. If it fails twice in a row, it pages you.

Pair with a health endpoint:

\`\`\`js
app.get('/api/health', (req, res) => {
  res.json({ ok: true, ts: Date.now() });
});
\`\`\`

### 3. API versioning

The day you have real users and want to change a response shape, you'll
realise you can't — every old app version still expects the old shape.

Prefix routes with a version:

\`\`\`js
app.use('/v1/users', usersV1Router);
\`\`\`

When you need to break compatibility, ship \`/v2/users\` alongside.
Cheap insurance.`,
    },
    {
      type: 'explain',
      id: 'm12-l3-e3',
      listen: true,
      markdown: `### 4. JWT blacklist (invalidate on logout)

JWTs are stateless. Logging out on the client deletes the token, but
the token itself is still technically valid until it expires. If
someone copies it, they can keep using it.

Store revoked tokens in a Redis or DB table. The auth middleware
checks both signature AND blacklist:

\`\`\`js
if (await isBlacklisted(token)) {
  return res.status(401).json({ error: 'token revoked' });
}
\`\`\`

For Ship It scale you can skip this until you need it. But once you
have real users — especially shared devices — you'll want it.

### 5. Database migrations

When your schema changes — adding a column, renaming a table — running
\`ALTER TABLE\` manually in production is a recipe for disaster. Use
a migration tool: **drizzle-kit**, **knex migrations**, or hand-rolled
SQL files in a \`migrations/\` folder that run in order.

Rule: every schema change is a versioned migration file, committed to
git, applied automatically on deploy. Never edit prod schema by hand.`,
    },
    {
      type: 'explain',
      id: 'm12-l3-e4',
      listen: true,
      markdown: `### 6. Tests — at minimum, the critical paths

You don't need 100% coverage. You need tests that prove the things
that pay your rent still work.

Minimum bar with **Jest** or **Vitest**:

- The login flow returns a valid token for valid creds.
- Protected routes 401 without a token.
- The CRUD endpoint creates, reads, and deletes correctly.
- An ownership check: user A can't see user B's data.

Five or six tests. Run them on every \`git push\` via GitHub Actions:

\`\`\`yaml
# .github/workflows/ci.yml
name: CI
on: [push]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 20 }
      - run: npm ci
      - run: npm test
\`\`\`

If tests fail, deploy blocks. The cost is a few extra minutes per PR.
The benefit is that someday-future-you doesn't ship a regression on a
Friday afternoon.

## You've reached the end

This is the last module. You now know enough to ship the capstone.
Read the BA-4 spec. Sleep on it. Then start.

When you ship it, send past-you the screenshot you promised. Past-you
is the one who needed to see it.`,
    },
  ],
};
