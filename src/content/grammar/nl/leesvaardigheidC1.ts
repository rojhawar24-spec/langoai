// src/content/grammar/nl/leesvaardigheidC1.ts
// ✅ BUG-20 FIXED: was leeg (1432 bytes), nu 15 echte C1-leesoefeningen
// ✅ Gebruikt exacte GrammarLesson/GrammarExercise interface uit types.ts

import type { GrammarLesson } from "../../types";

export const leesvaardigheidC1: GrammarLesson = {
  id: "nl-leesvaardigheid-c1",
  title: "C1 Leesvaardigheid — Gevorderde teksten begrijpen",
  level: 6,
  topic: "Leesvaardigheid",
  body: "Op C1-niveau lees je complexe teksten zoals krantenartikelen, wetenschappelijke samenvattingen en literaire fragmenten. Je begrijpt impliciete betekenis, nuance, ironie en argumentatiestructuren.",

  overview:
    "In deze les train je vijf essentiële C1-leesvaardigheden: (1) hoofdtoon en sfeer bepalen, (2) figuurlijk taalgebruik herkennen, (3) impliciete betekenis afleiden, (4) argumentatiestructuren analyseren, en (5) woordenschat in context begrijpen. Na elke tekst volgen gerichte meerkeuzevragen.",

  details: [
    {
      title: "Strategie 1 — Skimmen en Scannen",
      body: `<p><strong>Skimmen:</strong> snel de hoofdgedachte bepalen door titels, eerste en laatste zinnen te lezen.</p>
<p><strong>Scannen:</strong> gericht zoeken naar specifieke informatie zonder de hele tekst te lezen.</p>
<p>Op C1-niveau combineer je beide strategieën voor efficiënt tekstbegrip.</p>`,
    },
    {
      title: "Strategie 2 — Inferentie (afleiden)",
      body: `<p><strong>Inferentie</strong> = betekenis afleiden uit de context zonder elk woord te kennen.</p>
<p>Let op: gedrag van personages, toon van de auteur, signaalwoorden en wat er <em>niet</em> gezegd wordt.</p>`,
    },
    {
      title: "Strategie 3 — Kritisch lezen",
      body: `<p>Evalueer de <strong>toon</strong>, <strong>intentie</strong> en het <strong>standpunt</strong> van de auteur.</p>
<p>Herken stijlmiddelen: ironie, hyperbool, eufemisme, metafoor.</p>
<p>Analyseer argumentatiestructuren: keten-argumentatie, pro/contra, probleem-oplossing.</p>`,
    },
  ],

  exercises: [
    // ── Fragment 1: Hoofdtoon ──────────────────────────────────────────────
    {
      question:
        "Lees: \"De stad transformeerde zich in hoog tempo. Waar jarenlang verlaten pakhuizen stonden, rezen nu glazen torens op. De oude bewoners keken met gemengde gevoelens toe: trots op de vernieuwing, maar ook weemoed om wat verloren ging.\"\n\nWat is de HOOFDTOON van dit fragment?",
      options: [
        "Puur positief — de auteur juicht de verandering toe",
        "Ambivalent — zowel positieve als negatieve gevoelens",
        "Negatief — de auteur bekritiseert de modernisering",
        "Neutraal — alleen feiten, geen emotie",
      ],
      answer: "Ambivalent — zowel positieve als negatieve gevoelens",
    },
    {
      question:
        "In hetzelfde fragment: welk woord heeft de meest NEGATIEVE connotatie?",
      options: ["transformeerde", "rezen", "weemoed", "vernieuwing"],
      answer: "weemoed",
    },

    // ── Fragment 2: Figuurlijk taalgebruik ───────────────────────────────
    {
      question:
        "Lees: \"Hij beweerde dat hij niets wist van de transactie, maar zijn ogen verraadden hem.\"\n\nWat impliceert deze zin?",
      options: [
        "Hij wist inderdaad niets van de transactie",
        "Zijn ogen waren ziek",
        "Hij loog waarschijnlijk",
        "De transactie was legaal",
      ],
      answer: "Hij loog waarschijnlijk",
    },
    {
      question:
        "\"Zijn ogen verraadden hem\" is een voorbeeld van:",
      options: [
        "Letterlijk taalgebruik",
        "Figuurlijk taalgebruik (metafoor)",
        "Een technische term",
        "Een archaïsme",
      ],
      answer: "Figuurlijk taalgebruik (metafoor)",
    },

    // ── Fragment 3: Ironie ───────────────────────────────────────────────
    {
      question:
        "Lees: \"De minister spreekt opnieuw van 'tijdelijke maatregelen', een term die hij al drie jaar consequent hanteert.\"\n\nWelk stijlmiddel gebruikt de journalist hier?",
      options: ["Hyperbool", "Ironie / sarcasme", "Eufemisme", "Alliteratie"],
      answer: "Ironie / sarcasme",
    },
    {
      question:
        "Wat is het IMPLICIETE standpunt van de journalist in datzelfde fragment?",
      options: [
        "De maatregelen zijn inderdaad tijdelijk",
        "De minister communiceert eerlijk",
        "De maatregelen zijn helemaal niet tijdelijk",
        "De journalist heeft geen mening",
      ],
      answer: "De maatregelen zijn helemaal niet tijdelijk",
    },

    // ── Fragment 4: Inferentie ───────────────────────────────────────────
    {
      question:
        "Lees: \"Na afloop van de vergadering verliet iedereen zwijgend het gebouw. Niemand keek elkaar aan.\"\n\nWat kun je hieruit AFLEIDEN?",
      options: [
        "De vergadering was heel succesvol",
        "De deelnemers waren tevreden",
        "Er was een gespannen of negatieve sfeer",
        "De mensen waren moe van het reizen",
      ],
      answer: "Er was een gespannen of negatieve sfeer",
    },
    {
      question:
        "Welke INFERENTIESTRATEGIE gebruik je bij de vorige vraag?",
      options: [
        "Letterlijk lezen — de tekst zegt het direct",
        "Contextueel afleiden — betekenis uit gedragsaanwijzingen halen",
        "Woordenschat opzoeken",
        "De tekst samenvatten",
      ],
      answer: "Contextueel afleiden — betekenis uit gedragsaanwijzingen halen",
    },

    // ── Fragment 5: Academisch taalgebruik ───────────────────────────────
    {
      question:
        "Lees: \"De resultaten suggereren een mogelijk verband, maar verdere longitudinale studies zijn noodzakelijk om causaliteit vast te stellen.\"\n\nWat betekent CAUSALITEIT in deze context?",
      options: [
        "Een toevallige overeenkomst",
        "Het bewijs dat iets A iets B veroorzaakt",
        "Een statistische fout",
        "De grootte van de steekproef",
      ],
      answer: "Het bewijs dat iets A iets B veroorzaakt",
    },
    {
      question:
        "Wat is de schrijversstrategie in die wetenschappelijke zin?",
      options: [
        "De resultaten als absolute waarheid presenteren",
        "De beperkingen van het onderzoek erkennen",
        "Eerder onderzoek weerleggen",
        "Om meer financiering vragen",
      ],
      answer: "De beperkingen van het onderzoek erkennen",
    },

    // ── Fragment 6: Tekststructuur ───────────────────────────────────────
    {
      question:
        "Een tekst begint met: \"Enerzijds heeft digitalisering het leven gemakkelijker gemaakt. Anderzijds...\"\n\nWat is de TEKSTSTRUCTUUR?",
      options: [
        "Chronologisch — volgorde in de tijd",
        "Probleemoplossend",
        "Vergelijkend / tegenstelling (voor- en nadelen)",
        "Beschrijvend",
      ],
      answer: "Vergelijkend / tegenstelling (voor- en nadelen)",
    },
    {
      question:
        "Welk SIGNAALWOORD geeft aan dat er een tegenstelling volgt?",
      options: ["bovendien", "anderzijds", "daardoor", "immers"],
      answer: "anderzijds",
    },

    // ── Fragment 7: Idioom en uitdrukkingen ──────────────────────────────
    {
      question:
        "\"De nieuwe wetgeving was een doorn in het oog van de industrie.\"\n\nWat betekent 'een doorn in het oog zijn'?",
      options: [
        "Een positieve verandering",
        "Iets dat irriteert of als hinderlijk wordt ervaren",
        "Een juridisch probleem",
        "Een financieel voordeel",
      ],
      answer: "Iets dat irriteert of als hinderlijk wordt ervaren",
    },
    {
      question:
        "\"Ze hield het hoofd koel, ook al stond alles op het spel.\"\n\nWat betekent 'het hoofd koel houden'?",
      options: [
        "Haar hoofd koelen met water",
        "Kalm en rationeel blijven onder druk",
        "Haar gedachten verbergen",
        "Een beslissing uitstellen",
      ],
      answer: "Kalm en rationeel blijven onder druk",
    },

    // ── Fragment 8: Argumentatie ─────────────────────────────────────────
    {
      question:
        "Lees: \"Meer schermtijd leidt tot slechtere slaap. Slechte slaap vermindert concentratie. Verminderde concentratie zorgt voor slechtere schoolprestaties.\"\n\nWat is het ARGUMENTATIETYPE?",
      options: [
        "Cirkelredenering",
        "Ketten-argumentatie (A→B→C→D)",
        "Tegenargument",
        "Analogie",
      ],
      answer: "Ketten-argumentatie (A→B→C→D)",
    },
  ],
};
