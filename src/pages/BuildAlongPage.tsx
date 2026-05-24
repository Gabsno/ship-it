import { useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { getBuildAlong, milestoneBlockId } from '@/data/buildAlongs';
import { useProgress } from '@/hooks/useProgress';
import { copyStarterFileToClipboard, downloadStarterAsText } from '@/lib/downloadStarter';

export function BuildAlongPage() {
  const { id } = useParams<{ id: string }>();
  const ba = id ? getBuildAlong(id) : undefined;
  const { progress, startBuildAlong, markBlockComplete, update } = useProgress();

  useEffect(() => {
    if (ba) startBuildAlong(ba.id);
  }, [ba, startBuildAlong]);

  if (!ba) {
    return (
      <div className="space-y-4">
        <Link to="/" className="text-xs text-ink-300 hover:text-ink-100">← Home</Link>
        <div className="card p-6">
          <h1 className="text-xl font-semibold text-ink-100">Build-along not found</h1>
          <p className="text-sm text-ink-300 mt-1">
            No build-along with id <code>{id}</code>.
          </p>
        </div>
      </div>
    );
  }

  return <BuildAlongContent
    id={ba.id}
    progress={progress}
    onTickMilestone={(msId, currentlyDone) => {
      const key = milestoneBlockId(ba.id, msId);
      if (currentlyDone) {
        update((prev) => {
          const next = { ...prev.blocksCompleted };
          delete next[key];
          return { ...prev, blocksCompleted: next };
        });
      } else {
        markBlockComplete(key);
      }
    }}
  />;
}

interface ContentProps {
  id: string;
  progress: ReturnType<typeof useProgress>['progress'];
  onTickMilestone: (milestoneId: string, currentlyDone: boolean) => void;
}

function BuildAlongContent({ id, progress, onTickMilestone }: ContentProps) {
  const ba = getBuildAlong(id);
  const [activeFileIdx, setActiveFileIdx] = useState(0);
  const [copiedPath, setCopiedPath] = useState<string | null>(null);

  const milestoneState = useMemo(() => {
    if (!ba) return [];
    return ba.milestones.map((m) => ({
      ...m,
      done: Boolean(progress.blocksCompleted[milestoneBlockId(ba.id, m.id)]),
    }));
  }, [ba, progress.blocksCompleted]);

  if (!ba) return null;

  const completed = milestoneState.filter((m) => m.done).length;
  const total = milestoneState.length;
  const pct = total === 0 ? 0 : Math.round((completed / total) * 100);

  const activeFile = ba.starterFiles[activeFileIdx] ?? ba.starterFiles[0];

  const copy = async (path: string, content: string) => {
    const ok = await copyStarterFileToClipboard(content);
    if (ok) {
      setCopiedPath(path);
      window.setTimeout(() => setCopiedPath(null), 1500);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <Link to="/" className="text-xs text-ink-300 hover:text-ink-100">← Home</Link>
        <div className="mt-2 flex items-center gap-2 flex-wrap">
          <span className="chip bg-accent/20 text-accent-strong">Build-Along</span>
          <span className="text-xs text-ink-400">
            unlocks after module: <code>{ba.unlockedByModule}</code>
          </span>
          <span className="text-xs text-ink-400">· ~{ba.estimatedHours}h</span>
        </div>
        <h1 className="text-xl sm:text-2xl font-semibold text-ink-100 mt-1">{ba.title}</h1>
        <p className="text-sm sm:text-base text-ink-300 mt-2 max-w-2xl">{ba.summary}</p>

        <div className="mt-4 max-w-md">
          <div className="progress-track">
            <div className="progress-fill" style={{ width: `${pct}%` }} />
          </div>
          <div className="mt-1 text-[11px] text-ink-400">
            {completed} / {total} milestones · {pct}%
          </div>
        </div>
      </div>

      <div className="card p-5 space-y-3">
        <div className="text-sm font-medium text-ink-100">Rules</div>
        <ul className="list-disc pl-5 space-y-1 text-sm text-ink-200">
          {ba.rules.map((r, i) => (
            <li key={i}>{r}</li>
          ))}
        </ul>
      </div>

      <div className="card p-5">
        <div className="prose-block">
          <ReactMarkdown
            components={{
              h2: (p) => <h2 className="text-xl font-semibold text-ink-100 mt-2 mb-2" {...p} />,
              h3: (p) => <h3 className="text-lg font-semibold text-ink-100 mt-3 mb-1" {...p} />,
              p: (p) => <p className="text-ink-200 leading-relaxed mb-3" {...p} />,
              ul: (p) => <ul className="list-disc pl-5 space-y-1 text-ink-200 mb-3" {...p} />,
              li: (p) => <li className="leading-relaxed" {...p} />,
              code: ({ className, children, ...rest }) => {
                const isBlock = (className ?? '').startsWith('language-');
                return isBlock ? (
                  <pre className="bg-ink-900 border border-ink-700 rounded-lg p-3 overflow-x-auto text-xs font-mono text-ink-100 mb-3">
                    <code {...rest}>{children}</code>
                  </pre>
                ) : (
                  <code
                    className="bg-ink-900 border border-ink-700 rounded px-1 py-0.5 text-[0.85em] font-mono text-accent-soft"
                    {...rest}
                  >
                    {children}
                  </code>
                );
              },
            }}
          >
            {ba.spec}
          </ReactMarkdown>
        </div>
      </div>

      <div className="card p-5 space-y-4">
        <div className="flex items-baseline justify-between gap-3">
          <h2 className="text-base font-semibold text-ink-100">Milestones</h2>
          <span className="text-xs text-ink-400">{completed} / {total}</span>
        </div>
        <ol className="space-y-2">
          {milestoneState.map((m, i) => (
            <li key={m.id}>
              <label
                className={`flex items-start gap-3 rounded-lg border px-3 py-2 cursor-pointer transition-colors ${
                  m.done
                    ? 'border-accent/30 bg-accent/5'
                    : 'border-ink-600 bg-ink-800 hover:bg-ink-700'
                }`}
              >
                <input
                  type="checkbox"
                  className="accent-accent-strong mt-1"
                  checked={m.done}
                  onChange={() => onTickMilestone(m.id, m.done)}
                />
                <div className="flex-1 min-w-0">
                  <div className={`text-sm ${m.done ? 'text-ink-300 line-through' : 'text-ink-100'}`}>
                    <span className="text-ink-400 mr-1">{i + 1}.</span>
                    {m.title}
                  </div>
                  {m.description && (
                    <div className="text-xs text-ink-300 mt-0.5">{m.description}</div>
                  )}
                </div>
              </label>
            </li>
          ))}
        </ol>
      </div>

      <div className="card p-4 sm:p-5 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3">
          <div>
            <h2 className="text-base font-semibold text-ink-100">Starter files</h2>
            <div className="text-xs text-ink-400">
              Copy each one into your project, or download a bundled text version.
            </div>
          </div>
          <button
            type="button"
            className="btn-primary w-full sm:w-auto"
            onClick={() => downloadStarterAsText(ba.id, ba.starterFiles)}
          >
            Download starter (.txt)
          </button>
        </div>

        <div className="flex gap-1 overflow-x-auto sm:flex-wrap border-b border-ink-700 -mx-1 px-1">
          {ba.starterFiles.map((f, i) => (
            <button
              type="button"
              key={f.path}
              onClick={() => setActiveFileIdx(i)}
              className={`px-3 py-1.5 text-xs font-mono transition-colors ${
                i === activeFileIdx
                  ? 'text-ink-100 border-b-2 border-accent-strong -mb-px'
                  : 'text-ink-300 hover:text-ink-100'
              }`}
            >
              {f.path}
            </button>
          ))}
        </div>

        {activeFile && (
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="text-ink-400 font-mono">{activeFile.path}</span>
              <button
                type="button"
                className="btn-ghost"
                onClick={() => copy(activeFile.path, activeFile.content)}
              >
                {copiedPath === activeFile.path ? 'Copied!' : 'Copy file'}
              </button>
            </div>
            <pre className="bg-ink-900 border border-ink-700 rounded-lg p-3 overflow-x-auto text-xs font-mono text-ink-100 max-h-[28rem] overflow-y-auto whitespace-pre">
              {activeFile.content}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}
