import type { GrammarLesson } from "../../types";

export const werkwoordelijkGezegde: GrammarLesson = {
  id: "nl-werkwoordelijk-gezegde-1",
  title: "Het Werkwoordelijk Gezegde: De Motor van de Zin – De Ultieme Masterclass",
  level: 3,
  topic: "Grammatica & Zinsontleding",
  body: "Beheers het werkwoordelijk gezegde volledig: het vinden van alle werkwoorden, de 4-stappen formule, de invloed van tijden, modale en scheidbare werkwoorden, en de woordvolgorde in hoofd- en bijzinnen.",
  overview:
    "Dit is de meest uitgebreide, visueel schitterende en waarschuwing-rijke gids over het Werkwoordelijk Gezegde (WVG) in het Nederlands. Je leert hoe je feilloos alle werkwoorden vindt die bij een actie horen, doorziet de valkuilen van scheidbare en modale werkwoorden, en beheerst de complexe woordvolgorde in bijzinnen. Met prachtige tabellen, strikte PRO-regels en 4 complexe oefenvragen word je een absolute meester in de Nederlandse zinsontleding!",
  anchorSectionId: "wat-is-werkwoordelijk-gezegde",
  exercises: [],
  timeExpressionsLabel: "De Bouwstenen van het WVG in Verschillende Tijden ⏳",
  timeExpressions: {
    header: "Tijd | Formule van het WVG | Voorbeeldzin",
    rows: [
      ["**OTT** (Tegenwoordig)", "PV", "Hij **leest** een boek."],
      ["**OVT** (Verleden)", "PV", "Hij **las** een boek."],
      ["**VTT** (Voltooid Tegenw.)", "PV (hebben/zijn) + Voltooid Deelwoord", "Hij **heeft** een boek **gelezen**."],
      ["**VVT** (Voltooid Verleden)", "PV (hadden/waren) + Voltooid Deelwoord", "Hij **had** een boek **gelezen**."],
      ["**OTTt** (Toekomend)", "PV (zal/zullen) + Infinitief", "Hij **zal** een boek **lezen**."],
      ["**VTTt** (Voltooid Toekom.)", "PV (zal/zullen) + Voltooid Deelwoord + hebben/zijn", "Hij **zal** een boek **gelezen hebben**."]
    ]
  },
  details: [
    {
      title: "Deel 1: Wat is een Werkwoordelijk Gezegde (WVG)? ⚙️",
      body: `
        <p>Een <strong>werkwoordelijk gezegde</strong> is het deel van de zin dat de <strong>actie</strong> uitdrukt. In tegenstelling tot een naamwoordelijk gezegde (dat een toestand beschrijft met <em>zijn/worden/blijven</em>), vertelt het werkwoordelijk gezegde <strong>wat het onderwerp doet, heeft gedaan of zal doen</strong>.</p>
        <p class="text-sm text-slate-700 dark:text-slate-300 mb-4">Het belangrijkste om te onthouden: <strong>Een werkwoordelijk gezegde kan uit MEERDERE woorden bestaan!</strong> Het is niet alleen de persoonsvorm, maar <em>alle</em> werkwoorden die bij elkaar horen.</p>
        
        <div class="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-emerald-700 dark:text-emerald-300 mb-2">🏆 PRO REGEL 1: De Definitie</h3>
          <p class="text-slate-700 dark:text-slate-300">Het werkwoordelijk gezegde = <strong>De Persoonsvorm (PV) + Alle andere werkwoorden</strong> (voltooid deelwoorden, infinitieven) die bij deze actie horen.</p>
        </div>

        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-gradient-to-r from-indigo-600 to-purple-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Zin</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Onderwerp (OW)</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Werkwoordelijk Gezegde (WVG)</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Uitleg</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm">Jan loopt.</td>
                <td class="px-4 py-3 text-sm">Jan</td>
                <td class="px-4 py-3 text-sm font-bold text-emerald-600">loopt</td>
                <td class="px-4 py-3 text-sm text-xs">1 werkwoord (alleen PV).</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm">Jan heeft gelopen.</td>
                <td class="px-4 py-3 text-sm">Jan</td>
                <td class="px-4 py-3 text-sm font-bold text-emerald-600">heeft gelopen</td>
                <td class="px-4 py-3 text-sm text-xs">2 werkwoorden (Hulpwerkwoord + VD).</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50">
                <td class="px-4 py-3 text-sm">Jan zal hebben gelopen.</td>
                <td class="px-4 py-3 text-sm">Jan</td>
                <td class="px-4 py-3 text-sm font-bold text-emerald-600">zal hebben gelopen</td>
                <td class="px-4 py-3 text-sm text-xs">3 werkwoorden (Modaal + Hulpwerkwoord + VD).</td>
              </tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      title: "Deel 2: De Formule: Hoe Vind Je Het WVG? 🕵️‍♂️",
      body: `
        <p>Volg dit strikte stappenplan om het volledige werkwoordelijk gezegde feilloos te vinden. Je mag geen enkel werkwoord overslaan!</p>
        
        <div class="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-indigo-700 dark:text-indigo-300 mb-2">🏆 PRO REGEL 2: Het 4-Stappenplan</h3>
          <ol class="list-decimal list-inside space-y-2 text-slate-700 dark:text-slate-300">
            <li>Zoek de <strong>Persoonsvorm (PV)</strong>. (Het werkwoord dat vervoegd is en overeenkomt met het onderwerp).</li>
            <li>Stel de vraag: <strong>"Wat doet het onderwerp?"</strong></li>
            <li>Zoek <strong>ALLE</strong> andere werkwoorden in de zin die bij dit antwoord horen (infinitieven, voltooid deelwoorden).</li>
            <li>Onderstreep de PV en al die andere werkwoorden samen. Dat is het volledige WVG.</li>
          </ol>
        </div>

        <div class="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-4 border border-slate-200 dark:border-slate-700 my-4">
          <h4 class="font-bold text-slate-800 dark:text-slate-200 mb-2">Voorbeeld: "Mijn kleine broertje zal morgen de hele taart opeten."</h4>
          <ul class="list-disc list-inside space-y-1 text-sm text-slate-700 dark:text-slate-300">
            <li><strong>Stap 1 (PV):</strong> <em>zal</em> (want: broertje zal).</li>
            <li><strong>Stap 2 (Vraag):</strong> Wat doet mijn kleine broertje?</li>
            <li><strong>Stap 3 (Antwoord):</strong> <em>zal opeten</em>. ('morgen' en 'de hele taart' zijn geen werkwoorden).</li>
            <li><strong>Stap 4 (Volledige WVG):</strong> <strong>zal opeten</strong>.</li>
          </ul>
        </div>
      `
    },
    {
      title: "Deel 3: Speciale Gevallen: Modalen en Scheidbare Werkwoorden 🧩",
      body: `
        <p>Het werkwoordelijk gezegde wordt extra complex (en extra belangrijk op toetsen) als er modale werkwoorden of scheidbare werkwoorden in de zin zitten.</p>
        
        <h3 class="text-lg font-bold mt-6 mb-3 text-slate-800 dark:text-slate-200">A. Modale Werkwoorden in het WVG</h3>
        <p class="text-sm text-slate-700 dark:text-slate-300 mb-4">Als er een modaal werkwoord (<em>willen, kunnen, moeten, mogen, zullen</em>) bij komt, wordt het een <strong>infinitief</strong>. In de voltooide tijden ontstaat de "dubbele infinitief" (IPP-regel).</p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-teal-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Zin</th><th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Analyse van het WVG</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm">Ik <strong>moet</strong> werken.</td><td class="px-4 py-3 text-sm text-xs">WVG = <strong>moet werken</strong> (PV + infinitief).</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-4 py-3 text-sm">Ik <strong>heb</strong> moeten werken.</td><td class="px-4 py-3 text-sm text-xs">WVG = <strong>heb moeten werken</strong> (PV + infinitief modaal + infinitief hoofdwerkwoord).</td></tr>
            </tbody>
          </table>
        </div>

        <h3 class="text-lg font-bold mt-8 mb-3 text-slate-800 dark:text-slate-200">B. Scheidbare Werkwoorden in het WVG</h3>
        <p class="text-sm text-slate-700 dark:text-slate-300 mb-4">Bij scheidbare werkwoorden (<em>opbellen, meenemen</em>) splitst het werkwoord in de hoofdzin, maar vormt het samen wél het volledige WVG.</p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-purple-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Zin</th><th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Analyse van het WVG</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm">Ik <strong>bel</strong> mijn moeder <strong>op</strong>.</td><td class="px-4 py-3 text-sm text-xs">WVG = <strong>bel ... op</strong> (PV + scheidbaar deel).</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-4 py-3 text-sm">Ik <strong>heb</strong> mijn moeder <strong>opgebeld</strong>.</td><td class="px-4 py-3 text-sm text-xs">WVG = <strong>heb opgebeld</strong> (PV + voltooid deelwoord van scheidbaar ww).</td></tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      title: "Deel 4: Woordvolgorde: Hoofdzin vs. Bijzin 📏",
      body: `
        <p>De plek van de werkwoorden binnen het werkwoordelijk gezegde verandert drastisch afhankelijk van het type zin. Dit is de grootste valkuil van de Nederlandse grammatica.</p>
        
        <div class="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-emerald-700 dark:text-emerald-300 mb-2">🏆 PRO REGEL 3: De Positie-Regel</h3>
          <ul class="space-y-2 text-slate-700 dark:text-slate-300">
            <li>🔹 <strong>Hoofdzin:</strong> PV staat op <strong>plek 2</strong>. De rest van het WVG staat <strong>helemaal achteraan</strong>.</li>
            <li>🔹 <strong>Bijzin:</strong> Het <strong>volledige WVG</strong> staat <strong>helemaal achteraan</strong>, met de PV als allerlaatste woord (SOV-volgorde).</li>
          </ul>
        </div>

        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-gradient-to-r from-rose-600 to-pink-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Type Zin</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Voorbeeldzin</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Analyse van het WVG</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">Hoofdzin</td>
                <td class="px-4 py-3 text-sm">Hij <strong>heeft</strong> de auto gisteren <strong>verkocht</strong>.</td>
                <td class="px-4 py-3 text-sm text-xs">PV (<em>heeft</em>) op plek 2. Rest (<em>verkocht</em>) achteraan.</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30">
                <td class="px-4 py-3 text-sm font-semibold">Bijzin</td>
                <td class="px-4 py-3 text-sm">...omdat hij de auto gisteren <strong>verkocht heeft</strong>.</td>
                <td class="px-4 py-3 text-sm text-xs">Volledig WVG (<em>verkocht heeft</em>) achteraan. PV (<em>heeft</em>) is het allerlaatste woord.</td>
              </tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      title: "Deel 5: De Grootste 'Pas Op' Valkuilen ⚠️",
      body: `
        <p>Dit zijn de fouten die bijna iedereen maakt. Lees deze sectie extreem goed!</p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-gradient-to-r from-amber-600 to-orange-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">De Valkuil</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Fout ❌</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Correct ✅</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Uitleg</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">1. Alleen de PV aanwijzen</td>
                <td class="px-4 py-3 text-sm text-rose-600">WVG van "Ik heb gegeten" = <strong>heb</strong>.</td>
                <td class="px-4 py-3 text-sm text-emerald-600 font-bold">WVG = <strong>heb gegeten</strong>.</td>
                <td class="px-4 py-3 text-sm text-xs">Het WVG bestaat uit <em>alle</em> werkwoorden die bij de actie horen, niet alleen de persoonsvorm!</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">2. WVG verwarren met NG</td>
                <td class="px-4 py-3 text-sm text-rose-600">Hij <strong>is</strong> leraar. (WVG?)</td>
                <td class="px-4 py-3 text-sm text-emerald-600 font-bold">Nee, dit is een <strong>Naamwoordelijk Gezegde</strong>.</td>
                <td class="px-4 py-3 text-sm text-xs">'Is' is hier een koppelwerkwoord zonder actie. WVG vereist een echte actie.</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">3. Scheidbaar ww in bijzin</td>
                <td class="px-4 py-3 text-sm text-rose-600">...omdat hij de kamer <strong>schoonmaakt</strong>.</td>
                <td class="px-4 py-3 text-sm text-emerald-600 font-bold">...omdat hij de kamer <strong>schoon maakt</strong>.</td>
                <td class="px-4 py-3 text-sm text-xs">In een bijzin blijft het scheidbare werkwoord gesplitst! 'Schoon' hoort bij het WVG, 'maakt' is de PV.</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">4. Modaal in VTT/VVT</td>
                <td class="px-4 py-3 text-sm text-rose-600">Ik heb het <strong>gemoeten</strong> doen.</td>
                <td class="px-4 py-3 text-sm text-emerald-600 font-bold">Ik heb het <strong>moeten doen</strong>.</td>
                <td class="px-4 py-3 text-sm text-xs">De IPP-regel: modale werkwoorden krijgen in een stapel géén 'ge-'. Het WVG is <em>heb moeten doen</em>.</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50">
                <td class="px-4 py-3 text-sm font-semibold">5. Bijzin volgorde met 3 ww</td>
                <td class="px-4 py-3 text-sm text-rose-600">...dat hij het <strong>hebben</strong> moeten <strong>doen</strong>.</td>
                <td class="px-4 py-3 text-sm text-emerald-600 font-bold">...dat hij het <strong>heeft</strong> moeten <strong>doen</strong>.</td>
                <td class="px-4 py-3 text-sm text-xs">Bij 3+ werkwoorden in een bijzin springt de vervoegde PV (heeft) vóór de infinitieven.</td>
              </tr>
            </tbody>
          </table>
        </div>
      `
    }
  ],
  rulesTable: [
    {
      rule: "De Definitie van het WVG",
      structure: "WVG = Persoonsvorm (PV) + Alle andere bijbehorende werkwoorden (infinitieven, voltooid deelwoorden).",
      example: "Hij heeft gelopen. (WVG = heeft geloven).",
      usage: "Onderstreep altijd alle werkwoorden die samen de actie vormen als één geheel."
    },
    {
      rule: "Het 4-Stappenplan",
      structure: "1. Zoek PV. 2. Stel vraag 'Wat doet OW?'. 3. Zoek alle bijbehorende werkwoorden. 4. Onderstreep alles samen.",
      example: "Mijn broertje zal opeten. -> WVG: zal opeten.",
      usage: "Gebruik dit stappenplan om geen enkel werkwoord over het hoofd te zien."
    },
    {
      rule: "De Positie-Regel",
      structure: "Hoofdzin: PV op plek 2, rest WVG achteraan. Bijzin: Volledig WVG achteraan, PV als allerlaatste woord.",
      example: "Hij heeft verkocht. / ...omdat hij verkocht heeft.",
      usage: "Let op: bij 3 of meer werkwoorden in een bijzin springt de vervoegde PV vóór de infinitieven."
    },
    {
      rule: "De IPP-regel bij Modalen",
      structure: "In voltooide tijden met een modaal werkwoord én een hoofdwerkwoord, krijgt het modale werkwoord geen 'ge-'.",
      example: "Ik heb het moeten doen. (Niet: gemoeten doen).",
      usage: "Dit voorkomt een opeenstapeling van 'ge-' voorvoegsels en is een vaste grammaticaregel."
    }
  ],
  callouts: [
    { type: "remember", label: "🏆 PRO REGEL 1", text: "Het werkwoordelijk gezegde = De Persoonsvorm (PV) + Alle andere werkwoorden die bij deze actie horen." },
    { type: "remember", label: "🏆 PRO REGEL 2", text: "Gebruik het 4-stappenplan: Zoek PV, stel vraag 'Wat doet OW?', zoek alle bijbehorende werkwoorden, onderstreep alles samen." },
    { type: "remember", label: "🏆 PRO REGEL 3", text: "Hoofdzin: PV op plek 2, rest WVG achteraan. Bijzin: Volledig WVG achteraan, PV als allerlaatste woord." },
    { type: "remember", label: "⚠️ PAS OP 1", text: "Wijs NOOIT alleen de persoonsvorm aan als het WVG. Het WVG omvat ALLE bijbehorende werkwoorden." },
    { type: "remember", label: "⚠️ PAS OP 2", text: "Verwar het WVG niet met een Naamwoordelijk Gezegde (NG). 'Hij is leraar' is een NG, geen WVG." },
    { type: "tip", label: "💡 Pro-tip", text: "Controleer bij scheidbare werkwoorden in een bijzin of ze gesplitst zijn (op ruimt). In een bijzin blijven ze altijd gesplitst!" }
  ],
  commonMistakes: [
    { incorrect: "WVG van 'Ik heb gegeten' = heb.", correct: "WVG = heb gegeten.", explanation: "Het WVG bestaat uit alle werkwoorden die bij de actie horen, niet alleen de persoonsvorm." },
    { incorrect: "Hij is leraar. (aangeven als WVG)", correct: "Dit is een Naamwoordelijk Gezegde (NG).", explanation: "'Is' is hier een koppelwerkwoord zonder actie. Een WVG vereist een echte actie (bv. 'Hij werkt als leraar')." },
    { incorrect: "...omdat hij de kamer schoonmaakt.", correct: "...omdat hij de kamer schoon maakt.", explanation: "In een bijzin blijft het scheidbare werkwoord gesplitst! 'Schoon' hoort bij het WVG, 'maakt' is de PV." },
    { incorrect: "Ik heb het gemoeten doen.", correct: "Ik heb het moeten doen.", explanation: "De IPP-regel: modale werkwoorden krijgen in een stapel géén 'ge-'. Het WVG is 'heb moeten doen'." },
    { incorrect: "...dat hij het hebben moeten doen.", correct: "...dat hij het heeft moeten doen.", explanation: "Bij 3+ werkwoorden in een bijzin springt de vervoegde persoonsvorm (heeft) vóór de infinitieven." }
  ],
  review: [
    "✅ WVG = alle werkwoorden die bij de actie horen (PV + infinitieven/voltooid deelwoorden).",
    "✅ 4-stappenplan: Zoek PV, stel vraag 'Wat doet OW?', zoek alle bijbehorende werkwoorden, onderstreep alles samen.",
    "✅ Hoofdzin: PV op plek 2, rest van het WVG staat helemaal achteraan.",
    "✅ Bijzin: Volledig WVG staat helemaal achteraan, PV is het allerlaatste woord (behalve bij 3+ ww).",
    "✅ Scheidbare werkwoorden blijven in de bijzin gesplitst (op ruimt).",
    "✅ Modale werkwoorden in voltooide tijden met een hoofdwerkwoord krijgen geen 'ge-' (IPP-regel)."
  ],
  qa: [
    {
      question: "De Volledige Identificatie: Onderstreep in de volgende zin het volledige werkwoordelijk gezegde. Let op: er zitten meer woorden in dan je denkt! 'De vermoeide studenten zullen morgenochtend vroeg hun laatste examen moeten maken.'",
      answer: "Het volledige werkwoordelijk gezegde is: zullen ... moeten maken. (Uitleg: 'zullen' is de persoonsvorm (PV). 'moeten' en 'maken' zijn infinitieven die bij deze toekomstige actie horen. 'morgenochtend vroeg' en 'hun laatste examen' zijn geen werkwoorden, dus die horen niet bij het WVG)."
    },
    {
      question: "Transformatie van Tijd (WVG aanpassen): Verander het werkwoordelijk gezegde in de volgende zin van de Onvoltooid Tegenwoordige Tijd (OTT) naar de Voltooid Verleden Tijd (VVT). Zin: 'Zij schrijft een lange brief aan haar oma.'",
      answer: "Zij had een lange brief aan haar oma geschreven. (Uitleg: Het WVG verandert van 'schrijft' (1 woord) naar 'had ... geschreven' (2 woorden). 'Had' is de vervoegde PV van 'hebben' in de OVT, en 'geschreven' is het voltooid deelwoord dat achteraan staat)."
    },
    {
      question: "De Bijzin- en Scheidbaar-werkwoord Valkuil: Maak van de volgende hoofdzin een bijzin die begint met 'Omdat'. Let extreem goed op de woordvolgorde van het werkwoordelijk gezegde! Hoofdzin: 'Hij ruimt zijn rommelige kamer nooit op.'",
      answer: "Omdat hij zijn rommelige kamer nooit op ruimt. (Uitleg: Het werkwoord is 'opruimen' (scheidbaar). In een bijzin gaat de persoonsvorm ('ruimt') helemaal naar het einde. Het scheidbare deel ('op') blijft voor de persoonsvorm staan. Het volledige WVG is dus 'op ruimt')."
    },
    {
      question: "De Ultieme Stapel (Modaal + Voltooid + Scheidbaar): Bepaal het volledige werkwoordelijk gezegde in de volgende, complexe bijzin. 'De manager was boos, omdat de nieuwe werknemer de belangrijke documenten niet had mee willen nemen.'",
      answer: "Het volledige werkwoordelijk gezegde is: had mee willen nemen. (Uitleg: Dit is een C2-niveau constructie. 1. 'had' is de vervoegde persoonsvorm (VVT). 2. 'mee' is het scheidbare deel van 'meenemen'. 3. 'willen' is het modale werkwoord in infinitief (IPP-regel, geen 'gewild'). 4. 'nemen' is de stam van het hoofdwerkwoord. Samen vormen deze vier woorden het volledige werkwoordelijk gezegde)."
    }
  ]
};