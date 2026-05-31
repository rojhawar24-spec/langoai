import type { GrammarLesson } from "../../types";

export const kleineletters: GrammarLesson = {
  id: "nl-kleineletters-1",
  title: "Kleine Letters: Samenstellingen, Afleidingen, Dagen en Maanden",
  level: 2,
  topic: "Kleine letters", // [Sch] Schrijven – spelling
  body: "Leer wanneer je een kleine letter schrijft bij samenstellingen, afleidingen, dagen, maanden en meer. Met duidelijke regels, veel voorbeelden en valkuilen.",
  overview:
    "Naast de regels voor hoofdletters is het minstens zo belangrijk om te weten wanneer je juist een **kleine letter** gebruikt. In deze **supercomplete, heldere les** ontdek je alles over kleine letters bij **dagen, maanden en seizoenen**, bij **samenstellingen van eigennamen** (zoals *heineken*, *parmaham*), bij **afleidingen** op -isme, -ist, -iaans, en bij **feestdagen en windstreken**. Je krijgt een overzichtelijke tabel met alle regels, PAS OP‑waarschuwingen en 7 ijzersterke oefenvragen. Zo schrijf jij voortaan foutloos kleine letters.",
  anchorSectionId: "belang",
  exercises: [],
  timeExpressionsLabel: "Overzicht kleine letters 📊",
  timeExpressions: {
    header: "Categorie | Regel | Voorbeeld",
    rows: [
      ["**Dagen**", "Altijd kleine letter", "maandag, dinsdag"],
      ["**Maanden**", "Altijd kleine letter", "januari, februari"],
      ["**Seizoenen**", "Altijd kleine letter", "lente, zomer"],
      ["**Samenstellingen** (eigennaam → soortnaam)", "Kleine letter als het een algemeen product of begrip is", "heineken, parmaham"],
      ["**Afleidingen op -isme, -ist, -isch, -iaans**", "Kleine letter", "marxisme, calvinistisch"],
      ["**Feestdagen**", "Hoofdletter", "Kerstmis, Pasen"],
      ["**Samenstellingen met feestdagen**", "Kleine letter", "kerstvakantie, paasontbijt"],
      ["**Windstreken (richting)**", "Kleine letter", "noorden, westen"],
      ["**Aardrijkskundige namen met windstreek**", "Hoofdletter", "Noord-Holland, Zuid-Afrika"],
    ],
  },
  details: [
    {
      title: "Dagen, maanden en seizoenen – altijd kleine letter 📅",
      body: `
        <p>De namen van de dagen van de week, de maanden van het jaar en de vier seizoenen schrijf je <strong>altijd met een kleine letter</strong>, ook al zijn het in andere talen vaak hoofdletters.</p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Met kleine letter ✅</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Fout ❌</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">maandag, dinsdag, woensdag</td><td class="px-3 py-2 text-sm">Maandag, Dinsdag</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">januari, februari, maart</td><td class="px-3 py-2 text-sm">Januari, Februari</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">lente, zomer, herfst, winter</td><td class="px-3 py-2 text-sm">Lente, Zomer</td></tr>
            </tbody>
          </table>
        </div>
        <p><span class="pas-op-highlight">⚠️ PAS OP</span> Dit is een veelgemaakte fout. In het Engels, Duits en Frans krijgen dagen en maanden vaak wél een hoofdletter. In het Nederlands <strong>nooit</strong>.</p>
        <p><span class="pas-op-highlight">⚠️ PAS OP</span> Als een dag of maand aan het <strong>begin van een zin</strong> staat, krijgt het woord een hoofdletter vanwege de zin, niet vanwege de dag zelf. <em>Maandag ga ik naar de dokter.</em> (zin begint), maar <em>Ik ga maandag naar de dokter.</em> (kleine letter).</p>
      `,
    },
    {
      title: "Samenstellingen met een eigennaam – wanneer kleine letters? 🧩",
      body: `
        <p>Samenstellingen bestaan uit twee of meer woorden die aan elkaar worden geschreven. Als het eerste deel een eigennaam is, maar de hele samenstelling een <strong>gewoon zelfstandig naamwoord</strong> is geworden, schrijf je de samenstelling met een <strong>kleine letter</strong>.</p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Samenstelling (gewoon woord) ✅</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Uitleg</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">een <strong>heineken</strong></td><td class="px-3 py-2 text-sm">Biermerk Heineken, maar een glas bier noem je een 'heineken'.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm"><strong>parmaham</strong></td><td class="px-3 py-2 text-sm">Ham uit Parma, maar de hamsoort is een productnaam geworden.</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm"><strong>edammer kaas</strong></td><td class="px-3 py-2 text-sm">Kaas uit Edam; 'edammer' is het bijvoeglijk naamwoord.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">een <strong>playmobiel</strong></td><td class="px-3 py-2 text-sm">Van het merk Playmobil, maar het is een speelgoedsoort.</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">een <strong>luxaflex</strong></td><td class="px-3 py-2 text-sm">Van het merk Luxaflex, maar de soortnaam is met kleine letter.</td></tr>
            </tbody>
          </table>
        </div>
        <p><span class="pas-op-highlight">⚠️ PAS OP</span> Als de merknaam of plaatsnaam nog heel duidelijk als uniek product wordt gezien, kan de officiële spelling een hoofdletter behouden. Bij twijfel: zoek het op of houd de kleine letter aan voor soortnamen.</p>
      `,
    },
    {
      title: "Afleidingen van eigennamen – -isme, -ist, -iaans en meer 🏛️",
      body: `
        <p>Afleidingen van eigennamen met een achtervoegsel drukken vaak een stroming, levensbeschouwing of stijl uit. Deze schrijf je met een <strong>kleine letter</strong>, omdat ze een algemeen begrip zijn geworden.</p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Afleiding (kleine letter) ✅</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Afgeleid van...</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm"><strong>marxisme</strong></td><td class="px-3 py-2 text-sm">Karl Marx (stroming)</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm"><strong>stalinisme</strong></td><td class="px-3 py-2 text-sm">Stalin (politiek systeem)</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm"><strong>socialisme</strong></td><td class="px-3 py-2 text-sm">van 'sociaal', algemeen begrip</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm"><strong>christendom</strong></td><td class="px-3 py-2 text-sm">Christus (godsdienst)</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm"><strong>islamitisch</strong></td><td class="px-3 py-2 text-sm">Islam</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm"><strong>calvinistisch</strong></td><td class="px-3 py-2 text-sm">Calvijn</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm"><strong>freudiaans</strong></td><td class="px-3 py-2 text-sm">Freud</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm"><strong>dantesk</strong></td><td class="px-3 py-2 text-sm">Dante</td></tr>
            </tbody>
          </table>
        </div>
        <p>🧠 <strong>Hoofdregel:</strong> Een achtervoegsel als <strong>-isme, -ist, -isch, -iaans, -esk</strong> maakt van een eigennaam een gewoon begrip. Daarom schrijf je de afleiding met een kleine letter.</p>
        <p><span class="pas-op-highlight">⚠️ PAS OP</span> Sommige afleidingen zijn een echte eigennaam van een specifieke partij of gebouw en behouden dan de hoofdletter: <strong>de PvdA</strong>, <strong>het CDA</strong>, <strong>de Erasmusbrug</strong>. De algemene begrippen krijgen een kleine letter.</p>
      `,
    },
    {
      title: "Feestdagen en hun samenstellingen – wel hoofdletter, dan kleine letter 🎄",
      body: `
        <p>Feestdagen zelf schrijf je met een hoofdletter, zoals je eerder hebt geleerd. Maar <strong>samenstellingen</strong> en <strong>afleidingen</strong> van die feestdagen krijgen een kleine letter, omdat ze niet meer naar de unieke dag zelf verwijzen.</p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Feestdag (hoofdletter) ✅</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Samenstelling / Afleiding (kleine letter) ✅</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Kerstmis</td><td class="px-3 py-2 text-sm">kerstvakantie, kerstdiner, kerstboom</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Pasen</td><td class="px-3 py-2 text-sm">paasontbijt, paasei, paasstol</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Sinterklaas</td><td class="px-3 py-2 text-sm">sinterklaascadeau, sinterklaasgedicht</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Koningsdag</td><td class="px-3 py-2 text-sm">koningsdagviering, koningsdagmarkt</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Suikerfeest</td><td class="px-3 py-2 text-sm">suikerfeestviering</td></tr>
            </tbody>
          </table>
        </div>
        <p>🧠 <strong>Ezelsbrug:</strong> De feestdag zelf is uniek, daarom een hoofdletter. Alles wat je ervan maakt of eromheen viert, is algemeen, dus kleine letter.</p>
        <p><span class="pas-op-highlight">⚠️ PAS OP</span> De grens is soms onduidelijk. *Kerst* wordt vaak gebruikt als verkorte vorm van Kerstmis en mag dan met een hoofdletter: <em>Fijne Kerst!</em> Maar <em>kerstvakantie</em> is een samenstelling en krijgt een kleine letter.</p>
      `,
    },
    {
      title: "Windstreken in samenstellingen en afleidingen 🧭",
      body: `
        <p>Windstreken schrijf je met een <strong>kleine letter</strong> als je de richting bedoelt. Ook in samenstellingen en afleidingen die geen onderdeel zijn van een officiële aardrijkskundige naam, gebruik je kleine letters.</p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Met kleine letter ✅</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Met hoofdletter ❌ (als losse richting)</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">noorden, zuiden, oosten, westen</td><td class="px-3 py-2 text-sm">Noorden, Zuiden</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">noordelijk, zuidelijk</td><td class="px-3 py-2 text-sm">Noordelijk, Zuidelijk</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">noordkant, westkust</td><td class="px-3 py-2 text-sm">Noordkant, Westkust (tenzij regio)</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">het verre oosten (algemeen)</td><td class="px-3 py-2 text-sm">het Verre Oosten (specifiek gebied)</td></tr>
            </tbody>
          </table>
        </div>
        <p>De regel: zodra de windstreek deel uitmaakt van een <strong>aardrijkskundige eigennaam</strong>, gebruik je een hoofdletter: <strong>Noord-Holland</strong>, <strong>Zuid-Afrika</strong>, <strong>West-Vlaanderen</strong>, <strong>de Noordzee</strong>.</p>
      `,
    },
  ],
  rulesTable: [
    {
      rule: "Dagen, maanden, seizoenen: altijd kleine letter",
      structure: "Schrijf **maandag**, **januari**, **lente** altijd met een kleine letter, tenzij aan het begin van een zin.",
      example: "Ik kom **maandag** 5 **januari**. De **lente** begint in maart.",
      usage: "Vergelijk met Engels: nooit een hoofdletter!",
    },
    {
      rule: "Samenstellingen van eigennamen → kleine letter als soortnaam",
      structure: "Als een eigennaam in een samenstelling een algemeen product of begrip is geworden, schrijf je een **kleine letter**.",
      example: "een **heineken** (biertje), **parmaham**, **playmobiel**.",
      usage: "Twijfel? Bij algemeen gebruik is kleine letter veilig.",
    },
    {
      rule: "Afleidingen op -isme, -ist, -isch, -iaans: kleine letter",
      structure: "Een eigennaam met een achtervoegsel dat een stroming of stijl uitdrukt, verliest de hoofdletter.",
      example: "**marxisme**, **calvinistisch**, **freudiaans**.",
      usage: "Let op: officiële partijnamen behouden wél de hoofdletter (PvdA).",
    },
    {
      rule: "Feestdagen met hoofdletter, samenstellingen met kleine letter",
      structure: "De feestdag zelf is een eigennaam en krijgt een hoofdletter. Afgeleide samenstellingen schrijf je met een **kleine letter**.",
      example: "**Kerstmis** (feest) vs. **kerstvakantie** (periode).",
      usage: "Deze regel geldt voor alle feestdagen en vieringen.",
    },
    {
      rule: "Windstreken: kleine letter voor richting, hoofdletter in aardrijkskundige naam",
      structure: "Schrijf **noorden**, **westen** met kleine letters. In een officiële naam schrijf je een hoofdletter: **Noord-Holland**.",
      example: "Het **noorden** van het land. **Noord-Brabant** is een provincie.",
      usage: "Denk aan de samenstelling: als het een regio is, is het een eigennaam.",
    },
  ],
  callouts: [
    { type: "remember", label: "Onthoud 1", text: "**Dagen, maanden, seizoenen** = altijd kleine letter (maandag, januari, zomer)." },
    { type: "remember", label: "Onthoud 2", text: "**Samenstellingen** van eigennamen die soortnaam zijn = kleine letter (heineken, playmobiel)." },
    { type: "remember", label: "Onthoud 3", text: "**Afleidingen** op -isme, -ist, -isch, -iaans = kleine letter (marxisme, calvinistisch)." },
    { type: "remember", label: "Onthoud 4", text: "**Feestdagen** zelf = hoofdletter (Kerstmis); **samenstellingen** ervan = kleine letter (kerstvakantie)." },
    { type: "remember", label: "Onthoud 5", text: "**Windstreken** als richting = kleine letter (noorden); in **aardrijkskundige namen** = hoofdletter (Noord-Holland)." },
  ],
  commonMistakes: [
    { incorrect: "Maandag (midden in de zin)", correct: "maandag", explanation: "Dagen schrijf je met kleine letters." },
    { incorrect: "Januari", correct: "januari", explanation: "Maanden altijd met kleine letters." },
    { incorrect: "Kerstvakantie", correct: "kerstvakantie", explanation: "Samenstelling van feestdag: kleine letter." },
    { incorrect: "Paasontbijt", correct: "paasontbijt", explanation: "Samenstelling van feestdag: kleine letter." },
    { incorrect: "Marxisme", correct: "marxisme", explanation: "Afleiding van eigennaam: kleine letter." },
    { incorrect: "Luxaflex (als soortnaam)", correct: "luxaflex", explanation: "Merknaam die soortnaam is geworden: kleine letter." },
    { incorrect: "het Noorden (richting)", correct: "het noorden", explanation: "Windstreken: kleine letter, tenzij onderdeel van aardrijkskundige naam." },
  ],
  review: [
    "Dagen, maanden, seizoenen: altijd kleine letter (maandag, januari, zomer).",
    "Samenstellingen van eigennamen die soortnaam zijn geworden: kleine letter (heineken, playmobiel).",
    "Afleidingen op -isme, -ist, -isch, -iaans enz.: kleine letter (socialisme, freudiaans).",
    "Feestdagen zelf: hoofdletter (Kerstmis). Samenstellingen ervan: kleine letter (kerstvakantie).",
    "Windstreken als richting: kleine letter (noorden). In aardrijkskundige namen: hoofdletter (Noord-Holland).",
  ],
  qa: [
    {
      question: "Waarom is “Ik zie je op Maandag 5 Januari” fout? Schrijf de zin correct.",
      answer: "Dagen en maanden schrijf je in het Nederlands met een **kleine letter**. De juiste zin is: *Ik zie je op maandag 5 januari.* Alleen aan het begin van een zin krijgt 'Maandag' een hoofdletter vanwege de zin.",
    },
    {
      question: "Leg uit waarom we ‘kerstvakantie’ met een kleine letter schrijven, maar ‘Kerstmis’ met een hoofdletter.",
      answer: "**Kerstmis** is de naam van een specifieke feestdag, dus een eigennaam met hoofdletter. **kerstvakantie** is een samenstelling die verwijst naar de vakantieperiode rond die feestdag; het is een algemeen begrip en krijgt daarom een kleine letter.",
    },
    {
      question: "Waarom schrijf je ‘marxisme’ met een kleine letter, terwijl het van de eigennaam Marx komt?",
      answer: "Afleidingen met een achtervoegsel zoals **-isme** maken van een eigennaam een algemene stroming of ideologie. Daardoor wordt het een gewoon zelfstandig naamwoord en schrijf je het met een kleine letter.",
    },
    {
      question: "Is “een Heineken” als je een biertje bestelt correct? Verklaar.",
      answer: "Nee, als je een glas bier van het merk Heineken bedoelt, dan is het een soortnaam geworden. Je schrijft dan **een heineken** met kleine letter. Alleen de merknaam zelf als bedrijf of etiket blijft **Heineken**.",
    },
    {
      question: "Corrigeer de fout: “Het Noorden van Frankrijk is erg mooi.”",
      answer: "Hier is *noorden* een gewone windstreek en geen onderdeel van een officiële naam. De correcte zin is: **Het noorden van Frankrijk is erg mooi.**",
    },
    {
      question: "Wat is het verschil tussen “Pasen” en “paasei” in schrijfwijze? Leg de regel uit.",
      answer: "**Pasen** is de naam van de feestdag en krijgt een hoofdletter. **paasei** is een samenstelling die verwijst naar een ei dat met Pasen te maken heeft; het is geen unieke naam, dus een kleine letter.",
    },
    {
      question: "Bedenk zelf een correcte zin waarin je een afleiding op **-iaans** met kleine letter gebruikt, en leg uit waarom die kleine letter daar moet.",
      answer: "Bijvoorbeeld: *Zijn schilderijen hebben een heel **freudiaans** tintje.* Het woord **freudiaans** is afgeleid van de eigennaam Freud met het achtervoegsel -iaans, waardoor het een algemeen bijvoeglijk naamwoord is geworden. Daarom schrijf je het met een kleine letter.",
    },
  ],
};