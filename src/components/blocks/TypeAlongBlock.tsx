import { useMemo, useState } from 'react';
import { CodeEditor } from './CodeEditor';
import { useProgress } from '@/hooks/useProgress';
import type { CodeLanguage } from '@/types/lesson';

interface TypeAlongBlockProps {
  id: string;
  language: CodeLanguage;
  code: string;
  instructions?: string;
}

const COMPLETE_THRESHOLD = 0.95;

function commonPrefixLength(a: string, b: string): number {
  const max = Math.min(a.length, b.length);
  let i = 0;
  while (i < max && a.charCodeAt(i) === b.charCodeAt(i)) i++;
  return i;
}

export function TypeAlongBlock({ id, language, code, instructions }: TypeAlongBlockProps) {
  const { progress, markBlockComplete } = useProgress();
  const [typed, setTyped] = useState('');
  const completed = Boolean(progress.blocksCompleted[id]);

  const targetTrimmed = useMemo(() => code.replace(/[ \t]+$/gm, '').replace(/\n+$/, '\n'), [code]);
  const typedTrimmed = useMemo(() => typed.replace(/[ \t]+$/gm, '').replace(/\n+$/, '\n'), [typed]);

  const matchedChars = commonPrefixLength(typedTrimmed, targetTrimmed);
  const total = targetTrimmed.length;
  const ratio = total > 0 ? matchedChars / total : 1;
  const hasError = typedTrimmed.length > matchedChars;

  const isExactMatch = typedTrimmed === targetTrimmed;
  const isSoftMatch = ratio >= COMPLETE_THRESHOLD && !hasError;

  if ((isExactMatch || isSoftMatch) && !completed) {
    markBlockComplete(id);
  }

  const reset = () => setTyped('');

  return (
    <section className="card p-4 space-y-3">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-xs text-ink-400">Type along</div>
          <div className="text-sm font-medium text-ink-100">
            {instructions ?? 'Retype the snippet below into the empty editor.'}
          </div>
        </div>
        {completed && (
          <span className="chip bg-accent/20 text-accent-strong">Done</span>
        )}
      </div>

      <div className="space-y-2">
        <div className="text-xs text-ink-400">Target</div>
        <CodeEditor value={code} language={language} readOnly height={Math.min(280, 60 + code.split('\n').length * 18)} />
      </div>

      <div className="space-y-2">
        <div className="text-xs text-ink-400">Your turn</div>
        <CodeEditor
          value={typed}
          language={language}
          onChange={(v) => setTyped(v ?? '')}
          height={Math.min(280, 60 + code.split('\n').length * 18)}
          ariaLabel="Type-along editor"
        />
      </div>

      <div className="space-y-1">
        <div className="flex items-center justify-between text-xs">
          <span className={hasError ? 'text-danger' : 'text-ink-300'}>
            {hasError ? 'Mismatch — backspace and fix.' : 'Matching prefix'}
          </span>
          <span className="text-ink-200">
            {matchedChars} / {total}
          </span>
        </div>
        <div className="progress-track">
          <div
            className={`progress-fill ${hasError ? '!bg-danger' : ''}`}
            style={{ width: `${Math.min(100, Math.round(ratio * 100))}%` }}
          />
        </div>
      </div>

      <div className="flex justify-end">
        <button type="button" className="btn-ghost" onClick={reset}>
          Reset
        </button>
      </div>
    </section>
  );
}
