import type { GrammarLesson } from "../../types";

export const hoofdletters: GrammarLesson = {
  id: "nl-hoofdletters-1",
  title: "Hoofdletters: Eigennamen, Titels, Aardrijkskundige Namen en Meer",
  level: 2,
  topic: "Hoofdletters", // [Sch] Schrijven – spelling
  body: "Leer precies wanneer je een hoofdletter schrijft. Van personen en merken tot titels, plaatsen en feestdagen. Met duidelijke regels en veel voorbeelden.",
  overview:
    "Hoofdletters lijken een klein detail, maar ze bepalen hoe netjes en professioneel jouw Nederlandse tekst overkomt. In deze **supercomplete, heldere les** ontdek je alle regels voor hoofdletters bij **eigennamen**, **titels**, **aardrijkskundige namen**, **dagen en maanden**, **feestdagen** en nog veel meer. Je krijgt talloze voorbeelden, een uitgebreide tabel met alle valkuilen en PAS OP‑waarschuwingen. Met 7 ijzersterke oefenvragen schrijf jij voortaan foutloos.",
  anchorSectionId: "belang",
  exercises: [],
  timeExpressionsLabel: "Overzicht: wel of geen hoofdletter 📊",
  timeExpressions: {
    header: "Wel hoofdletter ✅ | Geen hoofdletter ❌",
    rows: [
      ["Namen van personen: *Lisa, Ahmed*", "Gewone zelfstandige naamwoorden: *tafel, boek*"],
      ["Achternamen (alleen): *Van den Berg*", "Tussenvoegsels mét voornaam: *Jan van den Berg*"],
      ["Bedrijven/merken: *Philips, Nike*", "Soortnamen: *een philips* (tv-toestel)"],
      ["Aardrijkskundige namen: *Nederland, Maas*", "Windstreken: *noorden*"],
      ["Afleidingen: *Nederlandse, Frans*", "Dagen/maanden: *maandag, januari*"],
      ["Eerste woord titel: *De Avonden*", "Rest van een titel: *De avonden* (klein)"],
      ["Feestdagen: *Kerstmis, Pasen*", "Algemene samenstellingen: *kerstvakantie, paasontbijt*"],
      ["God (specifiek): *God, Allah*", "*god* (algemeen)"],
    ],
  },
  details: [
    {
      title: "Hoofdletters bij eigennamen 👤",
      body: `
        <p>Eigennamen zijn de namen van <strong>unieke</strong> personen, dieren, dingen of instanties. Je schrijft ze altijd met een hoofdletter.</p>
        <h3 class="text-lg font-bold mt-4 mb-2">Personen en dieren</h3>
        <p>Voornamen en achternamen beginnen met een hoofdletter: <strong>Jan</strong>, <strong>Lisa</strong>, <strong>Ahmed</strong>. Ook de naam van een dier krijgt een hoofdletter als je het dier een eigen naam geeft: <strong>Rover</strong> (de hond), <strong>Pluis</strong> (de kat).</p>
        <h3 class="text-lg font-bold mt-6 mb-2">Tussenvoegsels – de beruchtste valkuil</h3>
        <p>Bij achternamen met <strong>van, de, den, van der, van den</strong> etc. hangt de hoofdletter af van of de voornaam erbij staat.</p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Situatie</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Correct</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Volledige naam met voornaam</td><td class="px-3 py-2 text-sm">Jan <strong>v</strong>an der Berg</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Voorletter + achternaam</td><td class="px-3 py-2 text-sm">J. <strong>v</strong>an der Berg</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Alleen achternaam (bijv. in een lijst)</td><td class="px-3 py-2 text-sm"><strong>V</strong>an der Berg</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Met aanspreektitel (zonder voornaam)</td><td class="px-3 py-2 text-sm">Meneer <strong>V</strong>an der Berg</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">In een briefaanhef (zonder voornaam)</td><td class="px-3 py-2 text-sm">Geachte heer <strong>V</strong>an der Berg</td></tr>
            </tbody>
          </table>
        </div>
        <p><span class="pas-op-highlight">⚠️ PAS OP</span> Onthoud: voornaam erbij → kleine letters tussenvoegsel. Alleen achternaam → eerste tussenvoegsel met hoofdletter.</p>
        <h3 class="text-lg font-bold mt-6 mb-2">Bedrijven, merken, organisaties</h3>
        <p>Namen van bedrijven, merken, scholen en instellingen schrijf je met een hoofdletter: <strong>Philips</strong>, <strong>Apple</strong>, <strong>Universiteit Utrecht</strong>, <strong>Rode Kruis</strong>. Soms wijkt een merk af van de standaardregels (bijv. <strong>iPhone</strong>, <strong>eBay</strong>); neem dan de officiële schrijfwijze over.</p>
        <h3 class="text-lg font-bold mt-6 mb-2">Historische gebeurtenissen en tijdperken</h3>
        <p>Specifieke namen van gebeurtenissen en periodes krijgen hoofdletters: <strong>de Tweede Wereldoorlog</strong>, <strong>de Middeleeuwen</strong>, <strong>de Industriële Revolutie</strong>. Als je ze algemeen bedoelt, gebruik je kleine letters: <em>de middeleeuwen</em> (in de zin van “in die tijd”).</p>
      `,
    },
    {
      title: "Hoofdletters bij titels 📚",
      body: `
        <h3 class="text-lg font-bold mt-4 mb-2">Titels van boeken, films, liedjes, schilderijen</h3>
        <p>Bij titels van creatieve werken krijgt <strong>alleen het eerste woord</strong> een hoofdletter. De rest is klein, behalve eigennamen.</p>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>De ontdekking van de hemel</strong> (boek)</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>Het meisje met de parel</strong> (schilderij)</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>Harry Potter en de steen der wijzen</strong> (eigennaam blijft met hoofdletter)</li>
        </ul>
        <p><span class="pas-op-highlight">⚠️ PAS OP</span> Niet zoals in het Engels alle belangrijke woorden met hoofdletters. Alleen het allereerste woord en namen krijgen een hoofdletter.</p>
        <h3 class="text-lg font-bold mt-6 mb-2">Aanspreektitels en functies</h3>
        <p>Woorden als <strong>heer, mevrouw, dokter, professor</strong> schrijf je midden in een zin met een <strong>kleine letter</strong>. Alleen aan het begin van een zin of in een adresregel krijgen ze een hoofdletter. De bijbehorende achternaam volgt de tussenvoegselregel.</p>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>Mevrouw De Vries</strong> is de nieuwe directeur. (aanhef in zin, 'mevrouw' klein)</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>Geachte heer Van der Berg</strong> (briefaanhef, heer klein, achternaam met hoofdletter V)</li>
        </ul>
      `,
    },
    {
      title: "Aardrijkskundige namen en afleidingen 🌍",
      body: `
        <h3 class="text-lg font-bold mt-4 mb-2">Plaatsen, landen, wateren, gebieden</h3>
        <p>Alle aardrijkskundige namen schrijf je met een hoofdletter, ook als ze uit meerdere woorden bestaan.</p>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>Nederland, België, Frankrijk</strong></li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>Amsterdam, Brussel, Rotterdam</strong></li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>Noord-Holland, Zuid-Limburg</strong></li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>de Rijn, de Maas, de Atlantische Oceaan</strong></li>
        </ul>
        <h3 class="text-lg font-bold mt-6 mb-2">Afleidingen (talen, inwoners, bijvoeglijke naamwoorden)</h3>
        <p>Woorden die van een aardrijkskundige naam zijn afgeleid, behouden de hoofdletter.</p>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>Nederlands</strong> (taal), <strong>Nederlandse</strong> kaas</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>Frans</strong> (taal), <strong>Franse</strong> wijn</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>Amsterdamse</strong> grachten, <strong>Vlaamse</strong> cultuur</li>
        </ul>
        <h3 class="text-lg font-bold mt-6 mb-2">Windstreken</h3>
        <p>Windstreken schrijf je met <strong>kleine letters</strong> als je alleen de richting bedoelt: <em>het noorden, het westen</em>. Als de windstreek onderdeel is van een eigennaam, dan wél met hoofdletter: <strong>Noord-Holland</strong>, <strong>Zuid-Afrika</strong>, <strong>Noordzee</strong>.</p>
        <p><span class="pas-op-highlight">⚠️ PAS OP</span> <strong>'s-Hertogenbosch</strong> of <strong>'t Harde</strong> beginnen met een apostrof en daarna kleine letters. De apostrof geeft aan dat er iets is weggelaten (des, het). De plaatsnaam zelf blijft een eigennaam, maar de hoofdletter komt pas na de apostrof? Eigenlijk is de officiële spelling <strong>'s-Hertogenbosch</strong> met een kleine 's' na de apostrof, want het is een afkorting van 'des Hertogen bosch'.</p>
      `,
    },
    {
      title: "Dagen, maanden, seizoenen 📅",
      body: `
        <p>Dagen van de week, maanden en seizoenen schrijf je in het Nederlands met een <strong>kleine letter</strong>.</p>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>maandag</strong>, <strong>dinsdag</strong></li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>januari</strong>, <strong>februari</strong></li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>lente</strong>, <strong>zomer</strong>, <strong>herfst</strong>, <strong>winter</strong></li>
        </ul>
        <p>Dit is anders dan in het Engels, waar je <em>Monday, January</em> met hoofdletter schrijft. Alleen aan het begin van een zin krijgen ze automatisch een hoofdletter, zoals elk woord.</p>
      `,
    },
    {
      title: "Feestdagen en godsdienstige begrippen 🎄⛪",
      body: `
        <h3 class="text-lg font-bold mt-4 mb-2">Feestdagen</h3>
        <p>Officiële feestdagen en bijzondere dagen schrijf je met een <strong>hoofdletter</strong>.</p>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>Kerstmis, Pasen, Hemelvaartsdag, Pinksteren</strong></li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>Suikerfeest, Divali</strong></li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>Nieuwjaarsdag, Koningsdag, Sinterklaas</strong></li>
        </ul>
        <p>Als de naam van de feestdag in een samenstelling wordt gebruikt die niet meer de specifieke dag zelf bedoelt, schrijf je een <strong>kleine letter</strong>: <strong>kerstvakantie</strong>, <strong>paasontbijt</strong>, <strong>koningsdagviering</strong>.</p>
        <h3 class="text-lg font-bold mt-6 mb-2">Godsdienstige begrippen</h3>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>God</strong> (de ene God uit het christendom) met hoofdletter.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>god</strong> (een godheid in het algemeen, de Romeinse goden) met kleine letter.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>de Bijbel</strong> (het heilige boek) met hoofdletter; <strong>een bijbel</strong> (een exemplaar) met kleine letter.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>Allah</strong> (Islam) met hoofdletter.</li>
        </ul>
      `,
    },
  ],
  rulesTable: [
    {
      rule: "Eigennamen: personen, bedrijven, merken",
      structure: "Alle namen van specifieke personen, dieren, bedrijven en instellingen krijgen een **hoofdletter**.",
      example: "**Jan**, **Apple**, **Rode Kruis**.",
      usage: "Ook historische gebeurtenissen: **Tweede Wereldoorlog**.",
    },
    {
      rule: "Tussenvoegsels: hoofdletter zonder voornaam",
      structure: "Staat er een voornaam of voorletter voor? Dan schrijf je het tussenvoegsel met **kleine letters**. Staat de achternaam alleen? Dan begint het **eerste tussenvoegsel met een hoofdletter**.",
      example: "**Jan van der Berg** (voornaam) vs. **Meneer Van der Berg** (alleen achternaam).",
      usage: "Deze regel geldt ook in briefaanhef: **Geachte heer Van der Berg**.",
    },
    {
      rule: "Titels van boeken/films: alleen eerste woord hoofdletter",
      structure: "Het **eerste woord** van de titel krijgt een hoofdletter; de rest kleine letters, behalve eigennamen.",
      example: "**De ontdekking van de hemel**, **Harry Potter en de steen der wijzen**.",
      usage: "Niet zoals in het Engels alle belangrijke woorden met hoofdletter!",
    },
    {
      rule: "Aardrijkskundige namen en afleidingen",
      structure: "Landen, steden, wateren, provincies en hun afleidingen (talen, bijvoeglijke naamwoorden) schrijf je met een **hoofdletter**.",
      example: "**Nederland**, **Nederlands**, **Amsterdam**, **Amsterdamse**.",
      usage: "Windstreken zonder eigennaam: **noorden**, **westen** (klein).",
    },
    {
      rule: "Feestdagen met hoofdletter, samenstellingen vaak niet",
      structure: "De naam van de feestdag zelf schrijf je met een **hoofdletter**. Afgeleide algemene begrippen schrijf je met **kleine letters**.",
      example: "**Kerstmis** (feest), **kerstvakantie** (periode).",
      usage: "Twijfel je? Is het de officiële dag zelf? Dan hoofdletter. Is het een samenstelling? Kleine letter.",
    },
    {
      rule: "Dagen, maanden, seizoenen: kleine letters",
      structure: "**maandag**, **januari**, **lente** schrijf je met een **kleine letter**, tenzij aan het begin van een zin.",
      example: "Ik zie je op **maandag**. **Januari** is de eerste maand van het jaar. (begin zin)",
      usage: "Dit is anders dan in het Engels!",
    },
  ],
  callouts: [
    { type: "remember", label: "Onthoud 1", text: "Eigennamen (personen, bedrijven, plaatsen) **altijd met hoofdletter**." },
    { type: "remember", label: "Onthoud 2", text: "Tussenvoegsels: mét voornaam = **klein**, zonder voornaam = **eerste met hoofdletter**." },
    { type: "remember", label: "Onthoud 3", text: "Boek‑ en filmtitels: **alleen het eerste woord met hoofdletter**." },
    { type: "remember", label: "Onthoud 4", text: "Dagen, maanden, seizoenen: **kleine letters**." },
    { type: "remember", label: "Onthoud 5", text: "Feestdagen: **Kerstmis** (hoofdletter), maar **kerstvakantie** (klein)." },
  ],
  commonMistakes: [
    { incorrect: "piet van der meer", correct: "Piet van der Meer", explanation: "Voornamen en achternamen altijd met hoofdletter; tussenvoegsel met kleine letter door voornaam." },
    { incorrect: "Mevrouw van Dijk (als alleen achternaam)", correct: "Mevrouw Van Dijk", explanation: "Achternaam alleen: hoofdletter voor het eerste tussenvoegsel." },
    { incorrect: "het nederlands (taal)", correct: "het Nederlands", explanation: "Taalnamen van aardrijkskundige oorsprong met hoofdletter." },
    { incorrect: "frans brood", correct: "Frans brood", explanation: "*Frans* is afgeleid van *Frankrijk*, dus hoofdletter." },
    { incorrect: "de ontdekking van de hemel (titel in een zin)", correct: "De ontdekking van de hemel (eerste woord hoofdletter)", explanation: "Titel van een boek: eerste woord met hoofdletter." },
    { incorrect: "Kerstvakantie (als feestdag bedoeld)", correct: "Kerstmis (feest) vs. kerstvakantie (periode)", explanation: "De feestdag zelf krijgt hoofdletter; afgeleide begrippen met kleine letter." },
    { incorrect: "maandag met hoofdletter", correct: "maandag", explanation: "Dagen van de week schrijf je met kleine letters." },
  ],
  review: [
    "Eigennamen (personen, dieren, bedrijven): altijd hoofdletter.",
    "Tussenvoegsels: kleine letter als de voornaam erbij staat; hoofdletter als de achternaam alleen staat.",
    "Titels van boeken/films: eerste woord hoofdletter, de rest kleine letters (behalve eigennamen).",
    "Aardrijkskundige namen: altijd hoofdletter. Afleidingen (*Nederlands, Franse*) ook.",
    "Windstreken alleen: *noorden*, *westen* met kleine letter; in aardrijkskundige namen: *Noord-Holland* met hoofdletter.",
    "Feestdagen: *Kerstmis, Pasen* met hoofdletter; samenstellingen vaak met kleine letter (*kerstdiner*).",
    "Godsdienst: *God* (specifiek) met hoofdletter; *god* (algemeen) met kleine letter.",
    "Dagen, maanden, seizoenen: altijd kleine letters, tenzij aan het begin van een zin.",
  ],
  qa: [
    {
      question: "Waarom schrijf je “Peter van der Laan” met kleine letters bij “van der”, maar “Meneer Van der Laan” met een hoofdletter V?",
      answer: "Omdat bij de volledige naam de voornaam *Peter* ervoor staat; dan zijn de tussenvoegsels **van der** met kleine letters. Bij *Meneer Van der Laan* staat de achternaam alleen; dan krijgt het **eerste** tussenvoegsel een hoofdletter.",
    },
    {
      question: "Leg uit waarom “het frans” fout is en hoe je het correct schrijft.",
      answer: "*Frans* is een taalnaam die is afgeleid van *Frankrijk*. Aardrijkskundige namen en hun afleidingen krijgen altijd een hoofdletter. De juiste schrijfwijze is **het Frans**.",
    },
    {
      question: "Een boek heet “de kleine prins”. Schrijf je de titel zo in een lopende zin? Corrigeer en leg uit.",
      answer: "In een lopende zin schrijf je de titel met het eerste woord met een hoofdletter: **De kleine prins**. Alleen het eerste woord krijgt een hoofdletter; de rest kleine letters, tenzij er een eigennaam in zit.",
    },
    {
      question: "Waarom schrijf je “Noord-Holland” met een hoofdletter N, maar “het noorden” met een kleine letter n?",
      answer: "*Noord-Holland* is een aardrijkskundige naam van een provincie; eigennamen krijgen een hoofdletter. *het noorden* is een gewone windstreek, die schrijf je met een kleine letter.",
    },
    {
      question: "Corrigeer de fout in deze zin: “Op kerstmis gaan we naar de kerk.”",
      answer: "**Kerstmis** is de naam van een feestdag en krijgt een hoofdletter. De juiste zin is: *Op Kerstmis gaan we naar de kerk.*",
    },
    {
      question: "Is “een bijbel” met kleine letter ooit goed? Leg uit.",
      answer: "Ja, **een bijbel** met kleine letter is correct als je een exemplaar van het boek bedoelt. Bijvoorbeeld: *Ik heb thuis drie bijbels.* Als je het heilige boek zelf bedoelt, gebruik je **de Bijbel** met hoofdletter.",
    },
    {
      question: "Schrijf de volgende achternaam op twee manieren: volledige naam met “Jan de Wit”, en de aanspreekvorm in een brief: “Geachte heer …”",
      answer: "Volledige naam: **Jan de Wit** (tussenvoegsel met kleine letter). In een brief: **Geachte heer De Wit** (de achternaam alleen, dus het eerste tussenvoegsel met hoofdletter: *De Wit*).",
    },
  ],
};