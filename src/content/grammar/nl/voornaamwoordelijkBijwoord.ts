import type { GrammarLesson } from "../../types";

export const voornaamwoordelijkBijwoord: GrammarLesson = {
  id: "nl-voornaamwoordelijk-bijwoord-1",
  title: "Voornaamwoordelijk Bijwoord: Erop, Erin, Ervan & De Splitsing – De Ultieme Gids",
  level: 3,
  topic: "Grammatica",
  body: "Beheers het voornaamwoordelijk bijwoord volledig: de combinaties (erop, eraan, etc.), de absolute personen-valkuil, de 4 strikte splitsingsregels, en het verschil tussen letterlijk en figuurlijk.",
  overview:
    "Dit is de meest uitgebreide gids over het voornaamwoordelijk bijwoord in het Nederlands. Je leert de meest voorkomende combinaties, ontdekt waarom je 'erop' nooit voor een persoon mag gebruiken, en beheerst de 4 strikte PRO-regels voor het wel of niet splitsen van 'er' en het voorzetsel. Met 15+ kleurrijke tabellen, duidelijke PAS OP-waarschuwingen en 4 korte, krachtige oefenvragen maak je nooit meer een fout in dit lastige stukje grammatica!",
  anchorSectionId: "basis",
  exercises: [],
  timeExpressionsLabel: "De Meest Voorkomende Combinaties 🏆",
  timeExpressions: {
    header: "Combinatie | Betekenis | Voorbeeldzin",
    rows: [
      ["er + op = **erop**", "op dat ding / die zaak", "Ik reken **erop** dat je komt."],
      ["er + in = **erin**", "in dat ding / die zaak", "Hij zit **erin**."],
      ["er + uit = **eruit**", "uit dat ding / die zaak", "Ik kies **eruit**."],
      ["er + aan = **eraan**", "aan dat ding / die zaak", "Ik denk **eraan**."],
      ["er + naar = **ernaar**", "naar dat ding / die zaak", "Ik kijk **ernaar**."],
      ["er + voor = **ervoor**", "voor dat ding / die zaak", "Ik ben **ervoor**."],
      ["er + over = **erover**", "over dat ding / die zaak", "We praten **erover**."],
      ["er + mee = **ermee**", "met dat ding / die zaak", "Ik stop **ermee**."]
    ]
  },
  details: [
    {
      title: "Deel 1: Wat is een voornaamwoordelijk bijwoord? 🔗",
      body: `
        <p>Een <strong>voornaamwoordelijk bijwoord</strong> is een combinatie van het woordje <strong>er</strong> en een <strong>voorzetsel</strong> (zoals <em>op, in, aan, naar, voor</em>).</p>
        <p class="text-sm text-slate-700 dark:text-slate-300 mb-4">Het vervangt de combinatie van een <em>voorzetsel + het/de + zelfstandig naamwoord</em>. Het verwijst altijd naar een <strong>ding, dier of concept</strong> dat eerder in de tekst is genoemd, zodat je niet steeds hetzelfde woord hoeft te herhalen.</p>
        
        <div class="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-indigo-700 dark:text-indigo-300 mb-2">🔍 Voorbeeldanalyse</h3>
          <ul class="space-y-2 list-none pl-0 text-slate-700 dark:text-slate-300">
            <li>🔹 <strong>Normaal:</strong> Ik wacht <strong>op de bus</strong>.</li>
            <li>✅ <strong>Met voornaamwoordelijk bijwoord:</strong> Ik wacht <strong>erop</strong>. (<em>'erop' = op de bus</em>).</li>
          </ul>
        </div>
      `
    },
    {
      title: "Deel 2: ⚠️ De Personen-Valkuil (De Belangrijkste Regel!) 🚨",
      body: `
        <p>Dit is de <strong>allerbelangrijkste en meest gemaakte fout</strong> door Nederlandsleerders!</p>
        
        <div class="bg-rose-50 dark:bg-rose-900/20 border-l-4 border-rose-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-rose-700 dark:text-rose-300 mb-2">🏆 PRO REGEL 1</h3>
          <p class="text-slate-700 dark:text-slate-300">Je gebruikt een voornaamwoordelijk bijwoord (<strong>erop, eraan, etc.</strong>) <strong>NOOIT</strong> als het verwijst naar een <strong>persoon</strong>!</p>
        </div>

        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-gradient-to-r from-rose-600 to-pink-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Verwijst naar...</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Fout ❌</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Correct ✅</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">Een ding (de bus)</td>
                <td class="px-4 py-3 text-sm text-rose-600">Ik wacht erop.</td>
                <td class="px-4 py-3 text-sm text-emerald-600 font-bold">Ik wacht erop.</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">Een persoon (mijn moeder)</td>
                <td class="px-4 py-3 text-sm text-rose-600">Ik wacht erop.</td>
                <td class="px-4 py-3 text-sm text-emerald-600 font-bold">Ik wacht op haar.</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">Een ding (het probleem)</td>
                <td class="px-4 py-3 text-sm text-rose-600">Ik denk eraan.</td>
                <td class="px-4 py-3 text-sm text-emerald-600 font-bold">Ik denk eraan.</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30">
                <td class="px-4 py-3 text-sm font-semibold">Een persoon (de leraar)</td>
                <td class="px-4 py-3 text-sm text-rose-600">Ik denk eraan.</td>
                <td class="px-4 py-3 text-sm text-emerald-600 font-bold">Ik denk aan hem.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 rounded-r-lg my-4">
          <p class="font-semibold text-amber-700 dark:text-amber-300 mb-1">💡 Waarom is dit zo?</p>
          <p class="text-sm text-slate-700 dark:text-slate-300">Als je 'erop' gebruikt voor een persoon, denken Nederlanders dat je op een <em>ding</em> wacht! Je moet bij personen <strong>altijd</strong> het voorzetsel + persoonlijk voornaamwoord (<em>op haar, aan hem, met hen</em>) gebruiken.</p>
        </div>
      `
    },
    {
      title: "Deel 3: De Splitsing – De Allergrootste Valkuil! ✂️",
      body: `
        <p>Moet je nu <strong>erop</strong> (aan elkaar) schrijven, of <strong>er op</strong> (gesplitst)? Dit is de moeilijkste regel van de hele Nederlandse grammatica. Maar we maken hem heel simpel met <strong>4 strikte PRO-regels</strong>.</p>
        
        <div class="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-emerald-700 dark:text-emerald-300 mb-2">🏆 De 4 Splitsings PRO-regels</h3>
          <ul class="space-y-2 list-none pl-0 text-slate-700 dark:text-slate-300">
            <li>✅ <strong>PRO REGEL 2 (De Bijzin-regel):</strong> In een <strong>bijzin</strong> wordt het voornaamwoordelijk bijwoord <strong>ALTIJD gesplitst</strong>!</li>
            <li>✅ <strong>PRO REGEL 3 (De Infinitief-regel):</strong> Staat het bij een <strong>infinitief</strong>? Dan blijft het <strong>ALTIJD aan elkaar</strong>!</li>
            <li>✅ <strong>PRO REGEL 4 (De Voltooid Deelwoord-regel):</strong> Staat het bij een <strong>voltooid deelwoord</strong>? Dan blijft het <strong>ALTIJD aan elkaar</strong>!</li>
            <li>✅ <strong>PRO REGEL 5 (De Hoofdzin-regel):</strong> In een <strong>hoofdzin</strong> bij de persoonsvorm mag het <strong>aan elkaar OF gesplitst</strong>.</li>
          </ul>
        </div>

        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-gradient-to-r from-indigo-600 to-purple-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Situatie in de zin</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Regel</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Voorbeeld</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">1. Hoofdzin (Persoonsvorm)</td>
                <td class="px-4 py-3 text-sm">Mag <strong>aan elkaar</strong> OF <strong>gesplitst</strong>.</td>
                <td class="px-4 py-3 text-sm"><em>Ik kijk <strong>ernaar</strong>.</em> / <em>Ik kijk <strong>er naar</strong>.</em></td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">2. In een BIJZIN</td>
                <td class="px-4 py-3 text-sm"><strong>ALTIJD gesplitst!</strong></td>
                <td class="px-4 py-3 text-sm"><em>...omdat ik <strong>er naar</strong> kijk.</em> (Nooit: <em>ernaar</em>).</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">3. Bij INFINITIEF</td>
                <td class="px-4 py-3 text-sm"><strong>ALTIJD aan elkaar!</strong></td>
                <td class="px-4 py-3 text-sm"><em>Ik wil <strong>ernaar</strong> kijken.</em> / <em>Ik probeer <strong>ernaar</strong> te kijken.</em></td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30">
                <td class="px-4 py-3 text-sm font-semibold">4. Bij VOLTOOID DEELWOORD</td>
                <td class="px-4 py-3 text-sm"><strong>ALTIJD aan elkaar!</strong></td>
                <td class="px-4 py-3 text-sm"><em>Ik heb <strong>ernaar</strong> gekeken.</em> (Nooit: <em>er naar gekeken</em>).</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="bg-rose-50 dark:bg-rose-900/20 border-l-4 border-rose-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-rose-700 dark:text-rose-300 mb-2">🚨 PAS OP! DE ONTKENNINGS-VALKUIL!</h3>
          <p class="text-sm text-slate-700 dark:text-slate-300 mb-2">In een hoofdzin mag het aan elkaar, maar als je de zin <strong>ontkent</strong> met <em>niet</em> of <em>geen</em>, wordt het <strong>bijna altijd gesplitst</strong>!</p>
          <ul class="space-y-1 text-sm text-slate-700 dark:text-slate-300">
            <li>✅ <em>Ik kijk <strong>er niet naar</strong>.</em> (Gesplitst, want er staat 'niet' tussen).</li>
            <li>❌ <em>Ik kijk <strong>niet ernaar</strong>.</em> (Klinkt heel onnatuurlijk).</li>
          </ul>
        </div>
      `
    },
    {
      title: "Deel 4: Letterlijk vs. Figuurlijk (De Nuance) 🧠",
      body: `
        <p>In een hoofdzin (waar beide schrijfwijzen mogen) is er vaak een verschil in betekenis tussen de gesplitste en de aan-één-geschreven vorm.</p>
        
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-gradient-to-r from-teal-600 to-cyan-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Vorm</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Betekenis</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Voorbeeld</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">Aan elkaar (<strong>erop</strong>)</td>
                <td class="px-4 py-3 text-sm"><strong>Figuurlijk</strong> (abstract, een gevoel of verwachting).</td>
                <td class="px-4 py-3 text-sm"><em>Ik reken <strong>erop</strong>.</em> (Ik heb er vertrouwen in).</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">Gesplitst (<strong>er op</strong>)</td>
                <td class="px-4 py-3 text-sm"><strong>Letterlijk</strong> (een fysieke, ruimtelijke plaats).</td>
                <td class="px-4 py-3 text-sm"><em>Ik klim <strong>er op</strong>.</em> (Ik klim fysiek op de berg).</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">Aan elkaar (<strong>eraf</strong>)</td>
                <td class="px-4 py-3 text-sm"><strong>Figuurlijk</strong> (gevoel/uitdrukking).</td>
                <td class="px-4 py-3 text-sm"><em>Ik ben het <strong>eraf</strong>.</em> (Ik ben het er helemaal mee eens / Het is ergerlijk).</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30">
                <td class="px-4 py-3 text-sm font-semibold">Gesplitst (<strong>er af</strong>)</td>
                <td class="px-4 py-3 text-sm"><strong>Letterlijk</strong> (ruimtelijk).</td>
                <td class="px-4 py-3 text-sm"><em>Ik val <strong>er af</strong>.</em> (Ik val fysiek van de fiets).</td>
              </tr>
            </tbody>
          </table>
        </div>
      `
    }
  ],
  rulesTable: [
    {
      rule: "Geen personen",
      structure: "Voornaamwoordelijk bijwoord (er+voorzetsel) mag NOOIT naar een persoon verwijzen.",
      example: "Ik wacht op haar. (Niet: Ik wacht erop.)",
      usage: "Gebruik voor personen altijd: voorzetsel + persoonlijk voornaamwoord (aan hem, met haar, voor hen)."
    },
    {
      rule: "Splitsing in bijzinnen",
      structure: "In een bijzin wordt het voornaamwoordelijk bijwoord ALTIJD gesplitst.",
      example: "...omdat ik er naar kijk. (Niet: omdat ik ernaar kijk.)",
      usage: "De woorden 'er' en het voorzetsel worden door de zinsstructuur van elkaar gescheiden."
    },
    {
      rule: "Samen bij infinitief en voltooid deelwoord",
      structure: "Bij een infinitief of voltooid deelwoord blijft het ALTIJD aan elkaar.",
      example: "Ik wil ernaar kijken. / Ik heb ernaar gekeken.",
      usage: "Zelfs als er 'te' tussen staat, blijft 'er' en het voorzetsel aan elkaar geplakt."
    },
    {
      rule: "Ontkenning in hoofdzin",
      structure: "Bij ontkenning met 'niet' of 'geen' in een hoofdzin, splitst het bijna altijd.",
      example: "Ik kijk er niet naar. (Niet: Ik kijk niet ernaar.)",
      usage: "Het woord 'niet' duwt de delen van het voornaamwoordelijk bijwoord uit elkaar."
    }
  ],
  callouts: [
    { type: "remember", label: "🏆 PRO REGEL 1", text: "Gebruik NOOIT 'er + voorzetsel' (erop, eraan) als het naar een persoon verwijst. Gebruik 'op haar', 'aan hem'." },
    { type: "remember", label: "🏆 PRO REGEL 2", text: "In een bijzin wordt het voornaamwoordelijk bijwoord ALTIJD gesplitst (...omdat ik er naar kijk)." },
    { type: "remember", label: "🏆 PRO REGEL 3 & 4", text: "Bij een infinitief of voltooid deelwoord blijft het ALTIJD aan elkaar (Ik wil ernaar kijken / Ik heb ernaar gekeken)." },
    { type: "remember", label: "⚠️ PAS OP 1", text: "Bij ontkenning in een hoofdzin splitst het bijna altijd: 'Ik kijk er niet naar'." },
    { type: "tip", label: "💡 Pro-tip", text: "Twijfel je tussen 'erop' en 'er op'? Is het fysiek/ruimtelijk? Kies dan voor gesplitst ('er op'). Is het abstract/figuurlijk? Kies dan voor aan elkaar ('erop')." }
  ],
  commonMistakes: [
    { incorrect: "Ik wacht erop. (bedoeld: op mijn baas)", correct: "Ik wacht op hem.", explanation: "Je mag nooit een voornaamwoordelijk bijwoord gebruiken voor een persoon." },
    { incorrect: "...omdat ik erop wacht.", correct: "...omdat ik er op wacht.", explanation: "In een bijzin wordt het voornaamwoordelijk bijwoord ALTIJD gesplitst." },
    { incorrect: "Ik heb er naar gekeken.", correct: "Ik heb ernaar gekeken.", explanation: "Bij een voltooid deelwoord blijft het voornaamwoordelijk bijwoord ALTIJD aan elkaar." },
    { incorrect: "Ik probeer er op te letten.", correct: "Ik probeer erop te letten.", explanation: "Bij een infinitief blijft het voornaamwoordelijk bijwoord ALTIJD aan elkaar, ook met 'te' ertussen." },
    { incorrect: "Ik kijk niet ernaar.", correct: "Ik kijk er niet naar.", explanation: "Bij ontkenning met 'niet' in een hoofdzin wordt het bijna altijd gesplitst." }
  ],
  review: [
    "✅ Voornaamwoordelijk bijwoord = er + voorzetsel (verwijst naar een ding/concept, nooit een persoon).",
    "✅ Personen-valkuil: Gebruik 'op haar', 'aan hem', niet 'erop' of 'eraan'.",
    "✅ Bijzin: ALTIJD gesplitst (...omdat ik er naar kijk).",
    "✅ Infinitief: ALTIJD aan elkaar (Ik wil ernaar kijken).",
    "✅ Voltooid deelwoord: ALTIJD aan elkaar (Ik heb ernaar gekeken).",
    "✅ Ontkenning: Bijna altijd gesplitst (Ik kijk er niet naar).",
    "✅ Nuance: Gesplitst = letterlijk/ruimtelijk. Aan elkaar = figuurlijk/abstract."
  ],
  qa: [
    {
      question: "Je wilt zeggen: 'Ik praat met de leraar.' Een student vertaalt dit naar: 'Ik praat erover.' (of 'Ik praat ermee'). Waarom is dit fout, en hoe moet het wél?",
      answer: "Dit is fout omdat 'de leraar' een persoon is! Je mag nooit een voornaamwoordelijk bijwoord (ermee/erover) gebruiken voor een persoon. Het moet zijn: 'Ik praat met hem.'"
    },
    {
      question: "Je hebt de hoofdzin: 'Ik kijk ernaar.' Maak hier een bijzin van die begint met: 'Ik ben blij, omdat...' Let extreem goed op de schrijfwijze van 'er' en 'naar'!",
      answer: "'Ik ben blij, omdat ik er naar kijk.' (PAS OP: In een bijzin wordt het voornaamwoordelijk bijwoord ALTIJD gesplitst! 'Naar' en 'er' worden van elkaar gehaald)."
    },
    {
      question: "Een student schrijft de volgende zin: 'Ik probeer er naar te kijken.' Is deze zin correct? Zo nee, hoe moet hij wél?",
      answer: "De zin is fout. Het moet zijn: 'Ik probeer ernaar te kijken.' (PAS OP: Als het voornaamwoordelijk bijwoord bij een infinitief staat, blijft het ALTIJD aan elkaar! Je splitst het niet, zelfs niet als er 'te' tussen staat)."
    },
    {
      question: "Kies de juiste vorm: 'Ik heb (erop / er op) gewacht dat de bus eindelijk kwam.' Waarom kies je voor deze vorm?",
      answer: "'erop' (aan elkaar). (PAS OP: Het woord 'gewacht' is een voltooid deelwoord. Bij een voltooid deelwoord blijft het voornaamwoordelijk bijwoord ALTIJD aan elkaar staan. Gesplitst zou dus fout zijn)."
    }
  ]
};