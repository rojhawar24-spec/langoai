import type { GrammarLesson } from "../../types";

export const tegenwoordigeTijd: GrammarLesson = {
  id: "nl-tegenwoordigetijd-1",
  title: "Tegenwoordige Tijd: stam+t – ik werk, jij werkt, hij werkt",
  level: 1,
  topic: "Tegenwoordige tijd", // [G] Grammatica
  body: "Leer hoe je werkwoorden in de tegenwoordige tijd vervoegt. Met duidelijke regels, talloze voorbeelden en alle uitzonderingen.",
  overview:
    "De tegenwoordige tijd gebruik je voor wat nu gebeurt, altijd zo is, een gewoonte of toekomst met een tijdsbepaling. In deze **supercomplete, glasheldere les** leer je stap voor stap hoe je de ik‑vorm, de jij‑/u‑vorm en de hij‑/zij‑/het‑vorm maakt met **stam + t**. Je ontdekt de cruciale inversieregel bij *je* en *jij*, waarom *hij vindt* wél een -dt heeft en *hij zit* niet, en hoe je scheidbare werkwoorden en wederkerende werkwoorden correct gebruikt. De onregelmatige werkwoorden **zijn, hebben, willen, kunnen, zullen, mogen** worden volledig uit de doeken gedaan. Met heldere tabellen, tientallen voorbeelden, waarschuwingen voor alle valkuilen en 10 ijzersterke oefenvragen schrijf jij elke werkwoordsvorm foutloos.",
  anchorSectionId: "ikvorm",
  exercises: [],
  timeExpressionsLabel: "Overzicht regelmatige tegenwoordige tijd 📊",
  timeExpressions: {
    header: "Persoon | Regel | Voorbeeld (werken) | Voorbeeld (vinden) | Voorbeeld (zitten)",
    rows: [
      ["ik", "stam (ik-vorm)", "ik **werk**", "ik **vind**", "ik **zit**"],
      ["jij / u", "stam + t", "jij **werkt**", "jij **vindt**", "jij **zit** (stam op t)"],
      ["hij / zij / het", "stam + t (let op stam op t/d)", "hij **werkt**", "hij **vindt**", "hij **zit**"],
      ["wij / jullie / zij (mv)", "infinitief (hele werkwoord)", "wij **werken**", "wij **vinden**", "wij **zitten**"],
    ],
  },
  details: [
    {
      title: "Wat is de tegenwoordige tijd en wanneer gebruik je die? 🎯",
      body: `
        <p>De tegenwoordige tijd gebruik je om aan te geven dat iets <strong>nu</strong> gebeurt, iets <strong>altijd</strong> zo is, iets een <strong>gewoonte</strong> is, of iets <strong>in de toekomst</strong> plaatsvindt (met een tijdsbepaling erbij).</p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Wanneer?</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Voorbeeldzin</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Nu</td><td class="px-3 py-2 text-sm">Ik <strong>lees</strong> een boek.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Feit</td><td class="px-3 py-2 text-sm">De zon <strong>komt</strong> op in het oosten.</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Gewoonte</td><td class="px-3 py-2 text-sm">Iedere ochtend <strong>drinkt</strong> zij koffie.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Toekomst</td><td class="px-3 py-2 text-sm">Morgen <strong>vertrekken</strong> wij naar Berlijn.</td></tr>
            </tbody>
          </table>
        </div>
        <p>De tegenwoordige tijd vorm je met behulp van de <strong>stam</strong> van het werkwoord. Dat is de basis waar je de uitgangen aan vastplakt.</p>
      `,
    },
    {
      title: "De ik-vorm – precies de stam 👤",
      body: `
        <p>De <strong>ik-vorm</strong> is altijd gelijk aan de stam. De stam vind je door van de infinitief de uitgang <strong>-en</strong> af te halen en de spellingregels toe te passen (v/f‑wisseling, z/s‑wisseling, enz.).</p>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">werken → ik <strong>werk</strong></li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">leven → ik <strong>leef</strong> (v → f)</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">reizen → ik <strong>reis</strong> (z → s)</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">zitten → ik <strong>zit</strong></li>
        </ul>
        <p>Onregelmatige ik‑vormen: <strong>ben</strong> (zijn), <strong>heb</strong> (hebben), <strong>kan</strong> (kunnen), <strong>zal</strong> (zullen), <strong>mag</strong> (mogen), <strong>wil</strong> (willen).</p>
      `,
    },
    {
      title: "De jij‑vorm en de u‑vorm – stam + t 👆",
      body: `
        <p>Voor <strong>jij</strong> en <strong>u</strong> plak je een <strong>-t</strong> achter de stam. Let op: bij werkwoorden waarvan de stam al op een t eindigt, komt er geen extra t.</p>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">jij <strong>werkt</strong>, u <strong>werkt</strong></li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">jij <strong>leeft</strong>, u <strong>leeft</strong></li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">jij <strong>zit</strong> (stam zit, dus geen extra t)</li>
        </ul>
        <h3 class="text-lg font-bold mt-6 mb-2">Inversie bij jij en je – de t‑regel 🔄</h3>
        <p>Als het onderwerp achter de persoonsvorm komt (bijvoorbeeld in een vraagzin of na een ander zinsdeel), verandert er iets:</p>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">Bij het onbeklemtoonde <strong>je</strong> verdwijnt de -t: <em>Werk <strong>je</strong>?</em></li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">Bij het beklemtoonde <strong>jij</strong> blijft de -t staan: <em>Morgen werk <strong>jij</strong>.</em></li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">Bij <strong>u</strong> verandert er nooit iets: <em>Werkt <strong>u</strong>?</em></li>
        </ul>
        <p><span class="pas-op-highlight">⚠️ PAS OP</span> In de praktijk gebruik je bij vragen vrijwel altijd <strong>je</strong> zonder t. Dus: <strong>Loop je?</strong> (nooit <em>Loopt je?</em>). Alleen als je nadruk wilt, zeg je <strong>Loop jij?</strong> met t.</p>
      `,
    },
    {
      title: "De hij‑, zij‑ en het‑vorm – stam + t, let op t en d ⚠️",
      body: `
        <p>De regel is dezelfde: stam + t. Maar de spelling dwingt ons om op te passen bij stammen die al op een t of d eindigen.</p>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">Eindigt de stam op een <strong>t</strong>? → geen extra t: <strong>hij zit</strong>, <strong>hij eet</strong>.</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">Eindigt de stam op een <strong>d</strong>? → je schrijft -dt: <strong>hij vindt</strong>, <strong>hij wordt</strong>.</li>
        </ul>
        <p>🧠 <strong>Ezelsbrug:</strong> Twijfel je tussen <em>vind</em> of <em>vindt</em>? Vervang het werkwoord door <strong>lopen</strong>. <em>Hij loopt</em> – je hoort een t, dus <em>hij vindt</em> met dt.</p>
        <p><span class="pas-op-highlight">⚠️ PAS OP</span> In vraagzinnen met <strong>je</strong> verdwijnt de t ook bij deze werkwoorden: <em>Vind je?</em> (zonder t). De stam is <em>vind</em>, dus je schrijft <em>vind je</em>.</p>
      `,
    },
    {
      title: "De meervoudsvormen – wij, jullie, zij 👥",
      body: `
        <p>Voor <strong>wij</strong>, <strong>jullie</strong> en <strong>zij</strong> (meervoud) gebruik je simpelweg de <strong>infinitief</strong> (het hele werkwoord).</p>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">wij <strong>werken</strong>, jullie <strong>werken</strong>, zij <strong>werken</strong></li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">wij <strong>vinden</strong>, jullie <strong>vinden</strong>, zij <strong>vinden</strong></li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">wij <strong>zitten</strong>, jullie <strong>zitten</strong>, zij <strong>zitten</strong></li>
        </ul>
        <p>De infinitief heeft vaak al de juiste spelling (verdubbeling, klinkerverlies). Je herhaalt gewoon het hele werkwoord.</p>
      `,
    },
    {
      title: "Scheidbare werkwoorden in de tegenwoordige tijd ✂️",
      body: `
        <p>Bij een scheidbaar werkwoord (zoals <strong>aankomen</strong>, <strong>opbellen</strong>) splits je het werkwoord in twee delen. Het voorvoegsel komt achteraan in de zin.</p>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>aankomen</strong> → ik <strong>kom aan</strong>, jij <strong>komt aan</strong>, hij <strong>komt aan</strong>, wij <strong>komen aan</strong></li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>opbellen</strong> → ik <strong>bel op</strong>, jij <strong>belt op</strong>, hij <strong>belt op</strong>, wij <strong>bellen op</strong></li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>meenemen</strong> → ik <strong>neem mee</strong>, jij <strong>neemt mee</strong>, hij <strong>neemt mee</strong>, wij <strong>nemen mee</strong></li>
        </ul>
        <p>De ik-vorm volgt de stam van het grondwoord: <em>aankomen</em> → stam <em>kom</em>, dus ik <strong>kom aan</strong>. De jij/hij-vormen krijgen nog steeds stam + t: jij <strong>komt aan</strong>.</p>
        <p><span class="pas-op-highlight">⚠️ PAS OP</span> In bijzinnen (met 'dat', 'omdat') blijft het voorvoegsel aan het werkwoord vast: <em>Ik weet dat hij <strong>aankomt</strong>.</em></p>
      `,
    },
    {
      title: "Wederkerende werkwoorden in de tegenwoordige tijd 🔄",
      body: `
        <p>Wederkerende werkwoorden hebben een wederkerend voornaamwoord (me, je, zich). De werkwoordsvormen volgen dezelfde regels, maar je voegt het voornaamwoord toe.</p>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>zich vergissen</strong> → ik <strong>vergis me</strong>, jij <strong>vergist je</strong>, hij <strong>vergist zich</strong>, wij <strong>vergissen ons</strong></li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>zich herinneren</strong> → ik <strong>herinner me</strong>, jij <strong>herinnert je</strong>, hij <strong>herinnert zich</strong>, wij <strong>herinneren ons</strong></li>
        </ul>
        <p>De werkwoordsvervoeging is regelmatig, alleen het wederkerend voornaamwoord komt erbij.</p>
      `,
    },
    {
      title: "Onregelmatige werkwoorden in de tegenwoordige tijd 🌟",
      body: `
        <p>Een aantal werkwoorden wijkt af van de stam+t‑regel. Leer deze apart.</p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Werkwoord</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">ik</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">jij/u</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">hij/zij/het</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">wij/jullie/zij</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">zijn</td><td class="px-3 py-2 text-sm"><strong>ben</strong></td><td class="px-3 py-2 text-sm"><strong>bent</strong></td><td class="px-3 py-2 text-sm"><strong>is</strong></td><td class="px-3 py-2 text-sm"><strong>zijn</strong></td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">hebben</td><td class="px-3 py-2 text-sm"><strong>heb</strong></td><td class="px-3 py-2 text-sm"><strong>hebt</strong> (u hebt/heeft)</td><td class="px-3 py-2 text-sm"><strong>heeft</strong></td><td class="px-3 py-2 text-sm"><strong>hebben</strong></td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">willen</td><td class="px-3 py-2 text-sm"><strong>wil</strong></td><td class="px-3 py-2 text-sm"><strong>wilt/wil</strong></td><td class="px-3 py-2 text-sm"><strong>wil</strong> (géén t!)</td><td class="px-3 py-2 text-sm"><strong>willen</strong></td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">kunnen</td><td class="px-3 py-2 text-sm"><strong>kan</strong></td><td class="px-3 py-2 text-sm"><strong>kunt/kan</strong></td><td class="px-3 py-2 text-sm"><strong>kan</strong> (géén t!)</td><td class="px-3 py-2 text-sm"><strong>kunnen</strong></td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">zullen</td><td class="px-3 py-2 text-sm"><strong>zal</strong></td><td class="px-3 py-2 text-sm"><strong>zult/zal</strong></td><td class="px-3 py-2 text-sm"><strong>zal</strong> (géén t!)</td><td class="px-3 py-2 text-sm"><strong>zullen</strong></td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">mogen</td><td class="px-3 py-2 text-sm"><strong>mag</strong></td><td class="px-3 py-2 text-sm"><strong>mag</strong></td><td class="px-3 py-2 text-sm"><strong>mag</strong></td><td class="px-3 py-2 text-sm"><strong>mogen</strong></td></tr>
            </tbody>
          </table>
        </div>
        <p><span class="pas-op-highlight">⚠️ PAS OP</span> <strong>Hij wil</strong> nooit met t. <strong>Hij heeft</strong> is onregelmatig. <strong>U hebt</strong> en <strong>u heeft</strong> zijn beide correct.</p>
      `,
    },
  ],
  rulesTable: [
    {
      rule: "Ik-vorm = stam",
      structure: "Gebruik voor 'ik' altijd de **stam** van het werkwoord.",
      example: "ik **werk**, ik **leef**, ik **reis**, ik **zit**.",
      usage: "Denk aan v/f‑ en z/s‑regels bij het bepalen van de stam.",
    },
    {
      rule: "Jij‑/u‑vorm = stam + t (met inversieregel)",
      structure: "Zet een **-t** achter de stam. Bij **je** na inversie verdwijnt de t; bij **jij** blijft de t staan. Bij **u** verandert niets.",
      example: "jij **werkt** – Werk **je**? – Morgen werk **jij**. – Werkt **u**?",
      usage: "In vraagzinnen gebruik je meestal 'je' zonder t.",
    },
    {
      rule: "Hij‑vorm = stam + t (let op t/d)",
      structure: "Ook voor hij/zij/het stam + t. Eindigt de stam op een **t**, dan geen extra t. Eindigt de stam op een **d**, dan schrijf je **dt**.",
      example: "hij **werkt**, hij **zit**, hij **vindt**.",
      usage: "Ezelsbrug: vervang door 'lopen' – 'hij loopt' dus 'hij vindt'.",
    },
    {
      rule: "Meervoud = infinitief",
      structure: "Voor wij, jullie, zij (meervoud) gebruik je de **infinitief** (het hele werkwoord).",
      example: "wij **werken**, jullie **zitten**, zij **vinden**.",
      usage: "De infinitief heeft al de juiste spelling.",
    },
    {
      rule: "Scheidbare werkwoorden: voorvoegsel achteraan",
      structure: "Plaats het voorvoegsel aan het einde van de zin. De persoonsvorm volgt de gewone regels.",
      example: "aankomen → ik **kom aan**, jij **komt aan**, hij **komt aan**.",
      usage: "Let op: in bijzinnen blijft het voorvoegsel vast: *...omdat hij aankomt*.",
    },
    {
      rule: "Onregelmatige werkwoorden apart leren",
      structure: "Zijn, hebben, willen, kunnen, zullen, mogen hebben afwijkende vormen. Leer deze uit je hoofd.",
      example: "hij **is**, hij **heeft**, hij **wil**, hij **kan**, hij **zal**, hij **mag**.",
      usage: "Let op: 'hij wil' zonder t, 'hij heeft' niet 'hebt'.",
    },
  ],
  callouts: [
    { type: "remember", label: "Onthoud 1", text: "Ik = stam (ik werk). Jij/u = stam + t (jij werkt). Hij = stam + t (let op t/d: hij zit, hij vindt)." },
    { type: "remember", label: "Onthoud 2", text: "Bij **je** na inversie: geen t! **Werk je?** (niet *Werkt je*)." },
    { type: "remember", label: "Onthoud 3", text: "Stam op t → geen extra t: hij zit, hij eet." },
    { type: "remember", label: "Onthoud 4", text: "Stam op d → dt: hij vindt, hij wordt." },
    { type: "remember", label: "Onthoud 5", text: "Meervoud = infinitief: wij werken, jullie zitten, zij vinden." },
    { type: "remember", label: "Onthoud 6", text: "Onregelmatig: hij is, hij heeft, hij wil (zonder t), hij kan, hij zal, hij mag." },
    { type: "remember", label: "Onthoud 7", text: "Scheidbare werkwoorden: ik **kom aan**, maar *omdat ik **aankom***." },
  ],
  commonMistakes: [
    { incorrect: "Hij vind", correct: "Hij vindt", explanation: "Stam op d → dt." },
    { incorrect: "Wordt je?", correct: "Word je?", explanation: "Inversie met 'je': geen t." },
    { incorrect: "Hij wilt", correct: "Hij wil", explanation: "'Willen' heeft geen t in de hij‑vorm." },
    { incorrect: "Hij hebt", correct: "Hij heeft", explanation: "'Hebben' is onregelmatig." },
    { incorrect: "Loop jij? (zonder t)", correct: "Loop jij? (met t is correct, maar ongebruikelijk; meestal 'Loop je?' zonder t)", explanation: "Bij beklemtoond 'jij' blijft de t, maar in vragen is 'je' normaal." },
    { incorrect: "Hij zit (dubbel t)", correct: "Hij zit (één t)", explanation: "Stam eindigt op t, dus geen extra t." },
    { incorrect: "Ik aankom (zonder splitsen)", correct: "Ik kom aan", explanation: "Scheidbaar werkwoord: voorvoegsel gaat achteraan." },
  ],
  review: [
    "Ik = stam.",
    "Jij/u = stam + t. Inversie: je → geen t; jij → wel t.",
    "Hij/zij/het = stam + t; stam op t → geen extra t; stam op d → dt.",
    "Meervoud (wij/jullie/zij) = infinitief.",
    "Scheidbare werkwoorden splitsen: ik kom aan, jij belt op.",
    "Onregelmatig: zijn (ben, bent, is, zijn); hebben (heb, hebt, heeft, hebben); willen (wil, wilt/wil, wil, willen); kunnen (kan, kunt/kan, kan, kunnen); zullen (zal, zult/zal, zal, zullen); mogen (mag, mag, mag, mogen).",
  ],
  qa: [
    {
      question: "Vul de juiste vorm in: “Hij ___ (vinden) het leuk.” Leg uit of je een t of dt schrijft en waarom.",
      answer: "De stam van *vinden* is **vind**, die op een d eindigt. De hij‑vorm is stam + t, dus **vindt**. Ik schrijf **hij vindt**.",
    },
    {
      question: "Waarom is “Wordt je?” met dt fout? Wat moet het zijn en waarom?",
      answer: "In een vraag met het onbeklemtoonde **je** verdwijnt de t. De stam is *word*, dus de juiste vraag is **Word je?** zonder t.",
    },
    {
      question: "Noem twee werkwoorden waarbij de hij‑vorm géén t krijgt, en geef een voorbeeldzin voor elk.",
      answer: "*Willen*: **Hij wil** een ijsje. *Kunnen*: **Hij kan** goed zwemmen. Bij deze onregelmatige werkwoorden schrijf je in de hij‑vorm geen extra t.",
    },
    {
      question: "Wat is het verschil tussen 'Morgen werk jij' en 'Morgen werk je'? Leg uit wanneer je welke vorm gebruikt.",
      answer: "'Morgen werk jij' gebruikt het nadrukkelijke **jij** en behoudt de t. 'Morgen werk je' gebruikt het onbeklemtoonde **je** en laat de t vallen. De eerste benadrukt dat juist jij werkt; de tweede is neutraal.",
    },
    {
      question: "Geef de juiste vorm van 'hebben' in deze zinnen: “Ik ___ een hond.”, “Jij ___ een kat.”, “Zij ___ een konijn.”",
      answer: "**Ik heb** een hond. **Jij hebt** een kat. **Zij heeft** een konijn. Vooral de hij‑vorm *heeft* is een valkuil: het is niet *hebt*.",
    },
    {
      question: "Hoe vervoeg je 'zitten' in de hij‑vorm? Waarom schrijf je die vorm niet met dubbel t?",
      answer: "De hij‑vorm is **hij zit**. De stam is *zit* en eindigt al op een **t**. Volgens de regel voeg je dan geen extra t toe. Daarom blijft het bij één t.",
    },
    {
      question: "Vul de juiste vorm in: “U ___ (kunnen) hier parkeren.” Zijn beide opties goed? Leg uit.",
      answer: "De correcte vormen zijn **U kunt** en **U kan**. Beide zijn toegestaan. *Kunt* is wat formeler en gebruikelijker in schrijftaal, *kan* wordt in spreektaal vaak gebruikt. Bij *u* is de keuze vrij.",
    },
    {
      question: "Hoe vervoeg je het scheidbare werkwoord 'aankomen' in de ik‑vorm en de hij‑vorm?",
      answer: "Ik **kom aan**, hij **komt aan**. De stam is *kom*, en het voorvoegsel 'aan' gaat naar het einde van de zin.",
    },
    {
      question: "Waarom is 'Ik opbel mijn moeder' fout? Verbeter de zin.",
      answer: "Het scheidbare werkwoord *opbellen* moet gesplitst worden: **Ik bel mijn moeder op**.",
    },
    {
      question: "Vervoeg 'zich vergissen' in de jij‑vorm en hij‑vorm.",
      answer: "Jij **vergist je**, hij **vergist zich**. De werkwoordsvorm is 'vergist', en het wederkerend voornaamwoord past zich aan.",
    },
  ],
};