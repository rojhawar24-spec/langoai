import type { GrammarLesson } from "../types";

export const enGrammar: GrammarLesson[] = [
  /* ═══════════════════════════════════════════════════════════
   * en-gram-1 — Present Simple Tense
   * ═══════════════════════════════════════════════════════════ */
// ── Les 1 — Present Simple (OTT simpel) ──────────────────
{
  id: "en-gram-ott-simple",
  title: "Present Simple (OTT)",
  level: 1,
  topic: "Verbs",
  anchorSectionId: "rules",

  overview:
    "The **Present Simple** is used for habits, facts, and routines. Most verbs use their base form — only **he / she / it** takes an **-s** at the end.",

  conceptCards: [
    {
      title: "I / you / we / they",
      structure: "persoon + base verb (geen to)",
      example: "I work · you play · we live · they speak",
    },
    {
      title: "He / she / it",
      structure: "persoon + verb + s",
      example: "he works · she plays · it rains",
    },
    {
      title: "To be (zijn)",
      structure: "am / are / is (volledig onregelmatig)",
      example: "I am · you are · he/she/it is · we are",
    },
    {
      title: "To have (hebben)",
      structure: "have → has (alleen he/she/it)",
      example: "I have · you have · he/she/it has · they have",
    },
  ],

  rulesTable: [
    {
      rule:     "Basisregel",
      structure:"I / you / we / they + werkwoord (zonder to)",
      example:  "I work, you play, we live, they speak",
      usage:    "Voor alle personen behalve he / she / it."
    },
    {
      rule:     "3e persoon enkelvoud",
      structure:"he / she / it + werkwoord + s",
      example:  "he works, she plays, it rains",
      usage:    "Alleen bij he, she, it voeg je een -s toe."
    },
    {
      rule:     "To be (zijn) — onregelmatig",
      structure:"am / are / is",
      example:  "I am, you are, he/she/it is, we are, you are, they are",
      usage:    "Het belangrijkste onregelmatige werkwoord. Leer deze uit je hoofd."
    },
    {
      rule:     "To have (hebben)",
      structure:"have / has",
      example:  "I have, you have, he/she/it has, we have, you have, they have",
      usage:    "Alleen he/she/it krijgt 'has'."
    },
  ],

  conjugationTable: {
    header: "Persoon | TO WORK | TO PLAY | TO BE | TO HAVE",
    rows: [
      ["I",          "work",   "play",   "am",     "have"],
      ["you",        "work",   "play",   "are",    "have"],
      ["he/she/it",  "works",  "plays",  "is",     "has"],
      ["we",         "work",   "play",   "are",    "have"],
      ["you (mv)",   "work",   "play",   "are",    "have"],
      ["they",       "work",   "play",   "are",    "have"],
    ]
  },

  details: [
    {
      title: "Spellingregels voor de -s vorm",
      body: "Bij **he / she / it** pas je soms de spelling aan:\n\n- Werkwoorden op **-s, -ss, -sh, -ch, -x, -o**: + **es**\n  *(kiss → kisses, watch → watches, go → goes)*\n\n- Werkwoorden op **medeklinker + y**: y → **ies**\n  *(study → studies, carry → carries)*\n\n- Werkwoorden op **klinker + y**: alleen + s\n  *(play → plays, buy → buys)*\n\n- **have** → **has** (uitzondering)"
    },
  ],

  callouts: [
    {
      type:  "remember",
      label: "Onthoud",
      text:  "De **-s** komt alleen bij **he, she, it**. Bij alle anderen blijft het werkwoord hetzelfde."
    },
    {
      type:  "key",
      label: "Let op",
      text:  "**To be** (am/are/is) is volledig onregelmatig. Leer deze als eerste."
    },
  ],

  review: [
    "Present Simple = gewoontes, feiten, routines",
    "I/you/we/they + werkwoord",
    "he/she/it + werkwoord + s",
    "to be: I am, you are, he/she/it is",
    "to have: I have, he/she/it has",
  ],

  qa: [
    { question: "Hoe zeg je 'hij werkt'?", answer: "he works" },
    { question: "Wat is de 3e persoon van 'to go'?", answer: "goes (he goes)" },
    { question: "Welke vorm van 'to be' gebruik je voor 'I'?", answer: "I am" },
    { question: "Wat is correct: 'she have' of 'she has'?", answer: "she has" },
  ],

  body: "—",
  exercises: [],
},];
