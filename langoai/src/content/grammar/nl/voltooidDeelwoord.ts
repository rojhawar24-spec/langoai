import type { GrammarLesson } from "../../types";

export const voltooidDeelwoord: GrammarLesson = {
  id: "nl-voltooiddeelwoord-2",
  title: "Het Voltooid Deelwoord: gewerkt, geschreven, opgeruimd en nog veel meer",
  level: 2,
  topic: "Voltooid deelwoord", // [G] Grammatica
  body: "Leer hoe je het voltooid deelwoord vormt en gebruikt. Van zwakke en sterke werkwoorden tot scheidbare werkwoorden en de verbuiging als bijvoeglijk naamwoord.",
  overview:
    "Het **voltooid deelwoord** geeft aan dat een handeling voltooid is. In deze **superuitgebreide les, boordevol tabellen en voorbeelden**, ontdek je stap voor stap hoe je het voltooid deelwoord maakt voor zwakke, sterke, onregelmatige, scheidbare en niet-scheidbare werkwoorden. Je leert de regels van ’t kofschip, de v/f‑ en z/s‑wisseling, wanneer je **hebben** of **zijn** gebruikt, en hoe je het voltooid deelwoord verbuigt als bijvoeglijk naamwoord. Met meer dan 150 voorbeelden, heldere tabellen, PAS OP‑waarschuwingen en 7 ijzersterke oefenvragen schrijf jij elk voltooid deelwoord foutloos.",
  anchorSectionId: "wat",
  exercises: [],
  timeExpressionsLabel: "Vorming van het voltooid deelwoord – overzicht 📊",
  timeExpressions: {
    header: "Type werkwoord | Regel | Voorbeeld",
    rows: [
      ["Zwak", "ge‑ + stam + **‑d** of **‑t** (’t kofschip)", "werken → gewerkt, spelen → gespeeld"],
      ["Sterk", "ge‑ + stam met klinkerwisseling + **‑en**", "schrijven → geschreven, lopen → gelopen"],
      ["Onregelmatig", "eigen vorm", "zijn → geweest, hebben → gehad"],
      ["Scheidbaar", "voorvoegsel + **‑ge‑** + stam + d/t/en", "opbellen → opgebeld"],
      ["Met voorvoegsel (be‑, ver‑, ont‑, her‑, ge‑)", "**geen** ge‑", "betalen → betaald, vertellen → verteld"],
    ],
  },
  details: [
    {
      title: "Wat is het voltooid deelwoord? 🎯",
      body: `
        <p>Het <strong>voltooid deelwoord</strong> is een werkwoordsvorm die aangeeft dat iets <strong>voltooid</strong> of <strong>afgerond</strong> is. Je gebruikt het:</p>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">samen met <strong>hebben</strong> of <strong>zijn</strong> om de voltooide tijden te maken (<em>Ik heb gewerkt, zij is gegaan</em>)</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">als <strong>bijvoeglijk naamwoord</strong> (<em>de gewerkte uren, een geschreven brief</em>)</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">in de <strong>lijdende vorm</strong> (<em>het boek wordt gelezen</em>)</li>
        </ul>
      `,
    },
    {
      title: "Zwakke werkwoorden – de grootste groep 🏗️",
      body: `
        <p>Zwakke werkwoorden veranderen niet van klinker. Hun voltooid deelwoord maak je met <strong>ge‑ + stam + ‑d</strong> of <strong>‑t</strong>. De keuze tussen ‑d en ‑t wordt bepaald door <strong>’t kofschip</strong>: zit de laatste letter van de stam in ’t kofschip (t, k, f, s, ch, p) of is het een x? Dan schrijf je <strong>‑t</strong>. Anders <strong>‑d</strong>. Bij de v/f‑ en z/s‑wisseling kijk je naar de oorspronkelijke stemhebbende klank (v of z) → die zit niet in ’t kofschip, dus altijd <strong>‑d</strong>.</p>
        <h3 class="text-lg font-bold mt-4 mb-2">Voltooid deelwoord op ‑t</h3>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Infinitief</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Stam</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Laatste letter</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Voltooid deelwoord</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">werken</td><td class="px-3 py-2 text-sm">werk</td><td class="px-3 py-2 text-sm">k</td><td class="px-3 py-2 text-sm">ge<strong>werkt</strong></td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">fietsen</td><td class="px-3 py-2 text-sm">fiets</td><td class="px-3 py-2 text-sm">s</td><td class="px-3 py-2 text-sm">ge<strong>fietst</strong></td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">stoppen</td><td class="px-3 py-2 text-sm">stop</td><td class="px-3 py-2 text-sm">p</td><td class="px-3 py-2 text-sm">ge<strong>stopt</strong></td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">lachen</td><td class="px-3 py-2 text-sm">lach</td><td class="px-3 py-2 text-sm">ch</td><td class="px-3 py-2 text-sm">ge<strong>lacht</strong></td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">faxen</td><td class="px-3 py-2 text-sm">fax</td><td class="px-3 py-2 text-sm">x</td><td class="px-3 py-2 text-sm">ge<strong>faxt</strong></td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">kussen</td><td class="px-3 py-2 text-sm">kus</td><td class="px-3 py-2 text-sm">s (geen wisseling)</td><td class="px-3 py-2 text-sm">ge<strong>kust</strong></td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">straffen</td><td class="px-3 py-2 text-sm">straf</td><td class="px-3 py-2 text-sm">f (geen wisseling)</td><td class="px-3 py-2 text-sm">ge<strong>straft</strong></td></tr>
            </tbody>
          </table>
        </div>
        <h3 class="text-lg font-bold mt-6 mb-2">Voltooid deelwoord op ‑d</h3>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Infinitief</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Stam</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Oorspr. klank / letter</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Voltooid deelwoord</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">spelen</td><td class="px-3 py-2 text-sm">speel</td><td class="px-3 py-2 text-sm">l</td><td class="px-3 py-2 text-sm">ge<strong>speeld</strong></td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">luisteren</td><td class="px-3 py-2 text-sm">luister</td><td class="px-3 py-2 text-sm">r</td><td class="px-3 py-2 text-sm">ge<strong>luisterd</strong></td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">leven</td><td class="px-3 py-2 text-sm">leef</td><td class="px-3 py-2 text-sm">v (v/f‑wisseling)</td><td class="px-3 py-2 text-sm">ge<strong>leefd</strong></td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">reizen</td><td class="px-3 py-2 text-sm">reis</td><td class="px-3 py-2 text-sm">z (z/s‑wisseling)</td><td class="px-3 py-2 text-sm">ge<strong>reisd</strong></td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">bellen</td><td class="px-3 py-2 text-sm">bel</td><td class="px-3 py-2 text-sm">l</td><td class="px-3 py-2 text-sm">ge<strong>beld</strong></td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">lenen</td><td class="px-3 py-2 text-sm">leen</td><td class="px-3 py-2 text-sm">n</td><td class="px-3 py-2 text-sm">ge<strong>leend</strong></td></tr>
            </tbody>
          </table>
        </div>
        <h3 class="text-lg font-bold mt-6 mb-2">Stam op t of d – geen extra t/d</h3>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Infinitief</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Stam</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Voltooid deelwoord</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">zetten</td><td class="px-3 py-2 text-sm">zet</td><td class="px-3 py-2 text-sm">ge<strong>zet</strong></td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">praten</td><td class="px-3 py-2 text-sm">praat</td><td class="px-3 py-2 text-sm">ge<strong>praat</strong></td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">antwoorden</td><td class="px-3 py-2 text-sm">antwoord</td><td class="px-3 py-2 text-sm">ge<strong>antwoord</strong></td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">leiden</td><td class="px-3 py-2 text-sm">leid</td><td class="px-3 py-2 text-sm">ge<strong>leid</strong></td></tr>
            </tbody>
          </table>
        </div>
        <p><span class="pas-op-highlight">⚠️ PAS OP</span> Bij werkwoorden als <em>leven</em> en <em>reizen</em> bepaalt de oorspronkelijke v of z dat je <strong>‑d</strong> schrijft, ook al zie je een f of s in de stam.</p>
      `,
    },
    {
      title: "Sterke werkwoorden – klinkerverandering en ‑en ⚡",
      body: `
        <p>Sterke werkwoorden veranderen van klinker en eindigen op <strong>‑en</strong>. Hieronder een grote tabel met de belangrijkste sterke werkwoorden.</p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Infinitief</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Voltooid deelwoord</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Infinitief</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Voltooid deelwoord</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">beginnen</td><td class="px-3 py-2 text-sm">begonnen</td><td class="px-3 py-2 text-sm">krijgen</td><td class="px-3 py-2 text-sm">gekregen</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">blijven</td><td class="px-3 py-2 text-sm">gebleven</td><td class="px-3 py-2 text-sm">lezen</td><td class="px-3 py-2 text-sm">gelezen</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">breken</td><td class="px-3 py-2 text-sm">gebroken</td><td class="px-3 py-2 text-sm">lopen</td><td class="px-3 py-2 text-sm">gelopen</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">dragen</td><td class="px-3 py-2 text-sm">gedragen</td><td class="px-3 py-2 text-sm">nemen</td><td class="px-3 py-2 text-sm">genomen</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">eten</td><td class="px-3 py-2 text-sm">gegeten</td><td class="px-3 py-2 text-sm">rijden</td><td class="px-3 py-2 text-sm">gereden</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">geven</td><td class="px-3 py-2 text-sm">gegeven</td><td class="px-3 py-2 text-sm">schrijven</td><td class="px-3 py-2 text-sm">geschreven</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">helpen</td><td class="px-3 py-2 text-sm">geholpen</td><td class="px-3 py-2 text-sm">spreken</td><td class="px-3 py-2 text-sm">gesproken</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">komen</td><td class="px-3 py-2 text-sm">gekomen</td><td class="px-3 py-2 text-sm">vallen</td><td class="px-3 py-2 text-sm">gevallen</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">zitten</td><td class="px-3 py-2 text-sm">gezeten</td><td class="px-3 py-2 text-sm">zwemmen</td><td class="px-3 py-2 text-sm">gezwommen</td></tr>
            </tbody>
          </table>
        </div>
        <p>Deze vormen moet je uit het hoofd leren; er is geen eenvoudige regel voor de klinkerwisseling.</p>
      `,
    },
    {
      title: "Onregelmatige werkwoorden – aparte vormen 🌟",
      body: `
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Infinitief</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Voltooid deelwoord</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">zijn</td><td class="px-3 py-2 text-sm">geweest</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">hebben</td><td class="px-3 py-2 text-sm">gehad</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">doen</td><td class="px-3 py-2 text-sm">gedaan</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">gaan</td><td class="px-3 py-2 text-sm">gegaan</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">staan</td><td class="px-3 py-2 text-sm">gestaan</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">zien</td><td class="px-3 py-2 text-sm">gezien</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">kopen</td><td class="px-3 py-2 text-sm">gekocht</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">zoeken</td><td class="px-3 py-2 text-sm">gezocht</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">brengen</td><td class="px-3 py-2 text-sm">gebracht</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">denken</td><td class="px-3 py-2 text-sm">gedacht</td></tr>
            </tbody>
          </table>
        </div>
      `,
    },
    {
      title: "Scheidbare werkwoorden – voorvoegsel + ge + stam + d/t/en 🔀",
      body: `
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Infinitief</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Voltooid deelwoord</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">opbellen</td><td class="px-3 py-2 text-sm">op<strong>ge</strong>beld</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">aankomen</td><td class="px-3 py-2 text-sm">aan<strong>ge</strong>komen</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">meenemen</td><td class="px-3 py-2 text-sm">mee<strong>ge</strong>nomen</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">opruimen</td><td class="px-3 py-2 text-sm">op<strong>ge</strong>ruimd</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">uitstappen</td><td class="px-3 py-2 text-sm">uit<strong>ge</strong>stapt</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">oversteken</td><td class="px-3 py-2 text-sm">over<strong>ge</strong>stoken</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">opstaan</td><td class="px-3 py-2 text-sm">op<strong>ge</strong>staan</td></tr>
            </tbody>
          </table>
        </div>
        <p>Bij scheidbare werkwoorden komt <strong>‑ge‑</strong> tussen het voorvoegsel en de stam. Het voltooid deelwoord is één woord.</p>
      `,
    },
    {
      title: "Werkwoorden met voorvoegsel (be‑, ver‑, ont‑, her‑, ge‑) – geen ge‑ 🚫",
      body: `
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Infinitief</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Voltooid deelwoord</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">betalen</td><td class="px-3 py-2 text-sm"><strong>betaald</strong></td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">vertellen</td><td class="px-3 py-2 text-sm"><strong>verteld</strong></td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">ontdekken</td><td class="px-3 py-2 text-sm"><strong>ontdekt</strong></td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">herkennen</td><td class="px-3 py-2 text-sm"><strong>herkend</strong></td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">gebruiken</td><td class="px-3 py-2 text-sm"><strong>gebruikt</strong></td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">bezoeken</td><td class="px-3 py-2 text-sm"><strong>bezocht</strong> (sterk)</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">verliezen</td><td class="px-3 py-2 text-sm"><strong>verloren</strong> (sterk)</td></tr>
            </tbody>
          </table>
        </div>
        <p>Deze werkwoorden krijgen nooit <em>ge‑</em>. Het voorvoegsel blijft staan en de uitgang volgt de normale regels.</p>
      `,
    },
    {
      title: "Keuze tussen hebben en zijn ⚖️",
      body: `
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Categorie</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Voorbeelden met 'hebben'</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Voorbeelden met 'zijn'</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Geen richting / lijdend voorwerp</td><td class="px-3 py-2 text-sm">Ik <strong>heb</strong> gewerkt, gespeeld, gegeten.</td><td class="px-3 py-2 text-sm">–</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Beweging met richting</td><td class="px-3 py-2 text-sm">Ik <strong>heb</strong> in het bos gewandeld (geen bestemming)</td><td class="px-3 py-2 text-sm">Ik <strong>ben</strong> naar huis gewandeld (bestemming)</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Toestandsverandering</td><td class="px-3 py-2 text-sm">–</td><td class="px-3 py-2 text-sm">Het ijs <strong>is</strong> gesmolten. Hij <strong>is</strong> overleden.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Uitzonderingen</td><td class="px-3 py-2 text-sm">–</td><td class="px-3 py-2 text-sm">Het feest <strong>is</strong> begonnen. Wat <strong>is</strong> er gebeurd?</td></tr>
            </tbody>
          </table>
        </div>
        <p><span class="pas-op-highlight">⚠️ PAS OP</span> Bij beweging zonder richting gebruik je <strong>hebben</strong>, bij beweging met bestemming <strong>zijn</strong>.</p>
      `,
    },
    {
      title: "Het voltooid deelwoord als bijvoeglijk naamwoord 🎨",
      body: `
        <p>Het voltooid deelwoord kan vóór een zelfstandig naamwoord staan en volgt dan de normale verbuigingsregels. Let op: sterke voltooide deelwoorden op <strong>‑en</strong> krijgen geen extra ‑e.</p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Lidwoord</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">De-woord (dag)</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Het-woord (uur)</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">de / het (bepaald)</td><td class="px-3 py-2 text-sm">de gewerk<strong>te</strong> dag</td><td class="px-3 py-2 text-sm">het gewerk<strong>te</strong> uur</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">een (onbepaald)</td><td class="px-3 py-2 text-sm">een gewerk<strong>te</strong> dag</td><td class="px-3 py-2 text-sm">een gewerk<strong>t</strong> uur (geen -e)</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">(sterk op -en)</td><td class="px-3 py-2 text-sm">de geschreven brief</td><td class="px-3 py-2 text-sm">het geschreven boek</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">een + sterk op -en</td><td class="px-3 py-2 text-sm">een geschreven brief</td><td class="px-3 py-2 text-sm">een geschreven boek</td></tr>
            </tbody>
          </table>
        </div>
        <p>Sterke voltooide deelwoorden op ‑en blijven onverbogen.</p>
      `,
    },
    {
      title: "Plaatsing in de zin – hoofdzin en bijzin 📍",
      body: `
        <p><strong>Hoofdzin:</strong> onderwerp – persoonsvorm (hebben/zijn) – rest – voltooid deelwoord. <em>Ik heb het boek gelezen.</em></p>
        <p><strong>Bijzin:</strong> voegwoord – onderwerp – rest – hulpwerkwoord + voltooid deelwoord. <em>...omdat ik het boek heb gelezen.</em></p>
        <p>In de bijzin staat het hulpwerkwoord meestal vóór het voltooid deelwoord, maar de omgekeerde volgorde mag ook (<em>...omdat ik het boek gelezen heb</em>).</p>
      `,
    },
  ],
  rulesTable: [
    {
      rule: "Zwak: ge‑ + stam + d/t (’t kofschip)",
      structure: "Bij zwakke werkwoorden: **ge‑ + stam + ‑d** of **‑t**. Gebruik ’t kofschip. Let op v/f‑ en z/s‑wisseling.",
      example: "gewerkt, gefietst, gespeeld, geleefd, gereisd.",
      usage: "Stam op t/d: geen extra t/d (gezet, geleid).",
    },
    {
      rule: "Sterk: ge‑ + stam (klinkerverandering) + en",
      structure: "Bij sterke werkwoorden verandert de klinker en eindigt het voltooid deelwoord op **‑en**.",
      example: "gelopen, geschreven, gezien, gebleven.",
      usage: "Geen vaste regel; uit het hoofd leren.",
    },
    {
      rule: "Onregelmatig: eigen vormen",
      structure: "Enkele werkwoorden hebben volledig afwijkende voltooide deelwoorden.",
      example: "geweest, gehad, gedaan, gegaan, gestaan, gekocht, gezocht, gebracht, gedacht.",
      usage: "Deze moet je apart memoriseren.",
    },
    {
      rule: "Scheidbare werkwoorden: voorvoegsel + ge + stam + d/t/en",
      structure: "Het voorvoegsel en de stam worden verbonden door **‑ge‑**. Het voltooid deelwoord is één woord.",
      example: "opgebeld, aangekomen, meegenomen, opgeruimd.",
      usage: "Ook bij sterke scheidbare werkwoorden: overgestoken, opgestaan.",
    },
    {
      rule: "Niet-scheidbare voorvoegsels: geen ge‑",
      structure: "Werkwoorden met **be‑, ver‑, ont‑, her‑, ge‑** (en soms er‑, mis‑, wan‑) krijgen **geen** ge‑ in het voltooid deelwoord.",
      example: "betaald, verteld, ontdekt, herkend, gebruikt, bezocht, verloren.",
      usage: "De uitgang volgt verder de normale regels (zwak of sterk).",
    },
    {
      rule: "Keuze hebben/zijn",
      structure: "De meeste werkwoorden gebruiken **hebben**. **Zijn** wordt gebruikt bij beweging met richting, toestandsverandering en enkele uitzonderingen.",
      example: "Ik heb gewerkt. / Ik ben naar huis gelopen. / Het is gebeurd.",
      usage: "Bij twijfel: raadpleeg een lijst of woordenboek.",
    },
  ],
  callouts: [
    { type: "remember", label: "Onthoud 1", text: "Zwak = **ge‑ + stam + d/t** (’t kofschip). Sterk = **ge‑ + stam (klinkerverandering) + en**." },
    { type: "remember", label: "Onthoud 2", text: "Scheidbaar: **voorvoegsel + ge + stam** (opgebeld). Voorvoegsel be‑/ver‑/ont‑: **geen ge‑** (betaald)." },
    { type: "remember", label: "Onthoud 3", text: "**Zijn** bij beweging met richting, toestandsverandering en enkele uitzonderingen. De rest: **hebben**." },
    { type: "remember", label: "Onthoud 4", text: "Als bijvoeglijk naamwoord: volg de ‑e-regels; sterke op ‑en blijven onverbogen." },
  ],
  commonMistakes: [
    { incorrect: "geleeft (van leven)", correct: "geleefd", explanation: "Leven heeft v/f‑wisseling; oorspronkelijke v → d." },
    { incorrect: "gereizt (van reizen)", correct: "gereisd", explanation: "Reizen heeft z/s‑wisseling; oorspronkelijke z → d." },
    { incorrect: "gebeldt (van bellen)", correct: "gebeld", explanation: "Stam 'bel' eindigt op l; geen extra t." },
    { incorrect: "Ik ben de afwas gedaan.", correct: "Ik heb de afwas gedaan.", explanation: "Doen met lijdend voorwerp → hebben." },
    { incorrect: "...omdat ik heb geschreven de brief.", correct: "...omdat ik de brief heb geschreven.", explanation: "In bijzin werkwoorden achteraan." },
    { incorrect: "een gewerkt dag (de-woord onbepaald)", correct: "een gewerkte dag", explanation: "De-woord onbepaald → wel -e." },
    { incorrect: "herkendt (van herkennen)", correct: "herkend", explanation: "Stam herken + d; geen extra t, geen ge‑." },
  ],
  review: [
    "Voltooid deelwoord = afgeronde handeling; gebruikt in voltooide tijden en als bijvoeglijk naamwoord.",
    "Zwak: ge‑ + stam + d (na stemhebbend) of t (na stemloos in ’t kofschip). Let op v/f, z/s.",
    "Sterk: ge‑ + stam (klinkerverandering) + en. Uit het hoofd leren.",
    "Onregelmatig: geweest, gehad, gedaan, gegaan, gestaan, gezien, gekocht, gezocht, gebracht, gedacht.",
    "Scheidbaar: voorvoegsel + ge + stam + d/t/en. Niet-scheidbaar (be‑, ver‑, ont‑, …): geen ge‑.",
    "Als bijvoeglijk naamwoord: verbuiging volgens gewone regels, sterke op ‑en blijven onverbogen.",
    "Plaatsing: achteraan in de hoofdzin; in bijzin samen met hulpwerkwoord achteraan.",
    "Keuze hebben/zijn: meestal hebben, tenzij beweging met richting of toestandsverandering → zijn.",
  ],
  qa: [
    {
      question: "Geef het voltooid deelwoord van **leven** en **reizen** en verklaar waarom je voor -d kiest, ook al eindigt de stam op f en s.",
      answer: "**geleefd** en **gereisd**. Deze werkwoorden hebben een v/f‑ of z/s‑wisseling. De oorspronkelijke klank is een stemhebbende **v** of **z**, die niet in ’t kofschip zit. Daarom krijgen ze de uitgang -d.",
    },
    {
      question: "Wat is het voltooid deelwoord van **opruimen**? Leg uit hoe je het opbouwt en waar de -ge- komt.",
      answer: "**opgeruimd**. *Opruimen* is een scheidbaar werkwoord. Het voltooid deelwoord maak je door -ge- tussen het voorvoegsel *op* en de stam *ruim* te plaatsen, gevolgd door -d (want *ruim* eindigt op m, niet in ’t kofschip).",
    },
    {
      question: "Waarom schrijf je het voltooid deelwoord van **zetten** als **gezet** en niet als *gezett*?",
      answer: "De stam van *zetten* is *zet*, die eindigt al op een **t**. In het voltooid deelwoord voeg je geen extra t toe; de t van de stam is al de slotmedeklinker. Dus *gezet*, met één t.",
    },
    {
      question: "Vul het juiste voltooid deelwoord in: 'Hij heeft de hele dag ___ (werken).' En: 'Zij is gisteren ___ (vertrekken).' Leg het verschil in hulpwerkwoord uit.",
      answer: "**gewerkt** en **vertrokken**. *Werken* is een zwak werkwoord en gebruikt *hebben* (geen beweging of verandering). *Vertrekken* is een sterk werkwoord dat een beweging met richting uitdrukt en gebruikt *zijn*.",
    },
    {
      question: "Maak van het voltooid deelwoord een bijvoeglijk naamwoord in: 'Dit is een ___ (schrijven) brief.' en 'Het ___ (openen) raam staat op een kier.'",
      answer: "**geschreven** (een geschreven brief – de-woord, onbepaald, sterke vorm op -en → geen -e) en **geopende** (het geopende raam – het-woord, bepaald → wel -e).",
    },
    {
      question: "Corrigeer de fout in deze bijzin: “...omdat ik heb gewerkt de hele dag.”",
      answer: "**...omdat ik de hele dag heb gewerkt.** In een bijzin moeten alle werkwoorden aan het eind staan. Het hulpwerkwoord *heb* en het voltooid deelwoord *gewerkt* horen bij elkaar achteraan.",
    },
    {
      question: "Leg uit waarom het voltooid deelwoord van **herkennen** geen 'ge-' krijgt en geef de juiste vorm.",
      answer: "Werkwoorden met het voorvoegsel **her-** (ook be-, ver-, ont-, ge-) krijgen in het voltooid deelwoord **geen ge-**. De juiste vorm is **herkend** (zwak: herken + d).",
    },
  ],
};