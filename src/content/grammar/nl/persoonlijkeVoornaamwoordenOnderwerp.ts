import type { GrammarLesson } from "../../types";

export const persoonlijkeVoornaamwoordenOnderwerp: GrammarLesson = {
  id: "nl-persoonlijkevoornaamwoorden-onderwerp-1",
  title: "Persoonlijke Voornaamwoorden (Onderwerp): ik, jij, u, hij, zij, het, wij, jullie, zij",
  level: 1,
  topic: "Persoonlijke voornaamwoorden (onderwerp)", // [G] Grammatica
  body: "Leer de onderwerpsvormen van persoonlijke voornaamwoorden. Wanneer gebruik je ik, jij, u, hij, zij, het, wij, jullie, zij? Met nadruk, inversie en alle valkuilen.",
  overview:
    "De onderwerpsvorm van het persoonlijk voornaamwoord vertelt **wie of wat de handeling uitvoert**. In deze **ultieme, perfecte les** leer je alles over **ik, jij/je, u, hij, zij/ze, het, wij/we, jullie** en **zij/ze**. Je ontdekt het verschil tussen volle en onbeklemtoonde vormen, de beruchte inversieregel bij jij/je, hoe je u en jullie correct gebruikt, en waarom 'hun' nooit onderwerp mag zijn. Met heldere tabellen, talloze voorbeelden, pro tips en 7 ijzersterke oefenvragen wordt het haarscherp.",
  anchorSectionId: "onderwerpsvormen",
  exercises: [],
  timeExpressionsLabel: "Overzicht onderwerpsvormen 👤",
  timeExpressions: {
    header: "Persoon | Volle vorm (nadruk) | Onbeklemtoond (normaal) | Wanneer volle vorm?",
    rows: [
      ["1 ev", "**ik**", "(’k, spreektaal)", "Vrijwel altijd ‘ik’; ’k alleen na inversie of in snelle spreektaal."],
      ["2 ev (informeel)", "**jij**", "**je**", "‘Jij’ bij contrast/nadruk; anders altijd ‘je’."],
      ["2 ev (formeel)", "**u**", "–", "Beleefd; voor één of meer personen; onderwerp en object gelijk."],
      ["3 ev mannelijk", "**hij**", "(’ie, spreektaal)", "Mannelijke personen/dieren én mannelijke de-woorden."],
      ["3 ev vrouwelijk", "**zij**", "**ze**", "Vrouwelijke personen/dieren én vrouwelijke de-woorden."],
      ["3 ev onzijdig", "**het**", "(’t, spreektaal)", "Alle het-woorden; ook voor zaken en abstracte begrippen."],
      ["1 mv", "**wij**", "**we**", "‘Wij’ bij contrast/nadruk; anders ‘we’."],
      ["2 mv (informeel)", "**jullie**", "–", "Meervoud van ‘jij’; werkwoord altijd in het meervoud."],
      ["3 mv (personen & zaken)", "**zij**", "**ze**", "‘Zij’ bij contrast/nadruk; anders ‘ze’."],
    ],
  },
  details: [
    {
      title: "Wat is de onderwerpsvorm en waarom is hij onmisbaar? 🎯",
      body: `
        <p>De onderwerpsvorm van het persoonlijk voornaamwoord vertelt <strong>wie of wat de handeling uitvoert</strong> of <strong>in een toestand verkeert</strong>. Het onderwerp regelt de vorm van het werkwoord (persoonsvorm). Zonder deze voornaamwoorden kun je geen enkele Nederlandse zin bouwen.</p>
        <p>Voorbeelden:</p>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>Ik</strong> loop naar school.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>Hij</strong> is vandaag jarig.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>Wij</strong> hebben een nieuwe auto gekocht.</li>
        </ul>
        <p>Het juiste voornaamwoord kiezen hangt af van drie dingen:</p>
        <ol class="my-2 space-y-1.5 pl-5 list-decimal">
          <li><strong>Persoon</strong> (1e, 2e, 3e)</li>
          <li><strong>Getal</strong> (enkelvoud of meervoud)</li>
          <li><strong>Beleefdheid / nadruk</strong> (informeel vs. formeel; vol vs. onbeklemtoond)</li>
        </ol>
      `,
    },
    {
      title: "Elk voornaamwoord uitgepakt – met alle nuances 🧩",
      body: `
        <h3 class="text-lg font-bold mt-4 mb-2">1e enkelvoud: IK</h3>
        <p>Altijd ‘ik’. In snelle spreektaal hoor je soms <em>’k</em> (vooral na inversie: <em>Dat weet ’k niet</em>), maar schrijf dat nooit in formele teksten.</p>
        
        <h3 class="text-lg font-bold mt-6 mb-2">2e enkelvoud: JIJ / JE / U</h3>
        <p><strong>Informeel – jij en je</strong><br>
        <em>Jij</em> = nadrukkelijk: <strong>Jij</strong> moet dat doen, niet ik!<br>
        <em>Je</em> = standaard: <strong>Je</strong> loopt veel te hard.</p>
        
        <p class="mt-2"><strong>📌 Inversieregel (bij vraagzin):</strong> Als <em>je</em> of <em>jij</em> achter de persoonsvorm komt, verandert de werkwoordsuitgang:</p>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><em>Je loopt.</em> → <em>Loop <strong>je</strong>?</em> (‑t valt weg)</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><em>Jij loopt.</em> → <em>Loop <strong>jij</strong>?</em> (‑t blijft staan)</li>
        </ul>
        <p>Dus: <strong>Loop je?</strong> (zonder t) maar <strong>Loop jij?</strong> (met t). Ezelsbrug: <em>jij</em> is langer, dus de t blijft. <em>je</em> is kort, dus de t valt weg.</p>
        
        <p class="mt-2"><strong>Formeel – u</strong><br>
        <strong>U</strong> is de beleefdheidsvorm. Je gebruikt hem tegen onbekenden, ouderen, mensen met gezag.<br>
        <strong>U</strong> werkt voor één persoon én voor meerdere: <em>Mevrouw, hebt <strong>u</strong> vragen?</em> en <em>Dames en heren, hebt <strong>u</strong> vragen?</em><br>
        Werkwoordsvormen: <em>u hebt / u heeft</em> (beide goed), <em>u bent / u is</em> (beide goed, ‘u is’ is formeler).</p>
        
        <h3 class="text-lg font-bold mt-6 mb-2">3e enkelvoud: HIJ / ZIJ / HET</h3>
        <p>Dit is het moeilijkste onderdeel, want de keuze hangt af van het <strong>grammaticaal geslacht</strong> van het zelfstandig naamwoord waarnaar je verwijst.</p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Lidwoord</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Geslacht</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Verwijswoord</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Voorbeeld</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">de</td><td class="px-3 py-2 text-sm">mannelijk</td><td class="px-3 py-2 text-sm"><strong>hij</strong></td><td class="px-3 py-2 text-sm">De stoel is oud. <strong>Hij</strong> moet weg.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">de</td><td class="px-3 py-2 text-sm">vrouwelijk</td><td class="px-3 py-2 text-sm"><strong>zij</strong></td><td class="px-3 py-2 text-sm">De regering heeft plannen. <strong>Zij</strong> wil vernieuwen.</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">het</td><td class="px-3 py-2 text-sm">onzijdig</td><td class="px-3 py-2 text-sm"><strong>het</strong></td><td class="px-3 py-2 text-sm">Het boek is spannend. <strong>Het</strong> ligt op tafel.</td></tr>
            </tbody>
          </table>
        </div>
        <p><strong>Mannelijk (hij):</strong> personen, mannelijke dieren, de meeste concrete de-woorden (de stoel, de auto, de film).</p>
        <p><strong>Vrouwelijk (zij):</strong> personen, vrouwelijke dieren, de-woorden op -ing, -heid, -tie, -teit, -schap, -ij, -de/-te, en traditioneel vrouwelijke woorden (de zon, de maan, de kerk, de aarde, de regering).</p>
        <p><strong>Onzijdig (het):</strong> alle het-woorden (het boek, het kind, het water).</p>
        <p><span class="pas-op-highlight">⚠️ PAS OP</span> Bij het-woorden die een persoon aanduiden (zoals <em>het meisje</em>) geldt grammaticaal <strong>het</strong>, maar in de praktijk wordt vaak het natuurlijk geslacht gebruikt: <em>Het meisje speelt. <strong>Zij</strong> lacht.</em> In formele schrijftaal is <strong>het</strong> altijd juist; in spreektaal is <strong>zij</strong> ingeburgerd.</p>
        
        <h3 class="text-lg font-bold mt-6 mb-2">1e meervoud: WIJ / WE</h3>
        <p><em>Wij</em> = nadruk, contrast: <strong>Wij</strong> gaan wel, maar <strong>zij</strong> niet.<br>
        <em>We</em> = standaard: <strong>We</strong> gaan morgen naar het strand.</p>
        
        <h3 class="text-lg font-bold mt-6 mb-2">2e meervoud: JULLIE</h3>
        <p><em>Jullie</em> is het informele meervoud van <em>jij</em>. Het werkwoord staat <strong>altijd in het meervoud</strong>: <em>jullie hebben, jullie zijn, jullie werken</em>. <strong>Nooit</strong> <em>jullie hebt</em> of <em>jullie is</em>! Tegenover een formele groep gebruik je <strong>u</strong>: <em>Dames, hebt u de uitnodiging ontvangen?</em></p>
        
        <h3 class="text-lg font-bold mt-6 mb-2">3e meervoud: ZIJ / ZE</h3>
        <p><em>Zij</em> = nadruk, contrast: <strong>Zij</strong> hebben het probleem opgelost, niet wij.<br>
        <em>Ze</em> = standaard: <strong>Ze</strong> zijn net aangekomen. Geldt voor personen én dingen: <em>De boeken? <strong>Ze</strong> liggen op tafel.</em></p>
      `,
    },
    {
      title: "Extra: HUN is nooit onderwerp! 🚫",
      body: `
        <p>Een van de hardnekkigste fouten in het Nederlands:</p>
        <p>❌ <strong>Hun</strong> hebben het gedaan.<br>
        ✅ <strong>Zij</strong> hebben het gedaan. (of <strong>Ze</strong> hebben het gedaan.)</p>
        <p><em>Hun</em> is uitsluitend een <strong>objectvorm</strong> (meewerkend voorwerp). Gebruik <em>zij/ze</em> voor het onderwerp. Onthoud: <em>hun</em> is alleen ‘aan hen’ of ‘voor hen’.</p>
      `,
    },
    {
      title: "Spreektaalvarianten – wat hoor je op straat? 🗣️",
      body: `
        <p>In informele gesprekken worden onderwerpsvormen vaak korter uitgesproken. Deze vormen zijn in officiële teksten niet gewenst, maar wel goed om te herkennen:</p>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>’k</strong> – ik (na inversie: <em>Dat weet ’k niet.</em>)</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>’ie</strong> – hij (<em>Heeft ’ie dat gedaan?</em>)</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>ze</strong> – zij (vrouwelijk enkelvoud of meervoud) (<em>Ze loopt.</em>)</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>’t</strong> – het (<em>’t Regent.</em>)</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>we</strong> – wij (meestal onbeklemtoond, maar formeel is ‘we’ ook geaccepteerd)</li>
        </ul>
        <p>Deze korte vormen schrijf je bijna nooit in formele brieven of examens, tenzij je spreektaal citeert.</p>
      `,
    },
  ],
  rulesTable: [
    {
      rule: "Nadruk: volle vormen vs. onbeklemtoonde",
      structure: "Gebruik **jij, wij, zij** alleen voor **nadruk** of **contrast**. In alle andere gevallen is de onbeklemtoonde vorm (**je, we, ze**) de standaard.",
      example: "**Jij** bent het, niet ik. (contrast) vs. **Je** bent lief. (neutraal).",
      usage: "De onbeklemtoonde vorm is altijd veilig, tenzij je iemand expliciet wilt benadrukken.",
    },
    {
      rule: "Inversieregel bij jij/je",
      structure: "In vraagzinnen: achter **je** verdwijnt de ‑t van de persoonsvorm; achter **jij** blijft de ‑t staan.",
      example: "Loop **je**? (zonder t) – Loop **jij**? (met t).",
      usage: "Ezelsbrug: 'jij' is langer, dus de t blijft; 'je' is kort, dus de t valt weg.",
    },
    {
      rule: "Hij/zij/het: volg het grammaticaal geslacht",
      structure: "Mannelijke de-woorden → **hij**. Vrouwelijke de-woorden → **zij**. Het-woorden → **het**.",
      example: "De stoel (m) → **hij**. De regering (v) → **zij**. Het boek (o) → **het**.",
      usage: "Gebruik de uitgangsregels en de traditionele lijst voor vrouwelijke woorden.",
    },
    {
      rule: "U is enkelvoud én meervoud, altijd beleefd",
      structure: "**U** gebruik je voor één of meer personen die je met respect aanspreekt. Zowel onderwerp als object.",
      example: "**U** loopt snel. **U** hebt gelijk. Dank **u** wel.",
      usage: "Er is geen aparte meervoudsvorm. Ook bij meerdere personen blijft het ‘u’.",
    },
    {
      rule: "Jullie is meervoud → werkwoord in meervoud",
      structure: "**Jullie** is de enige meervoudsvorm voor de tweede persoon. Het werkwoord krijgt de meervouds‑t.",
      example: "**Jullie zijn**, **jullie hebben**, **jullie lopen**.",
      usage: "Zeg nooit ‘jullie is’, maar ‘jullie zijn’.",
    },
    {
      rule: "Hun is nooit onderwerp",
      structure: "**Hun** is uitsluitend een objectvorm (meewerkend voorwerp). Gebruik voor het onderwerp altijd **zij** of **ze**.",
      example: "❌ Hun komen. ✅ **Zij** komen. / **Ze** komen.",
      usage: "Stamp in: 'hun' = 'aan hen', nooit 'zij'.",
    },
  ],
  callouts: [
    { type: "remember", label: "Onthoud 1", text: "Nadruk = **jij, wij, zij**. Neutraal = **je, we, ze**." },
    { type: "remember", label: "Onthoud 2", text: "Inversie: **Loop je?** (zonder t) vs. **Loop jij?** (met t)." },
    { type: "remember", label: "Onthoud 3", text: "**Hij/zij/het** volgt het grammaticaal geslacht van het zelfstandig naamwoord." },
    { type: "remember", label: "Onthoud 4", text: "**U** is altijd beleefd en geldt voor één of meer personen." },
    { type: "remember", label: "Onthoud 5", text: "**Jullie** is meervoud: **jullie zijn, jullie hebben**." },
    { type: "remember", label: "Onthoud 6", text: "**Hun** is nooit onderwerp! Gebruik **zij/ze**." },
  ],
  commonMistakes: [
    { incorrect: "Hun gaan morgen.", correct: "Zij gaan morgen.", explanation: "Hun is nooit onderwerp." },
    { incorrect: "Loop jij? (zonder t)", correct: "Loop jij? (met t)", explanation: "Bij ‘jij’ blijft de t na inversie." },
    { incorrect: "Jullie is te laat.", correct: "Jullie zijn te laat.", explanation: "Jullie is meervoud, werkwoord dus meervoud." },
    { incorrect: "De regering, hij heeft plannen.", correct: "De regering, zij heeft plannen.", explanation: "Regering op -ing is vrouwelijk → zij." },
    { incorrect: "Het meisje, zij huilt. (formeel fout)", correct: "Het huilt. (grammaticaal)", explanation: "Grammaticaal onzijdig (het-woord); formeel is ‘het’ juist." },
    { incorrect: "We hebben gewonnen, maar ze niet. (contrast verzwakt)", correct: "Wij hebben gewonnen, maar zij niet.", explanation: "Contrast vraagt volle vormen." },
  ],
  review: [
    "**ik** – altijd ik (spreektaal ’k alleen na inversie).",
    "**jij / je** – ‘je’ is standaard, ‘jij’ bij contrast. Inversie: *Loop je?* (‑t weg) vs. *Loop jij?* (‑t blijft).",
    "**u** – formeel, enkelvoud én meervoud; werkwoordsvormen: u bent/u is, u hebt/u heeft.",
    "**hij / zij / het** – volg het geslacht van het znw (mannelijk → hij, vrouwelijk → zij, onzijdig → het).",
    "**wij / we** – ‘we’ standaard, ‘wij’ bij contrast.",
    "**jullie** – informeel meervoud, werkwoord altijd meervoud.",
    "**zij / ze** – 3e persoon meervoud; ‘ze’ standaard, ‘zij’ bij contrast.",
    "**Hun** als onderwerp is **fout!** Gebruik altijd zij/ze.",
  ],
  qa: [
    {
      question: "Wanneer gebruik je ‘jij’ in plaats van ‘je’?",
      answer: "‘Jij’ bij nadruk of contrast. ‘Je’ is de neutrale, onbeklemtoonde vorm. Voorbeeld: *Niet hij, maar jij moet dat doen.* (contrast) vs. *Je bent te laat.* (neutraal)",
    },
    {
      question: "Waarom is “Hun komen morgen” fout?",
      answer: "‘Hun’ is een objectvorm en kan nooit als onderwerp gebruikt worden. De juiste onderwerpsvorm is **Zij**: *Zij komen morgen.* (of *Ze komen morgen.*)",
    },
    {
      question: "In een vraagzin: *Loop jij* of *Loop je*? Wat is het spellingsverschil?",
      answer: "Achter *je* verdwijnt de t van de persoonsvorm: *Loop je?* (zonder t). Achter *jij* blijft de t staan: *Loop jij?* (met t). Dit komt omdat ‘jij’ nadrukkelijk is en de t behoudt.",
    },
    {
      question: "Je verwijst naar ‘de regering’. Welk onderwerpsvoornaamwoord gebruik je, en waarom?",
      answer: "‘De regering’ is vrouwelijk (eindigt op -ing), dus het juiste verwijswoord is **zij**: *De regering heeft haar plannen bekendgemaakt. Zij wil de economie stimuleren.*",
    },
    {
      question: "Waarom is “Jullie is uitgenodigd” grammaticaal fout?",
      answer: "‘Jullie’ is een meervoudig voornaamwoord, dus het werkwoord moet in het meervoud staan: **Jullie zijn uitgenodigd**.",
    },
    {
      question: "Vul in: “___ (Wij/We) gaan naar de film, maar ___ (zij/ze) blijven thuis.” Welke vormen benadrukken het contrast?",
      answer: "Bij contrast gebruik je de volle, beklemtoonde vormen: *Wij gaan naar de film, maar zij blijven thuis.*",
    },
    {
      question: "Wat is het onderwerpsvoornaamwoord voor ‘het boek’? En voor ‘het meisje’ (formeel)?",
      answer: "Beide zijn onzijdig (het-woorden), dus het juiste onderwerpsvoornaamwoord is **het**: *Het boek ligt op tafel. Het meisje speelt in de tuin.* In informele context mag je voor het meisje ook *zij* gebruiken, maar formeel is *het* de regel.",
    },
  ],
};