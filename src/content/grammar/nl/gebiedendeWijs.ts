import type { GrammarLesson } from "../../types";

export const gebiedendeWijs: GrammarLesson = {
  id: "nl-gebiedendewijs-1",
  title: "Gebiedende Wijs: Loop! – Loopt u! – Laten we...",
  level: 1,
  topic: "Gebiedende wijs", // [G] Grammatica
  body: "Leer hoe je een bevel, verzoek of instructie geeft met de gebiedende wijs. Met de stam voor jij/jullie, de beleefde vorm met u, en de uitdrukking met 'laten we'.",
  overview:
    "De **gebiedende wijs** gebruik je voor een bevel, verzoek, instructie, advies of wens. In deze **supercomplete, glasheldere les** ontdek je hoe je de directe vorm (alleen de **stam**) gebruikt, hoe je de beleefde vorm (**stam + t + u**) maakt, en hoe je met **laten we** een voorstel doet. Je leert de uitzonderingen bij onregelmatige werkwoorden (**wees**, **heb**, **wil**), hoe je de toon verzacht met **maar**, **eens** en **even**, en hoe je ontkenningen maakt. Met heldere tabellen, tientallen voorbeelden en 7 ijzersterke oefenvragen gebruik jij de gebiedende wijs voortaan foutloos en natuurlijk.",
  anchorSectionId: "wat",
  exercises: [],
  timeExpressionsLabel: "Overzicht gebiedende wijs 📢",
  timeExpressions: {
    header: "Vorm | Regel | Voorbeeld",
    rows: [
      ["Direct (jij/jullie)", "alleen de **stam** (ik-vorm)", "**Loop!** – **Kom!** – **Zit!**"],
      ["Beleefd (u)", "**stam + t + u**", "**Loopt u!** – **Komt u!** – **Zit u!**"],
      ["Voorstel (wij)", "**Laten we** + infinitief", "**Laten we** beginnen."],
      ["Ontkenning", "**Niet** + infinitief / **Niet** + stam", "**Niet roken!** – **Niet doen!**"],
    ],
  },
  details: [
    {
      title: "Wat is de gebiedende wijs? 🎯",
      body: `
        <p>De <strong>gebiedende wijs</strong> gebruik je om een <strong>bevel</strong>, <strong>verzoek</strong>, <strong>instructie</strong>, <strong>advies</strong> of <strong>wens</strong> uit te drukken. Je zegt ermee wat iemand moet doen of laten. Het is een directe, vaak korte manier van spreken.</p>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>Loop</strong> door! (bevel)</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>Kom</strong> binnen. (uitnodiging)</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>Wees</strong> voorzichtig. (advies)</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>Loopt u</strong> maar even mee. (beleefd verzoek)</li>
        </ul>
        <p>Je ziet dat de gebiedende wijs vaak uit één enkel woord bestaat: de stam van het werkwoord. Er zijn ook vormen met <em>u</em> erbij, met <em>laten</em>, en vaste combinaties.</p>
      `,
    },
    {
      title: "De basisregel – de stam voor jij en jullie 🧱",
      body: `
        <p>De gewone, directe gebiedende wijs (tegen iemand die je met <strong>jij</strong> of <strong>jullie</strong> aanspreekt) maak je door <strong>alleen de stam</strong> van het werkwoord te gebruiken. Er staat geen onderwerp bij. De stam is de ik-vorm.</p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Infinitief</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Stam (ik-vorm)</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Gebiedende wijs</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">lopen</td><td class="px-3 py-2 text-sm">loop</td><td class="px-3 py-2 text-sm"><strong>Loop!</strong></td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">komen</td><td class="px-3 py-2 text-sm">kom</td><td class="px-3 py-2 text-sm"><strong>Kom!</strong></td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">werken</td><td class="px-3 py-2 text-sm">werk</td><td class="px-3 py-2 text-sm"><strong>Werk!</strong></td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">zitten</td><td class="px-3 py-2 text-sm">zit</td><td class="px-3 py-2 text-sm"><strong>Zit!</strong></td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">geven</td><td class="px-3 py-2 text-sm">geef</td><td class="px-3 py-2 text-sm"><strong>Geef!</strong></td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">eten</td><td class="px-3 py-2 text-sm">eet</td><td class="px-3 py-2 text-sm"><strong>Eet!</strong></td></tr>
            </tbody>
          </table>
        </div>
        <p>De stam kan hier dus eindigen op een t, zoals <em>eet</em>, <em>zit</em>. Dat is geen bezwaar; het blijft gewoon de stam.</p>
        <p><span class="pas-op-highlight">⚠️ PAS OP</span> Ook werkwoorden met de v/f‑ of z/s‑wisseling gebruiken hun gewone stam: <em>leven → Leef!</em> (niet <em>Leef!</em> is correct, want stam is leef). <em>reizen → Reis!</em> (stam reis). <em>schrijven → Schrijf!</em> (stam schrijf).</p>
        <p>Je kunt de directe vorm nog vriendelijker maken door er <strong>jij</strong> of <strong>jullie</strong> achter te zetten, maar de werkwoordsvorm blijft de stam (zonder t): <em>Loop jij maar even naar de winkel. Gaan jullie maar vast zitten.</em></p>
      `,
    },
    {
      title: "De beleefdheidsvorm – stam + t + u 👆",
      body: `
        <p>Spreek je iemand aan met <strong>u</strong>, dan gebruik je de <strong>beleefde gebiedende wijs</strong>. Deze maak je door <strong>stam + t</strong> te gebruiken, gevolgd door het woord <strong>u</strong>. Het werkwoord staat in dezelfde vorm als de jij‑vorm of u‑vorm in de tegenwoordige tijd.</p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Infinitief</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Stam</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Beleefde gebiedende wijs</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">lopen</td><td class="px-3 py-2 text-sm">loop</td><td class="px-3 py-2 text-sm"><strong>Loopt u</strong> maar even mee.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">komen</td><td class="px-3 py-2 text-sm">kom</td><td class="px-3 py-2 text-sm"><strong>Komt u</strong> binnen.</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">zitten</td><td class="px-3 py-2 text-sm">zit</td><td class="px-3 py-2 text-sm"><strong>Zit u</strong> hier. (stam op t → geen extra t)</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">zeggen</td><td class="px-3 py-2 text-sm">zeg</td><td class="px-3 py-2 text-sm"><strong>Zegt u</strong> het maar.</td></tr>
            </tbody>
          </table>
        </div>
        <p><span class="pas-op-highlight">⚠️ PAS OP</span> Het is <strong>altijd</strong> met <em>u</em> erbij. Zonder <em>u</em> is het de directe vorm, die onbeleefd overkomt tegen een u‑persoon. Dus niet <em>Loopt!</em> tegen een meneer; dat is niet correct. Altijd <strong>Loopt u!</strong></p>
        <p><span class="pas-op-highlight">⚠️ PAS OP</span> Verwar de beleefde gebiedende wijs niet met een vraagzin. Een vraagzin heeft een vraagteken en vaak een andere woordvolgorde: <em>Loopt u?</em> (vraag) tegenover <em>Loopt u!</em> (bevel/verzoek). In geschreven taal geeft het leesteken de doorslag.</p>
      `,
    },
    {
      title: "Uitzonderingen – onregelmatige werkwoorden 🌟",
      body: `
        <p>Sommige werkwoorden hebben een afwijkende stam of een aparte vorm in de gebiedende wijs.</p>
        <h3 class="text-lg font-bold mt-4 mb-2">Zijn – de onregelmatigste</h3>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">Direct: <strong>Wees</strong> stil! (niet "ben")</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">Beleefd: <strong>Weest u</strong> maar gerust. (offi‑cieel: stam wees + t = weest)</li>
        </ul>
        <h3 class="text-lg font-bold mt-4 mb-2">Hebben – twee mogelijkheden</h3>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">Direct: <strong>Heb</strong> geduld! (of <strong>Hebt</strong> – beide mogen)</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">Beleefd: <strong>Hebt u</strong> even een momentje? (of <strong>Heeft u</strong> – beide mogen)</li>
        </ul>
        <h3 class="text-lg font-bold mt-4 mb-2">Willen</h3>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">Direct: <strong>Wil</strong> maar wat je wilt.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">Beleefd: <strong>Wilt u</strong> dat even doen?</li>
        </ul>
        <p>Werkwoorden als <strong>kunnen</strong>, <strong>zullen</strong> en <strong>mogen</strong> worden zelden in de gebiedende wijs gebruikt. In plaats daarvan gebruikt men andere formuleringen: <em>Doe je best!</em> (niet <em>Kun!</em>).</p>
      `,
    },
    {
      title: "De vorm met 'laten' – voorstel of aansporing 🤝",
      body: `
        <p>Met <strong>laten we</strong> + <strong>infinitief</strong> doe je een voorstel of aansporing waarin je jezelf insluit.</p>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>Laten we</strong> beginnen.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>Laten we</strong> naar huis gaan.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>Laten we</strong> niet vergeten te genieten.</li>
        </ul>
      `,
    },
    {
      title: "Verzachters – de toon vriendelijker maken 🗣️",
      body: `
        <p>Door kleine woordjes toe te voegen, maak je de gebiedende wijs zachter en vriendelijker.</p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Woordje</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Functie</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Voorbeeld</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">maar</td><td class="px-3 py-2 text-sm">stelt gerust, maakt vriendelijker</td><td class="px-3 py-2 text-sm">Kom <strong>maar</strong> binnen.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">eens / 'ns</td><td class="px-3 py-2 text-sm">verzacht een verzoek</td><td class="px-3 py-2 text-sm">Kijk <strong>eens</strong> hier.</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">even</td><td class="px-3 py-2 text-sm">geeft aan dat het kort duurt</td><td class="px-3 py-2 text-sm">Wacht <strong>even</strong>.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">toch</td><td class="px-3 py-2 text-sm">drukt een lichte teleurstelling of aandrang uit</td><td class="px-3 py-2 text-sm">Doe <strong>toch</strong> wat ik zeg.</td></tr>
            </tbody>
          </table>
        </div>
        <p>Je kunt ook <strong>jij</strong> of <strong>jullie</strong> toevoegen voor extra vriendelijkheid: <em>Ga jij maar vast zitten. Lopen jullie maar even mee.</em></p>
      `,
    },
    {
      title: "Ontkenningen in de gebiedende wijs 🚫",
      body: `
        <p>Een verbod of ontkenning maak je met <strong>niet</strong> of <strong>geen</strong>, vaak gevolgd door de infinitief.</p>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>Niet roken!</strong> (officieel)</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>Niet doen!</strong> (stam)</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>Geen grappen maken!</strong></li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>Nooit meer doen!</strong></li>
        </ul>
      `,
    },
  ],
  rulesTable: [
    {
      rule: "Directe gebiedende wijs (jij/jullie) = stam",
      structure: "Gebruik alleen de stam (ik-vorm) zonder onderwerp. Ook met v/f‑ of z/s‑wisseling.",
      example: "Loop! – Kom! – Zit! – Schrijf! – Reis!",
      usage: "Met toegevoegd 'jij/jullie' blijft de stam: 'Loop jij maar.'",
    },
    {
      rule: "Beleefde gebiedende wijs (u) = stam + t + u",
      structure: "Zet de stam in de jij‑vorm (stam+t) en voeg 'u' toe. Bij stam op t geen extra t.",
      example: "Loopt u! – Komt u! – Zit u! – Eet u!",
      usage: "Altijd met 'u', anders klinkt het onbeleefd.",
    },
    {
      rule: "Onregelmatige werkwoorden apart leren",
      structure: "Zijn, hebben, willen hebben afwijkende vormen. Kunnen, zullen, mogen worden nauwelijks gebruikt.",
      example: "Wees! – Weest u! – Heb! – Hebt u! – Wil! – Wilt u!",
      usage: "Voor een beleefd verzoek met 'kunnen' gebruik je: 'Kunt u even...?'",
    },
    {
      rule: "Verzachters en ontkenningen",
      structure: "Voeg 'maar', 'eens', 'even' toe om de toon te verzachten. Ontkenning met 'niet' + infinitief of stam.",
      example: "Kom maar binnen. – Niet roken! – Niet doen!",
      usage: "'Niet' + infinitief is formeler, 'niet' + stam is informeler.",
    },
  ],
  callouts: [
    { type: "remember", label: "Onthoud 1", text: "Direct (jij/jullie) = **stam**: Loop! Kom! Eet! Schrijf! (ook met v/f, z/s)." },
    { type: "remember", label: "Onthoud 2", text: "Beleefd (u) = **stam + t + u**: Loopt u! Komt u! Zit u! (stam op t: geen extra t)." },
    { type: "remember", label: "Onthoud 3", text: "Uitzonderingen: **wees** (zijn), **heb** (hebben), **wil** (willen)." },
    { type: "remember", label: "Onthoud 4", text: "Voorstel: **Laten we** + infinitief. 'Laten we beginnen.'" },
    { type: "remember", label: "Onthoud 5", text: "Verzachters: **maar, eens, even** – 'Kom maar', 'Kijk eens', 'Wacht even'." },
  ],
  commonMistakes: [
    { incorrect: "Loopt u? (met vraagteken)", correct: "Loopt u! (uitroepteken)", explanation: "Vraag vs. bevel. Het leesteken en de toon bepalen het verschil." },
    { incorrect: "U loopt (mededeling)", correct: "Loopt u! (gebiedend)", explanation: "Bij gebiedende wijs staat het werkwoord vooraan." },
    { incorrect: "Wees u (fout beleefd)", correct: "Weest u (van zijn)", explanation: "Beleefde vorm van 'zijn' is weest u." },
    { incorrect: "Niet rook (stam)", correct: "Niet roken (infinitief)", explanation: "Officiële verboden gebruiken de infinitief." },
    { incorrect: "Kun! (als bevel)", correct: "Gebruik 'Doe je best'", explanation: "'Kunnen' heeft geen directe imperatief." },
  ],
  review: [
    "Direct (jij/jullie) = stam (Loop! Kom! Eet!).",
    "Beleefd (u) = stam + t + u (Loopt u! Komt u! Zit u!).",
    "Uitzonderingen: wees (zijn), heb/hebt (hebben), wil/wilt (willen).",
    "Voorstel: Laten we + infinitief.",
    "Verzachters: maar, eens, even.",
    "Ontkenning: Niet + infinitief (Niet roken) of Niet + stam (Niet doen).",
  ],
  qa: [
    {
      question: "Maak een beleefde gebiedende wijs met het werkwoord **nemen**. Gebruik de volledige zin en leg uit waarom deze vorm juist is.",
      answer: "De beleefde vorm is: **Neemt u** nog een koekje. De stam van *nemen* is *neem*, en voor de beleefde gebiedende wijs voeg je er een **t** aan toe en zet je **u** erachter. Zo ontstaat *neemt u*.",
    },
    {
      question: "Waarom is “Wees u stil” niet goed, en hoe moet het wel?",
      answer: "*Wees u stil* is fout omdat bij het werkwoord *zijn* de stam *wees* is. Voor de beleefde vorm plak je daar de t van de stam+t-regel aan: *weest*. Correct: **Weest u stil.**",
    },
    {
      question: "Leg het verschil uit tussen “Komt u?” en “Komt u!”. Hoe herken je het verschil?",
      answer: "In geschreven taal herken je het aan het leesteken: **Komt u?** is een vraag (vraagteken), **Komt u!** is een bevel/verzoek (uitroepteken). In gesproken taal geeft de zinsmelodie het verschil aan.",
    },
    {
      question: "Geef de directe gebiedende wijs van **zijn**, **eten** en **nemen**. Gebruik elk in een korte zin.",
      answer: "Zijn → **Wees** stil! Eten → **Eet** je bord leeg! Nemen → **Neem** een paraplu mee!",
    },
    {
      question: "Je wilt een vriend op een vriendelijke manier aansporen om even te gaan zitten. Gebruik de stam met het woordje **maar**.",
      answer: "**Zit maar** even op de bank. (Of: **Kom maar** zitten.) Het woordje *maar* verzacht de opdracht en maakt er een uitnodiging van.",
    },
    {
      question: "Waarom is “Jullie lopen door” geen gebiedende wijs, en hoe zeg je het als bevel tegen een groep?",
      answer: "“Jullie lopen door” is een mededeling met het onderwerp vooraan. De gebiedende wijs zet het werkwoord vooraan en laat het onderwerp meestal weg. Tegen een groep zeg je: **Loop door!** of met nadruk: **Lopen jullie door!**",
    },
    {
      question: "Zet de volgende vriendelijke instructie om naar een beleefde vorm tegen een onbekende: “Doe het raam even open.”",
      answer: "**Doet u het raam even open, alstublieft.** Hier is *doet* de stam+t van *doen* (stam *doe* → *doet*), gevolgd door *u*.",
    },
  ],
};