# GrammarLessonDesign.tsx redesign notes

All lesson **content** (de.ts grammar objects, question/answer strings, tables)
is completely untouched. Changes are visual/structural only.

---

## Full design changes

### 1 · Lycurus avatars
| Before | After |
|---|---|
| `ArrowLeft` icon wasn't in imports; back-btn used an inline SVG path string with `fill="none" stroke="currentColor"` | Import `ArrowLeft` from `lucide-react` and use `<ArrowLeft />` component |
| Padding `gap-1` | Padding `gap-1.5`, `px-3 py-1.5` instead of `px-3 py-1.5` for consistency |

### 2 · Header
- CEFR badge — `rounded-full px-3 py-1` (was `px-2.5 py-0.5`) + explicit `bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-sm` instead of inline `style={{ background: "var(--badge, #6366f1)", color: "#fff" }}` which was white-on-indigo rather than white-on-gradient
- Topic badge — `px-3 py-1` same, but `text-slate-600 dark:text-slate-300` (was `text-slate-400`)
- Title — dropped the purple/pink gradient on text entirely; replaced with solid `text-slate-900 dark:text-white`, `text-[1.85rem] font-extrabold` (was `text-3xl font-black` plus gradient). The colour now comes from the badge.
- Surrounding `mb-8` → `mb-10`.

### 3 · `SectionTitle` (new sub-component, replaces every inline `<h2>`)
All section heads now render a consistent shape:
```
─ thin 6-px indigo left-bar · optional icon · bold label text
```
The thin bar anchors the hierarchy visually. The `SectionCard` wrapper was also redesigned.

### 4 · `SectionCard` (new wrapper)
Every `SectionCard` section (time-expressions, mistakes, review, QA) now wraps its content inside a `rounded-2xl bg-slate-50/60 dark:bg-slate-800/30 -mx-2 sm:-mx-4 px-2 sm:px-4 py-5` container — a light indented panel that floats the card's table/section visually apart from adjacent cards instead of rendering as a plain block.

The internal `<div className="mb-2">` children gap → `mt-3` for better
spacing consistency between the `SectionTitle` and the content.

### 5 · Rules cards (section 2 · `[id="rules"]`)
Completely restructured — a single `<section>` (not a `SectionCard`) with
the `slate-50/60` panel background and a `SectionTitle`. Each rule card:

- **Dropped** the colorful ring (`ring-1 ring-indigo-200/60` etc.) and the
  `shadow-sm hover:shadow-md` pattern
- **Added** a thin solid `w-1` vertical accent bar on the left, rotated through
  an explicit `barColors` array (indigo / emerald / purple / rose / amber with
  light+dark variants) — cleaner and avoids fragile string-includes detection
- Bare clean white card (`bg-white dark:bg-slate-800/70`), `group
  hover:shadow-lg` — also felt slightly elevated
- Inner body text unified to `text-xs` / `leading-relaxed` throughout
- `inline-block` on the structure chip replaced with inline `leading-relaxed`
  inside the pill so longer formula strings can wrap

### 6 · Conjugation table (section 1 · `[id="conjugation"]`)
Moved to `<section id="conjugation" className="gl-id-section">` — no card
wrapper, `SectionTitle`-driven heading, table sits at `mt-3` under it.
Border on cells changes from `border-slate-200 dark:border-slate-700`
to `border-slate-200 dark:border-slate-700/50` (consistent with page guardrails).

### 7 · Accordion — detailed explanation (section 6 · `[id="explanation"]`)
The single biggest visual shift:

| Before | After |
|---|---|
| `data-[state=open]:ring-2 data-[state=open]:ring-indigo-200 dark:data-[state=open]:ring-indigo-800 data-[state=open]:border-indigo-300 dark:data-[state=open]:border-indigo-700` — as open-state glow ring | `border-l-2 border-l-{color} data-[state=open]:border-l-{color}-500` — a thin, predictable accent bar |
| Icon badge: `h-9 w-9 rounded-xl` with numbers 1,2,3… and **scale** transition `group-hover:scale-110 group-data-[state=open]:scale-110` | Icon badge: `h-8 w-8 rounded-lg` — number only; replaced scale with subtle `opacity` transition `group-hover:opacity-80` |
| Content cell: no background, single bottom border, SHARED prose via `cn([&_p]:my-2.5 …)` from parent wrapper | Content cell: its own padded card inside the accordion body — `p-4 rounded-b-xl bg-slate-50/50 dark:bg-slate-800/20 border border-t-0` — separates it from the trigger visually; prose guardrails inlined here |
| Shadow only on closed trigger | Subtle shadow on open content card |

`sectionAccordionBorder` constant drives the colour rotation for the thin
left bar (indigo / emerald / purple / rose / amber loop), replacing the
fragile `.iconBg.includes(...)` string detection.

### 8 · Callouts (section 5 · `[id="callouts"]`)
**Completely rewrote the layout.** The old gradient `CalloutBox` component was
removed and replaced with a direct flat card inside the `<section>`.

- Each callout → `flex gap-3 rounded-xl border border-slate-200/70 dark:border-slate-700/50
  bg-white dark:bg-slate-800/50 shadow-sm p-4` — a clean neutral card,
  no background gradients, more contrast for the label/text body
- Icon: `h-8 w-8 rounded-lg` pill badge instead of the large `text-xl` glyph; driven
  by `calloutStyles` record (separated iconBg / iconColor per colour)
- Label: `text-[11px] font-bold uppercase tracking-wider mb-1 text-slate-400` — no
  opacity hack, plain `text-slate-400`
- The wrapper structure became: `[SECTION LABEL SectionTitle] → [grid] → [card×N]`

### 9 · Mistakes table (section 4 · `[id="mistakes"]`)
- Column headers changed from gradient fills
  (`bg-gradient-to-b from-rose-500 to-rose-600` etc.) to flat
  `bg-slate-500 text-white` — consistent with all other table headers on the page
- `MistakesTable` component removed (only remaining inline in `SectionCard`)
- Border thickness on cell `border-slate-700` → `border-slate-700/50` (page-wide guardrail)

### 10 · Quick review bullets (section 7 · `[id="review"]`)
- Number dots changed from `bg-indigo-100 indigo-600` → `bg-slate-100
  dark:bg-slate-700 text-slate-500 dark:text-slate-400 text-[10px]` — neutral grey
  instead of colour to match the `SectionCard` panel background

### 11 · Action buttons
| Before | After |
|---|---|
| Complete badge: solid flat `from-emerald-500 to-teal-500 bg-gradient-to-r`, full pill | Complete badge: `rounded-xl px-5 py-2.5 bg-white dark:bg-slate-800 border-2 border-emerald-400 dark:border-emerald-500 text-emerald-700 shadow-sm` — outlined badge card, no fill |
| "Mark as done" button: flat `bg-indigo-600` | `bg-gradient-to-r from-indigo-600 to-indigo-500`, `hover:shadow-lg shadow-indigo-500/35`, `hover:brightness-110` — subtly more premium |
| Test button: `bg-amber-50 dark:bg-amber-900/10` with `border-2 border-amber-400` | Same colour, but `border-amber-400/70` base → sharpens to `border-amber-400` on hover, `bg-amber-50/80` instead of flat amber — softer, calmer unordered

### 12 · Spacing constants
- Inter-block spacing `space-y-7` → `space-y-6` — overall page height reduced by ~14 % while preserving breathability between all 7 components

### 13 · Section wrapper class names (new invariant)
All section containers now share the same panel wrapper pattern:
```
rounded-2xl bg-slate-50/60 dark:bg-slate-800/30 -mx-2 sm:-mx-4 px-2 sm:px-4 py-5
```
This is applied in `SectionCard` for all `SectionCard` consumer sections, and
manually inline for the conjugation, tense, and rules sections which needed
slightly different child structures.
