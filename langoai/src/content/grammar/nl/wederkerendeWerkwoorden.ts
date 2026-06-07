import type { GrammarLesson } from "../../types";

export const wederkerendeWerkwoorden: GrammarLesson = {
  id: "nl-wederkerende-werkwoorden-1",
  title: "Wederkerende Werkwoorden: Zich Wassen & Zich Verslapen – De Ultieme Masterclass",
  level: 3,
  topic: "Werkwoorden & Grammatica",
  body: "Beheers wederkerende werkwoorden volledig: de spiegelregel, verplichte vs. optionele vormen, vaste voorzetsels, de VVT-keuze (hebben/zijn), en de beruchte valkuilen.",
  overview:
    "Dit is de meest diepgaande, visueel schitterende en waarschuwing-rijke gids over Wederkerende Werkwoorden in het Nederlands. Je leert het verschil tussen 'echt' en 'onecht' wederkerend, beheerst de lastige vaste voorzetsels (zoals 'zich herinneren' ZONDER voorzetsel!), en weet precies wanneer je 'hebben' of 'zijn' moet gebruiken in de VVT. Met prachtige tabellen, strikte PRO-regels, een overvloed aan PAS OP-waarschuwingen en 4 complexe oefenvragen spreek je voortaan als een ware moedertaalspreker!",
  anchorSectionId: "wat-is-wederkerend",
  exercises: [],
  timeExpressionsLabel: "De Wederkerende Voornaamwoorden in Één Oogopslag 🪞",
  timeExpressions: {
    header: "Persoon | Wederkerend Voornaamwoord | Voorbeeldzin",
    rows: [
      ["Ik", "**me** (mij)", "Ik was **me**."],
      ["Jij / U", "**je** (jou) / **zich** (u)", "Jij wast **je**. / U wast **zich**."],
      ["Hij / Zij / Het", "**zich**", "Hij wast **zich**."],
      ["Wij", "**ons**", "Wij wassen **ons**."],
      ["Jullie", "**je**", "Jullie wassen **je**."],
      ["Zij (meervoud)", "**zich**", "Zij wassen **zich**."]
    ]
  },
  details: [
    {
      title: "Deel 1: Wat is een Wederkerend Werkwoord? 🪞",
      body: `
        <p>Een <strong>wederkerend werkwoord</strong> (in het Latijn: <em>verbum reflexivum</em>) is een werkwoord waarbij de actie <strong>terugkaatst op het onderwerp</strong>. Het onderwerp doet de actie, en het onderwerp ondergaat de actie ook.</p>
        <p class="text-sm text-slate-700 dark:text-slate-300 mb-4">Je kunt het zien als een spiegel: de actie gaat van het onderwerp naar het onderwerp zelf.</p>
        
        <div class="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-5 border border-slate-200 dark:border-slate-700 my-4 shadow-sm">
          <ul class="space-y-3 text-sm text-slate-700 dark:text-slate-300">
            <li class="flex items-start gap-3">
              <span class="text-rose-500 font-bold">❌ Niet wederkerend:</span>
              <span><em>Ik was.</em> ➔ Ik was de auto. (De actie gaat naar de auto).</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="text-emerald-500 font-bold">✅ Wederkerend:</span>
              <span><em>Ik was <strong>me</strong>.</em> ➔ Ik maak mezelf schoon. (De actie kaatst terug naar mij).</span>
            </li>
          </ul>
        </div>

        <div class="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-emerald-700 dark:text-emerald-300 mb-2">🏆 PRO REGEL 1</h3>
          <p class="text-slate-700 dark:text-slate-300">Een wederkerend werkwoord herken je <strong>ALTIJD</strong> aan het <strong>wederkerend voornaamwoord</strong> (<em>me, je, zich, ons, jullie, zich</em>) dat direct na de persoonsvorm staat.</p>
        </div>
      `
    },
    {
      title: "Deel 2: De Wederkerende Voornaamwoorden 🧩",
      body: `
        <p>Je moet de wederkerende voornaamwoorden uit je hoofd kennen. Ze veranderen per persoon, net als bezittelijke voornaamwoorden.</p>
        
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-gradient-to-r from-indigo-600 to-purple-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Persoon</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Wederkerend Voornaamwoord</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Voorbeeldzin</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-semibold">Ik</td><td class="px-4 py-3 text-sm font-bold text-indigo-600">me</td><td class="px-4 py-3 text-sm">Ik was <strong>me</strong>.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-semibold">Jij / U</td><td class="px-4 py-3 text-sm font-bold text-indigo-600">je / zich</td><td class="px-4 py-3 text-sm">Jij wast <strong>je</strong>. / U wast <strong>zich</strong>.</td></tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-semibold">Hij / Zij / Het</td><td class="px-4 py-3 text-sm font-bold text-indigo-600">zich</td><td class="px-4 py-3 text-sm">Hij wast <strong>zich</strong>.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-semibold">Wij</td><td class="px-4 py-3 text-sm font-bold text-indigo-600">ons</td><td class="px-4 py-3 text-sm">Wij wassen <strong>ons</strong>.</td></tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-semibold">Jullie</td><td class="px-4 py-3 text-sm font-bold text-indigo-600">je</td><td class="px-4 py-3 text-sm">Jullie wassen <strong>je</strong>.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-4 py-3 text-sm font-semibold">Zij (mv)</td><td class="px-4 py-3 text-sm font-bold text-indigo-600">zich</td><td class="px-4 py-3 text-sm">Zij wassen <strong>zich</strong>.</td></tr>
            </tbody>
          </table>
        </div>

        <div class="bg-rose-50 dark:bg-rose-900/20 border-l-4 border-rose-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-rose-700 dark:text-rose-300 mb-2">🚨 PAS OP! DE 'JE' vs 'ZICH' VALKUIL!</h3>
          <p class="text-sm text-slate-700 dark:text-slate-300 mb-2">Bij <em>hij/zij/het</em> en <em>zij (meervoud)</em> gebruik je <strong>ALTIJD 'zich'</strong>. Bij <em>jij</em> en <em>jullie</em> gebruik je <strong>altijd 'je'</strong> (nooit 'jij' of 'jullie' als wederkerend voornaamwoord!).</p>
          <ul class="space-y-1 text-sm text-slate-700 dark:text-slate-300">
            <li>❌ <em>Fout:</em> Jij wast <strong>jij</strong>. / Jullie wassen <strong>jullie</strong>.</li>
            <li>✅ <em>Correct:</em> Jij wast <strong>je</strong>. / Jullie wassen <strong>je</strong>.</li>
          </ul>
        </div>
      `
    },
    {
      title: "Deel 3: Verplicht Wederkerend (Echt Wederkerend) 🔒",
      body: `
        <p>Dit zijn de werkwoorden waarbij het wederkerend voornaamwoord <strong>100% verplicht</strong> is. Als je het voornaamwoord weglaat, verandert de betekenis van het werkwoord compleet, of wordt de zin ongrammaticaal.</p>
        
        <div class="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-emerald-700 dark:text-emerald-300 mb-2">🏆 PRO REGEL 2</h3>
          <p class="text-slate-700 dark:text-slate-300">Bij verplicht wederkerende werkwoorden <strong>MOET</strong> het wederkerend voornaamwoord erbij staan. Zonder dat voornaamwoord betekent het werkwoord iets heel anders!</p>
        </div>

        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-gradient-to-r from-emerald-600 to-teal-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Met 'zich' (Wederkerend)</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Betekenis</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Zonder 'zich'</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Betekenis (Compleet anders!)</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">zich wassen</td>
                <td class="px-4 py-3 text-sm text-xs">Jezelf schoonmaken (douche/bad)</td>
                <td class="px-4 py-3 text-sm font-semibold text-rose-600">wassen</td>
                <td class="px-4 py-3 text-sm text-xs">De afwas doen, of kleding wassen.</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">zich vergissen</td>
                <td class="px-4 py-3 text-sm text-xs">Een fout maken</td>
                <td class="px-4 py-3 text-sm font-semibold text-rose-600">vergissen</td>
                <td class="px-4 py-3 text-sm text-xs">Bestaat niet als los werkwoord.</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">zich schamen</td>
                <td class="px-4 py-3 text-sm text-xs">Schaamte voelen</td>
                <td class="px-4 py-3 text-sm font-semibold text-rose-600">schamen</td>
                <td class="px-4 py-3 text-sm text-xs">Bestaat niet als los werkwoord.</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">zich herinneren</td>
                <td class="px-4 py-3 text-sm text-xs">Iets in je geheugen hebben</td>
                <td class="px-4 py-3 text-sm font-semibold text-rose-600">herinneren</td>
                <td class="px-4 py-3 text-sm text-xs">Iemand anders doen denken aan iets (<em>Dat herinnert mij aan...</em>).</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50">
                <td class="px-4 py-3 text-sm font-semibold">zich aanstellen</td>
                <td class="px-4 py-3 text-sm text-xs">Zeuren, overdreven reageren</td>
                <td class="px-4 py-3 text-sm font-semibold text-rose-600">aanstellen</td>
                <td class="px-4 py-3 text-sm text-xs">Iemand een functie geven (<em>Hij is aangesteld als baas</em>).</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="bg-rose-50 dark:bg-rose-900/20 border-l-4 border-rose-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-rose-700 dark:text-rose-300 mb-2">🚨 PAS OP! DE 'WASSEN' VALKUIL!</h3>
          <p class="text-sm text-slate-700 dark:text-slate-300">Dit is de allergrootste fout bij cursisten!</p>
          <ul class="space-y-1 text-sm text-slate-700 dark:text-slate-300 mt-2">
            <li>❌ <em>Fout:</em> <em>Ik was om 8 uur.</em> (Dit betekent: Ik doe de afwas om 8 uur, of ik was kleding).</li>
            <li>✅ <em>Correct:</em> <em>Ik was <strong>me</strong> om 8 uur.</em> (Ik neem een douche of bad).</li>
          </ul>
        </div>
      `
    },
    {
      title: "Deel 4: Optioneel Wederkerend (Onecht Wederkerend) 🔓",
      body: `
        <p>Bij sommige werkwoorden is het wederkerend voornaamwoord <strong>niet strikt nodig</strong>. De betekenis verandert niet of nauwelijks als je het voornaamwoord weglaat. Het voornaamwoord wordt hier gebruikt voor <strong>nadruk, stijl, of omdat het gewoner klinkt</strong> in de spreektaal.</p>
        
        <div class="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-indigo-700 dark:text-indigo-300 mb-2">🏆 PRO REGEL 3</h3>
          <p class="text-slate-700 dark:text-slate-300">Bij optioneel wederkerende werkwoorden <strong>MAG</strong> het voornaamwoord erbij staan, maar het <strong>MOET</strong> niet. De zin blijft grammaticaal correct zonder het voornaamwoord.</p>
        </div>

        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-gradient-to-r from-amber-600 to-orange-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Met 'zich' (Vaak gebruikt)</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Zonder 'zich' (Ook correct)</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Uitleg</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">zich verslapen</td>
                <td class="px-4 py-3 text-sm">verslapen</td>
                <td class="px-4 py-3 text-sm text-xs">Beide betekenen: te lang slapen. Maar 'zich verslapen' is veel gebruikelijker.</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">zich omdraaien</td>
                <td class="px-4 py-3 text-sm">omdraaien</td>
                <td class="px-4 py-3 text-sm text-xs">Ik draai me om = Ik draai om. Betekenis blijft exact hetzelfde.</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">zich voelen</td>
                <td class="px-4 py-3 text-sm">voelen</td>
                <td class="px-4 py-3 text-sm text-xs">Ik voel me ziek = Ik voel ziek. (Maar 'Ik voel me ziek' is veel natuurlijker).</td>
              </tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      title: "Deel 5: Vaste Voorzetsels bij Wederkerende Werkwoorden 🔗",
      body: `
        <p>Veel wederkerende werkwoorden hebben een <strong>vast voorzetsel</strong>. Dit zijn dezelfde regels als bij gewone vaste voorzetselcombinaties, maar dan met 'zich' erbij!</p>
        
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-gradient-to-r from-blue-600 to-cyan-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Wederkerend ww + VZ</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Betekenis</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Voorbeeldzin</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">zich verheugen op</td>
                <td class="px-4 py-3 text-sm text-xs">Blij zijn omdat iets gaat komen</td>
                <td class="px-4 py-3 text-sm">Ik verheug <strong>me op</strong> de vakantie.</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">zich vergissen in</td>
                <td class="px-4 py-3 text-sm text-xs">Een fout maken over iemand/iets</td>
                <td class="px-4 py-3 text-sm">Ik heb <strong>me</strong> in hem <strong>vergist</strong>.</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">zich schamen voor</td>
                <td class="px-4 py-3 text-sm text-xs">Schaamte voelen over iets</td>
                <td class="px-4 py-3 text-sm">Hij schaamt <strong>zich voor</strong> zijn fout.</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30">
                <td class="px-4 py-3 text-sm font-semibold text-rose-600">zich herinneren</td>
                <td class="px-4 py-3 text-sm text-xs">(GEEN voorzetsel!)</td>
                <td class="px-4 py-3 text-sm">Ik <strong>herinner me</strong> die dag. (Niet: <em>herinner aan</em>).</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="bg-rose-50 dark:bg-rose-900/20 border-l-4 border-rose-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-rose-700 dark:text-rose-300 mb-2">🚨 PAS OP! DE 'HERINNEREN' VALKUIL!</h3>
          <p class="text-sm text-slate-700 dark:text-slate-300 mb-2">In het Engels zeg je <em>remember</em> (geen voorzetsel) of <em>think of</em> (met voorzetsel). In het Nederlands is <em>zich herinneren</em> <strong>zonder voorzetsel</strong>!</p>
          <ul class="space-y-1 text-sm text-slate-700 dark:text-slate-300">
            <li>❌ <em>Fout:</em> Ik herinner me <strong>aan</strong> die dag.</li>
            <li>✅ <em>Correct:</em> Ik <strong>herinner me</strong> die dag.</li>
            <li>💡 <em>Alternatief:</em> Als je wél een voorzetsel wilt gebruiken, moet je het werkwoord <em>denken</em> gebruiken: <em>Ik denk <strong>aan</strong> die dag.</em></li>
          </ul>
        </div>
      `
    },
    {
      title: "Deel 6: Wederkerende Werkwoorden in de VVT (Hadden vs. Waren) ⏳",
      body: `
        <p>Welk hulpwerkwoord gebruik je bij wederkerende werkwoorden in de Voltooid Verleden Tijd?</p>
        
        <div class="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-emerald-700 dark:text-emerald-300 mb-2">🏆 PRO REGEL 5 & 6</h3>
          <ul class="space-y-2 list-none pl-0 text-slate-700 dark:text-slate-300">
            <li>✅ <strong>HADDEN:</strong> De meeste wederkerende werkwoorden krijgen 'hadden', omdat het mentale of statische acties zijn zonder fysieke verplaatsing van A naar B.</li>
            <li>✅ <strong>WAREN:</strong> Alleen als het wederkerend werkwoord een duidelijke <strong>verplaatsing</strong> of <strong>verandering van toestand</strong> uitdrukt, krijg je 'waren'.</li>
          </ul>
        </div>

        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-gradient-to-r from-purple-600 to-pink-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Categorie</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Hulpwerkwoord</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Voorbeeld</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">Mentaal / Emotioneel</td>
                <td class="px-4 py-3 text-sm font-bold text-purple-600">Hadden</td>
                <td class="px-4 py-3 text-sm">Ik <strong>had</strong> me <strong>vergist</strong>.</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">Fysieke actie (geen verplaatsing)</td>
                <td class="px-4 py-3 text-sm font-bold text-purple-600">Hadden</td>
                <td class="px-4 py-3 text-sm">Zij <strong>hadden</strong> zich <strong>gewassen</strong>.</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50">
                <td class="px-4 py-3 text-sm font-semibold">Verandering van toestand</td>
                <td class="px-4 py-3 text-sm font-bold text-pink-600">Waren</td>
                <td class="px-4 py-3 text-sm">Zij <strong>was</strong> zich <strong>aan het verkleden</strong>.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-amber-700 dark:text-amber-300 mb-2">🚨 PAS OP! DE 'HAASTEN' VALKUIL!</h3>
          <p class="text-sm text-slate-700 dark:text-slate-300 mb-2"><em>Zich haasten</em> is een fysieke actie, maar geen verplaatsing van A naar B (het is de snelheid die telt). Daarom krijgt het <strong>hadden</strong>!</p>
          <ul class="space-y-1 text-sm text-slate-700 dark:text-slate-300">
            <li>❌ <em>Fout:</em> Ik was me gehaast.</li>
            <li>✅ <em>Correct:</em> Ik <strong>had</strong> me <strong>gehaast</strong>.</li>
          </ul>
        </div>
      `
    }
  ],
  rulesTable: [
    {
      rule: "De Spiegelregel",
      structure: "Onderwerp + wederkerend voornaamwoord (me, je, zich, ons, je, zich) + werkwoord.",
      example: "Ik was me. / Hij schaamt zich.",
      usage: "De actie kaatst terug op het onderwerp zelf."
    },
    {
      rule: "Jij/Jullie = Je",
      structure: "Bij 'jij' en 'jullie' is het wederkerend voornaamwoord altijd 'je', nooit 'jij' of 'jullie'.",
      example: "Jij wast je. (Niet: Jij wast jij).",
      usage: "Dit is een absolute, onveranderlijke regel in het Nederlands."
    },
    {
      rule: "Verplicht vs. Optioneel",
      structure: "Haal het voornaamwoord weg. Verandert de betekenis compleet? Dan is het verplicht.",
      example: "Ik was me (douche) vs. Ik was (de afwas).",
      usage: "Gebruik de 'weglaat-test' om te bepalen of een werkwoord echt of onecht wederkerend is."
    },
    {
      rule: "Zich herinneren (GEEN voorzetsel)",
      structure: "Zich herinneren + direct object. Nooit 'aan'.",
      example: "Ik herinner me die dag. (Niet: ik herinner me aan die dag).",
      usage: "Dit is een van de meest gemaakte fouten door anderstaligen."
    },
    {
      rule: "VVT Hulpwerkwoord",
      structure: "Meestal 'hebben'. Alleen 'zijn' bij duidelijke verplaatsing of toestandsverandering.",
      example: "Ik had me vergist. / Zij was zich aan het verkleden.",
      usage: "'Zich haasten' krijgt 'hebben' (ik had me gehaast), omdat het om snelheid gaat, niet om A➔B beweging."
    }
  ],
  callouts: [
    { type: "remember", label: "🏆 PRO REGEL 1", text: "Een wederkerend werkwoord herken je ALTIJD aan het voornaamwoord (me, je, zich, ons) direct na de persoonsvorm." },
    { type: "remember", label: "🏆 PRO REGEL 2", text: "Jij wast JE. Jullie wassen JE. Nooit 'jij wast jij'." },
    { type: "remember", label: "⚠️ PAS OP 1", text: "'Ik was' = afwas doen. 'Ik was me' = douchen/bad nemen. Het voornaamwoord verandert de betekenis volledig!" },
    { type: "remember", label: "⚠️ PAS OP 2", text: "'Zich herinneren' heeft GEEN voorzetsel. Zeg 'Ik herinner me die dag', niet 'aan die dag'." },
    { type: "remember", label: "⚠️ PAS OP 3", text: "In de progressieve vorm ('aan het'): Het voornaamwoord komt vóór 'aan het'. (Ik ben me aan het wassen)." },
    { type: "tip", label: "💡 Pro-tip", text: "Twijfel je over 'hebben' of 'zijn' in de VVT? Vraag je af: 'Is er een duidelijke A➔B verplaatsing of toestandsverandering?' Zo nee, gebruik dan 'hebben'." }
  ],
  commonMistakes: [
    { incorrect: "Ik was om 7 uur. (bedoeld: douchen)", correct: "Ik was me om 7 uur.", explanation: "Zonder 'me' betekent 'wassen' dat je de afwas doet of kleding wast, niet dat je jezelf wast." },
    { incorrect: "Jij wast jij.", correct: "Jij wast je.", explanation: "Het wederkerend voornaamwoord voor 'jij' en 'jullie' is altijd 'je', nooit 'jij' of 'jullie'." },
    { incorrect: "Ik herinner me aan die dag.", correct: "Ik herinner me die dag.", explanation: "'Zich herinneren' wordt direct gevolgd door het object, zonder het voorzetsel 'aan'." },
    { incorrect: "Ik ben aan het zich wassen.", correct: "Ik ben me aan het wassen.", explanation: "Het wederkerend voornaamwoord gedraagt zich als een lijdend voorwerp en moet vóór 'aan het' staan, aangepast aan het onderwerp ('me', niet 'zich')." },
    { incorrect: "Ik was me gehaast.", correct: "Ik had me gehaast.", explanation: "'Zich haasten' is een actie zonder A➔B verplaatsing, daarom krijgt het in de VVT het hulpwerkwoord 'hebben'." }
  ],
  review: [
    "✅ Wederkerend = actie kaatst terug op het onderwerp (Ik was me).",
    "✅ Voornaamwoorden: ik (me), jij (je), hij/zij/het (zich), wij (ons), jullie (je), zij (zich).",
    "✅ Verplicht wederkerend: Weglaten verandert de betekenis volledig (zich wassen vs wassen).",
    "✅ Optioneel wederkerend: Betekenis blijft gelijk, maar klinkt natuurlijker (zich verslapen).",
    "✅ 'Zich herinneren' heeft GEEN voorzetsel (Ik herinner me die dag).",
    "✅ VVT: Meestal 'hebben', tenzij er sprake is van verplaatsing of toestandsverandering ('zijn').",
    "✅ 'Zich haasten' krijgt 'hebben' (Ik had me gehaast)."
  ],
  qa: [
    {
      question: "Verplicht vs. Optioneel (De Betekenis-valkuil): Lees de volgende twee zinnen. Wat is het exacte verschil in betekenis? En welke zin gebruik je als je wilt zeggen dat je 's ochtends onder de douche stapt? 1. 'Ik was me om 7 uur.' 2. 'Ik was om 7 uur.'",
      answer: "In zin 1 (Ik was me) is 'wassen' verplicht wederkerend. De actie keert terug op het onderwerp: je maakt jezelf schoon (je neemt een douche of bad). In zin 2 (Ik was) is 'wassen' niet-wederkerend. De actie gaat naar een object: je doet de afwas, of je wast de auto, of je wast kleding. Als je wilt zeggen dat je onder de douche stapt, moet je zin 1 gebruiken."
    },
    {
      question: "De 'Herinneren' voorzetsel-valkuil: Een student wil zeggen: 'I remember that day.' Hij schrijft: 'Ik herinner me aan die dag.' Waarom is deze zin fout, wat is de correcte vorm met 'herinneren', en welk ander werkwoord kun je gebruiken als je wél een voorzetsel wilt gebruiken?",
      answer: "De zin is fout omdat 'zich herinneren' geen voorzetsel heeft. Het is een verplicht wederkerend werkwoord dat direct gevolgd wordt door het object. De correcte zin is: 'Ik herinner me die dag.' Als je wél een voorzetsel wilt gebruiken, moet je het werkwoord 'denken' gebruiken: 'Ik denk aan die dag.'"
    },
    {
      question: "De Progressieve valkuil met wederkerende werkwoorden: Je wilt zeggen: 'I am washing myself right now.' Een student schrijft: 'Ik ben aan het zich wassen.' Waarom is deze zin grammaticaal 100% fout, en hoe moet hij wél?",
      answer: "De zin is fout om twee redenen: 1) Het wederkerend voornaamwoord moet overeenkomen met het onderwerp ('me', niet 'zich'). 2) Het voornaamwoord mag niet tussen of na het blokje 'aan het + infinitief' staan. Het moet vóór het blokje komen, direct na de persoonsvorm. De correcte zin is: 'Ik ben me aan het wassen.'"
    },
    {
      question: "De 'Aanstellen' valkuil (Twee betekenissen): Een journalist schrijft twee zinnen over een nieuwe manager. Wat is het exacte verschil in betekenis tussen deze twee zinnen? 1. 'De nieuwe manager is gisteren aangesteld.' 2. 'De nieuwe manager stelt zich aan.'",
      answer: "In zin 1 (aangesteld) is het werkwoord 'aanstellen' niet-wederkerend en in de passieve vorm. Het betekent: benoemd worden in een functie. De manager heeft officieel de baan gekregen. In zin 2 (stelt zich aan) is het werkwoord wederkerend. In de spreektaal betekent 'zich aanstellen' dat iemand overdrijft, zeurt, of aanstellerig doet. De journalist zegt dus dat de manager zich aanstelt (zeurt om niets)."
    }
  ]
};