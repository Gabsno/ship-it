import { Link } from 'react-router-dom';
import { CURRICULUM } from '@/data/curriculum';
import { useProgress } from '@/hooks/useProgress';
import { computeModuleProgress } from '@/data/lessons';

interface Track {
  name: string;
  blurb: string;
  moduleIds: string[];
}

const TRACKS: Track[] = [
  {
    name: 'Foundations',
    blurb: 'How code runs, the language, the terminal, Git.',
    moduleIds: ['runtime', 'javascript', 'terminal', 'git-github'],
  },
  {
    name: 'Frontend',
    blurb: 'HTML/CSS/DOM and React.',
    moduleIds: ['html-css-dom', 'react'],
  },
  {
    name: 'Backend',
    blurb: 'Async, Node + Express, SQL, Auth.',
    moduleIds: ['async-fetch', 'node-express', 'sql-sqlite', 'auth-jwt'],
  },
  {
    name: 'Mobile + Ship',
    blurb: 'React Native + Expo and shipping to production.',
    moduleIds: ['react-native', 'deploy-ship'],
  },
  {
    name: 'Capstone',
    blurb: 'The exit exam — Mini-Viszio.',
    moduleIds: ['capstone'],
  },
];

export function CurriculumPage() {
  const { progress } = useProgress();
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl sm:text-3xl font-semibold text-ink-100">Curriculum</h1>
        <p className="text-sm sm:text-base text-ink-300 mt-1">
          13 modules grouped into tracks. Walk them top-to-bottom or jump.
        </p>
      </div>

      {TRACKS.map((track) => (
        <section key={track.name} className="space-y-3">
          <div>
            <h2 className="text-lg sm:text-xl font-semibold text-ink-100">{track.name}</h2>
            <p className="text-xs sm:text-sm text-ink-400">{track.blurb}</p>
          </div>
          <ul className="space-y-2">
            {track.moduleIds.map((id) => {
              const mod = CURRICULUM.find((m) => m.id === id);
              if (!mod) return null;
              const mp = computeModuleProgress(mod.id, progress.lessonsCompleted);
              return (
                <li key={mod.id}>
                  <Link
                    to={`/module/${mod.id}`}
                    className="card px-4 py-3.5 flex items-center gap-3 hover:border-accent/40 transition-colors group"
                  >
                    <span
                      className={`shrink-0 h-9 w-9 rounded-full grid place-items-center text-sm font-semibold ${
                        mp.pct === 100
                          ? 'bg-accent-strong text-ink-900'
                          : mp.pct > 0
                            ? 'bg-accent/15 text-accent-strong border border-accent/30'
                            : 'bg-ink-700 text-ink-200 border border-ink-600'
                      }`}
                    >
                      {mp.pct === 100 ? '✓' : mod.index}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm sm:text-base font-medium text-ink-100 group-hover:text-white truncate">
                        {mod.title}
                      </div>
                      <div className="text-xs text-ink-300 truncate">
                        {mp.total > 0 ? `${mp.completed}/${mp.total} lessons` : 'Coming soon'}
                        {mp.pct > 0 && ` · ${mp.pct}%`}
                      </div>
                    </div>
                    <span className="text-ink-400 group-hover:text-ink-200 text-lg shrink-0">›</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
      ))}
    </div>
  );
}
