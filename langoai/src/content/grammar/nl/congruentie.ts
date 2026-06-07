import type { GrammarLesson } from "../../types";

export const congruentie: GrammarLesson = {
  id: "nl-congruentie-1",
  title: "Congruentie (PV & OW): De Onzichtbare Draad – Enkelvoud, Meervoud & Valkuilen",
  level: 3,
  topic: "Grammatica & Zinsontleding",
  body: "Beheers de congruentieregels volledig: de basiswet van enkelvoud/meervoud, collectiva, de 'er'-valkuil, hoeveelheidswoorden, en infinitieven als onderwerp.",
  overview:
    "Dit is de meest uitgebreide gids over Congruentie (Overeenstemming) in het Nederlands. Je leert hoe de persoonsvorm (PV) en het onderwerp (OW) altijd bij elkaar moeten passen. Je doorziet de valkuilen van collectieve zelfstandige naamwoorden (zoals 'de politie'), de 'er'-constructie, en hoeveelheidswoorden. Met prachtige tabellen, strikte PRO-regels en 4 korte oefenvragen maak je nooit meer een fout in onderwerp-persoonsvorm overeenstemming!",
  anchorSectionId: "wat-is-congruentie",
  exercises: [],
  timeExpressionsLabel: "De Gouden Wet van Congruentie 🔗",
  timeExpressions: {
    header: "Onderwerp (OW) | Persoonsvorm (PV) | Congruentie",
    rows: [
      ["De man (Enkelvoud)", "**loopt** (Enkelvoud)", "✅ **Klopt**"],
      ["De mannen (Meervoud)", "**lopen** (Meervoud)", "✅ **Klopt**"],
      ["De man (Enkelvoud)", "**lopen** (Meervoud)", "❌ **FOUT!**"]
    ]
  },
  details: [
    {
      title: "Deel 1: Wat is Congruentie? 🔗",
      body: `
        <p><strong>Congruentie</strong> (of overeenstemming) is de ijzeren grammaticale wet dat de <strong>Persoonsvorm (PV)</strong> en het <strong>Onderwerp (OW)</strong> altijd bij elkaar moeten passen. Ze zijn als een getrouwd koppel: ze moeten het altijd met elkaar eens zijn in <strong>aantal</strong> (enkelvoud of meervoud) en <strong>persoon</strong> (ik, jij, hij, wij).</p>
        
        <div class="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-emerald-700 dark:text-emerald-300 mb-2">🏆 PRO REGEL 1: De Gouden Wet van Congruentie</h3>
          <ul class="space-y-2 list-none pl-0 text-slate-700 dark:text-slate-300">
            <li>✅ Is het Onderwerp <strong>Enkelvoud</strong>? ➔ De PV is <strong>Enkelvoud</strong>.</li>
            <li>✅ Is het Onderwerp <strong>Meervoud</strong>? ➔ De PV is <strong>Meervoud</strong>.</li>
          </ul>
        </div>
      `
    },
    {
      title: "Deel 2: De Grootste Valkuil: Collectieve Zelfstandige Naamwoorden 👮‍♂️",
      body: `
        <p>Dit is de fout die moedertaalsprekers vaak maken door letterlijk uit het Engels te vertalen (<em>"The police are..."</em>). In het Nederlands zijn collectiva <strong>ALTIJD ENKELVOUD</strong>, tenzij je expliciet de individuele leden bedoelt (maar zelfs dan is enkelvoud de veilige, formele norm).</p>
        
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-gradient-to-r from-indigo-600 to-purple-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Collectief ZNW</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Lidwoord</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">PV (Enkelvoud!)</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Voorbeeldzin</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-semibold">de politie</td><td class="px-4 py-3 text-sm">de</td><td class="px-4 py-3 text-sm font-bold text-emerald-600">is / was</td><td class="px-4 py-3 text-sm">De politie <strong>is</strong> snel ter plaatse.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-semibold">de regering</td><td class="px-4 py-3 text-sm">de</td><td class="px-4 py-3 text-sm font-bold text-emerald-600">heeft / had</td><td class="px-4 py-3 text-sm">De regering <strong>heeft</strong> een nieuw plan.</td></tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-semibold">het team</td><td class="px-4 py-3 text-sm">het</td><td class="px-4 py-3 text-sm font-bold text-emerald-600">wint / won</td><td class="px-4 py-3 text-sm">Het team <strong>wint</strong> de wedstrijd.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-4 py-3 text-sm font-semibold">de familie</td><td class="px-4 py-3 text-sm">de</td><td class="px-4 py-3 text-sm font-bold text-emerald-600">komt / kwam</td><td class="px-4 py-3 text-sm">De familie <strong>komt</strong> samen met Kerst.</td></tr>
            </tbody>
          </table>
        </div>

        <div class="bg-rose-50 dark:bg-rose-900/20 border-l-4 border-rose-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-rose-700 dark:text-rose-300 mb-2">🚨 PAS OP! DE ENGELSE VALKUIL!</h3>
          <ul class="space-y-1 text-sm text-slate-700 dark:text-slate-300">
            <li>❌ <em>Fout:</em> The police are here ➔ <em>De politie <strong>zijn</strong> hier.</em></li>
            <li>✅ <em>Correct:</em> <em>De politie <strong>is</strong> hier.</em> (Politie is in het Nederlands één enkelvoudig collectief).</li>
          </ul>
        </div>
      `
    },
    {
      title: "Deel 3: De 'Grijze Zone': Hoeveelheidswoorden 📦",
      body: `
        <p>Woorden die een groep of hoeveelheid aanduiden (zoals <em>een aantal, een hoop, een groep, een stel, een boel</em>) zijn de lastigste van de Nederlandse taal. Ze mogen <strong>ZOWEL ENKELVOUD ALS MEERVOUD</strong> zijn, afhankelijk van de nuance!</p>
        
        <div class="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-indigo-700 dark:text-indigo-300 mb-2">🏆 PRO REGEL 2: De Focus-Regel</h3>
          <ul class="space-y-2 list-none pl-0 text-slate-700 dark:text-slate-300">
            <li>🔹 <strong>Formeel / Nadruk op de groep als geheel</strong> ➔ <strong>ENKELVOUD</strong>.</li>
            <li>🔹 <strong>Informeel / Nadruk op de losse individuen</strong> ➔ <strong>MEERVOUD</strong>.</li>
          </ul>
        </div>

        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-gradient-to-r from-amber-600 to-orange-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Hoeveelheidswoord</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Formeel (Focus op de groep)</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Informeel (Focus op de leden)</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-semibold">een aantal</td><td class="px-4 py-3 text-sm">Een aantal studenten <strong>is</strong> geslaagd.</td><td class="px-4 py-3 text-sm">Een aantal studenten <strong>zijn</strong> geslaagd.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-semibold">een hoop</td><td class="px-4 py-3 text-sm">Een hoop mensen <strong>wacht</strong> buiten.</td><td class="px-4 py-3 text-sm">Een hoop mensen <strong>wachten</strong> buiten.</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-4 py-3 text-sm font-semibold">een groep</td><td class="px-4 py-3 text-sm">Een groep toeristen <strong>bezoekt</strong> het museum.</td><td class="px-4 py-3 text-sm">Een groep toeristen <strong>bezoeken</strong> het museum.</td></tr>
            </tbody>
          </table>
        </div>

        <div class="bg-rose-50 dark:bg-rose-900/20 border-l-4 border-rose-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-rose-700 dark:text-rose-300 mb-2">🚨 PAS OP! DE TOETS-VALKUIL!</h3>
          <p class="text-sm text-slate-700 dark:text-slate-300">Op een formeel examen of in een zakelijke e-mail is <strong>ENKELVOUD</strong> bijna altijd de veiligste en meest correcte keuze. <em>Een aantal</em> is letterlijk "één aantal" (enkelvoud!).</p>
        </div>
      `
    },
    {
      title: "Deel 4: De 'Er' Valkuil (Existentieel Er) 🎈",
      body: `
        <p>Als een zin begint met het onpersoonlijke of existentiële <strong>er</strong>, is 'er' <strong>NOOIT</strong> het onderwerp. Het echte onderwerp staat <strong>achter</strong> de persoonsvorm. De PV moet overeenstemmen met dat achtergestelde onderwerp!</p>
        
        <div class="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-emerald-700 dark:text-emerald-300 mb-2">🏆 PRO REGEL 3: De Kijk-Achter-de-PV Regel</h3>
          <p class="text-slate-700 dark:text-slate-300">Begint de zin met <em>Er</em>? Kijk dan naar het woord <strong>na</strong> de PV. Dat is het echte OW waar de PV zich aan aanpast.</p>
        </div>

        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-gradient-to-r from-teal-600 to-cyan-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Zin</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Analyse</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">PV</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm">Er <strong>loopt</strong> een kat op het dak.</td><td class="px-4 py-3 text-sm text-xs">OW = <em>een kat</em> (enkelvoud)</td><td class="px-4 py-3 text-sm font-bold text-emerald-600">loopt (enkelvoud)</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm">Er <strong>lopen</strong> twee katten op het dak.</td><td class="px-4 py-3 text-sm text-xs">OW = <em>twee katten</em> (meervoud)</td><td class="px-4 py-3 text-sm font-bold text-emerald-600">lopen (meervoud)</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-4 py-3 text-sm">Er <strong>wordt</strong> veel gefeest.</td><td class="px-4 py-3 text-sm text-xs">OW = <em>veel</em> (onbepaald/enkelvoud)</td><td class="px-4 py-3 text-sm font-bold text-emerald-600">wordt (enkelvoud)</td></tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      title: "Deel 5: Breuken, Percentages en Infinitieven 🍰",
      body: `
        <p>Er zijn nog drie speciale categorieën die vaak voor verwarring zorgen.</p>
        
        <h3 class="text-lg font-bold mt-6 mb-3 text-slate-800 dark:text-slate-200">A. Breuken en Percentages</h3>
        <p class="text-sm text-slate-700 dark:text-slate-300 mb-4">De PV hangt af van het zelfstandig naamwoord dat op het breuk/percentage volgt!</p>
        <ul class="list-disc list-inside space-y-1 text-sm text-slate-700 dark:text-slate-300 mb-6">
          <li><em>De helft van de <strong>taart</strong> <strong>is</strong> op.</em> (Taart = enkelvoud ➔ is).</li>
          <li><em>De helft van de <strong>appels</strong> <strong>zijn</strong> op.</em> (Appels = meervoud ➔ zijn).</li>
        </ul>

        <h3 class="text-lg font-bold mt-6 mb-3 text-slate-800 dark:text-slate-200">B. Infinitieven en Zinnen als Onderwerp</h3>
        <p class="text-sm text-slate-700 dark:text-slate-300 mb-4">Als een heel werkwoord (infinitief) of een hele bijzin het onderwerp is, is het <strong>ALTIJD ENKELVOUD</strong>.</p>
        <div class="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 p-4 rounded-r-lg my-4">
          <ul class="space-y-2 text-sm text-slate-700 dark:text-slate-300">
            <li>✅ <em><strong>Roken</strong> <strong>is</strong> ongezond.</em> (Niet: <em>zijn</em>).</li>
            <li>✅ <em><strong>Dat hij komt</strong> <strong>is</strong> zeker.</em> (Niet: <em>zijn</em>).</li>
          </ul>
        </div>
      `
    }
  ],
  rulesTable: [
    {
      rule: "De Gouden Wet van Congruentie",
      structure: "OW enkelvoud = PV enkelvoud. OW meervoud = PV meervoud.",
      example: "De man loopt. / De mannen lopen.",
      usage: "Dit is de basisregel van elke Nederlandse zin. Vind eerst het echte onderwerp."
    },
    {
      rule: "Collectiva zijn Enkelvoud",
      structure: "Woorden zoals 'politie', 'regering', 'team' en 'familie' krijgen in het Nederlands ALTIJD een enkelvoudige PV.",
      example: "De politie is hier. (Niet: De politie zijn hier).",
      usage: "Laat je niet misleiden door het Engels ('The police are'). In het NL is het één groep."
    },
    {
      rule: "De 'Er' Regel",
      structure: "Begint de zin met 'Er'? Dan past de PV zich aan aan het onderwerp dat NA de persoonsvorm komt.",
      example: "Er staan drie auto's. (Niet: Er staat drie auto's).",
      usage: "'Er' is nooit het onderwerp. Kijk altijd voorbij de persoonsvorm."
    },
    {
      rule: "Infinitief als Onderwerp",
      structure: "Een werkwoord (infinitief) of een hele bijzin als onderwerp is ALTIJD enkelvoud.",
      example: "Hardlopen is gezond. (Niet: Hardlopen zijn gezond).",
      usage: "Een actie of feit als concept wordt gezien als één enkelvoudig geheel."
    }
  ],
  callouts: [
    { type: "remember", label: "🏆 PRO REGEL 1", text: "De Gouden Wet: Is het OW enkelvoud? Dan is de PV enkelvoud. Is het OW meervoud? Dan is de PV meervoud." },
    { type: "remember", label: "🏆 PRO REGEL 2", text: "Bij hoeveelheidswoorden (een aantal, een hoop) is in formele taal het ENKELVOUD de veiligste en correcte keuze." },
    { type: "remember", label: "🏆 PRO REGEL 3", text: "Begint de zin met 'Er'? Kijk dan naar het woord NA de PV. Dat is het echte OW waar de PV zich aan aanpast." },
    { type: "remember", label: "⚠️ PAS OP 1", text: "Collectiva zoals 'de politie', 'de regering' of 'het team' zijn in het Nederlands ALTIJD enkelvoud!" },
    { type: "remember", label: "⚠️ PAS OP 2", text: "Een infinitief of een hele bijzin als onderwerp is ALTIJD enkelvoud. (Roken is ongezond)." },
    { type: "tip", label: "💡 Pro-tip", text: "Vertaal nooit letterlijk uit het Engels. 'The police are' wordt in het Nederlands 'De politie is', niet 'De politie zijn'." }
  ],
  commonMistakes: [
    { incorrect: "De politie zijn gearriveerd.", correct: "De politie is gearriveerd.", explanation: "Politie is een collectief zelfstandig naamwoord en krijgt in het Nederlands altijd een enkelvoudige persoonsvorm." },
    { incorrect: "Er staat drie auto's voor de deur.", correct: "Er staan drie auto's voor de deur.", explanation: "'Er' is geen onderwerp. Het echte onderwerp is 'drie auto's' (meervoud), dus de PV moet ook meervoud zijn (staan)." },
    { incorrect: "Een aantal mensen zijn het erover eens. (in formele tekst)", correct: "Een aantal mensen is het erover eens.", explanation: "Formeel gezien is 'een aantal' één enkelvoudig geheel. Op toetsen en in formele teksten is enkelvoud de norm." },
    { incorrect: "Hard lopen zijn gezond.", correct: "Hard lopen is gezond.", explanation: "Een infinitief (hard lopen) als onderwerp van de zin is altijd enkelvoud." },
    { incorrect: "De helft van de taart zijn op.", correct: "De helft van de taart is op.", explanation: "Bij breuken kijk je naar het zelfstandig naamwoord dat erop volgt. 'Taart' is enkelvoud, dus de PV is 'is'." }
  ],
  review: [
    "✅ Congruentie = PV en OW moeten overeenstemmen in aantal (enkelvoud/meervoud).",
    "✅ Collectiva (politie, regering, team) zijn in het Nederlands ALTIJD enkelvoud.",
    "✅ Hoeveelheidswoorden (een aantal): Formeel = enkelvoud, Informeel = meervoud.",
    "✅ Existentieel 'Er': 'Er' is nooit het OW. De PV past zich aan aan het OW achter de PV.",
    "✅ Breuken/Percentages: PV hangt af van het ZNW dat erop volgt (de helft van de taart is...).",
    "✅ Infinitieven/Bijzinnen als OW zijn ALTIJD enkelvoud (Roken is...)."
  ],
  qa: [
    {
      question: "Vul de juiste vorm in: 'De politie (is / zijn) nu ter plaatse.'",
      answer: "is. (Politie is een collectief en dus enkelvoud)."
    },
    {
      question: "Vul de juiste vorm in: 'Er (staat / staan) drie fietsen voor de deur.'",
      answer: "staan. (Het onderwerp is 'drie fietsen', dat is meervoud)."
    },
    {
      question: "Vul de juiste formele vorm in: 'Een aantal studenten (heeft / hebben) het examen gehaald.'",
      answer: "heeft. (Formeel gezien is 'een aantal' één enkelvoudig geheel)."
    },
    {
      question: "Vul de juiste vorm in: 'Roken (is / zijn) slecht voor je longen.'",
      answer: "is. (Een infinitief als onderwerp is altijd enkelvoud)."
    }
  ]
};