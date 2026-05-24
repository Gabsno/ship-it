import { useCallback, useEffect, useState } from 'react';
import { emptyProgress, PROGRESS_KEY, readProgress, writeProgress, type ProgressShape } from '@/lib/progress';

type Updater = (prev: ProgressShape) => ProgressShape;

export function useProgress() {
  const [progress, setProgress] = useState<ProgressShape>(() => emptyProgress());

  useEffect(() => {
    setProgress(readProgress());
    const onStorage = (e: StorageEvent) => {
      if (e.key === PROGRESS_KEY) setProgress(readProgress());
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);

  const update = useCallback((fn: Updater) => {
    setProgress((prev) => {
      const next = fn(prev);
      writeProgress(next);
      return next;
    });
  }, []);

  const markLessonComplete = useCallback(
    (lessonId: string) => {
      update((prev) => ({
        ...prev,
        lessonsCompleted: {
          ...prev.lessonsCompleted,
          [lessonId]: { completedAt: new Date().toISOString() },
        },
      }));
    },
    [update],
  );

  const markBlockComplete = useCallback(
    (blockId: string, attempts?: number) => {
      update((prev) => ({
        ...prev,
        blocksCompleted: {
          ...prev.blocksCompleted,
          [blockId]: {
            completedAt: new Date().toISOString(),
            attempts: attempts ?? prev.blocksCompleted[blockId]?.attempts,
          },
        },
      }));
    },
    [update],
  );

  const recordQuiz = useCallback(
    (quizId: string, score: number, total: number) => {
      update((prev) => ({
        ...prev,
        quizScores: {
          ...prev.quizScores,
          [quizId]: { score, total, takenAt: new Date().toISOString() },
        },
      }));
    },
    [update],
  );

  const markGauntletSolved = useCallback(
    (snippetId: string, attempts: number) => {
      update((prev) => ({
        ...prev,
        gauntletSolved: {
          ...prev.gauntletSolved,
          [snippetId]: { solvedAt: new Date().toISOString(), attempts },
        },
      }));
    },
    [update],
  );

  const setSettings = useCallback(
    (patch: Partial<ProgressShape['settings']>) => {
      update((prev) => ({ ...prev, settings: { ...prev.settings, ...patch } }));
    },
    [update],
  );

  const startBuildAlong = useCallback(
    (id: string) => {
      update((prev) => {
        if (prev.buildAlongsStarted[id]) return prev;
        return {
          ...prev,
          buildAlongsStarted: {
            ...prev.buildAlongsStarted,
            [id]: { startedAt: new Date().toISOString() },
          },
        };
      });
    },
    [update],
  );

  return {
    progress,
    update,
    markLessonComplete,
    markBlockComplete,
    recordQuiz,
    markGauntletSolved,
    setSettings,
    startBuildAlong,
  };
}
