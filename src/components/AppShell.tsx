import { NavLink, Outlet } from 'react-router-dom';
import { UpdateBanner } from './UpdateBanner';
import { MobileTabBar } from './MobileTabBar';
import { InstallPrompt } from './InstallPrompt';
import { APP_VERSION } from '@/lib/version';

const NAV_ITEMS: { to: string; label: string }[] = [
  { to: '/', label: 'Home' },
  { to: '/curriculum', label: 'Learn' },
  { to: '/gauntlet', label: 'Gauntlet' },
  { to: '/settings', label: 'Settings' },
];

export function AppShell() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-30 border-b border-ink-700 bg-ink-900/80 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-2.5 sm:py-3 flex items-center gap-3 sm:gap-6">
          <NavLink to="/" className="flex items-center gap-2 font-semibold">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-accent-strong text-ink-900 text-sm">
              S
            </span>
            <span className="text-ink-100">Ship It</span>
            <span className="hidden md:inline text-xs text-ink-300">— drill, build, ship.</span>
          </NavLink>
          {/* Desktop nav — hidden on mobile (replaced by bottom tab bar) */}
          <nav className="ml-auto hidden sm:flex items-center gap-1">
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
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 py-5 sm:py-8 pb-24 sm:pb-8">
        <Outlet />
      </main>
      <footer className="hidden sm:block border-t border-ink-700 py-4 text-center text-xs text-ink-400 px-3">
        Ship It v{APP_VERSION} · personal training tool · localStorage only
      </footer>
      <MobileTabBar />
      <UpdateBanner />
      <InstallPrompt variant="banner" />
    </div>
  );
}
