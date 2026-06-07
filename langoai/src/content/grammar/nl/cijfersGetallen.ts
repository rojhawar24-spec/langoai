import type { GrammarLesson } from "../../types";

export const cijfersGetallen: GrammarLesson = {
  id: "nl-cijfers-1",
  title: "Cijfers, Getallen en Datum",
  level: 1,
  topic: "Vocabulaire",
  body: "Leer hoe je in het Nederlands telt, getallen uitspreekt en de datum zegt. Je leert hoofdtelwoorden, rangtelwoorden, dagen, maanden en hoe je een datum correct uitspreekt en schrijft.",
  overview:
    "Hier vind je een **volledig uitgewerkte** les over cijfers, getallen en datum. Je leert tellen van 0 tot 1.000.000, rangtelwoorden zoals eerste en tweede, de dagen van de week, de maanden van het jaar, en hoe je de datum zegt. Alles is helder, overzichtelijk en direct in de praktijk te gebruiken.",
  anchorSectionId: "hoofdtelwoorden",
  exercises: [],
  timeExpressionsLabel: "Tellen 0–20",
  timeExpressions: {
    header: "Getal | Nederlands | Uitspraak-tip",
    rows: [
      ["0", "<strong>nul</strong>", "korte u"],
      ["1", "<strong>één</strong>", "lange ee met accent"],
      ["2", "<strong>twee</strong>", "lange ee"],
      ["3", "<strong>drie</strong>", "lange ie"],
      ["4", "<strong>vier</strong>", "lange ie"],
      ["5", "<strong>vijf</strong>", "ei/ij-klank"],
      ["6", "<strong>zes</strong>", "korte e"],
      ["7", "<strong>zeven</strong>", "lange ee"],
      ["8", "<strong>acht</strong>", "harde ch"],
      ["9", "<strong>negen</strong>", "lange ee"],
      ["10", "<strong>tien</strong>", "lange ie"],
      ["11", "<strong>elf</strong>", "korte e"],
      ["12", "<strong>twaalf</strong>", "lange aa"],
      ["13", "<strong>dertien</strong>", "klemtoon op tien"],
      ["14", "<strong>veertien</strong>", "klemtoon op tien"],
      ["15", "<strong>vijftien</strong>", "klemtoon op tien"],
      ["16", "<strong>zestien</strong>", "klemtoon op tien"],
      ["17", "<strong>zeventien</strong>", "klemtoon op tien"],
      ["18", "<strong>achttien</strong>", "klemtoon op tien"],
      ["19", "<strong>negentien</strong>", "klemtoon op tien"],
      ["20", "<strong>twintig</strong>", "klemtoon op twin"],
    ],
  },
  details: [
    {
      title: "21 tot 100 – De eenheid komt vóór de tientallen",
      body: `
        <div class="bg-rose-50 dark:bg-rose-900/20 border-l-4 border-rose-500 p-4 rounded-r-lg my-4">
          <p class="font-semibold text-rose-700 dark:text-rose-300">
            <strong>⚠️ PAS OP:</strong> In het Nederlands zeg je eerst de <strong>eenheid</strong>, dan pas het <strong>tiental</strong>. En je gebruikt <strong>en</strong> ertussen. Alles schrijf je <strong>aan elkaar</strong>. Dit is precies andersom dan in het Engels!
          </p>
        </div>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-indigo-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Getal</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Nederlands</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Letterlijk</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">21</td><td class="px-3 py-2 text-sm"><strong>éénentwintig</strong></td><td class="px-3 py-2 text-sm">één-en-twintig</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">22</td><td class="px-3 py-2 text-sm"><strong>tweeëntwintig</strong></td><td class="px-3 py-2 text-sm">twee-en-twintig</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">23</td><td class="px-3 py-2 text-sm"><strong>drieëntwintig</strong></td><td class="px-3 py-2 text-sm">drie-en-twintig</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">30</td><td class="px-3 py-2 text-sm"><strong>dertig</strong></td><td class="px-3 py-2 text-sm">der-tig</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">40</td><td class="px-3 py-2 text-sm"><strong>veertig</strong></td><td class="px-3 py-2 text-sm">veer-tig</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">50</td><td class="px-3 py-2 text-sm"><strong>vijftig</strong></td><td class="px-3 py-2 text-sm">vijf-tig</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">60</td><td class="px-3 py-2 text-sm"><strong>zestig</strong></td><td class="px-3 py-2 text-sm">zes-tig</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">70</td><td class="px-3 py-2 text-sm"><strong>zeventig</strong></td><td class="px-3 py-2 text-sm">zeven-tig</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">80</td><td class="px-3 py-2 text-sm"><strong>tachtig</strong></td><td class="px-3 py-2 text-sm">tach-tig</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">90</td><td class="px-3 py-2 text-sm"><strong>negentig</strong></td><td class="px-3 py-2 text-sm">negen-tig</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">100</td><td class="px-3 py-2 text-sm"><strong>honderd</strong></td><td class="px-3 py-2 text-sm">hon-derd</td></tr>
            </tbody>
          </table>
        </div>
      `,
    },
    {
      title: "Tientallen – Overzicht",
      body: `
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-indigo-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Getal</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Nederlands</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">10</td><td class="px-3 py-2 text-sm"><strong>tien</strong></td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">20</td><td class="px-3 py-2 text-sm"><strong>twintig</strong></td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">30</td><td class="px-3 py-2 text-sm"><strong>dertig</strong></td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">40</td><td class="px-3 py-2 text-sm"><strong>veertig</strong></td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">50</td><td class="px-3 py-2 text-sm"><strong>vijftig</strong></td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">60</td><td class="px-3 py-2 text-sm"><strong>zestig</strong></td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">70</td><td class="px-3 py-2 text-sm"><strong>zeventig</strong></td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">80</td><td class="px-3 py-2 text-sm"><strong>tachtig</strong></td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">90</td><td class="px-3 py-2 text-sm"><strong>negentig</strong></td></tr>
            </tbody>
          </table>
        </div>
      `,
    },
    {
      title: "100 tot 10.000 en Grote Getallen",
      body: `
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-indigo-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Getal</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Nederlands</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Regel</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">100</td><td class="px-3 py-2 text-sm"><strong>honderd</strong></td><td class="px-3 py-2 text-sm"></td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">101</td><td class="px-3 py-2 text-sm"><strong>honderdeen</strong></td><td class="px-3 py-2 text-sm">honderd + één</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">200</td><td class="px-3 py-2 text-sm"><strong>tweehonderd</strong></td><td class="px-3 py-2 text-sm">twee + honderd</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">1000</td><td class="px-3 py-2 text-sm"><strong>duizend</strong></td><td class="px-3 py-2 text-sm"></td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">2000</td><td class="px-3 py-2 text-sm"><strong>tweeduizend</strong></td><td class="px-3 py-2 text-sm">twee + duizend</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">10.000</td><td class="px-3 py-2 text-sm"><strong>tienduizend</strong></td><td class="px-3 py-2 text-sm">tien + duizend</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">100.000</td><td class="px-3 py-2 text-sm"><strong>honderdduizend</strong></td><td class="px-3 py-2 text-sm"></td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">1.000.000</td><td class="px-3 py-2 text-sm"><strong>een miljoen</strong></td><td class="px-3 py-2 text-sm"></td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">1.000.000.000</td><td class="px-3 py-2 text-sm"><strong>een miljard</strong></td><td class="px-3 py-2 text-sm"></td></tr>
            </tbody>
          </table>
        </div>
      `,
    },
    {
      title: "IJzeren Regels voor Hoofdtelwoorden",
      body: `
        <div class="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-indigo-700 dark:text-indigo-300 mb-2">🧲 Regels</h3>
          <ul class="space-y-1 list-disc pl-5 text-slate-700 dark:text-slate-300">
            <li><strong>Regel 1:</strong> De <strong>eenheid</strong> komt vóór het <strong>tiental</strong>, met <strong>en</strong> ertussen. 21 = <strong>éénentwintig</strong>, 47 = <strong>zevenenveertig</strong>.</li>
            <li><strong>Regel 2:</strong> Alles schrijf je <strong>aan elkaar</strong>. Geen spaties! <strong>drieëntwintig</strong> (NIET: drie en twintig).</li>
            <li><strong>Regel 3:</strong> <strong>Trema (¨)</strong> bij klinkerbotsing: <strong>tweeëntwintig</strong>, <strong>drieëndertig</strong>.</li>
            <li><strong>Regel 4:</strong> De <strong>n</strong> van zeven en negen blijft hoorbaar: <strong>zevenenveertig</strong>, <strong>negenennegentig</strong>.</li>
            <li><strong>Regel 5:</strong> Honderd en duizend blijven <strong>enkelvoud</strong>: <strong>driehonderd</strong> (niet: driehonderden).</li>
          </ul>
        </div>
        <div class="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 rounded-r-lg my-4">
          <p class="font-semibold text-amber-700 dark:text-amber-300">
            <strong>⚠️ PAS OP:</strong> Het accent op <strong>één</strong> (getal) vs <strong>een</strong> (lidwoord).<br>
            Ik heb <strong>één</strong> broer. (getal) | Ik heb <strong>een</strong> boek. (lidwoord)
          </p>
        </div>
      `,
    },
    {
      title: "Rangtelwoorden (eerste, tweede, derde)",
      body: `
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-indigo-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Getal</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Hoofdtelwoord</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Rangtelwoord</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">1</td><td class="px-3 py-2 text-sm">één</td><td class="px-3 py-2 text-sm"><strong>eerste</strong></td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">2</td><td class="px-3 py-2 text-sm">twee</td><td class="px-3 py-2 text-sm"><strong>tweede</strong></td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">3</td><td class="px-3 py-2 text-sm">drie</td><td class="px-3 py-2 text-sm"><strong>derde</strong></td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">4</td><td class="px-3 py-2 text-sm">vier</td><td class="px-3 py-2 text-sm"><strong>vierde</strong></td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">8</td><td class="px-3 py-2 text-sm">acht</td><td class="px-3 py-2 text-sm"><strong>achtste</strong></td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">12</td><td class="px-3 py-2 text-sm">twaalf</td><td class="px-3 py-2 text-sm"><strong>twaalfde</strong></td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">20</td><td class="px-3 py-2 text-sm">twintig</td><td class="px-3 py-2 text-sm"><strong>twintigste</strong></td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">100</td><td class="px-3 py-2 text-sm">honderd</td><td class="px-3 py-2 text-sm"><strong>honderdste</strong></td></tr>
            </tbody>
          </table>
        </div>
        <div class="bg-rose-50 dark:bg-rose-900/20 border-l-4 border-rose-500 p-4 rounded-r-lg my-4">
          <p class="font-semibold text-rose-700 dark:text-rose-300">
            <strong>⚠️ PAS OP:</strong> Drie uitzonderingen:<br>
            1 → <strong>eerste</strong> (niet: eende) | 3 → <strong>derde</strong> (niet: driede) | 8 → <strong>achtste</strong> (niet: achtde)
          </p>
        </div>
        <p class="text-sm text-slate-600 dark:text-slate-400 mt-4">
          <strong>Regel:</strong> Meestal voeg je <strong>-de</strong> toe (tweede, vierde, zesde).<br>
          Bij 8 en getallen boven 19 gebruik je <strong>-ste</strong> (achtste, twintigste, honderdste).
        </p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-indigo-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Voluit</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Kort</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">eerste</td><td class="px-3 py-2 text-sm"><strong>1e</strong></td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">tweede</td><td class="px-3 py-2 text-sm"><strong>2e</strong></td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">derde</td><td class="px-3 py-2 text-sm"><strong>3e</strong></td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">achtste</td><td class="px-3 py-2 text-sm"><strong>8ste</strong></td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">twintigste</td><td class="px-3 py-2 text-sm"><strong>20ste</strong></td></tr>
            </tbody>
          </table>
        </div>
      `,
    },
    {
      title: "Dagen van de Week & Maanden",
      body: `
        <div class="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 rounded-r-lg my-4">
          <p class="font-semibold text-amber-700 dark:text-amber-300">
            <strong>⚠️ PAS OP:</strong> Dagen en maanden schrijf je met een <strong>kleine letter</strong>! Geen hoofdletter! Dit is anders dan in het Engels.
          </p>
        </div>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-indigo-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Dag</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Nederlands</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Afkorting</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Maandag</td><td class="px-3 py-2 text-sm"><strong>maandag</strong></td><td class="px-3 py-2 text-sm">ma</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Dinsdag</td><td class="px-3 py-2 text-sm"><strong>dinsdag</strong></td><td class="px-3 py-2 text-sm">di</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Woensdag</td><td class="px-3 py-2 text-sm"><strong>woensdag</strong></td><td class="px-3 py-2 text-sm">wo</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Donderdag</td><td class="px-3 py-2 text-sm"><strong>donderdag</strong></td><td class="px-3 py-2 text-sm">do</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Vrijdag</td><td class="px-3 py-2 text-sm"><strong>vrijdag</strong></td><td class="px-3 py-2 text-sm">vr</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Zaterdag</td><td class="px-3 py-2 text-sm"><strong>zaterdag</strong></td><td class="px-3 py-2 text-sm">za</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Zondag</td><td class="px-3 py-2 text-sm"><strong>zondag</strong></td><td class="px-3 py-2 text-sm">zo</td></tr>
            </tbody>
          </table>
        </div>
        <h3 class="text-lg font-bold mt-6 mb-2">Maanden van het Jaar</h3>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-indigo-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Maand</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Nederlands</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Januari</td><td class="px-3 py-2 text-sm"><strong>januari</strong></td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Februari</td><td class="px-3 py-2 text-sm"><strong>februari</strong></td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Maart</td><td class="px-3 py-2 text-sm"><strong>maart</strong></td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">April</td><td class="px-3 py-2 text-sm"><strong>april</strong></td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Mei</td><td class="px-3 py-2 text-sm"><strong>mei</strong></td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Juni</td><td class="px-3 py-2 text-sm"><strong>juni</strong></td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Juli</td><td class="px-3 py-2 text-sm"><strong>juli</strong></td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Augustus</td><td class="px-3 py-2 text-sm"><strong>augustus</strong></td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">September</td><td class="px-3 py-2 text-sm"><strong>september</strong></td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Oktober</td><td class="px-3 py-2 text-sm"><strong>oktober</strong></td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">November</td><td class="px-3 py-2 text-sm"><strong>november</strong></td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">December</td><td class="px-3 py-2 text-sm"><strong>december</strong></td></tr>
            </tbody>
          </table>
        </div>
      `,
    },
    {
      title: "De Datum Zeggen & Jaartallen",
      body: `
        <div class="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-indigo-700 dark:text-indigo-300 mb-2">📅 Datum zeggen</h3>
          <p class="text-slate-700 dark:text-slate-300">In spreektaal gebruik je het <strong>gewone hoofdtelwoord</strong>:</p>
          <ul class="space-y-1 list-disc pl-5 text-slate-700 dark:text-slate-300">
            <li>1 mei = <strong>één mei</strong></li>
            <li>5 december = <strong>vijf december</strong></li>
            <li>31 december = <strong>éénendertig december</strong></li>
          </ul>
          <p class="text-slate-700 dark:text-slate-300 mt-2">In officiële taal: <strong>de eerste mei</strong>, <strong>de vijfde december</strong>.</p>
        </div>
        <h3 class="text-lg font-bold mt-6 mb-2">Voorzetsels bij tijd en datum</h3>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-indigo-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Voorzetsel</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Gebruik</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Voorbeeld</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm"><strong>op</strong></td><td class="px-3 py-2 text-sm">bij een specifieke dag of datum</td><td class="px-3 py-2 text-sm"><strong>op</strong> maandag, <strong>op</strong> 5 mei</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm"><strong>in</strong></td><td class="px-3 py-2 text-sm">bij een maand, seizoen of jaar</td><td class="px-3 py-2 text-sm"><strong>in</strong> januari, <strong>in</strong> 2024</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm"><strong>om</strong></td><td class="px-3 py-2 text-sm">bij een specifieke tijd</td><td class="px-3 py-2 text-sm"><strong>om</strong> 8 uur, <strong>om</strong> half 3</td></tr>
            </tbody>
          </table>
        </div>
        <h3 class="text-lg font-bold mt-6 mb-2">Jaartallen uitspreken</h3>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-indigo-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Jaar</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Uitspraak</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">1985</td><td class="px-3 py-2 text-sm"><strong>negentien vijfentachtig</strong></td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">2000</td><td class="px-3 py-2 text-sm"><strong>tweeduizend</strong></td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">2010</td><td class="px-3 py-2 text-sm"><strong>tweeduizend tien</strong> of <strong>twintig tien</strong></td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">2024</td><td class="px-3 py-2 text-sm"><strong>tweeduizend vierentwintig</strong></td></tr>
            </tbody>
          </table>
        </div>
      `,
    },
  ],
  rulesTable: [
    {
      rule: "Eenheid vóór tiental bij getallen boven 20",
      structure: "eenheid + **en** + tiental, alles **aan elkaar** geschreven",
      example: "21 = **éénentwintig**, 47 = **zevenenveertig**, 83 = **drieëntachtig**",
      usage: "Dit is precies andersom dan in het Engels! Oefen: 25 = vijfentwintig, 68 = achtenzestig.",
    },
    {
      rule: "Trema bij klinkerbotsing",
      structure: "Als twee klinkers apart worden uitgesproken, komt er een trema (¨) op de tweede klinker.",
      example: "**tweeëntwintig**, **drieëndertig**, **zeeën**",
      usage: "Geen trema nodig bij éénentwintig (e en t botsen niet als klinkers).",
    },
    {
      rule: "Rangtelwoorden: -de of -ste",
      structure: "Meestal **-de** (tweede, vierde). Bij 8 en boven 19: **-ste** (achtste, twintigste).",
      example: "twee → **tweede**, acht → **achtste**, twintig → **twintigste**",
      usage: "Uitzonderingen: **eerste** (1), **derde** (3), **achtste** (8).",
    },
    {
      rule: "Dagen en maanden met kleine letter",
      structure: "Dagen en maanden schrijf je in het Nederlands met een **kleine letter**.",
      example: "**maandag**, **dinsdag**, **januari**, **februari**",
      usage: "Dit is anders dan in het Engels! Fout: Maandag, Januari.",
    },
    {
      rule: "Voorzetsels: op, in, om",
      structure: "**op** + dag/datum | **in** + maand/jaar | **om** + tijdstip",
      example: "**op** maandag, **in** januari, **om** 8 uur",
      usage: "Nooit: 'in maandag' of 'op januari'!",
    },
    {
      rule: "één (getal) vs een (lidwoord)",
      structure: "**één** met accenten = getal 1. **een** zonder accent = lidwoord.",
      example: "Ik heb **één** broer. vs Ik heb **een** boek.",
      usage: "In samengestelde woorden: **éénentwintig** of **eenentwintig** (beide goed).",
    },
    {
      rule: "Jaartallen uitspreken",
      structure: "Tot 2000: in **paren**. Vanaf 2000: **tweeduizend** + jaartal.",
      example: "1985 = **negentien vijfentachtig** | 2024 = **tweeduizend vierentwintig**",
      usage: "2000 = tweeduizend, 2005 = tweeduizend vijf.",
    },
  ],
  callouts: [
    {
      type: "remember",
      label: "Onthoud 1",
      text: "Bij getallen boven 20: **eenheid** + **en** + **tiental**, aan elkaar: **éénentwintig, drieënveertig, achtennegentig**.",
    },
    {
      type: "remember",
      label: "Onthoud 2",
      text: "Dagen en maanden met **kleine letter**: maandag, dinsdag, januari, februari. ⚠️ PAS OP: anders dan in het Engels!",
    },
    {
      type: "remember",
      label: "Onthoud 3",
      text: "Rangtelwoorden: meestal **-de** (tweede, vierde). Uitzonderingen: **eerste** (1), **derde** (3), **achtste** (8). Boven 19: **-ste** (twintigste).",
    },
    {
      type: "remember",
      label: "Onthoud 4",
      text: "Datum in spreektaal: **vijf mei**. Officieel: **de vijfde mei**.",
    },
    {
      type: "remember",
      label: "Onthoud 5",
      text: "Voorzetsels: **op** + dag/datum, **in** + maand/jaar, **om** + tijdstip.",
    },
    {
      type: "remember",
      label: "Onthoud 6",
      text: "**één** met accent = getal 1. **een** zonder accent = lidwoord.",
    },
    {
      type: "remember",
      label: "Onthoud 7",
      text: "Jaartallen tot 2000 in paren: 1985 = **negentien vijfentachtig**. Vanaf 2000: **tweeduizend** + jaartal.",
    },
  ],
  commonMistakes: [
    { incorrect: "twintig-één", correct: "éénentwintig", explanation: "De eenheid komt vóór het tiental, met en" },
    { incorrect: "vijftig-zeven", correct: "zevenenvijftig", explanation: "Eerst de eenheid, dan het tiental" },
    { incorrect: "drie en twintig", correct: "drieëntwintig", explanation: "Alles aan elkaar schrijven, met trema" },
    { incorrect: "Maandag (met hoofdletter)", correct: "maandag", explanation: "Dagen schrijf je met een kleine letter" },
    { incorrect: "Januari (met hoofdletter)", correct: "januari", explanation: "Maanden schrijf je met een kleine letter" },
    { incorrect: "5 Mei", correct: "5 mei", explanation: "Maand altijd met kleine letter" },
    { incorrect: "1990 als één-negen-negen-nul", correct: "negentien negentig", explanation: "Jaartallen in paren uitspreken" },
    { incorrect: "twaalfste", correct: "twaalfde", explanation: "Twaalf krijgt -de, niet -ste" },
    { incorrect: "driede", correct: "derde", explanation: "Uitzondering op de regel" },
    { incorrect: "eende", correct: "eerste", explanation: "Uitzondering op de regel" },
    { incorrect: "op januari", correct: "in januari", explanation: "Voor maanden gebruik je \"in\"" },
    { incorrect: "in maandag", correct: "op maandag", explanation: "Voor dagen gebruik je \"op\"" },
    { incorrect: "om maandag", correct: "op maandag", explanation: "Voor dagen gebruik je \"op\", niet \"om\"" },
    { incorrect: "Ik ben geboren in 5 mei", correct: "Ik ben geboren op 5 mei", explanation: "Voor een datum gebruik je \"op\"" },
  ],
  review: [
    "**0–10:** nul, één, twee, drie, vier, vijf, zes, zeven, acht, negen, tien",
    "**11–19:** elf, twaalf, dertien, veertien, vijftien, zestien, zeventien, achttien, negentien",
    "**Tientallen:** twintig, dertig, veertig, vijftig, zestig, zeventig, tachtig, negentig",
    "**100 = honderd | 1000 = duizend | 1.000.000 = een miljoen**",
    "**Volgorde bij getallen:** eenheid + en + tiental = éénentwintig, vijfenveertig",
    "**Rangtelwoorden:** -de (tweede, vierde) of -ste (achtste, twintigste)",
    "**Uitzonderingen rangtelwoorden:** eerste, derde, achtste",
    "**Dagen:** maandag, dinsdag, woensdag, donderdag, vrijdag, zaterdag, zondag (kleine letter!)",
    "**Maanden:** januari, februari, maart, april, mei, juni, juli, augustus, september, oktober, november, december (kleine letter!)",
    "**Datum zeggen:** vijf mei, tien januari, éénendertig december",
    "**Datum officieel:** de eerste mei, de vijfde december",
    "**Voorzetsels:** op maandag, in januari, om 8 uur",
    "**Jaartallen:** 1999 = negentien negenennegentig | 2024 = tweeduizend vierentwintig",
  ],
  qa: [
    { question: "Hoe tel je van 1 tot 10 in het Nederlands?", answer: "Één, twee, drie, vier, vijf, zes, zeven, acht, negen, tien." },
    { question: "Hoe zeg je 21 in het Nederlands?", answer: "**Éénentwintig** (één-en-twintig, aan elkaar geschreven)." },
    { question: "Hoe zeg je 47 in het Nederlands?", answer: "**Zevenenveertig**." },
    { question: "Hoe zeg je 83 in het Nederlands?", answer: "**Drieëntachtig** (met trema op de e)." },
    { question: "Wat is de regel voor getallen boven de 20?", answer: "De eenheid komt vóór het tiental, met **en** ertussen. Alles aan elkaar. Bijvoorbeeld: vierendertig, zevenenvijftig." },
    { question: "Hoe zeg je 100 in het Nederlands?", answer: "**Honderd**." },
    { question: "Hoe zeg je 1000 in het Nederlands?", answer: "**Duizend**." },
    { question: "Hoe zeg je 1.000.000 in het Nederlands?", answer: "**Een miljoen**." },
    { question: "Hoe maak je een rangtelwoord?", answer: "Meestal met **-de** (tweede, vierde) of **-ste** (achtste, twintigste). Uitzonderingen: eerste (1), derde (3), achtste (8)." },
    { question: "Wat is het rangtelwoord van 1?", answer: "**Eerste** (niet: eende)." },
    { question: "Wat is het rangtelwoord van 3?", answer: "**Derde** (niet: driede)." },
    { question: "Wat is het rangtelwoord van 8?", answer: "**Achtste** (niet: achtde)." },
    { question: "Wat is het rangtelwoord van 20?", answer: "**Twintigste**." },
    { question: "Hoe zeg je de dagen van de week in het Nederlands?", answer: "Maandag, dinsdag, woensdag, donderdag, vrijdag, zaterdag, zondag." },
    { question: "Met welke letter schrijf je dagen en maanden?", answer: "Met een **kleine letter** (maandag, januari). Dit is anders dan in het Engels." },
    { question: "Hoe zeg je de datum \"5 mei\"?", answer: "In spreektaal: **vijf mei**. In schrijftaal: **de vijfde mei**." },
    { question: "Welk voorzetsel gebruik je bij een dag?", answer: "**Op**: op maandag, op 5 mei." },
    { question: "Welk voorzetsel gebruik je bij een maand?", answer: "**In**: in januari, in augustus." },
    { question: "Welk voorzetsel gebruik je bij een tijd?", answer: "**Om**: om 8 uur, om half 3." },
    { question: "Wat is het verschil tussen één en een?", answer: "**Één** met accenten is het getal 1. **Een** zonder accent is het lidwoord." },
    { question: "Hoe spreek je het jaartal 1985 uit?", answer: "**Negentien vijfentachtig**." },
    { question: "Hoe spreek je het jaartal 2000 uit?", answer: "**Tweeduizend**." },
    { question: "Hoe spreek je het jaartal 2024 uit?", answer: "**Tweeduizend vierentwintig** of **twintig vierentwintig**." },
    { question: "Wat zijn de maanden van het jaar?", answer: "Januari, februari, maart, april, mei, juni, juli, augustus, september, oktober, november, december." },
    { question: "Hoe vraag je welke dag het is?", answer: "**Welke dag is het vandaag?**" },
    { question: "Hoe vraag je welke datum het is?", answer: "**Welke datum is het vandaag?**" },
    { question: "Hoe zeg je 1563 in het Nederlands?", answer: "**Duizend vijfhonderddrieënzestig**." },
    { question: "Hoe zeg je 2025 in het Nederlands?", answer: "**Tweeduizend vijfentwintig**." },
  ],
};