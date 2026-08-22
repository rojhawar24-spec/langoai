import type { GrammarLesson } from "../../types";

export const onderwerp: GrammarLesson = {
  id: "nl-onderwerp-1",
  title: "Het Onderwerp (OW) – Wie of wat + persoonsvorm?",
  level: 1,
  topic: "Onderwerp", // [G] Grammatica
  body: "Leer hoe je het onderwerp in elke zin vindt. Met de vraagproef, het verschil met het lijdend voorwerp en bijzondere gevallen zoals 'er' en 'het'.",
  overview:
    "Het **onderwerp** is het zinsdeel dat congrueert met de persoonsvorm en aangeeft wie of wat iets doet. In deze **supercomplete, glasheldere les** ontdek je stap voor stap hoe je met de **vraagproef (Wie/Wat + persoonsvorm?)** het onderwerp feilloos aanwijst. Je leert het onderscheid met het lijdend voorwerp, hoe je het onderwerp vindt in zinnen met meerdere werkwoorden en in bijzinnen, en hoe je omgaat met **'er'** als voorlopig onderwerp en het **loze 'het'**. Met heldere tabellen, talloze voorbeelden, PAS OP‑waarschuwingen en 7 ijzersterke oefenvragen vind jij voortaan elk onderwerp in één oogopslag.",
  anchorSectionId: "wat",
  exercises: [],
  timeExpressionsLabel: "De vraagproef in verschillende zinnen 📊",
  timeExpressions: {
    header: "Zin | Persoonsvorm | Vraag (wie/wat + pv) | Onderwerp",
    rows: [
      ["De vrouw lacht.", "lacht", "Wie lacht?", "De vrouw"],
      ["Het boek valt.", "valt", "Wat valt?", "Het boek"],
      ["Mijn ouders zijn op reis.", "zijn", "Wie zijn op reis?", "Mijn ouders"],
      ["Er ligt een pen.", "ligt", "Wat ligt?", "een pen"],
      ["Er zitten vogels.", "zitten", "Wat zitten?", "vogels"],
      ["Het regent.", "regent", "Wat regent?", "het (loos)"],
      ["Dat hij komt, verbaast mij.", "verbaast", "Wat verbaast mij?", "Dat hij komt"],
      ["Heb jij honger?", "heb", "Wie heeft honger?", "jij"],
    ],
  },
  details: [
    {
      title: "Wat is het onderwerp? 🎯",
      body: `
        <p>Het <strong>onderwerp</strong> is het zinsdeel dat aangeeft <strong>wie</strong> of <strong>wat</strong> iets doet, of <strong>wie</strong> of <strong>wat</strong> in een bepaalde toestand verkeert. Het is de belangrijkste partner van de persoonsvorm: ze horen onlosmakelijk bij elkaar. Zonder onderwerp is een Nederlandse zin (behalve bij de gebiedende wijs) niet compleet.</p>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>De kat</strong> slaapt op de mat.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>Mijn zus</strong> heeft een nieuwe baan.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>Het</strong> regent al de hele dag.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>De kinderen</strong> willen buiten spelen.</li>
        </ul>
        <p>Het onderwerp kan één woord zijn, een hele woordgroep of zelfs een bijzin. In deze les leer je het onderwerp feilloos vinden met behulp van de <strong>vraagproef</strong>.</p>
      `,
    },
    {
      title: "De vraagproef: Wie of wat + persoonsvorm? 🔎",
      body: `
        <p>De klassieke, onfeilbare manier om het onderwerp te vinden, is door een vraag te stellen:</p>
        <p><strong>Wie (of wat) + persoonsvorm?</strong></p>
        <p>Het onderwerp en de persoonsvorm <strong>congrueren</strong>: ze stemmen overeen in getal en persoon. Daarom gebruik je alleen de persoonsvorm voor de vraag.</p>
        <p><strong>Stappenplan:</strong></p>
        <ol class="my-2 space-y-1.5 pl-5 list-decimal">
          <li>Zoek de <strong>persoonsvorm</strong> (pv) met de tijdproef of vraagproef.</li>
          <li>Stel een vraag met <strong>wie</strong> (bij personen) of <strong>wat</strong> (bij dieren, dingen, begrippen) en de persoonsvorm.</li>
          <li>Het antwoord op die vraag is het <strong>onderwerp</strong>.</li>
        </ol>
        <p>Let op: de vraag wordt alleen met de persoonsvorm gesteld, niet met andere werkwoorden (infinitieven, voltooide deelwoorden).</p>
      `,
    },
    {
      title: "Eenvoudige voorbeelden – stap voor stap 🧩",
      body: `
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Zin</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Persoonsvorm</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Vraag</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Onderwerp</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">De hond blaft luid.</td><td class="px-3 py-2 text-sm">blaft</td><td class="px-3 py-2 text-sm">Wie blaft?</td><td class="px-3 py-2 text-sm">De hond</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Mijn broer leest een boek.</td><td class="px-3 py-2 text-sm">leest</td><td class="px-3 py-2 text-sm">Wie leest?</td><td class="px-3 py-2 text-sm">Mijn broer</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Het schip vaart op zee.</td><td class="px-3 py-2 text-sm">vaart</td><td class="px-3 py-2 text-sm">Wat vaart?</td><td class="px-3 py-2 text-sm">Het schip</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">De bloemen staan in de vaas.</td><td class="px-3 py-2 text-sm">staan</td><td class="px-3 py-2 text-sm">Wat staan?</td><td class="px-3 py-2 text-sm">De bloemen</td></tr>
            </tbody>
          </table>
        </div>
        <p>De vraag past zich aan het getal van de persoonsvorm aan. Als de persoonsvorm meervoud is, gebruik je *wie staan* of *wat staan*.</p>
      `,
    },
    {
      title: "Zinnen met meerdere werkwoorden 🏗️",
      body: `
        <p>Als de zin naast de persoonsvorm nog een infinitief of voltooid deelwoord bevat, blijven die andere werkwoordsvormen <strong>buiten</strong> de onderwerpsvraag. Je stelt de vraag uitsluitend met de persoonsvorm.</p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Zin</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Persoonsvorm</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Vraag</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Onderwerp</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Ik heb een taart gebakken.</td><td class="px-3 py-2 text-sm">heb</td><td class="px-3 py-2 text-sm">Wie heeft?</td><td class="px-3 py-2 text-sm">Ik</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">De kinderen willen buiten spelen.</td><td class="px-3 py-2 text-sm">willen</td><td class="px-3 py-2 text-sm">Wie willen?</td><td class="px-3 py-2 text-sm">De kinderen</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Hij zal het boek hebben gelezen.</td><td class="px-3 py-2 text-sm">zal</td><td class="px-3 py-2 text-sm">Wie zal?</td><td class="px-3 py-2 text-sm">Hij</td></tr>
            </tbody>
          </table>
        </div>
        <p>Ook als er een hulpwerkwoord en een hoofdwerkwoord zijn, is het hulpwerkwoord de persoonsvorm en die gebruik je in de vraag.</p>
      `,
    },
    {
      title: "Onderwerp als woordgroep of bijzin 📦",
      body: `
        <p>Het onderwerp kan uit meer woorden bestaan. Het hele zinsdeel dat antwoord geeft op de vraag, is het onderwerp.</p>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">*De oude man met de wandelstok loopt langzaam.* → Wie loopt? → **De oude man met de wandelstok**.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">*Dat het regent, is jammer.* → Wat is jammer? → **Dat het regent** (een hele bijzin als onderwerp).</li>
        </ul>
        <p>De vraagproef werkt ook dan: je vraagt met de persoonsvorm van de hoofdzin, en het antwoord omvat precies het onderwerp, hoe lang dat ook is.</p>
      `,
    },
    {
      title: "Onderscheid met lijdend voorwerp en andere zinsdelen ⚖️",
      body: `
        <p>Een veelgemaakte fout is het onderwerp verwarren met het <strong>lijdend voorwerp</strong>. Beide vind je met een *wie/wat*-vraag, maar de opbouw van die vragen is anders.</p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Zin</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Onderwerpsvraag</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Lijdendvoorwerpsvraag</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">De jongen gooit de bal.</td><td class="px-3 py-2 text-sm">Wie gooit? → de jongen</td><td class="px-3 py-2 text-sm">Wat gooit de jongen? → de bal</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">De leraar heeft de leerlingen een verhaal verteld.</td><td class="px-3 py-2 text-sm">Wie heeft? → de leraar</td><td class="px-3 py-2 text-sm">Wat heeft de leraar verteld? → een verhaal</td></tr>
            </tbody>
          </table>
        </div>
        <p>Bij de lijdendvoorwerpsvraag herhaal je het onderwerp en eventuele andere werkwoorden. Bij de onderwerpsvraag doe je dat <strong>niet</strong>.</p>
      `,
    },
    {
      title: "Bijzondere gevallen 🧐",
      body: `
        <h3 class="text-lg font-bold mt-4 mb-2">'Er' als voorlopig onderwerp</h3>
        <p>Soms begint een zin met <strong>er</strong>. Dan is *er* niet het echte onderwerp, maar een voorlopige plaatsvervanger. Het echte onderwerp staat verderop en is onbepaald. De vraagproef helpt om het echte onderwerp te vinden.</p>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">*Er loopt een hond in de tuin.* → Wat loopt? → **een hond**.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">*Er zijn veel mensen op straat.* → Wat zijn? → **veel mensen**.</li>
        </ul>
        <p>De persoonsvorm richt zich in getal naar het echte onderwerp: *Er loopt een hond* (ev), *Er lopen honden* (mv). *Er* verandert niet.</p>
        
        <h3 class="text-lg font-bold mt-6 mb-2">Loos onderwerp 'het'</h3>
        <p>Bij werkwoorden die weer, natuur of een toestand uitdrukken, is het onderwerp vaak het betekenisloze <strong>het</strong>. Dit is een 'loos onderwerp'. De vraagproef levert een vreemde vraag op, maar grammaticaal is *het* het onderwerp.</p>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">*Het regent.* → Wat regent? (geen concreet antwoord) – toch is *het* het onderwerp.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">*Het is koud.* → Wat is koud? → *Het* (loos).</li>
        </ul>
        <p>Dit soort onderwerpen zijn verplicht voor de grammaticale structuur en altijd derde persoon enkelvoud.</p>
        
        <h3 class="text-lg font-bold mt-6 mb-2">Onderwerp in vraagzinnen</h3>
        <p>In een ja/nee-vraag staat de persoonsvorm vooraan, gevolgd door het onderwerp. De onderwerpsvraag stel je door dezelfde persoonsvorm te gebruiken in de *wie/wat*-vraag (derde persoon).</p>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">*Heb jij een pen?* → Wie heeft? → jij.</li>
        </ul>
        <p>In de praktijk zet je de vraag in de derde persoon: *Wie heeft?* Het antwoord geeft het onderwerp van de oorspronkelijke vraag.</p>
        
        <h3 class="text-lg font-bold mt-6 mb-2">Gebiedende wijs</h3>
        <p>In de directe gebiedende wijs staat geen onderwerp: *Loop! Zit!* Er is een denkbeeldig 'jij/jullie'. Bij de beleefde vorm is *u* het onderwerp: *Loopt u!* (Wie loopt? → U).</p>
      `,
    },
  ],
  rulesTable: [
    {
      rule: "De vraagproef voor het onderwerp",
      structure: "Vind eerst de **persoonsvorm**. Stel dan de vraag: **Wie (of Wat) + persoonsvorm?** Het antwoord is het onderwerp.",
      example: "De kat slaapt. → persoonsvorm: slaapt. Vraag: Wie slaapt? → De kat.",
      usage: "Werkt voor alle zinnen, ook met hulpwerkwoorden en in bijzinnen.",
    },
    {
      rule: "Onderscheid met lijdend voorwerp",
      structure: "Onderwerp: **Wie/Wat + persoonsvorm?** Lijdend voorwerp: **Wie/Wat + persoonsvorm + onderwerp + rest?**",
      example: "De man slaat de hond. Ow: Wie slaat? → de man. Lv: Wat slaat de man? → de hond.",
      usage: "Blijf de persoonsvorm als kern van de vraag gebruiken.",
    },
    {
      rule: "'Er' is meestal niet het onderwerp",
      structure: "Bij zinnen met 'er' is het echte onderwerp onbepaald en staat verderop. Vraag met de persoonsvorm om het te vinden.",
      example: "Er loopt een kat. → Wat loopt? → een kat.",
      usage: "Controleer de congruentie: de persoonsvorm richt zich naar het echte onderwerp.",
    },
    {
      rule: "Loos 'het' als onderwerp",
      structure: "Bij onpersoonlijke werkwoorden (regenen, sneeuwen) is 'het' een verplicht, betekenisloos onderwerp. De vraagproef levert hier niets concreets op.",
      example: "Het regent. → Ow = het.",
      usage: "Dit 'het' is verplicht, ook al is er geen echte 'doener'.",
    },
  ],
  callouts: [
    { type: "remember", label: "Onthoud 1", text: "Het onderwerp vind je met de vraag: **Wie/Wat + persoonsvorm?**" },
    { type: "remember", label: "Onthoud 2", text: "Gebruik alleen de persoonsvorm, niet de hele werkwoordelijke groep." },
    { type: "remember", label: "Onthoud 3", text: "Bij 'er' is het echte onderwerp onbepaald en staat verderop; 'er' is voorlopig." },
    { type: "remember", label: "Onthoud 4", text: "Het loze 'het' is bij weer- en natuurwoorden een verplicht onderwerp zonder betekenis." },
  ],
  commonMistakes: [
    { incorrect: "Er aanzien als onderwerp.", correct: "Het echte onderwerp vinden via de vraagproef: Er loopt een kat. → Wat loopt? → een kat.", explanation: "Er is voorlopig; het echte onderwerp is onbepaald." },
    { incorrect: "Onderwerp verwarren met lijdend voorwerp.", correct: "Onderwerp: Wie/Wat + pv? Lijdend voorwerp: Wie/Wat + pv + onderwerp + rest?", explanation: "De lijdendvoorwerpsvraag bevat het onderwerp; de onderwerpsvraag niet." },
    { incorrect: "Bij meerdere werkwoorden de infinitief of het voltooid deelwoord in de onderwerpsvraag gebruiken.", correct: "Alleen de persoonsvorm gebruiken: Zij heeft het boek gelezen. → Wie heeft? → Zij.", explanation: "De persoonsvorm is het hulpwerkwoord." },
    { incorrect: "Denken dat er geen onderwerp is bij loze 'het'-zinnen.", correct: "Het regent. → Ow = het.", explanation: "Elke volledige zin heeft een onderwerp; bij onpersoonlijke werkwoorden is dat 'het'." },
  ],
  review: [
    "Het **onderwerp** is het zinsdeel dat congrueert met de persoonsvorm en de 'doener' of 'drager' aangeeft.",
    "Vind de **persoonsvorm** (tijdproef of vraagproef).",
    "Stel de vraag **Wie/Wat + persoonsvorm?** Het antwoord is het **onderwerp**.",
    "Het onderwerp kan een woord, een woordgroep of een hele bijzin zijn.",
    "Bij **'er'** als voorlopig onderwerp: het echte onderwerp vind je met dezelfde vraag.",
    "Bij **loos 'het'** is 'het' het onderwerp, ook al geeft de vraag geen zinvol antwoord.",
    "**Onderscheid** met lijdend voorwerp: die vraag bevat het onderwerp en de rest van het gezegde.",
    "In **vraagzinnen** en **bijzinnen** werkt de vraagproef identiek.",
    "**Gebiedende wijs direct:** geen uitgeschreven onderwerp; beleefd: *u*.",
  ],
  qa: [
    {
      question: "Wat is het onderwerp in de zin: “De leerlingen van groep 8 gaan morgen op schoolreis”? Leg uit hoe je de vraagproef toepast.",
      answer: "De persoonsvorm is *gaan* (tijdproef: *gingen*). Vraag: **Wie gaan?** Antwoord: *De leerlingen van groep 8*. Dus dat is het onderwerp. De vraag gebruikt alleen de persoonsvorm, niet de rest van het werkwoordelijk gezegde.",
    },
    {
      question: "In de zin “Er zitten drie vogels op het dak” lijkt ‘er’ het onderwerp. Wat is het echte onderwerp en hoe bewijs je dat met de vraagproef?",
      answer: "Het echte onderwerp is *drie vogels*. De persoonsvorm is *zitten*. Vraag: **Wat zitten?** Antwoord: *drie vogels*. ‘Er’ is een voorlopig onderwerp en heeft geen betekenis. Ook de congruentie bewijst het: *er zitten* (meervoud) past bij *vogels*.",
    },
    {
      question: "In de zin “Het regent al de hele dag” is ‘het’ het onderwerp. Leg uit waarom dit een bijzonder onderwerp is.",
      answer: "‘Het’ is hier een **loos onderwerp**. Het verwijst nergens naar, maar is grammaticaal verplicht. De vraagproef “Wat regent?” levert geen zinvol antwoord op, maar toch is ‘het’ het onderwerp omdat de persoonsvorm *regent* enkelvoud vereist. Bij onpersoonlijke werkwoorden zoals *regenen*, *sneeuwen*, *waaien* heb je zo'n loos onderwerp.",
    },
    {
      question: "Hoe vind je het onderwerp in een bijzin zoals “...omdat mijn zus de afwas doet”? Pas de vraagproef toe.",
      answer: "De persoonsvorm van de bijzin is *doet* (staat achteraan). Vraag: **Wie doet?** Antwoord: *mijn zus*. Dus *mijn zus* is het onderwerp van de bijzin. De vraagproef werkt in bijzinnen net als in hoofdzinnen, met de eigen persoonsvorm van de bijzin.",
    },
    {
      question: "In de zin “De ober geeft de klant het menu” staan twee zelfstandige naamwoorden na de persoonsvorm. Wat is het onderwerp, en hoe onderscheid je het van de andere zinsdelen?",
      answer: "Het onderwerp is *de ober*, want de vraag **Wie geeft?** levert *de ober* als antwoord. Het lijdend voorwerp is *het menu* (Wat geeft de ober?), het meewerkend voorwerp is *de klant* (Aan wie geeft de ober het menu?). De onderwerpsvraag gebruikt enkel de persoonsvorm, de andere vragen voegen extra zinsdelen toe.",
    },
    {
      question: "In de zin “Wat je vertelt, interesseert me niet” is het onderwerp een bijzin. Vind het onderwerp met de vraagproef.",
      answer: "De persoonsvorm van de hoofdzin is *interesseert*. Vraag: **Wat interesseert me niet?** Antwoord: *Wat je vertelt*. Die bijzin is het onderwerp. De vraagproef toont aan dat het onderwerp de hele bijzin omvat.",
    },
    {
      question: "Corrigeer de fout: “De hond blaft de postbode.” Is ‘de hond’ het onderwerp? Wat is er grammaticaal mis?",
      answer: "Ja, *de hond* is het onderwerp (Wie blaft? De hond). De fout is dat *blaft* een onovergankelijk werkwoord is; het kan geen lijdend voorwerp bij zich hebben. Correct is bijvoorbeeld: *De hond blaft naar de postbode.* Het onderwerp blijft hetzelfde, de rest moet aangevuld worden met een voorzetselvoorwerp.",
    },
  ],
};