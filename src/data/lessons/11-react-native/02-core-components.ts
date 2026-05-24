import type { Lesson } from '@/types/lesson';

export const M11_L2_CORE_COMPONENTS: Lesson = {
  id: 'm11-l2-core-components',
  moduleId: 'react-native',
  title: 'Core components and styling',
  objective: 'Use View, Text, Pressable, ScrollView. Style with StyleSheet.',
  estimatedMinutes: 8,
  blocks: [
    {
      type: 'explain',
      id: 'm11-l2-e1',
      listen: true,
      markdown: `## The native tag vocabulary

There's no \`<div>\`, no \`<p>\`, no \`<button>\` in React Native.
Instead, a small set of cross-platform primitives:

- **\`<View>\`** — a box. The native equivalent of \`<div>\`. Use it
  for layout and grouping.
- **\`<Text>\`** — text. All strings MUST be inside a \`<Text>\`. Loose
  strings inside \`<View>\` throw a runtime error.
- **\`<Pressable>\`** — a tappable area. Replaces \`<button>\` and
  click-handler patterns. Old code uses \`<TouchableOpacity>\`; Pressable
  is the newer, more flexible primitive.
- **\`<ScrollView>\`** — scrollable container. Use for short lists.
- **\`<FlatList>\`** — virtualized scrollable list. Use for long lists
  (>20 items) — it only renders what's visible.
- **\`<TextInput>\`** — text field.
- **\`<Image>\`** — image. Takes a \`source\` prop.

\`\`\`jsx
import { View, Text, Pressable, StyleSheet } from 'react-native';

function HelloScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello</Text>
      <Pressable
        style={styles.btn}
        onPress={() => console.log('tapped')}
      >
        <Text style={styles.btnText}>Tap me</Text>
      </Pressable>
    </View>
  );
}
\`\`\``,
    },
    {
      type: 'explain',
      id: 'm11-l2-e2',
      listen: true,
      markdown: `## Styling with StyleSheet

There's no CSS file. Styles are JS objects, written with the same
property names as CSS but camelCased and in numbers (no \`px\`):

\`\`\`jsx
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0b0d10',
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 16,
  },
  btn: {
    backgroundColor: '#10b981',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
  },
  btnText: {
    color: '#0b0d10',
    fontWeight: '600',
  },
});
\`\`\`

Note: \`flex: 1\` is essentially "take all available space." Every
View defaults to flexbox layout — there's no \`display: flex\` to opt in.

### Things that aren't there

- No \`hover\` — phones don't have hover.
- No \`em\`/\`rem\` — use plain numbers (logical pixels).
- No CSS cascading — every component sets its own styles.
- No fancy selectors — you pass a style object straight to the component.

It's CSS with the wild bits cut out. Less expressive, less to learn.`,
    },
    {
      type: 'readthis',
      id: 'm11-l2-r1',
      language: 'js',
      code: `<View>
  Hello world
</View>`,
      question: 'What happens?',
      options: [
        'Renders "Hello world" — same as <div>',
        'Throws: "Text strings must be rendered within a <Text> component"',
        'Renders an empty View',
        'Works on iOS, fails on Android',
      ],
      answerIndex: 1,
      explanation:
        'Bare strings inside non-Text components throw. Wrap text in <Text>: `<View><Text>Hello world</Text></View>`.',
    },
  ],
};
