import type { Lesson } from '@/types/lesson';

export const M11_L1_EXPO_CLI: Lesson = {
  id: 'm11-l1-expo-cli',
  moduleId: 'react-native',
  title: 'The Expo CLI',
  objective: 'Scaffold an Expo app and run it on your phone.',
  estimatedMinutes: 8,
  blocks: [
    {
      type: 'explain',
      id: 'm11-l1-e1',
      listen: true,
      markdown: `## Expo's promise

Real native mobile development used to mean installing Xcode (multi-GB,
Mac-only) and Android Studio (multi-GB, finicky). Expo replaces all
that with one CLI tool and one app on your phone.

Workflow:

1. \`npx create-expo-app my-app\` — scaffold a project.
2. \`npx expo start\` — start the Expo dev server (Metro bundler).
3. Open **Expo Go** on your phone (iOS App Store / Google Play).
4. Scan the QR code from the terminal.
5. Your app loads on your phone, talking to your laptop dev server.
6. Save a file in your editor → the phone updates instantly.

Expo Go is great for prototyping. For production (and anytime you need
native libraries Expo Go doesn't bundle), you build a custom dev client
with \`eas build --profile development\`.`,
    },
    {
      type: 'command',
      id: 'm11-l1-c1',
      label: 'Create a new Expo app',
      command: 'npx create-expo-app my-app --template blank-typescript',
      expectedOutput:
        'Scaffolds my-app/ with TypeScript pre-configured. Takes ~30 seconds.',
    },
    {
      type: 'command',
      id: 'm11-l1-c2',
      label: 'Start the dev server',
      command: 'cd my-app && npx expo start',
      expectedOutput:
        'Prints a QR code in your terminal. Press w to open in browser, a for Android emulator, i for iOS simulator. Or scan with Expo Go on your phone.',
    },
    {
      type: 'explain',
      id: 'm11-l1-e2',
      listen: true,
      markdown: `### The file layout

\`\`\`
my-app/
├── App.tsx              # the root component — start here
├── app.json             # Expo config: name, slug, icon, splash, version
├── assets/              # icons, splash images
├── node_modules/
└── package.json
\`\`\`

Open \`App.tsx\`. Change a string. Save. Your phone updates in under
a second. That's the loop you'll spend Module 11 (and BA-4) in.`,
    },
  ],
};
