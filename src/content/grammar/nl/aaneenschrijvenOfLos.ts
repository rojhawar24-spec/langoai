import type { GrammarLesson } from "../../types";

export const aaneenschrijvenOfLos: GrammarLesson = {
  id: "nl-aaneenschrijven-1",
  title: "Aaneenschrijven of Los? – Samenstellingen, Werkwoorden en Vaste Combinaties",
  level: 2,
  topic: "Aaneenschrijven of los", // [Sch] Schrijven – spelling
  body: "Leer wanneer je woorden aaneenschrijft en wanneer je ze los schrijft. Met regels voor samenstellingen, werkwoorden, telwoorden en meer.",
  overview: "...",
  anchorSectionId: "belang",
  exercises: [],
  timeExpressionsLabel: "Aaneen of los in één oogopslag 📊",
  timeExpressions: {
    header: "Categorie | Aaneen ✅ | Los ❌",
    rows: [
      ["Twee zelfstandige naamwoorden", "appeltaart, voetbal", "–"],
      ["Bijvoeglijk naamwoord + znw", "(alleen uitzonderingen: Rode Kruis)", "mooie auto"],
      ["Scheidbare werkwoorden (infinitief)", "opbellen, aanzetten", "–"],
      ["Onscheidbare werkwoorden", "bezoeken, verstaan", "–"],
      ["Werkwoord + voorzetsel (geen vaste combinatie)", "–", "op straat lopen"],
      ["Telwoorden tot duizend", "eenentwintig", "–"],
      ["Telwoorden boven duizend", "–", "tweeduizend dertig"],
      ["Voorzetsel + bijwoord (er/hier/daar)", "erin, daarop", "–"],
      ["Te + bijvoeglijk naamwoord", "–", "te groot"],
      ["Werkwoord + lijdend voorwerp (infinitief)", "koffiezetten, ademhalen", "(in persoonsvorm los: ik zet koffie)"],
    ],
  },
  details: [
    {
      title: "Waarom is aaneenschrijven of los schrijven belangrijk? 🎯",
      body: `
        <p>In het Nederlands plak je woorden vaak aan elkaar tot één nieuw woord. Maar niet alles schrijf je aan elkaar. Het verschil kan de betekenis van een zin volledig veranderen. Vergelijk:</p>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><em>Hij heeft het boek teruggegeven</em> (terug aan de eigenaar) vs. <em>terug gegeven</em> (opnieuw gegeven? Maar dat is ook 'teruggegeven'). Het gaat om herkenning van scheidbare werkwoorden.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><em>hardlopen</em> (de sport) versus <em>hard lopen</em> (snel rennen).</li>
        </ul>
        <p>In deze les leer je precies wanneer je woorden <strong>aaneenschrijft</strong> en wanneer je ze <strong>los</strong> schrijft.</p>
      `,
    },
    {
      title: "De hoofdregel: samenstellingen aaneen, losse woorden los 🧱",
      body: `
        <p>Als twee of meer woorden samen een <strong>nieuw begrip</strong> vormen, schrijf je ze aan elkaar (samenstelling). Als de woorden hun eigen betekenis houden, schrijf je ze los.</p>
        <p><strong>Samenstellingen (aaneen):</strong> keukentafel, voetbalwedstrijd, appeltaart, schoenendoos.</p>
        <p><strong>Losse combinaties:</strong> een mooie auto, hij loopt snel, ik heb een hekel aan fietsen.</p>
        <p><span class="pas-op-highlight">⚠️ PAS OP</span> Bij twijfel: kun je het eerste deel vervangen door een ander woord zonder dat de relatie verandert? Zo ja, dan is het waarschijnlijk los.</p>
      `,
    },
    {
      title: "Zelfstandige naamwoorden: aaneen, tenzij... 📚",
      body: `
        <h3 class="text-lg font-bold mt-4 mb-2">Twee zelfstandige naamwoorden</h3>
        <p>Altijd aaneen: stationschef, kinderboekenschrijver, fietsenrek, aardbeienjam.</p>
        <h3 class="text-lg font-bold mt-6 mb-2">Bijvoeglijk naamwoord + zelfstandig naamwoord</h3>
        <p>Meestal <strong>los</strong>: het zwarte schaap, een mooie auto, het oude huis.<br>
        Uitzonderingen: specifieke begrippen die als eigennaam worden gezien (Rode Kruis), of combinaties die één kenmerkende eigenschap benoemen: <strong>jongeman</strong>, <strong>kleinkind</strong> (versus 'een jonge man', 'een klein kind').</p>
        <h3 class="text-lg font-bold mt-6 mb-2">Bijwoord + bijvoeglijk naamwoord</h3>
        <p>Altijd los: heel mooi, zeer goed, allermooiste (aaneen omdat 'aller' een voorvoegsel is).</p>
      `,
    },
    {
      title: "Werkwoorden – de grootste uitdaging ⚡",
      body: `
        <h3 class="text-lg font-bold mt-4 mb-2">Scheidbare werkwoorden</h3>
        <p>In de <strong>infinitief</strong> en het <strong>voltooid deelwoord</strong> schrijf je het aaneen; in de <strong>hoofdzin</strong> met persoonsvorm splitst het.</p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Infinitief (aaneen)</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Hoofdzin (gesplitst)</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">opbellen</td><td class="px-3 py-2 text-sm">Ik bel je morgen op.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">aankomen</td><td class="px-3 py-2 text-sm">De trein komt om 14:00 aan.</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">meenemen</td><td class="px-3 py-2 text-sm">Neem je een paraplu mee?</td></tr>
            </tbody>
          </table>
        </div>
        <p><strong>Onscheidbare werkwoorden</strong> (be-, ver-, ont-, her-, ge-) blijven altijd aaneen: bezoeken, verstaan, ontbijten.</p>
        <h3 class="text-lg font-bold mt-6 mb-2">Werkwoord + voorzetsel zonder vaste combinatie</h3>
        <p>Schrijf <strong>los</strong> als het om een gewone bepaling gaat: <em>hij loopt op straat</em>, <em>zij zit op de stoel</em>.</p>
        <h3 class="text-lg font-bold mt-6 mb-2">Werkwoord + lijdend voorwerp (stofzuigen, koffiezetten)</h3>
        <p>In de <strong>infinitief</strong> schrijf je deze aaneen: <strong>het koffiezetten</strong>, <strong>het stofzuigen</strong>. In de persoonsvorm schrijf je het lijdend voorwerp meestal los: <em>ik zet koffie</em>, <em>ik zuig stof</em>.</p>
      `,
    },
    {
      title: "Andere combinaties 📊",
      body: `
        <h3 class="text-lg font-bold mt-4 mb-2">Telwoorden</h3>
        <p>Tot en met duizend <strong>aaneen</strong>: eenentwintig, honderddrieëntwintig. Boven duizend <strong>spatie</strong> na duizend: tweeduizend vierentwintig.</p>
        <h3 class="text-lg font-bold mt-6 mb-2">Voorzetsel + bijwoord (er, hier, daar)</h3>
        <p>Altijd <strong>aaneen</strong>: erin, eruit, hierboven, daarnaast. In een zin kunnen ze gesplitst worden door andere woorden, maar de basisvorm is aaneen.</p>
        <h3 class="text-lg font-bold mt-6 mb-2">Te + bijvoeglijk naamwoord / bijwoord</h3>
        <p>Altijd <strong>los</strong>: te veel, te laat, te goed.</p>
        <h3 class="text-lg font-bold mt-6 mb-2">Bijwoorden uit voorzetsel + zelfstandig naamwoord</h3>
        <p>Vaak <strong>aaneen</strong> als het een niet-letterlijke betekenis heeft: achteraf, buitenshuis, onderweg. Maar <em>op straat</em>, <em>in huis</em> zijn los.</p>
      `,
    },
  ],
  rulesTable: [
    {
      rule: "Samenstellingen van zelfstandige naamwoorden",
      structure: "Twee of meer zelfstandige naamwoorden die samen een nieuw begrip vormen, schrijf je **aaneen**.",
      example: "keukentafel, voetbalwedstrijd, kinderboekenschrijver",
      usage: "Dit is de meest basale regel voor samenstellingen.",
    },
    {
      rule: "Scheidbare werkwoorden",
      structure: "In de infinitief en het voltooid deelwoord **aaneen**; in de hoofdzin met persoonsvorm **gesplitst**.",
      example: "opbellen → Ik bel op. / Ik heb opgebeld.",
      usage: "Let op: het voorvoegsel komt achteraan in de zin.",
    },
    {
      rule: "Werkwoord + lijdend voorwerp (infinitief)",
      structure: "De infinitief van combinaties zoals koffiezetten, stofzuigen schrijf je **aaneen**.",
      example: "het koffiezetten, het autorijden",
      usage: "In de persoonsvorm schrijf je het lijdend voorwerp los: ik zet koffie.",
    },
    {
      rule: "Telwoorden tot en met duizend aaneen",
      structure: "Getallen onder de duizend schrijf je **aaneen**; boven duizend met **spatie** na duizend.",
      example: "drieëntwintig (23), tweeduizend dertig (2030)",
      usage: "Trema verplicht bij klinkerbotsing (tweeëntwintig).",
    },
    {
      rule: "Voorzetsel + bijwoord (er, hier, daar) aaneen",
      structure: "Combinaties van een voorzetsel met er, hier, daar of waar schrijf je **aaneen**.",
      example: "erin, eruit, hiermee, daarvoor, waarop",
      usage: "Ook als ze in de zin gesplitst zijn, blijft de basis aaneen.",
    },
    {
      rule: "Bijvoeglijk naamwoord + zelfstandig naamwoord los",
      structure: "Een bijvoeglijk naamwoord en een zelfstandig naamwoord schrijf je **los**, tenzij het een eigennaam of specifiek begrip is.",
      example: "een mooie auto, het zwarte schaap – maar: Rode Kruis, jongeman",
      usage: "Let op het verschil: een jongeman (specifiek) vs. een jonge man (algemeen).",
    },
  ],
  callouts: [
    { type: "remember", label: "Onthoud 1", text: "Twee zelfstandige naamwoorden → aaneen (keukentafel)." },
    { type: "remember", label: "Onthoud 2", text: "Scheidbare werkwoorden: infinitief aaneen (opbellen), in de zin gesplitst (ik bel op)." },
    { type: "remember", label: "Onthoud 3", text: "Koffiezetten, stofzuigen: infinitief aaneen, in de persoonsvorm los (ik zet koffie)." },
    { type: "remember", label: "Onthoud 4", text: "Telwoorden tot 1000 aaneen (drieëntwintig), daarboven spatie (tweeduizend dertig)." },
    { type: "remember", label: "Onthoud 5", text: "Erin, eruit, hiermee, daarvoor → altijd aaneen." },
    { type: "remember", label: "Onthoud 6", text: "Bijvoeglijk naamwoord + znw meestal los (mooie auto), tenzij specifieke eigennaam (Rode Kruis)." },
  ],
  commonMistakes: [
    { incorrect: "Ik heb het boek terug gegeven.", correct: "Ik heb het boek teruggegeven.", explanation: "Teruggeven is een scheidbaar werkwoord; het voltooid deelwoord schrijf je aaneen." },
    { incorrect: "hardlopen (als je 'snel lopen' bedoelt)", correct: "hard lopen", explanation: "Snel lopen is een bijwoord + werkwoord en schrijf je los. Alleen de sportnaam is aaneen." },
    { incorrect: "het koffie zetten (infinitief)", correct: "het koffiezetten", explanation: "De infinitief van deze combinatie schrijf je aaneen." },
    { incorrect: "drie en twintig", correct: "drieëntwintig", explanation: "Telwoorden onder duizend schrijf je aaneen, met trema bij klinkerbotsing." },
    { incorrect: "Er in lopen", correct: "Erin lopen", explanation: "Voorzetselbijwoorden met er schrijf je aaneen." },
    { incorrect: "een mooieauto", correct: "een mooie auto", explanation: "Bijvoeglijk naamwoord en zelfstandig naamwoord schrijf je los." },
  ],
  review: [
    "Samenstellingen van zelfstandige naamwoorden: altijd aaneen (tafellaken, deurknop).",
    "Scheidbare werkwoorden: infinitief aaneen (opbellen), in de zin gesplitst (ik bel op).",
    "Onscheidbare werkwoorden: altijd aaneen (bezoeken).",
    "Bijwoord + werkwoord: los als bijwoord zelfstandig blijft (hard lopen), aaneen als vaste activiteit (hardlopen).",
    "Telwoorden: aaneen tot duizend, spatie na duizend.",
    "Voorzetsel + bijwoord (er, hier, daar): aaneen (erin, hiermee).",
    "Werkwoord + lijdend voorwerp in de infinitief: aaneen (stofzuigen), in persoonsvorm vaak los (ik zuig stof).",
  ],
  qa: [
    {
      question: "Waarom schrijf je “Ik ga morgen opbellen” aaneen, maar “Ik bel morgen op” los?",
      answer: "“Opbellen” is een scheidbaar werkwoord. In de infinitief en het voltooid deelwoord schrijf je het aaneen. In de hoofdzin met de persoonsvorm splitst het voorzetsel “op” zich af en komt het achteraan in de zin te staan. Dus: *Ik ga opbellen* (aaneen) en *Ik bel op* (gesplitst).",
    },
    {
      question: "Leg uit waarom “hardlopen” in de ene zin aaneen en in de andere zin los kan zijn. Geef een voorbeeld van elke mogelijkheid.",
      answer: "**Hardlopen** (aaneen) is de naam van de sport. Bijvoorbeeld: *Ik doe aan hardlopen.* **Hard lopen** (los) betekent \"snel lopen\". Bijvoorbeeld: *Ik moet hard lopen om de bus te halen.* Het verschil zit in de betekenis.",
    },
    {
      question: "Waarom is “het koffie zetten” in de infinitief fout, terwijl “ik zet koffie” wel correct is?",
      answer: "In de infinitief wordt de combinatie van werkwoord en lijdend voorwerp beschouwd als een samengesteld werkwoord en schrijf je het aaneen: **het koffiezetten**. In de persoonsvorm is “koffie” het lijdend voorwerp en blijft het los: *ik zet koffie*.",
    },
    {
      question: "Schrijf je “er in” of “erin” in de volgende zin: “Hij gaat ___.” Vul aan en leg uit.",
      answer: "**Erin** (aaneen). “Erin” is een voornaamwoordelijk bijwoord, gevormd uit *er* + *in*. Deze combinaties schrijf je altijd aaneen, tenzij ze door andere woorden gescheiden worden: *Hij gaat er niet in.* Dan blijft de basis nog steeds aaneen als losse delen, maar in de zin *Hij gaat erin* is het één woord.",
    },
    {
      question: "Corrigeer: “Ik heb het boek terug gegeven.”",
      answer: "**Ik heb het boek teruggegeven.** “Teruggeven” is een scheidbaar werkwoord; het voltooid deelwoord schrijf je aaneen.",
    },
    {
      question: "Waarom schrijf je “drieëntwintig” aaneen en “tweeduizend vierentwintig” niet?",
      answer: "Volgens de spellingregels schrijf je telwoorden **tot en met duizend** aaneen: *drieëntwintig* is 23, onder duizend. Bij getallen **boven duizend** komt er een spatie na *duizend*: *tweeduizend vierentwintig* (2024).",
    },
    {
      question: "Leg uit of de volgende zin juist is: “Ik heb een mooieauto gekocht.”",
      answer: "Nee, dit is fout. “Mooie” is een bijvoeglijk naamwoord en “auto” een zelfstandig naamwoord; die schrijf je **los**: **een mooie auto**. Alleen in heel bijzondere gevallen waarin de combinatie een specifieke eigennaam of begrip is geworden, schrijf je het aaneen, maar dat is hier niet het geval.",
    },
  ],
};