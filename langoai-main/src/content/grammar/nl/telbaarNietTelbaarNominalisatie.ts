import type { GrammarLesson } from "../../types";

export const telbaarNietTelbaarNominalisatie: GrammarLesson = {
  id: "nl-telbaar-niet-telbaar-nominalisatie-1",
  title: "Telbaar & Niet‑telbaar en Nominalisatie: meel, geld, het mooie, het lopen",
  level: 2,
  topic: "Telbaar en niet‑telbaar / Nominalisatie", // [G] Grammatica
  body: "Leer het verschil tussen telbare en niet‑telbare zelfstandige naamwoorden, en hoe je van werkwoorden en bijvoeglijke naamwoorden zelfstandige naamwoorden maakt met 'het'.",
  overview:
    "In het Nederlands is het belangrijk om te weten of een zelfstandig naamwoord **telbaar** (boek, tafel) of **niet‑telbaar** (water, geld) is. Dit heeft gevolgen voor lidwoorden, meervoud en ontkenningen. Daarnaast kun je van werkwoorden en bijvoeglijke naamwoorden een zelfstandig naamwoord maken door er **het** voor te zetten: **het lopen**, **het mooie**. In deze **supercomplete, heldere les** leer je de kenmerken van beide soorten, hoe je niet‑telbare woorden correct gebruikt, en hoe nominalisatie werkt. Met een overzichtelijke tabel, PAS OP‑waarschuwingen en 7 ijzersterke oefenvragen gebruik jij voortaan telbare en niet‑telbare woorden foutloos.",
  anchorSectionId: "belang",
  exercises: [],
  timeExpressionsLabel: "Telbaar, niet‑telbaar en nominalisatie 📊",
  timeExpressions: {
    header: "Soort | Voorbeeld | Meervoud? | Met 'een'? | Lidwoord",
    rows: [
      ["**Telbaar**", "boek, tafel, appel", "ja (boeken)", "ja (een boek)", "de / het"],
      ["**Niet‑telbaar** (stof)", "water, meel, goud", "nee", "nee (maar: een glas water)", "het (meestal)"],
      ["**Niet‑telbaar** (abstract)", "geld, geluk, tijd", "nee", "nee", "het (meestal)"],
      ["**Nominalisatie** (werkwoord)", "het lopen", "nee", "nee", "het"],
      ["**Nominalisatie** (bijv. nw.)", "het mooie", "nee", "nee", "het"],
    ],
  },
  details: [
    {
      title: "Waarom dit onderwerp belangrijk is 🎯",
      body: `
        <p>In het Nederlands maakt het uit of je een zelfstandig naamwoord kunt tellen of niet. Dit verschil bepaalt of je <em>een</em> kunt gebruiken, of er een meervoud is, en hoe je ontkenningen maakt. Ook kun je van werkwoorden en bijvoeglijke naamwoorden zelfstandige naamwoorden maken door er <strong>het</strong> voor te zetten – dat heet <strong>nominalisatie</strong>. In deze les leer je de regels voor beide.</p>
      `,
    },
    {
      title: "Telbare zelfstandige naamwoorden 🔢",
      body: `
        <p>Telbare zelfstandige naamwoorden kun je tellen: één, twee, drie... Ze hebben een meervoud en je kunt er <strong>een</strong> voor zetten.</p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Kenmerk</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Voorbeeld</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Je kunt <strong>een</strong> ervoor zetten.</td><td class="px-3 py-2 text-sm">een boek, een tafel</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Er is een <strong>meervoud</strong>.</td><td class="px-3 py-2 text-sm">boeken, tafels, appels</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Je kunt er een <strong>telwoord</strong> voor zetten.</td><td class="px-3 py-2 text-sm">twee boeken, drie appels</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Ontkenning met <strong>geen</strong>.</td><td class="px-3 py-2 text-sm">Ik heb geen boek.</td></tr>
            </tbody>
          </table>
        </div>
        <p>Voorbeelden: de stoel, het huis, de kat, de dag.</p>
      `,
    },
    {
      title: "Niet‑telbare zelfstandige naamwoorden 🌊",
      body: `
        <p>Niet‑telbare zelfstandige naamwoorden kun je niet tellen. Het zijn vaak stoffen, materialen, abstracte begrippen of verzamelnamen. Je kunt er geen getal voor zetten, ze hebben meestal geen meervoud, en je gebruikt <strong>geen</strong> ‘een’ (tenzij met een maataanduiding).</p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Kenmerk</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Voorbeeld</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Je kunt <strong>geen</strong> getal ervoor zetten.</td><td class="px-3 py-2 text-sm">❌ twee meel, ❌ drie water</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Er is <strong>geen</strong> meervoud (of met andere betekenis).</td><td class="px-3 py-2 text-sm">❌ melken, ❌ gelden (geld als betaalmiddel)</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Je gebruikt <strong>veel</strong>, <strong>weinig</strong>, <strong>wat</strong>, <strong>een beetje</strong>.</td><td class="px-3 py-2 text-sm">veel water, weinig meel, wat melk</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Ontkenning met <strong>geen</strong>.</td><td class="px-3 py-2 text-sm">Ik heb geen geld.</td></tr>
            </tbody>
          </table>
        </div>
        <h3 class="text-lg font-bold mt-4 mb-2">Categorieën niet‑telbare woorden</h3>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">🧪 Stoffen en materialen: water, melk, meel, suiker, goud, hout.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">💰 Abstracte begrippen: geld, tijd, geluk, liefde, informatie.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">🌾 Verzamelnamen: fruit, meubilair, bagage, bestek.</li>
        </ul>
        <p><span class="pas-op-highlight">⚠️ PAS OP</span> Sommige woorden kunnen telbaar én niet‑telbaar zijn: <em>Ik drink koffie</em> (niet‑telbaar) vs. <em>Twee koffie alstublieft</em> (kopjes, dus telbaar). Of: <em>geen zin</em> (niet‑telbaar) vs. <em>zinnen in een tekst</em> (telbaar).</p>
        <p>Om een niet‑telbaar woord telbaar te maken, gebruik je een maataanduiding: <strong>een glas water</strong>, <strong>twee kilo meel</strong>. Het werkwoord bij een niet‑telbaar onderwerp staat in het enkelvoud: <em>Het meel is op.</em></p>
      `,
    },
    {
      title: "Nominalisatie – van werkwoord of bijvoeglijk naamwoord naar zelfstandig naamwoord 🧠",
      body: `
        <p><strong>Nominalisatie</strong> betekent dat je van een ander woordsoort een zelfstandig naamwoord maakt. In het Nederlands gebruik je daarvoor <strong>het</strong>.</p>
        <h3 class="text-lg font-bold mt-4 mb-2">Werkwoorden: het + infinitief</h3>
        <p>Zet <strong>het</strong> voor het hele werkwoord om de handeling of activiteit aan te duiden.</p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Werkwoord</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Nominalisatie</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Betekenis</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">lopen</td><td class="px-3 py-2 text-sm"><strong>het lopen</strong></td><td class="px-3 py-2 text-sm">de activiteit van het lopen</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">zwemmen</td><td class="px-3 py-2 text-sm"><strong>het zwemmen</strong></td><td class="px-3 py-2 text-sm">de sport of activiteit</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">wachten</td><td class="px-3 py-2 text-sm"><strong>het wachten</strong></td><td class="px-3 py-2 text-sm">de toestand van wachten</td></tr>
            </tbody>
          </table>
        </div>
        <p>Voorbeeldzin: <em>Het lopen is gezond.</em></p>
        <h3 class="text-lg font-bold mt-6 mb-2">Bijvoeglijke naamwoorden: het + bijv. nw. + e</h3>
        <p>Zet <strong>het</strong> voor een bijvoeglijk naamwoord en voeg een <strong>-e</strong> toe om de eigenschap als abstract begrip uit te drukken.</p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Bijv. nw.</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Nominalisatie</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Betekenis</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">mooi</td><td class="px-3 py-2 text-sm"><strong>het mooie</strong></td><td class="px-3 py-2 text-sm">dat wat mooi is</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">goede</td><td class="px-3 py-2 text-sm"><strong>het goede</strong></td><td class="px-3 py-2 text-sm">dat wat goed is</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">bijzondere</td><td class="px-3 py-2 text-sm"><strong>het bijzondere</strong></td><td class="px-3 py-2 text-sm">het speciale aspect</td></tr>
            </tbody>
          </table>
        </div>
        <p>Voorbeeldzin: <em>Het mooie van het verhaal is het einde.</em></p>
        <p><span class="pas-op-highlight">⚠️ PAS OP</span> Nominalisaties zijn <strong>altijd onzijdig</strong> (het-woord) en <strong>niet‑telbaar</strong>. Je kunt geen <em>een</em> gebruiken en geen meervoud maken. Wil je een specifiek geval aanduiden, dan gebruik je vaak een ander woord: <em>een wandeling</em> in plaats van <em>een lopen</em>.</p>
      `,
    },
  ],
  rulesTable: [
    {
      rule: "Telbare zelfstandige naamwoorden",
      structure: "Je kunt er een telwoord voor zetten, er is een meervoud, en je kunt **een** gebruiken. Ontkenning met **geen**.",
      example: "één boek, twee boeken, een boek, geen boek",
      usage: "Bijna alle concrete voorwerpen en personen zijn telbaar.",
    },
    {
      rule: "Niet‑telbare zelfstandige naamwoorden",
      structure: "Je kunt er geen telwoord voor zetten, er is (meestal) geen meervoud, en je gebruikt **geen een**. Ontkenning met **geen**.",
      example: "water, meel, geld, geluk → geen geld, veel water",
      usage: "Gebruik **veel**, **weinig**, **wat**, **een beetje** om een hoeveelheid aan te duiden.",
    },
    {
      rule: "Niet‑telbare woorden telbaar maken",
      structure: "Voeg een **maataanduiding** of **container** toe om een niet‑telbaar woord telbaar te maken.",
      example: "een glas water, twee kilo meel, een pak melk",
      usage: "De maataanduiding is wél telbaar; de stof zelf blijft niet‑telbaar.",
    },
    {
      rule: "Nominalisatie van werkwoorden: het + infinitief",
      structure: "Zet **het** voor het hele werkwoord (de infinitief) om er een onzijdig, niet‑telbaar zelfstandig naamwoord van te maken.",
      example: "het lopen, het zwemmen, het wachten",
      usage: "Het werkwoord blijft onvervoegd; geen -e toevoegen.",
    },
    {
      rule: "Nominalisatie van bijvoeglijke naamwoorden: het + bijv. nw. + e",
      structure: "Zet **het** voor een bijvoeglijk naamwoord en voeg een **-e** toe om de eigenschap als abstract begrip uit te drukken.",
      example: "het mooie, het goede, het bijzondere",
      usage: "Dit is altijd onzijdig en niet‑telbaar.",
    },
  ],
  callouts: [
    { type: "remember", label: "Onthoud 1", text: "Telbaar: één boek, twee boeken. Niet‑telbaar: meel, water (geen twee meel)." },
    { type: "remember", label: "Onthoud 2", text: "Niet‑telbare woorden gebruik je met **veel**, **weinig**, **wat**, **een beetje**." },
    { type: "remember", label: "Onthoud 3", text: "Met een maataanduiding wordt niet‑telbaar telbaar: **een glas water**." },
    { type: "remember", label: "Onthoud 4", text: "Nominalisatie werkwoord: **het + infinitief** (het lopen)." },
    { type: "remember", label: "Onthoud 5", text: "Nominalisatie bijv. nw.: **het + bijv. nw. + e** (het mooie)." },
  ],
  commonMistakes: [
    { incorrect: "Ik heb een meel.", correct: "Ik heb meel (of: een pak meel).", explanation: "Meel is niet‑telbaar, dus geen 'een', tenzij met een maat." },
    { incorrect: "De meel zijn op.", correct: "Het meel is op.", explanation: "Meel is enkelvoud onzijdig." },
    { incorrect: "Ik heb veel geluken.", correct: "Ik heb veel geluk.", explanation: "Geluk is niet‑telbaar, geen meervoud." },
    { incorrect: "Ik hou van het mooi.", correct: "Ik hou van het mooie.", explanation: "Bijvoeglijk naamwoord krijgt -e bij nominalisatie." },
    { incorrect: "Een zwemmen is leuk.", correct: "Zwemmen is leuk (of: Het zwemmen is leuk).", explanation: "Geen 'een' voor nominalisatie." },
    { incorrect: "Ik heb niet geld.", correct: "Ik heb geen geld.", explanation: "Niet‑telbaar zelfstandig naamwoord: ontkenning met geen." },
  ],
  review: [
    "Telbaar: getallen mogelijk, meervoud, 'een' (boek, tafel).",
    "Niet‑telbaar: geen getal, geen meervoud, geen 'een', gebruik veel/weinig/wat (meel, water, geld).",
    "Met maataanduiding wordt niet‑telbaar telbaar: een glas water.",
    "Nominalisatie werkwoord: het + infinitief (het lopen) – altijd onzijdig, niet‑telbaar.",
    "Nominalisatie bijv. nw.: het + bijv. nw. + e (het mooie) – altijd onzijdig, niet‑telbaar.",
    "Let op woorden die telbaar én niet‑telbaar kunnen zijn (koffie, tijd).",
  ],
  qa: [
    {
      question: "Waarom is “Ik heb twee meel” fout? Wat moet je zeggen en waarom?",
      answer: "“Meel” is een niet‑telbare stof. Je kunt niet *twee meel* zeggen, want er is geen meervoud van meel. Je moet een maataanduiding gebruiken: **twee kilo meel** of **twee pakken meel**.",
    },
    {
      question: "Maak een nominalisatie van het werkwoord “slapen” en gebruik die in een correcte zin.",
      answer: "De nominalisatie is **het slapen**. Voorbeeld: **Het slapen** gaat de laatste tijd moeilijk.",
    },
    {
      question: "Wat is het verschil tussen “het mooie” en “iets moois”? Gebruik allebei in een zin.",
      answer: "**Het mooie** is een nominalisatie die een abstract begrip aanduidt: *Ik geloof in het mooie van de natuur.* **Iets moois** gebruik je als onbepaald voornaamwoord + bijvoeglijk naamwoord in de genitief: *Ik heb iets moois gekocht.* De eerste is bepaald (met *het*), de tweede onbepaald (met *iets*).",
    },
    {
      question: "Leg uit waarom “geld” niet‑telbaar is, maar “euro” wel.",
      answer: "**Geld** is een verzamelbegrip, een abstracte waarde; je kunt niet zeggen *één geld, twee gelden*. **Euro** is de naam van een specifieke munteenheid en is wél telbaar: *één euro, twee euro's.* Hetzelfde zie je bij *meubilair* (niet‑telbaar) en *stoel* (telbaar).",
    },
    {
      question: "Is “het wachten” telbaar? Verklaar je antwoord.",
      answer: "**Het wachten** is een nominalisatie van het werkwoord *wachten* en is niet‑telbaar. Je kunt niet zeggen *drie het wachten*. Je kunt het wel omschrijven: *drie keer wachten*, maar de nominalisatie zelf blijft enkelvoud en onbepaald.",
    },
    {
      question: "Vul aan: “Ik heb niet ___ geld bij me.” Waarom kies je voor dat woord?",
      answer: "**Ik heb geen geld bij me.** *Geld* is een niet‑telbaar zelfstandig naamwoord zonder lidwoord in de positieve zin (*ik heb geld*). De ontkenning maak je met **geen**, niet met *niet*.",
    },
    {
      question: "Corrigeer de fout: “Het mooi van het verhaal is het einde.”",
      answer: "Correct is: **Het mooie van het verhaal is het einde.** Bij nominalisatie van een bijvoeglijk naamwoord moet er een **-e** achter: het mooie, het goede, het bijzondere.",
    },
  ],
};