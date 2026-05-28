import { useEffect, useState } from 'react';

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: ReadonlyArray<string>;
  readonly userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
  prompt(): Promise<void>;
}

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
  const [deferred, setDeferred] = useState<BeforeInstallPromptEvent | null>(null);
  const [installed, setInstalled] = useState<boolean>(false);
  const [dismissed, setDismissed] = useState<boolean>(false);
  const [showIosHelp, setShowIosHelp] = useState<boolean>(false);

  useEffect(() => {
    setInstalled(isStandalone());
    setDismissed(dismissedRecently());

    const onBefore = (e: Event) => {
      e.preventDefault();
      setDeferred(e as BeforeInstallPromptEvent);
    };
    const onInstalled = () => setInstalled(true);

    window.addEventListener('beforeinstallprompt', onBefore);
    window.addEventListener('appinstalled', onInstalled);
    return () => {
      window.removeEventListener('beforeinstallprompt', onBefore);
      window.removeEventListener('appinstalled', onInstalled);
    };
  }, []);

  const onInstall = async () => {
    if (deferred) {
      try {
        await deferred.prompt();
        const choice = await deferred.userChoice;
        if (choice.outcome === 'accepted') {
          setInstalled(true);
        } else {
          dismiss();
        }
      } finally {
        setDeferred(null);
      }
      return;
    }
    if (isIos()) setShowIosHelp(true);
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

  // Banner = the floating bottom-right card. Inline = a Settings-style row.
  const ios = isIos();
  const canPrompt = Boolean(deferred);
  const canShow = canPrompt || ios;

  if (variant === 'inline') {
    if (!canShow) {
      return (
        <div className="card p-4 sm:p-5 space-y-2">
          <div className="text-base font-semibold text-ink-100">Install Ship It</div>
          <div className="text-sm text-ink-300">
            The install option isn't available on this device or browser yet — try Chrome on
            Android or Safari on iOS.
          </div>
        </div>
      );
    }
    return (
      <div className="card p-4 sm:p-5 space-y-3">
        <div>
          <div className="text-base font-semibold text-ink-100">Install Ship It as an app</div>
          <div className="text-sm text-ink-300 mt-1">
            Adds Ship It to your home screen so it opens in its own window — no Chrome chrome,
            no tab.
          </div>
        </div>
        <button type="button" className="btn-primary" onClick={onInstall}>
          {ios && !canPrompt ? 'How to install on iOS' : 'Install Ship It'}
        </button>
        {showIosHelp && ios && (
          <div className="rounded-lg border border-ink-600 bg-ink-900 p-3 text-sm text-ink-200 space-y-1">
            <div className="font-medium text-ink-100">On iOS Safari:</div>
            <ol className="list-decimal pl-5 space-y-0.5">
              <li>Tap the Share icon in the toolbar.</li>
              <li>Scroll to "Add to Home Screen" and tap it.</li>
              <li>Tap "Add" in the top-right corner.</li>
            </ol>
            <div className="text-xs text-ink-400">
              Doesn't appear? Make sure you're in Safari (not Chrome for iOS — Apple restricts
              install on third-party browsers).
            </div>
          </div>
        )}
      </div>
    );
  }

  // banner variant — floating bottom-right card, dismissible
  if (dismissed || !canShow) return null;

  return (
    <div className="fixed bottom-[72px] sm:bottom-4 inset-x-3 sm:inset-x-auto sm:right-4 z-40 sm:max-w-sm card border-accent/30 bg-ink-800/95 backdrop-blur p-3 sm:p-4 shadow-xl">
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
          ✕
        </button>
      </div>
      <div className="mt-3 flex gap-2">
        <button type="button" className="btn-primary flex-1" onClick={onInstall}>
          {ios && !canPrompt ? 'How to install' : 'Install'}
        </button>
      </div>
      {showIosHelp && ios && (
        <div className="mt-3 rounded-lg border border-ink-600 bg-ink-900 p-3 text-xs text-ink-200 space-y-1">
          <div className="font-medium text-ink-100">On iOS Safari:</div>
          <ol className="list-decimal pl-5 space-y-0.5">
            <li>Tap the Share icon at the bottom.</li>
            <li>Scroll to "Add to Home Screen".</li>
            <li>Tap "Add" in the top-right.</li>
          </ol>
        </div>
      )}
    </div>
  );
}
