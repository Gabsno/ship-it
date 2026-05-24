export type CodeLanguage = 'js' | 'ts' | 'html' | 'sql' | 'bash';

export interface QuizQuestionData {
  id: string;
  prompt: string;
  options: string[];
  answerIndex: number;
  explanation?: string;
}

export type LessonBlock =
  | { type: 'explain'; id: string; markdown: string; listen?: boolean }
  | { type: 'command'; id: string; label: string; command: string; expectedOutput?: string }
  | { type: 'typealong'; id: string; language: CodeLanguage; code: string; instructions?: string }
  | {
      type: 'readthis';
      id: string;
      language: CodeLanguage;
      code: string;
      question: string;
      options: string[];
      answerIndex: number;
      explanation?: string;
    }
  | {
      type: 'codechallenge';
      id: string;
      spec: string;
      starterCode: string;
      expectedConsoleOutput: string;
      language?: 'js' | 'ts';
    }
  | {
      type: 'debugthis';
      id: string;
      brokenCode: string;
      errorMessage: string;
      expectedConsoleOutput: string;
      hint?: string;
      language?: 'js' | 'ts';
    };

export interface Lesson {
  id: string;
  moduleId: string;
  title: string;
  objective: string;
  blocks: LessonBlock[];
  quiz?: QuizQuestionData[];
  estimatedMinutes: number;
}
