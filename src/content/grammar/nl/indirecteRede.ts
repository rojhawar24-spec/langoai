import type { GrammarLesson } from "../../types";

export const indirecteRede: GrammarLesson = {
  id: "nl-indirecte-rede-1",
  title: "De Indirecte Rede: Hij Zei Dat Hij Het Zou Doen – De Ultieme Masterclass",
  level: 3,
  topic: "Grammatica & Zinsbouw",
  body: "Beheers de indirecte rede volledig: tijdverschuiving (Concordantia Temporum), voornaamwoorden, de 'zou'-valkuil, vragen omzetten, en de grote uitzondering bij een tegenwoordige inleiding.",
  overview:
    "Dit is de meest uitgebreide, visueel schitterende en waarschuwing-rijke gids over de Indirecte Rede in het Nederlands. Je leert de 4 cruciale transformaties, beheerst de tijdreeks-tabel, en doorziet de valkuilen van 'zal/zou', tijdwoorden en vraagzinnen. Met prachtige tabellen, strikte PRO-regels en 4 complexe MAX-oefenvragen word je een absolute meester in het weergeven van wat anderen hebben gezegd!",
  anchorSectionId: "wat-is-indirecte-rede",
  exercises: [],
  timeExpressionsLabel: "De Tijdreeks (Concordantia Temporum) ⏳",
  timeExpressions: {
    header: "Directe Rede ➔ Indirecte Rede (bij inleiding in OVT)",
    rows: [
      ["**OTT** (Ik werk)", "➔", "**OVT** (Hij zei dat hij werkte)"],
      ["**VTT** (Ik heb gewerkt)", "➔", "**VVT** (Hij zei dat hij gewerkt had)"],
      ["**OTTt** (Ik zal werken)", "➔", "**OVTt** (Hij zei dat hij zou werken)"],
      ["**OVT** (Ik werkte)", "➔", "**VVT** (Hij zei dat hij gewerkt had)"],
      ["**VVT** (Ik had gewerkt)", "➔", "**VVT** (Hij zei dat hij gewerkt had)"]
    ]
  },
  details: [
    {
      title: "Deel 1: Wat is Indirecte Rede? 🗣️",
      body: `
        <p>Er zijn twee manieren om weer te geven wat iemand heeft gezegd:</p>
        <ul class="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300 mb-4">
          <li><strong>Directe rede:</strong> Je citeert de persoon <strong>letterlijk</strong>, tussen aanhalingstekens.</li>
          <li><strong>Indirecte rede:</strong> Je vertelt <strong>in je eigen woorden</strong> wat iemand heeft gezegd. De aanhalingstekens verdwijnen en de zin verandert grammaticaal.</li>
        </ul>
        
        <div class="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-emerald-700 dark:text-emerald-300 mb-2">🏆 PRO REGEL 1: De Bijzin-regel</h3>
          <p class="text-slate-700 dark:text-slate-300">Bij indirecte rede gebruik je bijna altijd het voegwoord <strong>dat</strong> (of <strong>of</strong> bij ja/nee-vragen). De zin wordt een <strong>bijzin</strong>, dus de persoonsvorm gaat <strong>helemaal naar achteren</strong> (SOV-regel)!</p>
        </div>
      `
    },
    {
      title: "Deel 2: De 4 Grootste Veranderingen 🔄",
      body: `
        <p>Wanneer je van directe naar indirecte rede gaat, moeten er <strong>vier dingen</strong> veranderen. Onthoud dit als een checklist!</p>
        
        <div class="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-indigo-700 dark:text-indigo-300 mb-2">🏆 PRO REGEL 2: De 4 Transformaties</h3>
          <ol class="list-decimal list-inside space-y-2 text-slate-700 dark:text-slate-300">
            <li><strong>Aanhalingstekens</strong> verdwijnen ➔ voegwoord <strong>dat</strong> of <strong>of</strong> erbij.</li>
            <li><strong>Persoonsvorm</strong> verhuist naar het <strong>einde</strong> van de bijzin.</li>
            <li><strong>Voornaamwoorden</strong> veranderen (ik ➔ hij/zij).</li>
            <li><strong>Tijdwoorden</strong> en <strong>Werkwoordstijden</strong> veranderen (zie de tabellen hieronder).</li>
          </ol>
        </div>
      `
    },
    {
      title: "Deel 3: De Tijdreeks: De Allerbelangrijkste Regel ⏳",
      body: `
        <p>Dit is het <strong>kloppend hart</strong> van de indirecte rede. Als de inleidende zin in het <strong>verleden</strong> staat (<em>hij zei, hij vroeg, hij dacht</em>), dan moet <strong>elk werkwoord</strong> in de bijzin <strong>één stap terug in de tijd</strong>.</p>
        
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-gradient-to-r from-blue-600 to-cyan-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Tijd in Directe Rede</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">➔</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Tijd in Indirecte Rede (inleiding in OVT)</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-semibold">OTT</td><td class="px-4 py-3 text-sm text-center">➔</td><td class="px-4 py-3 text-sm text-emerald-600 font-bold">OVT</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-semibold">VTT</td><td class="px-4 py-3 text-sm text-center">➔</td><td class="px-4 py-3 text-sm text-emerald-600 font-bold">VVT</td></tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-semibold">OTTt (zal)</td><td class="px-4 py-3 text-sm text-center">➔</td><td class="px-4 py-3 text-sm text-emerald-600 font-bold">OVTt (zou)</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-semibold">OVT</td><td class="px-4 py-3 text-sm text-center">➔</td><td class="px-4 py-3 text-sm text-emerald-600 font-bold">VVT</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-4 py-3 text-sm font-semibold">VVT</td><td class="px-4 py-3 text-sm text-center">➔</td><td class="px-4 py-3 text-sm text-emerald-600 font-bold">VVT (blijft gelijk)</td></tr>
            </tbody>
          </table>
        </div>

        <div class="bg-rose-50 dark:bg-rose-900/20 border-l-4 border-rose-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-rose-700 dark:text-rose-300 mb-2">🚨 PAS OP! DE "ZOU"-VALKUIL!</h3>
          <p class="text-sm text-slate-700 dark:text-slate-300">Dit is de meest gemaakte fout! Veel cursisten vergeten dat <em>zal</em> in de indirecte rede verandert in <strong>zou</strong>.</p>
          <ul class="mt-2 space-y-1 text-sm text-slate-700 dark:text-slate-300">
            <li>❌ <em>Fout:</em> Hij zei dat hij het <strong>zal</strong> doen.</li>
            <li>✅ <em>Correct:</em> Hij zei dat hij het <strong>zou</strong> doen.</li>
          </ul>
        </div>
      `
    },
    {
      title: "Deel 4: Tijdwoorden & Voornaamwoorden 📅👥",
      body: `
        <h3 class="text-lg font-bold mt-6 mb-3 text-slate-800 dark:text-slate-200">A. De Tijdwoorden: De "Morgen"-Valkuil</h3>
        <p class="text-sm text-slate-700 dark:text-slate-300 mb-4">Alles wat naar de <strong>toekomst</strong> of het <strong>heden</strong> wijst, moet één stap naar het <strong>verleden</strong>.</p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-amber-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Direct</th><th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">➔</th><th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Indirect</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm">nu</td><td class="px-4 py-3 text-sm text-center">➔</td><td class="px-4 py-3 text-sm font-semibold">toen</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm">vandaag</td><td class="px-4 py-3 text-sm text-center">➔</td><td class="px-4 py-3 text-sm font-semibold">die dag</td></tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm">morgen</td><td class="px-4 py-3 text-sm text-center">➔</td><td class="px-4 py-3 text-sm font-semibold">de volgende dag</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm">gisteren</td><td class="px-4 py-3 text-sm text-center">➔</td><td class="px-4 py-3 text-sm font-semibold">de dag ervoor</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-4 py-3 text-sm">hier</td><td class="px-4 py-3 text-sm text-center">➔</td><td class="px-4 py-3 text-sm font-semibold">daar</td></tr>
            </tbody>
          </table>
        </div>

        <h3 class="text-lg font-bold mt-8 mb-3 text-slate-800 dark:text-slate-200">B. De Voornaamwoorden: De Perspectief-wissel</h3>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-purple-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Directe Rede</th><th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">➔</th><th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Indirecte Rede</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm">ik</td><td class="px-4 py-3 text-sm text-center">➔</td><td class="px-4 py-3 text-sm font-semibold">hij / zij</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm">mij / me</td><td class="px-4 py-3 text-sm text-center">➔</td><td class="px-4 py-3 text-sm font-semibold">hem / haar</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-4 py-3 text-sm">mijn</td><td class="px-4 py-3 text-sm text-center">➔</td><td class="px-4 py-3 text-sm font-semibold">zijn / haar</td></tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      title: "Deel 5: Vragen & Gebiedende Wijs ❓⚠️",
      body: `
        <h3 class="text-lg font-bold mt-6 mb-3 text-slate-800 dark:text-slate-200">A. Vragen in Indirecte Rede</h3>
        <ul class="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300 mb-4">
          <li><strong>Ja/Nee-vragen:</strong> Gebruik <strong>of</strong>. (<em>"Kom je?" ➔ Hij vroeg of ik kwam.</em>)</li>
          <li><strong>WH-vragen (Wie/Wat/Waar):</strong> Behoud het vraagwoord. (<em>"Waar woon je?" ➔ Hij vroeg waar ik woonde.</em>)</li>
        </ul>
        <div class="bg-rose-50 dark:bg-rose-900/20 border-l-4 border-rose-500 p-4 rounded-r-lg my-4">
          <p class="text-sm text-slate-700 dark:text-slate-300"><strong>🚨 PAS OP! DE VRAAG-VALKUIL:</strong> In de indirecte rede is het <strong>GEEN vraag meer</strong>! De zin eindigt met een <strong>punt</strong>, niet met een vraagteken. En de persoonsvorm staat achteraan.</p>
        </div>

        <h3 class="text-lg font-bold mt-8 mb-3 text-slate-800 dark:text-slate-200">B. De Gebiedende Wijs</h3>
        <p class="text-sm text-slate-700 dark:text-slate-300 mb-2">Gebruik <strong>moeten</strong> (bevel), <strong>willen</strong> (verzoek) of <strong>zullen</strong> (voornemen).</p>
        <ul class="list-disc list-inside space-y-1 text-sm text-slate-700 dark:text-slate-300">
          <li><em>"Doe de deur dicht!"</em> ➔ Hij zei dat ik de deur dicht <strong>moest doen</strong>.</li>
          <li><em>"Wil je me helpen?"</em> ➔ Hij vroeg of ik hem <strong>wilde helpen</strong>.</li>
        </ul>
      `
    },
    {
      title: "Deel 6: De Grootste Uitzondering: Inleiding in de OTT 🚨",
      body: `
        <p>Dit is de <strong>allerbelangrijkste uitzondering</strong>. Als de inleidende zin in de <strong>Tegenwoordige Tijd</strong> (OTT) staat, verandert er <strong>NIETS</strong> aan de tijden!</p>
        
        <div class="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-emerald-700 dark:text-emerald-300 mb-2">🏆 PRO REGEL 3: Geen Verschuiving bij OTT</h3>
          <p class="text-slate-700 dark:text-slate-300">Staat de inleidende zin in de OTT (<em>hij zegt, hij vraagt</em>)? Dan blijven de tijden in de bijzin <strong>hetzelfde</strong>. Alleen de voornaamwoorden veranderen nog!</p>
        </div>

        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-gradient-to-r from-teal-600 to-emerald-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Inleiding in OTT</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Directe Rede</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Indirecte Rede</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">Hij zegt:</td>
                <td class="px-4 py-3 text-sm">"Ik <strong>ben</strong> moe."</td>
                <td class="px-4 py-3 text-sm">Hij zegt dat hij moe <strong>is</strong>. (Blijft OTT!)</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30">
                <td class="px-4 py-3 text-sm font-semibold">Hij zegt:</td>
                <td class="px-4 py-3 text-sm">"Ik <strong>zal</strong> komen."</td>
                <td class="px-4 py-3 text-sm">Hij zegt dat hij <strong>zal</strong> komen. (Blijft OTTt!)</td>
              </tr>
            </tbody>
          </table>
        </div>
      `
    }
  ],
  rulesTable: [
    {
      rule: "De 4 Transformaties",
      structure: "Aanhalingstekens weg, PV naar achteren, voornaamwoorden aanpassen, tijd/tijdwoorden verschuiven.",
      example: "Ik werk morgen. ➔ Hij zei dat hij de volgende dag werkte.",
      usage: "Gebruik dit als een checklist bij elke omzetting."
    },
    {
      rule: "Tijdverschuiving (Concordantia Temporum)",
      structure: "Bij inleiding in OVT: OTT ➔ OVT, VTT ➔ VVT, OTTt (zal) ➔ OVTt (zou).",
      example: "Hij zei: 'Ik zal komen.' ➔ Hij zei dat hij zou komen.",
      usage: "Dit is de kernregel. 'Zal' wordt altijd 'zou' bij een verleden inleiding."
    },
    {
      rule: "Vragen omzetten",
      structure: "Ja/nee-vraag ➔ 'of'. WH-vraag ➔ behoud vraagwoord. Eindig met een punt.",
      example: "Hij vroeg: 'Ben je ziek?' ➔ Hij vroeg of ik ziek was.",
      usage: "Een indirecte vraag is grammaticaal een bijzin, geen vraagzin."
    },
    {
      rule: "Uitzondering: Inleiding in OTT",
      structure: "Staat de inleiding in de tegenwoordige tijd? Dan GEEN tijdverschuiving.",
      example: "Hij zegt dat hij moe is. (Niet: was).",
      usage: "Controleer altijd eerst de tijd van de inleidende zin (zei vs zegt)."
    }
  ],
  callouts: [
    { type: "remember", label: "🏆 PRO REGEL 1", text: "Bij indirecte rede gebruik je 'dat' of 'of', en de persoonsvorm gaat helemaal naar achteren." },
    { type: "remember", label: "🏆 PRO REGEL 2", text: "De 4 transformaties: Aanhalingstekens weg, PV naar achteren, voornaamwoorden aanpassen, tijd/tijdwoorden verschuiven." },
    { type: "remember", label: "🏆 PRO REGEL 3", text: "Staat de inleidende zin in de OTT (hij zegt)? Dan is er GEEN tijdverschuiving!" },
    { type: "remember", label: "⚠️ PAS OP 1", text: "Zal wordt ALTIJD 'zou' bij een inleiding in de verleden tijd." },
    { type: "remember", label: "⚠️ PAS OP 2", text: "Een indirecte vraag eindigt ALTIJD met een punt, nooit met een vraagteken." },
    { type: "tip", label: "💡 Pro-tip", text: "Gebruik de 6-stappen checklist om geen enkele transformatie te vergeten bij het omzetten van zinnen." }
  ],
  commonMistakes: [
    { incorrect: "Hij zei dat hij het zal doen.", correct: "Hij zei dat hij het zou doen.", explanation: "Bij een inleiding in de OVT verandert 'zal' altijd in 'zou'." },
    { incorrect: "Hij zei dat hij morgen zou komen.", correct: "Hij zei dat hij de volgende dag zou komen.", explanation: "Tijdwoorden moeten ook verschuiven: 'morgen' wordt 'de volgende dag'." },
    { incorrect: "Hij vroeg waar ik woonde?", correct: "Hij vroeg waar ik woonde.", explanation: "Een indirecte vraag is een bijzin en eindigt met een punt, geen vraagteken." },
    { incorrect: "Hij vroeg dat ik kwam.", correct: "Hij vroeg of ik kwam.", explanation: "Bij ja/nee-vragen gebruik je het voegwoord 'of', niet 'dat'." },
    { incorrect: "Hij zei dat werkte hij hard.", correct: "Hij zei dat hij hard werkte.", explanation: "In een bijzin staat de persoonsvorm helemaal achteraan (SOV-regel)." },
    { incorrect: "Hij zegt dat hij moe was.", correct: "Hij zegt dat hij moe is.", explanation: "Bij een inleiding in de OTT ('zegt') vindt er geen tijdverschuiving plaats." }
  ],
  review: [
    "✅ Indirecte rede = geen aanhalingstekens, wel 'dat' of 'of'.",
    "✅ Persoonsvorm gaat in de bijzin helemaal naar het einde.",
    "✅ Tijdverschuiving: OTT ➔ OVT, VTT ➔ VVT, zal ➔ zou.",
    "✅ Tijdwoorden verschuiven: nu ➔ toen, morgen ➔ de volgende dag.",
    "✅ Voornaamwoorden passen zich aan: ik ➔ hij/zij, mijn ➔ zijn/haar.",
    "✅ Indirecte vragen eindigen met een punt, geen vraagteken.",
    "✅ Uitzondering: Inleiding in OTT ('hij zegt') = GEEN tijdverschuiving."
  ],
  qa: [
    {
      question: "De Complete Transformatie: Zet de volgende directe rede om naar indirecte rede. Let op ALLE 4 de transformaties (tijd, voornaamwoorden, tijdwoorden, woordvolgorde)! Directe rede: Maria zei gisteren tegen mij: 'Ik zal morgen mijn boek hier terugbrengen.'",
      answer: "Maria zei gisteren tegen mij dat zij de volgende dag haar boek daar zou terugbrengen. (Uitleg: 1. 'Ik' ➔ 'zij'. 2. 'Morgen' ➔ 'de volgende dag'. 3. 'Mijn' ➔ 'haar'. 4. 'Hier' ➔ 'daar'. 5. 'Zal' ➔ 'zou'. 6. 'Terugbrengen' gaat naar het einde.)"
    },
    {
      question: "De Uitzondering: Inleiding in OTT: Lees de volgende twee zinnen. In één van de twee zinnen is de tijdverschuiving fout toegepast. Welke zin is fout, en waarom? 1. 'Hij zei dat hij honger had.' 2. 'Hij zegt dat hij honger had.'",
      answer: "Zin 2 is fout. In zin 1 staat de inleidende zin in de OVT ('zei'), dus de tijdverschuiving is correct (heb ➔ had). In zin 2 staat de inleidende zin in de OTT ('zegt'). Volgens PRO REGEL 3 mag er GEEN tijdverschuiving plaatsvinden. Correcte zin 2: 'Hij zegt dat hij honger heeft.'"
    },
    {
      question: "Vragen in Indirecte Rede: Zet de volgende twee directe vragen om naar indirecte rede. Let op het verschil tussen ja/nee-vragen en WH-vragen! 1. De leraar vroeg: 'Heb je je huiswerk gemaakt?' 2. De leraar vroeg: 'Waarom heb je je huiswerk niet gemaakt?'",
      answer: "1. De leraar vroeg of ik mijn huiswerk had gemaakt. (Ja/nee-vraag ➔ 'of', VTT ➔ VVT). 2. De leraar vroeg waarom ik mijn huiswerk niet had gemaakt. (WH-vraag ➔ 'waarom' blijft behouden, VTT ➔ VVT). Beide zinnen eindigen met een punt!"
    },
    {
      question: "De Gebiedende Wijs en Nuance: Een baas geeft drie verschillende instructies. Zet ze alle drie om naar indirecte rede, maar gebruik telkens een andere modale nuance (moesten, wilden, zouden). 1. 'Maak dit rapport af!' (Streng bevel) 2. 'Zou je dit rapport kunnen afmaken?' (Beleefd verzoek) 3. 'We zullen dit rapport morgen afmaken.' (Belofte/voornemen)",
      answer: "1. Hij zei dat wij dit rapport moesten afmaken. (Bevel ➔ 'moesten'). 2. Hij vroeg of wij dit rapport wilden afmaken. (Beleefd verzoek ➔ 'of ... wilden'). 3. Hij zei dat wij dit rapport de volgende dag zouden afmaken. (Voornemen ➔ 'zouden' + tijdwoord 'morgen' verandert)."
    }
  ]
};