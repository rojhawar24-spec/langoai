import type { GrammarLesson } from "../../types";

export const wegVragen: GrammarLesson = {
  id: "nl-wegvragen-1",
  title: "De weg vragen en wijzen",
  level: 1,
  topic: "Pragmatiek",
  body: "Leer hoe je in het Nederlands de weg vraagt en wijst. Je leert de belangrijkste zinnen, plaatswoorden en hoe je een gesprek voert op straat.",
  overview:
    "Na deze les weet je hoe je op straat beleefd de weg vraagt, hoe je zelf de weg wijst, en welke woorden en zinnetjes je daarvoor nodig hebt. Je krijgt heel veel voorbeelden en duidelijke uitleg.",
  anchorSectionId: "wegvragen",
  exercises: [],
  timeExpressionsLabel: "De weg vragen ❓",
  timeExpressions: {
    header: "Nederlands | Uitleg",
    rows: [
      ["🙋 <strong>Sorry, mag ik u iets vragen?</strong>", "De beste startzin. Beleefd met 'u' tegen onbekenden."],
      ["🚉 <strong>Weet u waar het station is?</strong>", "Vragen of iemand de plek kent."],
      ["🧭 <strong>Hoe kom ik bij de supermarkt?</strong>", "Standaardvraag naar een route."],
      ["🗺️ <strong>Kunt u mij de weg wijzen naar het museum?</strong>", "Formeler, heel beleefd."],
      ["📍 <strong>Ik zoek de Vondelstraat. Weet u waar die is?</strong>", "Specifieke straat zoeken."],
      ["❓ <strong>Is dit de goede richting naar het centrum?</strong>", "Twijfel of je goed loopt."],
      ["🚶 <strong>Is het ver?</strong>", "Vraag naar de afstand."],
      ["🚌 <strong>Kan ik beter de bus nemen?</strong>", "Vraag om advies."],
      ["🤷 <strong>Ik ben verdwaald. Kunt u mij helpen?</strong>", "Als je niet meer weet waar je bent."],
    ],
  },
  details: [
    {
      title: "De weg wijzen ➡️",
      body: `
        <h3 class="text-lg font-bold mt-4 mb-2">Basisinstructies</h3>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Nederlands</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Uitleg</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">⬆️ <strong>Ga rechtdoor.</strong></td><td class="px-3 py-2 text-sm">Zelfde richting, niet draaien.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">⬅️ <strong>Ga linksaf.</strong></td><td class="px-3 py-2 text-sm">Naar links draaien.</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">➡️ <strong>Ga rechtsaf.</strong></td><td class="px-3 py-2 text-sm">Naar rechts draaien.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">🚦 <strong>Sla linksaf bij de stoplichten.</strong></td><td class="px-3 py-2 text-sm">Draaien op het moment dat je bij de stoplichten bent.</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">🚸 <strong>Steek de straat over.</strong></td><td class="px-3 py-2 text-sm">Naar de overkant lopen.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">🖐️ <strong>Het is aan uw linkerhand.</strong></td><td class="px-3 py-2 text-sm">De plek zit links van u.</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">🖐️ <strong>Het is aan uw rechterhand.</strong></td><td class="px-3 py-2 text-sm">De plek zit rechts van u.</td></tr>
            </tbody>
          </table>
        </div>
        <h3 class="text-lg font-bold mt-6 mb-2">Meer details geven</h3>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Nederlands</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Uitleg</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">🏁 <strong>Ga helemaal rechtdoor tot het einde van de straat.</strong></td><td class="px-3 py-2 text-sm">Blijf volgen tot de straat stopt.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">⬅️🏠 <strong>Neem de eerste straat links.</strong></td><td class="px-3 py-2 text-sm">Eerste zijstraat links ingaan.</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">➡️🏠 <strong>Neem de tweede straat rechts.</strong></td><td class="px-3 py-2 text-sm">Eerste overslaan, tweede nemen.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">🔄 <strong>Neem de derde afslag op de rotonde.</strong></td><td class="px-3 py-2 text-sm">Bij rotonde uitgangen tellen.</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">🌉 <strong>Ga over de brug en dan meteen linksaf.</strong></td><td class="px-3 py-2 text-sm">Eerst over, dan direct draaien.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">🔚 <strong>Het is aan het einde van de straat, aan de linkerkant.</strong></td><td class="px-3 py-2 text-sm">Helemaal aan het eind.</td></tr>
            </tbody>
          </table>
        </div>
      `,
    },
    {
      title: "Belangrijke punten in de stad 🏙️",
      body: `
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Nederlands</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Uitleg</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">🏠 <strong>de hoek</strong></td><td class="px-3 py-2 text-sm">Twee straten komen samen. Je zegt: <strong>op de hoek</strong>.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">🚦 <strong>de stoplichten</strong></td><td class="px-3 py-2 text-sm">Rood-oranje-groen licht. Ook: <strong>het verkeerslicht</strong>.</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">🔄 <strong>de rotonde</strong></td><td class="px-3 py-2 text-sm">Rond plein. Je neemt een <strong>afslag</strong>.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">🦓 <strong>het zebrapad</strong></td><td class="px-3 py-2 text-sm">Witte strepen op de weg.</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">🌉 <strong>de brug</strong></td><td class="px-3 py-2 text-sm">Weg over water. <strong>Ga over de brug.</strong></td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">🏛️ <strong>het plein</strong></td><td class="px-3 py-2 text-sm">Groot open plein. <strong>Loop over het plein.</strong></td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">🚸 <strong>het kruispunt</strong></td><td class="px-3 py-2 text-sm">Twee of meer wegen kruisen elkaar.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">🔀 <strong>de T-splitsing</strong></td><td class="px-3 py-2 text-sm">Kruising als de letter T.</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">🚇 <strong>de tunnel</strong></td><td class="px-3 py-2 text-sm">Weg onder de grond. <strong>Ga door de tunnel.</strong></td></tr>
            </tbody>
          </table>
        </div>
      `,
    },
    {
      title: "Plaats- en richtingwoorden 📍",
      body: `
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Nederlands</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Betekenis</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Voorbeeld</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">↔️ <strong>tegenover</strong></td><td class="px-3 py-2 text-sm">Recht aan de overkant.</td><td class="px-3 py-2 text-sm">De bakker is <strong>tegenover</strong> de slager.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">🤝 <strong>naast</strong></td><td class="px-3 py-2 text-sm">Direct ernaast.</td><td class="px-3 py-2 text-sm">Het café zit <strong>naast</strong> het hotel.</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">🔁 <strong>tussen</strong></td><td class="px-3 py-2 text-sm">In het midden van twee dingen.</td><td class="px-3 py-2 text-sm">Het park ligt <strong>tussen</strong> de school en de kerk.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">🚪 <strong>achter</strong></td><td class="px-3 py-2 text-sm">Aan de achterkant.</td><td class="px-3 py-2 text-sm">De tuin is <strong>achter</strong> het huis.</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">🚏 <strong>voor</strong></td><td class="px-3 py-2 text-sm">Aan de voorkant.</td><td class="px-3 py-2 text-sm">De bushalte is <strong>voor</strong> het station.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">↙️ <strong>links van</strong></td><td class="px-3 py-2 text-sm">Aan de linkerkant van iets.</td><td class="px-3 py-2 text-sm">Het museum is <strong>links van</strong> de toren.</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">↗️ <strong>rechts van</strong></td><td class="px-3 py-2 text-sm">Aan de rechterkant van iets.</td><td class="px-3 py-2 text-sm">De winkel is <strong>rechts van</strong> het plein.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">📍 <strong>vlakbij</strong></td><td class="px-3 py-2 text-sm">Heel dichtbij.</td><td class="px-3 py-2 text-sm">Het postkantoor is <strong>vlakbij</strong>.</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">📍 <strong>verderop</strong></td><td class="px-3 py-2 text-sm">Stukje verder in dezelfde richting.</td><td class="px-3 py-2 text-sm"><strong>Verderop</strong> zie je een groot plein.</td></tr>
            </tbody>
          </table>
        </div>
      `,
    },
    {
      title: "Afstand en tijd ⏱️",
      body: `
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Nederlands</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Uitleg</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">🚶 <strong>Het is vlakbij.</strong></td><td class="px-3 py-2 text-sm">Bijna op de plek, heel dichtbij.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">🚶 <strong>Het is op loopafstand.</strong></td><td class="px-3 py-2 text-sm">Je kunt er gemakkelijk naartoe lopen.</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">🚶‍♀️ <strong>Het is ongeveer 5 minuten lopen.</strong></td><td class="px-3 py-2 text-sm">Schatting van de tijd.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">🚌 <strong>Het is te ver om te lopen.</strong></td><td class="px-3 py-2 text-sm">Lopen is niet handig, neem de bus of tram.</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">🕐 <strong>Een minuut of tien.</strong></td><td class="px-3 py-2 text-sm">Ongeveer 10 minuten. Lekker Nederlands.</td></tr>
            </tbody>
          </table>
        </div>
      `,
    },
    {
      title: "Openbaar vervoer 🚌",
      body: `
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Nederlands</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Uitleg</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">🚏 <strong>de bushalte</strong></td><td class="px-3 py-2 text-sm">Plek waar de bus stopt.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">🚌 <strong>Neem bus 12.</strong></td><td class="px-3 py-2 text-sm">Stap in bus 12.</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">🚎 <strong>U kunt beter de tram nemen.</strong></td><td class="px-3 py-2 text-sm">Advies: tram is handiger.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">🔁 <strong>U moet overstappen bij het Centraal Station.</strong></td><td class="px-3 py-2 text-sm">Uit de ene bus stappen en in een andere.</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">🚏 <strong>Stap uit bij de derde halte.</strong></td><td class="px-3 py-2 text-sm">Tel de haltes, bij de derde eruit.</td></tr>
            </tbody>
          </table>
        </div>
      `,
    },
    {
      title: "Twee voorbeeldgesprekken 🎭",
      body: `
        <div class="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 p-4 rounded-r-lg my-4">
          <p class="text-slate-700 dark:text-slate-300">
            <strong>Gesprek 1 – Naar de supermarkt 🛒</strong><br><br>
            <strong>Jij:</strong> 🙋 "Sorry, mag ik u iets vragen?"<br>
            <strong>Meneer:</strong> 😊 "Natuurlijk."<br>
            <strong>Jij:</strong> 🧭 "Hoe kom ik bij de supermarkt? Is het ver?"<br>
            <strong>Meneer:</strong> 🚶 "Nee hoor, het is vlakbij. Loop <strong>rechtdoor</strong> tot de <strong>stoplichten</strong>."<br>
            <strong>Jij:</strong> 🚦 "Oké, rechtdoor tot de stoplichten."<br>
            <strong>Meneer:</strong> ➡️ "Sla daar <strong>rechtsaf</strong>. De supermarkt is dan <strong>aan uw linkerhand</strong>, <strong>tegenover</strong> de kerk."<br>
            <strong>Jij:</strong> 🙏 "Heel erg bedankt!"<br>
            <strong>Meneer:</strong> 🌞 "Graag gedaan!"
          </p>
        </div>
        <div class="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 p-4 rounded-r-lg my-4">
          <p class="text-slate-700 dark:text-slate-300">
            <strong>Gesprek 2 – Naar het museum 🏛️</strong><br><br>
            <strong>Jij:</strong> 🙋 "Pardon, mag ik u even iets vragen?"<br>
            <strong>Mevrouw:</strong> 😊 "Ja hoor."<br>
            <strong>Jij:</strong> 🧭 "Kunt u mij de weg wijzen naar het Stedelijk Museum?"<br>
            <strong>Mevrouw:</strong> 🤔 "Even denken. U kunt het beste <strong>rechtdoor</strong> lopen tot het <strong>kruispunt</strong>. Daar <strong>gaat u linksaf</strong>."<br>
            <strong>Jij:</strong> ⬅️ "Linksaf op het kruispunt. Oké."<br>
            <strong>Mevrouw:</strong> 🏠 "Precies. U loopt dan langs een <strong>park</strong>. <strong>Aan het einde van</strong> het park ziet u een <strong>brug</strong>."<br>
            <strong>Jij:</strong> 🌉 "Over de brug?"<br>
            <strong>Mevrouw:</strong> ✅ "Ja, u <strong>steekt de brug over</strong>. Aan de overkant ziet u meteen een groot wit gebouw. Dat is het museum, <strong>aan uw rechterhand</strong>. U kunt het niet missen."<br>
            <strong>Jij:</strong> 🙏 "Super, heel erg bedankt!"<br>
            <strong>Mevrouw:</strong> 🌞 "Succes ermee!"
          </p>
        </div>
      `,
    },
  ],
  rulesTable: [
    {
      rule: "Linksaf / rechtsaf: beweging met -af",
      structure: "**Ga linksaf** / **Ga rechtsaf**.",
      example: "Sla linksaf bij de stoplichten.",
      usage: "⚠️ PAS OP: 'Ga links' is fout. Beweging = altijd met -af.",
    },
    {
      rule: "Rechtdoor is één woord",
      structure: "**rechtdoor**",
      example: "Loop rechtdoor tot het plein.",
      usage: "⚠️ PAS OP: Nooit 'recht door' of 'rechtsdoor'. Het is één woord.",
    },
    {
      rule: "Gebruik 'u' tegen onbekenden",
      structure: "**Sorry, mag ik u iets vragen?**",
      example: "Kunt u mij de weg wijzen naar het station?",
      usage: "Tegen vrienden of kinderen mag 'je', anders altijd 'u' voor beleefdheid.",
    },
    {
      rule: "Afslag op een rotonde",
      structure: "**Neem de eerste/tweede/derde afslag op de rotonde.**",
      example: "Neem de derde afslag op de rotonde.",
      usage: "⚠️ PAS OP: Niet 'straat' of 'weg' maar 'afslag' gebruiken bij een rotonde.",
    },
  ],
  callouts: [
    {
      type: "remember",
      label: "⚠️ PAS OP: 'Ga links' is fout",
      text: "❌ Ga links.\n✅ Ga **linksaf**.\nWaarom? 'Links' is een plaats. 'Linksaf' is de beweging.",
    },
    {
      type: "remember",
      label: "⚠️ PAS OP: 'Rechtdoor' is één woord",
      text: "❌ recht door / rechtsdoor\n✅ **rechtdoor**\nWaarom? Het is een vast woord. 'Recht' als in rechte lijn.",
    },
    {
      type: "remember",
      label: "💡 TIP: Gebruik 'even' voor vriendelijkheid",
      text: "Zonder **even** klink je soms bot. Met **even** klinkt alles meteen vriendelijk: 'Mag ik **even** iets vragen?'",
    },
    {
      type: "remember",
      label: "💡 TIP: Gebouwen als herkenningspunt",
      text: "Zeg bijvoorbeeld: 'Je ziet een grote kerk aan je linkerhand. Daar steek je over.' Dat onthouden mensen beter dan een straatnaam.",
    },
  ],
  commonMistakes: [
    { incorrect: "Ga links.", correct: "Ga linksaf.", explanation: "Beweging is altijd met -af." },
    { incorrect: "Sla rechts bij de stoplichten.", correct: "Sla rechtsaf bij de stoplichten.", explanation: "-af is verplicht." },
    { incorrect: "Het is aan de linker kant.", correct: "Het is aan de linkerkant.", explanation: "Aaneenschrijven." },
    { incorrect: "Loop recht door.", correct: "Loop rechtdoor.", explanation: "Rechtdoor is één woord." },
    { incorrect: "De station.", correct: "Het station.", explanation: "Station is een het-woord." },
    { incorrect: "Neem de derde straat op de rotonde.", correct: "Neem de derde afslag op de rotonde.", explanation: "Uitgang = afslag." },
    { incorrect: "U moet rechtdoor lopen voor 5 minuten.", correct: "U moet vijf minuten rechtdoor lopen.", explanation: "Geen 'voor'. Tijd eerst." },
    { incorrect: "Het is ver weg lopen.", correct: "Het is te ver om te lopen.", explanation: "\"Te ... om te ...\" is de vaste vorm." },
    { incorrect: "Ik wil vragen aan u.", correct: "Mag ik u iets vragen?", explanation: "\"Ik wil\" klinkt onbeleefd. Gebruik \"Mag ik\"." },
    { incorrect: "Kijk maar links.", correct: "Kijk even naar links.", explanation: "\"Maar\" stelt gerust, \"even\" maakt een verzoek vriendelijk." },
  ],
  review: [
    "Beleefd beginnen: **\"Sorry, mag ik u iets vragen?\"**",
    "Route vragen: **\"Hoe kom ik bij...?\"** of **\"Kunt u mij de weg wijzen naar...?\"**",
    "Afstand: **\"Is het ver?\" / \"Het is vlakbij / op loopafstand / 5 minuten lopen / te ver.\"**",
    "Basisrichtingen: **rechtdoor, linksaf, rechtsaf.**",
    "Afslagen: **\"Neem de eerste straat links / de derde afslag op de rotonde.\"**",
    "Oversteken: **\"Steek over bij het zebrapad / de stoplichten.\"**",
    "Plaats aanwijzen: **\"aan uw linkerhand / rechterhand, op de hoek, tegenover, naast, tussen, achter, voor.\"**",
    "Advies: **\"U kunt beter de bus / tram nemen.\"**",
    "Kleine vriendelijke woorden: **even, maar, eens, misschien, gewoon.**",
    "**Rechtdoor, linksaf, rechtsaf** altijd één woord.",
    "**\"Links\"** = plaats, **\"linksaf\"** = beweging. Nooit door elkaar halen.",
    "Let op de/het: **het station, het zebrapad, de brug, de hoek.**",
  ],
  qa: [
    {
      question: "Je ziet een oudere mevrouw op straat en je wilt naar het station. Hoe begin je het gesprek?",
      answer: "Je zegt: **\"Sorry, mag ik u iets vragen?\"** Daarna: **\"Weet u misschien hoe ik bij het station kom?\"** Je gebruikt **u** omdat de mevrouw ouder is en je haar niet kent. \"Misschien\" maakt de vraag nog wat vriendelijker.",
    },
    {
      question: "Je wilt tegen een vriend zeggen dat hij bij de stoplichten naar rechts moet draaien. Hoe zeg je dat in één goede zin?",
      answer: "**\"Sla rechtsaf bij de stoplichten.\"** Je gebruikt **rechtsaf** (met -af) en **bij** (exacte punt). Nooit \"Sla rechts\" of \"Ga rechts\".",
    },
    {
      question: "De winkel is recht aan de overkant van de kerk. Welk woord gebruik je daarvoor, en hoe zeg je de hele zin?",
      answer: "Het woord is **tegenover**. De zin is: **\"De winkel is tegenover de kerk.\"** Je kunt ook zeggen: **\"De winkel ligt recht tegenover de kerk.\"**",
    },
    {
      question: "Iemand vraagt: \"Is het ver naar het park?\" Je weet dat het tien minuten lopen is. Wat antwoord je?",
      answer: "**\"Nee, het is niet ver. Het is maar tien minuten lopen.\"** Het woordje **maar** stelt de ander gerust. Je zegt niet \"voor tien minuten\".",
    },
    {
      question: "Je staat op een rotonde en moet de allereerste uitgang rechts nemen. Hoe zeg je dat met het juiste woord?",
      answer: "**\"Neem de eerste afslag op de rotonde.\"** Het juiste woord is **afslag**, niet \"weg\" of \"straat\". Je zegt ook **eerste**, niet \"één\".",
    },
    {
      question: "Maak deze instructie vriendelijker met het woordje **even**: \"Kijk naar de plattegrond, dan zie je het zebrapad.\"",
      answer: "**\"Kijk even naar de plattegrond, dan zie je het zebrapad.\"** **Even** maakt van een bevel een vriendelijk verzoek.",
    },
    {
      question: "Een vriend zegt: \"Ga links, dan zie je de winkel.\" Dat is fout. Wat zeg je tegen hem en hoe leg je het uit?",
      answer: "Je zegt: **\"Je moet 'ga linksaf' zeggen, niet 'ga links'. 'Links' is een plaats, maar jij bedoelt een beweging. Beweging is altijd met -af. Zeg dus: 'Ga linksaf, dan zie je de winkel'.\"**",
    },
  ],
};