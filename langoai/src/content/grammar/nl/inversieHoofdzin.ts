import type { GrammarLesson } from "../../types";

export const inversieHoofdzin: GrammarLesson = {
  id: "nl-inversie-1",
  title: "Inversie in de Hoofdzin: De V2-Regel – De Definitieve Masterclass",
  level: 2,
  topic: "Inversie",
  body: "Beheers inversie volledig: de V2-regel, triggers, valkuilen bij scheidbare werkwoorden, voltooide tijden, modale werkwoorden, 'er', en het verschil met bijzinnen.",
  overview:
    "Dit is de allesomvattende, encyclopedische gids over inversie in het Nederlands. Je leert de heilige V2-regel (persoonsvorm altijd op plaats 2), doorloopt het mechanisme stap voor stap, ontdekt alle mogelijke triggers voor inversie (tijd, plaats, object, bijwoord, hele bijzinnen), en vermijdt de grootste valkuilen: scheidbare werkwoorden, voltooide tijden, modale werkwoorden, het lastige 'er', en zware onderwerpen. Met kristalheldere tabellen, 100+ voorbeeldzinnen, uitgebreide PAS OP-waarschuwingen, een beslissingsalgoritme van drie stappen en 5 complexe masterclass-vragen beheers jij inversie voortaan foutloos en natuurlijk.",
  anchorSectionId: "v2-regel",
  exercises: [],
  timeExpressionsLabel: "Inversie in één oogopslag: de V2-formule 🎯",
  timeExpressions: {
    header: "Situatie | Positie 1 | Positie 2 | Positie 3 | Voorbeeld",
    rows: [
      ["🔹 Standaard", "Onderwerp", "Persoonsvorm", "Rest", "Jan leest het boek."],
      ["🔹 Inversie (tijd)", "Tijdsbepaling", "Persoonsvorm", "Onderwerp", "Morgen leest Jan het boek."],
      ["🔹 Inversie (plaats)", "Plaatsbepaling", "Persoonsvorm", "Onderwerp", "In de tuin speelt de kat."],
      ["🔹 Inversie (object)", "Lijdend voorwerp", "Persoonsvorm", "Onderwerp", "Dat boek heb ik gelezen."],
      ["🔹 Inversie (bijzin)", "Hele bijzin", "Persoonsvorm", "Onderwerp", "Omdat het regent, blijf ik thuis."],
      ["⚠️ Bijzin (géén inversie)", "Voegwoord", "Onderwerp", "... + werkwoord einde", "...omdat ik het boek lees."]
    ]
  },
  details: [
    {
      title: "Deel 1: De heilige wet van het Nederlands – de V2-regel 👑",
      body: `
        <p>In een Nederlandse <strong>hoofdzin</strong> geldt één absolute, onwrikbare wet:</p>
        <div class="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 rounded-lg p-4 my-4 text-center">
          <p class="text-lg font-bold text-indigo-800 dark:text-indigo-200">De persoonsvorm staat ALTIJD op de TWEEDE plaats.</p>
        </div>
        
        <div class="grid md:grid-cols-2 gap-4 my-4">
          <div class="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-lg p-4">
            <h4 class="font-bold text-emerald-700 dark:text-emerald-300 mb-2">✅ Standaardzin (geen inversie)</h4>
            <p class="text-sm text-slate-700 dark:text-slate-300 mb-2">Het <strong>onderwerp</strong> staat op plaats 1. De persoonsvorm staat op plaats 2.</p>
            <p class="text-sm italic">Jan <strong>lees</strong>t het boek.</p>
            <p class="text-xs text-slate-600 dark:text-slate-400 mt-2">Pos 1: Jan (onderwerp) • Pos 2: leest (PV) • Rest: het boek</p>
          </div>
          <div class="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 rounded-lg p-4">
            <h4 class="font-bold text-indigo-700 dark:text-indigo-300 mb-2">✅ Inversiezin (met inversie)</h4>
            <p class="text-sm text-slate-700 dark:text-slate-300 mb-2">Iets <strong>anders</strong> dan het onderwerp staat op plaats 1. De persoonsvorm <strong>moet</strong> op plaats 2 blijven. Het onderwerp verhuist naar plaats 3.</p>
            <p class="text-sm italic">Morgen <strong>lees</strong>t Jan het boek.</p>
            <p class="text-xs text-slate-600 dark:text-slate-400 mt-2">Pos 1: Morgen (trigger) • Pos 2: leest (PV) • Pos 3: Jan (onderwerp) • Rest: het boek</p>
          </div>
        </div>
        
        <div class="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-400 p-4 my-4">
          <p class="font-bold text-amber-800 dark:text-amber-200 mb-1">📐 De Gouden Formule van Inversie:</p>
          <p class="text-sm text-slate-700 dark:text-slate-300 font-mono">
            POSITIE 1 (Trigger) + POSITIE 2 (Persoonsvorm) + POSITIE 3 (Onderwerp) + DE REST VAN DE ZIN
          </p>
        </div>
        
        <div class="bg-rose-50 dark:bg-rose-900/20 border border-rose-200 dark:border-rose-800 rounded-lg p-4 my-4">
          <p class="font-bold text-rose-700 dark:text-rose-300 mb-1">⚠️ PAS OP 1: Alleen in hoofdzinnen!</p>
          <p class="text-sm text-slate-700 dark:text-slate-300 mt-1">
            De V2-regel geldt <strong>alleen</strong> in hoofdzinnen. In bijzinnen (ingeleid door omdat, dat, als, toen, etc.) gaat het werkwoord naar het <strong>einde</strong>. Daar is <strong>géén</strong> inversie!<br><br>
            ✅ Hoofdzin: <em>Morgen lees ik het boek.</em><br>
            ✅ Bijzin: <em>...omdat ik morgen het boek lees.</em> (niet: *omdat lees ik*)
          </p>
        </div>
      `
    },
    {
      title: "Deel 2: Het mechanisme stap voor stap ⚙️",
      body: `
        <p>Laten we een voorbeeld ontleden: <em>"Gisteren las Jan het boek."</em></p>
        
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-indigo-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Stap</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Analyse</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Resultaat</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">1. Standaardzin</td>
                <td class="px-4 py-3 text-sm">Onderwerp (1) + PV (2) + Rest</td>
                <td class="px-4 py-3 text-sm"><em>Jan las gisteren het boek.</em></td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">2. Kies trigger</td>
                <td class="px-4 py-3 text-sm">We willen nadruk op tijd leggen</td>
                <td class="px-4 py-3 text-sm"><em>Gisteren</em> (tijdsbepaling)</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">3. Trigger op 1</td>
                <td class="px-4 py-3 text-sm">De trigger neemt de eerste plaats in</td>
                <td class="px-4 py-3 text-sm"><em>Gisteren ...</em></td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">4. PV op 2</td>
                <td class="px-4 py-3 text-sm">De persoonsvorm <strong>moet</strong> op plaats 2</td>
                <td class="px-4 py-3 text-sm"><em>Gisteren <strong>las</strong> ...</em></td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">5. Onderwerp op 3</td>
                <td class="px-4 py-3 text-sm">Het onderwerp wordt naar rechts geduwd</td>
                <td class="px-4 py-3 text-sm"><em>Gisteren <strong>las Jan</strong> ...</em></td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30">
                <td class="px-4 py-3 text-sm font-semibold">6. De rest</td>
                <td class="px-4 py-3 text-sm">De rest van de zin volgt gewoon</td>
                <td class="px-4 py-3 text-sm"><em>Gisteren <strong>las Jan</strong> het boek.</em></td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div class="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-lg p-4 my-4">
          <p class="font-semibold text-emerald-800 dark:text-emerald-200 mb-2">💡 Onthoud: De persoonsvorm is heilig</p>
          <p class="text-sm text-slate-700 dark:text-slate-300">
            Wat er ook op positie 1 staat, de persoonsvorm <strong>moet</strong> op positie 2. Punt. Dit is de kern van alle Nederlandse zinsbouw.
          </p>
        </div>
      `
    },
    {
      title: "Deel 3: Wat mag er op positie 1 staan? De 6 triggers 🎯",
      body: `
        <p>Alles kan op positie 1 staan, behalve een voegwoord dat een bijzin inleidt (zoals <em>omdat, als, toen</em>). Hier zijn de zes belangrijkste categorieën:</p>
        
        <div class="grid md:grid-cols-2 gap-4 my-4">
          <div class="bg-white dark:bg-slate-800/50 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
            <h4 class="font-bold text-emerald-700 dark:text-emerald-300 mb-2">🕐 1. Tijdsbepaling (Wanneer?)</h4>
            <ul class="space-y-1 text-sm">
              <li>• <strong>Morgen</strong> kom ik langs.</li>
              <li>• <strong>Om acht uur</strong> begint de film.</li>
              <li>• <strong>Vorige week</strong> heb ik haar gesproken.</li>
              <li>• <strong>Na de les</strong> gaan we eten.</li>
            </ul>
          </div>
          
          <div class="bg-white dark:bg-slate-800/50 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
            <h4 class="font-bold text-indigo-700 dark:text-indigo-300 mb-2">📍 2. Plaatsbepaling (Waar?)</h4>
            <ul class="space-y-1 text-sm">
              <li>• <strong>In de tuin</strong> speelt de kat.</li>
              <li>• <strong>Op school</strong> leerden we dit.</li>
              <li>• <strong>Aan de kust</strong> staat een vuurtoren.</li>
              <li>• <strong>Daar</strong> woon ik al tien jaar.</li>
            </ul>
          </div>
          
          <div class="bg-white dark:bg-slate-800/50 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
            <h4 class="font-bold text-amber-700 dark:text-amber-300 mb-2">🎯 3. Lijdend voorwerp (Wat/Wie?)</h4>
            <p class="text-xs text-slate-600 dark:text-slate-400 mb-2">Voor nadruk of contrast</p>
            <ul class="space-y-1 text-sm">
              <li>• <strong>Dat boek</strong> heb ik al gelezen.</li>
              <li>• <strong>Hem</strong> ken ik niet.</li>
              <li>• <strong>Die taart</strong> heeft zij zelf gebakken.</li>
            </ul>
          </div>
          
          <div class="bg-white dark:bg-slate-800/50 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
            <h4 class="font-bold text-rose-700 dark:text-rose-300 mb-2">✨ 4. Bijwoord / Modaliteit</h4>
            <p class="text-xs text-slate-600 dark:text-slate-400 mb-2">Hoe? Misschien? Gelukkig?</p>
            <ul class="space-y-1 text-sm">
              <li>• <strong>Misschien</strong> ga ik wel.</li>
              <li>• <strong>Gelukkig</strong> heeft zij het gered.</li>
              <li>• <strong>Snel</strong> liep hij naar huis.</li>
              <li>• <strong>Daarom</strong> doe ik het niet.</li>
            </ul>
          </div>
          
          <div class="bg-white dark:bg-slate-800/50 rounded-lg p-4 border border-slate-200 dark:border-slate-700 md:col-span-2">
            <h4 class="font-bold text-purple-700 dark:text-purple-300 mb-2">🧩 5. Een gehele bijzin als trigger! (Gevorderd)</h4>
            <p class="text-sm text-slate-700 dark:text-slate-300 mb-2">Als een bijzin vóór de hoofdzin staat, telt die <strong>hele bijzin als Positie 1</strong>. De hoofdzin begint dan direct met de persoonsvorm (inversie!).</p>
            <ul class="space-y-1 text-sm">
              <li>• <em>[Omdat het regende],</em> <strong>bleven</strong> <em>wij</em> thuis.</li>
              <li>• <em>[Als je klaar bent],</em> <strong>mag</strong> <em>je</em> gaan.</li>
              <li>• <em>[Toen ik thuiskwam],</em> <strong>was</strong> <em>het licht</em> al uit.</li>
            </ul>
          </div>
          
          <div class="bg-white dark:bg-slate-800/50 rounded-lg p-4 border border-slate-200 dark:border-slate-700 md:col-span-2">
            <h4 class="font-bold text-teal-700 dark:text-teal-300 mb-2">🔄 6. Vragende zinnen en gebiedende wijs</h4>
            <p class="text-sm text-slate-700 dark:text-slate-300 mb-2">Ook hier geldt inversie, maar op een andere manier:</p>
            <ul class="space-y-1 text-sm">
              <li>• Vraag: <strong>Kom</strong> jij morgen? (PV op 1, onderwerp op 2)</li>
              <li>• Gebiedend: <strong>Kom</strong> hier! (alleen PV, onderwerp weggelaten)</li>
            </ul>
          </div>
        </div>
        
        <div class="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-400 p-4 my-4">
          <p class="font-bold text-amber-800 dark:text-amber-200 mb-1">⚠️ PAS OP 2: Voegwoorden zijn géén triggers</p>
          <p class="text-sm text-slate-700 dark:text-slate-300 mt-1">
            Woorden als <em>omdat, dat, als, toen, terwijl, hoewel</em> leiden een <strong>bijzin</strong> in. Daar geldt de V2-regel <strong>niet</strong>! Het werkwoord gaat naar het einde.<br><br>
            ✅ <em>Omdat ik moe ben, ga ik slapen.</em> (bijzin + hoofdzin met inversie)<br>
            ❌ <em>Omdat ben ik moe, ga ik slapen.</em> (fout: inversie in bijzin!)
          </p>
        </div>
      `
    },
    {
      title: "Deel 4: De 7 grootste valkuilen – PAS OP! ⚠️",
      body: `
        <p>Dit is het gedeelte waar 99% van de fouten wordt gemaakt. Lees dit extreem goed!</p>
        
        <h3 class="text-lg font-bold mt-4 mb-2">🚨 VALKUIL 1: Scheidbare werkwoorden bij inversie</h3>
        <p class="text-sm text-slate-700 dark:text-slate-300 mb-2">Het scheidbare voorvoegsel laat zich <strong>NIET</strong> beïnvloeden door inversie. Het blijft <strong>altijd</strong> helemaal achteraan!</p>
        <ul class="space-y-2 text-sm mb-4">
          <li class="flex items-start"><span class="text-emerald-500 mr-2">✅</span><span>Standaard: Ik <strong>bel</strong> je morgen <strong>op</strong>.</span></li>
          <li class="flex items-start"><span class="text-emerald-500 mr-2">✅</span><span>Inversie: Morgen <strong>bel</strong> ik je <strong>op</strong>.</span></li>
          <li class="flex items-start"><span class="text-rose-500 mr-2">❌</span><span class="text-rose-600">Fout: <em>Morgen opbel ik je.</em></span></li>
          <li class="flex items-start"><span class="text-emerald-500 mr-2">✅</span><span>Inversie met object: Die vriend <strong>bel</strong> ik morgen <strong>op</strong>.</span></li>
        </ul>
        
        <h3 class="text-lg font-bold mt-4 mb-2">🚨 VALKUIL 2: Voltooide tijden (samengestelde werkwoordsvormen)</h3>
        <p class="text-sm text-slate-700 dark:text-slate-300 mb-2">Bij een voltooide tijd (heb/ben + voltooid deelwoord) gaat <strong>ALLEEN het hulpwerkwoord</strong> naar positie 2. Het voltooid deelwoord blijft <strong>helemaal achteraan</strong>.</p>
        <ul class="space-y-2 text-sm mb-4">
          <li class="flex items-start"><span class="text-emerald-500 mr-2">✅</span><span>Standaard: Ik <strong>heb</strong> gisteren dat boek <strong>gelezen</strong>.</span></li>
          <li class="flex items-start"><span class="text-emerald-500 mr-2">✅</span><span>Inversie: Gisteren <strong>heb</strong> ik dat boek <strong>gelezen</strong>.</span></li>
          <li class="flex items-start"><span class="text-rose-500 mr-2">❌</span><span class="text-rose-600">Fout: <em>Gisteren gelezen heb ik dat boek.</em></span></li>
        </ul>
        
        <h3 class="text-lg font-bold mt-4 mb-2">🚨 VALKUIL 3: Modale werkwoorden</h3>
        <p class="text-sm text-slate-700 dark:text-slate-300 mb-2">Net als bij de voltooide tijd: <strong>ALLEEN het modale werkwoord</strong> gaat naar positie 2. De infinitief blijft achteraan.</p>
        <ul class="space-y-2 text-sm mb-4">
          <li class="flex items-start"><span class="text-emerald-500 mr-2">✅</span><span>Standaard: Ik <strong>moet</strong> vandaag hard <strong>werken</strong>.</span></li>
          <li class="flex items-start"><span class="text-emerald-500 mr-2">✅</span><span>Inversie: Vandaag <strong>moet</strong> ik hard <strong>werken</strong>.</span></li>
          <li class="flex items-start"><span class="text-rose-500 mr-2">❌</span><span class="text-rose-600">Fout: <em>Vandaag werken moet ik hard.</em></span></li>
        </ul>
        
        <h3 class="text-lg font-bold mt-4 mb-2">🚨 VALKUIL 4: Het chameleontische woordje "er"</h3>
        <p class="text-sm text-slate-700 dark:text-slate-300 mb-2">"Er" is lastig. In een inversiezin staat "er" meestal <strong>direct na de persoonsvorm</strong> (op positie 3), en het onderwerp verhuist naar positie 4. Dit heet de <em>er-insertie</em>.</p>
        <ul class="space-y-2 text-sm mb-4">
          <li class="flex items-start"><span class="text-emerald-500 mr-2">✅</span><span>Standaard: <strong>Er</strong> loopt een kat in de tuin.</span></li>
          <li class="flex items-start"><span class="text-emerald-500 mr-2">✅</span><span>Inversie: In de tuin loopt <strong>er</strong> een kat.</span></li>
          <li class="flex items-start"><span class="text-rose-500 mr-2">❌</span><span class="text-rose-600">Fout: <em>In de tuin loopt een kat er.</em></span></li>
          <li class="flex items-start"><span class="text-emerald-500 mr-2">✅</span><span>Met tijd: Gisteren was <strong>er</strong> veel lawaai.</span></li>
        </ul>
        
        <h3 class="text-lg font-bold mt-4 mb-2">🚨 VALKUIL 5: Het "zware onderwerp" (stijlinversie)</h3>
        <p class="text-sm text-slate-700 dark:text-slate-300 mb-2">Soms is het onderwerp zo lang dat de zin lelijk klinkt als het direct na het werkwoord komt. Het onderwerp mag dan naar het <em>einde</em> van de zin, maar dit is een <strong>stijlkeuze</strong>, geen basisregel.</p>
        <ul class="space-y-2 text-sm mb-4">
          <li class="flex items-start"><span class="text-emerald-500 mr-2">✅</span><span>Normaal: Gisteren <strong>las een groep van twintig vermoeide studenten</strong> het moeilijke boek.</span></li>
          <li class="flex items-start"><span class="text-emerald-500 mr-2">✅</span><span>Stijlinversie: Gisteren <strong>las</strong> het moeilijke boek <strong>een groep van twintig vermoeide studenten</strong>.</span></li>
          <li class="text-xs text-slate-600 dark:text-slate-400 italic">Let op: Dit is alleen voor gevorderden en formele teksten. In spreektaal: houd het onderwerp bij de persoonsvorm.</li>
        </ul>
        
        <h3 class="text-lg font-bold mt-4 mb-2">🚨 VALKUIL 6: Meerdere werkwoorden – de "eindgroep"</h3>
        <p class="text-sm text-slate-700 dark:text-slate-300 mb-2">Als er meerdere werkwoorden zijn (modaal + infinitief, of hulpwerkwoord + voltooid deelwoord), blijven <strong>alle niet-vervoegde werkwoorden</strong> samen achteraan.</p>
        <ul class="space-y-2 text-sm mb-4">
          <li class="flex items-start"><span class="text-emerald-500 mr-2">✅</span><span>Standaard: Ik <strong>heb</strong> het boek willen <strong>lezen</strong>.</span></li>
          <li class="flex items-start"><span class="text-emerald-500 mr-2">✅</span><span>Inversie: Gisteren <strong>heb</strong> ik het boek willen <strong>lezen</strong>.</span></li>
          <li class="text-xs text-slate-600 dark:text-slate-400 italic">Volgorde achteraan: infinitief + voltooid deelwoord (of omgekeerd, afhankelijk van de constructie).</li>
        </ul>
        
        <h3 class="text-lg font-bold mt-4 mb-2">🚨 VALKUIL 7: "En" verbindt twee hoofdzinnen</h3>
        <p class="text-sm text-slate-700 dark:text-slate-300 mb-2">Na <em>en</em> begint vaak een nieuwe hoofdzin. Die nieuwe hoofdzin heeft <strong>zijn eigen V2-structuur</strong>.</p>
        <ul class="space-y-2 text-sm">
          <li class="flex items-start"><span class="text-emerald-500 mr-2">✅</span><span>Gisteren belde ik mijn moeder op <strong>en</strong> heb het haar verteld.</span></li>
          <li class="text-xs text-slate-600 dark:text-slate-400 italic">Deel 1: Gisteren (1) + belde (2) + ik (3) + ... op (einde)<br>Deel 2: en + [ik] (impliciet onderwerp) + heb (2) + ... verteld (einde)</li>
        </ul>
      `
    },
    {
      title: "Deel 5: Inversie versus bijzin – het grootste verwarringspunt 🌪️",
      body: `
        <p>Veel leerlingen denken dat inversie ook in bijzinnen gebeurt. <strong>DAT IS VOLKOMEN FOUT.</strong></p>
        
        <div class="grid md:grid-cols-2 gap-4 my-4">
          <div class="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-lg p-4">
            <h4 class="font-bold text-emerald-700 dark:text-emerald-300 mb-2">✅ Hoofdzin (V2-regel)</h4>
            <p class="text-sm text-slate-700 dark:text-slate-300 mb-2">De persoonsvorm staat op plaats 2. Inversie vindt hier plaats.</p>
            <ul class="space-y-1 text-sm">
              <li>• Ik lees het boek. (standaard)</li>
              <li>• Gisteren <strong>las</strong> ik het boek. (inversie)</li>
              <li>• In de tuin <strong>speelt</strong> de kat. (inversie)</li>
            </ul>
          </div>
          
          <div class="bg-rose-50 dark:bg-rose-900/20 border border-rose-200 dark:border-rose-800 rounded-lg p-4">
            <h4 class="font-bold text-rose-700 dark:text-rose-300 mb-2">❌ Bijzin (géén inversie!)</h4>
            <p class="text-sm text-slate-700 dark:text-slate-300 mb-2">Een voegwoord (omdat, dat, als) staat op plaats 1. De persoonsvorm wordt naar het <strong>einde</strong> geduwd.</p>
            <ul class="space-y-1 text-sm">
              <li>• ...omdat ik gisteren het boek <strong>las</strong>.</li>
              <li>• ...dat de kat in de tuin <strong>speelt</strong>.</li>
              <li>• ...als je klaar bent, mag je gaan.</li>
            </ul>
          </div>
        </div>
        
        <div class="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 rounded-lg p-4 my-4">
          <p class="font-bold text-indigo-800 dark:text-indigo-200 mb-1">🎯 De ultieme test:</p>
          <p class="text-sm text-slate-700 dark:text-slate-300">
            Begin de zin met een voegwoord (<em>omdat, want, als, toen, dat, terwijl, hoewel</em>)? → <strong>GEEN inversie</strong>. Werkwoord naar einde.<br><br>
            Begin je met iets anders (<em>gisteren, in de tuin, dat boek, misschien</em>)? → <strong>WEL inversie</strong>. PV op 2, onderwerp op 3.
          </p>
        </div>
        
        <div class="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-400 p-4 my-4">
          <p class="font-bold text-amber-800 dark:text-amber-200 mb-1">⚠️ PAS OP 8: "Want" is een uitzondering!</p>
          <p class="text-sm text-slate-700 dark:text-slate-300 mt-1">
            <em>Want</em> is een voegwoord, maar het leidt <strong>geen bijzin</strong> in! Na <em>want</em> geldt wél de V2-regel.<br><br>
            ✅ <em>Ik ga naar huis, <strong>want</strong> ik ben moe.</em> (na "want": standaard hoofdzin)<br>
            ❌ <em>Ik ga naar huis, want ben ik moe.</em> (fout: inversie na "want" is niet nodig)<br><br>
            Onthoud: <em>Want</em> = hoofdzin. <em>Omdat</em> = bijzin.
          </p>
        </div>
      `
    },
    {
      title: "Deel 6: Het ultieme beslisalgoritme (3 stappen) 🗺️",
      body: `
        <p>Twijfel je over de woordvolgorde? Doorloop dit stappenplan van vijf seconden:</p>
        
        <div class="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 rounded-lg p-4 my-4">
          <p class="font-bold text-indigo-800 dark:text-indigo-200 mb-2">🎯 Stap 1: Is het een hoofdzin?</p>
          <p class="text-sm text-slate-700 dark:text-slate-300 mb-2">Begint de zin met een voegwoord als <em>omdat, dat, als, toen, terwijl</em>?</p>
          <ul class="space-y-1 text-sm">
            <li class="flex items-start"><span class="text-rose-500 mr-2">❌ Nee (het is een bijzin)</span><span>→ Werkwoord gaat naar het einde. Klaar.</span></li>
            <li class="flex items-start"><span class="text-emerald-500 mr-2">✅ Ja (het is een hoofdzin)</span><span>→ Ga naar Stap 2.</span></li>
          </ul>
        </div>
        
        <div class="grid md:grid-cols-2 gap-4 my-4">
          <div class="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-lg p-4">
            <h4 class="font-bold text-emerald-700 dark:text-emerald-300 mb-2">🔹 Stap 2: Wat staat op Positie 1?</h4>
            <p class="text-sm text-slate-700 dark:text-slate-300 mb-2">Kijk naar het eerste zinsdeel:</p>
            <ul class="space-y-1 text-sm">
              <li>• Het onderwerp? → Normale volgorde (Jan las het boek).</li>
              <li>• Iets anders (tijd, plaats, object, bijwoord, hele bijzin)? → Ga naar Stap 3.</li>
            </ul>
          </div>
          
          <div class="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
            <h4 class="font-bold text-amber-700 dark:text-amber-300 mb-2">🔹 Stap 3: Pas de V2-formule toe</h4>
            <ol class="list-decimal list-inside space-y-1 text-sm text-slate-700 dark:text-slate-300">
              <li>Zet de Persoonsvorm op positie 2.</li>
              <li>Zet het Onderwerp direct erna op positie 3.</li>
              <li>Zet de rest van de werkwoorden (voltooid deelwoord, infinitief, scheidbaar voorvoegsel) <strong>helemaal achteraan</strong>.</li>
              <li>Let op "er": staat meestal direct na de persoonsvorm (PV + er + onderwerp).</li>
            </ol>
          </div>
        </div>
        
        <div class="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-lg p-4 my-4">
          <p class="font-semibold text-emerald-800 dark:text-emerald-200 mb-2">💡 Snelle checklist voor gevorderden:</p>
          <ul class="space-y-1 text-sm text-slate-700 dark:text-slate-300">
            <li>• Scheidbaar werkwoord? → Voorvoegsel áltijd achteraan.</li>
            <li>• Voltooide tijd? → Alleen hulpwerkwoord op 2, voltooid deelwoord achteraan.</li>
            <li>• Modaal werkwoord? → Alleen modaal op 2, infinitief achteraan.</li>
            <li>• "Er" in de zin? → Meestal: PV + er + onderwerp.</li>
            <li>• Na "en"? → Nieuwe hoofdzin, eigen V2-structuur.</li>
          </ul>
        </div>
      `
    },
    {
      title: "Deel 7: Snelle herhaling – alles op één pagina ⚡",
      body: `
        <ul class="my-2 space-y-2 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-['✅'] before:absolute before:left-0 before:top-[0.4rem] text-slate-700 dark:text-slate-300"><strong>V2-regel:</strong> In hoofdzinnen staat de persoonsvorm ALTIJD op plaats 2.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-['✅'] before:absolute before:left-0 before:top-[0.4rem] text-slate-700 dark:text-slate-300"><strong>Inversie:</strong> Als iets anders dan het onderwerp op 1 staat, wisselen PV en onderwerp: Trigger + PV + Onderwerp + Rest.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-['🎯'] before:absolute before:left-0 before:top-[0.4rem] text-slate-700 dark:text-slate-300"><strong>Triggers:</strong> tijd, plaats, lijdend voorwerp, bijwoord, hele bijzin, vraag, gebiedende wijs.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-['⚠️'] before:absolute before:left-0 before:top-[0.4rem] text-slate-700 dark:text-slate-300"><strong>Scheidbare werkwoorden:</strong> Voorvoegsel áltijd achteraan, ook bij inversie.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-['⚠️'] before:absolute before:left-0 before:top-[0.4rem] text-slate-700 dark:text-slate-300"><strong>Voltooide tijd:</strong> Alleen hulpwerkwoord op 2, voltooid deelwoord achteraan.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-['⚠️'] before:absolute before:left-0 before:top-[0.4rem] text-slate-700 dark:text-slate-300"><strong>Modaal werkwoord:</strong> Alleen modaal op 2, infinitief achteraan.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-['⚠️'] before:absolute before:left-0 before:top-[0.4rem] text-slate-700 dark:text-slate-300"><strong>"Er":</strong> Staat meestal direct na de persoonsvorm: PV + er + onderwerp.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-['❌'] before:absolute before:left-0 before:top-[0.4rem] text-slate-700 dark:text-slate-300"><strong>Bijzin = géén inversie:</strong> Voegwoord op 1, werkwoord naar einde.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-['⚠️'] before:absolute before:left-0 before:top-[0.4rem] text-slate-700 dark:text-slate-300"><strong>"Want" is uitzondering:</strong> Leidt hoofdzin in, dus wél V2-regel.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-['🔄'] before:absolute before:left-0 before:top-[0.4rem] text-slate-700 dark:text-slate-300"><strong>Na "en":</strong> Nieuwe hoofdzin met eigen V2-structuur.</li>
        </ul>
      `
    }
  ],
  rulesTable: [
    {
      rule: "V2-regel (hoofdzin)",
      structure: "Persoonsvorm staat ALTIJD op positie 2 in een hoofdzin.",
      example: "Jan leest het boek. • Morgen leest Jan het boek.",
      usage: "Ongeacht wat op positie 1 staat: PV moet op 2. Dit is de heilige wet."
    },
    {
      rule: "Inversie-formule",
      structure: "Trigger (Pos 1) + Persoonsvorm (Pos 2) + Onderwerp (Pos 3) + Rest.",
      example: "Morgen (1) + lees (2) + ik (3) + het boek.",
      usage: "Gebruik deze formule bij elke inversiezin. Werkt altijd."
    },
    {
      rule: "Scheidbare werkwoorden",
      structure: "Voorvoegsel blijft áltijd helemaal achteraan, ook bij inversie.",
      example: "Morgen bel ik je op. • Die vriend bel ik morgen op.",
      usage: "Nooit het voorvoegsel naar voren halen. Altijd achteraan laten."
    },
    {
      rule: "Voltooide tijd & modaal",
      structure: "Alleen hulpwerkwoord/modaal op Pos 2. Voltooid deelwoord/infinitief achteraan.",
      example: "Gisteren heb ik het boek gelezen. • Vandaag moet ik hard werken.",
      usage: "De niet-vervoegde werkwoorden blijven samen achteraan."
    },
    {
      rule: "'Er'-insertie",
      structure: "Bij inversie: 'er' staat meestal direct na de persoonsvorm (PV + er + onderwerp).",
      example: "In de tuin loopt er een kat. • Gisteren was er veel lawaai.",
      usage: "Onthoud: er komt tussen PV en onderwerp, niet achteraan."
    },
    {
      rule: "Bijzin = géén inversie",
      structure: "Voegwoord op 1, onderwerp daarna, werkwoord naar het einde.",
      example: "...omdat ik het boek lees. • ...als je klaar bent.",
      usage: "Twijfel je? Vraag: 'Begint het met omdat/dat/als?' → Ja = bijzin = géén inversie."
    }
  ],
  callouts: [
    { type: "remember", label: "⚠️ PAS OP 1", text: "V2-regel geldt ALLEEN in hoofdzinnen. In bijzinnen (omdat/dat/als) gaat het werkwoord naar het einde." },
    { type: "remember", label: "⚠️ PAS OP 2", text: "Scheidbare werkwoorden: voorvoegsel áltijd achteraan. Nooit 'Morgen opbel ik je'." },
    { type: "remember", label: "⚠️ PAS OP 3", text: "Voltooide tijd: alleen hulpwerkwoord op 2. Nooit 'Gisteren gelezen heb ik'." },
    { type: "remember", label: "⚠️ PAS OP 4", text: "Modaal werkwoord: alleen modaal op 2. Nooit 'Vandaag werken moet ik'." },
    { type: "remember", label: "⚠️ PAS OP 5", text: "'Er' bij inversie: meestal PV + er + onderwerp. Nooit 'In de tuin loopt een kat er'." },
    { type: "remember", label: "⚠️ PAS OP 6", text: "'Want' is uitzondering: leidt hoofdzin in, dus wél V2-regel. 'Omdat' leidt bijzin in, géén inversie." },
    { type: "remember", label: "⚠️ PAS OP 7", text: "Na 'en': nieuwe hoofdzin met eigen V2-structuur. Tel 'en' niet als Positie 1." },
    { type: "tip", label: "💡 Pro-tip", text: "Twijfel je? Vraag: 'Is het een hoofdzin?' → Ja: PV op 2, onderwerp op 3. Nee: werkwoord naar einde. Werkt altijd." }
  ],
  commonMistakes: [
    { incorrect: "Morgen opbel ik je.", correct: "Morgen bel ik je op.", explanation: "Scheidbaar werkwoord: voorvoegsel 'op' moet áltijd achteraan blijven." },
    { incorrect: "Gisteren gelezen heb ik het boek.", correct: "Gisteren heb ik het boek gelezen.", explanation: "Voltooide tijd: alleen hulpwerkwoord 'heb' op positie 2, voltooid deelwoord 'gelezen' achteraan." },
    { incorrect: "Vandaag werken moet ik hard.", correct: "Vandaag moet ik hard werken.", explanation: "Modaal werkwoord: alleen 'moet' op positie 2, infinitief 'werken' achteraan." },
    { incorrect: "In de tuin loopt een kat er.", correct: "In de tuin loopt er een kat.", explanation: "'Er' bij inversie staat direct na de persoonsvorm: PV + er + onderwerp." },
    { incorrect: "Omdat lees ik het boek.", correct: "Omdat ik het boek lees.", explanation: "'Omdat' leidt een bijzin in. Geen inversie: werkwoord naar het einde." },
    { incorrect: "Gisteren ik heb het boek gelezen.", correct: "Gisteren heb ik het boek gelezen.", explanation: "Inversie: persoonsvorm moet op positie 2, onderwerp op positie 3." }
  ],
  review: [
    "✅ V2-regel: In hoofdzinnen staat de persoonsvorm ALTIJD op positie 2.",
    "✅ Inversie: Trigger + PV + Onderwerp + Rest.",
    "✅ Triggers: tijd, plaats, object, bijwoord, hele bijzin, vraag, gebiedende wijs.",
    "✅ Scheidbare werkwoorden: voorvoegsel áltijd achteraan.",
    "✅ Voltooide tijd: alleen hulpwerkwoord op 2, voltooid deelwoord achteraan.",
    "✅ Modaal werkwoord: alleen modaal op 2, infinitief achteraan.",
    "✅ 'Er' bij inversie: meestal PV + er + onderwerp.",
    "✅ Bijzin = géén inversie: voegwoord op 1, werkwoord naar einde.",
    "✅ 'Want' = hoofdzin (wél V2). 'Omdat' = bijzin (géén V2).",
    "✅ Na 'en': nieuwe hoofdzin met eigen V2-structuur."
  ],
  qa: [
    {
      question: "Maak een inversiezin beginnend met 'Morgen', gebruik makend van: ik / de lichten / aanzetten.",
      answer: "Morgen zet ik de lichten aan. Uitleg: 'Morgen' is positie 1. 'Zet' (PV) is positie 2. 'Ik' (onderwerp) is positie 3. 'De lichten' is de rest. 'Aan' (scheidbaar voorvoegsel) blijft áltijd helemaal achteraan."
    },
    {
      question: "Maak een inversiezin beginnend met 'Die opdracht', gebruik makend van: wij / al / afronden.",
      answer: "Die opdracht hebben wij al afgerond. Uitleg: 'Die opdracht' (Pos 1). 'Hebben' (PV, Pos 2). 'Wij' (Onderwerp, Pos 3). 'al' (bijwoord). 'Afgerond' (voltooid deelwoord) gaat helemaal naar het einde."
    },
    {
      question: "Maak één zin van: [De trein had vertraging]. [We kwamen te laat op het werk]. Gebruik de eerste zin als Positie 1 voor de tweede.",
      answer: "Omdat de trein vertraging had, kwamen we te laat op het werk. Uitleg: De hele bijzin telt als Positie 1. Daarom moet de hoofdzin direct beginnen met de persoonsvorm ('kwamen'), gevolgd door het onderwerp ('we'). Dit is inversie!"
    },
    {
      question: "Herschrijf deze zin met inversie, beginnend met 'In deze kamer': Er hangt een vreemde geur in deze kamer.",
      answer: "In deze kamer hangt er een vreemde geur. Uitleg: Pos 1: In deze kamer. Pos 2: hangt. Pos 3: er (het woordje 'er' komt direct na de persoonsvorm bij inversie). Pos 4: een vreemde geur (het echte onderwerp)."
    },
    {
      question: "Deze zin bevat 2 ernstige grammaticale fouten. Verbeter hem: 'Gisteren opbeld ik mijn moeder en heb het haar verteld.'",
      answer: "Gisteren belde ik mijn moeder op en heb het haar verteld. Fouten: 1. 'opbeld': Bij inversie splitst het scheidbare werkwoord. De stam ('belde', verleden tijd vanwege 'gisteren') gaat naar Pos 2, het voorvoegsel ('op') gaat naar het einde. 2. 'heb het haar verteld': De tweede hoofdzin (na 'en') begint hier impliciet met 'ik' (onderwerp), dus 'heb' staat correct op Pos 2 van dat tweede deel, en 'verteld' staat correct achteraan."
    }
  ]
};