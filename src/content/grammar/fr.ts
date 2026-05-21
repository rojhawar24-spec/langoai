import type { GrammarLesson } from "../types";

export const frGrammar: GrammarLesson[] = [
  /* ═══════════════════════════════════════════════════════════
   * fr-uitspraak-1 — Alphabet / Prononciation
   * ═══════════════════════════════════════════════════════════ */
  {
    id: "fr-uitspraak-1",
    title: "Alphabet – 26 Lettres: Guide complet de prononciation",
    level: 1,
    topic: "Prononciation",
    body: "Apprends la prononciation française avec cet aperçu complet de l'alphabet.",
    overview:
      "Voici un **aperçu complet** de l'alphabet français avec les 26 lettres, leur nom, leur son et des exemples de mots.",
    anchorSectionId: "alphabet",
    exercises: [],
    timeExpressions: {
      header: "Ltr | Spelling | Klank | Voorbeelden",
      rows: [
        ["A", "‘ah’", "<strong>a</strong> (kort) / <strong>â</strong> (lang)", "arbre, chat, pâte"],
        ["B", "‘beh’", "<strong>b</strong>", "bateau, abbé, bon"],
        ["C", "‘seh’", "<strong>k</strong> vóór a/o/u; <strong>s</strong> vóór e/i/y", "café, cédille, cygne"],
        ["D", "‘deh’", "<strong>d</strong>", "dent, addition, dos"],
        ["E", "‘uh’", "<strong>e</strong> (kort) / <strong>é</strong> / <strong>è</strong> / doffe e", "chemin, été, mère, le"],
        ["F", "‘ef’", "<strong>f</strong>", "feu, effort, femme"],
        ["G", "‘jeh’", "<strong>g</strong> (hard) vóór a/o/u; <strong>zj</strong> vóór e/i/y", "gare, gymnase, genou"],
        ["H", "‘ash’", "muet of aspiré (geen klank)", "hôtel, haricot, habiter"],
        ["I", "‘ee’", "<strong>i</strong> (kort) / <strong>î</strong> (lang)", "île, finir, ici"],
        ["J", "‘jhee’", "<strong>zj</strong> (als *g* in *genou*)", "jour, bonjour, jamais"],
        ["K", "‘kah’", "<strong>k</strong>", "kilo, képi, karaté"],
        ["L", "‘el’", "<strong>l</strong>", "lac, ville, aller"],
        ["M", "‘em’", "<strong>m</strong>", "mer, femme, aimer"],
        ["N", "‘en’", "<strong>n</strong>", "nez, année, donner"],
        ["O", "‘oh’", "<strong>o</strong> (kort) / <strong>ô</strong> (lang)", "mot, porte, tôt"],
        ["P", "‘peh’", "<strong>p</strong>", "père, nappe, pas"],
        ["Q", "‘kuh’", "<strong>k</strong>", "quatre, question, qui"],
        ["R", "‘er’", "keel‑r (gorgelend)", "rue, terre, parler"],
        ["S", "‘es’", "<strong>s</strong> (stemloos) / <strong>z</strong> (tussen klinkers)", "soleil, rose, maison"],
        ["T", "‘teh’", "<strong>t</strong>", "train, cette, thé"],
        ["U", "‘uh’", "<strong>u</strong> (lippen gerond, tong voor)", "lune, tu, sur"],
        ["V", "‘veh’", "<strong>v</strong>", "vol, vivre, avion"],
        ["W", "‘double véh’", "<strong>w</strong> (Engels) / <strong>v</strong>", "wagon, week‑end, wi‑fi"],
        ["X", "‘iks’", "<strong>ks</strong> / <strong>gz</strong>", "taxi, exemple, xénon"],
        ["Y", "‘ie grec’", "<strong>j</strong> / <strong>i</strong>", "yaourt, système, yoyo"],
        ["Z", "‘zèd’", "<strong>z</strong>", "zèbre, zéro, gaz"],
      ],
    },
    details: [
      {
        title: "Particularités de la prononciation française",
        body: `
          <h3 class="text-lg font-bold mt-4 mb-2">Accents</h3>
          <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
            <table class="w-full border-collapse">
              <thead>
                <tr class="!bg-indigo-600">
                  <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Accent</th>
                  <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Effect</th>
                  <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Voorbeeld</th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm"><strong>é</strong> (aigu)</td><td class="px-3 py-2 text-sm">gesloten e-klank</td><td class="px-3 py-2 text-sm">été, café</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm"><strong>è / ê</strong> (grave / circonflexe)</td><td class="px-3 py-2 text-sm">open e-klank</td><td class="px-3 py-2 text-sm">mère, fête, tête</td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm"><strong>ç</strong> (cédille)</td><td class="px-3 py-2 text-sm">maakt c zacht vóór a/o/u</td><td class="px-3 py-2 text-sm">garçon, ça va</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm"><strong>â / î / û</strong> (circonflexe)</td><td class="px-3 py-2 text-sm">verlengt de klinker</td><td class="px-3 py-2 text-sm">pâte, île, sûr</td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm"><strong>ë / ï / ü</strong> (tréma)</td><td class="px-3 py-2 text-sm">spreek de klinker apart uit</td><td class="px-3 py-2 text-sm">Noël, naïf, aigüe</td></tr>
              </tbody>
            </table>
          </div>
          <h3 class="text-lg font-bold mt-6 mb-2">Let op!</h3>
          <ul class="list-disc pl-5 space-y-1 text-slate-700 dark:text-slate-300">
            <li>De <strong>h</strong> is altijd stil (muet). Bij *h aspiré* is er geen liaisons.</li>
            <li><strong>u</strong> is een unieke klank: lippen gerond als *oe*, tong vooraan als *ie*.</li>
            <li><strong>r</strong> wordt in de keel uitgesproken (gorgelend), niet met de tongpunt.</li>
          </ul>
        `,
      },
    ],
    callouts: [
      {
        type: "remember",
        label: "Onthoud",
        text: "De **r** is een keelklank (gorgelend), niet rollend. Oefen met *parler, terre, rue*.",
      },
    ],
    commonMistakes: [
      { incorrect: "u als *oe* uitspreken", correct: "**u** = lippen rond + tong voor", explanation: "Lune ≠ loen, tu ≠ toe" },
      { incorrect: "h meespreken", correct: "**h** is altijd stil", explanation: "Hôtel klinkt als *ôtel*" },
      { incorrect: "r rollen met tongpunt", correct: "**r** = keelklank", explanation: "Parijse r is gorgelend" },
    ],
    review: [
      "26 lettres + accents (é, è, ê, ç, etc.)",
      "h is altijd stil (muet)",
      "u = unieke klank (lippen rond, tong voor)",
      "r = keelklank, niet rollend",
      "c → s vóór e/i/y, anders k",
      "g → zj vóór e/i/y, anders harde g",
    ],
    qa: [
      { question: "Hoe spreek je *hôtel* uit?", answer: "**ôtel** (h is stil)." },
      { question: "Wat is het verschil tussen *café* en *cédille* voor de c?", answer: "**café** = k-klank, **cédille** = s-klank (vóór e)." },
      { question: "Hoe klinkt de Franse *u*?", answer: "Lippen rond (oe), tong vooraan (ie)." },
      { question: "Hoe spreek je de Franse *r* uit?", answer: "Gorgelend in de keel." },
    ],
  },

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
    "Le **présent** utilis pour parler de ce que tu fais maintenant, de tes habitudes ou de vérités générales. La plupart des verbes français en **-ER** se conjuguent en retirant **-er** et en ajoutant les six terminaisons.",

  conceptCards: [
    {
      title: "Stam bepalen",
      structure: "infinitif -er → stam",
      example: "parler → parl-, aimer → aim-, regarder → regard-",
    },
    {
      title: "Terminaisons -ER",
      structure: "-e / -es / -e / -ons / -ez / -ent",
      example: "je parle · tu parles · il parle · nous parlons · vous parlez · ils parlent",
    },
    {
      title: "3e persoon enkelvoud",
      structure: "il/elle/on + (stam + e)",
      example: "il parle, elle aime, on regarde",
    },
    {
      title: "Elision: j'",
      structure: "klinker / stomme h → j' + uitgang",
      example: "j'aime, j'habite (geen *je aime*)",
    },
  ],

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
