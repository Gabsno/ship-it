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
      <div>
        <Link to="/" className="text-xs text-ink-300 hover:text-ink-100">← All modules</Link>
        <div className="mt-2 flex items-center gap-2">
          <span className="chip bg-ink-700 text-ink-200 border border-ink-600">{mod.badge}</span>
          <span className="text-xs text-ink-400">Module {mod.index}</span>
          {mod.isCapstone && <span className="chip bg-accent/20 text-accent-strong">Capstone</span>}
        </div>
        <h1 className="text-2xl font-semibold text-ink-100 mt-1">{mod.title}</h1>
        <p className="text-ink-300 mt-2 max-w-2xl">{mod.blurb}</p>

        {lessons.length > 0 && (
          <div className="mt-4 max-w-md">
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
        <div className="card p-4 flex items-center justify-between gap-3 border-accent/30">
          <div>
            <div className="text-xs text-accent-strong">Recommended next</div>
            <div className="text-sm font-medium text-ink-100">{nextLesson.title}</div>
            <div className="text-xs text-ink-300">{nextLesson.objective}</div>
          </div>
          <Link to={`/lesson/${nextLesson.id}`} className="btn-primary shrink-0">
            Start
          </Link>
        </div>
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
          <ol className="space-y-2">
            {lessons.map((lesson, i) => {
              const p = computeLessonProgress(
                lesson,
                progress.blocksCompleted,
                progress.lessonsCompleted,
              );
              return (
                <li key={lesson.id}>
                  <Link
                    to={`/lesson/${lesson.id}`}
                    className="card px-4 py-3 flex items-center gap-4 hover:border-accent/40 transition-colors group"
                  >
                    <div
                      className={`shrink-0 h-8 w-8 rounded-full grid place-items-center text-sm font-medium ${
                        p.done
                          ? 'bg-accent-strong text-ink-900'
                          : 'bg-ink-700 text-ink-200 border border-ink-600'
                      }`}
                    >
                      {p.done ? '✓' : i + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium text-ink-100 group-hover:text-white truncate">
                        {lesson.title}
                      </div>
                      <div className="text-xs text-ink-300 truncate">{lesson.objective}</div>
                      <div className="text-[11px] text-ink-400 mt-1">
                        {lesson.estimatedMinutes} min ·
                        {p.blocksTotal > 0
                          ? ` ${p.blocksDone}/${p.blocksTotal} blocks`
                          : ' explainer'}
                      </div>
                    </div>
                    <div className="w-28 shrink-0">
                      <div className="progress-track">
                        <div className="progress-fill" style={{ width: `${p.pct}%` }} />
                      </div>
                      <div className="mt-1 text-[11px] text-ink-400 text-right">{p.pct}%</div>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ol>
        </div>
      )}
    </div>
  );
}
