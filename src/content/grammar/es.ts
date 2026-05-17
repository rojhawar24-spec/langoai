import type { GrammarLesson } from "../types";

export const esGrammar: GrammarLesson[] = [
  /* ═══════════════════════════════════════════════════════════
   * es-gram-1 — Presente de Indicativo
   * ═══════════════════════════════════════════════════════════ */
// ── Les 1 — Presente de Indicativo (OTT simpel) ──────────
{
  id: "es-gram-ott-simple",
  title: "Presente de Indicativo (OTT)",
  level: 1,
  topic: "Verbos",
  anchorSectionId: "rules",

  overview:
    "De **Presente** (tegenwoordige tijd) gebruik je voor gewoontes, feiten en wat nu gebeurt. Spaanse werkwoorden eindigen op **-AR**, **-ER** of **-IR**. De stam krijg je door die uitgang weg te halen.",

  rulesTable: [
    {
      rule:     "Stam afleiden",
      structure:"infinitivo zonder -ar / -er / -ir",
      example:  "hablar → habl-, comer → com-, vivir → viv-",
      usage:    "Bepaal eerst de stam en het type (-AR, -ER, -IR)."
    },
    {
      rule:     "Uitgangen -AR",
      structure:"-o / -as / -a / -amos / -áis / -an",
      example:  "hablo, hablas, habla, hablamos, habláis, hablan",
      usage:    "Voor werkwoorden op -AR (grootste groep)."
    },
    {
      rule:     "Uitgangen -ER",
      structure:"-o / -es / -e / -emos / -éis / -en",
      example:  "como, comes, come, comemos, coméis, comen",
      usage:    "Voor werkwoorden op -ER."
    },
    {
      rule:     "Uitgangen -IR",
      structure:"-o / -es / -e / -imos / -ís / -en",
      example:  "vivo, vives, vive, vivimos, vivís, viven",
      usage:    "Voor werkwoorden op -IR (lijkt veel op -ER, alleen wij/jullie anders)."
    },
  ],

  conjugationTable: {
    header: "Persoon | HABLAR (-AR) | COMER (-ER) | VIVIR (-IR)",
    rows: [
      ["yo (ik)",            "hablo",    "como",    "vivo"],
      ["tú (jij)",           "hablas",   "comes",   "vives"],
      ["él/ella/usted",      "habla",    "come",    "vive"],
      ["nosotros (wij)",     "hablamos", "comemos", "vivimos"],
      ["vosotros (jullie)",  "habláis",  "coméis",  "vivís"],
      ["ellos/ellas/ustedes","hablan",   "comen",   "viven"],
    ]
  },

  details: [
    {
      title: "Belangrijke onregelmatige werkwoorden",
      body: `De volgende werkwoorden zijn onregelmatig en moet je uit je hoofd leren:

| Infinitief | yo | tú | él/ella | nosotros | vosotros | ellos |
|------------|----|----|---------|----------|----------|-------|
| **ser** (zijn) | soy | eres | es | somos | sois | son |
| **estar** (zijn, zich bevinden) | estoy | estás | está | estamos | estáis | están |
| **tener** (hebben) | tengo | tienes | tiene | tenemos | tenéis | tienen |
| **ir** (gaan) | voy | vas | va | vamos | vais | van |`
    },
  ],

  callouts: [
    {
      type:  "remember",
      label: "Onthoud",
      text:  "Spaans heeft **drie** groepen regelmatige werkwoorden: -AR, -ER, -IR. Leer eerst de uitgangen per groep."
    },
    {
      type:  "key",
      label: "Let op",
      text:  "**Ser** en **estar** betekenen allebei 'zijn', maar gebruik **ser** voor eigenschappen en **estar** voor toestanden/plaats."
    },
  ],

  review: [
    "-AR: -o, -as, -a, -amos, -áis, -an",
    "-ER: -o, -es, -e, -emos, -éis, -en",
    "-IR: -o, -es, -e, -imos, -ís, -en",
    "Ser (zijn): soy, eres, es, somos, sois, son",
    "Estar (zijn/plaats): estoy, estás, está, estamos, estáis, están",
  ],

  qa: [
    { question: "Wat is de stam van 'hablar'?", answer: "habl-" },
    { question: "Welke uitgang krijgt 'tú' bij -ER werkwoorden?", answer: "-es (comes)" },
    { question: "Hoe zeg je 'wij leven' (vivir)?", answer: "vivimos" },
    { question: "Vervoeg 'ser' voor 'yo'.", answer: "soy" },
  ],

  body: "—",
  exercises: [],
},];
