import type { Lesson, LessonBlock } from '@/types/lesson';
import { MODULE_1_LESSONS } from './01-runtime';
import { MODULE_2_LESSONS } from './02-javascript';
import { MODULE_3_LESSONS } from './03-terminal';
import { MODULE_4_LESSONS } from './04-git-github';
import { MODULE_5_LESSONS } from './05-html-css-dom';
import { MODULE_6_LESSONS } from './06-async-fetch';
import { MODULE_7_LESSONS } from './07-node-express';
import { MODULE_8_LESSONS } from './08-sql-sqlite';
import { MODULE_9_LESSONS } from './09-react';
import { MODULE_10_LESSONS } from './10-auth-jwt';
import { MODULE_11_LESSONS } from './11-react-native';
import { MODULE_12_LESSONS } from './12-deploy-ship';
import { MODULE_13_LESSONS } from './13-capstone';
import { TEST_BLOCKS_LESSON } from './test-blocks';

export const LESSONS: Lesson[] = [
  ...MODULE_1_LESSONS,
  ...MODULE_2_LESSONS,
  ...MODULE_3_LESSONS,
  ...MODULE_4_LESSONS,
  ...MODULE_5_LESSONS,
  ...MODULE_6_LESSONS,
  ...MODULE_7_LESSONS,
  ...MODULE_8_LESSONS,
  ...MODULE_9_LESSONS,
  ...MODULE_10_LESSONS,
  ...MODULE_11_LESSONS,
  ...MODULE_12_LESSONS,
  ...MODULE_13_LESSONS,
  TEST_BLOCKS_LESSON,
];

export function getLesson(id: string): Lesson | undefined {
  return LESSONS.find((l) => l.id === id);
}

export function getLessonsForModule(moduleId: string): Lesson[] {
  return LESSONS.filter((l) => l.moduleId === moduleId);
}

export function isTrackableBlock(block: LessonBlock): boolean {
  return block.type !== 'explain';
}

export interface LessonProgress {
  done: boolean;
  blocksDone: number;
  blocksTotal: number;
  pct: number;
}

export function computeLessonProgress(
  lesson: Lesson,
  blocksCompleted: Record<string, unknown>,
  lessonsCompleted: Record<string, unknown>,
): LessonProgress {
  const trackable = lesson.blocks.filter(isTrackableBlock);
  const blocksTotal = trackable.length;
  const blocksDone = trackable.filter((b) => blocksCompleted[b.id]).length;
  const done = Boolean(lessonsCompleted[lesson.id]);
  if (blocksTotal === 0) {
    return { done, blocksDone: 0, blocksTotal: 0, pct: done ? 100 : 0 };
  }
  return {
    done,
    blocksDone,
    blocksTotal,
    pct: done ? 100 : Math.round((blocksDone / blocksTotal) * 100),
  };
}

export interface ModuleProgress {
  total: number;
  completed: number;
  pct: number;
}

export function computeModuleProgress(
  moduleId: string,
  lessonsCompleted: Record<string, unknown>,
): ModuleProgress {
  const lessons = getLessonsForModule(moduleId);
  const total = lessons.length;
  if (total === 0) return { total: 0, completed: 0, pct: 0 };
  const completed = lessons.filter((l) => lessonsCompleted[l.id]).length;
  return { total, completed, pct: Math.round((completed / total) * 100) };
}

export function getFirstIncompleteLesson(
  moduleId: string,
  lessonsCompleted: Record<string, unknown>,
): Lesson | undefined {
  return getLessonsForModule(moduleId).find((l) => !lessonsCompleted[l.id]);
}
