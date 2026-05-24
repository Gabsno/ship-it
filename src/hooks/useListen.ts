import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { DEFAULT_VOICE_PRESET_ID, pickVoiceForPreset, VOICE_PRESETS, type VoicePreset } from '@/data/voicePresets';

type Status = 'idle' | 'playing' | 'paused';

interface UseListenOptions {
  presetId?: string;
  rate?: number;
  pitch?: number;
}

interface UseListenReturn {
  status: Status;
  voices: SpeechSynthesisVoice[];
  preset: VoicePreset;
  selectedVoice: SpeechSynthesisVoice | undefined;
  play: (text: string) => void;
  pause: () => void;
  resume: () => void;
  restart: () => void;
  stop: () => void;
  supported: boolean;
}

export function useListen(opts: UseListenOptions = {}): UseListenReturn {
  const supported = typeof window !== 'undefined' && 'speechSynthesis' in window;
  const [status, setStatus] = useState<Status>('idle');
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const lastTextRef = useRef<string>('');
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  const preset = useMemo<VoicePreset>(() => {
    const id = opts.presetId ?? DEFAULT_VOICE_PRESET_ID;
    return VOICE_PRESETS.find((p) => p.id === id) ?? VOICE_PRESETS[0]!;
  }, [opts.presetId]);

  useEffect(() => {
    if (!supported) return;
    const synth = window.speechSynthesis;
    const load = () => setVoices(synth.getVoices());
    load();
    synth.addEventListener('voiceschanged', load);
    return () => synth.removeEventListener('voiceschanged', load);
  }, [supported]);

  const selectedVoice = useMemo(
    () => (voices.length ? pickVoiceForPreset(preset, voices) : undefined),
    [preset, voices],
  );

  const buildUtterance = useCallback(
    (text: string) => {
      const u = new SpeechSynthesisUtterance(text);
      u.rate = opts.rate ?? preset.rate;
      u.pitch = opts.pitch ?? preset.pitch;
      u.lang = preset.lang;
      if (selectedVoice) u.voice = selectedVoice;
      u.onend = () => setStatus('idle');
      u.onerror = () => setStatus('idle');
      return u;
    },
    [opts.pitch, opts.rate, preset.lang, preset.pitch, preset.rate, selectedVoice],
  );

  const play = useCallback(
    (text: string) => {
      if (!supported) return;
      const synth = window.speechSynthesis;
      synth.cancel();
      lastTextRef.current = text;
      const u = buildUtterance(text);
      utteranceRef.current = u;
      synth.speak(u);
      setStatus('playing');
    },
    [buildUtterance, supported],
  );

  const pause = useCallback(() => {
    if (!supported) return;
    if (window.speechSynthesis.speaking && !window.speechSynthesis.paused) {
      window.speechSynthesis.pause();
      setStatus('paused');
    }
  }, [supported]);

  const resume = useCallback(() => {
    if (!supported) return;
    const synth = window.speechSynthesis;
    if (synth.paused) {
      synth.resume();
      setStatus('playing');
      return;
    }
    // resume-from-stop fix: if we previously stopped (cancelled), `paused` is false
    // but we still have the last text. Re-speak it from the top so the user gets sound.
    if (!synth.speaking && lastTextRef.current) {
      const u = buildUtterance(lastTextRef.current);
      utteranceRef.current = u;
      synth.speak(u);
      setStatus('playing');
    }
  }, [buildUtterance, supported]);

  const restart = useCallback(() => {
    if (!supported || !lastTextRef.current) return;
    play(lastTextRef.current);
  }, [play, supported]);

  const stop = useCallback(() => {
    if (!supported) return;
    window.speechSynthesis.cancel();
    setStatus('idle');
  }, [supported]);

  useEffect(() => () => {
    if (supported) window.speechSynthesis.cancel();
  }, [supported]);

  return { status, voices, preset, selectedVoice, play, pause, resume, restart, stop, supported };
}
