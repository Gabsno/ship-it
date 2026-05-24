import { NavLink, Outlet } from 'react-router-dom';
import { UpdateBanner } from './UpdateBanner';
import { APP_VERSION } from '@/lib/version';

const NAV_ITEMS: { to: string; label: string }[] = [
  { to: '/', label: 'Home' },
  { to: '/gauntlet', label: 'Gauntlet' },
  { to: '/settings', label: 'Settings' },
];

export function AppShell() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-30 border-b border-ink-700 bg-ink-900/80 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center gap-6">
          <NavLink to="/" className="flex items-center gap-2 font-semibold">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-accent-strong text-ink-900 text-sm">
              S
            </span>
            <span className="text-ink-100">Ship It</span>
            <span className="hidden sm:inline text-xs text-ink-300">— drill, build, ship.</span>
          </NavLink>
          <nav className="ml-auto flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-ink-700 text-ink-100'
                      : 'text-ink-300 hover:text-ink-100 hover:bg-ink-800'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 py-8">
        <Outlet />
      </main>
      <footer className="border-t border-ink-700 py-4 text-center text-xs text-ink-400">
        Ship It v{APP_VERSION} · personal training tool · localStorage only
      </footer>
      <UpdateBanner />
    </div>
  );
}
