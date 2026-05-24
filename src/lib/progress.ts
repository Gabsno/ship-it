export interface ProgressShape {
  lessonsCompleted: Record<string, { completedAt: string }>;
  blocksCompleted: Record<string, { completedAt: string; attempts?: number }>;
  quizScores: Record<string, { score: number; total: number; takenAt: string }>;
  gauntletSolved: Record<string, { solvedAt: string; attempts: number }>;
  buildAlongsStarted: Record<string, { startedAt: string }>;
  settings: {
    voicePresetId?: string;
    rate?: number;
    pitch?: number;
    lastLessonId?: string;
  };
  schemaVersion: 1;
}

export const PROGRESS_KEY = 'ship-it:progress:v1';

export function emptyProgress(): ProgressShape {
  return {
    lessonsCompleted: {},
    blocksCompleted: {},
    quizScores: {},
    gauntletSolved: {},
    buildAlongsStarted: {},
    settings: {},
    schemaVersion: 1,
  };
}

export function readProgress(): ProgressShape {
  if (typeof window === 'undefined') return emptyProgress();
  try {
    const raw = window.localStorage.getItem(PROGRESS_KEY);
    if (!raw) return emptyProgress();
    const parsed = JSON.parse(raw) as Partial<ProgressShape> & { schemaVersion?: number };
    if (parsed.schemaVersion !== 1) {
      return migrate(parsed);
    }
    return { ...emptyProgress(), ...parsed, schemaVersion: 1 };
  } catch (err) {
    console.warn('[ship-it] progress read failed, resetting', err);
    return emptyProgress();
  }
}

export function writeProgress(next: ProgressShape): void {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(PROGRESS_KEY, JSON.stringify(next));
  } catch (err) {
    console.warn('[ship-it] progress write failed', err);
  }
}

function migrate(input: Partial<ProgressShape> & { schemaVersion?: number }): ProgressShape {
  return { ...emptyProgress(), ...input, schemaVersion: 1 };
}
