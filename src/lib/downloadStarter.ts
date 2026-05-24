import type { BuildAlongStarterFile } from '@/types/buildAlong';

export function downloadStarterAsText(
  buildAlongId: string,
  files: BuildAlongStarterFile[],
): void {
  const banner = `# Ship It — starter bundle for ${buildAlongId}
#
# Split this file back into separate files by copying each section
# (between the === markers) into its own file at the given path.
#
`;
  const body = files
    .map(
      (f) =>
        `# === FILE: ${f.path} ===\n\n${f.content}${f.content.endsWith('\n') ? '' : '\n'}\n`,
    )
    .join('\n');
  const blob = new Blob([banner + body], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${buildAlongId}-starter.txt`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

export async function copyStarterFileToClipboard(content: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(content);
    return true;
  } catch {
    return false;
  }
}
