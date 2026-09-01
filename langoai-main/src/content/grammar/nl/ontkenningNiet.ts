import type { GrammarLesson } from "../../types";

export const ontkenningNiet: GrammarLesson = {
  id: "nl-ontkenning-niet-1",
  title: "Ontkenning met 'niet' – Plaats in hoofdzin en bijzin",
  level: 1,
  topic: "Ontkenning (niet)", // [G] Grammatica
  body: "Leer precies waar je het woord 'niet' in een zin zet. Van algemene ontkenning tot specifieke nadruk, in hoofdzin én bijzin.",
  overview:
    "Met **niet** ontken je iets in het Nederlands. In deze **superduidelijke, allesomvattende les** ontdek je stap voor stap de regels voor de plaats van *niet*. Je leert het verschil tussen een neutrale ontkenning (hele zin) en een specifieke ontkenning (één zinsdeel). We oefenen met hoofdzinnen en bijzinnen, en je krijgt te zien hoe *niet* met hulpwerkwoorden, voltooide deelwoorden en scheidbare werkwoorden omgaat. Met heldere tabellen, tientallen voorbeelden, PAS OP‑waarschuwingen en 7 ijzersterke oefenvragen zet jij *niet* voortaan altijd op de juiste plek.",
  anchorSectionId: "wat",
  exercises: [],
  timeExpressionsLabel: "Neutrale plek van 'niet' in één oogopslag 🚫",
  timeExpressions: {
    header: "Zin | Plaats van 'niet' | Regel",
    rows: [
      ["Ik werk.", "Ik werk **niet**.", "Staat direct achter de persoonsvorm als er geen ander zinsdeel is."],
      ["Hij leest het boek.", "Hij leest het boek **niet**.", "Na het lijdend voorwerp."],
      ["Zij heeft het boek gelezen.", "Zij heeft het boek **niet** gelezen.", "Vóór het voltooid deelwoord."],
      ["Ik ruim de kamer op.", "Ik ruim de kamer **niet** op.", "Vóór het scheidbare voorvoegsel."],
      ["...omdat ik slaap.", "...omdat ik **niet** slaap.", "In de bijzin: vóór de werkwoordelijke eindgroep."],
    ],
  },
  details: [
    {
      title: "Wat doet het woordje 'niet'? 🎯",
      body: `
        <p><strong>Niet</strong> gebruik je om iets te <strong>ontkennen</strong>. Je zet het in een zin om te zeggen dat iets <strong>niet waar</strong> is, <strong>niet gebeurt</strong>, of <strong>niet zo is</strong>. Het is het belangrijkste ontkenningswoord in het Nederlands.</p>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">Ik <strong>slaap niet</strong>.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">Hij <strong>komt niet</strong>.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">De soep is <strong>niet warm</strong>.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">We hebben hem <strong>niet gezien</strong>.</li>
        </ul>
        <p>In deze les leer je precies <strong>waar</strong> in de zin je *niet* moet zetten. Die plaats hangt af van: (1) of de zin een hoofdzin of bijzin is, en (2) of je de hele zin wilt ontkennen of juist één specifiek onderdeel.</p>
      `,
    },
    {
      title: "De plaats van 'niet' in de hoofdzin 🧱",
      body: `
        <h3 class="text-lg font-bold mt-4 mb-2">Algemene ontkenning (je ontkent de hele handeling)</h3>
        <p>Als je gewoon zegt dat iets niet gebeurt, zet je *niet* zo ver mogelijk naar achteren, maar <strong>vóór</strong> de werkwoordelijke eindgroep (infinitief, voltooid deelwoord, scheidbaar voorvoegsel) en <strong>vóór</strong> een plaatsbepaling of richting. Alles wat vóór *niet* komt: lijdend voorwerp, tijdsbepaling, manier.</p>
        <p><strong>Onderwerp – persoonsvorm – (lijdend vw) – (tijd) – (manier) – NIET – (plaats/richting) – (overige werkwoorden)</strong></p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Zonder *niet*</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Met *niet* (neutraal)</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Ik werk.</td><td class="px-3 py-2 text-sm">Ik werk <strong>niet</strong>.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Hij leest het boek.</td><td class="px-3 py-2 text-sm">Hij leest het boek <strong>niet</strong>.</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Wij zien hem morgen.</td><td class="px-3 py-2 text-sm">Wij zien hem morgen <strong>niet</strong>.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Zij heeft het boek gelezen.</td><td class="px-3 py-2 text-sm">Zij heeft het boek <strong>niet</strong> gelezen.</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Ik ruim de kamer op.</td><td class="px-3 py-2 text-sm">Ik ruim de kamer <strong>niet</strong> op.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Hij gaat in de stad wonen.</td><td class="px-3 py-2 text-sm">Hij gaat <strong>niet</strong> in de stad wonen.</td></tr>
            </tbody>
          </table>
        </div>
        <p>Je ziet: *niet* staat vlak voor het voltooid deelwoord (*niet gelezen*), voor de infinitief (*niet wonen*), voor het scheidbare voorvoegsel (*niet op*), en vóór de plaatsbepaling (*niet in de stad*).</p>
        
        <h3 class="text-lg font-bold mt-6 mb-2">Specifieke ontkenning (je ontkent één onderdeel met nadruk)</h3>
        <p>Soms wil je één ding benadrukken dat niet zo is. Dan zet je *niet* <strong>direct vóór</strong> dat onderdeel.</p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Wat ontken je?</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Voorbeeld</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">tijdsbepaling</td><td class="px-3 py-2 text-sm">Ik kom <strong>niet morgen</strong>, maar overmorgen.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">plaats</td><td class="px-3 py-2 text-sm">We gaan <strong>niet naar Amsterdam</strong>, maar naar Utrecht.</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">manier</td><td class="px-3 py-2 text-sm">Hij rijdt <strong>niet snel</strong>, maar langzaam.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">bijvoeglijk nw</td><td class="px-3 py-2 text-sm">De soep is <strong>niet lekker</strong>, hij is flauw.</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">lijdend voorwerp</td><td class="px-3 py-2 text-sm">Ik lees <strong>niet het boek</strong>, maar de krant.</td></tr>
            </tbody>
          </table>
        </div>
        <p><span class="pas-op-highlight">⚠️ PAS OP</span> Bij specifieke ontkenning kan *niet* dus veel eerder in de zin staan. Vergelijk: algemeen *Ik lees het boek niet.* (gewoon niet) – specifiek *Ik lees niet het boek, maar de krant.* (nadruk op wat ik wél lees).</p>
      `,
    },
    {
      title: "De plaats van 'niet' in de bijzin 🔄",
      body: `
        <p>In een bijzin (na voegwoorden als *omdat*, *dat*, *als*, *of*, *toen*, *terwijl*) staan alle werkwoorden <strong>achteraan</strong>. De regel voor *niet* blijft hetzelfde: *niet* komt vóór de werkwoordelijke eindgroep en vóór plaatsbepalingen, en na lijdend voorwerp en tijdsbepalingen.</p>
        <p><strong>Voegwoord – onderwerp – (lijdend vw) – (tijd) – (manier) – NIET – (plaats/richting) – (werkwoorden)</strong></p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Hoofdzin</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Bijzin met *omdat*</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Ik slaap niet.</td><td class="px-3 py-2 text-sm">...omdat ik <strong>niet</strong> slaap.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Hij leest het boek niet.</td><td class="px-3 py-2 text-sm">...omdat hij het boek <strong>niet</strong> leest.</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Zij heeft hem niet gezien.</td><td class="px-3 py-2 text-sm">...omdat zij hem <strong>niet</strong> heeft gezien.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Wij ruimen de kamer niet op.</td><td class="px-3 py-2 text-sm">...omdat wij de kamer <strong>niet</strong> opruimen.</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Hij gaat niet naar school.</td><td class="px-3 py-2 text-sm">...omdat hij <strong>niet</strong> naar school gaat.</td></tr>
            </tbody>
          </table>
        </div>
        <p>Ook in de bijzin kun je specifiek ontkennen: *...omdat ik niet gisteren maar vandaag ben gekomen.*</p>
      `,
    },
    {
      title: "Belangrijke extra regels ⚠️",
      body: `
        <p><strong>Niet vs. geen:</strong> <strong>Niet</strong> ontkent werkwoorden, bijvoeglijke naamwoorden, bijwoorden en hele zinnen. <strong>Geen</strong> ontkent een zelfstandig naamwoord dat onbepaald is (zonder lidwoord of met *een*). <em>Ik heb geen boek.</em> / <em>Ik heb het boek niet.</em></p>
        <p><strong>Meerdere werkwoorden in de bijzin:</strong> <em>Niet</em> komt vóór alle werkwoorden: <em>...omdat hij het boek niet heeft kunnen lezen.</em></p>
        <p><strong>Plaats en richting:</strong> In de neutrale volgorde staat *niet* vóór een plaatsbepaling of richting: <em>Ik ga morgen niet naar school.</em></p>
      `,
    },
  ],
  rulesTable: [
    {
      rule: "Neutrale ontkenning in de hoofdzin",
      structure: "Zet **niet** na het lijdend voorwerp en tijdsbepaling, maar vóór plaats/richting en vóór de werkwoordelijke eindgroep.",
      example: "Ik heb hem gisteren **niet** in het park gezien.",
      usage: "Dit is de standaardplaats voor een algemene ontkenning.",
    },
    {
      rule: "Specifieke ontkenning in de hoofdzin",
      structure: "Zet **niet** direct vóór het zinsdeel dat je wilt ontkennen.",
      example: "Ik heb **niet hem** gezien, maar haar.",
      usage: "Gebruik deze nadrukkelijke vorm alleen als je een contrast wilt aangeven.",
    },
    {
      rule: "Neutrale ontkenning in de bijzin",
      structure: "Zet **niet** vóór de werkwoordelijke eindgroep, na het lijdend voorwerp en tijdsbepalingen.",
      example: "...omdat ik hem gisteren **niet** heb gezien.",
      usage: "In de bijzin staan alle werkwoorden achteraan; *niet* staat ervoor.",
    },
    {
      rule: "Specifieke ontkenning in de bijzin",
      structure: "Zet **niet** vóór het zinsdeel dat je wilt ontkennen, ook in de bijzin.",
      example: "...omdat ik **niet gisteren** maar vandaag ben gekomen.",
      usage: "De rest van de bijzinvolgorde blijft verder intact.",
    },
    {
      rule: "Niet vs. geen",
      structure: "Gebruik **niet** om werkwoorden, bijvoeglijke naamwoorden en bijwoorden te ontkennen. Gebruik **geen** om een onbepaald zelfstandig naamwoord te ontkennen.",
      example: "Ik heb **geen** geld. – Dat is **niet** mijn probleem.",
      usage: "Zeg nooit 'Ik heb niet een boek' als je gewoon 'geen boek' bedoelt.",
    },
  ],
  callouts: [
    { type: "remember", label: "Onthoud 1", text: "Neutraal: **niet** na lijdend voorwerp en tijd, vóór plaats en werkwoorden." },
    { type: "remember", label: "Onthoud 2", text: "Specifiek: **niet** direct vóór het ontkende zinsdeel." },
    { type: "remember", label: "Onthoud 3", text: "Bijzin: **niet** vóór de werkwoorden aan het eind." },
    { type: "remember", label: "Onthoud 4", text: "**Geen** ontkent een zelfstandig naamwoord; **niet** ontkent de rest." },
  ],
  commonMistakes: [
    { incorrect: "Ik heb niet het boek gelezen.", correct: "Ik heb het boek niet gelezen.", explanation: "Algemene ontkenning: *niet* ná lijdend voorwerp." },
    { incorrect: "...omdat ik het boek heb niet gelezen.", correct: "...omdat ik het boek niet heb gelezen.", explanation: "In bijzin: *niet* vóór de werkwoorden." },
    { incorrect: "Ik ruim niet de kamer op.", correct: "Ik ruim de kamer niet op.", explanation: "Lijdend voorwerp vóór *niet*, tenzij specifieke nadruk." },
    { incorrect: "Ik heb niet een boek.", correct: "Ik heb geen boek.", explanation: "Onbepaald zelfstandig naamwoord → *geen*." },
  ],
  review: [
    "Hoofdzin neutraal: *niet* na lijdend voorwerp en tijd, vóór plaats/richting en werkwoorden.",
    "Hoofdzin specifiek: *niet* vóór het benadrukte zinsdeel.",
    "Bijzin neutraal: *niet* vóór de werkwoorden aan het eind.",
    "Bijzin specifiek: *niet* vóór het benadrukte zinsdeel.",
    "Scheidbare werkwoorden: hoofdzin *niet* vóór het losse voorvoegsel; bijzin *niet* vóór het hele werkwoord.",
  ],
  qa: [
    {
      question: "Wat is het verschil in plaatsing van 'niet' in de hoofdzin en in de bijzin? Leg uit met een voorbeeld.",
      answer: "In de hoofdzin staat *niet* later in de zin, vóór de werkwoordelijke eindgroep. In de bijzin staan alle werkwoorden achteraan en staat *niet* vóór die hele groep. Bijvoorbeeld: *Ik heb het boek niet gelezen.* (hoofdzin) vs. *...omdat ik het boek niet heb gelezen.* (bijzin).",
    },
    {
      question: "Herschrijf de zin 'Ik zie hem morgen op het station' met een neutrale ontkenning.",
      answer: "**Ik zie hem morgen niet op het station.** Het lijdend voorwerp *hem* en de tijd *morgen* blijven vóór *niet*; de plaats *op het station* staat na *niet*.",
    },
    {
      question: "Wanneer zet je 'niet' direct vóór een zelfstandig naamwoord? En waarom is 'Ik heb niet boek' fout?",
      answer: "Alleen bij specifieke nadruk, zoals *Ik heb niet hét boek gelezen, maar de krant.* 'Ik heb niet boek' is fout omdat *boek* onbepaald is; dan gebruik je **geen**: *Ik heb geen boek.*",
    },
    {
      question: "Maak van de hoofdzin 'Wij ruimen de kamer op' een bijzin met 'omdat' en een ontkenning. Leg de plaats van 'niet' uit.",
      answer: "**...omdat wij de kamer niet opruimen.** In de bijzin wordt *opruimen* één woord achteraan, en *niet* staat vóór dat hele werkwoord. Het lijdend voorwerp *de kamer* blijft vóór *niet*.",
    },
    {
      question: "Corrigeer de fout: '...omdat ik het boek heb niet gelezen.'",
      answer: "Juist is: **...omdat ik het boek niet heb gelezen.** In een bijzin moeten de werkwoorden (*heb* en *gelezen*) achteraan, en *niet* ervoor.",
    },
    {
      question: "Leg uit waarom 'Ik heb niet gisteren maar vandaag gebeld' correct is, en wat het verschil is met 'Ik heb gisteren niet gebeld'.",
      answer: "De eerste is een specifieke ontkenning van de tijd (niet gisteren, maar vandaag). De tweede is een algemene ontkenning van het bellen (gisteren was er geen telefoontje). De plaats van *niet* verandert de nadruk.",
    },
    {
      question: "Wat is het verschil tussen 'De soep is niet warm' en 'De soep is niet wárm, maar héét'?",
      answer: "De eerste is een algemene ontkenning van de eigenschap (de soep is koud of lauw). De tweede is een specifieke ontkenning met nadruk op 'warm', gevolgd door een contrast met 'heet'. De plaats van *niet* is hetzelfde, maar de klemtoon en context veranderen de nuance.",
    },
  ],
};