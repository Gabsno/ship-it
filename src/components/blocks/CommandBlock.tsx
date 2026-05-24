import { useEffect, useState } from 'react';
import { useProgress } from '@/hooks/useProgress';

interface CommandBlockProps {
  id: string;
  label: string;
  command: string;
  expectedOutput?: string;
}

export function CommandBlock({ id, label, command, expectedOutput }: CommandBlockProps) {
  const { progress, markBlockComplete, update } = useProgress();
  const [copied, setCopied] = useState(false);
  const [showOutput, setShowOutput] = useState(false);
  const ran = Boolean(progress.blocksCompleted[id]);

  useEffect(() => {
    if (!copied) return;
    const t = window.setTimeout(() => setCopied(false), 1500);
    return () => window.clearTimeout(t);
  }, [copied]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  const toggleRan = () => {
    if (ran) {
      update((prev) => {
        const next = { ...prev.blocksCompleted };
        delete next[id];
        return { ...prev, blocksCompleted: next };
      });
    } else {
      markBlockComplete(id);
    }
  };

  return (
    <section className="card p-4 space-y-3">
      <div className="flex items-center justify-between gap-3">
        <div>
          <div className="text-xs text-ink-400">Command</div>
          <div className="text-sm font-medium text-ink-100">{label}</div>
        </div>
        <label className="flex items-center gap-2 text-xs text-ink-300 cursor-pointer">
          <input
            type="checkbox"
            className="accent-accent-strong"
            checked={ran}
            onChange={toggleRan}
          />
          I ran this
        </label>
      </div>
      <div className="flex flex-col sm:flex-row sm:items-stretch gap-2">
        <pre className="flex-1 bg-ink-900 border border-ink-700 rounded-lg px-3 py-2 font-mono text-sm text-ink-100 overflow-x-auto min-w-0">
          <code>{command}</code>
        </pre>
        <button
          type="button"
          onClick={copy}
          className="btn-ghost shrink-0 w-full sm:w-auto"
          aria-label="Copy command"
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      {expectedOutput !== undefined && (
        <div>
          <button
            type="button"
            className="text-xs text-ink-300 hover:text-ink-100"
            onClick={() => setShowOutput((s) => !s)}
          >
            {showOutput ? '− Hide' : '+ Show'} what you should see
          </button>
          {showOutput && (
            <pre className="mt-2 bg-ink-900 border border-ink-700 rounded-lg px-3 py-2 font-mono text-xs text-ink-200 whitespace-pre-wrap">
              {expectedOutput}
            </pre>
          )}
        </div>
      )}
    </section>
  );
}
