import ReactMarkdown from 'react-markdown';
import { ListenPlayer } from '@/components/ListenPlayer';

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
            h1: (p) => <h1 className="text-2xl font-semibold text-ink-100 mt-4 mb-2" {...p} />,
            h2: (p) => <h2 className="text-xl font-semibold text-ink-100 mt-4 mb-2" {...p} />,
            h3: (p) => <h3 className="text-lg font-semibold text-ink-100 mt-3 mb-1" {...p} />,
            p: (p) => <p className="text-ink-200 leading-relaxed mb-3" {...p} />,
            a: (p) => <a className="text-accent-strong hover:underline" target="_blank" rel="noreferrer" {...p} />,
            ul: (p) => <ul className="list-disc pl-5 space-y-1 text-ink-200 mb-3" {...p} />,
            ol: (p) => <ol className="list-decimal pl-5 space-y-1 text-ink-200 mb-3" {...p} />,
            li: (p) => <li className="leading-relaxed" {...p} />,
            code: ({ className, children, ...rest }) => {
              const isBlock = (className ?? '').startsWith('language-');
              if (isBlock) {
                return (
                  <pre className="bg-ink-900 border border-ink-700 rounded-lg p-3 overflow-x-auto text-xs font-mono text-ink-100 mb-3">
                    <code className={className} {...rest}>
                      {children}
                    </code>
                  </pre>
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
