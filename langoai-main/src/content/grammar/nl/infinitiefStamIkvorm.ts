import type { GrammarLesson } from "../../types";

export const infinitiefStamIkvorm: GrammarLesson = {
  id: "nl-infinitief-stam-ikvorm-1",
  title: "Infinitief, Stam en Ik-vorm",
  level: 1,
  topic: "Infinitief, stam en ik-vorm", // [G] Grammatica
  body: "Leer hoe je van elk werkwoord de infinitief, de stam en de ik-vorm vindt. Met duidelijke regels, spellingtips en alle uitzonderingen.",
  overview:
    "De **infinitief** is het hele werkwoord, de **stam** gebruik je om alle andere vormen te maken, en de **ik-vorm** is de tegenwoordige tijd voor 'ik'. In deze **supercomplete, glasheldere les** ontdek je stap voor stap hoe je van de infinitief via de stam bij de ik-vorm komt. Je leert de cruciale **v/f- en z/s-regel**, waarom **gaan → ga** en niet 'gaa', en welke werkwoorden onregelmatig zijn (**ben, heb, kan, wil** en meer). Met heldere tabellen, talloze voorbeelden en 7 ijzersterke oefenvragen vind jij voortaan foutloos elke stam en ik-vorm.",
  anchorSectionId: "infinitief",
  exercises: [],
  timeExpressionsLabel: "Overzicht infinitief, stam en ik-vorm 📊",
  timeExpressions: {
    header: "Infinitief | Stam (officieel) | Ik-vorm | Bijzonderheid",
    rows: [
      ["werken", "werk", "**werk**", "regelmatig"],
      ["fietsen", "fiets", "**fiets**", "regelmatig"],
      ["maken", "maak", "**maak**", "aa blijft in gesloten lettergreep"],
      ["lopen", "loop", "**loop**", "oo blijft in gesloten lettergreep"],
      ["gaan", "ga", "**ga**", "open lettergreep: één a"],
      ["zien", "zie", "**zie**", "eindigt op klinker"],
      ["leven", "leef", "**leef**", "v → f"],
      ["reizen", "reis", "**reis**", "z → s"],
      ["zitten", "zit", "**zit**", "korte i, één t"],
      ["hebben", "–", "**heb**", "onregelmatig"],
      ["zijn", "–", "**ben**", "onregelmatig"],
      ["kunnen", "kan", "**kan**", "onregelmatig"],
      ["zullen", "zal", "**zal**", "onregelmatig"],
      ["mogen", "mag", "**mag**", "onregelmatig"],
      ["willen", "wil", "**wil**", "één l, ook hij-vorm zonder t"],
    ],
  },
  details: [
    {
      title: "Wat is de infinitief? 🎯",
      body: `
        <p>De <strong>infinitief</strong> is de hele, niet-vervoegde vorm van een werkwoord. Het is de naam van het werkwoord zoals die in het woordenboek staat. Je herkent de infinitief bijna altijd aan de uitgang <strong>-en</strong>.</p>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>werken</strong> – een baan hebben</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>lopen</strong> – zich te voet voortbewegen</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>slapen</strong> – in rust zijn, ogen dicht</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>lezen</strong> – woorden zien en begrijpen</li>
        </ul>
        <p>De infinitief gebruik je onder andere:</p>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">Na een hulpwerkwoord: <em>Ik wil <strong>zingen</strong>.</em></li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">Als onderwerp van de zin: <em><strong>Zwemmen</strong> is gezond.</em></li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">In vaste aanwijzingen: <em>Niet <strong>roken</strong>.</em></li>
        </ul>
        <p>💡 Er zijn een paar werkwoorden waarvan de infinitief niet op <strong>-en</strong> eindigt: <strong>zijn, doen, gaan, slaan, staan, zien</strong>. Deze zijn onregelmatig, maar ook hiervan kun je een stam afleiden.</p>
      `,
    },
    {
      title: "Wat is de stam? 🧱",
      body: `
        <p>De <strong>stam</strong> is de basisvorm van het werkwoord. Vanuit de stam maak je alle andere werkwoordsvormen, zoals de ik-vorm, de hij-vorm, de verleden tijd en het voltooid deelwoord.</p>
        <p>De <strong>hoofdregel</strong> om de stam te vinden is:</p>
        <p>🔥 <strong>Haal -en van de infinitief af.</strong></p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Infinitief</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Stam (ruw)</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">werken</td><td class="px-3 py-2 text-sm">werk</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">fietsen</td><td class="px-3 py-2 text-sm">fiets</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">luisteren</td><td class="px-3 py-2 text-sm">luister</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">komen</td><td class="px-3 py-2 text-sm">kom</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">zingen</td><td class="px-3 py-2 text-sm">zing</td></tr>
            </tbody>
          </table>
        </div>
        <p>Maar let op: de <strong>officiële stam</strong> (die je ook gebruikt als ik-vorm) volgt vaak nog een <strong>spellingregel</strong> om de uitspraak correct te houden. Die regels bespreken we hieronder.</p>
      `,
    },
    {
      title: "Van ruwe stam naar officiële stam (ik-vorm) – de spellingregels ⚖️",
      body: `
        <p>De ruwe stam (infinitief min -en) moet soms worden aangepast aan de Nederlandse spelling. Dit zijn de belangrijkste gevallen.</p>
        
        <h3 class="text-lg font-bold mt-4 mb-2">Regel 1: Lange klinker aan het eind van de stam? Schrijf één teken</h3>
        <p>Als de ruwe stam eindigt op een <strong>lange klinker</strong> (aa, ee, oo, uu) en die klinker staat in een <strong>open lettergreep</strong> (de lettergreep eindigt op die klinker), dan schrijf je die klinker met <strong>één teken</strong>. Dit gebeurt bij een klein groepje werkwoorden.</p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Infinitief</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Ruwe stam</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Officiële stam (ik-vorm)</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Waarom?</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm"><strong>gaan</strong></td><td class="px-3 py-2 text-sm">gaa</td><td class="px-3 py-2 text-sm"><strong>ga</strong></td><td class="px-3 py-2 text-sm">Open lettergreep → één a</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm"><strong>staan</strong></td><td class="px-3 py-2 text-sm">staa</td><td class="px-3 py-2 text-sm"><strong>sta</strong></td><td class="px-3 py-2 text-sm">Open lettergreep → één a</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm"><strong>slaan</strong></td><td class="px-3 py-2 text-sm">slaa</td><td class="px-3 py-2 text-sm"><strong>sla</strong></td><td class="px-3 py-2 text-sm">Open lettergreep → één a</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm"><strong>zien</strong></td><td class="px-3 py-2 text-sm">zie</td><td class="px-3 py-2 text-sm"><strong>zie</strong></td><td class="px-3 py-2 text-sm">ie is al een lange klank, blijft ie</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm"><strong>doen</strong></td><td class="px-3 py-2 text-sm">doe</td><td class="px-3 py-2 text-sm"><strong>doe</strong></td><td class="px-3 py-2 text-sm">oe is al een lange klank, blijft oe</td></tr>
            </tbody>
          </table>
        </div>
        
        <h3 class="text-lg font-bold mt-6 mb-2">Regel 2: De v/f- en z/s-wisseling</h3>
        <p>Als de infinitief een <strong>v</strong> of <strong>z</strong> heeft vlak voor de uitgang <strong>-en</strong>, dan verandert die <strong>v</strong> in <strong>f</strong> en de <strong>z</strong> in <strong>s</strong> in de stam. Dat gebeurt omdat de stam eindigt op een medeklinker en de v of z niet aan het einde van een Nederlands woord mag staan.</p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Infinitief</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Stam (ik-vorm)</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Wat gebeurt er?</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm"><strong>leven</strong></td><td class="px-3 py-2 text-sm"><strong>leef</strong></td><td class="px-3 py-2 text-sm">v → f</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm"><strong>blijven</strong></td><td class="px-3 py-2 text-sm"><strong>blijf</strong></td><td class="px-3 py-2 text-sm">v → f</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm"><strong>schrijven</strong></td><td class="px-3 py-2 text-sm"><strong>schrijf</strong></td><td class="px-3 py-2 text-sm">v → f</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm"><strong>reizen</strong></td><td class="px-3 py-2 text-sm"><strong>reis</strong></td><td class="px-3 py-2 text-sm">z → s</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm"><strong>lezen</strong></td><td class="px-3 py-2 text-sm"><strong>lees</strong></td><td class="px-3 py-2 text-sm">z → s</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm"><strong>kiezen</strong></td><td class="px-3 py-2 text-sm"><strong>kies</strong></td><td class="px-3 py-2 text-sm">z → s</td></tr>
            </tbody>
          </table>
        </div>
        <p><span class="pas-op-highlight">⚠️ PAS OP</span> In de stam <strong>nooit een v of z aan het eind</strong>! Altijd veranderen in <strong>f</strong> of <strong>s</strong>.</p>
        
        <h3 class="text-lg font-bold mt-6 mb-2">Regel 3: Korte klinker blijft kort</h3>
        <p>Bij werkwoorden met een <strong>korte klinker</strong> (a, e, i, o, u) gevolgd door <strong>één medeklinker</strong> in de infinitief, blijft de stam zoals hij is. De lettergreep is gesloten (eindigt op een medeklinker), dus de klinker is vanzelf kort. Er is in de stam zelf <strong>geen</strong> medeklinkerverdubbeling nodig.</p>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>zitten</strong> → zit</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>vallen</strong> → val</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>rennen</strong> → ren</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>stoppen</strong> → stop</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>leggen</strong> → leg</li>
        </ul>
        <p>De medeklinkerverdubbeling zie je pas bij het meervoud of bij de hij-vorm, maar niet in de stam zelf.</p>
      `,
    },
    {
      title: "De ik-vorm – gelijk aan de stam, met onregelmatigheden 👤",
      body: `
        <p>De <strong>ik-vorm</strong> in de tegenwoordige tijd is bij de overgrote meerderheid van de werkwoorden <strong>precies gelijk aan de officiële stam</strong>. Je kunt dus zeggen: stam = ik-vorm.</p>
        <p>Voorbeelden: <strong>ik werk</strong>, <strong>ik fiets</strong>, <strong>ik leef</strong>, <strong>ik reis</strong>, <strong>ik zit</strong>.</p>
        <p>Maar er zijn een paar werkwoorden die een <strong>onregelmatige ik-vorm</strong> hebben. Deze moet je uit het hoofd leren.</p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Infinitief</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Ik-vorm</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Bijzonderheid</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm"><strong>zijn</strong></td><td class="px-3 py-2 text-sm"><strong>ben</strong></td><td class="px-3 py-2 text-sm">Totaal onregelmatig</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm"><strong>hebben</strong></td><td class="px-3 py-2 text-sm"><strong>heb</strong></td><td class="px-3 py-2 text-sm">Eén b, niet 'hebb'</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm"><strong>kunnen</strong></td><td class="px-3 py-2 text-sm"><strong>kan</strong></td><td class="px-3 py-2 text-sm">Meervoud 'kunnen'</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm"><strong>zullen</strong></td><td class="px-3 py-2 text-sm"><strong>zal</strong></td><td class="px-3 py-2 text-sm">Meervoud 'zullen'</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm"><strong>mogen</strong></td><td class="px-3 py-2 text-sm"><strong>mag</strong></td><td class="px-3 py-2 text-sm">Meervoud 'mogen'</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm"><strong>willen</strong></td><td class="px-3 py-2 text-sm"><strong>wil</strong></td><td class="px-3 py-2 text-sm">Eén l; ook hij-vorm is 'wil' zonder t</td></tr>
            </tbody>
          </table>
        </div>
        <p><span class="pas-op-highlight">⚠️ PAS OP</span> De ik-vorm van <strong>willen</strong> is <strong>wil</strong> (zonder -t). De hij-vorm is <strong>hij wil</strong>, ook zonder -t. Dit is een bekende uitzondering.</p>
      `,
    },
  ],
  rulesTable: [
    {
      rule: "Stam = infinitief min -en",
      structure: "Haal **-en** van de infinitief af om de ruwe stam te krijgen. Pas daarna de spellingregels toe.",
      example: "werken → werk, fietsen → fiets, komen → kom.",
      usage: "Bijna alle werkwoorden volgen deze basisregel.",
    },
    {
      rule: "v wordt f, z wordt s aan het einde van de stam",
      structure: "Eindigt de ruwe stam op een **v** of **z**, verander die dan in **f** of **s**.",
      example: "leven → **leef**, reizen → **reis**, schrijven → **schrijf**.",
      usage: "Een Nederlands woord eindigt nooit op v of z.",
    },
    {
      rule: "Lange klinker in open lettergreep: één teken",
      structure: "Als de stam eindigt op een lange klinker (aa, ee, oo, uu) in een open lettergreep, schrijf die klinker dan met één teken.",
      example: "gaan → **ga**, staan → **sta**, slaan → **sla**.",
      usage: "Dit geldt ook voor ie en oe, die blijven ongewijzigd: zien → zie, doen → doe.",
    },
    {
      rule: "Korte klinker in gesloten lettergreep blijft staan",
      structure: "Bij een korte klinker gevolgd door één medeklinker in de stam, blijft de stam onveranderd. Er komt géén extra medeklinker bij in de stam zelf.",
      example: "zitten → **zit**, vallen → **val**, rennen → **ren**.",
      usage: "De medeklinkerverdubbeling gebeurt pas in het meervoud (wij zitten) of de hij-vorm.",
    },
    {
      rule: "Onregelmatige ik-vormen uit het hoofd leren",
      structure: "Een paar werkwoorden hebben een ik-vorm die niet regelmatig uit de stam is af te leiden. Leer ze uit je hoofd.",
      example: "zijn → **ben**, hebben → **heb**, kunnen → **kan**, zullen → **zal**, mogen → **mag**, willen → **wil**.",
      usage: "Let op: bij 'willen' is de hij-vorm ook 'wil' (zonder t).",
    },
  ],
  callouts: [
    { type: "remember", label: "Onthoud 1", text: "Stam = infinitief min **-en**, daarna spellingregels toepassen." },
    { type: "remember", label: "Onthoud 2", text: "**v** wordt **f** en **z** wordt **s** aan het einde van de stam: *leven → leef, reizen → reis*." },
    { type: "remember", label: "Onthoud 3", text: "Lange klinker aan het eind van de stam? Eén teken: *gaan → ga, staan → sta*." },
    { type: "remember", label: "Onthoud 4", text: "Onregelmatige ik-vormen: *ben, heb, kan, zal, mag, wil*." },
    { type: "remember", label: "Onthoud 5", text: "Bij 'willen' is de hij-vorm **wil** (zonder t)." },
  ],
  commonMistakes: [
    { incorrect: "leev (stam van leven)", correct: "leef", explanation: "Aan het eind van de stam nooit een v, maar f." },
    { incorrect: "reiz (stam van reizen)", correct: "reis", explanation: "Aan het eind nooit z, maar s." },
    { incorrect: "gaa (stam van gaan)", correct: "ga", explanation: "Lange klinker in open lettergreep: één teken." },
    { incorrect: "ik hebb", correct: "ik heb", explanation: "'Hebben' is onregelmatig; ik-vorm is heb." },
    { incorrect: "hij wilt", correct: "hij wil", explanation: "'Willen' is een uitzondering; de hij-vorm is 'wil' zonder t." },
    { incorrect: "zitt (stam van zitten)", correct: "zit", explanation: "Korte klinker in gesloten lettergreep blijft één medeklinker." },
  ],
  review: [
    "**Infinitief** = hele werkwoord, meestal op -en.",
    "**Stam** = infinitief min -en, daarna spellingregels toepassen.",
    "**Ik-vorm** = officiële stam (meestal), behalve bij onregelmatige werkwoorden.",
    "**v/f- en z/s-regel**: in de stam verandert v in f en z in s (*leven → leef*, *reizen → reis*).",
    "**Klinker aan het eind van de stam**: lange klinker in open lettergreep schrijf je met één teken (*gaan → ga*).",
    "**Onregelmatige ik-vormen**: *ben, heb, kan, zal, mag, wil* uit het hoofd leren.",
    "**Willen**: ik wil, hij wil (zonder t!).",
  ],
  qa: [
    {
      question: "Geef de stam van het werkwoord **blijven**. Leg uit welke spellingregel je toepast.",
      answer: "De stam is **blijf**. Ik haal -en van de infinitief af, dan krijg ik 'blijv'. Omdat een woord in het Nederlands niet op een **v** mag eindigen, verandert de v in een **f**. Daarom wordt de officiële stam **blijf**.",
    },
    {
      question: "Waarom is de stam van **gaan** niet *gaa* maar *ga*?",
      answer: "De ruwe stam is 'gaa' (gaan min -en). De laatste lettergreep eindigt op een lange klinker (aa) en is open. In een open lettergreep schrijf je een lange klinker met **één teken**. Daarom wordt het **ga**.",
    },
    {
      question: "Waarom is **ik heb** een onregelmatige ik-vorm? Leg uit wat je zou verwachten als het regelmatig was.",
      answer: "Als 'hebben' regelmatig was, zou de stam 'hebb' zijn (infinitief min -en) en de ik-vorm dus 'ik hebb'. Maar de Nederlandse taal heeft deze vorm versimpeld tot **heb** met één b. Daarom is het een onregelmatige ik-vorm.",
    },
    {
      question: "Noem twee werkwoorden die de v/f-regel volgen en geef van elk de stam.",
      answer: "**Leven** → stam **leef**. **Schrijven** → stam **schrijf**. In beide gevallen verdwijnt de v van het eind van de ruwe stam en komt er een f voor in de plaats.",
    },
    {
      question: "Wat is de ik-vorm van **willen**? En wat is de hij-vorm? Leg uit wat er bijzonder is aan dit werkwoord.",
      answer: "De ik-vorm is **wil**. De hij-vorm is **hij wil**, dus ook zonder **-t**. Dit is bijzonder, want de meeste werkwoorden krijgen in de hij-vorm stam + t. **Willen** is een uitzondering.",
    },
    {
      question: "Geef van de volgende werkwoorden de stam: **reizen**, **doen**, **slapen**.",
      answer: "**Reizen** → **reis** (z → s). **Doen** → **doe** (eindigt op klinker, open lettergreep, oe blijft oe). **Slapen** → **slaap** (aa in gesloten lettergreep blijft aa).",
    },
    {
      question: "Leg uit waarom de stam van **zitten** niet *zitt* is, maar *zit*.",
      answer: "De ruwe stam is 'zit' (zitten min -en). De klinker is een korte **i** in een gesloten lettergreep (eindigt op t). Een korte klinker wordt in een gesloten lettergreep met één klinkerteken geschreven, en de medeklinker hoeft niet verdubbeld te worden omdat het om de stam zelf gaat. De verdubbeling van de t gebeurt pas bij het meervoud (*wij zitten*). De stam blijft dus gewoon **zit**.",
    },
  ],
};