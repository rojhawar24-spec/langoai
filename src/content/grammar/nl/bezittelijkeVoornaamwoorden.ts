import type { GrammarLesson } from "../../types";

export const bezittelijkeVoornaamwoorden: GrammarLesson = {
  id: "nl-bezittelijkeVoornaamwoorden-1",
  title: "Bezittelijke Voornaamwoorden: mijn, jouw, uw, zijn, haar, ons/onze, jullie, hun",
  level: 1,
  topic: "Bezittelijke voornaamwoorden", // [G] Grammatica
  body: "Leer hoe je aangeeft van wie iets is. Met mijn, jouw, uw, zijn, haar, ons/onze, jullie, hun. Inclusief perfecte uitspraak, duidelijke regels en alle valkuilen.",
  overview:
    "Een bezittelijk voornaamwoord geeft aan **van wie** iets is. In deze **100% perfecte les** leer je alles over **mijn, jouw/je, uw, zijn, haar, ons/onze, jullie** en **hun** – mét de glasheldere uitspraak van elke vorm. Je ontdekt het cruciale verschil tussen *jouw* en *jou*, waarom *ons huis* en *onze auto* verschillen, en hoe je *hun* correct gebruikt. Met uitgebreide tabellen, uitspraakgids, valkuilen en 7 ijzersterke oefenvragen wordt het kraakhelder. Hier leert iedereen het écht!",
  anchorSectionId: "wat",
  exercises: [],
  timeExpressionsLabel: "Overzicht bezittelijke voornaamwoorden ✨",
  timeExpressions: {
    header: "Persoon | Bezittelijk vnw | Uitspraak (hoe klinkt het?) | Informeel / snel",
    rows: [
      ["ik", "**mijn**", "Klinkt als \"mèèn\" (lange ei/ij, zoals in *lijn*, *pijn*)", "**m'n** (korte 'u'-klank, zoals 'mun')"],
      ["jij", "**jouw**", "Klinkt **precies** als \"jou\" (een lange au-klank, geen aparte w hoorbaar)", "**je** (stomme e, zoals 'juh')"],
      ["u", "**uw**", "Klinkt als het Engelse \"you\", maar met een korte, scherpe Nederlandse uu", "–"],
      ["hij", "**zijn**", "\"zèèn\" (lange ei/ij, net als *mijn*, *rein*)", "**z'n** (zən, stomme e)"],
      ["zij", "**haar**", "\"haar\" met een lange, heldere aa (zoals in *maan*) en een zachte r", "**d'r** (dər, doffe e)"],
      ["het", "**zijn**", "precies hetzelfde als bij hij: \"zèèn\"", "–"],
      ["wij", "**ons / onze**", "**ons** = korte o (als in *hond*) + ns; **onze** = korte o + n + stemhebbende z + stomme e", "–"],
      ["jullie", "**jullie**", "\"júllie\" — korte u (zoals in *bus*, *lus*), klemtoon op de eerste lettergreep", "–"],
      ["zij (mv)", "**hun**", "korte u (als in *hut*, *dun*) + n, dus \"hun\" met een korte, scherpe u", "–"],
    ],
  },
  details: [
    {
      title: "Wat zijn bezittelijke voornaamwoorden? 🔑",
      body: `
        <p>Een bezittelijk voornaamwoord geeft aan <strong>van wie</strong> iets is. Het staat vóór het zelfstandig naamwoord.</p>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>Mijn</strong> boek</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>Jouw</strong> tas</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>Onze</strong> vader</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>Hun</strong> hond</li>
        </ul>
        <p>Het bezittelijk voornaamwoord verandert niet door het soort zelfstandig naamwoord dat erop volgt — <strong>behalve bij <em>ons/onze</em></strong>. Ook moet je het niet verwarren met de persoonlijke voornaamwoorden die op dezelfde manier klinken (<em>jou</em> en <em>jouw</em> bijvoorbeeld).</p>
      `,
    },
    {
      title: "Elk woord in detail – met uitspraak, valkuilen en ezelsbruggetjes 🧩",
      body: `
        <h3 class="text-lg font-bold mt-4 mb-2">mijn / m’n</h3>
        <p><strong>Schrijf:</strong> altijd <em>mijn</em> in nette taal. In appjes en snelle spreektaal zie je <em>m'n</em>.<br>
        <strong>Spreek uit:</strong> /mɛin/ — een lange, heldere <strong>ei</strong> (zoals in <em>pijn</em>, <em>klein</em>, <em>lijn</em>). Het is géén korte "min" (als in het Engelse "minute"). Houd de ei lang aan.<br>
        <strong>Fout:</strong> "min" (Engels) of "meen" (met een ee).<br>
        <strong>Ezelsbrug:</strong> <em>Mijn</em> rijmt op <em>pijn</em> en <em>klein</em>.</p>

        <h3 class="text-lg font-bold mt-6 mb-2">jouw / jou – de allergrootste valkuil</h3>
        <p><strong>Schrijf:</strong></p>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><em>Jouw</em> = bezittelijk (het boek van jou): <em>Is dat <strong>jouw</strong> boek?</em></li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><em>Jou</em> = object (ik zie jou, ik geef aan jou): <em>Ik zie <strong>jou</strong>.</em></li>
        </ul>
        <p><strong>Spreek uit:</strong> Beide klinken <strong>exact hetzelfde</strong>: een lange <strong>ou/au</strong> (zoals in <em>goud</em>, <em>hout</em>). De w aan het eind van <em>jouw</em> hoor je <strong>niet</strong>. Je kunt dus alleen aan de zinsbouw horen of het bezittelijk is of object.</p>
        <p><strong>Fout:</strong> <em>Ik zie jouw.</em> → fout, want het moet object zijn (<em>jou</em>). Of een overduidelijke uitspraak van de w: doe dat nooit, dat klinkt hypercorrect en onnatuurlijk.<br>
        <strong>Onthoud:</strong> <em>Jouw</em> heeft een zelfstandig naamwoord na zich; <em>jou</em> staat vaak aan het eind van een zin of na een voorzetsel.</p>

        <h3 class="text-lg font-bold mt-6 mb-2">uw</h3>
        <p><strong>Schrijf:</strong> <em>Uw</em> is de beleefde vorm, enkelvoud én meervoud.<br>
        <strong>Spreek uit:</strong> Als /yu/ — de uu is kort, bijna als "u" in het Franse "tu" maar met een lichte w-klank aan het eind. Zeg <em>u</em> en laat er een zachte w op volgen. Nooit als het Engelse "you" uitspreken; dat is te lang.<br>
        <strong>Fout:</strong> <em>U boek</em> is nooit goed; het is altijd <em>uw boek</em>.</p>

        <h3 class="text-lg font-bold mt-6 mb-2">zijn (van hij en van het)</h3>
        <p><strong>Schrijf:</strong> <em>Zijn</em> gebruik je als de eigenaar <strong>hij</strong> of <strong>het</strong> is. Dus: <em>De man zoekt <strong>zijn</strong> sleutels.</em> <em>Het paard eet <strong>zijn</strong> hooi.</em><br>
        <strong>Spreek uit:</strong> /zɛin/ — lange ei/ij, identiek aan <em>mijn</em>. Geen aparte bijzonderheid.<br>
        <strong>Fout:</strong> <em>Het meisje poetst <strong>haar</strong> tanden.</em> → Grammaticaal moet het <em>zijn</em> (want <em>het meisje</em> is onzijdig), maar in de spreektaal mag <em>haar</em> vanwege het natuurlijk geslacht.</p>

        <h3 class="text-lg font-bold mt-6 mb-2">haar</h3>
        <p><strong>Schrijf:</strong> <em>Haar</em> gebruik je bij een vrouwelijk bezitter: <em>Zij pakt <strong>haar</strong> jas.</em> <em>De regering toont <strong>haar</strong> plannen.</em><br>
        <strong>Spreek uit:</strong> /ɦaːr/ — de <strong>aa</strong> is lang en helder (zoals in <em>maan</em>, <em>kaas</em>), de h is zacht, en de r wordt duidelijk uitgesproken. Het is niet het Engelse "her" (korte, doffe klinker).<br>
        <strong>Fout:</strong> <em>Haar</em> als "hur" uitspreken. Zorg dat de aa open en ontspannen klinkt.</p>

        <h3 class="text-lg font-bold mt-6 mb-2">ons / onze – de enige met twee vormen ⚡</h3>
        <p>
          <strong>Ons</strong> gebruik je bij <strong>het-woorden</strong>: <em>ons huis</em>, <em>ons kind</em>, <em>ons idee</em>.<br>
          <strong>Onze</strong> gebruik je bij <strong>de-woorden</strong> en <strong>alle meervouden</strong>: <em>onze tafel</em>, <em>onze vader</em>, <em>onze kinderen</em>.
        </p>
        <p><strong>Spreek uit:</strong></p>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><em>Ons</em>: korte o (als in <em>hond</em>), dan ns.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><em>Onze</em>: korte o, n, stemhebbende z (zoemend), en een stomme e aan het eind. Dus: /ɔns/ tegenover /ˈɔnzə/.</li>
        </ul>
        <p><strong>Fout:</strong> <em>Ons vader</em> → <em>onze vader</em> (vader = de). <em>Onze huis</em> → <em>ons huis</em> (huis = het).<br>
        <strong>Ezelsbrug:</strong> <em>Het</em> → <em>ons</em> (beide kort), <em>de</em> → <em>onze</em> (beide met een e).</p>

        <h3 class="text-lg font-bold mt-6 mb-2">jullie</h3>
        <p><strong>Schrijf:</strong> onveranderlijk: <em>jullie boek</em>, <em>jullie auto</em>, <em>jullie vrienden</em>.<br>
        <strong>Spreek uit:</strong> /ˈjʏli/ — de <strong>u</strong> is kort, precies als in <em>bus</em>, <em>kus</em>, <em>lus</em>. De klemtoon ligt op de eerste lettergreep. Spreek beide l's duidelijk uit.<br>
        <strong>Fout:</strong> "joelie" (met oe) of "julie" (een l weglaten) is niet goed.</p>

        <h3 class="text-lg font-bold mt-6 mb-2">hun</h3>
        <p><strong>Schrijf:</strong> bezittelijk voornaamwoord van de derde persoon meervoud: <em>Zij wassen <strong>hun</strong> auto.</em><br>
        <strong>Spreek uit:</strong> /ɦʏn/ — korte u (als in <em>hut</em>, <em>dun</em>, <em>vlug</em>). De h is zacht maar aanwezig.<br>
        <strong>Fout:</strong> <em>Hun</em> als onderwerp gebruiken (<em>Hun komen</em> → fout, moet <em>Zij komen</em>). Maar als bezittelijk voornaamwoord is het perfect: <em>Hun auto is nieuw.</em></p>
      `,
    },
  ],
  rulesTable: [
    {
      rule: "ons/onze: volg het lidwoord",
      structure: "**Ons** vóór een het-woord enkelvoud. **Onze** vóór een de-woord en vóór alle meervouden.",
      example: "**ons** huis (het), **onze** auto (de), **onze** kinderen (mv).",
      usage: "Ezelsbrug: het → ons, de → onze.",
    },
    {
      rule: "jouw (bezittelijk) vs. jou (object)",
      structure: "**Jouw** geeft bezit aan (van jou), **jou** gebruik je als lijdend voorwerp of na een voorzetsel.",
      example: "**Jouw** boek is mooi. Ik zie **jou**.",
      usage: "Schrijf nooit 'ik zie jouw' als je 'ik zie jou' bedoelt.",
    },
    {
      rule: "zijn bij hij én bij het",
      structure: "**Zijn** gebruik je voor mannelijke bezitters (hij) en voor onzijdige bezitters (het).",
      example: "De man zoekt **zijn** tas. Het kind pakt **zijn** speelgoed.",
      usage: "Het-woorden krijgen dus 'zijn', niet 'haar'.",
    },
    {
      rule: "haar voor vrouwelijke eigenaren",
      structure: "**Haar** gebruik je voor vrouwelijke personen, vrouwelijke dieren en vrouwelijke de-woorden (op -ing, -heid, etc.).",
      example: "De regering presenteert **haar** plannen. De stad en **haar** inwoners.",
      usage: "Denk aan de uitgangsregels voor vrouwelijk geslacht.",
    },
    {
      rule: "hun = bezittelijk, niet als onderwerp",
      structure: "**Hun** is het bezittelijk voornaamwoord van 'zij' (meervoud). Als onderwerp gebruik je 'zij'.",
      example: "✅ **Hun** auto is nieuw. ❌ **Hun** hebben een auto. → ✅ **Zij** hebben een auto.",
      usage: "Hun mag dus wél voor een zelfstandig naamwoord staan, maar nooit als zinsdeel dat de handeling uitvoert.",
    },
  ],
  callouts: [
    { type: "remember", label: "Onthoud 1", text: "**mijn** = van ik, **jouw/je** = van jij, **uw** = van u, **zijn** = van hij/het, **haar** = van zij." },
    { type: "remember", label: "Onthoud 2", text: "**ons** bij het-woorden; **onze** bij de-woorden en alle meervouden." },
    { type: "remember", label: "Onthoud 3", text: "**Jouw** = bezit, **jou** = object. *Ik geef jou het boek*, niet *jouw*." },
    { type: "remember", label: "Onthoud 4", text: "**Hun** is bezittelijk en mag, maar **hun** is nooit onderwerp. Gebruik dan **zij**." },
    { type: "remember", label: "Onthoud 5", text: "Het-woorden (het kind, het paard) krijgen **zijn** als bezittelijk voornaamwoord." },
  ],
  commonMistakes: [
    { incorrect: "Ons vader.", correct: "Onze vader.", explanation: "Vader is de-woord → onze." },
    { incorrect: "Onze huis.", correct: "Ons huis.", explanation: "Huis is het-woord → ons." },
    { incorrect: "Ons kinderen.", correct: "Onze kinderen.", explanation: "Meervoud = onze." },
    { incorrect: "Ik zie jouw.", correct: "Ik zie jou.", explanation: "Jouw = bezittelijk; jou = object." },
    { incorrect: "Hun hebben een kat.", correct: "Zij hebben een kat.", explanation: "Hun is geen onderwerp." },
    { incorrect: "De regering en zijn beleid.", correct: "De regering en haar beleid.", explanation: "Regering is vrouwelijk → haar." },
    { incorrect: "Het kind en haar speelgoed.", correct: "Het kind en zijn speelgoed.", explanation: "Grammaticaal onzijdig → zijn." },
    { incorrect: "Ik geef jouw het boek.", correct: "Ik geef jou het boek.", explanation: "Object, niet bezittelijk." },
  ],
  review: [
    "**mijn** = van ik",
    "**jouw / je** = van jij (jouw bij nadruk, je informeel)",
    "**uw** = van u (formeel)",
    "**zijn** = van hij of van het",
    "**haar** = van zij (vrouwelijk)",
    "**ons** = voor het-woorden; **onze** = voor de-woorden en meervoud",
    "**jullie** = van jullie (onveranderlijk)",
    "**hun** = van zij (meervoud, onveranderlijk)",
    "Bezittelijk vnw zegt **van wie**, niet *wie ondergaat*.",
  ],
  qa: [
    {
      question: "Waarom is “Ik zie jouw” fout, terwijl het precies hetzelfde klinkt als “Ik zie jou”?",
      answer: "Omdat **jouw** alleen bezittelijk is en een zelfstandig naamwoord nodig heeft. **Jou** is de objectvorm. De uitspraak is identiek; alleen de grammaticale functie verschilt.",
    },
    {
      question: "Hoe spreek je “mijn” uit, en wat is het grootste uitspraakgevaar voor anderstaligen?",
      answer: "“Mijn” spreek je uit met de lange Nederlandse **ei/ij**, zoals in *lijn*. Het gevaar is dat men het als het Engelse “min” uitspreekt (korte i), waardoor het onverstaanbaar wordt.",
    },
    {
      question: "Vul in: “Het paard staat in ___ stal.” Leg daarna uit waarom die keuze juist is.",
      answer: "**Zijn**. *Paard* is een het-woord en krijgt dus het bezittelijk voornaamwoord *zijn*, ook al is het dier misschien een merrie. Alleen als je expliciet het vrouwelijk geslacht wilt benadrukken, kun je *haar* gebruiken, maar grammaticaal is *zijn* correct.",
    },
    {
      question: "Waarom zeggen we “onze vader” maar “ons kind”? Leg de regel uit.",
      answer: "*Vader* is een de-woord, dus we gebruiken **onze**. *Kind* is een het-woord, dus **ons**. Bij meervoud (*onze kinderen*) kiezen we ook **onze**. De regel luidt: **ons** voor het-woorden, **onze** voor de-woorden en alle meervouden.",
    },
    {
      question: "Wat is het verschil in uitspraak tussen “haar” en “her” (Engels)?",
      answer: "“Haar” heeft een lange, heldere **aa** (als in *maan*) en een duidelijke slot-r. “Her” heeft een korte, centrale doffe klinker en geen r aan het eind. Het zijn totaal verschillende klanken.",
    },
    {
      question: "Is de zin “Hun auto is duur” correct? En “Hun hebben een auto”?",
      answer: "“Hun auto is duur” is perfect; **hun** is hier bezittelijk voornaamwoord. “Hun hebben een auto” is fout, want **hun** mag nooit onderwerp zijn. Dat moet *Zij hebben een auto*.",
    },
    {
      question: "Hoe spreek je “jullie” foutloos uit? Geef een Nederlands woord met dezelfde klinker.",
      answer: "“Jullie” spreek je uit met een korte **u**, zoals in *bus*, *lus* of *hut*. De klemtoon valt op de eerste lettergreep: **júl-lie**. Zeg dus niet “joelie” (met een oe-klank).",
    },
  ],
};