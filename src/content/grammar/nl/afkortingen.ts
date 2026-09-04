import type { GrammarLesson } from "../../types";

export const afkortingen: GrammarLesson = {
  id: "nl-afkortingen-1",
  title: "Afkortingen: Initiaalwoorden, Acroniemen & Symbolen – De Ultieme Gids",
  level: 3,
  topic: "Spelling & Afkortingen",
  body: "Beheers de Nederlandse afkortingen volledig: het verschil tussen initiaalwoorden en acroniemen, de gouden regel voor lidwoorden, puntjes, apostroffen bij het meervoud, en de uitzonderingen.",
  overview:
    "Dit is de meest uitgebreide gids over Nederlandse afkortingen. Je leert het strikte onderscheid tussen initiaalwoorden (TV), acroniemen (NAVO) en symbolen (%). Je beheerst de gouden regel voor lidwoorden (de EU, het KNMI), weet precies wanneer je wel of geen punt gebruikt, en maakt nooit meer een fout met apostroffen in het meervoud (CD's). Met 15+ kleurrijke tabellen, duidelijke PAS OP-momenten en 4 complexe MAX-niveau oefenvragen ben je een absolute meester in afkortingen!",
  anchorSectionId: "soorten",
  exercises: [],
  timeExpressionsLabel: "De 3 Soorten Afkortingen in Één Oogopslag ✂️",
  timeExpressions: {
    header: "Soort | Hoe spreek je het uit? | Voorbeeld | Volledige betekenis",
    rows: [
      ["🔤 Initiaalwoord (Letterwoord)", "Letter voor letter", "de **CD** (cee-dee)", "Compact Disc"],
      ["🔤 Acroniem (Lettergreepwoord)", "Als één normaal woord", "de **NAVO** (na-vo)", "Noord-Atlantische Verdragsorganisatie"],
      ["🔣 Symbool (Teken)", "Je zegt de betekenis", "**50 %** (vijftig procent)", "Procent"],
      ["📏 Meeteenheid", "Als één woord of letter", "**80 kg** (tachtig kilo)", "Kilogram"],
      ["📝 Verkorting (met punt)", "Als het volle woord", "**dhr.** (de heer)", "De heer"]
    ]
  },
  details: [
    {
      title: "Deel 1: De 3 Soorten Afkortingen 🗺️",
      body: `
        <p>Een <strong>afkorting</strong> is een verkorte vorm van een woord of zin. In het Nederlands maken we een strikt onderscheid op basis van <strong>hoe je het uitspreekt</strong>.</p>
        
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-gradient-to-r from-indigo-600 to-purple-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Soort</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Uitspraak</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Voorbeeld</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Betekenis</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-bold text-indigo-600">Initiaalwoord</td>
                <td class="px-4 py-3 text-sm">Letter voor letter</td>
                <td class="px-4 py-3 text-sm">de <strong>CD</strong> (cee-dee)</td>
                <td class="px-4 py-3 text-sm text-xs">Compact Disc</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-bold text-indigo-600">Initiaalwoord</td>
                <td class="px-4 py-3 text-sm">Letter voor letter</td>
                <td class="px-4 py-3 text-sm">de <strong>VN</strong> (vee-een)</td>
                <td class="px-4 py-3 text-sm text-xs">Verenigde Naties</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-bold text-purple-600">Acroniem</td>
                <td class="px-4 py-3 text-sm">Als één woord</td>
                <td class="px-4 py-3 text-sm">de <strong>NAVO</strong> (na-vo)</td>
                <td class="px-4 py-3 text-sm text-xs">Noord-Atlantische Verdragsorganisatie</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-bold text-purple-600">Acroniem</td>
                <td class="px-4 py-3 text-sm">Als één woord</td>
                <td class="px-4 py-3 text-sm"><strong>HEMA</strong> (he-ma)</td>
                <td class="px-4 py-3 text-sm text-xs">Huishoudelijke Maatschappij</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50">
                <td class="px-4 py-3 text-sm font-bold text-amber-600">Symbool</td>
                <td class="px-4 py-3 text-sm">Betekenis van het teken</td>
                <td class="px-4 py-3 text-sm"><strong>50 %</strong> (procent)</td>
                <td class="px-4 py-3 text-sm text-xs">Procent / & = en / @ = at</td>
              </tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      title: "Deel 2: Het Lidwoord – De Gouden Regel 👑",
      body: `
        <div class="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-emerald-700 dark:text-emerald-300 mb-2">🏆 De Gouden Regel</h3>
          <p class="text-slate-700 dark:text-slate-300">Het lidwoord van de afkorting is <strong>exact hetzelfde</strong> als het lidwoord van het volledige woord! Je moet dus altijd terugdenken aan de lange versie.</p>
        </div>

        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-gradient-to-r from-emerald-600 to-teal-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Volledige vorm</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Afkorting</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Correcte zin</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm"><strong class="text-blue-600">de</strong> Naamloze Vennootschap</td>
                <td class="px-4 py-3 text-sm"><strong class="text-blue-600">de</strong> NV</td>
                <td class="px-4 py-3 text-sm text-xs">Ik werk bij <strong>de</strong> NV.</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm"><strong class="text-blue-600">de</strong> Europese Unie</td>
                <td class="px-4 py-3 text-sm"><strong class="text-blue-600">de</strong> EU</td>
                <td class="px-4 py-3 text-sm text-xs"><strong>De</strong> EU heeft nieuwe regels.</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm"><strong class="text-purple-600">het</strong> Koninklijk Nederlands Meteorologisch Instituut</td>
                <td class="px-4 py-3 text-sm"><strong class="text-purple-600">het</strong> KNMI</td>
                <td class="px-4 py-3 text-sm text-xs"><strong>Het</strong> KNMI voorspelt regen.</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30">
                <td class="px-4 py-3 text-sm"><strong class="text-purple-600">het</strong> Centraal Bureau voor de Statistiek</td>
                <td class="px-4 py-3 text-sm"><strong class="text-purple-600">het</strong> CBS</td>
                <td class="px-4 py-3 text-sm text-xs">Volgens <strong>het</strong> CBS...</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="bg-rose-50 dark:bg-rose-900/20 border-l-4 border-rose-500 p-4 rounded-r-lg my-4">
          <p class="font-semibold text-rose-700 dark:text-rose-300 mb-1">🚨 PAS OP: Laat je niet misleiden door de beginletter!</p>
          <p class="text-sm text-slate-700 dark:text-slate-300">Veel mensen denken onterecht dat afkortingen die op een medeklinker beginnen 'het' krijgen. Dit is <strong>volkomen fout</strong>. Het geslacht van het <em>volledige woord</em> bepaalt het lidwoord. <em>De</em> Algemene Inlichtingen- en Veiligheidsdienst wordt dus <em>de</em> AIVD.</p>
        </div>
      `
    },
    {
      title: "Deel 3: De Puntjes-regel – Wel of geen punt? ⚖️",
      body: `
        <p>Moet er achter de afkorting een punt? Dit hangt af van het soort afkorting en of het op de laatste letter van het woord eindigt.</p>
        
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-gradient-to-r from-amber-600 to-orange-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Situatie</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Regel</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Voorbeelden</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">Initiaalwoorden & Acroniemen</td>
                <td class="px-4 py-3 text-sm text-emerald-600 font-bold">Nooit een punt</td>
                <td class="px-4 py-3 text-sm">TV, VN, NAVO, SMS, HEMA, CD</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">Meet- en munteenheden</td>
                <td class="px-4 py-3 text-sm text-emerald-600 font-bold">Nooit een punt</td>
                <td class="px-4 py-3 text-sm">m (meter), cm, kg, € (euro), km/u</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">Eindigt <strong>niet</strong> op de laatste letter</td>
                <td class="px-4 py-3 text-sm text-rose-600 font-bold">Wel een punt</td>
                <td class="px-4 py-3 text-sm">blz. (bladzijde), dhr. (de heer), mw. (mevrouw), etc. (et cetera)</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30">
                <td class="px-4 py-3 text-sm font-semibold">Eindigt op de laatste letter</td>
                <td class="px-4 py-3 text-sm text-emerald-600 font-bold">Geen punt</td>
                <td class="px-4 py-3 text-sm">mevr (mevrouw - mag, maar dhr. moet een punt hebben)</td>
              </tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      title: "Deel 4: Het Meervoud – De Apostrof-regel 🔤",
      body: `
        <div class="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-indigo-700 dark:text-indigo-300 mb-2">🏆 De Gouden Meervoudsregel</h3>
          <p class="text-slate-700 dark:text-slate-300">Het meervoud van een afkorting krijgt <strong>altijd</strong> een <strong>-s</strong>. Maar je moet <strong>altijd</strong> een apostrof plaatsen vóór de -s, óók als de afkorting eindigt op een medeklinker!</p>
        </div>

        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-gradient-to-r from-pink-600 to-rose-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Enkelvoud</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Fout ❌</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Correct ✅</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Uitleg</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">de CD</td>
                <td class="px-4 py-3 text-sm text-rose-600">de CDs</td>
                <td class="px-4 py-3 text-sm text-emerald-600 font-bold">de CD's</td>
                <td class="px-4 py-3 text-sm text-xs">Altijd een apostrof bij afkortingen!</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">de tv</td>
                <td class="px-4 py-3 text-sm text-rose-600">de tvs</td>
                <td class="px-4 py-3 text-sm text-emerald-600 font-bold">de tv's</td>
                <td class="px-4 py-3 text-sm text-xs">Zelfs als het eindigt op een medeklinker.</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">de dhr.</td>
                <td class="px-4 py-3 text-sm text-rose-600">de dhrs</td>
                <td class="px-4 py-3 text-sm text-emerald-600 font-bold">de dhr.'s</td>
                <td class="px-4 py-3 text-sm text-xs">De punt van de afkorting blijft gewoon staan!</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30">
                <td class="px-4 py-3 text-sm font-semibold">de auto</td>
                <td class="px-4 py-3 text-sm text-rose-600">de autos</td>
                <td class="px-4 py-3 text-sm text-emerald-600 font-bold">de auto's</td>
                <td class="px-4 py-3 text-sm text-xs">*Let op: 'auto' is géén afkorting, maar krijgt wél een apostrof omdat het eindigt op een lange klinker + o.</td>
              </tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      title: "Deel 5: Acroniemen die 'Gewone Woorden' worden 🔄",
      body: `
        <p>Soms wordt een acroniem zo populair dat mensen vergeten dat het een afkorting is. Het wordt dan behandeld als een <strong>gewoon, zelfstandig naamwoord</strong>.</p>
        
        <div class="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-amber-700 dark:text-amber-300 mb-2">🔄 De Regels Veranderen Dan:</h3>
          <ul class="space-y-1 list-disc pl-5 text-slate-700 dark:text-slate-300">
            <li>Ze krijgen <strong>kleine letters</strong>.</li>
            <li>Ze krijgen een <strong>gewone verbuiging</strong> (-e).</li>
            <li>Het meervoud krijgt <strong>gewoon een -s</strong> (zonder apostrof!).</li>
          </ul>
        </div>

        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-gradient-to-r from-teal-600 to-cyan-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Acroniem (Nog een afkorting)</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Gewoon woord geworden</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Uitleg</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm"><strong>de NAVO</strong> (hoofdletters)</td>
                <td class="px-4 py-3 text-sm"><strong>de radar</strong> (kleine letters)</td>
                <td class="px-4 py-3 text-sm text-xs">Radio Detection And Ranging</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm"><strong>de SMS</strong> (hoofdletters)</td>
                <td class="px-4 py-3 text-sm"><strong>de laser</strong> (kleine letters)</td>
                <td class="px-4 py-3 text-sm text-xs">Light Amplification by Stimulated Emission of Radiation</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50">
                <td class="px-4 py-3 text-sm"><strong>de CD</strong> (hoofdletters)</td>
                <td class="px-4 py-3 text-sm"><strong>de hifi</strong> (kleine letters)</td>
                <td class="px-4 py-3 text-sm text-xs">High Fidelity</td>
              </tr>
            </tbody>
          </table>
        </div>
      `
    }
  ],
  rulesTable: [
    {
      rule: "Het Lidwoord volgt het volledige woord",
      structure: "Het lidwoord (de/het) van een afkorting is exact hetzelfde als het lidwoord van de volledige, uitgeschreven vorm.",
      example: "de EU (de Europese Unie), het KNMI (het Koninklijk Nederlands Meteorologisch Instituut)",
      usage: "Twijfel je? Zoek de volledige naam op. Het geslacht van het kernwoord bepaalt het lidwoord."
    },
    {
      rule: "Punt bij afkortingen die niet op de laatste letter eindigen",
      structure: "Eindigt de afkorting op een andere letter dan het volledige woord? Gebruik een punt.",
      example: "dhr. (de heer), blz. (bladzijde), mw. (mevrouw)",
      usage: "Eindigt de afkorting wél op de laatste letter (zoals 'mevr' voor mevrouw)? Dan mag de punt weg, maar 'dhr.' heeft hem verplicht."
    },
    {
      rule: "Geen punt bij initiaalwoorden, acroniemen en eenheden",
      structure: "Zet nooit een punt na TV, NAVO, SMS, kg, m, cm, etc.",
      example: "Ik kijk TV. Hij weegt 80 kg.",
      usage: "Dit zijn 'echte' afkortingen of symbolen geworden en fungeren als gewone woorden of tekens."
    },
    {
      rule: "Meervoud van afkortingen krijgt altijd een apostrof",
      structure: "Voeg -s toe aan de afkorting, maar plaats ALTIIJD een apostrof (') voor de -s.",
      example: "CD's, tv's, dhr.'s, SMS'en",
      usage: "Zelfs als de afkorting eindigt op een medeklinker (zoals tv of cd). Dit leest veel makkelijker."
    },
    {
      rule: "Acroniemen die gewone woorden zijn geworden",
      structure: "Sommige acroniemen (radar, laser) worden nu als gewone woorden geschreven: kleine letters, gewone verbuiging, meervoud op -s (zonder apostrof).",
      example: "de nieuwe radar, twee lasers, de hifi-set",
      usage: "Als je het woord in de spreektaal als een normaal woord uitspreekt en het in het woordenboek staat als gewoon woord, gebruik je kleine letters."
    }
  ],
  callouts: [
    { type: "remember", label: "🏆 Gouden Regel 1", text: "Het lidwoord van de afkorting is hetzelfde als van het volledige woord: de EU, het CBS." },
    { type: "remember", label: "🏆 Gouden Regel 2", text: "Het meervoud van een afkorting krijgt ALTIIJD een apostrof: CD's, tv's, dhr.'s." },
    { type: "remember", label: "⚠️ PAS OP 1", text: "Meeteenheden (m, kg, cm) en acroniemen (NAVO, TV) krijgen NOOIT een punt." },
    { type: "remember", label: "⚠️ PAS OP 2", text: "Afkortingen die niet op de laatste letter eindigen (dhr., blz.) krijgen WEL een punt." },
    { type: "remember", label: "⚠️ PAS OP 3", text: "Laat je niet misleiden door de beginletter van een afkorting. 'Het' of 'de' hangt af van het volledige woord!" },
    { type: "tip", label: "💡 Pro-tip", text: "Woorden als 'radar' en 'laser' waren ooit afkortingen, maar zijn nu gewone woorden. Schrijf ze met kleine letters en maak het meervoud op -s (radars)." }
  ],
  commonMistakes: [
    { incorrect: "Ik heb 3 CDs gekocht.", correct: "Ik heb 3 CD's gekocht.", explanation: "Het meervoud van een afkorting krijgt altijd een apostrof vóór de -s, ook als het op een medeklinker eindigt." },
    { incorrect: "Het NAVO heeft besloten...", correct: "De NAVO heeft besloten...", explanation: "Het is 'de Noord-Atlantische Verdragsorganisatie'. Het lidwoord van het volledige woord (de) bepaalt het lidwoord van de afkorting." },
    { incorrect: "Ik weeg 80 k.g.", correct: "Ik weeg 80 kg.", explanation: "Meeteenheden (zoals m, kg, cm, km) krijgen nooit een punt." },
    { incorrect: "De dhr. Jansen woont hier.", correct: "De heer Jansen woont hier.", explanation: "In lopende, formele tekst schrijf je 'de heer' voluit. 'Dhr.' gebruik je alleen in adressen, tabellen of notities." },
    { incorrect: "We hebben 2 radars en 2 TV's.", correct: "We hebben 2 radars en 2 tv's.", explanation: "'Radar' is een acroniem dat een gewoon woord is geworden (kleine letters, meervoud op -s). 'TV' is een initiaalwoord (hoofdletters, meervoud met apostrof)." }
  ],
  review: [
    "✅ Initiaalwoord: spreek letters apart uit (cee-dee). Acroniem: spreek als één woord (na-vo).",
    "✅ Lidwoord: volgt het volledige woord (de EU, het KNMI).",
    "✅ Punt: Nooit bij initiaalwoorden, acroniemen en meeteenheden. Wel bij blz., dhr., etc.",
    "✅ Meervoud: Altijd een apostrof bij afkortingen! (tv's, cd's, dhr.'s).",
    "✅ Gewone woorden: Radar en laser zijn acroniemen die gewone woorden zijn geworden (kleine letters, meervoud op -s).",
    "✅ In lopende tekst: Schrijf titels en aansprekingen (de heer, mevrouw) liever voluit dan als afkorting (dhr., mw.)."
  ],
  qa: [
    {
      question: "  De ultieme lidwoord-valkuil: Vul het juiste lidwoord in (de of het) en leg uit waarom. 1. ___ EU heeft nieuwe wetten gemaakt. 2. ___ CBS publiceert vandaag nieuwe cijfers. 3. ___ AIVD onderzoekt de zaak.",
      answer: "1. De EU. (Het is 'de Europese Unie'). 2. Het CBS. (Het is 'het Centraal Bureau voor de Statistiek'). 3. De AIVD. (Het is 'de Algemene Inlichtingen- en Veiligheidsdienst'). Uitleg: Je moet altijd terugdenken aan het volledige woord om het juiste lidwoord te bepalen."
    },
    {
      question: "  Meervoud en verkleinwoorden: Schrijf de volgende woorden in het meervoud en in het verkleinwoord meervoud. Let op de apostrof en puntjes! 1. de cd 2. de tv 3. de dhr.",
      answer: "1. de cd -> Meervoud: de cd's | Verkleinwoord meervoud: de cd'tjes. 2. de tv -> Meervoud: de tv's | Verkleinwoord meervoud: de tv'tjes. 3. de dhr. -> Meervoud: de dhr.'s | Verkleinwoord meervoud: de dhr.'tjes. Let op: de punt van de afkorting blijft gewoon staan vóór de apostrof of het verkleinwoord!"
    },
    {
      question: "  De puntjes-regel en meeteenheden: Een student schrijft: 'De dhr. Jansen woont op 100 m. van de blz. van het kasteel. Hij heeft 3 CDs.' Er staan 4 fouten in. Haal ze eruit en leg uit waarom.",
      answer: "1. dhr. Jansen -> de heer Jansen (in lopende tekst schrijf je dit voluit). 2. 100 m. -> 100 m (meeteenheden krijgen nooit een punt). 3. blz. -> bladzijde of pagina (in lopende tekst liever voluit). 4. CDs -> CD's (het meervoud van een afkorting krijgt altijd een apostrof)."
    },
    {
      question: "  Acroniem vs. Gewoon woord: Wat is het exacte verschil in spelling, uitspraak en grammatica tussen 'de NAVO' en 'de radar'? Waarom schrijf je 'De nieuwe NAVO' en 'De nieuwe radar'?",
      answer: "NAVO is een acroniem dat nog steeds als een echte afkorting wordt behandeld: hoofdletters, geen verbuiging, meervoud met apostrof (NAVO's). Radar is een acroniem (Radio Detection And Ranging) dat zo ingeburgerd is dat het een gewoon zelfstandig naamwoord is geworden: kleine letters, wél verbuiging (de nieuwe radar), en meervoud op -s zonder apostrof (radars)."
    }
  ]
};