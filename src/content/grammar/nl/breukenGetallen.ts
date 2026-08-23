import type { GrammarLesson } from "../../types";

export const breukenGetallen: GrammarLesson = {
  id: "nl-breuken-getallen-1",
  title: "Breuken, Getallen en Percentages",
  level: 2,
  topic: "Getallen en breuken", // [V] Vocabulaire
  body: "Leer hoe je breuken (1/3, 2/5), het bijzondere getal 'anderhalf' en percentages correct schrijft en gebruikt. Met alle regels, uitzonderingen en valkuilen.",
  overview:
    "Breuken, kommagetallen en percentages kom je overal tegen: bij koken, aanbiedingen, maten en nieuwsberichten. In deze **superuitgebreide les** ontdek je hoe je breuken vormt met telwoorden en rangtelwoorden, wanneer je *anderhalf* of *anderhalve* gebruikt, hoe je *driekwart* en *halfuur* aaneenschrijft, en hoe *procent* zich gedraagt na getallen. Daarnaast leer je alles over **kommagetallen**, **negatieve getallen**, **Romeinse cijfers**, **maten en gewichten** en hoe je breuken gebruikt in **tijdsaanduidingen**. Met heldere tabellen, talloze voorbeelden, PAS OP‑waarschuwingen en 10 ijzersterke oefenvragen gebruik jij elk getal en elke breuk voortaan foutloos.",
  anchorSectionId: "waarom",
  exercises: [],
  timeExpressionsLabel: "Breuken – basisvormen 🔢",
  timeExpressions: {
    header: "Breuk | Uitspraak / spelling | Bijzonderheid",
    rows: [
      ["1/2", "**een half**", "Uitzondering: niet 'een tweede'"],
      ["1/3", "**een derde**", ""],
      ["1/4", "**een kwart** (of een vierde)", "Kwart is gebruikelijker"],
      ["1/5", "**een vijfde**", ""],
      ["1/8", "**een achtste**", ""],
      ["2/3", "**twee derde(n)**", "Beide mogen, meervoud is gebruikelijker"],
      ["3/4", "**drie kwart** of **driekwart**", "Driekwart aaneen als bijvoeglijk naamwoord"],
    ],
  },
  details: [
    {
      title: "Waarom dit onderwerp belangrijk is 🎯",
      body: `
        <p>Breuken, percentages en bijzondere getallen zoals <em>anderhalf</em> heb je overal nodig. Bij het koken (anderhalve eetlepel suiker), bij het nieuws (twee derde van de bevolking), bij aanbiedingen (50 procent korting) en bij maten en gewichten. Ook kommagetallen, negatieve getallen en Romeinse cijfers kom je regelmatig tegen. Deze les legt alles uit: hoe je breuken vormt, hoe je ze spelt, wat het verschil is tussen <em>een derde</em> en <em>het derde</em>, hoe <em>anderhalf</em> verbuigt en hoe je percentages correct gebruikt.</p>
      `,
    },
    {
      title: "Rangtelwoorden – de bouwstenen voor breuken 🥇",
      body: `
        <p>Breuken bestaan uit een <strong>teller</strong> (aantal delen) en een <strong>noemer</strong> (in hoeveel stukjes het geheel is verdeeld). De noemer is vrijwel altijd een <strong>rangtelwoord</strong>. Daarom moet je de rangtelwoorden goed beheersen.</p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Cijfer</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Rangtelwoord</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">1</td><td class="px-3 py-2 text-sm">eerste</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">2</td><td class="px-3 py-2 text-sm">tweede</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">3</td><td class="px-3 py-2 text-sm">derde</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">4</td><td class="px-3 py-2 text-sm">vierde</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">5</td><td class="px-3 py-2 text-sm">vijfde</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">8</td><td class="px-3 py-2 text-sm">achtste</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">10</td><td class="px-3 py-2 text-sm">tiende</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">20</td><td class="px-3 py-2 text-sm">twintigste</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">100</td><td class="px-3 py-2 text-sm">honderdste</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">1000</td><td class="px-3 py-2 text-sm">duizendste</td></tr>
            </tbody>
          </table>
        </div>
      `,
    },
    {
      title: "Breuken – de basisregels 🧩",
      body: `
        <p>Een breuk maak je met een <strong>teller</strong> (hoofdtelwoord) + <strong>noemer</strong> (rangtelwoord). Voorbeelden: <em>één derde, twee vijfde(n)</em>.</p>
        <p><strong>Uitzonderingen:</strong></p>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">1/2 → <strong>een half</strong> (niet 'een tweede')</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">1/4 → <strong>een kwart</strong> (gebruikelijker dan 'een vierde')</li>
        </ul>
        <p>Als de teller groter is dan 1, mag je de noemer in het meervoud zetten: <em>twee derden</em> (meervoud) of <em>twee derde</em> (enkelvoud). Het meervoud is in verzorgde taal gebruikelijker. Let op: <em>drie kwart</em> blijft ongewijzigd; de vaste combinatie is <strong>driekwart</strong> als het aaneengeschreven wordt.</p>
        <h3 class="text-lg font-bold mt-6 mb-2">Lidwoord en werkwoord bij breuken</h3>
        <p>Een breuk als onderwerp krijgt een enkelvoudige persoonsvorm: <em>Driekwart van de mensen <strong>is</strong> tevreden.</em> (Niet 'zijn').</p>
      `,
    },
    {
      title: "Anderhalf – het bijzondere getal voor 1,5 🌟",
      body: `
        <p><strong>Anderhalf</strong> is het woord voor 1,5. Het is samengesteld uit <em>ander</em> en <em>half</em>. De verbuiging hangt af van het geslacht van het zelfstandig naamwoord.</p>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">Bij een <strong>het-woord</strong> (onzijdig): <strong>anderhalf</strong> – <em>anderhalf uur, anderhalf brood</em>.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">Bij een <strong>de-woord</strong> (mannelijk/vrouwelijk): <strong>anderhalve</strong> – <em>anderhalve dag, anderhalve week</em>.</li>
        </ul>
        <p>Het zelfstandig naamwoord blijft <strong>enkelvoud</strong>: <em>anderhalve meter</em> (niet meters).</p>
        <p><span class="pas-op-highlight">⚠️ PAS OP</span> Voor 2,5 gebruik je <em>tweeënhalf</em> met een trema: <em>tweeënhalf uur</em> (het-woord), <em>tweeënhalve dag</em> (de-woord).</p>
      `,
    },
    {
      title: "Percentages – procenten 🏷️",
      body: `
        <p><strong>Procent</strong> is een onzijdig zelfstandig naamwoord. Na een precies getal blijft het enkelvoud: <em>10 procent, 50 procent</em>. Alleen bij onbepaalde hoeveelheden gebruik je het meervoud <strong>procenten</strong>: <em>enkele procenten</em>.</p>
        <p>Percentages schrijf je met een komma: <em>3,5 %</em> (spreek uit: <em>drie komma vijf procent</em>). In lopende tekst voluit schrijven is gebruikelijker.</p>
      `,
    },
    {
      title: "Kommagetallen en decimalen 🔢",
      body: `
        <p>In het Nederlands gebruiken we een <strong>komma</strong> om decimalen aan te geven, geen punt. € 3,50 spreek je uit als <em>drie euro vijftig</em> of <em>drie komma vijftig euro</em>.</p>
        <p>Na een kommagetal lager dan 2 gebruik je het enkelvoud: <em>1,5 graad</em> (of <em>anderhalve graad</em>).</p>
        <h3 class="text-lg font-bold mt-6 mb-2">Negatieve getallen</h3>
        <p>Negatieve getallen schrijf je met een minteken: <em>-5 °C</em> spreek je uit als <em>min vijf graden</em>. Bij geld zegt men <em>min vijftig euro</em> of <em>een schuld van vijftig euro</em>. Het minteken staat altijd direct voor het getal, zonder spatie.</p>
        <h3 class="text-lg font-bold mt-6 mb-2">Romeinse cijfers</h3>
        <p>Je komt Romeinse cijfers nog vaak tegen bij hoofdstukken, vorsten en jaartallen. De belangrijkste symbolen: I=1, V=5, X=10, L=50, C=100, D=500, M=1000. Je spreekt ze uit als een rangtelwoord: <em>Koning Willem <strong>de Derde</strong></em> (Willem III), <em>hoofdstuk <strong>vijf</strong></em> (hoofdstuk V).</p>
      `,
    },
    {
      title: "Breuken in tijdsaanduidingen en maten 🕐",
      body: `
        <p>Bij tijd gebruik je vaak breuken en delen van een uur:</p>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">een halfuur (30 minuten), een kwartier (15 minuten), een etmaal (24 uur)</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">anderhalf uur (90 minuten), drieënhalf uur (210 minuten)</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">om half drie = 14:30; om kwart over twee = 14:15; om tien voor half vier = 15:20</li>
        </ul>
        <p>Bij maten en gewichten blijven breuken vaak onverbogen en enkelvoudig: <em>tweeënhalve kilo</em> (niet kilo's), <em>anderhalve liter</em> (niet liters).</p>
      `,
    },
  ],
  rulesTable: [
    {
      rule: "Breuk = teller + noemer (rangtelwoord)",
      structure: "Teller (hoofdtelwoord) + noemer (rangtelwoord). Uitzonderingen: 1/2 = half, 1/4 = kwart.",
      example: "één derde, twee vijfde(n).",
      usage: "Bij teller > 1 is meervoud van de noemer vaak natuurlijker: 'twee derden'.",
    },
    {
      rule: "Anderhalf vs. anderhalve",
      structure: "**Anderhalf** voor het-woorden; **anderhalve** voor de-woorden. Het zelfstandig naamwoord blijft enkelvoud.",
      example: "anderhalf uur (het), anderhalve dag (de).",
      usage: "Anderhalve meter, niet 'anderhalve meters'.",
    },
    {
      rule: "Procent: enkelvoud na getal",
      structure: "Gebruik **procent** na een exact getal; **procenten** alleen in onbepaalde context.",
      example: "10 procent (niet procenten). Enkele procenten.",
      usage: "Spreek uit: 'drie komma vijf procent'.",
    },
    {
      rule: "Driekwart en halfuur aaneenschrijven",
      structure: "**Driekwart** (3/4) en **halfuur** (30 min) zijn samenstellingen die aaneen worden geschreven.",
      example: "driekwart van de bevolking, een halfuur wachten.",
      usage: "In 'drie kwart' los is de klemtoon anders (drie losse kwartjes).",
    },
    {
      rule: "Werkwoord bij breukonderwerp: enkelvoud",
      structure: "Als een breuk het onderwerp van de zin is, staat de persoonsvorm meestal in het enkelvoud, zeker bij formele taal.",
      example: "Driekwart van de mensen is tevreden.",
      usage: "In de spreektaal hoor je ook 'zijn', maar formeel is 'is' juist.",
    },
    {
      rule: "Negatieve getallen: minteken direct voor het getal",
      structure: "Schrijf het minteken (-) zonder spatie voor het getal. Spreek uit als 'min'.",
      example: "-5 °C (min vijf graden), -€ 50 (min vijftig euro).",
      usage: "Bij temperaturen en geldbedragen het meest gebruikelijk.",
    },
  ],
  callouts: [
    { type: "remember", label: "Onthoud 1", text: "1/2 = **een half**, 1/4 = **een kwart**, 1/3 = **een derde**." },
    { type: "remember", label: "Onthoud 2", text: "**Anderhalf** (het) vs. **anderhalve** (de) – altijd met enkelvoud." },
    { type: "remember", label: "Onthoud 3", text: "Na een getal: **procent** (enkelvoud). Alleen 'enkele procenten' is meervoud." },
    { type: "remember", label: "Onthoud 4", text: "**Driekwart** en **halfuur** zijn één woord." },
    { type: "remember", label: "Onthoud 5", text: "Negatieve getallen: minteken vast aan het getal, uitspreken als 'min'." },
    { type: "remember", label: "Onthoud 6", text: "Romeinse cijfers: uitspreken als rangtelwoorden (Willem III = Willem de Derde)." },
  ],
  commonMistakes: [
    {
      incorrect: "anderhalve uur",
      correct: "anderhalf uur",
      explanation: "Uur is een het-woord → anderhalf zonder -e.",
    },
    {
      incorrect: "anderhalf dag",
      correct: "anderhalve dag",
      explanation: "Dag is een de-woord → anderhalve met -e.",
    },
    {
      incorrect: "50 procenten",
      correct: "50 procent",
      explanation: "Na een getal blijft procent in het enkelvoud.",
    },
    {
      incorrect: "een halfuur (als losse woorden)",
      correct: "een halfuur",
      explanation: "Halfuur is een samenstelling en schrijf je aaneen.",
    },
    {
      incorrect: "Drie kwart zijn aanwezig.",
      correct: "Driekwart is aanwezig.",
      explanation: "Driekwart als geheel is enkelvoud; de persoonsvorm moet enkelvoud zijn.",
    },
    {
      incorrect: "- 5 °C (met spatie na minteken)",
      correct: "-5 °C",
      explanation: "Minteken direct voor het getal, zonder spatie.",
    },
    {
      incorrect: "Koning Willem de Derde (als rangtelwoord klein)",
      correct: "Koning Willem de Derde",
      explanation: "Bij vorsten schrijf je het rangtelwoord met een hoofdletter als het bij de naam hoort.",
    },
    {
      incorrect: "om half twee (als 13:30)",
      correct: "om half twee (juist, betekent 13:30)",
      explanation: "Half twee = 13:30, niet 14:30. Dit is een vaak terugkerend misverstand.",
    },
  ],
  review: [
    "Breuken: teller (hoofdtelwoord) + noemer (rangtelwoord). 1/2 = half, 1/4 = kwart.",
    "Teller > 1: noemer vaak meervoud (twee derden).",
    "Anderhalf (het-woord) / anderhalve (de-woord) + enkelvoud.",
    "Procent na getal = enkelvoud. Alleen onbepaald meervoud (enkele procenten).",
    "Kommagetallen met komma: 3,5% = drie komma vijf procent.",
    "Driekwart en halfuur zijn één woord.",
    "Breukonderwerp krijgt enkelvoudige persoonsvorm (driekwart is).",
    "Negatieve getallen: -5 °C (min vijf graden).",
    "Romeinse cijfers uitspreken als rangtelwoorden.",
    "Tijdsaanduidingen: half twee = 13:30, kwart over twee = 14:15.",
  ],
  qa: [
    {
      question: "Hoe schrijf je '1,5 liter' voluit? Houd rekening met het geslacht van 'liter' en verklaar je keuze.",
      answer: "**Anderhalve liter.** Liter is een de-woord, dus je gebruikt *anderhalve*. Het zelfstandig naamwoord blijft enkelvoud.",
    },
    {
      question: "Vul de juiste vorm in: \"Over ___ (half) uur begint de les.\" Waarom schrijf je het zo?",
      answer: "**Over een halfuur begint de les.** *Halfuur* is een samenstelling van *half* en *uur* en wordt aaneengeschreven. Het is één begrip (30 minuten).",
    },
    {
      question: "Waarom is \"50 procenten van de mensen\" fout? Wat moet het zijn?",
      answer: "Na een precies getal blijft *procent* in het enkelvoud. Correct: **50 procent van de mensen**. *Procenten* gebruik je alleen onbepaald, zoals 'enkele procenten'.",
    },
    {
      question: "Wat is het verschil tussen 'een derde' en 'het derde'? Gebruik ze allebei in een zin.",
      answer: "*Een derde* is de breuk 1/3. *Een derde van de taart is op.* *Het derde* is het rangtelwoord. *Mijn kind zit in het derde leerjaar.*",
    },
    {
      question: "Schrijf de breuk 2/3 voluit. Zijn er twee mogelijkheden? Welke is gebruikelijker en waarom?",
      answer: "**Twee derde** of **twee derden**. *Twee derden* met meervoud is gebruikelijker in verzorgde taal, omdat de teller groter is dan 1.",
    },
    {
      question: "Verbeter de zin: \"Drie kwart van de studenten hebben het examen gehaald.\" Is er een fout?",
      answer: "Formeel correct is: **Driekwart van de studenten heeft het examen gehaald.** De breuk als geheel is onderwerp en staat in het enkelvoud. Meervoud (*hebben*) is informeel.",
    },
    {
      question: "Hoe spreek je 3,5% uit? En hoe schrijf je het in een formele tekst?",
      answer: "Uitspraak: **drie komma vijf procent**. In een formele tekst voluit: **3,5 procent** (met komma).",
    },
    {
      question: "Hoe spreek je de temperatuur -8 °C uit? En hoe schrijf je het correct?",
      answer: "Uitspraak: **min acht graden**. Je schrijft het als **-8 °C**, zonder spatie tussen het minteken en het getal.",
    },
    {
      question: "Wat is de juiste uitspraak van 'Willem III' en 'Hoofdstuk VII'?",
      answer: "Willem III spreek je uit als **Willem de Derde**. Hoofdstuk VII spreek je uit als **hoofdstuk zeven**.",
    },
    {
      question: "Hoeveel is 'anderhalve dag' in uren? En hoe schrijf je '2,5 dag' voluit?",
      answer: "Anderhalve dag = 36 uur. 2,5 dag schrijf je voluit als **tweeënhalve dag** (de-woord).",
    },
  ],
};