import type { GrammarLesson } from "../../types";

export const leesvaardigheid: GrammarLesson = {
  id: "nl-leesvaardigheid-1",
  title: "Leesvaardigheid (A2): Korte Artikelen & Instructies – De Ultieme Strategie Gids",
  level: 2,
  topic: "Leesvaardigheid & Strategieën",
  body: "Beheers het lezen van korte artikelen, e-mails, recepten en instructies. Leer skimming, scanning en het raden van onbekende woorden uit de context. De ultieme overlevingsgids voor je leestoets!",
  overview:
    "Leesvaardigheid gaat niet over het kennen van elk woord, maar over de juiste strategieën. In deze allesomvattende, tabel-gerichte gids leer je hoe je korte artikelen en instructies razendsnel en foutloos begrijpt. Je beheerst de 3 gouden leesstrategieën (Globaal, Specifiek, Intensief), kent de structuur van Nederlandse teksten, begrijpt signaalwoorden voor volgorde, en weet precies wat je moet doen als je een onbekend woord tegenkomt. Met 15+ kristalheldere tabellen en exact 4 complexe MAX-niveau oefenvragen haal jij de hoogste score op je leestoets!",
  anchorSectionId: "strategieen",
  exercises: [],
  timeExpressionsLabel: "De 3 Gouden Leesstrategieën in één oogopslag 🎯",
  timeExpressions: {
    header: "Strategie | Doel | Wanneer gebruiken? | Voorbeeld",
    rows: [
      ["👁️ Globaal (Skimmen)", "Wat is het onderwerp?", "Voordat je de vragen leest", "Titel en tussenkopjes lezen"],
      ["🔍 Specifiek (Scannen)", "Een detail vinden (naam, getal)", "Als de vraag om een feit vraagt", "Zoeken naar '14:00 uur' of 'Amsterdam'"],
      ["🧠 Intensief (Grondig)", "De exacte betekenis snappen", "Om een lastige vraag te beantwoorden", "Een alinea zin voor zin lezen"]
    ]
  },
  details: [
    {
      title: "Deel 1: De Structuur van Nederlandse Teksten 📑",
      body: `
        <p>Voordat je begint met lezen, moet je weten hoe een Nederlandse tekst is opgebouwd. Dit helpt je om snel de juiste informatie te vinden.</p>
        
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-indigo-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Onderdeel</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Wat staat er?</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Leesstrategie</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">De Titel / Kop</td>
                <td class="px-4 py-3 text-sm text-xs">Het hoofdonderwerp in het kort.</td>
                <td class="px-4 py-3 text-sm text-xs"><strong>Altijd eerst lezen!</strong> Geeft de context.</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">Tussenkopjes</td>
                <td class="px-4 py-3 text-sm text-xs">Verdeling van de tekst in thema's.</td>
                <td class="px-4 py-3 text-sm text-xs"><strong>Scannen:</strong> Welk kopje past bij mijn vraag?</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">De Eerste Zin</td>
                <td class="px-4 py-3 text-sm text-xs">De hoofdboodschap van de alinea.</td>
                <td class="px-4 py-3 text-sm text-xs"><strong>Skimmen:</strong> Vaak staat het antwoord hier.</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">De Kern / Body</td>
                <td class="px-4 py-3 text-sm text-xs">Details, voorbeelden, uitleg.</td>
                <td class="px-4 py-3 text-sm text-xs"><strong>Intensief:</strong> Alleen lezen als je een detail zoekt.</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50">
                <td class="px-4 py-3 text-sm font-semibold">Visuele elementen</td>
                <td class="px-4 py-3 text-sm text-xs">Foto's, vetgedrukte woorden, cijfers.</td>
                <td class="px-4 py-3 text-sm text-xs"><strong>Scannen:</strong> Vangen direct het oog bij het zoeken.</td>
              </tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      title: "Deel 2: Soorten Teksten & Wat Te Zoeken 📰🍳",
      body: `
        <p>Niet elke tekst lees je op dezelfde manier. Een recept lees je anders dan een nieuwsartikel.</p>
        
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-emerald-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Soort Tekst</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Kenmerken</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Waar moet je op letten?</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Voorbeeld Vraag</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">Nieuwsartikel / Blog</td>
                <td class="px-4 py-3 text-sm text-xs">Titel, inleiding, feiten, meningen.</td>
                <td class="px-4 py-3 text-sm text-xs">Wie, wat, waar, wanneer, waarom?</td>
                <td class="px-4 py-3 text-sm text-xs"><em>Wat is de hoofdreden voor het artikel?</em></td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">Recept / Handleiding</td>
                <td class="px-4 py-3 text-sm text-xs">Ingrediënten/materiaal, stappenplan.</td>
                <td class="px-4 py-3 text-sm text-xs">Gebiedende wijs, signaalwoorden voor volgorde.</td>
                <td class="px-4 py-3 text-sm text-xs"><em>Wat moet je doen ná het snijden?</em></td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">Advertentie / Briefje</td>
                <td class="px-4 py-3 text-sm text-xs">Kort, wervend, contactgegevens.</td>
                <td class="px-4 py-3 text-sm text-xs">Prijs, tijd, locatie, actie (bellen/mailen).</td>
                <td class="px-4 py-3 text-sm text-xs"><em>Hoe laat begint de activiteit?</em></td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30">
                <td class="px-4 py-3 text-sm font-semibold">E-mail / Bericht</td>
                <td class="px-4 py-3 text-sm text-xs">Aanhef, boodschap, afsluiting.</td>
                <td class="px-4 py-3 text-sm text-xs">Relatie (formeel/informeel), de 'vraag' of 'verzoek'.</td>
                <td class="px-4 py-3 text-sm text-xs"><em>Wat wil de afzender dat je doet?</em></td>
              </tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      title: "Deel 3: Instructies & Recepten (De Signaalwoorden) 🗺️",
      body: `
        <p>Bij instructies en recepten is de <strong>volgorde</strong> alles. Je herkent de volgorde aan specifieke signaalwoorden en de <strong>gebiedende wijs</strong> (stam van het werkwoord).</p>
        
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-purple-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Volgorde</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Signaalwoorden</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Voorbeeld in een Recept</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Actie</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">1. Begin</td>
                <td class="px-4 py-3 text-sm text-xs">Eerst, Als eerste, Om te beginnen</td>
                <td class="px-4 py-3 text-sm"><em><strong>Eerst</strong> verwarm je de oven voor.</em></td>
                <td class="px-4 py-3 text-sm text-xs">Dit is stap 1. Doe dit direct.</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">2. Midden</td>
                <td class="px-4 py-3 text-sm text-xs">Daarna, Vervolgens, Dan, Daarna</td>
                <td class="px-4 py-3 text-sm"><em><strong>Vervolgens</strong> snijd je de uien fijn.</em></td>
                <td class="px-4 py-3 text-sm text-xs">De volgende stap in de rij.</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">3. Tegelijk</td>
                <td class="px-4 py-3 text-sm text-xs">Ondertussen, Intussen, Terwijl</td>
                <td class="px-4 py-3 text-sm"><em><strong>Ondertussen</strong> kook je de pasta.</em></td>
                <td class="px-4 py-3 text-sm text-xs">Dit gebeurt op hetzelfde moment als de vorige stap.</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30">
                <td class="px-4 py-3 text-sm font-semibold">4. Einde</td>
                <td class="px-4 py-3 text-sm text-xs">Tot slot, Als laatste, Uiteindelijk</td>
                <td class="px-4 py-3 text-sm"><em><strong>Tot slot</strong> strooi je er kaas over.</em></td>
                <td class="px-4 py-3 text-sm text-xs">De allerlaatste stap. Het gerecht is klaar.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-400 p-4 my-4">
          <p class="font-bold text-amber-800 dark:text-amber-200 mb-1">⚠️ DE GRAMMATICA VAN INSTRUCTIES</p>
          <p class="text-sm text-slate-700 dark:text-slate-300 mt-1">
            Instructies gebruiken de <strong>gebiedende wijs</strong> (of 'je' in spreektaal).<br>
            • <em><strong>Snijd</strong> de ui in stukjes.</em> (Stam)<br>
            • <em><strong>Voeg</strong> een lepel zout <strong>toe</strong>.</em> (Scheidbaar werkwoord: 'toe' gaat achteraan!)<br>
            • <em><strong>Laat</strong> het mengsel tien minuten <strong>staan</strong>.</em>
          </p>
        </div>
      `
    },
    {
      title: "Deel 4: Omgaan met Onbekende Woorden 🧠",
      body: `
        <p>Paniekeren als je een woord niet kent is de nummer 1 fout op een leestoets. Gebruik deze strategieën om de betekenis te raden.</p>
        
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-rose-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Strategie</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Hoe werkt het?</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Voorbeeld</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">1. De Context</td>
                <td class="px-4 py-3 text-sm text-xs">Lees de zin ervoor en erna. Wat is de logica?</td>
                <td class="px-4 py-3 text-sm text-xs"><em>Het is <strong>hete</strong> zomer, dus ik draag mijn <strong>groene</strong> bikini.</em> (Je snapt de context zonder 'groene' te kennen).</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">2. Woorddelen</td>
                <td class="px-4 py-3 text-sm text-xs">Ken je het voorvoegsel of achtervoegsel?</td>
                <td class="px-4 py-3 text-sm text-xs"><em>Onmogelijk</em> -> 'on' = niet. 'Mogelijk' = het kan. Dus: het kan niet.</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">3. Cognaten</td>
                <td class="px-4 py-3 text-sm text-xs">Lijkt het op een woord in jouw taal of het Engels?</td>
                <td class="px-4 py-3 text-sm text-xs"><em>De <strong>regering</strong> heeft besloten...</em> (Engels: government / Duits: Regierung).</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30">
                <td class="px-4 py-3 text-sm font-semibold">4. Synoniemen</td>
                <td class="px-4 py-3 text-sm text-xs">Staat er een ander woord in de zin dat hetzelfde betekent?</td>
                <td class="px-4 py-3 text-sm text-xs"><em>Hij was <strong>boos</strong>, hij was echt <strong>kwaad</strong>.</em></td>
              </tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      title: "Deel 5: De Grootste Valkuilen bij Leestoetsen ❌ → ✅",
      body: `
        <p>Dit zijn de fouten die punten kosten. Vermijd ze ten allen tijde!</p>
        
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-rose-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Fout (Wat studenten doen)</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Correct (Wat je wél moet doen)</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Uitleg</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm text-rose-600">Elk woord willen vertalen.</td>
                <td class="px-4 py-3 text-sm">Alleen vertalen wat nodig is voor de vraag.</td>
                <td class="px-4 py-3 text-sm text-xs">Je hebt maar 60-70% van de woorden nodig om de vragen te beantwoorden.</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm text-rose-600">Eerst de hele tekst lezen, dan pas de vragen.</td>
                <td class="px-4 py-3 text-sm">Eerst de vragen (of kopjes) lezen, dan de tekst scannen.</td>
                <td class="px-4 py-3 text-sm text-xs">Zo weet je precies waar je op moet letten (Scannen!).</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm text-rose-600">Paniekeren bij een onbekend woord.</td>
                <td class="px-4 py-3 text-sm">Sla het over of gebruik de context-strategie.</td>
                <td class="px-4 py-3 text-sm text-xs">Eén onbekend woord is zelden de sleutel tot het juiste antwoord.</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30">
                <td class="px-4 py-3 text-sm text-rose-600">Kiezen op basis van 'losse woorden' uit de tekst.</td>
                <td class="px-4 py-3 text-sm">Lees de hele zin in de tekst om het antwoord te checken.</td>
                <td class="px-4 py-3 text-sm text-xs">Toetsmakers gebruiken 'distractors': woorden uit de tekst die in het foute antwoord staan.</td>
              </tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      title: "Deel 6: Snelle herhaling – Alles op één pagina ⚡",
      body: `
        <ul class="my-2 space-y-2 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-['✅'] before:absolute before:left-0 before:top-[0.4rem] text-slate-700 dark:text-slate-300"><strong>Skimmen:</strong> Lees titel, tussenkopjes en eerste zinnen voor het hoofdidee.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-['✅'] before:absolute before:left-0 before:top-[0.4rem] text-slate-700 dark:text-slate-300"><strong>Scannen:</strong> Zoek naar specifieke details (namen, getallen, tijden) zonder alles te lezen.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-['✅'] before:absolute before:left-0 before:top-[0.4rem] text-slate-700 dark:text-slate-300"><strong>Instructies:</strong> Let op signaalwoorden (Eerst, Daarna, Tot slot) en de gebiedende wijs.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-['✅'] before:absolute before:left-0 before:top-[0.4rem] text-slate-700 dark:text-slate-300"><strong>Onbekende woorden:</strong> Gebruik de context, woorddelen of synoniemen. Raak niet in paniek!</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-['✅'] before:absolute before:left-0 before:top-[0.4rem] text-slate-700 dark:text-slate-300"><strong>De Gouden Volgorde:</strong> 1. Lees de vragen. 2. Skim de tekst. 3. Scan naar antwoorden. 4. Check in de tekst.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-['⚠️'] before:absolute before:left-0 before:top-[0.4rem] text-slate-700 dark:text-slate-300"><strong>Pas op voor Distractors:</strong> Antwoorden die exacte woorden uit de tekst gebruiken, maar de verkeerde betekenis hebben.</li>
        </ul>
      `
    }
  ],
  rulesTable: [
    {
      rule: "De Gouden Leescyclus",
      structure: "1. Lees de vragen -> 2. Skim de tekst (Titel/Kopjes) -> 3. Scan naar details -> 4. Check het antwoord in de tekst.",
      example: "Vraag: 'Hoe laat begint het feest?' -> Skim naar tijd/getallen -> Scan naar '20:00' -> Check de zin.",
      usage: "Lees NOOIT de hele tekst intensief voordat je de vragen hebt gezien. Dit kost te veel tijd."
    },
    {
      rule: "Signaalwoorden voor Volgorde",
      structure: "Eerst (1) -> Vervolgens/Daarna (2) -> Ondertussen (gelijktijdig) -> Tot slot (einde).",
      example: "Eerst de ui snijden. Vervolgens bakken. Tot slot serveren.",
      usage: "Essentieel voor het begrijpen van recepten, handleidingen en routebeschrijvingen."
    },
    {
      rule: "Context is Koning",
      structure: "Als je een woord niet kent, lees dan de zin ervoor en erna om de logica te snappen.",
      example: "'Hij was erg moe, dus hij viel in slaap.' (Je snapt 'moe' door 'slaap').",
      usage: "Gebruik dit als je een onbekend woord tegenkomt. Sla het over als het niet voor de vraag nodig is."
    },
    {
      rule: "Pas op voor 'Distractors'",
      structure: "Toetsmakers gebruiken woorden uit de tekst in de foute antwoordopties om je te misleiden.",
      example: "Tekst: 'De trein gaat om 14:00'. Fout antwoord: 'Om 14:00 komt de trein aan.' (In de tekst staat 'vertrekt').",
      usage: "Lees niet alleen naar losse woorden, maar begrijp de hele zin in de tekst."
    },
    {
      rule: "De Gebiedende Wijs in Instructies",
      structure: "Werkwoorden in instructies staan in de stam (of gebiedende wijs). Scheidbare delen gaan achteraan.",
      example: "Doe de deur dicht. -> Snijd de ui in stukjes. -> Voeg zout toe.",
      usage: "Herken de actie. Het onderwerp 'jij/u' is weggelaten, maar het is een bevel/instructie aan jou."
    }
  ],
  callouts: [
    { type: "remember", label: "✅ Gouden regel 1", text: "Lees EERST de vragen, DAARNA pas de tekst. Zo weet je waar je op moet letten." },
    { type: "remember", label: "✅ Gouden regel 2", text: "Je hoeft NIET elk woord te begrijpen. Focus op de woorden die de vraag beantwoorden." },
    { type: "remember", label: "⚠️ PAS OP 1", text: "Signaalwoorden bij instructies: 'Eerst' (1), 'Daarna' (2), 'Ondertussen' (tegelijk), 'Tot slot' (einde)." },
    { type: "remember", label: "⚠️ PAS OP 2", text: "Pas op voor 'distractors': foute antwoorden die exacte woorden uit de tekst gebruiken, maar de verkeerde betekenis hebben." },
    { type: "remember", label: "⚠️ PAS OP 3", text: "Raak niet in paniek van een onbekend woord. Gebruik de context of sla het over als het niet voor de vraag is." },
    { type: "tip", label: "💡 Pro-tip", text: "Streep bij het lezen van de tekst onbelangrijke details weg in je hoofd (of op papier). Focus alleen op de 'Wie, Wat, Waar, Wanneer, Waarom'." }
  ],
  commonMistakes: [
    { incorrect: "De hele tekst woord voor woord lezen voordat je naar de vragen kijkt.", correct: "Eerst de vragen lezen, dan de tekst skimmen en scannen.", explanation: "Woord voor woord lezen kost te veel tijd. Je moet gericht zoeken naar de antwoorden op de vragen." },
    { incorrect: "Een antwoord kiezen omdat het woord uit de tekst in het antwoord staat.", correct: "De hele zin in de tekst lezen om te checken of de betekenis klopt.", explanation: "Toetsmakers gebruiken 'distractors'. Ze gebruiken woorden uit de tekst in een foute context om je te misleiden." },
    { incorrect: "In paniek raken en stoppen bij een onbekend woord.", correct: "De context gebruiken (zin ervoor/erna) of het woord overslaan als het niet nodig is.", explanation: "Je hebt maar een deel van de woorden nodig om de vragen te beantwoorden. Eén onbekend woord is zelden fataal." },
    { incorrect: "Bij een recept denken dat 'Ondertussen' de volgende stap is.", correct: "'Ondertussen' betekent dat je dit tegelijkertijd met de vorige stap moet doen.", explanation: "Signaalwoorden voor volgorde zijn cruciaal. 'Vervolgens/Daarna' is de volgende stap, 'Ondertussen' is gelijktijdig." },
    { incorrect: "De titel en tussenkopjes overslaan om tijd te besparen.", correct: "Titel en tussenkopjes als eerste lezen (Skimmen).", explanation: "Deze geven je in 5 seconden het hoofdonderwerp en de structuur van de tekst. Dit bespaart juist tijd!" }
  ],
  review: [
    "✅ Strategie 1: Skimmen (Titel, kopjes, eerste zinnen) voor het hoofdidee.",
    "✅ Strategie 2: Scannen voor specifieke details (namen, getallen, tijden).",
    "✅ Strategie 3: Intensief lezen van de exacte zin om het antwoord te checken.",
    "✅ Instructies: Let op signaalwoorden (Eerst, Daarna, Tot slot) en de gebiedende wijs.",
    "✅ Onbekende woorden: Gebruik de context, woorddelen of synoniemen. Geen paniek!",
    "✅ De Gouden Volgorde: Vragen lezen -> Skimmen -> Scannen -> Checken.",
    "✅ Pas op voor 'distractors': foute antwoorden met woorden uit de tekst.",
    "✅ Lees de titel en tussenkopjes ALTIJD als eerste."
  ],
  qa: [
    {
      question: "MAX - Strategie Toepassing: Je krijgt een tekst van 500 woorden over 'De Geschiedenis van de Tulpenmanie' en 5 vragen. Bij vraag 2 moet je weten in welk jaar de prijzen exact explodeerden. Welke leesstrategie gebruik je voor deze specifieke vraag, en hoe pak je het aan?",
      answer: "Ik gebruik de strategie 'Scannen'. Ik hoef de tekst niet te lezen. Ik laat mijn ogen razendsnel over de tekst glijden op zoek naar een jaartal (bijv. '1637' of '17e eeuw') in de buurt van woorden als 'prijs', 'geld' of 'exploderen'. Zodra ik het getal vind, lees ik alleen die ene zin intensief om het antwoord te checken."
    },
    {
      question: "MAX - Instructies & Signaalwoorden: Lees dit stukje uit een handleiding: 'Druk eerst op de rode knop. Wacht tot het lampje groen wordt. Voeg daarna het water toe. Ondertussen kunt u de filter alvast plaatsen. Tot slot drukt u op start.' Op welk moment moet je de filter plaatsen?",
      answer: "Je moet de filter plaatsen 'Ondertussen', wat betekent: op hetzelfde moment dat je het water toevoegt (of net nadat je het water hebt toegevoegd, terwijl de machine nog bezig is met die stap). Het signaalwoord 'Ondertussen' geeft een gelijktijdige actie aan, niet de stap die erop volgt ('Daarna')."
    },
    {
      question: "MAX - Omgaan met Onbekende Woorden: Je leest de zin: 'De auto had een flinke deuk in de motorkap na het ongeluk, maar de motor werkte nog steeds perfect.' Je kent het woord 'deuk' niet. Hoe leid je de betekenis af uit de context, en wat betekent het ongeveer?",
      answer: "Uit de context ('na het ongeluk', 'in de motorkap', 'maar de motor werkte nog') kan ik afleiden dat 'deuk' een soort fysieke schade of vervorming aan de buitenkant van de auto is, die de binnenkant (de motor) niet per se kapot maakt. Het betekent waarschijnlijk een 'inschuiving' of 'beschadiging van het metaal' (Engels: dent)."
    },
    {
      question: "MAX - De 'Distractor' Valkuil: Tekst: 'Het museum is op maandag gesloten. De rest van de week is het open van 10:00 tot 17:00. Toegang is gratis voor kinderen onder de 12.' Vraag: 'Hoeveel moet een volwassene betalen om het museum op dinsdag te bezoeken?' Fout antwoord A: 'Gratis' (want het woord 'gratis' staat in de tekst). Correct antwoord B: 'De tekst zegt het niet, maar waarschijnlijk moet een volwassene betalen.' Waarom is A fout en B juist?",
      answer: "Antwoord A is een klassieke 'distractor'. Het gebruikt het woord 'gratis' uit de tekst, maar past het toe op de verkeerde groep (kinderen, niet volwassenen). Antwoord B is juist omdat de lezer de exacte context van 'gratis' (kinderen onder de 12) heeft begrepen en logisch kan concluderen dat voor volwassenen deze regel niet geldt, en er dus (waarschijnlijk) entree betaald moet worden."
    }
  ]
};