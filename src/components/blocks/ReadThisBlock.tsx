import { useState } from 'react';
import { CodeEditor } from './CodeEditor';
import { useProgress } from '@/hooks/useProgress';
import type { CodeLanguage } from '@/types/lesson';

interface ReadThisBlockProps {
  id: string;
  language: CodeLanguage;
  code: string;
  question: string;
  options: string[];
  answerIndex: number;
  explanation?: string;
}

export function ReadThisBlock({
  id,
  language,
  code,
  question,
  options,
  answerIndex,
  explanation,
}: ReadThisBlockProps) {
  const { progress, markBlockComplete } = useProgress();
  const [selected, setSelected] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const completed = Boolean(progress.blocksCompleted[id]);

  const submit = () => {
    if (selected == null) return;
    setSubmitted(true);
    if (selected === answerIndex) markBlockComplete(id);
  };

  const reset = () => {
    setSelected(null);
    setSubmitted(false);
  };

  const isCorrect = submitted && selected === answerIndex;

  return (
    <section className="card p-4 space-y-3">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-xs text-ink-400">Read this</div>
          <div className="text-sm font-medium text-ink-100">{question}</div>
        </div>
        {completed && <span className="chip bg-accent/20 text-accent-strong">Done</span>}
      </div>

      <CodeEditor
        value={code}
        language={language}
        readOnly
        height={Math.min(280, 60 + code.split('\n').length * 18)}
      />

      <div className="grid gap-2">
        {options.map((opt, i) => {
          const chosen = selected === i;
          let cls = 'border-ink-600 bg-ink-800 hover:bg-ink-700';
          if (submitted) {
            if (i === answerIndex) cls = 'border-accent bg-accent/10 text-ink-100';
            else if (chosen) cls = 'border-danger bg-danger/10 text-ink-100';
            else cls = 'border-ink-700 bg-ink-800 text-ink-300';
          } else if (chosen) {
            cls = 'border-accent bg-accent/10';
          }
          return (
            <label
              key={i}
              className={`flex items-center gap-2 rounded-lg border px-3 py-2 text-sm cursor-pointer transition-colors ${cls}`}
            >
              <input
                type="radio"
                className="accent-accent-strong"
                name={`readthis-${id}`}
                checked={chosen}
                onChange={() => !submitted && setSelected(i)}
              />
              <span>{opt}</span>
            </label>
          );
        })}
      </div>

      {submitted && (
        <div className={`text-sm ${isCorrect ? 'text-accent-strong' : 'text-danger'}`}>
          {isCorrect ? 'Correct.' : 'Not quite.'}
          {explanation && <span className="text-ink-300"> {explanation}</span>}
        </div>
      )}

      <div className="flex justify-end gap-2">
        {submitted ? (
          <button type="button" className="btn-ghost" onClick={reset}>
            Try again
          </button>
        ) : (
          <button
            type="button"
            className="btn-primary"
            onClick={submit}
            disabled={selected == null}
          >
            Submit
          </button>
        )}
      </div>
    </section>
  );
}
