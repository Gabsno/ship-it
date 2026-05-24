import type { BuildAlong } from '@/types/buildAlong';
import { BA_1_NOTES_APP } from './ba-1-notes-app';

export const BUILD_ALONGS: BuildAlong[] = [BA_1_NOTES_APP];

export function getBuildAlong(id: string): BuildAlong | undefined {
  return BUILD_ALONGS.find((b) => b.id === id);
}

export const MILESTONE_BLOCK_PREFIX = 'ba-milestone';

export function milestoneBlockId(buildAlongId: string, milestoneId: string): string {
  return `${MILESTONE_BLOCK_PREFIX}:${buildAlongId}:${milestoneId}`;
}
