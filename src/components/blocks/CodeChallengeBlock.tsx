import { useState } from 'react';
import { CodeEditor } from './CodeEditor';
import { OutputPanel } from './OutputPanel';
import { useProgress } from '@/hooks/useProgress';
import { runJsInSandbox } from '@/lib/sandbox';

interface CodeChallengeBlockProps {
  id: string;
  spec: string;
  starterCode: string;
  expectedConsoleOutput: string;
  language?: 'js' | 'ts';
}

type RunStatus = 'idle' | 'running' | 'ran' | 'passed' | 'failed';

const normalize = (s: string) =>
  s
    .replace(/\r\n/g, '\n')
    .split('\n')
    .map((l) => l.replace(/\s+$/g, ''))
    .join('\n')
    .replace(/\n+$/, '');

export function CodeChallengeBlock({
  id,
  spec,
  starterCode,
  expectedConsoleOutput,
  language = 'js',
}: CodeChallengeBlockProps) {
  const { progress, markBlockComplete } = useProgress();
  const [code, setCode] = useState(starterCode);
  const [output, setOutput] = useState('');
  const [status, setStatus] = useState<RunStatus>('idle');
  const [submitAttempts, setSubmitAttempts] = useState(0);
  const completed = Boolean(progress.blocksCompleted[id]);

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
      markBlockComplete(id, nextAttempts);
      setStatus('passed');
    } else {
      setStatus('failed');
    }
  };

  const reset = () => {
    setCode(starterCode);
    setOutput('');
    setStatus('idle');
  };

  return (
    <section className="card p-4 space-y-3">
      <div className="flex items-center justify-between gap-3">
        <div>
          <div className="text-xs text-ink-400">Code challenge</div>
          <div className="text-sm font-medium text-ink-100 whitespace-pre-wrap">{spec}</div>
        </div>
        <div className="flex items-center gap-2">
          {submitAttempts > 0 && (
            <span className="text-[11px] text-ink-400">attempts: {submitAttempts}</span>
          )}
          {completed && <span className="chip bg-accent/20 text-accent-strong">Passed</span>}
        </div>
      </div>

      <CodeEditor
        value={code}
        language={language === 'ts' ? 'ts' : 'js'}
        onChange={(v) => setCode(v ?? '')}
        height={Math.max(160, Math.min(360, 60 + starterCode.split('\n').length * 18))}
        ariaLabel="Code challenge editor"
      />

      <div className="flex items-center justify-end gap-2 flex-wrap">
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
          Submit
        </button>
      </div>

      <OutputPanel
        output={output}
        expected={expectedConsoleOutput}
        showDiff={status === 'failed'}
        status={status}
      />
    </section>
  );
}
