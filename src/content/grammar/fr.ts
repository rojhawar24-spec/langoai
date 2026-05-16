import type { GrammarLesson } from "../types";

export const frGrammar: GrammarLesson[] = [
  /* ═══════════════════════════════════════════════════════════
   * fr-gram-1 — Le Présent (Present Tense)
   * ═══════════════════════════════════════════════════════════ */
  {
    id: "fr-gram-1",
    title: "Le Présent (Present Tense)",
    level: 1,
    topic: "Verbs",
    anchorSectionId: "rules",

    overview:
      "**Le Présent** décrit les habitudes, les vérités générales et les actions qui se déroulent maintenant. La terminaison dépend du groupe du verbe (-ER, -IR, -RE) et du pronom sujet.",

    body: `## Le Présent en Français
Le présent est utilisé pour des habitudes, des vérités générales et des actionsNow.
**Verbes réguliers -ER (parler = parler ou praten):**
- Je parle (Je parle)
- Tu parles (Tu parles — informeel)
- Il/Elle parle (Hij/Zij praat)
- Nous parlons (Wij praten)
- Vous parlez (U spreekt / Jullie praten)
- Ils/Elles parlent (Zij praten)
**Verbes réguliers -IR (finir = finir):**
- Je finis, Tu finis, Il finit
- Nous finissons, Vous finissez, Ils finissent
**Verbes réguliers -RE (vendre = verkopen):**
- Je vends, Tu vends, Il vend
- Nous vendons, Vous vendez, Ils vendent`,

    rulesTable: [
      {
        rule:     "-ER verbs — 1e/2e pers mv",
        structure:"stam + -e / -es / -e / -ons / -ez / -ent",
        example:  "je parle, nous parlons, ils parlent",
        usage:    "Rempel: base + ending based on subject pronoun",
      },
      {
        rule:     "-IR verbs — 1e/2e pers mv",
        structure:"stem -(i)s / -(i)s / -it / -issons / -issez / -issent",
        example:  "je finis, nous finissons, ils finissent",
        usage:    "verbs in -ir group: most add -iss- in nous/vous/ils",
      },
      {
        rule:     "-RE verbs — 1e/2e pers mv",
        structure:"stem + ending (unique)",
        example:  "je vends, tu vends, il vend",
        usage:    "Drop -e from infinitive before adding ending",
      },
      {
        rule:     "Irregular — être (to be)",
        structure:"suis / es / est / sommes / êtes / sont",
        example:  "je suis, tu es, il est, nous sommes",
        usage:    "Most important irregular — memorize all forms",
      },
      {
        rule:     "Irregular — avoir (to have)",
        structure:"ai / as / a / avons / avez / ont",
        example:  "j'ai, tu as, il a, nous avons",
        usage:    "Auxiliary verb used in compound tenses",
      },
      {
        rule:     "Negatief",
        structure:"ne + pas + werkwoord",
        example:  "Je ne parle pas (Ik spreek niet)",
        usage:    "Negation surrounds the verb: ne ... pas",
      },
      {
        rule:     "Vraagzin",
        structure:"werkwoord + onderwerp + rest?",
        example:  "Parles-tu français? (Spreek je Frans?)",
        usage:    "Inverseer de volgorde: werkwoord eerst",
      },
    ],

    conjugationTable: {
      header: "Persoon | PARLER | FINIR | VENDRE | ÊTRE | AVOIR",
      rows: [
        ["je (ik)",   "parle",  "finis", "vends",  "suis",  "ai"],
        ["tu (jij)",  "parles", "finis", "vends",  "es",    "as"],
        ["il/elle",   "parle",  "finit", "vend",   "est",   "a"],
        ["nous (wij)","parlons","finissons", "vendons", "sommes", "avons"],
        ["vous (u/jullie)","parlez","finissez","vendez","êtes","avez"],
        ["ils/elles (zij)", "parlent","finissent","vendent","sont","ont"],
      ],
    },

    timeExpressions: {
      header: "Tijdsuitdrukking | Voorbeeld Frans",
      rows: [
        ["tous les jours",     "habitude = Présent", "Je travaille tous les jours."],
        ["toujours / souvent",  "fréquence = Présent",  "Elle toujours chante."],
        ["maintenant / à présent","nu = Présent",    "Je suis fatigué maintenant."],
        ["le lundi / le mardi", "vaste dag = Présent","Nous avons cours le lundi."],
        ["jamais / rarement",   "gewoonte = Présent",  "Il ne mange jamais de viande."],
      ],
    },

    details: [
      {
        title: "1. Hulpregel: vervoegingsuitgangen",
        body: `## Vervoegingsuitgangen per groep
| Groep | Stam | Uitgangen |
|-------|------|-----------|
| -ER    | stam | -e / -es / -e / -ons / -ez / -ent |
| -IR    | stem + -iss | -is / -is / -it / -issons / -issez / -issent |
| -RE | stam (zonder -e) | -s / -s / -(geen) / -ons / -ez / -ent |
| **Onregelmatig** | ★ | elle est, je suis, etc.`,
      },
      {
        title: "2. Kerntabel: être & avoir (uit het hoofd leren!)",
        body: `## Deux verbes essentiels
**ÊTRE (zijn):**
je suis, tu es, il est, nous sommes, vous êtes, ils sont
**AVOIR (hebben):**
j'ai, tu as, il a, nous avons, vous avez, ils ont
> 💡 Deze twee onregelmatige werkwoorden zijn de meest gebruikte — leer ze uit je hoofd!`,
      },
      {
        title: "3. Negatie en vraagstelling",
        body: `## Négation et questions
**Negatie (ne ... pas):**
- Je ne parle pas (Ik spreek niet)
- Il ne sait pas (Hij weet het niet)
- Ils ne sont pas (Zij zijn niet)
**Vraag (inversie):**
- Tu parles français → Parles-tu français?
- Elle aime le café → Aime-t-elle le café?
> ⚠️ bij 3e pers v nl + 'a': gebruik *-t-* tussenschakelstuk: *Aime-**t**-elle*`,
      },
    ],

    callouts: [
      {
        type:  "remember",
        label: "🔔 Rappel",
        text:  "Être en avoir zijn de twee meest gebruikte onregelmatige werkwoorden — leer hun vormen uit je hoofd!",
      },
      {
        type:  "tip",
        label: "💡 Astuce",
        text:  "Parles-tu French? → *Parle* (vraag eerst) + *s-tu* (verkort formeel of inversie).",
      },
      {
        type:  "key",
        label: "🔑 Clé",
        text:  "Negatie: ne + werkwoord + pas. Vraag: werkwoord + onderwerp.",
      },
    ],

    commonMistakes: [
      {
        incorrect:  "Je ne parles pas.",
        correct:    "Je ne parle pas.",
        explanation: "¿Pour le 'je' géneral? Use the base form 'parle' without -s.",
      },
      {
        incorrect:  "Ils parlent français.",
        correct:    "Ils parlent français.",
        explanation: "Correct! 'Ils' uses the base 'parlent' (-ent ending).",
      },
      {
        incorrect:  "Elle est contente.",
        correct:    "Elle est contente.",
        explanation: "'Est' is correct — 'être' conjugate for 'elle': il/elle est.",
      },
      {
        incorrect:  "Parle tu français?",
        correct:    "Parles-tu français?",
        explanation: "Vraag met 'tu': gebruik 'es' aan het begin: 'Parles-tu?' ('-t-' tussenschakelstuk).",
      },
    ],

    review: [
      "Le Présent = gewoonten, feiten, nu",
      "-ER: base + ending; -IR: base + -iss-; -RE: base + ending",
      "ne ... pas = negatie; werkwoord eerst = vraag",
      "Être: suis/es/est/sommes/êtes/sont (altijd leren!)",
      "Avoir: ai/as/a/avons/avez/ont (ook altijd leren!)",
    ],

    qa: [
      {
        question: "Hoe vervoeg je 'parler' voor 'nous'?",
        answer:  "nous parlons — we zen de -ons uitgang.",
      },
      {
        question: "Wat is het verkeerd hier: 'Je ne parle pas' — is dit juist of fout?",
        answer:  "Juist! Negatie has 'ne ... pas' and the verb is conjugated as 'parle' (not 'parles').",
      },
      {
        question: "Wat is het Präsens van 'aller' (to go) voor 'je'?",
        answer:  "vais — aller is onregelmatig: je vais, tu vas, il va (leer uit jou hoofd!)",
      },
    ],

    exercises: [
      { question: "Je ___ français.",         options: ["parle","parles","parlent","parlez"], answer: "parle" },
      { question: "Nous ___ à Paris.",       options: ["habite","habites","habitons","habitent"], answer: "habitons" },
      { question: "Elle ___ contente.",      options: ["suis","es","est","sont"], answer: "est" },
      { question: "Tu ___ le français?",     options: ["parle","parles","parlons","parlez"], answer: "parles" },
      { question: "Ils ___ au cinéma.",      options: ["vont","vas","va","allons"], answer: "vont" },
      { question: "Je ___ (finir) mes devoirs.", options: ["finis","finissons","finissez","finissent"], answer: "finis" },
    ],
  },

  /* ═══════════════════════════════════════════════════════════
   * fr-gram-2 — Passé Composé vs Imparfait
   * ═══════════════════════════════════════════════════════════ */
  {
    id: "fr-gram-2",
    title: "Passé Composé vs Imparfait (Les Deux Passés)",
    level: 2,
    topic: "Verbs",
    anchorSectionId: "rules",

    overview:
      "Frans kent **twee** verleden tijden: het **Passé Composé** (voltooid, eenmalig) en het **Imparfait** (onvoltooid, gewoonte of achtergrond).",

    body: `## Passé Composé vs Imparfait
**Passé Composé** — compleet, éénmalige acties:
Geformeerd met *avoir* of *être* + voltooid deelwoord
- J'ai mangé (Ik heb gegeten / Ik at)
- Elle est allée (Zij is gegaan)
**Imparfait** — lopend, gewoonte of beschrijvend verleden:
-stam + -ais, -ais, -ait, -ions, -iez, -aient
- Je mangeais (Ik was aan het eten / Ik At altijd)
- Il faisait beau (Het was mooi weer)`,

    rulesTable: [
      {
        rule:     "Passé Composé — avoir hulp",
        structure:"avoir (geconjugeerd) + voltooid deelwoord",
        example:  "J'ai mangé, Tu as fini, Il a vu",
        usage:    "Voor de meeste werkwoorden, met 'avoir' als hulpwerkwoord",
      },
      {
        rule:     "Passé Composé — être hulp",
        structure:"être (geconjugeerd) + voltooid deelwoord",
        example:  "Je suis allé(e), Tu es venu(e)",
        usage:    "Voor 17 'DR MRS VANDERTRAMP'-werkwoorden en alle reflexieve werkwoorden",
      },
      {
        rule:     "Imparfait — stam afleiden",
        structure:" nous-vorm Präsens + -ons → stam + -ais/-ais/-ait/-ions/-iez/-aient",
        example:  "nous parlons → je parlais, tu parlais, il parlait",
        usage:    "Gebruik de 'nous'-stam van het Präsens + Imparfait endings",
      },
      {
        rule:     "Ilmarfait signalen",
        structure:"Imparfait signalen: chaque fois, chaque jour, d'habitude",
        example:  "Quand j'était jeune... (Toen ik jong was...)",
        usage:    "Voor gewoonten, omschrijving, achtergrond in het verleden",
      },
      {
        rule:     "Passé Composé of Imparfait — Wanneer welke?",
        structure:"PC = compleet / specifiek / eenmalig || Imparfait = gewoonte / omschrijving",
        example:  "Hier j'ai vu un film (PC) / Quand j'étais petit, je jouais (Imparfait)",
        usage:    "Werkt vaak samen in één zin: Eén keer PC (actie) + Imparfait (achtergrond/chère)",
      },
      {
        rule:     "DR MRS VANDERTRAMP (être hulpwoorden)",
        structure:"Devenir, Revenir, Monter, Rester, Sortir, Venir, Aller, Naître, Descendre, Entrer, Rentrer, Tomber, Retourner, Arriver, Mourir, Partir, Passer",
        example:  "Elle est devenue médecin. Je suis rentré tard.",
        usage:    "Deze 17 werkwoorden altijd met être in Passé Composé — gebruik het ezelsbruggetje!",
      },
    ],

    conjugationTable: {
      header: "Persoon | ÊTRE | AVOIR | PARLER (Imparfait) | ALLER (Passé Composé avec être)",
      rows: [
        ["je (ik)",   "suis",   "ai",   "parlais",   "suis allé(e)"],
        ["tu (jij)",  "es",     "as",   "parlais",   "es allé(e)"],
        ["il/elle",   "est",    "a",    "parlait",   "est allé(e)"],
        ["nous (wij)","sommes", "avons", "parlions",  "sommes allé(e)(s)"],
        ["vous (u/jullie)","êtes","avez","parliez", "êtes allé(e)(s)"],
        ["ils/elles", "sont",   "ont",  "parlaient", "sont allé(e)(s)"],
      ],
    },

    timeExpressions: {
      header: "Tijdsuitdrukking | Welke tijd? | Voorbeeld",
      rows: [
        ["hier, la semaine dernière", "Passé Composé (afgesloten)", "Hier j'ai mangé une pomme."],
        ["une fois, soudain",          "Passé Composé",               "Soudain, il est entré."],
        ["chaque jour, souvent",       "Imparfait (gewoonte)",        "Chaque jour, je lisais un livre."],
        ["tandis que, quand",          "Imparfait (achtergrond)",     "Quand j'étais petit, je jouais."],
        ["d'habitude, autrefois",      "Imparfait",                   "D'habitude, il faisait beau."],
        ["il y a deux jours",          "Passé Composé of Imparfait",  "Il y a deux jours, j'ai vu Marie."],
      ],
    },

    details: [
      {
        title: "1. Passé Composé vormen (être vs avoir)",
        body: `## Vormen van Passé Composé
**Avoir werkwoorden (meeste):**
- j'ai parlé, tu as fini, il a vu, nous avons pris
**Être werkwoorden (DR-MRS-VANDERTRAMP):**
- je suis parti(e), tu es venu(e), il est né
> ✅ *Je suis allé au cinéma.* (Ik ben naar de film geweest)
> ✅ *Elle est venue hier.* (Zij kwam hierheen)
> ⚠️ Bij 'être' passé composé: het voltooid deelwoord matched in geslacht en aantal met het onderwerp!`,
      },
      {
        title: "2. Het Imparfait vormen",
        body: `## Hoe maak je het Imparfait?
Stap 1: Neem de **nous**-vorm van het Présent.
Stap 2: Haal **-ons** weg → je hebt de stam.
Stap 3: Voeg de Imparfait-eindes toe:
- **-ais** voor ik en jij
- **-ait** voor hij/zij/het
- **-ions** voor wij
- **-iez** voor u/jullie
- **-aient** voor zij
\\| Voorbeeld \\| Nous (Présens) \\| Nous-ons weg → stam \\| Imparfait \\|
\\|----------\\|--------------\\|---------------------\\|----------\\|
| parler | nous parlons | parl- | je parl**ais** |
| finir | nous finissons | finiss- | tu finiss**ais** |
| faire | nous faisons | fais- | il fais**ait** |`,
      },
      {
        title: "3. Wanneer gebruik je welke tijd?",
        body: `## De gouden regel
| Kenmerk | PC | Imparfait |
|---------|----|-----------|
| **Actie vs.** beschrijving | Compleet / afsluitend | Achtergrond / toestand |
| **Tijdstip** | Specifiek moment: gisteren, laatst | Zonder specifiek moment |
| **Gewoonte** | ❌ Nee | ✅ Ja |
| **Signalen** | soudain, hier, une fois | d'habitude, chaque fois, quand |
| **Coup de coeur** | "Hij het een film gezien" | "Hij filmde graag" (vertelt over een gewoonte in het verleden)`,
      },
    ],

    callouts: [
      {
        type:  "key",
        label: "🔑 Clé",
        text:  "DR MRS VANDERTRAMP = 17 werkwoorden die altijd 'être' als hulp gebruiken in Passé Composé. Leer de ezelsbrug!",
      },
      {
        type:  "remember",
        label: "🔔 Rappel",
        text:  "Imparfait = omschrijvend / gewoonte. PC = afsluitend. 'Vandaag heb ik gegeten' = PC, 'Ik at elke dag' = Imparfait.",
      },
      {
        type:  "tip",
        label: "💡 Astuce",
        text:  "In één zin: Imparfait eerst (achtergrond), dan PC (actie): 'Quand j'étais petit, j'ai vu un film.'",
      },
    ],

    commonMistakes: [
      {
        incorrect:  "J'ai été à Paris hier.",
        correct:    "Je suis allé à Paris hier.",
        explanation: "'Aller' is een 'être'-werkwoord in Passé Composé, gebruik niet 'avoir'.",
      },
      {
        incorrect:  "Il mangeait quand la porte a ouvert.",
        correct:    "Il mangeait quand la porte s'est ouverte.",
        explanation: " Eenmalige actie op een specifiek moment = PC (s'est ouverte), achtergrond = Imparfait (mangeait).",
      },
      {
        incorrect:  "Elle est tombée → passé composé met être geeft correcte overeenkomst.",
        correct:    "Correct — 'est tombée' matched geslacht (vrouwelijk ending -ée).",
        explanation: "Correct!",
      },
    ],

    review: [
      "Passé Composé = compleet / eenmalig / avoir of être + voltooid deelwoord",
      "Imparfait = gewoonte / achtergrond / omschrijvend verleden",
      "DR MRS VANDERTRAMP → altijd avec être",
      "Bij 'être' PC: overeenkomst in geslacht/ aantal tussen onderwerp en voltooid deelwoord",
      "Imparfait: stam van nous-Présens + -ais / -ais / -ait / -ions / -iez / -aient",
    ],

    qa: [
      {
        question: "Welke hulp in PC: 'Je ___ parti à 8h.'",
        answer:  "suis — 'partir' is een DR-MRS-VANDERTRAMP werkwoord → être.",
      },
      {
        question: "'Hier, je ___ (voir) un film.' Welke tijd?",
        answer:  "ai vu — eenmalige actie op een specifiek moment = Passé Composé.",
      },
      {
        question: "'Chaque jour, je ___ (lire) un livre.' Welke tijd?",
        answer:  "lisais — 'chaque jour' = gewoonte = Imparfait.",
      },
      {
        question: "Maak een zin in Imparfait: 'nous faire' qu'est-ce que ça donne?",
        answer:  "nous faisons → fais- → je faisais, tu faisais, il faisait, nous faisions, vous faisiez.",
      },
    ],

    exercises: [
      { question: "Hier, je ___ au cinéma.", options: ["vais","allais","suis allé","irai"], answer: "suis allé" },
      { question: "Quand j'étais jeune, je ___ du piano.", options: ["joue","ai joué","jouais","jouerai"], answer: "jouais" },
      { question: "Elle ___ (être)Content hier.", options: ["était","a été","est","sera"], answer: "était" },
      { question: "Nous ___ des amis hier soir.", options: ["avons vu","voyons","voyons","verrons"], answer: "avons vu" },
      { question: "Chaque été, nous ___ à la plage.", options: ["sommes allés","allions","irons","allons"], answer: "allions" },
    ],
  },
];
