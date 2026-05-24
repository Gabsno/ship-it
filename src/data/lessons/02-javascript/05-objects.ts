import type { Lesson } from '@/types/lesson';

export const M2_L5_OBJECTS: Lesson = {
  id: 'm2-l5-objects',
  moduleId: 'javascript',
  title: 'Objects',
  objective: 'Create objects, read and write properties, nest them.',
  estimatedMinutes: 9,
  blocks: [
    {
      type: 'explain',
      id: 'm2-l5-e1',
      listen: true,
      markdown: `## An object is a bag of named values

An **array** is an ordered list — you access items by their **position**.
An **object** is a bag of labelled values — you access them by **name**.

\`\`\`js
const person = {
  name: 'Gabs',
  age: 28,
  isLearning: true,
};
\`\`\`

Each line inside the curly braces is a **property**: a name (left of the
colon), a value (right of the colon), and a comma at the end. The names
are usually called **keys**.`,
    },
    {
      type: 'explain',
      id: 'm2-l5-e2',
      listen: true,
      markdown: `### Reading and writing properties

Two ways to get a value out:

\`\`\`js
person.name;      // 'Gabs'    — dot notation
person['name'];   // 'Gabs'    — bracket notation
\`\`\`

Dot notation is shorter — use it by default. Bracket notation is for
when the key is in a variable, or has special characters in it:

\`\`\`js
const field = 'age';
person[field];    // 28
\`\`\`

You can also write to properties — including ones that didn't exist:

\`\`\`js
person.age = 29;        // change
person.city = 'Accra';  // add a new property
\`\`\``,
    },
    {
      type: 'explain',
      id: 'm2-l5-e3',
      listen: true,
      markdown: `### Objects inside objects

Property values can be anything — including other objects, or arrays:

\`\`\`js
const user = {
  name: 'Gabs',
  address: {
    city: 'Accra',
    country: 'Ghana',
  },
  hobbies: ['code', 'football'],
};

user.address.city;    // 'Accra'
user.hobbies[0];      // 'code'
\`\`\`

You chain dots and brackets to walk into nested structures. Almost every
real-world JS data shape — an HTTP response, a config, a user record —
is a tree of objects and arrays.`,
    },
    {
      type: 'typealong',
      id: 'm2-l5-ta1',
      language: 'js',
      instructions:
        'Retype this. Mind the comma after each property and the curly braces.',
      code: `const car = {
  make: 'Toyota',
  model: 'Corolla',
  year: 2020,
};

console.log(car.make);
console.log(car.year);
car.color = 'silver';
console.log(car);`,
    },
    {
      type: 'codechallenge',
      id: 'm2-l5-cc1',
      spec:
        'Create an object `book` with two properties: `title` = "Atomic Habits" and `author` = "James Clear". Log the title and then the author, each on its own line.\n\nExpected output:\n\nAtomic Habits\nJames Clear',
      starterCode: `const book = {
  // title and author here
};

// log book.title and book.author
`,
      expectedConsoleOutput: 'Atomic Habits\nJames Clear',
    },
    {
      type: 'codechallenge',
      id: 'm2-l5-cc2',
      spec:
        'Given the object below, add a `country` property with the value "Ghana", then log the whole object.\n\nExpected output:\n\n{"city":"Accra","country":"Ghana"}',
      starterCode: `const place = { city: 'Accra' };

// add place.country = 'Ghana'
// then console.log(place)
`,
      expectedConsoleOutput: '{"city":"Accra","country":"Ghana"}',
    },
    {
      type: 'codechallenge',
      id: 'm2-l5-cc3',
      spec:
        'Given the nested object below, log just the user\'s city.\n\nExpected output:\n\nKumasi',
      starterCode: `const user = {
  name: 'Ama',
  address: {
    city: 'Kumasi',
    country: 'Ghana',
  },
};

// log user.address.city
`,
      expectedConsoleOutput: 'Kumasi',
    },
  ],
};
