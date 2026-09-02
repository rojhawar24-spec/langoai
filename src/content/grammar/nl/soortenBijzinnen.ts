import type { GrammarLesson } from "../../types";

export const soortenBijzinnen: GrammarLesson = {
  id: "nl-soortenbijzinnen-1",
  title: "Soorten Bijzinnen: Tijd, Reden, Doel & Voorwaarde – De Definitieve Masterclass",
  level: 2,
  topic: "Soorten bijzinnen",
  body: "Beheers tijds-, reden-, doel- en voorwaardelijke bijzinnen volledig. Alle voegwoorden, alle nuances, SOV-regels, inversie, en de grootste valkuilen zoals toen/als, omdat/doordat/want, en mits/tenzij.",
  overview:
    "Dit is de allesomvattende, encyclopedische gids over de vier belangrijkste soorten bijzinnen in het Nederlands. Je leert het fundamentele verschil tussen hoofd- en bijzinnen, beheerst de SOV-volgorde (werkwoord achteraan), kent alle voegwoorden inclusief hun formele/informele nuances, doorloopt een 5-stappen beslisalgoritme, en vermijdt de 12 meest gemaakte fouten. Met kristalheldere tabellen, kleurrijke PAS OP-waarschuwingen, temporale afstemmingsregels en 8 complexe masterclass-vragen maak jij voortaan foutloze, natuurlijke bijzinnen in elke context.",
  anchorSectionId: "fundament",
  exercises: [],
  timeExpressionsLabel: "De 4 bijzinnen + de 'geen-bijzin' in één oogopslag 🎯",
  timeExpressions: {
    header: "Soort | Vraag | Voegwoorden | Volgorde | Voorbeeld",
    rows: [
      ["⏰ Tijd", "Wanneer?", "als, toen, terwijl, voordat, nadat, sinds, totdat, zodra", "SOV (achteraan)", "Toen ik thuiskwam, belde de telefoon."],
      ["❓ Reden", "Waarom?", "omdat, doordat, aangezien", "SOV (achteraan)", "Ik blijf thuis, omdat het regent."],
      ["🎯 Doel", "Waarvoor?", "zodat, opdat, om...te", "SOV (achteraan)", "Ik spaar, zodat ik kan kopen."],
      ["🔑 Voorwaarde", "Als wat?", "als, indien, mits, tenzij", "SOV (achteraan)", "Als het kan, kom ik."],
      ["⚠️ GEEN bijzin", "-", "want, maar, en, dus, of", "SVO (plek 2)", "Ik ben moe, want ik werk hard."]
    ]
  },
  details: [
    {
      title: "Deel 1: Het fundament – wat is een bijzin? 🎯",
      body: `
        <p>Een <strong>bijzin</strong> is een zin die <strong>niet op zichzelf kan staan</strong>. Hij is afhankelijk van een hoofdzin en geeft extra informatie over <em>wanneer</em> (tijd), <em>waarom</em> (reden), <em>waarvoor</em> (doel) of <em>onder welke conditie</em> (voorwaarde).</p>
        
        <div class="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 rounded-lg p-4 my-4">
          <p class="font-bold text-indigo-800 dark:text-indigo-200 mb-1">👑 De Gouden Wet:</p>
          <p class="text-sm text-slate-700 dark:text-slate-300">Elke bijzin heeft de <strong>SOV-volgorde</strong>: het <strong>werkwoord staat ALTIJD helemaal achteraan</strong>.</p>
        </div>

        <div class="grid md:grid-cols-2 gap-4 my-4">
          <div class="bg-white dark:bg-slate-800/50 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
            <h4 class="font-bold text-emerald-700 dark:text-emerald-300 mb-2">✅ Hoofdzin (SVO)</h4>
            <p class="text-sm text-slate-700 dark:text-slate-300 mb-2">Werkwoord op plaats 2. Kan op zichzelf staan.</p>
            <p class="text-sm italic">Ik <strong>blijf</strong> vandaag thuis.</p>
          </div>
          <div class="bg-white dark:bg-slate-800/50 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
            <h4 class="font-bold text-indigo-700 dark:text-indigo-300 mb-2">✅ Bijzin (SOV)</h4>
            <p class="text-sm text-slate-700 dark:text-slate-300 mb-2">Werkwoord naar het einde. Hangt van hoofdzin af.</p>
            <p class="text-sm italic">...omdat ik <strong>ziek ben</strong>.</p>
          </div>
        </div>
      `
    },
    {
      title: "Deel 2: Tijdsbepaalde bijzin (Wanneer?) ⏰",
      body: `
        <p>Een tijdsbepaalde bijzin vertelt <strong>wanneer</strong> de hoofdactie plaatsvindt. De keuze van het voegwoord bepaalt de tijdsrelatie.</p>
        
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Voegwoord</th><th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Betekenis</th><th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Tijdsrelatie</th><th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Voorbeeld</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-semibold">als</td><td class="px-4 py-3 text-sm">wanneer</td><td class="px-4 py-3 text-sm">Herhaling / Toekomst</td><td class="px-4 py-3 text-sm"><em>Als het regent, blijf ik thuis.</em></td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-semibold">toen</td><td class="px-4 py-3 text-sm">op dat moment</td><td class="px-4 py-3 text-sm"><strong>Eenmalig verleden</strong></td><td class="px-4 py-3 text-sm"><em>Toen ik klein was, speelde ik buiten.</em></td></tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-semibold">terwijl</td><td class="px-4 py-3 text-sm">op hetzelfde moment</td><td class="px-4 py-3 text-sm">Gelijktijdig</td><td class="px-4 py-3 text-sm"><em>Terwijl ik kook, leest hij.</em></td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-semibold">voordat</td><td class="px-4 py-3 text-sm">eerder dan</td><td class="px-4 py-3 text-sm">Actie 1 → Actie 2</td><td class="px-4 py-3 text-sm"><em>Was je handen voordat je eet.</em></td></tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-semibold">nadat</td><td class="px-4 py-3 text-sm">later dan</td><td class="px-4 py-3 text-sm">Actie 1 → Actie 2</td><td class="px-4 py-3 text-sm"><em>Nadat ik gegeten heb, ga ik slapen.</em></td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-semibold">sinds</td><td class="px-4 py-3 text-sm">vanaf dat moment</td><td class="px-4 py-3 text-sm">Startpunt in verleden</td><td class="px-4 py-3 text-sm"><em>Sinds ik hier woon, ben ik gelukkig.</em></td></tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-semibold">totdat</td><td class="px-4 py-3 text-sm">tot het stopt</td><td class="px-4 py-3 text-sm">Eindpunt</td><td class="px-4 py-3 text-sm"><em>Wacht totdat ik terugkom.</em></td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-4 py-3 text-sm font-semibold">zodra</td><td class="px-4 py-3 text-sm">onmiddellijk</td><td class="px-4 py-3 text-sm">Directe opvolging</td><td class="px-4 py-3 text-sm"><em>Zodra de bel gaat, lopen we uit.</em></td></tr>
            </tbody>
          </table>
        </div>

        <div class="bg-rose-50 dark:bg-rose-900/20 border border-rose-200 dark:border-rose-800 rounded-lg p-4 my-4">
          <p class="font-bold text-rose-700 dark:text-rose-300 mb-1">🚨 PAS OP 1: TOEN vs ALS (De allergrootste valkuil!)</p>
          <div class="grid md:grid-cols-2 gap-3 mt-2">
            <div class="bg-white dark:bg-slate-800/50 p-3 rounded">
              <p class="text-sm font-semibold text-emerald-600 mb-1">✅ TOEN = Eenmalig verleden</p>
              <p class="text-xs"><em>Toen ik gisteren thuiskwam, belde de telefoon.</em><br>Gebruik alleen voor iets dat <strong>één keer</strong> in het verleden gebeurde.</p>
            </div>
            <div class="bg-white dark:bg-slate-800/50 p-3 rounded">
              <p class="text-sm font-semibold text-indigo-600 mb-1">✅ ALS = Herhaling of Toekomst</p>
              <p class="text-xs"><em>Als ik moe ben, drink ik thee.</em> (altijd/herhaling)<br><em>Als ik morgen tijd heb, kom ik.</em> (toekomst)</p>
            </div>
          </div>
        </div>

        <div class="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-400 p-4 my-4">
          <p class="font-bold text-amber-800 dark:text-amber-200 mb-1">⚠️ PAS OP 2: Terwijl heeft twee gezichten!</p>
          <p class="text-sm text-slate-700 dark:text-slate-300 mt-1">
            • <strong>Tijd:</strong> <em>Terwijl ik kook, leest hij.</em> (twee acties tegelijk)<br>
            • <strong>Tegenstelling:</strong> <em>Terwijl hij ziek is, werkt hij toch door.</em> = ondanks dat (concessie).<br>
            Tip: Bij tegenstelling klinkt <em>hoewel</em> vaak duidelijker: <em>Hoewel hij ziek is, werkt hij door.</em>
          </p>
        </div>
      `
    },
    {
      title: "Deel 3: Redenbepaalde bijzin (Waarom?) ❓",
      body: `
        <p>Een redenbepaalde bijzin verklaart <strong>waarom</strong> iets gebeurt. De keuze van het voegwoord bepaalt de nadruk.</p>
        
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-emerald-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Voegwoord</th><th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Register</th><th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Nuance</th><th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Voorbeeld</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-semibold">omdat</td><td class="px-4 py-3 text-sm">Neutraal</td><td class="px-4 py-3 text-sm">Directe reden / bewuste keuze</td><td class="px-4 py-3 text-sm"><em>Ik neem een paraplu, omdat het gaat regenen.</em></td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-semibold">doordat</td><td class="px-4 py-3 text-sm">Neutraal</td><td class="px-4 py-3 text-sm">Feitelijke oorzaak / gevolg</td><td class="px-4 py-3 text-sm"><em>De weg is glad, doordat het heeft gevroren.</em></td></tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-semibold">aangezien</td><td class="px-4 py-3 text-sm">Formeel</td><td class="px-4 py-3 text-sm">Geschreven taal, logisch argument</td><td class="px-4 py-3 text-sm"><em>Aangezien de trein vertraagd is, neem ik de bus.</em></td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-4 py-3 text-sm font-semibold">want</td><td class="px-4 py-3 text-sm">Neutraal</td><td class="px-4 py-3 text-sm">⚠️ <strong>GEEN BIJZIN!</strong> Hoofdzin (SVO)</td><td class="px-4 py-3 text-sm"><em>Ik blijf thuis, want ik ben ziek.</em></td></tr>
            </tbody>
          </table>
        </div>

        <div class="grid md:grid-cols-2 gap-4 my-4">
          <div class="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 rounded-lg p-4">
            <h4 class="font-bold text-indigo-700 dark:text-indigo-300 mb-2">🔍 Omdat vs. Doordat</h4>
            <p class="text-sm text-slate-700 dark:text-slate-300 mb-2">Beide vragen "waarom?", maar de focus verschilt:</p>
            <ul class="space-y-2 text-sm">
              <li><strong>OMDAT:</strong> Focus op de <em>reden/keuze</em>. "Ik doe dit omdat..."</li>
              <li><strong>DOORDAT:</strong> Focus op het <em>feit/gevolg</em>. "Dit gebeurt doordat..."</li>
            </ul>
          </div>
          <div class="bg-rose-50 dark:bg-rose-900/20 border border-rose-200 dark:border-rose-800 rounded-lg p-4">
            <h4 class="font-bold text-rose-700 dark:text-rose-300 mb-2">🚨 PAS OP 4: WANT is geen bijzin!</h4>
            <p class="text-sm text-slate-700 dark:text-slate-300 mb-2"><em>Want</em> is nevenschikkend. Het verbindt twee hoofdzinnen. Het werkwoord blijft op plek 2!</p>
            <ul class="space-y-1 text-sm">
              <li class="text-rose-600">❌ <em>...want ik heb hard gewerkt heb.</em></li>
              <li class="text-emerald-600">✅ <em>...want ik <strong>heb</strong> hard gewerkt.</em></li>
            </ul>
          </div>
        </div>
      `
    },
    {
      title: "Deel 4: Doelbepaalde bijzin (Waarvoor?) 🎯",
      body: `
        <p>Een doelbepaalde bijzin geeft het <strong>oogmerk</strong> of <strong>doel</strong> van een actie aan. De constructie hangt af van het onderwerp.</p>
        
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-purple-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Constructie</th><th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Onderwerp</th><th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Register</th><th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Voorbeeld</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-semibold">zodat</td><td class="px-4 py-3 text-sm">Verschillend onderwerp (of zelfde)</td><td class="px-4 py-3 text-sm">Neutraal, standaard</td><td class="px-4 py-3 text-sm"><em>Ik spaar geld, zodat ik een huis kan kopen.</em></td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-semibold">opdat</td><td class="px-4 py-3 text-sm">Verschillend onderwerp</td><td class="px-4 py-3 text-sm">Zeer formeel / literair</td><td class="px-4 py-3 text-sm"><em>Ik werk hard, opdat mijn kinderen beter kunnen studeren.</em></td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-4 py-3 text-sm font-semibold">om ... te + inf</td><td class="px-4 py-3 text-sm"><strong>Zelfde onderwerp!</strong></td><td class="px-4 py-3 text-sm">Neutraal, compact</td><td class="px-4 py-3 text-sm"><em>Ik spaar geld om een huis te kopen.</em></td></tr>
            </tbody>
          </table>
        </div>

        <div class="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-400 p-4 my-4">
          <p class="font-bold text-amber-800 dark:text-amber-200 mb-1">⚠️ PAS OP 6: Zodat vs. Omdat (Niet verwarren!)</p>
          <p class="text-sm text-slate-700 dark:text-slate-300 mt-1">
            • <strong>OMDAT</strong> = <em>reden</em> (waarom het al gebeurt): <em>Ik ga naar bed, omdat ik moe ben.</em><br>
            • <strong>ZODAT</strong> = <em>doel</em> (waarom ik het doe): <em>Ik ga vroeg naar bed, zodat ik morgen fit ben.</em><br>
            Test: Vervang door "met als doel dat". Klopt het? → Zodat.
          </p>
        </div>
      `
    },
    {
      title: "Deel 5: Voorwaardelijke bijzin (Onder welke conditie?) 🔑",
      body: `
        <p>Een voorwaardelijke bijzin geeft de <strong>voorwaarde</strong> waaronder de hoofdactie plaatsvindt. Het is de Nederlandse "if-clause".</p>
        
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-amber-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Voegwoord</th><th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Betekenis</th><th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Nuance</th><th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Voorbeeld</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-semibold">als</td><td class="px-4 py-3 text-sm">indien</td><td class="px-4 py-3 text-sm">Neutraal, meest gebruikt</td><td class="px-4 py-3 text-sm"><em>Als het mooi weer is, gaan we wandelen.</em></td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-semibold">indien</td><td class="px-4 py-3 text-sm">als</td><td class="px-4 py-3 text-sm">Formeel, juridisch, contracten</td><td class="px-4 py-3 text-sm"><em>Indien u akkoord gaat, tekent u hier.</em></td></tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-semibold">mits</td><td class="px-4 py-3 text-sm">op voorwaarde dat</td><td class="px-4 py-3 text-sm"><strong>Positieve</strong> voorwaarde</td><td class="px-4 py-3 text-sm"><em>Je mag gaan, mits je je huiswerk maakt.</em></td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-semibold">tenzij</td><td class="px-4 py-3 text-sm">behalve als</td><td class="px-4 py-3 text-sm"><strong>Negatieve</strong> voorwaarde</td><td class="px-4 py-3 text-sm"><em>Ik kom, tenzij ik ziek word.</em></td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-4 py-3 text-sm font-semibold">wanneer</td><td class="px-4 py-3 text-sm">op het moment dat</td><td class="px-4 py-3 text-sm">Formeel, schriftelijk</td><td class="px-4 py-3 text-sm"><em>Wanneer u klaar bent, mogen we vertrekken.</em></td></tr>
            </tbody>
          </table>
        </div>

        <div class="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 rounded-lg p-4 my-4">
          <p class="font-bold text-indigo-800 dark:text-indigo-200 mb-1">🔍 MITS vs. TENZIJ (Positief vs. Negatief)</p>
          <p class="text-sm text-slate-700 dark:text-slate-300">
            • <strong>MITS:</strong> Vereist dat iets <em>wel</em> gebeurt. "Je mag mee, <em>mits</em> je betaalt." (Betalen is nodig)<br>
            • <strong>TENZIJJ:</strong> Geldt <em>behalve als</em> iets gebeurt. "Ik kom, <em>tenzij</em> ik ziek ben." (Ziekte is de enige reden om niet te komen)
          </p>
        </div>
      `
    },
    {
      title: "Deel 6: Bijzin eerst = Inversie & Temporale Afstemming 🔄⏱️",
      body: `
        <h3 class="text-lg font-bold mt-2 mb-2">🔄 Inversie na een vooropgeplaatste bijzin</h3>
        <p class="text-sm text-slate-700 dark:text-slate-300 mb-3">Als een bijzin <strong>vóór</strong> de hoofdzin staat, telt de <strong>hele bijzin als Positie 1</strong>. De hoofdzin begint direct met de persoonsvorm (inversie!).</p>
        
        <div class="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-lg p-4 my-4">
          <p class="text-sm font-mono mb-2">BIJZIN (Pos 1) + PERSOONSVOORM (Pos 2) + ONDERWERP (Pos 3) + REST</p>
          <ul class="space-y-1 text-sm">
            <li>✅ <em>Because het regent, <strong>blijf</strong> ik thuis.</em> (Niet: <em>...blijf ik het regen.</em>)</li>
            <li>✅ <em>Wanneer je klaar bent, <strong>mag</strong> je gaan.</em></li>
            <li>❌ <em>Omdat het regent, ik <strong>blijf</strong> thuis.</em> (Fout: dubbel onderwerp)</li>
          </ul>
        </div>

        <h3 class="text-lg font-bold mt-6 mb-2">⏱️ Temporale Afstemming (Tijden in bijzinnen)</h3>
        <p class="text-sm text-slate-700 dark:text-slate-300 mb-2">De tijd in de bijzin moet logisch aansluiten bij de hoofdactie.</p>
        <ul class="space-y-2 text-sm">
          <li class="flex items-start"><span class="text-emerald-500 mr-2">✅</span><span><strong>Gelijktijdigheid:</strong> Zelfde tijd. <em>Ik lees, terwijl hij tv kijkt.</em> / <em>Ik las, terwijl hij keek.</em></span></li>
          <li class="flex items-start"><span class="text-emerald-500 mr-2">✅</span><span><strong>Voorafgaandheid:</strong> Bijzin eerder → voltooid deelwoord. <em>Nadat ik gegeten heb, ga ik slapen.</em></span></li>
          <li class="flex items-start"><span class="text-rose-500 mr-2">❌</span><span class="text-rose-600"><strong>Fout:</strong> <em>Wanneer ik gisteren kwam, eet ik.</em> (Tijd mismatch!)</span></li>
        </ul>
      `
    },
    {
      title: "Deel 7: Het Ultieme Beslisalgoritme (5 stappen) 🗺️",
      body: `
        <p>Twijfel je welk voegwoord je moet kiezen? Doorloop dit stappenplan:</p>
        
        <div class="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 rounded-lg p-4 my-4">
          <ol class="list-decimal list-inside space-y-3 text-sm text-slate-700 dark:text-slate-300">
            <li><strong>Stap 1: Welke informatie geeft de bijzin?</strong><br>• Wanneer? → Tijd • Waarom? → Reden • Waarvoor? → Doel • Onder welke conditie? → Voorwaarde</li>
            <li><strong>Stap 2: Is het éénmalig verleden of herhaling/toekomst?</strong><br>• Eenmalig verleden → <em>toen</em> • Herhaling/toekomst → <em>als</em></li>
            <li><strong>Stap 3: Is de onderliggende relatie een reden of een doel?</strong><br>• Oorzaak → <em>omdat/doordat</em> • Oogmerk → <em>zodat/om...te</em></li>
            <li><strong>Stap 4: Is de voorwaarde positief of negatief?</strong><br>• Ja, mits → <em>mits</em> • Nee, behalve → <em>tenzij</em></li>
            <li><strong>Stap 5: Bijzin of Hoofdzin?</strong><br>• Begint met <em>omdat, als, terwijl, zodat, mits, tenzij</em> → <strong>SOV</strong> (werkwoord achteraan)<br>• Begint met <em>want, maar, en, dus, of</em> → <strong>SVO</strong> (werkwoord op plek 2)</li>
          </ol>
        </div>
      `
    },
    {
      title: "Deel 8: Snelle Herhaling – Alles op Één Pagina ⚡",
      body: `
        <ul class="my-2 space-y-2 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-['✅'] before:absolute before:left-0 before:top-[0.4rem] text-slate-700 dark:text-slate-300"><strong>SOV is wet:</strong> Bijzin → werkwoord ALTIJD achteraan.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-['✅'] before:absolute before:left-0 before:top-[0.4rem] text-slate-700 dark:text-slate-300"><strong>Tijd:</strong> <em>toen</em> (eenmalig verleden), <em>als</em> (herhaling/toekomst), <em>terwijl</em> (gelijktijdig), <em>voordat/nadat</em> (volgorde).</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-['✅'] before:absolute before:left-0 before:top-[0.4rem] text-slate-700 dark:text-slate-300"><strong>Reden:</strong> <em>omdat</em> (keuze/reden), <em>doordat</em> (feit/gevolg), <em>aangezien</em> (formeel).</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-['✅'] before:absolute before:left-0 before:top-[0.4rem] text-slate-700 dark:text-slate-300"><strong>Doel:</strong> <em>zodat</em> (verschillend onderwerp of algemeen), <em>om...te</em> (zelfde onderwerp).</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-['✅'] before:absolute before:left-0 before:top-[0.4rem] text-slate-700 dark:text-slate-300"><strong>Voorwaarde:</strong> <em>als/indien</em> (neutraal/formeel), <em>mits</em> (positief), <em>tenzij</em> (negatief).</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-['⚠️'] before:absolute before:left-0 before:top-[0.4rem] text-slate-700 dark:text-slate-300"><strong>Want:</strong> nevenschikkend → SVO! Werkwoord blijft op plek 2.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-['⚠️'] before:absolute before:left-0 before:top-[0.4rem] text-slate-700 dark:text-slate-300"><strong>Inversie:</strong> Bijzin vooraan = hele bijzin is Pos 1 → hoofdzin start direct met PV.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-['💡'] before:absolute before:left-0 before:top-[0.4rem] text-slate-700 dark:text-slate-300"><strong>Tijd matchen:</strong> Gelijktijdig = zelfde tijd. Eerder = voltooid deelwoord in bijzin.</li>
        </ul>
      `
    }
  ],
  rulesTable: [
    {
      rule: "SOV-regel voor bijzinnen",
      structure: "In elke bijzin staat de persoonsvorm ALTIJD helemaal achteraan, na alle andere zinsdelen.",
      example: "...omdat Jan het boek leest. • ...terwijl ik kook.",
      usage: "Check eerst het voegwoord. Is het onderschikkend? → Werkwoord naar het einde."
    },
    {
      rule: "Toen vs. Als (Tijd)",
      structure: "Eenmalig verleden → TOEN. Herhaling of Toekomst → ALS.",
      example: "Toen ik gisteren kwam... (eenmalig) • Als ik moe ben... (herhaling) • Als het morgen kan... (toekomst)",
      usage: "Nooit door elkaar halen. Dit is de meest geteste regel in examen Nederlands."
    },
    {
      rule: "Omdat vs. Doordat vs. Want",
      structure: "Omdat = reden/keuze. Doordat = feitelijk gevolg. Want = nevenschikkend (SVO, geen bijzin!).",
      example: "...omdat ik het wil. (keuze) • ...doordat het sneeuwt. (gevolg) • Ik ga niet, want ik ben ziek. (SVO)",
      usage: "Wil je het werkwoord achteraan? Gebruik omdat/doordat. Blijft het op plek 2? Gebruik want."
    },
    {
      rule: "Zodat vs. Om...te (Doel)",
      structure: "Zodat = kan met verschillend of zelfde onderwerp. Om...te = ALLEEN als onderwerp identiek is.",
      example: "Ik werk, zodat ik rijk word. • Ik werk, om rijk te worden. (zelfde onderwerp)",
      usage: "Twijfel je? Gebruik 'zodat'. Dat is altijd grammaticaal veilig."
    },
    {
      rule: "Mits vs. Tenzij (Voorwaarde)",
      structure: "Mits = positieve eis (op voorwaarde dat). Tenzij = negatieve uitzondering (behalve als).",
      example: "Je mag mee, mits je betaalt. • Ik kom, tenzij ik ziek ben.",
      usage: "Vervang door 'op voorwaarde dat' (mits) of 'behalve als' (tenzij)."
    },
    {
      rule: "Inversie na vooropgeplaatste bijzin",
      structure: "Bijzin op Pos 1 → Hoofdzin begint direct met persoonsvorm + onderwerp + rest.",
      example: "Omdat het regent, blijf ik thuis. • Wanneer je klaar bent, mag je gaan.",
      usage: "Zet NOOIT het onderwerp direct na de bijzin. Altijd eerst de persoonsvorm."
    }
  ],
  callouts: [
    { type: "remember", label: "⚠️ PAS OP 1", text: "TOEN = éénmalig verleden. ALS = herhaling of toekomst. Nooit verwisselen!" },
    { type: "remember", label: "⚠️ PAS OP 2", text: "WANT maakt GEEN bijzin. Het werkwoord blijft op plek 2 (SVO). Alleen omdat/doordat/etc. zetten werkwoord achteraan." },
    { type: "remember", label: "⚠️ PAS OP 3", text: "OMDAT = reden/keuze. ZODAT = doel/oogmerk. Vraag 'waarom?' (omdat) vs 'waarvoor?' (zodat)." },
    { type: "remember", label: "⚠️ PAS OP 4", text: "OM...TE alleen als onderwerp in hoofd- én bijzin hetzelfde is. Verschillend onderwerp? → ZODAT." },
    { type: "remember", label: "⚠️ PAS OP 5", text: "MITS = positief (mits je betaalt). TENZIJ = negatief (tenzij je ziek bent)." },
    { type: "remember", label: "⚠️ PAS OP 6", text: "Bijzin eerst? → Hele bijzin = Pos 1. Hoofdzin start DIRECT met persoonsvorm (inversie)." },
    { type: "tip", label: "💡 Pro-tip", text: "Twijfel je over tijd? Match de hoofdactietijd met de bijzin. Gelijktijdig = zelfde tijd. Eerder = voltooid deelwoord in bijzin." }
  ],
  commonMistakes: [
    { incorrect: "Als ik gisteren thuiskwam, belde de telefoon.", correct: "Toen ik gisteren thuiskwam, belde de telefoon.", explanation: "Eenmalig moment in het verleden vereist 'toen', niet 'als'." },
    { incorrect: "Ik ben moe, want ik heb hard gewerkt heb.", correct: "Ik ben moe, want ik heb hard gewerkt.", explanation: "'Want' is nevenschikkend. Het werkwoord blijft op de tweede plaats. Geen SOV!" },
    { incorrect: "Ik ga naar bed, zodat ik moe ben.", correct: "Ik ga naar bed, omdat ik moe ben.", explanation: "'Moe zijn' is de reden, niet het doel. Gebruik 'omdat' voor oorzaken, 'zodat' voor oogmerken." },
    { incorrect: "Ik leer Nederlands, zodat ik in NL werk.", correct: "Ik leer Nederlands, om in NL te werken. (of: zodat ik daar kan werken)", explanation: "Zelfde onderwerp in beide delen? Gebruik 'om...te' voor een compacte doelbepaling." },
    { incorrect: "Omdat het regent, het blijf ik thuis.", correct: "Omdat het regent, blijf ik thuis.", explanation: "De bijzin is Positie 1. De hoofdzin begint direct met de persoonsvorm ('blijf'), gevolgd door het onderwerp ('ik')." },
    { incorrect: "Je mag mee, tenzij je betaalt.", correct: "Je mag mee, mits je betaalt.", explanation: "'Tenzij' is een uitzondering (behalve als). Hier is betalen een vereiste, dus 'mits' is correct." },
    { incorrect: "Wanneer ik gisteren kwam, eet ik.", correct: "Toen ik gisteren kwam, at ik.", explanation: "Tijd mismatch. 'Gisteren' vereist verleden tijd in de hoofdzin, en een eenmalig verleden vereist 'toen'." }
  ],
  review: [
    "✅ Bijzin = SOV: werkwoord altijd achteraan.",
    "✅ Toen = eenmalig verleden. Als = herhaling/toekomst.",
    "✅ Omdat = reden/keuze. Doordat = feitelijk gevolg.",
    "✅ Want = SVO (hoofdzin), werkwoord op plek 2.",
    "✅ Zodat = doel. Om...te = doel +zelfde onderwerp.",
    "✅ Mits = positieve voorwaarde. Tenzij = negatieve uitzondering.",
    "✅ Bijzin vooraan = inversie: PV direct na de bijzin.",
    "✅ Tijd matchen: gelijktijdig = zelfde tijd, eerder = voltooid in bijzin."
  ],
  qa: [
    {
      question: "Vul in: ___ ik vorige week in Amsterdam was, ___ ik het Rijksmuseum bezocht.",
      answer: "Toen, heb. Uitleg: Vorige week = eenmalig verleden → 'toen'. Voltooid verleden in hoofdzin → 'heb bezocht'."
    },
    {
      question: "Wat is correct? A) Ik ben laat, want de trein had vertraging had. B) Ik ben laat, want de trein had vertraging.",
      answer: "B. Uitleg: 'Want' is nevenschikkend → geen SOV. Het werkwoord blijft op plaats 2: 'had'."
    },
    {
      question: "Maak één zin: Ik spaar geld. Ik wil een huis kopen. (gebruik een doelbepaalde bijzin)",
      answer: "Ik spaar geld, zodat ik een huis kan kopen. (Of: Ik spaar geld om een huis te kopen.) Uitleg: Doelbepaling vereist 'zodat' of 'om...te'."
    },
    {
      question: "Vul in: Je mag de kamer uit, ___ je je tanden poetst. / Ik kom, ___ ik ziek ben.",
      answer: "mits, tenzij. Uitleg: Positieve voorwaarde = mits. Negatieve uitzondering = tenzij."
    },
    {
      question: "Welke zin is beter en waarom? A) Ik studeer hard, zodat ik een diploma haal. B) Ik studeer hard, om een diploma te halen.",
      answer: "B is compacter en natuurlijker bij identiek onderwerp. 'Zodat' mag altijd, maar 'om...te' is de standaardconstructie als het onderwerp (ik) in beide delen gelijk is."
    },
    {
      question: "Herschrijf: Het regent. Ik blijf thuis. Maak een bijzin met 'omdat' waarbij de bijzin eerst komt.",
      answer: "Omdat het regent, blijf ik thuis. Uitleg: Bijzin = Positie 1 → hoofdzin start direct met persoonsvorm 'blijf', gevolgd door onderwerp 'ik'."
    },
    {
      question: "Maak één zin: Ik leer Nederlands. Ik wil in Nederland werken. Het is moeilijk.",
      answer: "Ik leer Nederlands, omdat ik in Nederland wil werken, hoewel het moeilijk is. Uitleg: Twee bijzinnen met SOV: 'wil werken' achteraan in de redenbepaling, 'is' achteraan in de toegeving."
    }
  ]
};