import type { LessonBlock } from '@/types/lesson';
import { ExplainBlock } from './ExplainBlock';
import { CommandBlock } from './CommandBlock';
import { TypeAlongBlock } from './TypeAlongBlock';
import { ReadThisBlock } from './ReadThisBlock';
import { CodeChallengeBlock } from './CodeChallengeBlock';
import { DebugThisBlock } from './DebugThisBlock';

export function BlockRenderer({ block }: { block: LessonBlock }) {
  switch (block.type) {
    case 'explain':
      return <ExplainBlock markdown={block.markdown} listen={block.listen ?? true} />;
    case 'command':
      return (
        <CommandBlock
          id={block.id}
          label={block.label}
          command={block.command}
          expectedOutput={block.expectedOutput}
        />
      );
    case 'typealong':
      return (
        <TypeAlongBlock
          id={block.id}
          language={block.language}
          code={block.code}
          instructions={block.instructions}
        />
      );
    case 'readthis':
      return (
        <ReadThisBlock
          id={block.id}
          language={block.language}
          code={block.code}
          question={block.question}
          options={block.options}
          answerIndex={block.answerIndex}
          explanation={block.explanation}
        />
      );
    case 'codechallenge':
      return (
        <CodeChallengeBlock
          id={block.id}
          spec={block.spec}
          starterCode={block.starterCode}
          expectedConsoleOutput={block.expectedConsoleOutput}
          language={block.language ?? 'js'}
        />
      );
    case 'debugthis':
      return (
        <DebugThisBlock
          id={block.id}
          brokenCode={block.brokenCode}
          errorMessage={block.errorMessage}
          expectedConsoleOutput={block.expectedConsoleOutput}
          hint={block.hint}
          language={block.language ?? 'js'}
        />
      );
  }
}
