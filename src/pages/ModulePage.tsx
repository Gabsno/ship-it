import { Link, useParams } from 'react-router-dom';
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

  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <Link to="/curriculum" className="text-xs text-ink-300 hover:text-ink-100 inline-flex items-center gap-1">
          ← Curriculum
        </Link>
        <div className="flex items-center gap-2 flex-wrap">
          <span className="chip bg-ink-700 text-ink-200 border border-ink-600">{mod.badge}</span>
          <span className="text-xs text-ink-400">Module {mod.index}</span>
          {mod.isCapstone && <span className="chip bg-accent/20 text-accent-strong">Capstone</span>}
        </div>
        <h1 className="text-2xl sm:text-3xl font-semibold text-ink-100 leading-tight">{mod.title}</h1>
        <p className="text-sm sm:text-base text-ink-300 max-w-2xl">{mod.blurb}</p>

        {lessons.length > 0 && (
          <div className="pt-1 max-w-md">
            <div className="progress-track">
              <div className="progress-fill" style={{ width: `${moduleProgress.pct}%` }} />
            </div>
            <div className="mt-1 text-[11px] text-ink-400">
              {moduleProgress.completed} / {moduleProgress.total} lessons · {moduleProgress.pct}%
            </div>
          </div>
        )}
      </div>

      {nextLesson && (
        <Link
          to={`/lesson/${nextLesson.id}`}
          className="card p-4 sm:p-5 flex items-center justify-between gap-3 border-accent/40 bg-accent/[0.04] hover:bg-accent/[0.08] transition-colors block"
        >
          <div className="min-w-0">
            <div className="text-xs text-accent-strong font-medium">
              {moduleProgress.completed === 0 ? 'Start here' : 'Continue'}
            </div>
            <div className="text-base sm:text-lg font-semibold text-ink-100 truncate">
              {nextLesson.title}
            </div>
            <div className="text-xs text-ink-300 truncate hidden sm:block">{nextLesson.objective}</div>
          </div>
          <span className="btn-primary shrink-0">
            {moduleProgress.completed === 0 ? 'Begin' : 'Resume'}
          </span>
        </Link>
      )}

      {lessons.length === 0 ? (
        <div className="card p-6">
          <div className="text-sm text-ink-100">No lessons authored yet for this module.</div>
          <div className="text-xs text-ink-400 mt-1">
            Lessons land in Phase 4 onward. The plumbing is ready — just waiting on content.
          </div>
          {mod.unlocksBuildAlong && (
            <Link
              to={`/build-along/${mod.unlocksBuildAlong}`}
              className="mt-4 text-sm text-accent-strong hover:underline inline-flex items-center gap-1"
            >
              🔓 Unlocks build-along <code>{mod.unlocksBuildAlong}</code> →
            </Link>
          )}
        </div>
      ) : (
        <div className="space-y-3">
          <div className="text-xs uppercase tracking-wide text-ink-400">Lessons</div>
          {/* Vertical lesson path */}
          <ol className="space-y-3 relative">
            {/* the line that runs down the left, behind the circles */}
            <span
              aria-hidden
              className="absolute left-[17px] top-3 bottom-3 w-px bg-ink-700"
            />
            {lessons.map((lesson, i) => {
              const p = computeLessonProgress(
                lesson,
                progress.blocksCompleted,
                progress.lessonsCompleted,
              );
              const isNext = nextLesson?.id === lesson.id;
              return (
                <li key={lesson.id} className="relative">
                  <Link
                    to={`/lesson/${lesson.id}`}
                    className={`group flex items-center gap-3.5 sm:gap-4 px-3 sm:px-4 py-3 rounded-xl transition-colors border ${
                      p.done
                        ? 'bg-ink-800/40 border-ink-700 hover:border-accent/30'
                        : isNext
                          ? 'bg-accent/[0.04] border-accent/30 hover:bg-accent/[0.08]'
                          : 'bg-ink-800/70 border-ink-700 hover:border-accent/30'
                    }`}
                  >
                    {/* The circle in the path */}
                    <div
                      className={`shrink-0 h-9 w-9 rounded-full grid place-items-center text-sm font-semibold relative z-10 ${
                        p.done
                          ? 'bg-accent-strong text-ink-900'
                          : isNext
                            ? 'bg-accent/20 text-accent-strong border-2 border-accent-strong'
                            : 'bg-ink-700 text-ink-200 border border-ink-600'
                      }`}
                    >
                      {p.done ? '✓' : i + 1}
                    </div>

                    {/* Title + meta */}
                    <div className="flex-1 min-w-0">
                      <div className={`text-sm sm:text-base font-medium truncate ${
                        p.done ? 'text-ink-300' : 'text-ink-100 group-hover:text-white'
                      }`}>
                        {lesson.title}
                      </div>
                      <div className="text-xs text-ink-400 mt-0.5 flex items-center gap-2 flex-wrap">
                        <span>{lesson.estimatedMinutes} min</span>
                        {p.blocksTotal > 0 && (
                          <>
                            <span>·</span>
                            <span>{p.blocksDone}/{p.blocksTotal} blocks</span>
                          </>
                        )}
                        {isNext && !p.done && (
                          <span className="text-accent-strong font-medium">· up next</span>
                        )}
                      </div>
                    </div>

                    <span className="text-ink-400 group-hover:text-ink-200 text-lg shrink-0">›</span>
                  </Link>
                </li>
              );
            })}
          </ol>

          {mod.unlocksBuildAlong && (
            <Link
              to={`/build-along/${mod.unlocksBuildAlong}`}
              className="card p-4 mt-4 flex items-center justify-between gap-3 hover:border-accent/40 transition-colors block"
            >
              <div>
                <div className="text-xs text-accent-strong">🔓 Build-along unlock</div>
                <div className="text-sm font-medium text-ink-100">{mod.unlocksBuildAlong}</div>
              </div>
              <span className="text-ink-400 text-lg">›</span>
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
