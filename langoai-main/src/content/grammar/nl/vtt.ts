import type { GrammarLesson } from "../../types";

export const vtt: GrammarLesson = {
  id: "nl-vtt-1",
  title: "Voltooid Tegenwoordige Tijd (VTT): hebben/zijn + voltooid deelwoord",
  level: 2,
  topic: "Voltooid Tegenwoordige Tijd", // [G] Grammatica
  body: "Leer hoe je de voltooid tegenwoordige tijd maakt met 'hebben' of 'zijn' en een voltooid deelwoord. Met alle regels, uitzonderingen en valkuilen.",
  overview:
    "De voltooid tegenwoordige tijd (VTT) gebruik je om te vertellen wat er gebeurd is en waarvan het resultaat nu nog belangrijk is. In deze **superuitgebreide, glasheldere les** ontdek je hoe de VTT is opgebouwd uit het hulpwerkwoord **hebben** of **zijn** en een **voltooid deelwoord**. Je leert wanneer je welk hulpwerkwoord kiest, hoe je het voltooid deelwoord vormt bij zwakke, sterke, onregelmatige en scheidbare werkwoorden, en hoe je de VTT in hoofdzinnen en bijzinnen plaatst. Ook krijg je uitleg over het verschil met de onvoltooid verleden tijd. Met talloze voorbeelden, PAS OP‑waarschuwingen en 7 ijzersterke oefenvragen gebruik jij de VTT voortaan foutloos.",
  anchorSectionId: "wat",
  exercises: [],
  timeExpressionsLabel: "Vorming VTT met 'hebben' en 'zijn' 🧩",
  timeExpressions: {
    header: "Onderwerp | Hulpwerkwoord (hebben) | Hulpwerkwoord (zijn) | Voltooid deelwoord (werken) | Voltooid deelwoord (gaan)",
    rows: [
      ["ik", "**heb**", "**ben**", "gewerkt", "gegaan"],
      ["jij / je", "**hebt** / **heb** (inversie)", "**bent**", "gewerkt", "gegaan"],
      ["u", "**hebt** / **heeft**", "**bent**", "gewerkt", "gegaan"],
      ["hij / zij / het", "**heeft**", "**is**", "gewerkt", "gegaan"],
      ["wij / we", "**hebben**", "**zijn**", "gewerkt", "gegaan"],
      ["jullie", "**hebben**", "**zijn**", "gewerkt", "gegaan"],
      ["zij / ze", "**hebben**", "**zijn**", "gewerkt", "gegaan"],
    ],
  },
  details: [
    {
      title: "Wat is de voltooid tegenwoordige tijd? 🎯",
      body: `
        <p>De <strong>voltooid tegenwoordige tijd (VTT)</strong> gebruik je voor iets dat in het verleden is gebeurd, maar waarvan het resultaat nu nog belangrijk is of dat nu voltooid is. Ook voor ervaringen en mededelingen waar het niet om het moment zelf gaat maar om het feit dát het gebeurd is, gebruik je de VTT.</p>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">Ik <strong>heb</strong> een boek <strong>gelezen</strong>. (het boek is nu uit)</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">Hij <strong>is</strong> naar Amsterdam <strong>gegaan</strong>. (hij is daar nu, of hij is geweest en weer terug)</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">We <strong>hebben</strong> nog nooit zo'n mooie zonsondergang <strong>gezien</strong>. (ervaring)</li>
        </ul>
        <p>De VTT bestaat uit twee delen: een <strong>hulpwerkwoord</strong> (<em>hebben</em> of <em>zijn</em>) in de tegenwoordige tijd, en een <strong>voltooid deelwoord</strong>.</p>
      `,
    },
    {
      title: "Keuze tussen 'hebben' en 'zijn' – de belangrijkste regel ⚖️",
      body: `
        <p>De meeste werkwoorden gebruiken <strong>hebben</strong>. Een kleinere, maar veelgebruikte groep gebruikt <strong>zijn</strong>. De keuze hangt af van de betekenis van het werkwoord.</p>
        <h3 class="text-lg font-bold mt-4 mb-2">Werkwoorden die 'hebben' gebruiken</h3>
        <p>Bijna alle overgankelijke werkwoorden (met een lijdend voorwerp) en veel onovergankelijke werkwoorden:</p>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">Ik <strong>heb</strong> een appel <strong>gegeten</strong>.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">Zij <strong>heeft</strong> de hele dag <strong>gewerkt</strong>.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">We <strong>hebben</strong> een film <strong>gekeken</strong>.</li>
        </ul>
        <h3 class="text-lg font-bold mt-6 mb-2">Werkwoorden die 'zijn' gebruiken</h3>
        <p><strong>Zijn</strong> gebruik je bij:</p>
        <ol class="my-2 space-y-1.5 pl-5 list-decimal">
          <li><strong>Beweging met een richting / bestemming:</strong> gaan, komen, vertrekken, aankomen, lopen (naar), fietsen (naar), rijden (naar), vliegen (naar).</li>
          <li><strong>Verandering van toestand:</strong> worden, beginnen, stoppen, sterven, bevriezen, smelten, ontploffen, groeien, krimpen, veranderen.</li>
          <li><strong>Enkele andere werkwoorden:</strong> zijn, blijven, gebeuren, lukken, slagen, zakken (voor examen).</li>
        </ol>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">Hij <strong>is</strong> naar de stad <strong>gegaan</strong>.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">De trein <strong>is</strong> eindelijk <strong>aangekomen</strong>.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">Het ijs <strong>is</strong> helemaal <strong>gesmolten</strong>.</li>
        </ul>
        <p><span class="pas-op-highlight">⚠️ PAS OP</span> Bij beweging zonder richting gebruik je vaak <strong>hebben</strong>. Vergelijk: <em>Ik <strong>heb</strong> in het bos <strong>gewandeld</strong>.</em> (geen bestemming) vs. <em>Ik <strong>ben</strong> naar het bos <strong>gewandeld</strong>.</em> (wel bestemming).</p>
        <p>Sommige werkwoorden kunnen met beide, afhankelijk van de betekenis:</p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Werkwoord</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Hebben</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Zijn</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">lopen</td><td class="px-3 py-2 text-sm">Ik <strong>heb</strong> op straat <strong>gelopen</strong>. (geen richting)</td><td class="px-3 py-2 text-sm">Ik <strong>ben</strong> naar huis <strong>gelopen</strong>. (richting)</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">rijden</td><td class="px-3 py-2 text-sm">Zij <strong>heeft</strong> de auto <strong>gereden</strong>. (lijdend voorwerp)</td><td class="px-3 py-2 text-sm">Zij <strong>is</strong> naar Groningen <strong>gereden</strong>. (richting)</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">vergeten</td><td class="px-3 py-2 text-sm">Ik <strong>heb</strong> mijn sleutels <strong>vergeten</strong>. (iets niet bij me hebben)</td><td class="px-3 py-2 text-sm">Ik <strong>ben</strong> de naam <strong>vergeten</strong>. (iets uit mijn geheugen kwijt – beide mogen vaak)</td></tr>
            </tbody>
          </table>
        </div>
      `,
    },
    {
      title: "Het voltooid deelwoord – vorming en spelling 🏗️",
      body: `
        <p>Het voltooid deelwoord maak je op verschillende manieren, afhankelijk van het type werkwoord.</p>
        <h3 class="text-lg font-bold mt-4 mb-2">Zwakke werkwoorden: ge‑ + stam + d/t</h3>
        <p>De <strong>'t kofschip‑regel</strong> bepaalt of het voltooid deelwoord op <strong>‑d</strong> of <strong>‑t</strong> eindigt.</p>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">werken → ge<strong>werkt</strong> (k in ’t kofschip → t)</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">spelen → ge<strong>speeld</strong> (l niet in ’t kofschip → d)</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">leven → ge<strong>leefd</strong> (v/f‑wisseling, oorspronkelijke v → d)</li>
        </ul>
        <h3 class="text-lg font-bold mt-6 mb-2">Sterke werkwoorden: ge‑ + stam (met klinkerverandering) + en</h3>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">lopen → ge<strong>lopen</strong></li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">schrijven → ge<strong>schreven</strong></li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">blijven → ge<strong>bleven</strong></li>
        </ul>
        <h3 class="text-lg font-bold mt-6 mb-2">Onregelmatige werkwoorden</h3>
        <p>De belangrijkste onregelmatige voltooide deelwoorden:</p>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">zijn → ge<strong>weest</strong>, hebben → ge<strong>had</strong>, kunnen → ge<strong>kund</strong>, mogen → ge<strong>mogen</strong>, willen → ge<strong>wild</strong></li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">doen → ge<strong>daan</strong>, gaan → ge<strong>gaan</strong>, staan → ge<strong>staan</strong>, slaan → ge<strong>slagen</strong></li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">zien → ge<strong>zien</strong>, worden → ge<strong>worden</strong>, kopen → ge<strong>kocht</strong>, zoeken → ge<strong>zocht</strong></li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">brengen → ge<strong>bracht</strong>, denken → ge<strong>dacht</strong></li>
        </ul>
        <h3 class="text-lg font-bold mt-6 mb-2">Werkwoorden met voorvoegsel (be‑, ver‑, ont‑, her‑, ge‑)</h3>
        <p>Deze krijgen <strong>geen</strong> extra <strong>ge‑</strong> in het voltooid deelwoord.</p>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">betalen → <strong>betaald</strong>, vertellen → <strong>verteld</strong>, ontdekken → <strong>ontdekt</strong>, herkennen → <strong>herkend</strong>, gebruiken → <strong>gebruikt</strong></li>
        </ul>
        <h3 class="text-lg font-bold mt-6 mb-2">Scheidbare werkwoorden</h3>
        <p>Bij scheidbare werkwoorden komt <strong>‑ge‑</strong> tussen het voorvoegsel en de stam.</p>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">opbellen → op<strong>ge</strong>beld, aankomen → aan<strong>ge</strong>komen, meenemen → mee<strong>ge</strong>nomen</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">uitstappen → uit<strong>ge</strong>stapt, opruimen → op<strong>ge</strong>ruimd</li>
        </ul>
      `,
    },
    {
      title: "Plaatsing van het voltooid deelwoord in de zin 📍",
      body: `
        <h3 class="text-lg font-bold mt-4 mb-2">In de hoofdzin (mededelend)</h3>
        <p><strong>Onderwerp – persoonsvorm (hulpwerkwoord) – rest – voltooid deelwoord</strong></p>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">Ik <strong>heb</strong> gisteren een taart <strong>gebakken</strong>.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">Zij <strong>is</strong> vanmorgen naar de tandarts <strong>gegaan</strong>.</li>
        </ul>
        <p>Met inversie (ander zinsdeel voorop) blijft het voltooid deelwoord achteraan:</p>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">Gisteren <strong>heb</strong> ik een taart <strong>gebakken</strong>.</li>
        </ul>
        <h3 class="text-lg font-bold mt-6 mb-2">In de bijzin</h3>
        <p>In een bijzin verhuizen alle werkwoorden naar het einde. Het hulpwerkwoord staat meestal vóór het voltooid deelwoord.</p>
        <p><strong>Voegwoord – onderwerp – rest – hulpwerkwoord + voltooid deelwoord</strong></p>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">...omdat ik gisteren een taart <strong>heb gebakken</strong>.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">...dat zij vanmorgen naar de tandarts <strong>is gegaan</strong>.</li>
        </ul>
        <p><span class="pas-op-highlight">⚠️ PAS OP</span> In de bijzin mag het voltooid deelwoord soms voor het hulpwerkwoord staan (<em>...omdat ik een taart gebakken heb</em>), maar de volgorde hulpwerkwoord + voltooid deelwoord is gebruikelijker.</p>
      `,
    },
    {
      title: "Wanneer gebruik je de VTT en wanneer de OVT? 🕰️",
      body: `
        <p>De keuze tussen VTT en OVT (onvoltooid verleden tijd) is soms lastig. Hier zijn de vuistregels:</p>
        <h3 class="text-lg font-bold mt-4 mb-2">VTT (voltooid tegenwoordige tijd)</h3>
        <p>Gebruik de VTT voor:</p>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>Voltooide handelingen met resultaat nu:</strong> <em>Ik heb de afwas gedaan.</em> (de afwas is nu schoon)</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>Ervaringen:</strong> <em>Ik ben nog nooit in Japan geweest.</em></li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>Recente gebeurtenissen:</strong> <em>Hij heeft net gebeld.</em></li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">Met signaalwoorden als: <em>net, al, nog niet, pas, onlangs, ooit, nog nooit, sindsdien, tot nu toe.</em></li>
        </ul>
        <h3 class="text-lg font-bold mt-6 mb-2">OVT (onvoltooid verleden tijd)</h3>
        <p>Gebruik de OVT voor:</p>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>Verhalend verleden (zonder nadruk op resultaat nu):</strong> <em>Vroeger woonde ik in een dorp.</em></li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>Gewoontes in het verleden:</strong> <em>Elke zondag gingen we naar de kerk.</em></li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">Met signaalwoorden als: <em>gisteren, vorig jaar, in 2010, toen, vroeger, een uur geleden</em> (als de nadruk op het verleden ligt).</li>
        </ul>
        <p><span class="pas-op-highlight">⚠️ PAS OP</span> De grens is vaag. <em>Gisteren heb ik een boek gekocht</em> en <em>Gisteren kocht ik een boek</em> zijn allebei correct. De VTT benadrukt het resultaat, de OVT het moment. In het dagelijks taalgebruik wordt de VTT heel vaak gebruikt.</p>
      `,
    },
  ],
  rulesTable: [
    {
      rule: "Hebben voor de meeste werkwoorden",
      structure: "Gebruik **hebben** voor overgankelijke werkwoorden en werkwoorden zonder richting of toestandsverandering.",
      example: "Ik **heb** gewerkt, gezien, gegeten, gespeeld.",
      usage: "Ongeveer 80% van de werkwoorden gebruikt 'hebben'.",
    },
    {
      rule: "Zijn voor beweging met richting en toestandsverandering",
      structure: "Gebruik **zijn** bij werkwoorden die een beweging naar een bestemming uitdrukken of een verandering van toestand.",
      example: "Ik **ben** naar huis gelopen, gegaan, aangekomen, begonnen, overleden.",
      usage: "Zonder richting (bv. in het bos gewandeld) gebruik je 'hebben'.",
    },
    {
      rule: "Voltooid deelwoord: ge‑ + stam + d/t (zwak)",
      structure: "Zwakke werkwoorden: **ge‑ + stam + ‑d of ‑t** (volgens ’t kofschip). Let op v/f‑ en z/s‑wisseling.",
      example: "gewerkt, gespeeld, geleefd (van leven), gereisd (van reizen).",
      usage: "Bij stam op t/d: geen extra t/d (gezet, geleid).",
    },
    {
      rule: "Voltooid deelwoord: ge‑ + stam (klinkerverandering) + en (sterk)",
      structure: "Sterke werkwoorden veranderen van klinker en eindigen op **‑en**.",
      example: "gelopen, geschreven, gezien, gebleven.",
      usage: "Deze vormen moet je uit het hoofd leren; er is geen regel.",
    },
    {
      rule: "Voltooid deelwoord: geen ge‑ bij be‑, ver‑, ont‑, her‑, ge‑",
      structure: "Werkwoorden met deze voorvoegsels krijgen **geen** extra ge‑ in het voltooid deelwoord.",
      example: "betaald (niet gebetaald), verteld, ontdekt, herkend, gebruikt.",
      usage: "Het voorvoegsel vervangt de 'ge‑'.",
    },
    {
      rule: "Scheidbare werkwoorden: voorvoegsel + ge + stam",
      structure: "Bij scheidbare werkwoorden komt **‑ge‑** tussen het voorvoegsel en de stam.",
      example: "opgebeld, aangekomen, meegenomen, opgeruimd.",
      usage: "Het voltooid deelwoord is één woord.",
    },
  ],
  callouts: [
    { type: "remember", label: "Onthoud 1", text: "VTT = **hebben/zijn** + **voltooid deelwoord**." },
    { type: "remember", label: "Onthoud 2", text: "**Zijn** = beweging naar een doel, toestandsverandering, en een klein groepje uitzonderingen. De rest = **hebben**." },
    { type: "remember", label: "Onthoud 3", text: "Voltooid deelwoord: zwak = ge+d/t, sterk = ge+en, onregelmatig = apart, voorvoegsel = geen extra ge‑." },
    { type: "remember", label: "Onthoud 4", text: "Plaatsing: hoofdzin achteraan; bijzin samen met hulpwerkwoord achteraan (hulpww + voltooid deelwoord)." },
  ],
  commonMistakes: [
    {
      incorrect: "Ik ben de afwas gedaan.",
      correct: "Ik heb de afwas gedaan.",
      explanation: "Doen met een lijdend voorwerp → hebben.",
    },
    {
      incorrect: "Zij heeft naar Amsterdam gegaan.",
      correct: "Zij is naar Amsterdam gegaan.",
      explanation: "Gaan is altijd met 'zijn'.",
    },
    {
      incorrect: "Ik heb gisteren naar de film gegaan.",
      correct: "Ik ben gisteren naar de film gegaan.",
      explanation: "Beweging met richting → zijn.",
    },
    {
      incorrect: "...omdat ik heb gebakken een taart.",
      correct: "...omdat ik een taart heb gebakken.",
      explanation: "In bijzin alles voor de werkwoorden.",
    },
    {
      incorrect: "Ik ben het niet gehoord.",
      correct: "Ik heb het niet gehoord.",
      explanation: "Horen met 'hebben'.",
    },
    {
      incorrect: "Hij is in het park gewandeld. (zonder bestemming)",
      correct: "Hij heeft in het park gewandeld.",
      explanation: "Zonder richting → hebben.",
    },
  ],
  review: [
    "VTT = **hebben / zijn** + **voltooid deelwoord**.",
    "**Hebben:** meeste werkwoorden, overgankelijk, geen richting.",
    "**Zijn:** beweging met richting, toestandsverandering, en een klein groepje (zijn, blijven, gebeuren, lukken, slagen).",
    "Voltooid deelwoord: zwak (ge+d/t volgens ’t kofschip), sterk (ge+en), onregelmatig (apart), voorvoegsels (geen extra ge‑), scheidbaar (voorvoegsel‑ge‑stam).",
    "Plaatsing: hoofdzin achteraan; bijzin samen met hulpwerkwoord achteraan.",
    "VTT vs. OVT: VTT voor resultaat/ervaring, OVT voor verhalend verleden. Signaalwoorden helpen, maar zijn geen absolute wet.",
  ],
  qa: [
    {
      question: "Leg uit waarom je zegt 'Ik ben naar de winkel gelopen' en niet 'Ik heb naar de winkel gelopen'.",
      answer: "Het werkwoord *lopen* wordt hier met een **bestemming** (naar de winkel) gebruikt. Beweging met een richting vraagt om het hulpwerkwoord **zijn**. Zonder bestemming, bijvoorbeeld *Ik heb in het bos gelopen*, gebruik je *hebben*.",
    },
    {
      question: "Vul het juiste hulpwerkwoord in: “Hij ___ gisteren in de tuin gewerkt.” Kies uit 'heeft' of 'is' en verklaar je keuze.",
      answer: "**Heeft.** *Werken* is een werkwoord dat altijd *hebben* gebruikt. Er is geen beweging of toestandsverandering.",
    },
    {
      question: "Geef het voltooid deelwoord van **vergeten** en leg uit waarom het geen 'ge‑' aan het begin heeft.",
      answer: "Het voltooid deelwoord is **vergeten**. Werkwoorden met het voorvoegsel **ver‑** krijgen nooit *ge‑* in het voltooid deelwoord. De vorm is gelijk aan de infinitief, maar het is toch een voltooid deelwoord.",
    },
    {
      question: "Wat is het verschil in betekenis tussen 'Ik heb het boek gelezen' en 'Ik las het boek'? Gebruik de begrippen VTT en OVT.",
      answer: "**Ik heb het boek gelezen** (VTT) legt nadruk op het resultaat: het boek is nu uit, ik ken het verhaal. **Ik las het boek** (OVT) beschrijft een handeling in het verleden, zonder directe nadruk op het resultaat nu. De VTT is gebruikelijker in dagelijkse gesprekken.",
    },
    {
      question: "Corrigeer de fout in deze bijzin: “...omdat ik heb gisteren een brief geschreven.”",
      answer: "**...omdat ik gisteren een brief heb geschreven.** In een bijzin moeten alle werkwoorden aan het einde staan. Het hulpwerkwoord *heb* en het voltooid deelwoord *geschreven* komen samen achteraan, na *gisteren* en *een brief*.",
    },
    {
      question: "Welk hulpwerkwoord hoort bij **beginnen**? Geef een voorbeeldzin in de VTT.",
      answer: "**Zijn.** *Beginnen* drukt een verandering van toestand uit. Voorbeeld: *De film is om acht uur begonnen.*",
    },
    {
      question: "Noem drie signaalwoorden die vaak met de VTT worden gebruikt, en drie die vaak met de OVT worden gebruikt.",
      answer: "**VTT:** *net, al, nog nooit, onlangs, tot nu toe.* **OVT:** *gisteren, vorig jaar, vroeger, in 2010.* De grens is niet absoluut; *gisteren* kan ook met VTT, maar de OVT is bij een specifiek afgesloten tijdstip vaak natuurlijker.",
    },
  ],
};