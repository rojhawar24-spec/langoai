import type { GrammarLesson } from "../../types";

export const kaleInfinitief: GrammarLesson = {
  id: "nl-kaleinfinitief-1",
  title: "De Kale Infinitief: Wanneer géén 'te'? – Ik ga slapen, Hij kan zwemmen",
  level: 2,
  topic: "Kale infinitief", // [G] Grammatica
  body: "Meester de kale infinitief: wanneer gebruik je wél en wanneer géén 'te' voor een infinitief? Van modale werkwoorden tot waarneming en vaste uitdrukkingen.",
  overview:
    "De **kale infinitief** is het hele werkwoord zónder het woordje **te**. In deze **allesomvattende les** leer je stap voor stap wanneer je *geen* 'te' mag gebruiken: bij **modale werkwoorden** (kunnen, moeten, mogen, willen, zullen), bij **gaan, komen, laten, blijven**, en bij **waarnemingswerkwoorden** (horen, zien, voelen). Je ontdekt ook de uitzonderingen: wanneer *te* optioneel is (durven) en wanneer *te* juist verplicht blijft (hoeven, proberen, vergeten). Met kristalheldere tabellen, 80+ voorbeeldzinnen, visuele PAS OP‑signalen en 7 doordachte oefenvragen beheers jij de kale infinitief voortaan 100% foutloos.",
  anchorSectionId: "wat",
  exercises: [],
  timeExpressionsLabel: "Kale infinitief in één oogopslag: 5 situaties zonder 'te' 🎯",
  timeExpressions: {
    header: "Situatie | Voorbeeld | Kernregel",
    rows: [
      ["🔑 Modale werkwoorden", "Hij **kan zwemmen**.", "Nooit 'te' na kunnen/moeten/mogen/willen/zullen"],
      ["🚶 Gaan, komen, laten, blijven", "We **gaan eten**.", "Beweging/toestemming/continuïteit = kale infinitief"],
      ["👁️ Waarneming: horen/zien/voelen", "Ik **hoor** hem **zingen**.", "Zintuiglijke waarneming = kale infinitief"],
      ["🔄 Durven (informeel)", "Hij **durft springen**.", "Formeel: mét te • Informeel: zonder te"],
      ["📌 Vaste uitdrukkingen", "**Laat maar zitten**.", "Versteende combinaties = kale infinitief"],
    ],
  },
  details: [
    {
      title: "Wat is de kale infinitief? 🎯 De basis in 3 zinnen",
      body: `
        <p>De <strong>kale infinitief</strong> is de 'naakte' vorm van een werkwoord: <em>slapen, werken, lezen</em> – zonder het voorvoegsel <strong>te</strong>.</p>
        <div class="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-lg p-4 my-4">
          <p class="font-semibold text-emerald-800 dark:text-emerald-200 mb-2">✅ Drie kernfeiten:</p>
          <ol class="list-decimal list-inside space-y-1 text-slate-700 dark:text-slate-300">
            <li>Na <strong>modale werkwoorden</strong> <em>mag nooit</em> 'te' staan.</li>
            <li>Na <strong>gaan/komen/laten/blijven</strong> en <strong>waarnemingswerkwoorden</strong> is 'te' <em>verboden</em>.</li>
            <li>Bij <strong>durven</strong> mag je kiezen: formeel mét te, spreektaal vaak zonder.</li>
          </ol>
        </div>
        <p><span class="font-bold text-indigo-700 dark:text-indigo-300">Waarom is dit belangrijk?</span> Fouten met 'te' vallen direct op. Wie de kale infinitief beheerst, schrijft en spreekt natuurlijker, vloeiender en foutloos Nederlands.</p>
      `,
    },
    {
      title: "1. Modale werkwoorden: de 'Grote Vijf' zonder 'te' 🔑",
      body: `
        <p>De vijf modale hulpwerkwoorden vormen de basis van de kale infinitief. Na deze werkwoorden <strong>volgt altijd de kale infinitief</strong> – <em>te</em> is hier grammaticaal onmogelijk.</p>
        
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-emerald-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Modaal werkwoord</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Betekenis</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Voorbeeldzin ✅</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Fout met 'te' ❌</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold"><strong>kunnen</strong></td>
                <td class="px-4 py-3 text-sm">mogelijkheid / vaardigheid</td>
                <td class="px-4 py-3 text-sm">Hij <strong>kan</strong> uitstekend <strong>zwemmen</strong>.</td>
                <td class="px-4 py-3 text-sm text-rose-600"><em>kan te zwemmen</em></td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold"><strong>moeten</strong></td>
                <td class="px-4 py-3 text-sm">verplichting / noodzaak</td>
                <td class="px-4 py-3 text-sm">Je <strong>moet</strong> nu <strong>luisteren</strong>.</td>
                <td class="px-4 py-3 text-sm text-rose-600"><em>moet te luisteren</em></td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold"><strong>mogen</strong></td>
                <td class="px-4 py-3 text-sm">toestemming / mogelijkheid</td>
                <td class="px-4 py-3 text-sm"><strong>Mag</strong> ik even <strong>storen</strong>?</td>
                <td class="px-4 py-3 text-sm text-rose-600"><em>mag te storen</em></td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold"><strong>willen</strong></td>
                <td class="px-4 py-3 text-sm">verlangen / intentie</td>
                <td class="px-4 py-3 text-sm">Zij <strong>wil</strong> vanavond <strong>koken</strong>.</td>
                <td class="px-4 py-3 text-sm text-rose-600"><em>wil te koken</em></td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50">
                <td class="px-4 py-3 text-sm font-semibold"><strong>zullen</strong></td>
                <td class="px-4 py-3 text-sm">toekomst / belofte</td>
                <td class="px-4 py-3 text-sm">We <strong>zullen</strong> morgen <strong>vertrekken</strong>.</td>
                <td class="px-4 py-3 text-sm text-rose-600"><em>zullen te vertrekken</em></td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div class="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-400 p-4 my-4">
          <p class="font-semibold text-amber-800 dark:text-amber-200">🧠 Ezelsbruggetje:</p>
          <p class="text-slate-700 dark:text-slate-300 mt-1"><strong>"Komt M'n Moeder Wat Eten?"</strong> → <em>Kunnen, Mogen, Moeten, Willen, Zullen</em> = nooit met <strong>te</strong>!</p>
        </div>
      `,
    },
    {
      title: "2. Beweging, toestemming & continuïteit: gaan, komen, laten, blijven ⚡",
      body: `
        <p>Vier veelgebruikte werkwoorden die een <strong>actie in gang zetten, toestaan of voortzetten</strong>, vragen ook om de kale infinitief.</p>
        
        <div class="grid md:grid-cols-2 gap-4 my-4">
          <div class="bg-white dark:bg-slate-800/50 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
            <h4 class="font-bold text-emerald-700 dark:text-emerald-300 mb-2">🚶 Gaan + infinitief</h4>
            <p class="text-sm text-slate-600 dark:text-slate-400 mb-2">Drukt een plan, intentie of beweging uit.</p>
            <ul class="space-y-1 text-sm">
              <li class="flex items-start"><span class="text-emerald-500 mr-2">✅</span><span>Ik <strong>ga</strong> nu <strong>slapen</strong>.</span></li>
              <li class="flex items-start"><span class="text-emerald-500 mr-2">✅</span><span>We <strong>gaan</strong> morgen <strong>reizen</strong>.</span></li>
              <li class="flex items-start"><span class="text-rose-500 mr-2">❌</span><span class="text-rose-600"><em>We gaan te reizen.</em></span></li>
            </ul>
          </div>
          
          <div class="bg-white dark:bg-slate-800/50 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
            <h4 class="font-bold text-emerald-700 dark:text-emerald-300 mb-2">👋 Komen + infinitief</h4>
            <p class="text-sm text-slate-600 dark:text-slate-400 mb-2">Geeft een bezoek of hulpactie aan.</p>
            <ul class="space-y-1 text-sm">
              <li class="flex items-start"><span class="text-emerald-500 mr-2">✅</span><span>Kom je morgen <strong>helpen</strong>?</span></li>
              <li class="flex items-start"><span class="text-emerald-500 mr-2">✅</span><span>Zij <strong>komt</strong> vaak <strong>eten</strong>.</span></li>
              <li class="flex items-start"><span class="text-rose-500 mr-2">❌</span><span class="text-rose-600"><em>Zij komt te eten.</em></span></li>
            </ul>
          </div>
          
          <div class="bg-white dark:bg-slate-800/50 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
            <h4 class="font-bold text-emerald-700 dark:text-emerald-300 mb-2">🤝 Laten + infinitief</h4>
            <p class="text-sm text-slate-600 dark:text-slate-400 mb-2">Betekenis: toestaan, veroorzaken, niet tegenhouden.</p>
            <ul class="space-y-1 text-sm">
              <li class="flex items-start"><span class="text-emerald-500 mr-2">✅</span><span>Laat hem maar <strong>praten</strong>.</span></li>
              <li class="flex items-start"><span class="text-emerald-500 mr-2">✅</span><span>De leraar <strong>laat</strong> ons <strong>oefenen</strong>.</span></li>
              <li class="flex items-start"><span class="text-rose-500 mr-2">❌</span><span class="text-rose-600"><em>Laat hem te praten.</em></span></li>
            </ul>
          </div>
          
          <div class="bg-white dark:bg-slate-800/50 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
            <h4 class="font-bold text-emerald-700 dark:text-emerald-300 mb-2">🔄 Blijven + infinitief</h4>
            <p class="text-sm text-slate-600 dark:text-slate-400 mb-2">Drukt voortzetting van een handeling uit.</p>
            <ul class="space-y-1 text-sm">
              <li class="flex items-start"><span class="text-emerald-500 mr-2">✅</span><span>Blijf nog even <strong>zitten</strong>.</span></li>
              <li class="flex items-start"><span class="text-emerald-500 mr-2">✅</span><span>Hij <strong>blijft</strong> maar <strong>vragen</strong>.</span></li>
              <li class="flex items-start"><span class="text-rose-500 mr-2">❌</span><span class="text-rose-600"><em>Blijf te zitten.</em></span></li>
            </ul>
          </div>
        </div>
        
        <div class="bg-rose-50 dark:bg-rose-900/20 border border-rose-200 dark:border-rose-800 rounded-lg p-4 my-4">
          <p class="font-bold text-rose-700 dark:text-rose-300 mb-1">⚠️ PAS OP: 'Komen' is een valkuil!</p>
          <p class="text-sm text-slate-700 dark:text-slate-300">
            <em>Komen</em> + infinitief = kale infinitief: <strong>Kom helpen</strong> ✅<br>
            <em>Komen te</em> + infinitief = iets overkomt je (toeval/ongeluk): <strong>Hij kwam te vallen</strong> ✅<br>
            → Dit zijn twee <strong>verschillende constructies</strong> met verschillende betekenissen!
          </p>
        </div>
      `,
    },
    {
      title: "3. Waarneming zonder 'te': horen, zien, voelen 👁️",
      body: `
        <p>Wanneer je met je zintuigen waarneemt dat iemand anders iets <strong>doet</strong>, gebruik je de kale infinitief. Dit geldt voor <strong>horen</strong>, <strong>zien</strong> en <strong>voelen</strong>.</p>
        
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-indigo-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Werkwoord</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Type waarneming</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Voorbeeld ✅</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Fout met 'te' ❌</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold"><strong>horen</strong></td>
                <td class="px-4 py-3 text-sm">auditief (met oren)</td>
                <td class="px-4 py-3 text-sm">Ik <strong>hoor</strong> de vogels <strong>fluiten</strong>.</td>
                <td class="px-4 py-3 text-sm text-rose-600"><em>hoor te fluiten</em></td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold"><strong>zien</strong></td>
                <td class="px-4 py-3 text-sm">visueel (met ogen)</td>
                <td class="px-4 py-3 text-sm">Wij <strong>zagen</strong> de zon <strong>ondergaan</strong>.</td>
                <td class="px-4 py-3 text-sm text-rose-600"><em>zagen te ondergaan</em></td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50">
                <td class="px-4 py-3 text-sm font-semibold"><strong>voelen</strong></td>
                <td class="px-4 py-3 text-sm">tactiel / emotioneel</td>
                <td class="px-4 py-3 text-sm">Zij <strong>voelde</strong> de grond <strong>trillen</strong>.</td>
                <td class="px-4 py-3 text-sm text-rose-600"><em>voelde te trillen</em></td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div class="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-400 p-4 my-4">
          <p class="font-semibold text-amber-800 dark:text-amber-200 mb-2">🔍 Cruciaal onderscheid: waarneming vs. verplichting</p>
          <p class="text-sm text-slate-700 dark:text-slate-300">
            Het werkwoord <strong>horen</strong> heeft twee gezichten:
          </p>
          <ul class="mt-2 space-y-2 text-sm">
            <li class="flex items-start">
              <span class="bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200 text-xs font-bold px-2 py-1 rounded mr-2 mt-0.5">WAARNEMING</span>
              <span><strong>Ik hoor hem zingen.</strong> → Ik neem waar dat hij zingt. <em>Kale infinitief, géén 'te'.</em></span>
            </li>
            <li class="flex items-start">
              <span class="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 text-xs font-bold px-2 py-1 rounded mr-2 mt-0.5">VERPLICHTING</span>
              <span><strong>Hij hoort te luisteren.</strong> → Hij moet luisteren. <em>'Horen te' = moeten → wél mét 'te'.</em></span>
            </li>
          </ul>
        </div>
      `,
    },
    {
      title: "4. De grijze zone: 'durven' met of zonder 'te' 🔄",
      body: `
        <p><strong>Durven</strong> is uniek: het mag zowel mét als zónder <em>te</em>. De keuze hangt af van register (formeel vs. informeel) en regio.</p>
        
        <div class="grid md:grid-cols-2 gap-4 my-4">
          <div class="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-lg p-4">
            <h4 class="font-bold text-emerald-700 dark:text-emerald-300 mb-2">✅ Formeel / Schrijftaal</h4>
            <p class="text-sm text-slate-700 dark:text-slate-300 mb-2">In officiële teksten, brieven en verzorgde taal:</p>
            <ul class="space-y-1 text-sm">
              <li>• Hij <strong>durft niet te springen</strong>.</li>
              <li>• Zij <strong>durft het wel te vragen</strong>.</li>
              <li>• <em>Voorkeur van de Taalunie: mét 'te'.</em></li>
            </ul>
          </div>
          
          <div class="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 rounded-lg p-4">
            <h4 class="font-bold text-indigo-700 dark:text-indigo-300 mb-2">✅ Informeel / Spreektaal</h4>
            <p class="text-sm text-slate-700 dark:text-slate-300 mb-2">In gesprekken, appjes, sociale media:</p>
            <ul class="space-y-1 text-sm">
              <li>• Hij <strong>durft niet springen</strong>.</li>
              <li>• Zij <strong>durft het wel vragen</strong>.</li>
              <li>• <em>Wijdverbreid en algemeen aanvaard.</em></li>
            </ul>
          </div>
        </div>
        
        <div class="bg-slate-100 dark:bg-slate-800 rounded-lg p-4 my-4">
          <p class="font-semibold mb-2">📊 Gebruiksadvies in de praktijk:</p>
          <table class="w-full text-sm">
            <tr class="border-b border-slate-200 dark:border-slate-700">
              <td class="py-2 pr-4 font-medium">Sollicitatiebrief / verslag</td>
              <td class="py-2"><strong>Mét 'te'</strong> → <em>Ik durf het aan te pakken.</em></td>
            </tr>
            <tr class="border-b border-slate-200 dark:border-slate-700">
              <td class="py-2 pr-4 font-medium">Gesprek met vrienden</td>
              <td class="py-2"><strong>Zonder 'te'</strong> → <em>Ik durf het wel aanpakken.</em></td>
            </tr>
            <tr>
              <td class="py-2 pr-4 font-medium">Twijfel je?</td>
              <td class="py-2"><strong>Kies voor 'te'</strong> → altijd correct, nooit fout.</td>
            </tr>
          </table>
        </div>
      `,
    },
    {
      title: "5. Wanneer 'te' WEL verplicht blijft: de uitzonderingen ❌",
      body: `
        <p>Niet elk werkwoord mag de infinitief 'kalen'. Een belangrijke groep vereist juist <strong>altijd</strong> <em>te + infinitief</em>. Deze moet je uit je hoofd leren.</p>
        
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-rose-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Werkwoord</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Correct ✅</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Fout ❌</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Waarom?</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold"><strong>hoeven</strong></td>
                <td class="px-4 py-3 text-sm">Je <strong>hoeft</strong> niet <strong>te komen</strong>.</td>
                <td class="px-4 py-3 text-sm text-rose-600"><em>hoeft niet komen</em></td>
                <td class="px-4 py-3 text-sm text-xs">Vereist altijd 'te'</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold"><strong>proberen</strong></td>
                <td class="px-4 py-3 text-sm">Ik <strong>probeer</strong> <strong>te slapen</strong>.</td>
                <td class="px-4 py-3 text-sm text-rose-600"><em>probeer slapen</em></td>
                <td class="px-4 py-3 text-sm text-xs">Klinkt onnatuurlijk zonder 'te'</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold"><strong>vergeten</strong></td>
                <td class="px-4 py-3 text-sm">Hij <strong>vergat</strong> <strong>te bellen</strong>.</td>
                <td class="px-4 py-3 text-sm text-rose-600"><em>vergat bellen</em></td>
                <td class="px-4 py-3 text-sm text-xs">Standaardconstructie met 'te'</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold"><strong>lijken / schijnen</strong></td>
                <td class="px-4 py-3 text-sm">Het <strong>lijkt</strong> <strong>te werken</strong>.</td>
                <td class="px-4 py-3 text-sm text-rose-600"><em>lijkt werken</em></td>
                <td class="px-4 py-3 text-sm text-xs">Vereist 'te' voor volledigheid</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50">
                <td class="px-4 py-3 text-sm font-semibold"><strong>beloven / besluiten</strong></td>
                <td class="px-4 py-3 text-sm">Zij <strong>beloofde</strong> <strong>te komen</strong>.</td>
                <td class="px-4 py-3 text-sm text-rose-600"><em>beloofde komen</em></td>
                <td class="px-4 py-3 text-sm text-xs">Formele werkwoorden met 'te'</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div class="bg-rose-50 dark:bg-rose-900/20 border border-rose-200 dark:border-rose-800 rounded-lg p-4 my-4">
          <p class="font-bold text-rose-700 dark:text-rose-300">🚨 Onthoud deze regel:</p>
          <p class="text-sm text-slate-700 dark:text-slate-300 mt-1">
            <strong>Modaal / gaan / komen / laten / blijven / waarnemen</strong> → kale infinitief ✅<br>
            <strong>Alles anders (hoeven, proberen, vergeten, etc.)</strong> → altijd <em>te + infinitief</em> ✅
          </p>
        </div>
      `,
    },
    {
      title: "6. Vaste uitdrukkingen met kale infinitief 📌",
      body: `
        <p>Sommige combinaties zijn zo vaak gebruikt dat ze 'versteend' zijn: de kale infinitief is hier de enige juiste vorm.</p>
        
        <div class="grid md:grid-cols-3 gap-3 my-4">
          <div class="bg-white dark:bg-slate-800/50 rounded-lg p-3 border border-slate-200 dark:border-slate-700">
            <p class="font-semibold text-emerald-700 dark:text-emerald-300 text-sm mb-1">🛏️ Ik ga slapen.</p>
            <p class="text-xs text-slate-600 dark:text-slate-400">= Ik ga naar bed.</p>
          </div>
          <div class="bg-white dark:bg-slate-800/50 rounded-lg p-3 border border-slate-200 dark:border-slate-700">
            <p class="font-semibold text-emerald-700 dark:text-emerald-300 text-sm mb-1">✋ Laat maar zitten.</p>
            <p class="text-xs text-slate-600 dark:text-slate-400">= Doe geen moeite.</p>
          </div>
          <div class="bg-white dark:bg-slate-800/50 rounded-lg p-3 border border-slate-200 dark:border-slate-700">
            <p class="font-semibold text-emerald-700 dark:text-emerald-300 text-sm mb-1">🚶 Blijf staan!</p>
            <p class="text-xs text-slate-600 dark:text-slate-400">= Stop, beweeg niet.</p>
          </div>
          <div class="bg-white dark:bg-slate-800/50 rounded-lg p-3 border border-slate-200 dark:border-slate-700">
            <p class="font-semibold text-emerald-700 dark:text-emerald-300 text-sm mb-1">🚪 Kom binnen!</p>
            <p class="text-xs text-slate-600 dark:text-slate-400">= Treed naar binnen.</p>
          </div>
          <div class="bg-white dark:bg-slate-800/50 rounded-lg p-3 border border-slate-200 dark:border-slate-700">
            <p class="font-semibold text-emerald-700 dark:text-emerald-300 text-sm mb-1">💭 Dat doet me denken aan...</p>
            <p class="text-xs text-slate-600 dark:text-slate-400">= Dat herinnert me aan...</p>
          </div>
          <div class="bg-white dark:bg-slate-800/50 rounded-lg p-3 border border-slate-200 dark:border-slate-700">
            <p class="font-semibold text-emerald-700 dark:text-emerald-300 text-sm mb-1">🎯 Hij laat het er niet bij zitten.</p>
            <p class="text-xs text-slate-600 dark:text-slate-400">= Hij geeft niet op.</p>
          </div>
        </div>
        
        <p class="text-sm text-slate-600 dark:text-slate-400 italic">
          💡 Tip: Leer deze uitdrukkingen als vaste 'chunks'. Probeer er geen <em>te</em> in te stoppen – dat klinkt direct onnatuurlijk.
        </p>
      `,
    },
    {
      title: "7. Woordvolgorde: waar staat de kale infinitief? 📍",
      body: `
        <p>De positie van de infinitief hangt af van het type zin. Hier de twee hoofdpatronen:</p>
        
        <div class="grid md:grid-cols-2 gap-4 my-4">
          <div class="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 rounded-lg p-4">
            <h4 class="font-bold text-indigo-700 dark:text-indigo-300 mb-2">📝 Hoofdzin (SVO)</h4>
            <p class="text-sm text-slate-700 dark:text-slate-300 mb-2">Werkwoord op plek 2, infinitief <strong>achteraan</strong>:</p>
            <ul class="space-y-1 text-sm">
              <li>• Hij <strong>kan</strong> uitstekend <strong>zwemmen</strong>.</li>
              <li>• We <strong>gaan</strong> morgen <strong>reizen</strong>.</li>
              <li>• Ik <strong>hoor</strong> de regen <strong>tikken</strong>.</li>
            </ul>
          </div>
          
          <div class="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-lg p-4">
            <h4 class="font-bold text-emerald-700 dark:text-emerald-300 mb-2">📝 Bijzin (met voegwoord)</h4>
            <p class="text-sm text-slate-700 dark:text-slate-300 mb-2">Alle werkwoorden <strong>achteraan</strong>, infinitief laatste:</p>
            <ul class="space-y-1 text-sm">
              <li>• ...omdat hij uitstekend <strong>kan zwemmen</strong>.</li>
              <li>• ...terwijl we morgen <strong>gaan reizen</strong>.</li>
              <li>• ...toen ik de regen <strong>hoorde tikken</strong>.</li>
            </ul>
          </div>
        </div>
        
        <div class="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-400 p-4 my-4">
          <p class="font-semibold text-amber-800 dark:text-amber-200">🔍 Scheidbare werkwoorden?</p>
          <p class="text-sm text-slate-700 dark:text-slate-300 mt-1">
            Bij de kale infinitief blijft het scheidbare werkwoord <strong>aan elkaar</strong>:<br>
            ✅ Hij <strong>komt</strong> morgen <strong>helpen</strong>. (niet: *kom helpen*)<br>
            ✅ Ik <strong>laat</strong> hem <strong>opbellen</strong>. (niet: *op bellen*)
          </p>
        </div>
      `,
    },
  ],
  rulesTable: [
    {
      rule: "Modale werkwoorden + kale infinitief",
      structure: "Na **kunnen, moeten, mogen, willen, zullen** volgt **altijd** de kale infinitief. *Te* is grammaticaal onmogelijk.",
      example: "Hij **kan zwemmen**. • Je **moet luisteren**. • Zij **wil koken**.",
      usage: "Gebruik deze regel als ankerpunt: als je een modaal werkwoord ziet, weet je direct: géén 'te'.",
    },
    {
      rule: "Gaan/komen/laten/blijven + kale infinitief",
      structure: "Deze vier werkwoorden van actie, toestemming of continuïteit vereisen de kale infinitief.",
      example: "We **gaan eten**. • Kom je **helpen**? • Laat hem **praten**. • Blijf **zitten**.",
      usage: "Ezelsbruggetje: 'GKL-B' = Gaan, Komen, Laten, Blijven → Geen 'te'!",
    },
    {
      rule: "Waarneming (horen/zien/voelen) + kale infinitief",
      structure: "Bij zintuiglijke waarneming van een handeling: kale infinitief. Let op: *horen te* = verplichting → wél mét 'te'.",
      example: "Ik **hoor** hem **zingen** (waarneming). • Hij **hoort te komen** (verplichting).",
      usage: "Vraag je af: 'Neem ik iets waar?' → kale infinitief. 'Is het een plicht?' → mét 'te'.",
    },
    {
      rule: "Durven: flexibel gebruik",
      structure: "**Durven** mag mét of zónder 'te'. Formeel: mét te. Informeel: zonder te. Beide zijn correct.",
      example: "Hij **durft te springen** (formeel). • Hij **durft springen** (informeel).",
      usage: "Twijfel je? Kies voor 'te' → altijd veilig. In spreektaal mag je gerust 'durven + kale infinitief' gebruiken.",
    },
    {
      rule: "Hoeven/proberen/vergeten + te verplicht",
      structure: "Deze werkwoorden vereisen **altijd** *te + infinitief*. Kale infinitief is ongrammaticaal.",
      example: "Je **hoeft niet te komen**. • Ik **probeer te slapen**. • Hij **vergat te bellen**.",
      usage: "Leer deze als 'te-groep': hoeven, proberen, vergeten, lijken, schijnen, beloven, besluiten, weigeren.",
    },
    {
      rule: "Vaste uitdrukkingen = kale infinitief",
      structure: "Versteende combinaties zoals *Ik ga slapen*, *Laat maar zitten* gebruiken de kale infinitief als vaste vorm.",
      example: "**Ik ga slapen**. • **Laat maar zitten**. • **Dat doet me denken aan...**",
      usage: "Behandel deze als 'chunks': leer ze uit je hoofd, zonder 'te' toe te voegen.",
    },
  ],
  callouts: [
    { type: "remember", label: "🔑 Gouden regel 1", text: "**Modale werkwoorden** (kunnen, moeten, mogen, willen, zullen) → **nooit 'te'**, altijd kale infinitief." },
    { type: "remember", label: "🚶 Gouden regel 2", text: "**Gaan, komen, laten, blijven** → **altijd kale infinitief**. *Te* is hier verboden." },
    { type: "remember", label: "👁️ Gouden regel 3", text: "**Horen/zien/voelen** bij waarneming → kale infinitief. *Horen te* = moeten → wél mét 'te'." },
    { type: "remember", label: "🔄 Gouden regel 4", text: "**Durven** = flexibel: formeel mét 'te', informeel zonder. Beide correct – kies op basis van context." },
    { type: "remember", label: "❌ Gouden regel 5", text: "**Hoeven, proberen, vergeten, lijken, schijnen** → **altijd mét 'te'**. Kale infinitief is fout." },
    { type: "tip", label: "💡 Pro-tip", text: "Twijfel je over een werkwoord? Vraag: 'Is het modaal / gaan-komen-laten-blijven / waarneming?' → zo ja: kale infinitief. Zo nee: waarschijnlijk mét 'te'." },
  ],
  commonMistakes: [
    { 
      incorrect: "Hij kan te zwemmen.", 
      correct: "Hij kan zwemmen.", 
      explanation: "Modale werkwoorden (kunnen) krijgen nooit 'te'. De infinitief staat 'kaal'." 
    },
    { 
      incorrect: "We gaan te wandelen.", 
      correct: "We gaan wandelen.", 
      explanation: "Gaan + infinitief = altijd zonder 'te'. Dit is een vaste constructie voor plannen/actie." 
    },
    { 
      incorrect: "Ik kom te helpen.", 
      correct: "Ik kom helpen.", 
      explanation: "Komen + infinitief (hulp aanbieden) = kale infinitief. *Kom te* + infinitief betekent iets anders (toeval/ongeluk)." 
    },
    { 
      incorrect: "Laat hem te slapen.", 
      correct: "Laat hem slapen.", 
      explanation: "Laten + infinitief = toestemming/veroorzaken → altijd kale infinitief, nooit met 'te'." 
    },
    { 
      incorrect: "Je hoeft niet betalen.", 
      correct: "Je hoeft niet te betalen.", 
      explanation: "Hoeven vereist altijd 'te + infinitief'. Dit is een uitzondering op de kale-infinitief-regel." 
    },
    { 
      incorrect: "Ik hoor hem te zingen.", 
      correct: "Ik hoor hem zingen.", 
      explanation: "Waarneming met horen/zien/voelen = kale infinitief. *Horen te* betekent 'moeten' en is een andere constructie." 
    },
  ],
  review: [
    "✅ **Kale infinitief** na modale werkwoorden: kunnen, moeten, mogen, willen, zullen.",
    "✅ **Kale infinitief** na gaan, komen, laten, blijven (actie/toestemming/continuïteit).",
    "✅ **Kale infinitief** na horen, zien, voelen bij zintuiglijke waarneming.",
    "🔄 **Durven** = uitzondering: mag mét of zonder 'te' (formeel: mét, informeel: zonder).",
    "❌ **Te verplicht** na hoeven, proberen, vergeten, lijken, schijnen, beloven, besluiten.",
    "❌ **Te verplicht** na bijvoeglijke naamwoorden + infinitief: *moeilijk te doen, leuk om te lezen*.",
    "❌ **Te verplicht** na voorzetsels: *om te, zonder te, door te, in plaats van te*.",
    "📌 **Vaste uitdrukkingen** zoals *Ik ga slapen*, *Laat maar zitten* = kale infinitief als vaste chunk.",
    "🔍 **Let op**: *horen te* = verplichting (mét 'te') vs. *horen* + waarneming (zonder 'te').",
    "📍 **Woordvolgorde**: in hoofdzin infinitief achteraan; in bijzin alle werkwoorden achteraan.",
  ],
  qa: [
    {
      question: "Waarom is 'Ik moet te werken' fout?",
      answer: "Omdat moeten een modaal werkwoord is. Na modale werkwoorden (kunnen, moeten, mogen, willen, zullen) staat altijd de kale infinitief – zonder te. Correct: Ik moet werken."
    },
    {
      question: "Wat is het verschil tussen 'Ik hoor hem zingen' en 'Hij hoort te komen'?",
      answer: "Ik hoor hem zingen = waarneming: ik neem met mijn oren waar dat hij zingt, dus kale infinitief zonder te. Hij hoort te komen = verplichting: horen te betekent moeten, dus hier is te verplicht. Kortom: waarneming = zonder te; plicht = met te."
    },
    {
      question: "Verbeter: 'We gaan te wandelen in het bos.'",
      answer: "Correct: We gaan wandelen in het bos. Gaan + infinitief drukt een plan of actie uit en vereist de kale infinitief. Te is hier verboden. Deze regel geldt ook voor komen, laten, blijven."
    },
    {
      question: "Is 'Hij durft niet springen' correct?",
      answer: "Ja, deze zin is correct, vooral in de spreektaal. Durven mag zowel met als zonder te. Formeel: Hij durft niet te springen. Informeel: Hij durft niet springen. Beide zijn juist. Bij twijfel: gebruik te, dat is altijd veilig."
    },
    {
      question: "Welke fout zit er in 'Laat hem te eten'?",
      answer: "Correct: Laat hem eten. Laten (toestaan/veroorzaken) wordt altijd gevolgd door de kale infinitief. Te is hier grammaticaal onjuist. Deze regel geldt ook voor gaan, komen, blijven."
    },
    {
      question: "Wanneer gebruik je wél te bij infinitieven?",
      answer: "Je gebruikt altijd te + infinitief na: hoeven, proberen, vergeten (Je hoeft niet te komen); lijken, schijnen, beloven (Hij lijkt te werken); voorzetsels zoals om te, zonder te, door te; en bijvoeglijke naamwoorden zoals moeilijk te doen, leuk om te lezen."
    },
    {
      question: "Maak een zin met een waarnemingswerkwoord waarin de kale infinitief verplicht is.",
      answer: "Ik zag de vogels overvliegen. Uitleg: zien is een waarnemingswerkwoord. Bij zintuiglijke waarneming (horen, zien, voelen) gebruik je de kale infinitief. Te is hier verboden. Meer voorbeelden: Ik hoorde de deur dichtslaan, Zij voelde de grond trillen."
    }
  ],
};