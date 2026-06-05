import type { GrammarLesson } from "../../types";

export const aanvoegendeWijs: GrammarLesson = {
  id: "nl-aanvoegende-wijs-1",
  title: "De Aanvoegende Wijs (Conjunctief): Leve de Koning, Het Zij Zo",
  level: 3,
  topic: "Werkwoorden & Wijzen",
  body: "Beheers de mysterieuze aanvoegende wijs (conjunctief): de fossielen van het Nederlands, de wensvorm, de veronderstelling, en de beruchte valkuilen van 'zij', 'hetzij' en 'leve'.",
  overview:
    "Dit is de meest diepgaande en visueel schitterende gids over de Aanvoegende Wijs (Conjunctief) in het Nederlands. Deze eeuwenoude werkwoordsvorm is in het moderne Nederlands nagenoeg uitgestorven en overleeft alleen nog als een 'fossiel' in vaste uitdrukkingen, wensen en formele formules. Je leert de 4 overgeleefde functies, het verschil met de gebiedende wijs, en vermijdt de grootste valkuilen zoals 'hetzij' vs 'het zij' en 'leve' vs 'leeft'. Met prachtige tabellen, strikte PRO-regels, een overvloed aan PAS OP-waarschuwingen en 4 complexe oefenvragen word je een absolute meester in deze plechtige vorm!",
  anchorSectionId: "wat-is-conjunctief",
  exercises: [],
  timeExpressionsLabel: "De 4 Overgeleefde Functies in het Nederlands 🏛️",
  timeExpressions: {
    header: "Functie | Uitleg | Voorbeeld",
    rows: [
      ["🌟 De Wens", "Een wens voor de toekomst uitspreken.", "***Leve** de koning!*"],
      ["⚖️ Plechtig Bevel", "Een sterk, formeel of bijbels bevel.", "***Ga heen** in vrede!*"],
      ["🪨 Vaste Formules", "Fossielen in de taal (acceptatie/keuze).", "***Het zij zo**.* / ***Hetzij**... **hetzij**...*"],
      ["🤷‍♂️ Veronderstelling", "Concessief: al is het misschien zo...", "***Hij zij** nog zo slim...*"]
    ]
  },
  details: [
    {
      title: "Deel 1: Wat is de Aanvoegende Wijs? (Het Mysterie) 👑",
      body: `
        <p>De <strong>aanvoegende wijs</strong> (in het Latijn: <em>coniunctivus</em>) is een van de oudste en meest mysterieuze vormen van de Nederlandse taal. Vroeger, in het Middelnederlands, was het een volledig werkwoordsvorm met eigen vervoegingen.</p>
        
        <div class="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-5 border border-slate-200 dark:border-slate-700 my-4 shadow-sm">
          <p class="text-sm font-bold text-slate-800 dark:text-slate-200 mb-3 flex items-center gap-2">
            <span class="text-2xl">🪦</span> Het Grote Geheim
          </p>
          <p class="text-sm text-slate-700 dark:text-slate-300">De aanvoegende wijs is in het moderne Nederlands <strong>nagenoeg uitgestorven!</strong> In het dagelijks leven gebruiken we hem <strong>NOOIT</strong> meer om een gewone zin te maken. Hij overleeft alleen nog als een <strong>fossiel</strong> in een handvol vaste uitdrukkingen, wensen, gebeden en formele formules.</p>
        </div>

        <div class="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-emerald-700 dark:text-emerald-300 mb-2">🏆 PRO REGEL 1</h3>
          <p class="text-slate-700 dark:text-slate-300">Je hoeft de aanvoegende wijs <strong>NOOIT</strong> zelf te maken voor nieuwe zinnen. Je moet hem alleen <strong>herkennen</strong> in de vaste uitdrukkingen die nog bestaan.</p>
        </div>
      `
    },
    {
      title: "Deel 2: Hoe ziet de Aanvoegende Wijs eruit? 🔍",
      body: `
        <p>De vorm is heel simpel: het is bijna altijd de <strong>stam van het werkwoord + de letter -e</strong>.</p>
        
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-gradient-to-r from-indigo-600 to-purple-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Infinitief</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Stam</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Aanvoegende Wijs</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-semibold">leven</td><td class="px-4 py-3 text-sm">leef</td><td class="px-4 py-3 text-sm font-bold text-indigo-600">leve</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-semibold">zijn</td><td class="px-4 py-3 text-sm">zij</td><td class="px-4 py-3 text-sm font-bold text-indigo-600">zij (of <em>zy</em>)</td></tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-semibold">komen</td><td class="px-4 py-3 text-sm">kom</td><td class="px-4 py-3 text-sm font-bold text-indigo-600">kome</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-semibold">hebben</td><td class="px-4 py-3 text-sm">heb</td><td class="px-4 py-3 text-sm font-bold text-indigo-600">hebbe</td></tr>
            </tbody>
          </table>
        </div>

        <div class="bg-rose-50 dark:bg-rose-900/20 border-l-4 border-rose-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-rose-700 dark:text-rose-300 mb-2">🚨 PAS OP! DE 'ZIEN'-VALKUIL!</h3>
          <p class="text-sm text-slate-700 dark:text-slate-300 mb-2">De aanvoegende wijs van <em>zijn</em> is <strong>zij</strong> (of <em>zy</em>). Dit lijkt op het persoonlijk voornaamwoord <em>zij</em> (she/they), maar het is echt de oude vorm van het werkwoord <em>zijn</em>!</p>
          <ul class="space-y-1 text-sm text-slate-700 dark:text-slate-300">
            <li>✅ <em>Het <strong>zij</strong> zo.</em> = Laten we het zo laten. / Moge het zo zijn.</li>
            <li>❌ <em><strong>Zij</strong> gaat naar school.</em> = Het persoonlijk voornaamwoord (she).</li>
          </ul>
        </div>
      `
    },
    {
      title: "Deel 3: De 4 Overgeleefde Functies 🏛️",
      body: `
        <p>Hoewel de aanvoegende wijs bijna dood is, duikt hij nog op in <strong>vier specifieke situaties</strong>. Als je deze vier kent, ken je 100% van de aanvoegende wijs die je in het Nederlands nog tegenkomt!</p>
        
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-gradient-to-r from-emerald-600 to-teal-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Functie</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Uitleg</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Vaste Uitdrukkingen</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">🌟 A. De Wens</td>
                <td class="px-4 py-3 text-sm text-xs">Een wens voor de toekomst uitspreken.</td>
                <td class="px-4 py-3 text-sm text-xs"><strong>Leve</strong> de koning! / <strong>Kome</strong> wat komen wil! / Het ga je goed!</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">⚖️ B. Plechtig Bevel</td>
                <td class="px-4 py-3 text-sm text-xs">Een sterk, formeel of bijbels bevel.</td>
                <td class="px-4 py-3 text-sm text-xs"><strong>Ga heen</strong> in vrede! / Teneinde een ieder <strong>wete</strong>...</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">🪨 C. Vaste Formules</td>
                <td class="px-4 py-3 text-sm text-xs">Fossielen in de taal (acceptatie/keuze).</td>
                <td class="px-4 py-3 text-sm text-xs">Het <strong>zij</strong> zo. / <strong>Hetzij</strong>... <strong>hetzij</strong>... / Hoe het ook <strong>zij</strong>.</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30">
                <td class="px-4 py-3 text-sm font-semibold">🤷‍♂️ D. Veronderstelling</td>
                <td class="px-4 py-3 text-sm text-xs">Concessief: al is het misschien zo...</td>
                <td class="px-4 py-3 text-sm text-xs">Hij <strong>zij</strong> nog zo slim... / Het <strong>koste</strong> wat het wil.</td>
              </tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      title: "Deel 4: Aanvoegende vs. Gebiedende Wijs 🥊",
      body: `
        <p>Dit is de <strong>grootste valkuil</strong>! Veel mensen verwarren de aanvoegende wijs (wens) met de gebiedende wijs (bevel).</p>
        
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-gradient-to-r from-purple-600 to-pink-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Kenmerk</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Aanvoegende Wijs (Conjunctief)</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Gebiedende Wijs (Imperatief)</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">Functie</td>
                <td class="px-4 py-3 text-sm text-xs">Een <strong>wens</strong>, veronderstelling of formule.</td>
                <td class="px-4 py-3 text-sm text-xs">Een <strong>direct bevel</strong> of verzoek.</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">Vorm</td>
                <td class="px-4 py-3 text-sm text-xs">Stam + <strong>-e</strong> (of oude vormen zoals <em>zij</em>).</td>
                <td class="px-4 py-3 text-sm text-xs">Alleen de <strong>stam</strong> (of stam + t bij u).</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">Toon</td>
                <td class="px-4 py-3 text-sm text-xs">Plechtig, oud, formeel, dromerig.</td>
                <td class="px-4 py-3 text-sm text-xs">Direct, dwingend, dagelijks.</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30">
                <td class="px-4 py-3 text-sm font-semibold">Voorbeeld</td>
                <td class="px-4 py-3 text-sm text-xs"><strong>Leve</strong> de koning! (Wens)</td>
                <td class="px-4 py-3 text-sm text-xs"><strong>Kom</strong> hier! (Bevel)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="bg-rose-50 dark:bg-rose-900/20 border-l-4 border-rose-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-rose-700 dark:text-rose-300 mb-2">🚨 PAS OP! DE 'LEVE' vs 'LEEF' VALKUIL!</h3>
          <ul class="space-y-1 text-sm text-slate-700 dark:text-slate-300">
            <li>✅ <em><strong>Leve</strong> de koning!</em> (Aanvoegende wijs = wens).</li>
            <li>❌ <em><strong>Leeft</strong> de koning!</em> (Dit zou betekenen: 'Is de koning nog in leven?', een vraag in de tegenwoordige tijd).</li>
            <li>❌ <em><strong>Leef</strong> de koning!</em> (Dit is fout, bestaat niet).</li>
          </ul>
        </div>
      `
    },
    {
      title: "Deel 5: De 'Zij' en 'Hetzij' Valkuilen 🕵️‍♂️",
      body: `
        <h3 class="text-lg font-bold mt-6 mb-3 text-slate-800 dark:text-slate-200">A. Het woord 'Zij': Werkwoord of Voornaamwoord?</h3>
        <p class="text-sm text-slate-700 dark:text-slate-300 mb-4">Het woord <strong>zij</strong> is in het Nederlands een kameleon. Het kan drie dingen zijn:</p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-gradient-to-r from-blue-600 to-cyan-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Vorm</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Wat is het?</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Voorbeeld</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">zij (lang klinker)</td>
                <td class="px-4 py-3 text-sm text-xs">Persoonlijk voornaamwoord (she/they)</td>
                <td class="px-4 py-3 text-sm"><strong>Zij</strong> is mijn zus.</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">zij (aanvoegende wijs)</td>
                <td class="px-4 py-3 text-sm text-xs">Oude vorm van het werkwoord <em>zijn</em></td>
                <td class="px-4 py-3 text-sm">Het <strong>zij</strong> zo. (Moge het zo zijn).</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50">
                <td class="px-4 py-3 text-sm font-semibold">zij (als dat)</td>
                <td class="px-4 py-3 text-sm text-xs">Oude vorm in vaste uitdrukkingen</td>
                <td class="px-4 py-3 text-sm"><strong>Zij</strong> het dat... (Mocht het zo zijn dat...).</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 class="text-lg font-bold mt-8 mb-3 text-slate-800 dark:text-slate-200">B. De 'Hetzij' vs 'Het zij' Valkuil</h3>
        <p class="text-sm text-slate-700 dark:text-slate-300 mb-4">In moderne spreektaal gebruiken we <em>of... of...</em>. In formele, juridische taal gebruiken we <strong>hetzij... hetzij...</strong>. Dit is een overblijfsel van de aanvoegende wijs!</p>
        
        <div class="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-amber-700 dark:text-amber-300 mb-2">🚨 PAS OP! SCHRIJFWIJZE!</h3>
          <ul class="space-y-2 text-sm text-slate-700 dark:text-slate-300">
            <li>✅ <em><strong>Het zij zo</strong>.</em> (Drie losse woorden = aanvoegende wijs, 'moge het zo zijn').</li>
            <li>✅ <em><strong>Hetzij</strong> dit, <strong>hetzij</strong> dat.</em> (Aan elkaar = voegwoord, 'of dit, of dat').</li>
          </ul>
        </div>
      `
    }
  ],
  rulesTable: [
    {
      rule: "De 'Stam + e' Formule",
      structure: "De aanvoegende wijs wordt gevormd door de stam + de letter -e (of oude vormen zoals 'zij').",
      example: "Leve de koning! / Kome wat komen wil!",
      usage: "Je hoeft deze vorm niet zelf te maken voor nieuwe zinnen, alleen te herkennen in vaste uitdrukkingen."
    },
    {
      rule: "De 4 Fossiel-Functies",
      structure: "Wens (leve), Plechtig bevel (ga heen), Vaste formule (het zij zo), Veronderstelling (hij zij nog zo slim).",
      example: "Het zij zo. / Al ware het zo...",
      usage: "Deze vormen worden alleen nog gebruikt in plechtige, formele, juridische of bijbelse context."
    },
    {
      rule: "Hetzij vs. Het zij",
      structure: "Hetzij (aan elkaar) is een voegwoord (of). Het zij (los) is de aanvoegende wijs (moge het zijn).",
      example: "Hetzij een man, hetzij een vrouw. / Het zij zo.",
      usage: "Gebruik 'hetzij' in formele teksten als je 'of... of...' bedoelt. Gebruik 'het zij' alleen in de vaste wens/formule."
    },
    {
      rule: "Aanvoegende vs. Gebiedende wijs",
      structure: "Aanvoegende wijs = wens/veronderstelling (stam + e). Gebiedende wijs = direct bevel (kale stam).",
      example: "Leve de bruid! (Wens) / Kom hier! (Bevel)",
      usage: "Verwar 'leve' (wens) niet met 'leeft' (vraag) of 'leef' (fout)."
    }
  ],
  callouts: [
    { type: "remember", label: "🏆 PRO REGEL 1", text: "De aanvoegende wijs is bijna uitgestorven. Je hoeft hem NOOIT zelf te maken, alleen te herkennen in vaste uitdrukkingen." },
    { type: "remember", label: "🏆 PRO REGEL 2", text: "De vorm is bijna altijd: stam + -e (leve, kome, hebbe) of oude vormen (zij, ware)." },
    { type: "remember", label: "⚠️ PAS OP 1", text: "'Leve' is de wens. 'Leeft' is een vraag (tegenwoordige tijd). 'Leef' is fout en bestaat niet." },
    { type: "remember", label: "⚠️ PAS OP 2", text: "'Zij' kan een persoonlijk voornaamwoord zijn (she) OF de aanvoegende wijs van 'zijn' (moge zijn). Kijk naar de context!" },
    { type: "remember", label: "⚠️ PAS OP 3", text: "'Hetzij' (aan elkaar) is een voegwoord (of). 'Het zij' (los) is de aanvoegende wijs (moge het zijn)." },
    { type: "tip", label: "💡 Pro-tip", text: "Zie je een werkwoord dat eindigt op een vreemde '-e' in een oude tekst? Dan is het 99% zeker de aanvoegende wijs (conjunctief)!" }
  ],
  commonMistakes: [
    { incorrect: "Leeft de koning! (als wens)", correct: "Leve de koning!", explanation: "'Leeft' is de tegenwoordige tijd (een vraag of feit). De wensvorm is de aanvoegende wijs: 'Leve'." },
    { incorrect: "Het zij (voornaamwoord) zo.", correct: "Het zij zo.", explanation: "In de uitdrukking 'Het zij zo' is 'zij' het werkwoord 'zijn' in de aanvoegende wijs, niet het persoonlijk voornaamwoord." },
    { incorrect: "Het zij een man, het zij een vrouw.", correct: "Hetzij een man, hetzij een vrouw.", explanation: "Als je 'of... of...' bedoelt, schrijf je het aan elkaar als 'hetzij'. De losse vorm 'het zij' betekent 'moge het zijn'." },
    { incorrect: "Komt wat komt!", correct: "Kome wat komen wil!", explanation: "De vaste uitdrukking gebruikt de aanvoegende wijs 'kome' (moge komen), niet de tegenwoordige tijd 'komt'." },
    { incorrect: "Al was het zo... (in formele/ouderwetse context)", correct: "Al ware het zo...", explanation: "In plechtige veronderstellingen wordt de aanvoegende wijs van het verleden gebruikt: 'ware' in plaats van 'was'." }
  ],
  review: [
    "✅ De aanvoegende wijs (conjunctief) is in het moderne Nederlands nagenoeg uitgestorven.",
    "✅ Vorm: stam + -e (leve, kome, hebbe) of oude vormen (zij, ware).",
    "✅ 4 functies: Wens, Plechtig bevel, Vaste formule, Veronderstelling.",
    "✅ Verschil met gebiedende wijs: Wens/Veronderstelling vs. Direct bevel.",
    "✅ 'Leve' is de wens, 'Leeft' is de vraag, 'Leef' is fout.",
    "✅ 'Zij' kan een voornaamwoord zijn of de aanvoegende wijs van 'zijn'.",
    "✅ 'Hetzij' (aan elkaar) is een voegwoord (of). 'Het zij' (los) is de aanvoegende wijs.",
    "✅ Je hoeft deze vorm niet zelf te maken, alleen te herkennen in vaste fossielen."
  ],
  qa: [
    {
      question: "Lees de volgende vier zinnen. In welke zinnen staat een aanvoegende wijs, en in welke zinnen staat een gewone vorm? 1. 'Leve de bruid!' 2. 'Kom hier!' 3. 'Het zij zo.' 4. 'Hij gaat naar huis.'",
      answer: "1. Leve de bruid! -> Aanvoegende wijs (wens). 2. Kom hier! -> Gebiedende wijs (bevel). 3. Het zij zo. -> Aanvoegende wijs (vaste formule). 4. Hij gaat naar huis. -> Gewone tegenwoordige tijd (indicatief)."
    },
    {
      question: "Een student schrijft de volgende twee zinnen. In één van de twee staat een schrijffout. Welke zin is fout, en hoe moet hij wél? 1. 'Het is, het zij een man, het zij een vrouw, niet relevant.' 2. 'Het is, hetzij een man hetzij een vrouw, niet relevant.'",
      answer: "Zin 1 is fout. De student gebruikt de losse woorden 'het zij' (de aanvoegende wijs van 'zijn'), maar hij bedoelt het voegwoord 'hetzij' (dat 'of' betekent). De correcte zin is Zin 2: 'Het is, hetzij een man hetzij een vrouw, niet relevant.'"
    },
    {
      question: "Een journalist schrijft een artikel over een verdachte. Hij wil zeggen: 'Zelfs als de man onschuldig is, blijft hij verdacht in de ogen van het publiek.' Hoe zou een ouderwetse, formele schrijver dit zeggen met behulp van de aanvoegende wijs van 'zijn'?",
      answer: "'De man zij nog zo onschuldig, hij blijft verdacht in de ogen van het publiek.' (Uitleg: Dit is de concessieve aanvoegende wijs. 'Zij' is hier de aanvoegende wijs van 'zijn'. De uitdrukking 'hij zij nog zo...' betekent 'al is hij nog zo...' of 'zelfs als hij nog zo... is')."
    },
    {
      question: "Het beroemde Nederlandse verjaardagsliedje begint met: 'Lang zal ze leven, in vreugde en geluk...' 1. Waarom staat er in dit liedje geen aanvoegende wijs (Lang leve ze)? 2. Als je het liedje in ouderwetse, formele stijl zou willen zingen met de aanvoegende wijs, hoe zou de eerste regel dan luiden?",
      answer: "1. Het liedje zoals we het nu zingen is in de gewone tegenwoordige tijd (indicatief) met de toekomende tijd 'zal'. Het is een voorspelling/wens in moderne taal. 2. De ouderwetse, formele versie met de aanvoegende wijs zou luiden: 'Lang leve de jarige!' (of: 'Lang leve ze!'). Dit is de pure aanvoegende wijs van 'leven', zoals in 'Leve de koning!'. Het betekent letterlijk: 'Moge de jarige lang leven!'"
    }
  ]
};