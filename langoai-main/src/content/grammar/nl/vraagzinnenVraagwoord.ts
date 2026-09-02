import type { GrammarLesson } from "../../types";

export const vraagzinnenVraagwoord: GrammarLesson = {
  id: "nl-vraagzinnen-vraagwoord-1",
  title: "Vraagzinnen met een Vraagwoord: Wie, Wat, Waar, Wanneer, Waarom, Hoe",
  level: 1,
  topic: "Vraagzinnen (vraagwoord)", // [G] Grammatica
  body: "Leer hoe je open vragen stelt met vraagwoorden. Met duidelijke regels, inversie, werkwoordelijke eindgroep en alle valkuilen.",
  overview:
    "Een vraagwoordvraag is een open vraag die begint met **wie, wat, waar, wanneer, waarom, hoe** of een ander vraagwoord. In deze **supercomplete, glasheldere les** ontdek je de twee hoofdpatronen: het vraagwoord als onderwerp (SVO-volgorde) en het vraagwoord niet als onderwerp (VSO-volgorde). Je leert hoe je hulpwerkwoorden, voltooid deelwoorden en scheidbare werkwoorden correct plaatst, hoe je voorzetsels aan vraagwoorden koppelt (**waarop, waarmee**), en het verschil tussen **welke** en **wat voor**. Met heldere tabellen, tientallen voorbeelden, waarschuwingen voor alle valkuilen en 7 ijzersterke oefenvragen stel jij elke open vraag foutloos.",
  anchorSectionId: "wat",
  exercises: [],
  timeExpressionsLabel: "De belangrijkste vraagwoorden op een rij 🧾",
  timeExpressions: {
    header: "Vraagwoord | Waarnaar vraagt u? | Voorbeeldzin",
    rows: [
      ["**Wie**", "naar een persoon of personen", "**Wie** is jouw leraar?"],
      ["**Wat**", "naar een ding, dier, begrip of handeling", "**Wat** eet je vanavond?"],
      ["**Waar**", "naar een plaats of locatie", "**Waar** is het station?"],
      ["**Wanneer**", "naar een tijdstip of tijdsduur", "**Wanneer** begint de les?"],
      ["**Waarom**", "naar een reden of oorzaak", "**Waarom** ben je te laat?"],
      ["**Hoe**", "naar een manier, toestand of middel", "**Hoe** kom ik bij de bakker?"],
      ["**Welke**", "naar een specifiek exemplaar uit een groep", "**Welke** kleur vind je mooi?"],
      ["**Wat voor (een)**", "naar een soort of eigenschap", "**Wat voor** weer wordt het morgen?"],
      ["**Hoeveel**", "naar een aantal of hoeveelheid", "**Hoeveel** kost dat?"],
      ["**Hoe lang**", "naar tijdsduur of lengte", "**Hoe lang** duurt de film?"],
      ["**Hoe laat**", "naar een kloktijd", "**Hoe laat** vertrekt de trein?"],
      ["**Wiens**", "naar een bezitter (van wie?)", "**Wiens** boek is dit?"],
    ],
  },
  details: [
    {
      title: "Wat is een vraagwoordvraag? 🎯",
      body: `
        <p>Een <strong>vraagwoordvraag</strong> is een open vraag. Je vraagt naar specifieke informatie: een persoon, een ding, een plaats, een tijd, een reden, een manier, een hoeveelheid, enzovoort. Het antwoord is <strong>niet</strong> alleen "ja" of "nee", maar een heel woord, een zinsdeel of een hele zin.</p>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>Wie</strong> heeft dat gedaan? (Antwoord: Jan)</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>Wat</strong> wil je drinken? (Antwoord: Koffie)</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>Waar</strong> woon je? (Antwoord: In Amsterdam)</li>
        </ul>
        <p>In deze les leer je hoe je zulke vragen maakt, welke volgorde de woorden moeten hebben, en waar de valkuilen zitten.</p>
      `,
    },
    {
      title: "De basisregel voor de woordvolgorde 🏗️",
      body: `
        <p>Bij een vraagwoordvraag staat het <strong>vraagwoord altijd helemaal vooraan</strong>. De <strong>persoonsvorm</strong> (het werkwoord dat van tijd verandert) moet daarna meteen op de <strong>tweede plaats</strong> komen. Dit is precies dezelfde inversie als bij ja/nee-vragen, maar nu met het vraagwoord ervoor.</p>
        <p>Er zijn twee hoofdpatronen, afhankelijk van of het vraagwoord zelf het onderwerp is of niet.</p>
      `,
    },
    {
      title: "Patroon 1: Het vraagwoord is niet het onderwerp – VSO-volgorde 🔄",
      body: `
        <p>Als het vraagwoord een ander zinsdeel dan het onderwerp is (bijvoorbeeld lijdend voorwerp, bijwoordelijke bepaling), dan volgt na het vraagwoord de <strong>persoonsvorm</strong>, dan het <strong>onderwerp</strong>, dan de rest van de zin.</p>
        <p><strong>Vraagwoord – persoonsvorm – onderwerp – rest</strong></p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Vraagwoord</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Persoonsvorm</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Onderwerp</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Rest</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Wat</td><td class="px-3 py-2 text-sm">lees</td><td class="px-3 py-2 text-sm">jij</td><td class="px-3 py-2 text-sm">op dit moment?</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Waar</td><td class="px-3 py-2 text-sm">woont</td><td class="px-3 py-2 text-sm">uw zus</td><td class="px-3 py-2 text-sm">?</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Wanneer</td><td class="px-3 py-2 text-sm">begint</td><td class="px-3 py-2 text-sm">de film</td><td class="px-3 py-2 text-sm">?</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Hoe</td><td class="px-3 py-2 text-sm">gaat</td><td class="px-3 py-2 text-sm">het</td><td class="px-3 py-2 text-sm">met u?</td></tr>
            </tbody>
          </table>
        </div>
        <p><span class="pas-op-highlight">⚠️ PAS OP</span> Vergeet de inversie niet. Fout is: *Wat jij leest?* – Correct: **Wat lees jij?** (of **Wat lees je?**).</p>
      `,
    },
    {
      title: "Patroon 2: Het vraagwoord is het onderwerp – SVO-volgorde ✅",
      body: `
        <p>Als het vraagwoord zelf het onderwerp is (vaak bij <strong>wie</strong> of <strong>wat</strong>), dan blijft de gewone SVO-volgorde bestaan. Het vraagwoord staat op de eerste plaats, de persoonsvorm op de tweede. Er is dan géén apart onderwerp.</p>
        <p><strong>Vraagwoord (onderwerp) – persoonsvorm – rest</strong></p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Vraagwoord (onderwerp)</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Persoonsvorm</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Rest</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Wie</td><td class="px-3 py-2 text-sm">heeft</td><td class="px-3 py-2 text-sm">dat gedaan?</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Wat</td><td class="px-3 py-2 text-sm">gebeurt</td><td class="px-3 py-2 text-sm">er?</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Welke</td><td class="px-3 py-2 text-sm">ligt</td><td class="px-3 py-2 text-sm">daar?</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Hoeveel mensen</td><td class="px-3 py-2 text-sm">komen</td><td class="px-3 py-2 text-sm">er?</td></tr>
            </tbody>
          </table>
        </div>
        <p><span class="pas-op-highlight">⚠️ PAS OP</span> Als het vraagwoord onderwerp is, gebruikt u de derde persoon enkelvoud, ook als het antwoord meervoud kan zijn: <em>Wie <strong>heeft</strong> er een vraag?</em> (niet *hebben*).</p>
      `,
    },
    {
      title: "Hulpwerkwoorden en de werkwoordelijke eindgroep 🏗️",
      body: `
        <p>Ook in vraagwoordvragen blijft de regel van de werkwoordelijke eindgroep bestaan. Het hulpwerkwoord staat op de tweede plaats (na het vraagwoord en eventueel het onderwerp), en het hoofdwerkwoord komt <strong>achteraan</strong>.</p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Vraagwoord</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Hulpww</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Onderwerp</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Rest</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Hoofdww</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Wat</td><td class="px-3 py-2 text-sm">heb</td><td class="px-3 py-2 text-sm">jij</td><td class="px-3 py-2 text-sm">gisteren</td><td class="px-3 py-2 text-sm">gedaan?</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Waar</td><td class="px-3 py-2 text-sm">wil</td><td class="px-3 py-2 text-sm">je</td><td class="px-3 py-2 text-sm">vanavond</td><td class="px-3 py-2 text-sm">heen gaan?</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Wie</td><td class="px-3 py-2 text-sm">kan</td><td class="px-3 py-2 text-sm">mij</td><td class="px-3 py-2 text-sm">even</td><td class="px-3 py-2 text-sm">helpen?</td></tr>
            </tbody>
          </table>
        </div>
        <p>Scheidbare werkwoorden: het voorvoegsel komt achteraan.</p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Vraagwoord</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Persoonsvorm</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Onderwerp</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Rest</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Voorvoegsel</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Hoe laat</td><td class="px-3 py-2 text-sm">sta</td><td class="px-3 py-2 text-sm">jij</td><td class="px-3 py-2 text-sm">morgen</td><td class="px-3 py-2 text-sm">op?</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Waar</td><td class="px-3 py-2 text-sm">ruim</td><td class="px-3 py-2 text-sm">je</td><td class="px-3 py-2 text-sm">je spullen</td><td class="px-3 py-2 text-sm">op?</td></tr>
            </tbody>
          </table>
        </div>
      `,
    },
    {
      title: "Vraagwoorden met een voorzetsel – waar+voorzetsel 🔗",
      body: `
        <p>Als het vraagwoord een voorzetsel nodig heeft (bijvoorbeeld <em>op, aan, met, voor, over</em>), dan combineer je het voorzetsel met <strong>waar</strong> tot één woord. Dit is een typisch Nederlands verschijnsel.</p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Voorzetsel + wat?</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Combinatie</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Voorbeeldzin</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">op + wat</td><td class="px-3 py-2 text-sm">waarop</td><td class="px-3 py-2 text-sm">**Waarop** wacht je?</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">aan + wat</td><td class="px-3 py-2 text-sm">waaraan</td><td class="px-3 py-2 text-sm">**Waaraan** denk je?</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">met + wat</td><td class="px-3 py-2 text-sm">waarmee</td><td class="px-3 py-2 text-sm">**Waarmee** schrijf je?</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">voor + wat</td><td class="px-3 py-2 text-sm">waarvoor</td><td class="px-3 py-2 text-sm">**Waarvoor** gebruik je dat?</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">over + wat</td><td class="px-3 py-2 text-sm">waarover</td><td class="px-3 py-2 text-sm">**Waarover** praten jullie?</td></tr>
            </tbody>
          </table>
        </div>
        <p>Je kunt het voorzetsel ook los achteraan in de zin zetten, met <strong>waar</strong> vooraan: <em>Waar wacht je op?</em> Beide volgordes zijn correct. De aan elkaar geschreven vorm is formeler, de gesplitste variant is spreektaal.</p>
        <p><span class="pas-op-highlight">⚠️ PAS OP</span> Bij personen gebruik je <strong>voorzetsel + wie</strong>, niet *waar*. Dus: <em>Met wie ga je om?</em> (persoon), maar <em>Waar schrijf je mee?</em> (ding).</p>
      `,
    },
    {
      title: "Het verschil tussen 'welke' en 'wat voor (een)' 🆚",
      body: `
        <p><strong>Welke</strong> vraagt naar een specifiek exemplaar uit een beperkte, bekende groep. Het antwoord is vaak <em>deze, die, de rode</em>.</p>
        <p><strong>Wat voor (een)</strong> vraagt naar een soort, type of eigenschap zonder een beperkte keuze. Het antwoord is meestal een beschrijving.</p>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>Welke jas</strong> is van jou? (De luisteraar weet welke jassen er zijn.)</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>Wat voor een auto</strong> koop jij? (Ik koop een elektrische auto.)</li>
        </ul>
        <p>Let op de vorm: <strong>welk</strong> (zonder -e) voor een het-woord enkelvoud: <em>Welk boek lees je?</em> <strong>Welke</strong> voor de-woorden en meervoud: <em>Welke stoel is van jou? Welke boeken zijn van jou?</em></p>
        <p>Bij <strong>wat voor</strong> vervalt <em>een</em> bij meervoud of ontelbare woorden: <em>Wat voor boeken lees je?</em> (zonder <em>een</em>).</p>
      `,
    },
  ],
  rulesTable: [
    {
      rule: "Vraagwoord vooraan, persoonsvorm op de tweede plaats",
      structure: "Het vraagwoord staat op de eerste plaats. De **persoonsvorm** volgt direct op de tweede plaats, daarna komt het onderwerp (tenzij het vraagwoord zelf onderwerp is).",
      example: "**Waar woon je?** – **Wat heb jij gedaan?**",
      usage: "Dit is de basisregel voor alle vraagwoordvragen. Vergeet de inversie niet.",
    },
    {
      rule: "Vraagwoord als onderwerp: geen inversie",
      structure: "Als **wie** of **wat** het onderwerp is, blijft de SVO-volgorde: vraagwoord – persoonsvorm – rest.",
      example: "**Wie heeft dat gedaan?** – **Wat is er gebeurd?**",
      usage: "Let op: de persoonsvorm staat in het enkelvoud, ook als het antwoord meervoud is.",
    },
    {
      rule: "Werkwoordelijke eindgroep blijft intact",
      structure: "Het hulpwerkwoord staat op de tweede plaats; het hoofdwerkwoord (infinitief, voltooid deelwoord) komt achteraan.",
      example: "**Wat heb je gisteren gedaan?** – **Waar wil je heen gaan?**",
      usage: "Scheidbare werkwoorden: voorvoegsel achteraan. *Hoe laat sta je op?*",
    },
    {
      rule: "Voorzetsels: waar+voorzetsel of gesplitst",
      structure: "Combineer een voorzetsel met **waar** tot één woord (**waarop, waarmee**), of splits: **Waar ... op?** Voor personen gebruik je **voorzetsel + wie**.",
      example: "**Waarop wacht je?** / **Waar wacht je op?** – **Met wie heb je gesproken?**",
      usage: "Aan elkaar is formeler; gesplitst is spreektaal. Gebruik nooit *waar* voor personen.",
    },
    {
      rule: "Welk/welke vs. wat voor (een)",
      structure: "**Welk(e)** vraagt naar een specifiek exemplaar uit een bekende groep. **Wat voor (een)** vraagt naar een soort of type.",
      example: "**Welk boek** (het-woord) lees je? – **Wat voor auto** rijd jij?",
      usage: "Bij meervoud of ontelbare woorden vervalt 'een': *Wat voor boeken lees je?*",
    },
  ],
  callouts: [
    { type: "remember", label: "Onthoud 1", text: "Vraagwoord **altijd vooraan**." },
    { type: "remember", label: "Onthoud 2", text: "Vraagwoord ≠ onderwerp? → **inversie** (VSO): *Waar woon je?*" },
    { type: "remember", label: "Onthoud 3", text: "Vraagwoord = onderwerp? → **geen inversie** (SVO): *Wie komt er?*" },
    { type: "remember", label: "Onthoud 4", text: "Hulpwerkwoord op 2, hoofdwerkwoord achteraan. Scheidbaar: voorvoegsel achteraan." },
    { type: "remember", label: "Onthoud 5", text: "Voorzetsel + ding → **waar+voorzetsel** (waarop). Voorzetsel + persoon → **voorzetsel + wie**." },
    { type: "remember", label: "Onthoud 6", text: "**Welk** (het-woord) / **welke** (de-woord/meervoud) kiest uit bekende groep; **wat voor** vraagt naar soort." },
  ],
  commonMistakes: [
    { incorrect: "Wat jij leest?", correct: "Wat lees jij? (of Wat lees je?)", explanation: "Vergeet de inversie niet: persoonsvorm op de tweede plaats, onderwerp daarna." },
    { incorrect: "Waar jij woont?", correct: "Waar woon jij? (of Waar woon je?)", explanation: "Zelfde inversiefout." },
    { incorrect: "Wie hebben dat gedaan? (formeel onjuist)", correct: "Wie heeft dat gedaan?", explanation: "Wie is enkelvoud, dus de persoonsvorm is enkelvoud." },
    { incorrect: "Waarmee heb je gesproken? (als het om een persoon gaat)", correct: "Met wie heb je gesproken?", explanation: "Voor personen gebruik je 'wie', niet 'waar'." },
    { incorrect: "Wat voor een boeken lees je?", correct: "Wat voor boeken lees je?", explanation: "Bij meervoud vervalt 'een'." },
  ],
  review: [
    "Vraagwoord vooraan; persoonsvorm op de tweede plaats.",
    "Vraagwoord als onderwerp → SVO (Wie komt?). Anders → VSO (Waar woon je?).",
    "Hulpwerkwoord op 2, hoofdwerkwoord achteraan (Wat heb je gedaan?).",
    "Scheidbare werkwoorden: voorvoegsel achteraan (Hoe laat sta je op?).",
    "Voorzetsels: waar+voorzetsel voor dingen (waarop), voorzetsel+wie voor personen.",
    "Welk(e) kiest uit bekende groep; wat voor vraagt naar soort.",
  ],
  qa: [
    {
      question: "Waarom is “Wie hebben dat gedaan?” meestal fout, en welke vorm moet je gebruiken?",
      answer: "**Wie** is grammaticaal enkelvoud, dus de persoonsvorm moet enkelvoud zijn: **Wie heeft dat gedaan?** Zelfs als je verwacht dat meerdere personen het hebben gedaan, gebruik je formeel het enkelvoud.",
    },
    {
      question: "Zet de woorden in de juiste volgorde: “je / waar / geweest / bent / ?”",
      answer: "**Waar ben je geweest?** Vraagwoord vooraan, persoonsvorm 'ben' op de tweede plaats, onderwerp 'je' direct daarna, voltooid deelwoord 'geweest' achteraan.",
    },
    {
      question: "Leg het verschil uit tussen 'Welk boek lees je?' en 'Wat voor boek lees je?'.",
      answer: "**Welk boek lees je?** veronderstelt een keuze uit een bekende groep (bijv. een stapeltje op tafel). **Wat voor boek lees je?** vraagt naar het genre of type (bijv. een thriller). 'Welk' is specifiek, 'wat voor' is algemeen beschrijvend.",
    },
    {
      question: "Waarom is 'Waarmee heb je gesproken?' niet goed als het om een persoon gaat? Wat moet je dan zeggen?",
      answer: "**Waarmee** is voor dingen. Voor personen gebruik je **met wie**: *Met wie heb je gesproken?* (met een vriend). *Waarmee* zou betekenen dat je met een apparaat of voorwerp spreekt.",
    },
    {
      question: "Zet de woorden in de juiste volgorde: “hoe laat / op / je / morgen / staat / ?”",
      answer: "**Hoe laat sta je morgen op?** Het scheidbare werkwoord 'opstaan': persoonsvorm 'sta' na het vraagwoord, onderwerp 'je', 'morgen' als tijdsbepaling, voorvoegsel 'op' achteraan.",
    },
    {
      question: "Verbeter de foute zin: 'Waar jij woont?' en leg uit wat er mis is.",
      answer: "De fout is dat de persoonsvorm niet op de tweede plaats staat. Correct is: **Waar woon jij?** (of **Waar woon je?**). Het vraagwoord 'waar' staat vooraan, dan moet de persoonsvorm volgen, dan het onderwerp.",
    },
    {
      question: "Bedenk een vraagzin met het vraagwoord 'hoeveel' als onderwerp. Gebruik het werkwoord 'komen'.",
      answer: "**Hoeveel mensen komen er naar het feest?** Hier is 'hoeveel mensen' het onderwerp (meervoud), dus de persoonsvorm 'komen' staat in het meervoud. Als je 'hoeveel' alleen gebruikt, is het enkelvoud: *Hoeveel komt er?*",
    },
  ],
};