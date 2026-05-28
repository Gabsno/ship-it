import { useMemo, useState } from 'react';
import { useListen } from '@/hooks/useListen';
import { useProgress } from '@/hooks/useProgress';
import { DEFAULT_VOICE_PRESET_ID, isOnlineVoice, VOICE_PRESETS } from '@/data/voicePresets';
import { InstallPrompt } from '@/components/InstallPrompt';

const TEST_TEXT =
  'Hello — this is Ship It. Your training rig for building real apps without AI assistance.';

export function SettingsPage() {
  const { progress, setSettings } = useProgress();
  const presetId = progress.settings.voicePresetId ?? DEFAULT_VOICE_PRESET_ID;
  const rate = progress.settings.rate ?? 1.0;
  const pitch = progress.settings.pitch ?? 1.0;

  const { voices, selectedVoice, play, stop, status, supported } = useListen({
    presetId,
    rate,
    pitch,
  });

  const [testText] = useState(TEST_TEXT);

  const presetVoices = useMemo(() => {
    return voices.map((v) => ({ voice: v, online: isOnlineVoice(v) }));
  }, [voices]);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-xl sm:text-2xl font-semibold text-ink-100">Settings</h1>
        <p className="text-sm sm:text-base text-ink-300 mt-1">
          Voice presets, rate, pitch. All stored locally.
        </p>
      </div>

      {/* Install section — always reachable here, even if the floating banner was dismissed */}
      <InstallPrompt variant="inline" />

      <section className="card p-5 space-y-5">
        <div>
          <h2 className="text-base font-semibold text-ink-100">Voice preset</h2>
          <p className="text-xs text-ink-400">Used by every Listen button across the app.</p>
        </div>
        <div className="grid sm:grid-cols-2 gap-3">
          {VOICE_PRESETS.map((p) => {
            const active = p.id === presetId;
            return (
              <button
                key={p.id}
                type="button"
                onClick={() => setSettings({ voicePresetId: p.id })}
                className={`text-left rounded-lg border p-3 transition-colors ${
                  active
                    ? 'border-accent bg-accent/10'
                    : 'border-ink-600 bg-ink-800 hover:bg-ink-700'
                }`}
              >
                <div className="text-sm font-medium text-ink-100">{p.label}</div>
                <div className="text-xs text-ink-300 mt-0.5">{p.description}</div>
                <div className="text-[11px] text-ink-400 mt-1">
                  rate {p.rate} · pitch {p.pitch} · {p.lang}
                </div>
              </button>
            );
          })}
        </div>
      </section>

      <section className="card p-5 space-y-4">
        <h2 className="text-base font-semibold text-ink-100">Fine tune</h2>
        <div>
          <label className="text-xs text-ink-300 flex justify-between">
            <span>Rate</span>
            <span className="text-ink-100">{rate.toFixed(2)}</span>
          </label>
          <input
            type="range"
            min={0.6}
            max={1.4}
            step={0.02}
            value={rate}
            onChange={(e) => setSettings({ rate: Number(e.target.value) })}
            className="w-full accent-accent-strong"
          />
        </div>
        <div>
          <label className="text-xs text-ink-300 flex justify-between">
            <span>Pitch</span>
            <span className="text-ink-100">{pitch.toFixed(2)}</span>
          </label>
          <input
            type="range"
            min={0.6}
            max={1.4}
            step={0.02}
            value={pitch}
            onChange={(e) => setSettings({ pitch: Number(e.target.value) })}
            className="w-full accent-accent-strong"
          />
        </div>
        <div className="flex gap-2 pt-2">
          <button type="button" className="btn-primary" onClick={() => play(testText)}>
            Listen test
          </button>
          {status !== 'idle' && (
            <button type="button" className="btn-ghost" onClick={stop}>
              Stop
            </button>
          )}
          <button
            type="button"
            className="btn-ghost"
            onClick={() => setSettings({ rate: 1, pitch: 1 })}
          >
            Reset
          </button>
        </div>
        {!supported && (
          <p className="text-xs text-danger">
            Web Speech API isn't available in this browser.
          </p>
        )}
        {supported && selectedVoice && (
          <p className="text-xs text-ink-300">
            Active voice: <span className="text-ink-100">{selectedVoice.name}</span> ({selectedVoice.lang})
          </p>
        )}
      </section>

      <section className="card p-5">
        <h2 className="text-base font-semibold text-ink-100 mb-3">Available voices</h2>
        {presetVoices.length === 0 ? (
          <p className="text-sm text-ink-300">
            Voices load asynchronously — give the browser a moment, then reload.
          </p>
        ) : (
          <ul className="text-sm space-y-1 max-h-72 overflow-auto pr-2">
            {presetVoices.map(({ voice, online }) => (
              <li key={`${voice.name}-${voice.lang}`} className="flex items-center gap-2">
                <span
                  className={`chip ${
                    online
                      ? 'bg-accent/15 text-accent-strong'
                      : 'bg-ink-700 text-ink-200 border border-ink-600'
                  }`}
                >
                  {online ? '[online]' : '[local]'}
                </span>
                <span className="text-ink-100">{voice.name}</span>
                <span className="text-ink-400 text-xs ml-auto">{voice.lang}</span>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
