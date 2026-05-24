import type { Lesson } from '@/types/lesson';

export const M11_L3_NATIVE_APIS: Lesson = {
  id: 'm11-l3-native-apis',
  moduleId: 'react-native',
  title: 'Native APIs — location, permissions, storage',
  objective: 'Talk to the phone\'s GPS. Persist data on-device. Ask for permission politely.',
  estimatedMinutes: 9,
  blocks: [
    {
      type: 'explain',
      id: 'm11-l3-e1',
      listen: true,
      markdown: `## Expo modules — the bridge to native APIs

Expo ships dozens of small libraries that wrap native APIs in a uniform
JS interface. Install one, import it, call it.

For BA-4 (Mini-Viszio) you'll need three:

- \`expo-location\` — GPS coordinates.
- \`@react-native-async-storage/async-storage\` — persistent local
  key/value store (the React Native equivalent of localStorage).
- \`@react-navigation/native\` + \`@react-navigation/native-stack\` —
  multi-screen navigation.

\`\`\`bash
npx expo install expo-location @react-native-async-storage/async-storage
npm install @react-navigation/native @react-navigation/native-stack
\`\`\`

Use \`npx expo install\` rather than plain \`npm install\` for Expo
packages — it picks compatible versions for your Expo SDK.`,
    },
    {
      type: 'explain',
      id: 'm11-l3-e2',
      listen: true,
      markdown: `## Permissions — ask, then use

The OS won't let you read GPS without the user's permission. Ask first:

\`\`\`jsx
import * as Location from 'expo-location';

async function getCoords() {
  let { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== 'granted') {
    throw new Error('Location permission denied');
  }

  const position = await Location.getCurrentPositionAsync({});
  return {
    lat: position.coords.latitude,
    lng: position.coords.longitude,
  };
}
\`\`\`

First call shows the system dialog. Subsequent calls return the saved
answer without prompting again. If denied, the only way to undo it is
from the OS settings — never spam the user with re-prompts.

You also need to declare what permissions your app uses in \`app.json\`:

\`\`\`json
{
  "expo": {
    "plugins": [
      [
        "expo-location",
        { "locationAlwaysAndWhenInUsePermission": "Used to record clock-in location." }
      ]
    ]
  }
}
\`\`\`

This text shows in the OS permission dialog. Be specific about WHY you
need it — vague reasons get denied.`,
    },
    {
      type: 'explain',
      id: 'm11-l3-e3',
      listen: true,
      markdown: `## AsyncStorage — like localStorage, but async

\`\`\`jsx
import AsyncStorage from '@react-native-async-storage/async-storage';

// save
await AsyncStorage.setItem('token', 'ghp_xxx');

// read
const token = await AsyncStorage.getItem('token');

// remove
await AsyncStorage.removeItem('token');
\`\`\`

Differences from web localStorage:

- Everything is async (returns Promises). \`await\` it.
- Storage is per-app, not per-origin (different model).
- You still need to JSON.stringify/parse for non-string data.

Use it for: JWTs after login, user preferences, draft content. Don't
use it for sensitive secrets — use \`expo-secure-store\` for those
(it uses the OS keychain).

That's enough to attempt BA-4. The capstone spec walks you through
fitting these pieces together with the auth backend you built in BA-3.`,
    },
    {
      type: 'readthis',
      id: 'm11-l3-r1',
      language: 'js',
      code: `function ClockInButton() {
  function onPress() {
    const position = Location.getCurrentPositionAsync({});
    console.log(position.coords);
  }
  return <Pressable onPress={onPress}><Text>Clock in</Text></Pressable>;
}`,
      question: 'What\'s the bug?',
      options: [
        'Pressable is deprecated — should use Touchable',
        'getCurrentPositionAsync returns a Promise; needs to be awaited (and the function needs to be async)',
        'You can\'t use Location outside useEffect',
        'No bug',
      ],
      answerIndex: 1,
      explanation:
        '`getCurrentPositionAsync` is async. Without await, `position` is a Promise object — `position.coords` is undefined. Make `onPress` async and `await` the call.',
    },
  ],
};
