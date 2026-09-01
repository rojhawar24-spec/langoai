import type { GrammarLesson } from "../../types";

export const stapelwerkwoorden: GrammarLesson = {
  id: "nl-stapelwerkwoorden-1",
  title: "Stapelwerkwoorden: De 'Had Moeten Kunnen Zeggen' Masterclass",
  level: 3,
  topic: "Grammatica & Zinsbouw",
  body: "Beheers meervoudige infinitiefconstructies volledig: de IPP-regel, de beruchte woordvolgorde in bijzinnen, de 'hebben/zijn'-dwang, en scheidbare werkwoorden in de stapel.",
  overview:
    "Dit is de meest uitgebreide, visueel schitterende en waarschuwing-rijke gids over Stapelwerkwoorden (Infinitivus pro Participio) in het Nederlands. Je leert hoe je 3 of 4 werkwoorden perfect achter elkaar plaatst, doorziet de valkuilen van de 'Yoda'-volgorde, en beheerst de geheime regel dat modale werkwoorden altijd 'hebben' forceren. Met prachtige tabellen, strikte PRO-regels en 4 complexe C2-oefenvragen word je een absolute meester in de meest complexe werkwoordconstructies van de Nederlandse taal!",
  anchorSectionId: "wat-zijn-stapelwerkwoorden",
  exercises: [],
  timeExpressionsLabel: "De Opbouw van de Stapel 🪜",
  timeExpressions: {
    header: "Positie | Werkwoord | Functie | Vorm",
    rows: [
      ["1️⃣ **Eerste**", "had / heeft", "Hulpwerkwoord van tijd", "Vervoegd"],
      ["2️⃣ **Tweede**", "moeten", "Modaal werkwoord 1", "Infinitief (IPP)"],
      ["3️⃣ **Derde**", "kunnen", "Modaal werkwoord 2", "Infinitief (IPP)"],
      ["4️⃣ **Laatste**", "zeggen", "Hoofdwerkwoord", "Infinitief"]
    ]
  },
  details: [
    {
      title: "Deel 1: Wat zijn Stapelwerkwoorden? 🏗️",
      body: `
        <p>In het Nederlands kunnen we meerdere werkwoorden achter elkaar "stapelen" aan het einde van een zin. Dit gebeurt wanneer een <strong>voltooide tijd</strong> (VTT of VVT) wordt gecombineerd met <strong>één of meer modale werkwoorden</strong> (willen, kunnen, moeten, mogen, zullen).</p>
        <p class="text-sm text-slate-700 dark:text-slate-300 mb-4">Het grammaticale fenomeen dat hier optreedt, heet <strong>Infinitivus pro Participio (IPP)</strong>. Dit is Latijn voor: <em>"De infinitief in plaats van het voltooid deelwoord"</em>.</p>
        
        <div class="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-emerald-700 dark:text-emerald-300 mb-2">🏆 PRO REGEL 1: De IPP-Regel</h3>
          <p class="text-slate-700 dark:text-slate-300">Als een modaal werkwoord in een voltooide tijd wordt gebruikt <strong>samen met een ander werkwoord</strong>, verliest het modale werkwoord zijn voltooid deelwoord (geen <em>gemoeten, gekund, gewild</em>). In plaats daarvan blijft het in de <strong>infinitief</strong>.</p>
        </div>

        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-gradient-to-r from-indigo-600 to-purple-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Fout (Met voltooid deelwoord) ❌</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Correct (Met IPP / Infinitief) ✅</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm text-rose-600">Ik heb het <strong>gemoeten</strong> doen.</td>
                <td class="px-4 py-3 text-sm text-emerald-600 font-bold">Ik heb het <strong>moeten</strong> doen.</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm text-rose-600">Hij heeft het <strong>gekund</strong> zien.</td>
                <td class="px-4 py-3 text-sm text-emerald-600 font-bold">Hij heeft het <strong>kunnen</strong> zien.</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50">
                <td class="px-4 py-3 text-sm text-rose-600">Zij had het <strong>gewild</strong> zeggen.</td>
                <td class="px-4 py-3 text-sm text-emerald-600 font-bold">Zij had het <strong>willen</strong> zeggen.</td>
              </tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      title: "Deel 2: De Woordvolgorde: De Grootste Nightmare 📏",
      body: `
        <p>Waar plaats je deze stapel in een <strong>bijzin</strong> (een zin die begint met <em>dat, omdat, als</em>)? Dit is waar 99% van de mensen de fout in gaat.</p>
        
        <div class="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-indigo-700 dark:text-indigo-300 mb-2">🏆 PRO REGEL 2: De Moderne Bijzin-Regel</h3>
          <p class="text-slate-700 dark:text-slate-300">In een bijzin met 3 of meer werkwoorden, staat het <strong>vervoegde hulpwerkwoord</strong> (<em>heeft/had</em>) <strong>NIET</strong> helemaal achteraan. Het springt naar vóór de groep infinitieven.</p>
          <p class="text-slate-700 dark:text-slate-300 font-mono text-sm mt-2">[Vervoegd Hulpwerkwoord] + [Modaal/Modalen] + [Hoofdwerkwoord]</p>
        </div>

        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-gradient-to-r from-teal-600 to-cyan-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Aantal WW</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Voorbeeldzin (Bijzin)</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Analyse</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">2 werkwoorden</td>
                <td class="px-4 py-3 text-sm">...dat hij het <strong>heeft gezegd</strong>.</td>
                <td class="px-4 py-3 text-sm text-xs">Hulpwerkwoord + Voltooid Deelwoord</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">3 werkwoorden</td>
                <td class="px-4 py-3 text-sm">...dat hij het <strong>heeft moeten zeggen</strong>.</td>
                <td class="px-4 py-3 text-sm text-xs">Hulpwerkwoord + Modaal (inf) + Hoofdwerkwoord (inf)</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50">
                <td class="px-4 py-3 text-sm font-semibold">4 werkwoorden</td>
                <td class="px-4 py-3 text-sm font-bold text-emerald-600">...dat hij het <strong>had moeten kunnen zeggen</strong>.</td>
                <td class="px-4 py-3 text-sm text-xs">Hulpwerkwoord + Modaal 1 + Modaal 2 + Hoofdwerkwoord</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="bg-rose-50 dark:bg-rose-900/20 border-l-4 border-rose-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-rose-700 dark:text-rose-300 mb-2">🚨 PAS OP! DE "YODA"-VALKUIL</h3>
          <p class="text-sm text-slate-700 dark:text-slate-300 mb-2">In zeer oude, hyper-formele grammatica leerde men soms dat het hulpwerkwoord <em>helemaal</em> achteraan moest: <em>"...dat hij het moeten kunnen zeggen had."</em></p>
          <p class="text-sm text-slate-700 dark:text-slate-300"><strong>Dit klinkt in modern standaard Nederlands extreem onnatuurlijk, stroef en wordt als fout beschouwd.</strong> De enige geaccepteerde, professionele volgorde is: <strong>had moeten kunnen zeggen</strong>.</p>
        </div>
      `
    },
    {
      title: "Deel 3: De 'Zijn' vs 'Hebben' Valkuil bij Modalen ⚔️",
      body: `
        <p>Dit is de <strong>allergeheimste en meest gemaakte fout</strong> op C1/C2-niveau.</p>
        <p class="text-sm text-slate-700 dark:text-slate-300 mb-4">Normaal gesproken kiezen we <em>hebben</em> of <em>zijn</em> op basis van het hoofdwerkwoord (verplaatsing = <em>zijn</em>). <strong>MAAR:</strong> Zodra er een <strong>modaal werkwoord</strong> bij komt kijken, verandert de regel!</p>
        
        <div class="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-emerald-700 dark:text-emerald-300 mb-2">🏆 PRO REGEL 3: De Modaal-Dominator Regel</h3>
          <p class="text-slate-700 dark:text-slate-300">Als er een <strong>modaal werkwoord</strong> in de stapel zit, is het hulpwerkwoord <strong>ALTIJD "HEBBEN"</strong>, zelfs als het hoofdwerkwoord normaal gesproken "zijn" zou krijgen!</p>
        </div>

        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-gradient-to-r from-amber-600 to-orange-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Hoofdwerkwoord (zonder modaal)</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Met Modaal Werkwoord</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Uitleg</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm">Hij <strong>is</strong> gevallen.</td>
                <td class="px-4 py-3 text-sm font-bold text-emerald-600">Hij <strong>heeft</strong> kunnen vallen.</td>
                <td class="px-4 py-3 text-sm text-xs">De modaal 'kunnen' forceert 'hebben'.</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm">Zij <strong>is</strong> naar huis gegaan.</td>
                <td class="px-4 py-3 text-sm font-bold text-emerald-600">Zij <strong>heeft</strong> naar huis willen gaan.</td>
                <td class="px-4 py-3 text-sm text-xs">De modaal 'willen' forceert 'hebben'.</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50">
                <td class="px-4 py-3 text-sm">Het water <strong>is</strong> gestegen.</td>
                <td class="px-4 py-3 text-sm font-bold text-emerald-600">Het water <strong>heeft</strong> kunnen stijgen.</td>
                <td class="px-4 py-3 text-sm text-xs">De modaal 'kunnen' forceert 'hebben'.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="bg-rose-50 dark:bg-rose-900/20 border-l-4 border-rose-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-rose-700 dark:text-rose-300 mb-2">🚨 PAS OP! DE "IS WILLER GAAN" FOUT</h3>
          <p class="text-sm text-slate-700 dark:text-slate-300">Zeg <strong>NOOIT</strong>: <em>"Hij is naar huis willen gaan."</em> Dit is een directe vertaling uit het Duits of een dialectfout. Het is in standaard Nederlands <strong>100% fout</strong>. Het moet zijn: <em>"Hij <strong>heeft</strong> naar huis willen gaan."</em></p>
        </div>
      `
    },
    {
      title: "Deel 4: Stapelwerkwoorden met Scheidbare Werkwoorden 🧩",
      body: `
        <p>Wat gebeurt er als het hoofdwerkwoord scheidbaar is (bijv. <em>meenemen, opbellen</em>)? Het scheidbare voorvoegsel plakt vast aan de infinitief van het hoofdwerkwoord, en de hele stapel blijft intact.</p>
        
        <div class="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-indigo-700 dark:text-indigo-300 mb-2">🏆 PRO REGEL 4</h3>
          <p class="text-slate-700 dark:text-slate-300">Bij een scheidbaar werkwoord in een stapel, blijft het werkwoord <strong>aan elkaar</strong> (<em>opbellen</em>, niet <em>op te bellen</em>), direct na de modale werkwoorden.</p>
        </div>

        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-gradient-to-r from-purple-600 to-pink-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Hoofdzin</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Bijzin met Stapelwerkwoorden</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm">Ik <strong>bel</strong> hem <strong>op</strong>.</td>
                <td class="px-4 py-3 text-sm">...dat ik hem <strong>heb</strong> moeten <strong>opbellen</strong>.</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm">Zij <strong>neemt</strong> de documenten <strong>mee</strong>.</td>
                <td class="px-4 py-3 text-sm">...dat zij de documenten <strong>had</strong> moeten <strong>meenemen</strong>.</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50">
                <td class="px-4 py-3 text-sm">Hij <strong>ruimt</strong> de kamer <strong>op</strong>.</td>
                <td class="px-4 py-3 text-sm">...dat hij de kamer <strong>heeft</strong> willen <strong>opruimen</strong>.</td>
              </tr>
            </tbody>
          </table>
        </div>
      `
    }
  ],
  rulesTable: [
    {
      rule: "De IPP-Regel",
      structure: "Modaal werkwoord in voltooide tijd + ander werkwoord = modaal blijft in de infinitief.",
      example: "Ik heb het moeten doen. (Niet: gemoeten doen).",
      usage: "Dit voorkomt de opeenstapeling van meerdere 'ge-' voorvoegsels, wat de taal onuitspreekbaar zou maken."
    },
    {
      rule: "Woordvolgorde in de bijzin",
      structure: "[Vervoegd Hulpwerkwoord] + [Modaal/Modalen] + [Hoofdwerkwoord].",
      example: "...dat hij het had moeten kunnen zeggen.",
      usage: "Plaats het vervoegde hulpwerkwoord (had/heeft) vóór de groep infinitieven, niet helemaal achteraan."
    },
    {
      rule: "De Modaal-Dominator Regel",
      structure: "Aanwezigheid van een modaal werkwoord forceert ALTIJD het hulpwerkwoord 'hebben'.",
      example: "Hij heeft kunnen vallen. (Niet: is kunnen vallen).",
      usage: "Dit is een absolute regel in het standaard Nederlands, ongeacht of het hoofdwerkwoord normaal 'zijn' zou krijgen."
    },
    {
      rule: "Scheidbare werkwoorden in de stapel",
      structure: "Het scheidbare werkwoord blijft in de stapel aan elkaar geschreven.",
      example: "...dat hij het heeft willen opbellen. (Niet: op heeft willen bellen).",
      usage: "De 'te' of de modale werkwoorden komen vóór het complete, aan elkaar geschreven scheidbare werkwoord."
    }
  ],
  callouts: [
    { type: "remember", label: "🏆 PRO REGEL 1", text: "De IPP-Regel: Een modaal werkwoord in een stapel blijft in de infinitief (geen 'gemoeten' of 'gekund')." },
    { type: "remember", label: "🏆 PRO REGEL 2", text: "Woordvolgorde in de bijzin: Vervoegd hulpwerkwoord + Modaal/Modalen + Hoofdwerkwoord." },
    { type: "remember", label: "🏆 PRO REGEL 3", text: "De Modaal-Dominator Regel: Een modaal werkwoord forceert ALTIJD het hulpwerkwoord 'hebben', zelfs bij verplaatsing." },
    { type: "remember", label: "⚠️ PAS OP 1", text: "Zeg NOOIT 'hij is kunnen vallen'. Het moet zijn: 'hij heeft kunnen vallen'." },
    { type: "remember", label: "⚠️ PAS OP 2", text: "Vermijd 'Yoda'-volgorde ('...moeten zeggen had'). Plaats het vervoegde hulpwerkwoord vóór de infinitieven." },
    { type: "tip", label: "💡 Pro-tip", text: "Houd het bij maximaal 4 werkwoorden in een stapel. Meer dan dat wordt onleesbaar en stijf." }
  ],
  commonMistakes: [
    { incorrect: "...dat hij het had gemoeten zeggen.", correct: "...dat hij het had moeten zeggen.", explanation: "De IPP-regel: een modaal werkwoord in een stapel krijgt geen 'ge-' en blijft in de infinitief." },
    { incorrect: "...dat hij het moeten kunnen zeggen had.", correct: "...dat hij het had moeten kunnen zeggen.", explanation: "In modern standaard Nederlands staat het vervoegde hulpwerkwoord vóór de groep infinitieven, niet helemaal achteraan." },
    { incorrect: "Hij is naar huis willen gaan.", correct: "Hij heeft naar huis willen gaan.", explanation: "De aanwezigheid van het modale werkwoord 'willen' forceert het hulpwerkwoord 'hebben', ondanks de verplaatsing." },
    { incorrect: "...dat hij het had moeten op bellen.", correct: "...dat hij het had moeten opbellen.", explanation: "In een stapelconstructie blijft het scheidbare werkwoord aan elkaar geschreven achter de modale werkwoorden." },
    { incorrect: "...dat hij het had moeten kunnen willen zeggen.", correct: "...dat hij het had willen kunnen zeggen.", explanation: "Vermijd meer dan 2 modale werkwoorden. Het wordt onleesbaar. Houd het bij maximaal 4 werkwoorden totaal." }
  ],
  review: [
    "✅ Stapelwerkwoorden = voltooide tijd + 1 of meer modale werkwoorden.",
    "✅ IPP-regel: modaal werkwoord blijft in de infinitief (geen voltooid deelwoord).",
    "✅ Woordvolgorde bijzin: had/heeft + modaal + hoofdwerkwoord.",
    "✅ Modaal werkwoord forceert ALTIJD het hulpwerkwoord 'hebben'.",
    "✅ Scheidbare werkwoorden blijven in de stapel aan elkaar geschreven.",
    "✅ Vermijd 'Yoda'-volgorde; plaats het vervoegde hulpwerkwoord niet helemaal achteraan."
  ],
  qa: [
    {
      question: "De IPP- en Woordvolgorde Test: Een student schrijft de volgende zin in een academisch essay: 'De getuige verklaarde dat hij de dader niet had gekund herkennen, omdat het te donker was.' Er zitten twee ernstige grammaticale fouten in de werkwoordelijke stapel. Wat zijn ze, en hoe moet de zin wél?",
      answer: "1. Fout 1 (IPP): 'gekund' moet 'kunnen' zijn. Een modaal werkwoord in een stapel krijgt geen 'ge-'. 2. Fout 2 (Woordvolgorde): In de bijzin moet het vervoegde hulpwerkwoord ('had') vóór de infinitieven staan. Correcte zin: 'De getuige verklaarde dat hij de dader niet had kunnen herkennen, omdat het te donker was.'"
    },
    {
      question: "De 'Zijn/Hebben' Dwang: Vul het juiste hulpwerkwoord in (is of heeft) en leg uit waarom, ondanks dat het hoofdwerkwoord normaal gesproken het andere hulpwerkwoord zou krijgen. 'De piloot zei dat hij net op tijd ___ (landen) op de luchthaven.' (Gebruik het modale werkwoord 'kunnen' in de VTT).",
      answer: "'De piloot zei dat hij net op tijd heeft kunnen landen op de luchthaven.' Uitleg: Het hoofdwerkwoord 'landen' (met verplaatsing) zou normaal 'zijn' krijgen (hij is geland). Maar door de toevoeging van het modale werkwoord 'kunnen', forceert de Modaal-Dominator Regel het gebruik van 'hebben'. 'Hij is kunnen landen' is grammaticaal onmogelijk in standaard Nederlands."
    },
    {
      question: "De Scheidbare Stapel: Maak van de volgende losse elementen één correcte, vloeiende bijzin beginnend met 'Omdat'. Onderwerp: wij, Modaal: moeten (in de VVT), Hoofdwerkwoord: afmaken (scheidbaar), Lijdend voorwerp: het project.",
      answer: "'Omdat wij het project hadden moeten afmaken.' Uitleg: 1. Onderwerp 'wij'. 2. Lijdend voorwerp 'het project'. 3. Vervoegd hulpwerkwoord 'hadden'. 4. Modaal 'moeten' (infinitief, IPP). 5. Hoofdwerkwoord 'afmaken' (scheidbaar werkwoord blijft in de stapel aan elkaar geschreven)."
    },
    {
      question: "De Ultieme Ontwarring: De volgende zin is een woordensalade. Zet de woorden in de juiste, grammaticaal perfecte volgorde voor een formele bijzin. Woorden: [dat] [de] [vergadering] [verplaatst] [had] [moeten] [worden]",
      answer: "'...dat de vergadering had moeten verplaatst worden.' Uitleg: Dit is een passieve stapelconstructie. 1. Voegwoord: dat. 2. Onderwerp: de vergadering. 3. Vervoegd hulpwerkwoord (VVT): had. 4. Modaal werkwoord (IPP): moeten. 5. Voltooid deelwoord van hoofdwerkwoord: verplaatst. 6. Infinitief van passief hulpwerkwoord: worden."
    }
  ]
};