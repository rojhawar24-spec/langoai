import type { GrammarLesson } from "../../types";

export const schrijfvaardigheidBericht: GrammarLesson = {
  id: "nl-schrijfvaardigheid-bericht-1",
  title: "Schrijfvaardigheid: Een Kort Berichtje, E‑mail aan een Vriend",
  level: 1,
  topic: "Schrijven – Bericht en e-mail", // [Sch] Schrijven
  body: "Leer hoe je een kort appje of een informele e‑mail aan een vriend schrijft. Van begroeting tot afsluiting, met duidelijke voorbeelden.",
  overview:
    "In het dagelijks leven stuur je vaak korte berichtjes of een e‑mail naar een vriend. In deze **superduidelijke, praktijkgerichte les** ontdek je de opbouw van een informeel bericht, handige standaardzinnen, en hoe je tijd, plaats en afspraken helder opschrijft. Je leert ook het verschil in toon tussen een appje en een e‑mail, en hoe je met **je** en **jij** een vriendelijke, losse stijl houdt. Met heldere tabellen, uitgebreide voorbeelden, PAS OP‑waarschuwingen en 7 ijzersterke oefenvragen schrijf jij voortaan elk informeel bericht foutloos.",
  anchorSectionId: "belang",
  exercises: [],
  timeExpressionsLabel: "Opbouw van een kort berichtje (appje) 📱",
  timeExpressions: {
    header: "Onderdeel | Uitleg | Voorbeeld",
    rows: [
      ["Begroeting", "Een snelle, informele openingsgroet.", "Hoi! / Hé! / Hallo!"],
      ["Aanleiding / vraag", "Waarom stuur je het bericht?", "Heb je zin om morgen te gaan lunchen?"],
      ["Belangrijke details", "Tijd, plaats, prijs, meenemen, enz.", "Om 12:30 bij Café de Hoek?"],
      ["Afsluiting", "Een vriendelijke groet of een afsluitende zin.", "Groetjes! / Tot morgen! / Laat even weten of het lukt."],
    ],
  },
  details: [
    {
      title: "Waarom deze schrijfopdracht belangrijk is 🎯",
      body: `
        <p>In het dagelijkse leven stuur je vaak korte berichtjes via bijvoorbeeld WhatsApp, of een e‑mail naar een vriend of vriendin. Dat is heel anders dan een zakelijke brief. Je schrijft <strong>informeel</strong>, gebruikt <strong>je</strong> en <strong>jij</strong>, en de toon is <strong>vriendelijk en los</strong>. Toch moet je tekst duidelijk zijn: de ander moet precies begrijpen wat je bedoelt, waar je afspreekt, hoe laat, enzovoort.</p>
        <p>In deze les leer je:</p>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">de opbouw van een kort bericht en een informele e‑mail,</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">vaste zinnen en handige woorden,</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">hoe je tijd, plaats en afspraken helder opschrijft,</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">en welke valkuilen je moet vermijden.</li>
        </ul>
      `,
    },
    {
      title: "De opbouw van een kort berichtje (bijvoorbeeld een appje) 📱",
      body: `
        <p>Een kort berichtje aan een vriend is vaak heel direct. Het heeft een losse opbouw, maar een paar vaste onderdelen komen bijna altijd terug.</p>
        <h3 class="text-lg font-bold mt-4 mb-2">Voorbeeld van een compleet app‑bericht</h3>
        <p><strong>Hoi Lisa,</strong><br>
        Heb je zin om zaterdagmiddag naar de film te gaan?<br>
        We kunnen naar de bioscoop op het Leidseplein, de film begint om 15:00.<br>
        Laat even weten of je mee wilt, dan koop ik kaartjes.<br>
        <strong>Groetjes, Tim</strong></p>
        <p>Wat zie je? De begroeting (<em>Hoi Lisa</em>), de aanleiding/vraag (<em>Heb je zin...</em>), de details (<em>zaterdagmiddag, Leidseplein, 15:00</em>), een verzoek om reactie (<em>Laat even weten...</em>), en een afsluiting (<em>Groetjes, Tim</em>).</p>
      `,
    },
    {
      title: "De opbouw van een informeel e‑mailtje aan een vriend 💻",
      body: `
        <p>Een e‑mail aan een vriend is iets uitgebreider dan een appje, maar nog steeds informeel. Je gebruikt een onderwerpregel, een aanhef, een bericht en een afsluiting met je naam.</p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Onderdeel</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Uitleg</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Voorbeeld</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Onderwerpregel</td><td class="px-3 py-2 text-sm">Kort aangeven waar de mail over gaat.</td><td class="px-3 py-2 text-sm">Zaterdag / Afspraak zondag</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Aanhef</td><td class="px-3 py-2 text-sm">Informele begroeting.</td><td class="px-3 py-2 text-sm">Hoi Lisa, / Hé Tim,</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Inleiding</td><td class="px-3 py-2 text-sm">Een vriendelijke openingszin.</td><td class="px-3 py-2 text-sm">Hoe gaat het met je?</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Kern</td><td class="px-3 py-2 text-sm">Waar gaat de mail over?</td><td class="px-3 py-2 text-sm">Ik wilde vragen of je zin hebt om zaterdag te komen eten.</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Details</td><td class="px-3 py-2 text-sm">Tijd, adres, meenemen, routebeschrijving.</td><td class="px-3 py-2 text-sm">Om 18:00, Kerkstraat 12. Neem je zwemspullen mee!</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Afsluiting</td><td class="px-3 py-2 text-sm">Vriendelijke zin en groet.</td><td class="px-3 py-2 text-sm">Laat even weten of je komt. Groetjes, Sanne</td></tr>
            </tbody>
          </table>
        </div>
        <h3 class="text-lg font-bold mt-6 mb-2">Voorbeeld van een informele e‑mail</h3>
        <p><strong>Onderwerp: Zaterdag barbecue bij mij</strong><br><br>
        Hoi Sophie,<br><br>
        Hoe is het met je? Hopelijk heb je zin in het weekend.<br><br>
        Ik geef zaterdag een barbecue in mijn tuin. Het begint om 17:00. Mijn adres is Molenweg 4, in Utrecht. Je hoeft niets mee te nemen, drank en eten zijn er genoeg.<br><br>
        Laat je even weten of je komt? Dan kan ik een beetje tellen.<br><br>
        Groetjes en hopelijk tot zaterdag,<br>
        Jeroen</p>
      `,
    },
    {
      title: "Belangrijke woorden, zinnen en uitdrukkingen 🧾",
      body: `
        <h3 class="text-lg font-bold mt-4 mb-2">Begroeting en afsluiting</h3>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Informeel</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Wanneer gebruik je het?</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Hoi / Hé</td><td class="px-3 py-2 text-sm">Heel informeel, voor goede vrienden.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Hallo / Dag</td><td class="px-3 py-2 text-sm">Iets netter, maar nog steeds informeel.</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Groetjes / Doei</td><td class="px-3 py-2 text-sm">Standaard afsluiting onder vrienden.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Tot morgen / Tot zaterdag</td><td class="px-3 py-2 text-sm">Afsluiting met een concrete volgende ontmoeting.</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Liefs</td><td class="px-3 py-2 text-sm">Voor hele goede vrienden of familie.</td></tr>
            </tbody>
          </table>
        </div>
        <h3 class="text-lg font-bold mt-6 mb-2">Iets voorstellen of vragen</h3>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>Heb je zin om ...?</strong> – Vragen of iemand iets wil doen.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>Zullen we ...?</strong> – Een voorstel doen.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>Ik wilde even vragen of ...</strong> – Iets voorzichtig vragen.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>Wat denk je van ...?</strong> – Een idee voorleggen.</li>
        </ul>
        <h3 class="text-lg font-bold mt-6 mb-2">Tijd en plaats aangeven</h3>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">om (tijd) – <em>om 14:30</em></li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">rond (tijd) – <em>rond 12:00</em> (ongeveer)</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">bij (plaats/persoon) – <em>bij mij thuis, bij café de Zon</em></li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">op (dag) – <em>op zaterdag, op 5 mei</em></li>
        </ul>
        <h3 class="text-lg font-bold mt-6 mb-2">Om een antwoord vragen</h3>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>Laat even weten of je komt.</strong></li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>Hoor ik nog van je?</strong></li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>Stuur even een berichtje terug.</strong></li>
        </ul>
      `,
    },
    {
      title: "Stijl en toon – informeel maar duidelijk ✒️",
      body: `
        <p>Spreek je vriend(in) aan met <strong>je</strong> of <strong>jij</strong>. De beleefdheidsvorm <strong>u</strong> is te afstandelijk. Houd je zinnen kort en eenvoudig. In een appje mag je best een emoji of uitroepteken gebruiken, maar overdrijf niet. Let ook in een informeel bericht op spelling en hoofdletters, zodat de tekst leesbaar blijft.</p>
        <p>✅ <em>Heb je zin om te komen?</em><br>
        ❌ <em>Hebt u zin om te komen?</em> (te formeel voor een vriend)</p>
        <p>✅ <em>Ik ben zaterdag jarig. Ik geef een feestje. Jij komt toch ook?</em><br>
        ❌ <em>Aangezien ik zaterdag jarig ben, leek het mij een goed idee om een feestje te geven, dus bij dezen de vraag of jij misschien ook wilt komen.</em></p>
      `,
    },
    {
      title: "Drie uitgebreide voorbeelden 💡",
      body: `
        <h3 class="text-lg font-bold mt-4 mb-2">Appje – afspraak maken</h3>
        <p><em>Hé Sam,<br>
        Zullen we woensdagmiddag naar het park gaan? Het wordt mooi weer.<br>
        Ik kan om 14:00. Spreek je af bij de ingang aan de Kerkstraat?<br>
        Laat even weten of dat lukt.<br>
        Groetjes, Noor</em></p>
        <h3 class="text-lg font-bold mt-6 mb-2">E‑mail – uitnodiging verjaardag</h3>
        <p><strong>Onderwerp: Mijn verjaardag 15 maart!</strong><br><br>
        Hoi Bas,<br><br>
        Over twee weken ben ik jarig, op zaterdag 15 maart. Ik geef een feestje bij mij thuis. Het begint om 20:00.<br>
        Mijn adres is Lindelaan 18, Arnhem.<br>
        Neem je geen cadeautje mee, je komst is al genoeg!<br><br>
        Laat je even weten of je erbij bent? Dan weet ik op hoeveel mensen ik kan rekenen.<br><br>
        Groetjes en tot dan, Mila</p>
        <h3 class="text-lg font-bold mt-6 mb-2">E‑mail – samen leren</h3>
        <p><strong>Onderwerp: Samen leren voor toets</strong><br><br>
        Hoi Yara,<br><br>
        Heb je zin om donderdag samen te leren voor de geschiedenistoets? We kunnen bij mij thuis afspreken, om 10:00.<br>
        Mijn adres is Korte Dijk 7, Utrecht. Neem je boek en je aantekeningen mee.<br><br>
        Als je liever bij jou afspreekt, vind ik dat ook prima. Laat maar weten wat jou beter uitkomt.<br><br>
        Groetjes, Lotte</p>
      `,
    },
  ],
  rulesTable: [
    {
      rule: "Noem altijd de vier W's: wat, wanneer, waar en wie",
      structure: "Zorg dat je bericht antwoord geeft op: **Wat** ga je doen? **Wanneer**? **Waar**? **Wie** komt er of moet reageren?",
      example: "\"Zullen we zaterdag om 14:00 in het park afspreken? Laat even weten of het jou uitkomt.\"",
      usage: "Zo voorkom je eindeloos heen-en-weer-berichten.",
    },
    {
      rule: "Gebruik 'je' en 'jij', niet 'u'",
      structure: "Voor vrienden is de toon altijd informeel. Schrijf dus **je/jij** en vermijd **u**.",
      example: "✅ Heb je zin om te komen? ❌ Hebt u zin om te komen?",
      usage: "U is te afstandelijk en past niet bij een vriendschappelijk bericht.",
    },
    {
      rule: "Sluit af met een verzoek om antwoord",
      structure: "Vraag de ander om te reageren, zodat je zeker weet dat het bericht is aangekomen en jij verder kunt plannen.",
      example: "\"Laat even weten of het lukt.\" / \"Hoor ik nog van je?\"",
      usage: "Een open einde zonder vraag kan ongemakkelijk zijn en levert vaak geen reactie op.",
    },
    {
      rule: "Wees concreet en kort",
      structure: "Houd zinnen kort en vermijd lange inleidingen. Zet belangrijke informatie direct in het bericht.",
      example: "\"Om 12:30 bij Café de Hoek?\" in plaats van \"Misschien kunnen we ergens rond lunchtijd iets gaan drinken, als jou dat uitkomt?\"",
      usage: "Duidelijkheid gaat vóór beleefde omslachtigheid in informele berichten.",
    },
  ],
  callouts: [
    { type: "remember", label: "Onthoud 1", text: "Begin met een begroeting (Hoi/Hé) en eindig met een groet (Groetjes/Doei)." },
    { type: "remember", label: "Onthoud 2", text: "Geef altijd tijd, plaats en een concrete vraag of voorstel." },
    { type: "remember", label: "Onthoud 3", text: "Gebruik 'je' en 'jij', korte zinnen en spaarzaam emoji's." },
    { type: "remember", label: "Onthoud 4", text: "Sluit af met een verzoek om antwoord: 'Laat even weten...'." },
  ],
  commonMistakes: [
    {
      incorrect: "Geen onderwerpregel bij een e‑mail.",
      correct: "Vul altijd een korte, duidelijke onderwerpregel in.",
      explanation: "Zonder onderwerpregel weet de ontvanger niet waar de mail over gaat en kan deze als spam worden gezien.",
    },
    {
      incorrect: "Te formele aanhef (Geachte vriend).",
      correct: "Gebruik Hoi / Hé + naam.",
      explanation: "Een formele aanhef past niet bij een informeel bericht aan een vriend.",
    },
    {
      incorrect: "Geen tijd of plaats noemen.",
      correct: "Vermeld altijd wanneer en waar de afspraak is.",
      explanation: "Zonder deze informatie kan de ander niet reageren en blijf je heen en weer berichten.",
    },
    {
      incorrect: "Te veel afkortingen (ff, w8, sws).",
      correct: "Schrijf woorden voluit of beperk afkortingen tot een minimum.",
      explanation: "Afkortingen kunnen onduidelijk zijn en maken het bericht minder vriendelijk.",
    },
    {
      incorrect: "Vergeten om een reactie te vragen.",
      correct: "Sluit altijd af met een verzoek om antwoord.",
      explanation: "Anders weet je niet of de ander het gelezen heeft en kom je in onzekerheid.",
    },
  ],
  review: [
    "Opbouw berichtje: Begroeting – vraag/voorstel – details (tijd, plaats) – verzoek om antwoord – afsluiting.",
    "Opbouw e‑mail: Onderwerp – aanhef – inleiding – kern + details – afsluiting met naam.",
    "Toon: informeel, gebruik 'je', korte zinnen, vriendelijk.",
    "Altijd duidelijk maken: wat, wanneer, waar, wie.",
    "Vraag om antwoord: 'Laat even weten...', 'Hoor ik nog van je?'",
    "Let op spelling, hoofdletters en leestekens, ook in een appje.",
  ],
  qa: [
    {
      question: "Je wilt je vriendin Anna uitnodigen om zondagmiddag koffie te drinken bij Café de Boer om 15:00. Schrijf een kort appje van drie tot vier zinnen.",
      answer: "Hoi Anna, heb je zin om zondagmiddag koffie te drinken? Om 15:00 bij Café de Boer? Laat even weten of het lukt. Groetjes!",
    },
    {
      question: "Je ontvangt een e‑mail van je vriend Tom die vraagt of je vrijdag komt eten. Je kunt niet, want je moet werken. Schrijf een kort, vriendelijk antwoord.",
      answer: "Hoi Tom, bedankt voor de uitnodiging! Vrijdag lukt helaas niet, ik moet werken. Misschien een andere keer? Groetjes!",
    },
    {
      question: "In een e‑mail aan een vriend nodig je hem uit voor je verjaardag. Noem datum, tijd, adres en vraag of hij een spelletje wil meenemen. Schrijf de kern van de e‑mail.",
      answer: "Zaterdag 10 juni ben ik jarig en ik geef een feestje bij mij thuis. Het begint om 19:00. Mijn adres is Wilgenstraat 5, Den Bosch. Als je een leuk spelletje hebt, mag je het meenemen!",
    },
    {
      question: "Je schrijft aan een studievriend: 'Woensdag bib, 2 uur, leren voor tentamen, ok?' Is dit duidelijk? Verbeter het bericht zodat het completer en vriendelijker wordt.",
      answer: "Het oorspronkelijke bericht is te kort en mist een vriendelijke toon. Beter: Hoi Mark, zullen we woensdagmiddag om 14:00 in de bibliotheek afspreken om voor het tentamen te leren? Goed? Groetjes!",
    },
    {
      question: "Wat is een goede onderwerpregel voor een e‑mail waarin je een vriend uitnodigt voor een stranddag? Geef twee voorbeelden.",
      answer: "1. Stranddag zaterdag? 2. Zin in een dagje strand?",
    },
    {
      question: "Je krijgt een berichtje: 'Hey, zin om te chillen?' Wat ontbreekt er en hoe kun je daar in je antwoord naar vragen?",
      answer: "Er ontbreekt een tijd en een plaats. Je kunt antwoorden: 'Ja, leuk! Wanneer en waar precies?'",
    },
    {
      question: "Schrijf een korte e‑mail aan een vriend die je al een tijd niet hebt gezien. Stel voor om binnenkort iets af te spreken en vraag naar zijn beschikbaarheid.",
      answer: "Onderwerp: Zin om bij te praten? Hoi Lars, lang niet gesproken! Hoe is het met je? Zullen we binnenkort een keer afspreken? Ik ben de komende twee weken vrij in het weekend. Wanneer zou jou uitkomen? Groetjes!",
    },
  ],
};