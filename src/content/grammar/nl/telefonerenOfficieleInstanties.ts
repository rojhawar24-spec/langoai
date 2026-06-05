import type { GrammarLesson } from "../../types";

export const telefonerenOfficieleInstanties: GrammarLesson = {
  id: "nl-telefoneren-officiele-instanties-1",
  title: "Telefoneren met Officiële Instanties: Afspraak Maken & Klagen",
  level: 3,
  topic: "Communicatie & Vaardigheden",
  body: "Beheers het telefoneren met officiële instanties volledig: een afspraak maken, een klacht indienen, het spellingalfabet, en de Nederlandse cultuur van directheid en zakelijkheid.",
  overview:
    "Dit is de meest uitgebreide gids over telefoneren met officiële instanties in het Nederlands. Je leert hoe je beleefd een afspraak maakt, een klacht indient met de Feit-Gevoel-Wens methode, en doorziet de valkuilen van het register en het spellingalfabet. Met prachtige tabellen, strikte PRO-regels en 4 korte oefenvragen voer je telefoongesprekken als een ware professional!",
  anchorSectionId: "waarom-is-dit-zo-moeilijk",
  exercises: [],
  timeExpressionsLabel: "De 4 Stappen van een Afspraak 📅",
  timeExpressions: {
    header: "Stap | Doel | Formule (B1/B2) | Formule (C1 - Professioneel)",
    rows: [
      ["1. Opening", "Begroeting + Identificatie", "Hallo, met [Naam].", "Goedemorgen, u spreekt met [Naam]."],
      ["2. Doel", "Waarom bel je?", "Ik wil een afspraak maken.", "Ik bel om een afspraak te maken voor..."],
      ["3. Onderhandelen", "Datum/Tijd vinden", "Kan het morgen?", "Schikt aanstaande dinsdag om 10:00 uur?"],
      ["4. Afsluiting", "Bevestigen + Bedanken", "Oké, doe dag. Doei.", "Hartelijk dank. Dan zie ik u dinsdag. Tot ziens."]
    ]
  },
  details: [
    {
      title: "Deel 1: Waarom is dit zo moeilijk? 🤯",
      body: `
        <p>Telefoneren met officiële instanties (de gemeente, een ziekenhuis, een bank of een verzekering) is anders dan bellen met een vriend.</p>
        <ul class="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300 mb-4">
          <li><strong>Het Register:</strong> Je moet <strong>formeel en beleefd</strong> zijn, maar wel <strong>direct</strong>.</li>
          <li><strong>De Snelheid:</strong> Ambtenaren en baliemedewerkers praten vaak snel en gebruiken vakjargon.</li>
          <li><strong>De Gevoeligheid:</strong> Bij klachten of medische afspraken is privacy en precisie cruciaal.</li>
        </ul>
        
        <div class="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-emerald-700 dark:text-emerald-300 mb-2">🏆 PRO REGEL 1: De Gouden Voorbereiding</h3>
          <p class="text-slate-700 dark:text-slate-300">Voordat je belt, leg je <strong>ALTIJD</strong> het volgende klaar:</p>
          <ol class="list-decimal list-inside mt-2 space-y-1 text-slate-700 dark:text-slate-300">
            <li><strong>Pen en papier</strong> (voor namen, nummers, referentienummers).</li>
            <li>Je <strong>BSN</strong> (Burger Service Nummer) of polisnummer (vaak gevraagd!).</li>
            <li>Je <strong>agenda</strong> (om direct een datum te prikken).</li>
          </ol>
        </div>
      `
    },
    {
      title: "Deel 2: Scenario A: Een Afspraak Maken 📅",
      body: `
        <p>Het doel is efficiënt: kom snel ter zake, maar blijf beleefd. Gebruik <strong>nooit</strong> de gebiedende wijs (<em>"Geef me een afspraak"</em>), maar gebruik de aanvoegende wijs of <em>zou/wil</em>.</p>
        
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-gradient-to-r from-indigo-600 to-purple-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Situatie</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Zin (Kies de beleefde vorm!)</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-semibold">Verzoek</td><td class="px-4 py-3 text-sm">"Graag zou ik een afspraak willen maken bij de heer Jansen."</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-semibold">Alternatief vragen</td><td class="px-4 py-3 text-sm">"Helaas kan ik dan niet. Heeft u nog een ander moment?"</td></tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-semibold">Vragen naar duur</td><td class="px-4 py-3 text-sm">"Hoe lang duurt het consult ongeveer?"</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-semibold">Vragen naar voorbereiding</td><td class="px-4 py-3 text-sm">"Moet ik nog iets meenemen of voorbereiden?"</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-4 py-3 text-sm font-semibold">Annuleren</td><td class="px-4 py-3 text-sm">"Ik moet mijn afspraak voor morgen helaas annuleren."</td></tr>
            </tbody>
          </table>
        </div>

        <div class="bg-rose-50 dark:bg-rose-900/20 border-l-4 border-rose-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-rose-700 dark:text-rose-300 mb-2">🚨 PAS OP! DE "IK WIL"-VALKUIL!</h3>
          <p class="text-sm text-slate-700 dark:text-slate-300 mb-2">Zeg <strong>NOOIT</strong>: <em>"Ik wil morgen om 10 uur komen."</em> Dit klinkt als een bevel of een eis.</p>
          <p class="text-sm text-slate-700 dark:text-slate-300">Gebruik <strong>ALTIJD</strong>: <em>"Ik <strong>zou graag</strong> morgen om 10 uur komen"</em> of <em>"<strong>Kan</strong> ik morgen om 10 uur langskomen?"</em></p>
        </div>
      `
    },
    {
      title: "Deel 3: Scenario B: Een Klacht Indienen 📢",
      body: `
        <p>Klagen in Nederland is een kunst. Je moet <strong>niet schelden</strong> (dat schiet niet op), maar wel <strong>heel duidelijk en zakelijk</strong> zijn. Gebruik de <strong>FEIT-GEVOEL-WENS</strong> methode.</p>
        
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-gradient-to-r from-teal-600 to-cyan-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Fase</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Wat zeg je?</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Voorbeeldzin</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-bold text-teal-600">1. Feit</td><td class="px-4 py-3 text-sm text-xs">Beschrijf objectief wat er mis is.</td><td class="px-4 py-3 text-sm">"Ik heb op 12 mei een bestelling geplaatst, maar ik heb nog niets ontvangen."</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-bold text-teal-600">2. Impact</td><td class="px-4 py-3 text-sm text-xs">Leg uit waarom dit erg is (zakelijk).</td><td class="px-4 py-3 text-sm">"Dit is erg vervelend, want ik had het product dringend nodig."</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-4 py-3 text-sm font-bold text-teal-600">3. Wens</td><td class="px-4 py-3 text-sm text-xs">Eis geen dingen, maar stel een oplossing voor.</td><td class="px-4 py-3 text-sm">"Ik zou graag willen weten wanneer ik de zending kan verwachten."</td></tr>
            </tbody>
          </table>
        </div>

        <h3 class="text-lg font-bold mt-8 mb-3 text-slate-800 dark:text-slate-200">Nuttige Woordenschat voor Ongemak</h3>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-gradient-to-r from-rose-600 to-pink-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Basis (Te emotioneel) ❌</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Professioneel / Zakelijk ✅</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm text-rose-600">"Dit is belachelijk!"</td><td class="px-4 py-3 text-sm text-emerald-600 font-bold">"Ik ben zeer ontevreden over de gang van zaken."</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm text-rose-600">"Jullie zijn lui!"</td><td class="px-4 py-3 text-sm text-emerald-600 font-bold">"De service schiet helaas tekort."</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-4 py-3 text-sm text-rose-600">"Ik wil mijn geld terug!"</td><td class="px-4 py-3 text-sm text-emerald-600 font-bold">"Ik verzoek u om het bedrag te crediteren."</td></tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      title: "Deel 4: Luister-strategieën & Het Spellingalfabet 👂🅰️",
      body: `
        <p>Aan de andere kant van de lijn hoor je vaak standaardzinnen of moeilijke woorden. Bereid je hierop voor!</p>
        
        <h3 class="text-lg font-bold mt-6 mb-3 text-slate-800 dark:text-slate-200">Het Spellingalfabet (CRUCIAAL!)</h3>
        <p class="text-sm text-slate-700 dark:text-slate-300 mb-4">Bij officiële instanties <strong>moet</strong> je vaak je naam of adres spellen. Gebruik <strong>nooit</strong> "A van de Aapje", maar het officiële alfabet:</p>
        
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-gradient-to-r from-purple-600 to-pink-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Letter</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Naam</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Letter</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Naam</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-bold text-center">A</td><td class="px-4 py-3 text-sm">Amsterdam</td><td class="px-4 py-3 text-sm font-bold text-center">N</td><td class="px-4 py-3 text-sm">Nijmegen</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-bold text-center">B</td><td class="px-4 py-3 text-sm">Bernard</td><td class="px-4 py-3 text-sm font-bold text-center">O</td><td class="px-4 py-3 text-sm">Overijssel</td></tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-bold text-center">C</td><td class="px-4 py-3 text-sm">Cornelis</td><td class="px-4 py-3 text-sm font-bold text-center">P</td><td class="px-4 py-3 text-sm">Pieter</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-bold text-center">D</td><td class="px-4 py-3 text-sm">Dirk</td><td class="px-4 py-3 text-sm font-bold text-center">Q</td><td class="px-4 py-3 text-sm">Quirinius</td></tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-bold text-center">E</td><td class="px-4 py-3 text-sm">Eduard</td><td class="px-4 py-3 text-sm font-bold text-center">R</td><td class="px-4 py-3 text-sm">Rudolf</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-bold text-center">F</td><td class="px-4 py-3 text-sm">Ferdinand</td><td class="px-4 py-3 text-sm font-bold text-center">S</td><td class="px-4 py-3 text-sm">Simon</td></tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-bold text-center">G</td><td class="px-4 py-3 text-sm">Gerard</td><td class="px-4 py-3 text-sm font-bold text-center">T</td><td class="px-4 py-3 text-sm">Theodoor</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-bold text-center">H</td><td class="px-4 py-3 text-sm">Hendrik</td><td class="px-4 py-3 text-sm font-bold text-center">U</td><td class="px-4 py-3 text-sm">Utrecht</td></tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-bold text-center">I</td><td class="px-4 py-3 text-sm">Izaäk</td><td class="px-4 py-3 text-sm font-bold text-center">V</td><td class="px-4 py-3 text-sm">Victor</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-bold text-center">J</td><td class="px-4 py-3 text-sm">Johan</td><td class="px-4 py-3 text-sm font-bold text-center">W</td><td class="px-4 py-3 text-sm">Willem</td></tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-bold text-center">K</td><td class="px-4 py-3 text-sm">Karel</td><td class="px-4 py-3 text-sm font-bold text-center">X</td><td class="px-4 py-3 text-sm">Xantippe</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-bold text-center">L</td><td class="px-4 py-3 text-sm">Lodewijk</td><td class="px-4 py-3 text-sm font-bold text-center">Y</td><td class="px-4 py-3 text-sm">Ysbrand</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-4 py-3 text-sm font-bold text-center">M</td><td class="px-4 py-3 text-sm">Maria</td><td class="px-4 py-3 text-sm font-bold text-center">Z</td><td class="px-4 py-3 text-sm">Zacharias</td></tr>
            </tbody>
          </table>
        </div>

        <div class="bg-rose-50 dark:bg-rose-900/20 border-l-4 border-rose-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-rose-700 dark:text-rose-300 mb-2">🚨 PAS OP! DE "E" vs "I" VALKUIL!</h3>
          <p class="text-sm text-slate-700 dark:text-slate-300">In het Nederlands klinken de E en de I soms hetzelfde aan de telefoon. Gebruik <strong>altijd</strong> het spellingalfabet: <em>"E van Eduard"</em> en <em>"I van Izaäk"</em>. Zeg nooit <em>"E van de E"</em>.</p>
        </div>
      `
    },
    {
      title: "Deel 5: Cultuur & Etiquette: De Nederlandse Stijl 🇳🇱",
      body: `
        <p>Nederlanders zijn <strong>direct maar beleefd</strong>. Dit lijkt tegenstrijdig, maar het is de kern van de cultuur.</p>
        
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-gradient-to-r from-amber-600 to-orange-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Kenmerk</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Uitleg</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Voorbeeld</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-semibold">Doe normaal</td><td class="px-4 py-3 text-sm text-xs">Niet opscheppen, niet dramatisch doen.</td><td class="px-4 py-3 text-sm text-xs">"Het is een beetje vervelend" (ook al is het een ramp).</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-semibold">Zakelijkheid</td><td class="px-4 py-3 text-sm text-xs">Tijd is geld. Kom ter zake.</td><td class="px-4 py-3 text-sm text-xs">Geen lang verhaal, eerst zeggen waarom je belt.</td></tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-semibold">Privacy</td><td class="px-4 py-3 text-sm text-xs">Vragen naar BSN zijn normaal.</td><td class="px-4 py-3 text-sm text-xs">Dit is geen onbeleefdheid, maar protocol.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-4 py-3 text-sm font-semibold">Directheid</td><td class="px-4 py-3 text-sm text-xs">"Nee" is "Nee".</td><td class="px-4 py-3 text-sm text-xs">Als ze zeggen "Dat kan niet", vraag dan naar een alternatief.</td></tr>
            </tbody>
          </table>
        </div>
      `
    }
  ],
  rulesTable: [
    {
      rule: "De Gouden Voorbereiding",
      structure: "Leg BSN, agenda en pen klaar voordat je een officiële instantie belt.",
      example: "Zorg dat je je burgerservicenummer bij de hand hebt voor identificatie.",
      usage: "Voorkomt frustratie en versnelt het proces aan de balie of telefoon."
    },
    {
      rule: "De 'Ik Wil'-Valkuil",
      structure: "Zeg nooit 'Ik wil...', maar gebruik 'Ik zou graag... willen' of 'Kan ik...'.",
      example: "Niet: 'Ik wil morgen om 10 uur komen'. Wel: 'Kan ik morgen om 10 uur langskomen?'",
      usage: "De gebiedende wijs of 'ik wil' klinkt als een eis en is onbeleefd in het Nederlands."
    },
    {
      rule: "De Klacht-Regel (Feit-Gevoel-Wens)",
      structure: "Beschrijf het feit, leg de impact uit en stel een oplossing voor. Val de persoon niet aan.",
      example: "Niet: 'Jullie zijn lui'. Wel: 'De service schiet helaas tekort'.",
      usage: "Zakelijkheid en rust leiden tot de snelste oplossing bij klantenservices."
    },
    {
      rule: "Het Spellingalfabet",
      structure: "Gebruik officiële namen (A van Amsterdam, E van Eduard), niet 'A van de Aap'.",
      example: "Mijn achternaam is Jansen: J van Johan, A van Amsterdam, N van Nijmegen...",
      usage: "Cruciaal voor het correct noteren van namen, adressen en postcodes aan de telefoon."
    }
  ],
  callouts: [
    { type: "remember", label: "🏆 PRO REGEL 1", text: "De Gouden Voorbereiding: Leg BSN, agenda en pen klaar voordat je belt." },
    { type: "remember", label: "🏆 PRO REGEL 2", text: "De Klacht-Regel: Blijf rustig. Val het proces aan, niet de persoon. Gebruik Feit-Gevoel-Wens." },
    { type: "remember", label: "⚠️ PAS OP 1", text: "Zeg NOOIT 'Ik wil een afspraak'. Gebruik 'Ik zou graag... willen' of 'Kan ik...?'." },
    { type: "remember", label: "⚠️ PAS OP 2", text: "Gebruik het officiële spellingalfabet (E van Eduard, I van Izaäk), niet 'E van de E'." },
    { type: "remember", label: "⚠️ PAS OP 3", text: "Zeg NOOIT 'Doei' tegen een officiële instantie. Sluit af met 'Hartelijk dank, tot ziens'." },
    { type: "tip", label: "💡 Pro-tip", text: "Als je iemand niet verstaat, zeg dan: 'Kunt u dat alstublieft herhalen? De verbinding is slecht.' Dit is beleefd en effectief." }
  ],
  commonMistakes: [
    { incorrect: "Ik wil morgen om 10 uur komen.", correct: "Kan ik morgen om 10 uur langskomen?", explanation: "'Ik wil' klinkt als een dwingende eis. Gebruik een beleefde vraagvorm of 'zou graag'." },
    { incorrect: "Mijn naam is S van de Sjaak.", correct: "Mijn naam is S van Simon.", explanation: "Bij officiële instanties moet je het officiële spellingalfabet gebruiken om verwarring te voorkomen." },
    { incorrect: "Jullie zijn oplichters!", correct: "Ik ben zeer ontevreden over de afhandeling.", explanation: "Schelden of beledigen zorgt ervoor dat de medewerker zich afsluit. Blijf zakelijk en feitelijk." },
    { incorrect: "Ik begrijp het niet.", correct: "Kunt u dat herhalen alstublieft?", explanation: "'Ik begrijp het niet' is te vaag. Geef aan wat je precies nodig hebt (herhaling of langzamer praten)." },
    { incorrect: "Doei.", correct: "Hartelijk dank voor uw hulp. Tot ziens.", explanation: "'Doei' is te informeel voor een gesprek met een gemeente, bank of arts. Sluit altijd formeel af." }
  ],
  review: [
    "✅ Bereid je voor: BSN, agenda en pen liggen klaar voordat je belt.",
    "✅ Afspraak maken: Gebruik 'Ik zou graag... willen' in plaats van 'Ik wil'.",
    "✅ Klacht indienen: Gebruik de Feit-Gevoel-Wens methode en blijf zakelijk.",
    "✅ Spellingalfabet: Gebruik officiële namen (Eduard, Izaäk, Gerard) voor letters.",
    "✅ Cultuur: Nederlanders zijn direct maar zakelijk. 'Nee' is 'nee', vraag naar een alternatief.",
    "✅ Afsluiting: Sluit formeel af met 'Hartelijk dank, tot ziens' (nooit 'Doei')."
  ],
  qa: [
    {
      question: "Je belt de gemeente. Hoe vraag je beleefd om een afspraak met een specifieke ambtenaar?",
      answer: "'Graag zou ik een afspraak willen maken met de heer Jansen.' (Of: 'Kan ik bij de heer Jansen terecht?')"
    },
    {
      question: "De medewerker vraagt je je achternaam te spellen. Je naam begint met de letter 'G'. Wat zeg je?",
      answer: "'G van Gerard.' (Niet: 'G van de Geit' of 'G van Groot')."
    },
    {
      question: "Je bent boos omdat je pakketje kwijt is. Welke zin gebruik je om je ontevredenheid zakelijk uit te drukken?",
      answer: "'Ik ben zeer ontevreden over de gang van zaken' of 'De service schiet helaas tekort.'"
    },
    {
      question: "Je verstaat de medewerker niet goed omdat hij snel praat. Wat zeg je?",
      answer: "'Kunt u dat alstublieft herhalen?' of 'Kunt u iets langzamer praten alstublieft?'"
    }
  ]
};