import type { GrammarLesson } from "../../types";

export const onpersoonlijkeWerkwoorden: GrammarLesson = {
  id: "nl-onpersoonlijke-werkwoorden-1",
  title: "Onpersoonlijke Werkwoorden: Het Regent, Het Sneeuwt & Het Spijt Me – De Ultieme Masterclass",
  level: 3,
  topic: "Werkwoorden & Grammatica",
  body: "Beheers onpersoonlijke werkwoorden volledig: het dummy-onderwerp 'het', weerwerkwoorden, gevoelswerkwoorden, de inversie-regel, en de valkuilen van 'er' vs 'het'.",
  overview:
    "Dit is de meest diepgaande, visueel schitterende en waarschuwing-rijke gids over Onpersoonlijke Werkwoorden in het Nederlands. Je leert waarom we 'het' gebruiken als er geen echte doener is, beheerst de weerwerkwoorden en gevoelswerkwoorden, en vermijdt de grootste valkuilen zoals 'er' vs 'het' en de inversie-regel. Met prachtige tabellen, strikte PRO-regels, een overvloed aan PAS OP-waarschuwingen en 4 complexe oefenvragen spreek en schrijf je voortaan als een ware moedertaalspreker!",
  anchorSectionId: "wat-is-onpersoonlijk",
  exercises: [],
  timeExpressionsLabel: "De Categorieën van Onpersoonlijke Werkwoorden in Één Oogopslag 🌧️",
  timeExpressions: {
    header: "Categorie | Voorbeelden | Voorbeeldzin",
    rows: [
      ["⛈️ Weerwerkwoorden", "regenen, sneeuwen, waaien", "**Het** regent pijpenstelen."],
      ["🧠 Gevoelswerkwoorden", "spijt doen, lukken, bevallen", "**Het** spijt **me** enorm."],
      ["⏰ Tijd & Situatie", "het is [tijd], het duurt", "**Het** is al 5 uur."]
    ]
  },
  details: [
    {
      title: "Deel 1: Wat is een Onpersoonlijk Werkwoord? 🌧️",
      body: `
        <p>Een <strong>onpersoonlijk werkwoord</strong> is een werkwoord dat <strong>geen echte doener</strong> heeft. Er is geen persoon, dier of ding dat de actie uitvoert. De regen valt niet vanuit zichzelf, en het spijtgevoel wordt niet door een object veroorzaakt.</p>
        <p class="text-sm text-slate-700 dark:text-slate-300 mb-4">Omdat de Nederlandse grammatica echter een ijzeren wet heeft: <strong>"Elke zin moet een onderwerp hebben"</strong>, gebruiken we een grammaticale dummy (een nep-onderwerp). En dat nep-onderwerp is <strong>ALTIJD</strong> het woordje <strong>het</strong>.</p>
        
        <div class="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-emerald-700 dark:text-emerald-300 mb-2">🏆 PRO REGEL 1</h3>
          <p class="text-slate-700 dark:text-slate-300">Bij een onpersoonlijk werkwoord is <strong>het</strong> het onderwerp. Er is geen 'hij', 'zij', 'ik' of 'wij' die de actie doet.</p>
        </div>

        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-gradient-to-r from-indigo-600 to-purple-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Normaal werkwoord (Met doener)</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Onpersoonlijk werkwoord (Zonder doener)</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm"><em>Jan <strong>leest</strong> een boek.</em> (Jan is de doener).</td>
                <td class="px-4 py-3 text-sm"><em><strong>Het</strong> regent.</em> (Niemand doet de regen, het gebeurt gewoon).</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30">
                <td class="px-4 py-3 text-sm"><em>De hond <strong>blaft</strong>.</em> (De hond is de doener).</td>
                <td class="px-4 py-3 text-sm"><em><strong>Het</strong> bliksemt.</em> (Niemand maakt de bliksem, het gebeurt gewoon).</td>
              </tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      title: "Deel 2: Categorie 1 – De Weerwerkwoorden (De Natuur) ⛈️",
      body: `
        <p>De meest bekende onpersoonlijke werkwoorden zijn de weerwerkwoorden. De natuur doet iets, en wij gebruiken 'het' als onderwerp.</p>
        
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-gradient-to-r from-blue-600 to-cyan-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Weerwerkwoord</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Betekenis</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Voorbeeldzin</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-semibold">regenen</td><td class="px-4 py-3 text-sm text-xs">Er valt water uit de lucht</td><td class="px-4 py-3 text-sm"><strong>Het</strong> regent pijpenstelen.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-semibold">sneeuwen</td><td class="px-4 py-3 text-sm text-xs">Er valt sneeuw</td><td class="px-4 py-3 text-sm"><strong>Het</strong> sneeuwt al de hele dag.</td></tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-semibold">waaien</td><td class="px-4 py-3 text-sm text-xs">De wind blaast hard</td><td class="px-4 py-3 text-sm"><strong>Het</strong> waait vandaag erg hard.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-semibold">onweren</td><td class="px-4 py-3 text-sm text-xs">Er is donder en bliksem</td><td class="px-4 py-3 text-sm"><strong>Het</strong> onweert in de verte.</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-4 py-3 text-sm font-semibold">vriezen / dooien</td><td class="px-4 py-3 text-sm text-xs">Temperatuur onder/boven nul</td><td class="px-4 py-3 text-sm"><strong>Het</strong> vriest dat het kraakt.</td></tr>
            </tbody>
          </table>
        </div>

        <div class="bg-rose-50 dark:bg-rose-900/20 border-l-4 border-rose-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-rose-700 dark:text-rose-300 mb-2">🚨 PAS OP! DE 'ZON' vs 'WIND' VALKUIL!</h3>
          <p class="text-sm text-slate-700 dark:text-slate-300 mb-2">Veel cursisten denken: "De wind waait, dus <em>hij</em> waait." of "De zon schijnt, dus <em>zij</em> schijnt." <strong>DIT IS FOUT!</strong></p>
          <ul class="space-y-1 text-sm text-slate-700 dark:text-slate-300">
            <li>✅ Bij <em>waaien</em> is het <strong>ALTIJD</strong> <em>het waait</em>. (Zelfs als je aan 'de wind' denkt).</li>
            <li>✅ Bij <em>schijnen</em> is het wél een normaal werkwoord als je 'de zon' als onderwerp gebruikt: <em>De zon schijnt.</em> (Dit is géén onpersoonlijk werkwoord, want 'de zon' is de echte doener!).</li>
          </ul>
        </div>
      `
    },
    {
      title: "Deel 3: Categorie 2 – De Gevoels- en Ervaringswerkwoorden 🧠",
      body: `
        <p>Deze werkwoorden drukken een gevoel, een ervaring of een mentale toestand uit. Ook hier is 'het' het onderwerp, en de persoon die het voelt, is een <strong>belanghebbend voorwerp</strong> (vaak <em>me, je, hem, haar</em>).</p>
        
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-gradient-to-r from-purple-600 to-pink-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Gevoelswerkwoord</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Betekenis</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Voorbeeldzin</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">het spijt me</td>
                <td class="px-4 py-3 text-sm text-xs">Ik heb spijt / Het doet me pijn</td>
                <td class="px-4 py-3 text-sm"><strong>Het</strong> spijt <strong>me</strong> enorm.</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">het bevalt me</td>
                <td class="px-4 py-3 text-sm text-xs">Ik vind het leuk / Ik heb er plezier van</td>
                <td class="px-4 py-3 text-sm"><strong>Het</strong> bevalt <strong>me</strong> hier goed.</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">het lukt me</td>
                <td class="px-4 py-3 text-sm text-xs">Ik kan het afkrijgen / Ik heb succes</td>
                <td class="px-4 py-3 text-sm"><strong>Het</strong> lukt <strong>me</strong> niet om te slapen.</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30">
                <td class="px-4 py-3 text-sm font-semibold">het lijkt me</td>
                <td class="px-4 py-3 text-sm text-xs">Ik heb de indruk / Ik denk dat</td>
                <td class="px-4 py-3 text-sm"><strong>Het</strong> lijkt <strong>me</strong> een goed idee.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-amber-700 dark:text-amber-300 mb-2">🚨 PAS OP! DE 'ME' VALKUIL!</h3>
          <p class="text-sm text-slate-700 dark:text-slate-300 mb-2">In de zin <em>"Het spijt me"</em> is <strong>me</strong> géén lijdend voorwerp! Je kunt niet vragen: "Wie spijt het?". Het is een <strong>belanghebbend voorwerp</strong> (datief). Het voelt voor mij als spijt.</p>
          <ul class="space-y-1 text-sm text-slate-700 dark:text-slate-300">
            <li>❌ <em>Fout:</em> Het spijt mij (als lijdend voorwerp).</li>
            <li>✅ <em>Correct:</em> Het spijt <strong>me</strong> / <strong>mij</strong> (als belanghebbende).</li>
          </ul>
        </div>
      `
    },
    {
      title: "Deel 4: De Gouden Grammatische Regels 📏",
      body: `
        <p>Hoe gebruik je deze werkwoorden correct in elke mogelijke zinsvorm? Let vooral op de inversie en het passief!</p>
        
        <div class="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-indigo-700 dark:text-indigo-300 mb-2">🏆 PRO REGEL 2 & 3</h3>
          <ul class="space-y-2 list-none pl-0 text-slate-700 dark:text-slate-300">
            <li>✅ <strong>De Inversie-regel:</strong> Begint de zin met een ander zinsdeel (zoals <em>Gisteren, Morgen</em>)? Dan wisselen 'het' en het werkwoord van plek (inversie), maar 'het' blijft <strong>ALTIJD</strong> 'het'!</li>
            <li>✅ <strong>Geen Passief:</strong> Onpersoonlijke werkwoorden kunnen <strong>NOOIT</strong> in de lijdende vorm (passief) gezet worden. Je kunt geen lijdend voorwerp hebben, dus kun je het ook niet passief maken.</li>
          </ul>
        </div>

        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-gradient-to-r from-teal-600 to-cyan-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Zinstype</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Voorbeeld (Regenen)</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Voorbeeld (Spijt)</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">Hoofdzin (Normaal)</td>
                <td class="px-4 py-3 text-sm"><strong>Het</strong> regent.</td>
                <td class="px-4 py-3 text-sm"><strong>Het</strong> spijt me.</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">Hoofdzin (Inversie)</td>
                <td class="px-4 py-3 text-sm">Gisteren regende <strong>het</strong>.</td>
                <td class="px-4 py-3 text-sm">Echt spijt heeft <strong>het</strong> me niet.</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">Bijzin</td>
                <td class="px-4 py-3 text-sm">...omdat <strong>het</strong> regent.</td>
                <td class="px-4 py-3 text-sm">...omdat <strong>het</strong> me spijt.</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">Vraag</td>
                <td class="px-4 py-3 text-sm">Regent <strong>het</strong>?</td>
                <td class="px-4 py-3 text-sm">Spijt <strong>het</strong> je?</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50">
                <td class="px-4 py-3 text-sm font-semibold text-rose-600">Passief</td>
                <td class="px-4 py-3 text-sm text-rose-600">❌ FOUT: De regen wordt gevallen.</td>
                <td class="px-4 py-3 text-sm text-rose-600">❌ FOUT: Ik word gespeten.</td>
              </tr>
            </tbody>
          </table>
        </div>
      `
    }
  ],
  rulesTable: [
    {
      rule: "Het Dummy-Onderwerp",
      structure: "Bij onpersoonlijke werkwoorden is 'het' ALTIJD het onderwerp, omdat er geen echte doener is.",
      example: "Het regent. / Het spijt me.",
      usage: "Gebruik nooit 'hij' of 'zij' voor weerwerkwoorden, en nooit 'ik' voor gevoelswerkwoorden zoals 'spijt hebben'."
    },
    {
      rule: "De Inversie-regel",
      structure: "Begint de zin met een bijwoord (Gisteren, Morgen)? Dan komt het werkwoord op plek 2 en 'het' op plek 3.",
      example: "Gisteren regende het. (Niet: Gisteren het regende).",
      usage: "Dit is dezelfde inversie-regel als bij gewone hoofdzinnen, maar het is extra belangrijk omdat 'het' anders als eerste zou moeten staan."
    },
    {
      rule: "Geen Passief",
      structure: "Onpersoonlijke werkwoorden kunnen NOOIT in de lijdende vorm (passief) gezet worden.",
      example: "❌ Het wordt geregend. / ✅ Het regent.",
      usage: "Omdat er geen lijdend voorwerp is, kun je de zin niet omdraaien naar een passieve constructie."
    },
    {
      rule: "Er vs. Het bij weer",
      structure: "Bij specifieke weerwerkwoorden (regenen, sneeuwen) is het onderwerp ALTIJD 'het', nooit 'er'.",
      example: "Het regent. (Niet: Er regent).",
      usage: "Je kunt wél 'er' gebruiken als je een ander werkwoord hebt: 'Er valt veel regen' (want 'regen' is hier het onderwerp)."
    }
  ],
  callouts: [
    { type: "remember", label: "🏆 PRO REGEL 1", text: "Bij een onpersoonlijk werkwoord is 'het' het onderwerp. Er is geen 'hij', 'zij' of 'ik' die de actie doet." },
    { type: "remember", label: "🏆 PRO REGEL 2", text: "De Inversie-regel: Gisteren regende het. (Werkwoord op plek 2, 'het' op plek 3)." },
    { type: "remember", label: "⚠️ PAS OP 1", text: "Zeg NOOIT 'Hij waait' of 'Zij schijnt' als je het weer bedoelt. Zeg ALTIJD 'Het waait'." },
    { type: "remember", label: "⚠️ PAS OP 2", text: "Zeg NOOIT 'Er regent'. Bij weerwerkwoorden is het onderwerp ALTIJD 'het'." },
    { type: "remember", label: "⚠️ PAS OP 3", text: "Zeg NOOIT 'Ik ben sorry'. Het Nederlandse werkwoord is onpersoonlijk: 'Het spijt me'." },
    { type: "tip", label: "💡 Pro-tip", text: "Bij gevoelswerkwoorden zoals 'het spijt me' of 'het lukt me' is 'me' een belanghebbend voorwerp, geen lijdend voorwerp!" }
  ],
  commonMistakes: [
    { incorrect: "Hij waait hard. (als je 'de wind' bedoelt)", correct: "Het waait hard.", explanation: "Weerwerkwoorden krijgen ALTIJD 'het' als onderwerp, zelfs als je in je hoofd aan 'de wind' denkt." },
    { incorrect: "Er regent vandaag veel.", correct: "Het regent vandaag veel.", explanation: "Bij specifieke weerwerkwoorden (regenen, sneeuwen) is het onderwerp ALTIJD het onpersoonlijke 'het'." },
    { incorrect: "Ik ben sorry. / Ik ben het spijt.", correct: "Het spijt me.", explanation: "Het Nederlandse werkwoord voor spijt hebben is onpersoonlijk. Je gebruikt 'het' als onderwerp, niet 'ik'." },
    { incorrect: "Het is koud. (als jij het zelf koud hebt)", correct: "Ik heb het koud.", explanation: "Als je je eigen fysieke gevoel bedoelt, is 'ik' het onderwerp en is 'het' een bijwoordelijk object. Zeg 'Ik heb het koud'." },
    { incorrect: "Gisteren het regende de hele dag.", correct: "Gisteren regende het de hele dag.", explanation: "Als de zin begint met 'Gisteren', moet er inversie plaatsvinden: het werkwoord komt op plek 2, en 'het' schuift naar plek 3." }
  ],
  review: [
    "✅ Onpersoonlijk werkwoord = geen echte doener, onderwerp is ALTIJD 'het'.",
    "✅ Weerwerkwoorden: het regent, het sneeuwt, het waait, het onweert.",
    "✅ Gevoelswerkwoorden: het spijt me, het lukt me, het bevalt me. 'me' is belanghebbend voorwerp.",
    "✅ Inversie: Gisteren regende het. (Werkwoord op plek 2, 'het' op plek 3).",
    "✅ Nooit passief: 'Het wordt geregend' bestaat niet.",
    "✅ Er vs. Het: Zeg 'Het regent', niet 'Er regent'. (Maar 'Er valt regen' is wel goed)."
  ],
  qa: [
    {
      question: "De Inversie- en Verleden Tijd valkuil: Een student wil vertellen over het weer van gisteren. Hij begint de zin met het woord 'Gisteren'. Hij schrijft: 'Gisteren het regende de hele dag.' Waarom is deze zin grammaticaal 100% fout, en hoe moet hij wél?",
      answer: "De zin is fout omdat de woordvolgorde niet klopt. Als een zin begint met een bijwoordelijke bepaling van tijd ('Gisteren'), moet er inversie plaatsvinden: het vervoegde werkwoord komt op plek 2, en het onderwerp ('het') schuift naar plek 3. De correcte zin is: 'Gisteren regende het de hele dag.' (Of in de VTT: 'Gisteren heeft het de hele dag geregend.')."
    },
    {
      question: "De 'Er' vs 'Het' valkuil bij weerwerkwoorden: Lees de volgende twee zinnen. In één van de twee zinnen is het onderwerp fout gekozen. Welke zin is fout, en waarom mag je daar geen 'er' gebruiken? 1. 'Er valt vandaag veel regen.' 2. 'Er regent vandaag veel.'",
      answer: "Zin 2 is fout. Bij specifieke weerwerkwoorden (zoals regenen, sneeuwen, waaien) is het onderwerp ALTIJD het onpersoonlijke voornaamwoord 'het'. Je kunt niet zeggen 'Er regent'. De correcte zin is: 'Het regent vandaag veel.' (Uitleg: Zin 1 is wél correct, omdat 'vallen' een normaal werkwoord is. Hier is 'regen' het echte onderwerp, en 'er' is een existentieel voornaamwoord dat de zin introduceert)."
    },
    {
      question: "De 'Het klopt' vs 'Er klopt' valkuil (De Doener): Je hoort een geluid. Iemand klopt op de deur, maar je weet niet wie het is. Hoe zeg je dit in het Nederlands met behulp van een onpersoonlijk werkwoord? En waarom zeg je hier niet: 'Er klopt op de deur'?",
      answer: "De correcte zin is: 'Het klopt op de deur.' (Uitleg: Omdat je niet weet wie de doener is (er is geen specifiek onderwerp zoals 'Jan' of 'de postbode'), gebruik je het onpersoonlijke 'het'. Zin 'Er klopt op de deur' is fout omdat 'er' een existentieel voornaamwoord is dat een onbepaald onderwerp aankondigt. Als je 'er' wilt gebruiken, moet je het echte onderwerp erbij zetten: 'Er klopt iemand op de deur'. Maar als je het onbekend wilt laten, is 'Het klopt' de enige juiste onpersoonlijke vorm)."
    },
    {
      question: "De Gevoelswerkwoorden en de 'Ik ben sorry' valkuil: Je hebt per ongeluk de vaas van je Nederlandse huisgenoot laten vallen. Je wilt je verontschuldigen. Een Engelse student zegt: 'Ik ben sorry.' of 'Ik ben het spijt.' Waarom zijn beide zinnen fout in het Nederlands, wat is de exacte grammaticale structuur van de correcte Nederlandse zin, en wat is de functie van het woordje 'me' daarin?",
      answer: "Beide zinnen zijn fout omdat het Nederlandse werkwoord voor spijt hebben een onpersoonlijk werkwoord is. Je gebruikt niet 'ik' als onderwerp, maar 'het'. De correcte zin is: 'Het spijt me.' (Of: 'Het spijt mij.'). (Uitleg: 'Het' is het onpersoonlijke onderwerp. 'Spijt' is het werkwoord. 'Me' (of 'mij') is géén lijdend voorwerp, maar een belanghebbend voorwerp (datief). Het betekent letterlijk: 'Het veroorzaakt spijt voor mij'. Dit is een vaste grammaticale constructie die je uit je hoofd moet leren)."
    }
  ]
};