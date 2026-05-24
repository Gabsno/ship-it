import { useState } from 'react';
import { CodeEditor } from './CodeEditor';
import { OutputPanel } from './OutputPanel';
import { useProgress } from '@/hooks/useProgress';
import { runJsInSandbox } from '@/lib/sandbox';

interface DebugThisBlockProps {
  id: string;
  brokenCode: string;
  errorMessage: string;
  expectedConsoleOutput: string;
  hint?: string;
  language?: 'js' | 'ts';
  persistAs?: 'block' | 'gauntlet';
  title?: string;
}

type RunStatus = 'idle' | 'running' | 'ran' | 'passed' | 'failed';

const HINT_THRESHOLD = 2;

const normalize = (s: string) =>
  s
    .replace(/\r\n/g, '\n')
    .split('\n')
    .map((l) => l.replace(/\s+$/g, ''))
    .join('\n')
    .replace(/\n+$/, '');

export function DebugThisBlock({
  id,
  brokenCode,
  errorMessage,
  expectedConsoleOutput,
  hint,
  language = 'js',
  persistAs = 'block',
  title,
}: DebugThisBlockProps) {
  const { progress, markBlockComplete, markGauntletSolved } = useProgress();
  const [code, setCode] = useState(brokenCode);
  const [output, setOutput] = useState('');
  const [status, setStatus] = useState<RunStatus>('idle');
  const [submitAttempts, setSubmitAttempts] = useState(0);
  const [hintVisible, setHintVisible] = useState(false);

  const completed =
    persistAs === 'gauntlet'
      ? Boolean(progress.gauntletSolved[id])
      : Boolean(progress.blocksCompleted[id]);

  const run = async (mode: 'run' | 'submit') => {
    setStatus('running');
    const result = await runJsInSandbox(code);
    setOutput(result.output);
    if (mode === 'run') {
      setStatus('ran');
      return;
    }
    const nextAttempts = submitAttempts + 1;
    setSubmitAttempts(nextAttempts);
    const ok = normalize(result.output) === normalize(expectedConsoleOutput);
    if (ok) {
      if (persistAs === 'gauntlet') {
        markGauntletSolved(id, nextAttempts);
      } else {
        markBlockComplete(id, nextAttempts);
      }
      setStatus('passed');
    } else {
      setStatus('failed');
    }
  };

  const reset = () => {
    setCode(brokenCode);
    setOutput('');
    setStatus('idle');
    setHintVisible(false);
  };

  const canRevealHint = submitAttempts >= HINT_THRESHOLD && Boolean(hint);

  return (
    <section className="card p-4 space-y-3">
      <div className="flex items-center justify-between gap-3">
        <div>
          <div className="text-xs text-ink-400">
            {persistAs === 'gauntlet' ? 'Gauntlet snippet' : 'Debug this'}
          </div>
          <div className="text-sm font-medium text-ink-100">
            {title ?? 'Fix the code so it produces the expected output.'}
          </div>
        </div>
        <div className="flex items-center gap-2">
          {submitAttempts > 0 && (
            <span className="text-[11px] text-ink-400">attempts: {submitAttempts}</span>
          )}
          {completed && (
            <span className="chip bg-accent/20 text-accent-strong">
              {persistAs === 'gauntlet' ? 'Solved' : 'Fixed'}
            </span>
          )}
        </div>
      </div>

      <div className="rounded-lg border border-danger/30 bg-danger/10 p-3">
        <div className="text-[11px] uppercase tracking-wide text-danger">Error</div>
        <pre className="mt-1 text-xs font-mono text-ink-100 whitespace-pre-wrap">{errorMessage}</pre>
      </div>

      <CodeEditor
        value={code}
        language={language === 'ts' ? 'ts' : 'js'}
        onChange={(v) => setCode(v ?? '')}
        height={Math.max(160, Math.min(360, 60 + brokenCode.split('\n').length * 18))}
        ariaLabel="Debug editor"
      />

      <div className="flex items-center justify-end gap-2 flex-wrap">
        {canRevealHint && !hintVisible && (
          <button type="button" className="btn-ghost" onClick={() => setHintVisible(true)}>
            Hint
          </button>
        )}
        <button type="button" className="btn-ghost" onClick={reset} disabled={status === 'running'}>
          Reset
        </button>
        <button
          type="button"
          className="btn-ghost"
          onClick={() => run('run')}
          disabled={status === 'running'}
        >
          Run
        </button>
        <button
          type="button"
          className="btn-primary"
          onClick={() => run('submit')}
          disabled={status === 'running'}
        >
          Submit fix
        </button>
      </div>

      {hintVisible && hint && (
        <div className="rounded-lg border border-warn/30 bg-warn/10 p-3 text-sm text-ink-100">
          <span className="text-warn font-medium">Hint: </span>
          {hint}
        </div>
      )}

      <OutputPanel
        output={output}
        expected={expectedConsoleOutput}
        showDiff={status === 'failed'}
        status={status}
      />
    </section>
  );
}
