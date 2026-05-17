import type { GrammarLesson } from "../types";

export const deGrammar: GrammarLesson[] = [
  // ── Les 1: Präsens (Gegenwart) ─────────────────────────────
  {
    id: "de-gram-1",
    title: "Präsens — Grundlagen",
    level: 1,
    topic: "Grammatik",
    anchorSectionId: "rules",

    overview:
      "Mit der **Präsens** sprichst du über Dinge, die jetzt geschehen, immer geschehen oder regelmäßig geschehen. Die meisten deutschen Verben enden auf **-en**: entferne **-en** um den **Stamm** zu erhalten.",

    body: `## Präsens (Gegenwart)

Mit der **Präsens** sagst du, was jetzt geschieht, was immer geschieht oder was regelmäßig geschieht.

- Ich **lerne** Deutsch. (jetzt)
- Sie **wohnt** in Berlin. (immer)
- Wir **gehen** jeden Samstag einkaufen. (regelmäßig)

**Verben auf -en**
- Die meisten deutschen Verben enden auf **-en**.
- Der **Stamm** = Infinitiv ohne **-en**.
- lernen → **lern**- ist der Stamm

**Umgangssprachlich**
- In der Umgangssprache sagst du häufig **ich mach(e)** oder **wir geh** statt der vollständigen Formen.
- Die verkürzten Formen sind in Alltagssituationen völlig normal.

**Negation**
- Ich **lerne** nicht Deutsch.
- Sie **wohnt** nicht in Berlin.

**Fragesätze**
- **Lernst** du Deutsch?
- **Wohnt** sie in Berlin?`,

    rulesTable: [
      {
        rule:     "Stamm bestimmen",
        structure:"Infinitiv ohne -en",
        example:  "lernen → lern-, spielen → spiel-, machen → mach-",
        usage:    "Zuerst immer den Stamm bestimmen.",
      },
      {
        rule:     "Personale Endungen",
        structure:"-e / -st / -t / -en / -t / -en",
        example:  "ich lern**e**, du lern**st**, er/sie/es lern**t**, wir lern**en**, ihr lern**t**, sie/Sie lern**en**",
        usage:    "Die sechs Endungen für regelmäßige Verben.",
      },
      {
        rule:     "Umgangssprachliche Formen",
        structure:"Stamm (ohne Endung or + e)",
        example:  "ich mach(e), wir geh(en)",
        usage:    "In der gesprochenen Sprache: die Endung wird oft weggelassen oder nur -e.",
      },
      {
        rule:     "Negation",
        structure:"Subjekt + Stamm + nicht + …",
        example:  "Ich lerne nicht. Sie wohnt nicht hier.",
        usage:    "**nicht** verneint das gesamte Verb or die Aussage.",
      },
    ],

    conjugationTable: {
      header: "Verb | ich | du | er/sie/es | wir | ihr | sie/Sie",
      rows: [
        ["machen", "mache", "machst", "macht", "machen", "macht", "machen"],
        ["lernen", "lerne", "lernst", "lernt", "lernen", "lernt", "lernen"],
        ["spielen","spiele","spielst","spielt","spielen","spielt","spielen"],
      ]
    },

    details: [
      {
        title: "Umgangssprache & formelles Alternativ",
        body: `## Regelmäßige Verben – Präsens

| Person | Endung | Beispiel *lernen* |
|--------|--------|-------------------|
| ich    | -**e** | ich **lerne** |
| du     | -**st**| du **lernst** |
| er/sie/es | -**t**| er **lernt** |
| wir    | -**en**| wir **lernen** |
| ihr    | -**t** | ihr **lernt** |
| sie/Sie | -**en**| sie **lernen** |

> **Merke:** In der **gesprochenen Sprache** wird die Endung oft weggelassen oder auf **-e** reduziert:
> - ich mach**e** · wir geh**en** · du lern**st**
> - **Sie** und **wir** haben immer die vollständige Endung **-en** in der formellen und schriftlichen Sprache.
> - **Umgangssprachlich** ist auch die **-t**-Endung bei du zwischendurch wegfallen: *du lern*, *du geh*

> **Tip:** Die vollständigen Endungen (-e, -st, -t, -en, -t, -en) lernst du zuerst, dann übst du die umgangssprachlichen Einschränkungen.`,
      },
    ],

    callouts: [
      {
        type: "key",
        label: "Merke",
        text: "Personale Endungen: **-e / -st / -t / -en / -t / -en**. Immer zuerst den **Stamm** bestimmen.",
      },
    ],

    commonMistakes: [
      {
        incorrect: "Er lernst Deutsch.",
        correct: "Ich lerne Deutsch.",
        explanation: "**Ich** ist der Subjekt → es braucht die **1. Person Endung -e**.",
      },
      {
        incorrect: "Wir lernen.",
        correct: "Ihr lernt.",
        explanation: "**Ihr** ist 2. Person Plural → Endung **-t** (ihr lern**t**).",
      },
    ],

    review: [
      "Präsens = jetzt, immer, regelmäßig",
      "Stamm = Infinitiv ohne -en",
      "Endungen: -e / -st / -t / -en / -t / -en",
      "Umgangssprache: Endungen oft reduziert",
    ],

    qa: [
      {
        question: "Bilde korrekt: 'Ich ___ Deutsch.'",
        answer: "Ich **lerne** Deutsch (1. Person: -e Endung).",
      },
      {
        question: "Bilde korrekt: 'Er ___ Deutsch.'",
        answer: "Er **lernt** Deutsch (3. Person: -t Endung).",
      },
      {
        question: "Negation: 'Ich lerne Deutsch' → '…?'",
        answer: "Ich **lerne nicht** Deutsch.",
      },
      {
        question: "Was ist der Stamm von 'machen'?",
        answer: "**mach**-",
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
        rule:     "Stamm bestimmen",
        structure:"Infinitiv ohne -en",
        example:  "machen → mach-, lernen → lern-, spielen → spiel-",
        usage:    "Zuerst immer den Stamm bestimmen.",
      },
      {
        rule:     "Endungen Präsens",
        structure:"-e / -st / -t / -en / -t / -en",
        example:  "ich mache, du machst, er macht, wir machen, ihr macht, sie machen",
        usage:    "Die Endungen für regelmäßige Verben.",
      },
    ],

    conjugationTable: {
      header: "Verb | ich | du | er/sie/es | wir | ihr | sie/Sie",
      rows: [
        ["machen", "mache", "machst", "macht", "machen", "macht", "machen"],
        ["lernen", "lerne", "lernst", "lernt", "lernen", "lernt", "lernen"],
        ["spielen","spiele","spielst","spielt","spielen","spielt","spielen"],
      ]
    },

    details: [
      {
        title: "Umgangssprachliche Verkürzungen",
        body: `## Präsens-Tabelle

| Person | Endung | Beispiel |
|--------|--------|----------|
| ich    | -e | ich **mache** |
| du     | -st | du **machst** |
| er/sie/es | -t | er **macht** |
| wir    | -en | wir **machen** |
| ihr    | -t | ihr **macht** |
| sie/Sie | -en | sie **machen** |

## Umgangssprache

In der **gesprochenen Umgangssprache** fallen Endungen oft weg oder werden auf **-e** beschränkt:

- Ich mach**e** dich fertig. *(vollständig)*
- Wir geh**en** nach Haus. *(vollständig)*  
- Du lern**st** super! *(vollständig)*

> **Tip:** Die vollständigen Endungen lernst du zuerst wie in der Schule. Die umgangssprachlichen Auslassungen sind etwas, das du später durch Wiederholung übst.`,
      },
    ],

    callouts: [
      {
        type:  "remember",
        label: "Let op",
        text:  "Nicht alle Verben folgen dieser Regel: *sein*, *haben* und *werden* sind unregelmäßig. Die lernst du separat.",
      },
    ],

    review: [
      "Stamm = Infinitiv ohne -en",
      "OTT: ich stam, du stam+st, er/sie stam+t",
      "Mehrzahl: wir/ihr/sie + ganzes Verb (stam+en)",
    ],

    qa: [
      { question: "Was ist der Stamm von 'machen'?", answer: "mach-" },
      { question: "Welche Endung bekommt 'du' bei 'machen'?", answer: "du machst" },
      { question: "Wie sagst du 'wir spielen'?", answer: "wir spielen" },
    ],

    conceptCards: [
      {
        title: "Stamm bestimmen",
        structure: "Infinitiv minus -en",
        example: "machen → mach-, lernen → lern-, spielen → spiel-",
      },
      {
        title: "ich (1. Person)",
        structure: "Stamm + e",
        example: "ich mache · ich lerne · ich spiele",
      },
      {
        title: "du (2. Person)",
        structure: "Stamm + st",
        example: "du machst · du lernst · du spielst",
      },
      {
        title: "er/sie/es (3. Person)",
        structure: "Stamm + t",
        example: "er macht · sie lernt · es spielt",
      },
    ],

    body: "—",
    exercises: [],
  },
];