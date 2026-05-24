import { Link } from 'react-router-dom';
import { CURRICULUM } from '@/data/curriculum';
import { ModuleCard } from '@/components/ModuleCard';
import { useProgress } from '@/hooks/useProgress';
import {
  computeModuleProgress,
  getLesson,
  LESSONS,
} from '@/data/lessons';
import { BUILD_ALONGS } from '@/data/buildAlongs';
import { GAUNTLET_SNIPPETS } from '@/data/gauntlet/snippets';

export function HomePage() {
  const { progress } = useProgress();
  const lessonsDone = Object.keys(progress.lessonsCompleted).length;
  const totalAuthored = LESSONS.length;

  const lastLessonId = progress.settings.lastLessonId;
  const lastLesson = lastLessonId ? getLesson(lastLessonId) : undefined;
  const firstIncomplete = LESSONS.find((l) => !progress.lessonsCompleted[l.id]);
  const continueLesson = lastLesson ?? firstIncomplete;
  const continueReason: 'resume' | 'start' | null = lastLesson
    ? 'resume'
    : firstIncomplete
      ? 'start'
      : null;

  return (
    <div className="space-y-8">
      <section>
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <div>
            <h1 className="text-2xl sm:text-3xl font-semibold text-ink-100">Ship It</h1>
            <p className="text-sm sm:text-base text-ink-300 max-w-2xl mt-1">
              A personal training rig. Drill the syntax. Build the projects. Ship without AI.
            </p>
          </div>
          <div className="card px-4 py-3 text-sm text-ink-200 flex gap-6 self-stretch sm:self-auto">
            <div>
              <div className="text-[11px] text-ink-400">Lessons done</div>
              <div className="text-xl sm:text-2xl font-semibold text-ink-100">{lessonsDone}</div>
            </div>
            <div>
              <div className="text-[11px] text-ink-400">Authored</div>
              <div className="text-xl sm:text-2xl font-semibold text-ink-100">{totalAuthored}</div>
            </div>
          </div>
        </div>
      </section>

      {continueLesson && continueReason && (
        <section className="card p-5 flex items-center justify-between gap-4 border-accent/30">
          <div className="min-w-0">
            <div className="text-xs text-accent-strong">
              {continueReason === 'resume' ? 'Continue where you left off' : 'Start here'}
            </div>
            <div className="text-base font-semibold text-ink-100 truncate">
              {continueLesson.title}
            </div>
            <div className="text-xs text-ink-300 truncate">{continueLesson.objective}</div>
            <div className="text-[11px] text-ink-400 mt-1">
              module: {continueLesson.moduleId} · {continueLesson.estimatedMinutes} min
            </div>
          </div>
          <Link to={`/lesson/${continueLesson.id}`} className="btn-primary shrink-0">
            {continueReason === 'resume' ? 'Resume' : 'Begin'}
          </Link>
        </section>
      )}

      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Link
          to="/gauntlet"
          className="card p-4 group hover:border-accent/40 transition-colors flex flex-col"
        >
          <div className="text-xs text-ink-300">Always available</div>
          <div className="text-base font-semibold text-ink-100 mt-0.5">Debug Gauntlet</div>
          <div className="text-xs text-ink-300 mt-1 flex-1">
            Broken code, real errors. Fix one snippet at a time.
          </div>
          <div className="text-[11px] text-ink-400 mt-3">
            {Object.keys(progress.gauntletSolved).length} / {GAUNTLET_SNIPPETS.length} solved
          </div>
        </Link>

        {BUILD_ALONGS.map((ba) => (
          <Link
            key={ba.id}
            to={`/build-along/${ba.id}`}
            className="card p-4 group hover:border-accent/40 transition-colors flex flex-col"
          >
            <div className="text-xs text-ink-300">Build-along</div>
            <div className="text-base font-semibold text-ink-100 mt-0.5">{ba.title}</div>
            <div className="text-xs text-ink-300 mt-1 flex-1 line-clamp-2">{ba.summary}</div>
            <div className="text-[11px] text-ink-400 mt-3">
              {progress.buildAlongsStarted[ba.id] ? 'Started' : 'Not started'} · ~{ba.estimatedHours}h
            </div>
          </Link>
        ))}

        <Link
          to="/lesson/test-blocks"
          className="card p-4 group hover:border-accent/40 transition-colors flex flex-col"
        >
          <div className="text-xs text-ink-300">Engine sandbox</div>
          <div className="text-base font-semibold text-ink-100 mt-0.5">Test lesson</div>
          <div className="text-xs text-ink-300 mt-1 flex-1">
            All six block types exercised in one place.
          </div>
          <div className="text-[11px] text-ink-400 mt-3">Diagnostic — not part of the curriculum</div>
        </Link>
      </section>

      <section>
        <div className="flex items-baseline justify-between mb-3">
          <h2 className="text-lg font-semibold text-ink-100">Curriculum</h2>
          <span className="text-xs text-ink-400">12 modules + capstone</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {CURRICULUM.map((m) => {
            const mp = computeModuleProgress(m.id, progress.lessonsCompleted);
            return <ModuleCard key={m.id} module={m} completionPct={mp.pct} />;
          })}
        </div>
      </section>
    </div>
  );
}
