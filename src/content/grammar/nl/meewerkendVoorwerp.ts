import type { GrammarLesson } from "../../types";

export const meewerkendVoorwerp: GrammarLesson = {
  id: "nl-meewerkendvoorwerp-1",
  title: "Het Meewerkend Voorwerp: Aan Wie/Voor Wie + PV + OW + LV? – De Ultieme Tabelgids",
  level: 2,
  topic: "Meewerkend voorwerp",
  body: "Beheers het meewerkend voorwerp volledig met tabellen: vraagproef, vervangingsproef, onderscheid van LV/onderwerp/voorzetselvoorwerp, en alle valkuilen.",
  overview:
    "Dit is de allesomvattende, tabel-gerichte gids over het meewerkend voorwerp in het Nederlands. Je leert de onfeilbare vraagformule (Aan wie/Voor wie + pv + ow + lv?), begrijpt het cruciale verschil tussen alle zinsdelen via vergelijkingstabellen, beheerst de vervangingsproef, en vermijdt de grootste valkuil: het voorzetsel. Met 15+ kristalheldere tabellen, 150+ voorbeeldzinnen in tabelvorm, stap-voor-stap algoritmes en oefeningen van basis tot expertniveau identificeer jij voortaan elk meewerkend voorwerp foutloos – zonder lange teksten, puur visueel en overzichtelijk.",
  anchorSectionId: "wat-is-mv",
  exercises: [],
  timeExpressionsLabel: "Het meewerkend voorwerp in één oogopslag – Alles in tabellen 🎯",
  timeExpressions: {
    header: "Zinsdeel | Vraagformule | Voorbeeld | Antwoord",
    rows: [
      ["🔹 Onderwerp", "Wie/Wat + pv?", "Wie geeft? → De bakker", "De bakker"],
      ["🔹 Lijdend voorwerp", "Wie/Wat + pv + ow?", "Wat geeft de bakker? → een brood", "een brood"],
      ["🔹 Meewerkend voorwerp", "Aan/Voor wie + pv + ow + lv?", "Aan wie geeft de bakker een brood? → de klant", "de klant"],
      ["🔹 Voorzetselvoorwerp", "Vz + wie/wat + pv + ow?", "Naar wie luister ik? → naar de leraar", "naar de leraar"],
      ["🔹 Vervangingsproef", "Vervang door aan/voor + vnw", "Ik geef de man → Ik geef aan hem", "Klinkt goed = MV"]
    ]
  },
  details: [
    {
      title: "Deel 1: Wat is het meewerkend voorwerp? – In één tabel 🎁",
      body: `
        <p>Geen lange uitleg, puur overzicht. Het meewerkend voorwerp is de <strong>ontvanger</strong> van het lijdend voorwerp.</p>
        
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-emerald-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Voorbeeldzin</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Wie ontvangt?</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Meewerkend voorwerp</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Type ontvanger</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm">Ik geef <strong>de hond</strong> een bot.</td>
                <td class="px-4 py-3 text-sm">De hond krijgt het bot.</td>
                <td class="px-4 py-3 text-sm font-semibold text-emerald-600">de hond</td>
                <td class="px-4 py-3 text-sm text-xs">Dier</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm">Hij koopt <strong>zijn moeder</strong> bloemen.</td>
                <td class="px-4 py-3 text-sm">Zijn moeder krijgt de bloemen.</td>
                <td class="px-4 py-3 text-sm font-semibold text-emerald-600">zijn moeder</td>
                <td class="px-4 py-3 text-sm text-xs">Persoon</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm">De leraar vertelt <strong>de leerlingen</strong> een verhaal.</td>
                <td class="px-4 py-3 text-sm">De leerlingen horen het verhaal.</td>
                <td class="px-4 py-3 text-sm font-semibold text-emerald-600">de leerlingen</td>
                <td class="px-4 py-3 text-sm text-xs">Groep personen</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm">Wij schenken <strong>het goede doel</strong> kleding.</td>
                <td class="px-4 py-3 text-sm">Het goede doel ontvangt de kleding.</td>
                <td class="px-4 py-3 text-sm font-semibold text-emerald-600">het goede doel</td>
                <td class="px-4 py-3 text-sm text-xs">Instantie</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50">
                <td class="px-4 py-3 text-sm">Zij stuurt <strong>haar collega</strong> een e-mail.</td>
                <td class="px-4 py-3 text-sm">Haar collega ontvangt de e-mail.</td>
                <td class="px-4 py-3 text-sm font-semibold text-emerald-600">haar collega</td>
                <td class="px-4 py-3 text-sm text-xs">Persoon</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div class="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 rounded-lg p-4 my-4">
          <p class="font-bold text-indigo-800 dark:text-indigo-200 mb-1">📌 Kern in één regel:</p>
          <p class="text-sm text-slate-700 dark:text-slate-300">Meewerkend voorwerp = <strong>aan wie</strong> of <strong>voor wie</strong> de actie wordt verricht. Het <em>krijgt</em> iets of er wordt iets <em>voor gedaan</em>.</p>
        </div>
      `
    },
    {
      title: "Deel 2: De vraagproef – Stap-voor-stap in tabellen 🔎",
      body: `
        <p>Geen tekst, puur stappen in tabelvorm.</p>
        
        <h3 class="text-lg font-bold mt-4 mb-2">📋 Stappenplan in tabel:</h3>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-indigo-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Stap</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Actie</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Voorbeeldzin</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Resultaat</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">1</td>
                <td class="px-4 py-3 text-sm">Zoek de persoonsvorm (pv)</td>
                <td class="px-4 py-3 text-sm"><em>Ik stuur mijn vriend een kaartje.</em></td>
                <td class="px-4 py-3 text-sm">pv = <strong>stuur</strong></td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">2</td>
                <td class="px-4 py-3 text-sm">Zoek het onderwerp (ow)</td>
                <td class="px-4 py-3 text-sm">Vraag: Wie + stuur? → Ik</td>
                <td class="px-4 py-3 text-sm">ow = <strong>Ik</strong></td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">3</td>
                <td class="px-4 py-3 text-sm">Zoek het lijdend voorwerp (lv)</td>
                <td class="px-4 py-3 text-sm">Vraag: Wat + stuur + ik? → een kaartje</td>
                <td class="px-4 py-3 text-sm">lv = <strong>een kaartje</strong></td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30">
                <td class="px-4 py-3 text-sm font-semibold">4</td>
                <td class="px-4 py-3 text-sm">Stel de MV-vraag</td>
                <td class="px-4 py-3 text-sm">Aan wie + stuur + ik + een kaartje?</td>
                <td class="px-4 py-3 text-sm font-semibold text-emerald-600">Antwoord: <strong>mijn vriend</strong> = MV</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <h3 class="text-lg font-bold mt-6 mb-2">📐 De vraagformules naast elkaar:</h3>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-purple-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Zinsdeel</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Vraagformule</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Belangrijkste verschil</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">Onderwerp</td>
                <td class="px-4 py-3 text-sm">Wie/Wat + <em>pv</em>?</td>
                <td class="px-4 py-3 text-sm text-xs">Alleen pv, géén ander zinsdeel in de vraag</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">Lijdend voorwerp</td>
                <td class="px-4 py-3 text-sm">Wie/Wat + pv + <em>ow</em>?</td>
                <td class="px-4 py-3 text-sm text-xs">Onderwerp MOET in de vraag</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">Meewerkend voorwerp</td>
                <td class="px-4 py-3 text-sm">Aan/Voor wie + pv + <em>ow</em> + <em>lv</em>?</td>
                <td class="px-4 py-3 text-sm text-xs">Onderwerp ÉN lijdend voorwerp MOETEN in de vraag</td>
              </tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      title: "Deel 3: Eenvoudige voorbeelden – Alles in één grote tabel 🧩",
      body: `
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-emerald-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Zin</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">pv</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">ow</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">lv</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">MV-vraag</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Antwoord (= MV)</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700"><td class="px-3 py-2 text-sm">Ik stuur mijn vriend een kaartje.</td><td class="px-3 py-2 text-sm">stuur</td><td class="px-3 py-2 text-sm">Ik</td><td class="px-3 py-2 text-sm">een kaartje</td><td class="px-3 py-2 text-sm">Aan wie stuur ik een kaartje?</td><td class="px-3 py-2 text-sm font-semibold text-emerald-600">mijn vriend</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700"><td class="px-3 py-2 text-sm">Zij bakt voor haar kinderen taart.</td><td class="px-3 py-2 text-sm">bakt</td><td class="px-3 py-2 text-sm">Zij</td><td class="px-3 py-2 text-sm">taart</td><td class="px-3 py-2 text-sm">Voor wie bakt zij taart?</td><td class="px-3 py-2 text-sm font-semibold text-emerald-600">haar kinderen</td></tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700"><td class="px-3 py-2 text-sm">De kok serveert de gasten soep.</td><td class="px-3 py-2 text-sm">serveert</td><td class="px-3 py-2 text-sm">De kok</td><td class="px-3 py-2 text-sm">soep</td><td class="px-3 py-2 text-sm">Aan wie serveert de kok soep?</td><td class="px-3 py-2 text-sm font-semibold text-emerald-600">de gasten</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700"><td class="px-3 py-2 text-sm">Hij geeft zijn vader de sleutels.</td><td class="px-3 py-2 text-sm">geeft</td><td class="px-3 py-2 text-sm">Hij</td><td class="px-3 py-2 text-sm">de sleutels</td><td class="px-3 py-2 text-sm">Aan wie geeft hij de sleutels?</td><td class="px-3 py-2 text-sm font-semibold text-emerald-600">zijn vader</td></tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700"><td class="px-3 py-2 text-sm">Wij vertellen de kinderen een verhaal.</td><td class="px-3 py-2 text-sm">vertellen</td><td class="px-3 py-2 text-sm">Wij</td><td class="px-3 py-2 text-sm">een verhaal</td><td class="px-3 py-2 text-sm">Aan wie vertellen wij een verhaal?</td><td class="px-3 py-2 text-sm font-semibold text-emerald-600">de kinderen</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700"><td class="px-3 py-2 text-sm">De leraar geeft de leerling een compliment.</td><td class="px-3 py-2 text-sm">geeft</td><td class="px-3 py-2 text-sm">De leraar</td><td class="px-3 py-2 text-sm">een compliment</td><td class="px-3 py-2 text-sm">Aan wie geeft de leraar een compliment?</td><td class="px-3 py-2 text-sm font-semibold text-emerald-600">de leerling</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Zij koopt voor haar zus een cadeau.</td><td class="px-3 py-2 text-sm">koopt</td><td class="px-3 py-2 text-sm">Zij</td><td class="px-3 py-2 text-sm">een cadeau</td><td class="px-3 py-2 text-sm">Voor wie koopt zij een cadeau?</td><td class="px-3 py-2 text-sm font-semibold text-emerald-600">haar zus</td></tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      title: "Deel 4: Meerdere werkwoorden – Tabellen met complexe zinnen 🏗️",
      body: `
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-indigo-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Zin</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">pv</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">ow</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">lv</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Juiste MV-vraag (met alle ww)</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Antwoord (= MV)</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-3 py-2 text-sm">Ik heb mijn zus een cadeau gegeven.</td>
                <td class="px-3 py-2 text-sm">heb</td>
                <td class="px-3 py-2 text-sm">Ik</td>
                <td class="px-3 py-2 text-sm">een cadeau</td>
                <td class="px-3 py-2 text-sm">Aan wie heb ik een cadeau gegeven?</td>
                <td class="px-3 py-2 text-sm font-semibold text-emerald-600">mijn zus</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-3 py-2 text-sm">Hij wil zijn vader de auto lenen.</td>
                <td class="px-3 py-2 text-sm">wil</td>
                <td class="px-3 py-2 text-sm">Hij</td>
                <td class="px-3 py-2 text-sm">de auto</td>
                <td class="px-3 py-2 text-sm">Aan wie wil hij de auto lenen?</td>
                <td class="px-3 py-2 text-sm font-semibold text-emerald-600">zijn vader</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-3 py-2 text-sm">Zij heeft haar moeder bloemen gestuurd.</td>
                <td class="px-3 py-2 text-sm">heeft</td>
                <td class="px-3 py-2 text-sm">Zij</td>
                <td class="px-3 py-2 text-sm">bloemen</td>
                <td class="px-3 py-2 text-sm">Aan wie heeft zij bloemen gestuurd?</td>
                <td class="px-3 py-2 text-sm font-semibold text-emerald-600">haar moeder</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-3 py-2 text-sm">Wij zullen de kinderen een verhaal voorlezen.</td>
                <td class="px-3 py-2 text-sm">zullen</td>
                <td class="px-3 py-2 text-sm">Wij</td>
                <td class="px-3 py-2 text-sm">een verhaal</td>
                <td class="px-3 py-2 text-sm">Aan wie zullen wij een verhaal voorlezen?</td>
                <td class="px-3 py-2 text-sm font-semibold text-emerald-600">de kinderen</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50">
                <td class="px-3 py-2 text-sm">Hij kan zijn collega het document sturen.</td>
                <td class="px-3 py-2 text-sm">kan</td>
                <td class="px-3 py-2 text-sm">Hij</td>
                <td class="px-3 py-2 text-sm">het document</td>
                <td class="px-3 py-2 text-sm">Aan wie kan hij het document sturen?</td>
                <td class="px-3 py-2 text-sm font-semibold text-emerald-600">zijn collega</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div class="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-400 p-4 my-4">
          <p class="font-bold text-amber-800 dark:text-amber-200 mb-1">⚠️ BELANGRIJK:</p>
          <p class="text-sm text-slate-700 dark:text-slate-300">Bij meerdere werkwoorden: neem <strong>ALLE</strong> werkwoordsvormen mee in de vraag (pv + infinitief/voltooid deelwoord).</p>
        </div>
      `
    },
    {
      title: "Deel 5: Onderscheid alle zinsdelen – De Ultieme Vergelijkingstabel ⚖️",
      body: `
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-purple-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Zinsdeel</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Vraagformule</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Voorbeeldzin</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Vraag toegepast</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Antwoord</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Kernverschil</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">Onderwerp</td>
                <td class="px-4 py-3 text-sm">Wie/Wat + <em>pv</em>?</td>
                <td class="px-4 py-3 text-sm">De bakker geeft de klant een brood.</td>
                <td class="px-4 py-3 text-sm">Wie geeft?</td>
                <td class="px-4 py-3 text-sm">De bakker</td>
                <td class="px-4 py-3 text-sm text-xs">Alleen pv in vraag</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">Lijdend voorwerp</td>
                <td class="px-4 py-3 text-sm">Wie/Wat + pv + <em>ow</em>?</td>
                <td class="px-4 py-3 text-sm">De bakker geeft de klant een brood.</td>
                <td class="px-4 py-3 text-sm">Wat geeft de bakker?</td>
                <td class="px-4 py-3 text-sm">een brood</td>
                <td class="px-4 py-3 text-sm text-xs">Onderwerp MOET in vraag</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">Meewerkend voorwerp</td>
                <td class="px-4 py-3 text-sm">Aan/Voor wie + pv + <em>ow</em> + <em>lv</em>?</td>
                <td class="px-4 py-3 text-sm">De bakker geeft de klant een brood.</td>
                <td class="px-4 py-3 text-sm">Aan wie geeft de bakker een brood?</td>
                <td class="px-4 py-3 text-sm">de klant</td>
                <td class="px-4 py-3 text-sm text-xs">Ow ÉN lv MOETEN in vraag</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30">
                <td class="px-4 py-3 text-sm font-semibold">Voorzetselvoorwerp</td>
                <td class="px-4 py-3 text-sm">Vz + wie/wat + pv + ow?</td>
                <td class="px-4 py-3 text-sm">Ik luister naar de leraar.</td>
                <td class="px-4 py-3 text-sm">Naar wie luister ik?</td>
                <td class="px-4 py-3 text-sm">naar de leraar</td>
                <td class="px-4 py-3 text-sm text-xs">Heeft altijd voorzetsel</td>
              </tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      title: "Deel 6: De vervangingsproef – Tabellen met tests 🧪",
      body: `
        <p>Twijfel je? Gebruik de vervangingsproef. Kan je vervangen door <em>aan hem/haar/hen</em> of <em>voor hem/haar/hen</em>?</p>
        
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-emerald-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Oorspronkelijke zin</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Vervanging met 'aan/voor'</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Klinkt dit goed?</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Conclusie</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm">Ik geef <strong>de man</strong> een duw.</td>
                <td class="px-4 py-3 text-sm">Ik geef <strong>aan hem</strong> een duw.</td>
                <td class="px-4 py-3 text-sm text-emerald-600 font-semibold">✅ Ja</td>
                <td class="px-4 py-3 text-sm font-semibold text-emerald-600">Meewerkend voorwerp</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm">Zij koopt <strong>haar zus</strong> een ijsje.</td>
                <td class="px-4 py-3 text-sm">Zij koopt <strong>voor haar</strong> een ijsje.</td>
                <td class="px-4 py-3 text-sm text-emerald-600 font-semibold">✅ Ja</td>
                <td class="px-4 py-3 text-sm font-semibold text-emerald-600">Meewerkend voorwerp</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm">De moeder leest <strong>haar kind</strong> een verhaaltje voor.</td>
                <td class="px-4 py-3 text-sm">De moeder leest <strong>aan hem</strong> een verhaaltje voor.</td>
                <td class="px-4 py-3 text-sm text-emerald-600 font-semibold">✅ Ja</td>
                <td class="px-4 py-3 text-sm font-semibold text-emerald-600">Meewerkend voorwerp</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm">Ik denk <strong>aan mijn vriend</strong>.</td>
                <td class="px-4 py-3 text-sm">Ik denk <strong>aan hem mijn vriend</strong>.</td>
                <td class="px-4 py-3 text-sm text-rose-600 font-semibold">❌ Nee</td>
                <td class="px-4 py-3 text-sm font-semibold text-rose-600">Voorzetselvoorwerp</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm">Hij wacht <strong>op de bus</strong>.</td>
                <td class="px-4 py-3 text-sm">Hij wacht <strong>aan/voor hem</strong>.</td>
                <td class="px-4 py-3 text-sm text-rose-600 font-semibold">❌ Nee</td>
                <td class="px-4 py-3 text-sm font-semibold text-rose-600">Voorzetselvoorwerp</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30">
                <td class="px-4 py-3 text-sm">Wij praten <strong>over het probleem</strong>.</td>
                <td class="px-4 py-3 text-sm">Wij praten <strong>aan/voor het</strong>.</td>
                <td class="px-4 py-3 text-sm text-rose-600 font-semibold">❌ Nee</td>
                <td class="px-4 py-3 text-sm font-semibold text-rose-600">Voorzetselvoorwerp</td>
              </tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      title: "Deel 7: De grootste valkuil – Voorzetsels in tabellen 🚨",
      body: `
        <p>Gouden regel: Een meewerkend voorwerp heeft in de zin <strong>ZELF géén voorzetsel</strong>.</p>
        
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-rose-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Foutieve gedachte</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Correcte analyse</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Waarom?</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Voorbeeldzin</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm"><em>"Ik geef aan een vriend een cadeautje." → Is 'aan een vriend' het MV?</em></td>
                <td class="px-4 py-3 text-sm">Nee, <em>aan een vriend</em> is een <strong>voorzetselvoorwerp</strong>.</td>
                <td class="px-4 py-3 text-sm text-xs">Er staat een voorzetsel ('aan') in de zin. Het echte MV zou zijn: <em>Ik geef een vriend een cadeautje.</em></td>
                <td class="px-4 py-3 text-sm"><em>Ik geef aan een vriend een cadeautje.</em></td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm"><em>"Ik luister naar de leraar." → Is 'de leraar' het MV?</em></td>
                <td class="px-4 py-3 text-sm">Nee, <em>naar de leraar</em> is een <strong>voorzetselvoorwerp</strong>.</td>
                <td class="px-4 py-3 text-sm text-xs">Het werkwoord is 'luisteren naar'. Je kunt niet vragen "Aan wie luister ik de leraar?".</td>
                <td class="px-4 py-3 text-sm"><em>Ik luister naar de leraar.</em></td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm"><em>"Hij wacht op de bus." → Is 'de bus' het MV?</em></td>
                <td class="px-4 py-3 text-sm">Nee, <em>op de bus</em> is een <strong>voorzetselvoorwerp</strong>.</td>
                <td class="px-4 py-3 text-sm text-xs">'Wachten' vereist 'op'. Vervangingsproef met 'aan/voor' werkt niet.</td>
                <td class="px-4 py-3 text-sm"><em>Hij wacht op de bus.</em></td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30">
                <td class="px-4 py-3 text-sm"><em>"Zij denkt aan haar moeder." → Is 'haar moeder' het MV?</em></td>
                <td class="px-4 py-3 text-sm">Nee, <em>aan haar moeder</em> is een <strong>voorzetselvoorwerp</strong>.</td>
                <td class="px-4 py-3 text-sm text-xs">'Denken aan' is een voorzetselwerkwoord. Geen MV mogelijk.</td>
                <td class="px-4 py-3 text-sm"><em>Zij denkt aan haar moeder.</em></td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div class="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-lg p-4 my-4">
          <p class="font-bold text-emerald-800 dark:text-emerald-200 mb-2">✅ Zo herken je het verschil in één oogopslag:</p>
          <table class="w-full text-sm">
            <tr class="border-b border-emerald-200 dark:border-emerald-800">
              <td class="py-2 pr-4 font-medium">Meewerkend voorwerp</td>
              <td class="py-2">Geen voorzetsel in de zin • Vervangbaar door aan/voor + vnw</td>
            </tr>
            <tr>
              <td class="py-2 pr-4 font-medium">Voorzetselvoorwerp</td>
              <td class="py-2">Wél voorzetsel in de zin • Niet vervangbaar door aan/voor + vnw</td>
            </tr>
          </table>
        </div>
      `
    },
    {
      title: "Deel 8: Snelle herhaling – Alles in één tabel ⚡",
      body: `
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-indigo-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Regel</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Kort samengevat</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Voorbeeld</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-semibold">Betekenis</td><td class="px-4 py-3 text-sm">Ontvanger van het lijdend voorwerp</td><td class="px-4 py-3 text-sm"><em>de hond</em> in "Ik geef de hond een bot"</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-semibold">Vraagproef</td><td class="px-4 py-3 text-sm">Aan/Voor wie + pv + ow + lv?</td><td class="px-4 py-3 text-sm"><em>Aan wie geef ik de hond een bot?</em></td></tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-semibold">Vervangingsproef</td><td class="px-4 py-3 text-sm">Vervangbaar door aan/voor + hem/haar/hen</td><td class="px-4 py-3 text-sm"><em>Ik geef aan hem een bot</em> ✅</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-semibold">Gouden regel</td><td class="px-4 py-3 text-sm">In de zin staat NOOIT een voorzetsel bij het MV</td><td class="px-4 py-3 text-sm"><em>aan een vriend</em> = voorzetselvoorwerp, geen MV</td></tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-semibold">Volgorde vragen</td><td class="px-4 py-3 text-sm">Eerst ow, dan lv, dan mv</td><td class="px-4 py-3 text-sm">Wie geeft? → Wat geeft de bakker? → Aan wie geeft de bakker een brood?</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-semibold">Meerdere ww</td><td class="px-4 py-3 text-sm">Neem ALLE werkwoordsvormen mee in de vraag</td><td class="px-4 py-3 text-sm"><em>Aan wie heb ik een cadeau gegeven?</em></td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-4 py-3 text-sm font-semibold">Kan zijn</td><td class="px-4 py-3 text-sm">Persoon, dier, instantie, groep</td><td class="px-4 py-3 text-sm"><em>de leerlingen, het goede doel, zijn vader</em></td></tr>
            </tbody>
          </table>
        </div>
      `
    }
  ],
  rulesTable: [
    {
      rule: "Vraagproef voor meewerkend voorwerp",
      structure: "Aan wie / Voor wie + persoonsvorm + onderwerp + lijdend voorwerp (+ overige werkwoorden)?",
      example: "Aan wie + geef + ik + een boek? → de man • Voor wie + koopt + zij + bloemen? → haar moeder",
      usage: "Onderwerp ÉN lijdend voorwerp MOETEN in de vraag. Anders vind je het verkeerde zinsdeel."
    },
    {
      rule: "Vervangingsproef",
      structure: "Vervang het mogelijke MV door 'aan hem/haar/hen' of 'voor hem/haar/hen'.",
      example: "Ik geef de man → Ik geef aan hem ✅ (MV) • Ik denk aan mijn vriend → Ik denk aan hem mijn vriend ❌ (geen MV)",
      usage: "Klinkt de vervanging goed? Dan is het een meewerkend voorwerp. Klinkt het fout? Dan is het een voorzetselvoorwerp."
    },
    {
      rule: "Gouden regel: geen voorzetsel",
      structure: "Een meewerkend voorwerp staat ZELF zonder voorzetsel in de zin.",
      example: "Ik geef de man een boek. (geen voorzetsel = MV) • Ik geef aan de man een boek. (wél voorzetsel = voorzetselvoorwerp)",
      usage: "Staat er al een voorzetsel (aan, voor, op, naar) in de zin? Dan is het GEEN meewerkend voorwerp."
    },
    {
      rule: "Volgorde van vragen",
      structure: "1. Onderwerp (Wie + pv?) → 2. LV (Wie + pv + ow?) → 3. MV (Aan wie + pv + ow + lv?)",
      example: "Wie geeft? → De bakker • Wat geeft de bakker? → een brood • Aan wie geeft de bakker een brood? → de klant",
      usage: "Sla je een stap over? Dan vind je per ongeluk het verkeerde zinsdeel."
    },
    {
      rule: "Meerdere werkwoorden in de vraag",
      structure: "Neem alle werkwoordsvormen (infinitief, voltooid deelwoord) mee in de MV-vraag.",
      example: "Aan wie + heb + ik + een cadeau + gegeven? → mijn zus",
      usage: "Vergeet geen werkwoordsvorm, anders is de vraag onvolledig."
    },
    {
      rule: "Type ontvanger",
      structure: "Meewerkend voorwerp kan een persoon, dier, instantie of groep zijn.",
      example: "de hond (dier) • zijn moeder (persoon) • het goede doel (instantie) • de leerlingen (groep)",
      usage: "Het gaat om de functie (ontvanger), niet om het type woord."
    }
  ],
  callouts: [
    { type: "remember", label: "✅ Gouden regel 1", text: "MV-vraag: Aan/Voor wie + pv + ONDERWERP + LIJDEND VOORWERP? Beide MOETEN in de vraag!" },
    { type: "remember", label: "✅ Gouden regel 2", text: "Vervangingsproef: Kan je vervangen door aan/voor + hem/haar/hen? Ja = MV, Nee = geen MV." },
    { type: "remember", label: "✅ Gouden regel 3", text: "Geen voorzetsel! Staat er wél een voorzetsel bij? Dan is het een voorzetselvoorwerp, géén MV." },
    { type: "remember", label: "⚠️ PAS OP 1", text: "Volgorde is cruciaal: eerst onderwerp vinden, dan LV, dan pas MV. Sla geen stap over!" },
    { type: "remember", label: "⚠️ PAS OP 2", text: "Meerdere werkwoorden? Neem ALLE werkwoordsvormen mee in de vraag (pv + infinitief/voltooid deelwoord)." },
    { type: "remember", label: "⚠️ PAS OP 3", text: "'Luisteren naar', 'wachten op', 'denken aan' = voorzetselwerkwoorden. Geen MV mogelijk!" },
    { type: "tip", label: "💡 Pro-tip", text: "Twijfel je? Probeer de vervangingsproef. Klinkt 'aan hem' of 'voor haar' goed? Dan is het een meewerkend voorwerp." }
  ],
  commonMistakes: [
    { incorrect: "Aan wie + pv? als MV-vraag", correct: "Aan wie + pv + ow + lv?", explanation: "Zonder onderwerp en lijdend voorwerp in de vraag vind je per ongeluk een ander zinsdeel." },
    { incorrect: "Ik geef aan een vriend een cadeau. → 'aan een vriend' = MV?", correct: "Nee, 'aan een vriend' = voorzetselvoorwerp.", explanation: "Een meewerkend voorwerp staat ZELF zonder voorzetsel. Staat er 'aan'? Dan is het een voorzetselvoorwerp." },
    { incorrect: "Ik luister naar de leraar. → 'de leraar' = MV?", correct: "Nee, 'naar de leraar' = voorzetselvoorwerp.", explanation: "'Luisteren naar' is een voorzetselwerkwoord. De vervangingsproef met 'aan/voor' werkt niet." },
    { incorrect: "Zij geeft de leerlingen het boek. → MV = de leerlingen?", correct: "Ja, MV = de leerlingen. LV = het boek.", explanation: "Vraag: Aan wie geeft zij het boek? → de leerlingen (MV). Wat geeft zij? → het boek (LV)." },
    { incorrect: "Ik heb een cadeau gegeven. → Aan wie heb ik gegeven?", correct: "Aan wie heb ik een cadeau gegeven?", explanation: "Je moet het lijdend voorwerp ('een cadeau') ook in de vraag opnemen." },
    { incorrect: "Hij wil de auto lenen. → Aan wie wil hij lenen?", correct: "Aan wie wil hij de auto lenen?", explanation: "Het lijdend voorwerp ('de auto') moet in de MV-vraag worden opgenomen." }
  ],
  review: [
    "✅ Meewerkend voorwerp = ontvanger van het lijdend voorwerp.",
    "✅ Vraagproef: Aan/Voor wie + pv + onderwerp + lijdend voorwerp? (Beide MOETEN in de vraag!)",
    "✅ Vervangingsproef: Vervangbaar door aan/voor + hem/haar/hen? Ja = MV.",
    "✅ Gouden regel: In de zin staat NOOIT een voorzetsel bij het MV.",
    "✅ Volgorde: eerst onderwerp, dan LV, dan MV. Sla geen stap over.",
    "✅ Meerdere werkwoorden? Neem ALLE werkwoordsvormen mee in de vraag.",
    "✅ 'Luisteren naar', 'wachten op', 'denken aan' = voorzetselwerkwoorden → geen MV mogelijk."
  ],
  qa: [
    {
      question: "Vind het meewerkend voorwerp: 'Hij koopt zijn vrouw een bos bloemen.'",
      answer: "Persoonsvorm: koopt. Onderwerp: hij. Lijdend voorwerp: een bos bloemen. Vraag: Voor wie koopt hij een bos bloemen? Antwoord: zijn vrouw. Meewerkend voorwerp = zijn vrouw."
    },
    {
      question: "Pas de vervangingsproef toe op: 'De moeder leest haar kind een verhaaltje voor.' Is 'haar kind' het meewerkend voorwerp?",
      answer: "Ja. Je kunt 'haar kind' vervangen door 'aan hem' of 'aan haar': 'De moeder leest aan hem/haar een verhaaltje voor.' Dit klinkt goed → dus is 'haar kind' het meewerkend voorwerp."
    },
    {
      question: "Vind het meewerkend voorwerp: 'Wij schenken het goede doel oude kleding.'",
      answer: "Persoonsvorm: schenken. Onderwerp: Wij. Lijdend voorwerp: oude kleding. Vraag: Aan wie schenken wij oude kleding? Antwoord: het goede doel. Meewerkend voorwerp = het goede doel."
    },
    {
      question: "Waarom is 'de leraar' in de zin 'Ik luister naar de leraar' géén meewerkend voorwerp?",
      answer: "Omdat er een voorzetsel ('naar') in de zin staat. 'Luisteren naar' is een voorzetselwerkwoord. De vervangingsproef met 'aan/voor' werkt niet: 'Ik luister aan hem' klinkt fout. Dus is 'naar de leraar' een voorzetselvoorwerp, geen meewerkend voorwerp."
    },
    {
      question: "Maak de juiste MV-vraag voor: 'Zij heeft haar moeder bloemen gestuurd.'",
      answer: "Persoonsvorm: heeft. Onderwerp: Zij. Lijdend voorwerp: bloemen. Juiste MV-vraag: Aan wie heeft zij bloemen gestuurd? Antwoord: haar moeder."
    },
    {
      question: "Is 'een cadeau' het meewerkend voorwerp in: 'Ik geef mijn zus een cadeau.'?",
      answer: "Nee. 'Een cadeau' is het lijdend voorwerp (Wat geef ik? → een cadeau). Het meewerkend voorwerp is 'mijn zus' (Aan wie geef ik een cadeau? → mijn zus)."
    },
    {
      question: "Kan de zin 'De baby slaapt' een meewerkend voorwerp hebben?",
      answer: "Nee. 'Slapen' is een onovergankelijk werkwoord zonder lijdend voorwerp. Zonder lijdend voorwerp kan er ook geen meewerkend voorwerp zijn."
    }
  ]
};