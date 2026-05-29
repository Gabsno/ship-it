import { useEffect, useState } from 'react';
import { Download, Share, X, Plus } from 'lucide-react';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

type WinWithPrompt = Window & { deferredInstallPrompt?: BeforeInstallPromptEvent };

const DISMISSED_KEY = 'ship-it:install-dismissed-at';
const DISMISS_FOR_DAYS = 7;

function isStandalone(): boolean {
  if (typeof window === 'undefined') return false;
  return (
    window.matchMedia('(display-mode: standalone)').matches ||
    // iOS Safari standalone flag
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window.navigator as any).standalone === true
  );
}

function isIos(): boolean {
  if (typeof navigator === 'undefined') return false;
  const ua = navigator.userAgent.toLowerCase();
  return /iphone|ipad|ipod/.test(ua) && !/crios|fxios|edgios/.test(ua);
}

function dismissedRecently(): boolean {
  try {
    const ts = window.localStorage.getItem(DISMISSED_KEY);
    if (!ts) return false;
    const when = Number(ts);
    if (Number.isNaN(when)) return false;
    return Date.now() - when < DISMISS_FOR_DAYS * 24 * 60 * 60 * 1000;
  } catch {
    return false;
  }
}

interface InstallPromptProps {
  variant?: 'banner' | 'inline';
}

export function InstallPrompt({ variant = 'banner' }: InstallPromptProps) {
  const [canPrompt, setCanPrompt] = useState(
    () => Boolean((window as WinWithPrompt).deferredInstallPrompt),
  );
  const [installed, setInstalled] = useState<boolean>(false);
  const [dismissed, setDismissed] = useState<boolean>(false);
  const [showIosHelp, setShowIosHelp] = useState<boolean>(false);

  useEffect(() => {
    setInstalled(isStandalone());
    setDismissed(dismissedRecently());

    const onInstallable = () => setCanPrompt(true);
    const onInstalled = () => {
      setInstalled(true);
      setCanPrompt(false);
    };
    window.addEventListener('pwa-installable', onInstallable);
    window.addEventListener('pwa-installed', onInstalled);
    return () => {
      window.removeEventListener('pwa-installable', onInstallable);
      window.removeEventListener('pwa-installed', onInstalled);
    };
  }, []);

  const ios = isIos();
  const canShow = canPrompt || ios;

  const onInstall = async () => {
    if (canPrompt) {
      const evt = (window as WinWithPrompt).deferredInstallPrompt;
      if (!evt) return;
      try {
        await evt.prompt();
        const choice = await evt.userChoice;
        if (choice.outcome === 'accepted') setInstalled(true);
        else dismiss();
      } finally {
        (window as WinWithPrompt).deferredInstallPrompt = undefined;
        setCanPrompt(false);
      }
      return;
    }
    if (ios) setShowIosHelp(true);
  };

  const dismiss = () => {
    try {
      window.localStorage.setItem(DISMISSED_KEY, String(Date.now()));
    } catch {
      // ignore
    }
    setDismissed(true);
  };

  if (installed) return null;

  if (variant === 'inline') {
    if (!canShow) {
      return (
        <div className="card p-4 sm:p-5 space-y-2">
          <div className="text-base font-semibold text-ink-100">Install Ship It</div>
          <div className="text-sm text-ink-300">
            Install isn't available on this browser yet. Try Chrome on Android, Edge on
            desktop, or Safari on iOS.
          </div>
        </div>
      );
    }
    return (
      <div className="card p-4 sm:p-5 space-y-3">
        <div>
          <div className="text-base font-semibold text-ink-100 flex items-center gap-2">
            <Download size={16} className="text-accent-strong" /> Install Ship It as an app
          </div>
          <div className="text-sm text-ink-300 mt-1">
            Add Ship It to your home screen so it opens in its own window — no Chrome
            chrome, no tab.
          </div>
        </div>
        <button type="button" className="btn-primary" onClick={onInstall}>
          {ios && !canPrompt ? 'How to install on iOS' : 'Install Ship It'}
        </button>
        <IosHelp open={showIosHelp && ios} onClose={() => setShowIosHelp(false)} />
      </div>
    );
  }

  // banner variant
  if (dismissed || !canShow) return null;

  return (
    <div className="fixed bottom-[72px] sm:bottom-4 inset-x-3 sm:inset-x-auto sm:right-4 z-40 sm:max-w-sm card border-accent/40 bg-ink-800/95 backdrop-blur p-3 sm:p-4 shadow-2xl animate-slide-up">
      <div className="flex items-start gap-3">
        <div className="shrink-0 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent-strong text-ink-900 text-base font-bold">
          S
        </div>
        <div className="min-w-0 flex-1">
          <div className="text-sm font-semibold text-ink-100">Install Ship It</div>
          <div className="text-xs text-ink-300">
            Add it to your home screen — opens like a real app.
          </div>
        </div>
        <button
          type="button"
          onClick={dismiss}
          className="shrink-0 text-ink-400 hover:text-ink-100 p-1 -m-1"
          aria-label="Dismiss install prompt"
        >
          <X size={16} />
        </button>
      </div>
      <div className="mt-3 flex gap-2">
        <button type="button" className="btn-primary flex-1" onClick={onInstall}>
          <Download size={14} /> {ios && !canPrompt ? 'How to install' : 'Install'}
        </button>
      </div>
      <IosHelp open={showIosHelp && ios} onClose={() => setShowIosHelp(false)} />
    </div>
  );
}

/** Compact install button for the TopBar — shows only when installable. */
export function InstallButton() {
  const [canPrompt, setCanPrompt] = useState(
    () => Boolean((window as WinWithPrompt).deferredInstallPrompt),
  );
  const [installed, setInstalled] = useState<boolean>(false);
  const [showIosHelp, setShowIosHelp] = useState<boolean>(false);

  useEffect(() => {
    setInstalled(isStandalone());
    const onInstallable = () => setCanPrompt(true);
    const onInstalled = () => {
      setInstalled(true);
      setCanPrompt(false);
    };
    window.addEventListener('pwa-installable', onInstallable);
    window.addEventListener('pwa-installed', onInstalled);
    return () => {
      window.removeEventListener('pwa-installable', onInstallable);
      window.removeEventListener('pwa-installed', onInstalled);
    };
  }, []);

  if (installed) return null;
  const ios = isIos();
  if (!canPrompt && !ios) return null;

  const handleClick = async () => {
    if (canPrompt) {
      const evt = (window as WinWithPrompt).deferredInstallPrompt;
      if (!evt) return;
      try {
        await evt.prompt();
        await evt.userChoice;
      } finally {
        (window as WinWithPrompt).deferredInstallPrompt = undefined;
        setCanPrompt(false);
      }
      return;
    }
    if (ios) setShowIosHelp(true);
  };

  return (
    <>
      <button
        onClick={handleClick}
        className="flex items-center gap-1.5 rounded-lg bg-accent-strong px-2.5 py-1.5 text-xs font-bold text-ink-900 hover:bg-accent transition-colors"
        aria-label="Install Ship It"
      >
        <Download size={14} />
        <span className="hidden sm:inline">Install</span>
      </button>
      <IosHelp open={showIosHelp && ios} onClose={() => setShowIosHelp(false)} />
    </>
  );
}

function IosHelp({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[80] flex items-end justify-center bg-ink-900/70 p-4 sm:items-center animate-fade-in">
      <div className="w-full max-w-sm rounded-2xl bg-ink-800 border border-ink-600 p-5 shadow-2xl animate-slide-up">
        <div className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-strong text-ink-900">
            <Download size={18} />
          </span>
          <h2 className="flex-1 text-sm font-bold text-ink-100">Install on iPhone or iPad</h2>
          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-ink-400 hover:bg-ink-700"
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>
        <ol className="mt-3 space-y-2.5 text-sm text-ink-300">
          <li className="flex items-center gap-2">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-ink-700 text-xs font-bold text-ink-200">
              1
            </span>
            Tap <Share size={15} className="inline text-accent-strong" /> <b className="text-ink-100">Share</b> in Safari's toolbar.
          </li>
          <li className="flex items-center gap-2">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-ink-700 text-xs font-bold text-ink-200">
              2
            </span>
            Scroll down → <Plus size={15} className="inline text-accent-strong" />{' '}
            <b className="text-ink-100">Add to Home Screen</b>.
          </li>
          <li className="flex items-center gap-2">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-ink-700 text-xs font-bold text-ink-200">
              3
            </span>
            Tap <b className="text-ink-100">Add</b> — Ship It appears on your home screen.
          </li>
        </ol>
        <div className="text-[11px] text-ink-400 mt-3">
          Doesn't appear? Make sure you're in Safari, not Chrome — Apple restricts install
          on third-party iOS browsers.
        </div>
      </div>
    </div>
  );
}
