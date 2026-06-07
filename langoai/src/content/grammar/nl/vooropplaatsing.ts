import type { GrammarLesson } from "../../types";

export const vooropplaatsing: GrammarLesson = {
  id: "nl-vooropplaatsing-1",
  title: "Vooropplaatsing & Inversie: De Ultieme Gids voor Nadruk & Zinsbouw",
  level: 2,
  topic: "Zinsbouw & Pragmatiek",
  body: "Beheers de kunst van het leggen van nadruk: vooropplaatsing, de V2-regel, inversie, en het verschil tussen formeel en informeel register.",
  overview:
    "Dit is de meest uitgebreide gids over vooropplaatsing (topicalisatie) in het Nederlands. Je leert hoe je de 'spotlight' van de zin verplaatst om nadruk, contrast of emotie toe te voegen. Je beheerst de strikte V2-regel (inversie), leert wat je wel en niet voorop kunt plaatsen, en ontdekt de valkuilen van het register (wanneer is het te agressief?). Met prachtige tabellen, strikte PRO-regels en 4 complexe MAX-oefenvragen word je een meester in de Nederlandse zinsbouw!",
  anchorSectionId: "wat-is-vooropplaatsing",
  exercises: [],
  timeExpressionsLabel: "De Gouden Regel: V2 & Inversie 🔄",
  timeExpressions: {
    header: "Situatie | Plek 1 (Spotlight) | Plek 2 (Motor) | Plek 3 (Onderwerp)",
    rows: [
      ["Normaal", "Ik", "**lees**", "(een boek)"],
      ["Tijd-nadruk", "**Morgen**", "**lees**", "ik"],
      ["Object-nadruk", "**Dat boek**", "**lees**", "ik"],
      ["Emotie-nadruk", "**Boos**", "**liep**", "hij"]
    ]
  },
  details: [
    {
      title: "Deel 1: Wat is Vooropplaatsing? 📢",
      body: `
        <p>In een normale Nederlandse zin staat het <strong>onderwerp</strong> op de eerste plek. Maar soms wil je de luisteraar direct laten schrikken of de aandacht vestigen op een specifiek detail (tijd, plaats, een object of een emotie). Dan haal je dat zinsdeel naar voren. Dit heet <strong>vooropplaatsing</strong> (of <em>topicalisatie</em>).</p>
        
        <div class="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-emerald-700 dark:text-emerald-300 mb-2">🏆 PRO REGEL 1: De Spotlight</h3>
          <p class="text-slate-700 dark:text-slate-300">Vooropplaatsing gebruik je <strong>ALTIJD</strong> om <strong>nadruk, contrast of emotie</strong> toe te voegen. Het is de "spotlight" van de Nederlandse zinsbouw.</p>
        </div>

        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-gradient-to-r from-indigo-600 to-purple-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Type Zin</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Voorbeeld</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Nuance</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">Normaal (Neutraal)</td>
                <td class="px-4 py-3 text-sm">Ik ga <strong>morgen</strong> naar Parijs.</td>
                <td class="px-4 py-3 text-sm text-xs">Een simpel feitje.</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30">
                <td class="px-4 py-3 text-sm font-semibold">Vooropplaatsing (Nadruk)</td>
                <td class="px-4 py-3 text-sm"><strong>Morgen</strong> ga ik naar Parijs.</td>
                <td class="px-4 py-3 text-sm text-xs">Nadruk op de tijd: <em>niet vandaag, maar MORGEN!</em></td>
              </tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      title: "Deel 2: De Gouden Regel: Inversie (De Wisseltruc) 🔄",
      body: `
        <p>Als je iets anders dan het onderwerp op plek 1 zet, gebeurt er iets magisch: het onderwerp en de persoonsvorm wisselen van plek. Dit heet <strong>inversie</strong>.</p>
        
        <div class="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-indigo-700 dark:text-indigo-300 mb-2">🏆 PRO REGEL 2: De V2-Wet</h3>
          <p class="text-slate-700 dark:text-slate-300">De persoonsvorm (pv) staat in een hoofdzin <strong>ALTIJD</strong> op plek 2. Nooit op plek 1 (tenzij het een vraag is), en nooit op plek 3.</p>
        </div>

        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-gradient-to-r from-blue-600 to-cyan-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Plek 1 (Spotlight)</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Plek 2 (De Motor)</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Plek 3 (Het Onderwerp)</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">De Rest</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold text-slate-500">Normaal</td>
                <td class="px-4 py-3 text-sm">Ik</td>
                <td class="px-4 py-3 text-sm font-bold text-indigo-600">lees</td>
                <td class="px-4 py-3 text-sm text-slate-500">(een boek)</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold text-emerald-600">Tijd</td>
                <td class="px-4 py-3 text-sm"><strong>Morgen</strong></td>
                <td class="px-4 py-3 text-sm font-bold text-indigo-600">lees</td>
                <td class="px-4 py-3 text-sm">ik</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50">
                <td class="px-4 py-3 text-sm font-semibold text-purple-600">Object</td>
                <td class="px-4 py-3 text-sm"><strong>Een boek</strong></td>
                <td class="px-4 py-3 text-sm font-bold text-indigo-600">lees</td>
                <td class="px-4 py-3 text-sm">ik</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="bg-rose-50 dark:bg-rose-900/20 border-l-4 border-rose-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-rose-700 dark:text-rose-300 mb-2">🚨 PAS OP! DE INVERSIE-VALKUIL!</h3>
          <p class="text-sm text-slate-700 dark:text-slate-300 mb-2">Veel cursisten vergeten het onderwerp naar plek 3 te verplaatsen.</p>
          <ul class="space-y-1 text-sm text-slate-700 dark:text-slate-300">
            <li>❌ <em>Fout:</em> Morgen <strong>loopt</strong> de katten in de tuin. (De pv staat op plek 2, maar het onderwerp staat er ook nog!).</li>
            <li>✅ <em>Correct:</em> Morgen <strong>lopen</strong> de katten in de tuin. (Inversie toegepast: pv 'lopen' op plek 2, onderwerp 'de katten' op plek 3).</li>
          </ul>
        </div>
      `
    },
    {
      title: "Deel 3: Wat kun je allemaal voorop plaatsen? 🎭",
      body: `
        <p>Je kunt bijna elk zinsdeel naar voren halen, maar de <strong>nuance</strong> verandert elke keer.</p>
        
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-gradient-to-r from-teal-600 to-emerald-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Categorie</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Voorbeeldzin</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Nuance / Functie</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">A. Bijwoord (Tijd/Plaats)</td>
                <td class="px-4 py-3 text-sm"><strong>Gisteren</strong> heb ik hem gezien. / <strong>In Amsterdam</strong> wonen ze niet.</td>
                <td class="px-4 py-3 text-sm text-xs">Meest neutraal. Geeft aan <em>wanneer</em> of <em>waar</em>.</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">B. Lijdend Voorwerp</td>
                <td class="px-4 py-3 text-sm"><strong>Koffie</strong> drink ik wel, maar thee niet.</td>
                <td class="px-4 py-3 text-sm text-xs">Voor <strong>contrast</strong>. (Koffie wel, iets anders niet).</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">C. Bijvoeglijk Naamwoord</td>
                <td class="px-4 py-3 text-sm"><strong>Boos</strong> liep hij de kamer uit.</td>
                <td class="px-4 py-3 text-sm text-xs">Voor <strong>emotie</strong>. De eigenschap is de spotlight.</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30">
                <td class="px-4 py-3 text-sm font-semibold text-rose-600">D. Werkwoord / Deelwoord</td>
                <td class="px-4 py-3 text-sm"><strong>Gestolen</strong> heeft hij het niet!</td>
                <td class="px-4 py-3 text-sm text-xs">De "Spreektaal Bom". <strong>Defensief</strong> of <strong>agressief</strong>. (Pas op met register!).</td>
              </tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      title: "Deel 4: Valkuilen & Register (Formeel vs. Informeel) ⚠️",
      body: `
        <p>Niet alle vooropplaatsing is geschikt voor elke situatie. Vooral het vooropplaatsen van werkwoorden is riskant.</p>
        
        <div class="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-amber-700 dark:text-amber-300 mb-2">🚨 PAS OP! DE REGISTER-VALKUIL</h3>
          <p class="text-sm text-slate-700 dark:text-slate-300 mb-2">Het vooropplaatsen van een <strong>werkwoord</strong> of <strong>voltooid deelwoord</strong> is typisch voor <strong>spreektaal</strong>. Het klinkt vaak defensief, beschuldigend of heel nadrukkelijk.</p>
          <ul class="space-y-1 text-sm text-slate-700 dark:text-slate-300">
            <li>❌ <em>Formele e-mail:</em> "<strong>Gemaakt</strong> hebben we die fout niet." (Klinkt alsof je ruzie zoekt).</li>
            <li>✅ <em>Formele e-mail:</em> "Wij hebben die fout niet gemaakt." (Neutraal en beleefd).</li>
          </ul>
        </div>

        <h3 class="text-lg font-bold mt-6 mb-3 text-slate-800 dark:text-slate-200">De Bijzin-valkuil</h3>
        <p class="text-sm text-slate-700 dark:text-slate-300 mb-4">Als je een <strong>hele bijzin</strong> voorop plaatst, telt die hele bijzin als <strong>Plek 1</strong>. De hoofdzin begint daarna direct met de persoonsvorm (inversie!).</p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-gradient-to-r from-purple-600 to-pink-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Fout ❌</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Correct ✅</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Uitleg</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50">
                <td class="px-4 py-3 text-sm text-rose-600">[Dat hij ziek is], <strong>ik</strong> vind het vervelend.</td>
                <td class="px-4 py-3 text-sm text-emerald-600 font-bold">[Dat hij ziek is], <strong>vind</strong> ik vervelend.</td>
                <td class="px-4 py-3 text-sm text-xs">De bijzin is Plek 1. De pv 'vind' moet op Plek 2. Het onderwerp 'ik' schuift naar Plek 3.</td>
              </tr>
            </tbody>
          </table>
        </div>
      `
    }
  ],
  rulesTable: [
    {
      rule: "De V2-Wet (Persoonsvorm op Plek 2)",
      structure: "In een hoofdzin staat de persoonsvorm ALTIJD op de tweede plek, ongeacht wat er op plek 1 staat.",
      example: "Morgen **ga** ik. / Een boek **lees** ik.",
      usage: "Dit is de onveranderlijke wet van de Nederlandse hoofdzin."
    },
    {
      rule: "Inversie (Onderwerp naar Plek 3)",
      structure: "Als Plek 1 bezet is door iets anders dan het onderwerp, MOET het onderwerp naar Plek 3 verhuizen.",
      example: "In de tuin **lopen** de katten. (Niet: In de tuin loopt de katten).",
      usage: "Vergeet niet het onderwerp te verplaatsen! Het werkwoord moet overeenstemmen met het onderwerp op plek 3."
    },
    {
      rule: "Functie van Vooropplaatsing",
      structure: "Tijd/Plaats = Neutraal. Lijdend Voorwerp = Contrast. Bijvoeglijk Naamwoord = Emotie. Werkwoord = Defensief/Spreektaal.",
      example: "**Boos** liep hij weg. (Emotie) / **Gestolen** heb ik het niet! (Defensief).",
      usage: "Kies je vooropplaatsing op basis van de gewenste nuance en het register (formeel/informeel)."
    },
    {
      rule: "Bijzinnen als Plek 1",
      structure: "Een hele bijzin op plek 1 telt als één blok. De hoofdzin begint direct met de persoonsvorm (inversie).",
      example: "Omdat het regent, **blijven** we binnen.",
      usage: "Zeg niet 'Omdat het regent, wij blijven binnen'. De 'w' van 'wij' komt na de pv 'blijven'."
    }
  ],
  callouts: [
    { type: "remember", label: "🏆 PRO REGEL 1", text: "Vooropplaatsing is de 'spotlight'. Gebruik het voor nadruk, contrast of emotie." },
    { type: "remember", label: "🏆 PRO REGEL 2", text: "De V2-wet: De persoonsvorm staat ALTIJD op plek 2. Punt uit." },
    { type: "remember", label: "⚠️ PAS OP 1", text: "Vergeet de inversie niet! Als het onderwerp niet op plek 1 staat, moet het naar plek 3." },
    { type: "remember", label: "⚠️ PAS OP 2", text: "Pas op met het register! Werkwoorden vooropplaatsen (Gedaan heb ik het!) is informeel en kan agressief klinken." },
    { type: "remember", label: "⚠️ PAS OP 3", text: "Bijzinnen tellen als Plek 1. De hoofdzin die volgt begint direct met de persoonsvorm." },
    { type: "tip", label: "💡 Pro-tip", text: "Wil je contrast leggen? Zet het lijdend voorwerp voorop. 'Koffie drink ik wel, thee niet.'" }
  ],
  commonMistakes: [
    { incorrect: "In de tuin loopt de katten.", correct: "In de tuin lopen de katten.", explanation: "Het werkwoord (pv) moet overeenstemmen met het onderwerp ('de katten' = meervoud) dat nu op plek 3 staat." },
    { incorrect: "Morgen ik ga naar huis.", correct: "Morgen ga ik naar huis.", explanation: "Na de tijd (Plek 1) moet direct de persoonsvorm (Plek 2) komen, en dan pas het onderwerp (Plek 3)." },
    { incorrect: "Dat hij ziek is, ik vind het vervelend.", correct: "Dat hij ziek is, vind ik vervelend.", explanation: "De bijzin is Plek 1. De hoofdzin begint met inversie: pv ('vind') + onderwerp ('ik')." },
    { incorrect: "Gemaakt hebben we die fout niet. (in formele mail)", correct: "Wij hebben die fout niet gemaakt.", explanation: "Werkwoord-vooropplaatsing is typisch voor spreektaal en klinkt defensief. In formele schrijftaal houd je de standaardvolgorde aan." }
  ],
  review: [
    "✅ Vooropplaatsing = nadruk leggen op een ander zinsdeel dan het onderwerp.",
    "✅ V2-regel: Persoonsvorm staat ALTIJD op plek 2.",
    "✅ Inversie: Onderwerp verhuist naar plek 3 als Plek 1 bezet is.",
    "✅ Categorieën: Tijd (neutraal), Object (contrast), Emotie (bn), Werkwoord (defensief).",
    "✅ Register: Wees voorzichtig met werkwoord-vooropplaatsing in formele context.",
    "✅ Bijzinnen: Tellen als 1 blok (Plek 1), gevolgd door inversie in de hoofdzin."
  ],
  qa: [
    {
      question: "De Inversie en Onderwerp-Pv Valstrik: Plaats de bijwoordelijke bepaling van tijd voorop in de volgende zin. Let extreem goed op de persoonsvorm en het onderwerp! Normale zin: 'De nieuwe studenten moeten morgenochtend om 08:00 uur in de collegezaal zijn.'",
      answer: "Morgenochtend om 08:00 uur moeten de nieuwe studenten in de collegezaal zijn. (Uitleg: 'Morgenochtend...' is Plek 1. De persoonsvorm 'moeten' blijft op Plek 2. Het onderwerp 'de nieuwe studenten' verhuist naar Plek 3.)"
    },
    {
      question: "Lijdend Voorwerp voor Contrast: Je bent in een restaurant. De ober vraagt of je vlees wilt. Jij wilt géén vlees, maar wél vis. Zet het lijdend voorwerp (vis) voorop om dit contrast perfect uit te drukken.",
      answer: "Vis wil ik wel, maar geen vlees. (Of: Vis eet ik liever dan vlees.) Uitleg: Door 'vis' op plek 1 te zetten, creëer je een directe vergelijking/contrast met 'vlees'."
    },
    {
      question: "Bijvoeglijk Naamwoord & Emotie: Een student schrijft: 'Hij was erg teleurgesteld en hij liep naar buiten.' De leraar wil de emotie (teleurgesteld) als allerbelangrijkste informatie aan het begin. Herschrijf de zin met vooropplaatsing van het bijvoeglijk naamwoord.",
      answer: "Teleurgesteld liep hij naar buiten. (Uitleg: 'Teleurgesteld' (het naamwoordelijk deel) wordt naar Plek 1 gehaald. De pv 'liep' blijft op Plek 2, en het onderwerp 'hij' schuift naar Plek 3.)"
    },
    {
      question: "Pragmatiek & Register: Je schrijft een formele e-mail aan een klant. Een collega stelt voor: 'Gemaakt hebben we die fout niet, maar de software wel.' Waarom is dit grammaticaal correct, maar pragmatisch een slecht idee?",
      answer: "Grammaticaal is het correct (vooropplaatsing van het voltooid deelwoord 'gemaakt', inversie 'hebben we'). Maar pragmatisch is het funest: het vooropplaatsen van een werkwoord is typisch voor spreektaal en klinkt enorm defensief, agressief of beschuldigend. In een formele e-mail moet je neutraal blijven: 'Wij hebben deze fout niet gemaakt; dit is een fout in de software.'"
    }
  ]
};