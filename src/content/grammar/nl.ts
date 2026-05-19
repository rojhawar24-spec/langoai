import type { GrammarLesson } from "../types";

export const nlGrammar: GrammarLesson[] = [
  {
    id: "nl-uitspraak-1",
    title: "Uitspraak & Klanken",
    level: 1,
    topic: "Uitspraak",
    body: "Een compleet overzicht van de Nederlandse uitspraak: het alfabet, klinkers, medeklinkers, tweeklanken en de belangrijkste regels.",
    overview:
      "Nederlands heeft een rijke klankleer met korte en lange klinkers, echte tweeklanken en bijzondere medeklinkers zoals de harde g en eindklankverscherping. In deze les leer je alles van A tot Z — inclusief valkuilen en oefenvragen.",

    // ── Alphabet table (timeExpressions slot) ──────────────────────────
    timeExpressions: {
      header: "Letter|Naam|Klank(en)|Voorbeeld",
      rows: [
        ["A", "'aa'", "kort a / lang aa / doffe a", "kat · maan · bruikbaar"],
        ["B", "'bee'", "b (woordeinde → p)", "been · web → wep"],
        ["C", "'see'", "k vóór a/o/u · s vóór e/i", "club · cel"],
        ["D", "'dee'", "d (woordeinde → t)", "dak · hond → hont"],
        ["E", "'ee'", "kort e / lang ee / doffe e (sjwa)", "bed · heel · de"],
        ["F", "'ef'", "f", "fiets"],
        ["G", "'gee'", "harde g (raspend, = ch)", "goed · lachen"],
        ["H", "'haa'", "h", "huis"],
        ["I", "'ie'", "kort i / lang ie", "pit · lief"],
        ["J", "'jee'", "j (als Engelse y)", "ja"],
        ["K", "'kaa'", "k", "kat"],
        ["L", "'el'", "l", "land"],
        ["M", "'em'", "m", "maan"],
        ["N", "'en'", "n · vóór k/g als ng", "neus · denken"],
        ["O", "'oo'", "kort o / lang oo", "pot · boom"],
        ["P", "'pee'", "p", "paard"],
        ["Q", "'kuu'", "kw", "quiz"],
        ["R", "'er'", "rollend · keel-r of Gooise r", "rood"],
        ["S", "'es'", "s", "slang"],
        ["T", "'tee'", "t", "tafel"],
        ["U", "'uu'", "kort u / lang uu", "put · muur"],
        ["V", "'vee'", "v (nooit aan woordeinde)", "vader · lief"],
        ["W", "'wee'", "zachte w (tussen v en w)", "water"],
        ["X", "'iks'", "ks", "examen"],
        ["Y", "'ei' of 'i-grec'", "ie of ei/ij", "yoghurt · y-as"],
        ["Z", "'zet'", "z (woordeinde → s)", "zee · huis → huiss"],
      ],
    },

    // ── Rules cards ────────────────────────────────────────────────────
    rulesTable: [
      {
        rule: "Open en gesloten lettergreep",
        structure: "Gesloten (eindigt op medeklinker) = korte klinker\nOpen (eindigt op klinker) = lange klinker",
        example: "kat (gesloten, kort) · ma-nen (open, lang aa)",
        usage: "Bepaalt altijd de klinkerlengte. Dit is de ijzeren basisregel van de Nederlandse spelling en uitspraak.",
      },
      {
        rule: "Dubbele medeklinker = korte klinker",
        structure: "Korte klinker behouden → verdubbel de medeklinker",
        example: "kat → katten · bed → bedden · bom → bommen",
        usage: "Zonder dubbele medeklinker zou de lettergreep open worden en de klinker lang klinken.",
      },
      {
        rule: "Doffe e (sjwa)",
        structure: "Zwakke lettergrepen bevatten een sjwa: ə",
        example: "lopen → lopuh · vrolijk → vroo-luhk · de, te, je, me, we",
        usage: "De sjwa is de meest voorkomende klank in het Nederlands. Nooit de volle e uitspreken in zwakke lettergrepen.",
      },
      {
        rule: "Eindklankverscherping",
        structure: "Stemhebbende medeklinker aan het woordeinde → stemloos",
        example: "hond → hont · web → wep · huis → huiss",
        usage: "Zodra een klinker volgt keert de stem terug: honden (d), huizen (z), webben (b).",
      },
      {
        rule: "g en ch zijn gelijk",
        structure: "g = ch = raspende keelklank (als in Schots loch)",
        example: "goed · dag · lachen · ligt — licht en ligt klinken gelijk",
        usage: "Nooit de g als zachte Engelse g uitspreken. Altijd de harde keelklank.",
      },
      {
        rule: "sch = s + ch",
        structure: "sch wordt uitgesproken als s gevolgd door de harde ch",
        example: "school = s-ch-ool (niet sjool) · schip · schoon",
        usage: "Nooit als Engelse sh uitspreken. De s en ch zijn beide hoorbaar.",
      },
      {
        rule: "ng en nk",
        structure: "ng = één nasale klank (als Engels sing)\nnk = ng + k",
        example: "ring · zingen · bank (= bang-k)",
        usage: "De g in ng wordt niet apart uitgesproken. Bij nk klinkt de k duidelijk door.",
      },
      {
        rule: "w is labiodentaal",
        structure: "Nederlandse w = zachte v-achtige klank (niet Engelse w)",
        example: "water · wereld · wiel",
        usage: "De lippen raken elkaar niet zoals bij de Engelse w. De tanden en lip raken elkaar lichtjes.",
      },
    ],

    // ── Conjugation table: Klinkers overzicht ─────────────────────────
    conjugationTable: {
      header: "Type|Kort|Lang|Bijzonderheid",
      rows: [
        ["a-klank", "a — kat", "aa — maan", "Dubbel aa in gesloten lettergreep"],
        ["e-klank", "e — pet", "ee — peet", "Doffe e (sjwa) in: de, lopen, -lijk"],
        ["i-klank", "i — pit", "ie — lief", "ie altijd lang, ook in open lettergreep"],
        ["o-klank", "o — pot", "oo — boom", "oe = lange klinker: boek, moeder"],
        ["u-klank", "u — put", "uu — muur", "eu = zuivere lange klinker: neus, deur"],
        ["Tweeklank ei/ij", "—", "/ɛi/", "eind · tijd · meisje — identiek aan ou/au"],
        ["Tweeklank au/ou", "—", "/ʌu/", "auto · hout · blauw — identiek aan ei/ij"],
        ["Tweeklank ui", "—", "/œy/", "huis · muis · duim — getuite u + ie-glide"],
      ],
    },

    // ── Detailed accordion sections ────────────────────────────────────
    details: [
      {
        title: "Klinkers: kort, lang en de doffe e",
        body: `**IJzeren regel:** de lettergreepstructuur bepaalt de klinkerlengte.

• **Gesloten lettergreep** (eindigt op medeklinker) = korte klinker: *kat, bed, pit, pot, put*
• **Lange klinker in gesloten lettergreep** = twee klinkertekens: *maan, been, wiel, boom, muur*
• **Open lettergreep** (eindigt op klinker) = één klinkerteken maar lang geluid: *ma-nen, be-ken, bo-men, mu-ren*

**De doffe e / sjwa (ə)**
De sjwa is de meest voorkomende klank in het Nederlands en komt voor in alle zwakke lettergrepen. Voorbeelden: *de, te, je, me, we* en uitgangen op *-en*: *lopen* klinkt als *lopuh*, niet *lópen*. Ook in *-lijk*: *vrolijk* → *vroo-luhk*.

**Bijzonderheden:**
• *ie* is altijd lang — ook in open lettergreep schrijf je *ie*: *lie-ve*
• *oe* is een lange klinker: *boek, moeder*
• *eu* is een **zuivere lange klinker** (geen tweeklank!): *neus, deur, leuk* — zoals Frans *peur*`,
      },
      {
        title: "Tweeklanken (diftongen): de echte glijders",
        body: `Tweeklanken zijn klanken waarbij de mond tijdens de uitspraak beweegt van de ene klinkerpositie naar de andere.

| Tweeklank | IPA | Omschrijving | Voorbeeld |
|-----------|-----|--------------|-----------|
| ei / ij | /ɛi/ | Korte e + ie-glide | eind, tijd, meisje |
| au / ou | /ʌu/ | Open a + oe-glide | auto, hout, blauw |
| ui | /œy/ | Getuite korte u + ie-glide | huis, muis, duim |

> *ei/ij* en *au/ou* zijn exact dezelfde klank — er is geen enkel verschil in uitspraak!

**Combinaties met halfklinkers** (lange klinker + j/w):

| Combinatie | Uitspraak | Voorbeeld |
|------------|-----------|-----------|
| aai | aa + i | draai |
| ooi | oo + i | mooi |
| oei | oe + i | groei |
| eeuw | ee + oe | leeuw |
| ieuw | ie + oe | nieuw |
| uw | uu + w | duw |

**Let op:** *eu* is géén tweeklank maar een zuivere, lange klinker. De mond beweegt niet!`,
      },
      {
        title: "Medeklinkers: de grote valkuilen",
        body: `**g en ch — identiek**
De *g* en *ch* zijn in het Nederlands dezelfde raspende keelklank (velaire fricatief), vergelijkbaar met de Schotse uitspraak van *loch*. *Licht* en *ligt* klinken daardoor precies hetzelfde.

**sch = s + ch**
De combinatie *sch* wordt uitgesproken als een gewone *s* gevolgd door de harde *ch*-klank. Nooit als de Engelse *sh*! Dus *school* = s-ch-ool, niet *sjool*.

**ng en nk**
• *ng* is één enkele nasale klank, zoals in het Engelse *sing*: *ring, zingen*
• *nk* = ng + k: *bank* klinkt als *bang-k*

**Eindklankverscherping (finale devoicing)**
Aan het woordeinde worden stemhebbende medeklinkers stemloos:
• d → t: *hond → hont, bed → bet*
• b → p: *web → wep, heb → hep*
• z → s: *huis → huiss, reis → reiss*

Zodra er een klinker volgt keert de oorspronkelijke klank terug: *honden* (d), *huizen* (z), *webben* (b).

**Overige bijzonderheden**
• *r* mag rollend, keel-r of Gooise r zijn — alle varianten zijn correct
• *w* is een zachte v-achtige klank (labiodentaal), niet de Engelse bilabiale *w*
• *j* klinkt als de Engelse *y* in *yes*
• *sj* = Engelse *sh*: *sjaal, douche*`,
      },
      {
        title: "Spellingregels en klinkerlengtecontrole",
        body: `De Nederlandse spelling is grotendeels fonetisch en volgt vaste regels voor klinkerlengtecontrole.

**Regel 1 — Open lettergreep = lange klinker (één letter)**
*la-ten, bo-men, mu-ren, be-ken*

**Regel 2 — Gesloten lettergreep = korte klinker**
*kat, bed, pit, pot, put*

**Regel 3 — Gesloten lettergreep met lange klinker = dubbel klinkerteken**
*maan, been, boom, muur*

**Regel 4 — Korte klinker behouden bij verbuiging → dubbele medeklinker**
*kat → katten, bed → bedden, bom → bommen*

**Regel 5 — Lange klinker bij verbuiging → één medeklinker na open lettergreep**
*maan → manen (ma-nen), boom → bomen (bo-men)*

| Enkelvoud | Meervoud | Lettergreep | Uitleg |
|-----------|----------|-------------|--------|
| kat | katten | gesloten | kort a, dubbel t om kort te houden |
| maan | manen | open | lang aa, één n na open lettergreep |
| bom | bommen | gesloten | kort o, dubbel m |
| boom | bomen | open | lang oo, één m |`,
      },
    ],

    // ── Callouts ───────────────────────────────────────────────────────
    callouts: [
      {
        type: "key",
        label: "IJzeren regel: lettergreepstructuur",
        text: "**Open lettergreep** = lange klinker (één teken). **Gesloten lettergreep** = korte klinker. Dit principe stuurt alle andere spellingregels.",
      },
      {
        type: "remember",
        label: "ei/ij en au/ou zijn identiek",
        text: "**ei/ij** en **au/ou** zijn identiek: er is **geen verschil in uitspraak**. Het onderscheid is puur historisch en spellingtechnisch.",
      },
      {
        type: "tip",
        label: "eu is geen tweeklank",
        text: "**eu** in neus, deur en leuk is een **zuivere, stilstaande klinker**. De mond beweegt niet tijdens de uitspraak — anders dan bij ei, ou en ui.",
      },
      {
        type: "note",
        label: "Doffe e overal",
        text: "**De sjwa (ə)** is de **meest voorkomende klank** in het Nederlands. Alle zwakke lettergrepen en uitgangen op **-en** worden met een sjwa uitgesproken.",
      },
      {
        type: "key",
        label: "Eindklankverscherping",
        text: "**Elke stemhebbende medeklinker** (d, b, z, v, g) aan het woordeinde wordt stemloos: **d→t, b→p, z→s**. Bij verbuiging keert de stem terug.",
      },
      {
        type: "tip",
        label: "g = ch altijd",
        text: "**g en ch** zijn in het Nederlands dezelfde raspende keelklank. Licht en ligt klinken identiek. Nooit de zachte Engelse g gebruiken.",
      },
    ],

    // ── Common mistakes ────────────────────────────────────────────────
    commonMistakes: [
      {
        incorrect: "meisje als mee-sje",
        correct: "mei-sje",
        explanation: "ei/ij is een tweeklank (e + i), geen lange ee-klank",
      },
      {
        incorrect: "huis als huus",
        correct: "h-ui-s (getuite u + i)",
        explanation: "ui is een tweeklank met een getuite korte u gevolgd door een ie-glide",
      },
      {
        incorrect: "leuk als luuk",
        correct: "leuk (zuivere eu)",
        explanation: "eu is een lange monoftong, geen tweeklank — de mond beweegt niet",
      },
      {
        incorrect: "school als sjool",
        correct: "s-ch-ool",
        explanation: "sch is s + harde ch-klank, nooit de Engelse sh",
      },
      {
        incorrect: "ring met harde aparte g",
        correct: "ring (ng-klank als één nasaal)",
        explanation: "ng is één enkele nasale klank, zoals in het Engelse sing",
      },
      {
        incorrect: "hond met hoorbare d",
        correct: "hont",
        explanation: "Eindklankverscherping: d aan het woordeinde wordt t",
      },
      {
        incorrect: "web met hoorbare b",
        correct: "wep",
        explanation: "Eindklankverscherping: b aan het woordeinde wordt p",
      },
      {
        incorrect: "bomen met korte o",
        correct: "boo-men (lange oo)",
        explanation: "Open lettergreep bo- geeft een lange klinker, ook al staat er maar één o",
      },
      {
        incorrect: "bommen met lange oo",
        correct: "bom-men (korte o)",
        explanation: "Dubbele m sluit de lettergreep en houdt de klinker kort",
      },
      {
        incorrect: "lopen als lo-pén",
        correct: "lopuh (doffe e)",
        explanation: "De uitgang -en is altijd een sjwa, nooit de volle e-klank",
      },
      {
        incorrect: "auto als ooto",
        correct: "auw-to (a + oe)",
        explanation: "au/ou is een tweeklank: begin bij de a en glijd naar de oe",
      },
      {
        incorrect: "leeuw als leew",
        correct: "lee-uw (ee + oe-glide)",
        explanation: "De w-achtige oe-glide moet hoorbaar zijn na de lange ee",
      },
      {
        incorrect: "w als Engelse w (bilabiaal)",
        correct: "zachte v-achtige klank (labiodentaal)",
        explanation: "De Nederlandse w: tanden en lip raken elkaar lichtjes. Lippen raken elkaar niet.",
      },
      {
        incorrect: "de en te als dee en tee",
        correct: "də en tə (sjwa)",
        explanation: "Lidwoorden en voorzetsels hebben altijd een doffe e, nooit de volle ee-klank",
      },
    ],

    // ── Quick review ───────────────────────────────────────────────────
    review: [
      "Korte klinkers staan in gesloten lettergrepen: kat · bed · pit · pot · put",
      "Lange klinkers in gesloten lettergrepen schrijf je met twee tekens: maan · been · boom · muur",
      "Open lettergreep heeft één klinkerteken maar klinkt lang: ma-nen · bo-men · mu-ren",
      "Doffe e (sjwa) in zwakke lettergrepen: de · te · lopen · vrolijk — nooit voluit e zeggen",
      "ei/ij en au/ou zijn identieke tweeklanken — het onderscheid is alleen spellingtechnisch",
      "ui is een tweeklank: getuite korte u gevolgd door een ie-glide — huis · muis · duim",
      "eu is een zuivere lange klinker, geen tweeklank: neus · deur · leuk",
      "g en ch zijn dezelfde harde keelklank: goed · dag · lachen · licht",
      "sch wordt uitgesproken als s + harde ch: school · schip — nooit als Engelse sh",
      "ng is één nasale klank; nk = ng + k: ring · zingen · bank",
      "Eindklankverscherping: d→t · b→p · z→s aan het woordeinde",
      "Dubbele medeklinker houdt de klinker kort: katten · bedden · bommen",
      "Nederlandse w is labiodentaal (zachte v-achtige klank), niet de Engelse bilabiale w",
    ],

    // ── Q&A practice ──────────────────────────────────────────────────
    qa: [
      {
        question: "Hoe spreek je het woord hond uit?",
        answer: "hont — de d aan het woordeinde wordt t door eindklankverscherping",
      },
      {
        question: "Wat is de juiste uitspraak van school?",
        answer: "s-ch-ool — de sch is s + harde keelklank ch, nooit als sjool",
      },
      {
        question: "Welk woord heeft een lange oo-klank en waarom?",
        answer: "boom — de lettergreep is gesloten en de lange klinker wordt met twee tekens (oo) geschreven",
      },
      {
        question: "Hoe klinkt de eu in het woord neus?",
        answer: "Als de Franse eu in peur — een zuivere, stilstaande lange klinker. De mond beweegt niet.",
      },
      {
        question: "Hoe spreek je meisje correct uit?",
        answer: "mei-sje — ei is een tweeklank (e + i), geen lange ee-klank",
      },
      {
        question: "Wat is de klank van ui in het woord muis?",
        answer: "Een getuite korte u gevolgd door een ie-glide (/œy/) — zeg eerst een korte u met getuite lippen, dan ie",
      },
      {
        question: "Hoe spreek je het woord ringen uit?",
        answer: "ring-uh — ng is één nasale klank, de uitgang -en is een sjwa (doffe e)",
      },
      {
        question: "Waarom schrijf je bomen met één o maar bommen met twee m-en?",
        answer: "bomen: de lettergreep bo- is open, dus de klinker is lang (oo). bommen: dubbele m sluit de lettergreep en houdt de o kort.",
      },
      {
        question: "Hoe klinkt het woord lachen?",
        answer: "la-ch-en — de ch is dezelfde harde keelklank als de g in goed. De uitgang -en is een sjwa.",
      },
      {
        question: "Wat is het verschil in uitspraak tussen ei en ij?",
        answer: "Geen enkel verschil — beide klinken als /ɛi/ (e + ie-glide). Het onderscheid is alleen historisch en spellingtechnisch.",
      },
      {
        question: "Hoe spreek je het woord web uit?",
        answer: "wep — de b aan het woordeinde wordt p door eindklankverscherping",
      },
      {
        question: "Wat is de doffe e en waar komt die voor?",
        answer: "De doffe e (sjwa, ə) is een korte, onbeklemtoonde klinker in zwakke lettergrepen: de, te, je, lopen (lopuh), vrolijk (vroo-luhk)",
      },
    ],

    // ── Exercises ─────────────────────────────────────────────────────
    exercises: [
      {
        question: "Hoe klinkt de uitgang -en in lopen?",
        options: ["Volle ee-klank", "Doffe e (sjwa)", "Korte i", "Lange oo"],
        answer: "Doffe e (sjwa)",
      },
      {
        question: "Welke tweeklank zit in het woord huis?",
        options: ["ei/ij", "au/ou", "ui", "eu"],
        answer: "ui",
      },
      {
        question: "Hoe wordt de d in hond uitgesproken?",
        options: ["Als zachte d", "Als t (eindklankverscherping)", "Als n", "Stil"],
        answer: "Als t (eindklankverscherping)",
      },
      {
        question: "Wat is de juiste uitspraak van sch in school?",
        options: ["Als Engelse sh", "Als s + harde ch", "Als sk", "Als sz"],
        answer: "Als s + harde ch",
      },
      {
        question: "Welke klinker is een zuivere lange klinker (geen tweeklank)?",
        options: ["ei", "ou", "ui", "eu"],
        answer: "eu",
      },
      {
        question: "Waarom schrijf je katten met twee t-en maar manen met één n?",
        options: [
          "Willekeurige spellingregel",
          "katten: korte a behouden (gesloten lettergreep); manen: open lettergreep geeft lange aa",
          "katten is een meervoud; manen niet",
          "Er is geen verschil in klank",
        ],
        answer: "katten: korte a behouden (gesloten lettergreep); manen: open lettergreep geeft lange aa",
      },
    ],
  },
];