import { useListen } from '@/hooks/useListen';
import { useProgress } from '@/hooks/useProgress';

interface ListenPlayerProps {
  text: string;
  compact?: boolean;
}

export function ListenPlayer({ text, compact = false }: ListenPlayerProps) {
  const { progress } = useProgress();
  const { status, play, pause, resume, restart, stop, supported, selectedVoice, preset } = useListen({
    presetId: progress.settings.voicePresetId,
    rate: progress.settings.rate,
    pitch: progress.settings.pitch,
  });

  if (!supported) {
    return (
      <div className="text-xs text-ink-300">
        Speech synthesis unavailable in this browser.
      </div>
    );
  }

  const isPlaying = status === 'playing';
  const isPaused = status === 'paused';

  return (
    <div
      className={`flex items-center gap-2 ${compact ? '' : 'rounded-lg border border-ink-700 bg-ink-800/60 px-3 py-2'}`}
    >
      {!isPlaying && !isPaused && (
        <button type="button" onClick={() => play(text)} className="btn-primary">
          <PlayIcon /> Listen
        </button>
      )}
      {isPlaying && (
        <button type="button" onClick={pause} className="btn-ghost">
          <PauseIcon /> Pause
        </button>
      )}
      {isPaused && (
        <button type="button" onClick={resume} className="btn-primary">
          <PlayIcon /> Resume
        </button>
      )}
      {(isPlaying || isPaused) && (
        <>
          <button type="button" onClick={restart} className="btn-ghost" title="Restart">
            <RestartIcon />
          </button>
          <button type="button" onClick={stop} className="btn-danger" title="Stop">
            <StopIcon />
          </button>
        </>
      )}
      {!compact && (
        <span className="ml-2 text-xs text-ink-300 truncate">
          {selectedVoice ? selectedVoice.name : preset.label}
        </span>
      )}
    </div>
  );
}

function PlayIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

function PauseIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M6 5h4v14H6zM14 5h4v14h-4z" />
    </svg>
  );
}

function StopIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M6 6h12v12H6z" />
    </svg>
  );
}

function RestartIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 5V2L7 6l5 4V7a5 5 0 1 1-5 5H5a7 7 0 1 0 7-7z" />
    </svg>
  );
}
