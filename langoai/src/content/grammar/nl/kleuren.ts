import type { GrammarLesson } from "../../types";

export const kleuren: GrammarLesson = {
  id: "nl-kleuren-1",
  title: "Kleuren en Eenvoudige Beschrijvingen",
  level: 1,
  topic: "Vocabulaire",
  body: "Leer de kleuren in het Nederlands en hoe je eenvoudige beschrijvingen geeft. Je leert niet alleen de basiskleuren, maar ook hoe je dingen beschrijft met kleuren, maten en eenvoudige eigenschappen. Na deze les kun je alles om je heen beschrijven!",
  overview:
    "Hier vind je een **volledig uitgewerkte** les over kleuren en beschrijvingen. Je leert alle basiskleuren, hoe je kleuren combineert met zelfstandige naamwoorden, hoe je eenvoudige beschrijvingen maakt met bijvoeglijke naamwoorden, en de belangrijkste regels voor woordvolgorde. Alles met duidelijke voorbeelden, ezelsbruggetjes en praktische oefenvragen. Na deze les beschrijf je alles foutloos in het Nederlands!",
  anchorSectionId: "basiskleuren",
  exercises: [],
  timeExpressionsLabel: "Basiskleuren 🎨",
  timeExpressions: {
    header: "Kleur | Nederlands",
    rows: [
      ["🔴", "<strong>rood</strong>"],
      ["🟡", "<strong>geel</strong>"],
      ["🔵", "<strong>blauw</strong>"],
      ["🟢", "<strong>groen</strong>"],
      ["⚫", "<strong>zwart</strong>"],
      ["⚪", "<strong>wit</strong>"],
      ["🟤", "<strong>bruin</strong>"],
      ["🟠", "<strong>oranje</strong>"],
      ["🟣", "<strong>paars</strong>"],
      ["🩷", "<strong>roze</strong>"],
      ["🩶", "<strong>grijs</strong>"],
    ],
  },
  details: [
    {
      title: "Lichte en Donkere Kleuren ☀️🌙",
      body: `
        <div class="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-indigo-700 dark:text-indigo-300 mb-2">🧲 Regel</h3>
          <p class="text-slate-700 dark:text-slate-300">In het Nederlands zet je <strong>licht</strong> of <strong>donker</strong> voor de kleur. Je schrijft het als <strong>een woord aan elkaar</strong>.</p>
        </div>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-indigo-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Nederlands</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Uitleg</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">☀️ <strong>lichtblauw</strong></td><td class="px-3 py-2 text-sm">zoals de lucht overdag</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">☀️ <strong>lichtgroen</strong></td><td class="px-3 py-2 text-sm">zoals een jong blaadje</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">🌙 <strong>donkerrood</strong></td><td class="px-3 py-2 text-sm">zoals wijn</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">🌙 <strong>donkerbruin</strong></td><td class="px-3 py-2 text-sm">zoals chocolade</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">🌙 <strong>donkerblauw</strong></td><td class="px-3 py-2 text-sm">zoals de nachtelijke hemel</td></tr>
            </tbody>
          </table>
        </div>
        <div class="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 rounded-r-lg my-4">
          <p class="font-semibold text-amber-700 dark:text-amber-300">
            ⚠️ PAS OP: Je schrijft de combinatie <strong>aan elkaar</strong>: lichtblauw, donkergroen. Nooit met een spatie!
          </p>
        </div>
      `,
    },
    {
      title: "Kleuren Gebruiken in een Zin 📝",
      body: `
        <h3 class="text-lg font-bold mt-4 mb-2">Manier 1: Voor het zelfstandig naamwoord → +e</h3>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-indigo-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Nederlands</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">de <strong>rode</strong> auto 🚗</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">een <strong>blauwe</strong> fiets 🚲</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">de <strong>groene</strong> deur 🚪</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">een <strong>gele</strong> bloem 🌻</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">een <strong>zwarte</strong> kat 🐈‍⬛</td></tr>
            </tbody>
          </table>
        </div>
        <h3 class="text-lg font-bold mt-6 mb-2">Manier 2: Na "zijn" → geen -e</h3>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-indigo-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Nederlands</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">De auto is <strong>rood</strong>. 🚗</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Mijn fiets is <strong>blauw</strong>. 🚲</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">De deur is <strong>groen</strong>. 🚪</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">De kat is <strong>zwart</strong>. 🐈‍⬛</td></tr>
            </tbody>
          </table>
        </div>
      `,
    },
    {
      title: "De Uitzondering – \"Het\" woorden met \"Een\" ⚠️",
      body: `
        <div class="bg-rose-50 dark:bg-rose-900/20 border-l-4 border-rose-500 p-4 rounded-r-lg my-4">
          <p class="font-semibold text-rose-700 dark:text-rose-300">
            ⚠️ PAS OP: Bij een <strong>het</strong>-woord met <strong>een</strong> ervoor, komt er <strong>geen -e</strong>!
          </p>
        </div>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-indigo-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Nederlands</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Regel</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm"><strong>het</strong> witte huis 🏠</td><td class="px-3 py-2 text-sm">"het" + het-woord → wel -e</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm"><strong>een</strong> wit huis 🏠</td><td class="px-3 py-2 text-sm">"een" + het-woord → geen -e</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm"><strong>het</strong> grote boek 📖</td><td class="px-3 py-2 text-sm">"het" + het-woord → wel -e</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm"><strong>een</strong> groot boek 📖</td><td class="px-3 py-2 text-sm">"een" + het-woord → geen -e</td></tr>
            </tbody>
          </table>
        </div>
        <div class="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 rounded-r-lg my-4">
          <p class="font-semibold text-amber-700 dark:text-amber-300">
            ⚠️ PAS OP: <strong>Oranje</strong> is een uitzondering en krijgt <strong>nooit</strong> een -e!<br>
            De oranje deur ✅ | De oranjee deur ❌
          </p>
        </div>
      `,
    },
    {
      title: "Eenvoudige Beschrijvingen – Bijvoeglijke Naamwoorden ✨",
      body: `
        <h3 class="text-lg font-bold mt-4 mb-2">Grootte en vorm</h3>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-indigo-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Nederlands</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Tegenovergestelde</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm"><strong>groot</strong> 🐘</td><td class="px-3 py-2 text-sm"><strong>klein</strong> 🐭</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm"><strong>lang</strong> 📏</td><td class="px-3 py-2 text-sm"><strong>kort</strong> ✂️</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm"><strong>hoog</strong> 🏔️</td><td class="px-3 py-2 text-sm"><strong>laag</strong> ⬇️</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm"><strong>dik</strong> 📚</td><td class="px-3 py-2 text-sm"><strong>dun</strong> 📄</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm"><strong>rond</strong> ⚽</td><td class="px-3 py-2 text-sm"></td></tr>
            </tbody>
          </table>
        </div>
        <h3 class="text-lg font-bold mt-6 mb-2">Eigenschappen</h3>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-indigo-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Nederlands</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Tegenovergestelde</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm"><strong>mooi</strong> 🌸</td><td class="px-3 py-2 text-sm"><strong>lelijk</strong> 💀</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm"><strong>goed</strong> ✅</td><td class="px-3 py-2 text-sm"><strong>slecht</strong> ❌</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm"><strong>nieuw</strong> 🆕</td><td class="px-3 py-2 text-sm"><strong>oud</strong> 🏚️</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm"><strong>jong</strong> 👶</td><td class="px-3 py-2 text-sm"><strong>oud</strong> 👴</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm"><strong>snel</strong> 🚀</td><td class="px-3 py-2 text-sm"><strong>langzaam</strong> 🐢</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm"><strong>warm</strong> 🔥</td><td class="px-3 py-2 text-sm"><strong>koud</strong> ❄️</td></tr>
            </tbody>
          </table>
        </div>
        <h3 class="text-lg font-bold mt-6 mb-2">Gevoel en toestand</h3>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-indigo-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Nederlands</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Tegenovergestelde</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm"><strong>blij</strong> 😊</td><td class="px-3 py-2 text-sm"><strong>verdrietig</strong> 😢</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm"><strong>sterk</strong> 💪</td><td class="px-3 py-2 text-sm"><strong>zwak</strong> 😓</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm"><strong>hard</strong> 🪨</td><td class="px-3 py-2 text-sm"><strong>zacht</strong> 🧸</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm"><strong>zwaar</strong> 🏋️</td><td class="px-3 py-2 text-sm"><strong>licht</strong> 🪶</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm"><strong>schoon</strong> ✨</td><td class="px-3 py-2 text-sm"><strong>vies</strong> 🤢</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm"><strong>open</strong> 🚪</td><td class="px-3 py-2 text-sm"><strong>dicht</strong> 🚪</td></tr>
            </tbody>
          </table>
        </div>
      `,
    },
    {
      title: "Combinaties Maken – Meerdere Beschrijvingen 🎯",
      body: `
        <p class="text-sm text-slate-600 dark:text-slate-400 mb-4">Je kunt twee of meer beschrijvingen combineren in een zin.</p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-indigo-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Nederlands</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Een <strong>grote rode</strong> auto 🚗</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Een <strong>klein wit</strong> huisje 🏠</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">De <strong>mooie groene</strong> tuin 🌳</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Een <strong>oud bruin</strong> boek 📖</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Mijn <strong>nieuwe zwarte</strong> schoenen 👞</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Een <strong>lief klein</strong> hondje 🐶</td></tr>
            </tbody>
          </table>
        </div>
      `,
    },
  ],
  rulesTable: [
    {
      rule: "Voor zelfstandig naamwoord → +e",
      structure: "Bijvoeglijk naamwoord + **e** + zelfstandig naamwoord",
      example: "de **rode** auto, een **blauwe** fiets, de **grote** man",
      usage: "Dit geldt voor alle **de**-woorden en voor **het**-woorden met **het**.",
    },
    {
      rule: "Na 'zijn' → geen -e",
      structure: "onderwerp + zijn + bijvoeglijk naamwoord (zonder -e)",
      example: "De auto is **rood**. De man is **groot**. Het boek is **oud**.",
      usage: "⚠️ PAS OP: Dit is een veelgemaakte fout! Na 'zijn' nooit -e.",
    },
    {
      rule: "Een + het-woord → geen -e",
      structure: "een + bijvoeglijk naamwoord (zonder -e) + het-woord",
      example: "een **rood** huis, een **groot** boek, een **wit** paard",
      usage: "Alleen bij **het**-woorden met **een**. Bij **de**-woorden altijd -e.",
    },
    {
      rule: "Licht/donker schrijf je aan elkaar",
      structure: "**licht** + kleur of **donker** + kleur (een woord!)",
      example: "**lichtblauw**, **donkergroen**, **lichtrood**",
      usage: "⚠️ PAS OP: Nooit 'licht blauw' met spatie!",
    },
    {
      rule: "Oranje is een uitzondering",
      structure: "**oranje** krijgt **nooit** een -e",
      example: "de **oranje** deur, een **oranje** auto",
      usage: "Nooit: oranjee! Dit is de enige kleur zonder -e.",
    },
    {
      rule: "Meerdere beschrijvingen combineren",
      structure: "bijvoeglijk naamwoord 1 (+e) + bijvoeglijk naamwoord 2 (+e) + zelfstandig naamwoord",
      example: "een **grote rode** auto, een **klein wit** huisje",
      usage: "Beide beschrijvingen krijgen dezelfde regels (wel of geen -e).",
    },
  ],
  callouts: [
    { type: "remember", label: "Onthoud 1", text: "Basiskleuren: **rood, geel, blauw, groen, zwart, wit, bruin, oranje, paars, roze, grijs**." },
    { type: "remember", label: "Onthoud 2", text: "Voor zelfstandig naamwoord → **+e**: de **rode** auto. Na **zijn** → geen -e: De auto is **rood**." },
    { type: "remember", label: "Onthoud 3", text: "Bij **een + het-woord** → geen -e: een **rood** huis. Bij **het** + het-woord → wel -e: het **rode** huis." },
    { type: "remember", label: "Onthoud 4", text: "**Licht** en **donker** aan elkaar: **lichtblauw**, **donkergroen**." },
    { type: "remember", label: "Onthoud 5", text: "**Oranje** krijgt **nooit** -e: de oranje deur." },
    { type: "remember", label: "Onthoud 6", text: "Bijvoeglijke naamwoorden zoals **groot, klein, mooi, nieuw, oud** volgen dezelfde regels als kleuren." },
    { type: "remember", label: "Onthoud 7", text: "Meerdere beschrijvingen kunnen samen: een **grote rode** auto, een **klein wit** huisje." },
  ],
  commonMistakes: [
    { incorrect: "De auto is rode.", correct: "De auto is rood.", explanation: "Na \"zijn\" komt geen -e" },
    { incorrect: "Een rode huis", correct: "Een rood huis", explanation: "\"Huis\" is een het-woord met \"een\" → geen -e" },
    { incorrect: "Licht blauw", correct: "Lichtblauw", explanation: "Combinaties schrijf je aan elkaar" },
    { incorrect: "Donker groen", correct: "Donkergroen", explanation: "Combinaties schrijf je aan elkaar" },
    { incorrect: "De rood auto", correct: "De rode auto", explanation: "Voor het zelfstandig naamwoord → +e" },
    { incorrect: "De oranjee deur", correct: "De oranje deur", explanation: "Oranje is een uitzondering, nooit -e" },
    { incorrect: "Een groot man", correct: "Een grote man", explanation: "De-woord → altijd -e" },
    { incorrect: "Het boek is oude.", correct: "Het boek is oud.", explanation: "Na \"zijn\" komt geen -e" },
    { incorrect: "De groen appel", correct: "De groene appel", explanation: "Voor het zelfstandig naamwoord → +e" },
    { incorrect: "Een wit deur", correct: "Een witte deur", explanation: "De-woord → altijd -e" },
  ],
  review: [
    "**Basiskleuren:** rood, geel, blauw, groen, zwart, wit, bruin, oranje, paars, roze, grijs.",
    "**Lichte kleuren:** lichtblauw, lichtgroen, lichtrood, lichtgeel (altijd aan elkaar).",
    "**Donkere kleuren:** donkerblauw, donkergroen, donkerrood, donkerbruin (altijd aan elkaar).",
    "**Regel voor zelfstandig naamwoord:** kleur + e: de rode auto, een blauwe fiets.",
    "**Regel na \"zijn\":** alleen de kleur: De auto is rood. Het huis is wit.",
    "**Uitzondering \"het\"-woorden met \"een\":** geen -e: een rood huis, een groot boek.",
    "**Uitzondering oranje:** nooit -e: de oranje deur, een oranje auto.",
    "**Grootte:** groot/klein, lang/kort, hoog/laag, dik/dun, rond, vierkant.",
    "**Eigenschappen:** mooi/lelijk, goed/slecht, nieuw/oud, jong/oud, snel/langzaam, warm/koud.",
    "**Gevoel:** blij/verdrietig, sterk/zwak, hard/zacht, zwaar/licht, schoon/vies.",
    "**Combinaties:** een grote rode auto, een klein wit huisje.",
  ],
  qa: [
    { question: "Wat zijn de basiskleuren in het Nederlands?", answer: "**Rood, geel, blauw, groen, zwart, wit, bruin, oranje, paars, roze en grijs**." },
    { question: "Hoe zeg je \"the red car\" in het Nederlands?", answer: "**De rode auto**." },
    { question: "Hoe zeg je \"the car is red\" in het Nederlands?", answer: "**De auto is rood**." },
    { question: "Wat is het verschil tussen \"de rode auto\" en \"de auto is rood\"?", answer: "Bij \"de rode auto\" staat de kleur voor het zelfstandig naamwoord en komt er **-e** bij. Bij \"de auto is rood\" staat de kleur na **is** en komt er **geen -e** bij." },
    { question: "Hoe zeg je \"a blue bicycle\" in het Nederlands?", answer: "**Een blauwe fiets**." },
    { question: "Hoe zeg je \"a white house\" in het Nederlands?", answer: "**Een wit huis** (zonder -e, want \"huis\" is een het-woord met \"een\")." },
    { question: "Hoe zeg je \"the white house\" in het Nederlands?", answer: "**Het witte huis** (met -e, want \"huis\" is een het-woord met \"het\")." },
    { question: "Waarom zeg je \"een wit huis\" zonder -e?", answer: "Omdat \"huis\" een **het**-woord is en het lidwoord **een** is. Bij een het-woord met \"een\" komt er geen -e." },
    { question: "Hoe zeg je \"light blue\" in het Nederlands?", answer: "**Lichtblauw** (aan elkaar)." },
    { question: "Hoe zeg je \"dark green\" in het Nederlands?", answer: "**Donkergroen** (aan elkaar)." },
    { question: "Welke kleur krijgt nooit een -e?", answer: "**Oranje**. Je zegt: de oranje deur, een oranje auto." },
    { question: "Hoe zeg je \"a beautiful flower\" in het Nederlands?", answer: "**Een mooie bloem**." },
    { question: "Hoe zeg je \"the man is big\" in het Nederlands?", answer: "**De man is groot**." },
    { question: "Hoe zeg je \"a big man\" in het Nederlands?", answer: "**Een grote man**." },
    { question: "Hoe zeg je \"a big book\" in het Nederlands?", answer: "**Een groot boek** (zonder -e, want \"boek\" is een het-woord met \"een\")." },
    { question: "Wat is het tegenovergestelde van \"groot\"?", answer: "**Klein**." },
    { question: "Wat is het tegenovergestelde van \"warm\"?", answer: "**Koud**." },
    { question: "Wat is het tegenovergestelde van \"oud\" (voor dingen)?", answer: "**Nieuw**." },
    { question: "Wat is het tegenovergestelde van \"oud\" (voor mensen)?", answer: "**Jong**." },
    { question: "Hoe zeg je \"I am happy\" in het Nederlands?", answer: "**Ik ben blij**." },
    { question: "Hoe beschrijf je een kat die zwart en klein is?", answer: "**Een kleine zwarte kat**." },
    { question: "Hoe beschrijf je een auto die groot en rood is?", answer: "**Een grote rode auto**." },
    { question: "Hoe zeg je \"the food is hot\" in het Nederlands?", answer: "**Het eten is heet**." },
    { question: "Hoe zeg je \"a soft pillow\" in het Nederlands?", answer: "**Een zacht kussen**." },
    { question: "Hoe zeg je \"the door is open\" in het Nederlands?", answer: "**De deur is open**." },
  ],
};