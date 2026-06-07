import type { GrammarLesson } from "../../types";

export const scheidbareWerkwoorden: GrammarLesson = {
  id: "nl-scheidbarewerkwoorden-1",
  title: "Scheidbare Werkwoorden: Aankomen, Opbellen, Meenemen – De Complete Gids",
  level: 2,
  topic: "Scheidbare werkwoorden", // [G] Grammatica
  body: "Meester scheidbare werkwoorden: hoe ze splitsen, hoe ze vervoegen, en hoe je ze foutloos gebruikt in elke zin.",
  overview:
    "Scheidbare werkwoorden zijn overal in het Nederlands: aankomen, opbellen, meenemen, uitstappen. In deze allesomvattende les leer je stap voor stap hoe ze werken: de splitsingsregel in hoofdzinnen, de samenvoeging in bijzinnen, de vorming van het voltooid deelwoord (opgebeld), de te-infinitief (op te bellen), combinaties met modale werkwoorden, en de valkuilen zoals werkwoorden die zowel scheidbaar als onscheidbaar kunnen zijn. Met kristalheldere tabellen, 90+ voorbeeldzinnen, visuele PAS OP-signalen en 7 doordachte oefenvragen beheers jij scheidbare werkwoorden voortaan 100% foutloos.",
  anchorSectionId: "wat",
  exercises: [],
  timeExpressionsLabel: "Scheidbare werkwoorden in één oogopslag: de 6 kernregels 🎯",
  timeExpressions: {
    header: "Situatie | Vorm | Voorbeeld",
    rows: [
      ["🔀 Hoofdzin", "stam ... voorvoegsel", "Ik bel je op."],
      ["🔗 Bijzin", "voegwoord ... voorvoegsel+stam", "...omdat ik je opbel."],
      ["🏗️ Voltooid deelwoord", "voorvoegsel+ge+stam", "opgebeld, aangekomen"],
      ["🧠 Te + infinitief", "voorvoegsel+te+stam", "op te bellen, aan te komen"],
      ["⚙️ Met modaal werkwoord", "modaal ... hele infinitief", "Ik kan je opbellen."],
      ["⚠️ Dubbelzinnige werkwoorden", "klemtoon bepaalt", "voorkómen vs. vóórkomen"],
    ],
  },
  details: [
    {
      title: "Wat zijn scheidbare werkwoorden? 🎯 De basis in 3 zinnen",
      body: `
        <p><strong>Scheidbare werkwoorden</strong> bestaan uit twee delen: een <strong>voorvoegsel</strong> (meestal een voorzetsel of bijwoord) en een <strong>werkwoord</strong>. In de infinitief schrijf je ze aan elkaar: <em>aankomen, opbellen, meenemen</em>.</p>
        <div class="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-lg p-4 my-4">
          <p class="font-semibold text-emerald-800 dark:text-emerald-200 mb-2">✅ Drie kernfeiten:</p>
          <ol class="list-decimal list-inside space-y-1 text-slate-700 dark:text-slate-300">
            <li>In de <strong>hoofdzin</strong> splitsen ze: het voorvoegsel gaat <strong>achteraan</strong>.</li>
            <li>In de <strong>bijzin</strong> blijven ze <strong>aaneen</strong> en staan achteraan.</li>
            <li>Het <strong>voltooid deelwoord</strong> krijgt <em>-ge-</em> <strong>tussen</strong> voorvoegsel en stam.</li>
          </ol>
        </div>
        <p><span class="font-bold text-indigo-700 dark:text-indigo-300">Waarom is dit belangrijk?</span> Fouten met scheidbare werkwoorden vallen direct op. Wie de regels beheerst, schrijft en spreekt natuurlijker, vloeiender en foutloos Nederlands.</p>
      `,
    },
    {
      title: "1. De hoofdzin: de splitsingsregel 🔀",
      body: `
        <p>In een mededelende hoofdzin staat de persoonsvorm op de <strong>tweede plaats</strong>. Het scheidbare voorvoegsel <strong>splitst zich af</strong> en komt <strong>helemaal achteraan</strong> in de zin.</p>
        
        <div class="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 rounded-lg p-4 my-4">
          <p class="font-semibold text-indigo-800 dark:text-indigo-200 mb-2">📐 De formule:</p>
          <p class="text-slate-700 dark:text-slate-300 font-mono text-sm">Onderwerp – persoonsvorm – rest van de zin – VOORVOEGSEL</p>
        </div>
        
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-emerald-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Infinitief</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Hoofdzin ✅</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Fout ❌</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">aankomen</td>
                <td class="px-4 py-3 text-sm">De trein <strong>komt</strong> om tien uur <strong>aan</strong>.</td>
                <td class="px-4 py-3 text-sm text-rose-600"><em>De trein aankomt...</em></td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">opbellen</td>
                <td class="px-4 py-3 text-sm">Ik <strong>bel</strong> mijn moeder <strong>op</strong>.</td>
                <td class="px-4 py-3 text-sm text-rose-600"><em>Ik opbel mijn moeder.</em></td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">meenemen</td>
                <td class="px-4 py-3 text-sm"><strong>Neem</strong> jij de boodschappen <strong>mee</strong>?</td>
                <td class="px-4 py-3 text-sm text-rose-600"><em>Meeneem jij...?</em></td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">opstaan</td>
                <td class="px-4 py-3 text-sm">Hij <strong>staat</strong> elke ochtend om zeven uur <strong>op</strong>.</td>
                <td class="px-4 py-3 text-sm text-rose-600"><em>Hij opstaat elke ochtend...</em></td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50">
                <td class="px-4 py-3 text-sm font-semibold">voorlezen</td>
                <td class="px-4 py-3 text-sm">Opa <strong>leest</strong> de kinderen een verhaaltje <strong>voor</strong>.</td>
                <td class="px-4 py-3 text-sm text-rose-600"><em>Opa voorleest de kinderen...</em></td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div class="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-400 p-4 my-4">
          <p class="font-semibold text-amber-800 dark:text-amber-200">⚠️ PAS OP: Het voorvoegsel staat ALTĲD achteraan</p>
          <p class="text-sm text-slate-700 dark:text-slate-300 mt-1">
            Zelfs als de zin heel lang is, blijft het voorvoegsel op de allerlaatste plek. Alle andere zinsdelen (lijdend voorwerp, bijwoorden, tijdsbepalingen) komen vóór het voorvoegsel.<br><br>
            ✅ <em>Zij belde haar oude vriendin van vroeger na jaren eindelijk weer eens op.</em><br>
            ❌ <em>Zij opbelde haar oude vriendin...</em>
          </p>
        </div>
      `,
    },
    {
      title: "2. Inversie: ander zinsdeel voorop 🔄",
      body: `
        <p>Als de hoofdzin begint met een ander zinsdeel dan het onderwerp (bijvoorbeeld een tijdsbepaling of plaatsbepaling), dan wisselen onderwerp en persoonsvorm van plek. Het voorvoegsel blijft <strong>achteraan</strong>.</p>
        
        <div class="grid md:grid-cols-2 gap-4 my-4">
          <div class="bg-white dark:bg-slate-800/50 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
            <h4 class="font-bold text-emerald-700 dark:text-emerald-300 mb-2">📅 Tijdsbepaling voorop</h4>
            <ul class="space-y-2 text-sm">
              <li class="flex items-start"><span class="text-emerald-500 mr-2">✅</span><span><strong>Morgen</strong> komt de trein om tien uur aan.</span></li>
              <li class="flex items-start"><span class="text-emerald-500 mr-2">✅</span><span><strong>Gisteren</strong> belde ik mijn moeder op.</span></li>
              <li class="flex items-start"><span class="text-rose-500 mr-2">❌</span><span class="text-rose-600"><em>Morgen de trein komt aan.</em></span></li>
            </ul>
          </div>
          
          <div class="bg-white dark:bg-slate-800/50 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
            <h4 class="font-bold text-emerald-700 dark:text-emerald-300 mb-2">📍 Plaatsbepaling voorop</h4>
            <ul class="space-y-2 text-sm">
              <li class="flex items-start"><span class="text-emerald-500 mr-2">✅</span><span><strong>Hier</strong> stappen we uit.</span></li>
              <li class="flex items-start"><span class="text-emerald-500 mr-2">✅</span><span><strong>Thuis</strong> ruim ik altijd op.</span></li>
              <li class="flex items-start"><span class="text-rose-500 mr-2">❌</span><span class="text-rose-600"><em>Hier we stappen uit.</em></span></li>
            </ul>
          </div>
        </div>
        
        <div class="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 rounded-lg p-4 my-4">
          <p class="font-semibold text-indigo-800 dark:text-indigo-200 mb-2">🧠 Ezelsbruggetje voor inversie:</p>
          <p class="text-sm text-slate-700 dark:text-slate-300">
            <strong>"STOVIN"</strong> → <em>S</em>tam, <em>T</em>egenwoordige tijd, <em>O</p>dracht, <em>V</p>ragen, <em>I</em>nversie, <em>N</p>egatie: bij al deze situaties wisselen onderwerp en persoonsvorm, maar het voorvoegsel blijft achteraan!
          </p>
        </div>
      `,
    },
    {
      title: "3. De bijzin: weer aaneen 🔗",
      body: `
        <p>In een <strong>bijzin</strong> (ingeleid door een voegwoord zoals <em>omdat, dat, als, terwijl</em>) verhuizen <strong>alle werkwoorden naar het einde</strong> van de zin. Het scheidbare voorvoegsel en de stam worden <strong>weer aan elkaar geschreven</strong>.</p>
        
        <div class="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-lg p-4 my-4">
          <p class="font-semibold text-emerald-800 dark:text-emerald-200 mb-2">📐 De formule voor bijzinnen:</p>
          <p class="text-slate-700 dark:text-slate-300 font-mono text-sm">Voegwoord – onderwerp – rest – VOORVOEGSEL+STAM</p>
        </div>
        
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-indigo-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Hoofdzin</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Bijzin ✅</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Voegwoord</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm">De trein <strong>komt</strong> aan.</td>
                <td class="px-4 py-3 text-sm">...omdat de trein <strong>aankomt</strong>.</td>
                <td class="px-4 py-3 text-sm text-xs">omdat</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm">Ik <strong>bel</strong> hem <strong>op</strong>.</td>
                <td class="px-4 py-3 text-sm">...dat ik hem <strong>opbel</strong>.</td>
                <td class="px-4 py-3 text-sm text-xs">dat</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm">We <strong>stappen</strong> hier <strong>uit</strong>.</td>
                <td class="px-4 py-3 text-sm">...als we hier <strong>uitstappen</strong>.</td>
                <td class="px-4 py-3 text-sm text-xs">als</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm"><strong>Neem</strong> je iets <strong>mee</strong>?</td>
                <td class="px-4 py-3 text-sm">...of je iets <strong>meeneemt</strong>.</td>
                <td class="px-4 py-3 text-sm text-xs">of</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50">
                <td class="px-4 py-3 text-sm">Hij <strong>staat</strong> vroeg <strong>op</strong>.</td>
                <td class="px-4 py-3 text-sm">...hoewel hij vroeg <strong>opstaat</strong>.</td>
                <td class="px-4 py-3 text-sm text-xs">hoewel</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div class="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-400 p-4 my-4">
          <p class="font-semibold text-amber-800 dark:text-amber-200">⚠️ PAS OP: Volgorde in de bijzin</p>
          <p class="text-sm text-slate-700 dark:text-slate-300 mt-1">
            In bijzinnen met meerdere werkwoorden (bijv. met een modaal werkwoord) staat de infinitief van het scheidbare werkwoord <strong>vóór</strong> het modale werkwoord:<br><br>
            ✅ <em>...omdat ik je morgen kan opbellen.</em><br>
            ❌ <em>...omdat ik je morgen opbellen kan.</em>
          </p>
        </div>
      `,
    },
    {
      title: "4. Het voltooid deelwoord: voorvoegsel + ge + stam 🏗️",
      body: `
        <p>Het voltooid deelwoord van een scheidbaar werkwoord maak je door <strong>-ge-</strong> <strong>tussen</strong> het voorvoegsel en de stam te zetten. Het voorvoegsel blijft voorop staan. De uitgang (-d, -t of -en) volgt de normale regels voor zwakke, sterke en onregelmatige werkwoorden.</p>
        
        <div class="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 rounded-lg p-4 my-4">
          <p class="font-semibold text-indigo-800 dark:text-indigo-200 mb-2">📐 De formule:</p>
          <p class="text-slate-700 dark:text-slate-300 font-mono text-sm">VOORVOEGSEL + ge + STAM (+ d/t/en)</p>
        </div>
        
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-emerald-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Infinitief</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Voltooid deelwoord</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Opbouw</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">opbellen</td>
                <td class="px-4 py-3 text-sm">op<strong>ge</strong>beld</td>
                <td class="px-4 py-3 text-sm text-xs">op + ge + bel + d</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">aankomen</td>
                <td class="px-4 py-3 text-sm">aan<strong>ge</strong>komen</td>
                <td class="px-4 py-3 text-sm text-xs">aan + ge + kom + en</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">meenemen</td>
                <td class="px-4 py-3 text-sm">mee<strong>ge</strong>nomen</td>
                <td class="px-4 py-3 text-sm text-xs">mee + ge + nom + en</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">uitstappen</td>
                <td class="px-4 py-3 text-sm">uit<strong>ge</strong>stapt</td>
                <td class="px-4 py-3 text-sm text-xs">uit + ge + stap + t</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">opruimen</td>
                <td class="px-4 py-3 text-sm">op<strong>ge</strong>ruimd</td>
                <td class="px-4 py-3 text-sm text-xs">op + ge + ruim + d</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30">
                <td class="px-4 py-3 text-sm font-semibold">nadenken</td>
                <td class="px-4 py-3 text-sm">na<strong>ge</strong>dacht</td>
                <td class="px-4 py-3 text-sm text-xs">na + ge + dacht (sterk ww.)</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div class="grid md:grid-cols-2 gap-4 my-4">
          <div class="bg-white dark:bg-slate-800/50 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
            <h4 class="font-bold text-emerald-700 dark:text-emerald-300 mb-2">📝 Hoofdzin met voltooide tijd</h4>
            <ul class="space-y-2 text-sm">
              <li>• Ik <strong>heb</strong> hem <strong>opgebeld</strong>.</li>
              <li>• De trein <strong>is</strong> <strong>aangekomen</strong>.</li>
              <li>• Zij <strong>heeft</strong> de kinderen <strong>meegenomen</strong>.</li>
            </ul>
          </div>
          
          <div class="bg-white dark:bg-slate-800/50 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
            <h4 class="font-bold text-emerald-700 dark:text-emerald-300 mb-2">📝 Bijzin met voltooide tijd</h4>
            <ul class="space-y-2 text-sm">
              <li>• ...omdat ik hem <strong>heb opgebeld</strong>.</li>
              <li>• ...dat de trein <strong>is aangekomen</strong>.</li>
              <li>• ...terwijl zij de kinderen <strong>heeft meegenomen</strong>.</li>
            </ul>
          </div>
        </div>
        
        <div class="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-400 p-4 my-4">
          <p class="font-semibold text-amber-800 dark:text-amber-200">⚠️ PAS OP: Geen -ge- bij onscheidbare werkwoorden</p>
          <p class="text-sm text-slate-700 dark:text-slate-300 mt-1">
            Werkwoorden met onscheidbare voorvoegsels (be-, ge-, her-, er-, ver-, ont-) krijgen <strong>geen</strong> -ge- in het voltooid deelwoord:<br><br>
            ✅ scheidbaar: <em>opgebeld, aangekomen</em><br>
            ✅ onscheidbaar: <em>betaald, gehoord, herkend, verstaan</em><br>
            ❌ fout: <em>gebetaald, geherkend</em>
          </p>
        </div>
      `,
    },
    {
      title: "5. Te + infinitief: voorvoegsel + te + stam 🧠",
      body: `
        <p>Als een scheidbaar werkwoord in de constructie met <strong>te + infinitief</strong> staat, dan komt <strong>te</strong> <strong>tussen</strong> het voorvoegsel en de stam. Het geheel wordt als één woordgroep geschreven, maar bestaat uit drie losse delen.</p>
        
        <div class="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 rounded-lg p-4 my-4">
          <p class="font-semibold text-indigo-800 dark:text-indigo-200 mb-2">📐 De formule:</p>
          <p class="text-slate-700 dark:text-slate-300 font-mono text-sm">VOORVOEGSEL + te + STAM</p>
        </div>
        
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-emerald-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Infinitief</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Te + infinitief</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Voorbeeldzin</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">opbellen</td>
                <td class="px-4 py-3 text-sm">op te bellen</td>
                <td class="px-4 py-3 text-sm">Ik vergeet hem <strong>op te bellen</strong>.</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">aankomen</td>
                <td class="px-4 py-3 text-sm">aan te komen</td>
                <td class="px-4 py-3 text-sm">De trein lijkt <strong>aan te komen</strong>.</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">meenemen</td>
                <td class="px-4 py-3 text-sm">mee te nemen</td>
                <td class="px-4 py-3 text-sm">Zij beloofde iets <strong>mee te nemen</strong>.</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">uitstappen</td>
                <td class="px-4 py-3 text-sm">uit te stappen</td>
                <td class="px-4 py-3 text-sm">Het is lastig <strong>uit te stappen</strong>.</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50">
                <td class="px-4 py-3 text-sm font-semibold">opruimen</td>
                <td class="px-4 py-3 text-sm">op te ruimen</td>
                <td class="px-4 py-3 text-sm">Hij probeert zijn kamer <strong>op te ruimen</strong>.</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div class="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-400 p-4 my-4">
          <p class="font-semibold text-amber-800 dark:text-amber-200">⚠️ PAS OP: Plaatsing in de zin</p>
          <p class="text-sm text-slate-700 dark:text-slate-300 mt-1">
            De <em>te</em>-groep staat in de hoofdzin achteraan, net zoals een voltooid deelwoord:<br><br>
            ✅ <em>Ik vergeet elke dag mijn moeder op te bellen.</em><br><br>
            In de bijzin verhuist de persoonsvorm naar achteren, en de <em>te</em>-groep blijft bij elkaar:<br><br>
            ✅ <em>...omdat ik elke dag vergeet mijn moeder op te bellen.</em>
          </p>
        </div>
      `,
    },
    {
      title: "6. Met modale werkwoorden: hele infinitief achteraan ⚙️",
      body: `
        <p>Bij combinaties met modale werkwoorden (kunnen, moeten, mogen, willen, zullen) en met <strong>gaan, komen, laten, blijven</strong> gebruik je de <strong>infinitief</strong> van het scheidbare werkwoord. Die infinitief is <strong>één woord</strong> en staat <strong>achteraan</strong> in de hoofdzin.</p>
        
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-indigo-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Modaal + scheidbaar</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Voorbeeldzin ✅</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Fout ❌</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm">kunnen + opbellen</td>
                <td class="px-4 py-3 text-sm">Ik <strong>kan</strong> je morgen <strong>opbellen</strong>.</td>
                <td class="px-4 py-3 text-sm text-rose-600"><em>kan op...bellen</em></td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm">moeten + aankomen</td>
                <td class="px-4 py-3 text-sm">De trein <strong>moet</strong> om tien uur <strong>aankomen</strong>.</td>
                <td class="px-4 py-3 text-sm text-rose-600"><em>moet aan...komen</em></td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm">willen + meenemen</td>
                <td class="px-4 py-3 text-sm">Hij <strong>wil</strong> iets <strong>meenemen</strong>.</td>
                <td class="px-4 py-3 text-sm text-rose-600"><em>wil mee...nemen</em></td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm">gaan + uitstappen</td>
                <td class="px-4 py-3 text-sm">We <strong>gaan</strong> hier <strong>uitstappen</strong>.</td>
                <td class="px-4 py-3 text-sm text-rose-600"><em>gaan uit...stappen</em></td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50">
                <td class="px-4 py-3 text-sm">blijven + doorwerken</td>
                <td class="px-4 py-3 text-sm">We <strong>blijven</strong> tot laat <strong>doorwerken</strong>.</td>
                <td class="px-4 py-3 text-sm text-rose-600"><em>blijven door...werken</em></td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div class="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-lg p-4 my-4">
          <p class="font-semibold text-emerald-800 dark:text-emerald-200 mb-2">📝 In de bijzin:</p>
          <p class="text-sm text-slate-700 dark:text-slate-300">
            In een bijzin verhuizen het modale werkwoord en de infinitief naar het einde. De infinitief (het scheidbare werkwoord) staat <strong>vóór</strong> het modale werkwoord:<br><br>
            ✅ <em>...omdat ik je morgen kan opbellen.</em><br>
            ✅ <em>...dat de trein om tien uur moet aankomen.</em>
          </p>
        </div>
      `,
    },
    {
      title: "7. Veelvoorkomende voorvoegsels en hun betekenis 📚",
      body: `
        <p>Scheidbare werkwoorden worden gevormd met een groot aantal voorvoegsels. Elk voorvoegsel geeft een bepaalde nuance aan de handeling.</p>
        
        <div class="grid md:grid-cols-2 gap-3 my-4">
          <div class="bg-white dark:bg-slate-800/50 rounded-lg p-3 border border-slate-200 dark:border-slate-700">
            <p class="font-semibold text-emerald-700 dark:text-emerald-300 text-sm mb-1">aan- → vastmaken, beginnen</p>
            <p class="text-xs text-slate-600 dark:text-slate-400">aankomen, aanzetten, aankleden</p>
          </div>
          <div class="bg-white dark:bg-slate-800/50 rounded-lg p-3 border border-slate-200 dark:border-slate-700">
            <p class="font-semibold text-emerald-700 dark:text-emerald-300 text-sm mb-1">af- → eraf, voltooien</p>
            <p class="text-xs text-slate-600 dark:text-slate-400">afmaken, afwassen, afstappen</p>
          </div>
          <div class="bg-white dark:bg-slate-800/50 rounded-lg p-3 border border-slate-200 dark:border-slate-700">
            <p class="font-semibold text-emerald-700 dark:text-emerald-300 text-sm mb-1">bij- → erbij, toevoegen</p>
            <p class="text-xs text-slate-600 dark:text-slate-400">bijvoegen, bijstaan, bijdragen</p>
          </div>
          <div class="bg-white dark:bg-slate-800/50 rounded-lg p-3 border border-slate-200 dark:border-slate-700">
            <p class="font-semibold text-emerald-700 dark:text-emerald-300 text-sm mb-1">door- → verder, doorheen</p>
            <p class="text-xs text-slate-600 dark:text-slate-400">doorwerken, doorlopen, doorbijten</p>
          </div>
          <div class="bg-white dark:bg-slate-800/50 rounded-lg p-3 border border-slate-200 dark:border-slate-700">
            <p class="font-semibold text-emerald-700 dark:text-emerald-300 text-sm mb-1">mee- → samen met</p>
            <p class="text-xs text-slate-600 dark:text-slate-400">meenemen, meegaan, meedoen</p>
          </div>
          <div class="bg-white dark:bg-slate-800/50 rounded-lg p-3 border border-slate-200 dark:border-slate-700">
            <p class="font-semibold text-emerald-700 dark:text-emerald-300 text-sm mb-1">op- → omhoog, volledig</p>
            <p class="text-xs text-slate-600 dark:text-slate-400">opstaan, opruimen, opmaken</p>
          </div>
          <div class="bg-white dark:bg-slate-800/50 rounded-lg p-3 border border-slate-200 dark:border-slate-700">
            <p class="font-semibold text-emerald-700 dark:text-emerald-300 text-sm mb-1">terug- → terug, naar oorsprong</p>
            <p class="text-xs text-slate-600 dark:text-slate-400">terugkomen, terugbellen, terugbrengen</p>
          </div>
          <div class="bg-white dark:bg-slate-800/50 rounded-lg p-3 border border-slate-200 dark:border-slate-700">
            <p class="font-semibold text-emerald-700 dark:text-emerald-300 text-sm mb-1">uit- → naar buiten, voltooien</p>
            <p class="text-xs text-slate-600 dark:text-slate-400">uitstappen, uitleggen, uitnodigen</p>
          </div>
          <div class="bg-white dark:bg-slate-800/50 rounded-lg p-3 border border-slate-200 dark:border-slate-700">
            <p class="font-semibold text-emerald-700 dark:text-emerald-300 text-sm mb-1">voor- → vooruit, ten behoeve van</p>
            <p class="text-xs text-slate-600 dark:text-slate-400">voorlezen, voorstellen, voornemen</p>
          </div>
          <div class="bg-white dark:bg-slate-800/50 rounded-lg p-3 border border-slate-200 dark:border-slate-700">
            <p class="font-semibold text-emerald-700 dark:text-emerald-300 text-sm mb-1">weg- → weggaan, verdwijnen</p>
            <p class="text-xs text-slate-600 dark:text-slate-400">weggaan, wegrennen, weghalen</p>
          </div>
        </div>
        
        <div class="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 rounded-lg p-4 my-4">
          <p class="font-semibold text-indigo-800 dark:text-indigo-200 mb-2">🧠 Leerstrategie:</p>
          <p class="text-sm text-slate-700 dark:text-slate-300">
            Leer scheidbare werkwoorden in groepjes per voorvoegsel. Maak voor elk voorvoegsel 3 voorbeeldzinnen. Zo onthoud je zowel de betekenis als de vorm!
          </p>
        </div>
      `,
    },
    {
      title: "8. Scheidbaar én onscheidbaar: de grote valkuil ⚠️",
      body: `
        <p>Een aantal werkwoorden heeft twee betekenissen: één met de klemtoon op het voorvoegsel (scheidbaar) en één met de klemtoon op de stam (onscheidbaar). Het verschil in klemtoon is hoorbaar, en de vervoeging is totaal anders.</p>
        
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-rose-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Werkwoord</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Scheidbaar ✅</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Onscheidbaar ✅</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">voorkomen</td>
                <td class="px-4 py-3 text-sm">Dat <strong>kómt</strong> vaak <strong>vóór</strong>. (gebeuren)</td>
                <td class="px-4 py-3 text-sm">Ik <strong>voorkóm</strong> dat probleem. (verhinderen)</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">overkomen</td>
                <td class="px-4 py-3 text-sm">De veerboot <strong>kómt</strong> morgen <strong>óver</strong>. (over water)</td>
                <td class="px-4 py-3 text-sm">Dat <strong>overkóm</strong> mij nooit. (gebeuren met)</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">ondergaan</td>
                <td class="px-4 py-3 text-sm">De zon <strong>gáát</strong> <strong>ónder</strong>. (zonsondergang)</td>
                <td class="px-4 py-3 text-sm">Hij <strong>ondergáát</strong> een operatie. (ondergaan)</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">doorlopen</td>
                <td class="px-4 py-3 text-sm">Hij <strong>lóópt</strong> gewoon <strong>dóór</strong>. (verder lopen)</td>
                <td class="px-4 py-3 text-sm">Zij <strong>doorlóópt</strong> de opleiding. (doorheen lopen)</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50">
                <td class="px-4 py-3 text-sm font-semibold">omhelzen</td>
                <td class="px-4 py-3 text-sm text-rose-600">– (altijd onscheidbaar)</td>
                <td class="px-4 py-3 text-sm">Zij <strong>omhélzen</strong> elkaar.</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div class="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-400 p-4 my-4">
          <p class="font-semibold text-amber-800 dark:text-amber-200 mb-2">🔍 Hoe herken je het verschil?</p>
          <ol class="list-decimal list-inside space-y-1 text-sm text-slate-700 dark:text-slate-300">
            <li><strong>Klemtoon</strong>: scheidbaar = klemtoon op voorvoegsel; onscheidbaar = klemtoon op stam.</li>
            <li><strong>Voltooid deelwoord</strong>: scheidbaar krijgt -ge- (voorgekomen); onscheidbaar niet (voorkomen → voorkomen).</li>
            <li><strong>Betekenis</strong>: scheidbaar = letterlijke richting/actie; onscheidbaar = figuurlijk/abstract.</li>
          </ol>
        </div>
      `,
    },
    {
      title: "9. Veelgemaakte fouten en PAS OP-situaties ❌ → ✅",
      body: `
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-rose-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Fout ❌</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Correct ✅</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Uitleg</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm"><em>Ik opbel hem morgen.</em></td>
                <td class="px-4 py-3 text-sm"><strong>Ik bel hem morgen op.</strong></td>
                <td class="px-4 py-3 text-sm text-xs">Persoonsvorm gesplitst; voorvoegsel achteraan.</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm"><em>...omdat ik hem opbel morgen.</em></td>
                <td class="px-4 py-3 text-sm"><strong>...omdat ik hem morgen opbel.</strong></td>
                <td class="px-4 py-3 text-sm text-xs">In bijzin: alle werkwoorden achteraan.</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm"><em>Ik heb hem ge-opbeld.</em></td>
                <td class="px-4 py-3 text-sm"><strong>Ik heb hem opgebeld.</strong></td>
                <td class="px-4 py-3 text-sm text-xs">Voltooid deelwoord: op + ge + beld (één woord).</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm"><em>Hij probeert opruimen.</em></td>
                <td class="px-4 py-3 text-sm"><strong>Hij probeert op te ruimen.</strong></td>
                <td class="px-4 py-3 text-sm text-xs">Na proberen: te tussen voorvoegsel en stam.</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm"><em>De trein is aankomen.</em></td>
                <td class="px-4 py-3 text-sm"><strong>De trein is aangekomen.</strong></td>
                <td class="px-4 py-3 text-sm text-xs">Voltooid deelwoord: aan + ge + komen.</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm"><em>Zij staat elke dag op vroeg.</em></td>
                <td class="px-4 py-3 text-sm"><strong>Zij staat elke dag vroeg op.</strong></td>
                <td class="px-4 py-3 text-sm text-xs">Voorvoegsel altijd achteraan, na bijwoorden.</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50">
                <td class="px-4 py-3 text-sm"><em>Hij voorkomt vaak.</em> (bedoeld: gebeurt vaak)</td>
                <td class="px-4 py-3 text-sm"><strong>Het komt vaak voor.</strong></td>
                <td class="px-4 py-3 text-sm text-xs">Scheidbaar voorkómen = splitsen in hoofdzin.</td>
              </tr>
            </tbody>
          </table>
        </div>
      `,
    },
    {
      title: "10. Snelle herhaling – Alles op een pagina ⚡",
      body: `
        <ul class="my-2 space-y-2 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-['✅'] before:absolute before:left-0 before:top-[0.4rem] text-slate-700 dark:text-slate-300"><strong>Hoofdzin:</strong> persoonsvorm op plek 2, voorvoegsel <strong>achteraan</strong>: <em>Ik bel je op.</em></li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-['✅'] before:absolute before:left-0 before:top-[0.4rem] text-slate-700 dark:text-slate-300"><strong>Bijzin:</strong> alle werkwoorden achteraan, scheidbaar werkwoord <strong>aaneen</strong>: <em>...omdat ik je opbel.</em></li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-['✅'] before:absolute before:left-0 before:top-[0.4rem] text-slate-700 dark:text-slate-300"><strong>Voltooid deelwoord:</strong> voorvoegsel + ge + stam: <em>opgebeld, aangekomen</em>.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-['✅'] before:absolute before:left-0 before:top-[0.4rem] text-slate-700 dark:text-slate-300"><strong>Te + infinitief:</strong> voorvoegsel + te + stam: <em>op te bellen, aan te komen</em>.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-['✅'] before:absolute before:left-0 before:top-[0.4rem] text-slate-700 dark:text-slate-300"><strong>Met modaal werkwoord:</strong> hele infinitief achteraan: <em>Ik kan je opbellen</em>.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-['⚠️'] before:absolute before:left-0 before:top-[0.4rem] text-slate-700 dark:text-slate-300"><strong>Dubbelzinnige werkwoorden:</strong> klemtoon bepaalt scheidbaar/onscheidbaar: <em>voorkómen vs. voorkóm</em>.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-['📚'] before:absolute before:left-0 before:top-[0.4rem] text-slate-700 dark:text-slate-300"><strong>Veelvoorkomende voorvoegsels:</strong> aan-, af-, bij-, door-, mee-, op-, terug-, uit-, voor-, weg-.</li>
        </ul>
      `,
    },
  ],
  rulesTable: [
    {
      rule: "Hoofdzin: splitsing",
      structure: "In de hoofdzin staat de persoonsvorm op plek 2. Het scheidbare voorvoegsel splitst af en komt **helemaal achteraan**.",
      example: "Ik **bel** je morgen **op**. • De trein **komt** om tien uur **aan**.",
      usage: "Het voorvoegsel blijft altijd op de allerlaatste plek, ook in lange zinnen.",
    },
    {
      rule: "Bijzin: samenvoeging",
      structure: "In een bijzin verhuizen alle werkwoorden naar het einde. Het scheidbare werkwoord wordt **weer aaneengeschreven**.",
      example: "...omdat ik je morgen **opbel**. • ...dat de trein om tien uur **aankomt**.",
      usage: "Voegwoorden: omdat, dat, als, terwijl, hoewel, of, etc.",
    },
    {
      rule: "Voltooid deelwoord: ge tussen voorvoegsel en stam",
      structure: "Het voltooid deelwoord van een scheidbaar werkwoord: **voorvoegsel + ge + stam (+ d/t/en)**.",
      example: "opbellen → **opgebeld** • aankomen → **aangekomen** • meenemen → **meegenomen**",
      usage: "Geen -ge- bij onscheidbare werkwoorden (betalen → betaald, niet *gebetaald*).",
    },
    {
      rule: "Te + infinitief: te tussen voorvoegsel en stam",
      structure: "Bij te + infinitief komt **te** tussen voorvoegsel en stam: **voorvoegsel + te + stam**.",
      example: "opbellen → **op te bellen** • aankomen → **aan te komen**",
      usage: "Na werkwoorden als proberen, vergeten, beloven, lijken, schijnen, en na voorzetsels.",
    },
    {
      rule: "Met modale werkwoorden: hele infinitief achteraan",
      structure: "Na kunnen, moeten, mogen, willen, zullen, gaan, komen, laten, blijven: de **hele infinitief** (aaneen) staat achteraan.",
      example: "Ik **kan** je **opbellen**. • We **gaan** hier **uitstappen**.",
      usage: "In de bijzin: infinitief vóór het modale werkwoord: ...omdat ik je kan opbellen.",
    },
    {
      rule: "Scheidbaar vs. onscheidbaar: klemtoon bepaalt",
      structure: "Sommige werkwoorden hebben twee betekenissen. Klemtoon op voorvoegsel = scheidbaar; klemtoon op stam = onscheidbaar.",
      example: "voorkómen (gebeuren) vs. voorkóm (verhinderen) • óverkomen vs. overkómen",
      usage: "Let op betekenis en klemtoon. Scheidbaar: splitsing en -ge- in voltooid deelwoord.",
    },
  ],
  callouts: [
    { type: "remember", label: "🔀 Gouden regel 1", text: "Hoofdzin: persoonsvorm op plek 2, voorvoegsel ALTĲD achteraan." },
    { type: "remember", label: "🔗 Gouden regel 2", text: "Bijzin: alle werkwoorden achteraan, scheidbaar werkwoord weer AANEEN." },
    { type: "remember", label: "🏗️ Gouden regel 3", text: "Voltooid deelwoord: voorvoegsel + GE + stam (opgebeld, aangekomen)." },
    { type: "remember", label: "🧠 Gouden regel 4", text: "Te + infinitief: voorvoegsel + TE + stam (op te bellen, aan te komen)." },
    { type: "remember", label: "⚙️ Gouden regel 5", text: "Met modaal werkwoord: hele infinitief aaneen achteraan (Ik kan je opbellen)." },
    { type: "remember", label: "⚠️ Gouden regel 6", text: "Klemtoon bepaalt: voorkómen (scheidbaar) vs. voorkóm (onscheidbaar)." },
    { type: "tip", label: "💡 Pro-tip", text: "Twijfel je? Vraag: 'Is dit een hoofdzin of bijzin?' → hoofdzin = splitsen, bijzin = aaneen." },
  ],
  commonMistakes: [
    { incorrect: "Ik opbel hem morgen.", correct: "Ik bel hem morgen op.", explanation: "In de hoofdzin splitst het scheidbare werkwoord: persoonsvorm op plek 2, voorvoegsel achteraan." },
    { incorrect: "...omdat ik hem opbel morgen.", correct: "...omdat ik hem morgen opbel.", explanation: "In de bijzin staan alle werkwoorden achteraan, in de juiste volgorde." },
    { incorrect: "Ik heb hem ge-opbeld.", correct: "Ik heb hem opgebeld.", explanation: "Voltooid deelwoord: voorvoegsel + ge + stam = één woord, geen koppelteken." },
    { incorrect: "Hij probeert opruimen.", correct: "Hij probeert op te ruimen.", explanation: "Na proberen volgt te + infinitief; bij scheidbare werkwoorden komt te tussen voorvoegsel en stam." },
    { incorrect: "De trein is aankomen.", correct: "De trein is aangekomen.", explanation: "Voltooid deelwoord van aankomen is aangekomen (aan + ge + komen)." },
    { incorrect: "Zij staat elke dag op vroeg.", correct: "Zij staat elke dag vroeg op.", explanation: "Het voorvoegsel staat altijd achteraan, na alle andere zinsdelen zoals bijwoorden." },
  ],
  review: [
    "✅ Hoofdzin: persoonsvorm op plek 2, voorvoegsel achteraan: Ik bel je op.",
    "✅ Bijzin: alle werkwoorden achteraan, scheidbaar werkwoord aaneen: ...omdat ik je opbel.",
    "✅ Voltooid deelwoord: voorvoegsel + ge + stam: opgebeld, aangekomen, meegenomen.",
    "✅ Te + infinitief: voorvoegsel + te + stam: op te bellen, aan te komen.",
    "✅ Met modaal werkwoord: hele infinitief aaneen achteraan: Ik kan je opbellen.",
    "✅ Inversie: ander zinsdeel voorop → onderwerp en persoonsvorm wisselen, voorvoegsel blijft achteraan.",
    "⚠️ Dubbelzinnige werkwoorden: klemtoon bepaalt scheidbaar/onscheidbaar: voorkómen vs. voorkóm.",
    "📚 Veelvoorkomende voorvoegsels: aan-, af-, bij-, door-, mee-, op-, terug-, uit-, voor-, weg-.",
    "🔍 Let op: scheidbare werkwoorden krijgen wél -ge- in voltooid deelwoord; onscheidbare niet.",
    "📍 Volgorde in bijzin met modaal: infinitief vóór modaal werkwoord: ...omdat ik je kan opbellen.",
  ],
  qa: [
    {
      question: "Waarom is 'Ik opbel mijn vriend' fout? Corrigeer de zin en leg uit wat er met het voorvoegsel gebeurt.",
      answer: "In een hoofdzin moet het scheidbare voorvoegsel achteraan in de zin staan. De persoonsvorm is de stam (bel), en het voorvoegsel op komt na de rest. Correct is: Ik bel mijn vriend op."
    },
    {
      question: "Maak van de hoofdzin 'De les begint om negen uur' een bijzin met 'omdat' en leg uit waarom het scheidbare werkwoord 'aankomen' wél van plaats verandert in een bijzin. Geef de juiste vorm van aankomen in de bijzin.",
      answer: "Beginnen is niet scheidbaar, dus het blijft: omdat de les om negen uur begint. Een scheidbaar werkwoord zoals aankomen wordt in de bijzin weer aaneen geschreven en staat achteraan: ...omdat de trein aankomt."
    },
    {
      question: "Geef het voltooid deelwoord van meenemen en leg uit hoe het is opgebouwd.",
      answer: "Meegenomen. Het is opgebouwd uit het voorvoegsel mee, dan -ge-, dan de stam nom (van nemen, met klinkerverandering) en de uitgang -en. Dus: mee + ge + nomen."
    },
    {
      question: "Vul de juiste vorm in: 'Ik vergeet vaak mijn sleutels ___ (meenemen).' Kies uit meenemen, mee te nemen, meegenomen.",
      answer: "Mee te nemen. Na vergeten volgt een te-infinitief. Bij een scheidbaar werkwoord komt te tussen voorvoegsel en stam: mee te nemen."
    },
    {
      question: "Waarom is de zin 'Hij staat op vroeg' niet correct? Verbeter hem.",
      answer: "Het voorvoegsel op moet achteraan in de hoofdzin staan, maar bijwoordelijke bepalingen zoals vroeg komen vóór het voorvoegsel. Correct: Hij staat vroeg op. Of met inversie: Vroeg staat hij op."
    },
    {
      question: "Leg het verschil uit tussen 'De boot komt over' en 'Dat overkomt mij niet'. Gebruik de begrippen scheidbaar en onscheidbaar.",
      answer: "In 'De boot komt over' is overkomen scheidbaar (klemtoon op over), en betekent 'over het water komen'. In 'Dat overkomt mij niet' is overkomen onscheidbaar (klemtoon op komt), en betekent 'gebeuren met iemand'. Het eerste splitst, het tweede niet."
    },
    {
      question: "Maak een correcte voltooide tijd met 'opruimen': 'Gisteren ___ ik mijn kamer ___.'",
      answer: "Gisteren heb ik mijn kamer opgeruimd. Het voltooid deelwoord van opruimen is opgeruimd, en als hulpwerkwoord gebruiken we hebben."
    }
  ],
};