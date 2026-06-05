import type { GrammarLesson } from "../../types";

export const voltooidVerledenTijd: GrammarLesson = {
  id: "nl-voltooid-verleden-tijd-1",
  title: "De Voltooid Verleden Tijd (VVT): De Ultieme Masterclass",
  level: 3,
  topic: "Werkwoorden & Tijden",
  body: "Beheers de Voltooid Verleden Tijd volledig: de tijdlijn, de strijd tussen 'hadden' en 'waren', de valkuilen van 't kofschip en ge-vreters, de beruchte bijzin-volgorde, en de C1 dubbele infinitief.",
  overview:
    "Dit is de meest diepgaande en visueel overzichtelijke gids over de Voltooid Verleden Tijd (VVT) in het Nederlands. Je leert niet alleen de basisformule, maar duikt in de nuances van 'hadden' vs 'waren', de exacte focus-regels, de uitzonderingen (zoals 'zich vergissen' en 'blijven'), en de wetenschap van het voltooid deelwoord. Met prachtige tabellen, uitgebreide PAS OP-waarschuwingen voor de grootste C1-valkuilen en 4 complexe oefenvragen, maak je voortaan geen enkele fout meer in het 'verleden van het verleden'!",
  anchorSectionId: "wat-is-vvt",
  exercises: [],
  timeExpressionsLabel: "De Tijdlijn van de VVT ⏳",
  timeExpressions: {
    header: "Tijdstip | Tijdvorm | Voorbeeld | Uitleg",
    rows: [
      ["🟢 NU", "Tegenwoordige Tijd", "Ik **vertel** het verhaal.", "Het moment van spreken."],
      ["🟡 VERLEDEN", "Onvoltooid Verleden Tijd (OVT)", "Toen ik **thuiskwam**...", "De hoofdlijn van het verhaal."],
      ["🔴 VERLEDEN VAN HET VERLEDEN", "Voltooid Verleden Tijd (VVT)", "...**was** hij al **vertrokken**.", "De actie die al klaar was vóór het verleden."]
    ]
  },
  details: [
    {
      title: "Deel 1: Wat is de VVT? (De Tijdmachine) ⏳",
      body: `
        <p>De Voltooid Verleden Tijd (VVT) is de tijd van de <strong>tijdmachine</strong>. Je gebruikt deze tijd als je in een verhaal over het verleden praat, en je wilt terugflitsen naar een moment dat <strong>nóg eerder</strong> was.</p>
        
        <div class="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-emerald-700 dark:text-emerald-300 mb-2">🏆 PRO-REGEL 1: De Chronologie</h3>
          <p class="text-slate-700 dark:text-slate-300">De VVT is <strong>ALTIJD</strong> de oudste handeling in een verhaal over vroeger. Het creëert een tijdsprong naar iets dat al <em>helemaal klaar</em> was voordat iets anders gebeurde.</p>
        </div>

        <div class="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-4 border border-slate-200 dark:border-slate-700 my-4">
          <p class="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Voorbeeld uit het dagelijks leven:</p>
          <ul class="space-y-2 text-sm text-slate-600 dark:text-slate-400">
            <li>🕒 <strong>17:00 uur:</strong> Je partner vertrekt naar zijn werk. <em class="text-rose-600 font-semibold">(Oudste actie ➔ VVT)</em></li>
            <li>🕕 <strong>18:00 uur:</strong> Jij komt thuis. <em class="text-amber-600 font-semibold">(Hoofdlijn van het verhaal ➔ OVT)</em></li>
            <li>🗣️ <strong>Vandaag:</strong> Jij vertelt dit verhaal. <em class="text-emerald-600 font-semibold">(Tegenwoordige Tijd)</em></li>
          </ul>
          <p class="mt-3 text-sm font-medium text-slate-800 dark:text-slate-200 italic">"Toen ik gisteren om 18.00 uur thuis<strong>kwam</strong> (OVT), <strong>was</strong> mijn partner al <strong>vertrokken</strong> (VVT)."</p>
        </div>
      `
    },
    {
      title: "Deel 2: De Formule & Hulpwerkwoorden 🏗️",
      body: `
        <p>De VVT is een samengestelde tijd. Hij bestaat <strong>ALTIJD</strong> uit twee onmisbare onderdelen. Je kunt er nooit één weglaten!</p>
        
        <div class="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 p-4 rounded-r-lg my-4 text-center">
          <h3 class="text-lg font-extrabold text-indigo-700 dark:text-indigo-300 mb-2">🏆 De Formule</h3>
          <p class="text-slate-700 dark:text-slate-300 font-mono text-base md:text-lg">ONDERWERP + <span class="text-indigo-600 dark:text-indigo-400 font-bold">HULPWERKWOORD (had/waren)</span> + ... + <span class="text-purple-600 dark:text-purple-400 font-bold">VOLTOOID DEELWOORD</span></p>
        </div>

        <h3 class="text-lg font-bold mt-6 mb-3 text-slate-800 dark:text-slate-200">De Vervoeging in de OVT (Uit je hoofd leren!)</h3>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-gradient-to-r from-purple-600 to-pink-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Persoon</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">hebben (OVT)</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">zijn (OVT)</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-semibold">ik</td><td class="px-4 py-3 text-sm">had</td><td class="px-4 py-3 text-sm">was</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-semibold">jij / u</td><td class="px-4 py-3 text-sm">had</td><td class="px-4 py-3 text-sm">was</td></tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-semibold">hij / zij / het</td><td class="px-4 py-3 text-sm">had</td><td class="px-4 py-3 text-sm">was</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-4 py-3 text-sm font-semibold">wij / jullie / zij</td><td class="px-4 py-3 text-sm font-semibold text-indigo-600">hadden</td><td class="px-4 py-3 text-sm font-semibold text-purple-600">waren</td></tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      title: "Deel 3: Hadden vs. Waren (De Ultieme Strijd) ⚔️",
      body: `
        <p>Dit is de moeilijkste keuze van de Nederlandse grammatica. Maar met deze twee heldere groepen onthoud je het voor altijd.</p>
        
        <h3 class="text-lg font-bold mt-6 mb-3 text-emerald-700 dark:text-emerald-300">🌟 GROEP 1: WAREN (was/waren) – De "Beweging & Verandering" groep</h3>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-gradient-to-r from-emerald-600 to-teal-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Situatie</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Hoe herken je het?</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Voorbeeldwerkwoorden</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">1. Verplaatsing (A ➔ B)</td>
                <td class="px-4 py-3 text-sm text-xs">Iets of iemand gaat fysiek van de ene plek naar de andere. Focus op de <em>aankomst</em>.</td>
                <td class="px-4 py-3 text-sm text-xs">gaan, komen, lopen, rennen, fietsen, vliegen, vallen, vertrekken, reizen</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">2. Verandering van toestand</td>
                <td class="px-4 py-3 text-sm text-xs">Iets of iemand wordt anders (levend/dood, wakker/slapend, klein/groot).</td>
                <td class="px-4 py-3 text-sm text-xs">worden, groeien, sterven, ontwaken, veranderen, slagen, lukken, beginnen</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50">
                <td class="px-4 py-3 text-sm font-semibold text-rose-600">3. De Grote Uitzonderingen</td>
                <td class="px-4 py-3 text-sm text-xs">Geen verplaatsing, maar tóch <em>zijn</em>. <strong>Uit je hoofd leren!</strong></td>
                <td class="px-4 py-3 text-sm text-xs font-bold">blijven, gebeuren</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 class="text-lg font-bold mt-8 mb-3 text-amber-700 dark:text-amber-300">🌟 GROEP 2: HADDEN (had/hadden) – De "Stilstand, Duur & Object" groep</h3>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-gradient-to-r from-amber-600 to-orange-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Situatie</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Hoe herken je het?</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Voorbeeldwerkwoorden</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">1. Geen verplaatsing (duur/stilstand)</td>
                <td class="px-4 py-3 text-sm text-xs">De actie gebeurt op één plek, of je benadrukt expliciet <em>hoe lang</em> het duurde.</td>
                <td class="px-4 py-3 text-sm text-xs">slapen, wonen, werken, wachten, zitten, staan, liggen, lezen, studeren</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">2. Met een lijdend voorwerp</td>
                <td class="px-4 py-3 text-sm text-xs">Je kunt "wie?" of "wat?" vragen na het werkwoord. Er is een object.</td>
                <td class="px-4 py-3 text-sm text-xs">kopen, eten, maken, zien, geven, schrijven, brengen, vergeten</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50">
                <td class="px-4 py-3 text-sm font-semibold text-rose-600">3. Wederkerende werkwoorden</td>
                <td class="px-4 py-3 text-sm text-xs">Er staat "zich" bij het werkwoord.</td>
                <td class="px-4 py-3 text-sm text-xs font-bold">zich vergissen, zich wassen, zich aankleden, zich herinneren</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="bg-rose-50 dark:bg-rose-900/20 border-l-4 border-rose-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-rose-700 dark:text-rose-300 mb-2">🚨 PAS OP! DE WEDERKERENDE FOUT DIE IEDEREEN MAAKT</h3>
          <p class="text-sm text-slate-700 dark:text-slate-300 mb-2">Heel veel mensen denken dat wederkerende werkwoorden <em>zijn</em> krijgen omdat er 'zich' staat. Dat is <strong>100% FOUT</strong> in het Standaardnederlands!</p>
          <ul class="space-y-1 text-sm text-slate-700 dark:text-slate-300">
            <li>❌ <em>Ik was me vergist.</em> / ❌ <em>Hij was zich aangekleed.</em></li>
            <li>✅ <em>Ik <strong>had</strong> me <strong>vergist</strong>.</em> / ✅ <em>Hij <strong>had</strong> zich <strong>aangekleed</strong>.</em></li>
            <li>💡 <strong>De gouden regel:</strong> Wederkerende werkwoorden krijgen <strong>ALTIJD</strong> "hebben" (hadden).</li>
          </ul>
        </div>
      `
    },
    {
      title: "Deel 4: Het Voltooid Deelwoord Maken – Stap voor Stap 🛠️",
      body: `
        <p>Het voltooid deelwoord is het tweede stukje van de VVT. Hoe maak je het foutloos?</p>
        
        <h3 class="text-lg font-bold mt-6 mb-3 text-slate-800 dark:text-slate-200">A. Regelmatige werkwoorden (’t kofschip / ’t fokschaap)</h3>
        <p class="text-sm text-slate-700 dark:text-slate-300 mb-2"><strong>Formule:</strong> ge- + stam + <strong>d</strong> of <strong>t</strong></p>
        <ol class="list-decimal list-inside space-y-2 text-sm text-slate-700 dark:text-slate-300 mb-4">
          <li>Haal <em>-en</em> van het hele werkwoord af. Dat is de stam. (<em>maken</em> → <em>maak</em>)</li>
          <li>Kijk naar de laatste letter van de stam. Zit die in <strong>’t kofschip</strong> (t, k, f, s, ch, p)? 
            <ul class="list-disc list-inside ml-4 mt-1">
              <li><strong>Ja</strong> (stemloos) → eindigt op <strong>-t</strong> (<em>gemaakt</em>)</li>
              <li><strong>Nee</strong> (stemhebbend) → eindigt op <strong>-d</strong> (<em>gespeeld</em>)</li>
            </ul>
          </li>
        </ol>

        <div class="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 rounded-r-lg my-4">
          <h3 class="text-base font-extrabold text-amber-700 dark:text-amber-300 mb-2">⚠️ PAS OP! DE ’T KOF SCHIP VERRADERS</h3>
          <p class="text-sm text-slate-700 dark:text-slate-300">Sommige werkwoorden eindigen in de stam op een 't kofschip'-klank, maar krijgen tóch een <strong>-d</strong> omdat de klank in de spreektaal stemhebbend is gemaakt:</p>
          <ul class="mt-2 space-y-1 text-sm text-slate-700 dark:text-slate-300">
            <li>• <em>zeggen</em> (stam: zeg) ➔ <strong>gezegd</strong> (niet: <em>gezecht</em>)</li>
            <li>• <em>liggen</em> (stam: lig) ➔ <strong>gelegen</strong> (niet: <em>gelicht</em>)</li>
            <li>• <em>vragen</em> (stam: vraag) ➔ <strong>gevraagd</strong> (niet: <em>gevraagt</em>)</li>
          </ul>
        </div>

        <h3 class="text-lg font-bold mt-8 mb-3 text-slate-800 dark:text-slate-200">B. Scheidbaar vs. Onscheidbaar (De "Ge-" Sandwich & Ge-vreters)</h3>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-gradient-to-r from-blue-600 to-cyan-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Type Werkwoord</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Regel</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Voorbeeld</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">Scheidbaar</td>
                <td class="px-4 py-3 text-sm text-xs">'ge-' komt <strong>tussen</strong> het scheidbare deel en de stam.</td>
                <td class="px-4 py-3 text-sm">op + <strong>ge</strong> + beld = <strong>opgebeld</strong></td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">Onscheidbaar (Ge-vreters)</td>
                <td class="px-4 py-3 text-sm text-xs">Begint met be-, ge-, her-, ont-, ver-, er-. <strong>Geen</strong> extra 'ge-'!</td>
                <td class="px-4 py-3 text-sm">ont + dekt = <strong>ontdekt</strong> (niet: <em>geontdekt</em>)</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50">
                <td class="px-4 py-3 text-sm font-semibold text-rose-600">Combinatie (Deel + nemen)</td>
                <td class="px-4 py-3 text-sm text-xs">Scheidbaar deel + 'ge' + stam (ondanks 'ge-vreter' in stam).</td>
                <td class="px-4 py-3 text-sm">deel + <strong>ge</strong> + nomen = <strong>deelgenomen</strong></td>
              </tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      title: "Deel 5: Woordvolgorde & Gevorderde Constructies (C1) 📏🧠",
      body: `
        <h3 class="text-lg font-bold mt-6 mb-3 text-slate-800 dark:text-slate-200">A. De Bijzin (De SOV-regel)</h3>
        <p class="text-sm text-slate-700 dark:text-slate-300 mb-4">In een bijzin (omdat, dat, toen) wordt de hele werkwoordconstructie naar het einde gegooid. Het voltooid deelwoord staat <strong>direct vóór</strong> het hulpwerkwoord.</p>
        <div class="bg-rose-50 dark:bg-rose-900/20 border-l-4 border-rose-500 p-4 rounded-r-lg my-4">
          <p class="text-sm text-slate-700 dark:text-slate-300"><strong>🚨 PAS OP:</strong> In een bijzin mag het hulpwerkwoord <strong>NOOIT</strong> voor het voltooid deelwoord staan! <em class="text-rose-600">...omdat ik had geschreven</em> is 100% fout. Het moet zijn: <em class="text-emerald-600">...omdat ik geschreven had</em>.</p>
        </div>

        <h3 class="text-lg font-bold mt-8 mb-3 text-slate-800 dark:text-slate-200">B. VVT met Modale Werkwoorden (De Dubbele Infinitief Valstrik)</h3>
        <p class="text-sm text-slate-700 dark:text-slate-300 mb-4">Wat doe je als je in de VVT een modaal werkwoord (<em>moeten, kunnen, willen</em>) gebruikt? Het voltooid deelwoord van het hoofdwerkwoord verdwijnt! Je krijgt de <em>vervangende infinitief</em> structuur: <strong>had/was + modaal (infinitief) + hoofdwerkwoord (infinitief)</strong>.</p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-gradient-to-r from-purple-600 to-pink-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Fout ❌</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Correct ✅</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Uitleg</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm text-rose-600">Ik had het gedaan gemoeten.</td>
                <td class="px-4 py-3 text-sm text-emerald-600 font-bold">Ik had het moeten doen.</td>
                <td class="px-4 py-3 text-sm text-xs">Gebruik NOOIT 'gemoeten'. Het blijft de infinitief 'moeten'.</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30">
                <td class="px-4 py-3 text-sm text-rose-600">...omdat ik het had moeten gedaan.</td>
                <td class="px-4 py-3 text-sm text-emerald-600 font-bold">...omdat ik het had moeten doen.</td>
                <td class="px-4 py-3 text-sm text-xs">Zelfs in de bijzin blijven beide werkwoorden infinitief achteraan.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 class="text-lg font-bold mt-8 mb-3 text-slate-800 dark:text-slate-200">C. De Lijdende Vorm (Passief) in de VVT</h3>
        <p class="text-sm text-slate-700 dark:text-slate-300 mb-2">In de passieve VVT gebruik je <strong>altijd</strong> <em>was</em> of <em>waren</em> (van het werkwoord <em>worden</em> in de OVT), <strong>nooit</strong> <em>hadden</em>.</p>
        <ul class="list-disc list-inside space-y-1 text-sm text-slate-700 dark:text-slate-300">
          <li>Actief: <em>Zij hadden het huis verkocht.</em></li>
          <li>Passief: <em>Het huis <strong>was</strong> (door hen) <strong>verkocht</strong>.</em></li>
        </ul>
      `
    }
  ],
  rulesTable: [
    {
      rule: "De Tijdlijn (VVT)",
      structure: "De VVT is ALTIJD de oudste actie in een verleden-verhaal (het verleden van het verleden).",
      example: "Toen ik thuiskwam (OVT), was hij al vertrokken (VVT).",
      usage: "Gebruik de VVT alleen als je een tijdsprong maakt naar een moment dat al afgerond was vóór de hoofdlijn van je verhaal."
    },
    {
      rule: "Hadden vs. Waren",
      structure: "Waren = beweging (A➔B) of verandering van toestand. Hadden = duur, statisch, lijdend voorwerp, of wederkerend.",
      example: "Hij was gelopen (naar huis). / Hij had gelopen (twee uur lang). / Hij had zich vergist.",
      usage: "Let op de focus! Bij 'lopen/rijden' bepaalt de context (bestemming vs. duur) welk hulpwerkwoord je kiest."
    },
    {
      rule: "Bijzin-volgorde",
      structure: "In een bijzin staat het voltooid deelwoord direct vóór het hulpwerkwoord (had/was).",
      example: "...omdat ik de brief geschreven had.",
      usage: "Zeg NOOIT '...omdat ik had geschreven'. Het hulpwerkwoord is het allerlaatste woord van de zin."
    },
    {
      rule: "Modale werkwoorden in VVT",
      structure: "Bij modale werkwoorden in de VVT verdwijnt het voltooid deelwoord. Gebruik de dubbele infinitief.",
      example: "Ik had het moeten doen. (Niet: had gedaan gemoeten)",
      usage: "Dit heet de vervangende infinitief. Zowel het modale werkwoord als het hoofdwerkwoord blijven in de infinitief staan."
    },
    {
      rule: "De 'Ge-' Sandwich & Ge-vreters",
      structure: "Scheidbaar: op+ge+beld. Onscheidbaar (be, ver, ont): ontdekt (geen ge-). Combinatie: deel+ge+nomen.",
      example: "Ik had deelgenomen. / Ik had het ontdekt.",
      usage: "Onthoud de ge-vreters: be-, ge-, her-, ont-, ver-, er-. Ze eten de 'ge-' op, tenzij er een scheidbaar deel vóór de stam staat."
    }
  ],
  callouts: [
    { type: "remember", label: "🏆 PRO REGEL 1", text: "VVT = het verleden van het verleden. Het is de oudste actie in je verhaal." },
    { type: "remember", label: "🏆 PRO REGEL 2", text: "Waren = verplaatsing (A➔B) of verandering. Hadden = duur, statisch, lijdend voorwerp, of wederkerend (zich vergissen)." },
    { type: "remember", label: "⚠️ PAS OP 1", text: "Zich vergissen krijgt HADDEN! Het is een mentale actie, geen fysieke verplaatsing." },
    { type: "remember", label: "⚠️ PAS OP 2", text: "In een bijzin staat het hulpwerkwoord (had/was) ALTIJD als allerlaatste woord, na het voltooid deelwoord." },
    { type: "remember", label: "⚠️ PAS OP 3", text: "Bij modale werkwoorden in de VVT gebruik je NOOIT 'gemoeten' of 'gekund'. Het wordt een dubbele infinitief: had moeten doen." },
    { type: "remember", label: "💡 Pro-tip", text: "Twijfel je tussen 'was gelopen' en 'had gelopen'? Vraag je af: 'Ga ik naar de bestemming (was)' of 'focus ik op de inspanning/tijd (had)'?" }
  ],
  commonMistakes: [
    { incorrect: "Ik had thuis gebleven.", correct: "Ik was thuis gebleven.", explanation: "'Blijven' is een verandering van toestand (je gaat in een staat van 'blijven' verkeren) en krijgt daarom 'waren'." },
    { incorrect: "...omdat ik had gewerkt.", correct: "...omdat ik gewerkt had.", explanation: "In een bijzin staat het hulpwerkwoord (had) ALTIJD achteraan, na het voltooid deelwoord (gewerkt)." },
    { incorrect: "Ik had het gedaan gemoeten.", correct: "Ik had het moeten doen.", explanation: "Bij modale werkwoorden in de VVT verdwijnt het voltooid deelwoord. Het wordt een dubbele infinitief (vervangende infinitief)." },
    { incorrect: "Ik had gedeelgenomen.", correct: "Ik had deelgenomen.", explanation: "Bij 'deel + nemen' is 'deel' scheidbaar. De 'ge-' komt ertussen: deel + ge + nomen. Niet 'ge' ervoor." },
    { incorrect: "Ik was twee uur gelopen.", correct: "Ik had twee uur gelopen.", explanation: "De focus ligt op de duur (twee uur) en niet op een specifieke bestemming (A➔B). Daarom krijg je 'hadden'." },
    { incorrect: "Er had een ongeluk gebeurd.", correct: "Er was een ongeluk gebeurd.", explanation: "'Gebeuren' is een verandering van toestand (van niet-bestaand naar werkelijkheid) en krijgt daarom 'waren'." },
    { incorrect: "Ik was me vergist.", correct: "Ik had me vergist.", explanation: "Wederkerende werkwoorden (met 'zich') krijgen in het Standaardnederlands ALTIJD 'hebben' (hadden)." }
  ],
  review: [
    "✅ VVT = het verleden van het verleden (oudste actie in een verhaal).",
    "✅ Formule: Onderwerp + had/was + ... + voltooid deelwoord.",
    "✅ Waren = beweging (A➔B) of verandering van toestand (blijven, gebeuren, slagen).",
    "✅ Hadden = duur, statisch, lijdend voorwerp, of wederkerend (zich vergissen).",
    "✅ 't Kofschip bepaalt -d of -t bij regelmatige werkwoorden (let op de verraders: gezegd, gelegen).",
    "✅ Ge-vreters (be, ver, ont, her) krijgen geen 'ge-'. Scheidbare combinaties (deel+nemen) wel: deelgenomen.",
    "✅ Bijzin: Voltooid deelwoord + had/was (NOOIT had/was + voltooid deelwoord).",
    "✅ Modaal werkwoord in VVT: had/was + modaal (inf) + hoofdwerkwoord (inf). (had moeten doen).",
    "✅ Passief in VVT: was/waren + voltooid deelwoord. (Het huis was verkocht)."
  ],
  qa: [
    {
      question: "Vul het juiste hulpwerkwoord in (had of was) en leg uit waarom: 1. 'Toen ik op het station aankwam, ___ de trein al ___ (vertrekken).' 2. 'Hij was zenuwachtig, want hij ___ de vorige dag enorm ___ (zich vergissen).' 3. 'Ze waren moe, want ze ___ de hele dag in de tuin ___ (werken).'",
      answer: "1. was / vertrokken. ('Vertrekken' is een verplaatsing van A naar B ➔ waren). 2. had / zich vergist. ('Zich vergissen' is een wederkerende, mentale actie, geen fysieke verplaatsing ➔ hadden). 3. hadden / gewerkt. ('Werken' is een duur-activiteit zonder verplaatsing ➔ hadden)."
    },
    {
      question: "Maak één complexe zin met 'omdat'. Let op de volgorde: 'Zij was boos.' + 'Hij had haar niet mogen bellen.'",
      answer: "Zij was boos, omdat hij haar niet had mogen bellen. (Analyse: Modaal werkwoord in de VVT in een bijzin. De volgorde is: onderwerp + had + modaal (infinitief) + hoofdwerkwoord (infinitief). Geen 'gemogen'!)"
    },
    {
      question: "Zet om naar een bijzin met 'nadat'. 'Wij hadden het huis schoongemaakt. Toen kwamen de gasten.'",
      answer: "De gasten kwamen, nadat wij het huis schoongemaakt hadden. (Analyse: 'Schoonmaken' is scheidbaar. VD = schoongemaakt. In de bijzin staat het VD vóór het hulpwerkwoord: ...schoon + ge + maakt + had)."
    },
    {
      question: "Situatie: Gisteravond om 20.00 uur ging de stroom uit. Om 19.30 had Peter zijn computer al uitgezet. Welke zin beschrijft dit correct? a) 'Toen de stroom uitging, zette Peter zijn computer uit.' b) 'Toen de stroom uitging, had Peter zijn computer al uitgezet.'",
      answer: "Antwoord b is juist. Het uitzetten (19.30) gebeurde eerder dan het uitgaan van de stroom (20.00). De oudste handeling moet in de VVT staan om de chronologie (tijdsprong) duidelijk te maken."
    }
  ]
};