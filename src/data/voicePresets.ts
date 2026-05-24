export interface VoicePreset {
  id: string;
  label: string;
  description: string;
  preferredVoiceNames: string[];
  rate: number;
  pitch: number;
  lang: string;
}

export const VOICE_PRESETS: VoicePreset[] = [
  {
    id: 'natural-en-uk',
    label: 'Natural — UK',
    description: 'Calm British narrator, default for lessons.',
    preferredVoiceNames: [
      'Microsoft Libby Online (Natural) - English (United Kingdom)',
      'Microsoft Sonia Online (Natural) - English (United Kingdom)',
      'Microsoft Ryan Online (Natural) - English (United Kingdom)',
      'Google UK English Female',
      'Google UK English Male',
      'Daniel',
      'Kate',
    ],
    rate: 1.0,
    pitch: 1.0,
    lang: 'en-GB',
  },
  {
    id: 'natural-en-us',
    label: 'Natural — US',
    description: 'Clear American narrator, good for code-heavy explainers.',
    preferredVoiceNames: [
      'Microsoft Ava Online (Natural) - English (United States)',
      'Microsoft Andrew Online (Natural) - English (United States)',
      'Microsoft Jenny Online (Natural) - English (United States)',
      'Microsoft Aria Online (Natural) - English (United States)',
      'Google US English',
      'Samantha',
      'Alex',
    ],
    rate: 1.0,
    pitch: 1.0,
    lang: 'en-US',
  },
  {
    id: 'crisp-en-us',
    label: 'Crisp — US',
    description: 'Slightly faster cadence for review sessions.',
    preferredVoiceNames: [
      'Microsoft Aria Online (Natural) - English (United States)',
      'Microsoft Jenny Online (Natural) - English (United States)',
      'Google US English',
      'Samantha',
    ],
    rate: 1.12,
    pitch: 1.0,
    lang: 'en-US',
  },
  {
    id: 'warm-en-uk',
    label: 'Warm — UK',
    description: 'Lower pitch, slower — good for dense theory blocks.',
    preferredVoiceNames: [
      'Microsoft Ryan Online (Natural) - English (United Kingdom)',
      'Microsoft Sonia Online (Natural) - English (United Kingdom)',
      'Daniel',
      'Google UK English Male',
    ],
    rate: 0.92,
    pitch: 0.95,
    lang: 'en-GB',
  },
  {
    id: 'system-default',
    label: 'System default',
    description: 'Whatever your browser/OS picks first.',
    preferredVoiceNames: [],
    rate: 1.0,
    pitch: 1.0,
    lang: 'en-US',
  },
];

export const DEFAULT_VOICE_PRESET_ID = 'natural-en-uk';

export function isOnlineVoice(voice: SpeechSynthesisVoice): boolean {
  const name = voice.name.toLowerCase();
  return name.includes('online') || name.includes('natural') || name.includes('google');
}

export function pickVoiceForPreset(
  preset: VoicePreset,
  voices: SpeechSynthesisVoice[],
): SpeechSynthesisVoice | undefined {
  if (voices.length === 0) return undefined;
  for (const wanted of preset.preferredVoiceNames) {
    const match = voices.find((v) => v.name === wanted);
    if (match) return match;
  }
  const langMatch = voices.find((v) => v.lang === preset.lang);
  if (langMatch) return langMatch;
  const broadMatch = voices.find((v) => v.lang.startsWith(preset.lang.split('-')[0] ?? 'en'));
  if (broadMatch) return broadMatch;
  return voices[0];
}
