import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Clock,
  GraduationCap,
  History,
  Hammer,
  Play,
  Zap,
} from 'lucide-react';
import { useProgress } from '@/hooks/useProgress';
import {
  getLesson,
  LESSONS,
} from '@/data/lessons';
import { BUILD_ALONGS } from '@/data/buildAlongs';
import { GAUNTLET_SNIPPETS } from '@/data/gauntlet/snippets';
import { CURRICULUM } from '@/data/curriculum';

function greeting(): string {
  const h = new Date().getHours();
  if (h < 12) return 'Good morning';
  if (h < 17) return 'Good afternoon';
  return 'Good evening';
}

export function HomePage() {
  const { progress } = useProgress();
  const lessonsDone = Object.keys(progress.lessonsCompleted).length;
  const totalAuthored = LESSONS.length;
  const pctOverall = totalAuthored > 0 ? Math.round((lessonsDone / totalAuthored) * 100) : 0;
  const gauntletSolved = Object.keys(progress.gauntletSolved).length;
  const buildsStarted = Object.keys(progress.buildAlongsStarted).length;

  const lastLessonId = progress.settings.lastLessonId;
  const lastLesson = lastLessonId ? getLesson(lastLessonId) : undefined;
  const firstIncomplete = LESSONS.find((l) => !progress.lessonsCompleted[l.id]);
  const continueLesson =
    lastLesson && !progress.lessonsCompleted[lastLesson.id]
      ? lastLesson
      : firstIncomplete;
  const continueModule = continueLesson
    ? CURRICULUM.find((m) => m.id === continueLesson.moduleId)
    : undefined;
  const hasStartedAny = lessonsDone > 0;

  // Recent activity rail — last 3 visited lesson ids + any started build-alongs
  const recentLessons = (lastLessonId ? [lastLesson].filter(Boolean) : []) as ReturnType<
    typeof getLesson
  >[];
  const recentBuildAlongs = Object.keys(progress.buildAlongsStarted)
    .map((id) => BUILD_ALONGS.find((b) => b.id === id))
    .filter(Boolean) as typeof BUILD_ALONGS;
  const hasRecent = recentLessons.length > 0 || recentBuildAlongs.length > 0;

  return (
    <div className="space-y-6">
      {/* Greeting strip */}
      <div className="flex items-center justify-between gap-3">
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-wide text-accent-strong">
            {greeting()}
          </p>
          <h1 className="truncate text-xl sm:text-2xl font-extrabold tracking-tight text-ink-100">
            Ready to ship?
          </h1>
        </div>
      </div>

      {/* Continue Learning — gradient hero */}
      {continueLesson && (
        <Link
          to={`/lesson/${continueLesson.id}`}
          className="block overflow-hidden rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-emerald-700 to-emerald-900 p-5 text-white shadow-lg shadow-emerald-900/30 transition hover:from-emerald-600 hover:to-emerald-800"
        >
          <p className="text-[11px] font-bold uppercase tracking-wide text-emerald-100">
            {hasStartedAny ? 'Continue learning' : 'Start learning'}
            {continueModule && ` · ${continueModule.title}`}
          </p>
          <h2 className="mt-1 text-xl sm:text-2xl font-extrabold leading-tight">
            {continueLesson.title}
          </h2>
          <p className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-emerald-100">
            <span className="flex items-center gap-1">
              <Clock size={12} /> {continueLesson.estimatedMinutes} min
            </span>
            <span>
              {continueLesson.blocks.length} {continueLesson.blocks.length === 1 ? 'block' : 'blocks'}
            </span>
            {continueLesson.quiz && continueLesson.quiz.length > 0 && (
              <span>{continueLesson.quiz.length} quiz Qs</span>
            )}
          </p>
          <div className="mt-4 flex items-center justify-between">
            <span className="hidden sm:inline text-xs font-medium text-emerald-100">
              {continueLesson.objective}
            </span>
            <span className="ml-auto flex items-center gap-1.5 rounded-full bg-white px-4 py-1.5 text-xs font-bold text-emerald-800">
              <Play size={13} fill="currentColor" />{' '}
              {hasStartedAny ? 'Resume' : 'Begin'}
            </span>
          </div>
        </Link>
      )}

      {/* Stats — 4 tiles */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
        <Stat
          icon={<CheckCircle2 size={16} />}
          value={String(lessonsDone)}
          label={`of ${totalAuthored} done`}
        />
        <Stat
          icon={<GraduationCap size={16} />}
          value={`${pctOverall}%`}
          label="curriculum"
        />
        <Stat
          icon={<Zap size={16} />}
          value={String(gauntletSolved)}
          label={`of ${GAUNTLET_SNIPPETS.length} solved`}
        />
        <Stat
          icon={<Hammer size={16} />}
          value={String(buildsStarted)}
          label={`of ${BUILD_ALONGS.length} builds`}
        />
      </div>

      {/* Recent activity */}
      {hasRecent && (
        <section>
          <div className="mb-3 flex items-center gap-2">
            <History size={17} className="text-accent-strong" />
            <h2 className="text-base sm:text-lg font-bold text-ink-100">
              Pick up where you left off
            </h2>
          </div>
          <div className="grid gap-2.5 sm:grid-cols-2">
            {recentLessons.map((lesson) =>
              !lesson ? null : (
                <Link
                  key={`l-${lesson.id}`}
                  to={`/lesson/${lesson.id}`}
                  className="flex items-center gap-3 rounded-xl border border-ink-700 bg-ink-800/70 p-3 transition hover:border-accent/40"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/15 text-accent-strong">
                    <BookOpen size={16} />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] font-bold uppercase tracking-wide text-ink-400">
                      Lesson
                    </p>
                    <p className="truncate text-sm font-semibold text-ink-100">
                      {lesson.title}
                    </p>
                  </div>
                  <ArrowRight size={14} className="shrink-0 text-ink-400" />
                </Link>
              ),
            )}
            {recentBuildAlongs.map((ba) => (
              <Link
                key={`b-${ba.id}`}
                to={`/build-along/${ba.id}`}
                className="flex items-center gap-3 rounded-xl border border-ink-700 bg-ink-800/70 p-3 transition hover:border-accent/40"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-warn/15 text-warn">
                  <Hammer size={16} />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] font-bold uppercase tracking-wide text-ink-400">
                    Build-along
                  </p>
                  <p className="truncate text-sm font-semibold text-ink-100">{ba.title}</p>
                </div>
                <ArrowRight size={14} className="shrink-0 text-ink-400" />
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Quick links — Curriculum / Gauntlet */}
      <section>
        <h2 className="mb-3 text-base sm:text-lg font-bold text-ink-100">Jump to</h2>
        <div className="grid grid-cols-2 gap-3">
          <Link
            to="/curriculum"
            className="card p-4 hover:border-accent/40 transition-colors group"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/15 text-accent-strong">
              <GraduationCap size={18} />
            </span>
            <h3 className="mt-2.5 text-sm font-bold text-ink-100">Curriculum</h3>
            <p className="mt-0.5 text-[11px] text-ink-400">All 13 modules</p>
          </Link>
          <Link
            to="/gauntlet"
            className="card p-4 hover:border-accent/40 transition-colors group"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-warn/15 text-warn">
              <Zap size={18} />
            </span>
            <h3 className="mt-2.5 text-sm font-bold text-ink-100">Debug Gauntlet</h3>
            <p className="mt-0.5 text-[11px] text-ink-400">Fix broken code</p>
          </Link>
        </div>
      </section>

      {/* Build-alongs */}
      <section>
        <div className="mb-3 flex items-center justify-between gap-2">
          <h2 className="text-base sm:text-lg font-bold text-ink-100">Build-alongs</h2>
          <span className="text-xs text-ink-400">{BUILD_ALONGS.length} total</span>
        </div>
        <div className="grid gap-2.5 sm:grid-cols-2">
          {BUILD_ALONGS.map((ba) => (
            <Link
              key={ba.id}
              to={`/build-along/${ba.id}`}
              className="card p-3.5 hover:border-accent/40 transition-colors group"
            >
              <p className="text-[10px] font-bold uppercase tracking-wide text-ink-400">
                Build-along · {ba.estimatedHours}h
              </p>
              <p className="mt-1 text-sm font-bold text-ink-100 line-clamp-2">
                {ba.title.replace('Build-Along #', 'BA-').replace(' — ', ': ')}
              </p>
              <p className="mt-1 text-[11px] text-ink-400 line-clamp-2">{ba.summary}</p>
              <div className="mt-2 text-[11px] text-ink-400">
                {progress.buildAlongsStarted[ba.id] ? '🟢 Started' : 'Not started'} ·{' '}
                {ba.milestones.length} milestones
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Engine sandbox — tucked at bottom */}
      <section className="pt-2">
        <Link
          to="/lesson/test-blocks"
          className="text-xs text-ink-400 hover:text-ink-200 inline-flex items-center gap-1"
        >
          Engine sandbox · exercise all 6 block types
          <ArrowRight size={12} />
        </Link>
      </section>
    </div>
  );
}

function Stat({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) {
  return (
    <div className="card p-3 sm:p-4">
      <div className="flex items-center gap-1 text-accent-strong">{icon}</div>
      <p className="mt-1 text-lg sm:text-2xl font-extrabold text-ink-100">{value}</p>
      <p className="text-[10px] sm:text-[11px] text-ink-400">{label}</p>
    </div>
  );
}
