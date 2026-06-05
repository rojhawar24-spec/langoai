import type { GrammarLesson } from "../../types";

export const voltooidToekomendeTijd: GrammarLesson = {
  id: "nl-voltooid-toekomende-tijd-1",
  title: "De Voltooid Toekomende Tijd (VTTt): De Ultieme Masterclass",
  level: 3,
  topic: "Werkwoorden & Tijden",
  body: "Beheers de Voltooid Toekomende Tijd volledig: de deadline-regel, de strijd tussen 'hebben' en 'zijn', de beruchte bijzin-volgorde met 3 werkwoorden, en de C1 valkuilen.",
  overview:
    "Dit is de meest diepgaande en visueel overzichtelijke gids over de Voltooid Toekomende Tijd (VTTt) in het Nederlands. Je leert niet alleen de basisformule met drie werkwoorden, maar duikt in de nuances van 'hebben' vs 'zijn', de exacte focus-regels (deadline), en de wetenschap van de bijzin-volgorde. Met prachtige tabellen, uitgebreide PAS OP-waarschuwingen voor de grootste C1-valkuilen en 4 complexe oefenvragen, maak je voortaan geen enkele fout meer in het 'voltooien van de toekomst'!",
  anchorSectionId: "wat-is-vttt",
  exercises: [],
  timeExpressionsLabel: "De Tijdlijn & Formule van de VTTt ⏳",
  timeExpressions: {
    header: "Element | Regel | Voorbeeld",
    rows: [
      ["🟢 NU", "Jij spreekt de zin uit.", "Vandaag is maandag."],
      ["🟡 DEADLINE", "Toekomstig moment waar je naartoe kijkt.", "Vrijdag om 18:00 uur..."],
      ["🔴 VOLTOOIING", "Actie is al afgerond vóór de deadline.", "...**zal** ik het rapport al **afgemaakt hebben**."]
    ]
  },
  details: [
    {
      title: "Deel 1: Wat is de VTTt? (De Deadline-regel) ⏳",
      body: `
        <p>De Voltooid Toekomende Tijd (VTTt) is de tijd van de <strong>"voltooide actie in de toekomst"</strong>. Je gebruikt deze tijd <strong>alleen</strong> als je vanuit een toekomstig perspectief terugkijkt op een actie die op dat toekomstige moment <strong>al helemaal is afgerond</strong>.</p>
        
        <div class="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-emerald-700 dark:text-emerald-300 mb-2">🏆 PRO REGEL 1: De Context is Koning</h3>
          <p class="text-slate-700 dark:text-slate-300">De VTTt heeft bijna <strong>altijd</strong> een toekomstige tijdsaanduiding of een 'deadline' nodig (zoals <em>morgen om 12 uur, tegen die tijd, over een jaar, tegen 2030</em>). Zonder deze context klinkt de zin in het Nederlands onnatuurlijk en zweverig.</p>
        </div>

        <div class="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-4 border border-slate-200 dark:border-slate-700 my-4">
          <p class="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Voorbeeld uit het dagelijks leven:</p>
          <ul class="space-y-2 text-sm text-slate-600 dark:text-slate-400">
            <li>🗣️ <strong>NU (Maandag):</strong> Jij spreekt deze zin uit.</li>
            <li>⏰ <strong>DE DEADLINE (Vrijdag 18:00):</strong> Het toekomstige moment waar je naartoe kijkt.</li>
            <li>✅ <strong>DE VOLTOOIING (Vrijdag 17:00):</strong> De actie is al afgerond vóór de deadline.</li>
          </ul>
          <p class="mt-3 text-sm font-medium text-slate-800 dark:text-slate-200 italic">"Vrijdag om 18:00 uur <strong>zal</strong> ik het rapport al <strong>afgemaakt hebben</strong>."</p>
        </div>
      `
    },
    {
      title: "Deel 2: De Gouden Formule (3 Werkwoorden!) 🏗️",
      body: `
        <p>De VTTt is een samengestelde tijd met <strong>drie</strong> werkwoorden. Dit maakt de woordvolgorde uitdagend, maar de formule is wiskundig exact.</p>
        
        <div class="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 p-4 rounded-r-lg my-4 text-center">
          <h3 class="text-lg font-extrabold text-indigo-700 dark:text-indigo-300 mb-2">🏆 De Formule</h3>
          <p class="text-slate-700 dark:text-slate-300 font-mono text-sm md:text-base">ONDERWERP + <span class="text-indigo-600 dark:text-indigo-400 font-bold">ZULLEN (vervoegd, plek 2)</span> + ... + <span class="text-purple-600 dark:text-purple-400 font-bold">VOLTOOID DEELWOORD</span> + <span class="text-pink-600 dark:text-pink-400 font-bold">HEBBEN/ZIJN (infinitief)</span></p>
        </div>

        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-gradient-to-r from-indigo-600 to-purple-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Onderwerp</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Zullen (plek 2)</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Rest van de zin</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Voltooid Deelwoord</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Hebben/Zijn (eind)</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-semibold">Ik</td><td class="px-4 py-3 text-sm">zal</td><td class="px-4 py-3 text-sm">morgen het huis</td><td class="px-4 py-3 text-sm">schoongemaakt</td><td class="px-4 py-3 text-sm font-bold text-pink-600">hebben.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-semibold">Jij</td><td class="px-4 py-3 text-sm">zult</td><td class="px-4 py-3 text-sm">tegen die tijd</td><td class="px-4 py-3 text-sm">vertrokken</td><td class="px-4 py-3 text-sm font-bold text-pink-600">zijn.</td></tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-semibold">Hij / Zij</td><td class="px-4 py-3 text-sm">zal</td><td class="px-4 py-3 text-sm">over een uur</td><td class="px-4 py-3 text-sm">gegeten</td><td class="px-4 py-3 text-sm font-bold text-pink-600">hebben.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-4 py-3 text-sm font-semibold">Wij / Jullie</td><td class="px-4 py-3 text-sm">zullen</td><td class="px-4 py-3 text-sm">tegen 2030</td><td class="px-4 py-3 text-sm">verhuisd</td><td class="px-4 py-3 text-sm font-bold text-pink-600">zijn.</td></tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      title: "Deel 3: Hebben vs. Zijn (De Ultieme Strijd) ⚔️",
      body: `
        <p>Omdat de VTTt eindigt met de infinitieven <em>hebben</em> of <em>zijn</em>, gelden hier <strong>exact dezelfde regels</strong> als bij de VTT en VVT. De keuze hangt 100% af van het hoofdwerkwoord.</p>
        
        <div class="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-emerald-700 dark:text-emerald-300 mb-2">🏆 PRO REGEL 2 & 3</h3>
          <ul class="space-y-2 list-none pl-0 text-slate-700 dark:text-slate-300">
            <li>✅ <strong>ZIJN:</strong> Bij werkwoorden die een <strong>verplaatsing van A naar B</strong> aangeven, een <strong>verandering van toestand</strong>, of specifieke <strong>wederkerende werkwoorden</strong> (zich + ww van verplaatsing).</li>
            <li>✅ <strong>HEBBEN:</strong> Bij alle andere werkwoorden (duur, statisch, mentale acties, of werkwoorden met een lijdend voorwerp).</li>
          </ul>
        </div>

        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-gradient-to-r from-emerald-600 to-teal-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Categorie</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Hulpwerkwoord</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Voorbeeldwerkwoorden</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">Verplaatsing (A ➔ B)</td>
                <td class="px-4 py-3 text-sm font-bold text-emerald-600">Zijn</td>
                <td class="px-4 py-3 text-sm text-xs">gaan, komen, lopen, fietsen, vertrekken, vallen, arriveren, verhuizen</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">Verandering van toestand</td>
                <td class="px-4 py-3 text-sm font-bold text-emerald-600">Zijn</td>
                <td class="px-4 py-3 text-sm text-xs">worden, groeien, sterven, veranderen, gebeuren, slagen, beginnen</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">Mentale Wederkerende acties</td>
                <td class="px-4 py-3 text-sm font-bold text-amber-600">Hebben</td>
                <td class="px-4 py-3 text-sm text-xs">zich vergissen, zich herinneren, zich afvragen</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">Duur / Geen verplaatsing</td>
                <td class="px-4 py-3 text-sm font-bold text-amber-600">Hebben</td>
                <td class="px-4 py-3 text-sm text-xs">slapen, wonen, werken, studeren, wachten, lezen</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50">
                <td class="px-4 py-3 text-sm font-semibold">Met Lijdend Voorwerp</td>
                <td class="px-4 py-3 text-sm font-bold text-amber-600">Hebben</td>
                <td class="px-4 py-3 text-sm text-xs">kopen, eten, maken, zien, geven, schrijven, vergeten</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="bg-rose-50 dark:bg-rose-900/20 border-l-4 border-rose-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-rose-700 dark:text-rose-300 mb-2">🚨 PAS OP! DE 'ZICH' VALKUIL (SLIMME NUANCE)</h3>
          <p class="text-sm text-slate-700 dark:text-slate-300 mb-2">Niet alle 'zich'-werkwoorden krijgen 'zijn'. De regel is: gaat het om fysieke verplaatsing? Dan <strong>zijn</strong>. Gaat het om een mentale toestand? Dan <strong>hebben</strong>.</p>
          <ul class="space-y-1 text-sm text-slate-700 dark:text-slate-300">
            <li>✅ <em>Hij zal zich <strong>hebben vergist</strong>.</em> (Mentaal)</li>
            <li>✅ <em>Hij zal zich <strong>hebben herinnerd</strong>.</em> (Mentaal)</li>
            <li>✅ <em>Hij zal zich <strong>zijn gaan haasten</strong>.</em> (Fysieke verplaatsing)</li>
          </ul>
        </div>
      `
    },
    {
      title: "Deel 4: Woordvolgorde (De Grootste Nightmare) 📏",
      body: `
        <p>Omdat er drie werkwoorden in de zin zitten, is de woordvolgorde de allergrootste valkuil van de VTTt. De positie van 'zal/zullen' verandert drastisch afhankelijk van het zinstype.</p>
        
        <div class="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-indigo-700 dark:text-indigo-300 mb-2">🏆 PRO REGEL 4 & 5</h3>
          <ul class="space-y-2 list-none pl-0 text-slate-700 dark:text-slate-300">
            <li>✅ <strong>Hoofdzin:</strong> 'Zal/zullen' staat op <strong>plek 2</strong>. Het voltooid deelwoord en 'hebben/zijn' staan <strong>helemaal achteraan</strong>. Volgorde: Eerst Voltooid Deelwoord, DAN hebben/zijn.</li>
            <li>✅ <strong>Bijzin:</strong> Het vervoegde werkwoord ('zal/zullen') gaat <strong>helemaal naar het einde</strong>, achter de infinitieven 'hebben/zijn' en het voltooid deelwoord!</li>
          </ul>
        </div>

        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-gradient-to-r from-purple-600 to-pink-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Zinstype</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Structuur</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Voorbeeld</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">Hoofdzin</td>
                <td class="px-4 py-3 text-sm text-xs">Onderwerp + <strong>zal</strong> + ... + <strong>Voltooid Deelwoord</strong> + <strong>hebben/zijn</strong></td>
                <td class="px-4 py-3 text-sm">Ik <strong>zal</strong> de taart morgen <strong>gebakken hebben</strong>.</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold text-rose-600">Bijzin</td>
                <td class="px-4 py-3 text-sm text-xs">Voegwoord + onderwerp + ... + <strong>Voltooid Deelwoord</strong> + <strong>hebben/zijn</strong> + <strong>zal</strong></td>
                <td class="px-4 py-3 text-sm">...omdat ik de taart morgen <strong>gebakken zal hebben</strong>.</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50">
                <td class="px-4 py-3 text-sm font-semibold">Vraag</td>
                <td class="px-4 py-3 text-sm text-xs"><strong>Zal</strong> + onderwerp + ... + <strong>Voltooid Deelwoord</strong> + <strong>hebben/zijn</strong>?</td>
                <td class="px-4 py-3 text-sm"><strong>Zal</strong> jij de taart morgen <strong>gebakken hebben</strong>?</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="bg-rose-50 dark:bg-rose-900/20 border-l-4 border-rose-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-rose-700 dark:text-rose-300 mb-2">🚨 PAS OP! DE BIJZIN-VALKUIL (DE GROOTSTE FOUT!)</h3>
          <p class="text-sm text-slate-700 dark:text-slate-300 mb-2">In een bijzin mag 'zal' <strong>NOOIT</strong> voor 'hebben/zijn' of het voltooid deelwoord staan. Dit is de meest gemaakte fout door gevorderde cursisten.</p>
          <ul class="space-y-1 text-sm text-slate-700 dark:text-slate-300">
            <li>❌ <em>Fout:</em> ...omdat ik de taart morgen <strong>zal gebakken hebben</strong>.</li>
            <li>❌ <em>Fout:</em> ...omdat ik de taart morgen <strong>hebben gebakken zal</strong>.</li>
            <li>✅ <em>Correct:</em> ...omdat ik de taart morgen <strong>gebakken zal hebben</strong>.</li>
          </ul>
        </div>
      `
    },
    {
      title: "Deel 5: VTTt vs. OTT (De Nuance) 🎭",
      body: `
        <p>Wanneer gebruik je de VTTt en wanneer de gewone Onvoltooid Toekomende Tijd (OTT: <em>Ik zal morgen een boek lezen</em>)? Het verschil zit in de focus en de tijdsbeleving.</p>
        
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-gradient-to-r from-teal-600 to-cyan-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Tijd</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Focus</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Voorbeeldzin</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Betekenis voor de luisteraar</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">OTT</td>
                <td class="px-4 py-3 text-sm text-xs">De <strong>actie</strong> zelf die in de toekomst plaatsvindt.</td>
                <td class="px-4 py-3 text-sm">Morgen om 15:00 uur <strong>zal</strong> ik een boek <strong>lezen</strong>.</td>
                <td class="px-4 py-3 text-sm text-xs">Om 15:00 uur begin ik met lezen. De actie vindt dan plaats.</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30">
                <td class="px-4 py-3 text-sm font-semibold">VTTt</td>
                <td class="px-4 py-3 text-sm text-xs">De <strong>voltooiing</strong> van de actie vóór een toekomstig moment.</td>
                <td class="px-4 py-3 text-sm">Morgen om 15:00 uur <strong>zal</strong> ik het boek <strong>gelezen hebben</strong>.</td>
                <td class="px-4 py-3 text-sm text-xs">Om 15:00 uur ben ik al klaar. Ik ben eerder begonnen en het is dan af.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-amber-700 dark:text-amber-300 mb-2">🚨 PAS OP! DE 'VOORSPELLING' VALKUIL</h3>
          <p class="text-sm text-slate-700 dark:text-slate-300 mb-2">Gebruik de VTTt <strong>niet</strong> voor simpele, algemene voorspellingen over de toekomst. Gebruik dan de OTT of de tegenwoordige tijd. De VTTt vereist een specifiek moment van voltooiing.</p>
          <ul class="space-y-1 text-sm text-slate-700 dark:text-slate-300">
            <li>❌ <em>Onnatuurlijk:</em> Morgen zal het geregend hebben.</li>
            <li>✅ <em>Natuurlijk (met deadline):</em> Morgen om 12:00 uur <strong>zal</strong> het al drie uur <strong>geregend hebben</strong>.</li>
            <li>✅ <em>Natuurlijk (voorspelling):</em> Morgen <strong>zal</strong> het <strong>regenen</strong>.</li>
          </ul>
        </div>
      `
    }
  ],
  rulesTable: [
    {
      rule: "De Deadline-regel",
      structure: "De VTTt vereist bijna altijd een toekomstige tijdsaanduiding of deadline.",
      example: "Tegen 2030 zal ik een huis hebben gekocht.",
      usage: "Zonder context (zoals 'tegen die tijd' of 'morgen om 12 uur') klinkt de VTTt zweverig en onnatuurlijk."
    },
    {
      rule: "De 3-werkwoorden Formule",
      structure: "Onderwerp + zal/zullen + ... + Voltooid Deelwoord + hebben/zijn.",
      example: "Ik zal de brief morgen geschreven hebben.",
      usage: "De vaste volgorde achteraan is altijd: Eerst Voltooid Deelwoord, DAN hebben/zijn."
    },
    {
      rule: "Hebben vs. Zijn",
      structure: "Zijn = verplaatsing (A➔B) of verandering van toestand. Hebben = duur, statisch, mentaal, of lijdend voorwerp.",
      example: "Hij zal zijn vertrokken. / Hij zal zich hebben vergist.",
      usage: "Let op de nuance bij 'zich'-werkwoorden: mentaal = hebben, fysiek = zijn."
    },
    {
      rule: "Bijzin-volgorde (De 3-stapel)",
      structure: "In een bijzin gaat 'zal/zullen' helemaal naar het einde, achter 'hebben/zijn' en het voltooid deelwoord.",
      example: "...omdat ik de brief morgen geschreven zal hebben.",
      usage: "Zeg NOOIT '...omdat ik de brief morgen zal geschreven hebben'. 'Zal' is het allerlaatste woord."
    },
    {
      rule: "Modale werkwoorden in VTTt",
      structure: "Bij modale werkwoorden komt het modale werkwoord achteraan, vóór 'hebben'.",
      example: "Ik zal het gedaan moeten hebben.",
      usage: "De volgorde is: zal + ... + voltooid deelwoord + modaal (inf) + hebben."
    }
  ],
  callouts: [
    { type: "remember", label: "🏆 PRO REGEL 1", text: "VTTt = voltooide actie in de toekomst. Gebruik altijd een deadline (tegen die tijd, morgen om 12 uur)." },
    { type: "remember", label: "🏆 PRO REGEL 2", text: "Zijn = verplaatsing (A➔B) of verandering. Hebben = duur, statisch, mentaal, of lijdend voorwerp." },
    { type: "remember", label: "⚠️ PAS OP 1", text: "Bijzin-volgorde: Voltooid Deelwoord + hebben/zijn + zal. 'Zal' is ALTIJD het allerlaatste woord." },
    { type: "remember", label: "⚠️ PAS OP 2", text: "Zeg NOOIT 'Ik zal het boek hebben gelezen'. De volgorde is: 'Ik zal het boek gelezen hebben'." },
    { type: "remember", label: "⚠️ PAS OP 3", text: "Gebruik de VTTt niet voor simpele voorspellingen. Gebruik dan de OTT (Ik zal morgen regenen)." },
    { type: "tip", label: "💡 Pro-tip", text: "Twijfel je over 'hebben' of 'zijn' bij een 'zich'-werkwoord? Vraag je af: is het een fysieke verplaatsing (zijn) of een mentale actie (hebben)?" }
  ],
  commonMistakes: [
    { incorrect: "...omdat hij morgen zal vertrokken zijn.", correct: "...omdat hij morgen vertrokken zal zijn.", explanation: "In een bijzin gaat 'zal' als allerlaatste woord, achter het voltooid deelwoord en 'zijn'." },
    { incorrect: "Morgen zal ik naar huis hebben gegaan.", correct: "Morgen zal ik naar huis zijn gegaan.", explanation: "'Gaan' is verplaatsing (A➔B). De infinitief aan het einde moet dus 'zijn' zijn, niet 'hebben'." },
    { incorrect: "Volgend jaar zal ik een huis hebben gekocht.", correct: "Tegen eind volgend jaar zal ik een huis hebben gekocht.", explanation: "Voeg een tijdsaanduiding toe ('tegen...') die de voltooiing markeert, anders klinkt de VTTt zweverig." },
    { incorrect: "Ik zal het boek hebben gelezen.", correct: "Ik zal het boek gelezen hebben.", explanation: "De vaste volgorde achteraan is altijd: Eerst Voltooid Deelwoord, DAN hebben/zijn." },
    { incorrect: "Ik zal het moeten gedaan hebben.", correct: "Ik zal het gedaan moeten hebben.", explanation: "Bij modale werkwoorden in de VTTt komt 'moeten/kunnen' achteraan, vóór 'hebben'." },
    { incorrect: "Hij zal zich zijn vergist.", correct: "Hij zal zich hebben vergist.", explanation: "'Zich vergissen' is een mentale handeling zonder fysieke verplaatsing, dus het krijgt 'hebben', niet 'zijn'." }
  ],
  review: [
    "✅ VTTt = voltooide actie in de toekomst (vereist een deadline/context).",
    "✅ Formule: Onderwerp + zal/zullen + ... + Voltooid Deelwoord + hebben/zijn.",
    "✅ Zijn = verplaatsing (A➔B) of verandering van toestand.",
    "✅ Hebben = duur, statisch, mentale acties (zich vergissen), of lijdend voorwerp.",
    "✅ Hoofdzin: Ik zal het boek gelezen hebben.",
    "✅ Bijzin: ...omdat ik het boek gelezen zal hebben. ('Zal' gaat helemaal naar het einde!).",
    "✅ Modaal: Ik zal het gedaan moeten hebben.",
    "✅ Gebruik de VTTt niet voor simpele voorspellingen (gebruik dan OTT)."
  ],
  qa: [
    {
      question: "Maak van deze twee zinnen één complexe zin met 'omdat'. Let extreem goed op de plek van 'zult', 'aangekomen', en 'zijn'. Zin A: Ik ben gerust. Zin B: Jij zult tegen die tijd al op het vliegveld zijn aangekomen.",
      answer: "Ik ben gerust, omdat jij tegen die tijd al op het vliegveld aangekomen zult zijn. (Uitleg: In een bijzin gaat het vervoegde hulpwerkwoord ('zult') helemaal naar het einde, achter het voltooid deelwoord ('aangekomen') en het infinitieve hulpwerkwoord ('zijn'))."
    },
    {
      question: "Vul het juiste hulpwerkwoord in (hebben of zijn) en leg in één zin uit waarom. 1. 'Over tien jaar ___ wij eindelijk ons droomhuis ___ (bouwen).' 2. 'Over tien jaar ___ wij eindelijk naar ons droomhuis ___ (verhuizen).'",
      answer: "1. hebben / gebouwd. ('Bouwen' is een actie met een lijdend voorwerp en duidt op duur/activiteit, geen verplaatsing van het onderwerp zelf). 2. zijn / verhuisd. ('Verhuizen' is een duidelijke verplaatsing van locatie A naar locatie B, dus 'zijn')."
    },
    {
      question: "Wat is het exacte, praktische verschil in betekenis voor de luisteraar tussen: 1. 'Morgen om 15:00 uur zal ik de presentatie geven.' 2. 'Morgen om 15:00 uur zal ik de presentatie hebben gegeven.'",
      answer: "In zin 1 (OTT) begin je om 15:00 uur met de presentatie. De actie vindt dan plaats. In zin 2 (VTTt) is de presentatie om 15:00 uur al helemaal klaar. Je bent om 15:00 uur al klaar en misschien al op weg naar huis. De focus ligt op de voltooiing vóór dat tijdstip."
    },
    {
      question: "Een student schrijft: 'Ik zal morgen een appel hebben gegeten.' Deze zin is grammaticaal correct, maar klinkt erg vreemd. Waarom is dat, en hoe maak je de zin wél natuurlijk?",
      answer: "De zin klinkt vreemd omdat de VTTt een specifiek moment of deadline nodig heeft waarop de actie al afgerond is. 'Morgen' is te vaag. De correcte, natuurlijke zin is: 'Morgen om 12:00 uur zal ik die appel al hebben gegeten.' (Of: 'Tegen de middag zal ik...')."
    }
  ]
};