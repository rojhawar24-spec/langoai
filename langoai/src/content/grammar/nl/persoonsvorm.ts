import type { GrammarLesson } from "../../types";

export const persoonsvorm: GrammarLesson = {
  id: "nl-persoonsvorm-1",
  title: "De Persoonsvorm (PV) – De werkwoordsvorm die met het onderwerp congrueert",
  level: 1,
  topic: "Persoonsvorm (congruentie)", // [G] Grammatica
  body: "Leer wat de persoonsvorm is, hoe je hem herkent en hoe hij zich aanpast aan het onderwerp (congruentie). Met alle proeven, regels en uitzonderingen.",
  overview:
    "De **persoonsvorm** is de ruggengraat van de zin. In deze **supercomplete, glasheldere les** ontdek je stap voor stap wat een persoonsvorm is, hoe je hem vindt met de **tijdproef**, **vraagproef** en **getalproef**, en hoe hij **congrueert** (overeenstemt) met het onderwerp in persoon en getal. Je leert de vervoeging van regelmatige, sterke en onregelmatige werkwoorden in de tegenwoordige en verleden tijd, en hoe je de persoonsvorm ook in zinnen met hulpwerkwoorden en in bijzinnen feilloos aanwijst. Met heldere tabellen, tientallen voorbeelden, PAS OP‑waarschuwingen voor alle beruchte valkuilen en 7 ijzersterke oefenvragen herken jij voortaan elke persoonsvorm in één oogopslag.",
  anchorSectionId: "wat",
  exercises: [],
  timeExpressionsLabel: "Congruentie in de tegenwoordige tijd (stam+t) 📊",
  timeExpressions: {
    header: "Onderwerp | Uitgang | Voorbeeld (werken) | Voorbeeld (leven → leef) | Voorbeeld (vinden → vind)",
    rows: [
      ["ik", "stam", "ik **werk**", "ik **leef**", "ik **vind**"],
      ["jij / u", "stam + t", "jij **werkt**", "jij **leeft**", "jij **vindt**"],
      ["hij / zij / het", "stam + t", "hij **werkt**", "hij **leeft**", "hij **vindt**"],
      ["wij / jullie / zij", "infinitief", "wij **werken**", "wij **leven**", "wij **vinden**"],
    ],
  },
  details: [
    {
      title: "Wat is de persoonsvorm? 🧩",
      body: `
        <p>De <strong>persoonsvorm</strong> is het belangrijkste werkwoord in een Nederlandse zin. Het is de vorm die:</p>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>van tijd verandert</strong> (tegenwoordige ↔ verleden tijd)</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>van getal verandert</strong> (enkelvoud ↔ meervoud)</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>zich aanpast aan het onderwerp</strong> (ik, jij, hij…)</li>
        </ul>
        <p>Dit aanpassen noemen we <strong>congruentie</strong>: de persoonsvorm en het onderwerp stemmen overeen in <strong>persoon</strong> (eerste, tweede, derde) en <strong>getal</strong> (enkelvoud of meervoud). Zonder congruente persoonsvorm is de zin onvolledig.</p>
        <p>Voorbeelden:</p>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">Ik <strong>werk</strong> vandaag. (tegenwoordige tijd, 1e persoon enkelvoud)</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">Jij <strong>werkt</strong> vandaag. (2e persoon enkelvoud)</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">Wij <strong>werkten</strong> gisteren. (verleden tijd, 1e persoon meervoud)</li>
        </ul>
      `,
    },
    {
      title: "Hoe vind je de persoonsvorm? – Drie ijzersterke proeven 🔎",
      body: `
        <p>Gebruik deze proeven om in elke zin snel de persoonsvorm aan te wijzen.</p>
        <h3 class="text-lg font-bold mt-4 mb-2">1. De tijdproef</h3>
        <p>Verander de tijd van de zin (van nu naar vroeger of omgekeerd). Het werkwoord dat mee verandert, is de persoonsvorm.</p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Tegenwoordige tijd</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Verleden tijd</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Ik <strong>lees</strong> een boek.</td><td class="px-3 py-2 text-sm">Ik <strong>las</strong> een boek.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Hij <strong>werkt</strong> hard.</td><td class="px-3 py-2 text-sm">Hij <strong>werkte</strong> hard.</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Wij <strong>gaan</strong> naar huis.</td><td class="px-3 py-2 text-sm">Wij <strong>gingen</strong> naar huis.</td></tr>
            </tbody>
          </table>
        </div>
        <h3 class="text-lg font-bold mt-6 mb-2">2. De vraagproef</h3>
        <p>Maak een ja/nee‑vraag van de zin. De persoonsvorm komt <strong>vooraan</strong> te staan.</p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Mededelende zin</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Vraagzin</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Jij <strong>hebt</strong> een fiets.</td><td class="px-3 py-2 text-sm"><strong>Heb</strong> jij een fiets?</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Het <strong>regent</strong> hard.</td><td class="px-3 py-2 text-sm"><strong>Regent</strong> het hard?</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Zij <strong>komen</strong> morgen.</td><td class="px-3 py-2 text-sm"><strong>Komen</strong> zij morgen?</td></tr>
            </tbody>
          </table>
        </div>
        <h3 class="text-lg font-bold mt-6 mb-2">3. De getalproef</h3>
        <p>Verander het onderwerp van enkelvoud naar meervoud (of omgekeerd). De persoonsvorm verandert mee.</p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Enkelvoud</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Meervoud</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Ik <strong>loop</strong>.</td><td class="px-3 py-2 text-sm">Wij <strong>lopen</strong>.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Jij <strong>leest</strong>.</td><td class="px-3 py-2 text-sm">Jullie <strong>lezen</strong>.</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Hij <strong>werkt</strong>.</td><td class="px-3 py-2 text-sm">Zij <strong>werken</strong>.</td></tr>
            </tbody>
          </table>
        </div>
        <p><span class="pas-op-highlight">⚠️ PAS OP</span> Bij zinnen met meerdere werkwoorden verandert alleen de persoonsvorm mee. <em>Hij heeft een boek gelezen.</em> → tijdproef: <em>Hij had een boek gelezen.</em> Alleen <em>heeft/had</em> verandert; <em>gelezen</em> blijft staan. Dus <em>heeft</em> is de persoonsvorm.</p>
      `,
    },
    {
      title: "Congruentie in de tegenwoordige tijd – regelmatige werkwoorden ⏱️",
      body: `
        <p>Voor regelmatige werkwoorden geldt de <strong>stam+t‑regel</strong>. De stam vind je door <em>-en</em> van de infinitief af te halen en de spellingregels toe te passen (v→f, z→s, klinker aanpassen).</p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Onderwerp</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Uitgang</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Voorbeeld (werken)</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Voorbeeld (leven → leef)</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">ik</td><td class="px-3 py-2 text-sm">stam</td><td class="px-3 py-2 text-sm">ik <strong>werk</strong></td><td class="px-3 py-2 text-sm">ik <strong>leef</strong></td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">jij / u</td><td class="px-3 py-2 text-sm">stam + t</td><td class="px-3 py-2 text-sm">jij <strong>werkt</strong></td><td class="px-3 py-2 text-sm">jij <strong>leeft</strong></td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">hij / zij / het</td><td class="px-3 py-2 text-sm">stam + t</td><td class="px-3 py-2 text-sm">hij <strong>werkt</strong></td><td class="px-3 py-2 text-sm">hij <strong>leeft</strong></td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">wij / jullie / zij</td><td class="px-3 py-2 text-sm">infinitief</td><td class="px-3 py-2 text-sm">wij <strong>werken</strong></td><td class="px-3 py-2 text-sm">wij <strong>leven</strong></td></tr>
            </tbody>
          </table>
        </div>
        <p><span class="pas-op-highlight">⚠️ PAS OP</span> In vraagzinnen met het onbeklemtoonde <strong>je</strong> valt de -t van de jij‑vorm weg: <em>Werk je?</em> (nooit <em>Werkt je?</em>). Bij <em>u</em> blijft de -t altijd staan: <em>Werkt u?</em></p>
        <p><span class="pas-op-highlight">⚠️ PAS OP</span> Werkwoorden met een stam op <strong>-d</strong> krijgen in de jij‑/hij‑vorm <strong>-dt</strong>: <em>jij vindt, hij wordt</em>. Twijfel? Vervang door <em>lopen</em> – <em>hij loopt</em>, dus <em>hij vindt</em>.</p>
      `,
    },
    {
      title: "Congruentie in de tegenwoordige tijd – sterke en onregelmatige werkwoorden 🌟",
      body: `
        <p>Sterke werkwoorden hebben een klinkerverandering in de verleden tijd, maar in de tegenwoordige tijd volgen ze dezelfde uitgangen als regelmatige werkwoorden. Onregelmatige werkwoorden hebben afwijkende vormen.</p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Infinitief</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">ik</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">jij/u</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">hij/zij/het</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">wij/jullie/zij</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">zijn</td><td class="px-3 py-2 text-sm">ben</td><td class="px-3 py-2 text-sm">bent</td><td class="px-3 py-2 text-sm">is</td><td class="px-3 py-2 text-sm">zijn</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">hebben</td><td class="px-3 py-2 text-sm">heb</td><td class="px-3 py-2 text-sm">hebt</td><td class="px-3 py-2 text-sm">heeft</td><td class="px-3 py-2 text-sm">hebben</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">kunnen</td><td class="px-3 py-2 text-sm">kan</td><td class="px-3 py-2 text-sm">kunt / kan</td><td class="px-3 py-2 text-sm">kan</td><td class="px-3 py-2 text-sm">kunnen</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">willen</td><td class="px-3 py-2 text-sm">wil</td><td class="px-3 py-2 text-sm">wilt / wil</td><td class="px-3 py-2 text-sm">wil</td><td class="px-3 py-2 text-sm">willen</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">zullen</td><td class="px-3 py-2 text-sm">zal</td><td class="px-3 py-2 text-sm">zult / zal</td><td class="px-3 py-2 text-sm">zal</td><td class="px-3 py-2 text-sm">zullen</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">mogen</td><td class="px-3 py-2 text-sm">mag</td><td class="px-3 py-2 text-sm">mag</td><td class="px-3 py-2 text-sm">mag</td><td class="px-3 py-2 text-sm">mogen</td></tr>
            </tbody>
          </table>
        </div>
        <p><span class="pas-op-highlight">⚠️ PAS OP</span> <strong>Hij wil, hij kan, hij zal, hij mag</strong> – deze vier werkwoorden krijgen in de derde persoon enkelvoud <strong>geen t</strong>. Dit is een beruchte fout. Ook <em>hij heeft</em> (niet <em>hij hebt</em>) is onregelmatig.</p>
      `,
    },
    {
      title: "Congruentie in de verleden tijd – zwakke, sterke en onregelmatige werkwoorden 🕰️",
      body: `
        <p>In de verleden tijd is er alleen nog onderscheid tussen <strong>enkelvoud</strong> en <strong>meervoud</strong>; de verschillende personen krijgen dezelfde vorm.</p>
        <h3 class="text-lg font-bold mt-4 mb-2">Zwakke werkwoorden (stam + -de/-te)</h3>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">ik/jij/hij <strong>werkte</strong> – wij/jullie/zij <strong>werkten</strong></li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">ik/jij/hij <strong>leefde</strong> – wij/jullie/zij <strong>leefden</strong></li>
        </ul>
        <h3 class="text-lg font-bold mt-4 mb-2">Sterke werkwoorden (klinkerverandering)</h3>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">ik/jij/hij <strong>liep</strong> – wij/jullie/zij <strong>liepen</strong></li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">ik/jij/hij <strong>schreef</strong> – wij/jullie/zij <strong>schreven</strong></li>
        </ul>
        <h3 class="text-lg font-bold mt-4 mb-2">Onregelmatige werkwoorden</h3>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Infinitief</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Enkelvoud</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Meervoud</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">zijn</td><td class="px-3 py-2 text-sm">was</td><td class="px-3 py-2 text-sm">waren</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">hebben</td><td class="px-3 py-2 text-sm">had</td><td class="px-3 py-2 text-sm">hadden</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">kunnen</td><td class="px-3 py-2 text-sm">kon</td><td class="px-3 py-2 text-sm">konden</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">zullen</td><td class="px-3 py-2 text-sm">zou</td><td class="px-3 py-2 text-sm">zouden</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">willen</td><td class="px-3 py-2 text-sm">wilde / wou</td><td class="px-3 py-2 text-sm">wilden / wouden</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">mogen</td><td class="px-3 py-2 text-sm">mocht</td><td class="px-3 py-2 text-sm">mochten</td></tr>
            </tbody>
          </table>
        </div>
      `,
    },
    {
      title: "Congruentie in zinnen met meerdere werkwoorden 🏗️",
      body: `
        <p>Zinnen met een hulpwerkwoord en een infinitief of voltooid deelwoord hebben één persoonsvorm: het <strong>hulpwerkwoord</strong> congrueert met het onderwerp. De overige werkwoorden veranderen niet.</p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Zin</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Persoonsvorm</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Ander werkwoord</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Ik <strong>heb</strong> het boek gelezen.</td><td class="px-3 py-2 text-sm">heb</td><td class="px-3 py-2 text-sm">gelezen (voltooid deelwoord)</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Hij <strong>had</strong> het boek gelezen.</td><td class="px-3 py-2 text-sm">had</td><td class="px-3 py-2 text-sm">gelezen</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Wij <strong>zullen</strong> het boek lezen.</td><td class="px-3 py-2 text-sm">zullen</td><td class="px-3 py-2 text-sm">lezen (infinitief)</td></tr>
            </tbody>
          </table>
        </div>
        <p>De tijdproef werkt nog steeds: verander <em>heeft</em> in <em>had</em>, de rest blijft. Zo bewijs je dat <em>heeft</em> de persoonsvorm is.</p>
      `,
    },
    {
      title: "De persoonsvorm in hoofdzin en bijzin – zelfde congruentie 🧭",
      body: `
        <p>Of de persoonsvorm nu op de tweede plaats in de hoofdzin of achteraan in de bijzin staat, hij congrueert altijd met het onderwerp. Alleen de positie verandert.</p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Hoofdzin</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Bijzin met 'omdat'</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Ik <strong>werk</strong> vandaag.</td><td class="px-3 py-2 text-sm">...omdat ik vandaag <strong>werk</strong>.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Jij <strong>leest</strong> het boek.</td><td class="px-3 py-2 text-sm">...omdat jij het boek <strong>leest</strong>.</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Wij <strong>hebben</strong> het gedaan.</td><td class="px-3 py-2 text-sm">...omdat wij het <strong>hebben</strong> gedaan.</td></tr>
            </tbody>
          </table>
        </div>
        <p>De vorm van de persoonsvorm blijft dus identiek; het onderwerp bepaalt de uitgang, niet de plaats in de zin.</p>
      `,
    },
  ],
  rulesTable: [
    {
      rule: "Congruentie in tegenwoordige tijd: stam+t",
      structure: "ik = stam, jij/u = stam+t, hij/zij/het = stam+t (let op t/d), wij/jullie/zij = infinitief.",
      example: "ik **werk**, jij **werkt**, hij **werkt**, wij **werken**.",
      usage: "Bij stam op -d → dt: jij **vindt**, hij **wordt**. Bij inversie met 'je' verdwijnt de t: **Werk je?**",
    },
    {
      rule: "Onregelmatige werkwoorden: leer de rijtjes",
      structure: "Zijn, hebben, willen, kunnen, zullen, mogen hebben eigen vormen. Vooral de 3e persoon enkelvoud wijkt af.",
      example: "hij **is**, hij **heeft**, hij **wil**, hij **kan**, hij **zal**, hij **mag** (allemaal zonder de verwachte -t, behalve 'heeft').",
      usage: "Deze rijtjes stampen is essentieel om congruentiefouten te vermijden.",
    },
    {
      rule: "In de verleden tijd alleen getalscongruentie",
      structure: "Enkelvoud en meervoud zijn verschillend, maar binnen het enkelvoud zijn alle personen gelijk.",
      example: "ik/jij/hij **werkte** (liep) – wij/jullie/zij **werkten** (liepen).",
      usage: "Bij sterke werkwoorden vaak klinkerwisseling: lopen → liep, schrijven → schreef.",
    },
    {
      rule: "Proeven om de persoonsvorm te vinden",
      structure: "Gebruik de **tijdproef** (verander de tijd), de **vraagproef** (maak een ja/nee-vraag) of de **getalproef** (verander enkelvoud/meervoud). Het werkwoord dat verandert of voorop komt, is de persoonsvorm.",
      example: "Ik **lees** → **las** (tijdproef). **Heb** jij een fiets? (vraagproef). Ik **loop** → Wij **lopen** (getalproef).",
      usage: "Werkt ook bij meerdere werkwoorden: alleen het hulpwerkwoord verandert.",
    },
  ],
  callouts: [
    { type: "remember", label: "Onthoud 1", text: "De persoonsvorm verandert van **tijd** en past zich aan het **onderwerp** aan (congruentie)." },
    { type: "remember", label: "Onthoud 2", text: "Vind de PV met de **tijdproef**, **vraagproef** of **getalproef**." },
    { type: "remember", label: "Onthoud 3", text: "Tegenwoordige tijd: **ik = stam, jij/hij = stam+t, wij = infinitief**." },
    { type: "remember", label: "Onthoud 4", text: "**Hij wil, kan, zal, mag** – géén t! **Hij heeft** is ook onregelmatig." },
    { type: "remember", label: "Onthoud 5", text: "Verleden tijd: enkelvoud één vorm, meervoud één vorm (geen persoonsonderscheid)." },
  ],
  commonMistakes: [
    { incorrect: "Hij wilt.", correct: "Hij wil.", explanation: "Willen is onregelmatig; 3e persoon enkelvoud = wil." },
    { incorrect: "Jij heb.", correct: "Jij hebt.", explanation: "Jij-vorm van hebben = hebt (stam+t)." },
    { incorrect: "De kinderen speelt.", correct: "De kinderen spelen.", explanation: "Onderwerp meervoud → persoonsvorm meervoud." },
    { incorrect: "...omdat hij het antwoord niet weten.", correct: "...omdat hij het antwoord niet weet.", explanation: "Bijzin: hij 3e ev → stam+t." },
    { incorrect: "Hij vind het leuk.", correct: "Hij vindt het leuk.", explanation: "Stam op -d → dt in de 3e persoon." },
    { incorrect: "Werk jij morgen? (goed, maar let op: niet 'Werkt jij?')", correct: "Werk jij morgen? (bij inversie met 'jij' blijft de t; gebruikelijker is 'Werk je?' zonder t)", explanation: "Bij 'je' vervalt de t." },
  ],
  review: [
    "**Persoonsvorm** = werkwoordsvorm die **van tijd verandert** en **zich aanpast aan het onderwerp**.",
    "Vind de PV met de **tijdproef**, **vraagproef** of **getalproef**.",
    "Congruentie: persoonsvorm en onderwerp stemmen overeen in **persoon** en **getal**.",
    "In de **tegenwoordige tijd**: ik = stam, jij/hij = stam+t, wij = infinitief.",
    "In de **verleden tijd**: enkelvoud en meervoud, geen onderscheid in persoon.",
    "**Onregelmatige werkwoorden** (zijn, hebben, kunnen, willen, zullen, mogen) apart leren.",
    "In zinnen met **meerdere werkwoorden** is alleen het hulpwerkwoord de PV en congrueert met het onderwerp.",
    "De positie (hoofdzin of bijzin) verandert de congruentie niet.",
  ],
  qa: [
    {
      question: "Wat is het verschil tussen de persoonsvorm en het hele werkwoord (infinitief)? Leg uit met een voorbeeldzin en de tijdproef.",
      answer: "De infinitief is het hele werkwoord zoals in het woordenboek (werken, slapen). De persoonsvorm is de werkwoordsvorm die in de zin van tijd verandert en zich aanpast aan het onderwerp. In de zin *Ik werk vandaag* is *werk* de persoonsvorm; de infinitief is *werken*. Met de tijdproef: *Ik werkte gisteren* – *werk* verandert in *werkte*, dus *werk* is de persoonsvorm.",
    },
    {
      question: "Leg uit hoe je de getalproef gebruikt om de persoonsvorm in de zin “Het meisje speelt in de tuin” aan te wijzen. Wat verandert er precies?",
      answer: "Bij de getalproef verander je het onderwerp van enkelvoud naar meervoud: *De meisjes spelen in de tuin.* Het werkwoord *speelt* verandert in *spelen*. Het werkwoord dat mee verandert, is de persoonsvorm. In de oorspronkelijke zin is *speelt* dus de persoonsvorm.",
    },
    {
      question: "Waarom is “Jij heb” fout? Leg de congruentie tussen het onderwerp ‘jij’ en de persoonsvorm uit.",
      answer: "Bij het onderwerp **jij** hoort de werkwoordsvorm met **stam + t**. Het werkwoord *hebben* is onregelmatig: de jij-vorm is **jij hebt**. *Heb* is de ik-vorm, dus *jij heb* is fout omdat de persoonsvorm niet correct congrueert met het onderwerp in de tweede persoon enkelvoud.",
    },
    {
      question: "In de zin “De vogels vlogen naar het zuiden” staat de persoonsvorm in de verleden tijd. Wat is de persoonsvorm en hoe herken je die? Waarom verandert die niet als je ‘jij’ als onderwerp gebruikt?",
      answer: "De persoonsvorm is **vlogen**. Met de tijdproef: *De vogels vliegen naar het zuiden* (tegenw. tijd). *Vlogen* is de verledentijdsvorm. In de verleden tijd is er geen verschil in persoonsvorm voor verschillende personen in het enkelvoud; het enkelvoud is *vloog* en het meervoud *vlogen*. Als je *jij* als onderwerp neemt, wordt het *Jij vloog naar het zuiden*, dus de persoonsvorm verandert wel naar enkelvoud, maar niet naar persoon. Dat is eigen aan de verleden tijd.",
    },
    {
      question: "In de zin “Hij heeft het boek gelezen” staan twee werkwoorden. Welk woord is de persoonsvorm en hoe weet je dat? Wat gebeurt er met het andere werkwoord als je de tijd verandert?",
      answer: "De persoonsvorm is **heeft**. Met de tijdproef: *Hij had het boek gelezen.* *Heeft* verandert in *had*, terwijl *gelezen* onveranderd blijft. Ook de vraagproef: *Heeft hij het boek gelezen?* zet *heeft* vooraan. Het andere werkwoord *gelezen* is een voltooid deelwoord en verandert niet bij congruentie of tijdswisseling.",
    },
    {
      question: "Corrigeer de foute bijzin “...omdat hij het antwoord niet weten” en leg uit waarom de persoonsvorm hier niet correct is.",
      answer: "Het onderwerp is *hij*, derde persoon enkelvoud. De persoonsvorm moet dus in de tegenwoordige tijd **stam + t** zijn, dus **weet**. De correcte bijzin is: *...omdat hij het antwoord niet **weet**.* De infinitief *weten* is hier onjuist omdat de persoonsvorm moet congrueren met *hij*.",
    },
    {
      question: "Waarom is de persoonsvorm in een hoofdzin altijd het tweede zinsdeel, maar nooit het eerste? Gebruik de vraagproef om dit te verduidelijken.",
      answer: "In een mededelende hoofdzin staat de persoonsvorm op de **tweede plaats**. Het eerste zinsdeel kan het onderwerp zijn (*Ik werk*), maar ook een ander zinsdeel (*Morgen werk ik*). De persoonsvorm komt nooit op de eerste plaats, behalve in een vraagzin. Met de vraagproef maak je van een mededeling een ja/nee-vraag: de persoonsvorm komt dan juist wél op de eerste plaats. Bijvoorbeeld: *Jij werkt morgen.* → *Werk jij morgen?* De persoonsvorm *werk* verhuist naar de eerste positie. Dat is het kenmerk van een vraag. In een mededeling staat de persoonsvorm dus altijd op de tweede plaats.",
    },
  ],
};