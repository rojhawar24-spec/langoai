import type { GrammarLesson } from "../../types";

export const boodschappen: GrammarLesson = {
  id: "nl-boodschappen-1",
  title: "Boodschappen Doen",
  level: 1,
  topic: "Presentatie & Vocabulaire",
  body: "Leer hoe je in het Nederlands boodschappen doet. Je leert de namen van winkels, hoe je eten koopt op de markt en in de supermarkt, hoe je prijzen vraagt en begrijpt, en hoe je een gesprek voert met de verkoper. Na deze les kun je zelfstandig boodschappen doen!",
  overview:
    "Hier vind je een **volledig uitgewerkte** les over boodschappen doen. Je leert alle woorden voor winkels en producten, hoe je om informatie vraagt, hoe je prijzen leest en zegt, hoe je betaalt, en hoe je een praatje maakt met de verkoper op de markt of in de supermarkt. Alles met duidelijke voorbeelden, ezelsbruggetjes en praktische oefenvragen. Na deze les loop je met vertrouwen de winkel in!",
  anchorSectionId: "winkels",
  exercises: [],
  timeExpressionsLabel: "Winkels 🏪",
  timeExpressions: {
    header: "Nederlands | Uitleg",
    rows: [
      ["🏪 <strong>de supermarkt</strong>", "een grote winkel waar je bijna alles kunt kopen"],
      ["🎪 <strong>de markt</strong>", "een plek buiten met kramen waar je eten en spullen koopt"],
      ["🥖 <strong>de bakker</strong>", "een winkel waar je brood en gebak koopt"],
      ["🥩 <strong>de slager</strong>", "een winkel waar je vlees koopt"],
      ["🧀 <strong>de kaasboer</strong>", "een winkel waar je kaas koopt"],
      ["🍎 <strong>de groenteboer</strong>", "een winkel waar je groente en fruit koopt"],
      ["💊 <strong>de drogist</strong>", "een winkel waar je zeep, shampoo en medicijnen koopt"],
      ["🏬 <strong>het winkelcentrum</strong>", "een groot gebouw met veel winkels samen"],
    ],
  },
  details: [
    {
      title: "Producten in de Supermarkt 🛒",
      body: `
        <h3 class="text-lg font-bold mt-4 mb-2">Groente en fruit 🍎🥕</h3>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Nederlands</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Nederlands</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">🍎 <strong>de appel</strong></td><td class="px-3 py-2 text-sm">🥕 <strong>de wortel</strong></td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">🍌 <strong>de banaan</strong></td><td class="px-3 py-2 text-sm">🧅 <strong>de ui</strong></td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">🍊 <strong>de sinaasappel</strong></td><td class="px-3 py-2 text-sm">🥔 <strong>de aardappel</strong></td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">🍇 <strong>de druiven</strong></td><td class="px-3 py-2 text-sm">🍅 <strong>de tomaat</strong></td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">🍓 <strong>de aardbei</strong></td><td class="px-3 py-2 text-sm">🥒 <strong>de komkommer</strong></td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">🍋 <strong>de citroen</strong></td><td class="px-3 py-2 text-sm">🥬 <strong>de sla</strong></td></tr>
            </tbody>
          </table>
        </div>
        <h3 class="text-lg font-bold mt-6 mb-2">Brood, ontbijt, vlees en vis 🍞🥩🐟</h3>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Nederlands</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Nederlands</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">🍞 <strong>het brood</strong></td><td class="px-3 py-2 text-sm">🥩 <strong>het vlees</strong></td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">🧀 <strong>de kaas</strong></td><td class="px-3 py-2 text-sm">🍗 <strong>de kip</strong></td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">🥛 <strong>de melk</strong></td><td class="px-3 py-2 text-sm">🐟 <strong>de vis</strong></td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">🥚 <strong>het ei</strong></td><td class="px-3 py-2 text-sm">🌭 <strong>de worst</strong></td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">🍯 <strong>de jam</strong></td><td class="px-3 py-2 text-sm">🥓 <strong>de ham</strong></td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">🍫 <strong>de hagelslag</strong></td><td class="px-3 py-2 text-sm">🧈 <strong>de boter</strong></td></tr>
            </tbody>
          </table>
        </div>
        <h3 class="text-lg font-bold mt-6 mb-2">Dranken en andere producten 🥤🧹</h3>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Nederlands</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Nederlands</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">💧 <strong>het water</strong></td><td class="px-3 py-2 text-sm">🧻 <strong>het wc-papier</strong></td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">☕ <strong>de koffie</strong></td><td class="px-3 py-2 text-sm">🧴 <strong>de shampoo</strong></td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">🍵 <strong>de thee</strong></td><td class="px-3 py-2 text-sm">🪥 <strong>de tandpasta</strong></td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">🥤 <strong>de frisdrank</strong></td><td class="px-3 py-2 text-sm">🍚 <strong>de rijst</strong></td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">🍺 <strong>het bier</strong></td><td class="px-3 py-2 text-sm">🍝 <strong>de pasta</strong></td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">🍷 <strong>de wijn</strong></td><td class="px-3 py-2 text-sm">🫒 <strong>de olie</strong></td></tr>
            </tbody>
          </table>
        </div>
      `,
    },
    {
      title: "Hoeveelheden en Verpakkingen 📦",
      body: `
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Nederlands</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Uitleg</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm"><strong>een pak</strong> melk 🥛</td><td class="px-3 py-2 text-sm">een kartonnen verpakking</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm"><strong>een fles</strong> water 💧</td><td class="px-3 py-2 text-sm">een glazen of plastic fles</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm"><strong>een blikje</strong> cola 🥤</td><td class="px-3 py-2 text-sm">een klein metalen blikje</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm"><strong>een zak</strong> rijst 🍚</td><td class="px-3 py-2 text-sm">een plastic of papieren zak</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm"><strong>een doosje</strong> eieren 🥚</td><td class="px-3 py-2 text-sm">een kartonnen doosje</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm"><strong>een pot</strong> jam 🍯</td><td class="px-3 py-2 text-sm">een glazen pot</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm"><strong>een stuk</strong> kaas 🧀</td><td class="px-3 py-2 text-sm">een deel van een groot stuk</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm"><strong>een plakje</strong> ham 🥓</td><td class="px-3 py-2 text-sm">een dun gesneden stukje</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm"><strong>een bosje</strong> wortels 🥕</td><td class="px-3 py-2 text-sm">meerdere wortels bij elkaar</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm"><strong>een kilo</strong></td><td class="px-3 py-2 text-sm">1000 gram</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm"><strong>een halve kilo</strong></td><td class="px-3 py-2 text-sm">500 gram</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm"><strong>een ons</strong></td><td class="px-3 py-2 text-sm">100 gram</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm"><strong>een liter</strong></td><td class="px-3 py-2 text-sm">1000 milliliter</td></tr>
            </tbody>
          </table>
        </div>
      `,
    },
    {
      title: "Prijzen Vragen en Zeggen 💶",
      body: `
        <h3 class="text-lg font-bold mt-4 mb-2">De vraag stellen</h3>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Nederlands</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Wat kost dit?</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Hoeveel kost deze appel?</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Wat is de prijs van deze kaas?</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Hoeveel moet ik betalen?</td></tr>
            </tbody>
          </table>
        </div>
        <h3 class="text-lg font-bold mt-6 mb-2">Prijzen zeggen</h3>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Prijs</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Nederlands</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">€ 0,50</td><td class="px-3 py-2 text-sm"><strong>vijftig cent</strong></td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">€ 1,00</td><td class="px-3 py-2 text-sm"><strong>een euro</strong></td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">€ 1,50</td><td class="px-3 py-2 text-sm"><strong>een euro vijftig</strong></td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">€ 2,25</td><td class="px-3 py-2 text-sm"><strong>twee euro vijfentwintig</strong></td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">€ 3,75</td><td class="px-3 py-2 text-sm"><strong>drie euro vijfenzeventig</strong></td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">€ 10,00</td><td class="px-3 py-2 text-sm"><strong>tien euro</strong></td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">€ 2,99</td><td class="px-3 py-2 text-sm"><strong>twee negenennegentig</strong></td></tr>
            </tbody>
          </table>
        </div>
      `,
    },
    {
      title: "Gesprek op de Markt 🎪",
      body: `
        <div class="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 p-4 rounded-r-lg my-4">
          <p class="text-slate-700 dark:text-slate-300">
            <strong>Bij de groentekraam:</strong><br><br>
            <strong>Klant:</strong> Goedemorgen! 🍎<br>
            <strong>Verkoper:</strong> Goedemorgen! Wat kan ik voor u doen?<br>
            <strong>Klant:</strong> Ik wil graag zes appels. Wat kosten die?<br>
            <strong>Verkoper:</strong> Deze appels kosten € 2,50 per kilo.<br>
            <strong>Klant:</strong> Goed, doet u mij maar een kilo. En ook een bosje wortels. 🥕<br>
            <strong>Verkoper:</strong> Alstublieft. Anders nog iets?<br>
            <strong>Klant:</strong> Nee, dat was het. Hoeveel is het samen?<br>
            <strong>Verkoper:</strong> Dat is € 4,25 in totaal.<br>
            <strong>Klant:</strong> Alstublieft. (geeft geld) 💶<br>
            <strong>Verkoper:</strong> Dank u wel! Fijne dag nog!<br>
            <strong>Klant:</strong> Tot ziens! 👋
          </p>
        </div>
        <div class="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 p-4 rounded-r-lg my-4">
          <p class="text-slate-700 dark:text-slate-300">
            <strong>Bij de kaasboer:</strong><br><br>
            <strong>Klant:</strong> Goedemiddag! 🧀<br>
            <strong>Verkoper:</strong> Goedemiddag! Zegt u het maar.<br>
            <strong>Klant:</strong> Mag ik een stuk oude kaas? Ongeveer een halve kilo.<br>
            <strong>Verkoper:</strong> Natuurlijk. Iets meer dan een halve kilo, is dat goed?<br>
            <strong>Klant:</strong> Ja, prima. Wat kost dat?<br>
            <strong>Verkoper:</strong> Dat wordt € 6,30.<br>
            <strong>Klant:</strong> Hier heeft u € 10. 💶<br>
            <strong>Verkoper:</strong> En hier is uw wisselgeld: € 3,70. Alstublieft!<br>
            <strong>Klant:</strong> Dank u wel! Tot ziens! 👋
          </p>
        </div>
      `,
    },
    {
      title: "Gesprek in de Supermarkt 🛒",
      body: `
        <div class="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 p-4 rounded-r-lg my-4">
          <p class="text-slate-700 dark:text-slate-300">
            <strong>Klant zoekt iets:</strong><br><br>
            <strong>Klant:</strong> Pardon, waar vind ik de rijst? 🍚<br>
            <strong>Medewerker:</strong> De rijst staat in gangpad 4, aan de linkerkant.<br>
            <strong>Klant:</strong> Dank u wel!<br><br>
            ---<br><br>
            <strong>Aan de kassa:</strong><br><br>
            <strong>Caissière:</strong> Goedemiddag! Heeft u alles kunnen vinden?<br>
            <strong>Klant:</strong> Ja, dank u!<br>
            <strong>Caissière:</strong> Wilt u een bonnetje? 🧾<br>
            <strong>Klant:</strong> Nee, dank u. Ik wil graag pinnen. 💳<br>
            <strong>Caissière:</strong> Dat kan. Steekt u uw pas maar in het apparaat.<br>
            <strong>Klant:</strong> (pint) Alstublieft.<br>
            <strong>Caissière:</strong> Dank u wel! Fijne dag nog!<br>
            <strong>Klant:</strong> Tot ziens! 👋
          </p>
        </div>
      `,
    },
    {
      title: "Handige Zinnen en Betalen 🗣️💳",
      body: `
        <h3 class="text-lg font-bold mt-4 mb-2">Iets vragen in de winkel</h3>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Nederlands</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Waar vind ik de melk? 🥛</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Heeft u ook verse vis? 🐟</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Kunt u mij helpen?</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Heeft u dit ook in een kleinere verpakking?</td></tr>
            </tbody>
          </table>
        </div>
        <h3 class="text-lg font-bold mt-6 mb-2">Aan de kassa</h3>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Nederlands</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Dat was het.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Hoeveel is het samen?</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Kan ik pinnen? 💳</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Mag ik een bonnetje? 🧾</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Heeft u een tasje? 🛍️</td></tr>
            </tbody>
          </table>
        </div>
        <h3 class="text-lg font-bold mt-6 mb-2">Betalen</h3>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Nederlands</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Uitleg</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">💶 <strong>contant</strong></td><td class="px-3 py-2 text-sm">met munten en briefgeld</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">💳 <strong>pinnen</strong></td><td class="px-3 py-2 text-sm">met je bankpas betalen</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">📱 <strong>contactloos betalen</strong></td><td class="px-3 py-2 text-sm">je pas of telefoon tegen het apparaat houden</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">💰 <strong>wisselgeld</strong></td><td class="px-3 py-2 text-sm">het geld dat je terugkrijgt</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">🏷️ <strong>de aanbieding</strong></td><td class="px-3 py-2 text-sm">iets is tijdelijk goedkoper</td></tr>
            </tbody>
          </table>
        </div>
      `,
    },
  ],
  rulesTable: [
    {
      rule: "Prijs vragen",
      structure: "**Wat kost** + enkelvoud? / **Wat kosten** + meervoud?",
      example: "Wat **kost** dit? Wat **kosten** de appels?",
      usage: "⚠️ PAS OP: Bij meervoud gebruik je **kosten**, niet **kost**.",
    },
    {
      rule: "Prijzen zeggen",
      structure: "getal + **euro** + getal + **cent** / getal + **euro** + getal",
      example: "**een euro vijftig** (€1,50), **twee vijfentwintig** (€2,25)",
      usage: "In spreektaal mag je 'euro' weglaten: 'twee vijftig' in plaats van 'twee euro vijftig'.",
    },
    {
      rule: "Hoeveelheden bestellen",
      structure: "**een** + verpakking + product / getal + verpakking + product",
      example: "**een kilo** appels, **een pak** melk, **twee flessen** water",
      usage: "Bij de toonbank: 'Mag ik **een ons** kaas?' of 'Kunt u mij **200 gram** ham snijden?'",
    },
    {
      rule: "Beleefd bestellen",
      structure: "**Mag ik** + product? / **Ik wil graag** + product. / **Doet u mij maar** + product.",
      example: "**Mag ik** een brood? **Ik wil graag** vier appels. **Doet u mij maar** een kilo.",
      usage: "⚠️ PAS OP: Zeg altijd 'alstublieft' bij het bestellen en 'dank u wel' bij het afrekenen.",
    },
    {
      rule: "Vragen waar iets ligt",
      structure: "**Waar vind ik** + product? / **Waar staat** + product?",
      example: "**Waar vind ik** de melk? **Waar staat** het brood?",
      usage: "In een supermarkt kun je ook vragen: 'Pardon, weet u waar de rijst is?'",
    },
    {
      rule: "Betalen – pinnen of contant",
      structure: "**Kan ik pinnen?** / **Ik wil graag pinnen.** / **Ik betaal contant.**",
      example: "**Kan ik pinnen?** Ja, dat kan. Steekt u uw pas maar in het apparaat.",
      usage: "Pinnen is het werkwoord voor betalen met je pinpas. Contant = met geld.",
    },
  ],
  callouts: [
    { type: "remember", label: "Onthoud 1", text: "Belangrijke winkels: **supermarkt, markt, bakker, slager, kaasboer, groenteboer, drogist**." },
    { type: "remember", label: "Onthoud 2", text: "Hoeveelheden: **een kilo, een halve kilo, een ons, een liter, een pak, een fles, een stuk, een plakje, een bosje**." },
    { type: "remember", label: "Onthoud 3", text: "Prijs vragen: **Wat kost dit? Hoeveel kost dat?**" },
    { type: "remember", label: "Onthoud 4", text: "Prijzen zeggen: **een euro vijftig, twee euro vijfentwintig, drie vijftig**." },
    { type: "remember", label: "Onthoud 5", text: "Betalen: **pinnen** (pinpas), **contant** (geld), **contactloos** (tegen apparaat houden)." },
    { type: "remember", label: "Onthoud 6", text: "Beleefdheid: zeg **alstublieft** bij bestellen en **dank u wel** bij afrekenen." },
    { type: "remember", label: "Onthoud 7", text: "Neem je **eigen tas** mee! In Nederland moet je vaak betalen voor een plastic tasje." },
  ],
  commonMistakes: [
    { incorrect: "Hoeveel kost de appels?", correct: "Hoeveel kosten de appels?", explanation: "Meervoud = kosten" },
    { incorrect: "Mag ik betalen met pin?", correct: "Mag ik pinnen?", explanation: "Pinnen is het werkwoord" },
    { incorrect: "Ik heb betaald met pin.", correct: "Ik heb gepind.", explanation: "Gebruik het werkwoord pinnen" },
    { incorrect: "Een kilo appels graag.", correct: "Een kilo appels, alstublieft.", explanation: "\"Alstublieft\" is beleefder" },
    { incorrect: "Dank u wel voor de boodschappen.", correct: "Dank u wel! / Bedankt!", explanation: "Je bedankt de persoon, niet de boodschappen" },
    { incorrect: "Hoe duur is dit?", correct: "Wat kost dit?", explanation: "\"Wat kost dit?\" is gebruikelijker" },
    { incorrect: "Kunt u mij helpen met vinden?", correct: "Kunt u mij helpen zoeken?", explanation: "\"Helpen zoeken\" is natuurlijker" },
  ],
  review: [
    "**Winkels:** supermarkt, markt, bakker, slager, kaasboer, groenteboer, drogist.",
    "**Groente/fruit:** appel, banaan, sinaasappel, druiven, aardbei, wortel, ui, aardappel, tomaat, komkommer.",
    "**Brood/ontbijt:** brood, stokbrood, croissant, boter, kaas, melk, ei, jam, hagelslag.",
    "**Vlees/vis:** vlees, kip, rundvlees, varkensvlees, vis, garnalen, worst, ham.",
    "**Dranken:** water, melk, koffie, thee, sinaasappelsap, appelsap, frisdrank, bier, wijn.",
    "**Hoeveelheden:** een kilo, een halve kilo, een ons, een liter, een pak, een fles, een blikje, een stuk, een plakje, een bosje.",
    "**Vragen naar prijs:** Wat kost dit? Hoeveel kost dat?",
    "**Prijzen zeggen:** een euro vijftig, twee euro vijfentwintig, drie vijftig.",
    "**Betalen:** pinnen, contant betalen, contactloos betalen.",
    "**Beleefdheid:** alstublieft, dank u wel, tot ziens.",
  ],
  qa: [
    { question: "Waar koop je brood?", answer: "Bij de **bakker** of in de **supermarkt**." },
    { question: "Waar koop je vlees?", answer: "Bij de **slager** of in de **supermarkt**." },
    { question: "Waar koop je kaas?", answer: "Bij de **kaasboer** of in de **supermarkt**." },
    { question: "Hoe vraag je wat iets kost?", answer: "**Wat kost dit?** of **Hoeveel kost dat?**" },
    { question: "Hoe zeg je € 1,50?", answer: "**Een euro vijftig** of **een vijftig**." },
    { question: "Hoe zeg je € 2,25?", answer: "**Twee euro vijfentwintig** of **twee vijfentwintig**." },
    { question: "Wat betekent \"een ons\"?", answer: "100 gram." },
    { question: "Wat betekent \"een kilo\"?", answer: "1000 gram." },
    { question: "Hoe vraag je waar iets ligt in de supermarkt?", answer: "**Waar vind ik de melk?** of **Waar staat het brood?**" },
    { question: "Hoe bestel je kaas aan de toonbank?", answer: "**Mag ik een half ons kaas?** of **Ik wil graag een stuk kaas.**" },
    { question: "Wat zeg je aan de kassa als je alles hebt?", answer: "**Dat was het.**" },
    { question: "Hoe vraag je of je kunt pinnen?", answer: "**Kan ik pinnen?**" },
    { question: "Hoe vraag je om een bonnetje?", answer: "**Mag ik een bonnetje?**" },
    { question: "Wat is het verschil tussen pinnen en contant betalen?", answer: "**Pinnen** = met je bankpas betalen. **Contant betalen** = met munten en briefgeld betalen." },
    { question: "Wat zeg je als je de winkel verlaat?", answer: "**Dank u wel! Tot ziens!**" },
    { question: "Wat betekent \"in de aanbieding\"?", answer: "Het product is tijdelijk goedkoper." },
    { question: "Hoe vraag je of iemand je kan helpen in de winkel?", answer: "**Kunt u mij helpen?** of **Pardon, weet u waar de rijst is?**" },
    { question: "Wat betekent \"wisselgeld\"?", answer: "Het geld dat je terugkrijgt als je contant betaalt." },
    { question: "Hoe zeg je \"I want to pay by card\"?", answer: "**Ik wil graag pinnen**." },
    { question: "Hoe zeg je \"Do you have a bag?\"?", answer: "**Heeft u een tasje?**" },
  ],
};