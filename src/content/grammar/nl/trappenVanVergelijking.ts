import type { GrammarLesson } from "../../types";

export const trappenVanVergelijking: GrammarLesson = {
  id: "nl-trappen-van-vergelijking-1",
  title: "Trappen van Vergelijking: Stellend, Vergrotend, Overtreffend en Als/Dan",
  level: 2,
  topic: "Trappen van vergelijking", // [G] Grammatica
  body: "Leer hoe je de vergrotende en overtreffende trap van bijvoeglijke naamwoorden maakt. Met spellingregels, onregelmatige vormen en het gebruik van als en dan.",
  overview:
    "Met de trappen van vergelijking druk je uit in welke **mate** een eigenschap aanwezig is. In deze **supercomplete, heldere les** ontdek je hoe je van de stellende trap (groot) de **vergrotende** (groter) en **overtreffende** (grootst) trap maakt. Je leert alle spellingregels: wanneer verdubbel je de medeklinker, wanneer verlies je een klinkerteken, en hoe zit het met f→v en s→z. Daarnaast krijg je de onregelmatige vormen (goed/beter/best) en leer je precies het verschil tussen **als** (bij gelijkheid) en **dan** (bij ongelijkheid). Met een overzichtstabel, PAS OP‑waarschuwingen en 7 ijzersterke oefenvragen gebruik jij de trappen van vergelijking voortaan foutloos.",
  anchorSectionId: "wat",
  exercises: [],
  timeExpressionsLabel: "Overzicht trappen en spelling 📊",
  timeExpressions: {
    header: "Trap | Uitgang | Voorbeeld",
    rows: [
      ["**Stellend**", "basisvorm", "groot, mooi, dik"],
      ["**Vergrotend**", "+er (of -der na r)", "groter, mooier, dikker, duurder"],
      ["**Overtreffend**", "+st", "grootst, mooist, dikst, duurst"],
    ],
  },
  details: [
    {
      title: "Wat zijn de trappen van vergelijking? 🎯",
      body: `
        <p>Met de trappen van vergelijking druk je uit in welke <strong>mate</strong> een eigenschap aanwezig is. Je hebt drie trappen:</p>
        <ol class="my-2 space-y-1.5 pl-5 list-decimal">
          <li><strong>Stellende trap</strong> (positief): de gewone vorm.</li>
          <li><strong>Vergrotende trap</strong> (comparatief): een hogere graad.</li>
          <li><strong>Overtreffende trap</strong> (superlatief): de hoogste graad.</li>
        </ol>
        <p>Voorbeelden: <strong>groot – groter – grootst</strong>; <strong>mooi – mooier – mooist</strong>.</p>
      `,
    },
    {
      title: "De stellende trap – de basis 🌱",
      body: `
        <p>De <strong>stellende trap</strong> is het bijvoeglijk naamwoord zelf, zoals je het in het woordenboek vindt.</p>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">Dat is een <strong>mooi</strong> schilderij.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">Mijn broer is <strong>groot</strong>.</li>
        </ul>
      `,
    },
    {
      title: "De vergrotende trap – +er of -der 🆙",
      body: `
        <h3 class="text-lg font-bold mt-4 mb-2">Hoofdregel: stellende trap + -er</h3>
        <p>De vergrotende trap maak je door <strong>-er</strong> achter de stellende trap te zetten.</p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Stellend</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Vergrotend</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">klein</td><td class="px-3 py-2 text-sm">klein<strong>er</strong></td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">mooi</td><td class="px-3 py-2 text-sm">mooi<strong>er</strong></td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">warm</td><td class="px-3 py-2 text-sm">warm<strong>er</strong></td></tr>
            </tbody>
          </table>
        </div>
        <h3 class="text-lg font-bold mt-6 mb-2">Spellingregels bij het toevoegen van -er</h3>
        <p><strong>Medeklinkerverdubbeling:</strong> korte klinker + één medeklinker → verdubbel de medeklinker.</p>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">dik → <strong>dikker</strong></li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">nat → <strong>natter</strong></li>
        </ul>
        <p><strong>Klinkerverlies:</strong> lange klinker (aa, ee, oo, uu) + medeklinker → één klinkerteken weglaten.</p>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">groot → <strong>groter</strong> (oo → o)</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">laag → <strong>lager</strong> (aa → a)</li>
        </ul>
        <p><strong>f → v, s → z:</strong> als de f of s tussen klinkers komt.</p>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">lief → <strong>liever</strong></li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">vies → <strong>viezer</strong></li>
        </ul>
        <h3 class="text-lg font-bold mt-6 mb-2">Uitzondering: woorden op -r → -der</h3>
        <p>Eindigt het bijvoeglijk naamwoord op een <strong>r</strong>? Dan gebruik je <strong>-der</strong> in plaats van -er.</p>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">duur → <strong>duurder</strong></li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">lekker → <strong>lekkerder</strong></li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">ver → <strong>verder</strong></li>
        </ul>
        <p><span class="pas-op-highlight">⚠️ PAS OP</span> Woorden die al op -er eindigen in de stellende trap (zoals <em>lekker</em>, <em>dapper</em>) krijgen dus <strong>-der</strong> in de vergrotende trap: <em>lekkerder</em>, <em>dapperder</em>.</p>
      `,
    },
    {
      title: "De overtreffende trap – +st 🏆",
      body: `
        <h3 class="text-lg font-bold mt-4 mb-2">Hoofdregel: stellende trap + -st</h3>
        <p>De overtreffende trap maak je door <strong>-st</strong> achter de stellende trap te zetten. Voor het zelfstandig naamwoord komt <strong>het</strong> of <strong>de</strong>.</p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Stellend</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Overtreffend</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">klein</td><td class="px-3 py-2 text-sm">klein<strong>st</strong></td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">mooi</td><td class="px-3 py-2 text-sm">mooi<strong>st</strong></td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">groot</td><td class="px-3 py-2 text-sm">groot<strong>st</strong></td></tr>
            </tbody>
          </table>
        </div>
        <p>Gebruik in een zin: <em>Dat is de <strong>kleinste</strong> auto. Hij is de <strong>grootste</strong> speler.</em></p>
        <h3 class="text-lg font-bold mt-6 mb-2">Spellingregels bij -st</h3>
        <p>Eindigt het bijvoeglijk naamwoord op een <strong>s</strong> of <strong>f</strong>, dan wordt de overtreffende trap <strong>-st</strong> zonder extra s. De f verandert niet in een v, want ze staat voor de -st.</p>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">vies → <strong>viest</strong></li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">lief → <strong>liefst</strong></li>
        </ul>
        <p>Als het bijvoeglijk naamwoord op een <strong>t</strong> eindigt, blijft de t staan en komt er -st achter: <strong>grootst</strong>, <strong>witst</strong>.</p>
        <p><span class="pas-op-highlight">⚠️ PAS OP</span> Als de overtreffende trap predicatief wordt gebruikt (na <em>zijn, worden, blijven</em>), komt er <strong>geen -e</strong>: <em>Deze man is het <strong>grootst</strong>.</em> Maar vóór een zelfstandig naamwoord wel: <em>de <strong>grootste</strong> man</em>.</p>
      `,
    },
    {
      title: "Onregelmatige vormen 🌟",
      body: `
        <p>Een paar veelvoorkomende bijvoeglijke naamwoorden hebben onregelmatige trappen van vergelijking. Deze moet je uit het hoofd leren.</p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Stellend</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Vergrotend</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Overtreffend</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">goed</td><td class="px-3 py-2 text-sm">beter</td><td class="px-3 py-2 text-sm">best</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">veel</td><td class="px-3 py-2 text-sm">meer</td><td class="px-3 py-2 text-sm">meest</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">weinig</td><td class="px-3 py-2 text-sm">minder</td><td class="px-3 py-2 text-sm">minst</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">graag (bijwoord)</td><td class="px-3 py-2 text-sm">liever</td><td class="px-3 py-2 text-sm">liefst</td></tr>
            </tbody>
          </table>
        </div>
      `,
    },
    {
      title: "Het gebruik van 'als' en 'dan' ⚖️",
      body: `
        <p>Bij een vergelijking gebruik je <strong>als</strong> en <strong>dan</strong> om de twee delen met elkaar te verbinden.</p>
        <h3 class="text-lg font-bold mt-4 mb-2">Gelijkheid: als (met de stellende trap)</h3>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">Mijn broer is even groot <strong>als</strong> ik.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">Dit boek is zo duur <strong>als</strong> dat boek.</li>
        </ul>
        <h3 class="text-lg font-bold mt-6 mb-2">Ongelijkheid: dan (met de vergrotende trap)</h3>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">Mijn broer is groter <strong>dan</strong> ik.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">Deze tas is duurder <strong>dan</strong> die.</li>
        </ul>
        <p><span class="pas-op-highlight">⚠️ PAS OP</span> Gebruik nooit <em>als</em> bij de vergrotende trap. <em>Groter als ik</em> is fout. Correct is <strong>groter dan ik</strong>.</p>
        <h3 class="text-lg font-bold mt-6 mb-2">Het voornaamwoord na 'als' of 'dan'</h3>
        <p>In verzorgd Nederlands gebruik je de <strong>onderwerpsvorm</strong> (<em>ik, jij, hij, zij</em>), niet de objectvorm (<em>mij, jou, hem, haar</em>).</p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Correct ✅</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Ongewenst ❌</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">groter <strong>dan ik</strong></td><td class="px-3 py-2 text-sm">groter <strong>dan mij</strong></td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">even slim <strong>als hij</strong></td><td class="px-3 py-2 text-sm">even slim <strong>als hem</strong></td></tr>
            </tbody>
          </table>
        </div>
      `,
    },
  ],
  rulesTable: [
    {
      rule: "Vergrotende trap: +er of -der na r",
      structure: "Zet **-er** achter de stellende trap. Bij woorden die op een r eindigen, gebruik je **-der**.",
      example: "klein → kleiner, duur → duurder",
      usage: "Let op spelling: korte klinker → medeklinker dubbel; lange klinker → één teken weglaten; f→v, s→z.",
    },
    {
      rule: "Overtreffende trap: +st",
      structure: "Zet **-st** achter de stellende trap. Vóór een zelfstandig naamwoord komt de of het + -e.",
      example: "klein → kleinst, groot → grootst",
      usage: "Eindigt het woord op s of f, dan geen extra s. Predicatief (na zijn): geen -e.",
    },
    {
      rule: "Onregelmatige trappen",
      structure: "Leer de aparte vormen van **goed**, **veel**, **weinig** en **graag** uit het hoofd.",
      example: "goed – beter – best; veel – meer – meest; weinig – minder – minst; graag – liever – liefst",
      usage: "Dit zijn uitzonderingen op de standaardregels.",
    },
    {
      rule: "Als (gelijkheid) vs. dan (ongelijkheid)",
      structure: "Gebruik **als** na de stellende trap bij gelijke vergelijking. Gebruik **dan** na de vergrotende trap bij ongelijke vergelijking.",
      example: "even groot als, groter dan",
      usage: "Na als en dan volgt de onderwerpsvorm van het persoonlijk voornaamwoord: dan ik, als hij.",
    },
  ],
  callouts: [
    { type: "remember", label: "Onthoud 1", text: "Vergrotend: **+er** (of **-der** na r). Overtreffend: **+st**." },
    { type: "remember", label: "Onthoud 2", text: "Korte klinker: verdubbel medeklinker (dik → dikker). Lange klinker: een teken weglaten (groot → groter)." },
    { type: "remember", label: "Onthoud 3", text: "f → v, s → z in de vergrotende trap (lief → liever, vies → viezer)." },
    { type: "remember", label: "Onthoud 4", text: "Onregelmatig: **goed – beter – best; veel – meer – meest**." },
    { type: "remember", label: "Onthoud 5", text: "Gelijkheid: **als** (even groot als). Ongelijkheid: **dan** (groter dan)." },
    { type: "remember", label: "Onthoud 6", text: "Na als/dan: **onderwerpsvorm** (dan ik, als hij)." },
  ],
  commonMistakes: [
    { incorrect: "groter als", correct: "groter dan", explanation: "Ongelijkheid → dan." },
    { incorrect: "even groot dan", correct: "even groot als", explanation: "Gelijkheid → als." },
    { incorrect: "groter dan mij", correct: "groter dan ik", explanation: "Onderwerpsvorm gebruiken." },
    { incorrect: "dikkerst (i.p.v. dikst)", correct: "dikst", explanation: "Overtreffende trap is +st, niet -erst." },
    { incorrect: "liefer (i.p.v. liever)", correct: "liever", explanation: "f wordt v in vergrotende trap." },
    { incorrect: "vieser (i.p.v. viezer)", correct: "viezer", explanation: "s wordt z in vergrotende trap." },
    { incorrect: "meer goed", correct: "beter", explanation: "Goed is onregelmatig." },
  ],
  review: [
    "Stellend: gewone vorm (groot, mooi).",
    "Vergrotend: +er of -der na r; spelling: klinkerverandering, medeklinkerverdubbeling, f→v, s→z.",
    "Overtreffend: +st; let op woorden op -s en -f (geen extra s, f blijft).",
    "Onregelmatig: goed – beter – best; veel – meer – meest; weinig – minder – minst; graag – liever – liefst.",
    "Als: bij gelijkheid (even groot als). Dan: bij ongelijkheid (groter dan).",
    "Na als en dan: onderwerpsvorm van het voornaamwoord (dan ik, als hij).",
  ],
  qa: [
    {
      question: "Geef de vergrotende en overtreffende trap van het bijvoeglijk naamwoord **lief**. Leg de spelling uit.",
      answer: "**Liever** en **liefst**. In de vergrotende trap verandert de **f** in een **v** omdat hij tussen twee klinkers komt te staan: *lief* → *liev-er*. In de overtreffende trap blijft de **f** staan, want die staat voor de **-st** en niet tussen klinkers: *liefst*.",
    },
    {
      question: "Waarom schrijf je **dikker** met dubbel k en niet *diker*?",
      answer: "Het bijvoeglijk naamwoord **dik** heeft een korte **i** gevolgd door één medeklinker **k**. Om de korte klinker in de vergrotende trap kort te houden, moet je de medeklinker verdubbelen: **dikker**.",
    },
    {
      question: "Vul het juiste woord in: “Mijn fiets is even snel ___ die van jou.” Kies uit *als* of *dan* en leg uit waarom.",
      answer: "**als**. Omdat er *even snel* staat, is er sprake van gelijkheid. Bij gelijkheid gebruik je **als**, niet *dan*.",
    },
    {
      question: "Geef de juiste vorm van het voornaamwoord: “Zij is ouder dan ___ (ik/mij).” Leg de regel uit.",
      answer: "**dan ik**. Na *dan* (en *als*) volgt de **onderwerpsvorm** van het persoonlijk voornaamwoord, omdat het een verkorte bijzin is: *ouder dan ik (ben)*. *Dan mij* is informeel en niet standaard.",
    },
    {
      question: "Wat zijn de drie trappen van **goed**? Waarom is dit onregelmatig?",
      answer: "**goed – beter – best**. Dit is onregelmatig omdat het niet met *-er* en *-st* wordt gevormd. De woorden *beter* en *best* stammen van een andere oude stam. Je moet deze aparte vormen uit het hoofd leren.",
    },
    {
      question: "Maak een zin waarin je **minder** gebruikt, en leg uit van welk bijvoeglijk naamwoord dit de vergrotende trap is.",
      answer: "*Vandaag heb ik **minder** tijd dan gisteren.* **Minder** is de vergrotende trap van het onregelmatige bijvoeglijk naamwoord **weinig**.",
    },
    {
      question: "Corrigeer de fout: “Dit boek is meer goed dan dat boek.”",
      answer: "**Dit boek is beter dan dat boek.** *Meer goed* is fout, want *goed* is onregelmatig. De juiste vergrotende trap is **beter**.",
    },
  ],
};