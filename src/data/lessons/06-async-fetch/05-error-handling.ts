import type { Lesson } from '@/types/lesson';

export const M6_L5_ERROR_HANDLING: Lesson = {
  id: 'm6-l5-error-handling',
  moduleId: 'async-fetch',
  title: 'Error handling for real APIs',
  objective: 'Handle network failures, bad statuses, and bad JSON without crashing.',
  estimatedMinutes: 8,
  blocks: [
    {
      type: 'explain',
      id: 'm6-l5-e1',
      listen: true,
      markdown: `## Three ways an API call can fail

1. **Network failure** — the request never made it. WiFi off, DNS bad,
   server unreachable. fetch rejects the Promise — you catch with
   try/catch.
2. **Bad status code** — request reached the server but the server
   returned 400, 401, 403, 404, 500, etc. fetch does NOT reject. You
   have to check \`response.ok\` yourself.
3. **Bad body** — server returned 200 but the body isn't valid JSON.
   \`response.json()\` rejects. You catch it the same way.

The defensive shape:

\`\`\`js
async function loadUsers() {
  try {
    const res = await fetch('/users');
    if (!res.ok) {
      throw new Error(\`HTTP \${res.status}: \${res.statusText}\`);
    }
    const users = await res.json();
    return users;
  } catch (err) {
    console.error('loadUsers failed:', err.message);
    return [];
  }
}
\`\`\`

Three lines for the happy path. Three lines for the unhappy path. That's
the cost of being honest with the network.`,
    },
    {
      type: 'explain',
      id: 'm6-l5-e2',
      listen: true,
      markdown: `### Common status codes — quick reference

- **2xx** — success.
  - 200 OK.
  - 201 Created (used after POST).
  - 204 No Content (used after DELETE).
- **3xx** — redirect. fetch follows these automatically.
- **4xx** — client error (your request was wrong).
  - 400 Bad Request.
  - 401 Unauthorized (no auth or auth failed).
  - 403 Forbidden (authenticated but not allowed).
  - 404 Not Found.
  - 422 Unprocessable Entity (validation failed).
- **5xx** — server error (their problem).
  - 500 Internal Server Error.
  - 502 Bad Gateway.
  - 503 Service Unavailable.

Memorise the four-letter rule: **4xx is you, 5xx is them.**`,
    },
  ],
};
