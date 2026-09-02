import type { GrammarLesson } from "../../types";

export const onderschikkendeVoegwoorden: GrammarLesson = {
  id: "nl-onderschikkendevoegwoorden-1",
  title: "Onderschikkende Voegwoorden: dat, omdat, toen, hoewel, als, zodat",
  level: 2,
  topic: "Voegwoorden (onderschikkend)", // [G] Grammatica
  body: "Leer hoe je bijzinnen maakt met dat, omdat, toen, hoewel, als en zodat. Met de bijzinvolgorde, inversie en alle valkuilen.",
  overview:
    "Onderschikkende voegwoorden verbinden een **hoofdzin** met een **bijzin**. In deze **superuitgebreide, glasheldere les** ontdek je de regels voor **dat, omdat, toen, hoewel, als** en **zodat**. Je leert dat de persoonsvorm in de bijzin achteraan staat, hoe scheidbare werkwoorden zich gedragen, wat er gebeurt als de bijzin voorop staat, en wat de verschillen zijn met nevenschikkende voegwoorden zoals *want* en *maar*. Met talloze voorbeelden, waarschuwingen en 7 ijzersterke oefenvragen bouw jij elke bijzin foutloos.",
  anchorSectionId: "wat",
  exercises: [],
  timeExpressionsLabel: "De zes onderschikkende voegwoorden in één oogopslag 📊",
  timeExpressions: {
    header: "Voegwoord | Functie | Voorbeeld",
    rows: [
      ["**dat**", "feit, mededeling", "Ik weet dat hij morgen **komt**."],
      ["**omdat**", "reden, oorzaak", "Ik blijf thuis, omdat ik ziek **ben**."],
      ["**toen**", "tijdstip in het verleden", "Hij schrok, toen de bel **ging**."],
      ["**hoewel**", "tegenstelling, toegeving", "Hoewel het regent, **ga ik** wandelen."],
      ["**als**", "voorwaarde / tijd (toekomst/gewoonte)", "Als je moe bent, **moet je** rusten."],
      ["**zodat**", "gevolg, doel", "Ze fluisterde, zodat niemand haar **kon horen**."],
    ],
  },
  details: [
    {
      title: "Wat zijn onderschikkende voegwoorden? 🎯",
      body: `
        <p>Onderschikkende voegwoorden verbinden een <strong>hoofdzin</strong> met een <strong>bijzin</strong>. De bijzin legt iets uit over de hoofdzin: een reden, een voorwaarde, een tijdstip, een tegenstelling, een gevolg of een mededeling. Het allerbelangrijkste kenmerk is dat de <strong>persoonsvorm in de bijzin helemaal achteraan</strong> staat. Dat is het grote verschil met nevenschikkende voegwoorden (<em>en, maar, want, of, dus</em>), waarbij de gewone hoofdzinvolgorde blijft bestaan.</p>
        <p>De zes onderschikkende voegwoorden die je absoluut moet beheersen, zijn: <strong>dat, omdat, toen, hoewel, als, zodat</strong>.</p>
      `,
    },
    {
      title: "De ijzeren hoofdregel – bijzinvolgorde ⚖️",
      body: `
        <p>Bij elk onderschikkend voegwoord geldt:</p>
        <p><strong>Hoofdzin + voegwoord + bijzin</strong><br>
        <strong>Bijzin = onderwerp – (rest) – persoonsvorm helemaal aan het einde</strong></p>
        <p>Alle andere werkwoorden (hulpwerkwoorden, voltooide deelwoorden, infinitieven) staan ook aan het einde, vlak voor of na de persoonsvorm. Het scheidbare voorvoegsel wordt weer aan het werkwoord vastgeplakt.</p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Nevenschikkend (hoofdzinvolgorde)</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Onderschikkend (bijzinvolgorde)</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Ik blijf thuis, want <strong>ik ben</strong> ziek.</td><td class="px-3 py-2 text-sm">Ik blijf thuis, omdat <strong>ik ziek ben</strong>.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Het regent, dus <strong>ik neem</strong> een paraplu mee.</td><td class="px-3 py-2 text-sm">Het regent, zodat <strong>ik een paraplu meeneem</strong>.</td></tr>
            </tbody>
          </table>
        </div>
        <p>Zie je het verschil? Bij de bijzin duikt de persoonsvorm helemaal aan het einde op. Dit is de absolute kern die je moet onthouden.</p>
      `,
    },
    {
      title: "De bijzinvolgorde met verschillende werkwoorden 📐",
      body: `
        <p>Hieronder zie je hoe de bijzinvolgorde werkt met verschillende soorten werkwoorden.</p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Hoofdzin</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Bijzin (met onderschikkend voegwoord)</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Ik weet</td><td class="px-3 py-2 text-sm">dat <strong>hij morgen komt</strong>.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Zij vertelde</td><td class="px-3 py-2 text-sm">dat <strong>ze het boek had gelezen</strong>.</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Hij is moe</td><td class="px-3 py-2 text-sm">omdat <strong>hij de hele dag heeft gewerkt</strong>.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">We blijven thuis</td><td class="px-3 py-2 text-sm">als <strong>het morgen regent</strong>.</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Ik ga mee</td><td class="px-3 py-2 text-sm">hoewel <strong>ik geen zin heb</strong>.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Ze zette haar bril op</td><td class="px-3 py-2 text-sm">zodat <strong>ze de letters beter kon lezen</strong>.</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Hij struikelde</td><td class="px-3 py-2 text-sm">toen <strong>hij de trap op liep</strong>.</td></tr>
            </tbody>
          </table>
        </div>
        <p>Let op: bij een scheidbaar werkwoord in de bijzin plak je het voorvoegsel aan het werkwoord vast en zet je het geheel achteraan:</p>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">Hoofdzin: Hij <strong>ruimt</strong> zijn kamer <strong>op</strong>.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">Bijzin: ...omdat hij zijn kamer <strong>opruimt</strong>.</li>
        </ul>
      `,
    },
    {
      title: "Dat – feit, bewering of mededeling 🗣️",
      body: `
        <p><strong>Dat</strong> is het meest gebruikte onderschikkende voegwoord. Het leidt een bijzin in die een feit, een mededeling, een gedachte of een waarneming weergeeft. Het komt vaak na werkwoorden zoals <em>zeggen, denken, weten, vinden, horen, zien, geloven, hopen, willen, begrijpen</em>.</p>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">Ik weet <strong>dat</strong> hij morgen <strong>komt</strong>.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">Zij zegt <strong>dat</strong> ze het boek al <strong>heeft gelezen</strong>.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">Ik denk <strong>dat</strong> het vandaag <strong>gaat regenen</strong>.</li>
        </ul>
        <p><span class="pas-op-highlight">⚠️ PAS OP</span> Verwar het voegwoord <em>dat</em> niet met het aanwijzend voornaamwoord <em>dat</em>. <em>Ik weet dat boek.</em> is fout. Ook in de spreektaal wordt <em>dat</em> vaak weggelaten (<em>Ik denk hij komt.</em>); in formele taal is <strong>dat</strong> verplicht.</p>
      `,
    },
    {
      title: "Omdat – reden, oorzaak 🧠",
      body: `
        <p><strong>Omdat</strong> geeft een reden of oorzaak aan. Het is synoniem met <em>want</em>, maar <strong>omdat</strong> vereist <strong>bijzinvolgorde</strong> (persoonsvorm achteraan), terwijl <em>want</em> de hoofdzinvolgorde behoudt.</p>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">Ik blijf thuis, <strong>omdat</strong> ik moe <strong>ben</strong>.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">Hij komt te laat, <strong>omdat</strong> de trein vertraging <strong>heeft</strong>.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">Zij is blij, <strong>omdat</strong> ze geslaagd <strong>is</strong>.</li>
        </ul>
        <p><span class="pas-op-highlight">⚠️ PAS OP</span> Veel taalleerders gebruiken de hoofdzinvolgorde na <em>omdat</em>: <em>omdat ik ben moe</em>. Dat is fout. Het moet zijn: <em>omdat ik moe <strong>ben</strong></em>.</p>
        <p>Als de bijzin met <em>omdat</em> voorop staat, volgt inversie in de hoofdzin: <em>Omdat het regent, <strong>blijf ik</strong> thuis.</em></p>
      `,
    },
    {
      title: "Toen – tijdstip in het verleden ⏳",
      body: `
        <p><strong>Toen</strong> verwijst naar een <strong>éénmalig moment</strong> in het verleden. Het werkwoord in de bijzin staat in de verleden tijd.</p>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">Ik schrok, <strong>toen</strong> de telefoon <strong>ging</strong>.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>Toen</strong> hij binnen <strong>kwam</strong>, stond iedereen op.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">Ze begon te huilen, <strong>toen</strong> ze het nieuws <strong>hoorde</strong>.</li>
        </ul>
        <p><span class="pas-op-highlight">⚠️ PAS OP</span> <strong>Toen</strong> is alleen voor het <strong>verleden</strong>. Voor het heden of de toekomst gebruik je <strong>als</strong> of <strong>wanneer</strong>. Voor gewoontes in het verleden gebruik je <strong>als</strong> (zie hieronder bij <em>als</em>).</p>
        <p>Als de bijzin met <em>toen</em> voorop staat, volgt inversie: <em>Toen hij thuiskwam, <strong>was</strong> het eten al klaar.</em></p>
      `,
    },
    {
      title: "Hoewel – tegenstelling, toegeving ⚡",
      body: `
        <p><strong>Hoewel</strong> drukt een tegenstelling of toegeving uit: iets is in strijd met wat je zou verwachten, maar het gebeurt toch. Het is vergelijkbaar met <em>maar</em>, maar <strong>hoewel</strong> vereist <strong>bijzinvolgorde</strong> en kan ook vooraan in de zin staan.</p>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>Hoewel</strong> hij klein <strong>is</strong>, is hij erg sterk.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">Ze ging naar het werk, <strong>hoewel</strong> ze ziek <strong>was</strong>.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>Hoewel</strong> het koud <strong>was</strong>, zaten we buiten.</li>
        </ul>
        <p><span class="pas-op-highlight">⚠️ PAS OP</span> Na <em>hoewel</em> volgt altijd een bijzin, dus de persoonsvorm aan het einde. <em>Hoewel hij is klein</em> is fout. Als de bijzin voorop staat, begint de hoofdzin met inversie.</p>
      `,
    },
    {
      title: "Als – voorwaarde of tijd (toekomst / gewoonte) 🔀",
      body: `
        <p><strong>Als</strong> heeft twee belangrijke functies: het drukt een <strong>voorwaarde</strong> uit, of het verwijst naar een <strong>tijdstip</strong> in de toekomst of een <strong>gewoonte</strong> (zowel in heden als verleden).</p>
        <h3 class="text-lg font-bold mt-4 mb-2">Als = voorwaarde (indien, mits)</h3>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>Als</strong> je moe <strong>bent</strong>, moet je rusten.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">Ik kom alleen, <strong>als</strong> jij ook <strong>komt</strong>.</li>
        </ul>
        <h3 class="text-lg font-bold mt-6 mb-2">Als = tijd in de toekomst</h3>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>Als</strong> ik morgen <strong>thuiskom</strong>, bel ik je.</li>
        </ul>
        <h3 class="text-lg font-bold mt-6 mb-2">Als = gewoonte (herhaling, heden of verleden)</h3>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>Als</strong> ik 's ochtends <strong>opsta</strong>, drink ik eerst koffie. (gewoonte nu)</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>Als</strong> hij vroeger <strong>thuiskwam</strong>, maakte hij meteen muziek. (gewoonte in het verleden)</li>
        </ul>
        <p><span class="pas-op-highlight">⚠️ PAS OP</span> <strong>Toen</strong> is alléén voor een éénmalig moment in het verleden. Voor een gewoonte in het verleden gebruik je <strong>als</strong>.</p>
      `,
    },
    {
      title: "Zodat – gevolg, doel 🎯",
      body: `
        <p><strong>Zodat</strong> drukt een gevolg of een doel uit. Het geeft aan dat iets gebeurt met de bedoeling dat er een bepaald resultaat volgt, of het loutere gevolg is.</p>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">Zet je bril op, <strong>zodat</strong> je de letters beter <strong>ziet</strong>.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">Ze fluisterde, <strong>zodat</strong> niemand haar <strong>kon horen</strong>.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">Ik vertrek vroeg, <strong>zodat</strong> ik op tijd <strong>ben</strong>.</li>
        </ul>
        <p><span class="pas-op-highlight">⚠️ PAS OP</span> Verwar <em>zodat</em> niet met een constructie met 'om te'. Na <em>zodat</em> volgt een volledige bijzin met onderwerp en persoonsvorm. <em>Ik oefen zodat beter worden</em> is fout; correct is <em>Ik oefen zodat ik beter <strong>word</strong>.</em></p>
      `,
    },
    {
      title: "De bijzin voorop – let op de inversie in de hoofdzin 🔄",
      body: `
        <p>Als de bijzin vóór de hoofdzin staat, begint de hoofdzin met de <strong>persoonsvorm</strong>, gevolgd door het onderwerp. Dit heet inversie.</p>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><em>Omdat het regent, <strong>blijf ik</strong> thuis.</em></li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><em>Toen hij klaar was, <strong>ging hij</strong> naar huis.</em></li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><em>Hoewel ze moe is, <strong>werkt ze</strong> door.</em></li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><em>Als je wilt, <strong>help ik</strong> je.</em></li>
        </ul>
        <p>Dit is een absolute regel: <strong>bijzin voorop → inversie in de hoofdzin</strong>. Oefen hier goed op, want het is een van de meest gemaakte fouten.</p>
      `,
    },
  ],
  rulesTable: [
    {
      rule: "Bijzinvolgorde: persoonsvorm achteraan",
      structure: "In een bijzin (na **dat, omdat, toen, hoewel, als, zodat**) staat de persoonsvorm helemaal achteraan. Andere werkwoorden staan ook aan het einde.",
      example: "Ik weet dat hij morgen **komt**. / ...omdat ik moe **ben**.",
      usage: "Scheidbare werkwoorden worden weer één woord: *...omdat hij mij **opbelt**.*",
    },
    {
      rule: "Bijzin voorop → inversie in hoofdzin",
      structure: "Als de bijzin voor de hoofdzin staat, begint de hoofdzin met de persoonsvorm, gevolgd door het onderwerp.",
      example: "**Omdat** het regent, **blijf ik** thuis.",
      usage: "De persoonsvorm van de hoofdzin staat direct na de bijzin. Dit is verplicht.",
    },
    {
      rule: "Toen vs. als voor verleden",
      structure: "**Toen** = éénmalig moment in het verleden. **Als** = gewoonte of herhaling in het verleden (of voorwaarde/toekomst).",
      example: "Toen ik gisteren **thuiskwam**... / Als ik vroeger **thuiskwam**... (gewoonte)",
      usage: "Toen alleen voor unieke gebeurtenissen in het verleden; anders kies 'als'.",
    },
    {
      rule: "Want (nevenschikkend) vs. omdat (onderschikkend)",
      structure: "**Want** behoudt de hoofdzinvolgorde (onderwerp – persoonsvorm). **Omdat** vereist de bijzinvolgorde (persoonsvorm achteraan).",
      example: "Ik blijf thuis, want **ik ben** moe. / Ik blijf thuis, omdat **ik moe ben**.",
      usage: "Gebruik 'want' om fouten met de bijzinvolgorde te vermijden; 'omdat' is formeler.",
    },
    {
      rule: "Dat niet verwarren met het aanwijzend voornaamwoord",
      structure: "Het voegwoord **dat** leidt een bijzin in. Het aanwijzend voornaamwoord **dat** wijst iets aan.",
      example: "Ik weet **dat** hij komt. (voegwoord) / Ik ken **dat** boek. (aanwijzend)",
      usage: "Als je 'dat' kunt vervangen door 'dat ding', is het aanwijzend; anders is het voegwoord.",
    },
  ],
  callouts: [
    { type: "remember", label: "Onthoud 1", text: "Onderschikkend: **persoonsvorm achteraan** in de bijzin." },
    { type: "remember", label: "Onthoud 2", text: "Bijzin voorop? Dan **inversie** in de hoofdzin: *Omdat het regent, blijf ik thuis.*" },
    { type: "remember", label: "Onthoud 3", text: "**Toen** alleen voor verleden eenmalig; **als** voor gewoontes en toekomst." },
    { type: "remember", label: "Onthoud 4", text: "**Want** + hoofdzin, **omdat** + bijzin: het verschil in volgorde is cruciaal." },
    { type: "remember", label: "Onthoud 5", text: "Scheidbare werkwoorden plakken in de bijzin weer aan elkaar en staan achteraan." },
  ],
  commonMistakes: [
    {
      incorrect: "Ik blijf thuis, omdat ik ben moe.",
      correct: "Ik blijf thuis, omdat ik moe ben.",
      explanation: "'Omdat' vereist bijzinvolgorde: de persoonsvorm 'ben' moet achteraan.",
    },
    {
      incorrect: "Toen hij binnenkomt, stond ik op.",
      correct: "Toen hij binnenkwam, stond ik op.",
      explanation: "'Toen' verwijst naar het verleden; het werkwoord moet in de verleden tijd staan.",
    },
    {
      incorrect: "Hoewel hij is arm, is hij gelukkig.",
      correct: "Hoewel hij arm is, is hij gelukkig.",
      explanation: "Na 'hoewel' volgt een bijzin met de persoonsvorm achteraan.",
    },
    {
      incorrect: "Als het regent, ik blijf thuis.",
      correct: "Als het regent, blijf ik thuis.",
      explanation: "Bijzin voorop → inversie in de hoofdzin; de persoonsvorm 'blijf' moet voor het onderwerp 'ik'.",
    },
    {
      incorrect: "Ik oefen zodat ik beter worden.",
      correct: "Ik oefen zodat ik beter word.",
      explanation: "'Zodat' vereist een onderwerp en een correcte persoonsvorm; 'worden' is meervoud of infinitief, 'word' is 1e persoon enkelvoud.",
    },
    {
      incorrect: "Ik denk hij komt.",
      correct: "Ik denk dat hij komt.",
      explanation: "In formele taal is het voegwoord 'dat' verplicht na werkwoorden als 'denken'.",
    },
  ],
  review: [
    "Onderschikkende voegwoorden: **dat, omdat, toen, hoewel, als, zodat**.",
    "Bijzinvolgorde: onderwerp – rest – persoonsvorm achteraan.",
    "Scheidbare werkwoorden: vast en achteraan in de bijzin (*opbelt*).",
    "Bijzin voorop: hoofdzin begint met persoonsvorm (inversie).",
    "**Dat** = feit. **Omdat** = reden. **Toen** = verleden tijdstip. **Hoewel** = tegenstelling. **Als** = voorwaarde / tijd (toekomst/gewoonte). **Zodat** = gevolg/doel.",
    "**Toen** ≠ **als** voor gewoontes in verleden; **omdat** ≠ **want** in volgorde.",
  ],
  qa: [
    {
      question: "Leg uit waarom de volgorde in 'Ik blijf thuis, omdat ik moe ben' anders is dan in 'Ik blijf thuis, want ik ben moe'.",
      answer: "**Omdat** is onderschikkend en vereist bijzinvolgorde: de persoonsvorm *ben* staat achteraan. **Want** is nevenschikkend en behoudt de hoofdzinvolgorde: *ik ben*. Het verschil in volgorde is hét kenmerk tussen deze twee soorten voegwoorden.",
    },
    {
      question: "Waarom is 'Toen hij binnenkomt, stond ik op' fout? Corrigeer de zin.",
      answer: "**Toen** verwijst altijd naar een éénmalig moment in het **verleden**. Het werkwoord in de bijzin moet in de verleden tijd staan. Correct: **Toen hij binnenkwam, stond ik op.**",
    },
    {
      question: "Maak een bijzin met 'hoewel' en zet die voorop. Leg uit wat er met de hoofdzin gebeurt.",
      answer: "**Hoewel het koud is, ga ik toch wandelen.** Omdat de bijzin voorop staat, begint de hoofdzin met de persoonsvorm *ga*, gevolgd door het onderwerp *ik*. Dit heet inversie.",
    },
    {
      question: "Wat is het verschil tussen 'toen' en 'als' bij gewoontes in het verleden? Geef een voorbeeldzin met 'als'.",
      answer: "**Toen** gebruik je voor een eenmalige gebeurtenis in het verleden. **Als** gebruik je voor een gewoonte in het verleden. Voorbeeld: **Als ik vroeger wakker werd, dronk ik eerst koffie.**",
    },
    {
      question: "Vul het juiste voegwoord in: 'Ik zet de wekker, ___ ik me niet verslaap.' Kies uit 'omdat', 'zodat', 'als' en leg uit.",
      answer: "**Zodat.** De zin drukt een doel uit: ik zet de wekker met de bedoeling dat ik me niet verslaap. *Omdat* zou een reden aangeven die niet logisch is, *als* een voorwaarde.",
    },
    {
      question: "Corrigeer de fout: 'Ik hoop, als jij komt morgen.'",
      answer: "Correct: **Ik hoop dat jij morgen komt.** *Als* is hier niet op zijn plaats; *hopen* vraagt om **dat**. Bovendien moet het werkwoord *komt* achteraan in de bijzin.",
    },
    {
      question: "Bedenk een zin met een scheidbaar werkwoord in een bijzin die begint met 'omdat'. Leg uit wat er met het scheidbare werkwoord gebeurt.",
      answer: "**Ik ben blij, omdat hij mij opbelt.** Het scheidbare werkwoord *opbellen* wordt in de bijzin weer aan elkaar geschreven en staat achteraan. Het voorvoegsel *op* zit vast aan *belt* en het geheel staat op de laatste positie in de bijzin.",
    },
  ],
};