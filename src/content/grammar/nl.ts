import type { GrammarLesson } from "../types";

export const nlGrammar: GrammarLesson[] = [
  {
    id: "nl-gram-1", title: "Present Tense (Tegenwoordige Tijd)", level: 1, topic: "Verbs",
    body: `## Present Tense in Dutch (Tegenwoordige Tijd)

The Dutch present tense is used for habits, facts, AND actions happening now.

**Regular verb conjugation (werken = to work):**
- Ik werk (I work)
- Jij/U werkt (You work - informal/formal)
- Hij/Zij/Het werkt (He/She/It works)
- Wij werken (We work)
- Jullie werken (You all work)
- Zij werken (They work)

**Key rule:** The stem = infinitive minus **-en**. Add **-t** for hij/zij/jij/u.

**Example — lopen (to walk):**
- Ik loop, Jij loopt, Hij loopt, Wij lopen

**Inversion:** When the subject comes AFTER the verb (questions), jij loses the -t:
- Jij loopt → Loop jij?
- Werkt hij? (no change for hij/zij)`,
    exercises: [
      { question: "Ik ___ Nederlands.", options: ["spreek","spreekt","spreken","sprak"], answer: "spreek" },
      { question: "Hij ___ in Amsterdam.", options: ["woon","woont","wonen","woonde"], answer: "woont" },
      { question: "___ jij koffie?", options: ["Drink","Drinkt","Drinken","Dronk"], answer: "Drink" },
    ],
  },
  {
    id: "nl-gram-2", title: "De vs Het (Articles)", level: 1, topic: "Nouns",
    body: `## De and Het in Dutch

Dutch has two definite articles: **de** and **het**.

**De-words** (common gender — about 75% of nouns):
- De man (the man), De vrouw (the woman)
- De tafel (the table), De stoel (the chair)
- ALL plurals use **de**: De boeken (the books)

**Het-words** (neuter gender — about 25%):
- Het huis (the house), Het kind (the child)
- Het boek (the book), Het water (the water)
- Diminutives (-je): Het huisje (the little house)

**Indefinite article:** **een** (a/an) — same for all genders
- Een man, Een vrouw, Een huis

**Key tip:** When learning a new noun, always learn it with de or het!`,
    exercises: [
      { question: "___ boek (the book)", options: ["De","Het","Een","Die"], answer: "Het" },
      { question: "___ tafel (the table)", options: ["De","Het","Een","Dat"], answer: "De" },
      { question: "___ kinderen (the children)", options: ["De","Het","Een","Die"], answer: "De" },
    ],
  },
  {
    id: "nl-gram-3", title: "Word Order (Woordvolgorde)", level: 2, topic: "Sentences",
    body: `## Word Order in Dutch

Dutch follows **SVO** word order (Subject-Verb-Object), but changes in subordinate clauses.

**Main clauses:**
- Standard SVO: Ik lees een boek (I read a book)
- With time/place: Morgen lees ik thuis (Tomorrow I read at home)

**Subordinate clauses (after dat, want, omdat, etc.):**
- Subject comes AFTER the verb: Ik weet dat jij leest (I know that you read)

**Questions with question words:**
- Wie leest het boek? (Who reads the book?) - no inversion needed with "wie"

**Important:** Separable verbs split in main clauses:
- Ik bel *aan* → Ik bel later *aan*`,
    exercises: [
      { question: "___ ik wil leren (I want to learn)", options: ["Wat","Waar","Hoe","Waarom"], answer: "Wat" },
      { question: "Hij leest ___ (the book)", options: ["een boek","een boeken","een het boek","een de boek"], answer: "een boek" },
    ],
  },
  {
    id: "nl-gram-4",
    title: "ZIJN en HEBBEN in de OTT (Onvoltooid Tegenwoordige Tijd)",
    level: 1,
    topic: "Verbs",
    overview: "Zijn en hebben zijn de twee belangrijkste onregelmatige werkwoorden van het Nederlands. Je leert hun vervoeging, de inversie-regel (vragen), uitzonderingen, veelgemaakte fouten en hoe je ze gebruikt als zelfstandig én hulpwerkwoord.",
    body: `## Wat is de OTT?\nDe **OTT** (Onvoltooid Tegenwoordige Tijd) is de gewone tegenwoordige tijd: *Ik werk*, *zij eet*, *wij zijn*. \n\n**Zijn** en **hebben** zijn **onregelmatig** – je moet de vormen los leren. Deze les behandelt:\n- Vervoegingstabellen voor beide werkwoorden\n- De beroemde **T-wegval** bij jij in vragen\n- Uitzonderingen (zoals *u heeft*)\n- Meer dan 10 veelgemaakte fouten\n- Oefenvragen met antwoorden`,
    anchorSectionId: "zijn-hebben-ott",
    rulesTable: [
      {
        rule: "Inversie met jij/je (vraagzin)",
        structure: "Werkwoord (zonder -t) + jij/je + rest",
        example: "Ben jij moe? / Heb jij een pen?",
        usage: "Als het onderwerp 'jij' of 'je' achter de persoonsvorm staat (vraag of inversie), verliest het werkwoord de -t van de jij-vorm."
      },
      {
        rule: "U behoudt altijd de -t",
        structure: "U + werkwoord met -t (ook in vragen)",
        example: "U bent aardig. / Hebt u tijd? / Heeft u tijd?",
        usage: "Bij 'u' vervalt nooit een -t, ook niet in vragen. 'U heb' is altijd fout."
      },
      {
        rule: "Hij/zij/het van 'hebben' → heeft (met -ft)",
        structure: "hij / zij (enkelvoud) / het + heeft",
        example: "Hij heeft honger. De kat heeft een staart.",
        usage: "Derde persoon enkelvoud van 'hebben' is 'heeft' – onthoud de -ft."
      }
    ],
    conjugationTable: {
      header: "Persoon | ZIJN | HEBBEN",
      rows: [
        ["ik", "ben", "heb"],
        ["jij/je (normaal)", "bent", "hebt"],
        ["jij/je (vraag/inversie)", "ben", "heb"],
        ["u", "bent", "hebt / heeft"],
        ["hij/zij/het", "is", "heeft"],
        ["wij/we", "zijn", "hebben"],
        ["jullie", "zijn", "hebben"],
        ["zij/ze (meervoud)", "zijn", "hebben"]
      ]
    },
    timeExpressions: {
      header: "Tijdsuitdrukking | Voorbeeld met ZIJN | Voorbeeld met HEBBEN",
      rows: [
        ["nu", "Ik ben nu thuis.", "Ik heb nu geen tijd."],
        ["elke dag", "Hij is elke dag moe.", "Zij heeft elke dag plezier."],
        ["vaak", "Wij zijn vaak blij.", "Jullie hebben vaak haast."],
        ["nooit", "U bent nooit te laat.", "Ik heb nooit problemen."]
      ]
    },
    details: [
      {
        title: "1. Volledige vervoeging van ZIJN (met ezelsbruggetjes)",
        body: "**ejnsbrug:**\n| Persoon | Vorm | Herinnering |\n|---------|------|-------------|\n| ik | **ben** | \"Ik **ben** begint met een B.\" |\n| jij (normaal) | **bent** | \"Jij **bent** met een T.\" |\n| jij (vraag) | **ben** | \"**Ben** jij? De T verdwijnt!\" |\n| u | **bent** | \"U bent beleefd, altijd T.\" |\n| hij/zij/het | **is** | \"Hij is kort en krachtig.\" |\n| wij/jullie/zij | **zijn** | \"Wij zijn met z'n allen.\" |\n\n**Voorbeelden:**\n- Ik ben 24 jaar.\n- *Ben jij de nieuwe leraar?*\n- Het is vandaag mooi weer.\n- Wij zijn samen op vakantie."
      },
      {
        title: "2. Volledige vervoeging van HEBBEN (met -ft-regel)",
        body: "**Ezelsbrug:** *Hij heeft een **F**iets met **T**wee wielen.* → die **-ft** moet er altijd voor hij/zij/het!\n\n| Persoon | Vorm | Opmerking |\n|---------|------|-----------|\n| ik | **heb** | geen -t ooit |\n| jij (normaal) | **hebt** | jij voor pv → hebt |\n| jij (vraag) | **heb** | *Heb jij?* |\n| u | **hebt / heeft** | beide correct |\n| hij/zij/het | **heeft** | met -ft! |\n| wij/jullie/zij | **hebben** | meervoud op -en |"
      },
      {
        title: "3. De T-wegval bij jij (inversie-regel)",
        body: "Zie je **jij** of **je** achter de persoonsvorm? Dan gebruik je de **ik-vorm** (zonder -t).\n\n- *Jij bent* → vraag: **Ben** jij?\n- *Jij hebt* → vraag: **Heb** jij?\n- *Jij loopt* → vraag: **Lopen** jij?  *(onthoud: lopen onreg. → ik loop)*\n- *Je bent* → vraag: **Ben** je?\n\n**Wanneer valt de t weg?** Alleen in vragen / inversie met 'jij' of 'je'. Altijd. Geen uitzondering.\n\n**Fout is altijd:** *Bent jij? Hebt jij? Loopt jij?* ❌"
      }
    ],
    callouts: [
      {
        type: "remember",
        label: "🔔 Onthoud",
        text: "In een vraag met 'jij' of 'je' verliest ZIJN de -t (bent → ben) en HEBBEN verliest de -t (hebt → heb)."
      },
      {
        type: "tip",
        label: "💡 Tip",
        text: "Zeg elke dag hardop: 'Ik ben, jij bent, hij is, wij zijn, jullie zijn, zij zijn.' Zo wordt het automatisme."
      },
      {
        type: "key",
        label: "🔑 Sleutel",
        text: "De derde persoon enkelvoud van 'hebben' is altijd 'heeft' (met -ft). Schrijf nooit 'hebt' voor hij/zij/het."
      }
    ],
    commonMistakes: [
      {
        incorrect: "Ik bent moe.",
        correct: "Ik ben moe.",
        explanation: "Ik krijgt altijd 'ben', nooit 'bent'."
      },
      {
        incorrect: "Bent jij thuis?",
        correct: "Ben jij thuis?",
        explanation: "Bij inversie met 'jij' verliest 'zijn' de -t."
      },
      {
        incorrect: "Hij heb een pen.",
        correct: "Hij heeft een pen.",
        explanation: "Derde persoon enkelvoud van 'hebben' is 'heeft' (niet 'heb' of 'hebt')."
      },
      {
        incorrect: "Jullie is leuk.",
        correct: "Jullie zijn leuk.",
        explanation: "Jullie is meervoud, dus meervoudige persoonsvorm 'zijn'."
      },
      {
        incorrect: "Hebt jij tijd?",
        correct: "Heb jij tijd?",
        explanation: "Vraagzin met 'jij' → 'heb' (zonder -t)."
      },
      {
        incorrect: "U ben aardig.",
        correct: "U bent aardig.",
        explanation: "U krijgt altijd een -t (bent, hebt, heeft)."
      }
    ],
    review: [
      "ZIJN: ik ben, jij bent / ben jij?, u bent, hij is, wij/zij/jullie zijn.",
      "HEBBEN: ik heb, jij hebt / heb jij?, u hebt/heeft, hij heeft, wij/zij/jullie hebben.",
      "In vraagzinnen met 'jij' valt de -t van de persoonsvorm weg.",
      "Uitzondering: 'u' houdt de -t, ook in vragen.",
      "De derde persoon van 'hebben' is 'heeft' (met -ft)."
    ],
    qa: [
      {
        question: "Wat is de juiste vraagzin met 'jij' en 'zijn'?",
        answer: "Ben jij (nooit 'Bent jij')."
      },
      {
        question: "Waarom is 'Hij hebt een auto' fout?",
        answer: "Hij is derde persoon enkelvoud, dus 'heeft' (met -ft)."
      },
      {
        question: "Zijn beide vormen 'u hebt' en 'u heeft' correct?",
        answer: "Ja, beide zijn officieel Nederlands in de tegenwoordige tijd."
      },
      {
        question: "Wat gebeurt er met 'jij bent' als je een vraag maakt?",
        answer: "Het wordt 'Ben jij?' – de -t verdwijnt."
      }
    ],
    exercises: [
      {
        question: "Ik ___ moe. (zijn)",
        options: ["ben", "bent", "is", "zijn"],
        answer: "ben"
      },
      {
        question: "___ jij een fiets? (hebben)",
        options: ["Hebt", "Heb", "Heeft", "Hebben"],
        answer: "Heb"
      },
      {
        question: "De kinderen ___ lief. (zijn)",
        options: ["ben", "bent", "is", "zijn"],
        answer: "zijn"
      },
      {
        question: "U ___ een mooie stem. (hebben)",
        options: ["heb", "hebt", "hebben", "heeft (of hebt)"],
        answer: "heeft (of hebt)"
      },
      {
        question: "Hij ___ gisteren thuis gebleven. (zijn - hulpwerkwoord)",
        options: ["ben", "bent", "is", "zijn"],
        answer: "is"
      },
      {
        question: "___ u meneer Jansen? (zijn - vraag)",
        options: ["Ben", "Bent", "Is", "Zijn"],
        answer: "Bent"
      },
      {
        question: "Mijn broer en ik ___ twee honden. (hebben)",
        options: ["heb", "hebt", "heeft", "hebben"],
        answer: "hebben"
      },
      {
        question: "Kies de juiste vraag:",
        options: ["Hebt jij honger?", "Heb jij honger?"],
        answer: "Heb jij honger?"
      },
      {
        question: "Het meisje ___ lang haar. (hebben)",
        options: ["heb", "hebt", "heeft", "hebben"],
        answer: "heeft"
      },
      {
        question: "___ wij op tijd? (zijn - vraag)",
        options: ["Zijn", "Is", "Ben", "Bent"],
        answer: "Zijn"
      }
    ]
   },
  {
    id: "nl-gram-5",
    title: "Tegenwoordige Voltooid Tijd (Present Perfect)",
    level: 3,
    topic: "Verbs",
    anchorSectionId: "rules",

    overview:
      "De **tegenwoordige voltooid tijd** (perfectum) gebruikt je voor acties die in het verleden begonnen zijn en nog van invloed zijn op het heden, of voor levenservaringen zonder specifieke tijd.",

    body: `## Tegenwoordige Voltooid Tijd

De **tegenwoordige voltooid tijd** combineert het verleden met het heden.

**Vorm:**
- *ik / jij / wij / zij*: **hebben** + voltooid deelwoord
- *hij / zij / het*: **heeft** + voltooid deelwoord

**Voorbeelden:**
- *Ik heb een boek gelezen.*
- *Zij heeft in Amsterdam gewoond.*
- *Wij hebben veel gereisd.*`,

    rulesTable: [
      {
        rule:     "Hebben + voltooid deelwoord",
        structure:"onderwerp + hebben/has + VD",
        example:  "Ik heb gewerkt.",
        usage:    "Meeste werkwoorden (onovergankelijks)",
      },
      {
        rule:     "Zijn + voltooid deelwoord",
        structure:"onderwerp + is/ben/bent + VD",
        example:  "Ik ben naar huis gegaan.",
        usage:    "Beweging of verandering van toestand",
      },
      {
        rule:     "Negatief",
        structure:"onderwerp + heb/hebt/heeft/hebben + niet + VD",
        example:  "Ik heb mijn sleutel niet gevonden.",
        usage:    "Ontkening van een voorbijgaande actie",
      },
      {
        rule:     "Vraag (ja/nee)",
        structure:"Heb/Hebt/Heeft + onderwerp + VD?",
        example:  "Heb je je huiswerk gedaan?",
        usage:    "Vraag of iets al gebeurd is",
      },
      {
        rule:     "W-vraag",
        structure:"W-woord + heb/hebt/heeft/hebben + onderwerp + VD?",
        example:  "Wat heb je gedaan?",
        usage:    "Specific questions",
      },
      {
        rule:     "Al / nog",
        structure:"Heb/ … al / nog / … VD",
        example:  "Heb je het al gedaan?",
        usage:    "Al = voltooid; Nog = nog niet",
      },
      {
        rule:     "Ooit / nooit",
        structure:"Heb/ … ooit / nooit / … VD?",
        example:  "Heb je dat ooit gedaan?",
        usage:    "Levenservaring, geen specifieke tijd",
      },
      {
        rule:     "Sinds",
        structure:"onderwerp + VD + sinds + punt in de tijd",
        example:  "Ik woon hier sinds 2020.",
        usage:    "Startpunt dat nog steeds actief is",
      },
      {
        rule:     "Tot nu toe",
        structure:"onderwerp + VD + tot nu toe",
        example:  "Ik heb zes talen tot nu toe geleerd.",
        usage:    "Totaal tot op dit moment",
      },
    ],

    conjugationTable: {
      header: "Persoon | Hebben / zijn | Voorbeeld",
      rows: [
        ["ik",        "heb / ben", "Ik heb gewerkt."],
        ["jij (normaal)",  "hebt / bent","Jij hebt je huiswerk gedaan."],
        ["jij (vraag)",    "heb / ben",  "Heb jij gedaan?"],
        ["u",        "hebt / heeft","U hebt/heeft een auto."],
        ["hij/zij/het",    "heeft / is", "Hij heeft de film gezien."],
        ["wij/we",         "hebben / zijn","Wij hebben gewerkt."],
        ["jullie",         "hebben / zijn","Jullie hebben gegeten."],
        ["zij/ze (mv)",    "hebben / zijn","Zij zijn naar huis gegaan."],
      ],
    },

    timeExpressions: {
      header: "Tijdsuitdrukking | Regel | Voorbeeld",
      rows: [
        ["al",             "reeds voltooid",       "Ik heb het al gedaan."],
        ["nog",            "nog niet voltooid",    "Ik heb het nog niet gedaan."],
        ["net",            "zojuist voltooid",     "Ik heb het net gedaan."],
        ["ooit",           "op enig moment in het leven", "Heb je dat ooit gedaan?"],
        ["nooit",          "nooit in je leven",    "Ik heb dat nooit gedaan."],
        ["sinds 2020",     "vanaf die tijd tot nú", "Ik woon hier sinds 2020."],
        ["tot nu toe",     "totaal tot op dit moment", "Ik heb zes talen tot nu toe geleerd."],
        ["de afgelopen maand","recente periode",   "De afgelopen maand heb ik veel gewerkt."],
        ["gisteren",       "puur verleden",        "Ik heb gisteren een fiets gekocht. (nog van toepassing)"],
        ["vorig jaar",     "verre verleden",       "Vorig jaar heb ik een hond gekocht. (recent)"],
      ],
    },

    details: [
      {
        title: "1. Wanneer gebruik je tegenwoordige voltooid tijd?",
        body: `## Drie belangrijkste gevallen

### 1. Recente actie met huidig resultaat:
*Ik heb mijn jas vergoten.* → De actie is gedaan, het resultaat is nú: ik heb geen jas.

### 2. Levenservaring (zonder specifieke tijd):
*Ik heb in Frankrijk gewoond.* → Gisteren, vorig jaar, ooit, nooit, tot nu toe, al, nog, net

### 3. Actie die begon in het verleden en nog doorgaat:
*Ik heb hier sinds 2018 gewoond.* → Ik woon er nog steeds.

| Tegenwoordige voltooid | Voltooid verleden tijd |
|---|---|
| Al / nog / ooit / sinds | Gisteren / vorig jaar / op 1 jan |
| Resultaat zichtbaar nú | Actie is afgesloten |
| I have lived here for 3 years | I lived in London for 3 years |`
      },
      {
        title: "2. Hebben of zijn? De gouden regel",
        body: `## Overwhich hulpwerkwoord gebruik je

### Hebbende werkwoorden (meeste gevallen):
- Regelmatige werkwoorden: *maken, schrijven, koken*
- Onovergankelijke werkwoorden: *hebben, weten, kunnen*

### Zijn-de werkwoorden (verandering van plaats/toestand):
- *gaan, komen, lopen, rijden, fietsen* (beweging)
- *staan, zitten, vallen, groeien* (toestandswijziging)
- *beginnen, eindigen* (tijdsverandering)

| Werkwoord | Hulp | Voorbeeld |
|---|---|---|
| lopen | is | Ik ben naar de winkel gelopen. |
| fietsen | is | Hij is naar Utrecht gefietst. |
| schrijven | heeft | Ik heb een brief geschreven. |
| spelen | heeft | Wij hebben voetbal gespeeld. |`
      },
      {
        title: "3. Voltooid deelwoord vormen",
        body: `## Regelmatige werkwoorden

### Regel 1 — stam + -t (ge-…-t):
> Bijna alle regelmatige werkwoorden: *maken → **gemaakt*** · *werken → **gewerkt***

### Regel 2 — stam + -en (ge-…-en):
> Onregelmatige werkwoorden: *lezen → **gelezen*** · *nemen → **genomen***

### Regel 3 — Voorzetsel 'ge-' weglaten:
> Werkwoorden die al met ge- beginnen krijgen geen tweede ge-: *gebeuren → **is gebeurd***

> ❌ Nog een veelgemaakte fout: *Ik ben **gezijn** in Spanje.* ✅ *Ik ben **geweest** in Spanje.*`
      },
    ],

    callouts: [
      {
        type:  "tip",
        label: "💡 Tip",
        text:  "Gebruik tekenwaarden: *al, nog, net, ooit, nooit, sinds, tot nu toe* om de Tegenwoordige Voltooid Tijd te signaleren.",
      },
      {
        type:  "key",
        label: "🔑 Sleutel",
        text:  "Kijk naar het hulpwerkwoord: hebben of zijn? Hebben voor de meeste werkwoorden, zijn voor beweging/toestandswijziging.",
      },
      {
        type:  "remember",
        label: "🔔 Onthoud",
        text:  "Gisteren / vorig jaar / op 2 maart = meestal voltooid verleden tijd, tenzij het resultaat nog steeds zichtbaar is.",
      },
    ],

    commonMistakes: [
      {
        incorrect:  "Ik ben een boek gelezen.",
        correct:    "Ik heb een boek gelezen.",
        explanation: "'Lezen' gebruikt 'hebben' — alleen beweging/toestand gebruikt 'zijn'.",
      },
      {
        incorrect:  "Ik heb naar de winkel gelopen.",
        correct:    "Ik ben naar de winkel gelopen.",
        explanation: "'Lopen' is overgankelijk (beweging) → gebruik 'zijn'.",
      },
      {
        incorrect:  "Ik heb een appeltaart gegeten.",
        correct:    "Ik heb een appeltaart gegeten.",
        explanation: "Juist — 'eten' gebruikt 'hebben'. Soms is de juiste vorm juist de eenvoudigste!",
      },
      {
        incorrect:  "Heb je je ogen gesloten?",
        correct:    "Heb je je ogen gesloten?",
        explanation: "Juist — 'sluiten' gebruik je met 'hebben'.",
      },
      {
        incorrect:  "Ik ben een brief geschreven.",
        correct:    "Ik heb een brief geschreven.",
        explanation: "'Schrijven' gebruikt 'hebben', niet 'zijn'.",
      },
      {
        incorrect:  "Zij is thuis gebleven.",
        correct:    "Zij is thuis gebleven.",
        explanation: "Juist! Bey is thuis gebruik je 'is' + voltooid deelwoord.",
      },
    ],

    review: [
      "Tegenwoordige voltooid tijd = hebben/zijn + voltooid deelwoord",
      "Hebben = meeste werkwoorden; Zijn = beweging of verandering van toestand",
      "Al / nog / ooit / sinds → teken van tegenwoordige voltooid tijd",
      "Gisteren / vorig jaar → meestal voltooid verleden tijd",
      "Regelmatig VD = stam + -t (emaakt); onregelmatig = stam + -en (gelezen)",
    ],

    qa: [
      {
        question: "Kies hulpwerkwoord: 'Ik ___ naar het strand gewandeld.'",
        answer:  "ben — 'wandelen' is overgankelijk → gebruik 'zijn'",
      },
      {
        question: "Maak een vraag van: 'Jij hebt je huiswerk gedaan.'",
        answer:  "Heb jij je huiswerk gedaan? — vraag met 'heb' + onderwerp + VD",
      },
      {
        question: "Tegenwoordige voltooid of voltooid verleden? '___ gisteren een film gezien.'",
        answer:  "Ik zag — 'gisteren' is een gesloten verleden tijd → voltooid verleden",
      },
      {
        question: "Wanneer gebruik je 'sinds' + welke tijd?",
        answer:  "'Sinds' + punt in de tijd (sinds 2020, sinds gisteren) + tegenwoordige voltooid tijd",
      },
    ],

    exercises: [
      {
        question: "Ik ___ naar het strand gewandeld.",
        options:  ["ben","heb","zijn","hebben"],
        answer:   "ben",
      },
      {
        question: "Zij ___ een brief geschreven.",
        options:  ["is","heeft","ben","hebben"],
        answer:   "heeft",
      },
      {
        question: "___ je ooit naar Spanje geweest?",
        options:  ["Ben","Heb","Is","Zijn"],
        answer:   "Ben",
      },
      {
        question: "___ je het huiswerk al gedaan?",
        options:  ["Heb","Ben","Heeft","Zijn"],
        answer:   "Heb",
      },
    ],
  },
];
