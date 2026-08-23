import type { GrammarLesson } from "../../types";

export const bijwoordelijkeBepaling: GrammarLesson = {
  id: "nl-bijwoordelijke-bepaling-1",
  title: "De Bijwoordelijke Bepaling: Tijd, Plaats & Wijze – De Ultieme Masterclass",
  level: 2,
  topic: "Grammatica & Zinsontleding",
  body: "Beheers de bijwoordelijke bepaling volledig: de 3 hoofdcategorieën (tijd, plaats, wijze), de vraag-formule, de TPW-volgorde, vooropplaatsing en de valkuilen met andere zinsdelen.",
  overview:
    "Dit is de meest uitgebreide, visueel schitterende en waarschuwing-rijke gids over de Bijwoordelijke Bepaling (BWB) in het Nederlands. Je leert hoe je het 'decor' en de 'regie' van de zin feilloos ontleedt, doorziet de valkuilen tussen BWB's en voorzetselvoorwerpen, en beheerst de gouden TPW-volgorde. Met prachtige tabellen, strikte PRO-regels en 4 simpele, heldere oefenvragen word je een absolute meester in de Nederlandse zinsontleding!",
  anchorSectionId: "wat-is-bwb",
  exercises: [],
  timeExpressionsLabel: "De 3 Hoofdcategorieën van de BWB 🧭",
  timeExpressions: {
    header: "Type | Vraagwoorden | Voorbeelden",
    rows: [
      ["⏰ **Tijd (bbt)**", "Wanneer? Hoe lang? Hoe vaak?", "morgen, twee uur, elke dag"],
      ["📍 **Plaats (bbp)**", "Waar? Waarheen? Waarvandaan?", "in de tuin, naar school, uit Nederland"],
      ["🎭 **Wijze (bbw)**", "Hoe? In welke mate? Met welk middel?", "snel, erg, met de auto"]
    ]
  },
  details: [
    {
      title: "Deel 1: Wat is een Bijwoordelijke Bepaling? 🎬",
      body: `
        <p>Een <strong>bijwoordelijke bepaling</strong> (vaak afgekort als <strong>bwb</strong>) is een zinsdeel dat extra informatie geeft over de <strong>omstandigheden</strong> van de actie. Het vertelt je <strong>wanneer</strong>, <strong>waar</strong> of <strong>hoe</strong> iets gebeurt.</p>
        <p class="text-sm text-slate-700 dark:text-slate-300 mb-4">Het is het "decor" en de "regie" van de zin. Zonder bwb's weten we alleen dát er iets gebeurt, maar niet hoe de situatie eruitziet.</p>
        
        <div class="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-emerald-700 dark:text-emerald-300 mb-2">🏆 PRO REGEL 1: De Definitie</h3>
          <p class="text-slate-700 dark:text-slate-300">Een bijwoordelijke bepaling is <strong>GEEN</strong> onderwerp, <strong>GEEN</strong> persoonsvorm, <strong>GEEN</strong> lijdend voorwerp en <strong>GEEN</strong> meewerkend voorwerp. Het is een zelfstandig zinsdeel dat je <strong>kunt weglaten</strong> zonder dat de zin grammaticaal kapot gaat.</p>
        </div>

        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-gradient-to-r from-indigo-600 to-purple-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Zin</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Zonder BWB</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Met BWB (Het Decor)</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm">Jan leest.</td>
                <td class="px-4 py-3 text-sm text-xs text-slate-500">(Kaal, we weten niets)</td>
                <td class="px-4 py-3 text-sm">Jan leest <strong>morgen</strong> <strong>in de tuin</strong> <strong>rustig</strong> een boek.</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30">
                <td class="px-4 py-3 text-sm">Zij werkt.</td>
                <td class="px-4 py-3 text-sm text-xs text-slate-500">(Vaag)</td>
                <td class="px-4 py-3 text-sm">Zij werkt <strong>de hele dag</strong> <strong>op kantoor</strong> <strong>hard</strong>.</td>
              </tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      title: "Deel 2: De 3 Hoofdcategorieën: Tijd, Plaats, Wijze 🧭",
      body: `
        <p>Er zijn drie hoofdgroepen bijwoordelijke bepalingen. Elke groep heeft zijn eigen vraagwoorden.</p>
        
        <h3 class="text-lg font-bold mt-6 mb-3 text-slate-800 dark:text-slate-200">A. Bijwoordelijke Bepaling van Tijd (bbt) ⏰</h3>
        <p class="text-sm text-slate-700 dark:text-slate-300 mb-2">Vertelt <strong>wanneer</strong>, <strong>hoe lang</strong> of <strong>hoe vaak</strong> de actie plaatsvindt.</p>
        <ul class="list-disc list-inside space-y-1 text-sm text-slate-700 dark:text-slate-300 mb-6">
          <li><strong>Wanneer?</strong> (Tijdstip): <em>morgen, gisteren, om 8 uur</em></li>
          <li><strong>Hoe lang?</strong> (Tijdsduur): <em>twee uur, de hele dag</em></li>
          <li><strong>Hoe vaak?</strong> (Frequentie): <em>elke dag, vaak, nooit</em></li>
        </ul>

        <h3 class="text-lg font-bold mt-6 mb-3 text-slate-800 dark:text-slate-200">B. Bijwoordelijke Bepaling van Plaats (bbp) 📍</h3>
        <p class="text-sm text-slate-700 dark:text-slate-300 mb-2">Vertelt <strong>waar</strong>, <strong>waarheen</strong> of <strong>waarvandaan</strong> de actie plaatsvindt.</p>
        <ul class="list-disc list-inside space-y-1 text-sm text-slate-700 dark:text-slate-300 mb-6">
          <li><strong>Waar?</strong> (Locatie): <em>in de tuin, op kantoor, hier</em></li>
          <li><strong>Waarheen?</strong> (Richting): <em>naar school, de kamer in</em></li>
          <li><strong>Waarvandaan?</strong> (Herkomst): <em>uit Nederland, van het werk</em></li>
        </ul>

        <h3 class="text-lg font-bold mt-6 mb-3 text-slate-800 dark:text-slate-200">C. Bijwoordelijke Bepaling van Wijze (bbw) 🎭</h3>
        <p class="text-sm text-slate-700 dark:text-slate-300 mb-2">Vertelt <strong>hoe</strong>, <strong>in welke mate</strong> of <strong>met welk middel</strong> de actie gebeurt.</p>
        <ul class="list-disc list-inside space-y-1 text-sm text-slate-700 dark:text-slate-300">
          <li><strong>Hoe?</strong> (Manier): <em>snel, voorzichtig, hard</em></li>
          <li><strong>In welke mate?</strong> (Graad): <em>erg, een beetje, bijna</em></li>
          <li><strong>Met welk middel?</strong> (Instrument): <em>met een hamer, per post</em></li>
        </ul>
      `
    },
    {
      title: "Deel 3: Hoe Vind Je Een BWB? De Vraag-Formule 🕵️‍♂️",
      body: `
        <p>Om een bijwoordelijke bepaling feilloos te vinden, moet je de juiste vraag stellen.</p>
        
        <div class="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-indigo-700 dark:text-indigo-300 mb-2">🏆 PRO REGEL 2: De Vraag-Formule</h3>
          <p class="text-slate-700 dark:text-slate-300 font-mono text-sm md:text-base">[Vraagwoord] + Persoonsvorm + Onderwerp?</p>
          <p class="text-sm text-slate-700 dark:text-slate-300 mt-2 italic">Het antwoord op deze vraag is de bijwoordelijke bepaling.</p>
        </div>

        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-gradient-to-r from-teal-600 to-cyan-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Type BWB</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Vraag</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Voorbeeldzin</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Antwoord (BWB)</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">Tijd</td>
                <td class="px-4 py-3 text-sm text-xs">Wanneer? / Hoe lang?</td>
                <td class="px-4 py-3 text-sm">Ik werk <strong>morgen</strong>.</td>
                <td class="px-4 py-3 text-sm text-emerald-600 font-bold">morgen</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">Plaats</td>
                <td class="px-4 py-3 text-sm text-xs">Waar? / Waarheen?</td>
                <td class="px-4 py-3 text-sm">Zij gaat <strong>naar school</strong>.</td>
                <td class="px-4 py-3 text-sm text-emerald-600 font-bold">naar school</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50">
                <td class="px-4 py-3 text-sm font-semibold">Wijze</td>
                <td class="px-4 py-3 text-sm text-xs">Hoe?</td>
                <td class="px-4 py-3 text-sm">Hij rijdt <strong>snel</strong>.</td>
                <td class="px-4 py-3 text-sm text-emerald-600 font-bold">snel</td>
              </tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      title: "Deel 4: De Gouden Volgorde: Tijd - Plaats - Wijze (TPW) 📏",
      body: `
        <p>Als je <strong>meerdere</strong> bijwoordelijke bepalingen in één zin hebt, staat er een vaste volgorde. Dit is een van de belangrijkste regels van de Nederlandse zinsbouw!</p>
        
        <div class="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-emerald-700 dark:text-emerald-300 mb-2">🏆 PRO REGEL 3: De TPW-Regel</h3>
          <p class="text-slate-700 dark:text-slate-300">De standaardvolgorde van bijwoordelijke bepalingen is:</p>
          <p class="text-slate-700 dark:text-slate-300 font-mono text-sm mt-2"><strong>1. TIJD</strong> ➔ <strong>2. PLAATS</strong> ➔ <strong>3. WIJZE</strong></p>
          <p class="text-sm text-slate-700 dark:text-slate-300 mt-2 italic">Let op: In de praktijk klinkt <strong>Tijd - Wijze - Plaats</strong> vaak natuurlijker. De belangrijkste regel is: <strong>Tijd staat ALTIJD vooraan</strong>.</p>
        </div>

        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-gradient-to-r from-amber-600 to-orange-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Volgorde</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Zin</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Analyse</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">T - P - W</td>
                <td class="px-4 py-3 text-sm">Ik ga <strong>morgen</strong> <strong>naar de bioscoop</strong> <strong>graag</strong>.</td>
                <td class="px-4 py-3 text-sm text-xs">Grammaticaal correct, maar klinkt wat stroef.</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold text-emerald-600">T - W - P (Natuurlijk)</td>
                <td class="px-4 py-3 text-sm">Ik ga <strong>morgen</strong> <strong>graag</strong> <strong>naar de bioscoop</strong>.</td>
                <td class="px-4 py-3 text-sm text-xs">Tijd ➔ Wijze ➔ Plaats (Dit klinkt het meest vloeiend).</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50">
                <td class="px-4 py-3 text-sm font-semibold text-rose-600">Fout</td>
                <td class="px-4 py-3 text-sm">Ik ga graag naar de bioscoop morgen.</td>
                <td class="px-4 py-3 text-sm text-xs">De tijd hoort vooraan, niet achteraan.</td>
              </tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      title: "Deel 5: De Grootste 'Pas Op' Valkuilen ⚠️",
      body: `
        <p>Dit zijn de fouten die bijna elke cursist maakt. Let extreem goed op het verschil met andere zinsdelen!</p>
        
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-gradient-to-r from-rose-600 to-pink-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Vergelijking</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Zin</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Analyse & Test</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">BWB vs. Lijdend Voorwerp</td>
                <td class="px-4 py-3 text-sm">Ik lees <strong>'s avonds</strong>.</td>
                <td class="px-4 py-3 text-sm text-xs"><strong>BWB van Tijd.</strong> Vraag: <em>Wanneer lees ik?</em> (Niet: Wat lees ik?).</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">BWB vs. Voorzetselvoorwerp</td>
                <td class="px-4 py-3 text-sm">Ik wacht <strong>bij de halte</strong>.</td>
                <td class="px-4 py-3 text-sm text-xs"><strong>BWB van Plaats.</strong> 'Wachten bij' is géén vaste combinatie, het is vrij toe te voegen. (Vgl: 'wachten op' is een vv).</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">BWB vs. NDG</td>
                <td class="px-4 py-3 text-sm">Hij is <strong>ziek in bed</strong>.</td>
                <td class="px-4 py-3 text-sm text-xs"><strong>BWB van Plaats.</strong> 'In bed' is de locatie, géén eigenschap van het onderwerp.</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30">
                <td class="px-4 py-3 text-sm font-semibold">BWB vs. Bijvoeglijke Bep.</td>
                <td class="px-4 py-3 text-sm">De auto rijdt <strong>snel</strong> voorbij.</td>
                <td class="px-4 py-3 text-sm text-xs"><strong>BWB van Wijze.</strong> Het staat los in de zin bij het werkwoord, niet vóór een zelfstandig naamwoord.</td>
              </tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      title: "Deel 6: Vooropplaatsing en Inversie 🔄",
      body: `
        <p>Je kunt elke bwb <strong>voorop</strong> in de zin plaatsen om er <strong>nadruk</strong> op te leggen. Maar let op: dan treedt er <strong>inversie</strong> op (het onderwerp en de persoonsvorm wisselen van plek).</p>
        
        <div class="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-indigo-700 dark:text-indigo-300 mb-2">🏆 PRO REGEL 4: Inversie bij Vooropplaatsing</h3>
          <p class="text-slate-700 dark:text-slate-300">Staat de bwb op plek 1? Dan staat de persoonsvorm op plek 2, en het onderwerp op plek 3.</p>
        </div>

        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-gradient-to-r from-purple-600 to-pink-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Normale zin</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Vooropplaatsing (Nadruk)</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm">Ik ga <strong>morgen</strong> naar Parijs.</td>
                <td class="px-4 py-3 text-sm font-bold text-emerald-600"><strong>Morgen</strong> ga ik naar Parijs.</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm">Zij woont <strong>in Amsterdam</strong>.</td>
                <td class="px-4 py-3 text-sm font-bold text-emerald-600"><strong>In Amsterdam</strong> woont zij.</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50">
                <td class="px-4 py-3 text-sm">Hij werkt <strong>hard</strong>.</td>
                <td class="px-4 py-3 text-sm font-bold text-emerald-600"><strong>Hard</strong> werkt hij!</td>
              </tr>
            </tbody>
          </table>
        </div>
      `
    }
  ],
  rulesTable: [
    {
      rule: "De Definitie van de BWB",
      structure: "Een bwb geeft omstandigheden weer (tijd, plaats, wijze) en is géén onderwerp, pv, lv of mv. Je kunt het weglaten.",
      example: "Jan leest morgen in de tuin. ('morgen' en 'in de tuin' zijn bwb's).",
      usage: "Gebruik de vraag-formule om bwb's te onderscheiden van lijdende of meewerkende voorwerpen."
    },
    {
      rule: "De Vraag-Formule",
      structure: "Tijd = Wanneer/Hoe lang? Plaats = Waar/Waarheen? Wijze = Hoe?",
      example: "Wanneer werk ik? -> morgen (BWB van tijd).",
      usage: "Stel altijd de vraag met de persoonsvorm en het onderwerp om het juiste zinsdeel te vinden."
    },
    {
      rule: "De TPW-Volgorde",
      structure: "Bij meerdere bwb's is de volgorde: Tijd - Plaats - Wijze (of Tijd - Wijze - Plaats).",
      example: "Ik ga morgen graag naar de bioscoop. (Tijd - Wijze - Plaats).",
      usage: "Tijd staat in het Nederlands bijna altijd vooraan in de reeks bwb's."
    },
    {
      rule: "Inversie bij Vooropplaatsing",
      structure: "Begint de zin met een bwb? Dan wisselen onderwerp en persoonsvorm van plek.",
      example: "In de tuin speelden de kinderen. (Niet: In de tuin de kinderen speelden).",
      usage: "Dit is essentieel voor een natuurlijke zinsbouw en het leggen van nadruk."
    }
  ],
  callouts: [
    { type: "remember", label: "🏆 PRO REGEL 1", text: "Een bwb is géén onderwerp, pv, lv of mv. Het is een zelfstandig zinsdeel dat je kunt weglaten." },
    { type: "remember", label: "🏆 PRO REGEL 2", text: "De Vraag-Formule: [Vraagwoord] + Persoonsvorm + Onderwerp? Het antwoord is de bwb." },
    { type: "remember", label: "🏆 PRO REGEL 3", text: "De TPW-Regel: Tijd staat ALTIJD vooraan, gevolgd door Plaats en Wijze (of Wijze en Plaats)." },
    { type: "remember", label: "⚠️ PAS OP 1", text: "Verwar een BWB van plaats niet met een Voorzetselvoorwerp. Een vv hoort VAST bij het werkwoord (wachten op), een bwb is vrij toe te voegen." },
    { type: "remember", label: "⚠️ PAS OP 2", text: "Een BWB van wijze staat los in de zin bij het werkwoord. Een bijvoeglijke bepaling staat vóór een zelfstandig naamwoord en krijgt vaak een -e." },
    { type: "tip", label: "💡 Pro-tip", text: "Als je twijfelt of een zinsdeel een bwb is, probeer het dan weg te laten. Blijft de zin grammaticaal kloppen? Dan is het waarschijnlijk een bwb!" }
  ],
  commonMistakes: [
    { incorrect: "Ik lees een boek. (aangezien als BWB van tijd)", correct: "Ik lees 's avonds. (BWB van tijd).", explanation: "'Een boek' is het lijdend voorwerp (Wat lees ik?). ''s Avonds' is de bwb van tijd (Wanneer lees ik?)." },
    { incorrect: "Ik ga naar school morgen.", correct: "Ik ga morgen naar school.", explanation: "De tijd ('morgen') hoort in het Nederlands vooraan de reeks bijwoordelijke bepalingen te staan." },
    { incorrect: "Morgen ik ga naar school.", correct: "Morgen ga ik naar school.", explanation: "Als je een bwb voorop plaatst, treedt er inversie op: de persoonsvorm komt vóór het onderwerp." },
    { incorrect: "Ik wacht bij de bus. (als je de bus verwacht)", correct: "Ik wacht op de bus.", explanation: "'Wachten op' is een vaste combinatie (voorzetselvoorwerp). 'Wachten bij' is een locatie (bwb van plaats)." },
    { incorrect: "De hard auto.", correct: "De harde auto.", explanation: "Dit is een bijvoeglijke bepaling bij een zelfstandig naamwoord, geen bwb van wijze. Een bijvoeglijke bepaling krijgt een -e." }
  ],
  review: [
    "✅ BWB = geeft omstandigheden weer (tijd, plaats, wijze).",
    "✅ Je kunt een bwb weglaten zonder dat de zin grammaticaal kapot gaat.",
    "✅ Vraag-formule: Wanneer? (Tijd), Waar? (Plaats), Hoe? (Wijze).",
    "✅ TPW-volgorde: Tijd staat vooraan, dan Plaats en Wijze.",
    "✅ BWB vs. Voorzetselvoorwerp: Vaste combinatie = vv, vrij toe te voegen = bwb.",
    "✅ Vooropplaatsing van een bwb veroorzaakt inversie (pv vóór onderwerp)."
  ],
  qa: [
    {
      question: "Hoe vind je een bijwoordelijke bepaling van tijd in een zin?",
      answer: "Je stelt de vraag: 'Wanneer?', 'Hoe lang?' of 'Hoe vaak?' + persoonsvorm + onderwerp. Bijvoorbeeld: 'Wanneer werk ik?' Het antwoord (bijv. 'morgen' of 'twee uur') is de bijwoordelijke bepaling van tijd."
    },
    {
      question: "Wat is de meest natuurlijke volgorde als je tijd, plaats en wijze in één zin hebt?",
      answer: "De meest natuurlijke volgorde in het Nederlands is Tijd - Wijze - Plaats (of Tijd - Plaats - Wijze). Het allerbelangrijkste is dat de Tijd vooraan staat. Bijvoorbeeld: 'Ik ga morgen (tijd) graag (wijze) naar de bioscoop (plaats).'"
    },
    {
      question: "Wat gebeurt er grammaticaal als je een zin begint met een bijwoordelijke bepaling van plaats (bijv. 'In de tuin...')?",
      answer: "Er treedt inversie op. De persoonsvorm blijft op plek 2 staan, en het onderwerp verhuist naar plek 3. Bijvoorbeeld: 'In de tuin speelden de kinderen.' (Niet: 'In de tuin de kinderen speelden')."
    },
    {
      question: "Hoe test je of 'op de bus' in 'Ik wacht op de bus' een bijwoordelijke bepaling of een voorzetselvoorwerp is?",
      answer: "Je test of het voorzetsel vast hoort bij het werkwoord. 'Wachten op' is een vaste combinatie (je wacht op iets/iemand), dus 'op de bus' is een voorzetselvoorwerp. Als het een bwb van plaats was (zoals 'Ik wacht bij de halte'), zou 'bij' niet vast aan 'wachten' geplakt zijn en kon je het weglaten."
    }
  ]
};