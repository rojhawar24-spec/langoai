import type { GrammarLesson } from "../../types";

export const hoofdtelwoorden: GrammarLesson = {
  id: "nl-hoofdtelwoorden-1",
  title: "Hoofdtelwoorden: één, twee, drie en verder...",
  level: 1,
  topic: "Hoofdtelwoorden", // [V] Vocabulaire
  body: "Leer de Nederlandse hoofdtelwoorden van 1 tot en met een miljoen. Met duidelijke spellingregels, ezelsbruggetjes en alle valkuilen.",
  overview:
    "Hoofdtelwoorden zijn de **gewone getallen**. Ze vertellen je **hoeveel** er van iets is. In deze **complete, superslimme les** leer je de getallen van 1 tot 20, de tientallen, honderden en duizenden, en hoe je samengestelde getallen bouwt. Je ontdekt het belangrijke verschil tussen **één** en **een**, de trema-regel bij *tweeëntwintig*, en de gouden regel voor enkelvoud en meervoud na telwoorden. Met heldere tabellen, duidelijke voorbeelden en 7 ijzersterke oefenvragen wordt het foutloos getallen schrijven.",
  anchorSectionId: "basis",
  exercises: [],
  timeExpressionsLabel: "Getallen van 1 tot 20 🧮",
  timeExpressions: {
    header: "Getal | Spelling | Belangrijk",
    rows: [
      ["1", "**één**", "Met accenten als getal (niet als lidwoord)."],
      ["2", "**twee**", "Met **w**."],
      ["3", "**drie**", ""],
      ["4", "**vier**", ""],
      ["5", "**vijf**", "Begint met een **v**, niet met een **f**!"],
      ["6", "**zes**", "Begint met een **z**, niet met een **s**!"],
      ["7", "**zeven**", ""],
      ["8", "**acht**", "Eindigt op **cht**."],
      ["9", "**negen**", ""],
      ["10", "**tien**", ""],
      ["11", "**elf**", ""],
      ["12", "**twaalf**", "Met een **w** en **aa**."],
      ["13", "**dertien**", "Korte **e**, geen dubbele letters."],
      ["14", "**veertien**", "Lange **ee**, één e."],
      ["15", "**vijftien**", "**v**, dan **ij**, dan **f**."],
      ["16", "**zestien**", "Met een **z**."],
      ["17", "**zeventien**", ""],
      ["18", "**achttien**", "**Dubbel t**: acht + tien = achttien."],
      ["19", "**negentien**", ""],
      ["20", "**twintig**", "Eindigt op **-tig**."],
    ],
  },
  details: [
    {
      title: "Tientallen, honderden en duizenden 📊",
      body: `
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Getal</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Spelling</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Belangrijk</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">20</td><td class="px-3 py-2 text-sm">twintig</td><td class="px-3 py-2 text-sm">Basis voor samenstellingen.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">30</td><td class="px-3 py-2 text-sm">dertig</td><td class="px-3 py-2 text-sm"></td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">40</td><td class="px-3 py-2 text-sm">veertig</td><td class="px-3 py-2 text-sm">Eén <strong>e</strong>, lange ee.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">50</td><td class="px-3 py-2 text-sm">vijftig</td><td class="px-3 py-2 text-sm"><strong>v</strong>, <strong>ij</strong>, <strong>f</strong>, <strong>tig</strong>.</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">60</td><td class="px-3 py-2 text-sm">zestig</td><td class="px-3 py-2 text-sm">Met een <strong>z</strong>.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">70</td><td class="px-3 py-2 text-sm">zeventig</td><td class="px-3 py-2 text-sm"></td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">80</td><td class="px-3 py-2 text-sm">tachtig</td><td class="px-3 py-2 text-sm">Geen "achtig", maar <strong>tachtig</strong>.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">90</td><td class="px-3 py-2 text-sm">negentig</td><td class="px-3 py-2 text-sm"></td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">100</td><td class="px-3 py-2 text-sm">honderd</td><td class="px-3 py-2 text-sm">Schrijf altijd de <strong>d</strong> aan het eind.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">1.000</td><td class="px-3 py-2 text-sm">duizend</td><td class="px-3 py-2 text-sm"></td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">1.000.000</td><td class="px-3 py-2 text-sm">miljoen</td><td class="px-3 py-2 text-sm"></td></tr>
            </tbody>
          </table>
        </div>
      `,
    },
    {
      title: "Samengestelde getallen – hoe bouw je ze op? 🏗️",
      body: `
        <p>In het Nederlands zeggen we de <strong>eenheid vóór het tiental</strong>, met het woordje <strong>en</strong> ertussen. Dit is anders dan in veel andere talen.</p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Getal</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Spelling</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Regel</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">21</td><td class="px-3 py-2 text-sm">eenentwintig</td><td class="px-3 py-2 text-sm">Eén + en + twintig – geen trema nodig.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">22</td><td class="px-3 py-2 text-sm">tweeëntwintig</td><td class="px-3 py-2 text-sm">Wél een <strong>trema</strong> op de e van 'en'.</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">23</td><td class="px-3 py-2 text-sm">drieëntwintig</td><td class="px-3 py-2 text-sm">Ook een <strong>trema</strong>.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">45</td><td class="px-3 py-2 text-sm">vijfenveertig</td><td class="px-3 py-2 text-sm"></td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">78</td><td class="px-3 py-2 text-sm">achtenzeventig</td><td class="px-3 py-2 text-sm"></td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">99</td><td class="px-3 py-2 text-sm">negenennegentig</td><td class="px-3 py-2 text-sm"></td></tr>
            </tbody>
          </table>
        </div>
        <p>🧠 <strong>Trema-regel:</strong> Als een woord eindigt op een klinker en het volgende deel begint met dezelfde klinker, schrijf je een trema op de eerste klinker van het tweede deel. <em>Twee</em> eindigt op <strong>ee</strong>, <em>en</em> begint met <strong>e</strong> → <strong>tweeëntwintig</strong>. Het trema geeft aan dat de e apart wordt uitgesproken.</p>
      `,
    },
    {
      title: "Honderdtallen en grotere getallen 🌐",
      body: `
        <p>Getallen boven de honderd schrijf je in het Nederlands <strong>aan elkaar</strong>, zolang het geen al te lange woorden worden. Vanaf duizend mag je een spatie zetten.</p>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">101 → <strong>honderdeen</strong> (of honderdeneen)</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">256 → <strong>tweehonderdzesenvijftig</strong></li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">1.234 → <strong>twaalfhonderdvierendertig</strong> of <strong>duizend tweehonderdvierendertig</strong></li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">2.024 → <strong>tweeduizend vierentwintig</strong> (spatie mag)</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">100.000 → <strong>honderdduizend</strong></li>
        </ul>
        <p>💡 <strong>Ezelsbrug:</strong> Tot en met duizend plak je alles aan elkaar. Boven duizend mag je een spatie gebruiken voor de leesbaarheid.</p>
      `,
    },
    {
      title: "Één vs. een – de gouden regel 🌟",
      body: `
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Vorm</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Betekenis</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Voorbeeld</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm"><strong>een</strong></td><td class="px-3 py-2 text-sm">Lidwoord (a/an)</td><td class="px-3 py-2 text-sm">Ik heb <strong>een</strong> boek.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm"><strong>één</strong></td><td class="px-3 py-2 text-sm">Telwoord (1)</td><td class="px-3 py-2 text-sm">Ik heb <strong>één</strong> boek, niet twee.</td></tr>
            </tbody>
          </table>
        </div>
        <p>Accenten schrijf je alleen als je het getal bedoelt en verwarring met het lidwoord mogelijk is. In zinnen waar het duidelijk over een aantal gaat, mag je de accenten soms weglaten, maar de veiligste regel is: gebruik altijd de accenten als je het getal bedoelt.</p>
      `,
    },
    {
      title: "Gebruik met zelfstandige naamwoorden – enkelvoud of meervoud? 📚",
      body: `
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">Na <strong>één</strong> komt het <strong>enkelvoud</strong>: <em>één kind, één boek, één euro</em>.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">Na alle andere telwoorden komt het <strong>meervoud</strong>: <em>twee kinderen, drie boeken, tien euro</em>.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">Ook na <strong>nul</strong> komt het <strong>meervoud</strong>: <em>nul graden, nul fouten</em>.</li>
        </ul>
        <p><span class="pas-op-highlight">⚠️ PAS OP</span> Woorden als <em>euro</em> en <em>jaar</em> blijven na een telwoord vaak onveranderd: <em>tien euro</em>, <em>vijf jaar</em>. Maar <em>kind</em> wordt <em>kinderen</em>, <em>boek</em> wordt <em>boeken</em>, dus dat hangt van het woord af.</p>
      `,
    },
  ],
  rulesTable: [
    {
      rule: "Trema bij klinkerbotsing",
      structure: "Als het eerste deel op ee eindigt (twee, mee) en 'en' volgt, schrijf je een trema op de e van 'en': **tweeëntwintig**.",
      example: "tweeëntwintig, drieëntwintig, zeeëgel",
      usage: "Het trema voorkomt dat de twee klinkers samensmelten.",
    },
    {
      rule: "Acht + tien = achttien (dubbele t)",
      structure: "Als het grondwoord (acht) al op een t eindigt en 'tien' begint met een t, schrijf je beide t's: **achttien**.",
      example: "achttien, achttienhonderd",
      usage: "Ook bij 'ontt' woorden gebeurt dit, maar bij getallen is het prominent.",
    },
    {
      rule: "Één (getal) vs. een (lidwoord)",
      structure: "Gebruik de accenten **één** alleen als je het getal bedoelt en verwarring met het lidwoord mogelijk is.",
      example: "Ik heb **één** euro (getal) – Ik heb **een** euro (lidwoord).",
      usage: "Zonder accenten is het vaak onduidelijk of je '1' of 'een' bedoelt.",
    },
    {
      rule: "Meervoud na telwoorden (behalve één)",
      structure: "Na **één** komt enkelvoud, na alle andere telwoorden (ook nul) komt meervoud.",
      example: "één appel – twee appels – nul appels",
      usage: "Let op: sommige zelfstandige naamwoorden hebben een onregelmatig meervoud.",
    },
    {
      rule: "Getallen tot en met duizend aan elkaar schrijven",
      structure: "Tot en met 999 schrijf je het getal als één woord. Vanaf 1000 mag je spaties gebruiken voor de leesbaarheid.",
      example: "honderddrieëntwintig (123) – tweeduizend vierentwintig (2024)",
      usage: "De spaties zijn niet verplicht, maar worden aangeraden bij langere getallen.",
    },
  ],
  callouts: [
    { type: "remember", label: "Onthoud 1", text: "1 = **één** (accenten), 5 = **vijf** (v), 6 = **zes** (z)." },
    { type: "remember", label: "Onthoud 2", text: "18 = **achttien** (dubbele t), 22 = **tweeëntwintig** (trema)." },
    { type: "remember", label: "Onthoud 3", text: "Na **één** volgt enkelvoud, na andere telwoorden meervoud." },
    { type: "remember", label: "Onthoud 4", text: "**Honderd** schrijf je met een d, **tachtig** zonder -en-." },
  ],
  commonMistakes: [
    { incorrect: "tweeentwintig", correct: "tweeëntwintig", explanation: "Trema verplicht vanwege klinkerbotsing." },
    { incorrect: "achtien", correct: "achttien", explanation: "Acht + tien = dubbele t." },
    { incorrect: "vijf (als fijf)", correct: "vijf", explanation: "Begint met een v, niet met een f." },
    { incorrect: "zes (als ses)", correct: "zes", explanation: "Begint met een z, niet met een s." },
    { incorrect: "tachtentig", correct: "tachtig", explanation: "Het is tachtig, zonder -en-." },
    { incorrect: "Ik heb een boek. (getal bedoeld)", correct: "Ik heb één boek.", explanation: "Met accenten als getal." },
    { incorrect: "Ik heb twee boek.", correct: "Ik heb twee boeken.", explanation: "Na twee komt het meervoud." },
  ],
  review: [
    "1 = **één** (accenten), 5 = **vijf** (v), 6 = **zes** (z).",
    "14 = **veertien** (één e), 18 = **achttien** (dubbele t).",
    "22 = **tweeëntwintig** (trema), 50 = **vijftig** (v-ij-f-tig).",
    "80 = **tachtig** (geen -en-), 100 = **honderd** (met d).",
    "123 = **honderddrieëntwintig** (aan elkaar).",
    "Na één: enkelvoud. Na andere getallen: meervoud.",
  ],
  qa: [
    {
      question: "Waarom schrijf je \"één\" met accenten en \"een\" zonder?",
      answer: "**Een** is het lidwoord (een boek). **Één** is het getal 1. De accenten gebruik je om verwarring te voorkomen. Dus: *Ik heb één boek* (niet twee), maar *Ik heb een boek* (zomaar een boek).",
    },
    {
      question: "Leg uit waarom “achttien” met twee t's wordt geschreven.",
      answer: "**Achttien** is opgebouwd uit *acht* + *tien*. De t van *acht* en de t van *tien* komen allebei in het woord, dus schrijf je twee t's: achttien.",
    },
    {
      question: "Waarom moet “tweeëntwintig” een trema hebben?",
      answer: "Omdat het woorddeel *twee* eindigt op **ee** en het volgende deel *en* begint met een **e**. Zonder trema zouden die klanken samensmelten. Het trema op de e van *en* geeft aan dat die apart wordt uitgesproken.",
    },
    {
      question: "Waarom is “Ik heb twee boek” fout?",
      answer: "Na het telwoord *twee* moet het zelfstandig naamwoord in het **meervoud**. Correct is: **Ik heb twee boeken.** Alleen na *één* blijft het enkelvoud.",
    },
    {
      question: "Wat is het verschil tussen “vijftig” en “fijftig”? (spellingstrik)",
      answer: "Er is maar één correcte spelling: **vijftig**. De valkuil is dat mensen 'fiftig' schrijven of de v vergeten. Onthoud: het begint met een v, dan ij, dan f, dan tig.",
    },
    {
      question: "Schrijf het getal 101 voluit in letters.",
      answer: "**Honderdeen** (of *honderdeneen*). Aan elkaar geschreven, want het is onder de duizend.",
    },
    {
      question: "Na welk telwoord blijft het zelfstandig naamwoord in het enkelvoud staan?",
      answer: "Alleen na **één** blijft het enkelvoud: *één appel*. Na alle andere telwoorden (nul, twee, drie, honderd, etc.) komt het meervoud.",
    },
  ],
};