import type { GrammarLesson } from "../../types";

export const feestdagen: GrammarLesson = {
  id: "nl-feestdagen-1",
  title: "Nederlandse en Belgische Feestdagen en Gewoontes",
  level: 1,
  topic: "Feestdagen en gewoontes", // [C] Cultuur & Maatschappij
  body: "Leer de belangrijkste feestdagen en tradities in Nederland en België. Van Koningsdag tot Sinterklaas en Carnaval, met alle verschillen.",
  overview:
    "Feestdagen vertellen het verhaal van een land en zijn mensen. In deze **supercomplete, landenvergelijkende les** ontdek je alles over **Koningsdag, Sinterklaas, Carnaval, de Belgische Nationale Feestdag, Kerstmis** en nog veel meer. Je leert hoe beide landen dezelfde feesten soms heel anders vieren, welke typische lekkernijen erbij horen, en waarom sommige dagen wel of geen vrije dag zijn. Met heldere vergelijkingstabellen, waarschuwingen voor gevoeligheden, en 7 ijzersterke oefenvragen ken jij voortaan de feestdagen van Nederland en België door en door.",
  anchorSectionId: "belang",
  exercises: [],
  timeExpressionsLabel: "Overzichtstabel – Nederland en België vergeleken 🧾",
  timeExpressions: {
    header: "Feestdag / Gewoonte | Nederland 🇳🇱 | België 🇧🇪",
    rows: [
      ["**Nieuwjaarsdag**", "Oliebollen, vuurwerk, nieuwjaarsduik", "Oliebollen (minder), nieuwjaarsbrief, vuurwerk"],
      ["**Carnaval**", "Zuid-Nederland, *Alaaf!*, optochten", "Heel België, Binche (Gilles), Aalst (satire)"],
      ["**Pasen**", "Eieren zoeken, paasstol, 2e paasdag", "Eieren rapen, cougnou, 2e paasdag"],
      ["**Dag vd Arbeid (1 mei)**", "Meestal geen vrije dag", "**Officiële feestdag**"],
      ["**Koningsdag / Nationale feestdag**", "27 april, vrijmarkt, oranje, feest", "21 juli, defilé, vuurwerk, driekleur"],
      ["**Sinterklaas**", "5 dec pakjesavond, surprises, gedichten", "6 dec ochtend, geen pakjesavond"],
      ["**Kerstmis**", "1e + 2e kerstdag, gourmetten", "Kerstavond groot diner, 1e + 2e kerstdag"],
      ["**11 november**", "Geen vrije dag (wel Sint Maarten)", "**Wapenstilstand**, officiële feestdag"],
    ],
  },
  details: [
    {
      title: "Nieuwjaarsdag (1 januari) 🍾🥂",
      body: `
        <h3 class="text-lg font-bold mt-4 mb-2">Nederland 🇳🇱</h3>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>Oliebollen:</strong> Op oudejaarsavond en nieuwjaarsdag eet men vette, ronde deegballen met poedersuiker.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>Vuurwerk:</strong> Om middernacht steken mensen massaal vuurwerk af.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>Nieuwjaarsduik:</strong> Op 1 januari duiken duizenden mensen in zee (bijv. Scheveningen).</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>Wensen:</strong> *Gelukkig Nieuwjaar!*, *De beste wensen!*</li>
        </ul>
        <h3 class="text-lg font-bold mt-6 mb-2">België 🇧🇪</h3>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>Oudejaarsavond:</strong> Uitgebreid diner met familie of vrienden.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>Nieuwjaarsbrief:</strong> Kinderen schrijven een mooie brief met wensen en lezen die op nieuwjaarsdag voor aan ouders, grootouders of peter/meter. Uniek Belgisch!</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>Oliebollen</strong> komen voor, maar minder algemeen.</li>
        </ul>
      `,
    },
    {
      title: "Carnaval (februari/maart) 🎭🎉",
      body: `
        <h3 class="text-lg font-bold mt-4 mb-2">Nederland 🇳🇱</h3>
        <p>Vooral in Noord-Brabant (Den Bosch, Eindhoven) en Limburg (Maastricht). Drie dagen lang: optochten, verkleden, muziek, carnavalskrakers. Steden krijgen een andere naam (Den Bosch = Oeteldonk). Groet: <strong>*Alaaf!*</strong> Elk dorp kiest een Prins Carnaval.</p>
        <h3 class="text-lg font-bold mt-6 mb-2">België 🇧🇪</h3>
        <p>Grootst in <strong>Binche</strong> (Wallonië) met de beroemde <strong>Gilles</strong> – mannen met wassen maskers, klompen en struisvogelveren die sinaasappels gooien. In <strong>Aalst</strong> (Vlaanderen) grote satirische optocht met politieke spot. Beide erkend door UNESCO.</p>
        <p><span class="pas-op-highlight">⚠️ PAS OP</span> Carnaval is in beide landen <strong>geen officiële feestdag</strong>. In carnavalsregio's kunnen scholen wel dicht zijn, maar kantoren en winkels vaak open.</p>
      `,
    },
    {
      title: "Pasen (maart/april) 🐣🌸",
      body: `
        <h3 class="text-lg font-bold mt-4 mb-2">Nederland 🇳🇱</h3>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>Eieren zoeken:</strong> De paashaas verstopt chocolade-eieren in de tuin of woonkamer.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>Paasontbijt / -brunch:</strong> Uitgebreide maaltijd met paasstol (brood met spijs) en gekookte eieren.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>Tweede paasdag</strong> (maandag) is een officiële vrije dag; veel mensen gaan naar meubelboulevards, pretparken of de natuur.</li>
        </ul>
        <h3 class="text-lg font-bold mt-6 mb-2">België 🇧🇪</h3>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">Ook eieren rapen, maar de brenger is vaak "de klokken van Rome".</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>Cougnou</strong> (Wallonië): brood in de vorm van een kindje (Jezus).</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">Ook paasmaandag officieel vrij.</li>
        </ul>
        <p><span class="pas-op-highlight">⚠️ PAS OP</span> De datum van Pasen wisselt jaarlijks (tussen 22 maart en 25 april).</p>
      `,
    },
    {
      title: "Dag van de Arbeid (1 mei) 👷‍♂️✊",
      body: `
        <p><strong>Nederland 🇳🇱:</strong> Meestal <strong>geen vrije dag</strong>, alleen in sommige cao's of overheidsdiensten. Kleinschalige manifestaties.<br>
        <strong>België 🇧🇪:</strong> <strong>Officiële feestdag!</strong> Iedereen vrij; scholen, banken, winkels dicht. Optochten en toespraken van vakbonden.</p>
      `,
    },
    {
      title: "Koningsdag (27 april, NL) en Belgische Nationale Feestdag (21 juli) 👑🧡🇧🇪",
      body: `
        <h3 class="text-lg font-bold mt-4 mb-2">Koningsdag – Nederland 🇳🇱</h3>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">Verjaardag van koning Willem-Alexander (27 april).</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>Vrijmarkt:</strong> Iedereen mag gratis spullen op straat verkopen.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>Oranje kleding</strong> en accessoires; alles moet oranje.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">Overal openluchtconcerten en festivals; Amsterdam is het epicentrum.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">Eten: oranje tompoucen, oranje bitterballen. Uitroep: *Oranje boven!*</li>
        </ul>
        <h3 class="text-lg font-bold mt-6 mb-2">Belgische Nationale Feestdag – België 🇧🇪</h3>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">Herdenking eedaflegging van koning Leopold I in 1831 (21 juli).</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>Militair defilé</strong> op het Paleizenplein in Brussel; 's avonds groot vuurwerk.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">Volksfeesten en gratis concerten. De driekleur (zwart-geel-rood) domineert.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">Wensen: *Gelukkige nationale feestdag!* / *Bonne fête nationale!*</li>
        </ul>
      `,
    },
    {
      title: "Sinterklaas (5 dec NL / 6 dec BE) 🎁🎄",
      body: `
        <h3 class="text-lg font-bold mt-4 mb-2">Nederland 🇳🇱</h3>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">Intocht half november; de Sint komt met de stoomboot uit Spanje.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>Schoen zetten:</strong> Kinderen zetten hun schoen met een wortel; de volgende ochtend zit er snoep of een cadeautje in.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>Pakjesavond</strong> op 5 december: surprises (zelfgemaakte cadeautjes) en gedichten.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">Snoep: pepernoten, kruidnoten, chocoladeletters, marsepein.</li>
        </ul>
        <h3 class="text-lg font-bold mt-6 mb-2">België 🇧🇪</h3>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">Ook intocht en schoen zetten, maar de cadeautjes komen in de nacht van 5 op 6 december en liggen <strong>op 6 december 's ochtends</strong> klaar. Geen pakjesavond.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">Snoep: speculaas, marsepein, chocolade, nic-nacjes.</li>
        </ul>
        <p><span class="pas-op-highlight">⚠️ PAS OP</span> In beide landen is Sinterklaas <strong>niet</strong> hetzelfde als de Kerstman. De figuur van Zwarte Piet is onderwerp van maatschappelijk debat; steeds vaker gebruikt men **Roetveegpiet** of **Regenboogpiet**.</p>
      `,
    },
    {
      title: "Kerstmis (25 en 26 december) 🎄🌟",
      body: `
        <h3 class="text-lg font-bold mt-4 mb-2">Nederland 🇳🇱</h3>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>Eerste kerstdag (25 dec):</strong> Uitgebreid kerstontbijt of -brunch, veel kaarsen en kerststukjes.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>Tweede kerstdag (26 dec):</strong> Vaak gourmetten (zelf vlees, vis, groente aan tafel bakken) of kerstdiner met familie.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">Een echte kerstboom met lampjes en ballen.</li>
        </ul>
        <h3 class="text-lg font-bold mt-6 mb-2">België 🇧🇪</h3>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>Kerstavond (24 dec):</strong> Het belangrijkste moment: groot kerstdiner (voorgerecht, hoofdgerecht, kaas, dessert). Veel mensen gaan naar de nachtmis.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>Eerste en tweede kerstdag</strong> officieel vrij; rustiger, uitgebreide lunch of restaurantbezoek.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>Bûche de Noël</strong> (kerststronk): populaire kersttaart in de vorm van een boomstam.</li>
        </ul>
      `,
    },
    {
      title: "Andere Belgische feestdagen 🇧🇪",
      body: `
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Feestdag</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Datum</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Wat viert men?</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Feest van de Vlaamse Gemeenschap 🦁</td><td class="px-3 py-2 text-sm">11 juli</td><td class="px-3 py-2 text-sm">Herdenking van de Guldensporenslag (1302).</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Feest van de Franstalige Gemeenschap 🇫🇷</td><td class="px-3 py-2 text-sm">27 september</td><td class="px-3 py-2 text-sm">Viering van de Franstalige cultuur.</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Feest van de Duitstalige Gemeenschap 🇩🇪</td><td class="px-3 py-2 text-sm">15 november</td><td class="px-3 py-2 text-sm">Dag van de Duitstalige Belgen.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Wapenstilstand 🌺</td><td class="px-3 py-2 text-sm">11 november</td><td class="px-3 py-2 text-sm">Einde Eerste Wereldoorlog; officiële feestdag.</td></tr>
            </tbody>
          </table>
        </div>
        <p>In Nederland zijn 4 mei (dodenherdenking) en 5 mei (bevrijdingsdag) belangrijk, maar dat zijn geen algemene vrije dagen zoals in België.</p>
      `,
    },
  ],
  rulesTable: [
    {
      rule: "Ken het verschil: Sinterklaas ≠ Kerstman",
      structure: "**Sinterklaas** brengt cadeaus op 5/6 december. De **Kerstman** (Santa Claus) is een Amerikaanse figuur die in Nederland en België geen eigen traditie van cadeaugeven heeft.",
      example: "Cadeaus krijgen we van Sinterklaas, niet van de Kerstman.",
      usage: "Verwar deze twee niet; het zijn verschillende figuren met verschillende feestdagen.",
    },
    {
      rule: "1 mei: België wél vrij, Nederland meestal niet",
      structure: "In **België** is de Dag van de Arbeid een officiële feestdag waarop iedereen vrij is. In **Nederland** is het meestal een gewone werkdag.",
      example: "Op 1 mei zijn Belgische scholen en winkels gesloten; in Nederland gewoon open.",
      usage: "Houd hier rekening mee als je op 1 mei plannen maakt.",
    },
    {
      rule: "Carnaval is geen officiële feestdag",
      structure: "Carnaval wordt groots gevierd in het zuiden van Nederland en in heel België, maar het is **geen** wettelijke vrije dag. In carnavalsstreken kunnen scholen wel dicht zijn.",
      example: "In Den Bosch (Oeteldonk) is iedereen vrij, maar in Groningen merkt men er niets van.",
      usage: "Check lokale regels als je in een carnavalsregio werkt of naar school gaat.",
    },
    {
      rule: "Nederland en België hebben verschillende koninklijke feestdagen",
      structure: "Nederland viert **Koningsdag** op 27 april. België viert de **Nationale Feestdag** op 21 juli én kent aparte gemeenschapsfeestdagen.",
      example: "Op 27 april is oranje in Nederland; op 21 juli wappert de Belgische driekleur.",
      usage: "Deze dagen zijn niet inwisselbaar; elk land heeft zijn eigen monarchie en feestdag.",
    },
    {
      rule: "Wees gevoelig bij Zwarte Piet",
      structure: "De figuur van Zwarte Piet is onderwerp van maatschappelijk debat. Gebruik bij twijfel **Piet**, **Roetveegpiet** of **Regenboogpiet**.",
      example: "Zeg liever 'De Pieten hebben pepernoten gestrooid' dan de nadruk op kleur te leggen.",
      usage: "Het is belangrijk om respectvol met deze traditie om te gaan, zowel in Nederland als in België.",
    },
  ],
  callouts: [
    { type: "remember", label: "Onthoud 1", text: "**Koningsdag (NL):** 27 april, oranje, vrijmarkt. **Nationale Feestdag (BE):** 21 juli, defilé, vuurwerk." },
    { type: "remember", label: "Onthoud 2", text: "**Sinterklaas:** cadeaus op 5 dec 's avonds (NL) of 6 dec 's ochtends (BE). Géén Kerstman!" },
    { type: "remember", label: "Onthoud 3", text: "**Carnaval:** groot in Zuid‑Nederland en België (Binche, Aalst), maar geen officiële vrije dag." },
    { type: "remember", label: "Onthoud 4", text: "**1 mei:** in België een officiële feestdag, in Nederland niet." },
    { type: "remember", label: "Onthoud 5", text: "**Nieuwjaarsbrief** is typisch Belgisch; **oliebollen** en **nieuwjaarsduik** typisch Nederlands." },
  ],
  commonMistakes: [
    {
      incorrect: "Denken dat Sinterklaas en de Kerstman hetzelfde zijn.",
      correct: "Sinterklaas = 5/6 december; Kerstman = Amerikaanse kersttraditie.",
      explanation: "In Nederland en België brengt Sinterklaas de cadeaus, niet de Kerstman.",
    },
    {
      incorrect: "Verwachten dat 1 mei in Nederland een vrije dag is.",
      correct: "In Nederland is 1 mei meestal een gewone werkdag.",
      explanation: "Alleen in bepaalde cao's of overheidsdiensten is men vrij.",
    },
    {
      incorrect: "Op 21 juli in Nederland een feestdag verwachten.",
      correct: "21 juli is alleen de Belgische nationale feestdag.",
      explanation: "Nederland heeft Koningsdag op 27 april.",
    },
    {
      incorrect: "Carnaval overal in Nederland en België verwachten.",
      correct: "Carnaval is vooral in het zuiden van Nederland en in bepaalde Belgische steden groot; in het noorden van Nederland nauwelijks.",
      explanation: "Het is een regionaal, geen nationaal feest.",
    },
    {
      incorrect: "Zonder nadenken 'Zwarte Piet' gebruiken.",
      correct: "Wees voorzichtig; gebruik liever 'Piet', 'Roetveegpiet' of 'Regenboogpiet'.",
      explanation: "De figuur is omstreden en roept gevoelens van uitsluiting op.",
    },
  ],
  review: [
    "Nieuwjaar: oliebollen, vuurwerk, nieuwjaarsbrief (BE).",
    "Carnaval: verkleden, optochten; Binche (BE), Aalst (BE), Brabant/Limburg (NL).",
    "Pasen: eieren zoeken, paasstol/cougnou, tweede paasdag.",
    "1 mei: België vrij, Nederland niet.",
    "Koningsdag (NL): 27 april, oranje, vrijmarkt.",
    "Nationale feestdag (BE): 21 juli, defilé, vuurwerk.",
    "Sinterklaas: NL 5 dec pakjesavond, BE 6 dec ochtend.",
    "Kerstmis: 25+26 dec, gourmetten (NL), kerstdiner (BE).",
    "Wapenstilstand (BE): 11 november.",
    "Wees voorzichtig met Zwarte Piet, verwar Sinterklaas niet met de Kerstman, en houd rekening met streekgebonden feesten.",
  ],
  qa: [
    {
      question: "Wat is het grote verschil tussen Koningsdag in Nederland en de Nationale Feestdag in België?",
      answer: "In Nederland is Koningsdag (27 april) een uitbundig volksfeest met vrijmarkt, oranje kleding en straatfeesten. In België is de Nationale Feestdag (21 juli) een officiële dag met een militair defilé, vuurwerk en patriottische sfeer, zonder rommelmarkt of oranje.",
    },
    {
      question: "Hoe verschilt de pakjestraditie van Sinterklaas in Nederland en België?",
      answer: "In Nederland vieren kinderen **pakjesavond** op 5 december 's avonds, vaak met surprises en gedichten. In België komen de cadeaus in de nacht van 5 op 6 december en vinden de kinderen ze op **6 december 's ochtends**; er is geen pakjesavond.",
    },
    {
      question: "Wat is een typisch Belgische nieuwjaarstraditie die je niet of nauwelijks in Nederland ziet?",
      answer: "De **nieuwjaarsbrief**, waarbij kinderen een mooie brief met wensen schrijven en die op nieuwjaarsdag voorlezen aan ouders, grootouders of peter en meter.",
    },
    {
      question: "Waarom is 1 mei in België wél een officiële vrije dag en in Nederland meestal niet?",
      answer: "In België is de Dag van de Arbeid historisch sterker verankerd als een feestdag van de arbeidersbeweging en is het een officiële feestdag. In Nederland is dat niet het geval; alleen bepaalde sectoren hebben een vrije dag.",
    },
    {
      question: "Wat is een 'Gille' en bij welk feest hoort hij?",
      answer: "Een **Gille** is een traditionele figuur met een wassen masker, klompen en struisvogelveren op zijn hoofd, die **sinaasappels** naar het publiek gooit. Hij hoort bij het **carnaval van Binche** in Wallonië (België).",
    },
    {
      question: "Noem twee typische lekkernijen die in Nederland met Koningsdag worden gegeten.",
      answer: "**Oranje tompoucen** (gebak met oranje glazuur) en **oranje bitterballen** (of oranje gekleurde snacks). Alles is oranje op deze dag!",
    },
    {
      question: "Waarom mag je in zowel Nederland als België beter voorzichtig zijn met de term 'Zwarte Piet'?",
      answer: "Omdat de figuur van Zwarte Piet onderwerp is van een maatschappelijke discussie over racisme en koloniale stereotypen. In beide landen gebruiken steeds meer mensen **Piet**, **Roetveegpiet** of **Regenboogpiet** om het feest voor iedereen fijn te houden.",
    },
  ],
};