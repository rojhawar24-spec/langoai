import type { GrammarLesson } from "../../types";

export const uitspraak: GrammarLesson = {
  id: "nl-uitspraak-1",
  title: "Uitspraak & Klanken: Compleet overzicht van het Nederlands",
  level: 1,
  topic: "Uitspraak",
  body: "Leer de Nederlandse uitspraak met dit complete overzicht van het alfabet, klinkers, medeklinkers, tweeklanken en belangrijke regels.",
  overview:
    "Hier vind je een **prachtig uitgewerkt** en **volledig** overzicht van de Nederlandse uitspraak: het alfabet, alle klinkers, medeklinkers, tweeklanken, belangrijke regels, de meest voorkomende fouten en een snelle herhaling. Alles is helder, overzichtelijk en ideaal om te leren of te herhalen.",
  anchorSectionId: "alphabet",
  exercises: [],
  timeExpressionsLabel: "Alfabet – 26 Letters",
  timeExpressions: {
    header: "Letter | Uitspraak | Klank | Voorbeelden",
    rows: [
      ["A", "'aa'", "<strong>a</strong> (kort) / <strong>aa</strong> (lang) / doffe a", "kat, maan, bruikbaar"],
      ["B", "'bee'", "<strong>b</strong> (eind → p)", "been, web (klinkt als *wep*)"],
      ["C", "'see'", "<strong>k</strong> vóór a/o/u; <strong>s</strong> vóór e/i", "club, cel"],
      ["D", "'dee'", "<strong>d</strong> (eind → t)", "dak, hond (klinkt als *hont*)"],
      ["E", "'ee'", "<strong>e</strong> (kort) / <strong>ee</strong> (lang) / doffe e", "bed, heel, de"],
      ["F", "'ef'", "<strong>f</strong>", "fiets"],
      ["G", "'gee'", "<strong>harde g</strong> (raspend, = ch)", "goed, lachen"],
      ["H", "'haa'", "<strong>h</strong>", "huis"],
      ["I", "'ie'", "<strong>i</strong> (kort) / <strong>ie</strong> (lang)", "pit, lief"],
      ["J", "'jee'", "<strong>j</strong> (als Engelse *y*)", "ja"],
      ["K", "'kaa'", "<strong>k</strong>", "kat"],
      ["L", "'el'", "<strong>l</strong>", "land"],
      ["M", "'em'", "<strong>m</strong>", "maan"],
      ["N", "'en'", "<strong>n</strong>; vóór k/g als ng", "neus, denken"],
      ["O", "'oo'", "<strong>o</strong> (kort) / <strong>oo</strong> (lang)", "pot, boom"],
      ["P", "'pee'", "<strong>p</strong>", "paard"],
      ["Q", "'kuu'", "<strong>kw</strong>", "quiz"],
      ["R", "'er'", "rollend, keel‑r of Gooise r", "rood"],
      ["S", "'es'", "<strong>s</strong>", "slang"],
      ["T", "'tee'", "<strong>t</strong>", "tafel"],
      ["U", "'uu'", "<strong>u</strong> (kort) / <strong>uu</strong> (lang)", "put, muur"],
      ["V", "'vee'", "<strong>v</strong> (nooit aan woordeinde)", "vader, lief"],
      ["W", "'wee'", "zachte w (tussen v en w)", "water"],
      ["X", "'iks'", "<strong>ks</strong>", "examen"],
      ["Y", "'ei' / 'i-grec'", "<strong>ie</strong> of <strong>ei/ij</strong>", "yoghurt, y-as"],
      ["Z", "'zet'", "<strong>z</strong> (eind → s)", "zee, huis (klinkt als *huiss*)"],
    ],
  },
  details: [
    {
      title: "Klinkers – kort, lang en de doffe e",
      body: `
        <div class="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-indigo-700 dark:text-indigo-300 mb-2">🧲 IJzeren regel</h3>
          <ul class="space-y-1 list-disc pl-5 text-slate-700 dark:text-slate-300">
            <li>Korte klinker staat in een <strong>gesloten</strong> lettergreep (eindigt op een medeklinker): <strong>kat, bed, pit, pot, put</strong>.</li>
            <li>Lange klinker wordt in een gesloten lettergreep met <strong>twee letters</strong> geschreven: <strong>maan, been, wiel, boom, muur</strong>.</li>
            <li>In een <strong>open</strong> lettergreep (eindigt op een klinker) schrijf je maar één klinkerteken: <strong>ma‑nen, be‑ken, bo‑men, mu‑ren</strong>.</li>
          </ul>
        </div>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-indigo-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Kort</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Lang</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Doffe e (sjwa)</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm"><strong>a</strong> (kat)</td><td class="px-3 py-2 text-sm"><strong>aa</strong> (maan)</td><td class="px-3 py-2 text-sm"></td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm"><strong>e</strong> (pet)</td><td class="px-3 py-2 text-sm"><strong>ee</strong> (peet)</td><td class="px-3 py-2 text-sm"><strong>e</strong> in <em>de, lopen</em></td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm"><strong>i</strong> (pit)</td><td class="px-3 py-2 text-sm"><strong>ie</strong> (piet)</td><td class="px-3 py-2 text-sm"></td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm"><strong>o</strong> (pot)</td><td class="px-3 py-2 text-sm"><strong>oo</strong> (poot)</td><td class="px-3 py-2 text-sm"></td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm"><strong>u</strong> (put)</td><td class="px-3 py-2 text-sm"><strong>uu</strong> (muur)</td><td class="px-3 py-2 text-sm"></td></tr>
            </tbody>
          </table>
        </div>
        <h3 class="text-lg font-bold mt-6 mb-2">🔎 Bijzonderheden</h3>
        <ul class="list-disc pl-5 space-y-1 text-slate-700 dark:text-slate-300">
          <li><strong class="text-indigo-600">ie</strong> is altijd lang (ook in open lettergreep schrijf je <strong>ie</strong>: <em>lie‑ve</em>).</li>
          <li><strong class="text-indigo-600">oe</strong> is een lange klinker: <strong>boek, moeder</strong>.</li>
        </ul>
        <h3 class="text-lg font-bold mt-6 mb-2">💤 De doffe e / sjwa (ə)</h3>
        <ul class="list-disc pl-5 space-y-1 text-slate-700 dark:text-slate-300">
          <li>De meest voorkomende klinker!</li>
          <li>Komt voor in: <strong>de, te, je, me, we</strong> en in uitgangen <strong>-en</strong>: <strong>lopen</strong> klinkt als <em>lopuh</em>, niet <em>lópen</em>.</li>
          <li>In <strong>-lijk</strong>: <em>vrolijk</em> → <em>vroo‑luhk</em>.</li>
        </ul>
      `,
    },
    {
      title: "Tweeklanken (diftongen) – échte glijders",
      body: `
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-indigo-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Tweeklank</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Klank</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Omschrijving</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Voorbeeld</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">⚠️ PAS OP</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm"><strong class="text-indigo-600">ei / ij</strong></td><td class="px-3 py-2 text-sm">/ɛi/</td><td class="px-3 py-2 text-sm">Korte e + ie‑glide</td><td class="px-3 py-2 text-sm">eind, tijd, meisje</td><td class="px-3 py-2 text-sm text-rose-600 font-semibold">Geen ai zoals in main!</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm"><strong class="text-indigo-600">au / ou</strong></td><td class="px-3 py-2 text-sm">/ʌu/</td><td class="px-3 py-2 text-sm">Open a + oe‑glide</td><td class="px-3 py-2 text-sm">auto, hout, blauw</td><td class="px-3 py-2 text-sm text-rose-600 font-semibold">Eindig met lichte w: blauw = bl-ou-w</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm"><strong class="text-indigo-600">ui</strong></td><td class="px-3 py-2 text-sm">/œy/</td><td class="px-3 py-2 text-sm">Getuite korte u + ie‑glide</td><td class="px-3 py-2 text-sm">huis, muis, duim</td><td class="px-3 py-2 text-sm text-rose-600 font-semibold">Nooit als au! Huis ≠ haus</td></tr>
            </tbody>
          </table>
        </div>
        <div class="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 rounded-r-lg my-4">
          <p class="font-semibold text-amber-700 dark:text-amber-300">
            <strong>ei/ij</strong> en <strong>au/ou</strong> zijn exact dezelfde klank – er is geen verschil!
            <strong>eu</strong> is géén tweeklank maar een zuivere, lange klinker (zoals in Frans <em>peur</em>): <strong>neus, deur, leuk</strong>.
          </p>
        </div>
        <h3 class="text-lg font-bold mt-6 mb-2">Combinaties met halfklinkers (lange klinker + j/w)</h3>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-indigo-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Combinatie</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Uitspraak</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Voorbeeld</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm"><strong class="text-indigo-600">aai</strong></td><td class="px-3 py-2 text-sm">aa + i</td><td class="px-3 py-2 text-sm">draai</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm"><strong class="text-indigo-600">ooi</strong></td><td class="px-3 py-2 text-sm">oo + i</td><td class="px-3 py-2 text-sm">mooi</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm"><strong class="text-indigo-600">oei</strong></td><td class="px-3 py-2 text-sm">oe + i</td><td class="px-3 py-2 text-sm">groei</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm"><strong class="text-indigo-600">eeuw</strong></td><td class="px-3 py-2 text-sm">ee + oe</td><td class="px-3 py-2 text-sm">leeuw</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm"><strong class="text-indigo-600">ieuw</strong></td><td class="px-3 py-2 text-sm">ie + oe</td><td class="px-3 py-2 text-sm">nieuw</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm"><strong class="text-indigo-600">uw</strong></td><td class="px-3 py-2 text-sm">uu + w</td><td class="px-3 py-2 text-sm">duw</td></tr>
            </tbody>
          </table>
        </div>
      `,
    },
    {
      title: "Medeklinkers – de valkuilen",
      body: `
        <h3 class="text-lg font-bold mt-4 mb-2">4.1 De harde g en ch</h3>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-indigo-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Spelling</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Klank</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Voorbeeld</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">⚠️ PAS OP</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm"><strong>g</strong></td><td class="px-3 py-2 text-sm">harde keelschraap (stemhebbend)</td><td class="px-3 py-2 text-sm"><strong>g</strong>oed, <strong>g</strong>root</td><td class="px-3 py-2 text-sm text-rose-600 font-semibold">Nooit als Engelse g in <em>good</em></td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm"><strong>ch</strong></td><td class="px-3 py-2 text-sm">dezelfde schraap, stemloos</td><td class="px-3 py-2 text-sm">la<strong>ch</strong>en, a<strong>ch</strong>t</td><td class="px-3 py-2 text-sm text-rose-600 font-semibold">Klinkt hetzelfde als g</td></tr>
            </tbody>
          </table>
        </div>
        <p class="text-sm text-slate-600 dark:text-slate-400">Licht en ligt klinken volkomen gelijk.</p>

        <h3 class="text-lg font-bold mt-6 mb-2">4.2 De sch-klank</h3>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-indigo-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Spelling</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Klank</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Voorbeeld</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">⚠️ PAS OP</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm"><strong>sch</strong></td><td class="px-3 py-2 text-sm">s + ch (keelschraap)</td><td class="px-3 py-2 text-sm"><strong>sch</strong>ool</td><td class="px-3 py-2 text-sm text-rose-600 font-semibold"><strong>Nooit sj!</strong> Het is s-ggg-ool</td></tr>
            </tbody>
          </table>
        </div>

        <h3 class="text-lg font-bold mt-6 mb-2">4.3 Neusklanken ng en nk</h3>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-indigo-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Spelling</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Klank</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Voorbeeld</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">⚠️ PAS OP</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm"><strong>ng</strong></td><td class="px-3 py-2 text-sm">één nasale klank (als in Engels <em>sing</em>)</td><td class="px-3 py-2 text-sm">ri<strong>ng</strong>, zi<strong>ng</strong>en</td><td class="px-3 py-2 text-sm text-rose-600 font-semibold">Nooit een harde g aan het eind</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm"><strong>nk</strong></td><td class="px-3 py-2 text-sm">ng + k</td><td class="px-3 py-2 text-sm">ba<strong>nk</strong></td><td class="px-3 py-2 text-sm text-rose-600 font-semibold">Klinkt als <em>bang-k</em></td></tr>
            </tbody>
          </table>
        </div>

        <h3 class="text-lg font-bold mt-6 mb-2">4.4 Eindklankverscherping</h3>
        <p class="text-sm text-slate-600 dark:text-slate-400 mb-2">Aan het woordeinde worden stemhebbende medeklinkers stemloos.</p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-indigo-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Spelling</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Uitspraak</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Regel</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">hond, bed</td><td class="px-3 py-2 text-sm"><strong>hont, bet</strong></td><td class="px-3 py-2 text-sm">d → t</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">web, heb</td><td class="px-3 py-2 text-sm"><strong>wep, hep</strong></td><td class="px-3 py-2 text-sm">b → p</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">huis, reis</td><td class="px-3 py-2 text-sm"><strong>huiss, reiss</strong></td><td class="px-3 py-2 text-sm">z → s</td></tr>
            </tbody>
          </table>
        </div>
        <p class="text-sm text-slate-600 dark:text-slate-400">Zodra er een klinker volgt, keert de stem terug: <strong>honden</strong> (d), <strong>huizen</strong> (z), <strong>webben</strong> (b).</p>

        <h3 class="text-lg font-bold mt-6 mb-2">4.5 Overige bijzonderheden</h3>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-indigo-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Letter</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Klank</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Voorbeeld</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm"><strong>r</strong></td><td class="px-3 py-2 text-sm">rollend, keel‑r of Gooise r</td><td class="px-3 py-2 text-sm">rood</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm"><strong>w</strong></td><td class="px-3 py-2 text-sm">zachte v‑achtige klank</td><td class="px-3 py-2 text-sm">water</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm"><strong>j</strong></td><td class="px-3 py-2 text-sm">als Engelse y in <em>yes</em></td><td class="px-3 py-2 text-sm">ja</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm"><strong>sj</strong></td><td class="px-3 py-2 text-sm">als Engelse sh in <em>shoe</em></td><td class="px-3 py-2 text-sm">sjaal, douche</td></tr>
            </tbody>
          </table>
        </div>
      `,
    },
    {
      title: "Belangrijke Klanken",
      body: `
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-5">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-indigo-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Klank</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Omschrijving</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Voorbeeld</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">⚠️ PAS OP</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm"><strong class="text-indigo-600">ei/ij</strong></td><td class="px-3 py-2 text-sm">e + i (glijder)</td><td class="px-3 py-2 text-sm">eind, tijd</td><td class="px-3 py-2 text-sm text-rose-600 font-semibold">Nooit als ai</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm"><strong class="text-indigo-600">ui</strong></td><td class="px-3 py-2 text-sm">u + i (getuite u)</td><td class="px-3 py-2 text-sm">huis, muis</td><td class="px-3 py-2 text-sm text-rose-600 font-semibold">Niet als au of uu</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm"><strong class="text-indigo-600">g/ch</strong></td><td class="px-3 py-2 text-sm">raspende keelklank</td><td class="px-3 py-2 text-sm">goed, lachen</td><td class="px-3 py-2 text-sm text-rose-600 font-semibold">Nooit Engelse g</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm"><strong class="text-indigo-600">sch</strong></td><td class="px-3 py-2 text-sm">s + ch</td><td class="px-3 py-2 text-sm">school</td><td class="px-3 py-2 text-sm text-rose-600 font-semibold">Nooit als sj</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm"><strong class="text-indigo-600">ng</strong></td><td class="px-3 py-2 text-sm">neusklank</td><td class="px-3 py-2 text-sm">zingen</td><td class="px-3 py-2 text-sm text-rose-600 font-semibold">Niet als n+g</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm"><strong class="text-indigo-600">nk</strong></td><td class="px-3 py-2 text-sm">ng + k</td><td class="px-3 py-2 text-sm">bank</td><td class="px-3 py-2 text-sm text-rose-600 font-semibold">Als bang-k</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm"><strong class="text-indigo-600">eu</strong></td><td class="px-3 py-2 text-sm">lange klinker (Frans)</td><td class="px-3 py-2 text-sm">neus, leuk</td><td class="px-3 py-2 text-sm text-rose-600 font-semibold">Niet bewegen, geen ui</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm"><strong class="text-indigo-600">w</strong></td><td class="px-3 py-2 text-sm">zachte v-achtig</td><td class="px-3 py-2 text-sm">water</td><td class="px-3 py-2 text-sm text-rose-600 font-semibold">Niet als Engelse w</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm"><strong class="text-indigo-600">r</strong></td><td class="px-3 py-2 text-sm">rollend / keel / Gooise r</td><td class="px-3 py-2 text-sm">rood</td><td class="px-3 py-2 text-sm text-rose-600 font-semibold">Acceptabel in alle varianten</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm"><strong class="text-indigo-600">j</strong></td><td class="px-3 py-2 text-sm">als Engelse y</td><td class="px-3 py-2 text-sm">ja</td><td class="px-3 py-2 text-sm"></td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm"><strong class="text-indigo-600">sj</strong></td><td class="px-3 py-2 text-sm">als Engelse sh</td><td class="px-3 py-2 text-sm">sjaal, douche</td><td class="px-3 py-2 text-sm"></td></tr>
            </tbody>
          </table>
        </div>
      `,
    },
  ],
  rulesTable: [
    {
      rule: "Open/gesloten lettergreep stuurt de klinkerlengte",
      structure: "Korte klinker → **gesloten** lettergreep (eindigt op medeklinker). Lange klinker → **twee letters** in gesloten lettergreep of **één letter** in open lettergreep.",
      example: "**kat** (kort) – **maan** (lang) – **ma‑nen** (open, lange klank)",
      usage: "Let op: korte klinker in open lettergreep? Dan schrijf je de medeklinker dubbel: kat – katten.",
    },
    {
      rule: "Korte klinker behouden → verdubbel de medeklinker",
      structure: "Wordt een korte klinker gevolgd door een klinker in de volgende lettergreep? Dan moet de medeklinker dubbel om de klinker kort te houden.",
      example: "**kat – katten**, **bed – bedden**, **bom – bommen**",
      usage: "Zonder verdubbeling zou de klinker lang worden (katen, beden, bomen).",
    },
    {
      rule: "Doffe e (sjwa) in zwakke lettergrepen",
      structure: "De letter **e** aan het eind van een woord of in uitgangen als **-en**, **-lijk** wordt uitgesproken als een doffe, onbeklemtoonde e.",
      example: "**de**, **lopen** (klinkt als *lopuh*), **vrolijk** (vroo‑luhk)",
      usage: "Zeg nooit voluit *ee*; slik de e bijna in. Het is de meest relaxte klank van het Nederlands.",
    },
    {
      rule: "ei/ij en au/ou zijn identiek",
      structure: "Beide paren zijn tweeklanken: **ei/ij** = e + i-glide; **au/ou** = a + oe-glide. Ze klinken precies hetzelfde.",
      example: "**eind** = **ijn**, **hout** = **oud**",
      usage: "Verwar ei/ij niet met *ai* (zoals in Engels *main*). Spreek de glide duidelijk uit.",
    },
    {
      rule: "eu is een zuivere, lange klinker",
      structure: "**eu** is een monoftong: lippen getuit, tong in middenpositie. Geen beweging naar een andere klank!",
      example: "**neus**, **deur**, **leuk** (klinkt als Franse *eu* in *peur*)",
      usage: "Laat de klank niet glijden naar *ui* of *u*. Blijf op één klank.",
    },
    {
      rule: "g en ch zijn dezelfde raspende keelklank",
      structure: "Beide worden achter in de keel gevormd met een raspende wrijving. **g** is stemhebbend (stembanden trillen), **ch** is stemloos.",
      example: "**goed** – **lachen**, **ligt** – **licht** (klinken gelijk)",
      usage: "Nooit als Engelse *g* in *good*; oefen met de zaagklank.",
    },
    {
      rule: "sch- = s + ch",
      structure: "De combinatie **sch** bestaat uit een s-klank direct gevolgd door de keelschraap-ch. Geen k-klank!",
      example: "**school** = s-ggg-ool, **schaap** = s-ggg-aap",
      usage: "Oefen: zeg *ssss*, schraap je keel en plak het aan elkaar. Nooit als *sj* of *sk*.",
    },
    {
      rule: "ng is één neusklank, nk = ng + k",
      structure: "**ng** is een nasaal zoals in Engels *sing* (nooit met harde g). **nk** voegt een k toe aan de ng-klank.",
      example: "**ring**, **zingen** – **bank** (klinkt als *bang-k*), **denken**",
      usage: "Zeg *zingen* niet als *zing-gen*. Bij *nk* hoor je *ng-k*, niet *n-k*.",
    },
    {
      rule: "Eindklankverscherping: d→t, b→p, z→s",
      structure: "Aan het woordeinde worden stemhebbende medeklinkers automatisch stemloos uitgesproken.",
      example: "**hond** → *hont*, **web** → *wep*, **huis** → *huiss*",
      usage: "Zodra er een klinker volgt, keert de stem terug: *honden*, *huizen*, *webben*.",
    },
    {
      rule: "w is een zachte v-achtige klank",
      structure: "De Nederlandse **w** is labiodentaal: onderlip tegen boventanden, zonder volledige afsluiting. Lijkt op een v maar zachter, niet zoals Engelse *w* (bilabiaal).",
      example: "**water**, **waar**, **weinig**",
      usage: "Oefen: zeg *v*, maar laat de trilling zachtjes doorgaan zonder hard te wrijven.",
    },
  ],
  callouts: [
    { type: "remember", label: "Regel 1", text: "**Open/gesloten lettergreep stuurt de klinkerlengte.** Gesloten en kort: *kat, bed, pit, pot, put*. Gesloten en lang: *maan, been, wiel, boom, muur*. Open: *ma‑nen, be‑ken, bo‑men* (lange klank met één letter)." },
    { type: "remember", label: "Regel 2", text: "**Korte klinker behouden** → verdubbel de medeklinker: *kat – katten, bed – bedden, bom – bommen*." },
    { type: "remember", label: "Regel 3", text: "**Doffe e (sjwa)** in zwakke lettergrepen; nooit voluit 'e' zeggen." },
    { type: "remember", label: "Regel 4", text: "**ei/ij** en **au/ou** zijn identiek; het zijn **glijders**, geen stilstaande klanken." },
    { type: "remember", label: "Regel 5", text: "**eu** is een zuivere klinker – niet bewegen! (zoals in Frans *peur*)" },
    { type: "remember", label: "Regel 6", text: "**g = ch** – altijd de raspende keelklank." },
    { type: "remember", label: "Regel 7", text: "**sch‑** = s + ch, nooit als Engelse *sh*." },
    { type: "remember", label: "Regel 8", text: "**ng** is één neusklank, **nk** is ng + k." },
    { type: "remember", label: "Regel 9", text: "**Eindklankverscherping:** d→t, b→p, z→s. (bv. *hond* → *hont*, *web* → *wep*, *huis* → *huiss*)." },
    { type: "remember", label: "Regel 10", text: "**w** is zacht (labiodentaal), niet de Engelse *w*." },
  ],
  commonMistakes: [
    { incorrect: "meisje als \"mee‑sje\"", correct: "mei‑sje", explanation: "ei/ij = e + i, geen ee" },
    { incorrect: "huis als \"huus\"", correct: "h‑ui‑s (getuite u + i)", explanation: "ui is een tweeklank, geen uu" },
    { incorrect: "leuk als \"luuk\"", correct: "leuk (zuivere eu)", explanation: "eu is een lange monoftong" },
    { incorrect: "school als \"sjool\"", correct: "s‑ch‑ool", explanation: "sch is s + ch, geen sh" },
    { incorrect: "ring met harde g", correct: "ring (ng‑klank)", explanation: "ng is één nasaal" },
    { incorrect: "hond met hoorbare d", correct: "hont", explanation: "eind‑d wordt t" },
    { incorrect: "web met hoorbare b", correct: "wep", explanation: "eind‑b wordt p" },
    { incorrect: "bomen met korte o", correct: "boo‑men (lange oo)", explanation: "open lettergreep = lange klinker" },
    { incorrect: "bommen met lange oo", correct: "bòm‑men (korte o)", explanation: "dubbel m houdt de klinker kort" },
    { incorrect: "lopen als \"lo‑pèn\"", correct: "lopuh (doffe e)", explanation: "uitgang -en is sjwa" },
    { incorrect: "auto als \"ooto\"", correct: "auw‑to (a + oe)", explanation: "au/ou is een tweeklank" },
    { incorrect: "leeuw als \"leew\"", correct: "lee‑uw (ee + oe)", explanation: "de w‑achtige glide moet hoorbaar zijn" },
    { incorrect: "w als Engelse w", correct: "zachte v‑achtige klank", explanation: "Nederlandse w is labiodentaal, niet bilabiaal" },
    { incorrect: "de, te voluit \"ee\"", correct: "də, tə", explanation: "de doffe e is de sjwa" },
  ],
  review: [
    "**Korte klinkers** in gesloten lettergreep: *kat, bed, pit, pot, put*.",
    "**Lange klinkers** in gesloten lettergreep met dubbel teken: *maan, been, boom*.",
    "**Open lettergreep**: één klinker = lang: *la‑ten, bo‑men*.",
    "**Doffe e** in *de, lopen, vrolijk*.",
    "**ei/ij** en **au/ou** = tweeklanken (glijders).",
    "**ui** = getuite u + i.",
    "**eu** = zuivere, lange klinker.",
    "**g** en **ch** zijn dezelfde raspende keelklank.",
    "**sch‑** = s + ch.",
    "**ng** = één nasaal; **nk** = ng + k.",
    "**Eindklankverscherping**: d→t, b→p, z→s.",
    "**Spelling**: dubbel medeklinker = korte klinker; één medeklinker na open lettergreep = lange klinker.",
  ],
  qa: [
    { question: "Hoe spreek je *hond* uit?", answer: "**hont** (d wordt t)." },
    { question: "Juiste uitspraak van *school*?", answer: "**s‑ch‑ool** (s + keel‑g)." },
    { question: "Welk woord heeft een lange oo?", answer: "**boom**." },
    { question: "Hoe klinkt de *eu* in *neus*?", answer: "als de Franse *eu* in *peur* (zonder glide)." },
    { question: "Hoe spreek je *meisje* correct uit?", answer: "**mei‑sje** (ei = e + i)." },
    { question: "Klank van *ui* in *muis*?", answer: "getuite korte u, dan ie." },
    { question: "Uitspraak van *ringen*?", answer: "**ring‑uh** (ng‑klank + doffe e)." },
    { question: "Waarom is *bomen* met oo en *bommen* met korte o?", answer: "open lettergreep (oo) vs. dubbele medeklinker (ò)." },
    { question: "Juiste uitspraak van *lachen*?", answer: "**la‑ch‑en** met dezelfde ch als in *school*." },
    { question: "Hoe klinkt *web*?", answer: "**wep** (eind‑b wordt p)." },
  ],
};