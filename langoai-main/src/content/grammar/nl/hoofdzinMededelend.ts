import type { GrammarLesson } from "../../types";

export const hoofdzinMededelend: GrammarLesson = {
  id: "nl-hoofdzin-mededelend-1",
  title: "De Hoofdzin – Mededelend (SVO-volgorde): Jan leest het boek",
  level: 1,
  topic: "Hoofdzin (mededelend)", // [G] Grammatica
  body: "Leer stap voor stap hoe je een correcte mededelende hoofdzin maakt. Van heel eenvoudig (Jan leest) tot complexe zinnen met hulpwerkwoorden, inversie en scheidbare werkwoorden.",
  overview:
    "Een mededelende hoofdzin is de ruggengraat van het Nederlands. In deze **superduidelijke, allesomvattende les voor studenten** bouwen we je kennis op van nul naar perfectie. We beginnen met de simpelste zinnen en voegen dan lijdend voorwerp, meewerkend voorwerp, bijwoordelijke bepalingen, hulpwerkwoorden, inversie en scheidbare werkwoorden toe. Elk onderdeel heeft heldere tabellen, eindeloos veel voorbeelden en directe uitleg. Na deze les schrijf jij feilloos elke hoofdzin, hoe lang ook.",
  anchorSectionId: "start",
  exercises: [],
  timeExpressionsLabel: "De basisregel in één oogopslag 📖",
  timeExpressions: {
    header: "Zin | Opbouw",
    rows: [
      ["**Jan leest.**", "Onderwerp – Persoonsvorm"],
      ["**Jan leest het boek.**", "Onderwerp – Persoonsvorm – Lijdend voorwerp"],
      ["**Jan heeft het boek gelezen.**", "Onderwerp – Hulpww – Lijdend vw – Voltooid deelwoord"],
      ["**Morgen leest Jan het boek.**", "Tijdsbepaling – Persoonsvorm – Onderwerp – Lijdend vw"],
    ],
  },
  details: [
    {
      title: "Stap 1: De allerkortste hoofdzin – alleen onderwerp en werkwoord 🌱",
      body: `
        <p>De aller simpelste hoofdzin bestaat uit twee stukjes: <strong>wie het doet</strong> (het onderwerp) en <strong>wat hij doet</strong> (de persoonsvorm). Meer heb je niet nodig.</p>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">Jan <strong>leest</strong>.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">De hond <strong>blaft</strong>.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">Ik <strong>slaap</strong>.</li>
        </ul>
        <p>Je ziet: het onderwerp staat op plaats 1, het werkwoord op plaats 2. Dit is de allerbelangrijkste regel van het Nederlands! Onthoud: <strong>de persoonsvorm staat altijd op de tweede plaats in een hoofdzin.</strong></p>
      `,
    },
    {
      title: "Stap 2: Een lijdend voorwerp toevoegen – wat is het doel? 📦",
      body: `
        <p>Nu maken we de zin iets langer. We vertellen <strong>wát</strong> er gelezen wordt. Dat noemen we het lijdend voorwerp. Dat zet je direct achter de persoonsvorm.</p>
        <p><strong>Onderwerp – Persoonsvorm – Lijdend voorwerp</strong></p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Onderwerp</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Persoonsvorm</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Lijdend voorwerp</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Jan</td><td class="px-3 py-2 text-sm">leest</td><td class="px-3 py-2 text-sm">het boek.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Mijn moeder</td><td class="px-3 py-2 text-sm">bakt</td><td class="px-3 py-2 text-sm">een taart.</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">De leraar</td><td class="px-3 py-2 text-sm">schrijft</td><td class="px-3 py-2 text-sm">een brief.</td></tr>
            </tbody>
          </table>
        </div>
        <p>Zo simpel is het. Deze volgorde noemen we <strong>SVO</strong> (Subject – Verbum – Object).</p>
      `,
    },
    {
      title: "Stap 3: Een meewerkend voorwerp – voor wie is het? 🎁",
      body: `
        <p>Soms vertel je ook <strong>voor wie</strong> of <strong>aan wie</strong> de handeling is. Dat is het meewerkend voorwerp. Het staat meestal tussen de persoonsvorm en het lijdend voorwerp in.</p>
        <p><strong>Onderwerp – Persoonsvorm – Meewerkend voorwerp – Lijdend voorwerp</strong></p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Onderwerp</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Persoonsvorm</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Meew. vw</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Lijdend vw</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Jan</td><td class="px-3 py-2 text-sm">geeft</td><td class="px-3 py-2 text-sm">Marie</td><td class="px-3 py-2 text-sm">het boek.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Mijn vriend</td><td class="px-3 py-2 text-sm">stuurt</td><td class="px-3 py-2 text-sm">mij</td><td class="px-3 py-2 text-sm">een appje.</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">De leraar</td><td class="px-3 py-2 text-sm">leert</td><td class="px-3 py-2 text-sm">ons</td><td class="px-3 py-2 text-sm">de grammatica.</td></tr>
            </tbody>
          </table>
        </div>
        <p>Je kunt het meewerkend voorwerp ook later zetten met een voorzetsel: <em>Jan geeft het boek <strong>aan Marie</strong>.</em> Beide volgordes zijn goed.</p>
      `,
    },
    {
      title: "Stap 4: Extra informatie toevoegen – tijd, plaats en manier ⏱️📍",
      body: `
        <p>Nu gaan we de zin uitbreiden met extra details: <strong>wanneer</strong>, <strong>waar</strong> en <strong>hoe</strong> iets gebeurt. Deze bijwoordelijke bepalingen zet je achter het lijdend voorwerp. De beste volgorde is: <strong>tijd – manier – plaats</strong>.</p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Onderwerp</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Persoonsvorm</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Lijdend vw</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Tijd</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Manier</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Plaats</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Jan</td><td class="px-3 py-2 text-sm">leest</td><td class="px-3 py-2 text-sm">het boek</td><td class="px-3 py-2 text-sm">elke avond</td><td class="px-3 py-2 text-sm">met plezier</td><td class="px-3 py-2 text-sm">in de woonkamer.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Ik</td><td class="px-3 py-2 text-sm">drink</td><td class="px-3 py-2 text-sm">koffie</td><td class="px-3 py-2 text-sm">'s ochtends</td><td class="px-3 py-2 text-sm">rustig</td><td class="px-3 py-2 text-sm">op het balkon.</td></tr>
            </tbody>
          </table>
        </div>
        <p>Deze volgorde is niet streng, maar geeft de meest natuurlijke zinsbouw. Als je iets wilt benadrukken, zet je het vooraan (dat leer je zo bij inversie).</p>
      `,
    },
    {
      title: "Stap 5: Twee werkwoorden – de werkwoordelijke eindgroep 🏗️",
      body: `
        <p>In veel zinnen zit een <strong>hulpwerkwoord</strong> (zoals <em>hebben</em>, <em>zijn</em>, <em>willen</em>, <em>kunnen</em>) en een <strong>hoofdwerkwoord</strong> (de infinitief of het voltooid deelwoord). Het hulpwerkwoord staat netjes op de tweede plaats, maar het hoofdwerkwoord moet <strong>helemaal achteraan</strong> in de zin komen te staan. Daartussenin zet je alle andere informatie.</p>
        <p><strong>Onderwerp – Hulpwerkwoord – Rest – Hoofdwerkwoord</strong></p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Zin</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Hulpww (plek 2)</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Hoofdww (achteraan)</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Jan <strong>heeft</strong> het boek <strong>gelezen</strong>.</td><td class="px-3 py-2 text-sm">heeft</td><td class="px-3 py-2 text-sm">gelezen</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Ik <strong>wil</strong> morgen naar de film <strong>gaan</strong>.</td><td class="px-3 py-2 text-sm">wil</td><td class="px-3 py-2 text-sm">gaan</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Wij <strong>kunnen</strong> het probleem <strong>oplossen</strong>.</td><td class="px-3 py-2 text-sm">kunnen</td><td class="px-3 py-2 text-sm">oplossen</td></tr>
            </tbody>
          </table>
        </div>
        <p><span class="pas-op-highlight">⚠️ PAS OP</span> Het hoofdwerkwoord mag nooit vóór het lijdend voorwerp of de bepalingen staan. Dus niet: *Jan heeft gelezen het boek.* Maar: *Jan heeft het boek gelezen.*</p>
      `,
    },
    {
      title: "Stap 6: Iets anders voorop zetten – inversie 🔄",
      body: `
        <p>Tot nu toe begonnen al onze zinnen met het onderwerp. Maar je mag ook een ander zinsdeel voorop zetten. Dat geeft extra nadruk aan dat zinsdeel. <strong>De persoonsvorm blijft altijd op de tweede plaats.</strong> Het onderwerp schuift dan door naar plaats 3, direct achter de persoonsvorm. Dit heet <strong>inversie</strong>.</p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Wat voorop?</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Zin</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Tijdsbepaling</td><td class="px-3 py-2 text-sm"><strong>Morgen leest Jan het boek.</strong></td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Plaatsbepaling</td><td class="px-3 py-2 text-sm"><strong>In de woonkamer leest Jan het boek.</strong></td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Lijdend voorwerp</td><td class="px-3 py-2 text-sm"><strong>Het boek leest Jan morgen.</strong></td></tr>
            </tbody>
          </table>
        </div>
        <p>Vergelijk de standaardzin met de inversiezin: <em>Jan leest morgen het boek.</em> (neutraal) versus <em>Morgen leest Jan het boek.</em> (nadruk op morgen). Beide zijn correct, maar de tweede legt meer klemtoon op het tijdstip.</p>
      `,
    },
    {
      title: "Stap 7: Scheidbare werkwoorden – uit elkaar in de hoofdzin ✂️",
      body: `
        <p>Sommige werkwoorden bestaan uit twee delen: een basisdeel en een voorvoegsel (bijvoorbeeld <em>opbellen</em>, <em>aankomen</em>). In de hoofdzin splits je deze: het basisdeel (de stam) staat op de tweede plaats, en het voorvoegsel komt helemaal achteraan, net als bij de werkwoordelijke eindgroep.</p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Heel werkwoord</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Zin</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">opbellen</td><td class="px-3 py-2 text-sm">Ik <strong>bel</strong> mijn moeder vanavond <strong>op</strong>.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">aankomen</td><td class="px-3 py-2 text-sm">De trein <strong>komt</strong> om drie uur <strong>aan</strong>.</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">meenemen</td><td class="px-3 py-2 text-sm">Jan <strong>neemt</strong> zijn laptop <strong>mee</strong>.</td></tr>
            </tbody>
          </table>
        </div>
        <p><span class="pas-op-highlight">⚠️ PAS OP</span> Het voorvoegsel mag niet los vooraan of halverwege de zin blijven hangen. Het moet echt helemaal aan het eind. Dus niet: *Ik opbel mijn moeder.* Of: *Ik bel op mijn moeder.*</p>
      `,
    },
  ],
  rulesTable: [
    {
      rule: "Persoonsvorm op de tweede plaats",
      structure: "In een mededelende hoofdzin staat de **persoonsvorm altijd op de tweede positie**, welk zinsdeel er ook voorop staat.",
      example: "Jan **leest** het boek. – Morgen **leest** Jan het boek.",
      usage: "Dit is de allerbelangrijkste regel van het Nederlands.",
    },
    {
      rule: "Werkwoordelijke eindgroep",
      structure: "Het **hoofdwerkwoord** (infinitief, voltooid deelwoord, scheidbaar deel) staat **achteraan** in de zin.",
      example: "Jan **heeft** het boek **gelezen**. – Ik **ruim** de kamer **op**.",
      usage: "Zet nooit het hoofdwerkwoord vóór het lijdend voorwerp.",
    },
    {
      rule: "Inversie: onderwerp direct na persoonsvorm",
      structure: "Staat er een ander zinsdeel dan het onderwerp op de eerste plaats? Dan volgt het **onderwerp direct na de persoonsvorm**.",
      example: "**Morgen** leest **Jan** het boek. – **In de tuin** speelt **de hond**.",
      usage: "De persoonsvorm blijft op plaats twee, het onderwerp schuift naar plaats drie.",
    },
    {
      rule: "Meewerkend voorwerp: zonder vz vóór, met vz na lijdend voorwerp",
      structure: "Zonder voorzetsel: **Jan geeft Marie het boek**. Met voorzetsel: **Jan geeft het boek aan Marie**.",
      example: "Ik stuur **mijn moeder** een kaart. / Ik stuur een kaart **aan mijn moeder**.",
      usage: "Beide volgordes zijn correct; zonder vz is informeler.",
    },
    {
      rule: "Volgorde bijwoordelijke bepalingen: tijd – wijze – plaats",
      structure: "Meerdere bepalingen zet je bij voorkeur in de volgorde **tijd, wijze, plaats**.",
      example: "Hij werkt **elke dag met veel plezier op kantoor**.",
      usage: "Dit is een vuistregel; de volgorde kan veranderen door nadruk.",
    },
    {
      rule: "Scheidbare werkwoorden: voorvoegsel achteraan",
      structure: "Het voorvoegsel van een scheidbaar werkwoord komt **helemaal achteraan** in de hoofdzin.",
      example: "Ik **bel** mijn moeder vanavond **op**.",
      usage: "Het voorvoegsel mag niet vóór het lijdend voorwerp of andere bepalingen staan.",
    },
  ],
  callouts: [
    { type: "remember", label: "Onthoud 1", text: "De persoonsvorm staat **altijd op de tweede plaats** in een hoofdzin." },
    { type: "remember", label: "Onthoud 2", text: "Het hoofdwerkwoord (infinitief, voltooid deelwoord, scheidbaar deel) komt **helemaal achteraan**." },
    { type: "remember", label: "Onthoud 3", text: "Bij inversie: zinsdeel voorop, dan persoonsvorm, dan **onderwerp**." },
    { type: "remember", label: "Onthoud 4", text: "Meewerkend voorwerp zonder vz **vóór** lijdend vw; met vz **erna**." },
    { type: "remember", label: "Onthoud 5", text: "Volgorde extra info: **tijd – manier – plaats**." },
    { type: "remember", label: "Onthoud 6", text: "Scheidbaar werkwoord: **stam op plaats 2**, voorvoegsel **achteraan**." },
  ],
  commonMistakes: [
    { incorrect: "Jan heeft gelezen het boek.", correct: "Jan heeft het boek gelezen.", explanation: "Het voltooid deelwoord moet achteraan; lijdend voorwerp ervoor." },
    { incorrect: "Morgen Jan leest het boek.", correct: "Morgen leest Jan het boek.", explanation: "Bij inversie komt het onderwerp direct na de persoonsvorm." },
    { incorrect: "Ik opbel mijn moeder.", correct: "Ik bel mijn moeder op.", explanation: "Scheidbare werkwoorden splitsen; voorvoegsel achteraan." },
    { incorrect: "Jan geeft Marie aan het boek.", correct: "Jan geeft Marie het boek / Jan geeft het boek aan Marie.", explanation: "'Aan' hoort alleen bij de constructie met lijdend voorwerp eerst." },
  ],
  review: [
    "Basis: Onderwerp – Persoonsvorm – (Meew. vw) – (Lijd. vw) – (Tijd – Manier – Plaats) – (Hoofdwerkwoord).",
    "Hulpwerkwoord op plaats 2, hoofdwerkwoord (infinitief / voltooid deelwoord / scheidbaar deel) achteraan.",
    "Inversie: ander zinsdeel voorop → Zinsdeel – Persoonsvorm – Onderwerp – rest.",
    "Scheidbare werkwoorden: voorvoegsel achteraan.",
  ],
  qa: [
    {
      question: "Leg uit waarom de zin “Jan heeft het boek gelezen” een hoofdzin is en wat de plaats van de persoonsvorm en het voltooid deelwoord is.",
      answer: "Het is een hoofdzin omdat hij op zichzelf staat, een mededeling doet en met een punt eindigt. De persoonsvorm **heeft** staat op de tweede plaats. Het voltooid deelwoord **gelezen** staat helemaal achteraan.",
    },
    {
      question: "Waarom is “Morgen Jan leest het boek” fout en hoe moet het correct?",
      answer: "Bij inversie moet het onderwerp direct na de persoonsvorm komen. De correcte zin is: **Morgen leest Jan het boek.**",
    },
    {
      question: "Maak een mededelende hoofdzin met een meewerkend voorwerp zonder voorzetsel en een lijdend voorwerp.",
      answer: "**Mijn moeder geeft mijn zus een cadeau.** Volgorde: Onderwerp – persoonsvorm – meewerkend voorwerp – lijdend voorwerp.",
    },
    {
      question: "In de zin “Ik wil vanavond naar de film gaan” staat de infinitief achteraan. Waarom?",
      answer: "Omdat het hoofdwerkwoord (gaan) in de werkwoordelijke eindgroep helemaal achteraan hoort. Het hulpwerkwoord (wil) staat op de tweede plaats.",
    },
    {
      question: "Wat gebeurt er met de volgorde als je het lijdend voorwerp voorop zet in een hoofdzin? Geef een voorbeeld.",
      answer: "Dan ontstaat inversie: **Die film heb ik al gezien.** Lijdend voorwerp – persoonsvorm – onderwerp – rest.",
    },
    {
      question: "Maak een zin met het scheidbare werkwoord 'opruimen' in de ik-vorm.",
      answer: "**Ik ruim de kamer op.** De stam 'ruim' staat op plaats 2, het voorvoegsel 'op' helemaal achteraan.",
    },
    {
      question: "Zet de zinsdelen in de juiste volgorde: *gisteren / een interessante lezing / in de bibliotheek / bijgewoond / heeft / mijn collega*.",
      answer: "Neutraal: **Mijn collega heeft gisteren een interessante lezing in de bibliotheek bijgewoond.** Met inversie: **Gisteren heeft mijn collega een interessante lezing in de bibliotheek bijgewoond.**",
    },
  ],
};