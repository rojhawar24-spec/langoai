import type { GrammarLesson } from "../../types";

export const luisterenStation: GrammarLesson = {
  id: "nl-luisteren-station-1",
  title: "Luistervaardigheid: Korte Dialogen en Mededelingen op het Station",
  level: 1,
  topic: "Luisteren – Station", // [L] Luisteren
  body: "Leer omroepen en korte gesprekken op het station te verstaan. Van vertragingen tot spoorwijzigingen en het kopen van een kaartje.",
  overview:
    "Op een Nederlands station krijg je voortdurend informatie via luidsprekers en gesprekken. In deze **superduidelijke, praktijkgerichte les** ontdek je hoe stationsomroepen in elkaar zitten, welke standaardzinnen je kunt verwachten, en hoe je cijfers, tijden en plaatsnamen herkent. Je oefent met echte dialogen aan het loket, met de conducteur en bij het zoeken naar een zitplaats. Met heldere tabellen, luistertips, PAS OP‑waarschuwingen en 7 ijzersterke vragen versta jij voortaan elke mededeling op het station.",
  anchorSectionId: "belang",
  exercises: [],
  timeExpressionsLabel: "Veelvoorkomende woorden in stationsomroepen 🧾",
  timeExpressions: {
    header: "Woord | Betekenis",
    rows: [
      ["vertrekken", "weggaan, de trein gaat rijden"],
      ["aankomen", "de trein komt op het station aan"],
      ["overstappen", "van de ene trein in de andere stappen"],
      ["perron", "verhoogd gedeelte langs het spoor (spoor)"],
      ["spoor", "de rails waarover de trein rijdt, met een nummer"],
      ["eindbestemming", "de laatste halte van de trein"],
      ["tussenstation", "een station onderweg, niet het begin‑ of eindpunt"],
      ["zitplaats", "een plek om te zitten"],
      ["staanplaats", "een plek om te staan (als de trein vol is)"],
    ],
  },
  details: [
    {
      title: "Waarom is luisteren op het station belangrijk? 🎯",
      body: `
        <p>Op een Nederlands station krijg je voortdurend informatie via luidsprekers en gesprekken. Een mededeling kan je vertrek- of aankomsttijd veranderen, een spoor wijzigen of waarschuwen voor vertraging. Ook korte dialogen aan het loket of met conducteurs zijn belangrijk om te verstaan. In deze les leer je:</p>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">hoe stationsomroepen in elkaar zitten,</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">welke standaardzinnen je kunt verwachten,</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">hoe je cijfers, tijden en plaatsnamen herkent,</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">en hoe je korte dialogen begrijpt.</li>
        </ul>
      `,
    },
    {
      title: "Mededelingen op het station – wat kun je verwachten? 📢",
      body: `
        <p>Stationsomroepen volgen vaak een vast patroon. Ze noemen eerst het type mededeling, dan de trein (of het spoor), de bestemming, de vertrektijd en eventuele bijzonderheden.</p>
        <h3 class="text-lg font-bold mt-4 mb-2">Standaardvertrekmededeling</h3>
        <p><em>"Dames en heren, de intercity van 14:23 naar Amsterdam Centraal vertrekt van spoor 6."</em></p>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>Dames en heren</strong> – beleefde aanspraak, kondigt aan dat er iets volgt.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>de intercity van 14:23</strong> – het type trein en de geplande vertrektijd.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>naar Amsterdam Centraal</strong> – de eindbestemming.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>vertrekt van spoor 6</strong> – het perron waar je moet zijn.</li>
        </ul>
        <h3 class="text-lg font-bold mt-6 mb-2">Vertraging</h3>
        <p><em>"Let op: de intercity van 14:23 naar Amsterdam Centraal is vandaag vertraagd met ongeveer tien minuten."</em></p>
        <p><span class="pas-op-highlight">⚠️ PAS OP</span> <strong>Vertraagd</strong> betekent later, niet dat de trein helemaal niet komt. <strong>Rijdt vandaag niet</strong> betekent dat de trein is uitgevallen.</p>
        <h3 class="text-lg font-bold mt-6 mb-2">Spoorwijziging</h3>
        <p><em>"Dames en heren, de sprinter naar Utrecht Centraal van 14:28 vertrekt vandaag van spoor 2b in plaats van spoor 3a."</em></p>
        <p>Het oorspronkelijke spoor is vervangen; het eerstgenoemde spoor is het nieuwe.</p>
        <h3 class="text-lg font-bold mt-6 mb-2">Uitval</h3>
        <p><em>"De stoptrein van 14:35 naar Den Haag Centraal rijdt vandaag niet. Er wordt vervangend busvervoer ingezet."</em></p>
        <p><span class="pas-op-highlight">⚠️ PAS OP</span> Luister na deze mededeling altijd naar aanwijzingen waar de bussen vertrekken.</p>
        <h3 class="text-lg font-bold mt-6 mb-2">Extra trein</h3>
        <p><em>"Extra trein: van spoor 4 vertrekt om 14:40 een stoptrein naar Rotterdam Centraal."</em></p>
        <p>Deze staat niet in de gewone dienstregeling, vaak bij evenementen of drukte.</p>
      `,
    },
    {
      title: "Korte dialogen – wat kun je horen? 🗣️",
      body: `
        <h3 class="text-lg font-bold mt-4 mb-2">Aan het loket – een kaartje kopen</h3>
        <p><strong>Reiziger:</strong> Goedemiddag, mag ik een enkeltje naar Utrecht Centraal?</p>
        <p><strong>Medewerker:</strong> Enkeltje Utrecht Centraal, dat is € 8,70. Wilt u met pin betalen?</p>
        <p><strong>Reiziger:</strong> Ja, graag.</p>
        <p><strong>Medewerker:</strong> Hier is uw kaartje. De trein vertrekt om 14:46 van spoor 5.</p>
        <p><strong>Reiziger:</strong> Dank u wel.</p>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>enkeltje</strong> – een kaartje voor een enkele reis; <strong>retourtje</strong> – retour.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>met pin betalen</strong> – elektronisch betalen met een bankpas.</li>
        </ul>
        <h3 class="text-lg font-bold mt-6 mb-2">Informatie vragen over vertraging</h3>
        <p><strong>Reiziger:</strong> Pardon, weet u of de trein naar Maastricht vertraging heeft?</p>
        <p><strong>Conducteur:</strong> Ja, die is ongeveer een kwartier vertraagd.</p>
        <p><strong>Reiziger:</strong> Weet u ook van welk spoor hij vertrekt?</p>
        <p><strong>Conducteur:</strong> Normaal spoor 4, maar luistert u nog even naar de omroep voor de zekerheid.</p>
        <p><span class="pas-op-highlight">⚠️ PAS OP</span> <strong>Een kwartier</strong> is 15 minuten. <strong>Voor de zekerheid</strong> betekent "om risico te vermijden, om zeker te zijn".</p>
        <h3 class="text-lg font-bold mt-6 mb-2">In de trein – conducteur</h3>
        <p><strong>Conducteur:</strong> Goedemorgen, mag ik uw kaartje zien?</p>
        <p><strong>Reiziger:</strong> Natuurlijk, alstublieft.</p>
        <p><strong>Conducteur:</strong> Dank u. U moet overstappen op station Zwolle.</p>
        <p><strong>Reiziger:</strong> Hoeveel overstaptijd heb ik?</p>
        <p><strong>Conducteur:</strong> Ongeveer acht minuten. Dat moet lukken.</p>
        <p><span class="pas-op-highlight">⚠️ PAS OP</span> <strong>Overstappen</strong> betekent van de ene trein in de andere stappen. <strong>Overstaptijd</strong> is de tijd die je daarvoor hebt.</p>
        <h3 class="text-lg font-bold mt-6 mb-2">Drukte in de trein – een zitplaats zoeken</h3>
        <p><strong>Reiziger:</strong> Is deze plaats nog vrij?</p>
        <p><strong>Passagier:</strong> Nee, sorry, mijn vrouw zit daar. Maar verderop zijn nog wel plaatsen.</p>
        <p><strong>Reiziger:</strong> Dank u.</p>
        <p><strong>Verderop</strong> – een stukje verder in de trein.</p>
      `,
    },
    {
      title: "Luistertips – hoe haal je de kerninformatie uit een mededeling? 🎧",
      body: `
        <p>Bij het luisteren hoef je niet elk woord te begrijpen. Let vooral op de volgende kerninformatie:</p>
        <ol class="my-2 space-y-1.5 pl-5 list-decimal">
          <li><strong>Tijd:</strong> 14:23, vertraagd met tien minuten, om 14:46</li>
          <li><strong>Spoor/perron:</strong> spoor 6, spoor 2b, perron 4</li>
          <li><strong>Bestemming:</strong> Amsterdam Centraal, Utrecht Centraal</li>
          <li><strong>Treintype:</strong> intercity, sprinter, stoptrein</li>
          <li><strong>Actie:</strong> vertrekt van, rijdt niet, overstappen, vertraging</li>
          <li><strong>Beleefdheidszinnen en vraagwoorden:</strong> pardon, weet u of, mag ik, hoe lang, wanneer</li>
        </ol>
        <p><strong>Signaalwoorden in omroepen:</strong></p>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><em>Dames en heren</em> → er volgt een mededeling</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><em>Let op</em> → belangrijke wijziging of gevaar</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><em>in plaats van</em> → er is iets veranderd (spoor, trein)</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><em>vandaag niet</em> → de trein rijdt helemaal niet</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><em>extra trein</em> → een toegevoegde rit</li>
        </ul>
        <p>Oefen cijfers en tijden tot je ze direct herkent. In de volgende sectie zie je een overzicht van veelgebruikte tijdsaanduidingen.</p>
      `,
    },
    {
      title: "Overzicht tijden en getallen op het station 🕐",
      body: `
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Getal/tijd</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Betekenis</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Voorbeeld op station</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">tien minuten</td><td class="px-3 py-2 text-sm">10 minuten</td><td class="px-3 py-2 text-sm">De trein is tien minuten vertraagd.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">een kwartier</td><td class="px-3 py-2 text-sm">15 minuten</td><td class="px-3 py-2 text-sm">Over een kwartier vertrekt de volgende trein.</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">half uur</td><td class="px-3 py-2 text-sm">30 minuten</td><td class="px-3 py-2 text-sm">U heeft een half uur overstaptijd.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">vijf voor twee</td><td class="px-3 py-2 text-sm">13:55 uur</td><td class="px-3 py-2 text-sm">De volgende trein gaat om vijf voor twee.</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">tien over drie</td><td class="px-3 py-2 text-sm">15:10 uur</td><td class="px-3 py-2 text-sm">De sprinter van tien over drie.</td></tr>
            </tbody>
          </table>
        </div>
        <p>Let bij plaatsnamen op de beklemtoning van de grote steden. Vaak hoor je *Amsterdam Centraal*, *Utrecht Centraal*, *Rotterdam Centraal*. *Centraal* geeft het hoofdstation aan; *Airport* verwijst naar de luchthaven.</p>
      `,
    },
  ],
  rulesTable: [
    {
      rule: "Herken de vier kernwoorden",
      structure: "Let in elke mededeling op **tijd**, **spoor**, **bestemming** en **treintype**.",
      example: "\"De intercity van 14:23 naar Amsterdam Centraal vertrekt van spoor 6.\"",
      usage: "Deze vier elementen vertellen je precies wat je moet doen.",
    },
    {
      rule: "Vertraagd ≠ uitgevallen",
      structure: "**Vertraagd** betekent later dan gepland. **Rijdt vandaag niet** betekent dat de trein helemaal niet rijdt.",
      example: "Vertraagd met 10 minuten → je wacht. Rijdt niet → je zoekt een alternatief.",
      usage: "Bij uitval vaak vervangend busvervoer; luister naar aanwijzingen.",
    },
    {
      rule: "Spoorwijziging: 'in plaats van'",
      structure: "Als je *in plaats van* hoort, is het eerstgenoemde spoor het nieuwe spoor.",
      example: "\"...van spoor 2b in plaats van spoor 3a.\" → je moet naar spoor 2b.",
      usage: "Letters (a/b) geven een deel van het perron aan; let op de letter.",
    },
    {
      rule: "Signaalwoorden herkennen",
      structure: "*Dames en heren* opent een mededeling. *Let op* kondigt een wijziging of gevaar aan. *Extra trein* is een toegevoegde rit.",
      example: "\"Let op: de intercity van 14:23 is vertraagd.\"",
      usage: "Deze woorden helpen je focus te leggen op wat volgt.",
    },
  ],
  callouts: [
    { type: "remember", label: "Onthoud 1", text: "Mededelingen beginnen vaak met *Dames en heren* of *Let op*." },
    { type: "remember", label: "Onthoud 2", text: "Luister naar **tijd, spoor, bestemming** en **treintype** – de rest is bijzaak." },
    { type: "remember", label: "Onthoud 3", text: "**Vertraagd** = later, **rijdt niet** = uitgevallen, **in plaats van** = spoorwijziging." },
    { type: "remember", label: "Onthoud 4", text: "Oefen cijfers en tijden: *kwartier* (15), *half uur* (30), *vijf voor* (vijf minuten vóór het hele uur)." },
  ],
  commonMistakes: [
    {
      incorrect: "Alleen op het bord letten en niet naar de omroep luisteren.",
      correct: "Altijd naar de omroep luisteren; het spoor kan op het laatste moment wijzigen.",
      explanation: "Door alleen naar het bord te kijken mis je belangrijke laatste wijzigingen die omgeroepen worden.",
    },
    {
      incorrect: "Denken dat *vertraagd* betekent dat de trein niet komt.",
      correct: "Vertraagd = later; de trein rijdt nog wel.",
      explanation: "Vertraagd is een latere vertrektijd, niet hetzelfde als uitgevallen.",
    },
    {
      incorrect: "*Spoor 2b* verwarren met *spoor 2*.",
      correct: "Letters geven een deel van het perron aan; ga naar het juiste perronderdeel.",
      explanation: "2b is een specifiek gedeelte van perron 2; sta je op het verkeerde deel, dan mis je mogelijk de trein.",
    },
    {
      incorrect: "Een *enkeltje* kopen als je terug wilt.",
      correct: "Vraag een *retourtje* voor een retour.",
      explanation: "Een enkeltje is alleen voor de heenreis; voor een retour heb je een retourtje nodig.",
    },
    {
      incorrect: "In de war raken door de Engelse herhaling.",
      correct: "Focus op de Nederlandse mededeling; die is vaak het eerst en duidelijkst.",
      explanation: "De Nederlandse omroep komt meestal als eerste en bevat dezelfde informatie. Laat je niet afleiden.",
    },
  ],
  review: [
    "Mededelingen beginnen vaak met *Dames en heren* of *Let op*.",
    "Luister naar **tijd, spoor, bestemming** en **treintype**.",
    "Bij vertraging hoor je *vertraagd met* + tijdsduur.",
    "Bij spoorwijziging: *in plaats van* + oud spoor; het eerstgenoemde spoor is het nieuwe.",
    "*Rijdt vandaag niet* = trein valt uit, vaak met vervangend busvervoer.",
    "In dialogen: *enkeltje* = enkele reis, *retourtje* = retour.",
    "Oefen cijfers en tijden tot je ze direct herkent.",
    "Laat je niet afleiden door de Engelse herhaling; de Nederlandse versie is vaak het duidelijkst.",
  ],
  qa: [
    {
      question: "Je hoort op het station: “Dames en heren, de intercity van 14:23 naar Amsterdam Centraal is vandaag vertraagd met ongeveer vijftien minuten.” Wat is de nieuwe vertrektijd ongeveer?",
      answer: "Ongeveer 14:38 uur (14:23 + 15 minuten). De mededeling zegt *vertraagd met ongeveer vijftien minuten*, dus je telt die vijftien minuten bij de oorspronkelijke tijd op.",
    },
    {
      question: "Je hoort: “De sprinter naar Utrecht Centraal van 14:28 vertrekt vandaag van spoor 2b in plaats van spoor 3a.” Van welk spoor moet je vertrekken?",
      answer: "Van spoor **2b**. *In plaats van* geeft aan dat spoor 3a vervallen is; het nieuwe spoor is het eerstgenoemde getal: spoor 2b.",
    },
    {
      question: "Je hoort: “De stoptrein van 14:35 naar Den Haag Centraal rijdt vandaag niet. Er wordt vervangend busvervoer ingezet.” Wat moet je doen om in Den Haag te komen?",
      answer: "Je moet de **vervangende bus** nemen. De trein rijdt niet, en er is busvervoer geregeld. Luister of er nog een aanwijzing komt waar de bus vertrekt.",
    },
    {
      question: "In een dialoog vraag je: “Pardon, weet u of de trein naar Maastricht vertraging heeft?” De conducteur antwoordt: “Ja, die is ongeveer een kwartier vertraagd.” Hoeveel minuten vertraging heeft de trein?",
      answer: "Ongeveer **15 minuten**. *Een kwartier* is 15 minuten.",
    },
    {
      question: "Je hoort: “Extra trein: van spoor 4 vertrekt om 14:40 een stoptrein naar Rotterdam Centraal.” Is dit een gewone trein uit de dienstregeling?",
      answer: "Nee, het is een **extra trein**. Die staat niet in de gewone dienstregeling, maar wordt extra ingezet, bijvoorbeeld bij drukte.",
    },
    {
      question: "Aan het loket bestel je een enkeltje naar Utrecht Centraal van € 8,70 en zegt “Ja, graag” op de vraag of je met pin wilt betalen. Wat voor kaartje koop je en hoe betaal je?",
      answer: "Je koopt een **enkeltje** (enkele reis) naar Utrecht Centraal en je betaalt **met pin** (elektronisch).",
    },
    {
      question: "In de trein zegt de conducteur dat je moet overstappen op Zwolle en dat je ongeveer acht minuten overstaptijd hebt. Hij voegt toe: “Dat moet lukken.” Wat betekent dat?",
      answer: "Het betekent dat de overstap van acht minuten **waarschijnlijk voldoende** is om de volgende trein te halen, maar het is niet helemaal zeker. Je moet wel opschieten.",
    },
  ],
};