import type { GrammarLesson } from "../../types";

export const groeten: GrammarLesson = {
  id: "nl-groeten-1",
  title: "Groeten en afscheid nemen (formeel/informeel)",
  level: 1,
  topic: "Presentatie & Vocabulaire",
  body: "Leer hoe je in het Nederlands groet en afscheid neemt. Je leert het verschil tussen formele en informele situaties.",
  overview:
    "Hier vind je een **volledig uitgewerkte** les over groeten en afscheid nemen. Je leert de belangrijkste groeten, afscheidswoorden, tijdsbepalingen, formele en informele situaties, veelgemaakte fouten en een snelle herhaling. Alles is helder, overzichtelijk en direct in de praktijk te gebruiken.",
  anchorSectionId: "basisgroeten",
  exercises: [],
  timeExpressionsLabel: "Basisgroeten – Overzicht",
  timeExpressions: {
    header: "Groet | Wanneer? | Formeel/Informeel",
    rows: [
      ["Hallo", "Altijd", "Beide"],
      ["Hoi", "Altijd", "Informeel"],
      ["Hé", "Altijd", "Informeel"],
      ["Goedemorgen", "Ochtend", "Formeel"],
      ["Goedemiddag", "Middag", "Formeel"],
      ["Goedenavond", "Avond", "Formeel"],
      ["Goedenacht", "Nacht", "Formeel"],
      ["Dag", "Altijd", "Beide"],
    ],
  },
  details: [
    {
      title: "Afscheid nemen",
      body: `
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-indigo-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Afscheid</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Wanneer?</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Formeel/Informeel</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm"><strong>Doei</strong></td><td class="px-3 py-2 text-sm">Altijd</td><td class="px-3 py-2 text-sm">Informeel</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm"><strong>Doeg</strong></td><td class="px-3 py-2 text-sm">Altijd</td><td class="px-3 py-2 text-sm">Informeel</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm"><strong>Tot ziens</strong></td><td class="px-3 py-2 text-sm">Altijd</td><td class="px-3 py-2 text-sm">Formeel</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm"><strong>Tot straks</strong></td><td class="px-3 py-2 text-sm">Snel weer</td><td class="px-3 py-2 text-sm">Informeel</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm"><strong>Tot zo</strong></td><td class="px-3 py-2 text-sm">Heel snel weer</td><td class="px-3 py-2 text-sm">Informeel</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm"><strong>Tot later</strong></td><td class="px-3 py-2 text-sm">Later op de dag</td><td class="px-3 py-2 text-sm">Informeel</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm"><strong>Tot morgen</strong></td><td class="px-3 py-2 text-sm">Morgen</td><td class="px-3 py-2 text-sm">Informeel</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm"><strong>Dag</strong></td><td class="px-3 py-2 text-sm">Altijd</td><td class="px-3 py-2 text-sm">Beide</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm"><strong>Goedenavond</strong></td><td class="px-3 py-2 text-sm">Avond</td><td class="px-3 py-2 text-sm">Formeel</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm"><strong>Goedenacht</strong></td><td class="px-3 py-2 text-sm">Slapen gaan</td><td class="px-3 py-2 text-sm">Formeel</td></tr>
            </tbody>
          </table>
        </div>
      `,
    },
    {
      title: "Formeel vs Informeel",
      body: `
        <div class="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-indigo-700 dark:text-indigo-300 mb-2">🧲 Regel</h3>
          <ul class="space-y-1 list-disc pl-5 text-slate-700 dark:text-slate-300">
            <li>Bij <strong>onbekenden</strong>, <strong>oudere mensen</strong> of in <strong>zakelijke situaties</strong> gebruik je de formele vorm.</li>
            <li>Bij <strong>vrienden</strong>, <strong>familie</strong> en <strong>kinderen</strong> gebruik je de informele vorm.</li>
          </ul>
        </div>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-indigo-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Situatie</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Formeel</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Informeel</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Groet ochtend</td><td class="px-3 py-2 text-sm">Goedemorgen</td><td class="px-3 py-2 text-sm">Hoi / Hallo</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Groet middag</td><td class="px-3 py-2 text-sm">Goedemiddag</td><td class="px-3 py-2 text-sm">Hoi / Hallo</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Groet avond</td><td class="px-3 py-2 text-sm">Goedenavond</td><td class="px-3 py-2 text-sm">Hoi / Hallo</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Afscheid</td><td class="px-3 py-2 text-sm">Tot ziens</td><td class="px-3 py-2 text-sm">Doei / Doeg</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Afscheid</td><td class="px-3 py-2 text-sm">Dag</td><td class="px-3 py-2 text-sm">Tot later / Tot straks</td></tr>
            </tbody>
          </table>
        </div>
      `,
    },
    {
      title: "Tijden van de dag",
      body: `
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-indigo-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Tijd</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Groet</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Ochtend (06:00 - 12:00)</td><td class="px-3 py-2 text-sm"><strong>Goedemorgen</strong></td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Middag (12:00 - 18:00)</td><td class="px-3 py-2 text-sm"><strong>Goedemiddag</strong></td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Avond (18:00 - 00:00)</td><td class="px-3 py-2 text-sm"><strong>Goedenavond</strong></td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Nacht (00:00 - 06:00)</td><td class="px-3 py-2 text-sm"><strong>Goedenacht</strong></td></tr>
            </tbody>
          </table>
        </div>
      `,
    },
    {
      title: "Hoe gaat het?",
      body: `
        <h3 class="text-lg font-bold mt-4 mb-2">Vragen</h3>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-indigo-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Formeel</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Informeel</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Hoe gaat het met u?</td><td class="px-3 py-2 text-sm">Hoe gaat het?</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Hoe maakt u het?</td><td class="px-3 py-2 text-sm">Hoe is het?</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Alles goed?</td><td class="px-3 py-2 text-sm">Alles goed?</td></tr>
            </tbody>
          </table>
        </div>
        <h3 class="text-lg font-bold mt-6 mb-2">Antwoorden</h3>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-indigo-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Nederlands</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Betekenis</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm"><strong>Goed</strong></td><td class="px-3 py-2 text-sm">Standaard antwoord</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm"><strong>Prima</strong></td><td class="px-3 py-2 text-sm">Heel goed</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm"><strong>Ja hoor</strong></td><td class="px-3 py-2 text-sm">Ja, het gaat goed</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm"><strong>Het gaat wel</strong></td><td class="px-3 py-2 text-sm">Gaat, niet perfect</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm"><strong>Niet zo goed</strong></td><td class="px-3 py-2 text-sm">Gaat slecht</td></tr>
            </tbody>
          </table>
        </div>
      `,
    },
    {
      title: "Voorbeeldgesprekken",
      body: `
        <div class="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 p-4 rounded-r-lg my-4">
          <p class="text-slate-700 dark:text-slate-300">
            <strong>Formeel (op het werk):</strong><br><br>
            <strong>Meneer Jansen:</strong> Goedemorgen mevrouw De Vries.<br>
            <strong>Mevrouw De Vries:</strong> Goedemorgen meneer Jansen. Hoe gaat het met u?<br>
            <strong>Meneer Jansen:</strong> Goed, dank u. En met u?<br>
            <strong>Mevrouw De Vries:</strong> Ook goed, dank u. Tot ziens!<br>
            <strong>Meneer Jansen:</strong> Tot ziens!
          </p>
        </div>
        <div class="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 p-4 rounded-r-lg my-4">
          <p class="text-slate-700 dark:text-slate-300">
            <strong>Informeel (op straat):</strong><br><br>
            <strong>Lisa:</strong> Hoi Tom!<br>
            <strong>Tom:</strong> Hé Lisa! Hoe gaat het?<br>
            <strong>Lisa:</strong> Goed! En met jou?<br>
            <strong>Tom:</strong> Ook goed. Ga je mee?<br>
            <strong>Lisa:</strong> Ja, leuk! Tot straks!<br>
            <strong>Tom:</strong> Doei!
          </p>
        </div>
      `,
    },
  ],
  rulesTable: [
    {
      rule: "Schrijfwijze",
      structure: "**Goedemorgen**, **Goedemiddag** en **Goedenavond** schrijf je **aan elkaar**, niet los.",
      example: "Fout: *Goede morgen* – Correct: **Goedemorgen**",
      usage: "Dit geldt voor alle samengestelde tijdsgroeten in het Nederlands.",
    },
    {
      rule: "Formeel vs Informeel",
      structure: "Gebruik **u** in formele situaties en **jij/je** in informele situaties.",
      example: "Formeel: Hoe gaat het met **u**? – Informeel: Hoe gaat het met **jou**?",
      usage: "Let op: bij formele situaties gebruik je ook de formele groet.",
    },
    {
      rule: "Afscheid bij slapen gaan",
      structure: "Gebruik **Goedenacht** of **Welterusten** als je gaat slapen.",
      example: "**Goedenacht**, slaap lekker! – **Welterusten**!",
      usage: "Deze woorden gebruik je alleen 's avonds of 's nachts bij het slapengaan.",
    },
    {
      rule: "Tot straks vs Tot later vs Tot zo",
      structure: "**Tot straks** = minuten tot een uur. **Tot later** = later op de dag. **Tot zo** = heel snel.",
      example: "**Tot straks** in de les! – **Tot later** op het feest! – **Tot zo** bij de bus!",
      usage: "Gebruik de juiste vorm afhankelijk van hoe snel je iemand weer ziet.",
    },
  ],
  callouts: [
    { type: "remember", label: "Onthoud 1", text: "Gebruik **Goedemorgen**, **Goedemiddag**, **Goedenavond** bij formele situaties. Schrijf ze **aan elkaar**." },
    { type: "remember", label: "Onthoud 2", text: "Gebruik **Hoi**, **Hallo**, **Hé** bij informele situaties." },
    { type: "remember", label: "Onthoud 3", text: "Formeel afscheid: **Tot ziens** of **Dag**. Informeel afscheid: **Doei**, **Doeg** of **Tot later**." },
    { type: "remember", label: "Onthoud 4", text: "Gebruik **u** bij formele vragen. Gebruik **jij/je** bij informele vragen." },
    { type: "remember", label: "Onthoud 5", text: "**Tot straks** = snel. **Tot later** = later op de dag. **Tot zo** = heel snel." },
    { type: "remember", label: "Onthoud 6", text: "**Goedenacht** of **Welterusten** gebruik je alleen als je gaat slapen." },
  ],
  commonMistakes: [
    { incorrect: "Goede morgen", correct: "Goedemorgen", explanation: "Aan elkaar schrijven, niet los." },
    { incorrect: "Goede middag", correct: "Goedemiddag", explanation: "Aan elkaar schrijven, niet los." },
    { incorrect: "Goede avond", correct: "Goedenavond", explanation: "Aan elkaar schrijven, niet los." },
    { incorrect: "Tot strakjes", correct: "Tot straks", explanation: "\"Straks\" niet verkleinen." },
    { incorrect: "Tot zometeen", correct: "Tot zo", explanation: "\"Tot zo\" is de correcte vorm." },
    { incorrect: "Hallo bij formele situatie", correct: "Goedemorgen", explanation: "Gebruik de juiste tijdsgroet voor formele situaties." },
    { incorrect: "Doei bij formele situatie", correct: "Tot ziens", explanation: "\"Doei\" is te informeel voor formele situaties." },
  ],
  review: [
    "**Hallo** en **Hoi** gebruik je in informele situaties.",
    "**Goedemorgen**, **Goedemiddag**, **Goedenavond** gebruik je in formele situaties.",
    "**Doei**, **Doeg**, **Tot later** en **Tot straks** zijn informeel afscheid.",
    "**Tot ziens** en **Dag** zijn formeel afscheid.",
    "**Goedenacht** en **Welterusten** gebruik je bij het slapen gaan.",
    "Vraag **Hoe gaat het?** (informeel) of **Hoe gaat het met u?** (formeel).",
    "Antwoord met **Goed**, **Prima** of **Ja hoor**.",
    "Schrijf tijdsgroeten **aan elkaar**.",
  ],
  qa: [
    { question: "Wat zeg je als je iemand 's ochtends formeel begroet?", answer: "**Goedemorgen**." },
    { question: "Wat is het verschil tussen \"Hoi\" en \"Goedemiddag\"?", answer: "\"Hoi\" is informeel, \"Goedemiddag\" is formeel." },
    { question: "Hoe neem je informeel afscheid?", answer: "**Doei**, **Doeg** of **Tot later**." },
    { question: "Hoe neem je formeel afscheid?", answer: "**Tot ziens** of **Dag**." },
    { question: "Wat zeg je 's avonds als groet?", answer: "**Goedenavond**." },
    { question: "Schrijf je \"goedemorgen\" los of aan elkaar?", answer: "**Aan elkaar**: Goedemorgen." },
    { question: "Hoe vraag je formeel hoe het met iemand gaat?", answer: "**Hoe gaat het met u?**" },
    { question: "Hoe vraag je informeel hoe het met iemand gaat?", answer: "**Hoe gaat het?** of **Hoe is het?**" },
    { question: "Wat antwoord je op \"Hoe gaat het?\"", answer: "**Goed**, **Prima** of **Ja hoor**." },
    { question: "Wanneer zeg je \"Goedenacht\"?", answer: "Als je gaat slapen of iemand welterusten wenst." },
    { question: "Wat is het verschil tussen \"Tot straks\" en \"Tot later\"?", answer: "\"Tot straks\" is voor binnen enkele minuten, \"Tot later\" is voor later op de dag." },
    { question: "Hoe zeg je \"Goodbye\" in het Nederlands?", answer: "**Tot ziens** (formeel) of **Doei** (informeel)." },
  ],
};