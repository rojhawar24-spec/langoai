import type { GrammarLesson } from "../types";

export const enGrammar: GrammarLesson[] = [
  // ── Lesson 1: Present Simple ─────────────────────────────
  {
    id: "en-gram-ott-simple",
    title: "Present Simple",
    level: 1,
    topic: "Verbs",
    anchorSectionId: "rules",

    body: "—",

    overview:
      "The **Present Simple** is used for habits, facts, and routines. Most verbs use their base form — only **he / she / it** takes an **-s** at the end.",

    conceptCards: [
      {
        title: "I / you / we / they",
        structure: "subject + base verb (no 'to')",
        example: "I work · you play · we live · they speak",
      },
      {
        title: "He / she / it",
        structure: "subject + verb + s",
        example: "he works · she plays · it rains",
      },
      {
        title: "To be",
        structure: "am / are / is (fully irregular)",
        example: "I am · you are · he/she/it is · we are",
      },
      {
        title: "To have",
        structure: "have → has (only he/she/it)",
        example: "I have · you have · he/she/it has · they have",
      },
    ],

    rulesTable: [
      {
        rule: "Base rule",
        structure: "I / you / we / they + verb (no 'to')",
        example: "I work, you play, we live, they speak",
        usage: "For all persons except he / she / it.",
      },
      {
        rule: "3rd person singular",
        structure: "he / she / it + verb + s",
        example: "he works, she plays, it rains",
        usage: "Only with he, she, it you add -s.",
      },
      {
        rule: "Spelling: -s / -es",
        structure: "verbs ending in -s, -ss, -sh, -ch, -x, -o → add -es",
        example: "kiss → kisses · watch → watches · go → goes",
        usage: "Learn the spelling patterns (not random!).",
      },
      {
        rule: "Spelling: consonant + y",
        structure: "consonant + y → y → ies",
        example: "study → studies · carry → carries",
        usage: "Keep the consonant, change y to ies.",
      },
      {
        rule: "Spelling: vowel + y",
        structure: "vowel + y → add -s",
        example: "play → plays · buy → buys",
        usage: "No change to y.",
      },
      {
        rule: "To be — irregular",
        structure: "am / are / is",
        example: "I am, you are, he/she/it is, we are, you are, they are",
        usage: "Learn it first.",
      },
      {
        rule: "To have",
        structure: "have / has",
        example:
          "I have, you have, he/she/it has, we have, you have, they have",
        usage: "Only he/she/it gets 'has'.",
      },
    ],

    conjugationTable: {
      header: "Person | TO WORK | TO PLAY | TO BE | TO HAVE",
      rows: [
        ["I", "work", "play", "am", "have"],
        ["you", "work", "play", "are", "have"],
        ["he/she/it", "works", "plays", "is", "has"],
        ["we", "work", "play", "are", "have"],
        ["you (plural)", "work", "play", "are", "have"],
        ["they", "work", "play", "are", "have"],
      ],
    },

    details: [
      {
        title: "How to form Present Simple",
        body: `## Quick recipe

1) Pick the **subject**: I / you / we / they OR he / she / it.
2) If it’s **he / she / it**, use **verb + -s** (and apply spelling rules).
3) Otherwise, use the **base verb**.

---

## Spelling rules (most common)

- **-s, -ss, -sh, -ch, -x, -o** → add **-es**
  *(kiss → kisses, watch → watches, go → goes)*

- **consonant + y** → **y → ies**
  *(study → studies, carry → carries)*

- **vowel + y** → add **-s**
  *(play → plays, buy → buys)*

---

## Irregular verbs

- **to be**: am / are / is
- **to have**: have / has (only has with he/she/it)`,
      },
      {
        title: "Negatives and questions",
        body: `## Negatives (do not / does not)

- **I/you/we/they**: **don’t** + base verb
  *(I don’t work.)*
- **he/she/it**: **doesn’t** + base verb
  *(He doesn’t work.)*

## Questions (Do / Does)

- **Do + subject + base verb?**
  *(Do you work?)*
- **Does + subject (he/she/it) + base verb?**
  *(Does she work?)*`,
      },
    ],

    callouts: [
      {
        type: "remember",
        label: "Remember",
        text: "The **-s** goes only with **he, she, it**. With all other subjects, the verb stays the same.",
      },
      {
        type: "key",
        label: "Key point",
        text: "**To be** is fully irregular: **am / are / is**. Learn it first.",
      },
    ],

    review: [
      "Present Simple: habits, facts, routines",
      "I/you/we/they + base verb",
      "he/she/it + verb + s (-es, -ies rules apply)",
      "to be: am / are / is",
      "to have: have / has",
      "Negatives: don’t / doesn’t · Questions: Do / Does",
    ],

    qa: [
      {
        question: "What do you use with 'I' in Present Simple?",
        answer: "I + base verb (no -s): I work.",
      },
      {
        question: "What is the 3rd person singular of 'to work'?",
        answer: "works (he works).",
      },
      {
        question: "What is the correct 'to be' form for 'he'?",
        answer: "he is.",
      },
      {
        question: "What is the correct 'to have' form for 'she'?",
        answer: "she has.",
      },
      {
        question: "Form a question: 'you work'?",
        answer: "Do you work?",
      },
      {
        question: "Form a question: 'he play'?",
        answer: "Does he play?",
      },
    ],

    commonMistakes: [
      {
        incorrect: "She have a car.",
        correct: "She has a car.",
        explanation: "Only **he/she/it** takes **has** in Present Simple.",
      },
      {
        incorrect: "He work every day.",
        correct: "He works every day.",
        explanation: "With **he/she/it**, add **-s** to the verb.",
      },
    ],

    exercises: [
      {
        question: "Choose: I ___ (work).",
        options: ["work", "works"],
        answer: "work",
      },
      {
        question: "Choose: He ___ (play).",
        options: ["plays", "play"],
        answer: "plays",
      },
      {
        question: "Choose: She ___ (go) to school.",
        options: ["go", "goes"],
        answer: "goes",
      },
      {
        question: "Choose: They ___ (study) every day.",
        options: ["studies", "study"],
        answer: "study",
      },
    ],
  },

  // ── Lesson 2: Regular verbs (present simple patterns) ─
  {
    id: "en-gram-regular-verbs-1",
    title: "Regular verbs (Present Simple)",
    level: 1,
    topic: "Verbs",
    anchorSectionId: "rules",

    body: "—",

    overview:
      "Most verbs form the Present Simple in a simple way: **-s** (or spelling changes) only for **he / she / it**.",

    rulesTable: [
      {
        rule: "He / she / it",
        structure: "verb + -s / -es / -ies",
        example: "watches · plays · studies",
        usage: "Use spelling rules for the last letters.",
      },
      {
        rule: "Other subjects",
        structure: "base verb",
        example: "I work · you play · we live",
        usage: "No -s with I/you/we/they.",
      },
    ],

    conjugationTable: {
      header: "Person | work | play | study",
      rows: [
        ["I", "work", "play", "study"],
        ["you", "work", "play", "study"],
        ["he/she/it", "works", "plays", "studies"],
        ["we", "work", "play", "study"],
        ["you (plural)", "work", "play", "study"],
        ["they", "work", "play", "study"],
      ],
    },

    details: [
      {
        title: "Spelling map",
        body: `## Last letters determine the spelling

- verb ends with **-s, -sh, -ch, -x, -o** → **add -es**
  *(go → goes, watch → watches)*

- verb ends with **consonant + y** → **y → ies**
  *(study → studies, carry → carries)*

- verb ends with **vowel + y** → **add -s**
  *(play → plays, buy → buys)*`,
      },
    ],

    callouts: [
      {
        type: "tip",
        label: "Tip",
        text: "When you learn a verb, also learn what it does in **he/she/it**: *watch → watches*, *study → studies*, etc.",
      },
    ],

    review: [
      "Only he/she/it takes -s",
      "-s endings often need -es",
      "consonant + y → ies",
      "vowel + y → -s",
    ],

    qa: [
      {
        question: "What is 'he goes' from 'to go'?",
        answer: "go → goes",
      },
      {
        question: "What is 'he studies' from 'to study'?",
        answer: "study → studies",
      },
    ],

    exercises: [
      {
        question: "Choose: She ___ (watch) TV on Mondays.",
        options: ["watch", "watches"],
        answer: "watches",
      },
      {
        question: "Choose: He ___ (carry) a bag.",
        options: ["carry", "carries"],
        answer: "carries",
      },
    ],
  },
];

