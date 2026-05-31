import type { GrammarLesson } from "../../types";

export const aanwijzendeVoornaamwoorden: GrammarLesson = {
  id: "nl-aanwijzendeVoornaamwoorden-1",
  title: "Aanwijzende Voornaamwoorden: deze/die & dit/dat",
  level: 1,
  topic: "Aanwijzende voornaamwoorden", // [G] Grammatica
  body: "Leer hoe je dingen aanwijst in het Nederlands. Wanneer gebruik je deze, die, dit of dat? Met heldere regels, perfecte uitspraak en talloze voorbeelden.",
  overview:
    "Een aanwijzend voornaamwoord **wijst iets aan**. In deze **perfecte, superslimme les** ontdek je het verschil tussen **deze/die** (bij de-woorden en meervoud) en **dit/dat** (bij het-woorden). Je leert de exacte uitspraak van elk woord, hoe je ze zelfstandig gebruikt, en wat de subtiele nuances zijn in vaste uitdrukkingen. Met een speciale waarschuwing voor het verschil met betrekkelijke voornaamwoorden, een lijst met beruchte valkuilen en 7 ijzersterke oefenvragen beheers je de aanwijzende voornaamwoorden volledig.",
  anchorSectionId: "hoofdregel",
  exercises: [],
  timeExpressionsLabel: "De ijzersterke hoofdregel 🧾",
  timeExpressions: {
    header: "Soort zelfstandig naamwoord | Dichtbij (hier) | Ver weg (daar)",
    rows: [
      ["**de-woord** (mannelijk / vrouwelijk)", "**deze**", "**die**"],
      ["**het-woord** (onzijdig)", "**dit**", "**dat**"],
      ["**meervoud** (alles, ook het-woorden)", "**deze**", "**die**"],
    ],
  },
  details: [
    {
      title: "Wat zijn aanwijzende voornaamwoorden en wanneer gebruik je ze? 🎯",
      body: `
        <p>Een aanwijzend voornaamwoord <strong>wijst iets aan</strong>. Je gebruikt het om precies te zeggen welk ding, welke persoon of welke zaak je bedoelt. In het Nederlands koppelen we dat aan <strong>afstand</strong> (dichtbij of veraf) en aan het <strong>grammaticaal geslacht</strong> (de-woord of het-woord). De vier basiswoorden zijn:</p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Dichtbij</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Ver weg</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm"><strong>deze</strong></td><td class="px-3 py-2 text-sm"><strong>die</strong></td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm"><strong>dit</strong></td><td class="px-3 py-2 text-sm"><strong>dat</strong></td></tr>
            </tbody>
          </table>
        </div>
      `,
    },
    {
      title: "Uitspraak – zo klink je als een native 🎤",
      body: `
        <p>De juiste uitspraak is essentieel, want een klein verschil kan verwarring geven. Hier de perfecte gids:</p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Woord</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Fonetisch</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Hoe klinkt het?</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Oefenwoorden</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm"><strong>deze</strong></td><td class="px-3 py-2 text-sm">/ˈdeːzə/</td><td class="px-3 py-2 text-sm">Lange <strong>ee</strong> (zoals in <em>zee</em>), zoemende <strong>z</strong>, stomme e ("uh") → "dee-zuh"</td><td class="px-3 py-2 text-sm">zee, mee, twee</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm"><strong>die</strong></td><td class="px-3 py-2 text-sm">/di/</td><td class="px-3 py-2 text-sm">Lange <strong>ie</strong> (zoals in <em>zien</em>, <em>lief</em>). Zuiver.</td><td class="px-3 py-2 text-sm">zien, niet, lief</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm"><strong>dit</strong></td><td class="px-3 py-2 text-sm">/dɪt/</td><td class="px-3 py-2 text-sm">Korte, scherpe <strong>i</strong> (zoals in <em>kip</em>, <em>vis</em>). <strong>t</strong> is hard.</td><td class="px-3 py-2 text-sm">kip, vis, zit</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm"><strong>dat</strong></td><td class="px-3 py-2 text-sm">/dɑt/</td><td class="px-3 py-2 text-sm">Korte, donkere <strong>a</strong> (zoals in <em>kat</em>, <em>das</em>). <strong>t</strong> is hard.</td><td class="px-3 py-2 text-sm">kat, das, bak</td></tr>
            </tbody>
          </table>
        </div>
        <p><span class="pas-op-highlight">⚠️ PAS OP</span> Het verschil tussen <strong>dit</strong> en <strong>dat</strong> is lastig: <strong>dit</strong> heeft een hoge, korte i (tong hoog); <strong>dat</strong> heeft een lage, open a (tong laag). Oefen met <em>kip</em> versus <em>kat</em>.</p>
        <p><span class="pas-op-highlight">⚠️ PAS OP</span> De <strong>z</strong> in <strong>deze</strong> is een Nederlandse zachte z (zoemend, zoals in <em>zee</em>). Maak er geen harde s van ("deese").</p>
      `,
    },
    {
      title: "Uitgebreide voorbeelden – voor elk type woord 📚",
      body: `
        <h3 class="text-lg font-bold mt-4 mb-2">De-woorden (mannelijk / vrouwelijk)</h3>
        <p><strong>Deze</strong> (dichtbij): <em>Deze man is mijn vader.</em> &nbsp; <strong>Die</strong> (ver weg): <em>Die auto is blauw.</em></p>
        <h3 class="text-lg font-bold mt-6 mb-2">Het-woorden (onzijdig)</h3>
        <p><strong>Dit</strong> (dichtbij): <em>Dit boek is spannend.</em> &nbsp; <strong>Dat</strong> (ver weg): <em>Dat raam staat open.</em></p>
        <h3 class="text-lg font-bold mt-6 mb-2">Meervoud (altijd deze/die)</h3>
        <p><strong>Deze</strong> (dichtbij): <em>Deze boeken zijn nieuw.</em> &nbsp; <strong>Die</strong> (ver weg): <em>Die kinderen zijn druk.</em></p>
        <p>Bij meervoud maakt het dus niet uit of het enkelvoud <em>het boek</em> of <em>de stoel</em> was – meervoud dwingt altijd <strong>deze</strong> of <strong>die</strong> af.</p>
      `,
    },
    {
      title: "Zelfstandig gebruik – het zelfstandig naamwoord weglaten 🧩",
      body: `
        <p>Heel vaak herhaal je het zelfstandig naamwoord niet. De keuze blijft exact hetzelfde, je weet uit de context of het om een de-woord, het-woord of meervoud gaat.</p>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>Deze</strong> is van mij. (de-woord of meervoud, dichtbij)</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>Die</strong> is van jou. (de-woord of meervoud, ver weg)</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>Dit</strong> is mijn stoel. (het-woord, dichtbij)</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>Dat</strong> is jouw boek. (het-woord, ver weg)</li>
        </ul>
        <p>💡 <strong>Ezelsbrug:</strong> Als iemand vraagt <em>"<strong>Welk</strong> boek?"</em>, dan hoor je het-woord (welk → het), dus antwoord je met <strong>dit</strong> of <strong>dat</strong>. Als iemand vraagt <em>"<strong>Welke</strong> stoel?"</em>, dan hoor je de-woord (welke → de), dus antwoord je met <strong>deze</strong> of <strong>die</strong>.</p>
      `,
    },
    {
      title: "Vaste uitdrukkingen en subtiele nuances 🕵️",
      body: `
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>Deze en gene</strong> = sommige mensen. <em>Deze en gene zeiden dat het regent.</em></li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>Op deze manier</strong> / <strong>op die manier</strong> wijst niet tastbaar aan, maar drukt een wijze van doen uit. <em>Op deze manier lukt het nooit.</em></li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>Dit keer</strong> en <strong>deze keer</strong> zijn beide correct. <em>Dit moment</em> is ook goed, hoewel <em>moment</em> een het-woord is.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>Zeg dat!</strong> / <strong>Zeg dit!</strong> Verwijst naar een uitspraak; <em>dat</em> is gebruikelijker als reactie op wat iemand zegt.</li>
        </ul>
      `,
    },
    {
      title: "Contrast met betrekkelijk voornaamwoord (kort maar nodig) ⚡",
      body: `
        <p>Dezelfde woorden <strong>die</strong> en <strong>dat</strong> worden ook gebruikt om een bijzin te beginnen (betrekkelijk voornaamwoord). Het verschil is essentieel:</p>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>Aanwijzend:</strong> <em>Dat boek is mooi.</em> (je wijst een boek aan)</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>Betrekkelijk:</strong> <em>Het boek dat ik lees, is mooi.</em> (verbindt de bijzin met 'boek')</li>
        </ul>
        <p>De uitspraak is hetzelfde, maar de zinsbouw verschilt: aanwijzend staat het vóór een zelfstandig naamwoord (of vervangt het); betrekkelijk volgt het op een zelfstandig naamwoord en leidt een bijzin in.</p>
      `,
    },
  ],
  rulesTable: [
    {
      rule: "De-woord en meervoud → deze/die",
      structure: "Bij een **de-woord** of bij **meervoud** gebruik je **deze** (dichtbij) of **die** (ver weg).",
      example: "**Deze** stoel is vrij. **Die** boeken zijn oud.",
      usage: "Meervoud dwingt altijd deze/die af, ongeacht het lidwoord in het enkelvoud.",
    },
    {
      rule: "Het-woord → dit/dat",
      structure: "Bij een **het-woord** enkelvoud gebruik je **dit** (dichtbij) of **dat** (ver weg).",
      example: "**Dit** boek is spannend. **Dat** raam staat open.",
      usage: "Bij verkleinwoorden (het-woord) dus ook: dit kindje, dat meisje.",
    },
    {
      rule: "Zelfstandig gebruik volgt het weggelaten woord",
      structure: "Als je het zelfstandig naamwoord weglaat, kies je het aanwijzend voornaamwoord alsof het er nog staat.",
      example: "Welke jas? **Deze** (de-woord, dichtbij). Welk boek? **Dat** (het-woord, ver weg).",
      usage: "Laat je leiden door de context; het vraagwoord 'welk/welke' verraadt het lidwoord.",
    },
    {
      rule: "Verwijzen naar een hele zin of situatie → dit/dat",
      structure: "Als je naar een hele mededeling of situatie verwijst, gebruik je **dit** (dichtbij) of **dat** (verder weg).",
      example: "Het regent. **Dat** is jammer. Ik heb gewonnen! **Dit** had ik niet verwacht.",
      usage: "Hier vervangt het een abstracte gedachte, niet een concreet zelfstandig naamwoord.",
    },
  ],
  callouts: [
    { type: "remember", label: "Onthoud 1", text: "De-woord / meervoud → **deze/die**. Het-woord enkelvoud → **dit/dat**." },
    { type: "remember", label: "Onthoud 2", text: "Uitspraak: **deze** = dee-zuh, **die** = die, **dit** = dit (korte i), **dat** = dat (korte a)." },
    { type: "remember", label: "Onthoud 3", text: "Vraagwoorden verraden het lidwoord: *Welk boek?* → het → dit/dat. *Welke stoel?* → de → deze/die." },
    { type: "remember", label: "Onthoud 4", text: "Naar een hele uitspraak verwijs je met **dit** of **dat**: *Dat klopt!*" },
  ],
  commonMistakes: [
    { incorrect: "Deze boek", correct: "Dit boek", explanation: "Boek is een het-woord → dit/dat." },
    { incorrect: "Dit stoel", correct: "Deze stoel", explanation: "Stoel is een de-woord → deze/die." },
    { incorrect: "Die huis daar", correct: "Dat huis", explanation: "Huis = het, ver weg → dat." },
    { incorrect: "Deze kindje", correct: "Dit kindje", explanation: "Verkleinwoord = het-woord → dit/dat." },
    { incorrect: "Dit boeken", correct: "Deze boeken", explanation: "Meervoud gebruikt nooit dit/dat." },
    { incorrect: "Dat vader", correct: "Die vader", explanation: "Vader = de, ver weg → die." },
    { incorrect: "Deze meisje", correct: "Dit meisje", explanation: "Meisje is een verkleinwoord (het-woord) → dit/dat." },
    { incorrect: "Zij is mijn pen (Engelse invloed)", correct: "Dit / Dat is mijn pen.", explanation: "Pen is geen persoon, dus aanwijzend voornaamwoord gebruiken." },
  ],
  review: [
    "De-woord + dichtbij = **deze** (dee-zuh).",
    "De-woord + ver weg = **die** (die).",
    "Het-woord + dichtbij = **dit** (dit).",
    "Het-woord + ver weg = **dat** (dat).",
    "Meervoud = altijd **deze / die**.",
    "Zelfstandig: *Deze is van mij, die is van jou. Dit klopt niet, dat wel.*",
    "Vaste uitdrukkingen: *deze en gene, op deze/die manier, dit keer/dit moment.*",
  ],
  qa: [
    {
      question: "Waarom is “Dit mevrouw is mijn tante” fout? Corrigeer en leg uit.",
      answer: "“Mevrouw” is een de-woord (vrouwelijk). Bij een de-woord gebruik je **deze** (dichtbij) of **die** (ver weg). De correcte zin is: **Deze mevrouw is mijn tante** (als ze naast je staat) of **Die mevrouw is mijn tante** (verderop).",
    },
    {
      question: "Hoe spreek je “deze” foutloos uit? Beschrijf de klanken en noem een veelvoorkomende fout.",
      answer: "“Deze” spreek je uit met een lange ee (als in *zee*), een zoemende z, en een stomme e aan het eind: **\"dee-zuh\"**. Een veelvoorkomende fout is het uitspreken met een korte e (als in *desk*) of met een harde s in plaats van een zachte z. Zeg dus niet \"dese\" of \"dee-suh\".",
    },
    {
      question: "Vul in: “___ raam staat open” (je wijst naar een raam aan de overkant). Waarom kies je dat woord?",
      answer: "**Dat raam** staat open. “Raam” is een het-woord. Voor een het-woord dat ver weg is, gebruik je **dat**. Als het dichtbij was, zou het “dit raam” zijn.",
    },
    {
      question: "Waarom is “Die boeken” correct en “Dat boeken” fout? Leg de regel uit.",
      answer: "“Boeken” is meervoud. Meervouden gebruiken **altijd deze** (dichtbij) of **die** (ver weg), ongeacht of het enkelvoud een de- of het-woord was. “Dat” hoort alleen bij enkelvoudige het-woorden. Dus “Die boeken” is correct, “Dat boeken” is onmogelijk.",
    },
    {
      question: "Hoe kies je tussen “deze” en “die” als je een zelfstandig naamwoord weglaat? Geef een concreet voorbeeld.",
      answer: "Je kiest op basis van het weggelaten zelfstandig naamwoord. Stel, iemand wijst naar twee tafels en vraagt: “Welke tafel is van jou?” Dan antwoord je: **Deze** (dichtstbijzijnde, de-woord) of **Die** (verder weg). Het geslacht en getal van het weggelaten woord bepalen de keuze.",
    },
    {
      question: "Wat is het verschil tussen “Dat is waar” en “Die is waar”? Wanneer gebruik je welke?",
      answer: "“Dat is waar” gebruik je als je verwijst naar een hele uitspraak of situatie (onzijdig). Bijvoorbeeld: *Iemand zegt: “Het regent.”* Jij antwoordt: **Dat is waar** (verwijzend naar de mededeling). “Die is waar” zou verwijzen naar een specifiek de-woord, zoals: *Welke bewering is waar?* **Die** (bewering, de-woord, ver weg) is waar.",
    },
    {
      question: "In de zin “Dit keer ga ik met de fiets” zie je “dit” bij het de-woord “keer”. Is dat een fout? Verklaar.",
      answer: "Nee, het is geen fout. Hoewel “keer” een de-woord is, is de combinatie **dit keer** volledig ingeburgerd in het Nederlands. Hetzelfde geldt voor **dit moment**. Je mag zowel “deze keer” als “dit keer” zeggen en schrijven; beide zijn correct.",
    },
  ],
};