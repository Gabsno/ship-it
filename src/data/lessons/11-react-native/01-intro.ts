import type { Lesson } from '@/types/lesson';

export const M11_L1_INTRO: Lesson = {
  id: 'm11-l1-intro',
  moduleId: 'react-native',
  title: 'React Native + Expo — module roadmap',
  objective: 'Understand what React Native is, what Expo adds, and how mobile differs from web.',
  estimatedMinutes: 8,
  blocks: [
    {
      type: 'explain',
      id: 'm11-l1-e1',
      listen: true,
      markdown: `## React Native — React patterns, real native UI

React Native lets you write code using React's syntax that compiles down
to **real native** iOS and Android UI. There's no browser, no DOM. The
components you use are \`<View>\`, \`<Text>\`, \`<ScrollView>\`,
\`<TouchableOpacity>\` — not \`<div>\`, \`<p>\`, etc.

\`\`\`jsx
import { View, Text, Button } from 'react-native';

function Greeting() {
  return (
    <View>
      <Text>Hello</Text>
      <Button title="Tap me" onPress={() => alert('hi')} />
    </View>
  );
}
\`\`\`

If you can write React, you can write React Native. The new vocabulary
is small.`,
    },
    {
      type: 'explain',
      id: 'm11-l1-e2',
      listen: true,
      markdown: `## Expo — the easy-mode wrapper

Native development used to mean installing Xcode (iOS) and Android
Studio. Hours of setup. Different tooling per platform.

**Expo** is a layer on top of React Native that handles all of that.
With Expo:

- You write JS on your laptop.
- You scan a QR code with the Expo Go app on your phone.
- The app shows up on your phone, talking to your laptop dev server.

When you're ready to ship to the App Store / Play Store, Expo's build
service (**EAS**) builds the actual native binaries for you. You never
touch Xcode.

The Viszio app you've been building professionally is React Native +
Expo. So is BA-4 (the capstone).`,
    },
    {
      type: 'explain',
      id: 'm11-l1-e3',
      listen: true,
      markdown: `## What this module will cover

~8 lessons. Most code-content shifts to TypeAlong / ReadThis because
running native code in a browser sandbox doesn't make sense.

1. The Expo CLI — \`create-expo-app\`, \`expo start\`.
2. Core components — View, Text, Image, ScrollView.
3. Styling with the StyleSheet API.
4. Navigation with React Navigation.
5. Permissions — Location, Camera, Notifications.
6. Native APIs via Expo modules (expo-location, expo-camera).
7. EAS Build basics.
8. EAS Update (OTA updates).

This module unlocks **BA-4 (Mini-Viszio capstone)**.

## TODO(gabs) — content lands in a future drop`,
    },
  ],
};
