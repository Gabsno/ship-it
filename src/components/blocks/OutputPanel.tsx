interface OutputPanelProps {
  output: string;
  expected?: string;
  showDiff?: boolean;
  status?: 'idle' | 'running' | 'ran' | 'passed' | 'failed';
}

export function OutputPanel({ output, expected, showDiff = false, status = 'idle' }: OutputPanelProps) {
  const isPassed = status === 'passed';
  const isFailed = status === 'failed';
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2 text-xs">
        <span className="text-ink-400">Output</span>
        {status === 'running' && <span className="text-ink-200">running…</span>}
        {isPassed && <span className="chip bg-accent/20 text-accent-strong">Passed</span>}
        {isFailed && <span className="chip bg-danger/15 text-danger border border-danger/30">Failed</span>}
      </div>
      {showDiff && expected !== undefined ? (
        <div className="grid sm:grid-cols-2 gap-2">
          <div>
            <div className="text-[11px] text-ink-400 mb-1">Your output</div>
            <pre className="bg-ink-900 border border-ink-700 rounded-lg p-3 font-mono text-xs text-ink-100 whitespace-pre-wrap min-h-[6rem] overflow-x-auto">
              {output || '(empty)'}
            </pre>
          </div>
          <div>
            <div className="text-[11px] text-ink-400 mb-1">Expected</div>
            <pre className="bg-ink-900 border border-accent/40 rounded-lg p-3 font-mono text-xs text-accent-soft whitespace-pre-wrap min-h-[6rem] overflow-x-auto">
              {expected}
            </pre>
          </div>
        </div>
      ) : (
        <pre className="bg-ink-900 border border-ink-700 rounded-lg p-3 font-mono text-xs text-ink-100 whitespace-pre-wrap min-h-[5rem] overflow-x-auto">
          {output || '(no output yet — press Run)'}
        </pre>
      )}
    </div>
  );
}
