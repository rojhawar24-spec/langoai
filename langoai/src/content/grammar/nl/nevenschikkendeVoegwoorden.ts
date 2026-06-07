import type { GrammarLesson } from "../../types";

export const nevenschikkendeVoegwoorden: GrammarLesson = {
  id: "nl-nevenschikkendevoegwoorden-1",
  title: "Nevenschikkende Voegwoorden: en, maar, want, of, dus",
  level: 2,
  topic: "Voegwoorden (nevenschikkend)", // [G] Grammatica
  body: "Leer hoe je zinnen verbindt met en, maar, want, of en dus. Met de hoofdregels, kommagebruik en het verschil met onderschikkende voegwoorden.",
  overview:
    "Nevenschikkende voegwoorden zijn de lijm van de Nederlandse taal. In deze **superuitgebreide, glasheldere les** ontdek je hoe je met **en, maar, want, of** en **dus** twee hoofdzinnen of andere gelijkwaardige elementen aan elkaar verbindt. Je leert de cruciale regel dat de woordvolgorde na deze voegwoorden **niet verandert**, wanneer je een komma schrijft, en hoe je ze onderscheidt van onderschikkende voegwoorden zoals *omdat* en *terwijl*. Met talloze voorbeelden, waarschuwingen en 7 ijzersterke oefenvragen verbind jij straks elke zin foutloos.",
  anchorSectionId: "wat",
  exercises: [],
  timeExpressionsLabel: "De vijf nevenschikkende voegwoorden in één oogopslag 📊",
  timeExpressions: {
    header: "Voegwoord | Betekenis | Voorbeeld",
    rows: [
      ["**en**", "opsomming, toevoeging", "Ik kook **en** mijn man dekt de tafel."],
      ["**maar**", "tegenstelling, beperking", "Het is laat, **maar** we blijven nog even."],
      ["**want**", "reden, oorzaak", "Hij komt niet, **want** hij heeft geen tijd."],
      ["**of**", "keuze, alternatief", "Kom je **of** zal ik je ophalen?"],
      ["**dus**", "conclusie, gevolg", "Het regent, **dus** ik pak mijn jas."],
    ],
  },
  details: [
    {
      title: "Wat zijn nevenschikkende voegwoorden? 🎯",
      body: `
        <p>Nevenschikkende voegwoorden verbinden twee <strong>gelijkwaardige</strong> elementen: twee hoofdzinnen, twee woorden, twee woordgroepen of twee zinsdelen. Het allerbelangrijkste kenmerk is dat de <strong>woordvolgorde na het voegwoord niet verandert</strong>: het blijft de volgorde van een gewone hoofdzin (onderwerp – persoonsvorm – rest). Er is dus géén inversie en géén bijzinvolgorde.</p>
        <p>De vijf nevenschikkende voegwoorden die je moet kennen zijn: <strong>en, maar, want, of, dus</strong>.</p>
      `,
    },
    {
      title: "De ijzeren hoofdregel – hoofdzin + voegwoord + hoofdzin ⚖️",
      body: `
        <p>Bij alle nevenschikkende voegwoorden geldt:</p>
        <p><strong>Hoofdzin 1 – voegwoord – hoofdzin 2</strong><br>
        <strong>Hoofdzin 2 = onderwerp + persoonsvorm + rest</strong></p>
        <p>Dit is het absolute kernverschil met onderschikkende voegwoorden zoals <em>omdat, terwijl, hoewel</em>.</p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Nevenschikkend (want)</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Onderschikkend (omdat)</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Ik blijf thuis, want <strong>ik ben</strong> ziek.</td><td class="px-3 py-2 text-sm">Ik blijf thuis, omdat <strong>ik ziek ben</strong>.</td></tr>
            </tbody>
          </table>
        </div>
        <p>Bij <em>want</em> blijft de persoonsvorm naast het onderwerp staan. Bij <em>omdat</em> verhuist de persoonsvorm naar het einde. Dit ene verschil is de sleutel tot het begrijpen van alle nevenschikkende voegwoorden.</p>
      `,
    },
    {
      title: "En – opsomming, toevoeging ➕",
      body: `
        <p><strong>En</strong> plakt dingen aan elkaar, zonder oordeel, gewoon een optelling.</p>
        <h3 class="text-lg font-bold mt-4 mb-2">Tussen hoofdzinnen</h3>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">De zon schijnt <strong>en</strong> de vogels fluiten.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">Ik ga naar de markt <strong>en</strong> mijn broer gaat naar de bakker.</li>
        </ul>
        <h3 class="text-lg font-bold mt-6 mb-2">Tussen woorden of woordgroepen</h3>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">een hond <strong>en</strong> een kat</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">een mooi <strong>en</strong> groot huis</li>
        </ul>
        <p><span class="pas-op-highlight">⚠️ PAS OP</span> Voor <strong>en</strong> schrijf je <strong>geen komma</strong>, tenzij de zinnen erg lang zijn. <em>Hij stond op en liep naar de deur.</em> (geen komma).</p>
      `,
    },
    {
      title: "Maar – tegenstelling, beperking ⚡",
      body: `
        <p><strong>Maar</strong> zet twee dingen tegenover elkaar. Het tweede deel spreekt het eerste tegen of beperkt het.</p>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">Het is koud, <strong>maar</strong> de zon schijnt wel.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">Hij is klein, <strong>maar</strong> hij is erg sterk.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">Ik wil graag komen, <strong>maar</strong> ik heb geen tijd.</li>
        </ul>
        <p><span class="pas-op-highlight">⚠️ PAS OP</span> Voor <strong>maar</strong> schrijf je <strong>altijd een komma</strong> als het twee hoofdzinnen verbindt. <em>Het regent, maar we gaan toch wandelen.</em> Zonder komma is fout.</p>
        <p>Als <strong>maar</strong> 'slechts' betekent, is het een bijwoord en komt er geen komma: <em>Het is maar een spel.</em></p>
      `,
    },
    {
      title: "Want – reden, oorzaak 🧠",
      body: `
        <p><strong>Want</strong> geeft een reden voor wat in het eerste deel is gezegd. Het is synoniem met <em>omdat</em>, maar de woordvolgorde verschilt cruciaal. Na <strong>want</strong> volgt een <strong>hoofdzin</strong>, na <em>omdat</em> een <strong>bijzin</strong>.</p>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">Hij komt te laat, <strong>want</strong> de trein heeft vertraging.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">We gaan naar binnen, <strong>want</strong> het begint te regenen.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">Zij is blij, <strong>want</strong> ze is geslaagd.</li>
        </ul>
        <p><span class="pas-op-highlight">⚠️ PAS OP</span> Voor <strong>want</strong> schrijf je <strong>altijd een komma</strong>. Na <strong>want</strong> staat de persoonsvorm direct na het onderwerp, niet aan het einde: <em>...want ik ben moe.</em> (niet: <em>...want ik moe ben.</em>).</p>
      `,
    },
    {
      title: "Of – keuze, alternatief 🔀",
      body: `
        <p><strong>Of</strong> biedt een keuze tussen twee of meer mogelijkheden. Het kan hoofdzinnen verbinden, maar ook losse woorden of woordgroepen.</p>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">Wil je koffie <strong>of</strong> wil je thee?</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">Gaan we morgen <strong>of</strong> gaan we overmorgen?</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">koffie <strong>of</strong> thee, vandaag <strong>of</strong> morgen</li>
        </ul>
        <p><span class="pas-op-highlight">⚠️ PAS OP</span> Voor <strong>of</strong> schrijf je <strong>geen komma</strong>, tenzij de zinnen erg lang zijn. <em>Ga je mee of blijf je thuis?</em> (geen komma).</p>
        <p><strong>Of</strong> kan ook een onderschikkend voegwoord zijn in bijzinnen: <em>Ik weet niet of hij komt.</em> Dan verandert de volgorde wél. Herken je het verschil? Als je de tweede helft als zelfstandige vraag kunt stellen, is <strong>of</strong> nevenschikkend.</p>
      `,
    },
    {
      title: "Dus – conclusie, gevolg 🏁",
      body: `
        <p><strong>Dus</strong> trekt een conclusie uit wat eerder is gezegd. Het geeft een logisch gevolg aan.</p>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">Het regent, <strong>dus</strong> ik neem een paraplu mee.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">Hij heeft hard gestudeerd, <strong>dus</strong> hij zal wel slagen.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">Er is geen brood meer, <strong>dus</strong> ik ga naar de bakker.</li>
        </ul>
        <p><span class="pas-op-highlight">⚠️ PAS OP</span> Voor <strong>dus</strong> mag een komma, maar het is niet verplicht. <em>Ik ben moe dus ik ga naar bed.</em> (zonder komma kan). Wel netter met komma. Als <strong>dus</strong> midden in een zin staat en geen twee hoofdzinnen verbindt, is het een bijwoord: <em>Hij heeft dus geen tijd.</em></p>
      `,
    },
    {
      title: "Vergelijking met onderschikkende voegwoorden – een must 🆚",
      body: `
        <p>Het verschil tussen nevenschikkende en onderschikkende voegwoorden is essentieel. Bekijk deze tabel goed:</p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Nevenschikkend (hoofdzinvolgorde)</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Onderschikkend (bijzinvolgorde)</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm"><strong>want</strong>: Ik ben thuis, want <strong>ik ben</strong> ziek.</td><td class="px-3 py-2 text-sm"><strong>omdat</strong>: Ik ben thuis, omdat <strong>ik ziek ben</strong>.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm"><strong>maar</strong>: Hij is arm, maar <strong>hij is</strong> gelukkig.</td><td class="px-3 py-2 text-sm"><strong>hoewel</strong>: Hoewel <strong>hij arm is</strong>, is hij gelukkig.</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm"><strong>dus</strong>: Het regent, dus <strong>ik blijf</strong> thuis.</td><td class="px-3 py-2 text-sm"><strong>zodat</strong>: Het regent, zodat <strong>ik thuis blijf</strong>.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm"><strong>en</strong>: Zij kookt en <strong>hij wast</strong> af.</td><td class="px-3 py-2 text-sm"><strong>terwijl</strong>: Zij kookt, terwijl <strong>hij afwast</strong>.</td></tr>
            </tbody>
          </table>
        </div>
        <p>Bij de onderschikkende voegwoorden verhuist de persoonsvorm naar het einde van de bijzin. Bij de nevenschikkende blijft hij op zijn vertrouwde plek staan. Dit moet je uit je hoofd leren!</p>
      `,
    },
  ],
  rulesTable: [
    {
      rule: "Hoofdzinvolgorde na nevenschikkende voegwoorden",
      structure: "Na **en, maar, want, of, dus** blijft de volgorde: **onderwerp – persoonsvorm – rest**. Er verandert niets.",
      example: "Ik blijf thuis, want **ik ben** moe. (niet: want ik moe ben).",
      usage: "Dit is de belangrijkste regel. Controleer altijd of de persoonsvorm direct na het onderwerp staat.",
    },
    {
      rule: "Komma's: verplicht bij maar en want, niet bij en en of, optioneel bij dus",
      structure: "**Maar** en **want** krijgen altijd een komma vóór het voegwoord als het twee hoofdzinnen verbindt. **En** en **of** krijgen geen komma bij korte zinnen. **Dus** mag met of zonder komma.",
      example: "Het is koud, maar de zon schijnt. / Ik kook en mijn man dekt de tafel.",
      usage: "Bij lange zinnen kan een komma voor de leesbaarheid altijd, maar bij 'en' en 'of' meestal niet nodig.",
    },
    {
      rule: "En kan onderwerpen samentrekken",
      structure: "Als het onderwerp in de tweede hoofdzin hetzelfde is als in de eerste, kun je het vaak weglaten. De zin wordt dan compacter.",
      example: "Hij stond op **en** (hij) liep naar de deur.",
      usage: "Let op: als het onderwerp verschilt, moet je het wel herhalen.",
    },
    {
      rule: "Of kan ook onderschikkend zijn",
      structure: "**Of** is nevenschikkend als het een keuze aangeeft tussen twee gelijkwaardige delen. Het is onderschikkend als het een bijzin inleidt na werkwoorden als *weten, vragen, twijfelen*.",
      example: "Nevenschikkend: Wil je koffie of thee? Onderschikkend: Ik weet niet **of** hij **komt**.",
      usage: "Test: kun je het tweede deel als zelfstandige vraag stellen? Dan is het nevenschikkend.",
    },
    {
      rule: "Dus als bijwoord vs. voegwoord",
      structure: "Als **dus** midden in de zin staat en geen twee hoofdzinnen verbindt, is het een bijwoord (betekenis: derhalve). Als voegwoord staat het tussen twee hoofdzinnen.",
      example: "Voegwoord: Het regent, dus ik blijf thuis. Bijwoord: Hij heeft dus geen tijd.",
      usage: "Bij bijwoordelijk gebruik staat 'dus' vaak na de persoonsvorm.",
    },
  ],
  callouts: [
    { type: "remember", label: "Onthoud 1", text: "Nevenschikkend: **en, maar, want, of, dus** – volgorde blijft gelijk (geen bijzin)." },
    { type: "remember", label: "Onthoud 2", text: "Komma: **altijd** voor 'maar' en 'want'; **niet** voor 'en' en 'of'; **mag** voor 'dus'." },
    { type: "remember", label: "Onthoud 3", text: "**Want** en **omdat** betekenen hetzelfde, maar de volgorde verschilt: want + hoofdzin, omdat + bijzin." },
    { type: "remember", label: "Onthoud 4", text: "**Of** is nevenschikkend bij keuze, onderschikkend in bijzinnen zoals 'ik weet niet of...'." },
    { type: "remember", label: "Onthoud 5", text: "Na nevenschikkende voegwoorden staat het onderwerp vóór de persoonsvorm: *want ik ben* (niet *want ben ik*)." },
  ],
  commonMistakes: [
    {
      incorrect: "Ik blijf thuis, want ik moe ben.",
      correct: "Ik blijf thuis, want ik ben moe.",
      explanation: "Na 'want' volgt een hoofdzin; het werkwoord mag niet naar het einde.",
    },
    {
      incorrect: "Het regent, maar we gaan wandelen. (zonder komma)",
      correct: "Het regent, maar we gaan wandelen.",
      explanation: "Voor 'maar' schrijf je altijd een komma als het twee hoofdzinnen verbindt.",
    },
    {
      incorrect: "Wil je koffie, of thee?",
      correct: "Wil je koffie of thee?",
      explanation: "Tussen twee woorden of korte zinnen komt meestal geen komma voor 'of'.",
    },
    {
      incorrect: "Hij is rijk maar niet gelukkig.",
      correct: "Hij is rijk, maar niet gelukkig.",
      explanation: "Ook bij een samentrekking (tweede onderwerp weggelaten) blijft de komma voor 'maar' staan.",
    },
    {
      incorrect: "Ze heeft hard geleerd, dus ze is geslaagd. (zonder komma mag ook, maar komma is netter)",
      correct: "Beide mogen, maar komma is gebruikelijker.",
      explanation: "Bij 'dus' is de komma niet verplicht, maar wel aan te raden voor de duidelijkheid.",
    },
  ],
  review: [
    "Nevenschikkende voegwoorden: **en, maar, want, of, dus**.",
    "Ze verbinden **twee hoofdzinnen** of gelijkwaardige delen.",
    "De volgorde na het voegwoord blijft: **onderwerp – persoonsvorm – rest**.",
    "Komma's: **maar** en **want** met komma; **en** en **of** zonder; **dus** optioneel.",
    "**Want** + hoofdzin, **omdat** + bijzin.",
    "**Of** kan nevenschikkend (keuze) of onderschikkend (bijzin) zijn.",
    "Leer het verschil met onderschikkende voegwoorden uit je hoofd!",
  ],
  qa: [
    {
      question: "Waarom is de volgorde in 'Ik blijf thuis, want ik ben ziek' anders dan in 'Ik blijf thuis, omdat ik ziek ben'?",
      answer: "**Want** is nevenschikkend; na *want* volgt een hoofdzin met de gewone volgorde *ik ben*. **Omdat** is onderschikkend; na *omdat* volgt een bijzin met de persoonsvorm achteraan: *ik ziek ben*. Het verschil in volgorde is het belangrijkste kenmerk tussen de twee soorten voegwoorden.",
    },
    {
      question: "Voeg de twee zinnen samen met het juiste voegwoord en een komma: 'Het regent hard. We gaan toch wandelen.'",
      answer: "**Het regent hard, maar we gaan toch wandelen.** Je gebruikt *maar* omdat er een tegenstelling is. Voor *maar* schrijf je een komma.",
    },
    {
      question: "Waarom is 'Hij neemt een appel, of hij neemt een peer' minder gebruikelijk dan 'Hij neemt een appel of een peer'?",
      answer: "Omdat de twee hoofdzinnen hetzelfde werkwoord en onderwerp hebben. Je kunt de tweede zin inkorten door alleen het zinsdeel te noemen: *Hij neemt een appel of een peer.* Dat is korter en natuurlijker. De volledige herhaling is niet fout, maar omslachtig.",
    },
    {
      question: "Vul in: 'Zij is geslaagd, ___ ze heeft keihard geleerd.' Welk voegwoord past en waarom?",
      answer: "**Want.** De zin geeft een reden voor het slagen: het harde leren. *Want* verbindt de oorzaak met het gevolg. *Dus* zou de omgekeerde volgorde hebben: *Ze heeft hard geleerd, dus ze is geslaagd.*",
    },
    {
      question: "Is 'of' in 'Ik weet niet of hij komt' nevenschikkend of onderschikkend? Leg uit.",
      answer: "**Onderschikkend.** Het leidt een bijzin in na *weten*, en het werkwoord *komt* staat achteraan. Je kunt het tweede deel niet als zelfstandige vraag stellen (*Komt hij?* is wel een vraag, maar in de context is het geen keuze).",
    },
    {
      question: "Corrigeer de fout: 'De trein is vertrokken dus we moeten wachten.' (Er is misschien geen fout, maar leg de komma uit.)",
      answer: "Er is geen fout. De komma voor *dus* is correct, al is hij niet strikt verplicht. De zin is een perfect voorbeeld van *dus* als nevenschikkend voegwoord met de juiste volgorde: *we moeten*, met het onderwerp voor de persoonsvorm.",
    },
    {
      question: "Verbind de zinnen 'De zon schijnt' en 'het is koud' met elk van de vijf nevenschikkende voegwoorden. Controleer de komma's.",
      answer: "1) De zon schijnt **en** het is koud. (geen komma) 2) De zon schijnt, **maar** het is koud. (komma) 3) De zon schijnt, **want** het is koud. (komma; logischer: Het is koud, want de zon schijnt niet.) 4) Schijnt de zon **of** is het koud? (geen komma) 5) De zon schijnt niet, **dus** het is koud. (komma gebruikelijk).",
    },
  ],
};