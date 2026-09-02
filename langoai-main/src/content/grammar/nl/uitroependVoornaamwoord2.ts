import type { GrammarLesson } from "../../types";

export const uitroependVoornaamwoord2: GrammarLesson = {
  id: "nl-uitroepend-voornaamwoord-2",
  title: "Uitroepend Voornaamwoord (Deel 2): Verdieping, Alternatieven & Nuances",
  level: 3,
  topic: "Grammatica",
  body: "Verdieping van het uitroepend voornaamwoord: versterkers, alternatieven (zo'n, zulke, hoe), verschil met interjecties, intonatie, en veelgemaakte vertaalfouten.",
  overview:
    "Dit is het vervolg en de verdieping op de basis van uitroepend voornaamwoorden. Je leert hoe je uitroepen kracht bijzet met versterkers, ontdekt de exacte nuance tussen 'wat een', 'zo'n' en 'hoe', en leert het verschil met interjecties (tussenwerpsels). Met 15+ kleurrijke tabellen, duidelijke PAS OP-momenten, uitleg over intonatie en 4 complexe oefenvragen beheers je de Nederlandse uitroepen tot in het oneindige!",
  anchorSectionId: "versterkers",
  exercises: [],
  timeExpressionsLabel: "De Alternatieven voor 'Wat een' in Één Oogopslag 🔄",
  timeExpressions: {
    header: "Alternatief | Gebruik | Voorbeeld | Nuance",
    rows: [
      ["📢 Wat een + znw", "Uitroep over een ding/concept", "**Wat een** mooie auto!", "Focus op kwaliteit/schoonheid."],
      ["🎯 Zo'n / Zulke", "Aanwijzende uitroep (dit specifieke soort)", "**Zo'n** mooie auto!", "Focus op het specifieke type, vaak terwijl je ernaar kijkt."],
      ["✨ Hoe + bn/bw", "Uitroep over een eigenschap", "**Hoe** mooi!", "Geen zelfstandig naamwoord, puur de eigenschap."],
      ["🎭 Interjectie", "Pure emotie, staat op zichzelf", "**Tjonge!** / **Jemig!**", "Verwijst nergens naartoe, puur gevoel."],
      ["🗣️ Spreektaal", "Wat een samengevoegd", "**Watte** mooie dag!", "Nooit schrijven in formele teksten!"]
    ]
  },
  details: [
    {
      title: "Deel 1: De Versterkers: Bijwoorden bij 'Wat een' 📢",
      body: `
        <p>In het echt gebruik je zelden alleen <em>"Wat een huis!"</em>. Meestal voeg je een <strong>versterkend bijvoeglijk naamwoord</strong> toe om je emotie kracht bij te zetten.</p>
        
        <div class="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-emerald-700 dark:text-emerald-300 mb-2">🏆 PRO REGEL 5</h3>
          <p class="text-slate-700 dark:text-slate-300">Je mag <strong>altijd</strong> een bijvoeglijk naamwoord tussen <em>wat een</em> en het zelfstandig naamwoord plaatsen. Dit verandert de grammaticale regel <strong>niet</strong>.</p>
        </div>

        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-gradient-to-r from-indigo-600 to-purple-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Emotie</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Versterker</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Voorbeeldzin</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold text-emerald-600">Positief</td>
                <td class="px-4 py-3 text-sm">prachtig, geweldig, fantastisch</td>
                <td class="px-4 py-3 text-sm"><strong>Wat een</strong> ontzettend leuk feest!</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold text-rose-600">Negatief</td>
                <td class="px-4 py-3 text-sm">vreselijk, verschrikkelijk, belachelijk</td>
                <td class="px-4 py-3 text-sm"><strong>Wat een</strong> vreselijke stank!</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50">
                <td class="px-4 py-3 text-sm font-semibold text-amber-600">Neutraal/Verbaasd</td>
                <td class="px-4 py-3 text-sm">groot, klein, bijzonder, raar</td>
                <td class="px-4 py-3 text-sm"><strong>Wat een</strong> bijzondere vogel!</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="bg-rose-50 dark:bg-rose-900/20 border-l-4 border-rose-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-rose-700 dark:text-rose-300 mb-2">🚨 PAS OP! DE SPREEKTAAL-VERSTERKER!</h3>
          <p class="text-sm text-slate-700 dark:text-slate-300 mb-2">In spreektaal gebruiken Nederlanders vaak het woord <strong>hartstikke</strong> of <strong>heel erg</strong> als versterker.</p>
          <ul class="space-y-1 text-sm text-slate-700 dark:text-slate-300">
            <li>✅ <em>Wat een <strong>hartstikke</strong> leuke jurk!</em> (Informeel, spreektaal).</li>
            <li>✅ <em>Wat een <strong>heel erg</strong> stomme fout!</em> (Informeel).</li>
            <li>💡 <em>Tip:</em> In formeel geschreven Nederlands kun je dit beter vermijden en kies je voor <em>uiterst, zeer</em> of <em>ontzettend</em>.</li>
          </ul>
        </div>
      `
    },
    {
      title: "Deel 2: De Alternatieven: Zo'n, Zulke & Hoe 🔄",
      body: `
        <p>Soms is <em>"Wat een..."</em> niet de enige of de beste keuze. Het Nederlands heeft nog drie andere krachtige manieren om een uitroep te doen.</p>
        
        <h3 class="text-xl font-bold mt-6 mb-3 text-slate-800 dark:text-slate-200">A. ZO'N en ZULKE (De aanwijzende uitroep)</h3>
        <p class="text-sm text-slate-700 dark:text-slate-300 mb-4">Als je wilt benadrukken dat het om <strong>precies dit specifieke soort</strong> gaat (of je wijst letterlijk naar iets), gebruik je <em>zo'n</em> (enkelvoud) of <em>zulke</em> (meervoud).</p>

        <div class="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-emerald-700 dark:text-emerald-300 mb-2">🏆 PRO REGEL 6 & 7</h3>
          <ul class="space-y-2 list-none pl-0 text-slate-700 dark:text-slate-300">
            <li>✅ <strong>PRO REGEL 6:</strong> Gebruik <strong>ZO'N</strong> bij een <strong>de- of het-woord in het enkelvoud</strong>.</li>
            <li>✅ <strong>PRO REGEL 7:</strong> Gebruik <strong>ZULKE</strong> bij een <strong>meervoud</strong>. (Let op: <em>Zulk</em> wordt bijna niet meer gebruikt in moderne uitroepen).</li>
          </ul>
        </div>

        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-gradient-to-r from-purple-600 to-pink-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Lidwoord</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Uitroep</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Voorbeeldzin</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Nuance</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">de/het (enkelvoud)</td>
                <td class="px-4 py-3 text-sm font-bold text-purple-600">zo'n</td>
                <td class="px-4 py-3 text-sm"><strong>Zo'n</strong> mooie auto heb ik nog nooit gezien!</td>
                <td class="px-4 py-3 text-sm text-xs">Je wijst naar die specifieke auto.</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30">
                <td class="px-4 py-3 text-sm font-semibold">meervoud</td>
                <td class="px-4 py-3 text-sm font-bold text-purple-600">zulke</td>
                <td class="px-4 py-3 text-sm"><strong>Zulke</strong> lieve kinderen heb ik nog nooit gehad!</td>
                <td class="px-4 py-3 text-sm text-xs">Je wijst naar deze specifieke groep kinderen.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-indigo-700 dark:text-indigo-300 mb-2">💡 Zo'n vs Wat een!</h3>
          <ul class="space-y-1 text-sm text-slate-700 dark:text-slate-300">
            <li>✅ <strong>Wat een</strong> mooie auto! = Ik ben onder de indruk van de kwaliteit/schoonheid.</li>
            <li>✅ <strong>Zo'n</strong> mooie auto! = Ik ben onder de indruk, en ik bedoel <em>precies zo'n exemplaar</em> (vaak terwijl je ernaar kijkt of ernaar verlangt).</li>
          </ul>
        </div>

        <h3 class="text-xl font-bold mt-8 mb-3 text-slate-800 dark:text-slate-200">B. HOE (De uitroep over een eigenschap)</h3>
        <p class="text-sm text-slate-700 dark:text-slate-300 mb-4">Als je geen uitroep doet over een <strong>ding</strong> (zelfstandig naamwoord), maar over een <strong>eigenschap</strong> (bijvoeglijk naamwoord of bijwoord), gebruik je <strong>HOE</strong>.</p>

        <div class="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-emerald-700 dark:text-emerald-300 mb-2">🏆 PRO REGEL 8</h3>
          <p class="text-slate-700 dark:text-slate-300">Gebruik <strong>HOE</strong> als er <strong>geen zelfstandig naamwoord</strong> in de uitroep staat, maar alleen een eigenschap.</p>
        </div>

        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-gradient-to-r from-amber-600 to-orange-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Type uitroep</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Voorbeeldzin</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Uitleg</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">Met zelfstandig naamwoord</td>
                <td class="px-4 py-3 text-sm"><strong>Wat een</strong> mooie bloemen!</td>
                <td class="px-4 py-3 text-sm text-xs">Uitroep over de bloemen (ding).</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">Met eigenschap</td>
                <td class="px-4 py-3 text-sm"><strong>Hoe</strong> mooi zijn die bloemen!</td>
                <td class="px-4 py-3 text-sm text-xs">Uitroep over de schoonheid (eigenschap).</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50">
                <td class="px-4 py-3 text-sm font-semibold">Met eigenschap</td>
                <td class="px-4 py-3 text-sm"><strong>Hoe</strong> vervelend voor je!</td>
                <td class="px-4 py-3 text-sm text-xs">Uitroep over het gevoel (eigenschap).</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="bg-rose-50 dark:bg-rose-900/20 border-l-4 border-rose-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-rose-700 dark:text-rose-300 mb-2">🚨 PAS OP! DE 'WAT'-FOUT BIJ EIGENSCHAPPEN!</h3>
          <p class="text-sm text-slate-700 dark:text-slate-300 mb-2">Veel cursisten zeggen: <em>"Wat mooi!"</em> of <em>"Wat vervelend!"</em>. Dit is in spreektaal geaccepteerd, maar grammaticaal is het slordig. Omdat er geen zelfstandig naamwoord is, is <strong>Hoe</strong> de officiële vorm.</p>
          <ul class="space-y-1 text-sm text-slate-700 dark:text-slate-300">
            <li>❌ <em>Fout (maar vaak gehoord):</em> Wat mooi dat je er bent!</li>
            <li>✅ <em>Correct:</em> <strong>Hoe</strong> mooi dat je er bent! / Wat <strong>een</strong> mooi gebaar dat je er bent!</li>
          </ul>
        </div>
      `
    },
    {
      title: "Deel 3: Interjecties vs. Uitroepend Voornaamwoord 🎭",
      body: `
        <p>Wat is het verschil tussen <em>"Wat een rotzooi!"</em> en <em>"Tjonge!"</em>? Het eerste is een uitroepend voornaamwoord, het tweede is een <strong>interjectie</strong> (tussenwerpsel).</p>
        
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-gradient-to-r from-teal-600 to-cyan-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Kenmerk</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Uitroepend vnw (Wat een...)</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Interjectie (Tussenwerpsel)</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">Functie</td>
                <td class="px-4 py-3 text-sm">Verwijst <strong>altijd</strong> naar een zelfstandig naamwoord of eigenschap in de context.</td>
                <td class="px-4 py-3 text-sm">Staat <strong>volledig op zichzelf</strong>. Verwijst nergens naar.</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">Voorbeelden</td>
                <td class="px-4 py-3 text-sm">Wat een weer! / Wat een idioot!</td>
                <td class="px-4 py-3 text-sm">Tjonge! / Jemig! / Hè! / Ai! / Oef!</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">Grammatica</td>
                <td class="px-4 py-3 text-sm">Maakt deel uit van de zinsstructuur.</td>
                <td class="px-4 py-3 text-sm">Is géén onderdeel van de zinsstructuur.</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30">
                <td class="px-4 py-3 text-sm font-semibold">Betekenis</td>
                <td class="px-4 py-3 text-sm">Bevat inhoud (je weet wáár je boos/blij over bent).</td>
                <td class="px-4 py-3 text-sm">Bevat alleen pure emotie.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-indigo-700 dark:text-indigo-300 mb-2">💡 DE COMBINATIE!</h3>
          <p class="text-sm text-slate-700 dark:text-slate-300">Je kunt een interjectie en een uitroepend voornaamwoord combineren in één zin!</p>
          <ul class="mt-2 space-y-1 text-sm text-slate-700 dark:text-slate-300">
            <li>✅ <em>"<strong>Jemig</strong>, wat een grote spin!"</em> (Interjectie + Uitroepend vnw).</li>
            <li>✅ <em>"<strong>Tjonge</strong>, wat een pech!"</em></li>
          </ul>
        </div>
      `
    },
    {
      title: "Deel 4: De Intonatie en Spreektaal 🗣️",
      body: `
        <p>Hoe klinkt een uitroep in het echt? De grammatica is één ding, maar de uitspraak is minstens zo belangrijk voor je spreekvaardigheid.</p>
        
        <h3 class="text-xl font-bold mt-6 mb-3 text-slate-800 dark:text-slate-200">A. De klemtoon</h3>
        <p class="text-sm text-slate-700 dark:text-slate-300 mb-4">Bij een uitroep met <em>wat een</em> ligt de klemtoon <strong>NOOIT</strong> op <em>wat</em> of <em>een</em>. De klemtoon ligt <strong>ALTIJD</strong> op het <strong>bijvoeglijk naamwoord</strong> of het <strong>zelfstandig naamwoord</strong>.</p>

        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-gradient-to-r from-blue-600 to-cyan-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Zin</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Waar ligt de klemtoon?</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Hoe klinkt het?</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm">Wat een mooie auto!</td>
                <td class="px-4 py-3 text-sm">op <strong>mooi</strong></td>
                <td class="px-4 py-3 text-sm">Wat een <strong>MOOIE</strong> auto!</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm">Wat een rotweer!</td>
                <td class="px-4 py-3 text-sm">op <strong>rot</strong></td>
                <td class="px-4 py-3 text-sm">Wat een <strong>ROT</strong>weer!</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50">
                <td class="px-4 py-3 text-sm">Wat een idioot!</td>
                <td class="px-4 py-3 text-sm">op i<strong>di</strong>oot</td>
                <td class="px-4 py-3 text-sm">Wat een i<strong>DI</strong>OOT!</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 class="text-xl font-bold mt-8 mb-3 text-slate-800 dark:text-slate-200">B. Verslikken in de spreektaal</h3>
        <p class="text-sm text-slate-700 dark:text-slate-300 mb-4">In snel, informeel Nederlands worden <em>wat</em> en <em>een</em> vaak aan elkaar geplakt of ingeslikt.</p>
        <ul class="space-y-1 list-disc pl-5 text-sm text-slate-700 dark:text-slate-300 mb-4">
          <li><em>Wat een</em> ➔ <strong>Watte</strong> of <strong>Watte'n</strong></li>
          <li><em>Wat een mooie dag</em> ➔ <em>"Watte'n mooie dag!"</em></li>
          <li><em>Wat een onzin</em> ➔ <em>"Watte onzin!"</em></li>
        </ul>

        <div class="bg-rose-50 dark:bg-rose-900/20 border-l-4 border-rose-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-rose-700 dark:text-rose-300 mb-2">🚨 PAS OP! SCHRIJFTAAL vs SPREEKTAAL!</h3>
          <p class="text-sm text-slate-700 dark:text-slate-300">Schrijf <strong>NOOIT</strong> <em>"watte"</em> of <em>"watte'n"</em> in een e-mail, opstel of toets. Dit is puur fonetische spreektaal. Schrijf altijd netjes <strong>wat een</strong>.</p>
        </div>
      `
    },
    {
      title: "Deel 5: Vergelijking met Andere Talen 🌍",
      body: `
        <p>Als je een andere moedertaal hebt, is het handig om te weten hoe het Nederlands zich verhoudt tot andere talen. Soms is het hetzelfde, soms is er een verrassend verschil!</p>
        
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-gradient-to-r from-emerald-600 to-teal-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Taal</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Letterlijke vertaling</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Opmerking voor Nederlandsleerders</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">Engels</td>
                <td class="px-4 py-3 text-sm">What a beautiful house!</td>
                <td class="px-4 py-3 text-sm text-xs">Precies hetzelfde als <em>Wat een mooi huis!</em> Let op: bij meervoud valt de 'a' weg (<em>What beautiful flowers!</em>), net als de 'een' in het Nederlands (<em>Wat mooie bloemen!</em>).</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">Duits</td>
                <td class="px-4 py-3 text-sm">Was für ein schönes Haus!</td>
                <td class="px-4 py-3 text-sm text-xs">Letterlijk: <em>Wat voor een mooi huis!</em> In het Nederlands gebruiken we bij uitroepen <strong>géén</strong> <em>voor</em>. Dus niet: <em>Wat voor een mooi huis!</em> (Dat is een vraag!).</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">Frans</td>
                <td class="px-4 py-3 text-sm">Quelle belle maison!</td>
                <td class="px-4 py-3 text-sm text-xs">Letterlijk: <em>Welk een mooi huis!</em> In het Nederlands gebruiken we <strong>nooit</strong> <em>welke</em> in een uitroep. Dus niet: <em>Welke een mooi huis!</em></td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30">
                <td class="px-4 py-3 text-sm font-semibold">Spaans</td>
                <td class="px-4 py-3 text-sm">¡Qué casa tan bonita!</td>
                <td class="px-4 py-3 text-sm text-xs">Letterlijk: <em>Wat een huis zo mooi!</em> In het Nederlands zeggen we gewoon: <em>Wat een mooi huis!</em></td>
              </tr>
            </tbody>
          </table>
        </div>
      `
    }
  ],
  rulesTable: [
    {
      rule: "Versterkers toevoegen",
      structure: "Je mag altijd een bijvoeglijk naamwoord toevoegen tussen 'wat een' en het zelfstandig naamwoord.",
      example: "Wat een ontzettend leuk feest! / Wat een vreselijke stank!",
      usage: "Dit maakt de uitroep krachtiger en specifieker."
    },
    {
      rule: "Zo'n vs Zulke",
      structure: "Zo'n = enkelvoud (de/het). Zulke = meervoud. Gebruikt om een specifiek type aan te wijzen.",
      example: "Zo'n mooie auto! / Zulke lieve kinderen!",
      usage: "Gebruik dit als je letterlijk naar iets wijst of benadrukt dat je precies zó'n exemplaar bedoelt."
    },
    {
      rule: "Hoe bij eigenschappen",
      structure: "Gebruik HOE als er geen zelfstandig naamwoord in de uitroep staat, maar alleen een eigenschap (bn/bw).",
      example: "Hoe mooi! / Hoe vervelend voor je!",
      usage: "In formele taal is 'Wat mooi!' fout als er geen zelfstandig naamwoord volgt. Gebruik dan 'Hoe'."
    },
    {
      rule: "Interjecties",
      structure: "Tussenwerpsels (Tjonge, Jemig, Ai) staan op zichzelf en verwijzen nergens naar. Ze drukken pure emotie uit.",
      example: "Tjonge, wat een rommel! / Ai, dat deed pijn!",
      usage: "Interjecties kunnen gecombineerd worden met uitroepend voornaamwoorden in dezelfde zin."
    },
    {
      rule: "Wat voor een vs Wat een",
      structure: "'Wat voor een' is exclusief voor VRAGEN naar het soort. 'Wat een' is voor UITROEPEN.",
      example: "Vraag: Wat voor een auto rijd je? / Uitroep: Wat een mooie auto!",
      usage: "Vertaal nooit het Duitse 'Was für ein' letterlijk naar 'Wat voor een' in een uitroep."
    }
  ],
  callouts: [
    { type: "remember", label: "🏆 PRO REGEL 5", text: "Je mag altijd een bijvoeglijk naamwoord toevoegen als versterker: Wat een ontzettend leuk feest!" },
    { type: "remember", label: "🏆 PRO REGEL 6 & 7", text: "Zo'n (enkelvoud) / Zulke (meervoud) om een specifiek type aan te wijzen." },
    { type: "remember", label: "🏆 PRO REGEL 8", text: "Gebruik HOE als er geen zelfstandig naamwoord is, maar alleen een eigenschap (Hoe mooi!)." },
    { type: "remember", label: "⚠️ PAS OP 1", text: "Schrijf NOOIT 'watte' of 'watte'n' in formele teksten. Dit is pure spreektaal." },
    { type: "remember", label: "⚠️ PAS OP 2", text: "Zeg NOOIT 'Wat voor een mooi huis!' als uitroep. Dat is een vraag! Zeg: 'Wat een mooi huis!'" },
    { type: "remember", label: "⚠️ PAS OP 3", text: "Gebruik NOOIT 'welke' in een uitroep (zoals in het Frans 'Quelle'). Gebruik 'Wat een'." }
  ],
  commonMistakes: [
    { incorrect: "Wat voor een mooi huis! (als uitroep)", correct: "Wat een mooi huis!", explanation: "'Wat voor een' is voor vragen naar het soort. Voor uitroepen gebruik je 'wat een'." },
    { incorrect: "Wat mooi! (zonder zelfstandig naamwoord)", correct: "Hoe mooi!", explanation: "Zonder zelfstandig naamwoord gebruik je 'hoe' om de eigenschap te benadrukken." },
    { incorrect: "Zulke een mooi huis!", correct: "Zo'n mooi huis!", explanation: "Bij enkelvoud gebruik je 'zo'n', niet 'zulke een'." },
    { incorrect: "Watte mooie auto! (in een formele tekst)", correct: "Wat een mooie auto!", explanation: "Schrijf nooit 'watte' in formele teksten, dit is fonetische spreektaal." },
    { incorrect: "Welke een mooie bloemen!", correct: "Wat een mooie bloemen!", explanation: "Gebruik nooit 'welke' in een uitroep, dit is een letterlijke vertaling uit het Frans." }
  ],
  review: [
    "✅ Versterkers: Voeg bijvoeglijke naamwoorden toe voor meer impact (Wat een ontzettend leuk feest!).",
    "✅ Zo'n / Zulke: Gebruik voor aanwijzende uitroepen over een specifiek type (Zo'n mooie auto!).",
    "✅ Hoe: Gebruik bij eigenschappen zonder zelfstandig naamwoord (Hoe vervelend!).",
    "✅ Interjecties: Tussenwerpsels (Tjonge, Jemig) staan los van de zin en drukken pure emotie uit.",
    "✅ Spreektaal: 'Watte' of 'watte'n' wordt vaak gebruikt, maar schrijf het NOOIT in formele teksten.",
    "✅ Wat voor een: Alleen voor vragen! Gebruik 'wat een' voor uitroepen.",
    "✅ Intonatie: De klemtoon ligt altijd op het bijvoeglijk naamwoord of zelfstandig naamwoord, nooit op 'wat' of 'een'."
  ],
  qa: [
    {
      question: "Kies de juiste vorm: (Elk / Elke) dag drink ik koffie.",
      answer: "Elke. 'Dag' is een de-woord, dus het krijgt een -e."
    },
    {
      question: "Corrigeer de fout: 'Iedere leerlingen moeten studeren.'",
      answer: "'Iedere leerling moet studeren.' Na 'ieder/elk' blijft het zelfstandig naamwoord altijd in het enkelvoud."
    },
    {
      question: "Hoe schrijf je het woord voor 'everyone' in het Nederlands? Aan elkaar of los?",
      answer: "Iedereen (aan elkaar). 'Ieder een' (los) betekent 'elk individu apart'."
    },
    {
      question: "Hoe zeg je 'every two days' (als je om de dag sport) in het Nederlands?",
      answer: "Om de twee dagen. (Gebruik 'om de' voor tussenpozen, niet 'elke')."
    }
  ]
};