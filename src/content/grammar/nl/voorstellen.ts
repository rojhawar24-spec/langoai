import type { GrammarLesson } from "../../types";

export const voorstellen: GrammarLesson = {
  id: "nl-voorstellen-1",
  title: "Zich voorstellen: naam, leeftijd, woonplaats, nationaliteit",
  level: 1,
  topic: "Spreken & Presenteren",
  body: "Leer hoe je jezelf voorstelt in het Nederlands. Je oefent met je naam, leeftijd, woonplaats en nationaliteit.",
  overview:
    "Hier vind je een **volledig uitgewerkte** les over jezelf voorstellen. Je leert de vier basiszinnen, de bijbehorende werkwoorden, de meest gemaakte fouten en een snelle herhaling. Alles is helder, overzichtelijk en direct in de praktijk te gebruiken.",
  anchorSectionId: "basiszinnen",
  exercises: [],
  timeExpressionsLabel: "Basiszinnen – Vier onderdelen",
  timeExpressions: {
    header: "Onderdeel | Zin | Werkwoord",
    rows: [
      ["Naam", "Ik **heet** [naam].", "heten"],
      ["Naam (alt)", "Ik **ben** [naam].", "zijn"],
      ["Leeftijd", "Ik **ben** [getal] jaar oud.", "zijn"],
      ["Woonplaats", "Ik **woon** in [plaats].", "wonen"],
      ["Herkomst", "Ik **kom uit** [plaats].", "komen uit"],
      ["Nationaliteit", "Ik **ben** [nationaliteit].", "zijn"],
      ["Land", "Ik **kom uit** [land].", "komen uit"],
    ],
  },
  details: [
    {
      title: "Stap 1 – Je naam zeggen",
      body: `
        <div class="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-indigo-700 dark:text-indigo-300 mb-2">🧲 Twee manieren</h3>
          <ul class="space-y-1 list-disc pl-5 text-slate-700 dark:text-slate-300">
            <li><strong>Ik heet ...</strong> is de standaard manier.</li>
            <li><strong>Ik ben ...</strong> is makkelijker en ook goed.</li>
          </ul>
        </div>
        <h3 class="text-lg font-bold mt-4 mb-2">Manier 1: Ik heet ...</h3>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-indigo-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Persoon</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Vervoeging</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Voorbeeld</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Ik</td><td class="px-3 py-2 text-sm"><strong>heet</strong></td><td class="px-3 py-2 text-sm">Ik <strong>heet</strong> Mohammed.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Jij / U</td><td class="px-3 py-2 text-sm"><strong>heet</strong></td><td class="px-3 py-2 text-sm">Jij <strong>heet</strong> Lisa.</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Hij / Zij</td><td class="px-3 py-2 text-sm"><strong>heet</strong></td><td class="px-3 py-2 text-sm">Hij <strong>heet</strong> Jan.</td></tr>
            </tbody>
          </table>
        </div>
        <h3 class="text-lg font-bold mt-6 mb-2">Manier 2: Ik ben ...</h3>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-indigo-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Persoon</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Vervoeging</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Voorbeeld</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Ik</td><td class="px-3 py-2 text-sm"><strong>ben</strong></td><td class="px-3 py-2 text-sm">Ik <strong>ben</strong> Thomas.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Jij / U</td><td class="px-3 py-2 text-sm"><strong>bent</strong></td><td class="px-3 py-2 text-sm">Jij <strong>bent</strong> Anna.</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Hij / Zij</td><td class="px-3 py-2 text-sm"><strong>is</strong></td><td class="px-3 py-2 text-sm">Zij <strong>is</strong> Maria.</td></tr>
            </tbody>
          </table>
        </div>
      `,
    },
    {
      title: "Stap 2 – Je leeftijd zeggen",
      body: `
        <div class="bg-rose-50 dark:bg-rose-900/20 border-l-4 border-rose-500 p-4 rounded-r-lg my-4">
          <p class="font-semibold text-rose-700 dark:text-rose-300">
            <strong>Let op:</strong> Gebruik altijd <strong>"jaar"</strong> en nooit "jaren" bij leeftijd.
          </p>
        </div>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-indigo-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Persoon</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Zin</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Ik</td><td class="px-3 py-2 text-sm">Ik ben 25 <strong>jaar</strong> oud.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Jij</td><td class="px-3 py-2 text-sm">Jij bent 30 <strong>jaar</strong>.</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Hij / Zij</td><td class="px-3 py-2 text-sm">Zij is 18 <strong>jaar</strong> oud.</td></tr>
            </tbody>
          </table>
        </div>
        <p class="text-sm text-slate-600 dark:text-slate-400">Je mag "oud" weglaten. "Ik ben 25 jaar" is ook goed.</p>
      `,
    },
    {
      title: "Stap 3 – Je woonplaats zeggen",
      body: `
        <h3 class="text-lg font-bold mt-4 mb-2">Hier woon ik nu: Ik woon in ...</h3>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-indigo-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Persoon</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Vervoeging</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Voorbeeld</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Ik</td><td class="px-3 py-2 text-sm"><strong>woon</strong></td><td class="px-3 py-2 text-sm">Ik <strong>woon</strong> in Amsterdam.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Jij / U</td><td class="px-3 py-2 text-sm"><strong>woont</strong></td><td class="px-3 py-2 text-sm">Jij <strong>woont</strong> in Rotterdam.</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Hij / Zij</td><td class="px-3 py-2 text-sm"><strong>woont</strong></td><td class="px-3 py-2 text-sm">Hij <strong>woont</strong> in Den Haag.</td></tr>
            </tbody>
          </table>
        </div>
        <h3 class="text-lg font-bold mt-6 mb-2">Hier kom ik vandaan: Ik kom uit ...</h3>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-indigo-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Persoon</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Vervoeging</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Voorbeeld</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Ik</td><td class="px-3 py-2 text-sm"><strong>kom uit</strong></td><td class="px-3 py-2 text-sm">Ik <strong>kom uit</strong> Marokko.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Jij / U</td><td class="px-3 py-2 text-sm"><strong>komt uit</strong></td><td class="px-3 py-2 text-sm">Jij <strong>komt uit</strong> Turkije.</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Hij / Zij</td><td class="px-3 py-2 text-sm"><strong>komt uit</strong></td><td class="px-3 py-2 text-sm">Zij <strong>komt uit</strong> België.</td></tr>
            </tbody>
          </table>
        </div>
        <div class="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 rounded-r-lg my-4">
          <p class="font-semibold text-amber-700 dark:text-amber-300">
            <strong>Het voorzetsel:</strong> Ik woon <strong>in</strong> Amsterdam (je bent er nu). Ik kom <strong>uit</strong> Amsterdam (daar kom je vandaan).
          </p>
        </div>
      `,
    },
    {
      title: "Stap 4 – Je nationaliteit zeggen",
      body: `
        <h3 class="text-lg font-bold mt-4 mb-2">Manier 1: Ik ben ... (nationaliteit)</h3>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-indigo-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Persoon</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Voorbeeld</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Ik</td><td class="px-3 py-2 text-sm">Ik <strong>ben</strong> Nederlands.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Jij</td><td class="px-3 py-2 text-sm">Jij <strong>bent</strong> Belgisch.</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Hij / Zij</td><td class="px-3 py-2 text-sm">Zij <strong>is</strong> Marokkaans.</td></tr>
            </tbody>
          </table>
        </div>
        <h3 class="text-lg font-bold mt-6 mb-2">Manier 2: Ik kom uit ... (land)</h3>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-indigo-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Persoon</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Voorbeeld</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Ik</td><td class="px-3 py-2 text-sm">Ik <strong>kom uit</strong> Nederland.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Jij</td><td class="px-3 py-2 text-sm">Jij <strong>komt uit</strong> België.</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Hij / Zij</td><td class="px-3 py-2 text-sm">Hij <strong>komt uit</strong> Marokko.</td></tr>
            </tbody>
          </table>
        </div>
      `,
    },
    {
      title: "Nationaliteiten en Landen – Overzicht",
      body: `
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-5">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-indigo-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Land</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Nationaliteit</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Nederland</td><td class="px-3 py-2 text-sm">Nederlands</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">België</td><td class="px-3 py-2 text-sm">Belgisch</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Frankrijk</td><td class="px-3 py-2 text-sm">Frans</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Duitsland</td><td class="px-3 py-2 text-sm">Duits</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Engeland</td><td class="px-3 py-2 text-sm">Engels</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Spanje</td><td class="px-3 py-2 text-sm">Spaans</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Italië</td><td class="px-3 py-2 text-sm">Italiaans</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Polen</td><td class="px-3 py-2 text-sm">Pools</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Turkije</td><td class="px-3 py-2 text-sm">Turks</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Marokko</td><td class="px-3 py-2 text-sm">Marokkaans</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Suriname</td><td class="px-3 py-2 text-sm">Surinaams</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">China</td><td class="px-3 py-2 text-sm">Chinees</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Japan</td><td class="px-3 py-2 text-sm">Japans</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Amerika</td><td class="px-3 py-2 text-sm">Amerikaans</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Brazilië</td><td class="px-3 py-2 text-sm">Braziliaans</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Egypte</td><td class="px-3 py-2 text-sm">Egyptisch</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Syrië</td><td class="px-3 py-2 text-sm">Syrisch</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Oekraïne</td><td class="px-3 py-2 text-sm">Oekraïens</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Rusland</td><td class="px-3 py-2 text-sm">Russisch</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Griekenland</td><td class="px-3 py-2 text-sm">Grieks</td></tr>
            </tbody>
          </table>
        </div>
      `,
    },
    {
      title: "Voorbeeldgesprek",
      body: `
        <div class="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 p-4 rounded-r-lg my-4">
          <p class="text-slate-700 dark:text-slate-300">
            <strong>Lisa:</strong> Hallo! Ik heet Lisa. Ik ben 28 jaar oud. Ik woon in Amsterdam. Ik ben Nederlands. En jij?<br><br>
            <strong>Omar:</strong> Hoi Lisa. Ik ben Omar. Ik kom uit Egypte, maar ik woon nu in Rotterdam. Ik ben 32 jaar.<br><br>
            <strong>Lisa:</strong> Aangenaam! Welkom in Nederland.<br><br>
            <strong>Omar:</strong> Dank je wel!
          </p>
        </div>
      `,
    },
  ],
  rulesTable: [
    {
      rule: "heten – je naam zeggen",
      structure: "Ik **heet** + naam. Jij/U **heet** + naam. Hij/Zij **heet** + naam.",
      example: "Ik **heet** Anna. Jij **heet** Tom. Hij **heet** Jan.",
      usage: "Dit is de standaard manier om je naam te zeggen. Gebruik nooit 'van' na 'heten'.",
    },
    {
      rule: "zijn – naam, leeftijd, nationaliteit",
      structure: "Ik **ben** ... / Jij **bent** ... / Hij/Zij **is** ...",
      example: "Ik **ben** 25 jaar. Jij **bent** Nederlands. Zij **is** Maria.",
      usage: "Het werkwoord 'zijn' gebruik je voor je naam (informeel), leeftijd en nationaliteit.",
    },
    {
      rule: "wonen – je woonplaats",
      structure: "Ik **woon** in + plaats. Jij/U **woont** in + plaats. Hij/Zij **woont** in + plaats.",
      example: "Ik **woon** in Amsterdam. Jij **woont** in Rotterdam.",
      usage: "Gebruik altijd het voorzetsel 'in' bij een stad of land waar je woont.",
    },
    {
      rule: "komen uit – je herkomst",
      structure: "Ik **kom uit** + plaats/land. Jij/U **komt uit** + plaats/land. Hij/Zij **komt uit** + plaats/land.",
      example: "Ik **kom uit** België. Jij **komt uit** Spanje.",
      usage: "Gebruik altijd het voorzetsel 'uit' om aan te geven waar je vandaan komt.",
    },
    {
      rule: "Leeftijd: altijd 'jaar', nooit 'jaren'",
      structure: "Ik ben + getal + **jaar** (oud).",
      example: "Ik ben 25 **jaar** oud. Hij is 30 **jaar**.",
      usage: "Bij leeftijd gebruik je altijd het enkelvoud 'jaar', nooit het meervoud 'jaren'.",
    },
    {
      rule: "Nationaliteit en land",
      structure: "Ik ben + nationaliteit (bijvoeglijk naamwoord). Ik kom uit + land (zelfstandig naamwoord).",
      example: "Ik **ben** Nederlands. Ik **kom uit** Nederland.",
      usage: "Nationaliteit schrijf je met een hoofdletter. Het land ook.",
    },
  ],
  callouts: [
    { type: "remember", label: "Onthoud 1", text: "**Naam zeggen:** Ik **heet** ... (standaard) of Ik **ben** ... (makkelijk). Nooit 'Ik heet **van** ...' zeggen." },
    { type: "remember", label: "Onthoud 2", text: "**Leeftijd:** Altijd **jaar**, nooit **jaren**. 'Ik ben 25 jaar oud.' of 'Ik ben 25 jaar.'" },
    { type: "remember", label: "Onthoud 3", text: "**Woonplaats:** Ik **woon in** + stad. Voorzetsel is altijd **in**." },
    { type: "remember", label: "Onthoud 4", text: "**Herkomst:** Ik **kom uit** + plaats/land. Voorzetsel is altijd **uit**." },
    { type: "remember", label: "Onthoud 5", text: "**Nationaliteit vs. Land:** Ik **ben** Nederlands (bijvoeglijk naamwoord). Ik **kom uit** Nederland (zelfstandig naamwoord)." },
    { type: "remember", label: "Onthoud 6", text: "**Werkwoord 'zijn':** Ik **ben**, jij **bent**, hij/zij **is**. Onregelmatig werkwoord." },
    { type: "remember", label: "Onthoud 7", text: "**Werkwoord 'heten':** Ik **heet**, jij **heet**, hij/zij **heet**. In alle vormen hetzelfde." },
  ],
  commonMistakes: [
    { incorrect: "Ik ben 25 jaren oud.", correct: "Ik ben 25 jaar oud.", explanation: "Bij leeftijd altijd 'jaar', nooit 'jaren'." },
    { incorrect: "Ik heet van Anna.", correct: "Ik heet Anna.", explanation: "'Van' hoort niet bij 'heten'." },
    { incorrect: "Ik ben wonen in Amsterdam.", correct: "Ik woon in Amsterdam.", explanation: "Gebruik één werkwoord, niet twee." },
    { incorrect: "Ik woon op Amsterdam.", correct: "Ik woon in Amsterdam.", explanation: "Het correcte voorzetsel bij steden is 'in'." },
    { incorrect: "Ik kom in Turkije.", correct: "Ik kom uit Turkije.", explanation: "Het correcte voorzetsel bij herkomst is 'uit'." },
    { incorrect: "Ik ben Holland.", correct: "Ik ben Nederlands.", explanation: "Holland is een regio, geen nationaliteit." },
    { incorrect: "Mijn naam is Anna.", correct: "Ik heet Anna.", explanation: "'Mijn naam is' is niet fout, maar 'Ik heet' is natuurlijker." },
  ],
  review: [
    "**Naam:** Ik **heet** [naam] of Ik **ben** [naam].",
    "**Leeftijd:** Ik ben [getal] **jaar** oud. (altijd 'jaar', nooit 'jaren')",
    "**Woonplaats:** Ik **woon in** [plaats]. (voorzetsel 'in')",
    "**Herkomst:** Ik **kom uit** [plaats/land]. (voorzetsel 'uit')",
    "**Nationaliteit:** Ik **ben** [nationaliteit]. (bijvoeglijk naamwoord)",
    "**Land:** Ik **kom uit** [land]. (zelfstandig naamwoord)",
    "**Werkwoorden:** heten (naam), zijn (naam/leeftijd/nationaliteit), wonen (woonplaats), komen uit (herkomst).",
    "**zijn:** Ik ben, jij bent, hij/zij is.",
    "**heten:** Ik heet, jij heet, hij/zij heet.",
    "**wonen:** Ik woon, jij woont, hij/zij woont.",
  ],
  qa: [
    { question: "Hoe zeg je je naam in het Nederlands?", answer: "Ik **heet** [naam] of Ik **ben** [naam]." },
    { question: "Wat is het verschil tussen 'Ik heet' en 'Ik ben'?", answer: "'Ik heet' is de standaard manier. 'Ik ben' is informeler, maar ook correct." },
    { question: "Hoe zeg je je leeftijd?", answer: "Ik ben [getal] **jaar** (oud)." },
    { question: "Waarom zeg je 'jaar' en niet 'jaren'?", answer: "Bij leeftijd gebruik je altijd het enkelvoud 'jaar', nooit het meervoud 'jaren'." },
    { question: "Welk voorzetsel gebruik je bij woonplaats?", answer: "**in**: Ik woon **in** Amsterdam." },
    { question: "Welk voorzetsel gebruik je bij herkomst?", answer: "**uit**: Ik kom **uit** België." },
    { question: "Hoe zeg je je nationaliteit?", answer: "Ik **ben** Nederlands/Belgisch/Marokkaans etc." },
    { question: "Hoe zeg je uit welk land je komt?", answer: "Ik **kom uit** Nederland/België/Marokko etc." },
    { question: "Wat is het verschil tussen 'Ik ben Nederlands' en 'Ik kom uit Nederland'?", answer: "'Ik ben Nederlands' zegt je nationaliteit. 'Ik kom uit Nederland' zegt het land waar je vandaan komt." },
    { question: "Hoe vervoeg je het werkwoord 'zijn'?", answer: "Ik **ben**, jij/u **bent**, hij/zij **is**." },
  ],
};