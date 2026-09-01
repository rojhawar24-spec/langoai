import type { GrammarLesson } from "../../types";

export const lijdendVoorwerp: GrammarLesson = {
  id: "nl-lijdendvoorwerp-1",
  title: "Het Lijdend Voorwerp: Wie/Wat + Persoonsvorm + Onderwerp? – De Definitieve Gids",
  level: 2,
  topic: "Lijdend voorwerp",
  body: "Beheers het lijdend voorwerp volledig: de vraagproef, onderscheid van onderwerp/meewerkend voorwerp, passiefproef, en alle valkuilen.",
  overview:
    "Dit is de allesomvattende, encyclopedische gids over het lijdend voorwerp in het Nederlands. Je leert de onfeilbare vraagproef (Wie/Wat + persoonsvorm + onderwerp?), begrijpt het cruciale verschil tussen onderwerp, lijdend voorwerp en meewerkend voorwerp, beheerst de passiefproef als extra test, en vermijdt de 10 meest gemaakte fouten. Met kristalheldere tabellen, 100+ voorbeeldzinnen, stap-voor-stap algoritmes en uitgebreide oefeningen van basis tot expertniveau identificeer jij voortaan elk lijdend voorwerp foutloos.",
  anchorSectionId: "wat-is-lv",
  exercises: [],
  timeExpressionsLabel: "Het lijdend voorwerp in één oogopslag 🎯",
  timeExpressions: {
    header: "Zinsdeel | Vraag | Voorbeeld | Antwoord",
    rows: [
      ["🔹 Onderwerp", "Wie/Wat + persoonsvorm?", "Wie bijt? → De hond", "De hond"],
      ["🔹 Lijdend voorwerp", "Wie/Wat + pv + onderwerp?", "Wat bijt de hond? → de postbode", "de postbode"],
      ["🔹 Meewerkend voorwerp", "Aan/Wie/Voor wie + pv + ow + lv?", "Aan wie geeft de leraar een boek? → de leerlingen", "de leerlingen"],
      ["🔹 Voorzetselvoorwerp", "Voorzetsel + wie/wat?", "Waar wacht hij op? → op de bus", "op de bus"],
      ["🔹 Passiefproef", "LV wordt onderwerp in passief", "De hond bijt de postbode → De postbode wordt gebeten", "Bevestiging van LV"]
    ]
  },
  details: [
    {
      title: "Deel 1: Wat is het lijdend voorwerp? 🎯",
      body: `
        <p>Het <strong>lijdend voorwerp</strong> is het zinsdeel dat de handeling van het werkwoord <strong>rechtstreeks ondergaat</strong>. Het is het antwoord op de vraag: <em>wie of wat wordt er door het onderwerp gedaan?</em></p>
        
        <div class="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-lg p-4 my-4">
          <p class="font-bold text-emerald-800 dark:text-emerald-200 mb-2">✅ Kernkenmerken:</p>
          <ul class="space-y-1 text-sm text-slate-700 dark:text-slate-300">
            <li>• Het <strong>ondergaat</strong> de actie, het voert hem niet uit</li>
            <li>• Het staat <strong>zonder voorzetsel</strong> direct na het werkwoord</li>
            <li>• Het kan een <strong>zelfstandig naamwoord, voornaamwoord, woordgroep of bijzin</strong> zijn</li>
            <li>• Alleen <strong>overgankelijke (transitieve) werkwoorden</strong> kunnen een lijdend voorwerp hebben</li>
          </ul>
        </div>
        
        <div class="grid md:grid-cols-2 gap-4 my-4">
          <div class="bg-white dark:bg-slate-800/50 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
            <h4 class="font-bold text-emerald-700 dark:text-emerald-300 mb-2">✅ Voorbeelden met zelfstandig naamwoord</h4>
            <ul class="space-y-1 text-sm">
              <li>• De jongen gooit <strong>de bal</strong>. → Wat gooit de jongen? → de bal</li>
              <li>• Zij leest <strong>een boek</strong>. → Wat leest zij? → een boek</li>
              <li>• De leraar geeft <strong>een compliment</strong>. → Wat geeft de leraar? → een compliment</li>
            </ul>
          </div>
          <div class="bg-white dark:bg-slate-800/50 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
            <h4 class="font-bold text-indigo-700 dark:text-indigo-300 mb-2">✅ Voorbeelden met voornaamwoord</h4>
            <ul class="space-y-1 text-sm">
              <li>• Ik zie <strong>jou</strong>. → Wie zie ik? → jou</li>
              <li>• Hij helpt <strong>haar</strong>. → Wie helpt hij? → haar</li>
              <li>• Wij kennen <strong>hen</strong>. → Wie kennen wij? → hen</li>
            </ul>
          </div>
        </div>
      `
    },
    {
      title: "Deel 2: De vraagproef – het lijdend voorwerp vinden 🔎",
      body: `
        <p>De klassieke, <strong>onfeilbare</strong> manier om het lijdend voorwerp te vinden, is door een specifieke vraag te stellen. Let op de exacte volgorde!</p>
        
        <div class="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 rounded-lg p-4 my-4">
          <p class="font-bold text-indigo-800 dark:text-indigo-200 mb-2">📐 De formule:</p>
          <p class="text-lg text-center font-mono bg-white dark:bg-slate-900 p-3 rounded mb-2">
            WIE (of WAT) + PERSOONSVOORM + ONDERWERP (+ overige werkwoorden)?
          </p>
          <p class="text-sm text-slate-700 dark:text-slate-300">Het antwoord op deze vraag is het lijdend voorwerp.</p>
        </div>
        
        <div class="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-400 p-4 my-4">
          <p class="font-bold text-amber-800 dark:text-amber-200 mb-1">⚠️ BELANGRIJK: Het cruciale verschil met de onderwerpsvraag!</p>
          <p class="text-sm text-slate-700 dark:text-slate-300 mt-1">
            • <strong>Onderwerpsvraag:</strong> Wie/Wat + <em>alleen</em> persoonsvorm? → vind het <em>onderwerp</em><br>
            • <strong>Lijdend-voorwerpsvraag:</strong> Wie/Wat + persoonsvorm + <em>onderwerp</em>? → vind het <em>lijdend voorwerp</em><br><br>
            Het onderwerp <strong>moet</strong> in de vraag worden opgenomen bij het lijdend voorwerp. Dit is het allerbelangrijkste verschil!
          </p>
        </div>
        
        <h3 class="text-lg font-bold mt-4 mb-2">📋 Stappenplan:</h3>
        <ol class="list-decimal list-inside space-y-2 text-sm text-slate-700 dark:text-slate-300">
          <li><strong>Zoek de persoonsvorm (pv)</strong> in de zin. (Het vervoegde werkwoord)</li>
          <li><strong>Zoek het onderwerp (ow)</strong> in de zin. (Wie/Wat + pv?)</li>
          <li><strong>Stel de vraag:</strong> Wie of Wat + pv + ow (+ andere werkwoorden)?</li>
          <li><strong>Het antwoord</strong> op die vraag is het lijdend voorwerp.</li>
        </ol>
      `
    },
    {
      title: "Deel 3: Eenvoudige voorbeelden – stap voor stap 🧩",
      body: `
        <p>Laten we de vraagproef toepassen op concrete zinnen.</p>
        
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-emerald-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Zin</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Persoonsvorm</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Onderwerp</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Vraag</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Lijdend voorwerp</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm">De hond bijt de postbode.</td>
                <td class="px-4 py-3 text-sm">bijt</td>
                <td class="px-4 py-3 text-sm">De hond</td>
                <td class="px-4 py-3 text-sm">Wat + bijt + de hond?</td>
                <td class="px-4 py-3 text-sm font-semibold text-emerald-600">de postbode</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm">Mijn zus schrijft een brief.</td>
                <td class="px-4 py-3 text-sm">schrijft</td>
                <td class="px-4 py-3 text-sm">Mijn zus</td>
                <td class="px-4 py-3 text-sm">Wat + schrijft + mijn zus?</td>
                <td class="px-4 py-3 text-sm font-semibold text-emerald-600">een brief</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm">Ik zie hem.</td>
                <td class="px-4 py-3 text-sm">zie</td>
                <td class="px-4 py-3 text-sm">Ik</td>
                <td class="px-4 py-3 text-sm">Wie + zie + ik?</td>
                <td class="px-4 py-3 text-sm font-semibold text-emerald-600">hem</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm">Wij eten pizza.</td>
                <td class="px-4 py-3 text-sm">eten</td>
                <td class="px-4 py-3 text-sm">Wij</td>
                <td class="px-4 py-3 text-sm">Wat + eten + wij?</td>
                <td class="px-4 py-3 text-sm font-semibold text-emerald-600">pizza</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50">
                <td class="px-4 py-3 text-sm">De kat vangt de muis.</td>
                <td class="px-4 py-3 text-sm">vangt</td>
                <td class="px-4 py-3 text-sm">De kat</td>
                <td class="px-4 py-3 text-sm">Wat + vangt + de kat?</td>
                <td class="px-4 py-3 text-sm font-semibold text-emerald-600">de muis</td>
              </tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      title: "Deel 4: Zinnen met meerdere werkwoorden 🏗️",
      body: `
        <p>Als de zin naast de persoonsvorm nog andere werkwoordsvormen bevat (infinitief, voltooid deelwoord), dan neem je die <strong>ook op in de vraag</strong>.</p>
        
        <div class="grid md:grid-cols-2 gap-4 my-4">
          <div class="bg-white dark:bg-slate-800/50 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
            <h4 class="font-bold text-emerald-700 dark:text-emerald-300 mb-2">🔹 Voltooide tijd</h4>
            <p class="text-sm text-slate-700 dark:text-slate-300 mb-2">Zin: <em>Ik heb een taart gebakken.</em></p>
            <ul class="space-y-1 text-sm">
              <li>• Persoonsvorm: <strong>heb</strong></li>
              <li>• Onderwerp: <strong>Ik</strong></li>
              <li>• Vraag: Wat + <strong>heb</strong> + <strong>ik</strong> + <strong>gebakken</strong>?</li>
              <li>• Antwoord: <strong>een taart</strong> (lijdend voorwerp)</li>
            </ul>
          </div>
          
          <div class="bg-white dark:bg-slate-800/50 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
            <h4 class="font-bold text-indigo-700 dark:text-indigo-300 mb-2">🔹 Modaal werkwoord</h4>
            <p class="text-sm text-slate-700 dark:text-slate-300 mb-2">Zin: <em>Zij wil een boek kopen.</em></p>
            <ul class="space-y-1 text-sm">
              <li>• Persoonsvorm: <strong>wil</strong></li>
              <li>• Onderwerp: <strong>Zij</strong></li>
              <li>• Vraag: Wat + <strong>wil</strong> + <strong>zij</strong> + <strong>kopen</strong>?</li>
              <li>• Antwoord: <strong>een boek</strong> (lijdend voorwerp)</li>
            </ul>
          </div>
          
          <div class="bg-white dark:bg-slate-800/50 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
            <h4 class="font-bold text-amber-700 dark:text-amber-300 mb-2">🔹 Scheidbaar werkwoord</h4>
            <p class="text-sm text-slate-700 dark:text-slate-300 mb-2">Zin: <em>Ik bel haar morgen op.</em></p>
            <ul class="space-y-1 text-sm">
              <li>• Persoonsvorm: <strong>bel ... op</strong></li>
              <li>• Onderwerp: <strong>Ik</strong></li>
              <li>• Vraag: Wie + <strong>bel</strong> + <strong>ik</strong> + <strong>morgen op</strong>?</li>
              <li>• Antwoord: <strong>haar</strong> (lijdend voorwerp)</li>
            </ul>
          </div>
          
          <div class="bg-white dark:bg-slate-800/50 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
            <h4 class="font-bold text-purple-700 dark:text-purple-300 mb-2">🔹 Passieve constructie</h4>
            <p class="text-sm text-slate-700 dark:text-slate-300 mb-2">Zin: <em>Hij wordt door de politie gezocht.</em></p>
            <ul class="space-y-1 text-sm">
              <li>• Persoonsvorm: <strong>wordt</strong></li>
              <li>• Onderwerp: <strong>Hij</strong></li>
              <li>• Vraag: Wie + <strong>wordt</strong> + <strong>hij</strong> + <strong>gezocht</strong>?</li>
              <li>• Antwoord: <strong>(door de politie)</strong> → geen LV, dit is passief!</li>
            </ul>
          </div>
        </div>
      `
    },
    {
      title: "Deel 5: Onderscheid tussen onderwerp, LV en meewerkend voorwerp ⚖️",
      body: `
        <p>Dit is een beruchte valkuil. Bekijk hoe de vragen systematisch verschillen:</p>
        
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-indigo-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Zinsdeel</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Vraagformule</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Voorbeeldzin</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Antwoord</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">Onderwerp</td>
                <td class="px-4 py-3 text-sm">Wie/Wat + <em>persoonsvorm</em>?</td>
                <td class="px-4 py-3 text-sm">Wie geeft? (De leraar geeft...)</td>
                <td class="px-4 py-3 text-sm">De leraar</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">Lijdend voorwerp</td>
                <td class="px-4 py-3 text-sm">Wie/Wat + pv + <em>onderwerp</em>?</td>
                <td class="px-4 py-3 text-sm">Wat geeft de leraar?</td>
                <td class="px-4 py-3 text-sm">een boek</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">Meewerkend voorwerp</td>
                <td class="px-4 py-3 text-sm">Aan/Wie/Voor wie + pv + ow + <em>lv</em>?</td>
                <td class="px-4 py-3 text-sm">Aan wie geeft de leraar een boek?</td>
                <td class="px-4 py-3 text-sm">de leerlingen</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30">
                <td class="px-4 py-3 text-sm font-semibold">Voorzetselvoorwerp</td>
                <td class="px-4 py-3 text-sm">Voorzetsel + wie/wat?</td>
                <td class="px-4 py-3 text-sm">Waar wacht hij op?</td>
                <td class="px-4 py-3 text-sm">op de bus</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div class="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-400 p-4 my-4">
          <p class="font-bold text-amber-800 dark:text-amber-200 mb-1">⚠️ PAS OP: De volgorde van vragen is cruciaal!</p>
          <p class="text-sm text-slate-700 dark:text-slate-300 mt-1">
            1. Eerst vind je het <strong>onderwerp</strong> (Wie/Wat + pv?)<br>
            2. Dan vind je het <strong>lijdend voorwerp</strong> (Wie/Wat + pv + <em>onderwerp</em>?)<br>
            3. Dan vind je het <strong>meewerkend voorwerp</strong> (Aan wie + pv + ow + <em>lv</em>?)<br><br>
            Sla je stap 1 over? Dan vind je per ongeluk het onderwerp in plaats van het lijdend voorwerp!
          </p>
        </div>
      `
    },
    {
      title: "Deel 6: Kenmerken & werkwoorden zonder lijdend voorwerp 🧾🚫",
      body: `
        <h3 class="text-lg font-bold mt-4 mb-2">✅ Kenmerken van het lijdend voorwerp:</h3>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-emerald-400 dark:before:bg-emerald-500 text-slate-700 dark:text-slate-300">Het wordt <strong>rechtstreeks</strong> door het onderwerp 'aangedaan'</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-emerald-400 dark:before:bg-emerald-500 text-slate-700 dark:text-slate-300">Het kan een <strong>zelfstandig naamwoord, voornaamwoord, woordgroep of hele bijzin</strong> zijn</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-emerald-400 dark:before:bg-emerald-500 text-slate-700 dark:text-slate-300">Het staat <strong>nooit met een voorzetsel</strong> (staat er wél een? → voorzetselvoorwerp)</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-emerald-400 dark:before:bg-emerald-500 text-slate-700 dark:text-slate-300">Alleen <strong>overgankelijke (transitieve) werkwoorden</strong> kunnen een lijdend voorwerp hebben</li>
        </ul>
        
        <h3 class="text-lg font-bold mt-6 mb-2">🚫 Werkwoorden die GEEN lijdend voorwerp kunnen hebben:</h3>
        <p class="text-sm text-slate-700 dark:text-slate-300 mb-2">Sommige werkwoorden zijn <strong>onovergankelijk (intransitief)</strong>: ze kunnen nooit een lijdend voorwerp bij zich hebben.</p>
        
        <div class="grid md:grid-cols-2 gap-3 my-4">
          <div class="bg-rose-50 dark:bg-rose-900/20 border border-rose-200 dark:border-rose-800 rounded-lg p-3">
            <p class="text-sm font-bold text-rose-700 dark:text-rose-300 mb-1">❌ Onovergankelijke werkwoorden:</p>
            <p class="text-xs text-slate-600 dark:text-slate-400">zijn, worden, blijven, lijken, slapen, regenen, sterven, vallen, gebeuren, wandelen, huilen, lachen</p>
          </div>
          <div class="bg-white dark:bg-slate-800/50 rounded-lg p-3 border border-slate-200 dark:border-slate-700">
            <p class="text-sm font-bold text-emerald-700 dark:text-emerald-300 mb-1">✅ Voorbeeldanalyse:</p>
            <p class="text-xs">Zin: <em>De baby slaapt.</em><br>Vraag: Wat slaapt de baby? → Geen zinnig antwoord.<br>Conclusie: <strong>geen lijdend voorwerp</strong>.</p>
          </div>
        </div>
      `
    },
    {
      title: "Deel 7: De passiefproef – een extra test 🧪",
      body: `
        <p>Een andere manier om te controleren of een zinsdeel lijdend voorwerp is, is de <strong>passiefproef</strong>. Maak de zin passief (lijdende vorm): het lijdend voorwerp wordt dan het onderwerp.</p>
        
        <div class="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 rounded-lg p-4 my-4">
          <p class="font-bold text-indigo-800 dark:text-indigo-200 mb-2">📐 De formule:</p>
          <p class="text-sm text-slate-700 dark:text-slate-300 mb-2">Als zinsdeel X in de actieve zin het onderwerp wordt in de passieve zin → X was het lijdend voorwerp.</p>
          <div class="bg-white dark:bg-slate-900 p-3 rounded font-mono text-sm">
            Actief: De hond bijt <strong>de postbode</strong>.<br>
            Passief: <strong>De postbode</strong> wordt (door de hond) gebeten.<br><br>
            → "de postbode" is onderwerp geworden → dus was het lijdend voorwerp!
          </div>
        </div>
        
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-emerald-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Actieve zin</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Passieve zin</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Lijdend voorwerp</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm">De bakker bakt het brood.</td>
                <td class="px-4 py-3 text-sm">Het brood wordt (door de bakker) gebakken.</td>
                <td class="px-4 py-3 text-sm font-semibold">het brood</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm">Zij schrijft een brief.</td>
                <td class="px-4 py-3 text-sm">Een brief wordt (door haar) geschreven.</td>
                <td class="px-4 py-3 text-sm font-semibold">een brief</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50">
                <td class="px-4 py-3 text-sm">Wij zien hen.</td>
                <td class="px-4 py-3 text-sm">Zij worden (door ons) gezien.</td>
                <td class="px-4 py-3 text-sm font-semibold">hen</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div class="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-400 p-4 my-4">
          <p class="font-bold text-amber-800 dark:text-amber-200 mb-1">⚠️ PAS OP: Niet elke zin kan passief!</p>
          <p class="text-sm text-slate-700 dark:text-slate-300 mt-1">
            Alleen zinnen met een <strong>overgankelijk werkwoord</strong> en een <strong>lijdend voorwerp</strong> kunnen passief worden.<br><br>
            ❌ <em>De baby slaapt.</em> → Geen passief mogelijk (geen LV)<br>
            ❌ <em>Hij wacht op de bus.</em> → Geen passief mogelijk (voorzetselvoorwerp, geen LV)<br>
            ✅ <em>De hond bijt de postbode.</em> → Wél passief: <em>De postbode wordt gebeten.</em>
          </p>
        </div>
      `
    },
    {
      title: "Deel 8: Valkuilen & veelgemaakte fouten ❌ → ✅",
      body: `
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-rose-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Fout</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Correct</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Uitleg</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm"><em>Ik hou van jou. (Is 'jou' het LV?)</em></td>
                <td class="px-4 py-3 text-sm">Nee, <em>van jou</em> is een voorzetselvoorwerp.</td>
                <td class="px-4 py-3 text-sm text-xs"><em>Houden van</em> is een voorzetselwerkwoord. Een LV heeft <strong>géén</strong> voorzetsel!</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm"><em>Hij wacht de bus.</em></td>
                <td class="px-4 py-3 text-sm"><em>Hij wacht op de bus.</em></td>
                <td class="px-4 py-3 text-sm text-xs"><em>Wachten</em> vereist het voorzetsel <em>op</em>. <em>Op de bus</em> is voorzetselvoorwerp, geen LV.</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm"><em>Wie/Wat + pv?</em> als LV-vraag</td>
                <td class="px-4 py-3 text-sm"><em>Wie/Wat + pv + onderwerp?</em></td>
                <td class="px-4 py-3 text-sm text-xs">Anders vind je per ongeluk het <strong>onderwerp</strong> in plaats van het lijdend voorwerp!</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm"><em>Zij geeft de leerlingen het boek.</em> → LV = de leerlingen?</td>
                <td class="px-4 py-3 text-sm">LV = <em>het boek</em>. Meewerkend vw = <em>de leerlingen</em>.</td>
                <td class="px-4 py-3 text-sm text-xs">Vraag: Wat geeft zij? → het boek (LV). Aan wie? → de leerlingen (meewerkend).</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50">
                <td class="px-4 py-3 text-sm"><em>De zon schijnt.</em> → Wat schijnt de zon?</td>
                <td class="px-4 py-3 text-sm">Geen lijdend voorwerp mogelijk.</td>
                <td class="px-4 py-3 text-sm text-xs"><em>Schijnen</em> is onovergankelijk. Er is geen LV.</td>
              </tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      title: "Deel 9: Snelle herhaling – alles op één pagina ⚡",
      body: `
        <ul class="my-2 space-y-2 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-['✅'] before:absolute before:left-0 before:top-[0.4rem] text-slate-700 dark:text-slate-300"><strong>Lijdend voorwerp</strong> = ondergaat de handeling rechtstreeks.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-['✅'] before:absolute before:left-0 before:top-[0.4rem] text-slate-700 dark:text-slate-300"><strong>Vraagproef:</strong> Wie/Wat + persoonsvorm + onderwerp? (Let op: onderwerp in de vraag!)</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-['✅'] before:absolute before:left-0 before:top-[0.4rem] text-slate-700 dark:text-slate-300"><strong>Passiefproef:</strong> Zet de zin in de lijdende vorm; het LV wordt onderwerp.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-['✅'] before:absolute before:left-0 before:top-[0.4rem] text-slate-700 dark:text-slate-300"><strong>Kan zijn:</strong> zelfstandig naamwoord, voornaamwoord, woordgroep of hele bijzin.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-['✅'] before:absolute before:left-0 before:top-[0.4rem] text-slate-700 dark:text-slate-300"><strong>Nooit een voorzetsel</strong> voor het lijdend voorwerp. Wel voorzetsel? → voorzetselvoorwerp.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-['✅'] before:absolute before:left-0 before:top-[0.4rem] text-slate-700 dark:text-slate-300"><strong>Alleen overgankelijke werkwoorden</strong> kunnen een LV hebben (niet: zijn, worden, slapen, etc.).</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-['⚠️'] before:absolute before:left-0 before:top-[0.4rem] text-slate-700 dark:text-slate-300"><strong>Volgorde van vragen:</strong> Eerst onderwerp vinden, dan LV, dan meewerkend voorwerp.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-['⚠️'] before:absolute before:left-0 before:top-[0.4rem] text-slate-700 dark:text-slate-300"><strong>Bij meerdere werkwoorden:</strong> Neem alle werkwoordsvormen mee in de vraag.</li>
        </ul>
      `
    }
  ],
  rulesTable: [
    {
      rule: "Vraagproef voor lijdend voorwerp",
      structure: "Wie/Wat + persoonsvorm + onderwerp (+ overige werkwoorden)?",
      example: "Wat + eet + de kat? → de muis • Wie + zie + ik? → jou",
      usage: "Het onderwerp MOET in de vraag worden opgenomen. Anders vind je het onderwerp zelf!"
    },
    {
      rule: "Kenmerken van het lijdend voorwerp",
      structure: "Ondergaat actie rechtstreeks, géén voorzetsel, alleen bij overgankelijke werkwoorden.",
      example: "De hond bijt de postbode. (de postbode = LV, geen voorzetsel)",
      usage: "Staat er een voorzetsel voor? Dan is het geen LV maar een voorzetselvoorwerp."
    },
    {
      rule: "Passiefproef",
      structure: "Maak de zin passief: het LV wordt het onderwerp in de passieve zin.",
      example: "Actief: De bakker bakt het brood. → Passief: Het brood wordt gebakken.",
      usage: "Kan de zin niet passief? Dan is er waarschijnlijk geen lijdend voorwerp."
    },
    {
      rule: "Onderscheid LV vs. meewerkend voorwerp",
      structure: "LV: Wat + pv + ow? • Meewerkend: Aan wie + pv + ow + lv?",
      example: "De leraar geeft de leerlingen een boek. → LV: een boek • Meewerkend: de leerlingen",
      usage: "Vind eerst het LV, dan pas het meewerkend voorwerp. De volgorde van vragen is cruciaal."
    },
    {
      rule: "Werkwoorden zonder lijdend voorwerp",
      structure: "Onovergankelijke werkwoorden (zijn, worden, blijven, slapen, regenen, etc.) kunnen geen LV hebben.",
      example: "De baby slaapt. (Vraag: Wat slaapt de baby? → geen antwoord, geen LV)",
      usage: "Als de vraag 'Wie/Wat + pv + ow?' geen zinnig antwoord geeft, is er geen LV."
    },
    {
      rule: "Meerdere werkwoorden in de vraag",
      structure: "Neem alle werkwoordsvormen (infinitief, voltooid deelwoord) mee in de LV-vraag.",
      example: "Wat + heb + ik + gebakken? → een taart • Wat + wil + zij + kopen? → een boek",
      usage: "Vergeet geen werkwoordsvorm, anders is de vraag onvolledig en het antwoord fout."
    }
  ],
  callouts: [
    { type: "remember", label: "✅ Gouden regel 1", text: "LV-vraag: Wie/Wat + persoonsvorm + ONDERWERP? Het onderwerp MOET in de vraag!" },
    { type: "remember", label: "✅ Gouden regel 2", text: "Lijdend voorwerp heeft NOOIT een voorzetsel. Wel voorzetsel? → voorzetselvoorwerp." },
    { type: "remember", label: "✅ Gouden regel 3", text: "Passiefproef: LV wordt onderwerp in passieve zin. Kan niet passief? Geen LV." },
    { type: "remember", label: "⚠️ PAS OP 1", text: "Verwar niet: onderwerp (Wie + pv?) vs. LV (Wie + pv + onderwerp?). Volgorde is cruciaal!" },
    { type: "remember", label: "⚠️ PAS OP 2", text: "Onovergankelijke werkwoorden (zijn, slapen, regenen) kunnen GEEN lijdend voorwerp hebben." },
    { type: "remember", label: "⚠️ PAS OP 3", text: "Bij meerdere werkwoorden: neem ALLE werkwoordsvormen mee in de vraag." },
    { type: "tip", label: "💡 Pro-tip", text: "Twijfel je? Probeer de passiefproef. Als het zinsdeel onderwerp kan worden in de passieve zin → het was het LV." }
  ],
  commonMistakes: [
    { incorrect: "Wie/Wat + pv? als LV-vraag", correct: "Wie/Wat + pv + onderwerp?", explanation: "Zonder het onderwerp in de vraag vind je per ongeluk het onderwerp zelf, niet het lijdend voorwerp." },
    { incorrect: "Ik hou van jou. (jou = LV?)", correct: "Nee, 'van jou' is voorzetselvoorwerp.", explanation: "Een lijdend voorwerp staat NOOIT met een voorzetsel. 'Houden van' is een voorzetselwerkwoord." },
    { incorrect: "Hij wacht de bus.", correct: "Hij wacht op de bus. ('op de bus' = voorzetselvoorwerp)", explanation: "'Wachten' vereist 'op'. 'Op de bus' is geen lijdend voorwerp maar een voorzetselvoorwerp." },
    { incorrect: "Zij geeft de leerlingen het boek. → LV = de leerlingen?", correct: "LV = het boek. Meewerkend vw = de leerlingen.", explanation: "Vraag: Wat geeft zij? → het boek (LV). Aan wie? → de leerlingen (meewerkend voorwerp)." },
    { incorrect: "De zon schijnt. → Wat schijnt de zon?", correct: "Geen lijdend voorwerp mogelijk.", explanation: "'Schijnen' is onovergankelijk. De vraag geeft geen zinnig antwoord → er is geen LV." },
    { incorrect: "Ik heb een taart gebakken. → Wat heb ik? → een taart", correct: "Wat heb ik gebakken? → een taart", explanation: "Bij voltooide tijd moet je ALLE werkwoordsvormen meenemen in de vraag: 'heb ... gebakken'." }
  ],
  review: [
    "✅ Lijdend voorwerp = ondergaat actie rechtstreeks, zonder voorzetsel.",
    "✅ Vraagproef: Wie/Wat + persoonsvorm + ONDERWERP? (Onderwerp MOET in de vraag!)",
    "✅ Passiefproef: LV wordt onderwerp in passieve zin.",
    "✅ Kan zijn: zelfstandig naamwoord, voornaamwoord, woordgroep of bijzin.",
    "✅ Nooit voorzetsel voor LV. Wel voorzetsel? → voorzetselvoorwerp.",
    "✅ Alleen overgankelijke werkwoorden kunnen LV hebben (niet: zijn, slapen, regenen).",
    "✅ Volgorde: eerst onderwerp vinden, dan LV, dan meewerkend voorwerp.",
    "✅ Meerdere werkwoorden? Neem allemaal mee in de vraag."
  ],
  qa: [
    {
      question: "Vind het lijdend voorwerp: 'De bakker bakt elke ochtend vers brood.'",
      answer: "Persoonsvorm: bakt. Onderwerp: De bakker. Vraag: Wat bakt de bakker elke ochtend? Antwoord: vers brood. Lijdend voorwerp = vers brood."
    },
    {
      question: "Vind het lijdend voorwerp: 'Ik bel haar morgen op.'",
      answer: "Persoonsvorm: bel ... op. Onderwerp: Ik. Vraag: Wie bel ik morgen op? Antwoord: haar. Lijdend voorwerp = haar. ('morgen' is een bijwoordelijke bepaling van tijd, geen onderdeel van het LV)."
    },
    {
      question: "Vind het lijdend voorwerp: 'Hij heeft gisteren een nieuwe auto gekocht.'",
      answer: "Persoonsvorm: heeft. Onderwerp: Hij. Vraag: Wat heeft hij gisteren gekocht? Antwoord: een nieuwe auto. Lijdend voorwerp = een nieuwe auto."
    },
    {
      question: "In de zin 'De leraar geeft de leerlingen een boek' staan twee zelfstandige naamwoorden na de persoonsvorm. Welke is het lijdend voorwerp?",
      answer: "Vraag: Wat geeft de leraar? Antwoord: een boek → dit is het lijdend voorwerp. 'De leerlingen' is het meewerkend voorwerp (Aan wie geeft de leraar een boek? → de leerlingen)."
    },
    {
      question: "Kan de zin 'De baby slaapt' een lijdend voorwerp hebben? Leg uit.",
      answer: "Nee. 'Slapen' is een onovergankelijk werkwoord. De vraag 'Wat slaapt de baby?' geeft geen zinnig antwoord. Er is geen lijdend voorwerp mogelijk."
    },
    {
      question: "Gebruik de passiefproef om te controleren of 'de postbode' het lijdend voorwerp is in: 'De hond bijt de postbode.'",
      answer: "Passieve zin: 'De postbode wordt (door de hond) gebeten.' 'De postbode' is onderwerp geworden in de passieve zin → dus was het in de actieve zin het lijdend voorwerp."
    },
    {
      question: "Is 'jou' het lijdend voorwerp in 'Ik hou van jou'? Leg uit.",
      answer: "Nee. 'Houden van' is een voorzetselwerkwoord. 'Van jou' is een voorzetselvoorwerp, geen lijdend voorwerp. Een lijdend voorwerp staat NOOIT met een voorzetsel."
    }
  ]
};