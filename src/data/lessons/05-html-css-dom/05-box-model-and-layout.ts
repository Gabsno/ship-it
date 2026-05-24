import type { Lesson } from '@/types/lesson';

export const M5_L5_BOX_MODEL_AND_LAYOUT: Lesson = {
  id: 'm5-l5-box-model-and-layout',
  moduleId: 'html-css-dom',
  title: 'The box model and flex layout',
  objective: 'Reason about spacing. Lay out a row of items with flexbox.',
  estimatedMinutes: 9,
  blocks: [
    {
      type: 'explain',
      id: 'm5-l5-e1',
      listen: true,
      markdown: `## Every element is a box

Each box has four spacing layers, from inside out:

1. **Content** — the text or child elements.
2. **Padding** — space inside the border.
3. **Border** — the line around the box.
4. **Margin** — space outside the border.

\`\`\`css
.card {
  padding: 16px;
  border: 1px solid gray;
  margin: 24px;
}
\`\`\`

You write padding/margin in shorthand: \`16px\` = all four sides.
\`16px 24px\` = top/bottom 16, left/right 24. \`8px 12px 16px 4px\` =
top right bottom left (clockwise).

Add this to your global CSS once, forever:

\`\`\`css
* { box-sizing: border-box; }
\`\`\`

That makes \`width\` mean "total width including padding and border"
instead of just the content width. Saves you from a thousand layout bugs.`,
    },
    {
      type: 'explain',
      id: 'm5-l5-e2',
      listen: true,
      markdown: `## Flexbox — laying out a row or column

Wrap children in a flex container:

\`\`\`css
.row {
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: space-between;
}
\`\`\`

- \`display: flex\` — flips this element into flex mode. Its direct
  children become flex items, arranged in a row by default.
- \`flex-direction: column\` — switch to vertical stacking.
- \`gap\` — space between children. Way better than margin tricks.
- \`align-items\` — alignment on the cross axis (vertical for a row).
  \`center\` lines them up vertically.
- \`justify-content\` — alignment on the main axis. \`space-between\`,
  \`center\`, \`flex-end\`, \`flex-start\`.

Flex is the right tool for almost every "I need this row to look like
that" problem. Grid is for two-dimensional layouts — you'll meet it
when you need it.`,
    },
    {
      type: 'typealong',
      id: 'm5-l5-ta1',
      language: 'html',
      instructions: 'A header with a logo on the left and a button on the right.',
      code: `<style>
  * { box-sizing: border-box; }
  body { margin: 0; font-family: sans-serif; }
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 24px;
    border-bottom: 1px solid #ccc;
  }
  button {
    padding: 8px 16px;
    border: 1px solid #333;
    background: white;
    cursor: pointer;
  }
</style>

<header>
  <h1>Ship It</h1>
  <button>Sign in</button>
</header>`,
    },
  ],
};
