import type { GrammarLesson } from "../../types";

export const voorzetselvoorwerp: GrammarLesson = {
  id: "nl-voorzetselvoorwerp-1",
  title: "Het Voorzetselvoorwerp (VV): De Ultieme Masterclass",
  level: 3,
  topic: "Grammatica & Zinsontleding",
  body: "Beheers het voorzetselvoorwerp volledig: de VV-formule, vaste voorzetsels, de cruciale persoon-vs-ding vervangingsregel, en de woordvolgorde in bijzinnen.",
  overview:
    "Dit is de meest uitgebreide, visueel schitterende en waarschuwing-rijke gids over het Voorzetselvoorwerp (VV) in het Nederlands. Je leert hoe je het VV feilloos vindt met de VV-formule, doorziet de valkuilen van 'op wat' vs 'waarop', en beheerst de gouden vervangingswet voor personen vs. dingen. Met prachtige tabellen, strikte PRO-regels en 4 complexe MAX-oefenvragen word je een absolute meester in de Nederlandse zinsontleding!",
  anchorSectionId: "wat-is-voorzetselvoorwerp",
  exercises: [],
  timeExpressionsLabel: "De VV-Formule in Één Oogopslag 🕵️‍♂️",
  timeExpressions: {
    header: "Stap | Actie | Voorbeeld",
    rows: [
      ["**Stap 1**", "Zoek Onderwerp", "*Mijn zus*"],
      ["**Stap 2**", "Zoek Persoonsvorm", "*houdt*"],
      ["**Stap 3**", "Vast Voorzetsel", "*van*"],
      ["**Stap 4**", "Vraag: Vz + wie/wat?", "*Van wie of wat?*"]
    ]
  },
  details: [
    {
      title: "Deel 1: Wat is een Voorzetselvoorwerp (VV)? 🔗",
      body: `
        <p>Een <strong>voorzetselvoorwerp</strong> is een zinsdeel dat <strong>onlosmakelijk verbonden</strong> is met het werkwoord door een <strong>vast voorzetsel</strong>.</p>
        <p class="text-sm text-slate-700 dark:text-slate-300 mb-4">Je kunt het zien als een huwelijk: het werkwoord en het voorzetsel horen bij elkaar. Als je het voorzetsel weghaalt of verandert, verandert de betekenis van het werkwoord volledig, of wordt de zin grammaticaal fout.</p>
        
        <div class="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-emerald-700 dark:text-emerald-300 mb-2">🏆 PRO REGEL 1: De Definitie</h3>
          <p class="text-slate-700 dark:text-slate-300">Een voorzetselvoorwerp is <strong>GEEN</strong> lijdend voorwerp (lv) en <strong>GEEN</strong> meewerkend voorwerp (mv). Het is een unieke categorie die je alleen vindt door de specifieke vraag te stellen.</p>
        </div>

        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-gradient-to-r from-indigo-600 to-purple-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Zin</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Analyse</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm">Ik lees <strong>een boek</strong>.</td>
                <td class="px-4 py-3 text-sm text-xs">'een boek' is <strong>Lijdend Voorwerp</strong> (Ik lees <em>wat</em>?).</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm">Ik geef <strong>hem</strong> een boek.</td>
                <td class="px-4 py-3 text-sm text-xs">'hem' is <strong>Meewerkend Voorwerp</strong> (Ik geef <em>aan wie</em>?).</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50">
                <td class="px-4 py-3 text-sm">Ik wacht <strong>op de bus</strong>.</td>
                <td class="px-4 py-3 text-sm text-xs">'<strong>op de bus</strong>' is <strong>Voorzetselvoorwerp</strong> (Ik wacht <em>op wat</em>?).</td>
              </tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      title: "Deel 2: De Formule: Hoe Vind Je Het VV? 🕵️‍♂️",
      body: `
        <p>Om het voorzetselvoorwerp feilloos te vinden, moet je een strikt stappenplan volgen. Je kunt niet raden!</p>
        
        <div class="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-indigo-700 dark:text-indigo-300 mb-2">🏆 PRO REGEL 2: De VV-Formule</h3>
          <ol class="list-decimal list-inside space-y-1 text-slate-700 dark:text-slate-300">
            <li>Zoek het <strong>Onderwerp (ow)</strong>.</li>
            <li>Zoek de <strong>Persoonsvorm (pv)</strong>.</li>
            <li>Zoek het <strong>Vaste Voorzetsel</strong> dat bij het werkwoord hoort.</li>
            <li>Stel de vraag: <strong>[Voorzetsel] + wie of wat?</strong></li>
          </ol>
          <p class="text-sm text-slate-700 dark:text-slate-300 mt-2 italic">Het antwoord op die vraag is het Voorzetselvoorwerp.</p>
        </div>

        <div class="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-4 border border-slate-200 dark:border-slate-700 my-4">
          <h4 class="font-bold text-slate-800 dark:text-slate-200 mb-2">Voorbeeld: "Mijn zus houdt van chocolade."</h4>
          <ul class="list-disc list-inside space-y-1 text-sm text-slate-700 dark:text-slate-300">
            <li><strong>Onderwerp (ow):</strong> <em>Mijn zus</em></li>
            <li><strong>Persoonsvorm (pv):</strong> <em>houdt</em></li>
            <li><strong>Vast voorzetsel:</strong> <em>van</em> (houden van)</li>
            <li><strong>Vraag:</strong> Houdt mijn zus <strong>van wie of wat</strong>? ➔ Antwoord: <strong>van chocolade</strong>.</li>
          </ul>
          <p class="text-sm font-bold text-emerald-600 mt-2">➔ 'van chocolade' is het voorzetselvoorwerp.</p>
        </div>
      `
    },
    {
      title: "Deel 3: De Grootste Tabel: Vaste Voorzetsels 📚",
      body: `
        <p>Je moet weten welk voorzetsel bij welk werkwoord hoort. Dit moet je helaas voor een groot deel uit je hoofd leren, maar hier zijn de absolute 'must-knows'.</p>
        
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-gradient-to-r from-teal-600 to-cyan-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Vast Voorzetsel</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Werkwoorden die dit voorzetsel eisen</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Voorbeeldzin (met VV)</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-bold text-teal-600">OP</td>
                <td class="px-4 py-3 text-sm text-xs">wachten op, letten op, verliefd zijn op, trots zijn op, rekenen op</td>
                <td class="px-4 py-3 text-sm">Hij wacht <strong>op zijn vriend</strong>.</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-bold text-teal-600">AAN</td>
                <td class="px-4 py-3 text-sm text-xs">denken aan, twijfelen aan, bijdragen aan, herinneren aan</td>
                <td class="px-4 py-3 text-sm">Zij denkt <strong>aan haar vakantie</strong>.</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-bold text-teal-600">MET</td>
                <td class="px-4 py-3 text-sm text-xs">praten met, rekening houden met, beginnen met, stoppen met</td>
                <td class="px-4 py-3 text-sm">Wij houden rekening <strong>met de kosten</strong>.</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-bold text-teal-600">VOOR</td>
                <td class="px-4 py-3 text-sm text-xs">zorgen voor, bang voor, kiezen voor, bedanken voor</td>
                <td class="px-4 py-3 text-sm">Ik zorg <strong>voor de kinderen</strong>.</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-bold text-teal-600">VAN</td>
                <td class="px-4 py-3 text-sm text-xs">houden van, dromen van, genieten van, afhangen van</td>
                <td class="px-4 py-3 text-sm">Zij houdt <strong>van muziek</strong>.</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-bold text-teal-600">OVER</td>
                <td class="px-4 py-3 text-sm text-xs">praten over, nadenken over, klagen over, gaan over</td>
                <td class="px-4 py-3 text-sm">Hij klaagt <strong>over het weer</strong>.</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50">
                <td class="px-4 py-3 text-sm font-bold text-teal-600">NAAR</td>
                <td class="px-4 py-3 text-sm text-xs">luisteren naar, kijken naar, vragen naar, verwijzen naar</td>
                <td class="px-4 py-3 text-sm">Wij luisteren <strong>naar de radio</strong>.</td>
              </tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      title: "Deel 4: De Vervangingsregel: Personen vs. Dingen 👥 vs 📦",
      body: `
        <p>Dit is de <strong>allerbelangrijkste regel</strong> van het voorzetselvoorwerp. Hoe vervang je het VV door een voornaamwoord? Dat hangt 100% af van of het om een <strong>persoon</strong> of een <strong>ding/concept</strong> gaat.</p>
        
        <div class="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-emerald-700 dark:text-emerald-300 mb-2">🏆 PRO REGEL 3: De Gouden Vervangingswet</h3>
          <ul class="space-y-2 text-slate-700 dark:text-slate-300">
            <li>🔹 Verwijst het VV naar een <strong>PERSOON</strong>? Gebruik: <strong>Voorzetsel + Persoonlijk voornaamwoord</strong> (<em>op hem, met haar, van hen</em>).</li>
            <li>🔹 Verwijst het VV naar een <strong>DING of CONCEPT</strong>? Gebruik: <strong>Voornaamwoordelijk bijwoord</strong> (<em>erop, ermee, ervan</em>) of <strong>waar + voorzetsel</strong> (vragend).</li>
          </ul>
        </div>

        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-gradient-to-r from-purple-600 to-pink-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Type VV</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Originele Zin</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Vervanging (Correct ✅)</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Vervanging (Fout ❌)</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold text-blue-600">Persoon</td>
                <td class="px-4 py-3 text-sm">Ik wacht <strong>op mijn vader</strong>.</td>
                <td class="px-4 py-3 text-sm text-emerald-600 font-bold">Ik wacht <strong>op hem</strong>.</td>
                <td class="px-4 py-3 text-sm text-rose-600">Ik wacht <em>erop</em>.</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold text-purple-600">Ding</td>
                <td class="px-4 py-3 text-sm">Ik wacht <strong>op de bus</strong>.</td>
                <td class="px-4 py-3 text-sm text-emerald-600 font-bold">Ik wacht <strong>erop</strong>.</td>
                <td class="px-4 py-3 text-sm text-rose-600">Ik wacht <em>op het</em>.</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold text-blue-600">Vraag (Persoon)</td>
                <td class="px-4 py-3 text-sm">Op wie wacht je?</td>
                <td class="px-4 py-3 text-sm text-emerald-600 font-bold">Op wie wacht je?</td>
                <td class="px-4 py-3 text-sm text-rose-600">Waar wacht je op?</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30">
                <td class="px-4 py-3 text-sm font-semibold text-purple-600">Vraag (Ding)</td>
                <td class="px-4 py-3 text-sm">Waar wacht je op?</td>
                <td class="px-4 py-3 text-sm text-emerald-600 font-bold">Waar wacht je op?</td>
                <td class="px-4 py-3 text-sm text-rose-600">Op wat wacht je?</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="bg-rose-50 dark:bg-rose-900/20 border-l-4 border-rose-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-rose-700 dark:text-rose-300 mb-2">🚨 PAS OP! DE "OP WAT" VALKUIL!</h3>
          <p class="text-sm text-slate-700 dark:text-slate-300">In het Nederlands is het <strong>streng verboden</strong> om "op wat", "met wat" of "van wat" te zeggen als je naar een ding vraagt of ernaar verwijst. Je <strong>moet</strong> <em>waar + voorzetsel</em> (waarop, waarmee, waarvan) of een voornaamwoordelijk bijwoord (erop, ermee, ervan) gebruiken.</p>
        </div>
      `
    },
    {
      title: "Deel 5: Woordvolgorde & Scheidbare Werkwoorden 📏",
      body: `
        <p>De plek van het voorzetselvoorwerp in de zin is flexibel, maar er zijn duidelijke voorkeuren.</p>
        
        <h3 class="text-lg font-bold mt-6 mb-3 text-slate-800 dark:text-slate-200">A. In de Hoofdzin</h3>
        <p class="text-sm text-slate-700 dark:text-slate-300 mb-2">Het VV staat meestal direct na de persoonsvorm, of (als er veel andere woorden zijn) helemaal aan het einde van de zin.</p>
        <ul class="list-disc list-inside space-y-1 text-sm text-slate-700 dark:text-slate-300 mb-6">
          <li><em>Ik wacht <strong>op de bus</strong>.</em> (Direct na pv)</li>
          <li><em>Ik wacht al een half uur in de regen <strong>op de bus</strong>.</em> (Aan het einde, na tijd/plaats)</li>
        </ul>

        <h3 class="text-lg font-bold mt-6 mb-3 text-slate-800 dark:text-slate-200">B. In de Bijzin (SOV-regel)</h3>
        <p class="text-sm text-slate-700 dark:text-slate-300 mb-2">In een bijzin staat het VV <strong>vóór</strong> de werkwoorden die aan het einde staan.</p>
        <ul class="list-disc list-inside space-y-1 text-sm text-slate-700 dark:text-slate-300 mb-6">
          <li><em>...omdat ik <strong>op de bus</strong> wacht.</em></li>
          <li><em>...omdat ik al een half uur <strong>op de bus</strong> wacht.</em></li>
        </ul>

        <div class="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-amber-700 dark:text-amber-300 mb-2">🚨 PAS OP! DE SCHEIDBARE WERKWOORDEN VALKUIL!</h3>
          <p class="text-sm text-slate-700 dark:text-slate-300 mb-2">Als het werkwoord scheidbaar is (bijv. <em>rekening houden</em>), blijft het voorzetsel vast aan het tweede deel van het werkwoord geplakt in de vraag, maar in de zin wordt het gesplitst.</p>
          <ul class="space-y-1 text-sm text-slate-700 dark:text-slate-300">
            <li><strong>Werkwoord:</strong> rekening houden <strong>met</strong></li>
            <li><strong>Vraag:</strong> Houdt hij rekening <strong>met</strong> de kosten?</li>
            <li><strong>Zin:</strong> Hij <strong>houdt</strong> rekening <strong>met</strong> de kosten.</li>
          </ul>
        </div>
      `
    }
  ],
  rulesTable: [
    {
      rule: "De VV-Formule",
      structure: "Onderwerp + Persoonsvorm + Vast Voorzetsel + Wie/Wat? = Het antwoord is het VV.",
      example: "Hij wacht op de bus. (Hij wacht op wie/wat? -> op de bus).",
      usage: "Gebruik deze formule om het VV te onderscheiden van het lijdend of meewerkend voorwerp."
    },
    {
      rule: "Vaste Voorzetsels",
      structure: "Bepaalde werkwoorden eisen een specifiek voorzetsel (houden VAN, wachten OP, etc.).",
      example: "Ik luister naar muziek. (Niet: luister op muziek).",
      usage: "Leer de combinatie van werkwoord + voorzetsel als één geheel (een 'chunk')."
    },
    {
      rule: "De Gouden Vervangingswet",
      structure: "Persoon = Vz + Persoonlijk Vnw (op hem). Ding = Er+Vz (erop) / Waar+Vz (waarop).",
      example: "Ik wacht op hem (persoon). / Ik wacht erop (ding).",
      usage: "Dit is de belangrijkste regel voor het gebruik van voornaamwoordelijke bijwoorden."
    },
    {
      rule: "Woordvolgorde in Bijzin",
      structure: "In een bijzin staat het VV vóór de persoonsvorm die achteraan staat.",
      example: "...omdat ik op de bus wacht.",
      usage: "Het VV komt niet helemaal achteraan, maar vóór de werkwoordelijke eindgroep."
    }
  ],
  callouts: [
    { type: "remember", label: "🏆 PRO REGEL 1", text: "Een VV is GEEN lijdend voorwerp. Het wordt gevonden met de vraag: [Voorzetsel] + wie/wat?" },
    { type: "remember", label: "🏆 PRO REGEL 2", text: "De VV-Formule: Ow + Pv + Vast Vz + Wie/Wat? = VV." },
    { type: "remember", label: "🏆 PRO REGEL 3", text: "De Gouden Vervangingswet: Persoon = Vz+Vnw (op hem), Ding = Er+Vz (erop) / Waar+Vz (waarop)." },
    { type: "remember", label: "⚠️ PAS OP 1", text: "Zeg NOOIT 'op wat' of 'met wat'. Gebruik 'waarop' of 'waarmee'." },
    { type: "remember", label: "⚠️ PAS OP 2", text: "Pas op voor letterlijke vertalingen uit het Engels (listen to -> luisteren naar, niet 'op')." },
    { type: "tip", label: "💡 Pro-tip", text: "Bij scheidbare werkwoorden (rekening houden met) blijft het voorzetsel bij het tweede deel ('rekening' en 'met' horen bij 'houden')." }
  ],
  commonMistakes: [
    { incorrect: "Ik luister op de muziek.", correct: "Ik luister naar de muziek.", explanation: "Letterlijke vertaling van 'listen to'. Het Nederlandse werkwoord is 'luisteren naar'." },
    { incorrect: "Waar denk je op? / Ik denk op wat.", correct: "Waar denk je aan? / Ik denk eraan.", explanation: "Het werkwoord is 'denken aan'. Voor dingen gebruik je 'waar+aan' of 'er+aan'." },
    { incorrect: "Ik ben boos erop. (bedoeld: op een persoon)", correct: "Ik ben boos op hem.", explanation: "Bij personen gebruik je ALTIJD 'voorzetsel + persoonlijk voornaamwoord' (op hem), nooit 'erop'." },
    { incorrect: "...omdat ik wacht op de bus.", correct: "...omdat ik op de bus wacht.", explanation: "In een bijzin staat het voorzetselvoorwerp vóór de persoonsvorm die achteraan staat." },
    { incorrect: "Ik houd met jou.", correct: "Ik houd van jou.", explanation: "Het vaste voorzetsel bij 'houden' (in de betekenis van liefde) is 'van', niet 'met'." }
  ],
  review: [
    "✅ VV = vast voorzetsel + wie/wat?",
    "✅ VV is geen lijdend of meewerkend voorwerp.",
    "✅ Vaste voorzetsels leren als 'chunks' (wachten op, houden van).",
    "✅ Vervanging Persoon = Vz + Vnw (op hem).",
    "✅ Vervanging Ding = Er+Vz (erop) of Waar+Vz (waarop).",
    "✅ NOOIT 'op wat' zeggen. Gebruik 'waarop'.",
    "✅ Bijzin: VV staat vóór de pv."
  ],
  qa: [
    {
      question: "De VV-Formule en Identificatie: Analyseer de volgende zin. Wat is het onderwerp (ow), de persoonsvorm (pv), en wat is het volledige voorzetselvoorwerp (vv)? 'De nieuwe manager twijfelt ernstig aan de haalbaarheid van dit project.'",
      answer: "Onderwerp (ow): De nieuwe manager. Persoonsvorm (pv): twijfelt. Vast voorzetsel: aan (twijfelen aan). Vraag: Twijfelt de nieuwe manager aan wie of wat? -> Antwoord: aan de haalbaarheid van dit project. Het volledige voorzetselvoorwerp is 'aan de haalbaarheid van dit project'."
    },
    {
      question: "De Persoon vs. Ding Vervanging: Herschrijf de volgende twee zinnen door het vetgedrukte voorzetselvoorwerp te vervangen door een voornaamwoord. Let extreem goed op de regel voor personen vs. dingen! 1. 'Ik praat vaak met mijn vader over zijn werk.' 2. 'Ik praat vaak met de directeur over het nieuwe beleid.'",
      answer: "1. Ik praat vaak met hem over zijn werk. ('Mijn vader' is een persoon -> voorzetsel + persoonlijk voornaamwoord). 2. Ik praat vaak met hem over het nieuwe beleid. ('De directeur' is ook een persoon! Veel leerlingen maken hier de fout om 'ermee' te gebruiken omdat het een functie is, maar het blijft een mens -> met hem)."
    },
    {
      question: "Woordvolgorde in de Bijzin met Scheidbaar Werkwoord: Maak van de volgende twee zinnen één complexe bijzin beginnend met 'Omdat'. Let op de plek van het voorzetselvoorwerp en het scheidbare werkwoord 'rekening houden met'. Zin A: Hij is een goede chauffeur. Zin B: Hij houdt rekening met andere weggebruikers.",
      answer: "Omdat hij met andere weggebruikers rekening houdt, is hij een goede chauffeur. (Uitleg: 1. Voegwoord 'omdat'. 2. Onderwerp 'hij'. 3. Het VV 'met andere weggebruikers' komt vóór de werkwoorden. 4. Het scheidbare werkwoord splitst: 'rekening' komt vóór de persoonsvorm 'houdt', die helemaal achteraan staat)."
    },
    {
      question: "De Vaste Voorzetsel Valkuil & Register: Een Engelstalige student vertaalt de zin 'I depend on your decision' letterlijk naar het Nederlands als: 'Ik hang af op jouw beslissing.' Waarom is deze zin op twee niveaus fout (voorzetsel én woordkeuze), en hoe luidt de correcte, professionele Nederlandse zin met het juiste voorzetselvoorwerp?",
      answer: "De zin is fout omdat: 1. Het Nederlandse werkwoord is niet 'afhangen' (dat is letterlijk 'to hang down'), maar 'afhankelijk zijn'. 2. Het vaste voorzetsel bij 'afhankelijk zijn' is 'van', niet 'op'. Correcte zin: 'Ik ben afhankelijk van jouw beslissing.' (Analyse: ow = Ik, pv = ben, vast voorzetsel = van, vv = van jouw beslissing)."
    }
  ]
};