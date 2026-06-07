import type { GrammarLesson } from "../../types";

export const volgordeBijwoordelijkeBepalingen: GrammarLesson = {
  id: "nl-volgorde-bijwoordelijke-bepalingen-1",
  title: "De Volgorde van Bijwoordelijke Bepalingen: Tijd-Manier-Plaats",
  level: 3,
  topic: "Zinsbouw & Woordvolgorde",
  body: "Beheers de natuurlijke Nederlandse zinsbouw volledig: de TMP-regel (Tijd-Manier-Plaats), uitzonderingen, de bijzin-regel, en de meest gemaakte stijlfouten.",
  overview:
    "Dit is de meest uitgebreide gids over de volgorde van bijwoordelijke bepalingen in het Nederlands. Je leert de gouden TMP-regel (Tijd-Manier-Plaats), doorziet de valkuilen van de Engelse Place-Manner-Time volgorde, en begrijpt wanneer je mag afwijken voor nadruk of ritme. Met prachtige tabellen, strikte PRO-regels en 4 korte oefenvragen klinkt je Nederlands nu 100% natuurlijk!",
  anchorSectionId: "waarom-is-deze-volgorde-belangrijk",
  exercises: [],
  timeExpressionsLabel: "De Gouden Volgorde: Tijd-Manier-Plaats (TMP) 📊",
  timeExpressions: {
    header: "Tijd (1) | Manier (2) | Plaats (3) | Volledige Zin",
    rows: [
      ["*Morgen*", "*snel*", "*naar huis*", "Ik ga **morgen snel naar huis**."],
      ["*Gisteren*", "*met de auto*", "*naar Amsterdam*", "Zij reed **gisteren met de auto naar Amsterdam**."],
      ["*Elke dag*", "*hard*", "*in de sportschool*", "Hij traint **elke dag hard in de sportschool**."]
    ]
  },
  details: [
    {
      title: "Deel 1: Waarom is deze volgorde zo belangrijk? 🤔",
      body: `
        <p>In het Nederlands is de volgorde van bijwoordelijke bepalingen <strong>niet willekeurig</strong>. Er is een vaste, natuurlijke volgorde die moedertaalsprekers intuïtief aanvoelen. Als je deze volgorde niet volgt, klinkt je zin "off" - grammaticaal misschien niet fout, maar <strong>onnatuurlijk en stroef</strong>.</p>
        
        <div class="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-emerald-700 dark:text-emerald-300 mb-2">🏆 PRO REGEL 1: De Gouden Volgorde (TMP)</h3>
          <p class="text-slate-700 dark:text-slate-300">De standaardvolgorde van bijwoordelijke bepalingen in het Nederlands is:</p>
          <p class="text-slate-700 dark:text-slate-300 font-mono text-sm mt-2">1. <span class="text-indigo-600 dark:text-indigo-400 font-bold">TIJD</span> ➔ 2. <span class="text-purple-600 dark:text-purple-400 font-bold">MANIER</span> ➔ 3. <span class="text-emerald-600 dark:text-emerald-400 font-bold">PLAATS</span></p>
        </div>

        <div class="bg-rose-50 dark:bg-rose-900/20 border-l-4 border-rose-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-rose-700 dark:text-rose-300 mb-2">🚨 PAS OP! DE ENGELSE VALKUIL!</h3>
          <p class="text-sm text-slate-700 dark:text-slate-300 mb-2">In het Engels is de volgorde <strong>Place-Manner-Time</strong> (Plaats-Manier-Tijd). Dit is <strong>exact omgekeerd</strong> aan het Nederlands!</p>
          <ul class="space-y-1 text-sm text-slate-700 dark:text-slate-300">
            <li>❌ <em>Fout (Engelse volgorde):</em> Ik ga <strong>naar huis snel morgen</strong>.</li>
            <li>✅ <em>Correct (Nederlandse volgorde):</em> Ik ga <strong>morgen snel naar huis</strong>.</li>
          </ul>
        </div>
      `
    },
    {
      title: "Deel 2: De Drie Categorieën Uitgelegd 📚",
      body: `
        <p>Laten we elke categorie apart bekijken met hun vraagwoorden en voorbeelden.</p>
        
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-gradient-to-r from-indigo-600 to-purple-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Categorie</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Vraagwoorden</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Voorbeelden</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold text-indigo-600">A. TIJD (Staat vooraan)</td>
                <td class="px-4 py-3 text-sm text-xs">Wanneer? Hoe lang? Hoe vaak?</td>
                <td class="px-4 py-3 text-sm text-xs">morgen, gisteren, om 8 uur, twee uur, elke dag</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold text-purple-600">B. MANIER (Staat in het midden)</td>
                <td class="px-4 py-3 text-sm text-xs">Hoe? Waarmee? In welke mate?</td>
                <td class="px-4 py-3 text-sm text-xs">snel, voorzichtig, met de auto, per post, erg</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50">
                <td class="px-4 py-3 text-sm font-semibold text-emerald-600">C. PLAATS (Staat achteraan)</td>
                <td class="px-4 py-3 text-sm text-xs">Waar? Waarheen? Waarvandaan?</td>
                <td class="px-4 py-3 text-sm text-xs">in de tuin, naar school, naar huis, uit Nederland</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 class="text-lg font-bold mt-8 mb-3 text-slate-800 dark:text-slate-200">Wat als er meerdere bepalingen van hetzelfde type zijn?</h3>
        <p class="text-sm text-slate-700 dark:text-slate-300 mb-4">Soms heb je meerdere tijdsbepalingen, of meerdere plaatsbepalingen. Dan geldt een <strong>sub-volgorde</strong>.</p>
        <ul class="list-disc list-inside space-y-2 text-sm text-slate-700 dark:text-slate-300">
          <li><strong>Meerdere Tijdsbepalingen:</strong> Frequentie ➔ Duur ➔ Tijdstip. <br><em>Voorbeeld: Ik studeer <strong>elke dag</strong> (freq) <strong>twee uur</strong> (duur) <strong>'s avonds</strong> (tijdstip).</em></li>
          <li><strong>Meerdere Plaatsbepalingen:</strong> Klein naar Groot (specifiek naar algemeen). <br><em>Voorbeeld: Zij werkt <strong>in de keuken</strong> (specifiek) <strong>in Amsterdam</strong> (algemeen).</em></li>
        </ul>
      `
    },
    {
      title: "Deel 3: Uitzonderingen & De Bijzin ⚖️📐",
      body: `
        <p>De TMP-regel is de standaard, maar er zijn <strong>drie belangrijke uitzonderingen</strong> waarbij je de volgorde mag (of moet) veranderen.</p>
        
        <div class="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-indigo-700 dark:text-indigo-300 mb-2">Uitzondering 1: Nadruk (Vooropplaatsing)</h3>
          <p class="text-sm text-slate-700 dark:text-slate-300">Als je <strong>nadruk</strong> wilt leggen op een bepaald zinsdeel, mag je het naar voren halen. <em>Voorbeeld: <strong>Naar huis</strong> ga ik morgen.</em></p>
        </div>

        <div class="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-amber-700 dark:text-amber-300 mb-2">Uitzondering 2: Kort vs. Lang (Ritme)</h3>
          <p class="text-sm text-slate-700 dark:text-slate-300">Als een zinsdeel <strong>heel lang</strong> is, mag je het naar achteren verplaatsen voor een beter ritme, zelfs als het een manier-bepaling is.</p>
        </div>

        <h3 class="text-lg font-bold mt-8 mb-3 text-slate-800 dark:text-slate-200">De Bijzin: Verandert de volgorde?</h3>
        <p class="text-sm text-slate-700 dark:text-slate-300 mb-4"><strong>NEE!</strong> In een bijzin blijft de TMP-volgorde <strong>exact hetzelfde</strong>. Alleen de persoonsvorm verhuist naar het einde.</p>
        
        <div class="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-emerald-700 dark:text-emerald-300 mb-2">🏆 PRO REGEL 2: De Bijzin-Regel</h3>
          <p class="text-slate-700 dark:text-slate-300">De volgorde van bijwoordelijke bepalingen verandert <strong>NOOIT</strong> in een bijzin. Alleen de werkwoorden verhuizen!</p>
          <ul class="mt-2 space-y-1 text-sm text-slate-700 dark:text-slate-300">
            <li>✅ <em>Hoofdzin:</em> Ik ga <strong>morgen snel naar huis</strong>.</li>
            <li>✅ <em>Bijzin:</em> ...omdat ik <strong>morgen snel naar huis</strong> ga.</li>
          </ul>
        </div>

        <h3 class="text-lg font-bold mt-8 mb-3 text-slate-800 dark:text-slate-200">De "Rijtest" Methode om je zin te controleren ✅</h3>
        <ol class="list-decimal list-inside space-y-2 text-sm text-slate-700 dark:text-slate-300">
          <li><strong>Identificeer</strong> alle bijwoordelijke bepalingen in je zin.</li>
          <li><strong>Label</strong> ze: Tijd (T), Manier (M), of Plaats (P).</li>
          <li><strong>Controleer</strong> de volgorde: Staat T vóór M? Staat M vóór P?</li>
          <li><strong>Herschrijf</strong> als de volgorde niet klopt.</li>
        </ol>
        <div class="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-4 border border-slate-200 dark:border-slate-700 my-4">
          <p class="text-sm text-slate-700 dark:text-slate-300"><strong>Voorbeeld:</strong> "Ik ga naar Amsterdam morgen met de trein."</p>
          <ul class="list-disc list-inside space-y-1 text-sm text-slate-700 dark:text-slate-300 mt-2">
            <li>Label: <em>naar Amsterdam</em> (P), <em>morgen</em> (T), <em>met de trein</em> (M)</li>
            <li>Huidige volgorde: P-T-M ❌</li>
            <li>Correcte volgorde: T-M-P ✅</li>
            <li>Herschreven: "Ik ga <strong>morgen met de trein naar Amsterdam</strong>."</li>
          </ul>
        </div>
      `
    }
  ],
  rulesTable: [
    {
      rule: "De Gouden TMP-Regel",
      structure: "De standaardvolgorde van bijwoordelijke bepalingen is: Tijd ➔ Manier ➔ Plaats.",
      example: "Ik ga morgen (T) snel (M) naar huis (P).",
      usage: "Gebruik deze volgorde om je zinnen natuurlijk en vloeiend te laten klinken."
    },
    {
      rule: "Meerdere Tijdsbepalingen",
      structure: "Bij meerdere tijdsbepalingen is de volgorde: Frequentie ➔ Duur ➔ Tijdstip.",
      example: "Ik studeer elke dag (freq) twee uur (duur) 's avonds (tijdstip).",
      usage: "Handig als je exact wilt aangeven hoe vaak, hoe lang en wanneer iets gebeurt."
    },
    {
      rule: "Meerdere Plaatsbepalingen",
      structure: "Bij meerdere plaatsbepalingen is de volgorde: Klein naar Groot (specifiek naar algemeen).",
      example: "Zij werkt in de keuken (specifiek) in Amsterdam (algemeen).",
      usage: "Begin met de exacte locatie en werk naar de bredere regio."
    },
    {
      rule: "De Bijzin-Regel",
      structure: "In een bijzin verandert de TMP-volgorde NOOIT. Alleen de werkwoorden verhuizen naar het einde.",
      example: "...omdat ik morgen snel naar huis ga.",
      usage: "Pas de TMP-regel toe alsof het een hoofdzin is, en schuif daarna de werkwoorden naar achteren."
    }
  ],
  callouts: [
    { type: "remember", label: "🏆 PRO REGEL 1", text: "De gouden volgorde is Tijd ➔ Manier ➔ Plaats (TMP)." },
    { type: "remember", label: "🏆 PRO REGEL 2", text: "In een bijzin verandert de TMP-volgorde NOOIT. Alleen de werkwoorden verhuizen." },
    { type: "remember", label: "⚠️ PAS OP 1", text: "Vertaal nooit letterlijk uit het Engels! Engels is Place-Manner-Time, Nederlands is Time-Manner-Place." },
    { type: "remember", label: "⚠️ PAS OP 2", text: "Tijd staat ALTIJD vooraan. Plaats staat ALTIJD achteraan. Manier staat in het midden." },
    { type: "remember", label: "⚠️ PAS OP 3", text: "Bij meerdere plaatsbepalingen: ga van Klein naar Groot (in de keuken in Amsterdam)." },
    { type: "tip", label: "💡 Pro-tip", text: "Gebruik de 'Rijtest': label elke bepaling met T, M of P. Klopt de volgorde T-M-P? Dan klinkt je zin perfect!" }
  ],
  commonMistakes: [
    { incorrect: "Ik ga naar huis snel morgen.", correct: "Ik ga morgen snel naar huis.", explanation: "Dit is de Engelse volgorde (Place-Manner-Time). In het Nederlands is het Tijd-Manier-Plaats (TMP)." },
    { incorrect: "Ik ga morgen naar huis snel.", correct: "Ik ga morgen snel naar huis.", explanation: "De manier-bepaling ('snel') moet vóór de plaats-bepaling ('naar huis') staan." },
    { incorrect: "Ik werk hard op kantoor elke dag.", correct: "Ik werk elke dag hard op kantoor.", explanation: "De tijd-bepaling ('elke dag') moet ALTIJD vooraan staan in de rij van bijwoordelijke bepalingen." },
    { incorrect: "...omdat ik naar huis snel morgen ga.", correct: "...omdat ik morgen snel naar huis ga.", explanation: "Ook in een bijzin blijft de TMP-volgorde exact hetzelfde. Alleen de persoonsvorm ('ga') verhuist naar het einde." }
  ],
  review: [
    "✅ De standaardvolgorde is Tijd ➔ Manier ➔ Plaats (TMP).",
    "✅ Tijd (Wanneer/Hoe lang/Hoe vaak) staat ALTIJD vooraan.",
    "✅ Manier (Hoe/Waarmee) staat in het midden.",
    "✅ Plaats (Waar/Waarheen) staat ALTIJD achteraan.",
    "✅ In een bijzin verandert de TMP-volgorde NOOIT, alleen de werkwoorden verhuizen.",
    "✅ Uitzonderingen: Nadruk (vooropplaatsing), Kort-vs-Lang ritme, en vaste combinaties.",
    "✅ Pas op voor de Engelse Place-Manner-Time volgorde!"
  ],
  qa: [
    {
      question: "Herschrijf deze zin in de correcte TMP-volgorde: 'Ik ga naar school met de fiets morgen.'",
      answer: "Ik ga morgen met de fiets naar school. (Tijd ➔ Manier ➔ Plaats)"
    },
    {
      question: "Welke zin klinkt natuurlijker? A) 'Zij werkt op kantoor hard elke dag.' B) 'Zij werkt elke dag hard op kantoor.'",
      answer: "B is correct. (Tijd ➔ Manier ➔ Plaats)"
    },
    {
      question: "Is de zin 'Morgen ga ik naar huis' grammaticaal fout? Waarom wel of niet?",
      answer: "Nee, het is niet fout. Het is een voorbeeld van vooropplaatsing voor nadruk. De tijd ('morgen') staat vooraan om nadruk te leggen. De rest van de zin volgt de TMP-regel."
    },
    {
      question: "Herschrijf deze zin: 'Hij heeft de hele middag in de tuin met veel plezier gespeeld.'",
      answer: "Hij heeft de hele middag met veel plezier in de tuin gespeeld. (Tijd ➔ Manier ➔ Plaats)"
    }
  ]
};