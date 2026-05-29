import { NavLink } from 'react-router-dom';
import { Home, GraduationCap, Zap, Settings } from 'lucide-react';

interface Item {
  to: string;
  label: string;
  icon: React.ReactNode;
  end?: boolean;
  match?: (pathname: string) => boolean;
}

const ITEMS: Item[] = [
  { to: '/', label: 'Home', icon: <Home size={20} />, end: true },
  {
    to: '/curriculum',
    label: 'Learn',
    icon: <GraduationCap size={20} />,
    match: (p) => p.startsWith('/curriculum') || p.startsWith('/module') || p.startsWith('/lesson'),
  },
  { to: '/gauntlet', label: 'Gauntlet', icon: <Zap size={20} /> },
  { to: '/settings', label: 'Settings', icon: <Settings size={20} /> },
];

/**
 * Persistent bottom tab bar — mobile only. Sub-routes still highlight their
 * parent tab via the `match` predicate (e.g. /lesson/* highlights "Learn").
 */
export function MobileTabBar() {
  return (
    <nav
      aria-label="Primary navigation"
      className="sm:hidden fixed inset-x-0 bottom-0 z-40 flex border-t border-ink-700 bg-ink-900/95 backdrop-blur supports-[backdrop-filter]:bg-ink-900/80 pb-[env(safe-area-inset-bottom,0px)] shadow-[0_-4px_12px_rgba(0,0,0,0.3)]"
    >
      {ITEMS.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          end={item.end}
          className={({ isActive }) => {
            const path = window.location.hash.replace(/^#/, '') || window.location.pathname;
            const matchedSub = item.match ? item.match(path) : false;
            const active = isActive || matchedSub;
            return `flex flex-1 flex-col items-center gap-0.5 py-2 text-[10px] font-semibold transition-colors ${
              active ? 'text-accent-strong' : 'text-ink-400 hover:text-ink-200'
            }`;
          }}
        >
          {item.icon}
          <span>{item.label}</span>
        </NavLink>
      ))}
    </nav>
  );
}
