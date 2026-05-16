import type { GrammarLesson } from "../types";

export const deGrammar: GrammarLesson[] = [
  /* ═══════════════════════════════════════════════════════════
   * de-gram-1 — Präsens (Present Tense)
   * ═══════════════════════════════════════════════════════════ */
  {
    id: "de-gram-1",
    title: "Präsens (Gegenwartstijd / Present Tense)",
    level: 1,
    topic: "Verbs",
    anchorSectionId: "rules",

    overview:
      "Het **Präsens** in het Duits wordt gebruikt voor gewoonten, feiten, huidige acties en permanente toestanden. De spelling verandert voor *du, er/sie/es*: voeg **-st** of **-t** toe.",

    body: `## Präsens (German Present Tense)
Het Präsens wordt gebruikt voor gewoonten en feiten.
**Standaard vervoeging:**
- Ich mache (Ik maak/doe)
- Du machst (Jij maakt/doet)
- Er/Sie/Es macht (Hij/Zij/Het maakt/doet)
- Wir machen (Wij maken/doen)
- Ihr macht (Jullie maken/doen)
- Sie machen (Zij/Ze maken/doen)
**Key onregelmatig:** zijn (to be)*en hebben (to have)*
Zijn: Ich bin, Du bist, Er ist, Wir sind, Ihr seid, Sie sind
Hebben: Ich habe, Du hast, Er hat, Wir haben, Ihr habt, Sie haben`,
    rulesTable: [
      {
        rule:     "ich / wir / ihr / Sie",
        structure:"stam (geen verandering)",
        example:  "ich mache, wir machen, ihr macht",
        usage:    "Deze personen krijgen geen extra letter",
      },
      {
        rule:     "du → stam + -st",
        structure:"stam + -st",
        example:  "DU machest = du machst",
        usage:    "'du' krijgt altijd -st (informatief 'je' ook)",
      },
      {
        rule:     "er/sie/es → stam + -t",
        structure:"stam + -t",
        example:  "er macht, sie macht, es macht",
        usage:    "3e persoon enkelvoud krijgt -t (geen -st)",
      },
      {
        rule:     "Sie (formeel) → stam + -en",
        structure:"stam + -en",
        example:  "Sie machen (formeel 'u')",
        usage:    "Formeel 'Sie' gebruik je met -en",
      },
      {
        rule:     "Negatief",
        structure:"konjunktiv + nicht + stam",
        example:  "Ich mache nicht (Ik maak niet)",
        usage:    "Negatie: stam + nicht",
      },
      {
        rule:     "Vraagzin",
        structure:"stam + onderwerp + rest?",
        example:  "Machst du Kaffee? (Maak je koffie?)",
        usage:    "Aan het begin van de zin: stam",
      },
      {
        rule:     "Stam afleiden",
        structure:"infinitief minus -en",
        example:  "machen → mach-, sprechen → sprech-",
        usage:    "Eerst stap voor elk Duits werkwoord",
      },
    ],

    conjugationTable: {
      header: "Persoon | machen (maken) | sprechen (spreken) | sein (zijn) | haben (hebben)",
      rows: [
        ["ich",       "mache",       "spreche",      "bin",     "habe"],
        ["du",        "machst",      "sprichst",     "bist",    "hast"],
        ["er/sie/es", "macht",       "spricht",      "ist",     "hat"],
        ["wir",       "machen",      "sprechen",     "sind",    "haben"],
        ["ihr",       "macht",       "sprecht",      "seid",    "habt"],
        ["Sie / sie", "machen",      "sprechen",     "sind",    "haben"],
      ],
    },

    timeExpressions: {
      header: "Tijdsuitdrukking | Regel | Voorbeeld",
      rows: [
        ["jeden Tag / jede Woche", "Gewoonte = Präsens", "Ich arbeite jeden Tag."],
        ["immer / oft / manchmal", "Gewoonte = Präsens", "Sie fährt oft nach Berlin."],
        ["jetzt / zurzeit / heute", "Nu = Präsens", "Ich lerne jetzt Deutsch."],
        ["nie / selten", "Gewoonte = Präsens", "Er isst nie Gemüse."],
        ["am Montag / am Samstag", "Vaste dag = Präsens", "Wir gehen am Samstag."],
      ],
    },

    details: [
      {
        title: "1. Stam afleiden en -st / -t",
        body: `## Stam vormen in het Présens
Elk Duits stamwerkwoord heeft een stam: infinitief minus **-en**.
\\| Werkwoord \\| Infinitief \\| Stam \\|
\\|-------------\\|------------\\|-------\\|
| machen | machen | mach- |
| sprechen | sprechen | sprech- |
| gehen | gehen | geh- |
| spielen | spielen | spiel- |
| wohnen | wohnen | wohn- |
> **Uitzondering:** Werkwoord op **-d** of **-t** verandert niet: *legen → liegt* (geen extra letter na d/t)`,
      },
      {
        title: "2. Onregelmatige: zijn en hebben",
        body: `## Twee belangrijkste onregelmatige werkwoorden
### ZIJN (to be)
\\| Persoon \\| Vorm \\|
\\|---------\\|------\\|
| ich | **bin** |
| du | **bist** |
| er/sie/es | **ist** |
| wir | **sind** |
| ihr | **seid** |
| Sie / sie | **sind** |
### HEBEN (to have)
\\| Persoon \\| Vorm \\|
\\|---------\\|------\\|
| ich | **habe** |
| du | **hast** |
| er/sie/es | **hat** |
| wir | **haben** |
| ihr | **habt** |
| Sie / sie | **haben** |
\\> 💡 Deze twee moet je uit je hoofd leren — ze zijn de meest gebruikte!`,
      },
      {
        title: "3. Vraagzinnen en inversie",
        body: `## Fragen im Präsens
In Duits staat de stam **eerst** in vragen:
\\| Aanbieding \\| Vraag \\|
\\|------------\\|-------\\|
| Du sprichst Deutsch | **Sprichst** du Deutsch? |
| Er lernt Deutsch | **Lernt** er Deutsch? |
| Ich mache Hausaufgaben | **Machst** du die Hausaufgaben? |
> ❌ *Du sprächest?* → ✅ *Sprichst du?* (stam eerst, geen 'du' beginnen)`,
      },
    ],

    callouts: [
      {
        type:  "tip",
        label: "💡 Tip",
        text:  "Leer de stam van 10-15 veelgebruikte werkwoorden: machen, sprechen, gehen, wohnen, lernen, spielen, arbeiten, essen, trinken, lesen.",
      },
      {
        type:  "key",
        label: "🔑 Sleutel",
        text:  "'du' krijgt altijd -st; 'er/sie/es' krijgt altijd -t. Dit is de belangrijkste regel van het Präsens.",
      },
      {
        type:  "remember",
        label: "🔔 Onthoud",
        text:  "Zijn en hebben zijn onregelmatig — je moet hun vormen los leren: bin/bist/ist/sind, habe/hast/hat/haben.",
      },
    ],

    commonMistakes: [
      {
        incorrect:  "Ich sprechen Deutsch.",
        correct:    "Ich spreche Deutsch.",
        explanation: "'Ich' krijgt de stam (geen -en): 'sprechen' → 'spreche'.",
      },
      {
        incorrect:  "Er sprich Deutsch.",
        correct:    "Er spricht Deutsch.",
        explanation: "'Er' krijgt -t: 'spricht', niet 'sprich' (dat is de stam alleen).",
      },
      {
        incorrect:  "Du machst → Machst du?",
        correct:    "Sprichst du? — stam eerst in vragen.",
        explanation: "In vragen staat de stam HEEL aan het begin: 'Sprichst du?'",
      },
      {
        incorrect:  "Ich bin müde. → Ich binst müde?",
        correct:    "Bist du müde?",
        explanation: "'Bin' is alleen voor 'ich'. Voor 'du' gebruik je 'bist'.",
      },
    ],

    review: [
      "Präsens = gewoonten, feiten, nu",
      "du → stam + -st; er/sie/es → stam + -t",
      "Vraag: stam eerst: Sprichst du?",
      "Zijn en hebben zijn onregelmatig — leer ze uit je hoofd",
    ],

    qa: [
      {
        question: "Wat is de juiste vervoeging: 'Ich ___ (machen) das.'",
        answer:  "mache — 'ich' krijgt de stam, geen -en of -st.",
      },
      {
        question: "Vraagzin: '___ (sprechen) du Deutsch?'",
        answer:  "Sprichst — dalijk eerst, dan 'du'.",
      },
      {
        question: "Wat is onregelmatig: 'Ich ___ (sein) müde.'",
        answer:  "bin — het onregelmatige Präsens van sein heeft bijzondere vormen.",
      },
      {
        question: "Hij/zij/het van 'machen'?",
        answer:  "macht — 3e persoon enkelvoud krijgt -t.",
      },
    ],

    exercises: [
      { question: "Ich ___ Deutsch.",    options: ["machen","mache","machst","gemacht"], answer: "mache" },
      { question: "Du ___ müde.",    options: ["bin","bist","ist","sind"],     answer: "bist" },
      { question: "Wir ___ aus Berlin.", options: ["komme","kommst","kommt","kommen"], answer: "kommen" },
      { question: "Er ___ eine Katze.", options: ["hat","habe","hast","haben"], answer: "hat" },
      { question: "___ du Kaffee trinken?", options: ["Trinkst","Trinkt","Trinken","Getrunken"], answer: "Trinkst" },
    ],
  },

  /* ═══════════════════════════════════════════════════════════
   * de-gram-2 — Der, Die, Das (Duits naar Nederlands)
   * ═══════════════════════════════════════════════════════════ */
  {
    id: "de-gram-2",
    title: "Der, Die, Das (Grammatical Gender)",
    level: 1,
    topic: "Nouns",
    anchorSectionId: "rules",

    overview:
      "Duits kent drie geslachtsartikelen — **der** (mannelijk), **die** (vrouwelijk of meervoud), **das** (onzijdig) — en het onbepaalde **ein / eine**. Leer het artikel met elk zelfstandig naamwoord mee!",

    body: `## Dutch & German — De/ Het vs Der/ Die/ Das
In het Duits zijn er drie geslachtsartikelen, in het Nederlands er twee: **de/en het**.
| Duits | Nederlands | Voorbeeld |
|-------|-----------|----------|
| **der** (manne) | de | der Mann → de man |
| **die** (vrouw/mv) | de | die Frau → de vrouw, die Kinder → de kinderen |
| **das** (onzijdig) | het | das Kind → het kind |
| **ein / eine** | een | ein Buch → een boek`,

    rulesTable: [
      {
        rule:     "Der — mannelijk",
        structure:"der + mannelijk zelfstandig naamwoord",
        example:  "der Mann, der Lehrer, der Tisch",
        usage:    "Mannelijke zelfstandige naamwoorden in het Duits",
      },
      {
        rule:     "Die — vrouwelijk",
        structure:"die + vrouwelijk zelfstandig naamwoord",
        example:  "die Frau, die Zeitung, die Freiheit",
        usage:    "Vrouwelijke zelfstandige naamwoorden in het Duits",
      },
      {
        rule:     "Die — meervoud",
        structure:"die + meervoud",
        example:  "die Bücher, die Kinder, die Häuser",
        usage:    "Alle meervouden in het Duits gebruiken 'die'",
      },
      {
        rule:     "Das — onzijdig",
        structure:"das + onzijdig zelfstandig naamwoord",
        example:  "das Kind, das Haus, das Mädchen",
        usage:    "Onzijdige zelfstandige naamwoorden in het Duits",
      },
      {
        rule:     "Ein — onbepaald mannelijk/onzijdig",
        structure:"ein + [manne/onzij] zelfstandig naamwoord",
        example:  "ein Mann, ein Kind",
        usage:    "Onbepaald lidwoord voor mannelijk en onzijdig",
      },
      {
        rule:     "Eine — onbepaald vrouwelijk",
        structure:"eine + vrouwelijk zelfstandig naamwoord",
        example:  "eine Frau",
        usage:    "Onbepaald lidwoord alleen voor vrouwelijk",
      },
    ],

    conjugationTable: {
      header: "Duits (artikel) | Nederlands | Uitleg",
      rows: [
        ["der (manne)",   "de",           "de man → der Mann (kaal peen A)"],
        ["die (vrouw)",   "de",           "de vrouw → die Frau (eind op -e)"],
        ["die (meerv)",   "de",           "de kinderen → die Kinder (altijd 'die')"],
        ["das (onzijdig)","het",          "het huis → das Haus"],
        ["ein Mann",      "een man",     "onbepaald mannelijk"],
        ["eine Frau",     "een vrouw",   "onbepaald vrouwelijk"],
      ],
    },

    timeExpressions: {
      header: "Einde van het woord | Verwachte geslacht | Voorbeeld",
      rows: [
        ["-ung",  "vrouwelijk → die",  "die Zeitung → de krant"],
        ["-keit / -heit", "vrouwelijk → die", "die Freiheit → de vrijheid"],
        ["-chen / -lein", "onzijdig → das", "das Mädchen → het meisje"],
        ["-ling", "mannelijk → der",  "der Schüler → de leerling"],
        ["-er",  "mannelijk → der",  "der Lehrer → de leraar"],
        ["-e",   "vaak mannelijk → der", "der Vater → de vader"],
      ],
    },

    details: [
      {
        title: "1. Geslacht raden: ezelsbruggetjes",
        body: `## Tips om het geslacht te raden
\\| Einde van het woord \\| Geslacht \\| Voorbeeld \\|
\\|--------------------\\|---------\\|----------\\|
| -ung, -keit, -heit | vrouwelijk (die) | die Zeitung, die Freiheit |
| -chen, -lein | onzijdig (das) | das Mädchen, das Tischlein |
| -ling | mannelijk (der) | der Lehrling |
| -er | meestal mannelijk (der) | der Lehrer, der Vater |
> ⚠️ **Braakuitzondering:** Leer altijd het lidwoord met het woord mee!`,
      },
      {
        title: "2. Het Nederlands equivalent",
        body: `## Nederlands: de vs het
Nederlands heeft geen geslacht, dus enkel **de** (gemeen vrouwelijk) of **het** (onzijdig).
\\| Duits geslacht \\| Nederlands lidwoord \\|
\\|--------------\\|------------\\|
| Mannelijk (der) | de |
| Vrouwelijk (die) | de |
| Meervoud (die) | de |
| Onzijdig (das) | het |
> 💡 '*Die*' in het Duits is dus zowel vrouwelijk als meervoud — maar in het Nederlands is dat allemaal **de**.`,
      },
    ],

    callouts: [
      {
        type:  "remember",
        label: "🔔 Onthoud",
        text:  "Leer elk Duits woord samen met zijn lidwoord: 'der Mann — de man', 'das Kind — het kind'.",
      },
      {
        type:  "key",
        label: "🔑 Sleutel",
        text:  "Meervouden in het Duits gebruiken altijd 'die' → het Nederlands wordt altijd 'de'.",
      },
      {
        type:  "tip",
        label: "💡 Tip",
        text:  "Woorden op -ung zijn bijna altijd vrouwelijk (die): die Zeitung → de krant.",
      },
    ],

    commonMistakes: [
      {
        incorrect:  "Das Mann ist groß.",
        correct:    "Der Mann ist groß.",
        explanation: "'Mann' is mannelijk in het Duits → gebruik 'der' (niet 'das').",
      },
      {
        incorrect:  "Die Kind ist groß.",
        correct:    "Das Kind ist groß.",
        explanation: "'Kind' is onzijdig in het Duits → gebruik 'das' (niet 'die').",
      },
      {
        incorrect:  "Der Bücher sind auf dem Tisch.",
        correct:    "Die Bücher sind auf dem Tisch.",
        explanation: "Meervouden in het Duits gebruiken altijd 'die'.",
      },
    ],

    review: [
      "Duits = 3 geslachten: der (manne), die (vrouw/mv), das (onzijdig) → NL = 2: de / het",
      "Meervoud = altijd 'die' in Duits = altijd 'de' in het Nederlands",
      "Woorden op -ung / -heit / -keit → vrouwelijk = die",
      "Woorden op -chen / -lein → onzijdig = das",
      "Leer het Duits lidwoord met het Nederlands meeleert",
    ],

    qa: [
      {
        question: "Duits: '___ Haus' → Nederlands: 'het huis'. Welk lidwoord?",
        answer:  "Das — 'das' is het onzijdige artikel in het Duits.",
      },
      {
        question: "Meervoud: '___ Kinder' → Nederlands: 'de kinderen'. Wat is het Duits artikel?",
        answer:  "Die — meervouden in het Duits gebruiken altijd 'die'.",
      },
      {
        question: "'___ Zeitung' is fout. Hoe moet het?",
        answer:  "Die Zeitung — woorden op -ung zijn altijd vrouwelijk ('die').",
      },
    ],

    exercises: [
      { question: "___ Mann (de man)",            options: ["Der","Die","Das","Ein"], answer: "Der" },
      { question: "___ Frau (de vrouw)",          options: ["Der","Die","Das","Ein"], answer: "Die" },
      { question: "___ Kind (het kind)",          options: ["Der","Die","Das","Ein"], answer: "Das" },
      { question: "___ Kinder (de kinderen)",     options: ["Der","Die","Das","Ein"], answer: "Die" },
      { question: "___ Buch (het boek)",          options: ["Der","Die","Das","Ein"], answer: "Das" },
      { question: "___ Haus (het huis)",          options: ["Der","Die","Das","Ein"], answer: "Das" },
    ],
  },
];
