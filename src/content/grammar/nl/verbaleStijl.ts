import type { GrammarLesson } from "../../types";

export const verbaleStijl: GrammarLesson = {
  id: "nl-verbale-stijl-1",
  title: "Verbale Stijl: Actief & Dynamisch Schrijven – De Ultieme Masterclass",
  level: 3,
  topic: "Schrijfstijl & Communicatie",
  body: "Beheers de actieve en dynamische schrijfstijl volledig: actief vs. passief, het vermijden van nominalisatie, het schrappen van 'er' en 'dat', en het creëren van een goed zinsritme.",
  overview:
    "Dit is de meest uitgebreide gids over Verbale Stijl in het Nederlands. Je leert hoe je saaie, bureaucratische teksten omzet in krachtige, wervende en dynamische zinnen. Je doorziet de valkuilen van nominalisatie, passief schrijven en vage startwoorden. Met prachtige tabellen, strikte PRO-regels en 4 korte oefenvragen word je een absolute meester in professioneel schrijven!",
  anchorSectionId: "wat-is-actief-schrijven",
  exercises: [],
  timeExpressionsLabel: "De Kernregels van Dynamisch Schrijven ⚡",
  timeExpressions: {
    header: "Stijlkenmerk | Traag / Zwak ❌ | Krachtig / Dynamisch ✅",
    rows: [
      ["**Actief vs. Passief**", "De beslissing werd genomen door het management.", "Het management nam de beslissing."],
      ["**Geen Nominalisatie**", "Wij nemen een besluit over het voorstel.", "Wij besluiten over het voorstel."],
      ["**Geen Vage Start**", "Er zijn veel klanten die klagen.", "Veel klanten klagen."],
      ["**Sterke Werkwoorden**", "Hij gaf een glimlach.", "Hij glimlachte."]
    ]
  },
  details: [
    {
      title: "Deel 1: Wat is Actief en Dynamisch Schrijven? ⚡",
      body: `
        <p>Schrijfstijl gaat niet over grammatica, maar over <strong>impact</strong>. Een dynamische tekst pakt de lezer bij de keel, houdt de aandacht vast en communiceert de boodschap zonder ruis.</p>
        <p class="text-sm text-slate-700 dark:text-slate-300 mb-4">Een actieve stijl betekent dat de <strong>doener</strong> van de actie centraal staat, dat er <strong>krachtige werkwoorden</strong> worden gebruikt, en dat overbodige woorden (ruis) zijn verwijderd.</p>
        
        <div class="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-emerald-700 dark:text-emerald-300 mb-2">🏆 PRO REGEL 1: De Kernregel van Stijl</h3>
          <p class="text-slate-700 dark:text-slate-300">Laat de <strong>doener</strong> de actie uitvoeren. Gebruik <strong>sterke werkwoorden</strong>. Houd zinnen <strong>kort en bondig</strong>.</p>
        </div>
      `
    },
    {
      title: "Deel 2: De Grootste Stijlregel: Actief vs. Passief 🥊",
      body: `
        <p>De passieve vorm (lijdende vorm) maakt teksten traag, afstandelijk en bureaucratisch. De actieve vorm maakt teksten snel, direct en betrokken.</p>
        
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-gradient-to-r from-indigo-600 to-purple-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Passief (Traag, Afstandelijk) ❌</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Actief (Dynamisch, Krachtig) ✅</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Waarom is actief beter?</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm">De beslissing <strong>werd genomen</strong> door het management.</td>
                <td class="px-4 py-3 text-sm">Het management <strong>nam</strong> de beslissing.</td>
                <td class="px-4 py-3 text-sm text-xs">De doener (management) staat vooraan. De zin is korter en krachtiger.</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm">Er <strong>wordt</strong> verwacht <strong>dat</strong> de verkoop stijgt.</td>
                <td class="px-4 py-3 text-sm">Wij <strong>verwachten</strong> dat de verkoop stijgt.</td>
                <td class="px-4 py-3 text-sm text-xs">"Wij" neemt verantwoordelijkheid. "Wordt verwacht" is vaag.</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50">
                <td class="px-4 py-3 text-sm">De fout <strong>werd gemaakt</strong> door de software.</td>
                <td class="px-4 py-3 text-sm">De software <strong>maakte</strong> een fout.</td>
                <td class="px-4 py-3 text-sm text-xs">Directe oorzaak-gevolg relatie.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="bg-rose-50 dark:bg-rose-900/20 border-l-4 border-rose-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-rose-700 dark:text-rose-300 mb-2">🚨 PAS OP! DE PASSIEF-VALKUIL</h3>
          <p class="text-sm text-slate-700 dark:text-slate-300">Gebruik het passief <strong>ALLEEN</strong> als de doener echt onbekend is of als je de actie zelf belangrijker vindt dan de doener (bijv. in een wetenschappelijk verslag: <em>"De proef werd uitgevoerd"</em>). In 95% van de zakelijke en wervende teksten is het actief superieur.</p>
        </div>
      `
    },
    {
      title: "Deel 3: Nominalisatie vs. Sterke Werkwoorden 🦠",
      body: `
        <p>Een van de grootste stilistische fouten in het Nederlands is <strong>nominalisatie</strong>: het veranderen van een werkwoord in een zelfstandig naamwoord, gecombineerd met een zwak werkwoord zoals <em>doen, maken, nemen, geven</em> of <em>zijn</em>. Dit noemen we "kantoortaal" of "ambtenarese".</p>
        
        <div class="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-indigo-700 dark:text-indigo-300 mb-2">🏆 PRO REGEL 2: De Werkwoord-Regel</h3>
          <p class="text-slate-700 dark:text-slate-300">Gebruik altijd het <strong>sterke, oorspronkelijke werkwoord</strong> in plaats van een constructie met een zelfstandig naamwoord + zwak werkwoord.</p>
        </div>

        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-gradient-to-r from-teal-600 to-cyan-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Zwakke Constructie (Nominalisatie) ❌</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Sterk Werkwoord (Dynamisch) ✅</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Besparing</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm">Wij <strong>nemen een besluit</strong> over het voorstel.</td><td class="px-4 py-3 text-sm">Wij <strong>besluiten</strong> over het voorstel.</td><td class="px-4 py-3 text-sm text-xs">-2 woorden, meer kracht.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm">De directeur <strong>gaf een toelichting</strong> op de cijfers.</td><td class="px-4 py-3 text-sm">De directeur <strong>lichtte</strong> de cijfers <strong>toe</strong>.</td><td class="px-4 py-3 text-sm text-xs">-2 woorden, actiever.</td></tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm">Er wordt <strong>onderzoek gedaan</strong> naar de oorzaak.</td><td class="px-4 py-3 text-sm">Wij <strong>onderzoeken</strong> de oorzaak.</td><td class="px-4 py-3 text-sm text-xs">-3 woorden, veel directer.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-4 py-3 text-sm">Wij <strong>zorgen voor</strong> de <strong>oplevering</strong> van het project.</td><td class="px-4 py-3 text-sm">Wij <strong>leveren</strong> het project <strong>op</strong>.</td><td class="px-4 py-3 text-sm text-xs">-3 woorden, helderder.</td></tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      title: "Deel 4: De 'Er' en 'Dat' Valkuil & Zinsritme 🗑️📏",
      body: `
        <h3 class="text-lg font-bold mt-6 mb-3 text-slate-800 dark:text-slate-200">A. Vaagheid Verwijderen</h3>
        <p class="text-sm text-slate-700 dark:text-slate-300 mb-4">De woordjes <strong>er</strong> en <strong>dat</strong> zijn de grootste vijanden van een dynamische stijl. Ze creëren afstand en maken zinnen onnodig lang en ingewikkeld.</p>
        <div class="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-emerald-700 dark:text-emerald-300 mb-2">🏆 PRO REGEL 3: De "Er"-test</h3>
          <p class="text-slate-700 dark:text-slate-300">Kun je het woordje "er" of de constructie "er is/wordt" weghalen zonder dat de betekenis verandert? <strong>Doe het dan.</strong></p>
        </div>

        <h3 class="text-lg font-bold mt-8 mb-3 text-slate-800 dark:text-slate-200">B. Zinslengte en Ritme</h3>
        <p class="text-sm text-slate-700 dark:text-slate-300 mb-4">Dynamisch schrijven gaat ook over ritme. Een tekst die alleen uit lange zinnen bestaat, put de lezer uit. Een tekst die alleen uit korte zinnen bestaat, klinkt als een hakbijl.</p>
        <div class="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-indigo-700 dark:text-indigo-300 mb-2">🏆 PRO REGEL 4: De Ritme-Regel</h3>
          <p class="text-slate-700 dark:text-slate-300">Wissel korte, krachtige zinnen af met middellange zinnen. Een zin mag idealiter niet langer zijn dan <strong>15 tot 20 woorden</strong>.</p>
        </div>
      `
    }
  ],
  rulesTable: [
    {
      rule: "Actief boven Passief",
      structure: "Laat de doener de actie uitvoeren. Vermijd 'wordt gedaan door'.",
      example: "Het management nam de beslissing. (Niet: De beslissing werd genomen door...)",
      usage: "Maakt teksten directer, korter en verantwoordelijker."
    },
    {
      rule: "Vermijd Nominalisatie",
      structure: "Gebruik het sterke, oorspronkelijke werkwoord in plaats van 'doen/maken' + zelfstandig naamwoord.",
      example: "Wij besluiten. (Niet: Wij nemen een besluit).",
      usage: "Bespaart woorden en geeft de zin meer dynamiek en kracht."
    },
    {
      rule: "De 'Er'-test",
      structure: "Schrappen: verwijder overbodige 'er' en 'dat'-constructies die de zin vertragen.",
      example: "Veel klanten klagen. (Niet: Er zijn veel klanten die klagen).",
      usage: "Zorgt voor een directe, heldere boodschap zonder ruis."
    },
    {
      rule: "De Ritme-Regel",
      structure: "Wissel korte en middellange zinnen af. Maximaal 15-20 woorden per zin.",
      example: "Wij willen de klanttevredenheid verhogen. Daarom implementeren wij een nieuw systeem.",
      usage: "Houdt de lezer geboeid en maakt de tekst makkelijk scanbaar."
    }
  ],
  callouts: [
    { type: "remember", label: "🏆 PRO REGEL 1", text: "Laat de doener de actie uitvoeren. Gebruik sterke werkwoorden. Houd zinnen kort en bondig." },
    { type: "remember", label: "🏆 PRO REGEL 2", text: "Gebruik altijd het sterke, oorspronkelijke werkwoord in plaats van een constructie met een zelfstandig naamwoord + zwak werkwoord." },
    { type: "remember", label: "🏆 PRO REGEL 3", text: "De 'Er'-test: Kun je het woordje 'er' of 'er is/wordt' weghalen zonder dat de betekenis verandert? Doe het dan." },
    { type: "remember", label: "⚠️ PAS OP 1", text: "Gebruik het passief ALLEEN als de doener echt onbekend is. In 95% van de zakelijke teksten is actief superieur." },
    { type: "remember", label: "⚠️ PAS OP 2", text: "Woorden als 'maken', 'doen', 'geven' en 'nemen' zijn bijna altijd stilistische zwaktes als ze gecombineerd worden met een zelfstandig naamwoord dat van een werkwoord komt." },
    { type: "tip", label: "💡 Pro-tip", text: "Lees je tekst hardop voor. Struikel je over een zin? Dan is hij te lang of te passief. Knip hem in tweeën of maak hem actief." }
  ],
  commonMistakes: [
    { incorrect: "De brief werd door mij geschreven.", correct: "Ik schreef de brief.", explanation: "Passief maakt de zin traag en afstandelijk. Actief is directer en krachtiger." },
    { incorrect: "Wij doen een voorstel.", correct: "Wij stellen voor.", explanation: "Nominalisatie ('een voorstel doen') is zwakker dan het directe werkwoord ('voorstellen')." },
    { incorrect: "Er zijn veel mensen die denken dat...", correct: "Veel mensen denken dat...", explanation: "'Er zijn... die' is overbodige ruis die de zin vertraagt." },
    { incorrect: "Wij gaan samenwerken met elkaar.", correct: "Wij gaan samenwerken.", explanation: "'Samen' en 'elkaar' is dubbelop taal. Houd het beknopt." },
    { incorrect: "Hij gaf een glimlach.", correct: "Hij glimlachte.", explanation: "Gebruik het sterke, oorspronkelijke werkwoord in plaats van 'geven' + zelfstandig naamwoord." }
  ],
  review: [
    "✅ Laat de doener de actie uitvoeren (actief schrijven).",
    "✅ Vermijd nominalisatie: gebruik sterke werkwoorden in plaats van 'doen'/'maken' + zelfstandig naamwoord.",
    "✅ Schrappen: verwijder overbodige 'er' en 'dat'-constructies.",
    "✅ Ritme: wissel korte en middellange zinnen af (max 15-20 woorden per zin).",
    "✅ Vermijd dubbelop taal (bijv. 'samenwerken met elkaar').",
    "✅ Gebruik het passief alleen als de doener echt onbekend of onbelangrijk is."
  ],
  qa: [
    {
      question: "Actief maken: Maak deze zin actief: 'Het nieuwe beleid wordt door de directie morgen geïntroduceerd.'",
      answer: "De directie introduceert morgen het nieuwe beleid."
    },
    {
      question: "Nominalisatie oplossen: Vervang de zwakke constructie door één sterk werkwoord: 'Wij zullen een onderzoek instellen naar de oorzaak.'",
      answer: "Wij zullen de oorzaak onderzoeken."
    },
    {
      question: "'Er' verwijderen: Herschrijf deze zin zonder het woord 'er' en maak hem directer: 'Er zijn veel klanten die ontevreden zijn over de service.'",
      answer: "Veel klanten zijn ontevreden over de service."
    },
    {
      question: "Sterk werkwoord kiezen: Vervang het zwakke werkwoord in deze zin: 'De manager gaf een toestemming voor het project.'",
      answer: "De manager keurde het project goed."
    }
  ]
};