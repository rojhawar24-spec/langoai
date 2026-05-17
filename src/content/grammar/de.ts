import type { GrammarLesson } from "../types";

export const deGrammar: GrammarLesson[] = [
  // ── Les 1: Er is / Er zijn ─────────────────────────────
  {
    id: "de-gram-1",
    title: "Er is / Er zijn (Basis existentie)",
    level: 1,
    topic: "Grammatica",
    anchorSectionId: "rules",

    overview:
      "De **onvoltooid tegenwoordige tijd** (OTT) gebruik je voor wat nu, altijd of regelmatig gebeurt. De meeste werkwoorden eindigen op **-en**. De stam maak je door **-en** weg te halen.",

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
        question: "Maak correct: 'Er ___ een probleem.'",
        answer: "Er **is** een probleem (enkelvoud).",
      },
      {
        question: "Maak correct: 'Er ___ twee problemen.'",
        answer: "Er **zijn** twee problemen (meervoud).",
      },
      {
        question: "Vraagzin: 'Er is tijd.' → '…?'",
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
    id: "de-gram-ott-simple",
    title: "OTT: Regelmatige werkwoorden",
    level: 1,
    topic: "Werkwoorden",
    anchorSectionId: "rules",

    overview:
      "De **onvoltooid tegenwoordige tijd** (OTT) gebruik je voor wat nu, altijd of regelmatig gebeurt. De meeste Duitse werkwoorden eindigen op **-en**. De stam maak je door **-en** weg te halen.",

    rulesTable: [
      {
        rule:     "Stam afleiden",
        structure:"infinitief minus -en",
        example:  "machen → mach-, lernen → lern-, spielen → spiel-",
        usage:    "Bepaal altijd eerst de stam voor elke vervoeging."
      },
      {
        rule:     "Uitgangen OTT",
        structure:"stam / stam+t / stam+t / stem+en / stam+en / stem+en",
        example:  "ich mache, du machst, er macht, wir machen, ihr macht, sie machen",
        usage:    "De standaarduitgangen voor regelmatige Duitse werkwoorden."
      },
    ],

    conjugationTable: {
      header: "Persoon | ik | jij | hij/zij/het | wij | jullie | zij/ze",
      rows: [
        ["machen",  "mach",  "machst", "macht",  "machen", "macht", "machen"],
        ["lernen",  "lern",  "lernst", "lernt",   "lernen", "lernt", "lernen"],
        ["spielen", "spiel", "spielst","spielt",  "spielen","spielt","spielen"],
      ]
    },

    details: [
      {
        title: "Stamwisseling: k/z → st/zt",
        body: "Sommige Duitse werkwoorden veranderen de **k** of **z** in **st** of **zt** in de stam:\n\n| Infinitief | Stam | ik-vorm |\n|------------|------|--------|\n| **machen** | mach- | ich mache |\n| **lernen** | lern- | ich lerne |"
      },
    ],

    callouts: [
      {
        type:  "remember",
        label: "Let op",
        text:  "Niet alle werkwoorden volgen deze regel: *sein*, *haben* en *werden* zijn onregelmatig. Die leer je apart."
      },
    ],

    review: [
      "Stam = infinitief zonder -en",
      "OTT: ik stam, jij/u stam+t, hij/zij stam+t",
      "Meervoud: wij/jullie/zij + hele werkwoord (stam+en)",
    ],

    qa: [
      { question: "Wat is de stam van 'machen'?", answer: "mach-" },
      { question: "Welke uitgang krijgt 'du' bij 'machen'?", answer: "du machst" },
      { question: "Hoe zeg je 'wij spielen'?", answer: "wir spielen" },
    ],

    body: "—",
    exercises: [],
  },
];
