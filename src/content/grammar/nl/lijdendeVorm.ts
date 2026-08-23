import type { GrammarLesson } from "../../types";

export const lijdendeVorm: GrammarLesson = {
  id: "nl-lijdendevorm-1",
  title: "De Lijdende Vorm (Passief): Worden vs. Zijn – De Definitieve Masterclass",
  level: 2,
  topic: "Lijdende vorm",
  body: "Beheers het passief volledig: worden (proces) versus zijn (toestand), krijgen-passief, onpersoonlijk passief, daders met door/met, en alle valkuilen.",
  overview:
    "Dit is de allesomvattende, encyclopedische gids over de lijdende vorm in het Nederlands. Je leert het fundamentele verschil tussen proces-passief (worden) en toestand-passief (zijn), beheerst alle tijden, weet wanneer je 'door' of 'met' gebruikt, begrijpt het krijgen-passief en onpersoonlijk passief, en doorloopt een stappenplan om nooit meer te twijfelen. Met kristalheldere tabellen, uitgebreide PAS OP-waarschuwingen en 10 complexe masterclass-vragen vorm jij passieve zinnen voortaan foutloos en stijlvol.",
  anchorSectionId: "fundamenteel",
  exercises: [],
  timeExpressionsLabel: "Passief in één oogopslag: worden versus zijn 🎯",
  timeExpressions: {
    header: "Situatie | Hulpwerkwoord | Voorbeeld | Kernregel",
    rows: [
      ["🔄 Proces/actie", "WORDEN", "Het boek wordt gelezen.", "Handeling is gaande of wordt beschreven."],
      ["🏁 Toestand/resultaat", "ZIJN", "Het boek is gelezen.", "Handeling is klaar, focus op staat."],
      ["👤 Dader noemen", "DOOR", "Geschilderd door Van Gogh.", "Gebruik door bij personen/instanties."],
      ["🔨 Instrument", "MET", "Ingeslagen met een hamer.", "Gebruik met bij middelen/werktuigen."],
      ["🎁 Meewerkend voorwerp", "KRIJGEN", "Hij krijgt een bonus gegeven.", "Passief met indirect object als onderwerp."],
      ["🌐 Geen lijdend voorwerp", "ER + WORDEN", "Er wordt hard gewerkt.", "Onpersoonlijk passief voor intransitieve werkwoorden."]
    ]
  },
  details: [
    {
      title: "Deel 1: Fundamenteel verschil – actief versus passief 🎯",
      body: `
        <p>De lijdende vorm verschuift de focus van de <strong>dader</strong> naar de <strong>handeling</strong> of het <strong>resultaat</strong>. Dit verandert de hele zinsstructuur.</p>
        <div class="grid md:grid-cols-2 gap-4 my-4">
          <div class="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-lg p-4">
            <h4 class="font-bold text-emerald-700 dark:text-emerald-300 mb-2">✅ Actieve vorm (Bedrijvende vorm)</h4>
            <p class="text-sm text-slate-700 dark:text-slate-300 mb-2">Het onderwerp voert de handeling uit. Focus op de dader.</p>
            <p class="text-sm italic">De leraar <strong>legt</strong> de regels <strong>uit</strong>.</p>
          </div>
          <div class="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 rounded-lg p-4">
            <h4 class="font-bold text-indigo-700 dark:text-indigo-300 mb-2">✅ Passieve vorm (Lijdende vorm)</h4>
            <p class="text-sm text-slate-700 dark:text-slate-300 mb-2">Het onderwerp ondergaat de handeling. Focus op het proces/resultaat.</p>
            <p class="text-sm italic">De regels <strong>worden uitgelegd</strong>.</p>
          </div>
        </div>
        <div class="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-400 p-4 my-4">
          <p class="font-bold text-amber-800 dark:text-amber-200">⚠️ PAS OP 1: Niet elk actief kan passief!</p>
          <p class="text-sm text-slate-700 dark:text-slate-300 mt-1">Er <strong>moet</strong> een lijdend voorwerp zijn in de actieve zin. Zonder lijdend voorwerp (intransitief) kan je geen standaard passief maken. Gebruik dan het <em>onpersoonlijk passief</em> (zie Deel 6).</p>
        </div>
      `
    },
    {
      title: "Deel 2: De twee soorten passief – worden vs. zijn ⚡",
      body: `
        <p>Dit is het <strong>belangrijkste onderscheid</strong> in de Nederlandse grammatica. Kies altijd op basis van je focus:</p>
        <div class="grid md:grid-cols-2 gap-4 my-4">
          <div class="bg-white dark:bg-slate-800/50 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
            <h4 class="font-bold text-emerald-700 dark:text-emerald-300 mb-2">🔄 TYPE 1: Proces-passief → WORDEN</h4>
            <p class="text-sm text-slate-600 dark:text-slate-400 mb-2">Focus op de actie, het proces, de handeling zelf.</p>
            <ul class="space-y-1 text-sm">
              <li>• Het huis <strong>wordt</strong> geschilderd. (Iemand is ermee bezig)</li>
              <li>• De auto <strong>wordt</strong> gerepareerd. (Proces is gaande)</li>
              <li>• Kenmerken: dynamisch, vaak tegenwoordige/verleden tijd, dader vaak toevoegbaar.</li>
            </ul>
          </div>
          <div class="bg-white dark:bg-slate-800/50 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
            <h4 class="font-bold text-indigo-700 dark:text-indigo-300 mb-2">🏁 TYPE 2: Toestand-passief → ZIJN</h4>
            <p class="text-sm text-slate-600 dark:text-slate-400 mb-2">Focus op het eindresultaat, de staat na de actie.</p>
            <ul class="space-y-1 text-sm">
              <li>• Het huis <strong>is</strong> geschilderd. (Het is klaar)</li>
              <li>• De auto <strong>is</strong> gerepareerd. (Werk is voltooid)</li>
              <li>• Kenmerken: statisch, actie al gebeurd, beschrijft een eigenschap/situatie.</li>
            </ul>
          </div>
        </div>
        <div class="bg-rose-50 dark:bg-rose-900/20 border border-rose-200 dark:border-rose-800 rounded-lg p-4 my-4">
          <p class="font-bold text-rose-700 dark:text-rose-300 mb-1">⚠️ PAS OP 2: De snelle test</p>
          <p class="text-sm text-slate-700 dark:text-slate-300 mt-1">
            Kun je <em>"op dit moment"</em> of <em>"nu"</em> toevoegen? → <strong>worden</strong><br>
            Kun je <em>"al"</em> of <em>"nu klaar"</em> toevoegen? → <strong>zijn</strong>
          </p>
        </div>
      `
    },
    {
      title: "Deel 3: Volledige vervoeging & de valkuil van voltooide tijden 📊",
      body: `
        <p>Passief kent volledige tijden, maar er zit een grote grammaticale valkuil in de voltooid verleden tijd.</p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-indigo-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Tijd</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Proces-passief (worden)</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Toestand-passief (zijn)</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">Tegenwoordige tijd</td>
                <td class="px-4 py-3 text-sm">Het boek wordt gelezen</td>
                <td class="px-4 py-3 text-sm">Het boek is gelezen (af)</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">Verleden tijd</td>
                <td class="px-4 py-3 text-sm">Het boek werd gelezen</td>
                <td class="px-4 py-3 text-sm">Het boek was gelezen (was af)</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50">
                <td class="px-4 py-3 text-sm font-semibold">Voltooide tijd</td>
                <td class="px-4 py-3 text-sm">Het boek is gelezen geworden ⚠️</td>
                <td class="px-4 py-3 text-sm">Het boek is gelezen geweest</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-400 p-4 my-4">
          <p class="font-bold text-amber-800 dark:text-amber-200 mb-1">⚠️ PAS OP 3: Voltooide tijd met "geworden"</p>
          <p class="text-sm text-slate-700 dark:text-slate-300 mt-1">
            In de praktijk laat men <em>geworden</em> vaak weg. <em>"Het boek is gelezen geworden"</em> is grammaticaal correct maar klinkt zwaar en omslachtig.<br>
            ✅ <strong>Beter:</strong> Gebruik voor proces-passief in het verleden liever de onvoltooid verleden tijd: <em> Het huis werd in 2020 gebouwd.</em>
          </p>
        </div>
      `
    },
    {
      title: "Deel 4: De dader noemen – door, met of aan? 👤",
      body: `
        <p>Als je in de passieve vorm wél wilt vermelden wie of wat de handeling uitvoert, kies je het juiste voorzetsel op basis van de aard van de dader.</p>
        <div class="grid md:grid-cols-3 gap-3 my-4">
          <div class="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-lg p-3">
            <p class="font-bold text-emerald-700 dark:text-emerald-300 text-sm mb-1">👤 DOOR + persoon/instantie</p>
            <p class="text-xs text-slate-600 dark:text-slate-400">Bewuste handelaar</p>
            <p class="text-sm mt-1 italic">Geschilderd door Van Gogh.</p>
          </div>
          <div class="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 rounded-lg p-3">
            <p class="font-bold text-indigo-700 dark:text-indigo-300 text-sm mb-1">🔧 MET + instrument/middel</p>
            <p class="text-xs text-slate-600 dark:text-slate-400">Werktuig of materiaal</p>
            <p class="text-sm mt-1 italic">Ingeslagen met een hamer.</p>
          </div>
          <div class="bg-rose-50 dark:bg-rose-900/20 border border-rose-200 dark:border-rose-800 rounded-lg p-3">
            <p class="font-bold text-rose-700 dark:text-rose-300 text-sm mb-1">🌡️ AAN + oorzaak/gevolg</p>
            <p class="text-xs text-slate-600 dark:text-slate-400">Abstracte/medische oorzaak</p>
            <p class="text-sm mt-1 italic">Overleden aan de gevolgen.</p>
          </div>
        </div>
        <div class="bg-rose-50 dark:bg-rose-900/20 border border-rose-200 dark:border-rose-800 rounded-lg p-4 my-4">
          <p class="font-bold text-rose-700 dark:text-rose-300 mb-1">⚠️ PAS OP 4: Door vs. Met verwarren</p>
          <p class="text-sm text-slate-700 dark:text-slate-300 mt-1">
            ❌ <em>De deur is door een hamer ingeslagen.</em> (Hamer is geen persoon)<br>
            ✅ <em>De deur is met een hamer ingeslagen.</em><br>
            Regel: <em>Door</em> = wie doet het? <em>Met</em> = waarmee doet hij het?
          </p>
        </div>
      `
    },
    {
      title: "Deel 5: Valkuilen & het krijgen-passief ⚠️",
      body: `
        <p>Niet alle werkwoorden kunnen passief. Daarnaast bestaat er een speciale constructie met <strong>krijgen</strong>.</p>
        <h3 class="text-lg font-bold mt-4 mb-2">Werkwoorden ZONDER passief:</h3>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-['❌'] before:absolute before:left-0 before:top-[0.4rem] text-slate-700 dark:text-slate-300">Intransitieve werkwoorden (geen lijdend voorwerp): slapen, huilen, bestaan, gebeuren</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-['❌'] before:absolute before:left-0 before:top-[0.4rem] text-slate-700 dark:text-slate-300">Wederkerende werkwoorden: zich wassen, zich vergissen</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-['❌'] before:absolute before:left-0 before:top-[0.4rem] text-slate-700 dark:text-slate-300">Vast voorzetsel: wachten op, denken aan, kijken naar</li>
        </ul>
        <h3 class="text-lg font-bold mt-6 mb-2">Het Krijgen-Passief:</h3>
        <p class="text-sm text-slate-700 dark:text-slate-300 mb-2">Als de actieve zin een <strong>meewerkend voorwerp</strong> heeft (aan/voor iemand), kan dat meewerkend voorwerp het onderwerp worden in een krijgen-passief.</p>
        <div class="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 rounded-lg p-4 my-4">
          <p class="text-sm"><strong>Actief:</strong> De leraar <em>geeft</em> <strong>de leerlingen</strong> huiswerk.<br>
          <strong>Standaard passief:</strong> Huiswerk <em>wordt</em> aan <strong>de leerlingen</strong> gegeven.<br>
          <strong>Krijgen-passief:</strong> <strong>De leerlingen</strong> <em>krijgen</em> huiswerk <strong>gegeven</strong>. ✅</p>
        </div>
        <div class="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-400 p-4 my-4">
          <p class="font-bold text-amber-800 dark:text-amber-200 mb-1">⚠️ PAS OP 5: Niet alles kan met krijgen</p>
          <p class="text-sm text-slate-700 dark:text-slate-300 mt-1">
            Alleen bij werkwoorden van <em>geven, sturen, bieden, tonen, vragen, verbieden, beloven</em>. Niet bij werkwoorden zoals <em>helpen, vertellen, uitleggen</em>. Twijfel je? Gebruik dan het standaard passief met <em>worden</em>.
          </p>
        </div>
      `
    },
    {
      title: "Deel 6: Onpersoonlijk passief (er + worden) 🌐",
      body: `
        <p>Als een werkwoord <strong>geen lijdend voorwerp</strong> heeft, kun je toch een passieve vorm maken met <strong>er + worden</strong>. Dit heet <strong>onpersoonlijk passief</strong>.</p>
        <div class="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-lg p-4 my-4">
          <p class="font-bold text-emerald-800 dark:text-emerald-200 mb-2">Regel: Er staat altijd op plaats 1 of 3</p>
          <ul class="space-y-2 text-sm">
            <li class="flex items-start"><span class="text-emerald-500 mr-2">1.</span><span>Plaats 1: <strong>Er wordt</strong> hard gewerkt in dit bedrijf.</span></li>
            <li class="flex items-start"><span class="text-emerald-500 mr-2">2.</span><span>Plaats 3: Gisteren <strong>werd er</strong> veel gelachen.</span></li>
            <li class="flex items-start"><span class="text-emerald-500 mr-2">3.</span><span>Geen dader noemen: bij onpersoonlijk passief noem je normaal gesproken <strong>geen</strong> dader met "door".</span></li>
          </ul>
        </div>
        <div class="bg-rose-50 dark:bg-rose-900/20 border border-rose-200 dark:border-rose-800 rounded-lg p-4 my-4">
          <p class="font-bold text-rose-700 dark:text-rose-300 mb-1">⚠️ PAS OP 6: Geen "hij" of "zij"</p>
          <p class="text-sm text-slate-700 dark:text-slate-300 mt-1">
            Onpersoonlijk passief heeft <strong>geen</strong> echt onderwerp. "Er" is een pleonastisch onderwerp. Je zegt nooit: <em>*Hij wordt hard gewerkt in dit bedrijf.</em> Altijd: <em>Er wordt...</em>
          </p>
        </div>
      `
    },
    {
      title: "Deel 7: Passief met modale & scheidbare werkwoorden ⚙️🔀",
      body: `
        <p>Passief combineert moeiteloos met modale en scheidbare werkwoorden, maar let op de woordvolgorde en vorming.</p>
        <h3 class="text-lg font-bold mt-4 mb-2">Modaal + passief:</h3>
        <p class="text-sm text-slate-700 dark:text-slate-300 mb-2">Formule: <strong>Modaal + worden + voltooid deelwoord</strong></p>
        <ul class="space-y-1 text-sm mb-4">
          <li>• De toets <strong>moet worden nagekeken</strong>.</li>
          <li>• Dit probleem <strong>kan worden opgelost</strong>.</li>
          <li>• Deze deur <strong>mag alleen worden geopend</strong> in noodgevallen.</li>
        </ul>
        <h3 class="text-lg font-bold mt-4 mb-2">Scheidbare werkwoorden in passief:</h3>
        <p class="text-sm text-slate-700 dark:text-slate-300 mb-2">Het voltooid deelwoord blijft <strong>één woord</strong> (voorvoegsel + ge + stam + d/t). In de passieve zin staat het voltooid deelwoord achteraan.</p>
        <ul class="space-y-1 text-sm">
          <li>• Actief: Hij <strong>zet</strong> de alarmen <strong>aan</strong>.</li>
          <li>• Passief: De alarmen <strong>worden aangezet</strong>.</li>
        </ul>
        <div class="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-400 p-4 my-4">
          <p class="font-bold text-amber-800 dark:text-amber-200 mb-1">⚠️ PAS OP 7: Volgorde in bijzinnen</p>
          <p class="text-sm text-slate-700 dark:text-slate-300 mt-1">
            In een bijzin blijft de volgorde: voegwoord + onderwerp + ... + <em>worden/zijn</em> + <em>voltooid deelwoord</em>.<br>
            ✅ <em>...omdat de alarmen worden aangezet.</em><br>
            ❌ <em>...omdat de alarmen aangezet worden.</em> (minder gebruikelijk in formeel Nederlands)
          </p>
        </div>
      `
    },
    {
      title: "Deel 8: Stijl & ultieme beslisalgoritme ✍️🗺️",
      body: `
        <p>Gebruik passief bewust voor stijl, niet als automatische vervanging van actief.</p>
        <div class="grid md:grid-cols-2 gap-3 my-4">
          <div class="bg-white dark:bg-slate-800/50 rounded-lg p-3 border border-slate-200 dark:border-slate-700">
            <p class="font-bold text-emerald-700 dark:text-emerald-300 text-sm mb-1">✅ Ideaal voor passief:</p>
            <ul class="text-xs text-slate-600 dark:text-slate-400 space-y-1">
              <li>• Dader onbekend (Mijn fiets is gestolen)</li>
              <li>• Dader onbelangrijk (Dit huis is gebouwd in 1950)</li>
              <li>• Diplomatiek/verzwijgen (Er zijn fouten gemaakt)</li>
              <li>• Wetenschappelijk/formeel (Het experiment werd uitgevoerd)</li>
              <li>• Regels/instructies (Deze deur mag geopend worden)</li>
            </ul>
          </div>
          <div class="bg-white dark:bg-slate-800/50 rounded-lg p-3 border border-slate-200 dark:border-slate-700">
            <p class="font-bold text-rose-700 dark:text-rose-300 text-sm mb-1">❌ Vermijd passief als:</p>
            <ul class="text-xs text-slate-600 dark:text-slate-400 space-y-1">
              <li>• Je duidelijkheid of directheid nodig hebt</li>
              <li>• De dader essentieel is voor de boodschap</li>
              <li>• Je zinnen te lang en omslachtig worden</li>
              <li>• Je actieve, dynamische tekst wilt schrijven</li>
            </ul>
          </div>
        </div>
        <div class="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 rounded-lg p-4 my-4">
          <p class="font-bold text-indigo-800 dark:text-indigo-200 mb-2">🗺️ Het ultieme algoritme (4 stappen):</p>
          <ol class="list-decimal list-inside space-y-2 text-sm text-slate-700 dark:text-slate-300">
            <li><strong>Stap 1:</strong> Is er een lijdend voorwerp in de actieve zin? Nee → Onpersoonlijk passief (er + worden).</li>
            <li><strong>Stap 2:</strong> Wil je de ACTIE/het PROCES benadrukken? Ja → WORDEN.</li>
            <li><strong>Stap 3:</strong> Wil je het RESULTAAT/de TOESTAND benadrukken? Ja → ZIJN.</li>
            <li><strong>Stap 4:</strong> Moet er een modaal werkwoord bij? Ja → Modaal + WORDEN + voltooid deelwoord.</li>
          </ol>
        </div>
      `
    }
  ],
  rulesTable: [
    {
      rule: "Proces-passief vs Toestand-passief",
      structure: "Actie aan de gang? → WORDEN. Handeling klaar/resultaat? → ZIJN.",
      example: "Het wordt gebouwd. • Het is gebouwd.",
      usage: "Twijfel je? Vraag: 'Kan ik er op dit moment bij?' (worden) of 'Is het nu zo?' (zijn)."
    },
    {
      rule: "Dader noemen: door, met, aan",
      structure: "Persoon/instantie → door. Instrument/middel → met. Abstracte oorzaak → aan.",
      example: "Geschreven door de auteur. • Gesneden met een mes. • Overleden aan een ziekte.",
      usage: "Door = wie? Met = waarmee? Aan = waardoor?"
    },
    {
      rule: "Krijgen-passief",
      structure: "Alleen bij werkwoorden van geven/sturen/bieden/etc. Meewerkend voorwerp wordt onderwerp.",
      example: "Ik stuur jou een mail → Jij krijgt een mail gestuurd.",
      usage: "Niet bij helpen/uitleggen/vertellen. Gebruik bij twijfel standaard passief met worden."
    },
    {
      rule: "Onpersoonlijk passief",
      structure: "Geen lijdend voorwerp? → er + worden + voltooid deelwoord. Geen dader noemen.",
      example: "Er wordt hard gewerkt. • Er is veel gedanst.",
      usage: "Er staat op plaats 1 of 3. Nooit een persoonsvorm als 'hij/zij' gebruiken."
    },
    {
      rule: "Modaal + passief",
      structure: "Modaal + worden + voltooid deelwoord. In bijzin: modaal vooraan werkwoordgroep.",
      example: "Het moet worden gedaan. • Het kan worden opgelost.",
      usage: "Vermijd voltooide tijd met modaal + zijn + gedaan moeten worden. Kies verleden tijd."
    },
    {
      rule: "Voltooide tijd valkuil",
      structure: "Proces-passief in voltooid verleden tijd: 'is geworden gedaan' is zwaar. Gebruik liever 'werd gedaan'.",
      example: "Het huis werd in 1990 gebouwd. (beter dan: is gebouwd geworden)",
      usage: "In moderne standaardtaal vermijdt men 'geworden' in proces-passief zoveel mogelijk."
    }
  ],
  callouts: [
    { type: "remember", label: "⚠️ PAS OP 1", text: "Niet elk werkwoord kan passief! Intransitieve, wederkerende en vaste-voorzetselwerkwoorden vereisen andere constructies." },
    { type: "remember", label: "⚠️ PAS OP 2", text: "Door = persoon. Met = instrument. Verwissel deze nooit. 'Door een hamer' is een klassieke fout." },
    { type: "remember", label: "⚠️ PAS OP 3", text: "Voltooide tijd met 'geworden' klinkt omslachtig. Kies voor proces-passief in het verleden liever de verleden tijd: werd + voltooid deelwoord." },
    { type: "remember", label: "⚠️ PAS OP 4", text: "Krijgen-passief werkt NIET bij alle werkwoorden. Alleen bij geven/sturen/bieden/vragen/verbieden/beloven. Bij twijfel: gebruik worden." },
    { type: "remember", label: "⚠️ PAS OP 5", text: "Onpersoonlijk passief heeft GEEN echt onderwerp. Altijd 'er wordt...', nooit 'hij wordt...' of 'zij wordt...'" },
    { type: "remember", label: "⚠️ PAS OP 6", text: "Bij scheidbare werkwoorden in passief blijft het voltooid deelwoord EEN WOORD: aangezet, uitgelegd, meegenomen." }
  ],
  commonMistakes: [
    { incorrect: "Het huis is gebouwd vorig jaar.", correct: "Het huis werd vorig jaar gebouwd.", explanation: "Vorig jaar verwijst naar het proces. Gebruik worden/werd, niet zijn voor een afgeronde actie in een specifieke tijd." },
    { incorrect: "De deur is door een hamer ingeslagen.", correct: "De deur is met een hamer ingeslagen.", explanation: "Hamer is een instrument, geen bewuste handelaar. Gebruik met, niet door." },
    { incorrect: "Ik wordt geholpen.", correct: "Ik word geholpen.", explanation: "Tegenwoordige tijd van worden is word, wordt of worden. 'Wordt' is alleen voor hij/zij/het." },
    { incorrect: "Er wordt geslapen door mij.", correct: "Er wordt geslapen.", explanation: "Onpersoonlijk passief noemt geen dader met door. Laat 'door mij' weg of maak een actieve zin: Ik slaap." },
    { incorrect: "Hij krijgt een uitleg gegeven.", correct: "Hij krijgt uitleg.", explanation: "Uitleggen hoort niet bij het krijgen-passief. Gebruik het standaard passief: Hij wordt het uitgelegd." },
    { incorrect: "De lamp wordt aangezet worden.", correct: "De lamp wordt aangezet.", explanation: "Geen dubbele infinitiefconstructie met worden. Eén keer worden is genoeg." }
  ],
  review: [
    "✅ Proces aan de gang? → WORDEN. Resultaat/staat? → ZIJN.",
    "✅ Dader = door. Instrument = met. Oorzaak = aan.",
    "✅ Krijgen-passief: alleen bij geven/sturen/bieden/vragen. Meewerkend voorwerp → onderwerp.",
    "✅ Geen lijdend voorwerp? → Onpersoonlijk passief: er + worden + voltooid deelwoord.",
    "✅ Modaal + passief: modaal + worden + voltooid deelwoord.",
    "✅ Scheidbare werkwoorden: voltooid deelwoord blijft één woord (opgebeld, aangezet).",
    "✅ Vermijd 'is geworden gedaan'. Kies liever 'werd gedaan'.",
    "✅ Onpersoonlijk passief: altijd 'er', nooit een persoonsvorm als onderwerp."
  ],
  qa: [
    {
      question: "Maak twee passieve zinnen van: De schilder schildert het portret. Eén met WORDEN en één met ZIJN.",
      answer: "Proces: Het portret wordt geschilderd. Toestand: Het portret is geschilderd."
    },
    {
      question: "Vul in met DOOR of MET: Het raam is ___ een steen ingeslagen. Het raam is ___ de inbreker ingeslagen.",
      answer: "Het raam is met een steen ingeslagen. Het raam is door de inbreker ingeslagen."
    },
    {
      question: "Maak een onpersoonlijk passief van: Mensen praten hier veel over politiek.",
      answer: "Er wordt hier veel gepraat over politiek."
    },
    {
      question: "Maak een krijgen-passief van: De manager geeft de werknemers een bonus.",
      answer: "De werknemers krijgen een bonus gegeven."
    },
    {
      question: "Maak passief: Je moet deze medicijnen drie keer per dag innemen.",
      answer: "Deze medicijnen moeten drie keer per dag worden ingenomen."
    },
    {
      question: "Maak passief: Hij zet de alarmen aan.",
      answer: "De alarmen worden aangezet."
    },
    {
      question: "Wat is beter en waarom? A) Het huis is gebouwd geworden in 1990. B) Het huis werd gebouwd in 1990.",
      answer: "B is beter. Optie A is grammaticaal mogelijk maar klinkt onnatuurlijk en omslachtig. Voor proces-passief in het verleden gebruik je bij voorkeur de verleden tijd werd in plaats van de voltooide tijd met geworden."
    },
    {
      question: "Waarom kun je van Hij slaapt diep geen gewoon passief maken? Wat wel?",
      answer: "Slapen heeft geen lijdend voorwerp. Gewoon passief is onmogelijk. Wel kun je onpersoonlijk passief maken: Er wordt diep geslapen."
    },
    {
      question: "Maak passief: De storm heeft vele bomen omvergeblazen.",
      answer: "Vele bomen zijn door de storm omvergeblazen. Of: Vele bomen werden door de storm omvergeblazen."
    },
    {
      question: "Deze zin bevat 3 fouten. Verbeter ze: Het boek is door mij geworden gelezen gisteren en is nu geworden afgemaakt.",
      answer: "Het boek is gisteren door mij gelezen en is nu afgemaakt. Fouten: 1. geworden gelezen wordt gewoon gelezen. 2. gisteren hoort eerder. 3. geworden afgemaakt wordt afgemaakt."
    }
  ]
};