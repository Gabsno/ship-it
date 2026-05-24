import { Link } from 'react-router-dom';
import type { ModuleSummary } from '@/data/curriculum';

interface ModuleCardProps {
  module: ModuleSummary;
  completionPct?: number;
}

export function ModuleCard({ module, completionPct = 0 }: ModuleCardProps) {
  const isCapstone = module.isCapstone === true;
  return (
    <Link
      to={`/module/${module.id}`}
      className={`card p-5 group hover:border-accent/40 transition-colors block ${
        isCapstone ? 'ring-1 ring-accent/30' : ''
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="text-xs text-ink-300 mb-1">Module {module.index}</div>
          <h3 className="text-base font-semibold text-ink-100 group-hover:text-white">
            {module.title}
          </h3>
        </div>
        <span
          className={`chip ${
            isCapstone
              ? 'bg-accent/20 text-accent-strong'
              : 'bg-ink-700 text-ink-200 border border-ink-600'
          }`}
        >
          {module.badge}
        </span>
      </div>
      <p className="text-sm text-ink-300 mt-2 leading-relaxed">{module.blurb}</p>
      {module.unlocksBuildAlong && (
        <div className="mt-3 text-xs text-ink-300">
          🔓 Unlocks <span className="text-ink-100">{module.unlocksBuildAlong}</span>
        </div>
      )}
      <div className="mt-4">
        <div className="progress-track">
          <div className="progress-fill" style={{ width: `${completionPct}%` }} />
        </div>
        <div className="mt-1 flex justify-between text-[11px] text-ink-300">
          <span>{completionPct === 0 ? 'Not started' : `${completionPct}% complete`}</span>
          <span className="text-ink-400 group-hover:text-ink-200">Open →</span>
        </div>
      </div>
    </Link>
  );
}
