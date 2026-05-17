import type { GrammarLesson } from "../types";

export const nlGrammar: GrammarLesson[] = [
{
  id: "nl-uitspraak-1",
  title: "Nederlandse Uitspraak: Alle Klanken en Regels",
  level: 1,
  topic: "Uitspraak",
  body: `## 1. HET ALFABET – klank per letter
(zie de alfabet-tabel hieronder)

## 2. ALLE KLINKERS – kort, lang en de doffe e
Het Nederlands heeft een bijzonder systeem: **de spelling vertelt je of een klinker kort of lang is**.

> **Regel van de open/gesloten lettergreep**
> - Een **korte klinker** staat in een **gesloten lettergreep** (eindigt op een medeklinker).
> - Een **lange klinker** schrijf je met **twee letters** in een gesloten lettergreep, en met **één letter** in een **open lettergreep** (eindigt op een klinker).

### 2.1 Overzicht korte en lange klinkers
(zie conceptkaarten en detail-uitklapper)

**Let op:** De **ie** is altijd lang, maar nooit geschreven met één i in een open lettergreep (je schrijft *lief, niet lif*).  
De **oe** is ook een lange klinker: *boek, moeder*.

### 2.2 De doffe e / sjwa
De sjwa is de meest voorkomende klinker.  
- Aan het einde van woorden: *de, te, je, me, we*.  
- In uitgangen -en: *lopen* → "lopuh".  
- In -lijk: *vrolijk* → "vroo-luhk".

## 3. TWEEKLANKEN
### 3.1 De belangrijkste tweeklanken
| Tweeklank | Uitspraak | Voorbeeld |
|-----------|----------|-----------|
| **ei / ij** | /ɛi/ (e + ie) | *tijd, mijn, reis* |
| **au / ou** | /ʌu/ (a + oe) | *auto, hout, blauw* |
| **ui** | /œy/ (getuite u + ie) | *huis, muis, duim* |

### 3.2 Combinaties met w / i
**aai, ooi, oei, eeuw, ieuw, uw** – zie details.

**Let op:** **eu** is géén tweeklank! Het is een stilstaande lange klank zoals in het Franse *peur*: *neus, deur, leuk*.

## 4. MEDEKLINKERS
- **g en ch** zijn dezelfde harde keelklank (/x/).
- **sch-** = s + ch, nooit als Engelse *sh*!
- **ng** is één nasale klank (als in *sing*); **nk** = ng + k.
- **Finale devoicing:** d→t, b→p, z→s aan het woordeinde. *hond* → hont, *web* → wep.
- **w**: zachte v-achtige klank, niet als Engelse *w*.

## 5. SPELLINGREGELS
- Lange klinker in gesloten lettergreep: verdubbel klinker (*boom*).
- Lange klinker in open lettergreep: één klinker (*bo-men*).
- Korte klinker kort houden: verdubbel medeklinker (*bommen*).`,
  exercises: [
    {
      question: "Hoe spreek je 'hond' uit?",
      options: ["hond (met d)", "hont (met t)", "hoond (met oo)"],
      answer: "hont (met t)"
    },
    {
      question: "Wat is de juiste uitspraak van 'school'?",
      options: ["shool", "sgool (s + harde g)", "skool"],
      answer: "sgool (s + harde g)"
    },
    {
      question: "Welk woord heeft een lange oo?",
      options: ["bom", "boom", "bommen"],
      answer: "boom"
    },
    {
      question: "Hoe klinkt 'eu' in 'neus'?",
      options: ["als uu", "als de Franse eu in 'peur' (stilstaand)", "als ee + u"],
      answer: "als de Franse eu in 'peur' (stilstaand)"
    },
    {
      question: "Hoe spreek je 'meisje' correct uit?",
      options: ["mee-sje", "meis-je (ei als e+i)", "mais-je"],
      answer: "meis-je (ei als e+i)"
    },
    {
      question: "Wat is de klank van de 'ui' in 'muis'?",
      options: ["uu", "au", "korte u met tuitlippen, dan ie"],
      answer: "korte u met tuitlippen, dan ie"
    },
    {
      question: "Hoe spreek je 'ringen' uit?",
      options: ["rin-gen (met harde g)", "ring-ng", "ring-uh (ng + doffe e)"],
      answer: "ring-uh (ng + doffe e)"
    },
    {
      question: "Waarom schrijf je 'bomen' met één o en 'bommen' met dubbel m?",
      options: [
        "bomen heeft lange oo en open lettergreep, bommen korte o en moet gesloten blijven",
        "dat is willekeur",
        "bomen heeft korte o, bommen lange oo"
      ],
      answer: "bomen heeft lange oo en open lettergreep, bommen korte o en moet gesloten blijven"
    },
    {
      question: "Wat is juist voor 'lachen'?",
      options: ["lash-en", "la-ch-en, met dezelfde ch als in 'school'", "lak-hen"],
      answer: "la-ch-en, met dezelfde ch als in 'school'"
    },
    {
      question: "Hoe klinkt 'web' aan het einde?",
      options: ["web (b hoorbaar)", "wep (p)", "wef"],
      answer: "wep (p)"
    }
  ],
  overview: "Alles over het Nederlandse klanksysteem: korte en lange klinkers, de doffe e, tweeklanken, medeklinkers, spellingregels en de meest voorkomende fouten. Inclusief een quiz en snelle herhaling.",
  anchorSectionId: "alfabet",
  rulesTable: [
    {
      rule: "Open/gesloten lettergreep",
      structure: "Korte klinker in gesloten lettergreep (CVC), lange klinker in open lettergreep (CV) of dubbel in gesloten (CVVC)",
      example: "kat, ma-nen, maan",
      usage: "Bepaalt of de klinker kort of lang is"
    },
    {
      rule: "g en ch",
      structure: "/x/ – harde keelklank",
      example: "goed, lachen, ligt",
      usage: "Dezelfde klank, nooit stemhebbend/stemloos onderscheid in standaardtaal"
    },
    {
      rule: "sch- = s + ch",
      structure: "s + /x/",
      example: "school, schrijven",
      usage: "Geen Engelse 'sh', maar een s gevolgd door de harde ch"
    },
    {
      rule: "ng en nk",
      structure: "ng: /ŋ/; nk: /ŋk/",
      example: "ring, bank, denken",
      usage: "ng is één nasaal; nk klinkt als ng+k"
    },
    {
      rule: "Finale devoicing",
      structure: "d → t, b → p, z → s aan het woordeinde",
      example: "hond → hont, web → wep, huis → huiss",
      usage: "Stemhebbend wordt stemloos, maar in meervoud komt stem terug"
    },
    {
      rule: "Verdubbeling van klinkers/medeklinkers",
      structure: "Lang in gesloten: twee klinkers; kort blijft kort: dubbele medeklinker",
      example: "boom (oo), bommen (mm)",
      usage: "Spelling signaleert lengte, behalve bij ie en oe"
    }
  ],
  conjugationTable: undefined,
  timeExpressions: {
    header: "Alfabet – klank per letter",
    rows: [
      ["A", "‘aa’", "**a** (kort, als in *zak*) **aa** (lang, als in *zaak*) **a** dof (schwa-achtig, in uitgangen zoals -baar)", "*kat, man* / *maan, laten* / *bruikbaar*"],
      ["B", "‘bee’", "**b** (stemhebbend, als in *bed*) Aan het woordeinde klinkt **b** als **p**!", "*been, boven* / *web* klinkt als *wep*"],
      ["C", "‘see’", "**k** vóór a/o/u/medeklinker **s** vóór e/i/ij", "*cadeau, club* / *cel, citroen*"],
      ["D", "‘dee’", "**d** (stemhebbend) Aan het woordeinde klinkt **d** als **t**!", "*dak, onder* / *hond* klinkt als *hont*"],
      ["E", "‘ee’", "**e** (kort, als in *pet*) **ee** (lang, als in *peet*) **doffe e** / sjwa (als in *de, lopen*)", "*bed, rek* / *heel, eten* / *de, tafel*"],
      ["F", "‘ef’", "**f** (stemloos)", "*fiets, straf*"],
      ["G", "‘gee’ (hard) / ‘zjee’ (zacht, België)", "**g** (harde keelklank, als ch in *loch*) In het zuiden zacht, als Franse *g* in *garçon* maar stemhebbend. g en ch zijn **dezelfde klank**!", "*goed, dag, liggen* / *lachen* klinkt hetzelfde"],
      ["H", "‘haa’", "**h** (ademtoon, stemhebbend)", "*huis, hand*"],
      ["I", "‘ie’", "**i** (kort, als in *pit*) **ie** (lang, als in *piet*) In leenwoorden soms als **ie** of **ai**", "*kip, kind* / *lief, hier* / *ski* (sk-ie)"],
      ["J", "‘jee’", "**j** (als Engelse *y* in *yes*)", "*ja, jas, mooi*"],
      ["K", "‘kaa’", "**k** (stemloos)", "*kat, boek*"],
      ["L", "‘el’", "**l** (als in *land*) Kan aan het eind “dik” worden (dikke l), vooral na klinkers", "*licht, bal*"],
      ["M", "‘em’", "**m**", "*maan, hem*"],
      ["N", "‘en’", "**n** / vóór k of g als **ng** (zie NG) Aan het eind vaak niet uitgesproken in -en (doffe e)", "*neus, man* / *denken* klinkt als *deng-ken*"],
      ["O", "‘oo’", "**o** (kort, als in *pot*) **oo** (lang, als in *poot*)", "*dom, wol* / *boom, wonen*"],
      ["P", "‘pee’", "**p** (stemloos)", "*paard, kip*"],
      ["Q", "‘kuu’", "**k** + **w** (qua, qu- wordt kw-)", "*quiz, quiche* (k- + w)"],
      ["R", "‘er’", "**r** (rollend, keel-r of Gooise r – afhankelijk van streek)", "*rood, hoor, werken*"],
      ["S", "‘es’", "**s** (stemloos)", "*slang, mes*"],
      ["T", "‘tee’", "**t** (stemloos)", "*tafel, kat*"],
      ["U", "‘uu’", "**u** (kort, als in *put*) **uu** (lang, als in *puut*) **oe** (in leenwoorden)", "*bus, hut* / *muur, duur* / *team* (spreek uit: *tiem*)"],
      ["V", "‘vee’", "**v** (stemhebbend, als in *vel*) Komt NOOIT aan het eind van een Nederlands woord; dan verandert spelling in f", "*vader, oven* / *lief* (niet *liev*)"],
      ["W", "‘wee’", "**w** (tussen Engelse *w* en *v* in, zachte lip-tand klank)", "*water, mooi, leeuw*"],
      ["X", "‘iks’", "**ks** (als in *taxi*)", "*examen, luxe*"],
      ["Y", "‘ei’ / ‘i-grec’", "**ie** (als in *yoghurt*) of **ei/ij** (in *yoghurt* soms *jogurt*, in *y* als letter) Meestal leenwoord: klinkt als *ie* of *ai*", "*yoghurt* (jogurt) / *y-as* (ei-as)"],
      ["Z", "‘zet’", "**z** (stemhebbend, als in *zien*) Aan het woordeinde klinkt **z** als **s**!", "*zee, dozen* / *huis* (uit *huizen* → *huis* klinkt als *huis* met s)"]
    ]
  },
  details: [
    {
      title: "Korte en lange klinkers (volledig overzicht)",
      body: `| Kort | Voorbeeld | Lang | Open lettergreep | Gesloten dubbel |
|------|-----------|------|-----------------|-----------------|
| a | kat | aa | ma-nen | maan |
| e | pet | ee | be-ken | been |
| i | pit | ie | (altijd ie) | lief |
| o | pot | oo | bo-men | boom |
| u | put | uu | mu-ren | muur |
| doffe e | de, lopen | – | – | – |`
    },
    {
      title: "Tweeklanken en combinaties met glijders",
      body: `**Echte diftongen**  
- ei/ij = /ɛi/ (e + ie): tijd, reis  
- au/ou = /ʌu/ (a + oe): auto, hout  
- ui = /œy/ (getuite u + ie): huis, muis  

**Combinaties**  
- aai = lange aa + i: draai  
- ooi = lange oo + i: mooi  
- oei = oe + i: groei  
- eeuw = lange ee + oe-achtige w: leeuw  
- ieuw = lange ie + oe-achtige w: nieuw  
- uw = uu + w: duw  

**Let op:** eu is een lange monoftong (/øː/) zoals in *peur*, niet glijdend.`
    },
    {
      title: "Medeklinkers in detail",
      body: `- **g/ch:** beide /x/, raspende keelklank. Geen verschil.  
- **sch:** s+ch, nooit sh.  
- **ng:** één klank, zoals in Engelse *sing*.  
- **nk:** ng+k. *bank* = bang-k.  
- **Finale devoicing:** aan het woordeinde verliest een stemhebbende medeklinker zijn stem. *hond* → hont, *web* → wep, *huis* → huiss. Bij meervoud hoor je de stem weer: honden (d), webben (b), huizen (z).  
- **w:** zachte klank tussen Engelse w en v; onderlip raakt boventanden zachtjes aan.  
- **r:** rollend, huig-r of Gooise r; consistentie is belangrijk.  
- **j:** als y in *yes*.`
    },
    {
      title: "Spellingregels die uitspraak sturen",
      body: `- Lange klinker in gesloten lettergreep → dubbele klinker: *boom, been*.  
- Lange klinker in open lettergreep → één klinker: *bo-men, be-ken*.  
- Korte klinker in open lettergreep bestaat niet; om kort te blijven bij verbuiging → verdubbel medeklinker: *bommen, kippen*.  
- Werkwoordsuitgangen -en → sjwa + eventueel zwakke n: *lopen* → lopuh.`
    }
  ],
  callouts: [
    {
      type: "key",
      label: "Regel van de open/gesloten lettergreep",
      text: "Een korte klinker staat altijd in een gesloten lettergreep; een lange klinker in een open lettergreep schrijf je met één teken, in een gesloten met twee."
    },
    {
      type: "note",
      label: "ie en oe zijn speciaal",
      text: "De ie is altijd lang, ongeacht de lettergreep (lief, niet lif). De oe is ook een lange klinker (boek, moeder)."
    },
    {
      type: "tip",
      label: "eu is geen tweeklank",
      text: "Houd de lippen getuit en beweeg de tong niet. Zeg 'leuk', niet 'luuk'."
    }
  ],
  commonMistakes: [
    {
      incorrect: "shool",
      correct: "s-ch-ool (sgool)",
      explanation: "sch- is s + harde ch, nooit als Engelse sh."
    },
    {
      incorrect: "meesje (meisje)",
      correct: "mei-sje",
      explanation: "ei/ij is een tweeklank (e+i), geen lange ee."
    },
    {
      incorrect: "huus (huis)",
      correct: "h-ui-s",
      explanation: "ui begint met korte u met getuite lippen en glijdt naar ie."
    },
    {
      incorrect: "haus (huis)",
      correct: "h-ui-s",
      explanation: "au start met een open a, ui met een getuite u."
    },
    {
      incorrect: "luuk (leuk)",
      correct: "leuk",
      explanation: "eu is de stilstaande klank van 'deur', niet uu."
    },
    {
      incorrect: "doel (goed met Engelse g)",
      correct: "raspende keel-g",
      explanation: "Nederlandse g is dezelfde keelklank als ch."
    },
    {
      incorrect: "rin-g (met harde g)",
      correct: "ring (één ng-klank)",
      explanation: "ng is een nasaal, geen aparte g."
    },
    {
      incorrect: "hond (met stemhebbende d)",
      correct: "hont",
      explanation: "Finale devoicing: d wordt t aan het woordeinde."
    },
    {
      incorrect: "web (met b)",
      correct: "wep",
      explanation: "Eind-b wordt stemloos uitgesproken als p."
    },
    {
      incorrect: "laten als làtten (korte a)",
      correct: "la-ten (aa)",
      explanation: "Open lettergreep geeft lange a, lees het als 'laa-ten'."
    },
    {
      incorrect: "bomen met korte o",
      correct: "bo-men (oo)",
      explanation: "Eén o in open lettergreep is lang; bom-men is kort met dubbele m."
    },
    {
      incorrect: "werkèn",
      correct: "werkuh",
      explanation: "De uitgang -en klinkt als een doffe e, vaak zonder duidelijke n."
    },
    {
      incorrect: "woater (Engelse w)",
      correct: "w-vater (zachte w)",
      explanation: "De Nederlandse w is zachter, tussen v en w in."
    },
    {
      incorrect: "book (als Engels book)",
      correct: "boek (zuivere oe)",
      explanation: "oe is een lange, zuivere oe-klank, niet zoals de Engelse oe in 'book'."
    },
    {
      incorrect: "leew (zonder glijder)",
      correct: "lee-uw",
      explanation: "eeuw heeft een hoorbare oe-achtige glijder aan het eind."
    }
  ],
  review: [
    "Korte klinker in gesloten lettergreep (kat); lange klinker in open lettergreep met één teken (ma-nen) of dubbel in gesloten (maan).",
    "Doffe e (sjwa) in de, te, lopen, vrolijk – niet voluit uitspreken.",
    "ei = ij (e+i), au = ou (a+oe), ui (getuite u+i).",
    "eu is een stilstaande lange klank, zoals in het Franse 'peur'.",
    "g en ch zijn dezelfde harde keelklank; sch is s+ch, nooit sh.",
    "ng is één nasaal; nk is ng+k.",
    "Finale devoicing: hond → hont, web → wep, huis → huiss; in meervoud komt stem terug.",
    "Verdubbel medeklinker om korte klinker kort te houden (bommen); enkele medeklinker na open lettergreep betekent lange klinker (bomen).",
    "De uitgang -en wordt in spreektaal vaak 'uh' (lopuh, werkuh)."
  ],
  qa: [
    { question: "Hoe spreek je 'hond' uit?", answer: "hont (met t) – finale devoicing" },
    { question: "Wat is de juiste uitspraak van 'school'?", answer: "sgool (s + harde g), nooit sh" },
    { question: "Welk woord heeft een lange oo?", answer: "boom (gesloten lettergreep met dubbele o)" },
    { question: "Hoe klinkt 'eu' in 'neus'?", answer: "als de Franse eu in 'peur', een stilstaande lange klank" },
    { question: "Hoe spreek je 'meisje' correct uit?", answer: "meis-je (ei als e+i, geen ee)" },
    { question: "Wat is de klank van de 'ui' in 'muis'?", answer: "korte u met tuitlippen, glijdend naar ie" },
    { question: "Hoe spreek je 'ringen' uit?", answer: "ring-uh (ng + doffe e, geen aparte g)" },
    { question: "Waarom schrijf je 'bomen' met één o en 'bommen' met dubbel m?", answer: "bomen = lange oo in open lettergreep; bommen = korte o met dubbele m om gesloten te blijven" },
    { question: "Wat is juist voor 'lachen'?", answer: "la-ch-en, met de ch die gelijk is aan de harde g" },
    { question: "Hoe klinkt 'web' aan het einde?", answer: "wep (p) – eind-b wordt stemloos" }
  ],
  conceptCards: [
    { title: "korte a", structure: "/ɑ/", example: "kat, man, bak" },
    { title: "lange aa", structure: "/aː/", example: "maan, la-ten" },
    { title: "korte e", structure: "/ɛ/", example: "pet, net, bek" },
    { title: "lange ee", structure: "/eː/", example: "been, le-pel" },
    { title: "ie", structure: "/i/ (altijd lang)", example: "lief, wiel, bier" },
    { title: "oe", structure: "/u/ (altijd lang)", example: "boek, moe-der" },
    { title: "korte o", structure: "/ɔ/", example: "pot, kop, ton" },
    { title: "lange oo", structure: "/oː/", example: "boom, bo-men" },
    { title: "korte u", structure: "/ʏ/", example: "put, kus, hut" },
    { title: "lange uu", structure: "/y/", example: "muur, du-ren" },
    { title: "eu (monoftong)", structure: "/øː/", example: "neus, deur, leuk" },
    { title: "ei / ij", structure: "/ɛi/", example: "tijd, mijn, reis" },
    { title: "au / ou", structure: "/ʌu/", example: "auto, hout, blauw" },
    { title: "ui", structure: "/œy/", example: "huis, muis, duim" },
    { title: "doffe e (sjwa)", structure: "/ə/", example: "de, lo-pen, vrolijk" }
  ]
},];