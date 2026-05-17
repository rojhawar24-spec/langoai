import type { GrammarLesson } from "../types";

export const frGrammar: GrammarLesson[] = [
  /* ═══════════════════════════════════════════════════════════
   * fr-gram-1 — Le Présent (Present Tense)
   * ═══════════════════════════════════════════════════════════ */
// ── Les 1b — Le Présent : werkwoorden op -ER (simpel) ────
{
  id: "fr-gram-ott-simple",
  title: "Le Présent : werkwoorden op -ER",
  level: 1,
  topic: "Verbes",
  anchorSectionId: "rules",

  overview:
    "De **onvoltooid tegenwoordige tijd** (le présent) gebruik je voor gewoontes, feiten en wat nu gebeurt. De meeste Franse werkwoorden eindigen op **-ER**. De stam maak je door **-er** weg te halen.",

  rulesTable: [
    {
      rule:     "Stam afleiden",
      structure:"infinitif zonder -er",
      example:  "parler → parl-, aimer → aim-, regarder → regard-",
      usage:    "Altijd eerst de stam bepalen."
    },
    {
      rule:     "Uitgangen -ER",
      structure:"-e / -es / -e / -ons / -ez / -ent",
      example:  "je parle, tu parles, il/elle parle, nous parlons, vous parlez, ils/elles parlent",
      usage:    "De standaarduitgangen voor bijna alle -ER werkwoorden."
    },
  ],

  conjugationTable: {
    header: "Persoon | PARLER | AIMER | REGARDER",
    rows: [
      ["je (ik)",        "parle",    "aime",    "regarde"],
      ["tu (jij)",       "parles",   "aimes",   "regardes"],
      ["il/elle/on",     "parle",    "aime",    "regarde"],
      ["nous (wij)",     "parlons",  "aimons",  "regardons"],
      ["vous (u/jullie)","parlez",   "aimez",   "regardez"],
      ["ils/elles (zij)","parlent",  "aiment",  "regardent"],
    ]
  },

  details: [
    {
      title: "Uitspraak",
      body: "Bij **je, tu, il/elle, ils/elles** zijn de uitgangen **stil** (je parle, tu parles, il parle, ils parlent klinken hetzelfde). Alleen de **stam** wordt gehoord.\n\n**Nous** (parlons) en **vous** (parlez) zijn duidelijk anders."
    },
  ],

  callouts: [
    {
      type:  "remember",
      label: "Onthoud",
      text:  "Je/jij/hij/zij-enkelvoud → -e / -es / -e. Meervoud → -ons / -ez / -ent."
    },
    {
      type:  "key",
      label: "Let op",
      text:  "Bij een klinker of stomme h gebruik je **j'** in plaats van **je** (j'aime, j'habite)."
    },
  ],

  review: [
    "Stam = infinitif zonder -er",
    "je → -e, tu → -es, il/elle → -e",
    "nous → -ons, vous → -ez, ils/elles → -ent",
    "Uitspraak: je/tu/il/ils eindigt hetzelfde (stam hoorbaar)",
  ],

  qa: [
    { question: "Wat is de stam van 'parler'?", answer: "parl-" },
    { question: "Welke uitgang krijgt 'nous'?", answer: "-ons (nous parlons)" },
    { question: "Hoe zeg je 'zij houden van' (aimer)?", answer: "ils/elles aiment" },
  ],

  body: "—",
  exercises: [],
},];
