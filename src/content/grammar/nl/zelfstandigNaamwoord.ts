import type { GrammarLesson } from "../../types";

export const zelfstandigNaamwoord: GrammarLesson = {
  id: "nl-zelfstandignaamwoord-1",
  title: "Het Zelfstandig Naamwoord: Soorten en Geslacht",
  level: 1,
  topic: "Gramamatica",
  body: "Leer alles over zelfstandige naamwoorden: concreet of abstract, mannelijk, vrouwelijk of onzijdig. Met alle regels, ezelsbruggetjes en voorbeelden.",
  overview:
    "Zelfstandige naamwoorden zijn de belangrijkste woorden in een taal. In deze **absolute masterclass** leer je het verschil tussen **concreet en abstract**, hoe je het **grammaticaal geslacht** (mannelijk, vrouwelijk, onzijdig) herkent, en welke gevolgen dat heeft voor lidwoorden, verwijswoorden en bijvoeglijke naamwoorden. Alles met pro regels, ezelsbruggetjes en waarschuwingen voor alle valkuilen. Na deze les ben je een pro!",
  anchorSectionId: "basis",
  exercises: [],
  timeExpressionsLabel: "Basisoverzicht geslacht ⚧️",
  timeExpressions: {
    header: "Geslacht | Lidwoord | Verwijswoord | Bezittelijk vnw",
    rows: [
      ["**Mannelijk (m)**", "de", "hij", "zijn"],
      ["**Vrouwelijk (v)**", "de", "zij", "haar"],
      ["**Onzijdig (o)**", "het", "het", "zijn"],
    ],
  },
  details: [
    {
      title: "Wat is een zelfstandig naamwoord? 🏷️",
      body: `
        <p class="mb-3">Een zelfstandig naamwoord (znw) noemt een zelfstandigheid. Dat kan van alles zijn:</p>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">👤 Personen: de moeder, de bakker, Anne</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">🐶 Dieren: de hond, het paard, de mus</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">🌳 Planten en voorwerpen: de boom, de tafel, het scherm</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">🏙️ Plaatsen: de stad, het ziekenhuis, Frankrijk</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">💭 Gevoelens en ideeën: de liefde, het verdriet, de hoop</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">🧪 Stoffen en materialen: het water, het ijzer, de melk</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">⚙️ Handelingen en processen: de val, het eten, de groei</li>
        </ul>
        <p class="mt-3">Je vindt een znw vaak door te vragen: <strong>Wie of wat + werkwoord?</strong> Voorbeeld: *Het kleine meisje lacht.* → Wie lacht? Het kleine meisje. ‘Meisje’ is het znw.</p>
      `,
    },
    {
      title: "Concreet of abstract? 🔍",
      body: `
        <h3 class="text-lg font-bold mt-4 mb-2">Concrete zelfstandige naamwoorden 🖐️</h3>
        <p>Tastbaar – je kunt ze waarnemen met je zintuigen: zien, horen, ruiken, proeven, voelen.</p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Subcategorie</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Voorbeelden</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">🧑 Personen</td><td class="px-3 py-2 text-sm">de man, de vrouw, het kind, de arts</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">🐕 Dieren</td><td class="px-3 py-2 text-sm">de hond, de poes, het paard</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">🌿 Planten en bomen</td><td class="px-3 py-2 text-sm">de roos, de tulp, het gras</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">🪑 Voorwerpen</td><td class="px-3 py-2 text-sm">de stoel, de lamp, het boek</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">🧀 Stoffen en materialen</td><td class="px-3 py-2 text-sm">het water, de melk, het goud</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">🏠 Plaatsen en gebouwen</td><td class="px-3 py-2 text-sm">de stad, het dorp, de kerk</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">👥 Verzamelingen (concreet)</td><td class="px-3 py-2 text-sm">het bos, het leger, de kudde</td></tr>
            </tbody>
          </table>
        </div>
        <h3 class="text-lg font-bold mt-6 mb-2">Abstracte zelfstandige naamwoorden 🧠</h3>
        <p>Niet tastbaar – gevoelens, begrippen, ideeën, eigenschappen of processen.</p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Subcategorie</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Voorbeelden</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">❤️ Gevoelens en emoties</td><td class="px-3 py-2 text-sm">de liefde, de haat, het verdriet</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">💡 Begrippen en ideeën</td><td class="px-3 py-2 text-sm">de vrijheid, de waarheid, de tijd</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">🧪 Wetenschappen en vakgebieden</td><td class="px-3 py-2 text-sm">de wiskunde, de filosofie, het recht</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">⚙️ Eigenschappen en toestanden</td><td class="px-3 py-2 text-sm">de grootte, de snelheid, de rust</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">🗣️ Handelingen (als concept)</td><td class="px-3 py-2 text-sm">de groei, de val, het zwemmen</td></tr>
            </tbody>
          </table>
        </div>
        <p class="mt-3"><strong>💡 Test:</strong> Kun je het aanraken? Ja → concreet. Nee, maar je kunt het wel uitleggen of voelen → vaak abstract.</p>
        <p class="mt-2"><span class="pas-op-highlight">⚠️ PAS OP</span> Sommige woorden kunnen beide zijn, afhankelijk van de context. Bijv. <strong>het hoofd</strong> van de school (leider, abstract) vs. <strong>het hoofd</strong> op je romp (concreet).</p>
      `,
    },
    {
      title: "Uitgangen die abstracte woorden verraden 📝",
      body: `
        <p>Abstracte zelfstandige naamwoorden hebben vaak vaste achtervoegsels. Die vertellen je meteen of het een de- of het-woord is.</p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Uitgang</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Abstract voorbeeld</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Lidwoord</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">-heid</td><td class="px-3 py-2 text-sm">waarheid, vrijheid, gezondheid</td><td class="px-3 py-2 text-sm">de</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">-nis</td><td class="px-3 py-2 text-sm">kennis, geschiedenis, ergernis</td><td class="px-3 py-2 text-sm">de</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">-ing</td><td class="px-3 py-2 text-sm">regering, vereniging, aarzeling</td><td class="px-3 py-2 text-sm">de</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">-tie / -thie</td><td class="px-3 py-2 text-sm">politie, informatie, sympathie</td><td class="px-3 py-2 text-sm">de</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">-teit</td><td class="px-3 py-2 text-sm">kwaliteit, universiteit, stommiteit</td><td class="px-3 py-2 text-sm">de</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">-schap</td><td class="px-3 py-2 text-sm">vriendschap, wetenschap, blijdschap</td><td class="px-3 py-2 text-sm">de (soms het)</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">-dom</td><td class="px-3 py-2 text-sm">rijkdom, eigendom, christendom</td><td class="px-3 py-2 text-sm">de / het (let op!)</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">-sel</td><td class="px-3 py-2 text-sm">verschijnsel, beginsel, voedsel</td><td class="px-3 py-2 text-sm">het</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">-um</td><td class="px-3 py-2 text-sm">museum, evenwicht, podium</td><td class="px-3 py-2 text-sm">het</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">-isme</td><td class="px-3 py-2 text-sm">socialisme, idealisme, toerisme</td><td class="px-3 py-2 text-sm">het</td></tr>
            </tbody>
          </table>
        </div>
      `,
    },
    {
      title: "Onzijdige woorden (het-woorden) 🧊",
      body: `
        <p>Onzijdige woorden zijn het makkelijkst te herkennen. Je krijgt <strong>het</strong>, verwijswoord <strong>het</strong>, bezittelijk <strong>zijn</strong>.</p>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">🔹 <strong>Verkleinwoorden:</strong> alle woorden op -je, -tje, -pje, -kje, -etje → het meisje, het boompje, het kindje.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">🔹 <strong>Stofnamen en materialen:</strong> het water, het goud, het zand, het papier, het hout.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">🔹 <strong>Infinitieven als znw:</strong> het eten, het slapen, het zwemmen, het leven.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">🔹 <strong>Uitgangen:</strong> -um (museum), -isme (socialisme), -ment (moment), -aat (resultaat), -sel (verschijnsel).</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">🔹 <strong>Aardrijkskundige namen en talen als concept:</strong> het Nederland van vroeger, het Frans van Molière.</li>
        </ul>
      `,
    },
    {
      title: "Mannelijke en vrouwelijke de-woorden 🔎",
      body: `
        <h3 class="text-lg font-bold mt-4 mb-2">Natuurlijk geslacht – personen en dieren</h3>
        <p>Het biologische geslacht bepaalt meestal het grammaticaal geslacht. Mannelijke wezens → hij/zijn, vrouwelijke → zij/haar.</p>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">de vader (m) – hij – zijn auto</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">de moeder (v) – zij – haar tas</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">de stier (m) – hij / de koe (v) – zij</li>
        </ul>
        <p class="mt-3">Bij twijfel over dieren (bv. de hond, de kat) is de standaard mannelijk.</p>
        <h3 class="text-lg font-bold mt-6 mb-2">Uitgangen die vrouwelijk aangeven</h3>
        <p>Veel niet-levende de-woorden zijn vrouwelijk door hun achtervoegsel.</p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Uitgang</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Voorbeelden</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Geslacht</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">-heid</td><td class="px-3 py-2 text-sm">de waarheid, de vrijheid</td><td class="px-3 py-2 text-sm">vrouwelijk</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">-nis</td><td class="px-3 py-2 text-sm">de kennis, de geschiedenis</td><td class="px-3 py-2 text-sm">vrouwelijk</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">-ing</td><td class="px-3 py-2 text-sm">de regering, de vereniging</td><td class="px-3 py-2 text-sm">vrouwelijk</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">-tie, -thie</td><td class="px-3 py-2 text-sm">de politie, de sympathie</td><td class="px-3 py-2 text-sm">vrouwelijk</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">-teit</td><td class="px-3 py-2 text-sm">de kwaliteit, de universiteit</td><td class="px-3 py-2 text-sm">vrouwelijk</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">-schap (meestal)</td><td class="px-3 py-2 text-sm">de vriendschap, de wetenschap</td><td class="px-3 py-2 text-sm">vrouwelijk</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">-ij</td><td class="px-3 py-2 text-sm">de bakkerij, de partij</td><td class="px-3 py-2 text-sm">vrouwelijk</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">-de, -te</td><td class="px-3 py-2 text-sm">de liefde, de hoogte, de stilte</td><td class="px-3 py-2 text-sm">vrouwelijk</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">-uur / -suur (vaak)</td><td class="px-3 py-2 text-sm">de cultuur, de natuur, de censuur</td><td class="px-3 py-2 text-sm">vrouwelijk</td></tr>
            </tbody>
          </table>
        </div>
        <p><span class="pas-op-highlight">⚠️ PAS OP</span> Uitzonderingen: <strong>het avontuur, het bestuur, het postuur</strong> (onzijdig ondanks -uur). <strong>Het moederschap, het ouderschap</strong> (onzijdig ondanks -schap).</p>
        <h3 class="text-lg font-bold mt-6 mb-2">Traditioneel vrouwelijke woorden</h3>
        <p>Sommige woorden zijn van oudsher vrouwelijk. In verzorgd Nederlands gebruik je <strong>zij/haar</strong>.</p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Woord</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Voorbeeldzin</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">de aarde</td><td class="px-3 py-2 text-sm">De aarde draait om haar as.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">de zon</td><td class="px-3 py-2 text-sm">De zon komt op. Zij schijnt fel.</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">de kerk</td><td class="px-3 py-2 text-sm">De kerk opent haar deuren.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">de regering</td><td class="px-3 py-2 text-sm">De regering heeft haar plannen gepresenteerd.</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">de gemeente</td><td class="px-3 py-2 text-sm">De gemeente en haar inwoners.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">de natuur</td><td class="px-3 py-2 text-sm">De natuur is mooi. We moeten haar beschermen.</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">de zee</td><td class="px-3 py-2 text-sm">De zee is wild. Haar golven zijn hoog.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">de stad</td><td class="px-3 py-2 text-sm">Amsterdam staat bekend om haar grachten.</td></tr>
            </tbody>
          </table>
        </div>
        <p class="mt-3">De rest van de de-woorden is meestal <strong>mannelijk</strong>. Je kunt ze veilig met <strong>hij/zijn</strong> verwijzen: de stoel, de tafel, de auto.</p>
      `,
    },
    {
      title: "Gevolgen voor andere woorden 🧩",
      body: `
        <p>Het geslacht werkt door in de hele zin. Hier het volledige overzicht:</p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Categorie</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Regel</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Mannelijk</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Vrouwelijk</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Onzijdig</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Lidwoord</td><td class="px-3 py-2 text-sm">de / het</td><td class="px-3 py-2 text-sm">de stoel</td><td class="px-3 py-2 text-sm">de tafel</td><td class="px-3 py-2 text-sm">het boek</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Pers. vnw</td><td class="px-3 py-2 text-sm">hij / zij / het</td><td class="px-3 py-2 text-sm">hij</td><td class="px-3 py-2 text-sm">zij</td><td class="px-3 py-2 text-sm">het</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Bezit. vnw</td><td class="px-3 py-2 text-sm">zijn (m,o) / haar (v)</td><td class="px-3 py-2 text-sm">zijn</td><td class="px-3 py-2 text-sm">haar</td><td class="px-3 py-2 text-sm">zijn</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Aanw. vnw</td><td class="px-3 py-2 text-sm">deze/die (de) // dit/dat (het)</td><td class="px-3 py-2 text-sm">deze/die stoel</td><td class="px-3 py-2 text-sm">deze/die tafel</td><td class="px-3 py-2 text-sm">dit/dat boek</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Bijv. nw (bepaald)</td><td class="px-3 py-2 text-sm">altijd +e</td><td class="px-3 py-2 text-sm">de grote stoel</td><td class="px-3 py-2 text-sm">de grote tafel</td><td class="px-3 py-2 text-sm">het grote boek</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Bijv. nw (onbepaald)</td><td class="px-3 py-2 text-sm">+e voor de, géén +e voor het</td><td class="px-3 py-2 text-sm">een grote stoel</td><td class="px-3 py-2 text-sm">een grote tafel</td><td class="px-3 py-2 text-sm">een groot boek</td></tr>
            </tbody>
          </table>
        </div>
        <p><span class="pas-op-highlight">⚠️ PAS OP</span> <strong>Een groot boek</strong> (zonder e) versus <strong>een grote stoel</strong> (met e). Dit is een klassieke valkuil!</p>
      `,
    },
  ],
  rulesTable: [
    {
      rule: "Concreet vs. abstract",
      structure: "Concreet = tastbaar, abstract = niet tastbaar.",
      example: "**de tafel** (concreet), **de liefde** (abstract).",
      usage: "Gebruik de test: kun je het aanraken?",
    },
    {
      rule: "Onzijdig: verkleinwoorden, stoffen, infinitieven",
      structure: "Alle verkleinwoorden, stofnamen en infinitieven als znw zijn **het**.",
      example: "**het meisje**, **het water**, **het eten**.",
      usage: "Dit zijn ijzeren regels, geen uitzonderingen.",
    },
    {
      rule: "Vrouwelijk: uitgangen -heid, -nis, -ing, -tie, -teit, -schap, -ij, -de/-te",
      structure: "Deze uitgangen geven bijna altijd vrouwelijk aan.",
      example: "**de waarheid** (zij/haar), **de regering** (zij/haar).",
      usage: "Let op uitzonderingen zoals het avontuur, het moederschap.",
    },
    {
      rule: "Mannelijk: de rest van de de-woorden",
      structure: "De-woorden zonder vrouwelijke uitgang zijn meestal mannelijk.",
      example: "**de stoel** (hij/zijn), **de auto** (hij/zijn).",
      usage: "In de spreektaal is 'hij' voor deze woorden veilig.",
    },
    {
      rule: "Gevolgen voor bijvoeglijk naamwoord",
      structure: "De-woord: altijd +e. Het-woord: +e na bepaald lidwoord, géén +e na 'een'.",
      example: "**de grote hond**, **een grote hond**, **het grote paard**, **een groot paard**.",
      usage: "Dit is een van de lastigste regels, stamp de voorbeelden.",
    },
    {
      rule: "Telbaarheid en lidwoord",
      structure: "Niet-telbare woorden hebben geen meervoud en geen 'een'.",
      example: "❌ Ik heb een geduld. ✅ Ik heb geduld.",
      usage: "Abstracte stofnamen en eigenschappen zijn vaak niet-telbaar.",
    },
  ],
  callouts: [
    { type: "remember", label: "Onthoud 1", text: "Concreet = tastbaar (tafel, hond). Abstract = niet tastbaar (liefde, tijd)." },
    { type: "remember", label: "Onthoud 2", text: "Verkleinwoorden, stoffen en infinitieven zijn **het** (onzijdig)." },
    { type: "remember", label: "Onthoud 3", text: "Uitgangen -heid, -nis, -ing, -tie, -teit, -schap, -ij → vrouwelijk → **zij/haar**." },
    { type: "remember", label: "Onthoud 4", text: "De meeste overige de-woorden zijn mannelijk → **hij/zijn**." },
    { type: "remember", label: "Onthoud 5", text: "Aanwijzend: **deze/die** voor de-woorden, **dit/dat** voor het-woorden." },
    { type: "remember", label: "Onthoud 6", text: "Bijvoeglijk naamwoord: de-woord altijd +e; het-woord geen +e na 'een' (een groot boek)." },
    { type: "remember", label: "Onthoud 7", text: "Niet-telbare woorden (geduld, water) → geen 'een', geen meervoud." },
  ],
  commonMistakes: [
    { incorrect: "De meisje", correct: "Het meisje", explanation: "Verkleinwoorden zijn onzijdig → het." },
    { incorrect: "Dit huis, deze raam", correct: "Dit raam", explanation: "Raam is het-woord → dit/dat, niet deze/die." },
    { incorrect: "De regering en zijn beleid", correct: "haar beleid", explanation: "Regering op -ing is vrouwelijk → haar." },
    { incorrect: "Ik heb een water", correct: "Ik heb water", explanation: "Water is niet-telbaar, dus geen 'een'." },
    { incorrect: "Het zon schijnt", correct: "De zon schijnt", explanation: "Zon is de-woord (vrouwelijk)." },
    { incorrect: "De stoel, zij staat daar", correct: "hij staat daar", explanation: "Stoel is mannelijk, tenzij expliciet vrouwelijk." },
    { incorrect: "Een grote paard", correct: "Een groot paard", explanation: "Paard is het-woord → geen -e na 'een'." },
    { incorrect: "Het avontuur en haar gevaren", correct: "zijn gevaren", explanation: "Avontuur is onzijdig (het) → zijn." },
    { incorrect: "De waarheid, hij komt uit", correct: "zij komt uit", explanation: "Waarheid op -heid is vrouwelijk → zij." },
  ],
  review: [
    "**Concreet** = tastbaar (tafel, water, hond). **Abstract** = niet tastbaar (liefde, tijd, hoop).",
    "**Onzijdig (o)** = verkleinwoorden, stoffen, infinitieven, en woorden op -um, -isme, -ment, -aat, -sel.",
    "**Mannelijk (m)** = de-woorden: mannelijke personen/dieren, de meeste overige concrete de-woorden.",
    "**Vrouwelijk (v)** = vrouwelijke personen/dieren, woorden op -heid, -nis, -ing, -tie, -teit, -schap (vaak), -ij, -de/-te, en traditioneel vrouwelijke woorden.",
    "Verwijswoorden: **hij (m), zij (v), het (o)**. Bezittelijk: **zijn (m/o)** en **haar (v)**.",
    "Aanwijzend: **deze/die** bij de, **dit/dat** bij het.",
    "Bijvoeglijk naamwoord: de-woord → altijd -e; het-woord → -e na bepaald lidwoord, géén -e na 'een'.",
    "Niet-telbare woorden hebben geen meervoud en geen 'een'.",
  ],
  qa: [
    {
      question: "Leg het verschil uit tussen een concreet en een abstract zelfstandig naamwoord. Geef twee voorbeelden van elk en leg uit waarom ze concreet of abstract zijn.",
      answer: "Concreet = tastbaar, waarneembaar met zintuigen. Abstract = niet tastbaar, een gevoel, idee of eigenschap. Voorbeelden concreet: **de stoel** (je kunt hem zien en aanraken), **het water** (je kunt het voelen, drinken). Voorbeelden abstract: **de liefde** (je kunt het voelen, maar niet aanraken), **de snelheid** (je kunt het meten, maar niet zien of vastpakken).",
    },
    {
      question: "Het woord 'regering' is een de-woord. Leg uit of het mannelijk of vrouwelijk is, en hoe je dat kunt weten. Geef de juiste verwijswoorden en bezittelijke voornaamwoorden.",
      answer: "'Regering' eindigt op -ing. De uitgang -ing is een indicator voor vrouwelijk geslacht. Het verwijswoord is **zij** en het bezittelijk voornaamwoord is **haar**. Voorbeeldzin: *De regering heeft haar plannen bekendgemaakt. Zij wil de economie stimuleren.*",
    },
    {
      question: "Waarom zeggen we 'het meisje' en niet 'de meisje', terwijl een meisje een vrouwelijk persoon is? En waarom verwijzen we in de praktijk vaak met 'zij' naar 'het meisje'?",
      answer: "'Meisje' is een verkleinwoord (van 'meid' + -je). Alle verkleinwoorden zijn onzijdig, dus het lidwoord is **het**. Grammaticaal correct is 'het meisje' en 'het speelt'. In de praktijk gebruiken veel mensen 'zij' omdat het natuurlijke geslacht vrouwelijk is. In formele taal is 'het' de regel, maar 'haar' is ook toegestaan vanwege de natuurlijke sekse.",
    },
    {
      question: "Geef van elk geslacht (mannelijk, vrouwelijk, onzijdig) een voorbeeld van een concreet én een abstract zelfstandig naamwoord. Schrijf bij elk voorbeeld een korte correcte zin met het juiste verwijswoord.",
      answer: "Mannelijk concreet: **de auto** – De auto start niet. **Hij** is kapot. Mannelijk abstract: **de tijd** – De tijd vliegt. **Hij** wacht op niemand. Vrouwelijk concreet: **de tafel** – De tafel wiebelt. **Zij** is oud. Vrouwelijk abstract: **de waarheid** – De waarheid is hard. **Zij** komt altijd uit. Onzijdig concreet: **het boek** – Het boek is spannend. **Het** ligt op tafel. Onzijdig abstract: **het geluk** – Het geluk is kwetsbaar. **Het** duurt maar even.",
    },
    {
      question: "Leg uit waarom we in de zin 'De regering en haar taken' het bezittelijk voornaamwoord 'haar' gebruiken, en niet 'zijn'.",
      answer: "Omdat 'regering' een de-woord op -ing is, en woorden op -ing zijn vrouwelijk. Het bezittelijk voornaamwoord voor vrouwelijk enkelvoud is **haar**, niet **zijn** (dat voor mannelijk en onzijdig is). Dus: *De regering en haar taken.*",
    },
    {
      question: "Wat is het geslacht van 'het avontuur', en waarom wijkt dat af van de verwachting door de uitgang -uur? Noem nog twee andere woorden op -uur die onzijdig zijn.",
      answer: "'Het avontuur' is onzijdig. Veel woorden op -uur zijn vrouwelijk (de cultuur, de natuur), maar er is een groep onzijdige uitzonderingen: **het avontuur, het bestuur, het vuur, het postuur, het zuur**. Je herkent het aan het lidwoord **het**.",
    },
    {
      question: "Waarom is 'een groot paard' correct, maar 'een grote hond' ook? Leg uit hoe het geslacht de buigings-e beïnvloedt.",
      answer: "'Paard' is een het-woord (onzijdig). Bij het-woorden krijgt het bijvoeglijk naamwoord **geen -e** na een onbepaald lidwoord ('een'): *een groot paard*. 'Hond' is een de-woord (mannelijk). Bij de-woorden krijgt het bijvoeglijk naamwoord **altijd -e**, ook na 'een': *een grote hond*. Regel: de-woord → altijd -e; het-woord → -e na bepaald lidwoord, géén -e na 'een'.",
    },
  ],
};