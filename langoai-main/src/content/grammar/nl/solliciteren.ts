import type { GrammarLesson } from "../../types";

export const solliciteren: GrammarLesson = {
  id: "nl-solliciteren-1",
  title: "Solliciteren: De Ultieme Masterclass voor Brief en Gesprek",
  level: 3,
  topic: "Communicatie & Vaardigheden",
  body: "Beheers het sollicitatieproces volledig: het schrijven van een overtuigende sollicitatiebrief, het voeren van een professioneel gesprek met de STAR-methode, en de juiste non-verbale communicatie.",
  overview:
    "Dit is de meest uitgebreide gids over solliciteren op C1-niveau in het Nederlands. Je leert hoe je een sollicitatiebrief schrijft die opvalt, hoe je de STAR-methode toepast om je ervaring krachtig te presenteren, en hoe je valkuilen in non-verbale communicatie vermijdt. Met prachtige tabellen, strikte PRO-regels en 4 korte oefenvragen solliciteer je voortaan als een ware professional!",
  anchorSectionId: "solliciteren-brief-en-gesprek",
  exercises: [],
  timeExpressionsLabel: "De Stappen van een Succesvolle Sollicitatie 📝",
  timeExpressions: {
    header: "Fase | Doel | Kernactie",
    rows: [
      ["**1. Voorbereiding**", "Onderzoek & Match", "Analyseer de vacature en het bedrijf grondig."],
      ["**2. De Brief**", "Interesse wekken", "Schrijf een op maat gemaakte, korte en krachtige brief."],
      ["**3. Het Gesprek**", "Overtuigen met bewijs", "Gebruik de STAR-methode voor concrete voorbeelden."],
      ["**4. De Follow-up**", "Professioneel afsluiten", "Stuur binnen 24 uur een korte bedankmail."]
    ]
  },
  details: [
    {
      title: "Deel 1: De Sollicitatiebrief (Schrijven): Jouw Visitekaartje 📝",
      body: `
        <p>Een sollicitatiebrief is <strong>geen</strong> opsomming van je cv. Het is een <strong>verkoopdocument</strong>. Je moet in één pagina bewijzen dat jij de oplossing bent voor het probleem van de werkgever.</p>
        
        <div class="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-emerald-700 dark:text-emerald-300 mb-2">🏆 PRO REGEL 1: De Match-Regel</h3>
          <p class="text-slate-700 dark:text-slate-300">Gebruik in je brief exact dezelfde <strong>sleutelwoorden</strong> die in de vacaturetekst staan. Als zij zoeken naar een "proactieve teamspeler", gebruik dan die exacte woorden en geef er een concreet voorbeeld van.</p>
        </div>

        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-gradient-to-r from-indigo-600 to-purple-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Onderdeel</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Functie</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Voorbeeldzin (Professioneel)</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-semibold">1. Aanhef</td><td class="px-4 py-3 text-sm text-xs">Persoonlijk en correct.</td><td class="px-4 py-3 text-sm">Geachte mevrouw De Vries,</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-semibold">2. Opening</td><td class="px-4 py-3 text-sm text-xs">Directe aanleiding + enthousiasme.</td><td class="px-4 py-3 text-sm">Met grote interesse las ik uw vacature voor [Functie] op [Website].</td></tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-semibold">3. De Match</td><td class="px-4 py-3 text-sm text-xs">Waarom jij? Koppel ervaring aan hun eis.</td><td class="px-4 py-3 text-sm">In mijn huidige rol heb ik bewezen dat ik [Eis] kan realiseren, zoals bleek toen ik [Resultaat].</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-semibold">4. Motivatie</td><td class="px-4 py-3 text-sm text-xs">Waarom dit bedrijf?</td><td class="px-4 py-3 text-sm">Uw organisatie spreekt mij aan vanwege de innovatieve aanpak op het gebied van...</td></tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-semibold">5. Afsluiting</td><td class="px-4 py-3 text-sm text-xs">Call to action (gesprek vragen).</td><td class="px-4 py-3 text-sm">Ik kom graag in een persoonlijk gesprek toelichten hoe ik van waarde kan zijn.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-4 py-3 text-sm font-semibold">6. Groet</td><td class="px-4 py-3 text-sm text-xs">Formeel.</td><td class="px-4 py-3 text-sm">Met vriendelijke groet,</td></tr>
            </tbody>
          </table>
        </div>

        <div class="bg-rose-50 dark:bg-rose-900/20 border-l-4 border-rose-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-rose-700 dark:text-rose-300 mb-2">🚨 PAS OP! DE "GEACHTE HEER/MEVROUW" VALKUIL!</h3>
          <p class="text-sm text-slate-700 dark:text-slate-300">Schrijf <strong>NOOIT</strong> "Geachte heer/mevrouw" als je de naam kunt achterhalen (via LinkedIn of de website). Het toont aan dat je geen moeite hebt gedaan. Zoek de naam van de hiring manager of het afdelingshoofd.</p>
        </div>
      `
    },
    {
      title: "Deel 2: Het Sollicitatiegesprek (Spreken): De STAR-methode 🗣️",
      body: `
        <p>In een gesprek wordt niet gevraagd <em>wat</em> je kunt, maar <em>hoe</em> je het in het verleden hebt gedaan. De gouden standaard om dit te beantwoorden is de <strong>STAR-methode</strong>.</p>
        
        <div class="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-indigo-700 dark:text-indigo-300 mb-2">🏆 PRO REGEL 2: De STAR-Formule</h3>
          <p class="text-slate-700 dark:text-slate-300">Elk antwoord op een gedragsvraag ("Vertel eens over een keer dat...") moet bestaan uit 4 delen: <strong>S</strong>ituatie, <strong>T</strong>aak, <strong>A</strong>ctie, <strong>R</strong>esultaat.</p>
        </div>

        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-gradient-to-r from-teal-600 to-cyan-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Stap</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Wat moet je vertellen?</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Voorbeeldzin</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-bold text-teal-600">S - Situatie</td><td class="px-4 py-3 text-sm text-xs">De context (kort!).</td><td class="px-4 py-3 text-sm">"Bij mijn vorige werkgever liepen de projecten regelmatig vertraging op."</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-bold text-teal-600">T - Taak</td><td class="px-4 py-3 text-sm text-xs">Wat was jouw verantwoordelijkheid?</td><td class="px-4 py-3 text-sm">"Mijn taak was om het project binnen de deadline te krijgen."</td></tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-bold text-teal-600">A - Actie</td><td class="px-4 py-3 text-sm text-xs">Wat heb <strong>JIJ</strong> concreet gedaan? (Gebruik 'ik').</td><td class="px-4 py-3 text-sm">"Ik heb een nieuw planningssysteem geïmplementeerd en wekelijkse check-ins ingesteld."</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-4 py-3 text-sm font-bold text-teal-600">R - Resultaat</td><td class="px-4 py-3 text-sm text-xs">Het meetbare, positieve eindresultaat.</td><td class="px-4 py-3 text-sm">"Hierdoor daalde de vertraging met 30% en leverden we het project op tijd op."</td></tr>
            </tbody>
          </table>
        </div>

        <div class="bg-rose-50 dark:bg-rose-900/20 border-l-4 border-rose-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-rose-700 dark:text-rose-300 mb-2">🚨 PAS OP! DE "WIJ"-VALKUIL!</h3>
          <p class="text-sm text-slate-700 dark:text-slate-300">Zeg niet: <em>"Wij hebben het project gered."</em> De werkgever neemt <strong>jou</strong> aan, niet je oude team. Zeg: <em>"<strong>Ik</strong> nam het initiatief om..."</em></p>
        </div>
      `
    },
    {
      title: "Deel 3: Veelgestelde Vragen & Professionele Antwoorden 💬",
      body: `
        <p>Hoe vertaal je eerlijkheid naar professionaliteit? Hier is een translatietabel om je te helpen.</p>
        
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-gradient-to-r from-purple-600 to-pink-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">De Vraag van de Werkgever</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Slecht Antwoord ❌</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Professioneel Antwoord (C1) ✅</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">"Wat is je grootste zwakte?"</td>
                <td class="px-4 py-3 text-sm text-rose-600">"Ik ben een perfectionist." (Klinkt nep)</td>
                <td class="px-4 py-3 text-sm text-emerald-600 font-bold">"Ik vind het soms lastig om 'nee' te zeggen. Ik leer nu om prioriteiten te stellen en taken te delegeren."</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">"Waarom wil je weg bij je huidige werk?"</td>
                <td class="px-4 py-3 text-sm text-rose-600">"Mijn baas is een idioot."</td>
                <td class="px-4 py-3 text-sm text-emerald-600 font-bold">"Ik heb veel geleerd, maar ik zoek nu een nieuwe uitdaging waar ik meer verantwoordelijkheid kan nemen."</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-semibold">"Waarom moeten wij jou kiezen?"</td>
                <td class="px-4 py-3 text-sm text-rose-600">"Omdat ik de beste ben."</td>
                <td class="px-4 py-3 text-sm text-emerald-600 font-bold">"Omdat ik de unieke combinatie heb van [Vaardigheid A] en [B], wat direct aansluit bij de uitdagingen in de vacature."</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30">
                <td class="px-4 py-3 text-sm font-semibold">"Heb je nog vragen voor ons?"</td>
                <td class="px-4 py-3 text-sm text-rose-600">"Nee, ik weet alles."</td>
                <td class="px-4 py-3 text-sm text-emerald-600 font-bold">"Ja, hoe ziet een succesvolle eerste 90 dagen eruit voor deze functie?"</td>
              </tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      title: "Deel 4: Presenteren & Non-verbale Communicatie 🎭",
      body: `
        <p>Hoe je overkomt, is vaak belangrijker dan wat je zegt. Non-verbale communicatie bepaalt de eerste 7 seconden van de indruk.</p>
        
        <div class="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-emerald-700 dark:text-emerald-300 mb-2">🏆 PRO REGEL 3: De 3-V van Presenteren</h3>
          <p class="text-slate-700 dark:text-slate-300">Je boodschap komt voor <strong>7%</strong> door je Woorden, voor <strong>38%</strong> door je Stem (toon, volume) en voor <strong>55%</strong> door je Visuele verschijning (houding, oogcontact, kleding).</p>
        </div>

        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-gradient-to-r from-amber-600 to-orange-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Non-verbaal aspect</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Fout ❌ (Onzeker)</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Correct ✅ (Zelfverzekerd)</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-semibold">Oogcontact</td><td class="px-4 py-3 text-sm text-xs">Naar de grond of het plafond kijken.</td><td class="px-4 py-3 text-sm text-xs">Rustig oogcontact houden met de persoon die spreekt.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-semibold">Houding</td><td class="px-4 py-3 text-sm text-xs">Onderuitgezakt, armen over elkaar.</td><td class="px-4 py-3 text-sm text-xs">Rechtop zitten, licht voorover leunen, handen zichtbaar.</td></tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-semibold">Stemgebruik</td><td class="px-4 py-3 text-sm text-xs">Te zacht, te snel, of veel "eh" en "uh".</td><td class="px-4 py-3 text-sm text-xs">Rustig, duidelijk, met korte, bewuste pauzes.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-semibold">Kleding</td><td class="px-4 py-3 text-sm text-xs">Te casual (spijkerbroek, sneakers).</td><td class="px-4 py-3 text-sm text-xs">Netjes, passend bij de cultuur (bij twijfel: één niveau formeler).</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-4 py-3 text-sm font-semibold">Telefoon</td><td class="px-4 py-3 text-sm text-xs">Op tafel laten liggen, trillen.</td><td class="px-4 py-3 text-sm text-xs">Uit of op stil, diep in de tas. Nooit op tafel.</td></tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      title: "Deel 5: De Sollicitatie-e-mail & Valkuilen 📧",
      body: `
        <p>Als je solliciteert per e-mail, is de e-mail zelf je eerste brief. Houd deze <strong>kort en krachtig</strong>.</p>
        <ul class="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300 mb-6">
          <li><strong>Onderwerp:</strong> <em>Sollicitatie [Functienaam] - [Jouw Voor- en Achternaam]</em></li>
          <li><strong>Bijlagen:</strong> Altijd als <strong>PDF</strong> (nooit Word, dat kan verspringen). Noem het bestand professioneel: <em>CV_Jan_Jansen.pdf</em>, niet <em>cv_definitief_v3.pdf</em>.</li>
        </ul>

        <h3 class="text-lg font-bold mt-6 mb-3 text-slate-800 dark:text-slate-200">Samenvatting van de Belangrijkste PAS OP's</h3>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-gradient-to-r from-rose-600 to-pink-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">De Valkuil</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Fout ❌</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Correct ✅</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-semibold">De Cliché-valkuil</td><td class="px-4 py-3 text-sm text-rose-600">"Ik ben een teamspeler die hard werkt."</td><td class="px-4 py-3 text-sm text-emerald-600 font-bold">Bewijs het: "In mijn vorige rol coördineerde ik een team van 5..."</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-semibold">De Negativiteit-valkuil</td><td class="px-4 py-3 text-sm text-rose-600">Slecht spreken over een oude werkgever.</td><td class="px-4 py-3 text-sm text-emerald-600 font-bold">Blijf altijd objectief en focus op de toekomst.</td></tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-semibold">De Vage-valkuil</td><td class="px-4 py-3 text-sm text-rose-600">"Ik heb ervaring met sales."</td><td class="px-4 py-3 text-sm text-emerald-600 font-bold">"Ik heb 3 jaar ervaring in B2B-sales, met een omzetgroei van 15%."</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-4 py-3 text-sm font-semibold">De "Ik"-valkuil</td><td class="px-4 py-3 text-sm text-rose-600">Alleen praten over wat het bedrijf jou kan bieden.</td><td class="px-4 py-3 text-sm text-emerald-600 font-bold">Balans: 60% over wat jij brengt, 40% over wat jij hoopt te leren.</td></tr>
            </tbody>
          </table>
        </div>
      `
    }
  ],
  rulesTable: [
    {
      rule: "De Match-Regel",
      structure: "Gebruik exact dezelfde sleutelwoorden uit de vacaturetekst in je brief.",
      example: "Vacature: 'proactieve teamspeler' ➔ Brief: 'Als proactieve teamspeler heb ik...'",
      usage: "Zorgt dat je brief direct aansluit bij de behoeften van de werkgever en door ATS-systemen komt."
    },
    {
      rule: "De STAR-Formule",
      structure: "Situatie, Taak, Actie, Resultaat. Gebruik altijd 'ik' in de Actie.",
      example: "S: Project liep vertraging op. T: Ik moest het redden. A: Ik implementeerde een nieuw systeem. R: 30% sneller.",
      usage: "Maakt je antwoorden concreet, meetbaar en overtuigend tijdens het gesprek."
    },
    {
      rule: "De 3-V van Presenteren",
      structure: "7% Woorden, 38% Stem, 55% Visueel (houding, oogcontact, kleding).",
      example: "Zorg voor rustig oogcontact en een rechte houding, dit weegt zwaarder dan de exacte woorden.",
      usage: "Non-verbale communicatie bepaalt de eerste indruk binnen 7 seconden."
    },
    {
      rule: "Digitale Eerste Indruk",
      structure: "Onderwerp duidelijk, bijlagen ALTIJD als PDF met een professionele bestandsnaam.",
      example: "CV_Jan_Jansen.pdf (Niet: cv_definitief_v3.docx)",
      usage: "Voorkomt opmaakfouten en toont direct professionaliteit en aandacht voor detail."
    }
  ],
  callouts: [
    { type: "remember", label: "🏆 PRO REGEL 1", text: "De Match-Regel: Gebruik exact dezelfde sleutelwoorden uit de vacaturetekst in je brief." },
    { type: "remember", label: "🏆 PRO REGEL 2", text: "De STAR-Formule: Situatie, Taak, Actie, Resultaat. Gebruik altijd 'ik' in de Actie." },
    { type: "remember", label: "🏆 PRO REGEL 3", text: "De 3-V van Presenteren: 7% Woorden, 38% Stem, 55% Visueel (houding, oogcontact)." },
    { type: "remember", label: "⚠️ PAS OP 1", text: "Schrijf NOOIT 'Geachte heer/mevrouw' als je de naam kunt achterhalen via LinkedIn of de website." },
    { type: "remember", label: "⚠️ PAS OP 2", text: "Zeg niet 'Wij hebben het project gered'. De werkgever neemt jou aan. Zeg: 'Ik nam het initiatief...'." },
    { type: "tip", label: "💡 Pro-tip", text: "Verstuur je CV en brief ALTIJD als PDF, nooit als Word-document, om opmaakfouten te voorkomen." }
  ],
  commonMistakes: [
    { incorrect: "Geachte heer/mevrouw,", correct: "Geachte mevrouw Jansen,", explanation: "Het kost slechts 2 minuten om de naam van de contactpersoon te vinden op LinkedIn of de website. Het toont inzet." },
    { incorrect: "Wij hebben het project succesvol afgerond.", correct: "Ik heb het project succesvol afgerond door...", explanation: "De werkgever neemt jou aan, niet je team. Wees specifiek over jouw persoonlijke bijdrage." },
    { incorrect: "Mijn grootste zwakte is dat ik te hard werk.", correct: "Ik vind het soms lastig om 'nee' te zeggen. Ik leer nu om prioriteiten te stellen.", explanation: "Klinkt nep en vermijdt de vraag. Wees eerlijk over een echte zwakte, maar focus op hoe je eraan werkt." },
    { incorrect: "cv_definitief_v3.docx", correct: "CV_Jan_Jansen.pdf", explanation: "Een Word-document kan verspringen in opmaak. Een PDF ziet er op elk apparaat exact hetzelfde uit en oogt professioneler." },
    { incorrect: "Ik heb ervaring met sales.", correct: "Ik heb 3 jaar ervaring in B2B-sales, met een omzetgroei van 15%.", explanation: "Wees specifiek en kwantificeer je ervaring met cijfers of concrete resultaten." }
  ],
  review: [
    "✅ Sollicitatiebrief = verkoopdocument, geen opsomming van je cv. Gebruik de Match-Regel.",
    "✅ Aanhef: Gebruik altijd de specifieke naam van de contactpersoon.",
    "✅ Gesprek: Gebruik de STAR-methode (Situatie, Taak, Actie, Resultaat) en gebruik 'ik' in plaats van 'wij'.",
    "✅ Zwaktes: Noem een echte zwakte, maar focus op hoe je eraan werkt (oplossingsgericht).",
    "✅ Non-verbale communicatie (55%) is belangrijker dan de woorden (7%). Zorg voor oogcontact en een rechte houding.",
    "✅ Verstuur documenten ALTIJD als PDF met een professionele bestandsnaam."
  ],
  qa: [
    {
      question: "Wat is de professionele aanhef als je de naam van de contactpersoon (mevrouw Jansen) kent?",
      answer: "Geachte mevrouw Jansen, (Nooit: 'Geachte heer/mevrouw' of 'Beste mevrouw Jansen' in een eerste formele brief)."
    },
    {
      question: "In de STAR-methode, wat staat de 'A' voor en waarom is dit het belangrijkste deel van je antwoord?",
      answer: "'A' staat voor Actie. Dit is het belangrijkste deel, omdat de werkgever wil weten wat jij concreet hebt gedaan (gebruik 'ik', niet 'wij')."
    },
    {
      question: "Hoe vertaal je de zwakte 'Ik ben soms te ongeduldig' naar een professioneel, oplossingsgericht antwoord?",
      answer: "'Ik heb soms de neiging om snel resultaat te willen zien. Ik leer nu om bewust even terug te treden en het proces van mijn collega's te respecteren, wat de eindkwaliteit ten goede komt.'"
    },
    {
      question: "Waarom moet je je sollicitatiebrief en cv altijd als PDF versturen en niet als Word-document?",
      answer: "Een PDF ziet er op elk apparaat (telefoon, tablet, computer) exact hetzelfde uit. Een Word-document kan verspringen in opmaak, wat onprofessioneel overkomt."
    }
  ]
};