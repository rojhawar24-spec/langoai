import type { GrammarLesson } from "../../types";

export const formulieren: GrammarLesson = {
  id: "nl-formulieren-1",
  title: "Eenvoudige formulieren invullen",
  level: 1,
  topic: "Formulieren",
  body: "Leer hoe je eenvoudige Nederlandse formulieren invult. Woorden, adres, telefoon, e-mail, geboortedatum en handtekening – je leert het allemaal.",
  overview:
    "In deze les leer je **alles** over het invullen van eenvoudige Nederlandse formulieren. Elk woord dat je op een formulier tegenkomt, wordt uitgelegd. Je leert hoe je je gegevens correct invult, en ik waarschuw je voor elke fout die je kunt maken. Na deze les vul jij elk formulier perfect in!",
  anchorSectionId: "woorden",
  exercises: [],
  timeExpressionsLabel: "Woorden op een formulier 🏷️",
  timeExpressions: {
    header: "Woord | Betekenis",
    rows: [
      ["👤 <strong>Voornaam / Voornamen</strong>", "Jouw eerste naam. Bij meerdere voornamen schrijf je ze allemaal op."],
      ["👥 <strong>Achternaam / Familienaam</strong>", "Jouw familienaam, de laatste naam dus."],
      ["🔤 <strong>Voorletters</strong>", "Eerste letters van je voornamen met punten ertussen. Bijv. J.W."],
      ["🧑 <strong>Tussenvoegsels</strong>", "Kleine woordjes in de achternaam zoals van, de, den, van der."],
      ["🏠 <strong>Straat / Straatnaam</strong>", "Alleen de naam van de straat, niet het huisnummer."],
      ["🔢 <strong>Huisnummer</strong>", "Het nummer van je huis, plus toevoeging (A, II, rood) als die er is."],
      ["📮 <strong>Postcode</strong>", "Cijfer-lettercombinatie: 4 cijfers, spatie, 2 hoofdletters. Bijv. 1234 AB."],
      ["🏙️ <strong>Woonplaats / Plaats</strong>", "De stad of het dorp waar je woont."],
      ["📞 <strong>Telefoonnummer</strong>", "Je vaste nummer, vaak met netnummer-streepje-nummer."],
      ["📱 <strong>Mobiel / Mobiele telefoon</strong>", "Je mobiele nummer, begint altijd met 06."],
      ["📧 <strong>E-mailadres</strong>", "Je e-mailadres, zonder spaties geschreven."],
      ["🎂 <strong>Geboortedatum</strong>", "Dag, maand en jaar dat je geboren bent. Volgorde: dag-maand-jaar."],
      ["🌍 <strong>Nationaliteit</strong>", "Het land van je paspoort. Nederlandse (vrouw) of Nederlands (man)."],
      ["❤️ <strong>Burgerlijke staat</strong>", "Of je getrouwd bent: ongehuwd, gehuwd, gescheiden, weduwe/weduwnaar."],
      ["🖊️ <strong>Handtekening</strong>", "Je eigen handtekening, gezet met een pen."],
      ["📅 <strong>Datum</strong>", "De datum van vandaag wanneer je het formulier invult."],
      ["✍️ <strong>Ondertekening</strong>", "Hetzelfde als handtekening, vaak samen met de datum bedoeld."],
    ],
  },
  details: [
    {
      title: "Je naam invullen – voornaam, achternaam en tussenvoegsels 👤",
      body: `
        <p class="mb-3">Je naam moet precies hetzelfde zijn als op je identiteitsbewijs. Let goed op de hoofdletters bij tussenvoegsels, want daar maken heel veel mensen fouten mee.</p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Veld</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Voorbeeld</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Voornaam</td><td class="px-3 py-2 text-sm">Maria of Maria Johanna</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Voorletters</td><td class="px-3 py-2 text-sm">M. of M.J.</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Achternaam (zonder voornaam)</td><td class="px-3 py-2 text-sm">De Vries, Van den Berg</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Achternaam (met voornaam)</td><td class="px-3 py-2 text-sm">Maria de Vries, Jan van den Berg</td></tr>
            </tbody>
          </table>
        </div>
        <p class="mt-3"><span class="pas-op-highlight">⚠️ PAS OP</span> Hoofdletters bij tussenvoegsels – de bekendste fout van Nederland. Als je alleen de achternaam schrijft, krijgt het eerste tussenvoegsel een hoofdletter: <strong>De Vries</strong>. Zodra er een voornaam voor staat, schrijf je het tussenvoegsel met een kleine letter: <strong>Maria de Vries</strong>.</p>
      `,
    },
    {
      title: "Je adres invullen – straat, nummer, postcode, woonplaats 🏠",
      body: `
        <p class="mb-3">Het adres is de plek waar je woont. Meestal zijn er aparte vakjes voor straat, huisnummer, postcode en woonplaats.</p>
        <ul class="my-3 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">Straat: alleen de naam, bijv. <strong>Kerkstraat</strong> (zonder 12).</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">Huisnummer: <strong>12</strong> of <strong>12-A</strong>.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">Postcode: vier cijfers, spatie, twee hoofdletters. Bijv. <strong>1234 AB</strong>.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">Woonplaats: <strong>Amsterdam</strong>.</li>
        </ul>
        <p class="mt-3"><span class="pas-op-highlight">⚠️ PAS OP</span> De postcode heeft altijd een spatie en hoofdletters. <strong>1234 AB</strong> is goed, <strong>1234ab</strong> of <strong>1234AB</strong> is fout.</p>
      `,
    },
    {
      title: "Telefoonnummer en e-mailadres 📞📧",
      body: `
        <p class="mb-2"><strong>Telefoonnummer:</strong> vast nummer met netnummer-streepje-nummer (020-1234567) of spatie. Mobiel begint met 06 (06-12345678).</p>
        <p class="mb-2"><strong>E-mailadres:</strong> kent geen spaties. Alles zit aan elkaar. <strong>mariadevries@email.nl</strong> is goed.</p>
        <p class="mt-3"><span class="pas-op-highlight">⚠️ PAS OP</span> Geen spaties in een e-mailadres. Als je een spatie zet, komt de mail niet aan.</p>
      `,
    },
    {
      title: "Geboortedatum invullen 🎂",
      body: `
        <p>In Nederland schrijven we de datum als <strong>dag-maand-jaar</strong>. Bijvoorbeeld: <strong>15-03-1990</strong> (15 maart 1990).</p>
        <p class="mt-2"><span class="pas-op-highlight">⚠️ PAS OP</span> Niet omdraaien! In sommige landen schrijft men eerst de maand, maar in Nederland altijd eerst de dag. <strong>15-03-1990</strong> is goed, <strong>03-15-1990</strong> is fout.</p>
      `,
    },
    {
      title: "Nationaliteit en burgerlijke staat ❤️",
      body: `
        <ul class="my-3 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">Nationaliteit: het land van je paspoort. <strong>Nederlandse</strong> (vrouw) of <strong>Nederlands</strong> (man).</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">Burgerlijke staat: <strong>ongehuwd</strong>, <strong>gehuwd</strong>, <strong>gescheiden</strong>, <strong>weduwe/weduwnaar</strong>, geregistreerd partnerschap.</li>
        </ul>
        <p class="mt-2">💡 <strong>Ongehuwd</strong> betekent alleen dat je niet getrouwd bent. Je kunt wel een partner hebben.</p>
      `,
    },
    {
      title: "Datum van vandaag en handtekening ✍️📅",
      body: `
        <p>Onderaan bijna elk formulier moet je de <strong>datum van vandaag</strong> invullen en je <strong>handtekening</strong> zetten. Zonder handtekening is het formulier niet geldig!</p>
        <ul class="my-3 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">Datum: <strong>27 mei 2026</strong> of <strong>27-05-2026</strong>.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">Handtekening: je eigen persoonlijke krabbel, gezet met een pen (geen potlood).</li>
        </ul>
      `,
    },
    {
      title: "Andere belangrijke woorden op formulieren 📋",
      body: `
        <ul class="my-3 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">🧑‍🤝‍🧑 <strong>Aanhef</strong>: De heer (man), Mevrouw (vrouw), soms X voor anders.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">🆔 <strong>Identiteitsbewijs</strong>: paspoort, ID-kaart of rijbewijs.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">🔢 <strong>BSN</strong> (Burgerservicenummer): je persoonlijke nummer van de overheid, staat op je ID-kaart.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">🏦 <strong>IBAN / Rekeningnummer</strong>: je bankrekening, begint met NL.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">⭐ <strong>Verplicht veld</strong>: een vakje met een sterretje, dat moet je invullen.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">✋ <strong>In te vullen door…</strong>: dat vakje is niet voor jou, maar voor een medewerker.</li>
        </ul>
      `,
    },
  ],
  rulesTable: [
    {
      rule: "Hoofdletters bij tussenvoegsels",
      structure: "Alleen achternaam → **Hoofdletter**. Mét voornaam → **kleine letter**.",
      example: "**De Vries** (los). **Maria de Vries** (met voornaam).",
      usage: "⚠️ PAS OP: Dit is de meest gemaakte fout. Onthoud: voornaam + tussenvoegsel = kleine letters in het tussenvoegsel.",
    },
    {
      rule: "Postcode correct schrijven",
      structure: "**4 cijfers + spatie + 2 hoofdletters**.",
      example: "**1234 AB** (goed). **1234ab** of **1234AB** (fout).",
      usage: "Zonder spatie kan de post zoekraken. Altijd spatie en hoofdletters gebruiken.",
    },
    {
      rule: "Geboortedatum volgorde",
      structure: "**Dag - Maand - Jaar**.",
      example: "**15-03-1990** (15 maart 1990).",
      usage: "⚠️ PAS OP: Niet omdraaien zoals in het Engels. Eerst de dag, dan de maand.",
    },
    {
      rule: "E-mailadres zonder spaties",
      structure: "Alles aan elkaar, met **@** en een **punt**.",
      example: "**mariadevries@email.nl** (goed). **maria de vries @ email . nl** (fout).",
      usage: "Een spatie in een e-mailadres zorgt dat de mail niet aankomt.",
    },
    {
      rule: "Handtekening is verplicht",
      structure: "Zet je **eigen handtekening** met een **pen**.",
      example: "Een persoonlijke krabbel, geen potlood.",
      usage: "Zonder handtekening is het formulier ongeldig en wordt het niet geaccepteerd.",
    },
    {
      rule: "Verplichte velden (sterretje)",
      structure: "Velden met een **sterretje (*)** moet je invullen.",
      example: "Als je een verplicht veld leeg laat, kun je het formulier niet inleveren.",
      usage: "Controleer altijd of alle sterretjes zijn ingevuld voordat je het formulier verstuurt.",
    },
    {
      rule: "Datum van vandaag invullen",
      structure: "Schrijf de **dag, maand en jaar** van vandaag.",
      example: "**27 mei 2026** of **27-05-2026**.",
      usage: "Zonder datum weet niemand wanneer je het formulier hebt ingevuld, dus altijd invullen.",
    },
  ],
  callouts: [
    { type: "remember", label: "Onthoud 1", text: "Voornaam = je eigen eerste naam. Achternaam = je familienaam." },
    { type: "remember", label: "Onthoud 2", text: "Voorletters: eerste letters van voornamen met punten. Bijv. **M.J.**" },
    { type: "remember", label: "Onthoud 3", text: "Tussenvoegsels (van, de, den): kleine letters als er een voornaam voor staat." },
    { type: "remember", label: "Onthoud 4", text: "Straat en huisnummer zijn aparte velden. Niet in één vakje stoppen." },
    { type: "remember", label: "Onthoud 5", text: "Postcode: 4 cijfers, spatie, 2 hoofdletters. Bijv. **1234 AB**." },
    { type: "remember", label: "Onthoud 6", text: "Telefoon: netnummer-streepje-nummer. Mobiel: 06-... E-mail: géén spaties." },
    { type: "remember", label: "Onthoud 7", text: "Geboortedatum: dag-maand-jaar, dus **15-03-1990**." },
    { type: "remember", label: "Onthoud 8", text: "Nationaliteit: **Nederlandse** (vrouw) / **Nederlands** (man)." },
    { type: "remember", label: "Onthoud 9", text: "Burgerlijke staat: **ongehuwd** (niet getrouwd), **gehuwd** (wel getrouwd)." },
    { type: "remember", label: "Onthoud 10", text: "Datum en handtekening onderaan altijd invullen, anders ongeldig." },
    { type: "remember", label: "Onthoud 11", text: "Verplichte velden (sterretje *) niet overslaan." },
    { type: "remember", label: "Onthoud 12", text: "Vakje met \"In te vullen door…\" is niet voor jou, maar voor een ambtenaar." },
  ],
  commonMistakes: [
    { incorrect: "Voornaam: jan", correct: "Voornaam: Jan", explanation: "Een naam begint altijd met een hoofdletter." },
    { incorrect: "Achternaam (alleen): de vries", correct: "Achternaam: De Vries", explanation: "Zonder voornaam krijgt het eerste tussenvoegsel een hoofdletter." },
    { incorrect: "Straat: Kerkstraat 12 (in één vak)", correct: "Straat: Kerkstraat, Huisnummer: 12", explanation: "Straat en huisnummer zijn bijna altijd twee losse velden." },
    { incorrect: "Postcode: 1234ab of 1234AB", correct: "Postcode: 1234 AB", explanation: "Altijd met spatie en hoofdletters." },
    { incorrect: "Geboortedatum: 03-15-1990", correct: "Geboortedatum: 15-03-1990", explanation: "Eerst de dag, dan de maand, dan het jaar." },
    { incorrect: "E-mailadres: mijn naam @ email . nl", correct: "E-mailadres: mijnnaam@email.nl", explanation: "Nooit spaties, alles aan elkaar." },
    { incorrect: "Handtekening ontbreekt", correct: "Handtekening gezet met een pen", explanation: "Zonder handtekening is het formulier ongeldig." },
    { incorrect: "Datum vergeten", correct: "Datum: 27-05-2026", explanation: "Zonder datum weet niemand wanneer je het hebt ingevuld." },
    { incorrect: "Tussenvoegsel vergeten: J. Vries", correct: "J. de Vries", explanation: "Het woordje 'de' hoort bij de achternaam en moet je opschrijven." },
    { incorrect: "BSN en IBAN door elkaar halen", correct: "BSN is je persoonsnummer, IBAN is je bankrekening", explanation: "Dit zijn twee totaal verschillende nummers." },
  ],
  review: [
    "**Voornaam** = je eigen eerste naam. **Achternaam** = je familienaam.",
    "**Voorletters** = eerste letters van voornamen met punten: M.J.",
    "**Tussenvoegsels** (van, de, den) → kleine letters als er een voornaam voor staat.",
    "**Straat en huisnummer** zijn aparte velden.",
    "**Postcode**: 1234 AB (cijfers, spatie, hoofdletters).",
    "**Telefoon**: netnummer-streepje-nummer. **Mobiel**: 06-...",
    "**E-mailadres**: geen spaties, met @ en punt.",
    "**Geboortedatum**: dag-maand-jaar.",
    "**Nationaliteit**: Nederlandse (vrouw) / Nederlands (man).",
    "**Burgerlijke staat**: ongehuwd / gehuwd / gescheiden / weduwe / weduwnaar.",
    "**Datum en handtekening** onderaan altijd invullen.",
    "**Verplichte velden** (sterretje *) niet overslaan.",
    "**Vakje met \"In te vullen door…\"** is niet voor jou.",
  ],
  qa: [
    {
      question: "Je heet Henk van der Berg. Op het formulier moet je alleen je achternaam invullen. Wat schrijf je? En wat schrijf je als er gevraagd wordt naar je voornaam én achternaam?",
      answer: "Alleen achternaam: **Van der Berg** (hoofdletter V). Voornaam en achternaam samen: **Henk van der Berg** (kleine letters in het tussenvoegsel). De regel is: zonder voornaam → hoofdletter, met voornaam → kleine letters.",
    },
    {
      question: "Je woont in postcodegebied 1234 AB. Er staat één lang vakje voor de postcode. Hoe schrijf je de postcode correct op?",
      answer: "Je schrijft: **1234 AB**. Dus vier cijfers, een spatie, en dan twee hoofdletters. Niet aan elkaar, niet zonder spatie.",
    },
    {
      question: "Je bent geboren op 7 oktober 1985. Hoe schrijf je dat op een Nederlands formulier?",
      answer: "**07-10-1985** of **7 oktober 1985**. Eerst de dag (7), dan de maand (10), dan het jaar. Nooit 10-07-1985.",
    },
    {
      question: "Bij 'Burgerlijke staat' moet je kiezen uit: ongehuwd, gehuwd, gescheiden, weduwe. Jij bent getrouwd. Welk woord kies je? En als je niet getrouwd bent maar wel samenwoont, wat ben je dan officieel?",
      answer: "Getrouwd = **gehuwd**. Samenwonend maar niet getrouwd = **ongehuwd** (tenzij je een geregistreerd partnerschap hebt). Ongehuwd betekent alleen dat je niet getrouwd bent, niet dat je single bent.",
    },
    {
      question: "Je woont op de Slotlaan nummer 23, twee hoog. Er zijn losse velden voor straat, huisnummer en toevoeging. Wat schrijf je in elk veld?",
      answer: "Straat: **Slotlaan**. Huisnummer: **23**. Toevoeging: **II** (of -II, of twee hoog als dat op je officiële post zo staat). Kijk altijd op een officiële brief hoe jouw exacte toevoeging eruitziet.",
    },
    {
      question: "Op het formulier zie je een veld met een sterretje en het woord 'BSN'. Wat betekent dat en wat moet je doen?",
      answer: "Het sterretje betekent dat het een **verplicht veld** is. BSN is je **Burgerservicenummer**, je persoonlijke nummer bij de overheid. Je vindt het op je paspoort of ID-kaart. Je moet het invullen, anders kun je het formulier niet inleveren.",
    },
    {
      question: "Je hebt het hele formulier ingevuld. Onderaan staat 'Datum:' en 'Handtekening:'. Wat doe je en waarom is dat zo belangrijk?",
      answer: "Bij Datum vul je de datum van vandaag in (bijv. **27 mei 2026**). Bij Handtekening zet je met een pen je eigen handtekening. Dit is verplicht, want zonder datum en handtekening is het formulier ongeldig en wordt het niet geaccepteerd.",
    },
  ],
};