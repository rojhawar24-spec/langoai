import type { GrammarLesson } from "../../types";

export const voltooidVerledenToekomendeTijd: GrammarLesson = {
  id: "nl-voltooid-verleden-toekomende-tijd-1",
  title: "De Voltooid Verleden Toekomende Tijd (VVTt): De Absolute Eindbaas",
  level: 4,
  topic: "Werkwoorden & Tijden",
  body: "Beheers de Voltooid Verleden Toekomende Tijd (VVTt) volledig: de formule, hebben vs. zijn, woordvolgorde in bijzinnen, modale stapelingen, en het verschil met de OVTt.",
  overview:
    "Dit is de ultieme, foutloze masterclass over de Voltooid Verleden Toekomende Tijd (VVTt). Je leert hoe je 'toekomst in het verleden' uitdrukt die al voltooid is (vaak als irrealis of verwijt). Met haarscherpe tabellen, strikte PRO-regels, cruciale PAS OP-waarschuwingen en 4 korte oefenvragen beheers je deze complexe tijd als een ware taalkundige!",
  anchorSectionId: "formule-vvt",
  exercises: [],
  timeExpressionsLabel: "De Formule in Één Oogopslag ⏳🔮",
  timeExpressions: {
    header: "Element | Uitleg | Voorbeeld",
    rows: [
      ["**Persoonsvorm**", "zou / zouden (ovt van zullen)", "Ik **zou**"],
      ["**Hulpwerkwoord**", "hebben / zijn (infinitief)", "**hebben**"],
      ["**Voltooid deelwoord**", "van het hoofdwerkwoord", "**gewerkt**."],
      ["**Totale constructie**", "zou(den) + hebben/zijn + volt.dw.", "Ik **zou hebben gewerkt**."]
    ]
  },
  details: [
    {
      title: "Deel 1: Wat is de VVTt precies? 🧠",
      body: `
        <p>De Voltooid Verleden Toekomende Tijd (VVTt) kijkt <strong>vanuit een punt in het verleden vooruit</strong>, maar drukt tegelijkertijd uit dat die vooruitblik <strong>voltooid</strong> is ten opzichte van het heden. Het is dus <em>toekomst in het verleden, perfectief</strong>.</p>
        <p class="text-sm text-slate-700 dark:text-slate-300 mb-4">Je gebruikt deze tijd voornamelijk voor vier situaties:</p>
        <ul class="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300 mb-6">
          <li>🧠 <strong>Irrealis in het verleden:</strong> Iets wat níét gebeurd is, maar had kunnen/moeten gebeuren. (<em>Als ik tijd had gehad, zou ik zijn gekomen.</em>)</li>
          <li>🤷 <strong>Verwijten, spijt of gemiste kansen:</strong> (<em>Je had me kunnen bellen!</em>)</li>
          <li>🗣️ <strong>Indirecte rede:</strong> Iemand zei in het verleden iets over een toekomst die nu al voorbij is. (<em>Hij zei dat hij voor 8 uur zou zijn vertrokken.</em>)</li>
          <li>📖 <strong>Literaire stijl:</strong> Beschouwingen over een hypothetisch verleden. (<em>Niemand wist wat de gevolgen zouden zijn geweest.</em>)</li>
        </ul>
        
        <div class="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-emerald-700 dark:text-emerald-300 mb-2">🏆 PRO REGEL 1: De Basisformule</h3>
          <p class="text-slate-700 dark:text-slate-300 font-mono text-sm md:text-base"><span class="text-indigo-600 dark:text-indigo-400 font-bold">zou(den)</span> + <span class="text-purple-600 dark:text-purple-400 font-bold">hebben/zijn</span> + <span class="text-pink-600 dark:text-pink-400 font-bold">voltooid deelwoord</span></p>
        </div>
      `
    },
    {
      title: "Deel 2: De Keuze tussen 'Hebben' en 'Zijn' ⚖️",
      body: `
        <p>De keuze voor het hulpwerkwoord in de VVTt is <strong>exact hetzelfde</strong> als in de gewone Voltooid Tegenwoordige Tijd (VTT). </p>
        
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-gradient-to-r from-indigo-600 to-purple-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Gebruik HEBBEN</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Gebruik ZIJN</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm text-xs">Bij de meeste werkwoorden (actie, duur, lijdend voorwerp).</td>
                <td class="px-4 py-3 text-sm text-xs">Bij werkwoorden die een <strong>beweging met bestemmingsverandering</strong>, een <strong>ontwikkeling</strong>, of een <strong>gebeuren</strong> aangeven.</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">werken, eten, slapen, lezen, regenen</td>
                <td class="px-4 py-3 text-sm font-semibold">komen, gaan, vertrekken, stijgen, gebeuren, worden, zijn</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50">
                <td class="px-4 py-3 text-sm text-emerald-600 font-bold">Ik zou <strong>hebben</strong> gewerkt.</td>
                <td class="px-4 py-3 text-sm text-emerald-600 font-bold">Hij zou <strong>zijn</strong> gegaan.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="bg-rose-50 dark:bg-rose-900/20 border-l-4 border-rose-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-rose-700 dark:text-rose-300 mb-2">🚨 PAS OP! De 'Zijn' en 'Gebeuren' Valkuil</h3>
          <p class="text-sm text-slate-700 dark:text-slate-300 mb-2">Het voltooid deelwoord van <em>zijn</em> is <strong>geweest</strong>; van <em>gebeuren</em> is <strong>gebeurd</strong>. Deze gebruiken ALTIJD 'zijn' als hulpwerkwoord!</p>
          <ul class="space-y-1 text-sm text-slate-700 dark:text-slate-300">
            <li>✅ <em>Ik zou <strong>zijn</strong> geweest.</em> (Niet: <em>hebben</em> geweest).</li>
            <li>✅ <em>Het zou <strong>zijn</strong> gebeurd.</em> (Niet: <em>hebben</em> gebeurd).</li>
            <li>✅ <em>Het zou <strong>hebben</strong> geregend.</em> ('Regenen' gebruikt wél 'hebben': <em>het heeft geregend</em>).</li>
          </ul>
        </div>
      `
    },
    {
      title: "Deel 3: Woordvolgorde: Hoofdzin, Inversie & Bijzin 🧱",
      body: `
        <p>De plaats van de werkwoorden verandert afhankelijk van het type zin. Dit is een van de meest gemaakte fouten bij gevorderde cursisten.</p>
        
        <h3 class="text-lg font-bold mt-6 mb-3 text-slate-800 dark:text-slate-200">A. Normale Hoofdzin & Inversie</h3>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-gradient-to-r from-teal-600 to-cyan-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Type</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Voorbeeldzin</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">Normaal</td>
                <td class="px-4 py-3 text-sm">Ik <strong>zou</strong> gisteren <strong>hebben gebeld</strong>.</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">Inversie (Tijd voorop)</td>
                <td class="px-4 py-3 text-sm">Gisteren <strong>zou</strong> ik <strong>hebben gebeld</strong>.</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50">
                <td class="px-4 py-3 text-sm font-semibold">Inversie (Voorwaarde)</td>
                <td class="px-4 py-3 text-sm">Als het had geregend, <strong>zouden</strong> we <strong>zijn gebleven</strong>.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-indigo-700 dark:text-indigo-300 mb-2">🏆 PRO REGEL 2: Inversie</h3>
          <p class="text-slate-700 dark:text-slate-300">Zodra de zin niet met het onderwerp begint, komt de persoonsvorm <em>zou(den)</em> direct daarna. De rest (<em>hebben/zijn + volt.dw.</em>) blijft als één blok achteraan.</p>
        </div>

        <h3 class="text-lg font-bold mt-8 mb-3 text-slate-800 dark:text-slate-200">B. De Bijzin (De Grootste Valkuil!)</h3>
        <p class="text-sm text-slate-700 dark:text-slate-300 mb-4">In een bijzin staan de werkwoorden achteraan, maar <strong>niet</strong> in de Duitse volgorde! <em>Zou(den)</em> staat <strong>vóór</strong> <em>hebben/zijn</em>.</p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-gradient-to-r from-rose-600 to-pink-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Voegwoord</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Correcte Bijzin</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Fout (Duitse invloeden) ❌</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">dat</td>
                <td class="px-4 py-3 text-sm text-emerald-600 font-bold">…, dat hij <strong>zou hebben</strong> gelogen.</td>
                <td class="px-4 py-3 text-sm text-rose-600">…, dat hij gelogen zou hebben.</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30">
                <td class="px-4 py-3 text-sm font-semibold">omdat</td>
                <td class="px-4 py-3 text-sm text-emerald-600 font-bold">…, omdat ik <strong>zou zijn</strong> verhuisd.</td>
                <td class="px-4 py-3 text-sm text-rose-600">…, omdat ik verhuisd zou zijn.</td>
              </tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      title: "Deel 4: Modale Werkwoorden & OVTt vs. VVTt 🌪️",
      body: `
        <h3 class="text-lg font-bold mt-6 mb-3 text-slate-800 dark:text-slate-200">Modale werkwoorden in de VVTt</h3>
        <p class="text-sm text-slate-700 dark:text-slate-300 mb-4">Als je een modaal werkwoord (willen, kunnen, moeten, mogen) in de VVTt gebruikt, krijg je een <strong>stapeling van werkwoorden</strong>.</p>
        
        <div class="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-emerald-700 dark:text-emerald-300 mb-2">🏆 PRO REGEL 3: De Modale Stapel</h3>
          <p class="text-slate-700 dark:text-slate-300 font-mono text-sm md:text-base"><span class="text-indigo-600 dark:text-indigo-400 font-bold">zou(den)</span> + <span class="text-purple-600 dark:text-purple-400 font-bold">hebben/zijn</span> + <span class="text-pink-600 dark:text-pink-400 font-bold">modaal (infinitief)</span> + <span class="text-amber-600 dark:text-amber-400 font-bold">hoofdwerkwoord (infinitief)</span></p>
          <ul class="mt-2 space-y-1 text-sm text-slate-700 dark:text-slate-300">
            <li>✅ <em>Ik <strong>zou hebben willen</strong> komen.</em> (Niet: <em>gewild</em>).</li>
            <li>✅ <em>Hij <strong>zou hebben kunnen</strong> winnen.</em></li>
            <li>✅ <em>Ze <strong>zouden zijn moeten</strong> vertrekken.</em></li>
          </ul>
        </div>

        <h3 class="text-lg font-bold mt-8 mb-3 text-slate-800 dark:text-slate-200">VVTt versus OVTt (Onvoltooid Verleden Toekomende Tijd)</h3>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-gradient-to-r from-amber-600 to-orange-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Tijd</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Constructie</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Gebruik & Nuance</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">OVTt</td>
                <td class="px-4 py-3 text-sm">zou(den) + hele werkwoord</td>
                <td class="px-4 py-3 text-sm text-xs">Toekomst in het verleden, nog <strong>niet voltooid</strong>. (<em>Ik zei dat ik zou bellen.</em>)</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30">
                <td class="px-4 py-3 text-sm font-semibold">VVTt</td>
                <td class="px-4 py-3 text-sm">zou(den) + hebben/zijn + volt.dw.</td>
                <td class="px-4 py-3 text-sm text-xs">Toekomst in het verleden die <strong>al voltooid is</strong>, vaak irrealis. (<em>Ik had beloofd dat ik voor 8 uur zou hebben gebeld.</em>)</td>
              </tr>
            </tbody>
          </table>
        </div>
      `
    }
  ],
  rulesTable: [
    {
      rule: "De Basisformule",
      structure: "zou(den) + hebben/zijn + voltooid deelwoord.",
      example: "Ik zou hebben gewerkt. / Hij zou zijn gegaan.",
      usage: "Drukt een voltooide actie uit vanuit een perspectief in het verleden (vaak irrealis)."
    },
    {
      rule: "Hebben vs. Zijn",
      structure: "Volg dezelfde regels als de gewone VTT. Beweging/verandering/gebeuren = zijn.",
      example: "Het zou zijn gebeurd. (Niet: hebben gebeurd).",
      usage: "Controleer altijd welk hulpwerkwoord het hoofdwerkwoord normaal gesproken krijgt."
    },
    {
      rule: "Bijzin Volgorde",
      structure: "In een bijzin staat 'zou(den)' VÓÓR 'hebben/zijn'.",
      example: "...dat hij zou hebben gelogen. (Niet: dat hij gelogen zou hebben).",
      usage: "Dit is een strikte Nederlandse regel die vaak wordt verward met het Duits."
    },
    {
      rule: "Modale Stapeling",
      structure: "zou(den) + hebben/zijn + modaal (inf) + hoofdwerkwoord (inf).",
      example: "Ik zou hebben willen komen. (Niet: gewild komen).",
      usage: "Modale werkwoorden verliezen hun 'ge-' vorm in deze constructie en blijven infinitief."
    }
  ],
  callouts: [
    { type: "remember", label: "🏆 PRO REGEL 1", text: "De formule is altijd: zou(den) + hebben/zijn + voltooid deelwoord." },
    { type: "remember", label: "🏆 PRO REGEL 2", text: "Bij inversie komt 'zou(den)' direct na het vooropgeplaatste zinsdeel. De rest blijft achteraan." },
    { type: "remember", label: "🏆 PRO REGEL 3", text: "Bij modale werkwoorden in de VVTt: gebruik de infinitief van het modale werkwoord (zou hebben willen komen)." },
    { type: "remember", label: "⚠️ PAS OP 1", text: "Het werkwoord 'zijn' krijgt 'zijn' als hulpwerkwoord in de VVTt: 'Ik zou zijn geweest' (niet: hebben geweest)." },
    { type: "remember", label: "⚠️ PAS OP 2", text: "In een bijzin staat 'zou(den)' VÓÓR 'hebben/zijn'. Dit is een van de meest gemaakte fouten!" },
    { type: "tip", label: "💡 Pro-tip", text: "Twijfel je tussen OVTt en VVTt? Vraag je af: 'Was de actie op dat moment in het verleden al afgerond?' Zo ja, gebruik dan de VVTt." }
  ],
  commonMistakes: [
    { incorrect: "Ik zou dat hebben gewouden.", correct: "Ik zou dat hebben gewild.", explanation: "Het voltooid deelwoord van 'willen' is 'gewild' (zwak). 'Gewouden' is dialect/colloquiaal en grammaticaal incorrect." },
    { incorrect: "...dat hij gelogen zou hebben.", correct: "...dat hij zou hebben gelogen.", explanation: "In een Nederlandse bijzin staat 'zou(den)' vóór 'hebben/zijn', niet helemaal achteraan zoals in het Duits." },
    { incorrect: "Het zou hebben gebeurd.", correct: "Het zou zijn gebeurd.", explanation: "'Gebeuren' is een werkwoord van gebeuren/ontwikkeling en krijgt altijd 'zijn' als hulpwerkwoord." },
    { incorrect: "Ik zou hebben gewild gaan.", correct: "Ik zou hebben willen gaan.", explanation: "Bij een stapeling met een modaal werkwoord blijft het modale werkwoord in de infinitief ('willen'), niet als voltooid deelwoord ('gewild')." },
    { incorrect: "Als ik dat had geweten, zou ik niet zou zijn gekomen.", correct: "Als ik dat had geweten, zou ik niet zijn gekomen.", explanation: "Gebruik nooit dubbel 'zou'. Eén keer 'zou' is voldoende voor de hele constructie." }
  ],
  review: [
    "✅ Formule: zou(den) + hebben/zijn + voltooid deelwoord.",
    "✅ Gebruik: Irrealis in het verleden, verwijten, gemiste kansen, indirecte rede.",
    "✅ Hulpwerkwoord: Volg de standaard VTT-regels (beweging/gebeuren = zijn).",
    "✅ Bijzin volgorde: onderwerp + zou(den) + hebben/zijn + voltooid deelwoord.",
    "✅ Modale stapeling: zou + hebben + willen/kunnen + infinitief.",
    "✅ Vermijd dubbele 'zou' en Duitse woordvolgorde in bijzinnen."
  ],
  qa: [
    {
      question: "Vul de juiste VVTt-vorm in: 'Als ik dat had geweten, ______ (ik – niet – komen).'",
      answer: "…, zou ik niet zijn gekomen."
    },
    {
      question: "Waarom is 'Ik zou dat hebben gewild' correct, maar 'Ik zou dat hebben gewouden' fout?",
      answer: "Het voltooid deelwoord van 'willen' is 'gewild' (zwak), niet 'gewouden' (dat is dialect/colloquiaal). Bovendien gebruikt 'willen' het hulpwerkwoord 'hebben', dus 'hebben gewild' is juist."
    },
    {
      question: "Herformuleer de foutieve zin correct: 'Ze zei dat ze zou zijn gegaan naar het feest.'",
      answer: "In de bijzin moeten de werkwoorden in de juiste Nederlandse volgorde staan: '…dat ze naar het feest zou zijn gegaan.' (Het voorzetselvoorwerp 'naar het feest' staat vóór de werkwoordgroep, en 'zou' staat vóór 'zijn')."
    },
    {
      question: "Lees de volgende twee zinnen en verklaar het betekenisverschil: a. 'Ik zou vertrekken.' b. 'Ik zou zijn vertrokken.'",
      answer: "Zin a (OVTt) beschrijft een voornemen of plan in het verleden; het vertrek zelf lag nog in de toekomst. Zin b (VVTt) drukt uit dat het vertrekken voltooid is vanuit het perspectief van het verleden; vaak irrealis (het is niet gebeurd, maar het had gekund, bijv. 'Als de trein op tijd was, zou ik allang zijn vertrokken')."
    }
  ]
};