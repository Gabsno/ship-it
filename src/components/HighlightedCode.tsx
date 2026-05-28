import { Highlight, themes, type Language } from 'prism-react-renderer';
import type { CodeLanguage } from '@/types/lesson';

const LANG_MAP: Record<CodeLanguage, Language> = {
  js: 'jsx',
  ts: 'tsx',
  html: 'markup',
  sql: 'sql',
  bash: 'bash',
};

interface HighlightedCodeProps {
  code: string;
  language: CodeLanguage;
  showLineNumbers?: boolean;
  maxHeight?: number;
  ariaLabel?: string;
}

export function HighlightedCode({
  code,
  language,
  showLineNumbers = false,
  maxHeight,
  ariaLabel,
}: HighlightedCodeProps) {
  return (
    <Highlight code={code.replace(/\n$/, '')} language={LANG_MAP[language]} theme={themes.vsDark}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          aria-label={ariaLabel}
          className={`${className} rounded-lg border border-ink-700 px-3 py-3 text-[13px] sm:text-sm font-mono overflow-x-auto leading-relaxed`}
          style={{
            ...style,
            background: '#0f1115',
            maxHeight: maxHeight ? `${maxHeight}px` : undefined,
            overflowY: maxHeight ? 'auto' : undefined,
          }}
        >
          {tokens.map((line, i) => {
            const { key: _lineKey, ...lineProps } = getLineProps({ line });
            return (
              <div key={i} {...lineProps} style={{ ...lineProps.style, display: 'flex' }}>
                {showLineNumbers && (
                  <span
                    className="select-none pr-3 text-ink-500 text-right shrink-0"
                    style={{ minWidth: '2ch' }}
                    aria-hidden
                  >
                    {i + 1}
                  </span>
                )}
                <span className="flex-1 min-w-0">
                  {line.map((token, key) => {
                    const { key: _tokenKey, ...tokenProps } = getTokenProps({ token });
                    return <span key={key} {...tokenProps} />;
                  })}
                </span>
              </div>
            );
          })}
        </pre>
      )}
    </Highlight>
  );
}
