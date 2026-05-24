import type { Lesson } from '@/types/lesson';

export const M12_L2_ENV_VARS_AND_SECRETS: Lesson = {
  id: 'm12-l2-env-vars-and-secrets',
  moduleId: 'deploy-ship',
  title: 'Environment variables and secrets',
  objective: 'Keep secrets out of git. Configure dev vs production.',
  estimatedMinutes: 6,
  blocks: [
    {
      type: 'explain',
      id: 'm12-l2-e1',
      listen: true,
      markdown: `## The two rules

1. **Anything that\'s a secret (JWT secret, API keys, database
   passwords) must NEVER be in git.** Not in code, not in committed
   config files. Period.
2. **Anything that differs between dev and production must be a
   config value**, not hardcoded.

The standard pattern: an environment variable.

\`\`\`js
const jwtSecret = process.env.JWT_SECRET;
const dbUrl = process.env.DATABASE_URL;
const port = process.env.PORT || 3000;
\`\`\`

\`process.env\` is a built-in Node object. Whatever the OS or your
hosting platform passes in becomes available there.`,
    },
    {
      type: 'explain',
      id: 'm12-l2-e2',
      listen: true,
      markdown: `## Local dev — .env files

Create a \`.env\` in your project root:

\`\`\`bash
JWT_SECRET=dev-secret-do-not-use-in-prod
DATABASE_URL=./todos.db
PORT=3000
\`\`\`

Add to \`.gitignore\`:

\`\`\`
.env
.env.local
\`\`\`

Then load it at startup. Modern Node (v20+) supports it natively:

\`\`\`bash
node --env-file=.env index.js
\`\`\`

Or use the \`dotenv\` package (older but ubiquitous):

\`\`\`js
import 'dotenv/config';
// now process.env is populated
\`\`\`

Commit a \`.env.example\` (no real values) so other developers know
which vars to set:

\`\`\`bash
# .env.example
JWT_SECRET=
DATABASE_URL=
PORT=
\`\`\``,
    },
    {
      type: 'explain',
      id: 'm12-l2-e3',
      listen: true,
      markdown: `## Production — hosting platform settings

Every hosting platform has an env vars UI:

- **Railway** — service → Variables tab.
- **Vercel** — project → Settings → Environment Variables.
- **Render** — service → Environment.
- **EAS / Expo** — \`eas secret:create NAME --value VALUE\`.

Set the same keys you used in \`.env\`, but with **production values**:

\`\`\`
JWT_SECRET=long-random-string-generated-with-openssl
DATABASE_URL=<production database connection string>
NODE_ENV=production
\`\`\`

For JWT_SECRET specifically: generate one with:

\`\`\`bash
openssl rand -base64 48
\`\`\`

48 random bytes, base64-encoded. Don't reuse it across projects.

### If you accidentally commit a secret

You will, at some point. The rules:

1. Don\'t just delete it in a new commit — Git history keeps it. Anyone
   who clones the repo can still see it.
2. **Rotate the secret immediately.** Generate a new JWT_SECRET / API
   key. The old one is dead.
3. Use \`git filter-repo\` or BFG Repo-Cleaner to scrub the value from
   history, force-push.
4. If it was on GitHub, GitHub's secret scanning may have already
   notified the provider — they often auto-revoke (e.g. AWS keys).`,
    },
  ],
};
