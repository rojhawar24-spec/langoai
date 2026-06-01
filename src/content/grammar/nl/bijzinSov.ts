import type { GrammarLesson } from "../../types";

export const bijzinSov: GrammarLesson = {
  id: "nl-bijzin-sov-1",
  title: "De Bijzin & SOV-Volgorde: Werkwoorden Achteraan – De Definitieve Masterclass",
  level: 2,
  topic: "Bijzin & Woordvolgorde",
  body: "Beheers de bijzin volledig: SOV-volgorde, het finaalcluster, scheidbare werkwoorden, IPP-effect, want versus omdat, en geneste constructies.",
  overview:
    "Dit is de allesomvattende, encyclopedische gids over de Nederlandse bijzin en de SOV-volgorde. Je leert waarom de persoonsvorm altijd achteraan staat, hoe je complexe werkwoordclusters (finaalcluster) opbouwt, hoe scheidbare werkwoorden en voltooide tijden zich gedragen, wat het IPP-effect is, en waarom 'want' een hoofdzin blijft terwijl 'omdat' een bijzin start. Met kristalheldere tabellen, 250+ voorbeelden, stap-voor-stap algoritmes, uitgebreide PAS OP-waarschuwingen en 7 masterclass-vragen beheers jij de bijzin voortaan foutloos, zelfs bij geneste constructies met vier werkwoorden.",
  anchorSectionId: "sov-wet",
  exercises: [],
  timeExpressionsLabel: "Bijzin vs. Hoofdzin in één oogopslag 🎯",
  timeExpressions: {
    header: "Kenmerk | Hoofdzin (SVO) | Bijzin (SOV)",
    rows: [
      ["Positie persoonsvorm", "Plaats 2 (na onderwerp of trigger)", "HELEMAAL ACHTERAAN"],
      ["Startwoord", "Onderwerp of inversie-trigger", "Voegwoord (omdat, dat, als, hoewel)"],
      ["Scheidbaar werkwoord", "Gesplitst: Ik bel je op", "Aaneen: ...dat ik je opbel"],
      ["Voltooide tijd", "Ik heb het boek gelezen", "...dat ik het boek gelezen heb"],
      ["Voorbeeld", "Jan leest snel.", "...omdat Jan snel leest."]
    ]
  },
  details: [
    {
      title: "Deel 1: De heilige wet van de bijzin – SOV 👑",
      body: `
        <p>In het Nederlands geldt één absolute, onwrikbare wet voor bij-zinnen: <strong>De persoonsvorm staat ALTIJD helemaal achteraan.</strong> Dit heet de <strong>SOV-volgorde</strong>: <strong>S</strong>ubject → <strong>O</strong>bject → <strong>V</strong>erb.</p>
        <div class="grid md:grid-cols-2 gap-4 my-4">
          <div class="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-lg p-4">
            <h4 class="font-bold text-emerald-700 dark:text-emerald-300 mb-2">✅ Hoofdzin: SVO (Standaard)</h4>
            <p class="text-sm text-slate-700 dark:text-slate-300 mb-2">Persoonsvorm op plek 2. V2-regel.</p>
            <p class="text-sm italic">Jan <strong>leest</strong> het boek.</p>
          </div>
          <div class="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 rounded-lg p-4">
            <h4 class="font-bold text-indigo-700 dark:text-indigo-300 mb-2">✅ Bijzin: SOV (Werkwoord achteraan)</h4>
            <p class="text-sm text-slate-700 dark:text-slate-300 mb-2">Persoonsvorm wordt naar het einde geduwd.</p>
            <p class="text-sm italic">...omdat Jan het boek <strong>leest</strong>.</p>
          </div>
        </div>
        <div class="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-400 p-4 my-4">
          <p class="font-bold text-amber-800 dark:text-amber-200 mb-1">📐 De Gouden Formule van de Bijzin:</p>
          <p class="text-sm text-slate-700 dark:text-slate-300 font-mono">
            VOEGWOORD (1) + ONDERWERP (2) + MIDDENVELD (tijd, plaats, voorwerpen, bijwoorden) + WERKWOORDELIJKE EINDGROEP (helemaal achteraan)
          </p>
        </div>
      `
    },
    {
      title: "Deel 2: De bouwstenen & posities in de bijzin 📊",
      body: `
        <p>Elk zinsdeel heeft een vaste plek in het Nederlandse middenveld. Leer deze volgorde om zinnen van nature correct te bouwen.</p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-indigo-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Positie</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Zinsdeel</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Vraagwoord</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Voorbeeld</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-semibold">1</td><td class="px-4 py-3 text-sm">Voegwoord</td><td class="px-4 py-3 text-sm">-</td><td class="px-4 py-3 text-sm"><em>omdat</em></td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-semibold">2</td><td class="px-4 py-3 text-sm">Onderwerp</td><td class="px-4 py-3 text-sm">Wie/Wat?</td><td class="px-4 py-3 text-sm"><em>Jan</em></td></tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-semibold">3</td><td class="px-4 py-3 text-sm">Tijdsbepaling</td><td class="px-4 py-3 text-sm">Wanneer?</td><td class="px-4 py-3 text-sm"><em>gisteren</em></td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-semibold">4</td><td class="px-4 py-3 text-sm">Plaatsbepaling</td><td class="px-4 py-3 text-sm">Waar?</td><td class="px-4 py-3 text-sm"><em>in de bibliotheek</em></td></tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-semibold">5</td><td class="px-4 py-3 text-sm">Lijdend voorwerp</td><td class="px-4 py-3 text-sm">Wat?</td><td class="px-4 py-3 text-sm"><em>het boek</em></td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-semibold">6</td><td class="px-4 py-3 text-sm">Meewerkend vw</td><td class="px-4 py-3 text-sm">Aan/Wie?</td><td class="px-4 py-3 text-sm"><em>aan zijn zus</em></td></tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-semibold">7</td><td class="px-4 py-3 text-sm">Manier-bijwoord</td><td class="px-4 py-3 text-sm">Hoe?</td><td class="px-4 py-3 text-sm"><em>voorzichtig</em></td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-4 py-3 text-sm font-semibold">8</td><td class="px-4 py-3 text-sm">Werkwoordelijke eindgroep</td><td class="px-4 py-3 text-sm">-</td><td class="px-4 py-3 text-sm"><strong>heeft gegeven</strong></td></tr>
            </tbody>
          </table>
        </div>
        <p class="text-sm text-slate-700 dark:text-slate-300"><strong>Compleet voorbeeld:</strong> <em>...omdat Jan gisteren in de bibliotheek het boek aan zijn zus voorzichtig heeft gegeven.</em></p>
      `
    },
    {
      title: "Deel 3: De Werkwoordelijke Eindgroep (het Finaalcluster) ⚙️",
      body: `
        <p>Als er <strong>meerdere werkwoorden</strong> in de bijzin staan, vormen ze het <strong>finaalcluster</strong>. Er geldt één heilige volgorde:</p>
        <div class="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 rounded-lg p-4 my-4">
          <p class="font-bold text-indigo-800 dark:text-indigo-200 mb-1">🔥 De Gouden Regel van het Cluster:</p>
          <p class="text-sm text-slate-700 dark:text-slate-300">Hulpwerkwoorden staan VOOR de hoofdwerkwoorden. Van links naar rechts: Tijd → Modaal → Koppel → Hoofdwerkwoord.</p>
        </div>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-emerald-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Aantal ww</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Constructie</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Voorbeeld in bijzin</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-semibold">1</td><td class="px-4 py-3 text-sm">Hoofdww (vervoegd)</td><td class="px-4 py-3 text-sm">...dat hij <strong>werkt</strong>.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-semibold">2</td><td class="px-4 py-3 text-sm">Voltooid: VTD + Hulpww</td><td class="px-4 py-3 text-sm">...dat hij <strong>gewerkt heeft</strong>.</td></tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-semibold">2</td><td class="px-4 py-3 text-sm">Modaal: Modaal + Inf</td><td class="px-4 py-3 text-sm">...dat hij <strong>moet werken</strong>.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-semibold">3</td><td class="px-4 py-3 text-sm">Voltooid + Modaal: Hulp + Inf + Inf</td><td class="px-4 py-3 text-sm">...dat hij <strong>heeft moeten werken</strong>.</td></tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-semibold">3</td><td class="px-4 py-3 text-sm">Toekomst + Modaal: Zal + Inf + Inf</td><td class="px-4 py-3 text-sm">...dat hij <strong>zal moeten werken</strong>.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-4 py-3 text-sm font-semibold">4</td><td class="px-4 py-3 text-sm">Compleet: Hulp + Hulp + Inf + VTD</td><td class="px-4 py-3 text-sm">...dat hij <strong>zal hebben gewerkt</strong>.</td></tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      title: "Deel 4: Voltooide tijden in de bijzin ⏰",
      body: `
        <p>In de hoofdzin staat het hulpwerkwoord vooraan. In de bijzin <strong>draait de volgorde volledig om</strong>.</p>
        <div class="grid md:grid-cols-2 gap-4 my-4">
          <div class="bg-white dark:bg-slate-800/50 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
            <h4 class="font-bold text-emerald-700 dark:text-emerald-300 mb-2">✅ Hoofdzin (V2)</h4>
            <p class="text-sm text-slate-700 dark:text-slate-300 mb-1">Hulpwerkwoord (2) + ... + VTD (einde)</p>
            <p class="text-sm italic">Ik <strong>heb</strong> het boek <strong>gelezen</strong>.</p>
            <p class="text-sm italic">Zij <strong>is</strong> naar huis <strong>gegaan</strong>.</p>
          </div>
          <div class="bg-white dark:bg-slate-800/50 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
            <h4 class="font-bold text-indigo-700 dark:text-indigo-300 mb-2">✅ Bijzin (SOV)</h4>
            <p class="text-sm text-slate-700 dark:text-slate-300 mb-1">VTD (voor hulp) + Hulpwerkwoord (hele einde)</p>
            <p class="text-sm italic">...dat ik het boek <strong>gelezen heb</strong>.</p>
            <p class="text-sm italic">...dat zij naar huis <strong>gegaan is</strong>.</p>
          </div>
        </div>
        <div class="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-400 p-4 my-4">
          <p class="font-bold text-amber-800 dark:text-amber-200 mb-1">⚠️ PAS OP 1: VTD altijd vóór hulpwerkwoord</p>
          <p class="text-sm text-slate-700 dark:text-slate-300 mt-1">
            ❌ <em>...dat ik het boek heb gelezen.</em> (Engelse invloed, fout)<br>
            ✅ <em>...dat ik het boek <strong>gelezen heb</strong>.</em> (Correcte Nederlandse SOV)<br>
            Regel: Het voltooid deelwoord schuift naar links van het hulpwerkwoord.
          </p>
        </div>
      `
    },
    {
      title: "Deel 5: Het IPP-effect (Infinitivus Pro Participio) 🔄",
      body: `
        <p>Dit is een van de mooiste én meest verwarrende regels. Als een <strong>waarnemingswerkwoord</strong> (zien, horen, voelen) of een <strong>modaal werkwoord</strong> in de voltooide tijd staat samen met een ander werkwoord, verandert het voltooid deelwoord in een <strong>infinitief</strong>.</p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-rose-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Werkwoord</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Fout (verwacht deelwoord)</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Correct (IPP: infinitief)</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-semibold">zien + lopen</td><td class="px-4 py-3 text-sm text-rose-600"><em>...dat ik hem heb gezien lopen.</em></td><td class="px-4 py-3 text-sm">...dat ik hem <strong>heb zien lopen</strong>.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-semibold">horen + zingen</td><td class="px-4 py-3 text-sm text-rose-600"><em>...dat ik haar heb gehoord zingen.</em></td><td class="px-4 py-3 text-sm">...dat ik haar <strong>heb horen zingen</strong>.</td></tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-semibold">kunnen + werken</td><td class="px-4 py-3 text-sm text-rose-600"><em>...dat hij heeft gekund werken.</em></td><td class="px-4 py-3 text-sm">...dat hij <strong>heeft kunnen werken</strong>.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-4 py-3 text-sm font-semibold">moeten + helpen</td><td class="px-4 py-3 text-sm text-rose-600"><em>...dat ik heb gemoeten helpen.</em></td><td class="px-4 py-3 text-sm">...dat ik <strong>heb moeten helpen</strong>.</td></tr>
            </tbody>
          </table>
        </div>
        <p class="text-sm text-slate-700 dark:text-slate-300"><strong>Formule:</strong> Hulpwerkwoord + <strong>Infinitief 1</strong> (zien/mogen/etc.) + <strong>Infinitief 2</strong> (hoofdww). Gebruik NOOIT het voltooid deelwoord bij deze combinatie!</p>
      `
    },
    {
      title: "Deel 6: Scheidbare werkwoorden in de bijzin 🔀",
      body: `
        <p>Hier maken 90% van de cursisten een fout. In een bijzin worden scheidbare werkwoorden <strong>NOOIT gesplitst</strong>! Ze worden <strong>weer aan elkaar geschreven</strong> en staan <strong>helemaal achteraan</strong>.</p>
        <div class="grid md:grid-cols-3 gap-3 my-4">
          <div class="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-lg p-3">
            <p class="text-sm font-bold text-emerald-700 dark:text-emerald-300 mb-1">🔹 Tegenwoordige tijd</p>
            <p class="text-xs"><em>Hoofdzin:</em> Ik <strong>bel</strong> hem <strong>op</strong>.<br><em>Bijzin:</em> ...dat ik hem <strong>opbel</strong>.</p>
          </div>
          <div class="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 rounded-lg p-3">
            <p class="text-sm font-bold text-indigo-700 dark:text-indigo-300 mb-1">🔹 Voltooid deelwoord</p>
            <p class="text-xs"><em>Hoofdzin:</em> Ik heb hem <strong>opgebeld</strong>.<br><em>Bijzin:</em> ...dat ik hem <strong>opgebeld heb</strong>.</p>
          </div>
          <div class="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-3">
            <p class="text-sm font-bold text-amber-700 dark:text-amber-300 mb-1">🔹 Modaal + scheidbaar</p>
            <p class="text-xs"><em>Hoofdzin:</em> Ik moet je <strong>opbellen</strong>.<br><em>Bijzin:</em> ...dat ik je moet <strong>opbellen</strong>.</p>
          </div>
        </div>
        <div class="bg-rose-50 dark:bg-rose-900/20 border border-rose-200 dark:border-rose-800 rounded-lg p-4 my-4">
          <p class="font-bold text-rose-700 dark:text-rose-300 mb-1">⚠️ PAS OP 2: NOOIT splitsen in de bijzin</p>
          <p class="text-sm text-slate-700 dark:text-slate-300 mt-1">
            ❌ <em>...dat ik hem op bel.</em><br>
            ✅ <em>...dat ik hem <strong>opbel</strong>.</em><br>
            Regel: Voegwoord → ... → scheidbaar ww als <strong>één woord</strong> helemaal achteraan.
          </p>
        </div>
      `
    },
    {
      title: "Deel 7: Onderschikkend vs. Nevenschikkend (Omdat vs. Want) 🚦",
      body: `
        <p>Niet elk verbindingswoord maakt een bijzin. Dit onderscheid bepaalt of het werkwoord achteraan gaat of op plek 2 blijft.</p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-indigo-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Type voegwoord</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Woorden</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Werkwoordpositie</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Voorbeeld</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">Onderschikkend</td>
                <td class="px-4 py-3 text-sm">omdat, doordat, dat, als, wanneer, hoewel, zodat, terwijl</td>
                <td class="px-4 py-3 text-sm text-emerald-600">HELEMAAL ACHTERAAN (SOV)</td>
                <td class="px-4 py-3 text-sm">...omdat hij ziek <strong>is</strong>.</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30">
                <td class="px-4 py-3 text-sm font-semibold">Nevenschikkend</td>
                <td class="px-4 py-3 text-sm">en, maar, want, dus, of</td>
                <td class="px-4 py-3 text-sm text-rose-600">PLAATS 2 (SVO) – HOOFDZIN!</td>
                <td class="px-4 py-3 text-sm">...want hij <strong>is</strong> ziek.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-400 p-4 my-4">
          <p class="font-bold text-amber-800 dark:text-amber-200 mb-1">⚠️ PAS OP 3: Het 'Want'-Struikelblok</p>
          <p class="text-sm text-slate-700 dark:text-slate-300 mt-1">
            <em>Want</em> lijkt op <em>omdat</em>, maar het gedraagt zich als <em>en/maar</em>. Het verbindt twee <strong>hoofdzinnen</strong>.<br>
            ❌ <em>Ik blijf thuis, want ik ben moe ben.</em><br>
            ✅ <em>Ik blijf thuis, <strong>want</strong> ik <strong>ben</strong> moe.</em> (V2 blijft!)<br>
            ✅ <em>Ik blijf thuis, <strong>omdat</strong> ik moe <strong>ben</strong>.</em> (SOV gaat achteraan)<br>
            Onthoud: <em>Want</em> = zin blijft hoofdzin. <em>Omdat</em> = zin wordt bijzin.
          </p>
        </div>
      `
    },
    {
      title: "Deel 8: Relatieve bijzinnen & Geneste constructies 🔗🌪️",
      body: `
        <p>Relatieve bijzinnen beginnen met <strong>die</strong> (de-woorden) of <strong>dat</strong> (het-woorden). Ze volgen strikt SOV, maar het voegwoord fungeert vaak ook als zinsdeel.</p>
        <div class="grid md:grid-cols-2 gap-4 my-4">
          <div class="bg-white dark:bg-slate-800/50 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
            <h4 class="font-bold text-emerald-700 dark:text-emerald-300 mb-2">🔹 Als relatief vw = Onderwerp</h4>
            <p class="text-sm text-slate-700 dark:text-slate-300 mb-2">Het voegwoord staat direct voor het werkwoord.</p>
            <p class="text-sm italic">De man <strong>die</strong> daar <strong>staat</strong>, is mijn oom.</p>
          </div>
          <div class="bg-white dark:bg-slate-800/50 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
            <h4 class="font-bold text-indigo-700 dark:text-indigo-300 mb-2">🔹 Als relatief vw = Voorwerp</h4>
            <p class="text-sm text-slate-700 dark:text-slate-300 mb-2">Er komt nog een onderwerp tussen.</p>
            <p class="text-sm italic">Het boek <strong>dat</strong> ik <strong>lees</strong>, is spannend.</p>
          </div>
        </div>
        <h3 class="text-lg font-bold mt-4 mb-2">🌪️ Geneste Bijzinnen (Zin in een zin)</h3>
        <p class="text-sm text-slate-700 dark:text-slate-300 mb-2">Elke bijzin heeft <strong>zijn eigen</strong> werkwoordelijke eindgroep. Ze nestelen zich als Russische poppen.</p>
        <div class="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 rounded-lg p-4 my-4">
          <p class="text-sm font-mono bg-white dark:bg-slate-900 p-3 rounded mb-2">...omdat ik denk dat zij heeft gezegd dat hij zou komen.</p>
          <ul class="space-y-1 text-sm">
            <li>• Hoofdzin: Ik denk...</li>
            <li>• Bijzin 1: <em>...omdat ik denk</em> → <strong>denk</strong> (achteraan in deze clause)</li>
            <li>• Bijzin 2: <em>...dat zij heeft gezegd</em> → <strong>heeft gezegd</strong> (cluster achteraan)</li>
            <li>• Bijzin 3: <em>...dat hij zou komen</em> → <strong>zou komen</strong> (hele einde)</li>
          </ul>
        </div>
      `
    },
    {
      title: "Deel 9: Het Ultieme Beslisalgoritme (4 stappen) 🗺️",
      body: `
        <p>Twijfel je over de volgorde? Doorloop dit stappenplan van 5 seconden:</p>
        <div class="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 rounded-lg p-4 my-4">
          <p class="font-bold text-indigo-800 dark:text-indigo-200 mb-2">🎯 Stap 1: Hoofdzin of Bijzin?</p>
          <p class="text-sm text-slate-700 dark:text-slate-300">Begint het met <em>omdat, dat, als, hoewel, terwijl</em>? → <strong>BIJZIN (SOV)</strong>. Begint het met <em>want, maar, en, dus</em>? → <strong>HOOFDZIN (V2)</strong>.</p>
        </div>
        <div class="grid md:grid-cols-2 gap-4 my-4">
          <div class="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-lg p-4">
            <h4 class="font-bold text-emerald-700 dark:text-emerald-300 mb-2">🔹 Stap 2: Tel de werkwoorden</h4>
            <ul class="space-y-1 text-sm">
              <li>• 1 ww → Zet het achteraan.</li>
              <li>• 2+ ww → Bouw het finaalcluster (Stap 3).</li>
              <li>• Scheidbaar? → Schrijf aaneen achteraan.</li>
            </ul>
          </div>
          <div class="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
            <h4 class="font-bold text-amber-700 dark:text-amber-300 mb-2">🔹 Stap 3: Cluster volgorde</h4>
            <ul class="space-y-1 text-sm">
              <li>• Voltooid? → <strong>VTD + Hulpww</strong></li>
              <li>• Modaal? → <strong>Modaal + Inf</strong></li>
              <li>• Beide? → <strong>Hulp + Inf + Inf</strong></li>
              <li>• IPP? → <strong>Hulp + zien/horen + Inf</strong></li>
            </ul>
          </div>
        </div>
        <div class="bg-rose-50 dark:bg-rose-900/20 border border-rose-200 dark:border-rose-800 rounded-lg p-4 my-4">
          <p class="font-bold text-rose-700 dark:text-rose-300 mb-1">🔹 Stap 4: Check het middenveld</p>
          <p class="text-sm text-slate-700 dark:text-slate-300 mt-1">Tijd → Plaats → Voorwerpen → Manier. Werkwoorden <strong>nooit</strong> tussendoor schuiven. Alles vóór het cluster.</p>
        </div>
      `
    },
    {
      title: "Deel 10: Snelle Herhaling – Alles op Één Pagina ⚡",
      body: `
        <ul class="my-2 space-y-2 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-['✅'] before:absolute before:left-0 before:top-[0.4rem] text-slate-700 dark:text-slate-300"><strong>SOV-regel:</strong> In een bijzin staat de persoonsvorm ALTIJD helemaal achteraan.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-['✅'] before:absolute before:left-0 before:top-[0.4rem] text-slate-700 dark:text-slate-300"><strong>Formule:</strong> Voegwoord + Onderwerp + Middenveld + Werkwoordcluster.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-['✅'] before:absolute before:left-0 before:top-[0.4rem] text-slate-700 dark:text-slate-300"><strong>Voltooid:</strong> VTD schuift naar links van hulpww (gelezen heb, niet heb gelezen).</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-['✅'] before:absolute before:left-0 before:top-[0.4rem] text-slate-700 dark:text-slate-300"><strong>Scheidbaar:</strong> NOOIT splitsen. Altijd aaneen achteraan (opbelt, opgebeld heb).</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-['✅'] before:absolute before:left-0 before:top-[0.4rem] text-slate-700 dark:text-slate-300"><strong>Cluster:</strong> Hulpwerkwoorden vóór hoofdwerkwoorden (heeft moeten werken).</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-['✅'] before:absolute before:left-0 before:top-[0.4rem] text-slate-700 dark:text-slate-300"><strong>IPP:</strong> zien/horen/modaal in voltooid → gebruik infinitief, geen deelwoord.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-['⚠️'] before:absolute before:left-0 before:top-[0.4rem] text-slate-700 dark:text-slate-300"><strong>Want:</strong> nevenschikkend → blijft SVO (werkwoord op 2).</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-['⚠️'] before:absolute before:left-0 before:top-[0.4rem] text-slate-700 dark:text-slate-300"><strong>Omdat:</strong> onderschikkend → wordt SOV (werkwoord achteraan).</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-['🌪️'] before:absolute before:left-0 before:top-[0.4rem] text-slate-700 dark:text-slate-300"><strong>Genest:</strong> Elke bijzin heeft eigen cluster. Werkwoorden nestelen zich van buiten naar binnen.</li>
        </ul>
      `
    }
  ],
  rulesTable: [
    {
      rule: "Bijzin = SOV",
      structure: "Persoonsvorm staat ALTIJD helemaal achteraan, na alle andere zinsdelen.",
      example: "...omdat Jan het boek leest. • ...dat ik morgen kom.",
      usage: "Check eerst of het een bijzin is (omdat/dat/als). Zo ja: werkwoord naar einde."
    },
    {
      rule: "Voltooide tijd volgorde",
      structure: "Voltooid deelwoord (VTD) staat VÓÓR het hulpwerkwoord.",
      example: "...dat ik het boek gelezen heb. • ...dat zij gegaan is.",
      usage: "Draai de hoofdzinvolgorde om: hulpww vóór VTD → VTD vóór hulpww."
    },
    {
      rule: "Finaalcluster opbouw",
      structure: "Hulpww (hebben/zijn/zullen) → Modaal (moeten/kunnen) → Hoofdww (inf/VTD).",
      example: "...dat hij heeft moeten werken. • ...dat hij zal komen.",
      usage: "Van links naar rechts: tijd → modaliteit → hoofdactie."
    },
    {
      rule: "IPP-effect",
      structure: "Bij zien/horen/voelen of modaal + voltooid: gebruik infinitief, geen deelwoord.",
      example: "...dat ik hem heb zien lopen. • ...dat hij heeft kunnen komen.",
      usage: "Geen 'gezien/gemoeten/gekunnen'. Altijd infinitief in de cluster."
    },
    {
      rule: "Scheidbaar in bijzin",
      structure: "Wordt NIET gesplitst. Schrijf aaneen achteraan.",
      example: "...dat ik hem opbel. • ...dat ik hem opgebeld heb.",
      usage: "Voegwoord → middenveld → scheidbaar ww (één woord)."
    },
    {
      rule: "Want vs Omdat",
      structure: "Want = nevenschikkend (SVO, werkwoord op 2). Omdat = onderschikkend (SOV, werkwoord achteraan).",
      example: "...want hij is ziek. • ...omdat hij ziek is.",
      usage: "Wil het werkwoord achteraan? Gebruik omdat/doordat. Blijft het op 2? Gebruik want."
    }
  ],
  callouts: [
    { type: "remember", label: "⚠️ PAS OP 1", text: "In bijzin: werkwoord ALTIJD achteraan. 'Omdat Jan leest het boek' is Engels/fout." },
    { type: "remember", label: "⚠️ PAS OP 2", text: "Voltooid deelwoord vóór hulpwerkwoord: 'gelezen heb', NOOIT 'heb gelezen'." },
    { type: "remember", label: "⚠️ PAS OP 3", text: "Scheidbare werkwoorden worden in bijzin NOOIT gesplitst. Altijd aaneen: 'opbel'." },
    { type: "remember", label: "⚠️ PAS OP 4", text: "IPP-effect: zie/hoor/modaal in voltooid → gebruik infinitief. 'heb zien lopen', niet 'gezien'." },
    { type: "remember", label: "⚠️ PAS OP 5", text: "WANT is geen bijzinmaker! 'Want hij is moe' (SVO). 'Omdat hij moe is' (SOV)." },
    { type: "remember", label: "⚠️ PAS OP 6", text: "Geneste bijzinnen: elke bijzin heeft zijn eigen werkwoordcluster. Nestel van buiten naar binnen." },
    { type: "tip", label: "💡 Pro-tip", text: "Twijfel je? Vraag: 'Begint het met omdat/dat/als?' → Ja = werkwoord naar einde. Nee (want/maar/en) = werkwoord op plek 2." }
  ],
  commonMistakes: [
    { incorrect: "...omdat Jan leest het boek.", correct: "...omdat Jan het boek leest.", explanation: "In een bijzin moet de persoonsvorm helemaal achteraan staan, na het lijdend voorwerp." },
    { incorrect: "...dat ik het boek heb gelezen.", correct: "...dat ik het boek gelezen heb.", explanation: "In Nederlandse bijzinnen staat het voltooid deelwoord vóór het hulpwerkwoord." },
    { incorrect: "...dat ik hem op bel.", correct: "...dat ik hem opbel.", explanation: "Scheidbare werkwoorden worden in bijzinnen niet gesplitst. Ze worden aaneengeschreven achteraan." },
    { incorrect: "...dat ik hem heb gezien lopen.", correct: "...dat ik hem heb zien lopen.", explanation: "IPP-effect: na een voltooid hulpwerkwoord krijgen zien/horen/modale ww geen -ge-, maar blijven infinitief." },
    { incorrect: "...want ik ben moe ben.", correct: "...want ik ben moe.", explanation: "Want is nevenschikkend. Het werkwoord blijft op de tweede plaats, het wordt niet naar het einde geschoven." },
    { incorrect: "...omdat hij heeft moeten werken.", correct: "...omdat hij heeft moeten werken.", explanation: "Let op: in bijzin is 'heeft moeten werken' correct. Fout zou zijn 'heeft gemoeten werken' (geen IPP) of 'moeten werken heeft' (volgorde fout)." }
  ],
  review: [
    "✅ Bijzin = SOV: werkwoord altijd helemaal achteraan.",
    "✅ Voltooide tijd: VTD vóór hulpwerkwoord (...dat ik gelezen heb).",
    "✅ Finaalcluster: Hulp → Modaal → Hoofdww (...dat hij heeft moeten werken).",
    "✅ IPP-effect: zien/horen/modaal + voltooid → infinitief (...heb zien lopen).",
    "✅ Scheidbaar in bijzin: altijd aaneen (...dat ik opbel).",
    "✅ Want = SVO (hoofdzin). Omdat = SOV (bijzin).",
    "✅ Geneste bijzinnen: elke bijzin heeft eigen cluster, werkwoorden nestelen.",
    "✅ Middenveld: tijd → plaats → voorwerpen → manier → werkwoorden."
  ],
  qa: [
    {
      question: "Zet deze hoofdzin om in een bijzin met 'omdat': Jan leest het boek.",
      answer: "...omdat Jan het boek leest. Uitleg: Hoofdzin SVO wordt bijzin SOV. Het werkwoord 'leest' verhuist naar het einde, na het lijdend voorwerp 'het boek'."
    },
    {
      question: "Maak een bijzin met 'dat' van: Ik bel mijn moeder op.",
      answer: "...dat ik mijn moeder opbel. Uitleg: In de bijzin wordt 'opbellen' aaneengeschreven en staat het hele woord achteraan. Nooit splitsen."
    },
    {
      question: "Zet om: Ik heb het boek al gelezen. -> bijzin met 'dat'.",
      answer: "...dat ik het boek al gelezen heb. Uitleg: In de bijzin draait de volgorde van voltooide tijd om: voltooid deelwoord gaat vóór hulpwerkwoord."
    },
    {
      question: "Waarom is 'Ik blijf thuis, want ik ben moe ben' fout? Wat is correct?",
      answer: "Ik blijf thuis, want ik ben moe. Uitleg: 'Want' is een nevenschikkend voegwoord. Het verbindt twee hoofdzinnen, dus blijft de V2-regel gelden. Het werkwoord 'ben' staat op plek 2, niet achteraan. Alleen bij 'omdat' of 'doordat' gaat het werkwoord naar het einde."
    },
    {
      question: "Maak een bijzin: Ik heb hem zien lopen. (gebruik 'dat')",
      answer: "...dat ik hem heb zien lopen. Uitleg: IPP-effect. In de voltooide tijd met 'zien' blijft het tweede werkwoord in infinitief-vorm. Geen 'gezien' gebruiken."
    },
    {
      question: "Zet deze hoofdzin om: Zij zal het boek moeten lezen. -> bijzin met 'omdat'.",
      answer: "...omdat zij het boek zal moeten lezen. Uitleg: Volgorde in finaalcluster: vervoegd hulpwerkwoord (zal) + modaal infinitief (moeten) + hoofdinfinitief (lezen)."
    },
    {
      question: "Maak één zin van: Ik denk iets. Hij komt morgen. Hij is ziek.",
      answer: "Ik denk dat hij morgen komt omdat hij ziek is. Uitleg: Eerste bijzin start met 'dat', werkwoord 'komt' achteraan. Tweede bijzin start met 'omdat', werkwoord 'is' achteraan. Twee bijzinnen, twee werkwoorden op het einde van hun eigen clause."
    }
  ]
};