import type { GrammarLesson } from "../types";

export const nlGrammar: GrammarLesson[] = [
 { id: "nl-zich-voorstellen-1",
  title: "Zich voorstellen & kennismaken",
  level: 1,
  topic: "Pragmatiek",
  body: "Een complete les over jezelf voorstellen in het Nederlands. Naam, leeftijd, woonplaats, nationaliteit en talen. Alle werkwoorden – zijn, hebben, heten, wonen, komen, spreken – volledig uitgelegd met de regels van de tegenwoordige tijd, inversie en spelling.",
  overview:
    "Voor jezelf voorstellen gebruik je **ik ben** (naam, leeftijd, nationaliteit), **ik heet**, **ik woon**, **ik kom uit** en **ik spreek**. Alle werkwoorden volgen de tegenwoordige tijd: stam of onregelmatige ik-vorm; bij jij/u/hij komt er -t of een aparte vorm; in vragen met jij pas je inversie toe.",

  conjugationTable: {
    header: "Persoon|Zijn|Hebben|Heten|Wonen|Komen|Spreken",
    rows: [
      ["ik", "ben", "heb", "heet", "woon", "kom", "spreek"],
      ["jij / u", "bent", "hebt / heeft", "heet", "woont", "komt", "spreekt"],
      ["hij / zij / het", "is", "heeft", "heet", "woont", "komt", "spreekt"],
      ["wij / jullie / zij mv", "zijn", "hebben", "heten", "wonen", "komen", "spreken"],
    ],
  },

  rulesTable: [
    {
      rule: "Leeftijd = zijn (niet hebben)",
      structure: "ik ben … jaar\njij bent … jaar\nu bent … jaar\nhij/zij is … jaar",
      example: "Ik ben 25 jaar. (nooit: ik heb 25 jaar)\nHoe oud ben jij? Ben jij 20?",
      usage: "Het Nederlands gebruikt *zijn* voor leeftijd, niet *hebben*. *Hebben* is alleen voor bezit (ik heb een auto).",
    },
    {
      rule: "Inversie met jij – de -t valt weg",
      structure: "jij + werkwoord (stam+t) → werkwoord(stam) + jij?\nBij *zijn*: jij bent → ben jij?\nBij *hebben*: jij hebt → heb jij?",
      example: "woon jij? · kom jij? · spreek jij? · ben jij? · heb jij?\nUitzondering: heet jij? (stam eindigt al op t, blijft heet)",
      usage: "Zodra het onderwerp *jij* achter de persoonsvorm staat, verdwijnt de -t. De vorm wordt gelijk aan de ik-vorm.",
    },
    {
      rule: "U behoudt altijd de t",
      structure: "U + stam+t → blijft ook in vraag: stam+t + u?",
      example: "u woont → woont u?\nu komt → komt u?\nu spreekt → spreekt u?\nbent u? (onregelmatig)",
      usage: "In tegenstelling tot jij verliest *u* nooit de -t. Ook niet in een vraag.",
    },
    {
      rule: "Heten – stam op t, geen extra t",
      structure: "stam = heet → alle enkelvoud heet\njij-vorm = heet (geen extra t)\nvraag jij: heet jij?",
      example: "ik heet, jij heet, hij heet\nHoe heet jij? → Heet jij?",
      usage: "Omdat de stam al op een t eindigt, schrijf je nooit *heett*. De inversie verandert niets.",
    },
    {
      rule: "Komen uit (herkomst) – korte o",
      structure: "ik kom uit …\njij komt uit …\nhij komt uit …\nwij komen uit …",
      example: "Ik kom uit België.\nWaar kom jij vandaan? → Kom jij uit Nederland?",
      usage: "*Komen uit* geeft het land aan. *Zijn* + nationaliteit geeft de identiteit: ik ben Belg / Nederlandse.",
    },
    {
      rule: "Spreken – dubbele ee in de stam",
      structure: "stam = spreek (lange ee)\nik spreek, jij spreekt, hij spreekt, wij spreken",
      example: "Ik spreek Nederlands.\nSpreek jij Engels?\nSpreekt u Frans?",
      usage: "In de stam schrijf je twee e’s om de lange klank te behouden. In het meervoud valt die extra e weg.",
    },
  ],

  details: [
    {
      title: "De vier basisonderdelen van jezelf voorstellen",
      body: `<p>Met deze vier onderdelen stel je jezelf volledig voor.</p>
      <table class="my-4 rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm w-full">
        <thead>
          <tr class="bg-slate-100 dark:bg-slate-800">
            <th class="px-3 py-2 text-left text-sm font-bold">Onderdeel</th>
            <th class="px-3 py-2 text-left text-sm font-bold">Vraag</th>
            <th class="px-3 py-2 text-left text-sm font-bold">Antwoord (ik-vorm)</th>
          </tr>
        </thead>
        <tbody>
          <tr><td class="px-3 py-1.5">Naam</td><td class="px-3 py-1.5">Hoe heet jij? / Hoe heet u?</td><td class="px-3 py-1.5">Ik heet ...</td></tr>
          <tr><td class="px-3 py-1.5">Leeftijd</td><td class="px-3 py-1.5">Hoe oud ben jij? / Hoe oud bent u?</td><td class="px-3 py-1.5">Ik ben ... jaar (oud).</td></tr>
          <tr><td class="px-3 py-1.5">Woonplaats</td><td class="px-3 py-1.5">Waar woon jij? / Waar woont u?</td><td class="px-3 py-1.5">Ik woon in ...</td></tr>
          <tr><td class="px-3 py-1.5">Nationaliteit / herkomst</td><td class="px-3 py-1.5">Waar kom jij vandaan? / Waar komt u vandaan?</td><td class="px-3 py-1.5">Ik kom uit ... / Ik ben ... (nationaliteit)</td></tr>
          <tr><td class="px-3 py-1.5">Talen</td><td class="px-3 py-1.5">Welke talen spreek jij?</td><td class="px-3 py-1.5">Ik spreek ...</td></tr>
        </tbody>
      </table>`,
    },
    {
      title: "Zijn en hebben – de twee onregelmatige werkwoorden",
      body: `<p><strong>Zijn</strong> en <strong>hebben</strong> zijn onregelmatig en moet je uit je hoofd leren.</p>

      <p><strong>Zijn:</strong></p>
      <table class="my-4 rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm w-full">
        <thead>
          <tr class="bg-indigo-50 dark:bg-indigo-900/30">
            <th class="px-3 py-2 text-left text-sm font-bold text-indigo-700 dark:text-indigo-300">Persoon</th>
            <th class="px-3 py-2 text-left text-sm font-bold text-indigo-700 dark:text-indigo-300">Vorm</th>
          </tr>
        </thead>
        <tbody>
          <tr><td class="px-3 py-1.5">ik</td><td class="px-3 py-1.5">ben</td></tr>
          <tr><td class="px-3 py-1.5">jij / u</td><td class="px-3 py-1.5">bent</td></tr>
          <tr><td class="px-3 py-1.5">hij / zij / het</td><td class="px-3 py-1.5">is</td></tr>
          <tr><td class="px-3 py-1.5">wij / jullie / zij mv</td><td class="px-3 py-1.5">zijn</td></tr>
        </tbody>
      </table>
      <p>Vraag met jij: <strong>Ben jij?</strong><br>Vraag met u: <strong>Bent u?</strong></p>

      <p><strong>Hebben:</strong></p>
      <table class="my-4 rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm w-full">
        <thead>
          <tr class="bg-emerald-50 dark:bg-emerald-900/30">
            <th class="px-3 py-2 text-left text-sm font-bold text-emerald-700 dark:text-emerald-300">Persoon</th>
            <th class="px-3 py-2 text-left text-sm font-bold text-emerald-700 dark:text-emerald-300">Vorm</th>
          </tr>
        </thead>
        <tbody>
          <tr><td class="px-3 py-1.5">ik</td><td class="px-3 py-1.5">heb</td></tr>
          <tr><td class="px-3 py-1.5">jij</td><td class="px-3 py-1.5">hebt</td></tr>
          <tr><td class="px-3 py-1.5">u</td><td class="px-3 py-1.5">hebt / heeft</td></tr>
          <tr><td class="px-3 py-1.5">hij / zij / het</td><td class="px-3 py-1.5">heeft</td></tr>
          <tr><td class="px-3 py-1.5">wij / jullie / zij mv</td><td class="px-3 py-1.5">hebben</td></tr>
        </tbody>
      </table>
      <p>Vraag met jij: <strong>Heb jij?</strong><br>Vraag met u: <strong>Hebt u?</strong> of <strong>Heeft u?</strong></p>

      <blockquote>Let op: <em>hebben</em> gebruik je <strong>nooit</strong> voor leeftijd. In het Nederlands zeg je <strong>ik ben 20 jaar</strong>, niet <em>ik heb 20 jaar</em>.</blockquote>`,
    },
    {
      title: "Heten, wonen, komen, spreken – de regelmatige werkwoorden",
      body: `<p>Deze werkwoorden volgen de standaardregels, maar let op de spelling van de stam.</p>

      <p><strong>Heten</strong> (stam op -t, lange ee)</p>
      <table class="my-4 rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm w-full">
        <thead>
          <tr class="bg-amber-50 dark:bg-amber-900/30">
            <th class="px-3 py-2 text-left text-sm font-bold text-amber-700 dark:text-amber-300">Persoon</th>
            <th class="px-3 py-2 text-left text-sm font-bold text-amber-700 dark:text-amber-300">Vorm</th>
          </tr>
        </thead>
        <tbody>
          <tr><td class="px-3 py-1.5">ik</td><td class="px-3 py-1.5">heet</td></tr>
          <tr><td class="px-3 py-1.5">jij / u</td><td class="px-3 py-1.5">heet</td></tr>
          <tr><td class="px-3 py-1.5">hij / zij / het</td><td class="px-3 py-1.5">heet</td></tr>
          <tr><td class="px-3 py-1.5">wij / jullie / zij mv</td><td class="px-3 py-1.5">heten</td></tr>
        </tbody>
      </table>

      <p><strong>Wonen</strong> (lange oo in stam, stam op -n)</p>
      <table class="my-4 rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm w-full">
        <thead>
          <tr class="bg-indigo-50 dark:bg-indigo-900/30">
            <th class="px-3 py-2 text-left text-sm font-bold text-indigo-700 dark:text-indigo-300">Persoon</th>
            <th class="px-3 py-2 text-left text-sm font-bold text-indigo-700 dark:text-indigo-300">Vorm</th>
          </tr>
        </thead>
        <tbody>
          <tr><td class="px-3 py-1.5">ik</td><td class="px-3 py-1.5">woon</td></tr>
          <tr><td class="px-3 py-1.5">jij / u</td><td class="px-3 py-1.5">woont</td></tr>
          <tr><td class="px-3 py-1.5">hij / zij / het</td><td class="px-3 py-1.5">woont</td></tr>
          <tr><td class="px-3 py-1.5">wij / jullie / zij mv</td><td class="px-3 py-1.5">wonen</td></tr>
        </tbody>
      </table>

      <p><strong>Komen</strong> (korte o, stam op -m)</p>
      <table class="my-4 rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm w-full">
        <thead>
          <tr class="bg-rose-50 dark:bg-rose-900/30">
            <th class="px-3 py-2 text-left text-sm font-bold text-rose-700 dark:text-rose-300">Persoon</th>
            <th class="px-3 py-2 text-left text-sm font-bold text-rose-700 dark:text-rose-300">Vorm</th>
          </tr>
        </thead>
        <tbody>
          <tr><td class="px-3 py-1.5">ik</td><td class="px-3 py-1.5">kom</td></tr>
          <tr><td class="px-3 py-1.5">jij / u</td><td class="px-3 py-1.5">komt</td></tr>
          <tr><td class="px-3 py-1.5">hij / zij / het</td><td class="px-3 py-1.5">komt</td></tr>
          <tr><td class="px-3 py-1.5">wij / jullie / zij mv</td><td class="px-3 py-1.5">komen</td></tr>
        </tbody>
      </table>

      <p><strong>Spreken</strong> (lange ee in stam, stam op -k)</p>
      <table class="my-4 rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm w-full">
        <thead>
          <tr class="bg-emerald-50 dark:bg-emerald-900/30">
            <th class="px-3 py-2 text-left text-sm font-bold text-emerald-700 dark:text-emerald-300">Persoon</th>
            <th class="px-3 py-2 text-left text-sm font-bold text-emerald-700 dark:text-emerald-300">Vorm</th>
          </tr>
        </thead>
        <tbody>
          <tr><td class="px-3 py-1.5">ik</td><td class="px-3 py-1.5">spreek</td></tr>
          <tr><td class="px-3 py-1.5">jij / u</td><td class="px-3 py-1.5">spreekt</td></tr>
          <tr><td class="px-3 py-1.5">hij / zij / het</td><td class="px-3 py-1.5">spreekt</td></tr>
          <tr><td class="px-3 py-1.5">wij / jullie / zij mv</td><td class="px-3 py-1.5">spreken</td></tr>
        </tbody>
      </table>

      <p>Vraag met jij: <strong>woon jij? · kom jij? · spreek jij?</strong><br>
      Bij <em>heten</em>: <strong>heet jij?</strong> (stam op t, dus geen verandering).</p>`,
    },
    {
      title: "Nationaliteit en herkomst",
      body: `<p>Je kunt je nationaliteit op twee manieren uitdrukken:</p>
      <ul>
        <li><strong>ik ben + nationaliteit</strong> → ik ben Belg, ik ben Nederlandse, ik ben Duitser.</li>
        <li><strong>ik kom uit + land</strong> → ik kom uit België, ik kom uit Nederland, ik kom uit Duitsland.</li>
      </ul>

      <table class="my-4 rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm w-full">
        <thead>
          <tr class="bg-indigo-50 dark:bg-indigo-900/30">
            <th class="px-3 py-2 text-left text-sm font-bold">Land</th>
            <th class="px-3 py-2 text-left text-sm font-bold">Nationaliteit (mannelijk)</th>
            <th class="px-3 py-2 text-left text-sm font-bold">Nationaliteit (vrouwelijk)</th>
          </tr>
        </thead>
        <tbody>
          <tr><td class="px-3 py-1.5">België</td><td class="px-3 py-1.5">Belg</td><td class="px-3 py-1.5">Belgische</td></tr>
          <tr><td class="px-3 py-1.5">Nederland</td><td class="px-3 py-1.5">Nederlander</td><td class="px-3 py-1.5">Nederlandse</td></tr>
          <tr><td class="px-3 py-1.5">Duitsland</td><td class="px-3 py-1.5">Duitser</td><td class="px-3 py-1.5">Duitse</td></tr>
          <tr><td class="px-3 py-1.5">Frankrijk</td><td class="px-3 py-1.5">Fransman</td><td class="px-3 py-1.5">Française / Franse</td></tr>
          <tr><td class="px-3 py-1.5">Spanje</td><td class="px-3 py-1.5">Spanjaard</td><td class="px-3 py-1.5">Spaanse</td></tr>
          <tr><td class="px-3 py-1.5">Engeland</td><td class="px-3 py-1.5">Engelsman</td><td class="px-3 py-1.5">Engelse</td></tr>
        </tbody>
      </table>

      <blockquote>Let op: <strong>nooit</strong> <em>ik ben België</em> of <em>ik kom van Nederland</em>. Gebruik altijd <strong>uit</strong> voor herkomst en het bijvoeglijk naamwoord voor nationaliteit.</blockquote>`,
    },
    {
      title: "Eindtoets – Stel jezelf voor in volledige zinnen",
      body: `<p>Beantwoord de volgende vragen in een volledige zin.</p>
      <table class="my-4 rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm w-full">
        <thead>
          <tr class="bg-amber-50 dark:bg-amber-900/30">
            <th class="px-3 py-2 text-left text-sm font-bold">Vraag</th>
            <th class="px-3 py-2 text-left text-sm font-bold">Modelantwoord (aanpassen aan jezelf)</th>
          </tr>
        </thead>
        <tbody>
          <tr><td class="px-3 py-1.5">Hoe heet je?</td><td class="px-3 py-1.5">Ik heet [naam].</td></tr>
          <tr><td class="px-3 py-1.5">Hoe oud ben je?</td><td class="px-3 py-1.5">Ik ben [leeftijd] jaar.</td></tr>
          <tr><td class="px-3 py-1.5">Waar woon je?</td><td class="px-3 py-1.5">Ik woon in [plaats].</td></tr>
          <tr><td class="px-3 py-1.5">Waar kom je vandaan?</td><td class="px-3 py-1.5">Ik kom uit [land].</td></tr>
          <tr><td class="px-3 py-1.5">Welke nationaliteit heb je?</td><td class="px-3 py-1.5">Ik ben [nationaliteit].</td></tr>
          <tr><td class="px-3 py-1.5">Welke talen spreek je?</td><td class="px-3 py-1.5">Ik spreek [talen].</td></tr>
          <tr><td class="px-3 py-1.5">Heet jij [naam]?</td><td class="px-3 py-1.5">Ja, ik heet [naam]. / Nee, ik heet niet [naam].</td></tr>
          <tr><td class="px-3 py-1.5">Woon jij in [plaats]?</td><td class="px-3 py-1.5">Ja, ik woon in [plaats]. / Nee, ik woon niet in [plaats].</td></tr>
          <tr><td class="px-3 py-1.5">Ben jij [leeftijd] jaar?</td><td class="px-3 py-1.5">Ja, ik ben [leeftijd] jaar. / Nee, ik ben niet [leeftijd] jaar.</td></tr>
          <tr><td class="px-3 py-1.5">Kom jij uit [land]?</td><td class="px-3 py-1.5">Ja, ik kom uit [land]. / Nee, ik kom niet uit [land].</td></tr>
        </tbody>
      </table>`,
    },
  ],

  // ── Callouts, commonMistakes, review, qa, exercises (blijven exact hetzelfde) ──
  callouts: [
    {
      type: "key",
      label: "Leeftijd = zijn",
      text: "**Nooit** *ik heb 20 jaar*. Altijd **ik ben 20 jaar**. Het Nederlands gebruikt *zijn* voor leeftijd, *hebben* alleen voor bezit.",
    },
    {
      type: "remember",
      label: "Inversie met jij",
      text: "**jij werkt → werk jij?** De -t valt weg. **jij bent → ben jij?** (onregelmatig). Alleen *heet jij?* blijft gelijk omdat de stam al op een t eindigt.",
    },
    {
      type: "tip",
      label: "U behoudt de t",
      text: "**u woont → woont u?** *U* krijgt altijd de volledige persoonsvorm en verliest nooit de -t, ook niet in een vraag.",
    },
    {
      type: "note",
      label: "Nationaliteit of land?",
      text: "**ik ben Belg** (nationaliteit) maar **ik kom uit België** (land). Gebruik nooit *ik ben België* of *ik kom van Nederland*.",
    },
    {
      type: "key",
      label: "Heten zonder extra t",
      text: "De stam is **heet**. Jij-vorm = **heet** (geen extra t). Vraag: **heet jij?** — er valt niets weg.",
    },
  ],

  commonMistakes: [
    { incorrect: "Ik heten Anna", correct: "Ik heet Anna", explanation: "Ik-vorm = stam heet, niet het hele werkwoord." },
    { incorrect: "Hoe heet jij? (correct)", correct: "Hoe heet jij?", explanation: "Stam op t, blijft heet; inversie verandert niets." },
    { incorrect: "Ik heb 20 jaar", correct: "Ik ben 20 jaar", explanation: "Leeftijd met *zijn*, niet *hebben*." },
    { incorrect: "Jij bent 20 jaar (correct)", correct: "Jij bent 20 jaar", explanation: "*Zijn* juist gebruikt." },
    { incorrect: "U is mevrouw De Vries", correct: "U bent mevrouw De Vries", explanation: "U krijgt altijd *bent*, nooit *is*." },
    { incorrect: "Hij ben 30", correct: "Hij is 30", explanation: "Hij/zij/het krijgt *is*." },
    { incorrect: "Jij kom uit België", correct: "Jij komt uit België", explanation: "Jij-vorm = stam + t." },
    { incorrect: "Kom jij uit België? (correct)", correct: "Kom jij uit België?", explanation: "Inversie: t valt weg." },
    { incorrect: "Woont jij in Amsterdam?", correct: "Woon jij in Amsterdam?", explanation: "Inversie jij: t valt weg." },
    { incorrect: "Ik spreek Nederlands (correct)", correct: "Ik spreek Nederlands", explanation: "Stam spreek (dubbele ee)." },
    { incorrect: "Jij spreek Nederlands", correct: "Jij spreekt Nederlands", explanation: "Jij-vorm + t." },
    { incorrect: "Spreek jij Nederlands? (correct)", correct: "Spreek jij Nederlands?", explanation: "Inversie: t valt weg." },
    { incorrect: "Ik ben Belgie", correct: "Ik ben Belg", explanation: "Nationaliteit is Belg, niet het land." },
    { incorrect: "Ik kom van Nederland", correct: "Ik kom uit Nederland", explanation: "Herkomst: *uit*, niet *van*." },
    { incorrect: "Ik spreek goed Nederlands (correct)", correct: "Ik spreek goed Nederlands", explanation: "Werkwoord *spreken* correct." },
  ],

  review: [
    "**Zijn**: ik ben, jij bent, u bent, hij is, wij zijn. Leeftijd met *zijn* (ik ben 30 jaar).",
    "**Hebben**: alleen voor bezit (ik heb een fiets), nooit voor leeftijd.",
    "**Heten**: stam heet, geen extra t. Ik heet, jij heet, hij heet. Vraag: heet jij?",
    "**Wonen**: stam woon + t. Jij woont, inversie: woon jij?",
    "**Komen uit**: ik kom uit, jij komt uit, inversie: kom jij uit?",
    "**Spreken**: ik spreek, jij spreekt, inversie: spreek jij?",
    "**Inversie jij**: -t valt weg (behalve bij heten). Bij *zijn*: ben jij. Bij *hebben*: heb jij.",
    "**U**: altijd *bent*, *hebt/heeft*, *woont*, *komt*, *spreekt*. Geen -t-verlies.",
    "**Nationaliteit**: ik ben + bijvoeglijk naamwoord (Nederlands, Belg, Duits, Frans).",
  ],

  qa: [
    { question: "Hoe ... (heten) jij?", answer: "heet" },
    { question: "Ik ... (heten) Anna.", answer: "heet" },
    { question: "Mijn broer ... (heten) Thomas.", answer: "heet" },
    { question: "... (heten) u mevrouw De Vries?", answer: "Heet" },
    { question: "Hoe oud ... (zijn) jij?", answer: "ben" },
    { question: "Ik ... (zijn) 25 jaar.", answer: "ben" },
    { question: "... (zijn) u 30 jaar?", answer: "Bent" },
    { question: "Mijn zus ... (zijn) 18 jaar.", answer: "is" },
    { question: "Waar ... (wonen) jij?", answer: "woon" },
    { question: "Ik ... (wonen) in Den Haag.", answer: "woon" },
    { question: "... (wonen) u hier al lang?", answer: "Woont" },
    { question: "Mijn ouders ... (wonen) in Rotterdam.", answer: "wonen" },
    { question: "Waar ... (komen) jij vandaan?", answer: "kom" },
    { question: "Ik ... (komen) uit Suriname.", answer: "kom" },
    { question: "... (komen) u uit Nederland?", answer: "Komt" },
    { question: "Mijn vriendin ... (komen) uit Duitsland.", answer: "komt" },
    { question: "Welke talen ... (spreken) jij?", answer: "spreek" },
    { question: "Ik ... (spreken) Nederlands en Engels.", answer: "spreek" },
    { question: "... (spreken) u Frans?", answer: "Spreekt" },
    { question: "Mijn leraar ... (spreken) vier talen.", answer: "spreekt" },
    { question: "... (zijn) jij Belg?", answer: "Ben" },
    { question: "Nee, ik ... (zijn) Nederlander.", answer: "ben" },
    { question: "... (hebben) jij een auto?", answer: "Heb" },
    { question: "Ik ... (hebben) geen auto, ik ... (hebben) een fiets.", answer: "heb, heb" },
    { question: "Wat ... (doen) jij vanavond?", answer: "doe" },
  ],

  exercises: [
    {
      question: "Wat is de juiste ik-vorm van 'heten'?",
      options: ["heet", "heten", "heett", "het"],
      answer: "heet",
    },
    {
      question: "Hoe oud ... jij?",
      options: ["bent", "ben", "is", "zijn"],
      answer: "ben",
    },
    {
      question: "Waar ... u?",
      options: ["woont", "woon", "wonen", "woont u"],
      answer: "woont",
    },
    {
      question: "Welke vraag is correct?",
      options: ["Hoe heet jij?", "Hoe heten jij?", "Hoe heet je?", "Hoe heet jij"],
      answer: "Hoe heet jij?",
    },
    {
      question: "Ik ... uit Spanje.",
      options: ["kom", "komt", "komen", "ben"],
      answer: "kom",
    },
    {
      question: "... jij Nederlands?",
      options: ["Spreek", "Spreekt", "Spreken", "Spreekt jij"],
      answer: "Spreek",
    },
  ],
}, {
  id: "nl-groeten-afscheid-1",
  title: "Groeten en afscheid nemen (formeel & informeel)",
  level: 1,
  topic: "Pragmatiek",
  body: "Alles over begroetingen en afscheidswoorden in het Nederlands, met het onderscheid tussen formeel (u) en informeel (jij). Inclusief werkwoorden, vraagvormen, inversie en veelgemaakte fouten.",
  overview:
    "Formeel groet je met *goedemorgen*, *goedemiddag*, *goedenavond* of *goedendag* en neem je afscheid met *tot ziens* of *dag*. Je gebruikt dan altijd **u**. Informeel groet je met *hoi*, *hallo* of *hey* en neem je afscheid met *doei* of *tot later*. Je gebruikt dan **jij/je**.",

  // ── Conjugation table: gaan, zijn, maken ──────────────────────────
  conjugationTable: {
    header: "Persoon|Gaan|Zijn|Maken",
    rows: [
      ["ik", "ga", "ben", "maak"],
      ["jij / u", "gaat", "bent", "maakt"],
      ["hij / zij / het", "gaat", "is", "maakt"],
      ["wij / jullie / zij mv", "gaan", "zijn", "maken"],
    ],
  },

  // ── Rules cards ────────────────────────────────────────────────────
  rulesTable: [
    {
      rule: "Formeel vs. informeel: u en jij",
      structure: "Formeel: u + begroeting (goedemorgen, etc.)\nInformeel: jij/je + begroeting (hoi, etc.)",
      example: "Formeel: Goedemorgen, hoe gaat het met u?\nInformeel: Hoi, hoe gaat het met jou?",
      usage: "Na een formele begroeting gebruik je altijd 'u'. Na een informele begroeting gebruik je 'jij' of 'je'.",
    },
    {
      rule: "Hoe gaat het? – structuur van de vraag",
      structure: "Vraagwoord + persoonsvorm + onderwerp\n(Hoe + gaat + het?)",
      example: "Hoe gaat het? / Hoe gaat het met u? / Hoe gaat het met jou?",
      usage: "De vaste uitdrukking 'Hoe gaat het?' gebruik je na de begroeting. Het onderwerp is 'het', de persoonsvorm is 'gaat' (3e persoon enkelvoud).",
    },
    {
      rule: "Dag: universeel begroeting en afscheid",
      structure: "Dag kan informeel en formeel gebruikt worden; de toon en het voornaamwoord maken het verschil.",
      example: "Dag meneer (formeel) / Dag, hoe is het? (informeel)\nBij afscheid: Dag! (formeel of informeel)",
      usage: "Let op: 'dag' is niet alleen voor afscheid. Combineer altijd met het juiste voornaamwoord (u/jij) om het register te bepalen.",
    },
    {
      rule: "Inversie: jij verliest -t",
      structure: "jij + werkwoord (stam+t) → werkwoord(stam) + jij?\nBij onregelmatige werkwoorden: jij bent → ben jij?",
      example: "Ga jij? (jij gaat → ga jij)\nBen jij? (jij bent → ben jij)\nMaak jij? (jij maakt → maak jij)",
      usage: "In vraagzinnen waar 'jij' achter de persoonsvorm staat, verdwijnt de -t. Bij 'u' blijft de -t altijd staan.",
    },
    {
      rule: "Werkwoorden: gaan, zijn, maken",
      structure: "Drie belangrijke werkwoorden bij groeten:\n- gaan voor 'Hoe gaat het?'\n- zijn voor 'Hoe is het?'\n- maken voor 'Hoe maakt u het?' (formeel)",
      example: "Hoe gaat het? → Het gaat goed.\nHoe is het? → Het is goed.\nHoe maakt u het? → Ik maak het goed.",
      usage: "Gebruik 'gaan' in de standaardvraag. 'Maken' is formeler en vooral met 'u'. 'Zijn' is neutraal maar minder gebruikelijk.",
    },
    {
      rule: "Goedenacht is geen begroeting",
      structure: "Goedenacht gebruik je alleen bij het slapengaan, niet als begroeting bij aankomst.",
      example: "Juist: Goedenavond (bij binnenkomst 's avonds).\nFout: Goedenacht, hoe gaat het? (als je iemand ontmoet)",
      usage: "Voor begroeting in de avond gebruik je 'goedenavond'. 'Goedenacht' betekent 'welterusten'.",
    },
  ],

  // ── Detailed accordion sections ────────────────────────────────────
  details: [
    {
      title: "Alle begroetingen – formeel en informeel",
      body: `### Formele begroetingen

| Tijd | Begroeting | Gebruik |
|------|------------|---------|
| Ochtend (00:00-12:00) | Goedemorgen | Zeer gebruikelijk, ook in winkels/kantoren |
| Middag (12:00-18:00) | Goedemiddag | Formeel, iets minder frequent |
| Avond (18:00-00:00) | Goedenavond | Formeel, bij binnenkomst in de avond |
| Altijd | Goedendag | Universeel formeel, ook als afscheid |
| Altijd | Dag | Kan formeel en informeel |
| Altijd | Hallo | Neutraal, kan met 'u' |

### Informele begroetingen

| Begroeting | Gebruik |
|------------|---------|
| Hoi | Zeer informeel, vrienden, familie |
| Hey | Informeel, vaak onder vrienden |
| Hallo | Neutraal, informeel of semi-formeel |
| Dag | Informeel met 'jij' |
| Hoi hoi | Extra informeel, vrolijk |
| Yo | Straattaal, zeer informeel |`,
    },
    {
      title: "Alle afscheidsgroeten – formeel en informeel",
      body: `### Formeel afscheid

| Afscheid | Betekenis / opmerking |
|----------|----------------------|
| Tot ziens | Standaard formeel, “au revoir” |
| Dag | Kan zowel begroeting als afscheid zijn |
| Goedendag | Formeel, vooral als afscheid |
| Goedemorgen / -middag / -avond | Kan ook bij afscheid, minder frequent |
| Tot horens | Vooral telefonisch formeel |
| Het beste | Informeel, maar ook netjes |
| Prettige dag (nog) | Formeel, winkelpersoneel tegen klant |

### Informeel afscheid

| Afscheid | Gebruik |
|----------|---------|
| Doei | Standaard informeel |
| Doei doei | Iets nadrukkelijker, vrolijk |
| Tot later | Zie je later |
| Tot zo | Binnen enkele uren/minuten |
| Tot straks | Zie je straks |
| Tot morgen | Tot morgen |
| Ik zie je (nog) | Informeel |
| Later! | Zeer informeel |
| Houdoe | Brabants, informeel |
| Joe | Jongerentaal |
| Zie je / spreek je | Informeel |`,
    },
    {
      title: "Werkwoorden en vraagvormen",
      body: `De standaardvraag na een begroeting is **Hoe gaat het?**. Die kun je formeel en informeel maken.

| Formeel | Informeel |
|---------|-----------|
| Hoe gaat het met u? | Hoe gaat het met jou? |
| Hoe maakt u het? | Hoe gaat het? / Hoe is het? |
| Alles goed met u? | Alles goed met jou? |

**Grammatica:**
- *Gaat* is de hij‑vorm van *gaan* (het = onderwerp, 3e persoon enkelvoud).
- Vraagstructuur: vraagwoord – persoonsvorm – onderwerp (Hoe gaat het?).
- Bij *met u* of *met jou* blijft de persoonsvorm *gaat*.
- **Inversie met jij:** jij gaat → **ga jij?**; jij bent → **ben jij?**; jij maakt → **maak jij?**
- **U** behoudt altijd de persoonsvorm met -t: **gaat u?**, **bent u?**, **maakt u?**.

**Werkwoord *zijn* in ‘Hoe is het?’**

| Persoon | Vorm |
|---------|------|
| ik | ben |
| jij / u | bent |
| hij / zij / het | is |
| wij / jullie / zij mv | zijn |

**Antwoordmogelijkheden:**
- Het gaat goed.
- Het is goed.
- Goed. / Prima. / Wel goed.`,
    },
{
       title: "Veelgemaakte fouten – uitgebreide uitleg",
       body: `**Let op de combinatie van begroeting en aanspreekvorm.**

1. **Goedemorgen, hoe gaat het met jou?** → **Goedemorgen, hoe gaat het met u?**  
   Formele begroeting → altijd u

2. **Hoi, hoe gaat het met u?** → **Hoi, hoe gaat het met jou? / Hoe gaat het met je?**  
   Informele begroeting → jij/je

3. **Hoe gaat u?** → **Hoe gaat het met u? / Hoe maakt u het?**  
   Minder gebruikelijk; beter met 'het' of 'maken'

4. **Goedenacht als begroeting** → **Goedenavond (bij aankomst)**  
   Goedenacht is alleen voor slapengaan

5. **Hoe het gaat?** → **Hoe gaat het?**  
   Juiste woordvolgorde: vraagwoord + persoonsvorm + onderwerp

6. **Dag meneer, doei!** → **Dag meneer, tot ziens! (of: Doei, meneer!)**  
   Meng geen formeel en informeel in één zin

**Verwarrend:** *dag* kan zowel formeel als informeel en zowel begroeting als afscheid zijn. De intonatie en het voornaamwoord bepalen de betekenis.`,
     },
    {
      title: "Eindtoets – Volledige dialogen",
      body: `Vul de juiste begroeting, vraag en afscheid in.

**Situatie 1: Formeel – U bent bij de dokter (14:00)**
- Begroeting: Goedemiddag.
- Vraag hoe het gaat: Hoe gaat het met u? / Hoe maakt u het?
- Afscheid: Tot ziens. / Prettige dag nog.

**Situatie 2: Informeel – U ziet uw beste vriend in het park**
- Begroeting: Hoi! / Hey! / Hallo!
- Vraag hoe het gaat: Hoe gaat het? / Hoe is het met jou?
- Afscheid na tien minuten: Doei! / Tot later! / Ik zie je!

**Situatie 3: Telefonisch formeel – U belt naar de gemeente**
- Opnemen: Goedemorgen, u spreekt met [uw naam].
- Vraag naar persoon: Zou ik [naam] kunnen spreken? / Kunt u mij doorverbinden met [afdeling]?
- Bedanken en afscheid: Dank u wel. Tot horens. / Goedendag.`,
    },
  ],

  // ── Callouts ───────────────────────────────────────────────────────
  callouts: [
    {
      type: "key",
      label: "U of jij?",
      text: "Bij formele begroetingen (goedemorgen, goedendag) hoort **altijd u**. Bij informele (hoi, hey) hoort **jij/je**.",
    },
    {
      type: "remember",
      label: "Dag is universeel",
      text: "**Dag** kan formeel en informeel, en zowel begroeting als afscheid. Let op de context en het voornaamwoord.",
    },
    {
      type: "tip",
      label: "Goedenacht ≠ begroeting",
      text: "**Goedenacht** gebruik je alleen bij het slapengaan. Voor een begroeting in de avond gebruik je **goedenavond**.",
    },
    {
      type: "key",
      label: "Inversie: jij verliest -t",
      text: "**jij gaat → ga jij?**; **jij bent → ben jij?**; **jij maakt → maak jij?**. Bij **u** blijft de -t altijd: **gaat u?**",
    },
    {
      type: "note",
      label: "Hoe gaat het?",
      text: "De vaste uitdrukking is **Hoe gaat het?** (vraagwoord + persoonsvorm + onderwerp). Nooit *Hoe het gaat?*",
    },
  ],

  // ── Common mistakes ────────────────────────────────────────────────
  commonMistakes: [
    {
      incorrect: "Goedemorgen, hoe gaat het met jou?",
      correct: "Goedemorgen, hoe gaat het met u?",
      explanation: "Formele begroeting → formeel vervolg met *u*.",
    },
    {
      incorrect: "Hoi, hoe gaat het met u?",
      correct: "Hoi, hoe gaat het met je?",
      explanation: "Informele begroeting → *jij/je*, niet *u*.",
    },
    {
      incorrect: "Hoe gaat u?",
      correct: "Hoe gaat het met u? / Hoe maakt u het?",
      explanation: "Minder gebruikelijk; beter met 'het' of 'maken'.",
    },
    {
      incorrect: "Dag meneer, hoe maak jij het?",
      correct: "Dag meneer, hoe maakt u het?",
      explanation: "Meneer → altijd *u*.",
    },
    {
      incorrect: "Tot ziens! Doei! (tegen dezelfde persoon)",
      correct: "Kies één register: Tot ziens (formeel) of Doei (informeel).",
      explanation: "Meng geen formeel en informeel in één zin.",
    },
    {
      incorrect: "Doeidoei tegen de koning",
      correct: "Dag majesteit / Goedendag",
      explanation: "Informeel past niet bij hoge formaliteit.",
    },
    {
      incorrect: "Tot ziens! (tegen een vriend)",
      correct: "Doei! / Tot later!",
      explanation: "*Tot ziens* is formeel; vreemd onder vrienden.",
    },
    {
      incorrect: "Goedenacht als begroeting",
      correct: "Goedenavond (bij aankomst)",
      explanation: "*Goedenacht* is alleen voor slapengaan.",
    },
    {
      incorrect: "Hoe het gaat?",
      correct: "Hoe gaat het?",
      explanation: "Woordvolgorde: vraagwoord + persoonsvorm + onderwerp.",
    },
    {
      incorrect: "Hallo, ik heet Jan, hoe heet u? (informeel)",
      correct: "Hallo, ik heet Jan, hoe heet jij?",
      explanation: "*Hallo* kan met *jij* als je jongeren onder elkaar bent; bij twijfel is *u* veiliger, maar hier is de mix fout.",
    },
  ],

  // ── Quick review ───────────────────────────────────────────────────
  review: [
    "**U** gebruik je bij formele begroetingen (goedemorgen, goedendag, dag meneer/mevrouw).",
    "**Jij/je** gebruik je bij informele begroetingen (hoi, hey, hallo tegen vrienden).",
    "De standaardvraag na een begroeting is **Hoe gaat het?**; formeel: **Hoe gaat het met u?**; informeel: **Hoe gaat het met jou?**.",
    "**Dag** is universeel, maar toon en voornaamwoord bepalen formeel/informeel.",
    "Formeel afscheid: **Tot ziens**, **Dag**, **Prettige dag nog**.",
    "Informeel afscheid: **Doei**, **Tot later**, **Tot zo**, **Ik zie je**.",
    "Pas op: **Goedenacht** is geen begroeting, alleen bij slapengaan.",
    "**Inversie** bij vragen: *Hoe gaat het?*; *Hoe maakt u het?*; *jij gaat → ga jij?*.",
  ],

  // ── Practice questions (tap to reveal) ─────────────────────────────
  qa: [
    { question: "Situatie 1 (dokter 14:00): Wat is de juiste begroeting?", answer: "Goedemiddag." },
    { question: "Situatie 1: Hoe vraag je formeel hoe het met de dokter gaat?", answer: "Hoe gaat het met u? / Hoe maakt u het?" },
    { question: "Situatie 1: Hoe neem je afscheid van de dokter?", answer: "Tot ziens. / Prettige dag nog." },
    { question: "Situatie 2 (vriend in park): Wat is een passende begroeting?", answer: "Hoi! / Hey! / Hallo!" },
    { question: "Situatie 2: Hoe vraag je informeel hoe het met je vriend gaat?", answer: "Hoe gaat het? / Hoe is het met jou?" },
    { question: "Situatie 2: Hoe neem je na tien minuten afscheid?", answer: "Doei! / Tot later! / Ik zie je!" },
    { question: "Situatie 3 (formeel telefoongesprek): Hoe neem je op?", answer: "Goedemorgen, u spreekt met [naam]." },
    { question: "Situatie 3: Hoe vraag je naar een persoon?", answer: "Zou ik [naam] kunnen spreken? / Kunt u mij doorverbinden met [afdeling]?" },
    { question: "Situatie 3: Hoe bedank je en neem je afscheid?", answer: "Dank u wel. Tot horens. / Goedendag." },
  ],

  // ── Multiple-choice exercises ──────────────────────────────────────
  exercises: [
    {
      question: "Je ontmoet de directeur van een bedrijf om 10:00 uur. Wat zeg je?",
      options: ["Hoi", "Goedemorgen", "Hey", "Doei"],
      answer: "Goedemorgen",
    },
    {
      question: "Je komt een vriendin tegen. Wat zeg je?",
      options: ["Goedendag mevrouw", "Hoi", "Tot ziens", "Goedenavond"],
      answer: "Hoi",
    },
    {
      question: "Je beëindigt een formeel gesprek met een klant. Wat zeg je?",
      options: ["Doei", "Tot ziens", "Later", "Joe"],
      answer: "Tot ziens",
    },
    {
      question: "Je neemt afscheid van je broer. Wat zeg je?",
      options: ["Prettige dag nog", "Doei", "Tot ziens", "Goedendag"],
      answer: "Doei",
    },
    {
      question: "Wat is de formele begroeting in de avond?",
      options: ["Goedemorgen", "Goedenavond", "Goedemiddag", "Hallo"],
      answer: "Goedenavond",
    },
    {
      question: "Hoe vraag je formeel hoe het met iemand gaat?",
      options: ["Hoe gaat het met jou?", "Hoe gaat het met u?", "Hoe is het met je?", "Alles goed?"],
      answer: "Hoe gaat het met u?",
    },
    {
      question: "Hoe vraag je informeel hoe het met iemand gaat?",
      options: ["Hoe gaat het met u?", "Hoe maakt u het?", "Hoe gaat het met jou?", "Hoe gaat het met mevrouw?"],
      answer: "Hoe gaat het met jou?",
    },
    {
      question: "Wat is fout?",
      options: [
        "Goedemorgen, hoe gaat het met u?",
        "Hoi, hoe gaat het met u?",
        "Dag mevrouw, hoe maakt u het?",
        "Goedenavond meneer, alles goed met u?",
      ],
      answer: "Hoi, hoe gaat het met u?",
    },
    {
      question: "Hoe verbeter je: 'Goedemiddag, hoe gaat het met je?' (tegen een onbekende oudere dame)",
      options: [
        "Goedemiddag, hoe gaat het met u?",
        "Hoi, hoe gaat het met u?",
        "Goedemiddag, hoe gaat het met jou?",
        "Dag, hoe gaat het met je?",
      ],
      answer: "Goedemiddag, hoe gaat het met u?",
    },
    {
      question: "Wat is de juiste woordvolgorde?",
      options: ["Hoe het gaat?", "Hoe gaat het?", "Gaat hoe het?", "Het gaat hoe?"],
      answer: "Hoe gaat het?",
    },
    {
      question: "Wat is het verschil tussen 'Tot zo' en 'Tot ziens'?",
      options: [
        "Geen verschil",
        "'Tot zo' is binnenkort, 'Tot ziens' is onbepaald en formeler",
        "'Tot zo' is formeel, 'Tot ziens' informeel",
        "'Tot zo' gebruik je alleen telefonisch",
      ],
      answer: "'Tot zo' is binnenkort, 'Tot ziens' is onbepaald en formeler",
    },
    {
      question: "Je loopt een winkel binnen, de verkoper zegt: 'Goedemiddag'. Wat antwoord jij?",
      options: ["Hoi", "Goedemiddag", "Doei", "Tot ziens"],
      answer: "Goedemiddag",
    },
    {
      question: "Je belt naar een bedrijf en neemt op. Wat zeg je?",
      options: [
        "Hallo, met mij",
        "Goedemorgen, u spreekt met [naam]",
        "Hey, ik ben [naam]",
        "Dag, met [naam]",
      ],
      answer: "Goedemorgen, u spreekt met [naam]",
    },
    {
      question: "Je sluit een e-mail aan een vriend af met:",
      options: ["Met vriendelijke groet", "Groetjes", "Hoogachtend", "Tot horens"],
      answer: "Groetjes",
    },
    {
      question: "Is 'Dag' alleen een afscheid?",
      options: ["Ja", "Nee, het is ook een begroeting"],
      answer: "Nee, het is ook een begroeting",
    },
  ],
}, {
    id: "nl-uitspraak-1",
    title: "Uitspraak & Klanken",
    level: 1,
    topic: "Uitspraak",
    body: "Een compleet overzicht van de Nederlandse uitspraak: het alfabet, klinkers, medeklinkers, tweeklanken en de belangrijkste regels.",
    overview:
      "Nederlands heeft een rijke klankleer met korte en lange klinkers, echte tweeklanken en bijzondere medeklinkers zoals de harde g en eindklankverscherping. In deze les leer je alles van A tot Z — inclusief valkuilen en oefenvragen.",

    // ── Alphabet table (timeExpressions slot) ──────────────────────────
    timeExpressions: {
      header: "Letter|Naam|Klank(en)|Voorbeeld",
      rows: [
        ["A", "'aa'", "kort a / lang aa / doffe a", "kat · maan · bruikbaar"],
        ["B", "'bee'", "b (woordeinde → p)", "been · web → wep"],
        ["C", "'see'", "k vóór a/o/u · s vóór e/i", "club · cel"],
        ["D", "'dee'", "d (woordeinde → t)", "dak · hond → hont"],
        ["E", "'ee'", "kort e / lang ee / doffe e (sjwa)", "bed · heel · de"],
        ["F", "'ef'", "f", "fiets"],
        ["G", "'gee'", "harde g (raspend, = ch)", "goed · lachen"],
        ["H", "'haa'", "h", "huis"],
        ["I", "'ie'", "kort i / lang ie", "pit · lief"],
        ["J", "'jee'", "j (als Engelse y)", "ja"],
        ["K", "'kaa'", "k", "kat"],
        ["L", "'el'", "l", "land"],
        ["M", "'em'", "m", "maan"],
        ["N", "'en'", "n · vóór k/g als ng", "neus · denken"],
        ["O", "'oo'", "kort o / lang oo", "pot · boom"],
        ["P", "'pee'", "p", "paard"],
        ["Q", "'kuu'", "kw", "quiz"],
        ["R", "'er'", "rollend · keel-r of Gooise r", "rood"],
        ["S", "'es'", "s", "slang"],
        ["T", "'tee'", "t", "tafel"],
        ["U", "'uu'", "kort u / lang uu", "put · muur"],
        ["V", "'vee'", "v (nooit aan woordeinde)", "vader · lief"],
        ["W", "'wee'", "zachte w (tussen v en w)", "water"],
        ["X", "'iks'", "ks", "examen"],
        ["Y", "'ei' of 'i-grec'", "ie of ei/ij", "yoghurt · y-as"],
        ["Z", "'zet'", "z (woordeinde → s)", "zee · huis → huiss"],
      ],
    },

    // ── Rules cards ────────────────────────────────────────────────────
    rulesTable: [
      {
        rule: "Open en gesloten lettergreep",
        structure: "Gesloten (eindigt op medeklinker) = korte klinker\nOpen (eindigt op klinker) = lange klinker",
        example: "kat (gesloten, kort) · ma-nen (open, lang aa)",
        usage: "Bepaalt altijd de klinkerlengte. Dit is de ijzeren basisregel van de Nederlandse spelling en uitspraak.",
      },
      {
        rule: "Dubbele medeklinker = korte klinker",
        structure: "Korte klinker behouden → verdubbel de medeklinker",
        example: "kat → katten · bed → bedden · bom → bommen",
        usage: "Zonder dubbele medeklinker zou de lettergreep open worden en de klinker lang klinken.",
      },
      {
        rule: "Doffe e (sjwa)",
        structure: "Zwakke lettergrepen bevatten een sjwa: ə",
        example: "lopen → lopuh · vrolijk → vroo-luhk · de, te, je, me, we",
        usage: "De sjwa is de meest voorkomende klank in het Nederlands. Nooit de volle e uitspreken in zwakke lettergrepen.",
      },
      {
        rule: "Eindklankverscherping",
        structure: "Stemhebbende medeklinker aan het woordeinde → stemloos",
        example: "hond → hont · web → wep · huis → huiss",
        usage: "Zodra een klinker volgt keert de stem terug: honden (d), huizen (z), webben (b).",
      },
      {
        rule: "g en ch zijn gelijk",
        structure: "g = ch = raspende keelklank (als in Schots loch)",
        example: "goed · dag · lachen · ligt — licht en ligt klinken gelijk",
        usage: "Nooit de g als zachte Engelse g uitspreken. Altijd de harde keelklank.",
      },
      {
        rule: "sch = s + ch",
        structure: "sch wordt uitgesproken als s gevolgd door de harde ch",
        example: "school = s-ch-ool (niet sjool) · schip · schoon",
        usage: "Nooit als Engelse sh uitspreken. De s en ch zijn beide hoorbaar.",
      },
      {
        rule: "ng en nk",
        structure: "ng = één nasale klank (als Engels sing)\nnk = ng + k",
        example: "ring · zingen · bank (= bang-k)",
        usage: "De g in ng wordt niet apart uitgesproken. Bij nk klinkt de k duidelijk door.",
      },
      {
        rule: "w is labiodentaal",
        structure: "Nederlandse w = zachte v-achtige klank (niet Engelse w)",
        example: "water · wereld · wiel",
        usage: "De lippen raken elkaar niet zoals bij de Engelse w. De tanden en lip raken elkaar lichtjes.",
      },
    ],

    // ── Conjugation table: Klinkers overzicht ─────────────────────────
    conjugationTable: {
      header: "Type|Kort|Lang|Bijzonderheid",
      rows: [
        ["a-klank", "a — kat", "aa — maan", "Dubbel aa in gesloten lettergreep"],
        ["e-klank", "e — pet", "ee — peet", "Doffe e (sjwa) in: de, lopen, -lijk"],
        ["i-klank", "i — pit", "ie — lief", "ie altijd lang, ook in open lettergreep"],
        ["o-klank", "o — pot", "oo — boom", "oe = lange klinker: boek, moeder"],
        ["u-klank", "u — put", "uu — muur", "eu = zuivere lange klinker: neus, deur"],
        ["Tweeklank ei/ij", "—", "/ɛi/", "eind · tijd · meisje — identiek aan ou/au"],
        ["Tweeklank au/ou", "—", "/ʌu/", "auto · hout · blauw — identiek aan ei/ij"],
        ["Tweeklank ui", "—", "/œy/", "huis · muis · duim — getuite u + ie-glide"],
      ],
    },

    // ── Detailed accordion sections ────────────────────────────────────
    details: [
      {
        title: "Klinkers: kort, lang en de doffe e",
        body: `**IJzeren regel:** de lettergreepstructuur bepaalt de klinkerlengte.

• **Gesloten lettergreep** (eindigt op medeklinker) = korte klinker: *kat, bed, pit, pot, put*
• **Lange klinker in gesloten lettergreep** = twee klinkertekens: *maan, been, wiel, boom, muur*
• **Open lettergreep** (eindigt op klinker) = één klinkerteken maar lang geluid: *ma-nen, be-ken, bo-men, mu-ren*

**De doffe e / sjwa (ə)**
De sjwa is de meest voorkomende klank in het Nederlands en komt voor in alle zwakke lettergrepen. Voorbeelden: *de, te, je, me, we* en uitgangen op *-en*: *lopen* klinkt als *lopuh*, niet *lópen*. Ook in *-lijk*: *vrolijk* → *vroo-luhk*.

**Bijzonderheden:**
• *ie* is altijd lang — ook in open lettergreep schrijf je *ie*: *lie-ve*
• *oe* is een lange klinker: *boek, moeder*
• *eu* is een **zuivere lange klinker** (geen tweeklank!): *neus, deur, leuk* — zoals Frans *peur*`,
      },
      {
        title: "Tweeklanken (diftongen): de echte glijders",
        body: `Tweeklanken zijn klanken waarbij de mond tijdens de uitspraak beweegt van de ene klinkerpositie naar de andere.

| Tweeklank | IPA | Omschrijving | Voorbeeld |
|-----------|-----|--------------|-----------|
| ei / ij | /ɛi/ | Korte e + ie-glide | eind, tijd, meisje |
| au / ou | /ʌu/ | Open a + oe-glide | auto, hout, blauw |
| ui | /œy/ | Getuite korte u + ie-glide | huis, muis, duim |

> *ei/ij* en *au/ou* zijn exact dezelfde klank — er is geen enkel verschil in uitspraak!

**Combinaties met halfklinkers** (lange klinker + j/w):

| Combinatie | Uitspraak | Voorbeeld |
|------------|-----------|-----------|
| aai | aa + i | draai |
| ooi | oo + i | mooi |
| oei | oe + i | groei |
| eeuw | ee + oe | leeuw |
| ieuw | ie + oe | nieuw |
| uw | uu + w | duw |

**Let op:** *eu* is géén tweeklank maar een zuivere, lange klinker. De mond beweegt niet!`,
      },
      {
        title: "Medeklinkers: de grote valkuilen",
        body: `**g en ch — identiek**
De *g* en *ch* zijn in het Nederlands dezelfde raspende keelklank (velaire fricatief), vergelijkbaar met de Schotse uitspraak van *loch*. *Licht* en *ligt* klinken daardoor precies hetzelfde.

**sch = s + ch**
De combinatie *sch* wordt uitgesproken als een gewone *s* gevolgd door de harde *ch*-klank. Nooit als de Engelse *sh*! Dus *school* = s-ch-ool, niet *sjool*.

**ng en nk**
• *ng* is één enkele nasale klank, zoals in het Engelse *sing*: *ring, zingen*
• *nk* = ng + k: *bank* klinkt als *bang-k*

**Eindklankverscherping (finale devoicing)**
Aan het woordeinde worden stemhebbende medeklinkers stemloos:
• d → t: *hond → hont, bed → bet*
• b → p: *web → wep, heb → hep*
• z → s: *huis → huiss, reis → reiss*

Zodra er een klinker volgt keert de oorspronkelijke klank terug: *honden* (d), *huizen* (z), *webben* (b).

**Overige bijzonderheden**
• *r* mag rollend, keel-r of Gooise r zijn — alle varianten zijn correct
• *w* is een zachte v-achtige klank (labiodentaal), niet de Engelse bilabiale *w*
• *j* klinkt als de Engelse *y* in *yes*
• *sj* = Engelse *sh*: *sjaal, douche*`,
      },
      {
        title: "Spellingregels en klinkerlengtecontrole",
        body: `De Nederlandse spelling is grotendeels fonetisch en volgt vaste regels voor klinkerlengtecontrole.

**Regel 1 — Open lettergreep = lange klinker (één letter)**
*la-ten, bo-men, mu-ren, be-ken*

**Regel 2 — Gesloten lettergreep = korte klinker**
*kat, bed, pit, pot, put*

**Regel 3 — Gesloten lettergreep met lange klinker = dubbel klinkerteken**
*maan, been, boom, muur*

**Regel 4 — Korte klinker behouden bij verbuiging → dubbele medeklinker**
*kat → katten, bed → bedden, bom → bommen*

**Regel 5 — Lange klinker bij verbuiging → één medeklinker na open lettergreep**
*maan → manen (ma-nen), boom → bomen (bo-men)*

| Enkelvoud | Meervoud | Lettergreep | Uitleg |
|-----------|----------|-------------|--------|
| kat | katten | gesloten | kort a, dubbel t om kort te houden |
| maan | manen | open | lang aa, één n na open lettergreep |
| bom | bommen | gesloten | kort o, dubbel m |
| boom | bomen | open | lang oo, één m |`,
      },
    ],

    // ── Callouts ───────────────────────────────────────────────────────
    callouts: [
      {
        type: "key",
        label: "IJzeren regel: lettergreepstructuur",
        text: "**Open lettergreep** = lange klinker (één teken). **Gesloten lettergreep** = korte klinker. Dit principe stuurt alle andere spellingregels.",
      },
      {
        type: "remember",
        label: "ei/ij en au/ou zijn identiek",
        text: "**ei/ij** en **au/ou** zijn identiek: er is **geen verschil in uitspraak**. Het onderscheid is puur historisch en spellingtechnisch.",
      },
      {
        type: "tip",
        label: "eu is geen tweeklank",
        text: "**eu** in neus, deur en leuk is een **zuivere, stilstaande klinker**. De mond beweegt niet tijdens de uitspraak — anders dan bij ei, ou en ui.",
      },
      {
        type: "note",
        label: "Doffe e overal",
        text: "**De sjwa (ə)** is de **meest voorkomende klank** in het Nederlands. Alle zwakke lettergrepen en uitgangen op **-en** worden met een sjwa uitgesproken.",
      },
      {
        type: "key",
        label: "Eindklankverscherping",
        text: "**Elke stemhebbende medeklinker** (d, b, z, v, g) aan het woordeinde wordt stemloos: **d→t, b→p, z→s**. Bij verbuiging keert de stem terug.",
      },
      {
        type: "tip",
        label: "g = ch altijd",
        text: "**g en ch** zijn in het Nederlands dezelfde raspende keelklank. Licht en ligt klinken identiek. Nooit de zachte Engelse g gebruiken.",
      },
    ],

    // ── Common mistakes ────────────────────────────────────────────────
    commonMistakes: [
      {
        incorrect: "meisje als mee-sje",
        correct: "mei-sje",
        explanation: "ei/ij is een tweeklank (e + i), geen lange ee-klank",
      },
      {
        incorrect: "huis als huus",
        correct: "h-ui-s (getuite u + i)",
        explanation: "ui is een tweeklank met een getuite korte u gevolgd door een ie-glide",
      },
      {
        incorrect: "leuk als luuk",
        correct: "leuk (zuivere eu)",
        explanation: "eu is een lange monoftong, geen tweeklank — de mond beweegt niet",
      },
      {
        incorrect: "school als sjool",
        correct: "s-ch-ool",
        explanation: "sch is s + harde ch-klank, nooit de Engelse sh",
      },
      {
        incorrect: "ring met harde aparte g",
        correct: "ring (ng-klank als één nasaal)",
        explanation: "ng is één enkele nasale klank, zoals in het Engelse sing",
      },
      {
        incorrect: "hond met hoorbare d",
        correct: "hont",
        explanation: "Eindklankverscherping: d aan het woordeinde wordt t",
      },
      {
        incorrect: "web met hoorbare b",
        correct: "wep",
        explanation: "Eindklankverscherping: b aan het woordeinde wordt p",
      },
      {
        incorrect: "bomen met korte o",
        correct: "boo-men (lange oo)",
        explanation: "Open lettergreep bo- geeft een lange klinker, ook al staat er maar één o",
      },
      {
        incorrect: "bommen met lange oo",
        correct: "bom-men (korte o)",
        explanation: "Dubbele m sluit de lettergreep en houdt de klinker kort",
      },
      {
        incorrect: "lopen als lo-pén",
        correct: "lopuh (doffe e)",
        explanation: "De uitgang -en is altijd een sjwa, nooit de volle e-klank",
      },
      {
        incorrect: "auto als ooto",
        correct: "auw-to (a + oe)",
        explanation: "au/ou is een tweeklank: begin bij de a en glijd naar de oe",
      },
      {
        incorrect: "leeuw als leew",
        correct: "lee-uw (ee + oe-glide)",
        explanation: "De w-achtige oe-glide moet hoorbaar zijn na de lange ee",
      },
      {
        incorrect: "w als Engelse w (bilabiaal)",
        correct: "zachte v-achtige klank (labiodentaal)",
        explanation: "De Nederlandse w: tanden en lip raken elkaar lichtjes. Lippen raken elkaar niet.",
      },
      {
        incorrect: "de en te als dee en tee",
        correct: "də en tə (sjwa)",
        explanation: "Lidwoorden en voorzetsels hebben altijd een doffe e, nooit de volle ee-klank",
      },
    ],

    // ── Quick review ───────────────────────────────────────────────────
    review: [
      "Korte klinkers staan in gesloten lettergrepen: kat · bed · pit · pot · put",
      "Lange klinkers in gesloten lettergrepen schrijf je met twee tekens: maan · been · boom · muur",
      "Open lettergreep heeft één klinkerteken maar klinkt lang: ma-nen · bo-men · mu-ren",
      "Doffe e (sjwa) in zwakke lettergrepen: de · te · lopen · vrolijk — nooit voluit e zeggen",
      "ei/ij en au/ou zijn identieke tweeklanken — het onderscheid is alleen spellingtechnisch",
      "ui is een tweeklank: getuite korte u gevolgd door een ie-glide — huis · muis · duim",
      "eu is een zuivere lange klinker, geen tweeklank: neus · deur · leuk",
      "g en ch zijn dezelfde harde keelklank: goed · dag · lachen · licht",
      "sch wordt uitgesproken als s + harde ch: school · schip — nooit als Engelse sh",
      "ng is één nasale klank; nk = ng + k: ring · zingen · bank",
      "Eindklankverscherping: d→t · b→p · z→s aan het woordeinde",
      "Dubbele medeklinker houdt de klinker kort: katten · bedden · bommen",
      "Nederlandse w is labiodentaal (zachte v-achtige klank), niet de Engelse bilabiale w",
    ],

    // ── Q&A practice ──────────────────────────────────────────────────
    qa: [
      {
        question: "Hoe spreek je het woord hond uit?",
        answer: "hont — de d aan het woordeinde wordt t door eindklankverscherping",
      },
      {
        question: "Wat is de juiste uitspraak van school?",
        answer: "s-ch-ool — de sch is s + harde keelklank ch, nooit als sjool",
      },
      {
        question: "Welk woord heeft een lange oo-klank en waarom?",
        answer: "boom — de lettergreep is gesloten en de lange klinker wordt met twee tekens (oo) geschreven",
      },
      {
        question: "Hoe klinkt de eu in het woord neus?",
        answer: "Als de Franse eu in peur — een zuivere, stilstaande lange klinker. De mond beweegt niet.",
      },
      {
        question: "Hoe spreek je meisje correct uit?",
        answer: "mei-sje — ei is een tweeklank (e + i), geen lange ee-klank",
      },
      {
        question: "Wat is de klank van ui in het woord muis?",
        answer: "Een getuite korte u gevolgd door een ie-glide (/œy/) — zeg eerst een korte u met getuite lippen, dan ie",
      },
      {
        question: "Hoe spreek je het woord ringen uit?",
        answer: "ring-uh — ng is één nasale klank, de uitgang -en is een sjwa (doffe e)",
      },
      {
        question: "Waarom schrijf je bomen met één o maar bommen met twee m-en?",
        answer: "bomen: de lettergreep bo- is open, dus de klinker is lang (oo). bommen: dubbele m sluit de lettergreep en houdt de o kort.",
      },
      {
        question: "Hoe klinkt het woord lachen?",
        answer: "la-ch-en — de ch is dezelfde harde keelklank als de g in goed. De uitgang -en is een sjwa.",
      },
      {
        question: "Wat is het verschil in uitspraak tussen ei en ij?",
        answer: "Geen enkel verschil — beide klinken als /ɛi/ (e + ie-glide). Het onderscheid is alleen historisch en spellingtechnisch.",
      },
      {
        question: "Hoe spreek je het woord web uit?",
        answer: "wep — de b aan het woordeinde wordt p door eindklankverscherping",
      },
      {
        question: "Wat is de doffe e en waar komt die voor?",
        answer: "De doffe e (sjwa, ə) is een korte, onbeklemtoonde klinker in zwakke lettergrepen: de, te, je, lopen (lopuh), vrolijk (vroo-luhk)",
      },
    ],

    // ── Exercises ─────────────────────────────────────────────────────
    exercises: [
      {
        question: "Hoe klinkt de uitgang -en in lopen?",
        options: ["Volle ee-klank", "Doffe e (sjwa)", "Korte i", "Lange oo"],
        answer: "Doffe e (sjwa)",
      },
      {
        question: "Welke tweeklank zit in het woord huis?",
        options: ["ei/ij", "au/ou", "ui", "eu"],
        answer: "ui",
      },
      {
        question: "Hoe wordt de d in hond uitgesproken?",
        options: ["Als zachte d", "Als t (eindklankverscherping)", "Als n", "Stil"],
        answer: "Als t (eindklankverscherping)",
      },
      {
        question: "Wat is de juiste uitspraak van sch in school?",
        options: ["Als Engelse sh", "Als s + harde ch", "Als sk", "Als sz"],
        answer: "Als s + harde ch",
      },
      {
        question: "Welke klinker is een zuivere lange klinker (geen tweeklank)?",
        options: ["ei", "ou", "ui", "eu"],
        answer: "eu",
      },
      {
        question: "Waarom schrijf je katten met twee t-en maar manen met één n?",
        options: [
          "Willekeurige spellingregel",
          "katten: korte a behouden (gesloten lettergreep); manen: open lettergreep geeft lange aa",
          "katten is een meervoud; manen niet",
          "Er is geen verschil in klank",
        ],
        answer: "katten: korte a behouden (gesloten lettergreep); manen: open lettergreep geeft lange aa",
      },
    ],
  },
   {
  id: "nl-grammatica-tt-1",
  title: "Tegenwoordige tijd: werkwoorden",
  level: 1,
  topic: "Grammatica",
  body: "Alles over de Nederlandse werkwoordvervoeging in de tegenwoordige tijd. Van de basisregel tot uitzonderingen zoals d- en t-stammen, v/f- en z/s-wisseling, scheidbare werkwoorden en inversievragen. Compleet met oefeningen en een eindtoets van 100 zinnen.",
  overview:
    "Bij regelmatige werkwoorden gebruik je **stam** (ik), **stam + t** (jij, u, hij, zij, het) en **stam + en** (wij, jullie, zij mv). De stam past zich aan de spelling aan om de klank lang of kort te houden. In vraagzinnen met **jij** valt de -t weg; bij **u** blijft hij staan. Eindigt de stam op -t of -d, dan gelden aparte schrijfwijzen.",

  // ── Conjugation table: basisschema ─────────────────────────────────
  conjugationTable: {
    header: "Persoon|Uitgang|Voorbeeld (werken)",
    rows: [
      ["ik", "stam", "werk"],
      ["jij / u", "stam + t", "werkt"],
      ["hij / zij / het", "stam + t", "werkt"],
      ["wij / jullie / zij mv", "stam + en", "werken"],
    ],
  },

  // ── Rules cards ────────────────────────────────────────────────────
  rulesTable: [
    {
      rule: "Stam + t en stam + en",
      structure: "ik = stam\njij, u, hij, zij, het = stam + t\nwij, jullie, zij mv = stam + en",
      example: "werken → ik werk, jij werkt, hij werkt, wij werken",
      usage: "Dit is de basisregel voor alle regelmatige werkwoorden. De stam vind je door -en van het hele werkwoord af te halen.",
    },
    {
      rule: "Lange klinker in de stam",
      structure: "Als de stam een lange klinker heeft in een open lettergreep, schrijf je die klinker dubbel.",
      example: "wonen → woon, praten → praat, lopen → loop, horen → hoor, spelen → speel",
      usage: "Zo blijft de lange klank behouden in de gesloten lettergreep van de stam. Zonder verdubbeling zou hij kort klinken.",
    },
    {
      rule: "Korte klinker → dubbele medeklinker in meervoud",
      structure: "In het enkelvoud (stam) volstaat één medeklinker; in het meervoud verdubbel je de medeklinker om de korte klank te bewaren.",
      example: "zitten → zit, wij zitten\nvallen → val, wij vallen\nbakken → bak, wij bakken\nstoppen → stop, wij stoppen",
      usage: "Zodra de lettergreep open zou worden (bij -en), zorgt de dubbele medeklinker dat de klinker kort blijft.",
    },
    {
      rule: "v wordt f, z wordt s aan het woordeinde",
      structure: "De ik-vorm (en de stam) eindigt nooit op -v of -z. Die worden f en s. In het meervoud keren v en z terug.",
      example: "geloven → ik geloof, wij geloven\nreizen → ik reis, wij reizen\nlezen → ik lees, wij lezen\nschrijven → ik schrijf, wij schrijven",
      usage: "Een Nederlands woord mag niet op -v of -z eindigen. In het meervoud valt de eindpositie weg, dus komt de stemhebbende klank terug.",
    },
    {
      rule: "Stam op -d → hij-vorm met dt",
      structure: "Als de stam op een d eindigt, schrijf je in de hij-vorm (en jij/u-vorm) **dt**. Bij inversie met jij valt alleen de -t weg.",
      example: "worden → ik word, hij wordt, word jij?\nrijden → ik rijd, hij rijdt, rijd jij?\nantwoorden → ik antwoord, hij antwoordt, antwoord jij?",
      usage: "De uitspraak is /t/, maar de d blijft in de spelling staan. Alleen de extra -t verdwijnt bij jij in een vraag.",
    },
    {
      rule: "Stam op -t → geen extra t",
      structure: "Als de stam al op een t eindigt, komt er geen extra t bij. De hij-vorm en de jij-vorm zijn gelijk aan de stam.",
      example: "praten → ik praat, jij praat, hij praat, wij praten\nweten → ik weet, jij weet, hij weet\nmoeten → ik moet, jij moet, hij moet",
      usage: "Nooit **-tt** aan het eind van een werkwoordsvorm. Bij inversie verandert er niets: *praat jij?* is correct.",
    },
    {
      rule: "Werkwoorden op -eren",
      structure: "De stam krijgt -eer (dubbele e), het meervoud valt terug op -eren.",
      example: "proberen → ik probeer, hij probeert, wij proberen\nstuderen → ik studeer, hij studeert, wij studeren\nregeren → ik regeer, hij regeert, wij regeren",
      usage: "De lange ee-klank wordt in de stam met twee e's geschreven. In de meervoudsvorm is de extra e niet nodig.",
    },
    {
      rule: "Scheidbare werkwoorden",
      structure: "Het voorvoegsel (voorzetsel/bijwoord) wordt in de hoofdzin achteraan geplaatst. Het werkwoorddeel vervoeg je zoals gewoonlijk.",
      example: "opstaan → ik sta op, sta jij op?, hij staat op, wij staan op\nmeenemen → ik neem mee, neem jij mee?, hij neemt mee, wij nemen mee",
      usage: "De vervoeging van het basiswerkwoord verandert niet. Alleen de plaats van het voorvoegsel is anders.",
    },
    {
      rule: "Inversie: vraagzinnen met jij en u",
      structure: "**jij**: de -t valt weg (wordt gelijk aan de ik-vorm).\n**u**: de -t blijft staan.\n**hij/zij/het**: geen verandering.",
      example: "jij werkt → werk jij?\njij wordt → word jij?\nu werkt → werkt u?\nu wordt → wordt u?\nhij werkt → werkt hij?",
      usage: "Let op bij d-stammen: *word jij?* (zonder t). Bij t-stammen verandert er niets: *praat jij?* is al zonder extra t.",
    },
  ],

  // ── Detailed accordion sections ────────────────────────────────────
  details: [
    {
      title: "De basis: stam en uitgangen",
      body: `De kern van de Nederlandse werkwoordvervoeging in de tegenwoordige tijd is eenvoudig.

| Persoon | Uitgang | Voorbeeld (werken) |
|---------|---------|-------------------|
| ik | stam | werk |
| jij / u | stam + t | werkt |
| hij / zij / het | stam + t | werkt |
| wij / jullie / zij mv | stam + en | werken |

De **stam** vind je door **-en** van het hele werkwoord af te halen. Daarna pas je spellingregels toe (zie volgende secties).`,
    },
    {
      title: "Lange klinkers: verdubbeling in de stam",
      body: `Werkwoorden met een **lange klinker** in een open lettergreep verliezen die klank in de stam als je niet oplet.

Neem *wonen*. Haal -en weg → **won**. Dat zou je als korte o lezen. Daarom schrijf je de klinker dubbel: **woon**.
Zo ook: *praten* → **praat**, *lopen* → **loop**, *horen* → **hoor**.

**Voorbeelden:**

| Hele werkwoord | Stam | Ik-vorm | Hij-vorm | Meervoud |
|---------------|------|---------|----------|-----------|
| wonen | woon | woon | woont | wonen |
| praten | praat | praat | praat | praten |
| lopen | loop | loop | loopt | lopen |
| spelen | speel | speel | speelt | spelen |
| varen | vaar | vaar | vaart | varen |

> Bij *praten* eindigt de stam al op **t**, dus de hij-vorm is ook **praat** — nooit *praatt*.`,
    },
    {
      title: "Korte klinkers: dubbele medeklinker in het meervoud",
      body: `Bij werkwoorden met een korte klinker gevolgd door één medeklinker, zoals *zitten*, is de stam **zit**. In het meervoud zou *ziten* een open lettergreep worden, waardoor de i lang zou klinken. Dat lossen we op door de medeklinker te verdubbelen: **zitten**.

**Voorbeelden:**

| Hele werkwoord | Stam | Ik-vorm | Meervoud |
|---------------|------|---------|----------|
| zitten | zit | zit | zitten |
| vallen | val | val | vallen |
| bakken | bak | bak | bakken |
| stoppen | stop | stop | stoppen |
| liggen | lig | lig | liggen |

> Bij werkwoorden op **-den** zoals *zenden* (stam zend) is de klinker ook kort, maar de d wordt niet verdubbeld; de d staat al aan het eind. De hij-vorm is **zendt**.`,
    },
    {
      title: "v/f- en z/s-wisseling",
      body: `Omdat een Nederlands woord nooit op een **-v** of **-z** mag eindigen, passen we de stam aan:

- **v → f** in de ik-vorm, **v** keert terug in het meervoud.
- **z → s** in de ik-vorm, **z** keert terug in het meervoud.

**Voorbeelden v/f:**

| Hele werkwoord | Stam | Ik-vorm | Hij-vorm | Meervoud |
|---------------|------|---------|----------|-----------|
| geloven | geloof | geloof | gelooft | geloven |
| schrijven | schrijf | schrijf | schrijft | schrijven |
| blijven | blijf | blijf | blijft | blijven |
| durven | durf | durf | durft | durven |

**Voorbeelden z/s:**

| Hele werkwoord | Stam | Ik-vorm | Hij-vorm | Meervoud |
|---------------|------|---------|----------|-----------|
| reizen | reis | reis | reist | reizen |
| lezen | lees | lees | leest | lezen |
| verhuizen | verhuis | verhuis | verhuist | verhuizen |
| kiezen | kies | kies | kiest | kiezen |

> Let op: bij *reizen* → hij **reist** (stam reis + t).`,
    },
    {
      title: "d- en t-stammen",
      body: `**Stam op -d** (zoals worden, rijden, antwoorden):  
In de hij-vorm schrijf je **dt**, uitgesproken als /t/. In een vraag met **jij** verdwijnt alleen de -t, de d blijft staan.

| Hele werkwoord | Stam | Ik | Hij | Jij in vraag |
|---------------|------|----|-----|---------------|
| worden | word | word | wordt | word jij? |
| rijden | rijd | rijd | rijdt | rijd jij? |
| antwoorden | antwoord | antwoord | antwoordt | antwoord jij? |
| melden | meld | meld | meldt | meld jij? |

**Stam op -t** (zoals praten, weten, moeten):  
De stam eindigt al op t, dus je schrijft nooit *-tt*. De hij-vorm is gelijk aan de stam.

| Hele werkwoord | Stam | Ik | Hij | Jij in vraag |
|---------------|------|----|-----|---------------|
| praten | praat | praat | praat | praat jij? |
| weten | weet | weet | weet | weet jij? |
| moeten | moet | moet | moet | moet jij? |
| zitten | zit | zit | zit | zit jij? |

> **Geheugensteun:** "dt" alleen als de stam op een echte d eindigt.`,
    },
    {
      title: "-eren werkwoorden",
      body: `Werkwoorden op **-eren** met een lange ee-klank gedragen zich bijzonder: de stam krijgt **-eer**, het meervoud laat de extra e vallen.

**Voorbeelden:**

| Hele werkwoord | Stam | Ik-vorm | Hij-vorm | Meervoud |
|---------------|------|---------|----------|-----------|
| proberen | probeer | probeer | probeert | proberen |
| studeren | studeer | studeer | studeert | studeren |
| regeren | regeer | regeer | regeert | regeren |
| reserveren | reserveer | reserveer | reserveert | reserveren |
| dicteren | dicteer | dicteer | dicteert | dicteren |

> Korte klank zoals in *kletteren* is regelmatig: stam kletter, ik kletter, hij klettert.`,
    },
    {
      title: "Scheidbare werkwoorden",
      body: `Scheidbare werkwoorden bestaan uit een **voorvoegsel** (vaak een voorzetsel) + werkwoord. In de hoofdzin verhuist het voorvoegsel naar het einde.

**Voorbeelden:**

| Hele werkwoord | Ik-vorm | Jij in vraag | Hij-vorm | Meervoud |
|---------------|---------|---------------|----------|----------|
| opstaan | sta op | sta jij op? | staat op | staan op |
| meenemen | neem mee | neem jij mee? | neemt mee | nemen mee |
| uitgaan | ga uit | ga jij uit? | gaat uit | gaan uit |
| terugkomen | kom terug | kom jij terug? | komt terug | komen terug |
| opbellen | bel op | bel jij op? | belt op | bellen op |
| aankleden | kleed aan | kleed jij aan? | kleedt aan | kleden aan |

> De vervoegingsregels van het basiswerkwoord veranderen niet. Bij *aankleden* (kleed, kleedt) zie je de dt-regel terug.`,
    },
    {
      title: "Inversie: jij en u in vragen",
      body: `Wanneer het onderwerp **jij** of **u** achter de persoonsvorm staat, gelden speciale regels.

**jij**: De -t **valt weg**. De vorm wordt gelijk aan de ik-vorm.
**u**: De -t **blijft altijd** staan.
**hij/zij/het**: Geen verandering.

| Normale zin | Vraagzin |
|-------------|----------|
| jij werkt | werk jij? |
| jij woont | woon jij? |
| jij wordt | word jij? |
| jij rijdt | rijd jij? |
| jij praat | praat jij? (stam op t, dus al geen -t om weg te laten) |
| u werkt | werkt u? |
| u wordt | wordt u? |
| u rijdt | rijdt u? |
| hij werkt | werkt hij? |

> **Let op:** bij *jij* verdwijnt alleen de -t, niet de d. Dus *word jij?* met d.`,
    },
    {
      title: "Eindtoets: 100 zinnen",
      body: `Vul de juiste vorm in. (Antwoorden eronder)

| Nr | Zin | Antwoord |
|----|-----|----------|
| 1 | Ik __________ (werken) in de tuin. | werk |
| 2 | __________ (werken) jij op zaterdag? | Werk |
| 3 | De klok __________ (werken) op batterijen. | werkt |
| 4 | Wij __________ (werken) tot zes uur. | werken |
| 5 | __________ (wonen) u hier lang? | Woont |
| 6 | Mijn broer __________ (wonen) in Leuven. | woont |
| 7 | __________ (praten) jij graag met vreemden? | Praat |
| 8 | De leraar __________ (praten) duidelijk. | praat |
| 9 | Ik __________ (praten) niet tijdens de film. | praat |
| 10 | Jullie __________ (praten) te hard. | praten |
| 11 | __________ (lopen) je vader naar het park? | Loopt |
| 12 | Het kind __________ (lopen) al. | loopt |
| 13 | Wij __________ (lopen) elke dag. | lopen |
| 14 | Ik __________ (horen) de radio. | hoor |
| 15 | __________ (horen) jullie het nieuws? | Horen |
| 16 | De pianist __________ (spelen) een sonate. | speelt |
| 17 | De kinderen __________ (spelen) buiten. | spelen |
| 18 | Mijn oom __________ (varen) op de rivier. | vaart |
| 19 | __________ (varen) jij met de boot? | Vaar |
| 20 | Ik __________ (leren) graag. | leer |
| 21 | __________ (leren) zij (enkelvoud) voor het examen? | Leert |
| 22 | De studenten __________ (leren) Spaans. | leren |
| 23 | Ik __________ (zitten) op de bank. | zit |
| 24 | __________ (zitten) jij in de raad? | Zit |
| 25 | De kat __________ (zitten) op tafel. | zit |
| 26 | Wij __________ (zitten) klaar. | zitten |
| 27 | __________ (vallen) jij in slaap? | Val |
| 28 | De sneeuw __________ (vallen) zacht. | valt |
| 29 | Ik __________ (stoppen) nu. | stop |
| 30 | __________ (stoppen) de bus hier? | Stopt |
| 31 | De bakker __________ (bakken) koekjes. | bakt |
| 32 | Ik __________ (geloven) je. | geloof |
| 33 | __________ (geloven) jij in dromen? | Geloof |
| 34 | Hij __________ (geloven) alles. | gelooft |
| 35 | Wij __________ (geloven) in eerlijkheid. | geloven |
| 36 | Ik __________ (reizen) naar Italië. | reis |
| 37 | __________ (reizen) jij alleen? | Reis |
| 38 | Mijn zus __________ (verhuizen) morgen. | verhuist |
| 39 | __________ (verhuizen) jullie naar Gent? | Verhuizen |
| 40 | Ik __________ (lezen) de krant. | lees |
| 41 | __________ (lezen) jij de bijsluiter? | Lees |
| 42 | De leerling __________ (lezen) hardop. | leest |
| 43 | Ik __________ (worden) volgende maand 30. | word |
| 44 | __________ (worden) jij advocaat? | Word |
| 45 | De koffie __________ (worden) lauw. | wordt |
| 46 | Het __________ (worden) al laat. | wordt |
| 47 | De expert __________ (antwoorden) per brief. | antwoordt |
| 48 | __________ (antwoorden) u op mijn mail? | Antwoordt |
| 49 | Ik __________ (rijden) in een blauwe auto. | rijd |
| 50 | __________ (rijden) jij over de brug? | Rijd |
| 51 | De tram __________ (rijden) niet. | rijdt |
| 52 | Wij __________ (bieden) onze excuses aan. | bieden |
| 53 | __________ (bieden) jij genoeg? | Bied |
| 54 | Ik __________ (proberen) een nieuw recept. | probeer |
| 55 | __________ (proberen) jij de oefentoets? | Probeer |
| 56 | Zij __________ (proberen) rustig te blijven. | probeert |
| 57 | Wij __________ (proberen) het op te lossen. | proberen |
| 58 | De directeur __________ (regeren) bekwaam. | regeert |
| 59 | Ik __________ (reserveren) twee stoelen. | reserveer |
| 60 | __________ (reserveren) u een tafel? | Reserveert |
| 61 | De assistent __________ (dicteren) een verslag. | dicteert |
| 62 | De coach __________ (informeren) de spelers. | informeert |
| 63 | Ik __________ (studeren) wiskunde. | studeer |
| 64 | __________ (studeren) jij in Antwerpen? | Studeer |
| 65 | Zij (enkelvoud) __________ (studeren) hard. | studeert |
| 66 | Wij __________ (accepteren) het voorstel. | accepteren |
| 67 | __________ (accepteren) jij deze prijs? | Accepteer |
| 68 | De monteur __________ (repareren) de wasmachine. | repareert |
| 69 | Ik __________ (fotograferen) de zonsondergang. | fotografeer |
| 70 | __________ (serveren) jij de wijn? | Serveer |
| 71 | Ik __________ (opstaan) om zes uur. | sta op |
| 72 | __________ (opstaan) jij vroeg? | Sta … op |
| 73 | Oma __________ (opstaan) langzaam. | staat op |
| 74 | Wij __________ (opstaan) zodra de wekker gaat. | staan op |
| 75 | Ik __________ (meenemen) een paraplu. | neem mee |
| 76 | __________ (meenemen) jij je sleutels? | Neem … mee |
| 77 | De man __________ (meenemen) zijn hond. | neemt mee |
| 78 | Wij __________ (meenemen) een fles water. | nemen mee |
| 79 | Ik __________ (uitgaan) vanavond. | ga uit |
| 80 | __________ (uitgaan) jij met vrienden? | Ga … uit |
| 81 | Het licht __________ (uitgaan) om elf uur. | gaat uit |
| 82 | Jullie __________ (uitgaan) in de stad. | gaan uit |
| 83 | Ik __________ (terugkomen) over een uur. | kom terug |
| 84 | __________ (terugkomen) jij volgende week? | Kom … terug |
| 85 | De kat __________ (terugkomen) vanzelf. | komt terug |
| 86 | Wij __________ (terugkomen) op het aanbod. | komen terug |
| 87 | Ik __________ (opbellen) mijn moeder. | bel op |
| 88 | __________ (opbellen) jij de dokter? | Bel … op |
| 89 | De klant __________ (opbellen) voor informatie. | belt op |
| 90 | Jullie __________ (opbellen) het hoofdkantoor. | bellen op |
| 91 | Ik __________ (aankleden) me warm. | kleed aan |
| 92 | __________ (aankleden) jij je netjes? | Kleed … aan |
| 93 | Het kind __________ (aankleden) zichzelf. | kleedt aan |
| 94 | Wij __________ (aankleden) ons vlug. | kleden aan |
| 95 | Ik __________ (uitwerken) het plan. | werk uit |
| 96 | __________ (uitwerken) jij de details? | Werk … uit |
| 97 | De stagiair __________ (uitwerken) het idee. | werkt uit |
| 98 | De collega’s __________ (uitwerken) het ontwerp. | werken uit |
| 99 | __________ (weten) jij de weg? | Weet |
| 100 | __________ (moeten) u nog iets vragen? | Moet |`,
    },
  ],

  // ── Callouts ───────────────────────────────────────────────────────
  callouts: [
    {
      type: "key",
      label: "IJzeren regel",
      text: "**ik = stam, jij/u/hij/zij/het = stam + t, meervoud = stam + en.** Alle andere regels zijn afgeleiden om de spelling kloppend te houden.",
    },
    {
      type: "remember",
      label: "Nooit -tt!",
      text: "Als de stam al op een **t** eindigt, schrijf je **nooit een extra t**. Dus *praat*, *weet*, *moet*, *zit* — niet *praatt*.",
    },
    {
      type: "tip",
      label: "Dt alleen bij echte d-stam",
      text: "Schrijf alleen **dt** als de stam op een **d** eindigt: *worden → wordt*. Na een lange klinker of medeklinker als l, n, r nooit dt.",
    },
    {
      type: "note",
      label: "v en z aan het eind?",
      text: "Nederlandse woorden eindigen nooit op -v of -z. Daarom: **ik geloof**, **ik reis**, maar **wij geloven**, **wij reizen**.",
    },
    {
      type: "key",
      label: "Jij in vraag = ik-vorm",
      text: "Bij inversie met **jij** verdwijnt de -t. *Word jij?* (zonder t, maar met d). Alleen de t verdwijnt, de d blijft.",
    },
    {
      type: "tip",
      label: "U blijft altijd netjes",
      text: "Bij **u** blijft de -t **altijd** staan, ook in een vraag. *Werkt u?*, *Wordt u?*, *Rijdt u?*.",
    },
  ],

  // ── Common mistakes ────────────────────────────────────────────────
  commonMistakes: [
    { incorrect: "Ik werkt", correct: "Ik werk", explanation: "Ik-vorm is altijd de stam zonder -t." },
    { incorrect: "Jij werk", correct: "Jij werkt", explanation: "Jij krijgt stam + t, behalve in een vraag." },
    { incorrect: "Hij werk", correct: "Hij werkt", explanation: "Hij/zij/het krijgt stam + t." },
    { incorrect: "Wij werkt", correct: "Wij werken", explanation: "Meervoud = stam + en." },
    { incorrect: "Jullie woont", correct: "Jullie wonen", explanation: "Jullie is meervoud, dus stam + en." },
    { incorrect: "Hij won", correct: "Hij woont", explanation: "Stam is woon (lange klinker), hij-vorm woont." },
    { incorrect: "Ik prat", correct: "Ik praat", explanation: "Stam van praten is praat (lange aa)." },
    { incorrect: "Jij prat", correct: "Jij praat", explanation: "Stam op t: geen extra t, ook bij jij." },
    { incorrect: "Hij praatt", correct: "Hij praat", explanation: "Nooit twee t's aan het eind van een woord." },
    { incorrect: "Werkt jij?", correct: "Werk jij?", explanation: "Inversie jij: -t valt weg." },
    { incorrect: "Woont jij?", correct: "Woon jij?", explanation: "Zelfde regel: woon jij?" },
    { incorrect: "Wordt jij?", correct: "Word jij?", explanation: "Worden: word jij? (alleen de t valt weg, d blijft)." },
    { incorrect: "Rijdt jij?", correct: "Rijd jij?", explanation: "Rijden: rijd jij?" },
    { incorrect: "Hij geloofd", correct: "Hij gelooft", explanation: "Geloven → geloof, hij-vorm gelooft (f+t)." },
    { incorrect: "Ik geloof (correct)", correct: "Ik geloof", explanation: "Ik-vorm correct met f." },
    { incorrect: "Hij reisd", correct: "Hij reist", explanation: "Reizen → reis, hij-vorm reist." },
    { incorrect: "Ik verhuisd", correct: "Ik verhuis", explanation: "Ik-vorm verhuis (s)." },
    { incorrect: "Hij verhuisd", correct: "Hij verhuist", explanation: "Hij-vorm stam + t." },
    { incorrect: "Hij leest (correct)", correct: "Hij leest", explanation: "Lezen → lees, hij leest." },
    { incorrect: "Hij antwoord", correct: "Hij antwoordt", explanation: "Antwoorden: stam antwoord, hij antwoordt." },
    { incorrect: "Ik wordt", correct: "Ik word", explanation: "Ik-vorm is word, nooit dt." },
    { incorrect: "U word", correct: "U wordt", explanation: "U krijgt altijd stam + t." },
    { incorrect: "Hij probiert", correct: "Hij probeert", explanation: "Proberen: stam probeer, hij probeert." },
    { incorrect: "Wij probieren", correct: "Wij proberen", explanation: "Meervoud: proberen." },
    { incorrect: "Jullie probeert", correct: "Jullie proberen", explanation: "Jullie meervoud: proberen." },
    { incorrect: "Hij valdt", correct: "Hij valt", explanation: "Stam val + t, nooit dt na een l." },
    { incorrect: "Hij word (voor hij)", correct: "Hij wordt", explanation: "Worden: hij wordt." },
    { incorrect: "Werk u?", correct: "Werkt u?", explanation: "U altijd met t." },
    { incorrect: "Proberen jij?", correct: "Probeer jij?", explanation: "Inversie jij: stam probeer." },
    { incorrect: "Neemt jij mee?", correct: "Neem jij mee?", explanation: "Inversie jij bij meenemen: neem jij mee?" },
    { incorrect: "Staat jij op? (fout)", correct: "Sta jij op?", explanation: "Opstaan: sta jij op?" },
    { incorrect: "Rijd u?", correct: "Rijdt u?", explanation: "U-vorm blijft rijdt, ook in vraag." },
  ],

  // ── Quick review ───────────────────────────────────────────────────
  review: [
    "**ik** = stam, **jij/u/hij/zij/het** = stam + t, **meervoud** = stam + en.",
    "Lange klinker in de stam verdubbelen: wonen → woon, praten → praat, lopen → loop.",
    "Korte klinker behouden: enkelvoud één medeklinker, meervoud dubbele medeklinker (zit → zitten).",
    "v/f- en z/s-wisseling: geloven → ik geloof, reizen → ik reis; meervoud met v en z.",
    "Stam op -d: hij-vorm met dt (wordt). Bij inversie jij: word jij? (alleen t weg).",
    "Stam op -t: geen extra t (praat, weet, moet).",
    "-eren werkwoorden: stam met -eer (probeer), meervoud -eren (proberen).",
    "Scheidbare werkwoorden: voorvoegsel achteraan (ik sta op, sta jij op?).",
    "Inversie: jij verliest -t (werk jij?), u behoudt -t (werkt u?), hij/zij/het ongewijzigd.",
  ],

  // ── Q&A practice (tap to reveal) ──────────────────────────────────
  qa: [
    { question: "Ik ... (werken) in de tuin.", answer: "werk" },
    { question: "... (werken) jij op zaterdag?", answer: "Werk" },
    { question: "Hij ... (praten) duidelijk.", answer: "praat" },
    { question: "... (praten) jij graag met vreemden?", answer: "Praat" },
    { question: "Wij ... (lopen) elke dag.", answer: "lopen" },
    { question: "Ik ... (geloven) je.", answer: "geloof" },
    { question: "Hij ... (geloven) alles.", answer: "gelooft" },
    { question: "Ik ... (reizen) naar Italië.", answer: "reis" },
    { question: "Hij ... (worden) 30.", answer: "wordt" },
    { question: "... (worden) jij advocaat?", answer: "Word" },
    { question: "Ik ... (rijden) in een blauwe auto.", answer: "rijd" },
    { question: "Hij ... (rijden) niet.", answer: "rijdt" },
    { question: "Ik ... (proberen) een nieuw recept.", answer: "probeer" },
    { question: "Zij ... (proberen) rustig te blijven.", answer: "probeert" },
    { question: "Ik ... (opstaan) om zes uur.", answer: "sta op" },
    { question: "... (opstaan) jij vroeg?", answer: "Sta ... op" },
    { question: "Ik ... (meenemen) een paraplu.", answer: "neem mee" },
    { question: "Hij ... (meenemen) zijn hond.", answer: "neemt mee" },
    { question: "Ik ... (uitgaan) vanavond.", answer: "ga uit" },
    { question: "... (uitgaan) jij met vrienden?", answer: "Ga ... uit" },
    { question: "... (weten) jij de weg?", answer: "Weet" },
    { question: "... (moeten) u nog iets vragen?", answer: "Moet" },
    { question: "Ik ... (aankleden) me warm.", answer: "kleed aan" },
    { question: "Hij ... (aankleden) zichzelf.", answer: "kleedt aan" },
  ],

  // ── Multiple-choice exercises ──────────────────────────────────────
  exercises: [
    {
      question: "Wat is de juiste ik-vorm van 'praten'?",
      options: ["prat", "praat", "praatt", "prate"],
      answer: "praat",
    },
    {
      question: "Hij ... (worden) morgen 10.",
      options: ["word", "wordt", "wort", "wordd"],
      answer: "wordt",
    },
    {
      question: "Welke vraag is correct?",
      options: ["Werkt jij?", "Werk jij?", "Werken jij?", "Werk jij"],
      answer: "Werk jij?",
    },
    {
      question: "Wat is de correcte hij-vorm van 'reizen'?",
      options: ["reizt", "reisd", "reist", "rijst"],
      answer: "reist",
    },
    {
      question: "Welk antwoord is juist voor 'jij ... (geloven)'?",
      options: ["gelooft", "geloofd", "geloof", "geloven"],
      answer: "geloof",
    },
    {
      question: "'Opstaan' in de ik-vorm is:",
      options: ["ik opstaan", "ik sta op", "ik staat op", "ik sta"],
      answer: "ik sta op",
    },
    {
      question: "Wat is de stam van 'proberen'?",
      options: ["probeer", "probeert", "prob", "proberen"],
      answer: "probeer",
    },
    {
      question: "Hoe schrijf je de hij-vorm van 'zitten'?",
      options: ["zit", "zitt", "zidt", "zitd"],
      answer: "zit",
    },
  ],
},
{
  id: "nl-cijfers-datum-1",
  title: "Cijfers, getallen en datum",
  level: 1,
  topic: "Getallen & Datum",
  body: "Een complete les over hoofdtelwoorden, rangtelwoorden en de datum in het Nederlands. Alles over spelling, uitspraak, voorzetsels en veelgemaakte fouten.",
  overview:
    "Hoofdtelwoorden geven een aantal aan (één, twaalf, dertig), rangtelwoorden een volgorde (eerste, twaalfde). De datum schrijf je met de dag (als hoofdtelwoord) + maand + jaar; je gebruikt *op* bij een exacte datum en *in* bij een maand of jaar.",

  // ── Rules cards ────────────────────────────────────────────────────
  rulesTable: [
    {
      rule: "Trema bij klinkerbotsing",
      structure: "Bij een klinkerbotsing (twee + en + twintig) schrijf je een trema op de eerste e van de uitgang: tweeëntwintig.",
      example: "tweeëntwintig, drieëntwintig, maar eenentwintig (geen botsing)",
      usage: "Zonder trema zou je tweeëntwintig verkeerd uitspreken. Het trema geeft aan dat een nieuwe lettergreep begint.",
    },
    {
      rule: "Eenheid vóór tiental",
      structure: "In getallen van 21 t/m 99 komt de eenheid eerst, daarna het tiental, verbonden met -en-.",
      example: "eenentwintig, vijfendertig, achtenzeventig, negenennegentig",
      usage: "Let op de volgorde: 25 = vijfentwintig, niet twintigvijf. Dit is een vaste regel in het Nederlands.",
    },
    {
      rule: "Voorzetsels bij datum",
      structure: "*op* + specifieke dag/datum\n*in* + maand of jaar",
      example: "op maandag, op 5 mei, op mijn verjaardag\nin januari, in 2024, in de zomer",
      usage: "Vandaag/morgen/gisteren krijgen nooit *op*: Vandaag is het 10 mei.",
    },
    {
      rule: "Rangtelwoorden: -de of -ste",
      structure: "1e,2e,3e onregelmatig; 4e t/m 19e +de; 20e en hoger +ste. Uitzondering: 8e = achtste.",
      example: "eerste, tweede, derde, vierde, elfde, twintigste, honderdste",
      usage: "Onthoud: twaalfde (met f!), twintigste (g blijft), achtste (niet achtde).",
    },
    {
      rule: "Dagen en maanden: kleine letters",
      structure: "Schrijf dagen en maanden met een kleine letter, tenzij aan het begin van een zin.",
      example: "maandag, januari; maar: Maandag begint de cursus.",
      usage: "Dit geldt ook in formele brieven: 12 januari 2024, niet 12 Januari.",
    },
    {
      rule: "Jaartallen uitspreken",
      structure: "Tot 2000 in twee blokken (19|95); vanaf 2000 als tweeduizend + ...",
      example: "1995 = negentien vijfennegentig\n2005 = tweeduizend vijf\n2024 = tweeduizend vierentwintig",
      usage: "In de spreektaal hoor je ook 'twintig twintig' voor 2020, maar formeel is 'tweeduizend twintig'.",
    },
  ],

  // ── Detailed accordion sections ────────────────────────────────────
  details: [
    {
      title: "Hoofdtelwoorden 0–20 (uit het hoofd leren)",
      body: `<p>De basisgetallen van 0 tot en met 20 moet je uit je hoofd kennen.</p>
      <table class="my-4 rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm w-full">
        <thead>
          <tr class="bg-slate-100 dark:bg-slate-800">
            <th class="px-3 py-2 text-left text-sm font-bold">Getal</th>
            <th class="px-3 py-2 text-left text-sm font-bold">Schrijfwijze</th>
          </tr>
        </thead>
        <tbody>
          <tr><td class="px-3 py-1.5">0</td><td class="px-3 py-1.5">nul</td></tr>
          <tr><td class="px-3 py-1.5">1</td><td class="px-3 py-1.5">één</td></tr>
          <tr><td class="px-3 py-1.5">2</td><td class="px-3 py-1.5">twee</td></tr>
          <tr><td class="px-3 py-1.5">3</td><td class="px-3 py-1.5">drie</td></tr>
          <tr><td class="px-3 py-1.5">4</td><td class="px-3 py-1.5">vier</td></tr>
          <tr><td class="px-3 py-1.5">5</td><td class="px-3 py-1.5">vijf</td></tr>
          <tr><td class="px-3 py-1.5">6</td><td class="px-3 py-1.5">zes</td></tr>
          <tr><td class="px-3 py-1.5">7</td><td class="px-3 py-1.5">zeven</td></tr>
          <tr><td class="px-3 py-1.5">8</td><td class="px-3 py-1.5">acht</td></tr>
          <tr><td class="px-3 py-1.5">9</td><td class="px-3 py-1.5">negen</td></tr>
          <tr><td class="px-3 py-1.5">10</td><td class="px-3 py-1.5">tien</td></tr>
          <tr><td class="px-3 py-1.5">11</td><td class="px-3 py-1.5">elf</td></tr>
          <tr><td class="px-3 py-1.5">12</td><td class="px-3 py-1.5">twaalf</td></tr>
          <tr><td class="px-3 py-1.5">13</td><td class="px-3 py-1.5">dertien</td></tr>
          <tr><td class="px-3 py-1.5">14</td><td class="px-3 py-1.5">veertien</td></tr>
          <tr><td class="px-3 py-1.5">15</td><td class="px-3 py-1.5">vijftien</td></tr>
          <tr><td class="px-3 py-1.5">16</td><td class="px-3 py-1.5">zestien</td></tr>
          <tr><td class="px-3 py-1.5">17</td><td class="px-3 py-1.5">zeventien</td></tr>
          <tr><td class="px-3 py-1.5">18</td><td class="px-3 py-1.5">achttien</td></tr>
          <tr><td class="px-3 py-1.5">19</td><td class="px-3 py-1.5">negentien</td></tr>
          <tr><td class="px-3 py-1.5">20</td><td class="px-3 py-1.5">twintig</td></tr>
        </tbody>
      </table>
      <ul>
        <li><strong>één</strong> schrijf je met accenten als je het cijfer bedoelt, om verwarring met het lidwoord <em>een</em> te voorkomen.</li>
        <li><strong>zeventien</strong> en <strong>negentien</strong> hebben de eenheid vóór ‘tien’, met -en-.</li>
        <li><strong>achttien</strong> heeft een dubbele t: acht + tien.</li>
        <li><strong>twintig</strong> eindigt op -ig, niet op -ig? Twintig.</li>
      </ul>`,
    },
    {
      title: "Tientallen, eenheden en honderdtallen",
      body: `<p>De tientallen van 20 tot en met 100.</p>
      <table class="my-4 rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm w-full">
        <thead>
          <tr class="bg-indigo-50 dark:bg-indigo-900/30">
            <th class="px-3 py-2 text-left text-sm font-bold">Getal</th>
            <th class="px-3 py-2 text-left text-sm font-bold">Schrijfwijze</th>
            <th class="px-3 py-2 text-left text-sm font-bold">Opmerking</th>
          </tr>
        </thead>
        <tbody>
          <tr><td class="px-3 py-1.5">20</td><td class="px-3 py-1.5">twintig</td><td class="px-3 py-1.5">eigen vorm</td></tr>
          <tr><td class="px-3 py-1.5">30</td><td class="px-3 py-1.5">dertig</td><td class="px-3 py-1.5">onregelmatig</td></tr>
          <tr><td class="px-3 py-1.5">40</td><td class="px-3 py-1.5">veertig</td><td class="px-3 py-1.5">onregelmatig</td></tr>
          <tr><td class="px-3 py-1.5">50</td><td class="px-3 py-1.5">vijftig</td><td class="px-3 py-1.5">v→f, ij blijft</td></tr>
          <tr><td class="px-3 py-1.5">60</td><td class="px-3 py-1.5">zestig</td><td class="px-3 py-1.5">regelmatig</td></tr>
          <tr><td class="px-3 py-1.5">70</td><td class="px-3 py-1.5">zeventig</td><td class="px-3 py-1.5">regelmatig</td></tr>
          <tr><td class="px-3 py-1.5">80</td><td class="px-3 py-1.5">tachtig</td><td class="px-3 py-1.5">onregelmatig</td></tr>
          <tr><td class="px-3 py-1.5">90</td><td class="px-3 py-1.5">negentig</td><td class="px-3 py-1.5">regelmatig</td></tr>
          <tr><td class="px-3 py-1.5">100</td><td class="px-3 py-1.5">honderd</td><td class="px-3 py-1.5"></td></tr>
        </tbody>
      </table>

      <p><strong>Eenheden en tientallen combineren (21–99):</strong></p>
      <p>Je zegt de eenheid eerst, dan het tiental, verbonden met -en-. Bij klinkerbotsing komt er een trema op de eerste e van de uitgang.</p>
      <ul>
        <li>21: eenentwintig</li>
        <li>22: tweeëntwintig (trema!)</li>
        <li>23: drieëntwintig</li>
        <li>24: vierentwintig</li>
        <li>25: vijfentwintig</li>
        <li>…</li>
        <li>57: zevenenvijftig</li>
        <li>84: vierentachtig</li>
        <li>99: negenennegentig</li>
      </ul>
      <p><strong>Trema-regel:</strong> alleen als er klinkerbotsing is. Eenentwintig heeft geen trema, want er is geen botsing.</p>

      <p><strong>Honderdtallen en duizendtallen:</strong></p>
      <table class="my-4 rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm w-full">
        <thead>
          <tr class="bg-emerald-50 dark:bg-emerald-900/30">
            <th class="px-3 py-2 text-left text-sm font-bold">Getal</th>
            <th class="px-3 py-2 text-left text-sm font-bold">Schrijfwijze</th>
          </tr>
        </thead>
        <tbody>
          <tr><td class="px-3 py-1.5">200</td><td class="px-3 py-1.5">tweehonderd</td></tr>
          <tr><td class="px-3 py-1.5">300</td><td class="px-3 py-1.5">driehonderd</td></tr>
          <tr><td class="px-3 py-1.5">1000</td><td class="px-3 py-1.5">duizend</td></tr>
          <tr><td class="px-3 py-1.5">2000</td><td class="px-3 py-1.5">tweeduizend</td></tr>
          <tr><td class="px-3 py-1.5">1.000.000</td><td class="px-3 py-1.5">één miljoen</td></tr>
          <tr><td class="px-3 py-1.5">1.000.000.000</td><td class="px-3 py-1.5">één miljard</td></tr>
        </tbody>
      </table>
      <p><em>Miljoen</em> en <em>miljard</em> zijn losse woorden; je schrijft dus <strong>drie miljoen</strong>, niet driemiljoen. Duizendtallen schrijf je aan elkaar: drieduizend.</p>`,
    },
    {
      title: "Rangtelwoorden",
      body: `<p>Rangtelwoorden maak je meestal door <strong>-de</strong> of <strong>-ste</strong> achter het hoofdtelwoord te plakken.</p>
      <table class="my-4 rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm w-full">
        <thead>
          <tr class="bg-amber-50 dark:bg-amber-900/30">
            <th class="px-3 py-2 text-left text-sm font-bold">Getal</th>
            <th class="px-3 py-2 text-left text-sm font-bold">Rangtelwoord</th>
            <th class="px-3 py-2 text-left text-sm font-bold">Regel</th>
          </tr>
        </thead>
        <tbody>
          <tr><td class="px-3 py-1.5">1</td><td class="px-3 py-1.5">eerste</td><td class="px-3 py-1.5">onregelmatig</td></tr>
          <tr><td class="px-3 py-1.5">2</td><td class="px-3 py-1.5">tweede</td><td class="px-3 py-1.5">onregelmatig</td></tr>
          <tr><td class="px-3 py-1.5">3</td><td class="px-3 py-1.5">derde</td><td class="px-3 py-1.5">onregelmatig</td></tr>
          <tr><td class="px-3 py-1.5">4</td><td class="px-3 py-1.5">vierde</td><td class="px-3 py-1.5">+de</td></tr>
          <tr><td class="px-3 py-1.5">8</td><td class="px-3 py-1.5">achtste</td><td class="px-3 py-1.5">+ste (uitz.!)</td></tr>
          <tr><td class="px-3 py-1.5">12</td><td class="px-3 py-1.5">twaalfde</td><td class="px-3 py-1.5">+de</td></tr>
          <tr><td class="px-3 py-1.5">20</td><td class="px-3 py-1.5">twintigste</td><td class="px-3 py-1.5">+ste</td></tr>
          <tr><td class="px-3 py-1.5">21</td><td class="px-3 py-1.5">eenentwintigste</td><td class="px-3 py-1.5">+ste</td></tr>
          <tr><td class="px-3 py-1.5">100</td><td class="px-3 py-1.5">honderdste</td><td class="px-3 py-1.5">+ste</td></tr>
        </tbody>
      </table>
      <p><strong>Data en rangtelwoorden:</strong> In formele schrijftaal kun je de dag als rangtelwoord schrijven (5e mei), maar je spreekt het meestal uit als hoofdtelwoord (vijf mei). In brieven schrijf je de datum zonder 'e': <em>12 januari 2024</em>.</p>`,
    },
    {
      title: "Datum – dagen, maanden, jaartallen",
      body: `<p><strong>Dagen van de week</strong></p>
      <table class="my-4 rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm w-full">
        <thead>
          <tr class="bg-indigo-50 dark:bg-indigo-900/30">
            <th class="px-3 py-2 text-left text-sm font-bold">Nederlands</th>
            <th class="px-3 py-2 text-left text-sm font-bold">Afkorting</th>
          </tr>
        </thead>
        <tbody>
          <tr><td class="px-3 py-1.5">maandag</td><td class="px-3 py-1.5">ma.</td></tr>
          <tr><td class="px-3 py-1.5">dinsdag</td><td class="px-3 py-1.5">di.</td></tr>
          <tr><td class="px-3 py-1.5">woensdag</td><td class="px-3 py-1.5">wo.</td></tr>
          <tr><td class="px-3 py-1.5">donderdag</td><td class="px-3 py-1.5">do.</td></tr>
          <tr><td class="px-3 py-1.5">vrijdag</td><td class="px-3 py-1.5">vr.</td></tr>
          <tr><td class="px-3 py-1.5">zaterdag</td><td class="px-3 py-1.5">za.</td></tr>
          <tr><td class="px-3 py-1.5">zondag</td><td class="px-3 py-1.5">zo.</td></tr>
        </tbody>
      </table>

      <p><strong>Maanden van het jaar</strong></p>
      <table class="my-4 rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm w-full">
        <thead>
          <tr class="bg-emerald-50 dark:bg-emerald-900/30">
            <th class="px-3 py-2 text-left text-sm font-bold">Nederlands</th>
            <th class="px-3 py-2 text-left text-sm font-bold">Afkorting</th>
          </tr>
        </thead>
        <tbody>
          <tr><td class="px-3 py-1.5">januari</td><td class="px-3 py-1.5">jan.</td></tr>
          <tr><td class="px-3 py-1.5">februari</td><td class="px-3 py-1.5">feb.</td></tr>
          <tr><td class="px-3 py-1.5">maart</td><td class="px-3 py-1.5">mrt.</td></tr>
          <tr><td class="px-3 py-1.5">april</td><td class="px-3 py-1.5">apr.</td></tr>
          <tr><td class="px-3 py-1.5">mei</td><td class="px-3 py-1.5">—</td></tr>
          <tr><td class="px-3 py-1.5">juni</td><td class="px-3 py-1.5">—</td></tr>
          <tr><td class="px-3 py-1.5">juli</td><td class="px-3 py-1.5">—</td></tr>
          <tr><td class="px-3 py-1.5">augustus</td><td class="px-3 py-1.5">aug.</td></tr>
          <tr><td class="px-3 py-1.5">september</td><td class="px-3 py-1.5">sep./sept.</td></tr>
          <tr><td class="px-3 py-1.5">oktober</td><td class="px-3 py-1.5">okt.</td></tr>
          <tr><td class="px-3 py-1.5">november</td><td class="px-3 py-1.5">nov.</td></tr>
          <tr><td class="px-3 py-1.5">december</td><td class="px-3 py-1.5">dec.</td></tr>
        </tbody>
      </table>

      <p><strong>Jaartallen uitspreken:</strong></p>
      <ul>
        <li>1900 – negentienhonderd</li>
        <li>1901–1999 – verdeel in tweeën: 19|85 = negentien vijfentachtig</li>
        <li>2000 – tweeduizend</li>
        <li>2001–2009 – tweeduizend (en) één, tweeduizend twee, …</li>
        <li>2010–heden – tweeduizend tien, tweeduizend twintig, … (informeel ook 'twintig tien', maar formeel is tweeduizend tien)</li>
      </ul>

      <p><strong>Volledige datumnotatie:</strong></p>
      <ul>
        <li>Formeel: <em>Amsterdam, 12 januari 2024</em> (dag zonder 'e', maand klein)</li>
        <li>Kort: 12-01-2024 (dd-mm-jjjj)</li>
        <li>In zinnen: <em>Ik ben geboren op 3 maart 1995.</em></li>
      </ul>
      <p><strong>Voorzetsels:</strong> <em>op</em> + dag/datum; <em>in</em> + maand/jaar; geen voorzetsel bij 'vandaag'.</p>`,
    },
  ],

  // ── Callouts ───────────────────────────────────────────────────────
  callouts: [
    {
      type: "key",
      label: "Accent op één",
      text: "Schrijf **één** met accenten als je het cijfer bedoelt, om verwarring met het lidwoord *een* te voorkomen.",
    },
    {
      type: "remember",
      label: "Trema niet vergeten",
      text: "Bij klinkerbotsing: **tweeëntwintig**, **drieëntwintig**, maar **eenentwintig** zonder trema.",
    },
    {
      type: "tip",
      label: "Voorzetsels",
      text: "**Op** voor een exacte datum of dag: *op 5 mei*, *op maandag*. **In** voor een maand of jaar: *in januari*, *in 2024*.",
    },
    {
      type: "key",
      label: "Dagen en maanden klein",
      text: "Schrijf **maandag**, **januari** met een kleine letter, tenzij aan het begin van een zin.",
    },
    {
      type: "tip",
      label: "Jaartallen in tweeën",
      text: "Tot 2000 verdeel je het jaartal: 1998 = **negentien achtennegentig**. Vanaf 2000: **tweeduizend** …",
    },
  ],

  // ── Common mistakes ────────────────────────────────────────────────
  commonMistakes: [
    {
      incorrect: "Ik ben geboren in 15 mei.",
      correct: "Ik ben geboren op 15 mei.",
      explanation: "Exacte datum → *op*, niet *in*.",
    },
    {
      incorrect: "Het is op vandaag 10 mei.",
      correct: "Vandaag is het 10 mei.",
      explanation: "Bij *vandaag* gebruik je geen voorzetsel.",
    },
    {
      incorrect: "12 Januari 2024",
      correct: "12 januari 2024",
      explanation: "Maanden schrijf je met een kleine letter.",
    },
    {
      incorrect: "dertigste als dertigde",
      correct: "dertigste",
      explanation: "Tientallen krijgen *-ste*, niet *-de*.",
    },
    {
      incorrect: "twaalfste",
      correct: "twaalfde",
      explanation: "Tot en met 19: *-de*, behalve eerste, tweede, derde, achtste.",
    },
    {
      incorrect: "achtde",
      correct: "achtste",
      explanation: "8e is *achtste*, een uitzondering.",
    },
    {
      incorrect: "tweeentwintig",
      correct: "tweeëntwintig",
      explanation: "Trema verplicht om klinkerbotsing op te heffen.",
    },
    {
      incorrect: "Ik zie je op 12e mei.",
      correct: "Ik zie je op 12 mei.",
      explanation: "In geschreven datum geen 'e', tenzij je *de twaalfde mei* voluit schrijft.",
    },
    {
      incorrect: "De trein vertrekt op 14:30.",
      correct: "De trein vertrekt om 14:30 uur.",
      explanation: "Voor tijd gebruik je *om*, niet *op*.",
    },
    {
      incorrect: "2005 als twintig vijf",
      correct: "tweeduizend vijf",
      explanation: "Formeel is het *tweeduizend vijf*.",
    },
  ],

  // ── Quick review ───────────────────────────────────────────────────
  review: [
    "**Hoofdtelwoorden 0-20**: uit het hoofd leren. Let op *één*, *zeventien*, *achttien*.",
    "**Tientallen**: dertig, veertig, vijftig, tachtig deels onregelmatig.",
    "**Samengestelde getallen**: eenheid + tiental, met trema bij botsing (tweeëntwintig).",
    "**Rangtelwoorden**: 1-3 onregelmatig, 4-19 +de, 20+ +ste, 8=achtste.",
    "**Datum**: dag (hoofdtelwoord) + maand (klein) + jaar. *Op* + datum, *in* + maand/jaar.",
    "**Jaartallen**: tot 2000 in tweeën (negentien vijfennegentig), daarna tweeduizend+...",
    "**Schrijfwijze**: dagen/maanden met kleine letters; in brieven: 12 januari 2024.",
  ],

  // ── Practice questions (tap to reveal) ─────────────────────────────
  qa: [
    { question: "Hoe schrijf je 12 voluit?", answer: "twaalf" },
    { question: "Hoe schrijf je 25?", answer: "vijfentwintig" },
    { question: "Hoe schrijf je 37?", answer: "zevenendertig" },
    { question: "Hoe schrijf je 43 (let op trema)?", answer: "drieënveertig" },
    { question: "Hoe schrijf je 58?", answer: "achtenvijftig" },
    { question: "Hoe schrijf je 66?", answer: "zesenzestig" },
    { question: "Hoe schrijf je 74?", answer: "vierenzeventig" },
    { question: "Hoe schrijf je 81?", answer: "eenentachtig" },
    { question: "Hoe schrijf je 99?", answer: "negenennegentig" },
    { question: "Hoe schrijf je 100?", answer: "honderd" },
    { question: "Hoe schrijf je 321?", answer: "driehonderdeenentwintig" },
    { question: "Hoe schrijf je 1500?", answer: "duizend vijfhonderd / vijftienhonderd" },
    { question: "Hoe schrijf je 2022?", answer: "tweeduizend tweeëntwintig" },
    { question: "Hoe spreek je het jaartal 1999 uit?", answer: "negentien negenennegentig" },
    { question: "Hoe spreek je het jaartal 2025 uit?", answer: "tweeduizend vijfentwintig" },
    { question: "Wat is het rangtelwoord van 1?", answer: "eerste" },
    { question: "Wat is het rangtelwoord van 2?", answer: "tweede" },
    { question: "Wat is het rangtelwoord van 3?", answer: "derde" },
    { question: "Wat is het rangtelwoord van 8?", answer: "achtste" },
    { question: "Wat is het rangtelwoord van 12?", answer: "twaalfde" },
    { question: "Wat is het rangtelwoord van 20?", answer: "twintigste" },
    { question: "Wat is het rangtelwoord van 31?", answer: "eenendertigste" },
    { question: "Wat is het rangtelwoord van 100?", answer: "honderdste" },
    { question: "Welke vraag stel je om de datum te weten?", answer: "Welke datum is het vandaag? / Wat is de datum vandaag?" },
    { question: "Schrijf 05-03-2024 als formele datum.", answer: "5 maart 2024 (plaats, 5 maart 2024)" },
    { question: "Hoe zeg je: 'mijn verjaardag is op 23 juli'?", answer: "Op drieëntwintig juli." },
    { question: "Welk voorzetsel hoort bij 'maandag'?", answer: "op" },
    { question: "Welk voorzetsel hoort bij 'de zomer'?", answer: "in" },
    { question: "Welk voorzetsel hoort bij '1 januari'?", answer: "op" },
    { question: "Welk voorzetsel hoort bij '2024'?", answer: "in" },
    { question: "Hoe spreek je 1998 uit?", answer: "negentien achtennegentig" },
    { question: "Hoe spreek je 2005 uit?", answer: "tweeduizend vijf" },
    { question: "Is 'Ik zie je op Zaterdag' correct?", answer: "Nee, 'zaterdag' moet met kleine letter." },
    { question: "Is 'De meeting is in 15 april' correct?", answer: "Nee, het moet 'op 15 april' zijn." },
    { question: "Is 'Hij is geboren op 1990' correct?", answer: "Nee, 'in 1990' (jaar = in)." },
    { question: "Hoe schrijf je 42e voluit?", answer: "tweeënveertigste" },
    { question: "Hoe schrijf je 53e voluit?", answer: "drieënvijftigste" },
    { question: "Hoe schrijf je 99e voluit?", answer: "negenennegentigste" },
    { question: "Hoe zeg je 'Ik ga vrijdag 7 oktober op vakantie' in volledige woorden?", answer: "Ik ga vrijdag zeven oktober op vakantie." },
    { question: "Wat is de datum morgen als het vandaag 28 februari 2024 is?", answer: "29 februari 2024 (schrikkeljaar)" },
    { question: "Hoe schrijf je het jaartal 1845 in woorden?", answer: "achttienhonderd vijfenveertig (of achttienvijfenveertig)" },
  ],

  // ── Multiple-choice exercises ──────────────────────────────────────
  exercises: [
    {
      question: "Wat is de juiste schrijfwijze van 43?",
      options: ["drieënveertig", "drieenveertig", "driënveertig", "drieënveertig (met trema)"],
      answer: "drieënveertig",
    },
    {
      question: "Welk rangtelwoord hoort bij 20?",
      options: ["twintigde", "twintigste", "twintigde", "twintigste"],
      answer: "twintigste",
    },
    {
      question: "Kies het juiste voorzetsel: Ik ben geboren ... 15 mei.",
      options: ["op", "in", "om"],
      answer: "op",
    },
    {
      question: "Wat is de correcte uitspraak van 2005?",
      options: ["tweeduizend vijf", "twintig vijf", "tweeduizend vijftig"],
      answer: "tweeduizend vijf",
    },
    {
      question: "Welke zin is correct?",
      options: ["Ik zie je op Maandag.", "Ik zie je op maandag.", "Ik zie je maandag."],
      answer: "Ik zie je op maandag.",
    },
    {
      question: "Hoe schrijf je 18e voluit?",
      options: ["achttiende", "achtste", "achttienste", "achttiende"],
      answer: "achttiende",
 },
  ]
}
];