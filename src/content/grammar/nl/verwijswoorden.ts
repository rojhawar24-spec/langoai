import type { GrammarLesson } from "../../types";

export const verwijswoorden: GrammarLesson = {
  id: "nl-verwijswoorden-1",
  title: "Verwijswoorden: hij/zij/het, deze/die/dit/dat",
  level: 1,
  topic: "Grammatica",
  body: "Leer alles over verwijswoorden: wanneer gebruik je hij, zij of het? En wanneer deze, die, dit of dat? Met alle regels, ezelsbruggetjes en voorbeelden.",
  overview:
    "Je wilt niet steeds hetzelfde zelfstandig naamwoord herhalen. Daarom gebruik je verwijswoorden. In deze **ultieme masterclass** leer je alles over de persoonlijke verwijswoorden **hij, zij, het** en de aanwijzende verwijswoorden **deze, die, dit, dat**. Je krijgt alle pro regels, valkuilen en zeven superslimme oefenvragen. Na deze les kies jij blindelings het juiste verwijswoord!",
  anchorSectionId: "basis",
  exercises: [],
  timeExpressionsLabel: "Overzicht verwijswoorden 🔄",
  timeExpressions: {
    header: "Soort znw | Geslacht | Lidwoord | Verwijswoord (onderwerp) | Objectvorm | Dichtbij aanwijz. | Ver weg aanwijz.",
    rows: [
      ["de-woord mannelijk", "m", "de", "hij", "hem", "deze", "die"],
      ["de-woord vrouwelijk", "v", "de", "zij (ze)", "haar", "deze", "die"],
      ["het-woord onzijdig", "o", "het", "het", "het", "dit", "dat"],
      ["meervoud (alle)", "–", "de", "zij (ze)", "hen/ze", "deze", "die"],
    ],
  },
  details: [
    {
      title: "Wat zijn verwijswoorden? 🤔",
      body: `
        <p>Verwijswoorden zijn kleine woordjes die terugwijzen naar een eerder genoemd zelfstandig naamwoord. Zonder deze woorden moet je telkens het hele zelfstandig naamwoord herhalen.</p>
        <p><strong>Zonder verwijswoord:</strong> De auto is rood. De auto staat voor de deur. De auto is van mij. (Klinkt als een robot.)</p>
        <p><strong>Met verwijswoord:</strong> De auto is rood. <strong>Hij</strong> staat voor de deur. <strong>Die</strong> is van mij. (Natuurlijk Nederlands.)</p>
        <p>De belangrijkste verwijswoorden zijn:</p>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">🔹 Persoonlijke verwijswoorden: hij, zij (ze), het, hem, haar</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">🔹 Aanwijzende verwijswoorden: deze, die, dit, dat</li>
        </ul>
        <p>Het correct gebruiken draait om het <strong>grammaticaal geslacht</strong> en de <strong>afstand</strong> (dichtbij of veraf).</p>
      `,
    },
    {
      title: "Hij, zij, het – persoonlijke verwijswoorden (onderwerp) 🧑‍🤝‍🧑",
      body: `
        <p><strong>Hij</strong>, <strong>zij</strong> (of <strong>ze</strong>) en <strong>het</strong> gebruik je als onderwerp van een nieuwe zin. Welke je kiest, hangt af van het grammaticaal geslacht.</p>
        <h3 class="text-lg font-bold mt-4 mb-2">Basisregel</h3>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Geslacht</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Lidwoord</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Verwijswoord</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Voorbeeld</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Mannelijk</td><td class="px-3 py-2 text-sm">de</td><td class="px-3 py-2 text-sm"><strong>hij</strong></td><td class="px-3 py-2 text-sm">De stoel is oud. <strong>Hij</strong> moet weg.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Vrouwelijk</td><td class="px-3 py-2 text-sm">de</td><td class="px-3 py-2 text-sm"><strong>zij</strong> (ze)</td><td class="px-3 py-2 text-sm">De waarheid is hard. <strong>Zij</strong> komt altijd uit.</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Onzijdig</td><td class="px-3 py-2 text-sm">het</td><td class="px-3 py-2 text-sm"><strong>het</strong></td><td class="px-3 py-2 text-sm">Het boek is mooi. <strong>Het</strong> ligt op tafel.</td></tr>
            </tbody>
          </table>
        </div>
        <h3 class="text-lg font-bold mt-6 mb-2">Hoe weet je of een de-woord mannelijk of vrouwelijk is?</h3>
        <p><strong>Pro regel 1: Natuurlijk geslacht (personen en dieren).</strong> Het biologische geslacht bepaalt: de vader → hij, de moeder → zij. Bij veel dierennamen is de standaard mannelijk (de hond, de kat → hij).</p>
        <p><strong>Pro regel 2: Uitgangen die vrouwelijk zijn.</strong> Ken deze uit je hoofd:</p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Uitgang</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Voorbeelden</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Verwijswoord</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">-heid</td><td class="px-3 py-2 text-sm">de waarheid, de vrijheid</td><td class="px-3 py-2 text-sm">zij</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">-nis</td><td class="px-3 py-2 text-sm">de kennis, de geschiedenis</td><td class="px-3 py-2 text-sm">zij</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">-ing</td><td class="px-3 py-2 text-sm">de regering, de vereniging</td><td class="px-3 py-2 text-sm">zij</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">-tie / -thie</td><td class="px-3 py-2 text-sm">de politie, de sympathie</td><td class="px-3 py-2 text-sm">zij</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">-teit</td><td class="px-3 py-2 text-sm">de kwaliteit, de universiteit</td><td class="px-3 py-2 text-sm">zij</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">-schap (meestal)</td><td class="px-3 py-2 text-sm">de vriendschap, de wetenschap</td><td class="px-3 py-2 text-sm">zij (uitz.: het moederschap)</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">-ij</td><td class="px-3 py-2 text-sm">de bakkerij, de partij</td><td class="px-3 py-2 text-sm">zij</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">-de, -te</td><td class="px-3 py-2 text-sm">de liefde, de hoogte</td><td class="px-3 py-2 text-sm">zij</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">-uur / -suur (vaak)</td><td class="px-3 py-2 text-sm">de cultuur, de natuur</td><td class="px-3 py-2 text-sm">zij (uitz.: het avontuur)</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">-iek, -theek</td><td class="px-3 py-2 text-sm">de muziek, de bibliotheek</td><td class="px-3 py-2 text-sm">zij</td></tr>
            </tbody>
          </table>
        </div>
        <p><strong>Pro regel 3: Traditioneel vrouwelijke woorden.</strong> De zon, de maan, de aarde, de kerk, de regering, de stad, de natuur, de taal – gebruik <strong>zij/haar</strong> in verzorgd Nederlands.</p>
        <p><strong>Pro regel 4: De rest is mannelijk.</strong> De stoel, de tafel, de auto, de trein, de jas – gebruik <strong>hij/hem/zijn</strong>.</p>
        <h3 class="text-lg font-bold mt-6 mb-2">Objectvormen: hem, haar, het</h3>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Geslacht</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Onderwerp</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Object</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Mannelijk</td><td class="px-3 py-2 text-sm">hij</td><td class="px-3 py-2 text-sm"><strong>hem</strong></td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Vrouwelijk</td><td class="px-3 py-2 text-sm">zij</td><td class="px-3 py-2 text-sm"><strong>haar</strong></td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Onzijdig</td><td class="px-3 py-2 text-sm">het</td><td class="px-3 py-2 text-sm"><strong>het</strong></td></tr>
            </tbody>
          </table>
        </div>
        <p>Voorbeelden: De stoel? Ik zie <strong>hem</strong>. De waarheid? Ik vertel <strong>haar</strong>. Het boek? Ik lees <strong>het</strong>.</p>
        <p class="mt-2">Bezittelijk: mannelijk/onzijdig → <strong>zijn</strong>, vrouwelijk → <strong>haar</strong>. <em>De regering presenteert haar plannen. Het meisje is haar pop kwijt (natuurlijk geslacht).</em></p>
      `,
    },
    {
      title: "Deze, die, dit, dat – aanwijzende verwijswoorden 👉",
      body: `
        <p>Gebruik deze woorden om dingen aan te wijzen of te benadrukken. Ze geven aan of iets <strong>dichtbij</strong> of <strong>ver weg</strong> is. De keuze hangt af van het lidwoord (de/het) en het getal.</p>
        <h3 class="text-lg font-bold mt-4 mb-2">Basisregel</h3>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Soort znw</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Dichtbij</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Ver weg</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">de-woord (enkelvoud, m/v)</td><td class="px-3 py-2 text-sm"><strong>deze</strong></td><td class="px-3 py-2 text-sm"><strong>die</strong></td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">het-woord (enkelvoud, o)</td><td class="px-3 py-2 text-sm"><strong>dit</strong></td><td class="px-3 py-2 text-sm"><strong>dat</strong></td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">meervoud (alle woorden)</td><td class="px-3 py-2 text-sm"><strong>deze</strong></td><td class="px-3 py-2 text-sm"><strong>die</strong></td></tr>
            </tbody>
          </table>
        </div>
        <p>Voorbeelden:</p>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>Deze</strong> stoel (dichtbij) vs. <strong>die</strong> stoel (ver).</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>Dit</strong> boek (dichtbij) vs. <strong>dat</strong> boek (ver).</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>Deze</strong> boeken (dichtbij) vs. <strong>die</strong> boeken (ver).</li>
        </ul>
        <p class="mt-3">Zelfstandig gebruikt: Welke stoel? <strong>Deze</strong> (de-woord) is van mij, <strong>die</strong> (de-woord) is van jou. Welk boek? <strong>Dit</strong> (het-woord) is leuk, <strong>dat</strong> (het-woord) is saai.</p>
        <p><span class="pas-op-highlight">⚠️ PAS OP</span> Verwijs je naar een hele zin of situatie, dan gebruik je <strong>dit</strong> of <strong>dat</strong>: <em>Het regent. Dat is jammer.</em></p>
      `,
    },
    {
      title: "Samenspel tussen beide soorten verwijswoorden 🔗",
      body: `
        <p>In een vlotte tekst combineer je ze vaak: eerst aanwijzend, dan persoonlijk.</p>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>Dit</strong> boek is spannend. <strong>Het</strong> gaat over een detective. (het-woord)</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>Die</strong> stoel is antiek. <strong>Hij</strong> komt uit Frankrijk. (de-woord, mannelijk)</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>Deze</strong> regering is nieuw. <strong>Zij</strong> heeft grote plannen. (vrouwelijk)</li>
        </ul>
      `,
    },
    {
      title: "Diepere valkuilen – hier struikelen zelfs gevorderden ⚠️",
      body: `
        <ul class="my-2 space-y-2 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-rose-400 dark:before:bg-rose-500 text-slate-700 dark:text-slate-300"><strong>Valkuil 1:</strong> ‘Het’ gebruiken voor een de-woord.<br>❌ De stoel is oud. Het moet weg.<br>✅ De stoel is oud. <strong>Hij</strong> moet weg.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-rose-400 dark:before:bg-rose-500 text-slate-700 dark:text-slate-300"><strong>Valkuil 2:</strong> ‘Hij’ voor een vrouwelijk woord met duidelijke uitgang.<br>❌ De regering heeft zijn plannen bekendgemaakt.<br>✅ De regering heeft <strong>haar</strong> plannen bekendgemaakt.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-rose-400 dark:before:bg-rose-500 text-slate-700 dark:text-slate-300"><strong>Valkuil 3:</strong> ‘Deze’ voor het-woord of ‘dit’ voor de-woord.<br>❌ Deze boek / dit stoel<br>✅ <strong>Dit</strong> boek / <strong>deze</strong> stoel</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-rose-400 dark:before:bg-rose-500 text-slate-700 dark:text-slate-300"><strong>Valkuil 4:</strong> ‘Die’ voor een het-woord dat ver weg is.<br>❌ Die huis<br>✅ <strong>Dat</strong> huis</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-rose-400 dark:before:bg-rose-500 text-slate-700 dark:text-slate-300"><strong>Valkuil 5:</strong> Bij meervoud ‘dit/dat’ gebruiken.<br>❌ Dit boeken / dat kinderen<br>✅ <strong>Deze</strong> boeken / <strong>die</strong> kinderen</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-rose-400 dark:before:bg-rose-500 text-slate-700 dark:text-slate-300"><strong>Valkuil 6:</strong> Onzijdige woorden in de objectvorm ‘hem’ geven.<br>❌ Het boek? Ik heb hem gelezen.<br>✅ Het boek? Ik heb <strong>het</strong> gelezen.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-rose-400 dark:before:bg-rose-500 text-slate-700 dark:text-slate-300"><strong>Valkuil 7:</strong> Naar personen verwijzen met het grammaticale verwijswoord in plaats van het natuurlijke. Bij <em>het meisje</em> grammaticaal <strong>het</strong>, maar vaak <strong>zij/haar</strong> om natuurlijk geslacht. In formele teksten ‘het’, maar ‘haar’ is vaak ook geaccepteerd.</li>
        </ul>
      `,
    },
  ],
  rulesTable: [
    {
      rule: "Persoonlijk verwijswoord op basis van geslacht",
      structure: "Mannelijk → **hij**, vrouwelijk → **zij**, onzijdig → **het**.",
      example: "De stoel (m) → **hij**. De regering (v) → **zij**. Het boek (o) → **het**.",
      usage: "Gebruik de uitgangsregels en het natuurlijk geslacht om het geslacht te bepalen.",
    },
    {
      rule: "Objectvormen: hem, haar, het",
      structure: "Na voorzetsel of als lijdend voorwerp: mannelijk → **hem**, vrouwelijk → **haar**, onzijdig → **het**.",
      example: "Ik zie **hem** (de stoel). Ik vertel **haar** (de waarheid). Ik lees **het** (het boek).",
      usage: "In spreektaal vaak 'm en d'r, maar schrijf die alleen informeel.",
    },
    {
      rule: "Aanwijzend: deze/die voor de-woorden en meervoud, dit/dat voor het-woorden enkelvoud",
      structure: "De-woord / meervoud → **deze** (dichtbij) / **die** (ver). Het-woord enkelvoud → **dit** (dichtbij) / **dat** (ver).",
      example: "**Deze** stoel (dichtbij), **die** tafel (ver). **Dit** boek (dichtbij), **dat** huis (ver).",
      usage: "Meervoud is altijd deze/die, ongeacht het enkelvoud.",
    },
    {
      rule: "Zelfstandig gebruik",
      structure: "Als je het zelfstandig naamwoord weglaat, blijf je dezelfde regels volgen.",
      example: "Welke stoel? **Deze** (de-woord). Welk boek? **Dit** (het-woord). Welke boeken? **Deze** (meervoud).",
      usage: "Het aanwijzend voornaamwoord verraadt het geslacht van het bedoelde voorwerp.",
    },
    {
      rule: "Verwijzen naar hele zinnen of situaties",
      structure: "Gebruik **dit** of **dat**.",
      example: "Het regent. **Dat** is jammer. Ik heb gewonnen. **Dit** had ik niet verwacht.",
      usage: "Ook hier nabijheid een rol, maar vaak wordt 'dat' gebruikt.",
    },
  ],
  callouts: [
    { type: "remember", label: "Onthoud 1", text: "De-woorden: mannelijk = **hij**, vrouwelijk = **zij**. Gebruik de uitgangsregels en traditionele lijst." },
    { type: "remember", label: "Onthoud 2", text: "Het-woorden: altijd **het** (onderwerp en object). Bezittelijk: **zijn**." },
    { type: "remember", label: "Onthoud 3", text: "Aanwijzend: **de-woord/meervoud** → deze/die; **het-woord enkelvoud** → dit/dat." },
    { type: "remember", label: "Onthoud 4", text: "Dichtbij = deze/dit, ver weg = die/dat." },
    { type: "remember", label: "Onthoud 5", text: "Meervoud altijd **deze/die**, ook als het enkelvoud het was." },
    { type: "remember", label: "Onthoud 6", text: "Objectvorm: hem (m), haar (v), het (o)." },
    { type: "remember", label: "Onthoud 7", text: "Verwijs je naar een hele zin? Gebruik dan **dit/dat**." },
  ],
  commonMistakes: [
    { incorrect: "De stoel, het is kapot.", correct: "De stoel, hij is kapot.", explanation: "Stoel is mannelijk → hij." },
    { incorrect: "De regering, hij heeft plannen.", correct: "De regering, zij heeft plannen.", explanation: "Regering is vrouwelijk → zij." },
    { incorrect: "Deze boek is mooi.", correct: "Dit boek is mooi.", explanation: "Boek = het-woord → dit." },
    { incorrect: "Dit stoel is hard.", correct: "Deze stoel is hard.", explanation: "Stoel = de-woord → deze." },
    { incorrect: "Die huis daar.", correct: "Dat huis daar.", explanation: "Huis = het-woord, ver weg → dat." },
    { incorrect: "De waarheid? Ik vertel hem.", correct: "De waarheid? Ik vertel haar.", explanation: "Waarheid is vrouwelijk → haar." },
    { incorrect: "Het kind? Ik zie hem.", correct: "Het kind? Ik zie het.", explanation: "Onzijdig → het." },
  ],
  review: [
    "**Hij** = mannelijke de-woorden (en mannelijke personen/dieren).",
    "**Zij** = vrouwelijke de-woorden (uitgangen: -heid, -ing, -tie, etc. + traditionele woorden).",
    "**Het** = alle het-woorden.",
    "Object: mannelijk → **hem**, vrouwelijk → **haar**, onzijdig → **het**.",
    "Aanwijzend: **de-woord / meervoud** → deze/die. **het-woord enkelvoud** → dit/dat.",
    "Dichtbij → deze/dit, ver weg → die/dat.",
    "Meervoud altijd **deze/die**, ongeacht het enkelvoud.",
    "Verwijzen naar een hele situatie → **dit/dat**.",
  ],
  qa: [
    {
      question: "Leg uit waarom we zeggen 'De regering heeft haar plannen gepresenteerd' en niet 'zijn plannen'. Betrek de uitgangsregel voor vrouwelijk geslacht en geef nog twee vergelijkbare voorbeelden.",
      answer: "‘Regering’ eindigt op -ing, een uitgang die wijst op een vrouwelijk zelfstandig naamwoord. Daarom is het bezittelijk voornaamwoord **haar**. Andere voorbeelden: *De vereniging en haar leden*, *De politie en haar taken*.",
    },
    {
      question: "Je staat in een meubelwinkel en wijst naar een tafel vlakbij en een kast aan de andere kant van de ruimte. Welke aanwijzende voornaamwoorden gebruik je? En waarom?",
      answer: "‘Tafel’ is een de-woord en dichtbij → **deze tafel**. ‘Kast’ is ook een de-woord maar ver weg → **die kast**. De regel: de-woord + dichtbij = deze; de-woord + ver = die.",
    },
    {
      question: "Lees de zin: 'Het meisje fietste naar school. Het was blij.' Is deze zin formeel correct? Leg uit waarom sommige mensen liever 'Zij was blij' gebruiken, en wat de officiële regel zegt.",
      answer: "Grammaticaal is ‘meisje’ een verkleinwoord en dus onzijdig. Formeel is **het** correct. Omdat een meisje vrouwelijk is, gebruiken veel mensen **zij**. In moderne taalgidsen mag je voor personen vaak het natuurlijk geslacht gebruiken, dus **zij** is ook goed. In formele teksten kan **het** de veiligste keuze zijn.",
    },
    {
      question: "Waarom is 'Ik heb het boek gelezen. Hij is spannend.' fout? Corrigeer de fout en leg uit waarom juist dit zo vaak misgaat.",
      answer: "‘Boek’ is een het-woord, dus het verwijswoord moet **het** zijn. Correct: *Ik heb het boek gelezen. Het is spannend.* De fout komt doordat veel anderstaligen ‘hij’ als standaard zien, maar dat mag alleen bij mannelijke de-woorden.",
    },
    {
      question: "Bedenk een kort gesprek waarin 'dit' zelfstandig gebruikt wordt. Leg uit waarnaar het verwijst en hoe je weet of het goed is.",
      answer: "Stel, je houdt een kopje vast en zegt: *Dit is mijn favoriete kopje.* ‘Dit’ gebruik je omdat ‘kopje’ een het-woord is (verkleinwoord). Als je naar een mok (de mok) zou wijzen, zeg je: *Deze is mijn favoriete mok.* Het verwijswoord verraadt het geslacht.",
    },
    {
      question: "Leg uit waarom 'die' in 'Die huizen zijn oud' correct is, maar in 'Die huis is oud' niet. Wat moet je veranderen en waarom?",
      answer: "‘Huizen’ is meervoud, en bij meervoud gebruik je altijd **die** (ver weg) of **deze** (dichtbij). ‘Huis’ is enkelvoud en een het-woord. Bij enkelvoudige het-woorden is **dat** (ver weg) of **dit** (dichtbij) verplicht. Daarom is ‘Dat huis is oud’ correct.",
    },
    {
      question: "Combineer een aanwijzend voornaamwoord en een persoonlijk voornaamwoord in een logisch verhaaltje van twee zinnen, met een de-woord (bijvoorbeeld 'film') en een het-woord (bijvoorbeeld 'scherm'). Zorg dat alle verwijswoorden kloppen.",
      answer: "*Die film daar is erg goed. Hij heeft een prachtig einde. Dit scherm hier is te klein. Het geeft niet genoeg beeld.* ‘Film’ is de-woord (mannelijk) → ver weg = **die**, verwijs met **hij**. ‘Scherm’ is het-woord → dichtbij = **dit**, verwijs met **het**.",
    },
  ],
};