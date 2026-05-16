import type { GrammarLesson } from "../types";

export const nlGrammar: GrammarLesson[] = [
  {
    id: "nl-gram-1",
    title: "Er is / Er zijn (Basis existentie)",
    level: 1,
    topic: "Grammatica",
    anchorSectionId: "rules",

    overview:
      "In het Nederlands gebruik je **er is** of **er zijn** om te zeggen dat er **iets/iemand bestaat** (aanwezigheid).",

    body: `## Er is / Er zijn

**Er is** = 1 ding (enkelvoud)
- Er is een stoel.
- Er is een probleem.

**Er zijn** = meerdere dingen (meervoud)
- Er zijn twee stoelen.
- Er zijn veel mensen.

**Negatief**
- Er is geen tijd.
- Er zijn geen stoelen.

**Vragen**
- Is er tijd?
- Zijn er stoelen?`,

    rulesTable: [
      {
        rule: "Er is",
        structure: "er + is + (enkelvoud)",
        example: "Er is een stoel.",
        usage: "Aanwezigheid van 1 ding / enkelvoud",
      },
      {
        rule: "Er zijn",
        structure: "er + zijn + (meervoud)",
        example: "Er zijn twee stoelen.",
        usage: "Aanwezigheid van meerdere dingen / meervoud",
      },
      {
        rule: "Negatief",
        structure: "er + is/zijn + geen + (zelfstandig naamwoord)",
        example: "Er is geen koffie. Er zijn geen stoelen.",
        usage: "Geen = ontkenning van bestaan/aanwezigheid",
      },
      {
        rule: "Vraagvorm",
        structure: "Is/Zijn + er + …?",
        example: "Is er tijd? Zijn er stoelen?",
        usage: "Voor vragen: Is/Zijn voorop",
      },
    ],

    conjugationTable: {
      header: "Vorm | Gebruik | Voorbeeld",
      rows: [
        ["er is", "enkelvoud", "Er is een probleem."],
        ["er zijn", "meervoud", "Er zijn twee problemen."],
      ],
    },

    details: [
      {
        title: "Kernpunt",
        body: `## Onthoud

- **Enkelvoud** → **er is**
- **Meervoud** → **er zijn**

> Let op: **er** is een vulwoord; het zelfstandig naamwoord (enkelvoud/meervoud) bepaalt is/zijn.`,
      },
    ],

    callouts: [
      {
        type: "key",
        label: "Key",
        text: "Enkelvoud = **er is**; meervoud = **er zijn**.",
      },
    ],

    commonMistakes: [
      {
        incorrect: "Er zijn een probleem.",
        correct: "Er is een probleem.",
        explanation: "**Een** is enkelvoud → gebruik **er is**.",
      },
      {
        incorrect: "Er is twee stoelen.",
        correct: "Er zijn twee stoelen.",
        explanation: "**Twee** is meervoud → gebruik **er zijn**.",
      },
    ],

    review: [
      "**Er is** = enkelvoud",
      "**Er zijn** = meervoud",
      "Negatief: **geen** na is/zijn",
      "Vragen: **Is/Zijn er …?**",
    ],

    qa: [
      {
        question: "Maak correct: ‘Er ___ een probleem.’",
        answer: "Er **is** een probleem (enkelvoud).",
      },
      {
        question: "Maak correct: ‘Er ___ twee problemen.’",
        answer: "Er **zijn** twee problemen (meervoud).",
      },
      {
        question: "Vraagzin: ‘Er is tijd.’ → ‘…?’",
        answer: "**Is er** tijd?",
      },
    ],

    exercises: [
      {
        question: "Kies: Er ___ een boek op tafel.",
        options: ["is", "zijn"],
        answer: "is",
      },
      {
        question: "Kies: Er ___ twee boeken op tafel.",
        options: ["is", "zijn"],
        answer: "zijn",
      },
      {
        question: "Kies: Er ___ geen stoelen in de kamer.",
        options: ["is", "zijn"],
        answer: "zijn",
      },
    ],
  },
];

