import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getLesson } from '@/data/lessons';
import { BlockRenderer } from '@/components/blocks/BlockRenderer';
import { QuizBlock } from '@/components/QuizBlock';
import { useProgress } from '@/hooks/useProgress';

export function LessonPage() {
  const { lessonId } = useParams<{ lessonId: string }>();
  const lesson = lessonId ? getLesson(lessonId) : undefined;
  const { progress, markLessonComplete, setSettings } = useProgress();

  useEffect(() => {
    if (lesson) setSettings({ lastLessonId: lesson.id });
  }, [lesson, setSettings]);

  if (!lesson) {
    return (
      <div className="space-y-4">
        <Link to="/" className="text-xs text-ink-300 hover:text-ink-100">← Home</Link>
        <div className="card p-6">
          <h1 className="text-xl font-semibold text-ink-100">Lesson not found</h1>
          <p className="text-sm text-ink-300 mt-1">
            No lesson with id <code>{lessonId}</code>. Try{' '}
            <Link to="/lesson/test-blocks" className="text-accent-strong hover:underline">
              /lesson/test-blocks
            </Link>{' '}
            to see all six block types.
          </p>
        </div>
      </div>
    );
  }

  const lessonDone = Boolean(progress.lessonsCompleted[lesson.id]);
  const completedBlocks = lesson.blocks.filter(
    (b) => b.type !== 'explain' && progress.blocksCompleted[b.id],
  ).length;
  const totalTrackable = lesson.blocks.filter((b) => b.type !== 'explain').length;
  const pct = totalTrackable === 0 ? 0 : Math.round((completedBlocks / totalTrackable) * 100);

  return (
    <div className="space-y-6">
      <div>
        <Link to="/" className="text-xs text-ink-300 hover:text-ink-100">← Home</Link>
        <div className="mt-2 flex items-center gap-2 text-xs text-ink-400">
          <span>Lesson</span>
          <span>·</span>
          <span>{lesson.estimatedMinutes} min</span>
          <span>·</span>
          <span>module: {lesson.moduleId}</span>
        </div>
        <h1 className="text-2xl font-semibold text-ink-100 mt-1">{lesson.title}</h1>
        <p className="text-ink-300 mt-1">{lesson.objective}</p>

        <div className="mt-4">
          <div className="progress-track">
            <div className="progress-fill" style={{ width: `${pct}%` }} />
          </div>
          <div className="mt-1 text-[11px] text-ink-400">
            {completedBlocks} / {totalTrackable} interactive blocks complete · {pct}%
          </div>
        </div>
      </div>

      <div className="space-y-5">
        {lesson.blocks.map((block, i) => (
          <BlockRenderer key={`${block.type}-${i}`} block={block} />
        ))}
      </div>

      {lesson.quiz && lesson.quiz.length > 0 && (
        <QuizBlock quizId={`${lesson.id}-quiz`} questions={lesson.quiz} />
      )}

      <div className="card p-5 flex items-center justify-between gap-3">
        <div>
          <div className="text-sm font-medium text-ink-100">Mark lesson complete</div>
          <div className="text-xs text-ink-300">
            Not every block auto-completes (Explain blocks don't, for example).
            Toggle this when you're done.
          </div>
        </div>
        <button
          type="button"
          className={lessonDone ? 'btn-ghost' : 'btn-primary'}
          onClick={() => markLessonComplete(lesson.id)}
          disabled={lessonDone}
        >
          {lessonDone ? 'Completed' : 'Mark complete'}
        </button>
      </div>
    </div>
  );
}
