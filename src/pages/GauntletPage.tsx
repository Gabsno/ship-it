import { Link } from 'react-router-dom';
import { GAUNTLET_SNIPPETS, type GauntletDifficulty } from '@/data/gauntlet/snippets';
import { useProgress } from '@/hooks/useProgress';

const DIFFICULTY_CHIP: Record<GauntletDifficulty, string> = {
  easy: 'bg-accent/15 text-accent-strong',
  medium: 'bg-warn/15 text-warn',
  hard: 'bg-danger/15 text-danger',
};

export function GauntletPage() {
  const { progress } = useProgress();
  const solvedCount = GAUNTLET_SNIPPETS.filter((s) => progress.gauntletSolved[s.id]).length;

  return (
    <div className="space-y-6">
      <Link to="/" className="text-xs text-ink-300 hover:text-ink-100">← Home</Link>

      <div>
        <h1 className="text-2xl font-semibold text-ink-100">Debug Gauntlet</h1>
        <p className="text-ink-300 mt-2 max-w-2xl">
          Broken code. Real error messages. Fix one snippet at a time. Officially unlocks after
          Module 4, but you can warm up whenever.
        </p>
        <div className="mt-3 text-xs text-ink-400">
          {solvedCount} / {GAUNTLET_SNIPPETS.length} solved
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {GAUNTLET_SNIPPETS.map((s) => {
          const solved = Boolean(progress.gauntletSolved[s.id]);
          const attempts = progress.gauntletSolved[s.id]?.attempts ?? 0;
          return (
            <Link
              to={`/gauntlet/${s.id}`}
              key={s.id}
              className={`card p-4 group transition-colors hover:border-accent/40 block ${
                solved ? 'ring-1 ring-accent/30' : ''
              }`}
            >
              <div className="flex items-center justify-between gap-2">
                <span className={`chip ${DIFFICULTY_CHIP[s.difficulty]}`}>{s.difficulty}</span>
                {solved && (
                  <span className="chip bg-accent/20 text-accent-strong">Solved</span>
                )}
              </div>
              <div className="text-xs text-ink-400 mt-3">{s.topic}</div>
              <div className="text-base font-semibold text-ink-100 group-hover:text-white mt-1">
                {s.title}
              </div>
              <div className="text-xs text-ink-300 mt-2 truncate font-mono">
                {s.errorMessage}
              </div>
              {solved && attempts > 0 && (
                <div className="text-[11px] text-ink-400 mt-2">
                  solved in {attempts} {attempts === 1 ? 'attempt' : 'attempts'}
                </div>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
