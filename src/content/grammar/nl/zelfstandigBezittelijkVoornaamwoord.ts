import type { GrammarLesson } from "../../types";

export const zelfstandigBezittelijkVoornaamwoord: GrammarLesson = {
  id: "nl-zelfstandigbezittelijk-1",
  title: "Zelfstandig Bezittelijk Voornaamwoord: de mijne, de jouwe, het onze...",
  level: 2,
  topic: "Bezittelijk voornaamwoord (zelfstandig)", // [G] Grammatica
  body: "Leer hoe je bezit aangeeft zonder het zelfstandig naamwoord te herhalen. Van 'de mijne' en 'het jouwe' tot de informele 'die van mij'.",
  overview:
    "Een bezittelijk voornaamwoord geeft aan van wie iets is. Maar als je het zelfstandig naamwoord niet wilt herhalen, gebruik je een **zelfstandig bezittelijk voornaamwoord**: *de mijne*, *de jouwe*, *het zijne*, *het onze*. In deze **supercomplete, heldere les** leer je alle vormen, hoe je ze kiest op basis van het geslacht van het weggelaten woord, en wat de informele alternatieven zijn (*die van mij*). Je krijgt een uitgebreide tabel, PAS OP‑waarschuwingen en 7 ijzersterke oefenvragen. Zo gebruik jij de zelfstandige bezitsvormen voortaan foutloos.",
  anchorSectionId: "wat",
  exercises: [],
  timeExpressionsLabel: "Formeel en informeel overzicht 📊",
  timeExpressions: {
    header: "Persoon | De-woord (de ...) | Het-woord (het ...) | Informeel de-woord | Informeel het-woord",
    rows: [
      ["ik", "de mijne", "het mijne", "die van mij", "dat van mij"],
      ["jij", "de jouwe", "het jouwe", "die van jou", "dat van jou"],
      ["u", "de uwe", "het uwe", "die van u", "dat van u"],
      ["hij", "de zijne", "het zijne", "die van hem", "dat van hem"],
      ["zij (ev)", "de hare", "het hare", "die van haar", "dat van haar"],
      ["het", "de zijne", "het zijne", "die van hem/dat?", "dat van hem/het?"],
      ["wij", "de onze", "het onze", "die van ons", "dat van ons"],
      ["jullie", "—", "—", "die van jullie", "dat van jullie"],
      ["zij (mv)", "—", "—", "die van hen/hun", "dat van hen/hun"],
    ],
  },
  details: [
    {
      title: "Wat is een zelfstandig bezittelijk voornaamwoord? 🎯",
      body: `
        <p>Een bezittelijk voornaamwoord geeft aan <strong>van wie</strong> iets is. Als je het zelfstandig naamwoord niet herhaalt, gebruik je een <strong>zelfstandig bezittelijk voornaamwoord</strong>. Dat woord staat dan in plaats van het zelfstandig naamwoord.</p>
        <p>Vergelijk:</p>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">Dit is <strong>mijn boek</strong>. (gewoon bezittelijk voornaamwoord)</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">Dat boek is <strong>het mijne</strong>. (zelfstandig bezittelijk voornaamwoord)</li>
        </ul>
        <p>Het zelfstandig bezittelijk voornaamwoord heeft een <strong>lidwoord</strong> (de of het) en een <strong>uitgang -e</strong>, behalve bij 'jullie' en 'hun', die geen eigen vorm hebben.</p>
      `,
    },
    {
      title: "De vormen – een totaaloverzicht 📊",
      body: `
        <p>De zelfstandige bezittelijke voornaamwoorden worden gevormd door <strong>de</strong> of <strong>het</strong> + de stam van het bezittelijk voornaamwoord + <strong>-e</strong>. Welk lidwoord je kiest, hangt af van het geslacht van het weggelaten zelfstandig naamwoord.</p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse text-xs sm:text-sm">
            <thead><tr class="!bg-indigo-600 text-white"><th class="px-2 py-1.5 text-left">Persoon</th><th class="px-2 py-1.5 text-left">Bezittelijk vnw</th><th class="px-2 py-1.5 text-left">De-woord (de ...)</th><th class="px-2 py-1.5 text-left">Het-woord (het ...)</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-2 py-1.5">ik</td><td class="px-2 py-1.5">mijn</td><td class="px-2 py-1.5"><strong>de mijne</strong></td><td class="px-2 py-1.5"><strong>het mijne</strong></td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-2 py-1.5">jij</td><td class="px-2 py-1.5">jouw</td><td class="px-2 py-1.5"><strong>de jouwe</strong></td><td class="px-2 py-1.5"><strong>het jouwe</strong></td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-2 py-1.5">u</td><td class="px-2 py-1.5">uw</td><td class="px-2 py-1.5"><strong>de uwe</strong></td><td class="px-2 py-1.5"><strong>het uwe</strong></td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-2 py-1.5">hij</td><td class="px-2 py-1.5">zijn</td><td class="px-2 py-1.5"><strong>de zijne</strong></td><td class="px-2 py-1.5"><strong>het zijne</strong></td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-2 py-1.5">zij (ev)</td><td class="px-2 py-1.5">haar</td><td class="px-2 py-1.5"><strong>de hare</strong></td><td class="px-2 py-1.5"><strong>het hare</strong></td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-2 py-1.5">het</td><td class="px-2 py-1.5">zijn</td><td class="px-2 py-1.5"><strong>de zijne</strong></td><td class="px-2 py-1.5"><strong>het zijne</strong></td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-2 py-1.5">wij</td><td class="px-2 py-1.5">ons/onze</td><td class="px-2 py-1.5"><strong>de onze</strong></td><td class="px-2 py-1.5"><strong>het onze</strong></td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-2 py-1.5">jullie</td><td class="px-2 py-1.5">jullie</td><td class="px-2 py-1.5">—</td><td class="px-2 py-1.5">—</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-2 py-1.5">zij (mv)</td><td class="px-2 py-1.5">hun</td><td class="px-2 py-1.5">—</td><td class="px-2 py-1.5">—</td></tr>
            </tbody>
          </table>
        </div>
        <p><span class="pas-op-highlight">⚠️ PAS OP</span> Voor <strong>jullie</strong> en <strong>hun</strong> bestaat er geen klassiek zelfstandig bezittelijk voornaamwoord op -e. Je gebruikt dan een omschrijving met <strong>die van jullie / die van hen/hun</strong>.</p>
      `,
    },
    {
      title: "Wanneer gebruik je de mijne, de jouwe, enz.? 🧐",
      body: `
        <p>Je gebruikt de zelfstandige vorm om te verwijzen naar een zelfstandig naamwoord dat al in de context bekend is. Het lidwoord (de/het) hangt af van het <strong>geslacht</strong> van dat weggelaten zelfstandig naamwoord.</p>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">Mijn auto is rood. <strong>De jouwe</strong> is blauw. (auto = de-woord → de jouwe)</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">Mijn huis is klein. <strong>Het jouwe</strong> is groot. (huis = het-woord → het jouwe)</li>
        </ul>
        <p>Ook predicatief (na een koppelwerkwoord) komt de zelfstandige vorm vaak voor: <em>Die pen is <strong>de mijne</strong>. Dat boek is <strong>het zijne</strong>.</em></p>
      `,
    },
    {
      title: "De informelere vormen – 'die van mij' e.d. 🗣️",
      body: `
        <p>In de spreektaal gebruik je vaak <strong>die van mij, die van jou, dat van mij, dat van jou</strong>. Dat is volkomen acceptabel in gesprekken en vaak natuurlijker dan de formele varianten.</p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse text-xs sm:text-sm">
            <thead><tr class="!bg-indigo-600 text-white"><th class="px-2 py-1.5 text-left">Persoon</th><th class="px-2 py-1.5 text-left">Formeel de-woord</th><th class="px-2 py-1.5 text-left">Informeel de-woord</th><th class="px-2 py-1.5 text-left">Formeel het-woord</th><th class="px-2 py-1.5 text-left">Informeel het-woord</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-2 py-1.5">ik</td><td class="px-2 py-1.5">de mijne</td><td class="px-2 py-1.5">die van mij</td><td class="px-2 py-1.5">het mijne</td><td class="px-2 py-1.5">dat van mij</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-2 py-1.5">jij</td><td class="px-2 py-1.5">de jouwe</td><td class="px-2 py-1.5">die van jou</td><td class="px-2 py-1.5">het jouwe</td><td class="px-2 py-1.5">dat van jou</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-2 py-1.5">hij</td><td class="px-2 py-1.5">de zijne</td><td class="px-2 py-1.5">die van hem</td><td class="px-2 py-1.5">het zijne</td><td class="px-2 py-1.5">dat van hem</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-2 py-1.5">zij (ev)</td><td class="px-2 py-1.5">de hare</td><td class="px-2 py-1.5">die van haar</td><td class="px-2 py-1.5">het hare</td><td class="px-2 py-1.5">dat van haar</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-2 py-1.5">wij</td><td class="px-2 py-1.5">de onze</td><td class="px-2 py-1.5">die van ons</td><td class="px-2 py-1.5">het onze</td><td class="px-2 py-1.5">dat van ons</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-2 py-1.5">jullie</td><td class="px-2 py-1.5">—</td><td class="px-2 py-1.5">die van jullie</td><td class="px-2 py-1.5">—</td><td class="px-2 py-1.5">dat van jullie</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-2 py-1.5">zij (mv)</td><td class="px-2 py-1.5">—</td><td class="px-2 py-1.5">die van hen/hun</td><td class="px-2 py-1.5">—</td><td class="px-2 py-1.5">dat van hen/hun</td></tr>
            </tbody>
          </table>
        </div>
        <p>Voor <strong>jullie</strong> en <strong>hun</strong> zijn de omschrijvingen met *die van* en *dat van* de enige gangbare vormen.</p>
      `,
    },
  ],
  rulesTable: [
    {
      rule: "Vorming zelfstandig bezittelijk voornaamwoord",
      structure: "Zet **de** of **het** (afhankelijk van het weggelaten znw) + stam van het bezittelijk voornaamwoord + **-e**.",
      example: "de mijne, de jouwe, het zijne, de onze",
      usage: "Uitzondering: jullie en hun hebben geen eigen vorm, gebruik 'die van jullie/hun'.",
    },
    {
      rule: "Geslacht van het weggelaten woord bepaalt lidwoord",
      structure: "Verwijst de zelfstandige vorm naar een <strong>de-woord</strong>? Gebruik dan **de** (de mijne). Naar een <strong>het-woord</strong>? Gebruik **het** (het mijne).",
      example: "De fiets is de mijne. – Het boek is het mijne.",
      usage: "Bij twijfel over het geslacht, gebruik de informele omschrijving: die van mij, dat van mij.",
    },
    {
      rule: "Nooit een zelfstandig naamwoord ná de zelfstandige vorm",
      structure: "De zelfstandige vorm **vervangt** het zelfstandig naamwoord. Je kunt dus niet zeggen *de mijne fiets*.",
      example: "Juist: mijn fiets / de mijne. Fout: de mijne fiets.",
      usage: "Gebruik het gewone bezittelijk voornaamwoord als het znw wél genoemd wordt.",
    },
    {
      rule: "Informele alternatieven met 'die van / dat van'",
      structure: "In spreektaal kun je altijd **die van** (de-woord) of **dat van** (het-woord) + persoon gebruiken.",
      example: "die van mij, dat van jou, die van ons",
      usage: "Deze vormen zijn verplicht voor jullie en hun.",
    },
  ],
  callouts: [
    { type: "remember", label: "Onthoud 1", text: "Zelfstandig bezittelijk vnw = **de/het + bezitstam + -e** (de mijne, het jouwe)." },
    { type: "remember", label: "Onthoud 2", text: "Het lidwoord volgt het weggelaten znw: **de** voor de-woorden, **het** voor het-woorden." },
    { type: "remember", label: "Onthoud 3", text: "Voor **jullie/hun** altijd: **die van jullie/hun**, **dat van jullie/hun**." },
    { type: "remember", label: "Onthoud 4", text: "Informeel mag je altijd **die van mij**, **dat van jou** gebruiken." },
    { type: "remember", label: "Onthoud 5", text: "Nooit combineren met een zelfstandig naamwoord: niet *de mijne auto*." },
  ],
  commonMistakes: [
    { incorrect: "Dat boek is mijne.", correct: "Dat boek is het mijne.", explanation: "Zelfstandig bezittelijk voornaamwoord vereist een lidwoord: het mijne." },
    { incorrect: "De jouwe auto is rood.", correct: "Jouw auto is rood. / De jouwe is rood.", explanation: "Gebruik óf het bezittelijk vnw + znw, óf de zelfstandige vorm zonder znw." },
    { incorrect: "Dat is de hunne.", correct: "Dat is die van hen/hun.", explanation: "Hun heeft geen zelfstandige vorm op -e; gebruik 'die van hen/hun'." },
    { incorrect: "Het onze huis.", correct: "Ons huis / Het onze (als huis al genoemd is).", explanation: "Niet combineren met een zelfstandig naamwoord." },
    { incorrect: "Dit zijn de mijnes.", correct: "Dit zijn de mijne.", explanation: "De zelfstandige vorm blijft enkelvoudig; het meervoud blijft 'de mijne'." },
  ],
  review: [
    "Zelfstandig bezittelijk vnw = de/het + bezitstam + -e (de mijne, de jouwe, de uwe, de zijne, de hare, de onze, het mijne, het jouwe, het uwe, het zijne, het hare, het onze).",
    "Voor jullie/hun: die van jullie/hun, dat van jullie/hun.",
    "Het lidwoord hangt af van het weggelaten zelfstandig naamwoord (de/het).",
    "In spreektaal: die van mij, dat van jou, etc.",
    "Nooit tegelijk een zelfstandig naamwoord en een zelfstandig bezittelijk voornaamwoord.",
    "De uitgang -e blijft, ook in het meervoud.",
  ],
  qa: [
    {
      question: "Waarom is “Dat is mijne boek” fout? Verbeter de zin op twee manieren.",
      answer: "De zin is fout omdat **mijne** een zelfstandig bezittelijk voornaamwoord is en dus het zelfstandig naamwoord **vervangt**. Je kunt niet beide hebben. Correcte mogelijkheden: **Dat is mijn boek.** (bezittelijk vnw + znw) of **Dat boek is het mijne.** (zelfstandig bezittelijk vnw).",
    },
    {
      question: "Vul het juiste zelfstandig bezittelijk voornaamwoord in: “Mijn pen is leeg. Mag ik ___ gebruiken?” (pen is een de-woord)",
      answer: "**de jouwe**. *Pen* is een de-woord, dus het is *de jouwe*. Informeel mag ook *die van jou*.",
    },
    {
      question: "Waarom is “Dat is de hunne” niet standaard in het hedendaags Nederlands? Hoe zeg je het correct?",
      answer: "**Hun** heeft geen eigen zelfstandig bezittelijk voornaamwoord op -e. De correcte vorm is **die van hen/hun** of **dat van hen/hun**, afhankelijk van het geslacht. *De hunne* is ouderwets en wordt vermeden.",
    },
    {
      question: "Kies tussen “de onze” en “het onze” in de volgende zin: “Jullie huis is mooi, maar ___ is groter.” Leg uit.",
      answer: "**het onze**. *Huis* is een het-woord, dus de zelfstandige vorm krijgt **het**: het onze.",
    },
    {
      question: "Waarom mag je “Dat boek is de mijne” niet zeggen als je naar een het-woord verwijst?",
      answer: "Omdat *boek* een het-woord is, moet het lidwoord bij de zelfstandige vorm **het** zijn: **het mijne**. *De mijne* hoort bij een de-woord.",
    },
    {
      question: "Geef een alternatieve, informele manier om “De jouwe is veel leuker” te zeggen, en leg uit wanneer die vorm de voorkeur heeft.",
      answer: "**Die van jou is veel leuker.** Deze vorm is gebruikelijker in de spreektaal en klinkt minder formeel dan *de jouwe*.",
    },
    {
      question: "Corrigeer de fout: “Ik heb mijn boeken bij me, maar jij hebt jouwe niet bij je.”",
      answer: "**...maar jij hebt de jouwe niet bij je.** Na het werkwoord *hebben* moet het zelfstandig bezittelijk voornaamwoord met lidwoord: **de jouwe**. *Jouwe* zonder lidwoord kan niet zelfstandig.",
    },
  ],
};