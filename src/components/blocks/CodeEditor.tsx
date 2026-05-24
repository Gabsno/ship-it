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

export function CodeEditor({
  value,
  language,
  onChange,
  onMount,
  readOnly = false,
  height = 200,
  ariaLabel,
}: CodeEditorProps) {
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
          fontSize: 13,
          lineNumbers: 'on',
          renderLineHighlight: 'gutter',
          automaticLayout: true,
          tabSize: 2,
          padding: { top: 10, bottom: 10 },
          fontFamily: 'JetBrains Mono, Fira Code, Menlo, monospace',
          smoothScrolling: true,
          cursorBlinking: 'smooth',
          wordWrap: 'on',
        }}
      />
    </div>
  );
}
