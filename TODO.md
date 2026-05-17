# TODO

## Goal: Add the new OTT design to the grammar lesson page (design-only)

### Step 1 — Analyze existing renderer
- [x] Read `GrammarLessonDesign.tsx`
- [x] Confirm what `GrammarLesson` type supports (`types.ts`)
- [x] Confirm how lessons are loaded (`content/index.ts`)

### Step 2 — Implement design layout mapping
- [ ] Update `GrammarLessonDesign.tsx` to use the same visual sections as the pasted design:
  - Hero/overview card
  - Rules section (rulesTable)
  - Conjugation section (conjugationTable)
  - Detailed Explanation (details as accordions)
  - Callouts (callouts)
  - Common mistakes (commonMistakes)
  - Practice questions (qa) (re-style as the design’s exercises area, but without input/scoring)
  - Completion CTA

### Step 3 — Story + pro-rule + usecases
- [ ] Decide how to render these using existing fields (design-only):
  - Encode pro-rule / story / usecases as `details.body` blocks (markdown)
  - Ensure renderer shows them in the right place/format

### Step 4 — Wire OTT lesson content
- [ ] Adjust `nl.ts` (and later en/de/fr/es) to match new expectations (if any additional structured fields are required)

### Step 5 — Test
- [ ] Run typecheck/build
- [ ] Verify lesson rendering in browser for multiple languages

