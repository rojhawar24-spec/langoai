import type { GrammarLesson } from "../../types";

export const leestekens: GrammarLesson = {
  id: "nl-leestekens-1",
  title: "Leestekens: Punt, Komma, Puntkomma en Dubbele Punt",
  level: 2,
  topic: "Leestekens", // [Sch] Schrijven – spelling
  body: "Leer wanneer je een punt, komma, puntkomma of dubbele punt gebruikt. Met heldere regels, veel voorbeelden en handige ezelsbruggetjes.",
  overview:
    "Leestekens zijn de verkeersborden van een tekst. In deze **supercomplete, heldere les** leer je alles over de **punt**, de **komma**, de **puntkomma** en de **dubbele punt**. Je krijgt duidelijke uitleg over het beëindigen van zinnen, het scheiden van opsommingen, het verbinden van hoofdzinnen en het aankondigen van citaten. Met een uitgebreide tabel, vele voorbeelden, PAS OP‑waarschuwingen en 7 ijzersterke oefenvragen schrijf jij voortaan elke tekst met de juiste leestekens.",
  anchorSectionId: "belang",
  exercises: [],
  timeExpressionsLabel: "De vier leestekens op een rij 📊",
  timeExpressions: {
    header: "Leesteken | Wanneer gebruik je het? | Voorbeeld",
    rows: [
      ["**Punt (.)**", "Einde van een mededelende zin; bij afkortingen", "*Ik ga naar huis.*"],
      ["**Komma (,)**", "Opsomming, voor voegwoorden, bij inversie en aansprekingen", "*Appels, peren en bananen.*"],
      ["**Puntkomma (;)**", "Tussen nauw verbonden hoofdzinnen; in lange opsommingen", "*Het regent; we blijven thuis.*"],
      ["**Dubbele punt (:)**", "Opsomming, citaat of uitleg aankondigen", "*Hij zei: \"Dag!\"*"],
    ],
  },
  details: [
    {
      title: "Waarom zijn leestekens zo belangrijk? 🎯",
      body: `
        <p>Leestekens zijn de verkeersborden van een tekst. Ze vertellen de lezer wanneer hij rust moet nemen, hoe zinnen met elkaar verbonden zijn en wat de schrijver precies bedoelt. Zonder leestekens wordt een tekst een onbegrijpelijke woordenbrij. Vergelijk:<br>
        <em>Ik hou van koken mijn hond en mijn kinderen.</em> (onduidelijk) versus<br>
        <em>Ik hou van koken, mijn hond en mijn kinderen.</em> (opsomming van liefhebberijen).</p>
        <p>In deze les behandelen we de vier belangrijkste leestekens: de <strong>punt</strong>, de <strong>komma</strong>, de <strong>puntkomma</strong> en de <strong>dubbele punt</strong>.</p>
      `,
    },
    {
      title: "De punt (.) – het einde van de zin 🛑",
      body: `
        <h3 class="text-lg font-bold mt-4 mb-2">Aan het einde van een mededelende zin</h3>
        <p>Elke gewone, mededelende hoofdzin eindigt met een punt. Ook een beleefd verzoek dat niet als vraag is geformuleerd, kan een punt krijgen (al is een vraagteken gebruikelijker).</p>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">Ik ga vandaag naar de markt.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">Het regent al de hele dag.</li>
        </ul>
        <p>Na een vraagteken (?) of uitroepteken (!) komt geen punt; die tekens vervangen de punt.</p>
        <h3 class="text-lg font-bold mt-6 mb-2">Punt bij afkortingen</h3>
        <p>Afkortingen die je letter voor letter uitspreekt, krijgen punten. Afkortingen die je als één woord uitspreekt, krijgen geen punten.</p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Wel punten ✅</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Geen punten ❌</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">d.w.z. (dat wil zeggen)</td><td class="px-3 py-2 text-sm">vwo (voorbereidend wetenschappelijk onderwijs)</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">m.a.w. (met andere woorden)</td><td class="px-3 py-2 text-sm">cv (curriculum vitae)</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">enz. (enzovoort)</td><td class="px-3 py-2 text-sm">tv (televisie)</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">bijv. (bijvoorbeeld)</td><td class="px-3 py-2 text-sm">wc (watercloset)</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">o.a. (onder andere)</td><td class="px-3 py-2 text-sm">NS (Nederlandse Spoorwegen)</td></tr>
            </tbody>
          </table>
        </div>
        <p><span class="pas-op-highlight">⚠️ PAS OP</span> Na een afkorting die al op een punt eindigt, komt aan het einde van de zin geen extra punt. Bijvoorbeeld: <em>Ik heb een tv, d.w.z. een televisie.</em> Alleen de punt van de afkorting blijft staan.</p>
      `,
    },
    {
      title: "De komma (,) – de rustpauze in de zin 🎵",
      body: `
        <p>De komma geeft een korte pauze aan en maakt zinnen overzichtelijk. Hij scheidt zinsdelen, zinnen of delen van een opsomming van elkaar.</p>
        <h3 class="text-lg font-bold mt-4 mb-2">Komma bij opsommingen</h3>
        <p>Tussen de delen van een opsomming schrijf je een komma. Vóór <em>en</em> of <em>of</em> zet je meestal geen komma, tenzij de zin anders onduidelijk wordt.</p>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><em>Ik heb appels, peren, bananen en druiven gekocht.</em></li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><em>Wil je koffie, thee of iets fris?</em></li>
        </ul>
        <h3 class="text-lg font-bold mt-6 mb-2">Komma voor voegwoorden</h3>
        <p>Bij samengestelde zinnen met voegwoorden zoals <strong>maar, want, omdat, terwijl, hoewel, als, dan</strong> plaats je vaak een komma. Voor <em>en</em> en <em>of</em> zet je meestal geen komma, tenzij het zinsdeel erg lang is.</p>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><em>Hij is niet oud, maar hij voelt zich wel zo.</em></li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><em>Ik blijf thuis, want het regent.</em></li>
        </ul>
        <h3 class="text-lg font-bold mt-6 mb-2">Komma bij tussenvoegsels, aansprekingen en inversie</h3>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>Tussenwerpsel:</strong> <em>Oh, wat leuk!</em></li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>Aanspreking:</strong> <em>Jan, kom eens hier.</em></li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>Inversie (bijzin voorop):</strong> <em>Als je klaar bent, kom ik je ophalen.</em></li>
        </ul>
        <p><span class="pas-op-highlight">⚠️ PAS OP</span> Gebruik nooit een losse komma tussen twee hoofdzinnen zonder voegwoord. Dat heet een 'komma-splitsing' en is fout. Gebruik dan een punt of puntkomma.</p>
      `,
    },
    {
      title: "De puntkomma (;) – tussen punt en komma in ⚖️",
      body: `
        <p>De puntkomma gebruik je als een <strong>punt te zwaar</strong> en een <strong>komma te licht</strong> is. Het geeft een sterkere scheiding aan dan een komma, maar een minder sterke dan een punt.</p>
        <h3 class="text-lg font-bold mt-4 mb-2">Tussen twee nauw verbonden hoofdzinnen</h3>
        <p>Als twee zinnen inhoudelijk sterk bij elkaar horen, kun je ze met een puntkomma verbinden. Vaak staat er een signaalwoord (daarom, echter, bovendien, dus) direct na de puntkomma.</p>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><em>Het regent al de hele dag; we blijven maar binnen.</em></li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><em>Hij had geen geld; daarom kon hij niet mee-eten.</em></li>
        </ul>
        <h3 class="text-lg font-bold mt-6 mb-2">In lange opsommingen met komma's</h3>
        <p>Als de onderdelen van een opsomming zelf al een komma bevatten, scheid je de hoofddelen met een puntkomma.</p>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><em>We bezochten Parijs, Frankrijk; Rome, Italië; en Berlijn, Duitsland.</em></li>
        </ul>
      `,
    },
    {
      title: "De dubbele punt (:) – aankondiging en uitleg 📢",
      body: `
        <p>De dubbele punt kondigt aan dat er iets volgt: een opsomming, een citaat, een uitleg of een specificatie. Hij werkt als een soort "let op, hier komt het".</p>
        <h3 class="text-lg font-bold mt-4 mb-2">Opsomming, citaat of uitleg aankondigen</h3>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>Opsomming:</strong> <em>We hebben nodig: bloem, suiker, eieren en melk.</em></li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>Citaat:</strong> <em>Hij zei: "Ik kom morgen terug."</em></li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>Uitleg:</strong> <em>Het was duidelijk: hij had gewonnen.</em></li>
        </ul>
        <h3 class="text-lg font-bold mt-6 mb-2">Hoofdletter na de dubbele punt?</h3>
        <p>Als er een <strong>volledige, geciteerde zin</strong> volgt, gebruik je een <strong>hoofdletter</strong>. Bij een opsomming of uitleg die geen nieuwe volledige zin vormt, schrijf je een <strong>kleine letter</strong>.</p>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><em>Hij zei: "Ik kom morgen."</em> (hoofdletter)</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><em>We hebben nodig: bloem, suiker en eieren.</em> (kleine letter)</li>
        </ul>
      `,
    },
  ],
  rulesTable: [
    {
      rule: "Punt aan het einde van een mededelende zin",
      structure: "Sluit elke gewone, mededelende zin af met een **punt**.",
      example: "Ik ga naar huis. Het is laat.",
      usage: "Na een vraagteken of uitroepteken komt geen extra punt.",
    },
    {
      rule: "Punten bij afkortingen",
      structure: "Afkortingen die je letter voor letter uitspreekt, schrijf je met punten. Afkortingen die je als één woord uitspreekt, schrijf je zonder punten.",
      example: "d.w.z., bijv., enz. – maar: vwo, tv, cv.",
      usage: "Na een afkorting met een punt komt geen extra punt aan het einde van de zin.",
    },
    {
      rule: "Komma in een opsomming",
      structure: "Zet komma's tussen de delen van een opsomming. Voor 'en' of 'of' zet je meestal geen komma.",
      example: "Ik koop appels, peren en bananen.",
      usage: "Bij korte, gelijkwaardige bijvoeglijke naamwoorden mag een komma.",
    },
    {
      rule: "Komma voor voegwoorden (maar, want, omdat...)",
      structure: "Zet een komma voor voegwoorden die een tegenstelling, reden of voorwaarde inleiden.",
      example: "Hij is moe, want hij heeft hard gewerkt.",
      usage: "Voor 'en' en 'of' zet je meestal geen komma.",
    },
    {
      rule: "Puntkomma tussen nauw verbonden zinnen",
      structure: "Gebruik een puntkomma tussen twee hoofdzinnen die inhoudelijk sterk samenhangen. Ook in lange opsommingen met interne komma's.",
      example: "Het regent; we blijven thuis. / Parijs, Frankrijk; Rome, Italië; Berlijn, Duitsland.",
      usage: "Na de puntkomma volgt een kleine letter (tenzij het een eigennaam is).",
    },
    {
      rule: "Dubbele punt voor opsomming, citaat of uitleg",
      structure: "Zet een dubbele punt om een opsomming, citaat of verklaring aan te kondigen.",
      example: "Hij zei: \"Ik kom.\" / We hebben nodig: melk, kaas en eieren.",
      usage: "Na de dubbele punt volgt een hoofdletter als er een volledige geciteerde zin komt; anders een kleine letter.",
    },
  ],
  callouts: [
    { type: "remember", label: "Onthoud 1", text: "Punt = einde mededelende zin en bij letter-voor-letter-afkortingen (bijv.)." },
    { type: "remember", label: "Onthoud 2", text: "Komma = korte pauze: opsomming, voegwoorden, aanspreking, inversie." },
    { type: "remember", label: "Onthoud 3", text: "Puntkomma = tussen twee samenhangende hoofdzinnen; bij lange opsommingen met komma's." },
    { type: "remember", label: "Onthoud 4", text: "Dubbele punt = aankondiging van opsomming, citaat of uitleg." },
    { type: "remember", label: "Onthoud 5", text: "Na dubbele punt: hoofdletter bij volledige geciteerde zin, anders kleine letter." },
  ],
  commonMistakes: [
    { incorrect: "Ik hou van koken mijn hond en mijn kinderen.", correct: "Ik hou van koken, mijn hond en mijn kinderen.", explanation: "De komma is nodig om de opsomming duidelijk te maken." },
    { incorrect: "Hij zei: \"ik kom morgen\".", correct: "Hij zei: \"Ik kom morgen.\"", explanation: "Na de dubbele punt en aanhalingstekens volgt een hoofdletter en een punt binnen de aanhaling." },
    { incorrect: "Het regent, we blijven thuis. (komma)", correct: "Het regent; we blijven thuis. (of punt)", explanation: "Twee hoofdzinnen verbind je met een puntkomma of punt, niet met een losse komma." },
    { incorrect: "Als je gaat, ik ga mee.", correct: "Als je gaat, ga ik mee.", explanation: "Na de komma bij een bijzin voorop volgt inversie: persoonsvorm vóór het onderwerp." },
    { incorrect: "Ik heb appels peren en bananen.", correct: "Ik heb appels, peren en bananen.", explanation: "Opsommingskomma's zijn verplicht." },
    { incorrect: "...een tv, d.w.z..", correct: "...een tv, d.w.z.", explanation: "Geen extra punt na een afkorting die al op een punt eindigt." },
  ],
  review: [
    "Punt (.) = einde mededelende zin; afkortingen die je spelt krijgen punten (bijv.), woordafkortingen niet (tv).",
    "Komma (,) = opsomming, voor voegwoorden, tussenvoegsels, aanspreking, bij inversie.",
    "Puntkomma (;) = tussen samenhangende hoofdzinnen; lange opsommingen met eigen komma's.",
    "Dubbele punt (:) = opsomming, citaat of uitleg aankondigen.",
    "Na dubbele punt: hoofdletter bij volledige geciteerde zin, anders kleine letter.",
    "Geen komma voor 'en' en 'of' in een gewone opsomming van twee of drie dingen.",
    "Geen losse komma tussen twee hoofdzinnen zonder voegwoord (komma-splitsing).",
  ],
  qa: [
    {
      question: "Waarom is de zin “Ik hou van koken mijn hond en mijn kinderen” dubbelzinnig? Waar moet je een leesteken plaatsen om de betekenis duidelijk te maken?",
      answer: "Zonder leesteken lijkt het alsof iemand zijn hond en kinderen wil koken. Door een **komma** te plaatsen na *koken* maak je een opsomming van dingen waarvan je houdt: **Ik hou van koken, mijn hond en mijn kinderen.**",
    },
    {
      question: "Zet de juiste leestekens in deze zin: “Hij zei ik kom morgen terug”",
      answer: "**Hij zei: \"Ik kom morgen terug.\"** Na de dubbele punt volgt een volledige geciteerde zin, dus die begint met een hoofdletter en eindigt met een punt (binnen de aanhalingstekens).",
    },
    {
      question: "Verbind de volgende twee zinnen met een puntkomma, zonder iets aan de woorden te veranderen: “Het is al laat. We moeten naar huis.”",
      answer: "**Het is al laat; we moeten naar huis.** De puntkomma geeft aan dat de twee zinnen nauw met elkaar verbonden zijn. Een punt mag ook, maar met een puntkomma benadruk je het verband.",
    },
    {
      question: "Waarom is “Als je klaar bent ik kom je ophalen” fout? Corrigeer de zin en leg uit welk leesteken je gebruikt.",
      answer: "Het is een samengestelde zin met een bijzin voorop. Na de bijzin *Als je klaar bent* volgt een **komma**, en in de hoofdzin moet je de persoonsvorm vóór het onderwerp zetten (inversie). Juist is: **Als je klaar bent, kom ik je ophalen.**",
    },
    {
      question: "Schrijf de volgende opsomming correct op met leestekens: “We bezochten Amsterdam Nederland Brussel België en Parijs Frankrijk”",
      answer: "Omdat de onderdelen zelf een komma bevatten (stad en land), scheid je de paren met een puntkomma: **We bezochten Amsterdam, Nederland; Brussel, België; en Parijs, Frankrijk.**",
    },
    {
      question: "Wat is er fout aan deze zin? “Ik heb de volgende producten gekocht: melk, kaas, eieren.” Moet er na de dubbele punt een hoofdletter?",
      answer: "Er is niets fout. Na de dubbele punt volgt een **opsomming** en geen volledige nieuwe zin, dus schrijf je een **kleine letter**. De zin is perfect: **Ik heb de volgende producten gekocht: melk, kaas, eieren.**",
    },
    {
      question: "Voeg de juiste leestekens toe: “Oh wat leuk dat je er bent Jan”",
      answer: "**Oh, wat leuk dat je er bent, Jan!** Het tussenwerpsel *Oh* krijgt een komma; de aanspreking *Jan* wordt voorafgegaan door een komma; en de uitroep krijgt een uitroepteken. Bij een neutrale toon kan ook een punt: *Oh, wat leuk dat je er bent, Jan.*",
    },
  ],
};