import type { GrammarLesson } from "../../types";

export const meervoud: GrammarLesson = {
  id: "nl-meervoud-1",
  title: "Meervoud van Zelfstandige Naamwoorden: -en, -s, -eren en Onregelmatig",
  level: 1,
  topic: "Meervoud",  // [G] Grammatica
  body: "Leer hoe je van zelfstandige naamwoorden het meervoud maakt. Met duidelijke spellingregels, ezelsbruggetjes en alle uitzonderingen.",
  overview:
    "In het Nederlands verandert een zelfstandig naamwoord als je over meer dan één ding, mens of dier praat. De meest gebruikte uitgangen zijn **-en** en **-s**, maar er zijn ook kleine groepen met **-eren** en onregelmatige vormen. In deze **ultieme masterclass** leer je alle regels, spellingtips en valkuilen. Na deze les maak jij elk meervoud foutloos!",
  anchorSectionId: "basis",
  exercises: [],
  timeExpressionsLabel: "Overzicht meervoudsuitgangen 🧾",
  timeExpressions: {
    header: "Uitgang | Wanneer? | Voorbeelden",
    rows: [
      ["**-en**", "Standaard; met spellingregels voor korte/lange klinker en f/v, s/z. Ook -heid → -heden, -nis → -nissen.", "hond → honden, kat → katten, boom → bomen, waarheid → waarheden"],
      ["**-s**", "Na onbeklemtoonde -e, -el, -en, -er, -em, -je en leenwoorden. Apostrof‑s bij klinkerbotsing.", "tafel → tafels, boekje → boekjes, oma → oma's"],
      ["**-eren**", "Klein gesloten groepje woorden.", "kind → kinderen, ei → eieren, blad → bladeren"],
      ["**onregelmatig**", "Klinkerwisseling, Latijn/Grieks, extra j‑klank.", "schip → schepen, museum → musea, koe → koeien"],
    ],
  },
  details: [
    {
      title: "De basis – waarom moet je meervouden kennen? 🤔",
      body: `
        <p>Als je meer dan één exemplaar bedoelt, gebruik je het meervoud. Het lidwoord is dan altijd <strong>de</strong>, ook als het enkelvoud een het‑woord is: <strong>het boek → de boeken</strong>, <strong>het kind → de kinderen</strong>.</p>
      `,
    },
    {
      title: "Meervoud op -en (de grootste groep) 📚",
      body: `
        <h3 class="text-lg font-bold mt-4 mb-2">Gewoon -en zonder aanpassing</h3>
        <p>Eindigt het woord op een medeklinkercombinatie die geen spellingprobleem geeft, dan schrijf je gewoon <strong>-en</strong>.</p>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">de hond → de hond<strong>en</strong></li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">de straat → de strat<strong>en</strong></li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">de fiets → de fiets<strong>en</strong></li>
        </ul>
        <h3 class="text-lg font-bold mt-6 mb-2">Korte klinker → medeklinker verdubbelen</h3>
        <p>Heeft het enkelvoud een korte klinker (a, e, i, o, u) in de beklemtoonde lettergreep en daarna één medeklinker, dan verdubbel je die medeklinker om de korte klank te behouden.</p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Enkelvoud</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Meervoud</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">de k<strong>a</strong>t</td><td class="px-3 py-2 text-sm">de katt<strong>en</strong></td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">de b<strong>o</strong>m</td><td class="px-3 py-2 text-sm">de bomm<strong>en</strong></td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">de b<strong>u</strong>s</td><td class="px-3 py-2 text-sm">de buss<strong>en</strong></td></tr>
            </tbody>
          </table>
        </div>
        <h3 class="text-lg font-bold mt-6 mb-2">Lange klinker → één klinkerteken weglaten</h3>
        <p>Bij een lange klinker (aa, ee, oo, uu) vlak voor de slotmedeklinker verdwijnt één klinkerteken in het meervoud.</p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Enkelvoud</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Meervoud</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">de b<strong>aa</strong>n</td><td class="px-3 py-2 text-sm">de ban<strong>en</strong></td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">de b<strong>oo</strong>m</td><td class="px-3 py-2 text-sm">de bom<strong>en</strong></td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">het sch<strong>aa</strong>p</td><td class="px-3 py-2 text-sm">de schap<strong>en</strong></td></tr>
            </tbody>
          </table>
        </div>
        <h3 class="text-lg font-bold mt-6 mb-2">f → v en s → z tussen klinkers</h3>
        <p>Als de slotmedeklinker in het enkelvoud een <strong>f</strong> of <strong>s</strong> is, en in het meervoud tussen klinkers komt, wordt die vaak zachter: f → v, s → z.</p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Enkelvoud</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Meervoud</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">de raa<strong>f</strong></td><td class="px-3 py-2 text-sm">de ra<strong>v</strong>en</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">de hui<strong>s</strong></td><td class="px-3 py-2 text-sm">de hui<strong>z</strong>en</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">de prij<strong>s</strong></td><td class="px-3 py-2 text-sm">de prij<strong>z</strong>en</td></tr>
            </tbody>
          </table>
        </div>
        <p><span class="pas-op-highlight">⚠️ PAS OP</span> Niet altijd! <em>de mens → de mensen</em> (blijft s) en <em>de dans → de dansen</em>.</p>
        <h3 class="text-lg font-bold mt-6 mb-2">Bijzondere -en: -heid → -heden, -nis → -nissen</h3>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">de waar<strong>heid</strong> → de waar<strong>heden</strong></li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">de geschiede<strong>nis</strong> → de geschied<strong>nissen</strong></li>
        </ul>
      `,
    },
    {
      title: "Meervoud op -s (de tweede hoofdregel) 🏷️",
      body: `
        <p>Veel woorden krijgen een <strong>-s</strong> in plaats van -en. Dit gebeurt vooral bij woorden die eindigen op een onbeklemtoonde klank (<em>-e, -el, -en, -er, -em, -je</em>) en bij leenwoorden uit het Engels of Frans.</p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Woord eindigt op</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Enkelvoud</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Meervoud</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">-e (onbeklemtoond)</td><td class="px-3 py-2 text-sm">de bo<strong>de</strong></td><td class="px-3 py-2 text-sm">de bod<strong>es</strong></td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">-el</td><td class="px-3 py-2 text-sm">de taf<strong>el</strong></td><td class="px-3 py-2 text-sm">de taf<strong>els</strong></td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">-en</td><td class="px-3 py-2 text-sm">de dek<strong>en</strong></td><td class="px-3 py-2 text-sm">de dek<strong>ens</strong></td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">-er</td><td class="px-3 py-2 text-sm">de lekk<strong>er</strong></td><td class="px-3 py-2 text-sm">de lekk<strong>ers</strong></td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">-je (verkleinwoord)</td><td class="px-3 py-2 text-sm">het boek<strong>je</strong></td><td class="px-3 py-2 text-sm">de boek<strong>jes</strong></td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">leenwoorden</td><td class="px-3 py-2 text-sm">de café, de computer</td><td class="px-3 py-2 text-sm">de café<strong>s</strong>, de computer<strong>s</strong></td></tr>
            </tbody>
          </table>
        </div>
        <h3 class="text-lg font-bold mt-6 mb-2">Apostrof‑s bij klinkerbotsing</h3>
        <p>Als het enkelvoud eindigt op een lange klinker (a, o, u, i, y) of een klinker die de uitspraak zou verstoren, schrijf je een apostrof vóór de -s.</p>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">de op<strong>a</strong> → de opa<strong>'s</strong></li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">de bab<strong>y</strong> → de baby<strong>'s</strong></li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">de tax<strong>i</strong> → de taxi<strong>'s</strong></li>
        </ul>
        <p>Woorden op -e met een stomme e krijgen gewoon -s zonder apostrof: <em>de kamer → de kamers</em>.</p>
      `,
    },
    {
      title: "Meervoud op -eren (een kleine, belangrijke groep) 🥚",
      body: `
        <p>Een handvol woorden krijgt <strong>-eren</strong>. Deze moet je uit je hoofd leren:</p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Enkelvoud</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Meervoud</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">het kind</td><td class="px-3 py-2 text-sm">de kinderen</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">het ei</td><td class="px-3 py-2 text-sm">de eieren</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">het blad</td><td class="px-3 py-2 text-sm">de bladeren (of blaren)</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">het kalf</td><td class="px-3 py-2 text-sm">de kalveren</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">het lam</td><td class="px-3 py-2 text-sm">de lammeren</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">het goed</td><td class="px-3 py-2 text-sm">de goederen</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">het been (bot)</td><td class="px-3 py-2 text-sm">de beenderen (naast benen)</td></tr>
            </tbody>
          </table>
        </div>
      `,
    },
    {
      title: "Onregelmatige meervouden – de uitzonderingen ⚡",
      body: `
        <h3 class="text-lg font-bold mt-4 mb-2">Klinkerwisseling in de stam</h3>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Enkelvoud</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Meervoud</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">het schip</td><td class="px-3 py-2 text-sm">de schepen</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">de stad</td><td class="px-3 py-2 text-sm">de steden</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">het lid</td><td class="px-3 py-2 text-sm">de leden</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">de dag</td><td class="px-3 py-2 text-sm">de dagen</td></tr>
            </tbody>
          </table>
        </div>
        <h3 class="text-lg font-bold mt-6 mb-2">Latijnse en Griekse leenwoorden</h3>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Enkelvoud</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Meervoud (oorspr.)</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Vernederlandst</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">het museum</td><td class="px-3 py-2 text-sm">de musea</td><td class="px-3 py-2 text-sm">museums</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">het datum</td><td class="px-3 py-2 text-sm">de data</td><td class="px-3 py-2 text-sm">datums</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">de politicus</td><td class="px-3 py-2 text-sm">de politici</td><td class="px-3 py-2 text-sm">—</td></tr>
            </tbody>
          </table>
        </div>
        <h3 class="text-lg font-bold mt-6 mb-2">Extra j‑klank</h3>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">de koe → de koeien</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">de vlo → de vlooien</li>
        </ul>
      `,
    },
  ],
  rulesTable: [
    {
      rule: "Medeklinkerverdubbeling bij korte klinker",
      structure: "Korte klinker + één medeklinker → verdubbel de medeklinker vóór -en.",
      example: "bus → **bussen**, kat → **katten**, bom → **bommen**.",
      usage: "Zo behoud je de korte klank.",
    },
    {
      rule: "Klinkerverlies bij lange klinker",
      structure: "Lange klinker (aa/ee/oo/uu) + medeklinker → haal één klinkerteken weg vóór -en.",
      example: "boom → **bomen**, been → **benen**, schaap → **schapen**.",
      usage: "Let op: been (bot) → beenderen (uitzondering).",
    },
    {
      rule: "f → v en s → z tussen klinkers",
      structure: "Eindigt het enkelvoud op f of s, dan in het meervoud vaak v of z.",
      example: "raaf → **raven**, huis → **huizen**, prijs → **prijzen**.",
      usage: "Niet bij alle woorden: mens → mensen, dans → dansen.",
    },
    {
      rule: "Meervoud op -s",
      structure: "Woorden op -e, -el, -en, -er, -em, -je en leenwoorden krijgen meestal -s.",
      example: "tafel → **tafels**, boekje → **boekjes**, café → **cafés**.",
      usage: "Apostrof-s bij klinkerbotsing: oma's, baby's, taxi's.",
    },
    {
      rule: "Meervoud op -eren",
      structure: "Kleine vaste groep: kind, ei, blad, kalf, lam, goed, been.",
      example: "kind → **kinderen**, ei → **eieren**, blad → **bladeren**.",
      usage: "Geen regel, gewoon uit het hoofd leren.",
    },
    {
      rule: "Onregelmatige meervouden",
      structure: "Klinkerwisseling, Latijnse vormen of extra j.",
      example: "schip → **schepen**, museum → **musea**, koe → **koeien**.",
      usage: "Leer deze per woord.",
    },
  ],
  callouts: [
    { type: "remember", label: "Onthoud 1", text: "Korte klinker? Verdubbel de medeklinker: **bus → bussen**." },
    { type: "remember", label: "Onthoud 2", text: "Lange klinker? Haal één klinkerteken weg: **boom → bomen**." },
    { type: "remember", label: "Onthoud 3", text: "**f → v** en **s → z** als ze tussen klinkers komen: raaf → raven, huis → huizen." },
    { type: "remember", label: "Onthoud 4", text: "Woorden op -el, -er, -en, -je: meervoud op -s. **tafel → tafels**." },
    { type: "remember", label: "Onthoud 5", text: "Klinkerbotsing? Apostrof‑s: **oma's, baby's, café's**." },
    { type: "remember", label: "Onthoud 6", text: "De -eren-groep: **kind → kinderen, ei → eieren, blad → bladeren**." },
    { type: "remember", label: "Onthoud 7", text: "Onregelmatig: **schip → schepen, stad → steden, museum → musea, koe → koeien**." },
    { type: "remember", label: "Onthoud 8", text: "Alle meervouden krijgen het lidwoord **de**." },
  ],
  commonMistakes: [
    { incorrect: "de boek**s**", correct: "de **boeken**", explanation: "Boek krijgt -en." },
    { incorrect: "de tafel**en**", correct: "de **tafels**", explanation: "Tafel eindigt op -el → -s." },
    { incorrect: "de raaf**en**", correct: "de **raven**", explanation: "f → v tussen klinkers." },
    { incorrect: "de hui**s**en", correct: "de **huizen**", explanation: "s → z tussen klinkers." },
    { incorrect: "de bus**en**", correct: "de **bussen**", explanation: "Korte klinker: medeklinker verdubbelen." },
    { incorrect: "de boom**men**", correct: "de **bomen**", explanation: "Lange klinker: één klinkerteken weglaten." },
    { incorrect: "de kind**s**", correct: "de **kinderen**", explanation: "Kind heeft -eren." },
    { incorrect: "de ei**s**", correct: "de **eieren**", explanation: "Ei heeft -eren." },
    { incorrect: "de stad**s**", correct: "de **steden**", explanation: "Onregelmatig: stad → steden." },
    { incorrect: "de oma**s** (zonder apostrof)", correct: "de **oma's**", explanation: "Apostrof bij a aan het eind." },
  ],
  review: [
    "Grootste groep: meervoud op **-en**.",
    "Korte klinker? Verdubbel de medeklinker (bus → bussen).",
    "Lange klinker? Eén klinkerteken weglaten (boom → bomen).",
    "f → v, s → z als ze tussen klinkers komen (raaf → raven, huis → huizen).",
    "Woorden op -heid: meervoud op **-heden** (waarheid → waarheden).",
    "Woorden op -el, -er, -en, -em, -je en leenwoorden: meervoud op **-s**.",
    "Klinkerbotsing aan het eind? Apostrof voor -s (oma's, café's).",
    "Klein clubje: **-eren** (kind, ei, blad, lam, kalf, goed, been (bot)).",
    "Onregelmatig: klinkerwisseling (schip → schepen, stad → steden), Latijn/Grieks (museum → musea), extra j (koe → koeien).",
    "Alle meervouden krijgen het lidwoord **de**.",
  ],
  qa: [
    {
      question: "Leg uit waarom het meervoud van *bus* **bussen** is en niet *busen*. Gebruik de spellingregel voor korte klinkers.",
      answer: "*Bus* heeft een korte **u** in de beklemtoonde lettergreep, gevolgd door één medeklinker (s). Om de korte klank in het meervoud te behouden, moet de slotmedeklinker verdubbeld worden voordat -en wordt toegevoegd: **bussen**. *Busen* zou een lange u opleveren. Dus: korte klinker → medeklinkerverdubbeling.",
    },
    {
      question: "Wat is het verschil in meervoud tussen *been* (lichaamsdeel) en *been* (bot)? Welke meervoudsvormen horen bij welke betekenis?",
      answer: "*Been* als lichaamsdeel heeft het meervoud **benen** (regelmatig -en met klinkerverlies: ee → e). *Been* als bot heeft het meervoud **beenderen** (met -eren). Beide zijn verschillende meervouden met een eigen betekenis.",
    },
    {
      question: "Waarom schrijf je *oma's* met een apostrof en *tafels* zonder? Geef de precieze regel.",
      answer: "*Oma* eindigt op een lange klinker **a**. Apostrof‑s voorkomt een verkeerde uitspraak (omas). *Tafel* eindigt op een medeklinker (l), dus gewoon -s. Regel: na een lange klinker aan het eind (a, o, u, i, y) schrijf je een apostrof vóór de -s.",
    },
    {
      question: "Leg aan de hand van het woord *raaf* uit wat de f/v-regel inhoudt. Geef nog twee andere voorbeelden van deze regel.",
      answer: "In *raaf* staat de **f** aan het eind. In het meervoud *raven* komt de f tussen klinkers te staan en wordt dan zachter: **v**. Andere voorbeelden: *neef → neven*, *schrijf → schrijven*. De s/z‑regel werkt hetzelfde: *huis → huizen*, *prijs → prijzen*.",
    },
    {
      question: "Noem vier zelfstandige naamwoorden die een meervoud op -eren hebben, en leg uit waarom deze woorden vaak lastig zijn voor anderstaligen.",
      answer: "De belangrijkste zijn: **kind → kinderen**, **ei → eieren**, **blad → bladeren**, **kalf → kalveren**. Ze zijn lastig omdat er geen eenvoudige regel is die voorspelt dat juist deze woorden -eren krijgen. Anderstaligen moeten ze uit het hoofd leren.",
    },
    {
      question: "Geef het meervoud van *museum*, *datum* en *politicus*. Leg uit waarom deze meervouden afwijken van de standaard Nederlandse regels.",
      answer: "*Museum* → **musea** (of museums); *datum* → **data** (of datums); *politicus* → **politici**. Deze woorden komen uit het Latijn of Grieks en hebben hun oorspronkelijke meervoudsvorm behouden. De klassieke vormen op -a en -i bestaan naast vernederlandste vormen op -s.",
    },
    {
      question: "Wat is het meervoud van *schip*? Leg uit wat er precies verandert en waarom deze vorm onregelmatig is ten opzichte van een regelmatig -en-meervoud.",
      answer: "Het meervoud is **schepen**. De klinker verandert van een korte **i** naar een lange **e**, en de uitgang is -en. Bij een regelmatig meervoud zou je *schippen* of *schipen* verwachten. *Schepen* is een historisch gegroeide klankverandering die niet door de standaard spellingregels wordt gedekt; daarom is het een onregelmatig meervoud.",
    },
  ],
};