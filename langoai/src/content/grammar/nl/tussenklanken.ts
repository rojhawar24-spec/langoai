import type { GrammarLesson } from "../../types";

export const tussenklanken: GrammarLesson = {
  id: "nl-tussenklanken-1",
  title: "Tussenklanken in Samenstellingen: -n-, -s-, -e-",
  level: 2,
  topic: "Tussenklanken", // [Sch] Schrijven – spelling
  body: "Leer wanneer je -en-, -s- of -e- als tussenklank schrijft in samenstellingen. Met duidelijke regels, veel voorbeelden en handige ezelsbruggetjes.",
  overview:
    "In samenstellingen zoals *pannenkoek* en *stadscentrum* komt vaak een extra klank. In deze **supercomplete, heldere les** ontdek je precies wanneer je **-en-**, **-s-** of **-e-** gebruikt. Je leert de meervoudsregel voor -en-, de genitief- en achtervoegselregel voor -s-, en de historische uitzonderingen met -e-. Met een uitgebreide tabel, PAS OP‑waarschuwingen en 7 ijzersterke oefenvragen schrijf jij voortaan elke samenstelling foutloos.",
  anchorSectionId: "wat",
  exercises: [],
  timeExpressionsLabel: "Welke tussenklank kies je? 📊",
  timeExpressions: {
    header: "Situatie | Tussenklank | Voorbeelden",
    rows: [
      ["Eerste deel heeft meervoud op -en", "**-en-**", "pannenkoek, krantenbericht, vrouwenhuis"],
      ["Hoorbare -s- of achtervoegsel -ing, -heid, -schap, -dom e.d.", "**-s-**", "stadscentrum, overheidspapier, vrijheidswens"],
      ["Historisch vrouwelijke woorden (zon, maan, hel)", "**-e-** (uitzondering)", "zonneschijn, maneschijn, hellevaart"],
      ["Eerste deel heeft alleen meervoud op -s", "geen tussenklank of -s- indien hoorbaar", "tafellaken, meisjeskamer"],
      ["Eerste deel eindigt op sisklank (s, z, ch)", "geen extra -s-", "politiebureau, chefkok"],
    ],
  },
  details: [
    {
      title: "Wat zijn tussenklanken en waarom moet je ze kennen? 🎯",
      body: `
        <p>Een <strong>samenstelling</strong> is een woord dat bestaat uit twee of meer losse woorden die aan elkaar zijn geplakt, zoals <em>keukentafel</em> (keuken + tafel) of <em>stadscentrum</em> (stad + centrum). Soms komt er een extra klank tussen: <strong>-e-</strong>, <strong>-en-</strong> of <strong>-s-</strong>. Deze noemen we <strong>tussenklanken</strong>.</p>
        <p>Een verkeerde tussenklank kan een woord onnatuurlijk laten klinken of zelfs de betekenis veranderen. Denk aan <em>pannenkoek</em> (met -en-) versus <em>pannekoek</em> (fout).</p>
      `,
    },
    {
      title: "De tussenklank -en- – de meervoudsregel 📚",
      body: `
        <h3 class="text-lg font-bold mt-4 mb-2">Hoofdregel</h3>
        <p>De meest voorkomende tussenklank is <strong>-en-</strong>. Je schrijft -en- als het <strong>eerste deel</strong> van de samenstelling een zelfstandig naamwoord is dat in het meervoud op <strong>-en</strong> eindigt.</p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Eerste deel</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Meervoud</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Samenstelling</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">pan</td><td class="px-3 py-2 text-sm">pannen</td><td class="px-3 py-2 text-sm"><strong>pannenkoek</strong></td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">krant</td><td class="px-3 py-2 text-sm">kranten</td><td class="px-3 py-2 text-sm"><strong>krantenbericht</strong></td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">hond</td><td class="px-3 py-2 text-sm">honden</td><td class="px-3 py-2 text-sm"><strong>hondenbelasting</strong></td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">vrouw</td><td class="px-3 py-2 text-sm">vrouwen</td><td class="px-3 py-2 text-sm"><strong>vrouwenhuis</strong></td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">boek</td><td class="px-3 py-2 text-sm">boeken</td><td class="px-3 py-2 text-sm"><strong>boekenplank</strong></td></tr>
            </tbody>
          </table>
        </div>
        <p><span class="pas-op-highlight">⚠️ PAS OP</span> Als het eerste deel twee meervouden heeft (‑en én ‑s), gebruik je de ‑en‑vorm. Bijvoorbeeld: <strong>groentensoep</strong> (groente → groenten/groentes), <strong>gemeenteraad</strong>.</p>
        <p>🧠 <strong>Ezelsbrug:</strong> Hoor je een meervoud op ‑en in het eerste deel, schrijf dat meervoud dan als tussenklank. Dus <em>pannen</em> + <em>koek</em> = <strong>pannenkoek</strong>.</p>
      `,
    },
    {
      title: "De tussenklank -s- – de genitief- en klankregel 🏛️",
      body: `
        <h3 class="text-lg font-bold mt-4 mb-2">Wanneer schrijf je -s-?</h3>
        <p>De tussenklank <strong>-s-</strong> schrijf je in de volgende gevallen:</p>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>Als de -s- hoorbaar is</strong> in de uitspraak (stadscentrum, dorpsschool).</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>Bij achtervoegsels</strong> zoals -ing, -heid, -schap, -dom, -teit, -tie (regeringsleider, vrijheidswens, gemeenschapszin).</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>Bij een bezits- of genitiefrelatie</strong> ("van de/het") (koninkrijksdeel, liefdesbrief).</li>
        </ul>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Samenstelling</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Eerste deel</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Waarom -s-?</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">stadscentrum</td><td class="px-3 py-2 text-sm">stad</td><td class="px-3 py-2 text-sm">Hoorbare -s-; centrum van de stad.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">overheidspapier</td><td class="px-3 py-2 text-sm">overheid</td><td class="px-3 py-2 text-sm">Achtervoegsel -heid → -s-.</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">liefdesbrief</td><td class="px-3 py-2 text-sm">liefde</td><td class="px-3 py-2 text-sm">Genitief; hoorbare -s-.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">dorpsschool</td><td class="px-3 py-2 text-sm">dorp</td><td class="px-3 py-2 text-sm">Hoorbare -s- (dubbel s).</td></tr>
            </tbody>
          </table>
        </div>
        <p><span class="pas-op-highlight">⚠️ PAS OP</span> Als het eerste deel al op een sisklank eindigt (s, z, ch), voeg je <strong>geen extra -s-</strong> toe. Bijvoorbeeld: <strong>politiebureau</strong> (politie+bureau), <strong>chefkok</strong>. Ook bij <strong>stationstraat</strong> (station+straat) schrijf je officieel één s, omdat de -s- niet hoorbaar is.</p>
      `,
    },
    {
      title: "De tussenklank -e- – zeldzame historische uitzonderingen 🌸",
      body: `
        <p>De tussenklank <strong>-e-</strong> komt nog maar in een klein aantal woorden voor, meestal uit de oude vrouwelijke genitief. Je hoeft deze woorden alleen te herkennen; je voegt zelf geen -e- in.</p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Samenstelling</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Eerste deel</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Uitleg</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm"><strong>zonneschijn</strong></td><td class="px-3 py-2 text-sm">zon</td><td class="px-3 py-2 text-sm">Vrouwelijk; historische -e-.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm"><strong>maneschijn</strong></td><td class="px-3 py-2 text-sm">maan</td><td class="px-3 py-2 text-sm">Vrouwelijk; historische -e-.</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm"><strong>hellevaart</strong></td><td class="px-3 py-2 text-sm">hel</td><td class="px-3 py-2 text-sm">Vrouwelijk; historische -e-.</td></tr>
            </tbody>
          </table>
        </div>
        <p><span class="pas-op-highlight">⚠️ PAS OP</span> Dit zijn uitzonderingen. Bij de meeste andere woorden gebruik je <strong>-en-</strong> of <strong>-s-</strong>, afhankelijk van de regels. De vorm <em>zonnenschijn</em> is dus fout.</p>
      `,
    },
  ],
  rulesTable: [
    {
      rule: "-en- na een eerste deel met meervoud op -en",
      structure: "Als het eerste deel een zelfstandig naamwoord is met een meervoud op **-en**, schrijf je die **-en-** als tussenklank.",
      example: "pannenkoek, krantenbericht, boekenplank",
      usage: "Ook als het woord twee meervoudsvormen heeft (‑en en ‑s), kies je ‑en‑.",
    },
    {
      rule: "-s- bij hoorbare -s- of achtervoegsels als -ing, -heid",
      structure: "Schrijf **-s-** als je die hoort, of als het eerste deel eindigt op een achtervoegsel zoals -ing, -heid, -schap, -dom, -teit.",
      example: "stadscentrum, overheidspapier, regeringsleider",
      usage: "Bij een bezitsrelatie (‘van de/het’) gebruik je ook vaak -s-.",
    },
    {
      rule: "Geen extra -s- na een sisklank",
      structure: "Eindigt het eerste deel op s, z of ch? Voeg dan **geen extra -s-** toe.",
      example: "politiebureau, chefkok, stationstraat",
      usage: "Twijfel je? Spreek het woord uit; als je geen -s- hoort, schrijf je er ook geen.",
    },
    {
      rule: "-e- alleen in historische uitzonderingen",
      structure: "De tussenklank **-e-** komt nog voor in een paar vaste woorden zoals *zonneschijn*, *maneschijn*, *hellevaart*. Voeg zelf geen -e- in.",
      example: "zonneschijn, maneschijn, hellevaart",
      usage: "Gebruik bij nieuwe samenstellingen nooit -e-; dat is ouderwets.",
    },
  ],
  callouts: [
    { type: "remember", label: "Onthoud 1", text: "**-en-** als het eerste deel een meervoud op -en heeft: *pannenkoek*, *krantenbericht*." },
    { type: "remember", label: "Onthoud 2", text: "**-s-** als je hem hoort of na -ing, -heid, -schap: *stadscentrum*, *overheidspapier*." },
    { type: "remember", label: "Onthoud 3", text: "Geen extra -s- na een sisklank: *politiebureau*, *chefkok*." },
    { type: "remember", label: "Onthoud 4", text: "**-e-** alleen in *zonneschijn*, *maneschijn*, *hellevaart*; nooit zelf toevoegen." },
  ],
  commonMistakes: [
    { incorrect: "pannekoek", correct: "pannenkoek", explanation: "Pan → meervoud pannen, dus -en-." },
    { incorrect: "meisjekamer", correct: "meisjeskamer", explanation: "Meisje → meisjes; hoorbare -s-." },
    { incorrect: "zonnenschijn", correct: "zonneschijn", explanation: "Zon is een uitzondering met -e-." },
    { incorrect: "politieagent met -s-", correct: "politieagent (zonder s)", explanation: "Politie eindigt niet op sisklank, maar -s- is niet hoorbaar en niet nodig." },
    { incorrect: "stationstraat met dubbel s", correct: "stationstraat (één s)", explanation: "De -s- is niet hoorbaar; officieel één s." },
    { incorrect: "groentesoep", correct: "groentensoep", explanation: "Groente heeft meervoud op -en, dus -en-." },
  ],
  review: [
    "Tussenklank -en-: als het eerste deel een meervoud op -en heeft.",
    "Tussenklank -s-: als je hem hoort, of bij achtervoegsels -ing, -heid, -schap e.d.",
    "Geen extra -s- na sisklank (politie, chef, station).",
    "Tussenklank -e-: alleen in vaste uitzonderingen (zonneschijn, maneschijn, hellevaart).",
    "Bij woorden met alleen een -s meervoud: meestal geen tussenklank of -s- indien hoorbaar.",
    "Twijfel? Spreek het woord hardop uit en luister naar de natuurlijke klank.",
  ],
  qa: [
    {
      question: "Waarom schrijf je “pannenkoek” met -en- en niet “pannekoek” met -e-?",
      answer: "Omdat het eerste deel *pan* in het meervoud *pannen* is. De tussenklank weerspiegelt die meervoudsuitgang. Dus het is **pannenkoek**, niet *pannekoek*.",
    },
    {
      question: "Geef twee voorbeelden van samenstellingen met de tussenklank -s- en leg uit waarom die -s- daar staat.",
      answer: "*Stadscentrum* (stad + centrum): je hoort een -s-, en het drukt een bezitsrelatie uit (het centrum van de stad). *Overheidsinstantie* (overheid + instantie): het eerste deel eindigt op *-heid*, een achtervoegsel dat vaak een -s- krijgt. In beide gevallen is de -s- hoorbaar en/of verplicht.",
    },
    {
      question: "Waarom is “zonnenschijn” fout en schrijf je “zonneschijn”?",
      answer: "Het woord *zon* is een historisch vrouwelijk zelfstandig naamwoord. In een klein aantal vaste samenstellingen wordt de oude vrouwelijke genitief op -e gebruikt, ondanks dat het meervoud *zonnen* is. Daarom is het **zonneschijn**, niet *zonnenschijn*.",
    },
    {
      question: "Hoe schrijf je de samenstelling van “meisje” en “kamer”? Verklaar je keuze.",
      answer: "**Meisjeskamer**. Het eerste deel *meisje* heeft een meervoud op -s (*meisjes*). De -s- in het meervoud klinkt door in de samenstelling en is hoorbaar, dus je schrijft -s-.",
    },
    {
      question: "Waarom krijgt “station” + “straat” geen extra -s-, maar “dorp” + “school” wel?",
      answer: "Bij *dorpsschool* hoor je duidelijk een extra -s- tussen *dorp* en *school*; die schrijf je dan ook. Bij *stationstraat* hoor je die -s- niet; de officiële spelling volgt de uitspraak: **stationstraat** zonder extra -s-.",
    },
    {
      question: "Wat is de tussenklank in “groentensoep” en waarom?",
      answer: "**Groentensoep** krijgt -en-. Het eerste deel *groente* heeft zowel een meervoud op -en (*groenten*) als op -s (*groentes*). Volgens de regel gebruik je dan de -en-vorm, dus -en-.",
    },
    {
      question: "Vul de juiste tussenklank in: “liefde___brief” en leg uit.",
      answer: "**Liefdesbrief** met -s-. Het eerste deel *liefde* eindigt niet op een sisklank; de -s- is hoorbaar en historisch (genitief). Het is een vaste combinatie met -s-.",
    },
  ],
};