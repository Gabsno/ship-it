import type { Lesson } from '@/types/lesson';

export const M2_L7_COMMON_BUGS: Lesson = {
  id: 'm2-l7-common-bugs',
  moduleId: 'javascript',
  title: 'Common bugs',
  objective: 'See the five mistakes you\'ll make a thousand times — and fix them.',
  estimatedMinutes: 12,
  blocks: [
    {
      type: 'explain',
      id: 'm2-l7-e1',
      listen: true,
      markdown: `## Pattern recognition is the whole game

Every working programmer recognises the same handful of bugs by sight.
You're about to fix five of them. The next time you see them in your
own code (and you will), you should think "oh, that one" before you
finish reading the error.

Each one is in the Debug This format: broken code on the left, the
real error message at the top, expected output on the right. Submit
your fix to pass.

After two failed submissions, a Hint button appears. Try without it
first.`,
    },
    {
      type: 'debugthis',
      id: 'm2-l7-d1',
      brokenCode: `const items = ['apple', 'banana', 'cherry'];
for (let i = 0; i <= items.length; i++) {
  console.log(items[i].toUpperCase());
}`,
      errorMessage: "TypeError: Cannot read properties of undefined (reading 'toUpperCase')",
      expectedConsoleOutput: 'APPLE\nBANANA\nCHERRY',
      hint: 'The loop runs one step too far. items.length is 3, but the last valid index is 2. Change `<=` to `<`.',
    },
    {
      type: 'debugthis',
      id: 'm2-l7-d2',
      brokenCode: `function double(n) {
  n * 2;
}

console.log(double(3));
console.log(double(7));`,
      errorMessage: '(no error thrown — the output is wrong: undefined, undefined)',
      expectedConsoleOutput: '6\n14',
      hint: 'The function computes n * 2 but never gives it back. Add `return` before the expression.',
    },
    {
      type: 'debugthis',
      id: 'm2-l7-d3',
      brokenCode: `function makeCounter() {
  for (let i = 1; i <= 3; i++) {
    let total = 0;
    total = total + i;
  }
  console.log(total);
}

makeCounter();`,
      errorMessage: 'ReferenceError: total is not defined',
      expectedConsoleOutput: '6',
      hint: '`let` declares a variable inside the nearest curly braces. `total` is reborn (and lost) each loop iteration. Move the declaration outside the loop, and remember to accumulate, not reset.',
    },
    {
      type: 'debugthis',
      id: 'm2-l7-d4',
      brokenCode: `function isAdult(age) {
  if (age == '18') {
    return 'just turned adult';
  }
  return 'something else';
}

console.log(isAdult(18));
console.log(isAdult('18'));
console.log(isAdult(19));`,
      errorMessage:
        '(no error — but the function should only return "just turned adult" when age is exactly the number 18, not the string "18". Currently both pass.)',
      expectedConsoleOutput: 'just turned adult\nsomething else\nsomething else',
      hint: '`==` does loose comparison and treats 18 and "18" as equal. Use `===` for strict equality (value and type both match).',
    },
    {
      type: 'debugthis',
      id: 'm2-l7-d5',
      brokenCode: `const user = {
  name: 'Gabs',
  age: 28,
};

console.log(user.name);
console.log(user.Age);`,
      errorMessage: '(no error — but the second log prints undefined instead of 28)',
      expectedConsoleOutput: 'Gabs\n28',
      hint: 'JavaScript property names are case-sensitive. `user.Age` is a different property from `user.age`.',
    },
  ],
};
