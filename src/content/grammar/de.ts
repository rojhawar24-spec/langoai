import type { GrammarLesson } from "../types";

export const deGrammar: GrammarLesson[] = [
  // ── Les 1: Alphabet / Aussprache ──────────────────────────
  {
    id: "de-uitspraak-1",
    title: "Alphabet – 26 Buchstaben: Vollständige Aussprache",
    level: 1,
    topic: "Aussprache",
    body: "Lerne die deutsche Aussprache mit diesem vollständigen Alphabet-Überblick.",
    overview:
      "Hier findest du das **deutsche Alphabet** mit allen 26 Buchstaben, ihrer Schreibweise, Aussprache und Beispielwörtern.",
    anchorSectionId: "alphabet",
    exercises: [],
    timeExpressions: {
      header: "Ltr | Spelling | Klank | Voorbeelden",
      rows: [
        ["A", "‘aa’", "<strong>a</strong> (kort) / <strong>aa</strong> (lang)", "Apfel, Abend, Fahrrad"],
        ["B", "‘bee’", "<strong>b</strong> (eind → <strong class='text-rose-600'>p</strong>)", "Baby, aber, Lob (klinkt als *lop*)"],
        ["C", "‘tsee’", "<strong>k</strong> / <strong>ts</strong> / <strong>s</strong>", "Computer, Cent, Cello"],
        ["D", "‘dee’", "<strong>d</strong> (eind → <strong class='text-rose-600'>t</strong>)", "Dach, Ende, Hund (klinkt als *hunt*)"],
        ["E", "‘ee’", "<strong>e</strong> (kort) / <strong>ee</strong> (lang) / doffe e", "Esel, Ende, bekommen"],
        ["F", "‘ef’", "<strong>f</strong>", "Fisch, Affe, fünf"],
        ["G", "‘gee’", "<strong>g</strong> (eind → <strong class='text-rose-600'>k</strong>)", "Gans, Lager, Tag (klinkt als *tak*)"],
        ["H", "‘haa’", "<strong>h</strong> (aan begin; stumm na klinker)", "Haus, gehen, sehen"],
        ["I", "‘ee’", "<strong>i</strong> (kort) / <strong>ie</strong> (lang)", "Insel, Igel, Liebe"],
        ["J", "‘jott’", "<strong>j</strong> (als Engelse *y*)", "Ja, Jacke, Journalist"],
        ["K", "‘kaa’", "<strong>k</strong>", "Kater, Backe, Kuchen"],
        ["L", "‘el’", "<strong>l</strong>", "Lampe, alle, spielen"],
        ["M", "‘em’", "<strong>m</strong>", "Maus, Kammer, Mutter"],
        ["N", "‘en’", "<strong>n</strong>", "Nase, Kanne, nehmen"],
        ["O", "‘oo’", "<strong>o</strong> (kort) / <strong>oo</strong> (lang)", "offen, Ohr, Boden"],
        ["P", "‘pee’", "<strong>p</strong>", "Papier, Mappe, Pferd"],
        ["Q", "‘kuu’", "<strong>kv</strong>", "Qualle, Quelle, bequem"],
        ["R", "‘er’", "Zäpfchen‑r / gerolltes r", "rot, Mutter, Lehrer"],
        ["S", "‘es’", "<strong>z</strong> (begin) / <strong>s</strong> / <strong>sj</strong>", "Sonne, Glas, Stein"],
        ["T", "‘tee’", "<strong>t</strong>", "Tisch, Mutter, Stadt"],
        ["U", "‘uu’", "<strong>u</strong> (kort) / <strong>uu</strong> (lang)", "unten, Uhr, Mutter"],
        ["V", "‘fau’", "<strong>f</strong> (Duits) / <strong>v</strong> (leenwoorden)", "Vogel, Vater, Vase"],
        ["W", "‘wee’", "<strong>v</strong> (als Engelse *v*)", "Wasser, Antwort, wo"],
        ["X", "‘iks’", "<strong>ks</strong>", "Xylophon, Axt, Taxi"],
        ["Y", "‘üpsilon’", "<strong>ü</strong> / <strong>j</strong>", "Typ, Yacht, Yoga"],
        ["Z", "‘zett’", "<strong>ts</strong>", "Zeit, Katze, Salz"],
      ],
    },
    details: [
      {
        title: "Besonderheiten der deutschen Aussprache",
        body: `
          <h3 class="text-lg font-bold mt-4 mb-2">Umlaute</h3>
          <p>Das Deutsche hat drei Umlaute, die nicht im englischen Alphabet vorkommen:</p>
          <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
            <table class="w-full border-collapse">
              <thead>
                <tr class="!bg-indigo-600">
                  <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Buchstabe</th>
                  <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Aussprache</th>
                  <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Beispiel</th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm"><strong>Ä / ä</strong></td><td class="px-3 py-2 text-sm">wie *e* in *Bett*</td><td class="px-3 py-2 text-sm">Äpfel, Bäcker</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm"><strong>Ö / ö</strong></td><td class="px-3 py-2 text-sm">Lippen rund wie *o*, Zunge wie *e*</td><td class="px-3 py-2 text-sm">Öl, schön, Löffel</td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm"><strong>Ü / ü</strong></td><td class="px-3 py-2 text-sm">Lippen rund wie *u*, Zunge wie *ie*</td><td class="px-3 py-2 text-sm">Übung, für, grün</td></tr>
              </tbody>
            </table>
          </div>
          <h3 class="text-lg font-bold mt-6 mb-2">ß (Eszett / scharfes S)</h3>
          <p>Der Buchstabe <strong>ß</strong> wird immer als stimmloses *s* ausgesprochen (wie *ss*). Er steht nur nach langen Vokalen und Diphthongen: <em>Straße, heißen, Fuß</em>.</p>
        `,
      },
    ],
    callouts: [
      {
        type: "remember",
        label: "Merkregel",
        text: "**V** wird im Deutschen meist als *f* ausgesprochen (Vogel, Vater), **W** als *v* (Wasser, wo). Das ist eine häufige Fehlerquelle für Anfänger!",
      },
    ],
    commonMistakes: [
      { incorrect: "Wasser mit englischem *w*", correct: "**Wasser** (v‑Klang)", explanation: "Deutsches W ist wie englisches V" },
      { incorrect: "Vogel mit englischem *v*", correct: "**Vogel** (f‑Klang)", explanation: "Deutsches V ist meist ein F" },
    ],
    review: [
      "26 Buchstaben + 3 Umlaute (Ä, Ö, Ü) + ß",
      "W wird wie V ausgesprochen, V wie F",
      "Z = ts (nicht stimmhaftes s)",
      "End‑b,‑d,‑g werden zu p, t, k",
    ],
    qa: [
      { question: "Wie spricht man *Wasser* aus?", answer: "**Vasser** (w = v-Klang)." },
      { question: "Wie spricht man *Tag* aus?", answer: "**Tak** (g am Ende wird k)." },
      { question: "Welche Umlaute gibt es im Deutschen?", answer: "**Ä, Ö, Ü**." },
      { question: "Wie wird *ß* ausgesprochen?", answer: "Wie **ss** (stimmloses s)." },
      { question: "Wie spricht man *Zeit* aus?", answer: "**Tseit** (z = ts)." },
    ],
  },

  // ── Les 2: Präsens (Gegenwart) ─────────────────────────────
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