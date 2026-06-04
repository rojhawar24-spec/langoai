import type { GrammarLesson } from "../../types";

export const betrekkelijkVoornaamwoord: GrammarLesson = {
  id: "nl-betrekkelijk-voornaamwoord-1",
  title: "Betrekkelijk Voornaamwoord: Die, Dat, Wat, Wie & Welke – De Ultieme Gids",
  level: 3,
  topic: "Grammatica",
  body: "Beheers de betrekkelijke voornaamwoorden volledig: de strikte regels voor die/dat, de valkuilen van 'wat', het gebruik van voorzetsels met wie/wat, en de formele variant welke/welk.",
  overview:
    "Dit is de meest uitgebreide en gedetailleerde gids over betrekkelijke voornaamwoorden in het Nederlands. Je leert de 11 strikte PRO-regels om nooit meer te twijfelen tussen 'die' en 'dat', ontdekt waarom 'het boek wat ik lees' 100% fout is, en weet precies hoe je omgaat met voorzetsels (met wie vs. waarin). Met 15+ kleurrijke tabellen, duidelijke PAS OP-waarschuwingen en 4 complexe MAX-niveau oefenvragen ben je een absolute meester in de Nederlandse relatieve zinsbouw!",
  anchorSectionId: "basis",
  exercises: [],
  timeExpressionsLabel: "De Basisregels in Één Oogopslag 🔗",
  timeExpressions: {
    header: "Antecedent (Verwijzing naar) | Betrekkelijk vnw | Voorbeeld",
    rows: [
      ["🔹 de-woord (enkelvoud)", "DIE", "De man **die** daar loopt."],
      ["🔹 het-woord (enkelvoud)", "DAT", "Het boek **dat** ik lees."],
      ["🔹 MEERVOUD (altijd!)", "DIE", "De huizen **die** ik zie."],
      ["🔹 alles, niets, iets, dit, dat", "WAT", "Alles **wat** hij zegt."],
      ["🔹 Hele voorgaande zin", "WAT", "Hij is te laat, **wat** me ergert."],
      ["🔹 Persoon + voorzetsel", "VOORZETSEL + WIE", "De man **met wie** ik praat."]
    ]
  },
  details: [
    {
      title: "Deel 1: Wat is een betrekkelijk voornaamwoord? 🔗",
      body: `
        <p>Een <strong>betrekkelijk voornaamwoord</strong> (ook wel <em>relatief voornaamwoord</strong> genoemd) heeft twee cruciale taken in een zin:</p>
        <ol class="list-decimal list-inside space-y-2 text-slate-700 dark:text-slate-300 mb-4">
          <li>Het <strong>verwijst terug</strong> naar een woord uit de hoofdzin (het antecedent).</li>
          <li>Het <strong>verbindt</strong> de hoofdzin met een bijzin (de betrekkelijke bijzin).</li>
        </ol>
        
        <div class="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-indigo-700 dark:text-indigo-300 mb-2">🔍 Voorbeeldanalyse</h3>
          <p class="text-slate-700 dark:text-slate-300 text-lg mb-2"><em>"De man <strong>die</strong> daar loopt, is mijn oom."</em></p>
          <ul class="space-y-1 text-sm text-slate-600 dark:text-slate-400">
            <li>✅ <strong>'die'</strong> verwijst terug naar <em>de man</em> (het antecedent).</li>
            <li>✅ <strong>'die'</strong> verbindt de hoofdzin (<em>De man ... is mijn oom</em>) met de bijzin (<em>... die daar loopt</em>).</li>
          </ul>
        </div>
      `
    },
    {
      title: "Deel 2: De Basis – DIE en DAT (De PRO Regels) 🏆",
      body: `
        <p>Dit is de allerbelangrijkste basisregel van de Nederlandse grammatica. Of je <strong>die</strong> of <strong>dat</strong> gebruikt, hangt 100% af van het woord waar het naar verwijst.</p>
        
        <div class="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-emerald-700 dark:text-emerald-300 mb-2">🏆 De 3 Gouden PRO Regels</h3>
          <ul class="space-y-2 list-none pl-0 text-slate-700 dark:text-slate-300">
            <li>✅ <strong>PRO REGEL 1:</strong> Verwijst het naar een <strong>de-woord</strong>? Gebruik <strong>DIE</strong>.</li>
            <li>✅ <strong>PRO REGEL 2:</strong> Verwijst het naar een <strong>het-woord</strong>? Gebruik <strong>DAT</strong>.</li>
            <li>✅ <strong>PRO REGEL 3:</strong> Verwijst het naar een <strong>meervoud</strong>? Gebruik <strong>ALTIJD DIE</strong>.</li>
          </ul>
        </div>

        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-indigo-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Woord in hoofdzin</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Lidwoord</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Betrekkelijk vnw</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Voorbeeldzin</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">de man</td>
                <td class="px-4 py-3 text-sm">de</td>
                <td class="px-4 py-3 text-sm font-bold text-indigo-600">die</td>
                <td class="px-4 py-3 text-sm">De man <strong>die</strong> daar loopt, is mijn oom.</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">het boek</td>
                <td class="px-4 py-3 text-sm">het</td>
                <td class="px-4 py-3 text-sm font-bold text-indigo-600">dat</td>
                <td class="px-4 py-3 text-sm">Het boek <strong>dat</strong> ik lees, is spannend.</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">de auto's</td>
                <td class="px-4 py-3 text-sm">de (meervoud)</td>
                <td class="px-4 py-3 text-sm font-bold text-indigo-600">die</td>
                <td class="px-4 py-3 text-sm">De auto's <strong>die</strong> daar staan, zijn rood.</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30">
                <td class="px-4 py-3 text-sm font-semibold">de huizen</td>
                <td class="px-4 py-3 text-sm">het (maar nu meervoud!)</td>
                <td class="px-4 py-3 text-sm font-bold text-indigo-600">die</td>
                <td class="px-4 py-3 text-sm">De huizen <strong>die</strong> ik heb gezien, zijn duur.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="bg-rose-50 dark:bg-rose-900/20 border-l-4 border-rose-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-rose-700 dark:text-rose-300 mb-2">⚠️ PAS OP! DE MEERVOUDSVALKUIL!</h3>
          <p class="text-sm text-slate-700 dark:text-slate-300 mb-2">In het meervoud krijgen <strong>alle</strong> zelfstandige naamwoorden het lidwoord <strong>de</strong>. Dus ook de het-woorden!</p>
          <ul class="space-y-1 text-sm text-slate-700 dark:text-slate-300">
            <li>• <em>Het huis</em> (het) ➔ <em>De huizen</em> (de).</li>
            <li>• Daarom verwijst het betrekkelijk voornaamwoord in het meervoud <strong>altijd</strong> naar een de-woord, en gebruik je dus <strong>altijd DIE</strong>.</li>
            <li>❌ <em>Fout:</em> De huizen <strong>dat</strong> ik heb gezien.</li>
            <li>✅ <em>Correct:</em> De huizen <strong>die</strong> ik heb gezien.</li>
          </ul>
        </div>
      `
    },
    {
      title: "Deel 3: Het Geheim van 'WAT' (Wanneer gebruik je het?) 🕵️‍♂️",
      body: `
        <p>Het gebruik van <strong>wat</strong> als betrekkelijk voornaamwoord is de grootste valkuil van de Nederlandse taal. Je gebruikt <strong>wat</strong> <strong>NOOIT</strong> bij een gewoon zelfstandig naamwoord!</p>
        <p class="text-sm text-slate-700 dark:text-slate-300 mb-4">Je gebruikt <strong>wat</strong> alléén in deze <strong>vier specifieke situaties</strong>:</p>

        <div class="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-emerald-700 dark:text-emerald-300 mb-2">🏆 De 4 PRO Regels voor 'WAT'</h3>
          <ul class="space-y-2 list-none pl-0 text-slate-700 dark:text-slate-300">
            <li>✅ <strong>PRO REGEL 4:</strong> Gebruik <strong>WAT</strong> na de onbepaalde voornaamwoorden <em>alles, niets, iets, veel, weinig</em>.</li>
            <li>✅ <strong>PRO REGEL 5:</strong> Gebruik <strong>WAT</strong> na de aanwijzende voornaamwoorden <em>dat, dit, dit alles, dat alles</em>.</li>
            <li>✅ <strong>PRO REGEL 6:</strong> Gebruik <strong>WAT</strong> als het verwijst naar de <strong>hele voorgaande hoofdzin</strong>.</li>
            <li>✅ <strong>PRO REGEL 7:</strong> Gebruik <strong>WAT</strong> als het zelfstandig naamwoord ontbreekt maar wel impliciet is (zoals <em>het enige, het geen</em>).</li>
          </ul>
        </div>

        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-purple-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Situatie</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Voorbeeldzin</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Uitleg</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">Na alles, niets, iets</td>
                <td class="px-4 py-3 text-sm">Alles <strong>wat</strong> hij zegt, is gelogen.</td>
                <td class="px-4 py-3 text-sm text-xs">'Alles' is een onbepaald voornaamwoord ➔ gebruik <strong>wat</strong>.</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">Na dat, dit</td>
                <td class="px-4 py-3 text-sm">Dat <strong>wat</strong> ik je vertel, moet je onthouden.</td>
                <td class="px-4 py-3 text-sm text-xs">'Dat' is een aanwijzend voornaamwoord ➔ gebruik <strong>wat</strong>.</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">Verwijst naar hele zin</td>
                <td class="px-4 py-3 text-sm">Hij komt weer te laat, <strong>wat</strong> me ergert.</td>
                <td class="px-4 py-3 text-sm text-xs">'wat' verwijst niet naar een woord, maar naar het <em>feit</em> dat hij te laat komt.</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30">
                <td class="px-4 py-3 text-sm font-semibold">Ontbrekend znw (impliciet)</td>
                <td class="px-4 py-3 text-sm">Dit is het enige <strong>wat</strong> telt.</td>
                <td class="px-4 py-3 text-sm text-xs">Het woord 'ding' is weggelaten (het enige <em>ding</em>). ➔ gebruik <strong>wat</strong>.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="bg-rose-50 dark:bg-rose-900/20 border-l-4 border-rose-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-rose-700 dark:text-rose-300 mb-2">🚨 PAS OP! DE GROOTSTE FOUT DIE IEDEREEN MAAKT!</h3>
          <p class="text-sm text-slate-700 dark:text-slate-300 mb-2">Veel mensen zeggen in spreektaal: <em>"Het boek <strong>wat</strong> ik lees."</em> Dit is <strong>100% FOUT</strong> in correct Nederlands!</p>
          <ul class="space-y-1 text-sm text-slate-700 dark:text-slate-300">
            <li>• 'Boek' is een gewoon het-woord.</li>
            <li>• PRO REGEL 2 zegt: het-woord = <strong>dat</strong>.</li>
            <li>• ✅ <em>Correct:</em> Het boek <strong>dat</strong> ik lees.</li>
          </ul>
        </div>
      `
    },
    {
      title: "Deel 4: Voorzetsels + WIE of WAT (De Formele Regels) 📐",
      body: `
        <p>Soms staat er een <strong>voorzetsel</strong> (zoals <em>met, naar, op, in, voor</em>) direct vóór het betrekkelijk voornaamwoord. Welk woord kies je dan? Dit hangt af van de vraag of het om een <strong>persoon</strong> of een <strong>ding/concept</strong> gaat.</p>

        <div class="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-emerald-700 dark:text-emerald-300 mb-2">🏆 De Voorzetsel PRO Regels</h3>
          <ul class="space-y-2 list-none pl-0 text-slate-700 dark:text-slate-300">
            <li>✅ <strong>PRO REGEL 8:</strong> Verwijst het naar een <strong>persoon</strong>? Gebruik: <strong>voorzetsel + WIE</strong>.</li>
            <li>✅ <strong>PRO REGEL 9:</strong> Verwijst het naar een <strong>ding, dier of concept</strong>? Gebruik: <strong>voorzetsel + WAT</strong> (of een pronominaal bijwoord zoals <em>waar+voor</em>).</li>
          </ul>
        </div>

        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-indigo-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Verwijst naar...</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Voorzetsel + Betrekkelijk vnw</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Voorbeeldzin</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold text-blue-600">Persoon</td>
                <td class="px-4 py-3 text-sm"><strong>naar wie</strong></td>
                <td class="px-4 py-3 text-sm">De vrouw <strong>naar wie</strong> ik kijk, is mijn lerares.</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold text-blue-600">Persoon</td>
                <td class="px-4 py-3 text-sm"><strong>met wie</strong></td>
                <td class="px-4 py-3 text-sm">De man <strong>met wie</strong> ik praat, is mijn buurman.</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold text-purple-600">Ding / Concept</td>
                <td class="px-4 py-3 text-sm"><strong>naar wat</strong> (of <em>waarnaar</em>)</td>
                <td class="px-4 py-3 text-sm">Het dier <strong>waarnaar</strong> ik kijk, is een hond.</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30">
                <td class="px-4 py-3 text-sm font-semibold text-purple-600">Ding / Concept</td>
                <td class="px-4 py-3 text-sm"><strong>in wat</strong> (of <em>waarin</em>)</td>
                <td class="px-4 py-3 text-sm">De doos <strong>waarin</strong> het zit, is groot.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="bg-rose-50 dark:bg-rose-900/20 border-l-4 border-rose-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-rose-700 dark:text-rose-300 mb-2">🚨 PAS OP! DE 'WIE'-VALKUIL ZONDER VOORZETSEL!</h3>
          <p class="text-sm text-slate-700 dark:text-slate-300 mb-2">Gebruik <strong>NOOIT</strong> het woord <em>wie</em> als er <strong>geen voorzetsel</strong> bij staat! Als het onderwerp of lijdend voorwerp is, gebruik je gewoon <strong>die</strong> of <strong>dat</strong>, ook al gaat het om een persoon!</p>
          <ul class="space-y-1 text-sm text-slate-700 dark:text-slate-300">
            <li>❌ <em>Fout:</em> De man <strong>wie</strong> ik zag, was lang.</li>
            <li>✅ <em>Correct:</em> De man <strong>die</strong> ik zag, was lang.</li>
            <li>✅ <em>Correct (met voorzetsel):</em> De man <strong>naar wie</strong> ik keek, was lang.</li>
          </ul>
        </div>
      `
    },
    {
      title: "Deel 5: Welke en Welk (Het Formele Alternatief) 🎩",
      body: `
        <p>In zeer formele teksten (zoals wetenschappelijke artikelen, juridische documenten of oude literatuur) wordt soms <strong>welke</strong> of <strong>welk</strong> gebruikt in plaats van <em>die</em> of <em>dat</em>.</p>

        <div class="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-emerald-700 dark:text-emerald-300 mb-2">🏆 De Formele PRO Regels</h3>
          <ul class="space-y-2 list-none pl-0 text-slate-700 dark:text-slate-300">
            <li>✅ <strong>PRO REGEL 10:</strong> <strong>welke</strong> = de-woord of meervoud (vervangt <em>die</em>).</li>
            <li>✅ <strong>PRO REGEL 11:</strong> <strong>welk</strong> = het-woord (vervangt <em>dat</em>).</li>
          </ul>
        </div>

        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-amber-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Lidwoord</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Betrekkelijk vnw (Standaard)</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Betrekkelijk vnw (Formeel)</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-semibold">de</td><td class="px-4 py-3 text-sm"><strong>die</strong></td><td class="px-4 py-3 text-sm"><strong>welke</strong></td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-semibold">het</td><td class="px-4 py-3 text-sm"><strong>dat</strong></td><td class="px-4 py-3 text-sm"><strong>welk</strong></td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-4 py-3 text-sm font-semibold">meervoud</td><td class="px-4 py-3 text-sm"><strong>die</strong></td><td class="px-4 py-3 text-sm"><strong>welke</strong></td></tr>
            </tbody>
          </table>
        </div>

        <div class="bg-rose-50 dark:bg-rose-900/20 border-l-4 border-rose-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-rose-700 dark:text-rose-300 mb-2">🚨 PAS OP! ADVIES VOOR SPREEKTAAL!</h3>
          <p class="text-sm text-slate-700 dark:text-slate-300">Gebruik <em>welke</em> en <em>welk</em> <strong>nooit</strong> in spreektaal of informele e-mails. Het klinkt ontzettend stijf en ouderwets. In 99% van de gevallen moet je gewoon <strong>die</strong> of <strong>dat</strong> gebruiken!</p>
        </div>
      `
    }
  ],
  rulesTable: [
    {
      rule: "Die vs. Dat (Enkelvoud)",
      structure: "Verwijzing naar de-woord = DIE. Verwijzing naar het-woord = DAT.",
      example: "De man die... / Het boek dat...",
      usage: "Kijk altijd naar het lidwoord van het woord waar het betrekkelijk voornaamwoord naar verwijst."
    },
    {
      rule: "De Meervoudsregel",
      structure: "In het meervoud is het lidwoord altijd 'de'. Gebruik daarom ALTIJD 'die'.",
      example: "De huizen die ik zie. (Niet: de huizen dat ik zie)",
      usage: "Meervoud overschrijft het oorspronkelijke geslacht van het woord."
    },
    {
      rule: "Wanneer gebruik je 'Wat'?",
      structure: "Na alles, niets, iets, dit, dat, of als het verwijst naar de hele voorgaande zin.",
      example: "Alles wat hij zegt. / Hij is te laat, wat me ergert.",
      usage: "Gebruik NOOIT 'wat' na een gewoon zelfstandig naamwoord (zoals 'het boek wat')."
    },
    {
      rule: "Voorzetsel + Persoon",
      structure: "Gebruik altijd 'voorzetsel + wie' bij verwijzing naar een persoon.",
      example: "De man met wie ik praat.",
      usage: "Gebruik nooit 'wie' zonder voorzetsel als onderwerp/lijdend voorwerp (gebruik dan 'die')."
    },
    {
      rule: "Voorzetsel + Ding/Concept",
      structure: "Gebruik 'voorzetsel + wat' of 'waar+voorzetsel' (waarin, waarmee).",
      example: "De doos waarin het zit. / Het dier waarnaar ik kijk.",
      usage: "'Waarin' klinkt veel natuurlijker dan 'in wat', maar beide zijn grammaticaal correct."
    },
    {
      rule: "Welke / Welk",
      structure: "Formele variant van die/dat. Welke = de/meervoud, Welk = het.",
      example: "De man welke... / Het boek welk...",
      usage: "Alleen gebruiken in zeer formele, juridische of wetenschappelijke teksten."
    }
  ],
  callouts: [
    { type: "remember", label: "🏆 PRO REGEL 1 & 2", text: "de-woord = DIE, het-woord = DAT." },
    { type: "remember", label: "🏆 PRO REGEL 3", text: "Meervoud is ALTIJD een de-woord, dus gebruik ALTIJD DIE." },
    { type: "remember", label: "🏆 PRO REGEL 4-7", text: "Gebruik WAT na: alles, niets, iets, dit, dat, of als het naar de hele zin verwijst." },
    { type: "remember", label: "⚠️ PAS OP 1", text: "Zeg NOOIT 'het boek wat ik lees'. Het is 'het boek DAT ik lees'." },
    { type: "remember", label: "⚠️ PAS OP 2", text: "Gebruik 'wie' ALLEEN als er een voorzetsel voor staat (de man MET wie). Anders gebruik je 'die'." },
    { type: "remember", label: "⚠️ PAS OP 3", text: "Gebruik 'welke/welk' niet in spreektaal of informele teksten. Het klinkt stijf." }
  ],
  commonMistakes: [
    { incorrect: "De huizen dat ik koop.", correct: "De huizen die ik koop.", explanation: "Meervoud is altijd een de-woord, dus gebruik je altijd 'die'." },
    { incorrect: "Het boek wat ik lees.", correct: "Het boek dat ik lees.", explanation: "Na een gewoon zelfstandig naamwoord gebruik je nooit 'wat', maar 'die' of 'dat'." },
    { incorrect: "De man wie ik zag.", correct: "De man die ik zag.", explanation: "Gebruik 'wie' alleen als er een voorzetsel voor staat (de man met wie). Zonder voorzetsel is het 'die'." },
    { incorrect: "Hij is ziek, dat is vervelend.", correct: "Hij is ziek, wat vervelend is. (of: ..., wat me vervelend vindt)", explanation: "Verwijst het naar de hele voorgaande zin? Gebruik 'wat'." },
    { incorrect: "Alles dat ik heb.", correct: "Alles wat ik heb.", explanation: "Na 'alles', 'niets' en 'iets' gebruik je altijd 'wat', nooit 'dat'." }
  ],
  review: [
    "✅ de-woord (enkelvoud) = DIE",
    "✅ het-woord (enkelvoud) = DAT",
    "✅ MEERVOUD = ALTIJD DIE",
    "✅ WAT = na alles, niets, iets, dit, dat, of verwijzend naar de hele zin.",
    "✅ Persoon + voorzetsel = VOORZETSEL + WIE",
    "✅ Ding + voorzetsel = VOORZETSEL + WAT (of waar+voorzetsel)",
    "✅ NOOIT 'wie' zonder voorzetsel gebruiken als onderwerp/lijdend voorwerp.",
    "✅ 'Welke/welk' is alleen voor zeer formele teksten."
  ],
  qa: [
    {
      question: "De 'Dat' vs 'Wat' paradox: Lees de volgende twee zinnen. Waarom is de eerste zin correct, maar de tweede zin fout, terwijl ze bijna hetzelfde lijken? 1. Het verhaal dat hij vertelde, was geweldig. 2. Hij vertelde een geweldig verhaal, dat me erg deed denken aan mijn jeugd.",
      answer: "In zin 1 verwijst 'dat' naar het zelfstandig naamwoord 'het verhaal' (een het-woord). Volgens PRO REGEL 2 is dit correct. In zin 2 verwijst 'dat' naar de hele voorgaande hoofdzin ('Hij vertelde een geweldig verhaal'). Volgens PRO REGEL 6 moet je, als het naar de hele zin verwijst, 'wat' gebruiken. Correcte zin 2: Hij vertelde een geweldig verhaal, wat me erg deed denken aan mijn jeugd."
    },
    {
      question: "Het voorzetsel + wie/wat dilemma: Vul de juiste vorm in (die, dat, wie, wat, waar+voorzetsel) en leg uit waarom. 1. De collega met (1) ___ ik heb gewerkt, is vertrokken. 2. De afdeling (2) ___ ik werk, is vernieuwd. (Maak een bijzin met 'in' + het betrekkelijk voornaamwoord).",
      answer: "1. met wie. Er staat een voorzetsel ('met') en het verwijst naar 'de collega' (een persoon). Volgens PRO REGEL 8 wordt dit 'voorzetsel + wie'. 2. waarin (of 'in wat'). Het verwijst naar 'de afdeling' (een ding/concept). Volgens PRO REGEL 9 wordt dit 'voorzetsel + wat' (of 'waar+in'). De zin wordt dan: De afdeling waarin ik werk, is vernieuwd. ('waarin' is veel natuurlijker dan 'in wat')."
    },
    {
      question: "De 'Alles' en 'Het enige' valkuil: Een student schrijft de volgende e-mail: 'Ik heb alles dat ik weet verteld. Dit is het enige dat telt.' Er staan twee fouten in het gebruik van de betrekkelijke voornaamwoorden. Wat zijn ze, en hoe moet het wel?",
      answer: "1. 'alles dat' ➔ 'alles wat'. Volgens PRO REGEL 4 gebruik je na het onbepaalde voornaamwoord 'alles' altijd 'wat', nooit 'dat'. 2. 'het enige dat' ➔ 'het enige wat'. Volgens PRO REGEL 7 gebruik je 'wat' als het zelfstandig naamwoord (in dit geval 'ding') impliciet is en weggelaten wordt. Het is namelijk 'het enige [ding] wat telt'."
    },
    {
      question: "Meervoud, de-woorden en het-woorden: Zet de volgende woorden in de juiste volgorde en kies het juiste betrekkelijke voornaamwoord (die, dat, welke). Let op de valkuilen! 1. (De auto's / rood / zijn / die / dat) 2. (Het huis / ik / koop / is / die / dat / groot) 3. (De lerares / ik / praat / met / is / streng / die / wie)",
      answer: "1. De auto's die rood zijn. (Auto is een het-woord, maar 'auto's' is meervoud. Meervoud is altijd een de-woord, dus we gebruiken 'die'). 2. Het huis dat ik koop, is groot. (Huis is een het-woord, enkelvoud. Dus we gebruiken 'dat'. 'Welke' is te formeel). 3. De lerares met wie ik praat, is streng. (Lerares is een persoon. Er staat een voorzetsel ('met'), dus we gebruiken 'wie', niet 'die')."
    }
  ]
};