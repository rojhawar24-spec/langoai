import type { GrammarLesson } from "../../types";

export const vragendVoornaamwoord: GrammarLesson = {
  id: "nl-vragend-voornaamwoord-1",
  title: "Vragend Voornaamwoord: Wie, Wat, Welke & Wat Voor – De Ultieme Gids",
  level: 3,
  topic: "Grammatica",
  body: "Beheers de vragende voornaamwoorden volledig: het strikte onderscheid tussen wie/wat, de valkuilen van welke/welk, de 'een'-regel bij wat voor, en de juiste voorzetselvragen.",
  overview:
    "Dit is de meest uitgebreide en visueel overzichtelijke gids over vragende voornaamwoorden in het Nederlands. Je leert de 8 strikte PRO-regels om nooit meer te twijfelen tussen 'wie' en 'wat', ontdekt waarom 'wat voor een boeken' 100% fout is, en weet precies hoe je omgaat met voorzetsels (met wie vs. waar...voor). Met 15+ kleurrijke tabellen, duidelijke PAS OP-waarschuwingen en 4 complexe MAX-niveau oefenvragen ben je een absolute meester in het stellen van de juiste vragen!",
  anchorSectionId: "basis",
  exercises: [],
  timeExpressionsLabel: "De 4 Vragende Voornaamwoorden in Één Oogopslag ❓",
  timeExpressions: {
    header: "Vragend vnw | Gebruik voor | Voorbeeld | Antwoord",
    rows: [
      ["👤 WIE", "Personen (identiteit)", "**Wie** is die meneer?", "Mijn oom."],
      ["📦 WAT", "Dingen, dieren, concepten, beroepen", "**Wat** doe je voor werk?", "Ik ben leraar."],
      ["🎯 WELKE / WELK", "Specifieke keuze uit een **gesloten** groep", "**Welke** auto wil je? (deze of die?)", "Die rode daar."],
      ["📋 WAT VOOR (EEN)", "Soort, eigenschap uit een **open** groep", "**Wat voor** auto wil je?", "Een snelle, rode sportwagen."]
    ]
  },
  details: [
    {
      title: "Deel 1: De Basis – WIE en WAT (Personen vs. Dingen) 🧑‍🤝‍🧑",
      body: `
        <p>Een <strong>vragend voornaamwoord</strong> gebruik je om een directe of indirecte vraag te stellen. De keuze die je maakt, verandert de betekenis van je vraag compleet.</p>
        
        <div class="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-emerald-700 dark:text-emerald-300 mb-2">🏆 De 2 Gouden Basisregels</h3>
          <ul class="space-y-2 list-none pl-0 text-slate-700 dark:text-slate-300">
            <li>✅ <strong>PRO REGEL 1:</strong> Vraag je naar een <strong>persoon</strong> (of iemand met een naam)? Gebruik <strong>WIE</strong>.</li>
            <li>✅ <strong>PRO REGEL 2:</strong> Vraag je naar een <strong>ding, dier, concept of gebeurtenis</strong>? Gebruik <strong>WAT</strong>.</li>
          </ul>
        </div>

        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-indigo-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Categorie</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Vragend vnw</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Voorbeeldzin</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Mogelijk Antwoord</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">Persoon</td>
                <td class="px-4 py-3 text-sm font-bold text-indigo-600">wie</td>
                <td class="px-4 py-3 text-sm"><strong>Wie</strong> is die meneer?</td>
                <td class="px-4 py-3 text-sm text-xs">Dat is mijn oom.</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">Ding</td>
                <td class="px-4 py-3 text-sm font-bold text-indigo-600">wat</td>
                <td class="px-4 py-3 text-sm"><strong>Wat</strong> ligt er op tafel?</td>
                <td class="px-4 py-3 text-sm text-xs">Een boek.</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">Dier</td>
                <td class="px-4 py-3 text-sm font-bold text-indigo-600">wat</td>
                <td class="px-4 py-3 text-sm"><strong>Wat</strong> blaft er daar?</td>
                <td class="px-4 py-3 text-sm text-xs">Een hond.</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30">
                <td class="px-4 py-3 text-sm font-semibold">Concept / Gebeurtenis</td>
                <td class="px-4 py-3 text-sm font-bold text-indigo-600">wat</td>
                <td class="px-4 py-3 text-sm"><strong>Wat</strong> is er gebeurd?</td>
                <td class="px-4 py-3 text-sm text-xs">Een ongeluk.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="bg-rose-50 dark:bg-rose-900/20 border-l-4 border-rose-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-rose-700 dark:text-rose-300 mb-2">🚨 PAS OP! DE 'BEROEP'-VALKUIL!</h3>
          <p class="text-sm text-slate-700 dark:text-slate-300 mb-2">Veel cursisten vertalen "Who are you?" letterlijk naar <em>"Wie ben je?"</em>. Maar als je naar iemands <strong>beroep of functie</strong> vraagt, gebruik je in het Nederlands <strong>WAT</strong>!</p>
          <ul class="space-y-1 text-sm text-slate-700 dark:text-slate-300">
            <li>❌ <em>Fout:</em> Wie ben je van beroep?</li>
            <li>✅ <em>Correct:</em> <strong>Wat</strong> ben je van beroep? / <strong>Wat</strong> doe je voor werk?</li>
            <li>💡 <em>Tip:</em> Gebruik 'Wie ben je?' alleen als je naar iemands identiteit of naam vraagt: <em>"Wie ben je?" "Ik ben de nieuwe buurman."</em></li>
          </ul>
        </div>
      `
    },
    {
      title: "Deel 2: WELKE vs. WELK (Kiezen uit een beperkte groep) 🎯",
      body: `
        <p>Soms wil je niet zomaar 'een ding' weten, maar wil je dat iemand een <strong>specifieke keuze</strong> maakt uit een groep die er al is (een gesloten groep). Dan gebruik je <strong>welke</strong> of <strong>welk</strong>.</p>
        
        <div class="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-emerald-700 dark:text-emerald-300 mb-2">🏆 De Lidwoord Regels voor 'Welke'</h3>
          <ul class="space-y-2 list-none pl-0 text-slate-700 dark:text-slate-300">
            <li>✅ <strong>PRO REGEL 3:</strong> Gebruik <strong>WELKE</strong> bij een <strong>de-woord</strong> of in het <strong>meervoud</strong>.</li>
            <li>✅ <strong>PRO REGEL 4:</strong> Gebruik <strong>WELK</strong> bij een <strong>het-woord</strong> in het <strong>enkelvoud</strong>.</li>
          </ul>
        </div>

        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-purple-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Lidwoord van het woord</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Vragend vnw</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Voorbeeldzin</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Situatie (Gesloten groep)</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">de (enkelvoud)</td>
                <td class="px-4 py-3 text-sm font-bold text-purple-600">welke</td>
                <td class="px-4 py-3 text-sm"><strong>Welke</strong> auto wil je kopen?</td>
                <td class="px-4 py-3 text-sm text-xs">Er staan 3 specifieke auto's voor je neus.</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">het (enkelvoud)</td>
                <td class="px-4 py-3 text-sm font-bold text-purple-600">welk</td>
                <td class="px-4 py-3 text-sm"><strong>Welk</strong> boek heb je gelezen?</td>
                <td class="px-4 py-3 text-sm text-xs">Je vriend wijst naar een stapel van 5 boeken.</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50">
                <td class="px-4 py-3 text-sm font-semibold">de (meervoud!)</td>
                <td class="px-4 py-3 text-sm font-bold text-purple-600">welke</td>
                <td class="px-4 py-3 text-sm"><strong>Welke</strong> schoenen staan je het beste?</td>
                <td class="px-4 py-3 text-sm text-xs">Je past meerdere paren schoenen in de winkel.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="bg-rose-50 dark:bg-rose-900/20 border-l-4 border-rose-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-rose-700 dark:text-rose-300 mb-2">🚨 PAS OP! DE MEERVOUDSVALKUIL!</h3>
          <p class="text-sm text-slate-700 dark:text-slate-300 mb-2">In het meervoud krijgen <strong>alle</strong> woorden het lidwoord <strong>de</strong>. Daarom gebruik je in het meervoud <strong>ALTIJD welke</strong>, zelfs als het enkelvoud een het-woord was!</p>
          <ul class="space-y-1 text-sm text-slate-700 dark:text-slate-300">
            <li>• <em>Het huis</em> (het) ➔ <em>De huizen</em> (de).</li>
            <li>• Vraag: <strong>Welke</strong> huizen zijn te koop? (Niet: <em>Welk huizen</em>).</li>
          </ul>
        </div>
      `
    },
    {
      title: "Deel 3: WAT VOOR (EEN) – Vraag naar soort of eigenschap 📦",
      body: `
        <p>Als je wilt weten <strong>welk soort</strong> ding het is, of welke <strong>eigenschappen</strong> het heeft, gebruik je <strong>wat voor (een)</strong>. Hierbij is de groep <strong>open</strong>: je weet niet wat er gaat komen.</p>

        <div class="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-emerald-700 dark:text-emerald-300 mb-2">🏆 De 'EEN'-val Regels</h3>
          <ul class="space-y-2 list-none pl-0 text-slate-700 dark:text-slate-300">
            <li>✅ <strong>PRO REGEL 5:</strong> Gebruik <strong>WAT VOOR EEN</strong> bij een <strong>telbaar het-woord of de-woord in het enkelvoud</strong>.</li>
            <li>✅ <strong>PRO REGEL 6:</strong> De <strong>'een' valt weg</strong> bij <strong>meervoud</strong> en bij <strong>niet-telbare stoffen</strong> (stoffen, abstracte begrippen).</li>
          </ul>
        </div>

        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-amber-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Situatie</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Vragend vnw</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Voorbeeldzin</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Uitleg</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">Enkelvoud (telbaar)</td>
                <td class="px-4 py-3 text-sm font-bold text-amber-600">wat voor een</td>
                <td class="px-4 py-3 text-sm"><strong>Wat voor een</strong> auto heb je gekocht?</td>
                <td class="px-4 py-3 text-sm text-xs">Telbaar, enkelvoud. De 'een' blijft staan.</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">Meervoud</td>
                <td class="px-4 py-3 text-sm font-bold text-amber-600">wat voor</td>
                <td class="px-4 py-3 text-sm"><strong>Wat voor</strong> auto's rijd je het liefst?</td>
                <td class="px-4 py-3 text-sm text-xs">Meervoud ➔ de 'een' valt <strong>altijd</strong> weg!</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">Niet-telbaar (stof)</td>
                <td class="px-4 py-3 text-sm font-bold text-amber-600">wat voor</td>
                <td class="px-4 py-3 text-sm"><strong>Wat voor</strong> weer wordt het morgen?</td>
                <td class="px-4 py-3 text-sm text-xs">'Weer' is niet telbaar (je kunt niet zeggen 'twee weers') ➔ geen 'een'.</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30">
                <td class="px-4 py-3 text-sm font-semibold">Niet-telbaar (abstract)</td>
                <td class="px-4 py-3 text-sm font-bold text-amber-600">wat voor</td>
                <td class="px-4 py-3 text-sm"><strong>Wat voor</strong> informatie heb je?</td>
                <td class="px-4 py-3 text-sm text-xs">'Informatie' is een stofnaam ➔ geen 'een'.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="bg-rose-50 dark:bg-rose-900/20 border-l-4 border-rose-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-rose-700 dark:text-rose-300 mb-2">🚨 PAS OP! DE GROOTSTE 'EEN'-FOUT!</h3>
          <p class="text-sm text-slate-700 dark:text-slate-300 mb-2">In spreektaal hoor je vaak: <em>"Wat voor een boeken lees je graag?"</em> Dit is <strong>100% FOUT</strong> in correct Nederlands! Omdat <em>boeken</em> meervoud is, <strong>moet</strong> de 'een' wegvallen.</p>
          <ul class="space-y-1 text-sm text-slate-700 dark:text-slate-300">
            <li>❌ <em>Fout:</em> Wat voor een schoenen draag je?</li>
            <li>✅ <em>Correct:</em> <strong>Wat voor</strong> schoenen draag je?</li>
          </ul>
        </div>
      `
    },
    {
      title: "Deel 4: Het Grote Gevecht: WELKE vs. WAT VOOR 🥊",
      body: `
        <p>Dit is de allergrootste valkuil van dit hele onderwerp. Wat is nu het verschil tussen <em>Welke auto</em> en <em>Wat voor een auto</em>?</p>
        
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-gradient-to-r from-indigo-600 to-purple-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Vragend vnw</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Betekenis</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">De Groep</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Voorbeeld & Mogelijke Antwoorden</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-bold text-indigo-600">Welke</td>
                <td class="px-4 py-3 text-sm">Vraagt naar een <strong>specifieke keuze</strong> of <strong>aanwijzing</strong>.</td>
                <td class="px-4 py-3 text-sm"><strong>Gesloten</strong> (De opties liggen er al).</td>
                <td class="px-4 py-3 text-sm text-xs"><strong>Welke</strong> auto wil je? <br>➔ <em>Die rode daar.</em> / <em>De tweede.</em></td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30">
                <td class="px-4 py-3 text-sm font-bold text-purple-600">Wat voor (een)</td>
                <td class="px-4 py-3 text-sm">Vraagt naar het <strong>soort</strong>, de <strong>eigenschap</strong> of de <strong>aard</strong>.</td>
                <td class="px-4 py-3 text-sm"><strong>Open</strong> (Alles is mogelijk).</td>
                <td class="px-4 py-3 text-sm text-xs"><strong>Wat voor een</strong> auto wil je? <br>➔ <em>Een snelle, rode sportwagen.</em></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-indigo-700 dark:text-indigo-300 mb-2">💡 De Context-Test</h3>
          <p class="text-sm text-slate-700 dark:text-slate-300">Stel je staat in een kledingwinkel met 5 jurken aan de rekken.</p>
          <ul class="mt-2 space-y-2 text-sm text-slate-700 dark:text-slate-300">
            <li>✅ Vraag je: <em>"<strong>Welke</strong> jurk vind je het mooist?"</em> ➔ Je wijst er een aan (bijv. <em>De blauwe</em>).</li>
            <li>✅ Vraag je: <em>"<strong>Wat voor een</strong> jurk zoek je?"</em> ➔ Je beschrijft hem (bijv. <em>Een lange, zwarte jurk voor een feestje</em>).</li>
          </ul>
        </div>
      `
    },
    {
      title: "Deel 5: Voorzetsels + Vragen (Met wie vs. Waar...voor) 📐",
      body: `
        <p>Wat doe je als het werkwoord een <strong>voorzetsel</strong> vereist (zoals <em>wachten op, praten met, bang voor</em>)? Dan verandert de vraagvorm afhankelijk van of het om een persoon of een ding gaat.</p>

        <div class="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-emerald-700 dark:text-emerald-300 mb-2">🏆 De Voorzetsel PRO Regels</h3>
          <ul class="space-y-2 list-none pl-0 text-slate-700 dark:text-slate-300">
            <li>✅ <strong>PRO REGEL 7:</strong> Vraag naar een <strong>persoon</strong>? Gebruik: <strong>voorzetsel + WIE</strong>.</li>
            <li>✅ <strong>PRO REGEL 8:</strong> Vraag naar een <strong>ding</strong>? Gebruik: <strong>WAAR + voorzetsel</strong> (pronominaal bijwoord).</li>
          </ul>
        </div>

        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-teal-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Verwijst naar...</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Vraagvorm</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Voorbeeldzin</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold text-blue-600">Persoon</td>
                <td class="px-4 py-3 text-sm"><strong>voorzetsel + wie</strong></td>
                <td class="px-4 py-3 text-sm"><strong>Met wie</strong> ga je naar de bioscoop?</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold text-blue-600">Persoon</td>
                <td class="px-4 py-3 text-sm"><strong>op wie</strong></td>
                <td class="px-4 py-3 text-sm"><strong>Op wie</strong> wacht je?</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold text-purple-600">Ding / Concept</td>
                <td class="px-4 py-3 text-sm"><strong>waar + voorzetsel</strong></td>
                <td class="px-4 py-3 text-sm"><strong>Waar</strong> wacht je <strong>op</strong>?</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30">
                <td class="px-4 py-3 text-sm font-semibold text-purple-600">Ding / Concept</td>
                <td class="px-4 py-3 text-sm"><strong>waar + voorzetsel</strong></td>
                <td class="px-4 py-3 text-sm"><strong>Waar</strong> ben je <strong>bang voor</strong>?</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="bg-rose-50 dark:bg-rose-900/20 border-l-4 border-rose-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-rose-700 dark:text-rose-300 mb-2">🚨 PAS OP! DE 'VOOR WAT'-VALKUIL!</h3>
          <p class="text-sm text-slate-700 dark:text-slate-300 mb-2">Gebruik <strong>NOOIT</strong> <em>"Voor wat"</em> of <em>"Op wat"</em> als je naar een ding vraagt!</p>
          <ul class="space-y-1 text-sm text-slate-700 dark:text-slate-300">
            <li>❌ <em>Fout:</em> Op wat wacht je? / Voor wat ben je bang?</li>
            <li>✅ <em>Correct:</em> <strong>Waar</strong> wacht je <strong>op</strong>? / <strong>Waar</strong> ben je <strong>bang voor</strong>?</li>
            <li>💡 <em>Uitzondering:</em> Alleen in zeer formele, juridische taal of vaste spreekwoorden zoals <em>"Voor wat hoort wat"</em> mag 'voor wat', maar in 99% van de gesprekken is 'waar...voor' de enige correcte vorm.</li>
          </ul>
        </div>
      `
    }
  ],
  rulesTable: [
    {
      rule: "Wie vs. Wat",
      structure: "Persoon = WIE. Ding, dier, concept, beroep = WAT.",
      example: "Wie is dat? (mijn oom) / Wat doe je? (ik ben leraar)",
      usage: "Vraag je naar iemands identiteit? Gebruik 'wie'. Vraag je naar hun functie/beroep? Gebruik 'wat'."
    },
    {
      rule: "Welke vs. Welk",
      structure: "de-woord of meervoud = WELKE. het-woord (enkelvoud) = WELK.",
      example: "Welke auto? / Welk boek? / Welke huizen?",
      usage: "Gebruik dit alleen als je vraagt om een specifieke keuze uit een beperkte, aanwezige groep."
    },
    {
      rule: "Wat voor (een) - De 'EEN'-regel",
      structure: "Enkelvoud (telbaar) = wat voor een. Meervoud of niet-telbaar = wat voor (zonder 'een').",
      example: "Wat voor een auto? / Wat voor auto's? / Wat voor weer?",
      usage: "Dit is de meest gemaakte fout. Bij meervoud en stoffen (informatie, vlees, weer) valt de 'een' altijd weg."
    },
    {
      rule: "Welke vs. Wat voor",
      structure: "Welke = gesloten groep (specifieke aanwijzing). Wat voor = open groep (soort/eigenschap).",
      example: "Welke jurk? (deze of die?) / Wat voor een jurk? (een lange, zwarte)",
      usage: "Stel je de vraag: 'Kan de persoon wijzen naar het antwoord?' Zo ja, gebruik 'welke'."
    },
    {
      rule: "Voorzetselvragen",
      structure: "Persoon = voorzetsel + wie. Ding = waar + voorzetsel.",
      example: "Met wie praat je? / Waar praat je over?",
      usage: "Gebruik nooit 'op wat' of 'voor wat' in standaard Nederlands. Gebruik altijd 'waar...op' of 'waar...voor'."
    }
  ],
  callouts: [
    { type: "remember", label: "🏆 PRO REGEL 1 & 2", text: "Persoon = WIE. Ding/dier/beroep = WAT." },
    { type: "remember", label: "🏆 PRO REGEL 3 & 4", text: "de/meervoud = WELKE. het (enkelvoud) = WELK." },
    { type: "remember", label: "🏆 PRO REGEL 5 & 6", text: "Telbaar enkelvoud = wat voor EEN. Meervoud/stof = wat voor (GEEN 'een')." },
    { type: "remember", label: "⚠️ PAS OP 1", text: "Vraag je naar een beroep? Zeg 'Wat ben je?', niet 'Wie ben je?'." },
    { type: "remember", label: "⚠️ PAS OP 2", text: "Meervoud is altijd een de-woord. Dus altijd 'welke', nooit 'welk'." },
    { type: "remember", label: "⚠️ PAS OP 3", text: "Gebruik NOOIT 'op wat' of 'voor wat'. Gebruik altijd 'waar...op' of 'waar...voor'." }
  ],
  commonMistakes: [
    { incorrect: "Wie ben je van beroep?", correct: "Wat ben je van beroep?", explanation: "Als je naar iemands functie of beroep vraagt, gebruik je 'wat', niet 'wie'." },
    { incorrect: "Wat voor een boeken lees je?", correct: "Wat voor boeken lees je?", explanation: "Bij meervoud ('boeken') valt de 'een' altijd weg." },
    { incorrect: "Op wat wacht je?", correct: "Waar wacht je op?", explanation: "Bij dingen gebruik je 'waar' + voorzetsel, nooit 'voorzetsel + wat'." },
    { incorrect: "Welk auto's zijn te koop?", correct: "Welke auto's zijn te koop?", explanation: "Meervoud is altijd een de-woord, dus gebruik je altijd 'welke'." },
    { incorrect: "Wat voor een weer is het?", correct: "Wat voor weer is het?", explanation: "'Weer' is een niet-telbare stofnaam. Bij niet-telbare stoffen valt de 'een' weg." },
    { incorrect: "Welk informatie heb je nodig?", correct: "Welke informatie heb je nodig?", explanation: "'Informatie' is een de-woord (de informatie), dus het is 'welke', niet 'welk'." }
  ],
  review: [
    "✅ Persoon = WIE. Ding/dier/beroep = WAT.",
    "✅ de-woord/meervoud = WELKE. het-woord (enkelvoud) = WELK.",
    "✅ Telbaar enkelvoud = wat voor EEN.",
    "✅ Meervoud of niet-telbaar (stof) = wat voor (GEEN 'een').",
    "✅ Welke = specifieke keuze uit gesloten groep.",
    "✅ Wat voor = vraag naar soort/eigenschap uit open groep.",
    "✅ Voorzetsel + persoon = met wie, op wie.",
    "✅ Voorzetsel + ding = waar...voor, waar...op."
  ],
  qa: [
    {
      question: "Het 'Gesloten' vs 'Open' groep dilemma: Je bent op een feestje. Je ziet dat je vriendin de hele tijd naar één specifieke persoon aan de bar kijkt. 1. Welke vraag stel je als je wilt weten wie die persoon is (identiteit)? 2. Welke vraag stel je als je wilt weten wat voor persoon het is (karakter/eigenschappen)?",
      answer: "1. Wie is die persoon aan de bar? (Vraag naar identiteit, persoon ➔ wie). 2. Wat voor iemand is hij? of Wat voor een man is het? (Vraag naar eigenschappen, open groep ➔ wat voor). Let op: Je zou hier niet 'Welke man is het?' kunnen zeggen, tenzij er een rij van 5 mannen staat en je wilt weten welke van de vijf ze bedoelt."
    },
    {
      question: "De 'Een'-valkuil bij meervoud en stoffen: Een student schrijft de volgende zinnen in een opstel. Er staan in beide zinnen een grote fout in het gebruik van 'wat voor een'. Haal de fouten eruit en leg uit waarom ze fout zijn. 1. 'Wat voor een talen spreek je vloeiend?' 2. 'Wat voor een informatie heb je gekregen?'",
      answer: "1. 'Wat voor een talen' ➔ 'Wat voor talen'. 'Talen' is meervoud. Bij meervoud valt de 'een' altijd weg. 2. 'Wat voor een informatie' ➔ 'Wat voor informatie'. 'Informatie' is een niet-telbare stof (je kunt niet zeggen 'één informatie, twee informatieën'). Bij niet-telbare stoffen valt de 'een' altijd weg."
    },
    {
      question: "Voorzetsels en de 'Waar'-regel: Vul de juiste vragende vorm in (wie, wat, waar...voor, met wie) en leg uit waarom je die kiest. 1. '______ praat je de hele tijd aan de telefoon?' (Antwoord: Met mijn zus). 2. '______ heb je zo lang moeten wachten?' (Antwoord: Op de bus).",
      answer: "1. Met wie praat je...? Het antwoord ('mijn zus') is een persoon. Bij een persoon met een voorzetsel gebruik je 'voorzetsel + wie'. 2. Waar heb je zo lang op moeten wachten? Het antwoord ('de bus') is een ding. Bij een ding met een voorzetsel gebruik je 'waar + voorzetsel'. (Niet: 'Op wat')."
    },
    {
      question: "Welke vs Welk en de meervoudsvalkuil: Kies de juiste vorm (welke of welk) en leg uit waarom. 1. '___ (Welke/Welk) liedjes staan er op deze afspeellijst?' 2. '___ (Welke/Welk) huisnummer is het precies?' 3. '___ (Welke/Welk) informatie heb je nodig?'",
      answer: "1. Welke liedjes. 'Liedjes' is meervoud. Meervoud is altijd een de-woord, dus we gebruiken 'welke'. 2. Welk huisnummer. 'Huisnummer' is een het-woord in het enkelvoud. Dus we gebruiken 'welk'. 3. Welke informatie. Hoewel 'informatie' niet-telbaar is, behandelen we het in de grammatica als een de-woord (de informatie). Daarom gebruiken we 'welke', niet 'welk'."
    }
  ]
};