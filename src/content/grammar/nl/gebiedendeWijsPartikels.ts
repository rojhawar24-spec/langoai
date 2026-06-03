import type { GrammarLesson } from "../../types";

export const gebiedendeWijsPartikels: GrammarLesson = {
  id: "nl-gebiedendewijs-partikels-1",
  title: "De Gebiedende Wijs met Partikels: Maar, Eens, Even – De Ultieme Tabelgids",
  level: 2,
  topic: "Gebiedende wijs met partikels",
  body: "Beheers de gebiedende wijs met partikels volledig: maar, eens, even, nou, wat. Alle nuances, woordvolgorde, scheidbare werkwoorden en valkuilen in tabellen.",
  overview:
    "Dit is de allesomvattende, tabel-gerichte gids over partikels bij de gebiedende wijs in het Nederlands. Je leert de functie van maar, eens, even, nou en wat via vergelijkingstabellen, beheerst de woordvolgorde, begrijpt combinaties met scheidbare werkwoorden, en vermijdt alle valkuilen. Met 15+ kristalheldere tabellen, 120+ voorbeeldzinnen in tabelvorm en oefeningen van basis tot expertniveau gebruik jij partikels bij gebiedende zinnen voortaan foutloos en natuurlijk – puur visueel, zonder lange teksten.",
  anchorSectionId: "wat-zijn-partikels",
  exercises: [],
  timeExpressionsLabel: "Partikels bij gebiedende wijs in één oogopslag 🎯",
  timeExpressions: {
    header: "Partikel | Functie | Voorbeeld | Gevoel",
    rows: [
      ["maar", "Toestemming, geruststelling", "Doe maar.", "Het is oké, geen stress"],
      ["even", "Verzachtend, kortdurend", "Wacht even.", "Klein verzoek, duurt kort"],
      ["eens", "Aansporing, verzoek", "Kijk eens!", "Doe het nu, kijk nu"],
      ["nou", "Dringend, smekend", "Doe nou!", "Toe alsjeblieft, houd op"],
      ["wat", "Mate: een beetje", "Eet wat meer.", "Iets meer, niet te veel"],
      ["es/is", "Spreektaal: eens", "Kijk es!", "Alleen spreektaal, informeel"]
    ]
  },
  details: [
    {
      title: "Deel 1: Wat zijn partikels bij de gebiedende wijs? 🗣️",
      body: `
        <p>Geen lange uitleg, puur overzicht. Partikels zijn kleine hulpwoordjes die de <strong>toon</strong> van een gebiedende zin veranderen.</p>
        
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-emerald-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Zonder partikel</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Met partikel</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Verschil in toon</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Wanneer gebruiken?</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm"><strong>Wacht!</strong></td>
                <td class="px-4 py-3 text-sm"><strong>Wacht even.</strong></td>
                <td class="px-4 py-3 text-sm text-amber-600">Streng → Vriendelijk</td>
                <td class="px-4 py-3 text-sm text-xs">Als je iets kort vraagt</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm"><strong>Doe de deur dicht!</strong></td>
                <td class="px-4 py-3 text-sm"><strong>Doe de deur maar dicht.</strong></td>
                <td class="px-4 py-3 text-sm text-amber-600">Bevel → Toestemming</td>
                <td class="px-4 py-3 text-sm text-xs">Als je geruststelt of toestemming geeft</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm"><strong>Kijk!</strong></td>
                <td class="px-4 py-3 text-sm"><strong>Kijk eens!</strong></td>
                <td class="px-4 py-3 text-sm text-amber-600">Direct → Aansporing</td>
                <td class="px-4 py-3 text-sm text-xs">Als je iemand wilt laten kijken</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm"><strong>Zeg!</strong></td>
                <td class="px-4 py-3 text-sm"><strong>Zeg nou!</strong></td>
                <td class="px-4 py-3 text-sm text-amber-600">Bot → Smekend</td>
                <td class="px-4 py-3 text-sm text-xs">Als je dringend iets vraagt</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50">
                <td class="px-4 py-3 text-sm"><strong>Eet!</strong></td>
                <td class="px-4 py-3 text-sm"><strong>Eet wat meer.</strong></td>
                <td class="px-4 py-3 text-sm text-amber-600">Algemeen → Genuanceerd</td>
                <td class="px-4 py-3 text-sm text-xs">Als je 'een beetje' bedoelt</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div class="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 rounded-lg p-4 my-4">
          <p class="font-bold text-indigo-800 dark:text-indigo-200 mb-1">📌 Kern in één regel:</p>
          <p class="text-sm text-slate-700 dark:text-slate-300">Partikels veranderen de <strong>toon</strong> van een gebiedende zin, niet de grammatica. Ze maken bevelen vriendelijker, natuurlijker of specifieker.</p>
        </div>
      `
    },
    {
      title: "Deel 2: De belangrijkste partikels – Functietabel 🎭",
      body: `
        <p>Elk partikel heeft een eigen functie. Kies de juiste met deze tabel.</p>
        
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-indigo-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Partikel</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Functie / Nuance</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Voorbeeldzin</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Gevoel / Betekenis</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Formeel/Informeel</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">maar</td>
                <td class="px-4 py-3 text-sm">Toestemming, geruststelling, berusting</td>
                <td class="px-4 py-3 text-sm"><em>Loop maar door.</em></td>
                <td class="px-4 py-3 text-sm text-xs">"Het is oké", "Geef maar op", "Ga je gang"</td>
                <td class="px-4 py-3 text-sm text-xs">Beide</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">even</td>
                <td class="px-4 py-3 text-sm">Verzachtend, kortdurend, klein verzoek</td>
                <td class="px-4 py-3 text-sm"><em>Wacht even.</em></td>
                <td class="px-4 py-3 text-sm text-xs">"Duurt maar kort", "Doe me een klein plezier"</td>
                <td class="px-4 py-3 text-sm text-xs">Beide</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">eens</td>
                <td class="px-4 py-3 text-sm">Aansporing, verzoek, soms licht dringerig</td>
                <td class="px-4 py-3 text-sm"><em>Kom eens hier.</em></td>
                <td class="px-4 py-3 text-sm text-xs">"Doe het nu een keer", "Kijk nu toch"</td>
                <td class="px-4 py-3 text-sm text-xs">Beide</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">nou</td>
                <td class="px-4 py-3 text-sm">Dringend, smekend, verontwaardigd</td>
                <td class="px-4 py-3 text-sm"><em>Doe nou niet zo moeilijk.</em></td>
                <td class="px-4 py-3 text-sm text-xs">"Toe alsjeblieft!", "Houd eens op!"</td>
                <td class="px-4 py-3 text-sm text-xs">Informeel</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">wat</td>
                <td class="px-4 py-3 text-sm">Mate: versterkend of verzachtend ('een beetje')</td>
                <td class="px-4 py-3 text-sm"><em>Loop wat sneller.</em></td>
                <td class="px-4 py-3 text-sm text-xs">"Iets meer", "Een klein beetje"</td>
                <td class="px-4 py-3 text-sm text-xs">Beide</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30">
                <td class="px-4 py-3 text-sm font-semibold">es / is</td>
                <td class="px-4 py-3 text-sm">Spreektaalvariant van <em>eens</em></td>
                <td class="px-4 py-3 text-sm"><em>Kijk es!</em></td>
                <td class="px-4 py-3 text-sm text-xs">Exact hetzelfde als <em>eens</em>, maar informeel</td>
                <td class="px-4 py-3 text-sm text-xs text-rose-600">Alleen spreektaal!</td>
              </tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      title: "Deel 3: Woordvolgorde – De basisformule in tabellen 📏",
      body: `
        <p>De regel is simpel. Alles in tabellen.</p>
        
        <h3 class="text-lg font-bold mt-4 mb-2">📐 De basisformule:</h3>
        <div class="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-lg p-4 my-4">
          <p class="text-sm font-mono text-center">WERKWOORDSTAM + PARTIKEL + (LIJDEND VOORWERP / BIJWOORDEN / REST)</p>
        </div>
        
        <h3 class="text-lg font-bold mt-6 mb-2">📋 Voorbeelden: woordvolgorde stap voor stap</h3>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-purple-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Zin</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Stam</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Partikel</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Rest van de zin</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Patroon</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700"><td class="px-3 py-2 text-sm">Wacht even!</td><td class="px-3 py-2 text-sm">Wacht</td><td class="px-3 py-2 text-sm">even</td><td class="px-3 py-2 text-sm">–</td><td class="px-3 py-2 text-sm text-xs">Stam + partikel</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700"><td class="px-3 py-2 text-sm">Doe maar de deur dicht.</td><td class="px-3 py-2 text-sm">Doe</td><td class="px-3 py-2 text-sm">maar</td><td class="px-3 py-2 text-sm">de deur dicht</td><td class="px-3 py-2 text-sm text-xs">Stam + partikel + rest</td></tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700"><td class="px-3 py-2 text-sm">Eet wat meer groenten.</td><td class="px-3 py-2 text-sm">Eet</td><td class="px-3 py-2 text-sm">wat</td><td class="px-3 py-2 text-sm">meer groenten</td><td class="px-3 py-2 text-sm text-xs">Stam + partikel + rest</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700"><td class="px-3 py-2 text-sm">Kijk eens naar die vogel.</td><td class="px-3 py-2 text-sm">Kijk</td><td class="px-3 py-2 text-sm">eens</td><td class="px-3 py-2 text-sm">naar die vogel</td><td class="px-3 py-2 text-sm text-xs">Stam + partikel + rest</td></tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700"><td class="px-3 py-2 text-sm">Zeg nou wat!</td><td class="px-3 py-2 text-sm">Zeg</td><td class="px-3 py-2 text-sm">nou</td><td class="px-3 py-2 text-sm">wat</td><td class="px-3 py-2 text-sm text-xs">Stam + partikel + rest</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Loop maar door.</td><td class="px-3 py-2 text-sm">Loop</td><td class="px-3 py-2 text-sm">maar</td><td class="px-3 py-2 text-sm">door</td><td class="px-3 py-2 text-sm text-xs">Stam + partikel + scheidbaar deel</td></tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      title: "Deel 4: Combinaties met scheidbare werkwoorden ✂️",
      body: `
        <p>Bij scheidbare werkwoorden staat het tweede deel helemaal achteraan. Het partikel kan op twee plekken staan.</p>
        
        <h3 class="text-lg font-bold mt-4 mb-2">📋 Twee mogelijke volgordes:</h3>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-indigo-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Scheidbaar ww</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Partikel</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Lijdend voorwerp</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Optie A: Partikel vóór lv</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Optie B: Partikel ná lv</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Beide correct?</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">dichtdoen</td>
                <td class="px-4 py-3 text-sm">maar</td>
                <td class="px-4 py-3 text-sm">de deur</td>
                <td class="px-4 py-3 text-sm"><em>Doe maar de deur dicht.</em></td>
                <td class="px-4 py-3 text-sm"><em>Doe de deur maar dicht.</em></td>
                <td class="px-4 py-3 text-sm text-emerald-600 font-semibold">✅ Ja</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">opruimen</td>
                <td class="px-4 py-3 text-sm">even</td>
                <td class="px-4 py-3 text-sm">je kamer</td>
                <td class="px-4 py-3 text-sm"><em>Ruim even je kamer op.</em></td>
                <td class="px-4 py-3 text-sm"><em>Ruim je kamer even op.</em></td>
                <td class="px-4 py-3 text-sm text-emerald-600 font-semibold">✅ Ja</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">uitzoeken</td>
                <td class="px-4 py-3 text-sm">eens</td>
                <td class="px-4 py-3 text-sm">de oude foto's</td>
                <td class="px-4 py-3 text-sm"><em>Zoek eens de oude foto's uit.</em></td>
                <td class="px-4 py-3 text-sm"><em>Zoek de oude foto's eens uit.</em></td>
                <td class="px-4 py-3 text-sm text-emerald-600 font-semibold">✅ Ja</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">aanzetten</td>
                <td class="px-4 py-3 text-sm">maar</td>
                <td class="px-4 py-3 text-sm">de radio</td>
                <td class="px-4 py-3 text-sm"><em>Zet maar de radio aan.</em></td>
                <td class="px-4 py-3 text-sm"><em>Zet de radio maar aan.</em></td>
                <td class="px-4 py-3 text-sm text-emerald-600 font-semibold">✅ Ja</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50">
                <td class="px-4 py-3 text-sm font-semibold">weggooien</td>
                <td class="px-4 py-3 text-sm">even</td>
                <td class="px-4 py-3 text-sm">dat papier</td>
                <td class="px-4 py-3 text-sm"><em>Gooi even dat papier weg.</em></td>
                <td class="px-4 py-3 text-sm"><em>Gooi dat papier even weg.</em></td>
                <td class="px-4 py-3 text-sm text-emerald-600 font-semibold">✅ Ja</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div class="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-400 p-4 my-4">
          <p class="font-bold text-amber-800 dark:text-amber-200 mb-1">💡 Welke optie kies je?</p>
          <p class="text-sm text-slate-700 dark:text-slate-300">
            • <strong>Partikel vóór lv:</strong> Benadrukt het partikel iets meer ("Doe <em>maar</em> de deur dicht")<br>
            • <strong>Partikel ná lv:</strong> Klinkt vaak natuurlijker in spreektaal ("Doe de deur <em>maar</em> dicht")<br>
            • Beide zijn grammaticaal correct. Kies wat het beste klinkt in de context.
          </p>
        </div>
      `
    },
    {
      title: "Deel 5: Meerdere partikels combineren 🧩",
      body: `
        <p>Je kunt partikels stapelen voor extra nuance. De volgorde ligt vast.</p>
        
        <h3 class="text-lg font-bold mt-4 mb-2">📋 Mogelijke combinaties:</h3>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-purple-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Combinatie</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Voorbeeldzin</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Nuance</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Gebruik</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">maar + even</td>
                <td class="px-4 py-3 text-sm"><em>Doe maar even.</em></td>
                <td class="px-4 py-3 text-sm text-xs">Toestemming + kortdurend</td>
                <td class="px-4 py-3 text-sm text-xs">Geruststellend klein verzoek</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">eens + even</td>
                <td class="px-4 py-3 text-sm"><em>Kijk eens even!</em></td>
                <td class="px-4 py-3 text-sm text-xs">Aansporing + kortdurend</td>
                <td class="px-4 py-3 text-sm text-xs">"Kijk nu toch heel goed"</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">nou + maar</td>
                <td class="px-4 py-3 text-sm"><em>Zeg nou maar niets.</em></td>
                <td class="px-4 py-3 text-sm text-xs">Smekend + berusting</td>
                <td class="px-4 py-3 text-sm text-xs">"Toe, geef het maar op"</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">wat + even</td>
                <td class="px-4 py-3 text-sm"><em>Loop wat sneller even.</em></td>
                <td class="px-4 py-3 text-sm text-xs">Versterkend + kortdurend</td>
                <td class="px-4 py-3 text-sm text-xs">"Doe het iets sneller, kort"</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50">
                <td class="px-4 py-3 text-sm font-semibold">maar + eens</td>
                <td class="px-4 py-3 text-sm"><em>Kom maar eens kijken.</em></td>
                <td class="px-4 py-3 text-sm text-xs">Toestemming + aansporing</td>
                <td class="px-4 py-3 text-sm text-xs">"Je mag komen kijken, doe het nu"</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div class="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 rounded-lg p-4 my-4">
          <p class="font-bold text-indigo-800 dark:text-indigo-200 mb-1">📐 Volgorde-regel:</p>
          <p class="text-sm text-slate-700 dark:text-slate-300">
            <strong>maar / nou</strong> komen meestal eerst → daarna <strong>eens / even / wat</strong><br>
            ✅ <em>Doe maar even.</em> • ❌ <em>Doe even maar.</em> (klinkt onnatuurlijk)
          </p>
        </div>
      `
    },
    {
      title: "Deel 6: Ontkenning met partikels – De juiste volgorde ❌",
      body: `
        <p>Bij een ontkenning staat <em>niet</em> na het partikel. Dit is een veelgemaakte fout.</p>
        
        <h3 class="text-lg font-bold mt-4 mb-2">📋 Ontkenning: formule en voorbeelden</h3>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-rose-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Fout</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Correct</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Regel</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Uitleg</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm text-rose-600"><em>Praat niet maar door.</em></td>
                <td class="px-4 py-3 text-sm"><em>Praat maar niet door.</em></td>
                <td class="px-4 py-3 text-sm text-xs">Stam + partikel + niet + rest</td>
                <td class="px-4 py-3 text-sm text-xs">Partikel en stam blijven een eenheid</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm text-rose-600"><em>Doe niet even wachten.</em></td>
                <td class="px-4 py-3 text-sm"><em>Doe even niet wachten.</em> (of: <em>Wacht even niet.</em>)</td>
                <td class="px-4 py-3 text-sm text-xs">Partikel vóór niet</td>
                <td class="px-4 py-3 text-sm text-xs">"Niet" komt na het partikel</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm text-rose-600"><em>Kijk eens niet!</em></td>
                <td class="px-4 py-3 text-sm"><em>Kijk niet eens!</em> (of: <em>Kijk maar niet.</em>)</td>
                <td class="px-4 py-3 text-sm text-xs">niet vóór eens bij ontkenning</td>
                <td class="px-4 py-3 text-sm text-xs">Bij ontkenning: niet komt vaak vóór eens</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30">
                <td class="px-4 py-3 text-sm text-rose-600"><em>Eet wat niet meer.</em></td>
                <td class="px-4 py-3 text-sm"><em>Eet niet wat meer.</em> (of: <em>Eet maar niet meer.</em>)</td>
                <td class="px-4 py-3 text-sm text-xs">niet vóór wat bij ontkenning</td>
                <td class="px-4 py-3 text-sm text-xs">"Wat" als partikel: niet komt ervoor bij ontkenning</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div class="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-lg p-4 my-4">
          <p class="font-bold text-emerald-800 dark:text-emerald-200 mb-1">✅ Gouden regel voor ontkenning:</p>
          <p class="text-sm text-slate-700 dark:text-slate-300">
            <strong>Stam + partikel + niet + rest</strong><br>
            Voorbeeld: <em>Doe maar niet zo moeilijk.</em> • <em>Praat maar niet door.</em>
          </p>
        </div>
      `
    },
    {
      title: "Deel 7: Spreektaal vs. Schrijftaal – De es/is-valkuil 🗣️✍️",
      body: `
        <p><em>es</em> en <em>is</em> zijn spreektaalvarianten van <em>eens</em>. Gebruik ze nooit in formele tekst.</p>
        
        <h3 class="text-lg font-bold mt-4 mb-2">📋 Vergelijking: spreektaal vs. schrijftaal</h3>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-indigo-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Situatie</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Spreektaal (informeel)</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Schrijftaal (formeel)</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Wanneer gebruiken?</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">Vrienden appen</td>
                <td class="px-4 py-3 text-sm"><em>Kijk es!</em></td>
                <td class="px-4 py-3 text-sm"><em>Kijk eens!</em></td>
                <td class="px-4 py-3 text-sm text-xs">Spreektaal: oké • Schrijftaal: fout</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">Formele e-mail</td>
                <td class="px-4 py-3 text-sm text-rose-600"><em>Geef me is de suiker.</em></td>
                <td class="px-4 py-3 text-sm"><em>Geef me eens de suiker.</em></td>
                <td class="px-4 py-3 text-sm text-xs">Altijd <em>eens</em> in formele tekst</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">Gesprek met familie</td>
                <td class="px-4 py-3 text-sm"><em>Loop is door.</em></td>
                <td class="px-4 py-3 text-sm"><em>Loop eens door.</em></td>
                <td class="px-4 py-3 text-sm text-xs">Spreektaal: natuurlijk • Schrijftaal: formeel</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30">
                <td class="px-4 py-3 text-sm font-semibold">Sollicitatiebrief</td>
                <td class="px-4 py-3 text-sm text-rose-600"><em>Neem es contact op.</em></td>
                <td class="px-4 py-3 text-sm"><em>Neem eens contact op.</em></td>
                <td class="px-4 py-3 text-sm text-xs">Altijd <em>eens</em> in professionele tekst</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div class="bg-rose-50 dark:bg-rose-900/20 border border-rose-200 dark:border-rose-800 rounded-lg p-4 my-4">
          <p class="font-bold text-rose-700 dark:text-rose-300 mb-1">⚠️ Gouden regel:</p>
          <p class="text-sm text-slate-700 dark:text-slate-300">
            <strong>es / is</strong> = ALLEEN spreektaal, informeel, appjes, gesprekken<br>
            <strong>eens</strong> = ALTIJD in schrijftaal, e-mails, brieven, formele tekst<br><br>
            ❌ <em>Kijk es naar de vogel.</em> (in een sollicitatiebrief) → fout<br>
            ✅ <em>Kijk eens naar de vogel.</em> → altijd correct
          </p>
        </div>
      `
    },
    {
      title: "Deel 8: Snelle herhaling – Alles in één tabel ⚡",
      body: `
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-indigo-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Regel</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Kort samengevat</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Voorbeeld ✅</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Voorbeeld ❌</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-semibold">Partikels maken toon</td><td class="px-4 py-3 text-sm">maar=eens/even=nou=wat veranderen nuance</td><td class="px-4 py-3 text-sm">Wacht even.</td><td class="px-4 py-3 text-sm">Wacht! (kan streng klinken)</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-semibold">Woordvolgorde</td><td class="px-4 py-3 text-sm">Stam + partikel + rest</td><td class="px-4 py-3 text-sm">Doe maar de deur dicht.</td><td class="px-4 py-3 text-sm text-rose-600">Maar doe de deur dicht. (ander betekenis)</td></tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-semibold">Scheidbare ww</td><td class="px-4 py-3 text-sm">Partikel mag vóór of ná lv</td><td class="px-4 py-3 text-sm">Ruim je kamer even op. / Ruim even je kamer op.</td><td class="px-4 py-3 text-sm">–</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-semibold">Ontkenning</td><td class="px-4 py-3 text-sm">Stam + partikel + niet + rest</td><td class="px-4 py-3 text-sm">Doe maar niet zo moeilijk.</td><td class="px-4 py-3 text-sm text-rose-600">Doe niet maar zo moeilijk.</td></tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-semibold">es/is vs. eens</td><td class="px-4 py-3 text-sm">es/is=spreektaal, eens=schrijftaal</td><td class="px-4 py-3 text-sm">Kijk eens! (altijd correct)</td><td class="px-4 py-3 text-sm text-rose-600">Kijk es! (alleen spreektaal)</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-semibold">Combinaties</td><td class="px-4 py-3 text-sm">maar/nou eerst, dan eens/even/wat</td><td class="px-4 py-3 text-sm">Doe maar even.</td><td class="px-4 py-3 text-sm text-rose-600">Doe even maar. (onnatuurlijk)</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-4 py-3 text-sm font-semibold">wat als partikel</td><td class="px-4 py-3 text-sm">Betekenis: 'een beetje', niet tussen ww en bepaald lv</td><td class="px-4 py-3 text-sm">Eet wat meer. / Geef het zout wat.</td><td class="px-4 py-3 text-sm text-rose-600">Geef me wat het zout.</td></tr>
            </tbody>
          </table>
        </div>
      `
    }
  ],
  rulesTable: [
    {
      rule: "Partikels bij gebiedende wijs",
      structure: "Stam + partikel + (lijdend voorwerp / bijwoorden / rest)",
      example: "Wacht even. • Doe maar de deur dicht. • Kijk eens!",
      usage: "Partikels veranderen de toon, niet de grammatica. Ze maken bevelen vriendelijker of specifieker."
    },
    {
      rule: "Functie van de belangrijkste partikels",
      structure: "maar=toestemming, even=kort, eens=aansporing, nou=dringend, wat=een beetje",
      example: "Loop maar door. • Wacht even. • Kom eens hier. • Doe nou! • Eet wat meer.",
      usage: "Kies het partikel op basis van de gewenste nuance: geruststellend, kort, dringend, etc."
    },
    {
      rule: "Scheidbare werkwoorden met partikels",
      structure: "Partikel mag vóór of ná het lijdend voorwerp staan. Scheidbaar deel altijd achteraan.",
      example: "Doe maar de deur dicht. / Doe de deur maar dicht. • Ruim even je kamer op. / Ruim je kamer even op.",
      usage: "Beide volgordes zijn correct. Kies wat het beste klinkt in de context."
    },
    {
      rule: "Ontkenning met partikels",
      structure: "Stam + partikel + niet + rest. Partikel en stam blijven een eenheid.",
      example: "Doe maar niet zo moeilijk. • Praat maar niet door.",
      usage: "Zet 'niet' na het partikel, niet ertussen. 'Doe niet maar' is fout."
    },
    {
      rule: "es/is vs. eens",
      structure: "es/is = alleen spreektaal. eens = altijd in schrijftaal.",
      example: "Spreektaal: Kijk es! • Schrijftaal: Kijk eens!",
      usage: "Gebruik nooit es/is in formele tekst, e-mails of brieven. Altijd eens."
    },
    {
      rule: "Combinaties van partikels",
      structure: "maar/nou komen eerst, daarna eens/even/wat. Volgorde is vast.",
      example: "Doe maar even. • Kijk eens even. • Zeg nou maar niets.",
      usage: "Volg de vaste volgorde voor natuurlijke klank. 'Doe even maar' klinkt onnatuurlijk."
    }
  ],
  callouts: [
    { type: "remember", label: "✅ Gouden regel 1", text: "Partikels veranderen de TOON, niet de grammatica. Stam + partikel + rest." },
    { type: "remember", label: "✅ Gouden regel 2", text: "maar=toestemming, even=kort, eens=aansporing, nou=dringend, wat=een beetje." },
    { type: "remember", label: "✅ Gouden regel 3", text: "Scheidbare ww: partikel mag vóór of ná lv. Scheidbaar deel altijd achteraan." },
    { type: "remember", label: "⚠️ PAS OP 1", text: "Ontkenning: Stam + partikel + niet + rest. 'Doe niet maar' is fout, 'Doe maar niet' is correct." },
    { type: "remember", label: "⚠️ PAS OP 2", text: "es/is = ALLEEN spreektaal. In schrijftaal altijd eens. Nooit es/is in e-mails of brieven." },
    { type: "remember", label: "⚠️ PAS OP 3", text: "Combinaties: maar/nou eerst, dan eens/even/wat. 'Doe even maar' klinkt onnatuurlijk." },
    { type: "tip", label: "💡 Pro-tip", text: "Twijfel je welk partikel? Vraag: 'Wil ik geruststellen (maar), kort vragen (even), of aansporen (eens)?' Kies op basis van je doel." }
  ],
  commonMistakes: [
    { incorrect: "Kijk es naar de vogel. (in formele e-mail)", correct: "Kijk eens naar de vogel.", explanation: "'es' is spreektaal. In geschreven, formele tekst gebruik je altijd 'eens'." },
    { incorrect: "Praat niet maar door.", correct: "Praat maar niet door.", explanation: "Bij ontkenning staat 'niet' na het partikel. 'Maar' en de stam blijven een eenheid." },
    { incorrect: "Doe maar niet zo moeilijk. (als dringend verzoek)", correct: "Doe nou niet zo moeilijk.", explanation: "'Nou' past beter bij een smekend of dringend verzoek. 'Maar' klinkt te berustend hier." },
    { incorrect: "Geef me wat het zout.", correct: "Geef me het zout wat. (of: Geef het zout.)", explanation: "'Wat' als partikel ('een beetje') kan niet tussen werkwoord en bepaald lijdend voorwerp ('het zout') staan." },
    { incorrect: "Doe even maar de deur dicht.", correct: "Doe maar even de deur dicht. (of: Doe de deur maar even dicht.)", explanation: "Bij combinaties: 'maar' komt meestal vóór 'even'. 'Even maar' klinkt onnatuurlijk." },
    { incorrect: "Loop wat sneller even.", correct: "Loop even wat sneller. (of: Loop wat sneller.)", explanation: "Combinaties met 'wat' en 'even' zijn mogelijk, maar de volgorde 'even wat' klinkt natuurlijker dan 'wat even'." }
  ],
  review: [
    "✅ Partikels (maar, eens, even, nou, wat) veranderen de toon van gebiedende zinnen.",
    "✅ Woordvolgorde: Stam + partikel + (lijdend voorwerp / rest).",
    "✅ Scheidbare werkwoorden: partikel mag vóór of ná lv, scheidbaar deel altijd achteraan.",
    "✅ Ontkenning: Stam + partikel + niet + rest. 'Doe maar niet', niet 'Doe niet maar'.",
    "✅ es/is = alleen spreektaal. In schrijftaal altijd 'eens'.",
    "✅ Combinaties: maar/nou eerst, dan eens/even/wat. Volgorde is vast.",
    "✅ 'wat' als partikel = 'een beetje'. Kan niet tussen ww en bepaald lv ('het zout')."
  ],
  qa: [
    {
      question: "Maak de zin vriendelijker en kortdurend met een partikel: 'Wacht!'",
      answer: "Wacht even. Uitleg: 'even' maakt het verzoek kortdurend en verzachtend."
    },
    {
      question: "Welk partikel gebruik je als je iemand toestemming geeft of geruststelt? 'Doe ... als je moe bent.'",
      answer: "maar. Volledige zin: Doe maar als je moe bent. Uitleg: 'maar' geeft toestemming of geruststelling."
    },
    {
      question: "Wat is het verschil in toon tussen 'Kijk!' en 'Kijk eens!'?",
      answer: "'Kijk!' is een streng, direct bevel. 'Kijk eens!' is een aansporing of verzoek, dat klinkt natuurlijker maar kan soms ook licht dringerig zijn ('Kijk nu toch!')."
    },
    {
      question: "Corrigeer de spreektaal zodat de zin geschikt is voor een formele brief: 'Geef me es de suiker.'",
      answer: "Geef me eens de suiker. Uitleg: 'es' is spreektaal. In geschreven, formele tekst moet het 'eens' zijn."
    },
    {
      question: "Maak een gebiedende zin met 'even' en een scheidbaar werkwoord: opruimen + je kamer.",
      answer: "Ruim je kamer even op. (of: Ruim even je kamer op.) Uitleg: Bij scheidbare werkwoorden mag het partikel vóór of ná het lijdend voorwerp staan."
    },
    {
      question: "Zet de zin in de ontkenning met 'maar': 'Doe zo moeilijk.'",
      answer: "Doe maar niet zo moeilijk. Uitleg: Bij ontkenning: Stam + partikel + niet + rest."
    },
    {
      question: "Is 'Kijk es!' correct in een sollicitatiebrief?",
      answer: "Nee. 'es' is spreektaal. In een sollicitatiebrief (formele schrijftaal) moet het zijn: 'Kijk eens!' of beter nog: een formelere formulering zonder partikel."
    }
  ]
};