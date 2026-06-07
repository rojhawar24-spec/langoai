import type { GrammarLesson } from "../../types";

export const lidwoorden: GrammarLesson = {
  id: "nl-lidwoorden-1",
  title: "Lidwoorden: De, Het, Een, Geen & Het Nul‑lidwoord",
  level: 1,
  topic: "Grammatica",
  body: "Leer wanneer je de, het, een, geen en géén lidwoord gebruikt. Met duidelijke regels en handige ezelsbruggetjes.",
  overview:
    "Lidwoorden zijn kleine woordjes, maar superbelangrijk. In deze **ultieme masterclass** leer je alles over **de, het, een, geen** en het **nul‑lidwoord**. Je krijgt alle ijzeren wetten, slimme ezelsbruggetjes en waarschuwingen voor álle valkuilen. Na deze les spreek en schrijf je foutloos Nederlands!",
  anchorSectionId: "basis",
  exercises: [],
  timeExpressionsLabel: "Basisoverzicht lidwoorden 🎯",
  timeExpressions: {
    header: "Soort | Lidwoord | Functie",
    rows: [
      ["**Bepaald lidwoord**", "de, het", "Je praat over een specifiek ding, iets wat al bekend is."],
      ["**Onbepaald lidwoord**", "een", "Je praat over een willekeurig ding, iets nieuws of algemeens."],
      ["**Ontkennend lidwoord**", "geen", "Je ontkent het bestaan van iets (vervangt ‘een’ of meervoud/stof)."],
      ["**Nul‑lidwoord**", "(niets)", "Je gebruikt géén lidwoord in bepaalde situaties (beroep, taal, stof, enz.)."],
    ],
  },
  details: [
    {
      title: "De & het – de bepaalde lidwoorden 🏆",
      body: `
        <p class="mb-3">In het Nederlands heeft elk zelfstandig naamwoord óf <strong>de</strong> óf <strong>het</strong>. Leer elk nieuw woord meteen met het lidwoord. Er zijn ijzeren wetten en pro regels die je kunt onthouden.</p>
        <h3 class="text-lg font-bold mt-4 mb-2">Ijzeren wetten (blind op vertrouwen)</h3>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Regel</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Lidwoord</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Voorbeeld</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Meervoud</td><td class="px-3 py-2 text-sm"><strong>de</strong></td><td class="px-3 py-2 text-sm">de boeken, de huizen, de kinderen</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Verkleinwoorden (-je, -tje, -pje, -kje, -etje)</td><td class="px-3 py-2 text-sm"><strong>het</strong></td><td class="px-3 py-2 text-sm">het boekje, het huisje, het meisje</td></tr>
            </tbody>
          </table>
        </div>
        <h3 class="text-lg font-bold mt-6 mb-2">Pro regels op basis van uitgangen</h3>
        <p class="font-semibold">➡️ <strong>DE-woorden</strong> (mannelijk of vrouwelijk)</p>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">-ing: de woning, de regering</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">-heid, -nis, -schap: de waarheid, de kennis, de wetenschap</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">-tie, -thie, -sie, -iek: de politie, de sympathie, de visie, de muziek</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">-teit, -tuur/-suur: de kwaliteit, de cultuur (maar: <strong>het avontuur</strong>!)</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">-de/-te, -ij: de liefde, de hoogte, de bakkerij</li>
        </ul>
        <p class="font-semibold mt-4">➡️ <strong>HET-woorden</strong> (onzijdig)</p>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">-um, -isme, -ment: het museum, het socialisme, het moment</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">-aat, -sel, -tel: het resultaat, het verschijnsel, het loket</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">Stofnamen/materialen: het water, het goud, het hout</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">Infinitieven als znw: het eten, het slapen, het wachten</li>
        </ul>
        <h3 class="text-lg font-bold mt-6 mb-2">Samenstellingen</h3>
        <p>Het laatste deel bepaalt het lidwoord: <strong>de tafel</strong> + <strong>het blad</strong> → <strong>het tafelblad</strong>; <strong>het boek</strong> + <strong>de kast</strong> → <strong>de boekenkast</strong>.</p>
        <h3 class="text-lg font-bold mt-6 mb-2">Valse vrienden (stampwerk)</h3>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">De-woord</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Het-woord</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">de film</td><td class="px-3 py-2 text-sm">het scherm</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">de tafel</td><td class="px-3 py-2 text-sm">het meubel</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">de foto</td><td class="px-3 py-2 text-sm">het plaatje</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">de straat</td><td class="px-3 py-2 text-sm">het plein</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">de stad</td><td class="px-3 py-2 text-sm">het dorp</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">de brief</td><td class="px-3 py-2 text-sm">het papier</td></tr>
            </tbody>
          </table>
        </div>
        <p>🧠 <strong>Tip:</strong> Leer elk woord als één geheel: <strong>de hond, het paard, de fiets, het boek</strong>.</p>
      `,
    },
    {
      title: "Een – het onbepaald lidwoord 🎲",
      body: `
        <p><strong>Een</strong> is makkelijk. Je gebruikt het voor niet-specifieke zaken, eerste introducties of classificaties. Het werkt voor alle woorden.</p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Voorbeeld</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Uitleg</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Ik zie <strong>een</strong> vogel.</td><td class="px-3 py-2 text-sm">Geen speciale vogel.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Er was <strong>een</strong> koning…</td><td class="px-3 py-2 text-sm">Eerste introductie.</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Dat is <strong>een</strong> hond, geen kat.</td><td class="px-3 py-2 text-sm">Classificatie.</td></tr>
            </tbody>
          </table>
        </div>
        <p><span class="pas-op-highlight">⚠️ PAS OP</span> ‘Een’ kan <strong>nooit</strong> bij meervoud. Fout: “Ik heb een boeken.” Correct: “Ik heb boeken.” (zonder lidwoord) of “Ik heb <strong>geen</strong> boeken.”</p>
      `,
    },
    {
      title: "Geen – het ontkennend lidwoord 🚫",
      body: `
        <p><strong>Geen</strong> is de ontkenning van <strong>een</strong>. Het betekent “niet een”.</p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Zin met een</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Ontkenning met geen</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Ik heb een auto.</td><td class="px-3 py-2 text-sm">Ik heb <strong>geen</strong> auto.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Dat is een leugen.</td><td class="px-3 py-2 text-sm">Dat is <strong>geen</strong> leugen.</td></tr>
            </tbody>
          </table>
        </div>
        <p><strong>Geen</strong> gebruik je ook bij meervoud en ontelbare stoffen waar je normaal géén lidwoord gebruikt:</p>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">Ik heb boeken. → Ik heb <strong>geen</strong> boeken.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">Ik drink melk. → Ik drink <strong>geen</strong> melk.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">Zij heeft geduld. → Zij heeft <strong>geen</strong> geduld.</li>
        </ul>
        <p><span class="pas-op-highlight">⚠️ PAS OP</span> Verwar <strong>geen</strong> niet met <strong>niet</strong>. Zie de volgende uitleg.</p>
      `,
    },
    {
      title: "Niet vs. geen – voorgoed helder ⚖️",
      body: `
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Situatie</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Gebruik</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Voorbeeld</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Werkwoord ontkennen</td><td class="px-3 py-2 text-sm"><strong>niet</strong></td><td class="px-3 py-2 text-sm">Ik loop <strong>niet</strong>.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Bijvoeglijk naamwoord</td><td class="px-3 py-2 text-sm"><strong>niet</strong></td><td class="px-3 py-2 text-sm">Het is <strong>niet</strong> groot.</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Bijwoord / zinsdeel</td><td class="px-3 py-2 text-sm"><strong>niet</strong></td><td class="px-3 py-2 text-sm">Hij komt <strong>niet</strong> vandaag.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Onbepaald zelfst. nw. (een/ø)</td><td class="px-3 py-2 text-sm"><strong>geen</strong></td><td class="px-3 py-2 text-sm">Ik heb <strong>geen</strong> geld.</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Bepaald zelfst. nw. (de/het)</td><td class="px-3 py-2 text-sm"><strong>niet</strong></td><td class="px-3 py-2 text-sm">Ik zie <strong>de hond niet</strong>.</td></tr>
            </tbody>
          </table>
        </div>
        <p>💡 <strong>Ezelsbrug:</strong> als je in het Engels “not a/an” of “no” zou zeggen, gebruik je meestal <strong>geen</strong>. I have <strong>no</strong> car. → Ik heb <strong>geen</strong> auto.</p>
      `,
    },
    {
      title: "Het nul‑lidwoord – als je géén lidwoord gebruikt 🈚️",
      body: `
        <p class="mb-3">In veel situaties laten we het lidwoord helemaal weg. Dit heet het <strong>nul‑lidwoord</strong>.</p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Situatie</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Voorbeeld</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Beroep, functie, rol na <i>zijn, worden, blijven</i></td><td class="px-3 py-2 text-sm">Zij is <strong>arts</strong>. Hij wordt <strong>leraar</strong>.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Nationaliteit, religie na <i>zijn, worden</i></td><td class="px-3 py-2 text-sm">Ik ben <strong>Nederlander</strong>. Zij blijft <strong>boeddhist</strong>.</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Talen na <i>spreken, leren, verstaan</i></td><td class="px-3 py-2 text-sm">Spreek jij <strong>Spaans</strong>? Ik leer <strong>Arabisch</strong>.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">School‑ en studievakken</td><td class="px-3 py-2 text-sm">Zij studeert <strong>wiskunde</strong>.</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Ontelbare stoffen en abstracte begrippen (algemeen)</td><td class="px-3 py-2 text-sm">Drink <strong>water</strong>. We hebben <strong>geld</strong> nodig.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Algemene uitspraken over een hele categorie</td><td class="px-3 py-2 text-sm"><strong>Honden</strong> zijn trouw. <strong>Geld</strong> maakt niet gelukkig.</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Na bezittelijk/aanwijzend voornaamwoord</td><td class="px-3 py-2 text-sm"><strong>mijn</strong> auto, <strong>die</strong> tafel, <strong>dit</strong> bord</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Na telwoord of hoeveelheidswoord</td><td class="px-3 py-2 text-sm">Ik heb <strong>twee</strong> broers. Er is <strong>veel</strong> werk.</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">In vaste uitdrukkingen</td><td class="px-3 py-2 text-sm"><strong>naar huis, op vakantie, aan tafel, in bed, met pensioen</strong></td></tr>
            </tbody>
          </table>
        </div>
        <p class="mt-2">Bij talen als abstract begrip gebruik je wél “het”: <strong>Het Nederlands</strong> is moeilijk. Maar “Ik spreek Nederlands” blijft zonder lidwoord.</p>
      `,
    },
  ],
  rulesTable: [
    {
      rule: "Meervoud → de",
      structure: "Alle meervoudswoorden krijgen **de**.",
      example: "**de boeken**, **de huizen**, **de kinderen**",
      usage: "Dit is een ijzeren regel, geen uitzonderingen.",
    },
    {
      rule: "Verkleinwoord → het",
      structure: "Alle verkleinwoorden (op -je, -tje, -pje, -kje, -etje) krijgen **het**.",
      example: "**het boekje**, **het huisje**, **het meisje**",
      usage: "⚠️ PAS OP: Ook bij personen: 'het meisje'. De vorm wint van de betekenis.",
    },
    {
      rule: "Samenstellingen: laatste deel bepaalt lidwoord",
      structure: "Kijk naar het rechterdeel van het samengestelde woord.",
      example: "**de tafel** + **het blad** → **het tafelblad**; **het boek** + **de kast** → **de boekenkast**",
      usage: "Onfeilbare pro-regel. Altijd het laatste woord volgen.",
    },
    {
      rule: "Geen vs. niet",
      structure: "**geen** = ontkenning van onbepaald zelfstandig naamwoord. **niet** = ontkenning van werkwoord, bijvoeglijk naamwoord, bijwoord of specifiek de/het-woord.",
      example: "Ik heb **geen** auto. Ik zie **de auto niet**.",
      usage: "Als je in het Engels 'no' kunt gebruiken, kies dan 'geen'.",
    },
    {
      rule: "Nul‑lidwoord bij beroep, nationaliteit, taal",
      structure: "Na **zijn, worden, blijven** gebruik je **geen lidwoord**.",
      example: "Zij is **arts**. Hij wordt **leraar**. Ik spreek **Engels**.",
      usage: "Alleen bij nadrukkelijke beschrijving kan 'een': 'Hij is een echte leraar'.",
    },
    {
      rule: "Een nooit bij meervoud",
      structure: "**Een** gebruik je alleen bij enkelvoud.",
      example: "❌ Ik heb een boeken. ✅ Ik heb boeken. / Ik heb **geen** boeken.",
      usage: "Voor meervoud gebruik je geen lidwoord of 'geen' bij ontkenning.",
    },
  ],
  callouts: [
    { type: "remember", label: "Onthoud 1", text: "Meervoud = **de**, verkleinwoord = **het** – altijd, zonder uitzondering." },
    { type: "remember", label: "Onthoud 2", text: "Leer elk nieuw woord met zijn lidwoord: **de hond, het paard, de fiets, het boek**." },
    { type: "remember", label: "Onthoud 3", text: "**Geen** gebruik je bij ontkenning van **een** en bij meervoud of stofnamen zonder lidwoord." },
    { type: "remember", label: "Onthoud 4", text: "**Niet** gebruik je bij werkwoorden, bijvoeglijke naamwoorden en bij specifieke de/het-woorden." },
    { type: "remember", label: "Onthoud 5", text: "Bij beroep, nationaliteit en taal na *zijn/worden*: géén lidwoord. **Ik ben leraar. Zij is Française. Hij spreekt Spaans.**" },
    { type: "remember", label: "Onthoud 6", text: "Samenstellingen: laatste deel bepaalt het lidwoord. **De tafel + het blad = het tafelblad**." },
  ],
  commonMistakes: [
    { incorrect: "De boek", correct: "Het boek", explanation: "Boek is een het-woord." },
    { incorrect: "Het tafel", correct: "De tafel", explanation: "Tafel is een de-woord." },
    { incorrect: "Het huizen", correct: "De huizen", explanation: "Meervoud → altijd de." },
    { incorrect: "De kindje", correct: "Het kindje", explanation: "Verkleinwoord → altijd het." },
    { incorrect: "Ik heb niet auto.", correct: "Ik heb geen auto.", explanation: "Ontkenning van een onbepaald zelfstandig naamwoord = geen." },
    { incorrect: "Ik heb een boeken.", correct: "Ik heb boeken.", explanation: "‘Een’ niet gebruiken voor meervoud." },
    { incorrect: "Ik drink de melk (algemeen).", correct: "Ik drink melk.", explanation: "Algemene stof → nul‑lidwoord." },
    { incorrect: "Zij spreekt het Engels.", correct: "Zij spreekt Engels.", explanation: "Taalvaardigheid → nul‑lidwoord." },
    { incorrect: "Ik ben een arts. (kan, maar neutraal is zonder)", correct: "Ik ben arts.", explanation: "Beroep standaard zonder lidwoord." },
  ],
  review: [
    "**De** = bepaald (specifiek) + meervoud.",
    "**Het** = bepaald onzijdig + verkleinwoorden.",
    "**Een** = onbepaald, enkelvoud, alle woorden.",
    "**Geen** = ontkenning van een, meervoud of stof zonder lidwoord.",
    "**Niet** = ontkenning van werkwoord, bijv.nw., bijwoord, specifiek de/het-woord.",
    "**Nul‑lidwoord** = bij beroep, nationaliteit, taal, stof, algemene waarheden, na bezittelijk/aanwijzend vnw., na hoeveelheidswoord, vaste uitdrukkingen.",
    "Leer elk nieuw woord met lidwoord: **de hond, het paard, de fiets, het boek**.",
    "Verkleinwoord = het; meervoud = de (altijd!).",
    "Samenstellingen: het laatste deel bepaalt.",
  ],
  qa: [
    {
      question: "Waarom is 'het meisje' correct en 'de meisje' fout, terwijl 'meisje' over een vrouwelijk persoon gaat?",
      answer: "Omdat 'meisje' een verkleinwoord is (het eindigt op -je). De absolute regel is: **verkleinwoorden zijn altijd onzijdig** en krijgen dus **het**. Het basiswoord is 'de meid' (vrouwelijk), maar de verkleinvorm wint het altijd van alle andere regels.",
    },
    {
      question: "Je ziet het woord 'vereniging'. Welk lidwoord krijgt het en waarom? Gebruik de pro regels.",
      answer: "'Vereniging' eindigt op **-ing**. Volgens de uitgangregel zijn woorden op -ing **de-woorden**. Dus het is **de vereniging**. Andere voorbeelden: de woning, de regering.",
    },
    {
      question: "Je maakt een samenstelling van 'de fiets' en 'het slot'. Wat is het lidwoord van 'fietsslot'? Verklaar de pro regel.",
      answer: "Het lidwoord van 'fietsslot' is **het**. De pro regel luidt: **bij samenstellingen bepaalt het laatste deel het lidwoord**. Het laatste deel is 'slot', en dat is een het-woord (het slot). Dus het wordt 'het fietsslot', ook al is 'fiets' een de-woord.",
    },
    {
      question: "Waarom zeg je 'Ik ben leraar' zonder lidwoord, maar 'Ik heb een leraar' met 'een'? Leg het verschil uit.",
      answer: "In 'Ik ben leraar' wordt het beroep als classificatie gebruikt. Het werkwoord 'zijn' koppelt het onderwerp aan een eigenschap of rol, en dan gebruiken we het **nul‑lidwoord** voor beroepen. In 'Ik heb een leraar' gaat het om bezit van een niet-specifieke leraar (onbepaald), dus komt er **een**.",
    },
    {
      question: "Leg uit waarom 'Ik heb geen geld' correct is, en of 'Ik heb niet geld' ooit goed kan zijn.",
      answer: "'Ik heb geen geld' is correct omdat 'geld' een niet-telbaar zelfstandig naamwoord is dat je ontkent. In zulke gevallen gebruik je **geen**. 'Ik heb niet geld' is fout in standaardtaal, tenzij je 'geld' specifiek maakt: 'Ik heb het geld niet.' Dan ontkent 'niet' het werkwoord en is 'het geld' een bepaald lijdend voorwerp.",
    },
    {
      question: "Je hoort iemand zeggen: 'Ik drink de melk niet.' Wanneer is die zin wél correct, en wat is het verschil met 'Ik drink geen melk'?",
      answer: "'Ik drink de melk niet' is correct als je het hebt over specifieke melk die al bekend is, bijvoorbeeld de melk die op tafel staat. 'Ik drink geen melk' is een algemene uitspraak: je drinkt in het algemeen nooit melk. Het verschil zit in specificiteit (bepaald vs. algemeen).",
    },
    {
      question: "Waarom is 'de huizen' het meervoud van 'het huis', en waarom is 'de boekje' fout? Combineer de regels voor meervoud en verkleinwoorden.",
      answer: "Voor het meervoud van 'het huis' geldt de regel: alle meervouden krijgen **de**. Dus 'de huizen', ook al is het enkelvoud 'het huis'. 'De boekje' is fout omdat 'boekje' een verkleinwoord is, en alle verkleinwoorden krijgen **het**. Het juiste is dus 'het boekje'. De twee regels (meervoud = de, verkleinwoord = het) staan los van elkaar.",
    },
  ],
};