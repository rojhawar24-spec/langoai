import type { GrammarLesson } from "../../types";

export const ingebeddeVragen: GrammarLesson = {
  id: "nl-ingebedde-vragen-1",
  title: "Ingebedde Vragen: 'Ik weet niet wie dat gedaan heeft' – De Ultieme Masterclass",
  level: 3,
  topic: "Grammatica & Zinsbouw",
  body: "Beheers ingebedde vragen volledig: woordvolgorde, 'of' vs 'dat', interpunctie, en de geavanceerde inversie-regel bij vooropplaatsing.",
  overview:
    "Dit is de meest uitgebreide, visueel schitterende en waarschuwing-rijke gids over Ingebedde Vragen (indirecte vragen) in het Nederlands. Je leert waarom een ingebedde vraag zich als een bijzin gedraagt, hoe je ja/nee-vragen correct omzet met 'of', en hoe je de gevreesde inversie-valkuil bij vooropplaatsing vermijdt. Met prachtige tabellen, strikte PRO-regels en 4 complexe MAX-oefenvragen word je een absolute meester in de Nederlandse zinsbouw!",
  anchorSectionId: "wat-is-ingebedde-vraag",
  exercises: [],
  timeExpressionsLabel: "Directe vs. Ingebedde Vraag in Één Oogopslag 🕵️‍♂️",
  timeExpressions: {
    header: "Type | Voorbeeld | Kenmerk",
    rows: [
      ["❓ **Directe Vraag**", "*Wie heeft dat gedaan?*", "Zelfstandige zin, inversie, vraagteken."],
      ["📦 **Ingebedde Vraag**", "*Ik weet niet **wie dat gedaan heeft**.*", "Bijzin, werkwoord achteraan, punt (meestal)."],
      ["✅ **Ja/Nee Ingebed**", "*Ik vraag me af **of hij ziek is**.*", "Gebruik ALTIJD 'of', nooit 'dat' of 'als'."]
    ]
  },
  details: [
    {
      title: "Deel 1: Wat is een Ingebedde Vraag? 🕵️‍♂️",
      body: `
        <p>Een <strong>ingebedde vraag</strong> (ook wel <em>indirecte vraag</em> genoemd) is een vraag die <strong>geen zelfstandige zin</strong> is, maar is "ingebakken" (ingebed) in een andere zin (meestal een mededeling).</p>
        <p class="text-sm text-slate-700 dark:text-slate-300 mb-4">Omdat het een deel is van een grotere zin, gedraagt het zich <strong>niet</strong> als een normale vraag, maar als een <strong>bijzin</strong>.</p>
        
        <div class="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-emerald-700 dark:text-emerald-300 mb-2">🏆 PRO REGEL 1: De Bijzin-regel</h3>
          <p class="text-slate-700 dark:text-slate-300">Een ingebedde vraag is <strong>ALTIJD een bijzin</strong>. Dit betekent dat de persoonsvorm (het werkwoord) <strong>helemaal naar het einde</strong> van die bijzin verhuist (de SOV-regel).</p>
        </div>

        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-gradient-to-r from-indigo-600 to-purple-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Directe Vraag (Zelfstandig)</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Ingebedde Vraag (Deel van een zin)</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm"><strong>Wie</strong> heeft dat gedaan?</td>
                <td class="px-4 py-3 text-sm">Ik weet niet <strong>wie dat gedaan heeft</strong>.</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm"><strong>Waar</strong> woont zij?</td>
                <td class="px-4 py-3 text-sm">Kun je me vertellen <strong>waar zij woont</strong>?</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50">
                <td class="px-4 py-3 text-sm"><strong>Is</strong> hij ziek?</td>
                <td class="px-4 py-3 text-sm">Ik vraag me af <strong>of hij ziek is</strong>.</td>
              </tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      title: "Deel 2: De Twee Soorten Ingebedde Vragen 🧩",
      body: `
        <p>Er zijn twee manieren om een vraag in te bedden, afhankelijk van het soort vraag dat je oorspronkelijk had.</p>
        
        <h3 class="text-lg font-bold mt-6 mb-3 text-slate-800 dark:text-slate-200">A. De Vraagwoord-Vraag (Wie, Wat, Waar, Hoe, Waarom)</h3>
        <p class="text-sm text-slate-700 dark:text-slate-300 mb-2">Je gebruikt het oorspronkelijke vraagwoord als <strong>voegwoord</strong> om de bijzin te starten.</p>
        <ul class="list-disc list-inside space-y-1 text-sm text-slate-700 dark:text-slate-300 mb-6">
          <li><em>Direct:</em> <strong>Waarom</strong> ben je laat?</li>
          <li><em>Ingebed:</em> Hij vraagt <strong>waarom</strong> je laat <strong>bent</strong>.</li>
        </ul>

        <h3 class="text-lg font-bold mt-6 mb-3 text-slate-800 dark:text-slate-200">B. De Ja/Nee-Vraag (De "OF"-regel)</h3>
        <p class="text-sm text-slate-700 dark:text-slate-300 mb-2">Als de oorspronkelijke vraag een ja/nee-vraag is (begint met het werkwoord), gebruik je het voegwoord <strong>OF</strong> om de bijzin te starten. <strong>NOOIT</strong> 'dat' of 'als'!</p>
        <ul class="list-disc list-inside space-y-1 text-sm text-slate-700 dark:text-slate-300">
          <li><em>Direct:</em> <strong>Heb</strong> je honger?</li>
          <li><em>Ingebed:</em> Hij vraagt <strong>of</strong> je honger <strong>hebt</strong>.</li>
        </ul>
      `
    },
    {
      title: "Deel 3: De Gouden Grammaticaregels 🏆",
      body: `
        <div class="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-indigo-700 dark:text-indigo-300 mb-2">🏆 PRO REGEL 2: De Woordvolgorde</h3>
          <p class="text-slate-700 dark:text-slate-300">In de ingebedde vraag staat de persoonsvorm <strong>ALTIJD achteraan</strong>. Er vindt <strong>GEEN inversie</strong> plaats binnen de ingebedde vraag zelf.</p>
          <ul class="mt-2 space-y-1 text-sm text-slate-700 dark:text-slate-300">
            <li>❌ <em>Fout:</em> Ik weet niet wie <strong>heeft</strong> dat gedaan.</li>
            <li>✅ <em>Correct:</em> Ik weet niet wie dat gedaan <strong>heeft</strong>.</li>
          </ul>
        </div>

        <div class="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-emerald-700 dark:text-emerald-300 mb-2">🏆 PRO REGEL 3: De Interpunctie</h3>
          <p class="text-slate-700 dark:text-slate-300">De zin eindigt met het leesteken van de <strong>hoofdzin</strong>, niet van de ingebedde vraag. Is de hoofdzin een mededeling? Dan eindig je met een <strong>punt</strong>, geen vraagteken!</p>
          <ul class="mt-2 space-y-1 text-sm text-slate-700 dark:text-slate-300">
            <li>❌ <em>Fout:</em> Ik weet niet wie dat gedaan heeft<strong>?</strong></li>
            <li>✅ <em>Correct:</em> Ik weet niet wie dat gedaan heeft<strong>.</strong></li>
          </ul>
        </div>
      `
    },
    {
      title: "Deel 4: De Grootste Valkuil: 'Of' vs 'Dat' vs 'Als' ⚠️",
      body: `
        <p>Dit is de allergrootste fout die cursisten (en soms moedertaalsprekers!) maken bij ja/nee-vragen.</p>
        
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-gradient-to-r from-rose-600 to-pink-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Situatie</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Fout ❌</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Correct ✅</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Uitleg</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">Ja/Nee-vraag inbedden</td>
                <td class="px-4 py-3 text-sm text-rose-600">Ik weet niet <strong>dat</strong> hij komt.</td>
                <td class="px-4 py-3 text-sm text-emerald-600 font-bold">Ik weet niet <strong>of</strong> hij komt.</td>
                <td class="px-4 py-3 text-sm text-xs">'Dat' is voor feiten. 'Of' is voor onzekerheid/vragen.</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">Ja/Nee-vraag inbedden</td>
                <td class="px-4 py-3 text-sm text-rose-600">Ik weet niet <strong>als</strong> hij komt.</td>
                <td class="px-4 py-3 text-sm text-emerald-600 font-bold">Ik weet niet <strong>of</strong> hij komt.</td>
                <td class="px-4 py-3 text-sm text-xs">'Als' is voor voorwaarden (if), 'of' is voor vragen (whether).</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50">
                <td class="px-4 py-3 text-sm font-semibold">Dubbelop voegwoord</td>
                <td class="px-4 py-3 text-sm text-rose-600">Ik weet niet <strong>of dat</strong> hij komt.</td>
                <td class="px-4 py-3 text-sm text-emerald-600 font-bold">Ik weet niet <strong>of</strong> hij komt.</td>
                <td class="px-4 py-3 text-sm text-xs">Gebruik nooit 'of' en 'dat' achter elkaar.</td>
              </tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      title: "Deel 5: De 'Inversie' Valkuil (C1-Niveau) 🔄",
      body: `
        <p>Wat gebeurt er als je de <strong>ingebedde vraag vooraan</strong> de zin zet? Dan fungeert de hele ingebedde vraag als <strong>Plek 1</strong> van de hoofdzin. Hierdoor <strong>MOET</strong> er inversie plaatsvinden in de hoofdzin (werkwoord vóór onderwerp).</p>
        
        <div class="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-indigo-700 dark:text-indigo-300 mb-2">🏆 PRO REGEL 4: Vooropplaatsing = Inversie</h3>
          <p class="text-slate-700 dark:text-slate-300">Staat de ingebedde vraag vooraan? Dan wisselen het onderwerp en de persoonsvorm van de <strong>hoofdzin</strong> van plek!</p>
        </div>

        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-gradient-to-r from-teal-600 to-cyan-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Normale volgorde (Ingebed achteraan)</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Inversie (Ingebed vooraan)</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm">Ik weet niet [wie dat gedaan heeft].</td>
                <td class="px-4 py-3 text-sm font-semibold text-emerald-600">[Wie dat gedaan heeft], <strong>weet ik</strong> niet.</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm">Kun je me vertellen [waar de wc is]?</td>
                <td class="px-4 py-3 text-sm font-semibold text-emerald-600">[Waar de wc is], <strong>kun je</strong> me vertellen?</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50">
                <td class="px-4 py-3 text-sm">Ik begrijp niet [waarom hij boos is].</td>
                <td class="px-4 py-3 text-sm font-semibold text-emerald-600">[Waarom hij boos is], <strong>begrijp ik</strong> niet.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="bg-rose-50 dark:bg-rose-900/20 border-l-4 border-rose-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-rose-700 dark:text-rose-300 mb-2">🚨 PAS OP! DE INVERSIE-VERGETELHEID</h3>
          <p class="text-sm text-slate-700 dark:text-slate-300 mb-2">Veel mensen zeggen: <em>"Wie dat gedaan heeft, ik weet het niet."</em> Dit is spreektaal, maar grammaticaal <strong>FOUT</strong>. Omdat "Wie dat gedaan heeft" als één groot blok op Plek 1 staat, moet het werkwoord ("weet") direct daarna komen op Plek 2.</p>
        </div>
      `
    }
  ],
  rulesTable: [
    {
      rule: "De Bijzin-regel",
      structure: "Een ingebedde vraag is altijd een bijzin. De persoonsvorm verhuist naar het einde.",
      example: "Ik weet niet wie dat gedaan heeft. (Niet: wie heeft dat gedaan).",
      usage: "Behandel de ingebedde vraag exact zoals je een 'omdat'-zin zou behandelen."
    },
    {
      rule: "De 'Of'-regel voor Ja/Nee",
      structure: "Bij het inbedden van een ja/nee-vraag gebruik je ALTIJD 'of'. Nooit 'dat' of 'als'.",
      example: "Hij vroeg of ik kon helpen. (Niet: dat ik kon helpen).",
      usage: "'Of' vertaalt de onzekerheid van de ja/nee-vraag naar de bijzin."
    },
    {
      rule: "Interpunctie",
      structure: "De zin eindigt met het leesteken van de hoofdzin. Meestal een punt.",
      example: "Ik vraag me af waar hij woont. (Punt, geen vraagteken).",
      usage: "Alleen als de hoofdzin zelf een vraag is ('Kun je zeggen...?'), eindig je met een vraagteken."
    },
    {
      rule: "Inversie bij vooropplaatsing",
      structure: "Staat de ingebedde vraag vooraan? Dan volgt direct de persoonsvorm van de hoofdzin (Plek 2).",
      example: "Waarom hij dat deed, snap ik niet. (Niet: waarom hij dat deed, ik snap het niet).",
      usage: "De hele bijzin telt als één zinsdeel (Plek 1)."
    }
  ],
  callouts: [
    { type: "remember", label: "🏆 PRO REGEL 1", text: "Een ingebedde vraag is ALTIJD een bijzin. De persoonsvorm gaat helemaal naar het einde." },
    { type: "remember", label: "🏆 PRO REGEL 2", text: "Bij ja/nee-vragen gebruik je ALTIJD 'of' om de bijzin te starten. Nooit 'dat' of 'als'." },
    { type: "remember", label: "🏆 PRO REGEL 3", text: "De zin eindigt met het leesteken van de hoofdzin (meestal een punt), niet met een vraagteken." },
    { type: "remember", label: "⚠️ PAS OP 1", text: "Zeg NOOIT 'Ik weet niet of dat hij komt'. Gebruik alleen 'of'." },
    { type: "remember", label: "⚠️ PAS OP 2", text: "Bij vooropplaatsing van de ingebedde vraag: vergeet de inversie in de hoofdzin niet! (Waarom hij dat deed, snap ik niet)." },
    { type: "tip", label: "💡 Pro-tip", text: "Twijfel je over de woordvolgorde? Vervang de ingebedde vraag tijdelijk door 'omdat'. De woordvolgorde is exact hetzelfde!" }
  ],
  commonMistakes: [
    { incorrect: "Ik vraag me af wie heeft gewonnen.", correct: "Ik vraag me af wie gewonnen heeft.", explanation: "In een ingebedde vraag (bijzin) staat de persoonsvorm altijd achteraan." },
    { incorrect: "Ik weet niet waar hij woont?", correct: "Ik weet niet waar hij woont.", explanation: "De hoofdzin is een mededeling ('Ik weet niet'), dus de zin eindigt met een punt, geen vraagteken." },
    { incorrect: "Hij vroeg dat ik kon helpen.", correct: "Hij vroeg of ik kon helpen.", explanation: "Bij het inbedden van een ja/nee-vraag gebruik je 'of', niet 'dat'." },
    { incorrect: "Ik weet niet als het regent.", correct: "Ik weet niet of het regent.", explanation: "'Als' wordt gebruikt voor voorwaarden. Voor onzekerheid/vragen gebruik je 'of'." },
    { incorrect: "Waarom hij dat deed, ik snap het niet.", correct: "Waarom hij dat deed, snap ik niet.", explanation: "De hele bijzin is Plek 1. De hoofdzin moet daarom beginnen met inversie: persoonsvorm ('snap') + onderwerp ('ik')." }
  ],
  review: [
    "✅ Ingebedde vraag = bijzin → persoonsvorm gaat naar het einde.",
    "✅ Ja/nee-vragen inbedden = gebruik 'of' (nooit 'dat' of 'als').",
    "✅ Vraagwoorden (wie, wat, waar) blijven behouden als voegwoord.",
    "✅ Eindig meestal met een punt, tenzij de hoofdzin zelf een vraag is.",
    "✅ Vooropplaatsing van de bijzin → inversie in de hoofdzin is verplicht.",
    "✅ Gebruik nooit 'of dat' achter elkaar."
  ],
  qa: [
    {
      question: "De Woordvolgorde & Ja/Nee transformatie: Maak van de volgende directe vraag een ingebedde vraag in deze hoofdzin: 'Kunt u mij vertellen...' Directe vraag: 'Is de vergadering al begonnen?'",
      answer: "Kunt u mij vertellen of de vergadering al begonnen is? (Uitleg: 1. Het is een ja/nee-vraag, dus we gebruiken 'of'. 2. Het is een bijzin, dus de persoonsvorm 'is' verhuist naar het allerlaatste plekje. 3. De hoofdzin is een vraag, dus de zin eindigt wél met een vraagteken)."
    },
    {
      question: "De Interpunctie-valkuil: Een student schrijft de volgende zin in een formele e-mail: 'Ik ben benieuwd naar uw mening, en ik vraag me af wat u van dit voorstel vindt?' Er zit één leestekenfout in deze zin. Welke fout is het, waarom is het fout, en hoe moet het wel?",
      answer: "Het vraagteken aan het einde is fout. De zin moet eindigen met een punt. Correct: 'Ik ben benieuwd naar uw mening, en ik vraag me af wat u van dit voorstel vindt.' (Uitleg: De hoofdzin is 'Ik vraag me af...'. Dit is een mededeling over wat jij doet, geen vraag aan de lezer. Daarom hoort er een punt achter, ondanks dat er een vraagwoord ('wat') in de bijzin staat)."
    },
    {
      question: "'Of' vs 'Dat' Nuance: Lees de volgende twee zinnen. Ze lijken op elkaar, maar hebben een compleet andere betekenis. Leg uit wat het verschil is. 1. 'Ik weet dat hij morgen komt.' 2. 'Ik weet of hij morgen komt.' (Let op: deze zin is grammaticaal vreemd, maar wordt soms zo bedoeld. Hoe moet het wél als je twijfelt?)",
      answer: "Zin 1 is een feit: ik ben 100% zeker van zijn komst. Zin 2 is grammaticaal onvolledig/verwarrend zoals hij er staat. Als je twijfelt, moet je een ontkenning of vraag toevoegen. De correcte manier om twijfel uit te drukken is: 'Ik weet niet of hij morgen komt.' (Uitleg: 'Of' hoort bij onzekerheid/vragen. Je kunt niet 'weten of' iets zo is, tenzij je het ontkent of er een vraag van maakt)."
    },
    {
      question: "De Inversie bij Vooropplaatsing: Herschrijf de volgende zin, maar plaats de ingebedde vraag helemaal vooraan. Let extreem goed op de woordvolgorde van de hoofdzin! Oorspronkelijke zin: 'Ik begrijp niet waarom hij plotseling is ontslagen.'",
      answer: "Waarom hij plotseling is ontslagen, begrijp ik niet. (Uitleg: De hele bijzin 'Waarom hij plotseling is ontslagen' telt als Plek 1. Daarom moet de persoonsvorm van de hoofdzin ('begrijp') direct daarna op Plek 2 komen, gevolgd door het onderwerp ('ik'). Dit is een typische C1-constructie die veel nadruk legt op de reden)."
    }
  ]
};