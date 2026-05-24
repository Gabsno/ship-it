import { useEffect, useState } from 'react';

const POLL_INTERVAL_MS = 60_000;

export function UpdateBanner() {
  const [updateAvailable, setUpdateAvailable] = useState(false);
  const [initialEtag, setInitialEtag] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    const url = `${import.meta.env.BASE_URL}index.html`;

    const fetchEtag = async (): Promise<string | null> => {
      try {
        const res = await fetch(url, { method: 'HEAD', cache: 'no-store' });
        return res.headers.get('etag') ?? res.headers.get('last-modified');
      } catch {
        return null;
      }
    };

    fetchEtag().then((tag) => {
      if (!cancelled) setInitialEtag(tag);
    });

    const interval = window.setInterval(async () => {
      const next = await fetchEtag();
      if (!cancelled && next && initialEtag && next !== initialEtag) {
        setUpdateAvailable(true);
      }
    }, POLL_INTERVAL_MS);

    return () => {
      cancelled = true;
      window.clearInterval(interval);
    };
  }, [initialEtag]);

  if (!updateAvailable) return null;

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 card px-4 py-3 shadow-xl flex items-center gap-3">
      <span className="text-sm text-ink-200">A new version of Ship It is available.</span>
      <button type="button" className="btn-primary" onClick={() => window.location.reload()}>
        Reload
      </button>
    </div>
  );
}
