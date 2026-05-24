import { Link, useParams } from 'react-router-dom';
import { GAUNTLET_SNIPPETS, getGauntletSnippet } from '@/data/gauntlet/snippets';
import { DebugThisBlock } from '@/components/blocks/DebugThisBlock';

export function GauntletSnippetPage() {
  const { snippetId } = useParams<{ snippetId: string }>();
  const snippet = snippetId ? getGauntletSnippet(snippetId) : undefined;

  if (!snippet) {
    return (
      <div className="space-y-4">
        <Link to="/gauntlet" className="text-xs text-ink-300 hover:text-ink-100">← All snippets</Link>
        <div className="card p-6">
          <h1 className="text-xl font-semibold text-ink-100">Snippet not found</h1>
          <p className="text-sm text-ink-300 mt-1">
            No gauntlet snippet with id <code>{snippetId}</code>.
          </p>
        </div>
      </div>
    );
  }

  const idx = GAUNTLET_SNIPPETS.findIndex((s) => s.id === snippet.id);
  const prev = idx > 0 ? GAUNTLET_SNIPPETS[idx - 1] : undefined;
  const next = idx < GAUNTLET_SNIPPETS.length - 1 ? GAUNTLET_SNIPPETS[idx + 1] : undefined;

  return (
    <div className="space-y-6">
      <div>
        <Link to="/gauntlet" className="text-xs text-ink-300 hover:text-ink-100">← All snippets</Link>
        <div className="mt-2 flex items-center gap-2 flex-wrap">
          <span className="chip bg-ink-700 text-ink-200 border border-ink-600">{snippet.topic}</span>
          <span className="chip bg-ink-700 text-ink-200 border border-ink-600">{snippet.difficulty}</span>
        </div>
        <h1 className="text-2xl font-semibold text-ink-100 mt-1">{snippet.title}</h1>
      </div>

      <DebugThisBlock
        id={snippet.id}
        brokenCode={snippet.brokenCode}
        errorMessage={snippet.errorMessage}
        expectedConsoleOutput={snippet.expectedConsoleOutput}
        hint={snippet.hint}
        persistAs="gauntlet"
        title="Fix the snippet so its output matches Expected."
      />

      <div className="flex items-center justify-between">
        {prev ? (
          <Link to={`/gauntlet/${prev.id}`} className="btn-ghost">
            ← {prev.title}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link to={`/gauntlet/${next.id}`} className="btn-ghost">
            {next.title} →
          </Link>
        ) : (
          <span />
        )}
      </div>
    </div>
  );
}
