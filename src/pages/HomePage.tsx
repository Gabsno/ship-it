import { Link } from 'react-router-dom';
import { useProgress } from '@/hooks/useProgress';
import {
  getLesson,
  LESSONS,
} from '@/data/lessons';
import { BUILD_ALONGS } from '@/data/buildAlongs';
import { GAUNTLET_SNIPPETS } from '@/data/gauntlet/snippets';
import { CURRICULUM } from '@/data/curriculum';

export function HomePage() {
  const { progress } = useProgress();
  const lessonsDone = Object.keys(progress.lessonsCompleted).length;
  const totalAuthored = LESSONS.length;
  const pctOverall = totalAuthored > 0 ? Math.round((lessonsDone / totalAuthored) * 100) : 0;

  const lastLessonId = progress.settings.lastLessonId;
  const lastLesson = lastLessonId ? getLesson(lastLessonId) : undefined;
  const firstIncomplete = LESSONS.find((l) => !progress.lessonsCompleted[l.id]);
  const continueLesson =
    lastLesson && !progress.lessonsCompleted[lastLesson.id]
      ? lastLesson
      : firstIncomplete;
  const continueReason: 'resume' | 'start' | null = continueLesson
    ? lastLesson && continueLesson.id === lastLesson.id
      ? 'resume'
      : 'start'
    : null;

  const continueModule = continueLesson
    ? CURRICULUM.find((m) => m.id === continueLesson.moduleId)
    : undefined;

  const gauntletSolved = Object.keys(progress.gauntletSolved).length;

  return (
    <div className="space-y-8">
      {/* Header — minimal on mobile */}
      <header>
        <h1 className="text-2xl sm:text-3xl font-semibold text-ink-100">Ship It</h1>
        <p className="text-sm sm:text-base text-ink-300 mt-1">
          Drill the syntax. Build the projects. Ship without AI.
        </p>
      </header>

      {/* Continue hero — the big single CTA */}
      {continueLesson && continueReason && (
        <Link
          to={`/lesson/${continueLesson.id}`}
          className="card p-5 sm:p-6 border-accent/40 bg-accent/[0.04] hover:bg-accent/[0.08] transition-colors block"
        >
          <div className="text-xs sm:text-sm text-accent-strong font-medium">
            {continueReason === 'resume' ? 'Continue where you left off' : 'Start here'}
          </div>
          <div className="text-xl sm:text-2xl font-semibold text-ink-100 mt-1 leading-tight">
            {continueLesson.title}
          </div>
          {continueModule && (
            <div className="text-xs text-ink-400 mt-1">
              Module {continueModule.index} · {continueModule.title}
            </div>
          )}
          <div className="text-sm text-ink-300 mt-3">{continueLesson.objective}</div>
          <div className="mt-4 flex items-center gap-3">
            <span className="btn-primary">
              {continueReason === 'resume' ? 'Resume' : 'Begin'}
            </span>
            <span className="text-xs text-ink-400">{continueLesson.estimatedMinutes} min</span>
          </div>
        </Link>
      )}

      {/* Quick stats */}
      <div className="grid grid-cols-3 gap-2 sm:gap-3">
        <div className="card p-3 sm:p-4">
          <div className="text-[10px] sm:text-xs text-ink-400 uppercase tracking-wide">Done</div>
          <div className="text-xl sm:text-3xl font-semibold text-ink-100 mt-0.5">{lessonsDone}</div>
          <div className="text-[10px] sm:text-xs text-ink-400 mt-1">of {totalAuthored} · {pctOverall}%</div>
        </div>
        <div className="card p-3 sm:p-4">
          <div className="text-[10px] sm:text-xs text-ink-400 uppercase tracking-wide">Gauntlet</div>
          <div className="text-xl sm:text-3xl font-semibold text-ink-100 mt-0.5">{gauntletSolved}</div>
          <div className="text-[10px] sm:text-xs text-ink-400 mt-1">of {GAUNTLET_SNIPPETS.length} solved</div>
        </div>
        <div className="card p-3 sm:p-4">
          <div className="text-[10px] sm:text-xs text-ink-400 uppercase tracking-wide">Builds</div>
          <div className="text-xl sm:text-3xl font-semibold text-ink-100 mt-0.5">
            {Object.keys(progress.buildAlongsStarted).length}
          </div>
          <div className="text-[10px] sm:text-xs text-ink-400 mt-1">of {BUILD_ALONGS.length} started</div>
        </div>
      </div>

      {/* Quick links */}
      <section className="space-y-3">
        <div className="text-xs sm:text-sm uppercase tracking-wide text-ink-400">Jump to</div>
        <div className="grid grid-cols-2 gap-3">
          <Link to="/curriculum" className="card p-4 hover:border-accent/40 transition-colors block">
            <div className="text-base sm:text-lg font-semibold text-ink-100">Curriculum</div>
            <div className="text-xs text-ink-300 mt-1">All 13 modules</div>
          </Link>
          <Link to="/gauntlet" className="card p-4 hover:border-accent/40 transition-colors block">
            <div className="text-base sm:text-lg font-semibold text-ink-100">Debug Gauntlet</div>
            <div className="text-xs text-ink-300 mt-1">Fix broken code</div>
          </Link>
          {BUILD_ALONGS.slice(0, 2).map((ba) => (
            <Link
              key={ba.id}
              to={`/build-along/${ba.id}`}
              className="card p-4 hover:border-accent/40 transition-colors block"
            >
              <div className="text-xs text-ink-400">Build-along</div>
              <div className="text-base sm:text-lg font-semibold text-ink-100 mt-0.5 truncate">
                {ba.title.replace('Build-Along #', 'BA-').replace(' — ', ': ')}
              </div>
              <div className="text-xs text-ink-300 mt-1">~{ba.estimatedHours}h · {ba.milestones.length} milestones</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Engine test — tucked at bottom */}
      <section>
        <Link
          to="/lesson/test-blocks"
          className="text-xs text-ink-400 hover:text-ink-200 inline-flex items-center gap-1"
        >
          Engine sandbox · exercise all 6 block types →
        </Link>
      </section>
    </div>
  );
}
