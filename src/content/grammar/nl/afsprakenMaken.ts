import type { GrammarLesson } from "../../types";

export const afsprakenMaken: GrammarLesson = {
  id: "nl-afspraken-maken-1",
  title: "Afspraken Maken en Verplaatsen: De Ultieme Tabelgids",
  level: 2,
  topic: "Afspraken & Communicatie",
  body: "Beheers het maken, verplaatsen en afzeggen van afspraken volledig: formele en informele voorstellen, de voorzetsels op/om/in, verzetten vs. annuleren, en de ultieme MAX-niveau scenario's.",
  overview:
    "Dit is de allesomvattende, tabel-gerichte gids over afspraken maken in het Nederlands. Je leert hoe je beleefd een voorstel doet (formeel en informeel), beheerst de 5 W's van een afspraak, kent de cruciale voorzetsels op/om/in voor tijd en datum, begrijpt het verschil tussen verzetten en annuleren, en weet precies hoe je een afspraak bevestigt of verzet. Met 15+ kristalheldere tabellen en exact 4 complexe MAX-niveau oefenvragen plan jij voortaan elke afspraak foutloos en beleefd.",
  anchorSectionId: "basis",
  exercises: [],
  timeExpressionsLabel: "De Kernregels voor Afspraken in één oogopslag 📅",
  timeExpressions: {
    header: "Onderwerp | Regel | Voorbeeld",
    rows: [
      ["🔹 Voorzetsel + Tijd", "om + klokslag", "om 14:00 uur, om half drie"],
      ["🔹 Voorzetsel + Dag", "op + dag/datum", "op maandag, op 5 mei"],
      ["🔹 Voorzetsel + Periode", "in + maand/jaar/seizoen", "in januari, in 2026, in de zomer"],
      ["🔹 Voorstel doen (formeel)", "Zou ik ... kunnen?", "Zou ik een afspraak kunnen maken?"],
      ["🔹 Voorstel doen (informeel)", "Zullen we ...?", "Zullen we vrijdag afspreken?"],
      ["🔹 Verzetten vs. Annuleren", "Verzetten = nieuwe datum, Annuleren = stopt", "Ik moet de afspraak verzetten naar morgen."]
    ]
  },
  details: [
    {
      title: "Deel 1: De Basis - Een Afspraak Voorstellen 📅",
      body: `
        <p>Als je een afspraak wilt maken, moet je dat in het Nederlands <strong>nooit</strong> als een bevel doen (<em>"We gaan morgen afspreken"</em>). We gebruiken altijd een <strong>voorstel</strong> of een <strong>vraag</strong>.</p>
        
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-emerald-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Situatie</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Informeel (Vrienden, familie)</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Formeel (Baas, arts, onbekenden)</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">Een voorstel doen</td>
                <td class="px-4 py-3 text-sm"><em>Zullen we afspreken?</em><br><em>Heb je tijd op vrijdag?</em></td>
                <td class="px-4 py-3 text-sm"><em>Zou ik een afspraak <strong>kunnen</strong> maken?</em><br><em>Zouden we een afspraak kunnen inplannen?</em></td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">Een dag voorstellen</td>
                <td class="px-4 py-3 text-sm"><em>Komt vrijdag je goed uit?</em><br><em>Hoe kijk je naar dinsdag?</em></td>
                <td class="px-4 py-3 text-sm"><em>Schikt vrijdag u?</em><br><em>Zou dinsdag voor u uitkomen?</em></td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50">
                <td class="px-4 py-3 text-sm font-semibold">Een tijd voorstellen</td>
                <td class="px-4 py-3 text-sm"><em>Zeg maar wanneer.</em><br><em>Hoe laat wil je komen?</em></td>
                <td class="px-4 py-3 text-sm"><em>Welk tijdstip heeft uw voorkeur?</em><br><em>Om hoe laat schikt het u?</em></td>
              </tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      title: "Deel 2: De 5 W's van een Afspraak 🕵️‍♂️",
      body: `
        <p>Een goede afspraak is een afspraak die voor beide partijen 100% duidelijk is. Controleer altijd deze 5 punten:</p>
        
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-indigo-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">De 5 W's</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Vraag die je moet stellen</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Voorbeeldzin</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-semibold">Wie?</td><td class="px-4 py-3 text-sm">Wie is er bij?</td><td class="px-4 py-3 text-sm"><em>"Spreek ik alleen jou, of komt je partner ook?"</em></td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-semibold">Wat?</td><td class="px-4 py-3 text-sm">Wat gaan we doen?</td><td class="px-4 py-3 text-sm"><em>"Gaan we lunchen of alleen koffie drinken?"</em></td></tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-semibold">Waar?</td><td class="px-4 py-3 text-sm">Waar spreken we af?</td><td class="px-4 py-3 text-sm"><em>"Zullen we bij het station afspreken?"</em></td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-semibold">Wanneer?</td><td class="px-4 py-3 text-sm">Welke dag en datum?</td><td class="px-4 py-3 text-sm"><em>"Laten we het houden op dinsdag 12 mei."</em></td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-4 py-3 text-sm font-semibold">Hoe laat?</td><td class="px-4 py-3 text-sm">Welk tijdstip?</td><td class="px-4 py-3 text-sm"><em>"Zal ik om 14:00 uur bij je zijn?"</em></td></tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      title: "Deel 3: De Voorzetsels-valkuil: OP, OM, IN ⏰",
      body: `
        <p>Dit is de <strong>grootste grammaticale valkuil</strong> bij afspraken. Welk voorzetsel gebruik je bij welke tijd? Onthoud deze tabel!</p>
        
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-purple-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Voorzetsel</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Gebruik je voor...</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Voorbeelden</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold text-emerald-600">om</td>
                <td class="px-4 py-3 text-sm">Een <strong>klokslag</strong> (exacte tijd)</td>
                <td class="px-4 py-3 text-sm"><em>om 10.00 uur, om half drie, om kwart over vijf</em></td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold text-indigo-600">op</td>
                <td class="px-4 py-3 text-sm">Een <strong>dag</strong> of een <strong>datum</strong></td>
                <td class="px-4 py-3 text-sm"><em>op maandag, op 5 mei, op mijn verjaardag</em></td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold text-amber-600">in</td>
                <td class="px-4 py-3 text-sm">Een <strong>maand, seizoen of jaar</strong></td>
                <td class="px-4 py-3 text-sm"><em>in januari, in de zomer, in 2026</em></td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30">
                <td class="px-4 py-3 text-sm font-semibold text-rose-600">van ... tot</td>
                <td class="px-4 py-3 text-sm">Een <strong>periode</strong> (begin en eind)</td>
                <td class="px-4 py-3 text-sm"><em>van 9.00 tot 17.00 uur, van dinsdag tot vrijdag</em></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-lg p-4 my-4">
          <p class="font-bold text-emerald-800 dark:text-emerald-200 mb-1">💡 Voorbeeldzin met alle voorzetsels:</p>
          <p class="text-sm text-slate-700 dark:text-slate-300">
            <em>"We hebben een afspraak <strong>op</strong> dinsdag <strong>om</strong> 14.00 uur <strong>in</strong> het ziekenhuis."</em>
          </p>
        </div>
      `
    },
    {
      title: "Deel 4: Een Afspraak Verplaatsen of Afzeggen 🔄",
      body: `
        <p>Soms lukt het niet. Het verschil tussen <strong>afzeggen</strong> (het gaat niet door) en <strong>verzetten</strong> (we kiezen een nieuw moment) is cruciaal.</p>
        
        <h3 class="text-lg font-bold mt-4 mb-2">📋 A. Afzeggen / Annuleren (Het gaat niet door)</h3>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-rose-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Formeel</th><th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Informeel</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm"><em>Helaas moet ik onze afspraak <strong>annuleren</strong>.</em></td><td class="px-4 py-3 text-sm"><em>Ik kan er toch niet bij zijn, sorry!</em></td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm"><em>Het spijt me zeer, maar ik moet de afspraak <strong>afzeggen</strong>.</em></td><td class="px-4 py-3 text-sm"><em>Laten we het maar <strong>afzeggen</strong>.</em></td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-4 py-3 text-sm"><em>Ik zie mij genoodzaakt om af te zeggen.</em></td><td class="px-4 py-3 text-sm"><em>Ik moet <strong>afzeggen</strong>.</em></td></tr>
            </tbody>
          </table>
        </div>

        <h3 class="text-lg font-bold mt-6 mb-2">📋 B. Verplaatsen / Verzetten (Een nieuw moment kiezen)</h3>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Formeel</th><th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Informeel</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm"><em>Zou het mogelijk zijn om de afspraak te <strong>verzetten</strong>?</em></td><td class="px-4 py-3 text-sm"><em>Kunnen we het <strong>verzetten</strong> naar morgen?</em></td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm"><em>Zouden we een <strong>nieuwe afspraak</strong> kunnen inplannen?</em></td><td class="px-4 py-3 text-sm"><em>Laten we het <strong>een dagje verplaatsen</strong>.</em></td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-4 py-3 text-sm"><em>Ik moet de afspraak helaas <strong>verplaatsen</strong> naar volgende week.</em></td><td class="px-4 py-3 text-sm"><em>Zullen we het <strong>opschuiven</strong>?</em> (Spreektaal)</td></tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      title: "Deel 5: Bevestigen en Herinneren ✅",
      body: `
        <p>Als iemand een voorstel doet, moet je reageren. Gebruik deze tabel om het juiste antwoord te kiezen.</p>
        
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-emerald-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Reactie</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Formeel</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Informeel</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">Ja, het past</td>
                <td class="px-4 py-3 text-sm text-xs"><em>Dat schikt mij uitstekend.</em><br><em>Dat komt mij goed uit.</em></td>
                <td class="px-4 py-3 text-sm text-xs"><em>Dat is goed!</em><br><em>Dat lukt wel.</em><br><em>Prima, doe dat!</em></td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">Nee, het past niet</td>
                <td class="px-4 py-3 text-sm text-xs"><em>Helaas komt dat mij niet gelegen.</em><br><em>Ik ben dan helaas verhinderd.</em></td>
                <td class="px-4 py-3 text-sm text-xs"><em>Dat lukt me niet.</em><br><em>Ik kan dan niet.</em></td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">Tegenvoorstel</td>
                <td class="px-4 py-3 text-sm text-xs"><em>Zou het misschien om 15.00 uur kunnen?</em></td>
                <td class="px-4 py-3 text-sm text-xs"><em>Kan het misschien om 3 uur?</em></td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30">
                <td class="px-4 py-3 text-sm font-semibold">Herinneren</td>
                <td class="px-4 py-3 text-sm text-xs"><em>Hierbij een vriendelijke herinnering aan onze afspraak.</em></td>
                <td class="px-4 py-3 text-sm text-xs"><em>Even een reminder voor morgen!</em></td>
              </tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      title: "Deel 6: De Grootste Valkuilen ❌ → ✅",
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
                <td class="px-4 py-3 text-sm text-rose-600"><em>Ik wil een afspraak maken.</em></td>
                <td class="px-4 py-3 text-sm"><strong>Zou ik</strong> een afspraak <strong>kunnen</strong> maken?</td>
                <td class="px-4 py-3 text-sm text-xs">"Ik wil" klinkt als een dwingend bevel. Gebruik altijd <em>zou/kunnen/mogen</em> voor beleefdheid.</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm text-rose-600"><em>We hebben een afspraak om 10 uur <strong>in</strong> maandag.</em></td>
                <td class="px-4 py-3 text-sm">We hebben een afspraak om 10 uur <strong>op</strong> maandag.</td>
                <td class="px-4 py-3 text-sm text-xs">Dagen en datums krijgen <strong>altijd</strong> <em>op</em>, nooit <em>in</em>.</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm text-rose-600"><em>Ik wil de afspraak <strong>annuleren</strong> naar morgen.</em></td>
                <td class="px-4 py-3 text-sm">Ik wil de afspraak <strong>verzetten</strong> naar morgen.</td>
                <td class="px-4 py-3 text-sm text-xs"><em>Annuleren</em> = het gaat helemaal niet meer door. <em>Verzetten</em> = je kiest een nieuwe datum.</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm text-rose-600"><em>Ik ben verhinderd.</em> (te direct)</td>
                <td class="px-4 py-3 text-sm">Ik ben dan <strong>helaas</strong> verhinderd.</td>
                <td class="px-4 py-3 text-sm text-xs">Voeg altijd <em>helaas</em> of <em>jammer genoeg</em> toe om de boodschap te verzachten.</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50">
                <td class="px-4 py-3 text-sm text-rose-600"><em>Zullen we afspreken dat we om 8 uur beginnen?</em></td>
                <td class="px-4 py-3 text-sm">We <strong>spreken af</strong> dat we om 8 uur beginnen.</td>
                <td class="px-4 py-3 text-sm text-xs">"Een afspraak maken" = een meeting plannen. "Afspreken dat..." = een regel of overeenkomst maken.</td>
              </tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      title: "Deel 7: Snelle herhaling – Alles op één pagina ⚡",
      body: `
        <ul class="my-2 space-y-2 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-['✅'] before:absolute before:left-0 before:top-[0.4rem] text-slate-700 dark:text-slate-300"><strong>Voorstellen:</strong> Gebruik <em>zou/kunnen/mogen</em> (<em>Zou ik... kunnen?</em>).</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-['✅'] before:absolute before:left-0 before:top-[0.4rem] text-slate-700 dark:text-slate-300"><strong>Voorzetsels:</strong> <strong>om</strong> + tijd, <strong>op</strong> + dag/datum, <strong>in</strong> + maand/jaar.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-['✅'] before:absolute before:left-0 before:top-[0.4rem] text-slate-700 dark:text-slate-300"><strong>Verzetten vs. Annuleren:</strong> <em>Verzetten</em> = nieuwe datum. <em>Annuleren</em> = stopt helemaal.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-['✅'] before:absolute before:left-0 before:top-[0.4rem] text-slate-700 dark:text-slate-300"><strong>Bevestigen:</strong> <em>Dat schikt mij</em> (formeel) / <em>Dat lukt</em> (informeel).</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-['✅'] before:absolute before:left-0 before:top-[0.4rem] text-slate-700 dark:text-slate-300"><strong>Verhinderd zijn:</strong> Een formele, beleefde manier om "nee, ik kan niet" te zeggen.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-['✅'] before:absolute before:left-0 before:top-[0.4rem] text-slate-700 dark:text-slate-300"><strong>Altijd verzachten:</strong> Gebruik <em>helaas, jammer genoeg, misschien, eventueel</em>.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-['⚠️'] before:absolute before:left-0 before:top-[0.4rem] text-slate-700 dark:text-slate-300"><strong>Valkuil:</strong> Zeg nooit "Ik wil een afspraak maken" (te direct). Zeg "Zou ik een afspraak kunnen maken?".</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-['⚠️'] before:absolute before:left-0 before:top-[0.4rem] text-slate-700 dark:text-slate-300"><strong>Valkuil:</strong> Dagen en datums krijgen <strong>altijd</strong> <em>op</em>, nooit <em>in</em> of <em>om</em>.</li>
        </ul>
      `
    }
  ],
  rulesTable: [
    {
      rule: "Voorzetsels bij tijd en datum",
      structure: "om + klokslag, op + dag/datum, in + maand/jaar/seizoen, van...tot + periode.",
      example: "om 14:00 uur • op maandag • in januari • van 9 tot 17 uur",
      usage: "Dit is de meest gemaakte fout bij afspraken. Onthoud: dagen = op, tijden = om, maanden = in."
    },
    {
      rule: "Beleefd een voorstel doen",
      structure: "Gebruik zou/kunnen/mogen in plaats van 'willen'. Formeel: 'Zou ik ... kunnen?'. Informeel: 'Zullen we ...?'",
      example: "Zou ik een afspraak kunnen maken? • Zullen we vrijdag afspreken?",
      usage: "'Ik wil' klinkt als een bevel. Gebruik altijd de beleefde vorm bij het voorstellen van een afspraak."
    },
    {
      rule: "Verzetten vs. Annuleren",
      structure: "Verzetten/verplaatsen = een nieuwe datum kiezen. Annuleren/afzeggen = het gaat helemaal niet door.",
      example: "Ik moet de afspraak verzetten naar morgen. • Ik moet de afspraak annuleren.",
      usage: "Je kunt iets niet 'annuleren naar' een andere dag. Gebruik 'verzetten' als je een nieuwe datum voorstelt."
    },
    {
      rule: "Een afspraak bevestigen",
      structure: "Formeel: 'Dat schikt mij' / 'Dat komt mij goed uit'. Informeel: 'Dat is goed' / 'Dat lukt wel'.",
      example: "Dat schikt mij uitstekend. • Dat lukt wel!",
      usage: "Kies de vorm op basis van de situatie: zakelijk = formeel, vrienden = informeel."
    },
    {
      rule: "Beleefd afzeggen",
      structure: "Voeg altijd een verzachter toe: 'helaas', 'jammer genoeg', 'het spijt me'.",
      example: "Helaas ben ik dan verhinderd. • Het spijt me zeer, maar ik moet afzeggen.",
      usage: "Zonder verzachter klinkt 'Ik ben verhinderd' te direct en onbeleefd."
    },
    {
      rule: "De 5 W's van een afspraak",
      structure: "Controleer altijd: Wie? Wat? Waar? Wanneer? Hoe laat?",
      example: "Wie: jij en ik. Wat: lunchen. Waar: restaurant X. Wanneer: dinsdag. Hoe laat: 12:00.",
      usage: "Een goede afspraak is 100% duidelijk voor beide partijen. Vermijd misverstanden door alle 5 W's te checken."
    }
  ],
  callouts: [
    { type: "remember", label: "✅ Gouden regel 1", text: "Voorzetsels: om + tijd (om 14:00), op + dag (op maandag), in + maand (in januari)." },
    { type: "remember", label: "✅ Gouden regel 2", text: "Zeg NOOIT 'Ik wil een afspraak maken'. Zeg ALTIJD 'Zou ik een afspraak kunnen maken?'." },
    { type: "remember", label: "⚠️ PAS OP 1", text: "Verzetten = nieuwe datum. Annuleren = stopt helemaal. Je kunt niet 'annuleren naar morgen'." },
    { type: "remember", label: "⚠️ PAS OP 2", text: "Dagen en datums krijgen ALTIJD 'op', nooit 'in' of 'om'. (op 5 mei, niet: in 5 mei)." },
    { type: "remember", label: "⚠️ PAS OP 3", text: "Voeg altijd een verzachter toe bij afzeggen: 'helaas', 'jammer genoeg', 'het spijt me'." },
    { type: "tip", label: "💡 Pro-tip", text: "Check bij elke afspraak de 5 W's: Wie? Wat? Waar? Wanneer? Hoe laat? Zo voorkom je misverstanden." }
  ],
  commonMistakes: [
    { incorrect: "Ik wil een afspraak maken.", correct: "Zou ik een afspraak kunnen maken?", explanation: "'Ik wil' klinkt als een dwingend bevel. Gebruik altijd de beleefde vorm met 'zou/kunnen/mogen'." },
    { incorrect: "We hebben een afspraak om 10 uur in maandag.", correct: "We hebben een afspraak om 10 uur op maandag.", explanation: "Dagen en datums krijgen ALTIJD 'op', nooit 'in'. Dit is een klassieke fout door letterlijke vertaling." },
    { incorrect: "Ik wil de afspraak annuleren naar morgen.", correct: "Ik wil de afspraak verzetten naar morgen.", explanation: "'Annuleren' betekent dat het helemaal stopt. Als je een nieuwe datum kiest, gebruik je 'verzetten' of 'verplaatsen'." },
    { incorrect: "Ik ben verhinderd. (zonder verzachter)", correct: "Ik ben dan helaas verhinderd.", explanation: "Zonder 'helaas' of 'jammer genoeg' klinkt de boodschap te direct en onbeleefd. Voeg altijd een verzachter toe." },
    { incorrect: "Zullen we afspreken dat we om 8 uur beginnen?", correct: "We spreken af dat we om 8 uur beginnen.", explanation: "'Een afspraak maken' = een meeting plannen. 'Afspreken dat...' = een regel of overeenkomst maken. Dit zijn twee verschillende constructies." }
  ],
  review: [
    "✅ Voorzetsels: om + tijd, op + dag/datum, in + maand/jaar, van...tot + periode.",
    "✅ Voorstellen: Zou ik ... kunnen? (formeel) / Zullen we ...? (informeel).",
    "✅ Verzetten = nieuwe datum. Annuleren = stopt helemaal.",
    "✅ Bevestigen: Dat schikt mij (formeel) / Dat lukt wel (informeel).",
    "✅ Afzeggen: Voeg altijd een verzachter toe (helaas, het spijt me).",
    "✅ Verhinderd zijn = formele manier om 'nee, ik kan niet' te zeggen.",
    "✅ De 5 W's: Wie? Wat? Waar? Wanneer? Hoe laat?",
    "✅ Nooit 'Ik wil een afspraak maken' (te direct). Altijd 'Zou ik ... kunnen?'."
  ],
  qa: [
    {
      question: " - De ultieme voorzetsel-valkuil: Vul de juiste voorzetsels in (op, om, in, van, tot). 'De vergadering is (1) ___ dinsdag 14 november. We beginnen (2) ___ 09.00 uur en duren (3) ___ 12.00 uur. De locatie is (4) ___ het hoofdkantoor, (5) ___ Amsterdam.'",
      answer: "1. op (dag + datum = op). 2. om (klokslag = om). 3. tot (eindtijd = tot). 4. in (gebouw/plaats = in). 5. in (stad = in). Uitleg: Dit is de basis, maar in de stress van een toets of gesprek kiezen studenten hier massaal de verkeerde voorzetsels, vaak door letterlijke vertaling uit hun moedertaal."
    },
    {
      question: " - Pragmatiek: Beleefd verplaatsen. Je hebt een afspraak met je tandarts om 10:00 uur, maar je baas roept onverwacht een urgente vergadering uit om exact dezelfde tijd. Je moet de tandarts bellen. Schrijf de exacte dialoog (3 zinnen) waarin je: 1. Beleefd uitlegt waarom je moet afzeggen. 2. Vraagt of je de afspraak kunt verzetten. 3. Een tegenvoorstel doet voor de volgende dag.",
      answer: "'Goedemorgen, met [Naam]. Ik bel omdat ik helaas onze afspraak van vanochtend moet verzetten, aangezien er onverwacht een dringende zakelijke verplichting is tussengekomen. Zou het mogelijk zijn om de afspraak naar morgen te verplaatsen? Schikt 10:00 uur of 14:00 uur u wellicht?' Uitleg: Je gebruikt 'helaas', je geeft een professionele reden ('zakelijke verplichting'), je gebruikt de beleefde vorm 'zou het mogelijk zijn', en je doet direct een concreet tegenvoorstel."
    },
    {
      question: " - 'Verzetten' vs 'Annuleren' vs 'Afzeggen'. Een student stuurde de volgende e-mail naar zijn docent: 'Beste meneer De Vries, Ik wil onze afspraak van morgen annuleren naar donderdag. Ik ben dan verhinderd.' Er zitten twee grote fouten in de woordkeuze en de toon. Wat zijn ze, en hoe moet de e-mail wél?",
      answer: "Fout 1 (Woordkeuze): Je kunt iets niet 'annuleren naar' een andere dag. 'Annuleren' betekent dat het helemaal stopt. Je moet hier 'verzetten' of 'verplaatsen' gebruiken. Fout 2 (Toon): 'Ik wil' is te direct en dwingend voor een docent. Je moet een beleefde vraag stellen. Correcte e-mail: 'Beste meneer De Vries, Helaas ben ik morgen verhinderd. Zou het mogelijk zijn om onze afspraak te verzetten naar donderdag? Alvast bedankt. Met vriendelijke groet, [Naam]'."
    },
    {
      question: " - Informeel vs. Formeel schakelen. Situatie A (Informeel): Je vriend appt: 'Zullen we vrijdag om 19:00 uur bij de Italiaan afspreken?' Jij hebt die dag al een andere afspraak, maar zaterdag kan wel. Situatie B (Formeel): Een potentiële nieuwe klant mailt: 'Zou ik aanstaande vrijdag om 19:00 uur bij u langs kunnen komen voor een kennismaking?' Jij bent om die tijd niet op kantoor, maar je collega kan hem ontvangen. Hoe reageer je in beide situaties?",
      answer: "Situatie A (Informeel): 'Hoi! Dat lukt me vrijdag helaas niet, ik heb dan al iets. Maar zaterdag kan ik wel! Zullen we het dan doen?' Situatie B (Formeel): 'Geachte heer/mevrouw, Hartelijk dank voor uw bericht. Helaas ben ik vrijdagavond niet op kantoor. Zou het wellicht mogelijk zijn om mijn collega, de heer Jansen, u te laten ontvangen? Hij kan u uitstekend te woord staan. Ik hoor het graag. Met vriendelijke groet,' Uitleg: In situatie A gebruik je korte, vlotte zinnen en 'helaas' als verzachter. In situatie B gebruik je de volledige formele structuur, bied je een excuus aan, en los je het probleem direct op door een alternatief (de collega) aan te dragen."
    }
  ]
};