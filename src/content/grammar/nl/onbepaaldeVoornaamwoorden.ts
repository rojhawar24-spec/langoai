import type { GrammarLesson } from "../../types";

export const onbepaaldeVoornaamwoorden: GrammarLesson = {
  id: "nl-onbepaaldeVoornaamwoorden-1",
  title: "Onbepaalde Voornaamwoorden: iemand, niemand, men, je, iets, niets, alles",
  level: 1,
  topic: "Onbepaalde voornaamwoorden", // [G] Grammatica
  body: "Leer hoe je over niet‑specifieke personen en zaken praat. Met iemand, niemand, men, je, iets, niets, alles – inclusief perfecte uitspraak en valkuilen.",
  overview:
    "Onbepaalde voornaamwoorden verwijzen naar **niet‑specifieke personen of zaken** zonder ze concreet aan te wijzen. In deze **complete, superrijke les** ontdek je alles over **iemand, niemand, men, je, iets, niets** en **alles**. Je leert de exacte uitspraak, het verschil tussen formeel *men* en informeel *je*, de bijzondere regel voor bijvoeglijke naamwoorden (iets mooi**s**), en hoe je fouten zoals dubbele ontkenning voorkomt. Met heldere tabellen, uitgebreide voorbeelden en 7 ijzersterke oefenvragen beheers je de onbepaalde voornaamwoorden volledig.",
  anchorSectionId: "overzicht",
  exercises: [],
  timeExpressionsLabel: "Overzicht onbepaalde voornaamwoorden ✨",
  timeExpressions: {
    header: "Voornaamwoord | Betekenis | Uitspraak (hoe klinkt het?) | Voorbeeldzin",
    rows: [
      [
        "**iemand**",
        "een (onbekend) persoon",
        "/ˈi.mɑnt/ (\"ie-mant\", klemtoon op ie, korte a)",
        "**Iemand** klopt op de deur.",
      ],
      [
        "**niemand**",
        "geen enkele persoon",
        "/ˈni.mɑnt/ (\"nie-mant\", klemtoon op nie)",
        "**Niemand** weet het antwoord.",
      ],
      [
        "**men**",
        "de mensen in het algemeen (formeel)",
        "/mɛn/ (\"men\", korte e als in 'met')",
        "**Men** zegt dat het gezond is.",
      ],
      [
        "**je**",
        "onbepaald, informeel voor 'men'",
        "/jə/ (\"juh\", stomme e)",
        "**Je** kunt hier lekker eten.",
      ],
      [
        "**iets**",
        "een (onbekend) ding of kleine hoeveelheid",
        "/its/ (\"iets\", ie als in 'zien', ts aan het eind)",
        "Ik heb **iets** leuks gekocht.",
      ],
      [
        "**niets**",
        "geen enkel ding, geen enkele hoeveelheid",
        "/nits/ (\"niets\", ie, ts)",
        "Er is **niets** aan de hand.",
      ],
      [
        "**alles**",
        "het geheel, alle dingen",
        "/ˈɑ.ləs/ (\"al-lus\", korte a, stomme e)",
        "**Alles** is ingepakt.",
      ],
    ],
  },
  details: [
    {
      title: "Wat zijn onbepaalde voornaamwoorden? 🤔",
      body: `
        <p>Onbepaalde voornaamwoorden verwijzen naar <strong>niet-specifieke personen of zaken</strong>. Je weet niet precies wie of wat het is, of het is niet belangrijk. Ze drukken een <strong>onbepaaldheid</strong> uit: je wijst niemand of niets concreet aan.</p>
        <p>Ze zijn onmisbaar in het dagelijks Nederlands en komen in veel spreekwoorden en vaste uitdrukkingen voor. Daarnaast hebben ze speciale regels als er een bijvoeglijk naamwoord bij staat.</p>
      `,
    },
    {
      title: "Uitspraak – perfect leren uitspreken 🎤",
      body: `
        <p>Deze woorden hebben elk een specifieke uitspraak. Oefen hardop mee:</p>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>iemand</strong> /ˈi.mɑnt/ – "IE-mant": lange ie, korte a (als in 'man'), d hoorbaar.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>niemand</strong> /ˈni.mɑnt/ – "NIE-mant": zelfde opbouw, maar met n.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>men</strong> /mɛn/ – korte e (als in 'met', 'bed'), niet "meen" of "man".</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>je</strong> /jə/ – "juh" met stomme e, zoals 'de'.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>iets</strong> /its/ – "iets": lange ie, scherpe ts (als in 'fiets').</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>niets</strong> /nits/ – "niets": n + iets.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>alles</strong> /ˈɑ.ləs/ – "AL-lus": klemtoon op al, korte a (als in 'al'), stomme e + s.</li>
        </ul>
      `,
    },
    {
      title: "Iemand & Niemand 👤🚫",
      body: `
        <p><strong>Iemand</strong> = een onbekend persoon. <strong>Niemand</strong> = de ontkenning daarvan, geen enkel persoon.</p>
        <p>Beide zijn enkelvoud, dus het werkwoord staat in het enkelvoud: <em>Iemand <strong>heeft</strong> gebeld.</em> <em>Niemand <strong>weet</strong> het.</em></p>
        <p>Ontkenning: gebruik nooit *niet iemand* als je *niemand* bedoelt. *Ik zie niemand* is correct, *Ik zie niet iemand* kan alleen als je nadrukt "niet iemand, maar iets anders".</p>
        <p><span class="pas-op-highlight">⚠️ PAS OP</span> *Niemand hebben het gedaan* is fout → *Niemand heeft het gedaan.*</p>
      `,
    },
    {
      title: "Men & Je (onbepaald) – formeel en informeel 👥",
      body: `
        <p><strong>Men</strong> (formeel) en <strong>je</strong> (informeel) betekenen allebei "de mensen in het algemeen". <strong>Men</strong> wordt vooral in geschreven taal, kranten en officiële mededelingen gebruikt. <strong>Je</strong> is de standaard in spreektaal.</p>
        <p><strong>Men</strong> spreek je uit met een korte e (als in 'met'). <strong>Je</strong> als onbepaald voornaamwoord klinkt precies als het persoonlijk voornaamwoord "je" (juh).</p>
        <p>Voorbeelden:</p>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>Men</strong> zegt dat het gezond is. (krant)</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>Je</strong> kunt hier lekker wandelen. (informeel)</li>
        </ul>
        <p><span class="pas-op-highlight">⚠️ PAS OP</span> In formele teksten kan *je* te informeel overkomen; gebruik dan *men*. Andersom klinkt *men* in een appje stijf.</p>
      `,
    },
    {
      title: "Iets & Niets ✨🚫",
      body: `
        <p><strong>Iets</strong> = een onbepaald ding, kleine hoeveelheid of niet nader genoemd concept. <strong>Niets</strong> = de ontkenning ervan, geen enkel ding of hoeveelheid.</p>
        <p>Beide zijn onzijdig en enkelvoud. Het werkwoord staat dus in het enkelvoud: <em>Er <strong>is</strong> iets mis.</em> <em>Niets <strong>blijft</strong> geheim.</em></p>
        <p>In de spreektaal hoor je vaak <strong>niks</strong> in plaats van <em>niets</em>. Dat is informeel en in formele schrijftaal vervang je het door <em>niets</em>.</p>
      `,
    },
    {
      title: "Alles 🌐",
      body: `
        <p><strong>Alles</strong> betekent het geheel, alle dingen samen. Het is enkelvoud onzijdig. Dus: <em>Alles <strong>is</strong> klaar.</em> (niet <em>zijn</em>).</p>
        <p>Spreek uit: "AL-lus" (klemtoon op AL, korte a).</p>
        <p>Onderscheid met <strong>al</strong>: <em>al het geld</em> (voor een znw), <em>alles</em> (zelfstandig).</p>
      `,
    },
    {
      title: "Bijvoeglijke naamwoorden na onbepaalde voornaamwoorden 🌈",
      body: `
        <p>Een belangrijke regel: na onzijdige onbepaalde voornaamwoorden (<strong>iets, niets, alles, veel, weinig, wat</strong>) krijgt het bijvoeglijk naamwoord een <strong>-s</strong> (oude genitief).</p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Combinatie</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Correct</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">iets + mooi</td><td class="px-3 py-2 text-sm"><strong>iets moois</strong></td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">niets + bijzonder</td><td class="px-3 py-2 text-sm"><strong>niets bijzonders</strong></td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">alles + goed</td><td class="px-3 py-2 text-sm"><strong>alles goeds</strong> (wens)</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">veel + interessant</td><td class="px-3 py-2 text-sm"><strong>veel interessants</strong></td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">wat + leuk</td><td class="px-3 py-2 text-sm"><strong>wat leuks</strong></td></tr>
            </tbody>
          </table>
        </div>
        <p>🧠 <strong>Ezelsbrug:</strong> Het is alsof je zegt "iets van het mooie". Daarom die -s. Bij personen (iemand, niemand) gebruik je een andere constructie: <em>een leuk iemand</em>, niet *iemand leuks*.</p>
      `,
    },
    {
      title: "Zinsbouw en congruentie 🏗️",
      body: `
        <p>Alle onbepaalde voornaamwoorden in deze les zijn <strong>enkelvoud</strong>. Het werkwoord staat dus in de derde persoon enkelvoud:</p>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>Iemand</strong> <em>heeft</em> gebeld.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>Niemand</strong> <em>weet</em> het.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>Men</strong> <em>zegt</em> ...</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>Iets</strong> <em>is</em> mis.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>Niets</strong> <em>blijft</em> geheim.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>Alles</strong> <em>gaat</em> goed.</li>
        </ul>
      `,
    },
    {
      title: "Formeel vs. informeel – extra helderheid 👔",
      body: `
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Betekenis</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Formeel</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Informeel</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">"men"</td><td class="px-3 py-2 text-sm">men</td><td class="px-3 py-2 text-sm">je / ze (vaag "ze")</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">"iemand"</td><td class="px-3 py-2 text-sm">iemand</td><td class="px-3 py-2 text-sm">er eentje, een of andere</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">"niemand"</td><td class="px-3 py-2 text-sm">niemand</td><td class="px-3 py-2 text-sm">geen mens / geen hond</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">"iets"</td><td class="px-3 py-2 text-sm">iets</td><td class="px-3 py-2 text-sm">wat (soms)</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">"niets"</td><td class="px-3 py-2 text-sm">niets</td><td class="px-3 py-2 text-sm">niks</td></tr>
            </tbody>
          </table>
        </div>
        <p><span class="pas-op-highlight">⚠️ PAS OP</span> <strong>Niks</strong> is informeel; in formele schrijftaal altijd <strong>niets</strong>.</p>
      `,
    },
  ],
  rulesTable: [
    {
      rule: "Enkelvoudige persoonsvorm",
      structure: "Alle onbepaalde voornaamwoorden (iemand, niemand, men, je, iets, niets, alles) zijn grammaticaal enkelvoud. De persoonsvorm staat in het enkelvoud.",
      example: "Niemand **weet** het. Alles **is** klaar. Iets **lijkt** niet te kloppen.",
      usage: "Fout: *Niemand weten het.*",
    },
    {
      rule: "Bijvoeglijk naamwoord na iets/niets/alles e.d. → +s",
      structure: "Na onzijdige onbepaalde voornaamwoorden (iets, niets, alles, veel, weinig, wat) krijgt het bijvoeglijk naamwoord een genitief‑s.",
      example: "iets **moois**, niets **bijzonders**, veel **interessants**.",
      usage: "Bij personen (iemand, niemand) komt er géén ‑s: *een leuk iemand*, niet *iemand leuks*.",
    },
    {
      rule: "Geen dubbele ontkenning bij niemand/niets",
      structure: "Niemand en niets zijn al ontkennend. Gebruik dus geen extra 'niet'.",
      example: "✅ Ik zie niemand. ❌ Ik zie niet niemand.",
      usage: "Dubbele ontkenning kan alleen in dialect of voor expressie; standaardtaal vermijdt het.",
    },
    {
      rule: "Men (formeel) vs. je (informeel)",
      structure: "Beide betekenen 'de mensen in het algemeen', maar **men** hoort in formele, schriftelijke context; **je** is informeler en overheerst in spreektaal.",
      example: "**Men** verwacht regen (krant). **Je** kunt hier parkeren (gesprek).",
      usage: "In een zakelijke brief kies je voor *men* of omschrijf je met *men* of *u kunt*.",
    },
  ],
  callouts: [
    { type: "remember", label: "Onthoud 1", text: "Alle onbepaalde voornaamwoorden zijn enkelvoud → werkwoord in enkelvoud." },
    { type: "remember", label: "Onthoud 2", text: "Na **iets, niets, alles** + bijvoeglijk naamwoord → **‑s**: *iets moois, niets bijzonders*." },
    { type: "remember", label: "Onthoud 3", text: "**Men** = formeel, **je** = informeel voor 'de mensen'." },
    { type: "remember", label: "Onthoud 4", text: "**Niemand** en **niets** zijn al negatief, dus niet combineren met *niet*." },
    { type: "remember", label: "Onthoud 5", text: "**Niks** is informeel; in formele tekst schrijf je **niets**." },
  ],
  commonMistakes: [
    { incorrect: "Iets leuk", correct: "Iets leuks", explanation: "Na 'iets' volgt een bijvoeglijk naamwoord met -s." },
    { incorrect: "Niemand hebben het gedaan.", correct: "Niemand heeft het gedaan.", explanation: "Niemand is enkelvoud." },
    { incorrect: "Alles zijn klaar.", correct: "Alles is klaar.", explanation: "Alles is enkelvoud." },
    { incorrect: "Men kunnen hier niet parkeren.", correct: "Men kan hier niet parkeren.", explanation: "Men is enkelvoud." },
    { incorrect: "Ik heb niet niets gehoord.", correct: "Ik heb niets gehoord.", explanation: "Geen dubbele ontkenning." },
    { incorrect: "Iemand leuks (voor een persoon)", correct: "Een leuk iemand", explanation: "Iemand is geen onzijdig ding; geen -s." },
    { incorrect: "Men in een informeel appje", correct: "Je (in die context)", explanation: "Men is te formeel voor informele communicatie." },
  ],
  review: [
    "**iemand** – /IE-mant/ – een onbekende persoon.",
    "**niemand** – /NIE-mant/ – geen enkele persoon.",
    "**men** – /men/ (korte e) – formeel voor 'de mensen'.",
    "**je** – /juh/ – informeel voor 'men'.",
    "**iets** – /iets/ – een onbepaald ding; +s bij bijvoeglijk naamwoord (iets moois).",
    "**niets** – /niets/ – geen enkel ding; ook +s (niets bijzonders).",
    "**alles** – /AL-lus/ – het geheel; +s (alles goeds).",
    "Allen zijn enkelvoud: het werkwoord staat in het enkelvoud.",
  ],
  qa: [
    {
      question: "Waarom is “Niemand hebben het gezien” fout? Corrigeer en leg uit.",
      answer: "**Niemand** is een onbepaald voornaamwoord dat grammaticaal enkelvoud is. Het werkwoord moet dus in de derde persoon enkelvoud staan: **Niemand heeft het gezien.** Hetzelfde geldt voor *iemand*, *men*, *iets*, *niets*, *alles*: ze krijgen enkelvoudige persoonsvorm.",
    },
    {
      question: "Wat is het verschil tussen “men” en “je” als onbepaald voornaamwoord? Geef een voorbeeld van een situatie waarin je beter “men” kunt gebruiken.",
      answer: "**Men** is formeel en wordt gebruikt in geschreven taal, officiële mededelingen en spreekwoorden. **Je** is de informele tegenhanger, standaard in spreektaal. In een krantenartikel of een wetenschappelijke tekst past *men* beter: *Men neemt aan dat…* In een informeel gesprek met vrienden gebruik je *je*: *Je weet maar nooit.*",
    },
    {
      question: "Welke zin is juist: “Ik heb iets leuks gekocht” of “Ik heb iets leuk gekocht”? Leg de regel uit.",
      answer: "**Ik heb iets leuks gekocht.** Na onzijdige onbepaalde voornaamwoorden zoals *iets*, *niets*, *alles*, *veel*, *weinig* krijgt het bijvoeglijk naamwoord een **-s** (oude genitiefvorm). Het is dus *iets leuks*, *niets bijzonders*, *veel interessants*. Zonder -s klinkt het als een onafgemaakte constructie.",
    },
    {
      question: "Hoe spreek je “alles” correct uit, en wat is een veelgemaakte uitspraakfout?",
      answer: "Je spreekt **alles** uit als /ˈɑ.ləs/ – klemtoon op de eerste lettergreep, een korte a (als in *al*), een l, en een stomme e gevolgd door een s: \"AL-lus\". Een veelgemaakte fout is het uitspreken als \"al-les\" met twee even zware lettergrepen, of met een lange a (als in \"aal-lus\"). De eerste lettergreep is kort en krachtig.",
    },
    {
      question: "Waarom is “Ik zie niet niemand” dubbel fout, en hoe zeg je het correct?",
      answer: "**Niemand** is al ontkennend; een extra *niet* zorgt voor een dubbele ontkenning die in standaard Nederlands niet is toegestaan. De correcte zin is: **Ik zie niemand.** Wil je extra nadruk leggen, dan kun je zeggen: *Ik zie helemaal niemand* of *Ik zie er geen een*.",
    },
    {
      question: "Kun je “men” gebruiken in een zin als “Men, ik ga naar huis”? Leg uit waarom wel of niet.",
      answer: "Nee, dat kan niet. **Men** is een onpersoonlijk voornaamwoord dat nooit als aanspreekvorm of als zelfstandig begrip voor een groep mensen dient. Het is altijd een algemeen onderwerp: *Men zegt…* In de gegeven zin zou je *Mensen, ik ga naar huis* of *Jongens, ik ga naar huis* moeten zeggen. *Men* kan geen vocatief zijn.",
    },
    {
      question: "Vul aan: “Er is ___ bijzonders gebeurd.” Kies tussen *iets* en *niets*. Kan het allebei? Verklaar.",
      answer: "Het kan allebei, maar de betekenis verschilt: **Er is iets bijzonders gebeurd.** (Iets speciaals heeft plaatsgevonden.) **Er is niets bijzonders gebeurd.** (Er is geen enkele bijzondere gebeurtenis geweest.) Beide zijn grammaticaal correct. Het bijvoeglijk naamwoord *bijzonders* heeft in beide gevallen de genitief-s.",
    },
  ],
};