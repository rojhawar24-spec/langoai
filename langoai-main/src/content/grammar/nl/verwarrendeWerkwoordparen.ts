import type { GrammarLesson } from "../../types";

export const verwarrendeWerkwoordparen: GrammarLesson = {
  id: "nl-werkwoordparen-1",
  title: "Liggen/Leggen, Zitten/Zetten, Staan/Stellen, Hangen/Ophangen – De Definitieve Masterclass",
  level: 2,
  topic: "Verwarrende werkwoordparen", // [G] Grammatica
  body: "Meester de moeilijkste werkwoordparen van het Nederlands: liggen vs leggen, zitten vs zetten, staan vs stellen, hangen vs ophangen. Van causatief tot statisch, van figuurlijk gebruik tot scheidbare samenstellingen.",
  overview:
    "Dit is de alleruitgebreidste, encyclopedische gids over de vier meest verwarrende werkwoordparen in het Nederlands. Je leert het fundamentele verschil tussen statisch (toestand) en causatief (handeling), krijgt de volledige vervoegingstabellen inclusief onvoltooid verleden tijd en voltooid deelwoord, doorloopt een stappenplan van drie seconden om nooit meer te twijfelen, ontdekt geavanceerde nuances zoals het hangen-paradox en figuurlijk gebruik, ziet de link met scheidbare werkwoorden, leert vaste uitdrukkingen uit je hoofd, en test jezelf met vijf complexe masterclass-vragen. Na deze les behoor je tot de top 1% van de taalleerders die dit onderscheid foutloos beheerst.",
  anchorSectionId: "fundamenteel",
  exercises: [],
  timeExpressionsLabel: "De vier heilige paren in één oogopslag: toestand versus handeling 🎯",
  timeExpressions: {
    header: "Werkwoord | Type | Hulpwerkwoord | Voorbeeld",
    rows: [
      ["liggen", "Toestand (statisch)", "zijn", "De sleutels liggen op tafel."],
      ["leggen", "Handeling (causatief)", "hebben", "Ik leg de sleutels op tafel."],
      ["zitten", "Toestand (statisch)", "zijn", "Hij zit op de bank."],
      ["zetten", "Handeling (causatief)", "hebben", "Ik zet hem op de bank."],
      ["staan", "Toestand (statisch)", "zijn", "De vaas staat op tafel."],
      ["stellen", "Handeling (causatief)", "hebben", "Ik stel de wekker."],
      ["hangen", "Toestand/Handeling", "hebben/zijn", "De jas hangt aan de kapstok."],
      ["ophangen", "Handeling (causatief)", "hebben", "Ik hang de jas op."],
    ],
  },
  details: [
    {
      title: "Deel 1: De fundamentele wetenschap – causatief versus statisch 🧠",
      body: `
        <p>Om deze werkwoorden voor altijd te beheersen, moet je de onderliggende taalkundige logica begrijpen. Het draait allemaal om het verschil tussen twee concepten:</p>
        
        <div class="grid md:grid-cols-2 gap-4 my-4">
          <div class="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-lg p-4">
            <h4 class="font-bold text-emerald-700 dark:text-emerald-300 mb-2">🔹 Statisch (Toestand / Inchoatief)</h4>
            <p class="text-sm text-slate-700 dark:text-slate-300 mb-2">Er is <strong>geen</strong> externe kracht of acteur. Het onderwerp ondergaat niets; het <em>bevindt</em> zich gewoon ergens. Het is een feitelijke staat van zijn.</p>
            <ul class="space-y-1 text-sm">
              <li>• De sleutels <strong>liggen</strong> op tafel.</li>
              <li>• Hij <strong>zit</strong> op de bank.</li>
              <li>• De vaas <strong>staat</strong> in de vensterbank.</li>
              <li>• De jas <strong>hangt</strong> aan de kapstok.</li>
            </ul>
            <p class="text-xs text-slate-600 dark:text-slate-400 mt-2 italic">Het onderwerp doet niets actief. Het is er gewoon.</p>
          </div>
          
          <div class="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 rounded-lg p-4">
            <h4 class="font-bold text-indigo-700 dark:text-indigo-300 mb-2">🔹 Causatief (Handeling / Oorzakelijk)</h4>
            <p class="text-sm text-slate-700 dark:text-slate-300 mb-2">Er is <strong>wel</strong> een acteur (een onderwerp) die een actie uitvoert op een <strong>lijdend voorwerp</strong>. De acteur <em>veroorzaakt</em> de verandering van plaats.</p>
            <ul class="space-y-1 text-sm">
              <li>• Ik <strong>leg</strong> de sleutels op tafel.</li>
              <li>• Zij <strong>zet</strong> hem op de bank.</li>
              <li>• Hij <strong>stelt</strong> de vaas in de vensterbank.</li>
              <li>• Ik <strong>hang</strong> de jas aan de kapstok <strong>op</strong>.</li>
            </ul>
            <p class="text-xs text-slate-600 dark:text-slate-400 mt-2 italic">De acteur verplaatst iets. Er is een lijdend voorwerp.</p>
          </div>
        </div>
        
        <div class="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-400 p-4 my-4">
          <p class="font-bold text-amber-800 dark:text-amber-200 mb-1">⚡ DE ONWRIJKBARE WET:</p>
          <p class="text-sm text-slate-700 dark:text-slate-300">
            Is er een <strong>lijdend voorwerp</strong> (antwoord op de vraag: <em>Wat</em> of <em>wie</em> verplaats ik?)? → <strong>HANDLING</strong> (hebben).<br>
            Is er <strong>geen</strong> lijdend voorwerp (het onderwerp doet het zelf of ondergaat het)? → <strong>TOESTAND</strong> (zijn).
          </p>
        </div>
        
        <div class="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 rounded-lg p-4 my-4">
          <p class="font-semibold text-indigo-800 dark:text-indigo-200 mb-2">🧠 De Klinker-Truc voor de tegenwoordige tijd:</p>
          <p class="text-sm text-slate-700 dark:text-slate-300">
            • De <strong>I</strong> staat voor <strong>ZIJN</strong> (L<strong>i</strong>ggen, Z<strong>i</strong>tten) → Toestand.<br>
            • De <strong>E</strong> staat voor <strong>HEBBEN</strong> (L<strong>e</strong>ggen, Z<strong>e</strong>tten, St<strong>e</strong>llen) → Handeling.<br><br>
            Ezelsbruggetje: <em>"Ik lig, ik heb gelegd"</em> – de klinker wisselt van i naar e als je van toestand naar handeling gaat.
          </p>
        </div>
      `,
    },
    {
      title: "Deel 2: De vier heilige werkwoordparen – volledige vervoeging 📜",
      body: `
        <p>Hier is de ultieme tabel. Niet alleen de basis, maar de <strong>volledige vervoeging</strong> inclusief onvoltooid verleden tijd (ovt) en voltooid deelwoord (vtd).</p>
        
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-indigo-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Paar</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Type</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Infinitief</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Tegenwoordige tijd</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Onvoltooid verleden</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Voltooid deelwoord</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Hulpwerkwoord</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">Liggen</td>
                <td class="px-4 py-3 text-sm">Toestand</td>
                <td class="px-4 py-3 text-sm">liggen</td>
                <td class="px-4 py-3 text-sm">ik lig, hij ligt</td>
                <td class="px-4 py-3 text-sm">ik lag</td>
                <td class="px-4 py-3 text-sm">is gelegen</td>
                <td class="px-4 py-3 text-sm font-semibold text-emerald-600">ZIJN</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">Leggen</td>
                <td class="px-4 py-3 text-sm">Handeling</td>
                <td class="px-4 py-3 text-sm">leggen</td>
                <td class="px-4 py-3 text-sm">ik leg, hij legt</td>
                <td class="px-4 py-3 text-sm">ik legde</td>
                <td class="px-4 py-3 text-sm">heeft gelegd</td>
                <td class="px-4 py-3 text-sm font-semibold text-indigo-600">HEBBEN</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">Zitten</td>
                <td class="px-4 py-3 text-sm">Toestand</td>
                <td class="px-4 py-3 text-sm">zitten</td>
                <td class="px-4 py-3 text-sm">ik zit, hij zit</td>
                <td class="px-4 py-3 text-sm">ik zat</td>
                <td class="px-4 py-3 text-sm">is gezeten</td>
                <td class="px-4 py-3 text-sm font-semibold text-emerald-600">ZIJN</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">Zetten</td>
                <td class="px-4 py-3 text-sm">Handeling</td>
                <td class="px-4 py-3 text-sm">zetten</td>
                <td class="px-4 py-3 text-sm">ik zet, hij zet</td>
                <td class="px-4 py-3 text-sm">ik zette</td>
                <td class="px-4 py-3 text-sm">heeft gezet</td>
                <td class="px-4 py-3 text-sm font-semibold text-indigo-600">HEBBEN</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">Staan</td>
                <td class="px-4 py-3 text-sm">Toestand</td>
                <td class="px-4 py-3 text-sm">staan</td>
                <td class="px-4 py-3 text-sm">ik sta, hij staat</td>
                <td class="px-4 py-3 text-sm">ik stond</td>
                <td class="px-4 py-3 text-sm">is gestaan</td>
                <td class="px-4 py-3 text-sm font-semibold text-emerald-600">ZIJN</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">Stellen</td>
                <td class="px-4 py-3 text-sm">Handeling</td>
                <td class="px-4 py-3 text-sm">stellen</td>
                <td class="px-4 py-3 text-sm">ik stel, hij stelt</td>
                <td class="px-4 py-3 text-sm">ik stelde</td>
                <td class="px-4 py-3 text-sm">heeft gesteld</td>
                <td class="px-4 py-3 text-sm font-semibold text-indigo-600">HEBBEN</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">Hangen</td>
                <td class="px-4 py-3 text-sm">Toestand/Handeling</td>
                <td class="px-4 py-3 text-sm">hangen</td>
                <td class="px-4 py-3 text-sm">ik hang, hij hangt</td>
                <td class="px-4 py-3 text-sm">ik hing</td>
                <td class="px-4 py-3 text-sm">heeft/is gehangen</td>
                <td class="px-4 py-3 text-sm font-semibold text-amber-600">HEBBEN/ZIJN</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30">
                <td class="px-4 py-3 text-sm font-semibold">Ophangen</td>
                <td class="px-4 py-3 text-sm">Handeling</td>
                <td class="px-4 py-3 text-sm">ophangen</td>
                <td class="px-4 py-3 text-sm">ik hang op, hij hangt op</td>
                <td class="px-4 py-3 text-sm">ik hing op</td>
                <td class="px-4 py-3 text-sm">heeft opgehangen</td>
                <td class="px-4 py-3 text-sm font-semibold text-indigo-600">HEBBEN</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div class="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-lg p-4 my-4">
          <p class="font-semibold text-emerald-800 dark:text-emerald-200 mb-2">🔍 Belangrijke opmerkingen bij de vervoeging:</p>
          <ul class="space-y-1 text-sm text-slate-700 dark:text-slate-300">
            <li>• <strong>Liggen</strong> is een sterk werkwoord: liggen – lag – gelegen (met klinkerverandering).</li>
            <li>• <strong>Leggen</strong> is zwak: leggen – legde – gelegd (regelmatig).</li>
            <li>• <strong>Zitten</strong> is sterk: zitten – zat – gezeten.</li>
            <li>• <strong>Zetten</strong> is zwak: zetten – zette – gezet.</li>
            <li>• <strong>Staan</strong> is sterk: staan – stond – gestaan.</li>
            <li>• <strong>Stellen</strong> is zwak: stellen – stelde – gesteld.</li>
            <li>• <strong>Hangen</strong> is sterk maar uniek: hangen – hing – gehangen (met zowel hebben als zijn mogelijk).</li>
            <li>• <strong>Ophangen</strong> is de scheidbare, causatieve variant: ophangen – hing op – opgehangen.</li>
          </ul>
        </div>
      `,
    },
    {
      title: "Deel 3: Het ultieme beslisalgoritme – stappenplan van drie seconden 🗺️",
      body: `
        <p>Twijfel je in een zin? Doorloop dit mentale stappenplan. Het duurt drie seconden en werkt altijd.</p>
        
        <div class="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 rounded-lg p-4 my-4">
          <p class="font-bold text-indigo-800 dark:text-indigo-200 mb-2">🎯 Stap 1: Zoek het lijdend voorwerp</p>
          <p class="text-sm text-slate-700 dark:text-slate-300 mb-2">Vraag jezelf af: <em>"Plaats ik hier iets of iemand?"</em> of <em>"Kan ik 'het' of 'hem' toevoegen?"</em></p>
          <ul class="space-y-1 text-sm">
            <li class="flex items-start"><span class="text-emerald-500 mr-2">✅ Ja</span><span>→ Ga naar Stap 2A (Handeling)</span></li>
            <li class="flex items-start"><span class="text-rose-500 mr-2">❌ Nee</span><span>→ Ga naar Stap 2B (Toestand)</span></li>
          </ul>
        </div>
        
        <div class="grid md:grid-cols-2 gap-4 my-4">
          <div class="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-lg p-4">
            <h4 class="font-bold text-emerald-700 dark:text-emerald-300 mb-2">🔹 Stap 2A: Handeling (causatief)</h4>
            <p class="text-sm text-slate-700 dark:text-slate-300 mb-2">Gebruik <strong>leggen, zetten, stellen</strong> of <strong>ophangen</strong>.</p>
            <p class="text-xs text-slate-600 dark:text-slate-400 mb-2">Hulpwerkwoord in de voltooide tijd = <strong>HEBBEN</strong>.</p>
            <ul class="space-y-1 text-sm">
              <li>• Ik heb (wat?) de vaas op tafel <strong>gezet</strong>.</li>
              <li>• Zij heeft (wie?) het kind op de grond <strong>gezet</strong>.</li>
              <li>• Hij heeft (wat?) de wekker <strong>gesteld</strong>.</li>
            </ul>
          </div>
          
          <div class="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 rounded-lg p-4">
            <h4 class="font-bold text-indigo-700 dark:text-indigo-300 mb-2">🔹 Stap 2B: Toestand (statisch)</h4>
            <p class="text-sm text-slate-700 dark:text-slate-300 mb-2">Gebruik <strong>liggen, zitten, staan</strong> of <strong>hangen</strong>.</p>
            <p class="text-xs text-slate-600 dark:text-slate-400 mb-2">Hulpwerkwoord in de voltooide tijd = <strong>ZIJN</strong>.</p>
            <ul class="space-y-1 text-sm">
              <li>• De vaas <strong>staat</strong> op tafel. / De vaas <strong>is</strong> op tafel gaan <strong>staan</strong>.</li>
              <li>• Het kind <strong>zit</strong> op de grond. / Het kind <strong>is</strong> op de grond gaan <strong>zitten</strong>.</li>
              <li>• De wekker <strong>staat</strong> op vijf uur. / De wekker <strong>is</strong> op vijf uur gaan <strong>staan</strong>.</li>
            </ul>
          </div>
        </div>
        
        <div class="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-400 p-4 my-4">
          <p class="font-semibold text-amber-800 dark:text-amber-200 mb-2">💡 De "Wat?"-test in de praktijk:</p>
          <p class="text-sm text-slate-700 dark:text-slate-300">
            Zin: <em>"Hij ___ de boeken op de plank."</em><br>
            Vraag: <em>Wat</em> plaatst hij? → de boeken (lijdend voorwerp).<br>
            Antwoord: Handeling → <strong>legt</strong> of <strong>zet</strong>?<br>
            Boeken liggen horizontaal → <strong>legt</strong>.<br>
            Correct: <em>Hij legt de boeken op de plank.</em>
          </p>
        </div>
      `,
    },
    {
      title: "Deel 4: Gevorderde nuances, uitzonderingen en valkuilen ⚠️",
      body: `
        <p>Dit is het niveau waar zelfs gevorderde cursisten de fout in gaan. Lees dit goed!</p>
        
        <h3 class="text-lg font-bold mt-4 mb-2">1. Het "Hangen"-Paradox</h3>
        <p><strong>Hangen</strong> is uniek. In het Nederlands mag <em>hangen</em> officieel voor <strong>zowel</strong> toestand als handeling worden gebruikt, maar er is een sterke voorkeur:</p>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-emerald-400 dark:before:bg-emerald-500 text-slate-700 dark:text-slate-300"><strong>Toestand:</strong> <em>De jas hangt aan de kapstok.</em> (V.t.: <em>De jas <strong>heeft</strong> daar jaren <strong>gehangen</strong>.</em> Let op: 'hebben' is hier gebruikelijker dan 'zijn', hoewel 'is gehangen' ook correct Nederlands is).</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>Handeling:</strong> <em>Ik hang de jas op.</em> (Gebruik bij twijfel altijd het scheidbare <strong>ophangen</strong>. <em>Ik heb de jas opgehangen.</em> Dit klinkt veel natuurlijker en actiever dan <em>Ik heb de jas gehangen</em>).</li>
        </ul>
        
        <h3 class="text-lg font-bold mt-6 mb-2">2. Figuurlijk gebruik (abstracte zinnen)</h3>
        <p>Deze werkwoorden worden massaal figuurlijk gebruikt. De regel (actie versus toestand) blijft <strong>exact hetzelfde</strong> gelden!</p>
        <div class="grid md:grid-cols-2 gap-3 my-4">
          <div class="bg-white dark:bg-slate-800/50 rounded-lg p-3 border border-slate-200 dark:border-slate-700">
            <p class="font-semibold text-emerald-700 dark:text-emerald-300 text-sm mb-1">🔹 Toestand (statisch)</p>
            <ul class="space-y-1 text-xs text-slate-600 dark:text-slate-400">
              <li>• De nadruk <strong>ligt</strong> op kwaliteit.</li>
              <li>• Er <strong>staat</strong> een boete op dat parkeren.</li>
              <li>• Het probleem <strong>zit</strong> in de details.</li>
              <li>• De verantwoordelijkheid <strong>ligt</strong> bij jou.</li>
            </ul>
          </div>
          <div class="bg-white dark:bg-slate-800/50 rounded-lg p-3 border border-slate-200 dark:border-slate-700">
            <p class="font-semibold text-indigo-700 dark:text-indigo-300 text-sm mb-1">🔹 Handeling (causatief)</p>
            <ul class="space-y-1 text-xs text-slate-600 dark:text-slate-400">
              <li>• Ik <strong>leg</strong> de nadruk op kwaliteit.</li>
              <li>• De leraar <strong>stelt</strong> een vraag.</li>
              <li>• Hij <strong>zet</strong> de wekker.</li>
              <li>• Zij <strong>legt</strong> de verantwoordelijkheid bij jou.</li>
            </ul>
          </div>
        </div>
        
        <h3 class="text-lg font-bold mt-6 mb-2">3. Regionale variatie (Vlaams versus Standaard Nederlands)</h3>
        <p>In het Belgisch-Nederlands (Vlaams) hoor je soms: <em>"Ik zit op de bank"</em> (correct, toestand) maar ook <em>"Hij zit het kind op de grond"</em> (in plaats van <em>zet</em>). <strong>Let op:</strong> Dit is spreektaal/regiolect. In standaard, correct geschreven Nederlands is dit <strong>fout</strong>. Het moet altijd zijn: <em>Hij <strong>zet</strong> het kind op de grond.</em></p>
        
        <h3 class="text-lg font-bold mt-6 mb-2">4. Horizontaal versus verticaal: liggen versus staan</h3>
        <p>Naast de causatief-statisch-regel speelt ook de <strong>oriëntatie</strong> een rol:</p>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-emerald-400 dark:before:bg-emerald-500 text-slate-700 dark:text-slate-300"><strong>Liggen/leggen</strong> = horizontaal, plat: boeken, papieren, een persoon die slaapt.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>Staan/zetten</strong> = verticaal, rechtop: een vaas, een persoon die staat, een wekker.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-amber-400 dark:before:bg-amber-500 text-slate-700 dark:text-slate-300"><strong>Zitten/zetten</strong> = in een zitpositie: een persoon op een stoel, een kind op de grond.</li>
        </ul>
      `,
    },
    {
      title: "Deel 5: De link met scheidbare werkwoorden 🔗",
      body: `
        <p>Veel van deze handelingen zijn scheidbaar! Dit maakt de actie nóg duidelijker. Hier zijn de belangrijkste samenstellingen:</p>
        
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-indigo-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Scheidbaar werkwoord</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Betekenis</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Hoofdzin</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Bijzin</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">neerleggen</td>
                <td class="px-4 py-3 text-sm">iets horizontaal neerplaatsen</td>
                <td class="px-4 py-3 text-sm">Ik <strong>leg</strong> de sleutels op tafel <strong>neer</strong>.</td>
                <td class="px-4 py-3 text-sm">...dat ik de sleutels op tafel <strong>neerleg</strong>.</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">neerzetten</td>
                <td class="px-4 py-3 text-sm">iets verticaal neerplaatsen</td>
                <td class="px-4 py-3 text-sm">Hij <strong>zet</strong> de bloemen in de vaas <strong>neer</strong>.</td>
                <td class="px-4 py-3 text-sm">...omdat hij de bloemen in de vaas <strong>neerzet</strong>.</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">klaarzetten</td>
                <td class="px-4 py-3 text-sm">iets gereedmaken</td>
                <td class="px-4 py-3 text-sm">Zij <strong>zet</strong> het eten vast <strong>klaar</strong>.</td>
                <td class="px-4 py-3 text-sm">...terwijl zij het eten vast <strong>klaarzet</strong>.</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">wegleggen</td>
                <td class="px-4 py-3 text-sm">iets opbergen</td>
                <td class="px-4 py-3 text-sm"><strong>Leg</strong> je telefoon maar <strong>weg</strong>.</td>
                <td class="px-4 py-3 text-sm">...of je je telefoon maar <strong>weglegt</strong>.</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50">
                <td class="px-4 py-3 text-sm font-semibold">ophangen</td>
                <td class="px-4 py-3 text-sm">iets aan iets bevestigen</td>
                <td class="px-4 py-3 text-sm">Ik <strong>hang</strong> mijn jas aan de haak <strong>op</strong>.</td>
                <td class="px-4 py-3 text-sm">...nadat ik mijn jas aan de haak <strong>ophang</strong>.</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div class="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-400 p-4 my-4">
          <p class="font-semibold text-amber-800 dark:text-amber-200 mb-2">⚠️ Let op de vorming van het voltooid deelwoord:</p>
          <p class="text-sm text-slate-700 dark:text-slate-300">
            • <em>neerleggen</em> → <strong>neergelegd</strong> (voorvoegsel + ge + stam + d)<br>
            • <em>ophangen</em> → <strong>opgehangen</strong> (voorvoegsel + ge + stam + en)<br>
            • <em>klaarzetten</em> → <strong>klaargezet</strong> (voorvoegsel + ge + stam + t)<br><br>
            De regel blijft: bij scheidbare werkwoorden komt <em>-ge-</em> <strong>tussen</strong> voorvoegsel en stam.
          </p>
        </div>
      `,
    },
    {
      title: "Deel 6: Vaste uitdrukkingen en idiomaten 🗣️",
      body: `
        <p>Leer deze uit je hoofd. Ze komen constant voor in examen Nederlands, sollicitatiegesprekken en formele teksten.</p>
        
        <div class="grid md:grid-cols-2 gap-3 my-4">
          <div class="bg-white dark:bg-slate-800/50 rounded-lg p-3 border border-slate-200 dark:border-slate-700">
            <p class="font-semibold text-emerald-700 dark:text-emerald-300 text-sm mb-1">🔹 Toestand-idiomen</p>
            <ul class="space-y-1 text-xs text-slate-600 dark:text-slate-400">
              <li>• <strong>Iets in de weg staan</strong>: Jouw gedrag staat een oplossing in de weg.</li>
              <li>• <strong>Iemand te woord staan</strong>: De woordvoerder staat de pers te woord.</li>
              <li>• <strong>Op de loer liggen</strong>: Gevaar ligt op de loer.</li>
              <li>• <strong>Er staat veel op het spel</strong>: De consequenties zijn groot.</li>
              <li>• <strong>Het ligt voor de hand</strong>: Het is duidelijk/voor de hand liggend.</li>
            </ul>
          </div>
          <div class="bg-white dark:bg-slate-800/50 rounded-lg p-3 border border-slate-200 dark:border-slate-700">
            <p class="font-semibold text-indigo-700 dark:text-indigo-300 text-sm mb-1">🔹 Handeling-idiomen</p>
            <ul class="space-y-1 text-xs text-slate-600 dark:text-slate-400">
              <li>• <strong>Een eis stellen</strong>: De vakbond stelt hoge eisen.</li>
              <li>• <strong>De wet vastleggen</strong>: De regels zijn in het contract vastgelegd.</li>
              <li>• <strong>Iets op tafel leggen</strong>: Hij legt het probleem op tafel.</li>
              <li>• <strong>Een vraag stellen</strong>: Zij stelt een belangrijke vraag.</li>
              <li>• <strong>Iets in werking stellen</strong>: Hij stelt de machine in werking.</li>
            </ul>
          </div>
        </div>
        
        <div class="bg-rose-50 dark:bg-rose-900/20 border border-rose-200 dark:border-rose-800 rounded-lg p-4 my-4">
          <p class="font-bold text-rose-700 dark:text-rose-300 mb-1">🚨 Let op deze valkuil:</p>
          <p class="text-sm text-slate-700 dark:text-slate-300">
            <strong>Een beslissing nemen</strong> – hier gebruiken we <em>nemen</em>, niet <em>stellen</em> of <em>zetten</em>! Dit is een vaste combinatie die je uit je hoofd moet leren.<br><br>
            ✅ Correct: <em>De directie neemt een beslissing.</em><br>
            ❌ Fout: <em>De directie stelt een beslissing.</em>
          </p>
        </div>
      `,
    },
    {
      title: "Deel 7: Snelle herhaling – alles op één pagina ⚡",
      body: `
        <ul class="my-2 space-y-2 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-['✅'] before:absolute before:left-0 before:top-[0.4rem] text-slate-700 dark:text-slate-300"><strong>Statisch (toestand):</strong> liggen, zitten, staan, hangen → hulpwerkwoord <strong>zijn</strong>, géén lijdend voorwerp.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-['✅'] before:absolute before:left-0 before:top-[0.4rem] text-slate-700 dark:text-slate-300"><strong>Causatief (handeling):</strong> leggen, zetten, stellen, ophangen → hulpwerkwoord <strong>hebben</strong>, wél lijdend voorwerp.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-['🧠'] before:absolute before:left-0 before:top-[0.4rem] text-slate-700 dark:text-slate-300"><strong>De "Wat?"-test:</strong> Kun je "het" of "hem" toevoegen? Ja = handeling, Nee = toestand.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-['🔤'] before:absolute before:left-0 before:top-[0.4rem] text-slate-700 dark:text-slate-300"><strong>Klinker-truc:</strong> I = zijn (liggen, zitten), E = hebben (leggen, zetten, stellen).</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-['🔗'] before:absolute before:left-0 before:top-[0.4rem] text-slate-700 dark:text-slate-300"><strong>Scheidbare werkwoorden:</strong> neerleggen, neerzetten, klaarzetten, ophangen → -ge- komt tussen voorvoegsel en stam.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-['⚠️'] before:absolute before:left-0 before:top-[0.4rem] text-slate-700 dark:text-slate-300"><strong>Hangen is uniek:</strong> mag met hebben of zijn, maar gebruik bij handeling liever <em>ophangen</em>.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-['🎭'] before:absolute before:left-0 before:top-[0.4rem] text-slate-700 dark:text-slate-300"><strong>Figuurlijk gebruik:</strong> dezelfde regels gelden: <em>de nadruk ligt</em> (toestand) versus <em>ik leg de nadruk</em> (handeling).</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-['🌍'] before:absolute before:left-0 before:top-[0.4rem] text-slate-700 dark:text-slate-300"><strong>Regionale variatie:</strong> Vlaams spreekt soms "hij zit het kind", maar standaard Nederlands is altijd "hij zet het kind".</li>
        </ul>
      `,
    },
  ],
  rulesTable: [
    {
      rule: "Statisch versus causatief",
      structure: "Is er een lijdend voorwerp (wat/wie verplaats ik)? → HANDLING (hebben). Geen lijdend voorwerp? → TOESTAND (zijn).",
      example: "Ik leg de sleutels neer (handeling). • De sleutels liggen daar (toestand).",
      usage: "De 'Wat?'-test werkt altijd: kun je 'het' of 'hem' toevoegen? Ja = handeling, Nee = toestand."
    },
    {
      rule: "Klinker-truc voor tegenwoordige tijd",
      structure: "I = zijn (liggen, zitten) → toestand. E = hebben (leggen, zetten, stellen) → handeling.",
      example: "Ik lig (toestand) → ik heb gelegd (handeling). • Ik zit (toestand) → ik heb gezet (handeling).",
      usage: "Ezelsbruggetje: 'Ik lig, ik heb gelegd' – de klinker wisselt van i naar e bij de handeling."
    },
    {
      rule: "Voltooid deelwoord: hulpwerkwoord kiezen",
      structure: "Toestand → zijn. Handeling → hebben. Uitzondering: hangen mag beide, maar hebben is gebruikelijker.",
      example: "De vaas is gaan staan (toestand). • Ik heb de vaas neergezet (handeling). • De jas heeft gehangen (toestand).",
      usage: "Vraag: 'Is er een acteur die iets verplaatst?' Ja = hebben, Nee = zijn."
    },
    {
      rule: "Scheidbare samenstellingen",
      structure: "Neerleggen, neerzetten, klaarzetten, ophangen: voorvoegsel + ge + stam (+ d/t/en) voor voltooid deelwoord.",
      example: "neerleggen → neergelegd • ophangen → opgehangen • klaarzetten → klaargezet",
      usage: "De -ge- komt altijd tussen voorvoegsel en stam, net als bij andere scheidbare werkwoorden."
    },
    {
      rule: "Figuurlijk gebruik volgt dezelfde regels",
      structure: "Abstracte zinnen volgen exact dezelfde causatief-statisch-logica als concrete zinnen.",
      example: "De nadruk ligt op kwaliteit (toestand). • Ik leg de nadruk op kwaliteit (handeling).",
      usage: "Vraag ook bij abstracte zinnen: 'Is er een lijdend voorwerp dat ik verplaats?' → bepaalt leggen versus liggen."
    },
    {
      rule: "Regionale variatie herkennen",
      structure: "In Vlaams spreektaal hoor je soms 'hij zit het kind', maar standaard Nederlands vereist altijd 'hij zet het kind'.",
      example: "Vlaams spreektaal: Hij zit het kind op de grond. • Standaard Nederlands: Hij zet het kind op de grond.",
      usage: "Schrijf altijd standaard Nederlands: gebruik zetten bij causatieve handelingen, nooit zitten."
    },
  ],
  callouts: [
    { type: "remember", label: "🎯 Gouden regel 1", text: "Lijdend voorwerp? → Handeling (leggen, zetten, stellen, ophangen) + hebben. Geen lijdend voorwerp? → Toestand (liggen, zitten, staan, hangen) + zijn." },
    { type: "remember", label: "🧠 Gouden regel 2", text: "Klinker-truc: I = zijn (liggen, zitten) → toestand. E = hebben (leggen, zetten, stellen) → handeling." },
    { type: "remember", label: "🔗 Gouden regel 3", text: "Scheidbare werkwoorden: neerleggen, neerzetten, ophangen → voltooid deelwoord = voorvoegsel + ge + stam (+ d/t/en)." },
    { type: "remember", label: "⚠️ Gouden regel 4", text: "Hangen is uniek: mag met hebben of zijn, maar gebruik bij handeling liever ophangen voor duidelijkheid." },
    { type: "remember", label: "🎭 Gouden regel 5", text: "Figuurlijk gebruik volgt dezelfde regels: de nadruk ligt (toestand) versus ik leg de nadruk (handeling)." },
    { type: "tip", label: "💡 Pro-tip", text: "Twijfel je? Vraag: 'Kan ik het of hem toevoegen?' Ja = handeling (hebben), Nee = toestand (zijn). Werkt altijd." },
  ],
  commonMistakes: [
    { incorrect: "Ik heb de sleutels op tafel gelegen.", correct: "Ik heb de sleutels op tafel gelegd.", explanation: "Leggen is een handeling (causatief) → hulpwerkwoord hebben + voltooid deelwoord gelegd, niet gelegen." },
    { incorrect: "De vaas heeft op tafel gestaan.", correct: "De vaas is op tafel gaan staan. / De vaas staat op tafel.", explanation: "Staan is een toestand (statisch) → hulpwerkwoord zijn, niet hebben." },
    { incorrect: "Hij zit het kind op de grond.", correct: "Hij zet het kind op de grond.", explanation: "Er is een lijdend voorwerp (het kind) → causatieve handeling → zetten, niet zitten. Dit is een veelgemaakte fout in spreektaal." },
    { incorrect: "Ik heb de jas aan de kapstok gehangen.", correct: "Ik heb de jas aan de kapstok opgehangen.", explanation: "Bij handelingen met hangen klinkt het scheidbare ophangen natuurlijker: opgehangen in plaats van gehangen." },
    { incorrect: "De nadruk legt op kwaliteit.", correct: "De nadruk ligt op kwaliteit.", explanation: "De nadruk is geen lijdend voorwerp dat je verplaatst → toestand → liggen, niet leggen." },
    { incorrect: "Hij heeft een vraag gezet.", correct: "Hij heeft een vraag gesteld.", explanation: "Vragen stellen is een vaste combinatie met stellen, niet met zetten. Stellen gebruik je voor abstracte handelingen zoals vragen, eisen, voorwaarden." },
  ],
  review: [
    "✅ Statisch (toestand): liggen, zitten, staan, hangen → géén lijdend voorwerp, hulpwerkwoord zijn.",
    "✅ Causatief (handeling): leggen, zetten, stellen, ophangen → wél lijdend voorwerp, hulpwerkwoord hebben.",
    "✅ De 'Wat?'-test: Kun je 'het' of 'hem' toevoegen? Ja = handeling, Nee = toestand.",
    "✅ Klinker-truc: I = zijn (liggen, zitten) → toestand. E = hebben (leggen, zetten, stellen) → handeling.",
    "✅ Voltooid deelwoord: toestand → zijn + gelegen/gezeten/gestaan/gehangen. Handeling → hebben + gelegd/gezet/gesteld/opgehangen.",
    "✅ Scheidbare werkwoorden: neerleggen → neergelegd, ophangen → opgehangen, klaarzetten → klaargezet.",
    "✅ Figuurlijk gebruik volgt dezelfde regels: de nadruk ligt versus ik leg de nadruk.",
    "✅ Hangen is uniek: mag met hebben of zijn, maar gebruik bij handeling liever ophangen.",
    "✅ Regionale variatie: Vlaams 'hij zit het kind' is spreektaal; standaard Nederlands is altijd 'hij zet het kind'.",
    "✅ Vaste combinaties: een vraag stellen, een eis stellen, een beslissing nemen – leer deze uit je hoofd.",
  ],
  qa: [
    {
      question: "Vul de ontbrekende werkwoorden in: 'Gisteren ___ ik mijn jas aan de kapstok, maar vanochtend ___ hij op de grond. Ik ___ hem dus weer aan de haak, en nu ___ hij daar eindelijk netjes.'",
      answer: "heb opgehangen, lag, heb opgehangen (of: hing), hangt. Uitleg: Actie gisteren = hebben opgehangen. Toestand vanochtend (horizontaal op de grond) = lag (van liggen). Actie vanochtend = heb opgehangen. Huidige toestand (verticaal) = hangt."
    },
    {
      question: "Maak deze zin correct: 'De directeur zit de nadruk op duurzaamheid, omdat dit belang hoog in het bedrijf liggen moet.'",
      answer: "De directeur legt de nadruk op duurzaamheid, omdat dit belang hoog in het bedrijf moet liggen. Uitleg: 'De nadruk' is een figuurlijk lijdend voorwerp dat je activeert → leggen. Het belang bevindt zich daar (geen actie) → liggen. Omdat 'moeten' een modaal werkwoord is, staat de hele infinitief (liggen) achteraan."
    },
    {
      question: "Herschrijf deze zin in de voltooide tijd: 'Zij zet de documenten in de archiefkast klaar.'",
      answer: "Zij heeft de documenten in de archiefkast klaargezet. Uitleg: Actie → hulpwerkwoord hebben. Scheidbaar werkwoord klaarzetten → voltooid deelwoord is klaar + ge + zet + d = klaargezet. Het gehele voltooid deelwoord staat achteraan."
    },
    {
      question: "Leg uit waarom beide zinnen grammaticaal correct zijn, maar een subtiel ander gevoel geven: A) 'De sleutels hebben jaren in de la gehangen.' B) 'De sleutels zijn jaren in de la gehangen.'",
      answer: "Beide zijn correct. Zin A (met hebben) benadrukt de duur van de toestand (hoe lang het al zo is). Zin B (met zijn) benadrukt de verandering van toestand of het resultaat (ze zijn daar terechtgekomen en zijn er nog steeds). In de praktijk is hebben gehangen veel gebruikelijker voor een statische toestand."
    },
    {
      question: "Je ziet deze zin: 'Hij stelt het kind op de grond.' Is dit correct Standaardnederlands? Zo nee, verbeter het en leg uit waarom mensen deze fout maken.",
      answer: "Nee, dit is fout. De correcte zin is: Hij zet het kind op de grond. Uitleg: Mensen maken deze fout omdat ze in spreektaal (vooral in bepaalde regio's) zitten en zetten door elkaar halen bij kleine kinderen. Maar de Wat?-test is keihard: Wat plaats je? Het kind (lijdend voorwerp). Dus is het een causatieve handeling → zetten. Stellen gebruik je voor abstracte concepten (een vraag stellen, een voorwaarde stellen) of het verticaal plaatsen van objecten die staan (de wekker stellen)."
    }
  ],
};