import ReactMarkdown from 'react-markdown';
import { ListenPlayer } from '@/components/ListenPlayer';
import { HighlightedCode } from '@/components/HighlightedCode';
import type { CodeLanguage } from '@/types/lesson';

const KNOWN_LANGS: Record<string, CodeLanguage> = {
  js: 'js',
  javascript: 'js',
  jsx: 'js',
  ts: 'ts',
  typescript: 'ts',
  tsx: 'ts',
  html: 'html',
  markup: 'html',
  sql: 'sql',
  bash: 'bash',
  shell: 'bash',
  sh: 'bash',
};

interface ExplainBlockProps {
  markdown: string;
  listen?: boolean;
}

export function ExplainBlock({ markdown, listen = true }: ExplainBlockProps) {
  return (
    <section className="space-y-3">
      {listen && (
        <div className="flex justify-end">
          <ListenPlayer text={stripMarkdown(markdown)} compact />
        </div>
      )}
      <div className="prose-block">
        <ReactMarkdown
          components={{
            h1: (p) => <h1 className="text-2xl sm:text-3xl font-semibold text-ink-100 mt-5 mb-3" {...p} />,
            h2: (p) => <h2 className="text-xl sm:text-2xl font-semibold text-ink-100 mt-5 mb-3" {...p} />,
            h3: (p) => <h3 className="text-lg sm:text-xl font-semibold text-ink-100 mt-4 mb-2" {...p} />,
            p: (p) => <p className="text-[15px] sm:text-base text-ink-200 leading-[1.65] mb-4" {...p} />,
            a: (p) => <a className="text-accent-strong hover:underline" target="_blank" rel="noreferrer" {...p} />,
            ul: (p) => <ul className="list-disc pl-5 space-y-1.5 text-[15px] sm:text-base text-ink-200 mb-4 leading-[1.6]" {...p} />,
            ol: (p) => <ol className="list-decimal pl-5 space-y-1.5 text-[15px] sm:text-base text-ink-200 mb-4 leading-[1.6]" {...p} />,
            li: (p) => <li {...p} />,
            code: ({ className, children, ...rest }) => {
              const langKey = (className ?? '').replace(/^language-/, '').toLowerCase();
              const isBlock = (className ?? '').startsWith('language-');
              if (isBlock) {
                const lang = KNOWN_LANGS[langKey] ?? 'js';
                const codeText = String(children).replace(/\n$/, '');
                return (
                  <div className="mb-3">
                    <HighlightedCode code={codeText} language={lang} />
                  </div>
                );
              }
              return (
                <code
                  className="bg-ink-900 border border-ink-700 rounded px-1 py-0.5 text-[0.85em] font-mono text-accent-soft"
                  {...rest}
                >
                  {children}
                </code>
              );
            },
            blockquote: (p) => (
              <blockquote className="border-l-2 border-accent-strong pl-3 text-ink-300 italic mb-3" {...p} />
            ),
            strong: (p) => <strong className="text-ink-100 font-semibold" {...p} />,
          }}
        >
          {markdown}
        </ReactMarkdown>
      </div>
    </section>
  );
}

function stripMarkdown(md: string): string {
  return md
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/`[^`]*`/g, ' ')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/[#>*_~\-]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}
