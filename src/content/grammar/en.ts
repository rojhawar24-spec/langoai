import type { GrammarLesson } from "../types";

export const enGrammar: GrammarLesson[] = [
  /* ═══════════════════════════════════════════════════════════
   * en-gram-1 — Present Simple Tense
   * ═══════════════════════════════════════════════════════════ */
  {
    id: "en-gram-1",
    title: "Present Simple Tense",
    level: 1,
    topic: "Verbs",
    anchorSectionId: "rules",

    overview:
      "The **Present Simple** describes habits, routines, general truths, and permanent states — things that are regularly true or always happen.",

    body: `## Present Simple Tense

The **present simple** is used for habits, general truths, and repeated actions.

**Form:**
- *I / You / We / They*: base form (e.g., *I go*)
- *He / She / It*: base form + **-s / -es** (e.g., *She watches*)

**Examples:**
- *I walk to school every day.*
- *She drinks coffee every morning.*
- *They live in London.*

**Negative:** *do not / does not + base form*
- *I don't like spiders.*
- *He doesn't eat meat.*

**Questions:** *Do / Does + subject + base form?*
- *Do you speak English?*
- *Does she play tennis?*

**Key tip:** Use the Present Simple for facts and routines — NOT for things happening right now!`,

    rulesTable: [
      {
        rule:     "Affirmative — I/You/We/They",
        structure:"base verb (no change)",
        example:  "I walk. We play. They speak.",
        usage:    "Habits, routines, preferences",
      },
      {
        rule:     "Affirmative — He/She/It",
        structure:"base verb + -s / -es",
        example:  "She walks. He watches. It rains.",
        usage:    "3rd person singular — note spelling rules",
      },
      {
        rule:     "Negative — I/You/We/They",
        structure:"do not (don't) + base verb",
        example:  "I don't eat meat.",
        usage:    "Denied habits or facts",
      },
      {
        rule:     "Negative — He/She/It",
        structure:"does not (doesn't) + base verb",
        example:  "She doesn't drink coffee.",
        usage:    "'-s' is dropped after doesn't",
      },
      {
        rule:     "Question — I/You/We/They",
        structure:"Do + subject + base verb?",
        example:  "Do you like chocolate?",
        usage:    "Yes/No question with 1st & 2nd person",
      },
      {
        rule:     "Question — He/She/It",
        structure:"Does + subject + base verb?",
        example:  "Does she work here?",
        usage:    "Yes/No question with 3rd person singular",
      },
      {
        rule:     "Wh-Questions",
        structure:"Wh-word + do/does + subject + base verb?",
        example:  "Where do you live?",
        usage:    "Specific questions about habits / facts",
      },
      {
        rule:     "Spelling: -s ending",
        structure:"add -s directly",
        example:  "write → writes",
        usage:    "Most verbs: /s/ /z/ /ɪz/ sound",
      },
      {
        rule:     "Spelling: -es ending",
        structure:"add -es after s / ss / sh / ch / x / o",
        example:  "go → goes, watch → watches",
        usage:    "Verbs ending in sibilant sounds",
      },
      {
        rule:     "Spelling: consonant + y → ies",
        structure:"-y → -ies (after consonant)",
        example:  "study → studies, try → tries",
        usage:    "After consonants: cry → cries",
      },
      {
        rule:     "Spelling: vowel + y → s",
        structure:"add -s (keep the y)",
        example:  "play → plays",
        usage:    "After vowels: enjoy → enjoys",
      },
      {
        rule:     "Stative verbs — no continuous",
        structure:"verbs of feeling / possession / thought",
        example:  "I love music. NOT: I am loving music.",
        usage:    "love, know, understand, believe, own…",
      },
    ],

    conjugationTable: {
      header: "Person | Affirmative | Negative | Question",
      rows: [
        ["I",       "walk",      "don't walk",       "Do I walk?"],
        ["You",     "walk",      "don't walk",       "Do you walk?"],
        ["He/She/It","walks",    "doesn't walk",     "Does he walk?"],
        ["We",      "walk",      "don't walk",       "Do we walk?"],
        ["They",    "walk",      "don't walk",       "Do they walk?"],
      ],
    },

    timeExpressions: {
      header: "Time Expression | Type | Example",
      rows: [
        ["every day",              "recurring",  "I go to the gym every day."],
        ["usually",               "frequency",  "She usually arrives early."],
        ["on Mondays",            "recurring",  "We eat pasta on Mondays."],
        ["at 7 a.m.",             "specific",   "The train leaves at 7 a.m."],
        ["in the morning",        "routine",    "He reads the news in the morning."],
        ["once a week",           "frequency",  "I call my parents once a week."],
        ["always / never / often","adverbs",    "They never watch TV."],
        ["in summer / in winter", "seasons",    "We visit the coast in summer."],
      ],
    },

    details: [
      {
        title: "1. Understanding the Present Simple",
        body: `## Core Concept
The Present Simple is your **default tense**. When you are unsure which tense to use, Present Simple is usually a safe bet — unless the action is happening **right now** or **temporarily**.

### Three Main Uses:
1. **Habits & routines:** *I brush my teeth every morning.*
2. **General truths:** *Water boils at 100 °C.*
3. **Permanent states:** *She lives in Amsterdam.*

> **Rule of thumb:** If there is a time expression like *every*, *always*, *usually*, or a fixed schedule, use Present Simple.`,
      },
      {
        title: "2. 3rd Person Singular (-s / -es)",
        body: `## The Special Rule for He / She / It

With **he, she, it** and any singular noun, add **-s / -es**.
The easiest mnemonic: *"watch your S, X, CH, O"*

| Verb | Ends in… | Form | Example |
|---|---|---|---|
| work | any | +s | works |
| wash | sh | +es | washes |
| watch | ch | +es | watches |
| go   | o  | +es | goes |
| fly  | consonant+y | -y→ies | flies |

> **Pronunciation tip:** -s sounds as **/s/** after voiceless sounds, as **/z/** after voiced sounds, and as **/ɪz/** after sibilants.`,
      },
      {
        title: "3. Stative (Non-Action) Verbs",
        body: `## Verbs that don't use continuous forms

Some verbs rarely (or never) appear in continuous tenses. They describe **states** rather than **actions**.

### Most Common Stative Verbs:
- **Feelings:** love, like, hate, prefer
- **Possession:** own, have, possess
- **Senses:** see, hear, smell, taste, feel
- **Thinking:** know, believe, understand, think (= opinie), remember
- **Other:** seem, appear, belong, cost, contain, measure

**Common mistake horror story:**
> ❌ *I am loving this movie!*
> ✅ *I love this movie!*

> **Exception:** *think* **can** be continuous when it means "considering":
> *I'm thinking about quitting my job.* (temporary thought)`,
      },
      {
        title: "4. Spelling Rules Detail",
        body: `## Verb-endings in the Present Simple (+ he/she/it)

| Ending | Rule | Example |
|---|---|---|
| consonant | +s | talk → talks |
| s / ss / sh / ch / x / o | +es | watch → watches |
| consonant + y | change y → ies | study → studies |
| vowel + y | +s | play → plays |
| f / fe | f/fe → ves (irregular) | knife → knives |

> These rules apply to **regular verbs only**. Irregular verbs like *have → has* or *be → is/are* must be memorised.`,
      },
    ],

    callouts: [
      {
        type:  "tip",
        label: "Tip",
        text:  "When you are unsure which tense to use, the Present Simple is the safest starting point — unless the action is happening right now.",
      },
      {
        type:  "tip",
        label: "Tip",
        text:  "Add -es (not just -s) to verbs ending in s, sh, ch, x, and o — this is the most common mistake.",
      },
      {
        type:  "remember",
        label: "Remember",
        text:  "Does + base verb!  ❌ 'Does she goes?' → ✅ 'Does she go?' — the -s disappears after does/doesn't.",
      },
      {
        type:  "key",
        label: "Key",
        text:  "Every time expression for recurring habits = Present Simple signal: every day, always, usually, often, on Mondays, at 7 a.m.",
      },
      {
        type:  "tip",
        label: "Tip",
        text:  "Stative verbs (know, love, own, believe…) do NOT use Present Continuous. Use Present Simple instead.",
      },
      {
        type:  "key",
        label: "Key",
        text:  "Irregular third-person forms you MUST know: be → is/are, have → has, do → does, go → goes, say → says.",
      },
    ],

    commonMistakes: [
      {
        incorrect:  "He don't eat meat.",
        correct:    "He doesn't eat meat.",
        explanation: "With he/she/it use 'doesn't', NOT 'don't'. The -s is dropped after doesn't.",
      },
      {
        incorrect:  "Does she goes to school?",
        correct:    "Does she go to school?",
        explanation: "After does/doesn't 'do' the verb: no -s / -es on the main verb.",
      },
      {
        incorrect:  "She go to school.",
        correct:    "She goes to school.",
        explanation: "3rd person singular requires -s / -es on the main verb every time.",
      },
      {
        incorrect:  "I am knowing the answer.",
        correct:    "I know the answer.",
        explanation: "'Know' is a stative verb — it never uses the continuous form.",
      },
      {
        incorrect:  "He live in Berlin.",
        correct:    "He lives in Berlin.",
        explanation: "He/she/it always needs the -s ending on the verb.",
      },
      {
        incorrect:  "Do she like coffee?",
        correct:    "Does she like coffee?",
        explanation: "For he/she/it use 'Does', not 'Do'. 'Do' is only for I/you/we/they.",
      },
      {
        incorrect:  "She don't likes coffee.",
        correct:    "She doesn't like coffee.",
        explanation: "After doesn't drop both the s/es AND the s on the main verb — one mistake at a time!",
      },
      {
        incorrect:  "I playing football every Sunday.",
        correct:    "I play football every Sunday.",
        explanation: "Every + time expression = Present Simple. No -ing form here.",
      },
    ],

    review: [
      "Present Simple = habits, routines, facts, timetables (use is tense choice #1)",
      "3rd person singular: add **-s / -es** (watch → watches, go → goes, study → studies)",
      "'does / doesn't' = he/she/it  — after it, the verb has **no -s**",
      "'Do / Does' questions: Do/Does + subject + **base verb**",
      "Stative verbs (know, love, believe, own…) → only Present Simple",
      "Keywords: always, usually, every day, on Mondays, at 7 a.m. = Present Simple signal",
    ],

    qa: [
      {
        question: "Which tense: She ___ (to work) in a hospital.",
        answer:  "works — she is 3rd person singular; add -s",
      },
      {
        question: "Correct the question: 'Do she plays piano?'",
        answer:  "Does she play piano? (Does + subject + base verb)",
      },
      {
        question: "Present Simple or Continuous? 'Right now I ___ (cook).'",
        answer:  "am cooking — action happening right now = Present Continuous",
      },
      {
        question: "Stative verb test: 'I am loving you' — correct?",
        answer:  "❌ Wrong. 'Love' is stative. Say: 'I love you.'",
      },
      {
        question: "Which tense: 'Water ___ (boil) at 100 °C.'",
        answer:  "boils — general scientific truth = Present Simple",
      },
    ],

    exercises: [
      { question: "She ___ to school every day.",       options: ["go","goes","going","gone"], answer: "goes" },
      { question: "They ___ football on Sundays.",      options: ["play","plays","playing","played"], answer: "play" },
      { question: "He ___ like coffee.",                options: ["don't","doesn't","isn't","aren't"], answer: "doesn't" },
    ],
  },

  /* ═══════════════════════════════════════════════════════════
   * en-gram-2 — Present Continuous (Progressive)
   * ═══════════════════════════════════════════════════════════ */
  {
    id: "en-gram-2",
    title: "Present Continuous (Progressive)",
    level: 2,
    topic: "Verbs",
    anchorSectionId: "rules",

    overview:
      "The **Present Continuous** describes temporary actions happening right now, around now, or planned future events — and contrasts them with the Present Simple.",

    body: `## Present Continuous Tense

The **present continuous** describes actions happening RIGHT NOW or around now.

**Form:** *am / is / are + verb-ing*

**Examples:**
- *I am reading a book.*
- *She is cooking dinner.*
- *They are watching TV.*

**Negative:** *am/is/are + not + verb-ing*
- *I am not sleeping.*
- *He isn't working today.*

**Questions:** *Am / Is / Are + subject + verb-ing?*
- *Are you listening?*
- *Is she coming?*

**Compare with Present Simple:**
- *I read every night.* (habit — Present Simple)
- *I am reading right now.* (now — Present Continuous)`,

    rulesTable: [
      {
        rule:     "Affirmative — I",
        structure:"am + verb-ing",
        example:  "I am studying English.",
        usage:    "I always takes 'am'",
      },
      {
        rule:     "Affirmative — He/She/It",
        structure:"is + verb-ing",
        example:  "She is waiting for the bus.",
        usage:    "3rd person singular uses 'is'",
      },
      {
        rule:     "Affirmative — You/We/They",
        structure:"are + verb-ing",
        example:  "They are playing football.",
        usage:    "Plural & 'you' use 'are'",
      },
      {
        rule:     "Negative — all subjects",
        structure:"am / is / are + not + verb-ing",
        example:  "He isn't working today.",
        usage:    "Contractions: I'm not, he isn't, they aren't",
      },
      {
        rule:     "Yes/No Question",
        structure:"Am / Is / Are + subject + verb-ing?",
        example:  "Are you coming to the party?",
        usage:    "Yes/No question form",
      },
      {
        rule:     "Wh-Question",
        structure:"Wh-word + am/is/are + subject + verb-ing?",
        example:  "What are you doing?",
        usage:    "Specific questions",
      },
      {
        rule:     "Spelling: -ing",
        structure:"add -ing directly",
        example:  "talk → talking",
        usage:    "Most verbs: just add -ing",
      },
      {
        rule:     "Spelling: CVC",
        structure:"double last consonant + -ing",
        example:  "run → running, swim → swimming",
        usage:    "Consonant-vowel-consonant pattern at end",
      },
      {
        rule:     "Spelling: -ie → -y",
        structure:"-ie ending → -y + -ing",
        example:  "lie → lying, die → dying",
        usage:    "Only 3 verbs: lie, die, tie",
      },
      {
        rule:     "Present Continuous vs Present Simple",
        structure:"PRES CONT = now / temporary / future plan\nPRES SIMP  = habits / facts / permanent",
        example:  "I live in Amsterdam. → I am living in Amsterdam this month.",
        usage:    "Compare timeframe: permanent vs temporary",
      },
    ],

    conjugationTable: {
      header: "Person | Affirmative | Negative | Short Question",
      rows: [
        ["I",         "am studying",    "am not studying",    "Am I studying?"],
        ["You",       "are studying",   "aren't studying",    "Are you studying?"],
        ["He/She/It", "is studying",    "isn't studying",     "Is he studying?"],
        ["We",        "are studying",   "aren't studying",    "Are we studying?"],
        ["They",      "are studying",   "aren't studying",    "Are they studying?"],
      ],
    },

    timeExpressions: {
      header: "Trigger Expression | Meaning | Example",
      rows: [
        ["right now",       "at this exact moment",   "I am eating right now."],
        ["at the moment",   "around the present",     "She is at the gym at the moment."],
        ["currently",       "during this general time","We are currently renovating."],
        ["these days",      "around the present",     "He is working a lot these days."],
        ["this week/month", "limited recent period",  "I am staying with friends this week."],
        ["Look! / Listen!", "immediate perception",   "Look! It is snowing!"],
        ["today / tonight", " today context",         "I am working from home today."],
        ["nowadays",        "general present trend",  "More people are working remotely nowadays."],
      ],
    },

    details: [
      {
        title: "1. Core Concept & Three Main Uses",
        body: `## When to use Present Continuous

### Use 1 — Right now (NOW action)
*⏱️ At this exact moment*
- "Shhh — I'm studying right now."
- "Can you call back? I'm driving."

### Use 2 — Temporary situations (AROUND NOW)
Something is **temporarily different** from usual:
- "I'm living with my parents this month."
- "She's working extra hours this week."

### Use 3 — Fixed plans & arrangements (NEAR FUTURE)
Something is already planned and arranged:
- "I'm flying to Berlin on Friday."
- "We're meeting John at 6 p.m."

> **Key signal:** If the action has a clear **start and end**, use Present Continuous.`,
      },
      {
        title: "2. Spelling Rules for -ing",
        body: `## How to add -ing correctly

| Rule | Pattern | Example |
|---|---|---|
| Add -ing | most verbs | talk → talking |
| Double last letter | CVC (run→run…→running) | swim → swimming |
| Drop silent -e | …e → …ing | make → making |
| -ie → -y | lie / die / tie | die → dying |

> **Rule of thumb:** If the emphasis is on the **second syllable** (e.g., *be-gin*, *ad-mit*), double it; otherwise you usually don't.

### Point 1 — No doubling after 'w' or 'y':
- show → showing  (not *showwing*)
- enjoy → enjoying (not *enjoyying*)`,
      },
      {
        title: "3. Stative Verbs — They Don't Like Continuous!",
        body: `## Verbs that avoid the -ing form

Many verbs describe **states** (not actions) and therefore rarely appear in continuous form.

### Common non-continuous verbs:
| Category | Verbs |
|---|---|
| Feelings | love, like, hate, prefer, want |
| Possession | have, own, possess |
| Senses | see, hear, smell, taste, feel |
| Thoughts | know, believe, understand, think (= opinion) |
| Other | seem, appear, belong, cost, contain, measure |

> ❌ *I am knowing the answer.*
> ✅ *I know the answer.*`,
      },
      {
        title: "4. Present Continuous vs Present Simple",
        body: `## Quick comparison table

| | Present Simple | Present Continuous |
|---|---|---|
| **Meaning** | Habit / Routine / Fact | Now / Temporary / Plan |
| **Keyword signals** | always, usually, every day | now, right now, currently |
| **Duration** | Permanent, regular | Temporary, with an endpoint |
| **Stative verbs** | ✅ Used | ❌ Never used |

**Side-by-side examples:**
- *I drink coffee every morning.* (habit — Pres Simp)
- *I am drinking coffee right now.* (now — Pres Cont)
- *She lives in Paris.* (permanent — Pres Simp)
- *She is living in Paris this year.* (temporary — Pres Cont)`,
      },
    ],

    callouts: [
      {
        type:  "tip",
        label: "Tip",
        text:  "Use Present Continuous for plans already arranged — especially personal future plans like 'I'm meeting John'.",
      },
      {
        type:  "remember",
        label: "Remember",
        text:  "Stative verbs (know, love, believe, own…) never use -ing form. Only Present Simple!",
      },
      {
        type:  "tip",
        label: "Tip",
        text:  "If you see 'Look!', 'Listen!', or 'Watch!', the Present Continuous is almost always the answer.",
      },
      {
        type:  "key",
        label: "Key",
        text:  "Don't confuse action verbs with stative verbs: 'think' can be continuous when it means 'considering', not 'opinion'.",
      },
      {
        type:  "note",
        label: "Note",
        text:  "For temporary situations (a few weeks/months), use Present Continuous — even for verbs that are usually stative in a permanent context.",
      },
    ],

    commonMistakes: [
      {
        incorrect:  "I am knowing the answer.",
        correct:    "I know the answer.",
        explanation: "'Know' is a stative verb — it never uses Continuous form.",
      },
      {
        incorrect:  "He is work at a café.",
        correct:    "He is working at a café.",
        explanation: "After 'is' the verb needs the -ing form, not the base form.",
      },
      {
        incorrect:  "She are reading a book.",
        correct:    "She is reading a book.",
        explanation: "He/She/It uses 'is', NOT 'are'. Only You/We/They use 'are'.",
      },
      {
        incorrect:  "I am study for my exam.",
        correct:    "I am studying for my exam.",
        explanation: "After 'am' the verb takes -ing (am studying), not the base form.",
      },
      {
        incorrect:  "He are working hard.",
        correct:    "He is working hard.",
        explanation: "He is singular — use 'is', not 'are'. Watch the am/is/are agreement!",
      },
      {
        incorrect:  "I am work.",
        correct:    "I am working.",
        explanation: "'I am' always needs a verb with -ing in the Present Continuous.",
      },
      {
        incorrect:  "She are going to school.",
        correct:    "She is going to school.",
        explanation: "Every 3rd person singular pairs with 'is', not 'are'.",
      },
      {
        incorrect:  "They am playing football.",
        correct:    "They are playing football.",
        explanation: "'They' is plural — use 'are', not 'am'. The rule: I→am, he/she/it→is, you/we/they→are.",
      },
    ],

    review: [
      "Form = am / is / are + verb-ing  (short answer: am I?  is he?  are you?)",
      "NOW use: Listen! / Look! / right now / at the moment = almost always Present Continuous",
      "Stative verbs (know, love, own, believe…) → NO continuous",
      "Present Continuous for temporary situations: 'I'm staying with a friend this week' ✔",
      "Present Continuous for arranged future plans: 'We're going to Spain in June' ✔",
      "Three key keywords: right now · at the moment · currently",
    ],

    qa: [
      {
        question: "Choose the correct form: 'Right now she ___ (read) a book.'",
        answer:  "is reading — 'right now' is the key signal for Present Continuous",
      },
      {
        question: "Which tense is wrong here and why: 'I am know the answer.'",
        answer:  "Present Continuous is wrong — 'know' is a stative verb. Say: 'I know the answer.'",
      },
      {
        question: "Present Simple or Continuous? 'Every Sunday I ___ (visit) my grandmother.'",
        answer:  "Present Simple: 'visit' — habits/routines with 'every Sunday'",
      },
      {
        question: "Convert: 'She works in London.' → 'But this month she ___ (work) in Manchester.'",
        answer:  "is working — temporary change from the usual situation triggers Present Continuous",
      },
      {
        question: "Future plan: 'We ___ (go) to the beach this weekend.' (already arranged ticket bought)",
        answer:  "'re going — confirmed plan already arranged = Present Continuous for future",
      },
    ],

    exercises: [
      { question: "I ___ a book right now.",       options: ["read","reading","am reading","reads"], answer: "am reading" },
      { question: "She ___ dinner at the moment.", options: ["cook","cooks","is cooking","cooked"], answer: "is cooking" },
    ],
  },

  /* ═══════════════════════════════════════════════════════════
   * en-gram-3 — Articles: A, An, The
   * ═══════════════════════════════════════════════════════════ */
  {
    id: "en-gram-3",
    title: "Articles: A, An, The",
    level: 1,
    topic: "Nouns",
    anchorSectionId: "rules",

    overview:
      "English has three articles — **a**, **an**, and **the** — and the 'zero article' (no article). Choosing the right one is one of the most common struggles for advanced learners.",

    body: `## Articles in English

English has three articles: **a**, **an**, and **the**.

**A / An** (indefinite — any one of a group)
- Use **a** before consonant sounds: *a cat*, *a university*
- Use **an** before vowel sounds: *an apple*, *an hour*

**The** (definite — a specific one)
- *The sun is bright.* (only one sun)
- *I saw the movie you recommended.* (specific movie)

**No article:** general plural or uncountable
- *I like dogs.* (dogs in general)
- *Water is important.* (water in general)

**Key rule:** First mention = a/an; second mention = the
- *I saw **a** cat. **The** cat was black.*`,

    rulesTable: [
      {
        rule:     "A — consonant sounds",
        structure:"a + consonant SOUND",
        example:  "a university / a European country",
        usage:    "'University' starts with /j/ — consonant SOUND",
      },
      {
        rule:     "An — vowel sounds",
        structure:"an + vowel SOUND",
        example:  "an hour / an honest man",
        usage:    "'Hour' starts with /aʊ/ — vowel SOUND",
      },
      {
        rule:     "The — unique object",
        structure:"the + super-specific / unique thing",
        example:  "The sun is bright. The Eiffel Tower is famous.",
        usage:    "Only one in existence",
      },
      {
        rule:     "The — second mention",
        structure:"the + already-mentioned thing",
        example:  "I bought a car. The car is red.",
        usage:    "Listener knows which one",
      },
      {
        rule:     "The — plural / uncountable general",
        structure:"the + plural / uncountable",
        example:  "The whales are endangered. The French are polite.",
        usage:    "Specific group / nationality as people",
      },
      {
        rule:     "No article — plural general",
        structure:"no article + plural noun",
        example:  "I like dogs. Cats are beautiful.",
        usage:    "Categories / generalisations",
      },
      {
        rule:     "No article — uncountable",
        structure:"no article + uncountable noun",
        example:  "Water is important. I like music.",
        usage:    "Abstract concepts / substances",
      },
      {
        rule:     "A / An — job / profession",
        structure:"a/an + job name",
        example:  "She is a doctor. He is an engineer.",
        usage:    "Indefinite profession",
      },
      {
        rule:     "A / An — singular number",
        structure:"a/an + one / hundred / thousand",
        example:  "a hundred, an hour, a minute",
        usage:    "Used as individual units, not exact quantities",
      },
      {
        rule:     "No article — meals / languages",
        structure:"no article",
        example:  "I eat breakfast at 8. She speaks French.",
        usage:    "Meals, languages, sports, games",
      },
    ],

    conjugationTable: {
      header: "Article | Before | Sound / Rule | Example",
      rows: [
        ["a",   "CAT",              "consonant sound /k/",  "a cat"],
        ["a",   "UNIVERSITY",        "consonant SOUND /j/",  "a university"],
        ["an",  "APPLE",             "vowel sound /æ/",     "an apple"],
        ["an",  "HONEST",            "vowel SOUND /ɒ/",     "an honest answer"],
        ["the", "SUN (unique)",      "only one in the world","the sun"],
        ["the", "CAT (known)",       "second mention",       "The cat runs."],
        ["no",  "DOGS (plural gen.)","plural general",       "Dogs are loyal."],
        ["no",  "WATER",             "uncountable substance", "Water is clear."],
      ],
    },

    timeExpressions: {
      header: "Rule / Trigger | Article | Example",
      rows: [
        ["Names with 'Republic / States / Kingdom'", "the",  "the United States, the Netherlands"],
        ["Rivers / Mountains / Oceans / Deserts",  "the",  "the Amazon, the Alps, the Atlantic"],
        ["Most countries / cities / islands",      "no",   "France, Paris, Iceland"],
        ["Languages / meals",                       "no",   "I speak French. I eat breakfast."],
        ["'Most …' / 'All …'",                     "the",  "Most people agree."],
        ["Superlatives",                            "the",  "She is the best player."],
        ["Ordinals (first, last, next…)",          "the",  "The last chapter was hard."],
        ["Musical instruments",                     "the",  "She plays the piano."],
      ],
    },

    details: [
      {
        title: "1. The A vs. AN Confusion",
        body: `## Sound, not spelling!
The a/an rule is about **SOUND**, not the first letter of the word.

| Word | First letter | Sound | Article |
|---|---|---|---|
| university | u | /j/ (consonant) | **a** university |
| hour       | h | /aʊ/ (vowel)   | **an** hour |
| umbrella   | u | /ʌ/ (vowel)     | **an umbrella** |
| European   | E | /j/ (consonant) | **a** European **country** |`,
      },
      {
        title: "2. When to Use THE",
        body: `## Categories that always take 'the'
| Category | Examples |
|---|---|
| 🌊 Rivers | the Thames, the Nile |
| 🏔️ Mountain ranges | the Alps, the Rockies |
| 🏜️ Deserts | the Sahara, the Gobi |
| 🌊 Seas / Oceans | the Atlantic, the Red Sea |
| 🌍 Unique things | the sun, the moon, the earth |
| 🏰 Buildings | the Eiffel Tower, the Louvre |
| 📰 Newspapers | The Times, The Guardian |
| 🎵 Grammatical superlative | The best, the biggest, the tallest |`,
      },
      {
        title: "3. When NO Article is Used",
        body: `## Zero article = no article!
### Countable nouns (plural)
*Dogs are loyal.* — all dogs as a category

### Uncountable nouns
*Water is essential.* — water as a substance

### Languages
*She speaks Spanish.* — language names (no article)

### Countries (single country names)
*France is beautiful.* — no 'the'
> Exception: *the Netherlands, the US, the UK, the Philippines*

### Meals & Sports
*I eat breakfast at 7 a.m.* / *I play tennis.*`,
      },
    ],

    callouts: [
      {
        type:  "remember",
        label: "Onthoud",
        text:  "A vs AN is over de **klank**, niet de letter: *a university* (klank /j/ = medeklinker), *an hour* (klank /aʊ/ = klinker).",
      },
      {
        type:  "tip",
        label: "Tip",
        text:  "'The' wordt voor de tweede keer genoemd: *I bought **a** pen. **The** pen is blue.*",
      },
      {
        type:  "remember",
        label: "Onthoud",
        text:  "Zin je over ALLE / ALLES in een groep: 'Dogs are loyal' = geen article. Zin je over ÉÉN bekend ding: '**The** dog is friendly.' = the.",
      },
      {
        type:  "note",
        label: "Opmerking",
        text:  "'She is **a** French' = ❌. Zeg: 'She is **French**' (nationaliteit) of 'She is **a** French **woman**' (beroep/status).",
      },
    ],

    commonMistakes: [
      {
        incorrect:  "I saw elephant at the zoo.",
        correct:    "I saw an elephant at the zoo.",
        explanation: "Singular countable nouns need an article before them — 'an elephant', not just 'elephant'.",
      },
      {
        incorrect:  "I ate a breakfast.",
        correct:    "I ate breakfast.",
        explanation: "Meals (breakfast, lunch, dinner) take no article — unless describing it: 'a good breakfast'.",
      },
      {
        incorrect:  "She is a French.",
        correct:    "She is French.",
        explanation: "Nationalities as adjectives/identity take no article — use 'a' only for profession: 'a French chef'.",
      },
      {
        incorrect:  "He is in a prison.",
        correct:    "He is in prison.",
        explanation: "Institutions (school, prison, hospital) take zero article when referring to their primary purpose.",
      },
      {
        incorrect:  "I like the music.",
        correct:    "I like music.",
        explanation: "General preference for music as a category uses zero article — 'the music' implies specific music.",
      },
      {
        incorrect:  "She has a long hair.",
        correct:    "She has long hair.",
        explanation: "'Hair' as a general description/uncountable takes no article. Only 'the hair' if specific.",
      },
      {
        incorrect:  "We watched TV in a morning.",
        correct:    "We watched TV in the morning.",
        explanation: "Parts of the day (morning, afternoon, evening) use 'the': in the morning, in the evening.",
      },
      {
        incorrect:  "Going to a France next year.",
        correct:    "Going to France next year.",
        explanation: "Country names (most) are used with no article — 'France', 'Germany', 'Japan'.",
      },
    ],

    review: [
      "a + consonant SOUND (not letter): a university ✓, a European ✘",
      "an + vowel SOUND: an hour ✓, an hour-gall ✘",
      "the = specific / unique / second mention",
      "No article before plural countables when speaking generally: Dogs are loyal.",
      "No article before uncountable substances: Coffee is hot. Water is clear.",
      "Languages / meals / sports / games = NO article: She speaks French. I eat breakfast.",
      "Superlatives and ordinals always need 'the': The best, The first, The tallest",
    ],

    qa: [
      {
        question: "Fill in the blank: 'She is ___ honest person.'",
        answer:  "an — 'h' is silent, so it starts with a vowel SOUND /ɒ/",
      },
      {
        question: "After buying a book, you say: '___ book is great.' Which article?",
        answer:  "The — second mention, the listener now knows which book",
      },
      {
        question: "Correct them: 'I am a student in University of Amsterdam.'",
        answer:  "a student at the University of Amsterdam — institutions take the; also 'at' not 'in' for enrolment",
      },
      {
        question: "Song exercise: He plays ___ guitar. Correct article?",
        answer:  "the — musical instruments always take 'the': the piano, the guitar",
      },
      {
        question: "Which is correct? 'We ate ___ dinner at ___ restaurant.'",
        answer:  "We ate dinner at a restaurant. (meals = no article. First mention = a)",
      },
    ],

    exercises: [
      { question: "I saw ___ elephant at the zoo.",      options: ["a","an","the","no article"], answer: "an" },
      { question: "___ sun rises in the east.",          options: ["A","An","The","No article"], answer: "The" },
      { question: "She is ___ best student in class.",   options: ["a","an","the","no article"], answer: "the" },
    ],
  },
];
