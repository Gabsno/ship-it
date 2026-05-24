export type GauntletDifficulty = 'easy' | 'medium' | 'hard';

export interface GauntletSnippet {
  id: string;
  title: string;
  topic: string;
  difficulty: GauntletDifficulty;
  brokenCode: string;
  errorMessage: string;
  expectedConsoleOutput: string;
  hint?: string;
}

// TODO(gabs): Phase 5 — expand to 30+ snippets across topics.
// These 3 are a working sample so the gauntlet page isn't empty.

export const GAUNTLET_SNIPPETS: GauntletSnippet[] = [
  {
    id: 'g-1',
    title: 'Off-by-one in a for loop',
    topic: 'Loops',
    difficulty: 'easy',
    brokenCode: `const fruits = ['apple', 'banana', 'cherry'];
for (let i = 0; i <= fruits.length; i++) {
  console.log(fruits[i].toUpperCase());
}`,
    errorMessage: "TypeError: Cannot read properties of undefined (reading 'toUpperCase')",
    expectedConsoleOutput: `APPLE
BANANA
CHERRY`,
    hint: 'Check the comparison in the for-loop condition. Array indexes go up to length minus one.',
  },
  {
    id: 'g-2',
    title: 'Forgot to return',
    topic: 'Functions',
    difficulty: 'easy',
    brokenCode: `function double(n) {
  n * 2;
}

console.log(double(3));
console.log(double(7));`,
    errorMessage: '(no error thrown — the output is wrong)',
    expectedConsoleOutput: `6
14`,
    hint: 'A function without an explicit return statement gives back undefined.',
  },
  {
    id: 'g-3',
    title: 'Async without await',
    topic: 'Async',
    difficulty: 'medium',
    brokenCode: `function delay(ms, value) {
  return new Promise((resolve) => setTimeout(() => resolve(value), ms));
}

async function main() {
  const a = delay(10, 'one');
  const b = delay(10, 'two');
  console.log(a, b);
}

main();`,
    errorMessage: '(no error thrown — but the logs are Promises, not values)',
    expectedConsoleOutput: `one two`,
    hint: 'You declared the function async, but the call sites are missing the keyword that unwraps the promise.',
  },
];

export function getGauntletSnippet(id: string): GauntletSnippet | undefined {
  return GAUNTLET_SNIPPETS.find((s) => s.id === id);
}
