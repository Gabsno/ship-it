import { useMemo, useState } from 'react';
import { useProgress } from '@/hooks/useProgress';

export interface QuizQuestion {
  id: string;
  prompt: string;
  options: string[];
  answerIndex: number;
  explanation?: string;
}

interface QuizBlockProps {
  quizId: string;
  questions: QuizQuestion[];
  onComplete?: (score: number, total: number) => void;
}

export function QuizBlock({ quizId, questions, onComplete }: QuizBlockProps) {
  const { recordQuiz } = useProgress();
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const score = useMemo(
    () => questions.reduce((acc, q) => acc + (answers[q.id] === q.answerIndex ? 1 : 0), 0),
    [answers, questions],
  );
  const total = questions.length;

  const allAnswered = questions.every((q) => typeof answers[q.id] === 'number');

  const submit = () => {
    setSubmitted(true);
    recordQuiz(quizId, score, total);
    onComplete?.(score, total);
  };

  const reset = () => {
    setAnswers({});
    setSubmitted(false);
  };

  return (
    <div className="card p-5 space-y-5">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-ink-100">Quiz</h3>
        {submitted && (
          <span className="chip bg-accent/20 text-accent-strong">
            {score} / {total}
          </span>
        )}
      </div>
      <ol className="space-y-5 list-decimal pl-5">
        {questions.map((q) => {
          const chosen = answers[q.id];
          const isCorrect = chosen === q.answerIndex;
          return (
            <li key={q.id} className="space-y-2">
              <div className="text-sm text-ink-100">{q.prompt}</div>
              <div className="grid gap-2">
                {q.options.map((opt, i) => {
                  const selected = chosen === i;
                  let cls = 'border-ink-600 bg-ink-800 hover:bg-ink-700';
                  if (submitted) {
                    if (i === q.answerIndex) cls = 'border-accent bg-accent/10 text-ink-100';
                    else if (selected) cls = 'border-danger bg-danger/10 text-ink-100';
                    else cls = 'border-ink-700 bg-ink-800 text-ink-300';
                  } else if (selected) {
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
                        name={q.id}
                        checked={selected}
                        onChange={() => !submitted && setAnswers((a) => ({ ...a, [q.id]: i }))}
                      />
                      <span>{opt}</span>
                    </label>
                  );
                })}
              </div>
              {submitted && q.explanation && (
                <div className={`text-xs ${isCorrect ? 'text-accent-strong' : 'text-ink-300'}`}>
                  {q.explanation}
                </div>
              )}
            </li>
          );
        })}
      </ol>
      <div className="flex items-center justify-end gap-2">
        {submitted ? (
          <button type="button" className="btn-ghost" onClick={reset}>
            Retake
          </button>
        ) : (
          <button type="button" className="btn-primary" onClick={submit} disabled={!allAnswered}>
            Submit
          </button>
        )}
      </div>
    </div>
  );
}
