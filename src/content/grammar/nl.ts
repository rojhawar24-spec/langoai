import type { GrammarLesson } from "../types";

export const nlGrammar: GrammarLesson[] = [
  // ── Les 1: Er is / Er zijn ─────────────────────────────
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

  // ── Les 2: OTT Regelmatige werkwoorden ──────────────────
  {
    id: "nl-gram-ott-simple",
    title: "OTT: Regelmatige werkwoorden",
    level: 1,
    topic: "Werkwoorden",
    anchorSectionId: "rules",

    overview:
      "De **onvoltooid tegenwoordige tijd** (OTT) gebruik je voor wat nu, altijd of regelmatig gebeurt. De meeste werkwoorden eindigen op **-en**. De stam maak je door -en weg te halen.",

    rulesTable: [
      {
        rule:     "Stam afleiden",
        structure:"infinitief minus -en",
        example:  "werken → werk-, leren → leer-, spelen → speel-",
        usage:    "Bepaal altijd eerst de stam voor elke vervoeging."
      },
      {
        rule:     "Uitgangen OTT",
        structure:"stam / stam+t / stam+t / stam+en / stam+en / stam+en",
        example:  "ik werk, jij werkt, hij werkt, wij werken, jullie werken, zij werken",
        usage:    "De standaarduitgangen voor regelmatige werkwoorden."
      },
    ],

    conjugationTable: {
      header: "Persoon | ik | jij | hij/zij/het | wij | jullie | zij/ze",
      rows: [
        ["werken",  "werk",  "werkt", "werkt",  "werken", "werken", "werken"],
        ["leren",   "leer",  "leert", "leert",   "leren",  "leren",  "leren"],
        ["spelen",  "speel", "speelt","speelt",  "spelen", "spelen", "spelen"],
      ]
    },

    details: [
      {
        title: "Stamwisseling: k → s, z → s",
        body: "Sommige werkwoorden veranderen de **k** of **z** in **s** in de stam:\n\n| Infinitief | Stam | ik-vorm |\n|------------|------|--------|\n| **zoeken** | zoek- | ik zoek |\n| **zeggen** | zeg-  | ik zeg |"
      },
    ],

    callouts: [
      {
        type:  "remember",
        label: "Let op",
        text:  "Niet alle werkwoorden volgen deze regel: *zijn* en *hebben* zijn onregelmatig. Die leer je apart."
      },
    ],

    review: [
      "Stam = infinitief zonder -en",
      "OTT: ik stam, jij/u stam+t, hij/zij stam+t",
      "Meervoud: wij/jullie/zij + hele werkwoord (stam+en)",
    ],

    qa: [
      { question: "Wat is de stam van 'werken'?", answer: "werk" },
      { question: "Welke uitgang krijgt 'jij' bij 'leren'?", answer: "leert" },
      { question: "Hoe zeg je 'wij spelen'?", answer: "wij spelen" },
    ],

    body: "—",
    exercises: [],
  },
];