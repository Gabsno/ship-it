import { useEffect, useState } from 'react';
import Editor, { type OnChange, type OnMount } from '@monaco-editor/react';
import type { CodeLanguage } from '@/types/lesson';

const LANG_MAP: Record<CodeLanguage, string> = {
  js: 'javascript',
  ts: 'typescript',
  html: 'html',
  sql: 'sql',
  bash: 'shell',
};

interface CodeEditorProps {
  value: string;
  language: CodeLanguage;
  onChange?: OnChange;
  onMount?: OnMount;
  readOnly?: boolean;
  height?: number | string;
  ariaLabel?: string;
}

function useIsNarrowViewport(breakpoint = 640): boolean {
  const [narrow, setNarrow] = useState(() =>
    typeof window === 'undefined' ? false : window.innerWidth < breakpoint,
  );
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mql = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
    const onChange = (e: MediaQueryListEvent) => setNarrow(e.matches);
    setNarrow(mql.matches);
    mql.addEventListener('change', onChange);
    return () => mql.removeEventListener('change', onChange);
  }, [breakpoint]);
  return narrow;
}

export function CodeEditor({
  value,
  language,
  onChange,
  onMount,
  readOnly = false,
  height = 200,
  ariaLabel,
}: CodeEditorProps) {
  const isNarrow = useIsNarrowViewport();
  const fontSize = isNarrow ? 14 : 13;

  return (
    <div
      className="rounded-lg overflow-hidden border border-ink-700 bg-[#1e1e1e]"
      aria-label={ariaLabel}
    >
      <Editor
        height={typeof height === 'number' ? `${height}px` : height}
        language={LANG_MAP[language]}
        value={value}
        theme="vs-dark"
        onChange={onChange}
        onMount={onMount}
        loading={<div className="text-xs text-ink-400 p-4">Loading editor…</div>}
        options={{
          readOnly,
          minimap: { enabled: false },
          scrollBeyondLastLine: false,
          fontSize,
          lineNumbers: isNarrow ? 'off' : 'on',
          renderLineHighlight: 'gutter',
          automaticLayout: true,
          tabSize: 2,
          padding: { top: 10, bottom: 10 },
          fontFamily: 'JetBrains Mono, Fira Code, Menlo, monospace',
          smoothScrolling: true,
          cursorBlinking: 'smooth',
          wordWrap: 'on',
          // mobile: hide the overview ruler (the right-edge scroll preview)
          // and make scrollbar thinner
          overviewRulerLanes: isNarrow ? 0 : 3,
          scrollbar: isNarrow
            ? { vertical: 'auto', horizontal: 'hidden', verticalScrollbarSize: 6 }
            : undefined,
          folding: !isNarrow,
          glyphMargin: false,
        }}
      />
    </div>
  );
}
