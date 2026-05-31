import type { GrammarLesson } from "../../types";

export const vraagzinnenjanee: GrammarLesson = {
  id: "nl-vraagzinnen-janee-1",
  title: "Vraagzinnen – Ja/Nee-vragen: Heb jij dat gedaan?",
  level: 1,
  topic: "Vraagzinnen (ja/nee)", // [G] Grammatica
  body: "Leer hoe je ja/nee-vragen maakt in het Nederlands. Met de persoonsvorm vooraan, inversie, werkwoordelijke eindgroep en scheidbare werkwoorden.",
  overview:
    "Een ja/nee-vraag beantwoord je met **ja** of **nee**. In deze **supercomplete, glasheldere les** ontdek je stap voor stap hoe je zulke vragen vormt. Je leert de **VSO-volgorde** (persoonsvorm – onderwerp – rest), de cruciale **inversieregel** bij *je* en *jij*, en hoe je hulpwerkwoorden, voltooid deelwoorden en scheidbare werkwoorden correct plaatst. Ook krijg je uitleg over de antwoorden **ja, nee, jawel** en hoe je de intonatie gebruikt. Met heldere tabellen, tientallen voorbeelden, waarschuwingen voor alle valkuilen en 8 ijzersterke oefenvragen stel jij voortaan elke ja/nee-vraag foutloos.",
  anchorSectionId: "wat",
  exercises: [],
  timeExpressionsLabel: "De basisregel in één oogopslag ❓",
  timeExpressions: {
    header: "Mededelende zin (SVO) | Vraagzin (VSO)",
    rows: [
      ["**Jan leest het boek.**", "**Leest Jan het boek?**"],
      ["**Jij hebt dat gedaan.**", "**Heb jij dat gedaan?** (gebruikelijk: **Heb je dat gedaan?**)"],
      ["**Het regent.**", "**Regent het?**"],
      ["**Wij gaan morgen weg.**", "**Gaan wij morgen weg?**"],
    ],
  },
  details: [
    {
      title: "Wat is een ja/nee-vraag? 🎯",
      body: `
        <p>Een <strong>ja/nee-vraag</strong> is een vraag waarop het antwoord <strong>"ja"</strong> of <strong>"nee"</strong> (of "jawel") kan zijn. Je vraagt naar een feit, een handeling of een toestand, en de ander kan bevestigend of ontkennend antwoorden.</p>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>Heb jij dat gedaan?</strong></li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>Regent het?</strong></li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>Kom je morgen?</strong></li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>Is de winkel open?</strong></li>
        </ul>
        <p>In een ja/nee-vraag staat de <strong>persoonsvorm</strong> (het werkwoord dat van tijd verandert) helemaal <strong>vooraan</strong>. Daarna volgt het <strong>onderwerp</strong> en dan de rest. Dit is de <strong>VSO-volgorde</strong> (persoonsvorm – onderwerp – rest), ook wel <strong>inversie</strong> genoemd.</p>
      `,
    },
    {
      title: "De basisregel – persoonsvorm vooraan, dan het onderwerp 🔄",
      body: `
        <p>Vergelijk een mededelende hoofdzin (SVO) met een ja/nee-vraag (VSO):</p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Mededelende hoofdzin (SVO)</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Vraagzin (VSO)</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Jan leest het boek.</td><td class="px-3 py-2 text-sm"><strong>Leest Jan het boek?</strong></td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Jij hebt dat gedaan.</td><td class="px-3 py-2 text-sm"><strong>Heb jij dat gedaan?</strong></td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Het regent.</td><td class="px-3 py-2 text-sm"><strong>Regent het?</strong></td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Wij gaan morgen weg.</td><td class="px-3 py-2 text-sm"><strong>Gaan wij morgen weg?</strong></td></tr>
            </tbody>
          </table>
        </div>
        <p>De persoonsvorm verhuist van de tweede plaats naar de eerste plaats, en het onderwerp schuift door naar de tweede plaats. De rest van de zin blijft in dezelfde volgorde staan.</p>
      `,
    },
    {
      title: "Verschillende soorten werkwoorden in de vraagzin 🧩",
      body: `
        <p>Hieronder zie je voorbeelden met regelmatige, sterke en onregelmatige werkwoorden. Let op de vorm van de persoonsvorm bij <strong>je</strong> en bij <strong>u/hij/zij</strong>.</p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Infinitief</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Vraag met je</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Vraag met u</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Vraag met hij/zij</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">werken</td><td class="px-3 py-2 text-sm"><strong>Werk je</strong> morgen?</td><td class="px-3 py-2 text-sm"><strong>Werkt u</strong> morgen?</td><td class="px-3 py-2 text-sm"><strong>Werkt hij</strong> morgen?</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">lezen</td><td class="px-3 py-2 text-sm"><strong>Lees je</strong> dat boek?</td><td class="px-3 py-2 text-sm"><strong>Leest u</strong> dat boek?</td><td class="px-3 py-2 text-sm"><strong>Leest zij</strong> dat boek?</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">zijn</td><td class="px-3 py-2 text-sm"><strong>Ben je</strong> moe?</td><td class="px-3 py-2 text-sm"><strong>Bent u</strong> moe?</td><td class="px-3 py-2 text-sm"><strong>Is hij</strong> moe?</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">hebben</td><td class="px-3 py-2 text-sm"><strong>Heb je</strong> een pen?</td><td class="px-3 py-2 text-sm"><strong>Hebt u / Heeft u</strong> een pen?</td><td class="px-3 py-2 text-sm"><strong>Heeft zij</strong> een pen?</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">kunnen</td><td class="px-3 py-2 text-sm"><strong>Kun je / Kan je</strong> zwemmen?</td><td class="px-3 py-2 text-sm"><strong>Kunt u / Kan u</strong> zwemmen?</td><td class="px-3 py-2 text-sm"><strong>Kan hij</strong> zwemmen?</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">willen</td><td class="px-3 py-2 text-sm"><strong>Wil je</strong> koffie?</td><td class="px-3 py-2 text-sm"><strong>Wilt u</strong> koffie?</td><td class="px-3 py-2 text-sm"><strong>Wil hij</strong> koffie?</td></tr>
            </tbody>
          </table>
        </div>
        <p><span class="pas-op-highlight">⚠️ PAS OP</span> Bij het onbeklemtoonde <strong>je</strong> verdwijnt de -t van de persoonsvorm. Dus nooit *Werkt je?* of *Hebt je?*. Alleen bij <strong>u</strong> en <strong>hij/zij</strong> blijft de -t (of de onregelmatige vorm) staan.</p>
      `,
    },
    {
      title: "Hulpwerkwoorden en de werkwoordelijke eindgroep 🏗️",
      body: `
        <p>Als de zin een hulpwerkwoord bevat, staat dat hulpwerkwoord (de persoonsvorm) vooraan. De infinitief of het voltooid deelwoord komt <strong>achteraan</strong>, net als in de mededelende hoofdzin.</p>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>Heb je het boek gelezen?</strong> (heb = persoonsvorm, gelezen = voltooid deelwoord)</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>Wil je vanavond naar de film gaan?</strong> (wil = persoonsvorm, gaan = infinitief)</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>Ga je je huiswerk maken?</strong> (ga = persoonsvorm, maken = infinitief)</li>
        </ul>
        <p>De werkwoordelijke eindgroepregel blijft dus onverminderd van kracht. Het hoofdwerkwoord mag niet vóór het lijdend voorwerp staan.</p>
      `,
    },
    {
      title: "Scheidbare werkwoorden in vraagzinnen ✂️",
      body: `
        <p>Bij scheidbare werkwoorden staat de persoonsvorm (de stam) vooraan, en het scheidbare voorvoegsel achteraan, net als in de mededelende hoofdzin.</p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Heel werkwoord</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Vraagzin met je</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">opstaan</td><td class="px-3 py-2 text-sm"><strong>Sta je</strong> morgen vroeg <strong>op</strong>?</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">opbellen</td><td class="px-3 py-2 text-sm"><strong>Bel je</strong> mij morgen <strong>op</strong>?</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">meenemen</td><td class="px-3 py-2 text-sm"><strong>Neem je</strong> je laptop <strong>mee</strong>?</td></tr>
            </tbody>
          </table>
        </div>
      `,
    },
    {
      title: "De antwoorden – ja, nee, jawel ✅❌",
      body: `
        <p>Op een ja/nee-vraag kun je kort antwoorden met <strong>ja</strong>, <strong>nee</strong> of <strong>jawel</strong>.</p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Vraag</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Antwoord</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Betekenis</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Heb je een hond?</td><td class="px-3 py-2 text-sm">Ja. (of: Ja, ik heb een hond.)</td><td class="px-3 py-2 text-sm">bevestigend</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Heb je een hond?</td><td class="px-3 py-2 text-sm">Nee. (of: Nee, ik heb geen hond.)</td><td class="px-3 py-2 text-sm">ontkennend</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Heb je <strong>geen</strong> hond?</td><td class="px-3 py-2 text-sm">Jawel. (of: Jawel, ik heb wel een hond.)</td><td class="px-3 py-2 text-sm">ontkenning van de ontkenning</td></tr>
            </tbody>
          </table>
        </div>
        <p><span class="pas-op-highlight">⚠️ PAS OP</span> Gebruik <strong>jawel</strong> alleen als de vraag een ontkenning bevat en je die ontkenning wilt tegenspreken. Dus niet zomaar in plaats van "ja".</p>
      `,
    },
    {
      title: "Intonatie – hoe klinkt een ja/nee-vraag? 🎤",
      body: `
        <p>In gesproken Nederlands gaat de toon aan het einde van een ja/nee-vraag <strong>omhoog</strong>. Dit is een belangrijk signaal voor de luisteraar. Bij een mededelende zin daalt de toon meestal aan het eind. Oefen het verschil:</p>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">Mededeling: <em>Je komt morgen.</em> (toon daalt)</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">Vraag: <em>Kom je morgen?</em> (toon stijgt)</li>
        </ul>
        <p>Door alleen de intonatie te veranderen, kun je van een mededeling een vraag maken, maar de standaard schrijftaal gebruikt altijd inversie.</p>
      `,
    },
  ],
  rulesTable: [
    {
      rule: "Persoonsvorm vooraan (VSO-volgorde)",
      structure: "In een ja/nee-vraag staat de **persoonsvorm altijd op de eerste plaats**, gevolgd door het onderwerp.",
      example: "**Leest Jan** het boek? – **Heb jij** dat gedaan?",
      usage: "Dit heet inversie. De volgorde verandert van SVO naar VSO.",
    },
    {
      rule: "Bij 'je' vervalt de -t; bij 'u' en 'hij/zij' niet",
      structure: "Gebruik bij het onbeklemtoonde **je** de stam zonder -t. Bij **u** en **hij/zij** gebruik je de volledige persoonsvorm (stam+t of onregelmatig).",
      example: "**Werk je?** – **Werkt u?** – **Heeft hij?** – **Is het?**",
      usage: "Nooit *Werkt je?* of *Hebt je?*.",
    },
    {
      rule: "Werkwoordelijke eindgroep: hulpwerkwoord vooraan, hoofdwerkwoord achteraan",
      structure: "Bij een hulpwerkwoord (hebben, zijn, willen, kunnen) staat dat vooraan; de infinitief of het voltooid deelwoord achteraan.",
      example: "**Heb je** het boek **gelezen**? – **Wil je** koffie **drinken**?",
      usage: "Hetzelfde geldt voor scheidbare werkwoorden: voorvoegsel achteraan.",
    },
    {
      rule: "Antwoorden: ja, nee, jawel",
      structure: "**Ja** bevestigt, **nee** ontkent, **jawel** ontkent een negatieve vraag.",
      example: "Heb je geen zin? – **Jawel**, ik heb wel zin.",
      usage: "Gebruik 'jawel' alleen bij ontkenning van een ontkenning.",
    },
  ],
  callouts: [
    { type: "remember", label: "Onthoud 1", text: "Ja/nee-vraag: **persoonsvorm vooraan**, dan onderwerp (VSO)." },
    { type: "remember", label: "Onthoud 2", text: "Bij **je** altijd zonder -t: *Werk je?*, *Heb je?*, *Kun je?*." },
    { type: "remember", label: "Onthoud 3", text: "Bij **u/hij/zij** met -t of onregelmatig: *Werkt u?*, *Heeft hij?*." },
    { type: "remember", label: "Onthoud 4", text: "Hulpwerkwoord vooraan, hoofdwerkwoord (infinitief/voltooid deelwoord/scheidbaar deel) achteraan." },
    { type: "remember", label: "Onthoud 5", text: "Antwoorden: **ja** (bevestigen), **nee** (ontkennen), **jawel** (tegenspreken van negatieve vraag)." },
  ],
  commonMistakes: [
    { incorrect: "Je hebt dat gedaan? (alleen intonatie, geen inversie)", correct: "Heb jij/je dat gedaan?", explanation: "In schrijftaal is inversie verplicht voor een standaard ja/nee-vraag." },
    { incorrect: "Werkt je morgen?", correct: "Werk je morgen?", explanation: "Bij 'je' valt de -t van de persoonsvorm weg." },
    { incorrect: "Hebt jij dat gedaan?", correct: "Heb jij dat gedaan? (of gebruikelijker: Heb je dat gedaan?)", explanation: "De onregelmatige vorm 'heb' wordt gebruikt in vraagzinnen met jij/je." },
    { incorrect: "Nee, ik heb wel een hond. (op negatieve vraag)", correct: "Jawel, ik heb wel een hond.", explanation: "Gebruik 'jawel' om een negatieve vraag tegen te spreken." },
  ],
  review: [
    "Ja/nee-vraag: persoonsvorm vooraan, dan onderwerp (VSO).",
    "Bij 'je' valt de -t weg (Werk je?), bij 'u' en 'hij/zij' niet (Werkt u?, Werkt hij?).",
    "Hulpwerkwoord vooraan, hoofdwerkwoord (infinitief/voltooid deelwoord) achteraan.",
    "Scheidbare werkwoorden: voorvoegsel achteraan (Sta je vroeg op?).",
    "Antwoorden: ja, nee, jawel (bij negatieve vraag).",
    "Intonatie: aan het eind van een ja/nee-vraag stijgt de toon.",
  ],
  qa: [
    {
      question: "Waarom staat de persoonsvorm in een ja/nee-vraag vooraan? Leg uit wat er verandert ten opzichte van een mededelende hoofdzin.",
      answer: "In een ja/nee-vraag moet de persoonsvorm op de eerste plaats om de vraag aan te kondigen. De volgorde verandert van SVO (onderwerp vooraan) naar VSO (persoonsvorm vooraan). Bijvoorbeeld: *Jij werkt morgen.* → *Werk jij morgen?* (of met 'je': *Werk je morgen?*).",
    },
    {
      question: "Maak van de mededelende zin 'Jij hebt een hond' een correcte ja/nee-vraag met 'je'.",
      answer: "**Heb je een hond?** Het werkwoord *hebben* is onregelmatig; de ik-vorm is *heb*. Bij 'je' in inversie valt de -t van de jij-vorm weg, dus 'heb je'.",
    },
    {
      question: "Leg het verschil uit tussen de antwoorden 'nee' en 'jawel' op de vraag: 'Kom je niet morgen?'",
      answer: "Met **nee** bevestig je de ontkenning: *Nee, ik kom niet morgen.* Met **jawel** spreek je de ontkenning tegen: *Jawel, ik kom wel morgen.* 'Jawel' ontkracht dus de negatieve vraag.",
    },
    {
      question: "Zet de woorden in de juiste volgorde: 'jij / het boek / aan Marie / hebt / gegeven / ?'",
      answer: "**Heb jij het boek aan Marie gegeven?** (of gebruikelijker: **Heb je het boek aan Marie gegeven?**) Persoonsvorm vooraan, dan onderwerp, dan lijdend voorwerp, dan voorzetselbepaling, dan voltooid deelwoord achteraan.",
    },
    {
      question: "Waarom is 'Werkt je morgen?' fout en hoe moet het correct?",
      answer: "Omdat 'je' een onbeklemtoond onderwerp is en bij inversie de -t van de persoonsvorm wegvalt. Correct is: **Werk je morgen?**",
    },
    {
      question: "Maak een ja/nee-vraag met het scheidbare werkwoord 'opbellen' en het onderwerp 'je'.",
      answer: "**Bel je mij morgen op?** De persoonsvorm *bel* staat vooraan, *je* is het onderwerp, de rest volgt, en het scheidbare voorvoegsel *op* komt achteraan.",
    },
    {
      question: "Hoe vorm je een beleefde ja/nee-vraag aan een onbekende oudere met het werkwoord 'willen' en het lijdend voorwerp 'een kopje koffie'?",
      answer: "**Wilt u een kopje koffie?** Gebruik de u-vorm (stam+t) vooraan, dan het onderwerp *u* en de rest. Dit is beleefd.",
    },
    {
      question: "Wat gebeurt er met de intonatie aan het eind van een ja/nee-vraag in het Nederlands?",
      answer: "De toon gaat aan het einde van de vraag omhoog. Dat is het hoorbare signaal voor een vraag, naast de inversie in de woordvolgorde.",
    },
  ],
};