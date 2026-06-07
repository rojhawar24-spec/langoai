import type { GrammarLesson } from "../../types";

export const routines: GrammarLesson = {
  id: "nl-routines-1",
  title: "Dagelijkse Routines en Klokkijken",
  level: 1,
  topic: "Vocabulaire & Presentatie",
  body: "Leer hoe je in het Nederlands vertelt over je dagelijkse routine en hoe je klokkijkt. Je leert de tijden van de dag, hoe je zegt hoe laat het is, en hoe je beschrijft wat je elke dag doet van 's ochtends vroeg tot 's avonds laat.",
  overview:
    "Hier vind je een **volledig uitgewerkte** les over dagelijkse routines en klokkijken. Je leert hoe je de klok leest in het Nederlands, alle dagdelen, veelgebruikte werkwoorden voor dagelijkse activiteiten, hoe je een volledige dag beschrijft van opstaan tot slapengaan, en hoe je zegt op welke tijd je iets doet. Alles met duidelijke voorbeelden, ezelsbruggetjes en praktische oefenvragen. Na deze les beschrijf je je hele dag foutloos in het Nederlands!",
  anchorSectionId: "klokkijken",
  exercises: [],
  timeExpressionsLabel: "Hele Uren 🕐",
  timeExpressions: {
    header: "Tijd | Nederlands",
    rows: [
      ["🕐 01:00", "<strong>een uur</strong>"],
      ["🕑 02:00", "<strong>twee uur</strong>"],
      ["🕒 03:00", "<strong>drie uur</strong>"],
      ["🕓 04:00", "<strong>vier uur</strong>"],
      ["🕔 05:00", "<strong>vijf uur</strong>"],
      ["🕕 06:00", "<strong>zes uur</strong>"],
      ["🕖 07:00", "<strong>zeven uur</strong>"],
      ["🕗 08:00", "<strong>acht uur</strong>"],
      ["🕘 09:00", "<strong>negen uur</strong>"],
      ["🕙 10:00", "<strong>tien uur</strong>"],
      ["🕚 11:00", "<strong>elf uur</strong>"],
      ["🕛 12:00", "<strong>twaalf uur</strong>"],
    ],
  },
  details: [
    {
      title: "Halve Uren 🕜🕝🕞",
      body: `
        <div class="bg-rose-50 dark:bg-rose-900/20 border-l-4 border-rose-500 p-4 rounded-r-lg my-4">
          <p class="font-semibold text-rose-700 dark:text-rose-300">
            ⚠️ PAS OP! In het Nederlands zeg je <strong>half</strong> plus het <strong>volgende</strong> uur. Dit is anders dan in veel andere talen!<br>
            Half twee = 01:30 (niet 02:30!). Je zegt het uur dat nog moet komen.
          </p>
        </div>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-indigo-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Tijd</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Nederlands</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Uitleg</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">01:30</td><td class="px-3 py-2 text-sm"><strong>half twee</strong></td><td class="px-3 py-2 text-sm">half op weg naar twee uur</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">02:30</td><td class="px-3 py-2 text-sm"><strong>half drie</strong></td><td class="px-3 py-2 text-sm">half op weg naar drie uur</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">03:30</td><td class="px-3 py-2 text-sm"><strong>half vier</strong></td><td class="px-3 py-2 text-sm">half op weg naar vier uur</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">04:30</td><td class="px-3 py-2 text-sm"><strong>half vijf</strong></td><td class="px-3 py-2 text-sm">half op weg naar vijf uur</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">05:30</td><td class="px-3 py-2 text-sm"><strong>half zes</strong></td><td class="px-3 py-2 text-sm">half op weg naar zes uur</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">06:30</td><td class="px-3 py-2 text-sm"><strong>half zeven</strong></td><td class="px-3 py-2 text-sm">half op weg naar zeven uur</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">07:30</td><td class="px-3 py-2 text-sm"><strong>half acht</strong></td><td class="px-3 py-2 text-sm">half op weg naar acht uur</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">08:30</td><td class="px-3 py-2 text-sm"><strong>half negen</strong></td><td class="px-3 py-2 text-sm">half op weg naar negen uur</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">09:30</td><td class="px-3 py-2 text-sm"><strong>half tien</strong></td><td class="px-3 py-2 text-sm">half op weg naar tien uur</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">10:30</td><td class="px-3 py-2 text-sm"><strong>half elf</strong></td><td class="px-3 py-2 text-sm">half op weg naar elf uur</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">11:30</td><td class="px-3 py-2 text-sm"><strong>half twaalf</strong></td><td class="px-3 py-2 text-sm">half op weg naar twaalf uur</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">12:30</td><td class="px-3 py-2 text-sm"><strong>half een</strong></td><td class="px-3 py-2 text-sm">half op weg naar een uur</td></tr>
            </tbody>
          </table>
        </div>
        <div class="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 p-4 rounded-r-lg my-4">
          <p class="text-slate-700 dark:text-slate-300"><strong>🧠 Ezelsbruggetje:</strong> Je bent op de helft van de weg naar het volgende uur. Half twee = halverwege tussen een en twee = 01:30.</p>
        </div>
      `,
    },
    {
      title: "Kwartieren en Minuten ⏱️⏲️",
      body: `
        <h3 class="text-lg font-bold mt-4 mb-2">Kwart over</h3>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Tijd</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Nederlands</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">12:15</td><td class="px-3 py-2 text-sm"><strong>kwart over twaalf</strong></td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">03:15</td><td class="px-3 py-2 text-sm"><strong>kwart over drie</strong></td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">06:15</td><td class="px-3 py-2 text-sm"><strong>kwart over zes</strong></td></tr>
            </tbody>
          </table>
        </div>
        <h3 class="text-lg font-bold mt-6 mb-2">Kwart voor</h3>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Tijd</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Nederlands</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">11:45</td><td class="px-3 py-2 text-sm"><strong>kwart voor twaalf</strong></td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">02:45</td><td class="px-3 py-2 text-sm"><strong>kwart voor drie</strong></td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">05:45</td><td class="px-3 py-2 text-sm"><strong>kwart voor zes</strong></td></tr>
            </tbody>
          </table>
        </div>
        <h3 class="text-lg font-bold mt-6 mb-2">Alle tijden van 8:00 tot 9:00</h3>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Tijd</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Nederlands</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">08:00</td><td class="px-3 py-2 text-sm"><strong>acht uur</strong></td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">08:05</td><td class="px-3 py-2 text-sm"><strong>vijf over acht</strong></td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">08:10</td><td class="px-3 py-2 text-sm"><strong>tien over acht</strong></td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">08:15</td><td class="px-3 py-2 text-sm"><strong>kwart over acht</strong></td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">08:20</td><td class="px-3 py-2 text-sm"><strong>tien voor half negen</strong></td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">08:25</td><td class="px-3 py-2 text-sm"><strong>vijf voor half negen</strong></td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">08:30</td><td class="px-3 py-2 text-sm"><strong>half negen</strong></td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">08:35</td><td class="px-3 py-2 text-sm"><strong>vijf over half negen</strong></td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">08:40</td><td class="px-3 py-2 text-sm"><strong>tien over half negen</strong></td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">08:45</td><td class="px-3 py-2 text-sm"><strong>kwart voor negen</strong></td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">08:50</td><td class="px-3 py-2 text-sm"><strong>tien voor negen</strong></td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">08:55</td><td class="px-3 py-2 text-sm"><strong>vijf voor negen</strong></td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">09:00</td><td class="px-3 py-2 text-sm"><strong>negen uur</strong></td></tr>
            </tbody>
          </table>
        </div>
      `,
    },
    {
      title: "Dagdelen 🌅☀️🌙",
      body: `
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Deel van de dag</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Tijd</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Nederlands</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">🌅 Ochtend</td><td class="px-3 py-2 text-sm">06:00 – 12:00</td><td class="px-3 py-2 text-sm"><strong>'s ochtends</strong></td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">☀️ Middag</td><td class="px-3 py-2 text-sm">12:00 – 18:00</td><td class="px-3 py-2 text-sm"><strong>'s middags</strong></td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">🌆 Avond</td><td class="px-3 py-2 text-sm">18:00 – 00:00</td><td class="px-3 py-2 text-sm"><strong>'s avonds</strong></td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">🌙 Nacht</td><td class="px-3 py-2 text-sm">00:00 – 06:00</td><td class="px-3 py-2 text-sm"><strong>'s nachts</strong></td></tr>
            </tbody>
          </table>
        </div>
      `,
    },
    {
      title: "Dagelijkse Activiteiten 🎯",
      body: `
        <h3 class="text-lg font-bold mt-4 mb-2">Ochtendroutine 🌅</h3>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Nederlands</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Uitleg</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">😴 <strong>wakker worden</strong></td><td class="px-3 py-2 text-sm">stoppen met slapen</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">🛌 <strong>opstaan</strong></td><td class="px-3 py-2 text-sm">uit bed komen</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">🚿 <strong>douchen</strong></td><td class="px-3 py-2 text-sm">jezelf wassen</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">🪥 <strong>tanden poetsen</strong></td><td class="px-3 py-2 text-sm">je tanden schoonmaken</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">👔 <strong>aankleden</strong></td><td class="px-3 py-2 text-sm">kleding aandoen</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">🍳 <strong>ontbijten</strong></td><td class="px-3 py-2 text-sm">'s ochtends eten</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">🚗 <strong>naar het werk gaan</strong></td><td class="px-3 py-2 text-sm">naar je werk reizen</td></tr>
            </tbody>
          </table>
        </div>
        <h3 class="text-lg font-bold mt-6 mb-2">Middagroutine ☀️</h3>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Nederlands</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Uitleg</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">🍽️ <strong>lunchen</strong></td><td class="px-3 py-2 text-sm">'s middags eten</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">💼 <strong>werken</strong></td><td class="px-3 py-2 text-sm">je werk doen</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">🏋️ <strong>sporten</strong></td><td class="px-3 py-2 text-sm">bewegen, sport doen</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">🛒 <strong>boodschappen doen</strong></td><td class="px-3 py-2 text-sm">eten en spullen kopen</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">🍳 <strong>koken</strong></td><td class="px-3 py-2 text-sm">eten maken</td></tr>
            </tbody>
          </table>
        </div>
        <h3 class="text-lg font-bold mt-6 mb-2">Avondroutine 🌆</h3>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Nederlands</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Uitleg</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">🍝 <strong>avondeten</strong></td><td class="px-3 py-2 text-sm">'s avonds eten</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">📺 <strong>televisie kijken</strong></td><td class="px-3 py-2 text-sm">tv kijken</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">📖 <strong>lezen</strong></td><td class="px-3 py-2 text-sm">een boek lezen</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">🐕 <strong>de hond uitlaten</strong></td><td class="px-3 py-2 text-sm">met de hond wandelen</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">🛏️ <strong>naar bed gaan</strong></td><td class="px-3 py-2 text-sm">naar je slaapkamer gaan</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">😴 <strong>slapen</strong></td><td class="px-3 py-2 text-sm">in slaap vallen</td></tr>
            </tbody>
          </table>
        </div>
      `,
    },
    {
      title: "Scheidbare Werkwoorden ⚠️",
      body: `
        <div class="bg-rose-50 dark:bg-rose-900/20 border-l-4 border-rose-500 p-4 rounded-r-lg my-4">
          <p class="font-semibold text-rose-700 dark:text-rose-300">
            ⚠️ PAS OP: Sommige werkwoorden vallen uit elkaar in de zin. Het eerste deel gaat naar het <strong>eind van de zin</strong>!
          </p>
        </div>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Hele werkwoord</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">In de zin</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm"><strong>opstaan</strong></td><td class="px-3 py-2 text-sm">Ik <strong>sta</strong> om 7 uur <strong>op</strong>. 🛌</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm"><strong>aankleden</strong></td><td class="px-3 py-2 text-sm">Ik <strong>kleed</strong> me <strong>aan</strong>. 👔</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm"><strong>wakker worden</strong></td><td class="px-3 py-2 text-sm">Ik <strong>word</strong> om 6 uur <strong>wakker</strong>. 😴</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm"><strong>uitlaten</strong></td><td class="px-3 py-2 text-sm">Ik <strong>laat</strong> de hond <strong>uit</strong>. 🐕</td></tr>
            </tbody>
          </table>
        </div>
      `,
    },
    {
      title: "Voorbeelddag – Mijn Dagelijkse Routine 📖",
      body: `
        <div class="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 p-4 rounded-r-lg my-4">
          <p class="text-slate-700 dark:text-slate-300">
            <strong>Mijn dag – door Lisa</strong> 👩<br><br>
            <strong>'s Ochtends:</strong> 🌅<br>
            Ik <strong>word wakker</strong> om <strong>half zeven</strong> (06:30). Ik <strong>sta op</strong> om <strong>zeven uur</strong> (07:00). Eerst <strong>douche</strong> ik. 🚿 Dan <strong>poets</strong> ik mijn tanden. 🪥 Daarna <strong>kleed</strong> ik me <strong>aan</strong>. 👔 Ik <strong>ontbijt</strong> om <strong>kwart over zeven</strong> (07:15). Om <strong>acht uur</strong> (08:00) <strong>ga</strong> ik naar mijn werk. 🚗<br><br>
            <strong>'s Middags:</strong> ☀️<br>
            Ik <strong>werk</strong> van half negen tot half vijf (08:30 – 16:30). Om <strong>twaalf uur</strong> (12:00) <strong>lunch</strong> ik. 🥪 Om <strong>half een</strong> (12:30) <strong>ga</strong> ik weer aan het werk.<br><br>
            <strong>'s Avonds:</strong> 🌆<br>
            Om <strong>half vijf</strong> (16:30) <strong>ga</strong> ik naar huis. 🏠 Ik <strong>kook</strong> om <strong>zes uur</strong> (18:00). 🍳 Daarna <strong>kijk</strong> ik televisie 📺 of <strong>lees</strong> ik een boek. 📖 Om <strong>elf uur</strong> (23:00) <strong>ga</strong> ik naar bed. 🛏️
          </p>
        </div>
      `,
    },
  ],
  rulesTable: [
    {
      rule: "Hele uren",
      structure: "Het is + **getal** + **uur**",
      example: "Het is **drie uur**. Het is **acht uur**.",
      usage: "Bij 12:00: **twaalf uur 's middags** of **twaalf uur 's nachts**.",
    },
    {
      rule: "Halve uren – het volgende uur",
      structure: "Het is **half** + **volgende uur**",
      example: "01:30 = **half twee**. 07:30 = **half acht**. 12:30 = **half een**.",
      usage: "⚠️ PAS OP: Half twee = 01:30 (niet 02:30!). Je noemt het uur dat nog moet komen.",
    },
    {
      rule: "Kwart over en kwart voor",
      structure: "**kwart over** + uur | **kwart voor** + uur",
      example: "03:15 = **kwart over drie**. 05:45 = **kwart voor zes**.",
      usage: "Kwart over = 15 min na het uur. Kwart voor = 15 min voor het uur.",
    },
    {
      rule: "Minuten precies",
      structure: "**vijf/tien over** + uur | **vijf/tien voor half** + uur | **vijf/tien over half** + uur | **vijf/tien voor** + uur",
      example: "08:05 = **vijf over acht**. 08:20 = **tien voor half negen**. 08:35 = **vijf over half negen**. 08:50 = **tien voor negen**.",
      usage: "Na half tel je naar het volgende hele uur toe.",
    },
    {
      rule: "Scheidbare werkwoorden",
      structure: "Het eerste deel van het werkwoord gaat naar het **eind van de zin**.",
      example: "**opstaan** → Ik **sta** om 7 uur **op**. **aankleden** → Ik **kleed** me **aan**.",
      usage: "⚠️ PAS OP: Ik **opsta** is fout! Het eerste deel moet naar het eind.",
    },
    {
      rule: "Voorzetsels bij tijd",
      structure: "**om** + kloktijd | **op** + dag | **in** + maand/jaar",
      example: "**om** 8 uur ⏰ | **op** maandag 📆 | **in** januari ❄️",
      usage: "⚠️ PAS OP: Nooit 'in 8 uur' of 'om maandag'!",
    },
    {
      rule: "Tijdswoorden voor volgorde",
      structure: "**eerst** → **dan** → **daarna** → **later**",
      example: "**Eerst** douche ik, **dan** ontbijt ik, **daarna** ga ik naar mijn werk.",
      usage: "Gebruik deze woorden om je dag in de goede volgorde te vertellen.",
    },
  ],
  callouts: [
    { type: "remember", label: "Onthoud 1", text: "Hele uren: Het is **een uur, twee uur, drie uur**..." },
    { type: "remember", label: "Onthoud 2", text: "Halve uren: **half twee** = 01:30. Je zegt het volgende uur." },
    { type: "remember", label: "Onthoud 3", text: "Kwartieren: **kwart over** (15 min na) en **kwart voor** (15 min voor)." },
    { type: "remember", label: "Onthoud 4", text: "Dagdelen: **'s ochtends, 's middags, 's avonds, 's nachts**." },
    { type: "remember", label: "Onthoud 5", text: "Scheidbare werkwoorden: **opstaan** → Ik **sta op**. **aankleden** → Ik **kleed me aan**." },
    { type: "remember", label: "Onthoud 6", text: "Voorzetsels: **om** + kloktijd, **op** + dag, **in** + maand/jaar." },
    { type: "remember", label: "Onthoud 7", text: "Tijdswoorden: **eerst, dan, daarna, later**." },
  ],
  commonMistakes: [
    { incorrect: "half twee = 02:30", correct: "half twee = 01:30", explanation: "Half + het volgende uur" },
    { incorrect: "Ik opsta om 7 uur.", correct: "Ik sta op om 7 uur.", explanation: "Opstaan is scheidbaar, 'op' gaat naar het eind" },
    { incorrect: "Ik ga naar bed op 11 uur.", correct: "Ik ga om 11 uur naar bed.", explanation: "Tijd met 'om', niet met 'op'" },
    { incorrect: "In 8 uur ga ik naar werk.", correct: "Om 8 uur ga ik naar mijn werk.", explanation: "Voor tijd gebruik je 'om', niet 'in'" },
    { incorrect: "Ik kleed om 8 uur aan.", correct: "Ik kleed me om 8 uur aan.", explanation: "Aankleden heeft 'me' nodig" },
    { incorrect: "Om maandag ga ik naar school.", correct: "Op maandag ga ik naar school.", explanation: "Voor dagen gebruik je 'op'" },
    { incorrect: "Ik douche me.", correct: "Ik douche.", explanation: "Douchen is zonder 'me'" },
    { incorrect: "Ik word wakker om 7 uur op.", correct: "Ik word om 7 uur wakker.", explanation: "Alleen 'wakker' gaat naar het eind" },
    { incorrect: "kwart over half acht = 07:45", correct: "kwart voor acht = 07:45", explanation: "Na half tel je naar het hele uur toe" },
  ],
  review: [
    "**Hele uren:** een uur, twee uur, drie uur... tot twaalf uur.",
    "**Halve uren:** half twee (01:30), half drie (02:30)... half een (12:30).",
    "**Kwart over:** kwart over een (01:15), kwart over twee (02:15)...",
    "**Kwart voor:** kwart voor een (00:45), kwart voor twee (01:45)...",
    "**Minuten:** vijf over, tien over, vijf voor half, tien voor half, vijf over half, tien over half, vijf voor, tien voor.",
    "**Dagdelen:** 's ochtends (06-12), 's middags (12-18), 's avonds (18-00), 's nachts (00-06).",
    "**Tijdswoorden:** eerst, dan, daarna, later.",
    "**Voorzetsels:** om 8 uur, op maandag, in januari.",
    "**Dagelijkse routine:** opstaan, douchen, ontbijten, werken, lunchen, koken, eten, tv-kijken, naar bed gaan, slapen.",
    "**Scheidbare werkwoorden:** opstaan → Ik sta op. aankleden → Ik kleed me aan.",
  ],
  qa: [
    { question: "Hoe vraag je hoe laat het is?", answer: "**Hoe laat is het?**" },
    { question: "Hoe zeg je 08:00 in het Nederlands?", answer: "**Acht uur**." },
    { question: "Hoe laat is \"half drie\"?", answer: "**02:30**. Het is half op weg naar drie uur." },
    { question: "Hoe laat is \"half acht\"?", answer: "**07:30**. Het is half op weg naar acht uur." },
    { question: "Waarom is \"half twee\" 01:30 en niet 02:30?", answer: "Omdat je in het Nederlands het **volgende** uur noemt. Je bent halverwege tussen een en twee." },
    { question: "Hoe zeg je 03:15?", answer: "**Kwart over drie**." },
    { question: "Hoe zeg je 05:45?", answer: "**Kwart voor zes**." },
    { question: "Hoe zeg je 08:05?", answer: "**Vijf over acht**." },
    { question: "Hoe zeg je 08:20?", answer: "**Tien voor half negen**." },
    { question: "Hoe zeg je 08:35?", answer: "**Vijf over half negen**." },
    { question: "Hoe zeg je 08:50?", answer: "**Tien voor negen**." },
    { question: "Wat betekent \"'s ochtends\"?", answer: "In de ochtend, tussen 06:00 en 12:00 uur." },
    { question: "Wat betekent \"'s avonds\"?", answer: "In de avond, tussen 18:00 en 00:00 uur." },
    { question: "Hoe zeg je \"Ik word wakker om 7 uur\"?", answer: "**Ik word wakker om 7 uur**." },
    { question: "Hoe zeg je \"Ik sta op om half 8\"?", answer: "**Ik sta op om half acht**." },
    { question: "Waarom zeg je \"Ik sta op\" en niet \"Ik opsta\"?", answer: "Omdat **opstaan** een scheidbaar werkwoord is. Het eerste deel \"op\" gaat naar het eind van de zin." },
    { question: "Hoe zeg je \"Ik kleed me aan\"?", answer: "**Ik kleed me aan**." },
    { question: "Hoe zeg je \"Ik ontbijt om 8 uur\"?", answer: "**Ik ontbijt om 8 uur**." },
    { question: "Hoe zeg je \"Ik ga om half 9 naar mijn werk\"?", answer: "**Ik ga om half negen naar mijn werk**." },
    { question: "Hoe zeg je \"Ik kijk 's avonds televisie\"?", answer: "**Ik kijk 's avonds televisie**." },
    { question: "Hoe zeg je \"Ik ga om 11 uur naar bed\"?", answer: "**Ik ga om 11 uur naar bed**." },
    { question: "Hoe zeg je \"Ik laat de hond uit\"?", answer: "**Ik laat de hond uit**." },
    { question: "Hoe zeg je \"Eerst douche ik, dan ontbijt ik\"?", answer: "**Eerst douche ik, dan ontbijt ik**." },
    { question: "Welk voorzetsel gebruik je voor een specifieke tijd?", answer: "**Om**. Bijvoorbeeld: om 8 uur, om half 3." },
    { question: "Welk voorzetsel gebruik je voor een dag?", answer: "**Op**. Bijvoorbeeld: op maandag." },
    { question: "Welk voorzetsel gebruik je voor een maand?", answer: "**In**. Bijvoorbeeld: in januari." },
    { question: "Hoe vraag je \"Hoe laat sta jij op?\"", answer: "**Hoe laat sta jij op?**" },
    { question: "Wat betekent \"uitslapen\"?", answer: "Langer slapen dan normaal, niet vroeg opstaan." },
    { question: "Wat betekent \"boodschappen doen\"?", answer: "Eten en spullen kopen in de winkel." },
    { question: "Hoe zeg je \"Ik ben te laat\"?", answer: "**Ik ben te laat**." },
    { question: "Hoe zeg je \"Ik ben op tijd\"?", answer: "**Ik ben op tijd**." },
    { question: "Wat is het verschil tussen \"vroeg\" en \"laat\"?", answer: "**Vroeg** = aan het begin van de dag. **Laat** = aan het eind van de dag." },
    { question: "Hoe zeg je \"In het weekend slaap ik uit\"?", answer: "**In het weekend slaap ik uit**." },
    { question: "Hoe vraag je \"Wat doe jij 's avonds?\"", answer: "**Wat doe jij 's avonds?**" },
    { question: "Hoe zeg je \"Ik poets mijn tanden voordat ik naar bed ga\"?", answer: "**Ik poets mijn tanden voordat ik naar bed ga**." },
  ],
};