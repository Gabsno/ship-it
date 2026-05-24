export interface BuildAlongMilestone {
  id: string;
  title: string;
  description?: string;
}

export interface BuildAlongStarterFile {
  path: string;
  language: 'html' | 'css' | 'js' | 'ts' | 'json' | 'md' | 'sql' | 'bash';
  content: string;
}

export interface BuildAlong {
  id: string;
  title: string;
  summary: string;
  unlockedByModule: string;
  estimatedHours: number;
  rules: string[];
  spec: string;
  milestones: BuildAlongMilestone[];
  starterFiles: BuildAlongStarterFile[];
}
