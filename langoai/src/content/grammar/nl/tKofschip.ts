import type { GrammarLesson } from "../../types";

export const tKofschip: GrammarLesson = {
  id: "nl-tkofschip-1",
  title: "’t Kofschip – De Regel voor Zwakke Werkwoorden (-de of -te)",
  level: 2,
  topic: "’t Kofschip (spelling)", // [Sch] Schrijven
  body: "Leer hoe je bij zwakke werkwoorden bepaalt of de verleden tijd en het voltooid deelwoord een -de(n) of -te(n) krijgen. Met de volledige uitleg, valkuilen en uitzonderingen.",
  overview:
    "De **’t kofschip‑regel** is een onmisbaar ezelsbruggetje om de uitgang van zwakke werkwoorden in de verleden tijd en het voltooid deelwoord te bepalen. In deze **allesomvattende, glasheldere les** ontdek je hoe je de stam vindt, hoe je de regel precies toepast, en hoe je omgaat met de beruchte **v/f‑ en z/s‑wisseling**. Je krijgt talloze voorbeelden, PAS OP‑waarschuwingen voor alle valkuilen, en 7 ijzersterke oefenvragen. Na deze les schrijf je elk zwak werkwoord foutloos in de verleden tijd en het voltooid deelwoord.",
  anchorSectionId: "wat",
  exercises: [],
  timeExpressionsLabel: "Voorbeelden van ’t kofschip ⛵",
  timeExpressions: {
    header: "Infinitief | Stam | Laatste letter | In ’t kofschip? | Verleden tijd | Voltooid deelwoord",
    rows: [
      ["werken", "werk", "k", "✅ ja", "werk**te**", "ge**werkt**"],
      ["spelen", "speel", "l", "❌ nee", "speel**de**", "ge**speeld**"],
      ["fietsen", "fiets", "s", "✅ ja", "fiets**te**", "ge**fietst**"],
      ["luisteren", "luister", "r", "❌ nee", "luister**de**", "ge**luisterd**"],
      ["leven", "leef (oorspr. v)", "v", "❌ nee", "leef**de**", "ge**leefd**"],
      ["reizen", "reis (oorspr. z)", "z", "❌ nee", "reis**de**", "ge**reisd**"],
      ["mixen", "mix", "x", "✅ (x geldt als stemloos)", "mix**te**", "ge**mixt**"],
    ],
  },
  details: [
    {
      title: "Wat is ’t kofschip en waarom moet je het kennen? 🎯",
      body: `
        <p>De <strong>’t kofschip‑regel</strong> is een ezelsbruggetje om te bepalen of een zwak werkwoord in de verleden tijd en het voltooid deelwoord een <strong>-de(n)</strong> of een <strong>-te(n)</strong> krijgt. De naam komt van de medeklinkers die bepalend zijn: <strong>t, k, f, s, ch, p</strong>. Als de laatste letter van de stam in deze reeks voorkomt, schrijf je <strong>-te(n)</strong> en een voltooid deelwoord op <strong>-t</strong>. Anders schrijf je <strong>-de(n)</strong> en een voltooid deelwoord op <strong>-d</strong>.</p>
        <p>Zwakke werkwoorden veranderen in de verleden tijd <strong>niet van klinker</strong>. Ze krijgen een vaste uitgang achter de stam. De ’t kofschip‑regel helpt je om die uitgang foutloos te schrijven.</p>
      `,
    },
    {
      title: "Hoe vind je de stam? 🔎",
      body: `
        <p>De stam van een werkwoord is gelijk aan de <strong>ik‑vorm</strong> in de tegenwoordige tijd. Je vindt de stam door <strong>-en</strong> van de infinitief af te halen en, waar nodig, de spelling aan te passen.</p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Infinitief</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Stam (ik‑vorm)</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Spellingregel</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">werken</td><td class="px-3 py-2 text-sm">werk</td><td class="px-3 py-2 text-sm">‑en eraf</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">fietsen</td><td class="px-3 py-2 text-sm">fiets</td><td class="px-3 py-2 text-sm">‑en eraf</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">leven</td><td class="px-3 py-2 text-sm">leef</td><td class="px-3 py-2 text-sm">v → f</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">reizen</td><td class="px-3 py-2 text-sm">reis</td><td class="px-3 py-2 text-sm">z → s</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">maken</td><td class="px-3 py-2 text-sm">maak</td><td class="px-3 py-2 text-sm">aa blijft</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">zitten</td><td class="px-3 py-2 text-sm">zit</td><td class="px-3 py-2 text-sm">korte i, één t</td></tr>
            </tbody>
          </table>
        </div>
        <p><span class="pas-op-highlight">⚠️ PAS OP</span> De stam is <strong>niet</strong> de ruwe vorm min ‑en, maar de officiële ik‑vorm. Bij werkwoorden als <em>leven</em> en <em>reizen</em> pas je dus eerst de v/f‑ en z/s‑wisseling toe voordat je de stam gebruikt.</p>
      `,
    },
    {
      title: "De regel van ’t kofschip stap voor stap ⛵",
      body: `
        <p>Het ezelsbruggetje is <strong>'t kofschip</strong> (ook wel <em>'t fokschaap</em> of <em>soft ketchup</em> genoemd). Het bevat de medeklinkers <strong>t, k, f, s, ch, p</strong>. Daarnaast gedraagt de <strong>x</strong> zich als een stemloze medeklinker en valt dus ook onder dezelfde regel.</p>
        <p>Volg deze stappen:</p>
        <ol class="my-2 space-y-1.5 pl-5 list-decimal">
          <li>Bepaal de <strong>stam</strong> van het werkwoord (de ik‑vorm).</li>
          <li>Kijk naar de <strong>laatste letter</strong> van die stam.</li>
          <li>Zit die letter in <strong>'t kofschip</strong> (t, k, f, s, ch, p) of is het een <strong>x</strong>?<br>
              → <strong>JA</strong>: gebruik <strong>-te(n)</strong> in de verleden tijd en <strong>-t</strong> in het voltooid deelwoord.<br>
              → <strong>NEE</strong>: gebruik <strong>-de(n)</strong> in de verleden tijd en <strong>-d</strong> in het voltooid deelwoord.</li>
        </ol>
      `,
    },
    {
      title: "De v/f‑ en z/s‑wisseling – de grootste valkuil ⚠️",
      body: `
        <p>De meeste fouten met ’t kofschip worden gemaakt bij werkwoorden waarvan de infinitief een <strong>v</strong> of <strong>z</strong> bevat, maar de stam op een <strong>f</strong> of <strong>s</strong> eindigt. Je zou dan volgens de oppervlakkige regel misschien -te kiezen, maar dat is <strong>fout</strong>. De reden is dat je moet kijken naar de <strong>oorspronkelijke klank</strong> van de stam. De letters v en z zijn <strong>stemhebbend</strong> en zitten <strong>niet</strong> in ’t kofschip. Daarom krijgen deze werkwoorden altijd <strong>-de(n)</strong>.</p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Infinitief</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Stam</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Oorspr. klank</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Verleden tijd</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">leven</td><td class="px-3 py-2 text-sm">leef</td><td class="px-3 py-2 text-sm">v</td><td class="px-3 py-2 text-sm">leef<strong>de</strong></td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">streven</td><td class="px-3 py-2 text-sm">streef</td><td class="px-3 py-2 text-sm">v</td><td class="px-3 py-2 text-sm">streef<strong>de</strong></td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">reizen</td><td class="px-3 py-2 text-sm">reis</td><td class="px-3 py-2 text-sm">z</td><td class="px-3 py-2 text-sm">reis<strong>de</strong></td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">verhuizen</td><td class="px-3 py-2 text-sm">verhuis</td><td class="px-3 py-2 text-sm">z</td><td class="px-3 py-2 text-sm">verhuis<strong>de</strong></td></tr>
            </tbody>
          </table>
        </div>
        <p>🧠 <strong>Ezelsbrug:</strong> Hoor je in de infinitief een <strong>v</strong> of <strong>z</strong>? Dan is de klank stemhebbend en krijg je <strong>-de</strong>. De spelling van de stam (met f of s) is slechts de geschreven vorm; de uitspraak bepaalt de uitgang.</p>
        <p><span class="pas-op-highlight">⚠️ PAS OP</span> Werkwoorden die <strong>geen</strong> wisseling hebben en van nature op een f of s eindigen, zoals <em>straffen</em> (stam: straf) of <em>kussen</em> (stam: kus), krijgen wél <strong>-te</strong>. <em>Straffen → strafte, gestraft. Kussen → kuste, gekust.</em></p>
      `,
    },
    {
      title: "Werkwoorden met een stam op -x 📏",
      body: `
        <p>De letter <strong>x</strong> komt niet in het traditionele ’t kofschip voor, maar wordt in de moderne spelling behandeld als een stemloze medeklinker. Daarom krijgen werkwoorden met een stam op ‑x eveneens <strong>-te(n)</strong>.</p>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">faxen → fax<strong>te</strong>, ge<strong>faxt</strong></li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">mixen → mix<strong>te</strong>, ge<strong>mixt</strong></li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">relaxen → relax<strong>te</strong>, ge<strong>relaxt</strong></li>
        </ul>
        <p>Onthoud dus: ook een stam op <strong>x</strong> levert <strong>-te</strong> op.</p>
      `,
    },
    {
      title: "Stam die al op t of d eindigt – dubbele medeklinkers 🧷",
      body: `
        <p>Als de stam al op een <strong>t</strong> of <strong>d</strong> eindigt, voeg je in de verleden tijd de uitgang <strong>-te</strong> of <strong>-de</strong> toe. Dat levert een dubbele medeklinker op. In het voltooid deelwoord schrijf je <strong>ge‑ + stam</strong>. Omdat de stam al op t of d eindigt, komt er geen extra t of d bij.</p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Infinitief</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Stam</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Verleden tijd</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Voltooid deelwoord</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">zetten</td><td class="px-3 py-2 text-sm">zet</td><td class="px-3 py-2 text-sm">zet<strong>te</strong></td><td class="px-3 py-2 text-sm">ge<strong>zet</strong></td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">praten</td><td class="px-3 py-2 text-sm">praat</td><td class="px-3 py-2 text-sm">praat<strong>te</strong></td><td class="px-3 py-2 text-sm">ge<strong>praat</strong></td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">antwoorden</td><td class="px-3 py-2 text-sm">antwoord</td><td class="px-3 py-2 text-sm">antwoord<strong>de</strong></td><td class="px-3 py-2 text-sm">ge<strong>antwoord</strong></td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">leiden</td><td class="px-3 py-2 text-sm">leid</td><td class="px-3 py-2 text-sm">leid<strong>de</strong></td><td class="px-3 py-2 text-sm">ge<strong>leid</strong></td></tr>
            </tbody>
          </table>
        </div>
        <p><span class="pas-op-highlight">⚠️ PAS OP</span> Het voltooid deelwoord van <em>zetten</em> is <strong>gezet</strong> (één t), en van <em>leiden</em> <strong>geleid</strong> (geen extra d). Het voorvoegsel <em>ge‑</em> wordt direct aan de stam vastgeplakt.</p>
      `,
    },
    {
      title: "Het voltooid deelwoord en ’t kofschip 🏁",
      body: `
        <p>Het voltooid deelwoord van een zwak werkwoord maak je met <strong>ge‑ + stam + ‑d of ‑t</strong>. De keuze tussen ‑d en ‑t wordt op precies dezelfde manier bepaald met de ’t kofschip‑regel.</p>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">werken → ge<strong>werkt</strong> (k in ’t kofschip)</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">spelen → ge<strong>speeld</strong> (l niet in ’t kofschip)</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">leven → ge<strong>leefd</strong> (v‑klank, niet in ’t kofschip)</li>
        </ul>
        <p>Werkwoorden die beginnen met <strong>be‑, ver‑, ont‑, her‑</strong> of <strong>ge‑</strong> krijgen <strong>geen</strong> extra <em>ge‑</em> in het voltooid deelwoord. De uitgang blijft wel door ’t kofschip bepaald.</p>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">betalen → <strong>betaald</strong> (niet gebetaald)</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">vertellen → <strong>verteld</strong></li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">ontdekken → <strong>ontdekt</strong></li>
        </ul>
      `,
    },
    {
      title: "Sterke en onregelmatige werkwoorden vallen buiten de regel 🚫",
      body: `
        <p>De ’t kofschip‑regel geldt <strong>uitsluitend voor zwakke werkwoorden</strong>. Sterke werkwoorden veranderen van klinker en krijgen een voltooid deelwoord op <strong>-en</strong>. Onregelmatige werkwoorden volgen hun eigen vormen.</p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Infinitief</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Verleden tijd</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Voltooid deelwoord</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Soort</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">lopen</td><td class="px-3 py-2 text-sm">liep</td><td class="px-3 py-2 text-sm">gelopen</td><td class="px-3 py-2 text-sm">sterk</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">schrijven</td><td class="px-3 py-2 text-sm">schreef</td><td class="px-3 py-2 text-sm">geschreven</td><td class="px-3 py-2 text-sm">sterk</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">zijn</td><td class="px-3 py-2 text-sm">was</td><td class="px-3 py-2 text-sm">geweest</td><td class="px-3 py-2 text-sm">onregelmatig</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">hebben</td><td class="px-3 py-2 text-sm">had</td><td class="px-3 py-2 text-sm">gehad</td><td class="px-3 py-2 text-sm">onregelmatig</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">kunnen</td><td class="px-3 py-2 text-sm">kon</td><td class="px-3 py-2 text-sm">gekund</td><td class="px-3 py-2 text-sm">onregelmatig</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">doen</td><td class="px-3 py-2 text-sm">deed</td><td class="px-3 py-2 text-sm">gedaan</td><td class="px-3 py-2 text-sm">onregelmatig</td></tr>
            </tbody>
          </table>
        </div>
        <p>Leer de sterke en onregelmatige werkwoorden uit het hoofd; voor de rest gebruik je de ’t kofschip‑regel.</p>
      `,
    },
  ],
  rulesTable: [
    {
      rule: "Stam bepalen",
      structure: "Haal **-en** van de infinitief af en pas de spelling aan (v→f, z→s, klinkerregels). De stam is de ik‑vorm.",
      example: "werken → werk, leven → leef, reizen → reis.",
      usage: "Gebruik de officiële stam; niet de ruwe vorm min -en.",
    },
    {
      rule: "Laatste letter van de stam checken",
      structure: "Kijk naar de **oorspronkelijke klank** van de laatste letter van de stam. Zit die in **'t kofschip** (t, k, f, s, ch, p) of is het een **x**?",
      example: "werk (k) → ja; speel (l) → nee; leef (oorspr. v) → nee; mix (x) → ja.",
      usage: "Bij v/f- en z/s-wisseling telt de klank van de infinitief (v of z), niet de geschreven f/s in de stam.",
    },
    {
      rule: "Uitgang toepassen",
      structure: "Ja → **-te(n)** en voltooid deelwoord op **-t**. Nee → **-de(n)** en voltooid deelwoord op **-d**.",
      example: "werkte, gewerkt / speelde, gespeeld / leefde, geleefd.",
      usage: "Bij stam op t/d: geen extra t/d in voltooid deelwoord (gezet, geleid).",
    },
    {
      rule: "Voorvoegsels be-, ver-, ont-, her-, ge-",
      structure: "Werkwoorden met deze voorvoegsels krijgen **geen** ge‑ in het voltooid deelwoord. De uitgang volgt wel de ’t kofschip‑regel.",
      example: "betalen → betaalde, betaald. vertellen → vertelde, verteld.",
      usage: "Het voorvoegsel vervangt als het ware de 'ge‑'.",
    },
    {
      rule: "Sterke en onregelmatige werkwoorden uitgezonderd",
      structure: "De ’t kofschip‑regel werkt **alleen bij zwakke werkwoorden**. Sterke werkwoorden veranderen van klinker en eindigen op -en in het voltooid deelwoord.",
      example: "lopen → liep, gelopen. zijn → was, geweest.",
      usage: "Controleer altijd of een werkwoord zwak is voordat je de regel toepast.",
    },
  ],
  callouts: [
    { type: "remember", label: "Onthoud 1", text: "’t Kofschip = **t, k, f, s, ch, p** (en **x**)." },
    { type: "remember", label: "Onthoud 2", text: "Kijk naar de **oorspronkelijke klank** van de stam, niet alleen naar de spelling." },
    { type: "remember", label: "Onthoud 3", text: "**Leven** → leef**de** (want v), **reizen** → reis**de** (want z)." },
    { type: "remember", label: "Onthoud 4", text: "Stam op t/d: voltooid deelwoord = ge‑ + stam (zonder extra t/d)." },
    { type: "remember", label: "Onthoud 5", text: "Voorvoegsels be‑, ver‑, ont‑, her‑, ge‑: geen extra ge‑ in voltooid deelwoord." },
  ],
  commonMistakes: [
    {
      incorrect: "leefte",
      correct: "leefde",
      explanation: "Leven heeft een v/f‑wisseling; de oorspronkelijke v zit niet in ’t kofschip → -de.",
    },
    {
      incorrect: "reiste (als verleden tijd van reizen bedoeld; reiste bestaat wel van 'reizen' maar foutieve -te)",
      correct: "reisde",
      explanation: "Reizen heeft een z/s‑wisseling; de oorspronkelijke z zit niet in ’t kofschip → -de.",
    },
    {
      incorrect: "werkte (goed, maar soms denken mensen dat de k niet in 't kofschip zit)",
      correct: "werkte (is correct)",
      explanation: "k zit wél in ’t kofschip.",
    },
    {
      incorrect: "mixde",
      correct: "mixte",
      explanation: "De x wordt als stemloze medeklinker behandeld en valt onder de regel → -te.",
    },
    {
      incorrect: "geantwoordt (voltooid deelwoord van antwoorden)",
      correct: "geantwoord",
      explanation: "Stam antwoord eindigt op d; voltooid deelwoord = ge‑ + stam zonder extra d.",
    },
    {
      incorrect: "geë-maild (voltooid deelwoord van e‑mailen)",
      correct: "ge‑e‑maild",
      explanation: "Stam e‑mail eindigt op l (niet in ’t kofschip) → -d. Het streepje blijft na ge‑ bij woorden die met een losse letter beginnen? 'e‑mailen' → 'ge‑e‑maild' is correct.",
    },
  ],
  review: [
    "Bepaal de stam (ik‑vorm) van het werkwoord.",
    "Kijk naar de laatste letter van de stam (oorspronkelijke klank).",
    "Zit die letter in ’t kofschip (t, k, f, s, ch, p) of is het een x? → -te(n) / -t. Anders → -de(n) / -d.",
    "V/f‑ en z/s‑wisseling: gebruik de klank van de infinitief (v, z) → -de.",
    "Stam op t of d: voltooid deelwoord zonder extra t/d (gezet, geleid).",
    "Voorvoegsels be‑, ver‑, ont‑, her‑, ge‑: geen extra ge‑.",
    "De regel geldt alleen voor zwakke werkwoorden; sterke en onregelmatige werkwoorden apart leren.",
  ],
  qa: [
    {
      question: "Leg uit waarom de verleden tijd van 'leven' **leefde** is en niet *leefte*, ook al eindigt de stam op een f die in ’t kofschip zit.",
      answer: "Bij *leven* is er sprake van een **v/f‑wisseling**. De oorspronkelijke klank van de stam is **v**, en die zit niet in ’t kofschip. Daarom gebruik je de uitgang **-de**. De spelling van de stam is *leef*, maar de klankregel geeft de doorslag.",
    },
    {
      question: "Bepaal de verleden tijd en het voltooid deelwoord van het werkwoord **mixen**. Leg uit waarom je die uitgang gebruikt.",
      answer: "De stam is *mix*. De laatste letter is **x**. Hoewel de x niet in het traditionele ’t kofschip zit, wordt hij behandeld als een stemloze medeklinker en krijg je **-te**. Dus: **mixte**, **gemixt**.",
    },
    {
      question: "Waarom is de verleden tijd van **antwoorden** *antwoordde* en niet *antwoordte*?",
      answer: "De stam is *antwoord*, de laatste letter is **d**. De d zit niet in ’t kofschip, dus je gebruikt **-de**. Omdat de stam al op een d eindigt, krijg je dubbele d: *antwoordde*.",
    },
    {
      question: "Geef het voltooid deelwoord van **betalen** en verklaar waarom er geen 'ge‑' voor staat.",
      answer: "Het voltooid deelwoord is **betaald**. Werkwoorden die beginnen met **be‑** (ook *ver‑, ont‑, her‑, ge‑*) krijgen nooit het voorvoegsel *ge‑* in het voltooid deelwoord. De uitgang ‑d komt omdat de stam *betaal* eindigt op een l, die niet in ’t kofschip zit.",
    },
    {
      question: "Wat is het verschil in de verleden tijd tussen **kussen** en **bruisen**? Leg uit met de ’t kofschip‑regel.",
      answer: "*Kussen* heeft de stam *kus*; de s zit in de infinitief en blijft s. De s zit in ’t kofschip, dus **kuste**. *Bruisen* heeft de stam *bruis*, maar de infinitief heeft een s die oorspronkelijk een z‑klank vertegenwoordigt (z/s‑wisseling). De z zit niet in ’t kofschip, dus **bruisde**.",
    },
    {
      question: "Corrigeer de fout: “Hij verhuisde gisteren naar een ander huis.” Is er een fout? Verklaar.",
      answer: "De zin is **correct**. *Verhuizen* is een werkwoord met z/s‑wisseling. De stam is *verhuis*, maar de oorspronkelijke klank is z, dus -de: **verhuisde**. Dit is juist.",
    },
    {
      question: "Leg uit of de ’t kofschip‑regel gebruikt kan worden bij het werkwoord **schrijven**. Waarom wel of niet?",
      answer: "Nee, **schrijven** is een **sterk werkwoord**. De verleden tijd is *schreef* en het voltooid deelwoord is *geschreven*. Er is een klinkerverandering (ij → ee), en het voltooid deelwoord eindigt op -en. De ’t kofschip‑regel geldt uitsluitend voor zwakke werkwoorden.",
    },
  ],
};