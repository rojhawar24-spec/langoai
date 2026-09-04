import type { GrammarLesson } from "../../types";

export const wederkerendVoornaamwoord: GrammarLesson = {
  id: "nl-wederkerendvnw-1",
  title: "Het Wederkerend Voornaamwoord: me, je, zich, ons",
  level: 2,
  topic: "Wederkerend voornaamwoord", // [G] Grammatica
  body: "Leer hoe je wederkerende voornaamwoorden gebruikt. Met me, je, zich, ons en alle verplichte en toevallige werkwoorden.",
  overview:
    "Een wederkerend voornaamwoord gebruik je als het onderwerp de handeling op zichzelf richt. In deze **supervolledige les** leer je alle vormen (**me, je, zich, ons**), het verschil tussen verplicht en toevallig wederkerende werkwoorden, de precieze plaats in de zin, de nadruksvormen en de gebiedende wijs. Met heldere tabellen, eindeloos veel voorbeelden, PAS OP‑waarschuwingen en 7 ijzersterke oefenvragen beheers je het wederkerend voornaamwoord volledig.",
  anchorSectionId: "wat",
  exercises: [],
  timeExpressionsLabel: "De vormen van het wederkerend voornaamwoord 📊",
  timeExpressions: {
    header: "Onderwerp | Wederkerend vnw | Voorbeeldzin",
    rows: [
      ["ik", "**me**", "Ik vergis me."],
      ["jij / je", "**je**", "Jij vergist je."],
      ["u", "**zich** (of u)", "U vergist zich."],
      ["hij / zij / het", "**zich**", "Hij vergist zich."],
      ["wij / we", "**ons**", "Wij vergissen ons."],
      ["jullie", "**je**", "Jullie vergissen je."],
      ["zij / ze (meervoud)", "**zich**", "Zij vergissen zich."],
    ],
  },
  details: [
    {
      title: "Wat is een wederkerend voornaamwoord? 🎯",
      body: `
        <p>Een <strong>wederkerend voornaamwoord</strong> gebruik je als het onderwerp van de zin de handeling op zichzelf richt. De actie komt terug bij degene die hem uitvoert. Het wederkerend voornaamwoord maakt deel uit van het <strong>wederkerend werkwoord</strong> en is daarmee één onafscheidelijk geheel.</p>
        <p>Vergelijk:</p>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">Ik was <strong>de auto</strong>. (lijdend voorwerp is iets anders)</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">Ik was <strong>me</strong>. (wederkerend voornaamwoord: ik was mijzelf)</li>
        </ul>
        <p>Het wederkerend voornaamwoord past zich aan bij het onderwerp. In deze les leer je alle vormen en regels.</p>
      `,
    },
    {
      title: "De vormen in detail – met heel veel voorbeelden 🧩",
      body: `
        <p>Het wederkerend voornaamwoord verandert mee met het onderwerp. Hieronder vind je per persoon een aantal voorbeelden.</p>
        <h3 class="text-lg font-bold mt-4 mb-2">Ik → me</h3>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">Ik schaam <strong>me</strong>.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">Ik vergis <strong>me</strong> nooit.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">Ik herinner <strong>me</strong> die dag nog goed.</li>
        </ul>
        <h3 class="text-lg font-bold mt-6 mb-2">Jij → je</h3>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">Jij vergist <strong>je</strong>.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">Haast <strong>je</strong> je niet? (twee keer je)</li>
        </ul>
        <p><span class="pas-op-highlight">⚠️ PAS OP</span> Bij 'je' als onderwerp en wederkerend voornaamwoord kan er twee keer 'je' in dezelfde zin staan. <em>Haast je je?</em> is perfect Nederlands.</p>
        <h3 class="text-lg font-bold mt-6 mb-2">Hij / zij / het → zich</h3>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">Hij schaamt <strong>zich</strong>.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">Het paard wast <strong>zich</strong> in de rivier.</li>
        </ul>
        <h3 class="text-lg font-bold mt-6 mb-2">U → zich (of u)</h3>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">U vergist <strong>zich</strong>.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">U voelt <strong>zich</strong> welkom. (of: U voelt <strong>u</strong> welkom)</li>
        </ul>
        <h3 class="text-lg font-bold mt-6 mb-2">Wij → ons</h3>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">Wij schamen <strong>ons</strong>.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">We haasten <strong>ons</strong> naar de trein.</li>
        </ul>
        <h3 class="text-lg font-bold mt-6 mb-2">Jullie → je</h3>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">Jullie vergissen <strong>je</strong>.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">Jullie moeten <strong>je</strong> wassen.</li>
        </ul>
        <p><span class="pas-op-highlight">⚠️ PAS OP</span> Het wederkerend voornaamwoord bij 'jullie' is <strong>je</strong>, niet 'jullie'.</p>
        <h3 class="text-lg font-bold mt-6 mb-2">Zij (meervoud) → zich</h3>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">Zij schamen <strong>zich</strong>.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">Ze ergeren <strong>zich</strong> aan het lawaai.</li>
        </ul>
      `,
    },
    {
      title: "Verplicht wederkerende werkwoorden – altijd met zich, me, je... 🔒",
      body: `
        <p>Sommige werkwoorden bestaan <strong>alleen</strong> in combinatie met een wederkerend voornaamwoord. Zonder dat voornaamwoord bestaan ze niet, of ze betekenen iets totaal anders. Leer deze werkwoorden altijd met <em>zich</em> erbij.</p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Werkwoord</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Voorbeeldzin</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">zich vergissen</td><td class="px-3 py-2 text-sm">Ik heb <strong>me</strong> lelijk vergist.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">zich schamen</td><td class="px-3 py-2 text-sm">Hij schaamt <strong>zich</strong> nergens voor.</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">zich verslapen</td><td class="px-3 py-2 text-sm">Zij heeft <strong>zich</strong> vanmorgen verslapen.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">zich bemoeien (met)</td><td class="px-3 py-2 text-sm">Bemoei <strong>je</strong> met je eigen zaken!</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">zich herinneren</td><td class="px-3 py-2 text-sm">Ik herinner <strong>me</strong> die dag nog goed.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">zich gedragen</td><td class="px-3 py-2 text-sm">Gedraag <strong>je</strong> eens fatsoenlijk!</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">zich haasten</td><td class="px-3 py-2 text-sm">We moeten <strong>ons</strong> haasten.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">zich aanstellen</td><td class="px-3 py-2 text-sm">Stel <strong>je</strong> niet zo aan!</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">zich ergeren</td><td class="px-3 py-2 text-sm">Ik erger <strong>me</strong> aan dat lawaai.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">zich verheugen (op)</td><td class="px-3 py-2 text-sm">Ik verheug <strong>me</strong> op de vakantie.</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">zich verbazen (over)</td><td class="px-3 py-2 text-sm">Zij verbaast <strong>zich</strong> over al dat geweld.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">zich storen (aan)</td><td class="px-3 py-2 text-sm">Ik stoor <strong>me</strong> aan dat geschreeuw.</td></tr>
            </tbody>
          </table>
        </div>
        <p>Er zijn er nog meer, maar deze zijn het belangrijkst. Onthoud: deze werkwoorden kun je <strong>niet</strong> zonder wederkerend voornaamwoord gebruiken.</p>
      `,
    },
    {
      title: "Toevallig wederkerende werkwoorden – kan met én zonder 🔓",
      body: `
        <p>Sommige werkwoorden kunnen <strong>met</strong> een wederkerend voornaamwoord, maar ook <strong>zonder</strong>. Het wederkerend voornaamwoord gebruik je dan om aan te geven dat het onderwerp de handeling op zichzelf richt.</p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Werkwoord</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Zonder wederkerend vnw</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Met wederkerend vnw</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">wassen</td><td class="px-3 py-2 text-sm">Ik was de hond.</td><td class="px-3 py-2 text-sm">Ik was <strong>me</strong>.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">scheren</td><td class="px-3 py-2 text-sm">De barbier scheert de klant.</td><td class="px-3 py-2 text-sm">Hij scheert <strong>zich</strong>.</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">aankleden</td><td class="px-3 py-2 text-sm">De moeder kleedt het kind aan.</td><td class="px-3 py-2 text-sm">Ik kleed <strong>me</strong> aan.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">verbranden</td><td class="px-3 py-2 text-sm">Ik verbrand het papier.</td><td class="px-3 py-2 text-sm">Ik verbrand <strong>me</strong> aan de oven.</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">vervelen</td><td class="px-3 py-2 text-sm">Dat werk verveelt me.</td><td class="px-3 py-2 text-sm">Ik verveel <strong>me</strong>.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">verdedigen</td><td class="px-3 py-2 text-sm">De advocaat verdedigt de verdachte.</td><td class="px-3 py-2 text-sm">Hij verdedigt <strong>zich</strong>.</td></tr>
            </tbody>
          </table>
        </div>
        <p><span class="pas-op-highlight">⚠️ PAS OP</span> Bij <em>vervelen</em>: 'Dat werk verveelt me' (iets is saai) versus 'Ik verveel me' (ik heb niets te doen). Let op het betekenisverschil.</p>
      `,
    },
    {
      title: "Plaatsing van het wederkerend voornaamwoord in de zin 📍",
      body: `
        <h3 class="text-lg font-bold mt-4 mb-2">In de hoofdzin (mededelend)</h3>
        <p>Het wederkerend voornaamwoord staat <strong>direct na de persoonsvorm</strong>.</p>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">Ik <strong>vergis me</strong> nooit.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">Hij <strong>schaamt zich</strong>.</li>
        </ul>
        <h3 class="text-lg font-bold mt-6 mb-2">Met inversie (ander zinsdeel voorop)</h3>
        <p>Het onderwerp komt achter de persoonsvorm, het wederkerend voornaamwoord volgt direct na het onderwerp.</p>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">Gisteren <strong>heeft hij zich</strong> vergist.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">Nooit <strong>zullen zij zich</strong> vervelen.</li>
        </ul>
        <h3 class="text-lg font-bold mt-6 mb-2">In de bijzin</h3>
        <p>Het wederkerend voornaamwoord staat <strong>vóór de werkwoordelijke eindgroep</strong>.</p>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">...omdat ik <strong>me</strong> vergis.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">...omdat hij <strong>zich</strong> heeft verslapen.</li>
        </ul>
        <h3 class="text-lg font-bold mt-6 mb-2">Bij scheidbare werkwoorden</h3>
        <p>Het wederkerend voornaamwoord staat vóór het scheidbare voorvoegsel.</p>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">Ik <strong>kleed me</strong> aan. → ...omdat ik <strong>me</strong> aankleed.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">Hij <strong>slooft zich</strong> uit. → ...omdat hij <strong>zich</strong> uitslooft.</li>
        </ul>
        <h3 class="text-lg font-bold mt-6 mb-2">In combinatie met andere voornaamwoorden</h3>
        <p>Het wederkerend voornaamwoord blijft direct na de persoonsvorm, andere voornaamwoorden volgen erna.</p>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">Ik was <strong>me</strong> de handen.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">Ik erger <strong>me</strong> eraan.</li>
        </ul>
      `,
    },
    {
      title: "Zich of zichzelf? – Nadruksvormen 👤",
      body: `
        <p>Voor de derde persoon enkelvoud en meervoud is <strong>zich</strong> het gewone, onbeklemtoonde wederkerend voornaamwoord. Wil je extra nadruk leggen of verwarring voorkomen, dan gebruik je <strong>zichzelf</strong>.</p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Zonder nadruk</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Met nadruk</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Hij wast <strong>zich</strong>.</td><td class="px-3 py-2 text-sm">Hij wast <strong>zichzelf</strong> (en niet een ander).</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Zij vergist <strong>zich</strong>.</td><td class="px-3 py-2 text-sm">Zij vergist <strong>zichzelf</strong>.</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Het kind kleedt <strong>zich</strong> aan.</td><td class="px-3 py-2 text-sm">Het kind kleedt <strong>zichzelf</strong> aan (zonder hulp).</td></tr>
            </tbody>
          </table>
        </div>
        <p>Ook voor de eerste en tweede persoon bestaan nadruksvormen: <strong>mijzelf, jezelf, uzelf, onszelf, julliezelf/jezelf</strong>.</p>
        <p><span class="pas-op-highlight">⚠️ PAS OP</span> Gebruik de nadruksvormen alleen als de nadruk écht nodig is. Overmatig gebruik maakt je taal onnatuurlijk zwaar.</p>
      `,
    },
    {
      title: "Gebiedende wijs 🗣️",
      body: `
        <p>Bij bevelen of aansporingen blijft het wederkerend voornaamwoord gewoon staan.</p>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>Vergis je</strong> niet! (jij/jullie)</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>Vergist u zich</strong> niet! (u, formeler)</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>Schaam je</strong>! / <strong>Schaamt u zich</strong>!</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>Haast je</strong>! / <strong>Haast u zich</strong>!</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">Laten we <strong>ons</strong> wassen! (voorstel)</li>
        </ul>
        <p>Bij 'u' mag zowel 'zich' als 'u' gebruikt worden. 'Zich' is formeler.</p>
      `,
    },
  ],
  rulesTable: [
    {
      rule: "Vormen uit het hoofd leren",
      structure: "Ik → **me**, jij → **je**, u → **zich**, hij/zij/het → **zich**, wij → **ons**, jullie → **je**, zij → **zich**.",
      example: "Ik vergis **me**. Jullie vergissen **je**. Zij schamen **zich**.",
      usage: "Dit rijtje is de basis voor alle wederkerende werkwoorden.",
    },
    {
      rule: "Verplicht wederkerend: altijd met voornaamwoord",
      structure: "Werkwoorden zoals **zich vergissen, zich schamen, zich verslapen** bestaan niet zonder het wederkerend voornaamwoord.",
      example: "Ik vergis **me**. Niet: *Ik vergis.*",
      usage: "Leer deze werkwoorden altijd met 'zich' erbij.",
    },
    {
      rule: "Plaatsing: direct na de persoonsvorm",
      structure: "In de hoofdzin staat het wederkerend voornaamwoord **direct na de persoonsvorm**. In de bijzin komt het **vóór** de werkwoorden aan het eind.",
      example: "Hoofdzin: Ik **vergis me**. Bijzin: ...omdat ik **me** vergis.",
      usage: "Ook bij inversie blijft het wederkerend voornaamwoord na het onderwerp staan.",
    },
    {
      rule: "Jullie → je, niet jullie",
      structure: "Het wederkerend voornaamwoord voor de tweede persoon meervoud is **je**, niet *jullie*.",
      example: "Jullie moeten **je** haasten. Niet: *Jullie moeten jullie haasten.*",
      usage: "Deze fout komt vaak voor. Leer hem te vermijden.",
    },
    {
      rule: "Nadruksvormen voor extra nadruk",
      structure: "Gebruik **mijzelf, jezelf, zichzelf, onszelf** alleen als je echt nadruk wilt leggen. Anders zijn de gewone vormen prima.",
      example: "Hij verdedigt **zichzelf** (zonder advocaat). Normaal: Hij verdedigt **zich**.",
      usage: "Te veel 'zichzelf' maakt je taal onnatuurlijk.",
    },
  ],
  callouts: [
    { type: "remember", label: "Onthoud 1", text: "Ik → me, jij → je, u → zich, hij/zij/het → zich, wij → ons, jullie → je, zij → zich." },
    { type: "remember", label: "Onthoud 2", text: "Verplicht wederkerend: *zich vergissen, zich schamen, zich verslapen* – altijd met voornaamwoord." },
    { type: "remember", label: "Onthoud 3", text: "Plaatsing: direct na de persoonsvorm; in de bijzin vóór de werkwoorden aan het eind." },
    { type: "remember", label: "Onthoud 4", text: "**Jullie** wederkerend = **je**, niet *jullie*." },
  ],
  commonMistakes: [
    {
      incorrect: "Ik vergis.",
      correct: "Ik vergis me.",
      explanation: "'Zich vergissen' is verplicht wederkerend; het voornaamwoord is noodzakelijk.",
    },
    {
      incorrect: "Jullie vergissen jullie.",
      correct: "Jullie vergissen je.",
      explanation: "Het wederkerend voornaamwoord bij 'jullie' is 'je', niet 'jullie'.",
    },
    {
      incorrect: "Hij wast hem. (als hij zichzelf wast)",
      correct: "Hij wast zich.",
      explanation: "'Zich' is het wederkerend voornaamwoord voor de derde persoon; 'hem' verwijst naar een ander.",
    },
    {
      incorrect: "...omdat hij vergist zich.",
      correct: "...omdat hij zich vergist.",
      explanation: "In een bijzin staat het wederkerend voornaamwoord vóór de werkwoorden.",
    },
    {
      incorrect: "Haast jij je? (zonder inversie, maar bedoeld als vraag)",
      correct: "Haast je je?",
      explanation: "In een vraagzin komt de persoonsvorm vooraan; het wederkerend voornaamwoord volgt direct.",
    },
    {
      incorrect: "Zij herinnert haar het verhaal.",
      correct: "Zij herinnert zich het verhaal.",
      explanation: "'Zich herinneren' vereist 'zich', niet 'haar'.",
    },
  ],
  review: [
    "Wederkerend voornaamwoord verwijst terug naar het onderwerp.",
    "Vormen: me (ik), je (jij), zich (u/hij/zij/het), ons (wij), je (jullie), zich (zij mv).",
    "Verplicht wederkerend: *zich vergissen, schamen, verslapen, bemoeien, herinneren, gedragen, haasten, aanstellen, ergeren, verheugen* – altijd met voornaamwoord.",
    "Toevallig wederkerend: *wassen, scheren, aankleden, verbranden, vervelen* – kan met en zonder.",
    "Plaatsing: direct na de persoonsvorm; bijzin: vóór de werkwoorden aan het eind.",
    "Nadruksvormen: mezelf, jezelf, zichzelf, onszelf – alleen bij nadruk.",
    "Gebiedende wijs: *Vergis je! / Vergist u zich!*",
    "Jullie → je, niet jullie!",
  ],
  qa: [
    {
      question: "Waarom is “Ik vergis” een onvolledige zin?",
      answer: "Omdat 'zich vergissen' een verplicht wederkerend werkwoord is. Het wederkerend voornaamwoord 'me' hoort erbij: **Ik vergis me.**",
    },
    {
      question: "Leg uit: “De moeder wast de baby” versus “De moeder wast zich”.",
      answer: "In de eerste zin is 'de baby' het lijdend voorwerp (iemand anders). In de tweede zin is 'zich' het wederkerend voornaamwoord; de moeder wast zichzelf. 'Wassen' is hier toevallig wederkerend.",
    },
    {
      question: "Wat is het juiste wederkerend voornaamwoord bij 'jullie'? Waarom is “Jullie schamen jullie” fout?",
      answer: "Het juiste voornaamwoord is **je**. 'Jullie schamen jullie' is fout omdat het wederkerend voornaamwoord voor de tweede persoon meervoud 'je' is, niet 'jullie'. Correct: **Jullie schamen je.**",
    },
    {
      question: "Plaats het wederkerend voornaamwoord in de bijzin: “...omdat hij (zich) (verslapen) heeft.”",
      answer: "**...omdat hij zich heeft verslapen.** In de bijzin komt het wederkerend voornaamwoord vóór de werkwoordelijke eindgroep.",
    },
    {
      question: "Wat is het verschil tussen 'zich' en 'zichzelf'?",
      answer: "'Zich' is de gewone vorm. 'Zichzelf' gebruik je voor extra nadruk of om verwarring te voorkomen. Bijv. 'Hij wast zichzelf' (zonder hulp) versus 'Hij wast zich' (normaal).",
    },
    {
      question: "Corrigeer: “Jullie moeten jullie haasten.”",
      answer: "**Jullie moeten je haasten.** Het wederkerend voornaamwoord is 'je'.",
    },
    {
      question: "Vertaal: “I remember the story.” Leg je keuze uit.",
      answer: "**Ik herinner me het verhaal.** 'Zich herinneren' is verplicht wederkerend; bij 'ik' hoort 'me'.",
    },
  ],
};