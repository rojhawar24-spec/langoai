import type { GrammarLesson } from "../../types";

export const passiefAlleTijden: GrammarLesson = {
  id: "nl-passief-alle-tijden-1",
  title: "Het Passief in Alle Tijden: De Ultieme Masterclass",
  level: 3,
  topic: "Grammatica & Zinsbouw",
  body: "Beheers de lijdende vorm volledig: de strijd tussen 'worden' en 'zijn', passief in alle 6 tijden, modale constructies, en de grootste valkuilen.",
  overview:
    "Dit is de meest uitgebreide, professionele en perfect gestructureerde gids over het Passief (Lijdende Vorm) in het Nederlands. Je leert het cruciale verschil tussen het dynamische 'worden' en het statische 'zijn', beheerst de vorming in alle tijden (inclusief de toekomstige en voltooide tijden), en doorziet de valkuilen van modale werkwoorden en intransitieve werkwoorden. Met prachtige tabellen, strikte PRO-regels en 4 complexe MAX-oefenvragen word je een absolute meester in de Nederlandse zinsbouw!",
  anchorSectionId: "wat-is-passief",
  exercises: [],
  timeExpressionsLabel: "De Gouden Formule & Tijden 📅",
  timeExpressions: {
    header: "Tijd | Actief Voorbeeld | Passieve Formule | Passief Voorbeeld",
    rows: [
      ["**OTT**", "De chef bereidt het.", "Onderwerp + **wordt** + VD", "Het **wordt** bereid."],
      ["**OVT**", "De chef bereidde het.", "Onderwerp + **werd** + VD", "Het **werd** bereid."],
      ["**VTT**", "De chef heeft het bereid.", "Onderwerp + **is** + VD", "Het **is** bereid."],
      ["**VVT**", "De chef had het bereid.", "Onderwerp + **was** + VD", "Het **was** bereid."],
      ["**OTTt**", "De chef zal het bereiden.", "Onderwerp + **zal worden** + VD", "Het **zal worden** bereid."],
      ["**VTTt**", "De chef zal het bereid hebben.", "Onderwerp + **zal zijn** + VD", "Het **zal zijn** bereid."]
    ]
  },
  details: [
    {
      title: "Deel 1: Wat is het Passief (Lijdende Vorm)? 🎭",
      body: `
        <p>In een actieve zin staat de <strong>doener</strong> (het onderwerp) centraal. In een passieve zin staat de <strong>ontvanger van de actie</strong> (het voormalig lijdend voorwerp) centraal. De doener is onbelangrijk, onbekend, of wordt bewust weggelaten.</p>
        
        <div class="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-emerald-700 dark:text-emerald-300 mb-2">🏆 PRO REGEL 1: De Gouden Formule</h3>
          <p class="text-slate-700 dark:text-slate-300 font-mono text-sm md:text-base">Nieuw Onderwerp + <span class="text-emerald-600 dark:text-emerald-400 font-bold">Vorm van WORDEN of ZIJN</span> + <span class="text-purple-600 dark:text-purple-400 font-bold">Voltooid Deelwoord (VD)</span> + <em>(optioneel: door + doener)</em></p>
        </div>

        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-gradient-to-r from-indigo-600 to-purple-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Type Zin</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Focus</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Voorbeeld</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">Actief</td>
                <td class="px-4 py-3 text-sm text-xs">Focus op de <strong>doener</strong>.</td>
                <td class="px-4 py-3 text-sm">De aannemer <strong>bouwt</strong> het huis.</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30">
                <td class="px-4 py-3 text-sm font-semibold">Passief</td>
                <td class="px-4 py-3 text-sm text-xs">Focus op de <strong>actie/het resultaat</strong>.</td>
                <td class="px-4 py-3 text-sm">Het huis <strong>wordt</strong> (door de aannemer) <strong>gebouwd</strong>.</td>
              </tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      title: "Deel 2: De Grootste Valkuil: WORDEN vs. ZIJN ⚔️",
      body: `
        <p>Dit is het allerbelangrijkste concept van het Nederlandse passief. Je moet kiezen tussen een <strong>proces</strong> (actie) en een <strong>resultaat</strong> (toestand).</p>
        
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-gradient-to-r from-blue-600 to-cyan-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Kenmerk</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">WORDEN (Dynamisch Passief)</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">ZIJN (Statisch Passief)</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">Functie</td>
                <td class="px-4 py-3 text-sm text-xs">Drukt de <strong>actie</strong> of het <strong>proces</strong> uit.</td>
                <td class="px-4 py-3 text-sm text-xs">Drukt het <strong>resultaat</strong> of de <strong>toestand</strong> uit.</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">Tijden</td>
                <td class="px-4 py-3 text-sm text-xs">OTT, OVT, OTTt (Toekomst)</td>
                <td class="px-4 py-3 text-sm text-xs">VTT (Perfectum), VVT (Plusquamperfectum), VTTt</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">Vraag</td>
                <td class="px-4 py-3 text-sm text-xs"><em>Wat gebeurt er (nu/toen/morgen)?</em></td>
                <td class="px-4 py-3 text-sm text-xs"><em>Hoe is de situatie nu (als gevolg van vroeger)?</em></td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30">
                <td class="px-4 py-3 text-sm font-semibold">Voorbeeld</td>
                <td class="px-4 py-3 text-sm">De auto <strong>wordt</strong> gerepareerd. <em>(De monteur is nu bezig).</em></td>
                <td class="px-4 py-3 text-sm">De auto <strong>is</strong> gerepareerd. <em>(De monteur is klaar, de auto werkt).</em></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-indigo-700 dark:text-indigo-300 mb-2">🏆 PRO REGEL 2</h3>
          <p class="text-slate-700 dark:text-slate-300">In de voltooide tijden (VTT, VVT, VTTt) gebruik je <strong>ALTIJD 'zijn'</strong> als hulpwerkwoord voor het passief, omdat je spreekt over een voltooid resultaat. Je gebruikt <strong>NOOIT</strong> 'worden' in de VTT/VVT van het passief!</p>
        </div>
      `
    },
    {
      title: "Deel 3: Passief met Modale Werkwoorden (De Dubbele Infinitief) 🌀",
      body: `
        <p>Wat gebeurt er als er een modaal werkwoord (<em>moeten, kunnen, zullen, mogen</em>) bij komt kijken? Dan krijg je een <strong>dubbele infinitief</strong> aan het einde van de zin.</p>
        
        <div class="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-emerald-700 dark:text-emerald-300 mb-2">🏆 PRO REGEL 3: De Modale Passief Formule</h3>
          <p class="text-slate-700 dark:text-slate-300 font-mono text-sm md:text-base">Onderwerp + <span class="text-emerald-600 dark:text-emerald-400 font-bold">Modaal Werkwoord</span> + <span class="text-purple-600 dark:text-purple-400 font-bold">Voltooid Deelwoord</span> + <span class="text-pink-600 dark:text-pink-400 font-bold">worden</span></p>
        </div>

        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-gradient-to-r from-purple-600 to-pink-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Actief met Modaal</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Passief met Modaal (Hoofdzin)</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm">Men <strong>moet</strong> de regels <strong>volgen</strong>.</td>
                <td class="px-4 py-3 text-sm">De regels <strong>moeten</strong> gevolgd <strong>worden</strong>.</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm">Men <strong>zal</strong> het huis <strong>slopen</strong>.</td>
                <td class="px-4 py-3 text-sm">Het huis <strong>zal</strong> gesloopt <strong>worden</strong>.</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50">
                <td class="px-4 py-3 text-sm">Men <strong>heeft</strong> het <strong>moeten</strong> <strong>doen</strong>.</td>
                <td class="px-4 py-3 text-sm">Het <strong>is</strong> gedaan <strong>moeten worden</strong>.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="bg-rose-50 dark:bg-rose-900/20 border-l-4 border-rose-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-rose-700 dark:text-rose-300 mb-2">🚨 PAS OP! DE VOLGORDE-VALKUIL IN DE BIJZIN</h3>
          <p class="text-sm text-slate-700 dark:text-slate-300 mb-2">In een bijzin gaat het vervoegde modale werkwoord naar het einde, <strong>na</strong> de infinitieven!</p>
          <ul class="space-y-1 text-sm text-slate-700 dark:text-slate-300">
            <li>❌ <em>Fout:</em> ...omdat de regels <strong>moeten</strong> gevolgd worden.</li>
            <li>✅ <em>Correct:</em> ...omdat de regels gevolgd <strong>moeten worden</strong>.</li>
          </ul>
        </div>
      `
    },
    {
      title: "Deel 4: De Grootste 'Pas Op' Valkuilen ⚠️",
      body: `
        <p>Dit zijn de fouten die bijna elke leerling (en soms moedertaalsprekers!) maakt bij het vormen van het passief.</p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-gradient-to-r from-rose-600 to-pink-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">#</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">De Valkuil</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Fout ❌</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Correct ✅</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-bold">1</td>
                <td class="px-4 py-3 text-sm text-xs">Intransitieve werkwoorden</td>
                <td class="px-4 py-3 text-sm text-rose-600">Er wordt veel geslapen door de baby.</td>
                <td class="px-4 py-3 text-sm text-emerald-600 font-bold">De baby slaapt veel.</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-bold">2</td>
                <td class="px-4 py-3 text-sm text-xs">Worden vs. Zijn (Resultaat)</td>
                <td class="px-4 py-3 text-sm text-rose-600">De deur wordt gesloten. (Terwijl hij al dicht is).</td>
                <td class="px-4 py-3 text-sm text-emerald-600 font-bold">De deur <strong>is</strong> gesloten.</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-bold">3</td>
                <td class="px-4 py-3 text-sm text-xs">Door vs. Met</td>
                <td class="px-4 py-3 text-sm text-rose-600">De brief is geschreven <strong>door</strong> een balpen.</td>
                <td class="px-4 py-3 text-sm text-emerald-600 font-bold">De brief is geschreven <strong>met</strong> een balpen.</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-bold">4</td>
                <td class="px-4 py-3 text-sm text-xs">Onderwerp aanpassen</td>
                <td class="px-4 py-3 text-sm text-rose-600">De taart <strong>wordt</strong> door mij gebakken. (Als 'taart' meervoud was)</td>
                <td class="px-4 py-3 text-sm text-emerald-600 font-bold">De taarten <strong>worden</strong> door mij gebakken.</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50">
                <td class="px-4 py-3 text-sm font-bold">5</td>
                <td class="px-4 py-3 text-sm text-xs">VTT Passief met 'worden'</td>
                <td class="px-4 py-3 text-sm text-rose-600">Het huis is gebouwd <strong>geworden</strong>.</td>
                <td class="px-4 py-3 text-sm text-emerald-600 font-bold">Het huis <strong>is</strong> gebouwd.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="text-sm text-slate-700 dark:text-slate-300 mt-2"><em>Uitleg bij #1:</em> Werkwoorden <strong>zonder</strong> lijdend voorwerp (slapen, gebeuren, sterven, bestaan) kunnen <strong>NOOIT</strong> in het passief! <br><em>Uitleg bij #3:</em> Gebruik <strong>door</strong> voor de <em>doener</em> (persoon/natuurkracht). Gebruik <strong>met</strong> voor het <em>instrument</em>. <br><em>Uitleg bij #5:</em> In het Nederlands laten we 'geworden' in de VTT passief meestal weg. Het is al een resultaat.</p>
      `
    }
  ],
  rulesTable: [
    {
      rule: "De Gouden Passief Formule",
      structure: "Nieuw Onderwerp + vorm van WORDEN/ZIJN + Voltooid Deelwoord (+ door + doener).",
      example: "Het huis wordt gebouwd. / Het huis is gebouwd.",
      usage: "Gebruik dit om de focus van de doener naar de actie of het resultaat te verleggen."
    },
    {
      rule: "Worden (Proces) vs. Zijn (Resultaat)",
      structure: "Worden = de actie is bezig. Zijn = de actie is klaar en het resultaat is zichtbaar.",
      example: "De auto wordt gerepareerd (nu). / De auto is gerepareerd (klaar).",
      usage: "In voltooide tijden (VTT, VVT) gebruik je ALTIJD 'zijn' voor het passief."
    },
    {
      rule: "Modaal Passief Volgorde",
      structure: "Hoofdzin: Modaal + VD + worden. Bijzin: VD + modaal + worden.",
      example: "Het moet gedaan worden. / ...omdat het gedaan moet worden.",
      usage: "Onthoud dat 'worden' in het modaal passief altijd als infinitief aan het einde staat."
    },
    {
      rule: "Geen Passief bij Intransitieve Werkwoorden",
      structure: "Werkwoorden zonder lijdend voorwerp kunnen niet passief gemaakt worden.",
      example: "Er gebeurde een ongeluk. (Niet: Een ongeluk werd gebeurd).",
      usage: "Vraag je af: 'Kan ik vragen: Wat wordt er [werkwoord]?' Zo nee, dan is het intransitief."
    }
  ],
  callouts: [
    { type: "remember", label: "🏆 PRO REGEL 1", text: "Nieuw Onderwerp + WORDEN/ZIJN + Voltooid Deelwoord (+ door + doener)." },
    { type: "remember", label: "🏆 PRO REGEL 2", text: "In voltooide tijden (VTT, VVT) gebruik je ALTIJD 'zijn' als hulpwerkwoord voor het passief." },
    { type: "remember", label: "🏆 PRO REGEL 3", text: "Bij modaal passief: Hoofdzin = modaal + VD + worden. Bijzin = VD + modaal + worden." },
    { type: "remember", label: "⚠️ PAS OP 1", text: "Intransitieve werkwoorden (slapen, gebeuren, sterven) kunnen NOOIT in het passief!" },
    { type: "remember", label: "⚠️ PAS OP 2", text: "Gebruik 'door' voor de doener (persoon), en 'met' voor het instrument (voorwerp)." },
    { type: "remember", label: "⚠️ PAS OP 3", text: "Laat 'geworden' weg in de VTT van het passief. Zeg 'Het is gebouwd', niet 'Het is gebouwd geworden'." }
  ],
  commonMistakes: [
    { incorrect: "Er wordt veel geslapen door de baby.", correct: "De baby slaapt veel.", explanation: "Slapen is een intransitief werkwoord (geen lijdend voorwerp) en kan dus niet in het passief." },
    { incorrect: "De deur wordt gesloten. (terwijl de monteur al weg is)", correct: "De deur is gesloten.", explanation: "Als de actie al klaar is en we naar het resultaat kijken, gebruik je 'zijn' (statisch passief), niet 'worden'." },
    { incorrect: "De brief is geschreven door een balpen.", correct: "De brief is geschreven met een balpen.", explanation: "Gebruik 'door' alleen voor de actieve doener (een persoon of kracht). Gebruik 'met' voor een instrument of gereedschap." },
    { incorrect: "De taart wordt door mij gebakken. (als het over 'taarten' gaat)", correct: "De taarten worden door mij gebakken.", explanation: "Het hulpwerkwoord (wordt/worden, is/zijn) moet altijd in getal overeenkomen met het NIEUWE onderwerp." },
    { incorrect: "Het huis is gebouwd geworden.", correct: "Het huis is gebouwd.", explanation: "In het Nederlands laten we 'geworden' in de VTT van het passief standaard weg, omdat het voltooid deelwoord al het resultaat aangeeft." }
  ],
  review: [
    "✅ Passief = focus op de actie of het resultaat, niet op de doener.",
    "✅ Formule: Onderwerp + worden/zijn + voltooid deelwoord.",
    "✅ Worden = proces (actie is bezig). Zijn = resultaat (actie is klaar).",
    "✅ VTT/VVT passief gebruikt ALTIJD 'zijn' (is/was + VD).",
    "✅ Modaal passief: ...moet gedaan worden / ...omdat het gedaan moet worden.",
    "✅ Intransitieve werkwoorden (gebeuren, slapen) hebben geen passief.",
    "✅ Doener = 'door'. Instrument = 'met'."
  ],
  qa: [
    {
      question: "De Modale Passief Valstrik in een Bijzin: Zet de volgende actieve zin om naar het passief, en maak er vervolgens een bijzin van die begint met 'Omdat'. Let extreem goed op de woordvolgorde van de drie werkwoorden aan het einde! Actief: 'De gemeente zal de oude brug moeten slopen.'",
      answer: "...omdat de oude brug gesloopt zal moeten worden. (Uitleg: 1. Nieuw onderwerp: 'de oude brug' (enkelvoud). 2. Modaal passief: 'zal moeten worden'. 3. Bijzin-regel: het vervoegde werkwoord 'zal' gaat helemaal naar het einde, na de infinitieven 'gesloopt' en 'worden'.)"
    },
    {
      question: "Worden vs. Zijn Nuance: Lees de volgende twee zinnen. Wat is het exacte, visuele verschil in de situatie die wordt beschreven? 1. 'Het raam wordt gerepareerd.' 2. 'Het raam is gerepareerd.'",
      answer: "In zin 1 (wordt) is de monteur nu op dit moment bezig met hameren en schroeven. De actie is gaande (proces). In zin 2 (is) is de monteur al weg. Het raam is heel, de actie is voltooid en we kijken naar het eindresultaat (toestand)."
    },
    {
      question: "De Intransitieve Valkuil: Een student probeert de volgende actieve zin om te zetten naar het passief: 'Er gebeurde gisteren een vreselijk ongeluk op de snelweg.' Hij schrijft: 'Een vreselijk ongeluk werd gisteren op de snelweg gebeurd.' Waarom is deze passieve zin grammaticaal 100% onmogelijk in het Nederlands?",
      answer: "Het werkwoord 'gebeuren' is een intransitief werkwoord. Het heeft geen lijdend voorwerp (je kunt niet vragen 'Wat gebeurt er?' met een direct object als antwoord op de actie). Omdat er geen lijdend voorwerp is om te promoveren tot onderwerp, kan dit werkwoord niet in het passief worden gezet. De enige correcte vorm is de actieve vorm met 'er': 'Er gebeurde een ongeluk.'"
    },
    {
      question: "Plusquamperfectum Passief + Doener: Zet de volgende zin om naar het passief in de Voltooid Verleden Tijd (VVT / Plusquamperfectum). Actief: 'De dief had de kostbare schilderijen al verkocht voordat de politie aankwam.'",
      answer: "De kostbare schilderijen waren al verkocht (door de dief), voordat de politie aankwam. (Uitleg: 1. Nieuw onderwerp: 'De kostbare schilderijen' (meervoud!). 2. Tijd: VTT in het actief ('had verkocht') wordt VTT passief (resultaat in het verleden), dus gebruik je 'waren' (meervoud van 'was'). 3. Voltooid deelwoord: 'verkocht'. 'Door de dief' is optioneel maar correct.)"
    }
  ]
};