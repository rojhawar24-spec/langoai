import type { GrammarLesson } from "../../types";

export const hetWoordEr: GrammarLesson = {
  id: "nl-het-woord-er-1",
  title: "Het Woord 'Er': De Ultieme Kameleon – De 5 Functies & Valkuilen",
  level: 3,
  topic: "Grammatica",
  body: "Beheers het veelzijdige woordje 'er' volledig: de 5 functies (plaats, existentieel, partitief, passief, vast), de valkuilen bij werkwoordsovereenkomst, de verdwijnregel bij passief, en het verschil tussen dingen en personen.",
  overview:
    "Dit is de meest uitgebreide gids over het Nederlandse woord 'er'. Je leert de 5 compleet verschillende functies (plaatsaanduidend, existentieel, partitief, passief en vast 'er'), ontdekt waarom 'Er lopen drie katten' meervoud is, en weet precies wanneer 'er' verdwijnt in een passieve zin. Met 15+ kleurrijke tabellen, duidelijke PAS OP-waarschuwingen en 4 korte, krachtige oefenvragen beheers je de ultieme kameleon van de Nederlandse taal!",
  anchorSectionId: "plaatsaanduidend",
  exercises: [],
  timeExpressionsLabel: "De 5 Banen van 'ER' in Één Oogopslag 🦎",
  timeExpressions: {
    header: "Functie | Korte Omschrijving | Voorbeeld | Test",
    rows: [
      ["📍 Plaatsaanduidend", "Verwijst naar een locatie", "Ik ben **er**.", "Vervangbaar door **daar**?"],
      ["🌍 Existentieel", "Introductie van iets dat bestaat", "**Er** loopt een kat.", "Nieuw onderwerp introduceren?"],
      ["🍰 Partitief", "Deel van een geheel (bij getallen)", "Ik heb **er** drie.", "Staat er een getal/quantifier?"],
      ["🏗️ Passief", "Dummy subject in lijdende zin", "**Er** wordt gedanst.", "Passieve zin op plek 1?"],
      ["🔗 Vast 'er'", "Vast aan voorzetsel (erop) of idioom", "Ik wacht **erop**.", "Vaste combinatie met voorzetsel?"]
    ]
  },
  details: [
    {
      title: "Deel 1: Plaatsaanduidend 'Er' (Locatief) 📍",
      body: `
        <p>Dit is de makkelijkste vorm. 'Er' vervangt hier een <strong>plaatsbepaling</strong>. Je kunt het in je hoofd altijd vervangen door het woord <strong>daar</strong>.</p>
        
        <div class="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-emerald-700 dark:text-emerald-300 mb-2">🏆 PRO REGEL 1</h3>
          <p class="text-slate-700 dark:text-slate-300">Kun je 'er' vervangen door <strong>daar</strong>? Dan is het plaatsaanduidend.</p>
        </div>

        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-gradient-to-r from-indigo-600 to-purple-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Zin met plaats</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Zin met 'er'</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Vervangingstest</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm">Ik ben <strong>in Amsterdam</strong>.</td>
                <td class="px-4 py-3 text-sm">Ik ben <strong>er</strong>.</td>
                <td class="px-4 py-3 text-sm text-xs">Ik ben <strong>daar</strong>. (Klopt!)</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30">
                <td class="px-4 py-3 text-sm">De sleutel ligt <strong>op de tafel</strong>.</td>
                <td class="px-4 py-3 text-sm">De sleutel ligt <strong>er</strong>.</td>
                <td class="px-4 py-3 text-sm text-xs">De sleutel ligt <strong>daar</strong>. (Klopt!)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="bg-rose-50 dark:bg-rose-900/20 border-l-4 border-rose-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-rose-700 dark:text-rose-300 mb-2">🚨 PAS OP! DE VOLGORDE-VALKUIL!</h3>
          <p class="text-sm text-slate-700 dark:text-slate-300 mb-2">Als 'er' plaatsaanduidend is, staat het in de zin bijna <strong>altijd vooraan</strong> of direct na de persoonsvorm. Het is een "licht" woordje en wil zo vroeg mogelijk in de zin staan.</p>
          <ul class="space-y-1 text-sm text-slate-700 dark:text-slate-300">
            <li>✅ <em>Ik ben <strong>er</strong> vandaag niet.</em></li>
            <li>❌ <em>Ik ben vandaag niet <strong>er</strong>.</em></li>
          </ul>
        </div>
      `
    },
    {
      title: "Deel 2: Existentieel 'Er' (Het Bestaan) 🌍",
      body: `
        <p>Dit 'er' heeft <strong>geen betekenis</strong>. Het vult alleen de eerste plek van de zin op om aan te kondigen dat er iets gebeurt of iets bestaat. Het echte onderwerp van de zin komt <strong>na</strong> het werkwoord!</p>
        
        <div class="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-emerald-700 dark:text-emerald-300 mb-2">🏆 PRO REGEL 2</h3>
          <p class="text-slate-700 dark:text-slate-300">Gebruik existentieel 'er' bij onbepaalde onderwerpen (<em>een, geen, veel, vele, enkele</em>) om het bestaan ervan aan te kondigen.</p>
        </div>

        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-gradient-to-r from-emerald-600 to-teal-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Zin zonder 'er' (Moeilijk)</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Zin met existentieel 'er' (Natuurlijk)</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm">Een hond blaft in de tuin.</td>
                <td class="px-4 py-3 text-sm"><strong>Er</strong> blaft een hond in de tuin.</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm">Geen problemen zijn er vandaag.</td>
                <td class="px-4 py-3 text-sm"><strong>Er</strong> zijn vandaag geen problemen.</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50">
                <td class="px-4 py-3 text-sm">Veel mensen houden van kaas.</td>
                <td class="px-4 py-3 text-sm"><strong>Er</strong> houden veel mensen van kaas.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="bg-rose-50 dark:bg-rose-900/20 border-l-4 border-rose-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-rose-700 dark:text-rose-300 mb-2">🚨 PAS OP! DE ONDERWERPS-VALKUIL!</h3>
          <p class="text-sm text-slate-700 dark:text-slate-300 mb-2">Bij existentieel 'er' is 'er' <strong>NOOIT</strong> het onderwerp! Het onderwerp staat achter het werkwoord. Daarom moet het werkwoord soms in het meervoud staan, ook al lijkt 'er' enkelvoud.</p>
          <ul class="space-y-1 text-sm text-slate-700 dark:text-slate-300">
            <li>❌ <em>Fout:</em> Er <strong>loopt</strong> twee katten op het dak.</li>
            <li>✅ <em>Correct:</em> Er <strong>lopen</strong> twee katten op het dak. (Onderwerp is <em>twee katten</em> = meervoud).</li>
          </ul>
        </div>
      `
    },
    {
      title: "Deel 3: Partitief 'Er' (Een Deel van het Geheel) 🍰",
      body: `
        <p>Het partitieve 'er' verwijst naar een <strong>hoeveelheid</strong> of een <strong>deel</strong> van iets dat eerder genoemd is. Het vervangt vaak de combinatie <em>van + het/de + zelfstandig naamwoord</em>. Je gebruikt dit <strong>altijd</strong> in combinatie met getallen, quantifiers (<em>veel, weinig, geen, sommige</em>) of persoonlijke voornaamwoorden.</p>
        
        <div class="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-emerald-700 dark:text-emerald-300 mb-2">🏆 PRO REGEL 3</h3>
          <p class="text-slate-700 dark:text-slate-300">Staat er een getal, <em>veel/weinig</em>, of <em>ik/jij</em> in de zin dat naar iets verwijst? Gebruik <strong>altijd partitief 'er'</strong>.</p>
        </div>

        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-gradient-to-r from-amber-600 to-orange-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Zin zonder 'er'</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Zin met partitief 'er'</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Uitleg</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm">Ik heb <strong>drie appels</strong>.</td>
                <td class="px-4 py-3 text-sm">Ik heb <strong>er drie</strong>.</td>
                <td class="px-4 py-3 text-sm text-xs">'er' = <em>van de appels</em>.</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm">Ik wil <strong>veel geld</strong>.</td>
                <td class="px-4 py-3 text-sm">Ik wil <strong>er veel</strong>.</td>
                <td class="px-4 py-3 text-sm text-xs">'er' = <em>van het geld</em>.</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50">
                <td class="px-4 py-3 text-sm">Ik ken <strong>twee van die mannen</strong>.</td>
                <td class="px-4 py-3 text-sm">Ik ken <strong>er twee</strong>.</td>
                <td class="px-4 py-3 text-sm text-xs">'er' = <em>van die mannen</em>.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="bg-rose-50 dark:bg-rose-900/20 border-l-4 border-rose-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-rose-700 dark:text-rose-300 mb-2">🚨 PAS OP! DE VERGEET-VALKUIL!</h3>
          <p class="text-sm text-slate-700 dark:text-slate-300 mb-2">Nederlandsleerders vergeten het partitieve 'er' bijna altijd, omdat het in het Engels of andere talen niet bestaat.</p>
          <ul class="space-y-1 text-sm text-slate-700 dark:text-slate-300">
            <li>❌ <em>Fout:</em> Ik heb drie gezien.</li>
            <li>✅ <em>Correct:</em> Ik heb <strong>er</strong> drie gezien.</li>
          </ul>
        </div>
      `
    },
    {
      title: "Deel 4: Passief 'Er' (De Lijdende Vorm) 🏗️",
      body: `
        <p>In het Nederlands kun je een passieve zin (lijdende vorm) beginnen met 'er' als er <strong>geen specifiek onderwerp</strong> is, of als je de zin algemeen wilt houden. 'Er' fungeert hier als een soort 'dummy' (dummy subject) op de eerste plek.</p>
        
        <div class="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-emerald-700 dark:text-emerald-300 mb-2">🏆 PRO REGEL 4</h3>
          <p class="text-slate-700 dark:text-slate-300">Begint een passieve zin met 'Er' + werkwoord (vaak <em>worden</em> of <em>zijn</em> + voltooid deelwoord), en is er geen specifieke dader genoemd? Dan is het passief 'er'.</p>
        </div>

        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-gradient-to-r from-purple-600 to-pink-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Actieve zin</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Passieve zin met 'er'</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm">Mensen dansen op straat.</td>
                <td class="px-4 py-3 text-sm"><strong>Er</strong> wordt op straat gedanst.</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30">
                <td class="px-4 py-3 text-sm">Iemand heeft het huis verkocht.</td>
                <td class="px-4 py-3 text-sm"><strong>Er</strong> is het huis verkocht.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="bg-rose-50 dark:bg-rose-900/20 border-l-4 border-rose-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-rose-700 dark:text-rose-300 mb-2">🚨 PAS OP! DE VERDWUUN-VALKUIL!</h3>
          <p class="text-sm text-slate-700 dark:text-slate-300 mb-2">Dit is de allergrootste fout op C1/C2-niveau! Zodra je een <strong>specifiek onderwerp</strong> of een <strong>ander zinsdeel</strong> toevoegt dat de eerste plek inneemt, <strong>VERDWIJNT</strong> het passieve 'er' direct!</p>
          <ul class="space-y-1 text-sm text-slate-700 dark:text-slate-300">
            <li>✅ <em>Er wordt veel gewerkt.</em> (Algemeen)</li>
            <li>✅ <em>Er wordt <strong>door de studenten</strong> veel gewerkt.</em> (Nog steeds 'er' op plek 1).</li>
            <li>❌ <em>Fout:</em> Door de studenten <strong>er</strong> wordt veel gewerkt.</li>
            <li>✅ <em>Correct:</em> <strong>Door de studenten</strong> wordt veel gewerkt. (Plek 1 is ingenomen, 'er' moet weg!).</li>
          </ul>
        </div>
      `
    },
    {
      title: "Deel 5: Vast 'Er' (Voornaamwoordelijk Bijwoord & Idioom) 🔗",
      body: `
        <p>Soms is 'er' onlosmakelijk verbonden met een voorzetsel (voornaamwoordelijk bijwoord) of hoort het bij een vaste uitdrukking. Je kunt het dan niet letterlijk vertalen.</p>
        
        <h3 class="text-xl font-bold mt-6 mb-3 text-slate-800 dark:text-slate-200">A. Vast 'er' + voorzetsel (erop, eraan, mee, etc.)</h3>
        <p class="text-sm text-slate-700 dark:text-slate-300 mb-4">Als een werkwoord een voorzetsel vereist (<em>wachten op, denken aan</em>) en het verwijst naar een <strong>ding of concept</strong>, smelt 'er' samen met het voorzetsel.</p>

        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-gradient-to-r from-blue-600 to-cyan-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Werkwoord + voorzetsel + ding</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Vaste combinatie met 'er'</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm">Ik wacht <strong>op de bus</strong>.</td>
                <td class="px-4 py-3 text-sm">Ik wacht <strong>erop</strong>.</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm">Ik denk <strong>aan het weekend</strong>.</td>
                <td class="px-4 py-3 text-sm">Ik denk <strong>eraan</strong>.</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50">
                <td class="px-4 py-3 text-sm">Ik ben het <strong>met de regel</strong> eens.</td>
                <td class="px-4 py-3 text-sm">Ik ben <strong>het ermee</strong> eens.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="bg-rose-50 dark:bg-rose-900/20 border-l-4 border-rose-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-rose-700 dark:text-rose-300 mb-2">🚨 PAS OP! DE PERSONEN-VALKUIL!</h3>
          <p class="text-sm text-slate-700 dark:text-slate-300 mb-2">Je gebruikt <strong>NOOIT</strong> 'er' (erop, eraan) als het om een <strong>persoon</strong> gaat!</p>
          <ul class="space-y-1 text-sm text-slate-700 dark:text-slate-300">
            <li>❌ <em>Fout:</em> Ik wacht <strong>erop</strong>. (Als je op je moeder wacht).</li>
            <li>✅ <em>Correct:</em> Ik wacht <strong>op haar</strong>.</li>
            <li>✅ <em>Correct:</em> Ik wacht <strong>erop</strong>. (Als je op de bus wacht).</li>
          </ul>
        </div>
      `
    }
  ],
  rulesTable: [
    {
      rule: "Plaatsaanduidend 'Er'",
      structure: "Vervangt een plaatsbepaling. Altijd vervangbaar door 'daar'.",
      example: "Ik ben er (daar). / De sleutel ligt er (daar).",
      usage: "Staat bijna altijd vooraan of direct na de persoonsvorm."
    },
    {
      rule: "Existentieel 'Er'",
      structure: "Introductie van iets dat bestaat. 'Er' is géén onderwerp!",
      example: "Er lopen drie katten op het dak.",
      usage: "Het werkwoord moet overeenstemmen met het echte onderwerp achter het werkwoord (drie katten = meervoud)."
    },
    {
      rule: "Partitief 'Er'",
      structure: "Verwijst naar een deel van een geheel. Verplicht bij getallen, veel/weinig, geen.",
      example: "Ik heb twee broers, maar ik heb er geen.",
      usage: "Vervangt 'van + het/de + zelfstandig naamwoord'. In het Engels bestaat dit niet, dus niet vergeten!"
    },
    {
      rule: "Passief 'Er' (Verdwijnregel)",
      structure: "Dummy subject op plek 1 in een passieve zin. Verdwijnt als plek 1 bezet is.",
      example: "Er wordt gedanst. / In deze zaal wordt gedanst.",
      usage: "Zodra een ander zinsdeel (zoals 'In deze zaal') de eerste plek inneemt, moet 'er' weg."
    },
    {
      rule: "Vast 'Er' (Personen-valkuil)",
      structure: "Er + voorzetsel (erop, eraan) alleen voor dingen/concepten. Nooit voor personen.",
      example: "Ik wacht erop (bus). / Ik wacht op haar (moeder).",
      usage: "Verwijst het naar een persoon? Gebruik dan voorzetsel + persoonlijk voornaamwoord (op hem, aan haar)."
    }
  ],
  callouts: [
    { type: "remember", label: "🏆 PRO REGEL 1", text: "Plaatsaanduidend 'er' is altijd vervangbaar door 'daar'." },
    { type: "remember", label: "🏆 PRO REGEL 2", text: "Bij existentieel 'er' is 'er' géén onderwerp. Het werkwoord past zich aan het echte onderwerp aan." },
    { type: "remember", label: "🏆 PRO REGEL 3", text: "Partitief 'er' is verplicht bij getallen en quantifiers (Ik heb er drie / Ik heb er geen)." },
    { type: "remember", label: "⚠️ PAS OP 1", text: "Passief 'er' verdwijnt direct zodra een ander zinsdeel de eerste plek van de zin inneemt!" },
    { type: "remember", label: "⚠️ PAS OP 2", text: "Gebruik NOOIT 'erop/eraan' als het naar een persoon verwijst. Gebruik 'op haar/aan hem'." }
  ],
  commonMistakes: [
    { incorrect: "Er loopt twee katten op het dak.", correct: "Er lopen twee katten op het dak.", explanation: "Bij existentieel 'er' is 'er' géén onderwerp. Het onderwerp is 'twee katten' (meervoud). Daarom moet het werkwoord in het meervoud: 'lopen'." },
    { incorrect: "Ik heb drie gezien.", correct: "Ik heb er drie gezien.", explanation: "Bij quantifiers of getallen die verwijzen naar een eerdere groep, eist het Nederlands bijna altijd het partitieve 'er'." },
    { incorrect: "In dit gebouw er wordt niet gerookt.", correct: "In dit gebouw wordt niet gerookt.", explanation: "Het passieve 'er' verdwijnt direct zodra een ander zinsdeel (zoals 'In dit gebouw') de eerste plek van de zin inneemt." },
    { incorrect: "Ik wacht erop. (bedoeld: op mijn moeder)", correct: "Ik wacht op haar.", explanation: "Het voornaamwoordelijk bijwoord 'er + voorzetsel' (erop, eraan) mag ALLÉÉN gebruikt worden voor dingen, dieren of concepten. Verwijst het naar een persoon? Dan moet je het voorzetsel + persoonlijk voornaamwoord gebruiken." }
  ],
  review: [
    "✅ 5 functies van 'er': Plaats, Existentieel, Partitief, Passief, Vast.",
    "✅ Plaatsaanduidend: Vervangbaar door 'daar'.",
    "✅ Existentieel: 'Er' is géén onderwerp, het werkwoord stemt overeen met het echte onderwerp.",
    "✅ Partitief: 'Er' verwijst naar een deel (Ik heb er drie).",
    "✅ Passief: 'Er' verdwijnt als de zin niet met 'Er' begint.",
    "✅ Vast 'er': 'Erop/eraan' alleen voor dingen, 'op haar/aan hem' voor personen."
  ],
  qa: [
    {
      question: "Kies de juiste vorm: 'Er (loopt / lopen) drie katten op het dak.' Waarom?",
      answer: "'Er lopen drie katten op het dak.' Het onderwerp is 'drie katten' (meervoud), niet 'er'."
    },
    {
      question: "Een student vertaalt 'I have two brothers, but I don't have any.' naar 'Ik heb twee broers, maar ik heb geen.' Wat mist er en waarom?",
      answer: "Het partitieve 'er' ontbreekt. Het moet zijn: 'Ik heb twee broers, maar ik heb er geen.' Bij 'geen' dat naar een groep verwijst, is 'er' verplicht."
    },
    {
      question: "Welke zin is fout? 1. 'Er wordt in dit gebouw niet gerookt.' 2. 'In dit gebouw er wordt niet gerookt.' Waarom?",
      answer: "Zin 2 is fout. Het moet zijn: 'In dit gebouw wordt niet gerookt.' Passief 'er' verdwijnt zodra een ander zinsdeel ('In dit gebouw') de eerste plek inneemt."
    },
    {
      question: "Je wacht op de bus en op je moeder. Hoe zeg je dit met 'er' (of een voornaamwoord)? Waarom gebruik je niet voor beide 'erop'?",
      answer: "'Ik wacht erop' (bus = ding) en 'Ik wacht op haar' (moeder = persoon). 'Erop' mag nooit naar een persoon verwijzen."
    }
  ]
};