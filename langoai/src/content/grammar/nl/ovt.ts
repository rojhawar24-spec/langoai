import type { GrammarLesson } from "../../types";

export const ovt: GrammarLesson = {
  id: "nl-ovt-1",
  title: "Onvoltooid Verleden Tijd (OVT): Zwak, Sterk en Onregelmatig",
  level: 1, // Verleden tijd is iets moeilijker
  topic: "Onvoltooid Verleden Tijd", // [G] Grammatica
  body: "Leer hoe je de verleden tijd maakt van zwakke, sterke en onregelmatige werkwoorden. Met 't kofschip, klinkerwisseling en alle uitzonderingen.",
  overview:
    "De **onvoltooid verleden tijd (OVT)** gebruik je voor gebeurtenissen en gewoontes in het verleden. In deze **supercomplete, glasheldere les** ontdek je het verschil tussen zwakke werkwoorden (stam + -de/-te), sterke werkwoorden (klinkerverandering) en onregelmatige werkwoorden zoals *zijn*, *hebben* en *willen*. Je leert de cruciale **'t kofschip-regel**, hoe je de stam aanpast met v/f- en z/s-wisseling, en welke valkuilen er zijn bij stammen op t en d. Met uitgebreide tabellen, tientallen voorbeelden, extra PAS OP-waarschuwingen en 7 ijzersterke oefenvragen schrijf jij voortaan elke OVT foutloos.",
  anchorSectionId: "watisovt",
  exercises: [],
  timeExpressionsLabel: "Overzicht OVT 📊",
  timeExpressions: {
    header: "Groep | Regel | Voorbeeld (werken) | Voorbeeld (schrijven) | Voorbeeld (zijn)",
    rows: [
      ["Zwak", "stam + -de(n) of -te(n) volgens 't kofschip", "ik **werkte**", "–", "–"],
      ["Sterk", "klinkerverandering; enkelvoud geen uitgang, meervoud -en", "–", "ik **schreef**", "–"],
      ["Onregelmatig", "eigen vorm (uit het hoofd leren)", "–", "–", "ik **was**"],
    ],
  },
  details: [
    {
      title: "Wat is de onvoltooid verleden tijd? 🎯",
      body: `
        <p>De <strong>onvoltooid verleden tijd</strong> gebruik je om te vertellen wat er <strong>vroeger</strong> gebeurde, wat <strong>toen aan de gang was</strong>, of om een <strong>gewoonte in het verleden</strong> te beschrijven. Het is de tijd van de meeste verhalen en herinneringen.</p>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">Vroeger <strong>woonde</strong> ik in een klein dorp.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">Gisteren <strong>las</strong> zij een spannend boek.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">Het <strong>was</strong> koud en het <strong>regende</strong> hard.</li>
        </ul>
      `,
    },
    {
      title: "Zwakke werkwoorden – stam + -de(n) of -te(n) 🧩",
      body: `
        <p>Zwakke werkwoorden krijgen in de verleden tijd een vaste uitgang. Welke uitgang dat is, bepaal je met de <strong>'t kofschip-regel</strong>.</p>
        <h3 class="text-lg font-bold mt-4 mb-2">De regel van 't kofschip</h3>
        <p>Kijk naar de <strong>laatste letter van de stam</strong>. Zit die letter in <strong>'t kofschip</strong> (t, k, f, s, ch, p)? Dan krijg je <strong>-te(n)</strong>. Zit de letter er niet in? Dan krijg je <strong>-de(n)</strong>.</p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Infinitief</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Stam</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Laatste letter</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">OVT enkelvoud</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">OVT meervoud</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">werken</td><td class="px-3 py-2 text-sm">werk</td><td class="px-3 py-2 text-sm">k (in kofschip)</td><td class="px-3 py-2 text-sm">ik <strong>werkte</strong></td><td class="px-3 py-2 text-sm">wij <strong>werkten</strong></td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">fietsen</td><td class="px-3 py-2 text-sm">fiets</td><td class="px-3 py-2 text-sm">s (in kofschip)</td><td class="px-3 py-2 text-sm">ik <strong>fietste</strong></td><td class="px-3 py-2 text-sm">wij <strong>fietsten</strong></td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">lachen</td><td class="px-3 py-2 text-sm">lach</td><td class="px-3 py-2 text-sm">ch (in kofschip)</td><td class="px-3 py-2 text-sm">ik <strong>lachte</strong></td><td class="px-3 py-2 text-sm">wij <strong>lachten</strong></td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">stoppen</td><td class="px-3 py-2 text-sm">stop</td><td class="px-3 py-2 text-sm">p (in kofschip)</td><td class="px-3 py-2 text-sm">ik <strong>stopte</strong></td><td class="px-3 py-2 text-sm">wij <strong>stopten</strong></td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">luisteren</td><td class="px-3 py-2 text-sm">luister</td><td class="px-3 py-2 text-sm">r (niet in kofschip)</td><td class="px-3 py-2 text-sm">ik <strong>luisterde</strong></td><td class="px-3 py-2 text-sm">wij <strong>luisterden</strong></td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">spelen</td><td class="px-3 py-2 text-sm">speel</td><td class="px-3 py-2 text-sm">l (niet in kofschip)</td><td class="px-3 py-2 text-sm">ik <strong>speelde</strong></td><td class="px-3 py-2 text-sm">wij <strong>speelden</strong></td></tr>
            </tbody>
          </table>
        </div>
        <p><span class="pas-op-highlight">⚠️ PAS OP</span> De stam van <em>leven</em> is <strong>leef</strong> (door de v/f-regel). De f zit in 't kofschip, dus het is <strong>leefde</strong>, met een f. Hetzelfde geldt voor <em>reizen</em>: stam <strong>reis</strong> (s in kofschip), dus <strong>reisde</strong>, niet <em>reizde</em>.</p>
        <h3 class="text-lg font-bold mt-6 mb-2">Werkwoorden met een stam op t of d</h3>
        <p>Als de stam al op een <strong>t</strong> of <strong>d</strong> eindigt, krijg je een dubbele medeklinker.</p>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">zetten (stam <strong>zet</strong>) → ik <strong>zette</strong>, wij <strong>zetten</strong></li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">praten (stam <strong>praat</strong>) → ik <strong>praatte</strong>, wij <strong>praatten</strong></li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">antwoorden (stam <strong>antwoord</strong>) → ik <strong>antwoordde</strong>, wij <strong>antwoordden</strong></li>
        </ul>
        <p><span class="pas-op-highlight">⚠️ PAS OP</span> Bij een dubbele t of d zie je niet meer of het -de of -te is. Onthoud: als de stam op t eindigt, is de uitgang -te; bij d is het -de. De dubbele medeklinker verraadt het.</p>
      `,
    },
    {
      title: "Sterke werkwoorden – klinkerverandering ⚡",
      body: `
        <p>Sterke werkwoorden veranderen in de verleden tijd van <strong>klinker</strong>. Het enkelvoud krijgt <strong>geen uitgang</strong>, het meervoud krijgt <strong>-en</strong> achter de verleden-tijdsstam. Er is geen regel om te voorspellen welke klinker het wordt; deze werkwoorden moet je leren.</p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Patroon</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Infinitief</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">OVT enkelvoud</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">OVT meervoud</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm" rowspan="3">ij → ee/e</td><td class="px-3 py-2 text-sm">schrijven</td><td class="px-3 py-2 text-sm">ik <strong>schreef</strong></td><td class="px-3 py-2 text-sm">wij <strong>schreven</strong></td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">blijven</td><td class="px-3 py-2 text-sm">ik <strong>bleef</strong></td><td class="px-3 py-2 text-sm">wij <strong>bleven</strong></td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">rijden</td><td class="px-3 py-2 text-sm">ik <strong>reed</strong></td><td class="px-3 py-2 text-sm">wij <strong>reden</strong></td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm" rowspan="3">ie → oo/o</td><td class="px-3 py-2 text-sm">vliegen</td><td class="px-3 py-2 text-sm">ik <strong>vloog</strong></td><td class="px-3 py-2 text-sm">wij <strong>vlogen</strong></td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">schieten</td><td class="px-3 py-2 text-sm">ik <strong>schoot</strong></td><td class="px-3 py-2 text-sm">wij <strong>schoten</strong></td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">verliezen</td><td class="px-3 py-2 text-sm">ik <strong>verloor</strong></td><td class="px-3 py-2 text-sm">wij <strong>verloren</strong></td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm" rowspan="3">i → o/a</td><td class="px-3 py-2 text-sm">zingen</td><td class="px-3 py-2 text-sm">ik <strong>zong</strong></td><td class="px-3 py-2 text-sm">wij <strong>zongen</strong></td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">drinken</td><td class="px-3 py-2 text-sm">ik <strong>dronk</strong></td><td class="px-3 py-2 text-sm">wij <strong>dronken</strong></td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">vinden</td><td class="px-3 py-2 text-sm">ik <strong>vond</strong></td><td class="px-3 py-2 text-sm">wij <strong>vonden</strong></td></tr>
            </tbody>
          </table>
        </div>
        <p><span class="pas-op-highlight">⚠️ PAS OP</span> Sommige sterke werkwoorden lijken zwak, zoals <em>wassen</em> (ik waste, wij wasten – wél sterk!), <em>jagen</em> (jaagde / joeg). Check altijd de lijst.</p>
        <p>Hieronder nog enkele losse sterke werkwoorden die geen duidelijk patroon volgen:</p>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">lopen → ik <strong>liep</strong>, wij <strong>liepen</strong></li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">roepen → ik <strong>riep</strong>, wij <strong>riepen</strong></li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">hangen → ik <strong>hing</strong>, wij <strong>hingen</strong></li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">zwemmen → ik <strong>zwom</strong>, wij <strong>zwommen</strong></li>
        </ul>
      `,
    },
    {
      title: "Onregelmatige werkwoorden – de uitzonderingen 🌟",
      body: `
        <p>Een klein groepje werkwoorden is volledig onregelmatig in de OVT. Deze moet je uit het hoofd leren.</p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Infinitief</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">ik/jij/u/hij</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">wij/jullie/zij</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">zijn</td><td class="px-3 py-2 text-sm"><strong>was</strong></td><td class="px-3 py-2 text-sm"><strong>waren</strong></td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">hebben</td><td class="px-3 py-2 text-sm"><strong>had</strong></td><td class="px-3 py-2 text-sm"><strong>hadden</strong></td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">kunnen</td><td class="px-3 py-2 text-sm"><strong>kon</strong></td><td class="px-3 py-2 text-sm"><strong>konden</strong></td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">zullen</td><td class="px-3 py-2 text-sm"><strong>zou</strong></td><td class="px-3 py-2 text-sm"><strong>zouden</strong></td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">mogen</td><td class="px-3 py-2 text-sm"><strong>mocht</strong></td><td class="px-3 py-2 text-sm"><strong>mochten</strong></td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">willen</td><td class="px-3 py-2 text-sm"><strong>wilde</strong> / <strong>wou</strong></td><td class="px-3 py-2 text-sm"><strong>wilden</strong> / <strong>wouden</strong></td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">worden</td><td class="px-3 py-2 text-sm"><strong>werd</strong></td><td class="px-3 py-2 text-sm"><strong>werden</strong></td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">doen</td><td class="px-3 py-2 text-sm"><strong>deed</strong></td><td class="px-3 py-2 text-sm"><strong>deden</strong></td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">gaan</td><td class="px-3 py-2 text-sm"><strong>ging</strong></td><td class="px-3 py-2 text-sm"><strong>gingen</strong></td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">staan</td><td class="px-3 py-2 text-sm"><strong>stond</strong></td><td class="px-3 py-2 text-sm"><strong>stonden</strong></td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">zien</td><td class="px-3 py-2 text-sm"><strong>zag</strong></td><td class="px-3 py-2 text-sm"><strong>zagen</strong></td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">slaan</td><td class="px-3 py-2 text-sm"><strong>sloeg</strong></td><td class="px-3 py-2 text-sm"><strong>sloegen</strong></td></tr>
            </tbody>
          </table>
        </div>
        <p><span class="pas-op-highlight">⚠️ PAS OP</span> <strong>Willen</strong> heeft twee verledentijdsvormen: formeel <strong>wilde/wilden</strong>, informeel <strong>wou/wouden</strong>. In de schrijftaal is <em>wilde</em> de norm.</p>
        <p><span class="pas-op-highlight">⚠️ PAS OP</span> <strong>Worden</strong> is onregelmatig: <em>werd</em>, niet <em>wordde</em>.</p>
      `,
    },
  ],
  rulesTable: [
    {
      rule: "'t kofschip voor zwakke werkwoorden",
      structure: "Eindigt de stam op een letter uit **'t kofschip** (t, k, f, s, ch, p)? Dan **-te(n)**. Anders **-de(n)**.",
      example: "werken → werk (k) → **werkte**; spelen → speel (l) → **speelde**.",
      usage: "Gebruik de stam na toepassing van v/f- en z/s-regels. Leven → leef (f) → leefde.",
    },
    {
      rule: "Sterke werkwoorden: klinkerverandering",
      structure: "De klinker van de stam verandert. Enkelvoud: geen uitgang. Meervoud: verledentijdsstam + **-en**.",
      example: "schrijven → **schreef** (schreven); vliegen → **vloog** (vlogen).",
      usage: "Er is geen vaste regel; sterke werkwoorden moet je stampen.",
    },
    {
      rule: "Onregelmatige werkwoorden: eigen vormen",
      structure: "Leer deze apart. Ze volgen geen patroon.",
      example: "zijn → **was/waren**, hebben → **had/hadden**, kunnen → **kon/konden**.",
      usage: "Vooral 'worden' (werd) en 'willen' (wilde/wou) zijn beruchte valkuilen.",
    },
  ],
  callouts: [
    { type: "remember", label: "Onthoud 1", text: "Zwak: **'t kofschip** – t, k, f, s, ch, p → -te(n). Anders -de(n)." },
    { type: "remember", label: "Onthoud 2", text: "Sterk: **klinker verandert** – enkelvoud zonder uitgang, meervoud +en." },
    { type: "remember", label: "Onthoud 3", text: "Onregelmatig: **was, had, kon, zou, mocht, wilde/wou, werd** uit het hoofd." },
    { type: "remember", label: "Onthoud 4", text: "Let op de **stam** bij zwakke werkwoorden: pas eerst de v/f‑ en z/s‑regel toe!" },
    { type: "remember", label: "Onthoud 5", text: "Bij stam op t of d: dubbele medeklinker – **zette**, **antwoordde**." },
  ],
  commonMistakes: [
    { incorrect: "Ik wordde lid.", correct: "Ik werd lid.", explanation: "Worden is onregelmatig (werd)." },
    { incorrect: "Ik leesde een boek.", correct: "Ik las een boek.", explanation: "Lezen is sterk (las)." },
    { incorrect: "Ik koste veel geld.", correct: "Ik kostte veel geld.", explanation: "Kosten is zwak, stam 'kost' (t) → -te, met dubbele t." },
    { incorrect: "Ik verhuisde naar Utrecht.", correct: "Ik verhuisde naar Utrecht.", explanation: "Verhuizen: stam 'verhuis' (s) → -te. Pas op: niet 'verhuizde'!" },
    { incorrect: "Ik leefte niet lang.", correct: "Ik leefde niet lang.", explanation: "Leven: stam 'leef' (f) in kofschip → -de (leefde)." },
    { incorrect: "Hij kon niet komen.", correct: "Hij kon niet komen.", explanation: "Correct, maar let op: kunnen is onregelmatig." },
    { incorrect: "Ik wou het niet (in formele tekst).", correct: "Ik wilde het niet.", explanation: "Formeel is wilde; wou is spreektaal." },
  ],
  review: [
    "Zwak: stam + -de(n) of -te(n). Bepaal met 't kofschip.",
    "Sterk: klinkerverandering. Enkelvoud geen uitgang, meervoud +en.",
    "Onregelmatig: was/waren, had/hadden, kon/konden, zou/zouden, mocht/mochten, wilde(n)/wou(den), werd/werden, deed/deden, ging/gingen, stond/stonden, zag/zagen, sloeg/sloegen.",
    "Pas altijd de spellingregels toe op de stam voordat je 't kofschip gebruikt.",
    "Verwar de OVT niet met het voltooid deelwoord.",
  ],
  qa: [
    {
      question: "Geef de OVT enkelvoud en meervoud van het werkwoord **reizen**. Leg uit of het zwak of sterk is en waarom je die uitgang gebruikt.",
      answer: "Het is een zwak werkwoord. De stam is **reis** (van *reizen* min -en, z → s). De laatste letter s zit in 't kofschip, dus -te(n): ik **reisde**, wij **reisden**.",
    },
    {
      question: "Waarom is “Hij wordde lid” fout en wat moet het zijn?",
      answer: "*Worden* is een onregelmatig werkwoord in de OVT. De correcte vorm is **hij werd**. *Wordde* is een verkeerde toepassing van de zwakke regel op een onregelmatig werkwoord.",
    },
    {
      question: "Maak een zin met het werkwoord **schrijven** in de OVT, in het meervoud. Leg uit of de stam verandert.",
      answer: "Bijvoorbeeld: “Wij **schreven** een brief.” *Schrijven* is een sterk werkwoord. De klinker verandert van **ij** naar **e** in het meervoud. Het enkelvoud is *ik schreef* (ij → ee).",
    },
    {
      question: "Wat is het verschil tussen de OVT van **leven** en **loven**? Geef van beide de ik-vorm.",
      answer: "*Leven*: stam **leef**, f in kofschip? Ja, dus -de: ik **leefde**. *Loven*: stam **loof**, f in kofschip? Ja, dus -te: ik **loofde**. Beide krijgen -de.",
    },
    {
      question: "Geef de OVT van **zijn** in het meervoud. Hoe verschilt die van het enkelvoud?",
      answer: "Enkelvoud: ik **was**. Meervoud: wij **waren**. Het enkelvoud is kort (*was*), het meervoud heeft een andere klinker en een extra lettergreep.",
    },
    {
      question: "Wat is de OVT van **willen** in de formele schrijftaal? En wat is een informele variant?",
      answer: "Formeel: ik **wilde**, wij **wilden**. Informeel: ik **wou**, wij **wouden**. In schrijftaal is *wilde(n)* de norm.",
    },
    {
      question: "Leg uit waarom “Ik koste veel geld” fout is en geef de juiste OVT van **kosten** in het enkelvoud.",
      answer: "*Kosten* is een zwak werkwoord met stam **kost**. De t van de stam zit in 't kofschip, dus de OVT is ik **kostte**. De fout *koste* gebruikt de verkeerde uitgang -de en vergeet de dubbele t.",
    },
  ],
};