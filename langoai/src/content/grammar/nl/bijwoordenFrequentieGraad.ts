import type { GrammarLesson } from "../../types";

export const bijwoordenFrequentieGraad: GrammarLesson = {
  id: "nl-bijwoorden-frequentie-graad-1",
  title: "Bijwoorden van Frequentie & Graad: Van 'altijd' tot 'nogal'",
  level: 4,
  topic: "Grammatica & Woordenschat",
  body: "Beheers de bijwoorden van frequentie en graad volledig: de exacte percentages, de vaste zinsplaats, inversie, graadschalen, registerkeuze en de valkuilen van dubbele versterking en ontkenning.",
  overview:
    "Dit is de absolute alles-in-één-gids over bijwoorden van frequentie en graad. Je leert de exacte positie van frequentiebijwoorden, de nuance tussen 'nogal' en 'tamelijk', en hoe je register kiest tussen 'heel' en 'zeer'. Met prachtige tabellen, strikte PRO-regels en 4 korte oefenvragen beheers je de intensiteit en frequentie in het Nederlands tot in de perfectie!",
  anchorSectionId: "overzicht-frequentie-graad",
  exercises: [],
  timeExpressionsLabel: "De Top-10 Frequentiebijwoorden 🔁",
  timeExpressions: {
    header: "Positie | Bijwoord | Betekenis (%) | Voorbeeldzin",
    rows: [
      ["1", "**altijd**", "100%", "Ik sta **altijd** om zeven uur op."],
      ["2", "**meestal**", "80–90%", "Hij komt **meestal** op tijd."],
      ["3", "**vaak**", "60–80%", "Wij eten **vaak** vis op vrijdag."],
      ["4", "**geregeld**", "50–70%", "Zij belt **geregeld** haar moeder."],
      ["5", "**soms**", "30–50%", "Ik lees **soms** een boek voor het slapengaan."],
      ["6", "**af en toe**", "20–30%", "We gaan **af en toe** naar het theater."],
      ["7", "**zelden**", "5–10%", "Hij kijkt **zelden** televisie."],
      ["8", "**bijna nooit**", "1–5%", "Dat gebeurt **bijna nooit**."],
      ["9", "**nauwelijks**", "~1%", "Ik hoor **nauwelijks** wat je zegt."],
      ["10", "**nooit**", "0%", "Zij rookt **nooit**."]
    ]
  },
  details: [
    {
      title: "Deel 1: Frequentiebijwoorden & Zinsplaats 🕒",
      body: `
        <p>Frequentiebijwoorden vormen de ruggengraat van iedere routine. Ze geven aan hoe vaak een actie plaatsvindt.</p>
        
        <div class="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-emerald-700 dark:text-emerald-300 mb-2">🏆 PRO REGEL 1: De standaardpositie in de hoofdzin</h3>
          <p class="text-slate-700 dark:text-slate-300">Het frequentiebijwoord staat <strong>direct achter de persoonsvorm</strong>, nog vóór een eventueel lijdend voorwerp of andere bepalingen.</p>
          <ul class="mt-2 space-y-1 text-sm text-slate-700 dark:text-slate-300">
            <li>✅ <em>Ik <strong>lees</strong> vaak een boek.</em></li>
            <li>✅ <em>Hij <strong>gaat</strong> nooit naar feestjes.</em></li>
          </ul>
        </div>

        <div class="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-indigo-700 dark:text-indigo-300 mb-2">🏆 PRO REGEL 2: Samengestelde tijden</h3>
          <p class="text-slate-700 dark:text-slate-300">Bij een hulpwerkwoord + hoofdwerkwoord schuift het frequentiebijwoord <strong>tussen de persoonsvorm en het hoofdwerkwoord</strong> in.</p>
          <ul class="mt-2 space-y-1 text-sm text-slate-700 dark:text-slate-300">
            <li>✅ <em>Ik <strong>heb</strong> altijd <strong>gefietst</strong>.</em></li>
            <li>✅ <em>We <strong>zijn</strong> vaak <strong>verhuisd</strong>.</em></li>
          </ul>
        </div>

        <h3 class="text-lg font-bold mt-8 mb-3 text-slate-800 dark:text-slate-200">Inversie: wat gebeurt er als de zin níét met het onderwerp begint?</h3>
        <p class="text-sm text-slate-700 dark:text-slate-300 mb-4">Zodra je de zin opent met een tijdsbepaling, plaats of een ander zinsdeel, <strong>draait het onderwerp met de persoonsvorm om</strong>, maar het bijwoord blijft trouw aan dezelfde positie ten opzichte van de werkwoorden.</p>
        
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-gradient-to-r from-teal-600 to-cyan-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Zinsbegin</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Correcte inversiezin</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-semibold">'s Ochtends</td><td class="px-4 py-3 text-sm"><strong>Drink</strong> ik altijd koffie.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-semibold">Op zondag</td><td class="px-4 py-3 text-sm"><strong>Eet</strong> hij vaak pannenkoeken.</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-4 py-3 text-sm font-semibold">In de winter</td><td class="px-4 py-3 text-sm"><strong>Sneeuwt</strong> het zelden.</td></tr>
            </tbody>
          </table>
        </div>

        <div class="bg-rose-50 dark:bg-rose-900/20 border-l-4 border-rose-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-rose-700 dark:text-rose-300 mb-2">🚨 PAS OP! De klassieke fout</h3>
          <p class="text-sm text-slate-700 dark:text-slate-300">Inversie is keihard verplicht, ook met bijwoorden.</p>
          <ul class="mt-2 space-y-1 text-sm text-slate-700 dark:text-slate-300">
            <li>❌ <em>'s Ochtends ik drink altijd koffie.</em></li>
            <li>✅ <em>'s Ochtends <strong>drink ik</strong> altijd koffie.</em></li>
          </ul>
        </div>
      `
    },
    {
      title: "Deel 2: Graadbijwoorden & De Intensiteitsschaal 📏",
      body: `
        <p>Graadbijwoorden regelen de intensiteit van een bijvoeglijk naamwoord of een ander bijwoord.</p>
        
        <h3 class="text-lg font-bold mt-6 mb-3 text-slate-800 dark:text-slate-200">De complete schaal van zwak naar extreem</h3>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-gradient-to-r from-purple-600 to-pink-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Intensiteitsniveau</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Bijwoorden</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Voorbeeld</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-semibold">❄️ Minimaal</td><td class="px-4 py-3 text-sm text-xs">enigszins, een beetje, ietwat</td><td class="px-4 py-3 text-sm">De soep is <strong>een beetje</strong> flauw.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-semibold">🌤️ Licht</td><td class="px-4 py-3 text-sm text-xs">nogal, tamelijk, vrij, best wel</td><td class="px-4 py-3 text-sm">Het huis is <strong>tamelijk</strong> groot.</td></tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-semibold">☀️ Duidelijk</td><td class="px-4 py-3 text-sm text-xs">heel, erg, behoorlijk</td><td class="px-4 py-3 text-sm">De test was <strong>erg</strong> moeilijk.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-semibold">🔥 Zeer sterk</td><td class="px-4 py-3 text-sm text-xs">ontzettend, enorm, vreselijk</td><td class="px-4 py-3 text-sm">We zijn <strong>enorm</strong> trots.</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-4 py-3 text-sm font-semibold">⚡ Extreem / formeel</td><td class="px-4 py-3 text-sm text-xs">uiterst, buitengewoon, hoogst</td><td class="px-4 py-3 text-sm">Dat is <strong>uiterst</strong> ongebruikelijk.</td></tr>
            </tbody>
          </table>
        </div>

        <div class="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-emerald-700 dark:text-emerald-300 mb-2">🏆 PRO REGEL 3: Nooit dubbel versterken!</h3>
          <p class="text-slate-700 dark:text-slate-300">In het Nederlands is <strong>heel erg mooi</strong> overbodig en stijlfout. Je kiest óf <em>heel mooi</em> óf <em>erg mooi</em>. De combinatie geldt als contaminatie.</p>
        </div>

        <h3 class="text-lg font-bold mt-8 mb-3 text-slate-800 dark:text-slate-200">Formeel versus informeel – de sleutel tot stijl</h3>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-gradient-to-r from-amber-600 to-orange-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Context</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Aanbevolen bijwoord</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Minder geschikt</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-semibold">Sollicitatiebrief</td><td class="px-4 py-3 text-sm text-emerald-600 font-bold">zeer</td><td class="px-4 py-3 text-sm text-rose-600">heel</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-semibold">Klachtenbrief</td><td class="px-4 py-3 text-sm text-emerald-600 font-bold">bijzonder, uiterst</td><td class="px-4 py-3 text-sm text-rose-600">verschrikkelijk</td></tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-semibold">Dagelijkse spreektaal</td><td class="px-4 py-3 text-sm text-emerald-600 font-bold">heel, erg</td><td class="px-4 py-3 text-sm text-rose-600">zeer (kan stijf overkomen)</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-4 py-3 text-sm font-semibold">Academisch artikel</td><td class="px-4 py-3 text-sm text-emerald-600 font-bold">aanzienlijk, beduidend</td><td class="px-4 py-3 text-sm text-rose-600">heel erg</td></tr>
            </tbody>
          </table>
        </div>

        <div class="bg-rose-50 dark:bg-rose-900/20 border-l-4 border-rose-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-rose-700 dark:text-rose-300 mb-2">🚨 PAS OP! Het venijnige randje van 'nogal'</h3>
          <p class="text-sm text-slate-700 dark:text-slate-300 mb-2">Het woord <strong>nogal</strong> betekent "in behoorlijke mate", maar vrijwel altijd met een <strong>negatieve ondertoon</strong>.</p>
          <ul class="space-y-1 text-sm text-slate-700 dark:text-slate-300">
            <li>🔹 <em>"Hij was <strong>nogal</strong> stil."</em> → dat is opvallend en niet prettig.</li>
            <li>🔹 <em>"De film was <strong>nogal</strong> saai."</em> → lichte ergernis.</li>
            <li>✅ Vergelijk met <strong>tamelijk</strong>, dat neutraler is: <em>"De vakantie was <strong>tamelijk</strong> rustig."</em></li>
          </ul>
        </div>
      `
    },
    {
      title: "Deel 3: Combineren, Volgorde & Ontkenning 🔀🚫",
      body: `
        <h3 class="text-lg font-bold mt-6 mb-3 text-slate-800 dark:text-slate-200">Meerdere bijwoorden combineren</h3>
        <p class="text-sm text-slate-700 dark:text-slate-300 mb-4">Wanneer je frequentie én graad in één zin wilt gebruiken, heb je een <strong>vaste hiërarchie</strong>. De volgorde is: <strong>Tijd – Frequentie – Graad – Plaats</strong>.</p>
        
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-gradient-to-r from-indigo-600 to-purple-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Tijd</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Frequentie</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Graad</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Hoofdzin</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm">Gisteren</td><td class="px-4 py-3 text-sm">–</td><td class="px-4 py-3 text-sm font-bold text-indigo-600">erg</td><td class="px-4 py-3 text-sm">was ik moe.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm">Ik ben</td><td class="px-4 py-3 text-sm font-bold text-indigo-600">altijd</td><td class="px-4 py-3 text-sm font-bold text-indigo-600">heel</td><td class="px-4 py-3 text-sm">vrolijk.</td></tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm">Op maandag</td><td class="px-4 py-3 text-sm">ga ik <strong>soms</strong></td><td class="px-4 py-3 text-sm font-bold text-indigo-600">nogal</td><td class="px-4 py-3 text-sm">laat naar bed.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-4 py-3 text-sm">In de zomer</td><td class="px-4 py-3 text-sm">is het hier <strong>vaak</strong></td><td class="px-4 py-3 text-sm font-bold text-indigo-600">bijzonder</td><td class="px-4 py-3 text-sm">heet.</td></tr>
            </tbody>
          </table>
        </div>

        <div class="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-emerald-700 dark:text-emerald-300 mb-2">🏆 PRO REGEL 4: Frequentie vóór graad</h3>
          <p class="text-slate-700 dark:text-slate-300">Plaats frequentiebijwoorden (altijd, vaak, nooit…) <strong>vóór</strong> graadbijwoorden (heel, erg, nogal…).</p>
          <ul class="mt-2 space-y-1 text-sm text-slate-700 dark:text-slate-300">
            <li>✅ <em>Het is <strong>altijd heel</strong> gezellig.</em></li>
            <li>❌ <em>Het is heel altijd gezellig.</em> (krom)</li>
          </ul>
        </div>

        <h3 class="text-lg font-bold mt-8 mb-3 text-slate-800 dark:text-slate-200">De ontkenning – "niet" en "nooit" correct inzetten</h3>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-gradient-to-r from-rose-600 to-pink-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Type zin</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Correcte plaats</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Voorbeeld</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-semibold">Combinatie "niet vaak"</td><td class="px-4 py-3 text-sm text-xs">"niet" direct voor "vaak"</td><td class="px-4 py-3 text-sm">Hij komt <strong>niet vaak</strong> op bezoek.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-semibold">Combinatie "bijna nooit"</td><td class="px-4 py-3 text-sm text-xs">vaste uitdrukking</td><td class="px-4 py-3 text-sm">We gaan <strong>bijna nooit</strong> uit eten.</td></tr>
            </tbody>
          </table>
        </div>

        <div class="bg-rose-50 dark:bg-rose-900/20 border-l-4 border-rose-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-rose-700 dark:text-rose-300 mb-2">🚨 PAS OP! Dubbele ontkenning</h3>
          <p class="text-sm text-slate-700 dark:text-slate-300">In het Nederlands is een dubbele ontkenning bijna altijd fout. <em>"Ik heb nooit geen honger"</em> betekent in de spreektaal soms "ik heb altijd honger", maar is grammaticaal vermijdbaar. Houd het op <strong>nooit</strong> of <strong>niet</strong>.</p>
        </div>
      `
    }
  ],
  rulesTable: [
    {
      rule: "Standaardpositie Frequentie",
      structure: "Frequentiebijwoord staat direct achter de persoonsvorm, vóór het lijdend voorwerp.",
      example: "Ik lees vaak een boek. (Niet: Ik lees een boek vaak.)",
      usage: "Basisregel voor de woordvolgorde in de Nederlandse hoofdzin."
    },
    {
      rule: "Samengestelde Tijden",
      structure: "Bij hulpwerkwoord + hoofdwerkwoord schuift het bijwoord ertussen.",
      example: "Ik heb altijd gefietst. (Niet: Ik heb gefietst altijd.)",
      usage: "Zorgt voor een natuurlijke zinsmelodie in de voltooide tijden."
    },
    {
      rule: "Geen Dubbele Versterking",
      structure: "Combineer nooit twee versterkende graadbijwoorden (contaminatie).",
      example: "Kies: 'heel mooi' OF 'erg mooi'. (Niet: 'heel erg mooi').",
      usage: "Voorkomt stijlfouten en overbodige taal in formele teksten."
    },
    {
      rule: "Frequentie vóór Graad",
      structure: "Bij combinatie van beide categorieën staat frequentie vóór graad.",
      example: "Het is altijd heel gezellig. (Niet: Het is heel altijd gezellig.)",
      usage: "Volgt de vaste hiërarchie van bijwoordelijke bepalingen."
    }
  ],
  callouts: [
    { type: "remember", label: "🏆 PRO REGEL 1", text: "Het frequentiebijwoord staat direct achter de persoonsvorm, nog vóór een eventueel lijdend voorwerp." },
    { type: "remember", label: "🏆 PRO REGEL 2", text: "Bij een hulpwerkwoord + hoofdwerkwoord schuift het frequentiebijwoord tussen de persoonsvorm en het hoofdwerkwoord in." },
    { type: "remember", label: "🏆 PRO REGEL 3", text: "Nooit dubbel versterken! 'Heel erg mooi' is een contaminatie. Kies óf 'heel' óf 'erg'." },
    { type: "remember", label: "🏆 PRO REGEL 4", text: "Plaats frequentiebijwoorden (altijd, vaak) ALTIJD vóór graadbijwoorden (heel, erg)." },
    { type: "remember", label: "⚠️ PAS OP 1", text: "Inversie is keihard verplicht als de zin met een ander zinsdeel begint: 's Ochtends drink ik altijd koffie." },
    { type: "remember", label: "⚠️ PAS OP 2", text: "Het woord 'nogal' heeft vrijwel altijd een negatieve ondertoon. Gebruik 'tamelijk' voor een neutrale observatie." },
    { type: "tip", label: "💡 Pro-tip", text: "Kies je register bewust: 'zeer' en 'uiterst' voor formele brieven, 'heel' en 'erg' voor de dagelijkse spreektaal." }
  ],
  commonMistakes: [
    { incorrect: "Ik drink koffie altijd.", correct: "Ik drink altijd koffie.", explanation: "Het frequentiebijwoord moet vóór het lijdend voorwerp staan." },
    { incorrect: "Hij is nooit niet thuis.", correct: "Hij is nooit thuis.", explanation: "Een dubbele ontkenning is grammaticaal fout en verwarrend." },
    { incorrect: "Het was heel erg leuk.", correct: "Het was heel leuk. / Het was erg leuk.", explanation: "Contaminatie: twee versterkers botsen. Kies er één." },
    { incorrect: "'s Ochtends ik ben altijd moe.", correct: "'s Ochtends ben ik altijd moe.", explanation: "Inversie ontbreekt. De persoonsvorm moet op de tweede plek staan." },
    { incorrect: "De les was nogal interessant. (positief bedoeld)", correct: "De les was tamelijk interessant.", explanation: "'Nogal' impliceert meestal een negatieve ondertoon of ergernis." }
  ],
  review: [
    "✅ Frequentiebijwoord staat direct achter de persoonsvorm (hoofdzin).",
    "✅ Inversie is verplicht als de zin met een ander zinsdeel begint.",
    "✅ Nooit twee versterkende graadbijwoorden combineren (geen 'heel erg').",
    "✅ Frequentie staat vóór graad: 'altijd heel mooi', niet 'heel altijd mooi'.",
    "✅ Registerkeuze: 'zeer' = formeel; 'heel' = neutraal/informeel.",
    "✅ 'Nogal' heeft een negatieve ondertoon, 'tamelijk' is neutraal.",
    "✅ Vermijd dubbele ontkenning (nooit + niet)."
  ],
  qa: [
    {
      question: "Waarom is 'Ik ga vaak naar de bioscoop' correct, maar 'Vaak ik ga naar de bioscoop' fout?",
      answer: "Omdat het Nederlands inversie vereist zodra een ander zinsdeel dan het onderwerp voorop staat. De correcte inversiezin is: 'Vaak ga ik naar de bioscoop.' De persoonsvorm en het onderwerp wisselen van plaats."
    },
    {
      question: "Wanneer schrijf je 'zeer' in plaats van 'heel', en wat is het risico als je dit negeert?",
      answer: "'Zeer' is formeel en hoort in zakelijke brieven, officiële mededelingen en academische teksten. Als je in een formele context 'heel' gebruikt, kan dat onprofessioneel of te informeel overkomen. Omgekeerd kan 'zeer' in alledaagse spreektaal stijf klinken."
    },
    {
      question: "Wat is het subtiele betekenisverschil tussen 'De opmerking was nogal kwetsend' en 'De opmerking was tamelijk kwetsend'?",
      answer: "'Nogal' geeft aan dat de kwetsing behoorlijk sterk was en klinkt meestal afkeurend; het impliceert dat het de spreker stoort. 'Tamelijk' is objectiever en constateert een mate van kwetsing zonder duidelijk emotioneel waardeoordeel."
    },
    {
      question: "Herschrijf de foute zin 'Op zaterdag ik eet soms heel erg uitgebreid ontbijt' in correct Nederlands en verklaar de correcties.",
      answer: "Correcte zin: 'Op zaterdag eet ik soms een heel uitgebreid ontbijt.' Correcties: 1. Inversie ('eet ik'). 2. Verwijder dubbele versterking ('heel erg' -> 'heel'). 3. Voeg lidwoord 'een' toe. 4. 'Soms' staat correct achter de pv."
    }
  ]
};