import type { GrammarLesson } from "../../types";

export const focuspartikels: GrammarLesson = {
  id: "nl-focuspartikels-1",
  title: "Focuspartikels: Alleen, Zelfs, Ook, Net & Pas – De Ultieme Gids",
  level: 3,
  topic: "Grammatica",
  body: "Beheers de focuspartikels volledig: de exacte nuances van 'alleen', 'zelfs', 'ook', 'net' en 'pas', de spotlight-regel voor woordvolgorde, en de grootste valkuilen zoals 'pas vs. al' en 'net vs. net als'.",
  overview:
    "Focuspartikels zijn de spotlights van de Nederlandse taal. Ze veranderen de feiten niet, maar bepalen wél waar de klemtoon ligt. In deze allesomvattende gids leer je hoe je de aandacht van de luisteraar exact stuurt. Je ontdekt waarom de positie van 'alleen' de betekenis 100% verandert, wat het verschil is tussen 'zelfs' en 'ook', en waarom je 'pas' en 'al' nooit door elkaar mag halen. Met prachtige tabellen, strikte PRO-regels en 4 complexe oefenvragen zet jij de spotlight voortaan op het juiste woord!",
  anchorSectionId: "wat-zijn-focuspartikels",
  exercises: [],
  timeExpressionsLabel: "De 5 Focuspartikels in Één Oogopslag 🔦",
  timeExpressions: {
    header: "Partikel | Kernfunctie | Voorbeeld | Nuance",
    rows: [
      ["🚫 **alleen**", "Exclusiviteit / Beperking", "Ik heb **alleen** een auto.", "Niets anders dan dit (sluit rest uit)."],
      ["😲 **zelfs**", "Verrassing / Extremiteit", "**Zelfs** de leraar snapte het niet.", "Als dit waar is, is de rest dat ook."],
      ["➕ **ook**", "Toevoeging / Inclusie", "Ik wil **ook** een koffie.", "Net als de ander / erbij (neutraal)."],
      ["🎯 **net**", "Precisie / Toeval / Vergelijking", "Ik heb **net** genoeg geld.", "Exact op de grens / toeval / net als."],
      ["⏳ **pas**", "Later dan verwacht", "Ik ben **pas** om 10 uur klaar.", "Het duurt langer dan gehoopt."]
    ]
  },
  details: [
    {
      title: "Deel 1: Wat zijn focuspartikels? (De Spotlight) 🔦",
      body: `
        <p>Focuspartikels zijn de <strong>spotlights</strong> van de Nederlandse taal. Ze veranderen de feiten in de zin niet, maar ze veranderen wel <strong>waar de klemtoon op ligt</strong>. Ze richten de aandacht van de luisteraar op één specifiek onderdeel van de zin.</p>
        <p class="text-sm text-slate-700 dark:text-slate-300 mb-4">Als je de verkeerde focuspartikel gebruikt, of hem op de verkeerde plek zet, begrijpt de luisteraar precies het tegenovergestelde van wat je bedoelt!</p>
        
        <div class="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-emerald-700 dark:text-emerald-300 mb-2">🏆 PRO REGEL 0: De Spotlight-regel</h3>
          <p class="text-slate-700 dark:text-slate-300">Een focuspartikel staat <strong>ALTIJD direct vóór</strong> het woord of zinsdeel dat hij benadrukt. Verplaats je het partikel, dan verplaats je de spotlight!</p>
        </div>
      `
    },
    {
      title: "Deel 2: ALLEEN (De beperker / Exclusiviteit) 🚫",
      body: `
        <p><strong>Alleen</strong> (of <em>slechts</em> in formele taal) sluit alles en iedereen uit, behalve het woord dat er direct achter staat. Het betekent <em>only</em> of <em>just</em>.</p>
        
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-gradient-to-r from-indigo-600 to-purple-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Situatie</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Voorbeeldzin</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Nuance / Betekenis</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">Exclusiviteit (Persoon)</td>
                <td class="px-4 py-3 text-sm"><strong>Alleen</strong> jij mag dit weten.</td>
                <td class="px-4 py-3 text-sm text-xs">(Niemand anders mag het weten).</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">Exclusiviteit (Ding)</td>
                <td class="px-4 py-3 text-sm">Ik heb <strong>alleen</strong> een auto.</td>
                <td class="px-4 py-3 text-sm text-xs">(Ik heb geen huis, geen boot, alleen een auto).</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50">
                <td class="px-4 py-3 text-sm font-semibold">Versterking (Alleen maar)</td>
                <td class="px-4 py-3 text-sm">Hij praat <strong>alleen maar</strong> onzin.</td>
                <td class="px-4 py-3 text-sm text-xs">(Hij praat <em>niets anders dan</em> onzin).</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="bg-rose-50 dark:bg-rose-900/20 border-l-4 border-rose-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-rose-700 dark:text-rose-300 mb-2">🚨 PAS OP! DE FOCUS-VALKUIL!</h3>
          <p class="text-sm text-slate-700 dark:text-slate-300 mb-2">Kijk wat er gebeurt als je <strong>alleen</strong> verplaatst in de zin. De spotlight verschuift en de betekenis verandert 100%:</p>
          <ul class="space-y-1 text-sm text-slate-700 dark:text-slate-300">
            <li>🔹 "<strong>Alleen</strong> ik geef hem een cadeau." <em>(Niemand anders geeft hem een cadeau).</em></li>
            <li>🔹 "Ik geef <strong>alleen</strong> hem een cadeau." <em>(Ik geef niemand anders een cadeau).</em></li>
            <li>🔹 "Ik geef hem <strong>alleen</strong> een cadeau." <em>(Ik geef hem geen kus, geen hand, alleen een cadeau).</em></li>
          </ul>
        </div>
      `
    },
    {
      title: "Deel 3: ZELFS (De verrassing / Extremiteit) 😲",
      body: `
        <p><strong>Zelfs</strong> gebruik je om een <strong>extreem of verrassend voorbeeld</strong> toe te voegen aan een reeks. Het betekent <em>even</em>. Het impliceert: "Als dit al waar is, dan is de rest helemaal waar!"</p>
        
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-gradient-to-r from-purple-600 to-pink-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Situatie</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Voorbeeldzin</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Nuance / Betekenis</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">Verrassing (Negatief)</td>
                <td class="px-4 py-3 text-sm"><strong>Zelfs</strong> de leraar snapte de som niet.</td>
                <td class="px-4 py-3 text-sm text-xs">(Als de leraar het niet snapt, snapt niemand het).</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">Verrassing (Positief)</td>
                <td class="px-4 py-3 text-sm">Hij is aardig voor iedereen, <strong>zelfs</strong> voor zijn vijanden.</td>
                <td class="px-4 py-3 text-sm text-xs">(Voor vijanden aardig zijn is extreem).</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50">
                <td class="px-4 py-3 text-sm font-semibold">Extremiteit</td>
                <td class="px-4 py-3 text-sm">Het is <strong>zelfs</strong> in de zomer koud hier.</td>
                <td class="px-4 py-3 text-sm text-xs">(In de zomer is het normaal warm, dus dit is extreem).</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="bg-rose-50 dark:bg-rose-900/20 border-l-4 border-rose-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-rose-700 dark:text-rose-300 mb-2">🚨 PAS OP! DE 'ZELFS' vs 'OOK' VALKUIL!</h3>
          <ul class="space-y-1 text-sm text-slate-700 dark:text-slate-300">
            <li>✅ <strong>Ook</strong> is een <strong>neutrale</strong> toevoeging. (<em>Ik ga ook.</em> = Jij gaat, en ik ook).</li>
            <li>✅ <strong>Zelfs</strong> is een <strong>verrassende</strong> toevoeging. (<em>Zelfs ik ga.</em> = Ik ga normaal nooit weg, dus het is verrassend dat ik ga).</li>
          </ul>
        </div>
      `
    },
    {
      title: "Deel 4: OOK (De toevoeging / Inclusie) ➕",
      body: `
        <p><strong>Ook</strong> voegt iets toe aan wat al gezegd is. Het betekent <em>also</em> of <em>too</em>. Het is het meest neutrale focuspartikel.</p>
        
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-gradient-to-r from-emerald-600 to-teal-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Situatie</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Voorbeeldzin</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Nuance / Betekenis</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">Toevoeging (Achteraan)</td>
                <td class="px-4 py-3 text-sm">Ik wil <strong>ook</strong> een koffie.</td>
                <td class="px-4 py-3 text-sm text-xs">(Jij hebt een koffie, ik wil er ook een).</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">Toevoeging (Vooraan)</td>
                <td class="px-4 py-3 text-sm"><strong>Ook</strong> de buren zijn op vakantie.</td>
                <td class="px-4 py-3 text-sm text-xs">(Naast de mensen die we al noemden, zijn de buren er ook).</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50">
                <td class="px-4 py-3 text-sm font-semibold">Bevestiging (Kort)</td>
                <td class="px-4 py-3 text-sm">"Ben jij moe?" - "Ik <strong>ook</strong>."</td>
                <td class="px-4 py-3 text-sm text-xs">(Wij zijn allebei moe).</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-amber-700 dark:text-amber-300 mb-2">🚨 PAS OP! DE VOLGORDE-VALKUIL!</h3>
          <p class="text-sm text-slate-700 dark:text-slate-300 mb-2">In het Nederlands staat 'ook' vaak <strong>voor</strong> het lidwoord of het bijvoeglijk naamwoord, niet ertussenin!</p>
          <ul class="space-y-1 text-sm text-slate-700 dark:text-slate-300">
            <li>❌ <em>Fout:</em> Ik heb een <strong>ook</strong> mooie auto gezien.</li>
            <li>✅ <em>Correct:</em> Ik heb <strong>ook een</strong> mooie auto gezien.</li>
          </ul>
        </div>
      `
    },
    {
      title: "Deel 5: NET (De precisie / Het toeval) 🎯",
      body: `
        <p><strong>Net</strong> heeft drie compleet verschillende betekenissen, afhankelijk van de context. Het kan gaan over exacte grenzen, toeval, of een vergelijking.</p>
        
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-gradient-to-r from-amber-600 to-orange-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Situatie</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Voorbeeldzin</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Nuance / Betekenis</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">Precies / Exact (Grens)</td>
                <td class="px-4 py-3 text-sm">Ik heb <strong>net</strong> genoeg geld.</td>
                <td class="px-4 py-3 text-sm text-xs">(Ik heb precies 50 euro, niet 51, niet 49).</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">Toeval / Timing</td>
                <td class="px-4 py-3 text-sm">Ik bel je <strong>net</strong> nu ik aan je dacht!</td>
                <td class="px-4 py-3 text-sm text-xs">(Wat een toeval, exact op dit moment).</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50">
                <td class="px-4 py-3 text-sm font-semibold">Vergelijking (Net als)</td>
                <td class="px-4 py-3 text-sm">Hij praat <strong>net als</strong> zijn vader.</td>
                <td class="px-4 py-3 text-sm text-xs">(Hij praat precies zoals / exactly like zijn vader).</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="bg-rose-50 dark:bg-rose-900/20 border-l-4 border-rose-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-rose-700 dark:text-rose-300 mb-2">🚨 PAS OP! DE 'NET' vs 'NET ALS' VALKUIL!</h3>
          <p class="text-sm text-slate-700 dark:text-slate-300 mb-2">Als je wilt zeggen dat iets <em>precies zoals</em> iets anders is, moet je <strong>altijd</strong> <em>net als</em> gebruiken, niet alleen <em>net</em>.</p>
          <ul class="space-y-1 text-sm text-slate-700 dark:text-slate-300">
            <li>❌ <em>Fout:</em> Hij praat <strong>net</strong> zijn vader.</li>
            <li>✅ <em>Correct:</em> Hij praat <strong>net als</strong> zijn vader.</li>
          </ul>
        </div>
      `
    },
    {
      title: "Deel 6: PAS (De late tijd / De voorwaarde) ⏳",
      body: `
        <p><strong>Pas</strong> wordt gebruikt om aan te geven dat iets <strong>later gebeurt dan verwacht</strong>, of dat een voorwaarde eerst vervuld moet zijn. Het betekent <em>only (late)</em> of <em>not until</em>.</p>
        
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-gradient-to-r from-blue-600 to-cyan-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Situatie</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Voorbeeldzin</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Nuance / Betekenis</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">Later dan verwacht (Tijd)</td>
                <td class="px-4 py-3 text-sm">Ik ben <strong>pas</strong> om 10 uur klaar.</td>
                <td class="px-4 py-3 text-sm text-xs">(Je verwachtte 8 uur, maar het duurt langer).</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">Pas als (Voorwaarde)</td>
                <td class="px-4 py-3 text-sm">Ik ga <strong>pas</strong> weg <strong>als</strong> jij gaat.</td>
                <td class="px-4 py-3 text-sm text-xs">(Ik wacht, ik ga niet eerder dan jij).</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50">
                <td class="px-4 py-3 text-sm font-semibold">Pas geleden (Recent)</td>
                <td class="px-4 py-3 text-sm">Ik heb hem <strong>pas</strong> gezien.</td>
                <td class="px-4 py-3 text-sm text-xs">(Ik heb hem kort geleden / recent gezien).</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="bg-rose-50 dark:bg-rose-900/20 border-l-4 border-rose-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-rose-700 dark:text-rose-300 mb-2">🚨 PAS OP! DE 'PAS' vs 'AL' VALKUIL!</h3>
          <p class="text-sm text-slate-700 dark:text-slate-300 mb-2">Dit is de allergrootste fout bij tijd!</p>
          <ul class="space-y-1 text-sm text-slate-700 dark:text-slate-300">
            <li>⏳ <strong>Pas</strong> = Het duurt <strong>langer</strong> dan je hoopt/denkt. (<em>Het is pas 5 uur.</em> = Het is nog vroeg, we hebben tijd).</li>
            <li>⏰ <strong>Al</strong> = Het is <strong>eerder</strong> dan je hoopt/denkt. (<em>Het is al 5 uur.</em> = Het is al laat, de tijd vliegt!).</li>
          </ul>
        </div>
      `
    }
  ],
  rulesTable: [
    {
      rule: "De Spotlight-regel",
      structure: "Een focuspartikel staat ALTIJD direct vóór het woord dat hij benadrukt.",
      example: "Alleen IK ga. (Niet jij) / Ik ga ALLEEN. (Zonder jou)",
      usage: "Verplaats je het partikel, dan verplaats je de spotlight en verandert de betekenis 100%."
    },
    {
      rule: "Zelfs vs. Ook",
      structure: "Ook = neutrale toevoeging. Zelfs = verrassende of extreme toevoeging.",
      example: "Ik ga ook. (neutraal) / Zelfs ik ga. (verrassend, ik ga normaal nooit)",
      usage: "Gebruik 'zelfs' alleen als het een extremiteit of grote verrassing is."
    },
    {
      rule: "Net als voor vergelijkingen",
      structure: "Bij het vergelijken van twee dingen/personen gebruik je ALTIJD 'net als' (of 'precies als').",
      example: "Hij praat net als zijn vader. (Niet: Hij praat net zijn vader)",
      usage: "'Net' alleen betekent 'precies op de grens' of 'toeval'. Voor vergelijkingen heb je 'als' nodig."
    },
    {
      rule: "Pas vs. Al (Tijd)",
      structure: "Pas = later dan verwacht (het duurt nog). Al = eerder dan verwacht (het is al laat).",
      example: "Het is pas 12 uur. (we hebben tijd) / Het is al 12 uur! (de tijd vliegt)",
      usage: "Dit is een subjectieve beleving van de tijd. 'Pas' drukt geduld of vertraging uit, 'al' drukt haast of verbazing uit."
    },
    {
      rule: "De volgorde van 'Ook'",
      structure: "'Ook' staat voor het lidwoord of bijvoeglijk naamwoord, niet ertussenin.",
      example: "Ik heb ook een mooie auto. (Niet: Ik heb een ook mooie auto)",
      usage: "Zie 'ook' als een toevoeging aan de hele frase 'een mooie auto'."
    }
  ],
  callouts: [
    { type: "remember", label: "🏆 PRO REGEL 0", text: "Focuspartikels zijn spotlights. Ze staan direct vóór het woord dat ze benadrukken." },
    { type: "remember", label: "⚠️ PAS OP 1", text: "De positie van 'alleen' bepaalt 100% de betekenis. 'Alleen ik' vs 'Ik alleen' vs 'Geef alleen hem'." },
    { type: "remember", label: "⚠️ PAS OP 2", text: "Zelfs = extremiteit/verrassing. Ook = neutrale toevoeging. Gebruik 'zelfs' niet als het niet schokkend is." },
    { type: "remember", label: "⚠️ PAS OP 3", text: "Bij vergelijkingen gebruik je ALTIJD 'net als', nooit alleen 'net'." },
    { type: "remember", label: "⚠️ PAS OP 4", text: "Pas = later dan verwacht (het duurt nog). Al = eerder dan verwacht (het is al laat)." }
  ],
  commonMistakes: [
    { incorrect: "Ik geef hem alleen een boek. (bedoeld: niemand anders krijgt een boek)", correct: "Alleen ik geef hem een boek.", explanation: "De spotlight van 'alleen' staat op 'een boek', wat betekent dat je hem niets anders geeft. Om de persoon te benadrukken, moet 'alleen' ervoor staan." },
    { incorrect: "Zelfs ik heb een auto. (terwijl het niet verrassend is)", correct: "Ook ik heb een auto.", explanation: "Als het bezit van een auto niet extreem of verrassend is voor jou, gebruik je 'ook'. 'Zelfs' impliceert dat je normaal geen auto zou hebben." },
    { incorrect: "Hij praat net zijn vader.", correct: "Hij praat net als zijn vader.", explanation: "Bij vergelijkingen tussen twee entiteiten moet je in het Nederlands 'net als' (of 'precies als') gebruiken." },
    { incorrect: "Het is pas 12 uur! (terwijl je schrikt dat het al laat is)", correct: "Het is al 12 uur!", explanation: "Als je schrikt omdat de tijd sneller is gegaan dan je dacht, is het 'al'. 'Pas' zou betekenen dat je vindt dat het nog heel vroeg is." },
    { incorrect: "Ik heb een ook mooie auto gezien.", correct: "Ik heb ook een mooie auto gezien.", explanation: "'Ook' staat in het Nederlands voor de hele woordgroep (het lidwoord + bijvoeglijk naamwoord + zelfstandig naamwoord), niet ertussenin." }
  ],
  review: [
    "✅ Focuspartikels = spotlights. Ze bepalen waar de klemtoon ligt.",
    "✅ Alleen = exclusiviteit. Let op de positie, die verandert de betekenis!",
    "✅ Zelfs = extremiteit of verrassing. Ook = neutrale toevoeging.",
    "✅ Net = precisie of toeval. Voor vergelijkingen: net als.",
    "✅ Pas = later dan verwacht (het duurt nog). Al = eerder dan verwacht (het is al laat).",
    "✅ Volgorderegel 'Ook': Ik heb ook een mooie auto (niet: een ook mooie auto)."
  ],
  qa: [
    {
      question: "De 'Pas' vs 'Al' tijd-valkuil: Je bent op een feestje en je kijkt op je horloge. Je schrikt, want je moet over een uur werken. Je roept: 'Oh nee, het is ___ 12 uur!' Vul je 'pas' of 'al' in, en leg uit waarom het andere woord hier compleet de verkeerde emotie zou uitdrukken.",
      answer: "Je vult 'al' in: 'Oh nee, het is al 12 uur!' Uitleg: Je schrikt omdat de tijd sneller is gegaan dan je dacht. 'Al' drukt uit dat het eerder is dan verwacht. Als je 'pas' zou zeggen ('Het is pas 12 uur'), zou dat betekenen dat je vindt dat het nog heel vroeg is en je nog alle tijd hebt, wat niet klopt bij je paniek."
    },
    {
      question: "De 'Zelfs' vs 'Ook' nuance: Lees de volgende twee zinnen. Wat is het exacte verschil in betekenis en emotie tussen deze twee zinnen? 1. 'Ook de directeur was boos.' 2. 'Zelfs de directeur was boos.'",
      answer: "In zin 1 ('ook') is het een neutrale toevoeging. Iemand anders was boos, en de directeur was ook boos. Het is een feit. In zin 2 ('zelfs') is er een verrassing of extremiteit. De directeur is normaal misschien rustig, of staat boven de ruzie. Dat híj boos werd, is schokkend of extreem. Het benadrukt hoe ernstig de situatie is."
    },
    {
      question: "De 'Net' vs 'Net als' vergelijking: Een student wil zeggen dat een nieuwe student precies dezelfde hobby's heeft als hijzelf. Hij schrijft: 'De nieuwe student heeft net dezelfde hobby's ik.' Waarom is deze zin grammaticaal fout, en hoe moet hij wél?",
      answer: "De zin is fout omdat bij een vergelijking tussen twee personen of dingen in het Nederlands altijd 'net als' (of 'precies als') moet worden gebruikt, niet alleen 'net'. De correcte zin is: 'De nieuwe student heeft net als ik dezelfde hobby's.' (Of: 'De nieuwe student heeft dezelfde hobby's als ik')."
    },
    {
      question: "De 'Alleen' focus-verandering: Lees de volgende zin: 'Ik wil alleen vandaag niet werken.' Een buitenlander denkt dat dit betekent: 'I only want to not work today' (Ik wil niets anders dan niet werken). Waarom is die gedachte waarschijnlijk fout, wat betekent de zin in het Nederlands écht, en hoe zou je de zin moeten veranderen als je wél wilt zeggen dat je vandaag niets anders wilt doen dan relaxen?",
      answer: "De zin 'Ik wil alleen vandaag niet werken' betekent in het Nederlands: 'I don't want to work only today' (Ik wil morgen en overmorgen wel werken, maar vandaag even niet). De focus ligt op 'vandaag'. Als je wilt zeggen dat je de hele dag niets anders wilt doen dan relaxen, moet je 'alleen maar' gebruiken en de focus verplaatsen: 'Ik wil vandaag alleen maar relaxen.'"
    }
  ]
};