import type { GrammarLesson } from "../../types";

export const onscheidbareWerkwoorden: GrammarLesson = {
  id: "nl-onscheidbare-werkwoorden-1",
  title: "Onscheidbare Werkwoorden & Klemtoon: De Ultieme Masterclass",
  level: 3,
  topic: "Werkwoorden & Grammatica",
  body: "Beheers onscheidbare werkwoorden volledig: de 6 'ge-vreters', het cruciale verschil in klemtoon, de dubbelgangers (doorlopen vs dóórlopen), en de valkuilen in de voltooide tijd.",
  overview:
    "Dit is de meest diepgaande, visueel schitterende en waarschuwing-rijke gids over onscheidbare werkwoorden in het Nederlands. Je leert de 6 voorvoegsels die de 'ge-' opeten, ontdekt hoe klemtoon de betekenis volledig verandert, en beheerst de lastige dubbelgangers zoals 'doorlopen'. Met prachtige tabellen, strikte PRO-regels, een overvloed aan PAS OP-waarschuwingen en 4 complexe oefenvragen spreek en schrijf je voortaan als een ware taalkundige!",
  anchorSectionId: "wat-is-onscheidbaar",
  exercises: [],
  timeExpressionsLabel: "Scheidbaar vs. Onscheidbaar in Één Oogopslag 🔗",
  timeExpressions: {
    header: "Type | Voorbeeld | Hoofdzin (Tegenwoordige Tijd) | Betekenis",
    rows: [
      ["🔪 **Scheidbaar**", "*opbellen*", "Ik **bel** mijn moeder **op**.", "Ik bel mijn moeder (actie)."],
      ["🔗 **Onscheidbaar**", "*ontbijten*", "Ik **ontbijt**.", "Ik eet 's ochtends (blijft aan elkaar)."]
    ]
  },
  details: [
    {
      title: "Deel 1: Wat is een onscheidbaar werkwoord? 🔗",
      body: `
        <p>In het Nederlands hebben veel werkwoorden een <strong>voorvoegsel</strong> (prefix) dat vast aan de stam geplakt zit. Bij <strong>onscheidbare werkwoorden</strong> blijven het voorvoegsel en het werkwoord <strong>ALTIJD aan elkaar</strong>, in elke zinsvorm. Je kunt ze <strong>NOOIT</strong> uit elkaar trekken!</p>
        <p class="text-sm text-slate-700 dark:text-slate-300 mb-4">Vergelijk dit met <strong>scheidbare werkwoorden</strong> (zoals <em>opbellen, meenemen</em>), die je wél uit elkaar haalt in een hoofdzin.</p>
        
        <div class="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-emerald-700 dark:text-emerald-300 mb-2">🏆 PRO REGEL 1</h3>
          <p class="text-slate-700 dark:text-slate-300">Bij een onscheidbaar werkwoord blijft het voorvoegsel <strong>ALTIJD</strong> vastgeplakt aan de stam, of de zin nu een hoofdzin, bijzin, vraag of gebiedende wijs is.</p>
        </div>
      `
    },
    {
      title: "Deel 2: De 6 Onscheidbare Voorvoegsels (De 'Ge-Vreters') 🧛",
      body: `
        <p>Er zijn <strong>zes</strong> voorvoegsels die een werkwoord <strong>ALTIJD onscheidbaar</strong> maken. Deze voorvoegsels "vreten" ook de <strong>ge-</strong> op bij het voltooid deelwoord!</p>
        
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-gradient-to-r from-indigo-600 to-purple-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Voorvoegsel</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Betekenis</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Voorbeelden</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Voltooid Deelwoord</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-bold text-indigo-600">be-</td>
                <td class="px-4 py-3 text-sm text-xs">Vaak: iets doen met een object</td>
                <td class="px-4 py-3 text-sm text-xs">betalen, begrijpen, besluiten</td>
                <td class="px-4 py-3 text-sm font-semibold text-emerald-600">betaald, begrepen, besloten</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-bold text-indigo-600">ge-</td>
                <td class="px-4 py-3 text-sm text-xs">Vaak: collectief of resultaat</td>
                <td class="px-4 py-3 text-sm text-xs">gebruiken, gebeuren, gedragen</td>
                <td class="px-4 py-3 text-sm font-semibold text-emerald-600">gebruikt, gebeurd, gedragen</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-bold text-indigo-600">her-</td>
                <td class="px-4 py-3 text-sm text-xs">Opnieuw, nog een keer</td>
                <td class="px-4 py-3 text-sm text-xs">herhalen, herstellen, herinneren</td>
                <td class="px-4 py-3 text-sm font-semibold text-emerald-600">herhaald, hersteld, herinnerd</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-bold text-indigo-600">ont-</td>
                <td class="px-4 py-3 text-sm text-xs">Begin, verwijdering, ontsnapping</td>
                <td class="px-4 py-3 text-sm text-xs">ontdekken, ontvangen, ontsnappen</td>
                <td class="px-4 py-3 text-sm font-semibold text-emerald-600">ontdekt, ontvangen, ontsnapt</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-bold text-indigo-600">ver-</td>
                <td class="px-4 py-3 text-sm text-xs">Verandering, fout, voorbij</td>
                <td class="px-4 py-3 text-sm text-xs">veranderen, vergeten, verkopen</td>
                <td class="px-4 py-3 text-sm font-semibold text-emerald-600">veranderd, vergeten, verkocht</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30">
                <td class="px-4 py-3 text-sm font-bold text-indigo-600">er-</td>
                <td class="px-4 py-3 text-sm text-xs">Uit, weg (vaak oud)</td>
                <td class="px-4 py-3 text-sm text-xs">ergeren, erkennen, ervaren</td>
                <td class="px-4 py-3 text-sm font-semibold text-emerald-600">geërgerd, erkend, ervaren</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="bg-rose-50 dark:bg-rose-900/20 border-l-4 border-rose-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-rose-700 dark:text-rose-300 mb-2">🚨 PAS OP! DE 'GE-' VALKUIL!</h3>
          <p class="text-sm text-slate-700 dark:text-slate-300 mb-2">Deze zes voorvoegsels zorgen ervoor dat het voltooid deelwoord <strong>GEEN</strong> extra <em>ge-</em> krijgt!</p>
          <ul class="space-y-1 text-sm text-slate-700 dark:text-slate-300">
            <li>❌ <em>Fout:</em> Ik heb het <strong>ge</strong>betaald. / Ik heb het <strong>ge</strong>vergeten.</li>
            <li>✅ <em>Correct:</em> Ik heb het <strong>betaald</strong>. / Ik heb het <strong>vergeten</strong>.</li>
          </ul>
        </div>
      `
    },
    {
      title: "Deel 3: De Klemtoon: Het Allerbelangrijkste Verschil! 🎵",
      body: `
        <p>Dit is het <strong>geheim</strong> van de onscheidbare werkwoorden. Hoe weet je of een werkwoord scheidbaar of onscheidbaar is als je het hoort? <strong>De klemtoon (de klem op de lettergreep) vertelt het je!</strong></p>
        
        <div class="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-indigo-700 dark:text-indigo-300 mb-2">🏆 PRO REGEL 2</h3>
          <ul class="space-y-2 list-none pl-0 text-slate-700 dark:text-slate-300">
            <li>✅ <strong>Onscheidbaar:</strong> De klemtoon ligt op de <strong>stam</strong> (het hoofdwerkwoord). Het voorvoegsel is <strong>onbeklemtoond</strong>.</li>
            <li>✅ <strong>Scheidbaar:</strong> De klemtoon ligt op het <strong>voorvoegsel</strong>. De stam is <strong>onbeklemtoond</strong>.</li>
          </ul>
        </div>

        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-gradient-to-r from-teal-600 to-cyan-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Werkwoord</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Uitspraak (Klemtoon)</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Type</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Betekenis</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">doorlopen</td>
                <td class="px-4 py-3 text-sm">door<strong>ló</strong>pen</td>
                <td class="px-4 py-3 text-sm text-xs font-bold text-indigo-600">Onscheidbaar</td>
                <td class="px-4 py-3 text-sm text-xs">Blijven lopen, doorgaan met lopen / afmaken</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">doorlopen</td>
                <td class="px-4 py-3 text-sm"><strong>dóór</strong>lopen</td>
                <td class="px-4 py-3 text-sm text-xs font-bold text-purple-600">Scheidbaar</td>
                <td class="px-4 py-3 text-sm text-xs">Ergens doorheen lopen (een ruimte)</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">omarmen</td>
                <td class="px-4 py-3 text-sm">om<strong>ár</strong>men</td>
                <td class="px-4 py-3 text-sm text-xs font-bold text-indigo-600">Onscheidbaar</td>
                <td class="px-4 py-3 text-sm text-xs">Iemand in je armen sluiten</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30">
                <td class="px-4 py-3 text-sm font-semibold">omgooien</td>
                <td class="px-4 py-3 text-sm"><strong>óm</strong>gooien</td>
                <td class="px-4 py-3 text-sm text-xs font-bold text-purple-600">Scheidbaar</td>
                <td class="px-4 py-3 text-sm text-xs">Iets omver gooien</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="bg-rose-50 dark:bg-rose-900/20 border-l-4 border-rose-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-rose-700 dark:text-rose-300 mb-2">🚨 PAS OP! DE KLEMTOON-VALKUIL!</h3>
          <p class="text-sm text-slate-700 dark:text-slate-300">Als je de verkeerde klemtoon gebruikt, begrijpt de luisteraar een <strong>compleet ander woord</strong>!</p>
          <ul class="space-y-1 text-sm text-slate-700 dark:text-slate-300 mt-2">
            <li>🗣️ <em>"Ik <strong>doorloop</strong> de cursus."</em> (Klemtoon op 'loop' ➔ onscheidbaar = ik maak de cursus van begin tot eind af).</li>
            <li>🗣️ <em>"Ik <strong>loop door</strong> de gang."</em> (Klemtoon op 'door' ➔ scheidbaar = ik loop fysiek door de gang heen).</li>
          </ul>
        </div>
      `
    },
    {
      title: "Deel 4: Werkwoorden Die Beide Kunnen: De Dubbelgangers 🎭",
      body: `
        <p>Er zijn een aantal werkwoorden die <strong>zowel scheidbaar als onscheidbaar</strong> kunnen zijn. Het verschil zit in de <strong>klemtoon</strong>, de <strong>betekenis</strong> en het <strong>voltooid deelwoord</strong>!</p>
        
        <h3 class="text-lg font-bold mt-6 mb-3 text-slate-800 dark:text-slate-200">A. DOORLOPEN (De Klassieker)</h3>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-gradient-to-r from-amber-600 to-orange-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Type</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Uitspraak</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Betekenis</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Voltooid Deelwoord</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">Onscheidbaar</td>
                <td class="px-4 py-3 text-sm">door<strong>ló</strong>pen</td>
                <td class="px-4 py-3 text-sm text-xs">Blijven lopen, niet stoppen / afmaken</td>
                <td class="px-4 py-3 text-sm font-bold text-emerald-600">doorlopen</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30">
                <td class="px-4 py-3 text-sm font-semibold">Scheidbaar</td>
                <td class="px-4 py-3 text-sm"><strong>dóór</strong>lopen</td>
                <td class="px-4 py-3 text-sm text-xs">Fysiek ergens doorheen lopen</td>
                <td class="px-4 py-3 text-sm font-bold text-purple-600">doorgelopen</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 rounded-r-lg my-4">
          <h3 class="text-base font-extrabold text-amber-700 dark:text-amber-300 mb-2">🚨 PAS OP! DE VOLTOOID DEELWOORD VALKUIL!</h3>
          <ul class="space-y-2 text-sm text-slate-700 dark:text-slate-300">
            <li>🔹 <strong>Onscheidbaar doorlópen:</strong> Het voltooid deelwoord is <strong>doorlopen</strong> (geen <em>ge-</em>, want 'door' is hier een onscheidbaar voorvoegsel). <br><em>✅ Hij heeft de cursus <strong>doorlopen</strong>.</em></li>
            <li>🔹 <strong>Scheidbaar dóórlopen:</strong> Het voltooid deelwoord is <strong>doorgelopen</strong> (wél <em>ge-</em>, want het is scheidbaar en de 'ge-' komt tussen 'door' en 'lopen'). <br><em>✅ Hij is de tunnel <strong>doorgelopen</strong>.</em></li>
          </ul>
        </div>
      `
    },
    {
      title: "Deel 5: Vervoeging en de Bijzin 🏗️📏",
      body: `
        <p>Hoe vervoeg je een onscheidbaar werkwoord? Het goede nieuws: <strong>het verandert niet!</strong> Het blijft altijd aan elkaar, in elke tijd en elke zinsvorm.</p>
        
        <h3 class="text-lg font-bold mt-6 mb-3 text-slate-800 dark:text-slate-200">A. De Voltooide Tijd (VTT / VVT)</h3>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-gradient-to-r from-purple-600 to-pink-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Tijd</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Doorlópen (Onscheidbaar)</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Dóórlopen (Scheidbaar)</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">VTT</td>
                <td class="px-4 py-3 text-sm">Ik <strong>heb</strong> de cursus <strong>doorlopen</strong>. (Geen <em>ge-</em>)</td>
                <td class="px-4 py-3 text-sm">Ik <strong>ben</strong> de tunnel <strong>doorgelopen</strong>. (Wél <em>ge-</em>)</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30">
                <td class="px-4 py-3 text-sm font-semibold">VVT</td>
                <td class="px-4 py-3 text-sm">Ik <strong>had</strong> de cursus <strong>doorlopen</strong>.</td>
                <td class="px-4 py-3 text-sm">Ik <strong>was</strong> de tunnel <strong>doorgelopen</strong>.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="bg-rose-50 dark:bg-rose-900/20 border-l-4 border-rose-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-rose-700 dark:text-rose-300 mb-2">🚨 PAS OP! DE HULPWERKWOORD VALKUIL!</h3>
          <p class="text-sm text-slate-700 dark:text-slate-300 mb-2">Bij scheidbare werkwoorden met een verplaatsing (zoals <em>dóórlopen</em>) gebruik je vaak <strong>zijn</strong> in de voltooide tijd. Bij onscheidbare werkwoorden (zoals <em>doorlópen</em>) gebruik je <strong>hebben</strong>, omdat het geen fysieke verplaatsing is.</p>
          <ul class="space-y-1 text-sm text-slate-700 dark:text-slate-300">
            <li>✅ <em>Ik <strong>ben</strong> de straat <strong>dóorgelopen</strong>.</em> (Verplaatsing ➔ zijn).</li>
            <li>✅ <em>Ik <strong>heb</strong> de cursus <strong>doorlópen</strong>.</em> (Figuurlijk, geen verplaatsing ➔ hebben).</li>
          </ul>
        </div>

        <h3 class="text-lg font-bold mt-8 mb-3 text-slate-800 dark:text-slate-200">B. De Bijzin: Geen Verschil!</h3>
        <p class="text-sm text-slate-700 dark:text-slate-300 mb-4">In een bijzin verandert er <strong>niets</strong> aan de scheidbaarheid. Het werkwoord blijft altijd aan elkaar (bij onscheidbaar) of gaat uit elkaar (bij scheidbaar), maar de volgorde is hetzelfde: het vervoegde deel staat achteraan.</p>
        <div class="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-4 border border-slate-200 dark:border-slate-700">
          <ul class="space-y-2 text-sm text-slate-700 dark:text-slate-300">
            <li>🔹 <strong>Onscheidbaar:</strong> <em>...omdat ik het boek <strong>doorloop</strong>.</em> (Ik lees het van begin tot eind).</li>
            <li>🔹 <strong>Scheidbaar:</strong> <em>...omdat ik het bos <strong>doorloop</strong>.</em> (Ik loop door het bos heen. Let op: in de bijzin zien ze er hetzelfde uit, alleen de context geeft de oplossing!)</li>
          </ul>
        </div>
      `
    }
  ],
  rulesTable: [
    {
      rule: "De 6 Ge-Vreters",
      structure: "be-, ge-, her-, ont-, ver-, er- maken een werkwoord ALTIJD onscheidbaar en eten de 'ge-' op.",
      example: "betalen ➔ betaald. (Niet: gebetaald).",
      usage: "Onthoud deze 6 voorvoegsels. Als een werkwoord hiermee begint, is het 100% onscheidbaar."
    },
    {
      rule: "De Klemtoon-Regel",
      structure: "Onscheidbaar = klemtoon op de stam. Scheidbaar = klemtoon op het voorvoegsel.",
      example: "doorLÓpen (onscheidbaar) vs DÓORlopen (scheidbaar).",
      usage: "Luister goed naar de uitspraak, dit vertelt je direct of het werkwoord gesplitst kan worden."
    },
    {
      rule: "Voltooid Deelwoord Dubbelgangers",
      structure: "Onscheidbaar = geen ge- (doorlopen). Scheidbaar = ge- ertussen (doorgelopen).",
      example: "Ik heb de cursus doorlopen. / Ik ben de tunnel doorgelopen.",
      usage: "De aanwezigheid van 'ge-' verraadt of het om een fysieke doorgang (scheidbaar) of een figuurlijke voltooiing (onscheidbaar) gaat."
    },
    {
      rule: "Hulpwerkwoord in Voltooide Tijd",
      structure: "Fysieke verplaatsing (scheidbaar) = zijn. Figuurlijk/geen verplaatsing (onscheidbaar) = hebben.",
      example: "Ik ben doorgelopen. / Ik heb doorlopen.",
      usage: "Stel jezelf de vraag: 'Is er een A ➔ B beweging?' Zo ja, gebruik 'zijn'."
    }
  ],
  callouts: [
    { type: "remember", label: "🏆 PRO REGEL 1", text: "Bij een onscheidbaar werkwoord blijft het voorvoegsel ALTIJD vastgeplakt aan de stam." },
    { type: "remember", label: "🏆 PRO REGEL 2", text: "Onscheidbaar = klemtoon op de stam. Scheidbaar = klemtoon op het voorvoegsel." },
    { type: "remember", label: "⚠️ PAS OP 1", text: "De 6 voorvoegsels (be, ge, her, ont, ver, er) zorgen ervoor dat het voltooid deelwoord GEEN extra 'ge-' krijgt!" },
    { type: "remember", label: "⚠️ PAS OP 2", text: "In de bijzin zien 'doorlopen' en 'dóórlopen' er hetzelfde uit. Alleen de context geeft de oplossing." },
    { type: "remember", label: "⚠️ PAS OP 3", text: "Omarmen is bijna altijd onscheidbaar (omármen). Je zegt niet 'ik arm de boom om'." },
    { type: "tip", label: "💡 Pro-tip", text: "Twijfel je over 'hebben' of 'zijn'? Vraag je af: 'Is er een fysieke A➔B verplaatsing?' Zo nee, gebruik dan 'hebben'." }
  ],
  commonMistakes: [
    { incorrect: "Ik heb het gebetaald.", correct: "Ik heb het betaald.", explanation: "'Betalen' begint met 'be-', een van de 6 ge-vreters. Het krijgt geen extra 'ge-'." },
    { incorrect: "Ik ben de cursus doorlopen.", correct: "Ik heb de cursus doorlopen.", explanation: "'De cursus doorlopen' is figuurlijk (onscheidbaar), geen fysieke verplaatsing. Daarom gebruik je 'hebben'." },
    { incorrect: "Ik heb de tunnel doorlopen. (bedoeld: fysiek erdoorheen)", correct: "Ik ben de tunnel doorgelopen.", explanation: "Fysiek ergens doorheen lopen is scheidbaar (dóórlopen). Het voltooid deelwoord krijgt dan wél een 'ge-' ertussen: doorgelopen." },
    { incorrect: "Ik arm het beleid om.", correct: "Ik omarm het beleid.", explanation: "'Omarmen' is in figuurlijke zin (accepteren) altijd onscheidbaar. De klemtoon ligt op 'arm'." },
    { incorrect: "Ik doorloop de gang. (met klemtoon op 'door')", correct: "Ik loop de gang door.", explanation: "Als de klemtoon op 'door' ligt, is het scheidbaar. In een hoofdzin moet het dan gesplitst worden." }
  ],
  review: [
    "✅ Onscheidbare werkwoorden blijven ALTIJD aan elkaar.",
    "✅ De 6 ge-vreters: be-, ge-, her-, ont-, ver-, er-. Ze krijgen NOOIT een extra 'ge-' in het voltooid deelwoord.",
    "✅ Klemtoon is de sleutel: onscheidbaar = op de stam, scheidbaar = op het voorvoegsel.",
    "✅ Dubbelgangers zoals 'doorlopen' hebben een andere betekenis én een ander voltooid deelwoord afhankelijk van de klemtoon.",
    "✅ Scheidbaar met verplaatsing = 'zijn' in de voltooide tijd. Onscheidbaar = 'hebben'.",
    "✅ In de bijzin zien scheidbare en onscheidbare vormen er soms hetzelfde uit, de context is dan beslissend."
  ],
  qa: [
    {
      question: "De Klemtoon-valkuil (Betekenisverandering): Lees de volgende twee zinnen. Beide zinnen gebruiken het werkwoord 'doorlopen', maar ze hebben een compleet andere betekenis. Leg uit wat het verschil is, en welke zin welke klemtoon heeft. 1. 'Ik doorloop de training.' 2. 'Ik loop de gang door.'",
      answer: "In zin 1 is het werkwoord onscheidbaar. De klemtoon ligt op 'lóóp' (doorlópen). De betekenis is figuurlijk: ik maak de training van begin tot eind af. In zin 2 is het werkwoord scheidbaar. De klemtoon ligt op 'dóór' (dóórlopen). De betekenis is letterlijk: ik loop fysiek door de gang heen, van het ene einde naar het andere."
    },
    {
      question: "De Voltooid Deelwoord valkuil: Een student schrijft de volgende twee zinnen. In één van de twee zit een fout met het voltooid deelwoord. Welke zin is fout, en hoe moet hij wél? 1. 'Hij heeft de cursus doorlopen.' 2. 'Hij is de tunnel doorlopen.'",
      answer: "Zin 2 is fout. In zin 1 is 'doorlopen' onscheidbaar (figuurlijk: de cursus afmaken). Bij een onscheidbaar werkwoord krijgt het voltooid deelwoord geen extra 'ge-'. Dus 'doorlopen' is correct. In zin 2 is 'doorlopen' scheidbaar (fysiek: door de tunnel heen lopen). Bij een scheidbaar werkwoord moet de 'ge-' tussen het scheidbare deel en de stam komen. Dus het moet zijn: 'Hij is de tunnel doorgelopen.'"
    },
    {
      question: "De 'Ge-' vreters valkuil: Een student probeert de volgende werkwoorden in de voltooide tijd te zetten. Hij schrijft: 1. 'Ik heb het gebetaald.' 2. 'Ik heb het geontdekt.' 3. 'Ik heb het gevergeten.' Waarom zijn alle drie de zinnen fout, en hoe moeten ze wél?",
      answer: "Alle drie de zinnen zijn fout omdat 'betalen', 'ontdekken' en 'vergeten' beginnen met een onscheidbaar voorvoegsel (be-, ont-, ver-). Deze zes voorvoegsels 'vreten' de 'ge-' op! Het voltooid deelwoord krijgt NOOIT een extra 'ge-'. De correcte zinnen zijn: 1. 'Ik heb het betaald.' 2. 'Ik heb het ontdekt.' 3. 'Ik heb het vergeten.'"
    },
    {
      question: "De 'Omarmen' valkuil (Scheidbaar of Onscheidbaar?): Je leest een krantenartikel over een politicus die een nieuw beleid accepteert. De journalist schrijft: 'De minister omarmt het nieuwe voorstel.' Een student denkt: 'Is dit niet fout? Moet het niet gescheiden worden: De minister armt het voorstel om?' Waarom heeft de student het fout, en waarom is 'omarmt' hier de enige correcte vorm?",
      answer: "De student heeft het fout omdat 'omarmen' in deze betekenis (figuurlijk: accepteren, omhelzen) ALTIJD onscheidbaar is. De klemtoon ligt op 'árm' (omármen). Het is een vast geheel, je kunt het niet splitsen in 'armt om'. De zin 'De minister armt het voorstel om' bestaat niet in het Nederlands. De enige correcte vorm is: 'De minister omármt het nieuwe voorstel.'"
    }
  ]
};