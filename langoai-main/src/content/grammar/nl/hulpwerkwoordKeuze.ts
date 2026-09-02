import type { GrammarLesson } from "../../types";

export const hulpwerkwoordKeuze: GrammarLesson = {
  id: "nl-hulpwerkwoordkeuze-1",
  title: "Hebben vs. Zijn in Voltooide Tijden: De Definitieve Masterclass",
  level: 2,
  topic: "Hulpwerkwoordkeuze", // [G] Grammatica
  body: "Beheers de diepste grammaticale logica achter hebben en zijn. Van de 80/20-regel tot gevorderde dualiteiten, de speciale club en het ultieme beslisalgoritme.",
  overview:
    "Dit is de allesomvattende, encyclopedische gids over hulpwerkwoordkeuze in het Nederlands. Je leert waarom *hebben* de standaard is, wanneer *zijn* verplicht is (verplaatsing, toestandsverandering, speciale club), welke absolute garanties er zijn voor *hebben*, hoe je omgaat met complexe nuances zoals activiteit versus bestemming, en hoe je met een stappenplan van vijf seconden nooit meer twijfelt. Met kristalheldere tabellen, 70+ voorbeeldzinnen, uitgebreide PAS OP-waarschuwingen en 5 complexe masterclass-vragen kies jij voortaan blindelings het juiste hulpwerkwoord.",
  anchorSectionId: "basisregel",
  exercises: [],
  timeExpressionsLabel: "De keuze tussen hebben en zijn in één oogopslag 🎯",
  timeExpressions: {
    header: "Categorie | Kenmerk | Hulpwerkwoord | Voorbeeld",
    rows: [
      ["🛡️ Default / Standaard", "Geen verplaatsing, geen verandering", "hebben", "Ik heb een boek gelezen."],
      ["🚶 Categorie A: Verplaatsing", "Fysieke beweging van A naar B", "zijn", "Ik ben naar Amsterdam gefietst."],
      ["🦋 Categorie B: Toestandsverandering", "Interne of uiterlijke transitie", "zijn", "Het ijs is gesmolten."],
      ["👑 Categorie C: Speciale Club", "Idiomatische uitzonderingen", "zijn", "Het experiment is geslaagd."],
      ["🔍 Transitief / Wederkerend", "Lijdend voorwerp of zich/me", "hebben", "Zij heeft zich vergist."],
      ["⚠️ Activiteit vs. Resultaat", "Focus op duur of bestemming", "hebben / zijn", "Ik heb gezwommen (duur) vs. Ik ben naar zee gezwommen (bestemming)."],
    ],
  },
  details: [
    {
      title: "Deel 1: De gouden basisregel – de 80/20-regel 🎯",
      body: `
        <p>Onthoud dit als je enige regel zou onthouden:</p>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-emerald-400 dark:before:bg-emerald-500 text-slate-700 dark:text-slate-300"><strong>HEBBEN</strong> is de <strong>standaard (default)</strong>. Ongeveer 80-90% van alle Nederlandse werkwoorden gebruikt <em>hebben</em>.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>ZIJN</strong> is de <strong>uitzondering</strong>, maar een zeer logische. Een werkwoord gebruikt <em>zijn</em> <strong>alleen en uitsluitend</strong> als het aan één van de drie categorieën in Deel 2 voldoet.</li>
        </ul>
        <div class="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 rounded-lg p-4 my-4">
          <p class="font-bold text-indigo-800 dark:text-indigo-200 mb-1">📐 De Kernformule:</p>
          <p class="text-sm text-slate-700 dark:text-slate-300">Geen verplaatsing + Geen toestandsverandering + Geen lid van de 'Speciale Club' = <strong>HEBBEN</strong>.</p>
        </div>
      `,
    },
    {
      title: "Deel 2: De 3 heilige categorieën van 'zijn' 📜",
      body: `
        <p>Een werkwoord gebruikt <strong>zijn</strong> in de voltooide tijd als het aan <strong>minstens één</strong> van deze drie voorwaarden voldoet:</p>
        
        <div class="grid md:grid-cols-3 gap-4 my-4">
          <div class="bg-white dark:bg-slate-800/50 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
            <h4 class="font-bold text-emerald-700 dark:text-emerald-300 mb-2">🚶 Categorie A: Verplaatsing (Van A naar B)</h4>
            <p class="text-xs text-slate-600 dark:text-slate-400 mb-2">Fysieke locatieverandering. Focus op resultaat.</p>
            <p class="text-sm text-slate-700 dark:text-slate-300">gaan, komen, vertrekken, aankomen, rijden, vliegen, varen, lopen, rennen, vallen, stijgen, dalen, terugkeren.</p>
            <p class="text-sm mt-2 italic">Ik ben naar de winkel gelopen.</p>
          </div>
          <div class="bg-white dark:bg-slate-800/50 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
            <h4 class="font-bold text-indigo-700 dark:text-indigo-300 mb-2">🦋 Categorie B: Toestandsverandering (Transitie)</h4>
            <p class="text-xs text-slate-600 dark:text-slate-400 mb-2">Interne of uiterlijke verandering. Anders dan voorheen.</p>
            <p class="text-sm text-slate-700 dark:text-slate-300">worden, groeien, sterven, bevriezen, smelten, ontdooien, ontwaken, veranderen, verdwijnen, verschijnen, ontstaan.</p>
            <p class="text-sm mt-2 italic">Het ijs is gesmolten.</p>
          </div>
          <div class="bg-white dark:bg-slate-800/50 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
            <h4 class="font-bold text-amber-700 dark:text-amber-300 mb-2">👑 Categorie C: De 'Speciale Club'</h4>
            <p class="text-xs text-slate-600 dark:text-slate-400 mb-2">Geen verplaatsing/verandering, maar altijd zijn.</p>
            <p class="text-sm text-slate-700 dark:text-slate-300">zijn, blijven, gebeuren, lukken, slagen, gelukken, overkomen, mislukken.</p>
            <p class="text-sm mt-2 italic">Het experiment is geslaagd.</p>
          </div>
        </div>
        
        <div class="bg-rose-50 dark:bg-rose-900/20 border border-rose-200 dark:border-rose-800 rounded-lg p-4 my-4">
          <p class="font-bold text-rose-700 dark:text-rose-300 mb-1">⚠️ PAS OP: De 'Lopen/Fietsen/Zwemmen' Val</p>
          <p class="text-sm text-slate-700 dark:text-slate-300 mt-1">
            Deze werkwoorden kunnen <strong>zowel</strong> hebben als zijn gebruiken, afhankelijk van de focus:<br>
            ✅ <em>Ik heb een uur gezwommen.</em> → Focus op activiteit/duur → HEBBEN.<br>
            ✅ <em>Ik ben naar het zwembad gezwommen.</em> → Focus op verplaatsing/resultaat → ZIJN.<br>
            Regel: Zonder bestemming = hebben. Met bestemming = zijn.
          </p>
        </div>
      `,
    },
    {
      title: "Deel 3: Absolute 'hebben'-garanties 🛡️",
      body: `
        <p>In deze situaties is <strong>hebben</strong> verplicht. Punt. Geen discussie mogelijk.</p>
        
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-emerald-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Type</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Herkenning</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Voorbeeld</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">Transitief (Lijdend voorwerp)</td>
                <td class="px-4 py-3 text-sm">Vraag: "Wat?" of "Wie?" is mogelijk.</td>
                <td class="px-4 py-3 text-sm">Ik heb een appel gegeten. (Wat?)</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">Wederkerend (Reflexief)</td>
                <td class="px-4 py-3 text-sm">Bevat: me, je, zich, ons, jullie.</td>
                <td class="px-4 py-3 text-sm">Hij heeft zich aangekleed.</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">Modaal werkwoord (als hoofdwerkwoord)</td>
                <td class="px-4 py-3 text-sm">Kunnen, moeten, mogen, willen, zonder andere infinitief.</td>
                <td class="px-4 py-3 text-sm">Ik heb dat niet gewild.</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div class="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-400 p-4 my-4">
          <p class="font-semibold text-amber-800 dark:text-amber-200">⚠️ PAS OP: Toestandswerkwoorden en duur</p>
          <p class="text-sm text-slate-700 dark:text-slate-300 mt-1">
            Werkwoorden die een toestand beschrijven (staan, liggen, zitten, hangen) gebruiken <strong>hebben</strong> wanneer je de <em>duur</em> benadrukt:<br>
            ✅ <em>Ik heb twee uur in de wachtkamer gezeten.</em><br>
            Gebruik <strong>zijn</strong> alleen bij de <em>overgang</em> naar die toestand, vaak met 'gaan':<br>
            ✅ <em>Hij is plotseling gaan staan.</em>
          </p>
        </div>
      `,
    },
    {
      title: "Deel 4: Gevorderde valkuilen & nuances (Deep Dive) ⚠️",
      body: `
        <p>Dit is het niveau van taalkundige perfectie. Hier gaan zelfs moedertaalsprekers de fout in.</p>
        
        <h3 class="text-lg font-bold mt-4 mb-2">1. Beginnen / Eindigen: De focus-bepaling</h3>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-emerald-400 dark:before:bg-emerald-500 text-slate-700 dark:text-slate-300"><em>De film is om 20:00 uur begonnen.</em> → Feitelijk moment van aanvang → <strong>zijn</strong> (standaard & veilig).</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><em>De film heeft laat begonnen.</em> → Focus op ervaring/duur → <strong>hebben</strong> (toegestaan, maar minder formeel).</li>
        </ul>
        
        <h3 class="text-lg font-bold mt-4 mb-2">2. Figuurlijke verplaatsing vs. abstracte staat</h3>
        <p>Abstracte zinnen volgen exact dezelfde logica:</p>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-emerald-400 dark:before:bg-emerald-500 text-slate-700 dark:text-slate-300">✅ <em>Het idee is ontstaan tijdens de meeting.</em> (Toestandsverandering → zijn)</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">✅ <em>Zij heeft het probleem opgelost.</em> (Transitief lijdend voorwerp → hebben)</li>
        </ul>
        
        <div class="bg-rose-50 dark:bg-rose-900/20 border border-rose-200 dark:border-rose-800 rounded-lg p-4 my-4">
          <p class="font-bold text-rose-700 dark:text-rose-300 mb-1">🚨 PAS OP: De 'Hangen' Valsheid</p>
          <p class="text-sm text-slate-700 dark:text-slate-300 mt-1">
            In Vlaams spreektaal hoor je soms: <em>"De jas is aan de kapstok gehangen."</em><br>
            In <strong>Standaard Nederlands</strong> is dit fout voor een statische toestand. De norm is:<br>
            ✅ <em>De jas heeft aan de kapstok gehangen.</em> (duur/toestand)<br>
            Gebruik alleen <em>zijn gehangen</em> bij letterlijke verplaatsing of als je 'ophangen' (handeling) bedoelt: <em>Ik heb de jas opgehangen.</em>
          </p>
        </div>
      `,
    },
    {
      title: "Deel 5: Het ultieme beslisalgoritme (3 stappen) 🗺️",
      body: `
        <p>Twijfel je in een zin? Doorloop dit mentale stappenplan van vijf seconden:</p>
        
        <div class="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 rounded-lg p-4 my-4">
          <p class="font-bold text-indigo-800 dark:text-indigo-200 mb-2">🎯 Stap 1: Lijdend voorwerp of wederkerend?</p>
          <p class="text-sm text-slate-700 dark:text-slate-300 mb-2">Kun je "wat/wie" vragen, of zie je "zich/me/je"?</p>
          <ul class="space-y-1 text-sm">
            <li class="flex items-start"><span class="text-emerald-500 mr-2">✅ JA</span><span>→ HEBBEN. (Einde zoektocht).</span></li>
            <li class="flex items-start"><span class="text-rose-500 mr-2">❌ NEE</span><span>→ Ga naar Stap 2.</span></li>
          </ul>
        </div>
        
        <div class="grid md:grid-cols-2 gap-4 my-4">
          <div class="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-lg p-4">
            <h4 class="font-bold text-emerald-700 dark:text-emerald-300 mb-2">🔹 Stap 2: Verplaatsing of Toestandsverandering?</h4>
            <p class="text-sm text-slate-700 dark:text-slate-300 mb-2">Gaat het onderwerp fysiek van A naar B? Of verandert het intern/extern?</p>
            <ul class="space-y-1 text-sm">
              <li class="flex items-start"><span class="text-emerald-500 mr-2">✅ JA</span><span>→ ZIJN.</span></li>
              <li class="flex items-start"><span class="text-rose-500 mr-2">❌ NEE</span><span>→ Ga naar Stap 3.</span></li>
            </ul>
          </div>
          
          <div class="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
            <h4 class="font-bold text-amber-700 dark:text-amber-300 mb-2">🔹 Stap 3: Lid van de 'Speciale Club'?</h4>
            <p class="text-sm text-slate-700 dark:text-slate-300 mb-2">zijn, blijven, gebeuren, lukken, slagen, overkomen, mislukken?</p>
            <ul class="space-y-1 text-sm">
              <li class="flex items-start"><span class="text-emerald-500 mr-2">✅ JA</span><span>→ ZIJN.</span></li>
              <li class="flex items-start"><span class="text-rose-500 mr-2">❌ NEE</span><span>→ HEBBEN (Default).</span></li>
            </ul>
          </div>
        </div>
        
        <div class="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 rounded-lg p-4 my-4">
          <p class="font-semibold text-indigo-800 dark:text-indigo-200 mb-1">💡 Snelle check voor gevorderden:</p>
          <p class="text-sm text-slate-700 dark:text-slate-300">
            Twijfel je tussen hebben/zijn bij beweging? Vraag: "Is er een specifieke bestemming genoemd?" Ja → zijn. Nee (focus op activiteit/duur) → hebben. Dit lost 95% van de discussies op.
          </p>
        </div>
      `,
    },
    {
      title: "Deel 6: Snelle herhaling – alles op één pagina ⚡",
      body: `
        <ul class="my-2 space-y-2 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-['✅'] before:absolute before:left-0 before:top-[0.4rem] text-slate-700 dark:text-slate-300"><strong>Hebben is default:</strong> 80-90% van de werkwoorden.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-['✅'] before:absolute before:left-0 before:top-[0.4rem] text-slate-700 dark:text-slate-300"><strong>Zijn categorie 1:</strong> Verplaatsing A→B (gaan, komen, rijden, vliegen).</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-['✅'] before:absolute before:left-0 before:top-[0.4rem] text-slate-700 dark:text-slate-300"><strong>Zijn categorie 2:</strong> Toestandsverandering (worden, smelten, sterven, verdwijnen).</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-['✅'] before:absolute before:left-0 before:top-[0.4rem] text-slate-700 dark:text-slate-300"><strong>Zijn categorie 3:</strong> Speciale Club (zijn, blijven, gebeuren, slagen, lukken, overkomen).</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-['🛡️'] before:absolute before:left-0 before:top-[0.4rem] text-slate-700 dark:text-slate-300"><strong>Hebben garanties:</strong> Lijdend voorwoord? → hebben. Wederkerend (zich)? → hebben.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-['⚠️'] before:absolute before:left-0 before:top-[0.4rem] text-slate-700 dark:text-slate-300"><strong>Activiteit vs. Bestemming:</strong> zonder bestemming = hebben, met bestemming = zijn.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-['⚠️'] before:absolute before:left-0 before:top-[0.4rem] text-slate-700 dark:text-slate-300"><strong>Toestand + duur:</strong> staan, liggen, zitten, hangen → hebben (bij duur), zijn + gaan → bij overgang.</li>
        </ul>
      `,
    },
  ],
  rulesTable: [
    {
      rule: "Default regel",
      structure: "Geen verplaatsing + Geen verandering + Geen speciale club = **HEBBEN**.",
      example: "Ik heb gelezen. • Zij heeft gewerkt. • Wij hebben gepraat.",
      usage: "Twijfel je en past het niet in de 3 categorieën? Kies altijd hebben. Dat is in 90% van de gevallen correct."
    },
    {
      rule: "Verplaatsing (A → B)",
      structure: "Fysieke locatieverandering met focus op resultaat of bestemming → **ZIJN**.",
      example: "Ik ben naar de winkel gelopen. • De trein is vertrokken. • Hij is gevallen.",
      usage: "Let op: zonder bestemming (focus op activiteit/duur) wordt vaak hebben gebruikt: Ik heb een uur gelopen."
    },
    {
      rule: "Toestandsverandering",
      structure: "Interne of uiterlijke transitie, anders worden dan voorheen → **ZIJN**.",
      example: "Het ijs is gesmolten. • Hij is volwassen geworden. • Het probleem is opgelost (in passieve zin met zijn).",
      usage: "Vraag: 'Is het onderwerp nu iets anders dan voor de handeling?' Ja → zijn."
    },
    {
      rule: "Speciale Club",
      structure: "Idiomatische werkwoorden die per definitie zijn vereisen: zijn, blijven, gebeuren, lukken, slagen, overkomen, mislukken.",
      example: "Het experiment is geslaagd. • Wat is er gebeurd? • Wij zijn thuis gebleven.",
      usage: "Leer deze club uit je hoofd. Ze breken soms de logica, maar volgen altijd zijn."
    },
    {
      rule: "Absolute hebben-garanties",
      structure: "Transitieve werkwoorden (lijdend voorwerp) en wederkerende werkwoorden (zich/me) → **HEBBEN**.",
      example: "Ik heb de auto gewassen. • Hij heeft zich vergist. • Zij heeft ons geholpen.",
      usage: "De 'Wat?'-test of 'Zich'-test is onfeilbaar. Als die klopt, is hebben verplicht."
    },
    {
      rule: "Beginnen / Eindigen & Toestand + Duur",
      structure: "Beginnen/eindigen bij moment → zijn. Bij duur/ervaring → hebben. Staan/liggen/zitten/hangen bij duur → hebben.",
      example: "De film is begonnen (moment). • De film heeft laat begonnen (duur/ervaring). • Ik heb twee uur gezeten.",
      usage: "Bij twijfel over beginnen/eindigen: kies zijn. Voor toestand + tijd: kies hebben."
    },
  ],
  callouts: [
    { type: "remember", label: "🎯 Gouden regel 1", text: "Hebben is de standaard (80-90%). Zijn is alleen voor verplaatsing, verandering of de speciale club." },
    { type: "remember", label: "🛡️ Gouden regel 2", text: "Lijdend voorwerp? Of zich/me/je? → Altijd HEBBEN. Nooit discussiëren." },
    { type: "remember", label: "🚶 Gouden regel 3", text: "Bewegingswerkwoorden: met bestemming = ZIJN, zonder bestemming (focus op activiteit) = HEBBEN." },
    { type: "remember", label: "👑 Gouden regel 4", text: "Speciale club: zijn, blijven, gebeuren, lukken, slagen, overkomen, mislukken → altijd ZIJN." },
    { type: "remember", label: "⚠️ Gouden regel 5", text: "Staan/liggen/zitten/hangen + tijd = HEBBEN (duur). Is + gaan + staan/liggen/etc. = overgang (ZIJN)." },
    { type: "tip", label: "💡 PAS OP & Pro-tip", text: "Twijfel je? Vraag: 'Kan ik wat/wie vragen?' of 'Zie ik zich?' → JA = hebben. NEE → 'Is er een bestemming of verandering?' → JA = zijn. NEE → hebben. Werkt altijd." },
  ],
  commonMistakes: [
    { incorrect: "Ik ben een boek gelezen.", correct: "Ik heb een boek gelezen.", explanation: "Er is een lijdend voorwerp (een boek). Transitieve werkwoorden gebruiken altijd hebben." },
    { incorrect: "Hij heeft naar Amsterdam gefietst.", correct: "Hij is naar Amsterdam gefietst.", explanation: "Specifieke bestemming (Amsterdam) benadrukt verplaatsing van A naar B → zijn." },
    { incorrect: "Het experiment heeft geslaagd.", correct: "Het experiment is geslaagd.", explanation: "Slagen behoort tot de 'Speciale Club'. Deze werkwoorden vereisen altijd zijn." },
    { incorrect: "De jas is jaren aan de kapstok gehangen.", correct: "De jas heeft jaren aan de kapstok gehangen.", explanation: "Hier wordt de duur van een statische toestand beschreven → hebben. Zijn wordt alleen gebruikt bij de overgang of met ophangen." },
    { incorrect: "Zij is zich vergist.", correct: "Zij heeft zich vergist.", explanation: "Zich vergissen is een wederkerend werkwoord. Wederkerende constructies gebruiken altijd hebben." },
    { incorrect: "Ik heb de hele dag gezwommen naar zee.", correct: "Ik ben naar zee gezwommen. (Of: Ik heb de hele dag gezwommen.)", explanation: "Meng niet beide structuren. Met bestemming → zijn. Zonder bestemming (focus op duur) → hebben." },
  ],
  review: [
    "✅ HEBBEN is de default (80-90% van alle werkwoorden).",
    "✅ ZIJN alleen bij: verplaatsing (A→B), toestandsverandering, of de speciale club.",
    "✅ Speciale club: zijn, blijven, gebeuren, lukken, slagen, gelukken, overkomen, mislukken → altijd zijn.",
    "✅ Lijdend voorwoord (wat/wie?) → hebben. Wederkerend (zich/me) → hebben.",
    "✅ Beweging met bestemming → zijn. Beweging zonder bestemming (activiteit/duur) → hebben.",
    "✅ Beginnen/eindigen bij moment → zijn. Bij duur/bijwoord → hebben is toegestaan, zijn blijft standaard.",
    "✅ Staan/liggen/zitten/hangen + tijd → hebben (nadruk op duur). Is gaan staan/liggen → zijn (nadruk op overgang).",
    "✅ Figuurlijke zinnen volgen exact dezelfde logica als fysieke zinnen.",
    "✅ Standaard Nederlands: 'de jas heeft gehangen' (toestand), niet 'is gehangen'.",
    "✅ Algoritme: Lijdend voorwerp/zich? → hebben. Verplaatsing/verandering/speciale club? → zijn. Anders → hebben."
  ],
  qa: [
    {
      question: "Vul in: Omdat ik gisteren de hele ochtend ___ fietsen, ___ ik moe naar huis gefietst.",
      answer: "heb, ben. Uitleg: Deel 1 benadrukt de activiteit en duur zonder specifieke bestemming -> hebben. Deel 2 benadrukt de verplaatsing met een duidelijke bestemming -> zijn."
    },
    {
      question: "Maak deze zin correct: Hij heeft geprobeerd het examen te maken, maar het heeft niet geslaagd.",
      answer: "Hij heeft geprobeerd het examen te maken, maar het is niet geslaagd. Uitleg: Slagen behoort tot de Speciale Club. Deze werkwoorden gebruiken altijd zijn, ongeacht de context."
    },
    {
      question: "Vorm de voltooide tijd: Zij ___ zich vergissen in haar berekening.",
      answer: "heeft. Zin: Zij heeft zich in haar berekening vergist. Uitleg: Hoewel er een verandering van inzicht is, is zich vergissen een wederkerend werkwoord. Wederkerende werkwoorden gebruiken altijd hebben."
    },
    {
      question: "Kies het juiste hulpwerkwoord en leg uit: De vergadering ___ laat begonnen, waardoor we de trein hebben gemist.",
      answer: "is. Uitleg: Beginnen verwijst hier naar het feitelijke moment van aanvang. Voor momenten van aanvang of beëindiging is zijn de absolute standaard in formeel Nederlands."
    },
    {
      question: "Herschrijf deze zin in de voltooide tijd: De jongen blijft staan wanneer de leraar de kamer binnenkomt.",
      answer: "De jongen is blijven staan wanneer de leraar de kamer binnenkwam. Uitleg: Blijven behoort tot de speciale club en vereist zijn. Bij een dubbele infinitiefconstructie staat het hulpwerkwoord vooraan en blijven de infinitieven heel achteraan."
    }
  ],
};