import type { GrammarLesson } from "../../types";

export const bijvoeglijkNaamwoord: GrammarLesson = {
  id: "nl-bijvoeglijknaamwoord-1",
  title: "Bijvoeglijk Naamwoord: Verbuiging en Stoffelijk Bijvoeglijk Naamwoord",
  level: 2,
  topic: "Bijvoeglijk naamwoord", // [G] Grammatica
  body: "Leer hoe je bijvoeglijke naamwoorden verbuigt met -e en wanneer niet. Van de basisregel tot stoffelijke bijvoeglijke naamwoorden zoals houten en gouden.",
  overview:
    "Een **bijvoeglijk naamwoord** zegt iets over een zelfstandig naamwoord. In het Nederlands verandert de vorm soms met een **-e**, maar soms juist niet. In deze **supercomplete, heldere les** leer je precies wanneer je **wel** of **geen -e** schrijft, hoe het zit met **de- en het-woorden**, het **predicatief** gebruik (achter *zijn*), en de speciale regels voor **stoffelijke bijvoeglijke naamwoorden** (*houten*, *gouden*). Met een overzichtelijke tabel, PAS OP‑waarschuwingen en 7 ijzersterke oefenvragen verbuig jij voortaan elk bijvoeglijk naamwoord foutloos.",
  anchorSectionId: "wat",
  exercises: [],
  timeExpressionsLabel: "De basisregel in één oogopslag 📊",
  timeExpressions: {
    header: "Bepaald lidwoord | Onbepaald (een / geen lidwoord)",
    rows: [
      ["**de** grote man", "**een** grote man / **grote** man"],
      ["**het** grote huis", "**een** groot huis / **groot** huis"],
    ],
  },
  details: [
    {
      title: "Wat is een bijvoeglijk naamwoord? 🌈",
      body: `
        <p>Een <strong>bijvoeglijk naamwoord</strong> zegt iets over een zelfstandig naamwoord. Het geeft een eigenschap, kenmerk, toestand of materiaal aan.</p>
        <p>Voorbeelden: <em>een <strong>mooie</strong> bloem, het <strong>oude</strong> huis, een <strong>houten</strong> tafel, de <strong>koude</strong> wind.</em></p>
        <p>In het Nederlands verandert de vorm van het bijvoeglijk naamwoord soms door toevoeging van een <strong>-e</strong>, maar soms juist niet. Wanneer dat gebeurt, hangt af van het <strong>lidwoord</strong>, het <strong>geslacht</strong> (de- of het-woord) en of het bijvoeglijk naamwoord vóór het zelfstandig naamwoord staat of <strong>zelfstandig</strong> (predicatief) wordt gebruikt.</p>
      `,
    },
    {
      title: "De basisregel: wel of geen -e? 🧩",
      body: `
        <h3 class="text-lg font-bold mt-4 mb-2">Bepaald lidwoord (de/het) → altijd -e</h3>
        <p>Als er een bepaald lidwoord (<strong>de</strong> of <strong>het</strong>) voor staat, komt er <strong>altijd</strong> een <strong>-e</strong> achter het bijvoeglijk naamwoord. Dat geldt voor zowel de- als het-woorden.</p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Lidwoord</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Zelfst. nw.</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Bijv. nw.</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Resultaat</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">de</td><td class="px-3 py-2 text-sm">man</td><td class="px-3 py-2 text-sm">groot</td><td class="px-3 py-2 text-sm"><strong>de grote</strong> man</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">het</td><td class="px-3 py-2 text-sm">kind</td><td class="px-3 py-2 text-sm">klein</td><td class="px-3 py-2 text-sm"><strong>het kleine</strong> kind</td></tr>
            </tbody>
          </table>
        </div>
        <h3 class="text-lg font-bold mt-6 mb-2">Onbepaald lidwoord (een) of géén lidwoord</h3>
        <p>Nu moeten we onderscheid maken tussen <strong>de-woorden</strong> en <strong>het-woorden</strong>.</p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Soort</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Voorbeeld</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Bijv. nw.</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Resultaat</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">de-woord + een</td><td class="px-3 py-2 text-sm">een man</td><td class="px-3 py-2 text-sm">groot</td><td class="px-3 py-2 text-sm">een <strong>grote</strong> man</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">het-woord + een</td><td class="px-3 py-2 text-sm">een kind</td><td class="px-3 py-2 text-sm">klein</td><td class="px-3 py-2 text-sm">een <strong>klein</strong> kind (zonder -e)</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">het-woord zonder lidwoord</td><td class="px-3 py-2 text-sm">kind</td><td class="px-3 py-2 text-sm">klein</td><td class="px-3 py-2 text-sm"><strong>klein</strong> kind (zonder -e)</td></tr>
            </tbody>
          </table>
        </div>
        <p>🧠 <strong>Ezelsbrug:</strong> Bij <strong>de</strong>-woorden kun je de -e nooit weglaten, of er nu <em>de</em>, <em>een</em> of niets staat. Bij <strong>het</strong>-woorden komt alleen bij <em>het</em> een -e; bij <em>een</em> of niets niet.</p>
      `,
    },
    {
      title: "Het bijvoeglijk naamwoord als predicaat (zelfstandig gebruik) 💬",
      body: `
        <p>Als het bijvoeglijk naamwoord niet vóór een zelfstandig naamwoord staat, maar achter een koppelwerkwoord (zoals <strong>zijn, worden, blijven, lijken</strong>), dan heet dat <strong>predicatief</strong>. In dat geval komt er <strong>nooit</strong> een -e, ongeacht het geslacht of getal van het onderwerp.</p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Voorbeeld</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Bijv. nw.</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">De man is <strong>groot</strong>.</td><td class="px-3 py-2 text-sm">groot (geen -e)</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">De vrouw is <strong>lief</strong>.</td><td class="px-3 py-2 text-sm">lief (geen -e)</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Het kind is <strong>klein</strong>.</td><td class="px-3 py-2 text-sm">klein (geen -e)</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">De boeken zijn <strong>dik</strong>.</td><td class="px-3 py-2 text-sm">dik (geen -e)</td></tr>
            </tbody>
          </table>
        </div>
        <p><span class="pas-op-highlight">⚠️ PAS OP</span> Het verschil tussen 'de man is groot' (predicatief, geen -e) en 'de grote man' (attributief, wel -e) is cruciaal.</p>
      `,
    },
    {
      title: "Stoffelijk bijvoeglijk naamwoord – materiaal aanduiden 🪵",
      body: `
        <p>Een <strong>stoffelijk bijvoeglijk naamwoord</strong> geeft aan van welk materiaal iets is gemaakt. De meeste eindigen op <strong>-en</strong> en zijn <strong>onveranderlijk</strong>: ze krijgen <strong>nooit</strong> een extra -e, ook niet bij de-woorden of na een bepaald lidwoord.</p>
        <h3 class="text-lg font-bold mt-4 mb-2">Veelvoorkomende stoffelijke bijvoeglijke naamwoorden op -en</h3>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Materiaal</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Bijvoeglijk naamwoord</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">hout</td><td class="px-3 py-2 text-sm">houten</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">goud</td><td class="px-3 py-2 text-sm">gouden</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">zilver</td><td class="px-3 py-2 text-sm">zilveren</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">wol</td><td class="px-3 py-2 text-sm">wollen</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">zijde</td><td class="px-3 py-2 text-sm">zijden</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">ijzer</td><td class="px-3 py-2 text-sm">ijzeren</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">glas</td><td class="px-3 py-2 text-sm">glazen</td></tr>
            </tbody>
          </table>
        </div>
        <p><strong>Voorbeelden:</strong> de <strong>houten</strong> tafel, een <strong>gouden</strong> ring, het <strong>zilveren</strong> bestek.</p>
        <p><span class="pas-op-highlight">⚠️ PAS OP</span> Schrijf dus nooit <em>houtene, goudene, wollene</em>. Deze woorden eindigen al op -en, dus er komt geen extra -e bij.</p>
      `,
    },
    {
      title: "Andere bijvoeglijke naamwoorden op -en (geen extra -e) 📜",
      body: `
        <p>Naast stoffelijke bijvoeglijke naamwoorden zijn er nog enkele andere die op <strong>-en</strong> eindigen en daarom <strong>geen extra -e</strong> krijgen. Voorbeelden:</p>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>open</strong> – een open deur</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>eigen</strong> – mijn eigen huis</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>geheim</strong> – een geheim plan</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>vergeten</strong> – de vergeten stad</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>verlaten</strong> – een verlaten strand</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>geboren</strong> – de geboren leider</li>
        </ul>
        <p>De uitgang -en blijft hier staan, er komt geen -e achter.</p>
      `,
    },
  ],
  rulesTable: [
    {
      rule: "Bepaald lidwoord (de/het) → altijd -e",
      structure: "Staat er **de** of **het** voor het zelfstandig naamwoord? Dan schrijf je **bijvoeglijk naamwoord + e**.",
      example: "de grote man, het kleine kind",
      usage: "Deze regel kent geen uitzonderingen.",
    },
    {
      rule: "Onbepaald (een/geen lidwoord) – de-woord wel -e, het-woord niet",
      structure: "Bij een **de-woord** komt ook na **een** of zonder lidwoord een **-e**. Bij een **het-woord** komt na **een** of zonder lidwoord **geen -e**.",
      example: "een grote man, grote man – een klein kind, klein kind",
      usage: "Ezelsbrug: de-woorden zijn altijd met -e; het-woorden alleen met -e na 'het'.",
    },
    {
      rule: "Predicatief (na zijn, worden, blijven) → nooit -e",
      structure: "Als het bijvoeglijk naamwoord achter het zelfstandig naamwoord staat en er een koppelwerkwoord tussen zit, schrijf je **geen -e**.",
      example: "De man is groot. Het kind blijft klein.",
      usage: "Dit geldt voor alle woorden, ongeacht de/het of meervoud.",
    },
    {
      rule: "Stoffelijk bijvoeglijk naamwoord op -en → nooit extra -e",
      structure: "Eindigt het bijvoeglijk naamwoord op **-en** en geeft het een materiaal aan? Dan schrijf je **nooit een extra -e**, ook niet na 'de' of 'het'.",
      example: "de houten tafel, een gouden ring, het zilveren bestek",
      usage: "Dus niet 'houtene' of 'goudene'.",
    },
    {
      rule: "Andere bijvoeglijke naamwoorden op -en → ook geen extra -e",
      structure: "Woorden als **open, eigen, geheim, vergeten** eindigen op -en en krijgen **geen -e**.",
      example: "een open deur, mijn eigen huis, een geheim plan",
      usage: "Deze woorden gedragen zich hetzelfde als stoffelijke bijvoeglijke naamwoorden.",
    },
  ],
  callouts: [
    { type: "remember", label: "Onthoud 1", text: "Bepaald lidwoord (de/het) → altijd **-e**." },
    { type: "remember", label: "Onthoud 2", text: "Onbepaald: **de-woorden** met -e, **het-woorden** zonder -e." },
    { type: "remember", label: "Onthoud 3", text: "Predicatief (na zijn): nooit -e. *De man is groot.*" },
    { type: "remember", label: "Onthoud 4", text: "Stoffelijk op -en: **houten, gouden** – nooit een extra -e." },
    { type: "remember", label: "Onthoud 5", text: "Ook **open, eigen, geheim** blijven onveranderd." },
  ],
  commonMistakes: [
    { incorrect: "een kleine kind", correct: "een klein kind", explanation: "Kind is een het-woord; na 'een' geen -e." },
    { incorrect: "het groot huis", correct: "het grote huis", explanation: "Met 'het' juist wel een -e." },
    { incorrect: "een houtene tafel", correct: "een houten tafel", explanation: "Stoffelijk bnjw op -en blijft houten." },
    { incorrect: "de man is grote", correct: "de man is groot", explanation: "Predicatief: geen -e." },
    { incorrect: "een mooi bloem", correct: "een mooie bloem", explanation: "Bloem is de-woord; na 'een' wel -e." },
    { incorrect: "de open deur (is goed)", correct: "–", explanation: "Open op -en is correct zonder -e." },
  ],
  review: [
    "Bepaald lidwoord (de/het): altijd -e (de grote man, het grote huis).",
    "Onbepaald: de-woorden wel -e (een grote man), het-woorden geen -e (een groot huis).",
    "Predicatief (na zijn, worden, blijven): nooit -e.",
    "Stoffelijk bijvoeglijk naamwoord op -en: nooit extra -e (houten, gouden).",
    "Andere op -en (open, eigen, geheim): ook geen extra -e.",
    "Materialen zonder -en (plastic, nylon) meestal zonder -e.",
  ],
  qa: [
    {
      question: "Waarom schrijf je “een groot huis” zonder -e, maar “het grote huis” met -e?",
      answer: "*Huis* is een het-woord. Na het onbepaald lidwoord *een* (of zonder lidwoord) krijgt het bijvoeglijk naamwoord **geen -e** bij het-woorden: *een groot huis*. Na het bepaald lidwoord *het* komt er wél een -e: *het grote huis*.",
    },
    {
      question: "Leg uit waarom de zin “De man is grote” fout is.",
      answer: "Het bijvoeglijk naamwoord staat hier **predicatief** (achter het koppelwerkwoord *is*). In die positie komt er nooit een -e. Correct is: **De man is groot.**",
    },
    {
      question: "Waarom schrijf je “een houten tafel” en niet “een houtene tafel”?",
      answer: "*Houten* is een stoffelijk bijvoeglijk naamwoord dat al op **-en** eindigt. Deze woorden krijgen nooit een extra -e. Dus het is en blijft **een houten tafel**.",
    },
    {
      question: "Geef de juiste vorm: “Heb je (mooi) bloemen?” en leg uit waarom.",
      answer: "**Heb je mooie bloemen?** *Bloemen* is een de-woord (meervoud). Na het onbepaalde (geen lidwoord) krijgt het bijvoeglijk naamwoord **-e** bij de-woorden. Dus *mooie*.",
    },
    {
      question: "Is “Dit is een papieren tas” correct? Waarom wel of niet?",
      answer: "Ja, dat is correct. *Papieren* is een stoffelijk bijvoeglijk naamwoord op -en. Het verandert niet, dus ook na *een* blijft het *papieren tas*, zonder extra -e.",
    },
    {
      question: "Wat is het verschil in schrijfwijze tussen “een mooie auto” en “een snel auto”?",
      answer: "*Auto* is een de-woord, dus het is **een mooie auto** met -e. *Auto* is een de-woord, dus ook **een snelle auto**. De foutieve zin *een snel auto* zou betekenen dat iemand denkt dat *auto* een het-woord is, wat niet klopt.",
    },
    {
      question: "Vul in: “De (open) deur stond wagenwijd.” Moet er een -e bij?",
      answer: "**De open deur.** *Open* eindigt op -en en is een van de uitzonderingen (geen stoffelijk, maar wel op -en). Het krijgt geen extra -e, dus *open deur*, ook na *de*.",
    },
  ],
};