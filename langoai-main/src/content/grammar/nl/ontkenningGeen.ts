import type { GrammarLesson } from "../../types";

export const ontkenningGeen: GrammarLesson = {
  id: "nl-ontkenning-geen-1",
  title: "Ontkenning met 'geen' – Plaatsing en gebruik",
  level: 1,
  topic: "Ontkenning (geen)", // [G] Grammatica
  body: "Leer hoe je zelfstandige naamwoorden ontkent met 'geen'. Wanneer gebruik je 'geen' in plaats van 'niet'? Met duidelijke regels en voorbeelden.",
  overview:
    "Met **geen** ontken je een onbepaald zelfstandig naamwoord. In deze **superduidelijke, compleet herziene les** ontdek je stap voor stap wanneer je *geen* gebruikt en wanneer *niet*. Je leert waar *geen* in de hoofdzin en bijzin staat, hoe het zich gedraagt met bijvoeglijke naamwoorden (*geen groot huis*, *geen mooie auto*), en hoe je extra nadruk geeft met *geen enkel/geen enkele*. Met heldere tabellen, tientallen voorbeelden, PAS OP‑waarschuwingen en 7 ijzersterke oefenvragen gebruik jij *geen* voortaan foutloos.",
  anchorSectionId: "wat",
  exercises: [],
  timeExpressionsLabel: "Overzicht 'geen' in één oogopslag 🚫",
  timeExpressions: {
    header: "Zin zonder ontkenning | Zin met 'geen' | Wat ontken je?",
    rows: [
      ["Dit is **een boek**.", "Dit is **geen boek**.", "Onbepaald enkelvoud"],
      ["Ik heb **boeken**.", "Ik heb **geen boeken**.", "Onbepaald meervoud"],
      ["We drinken **water**.", "We drinken **geen water**.", "Niet‑telbare stof"],
      ["Hij heeft **de auto**.", "Hij heeft de auto **niet**.", "Bepaald → gebruik *niet*"],
      ["Dat is **mijn probleem**.", "Dat is **niet** mijn probleem.", "Bezittelijk → gebruik *niet*"],
    ],
  },
  details: [
    {
      title: "Wat is 'geen' en wanneer gebruik je het? 🎯",
      body: `
        <p><strong>Geen</strong> is het ontkenningswoord dat je gebruikt om een <strong>zelfstandig naamwoord</strong> te ontkennen dat <strong>onbepaald</strong> is. Dat wil zeggen: het zelfstandig naamwoord staat normaal met <strong>een</strong>, met <strong>geen lidwoord</strong>, of het is een <strong>meervoud</strong> of een <strong>niet‑telbare stof</strong>. In al die gevallen vervangt <em>geen</em> het lidwoord <em>een</em> of het ontbrekende lidwoord en drukt het "niet één", "geen enkel" of "geen hoeveelheid" uit.</p>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">Ik heb <strong>een auto</strong>. → Ik heb <strong>geen auto</strong>.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">We hebben <strong>kinderen</strong>. → We hebben <strong>geen kinderen</strong>.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">Hij drinkt <strong>melk</strong>. → Hij drinkt <strong>geen melk</strong>.</li>
        </ul>
      `,
    },
    {
      title: "De basisregel: 'geen' staat vóór het zelfstandig naamwoord 🧱",
      body: `
        <p><strong>Geen</strong> wordt rechtstreeks vóór het zelfstandig naamwoord gezet dat je wilt ontkennen. Het vervangt het onbepaald lidwoord <em>een</em> of staat op de plek waar anders <em>een</em> zou kunnen staan. Als er een bijvoeglijk naamwoord bij het zelfstandig naamwoord hoort, dan komt <em>geen</em> daarvóór.</p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Zonder ontkenning</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Met 'geen'</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Dit is <strong>een boek</strong>.</td><td class="px-3 py-2 text-sm">Dit is <strong>geen boek</strong>.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Hij koopt <strong>een fiets</strong>.</td><td class="px-3 py-2 text-sm">Hij koopt <strong>geen fiets</strong>.</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Zij heeft <strong>een groot huis</strong>.</td><td class="px-3 py-2 text-sm">Zij heeft <strong>geen groot huis</strong>.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">We zagen <strong>een mooie vogel</strong>.</td><td class="px-3 py-2 text-sm">We zagen <strong>geen mooie vogel</strong>.</td></tr>
            </tbody>
          </table>
        </div>
        <p>Je ziet: <em>geen</em> staat op exact dezelfde plaats als <em>een</em> zou staan. Het is dus een lidwoordvervangend ontkenningswoord.</p>
      `,
    },
    {
      title: "'Geen' bij meervoud en niet‑telbare stoffen 🧩",
      body: `
        <p>Bij meervoud en bij stoffen die normaal <strong>zonder lidwoord</strong> gebruikt worden, komt <em>geen</em> ook vóór het zelfstandig naamwoord. Daar vervangt het het 'onzichtbare' lidwoord.</p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Zonder ontkenning</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Met 'geen'</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Ik heb <strong>boeken</strong>.</td><td class="px-3 py-2 text-sm">Ik heb <strong>geen boeken</strong>.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Zij kent <strong>mensen</strong> in de stad.</td><td class="px-3 py-2 text-sm">Zij kent <strong>geen mensen</strong> in de stad.</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">We drinken <strong>water</strong>.</td><td class="px-3 py-2 text-sm">We drinken <strong>geen water</strong>.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Er is <strong>geld</strong> over.</td><td class="px-3 py-2 text-sm">Er is <strong>geen geld</strong> over.</td></tr>
            </tbody>
          </table>
        </div>
        <p><span class="pas-op-highlight">⚠️ PAS OP</span> Na <em>geen</em> blijft het zelfstandig naamwoord in dezelfde vorm staan als in de positieve zin. Dus <em>geen boeken</em> (meervoud), <em>geen water</em> (enkelvoud). Je hoeft niets extra's te doen.</p>
      `,
    },
    {
      title: "'Geen' versus 'niet' – de cruciale vergelijking ⚖️",
      body: `
        <p>Dit is het belangrijkste onderscheid. Het voorkomt heel veel fouten.</p>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>Geen</strong> gebruik je alleen bij <strong>zelfstandige naamwoorden</strong> die <strong>onbepaald</strong> zijn (met <em>een</em> of zonder lidwoord).</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>Niet</strong> gebruik je om <strong>werkwoorden</strong>, <strong>bijvoeglijke naamwoorden</strong>, <strong>bijwoorden</strong>, <strong>voorzetselgroepen</strong> en <strong>bepaalde zelfstandige naamwoorden</strong> (met <em>de/het</em>) te ontkennen.</li>
        </ul>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Met 'geen'</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Met 'niet'</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Ik heb <strong>geen auto</strong>. (auto = onbepaald)</td><td class="px-3 py-2 text-sm">Ik heb <strong>de auto niet</strong>. (de auto = bepaald)</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Dat is <strong>geen probleem</strong>. (probleem = onbepaald)</td><td class="px-3 py-2 text-sm">Dat is <strong>niet mijn probleem</strong>. (mijn probleem = specifiek)</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Zij kent <strong>geen mensen</strong> hier. (onbepaald meervoud)</td><td class="px-3 py-2 text-sm">Zij kent <strong>de mensen niet</strong>. (bepaald)</td></tr>
            </tbody>
          </table>
        </div>
        <p><strong>Regel:</strong> Stel jezelf de vraag: kun je in de positieve zin <em>een</em> of <em>geen lidwoord</em> gebruiken vóór het zelfstandig naamwoord? Zo ja, dan is de ontkenning <strong>geen</strong>. Als het zelfstandig naamwoord al <em>de</em>, <em>het</em>, <em>dit</em>, <em>dat</em>, <em>mijn</em>, <em>jouw</em>, <em>deze</em> of <em>die</em> bij zich heeft, dan gebruik je <strong>niet</strong>.</p>
      `,
    },
    {
      title: "Plaatsing van 'geen' in de hoofdzin 🏗️",
      body: `
        <p>Omdat <em>geen</em> bij het zelfstandig naamwoord hoort, beweegt het <strong>mee met het zinsdeel</strong> waarin dat zelfstandig naamwoord staat. Het zinsdeel kan lijdend voorwerp, meewerkend voorwerp, onderwerp, naamwoordelijk deel van het gezegde, of een voorzetselvoorwerp zijn.</p>
        <p>In de hoofdzin blijft de algemene volgorde: onderwerp – persoonsvorm – rest. Het zinsdeel met <em>geen</em> staat op de normale plaats die het zinsdeel ook zonder ontkenning zou hebben.</p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Functie zinsdeel met 'geen'</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Voorbeeld</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Lijdend voorwerp</td><td class="px-3 py-2 text-sm">Ik koop <strong>geen fiets</strong>.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Onderwerp</td><td class="px-3 py-2 text-sm"><strong>Geen mens</strong> wist het antwoord.</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Naamwoordelijk deel</td><td class="px-3 py-2 text-sm">Dat is <strong>geen oplossing</strong>.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Voorzetselvoorwerp</td><td class="px-3 py-2 text-sm">We wachten op <strong>geen enkele reactie</strong>.</td></tr>
            </tbody>
          </table>
        </div>
        <p>Met uitgebreidere zinnen: *Ik heb gisteren <strong>geen krant</strong> gelezen.* (lijdend voorwerp vóór het voltooid deelwoord) – *Hij zal morgen <strong>geen tijd</strong> hebben.* (vóór de infinitief).</p>
      `,
    },
    {
      title: "Plaatsing van 'geen' in de bijzin 🔄",
      body: `
        <p>Ook in de bijzin verandert er aan de positie van <em>geen</em> niets bijzonders. Het zelfstandig naamwoord met <em>geen</em> staat in hetzelfde zinsdeel, alleen de werkwoorden verhuizen naar het einde.</p>
        <p><strong>Voegwoord – onderwerp – (zinsdeel met *geen*) – rest – werkwoordelijke eindgroep</strong></p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Hoofdzin</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Bijzin met 'omdat'</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Ik koop <strong>geen fiets</strong>.</td><td class="px-3 py-2 text-sm">...omdat ik <strong>geen fiets</strong> koop.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Hij heeft <strong>geen boek</strong> gelezen.</td><td class="px-3 py-2 text-sm">...omdat hij <strong>geen boek</strong> heeft gelezen.</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Wij hebben <strong>geen kinderen</strong> gezien.</td><td class="px-3 py-2 text-sm">...omdat wij <strong>geen kinderen</strong> hebben gezien.</td></tr>
            </tbody>
          </table>
        </div>
      `,
    },
    {
      title: "'Geen' met bijvoeglijke naamwoorden 🎨",
      body: `
        <p>Als er een bijvoeglijk naamwoord voor het zelfstandig naamwoord staat, dan komt <em>geen</em> vóór dat bijvoeglijk naamwoord. Het bijvoeglijk naamwoord volgt de normale regels: bij de‑woorden met een -e, bij het‑woorden zonder -e als het onbepaald is.</p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Positief (een)</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Met 'geen'</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Uitleg</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">een <strong>mooie</strong> auto (de)</td><td class="px-3 py-2 text-sm">geen <strong>mooie</strong> auto</td><td class="px-3 py-2 text-sm">de‑woord → wel -e</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">een <strong>groot</strong> huis (het)</td><td class="px-3 py-2 text-sm">geen <strong>groot</strong> huis</td><td class="px-3 py-2 text-sm">het‑woord, onbepaald → geen -e</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">een <strong>leuke</strong> film (de)</td><td class="px-3 py-2 text-sm">geen <strong>leuke</strong> film</td><td class="px-3 py-2 text-sm">de‑woord → wel -e</td></tr>
            </tbody>
          </table>
        </div>
        <p><span class="pas-op-highlight">⚠️ PAS OP</span> <em>Geen groot huis</em> is correct, niet <em>geen grote huis</em>, want <em>huis</em> is een het‑woord en na <em>geen</em> (onbepaald) krijgt het bijvoeglijk naamwoord geen -e. Bij de‑woorden blijft de -e wel staan: <em>geen mooie auto</em>. Dit is exact dezelfde regel als na <em>een</em>.</p>
      `,
    },
    {
      title: "'Geen enkel' / 'geen enkele' – extra nadruk 🔍",
      body: `
        <p>Om te benadrukken dat het om nul exemplaren gaat, kun je <strong>geen enkel</strong> (bij het‑woorden) of <strong>geen enkele</strong> (bij de‑woorden) gebruiken.</p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Met 'geen'</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Met 'geen enkel(e)'</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Ik heb <strong>geen fout</strong> gemaakt.</td><td class="px-3 py-2 text-sm">Ik heb <strong>geen enkele fout</strong> gemaakt.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Hij heeft <strong>geen boek</strong> gelezen.</td><td class="px-3 py-2 text-sm">Hij heeft <strong>geen enkel boek</strong> gelezen.</td></tr>
            </tbody>
          </table>
        </div>
      `,
    },
  ],
  rulesTable: [
    {
      rule: "Geen ontkent onbepaalde zelfstandige naamwoorden",
      structure: "Gebruik **geen** bij een zelfstandig naamwoord dat normaal met **een** of zonder lidwoord staat (meervoud, stoffen).",
      example: "Ik heb **geen auto**. – Er is **geen brood**.",
      usage: "Vervangt het onbepaalde lidwoord of het afwezige lidwoord.",
    },
    {
      rule: "Niet ontkent de rest",
      structure: "Gebruik **niet** bij bepaalde zelfstandige naamwoorden (met de/het/dit/dat/mijn etc.), bij werkwoorden, bijvoeglijke naamwoorden en bijwoorden.",
      example: "Ik heb **de auto niet**. – Hij loopt **niet snel**.",
      usage: "Dus niet: *Ik heb niet een auto* (tenzij je 'niet één' benadrukt).",
    },
    {
      rule: "Geen staat vóór het zelfstandig naamwoord (of bijvoeglijk naamwoord)",
      structure: "Plaats **geen** direct vóór het zelfstandig naamwoord. Staat er een bijvoeglijk naamwoord, dan vóór dat bijvoeglijk naamwoord.",
      example: "**geen boek**, **geen groot huis**, **geen mooie auto**.",
      usage: "Bij het‑woorden enkelvoud: bijvoeglijk naamwoord zonder -e (geen groot huis).",
    },
    {
      rule: "Zinsdeel met 'geen' verandert niet van plaats",
      structure: "Het zinsdeel met **geen** staat op dezelfde positie als het zinsdeel zonder ontkenning. In de bijzin schuiven alleen de werkwoorden naar achteren.",
      example: "Ik koop **geen fiets**. – ...omdat ik **geen fiets** koop.",
      usage: "Geen speciale volgorderegels; gewoon de normale zinsbouw aanhouden.",
    },
  ],
  callouts: [
    { type: "remember", label: "Onthoud 1", text: "**Geen** = ontkenning van onbepaald zelfstandig naamwoord (met *een* of zonder lidwoord)." },
    { type: "remember", label: "Onthoud 2", text: "**Niet** = ontkenning van de rest: werkwoorden, bijvoeglijke naamwoorden, bepaalde zelfstandige naamwoorden." },
    { type: "remember", label: "Onthoud 3", text: "**Geen** staat vóór het zelfstandig naamwoord (of bijvoeglijk naamwoord)." },
    { type: "remember", label: "Onthoud 4", text: "Bij het‑woorden onbepaald: bijvoeglijk naamwoord zonder -e: *geen groot huis*." },
    { type: "remember", label: "Onthoud 5", text: "Extra nadruk: *geen enkel* (het‑woord) / *geen enkele* (de‑woord)." },
  ],
  commonMistakes: [
    { incorrect: "Ik heb niet een auto.", correct: "Ik heb geen auto.", explanation: "Onbepaald zelfstandig naamwoord → *geen*." },
    { incorrect: "Ik heb geen de auto.", correct: "Ik heb de auto niet.", explanation: "Bepaald zelfstandig naamwoord → *niet*." },
    { incorrect: "Dat is geen mijn probleem.", correct: "Dat is niet mijn probleem.", explanation: "Bezittelijk voornaamwoord → *niet*." },
    { incorrect: "Hij heeft het geld geen.", correct: "Hij heeft het geld niet.", explanation: "*Geld* algemeen = *geen geld*; specifiek *het geld* = *niet*." },
    { incorrect: "We hebben geen grote huis.", correct: "We hebben geen groot huis.", explanation: "Het‑woord onbepaald → bijv. nw. zonder -e." },
  ],
  review: [
    "**Geen** ontkent een **onbepaald zelfstandig naamwoord**: enkelvoud met *een*, meervoud zonder lidwoord, stoffen zonder lidwoord.",
    "**Geen** staat **vóór** het zelfstandig naamwoord (of het bijvoeglijk naamwoord dat ervoor staat).",
    "**Niet** gebruik je bij **bepaalde** zelfstandige naamwoorden (met *de/het/dit/dat/mijn/jouw*), werkwoorden, bijvoeglijke naamwoorden en bijwoorden.",
    "De zinsdeelplaats verandert niet: *geen* maakt deel uit van het zinsdeel en volgt de normale volgorde.",
    "In de bijzin blijft het zinsdeel met *geen* op dezelfde plek, alleen de werkwoorden gaan naar het einde.",
    "Na *geen* blijft het bijvoeglijk naamwoord van een het‑woord in het enkelvoud **zonder -e** (*geen groot huis*), bij de‑woorden **met -e** (*geen mooie auto*).",
    "Extra nadruk: *geen enkel* / *geen enkele*.",
  ],
  qa: [
    {
      question: "Leg in je eigen woorden uit wanneer je 'geen' gebruikt en wanneer 'niet'. Geef bij elk een voorbeeldzin.",
      answer: "**Geen** gebruik je om een onbepaald zelfstandig naamwoord te ontkennen, dus een zelfstandig naamwoord dat normaal met *een* of zonder lidwoord staat. Voorbeeld: *Ik heb een pen.* → *Ik heb **geen pen**.* **Niet** gebruik je bij bepaalde zelfstandige naamwoorden (met *de/het/dit/dat/mijn* enz.), bij werkwoorden, bijvoeglijke naamwoorden en bijwoorden. Voorbeeld: *Ik heb de pen niet.* Of: *Hij loopt niet snel.*",
    },
    {
      question: "Waarom is “Ik heb niet een auto” in de meeste gevallen fout? Wat moet je in plaats daarvan zeggen?",
      answer: "Omdat *auto* een onbepaald zelfstandig naamwoord is (je kunt zeggen *een auto*). Voor de ontkenning van zulke onbepaalde woorden bestaat het speciale woord **geen**. Daarom is de correcte zin: **Ik heb geen auto.** De combinatie *niet een* wordt alleen gebruikt als je het getal *één* benadrukt, bijvoorbeeld: *Ik heb niet één auto, maar twee.* Dan schrijf je *niet één* met accenten.",
    },
    {
      question: "Pas de volgende zin aan zodat er een ontkenning met 'geen' ontstaat: “Hij heeft gisteren een interessant artikel gelezen.” Waar zet je 'geen' in de zin, en waarom verandert de zinsvolgorde niet?",
      answer: "**Hij heeft gisteren **geen interessant artikel** gelezen.** *Geen* komt in het lijdend voorwerp te staan, op de plaats van *een*. Het hele zinsdeel *geen interessant artikel* blijft op de normale positie van het lijdend voorwerp, vóór het voltooid deelwoord *gelezen*. De rest van de volgorde verandert niet.",
    },
    {
      question: "Maak van de hoofdzin “Wij kopen morgen verse groenten op de markt” een bijzin met ‘omdat’ en een ontkenning van ‘verse groenten’. Beschrijf wat er met het zinsdeel gebeurt.",
      answer: "**...omdat wij morgen **geen verse groenten** op de markt kopen.** Het zinsdeel *geen verse groenten* is het lijdend voorwerp en staat vóór de plaatsbepaling *op de markt* en vóór het werkwoord *kopen* dat achteraan is gezet. Het verandert niet van plaats ten opzichte van de positieve zin, behalve dat de werkwoorden naar het eind gaan.",
    },
    {
      question: "Corrigeer de fout in de volgende zin: “Dat is geen mijn probleem.”",
      answer: "**Dat is niet mijn probleem.** Voor een zelfstandig naamwoord met een bezittelijk voornaamwoord (*mijn*) gebruik je **niet**, niet *geen*. De regel is: *geen* alleen bij onbepaalde woorden, *niet* bij bepaalde en specifieke aanduidingen.",
    },
    {
      question: "Waarom is “Ik heb geen grote huis” fout, maar “Ik heb geen groot huis” correct? Leg de spellingregel van het bijvoeglijk naamwoord uit.",
      answer: "*Huis* is een **het**-woord. Bij een onbepaald het-woord in het enkelvoud (hier na *geen*) krijgt het bijvoeglijk naamwoord **geen -e**. Dus het is *geen groot huis*. Bij de-woorden, zoals *auto*, blijft de -e wel: *geen grote auto*. De regel is dezelfde als na *een*: *een groot huis*.",
    },
    {
      question: "In de zin “Er is geen melk meer” wordt ‘geen’ gebruikt. Waarom hier niet ‘niet’? Geef ook een voorbeeld waarin je ‘niet’ met ‘melk’ gebruikt.",
      answer: "Omdat *melk* een niet-telbare stof is die zonder lidwoord gebruikt wordt (je zegt *er is melk*). Voor de ontkenning van zulke onbepaalde zelfstandige naamwoorden gebruik je **geen**. Wil je *niet* met *melk* gebruiken, dan moet de melk bepaald zijn: *De melk is zuur. Ik drink hem niet.* Of specifiek: *Ik drink de melk niet die al twee dagen open is.* Dus bij onbepaald: *geen melk*; bij bepaald: *de melk niet*.",
    },
  ],
};