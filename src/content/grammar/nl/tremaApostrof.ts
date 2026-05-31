import type { GrammarLesson } from "../../types";

export const tremaApostrof: GrammarLesson = {
  id: "nl-trema-apostrof-1",
  title: "Trema en Apostrof – Klinkerbotsing, Meervoud en Weglating",
  level: 2,
  topic: "Trema en apostrof", // [Sch] Schrijven – spelling
  body: "Leer wanneer je een trema of apostrof gebruikt. Bij klinkerbotsing, meervouden van lange klinkers, letters en cijfers, en weglating van letters.",
  overview:
    "Het **trema** (¨) en de **apostrof** (’) zijn kleine tekens die grote problemen voorkomen. In deze **supercomplete, heldere les** ontdek je alles over het trema bij klinkerbotsing (geërgerd, tweeën, zeeën), de apostrof bij meervouden van woorden op een lange klinker (foto’s, oma’s), letters en cijfers (a’s, 7’s) en bij weglatingen (’s morgens, ’k, ’t). Je krijgt een overzichtelijke tabel, PAS OP‑waarschuwingen en 7 ijzersterke oefenvragen. Zo schrijf jij voortaan elk trema en elke apostrof foutloos.",
  anchorSectionId: "belang",
  exercises: [],
  timeExpressionsLabel: "Trema of apostrof? 📊",
  timeExpressions: {
    header: "Situatie | Teken | Voorbeelden",
    rows: [
      ["Klinkerbotsing binnen een woord (nieuwe lettergreep)", "trema (¨)", "geërgerd, tweeën, zeeën, coördinatie, reëel"],
      ["Meervoud van woorden op een lange klinker", "apostrof + s (’s)", "foto’s, oma’s, taxi’s, baby’s, menu’s"],
      ["Meervoud van woorden op -eau/-ieu", "alleen s", "bureaus, milieus, niveaus"],
      ["Meervoud van letters, cijfers, afkortingen", "apostrof + s (’s)", "a’s, 7’s, cd’s"],
      ["Weglating van letters", "apostrof", "’s morgens, ’k, ’t, ’m, d’r"],
      ["Verkleinwoord van woorden op lange klinker/letter", "apostrof + tje", "oma’tje, foto’tje, A4’tje"],
    ],
  },
  details: [
    {
      title: "Waarom zijn trema en apostrof belangrijk? 🎯",
      body: `
        <p>Het <strong>trema</strong> en de <strong>apostrof</strong> zijn kleine tekens die grote problemen voorkomen. Het trema voorkomt dat twee klinkers per ongeluk samen worden uitgesproken als één klank (denk aan <em>geërgerd</em>). De apostrof gebruik je bij meervouden van woorden die op een lange klinker eindigen (<em>foto’s</em>), bij weggelaten letters (<em>’s morgens</em>), en bij sommige verkleinwoorden en meervouden van letters.</p>
      `,
    },
    {
      title: "Het trema – klinkerbotsing voorkomen 🧩",
      body: `
        <h3 class="text-lg font-bold mt-4 mb-2">Wanneer gebruik je een trema?</h3>
        <p>Een trema zet je op de <strong>eerste klinker van een nieuwe lettergreep</strong> als die samen met de vorige klinker een verkeerde klank zou kunnen vormen.</p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Zonder trema ❌</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Met trema ✅</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Uitleg</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">geergerd (klinkt als ‘geer-gerd’)</td><td class="px-3 py-2 text-sm"><strong>geërgerd</strong></td><td class="px-3 py-2 text-sm">Trema op de tweede e: ge-ër-gerd.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">tween (klinkt als ‘tween’)</td><td class="px-3 py-2 text-sm"><strong>tweeën</strong></td><td class="px-3 py-2 text-sm">Meervoud van twee: twee-en → trema op de e van -en.</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">zeeen (klinkt als ‘zeen’)</td><td class="px-3 py-2 text-sm"><strong>zeeën</strong></td><td class="px-3 py-2 text-sm">Meervoud van zee: zee-en → trema op de e van -en.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">coordinatie</td><td class="px-3 py-2 text-sm"><strong>coördinatie</strong></td><td class="px-3 py-2 text-sm">Twee o's botsen; trema op de tweede o.</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">reeel (klinkt als ‘reel’)</td><td class="px-3 py-2 text-sm"><strong>reëel</strong></td><td class="px-3 py-2 text-sm">Trema op de tweede e: re-eel.</td></tr>
            </tbody>
          </table>
        </div>
        <h3 class="text-lg font-bold mt-6 mb-2">Trema bij meervouden op -en van woorden op een klinker</h3>
        <p>Het trema komt vaak voor bij meervouden van woorden die op een lange klinker of tweeklank eindigen.</p>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">twee → <strong>tweeën</strong>, zee → <strong>zeeën</strong>, idee → <strong>ideeën</strong>, slee → <strong>sleeën</strong></li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">knie → <strong>knieën</strong>, drie → <strong>drieën</strong>, ski → <strong>skiën</strong></li>
        </ul>
        <p><span class="pas-op-highlight">⚠️ PAS OP</span> Het trema staat op de <strong>eerste klinker van de uitgang</strong>, niet op de laatste klinker van het grondwoord. Dus <strong>tweeën</strong>, niet <em>tweëen</em>.</p>
        <h3 class="text-lg font-bold mt-6 mb-2">Trema in andere woordvormen</h3>
        <p>Ook bij voltooide deelwoorden met <em>ge-</em> en afleidingen met voorvoegsels:</p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Zonder trema ❌</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Met trema ✅</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Uitspraak</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">geergerd</td><td class="px-3 py-2 text-sm"><strong>geërgerd</strong></td><td class="px-3 py-2 text-sm">ge-ër-gerd</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">geerfd</td><td class="px-3 py-2 text-sm"><strong>geërfd</strong></td><td class="px-3 py-2 text-sm">ge-ërfd</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">geeindigd</td><td class="px-3 py-2 text-sm"><strong>geëindigd</strong></td><td class="px-3 py-2 text-sm">ge-ein-digd</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">beeindigen</td><td class="px-3 py-2 text-sm"><strong>beëindigen</strong></td><td class="px-3 py-2 text-sm">be-ein-di-gen</td></tr>
            </tbody>
          </table>
        </div>
        <p><span class="pas-op-highlight">⚠️ PAS OP</span> Staat er een <strong>koppelteken</strong> in de samenstelling, dan gebruik je <strong>geen trema</strong>: <em>auto-ongeluk</em>, <em>na-apen</em>.</p>
      `,
    },
    {
      title: "De apostrof – meervoud, weglating en meer 🏷️",
      body: `
        <h3 class="text-lg font-bold mt-4 mb-2">Meervoud met apostrof-s (’s)</h3>
        <p>Als een woord eindigt op een <strong>lange klinker</strong> (a, o, u, i, y) of op een <strong>afkorting</strong>, gebruik je in het meervoud <strong>’s</strong> om de uitspraak duidelijk te houden.</p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Enkelvoud</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Meervoud</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Waarom apostrof?</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">foto</td><td class="px-3 py-2 text-sm"><strong>foto’s</strong></td><td class="px-3 py-2 text-sm">Zonder apostrof zou <em>fotos</em> klinken als <em>fo-tos</em> (korte o).</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">oma</td><td class="px-3 py-2 text-sm"><strong>oma’s</strong></td><td class="px-3 py-2 text-sm"><em>Omas</em> zou klinken als <em>o-mas</em> (korte a).</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">baby</td><td class="px-3 py-2 text-sm"><strong>baby’s</strong></td><td class="px-3 py-2 text-sm"><em>Babys</em> zou onduidelijk zijn.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">taxi</td><td class="px-3 py-2 text-sm"><strong>taxi’s</strong></td><td class="px-3 py-2 text-sm"></td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">menu</td><td class="px-3 py-2 text-sm"><strong>menu’s</strong></td><td class="px-3 py-2 text-sm"></td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">café</td><td class="px-3 py-2 text-sm"><strong>café’s</strong></td><td class="px-3 py-2 text-sm">Na een accent aigu blijft de apostrof gebruikelijk.</td></tr>
            </tbody>
          </table>
        </div>
        <p>💡 <strong>Hoofdregel:</strong> Lange klinker aan het eind? Gebruik <strong>’s</strong> in het meervoud, <strong>behalve</strong> bij woorden op <strong>-eau</strong> en <strong>-ieu</strong> (die krijgen alleen -s): <strong>bureaus</strong>, <strong>milieus</strong>, <strong>niveaus</strong>. Woorden op een stomme e (tafel, meisje) krijgen nooit een apostrof: <strong>tafels</strong>, <strong>meisjes</strong>.</p>
        
        <h3 class="text-lg font-bold mt-6 mb-2">Meervoud van letters, cijfers en afkortingen</h3>
        <p>Ook voor het meervoud van losse letters, cijfers en afkortingen gebruik je apostrof-s.</p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Enkelvoud</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Meervoud</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">a</td><td class="px-3 py-2 text-sm"><strong>a’s</strong></td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">A</td><td class="px-3 py-2 text-sm"><strong>A’s</strong></td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">7</td><td class="px-3 py-2 text-sm"><strong>7’s</strong></td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">cd</td><td class="px-3 py-2 text-sm"><strong>cd’s</strong></td></tr>
            </tbody>
          </table>
        </div>
        <p><span class="pas-op-highlight">⚠️ PAS OP</span> Zonder apostrof zouden <em>as</em> en <em>ts</em> op andere woorden lijken; de apostrof maakt het leesbaar.</p>
        
        <h3 class="text-lg font-bold mt-6 mb-2">Weglating van letters of cijfers</h3>
        <p>De apostrof geeft aan dat er één of meer letters of cijfers zijn weggelaten.</p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Voluit</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Met apostrof</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">des morgens</td><td class="px-3 py-2 text-sm"><strong>’s morgens</strong></td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">ik</td><td class="px-3 py-2 text-sm"><strong>’k</strong></td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">het</td><td class="px-3 py-2 text-sm"><strong>’t</strong></td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">mijn</td><td class="px-3 py-2 text-sm"><strong>m’n</strong></td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">zijn</td><td class="px-3 py-2 text-sm"><strong>z’n</strong></td></tr>
            </tbody>
          </table>
        </div>
        <p><span class="pas-op-highlight">⚠️ PAS OP</span> <strong>’s morgens</strong> schrijf je met apostrof vóór de s en een spatie erna. Aan het begin van een zin: <strong>’s Morgens eet ik brood.</strong> (apostrof blijft klein, eerstvolgende letter groot).</p>
        <p>De afkortingen <em>’k, ’t, ’m, d’r, m’n, z’n</em> zijn alleen voor informele schrijftaal, zoals appjes en dagboeken. In formele teksten schrijf je voluit.</p>
        
        <h3 class="text-lg font-bold mt-6 mb-2">Apostrof bij verkleinwoorden</h3>
        <p>Als een woord eindigt op een lange klinker of een losse letter/cijfer, gebruik je een apostrof voor het verkleinachtervoegsel.</p>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">oma → <strong>oma’tje</strong>, foto → <strong>foto’tje</strong>, baby → <strong>baby’tje</strong></li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">A4 → <strong>A4’tje</strong>, cd → <strong>cd’tje</strong></li>
        </ul>
        <p>Zonder apostrof zou de uitspraak onduidelijk zijn (<em>omatje</em> klinkt als <em>o-ma-tje</em> met korte a).</p>
      `,
    },
  ],
  rulesTable: [
    {
      rule: "Trema bij klinkerbotsing",
      structure: "Zet een trema op de **eerste klinker van een nieuwe lettergreep** als die samen met de vorige klinker een andere klank zou kunnen vormen.",
      example: "geërgerd, tweeën, zeeën, coördinatie, reëel, beëindigen",
      usage: "Géén trema als er een koppelteken staat (auto-ongeluk).",
    },
    {
      rule: "Apostrof-s bij meervoud op lange klinker",
      structure: "Eindigt een woord op een **lange klinker** (a, o, u, i, y), dan schrijf je het meervoud met **’s**.",
      example: "foto’s, oma’s, taxi’s, baby’s, menu’s",
      usage: "Uitzondering: woorden op -eau/-ieu krijgen alleen -s (bureaus, milieus).",
    },
    {
      rule: "Apostrof-s bij meervoud van letters, cijfers en afkortingen",
      structure: "Het meervoud van losse letters, cijfers en afkortingen schrijf je met **’s**.",
      example: "a’s, 7’s, cd’s, A4’s",
      usage: "De apostrof voorkomt verwarring met andere woorden.",
    },
    {
      rule: "Apostrof bij weglating van letters",
      structure: "Gebruik een apostrof op de plek van weggelaten letters.",
      example: "’s morgens, ’k, ’t, ’m, d’r, m’n, z’n",
      usage: "Alleen in informele schrijftaal; formeel voluit schrijven.",
    },
    {
      rule: "Apostrof bij verkleinwoorden op lange klinker/letter",
      structure: "Voor het verkleinachtervoegsel -je, -tje, -pje etc. gebruik je een apostrof als het grondwoord op een lange klinker of losse letter/cijfer eindigt.",
      example: "oma’tje, foto’tje, A4’tje, cd’tje",
      usage: "Bij woorden op een stomme e géén apostrof (meisje – meisjes).",
    },
  ],
  callouts: [
    { type: "remember", label: "Onthoud 1", text: "**Trema** bij klinkerbotsing: geërgerd, tweeën, zeeën, coördinatie." },
    { type: "remember", label: "Onthoud 2", text: "**Apostrof-s** na lange klinker: foto’s, oma’s; maar bureaus (‑eau)." },
    { type: "remember", label: "Onthoud 3", text: "**Apostrof-s** bij letters/cijfers: a’s, 7’s, cd’s." },
    { type: "remember", label: "Onthoud 4", text: "**Apostrof** bij weglating: ’s morgens, ’k, ’t, m’n. Alleen informeel!" },
    { type: "remember", label: "Onthoud 5", text: "**Apostrof** bij verkleinwoorden: oma’tje, foto’tje, A4’tje." },
  ],
  commonMistakes: [
    { incorrect: "geergerd", correct: "geërgerd", explanation: "Trema op de tweede e om klinkerbotsing te voorkomen." },
    { incorrect: "twee-en (koppelteken)", correct: "tweeën (trema)", explanation: "Meervoud op -en na klinker: trema, geen koppelteken." },
    { incorrect: "fotos (meervoud van foto)", correct: "foto’s", explanation: "Apostrof-s geeft aan dat de o lang blijft." },
    { incorrect: "omaas (meervoud van oma)", correct: "oma’s", explanation: "Geen extra a; gewoon apostrof-s." },
    { incorrect: "s’morgens (apostrof verkeerd om)", correct: "’s morgens", explanation: "Apostrof aan het begin, voor de s." },
    { incorrect: "CDs (zonder apostrof)", correct: "cd’s (of CD’s)", explanation: "Bij letters gebruik je apostrof-s." },
    { incorrect: "bebeindigen", correct: "beëindigen", explanation: "Trema op de e na de eerste e: be-ein-di-gen." },
  ],
  review: [
    "Trema (¨): klinkerbotsing voorkomen (geërgerd, tweeën, zeeën).",
    "Apostrof (’): meervoud op lange klinker (foto’s, oma’s), letters/cijfers (a’s, 7’s), weglating (’s morgens, ’k), verkleinwoorden (oma’tje).",
    "Geen apostrof bij stomme e: meisjes, tafels.",
    "Woorden op -eau/-ieu: alleen -s (bureaus, milieus).",
    "Trema niet bij koppelteken: auto-ongeluk, na-apen.",
    "Apostrof bij weglating alleen in informele taal.",
  ],
  qa: [
    {
      question: "Waarom schrijf je “tweeën” met een trema en niet met een koppelteken?",
      answer: "Het trema geeft aan dat de twee e’s apart worden uitgesproken: *twee-en*. Een koppelteken gebruik je voor samenstellingen, niet om klinkerbotsing binnen een woord op te lossen. Daarom is *tweeën* de juiste spelling.",
    },
    {
      question: "Verbeter de zin: “Ik heb twee fotos van mijn omaas.”",
      answer: "De correcte zin is: **Ik heb twee foto’s van mijn oma’s.** Meervoud van *foto* krijgt *foto’s*, meervoud van *oma* krijgt *oma’s*.",
    },
    {
      question: "Leg uit waarom “’s morgens” met een apostrof begint en hoe je het aan het begin van een zin schrijft.",
      answer: "**’s morgens** is een verkorting van *des morgens*. De apostrof vervangt de weggelaten letters *de*. Aan het begin van een zin schrijf je: **’s Morgens eet ik brood.** De apostrof blijft klein; de eerstvolgende letter (*M*) krijgt een hoofdletter.",
    },
    {
      question: "Waarom is “geërgerd” met een trema correct, maar “verergeren” zonder trema?",
      answer: "In *geërgerd* botsen de e’s: *ge-er-gerd*. Zonder trema zou je *geer-gerd* lezen. In *verergeren* is er geen klinkerbotsing omdat de e’s door een *r* gescheiden zijn: *ver-er-ge-ren*. Daar is dus geen trema nodig.",
    },
    {
      question: "Waarom krijgen “bureau” en “milieu” in het meervoud géén apostrof, maar “foto” wel?",
      answer: "Woorden die eindigen op **-eau** of **-ieu** hebben een tweeklank aan het eind; de uitspraak blijft duidelijk als je er gewoon -s achter plakt: *bureaus*, *milieus*. Bij *foto* eindigt het woord op een lange o, en zonder apostrof zou *fotos* een korte o kunnen suggereren. Daarom schrijf je *foto’s*.",
    },
    {
      question: "Vul de juiste vorm in: “Hij heeft drie ___ (A) op zijn rapport.” Hoe schrijf je het meervoud van de letter A?",
      answer: "**A’s**. Het meervoud van een losse letter schrijf je met een apostrof-s, zodat duidelijk is dat je de letter meervoud bedoelt en niet het woord ‘as’. Dus: *Hij heeft drie A’s op zijn rapport.*",
    },
    {
      question: "Corrigeer de fout: “’T is een mooie dag, maar ’t regent een beetje.”",
      answer: "De correcte zin is: **’t Is een mooie dag, maar ’t regent een beetje.** Aan het begin van de zin moet de apostrof klein blijven en het volgende woord (*Is*) krijgt een hoofdletter, dus **’t Is**. De tweede *’t* is midden in de zin correct (kleine letter).",
    },
  ],
};