import type { GrammarLesson } from "../../types";

export const schrijfvaardigheidBriefVerslag: GrammarLesson = {
  id: "nl-schrijfvaardigheid-brief-verslag-1",
  title: "Schrijfvaardigheid: Informele Brief & Eenvoudig Verslag – De Ultieme Tabelgids",
  level: 2,
  topic: "Schrijfvaardigheid",
  body: "Beheers het schrijven van een informele brief/e-mail en een eenvoudig verslag volledig: structuur, toon, signaalwoorden, alinea's en de ultieme MAX-niveau schrijfopdrachten.",
  overview:
    "Dit is de allesomvattende, tabel-gerichte gids over schrijfvaardigheid in het Nederlands. Je leert het exacte verschil tussen een informele brief en een feitelijk verslag, beheerst de vaste structuur van beide tekstsoorten, kent de juiste signaalwoorden om je tekst vloeiend te maken, en vermijdt de 10 meest gemaakte schrijffouten. Met 15+ kristalheldere tabellen, voorbeeldzinnen en exact 4 complexe MAX-niveau oefenvragen schrijf jij voortaan foutloze, goed gestructureerde teksten voor elke situatie.",
  anchorSectionId: "doel-en-lezer",
  exercises: [],
  timeExpressionsLabel: "Informele Brief vs. Eenvoudig Verslag in één oogopslag 📝",
  timeExpressions: {
    header: "Kenmerk | Informele Brief / E-mail | Eenvoudig Verslag",
    rows: [
      ["🎯 Doel", "Contact onderhouden, uitnodigen, nieuws delen", "Feitelijk verslag doen van een activiteit of gebeurtenis"],
      ["👤 Lezer", "Vrienden, familie, hechte collega's (jij/je)", "Docent, leidinggevende, algemeen publiek (hij/zij/het)"],
      ["🎭 Toon", "Persoonlijk, vlot, emoties toegestaan", "Neutraal, objectief, feitelijk, zakelijk"],
      ["🏗️ Structuur", "Aanhef, opening, kern, afsluiting, groet", "Titel, inleiding, kern (wie/wat/waar/wanneer), conclusie"],
      ["🔗 Signaalwoorden", "En, maar, dus, want, toen", "Ten eerste, echter, daardoor, vervolgens, concluderend"]
    ]
  },
  details: [
    {
      title: "Deel 1: De Basis – Doel en Lezer Bepalen 🎯",
      body: `
        <p>Voordat je begint met schrijven, moet je altijd twee vragen beantwoorden: <strong>Wie is de lezer?</strong> en <strong>Wat is het doel?</strong> Dit bepaalt je toon en woordkeuze.</p>
        
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-indigo-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Kenmerk</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Informeel (Brief/E-mail)</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Neutraal/Feitelijk (Verslag)</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">Aanspreekvorm</td>
                <td class="px-4 py-3 text-sm"><strong>Jij / Je / Jou</strong> (of wij/we)</td>
                <td class="px-4 py-3 text-sm"><strong>Hij / Zij / Het / Men</strong> (geen directe aanspreekvorm)</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">Woordkeuze</td>
                <td class="px-4 py-3 text-sm">Spreektaal, afkortingen (oké, appje), emoticons</td>
                <td class="px-4 py-3 text-sm">Standaardtaal, volledige woorden, vaktermen</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">Zinslengte</td>
                <td class="px-4 py-3 text-sm">Kort, afwisselend, soms onvolledige zinnen</td>
                <td class="px-4 py-3 text-sm">Volledige zinnen, duidelijk, niet te lang</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30">
                <td class="px-4 py-3 text-sm font-semibold">Emotie</td>
                <td class="px-4 py-3 text-sm">Mag uitgesproken worden (<em>Ik vind het superleuk!</em>)</td>
                <td class="px-4 py-3 text-sm">Wordt vermeden (<em>De activiteit werd als positief ervaren.</em>)</td>
              </tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      title: "Deel 2: De Informele Brief / E-mail 📧",
      body: `
        <p>Een informele brief of e-mail heeft een vaste, voorspelbare opbouw. Dit maakt het voor de lezer makkelijk om je bericht te volgen.</p>
        
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-emerald-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Onderdeel</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Functie</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Voorbeeldzinnen (Informeel)</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">1. Onderwerp (E-mail)</td>
                <td class="px-4 py-3 text-sm text-xs">Waar gaat de mail over? (Kort en duidelijk)</td>
                <td class="px-4 py-3 text-sm"><em>Uitnodiging verjaardag / Vraag over het project</em></td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">2. Aanhef</td>
                <td class="px-4 py-3 text-sm text-xs">De lezer begroeten</td>
                <td class="px-4 py-3 text-sm"><em>Haar Mark, / Hoi Lisa, / Beste collega's,</em></td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">3. Opening</td>
                <td class="px-4 py-3 text-sm text-xs">Contact leggen of verwijzen naar eerder contact</td>
                <td class="px-4 py-3 text-sm"><em>Hoe is het met je? / Bedankt voor je snelle reactie. / Ik schrijf je omdat...</em></td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">4. De Kern</td>
                <td class="px-4 py-3 text-sm text-xs">De hoofdboodschap (in korte alinea's)</td>
                <td class="px-4 py-3 text-sm"><em>Zaterdag heb ik een feestje. Het begint om 20.00 uur bij mij thuis. Zou je kunnen komen?</em></td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">5. Afsluiting</td>
                <td class="px-4 py-3 text-sm text-xs">Een wens of oproep tot actie</td>
                <td class="px-4 py-3 text-sm"><em>Ik hoor het graag van je! / Laat je even weten of je komt? / Tot snel!</em></td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30">
                <td class="px-4 py-3 text-sm font-semibold">6. Groet</td>
                <td class="px-4 py-3 text-sm text-xs">Het bericht beleefd beëindigen</td>
                <td class="px-4 py-3 text-sm"><em>Groetjes, / Liefs, / Met vriendelijke groet,</em></td>
              </tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      title: "Deel 3: Het Eenvoudige Verslag 📊",
      body: `
        <p>Een verslag is <strong>feitelijk en objectief</strong>. Je vertelt wat er is gebeurd, zonder je eigen mening of emoties erin te mengen (tenzij gevraagd om een 'evaluatie').</p>
        
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-purple-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Onderdeel</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Functie</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Voorbeeldzinnen (Neutraal/Feitelijk)</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">1. Titel</td>
                <td class="px-4 py-3 text-sm text-xs">Waar gaat het verslag over?</td>
                <td class="px-4 py-3 text-sm"><em>Verslag van de excursie naar het Rijksmuseum.</em></td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">2. Inleiding</td>
                <td class="px-4 py-3 text-sm text-xs">De 4 W's: Wie, Wat, Waar, Wanneer?</td>
                <td class="px-4 py-3 text-sm"><em>Op 12 mei 2024 bezocht klas 3A het Rijksmuseum in Amsterdam.</em></td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">3. Kern (Methode/Verloop)</td>
                <td class="px-4 py-3 text-sm text-xs">Wat is er precies gebeurd? (Chronologisch)</td>
                <td class="px-4 py-3 text-sm"><em>Om 10.00 uur begon de rondleiding. Vervolgens kregen de leerlingen een opdracht.</em></td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">4. Resultaten / Bevindingen</td>
                <td class="px-4 py-3 text-sm text-xs">Wat was de uitkomst?</td>
                <td class="px-4 py-3 text-sm"><em>De meeste leerlingen maakten de opdracht binnen de gestelde tijd af.</em></td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50">
                <td class="px-4 py-3 text-sm font-semibold">5. Conclusie</td>
                <td class="px-4 py-3 text-sm text-xs">Korte samenvatting of eindoordeel (objectief)</td>
                <td class="px-4 py-3 text-sm"><em>Concluderend kan worden gesteld dat de excursie leerzaam en goed georganiseerd was.</em></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-400 p-4 my-4">
          <p class="font-bold text-amber-800 dark:text-amber-200 mb-1">⚠️ DE REGEL VAN OBJECTIVITEIT</p>
          <p class="text-sm text-slate-700 dark:text-slate-300 mt-1">
            Gebruik in een verslag <strong>geen</strong> woorden als: <em>ik vind, helaas, gelukkig, superleuk, vreselijk</em>.<br>
            ❌ Fout: <em>Helaas was het weer vreselijk, maar we vonden het toch superleuk.</em><br>
            ✅ Correct: <em>Ondanks de regenval werd de activiteit door de deelnemers als positief ervaren.</em>
          </p>
        </div>
      `
    },
    {
      title: "Deel 4: Signaalwoorden – De Lijm van je Tekst 🔗",
      body: `
        <p>Signaalwoorden maken je tekst logisch en vloeiend. Ze vertellen de lezer hoe de zinnen met elkaar samenhangen.</p>
        
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-indigo-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Categorie</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Signaalwoorden</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Voorbeeldzin</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">Opsomming</td>
                <td class="px-4 py-3 text-sm text-xs">Ten eerste, ten tweede, bovendien, ook, en</td>
                <td class="px-4 py-3 text-sm"><em>Ten eerste is het goedkoop. <strong>Bovendien</strong> is het dichtbij.</em></td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">Tegenstelling</td>
                <td class="px-4 py-3 text-sm text-xs">Maar, echter, toch, desondanks, hoewel</td>
                <td class="px-4 py-3 text-sm"><em>Het regende. <strong>Desondanks</strong> gingen we wandelen.</em></td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">Oorzaak & Gevolg</td>
                <td class="px-4 py-3 text-sm text-xs">Omdat, want, daardoor, dus, daarom, waardoor</td>
                <td class="px-4 py-3 text-sm"><em>De trein had vertraging, <strong>daardoor</strong> kwam ik te laat.</em></td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">Tijd / Volgorde</td>
                <td class="px-4 py-3 text-sm text-xs">Eerst, daarna, vervolgens, toen, uiteindelijk</td>
                <td class="px-4 py-3 text-sm"><em><strong>Vervolgens</strong> liepen we naar het museum.</em></td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50">
                <td class="px-4 py-3 text-sm font-semibold">Conclusie</td>
                <td class="px-4 py-3 text-sm text-xs">Kortom, concluderend, samenvattend, dus</td>
                <td class="px-4 py-3 text-sm"><em><strong>Concluderend</strong> was het een geslaagde dag.</em></td>
              </tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      title: "Deel 5: De Grootste Valkuilen bij het Schrijven ❌ → ✅",
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
                <td class="px-4 py-3 text-sm text-rose-600">Eén grote lap tekst zonder alinea's.</td>
                <td class="px-4 py-3 text-sm">Duidelijke alinea's (nieuwe alinea bij nieuw onderwerp).</td>
                <td class="px-4 py-3 text-sm text-xs">Een alinea bevat <strong>één</strong> hoofdidee. Begin een nieuwe alinea voor een nieuwe stap of gedachte.</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm text-rose-600">Te lange, ingewikkelde zinnen.</td>
                <td class="px-4 py-3 text-sm">Korte, krachtige zinnen (max. 15-20 woorden).</td>
                <td class="px-4 py-3 text-sm text-xs">Lees je zin hardop voor. Moet je halverwege ademhalen? Maak er twee zinnen van.</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm text-rose-600">Subjectieve taal in een verslag.</td>
                <td class="px-4 py-3 text-sm">Objectieve, feitelijke taal.</td>
                <td class="px-4 py-3 text-sm text-xs">Vermijd 'ik vind' of 'helaas' in een verslag. Gebruik 'deelnemers gaven aan' of 'ondanks'.</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm text-rose-600">Verkeerde aanhef of afsluiting.</td>
                <td class="px-4 py-3 text-sm">Aanhef en afsluiting op de doelgroep afstemmen.</td>
                <td class="px-4 py-3 text-sm text-xs">Schrijf niet 'Beste meneer' als je je vriend een mailtje stuurt. Gebruik 'Haar [Naam]' of 'Hoi [Naam]'.</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50">
                <td class="px-4 py-3 text-sm text-rose-600">Geen signaalwoorden gebruiken.</td>
                <td class="px-4 py-3 text-sm">Signaalwoorden toevoegen voor samenhang.</td>
                <td class="px-4 py-3 text-sm text-xs">Zonder signaalwoorden leest je tekst als een boodschappenlijstje, niet als een vloeiend verhaal.</td>
              </tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      title: "Deel 6: Snelle herhaling – Alles op één pagina ⚡",
      body: `
        <ul class="my-2 space-y-2 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-['✅'] before:absolute before:left-0 before:top-[0.4rem] text-slate-700 dark:text-slate-300"><strong>Bepaal doel en lezer:</strong> Informeel (jij/je, vlot) of Neutraal (feitelijk, objectief)?</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-['✅'] before:absolute before:left-0 before:top-[0.4rem] text-slate-700 dark:text-slate-300"><strong>Structuur brief:</strong> Onderwerp, aanhef, opening, kern, afsluiting, groet.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-['✅'] before:absolute before:left-0 before:top-[0.4rem] text-slate-700 dark:text-slate-300"><strong>Structuur verslag:</strong> Titel, inleiding (4 W's), kern, resultaten, conclusie.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-['✅'] before:absolute before:left-0 before:top-[0.4rem] text-slate-700 dark:text-slate-300"><strong>Alinea's:</strong> Één hoofdidee per alinea. Begin een nieuwe alinea bij een nieuw onderwerp.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-['✅'] before:absolute before:left-0 before:top-[0.4rem] text-slate-700 dark:text-slate-300"><strong>Signaalwoorden:</strong> Gebruik woorden als <em>echter, daardoor, vervolgens</em> om zinnen aan elkaar te plakken.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-['✅'] before:absolute before:left-0 before:top-[0.4rem] text-slate-700 dark:text-slate-300"><strong>Controle:</strong> Lees je tekst altijd hardop terug om lange zinnen en fouten te ontdekken.</li>
        </ul>
      `
    }
  ],
  rulesTable: [
    {
      rule: "De Alinea-regel",
      structure: "Eén alinea = één hoofdidee. Begin een nieuwe alinea bij een nieuw onderwerp, een nieuwe spreker of een nieuwe stap in de tijd.",
      example: "Alinea 1: De aanleiding. Alinea 2: Wat we hebben gedaan. Alinea 3: De conclusie.",
      usage: "Maakt je tekst visueel rustig en logisch opgebouwd voor de lezer."
    },
    {
      rule: "Toon en Register",
      structure: "Informeel = jij/je, spreektaal, emotie. Neutraal/Verslag = hij/zij/het, standaardtaal, feiten.",
      example: "Informeel: 'Ik vind het superleuk!' • Verslag: 'De activiteit werd als positief ervaren.'",
      usage: "Meng deze twee nooit door elkaar in één tekst."
    },
    {
      rule: "Signaalwoorden gebruiken",
      structure: "Gebruik signaalwoorden om de relatie tussen zinnen aan te geven (opsomming, tegenstelling, oorzaak/gevolg, tijd).",
      example: "Het regende. <strong>Desondanks</strong> gingen we naar buiten. <strong>Daardoor</strong> werden we nat.",
      usage: "Zonder signaalwoorden voelt een tekst hakkelig en onsamenhangend."
    },
    {
      rule: "De 4 W's in de inleiding",
      structure: "Een goede inleiding (vooral in een verslag) beantwoordt direct: Wie? Wat? Waar? Wanneer?",
      example: "Op 12 mei (Wanneer) bezocht klas 3A (Wie) het Rijksmuseum (Waar) voor een kunstles (Wat).",
      usage: "De lezer weet direct waar het over gaat zonder te hoeven raden."
    },
    {
      rule: "Korte, krachtige zinnen",
      structure: "Beperk zinnen tot maximaal 15-20 woorden. Gebruik een punt in plaats van een komma als de zin te lang wordt.",
      example: "Fout: 'Omdat het regende en we geen paraplu hadden besloten we maar snel naar huis te gaan.' • Correct: 'Het regende en we hadden geen paraplu. Daarom besloten we snel naar huis te gaan.'",
      usage: "Voorkomt grammaticale fouten en maakt de tekst veel beter leesbaar."
    },
    {
      rule: "Objectiviteit in een verslag",
      structure: "Vermijd persoonlijke meningen ('ik vind', 'helaas', 'gelukkig') in een feitelijk verslag.",
      example: "Niet: 'Helaas was het saai.' • Wel: 'De deelnemers gaven aan dat de activiteit weinig afwisseling bood.'",
      usage: "Een verslag dient om feiten te rapporteren, niet om emoties te uiten."
    }
  ],
  callouts: [
    { type: "remember", label: "✅ Gouden regel 1", text: "Bepaal ALTIJD eerst je lezer en je doel voordat je de eerste zin schrijft." },
    { type: "remember", label: "✅ Gouden regel 2", text: "Eén alinea = één hoofdidee. Gebruik witruimte om je tekst overzichtelijk te maken." },
    { type: "remember", label: "⚠️ PAS OP 1", text: "Meng geen informele taal (jij/je, spreektaal) door een formeel verslag. Houd het feitelijk." },
    { type: "remember", label: "⚠️ PAS OP 2", text: "Gebruik signaalwoorden! Ze zijn de 'lijm' die je zinnen tot een logisch geheel maken." },
    { type: "remember", label: "⚠️ PAS OP 3", text: "Lees je tekst altijd hardop terug. Hoor je een zin die te lang is of vreemd klinkt? Pas hem aan." },
    { type: "tip", label: "💡 Pro-tip", text: "Gebruik de 'KISS'-methode: Keep It Short and Simple. Korte zinnen en duidelijke woorden zijn altijd beter dan ingewikkelde constructies." }
  ],
  commonMistakes: [
    { incorrect: "Een tekst van 15 regels zonder één enkele punt of nieuwe alinea.", correct: "De tekst opdelen in logische alinea's met korte, duidelijke zinnen.", explanation: "Een 'lap tekst' is onleesbaar. Elke nieuwe gedachte of stap verdient een nieuwe alinea." },
    { incorrect: "Beste meneer, (in een mailtje aan een vriend)", correct: "Haar Mark, / Hoi Mark,", explanation: "De aanhef moet altijd passen bij de relatie met de lezer. 'Beste meneer' is te formeel voor vrienden." },
    { incorrect: "Ik vind dat het een vreselijk slecht georganiseerd feestje was, helaas.", correct: "De organisatie van het feestje werd door de deelnemers als onvoldoende ervaren.", explanation: "In een verslag moet je objectief en feitelijk blijven. Vermijd woorden als 'ik vind', 'vreselijk' en 'helaas'." },
    { incorrect: "We gingen naar het museum en toen zagen we veel schilderijen en daarna gingen we lunchen want we hadden honger.", correct: "We bezochten het museum en bekeken diverse schilderijen. Vervolgens gingen we lunchen, omdat we honger kregen.", explanation: "Te lange zinnen met te veel 'en' en 'toen'. Gebruik punten en signaalwoorden om de tekst te breken." },
    { incorrect: "Groetjes, (aan het einde van een formeel verslag)", correct: "Conclusie: ... / Met vriendelijke groet, (bij een formele brief)", explanation: "Een verslag eindigt met een conclusie, niet met een persoonlijke groet. Een formele brief eindigt wel met 'Met vriendelijke groet'." }
  ],
  review: [
    "✅ Bepaal eerst: Wie is de lezer? Wat is het doel?",
    "✅ Informele brief: Aanhef, opening, kern, afsluiting, groet. Gebruik jij/je.",
    "✅ Eenvoudig verslag: Titel, inleiding (4 W's), kern, resultaten, conclusie. Feitelijk en objectief.",
    "✅ Gebruik alinea's: Één hoofdidee per alinea.",
    "✅ Gebruik signaalwoorden (echter, daardoor, vervolgens) voor samenhang.",
    "✅ Houd zinnen kort en krachtig (max. 15-20 woorden).",
    "✅ Lees je tekst altijd hardop terug voordat je hem inlevert.",
    "✅ Vermijd subjectieve taal ('ik vind', 'helaas') in een feitelijk verslag."
  ],
  qa: [
    {
      question: " - Structuur en Toon: Je moet een verslag schrijven over een schooldag. Een leerling schrijft: 'Haar meneer De Vries, gisteren was het echt superleuk op school! We hebben eerst gewandeld, maar het regende helaas, dus we zijn snel naar binnen gegaan en hebben pizza gegeten. Het was de beste dag ooit! Groetjes, Jan.' Noem 4 fouten in dit verslag en schrijf een correcte, feitelijke inleiding voor dit verslag.",
      answer: "Fouten: 1. Verkeerde aanhef ('Haar meneer' hoort in een brief, niet in een verslag). 2. Subjectieve taal ('superleuk', 'helaas', 'beste dag ooit'). 3. Informeel taalgebruik ('Groetjes'). 4. Ontbreken van de 4 W's in een duidelijke inleiding. Correcte inleiding: 'Op donderdag 10 oktober 2024 organiseerde klas 2B een buitendag. De activiteit vond plaats in het stadspark. Ondanks de regenval werd het programma aangepast en vond de lunch plaats in het schoolgebouw.'"
    },
    {
      question: " - Signaalwoorden en Samenhang: Verbind de volgende losse zinnen tot één vloeiende tekst van maximaal 3 zinnen, gebruikmakend van passende signaalwoorden. Zinnen: 'De batterij van de telefoon was leeg.' 'Ik kon mijn moeder niet bellen.' 'Ik ben te voet naar huis gelopen.' 'Het begon hard te regenen.'",
      answer: "'Omdat de batterij van mijn telefoon leeg was, kon ik mijn moeder niet bellen. Daardoor besloot ik te voet naar huis te lopen. Desondanks de harde regenval ben ik veilig thuisgekomen.' (Signaalwoorden gebruikt: Omdat, Daardoor, Desondanks)."
    },
    {
      question: " - De Informele Brief: Schrijf de kern (maximaal 4 zinnen) van een informele e-mail aan je vriendin Lisa. Doel: Je moet een afspraak voor vrijdagavond afzeggen omdat je ziek bent, maar je stelt direct een nieuw voorstel voor zaterdagmiddag voor.",
      answer: "'Helaas moet ik onze afspraak van vrijdagavond afzeggen, omdat ik me niet lekker voel en liever thuis blijf. Het spijt me dat ik er nu niet bij kan zijn. Zou het misschien mogelijk zijn om zaterdagmiddag samen koffie te drinken? Laat me even weten of dat voor jou schikt!'"
    },
    {
      question: " - Alinea's en Leesbaarheid: Waarom is de volgende tekst slecht geschreven, en hoe zou je hem verbeteren? 'Gisteren zijn we naar het bos gegaan het was mooi weer we hebben veel vogels gezien en een eekhoorn daarna hebben we een broodje gegeten op een bankje het was erg lekker maar toen begon het te waaien dus we zijn snel naar huis gegaan.'",
      answer: "De tekst is slecht omdat het één lange, ononderbroken zin is zonder leestekens of alinea's (een 'run-on sentence'). Verbetering: 'Gisteren zijn we naar het bos gegaan. Het was mooi weer en we hebben veel vogels en een eekhoorn gezien. Vervolgens hebben we op een bankje een broodje gegeten. Dit was erg lekker, maar toen het begon te waaien, zijn we snel naar huis gegaan.' (Duidelijke zinnen, punten, en signaalwoorden)."
    }
  ]
};