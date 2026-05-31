import type { GrammarLesson } from "../../types";

export const rangtelwoorden: GrammarLesson = {
  id: "nl-rangtelwoorden-1",
  title: "Rangtelwoorden: eerste, tweede, derde en verder...",
  level: 1,
  topic: "Rangtelwoorden", // [V] Vocabulaire
  body: "Leer hoe je rangtelwoorden maakt en gebruikt. Van eerste tot honderdste, met duidelijke regels en handige ezelsbruggetjes.",
  overview:
    "Een rangtelwoord geeft een **volgorde** of **plaats in een rij** aan. In deze **complete, superslimme les** ontdek je hoe je van hoofdtelwoorden een rangtelwoord maakt met de uitgangen **-de** en **-ste**. Je leert de belangrijke onregelmatige vormen (eerste, derde, achtste), hoe je samengestelde rangtelwoorden bouwt, hoe je ze met cijfers schrijft, en welke regels er gelden voor lidwoorden. Met overzichtelijke tabellen, de beruchte valkuilen en 7 ijzersterke oefenvragen schrijf je ieder rangtelwoord foutloos.",
  anchorSectionId: "overzicht",
  exercises: [],
  timeExpressionsLabel: "Overzicht rangtelwoorden 1 tot 20 🥇",
  timeExpressions: {
    header: "Getal | Hoofdtelwoord | Rangtelwoord | Opmerking",
    rows: [
      ["1", "één", "**eerste**", "Onregelmatig!"],
      ["2", "twee", "**tweede**", "twee + de"],
      ["3", "drie", "**derde**", "Onregelmatig! (niet 'driede')"],
      ["4", "vier", "**vierde**", ""],
      ["5", "vijf", "**vijfde**", "Geen extra e"],
      ["6", "zes", "**zesde**", ""],
      ["7", "zeven", "**zevende**", ""],
      ["8", "acht", "**achtste**", "Uitgang **-ste**, niet -de!"],
      ["9", "negen", "**negende**", ""],
      ["10", "tien", "**tiende**", ""],
      ["11", "elf", "**elfde**", ""],
      ["12", "twaalf", "**twaalfde**", ""],
      ["13", "dertien", "**dertiende**", ""],
      ["14", "veertien", "**veertiende**", ""],
      ["15", "vijftien", "**vijftiende**", ""],
      ["16", "zestien", "**zestiende**", ""],
      ["17", "zeventien", "**zeventiende**", ""],
      ["18", "achttien", "**achttiende**", "Dubbel t blijft!"],
      ["19", "negentien", "**negentiende**", ""],
      ["20", "twintig", "**twintigste**", "Uitgang **-ste**"],
    ],
  },
  details: [
    {
      title: "De hoofdregel – uitgangen -de en -ste 🏗️",
      body: `
        <p>Je maakt een rangtelwoord door aan het hoofdtelwoord een uitgang te plakken. Er zijn twee uitgangen: <strong>-de</strong> en <strong>-ste</strong>.</p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Uitgang</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Wanneer?</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Voorbeelden</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm"><strong>-de</strong></td><td class="px-3 py-2 text-sm">Bij bijna alle getallen. Ook bij -tien (behalve bij tien zelf).</td><td class="px-3 py-2 text-sm">tweede, vierde, vijfde, tiende, twaalfde, dertiende, veertiende</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm"><strong>-ste</strong></td><td class="px-3 py-2 text-sm">Na <strong>acht</strong> (8), na de <strong>tientallen</strong> (20, 30...), na <strong>honderd</strong>, <strong>duizend</strong>, <strong>miljoen</strong>, en bij het woord <strong>laatste</strong>.</td><td class="px-3 py-2 text-sm">achtste, twintigste, dertigste, honderdste, duizendste</td></tr>
            </tbody>
          </table>
        </div>
        <p><span class="pas-op-highlight">⚠️ PAS OP</span> Belangrijke uitzonderingen: 1 → <strong>eerste</strong> (niet "eende" of "eenste"), 3 → <strong>derde</strong> (niet "driede"), 8 → <strong>achtste</strong> (niet "achtde").</p>
      `,
    },
    {
      title: "Samengestelde rangtelwoorden 🧩",
      body: `
        <p>Bij getallen boven de 20 verandert alleen het <strong>laatste deel</strong> in een rangtelwoord. Het voorste deel blijft een hoofdtelwoord.</p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Getal</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Samengesteld rangtelwoord</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Regel</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">21</td><td class="px-3 py-2 text-sm"><strong>eenentwintigste</strong></td><td class="px-3 py-2 text-sm">21 = eenentwintig → twintigste</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">22</td><td class="px-3 py-2 text-sm"><strong>tweeëntwintigste</strong></td><td class="px-3 py-2 text-sm">Trema blijft staan!</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">33</td><td class="px-3 py-2 text-sm"><strong>drieëndertigste</strong></td><td class="px-3 py-2 text-sm"></td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">57</td><td class="px-3 py-2 text-sm"><strong>zevenenvijftigste</strong></td><td class="px-3 py-2 text-sm"></td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">99</td><td class="px-3 py-2 text-sm"><strong>negenennegentigste</strong></td><td class="px-3 py-2 text-sm"></td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">100</td><td class="px-3 py-2 text-sm"><strong>honderdste</strong></td><td class="px-3 py-2 text-sm"></td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">101</td><td class="px-3 py-2 text-sm"><strong>honderdeerste</strong></td><td class="px-3 py-2 text-sm">Alleen "één" verandert in "eerste"</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">123</td><td class="px-3 py-2 text-sm"><strong>honderddrieëntwintigste</strong></td><td class="px-3 py-2 text-sm">Trema blijft ook hier staan</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">1000</td><td class="px-3 py-2 text-sm"><strong>duizendste</strong></td><td class="px-3 py-2 text-sm"></td></tr>
            </tbody>
          </table>
        </div>
        <p>💡 <strong>Onthoud:</strong> Alleen het <strong>allerlaatste getal</strong> in de reeks krijgt de rangtelwoordvorm. Daarvóór blijven de hoofdtelwoorden onveranderd.</p>
      `,
    },
    {
      title: "Schrijfwijze met cijfers 🔢",
      body: `
        <p>Je kunt rangtelwoorden ook met cijfers schrijven. Dan zet je de uitgang achter het cijfer.</p>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">1 → <strong>1e</strong> (spreek uit: eerste)</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">2 → <strong>2e</strong>, 3 → <strong>3e</strong>, 4 → <strong>4e</strong></li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">8 → <strong>8ste</strong> (officieel, niet 8e)</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">20 → <strong>20ste</strong>, 21 → <strong>21ste</strong>, 100 → <strong>100ste</strong></li>
        </ul>
        <p><span class="pas-op-highlight">⚠️ PAS OP</span> Bij 1, 2, 3, 4, 5, 6, 7, 9, 10, etc. schrijf je <strong>-e</strong>. Bij 8 en bij tientallen, honderdtallen, enz. schrijf je <strong>-ste</strong>. De uitspraak van 1e is "eerste", van 3e "derde".</p>
      `,
    },
    {
      title: "Gebruik van rangtelwoorden – belangrijke regels 📚",
      body: `
        <h3 class="text-lg font-bold mt-4 mb-2">Lidwoorden bij rangtelwoorden</h3>
        <p>Rangtelwoorden krijgen bijna altijd <strong>hetzelfde lidwoord</strong> als het zelfstandig naamwoord. Bij het-woorden blijft het lidwoord dus <strong>het</strong>.</p>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>Het eerste huis</strong> (niet "de eerste huis")</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>De tweede auto</strong></li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>Het derde kind</strong></li>
        </ul>
        <h3 class="text-lg font-bold mt-6 mb-2">Datums</h3>
        <p>In data gebruiken we rangtelwoorden, maar we schrijven vaak alleen het getal.</p>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">1 mei = <strong>de eerste mei</strong> (schrijven als "1 mei")</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">5 december = <strong>de vijfde december</strong></li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">31 augustus = <strong>de eenendertigste augustus</strong></li>
        </ul>
        <h3 class="text-lg font-bold mt-6 mb-2">Koningen, pausen en eeuwen</h3>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">Koning Willem de <strong>Eerste</strong> (Willem I)</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">Paus Johannes de <strong>Drieëntwintigste</strong> (Johannes XXIII)</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">De <strong>twintigste</strong> eeuw (1900-1999)</li>
        </ul>
      `,
    },
  ],
  rulesTable: [
    {
      rule: "Uitgang -de of -ste",
      structure: "Hoofdtelwoord + <strong>-de</strong> (meestal) of + <strong>-ste</strong> (na acht, tientallen, honderd, duizend).",
      example: "twee → <strong>tweede</strong>, tien → <strong>tiende</strong>, acht → <strong>achtste</strong>, twintig → <strong>twintigste</strong>.",
      usage: "Leer de uitzonderingen: eerste (1), derde (3), achtste (8) met -ste.",
    },
    {
      rule: "Samengestelde rangtelwoorden: alleen laatste deel verandert",
      structure: "Bij getallen boven de 20 krijgt alleen het laatste deel de rangtelwoordvorm. Het eerste deel blijft hoofdtelwoord.",
      example: "21 → <strong>eenentwintigste</strong>, 123 → <strong>honderddrieëntwintigste</strong>.",
      usage: "Let op de trema's in woorden als tweeëntwintigste, drieëntwintigste.",
    },
    {
      rule: "Schrijfwijze met cijfers: -e of -ste achter het cijfer",
      structure: "Gebruik <strong>-e</strong> voor 1 t/m 7, 9, 10... (behalve 8). Gebruik <strong>-ste</strong> voor 8, tientallen, honderdtallen, duizendtallen.",
      example: "1e, 2e, 3e, 8ste, 20ste, 100ste.",
      usage: "De uitspraak van '1e' is 'eerste', van '3e' is 'derde'.",
    },
    {
      rule: "Lidwoord blijft hetzelfde als bij het zelfstandig naamwoord",
      structure: "Het rangtelwoord verandert het lidwoord niet. Bij een het-woord blijft 'het', bij een de-woord blijft 'de'.",
      example: "<strong>Het</strong> eerste boek, <strong>de</strong> tweede auto.",
      usage: "Fout is 'de eerste boek' of 'het eerste auto'.",
    },
  ],
  callouts: [
    { type: "remember", label: "Onthoud 1", text: "1 = **eerste**, 3 = **derde**, 8 = **achtste** – de onregelmatige uitzonderingen." },
    { type: "remember", label: "Onthoud 2", text: "Uitgang **-ste** bij 8, tientallen, honderd, duizend en 'laatste'." },
    { type: "remember", label: "Onthoud 3", text: "Samengesteld: alleen laatste deel rangtelwoord – *eenentwintigste*, *honderddrieëntwintigste*." },
    { type: "remember", label: "Onthoud 4", text: "Lidwoord blijft hetzelfde: *het eerste huis*, *de tweede auto*." },
  ],
  commonMistakes: [
    { incorrect: "driede", correct: "derde", explanation: "3 is onregelmatig: derde." },
    { incorrect: "eende / eenste", correct: "eerste", explanation: "1 is onregelmatig: eerste." },
    { incorrect: "achtde", correct: "achtste", explanation: "8 krijgt uitgang -ste." },
    { incorrect: "drieëntwintigde", correct: "drieëntwintigste", explanation: "Het laatste deel (twintig) krijgt -ste." },
    { incorrect: "de eerste boek", correct: "het eerste boek", explanation: "Lidwoord blijft 'het'." },
    { incorrect: "1ste (voor 'eerste')", correct: "1e", explanation: "Je schrijft 1e, niet 1ste." },
    { incorrect: "8e (officieel is 8ste)", correct: "8ste", explanation: "Gebruik -ste bij 8." },
  ],
  review: [
    "Regel: hoofdtelwoord + <strong>-de</strong> (bijna altijd) of + <strong>-ste</strong> (bij 8, 20, 30, 40..., 100, 1000, en 'laatste').",
    "Onregelmatig: eerste (1), derde (3).",
    "Samengesteld: alleen het laatste deel wordt rangtelwoord.",
    "Cijfers: 1e, 2e, 3e, 8ste, 20ste, 21ste.",
    "Lidwoord: blijft hetzelfde als bij het zelfstandig naamwoord (de/het).",
    "Datums: je zegt 'de eerste mei', schrijft '1 mei'.",
  ],
  qa: [
    {
      question: "Waarom is 'driede' fout en wat moet het zijn?",
      answer: "Het rangtelwoord van 3 is <strong>derde</strong>, niet 'driede'. Dit is een onregelmatige vorm die je uit je hoofd moet leren.",
    },
    {
      question: "Wat is de regel voor de uitgang -ste bij rangtelwoorden? Geef drie voorbeelden.",
      answer: "De uitgang <strong>-ste</strong> gebruik je bij <strong>8</strong> (achtste), bij de <strong>tientallen</strong> (20ste, 30ste, enz.), en bij <strong>100</strong>, <strong>1000</strong>, en het woord <strong>laatste</strong>. Voorbeelden: <em>achtste, twintigste, honderdste</em>.",
    },
    {
      question: "Schrijf het getal 21 als rangtelwoord voluit in letters.",
      answer: "<strong>Eenentwintigste</strong>. Alleen het laatste deel 'twintig' verandert in de rangtelwoordvorm met -ste.",
    },
    {
      question: "Hoe schrijf je 'eerste' met een cijfer?",
      answer: "<strong>1e</strong>. De e geeft de uitgang aan; de uitspraak is 'eerste'. Je schrijft niet '1ste' want dat is voor 1 niet juist.",
    },
    {
      question: "Waarom is 'De eerste huis' fout?",
      answer: "'Huis' is een het-woord, dus het lidwoord blijft <strong>het</strong>. Correct is: <strong>Het eerste huis</strong>. Het rangtelwoord verandert het lidwoord niet.",
    },
    {
      question: "Je zegt 'de vijfde december'. Hoe schrijf je dat meestal op een uitnodiging?",
      answer: "<strong>5 december</strong>. Je schrijft het hoofdtelwoord, maar je spreekt het rangtelwoord uit: 'de vijfde december'.",
    },
    {
      question: "Wat is het rangtelwoord van 8? Leg uit waarom het geen 'achtde' is.",
      answer: "Het is <strong>achtste</strong>. Het getal 8 gebruikt de uitgang <strong>-ste</strong> in plaats van -de. Dit is een uitzondering op de regel dat de meeste getallen -de krijgen.",
    },
  ],
};