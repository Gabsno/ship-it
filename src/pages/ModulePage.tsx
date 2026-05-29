import { Link, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  Check,
  Clock,
  Hammer,
  Lock,
  Play,
} from 'lucide-react';
import { getModule } from '@/data/curriculum';
import {
  computeLessonProgress,
  computeModuleProgress,
  getFirstIncompleteLesson,
  getLessonsForModule,
} from '@/data/lessons';
import { useProgress } from '@/hooks/useProgress';

export function ModulePage() {
  const { moduleId } = useParams<{ moduleId: string }>();
  const mod = moduleId ? getModule(moduleId) : undefined;
  const { progress } = useProgress();

  if (!mod) {
    return (
      <div className="card p-6">
        <h2 className="text-lg font-semibold text-ink-100">Module not found</h2>
        <p className="text-sm text-ink-300 mt-1">
          No module with id <code>{moduleId}</code>.
        </p>
        <Link to="/" className="btn-primary mt-4 inline-flex">Back home</Link>
      </div>
    );
  }

  const lessons = getLessonsForModule(mod.id);
  const moduleProgress = computeModuleProgress(mod.id, progress.lessonsCompleted);
  const nextLesson = getFirstIncompleteLesson(mod.id, progress.lessonsCompleted);

  // Determine which lessons are "unlocked" — a lesson is unlocked if the
  // previous one in this module is complete (or it's the first lesson).
  const isUnlocked = (lessonId: string): boolean => {
    const idx = lessons.findIndex((l) => l.id === lessonId);
    if (idx <= 0) return true;
    const prev = lessons[idx - 1];
    return Boolean(progress.lessonsCompleted[prev.id]);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-2.5">
        <Link
          to="/curriculum"
          className="text-xs text-ink-300 hover:text-ink-100 inline-flex items-center gap-1"
        >
          <ArrowLeft size={12} /> Curriculum
        </Link>
        <div className="flex items-center gap-2 flex-wrap">
          <span className="chip bg-ink-700 text-ink-200 border border-ink-600">{mod.badge}</span>
          <span className="text-xs text-ink-400">Module {mod.index}</span>
          {mod.isCapstone && <span className="chip bg-accent/20 text-accent-strong">Capstone</span>}
        </div>
        <h1 className="text-xl sm:text-3xl font-extrabold tracking-tight text-ink-100 leading-tight">
          {mod.title}
        </h1>
        <p className="text-sm sm:text-base text-ink-300 max-w-2xl">{mod.blurb}</p>

        {lessons.length > 0 && (
          <div className="pt-2 flex items-center gap-3">
            <div className="h-2 flex-1 overflow-hidden rounded-full bg-ink-700">
              <div
                className="h-full rounded-full bg-gradient-to-r from-accent to-accent-strong transition-all"
                style={{ width: `${moduleProgress.pct}%` }}
              />
            </div>
            <span className="text-xs font-bold text-ink-200 shrink-0">
              {moduleProgress.completed}/{moduleProgress.total} · {moduleProgress.pct}%
            </span>
          </div>
        )}
      </div>

      {/* Featured "Continue" card */}
      {nextLesson && (
        <Link
          to={`/lesson/${nextLesson.id}`}
          className="block overflow-hidden rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-emerald-700 to-emerald-900 p-5 text-white shadow-lg shadow-emerald-900/30 transition hover:from-emerald-600 hover:to-emerald-800"
        >
          <p className="text-[11px] font-bold uppercase tracking-wide text-emerald-100">
            {moduleProgress.completed === 0 ? 'Start here' : 'Continue'}
          </p>
          <h2 className="mt-1 text-lg sm:text-xl font-extrabold leading-tight">
            {nextLesson.title}
          </h2>
          <p className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-emerald-100">
            <span className="flex items-center gap-1">
              <Clock size={12} /> {nextLesson.estimatedMinutes} min
            </span>
            <span>
              {nextLesson.blocks.length} {nextLesson.blocks.length === 1 ? 'block' : 'blocks'}
            </span>
            {nextLesson.quiz && nextLesson.quiz.length > 0 && (
              <span>{nextLesson.quiz.length} quiz Qs</span>
            )}
          </p>
          <div className="mt-3 flex justify-end">
            <span className="flex items-center gap-1.5 rounded-full bg-white px-4 py-1.5 text-xs font-bold text-emerald-800">
              <Play size={13} fill="currentColor" />
              {moduleProgress.completed === 0 ? 'Begin' : 'Resume'}
            </span>
          </div>
        </Link>
      )}

      {lessons.length === 0 ? (
        <div className="card p-6">
          <div className="text-sm text-ink-100">No lessons authored yet for this module.</div>
          <div className="text-xs text-ink-400 mt-1">
            Plumbing is ready — waiting on content.
          </div>
          {mod.unlocksBuildAlong && (
            <Link
              to={`/build-along/${mod.unlocksBuildAlong}`}
              className="mt-4 text-sm text-accent-strong hover:underline inline-flex items-center gap-1"
            >
              <Hammer size={14} /> Unlocks build-along <code>{mod.unlocksBuildAlong}</code> →
            </Link>
          )}
        </div>
      ) : (
        <>
          <div className="mb-1 text-[11px] font-bold uppercase tracking-wide text-ink-400">
            Lesson path
          </div>
          {/* Snake-path — alternating left/right nodes connected by a vertical line */}
          <div className="relative">
            {lessons.map((lesson, i) => {
              const p = computeLessonProgress(
                lesson,
                progress.blocksCompleted,
                progress.lessonsCompleted,
              );
              const done = p.done;
              const unlocked = isUnlocked(lesson.id);
              const isNext = nextLesson?.id === lesson.id;
              const isLeft = i % 2 === 0;

              const nodeColor = done
                ? 'bg-accent-strong text-ink-900 ring-accent-strong/30'
                : isNext
                  ? 'bg-emerald-600 text-white ring-emerald-500/40 animate-pulse-soft'
                  : unlocked
                    ? 'bg-accent/20 text-accent-strong ring-accent/10'
                    : 'bg-ink-700 text-ink-500 ring-ink-700/50';

              const cardClass = unlocked
                ? 'border-ink-700 bg-ink-800/70 hover:border-accent/40'
                : 'border-ink-700 bg-ink-800/30 opacity-60';

              const card = (
                <div
                  className={`flex flex-1 items-center gap-3 rounded-2xl border p-3 sm:p-3.5 transition-colors ${cardClass} ${
                    isLeft ? '' : 'flex-row-reverse'
                  }`}
                >
                  <div className="min-w-0 flex-1">
                    <p
                      className={`truncate text-sm sm:text-base font-semibold text-ink-100 ${
                        isLeft ? 'text-left' : 'text-right'
                      }`}
                    >
                      {lesson.title}
                    </p>
                    <p
                      className={`flex flex-wrap gap-x-2 gap-y-0.5 text-[11px] text-ink-400 mt-0.5 ${
                        isLeft ? '' : 'justify-end'
                      }`}
                    >
                      <span className="flex items-center gap-0.5">
                        <Clock size={10} />
                        {lesson.estimatedMinutes}m
                      </span>
                      {p.blocksTotal > 0 && (
                        <span>
                          {p.blocksDone}/{p.blocksTotal} blocks
                        </span>
                      )}
                      {done && (
                        <span className="font-semibold text-accent-strong">Complete</span>
                      )}
                      {isNext && !done && (
                        <span className="font-semibold text-accent-strong">Up next</span>
                      )}
                    </p>
                    {mod.isCapstone && (
                      <span className="mt-1 inline-block rounded-full bg-accent/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-accent-strong">
                        Capstone
                      </span>
                    )}
                  </div>
                </div>
              );

              const node = (
                <span
                  className={`flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-full ring-8 ${nodeColor}`}
                  aria-hidden="true"
                >
                  {done ? (
                    <Check size={20} strokeWidth={3} />
                  ) : unlocked ? (
                    <Play size={18} fill="currentColor" className="ml-0.5" />
                  ) : (
                    <Lock size={16} />
                  )}
                </span>
              );

              const row = (
                <div
                  className={`my-3 flex items-center gap-2 sm:gap-3 ${
                    isLeft ? '' : 'flex-row-reverse'
                  }`}
                >
                  {node}
                  {card}
                </div>
              );

              return unlocked ? (
                <Link
                  key={lesson.id}
                  to={`/lesson/${lesson.id}`}
                  className="block"
                  aria-label={`${lesson.title}, ${lesson.estimatedMinutes} minutes`}
                >
                  {row}
                </Link>
              ) : (
                <div
                  key={lesson.id}
                  aria-label={`${lesson.title} (locked)`}
                  className="cursor-not-allowed"
                >
                  {row}
                </div>
              );
            })}
          </div>

          {mod.unlocksBuildAlong && (
            <Link
              to={`/build-along/${mod.unlocksBuildAlong}`}
              className="card p-4 mt-2 flex items-center gap-3 hover:border-accent/40 transition-colors block"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-warn/15 text-warn shrink-0">
                <Hammer size={18} />
              </span>
              <div className="flex-1 min-w-0">
                <div className="text-[10px] font-bold uppercase tracking-wide text-warn">
                  Build-along unlock
                </div>
                <div className="text-sm font-semibold text-ink-100 truncate">
                  {mod.unlocksBuildAlong}
                </div>
              </div>
              <span className="text-ink-400 text-lg shrink-0">›</span>
            </Link>
          )}
        </>
      )}
    </div>
  );
}
