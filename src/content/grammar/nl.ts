import type { GrammarLesson } from "../types";

export const nlGrammar: GrammarLesson[] = [
  {
    id: "nl-uitspraak-1",
    title: "Nederlandse Uitspraak: Van Makkelijk naar Moeilijk",
    level: 1,
    topic: "Uitspraak",
    overview: `Nederlandse uitspraak is een bouwpakket: leer eerst de losse klanken (a, e, i, o, u, g, sch, ui…), snap daarna de regels (open lettergrepen, eindverscherping, stomme e), en zet ze in elkaar tot vloeiende zinnen. Van simpele woorden tot tongbrekers – stap voor stap, niveau voor niveau.`,
    anchorSectionId: "alfabet",

     /* ── Alfabet-tabel (timeExpressions = alfabet-kolommen) ─────────── */
timeExpressions: {
  header: "Letter|Spelling|Klank|Voorbeelden",
  rows: [
    ["A", "‘aa’", "**a** kort (*zak*); **aa** lang (*zaak*); doffe **a** in uitgangen (-baar)", "*kat, man* / *maan, laten* / *bruikbaar*"],
    ["B", "‘bee’", "**b** stemhebbend<br/><span class='text-xs text-slate-400'>einde: b klinkt als **p**</span>", "*been, boven* / *web* → *wep*"],
    ["C", "‘see’", "**k** voor a/o/u/medeklinker<br/>**s** voor e/i/ij", "*cadeau, club* / *cel, citroen*"],
    ["D", "‘dee’", "**d** stemhebbend<br/><span class='text-xs text-slate-400'>einde: d klinkt als **t**</span>", "*dak, onder* / *hond* → *hont*"],
    ["E", "‘ee’", "**e** kort (*pet*); **ee** lang (*peet*); doffe **e** / sjwa (*de, lopen*)", "*bed, rek* / *heel, eten* / *de, tafel*"],
    ["F", "‘ef’", "**f** stemloos", "*fiets, straf*"],
    ["G", "‘gee’ hard", "harde keelklank (als ch in *loch*); g en **ch** zijn **dezelfde klank**", "*goed, dag, liggen* / *lachen* klinkt hetzelfde"],
    ["H", "‘haa’", "**h** ademtoon", "*huis, hand*"],
    ["I", "‘ie’", "**i** kort (*pit*); **ie** lang (*piet*)", "*kip, kind* / *lief, hier*"],
    ["J", "‘jee’", "**j** als Engelse *y* in *yes*", "*ja, jas, mooi*"],
    ["K", "‘kaa’", "**k** stemloos", "*kat, boek*"],
    ["L", "‘el’", "**l** zoals in *land*", "*licht, bal*"],
    ["M", "‘em’", "**m**", "*maan, hem*"],
    ["N", "‘en’", "**n**; voor **k/g** wordt **ng**; uitgang **-en** klinkt als doffe **e**", "*neus, man* / *denken*"],
    ["O", "‘oo’", "**o** kort (*pot*); **oo** lang (*poot*)", "*dom, wol* / *boom, wonen*"],
    ["P", "‘pee’", "**p** stemloos", "*paard, kip*"],
    ["Q", "‘kuu’", "**k** + **w** (qu- → kw-)", "*quiz*"],
    ["R", "‘er’", "**r** rollend of keel-r; NIET Engels", "*rood, hoor, werken*"],
    ["S", "‘es’", "**s** stemloos", "*slang, mes*"],
    ["T", "‘tee’", "**t** stemloos", "*tafel, kat*"],
    ["U", "‘uu’", "**u** kort (*put*); **uu** lang (*muur*)", "*bus, hut* / *muur, duur*"],
    ["V", "‘vee’", "**v** stemhebbend; einde: v→f", "*vader, oven* / *leef*"],
    ["W", "‘wee’", "**w** tussen Engelse w en v (labiodentaal)", "*water, mooi, leeuw*"],
    ["X", "‘iks’", "**ks**", "*examen = eksamen*"],
    ["Y", "‘ei’", "leenwoord: **ie** of **ai**", "*yoghurt → jogurt*"],
    ["Z", "‘zet’", "**z** stemhebbend; einde: z→s", "*zee, dozen* / *huis*"]
  ]
},    /* ── Hoofdregels-kaarten ─────────────────────────────────────────── */
    rulesTable: [
      /* NIVEAU 1 */
      {
        rule: "Korte klinker – gesloten lettergreep",
        structure: "CVC (medeklinker-klinker-medeklinker) → klinker is altijd kort",
        example: "kat, bed, kip, pot, put",
        usage: "Één klinker, één medeklinker erna → kort uitspreken"
      },
      {
        rule: "Lange klinker – open lettergreep",
        structure: "CV (eindigt op klinker) → schrijf één teken voor lang; twee tekens in gesloten lettergreep",
        example: "la-ten (aa), bo-men (oo), stuu-ren (uu)",
        usage: "Open deur = één letter; dichte deur = dubbele klinker (*laat, boom*)"
      },
      {
        rule: "Medeklinker verdubbelen",
        structure: "Korte klinker behouden bij verbuiging → **dubbele medeklinker**",
        example: "kat → katten, kip → kippen, put → putten",
        usage: "Dubbele medeklinker 'sluit de deur' en houdt de klinker kort"
      },
      /* NIVEAU 2 */
      {
        rule: "Eindklankverscherping (finale devoicing)",
        structure: "Stemhebbend → stemloos aan het **woordeinde**: d→t, b→p, v→f, z→s",
        example: "*hond → hont, web → wep, leef, huis*",
        usage: "Verleng het woord om de echte letter te horen: *honden* → d is terug"
      },
      {
        rule: "g en ch – dezelfde klank",
        structure: "**/x/** (harde keelschraap) – zowel **g** als **ch** zijn identiek",
        example: "*goed, lachen, gracht, school*",
        usage: "Nooit als Engelse g of sh; sch = s + harde g"
      },
      {
        rule: "ng en nk",
        structure: "**ng** = één nasale klank [ŋ]; **nk** = ng + k [ŋk]",
        example: "*lang, bang, zingen / bank, stank, drank*",
        usage: "ng is één klank; nooit een aparte k erachter bij *lang*"
      },
      /* NIVEAU 3 */
      {
        rule: "Tweeklanken (diftongen)",
        structure: "**ei/ij** = è+ie; **ui** = u+ie (getuit); **au/ou** = a+oe",
        example: "*klein, huis, koud, blauw*",
        usage: "Glijd van de eerste naar de tweede klank binnen één lettergreep"
      },
      {
        rule: "eu – geen tweeklank!",
        structure: "**/øː/** – stilstaande lange monoftong (zoals Frans *peur*)",
        example: "*neus, deur, leuk*",
        usage: "Lippen tuiten, tong niet bewegen; NIET 'uu' of 'ee+u'"
      },
      /* NIVEAU 4 */
      {
        rule: "Stomme e (sjwa [ə])",
        structure: "Onbeklemtoonde lettergrepen: -en, -ig, -lijk, be-, ge-, ver- → **'uh'**",
        example: "*lopen → lopuh, aardig → aarduhg, beginnen → buhginnuh*",
        usage: "In spreektaal verdwijnt de n in -en altijd; zeg nooit *lopenne*"
      },
      {
        rule: "Klemtoon",
        structure: "Meestal **eerste lettergreep**; leenwoorden op het **einde**; scheidbare werkwoorden op het **voorvoegsel**",
        example: "*váder, hotél, óp-staan*",
        usage: "Klemtoon kan betekenis veranderen: *vóórkomen* vs. *voorkómen*"
      }
    ],

    /* ── Gedetailleerde secties (accordion) ─────────────────────────── */
    details: [
      {
        title: "NIVEAU 1 – Korte klinkers (alle 5)",
        body: `| Letter | Klank | Voorbeeldwoorden (10 per klank) |
|--------|-------|---------------------------------|
| **a** | [ɑ] korte donkere a | kat, man, das, bal, zak, pan, trap, jas, arm, bank |
| **e** | [ɛ] korte è | bed, les, pen, vel, rek, fles, step, bel, stem, vest |
| **i** | [ɪ] korte i | kip, zit, lip, vis, ring, dik, pit, kin, blik, film |
| **o** | [ɔ] korte ò | pot, kop, sok, bol, bos, tol, vol, stof, hol, rok |
| **u** | [ʏ] korte u | put, zus, rug, bus, nul, kus, hut, gum, dun, vlug |

> **Pro-regel:** Korte klinker + meervoud? Dubbel de medeklinker: *kat → katten, kip → kippen, put → putten.*`
      },
      {
        title: "NIVEAU 1 – Lange klinkers (open vs. gesloten)",
        body: `| Klank | Open lettergreep | Gesloten lettergreep | Voorbeelden |
|-------|-----------------|---------------------|-------------|
| [aː] | a (*la-ten*) | aa (*laat*) | maan, vader, water, straat, schaap |
| [eː] | e (*ge-ven*) | ee (*geef*) | been, zee, keer, veel, steen |
| [i]  | ie (*lief*) | – | dier, bier, vier, wiel, ziel |
| [oː] | o (*bo-men*) | oo (*boom*) | boom, wonen, kool, zoon, groot |
| [y]  | u (*stu-ren*) | uu (*stuur*) | muur, duur, vuur, schuur, uur |

> **Ezelsbrug:** "Open deur = één letter minder!" *la-ten* (open → één a), *laat* (gesloten → aa).`
      },
      {
        title: "NIVEAU 1 – De stomme e (sjwa [ə])",
        body: `De 'uh'-klank in **onbeklemtoonde** lettergrepen.

| Waar? | Spelling | Voorbeelden |
|-------|----------|-------------|
| Lidwoord | de | *de man → duh* |
| Uitgang -en | en | *lopen → lopuh, werken → werkuh* |
| Uitgang -ig | ig | *aardig → aarduhg, twintig → twintuhg* |
| Uitgang -lijk | lijk | *mogelijk → mooguh-luhk* |
| Voorvoegsel be- | be | *beginnen → buh-ginnuh* |
| Voorvoegsel ge- | ge | *geloven → guh-loovuh* |
| Voorvoegsel ver- | ver | *vertellen → vuh-telluh* |

> **Onthouden:** De **n** in **-en** verdwijnt in de spreektaal altijd. Zeg dus *lopuh*, nooit *lopenne*.`
      },
      {
        title: "NIVEAU 2 – Alle medeklinkers",
        body: `| Letter(s) | Klank | Voorbeelden | Bijzonderheid |
|-----------|-------|-------------|---------------|
| p | [p] | pen, op, kip | |
| b | [b] → [p] eind | bed, rib | *rib → rip* |
| t | [t] | tak, kat | |
| d | [d] → [t] eind | dak, hond | *hond → hont* |
| k / c | [k] | kat, cola | |
| f | [f] | fiets, leef | |
| v | [v] → [f] eind | vel, oven | *leven maar leef* |
| s | [s] | sok, baas | |
| z | [z] → [s] eind | zoon, huis | *huizen maar huis* |
| g / ch | [ɣ/χ] harde g | goed, lachen | Schrapend in de keel |
| h | [h] | hoed, hand | |
| m | [m] | man, kom | |
| n | [n] | neus, been | |
| ng | [ŋ] | lang, zingen | Één nasale klank |
| nk | [ŋk] | bank, drank | ng + k |
| l | [l] | lip, bal | |
| r | [r] rollend | rood, trein | NIET de Engelse r |
| j | [j] | jas, jaar | Als y in *yes* |
| w | [ʋ] labiodentaal | water, eeuw | Zachte v, onderlip op tanden |
| sch | [sχ] | school, schrijven | s + harde g, NOOIT sk |

> **Pro-regel eindverscherping:** Verleng het woord en je hoort de echte letter: *honden* → d, *leven* → v, *huizen* → z.`
      },
      {
        title: "NIVEAU 3 – Alle tweeklanken (diftongen)",
        body: `| Tweeklank | Klank | Voorbeelden (veel) | Mondbeweging |
|-----------|-------|--------------------|--------------|
| ij / ei | [ɛi] | rijk, mijn, klein, lei, trein, bij, ijs, tijd, ei, zei | Begin met è (*bed*), glij naar ie |
| ui | [œy] | huis, tuin, muis, zuid, bruid, vuil, duim, sluis, buis | Begin met u (*put*), glij naar ie |
| ou / au | [ʌu] | koud, blauw, fout, lauw, trouw, goud, pauze, nauw, klauw | Donkere a + oe |
| aai | [aːi] | draai, taai, zwaai, maai, haai, kraai, vlaai | Lange aa + ie |
| ooi | [oːi] | mooi, hooi, kooi, tooi, dooi | Lange oo + ie |
| eeuw | [eːu] | leeuw, sneeuw, meeuw, schreeuw | Lange ee + oe |
| ieuw | [iu] | nieuw, kieuw, benieuwd | Ie + oe |
| uw | [yu] | duw, ruw, huw, stuw | Uu + oe |

> **UI-truc:** Zeg u (als in *put*) en maak tegelijk een glimlach alsof je ie gaat zeggen. Dat is de ui.

> **IJ/EI-truc:** Zeg è (*bed*) en schuif snel door naar ie. *Klein* = klè-ie-n. Géén a erbij!

> **eu is GEEN tweeklank!** Het is een lange monoftong [øː] zoals het Franse *peur*: *neus, deur, leuk*. Lippen tuiten, tong stilhouden.`
      },
      {
        title: "NIVEAU 4 – Klemtoonregels",
        body: `**1. Meestal eerste lettergreep:** váder, móeder, wérken, étentje.

**2. Onbeklemtounde voorvoegsels** be-, ge-, her-, ont-, ver-: behóud, gelóof, herháal, ontsnáp, vertél.

**3. Scheidbare werkwoorden:** klemtoon op het scheidbare stuk: óp-staan, áán-komen, méé-gaan.

**4. Leenwoorden:** klemtoon op laatste of voorlaatste lettergreep: hotél, banáán, politíe, universitéit, interessánt.

**5. Klemtoon verandert betekenis:**

• vóórkomen (klemtoon op voor) → gebeuren
• voorkómen (klemtoon op ko) → verhinderen
• óverleggen (klemtoon op o) → bespreken
• overléggen (klemtoon op le) → document tonen / aanleveren
• dóórzichtig (klemtoon op door) → transparant`
      },
      {
        title: "NIVEAU 4 – R en W in detail",
        body: `**De Nederlandse R:**
• Rollende tong-r (tip van tong trilt tegen tandkast)
• Of huig-r (achter in de keel)
• Géén Engelse r (tong krult omhoog zonder trilling)
• Oefen: *rood, groen, trein, herfst*

**De Nederlandse W:**
• Breng je onderlip zacht tegen je boventanden (labiodentaal)
• Zoals een v, maar met minder druk en zonder wrijving
• Lippen NIET ronden zoals bij de Engelse w
• Oefen: *water, waar, eeuw, nieuw*`
      },
      {
        title: "Oefenschema – 7 dagen naar 100/100",
        body: `| Dag | Focus | Activiteit |
|-----|-------|-----------|
| 1 | Korte & lange klinkers | Leer de 5 korte + 5 lange klinkers; lees 50 woorden hardop |
| 2 | Tweeklanken | Oefen ui, ij/ei, ou/au met de mondbeweging-trukken |
| 3 | Medeklinkers & eindverscherping | Test jezelf met 40 woorden uit de medeklinkerstabel |
| 4 | Stomme e & zinnen | Lees zinnen en schrap de n'en in -en |
| 5 | Klemtoon & leenwoorden | Zoek 20 leenwoorden en bepaal de klemtoon |
| 6 | Toets | Maak de 100 vragen en verbeter fouten |
| 7 | Vrij lezen | Lees een Nederlandse tekst hardop, neem jezelf op |

> **Tip:** Neem jezelf op en vergelijk met de regels. Fouten hoor je beter dan je ze ziet.`
      }
    ],

      /* ── Callouts ────────────────────────────────────────────────────── */
      callouts: [
        {
          type: "key",
          label: "Open/gesloten lettergreep",
          text: "<span class='text-blue-600'>Een korte klinker staat altijd in een gesloten lettergreep; een lange klinker in een open lettergreep schrijf je met één teken, in een gesloten met twee.</span>"
        },
        {
          type: "note",
          label: "ie en oe zijn speciaal",
          text: "<span class='text-blue-600'>De ie is altijd lang, ongeacht de lettergreep (lief, niet lif). De oe is ook een lange klinker (boek, moeder).</span>"
        },
        {
          type: "tip",
          label: "eu is geen tweeklank",
          text: "<span class='text-blue-600'>Houd de lippen getuit en beweeg de tong niet. Zeg 'leuk', niet 'luuk' en niet 'lee-uk'.</span>"
        },
        {
          type: "remember",
          label: "Eindverscherping truc",
          text: "<span class='text-blue-600'>Verleng het woord en je hoort de echte letter: honden → d, leven → v, huizen → z.</span>"
        }
      ],

    /* ── Veelgemaakte fouten (40 stuks) ─────────────────────────────── */
    commonMistakes: [
      { incorrect: "goed (met d)", correct: "goet", explanation: "**Eindverscherping**: d→t aan het woordeinde" },
      { incorrect: "hond (met d)", correct: "hont", explanation: "Verleng: *honden* → dan hoor je de d terug" },
      { incorrect: "huis (met z)", correct: "huis (scherpe s)", explanation: "z→s aan het eind; *huizen* heeft wel z" },
      { incorrect: "man (met lange aa)", correct: "man (korte a)", explanation: "Gesloten lettergreep: één a = kort" },
      { incorrect: "maan (met korte a)", correct: "maan (lange aa)", explanation: "Dubbele a = altijd lang" },
      { incorrect: "ui als au/ooi", correct: "ui = u+ie (getuit)", explanation: "Begin bij u van *put*, glij naar ie" },
      { incorrect: "ij/ei als aai", correct: "klèin = è+ie", explanation: "Begin bij è van *bed*, schuif naar ie" },
      { incorrect: "sch als sk", correct: "sgg (s + harde g)", explanation: "**sch** is s + keelschraap, nooit sk" },
      { incorrect: "-en als volle e+n", correct: "-uh (sjwa)", explanation: "Stomme e, de n valt weg in spreektaal" },
      { incorrect: "r Engels", correct: "rollende of huig-r", explanation: "Engelse r is niet Nederlands" },
      { incorrect: "w Engels (oe-achtig)", correct: "labiodentaal (zachte v)", explanation: "Lippen NIET ronden" },
      { incorrect: "ee/oo als eej/ow", correct: "monoftong (zuiver)", explanation: "Nederlandse ee/oo zijn zuiver, zonder naklank" },
      { incorrect: "lang als lank", correct: "lang (ng)", explanation: "**ng** is één nasaal, nooit een k erachter" },
      { incorrect: "bang als bank", correct: "bang (ng)", explanation: "Idem als hierboven" },
      { incorrect: "bomen als boo-men", correct: "bo-men (lange o)", explanation: "Open lettergreep: één o is al lang" },
      { incorrect: "sturen met korte u", correct: "stuu-ren (lange uu)", explanation: "Open lettergreep: u lang" },
      { incorrect: "leven als lefen", correct: "leven (v blijft v)", explanation: "v middenin blijft stemhebbend" },
      { incorrect: "leef met v", correct: "leef (f)", explanation: "Eind-v verscherpt tot f" },
      { incorrect: "vriend met w", correct: "v (onderlip op tanden)", explanation: "v is stemhebbende f, niet zoals Engelse w" },
      { incorrect: "nu met Engelse u", correct: "nuu (lange uu)", explanation: "Open lettergreep: u is lang" },
      { incorrect: "hut met lange uu", correct: "hut (korte u)", explanation: "Gesloten lettergreep: korte u" },
      { incorrect: "kamer met korte a", correct: "káámer (lange a)", explanation: "Open lettergreep: a lang" },
      { incorrect: "zee als zeej", correct: "zee (zuiver ee)", explanation: "Monoftong, niet diftongeren" },
      { incorrect: "rood met Engelse r", correct: "root (rollende r, eind-d→t)", explanation: "r rollend; eind-d verscherpt" },
      { incorrect: "blauw met Engelse w", correct: "blauw (labiodentale w)", explanation: "w is zacht v-achtig, lippen plat" },
      { incorrect: "nieuw als niew", correct: "nie-oe (ieuw)", explanation: "**ieuw** is ie+oe, geen aparte w" },
      { incorrect: "uil met oo-klank", correct: "uil = u+ie+l", explanation: "Begin met korte u" },
      { incorrect: "herfst met volle e", correct: "herfst (korte e)", explanation: "Gesloten lettergreep" },
      { incorrect: "chemie met Engelse ch", correct: "chemi met harde g", explanation: "**ch** = g in Nederlandse leenwoorden" },
      { incorrect: "kleding met Engelse -ing", correct: "klée-ding (ng)", explanation: "ng is nasaal [ŋ]" },
      { incorrect: "appel als aapel", correct: "appel (korte a)", explanation: "Dubbele p bewaakt de korte a" },
      { incorrect: "internet met Engelse r", correct: "in-tér-net (r rollend)", explanation: "Rollende r" },
      { incorrect: "direct met d", correct: "direkt (eind-t)", explanation: "Eindverscherping d→t" },
      { incorrect: "universiteit klemtoon op uni", correct: "universitéit", explanation: "Leenwoord: klemtoon op -teit" },
      { incorrect: "opbellen klemtoon op bel", correct: "óp-bellen", explanation: "Scheidbaar werkwoord: klemtoon op het voorvoegsel" },
      { incorrect: "eu als uu (leuk)", correct: "leuk (eu = [øː])", explanation: "**eu** is de stilstaande klank, zoals Frans *peur*" },
      { incorrect: "schip als skip", correct: "sggip (s+g)", explanation: "sch is s + harde keelschraap" },
      { incorrect: "lachen met Engelse ch", correct: "laggen (harde g)", explanation: "**ch** en **g** zijn dezelfde klank" },
      { incorrect: "meisje als meesje", correct: "mei-sje (ei als è+i)", explanation: "**ei** is een tweeklank, geen lange ee" },
      { incorrect: "bomen met korte o", correct: "bo-men (oo)", explanation: "Één o in open lettergreep is lang; bom-men is kort met dubbele m" }
    ],

    /* ── Snelle herhaling ────────────────────────────────────────────── */
    review: [
      "**Korte klinker** in gesloten lettergreep (kat); **lange klinker** in open lettergreep met één teken (ma-nen) of dubbel in gesloten (maan).",
      "**Stomme e** (sjwa) in de, te, lopen, vrolijk – niet voluit uitspreken; de n in -en valt weg.",
      "**ei = ij** ([ɛi]), **au = ou** ([ʌu]), **ui** ([œy] = getuite u + ie).",
      "**eu** is een stilstaande lange monoftong [øː], zoals in het Franse *peur*. GEEN tweeklank.",
      "**g en ch** zijn dezelfde harde keelklank [χ]; **sch** = s + ch, nooit sh.",
      "**ng** is één nasale klank [ŋ]; **nk** = ng + k. Nooit een aparte k bij *lang*.",
      "**Eindverscherping**: hond→hont, web→wep, leef, huis; verleng voor de echte letter.",
      "**Verdubbel medeklinker** om korte klinker te bewaken (bommen); open lettergreep = lange klinker (bomen).",
      "Uitgang **-en** → in spreektaal altijd *uh* (lopuh, werkuh); **-ig** → *uhg* (aarduhg).",
      "**Klemtoon**: 1e lettergreep (vader); voorvoegsels (behoud); scheidbaar (óp-staan); leenwoorden (hotél)."
    ],

    /* ── Q&A oefenvragen ─────────────────────────────────────────────── */
    qa: [
      /* DEEL A – Klinkers en spelling */
      { question: "Waarom is de a in *tak* kort?", answer: "Gesloten lettergreep door de k: één a in CVC-structuur = altijd kort [ɑ]." },
      { question: "Schrijf de uitspraak van *been* in gewone letters.", answer: "been (lange ee)." },
      { question: "*Laten* heeft een lange a; waarom schrijf je maar één a?", answer: "Open lettergreep: la-ten eindigt op klinker, dus één a is al lang." },
      { question: "Zeg hardop: *bakken*. Waarom zit er een dubbele k?", answer: "Dubbele k bewaakt de korte a; zonder zou het *baken* zijn (lange a)." },
      { question: "Wat is het verschil in uitspraak tussen *man* en *maan*?", answer: "*man* heeft korte a [ɑ]; *maan* heeft lange aa [aː]." },
      { question: "Is de u in *put* hetzelfde als in *muren*? Leg uit.", answer: "Nee: *put* is korte [ʏ] (gesloten lettergreep); *muren* heeft lange [y] (open lettergreep mu-ren)." },
      { question: "*Sturen* – is de u lang of kort?", answer: "Lang: stuu-ren (open lettergreep)." },
      { question: "Waarom schrijf je *boom* met oo maar *bomen* met één o?", answer: "*boom*: gesloten lettergreep → dubbele oo. *bo-men*: open lettergreep → één o al lang." },
      { question: "Hoeveel stomme e's zitten in *mogelijk*?", answer: "Twee: *moguh-luhk* (de e in -ge- en de e in -lijk zijn beide sjwa)." },
      { question: "Hoe klinkt 'de' in *de kat*?", answer: "*duh* – stomme e (sjwa)." },
      /* DEEL B – Medeklinkers en eindverscherping */
      { question: "Hoe spreek je *hond* uit? Waarom?", answer: "*hont* – eindklankverscherping: d→t aan het woordeinde." },
      { question: "*Goed* klinkt als…?", answer: "*goet* – eind-d→t." },
      { question: "*Leven* → *leef*. Wat gebeurt er met de v?", answer: "v→f aan het woordeinde (eindverscherping)." },
      { question: "Spreek uit: *school*, *schat*, *schrijven*.", answer: "*sggool*, *sggat*, *sggrijven* (s + harde keelschraap)." },
      { question: "Wat is het verschil tussen *licht* en *ligt* in uitspraak?", answer: "Beide eindigen op [t]; *licht* = ch-t, *ligt* = g→t; ze klinken identiek." },
      { question: "Zeg *lang*. Welke fout mag je niet maken?", answer: "Niet *lank* zeggen: ng is één nasale klank [ŋ], geen aparte k." },
      { question: "*Bank* – welke twee klanken zitten in de nk?", answer: "[ŋk] = ng + k." },
      { question: "*Web* wordt uitgesproken als…?", answer: "*wep* – eind-b→p (eindverscherping)." },
      { question: "Hoe spreek je de w in *water* correct uit?", answer: "Labiodentaal: onderlip zacht op boventanden, zachte v-klank, lippen niet ronden." },
      { question: "*Examen* – hoe spreek je de x uit?", answer: "*eksamen* – x = ks." },
      /* DEEL C – Tweeklanken */
      { question: "Hoe vorm je de klank **ui**?", answer: "Begin met korte u (als in *put*), glij naar ie (lippen spreiden)." },
      { question: "Geef de mondbeweging van **ij/ei**.", answer: "Begin met è-stand (als in *bed*), schuif snel naar ie." },
      { question: "Welke tweeklank zit in *koud*?", answer: "[ʌu] – ou/au." },
      { question: "*Mooi* bevat de tweeklank…?", answer: "[oːi] – ooi." },
      { question: "*Leeuw* – welke twee klanken versmelten?", answer: "Lange ee + oe = [eːu]." },
      { question: "*Nieuw* – geef de correcte uitspraak.", answer: "*nie-oe* – ieuw is ie + oe." },
      { question: "Zit er in *neus* een tweeklank? Leg uit.", answer: "Nee: eu is een monoftong [øː] (stilstaande klank), geen tweeklank." },
      { question: "Waarom is *ui* lastig voor anderstaligen?", answer: "Omdat ze moeten beginnen met een korte u (getuite lippen) en glijden naar ie – een combinatie die in de meeste talen niet bestaat." },
      { question: "*Sneeuw* – spreek uit zonder Engelse w.", answer: "*snee-oe* – de w is een zachte labiodentale glijder, niet zoals Engelse w." },
      { question: "Welke woorden hebben de tweeklank [ʌu]? Noem er drie.", answer: "*koud, blauw, fout* (ou/au)." },
      /* DEEL D – Stomme e */
      { question: "Hoe spreek je *lopen* uit in de spreektaal?", answer: "*lopuh* – de n valt weg, e wordt sjwa." },
      { question: "*Hartelijk* – uitspraak van -lijk?", answer: "*hartuh-luhk* – beide e's zijn sjwa." },
      { question: "Hoe klinkt *beginnen* – hoe klinkt be-?", answer: "*buh-* – het voorvoegsel be- is altijd onbeklemtoond en sjwa." },
      { question: "Waarom klinkt de e in *bed* niet stom?", answer: "Omdat *bed* klemtoon heeft en in een gesloten lettergreep staat; het is een beklemtoonde volle e [ɛ]." },
      { question: "Lees *de mooie lente* – benoem de stomme e's.", answer: "*duh mooi-uh len-tuh*: de = duh, mooie = mooi-uh, lente = len-tuh." },
      /* DEEL E – Klemtoon */
      { question: "Waar valt de klemtoon in *vader*?", answer: "Eerste lettergreep: *váder*." },
      { question: "*Hotel* – klemtoon?", answer: "Laatste lettergreep: *hotél* (leenwoord)." },
      { question: "*Aankomen* – leg de klemtoon uit.", answer: "*áán-komen*: scheidbaar werkwoord, klemtoon op het voorvoegsel." },
      { question: "*Voorkomen* – geef twee betekenissen en klemtoon.", answer: "*vóórkomen* (gebeuren) vs. *voorkómen* (verhinderen)." },
      { question: "*Universiteit* – waarom klemtoon op -teit?", answer: "Leenwoord met Franse/Latijnse invloed; klemtoon valt altijd op de laatste zware lettergreep." },
      /* DEEL F – Zinnen analyseren */
      { question: "Analyseer: *De hond blaft naar de maan.*", answer: "*hond→hont* (eindverscherping), *de→duh* (stomme e), *maan* (lange aa), *blaft* (al t)." },
      { question: "Analyseer: *Wij schrijven een lang verhaal.*", answer: "*schrijven→sggrijven* (sch=s+g), *lang* (ng nasaal), *verhaal→vuh-haal* (ver- sjwa)." },
      { question: "Analyseer: *De zon schijnt in de tuin.*", answer: "*schijnt→sggèint* (sch+ij tweeklank), *tuin* (ui tweeklank), *de→duh* (sjwa)." },
      { question: "Analyseer: *Jullie lopen naar de grote school.*", answer: "*lopen→lopuh* (stomme e), *grote→grotuh* (e stom), *school→sggool* (sch)." },
      { question: "Analyseer: *Mijn nichtje heeft een nieuw huis.*", answer: "*mijn* (ij tweeklank), *nichtje→nichtjuh* (e stom), *nieuw→nie-oe*, *huis* (ui tweeklank, s scherp)." },
      /* DEEL G – Fonetisch schrijven */
      { question: "Schrijf de uitspraak van *chirurg* in gewone letters.", answer: "*ggirurgg* – ch = harde g, eind-g ook harde g." },
      { question: "Schrijf de uitspraak van *herinneren*.", answer: "*huh-rin-nuh-ruh* – her- = sjwa, -en = sjwa." },
      { question: "Schrijf de uitspraak van *verschrikkelijk*.", answer: "*vuh-sggrik-kuh-luhk* – ver- sjwa, sch = s+g, -lijk = luhk." },
      { question: "Schrijf de uitspraak van *samenvatting*.", answer: "*saa-muh-vat-ting* – open aa, -en sjwa, ng nasaal." },
      { question: "Hoe spreek je *excuus* correct uit?", answer: "*ekskuus* – x = ks, uu lang, eind-s scherp." },
      /* Extra ezelsbruggetjes */
      { question: "Wat is de ezelsbrug voor de ui-klank?", answer: "\"Kus (u) en lach (ie) tegelijk\" – begin met getuite u, glij naar ie-lach." },
      { question: "Wat is de ezelsbrug voor sch?", answer: "\"Sssst + grom = school\" – s + harde keelschraap." },
      { question: "Hoe onthoud je de open lettergreep?", answer: "\"Open deur, letter weg!\" – één klinker in open lettergreep is al lang." },
      { question: "Hoe onthoud je eindverscherping?", answer: "\"Verleng het woord en je hoort de echte letter.\" *hond → honden* = d terug." },
      { question: "Wat is het verschil tussen ng en nk?", answer: "*ng* = één nasaal [ŋ] (lang); *nk* = ng + k [ŋk] (bank). Bij *lang* nooit een k erachter!" }
    ],

    /* ── Concept cards (boven de regelstabel) ───────────────────────── */
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
    ],

    /* ── Oefeningen (multiple choice quiz) ──────────────────────────── */
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
        options: ["lash-en", "la-ch-en, met de ch die gelijk is aan de harde g", "lak-hen"],
        answer: "la-ch-en, met de ch die gelijk is aan de harde g"
      },
      {
        question: "Hoe klinkt 'web' aan het einde?",
        options: ["web (b hoorbaar)", "wep (p)", "wef"],
        answer: "wep (p)"
      },
      {
        question: "Welke klank heeft 'ng' in 'lang'?",
        options: ["n + harde g", "één nasale klank [ŋ]", "n + k"],
        answer: "één nasale klank [ŋ]"
      },
      {
        question: "Hoe klinkt de 'e' in 'lopen' (spreektaal)?",
        options: ["volle e + n", "uh (sjwa), n valt weg", "lange ee"],
        answer: "uh (sjwa), n valt weg"
      },
      {
        question: "Wat is de uitspraak van 'schrijven'?",
        options: ["shrijven", "sgrijven (s + harde g)", "skrijven"],
        answer: "sgrijven (s + harde g)"
      },
      {
        question: "Waar valt de klemtoon in 'opstaan'?",
        options: ["op 'staan'", "op 'op'", "gelijk verdeeld"],
        answer: "op 'op'"
      },
      {
        question: "Hoe spreek je 'nieuw' correct uit?",
        options: ["niew (Engelse w)", "nie-oe (ie + oe)", "nuu"],
        answer: "nie-oe (ie + oe)"
      }
    ],

     /* ── body (fallback markdown) ────────────────────────────────────── */
     body: `## Nederlandse Uitspraak – Van Makkelijk naar Moeilijk

### Alfabet en Uitspraak
| Letter | Spelling | Klank | Voorbeelden |
|--------|----------|-------|-------------|
| A | 'aa' | <span class='text-green-600'>a kort (zak); aa lang (zaak); doffe a in uitgangen (-baar)</span> | kat, man / maan, laten / bruikbaar |
| B | 'bee' | <span class='text-blue-600'>b stemhebbend</span><br/><span class='text-xs text-slate-400'>einde: b klinkt als p</span> | been, boven / web → wep |
| C | 'see' | <span class='text-blue-600'>k voor a/o/u/medeklinker</span><br/><span class='text-blue-600'>s voor e/i/ij</span> | cadeau, club / cel, citroen |
| D | 'dee' | <span class='text-blue-600'>d stemhebbend</span><br/><span class='text-xs text-slate-400'>einde: d klinkt als t</span> | dak, onder / hond → hont |
| E | 'ee' | <span class='text-blue-600'>e kort (pet); ee lang (peet); doffe e / sjwa (de, lopen)</span> | bed, rek / heel, eten / de, tafel |
| F | 'ef' | <span class='text-blue-600'>f stemloos</span> | fiets, straf |
| G | 'gee' hard | <span class='text-blue-600'>harde keelklank (als ch in loch); g en ch zijn dezelfde klank</span> | goed, dag, liggen / lachen klinkt hetzelfde |
| H | 'haa' | <span class='text-blue-600'>h ademtoon</span> | huis, hand |
| I | 'ie' | <span class='text-blue-600'>i kort (pit); ie lang (piet)</span> | kip, kind / lief, hier |
| J | 'jee' | <span class='text-blue-600'>j als Engelse y in yes</span> | ja, jas, mooi |
| K | 'kaa' | <span class='text-blue-600'><strong>k</strong> stemloos</span> | kat, boek, kleur, font |
| L | 'el' | <span class='text-blue-600'><strong>l</strong> zoals in *land*</span> | licht, bal |
| M | 'em' | <span class='text-blue-600'><strong>m</strong></span> | maan, hem |
| N | 'en' | <span class='text-blue-600'><strong>n</strong>; voor <strong>k/g</strong> wordt <strong>ng</strong>; uitgang <-en> klinkt als doffe <strong>e</strong></span> | neus, man / denken |
| O | 'oo' | <span class='text-blue-600'><strong>o</strong> kort (*pot*); <strong>oo</strong> lang (*poot*)</span> | dom, wol / boom, wonen |
| P | 'pee' | <span class='text-blue-600'><strong>p</strong> stemloos</span> | paard, kip |
| Q | 'kuu' | <span class='text-blue-600'><strong>k</strong> + <strong>w</strong> (qu- → kw-)</span> | quiz |
| R | 'er' | <span class='text-blue-600'><strong>r</strong> rollend of keel-r; NIET Engels</span> | rood, hoor, werken |
| S | 'es' | <span class='text-blue-600'><strong>s</strong> stemloos</span> | slang, mes |
| T | 'tee' | <span class='text-blue-600'><strong>t</strong> stemloos</span> | tafel, kat |
| U | 'uu' | <span class='text-blue-600'><strong>u</strong> kort (*put*); <strong>uu</strong> lang (*muur*)</span> | bus, hut / muur, duur |
| V | 'vee' | <span class='text-blue-600'><strong>v</strong> stemhebbend; einde: v→f</span> | vader, oven / leef |
| W | 'wee' | <span class='text-blue-600'><strong>w</strong> tussen Engelse w en v (labiodentaal)</span> | water, mooi, leeuw |
| X | 'iks' | <span class='text-blue-600'><strong>ks</strong></span> | examen = eksamen |
| Y | 'ei' | <span class='text-blue-600'>leenwoord: <strong>ie</strong> of <strong>ai</strong></span> | yoghurt → jogurt |
| Z | 'zet' | <span class='text-blue-600'><strong>z</strong> stemhebbend; einde: z→s</span> | zee, dozen / huis |

Zie de secties hierboven voor de volledige opbouw: klinkers, medeklinkers, tweeklanken, stomme e, klemtoon en de Incorrect→Correct→Waarom tabel.`
  }
];