import type { GrammarLesson } from "../../types";

export const naamwoordelijkGezegde: GrammarLesson = {
  id: "nl-naamwoordelijk-gezegde-1",
  title: "Het Naamwoordelijk Gezegde: De Brug Tussen Onderwerp en Eigenschap",
  level: 3,
  topic: "Grammatica & Zinsontleding",
  body: "Beheers het naamwoordelijk gezegde volledig: koppelwerkwoorden, het NDG, de beruchte -e valkuil, en het verschil tussen koppelwerkwoorden en lijdende voorwerpen.",
  overview:
    "Dit is de meest uitgebreide, visueel schitterende en waarschuwing-rijke gids over het Naamwoordelijk Gezegde (NG) in het Nederlands. Je leert de 8 koppelwerkwoorden, doorziet de valkuilen van de -e uitgang, en begrijpt het cruciale verschil tussen 'worden' als koppelwerkwoord en 'worden' als passief. Met prachtige tabellen, strikte PRO-regels en 4 complexe oefenvragen word je een absolute meester in de Nederlandse zinsontleding!",
  anchorSectionId: "wat-is-naamwoordelijk-gezegde",
  exercises: [],
  timeExpressionsLabel: "De Formule van het Naamwoordelijk Gezegde 🌉",
  timeExpressions: {
    header: "Onderwerp (OW) | Koppelwerkwoord (KW) | Naamwoordelijk Deel (NDG)",
    rows: [
      ["Jan", "**is**", "**leraar**."],
      ["De koffie", "**wordt**", "**koud**."],
      ["Zij", "**blijft**", "**de baas**."],
      ["Het plan", "**lijkt**", "**moeilijk**."]
    ]
  },
  details: [
    {
      title: "Deel 1: Wat is een Naamwoordelijk Gezegde? 🌉",
      body: `
        <p>In een zin heb je werkwoorden die een <strong>actie</strong> uitdrukken (zoals <em>lopen, eten, slaan</em>). Maar er is een speciale groep werkwoorden die <strong>géén actie</strong> uitdrukken. Ze slaan alleen een <strong>brug</strong> tussen het onderwerp en een eigenschap, identiteit of toestand.</p>
        <p class="text-sm text-slate-700 dark:text-slate-300 mb-4">Dit noemen we een <strong>Naamwoordelijk Gezegde (NG)</strong>. Het bestaat altijd uit twee delen die onlosmakelijk met elkaar verbonden zijn.</p>
        
        <div class="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-emerald-700 dark:text-emerald-300 mb-2">🏆 PRO REGEL 1: De Formule</h3>
          <p class="text-slate-700 dark:text-slate-300 font-mono text-sm md:text-base">Naamwoordelijk Gezegde = <span class="text-emerald-600 dark:text-emerald-400 font-bold">Koppelwerkwoord</span> + <span class="text-indigo-600 dark:text-indigo-400 font-bold">Naamwoordelijk Deel van het Gezegde (NDG)</span></p>
        </div>

        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-gradient-to-r from-indigo-600 to-purple-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Onderwerp (OW)</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Koppelwerkwoord (KW)</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Naamwoordelijk Deel (NDG)</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm">Jan</td><td class="px-4 py-3 text-sm font-bold text-emerald-600">is</td><td class="px-4 py-3 text-sm font-bold text-indigo-600">leraar.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm">De koffie</td><td class="px-4 py-3 text-sm font-bold text-emerald-600">wordt</td><td class="px-4 py-3 text-sm font-bold text-indigo-600">koud.</td></tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm">Zij</td><td class="px-4 py-3 text-sm font-bold text-emerald-600">blijft</td><td class="px-4 py-3 text-sm font-bold text-indigo-600">de baas.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-4 py-3 text-sm">Het plan</td><td class="px-4 py-3 text-sm font-bold text-emerald-600">lijkt</td><td class="px-4 py-3 text-sm font-bold text-indigo-600">moeilijk.</td></tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      title: "Deel 2: De 8 Belangrijkste Koppelwerkwoorden 🏛️",
      body: `
        <p>Dit zijn de enige werkwoorden die een naamwoordelijk gezegde kunnen vormen. Ze hebben <strong>NOOIT</strong> een lijdend voorwerp!</p>
        
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-gradient-to-r from-teal-600 to-cyan-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Koppelwerkwoord</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Nuance / Betekenis</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Voorbeeldzin</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-semibold">Zijn</td><td class="px-4 py-3 text-sm text-xs">Drukt een <strong>huidige toestand</strong> of identiteit uit.</td><td class="px-4 py-3 text-sm">Hij <strong>is</strong> een slimme student.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-semibold">Worden</td><td class="px-4 py-3 text-sm text-xs">Drukt een <strong>verandering</strong> van toestand uit.</td><td class="px-4 py-3 text-sm">Hij <strong>wordt</strong> een slimme professor.</td></tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-semibold">Blijven</td><td class="px-4 py-3 text-sm text-xs">Drukt <strong>behoud</strong> van een toestand uit.</td><td class="px-4 py-3 text-sm">Hij <strong>blijft</strong> een slimme student.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-semibold">Lijken</td><td class="px-4 py-3 text-sm text-xs"><strong>Visuele waarneming</strong> / Eigen indruk.</td><td class="px-4 py-3 text-sm">Hij <strong>lijkt</strong> moe. (Hij ziet er moe uit).</td></tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-semibold">Schijnen</td><td class="px-4 py-3 text-sm text-xs"><strong>Informatie van buitenaf</strong> / Gerucht.</td><td class="px-4 py-3 text-sm">Hij <strong>schijnt</strong> moe te zijn. (Ik heb het gehoord).</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-semibold">Blijken</td><td class="px-4 py-3 text-sm text-xs"><strong>Harde feiten</strong> / Bewijs na onderzoek.</td><td class="px-4 py-3 text-sm">Hij <strong>blijkt</strong> moe te zijn. (De dokter heeft het getest).</td></tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-semibold">Heten</td><td class="px-4 py-3 text-sm text-xs">De <strong>algemene reputatie</strong> / Men zegt dat.</td><td class="px-4 py-3 text-sm">Hij <strong>heet</strong> eerlijk te zijn. (Iedereen zegt dat).</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-4 py-3 text-sm font-semibold">Dunken</td><td class="px-4 py-3 text-sm text-xs"><strong>Persoonlijke mening</strong> (Archaïsch/Formeel).</td><td class="px-4 py-3 text-sm">Mij <strong>dunkt</strong> dat het een goed idee is.</td></tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      title: "Deel 3: De 3 Gouden Grammaticaregels 🏆",
      body: `
        <p>Dit zijn de ijzeren wetten van het naamwoordelijk gezegde. Als je deze kent, maak je nooit meer een fout op toetsen.</p>
        
        <div class="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-indigo-700 dark:text-indigo-300 mb-2">🏆 PRO REGEL 2: De Referentie-Regel</h3>
          <p class="text-slate-700 dark:text-slate-300">Het NDG verwijst <strong>ALTIJD 100% terug naar het onderwerp</strong>. Het geeft een eigenschap of identiteit van het onderwerp.</p>
          <p class="text-sm text-slate-700 dark:text-slate-300 mt-2 italic">Test: Is het woord dat na het koppelwerkwoord staat hetzelfde als het onderwerp? Ja ➔ Het is een NG.</p>
        </div>

        <div class="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-emerald-700 dark:text-emerald-300 mb-2">🏆 PRO REGEL 3: De GEEN -e REGEL (De Allerbelangrijkste!)</h3>
          <p class="text-slate-700 dark:text-slate-300">Als het NDG een <strong>bijvoeglijk naamwoord</strong> is, krijgt het <strong>NOOIT, NOOIT, NOOIT</strong> een buigings-<strong>e</strong> aan het einde! Het blijft altijd in de kale basisvorm.</p>
          <ul class="mt-2 space-y-1 text-sm text-slate-700 dark:text-slate-300">
            <li>❌ <em>Fout:</em> De man is <strong>aardige</strong>.</li>
            <li>✅ <em>Correct:</em> De man is <strong>aardig</strong>.</li>
          </ul>
        </div>

        <div class="bg-rose-50 dark:bg-rose-900/20 border-l-4 border-rose-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-rose-700 dark:text-rose-300 mb-2">🏆 PRO REGEL 4: De Geen-Lijdend-Voorwerp Regel</h3>
          <p class="text-slate-700 dark:text-slate-300">Een koppelwerkwoord kan <strong>NOOIT</strong> een lijdend voorwerp hebben. Je kunt niet vragen "Wie of wat + [koppelwerkwoord]?".</p>
          <ul class="mt-2 space-y-1 text-sm text-slate-700 dark:text-slate-300">
            <li>❌ <em>Fout:</em> Jan is een boek. (Je kunt niet vragen: "Wat is Jan?").</li>
            <li>✅ <em>Correct:</em> Jan leest een boek. ('Lezen' is géén koppelwerkwoord, 'een boek' is wél een lijdend voorwerp).</li>
          </ul>
        </div>
      `
    },
    {
      title: "Deel 4: De Grootste 'Pas Op' Valkuilen ⚠️",
      body: `
        <p>Dit zijn de fouten die 90% van de studenten (en veel moedertaalsprekers!) maken.</p>
        
        <h3 class="text-lg font-bold mt-6 mb-3 text-slate-800 dark:text-slate-200">PAS OP 1: De Beruchte "-e" Valkuil (NDG vs. Bijvoeglijke Bepaling)</h3>
        <p class="text-sm text-slate-700 dark:text-slate-300 mb-4">Wanneer krijgt een bijvoeglijk naamwoord wél een -e, en wanneer niet?</p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-gradient-to-r from-rose-600 to-pink-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Zin</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Analyse</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Correct of Fout?</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm">De <strong>aardige</strong> man lacht.</td>
                <td class="px-4 py-3 text-sm text-xs">'Lacht' is een actiewerkwoord. 'Aardige' is een <em>bijvoeglijke bepaling</em>.</td>
                <td class="px-4 py-3 text-sm text-emerald-600 font-bold">✅ Correct (Wél een -e).</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm">De man is <strong>aardig</strong>.</td>
                <td class="px-4 py-3 text-sm text-xs">'Is' is een koppelwerkwoord. 'Aardig' is het NDG.</td>
                <td class="px-4 py-3 text-sm text-emerald-600 font-bold">✅ Correct (Geen -e!).</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50">
                <td class="px-4 py-3 text-sm">De man is <strong class="text-rose-600">aardige</strong>.</td>
                <td class="px-4 py-3 text-sm text-xs">'Is' is een koppelwerkwoord. 'Aardige' is het NDG.</td>
                <td class="px-4 py-3 text-sm text-rose-600 font-bold">❌ FOUT! (NDG krijgt nooit een -e).</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 class="text-lg font-bold mt-8 mb-3 text-slate-800 dark:text-slate-200">PAS OP 2: De "Worden" Valkuil (Koppelwerkwoord vs. Passief)</h3>
        <p class="text-sm text-slate-700 dark:text-slate-300 mb-4">Het woord <em>worden</em> is een kameleon. Het kan een koppelwerkwoord zijn (NG), maar ook een hulpwerkwoord voor de lijdende vorm (passief).</p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-gradient-to-r from-amber-600 to-orange-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Zin</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Type 'Worden'</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Uitleg</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm">Hij <strong>wordt</strong> leraar.</td>
                <td class="px-4 py-3 text-sm font-bold text-emerald-600">Koppelwerkwoord (NG)</td>
                <td class="px-4 py-3 text-sm text-xs">Hij verandert van toestand. 'Leraar' is het NDG.</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30">
                <td class="px-4 py-3 text-sm">Hij <strong>wordt</strong> ontslagen.</td>
                <td class="px-4 py-3 text-sm font-bold text-purple-600">Hulpwerkwoord (Passief)</td>
                <td class="px-4 py-3 text-sm text-xs">Er vindt een actie plaats. 'Ontslagen' is een voltooid deelwoord.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 class="text-lg font-bold mt-8 mb-3 text-slate-800 dark:text-slate-200">PAS OP 3: De "Vinden" Valkuil (Actie vs. Koppel)</h3>
        <p class="text-sm text-slate-700 dark:text-slate-300 mb-4">Veel mensen denken dat <em>vinden</em> of <em>noemen</em> koppelwerkwoorden zijn. <strong>FOUT!</strong> Dit zijn gewone werkwoorden met een lijdend voorwerp.</p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-gradient-to-r from-blue-600 to-cyan-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Zin</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Analyse</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Uitleg</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm">Ik vind <strong>hem</strong> aardig.</td>
                <td class="px-4 py-3 text-sm font-bold text-rose-600">Lijdend Voorwerp</td>
                <td class="px-4 py-3 text-sm text-xs">'Hem' is LV (Wie vind ik?). 'Aardig' is een bijvoeglijke bepaling bij het LV.</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30">
                <td class="px-4 py-3 text-sm">Hij is aardig.</td>
                <td class="px-4 py-3 text-sm font-bold text-emerald-600">Naamwoordelijk Gezegde</td>
                <td class="px-4 py-3 text-sm text-xs">'Is' is wél een koppelwerkwoord. 'Aardig' is het NDG.</td>
              </tr>
            </tbody>
          </table>
        </div>
      `
    }
  ],
  rulesTable: [
    {
      rule: "De Formule van het NG",
      structure: "Naamwoordelijk Gezegde = Koppelwerkwoord + Naamwoordelijk Deel van het Gezegde (NDG).",
      example: "Jan is leraar. (is = KW, leraar = NDG).",
      usage: "Gebruik deze formule om te bepalen of een zin een NG heeft."
    },
    {
      rule: "De Referentie-Regel",
      structure: "Het NDG verwijst ALTIJD 100% terug naar het onderwerp.",
      example: "De koffie is koud. ('Koud' verwijst naar 'de koffie').",
      usage: "Als het woord niet naar het onderwerp verwijst, is het geen NG."
    },
    {
      rule: "De GEEN -e REGEL",
      structure: "Een NDG dat een bijvoeglijk naamwoord is, krijgt NOOIT een buigings-e.",
      example: "De man is aardig. (Niet: aardige).",
      usage: "Dit is de meest gemaakte fout. Onthoud: achter een koppelwerkwoord krijgt het bn geen -e."
    },
    {
      rule: "Geen Lijdend Voorwerp",
      structure: "Een koppelwerkwoord kan NOOIT een lijdend voorwerp hebben.",
      example: "Jan is een boek. (Fout! Je kunt niet vragen 'Wat is Jan?').",
      usage: "Koppelwerkwoorden drukken geen actie uit op een object, maar verbinden het onderwerp met een eigenschap."
    }
  ],
  callouts: [
    { type: "remember", label: "🏆 PRO REGEL 1", text: "Naamwoordelijk Gezegde = Koppelwerkwoord + Naamwoordelijk Deel van het Gezegde (NDG)." },
    { type: "remember", label: "🏆 PRO REGEL 2", text: "Het NDG verwijst ALTIJD 100% terug naar het onderwerp." },
    { type: "remember", label: "🏆 PRO REGEL 3", text: "De GEEN -e REGEL: Een NDG (bijvoeglijk naamwoord) krijgt NOOIT een buigings-e!" },
    { type: "remember", label: "⚠️ PAS OP 1", text: "Zeg NOOIT 'De man is aardige'. Het NDG krijgt nooit een -e." },
    { type: "remember", label: "⚠️ PAS OP 2", text: "'Worden' kan een koppelwerkwoord zijn (verandering) of een hulpwerkwoord (passief). Kijk wat erachter komt!" },
    { type: "tip", label: "💡 Pro-tip", text: "'Vinden' en 'noemen' zijn GEEN koppelwerkwoorden. Ze hebben een lijdend voorwerp (Ik vind HEM aardig)." }
  ],
  commonMistakes: [
    { incorrect: "Het weer is mooie.", correct: "Het weer is mooi.", explanation: "Het NDG 'mooi' verwijst naar het onderwerp 'het weer' en krijgt als bijvoeglijk naamwoord achter een koppelwerkwoord NOOIT een -e." },
    { incorrect: "Ik vind dat het weer mooie is.", correct: "Ik vind dat het weer mooi is.", explanation: "Ook in een bijzin blijft het NDG zonder -e. 'Mooi' is het NDG van de bijzin 'dat het weer mooi is'." },
    { incorrect: "Jan is een appel.", correct: "Jan eet een appel.", explanation: "Koppelwerkwoorden hebben géén lijdend voorwerp. Je kunt niet vragen 'Wat is Jan?'. 'Eten' is wel een actiewerkwoord met een LV." },
    { incorrect: "De taart wordt lekker. (bedoeld: de taart is al gebakken en smaakt goed)", correct: "De taart is lekker.", explanation: "Als het om een toestand gaat, gebruik je 'zijn'. 'Worden' gebruik je voor een verandering (De taart wordt koud) of passief (De taart wordt gebakken)." },
    { incorrect: "Ik vind hem aardige.", correct: "Ik vind hem aardig.", explanation: "In 'Ik vind hem aardig' is 'aardig' een bijvoeglijke bepaling bij het lijdend voorwerp 'hem'. Ook deze krijgt geen -e." }
  ],
  review: [
    "✅ Naamwoordelijk Gezegde = Koppelwerkwoord + NDG.",
    "✅ De 8 koppelwerkwoorden: zijn, worden, blijven, lijken, schijnen, blijken, heten, dunken.",
    "✅ Het NDG verwijst ALTIJD terug naar het onderwerp.",
    "✅ Het NDG (als bn) krijgt NOOIT een buigings-e.",
    "✅ Koppelwerkwoorden hebben NOOIT een lijdend voorwerp.",
    "✅ 'Worden' als koppelwerkwoord = verandering. 'Worden' als hulpwerkwoord = passief.",
    "✅ 'Vinden' en 'noemen' zijn GEEN koppelwerkwoorden, ze hebben een lijdend voorwerp."
  ],
  qa: [
    {
      question: "De ultieme '-e' valkuil (NDG vs. Bijvoeglijke Bepaling): Een student schrijft de volgende twee zinnen. In één van de twee zinnen staat een grammaticale fout met de uitgang van het bijvoeglijk naamwoord. Welke zin is fout, en waarom? 1. 'De nieuwe, onbekende manager is erg aardige.' 2. 'De nieuwe, onbekende manager is erg aardig.'",
      answer: "Zin 1 is fout. In beide zinnen is 'is' het koppelwerkwoord. Het woord 'aardig' is het Naamwoordelijk Deel van het Gezegde (NDG) en verwijst terug naar het onderwerp ('de manager'). De gouden regel stelt dat een NDG NOOIT een buigings-e krijgt. Het maakt niet uit dat er vóór het onderwerp wel bijvoeglijke naamwoorden mét een -e staan ('de nieuwe, onbekende manager'). Zodra het bn achter het koppelwerkwoord staat, valt de -e weg. De correcte zin is: 'De nieuwe, onbekende manager is erg aardig.'"
    },
    {
      question: "Koppelwerkwoord vs. Lijdend Voorwerp (De 'Vinden' valkuil): Lees de volgende twee zinnen. In beide zinnen komt het woord 'aardig' voor. 1. 'De manager is aardig.' 2. 'Ik vind de manager aardig.' Waarom is 'aardig' in zin 1 een Naamwoordelijk Deel van het Gezegde (NDG), maar in zin 2 een Bijvoeglijke Bepaling bij het Lijdend Voorwerp? Wat is het exacte grammaticale bewijs?",
      answer: "Het bewijs ligt in de aanwezigheid van een Lijdend Voorwerp. In zin 1 is 'is' een koppelwerkwoord. Koppelwerkwoorden hebben géén lijdend voorwerp. 'Aardig' verwijst direct naar het onderwerp ('de manager') en is dus het NDG. In zin 2 is 'vind' een actiewerkwoord. Je kunt vragen: 'Wie of wat vind ik?' -> 'De manager' is het Lijdend Voorwerp. Omdat er al een lijdend voorwerp is, kan 'vind' onmogelijk een koppelwerkwoord zijn. 'Aardig' verwijst naar het lijdend voorwerp en is een bijvoeglijke bepaling bij het LV."
    },
    {
      question: "De 'Worden' valkuil (Verandering vs. Passief): Een student vertaalt de Engelse zin 'The door is being opened' naar het Nederlands. Hij schrijft: 'De deur wordt open.' Waarom is deze zin grammaticaal 100% fout, en hoe moet hij wél? Leg uit welk 'gezicht' van het woord 'worden' de student hier verkeerd toepast.",
      answer: "De zin 'De deur wordt open' is fout omdat de student het koppelwerkwoord 'worden' (verandering van toestand) verwart met het hulpwerkwoord 'worden' (passief / lijdende vorm). 'Open' is een bijvoeglijk naamwoord (een toestand). Na een koppelwerkwoord dat een toestand uitdrukt, gebruik je 'zijn', niet 'worden'. De correcte zinnen zijn: 'De deur is open.' (Koppelwerkwoord: de toestand) of 'De deur wordt geopend.' (Passief hulpwerkwoord: de actie)."
    },
    {
      question: "De Nuance van de Waarneming (Lijken vs. Schijnen vs. Blijken): Je bent een rechercheur en je onderzoekt een moordzaak. Je staat voor de rechter. Je wilt drie dingen zeggen over de verdachte (de butler). Schrijf drie zinnen met behulp van de koppelwerkwoorden 'lijkt', 'schijnt' en 'blijkt'. Leg bij elke zin uit wat de rechter uit jouw woorden opmaakt over jouw bewijslast.",
      answer: "1. 'De butler lijkt zenuwachtig.' (Dit is een visuele waarneming. De rechter begrijpt dat je dit ziet: hij zweet, hij trilt). 2. 'De butler schijnt een geheim bankrekening te hebben.' (Dit is informatie van buitenaf. De rechter begrijpt dat je dit van een informant of uit een gerucht hebt gehoord). 3. 'De butler blijkt de dader te zijn.' (Dit is een hard feit. De rechter begrijpt dat je onomstotelijk bewijs hebt gevonden, zoals DNA)."
    }
  ]
};