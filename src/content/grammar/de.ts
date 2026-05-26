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
> - **Sie** und **wir** haben immer die volle**-en** in der formellen und schriftlichen Sprache.
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
      "Das **Präsens** verwendest du für **jetzt**, **immer** und **regelmäßig** geschehende Dinge.",
      "Der **Stamm** = Infinitiv ohne **-en** (machen → mach-, lernen → lern-, spielen → spiel-).",
      "Endungen für regelmäßige Verben: **-e / -st / -t / -en / -t / -en** (6. Person).",
      "**Ich** bekommt immer **-e** (dominante Erstperson-Aussprache im gesprochenen Deutsch).",
      "**Du** bekommt **-st**; **er/sie/es** bekommt nur **-t**.",
      "**Wir / ihr / sie** erhalten immer die volle **-en / -t / -en** Endung.",
      "In der **Umgangssprache** fällt die Endung bei *ich* oder *du* teilweise weg (*Ich mach(e)*).",
      "Achte auf die Aussprache von **pf, ts, tsch, z** und anderen deutschen Konsonanten!",
      "Negation: **nicht** hinter dem Verb oder am Satzende: *Ich lerne **nicht***.",
      "**Regelmäßige Verben**: *sein, haben, werden* — diese lernst du später getrennt.",
      "Häufige Anlautkombinationen wie **pf, ts, tsch** üben.",
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
        question: "Wähle: Ich ___ Deutsch.",
        options: ["lerne", "lernst"],
        answer: "lerne",
      },
      {
        question: "Wähle: Er ___ Fußball.",
        options: ["spielt", "spielen"],
        answer: "spielt",
      },
      {
        question: "Wähle: Wir ___ Pizza.",
        options: ["machen", "machst"],
        answer: "machen",
      },
    ],
  },

  // ── Les 2: Präsens: Regelmäßige Verben ────────────────────────────────
  {
    id: "de-gram-pres-regular",
    title: "Präsens: Regelmäßige Verben",
    level: 1,
    topic: "Verben",
    anchorSectionId: "rules",

    overview:
      "Das **Präsens** verwendest du für Dinge, die **jetzt** geschehen, immer geschehen oder regelmäßig geschehen. Die meisten deutschen Verben enden auf **-en**. Um die Endungen bilden zu können, bestimmt man zuerst den **Stamm** (Infinitiv ohne -en) und hängt die Endung an.",

    rulesTable: [
      {
        rule:     "Stamm bestimmen",
        structure:"Infinitiv ohne -en",
        example:  "machen → mach-, lernen → lern-, spielen → spiel-",
        usage:    "Zuerst immer den Stamm bestimmen, bevor du die Endung hinzufügst.",
      },
      {
        rule:     "Endungen — 6 Personen",
        structure:"ich: -e / du: -st / er: -t / wir: -en / ihr: -t / sie/Sie: -en",
        example:  "ich mache, du machst, er macht, wir machen, ihr macht, sie machen",
        usage:    "Die Standardendungen für alle regelmäßigen Verben auf -en.",
      },
      {
        rule:     "Umgangssprachliche Kurzung",
        structure:"Stamm + e (verallgemeinert im gesprochenen Deutsch)",
        example:  "Ich mach(e) das. Wir geh(en) nach Haus.",
        usage:    "Im Alltag werden Endungen oft zusammengezogen oder sogar weggelassen.",
      },
    ],

    conjugationTable: {
      header: "Verb | ich | du | er/sie/es | wir | ihr | sie/Sie",
      rows: [
        ["machen",  "mache",  "machst", "macht",  "machen", "macht", "machen"],
        ["lernen",  "lerne",  "lernst", "lernt",  "lernen", "lernt", "lernen"],
        ["spielen", "spiele", "spielst","spielt", "spielen","spielt","spielen"],
      ]
    },

    details: [
      {
        title: "Übung: Stamm und Endung trennen",
        body: `## Wie bilde ich das Präsens selbst?

| Schritt | Was du tust |
|---------|-------------|
| 1 | Nimm das **Infinitiv** (z. B. *machen*) |
| 2 | Entferne **-en** → Stamm (*mach-*) |
| 3 | Hänge die passende **Endung** an |

| Person | Endung | Beispiel |
|--------|--------|----------|
| ich | -e | **mache** |
| du | -st | **machst** |
| er/sie/es | -t | **macht** |
| wir | -en | **machen** |
| ihr | -t | **macht** |
| sie / Sie | -en | **machen** |`,
      },
    ],

    callouts: [
      {
        type:  "remember" as const,
        label: "Achtung",
        text:  "Nicht alle Verben folgen dieser Regel: *sein*, *haben* und *werden* sind unregelmäßig. Die lernst du separat.",
      },
    ],

    review: [
      "**Stamm** = Infinitiv ohne -en",
      "Präsens — ich: -e, du: -st, er: -t, wir/ihr/sie: -en",
      "Umgangssprache: Endungen fallen oft weg (*Ich mach(e)*, *Wir geh(en)*)",
      "Unregelmäßig am Anfang: *sein, haben, werden*",
    ],

    qa: [
      { question: "Was ist der Stamm von 'machen'?", answer: "**mach-**" },
      { question: "Welche Endung bekommt 'du' bei 'machen'?", answer: "**du machst** (-st)" },
      { question: "Wie sagst du 'wir spielen'?", answer: "**wir spielen** (Stamm + -en)" },
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