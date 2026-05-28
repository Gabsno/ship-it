import { useEffect, useMemo } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getLesson, LESSONS } from '@/data/lessons';
import { BlockRenderer } from '@/components/blocks/BlockRenderer';
import { QuizBlock } from '@/components/QuizBlock';
import { useProgress } from '@/hooks/useProgress';
import { CURRICULUM } from '@/data/curriculum';

export function LessonPage() {
  const { lessonId } = useParams<{ lessonId: string }>();
  const navigate = useNavigate();
  const lesson = lessonId ? getLesson(lessonId) : undefined;
  const { progress, markLessonComplete, setSettings } = useProgress();

  useEffect(() => {
    if (lesson) setSettings({ lastLessonId: lesson.id });
  }, [lesson, setSettings]);

  const mod = useMemo(
    () => (lesson ? CURRICULUM.find((m) => m.id === lesson.moduleId) : undefined),
    [lesson],
  );

  const { prevLesson, nextLesson } = useMemo(() => {
    if (!lesson) return { prevLesson: undefined, nextLesson: undefined };
    const sameModule = LESSONS.filter((l) => l.moduleId === lesson.moduleId);
    const idx = sameModule.findIndex((l) => l.id === lesson.id);
    return {
      prevLesson: idx > 0 ? sameModule[idx - 1] : undefined,
      nextLesson: idx < sameModule.length - 1 ? sameModule[idx + 1] : undefined,
    };
  }, [lesson]);

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

  const completeAndNext = () => {
    markLessonComplete(lesson.id);
    if (nextLesson) {
      navigate(`/lesson/${nextLesson.id}`);
    } else if (mod) {
      navigate(`/module/${mod.id}`);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header — back link + module crumb + title + progress */}
      <div className="space-y-2">
        <Link
          to={mod ? `/module/${mod.id}` : '/curriculum'}
          className="text-xs text-ink-300 hover:text-ink-100 inline-flex items-center gap-1"
        >
          ← {mod ? mod.title : 'Curriculum'}
        </Link>
        <div className="flex items-center gap-2 text-xs text-ink-400 flex-wrap">
          <span>{lesson.estimatedMinutes} min</span>
          <span>·</span>
          <span>module: {lesson.moduleId}</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-semibold text-ink-100 leading-tight">
          {lesson.title}
        </h1>
        <p className="text-sm sm:text-base text-ink-300">{lesson.objective}</p>

        {totalTrackable > 0 && (
          <div className="pt-2">
            <div className="progress-track">
              <div className="progress-fill" style={{ width: `${pct}%` }} />
            </div>
            <div className="mt-1 text-[11px] text-ink-400">
              {completedBlocks} / {totalTrackable} interactive blocks · {pct}%
            </div>
          </div>
        )}
      </div>

      {/* Blocks */}
      <div className="space-y-6">
        {lesson.blocks.map((block, i) => (
          <BlockRenderer key={`${block.type}-${i}`} block={block} />
        ))}
      </div>

      {/* Quiz, if present */}
      {lesson.quiz && lesson.quiz.length > 0 && (
        <QuizBlock quizId={`${lesson.id}-quiz`} questions={lesson.quiz} />
      )}

      {/* Inline footer — desktop. Mobile gets the sticky bar below. */}
      <div className="hidden sm:flex items-center justify-between gap-3 pt-4">
        {prevLesson ? (
          <Link to={`/lesson/${prevLesson.id}`} className="btn-ghost">
            ← {prevLesson.title}
          </Link>
        ) : (
          <span />
        )}
        <button
          type="button"
          className={lessonDone ? 'btn-ghost' : 'btn-primary'}
          onClick={completeAndNext}
        >
          {lessonDone
            ? nextLesson
              ? `Next: ${nextLesson.title} →`
              : 'Back to module'
            : nextLesson
              ? 'Mark complete + next →'
              : 'Mark complete'}
        </button>
      </div>

      {/* Sticky mobile action bar */}
      <div className="sm:hidden fixed bottom-[60px] inset-x-0 z-30 border-t border-ink-700 bg-ink-900/95 backdrop-blur supports-[backdrop-filter]:bg-ink-900/85">
        <div className="px-3 py-2.5 flex items-center gap-2">
          {prevLesson && (
            <Link
              to={`/lesson/${prevLesson.id}`}
              className="btn-ghost shrink-0 min-w-[40px] px-2"
              aria-label="Previous lesson"
            >
              ←
            </Link>
          )}
          <button
            type="button"
            className={`${lessonDone ? 'btn-ghost' : 'btn-primary'} flex-1`}
            onClick={completeAndNext}
          >
            {lessonDone
              ? nextLesson
                ? 'Next lesson →'
                : 'Back to module'
              : nextLesson
                ? 'Done · next →'
                : 'Mark complete'}
          </button>
        </div>
        <div className="h-[env(safe-area-inset-bottom)]" aria-hidden />
      </div>

      {/* Pad so the last content isn't hidden under the sticky bar */}
      <div className="sm:hidden h-20" aria-hidden />
    </div>
  );
}
