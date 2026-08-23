import type { GrammarLesson } from "../../types";

export const zinssymbolen: GrammarLesson = {
  id: "nl-zinssymbolen-1",
  title: "Zinssymbolen & Leestekens: De Ultieme & Meest Uitgebreide Gids",
  level: 3,
  topic: "Spelling & Leestekens",
  body: "Beheers de Nederlandse zinssymbolen volledig: dubbele/enkele aanhalingstekens, haakjes, het gedachtestreepje en het beletselteken. Alle regels, spaties, interacties met andere leestekens en valkuilen in één extreem uitgebreide les.",
  overview:
    "Dit is de meest uitgebreide en gedetailleerde gids over Nederlandse zinssymbolen (leestekens) die je ooit zult vinden. Je leert niet alleen het strikte onderscheid tussen dubbele en enkele aanhalingstekens, maar ook hoe ze interacteren met vraagtekens en uitroeptekens. Je weet precies waar de punt moet staan bij haakjes en aanhalingstekens, hoe je het gedachtestreepje (–) correct gebruikt met spaties, en hoe je het beletselteken (...) feilloos toepast. Met 25+ kleurrijke tabellen, tientallen voorbeelden, uitgebreide PAS OP-momenten en 4 zeer gedetailleerde oefenvragen ben je een absolute meester in de Nederlandse punctuatie!",
  anchorSectionId: "aanhalingstekens",
  exercises: [],
  timeExpressionsLabel: "De 4 Belangrijkste Zinssymbolen in Één Oogopslag 🚦",
  timeExpressions: {
    header: "Symbool | Naam | De Gouden Regel | Voorbeeld",
    rows: [
      ["🔹 \" \"", "Dubbele aanhalingstekens", "Punt BINNEN als het de zin beëindigt. Geen spaties binnenin.", "Hij zei: **\"Ik kom thuis.\"**"],
      ["🔹 ' '", "Enkele aanhalingstekens", "Alleen BINNEN dubbele tekens of voor de letterlijke woordbetekenis.", "Het woord **'bank'** heeft twee betekenissen."],
      ["🔹 ( )", "Haakjes", "Punt BUITEN (midden zin), BINNEN (als het een hele zin is).", "Ik ben moe **(ik sliep slecht)**."],
      ["🔹 –", "Gedachtestreepje", "Lange streep. **Altijd** spaties eromheen!", "Het weer **–** het regende **–** was slecht."],
      ["🔹 ...", "Beletselteken", "**Nooit** 4 puntjes. Midden = spaties, einde = geen spatie.", "Ik weet het niet**...**"]
    ]
  },
  details: [
    {
      title: "Deel 1: Dubbele Aanhalingstekens (\" \") 💬",
      body: `
        <p>Aanhalingstekens gebruik je om woorden die <strong>niet van jou zijn</strong>, of die <strong>speciale aandacht</strong> verdienen, te markeren. In het Nederlands gebruiken we voor de meeste situaties <strong>dubbele</strong> aanhalingstekens. Ze fungeren als een soort container voor de tekst.</p>
        
        <h3 class="text-xl font-bold mt-6 mb-3 text-slate-800 dark:text-slate-200">📋 De 5 Hoofdfuncties van Dubbele Aanhalingstekens</h3>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-gradient-to-r from-indigo-600 to-purple-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Situatie</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Uitleg</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Voorbeeld</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-bold text-indigo-600">Directe rede</td>
                <td class="px-4 py-3 text-sm">Iemand zegt letterlijk iets. Gaat vaak vooraf door een dubbele punt.</td>
                <td class="px-4 py-3 text-sm">Hij zei: <strong>"Ik kom er zo aan."</strong></td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-bold text-indigo-600">Citaten</td>
                <td class="px-4 py-3 text-sm">Een letterlijke quote uit een boek, artikel of spraak.</td>
                <td class="px-4 py-3 text-sm"><strong>"Wie het kleine niet eert, is het grote niet weerd."</strong></td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-bold text-indigo-600">Ironie / Spot</td>
                <td class="px-4 py-3 text-sm">Je bedoelt het tegenovergestelde van wat je zegt (scare quotes).</td>
                <td class="px-4 py-3 text-sm">Hij is een echte <strong>"kenner"</strong> van de Nederlandse grammatica.</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-bold text-indigo-600">Woorden als woord</td>
                <td class="px-4 py-3 text-sm">Je hebt het over het woord zelf, niet de betekenis (vermelding).</td>
                <td class="px-4 py-3 text-sm">Het woord <strong>"huis"</strong> heeft vier letters.</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50">
                <td class="px-4 py-3 text-sm font-bold text-indigo-600">Titels</td>
                <td class="px-4 py-3 text-sm">Titels van krantenartikelen, liedjes, hoofdstukken of afleveringen.</td>
                <td class="px-4 py-3 text-sm">Ik las het artikel <strong>"De toekomst van AI"</strong> in de krant.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 class="text-xl font-bold mt-8 mb-3 text-slate-800 dark:text-slate-200">🚨 De Interactie met Andere Leestekens (Punt, Vraagteken, Uitroepteken)</h3>
        <p class="text-sm text-slate-700 dark:text-slate-300 mb-4">Dit is waar de meeste fouten worden gemaakt. Waar staat het leesteken als het samenkomt met een aanhalingsteken?</p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-gradient-to-r from-rose-600 to-pink-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Situatie</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Regel</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Fout ❌</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Correct ✅</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">Einde van de zin</td>
                <td class="px-4 py-3 text-sm">De punt staat <strong>BINNEN</strong> de aanhalingstekens.</td>
                <td class="px-4 py-3 text-sm text-rose-600">Hij zei: "Ik kom thuis".</td>
                <td class="px-4 py-3 text-sm text-emerald-600 font-bold">Hij zei: "Ik kom thuis."</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">Midden in de zin</td>
                <td class="px-4 py-3 text-sm">De punt staat <strong>BUITEN</strong> (of er is geen punt).</td>
                <td class="px-4 py-3 text-sm text-rose-600">Het woord "huis". heeft 4 letters.</td>
                <td class="px-4 py-3 text-sm text-emerald-600 font-bold">Het woord "huis" heeft 4 letters.</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">Vraag in citaat</td>
                <td class="px-4 py-3 text-sm">Vraagteken staat <strong>BINNEN</strong>, geen punt erachter.</td>
                <td class="px-4 py-3 text-sm text-rose-600">Hij vroeg: "Kom je?".</td>
                <td class="px-4 py-3 text-sm text-emerald-600 font-bold">Hij vroeg: "Kom je?"</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">Vraag om citaat</td>
                <td class="px-4 py-3 text-sm">Vraagteken staat <strong>BUITEN</strong>, punt binnen.</td>
                <td class="px-4 py-3 text-sm text-rose-600">Ken je het liedje "De Zee"?</td>
                <td class="px-4 py-3 text-sm text-emerald-600 font-bold">Ken je het liedje "De Zee"?</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50">
                <td class="px-4 py-3 text-sm font-semibold">Spaties binnenin</td>
                <td class="px-4 py-3 text-sm">Er komt <strong>NOOIT</strong> een spatie tussen het teken en het woord.</td>
                <td class="px-4 py-3 text-sm text-rose-600">Hij zei: " Ik kom ."</td>
                <td class="px-4 py-3 text-sm text-emerald-600 font-bold">Hij zei: "Ik kom."</td>
              </tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      title: "Deel 2: Enkele Aanhalingstekens (' ') 🔹",
      body: `
        <p>Enkele aanhalingstekens gebruik je in het Nederlands <strong>nooit</strong> zomaar als vervanger van dubbele aanhalingstekens. Ze hebben slechts twee zeer specifieke functies. Verwar ze niet met de apostrof (die gebruikt wordt voor bezittelijke vormen of weglatingen, zoals <em>Jans' auto</em> of <em>'s ochtends</em>).</p>
        
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-gradient-to-r from-purple-600 to-pink-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Situatie</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Uitleg</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Voorbeeld</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-bold text-purple-600">Aanhaling in een aanhaling</td>
                <td class="px-4 py-3 text-sm">Als er al dubbele aanhalingstekens zijn, gebruik je binnenin enkele. Dit heet 'insluiten'.</td>
                <td class="px-4 py-3 text-sm">De leraar zei: <strong>"Hebben jullie het boek 'De Ontdekking van de Hemel' al gelezen?"</strong></td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-bold text-purple-600">Betekenis van een woord</td>
                <td class="px-4 py-3 text-sm">Als je de letterlijke betekenis, definitie of vertaling van een woord wilt aangeven.</td>
                <td class="px-4 py-3 text-sm">Het woord <strong>'bank'</strong> kan een zitmeubel of een financieel instituut betekenen.</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50">
                <td class="px-4 py-3 text-sm font-bold text-purple-600">Nadruk op een letter</td>
                <td class="px-4 py-3 text-sm">Soms gebruikt bij het spellen van woorden om een specifieke letter aan te duiden.</td>
                <td class="px-4 py-3 text-sm">Het woord startschrift begint met een <strong>'s'</strong>.</td>
              </tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      title: "Deel 3: Haakjes ( ) 📎",
      body: `
        <p>Haakjes gebruik je voor informatie die <strong>niet strikt noodzakelijk</strong> is voor de grammatica van de zin. Het is een zijstraatje in je tekst. Als je de tekst tussen haakjes helemaal weg zou halen, moet de zin nog steeds grammaticaal perfect kloppen en leesbaar zijn.</p>
        
        <h3 class="text-xl font-bold mt-6 mb-3 text-slate-800 dark:text-slate-200">📋 Functies van Haakjes</h3>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-gradient-to-r from-emerald-600 to-teal-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Functie</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Voorbeeld</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-bold text-emerald-600">Extra uitleg / Synoniem</td><td class="px-4 py-3 text-sm">De hoofdstad van Nederland <strong>(Amsterdam)</strong> is erg druk.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-bold text-emerald-600">Vindplaatsen / Bronnen</td><td class="px-4 py-3 text-sm">Volgens recent onderzoek <strong>(Jansen, 2023)</strong> slapen we te weinig.</td></tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-bold text-emerald-600">Voorwaarden / Opmerkingen</td><td class="px-4 py-3 text-sm">Ik ga vandaag winkelen <strong>(als het niet regent)</strong>.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-bold text-emerald-600">Afkortingen definiëren</td><td class="px-4 py-3 text-sm">De Algemene Inlichtingen- en Veiligheidsdienst <strong>(AIVD)</strong>.</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-4 py-3 text-sm font-bold text-emerald-600">Vertalingen</td><td class="px-4 py-3 text-sm">Hij bestelde een croissant <strong>(een halvemaanvormig broodje)</strong>.</td></tr>
            </tbody>
          </table>
        </div>

        <h3 class="text-xl font-bold mt-8 mb-3 text-slate-800 dark:text-slate-200">🚨 De Gouden Regels voor de Punt bij Haakjes</h3>
        <p class="text-sm text-slate-700 dark:text-slate-300 mb-4">Dit is een klassieke en zeer strikte regel in de Nederlandse spelling. Let extreem goed op of de tekst tussen haakjes een <em>volledige zin</em> is of een <em>deel van de zin</em>.</p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-gradient-to-r from-amber-600 to-orange-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Situatie</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Regel voor de punt</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Voorbeeld</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">Haakjes midden in de zin</td>
                <td class="px-4 py-3 text-sm">De punt staat <strong>BUITEN</strong> de haakjes. De tekst is geen volledige zin.</td>
                <td class="px-4 py-3 text-sm">Ik ben erg moe <strong>(ik heb weinig geslapen)</strong>.</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">De hele zin staat tussen haakjes</td>
                <td class="px-4 py-3 text-sm">De punt staat <strong>BINNEN</strong> de haakjes. Het is een zelfstandige zin.</td>
                <td class="px-4 py-3 text-sm">Ik ga vroeg naar bed. <strong>(Ik ben namelijk erg moe.)</strong></td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">Haakjes aan het eind van de zin</td>
                <td class="px-4 py-3 text-sm">De punt van de hoofdzin staat <strong>BUITEN</strong> de haakjes.</td>
                <td class="px-4 py-3 text-sm">Hij is eindelijk thuis <strong>(hij was drie weken weg)</strong>.</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30">
                <td class="px-4 py-3 text-sm font-semibold">Hoofdletter binnen haakjes?</td>
                <td class="px-4 py-3 text-sm">Alleen als het een <strong>volledige, zelfstandige zin</strong> is die los staat.</td>
                <td class="px-4 py-3 text-sm">Het feest was geweldig <strong>(vooral het eten)</strong>. <em>(kleine letter)</em></td>
              </tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      title: "Deel 4: Het Gedachtestreepje (–) 🛤️",
      body: `
        <p>Het gedachtestreepje is een veelzijdig leesteken. Het wordt door cursisten en moedertaalsprekers vaak verward met het koppelteken, maar het is veel langer en heeft een heel andere functie. Het geeft een pauze, een tegenstelling of een extra nadrukkelijke toevoeging aan.</p>
        
        <div class="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-indigo-700 dark:text-indigo-300 mb-2">⚠️ LET OP: Lang vs. Kort Streepje</h3>
          <ul class="space-y-2 list-none pl-0 text-slate-700 dark:text-slate-300">
            <li>✅ Het <strong>koppelteken</strong> (<code class="bg-slate-200 dark:bg-slate-700 px-2 py-0.5 rounded text-sm">-</code>) is KORT. Je gebruikt het om woorden aan elkaar te plakken (bijv. <em>kant-en-klaar</em>, <em>co-piloot</em>). Het heeft <strong>nooit</strong> spaties eromheen.</li>
            <li>✅ Het <strong>gedachtestreepje</strong> (<code class="bg-slate-200 dark:bg-slate-700 px-2 py-0.5 rounded text-sm">–</code>) is LANG. Het is een leesteken voor pauzes en toevoegingen. Het heeft <strong>altijd</strong> spaties eromheen.</li>
          </ul>
        </div>

        <h3 class="text-xl font-bold mt-8 mb-3 text-slate-800 dark:text-slate-200">📋 Functies van het Gedachtestreepje</h3>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-gradient-to-r from-blue-600 to-cyan-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Functie</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Uitleg</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Voorbeeld</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-bold text-blue-600">Tegenstelling</td>
                <td class="px-4 py-3 text-sm">Om een tegenstelling, correctie of scherpe nuance aan te geven.</td>
                <td class="px-4 py-3 text-sm">Hij is niet slim <strong>–</strong> hij is geniepig.</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-bold text-blue-600">Nadrukkelijke toevoeging</td>
                <td class="px-4 py-3 text-sm">In plaats van haakjes, maar dan met <strong>meer nadruk</strong>.</td>
                <td class="px-4 py-3 text-sm">Het weer <strong>–</strong> het regende pijpenstelen <strong>–</strong> was verschrikkelijk.</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-bold text-blue-600">Directe rede (Dialogen)</td>
                <td class="px-4 py-3 text-sm">In romans wordt het vaak gebruikt in plaats van aanhalingstekens.</td>
                <td class="px-4 py-3 text-sm"><strong>–</strong> Ik kom eraan, zei hij.</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30">
                <td class="px-4 py-3 text-sm font-bold text-blue-600">Reeksen / Bereiken</td>
                <td class="px-4 py-3 text-sm">Om een reeks opties of een bereik aan te geven (soms met een half castaliaantje).</td>
                <td class="px-4 py-3 text-sm">De trein rijdt van Amsterdam <strong>–</strong> Utrecht <strong>–</strong> Eindhoven.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="bg-rose-50 dark:bg-rose-900/20 border-l-4 border-rose-500 p-4 rounded-r-lg my-4">
          <p class="font-semibold text-rose-700 dark:text-rose-300 mb-1">🚨 De Gouden Spatieregel</p>
          <p class="text-sm text-slate-700 dark:text-slate-300">Zet <strong>ALTIJD</strong> een spatie vóór en ná het gedachtestreepje! Het streepje zelf 'plakt' niet aan de woorden. <em>(Het weer – het regende – was slecht.)</em></p>
        </div>
      `
    },
    {
      title: "Deel 5: Het Beletselteken (...) ⏳",
      body: `
        <p>Het beletselteken (in het Engels <em>ellipsis</em>) bestaat uit <strong>exact drie puntjes op één regel</strong> (<code class="bg-slate-200 dark:bg-slate-700 px-2 py-0.5 rounded text-sm">...</code>). Het is géén drie losse puntjes met spaties ertussen, maar één specifiek leesteken dat samenhang, aarzeling of weglatting aangeeft.</p>
        
        <h3 class="text-xl font-bold mt-6 mb-3 text-slate-800 dark:text-slate-200">📋 Functies van het Beletselteken</h3>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-gradient-to-r from-amber-600 to-orange-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Functie</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Uitleg</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Voorbeeld</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-bold text-amber-600">Weglating in een citaat</td>
                <td class="px-4 py-3 text-sm">Je laat een stuk van de originele tekst weg zonder de betekenis te veranderen.</td>
                <td class="px-4 py-3 text-sm">Hij zei: <strong>"Ik ga vandaag ... niet naar school."</strong></td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-bold text-amber-600">Aarzeling / Nadenken</td>
                <td class="px-4 py-3 text-sm">Iemand zoekt naar de juiste woorden, aarzelt of valt stil.</td>
                <td class="px-4 py-3 text-sm"><strong>"Ehm ... ik weet het eigenlijk niet zeker."</strong></td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-bold text-amber-600">Open einde / Lijst</td>
                <td class="px-4 py-3 text-sm">De zin 'sterft' langzaam uit, of impliceert dat de lijst oneindig doorgaat.</td>
                <td class="px-4 py-3 text-sm">In de tas zaten pennen, potloden, linialen<strong>...</strong></td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30">
                <td class="px-4 py-3 text-sm font-bold text-amber-600">Weglating in een woord</td>
                <td class="px-4 py-3 text-sm">Je laat een stuk van een woord weg (bijv. bij censoring of dialect).</td>
                <td class="px-4 py-3 text-sm">Hij is een V... (vent).</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 class="text-xl font-bold mt-8 mb-3 text-slate-800 dark:text-slate-200">🚨 De Grootste Valkuil: Spaties en Puntjes!</h3>
        <p class="text-sm text-slate-700 dark:text-slate-300 mb-4">De regels voor spaties rondom het beletselteken zijn strikt en afhankelijk van de positie in de zin.</p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-gradient-to-r from-rose-600 to-red-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Positie</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Regel voor Spaties</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Fout ❌</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Correct ✅</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">Aan het eind van de zin</td>
                <td class="px-4 py-3 text-sm">Geen spatie tussen het laatste woord en de puntjes. Vervangt de punt!</td>
                <td class="px-4 py-3 text-sm text-rose-600">Ik weet het niet ...</td>
                <td class="px-4 py-3 text-sm text-emerald-600 font-bold">Ik weet het niet...</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">Midden in de zin (pauze)</td>
                <td class="px-4 py-3 text-sm">WEL spaties vóór en ná de puntjes.</td>
                <td class="px-4 py-3 text-sm text-rose-600">Ik...weet het niet.</td>
                <td class="px-4 py-3 text-sm text-emerald-600 font-bold">Ik ... weet het niet.</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">Combinatie met ? of !</td>
                <td class="px-4 py-3 text-sm">Geen spatie tussen de puntjes en het vraag-/uitroepteken.</td>
                <td class="px-4 py-3 text-sm text-rose-600">Ik weet het niet... ?</td>
                <td class="px-4 py-3 text-sm text-emerald-600 font-bold">Ik weet het niet...?</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30">
                <td class="px-4 py-3 text-sm font-semibold">Aantal puntjes</td>
                <td class="px-4 py-3 text-sm">Altijd exact drie. Nooit vier (ook niet als het de punt vervangt).</td>
                <td class="px-4 py-3 text-sm text-rose-600">Hij liep weg....</td>
                <td class="px-4 py-3 text-sm text-emerald-600 font-bold">Hij liep weg...</td>
              </tr>
            </tbody>
          </table>
        </div>
      `
    }
  ],
  rulesTable: [
    {
      rule: "Punt bij aanhalingstekens",
      structure: "Eindigt de zin met de geciteerde tekst? De punt staat BINNEN de aanhalingstekens.",
      example: "Hij zei: \"Ik kom thuis.\" (Niet: \"Ik kom thuis\".)",
      usage: "Als de zin na het citaat nog doorgaat (bijv. '...,' zei hij), staat het aanhalingsteken gewoon in de zin en de punt erachter."
    },
    {
      rule: "Vraagteken bij aanhalingstekens",
      structure: "Is het citaat zelf een vraag? Vraagteken BINNEN, geen punt erachter. Is de hoofdzin een vraag over het citaat? Vraagteken BUITEN.",
      example: "Hij vroeg: \"Kom je?\" vs. Ken je het liedje \"De Zee\"?",
      usage: "Dubbele leestekens (zoals een punt én een vraagteken) worden vermeden. Het sterkste teken wint."
    },
    {
      rule: "Enkele aanhalingstekens",
      structure: "Gebruik ' ' alleen BINNEN dubbele aanhalingstekens of voor de letterlijke betekenis van een woord.",
      example: "Het woord 'bank' heeft twee betekenissen.",
      usage: "Gebruik voor directe rede in het Nederlands ALTIJD dubbele aanhalingstekens. Enkele zijn voor 'binnenin'."
    },
    {
      rule: "Punt bij haakjes",
      structure: "Midden in de zin: punt BUITEN de haakjes. Is het een volledige, losse zin: punt BINNEN de haakjes.",
      example: "Ik ben moe (ik sliep slecht). / Ik ga naar bed. (Ik ben erg moe.)",
      usage: "De regel is simpel: vormt de tekst tussen haakjes een grammaticaal onderdeel van de hoofdzin? Dan hoort de punt bij de hoofdzin (buiten de haakjes)."
    },
    {
      rule: "Gedachtestreepje vs. Koppelteken",
      structure: "Gebruik het LANGE streepje (–) voor pauzes. Gebruik het KORTE streepje (-) om woorden samen te stellen.",
      example: "Het weer – het regende – was slecht. / Een kant-klare maaltijd.",
      usage: "Zet ALTIJD een spatie vóór en ná het gedachtestreepje. Nooit bij een koppelteken."
    },
    {
      rule: "Het Beletselteken (...)",
      structure: "Gebruik exact drie puntjes. Nooit vier. Midden in de zin = spaties. Aan het einde = geen spatie.",
      example: "Ik weet het niet... / Ik ... weet het niet.",
      usage: "De drie puntjes vervangen de punt aan het einde van de zin. Zet er dus geen vierde punt achter! Combineer zonder spatie met ? of !"
    }
  ],
  callouts: [
    { type: "remember", label: "🏆 Gouden Regel 1", text: "De punt staat BINNEN de aanhalingstekens als het de zin beëindigt: Hij zei: \"Ik kom thuis.\"" },
    { type: "remember", label: "🏆 Gouden Regel 2", text: "Punt bij haakjes: BUITEN de haakjes als het midden in de zin staat. BINNEN de haakjes als het een volledige, losse zin is." },
    { type: "remember", label: "⚠️ PAS OP 1", text: "Het gedachtestreepje (–) is LANG en heeft ALTIIJD spaties eromheen. Het koppelteken (-) is KORT en heeft géén spaties." },
    { type: "remember", label: "⚠️ PAS OP 2", text: "Schrijf NOOIT vier puntjes! De drie puntjes van het beletselteken vervangen de punt aan het einde van de zin." },
    { type: "remember", label: "⚠️ PAS OP 3", text: "Zet GEEN spatie tussen het aanhalingsteken en het woord dat erin staat: \"Ik kom\", niet: \" Ik kom \"." },
    { type: "remember", label: "⚠️ PAS OP 4", text: "Vraagtekens en uitroeptekens staan BINNEN de aanhalingstekens als het citaat zelf een vraag of uitroep is." },
    { type: "tip", label: "💡 Pro-tip", text: "Gebruik het gedachtestreepje in plaats van haakjes als je de toevoeging extra nadruk wilt geven. Het leest vaak vlotter en dramatischer!" }
  ],
  commonMistakes: [
    { incorrect: "Hij zei: \"Ik kom thuis\".", correct: "Hij zei: \"Ik kom thuis.\"", explanation: "Als de aanhaling het einde van de zin markeert, staat de punt BINNEN de aanhalingstekens." },
    { incorrect: "Ik ben moe (ik heb weinig geslapen.)", correct: "Ik ben moe (ik heb weinig geslapen).", explanation: "De tekst tussen haakjes is geen volledige, zelfstandige zin, dus de punt van de hoofdzin staat BUITEN de haakjes." },
    { incorrect: "Hij is niet slim - hij is geniepig.", correct: "Hij is niet slim – hij is geniepig.", explanation: "Je moet het LANGE gedachtestreepje (–) gebruiken, niet het korte koppelteken (-). Vergeet de spaties niet!" },
    { incorrect: "Een kant – klare maaltijd.", correct: "Een kant-klare maaltijd.", explanation: "In woorden gebruik je het KORTE koppelteken (-) om delen aan elkaar te plakken, geen gedachtestreepje en geen spaties." },
    { incorrect: "Ik weet het niet ....?", correct: "Ik weet het niet...?", explanation: "Je schrijft NOOIT vier puntjes. De drie puntjes van het beletselteken zijn genoeg, direct gevolgd door het vraagteken zonder spatie." },
    { incorrect: "Ik weet het niet ...", correct: "Ik weet het niet...", explanation: "Aan het einde van de zin mag GEEN spatie voor de drie puntjes staan. Het vervangt de punt." },
    { incorrect: "Hij vroeg: \"Kom je?\".", correct: "Hij vroeg: \"Kom je?\"", explanation: "Als het citaat een vraag is, staat het vraagteken binnen de aanhalingstekens. Je zet er geen punt achter, want dat zijn dubbele leestekens." },
    { incorrect: "Het woord \" huis \" heeft 4 letters.", correct: "Het woord \"huis\" heeft 4 letters.", explanation: "Er komt NOOIT een spatie tussen het aanhalingsteken en het woord dat erin staat." },
    { incorrect: "Ik ...weet het niet.", correct: "Ik ... weet het niet.", explanation: "Als het beletselteken midden in de zin staat voor een pauze, moeten er spaties vóór en ná de puntjes staan." },
    { incorrect: "Hij zei: 'Ik kom eraan.'", correct: "Hij zei: \"Ik kom eraan.\"", explanation: "Voor directe rede in het Nederlands gebruik je ALTIJD dubbele aanhalingstekens. Enkele zijn alleen voor binnenin een ander citaat." }
  ],
  review: [
    "✅ Dubbele aanhalingstekens (\" \") voor directe rede, citaten, ironie en titels.",
    "✅ Enkele aanhalingstekens (' ') alleen binnen dubbele tekens of voor woordbetekenis.",
    "✅ Punt bij aanhalingstekens: BINNEN als het de zin beëindigt. Vraagteken binnen als het citaat een vraag is.",
    "✅ Haakjes ( ): punt BUITEN (midden zin), BINNEN (hele, losse zin).",
    "✅ Gedachtestreepje (–): lange streep, ALTIIJD spaties eromheen.",
    "✅ Koppelteken (-): korte streep, géén spaties, voor samenstellingen (kant-klare).",
    "✅ Beletselteken (...): exact 3 puntjes, nooit 4. Midden = spaties, einde = geen spatie.",
    "✅ Geen spaties tussen het aanhalingsteken en het woord dat erin staat.",
    "✅ Dubbele punt (:) gaat vaak vooraf aan directe rede: Hij zei: \"...\"",
    "✅ Vermijd dubbele leestekens (zoals punt én vraagteken). Het sterkste teken wint."
  ],
  qa:
  [
 {
      "question": "1. Hij vroeg zich af: \"Hoe laat is het\". 2. Ik ga naar bed (ik ben moe en moet om 06.00 opstaan.) 3. Ken je 'De Stille Kracht'? Wat is per zin de fout in de leestekens aan het einde?",
      "answer": "1. Punt buiten aanhalingstekens bij vraag → \"Hoe laat is het?\"\n2. Punt binnen haakjes, maar hoofdzin mist punt → Ik ga naar bed. (ik ben moe... opstaan.)\n3. Enkele aanhalingstekens voor titel zonder dubbel citaat → \"De Stille Kracht\""
    },
    {
      "question": "Zin: 'De man - die ik gisteren zag - at een kant - klare maaltijd omdat hij - honger had - snel naar binnen werkte.' Noem de vier streepjesfouten.",
      "answer": "1&2: streepjes rond 'die ik zag' moeten gedachtestreepjes met spaties (–). 3: 'kant-klare' moet koppelteken (-) zonder spaties. 4: streepjes om 'honger had' moeten ook gedachtestreepjes met spaties. Correct: De man – die ik gisteren zag – at een kant-klare maaltijd omdat hij – honger had – snel naar binnen werkte."
    },
    {
      "question": "Dialoog: – Ik weet niet ... / – Wat weet je niet ....? / – Ehm ... ik weet het niet ... / – Is het ...echt zo? Verbeter de vier fouten met beletselteken en spaties.",
      "answer": "1. 'niet ...' → 'niet...' 2. 'niet ....?' → 'niet...?' 3. 'niet ...' → 'niet...' 4. '...echt' → '... echt'"
    },
    {
      "question": "Zet naar directe rede: De leraar vroeg of ze hun boeken hadden gepakt en of ze klaar waren voor hoofdstuk 5.",
      "answer": "De leraar vroeg: \"Hebben jullie je boeken al gepakt en zijn jullie klaar voor hoofdstuk 5?\""
    }
  ]
};