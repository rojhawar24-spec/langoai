import type { GrammarLesson } from "../../types";

export const cafe: GrammarLesson = {
  id: "nl-cafe-1",
  title: "In een Café of Restaurant",
  level: 1,
  topic: "Presentatie",
  body: "Leer hoe je in het Nederlands iets bestelt in een café of restaurant. Je leert hoe je een tafel kiest, eten en drinken bestelt, om de rekening vraagt en afrekent. Na deze les voel je je op je gemak in elk Nederlands café of restaurant!",
  overview:
    "Hier vind je een **volledig uitgewerkte** les over uit eten gaan. Je leert alle belangrijke woorden en zinnen voor in een café en restaurant, hoe je een gesprek voert met de ober, hoe je beleefd iets bestelt, en hoe je afrekent. Alles met duidelijke voorbeelden, ezelsbruggetjes en praktische oefenvragen. Na deze les bestel jij met vertrouwen je eten en drinken!",
  anchorSectionId: "binnenkomen",
  exercises: [],
  timeExpressionsLabel: "Dranken ☕🥤",
  timeExpressions: {
    header: "Nederlands",
    rows: [
      ["☕ <strong>een kop koffie</strong>"],
      ["🍵 <strong>een kop thee</strong>"],
      ["☕ <strong>een cappuccino</strong>"],
      ["☕ <strong>een latte macchiato</strong>"],
      ["💧 <strong>een glas water</strong>"],
      ["💧 <strong>een fles water</strong> (met of zonder bubbels)"],
      ["🍊 <strong>een sinaasappelsap</strong>"],
      ["🥤 <strong>een cola</strong>"],
      ["🍺 <strong>een biertje</strong> / <strong>een pils</strong>"],
      ["🍷 <strong>een glas witte wijn</strong>"],
      ["🍷 <strong>een glas rode wijn</strong>"],
    ],
  },
  details: [
    {
      title: "Binnenkomen en een Tafel Kiezen 🚶‍♂️🪑",
      body: `
        <h3 class="text-lg font-bold mt-4 mb-2">Binnenkomen</h3>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Nederlands</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Goedemiddag! Heeft u een tafel voor twee?</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Goedenavond! Is er nog een tafeltje vrij?</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Hallo! Ik heb gereserveerd op naam van Jansen.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Kunnen we buiten zitten op het terras? ☀️</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Mogen we binnen zitten? Het is wat koud. ❄️</td></tr>
            </tbody>
          </table>
        </div>
        <h3 class="text-lg font-bold mt-6 mb-2">De ober komt naar je toe</h3>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">De ober zegt</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Jij antwoordt</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Heeft u gereserveerd?</td><td class="px-3 py-2 text-sm">Ja, op naam van Jansen. / Nee, we hebben niet gereserveerd.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Hoeveel personen?</td><td class="px-3 py-2 text-sm">Twee personen. / Met z'n drieen.</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Wilt u binnen of buiten zitten?</td><td class="px-3 py-2 text-sm">Binnen, alstublieft. / Buiten, graag. ☀️</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Ik breng de menukaart.</td><td class="px-3 py-2 text-sm">Dank u wel! 📋</td></tr>
            </tbody>
          </table>
        </div>
      `,
    },
    {
      title: "Eten Bestellen 🍝🥗🍰",
      body: `
        <h3 class="text-lg font-bold mt-4 mb-2">Soepen, broodjes en hoofdgerechten</h3>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Nederlands</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Nederlands</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">🍅🍜 <strong>de tomatensoep</strong></td><td class="px-3 py-2 text-sm">🍝 <strong>de pasta</strong></td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">🥗 <strong>de salade</strong></td><td class="px-3 py-2 text-sm">🍳 <strong>de omelet</strong></td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">🧀🥪 <strong>het broodje kaas</strong></td><td class="px-3 py-2 text-sm">🥞 <strong>de pannenkoek</strong></td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">🥚🥪 <strong>het broodje ei</strong></td><td class="px-3 py-2 text-sm">🍟 <strong>de friet</strong></td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">🧀🥪 <strong>de tosti</strong></td><td class="px-3 py-2 text-sm">🍟 <strong>de friet met mayonaise</strong></td></tr>
            </tbody>
          </table>
        </div>
        <h3 class="text-lg font-bold mt-6 mb-2">Nagerechten</h3>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Nederlands</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Nederlands</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">🍰 <strong>de appeltaart</strong></td><td class="px-3 py-2 text-sm">🍫🍰 <strong>de chocoladetaart</strong></td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">🍦 <strong>het ijsje</strong></td><td class="px-3 py-2 text-sm">🍓🍰 <strong>de aardbeientaart</strong></td></tr>
            </tbody>
          </table>
        </div>
        <h3 class="text-lg font-bold mt-6 mb-2">Extra vragen bij het bestellen</h3>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Nederlands</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Wat raadt u aan?</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Wat is de specialiteit van het huis?</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Is dit gerecht pittig? 🌶️</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Heeft u ook vegetarische gerechten? 🥗</td></tr>
            </tbody>
          </table>
        </div>
      `,
    },
    {
      title: "Tijdens het Eten & Iets Vragen 🍽️",
      body: `
        <h3 class="text-lg font-bold mt-4 mb-2">Tijdens het eten</h3>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">De ober vraagt</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Jij antwoordt</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Smaakt het?</td><td class="px-3 py-2 text-sm">Ja, heerlijk! 😋</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Is alles naar wens?</td><td class="px-3 py-2 text-sm">Ja, dank u! Alles is prima.</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Wilt u nog iets drinken?</td><td class="px-3 py-2 text-sm">Ja, nog een cola, alstublieft. 🥤</td></tr>
            </tbody>
          </table>
        </div>
        <h3 class="text-lg font-bold mt-6 mb-2">Iets vragen of klagen (beleefd!)</h3>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Nederlands</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Pardon, mijn soep is koud. 🍜❄️</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Sorry, ik had zonder suiker besteld.</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Mag ik een schoon glas? 🥛</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Kunt u een nieuw mes brengen? 🔪</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Het duurt erg lang. Komt ons eten nog?</td></tr>
            </tbody>
          </table>
        </div>
      `,
    },
    {
      title: "De Rekening Vragen en Betalen 🧾💶",
      body: `
        <h3 class="text-lg font-bold mt-4 mb-2">De rekening vragen</h3>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Nederlands</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Mag ik de rekening, alstublieft? 🧾</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Kunnen we afrekenen?</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Kunnen we samen betalen of apart?</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Mogen we apart betalen?</td></tr>
            </tbody>
          </table>
        </div>
        <h3 class="text-lg font-bold mt-6 mb-2">De fooi geven</h3>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Nederlands</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Het was heerlijk, hou het wisselgeld maar.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Laat de rest maar zitten.</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Doe er maar € 2,50 bij voor de fooi.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Alstublieft, het is goed zo.</td></tr>
            </tbody>
          </table>
        </div>
      `,
    },
    {
      title: "Voorbeeldgesprek in een Café ☕",
      body: `
        <div class="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 p-4 rounded-r-lg my-4">
          <p class="text-slate-700 dark:text-slate-300">
            <strong>Lisa en Tom zitten op het terras:</strong><br><br>
            <strong>Ober:</strong> Goedemiddag! Heeft u al een keuze kunnen maken?<br>
            <strong>Lisa:</strong> Goedemiddag! Ik wil graag een cappuccino. ☕<br>
            <strong>Tom:</strong> Voor mij een verse muntthee, alstublieft. 🍵<br>
            <strong>Ober:</strong> Wilt u er ook iets bij eten?<br>
            <strong>Lisa:</strong> Ja, ik neem een stuk appeltaart. 🍰<br>
            <strong>Tom:</strong> Voor mij een broodje kaas. 🧀🥪<br>
            <strong>Ober:</strong> Komt eraan!<br><br>
            ---<br><br>
            <strong>Even later...</strong><br><br>
            <strong>Ober:</strong> Alstublieft, een cappuccino en een muntthee. Een appeltaart en een broodje kaas.<br>
            <strong>Lisa:</strong> Dank u wel!<br>
            <strong>Tom:</strong> Ziet er lekker uit!<br><br>
            ---<br><br>
            <strong>Na het eten:</strong><br><br>
            <strong>Lisa:</strong> Mag ik de rekening, alstublieft? 🧾<br>
            <strong>Ober:</strong> Natuurlijk! Dat is € 14,75 samen.<br>
            <strong>Tom:</strong> Wij betalen apart. Mag ik pinnen? 💳<br>
            <strong>Ober:</strong> Dat kan. Steekt u uw pas maar in het apparaat.<br>
            <strong>Tom:</strong> Alstublieft. € 7,50. Laat de rest maar zitten.<br>
            <strong>Lisa:</strong> Ik betaal contant. Hier is € 10. 💶<br>
            <strong>Ober:</strong> € 7,25 voor u. Hier is uw wisselgeld: € 2,75.<br>
            <strong>Lisa:</strong> Dank u wel! Houd het maar.<br>
            <strong>Ober:</strong> Dank u wel! Fijne dag nog!<br>
            <strong>Lisa en Tom:</strong> Tot ziens! 👋
          </p>
        </div>
      `,
    },
    {
      title: "Voorbeeldgesprek in een Restaurant 🍽️",
      body: `
        <div class="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 p-4 rounded-r-lg my-4">
          <p class="text-slate-700 dark:text-slate-300">
            <strong>Een stel komt binnen bij een restaurant:</strong><br><br>
            <strong>Ober:</strong> Goedenavond! Heeft u gereserveerd?<br>
            <strong>Klant:</strong> Goedenavond! Ja, op naam van De Vries.<br>
            <strong>Ober:</strong> Klopt, een tafel voor twee. Komt u maar mee. 🪑<br><br>
            ---<br><br>
            <strong>Aan tafel:</strong><br><br>
            <strong>Ober:</strong> Hier is de menukaart. 📋 Wilt u alvast iets drinken?<br>
            <strong>Klant:</strong> Graag! Een glas water voor mij. 💧<br>
            <strong>Partner:</strong> Voor mij een verse jus d'orange, alstublieft. 🍊<br>
            <strong>Ober:</strong> Komt eraan!<br><br>
            ---<br><br>
            <strong>Even later:</strong><br><br>
            <strong>Ober:</strong> Heeft u een keuze kunnen maken?<br>
            <strong>Klant:</strong> Ja, ik neem de tomatensoep vooraf. 🍅🍜<br>
            <strong>Partner:</strong> Ik begin met de salade. 🥗<br>
            <strong>Ober:</strong> En als hoofdgerecht?<br>
            <strong>Klant:</strong> Voor mij de pasta met groenten. 🍝<br>
            <strong>Partner:</strong> Ik neem de omelet met kaas. 🍳🧀<br>
            <strong>Ober:</strong> Wilt u er friet bij?<br>
            <strong>Klant:</strong> Ja, graag! 🍟<br>
            <strong>Partner:</strong> Nee, dank u.<br><br>
            ---<br><br>
            <strong>Na het hoofdgerecht:</strong><br><br>
            <strong>Ober:</strong> Heeft het gesmaakt?<br>
            <strong>Klant:</strong> Ja, heerlijk! 😋<br>
            <strong>Ober:</strong> Wilt u nog een toetje? We hebben heerlijke chocoladetaart. 🍫🍰<br>
            <strong>Partner:</strong> Ja, doe maar! Een stuk chocoladetaart en twee lepels.<br>
            <strong>Klant:</strong> En mag ik nog een kop koffie? ☕<br>
            <strong>Ober:</strong> Natuurlijk!<br><br>
            ---<br><br>
            <strong>Na het toetje:</strong><br><br>
            <strong>Klant:</strong> Mag ik de rekening, alstublieft? 🧾<br>
            <strong>Ober:</strong> Natuurlijk. Dat is € 42,50 in totaal.<br>
            <strong>Klant:</strong> Ik betaal. Mag ik pinnen? 💳<br>
            <strong>Ober:</strong> Ja, hoor.<br>
            <strong>Klant:</strong> Alstublieft, doe er maar € 46,00 van.<br>
            <strong>Ober:</strong> Dank u wel! Heel vriendelijk. Fijne avond nog!<br>
            <strong>Klant en partner:</strong> Dank u wel! Tot ziens! 👋
          </p>
        </div>
      `,
    },
  ],
  rulesTable: [
    {
      rule: "Drinken bestellen",
      structure: "**Ik wil graag** + hoeveelheid + drank. / **Mag ik** + hoeveelheid + drank?",
      example: "**Ik wil graag een kop koffie**. **Mag ik een glas water?**",
      usage: "⚠️ PAS OP: Je bestelt altijd de hoeveelheid erbij: een **kop** koffie, een **glas** water, een **fles** wijn.",
    },
    {
      rule: "Eten bestellen",
      structure: "**Ik neem** + gerecht. / **Voor mij** + gerecht + **alstublieft**.",
      example: "**Ik neem de tomatensoep**. **Voor mij de pasta, alstublieft**.",
      usage: "⚠️ PAS OP: 'Ik neem' is de standaard manier om eten te bestellen. Zeg altijd 'alstublieft' erbij.",
    },
    {
      rule: "Beleefd vragen",
      structure: "Maak van je bestelling altijd een **vraag** of gebruik **graag/alstublieft**.",
      example: "**Mag ik een cola?** (beter dan: Geef mij een cola). **Ik wil graag een broodje kaas**.",
      usage: "Een vraag stellen is altijd beleefder dan een bevel. Gebruik nooit 'Geef mij...' in een restaurant.",
    },
    {
      rule: "De rekening vragen",
      structure: "**Mag ik de rekening, alstublieft?** / **Kunnen we afrekenen?**",
      example: "**Mag ik de rekening, alstublieft?** **Kunnen we apart betalen?**",
      usage: "Eerst vraag je de rekening, dan betaal je. Apart betalen = ieder betaalt zijn eigen deel.",
    },
    {
      rule: "Fooi geven",
      structure: "**Laat de rest maar zitten**. / **Hou het wisselgeld maar**. / **Doe er maar € 2,50 bij**.",
      example: "Het was heerlijk, **laat de rest maar zitten**.",
      usage: "Fooi is niet verplicht in Nederland, maar 5-10% wordt gewaardeerd als je tevreden bent.",
    },
    {
      rule: "Zeggen dat het lekker was",
      structure: "**Het heeft gesmaakt!** / **Ja, heerlijk!** / **Het was erg lekker!**",
      example: "Ober: Heeft het gesmaakt? Jij: **Ja, heerlijk!** 😋",
      usage: "⚠️ PAS OP: Zeg niet 'Het was goed'. Zeg 'Het heeft gesmaakt!' of 'Het was heerlijk!'",
    },
  ],
  callouts: [
    { type: "remember", label: "Onthoud 1", text: "Binnenkomen: **Heeft u een tafel voor twee? Is er nog een tafeltje vrij?**" },
    { type: "remember", label: "Onthoud 2", text: "Drinken bestellen: **Ik wil graag een kop koffie. Mag ik een glas water?**" },
    { type: "remember", label: "Onthoud 3", text: "Eten bestellen: **Ik neem de tomatensoep. Voor mij de pasta, alstublieft.**" },
    { type: "remember", label: "Onthoud 4", text: "De rekening vragen: **Mag ik de rekening, alstublieft?**" },
    { type: "remember", label: "Onthoud 5", text: "Betalen: **Pinnen, graag. Contant, graag. Kunnen we apart betalen?**" },
    { type: "remember", label: "Onthoud 6", text: "Fooi geven: **Laat de rest maar zitten. Hou het wisselgeld maar.**" },
    { type: "remember", label: "Onthoud 7", text: "Beleefd zijn: maak van je bestelling altijd een vraag. Zeg **alstublieft** en **dank u wel**." },
    { type: "remember", label: "Onthoud 8", text: "Weet je niet wat je wilt? Vraag: **Wat raadt u aan?**" },
  ],
  commonMistakes: [
    { incorrect: "Ik wil een koffie.", correct: "Ik wil een kop koffie.", explanation: "Je bestelt een kop, niet alleen \"koffie\"" },
    { incorrect: "Mag ik de menu?", correct: "Mag ik de menukaart?", explanation: "Het heet menukaart, niet menu" },
    { incorrect: "Ik wil betalen de rekening.", correct: "Ik wil de rekening betalen.", explanation: "Eerst de rekening, dan betalen" },
    { incorrect: "Apart betalen graag.", correct: "Mogen we apart betalen?", explanation: "Maak er een vraag van, dat is beleefder" },
    { incorrect: "Geef mij een cola.", correct: "Mag ik een cola?", explanation: "Een vraag is beleefder dan een bevel" },
    { incorrect: "Ik heb klaar.", correct: "Ik ben klaar.", explanation: "Je bent klaar, niet hebt klaar" },
    { incorrect: "Het was goed.", correct: "Het heeft gesmaakt!", explanation: "Dit is de standaard manier om te zeggen dat het lekker was" },
  ],
  review: [
    "**Binnenkomen:** Heeft u een tafel voor twee? Is er nog een tafeltje vrij? Ik heb gereserveerd.",
    "**Drinken bestellen:** een kop koffie, een glas water, een cola, een sinaasappelsap.",
    "**Eten bestellen:** de tomatensoep, het broodje kaas, de pasta, de salade, de appeltaart.",
    "**Tijdens het eten:** Smaakt het? Ja, heerlijk! Alles is prima.",
    "**Iets vragen:** Mag ik een schoon glas? Kunt u een nieuw mes brengen?",
    "**Rekening vragen:** Mag ik de rekening? Kunnen we afrekenen? Apart of samen betalen?",
    "**Betalen:** pinnen, contant betalen, bonnetje.",
    "**Fooi:** Laat de rest maar zitten. Hou het wisselgeld maar.",
    "**Beleefdheid:** alstublieft, dank u wel, graag, mag ik.",
  ],
  qa: [
    { question: "Hoe vraag je om een tafel voor twee personen?", answer: "**Heeft u een tafel voor twee?** of **Is er nog een tafeltje vrij?**" },
    { question: "Hoe bestel je een kop koffie?", answer: "**Ik wil graag een kop koffie** of **Mag ik een koffie?**" },
    { question: "Hoe vraag je wat de ober aanraadt?", answer: "**Wat raadt u aan?** of **Wat is de specialiteit van het huis?**" },
    { question: "Hoe vraag je om de rekening?", answer: "**Mag ik de rekening, alstublieft?** of **Kunnen we afrekenen?**" },
    { question: "Hoe vraag je of je apart kunt betalen?", answer: "**Kunnen we apart betalen?** of **Mogen we apart betalen?**" },
    { question: "Hoe geef je fooi?", answer: "**Laat de rest maar zitten** of **Hou het wisselgeld maar**." },
    { question: "Wat zeg je als de ober vraagt of het gesmaakt heeft?", answer: "**Ja, heerlijk!** of **Ja, het was erg lekker!**" },
    { question: "Hoe zeg je dat je soep koud is?", answer: "**Pardon, mijn soep is koud.**" },
    { question: "Hoe vraag je om een schoon glas?", answer: "**Mag ik een schoon glas?**" },
    { question: "Wat betekent \"de menukaart\"?", answer: "De kaart waarop staat wat je kunt bestellen." },
    { question: "Wat betekent \"de fooi\"?", answer: "Extra geld voor de ober of serveerster als je tevreden bent." },
    { question: "Hoe zeg je \"I would like to pay by card\"?", answer: "**Ik wil graag pinnen.**" },
    { question: "Hoe zeg je \"The food was delicious\"?", answer: "**Het heeft gesmaakt!** of **Het was heerlijk!**" },
  ],
};