import type { GrammarLesson } from "../../types";

export const schrijfvaardigheidC1: GrammarLesson = {
  id: "nl-schrijfvaardigheid-c1-1",
  title: "Schrijfvaardigheid C1: Formele E-mail, Klacht & Samenvatting",
  level: 3,
  topic: "Vaardigheden & Schrijven",
  body: "Beheers het schrijven op C1-niveau volledig: de opbouw van formele e-mails, de FEIT-GEVOLG-WENS methode voor klachten, het maken van een objectieve samenvatting, en het consistent gebruiken van het formele register.",
  overview:
    "Dit is de meest uitgebreide gids over Schrijfvaardigheid op C1-niveau in het Nederlands. Je leert hoe je een professionele, gestructureerde en doelgerichte tekst schrijft. Je doorziet de valkuilen van emotionele taal, register-mixing en plagiaat, en past de gouden regels voor formele communicatie toe. Met prachtige tabellen, strikte PRO-regels en 4 korte oefenvragen schrijf je voortaan als een ware professional!",
  anchorSectionId: "waarom-is-schrijven-c1-moeilijk",
  exercises: [],
  timeExpressionsLabel: "De 5 Onderdelen van een Formele Tekst 📧",
  timeExpressions: {
    header: "Onderdeel | Functie | C1-Niveau Voorbeeldzin",
    rows: [
      ["**1. Onderwerp**", "Direct duidelijk maken waar de mail over gaat", "*Betreft: Aanvraag verlenging projectdeadline (Ref: 12345)*"],
      ["**2. Aanhef**", "Formele begroeting", "*Geachte mevrouw De Vries,*"],
      ["**3. Aanleiding**", "Waarom schrijf je? Direct ter zake komen", "*Naar aanleiding van ons telefonische gesprek van gisteren...*"],
      ["**4. De Kern**", "De feiten, het verzoek of de uitleg (gebruik alinea's!)", "*Zoals u in de bijlage kunt zien, zijn de cijfers gestegen...*"],
      ["**5. Slot & Afsluiting**", "Call to action en formele groet", "*Ik zie uw reactie met belangstelling tegemoet. Met vriendelijke groet,*"]
    ]
  },
  details: [
    {
      title: "Deel 1: Waarom is schrijven op C1-niveau zo moeilijk? ✍️",
      body: `
        <p>Op C1-niveau gaat het niet meer alleen om grammaticaal correcte zinnen. Het gaat om <strong>register</strong> (formeel vs. informeel), <strong>structuur</strong> (logische opbouw) en <strong>doelgerichtheid</strong> (bereik je je doel bij de lezer?). Een slecht gestructureerde tekst, hoe goed de grammatica ook is, wordt als onprofessioneel ervaren.</p>
        
        <div class="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-emerald-700 dark:text-emerald-300 mb-2">🏆 PRO REGEL 1: De Lezer-Centrale Regel</h3>
          <p class="text-slate-700 dark:text-slate-300">Schrijf altijd met de lezer in je achterhoofd. Wat wil de lezer weten? Wat is de toon van de organisatie? Maak het de lezer <strong>zo makkelijk mogelijk</strong> om jouw boodschap te begrijpen.</p>
        </div>
      `
    },
    {
      title: "Deel 2: De Formele E-mail / Brief: De Standaardopbouw 📧",
      body: `
        <p>Een formele e-mail of brief volgt een vaste, voorspelbare structuur. Afwijken hiervan zorgt voor verwarring en komt onprofessioneel over.</p>
        
        <div class="bg-rose-50 dark:bg-rose-900/20 border-l-4 border-rose-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-rose-700 dark:text-rose-300 mb-2">🚨 PAS OP! DE AANHEF-VALKUIL!</h3>
          <p class="text-sm text-slate-700 dark:text-slate-300 mb-2">Gebruik <strong>NOOIT</strong> <em>"Beste meneer De Vries"</em> in een formele, eerste contactpoging. Gebruik <em>"Geachte"</em>.</p>
          <p class="text-sm text-slate-700 dark:text-slate-300">Als je de naam écht niet kunt vinden, gebruik dan: <em>"Geachte heer/mevrouw,"</em> (maar dit is een laatste redmiddel; zoek liever op LinkedIn of de website).</p>
        </div>
      `
    },
    {
      title: "Deel 3: De Klachtbrief: Professioneel Ontevreden Zijn 📢",
      body: `
        <p>Een klacht schrijven is een kunst. Je moet duidelijk maken dat er iets mis is, <strong>zonder</strong> agressief of emotioneel te worden. Een emotionele klacht wordt vaak genegeerd; een feitelijke klacht wordt serieus genomen.</p>
        <p class="text-sm text-slate-700 dark:text-slate-300 mb-4">Gebruik de <strong>FEIT - GEVOLG - WENS</strong> methode.</p>
        
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-gradient-to-r from-indigo-600 to-purple-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Stap</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Doel</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">C1-Niveau Voorbeeld</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-semibold">1. FEIT</td><td class="px-4 py-3 text-sm text-xs">Objectief beschrijven wat er misging (datum, ordernummer).</td><td class="px-4 py-3 text-sm">"Op 12 maart heb ik artikel X besteld (nr. 987). Op 15 maart ontving ik echter artikel Y."</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-semibold">2. GEVOLG</td><td class="px-4 py-3 text-sm text-xs">Uitleggen waarom dit een probleem is (zakelijk, niet emotioneel).</td><td class="px-4 py-3 text-sm">"Hierdoor kan ik mijn eigen project niet op tijd afronden, wat tot vertraging leidt."</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-4 py-3 text-sm font-semibold">3. WENS</td><td class="px-4 py-3 text-sm text-xs">Duidelijk aangeven wat de oplossing moet zijn.</td><td class="px-4 py-3 text-sm">"Ik verzoek u daarom het juiste artikel alsnog per omgaande te verzenden, of het bedrag te crediteren."</td></tr>
            </tbody>
          </table>
        </div>

        <div class="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-indigo-700 dark:text-indigo-300 mb-2">🏆 PRO REGEL 2: De Passief-Regel bij Klachten</h3>
          <p class="text-slate-700 dark:text-slate-300">Gebruik bij een klacht vaker de <strong>lijdende vorm (passief)</strong> of onpersoonlijke constructies. Dit klinkt minder beschuldigend en meer zakelijk.</p>
          <ul class="mt-2 space-y-1 text-sm text-slate-700 dark:text-slate-300">
            <li>❌ <em>Fout (Aanvallend):</em> "Jullie hebben mijn bestelling verprutst!"</li>
            <li>✅ <em>Correct (Zakelijk):</em> "Er is een fout gemaakt bij de verwerking van mijn bestelling."</li>
          </ul>
        </div>
      `
    },
    {
      title: "Deel 4: De Samenvatting: De Kern Vangen 🎯",
      body: `
        <p>Een samenvatting (summary) heeft één doel: de hoofdboodschap van een brontekst weergeven in je <strong>eigen woorden</strong>, zonder je eigen mening.</p>
        
        <h3 class="text-lg font-bold mt-6 mb-3 text-slate-800 dark:text-slate-200">De 4 IJzeren Wetten van de Samenvatting</h3>
        <ol class="list-decimal list-inside space-y-2 text-slate-700 dark:text-slate-300 mb-6">
          <li><strong>Eigen woorden:</strong> Gebruik <strong>NOOIT</strong> zinnen uit de originele tekst (dat is plagiaat).</li>
          <li><strong>Geen eigen mening:</strong> Schrijf nooit <em>"Ik vind dat..."</em> of <em>"De schrijver heeft gelijk want..."</em>. Je bent een neutraal doorgeefluik.</li>
          <li><strong>Lengte:</strong> Een samenvatting is meestal <strong>maximaal 1/3</strong> van de lengte van de originele tekst.</li>
          <li><strong>Volledigheid:</strong> De 5 W's (Wie, Wat, Waar, Wanneer, Waarom) van de brontekst moeten terugkomen.</li>
        </ol>

        <h3 class="text-lg font-bold mt-6 mb-3 text-slate-800 dark:text-slate-200">Handige Signaalwoorden</h3>
        <ul class="list-disc list-inside space-y-1 text-slate-700 dark:text-slate-300 mb-6">
          <li><em>De schrijver betoogt dat...</em></li>
          <li><em>Ten eerste wordt gesteld dat...</em></li>
          <li><em>Daarnaast wordt opgemerkt dat...</em></li>
          <li><em>Tot slot concludeert de auteur dat...</em></li>
        </ul>

        <div class="bg-rose-50 dark:bg-rose-900/20 border-l-4 border-rose-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-rose-700 dark:text-rose-300 mb-2">🚨 PAS OP! DE "COPY-PASTE" VALKUIL!</h3>
          <p class="text-sm text-slate-700 dark:text-slate-300">Zelfs als je één of twee woorden uit de originele tekst overneemt, moet je ze tussen aanhalingstekens zetten. Maar op C1-niveau wordt verwacht dat je de <strong>hele zin herschrijft</strong> (parafraseert).</p>
        </div>
      `
    },
    {
      title: "Deel 5: Register: Formeel vs. Informeel 🎩",
      body: `
        <p>Het mixen van formele en informele taal is de snelste manier om je C1-niveau te verliezen. Kies één register en houd dit vol.</p>
        
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-gradient-to-r from-teal-600 to-cyan-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Informeel (Vermijden in formele tekst) ❌</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Formeel / Professioneel (Gebruiken) ✅</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm text-rose-600">Ik wil graag weten...</td><td class="px-4 py-3 text-sm text-emerald-600 font-bold">Ik zou graag vernemen... / Ik verzoek u om...</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm text-rose-600">Het spijt me dat het niet gelukt is.</td><td class="px-4 py-3 text-sm text-emerald-600 font-bold">Het spijt ons dat wij uw verzoek niet kunnen honoreren.</td></tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm text-rose-600">Jullie hebben een fout gemaakt.</td><td class="px-4 py-3 text-sm text-emerald-600 font-bold">Er is een onjuistheid geconstateerd.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm text-rose-600">Doei / Groetjes,</td><td class="px-4 py-3 text-sm text-emerald-600 font-bold">Met vriendelijke groet, / Hoogachtend,</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-4 py-3 text-sm text-rose-600">Ik denk dat dit een goed idee is.</td><td class="px-4 py-3 text-sm text-emerald-600 font-bold">Ik ben van mening dat dit een wenselijke ontwikkeling is.</td></tr>
            </tbody>
          </table>
        </div>
      `
    }
  ],
  rulesTable: [
    {
      rule: "De Lezer-Centrale Regel",
      structure: "Schrijf altijd met de lezer in je achterhoofd. Maak de boodschap zo makkelijk mogelijk te begrijpen.",
      example: "Gebruik duidelijke alinea's, een helder onderwerp en een logische opbouw.",
      usage: "Zorgt voor professionaliteit en verhoogt de kans dat je doel (bijv. een reactie of oplossing) wordt bereikt."
    },
    {
      rule: "FEIT - GEVOLG - WENS",
      structure: "Bij klachten: beschrijf eerst het feit, dan het zakelijke gevolg, en sluit af met een concrete wens.",
      example: "Feit: bestelling te laat. Gevolg: projectvertraging. Wens: verzoek om spoedige levering of creditering.",
      usage: "Houdt de klacht objectief en oplossingsgericht, in plaats van emotioneel en beschuldigend."
    },
    {
      rule: "De 4 Wetten van de Samenvatting",
      structure: "Eigen woorden, geen eigen mening, max 1/3 lengte, volledigheid (5 W's).",
      example: "Gebruik 'De auteur betoogt dat...' in plaats van 'Ik vind dat de auteur gelijk heeft'.",
      usage: "Garandeert dat je een objectieve weergave van de brontekst levert zonder plagiaat."
    },
    {
      rule: "Consistent Register",
      structure: "Mix nooit formeel en informeel taalgebruik in dezelfde tekst.",
      example: "Niet: 'Geachte heer Jansen, ik wil even vragen of...'. Wel: 'Geachte heer Jansen, ik zou graag willen vernemen of...'",
      usage: "Een consistent register straalt professionaliteit en beheersing van de taal uit."
    }
  ],
  callouts: [
    { type: "remember", label: "🏆 PRO REGEL 1", text: "De Lezer-Centrale Regel: Maak het de lezer zo makkelijk mogelijk om jouw boodschap te begrijpen." },
    { type: "remember", label: "🏆 PRO REGEL 2", text: "Gebruik bij klachten vaker de lijdende vorm (passief) of onpersoonlijke constructies. Dit klinkt zakelijker." },
    { type: "remember", label: "⚠️ PAS OP 1", text: "Gebruik NOOIT 'Beste meneer' in een formele, eerste contactpoging. Gebruik 'Geachte'." },
    { type: "remember", label: "⚠️ PAS OP 2", text: "Vermijd emotionele woorden zoals 'belachelijk' of 'schandalig' in klachten. Blijf koel en feitelijk." },
    { type: "remember", label: "⚠️ PAS OP 3", text: "Bij een samenvatting: gebruik NOOIT zinnen uit de originele tekst (plagiaat) en geef geen eigen mening." },
    { type: "tip", label: "💡 Pro-tip", text: "Gebruik signaalwoorden zoals 'Ten eerste', 'Daarnaast' en 'Tot slot' om je e-mail of samenvatting logisch en vloeiend te structureren." }
  ],
  commonMistakes: [
    { incorrect: "Onderwerp: Vraagje", correct: "Onderwerp: Vraag betreffende factuur #12345", explanation: "Een vaag onderwerp zorgt ervoor dat je e-mail niet serieus wordt genomen of over het hoofd wordt gezien." },
    { incorrect: "Dit is de slechtste service ooit!", correct: "Ik ben zeer ontevreden over de geleverde service, omdat...", explanation: "Emotionele taal maakt je zwak en onprofessioneel. Feitelijke taal wordt serieuzer genomen." },
    { incorrect: "De auteur heeft een goed punt, want ik vind ook dat...", correct: "De auteur betoogt dat...", explanation: "In een samenvatting moet je neutraal en objectief blijven. Eigen mening hoort er niet in." },
    { incorrect: "Geachte heer Jansen, ik wil even vragen of...", correct: "Geachte heer Jansen, ik zou graag willen vernemen of...", explanation: "Dit is een register-mix. 'Geachte' is formeel, 'even vragen' is informeel. Houd de hele zin formeel." },
    { incorrect: "Beste meneer de directeur,", correct: "Geachte heer de directeur,", explanation: "'Beste' is te informeel voor een eerste formele brief of e-mail aan een onbekende of hooggeplaatste persoon." }
  ],
  review: [
    "✅ Formele e-mail: Duidelijk onderwerp, 'Geachte' aanhef, aanleiding, kern, slot.",
    "✅ Klachtbrief: Gebruik de FEIT - GEVOLG - WENS methode. Blijf objectief en zakelijk.",
    "✅ Passief gebruik in klachten klinkt minder beschuldigend en meer professioneel.",
    "✅ Samenvatting: Eigen woorden, geen mening, max 1/3 lengte, 5 W's aanwezig.",
    "✅ Register: Kies formeel of informeel en mix ze nooit door elkaar.",
    "✅ Vermijd emotionele taal ('belachelijk', 'kut') in professionele communicatie."
  ],
  qa: [
    {
      question: "Je kent de naam van de persoon aan wie je een formele e-mail stuurt niet. Wat is de meest professionele aanhef?",
      answer: "Geachte heer/mevrouw, (Probeer altijd eerst de naam te achterhalen, maar als dat echt niet kan, is dit de juiste formele noodoplossing)."
    },
    {
      question: "Je schrijft een klacht omdat je pakketje te laat is. Welke zin is professioneler? A) 'Jullie hebben mijn pakketje weer verpest!' B) 'Tot mijn spijt moet ik constateren dat mijn bestelling niet op de afgesproken datum is geleverd.'",
      answer: "B. Deze zin is feitelijk, objectief en gebruikt een formele constructie, wat de kans op een serieuze afhandeling vergroot."
    },
    {
      question: "Wat zijn de twee belangrijkste regels bij het schrijven van een samenvatting?",
      answer: "1. Gebruik je eigen woorden (geen copy-paste). 2. Geef geen eigen mening (blijf neutraal en objectief)."
    },
    {
      question: "Is de zin 'Ik vind dat jullie beleid echt kut is' geschikt voor een formele klachtbrief? Waarom wel of niet, en hoe moet het beter?",
      answer: "Nee, absoluut niet. Het is informeel, emotioneel en onprofessioneel. Het moet zijn: 'Ik ben zeer ontevreden over het huidige beleid, omdat het niet effectief is.'"
    }
  ]
};