import type { BuildAlong } from '@/types/buildAlong';
import { BA_1_NOTES_APP } from './ba-1-notes-app';
import { BA_2_TODO_API } from './ba-2-todo-api';
import { BA_3_EXPENSE_TRACKER } from './ba-3-expense-tracker';
import { BA_4_MINI_VISZIO } from './ba-4-mini-viszio';

export const BUILD_ALONGS: BuildAlong[] = [
  BA_1_NOTES_APP,
  BA_2_TODO_API,
  BA_3_EXPENSE_TRACKER,
  BA_4_MINI_VISZIO,
];

export function getBuildAlong(id: string): BuildAlong | undefined {
  return BUILD_ALONGS.find((b) => b.id === id);
}

export const MILESTONE_BLOCK_PREFIX = 'ba-milestone';

export function milestoneBlockId(buildAlongId: string, milestoneId: string): string {
  return `${MILESTONE_BLOCK_PREFIX}:${buildAlongId}:${milestoneId}`;
}
