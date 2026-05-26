import type { GrammarLesson } from "../types";

export const nlGrammar: GrammarLesson[] = [
  // ════════════════════════════════════════════════════════════════
  // LES 1 – Uitspraak & Klanken
  // ════════════════════════════════════════════════════════════════
  {
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
  },
  // ════════════════════════════════════════════════════════════════
  // LES 2 – Zich voorstellen
  // ════════════════════════════════════════════════════════════════
  {
    id: "nl-voorstellen-1",
    title: "Zich voorstellen: naam, leeftijd, woonplaats, nationaliteit",
    level: 1,
    topic: "Spreken & Presenteren",
    body: "Leer hoe je jezelf voorstelt in het Nederlands. Je oefent met je naam, leeftijd, woonplaats en nationaliteit.",
    overview:
      "Hier vind je een **volledig uitgewerkte** les over jezelf voorstellen. Je leert de vier basiszinnen, de bijbehorende werkwoorden, de meest gemaakte fouten en een snelle herhaling. Alles is helder, overzichtelijk en direct in de praktijk te gebruiken.",
    anchorSectionId: "basiszinnen",
    exercises: [],
    timeExpressionsLabel: "Basiszinnen – Vier onderdelen",
    timeExpressions: {
      header: "Onderdeel | Zin | Werkwoord",
      rows: [
        ["Naam", "Ik **heet** [naam].", "heten"],
        ["Naam (alt)", "Ik **ben** [naam].", "zijn"],
        ["Leeftijd", "Ik **ben** [getal] jaar oud.", "zijn"],
        ["Woonplaats", "Ik **woon** in [plaats].", "wonen"],
        ["Herkomst", "Ik **kom uit** [plaats].", "komen uit"],
        ["Nationaliteit", "Ik **ben** [nationaliteit].", "zijn"],
        ["Land", "Ik **kom uit** [land].", "komen uit"],
      ],
    },
    details: [
      {
        title: "Stap 1 – Je naam zeggen",
        body: `
          <div class="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 p-4 rounded-r-lg my-4">
            <h3 class="text-lg font-extrabold text-indigo-700 dark:text-indigo-300 mb-2">🧲 Twee manieren</h3>
            <ul class="space-y-1 list-disc pl-5 text-slate-700 dark:text-slate-300">
              <li><strong>Ik heet ...</strong> is de standaard manier.</li>
              <li><strong>Ik ben ...</strong> is makkelijker en ook goed.</li>
            </ul>
          </div>
          <h3 class="text-lg font-bold mt-4 mb-2">Manier 1: Ik heet ...</h3>
          <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
            <table class="w-full border-collapse">
              <thead>
                <tr class="!bg-indigo-600">
                  <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Persoon</th>
                  <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Vervoeging</th>
                  <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Voorbeeld</th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Ik</td><td class="px-3 py-2 text-sm"><strong>heet</strong></td><td class="px-3 py-2 text-sm">Ik <strong>heet</strong> Mohammed.</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Jij / U</td><td class="px-3 py-2 text-sm"><strong>heet</strong></td><td class="px-3 py-2 text-sm">Jij <strong>heet</strong> Lisa.</td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Hij / Zij</td><td class="px-3 py-2 text-sm"><strong>heet</strong></td><td class="px-3 py-2 text-sm">Hij <strong>heet</strong> Jan.</td></tr>
              </tbody>
            </table>
          </div>
          <h3 class="text-lg font-bold mt-6 mb-2">Manier 2: Ik ben ...</h3>
          <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
            <table class="w-full border-collapse">
              <thead>
                <tr class="!bg-indigo-600">
                  <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Persoon</th>
                  <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Vervoeging</th>
                  <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Voorbeeld</th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Ik</td><td class="px-3 py-2 text-sm"><strong>ben</strong></td><td class="px-3 py-2 text-sm">Ik <strong>ben</strong> Thomas.</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Jij / U</td><td class="px-3 py-2 text-sm"><strong>bent</strong></td><td class="px-3 py-2 text-sm">Jij <strong>bent</strong> Anna.</td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Hij / Zij</td><td class="px-3 py-2 text-sm"><strong>is</strong></td><td class="px-3 py-2 text-sm">Zij <strong>is</strong> Maria.</td></tr>
              </tbody>
            </table>
          </div>
        `,
      },
      {
        title: "Stap 2 – Je leeftijd zeggen",
        body: `
          <div class="bg-rose-50 dark:bg-rose-900/20 border-l-4 border-rose-500 p-4 rounded-r-lg my-4">
            <p class="font-semibold text-rose-700 dark:text-rose-300">
              <strong>Let op:</strong> Gebruik altijd <strong>"jaar"</strong> en nooit "jaren" bij leeftijd.
            </p>
          </div>
          <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
            <table class="w-full border-collapse">
              <thead>
                <tr class="!bg-indigo-600">
                  <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Persoon</th>
                  <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Zin</th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Ik</td><td class="px-3 py-2 text-sm">Ik ben 25 <strong>jaar</strong> oud.</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Jij</td><td class="px-3 py-2 text-sm">Jij bent 30 <strong>jaar</strong>.</td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Hij / Zij</td><td class="px-3 py-2 text-sm">Zij is 18 <strong>jaar</strong> oud.</td></tr>
              </tbody>
            </table>
          </div>
          <p class="text-sm text-slate-600 dark:text-slate-400">Je mag "oud" weglaten. "Ik ben 25 jaar" is ook goed.</p>
        `,
      },
      {
        title: "Stap 3 – Je woonplaats zeggen",
        body: `
          <h3 class="text-lg font-bold mt-4 mb-2">Hier woon ik nu: Ik woon in ...</h3>
          <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
            <table class="w-full border-collapse">
              <thead>
                <tr class="!bg-indigo-600">
                  <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Persoon</th>
                  <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Vervoeging</th>
                  <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Voorbeeld</th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Ik</td><td class="px-3 py-2 text-sm"><strong>woon</strong></td><td class="px-3 py-2 text-sm">Ik <strong>woon</strong> in Amsterdam.</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Jij / U</td><td class="px-3 py-2 text-sm"><strong>woont</strong></td><td class="px-3 py-2 text-sm">Jij <strong>woont</strong> in Rotterdam.</td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Hij / Zij</td><td class="px-3 py-2 text-sm"><strong>woont</strong></td><td class="px-3 py-2 text-sm">Hij <strong>woont</strong> in Den Haag.</td></tr>
              </tbody>
            </table>
          </div>
          <h3 class="text-lg font-bold mt-6 mb-2">Hier kom ik vandaan: Ik kom uit ...</h3>
          <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
            <table class="w-full border-collapse">
              <thead>
                <tr class="!bg-indigo-600">
                  <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Persoon</th>
                  <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Vervoeging</th>
                  <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Voorbeeld</th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Ik</td><td class="px-3 py-2 text-sm"><strong>kom uit</strong></td><td class="px-3 py-2 text-sm">Ik <strong>kom uit</strong> Marokko.</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Jij / U</td><td class="px-3 py-2 text-sm"><strong>komt uit</strong></td><td class="px-3 py-2 text-sm">Jij <strong>komt uit</strong> Turkije.</td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Hij / Zij</td><td class="px-3 py-2 text-sm"><strong>komt uit</strong></td><td class="px-3 py-2 text-sm">Zij <strong>komt uit</strong> België.</td></tr>
              </tbody>
            </table>
          </div>
          <div class="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 rounded-r-lg my-4">
            <p class="font-semibold text-amber-700 dark:text-amber-300">
              <strong>Het voorzetsel:</strong> Ik woon <strong>in</strong> Amsterdam (je bent er nu). Ik kom <strong>uit</strong> Amsterdam (daar kom je vandaan).
            </p>
          </div>
        `,
      },
      {
        title: "Stap 4 – Je nationaliteit zeggen",
        body: `
          <h3 class="text-lg font-bold mt-4 mb-2">Manier 1: Ik ben ... (nationaliteit)</h3>
          <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
            <table class="w-full border-collapse">
              <thead>
                <tr class="!bg-indigo-600">
                  <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Persoon</th>
                  <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Voorbeeld</th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Ik</td><td class="px-3 py-2 text-sm">Ik <strong>ben</strong> Nederlands.</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Jij</td><td class="px-3 py-2 text-sm">Jij <strong>bent</strong> Belgisch.</td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Hij / Zij</td><td class="px-3 py-2 text-sm">Zij <strong>is</strong> Marokkaans.</td></tr>
              </tbody>
            </table>
          </div>
          <h3 class="text-lg font-bold mt-6 mb-2">Manier 2: Ik kom uit ... (land)</h3>
          <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
            <table class="w-full border-collapse">
              <thead>
                <tr class="!bg-indigo-600">
                  <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Persoon</th>
                  <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Voorbeeld</th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Ik</td><td class="px-3 py-2 text-sm">Ik <strong>kom uit</strong> Nederland.</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Jij</td><td class="px-3 py-2 text-sm">Jij <strong>komt uit</strong> België.</td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Hij / Zij</td><td class="px-3 py-2 text-sm">Hij <strong>komt uit</strong> Marokko.</td></tr>
              </tbody>
            </table>
          </div>
        `,
      },
      {
        title: "Nationaliteiten en Landen – Overzicht",
        body: `
          <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-5">
            <table class="w-full border-collapse">
              <thead>
                <tr class="!bg-indigo-600">
                  <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Land</th>
                  <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Nationaliteit</th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Nederland</td><td class="px-3 py-2 text-sm">Nederlands</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">België</td><td class="px-3 py-2 text-sm">Belgisch</td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Frankrijk</td><td class="px-3 py-2 text-sm">Frans</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Duitsland</td><td class="px-3 py-2 text-sm">Duits</td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Engeland</td><td class="px-3 py-2 text-sm">Engels</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Spanje</td><td class="px-3 py-2 text-sm">Spaans</td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Italië</td><td class="px-3 py-2 text-sm">Italiaans</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Polen</td><td class="px-3 py-2 text-sm">Pools</td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Turkije</td><td class="px-3 py-2 text-sm">Turks</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Marokko</td><td class="px-3 py-2 text-sm">Marokkaans</td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Suriname</td><td class="px-3 py-2 text-sm">Surinaams</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">China</td><td class="px-3 py-2 text-sm">Chinees</td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Japan</td><td class="px-3 py-2 text-sm">Japans</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Amerika</td><td class="px-3 py-2 text-sm">Amerikaans</td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Brazilië</td><td class="px-3 py-2 text-sm">Braziliaans</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Egypte</td><td class="px-3 py-2 text-sm">Egyptisch</td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Syrië</td><td class="px-3 py-2 text-sm">Syrisch</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Oekraïne</td><td class="px-3 py-2 text-sm">Oekraïens</td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Rusland</td><td class="px-3 py-2 text-sm">Russisch</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Griekenland</td><td class="px-3 py-2 text-sm">Grieks</td></tr>
              </tbody>
            </table>
          </div>
        `,
      },
      {
        title: "Voorbeeldgesprek",
        body: `
          <div class="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 p-4 rounded-r-lg my-4">
            <p class="text-slate-700 dark:text-slate-300">
              <strong>Lisa:</strong> Hallo! Ik heet Lisa. Ik ben 28 jaar oud. Ik woon in Amsterdam. Ik ben Nederlands. En jij?<br><br>
              <strong>Omar:</strong> Hoi Lisa. Ik ben Omar. Ik kom uit Egypte, maar ik woon nu in Rotterdam. Ik ben 32 jaar.<br><br>
              <strong>Lisa:</strong> Aangenaam! Welkom in Nederland.<br><br>
              <strong>Omar:</strong> Dank je wel!
            </p>
          </div>
        `,
      },
    ],
    rulesTable: [
      {
        rule: "heten – je naam zeggen",
        structure: "Ik **heet** + naam. Jij/U **heet** + naam. Hij/Zij **heet** + naam.",
        example: "Ik **heet** Anna. Jij **heet** Tom. Hij **heet** Jan.",
        usage: "Dit is de standaard manier om je naam te zeggen. Gebruik nooit 'van' na 'heten'.",
      },
      {
        rule: "zijn – naam, leeftijd, nationaliteit",
        structure: "Ik **ben** ... / Jij **bent** ... / Hij/Zij **is** ...",
        example: "Ik **ben** 25 jaar. Jij **bent** Nederlands. Zij **is** Maria.",
        usage: "Het werkwoord 'zijn' gebruik je voor je naam (informeel), leeftijd en nationaliteit.",
      },
      {
        rule: "wonen – je woonplaats",
        structure: "Ik **woon** in + plaats. Jij/U **woont** in + plaats. Hij/Zij **woont** in + plaats.",
        example: "Ik **woon** in Amsterdam. Jij **woont** in Rotterdam.",
        usage: "Gebruik altijd het voorzetsel 'in' bij een stad of land waar je woont.",
      },
      {
        rule: "komen uit – je herkomst",
        structure: "Ik **kom uit** + plaats/land. Jij/U **komt uit** + plaats/land. Hij/Zij **komt uit** + plaats/land.",
        example: "Ik **kom uit** België. Jij **komt uit** Spanje.",
        usage: "Gebruik altijd het voorzetsel 'uit' om aan te geven waar je vandaan komt.",
      },
      {
        rule: "Leeftijd: altijd 'jaar', nooit 'jaren'",
        structure: "Ik ben + getal + **jaar** (oud).",
        example: "Ik ben 25 **jaar** oud. Hij is 30 **jaar**.",
        usage: "Bij leeftijd gebruik je altijd het enkelvoud 'jaar', nooit het meervoud 'jaren'.",
      },
      {
        rule: "Nationaliteit en land",
        structure: "Ik ben + nationaliteit (bijvoeglijk naamwoord). Ik kom uit + land (zelfstandig naamwoord).",
        example: "Ik **ben** Nederlands. Ik **kom uit** Nederland.",
        usage: "Nationaliteit schrijf je met een hoofdletter. Het land ook.",
      },
    ],
    callouts: [
      { type: "remember", label: "Onthoud 1", text: "**Naam zeggen:** Ik **heet** ... (standaard) of Ik **ben** ... (makkelijk). Nooit 'Ik heet **van** ...' zeggen." },
      { type: "remember", label: "Onthoud 2", text: "**Leeftijd:** Altijd **jaar**, nooit **jaren**. 'Ik ben 25 jaar oud.' of 'Ik ben 25 jaar.'" },
      { type: "remember", label: "Onthoud 3", text: "**Woonplaats:** Ik **woon in** + stad. Voorzetsel is altijd **in**." },
      { type: "remember", label: "Onthoud 4", text: "**Herkomst:** Ik **kom uit** + plaats/land. Voorzetsel is altijd **uit**." },
      { type: "remember", label: "Onthoud 5", text: "**Nationaliteit vs. Land:** Ik **ben** Nederlands (bijvoeglijk naamwoord). Ik **kom uit** Nederland (zelfstandig naamwoord)." },
      { type: "remember", label: "Onthoud 6", text: "**Werkwoord 'zijn':** Ik **ben**, jij **bent**, hij/zij **is**. Onregelmatig werkwoord." },
      { type: "remember", label: "Onthoud 7", text: "**Werkwoord 'heten':** Ik **heet**, jij **heet**, hij/zij **heet**. In alle vormen hetzelfde." },
    ],
    commonMistakes: [
      { incorrect: "Ik ben 25 jaren oud.", correct: "Ik ben 25 jaar oud.", explanation: "Bij leeftijd altijd 'jaar', nooit 'jaren'." },
      { incorrect: "Ik heet van Anna.", correct: "Ik heet Anna.", explanation: "'Van' hoort niet bij 'heten'." },
      { incorrect: "Ik ben wonen in Amsterdam.", correct: "Ik woon in Amsterdam.", explanation: "Gebruik één werkwoord, niet twee." },
      { incorrect: "Ik woon op Amsterdam.", correct: "Ik woon in Amsterdam.", explanation: "Het correcte voorzetsel bij steden is 'in'." },
      { incorrect: "Ik kom in Turkije.", correct: "Ik kom uit Turkije.", explanation: "Het correcte voorzetsel bij herkomst is 'uit'." },
      { incorrect: "Ik ben Holland.", correct: "Ik ben Nederlands.", explanation: "Holland is een regio, geen nationaliteit." },
      { incorrect: "Mijn naam is Anna.", correct: "Ik heet Anna.", explanation: "'Mijn naam is' is niet fout, maar 'Ik heet' is natuurlijker." },
    ],
    review: [
      "**Naam:** Ik **heet** [naam] of Ik **ben** [naam].",
      "**Leeftijd:** Ik ben [getal] **jaar** oud. (altijd 'jaar', nooit 'jaren')",
      "**Woonplaats:** Ik **woon in** [plaats]. (voorzetsel 'in')",
      "**Herkomst:** Ik **kom uit** [plaats/land]. (voorzetsel 'uit')",
      "**Nationaliteit:** Ik **ben** [nationaliteit]. (bijvoeglijk naamwoord)",
      "**Land:** Ik **kom uit** [land]. (zelfstandig naamwoord)",
      "**Werkwoorden:** heten (naam), zijn (naam/leeftijd/nationaliteit), wonen (woonplaats), komen uit (herkomst).",
      "**zijn:** Ik ben, jij bent, hij/zij is.",
      "**heten:** Ik heet, jij heet, hij/zij heet.",
      "**wonen:** Ik woon, jij woont, hij/zij woont.",
    ],
    qa: [
      { question: "Hoe zeg je je naam in het Nederlands?", answer: "Ik **heet** [naam] of Ik **ben** [naam]." },
      { question: "Wat is het verschil tussen 'Ik heet' en 'Ik ben'?", answer: "'Ik heet' is de standaard manier. 'Ik ben' is informeler, maar ook correct." },
      { question: "Hoe zeg je je leeftijd?", answer: "Ik ben [getal] **jaar** (oud)." },
      { question: "Waarom zeg je 'jaar' en niet 'jaren'?", answer: "Bij leeftijd gebruik je altijd het enkelvoud 'jaar', nooit het meervoud 'jaren'." },
      { question: "Welk voorzetsel gebruik je bij woonplaats?", answer: "**in**: Ik woon **in** Amsterdam." },
      { question: "Welk voorzetsel gebruik je bij herkomst?", answer: "**uit**: Ik kom **uit** België." },
      { question: "Hoe zeg je je nationaliteit?", answer: "Ik **ben** Nederlands/Belgisch/Marokkaans etc." },
      { question: "Hoe zeg je uit welk land je komt?", answer: "Ik **kom uit** Nederland/België/Marokko etc." },
      { question: "Wat is het verschil tussen 'Ik ben Nederlands' en 'Ik kom uit Nederland'?", answer: "'Ik ben Nederlands' zegt je nationaliteit. 'Ik kom uit Nederland' zegt het land waar je vandaan komt." },
      { question: "Hoe vervoeg je het werkwoord 'zijn'?", answer: "Ik **ben**, jij/u **bent**, hij/zij **is**." },
    ],
  },
  {
    id: "nl-groeten-1",
    title: "Groeten en afscheid nemen (formeel/informeel)",
    level: 1,
    topic: "Presentatie & Vocabulaire",
    body: "Leer hoe je in het Nederlands groet en afscheid neemt. Je leert het verschil tussen formele en informele situaties.",
    overview:
      "Hier vind je een **volledig uitgewerkte** les over groeten en afscheid nemen. Je leert de belangrijkste groeten, afscheidswoorden, tijdsbepalingen, formele en informele situaties, veelgemaakte fouten en een snelle herhaling. Alles is helder, overzichtelijk en direct in de praktijk te gebruiken.",
    anchorSectionId: "basisgroeten",
    exercises: [],
    timeExpressionsLabel: "Basisgroeten – Overzicht",
    timeExpressions: {
      header: "Groet | Wanneer? | Formeel/Informeel",
      rows: [
        ["Hallo", "Altijd", "Beide"],
        ["Hoi", "Altijd", "Informeel"],
        ["Hé", "Altijd", "Informeel"],
        ["Goedemorgen", "Ochtend", "Formeel"],
        ["Goedemiddag", "Middag", "Formeel"],
        ["Goedenavond", "Avond", "Formeel"],
        ["Goedenacht", "Nacht", "Formeel"],
        ["Dag", "Altijd", "Beide"],
      ],
    },
    details: [
      {
        title: "Afscheid nemen",
        body: `
          <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
            <table class="w-full border-collapse">
              <thead>
                <tr class="!bg-indigo-600">
                  <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Afscheid</th>
                  <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Wanneer?</th>
                  <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Formeel/Informeel</th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm"><strong>Doei</strong></td><td class="px-3 py-2 text-sm">Altijd</td><td class="px-3 py-2 text-sm">Informeel</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm"><strong>Doeg</strong></td><td class="px-3 py-2 text-sm">Altijd</td><td class="px-3 py-2 text-sm">Informeel</td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm"><strong>Tot ziens</strong></td><td class="px-3 py-2 text-sm">Altijd</td><td class="px-3 py-2 text-sm">Formeel</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm"><strong>Tot straks</strong></td><td class="px-3 py-2 text-sm">Snel weer</td><td class="px-3 py-2 text-sm">Informeel</td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm"><strong>Tot zo</strong></td><td class="px-3 py-2 text-sm">Heel snel weer</td><td class="px-3 py-2 text-sm">Informeel</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm"><strong>Tot later</strong></td><td class="px-3 py-2 text-sm">Later op de dag</td><td class="px-3 py-2 text-sm">Informeel</td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm"><strong>Tot morgen</strong></td><td class="px-3 py-2 text-sm">Morgen</td><td class="px-3 py-2 text-sm">Informeel</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm"><strong>Dag</strong></td><td class="px-3 py-2 text-sm">Altijd</td><td class="px-3 py-2 text-sm">Beide</td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm"><strong>Goedenavond</strong></td><td class="px-3 py-2 text-sm">Avond</td><td class="px-3 py-2 text-sm">Formeel</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm"><strong>Goedenacht</strong></td><td class="px-3 py-2 text-sm">Slapen gaan</td><td class="px-3 py-2 text-sm">Formeel</td></tr>
              </tbody>
            </table>
          </div>
        `,
      },
      {
        title: "Formeel vs Informeel",
        body: `
          <div class="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 p-4 rounded-r-lg my-4">
            <h3 class="text-lg font-extrabold text-indigo-700 dark:text-indigo-300 mb-2">🧲 Regel</h3>
            <ul class="space-y-1 list-disc pl-5 text-slate-700 dark:text-slate-300">
              <li>Bij <strong>onbekenden</strong>, <strong>oudere mensen</strong> of in <strong>zakelijke situaties</strong> gebruik je de formele vorm.</li>
              <li>Bij <strong>vrienden</strong>, <strong>familie</strong> en <strong>kinderen</strong> gebruik je de informele vorm.</li>
            </ul>
          </div>
          <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
            <table class="w-full border-collapse">
              <thead>
                <tr class="!bg-indigo-600">
                  <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Situatie</th>
                  <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Formeel</th>
                  <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Informeel</th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Groet ochtend</td><td class="px-3 py-2 text-sm">Goedemorgen</td><td class="px-3 py-2 text-sm">Hoi / Hallo</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Groet middag</td><td class="px-3 py-2 text-sm">Goedemiddag</td><td class="px-3 py-2 text-sm">Hoi / Hallo</td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Groet avond</td><td class="px-3 py-2 text-sm">Goedenavond</td><td class="px-3 py-2 text-sm">Hoi / Hallo</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Afscheid</td><td class="px-3 py-2 text-sm">Tot ziens</td><td class="px-3 py-2 text-sm">Doei / Doeg</td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Afscheid</td><td class="px-3 py-2 text-sm">Dag</td><td class="px-3 py-2 text-sm">Tot later / Tot straks</td></tr>
              </tbody>
            </table>
          </div>
        `,
      },
      {
        title: "Tijden van de dag",
        body: `
          <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
            <table class="w-full border-collapse">
              <thead>
                <tr class="!bg-indigo-600">
                  <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Tijd</th>
                  <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Groet</th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Ochtend (06:00 - 12:00)</td><td class="px-3 py-2 text-sm"><strong>Goedemorgen</strong></td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Middag (12:00 - 18:00)</td><td class="px-3 py-2 text-sm"><strong>Goedemiddag</strong></td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Avond (18:00 - 00:00)</td><td class="px-3 py-2 text-sm"><strong>Goedenavond</strong></td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Nacht (00:00 - 06:00)</td><td class="px-3 py-2 text-sm"><strong>Goedenacht</strong></td></tr>
              </tbody>
            </table>
          </div>
        `,
      },
      {
        title: "Hoe gaat het?",
        body: `
          <h3 class="text-lg font-bold mt-4 mb-2">Vragen</h3>
          <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
            <table class="w-full border-collapse">
              <thead>
                <tr class="!bg-indigo-600">
                  <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Formeel</th>
                  <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Informeel</th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Hoe gaat het met u?</td><td class="px-3 py-2 text-sm">Hoe gaat het?</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Hoe maakt u het?</td><td class="px-3 py-2 text-sm">Hoe is het?</td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Alles goed?</td><td class="px-3 py-2 text-sm">Alles goed?</td></tr>
              </tbody>
            </table>
          </div>
          <h3 class="text-lg font-bold mt-6 mb-2">Antwoorden</h3>
          <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
            <table class="w-full border-collapse">
              <thead>
                <tr class="!bg-indigo-600">
                  <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Nederlands</th>
                  <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Betekenis</th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm"><strong>Goed</strong></td><td class="px-3 py-2 text-sm">Standaard antwoord</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm"><strong>Prima</strong></td><td class="px-3 py-2 text-sm">Heel goed</td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm"><strong>Ja hoor</strong></td><td class="px-3 py-2 text-sm">Ja, het gaat goed</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm"><strong>Het gaat wel</strong></td><td class="px-3 py-2 text-sm">Gaat, niet perfect</td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm"><strong>Niet zo goed</strong></td><td class="px-3 py-2 text-sm">Gaat slecht</td></tr>
              </tbody>
            </table>
          </div>
        `,
      },
      {
        title: "Voorbeeldgesprekken",
        body: `
          <div class="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 p-4 rounded-r-lg my-4">
            <p class="text-slate-700 dark:text-slate-300">
              <strong>Formeel (op het werk):</strong><br><br>
              <strong>Meneer Jansen:</strong> Goedemorgen mevrouw De Vries.<br>
              <strong>Mevrouw De Vries:</strong> Goedemorgen meneer Jansen. Hoe gaat het met u?<br>
              <strong>Meneer Jansen:</strong> Goed, dank u. En met u?<br>
              <strong>Mevrouw De Vries:</strong> Ook goed, dank u. Tot ziens!<br>
              <strong>Meneer Jansen:</strong> Tot ziens!
            </p>
          </div>
          <div class="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 p-4 rounded-r-lg my-4">
            <p class="text-slate-700 dark:text-slate-300">
              <strong>Informeel (op straat):</strong><br><br>
              <strong>Lisa:</strong> Hoi Tom!<br>
              <strong>Tom:</strong> Hé Lisa! Hoe gaat het?<br>
              <strong>Lisa:</strong> Goed! En met jou?<br>
              <strong>Tom:</strong> Ook goed. Ga je mee?<br>
              <strong>Lisa:</strong> Ja, leuk! Tot straks!<br>
              <strong>Tom:</strong> Doei!
            </p>
          </div>
        `,
      },
    ],
    rulesTable: [
      {
        rule: "Schrijfwijze",
        structure: "**Goedemorgen**, **Goedemiddag** en **Goedenavond** schrijf je **aan elkaar**, niet los.",
        example: "Fout: *Goede morgen* – Correct: **Goedemorgen**",
        usage: "Dit geldt voor alle samengestelde tijdsgroeten in het Nederlands.",
      },
      {
        rule: "Formeel vs Informeel",
        structure: "Gebruik **u** in formele situaties en **jij/je** in informele situaties.",
        example: "Formeel: Hoe gaat het met **u**? – Informeel: Hoe gaat het met **jou**?",
        usage: "Let op: bij formele situaties gebruik je ook de formele groet.",
      },
      {
        rule: "Afscheid bij slapen gaan",
        structure: "Gebruik **Goedenacht** of **Welterusten** als je gaat slapen.",
        example: "**Goedenacht**, slaap lekker! – **Welterusten**!",
        usage: "Deze woorden gebruik je alleen 's avonds of 's nachts bij het slapengaan.",
      },
      {
        rule: "Tot straks vs Tot later vs Tot zo",
        structure: "**Tot straks** = minuten tot een uur. **Tot later** = later op de dag. **Tot zo** = heel snel.",
        example: "**Tot straks** in de les! – **Tot later** op het feest! – **Tot zo** bij de bus!",
        usage: "Gebruik de juiste vorm afhankelijk van hoe snel je iemand weer ziet.",
      },
    ],
    callouts: [
      { type: "remember", label: "Onthoud 1", text: "Gebruik **Goedemorgen**, **Goedemiddag**, **Goedenavond** bij formele situaties. Schrijf ze **aan elkaar**." },
      { type: "remember", label: "Onthoud 2", text: "Gebruik **Hoi**, **Hallo**, **Hé** bij informele situaties." },
      { type: "remember", label: "Onthoud 3", text: "Formeel afscheid: **Tot ziens** of **Dag**. Informeel afscheid: **Doei**, **Doeg** of **Tot later**." },
      { type: "remember", label: "Onthoud 4", text: "Gebruik **u** bij formele vragen. Gebruik **jij/je** bij informele vragen." },
      { type: "remember", label: "Onthoud 5", text: "**Tot straks** = snel. **Tot later** = later op de dag. **Tot zo** = heel snel." },
      { type: "remember", label: "Onthoud 6", text: "**Goedenacht** of **Welterusten** gebruik je alleen als je gaat slapen." },
    ],
    commonMistakes: [
      { incorrect: "Goede morgen", correct: "Goedemorgen", explanation: "Aan elkaar schrijven, niet los." },
      { incorrect: "Goede middag", correct: "Goedemiddag", explanation: "Aan elkaar schrijven, niet los." },
      { incorrect: "Goede avond", correct: "Goedenavond", explanation: "Aan elkaar schrijven, niet los." },
      { incorrect: "Tot strakjes", correct: "Tot straks", explanation: "\"Straks\" niet verkleinen." },
      { incorrect: "Tot zometeen", correct: "Tot zo", explanation: "\"Tot zo\" is de correcte vorm." },
      { incorrect: "Hallo bij formele situatie", correct: "Goedemorgen", explanation: "Gebruik de juiste tijdsgroet voor formele situaties." },
      { incorrect: "Doei bij formele situatie", correct: "Tot ziens", explanation: "\"Doei\" is te informeel voor formele situaties." },
    ],
    review: [
      "**Hallo** en **Hoi** gebruik je in informele situaties.",
      "**Goedemorgen**, **Goedemiddag**, **Goedenavond** gebruik je in formele situaties.",
      "**Doei**, **Doeg**, **Tot later** en **Tot straks** zijn informeel afscheid.",
      "**Tot ziens** en **Dag** zijn formeel afscheid.",
      "**Goedenacht** en **Welterusten** gebruik je bij het slapen gaan.",
      "Vraag **Hoe gaat het?** (informeel) of **Hoe gaat het met u?** (formeel).",
      "Antwoord met **Goed**, **Prima** of **Ja hoor**.",
      "Schrijf tijdsgroeten **aan elkaar**.",
    ],
    qa: [
      { question: "Wat zeg je als je iemand 's ochtends formeel begroet?", answer: "**Goedemorgen**." },
      { question: "Wat is het verschil tussen \"Hoi\" en \"Goedemiddag\"?", answer: "\"Hoi\" is informeel, \"Goedemiddag\" is formeel." },
      { question: "Hoe neem je informeel afscheid?", answer: "**Doei**, **Doeg** of **Tot later**." },
      { question: "Hoe neem je formeel afscheid?", answer: "**Tot ziens** of **Dag**." },
      { question: "Wat zeg je 's avonds als groet?", answer: "**Goedenavond**." },
      { question: "Schrijf je \"goedemorgen\" los of aan elkaar?", answer: "**Aan elkaar**: Goedemorgen." },
      { question: "Hoe vraag je formeel hoe het met iemand gaat?", answer: "**Hoe gaat het met u?**" },
      { question: "Hoe vraag je informeel hoe het met iemand gaat?", answer: "**Hoe gaat het?** of **Hoe is het?**" },
      { question: "Wat antwoord je op \"Hoe gaat het?\"", answer: "**Goed**, **Prima** of **Ja hoor**." },
      { question: "Wanneer zeg je \"Goedenacht\"?", answer: "Als je gaat slapen of iemand welterusten wenst." },
      { question: "Wat is het verschil tussen \"Tot straks\" en \"Tot later\"?", answer: "\"Tot straks\" is voor binnen enkele minuten, \"Tot later\" is voor later op de dag." },
      { question: "Hoe zeg je \"Goodbye\" in het Nederlands?", answer: "**Tot ziens** (formeel) of **Doei** (informeel)." },
    ],
  },
   {
    id: "nl-cijfers-1",
    title: "Cijfers, Getallen en Datum",
    level: 1,
    topic: "Vocabulaire",
    body: "Leer hoe je in het Nederlands telt, getallen uitspreekt en de datum zegt. Je leert hoofdtelwoorden, rangtelwoorden, dagen, maanden en hoe je een datum correct uitspreekt en schrijft.",
    overview:
      "Hier vind je een **volledig uitgewerkte** les over cijfers, getallen en datum. Je leert tellen van 0 tot 1.000.000, rangtelwoorden zoals eerste en tweede, de dagen van de week, de maanden van het jaar, en hoe je de datum zegt. Alles is helder, overzichtelijk en direct in de praktijk te gebruiken.",
    anchorSectionId: "hoofdtelwoorden",
    exercises: [],
    timeExpressionsLabel: "Tellen 0–20",
    timeExpressions: {
      header: "Getal | Nederlands | Uitspraak-tip",
      rows: [
        ["0", "<strong>nul</strong>", "korte u"],
        ["1", "<strong>één</strong>", "lange ee met accent"],
        ["2", "<strong>twee</strong>", "lange ee"],
        ["3", "<strong>drie</strong>", "lange ie"],
        ["4", "<strong>vier</strong>", "lange ie"],
        ["5", "<strong>vijf</strong>", "ei/ij-klank"],
        ["6", "<strong>zes</strong>", "korte e"],
        ["7", "<strong>zeven</strong>", "lange ee"],
        ["8", "<strong>acht</strong>", "harde ch"],
        ["9", "<strong>negen</strong>", "lange ee"],
        ["10", "<strong>tien</strong>", "lange ie"],
        ["11", "<strong>elf</strong>", "korte e"],
        ["12", "<strong>twaalf</strong>", "lange aa"],
        ["13", "<strong>dertien</strong>", "klemtoon op tien"],
        ["14", "<strong>veertien</strong>", "klemtoon op tien"],
        ["15", "<strong>vijftien</strong>", "klemtoon op tien"],
        ["16", "<strong>zestien</strong>", "klemtoon op tien"],
        ["17", "<strong>zeventien</strong>", "klemtoon op tien"],
        ["18", "<strong>achttien</strong>", "klemtoon op tien"],
        ["19", "<strong>negentien</strong>", "klemtoon op tien"],
        ["20", "<strong>twintig</strong>", "klemtoon op twin"],
      ],
    },
    details: [
      {
        title: "21 tot 100 – De eenheid komt vóór de tientallen",
        body: `
          <div class="bg-rose-50 dark:bg-rose-900/20 border-l-4 border-rose-500 p-4 rounded-r-lg my-4">
            <p class="font-semibold text-rose-700 dark:text-rose-300">
              <strong>⚠️ PAS OP:</strong> In het Nederlands zeg je eerst de <strong>eenheid</strong>, dan pas het <strong>tiental</strong>. En je gebruikt <strong>en</strong> ertussen. Alles schrijf je <strong>aan elkaar</strong>. Dit is precies andersom dan in het Engels!
            </p>
          </div>
          <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
            <table class="w-full border-collapse">
              <thead>
                <tr class="!bg-indigo-600">
                  <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Getal</th>
                  <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Nederlands</th>
                  <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Letterlijk</th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">21</td><td class="px-3 py-2 text-sm"><strong>éénentwintig</strong></td><td class="px-3 py-2 text-sm">één-en-twintig</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">22</td><td class="px-3 py-2 text-sm"><strong>tweeëntwintig</strong></td><td class="px-3 py-2 text-sm">twee-en-twintig</td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">23</td><td class="px-3 py-2 text-sm"><strong>drieëntwintig</strong></td><td class="px-3 py-2 text-sm">drie-en-twintig</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">30</td><td class="px-3 py-2 text-sm"><strong>dertig</strong></td><td class="px-3 py-2 text-sm">der-tig</td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">40</td><td class="px-3 py-2 text-sm"><strong>veertig</strong></td><td class="px-3 py-2 text-sm">veer-tig</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">50</td><td class="px-3 py-2 text-sm"><strong>vijftig</strong></td><td class="px-3 py-2 text-sm">vijf-tig</td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">60</td><td class="px-3 py-2 text-sm"><strong>zestig</strong></td><td class="px-3 py-2 text-sm">zes-tig</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">70</td><td class="px-3 py-2 text-sm"><strong>zeventig</strong></td><td class="px-3 py-2 text-sm">zeven-tig</td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">80</td><td class="px-3 py-2 text-sm"><strong>tachtig</strong></td><td class="px-3 py-2 text-sm">tach-tig</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">90</td><td class="px-3 py-2 text-sm"><strong>negentig</strong></td><td class="px-3 py-2 text-sm">negen-tig</td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">100</td><td class="px-3 py-2 text-sm"><strong>honderd</strong></td><td class="px-3 py-2 text-sm">hon-derd</td></tr>
              </tbody>
            </table>
          </div>
        `,
      },
      {
        title: "Tientallen – Overzicht",
        body: `
          <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
            <table class="w-full border-collapse">
              <thead>
                <tr class="!bg-indigo-600">
                  <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Getal</th>
                  <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Nederlands</th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">10</td><td class="px-3 py-2 text-sm"><strong>tien</strong></td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">20</td><td class="px-3 py-2 text-sm"><strong>twintig</strong></td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">30</td><td class="px-3 py-2 text-sm"><strong>dertig</strong></td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">40</td><td class="px-3 py-2 text-sm"><strong>veertig</strong></td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">50</td><td class="px-3 py-2 text-sm"><strong>vijftig</strong></td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">60</td><td class="px-3 py-2 text-sm"><strong>zestig</strong></td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">70</td><td class="px-3 py-2 text-sm"><strong>zeventig</strong></td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">80</td><td class="px-3 py-2 text-sm"><strong>tachtig</strong></td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">90</td><td class="px-3 py-2 text-sm"><strong>negentig</strong></td></tr>
              </tbody>
            </table>
          </div>
        `,
      },
      {
        title: "100 tot 10.000 en Grote Getallen",
        body: `
          <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
            <table class="w-full border-collapse">
              <thead>
                <tr class="!bg-indigo-600">
                  <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Getal</th>
                  <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Nederlands</th>
                  <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Regel</th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">100</td><td class="px-3 py-2 text-sm"><strong>honderd</strong></td><td class="px-3 py-2 text-sm"></td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">101</td><td class="px-3 py-2 text-sm"><strong>honderdeen</strong></td><td class="px-3 py-2 text-sm">honderd + één</td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">200</td><td class="px-3 py-2 text-sm"><strong>tweehonderd</strong></td><td class="px-3 py-2 text-sm">twee + honderd</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">1000</td><td class="px-3 py-2 text-sm"><strong>duizend</strong></td><td class="px-3 py-2 text-sm"></td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">2000</td><td class="px-3 py-2 text-sm"><strong>tweeduizend</strong></td><td class="px-3 py-2 text-sm">twee + duizend</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">10.000</td><td class="px-3 py-2 text-sm"><strong>tienduizend</strong></td><td class="px-3 py-2 text-sm">tien + duizend</td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">100.000</td><td class="px-3 py-2 text-sm"><strong>honderdduizend</strong></td><td class="px-3 py-2 text-sm"></td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">1.000.000</td><td class="px-3 py-2 text-sm"><strong>een miljoen</strong></td><td class="px-3 py-2 text-sm"></td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">1.000.000.000</td><td class="px-3 py-2 text-sm"><strong>een miljard</strong></td><td class="px-3 py-2 text-sm"></td></tr>
              </tbody>
            </table>
          </div>
        `,
      },
      {
        title: "IJzeren Regels voor Hoofdtelwoorden",
        body: `
          <div class="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 p-4 rounded-r-lg my-4">
            <h3 class="text-lg font-extrabold text-indigo-700 dark:text-indigo-300 mb-2">🧲 Regels</h3>
            <ul class="space-y-1 list-disc pl-5 text-slate-700 dark:text-slate-300">
              <li><strong>Regel 1:</strong> De <strong>eenheid</strong> komt vóór het <strong>tiental</strong>, met <strong>en</strong> ertussen. 21 = <strong>éénentwintig</strong>, 47 = <strong>zevenenveertig</strong>.</li>
              <li><strong>Regel 2:</strong> Alles schrijf je <strong>aan elkaar</strong>. Geen spaties! <strong>drieëntwintig</strong> (NIET: drie en twintig).</li>
              <li><strong>Regel 3:</strong> <strong>Trema (¨)</strong> bij klinkerbotsing: <strong>tweeëntwintig</strong>, <strong>drieëndertig</strong>.</li>
              <li><strong>Regel 4:</strong> De <strong>n</strong> van zeven en negen blijft hoorbaar: <strong>zevenenveertig</strong>, <strong>negenennegentig</strong>.</li>
              <li><strong>Regel 5:</strong> Honderd en duizend blijven <strong>enkelvoud</strong>: <strong>driehonderd</strong> (niet: driehonderden).</li>
            </ul>
          </div>
          <div class="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 rounded-r-lg my-4">
            <p class="font-semibold text-amber-700 dark:text-amber-300">
              <strong>⚠️ PAS OP:</strong> Het accent op <strong>één</strong> (getal) vs <strong>een</strong> (lidwoord).<br>
              Ik heb <strong>één</strong> broer. (getal) | Ik heb <strong>een</strong> boek. (lidwoord)
            </p>
          </div>
        `,
      },
      {
        title: "Rangtelwoorden (eerste, tweede, derde)",
        body: `
          <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
            <table class="w-full border-collapse">
              <thead>
                <tr class="!bg-indigo-600">
                  <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Getal</th>
                  <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Hoofdtelwoord</th>
                  <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Rangtelwoord</th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">1</td><td class="px-3 py-2 text-sm">één</td><td class="px-3 py-2 text-sm"><strong>eerste</strong></td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">2</td><td class="px-3 py-2 text-sm">twee</td><td class="px-3 py-2 text-sm"><strong>tweede</strong></td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">3</td><td class="px-3 py-2 text-sm">drie</td><td class="px-3 py-2 text-sm"><strong>derde</strong></td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">4</td><td class="px-3 py-2 text-sm">vier</td><td class="px-3 py-2 text-sm"><strong>vierde</strong></td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">8</td><td class="px-3 py-2 text-sm">acht</td><td class="px-3 py-2 text-sm"><strong>achtste</strong></td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">12</td><td class="px-3 py-2 text-sm">twaalf</td><td class="px-3 py-2 text-sm"><strong>twaalfde</strong></td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">20</td><td class="px-3 py-2 text-sm">twintig</td><td class="px-3 py-2 text-sm"><strong>twintigste</strong></td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">100</td><td class="px-3 py-2 text-sm">honderd</td><td class="px-3 py-2 text-sm"><strong>honderdste</strong></td></tr>
              </tbody>
            </table>
          </div>
          <div class="bg-rose-50 dark:bg-rose-900/20 border-l-4 border-rose-500 p-4 rounded-r-lg my-4">
            <p class="font-semibold text-rose-700 dark:text-rose-300">
              <strong>⚠️ PAS OP:</strong> Drie uitzonderingen:<br>
              1 → <strong>eerste</strong> (niet: eende) | 3 → <strong>derde</strong> (niet: driede) | 8 → <strong>achtste</strong> (niet: achtde)
            </p>
          </div>
          <p class="text-sm text-slate-600 dark:text-slate-400 mt-4">
            <strong>Regel:</strong> Meestal voeg je <strong>-de</strong> toe (tweede, vierde, zesde).<br>
            Bij 8 en getallen boven 19 gebruik je <strong>-ste</strong> (achtste, twintigste, honderdste).
          </p>
          <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
            <table class="w-full border-collapse">
              <thead>
                <tr class="!bg-indigo-600">
                  <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Voluit</th>
                  <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Kort</th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">eerste</td><td class="px-3 py-2 text-sm"><strong>1e</strong></td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">tweede</td><td class="px-3 py-2 text-sm"><strong>2e</strong></td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">derde</td><td class="px-3 py-2 text-sm"><strong>3e</strong></td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">achtste</td><td class="px-3 py-2 text-sm"><strong>8ste</strong></td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">twintigste</td><td class="px-3 py-2 text-sm"><strong>20ste</strong></td></tr>
              </tbody>
            </table>
          </div>
        `,
      },
      {
        title: "Dagen van de Week & Maanden",
        body: `
          <div class="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 rounded-r-lg my-4">
            <p class="font-semibold text-amber-700 dark:text-amber-300">
              <strong>⚠️ PAS OP:</strong> Dagen en maanden schrijf je met een <strong>kleine letter</strong>! Geen hoofdletter! Dit is anders dan in het Engels.
            </p>
          </div>
          <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
            <table class="w-full border-collapse">
              <thead>
                <tr class="!bg-indigo-600">
                  <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Dag</th>
                  <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Nederlands</th>
                  <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Afkorting</th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Maandag</td><td class="px-3 py-2 text-sm"><strong>maandag</strong></td><td class="px-3 py-2 text-sm">ma</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Dinsdag</td><td class="px-3 py-2 text-sm"><strong>dinsdag</strong></td><td class="px-3 py-2 text-sm">di</td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Woensdag</td><td class="px-3 py-2 text-sm"><strong>woensdag</strong></td><td class="px-3 py-2 text-sm">wo</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Donderdag</td><td class="px-3 py-2 text-sm"><strong>donderdag</strong></td><td class="px-3 py-2 text-sm">do</td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Vrijdag</td><td class="px-3 py-2 text-sm"><strong>vrijdag</strong></td><td class="px-3 py-2 text-sm">vr</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Zaterdag</td><td class="px-3 py-2 text-sm"><strong>zaterdag</strong></td><td class="px-3 py-2 text-sm">za</td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Zondag</td><td class="px-3 py-2 text-sm"><strong>zondag</strong></td><td class="px-3 py-2 text-sm">zo</td></tr>
              </tbody>
            </table>
          </div>
          <h3 class="text-lg font-bold mt-6 mb-2">Maanden van het Jaar</h3>
          <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
            <table class="w-full border-collapse">
              <thead>
                <tr class="!bg-indigo-600">
                  <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Maand</th>
                  <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Nederlands</th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Januari</td><td class="px-3 py-2 text-sm"><strong>januari</strong></td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Februari</td><td class="px-3 py-2 text-sm"><strong>februari</strong></td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Maart</td><td class="px-3 py-2 text-sm"><strong>maart</strong></td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">April</td><td class="px-3 py-2 text-sm"><strong>april</strong></td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Mei</td><td class="px-3 py-2 text-sm"><strong>mei</strong></td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Juni</td><td class="px-3 py-2 text-sm"><strong>juni</strong></td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Juli</td><td class="px-3 py-2 text-sm"><strong>juli</strong></td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Augustus</td><td class="px-3 py-2 text-sm"><strong>augustus</strong></td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">September</td><td class="px-3 py-2 text-sm"><strong>september</strong></td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Oktober</td><td class="px-3 py-2 text-sm"><strong>oktober</strong></td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">November</td><td class="px-3 py-2 text-sm"><strong>november</strong></td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">December</td><td class="px-3 py-2 text-sm"><strong>december</strong></td></tr>
              </tbody>
            </table>
          </div>
        `,
      },
      {
        title: "De Datum Zeggen & Jaartallen",
        body: `
          <div class="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 p-4 rounded-r-lg my-4">
            <h3 class="text-lg font-extrabold text-indigo-700 dark:text-indigo-300 mb-2">📅 Datum zeggen</h3>
            <p class="text-slate-700 dark:text-slate-300">In spreektaal gebruik je het <strong>gewone hoofdtelwoord</strong>:</p>
            <ul class="space-y-1 list-disc pl-5 text-slate-700 dark:text-slate-300">
              <li>1 mei = <strong>één mei</strong></li>
              <li>5 december = <strong>vijf december</strong></li>
              <li>31 december = <strong>éénendertig december</strong></li>
            </ul>
            <p class="text-slate-700 dark:text-slate-300 mt-2">In officiële taal: <strong>de eerste mei</strong>, <strong>de vijfde december</strong>.</p>
          </div>
          <h3 class="text-lg font-bold mt-6 mb-2">Voorzetsels bij tijd en datum</h3>
          <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
            <table class="w-full border-collapse">
              <thead>
                <tr class="!bg-indigo-600">
                  <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Voorzetsel</th>
                  <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Gebruik</th>
                  <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Voorbeeld</th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm"><strong>op</strong></td><td class="px-3 py-2 text-sm">bij een specifieke dag of datum</td><td class="px-3 py-2 text-sm"><strong>op</strong> maandag, <strong>op</strong> 5 mei</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm"><strong>in</strong></td><td class="px-3 py-2 text-sm">bij een maand, seizoen of jaar</td><td class="px-3 py-2 text-sm"><strong>in</strong> januari, <strong>in</strong> 2024</td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm"><strong>om</strong></td><td class="px-3 py-2 text-sm">bij een specifieke tijd</td><td class="px-3 py-2 text-sm"><strong>om</strong> 8 uur, <strong>om</strong> half 3</td></tr>
              </tbody>
            </table>
          </div>
          <h3 class="text-lg font-bold mt-6 mb-2">Jaartallen uitspreken</h3>
          <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
            <table class="w-full border-collapse">
              <thead>
                <tr class="!bg-indigo-600">
                  <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Jaar</th>
                  <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Uitspraak</th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">1985</td><td class="px-3 py-2 text-sm"><strong>negentien vijfentachtig</strong></td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">2000</td><td class="px-3 py-2 text-sm"><strong>tweeduizend</strong></td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">2010</td><td class="px-3 py-2 text-sm"><strong>tweeduizend tien</strong> of <strong>twintig tien</strong></td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">2024</td><td class="px-3 py-2 text-sm"><strong>tweeduizend vierentwintig</strong></td></tr>
              </tbody>
            </table>
          </div>
        `,
      },
    ],
    rulesTable: [
      {
        rule: "Eenheid vóór tiental bij getallen boven 20",
        structure: "eenheid + **en** + tiental, alles **aan elkaar** geschreven",
        example: "21 = **éénentwintig**, 47 = **zevenenveertig**, 83 = **drieëntachtig**",
        usage: "Dit is precies andersom dan in het Engels! Oefen: 25 = vijfentwintig, 68 = achtenzestig.",
      },
      {
        rule: "Trema bij klinkerbotsing",
        structure: "Als twee klinkers apart worden uitgesproken, komt er een trema (¨) op de tweede klinker.",
        example: "**tweeëntwintig**, **drieëndertig**, **zeeën**",
        usage: "Geen trema nodig bij éénentwintig (e en t botsen niet als klinkers).",
      },
      {
        rule: "Rangtelwoorden: -de of -ste",
        structure: "Meestal **-de** (tweede, vierde). Bij 8 en boven 19: **-ste** (achtste, twintigste).",
        example: "twee → **tweede**, acht → **achtste**, twintig → **twintigste**",
        usage: "Uitzonderingen: **eerste** (1), **derde** (3), **achtste** (8).",
      },
      {
        rule: "Dagen en maanden met kleine letter",
        structure: "Dagen en maanden schrijf je in het Nederlands met een **kleine letter**.",
        example: "**maandag**, **dinsdag**, **januari**, **februari**",
        usage: "Dit is anders dan in het Engels! Fout: Maandag, Januari.",
      },
      {
        rule: "Voorzetsels: op, in, om",
        structure: "**op** + dag/datum | **in** + maand/jaar | **om** + tijdstip",
        example: "**op** maandag, **in** januari, **om** 8 uur",
        usage: "Nooit: 'in maandag' of 'op januari'!",
      },
      {
        rule: "één (getal) vs een (lidwoord)",
        structure: "**één** met accenten = getal 1. **een** zonder accent = lidwoord.",
        example: "Ik heb **één** broer. vs Ik heb **een** boek.",
        usage: "In samengestelde woorden: **éénentwintig** of **eenentwintig** (beide goed).",
      },
      {
        rule: "Jaartallen uitspreken",
        structure: "Tot 2000: in **paren**. Vanaf 2000: **tweeduizend** + jaartal.",
        example: "1985 = **negentien vijfentachtig** | 2024 = **tweeduizend vierentwintig**",
        usage: "2000 = tweeduizend, 2005 = tweeduizend vijf.",
      },
    ],
    callouts: [
      {
        type: "remember",
        label: "Onthoud 1",
        text: "Bij getallen boven 20: **eenheid** + **en** + **tiental**, aan elkaar: **éénentwintig, drieënveertig, achtennegentig**.",
      },
      {
        type: "remember",
        label: "Onthoud 2",
        text: "Dagen en maanden met **kleine letter**: maandag, dinsdag, januari, februari. ⚠️ PAS OP: anders dan in het Engels!",
      },
      {
        type: "remember",
        label: "Onthoud 3",
        text: "Rangtelwoorden: meestal **-de** (tweede, vierde). Uitzonderingen: **eerste** (1), **derde** (3), **achtste** (8). Boven 19: **-ste** (twintigste).",
      },
      {
        type: "remember",
        label: "Onthoud 4",
        text: "Datum in spreektaal: **vijf mei**. Officieel: **de vijfde mei**.",
      },
      {
        type: "remember",
        label: "Onthoud 5",
        text: "Voorzetsels: **op** + dag/datum, **in** + maand/jaar, **om** + tijdstip.",
      },
      {
        type: "remember",
        label: "Onthoud 6",
        text: "**één** met accent = getal 1. **een** zonder accent = lidwoord.",
      },
      {
        type: "remember",
        label: "Onthoud 7",
        text: "Jaartallen tot 2000 in paren: 1985 = **negentien vijfentachtig**. Vanaf 2000: **tweeduizend** + jaartal.",
      },
    ],
    commonMistakes: [
      { incorrect: "twintig-één", correct: "éénentwintig", explanation: "De eenheid komt vóór het tiental, met en" },
      { incorrect: "vijftig-zeven", correct: "zevenenvijftig", explanation: "Eerst de eenheid, dan het tiental" },
      { incorrect: "drie en twintig", correct: "drieëntwintig", explanation: "Alles aan elkaar schrijven, met trema" },
      { incorrect: "Maandag (met hoofdletter)", correct: "maandag", explanation: "Dagen schrijf je met een kleine letter" },
      { incorrect: "Januari (met hoofdletter)", correct: "januari", explanation: "Maanden schrijf je met een kleine letter" },
      { incorrect: "5 Mei", correct: "5 mei", explanation: "Maand altijd met kleine letter" },
      { incorrect: "1990 als één-negen-negen-nul", correct: "negentien negentig", explanation: "Jaartallen in paren uitspreken" },
      { incorrect: "twaalfste", correct: "twaalfde", explanation: "Twaalf krijgt -de, niet -ste" },
      { incorrect: "driede", correct: "derde", explanation: "Uitzondering op de regel" },
      { incorrect: "eende", correct: "eerste", explanation: "Uitzondering op de regel" },
      { incorrect: "op januari", correct: "in januari", explanation: "Voor maanden gebruik je \"in\"" },
      { incorrect: "in maandag", correct: "op maandag", explanation: "Voor dagen gebruik je \"op\"" },
      { incorrect: "om maandag", correct: "op maandag", explanation: "Voor dagen gebruik je \"op\", niet \"om\"" },
      { incorrect: "Ik ben geboren in 5 mei", correct: "Ik ben geboren op 5 mei", explanation: "Voor een datum gebruik je \"op\"" },
    ],
    review: [
      "**0–10:** nul, één, twee, drie, vier, vijf, zes, zeven, acht, negen, tien",
      "**11–19:** elf, twaalf, dertien, veertien, vijftien, zestien, zeventien, achttien, negentien",
      "**Tientallen:** twintig, dertig, veertig, vijftig, zestig, zeventig, tachtig, negentig",
      "**100 = honderd | 1000 = duizend | 1.000.000 = een miljoen**",
      "**Volgorde bij getallen:** eenheid + en + tiental = éénentwintig, vijfenveertig",
      "**Rangtelwoorden:** -de (tweede, vierde) of -ste (achtste, twintigste)",
      "**Uitzonderingen rangtelwoorden:** eerste, derde, achtste",
      "**Dagen:** maandag, dinsdag, woensdag, donderdag, vrijdag, zaterdag, zondag (kleine letter!)",
      "**Maanden:** januari, februari, maart, april, mei, juni, juli, augustus, september, oktober, november, december (kleine letter!)",
      "**Datum zeggen:** vijf mei, tien januari, éénendertig december",
      "**Datum officieel:** de eerste mei, de vijfde december",
      "**Voorzetsels:** op maandag, in januari, om 8 uur",
      "**Jaartallen:** 1999 = negentien negenennegentig | 2024 = tweeduizend vierentwintig",
    ],
    qa: [
      { question: "Hoe tel je van 1 tot 10 in het Nederlands?", answer: "Één, twee, drie, vier, vijf, zes, zeven, acht, negen, tien." },
      { question: "Hoe zeg je 21 in het Nederlands?", answer: "**Éénentwintig** (één-en-twintig, aan elkaar geschreven)." },
      { question: "Hoe zeg je 47 in het Nederlands?", answer: "**Zevenenveertig**." },
      { question: "Hoe zeg je 83 in het Nederlands?", answer: "**Drieëntachtig** (met trema op de e)." },
      { question: "Wat is de regel voor getallen boven de 20?", answer: "De eenheid komt vóór het tiental, met **en** ertussen. Alles aan elkaar. Bijvoorbeeld: vierendertig, zevenenvijftig." },
      { question: "Hoe zeg je 100 in het Nederlands?", answer: "**Honderd**." },
      { question: "Hoe zeg je 1000 in het Nederlands?", answer: "**Duizend**." },
      { question: "Hoe zeg je 1.000.000 in het Nederlands?", answer: "**Een miljoen**." },
      { question: "Hoe maak je een rangtelwoord?", answer: "Meestal met **-de** (tweede, vierde) of **-ste** (achtste, twintigste). Uitzonderingen: eerste (1), derde (3), achtste (8)." },
      { question: "Wat is het rangtelwoord van 1?", answer: "**Eerste** (niet: eende)." },
      { question: "Wat is het rangtelwoord van 3?", answer: "**Derde** (niet: driede)." },
      { question: "Wat is het rangtelwoord van 8?", answer: "**Achtste** (niet: achtde)." },
      { question: "Wat is het rangtelwoord van 20?", answer: "**Twintigste**." },
      { question: "Hoe zeg je de dagen van de week in het Nederlands?", answer: "Maandag, dinsdag, woensdag, donderdag, vrijdag, zaterdag, zondag." },
      { question: "Met welke letter schrijf je dagen en maanden?", answer: "Met een **kleine letter** (maandag, januari). Dit is anders dan in het Engels." },
      { question: "Hoe zeg je de datum \"5 mei\"?", answer: "In spreektaal: **vijf mei**. In schrijftaal: **de vijfde mei**." },
      { question: "Welk voorzetsel gebruik je bij een dag?", answer: "**Op**: op maandag, op 5 mei." },
      { question: "Welk voorzetsel gebruik je bij een maand?", answer: "**In**: in januari, in augustus." },
      { question: "Welk voorzetsel gebruik je bij een tijd?", answer: "**Om**: om 8 uur, om half 3." },
      { question: "Wat is het verschil tussen één en een?", answer: "**Één** met accenten is het getal 1. **Een** zonder accent is het lidwoord." },
      { question: "Hoe spreek je het jaartal 1985 uit?", answer: "**Negentien vijfentachtig**." },
      { question: "Hoe spreek je het jaartal 2000 uit?", answer: "**Tweeduizend**." },
      { question: "Hoe spreek je het jaartal 2024 uit?", answer: "**Tweeduizend vierentwintig** of **twintig vierentwintig**." },
      { question: "Wat zijn de maanden van het jaar?", answer: "Januari, februari, maart, april, mei, juni, juli, augustus, september, oktober, november, december." },
      { question: "Hoe vraag je welke dag het is?", answer: "**Welke dag is het vandaag?**" },
      { question: "Hoe vraag je welke datum het is?", answer: "**Welke datum is het vandaag?**" },
      { question: "Hoe zeg je 1563 in het Nederlands?", answer: "**Duizend vijfhonderddrieënzestig**." },
      { question: "Hoe zeg je 2025 in het Nederlands?", answer: "**Tweeduizend vijfentwintig**." },
    ],
  },
   
  {
    id: "nl-kleuren-1",
    title: "Kleuren en Eenvoudige Beschrijvingen",
    level: 1,
    topic: "Vocabulaire",
    body: "Leer de kleuren in het Nederlands en hoe je eenvoudige beschrijvingen geeft. Je leert niet alleen de basiskleuren, maar ook hoe je dingen beschrijft met kleuren, maten en eenvoudige eigenschappen. Na deze les kun je alles om je heen beschrijven!",
    overview:
      "Hier vind je een **volledig uitgewerkte** les over kleuren en beschrijvingen. Je leert alle basiskleuren, hoe je kleuren combineert met zelfstandige naamwoorden, hoe je eenvoudige beschrijvingen maakt met bijvoeglijke naamwoorden, en de belangrijkste regels voor woordvolgorde. Alles met duidelijke voorbeelden, ezelsbruggetjes en praktische oefenvragen. Na deze les beschrijf je alles foutloos in het Nederlands!",
    anchorSectionId: "basiskleuren",
    exercises: [],
    timeExpressionsLabel: "Basiskleuren 🎨",
    timeExpressions: {
      header: "Kleur | Nederlands",
      rows: [
        ["🔴", "<strong>rood</strong>"],
        ["🟡", "<strong>geel</strong>"],
        ["🔵", "<strong>blauw</strong>"],
        ["🟢", "<strong>groen</strong>"],
        ["⚫", "<strong>zwart</strong>"],
        ["⚪", "<strong>wit</strong>"],
        ["🟤", "<strong>bruin</strong>"],
        ["🟠", "<strong>oranje</strong>"],
        ["🟣", "<strong>paars</strong>"],
        ["🩷", "<strong>roze</strong>"],
        ["🩶", "<strong>grijs</strong>"],
      ],
    },
    details: [
      {
        title: "Lichte en Donkere Kleuren ☀️🌙",
        body: `
          <div class="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 p-4 rounded-r-lg my-4">
            <h3 class="text-lg font-extrabold text-indigo-700 dark:text-indigo-300 mb-2">🧲 Regel</h3>
            <p class="text-slate-700 dark:text-slate-300">In het Nederlands zet je <strong>licht</strong> of <strong>donker</strong> voor de kleur. Je schrijft het als <strong>een woord aan elkaar</strong>.</p>
          </div>
          <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
            <table class="w-full border-collapse">
              <thead>
                <tr class="!bg-indigo-600">
                  <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Nederlands</th>
                  <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Uitleg</th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">☀️ <strong>lichtblauw</strong></td><td class="px-3 py-2 text-sm">zoals de lucht overdag</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">☀️ <strong>lichtgroen</strong></td><td class="px-3 py-2 text-sm">zoals een jong blaadje</td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">🌙 <strong>donkerrood</strong></td><td class="px-3 py-2 text-sm">zoals wijn</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">🌙 <strong>donkerbruin</strong></td><td class="px-3 py-2 text-sm">zoals chocolade</td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">🌙 <strong>donkerblauw</strong></td><td class="px-3 py-2 text-sm">zoals de nachtelijke hemel</td></tr>
              </tbody>
            </table>
          </div>
          <div class="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 rounded-r-lg my-4">
            <p class="font-semibold text-amber-700 dark:text-amber-300">
              ⚠️ PAS OP: Je schrijft de combinatie <strong>aan elkaar</strong>: lichtblauw, donkergroen. Nooit met een spatie!
            </p>
          </div>
        `,
      },
      {
        title: "Kleuren Gebruiken in een Zin 📝",
        body: `
          <h3 class="text-lg font-bold mt-4 mb-2">Manier 1: Voor het zelfstandig naamwoord → +e</h3>
          <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
            <table class="w-full border-collapse">
              <thead>
                <tr class="!bg-indigo-600">
                  <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Nederlands</th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">de <strong>rode</strong> auto 🚗</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">een <strong>blauwe</strong> fiets 🚲</td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">de <strong>groene</strong> deur 🚪</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">een <strong>gele</strong> bloem 🌻</td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">een <strong>zwarte</strong> kat 🐈‍⬛</td></tr>
              </tbody>
            </table>
          </div>
          <h3 class="text-lg font-bold mt-6 mb-2">Manier 2: Na "zijn" → geen -e</h3>
          <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
            <table class="w-full border-collapse">
              <thead>
                <tr class="!bg-indigo-600">
                  <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Nederlands</th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">De auto is <strong>rood</strong>. 🚗</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Mijn fiets is <strong>blauw</strong>. 🚲</td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">De deur is <strong>groen</strong>. 🚪</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">De kat is <strong>zwart</strong>. 🐈‍⬛</td></tr>
              </tbody>
            </table>
          </div>
        `,
      },
      {
        title: "De Uitzondering – \"Het\" woorden met \"Een\" ⚠️",
        body: `
          <div class="bg-rose-50 dark:bg-rose-900/20 border-l-4 border-rose-500 p-4 rounded-r-lg my-4">
            <p class="font-semibold text-rose-700 dark:text-rose-300">
              ⚠️ PAS OP: Bij een <strong>het</strong>-woord met <strong>een</strong> ervoor, komt er <strong>geen -e</strong>!
            </p>
          </div>
          <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
            <table class="w-full border-collapse">
              <thead>
                <tr class="!bg-indigo-600">
                  <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Nederlands</th>
                  <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Regel</th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm"><strong>het</strong> witte huis 🏠</td><td class="px-3 py-2 text-sm">"het" + het-woord → wel -e</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm"><strong>een</strong> wit huis 🏠</td><td class="px-3 py-2 text-sm">"een" + het-woord → geen -e</td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm"><strong>het</strong> grote boek 📖</td><td class="px-3 py-2 text-sm">"het" + het-woord → wel -e</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm"><strong>een</strong> groot boek 📖</td><td class="px-3 py-2 text-sm">"een" + het-woord → geen -e</td></tr>
              </tbody>
            </table>
          </div>
          <div class="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 rounded-r-lg my-4">
            <p class="font-semibold text-amber-700 dark:text-amber-300">
              ⚠️ PAS OP: <strong>Oranje</strong> is een uitzondering en krijgt <strong>nooit</strong> een -e!<br>
              De oranje deur ✅ | De oranjee deur ❌
            </p>
          </div>
        `,
      },
      {
        title: "Eenvoudige Beschrijvingen – Bijvoeglijke Naamwoorden ✨",
        body: `
          <h3 class="text-lg font-bold mt-4 mb-2">Grootte en vorm</h3>
          <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
            <table class="w-full border-collapse">
              <thead>
                <tr class="!bg-indigo-600">
                  <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Nederlands</th>
                  <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Tegenovergestelde</th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm"><strong>groot</strong> 🐘</td><td class="px-3 py-2 text-sm"><strong>klein</strong> 🐭</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm"><strong>lang</strong> 📏</td><td class="px-3 py-2 text-sm"><strong>kort</strong> ✂️</td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm"><strong>hoog</strong> 🏔️</td><td class="px-3 py-2 text-sm"><strong>laag</strong> ⬇️</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm"><strong>dik</strong> 📚</td><td class="px-3 py-2 text-sm"><strong>dun</strong> 📄</td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm"><strong>rond</strong> ⚽</td><td class="px-3 py-2 text-sm"></td></tr>
              </tbody>
            </table>
          </div>
          <h3 class="text-lg font-bold mt-6 mb-2">Eigenschappen</h3>
          <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
            <table class="w-full border-collapse">
              <thead>
                <tr class="!bg-indigo-600">
                  <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Nederlands</th>
                  <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Tegenovergestelde</th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm"><strong>mooi</strong> 🌸</td><td class="px-3 py-2 text-sm"><strong>lelijk</strong> 💀</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm"><strong>goed</strong> ✅</td><td class="px-3 py-2 text-sm"><strong>slecht</strong> ❌</td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm"><strong>nieuw</strong> 🆕</td><td class="px-3 py-2 text-sm"><strong>oud</strong> 🏚️</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm"><strong>jong</strong> 👶</td><td class="px-3 py-2 text-sm"><strong>oud</strong> 👴</td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm"><strong>snel</strong> 🚀</td><td class="px-3 py-2 text-sm"><strong>langzaam</strong> 🐢</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm"><strong>warm</strong> 🔥</td><td class="px-3 py-2 text-sm"><strong>koud</strong> ❄️</td></tr>
              </tbody>
            </table>
          </div>
          <h3 class="text-lg font-bold mt-6 mb-2">Gevoel en toestand</h3>
          <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
            <table class="w-full border-collapse">
              <thead>
                <tr class="!bg-indigo-600">
                  <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Nederlands</th>
                  <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Tegenovergestelde</th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm"><strong>blij</strong> 😊</td><td class="px-3 py-2 text-sm"><strong>verdrietig</strong> 😢</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm"><strong>sterk</strong> 💪</td><td class="px-3 py-2 text-sm"><strong>zwak</strong> 😓</td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm"><strong>hard</strong> 🪨</td><td class="px-3 py-2 text-sm"><strong>zacht</strong> 🧸</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm"><strong>zwaar</strong> 🏋️</td><td class="px-3 py-2 text-sm"><strong>licht</strong> 🪶</td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm"><strong>schoon</strong> ✨</td><td class="px-3 py-2 text-sm"><strong>vies</strong> 🤢</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm"><strong>open</strong> 🚪</td><td class="px-3 py-2 text-sm"><strong>dicht</strong> 🚪</td></tr>
              </tbody>
            </table>
          </div>
        `,
      },
      {
        title: "Combinaties Maken – Meerdere Beschrijvingen 🎯",
        body: `
          <p class="text-sm text-slate-600 dark:text-slate-400 mb-4">Je kunt twee of meer beschrijvingen combineren in een zin.</p>
          <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
            <table class="w-full border-collapse">
              <thead>
                <tr class="!bg-indigo-600">
                  <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Nederlands</th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Een <strong>grote rode</strong> auto 🚗</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Een <strong>klein wit</strong> huisje 🏠</td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">De <strong>mooie groene</strong> tuin 🌳</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Een <strong>oud bruin</strong> boek 📖</td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Mijn <strong>nieuwe zwarte</strong> schoenen 👞</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Een <strong>lief klein</strong> hondje 🐶</td></tr>
              </tbody>
            </table>
          </div>
        `,
      },
    ],
    rulesTable: [
      {
        rule: "Voor zelfstandig naamwoord → +e",
        structure: "Bijvoeglijk naamwoord + **e** + zelfstandig naamwoord",
        example: "de **rode** auto, een **blauwe** fiets, de **grote** man",
        usage: "Dit geldt voor alle **de**-woorden en voor **het**-woorden met **het**.",
      },
      {
        rule: "Na 'zijn' → geen -e",
        structure: "onderwerp + zijn + bijvoeglijk naamwoord (zonder -e)",
        example: "De auto is **rood**. De man is **groot**. Het boek is **oud**.",
        usage: "⚠️ PAS OP: Dit is een veelgemaakte fout! Na 'zijn' nooit -e.",
      },
      {
        rule: "Een + het-woord → geen -e",
        structure: "een + bijvoeglijk naamwoord (zonder -e) + het-woord",
        example: "een **rood** huis, een **groot** boek, een **wit** paard",
        usage: "Alleen bij **het**-woorden met **een**. Bij **de**-woorden altijd -e.",
      },
      {
        rule: "Licht/donker schrijf je aan elkaar",
        structure: "**licht** + kleur of **donker** + kleur (een woord!)",
        example: "**lichtblauw**, **donkergroen**, **lichtrood**",
        usage: "⚠️ PAS OP: Nooit 'licht blauw' met spatie!",
      },
      {
        rule: "Oranje is een uitzondering",
        structure: "**oranje** krijgt **nooit** een -e",
        example: "de **oranje** deur, een **oranje** auto",
        usage: "Nooit: oranjee! Dit is de enige kleur zonder -e.",
      },
      {
        rule: "Meerdere beschrijvingen combineren",
        structure: "bijvoeglijk naamwoord 1 (+e) + bijvoeglijk naamwoord 2 (+e) + zelfstandig naamwoord",
        example: "een **grote rode** auto, een **klein wit** huisje",
        usage: "Beide beschrijvingen krijgen dezelfde regels (wel of geen -e).",
      },
    ],
    callouts: [
      { type: "remember", label: "Onthoud 1", text: "Basiskleuren: **rood, geel, blauw, groen, zwart, wit, bruin, oranje, paars, roze, grijs**." },
      { type: "remember", label: "Onthoud 2", text: "Voor zelfstandig naamwoord → **+e**: de **rode** auto. Na **zijn** → geen -e: De auto is **rood**." },
      { type: "remember", label: "Onthoud 3", text: "Bij **een + het-woord** → geen -e: een **rood** huis. Bij **het** + het-woord → wel -e: het **rode** huis." },
      { type: "remember", label: "Onthoud 4", text: "**Licht** en **donker** aan elkaar: **lichtblauw**, **donkergroen**." },
      { type: "remember", label: "Onthoud 5", text: "**Oranje** krijgt **nooit** -e: de oranje deur." },
      { type: "remember", label: "Onthoud 6", text: "Bijvoeglijke naamwoorden zoals **groot, klein, mooi, nieuw, oud** volgen dezelfde regels als kleuren." },
      { type: "remember", label: "Onthoud 7", text: "Meerdere beschrijvingen kunnen samen: een **grote rode** auto, een **klein wit** huisje." },
    ],
    commonMistakes: [
      { incorrect: "De auto is rode.", correct: "De auto is rood.", explanation: "Na \"zijn\" komt geen -e" },
      { incorrect: "Een rode huis", correct: "Een rood huis", explanation: "\"Huis\" is een het-woord met \"een\" → geen -e" },
      { incorrect: "Licht blauw", correct: "Lichtblauw", explanation: "Combinaties schrijf je aan elkaar" },
      { incorrect: "Donker groen", correct: "Donkergroen", explanation: "Combinaties schrijf je aan elkaar" },
      { incorrect: "De rood auto", correct: "De rode auto", explanation: "Voor het zelfstandig naamwoord → +e" },
      { incorrect: "De oranjee deur", correct: "De oranje deur", explanation: "Oranje is een uitzondering, nooit -e" },
      { incorrect: "Een groot man", correct: "Een grote man", explanation: "De-woord → altijd -e" },
      { incorrect: "Het boek is oude.", correct: "Het boek is oud.", explanation: "Na \"zijn\" komt geen -e" },
      { incorrect: "De groen appel", correct: "De groene appel", explanation: "Voor het zelfstandig naamwoord → +e" },
      { incorrect: "Een wit deur", correct: "Een witte deur", explanation: "De-woord → altijd -e" },
    ],
    review: [
      "**Basiskleuren:** rood, geel, blauw, groen, zwart, wit, bruin, oranje, paars, roze, grijs.",
      "**Lichte kleuren:** lichtblauw, lichtgroen, lichtrood, lichtgeel (altijd aan elkaar).",
      "**Donkere kleuren:** donkerblauw, donkergroen, donkerrood, donkerbruin (altijd aan elkaar).",
      "**Regel voor zelfstandig naamwoord:** kleur + e: de rode auto, een blauwe fiets.",
      "**Regel na \"zijn\":** alleen de kleur: De auto is rood. Het huis is wit.",
      "**Uitzondering \"het\"-woorden met \"een\":** geen -e: een rood huis, een groot boek.",
      "**Uitzondering oranje:** nooit -e: de oranje deur, een oranje auto.",
      "**Grootte:** groot/klein, lang/kort, hoog/laag, dik/dun, rond, vierkant.",
      "**Eigenschappen:** mooi/lelijk, goed/slecht, nieuw/oud, jong/oud, snel/langzaam, warm/koud.",
      "**Gevoel:** blij/verdrietig, sterk/zwak, hard/zacht, zwaar/licht, schoon/vies.",
      "**Combinaties:** een grote rode auto, een klein wit huisje.",
    ],
    qa: [
      { question: "Wat zijn de basiskleuren in het Nederlands?", answer: "**Rood, geel, blauw, groen, zwart, wit, bruin, oranje, paars, roze en grijs**." },
      { question: "Hoe zeg je \"the red car\" in het Nederlands?", answer: "**De rode auto**." },
      { question: "Hoe zeg je \"the car is red\" in het Nederlands?", answer: "**De auto is rood**." },
      { question: "Wat is het verschil tussen \"de rode auto\" en \"de auto is rood\"?", answer: "Bij \"de rode auto\" staat de kleur voor het zelfstandig naamwoord en komt er **-e** bij. Bij \"de auto is rood\" staat de kleur na **is** en komt er **geen -e** bij." },
      { question: "Hoe zeg je \"a blue bicycle\" in het Nederlands?", answer: "**Een blauwe fiets**." },
      { question: "Hoe zeg je \"a white house\" in het Nederlands?", answer: "**Een wit huis** (zonder -e, want \"huis\" is een het-woord met \"een\")." },
      { question: "Hoe zeg je \"the white house\" in het Nederlands?", answer: "**Het witte huis** (met -e, want \"huis\" is een het-woord met \"het\")." },
      { question: "Waarom zeg je \"een wit huis\" zonder -e?", answer: "Omdat \"huis\" een **het**-woord is en het lidwoord **een** is. Bij een het-woord met \"een\" komt er geen -e." },
      { question: "Hoe zeg je \"light blue\" in het Nederlands?", answer: "**Lichtblauw** (aan elkaar)." },
      { question: "Hoe zeg je \"dark green\" in het Nederlands?", answer: "**Donkergroen** (aan elkaar)." },
      { question: "Welke kleur krijgt nooit een -e?", answer: "**Oranje**. Je zegt: de oranje deur, een oranje auto." },
      { question: "Hoe zeg je \"a beautiful flower\" in het Nederlands?", answer: "**Een mooie bloem**." },
      { question: "Hoe zeg je \"the man is big\" in het Nederlands?", answer: "**De man is groot**." },
      { question: "Hoe zeg je \"a big man\" in het Nederlands?", answer: "**Een grote man**." },
      { question: "Hoe zeg je \"a big book\" in het Nederlands?", answer: "**Een groot boek** (zonder -e, want \"boek\" is een het-woord met \"een\")." },
      { question: "Wat is het tegenovergestelde van \"groot\"?", answer: "**Klein**." },
      { question: "Wat is het tegenovergestelde van \"warm\"?", answer: "**Koud**." },
      { question: "Wat is het tegenovergestelde van \"oud\" (voor dingen)?", answer: "**Nieuw**." },
      { question: "Wat is het tegenovergestelde van \"oud\" (voor mensen)?", answer: "**Jong**." },
      { question: "Hoe zeg je \"I am happy\" in het Nederlands?", answer: "**Ik ben blij**." },
      { question: "Hoe beschrijf je een kat die zwart en klein is?", answer: "**Een kleine zwarte kat**." },
      { question: "Hoe beschrijf je een auto die groot en rood is?", answer: "**Een grote rode auto**." },
      { question: "Hoe zeg je \"the food is hot\" in het Nederlands?", answer: "**Het eten is heet**." },
      { question: "Hoe zeg je \"a soft pillow\" in het Nederlands?", answer: "**Een zacht kussen**." },
      { question: "Hoe zeg je \"the door is open\" in het Nederlands?", answer: "**De deur is open**." },
    ],
  },
    {
    id: "nl-familie-1",
    title: "Familie en Relaties",
    level: 1,
    topic: "Vocabulaire",
    body: "Leer hoe je in het Nederlands over je familie praat. Je leert alle familieleden, hoe je relaties beschrijft, bezittelijke voornaamwoorden zoals \"mijn\" en \"jouw\", en hoe je vertelt over je gezin. Na deze les kun je je hele familie voorstellen!",
    overview:
      "Hier vind je een **volledig uitgewerkte** les over familie en relaties. Je leert alle familieleden van dichtbij tot ver weg, het verschil tussen formeel en informeel, hoe je bezit aangeeft, de werkwoorden \"hebben\" en \"zijn\", hoe je leeftijden en namen vertelt, en hoe je een complete familiepresentatie geeft. Alles met duidelijke voorbeelden en praktische oefenvragen. Na deze les stel je je hele familie foutloos voor!",
    anchorSectionId: "kernfamilie",
    exercises: [],
    timeExpressionsLabel: "Kernfamilie – Dichtbij 🏠",
    timeExpressions: {
      header: "Nederlands | Uitleg",
      rows: [
        ["👨 <strong>de vader</strong>", "je papa"],
        ["👩 <strong>de moeder</strong>", "je mama"],
        ["👨‍👩‍👧 <strong>de ouders</strong>", "je vader en moeder samen"],
        ["👦 <strong>de zoon</strong>", "je kind dat een jongen is"],
        ["👧 <strong>de dochter</strong>", "je kind dat een meisje is"],
        ["👶 <strong>het kind</strong>", "een zoon of een dochter"],
        ["👨‍👧 <strong>de kinderen</strong>", "twee of meer zonen en/of dochters"],
        ["👦 <strong>de broer</strong>", "je broer"],
        ["👧 <strong>de zus</strong>", "je zus"],
        ["👶 <strong>de baby</strong>", "een heel klein kindje"],
      ],
    },
    details: [
      {
        title: "Grootouders en Kleinkinderen 👴👵👶",
        body: `
          <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
            <table class="w-full border-collapse">
              <thead>
                <tr class="!bg-indigo-600">
                  <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Nederlands</th>
                  <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Uitleg</th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">👴 <strong>de opa</strong></td><td class="px-3 py-2 text-sm">de vader van je vader of moeder</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">👵 <strong>de oma</strong></td><td class="px-3 py-2 text-sm">de moeder van je vader of moeder</td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">👴👵 <strong>de grootouders</strong></td><td class="px-3 py-2 text-sm">je opa en oma samen</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">👦 <strong>de kleinzoon</strong></td><td class="px-3 py-2 text-sm">de zoon van je zoon of dochter</td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">👧 <strong>de kleindochter</strong></td><td class="px-3 py-2 text-sm">de dochter van je zoon of dochter</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">👦👧 <strong>de kleinkinderen</strong></td><td class="px-3 py-2 text-sm">alle kinderen van je kinderen</td></tr>
              </tbody>
            </table>
          </div>
          <p class="text-sm text-slate-600 dark:text-slate-400"><strong>Opa</strong> en <strong>oma</strong> zijn de gewone, lieve woorden. Heel formeel: grootvader en grootmoeder (klinkt afstandelijk). Gebruik gewoon opa en oma.</p>
        `,
      },
      {
        title: "Ooms, Tantes, Neef en Nicht 👨‍👩‍👧‍👦",
        body: `
          <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
            <table class="w-full border-collapse">
              <thead>
                <tr class="!bg-indigo-600">
                  <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Nederlands</th>
                  <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Uitleg</th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">👨 <strong>de oom</strong></td><td class="px-3 py-2 text-sm">de broer van je vader of moeder</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">👩 <strong>de tante</strong></td><td class="px-3 py-2 text-sm">de zus van je vader of moeder</td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">👦 <strong>de neef</strong></td><td class="px-3 py-2 text-sm">de zoon van je broer of zus / de zoon van je oom of tante</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">👧 <strong>de nicht</strong></td><td class="px-3 py-2 text-sm">de dochter van je broer of zus / de dochter van je oom of tante</td></tr>
              </tbody>
            </table>
          </div>
          <div class="bg-rose-50 dark:bg-rose-900/20 border-l-4 border-rose-500 p-4 rounded-r-lg my-4">
            <p class="font-semibold text-rose-700 dark:text-rose-300">
              ⚠️ PAS OP! Dit is heel belangrijk:<br><br>
              In het Nederlands is er <strong>geen apart woord</strong> voor verschillende soorten neven en nichten.<br><br>
              <strong>Neef</strong> kan betekenen:<br>
              1. De zoon van je broer of zus.<br>
              2. De zoon van je oom of tante.<br><br>
              <strong>Nicht</strong> kan betekenen:<br>
              1. De dochter van je broer of zus.<br>
              2. De dochter van je oom of tante.<br><br>
              Bij twijfel zeg je: <strong>"de zoon van mijn oom"</strong> of <strong>"de dochter van mijn zus"</strong>.
            </p>
          </div>
        `,
      },
      {
        title: "Schoonfamilie – De Familie van je Partner 💍",
        body: `
          <div class="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 p-4 rounded-r-lg my-4">
            <h3 class="text-lg font-extrabold text-indigo-700 dark:text-indigo-300 mb-2">🧲 Ezelsbruggetje</h3>
            <p class="text-slate-700 dark:text-slate-300"><strong>Schoon-</strong> betekent "via het huwelijk of de relatie". Alles met schoon- = familie die je via je partner krijgt.</p>
          </div>
          <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
            <table class="w-full border-collapse">
              <thead>
                <tr class="!bg-indigo-600">
                  <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Nederlands</th>
                  <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Uitleg</th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">👨 <strong>de schoonvader</strong></td><td class="px-3 py-2 text-sm">de vader van je partner</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">👩 <strong>de schoonmoeder</strong></td><td class="px-3 py-2 text-sm">de moeder van je partner</td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">👨👩 <strong>de schoonouders</strong></td><td class="px-3 py-2 text-sm">de ouders van je partner samen</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">👦 <strong>de schoonzoon</strong></td><td class="px-3 py-2 text-sm">de man van je dochter</td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">👧 <strong>de schoondochter</strong></td><td class="px-3 py-2 text-sm">de vrouw van je zoon</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">👨 <strong>de zwager</strong></td><td class="px-3 py-2 text-sm">de broer van je partner / de man van je zus</td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">👩 <strong>de schoonzus</strong></td><td class="px-3 py-2 text-sm">de zus van je partner / de vrouw van je broer</td></tr>
              </tbody>
            </table>
          </div>
        `,
      },
      {
        title: "Partners, Relaties & Gezin vs Familie 💕",
        body: `
          <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
            <table class="w-full border-collapse">
              <thead>
                <tr class="!bg-indigo-600">
                  <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Nederlands</th>
                  <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Uitleg</th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">💑 <strong>de man</strong></td><td class="px-3 py-2 text-sm">je echtgenoot</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">💑 <strong>de vrouw</strong></td><td class="px-3 py-2 text-sm">je echtgenote</td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">💏 <strong>de partner</strong></td><td class="px-3 py-2 text-sm">de persoon met wie je een relatie hebt</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">💍 <strong>de verloofde</strong></td><td class="px-3 py-2 text-sm">de persoon met wie je gaat trouwen</td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">💔 <strong>de ex</strong></td><td class="px-3 py-2 text-sm">je vorige partner</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">👨‍👩‍👦 <strong>het gezin</strong></td><td class="px-3 py-2 text-sm">ouders en kinderen in een huis</td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">👨‍👩‍👧‍👦 <strong>de familie</strong></td><td class="px-3 py-2 text-sm">alle familieleden samen</td></tr>
              </tbody>
            </table>
          </div>
          <div class="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 rounded-r-lg my-4">
            <p class="font-semibold text-amber-700 dark:text-amber-300">
              ⚠️ PAS OP! <strong>Vriend/vriendin</strong> kan twee dingen betekenen:<br>
              1. Je partner (liefdesrelatie).<br>
              2. Een gewone vriend/vriendin.<br><br>
              Wil je duidelijk zijn? Zeg: <strong>"mijn partner"</strong> (liefdespartner) of <strong>"een vriend van mij"</strong> (gewoon).
            </p>
          </div>
          <div class="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 p-4 rounded-r-lg my-4">
            <h3 class="text-lg font-extrabold text-indigo-700 dark:text-indigo-300 mb-2">🏠 Gezin vs Familie</h3>
            <p class="text-slate-700 dark:text-slate-300"><strong>Het gezin</strong> = ouders + kinderen in een huis. <strong>De familie</strong> = iedereen: opa, oma, ooms, tantes, neven, nichten.</p>
          </div>
        `,
      },
      {
        title: "Bezittelijke Woorden – \"Mijn\", \"Jouw\", \"Ons\" 👆",
        body: `
          <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
            <table class="w-full border-collapse">
              <thead>
                <tr class="!bg-indigo-600">
                  <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Persoonlijk</th>
                  <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Bezittelijk</th>
                  <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Voorbeeld</th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm"><strong>ik</strong></td><td class="px-3 py-2 text-sm"><strong>mijn</strong></td><td class="px-3 py-2 text-sm"><strong>mijn</strong> vader</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm"><strong>jij</strong></td><td class="px-3 py-2 text-sm"><strong>jouw</strong> / je</td><td class="px-3 py-2 text-sm"><strong>jouw</strong> broer</td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm"><strong>u</strong></td><td class="px-3 py-2 text-sm"><strong>uw</strong></td><td class="px-3 py-2 text-sm"><strong>uw</strong> ouders</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm"><strong>hij</strong></td><td class="px-3 py-2 text-sm"><strong>zijn</strong></td><td class="px-3 py-2 text-sm"><strong>zijn</strong> oma</td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm"><strong>zij</strong></td><td class="px-3 py-2 text-sm"><strong>haar</strong></td><td class="px-3 py-2 text-sm"><strong>haar</strong> tante</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm"><strong>wij</strong></td><td class="px-3 py-2 text-sm"><strong>ons/onze</strong></td><td class="px-3 py-2 text-sm"><strong>onze</strong> vader, <strong>ons</strong> kind</td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm"><strong>jullie</strong></td><td class="px-3 py-2 text-sm"><strong>jullie</strong></td><td class="px-3 py-2 text-sm"><strong>jullie</strong> familie</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm"><strong>zij</strong> (mv)</td><td class="px-3 py-2 text-sm"><strong>hun</strong></td><td class="px-3 py-2 text-sm"><strong>hun</strong> dochter</td></tr>
              </tbody>
            </table>
          </div>
          <div class="bg-rose-50 dark:bg-rose-900/20 border-l-4 border-rose-500 p-4 rounded-r-lg my-4">
            <p class="font-semibold text-rose-700 dark:text-rose-300">
              ⚠️ PAS OP: <strong>Ons vs Onze</strong><br>
              <strong>het</strong>-woord → <strong>ons</strong>: ons kind, ons huis<br>
              <strong>de</strong>-woord → <strong>onze</strong>: onze vader, onze moeder<br>
              meervoud → <strong>onze</strong>: onze kinderen
            </p>
          </div>
        `,
      },
      {
        title: "Werkwoorden \"Hebben\" en \"Zijn\" 🔑",
        body: `
          <h3 class="text-lg font-bold mt-4 mb-2">HEBBEN – om te zeggen wat je hebt</h3>
          <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
            <table class="w-full border-collapse">
              <thead>
                <tr class="!bg-indigo-600">
                  <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Persoon</th>
                  <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Werkwoord</th>
                  <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Voorbeeld</th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">ik</td><td class="px-3 py-2 text-sm"><strong>heb</strong></td><td class="px-3 py-2 text-sm">Ik <strong>heb</strong> een broer.</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">jij</td><td class="px-3 py-2 text-sm"><strong>hebt</strong></td><td class="px-3 py-2 text-sm">Jij <strong>hebt</strong> een zus.</td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">hij/zij</td><td class="px-3 py-2 text-sm"><strong>heeft</strong></td><td class="px-3 py-2 text-sm">Hij <strong>heeft</strong> twee kinderen.</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">wij/jullie/zij</td><td class="px-3 py-2 text-sm"><strong>hebben</strong></td><td class="px-3 py-2 text-sm">Wij <strong>hebben</strong> een groot gezin.</td></tr>
              </tbody>
            </table>
          </div>
          <h3 class="text-lg font-bold mt-6 mb-2">ZIJN – om te zeggen wie of wat iemand is</h3>
          <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
            <table class="w-full border-collapse">
              <thead>
                <tr class="!bg-indigo-600">
                  <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Persoon</th>
                  <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Werkwoord</th>
                  <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Voorbeeld</th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">ik</td><td class="px-3 py-2 text-sm"><strong>ben</strong></td><td class="px-3 py-2 text-sm">Ik <strong>ben</strong> de oudste.</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">jij</td><td class="px-3 py-2 text-sm"><strong>bent</strong></td><td class="px-3 py-2 text-sm">Jij <strong>bent</strong> mijn vriend.</td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">hij/zij</td><td class="px-3 py-2 text-sm"><strong>is</strong></td><td class="px-3 py-2 text-sm">Zij <strong>is</strong> mijn moeder.</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">wij/jullie/zij</td><td class="px-3 py-2 text-sm"><strong>zijn</strong></td><td class="px-3 py-2 text-sm">Wij <strong>zijn</strong> een hechte familie.</td></tr>
              </tbody>
            </table>
          </div>
        `,
      },
      {
        title: "Voorbeeldtekst – Mijn Familie Voorstellen 📖",
        body: `
          <div class="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 p-4 rounded-r-lg my-4">
            <p class="text-slate-700 dark:text-slate-300">
              <strong>Hallo! Ik ga mijn familie voorstellen.</strong> 👋<br><br>
              Ik <strong>heet</strong> Lisa en ik <strong>ben</strong> 28 jaar oud. Ik <strong>woon</strong> in Utrecht.<br><br>
              Ik <strong>heb</strong> een leuk <strong>gezin</strong>. Mijn vader <strong>heet</strong> Jan. Hij <strong>is</strong> 58 jaar oud en hij <strong>werkt</strong> als leraar. Mijn moeder <strong>heet</strong> Maria. Zij <strong>is</strong> 55 jaar en zij <strong>werkt</strong> in een ziekenhuis. Mijn ouders <strong>zijn</strong> nog <strong>getrouwd</strong>.<br><br>
              Ik <strong>heb</strong> een broer en een zus. Mijn broer <strong>heet</strong> Tom. Hij <strong>is</strong> 31 jaar en hij <strong>is</strong> getrouwd met Anna. Zij <strong>hebben</strong> twee kinderen.<br><br>
              Mijn opa en oma <strong>wonen</strong> vlakbij. Mijn opa <strong>heet</strong> Piet en hij <strong>is</strong> 82 jaar. Mijn oma <strong>heet</strong> Riet en zij <strong>is</strong> 79 jaar.<br><br>
              Mijn familie <strong>is</strong> heel belangrijk voor mij. We <strong>zijn</strong> een hechte familie. ❤️
            </p>
          </div>
        `,
      },
    ],
    rulesTable: [
      {
        rule: "Kernfamilie – de belangrijkste woorden",
        structure: "**de vader, de moeder, de ouders, de zoon, de dochter, het kind, de kinderen, de broer, de zus**",
        example: "Ik heb een **broer** en een **zus**. Mijn **ouders** wonen in Amsterdam.",
        usage: "⚠️ PAS OP: **Kinderen** is onregelmatig meervoud van **kind** (niet: kinden).",
      },
      {
        rule: "Grootouders en schoonfamilie",
        structure: "**opa/oma** (informeel), **grootvader/grootmoeder** (formeel). **Schoon-** = via partner.",
        example: "Mijn **opa** is 80 jaar. Mijn **schoonmoeder** heet Fatima.",
        usage: "Gebruik altijd **opa/oma** in normale gesprekken.",
      },
      {
        rule: "Neef en nicht – twee betekenissen",
        structure: "**Neef** = zoon van broer/zus of zoon van oom/tante. **Nicht** = dochter van broer/zus of dochter van oom/tante.",
        example: "Mijn **neef** (zoon van mijn broer) heet Max.",
        usage: "⚠️ PAS OP: Bij twijfel zeg je \"de zoon van mijn oom\" of \"de dochter van mijn zus\".",
      },
      {
        rule: "Bezittelijke voornaamwoorden",
        structure: "**mijn, jouw/je, uw, zijn, haar, ons/onze, jullie, hun**",
        example: "**mijn** vader, **jouw** broer, **onze** ouders, **hun** kinderen",
        usage: "**Ons** bij het-woorden (ons kind). **Onze** bij de-woorden en meervoud.",
      },
      {
        rule: "Hebben – werkwoord voor bezit",
        structure: "ik **heb** | jij **hebt** | hij/zij **heeft** | wij/jullie/zij **hebben**",
        example: "Ik **heb** een broer. Hij **heeft** twee zussen.",
        usage: "⚠️ PAS OP: Ik **heb** (niet: ik hebt). Hij **heeft** (niet: hij heb).",
      },
      {
        rule: "Zijn – werkwoord voor identiteit",
        structure: "ik **ben** | jij **bent** | hij/zij **is** | wij/jullie/zij **zijn**",
        example: "Ik **ben** de oudste. Zij **is** mijn moeder.",
        usage: "⚠️ PAS OP: Hij/Zij **is** (niet: hij/zij bent).",
      },
      {
        rule: "Leeftijd: altijd \"jaar\", nooit \"jaren\"",
        structure: "persoon + zijn + getal + **jaar** (oud)",
        example: "Ik ben 25 **jaar**. Mijn opa is 72 **jaar** oud.",
        usage: "⚠️ PAS OP: Nooit \"jaren\" bij leeftijd! Ik ben 25 jaar. ✅",
      },
      {
        rule: "Gezin vs Familie",
        structure: "**Het gezin** = ouders + kinderen in een huis. **De familie** = alle familieleden.",
        example: "Mijn **gezin** is klein. Mijn **familie** is heel groot.",
        usage: "Ezelsbrug: **Gezin** = Gezellig klein. **Familie** = Feest met iedereen.",
      },
    ],
    callouts: [
      { type: "remember", label: "Onthoud 1", text: "Kernfamilie: **vader, moeder, ouders, zoon, dochter, kind, kinderen, broer, zus**." },
      { type: "remember", label: "Onthoud 2", text: "Grootouders: **opa, oma, grootouders, kleinzoon, kleindochter, kleinkinderen**." },
      { type: "remember", label: "Onthoud 3", text: "Ooms/tantes: **oom, tante, neef, nicht**. ⚠️ PAS OP: neef en nicht hebben twee betekenissen!" },
      { type: "remember", label: "Onthoud 4", text: "Schoonfamilie: **schoonvader, schoonmoeder, zwager, schoonzus**." },
      { type: "remember", label: "Onthoud 5", text: "Bezittelijke woorden: **mijn, jouw/je, uw, zijn, haar, ons/onze, jullie, hun**." },
      { type: "remember", label: "Onthoud 6", text: "**Ons** bij het-woorden (ons kind). **Onze** bij de-woorden en meervoud." },
      { type: "remember", label: "Onthoud 7", text: "Werkwoorden: **hebben** (ik heb, hij heeft) en **zijn** (ik ben, hij is)." },
      { type: "remember", label: "Onthoud 8", text: "Leeftijd = altijd **jaar** (nooit jaren!): Ik ben 30 jaar. ✅" },
      { type: "remember", label: "Onthoud 9", text: "**Het gezin** (klein, een huis) vs **de familie** (groot, iedereen)." },
      { type: "remember", label: "Onthoud 10", text: "Burgerlijke staat: **getrouwd, gescheiden, samenwonend, alleenstaand, weduwe, weduwnaar**." },
    ],
    commonMistakes: [
      { incorrect: "Ik heb twee broer.", correct: "Ik heb twee broers.", explanation: "Meervoud: broer + s = broers" },
      { incorrect: "Mijn zus is 25 jaren.", correct: "Mijn zus is 25 jaar.", explanation: "Bij leeftijd altijd \"jaar\", nooit \"jaren\"" },
      { incorrect: "Mijn zus heet van Lisa.", correct: "Mijn zus heet Lisa.", explanation: "Geen \"van\" na \"heten\"" },
      { incorrect: "De gezin", correct: "Het gezin", explanation: "\"Gezin\" is een het-woord" },
      { incorrect: "Ons vader", correct: "Onze vader", explanation: "\"Vader\" is een de-woord → onze" },
      { incorrect: "Onze kind", correct: "Ons kind", explanation: "\"Kind\" is een het-woord → ons" },
      { incorrect: "Mijn broer is getrouw.", correct: "Mijn broer is getrouwd.", explanation: "Met een d aan het eind" },
      { incorrect: "Ik hebt een broer.", correct: "Ik heb een broer.", explanation: "Ik-vorm van hebben is \"heb\"" },
      { incorrect: "Hij heb een zus.", correct: "Hij heeft een zus.", explanation: "Hij/zij-vorm van hebben is \"heeft\"" },
      { incorrect: "Zij bent mijn moeder.", correct: "Zij is mijn moeder.", explanation: "Hij/zij-vorm van zijn is \"is\"" },
    ],
    review: [
      "**Kernfamilie:** vader, moeder, ouders, zoon, dochter, kind, kinderen, broer, zus.",
      "**Grootouders:** opa, oma, grootouders, kleinzoon, kleindochter, kleinkinderen.",
      "**Ooms en tantes:** oom, tante, neef, nicht.",
      "**Schoonfamilie:** schoonvader, schoonmoeder, schoonouders, schoonzoon, schoondochter, zwager, schoonzus.",
      "**Partnerrelaties:** man, vrouw, partner, vriend, vriendin, verloofde, ex.",
      "**Gezin vs familie:** het gezin (klein) – de familie (groot).",
      "**Bezittelijke woorden:** mijn, jouw/je, uw, zijn, haar, ons/onze, jullie, hun.",
      "**Ons vs onze:** ons kind (het-woord) – onze vader (de-woord) – onze kinderen (meervoud).",
      "**Hebben:** ik heb, jij hebt, hij/zij heeft, wij/jullie/zij hebben.",
      "**Zijn:** ik ben, jij bent, hij/zij is, wij/jullie/zij zijn.",
      "**Leeftijd:** altijd \"jaar\" – Ik ben 30 jaar. ✅",
      "**Burgerlijke staat:** getrouwd, gescheiden, samenwonend, alleenstaand, weduwe, weduwnaar.",
    ],
    qa: [
      { question: "Hoe zeg je \"vader\" in het Nederlands?", answer: "**De vader**." },
      { question: "Hoe zeg je \"moeder\" in het Nederlands?", answer: "**De moeder**." },
      { question: "Hoe zeg je \"ouders\" in het Nederlands?", answer: "**De ouders**." },
      { question: "Hoe zeg je \"broer\" in het Nederlands?", answer: "**De broer**." },
      { question: "Hoe zeg je \"zus\" in het Nederlands?", answer: "**De zus**." },
      { question: "Wat is het meervoud van \"kind\"?", answer: "**De kinderen** (onregelmatig, niet \"kinden\")." },
      { question: "Hoe zeg je \"opa\" in het Nederlands?", answer: "**De opa**." },
      { question: "Hoe zeg je \"oma\" in het Nederlands?", answer: "**De oma**." },
      { question: "Wat betekent \"schoonmoeder\"?", answer: "De moeder van je partner." },
      { question: "Wat betekent \"zwager\"?", answer: "De broer van je partner, of de man van je zus." },
      { question: "Wat betekent \"neef\"?", answer: "De zoon van je broer of zus, of de zoon van je oom of tante." },
      { question: "Wat betekent \"nicht\"?", answer: "De dochter van je broer of zus, of de dochter van je oom of tante." },
      { question: "Wat is het verschil tussen \"het gezin\" en \"de familie\"?", answer: "**Het gezin** = ouders en kinderen in een huis. **De familie** = alle familieleden samen." },
      { question: "Hoe zeg je \"mijn vader\"?", answer: "**Mijn vader**." },
      { question: "Wanneer gebruik je \"ons\" en wanneer \"onze\"?", answer: "**Ons** bij het-woorden (ons kind). **Onze** bij de-woorden en meervoud (onze vader, onze kinderen)." },
      { question: "Hoe zeg je \"ik heb\"?", answer: "**Ik heb**." },
      { question: "Hoe zeg je \"hij heeft\"?", answer: "**Hij heeft**." },
      { question: "Hoe zeg je \"ik ben\"?", answer: "**Ik ben**." },
      { question: "Hoe zeg je \"zij is\"?", answer: "**Zij is**." },
      { question: "Waarom zeg je \"30 jaar\" en niet \"30 jaren\"?", answer: "Bij leeftijd gebruik je altijd **jaar** (enkelvoud), nooit \"jaren\"." },
      { question: "Hoe zeg je \"getrouwd\"?", answer: "**Getrouwd**." },
      { question: "Hoe zeg je \"alleenstaand\"?", answer: "**Alleenstaand**." },
      { question: "Hoe zeg je \"Ik ben enig kind\"?", answer: "**Ik ben enig kind**." },
      { question: "Hoe vraag je \"Heb jij broers of zussen?\"", answer: "**Heb jij broers of zussen?**" },
      { question: "Wat is het verschil tussen \"vriend\" als partner en \"vriend\" als gewone vriend?", answer: "Je hoort het aan de situatie. Bij twijfel: **mijn partner** (liefde) of **een vriend van mij** (gewoon)." },
    ],
  },
  {
    id: "nl-routines-1",
    title: "Dagelijkse Routines en Klokkijken",
    level: 1,
    topic: "Vocabulaire & Presentatie",
    body: "Leer hoe je in het Nederlands vertelt over je dagelijkse routine en hoe je klokkijkt. Je leert de tijden van de dag, hoe je zegt hoe laat het is, en hoe je beschrijft wat je elke dag doet van 's ochtends vroeg tot 's avonds laat.",
    overview:
      "Hier vind je een **volledig uitgewerkte** les over dagelijkse routines en klokkijken. Je leert hoe je de klok leest in het Nederlands, alle dagdelen, veelgebruikte werkwoorden voor dagelijkse activiteiten, hoe je een volledige dag beschrijft van opstaan tot slapengaan, en hoe je zegt op welke tijd je iets doet. Alles met duidelijke voorbeelden, ezelsbruggetjes en praktische oefenvragen. Na deze les beschrijf je je hele dag foutloos in het Nederlands!",
    anchorSectionId: "klokkijken",
    exercises: [],
    timeExpressionsLabel: "Hele Uren 🕐",
    timeExpressions: {
      header: "Tijd | Nederlands",
      rows: [
        ["🕐 01:00", "<strong>een uur</strong>"],
        ["🕑 02:00", "<strong>twee uur</strong>"],
        ["🕒 03:00", "<strong>drie uur</strong>"],
        ["🕓 04:00", "<strong>vier uur</strong>"],
        ["🕔 05:00", "<strong>vijf uur</strong>"],
        ["🕕 06:00", "<strong>zes uur</strong>"],
        ["🕖 07:00", "<strong>zeven uur</strong>"],
        ["🕗 08:00", "<strong>acht uur</strong>"],
        ["🕘 09:00", "<strong>negen uur</strong>"],
        ["🕙 10:00", "<strong>tien uur</strong>"],
        ["🕚 11:00", "<strong>elf uur</strong>"],
        ["🕛 12:00", "<strong>twaalf uur</strong>"],
      ],
    },
    details: [
      {
        title: "Halve Uren 🕜🕝🕞",
        body: `
          <div class="bg-rose-50 dark:bg-rose-900/20 border-l-4 border-rose-500 p-4 rounded-r-lg my-4">
            <p class="font-semibold text-rose-700 dark:text-rose-300">
              ⚠️ PAS OP! In het Nederlands zeg je <strong>half</strong> plus het <strong>volgende</strong> uur. Dit is anders dan in veel andere talen!<br>
              Half twee = 01:30 (niet 02:30!). Je zegt het uur dat nog moet komen.
            </p>
          </div>
          <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
            <table class="w-full border-collapse">
              <thead>
                <tr class="!bg-indigo-600">
                  <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Tijd</th>
                  <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Nederlands</th>
                  <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Uitleg</th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">01:30</td><td class="px-3 py-2 text-sm"><strong>half twee</strong></td><td class="px-3 py-2 text-sm">half op weg naar twee uur</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">02:30</td><td class="px-3 py-2 text-sm"><strong>half drie</strong></td><td class="px-3 py-2 text-sm">half op weg naar drie uur</td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">03:30</td><td class="px-3 py-2 text-sm"><strong>half vier</strong></td><td class="px-3 py-2 text-sm">half op weg naar vier uur</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">04:30</td><td class="px-3 py-2 text-sm"><strong>half vijf</strong></td><td class="px-3 py-2 text-sm">half op weg naar vijf uur</td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">05:30</td><td class="px-3 py-2 text-sm"><strong>half zes</strong></td><td class="px-3 py-2 text-sm">half op weg naar zes uur</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">06:30</td><td class="px-3 py-2 text-sm"><strong>half zeven</strong></td><td class="px-3 py-2 text-sm">half op weg naar zeven uur</td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">07:30</td><td class="px-3 py-2 text-sm"><strong>half acht</strong></td><td class="px-3 py-2 text-sm">half op weg naar acht uur</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">08:30</td><td class="px-3 py-2 text-sm"><strong>half negen</strong></td><td class="px-3 py-2 text-sm">half op weg naar negen uur</td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">09:30</td><td class="px-3 py-2 text-sm"><strong>half tien</strong></td><td class="px-3 py-2 text-sm">half op weg naar tien uur</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">10:30</td><td class="px-3 py-2 text-sm"><strong>half elf</strong></td><td class="px-3 py-2 text-sm">half op weg naar elf uur</td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">11:30</td><td class="px-3 py-2 text-sm"><strong>half twaalf</strong></td><td class="px-3 py-2 text-sm">half op weg naar twaalf uur</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">12:30</td><td class="px-3 py-2 text-sm"><strong>half een</strong></td><td class="px-3 py-2 text-sm">half op weg naar een uur</td></tr>
              </tbody>
            </table>
          </div>
          <div class="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 p-4 rounded-r-lg my-4">
            <p class="text-slate-700 dark:text-slate-300"><strong>🧠 Ezelsbruggetje:</strong> Je bent op de helft van de weg naar het volgende uur. Half twee = halverwege tussen een en twee = 01:30.</p>
          </div>
        `,
      },
      {
        title: "Kwartieren en Minuten ⏱️⏲️",
        body: `
          <h3 class="text-lg font-bold mt-4 mb-2">Kwart over</h3>
          <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
            <table class="w-full border-collapse">
              <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Tijd</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Nederlands</th></tr></thead>
              <tbody>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">12:15</td><td class="px-3 py-2 text-sm"><strong>kwart over twaalf</strong></td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">03:15</td><td class="px-3 py-2 text-sm"><strong>kwart over drie</strong></td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">06:15</td><td class="px-3 py-2 text-sm"><strong>kwart over zes</strong></td></tr>
              </tbody>
            </table>
          </div>
          <h3 class="text-lg font-bold mt-6 mb-2">Kwart voor</h3>
          <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
            <table class="w-full border-collapse">
              <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Tijd</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Nederlands</th></tr></thead>
              <tbody>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">11:45</td><td class="px-3 py-2 text-sm"><strong>kwart voor twaalf</strong></td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">02:45</td><td class="px-3 py-2 text-sm"><strong>kwart voor drie</strong></td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">05:45</td><td class="px-3 py-2 text-sm"><strong>kwart voor zes</strong></td></tr>
              </tbody>
            </table>
          </div>
          <h3 class="text-lg font-bold mt-6 mb-2">Alle tijden van 8:00 tot 9:00</h3>
          <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
            <table class="w-full border-collapse">
              <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Tijd</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Nederlands</th></tr></thead>
              <tbody>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">08:00</td><td class="px-3 py-2 text-sm"><strong>acht uur</strong></td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">08:05</td><td class="px-3 py-2 text-sm"><strong>vijf over acht</strong></td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">08:10</td><td class="px-3 py-2 text-sm"><strong>tien over acht</strong></td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">08:15</td><td class="px-3 py-2 text-sm"><strong>kwart over acht</strong></td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">08:20</td><td class="px-3 py-2 text-sm"><strong>tien voor half negen</strong></td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">08:25</td><td class="px-3 py-2 text-sm"><strong>vijf voor half negen</strong></td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">08:30</td><td class="px-3 py-2 text-sm"><strong>half negen</strong></td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">08:35</td><td class="px-3 py-2 text-sm"><strong>vijf over half negen</strong></td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">08:40</td><td class="px-3 py-2 text-sm"><strong>tien over half negen</strong></td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">08:45</td><td class="px-3 py-2 text-sm"><strong>kwart voor negen</strong></td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">08:50</td><td class="px-3 py-2 text-sm"><strong>tien voor negen</strong></td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">08:55</td><td class="px-3 py-2 text-sm"><strong>vijf voor negen</strong></td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">09:00</td><td class="px-3 py-2 text-sm"><strong>negen uur</strong></td></tr>
              </tbody>
            </table>
          </div>
        `,
      },
      {
        title: "Dagdelen 🌅☀️🌙",
        body: `
          <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
            <table class="w-full border-collapse">
              <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Deel van de dag</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Tijd</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Nederlands</th></tr></thead>
              <tbody>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">🌅 Ochtend</td><td class="px-3 py-2 text-sm">06:00 – 12:00</td><td class="px-3 py-2 text-sm"><strong>'s ochtends</strong></td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">☀️ Middag</td><td class="px-3 py-2 text-sm">12:00 – 18:00</td><td class="px-3 py-2 text-sm"><strong>'s middags</strong></td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">🌆 Avond</td><td class="px-3 py-2 text-sm">18:00 – 00:00</td><td class="px-3 py-2 text-sm"><strong>'s avonds</strong></td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">🌙 Nacht</td><td class="px-3 py-2 text-sm">00:00 – 06:00</td><td class="px-3 py-2 text-sm"><strong>'s nachts</strong></td></tr>
              </tbody>
            </table>
          </div>
        `,
      },
      {
        title: "Dagelijkse Activiteiten 🎯",
        body: `
          <h3 class="text-lg font-bold mt-4 mb-2">Ochtendroutine 🌅</h3>
          <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
            <table class="w-full border-collapse">
              <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Nederlands</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Uitleg</th></tr></thead>
              <tbody>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">😴 <strong>wakker worden</strong></td><td class="px-3 py-2 text-sm">stoppen met slapen</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">🛌 <strong>opstaan</strong></td><td class="px-3 py-2 text-sm">uit bed komen</td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">🚿 <strong>douchen</strong></td><td class="px-3 py-2 text-sm">jezelf wassen</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">🪥 <strong>tanden poetsen</strong></td><td class="px-3 py-2 text-sm">je tanden schoonmaken</td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">👔 <strong>aankleden</strong></td><td class="px-3 py-2 text-sm">kleding aandoen</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">🍳 <strong>ontbijten</strong></td><td class="px-3 py-2 text-sm">'s ochtends eten</td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">🚗 <strong>naar het werk gaan</strong></td><td class="px-3 py-2 text-sm">naar je werk reizen</td></tr>
              </tbody>
            </table>
          </div>
          <h3 class="text-lg font-bold mt-6 mb-2">Middagroutine ☀️</h3>
          <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
            <table class="w-full border-collapse">
              <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Nederlands</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Uitleg</th></tr></thead>
              <tbody>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">🍽️ <strong>lunchen</strong></td><td class="px-3 py-2 text-sm">'s middags eten</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">💼 <strong>werken</strong></td><td class="px-3 py-2 text-sm">je werk doen</td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">🏋️ <strong>sporten</strong></td><td class="px-3 py-2 text-sm">bewegen, sport doen</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">🛒 <strong>boodschappen doen</strong></td><td class="px-3 py-2 text-sm">eten en spullen kopen</td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">🍳 <strong>koken</strong></td><td class="px-3 py-2 text-sm">eten maken</td></tr>
              </tbody>
            </table>
          </div>
          <h3 class="text-lg font-bold mt-6 mb-2">Avondroutine 🌆</h3>
          <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
            <table class="w-full border-collapse">
              <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Nederlands</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Uitleg</th></tr></thead>
              <tbody>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">🍝 <strong>avondeten</strong></td><td class="px-3 py-2 text-sm">'s avonds eten</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">📺 <strong>televisie kijken</strong></td><td class="px-3 py-2 text-sm">tv kijken</td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">📖 <strong>lezen</strong></td><td class="px-3 py-2 text-sm">een boek lezen</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">🐕 <strong>de hond uitlaten</strong></td><td class="px-3 py-2 text-sm">met de hond wandelen</td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">🛏️ <strong>naar bed gaan</strong></td><td class="px-3 py-2 text-sm">naar je slaapkamer gaan</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">😴 <strong>slapen</strong></td><td class="px-3 py-2 text-sm">in slaap vallen</td></tr>
              </tbody>
            </table>
          </div>
        `,
      },
      {
        title: "Scheidbare Werkwoorden ⚠️",
        body: `
          <div class="bg-rose-50 dark:bg-rose-900/20 border-l-4 border-rose-500 p-4 rounded-r-lg my-4">
            <p class="font-semibold text-rose-700 dark:text-rose-300">
              ⚠️ PAS OP: Sommige werkwoorden vallen uit elkaar in de zin. Het eerste deel gaat naar het <strong>eind van de zin</strong>!
            </p>
          </div>
          <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
            <table class="w-full border-collapse">
              <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Hele werkwoord</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">In de zin</th></tr></thead>
              <tbody>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm"><strong>opstaan</strong></td><td class="px-3 py-2 text-sm">Ik <strong>sta</strong> om 7 uur <strong>op</strong>. 🛌</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm"><strong>aankleden</strong></td><td class="px-3 py-2 text-sm">Ik <strong>kleed</strong> me <strong>aan</strong>. 👔</td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm"><strong>wakker worden</strong></td><td class="px-3 py-2 text-sm">Ik <strong>word</strong> om 6 uur <strong>wakker</strong>. 😴</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm"><strong>uitlaten</strong></td><td class="px-3 py-2 text-sm">Ik <strong>laat</strong> de hond <strong>uit</strong>. 🐕</td></tr>
              </tbody>
            </table>
          </div>
        `,
      },
      {
        title: "Voorbeelddag – Mijn Dagelijkse Routine 📖",
        body: `
          <div class="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 p-4 rounded-r-lg my-4">
            <p class="text-slate-700 dark:text-slate-300">
              <strong>Mijn dag – door Lisa</strong> 👩<br><br>
              <strong>'s Ochtends:</strong> 🌅<br>
              Ik <strong>word wakker</strong> om <strong>half zeven</strong> (06:30). Ik <strong>sta op</strong> om <strong>zeven uur</strong> (07:00). Eerst <strong>douche</strong> ik. 🚿 Dan <strong>poets</strong> ik mijn tanden. 🪥 Daarna <strong>kleed</strong> ik me <strong>aan</strong>. 👔 Ik <strong>ontbijt</strong> om <strong>kwart over zeven</strong> (07:15). Om <strong>acht uur</strong> (08:00) <strong>ga</strong> ik naar mijn werk. 🚗<br><br>
              <strong>'s Middags:</strong> ☀️<br>
              Ik <strong>werk</strong> van half negen tot half vijf (08:30 – 16:30). Om <strong>twaalf uur</strong> (12:00) <strong>lunch</strong> ik. 🥪 Om <strong>half een</strong> (12:30) <strong>ga</strong> ik weer aan het werk.<br><br>
              <strong>'s Avonds:</strong> 🌆<br>
              Om <strong>half vijf</strong> (16:30) <strong>ga</strong> ik naar huis. 🏠 Ik <strong>kook</strong> om <strong>zes uur</strong> (18:00). 🍳 Daarna <strong>kijk</strong> ik televisie 📺 of <strong>lees</strong> ik een boek. 📖 Om <strong>elf uur</strong> (23:00) <strong>ga</strong> ik naar bed. 🛏️
            </p>
          </div>
        `,
      },
    ],
    rulesTable: [
      {
        rule: "Hele uren",
        structure: "Het is + **getal** + **uur**",
        example: "Het is **drie uur**. Het is **acht uur**.",
        usage: "Bij 12:00: **twaalf uur 's middags** of **twaalf uur 's nachts**.",
      },
      {
        rule: "Halve uren – het volgende uur",
        structure: "Het is **half** + **volgende uur**",
        example: "01:30 = **half twee**. 07:30 = **half acht**. 12:30 = **half een**.",
        usage: "⚠️ PAS OP: Half twee = 01:30 (niet 02:30!). Je noemt het uur dat nog moet komen.",
      },
      {
        rule: "Kwart over en kwart voor",
        structure: "**kwart over** + uur | **kwart voor** + uur",
        example: "03:15 = **kwart over drie**. 05:45 = **kwart voor zes**.",
        usage: "Kwart over = 15 min na het uur. Kwart voor = 15 min voor het uur.",
      },
      {
        rule: "Minuten precies",
        structure: "**vijf/tien over** + uur | **vijf/tien voor half** + uur | **vijf/tien over half** + uur | **vijf/tien voor** + uur",
        example: "08:05 = **vijf over acht**. 08:20 = **tien voor half negen**. 08:35 = **vijf over half negen**. 08:50 = **tien voor negen**.",
        usage: "Na half tel je naar het volgende hele uur toe.",
      },
      {
        rule: "Scheidbare werkwoorden",
        structure: "Het eerste deel van het werkwoord gaat naar het **eind van de zin**.",
        example: "**opstaan** → Ik **sta** om 7 uur **op**. **aankleden** → Ik **kleed** me **aan**.",
        usage: "⚠️ PAS OP: Ik **opsta** is fout! Het eerste deel moet naar het eind.",
      },
      {
        rule: "Voorzetsels bij tijd",
        structure: "**om** + kloktijd | **op** + dag | **in** + maand/jaar",
        example: "**om** 8 uur ⏰ | **op** maandag 📆 | **in** januari ❄️",
        usage: "⚠️ PAS OP: Nooit 'in 8 uur' of 'om maandag'!",
      },
      {
        rule: "Tijdswoorden voor volgorde",
        structure: "**eerst** → **dan** → **daarna** → **later**",
        example: "**Eerst** douche ik, **dan** ontbijt ik, **daarna** ga ik naar mijn werk.",
        usage: "Gebruik deze woorden om je dag in de goede volgorde te vertellen.",
      },
    ],
    callouts: [
      { type: "remember", label: "Onthoud 1", text: "Hele uren: Het is **een uur, twee uur, drie uur**..." },
      { type: "remember", label: "Onthoud 2", text: "Halve uren: **half twee** = 01:30. Je zegt het volgende uur." },
      { type: "remember", label: "Onthoud 3", text: "Kwartieren: **kwart over** (15 min na) en **kwart voor** (15 min voor)." },
      { type: "remember", label: "Onthoud 4", text: "Dagdelen: **'s ochtends, 's middags, 's avonds, 's nachts**." },
      { type: "remember", label: "Onthoud 5", text: "Scheidbare werkwoorden: **opstaan** → Ik **sta op**. **aankleden** → Ik **kleed me aan**." },
      { type: "remember", label: "Onthoud 6", text: "Voorzetsels: **om** + kloktijd, **op** + dag, **in** + maand/jaar." },
      { type: "remember", label: "Onthoud 7", text: "Tijdswoorden: **eerst, dan, daarna, later**." },
    ],
    commonMistakes: [
      { incorrect: "half twee = 02:30", correct: "half twee = 01:30", explanation: "Half + het volgende uur" },
      { incorrect: "Ik opsta om 7 uur.", correct: "Ik sta op om 7 uur.", explanation: "Opstaan is scheidbaar, 'op' gaat naar het eind" },
      { incorrect: "Ik ga naar bed op 11 uur.", correct: "Ik ga om 11 uur naar bed.", explanation: "Tijd met 'om', niet met 'op'" },
      { incorrect: "In 8 uur ga ik naar werk.", correct: "Om 8 uur ga ik naar mijn werk.", explanation: "Voor tijd gebruik je 'om', niet 'in'" },
      { incorrect: "Ik kleed om 8 uur aan.", correct: "Ik kleed me om 8 uur aan.", explanation: "Aankleden heeft 'me' nodig" },
      { incorrect: "Om maandag ga ik naar school.", correct: "Op maandag ga ik naar school.", explanation: "Voor dagen gebruik je 'op'" },
      { incorrect: "Ik douche me.", correct: "Ik douche.", explanation: "Douchen is zonder 'me'" },
      { incorrect: "Ik word wakker om 7 uur op.", correct: "Ik word om 7 uur wakker.", explanation: "Alleen 'wakker' gaat naar het eind" },
      { incorrect: "kwart over half acht = 07:45", correct: "kwart voor acht = 07:45", explanation: "Na half tel je naar het hele uur toe" },
    ],
    review: [
      "**Hele uren:** een uur, twee uur, drie uur... tot twaalf uur.",
      "**Halve uren:** half twee (01:30), half drie (02:30)... half een (12:30).",
      "**Kwart over:** kwart over een (01:15), kwart over twee (02:15)...",
      "**Kwart voor:** kwart voor een (00:45), kwart voor twee (01:45)...",
      "**Minuten:** vijf over, tien over, vijf voor half, tien voor half, vijf over half, tien over half, vijf voor, tien voor.",
      "**Dagdelen:** 's ochtends (06-12), 's middags (12-18), 's avonds (18-00), 's nachts (00-06).",
      "**Tijdswoorden:** eerst, dan, daarna, later.",
      "**Voorzetsels:** om 8 uur, op maandag, in januari.",
      "**Dagelijkse routine:** opstaan, douchen, ontbijten, werken, lunchen, koken, eten, tv-kijken, naar bed gaan, slapen.",
      "**Scheidbare werkwoorden:** opstaan → Ik sta op. aankleden → Ik kleed me aan.",
    ],
    qa: [
      { question: "Hoe vraag je hoe laat het is?", answer: "**Hoe laat is het?**" },
      { question: "Hoe zeg je 08:00 in het Nederlands?", answer: "**Acht uur**." },
      { question: "Hoe laat is \"half drie\"?", answer: "**02:30**. Het is half op weg naar drie uur." },
      { question: "Hoe laat is \"half acht\"?", answer: "**07:30**. Het is half op weg naar acht uur." },
      { question: "Waarom is \"half twee\" 01:30 en niet 02:30?", answer: "Omdat je in het Nederlands het **volgende** uur noemt. Je bent halverwege tussen een en twee." },
      { question: "Hoe zeg je 03:15?", answer: "**Kwart over drie**." },
      { question: "Hoe zeg je 05:45?", answer: "**Kwart voor zes**." },
      { question: "Hoe zeg je 08:05?", answer: "**Vijf over acht**." },
      { question: "Hoe zeg je 08:20?", answer: "**Tien voor half negen**." },
      { question: "Hoe zeg je 08:35?", answer: "**Vijf over half negen**." },
      { question: "Hoe zeg je 08:50?", answer: "**Tien voor negen**." },
      { question: "Wat betekent \"'s ochtends\"?", answer: "In de ochtend, tussen 06:00 en 12:00 uur." },
      { question: "Wat betekent \"'s avonds\"?", answer: "In de avond, tussen 18:00 en 00:00 uur." },
      { question: "Hoe zeg je \"Ik word wakker om 7 uur\"?", answer: "**Ik word wakker om 7 uur**." },
      { question: "Hoe zeg je \"Ik sta op om half 8\"?", answer: "**Ik sta op om half acht**." },
      { question: "Waarom zeg je \"Ik sta op\" en niet \"Ik opsta\"?", answer: "Omdat **opstaan** een scheidbaar werkwoord is. Het eerste deel \"op\" gaat naar het eind van de zin." },
      { question: "Hoe zeg je \"Ik kleed me aan\"?", answer: "**Ik kleed me aan**." },
      { question: "Hoe zeg je \"Ik ontbijt om 8 uur\"?", answer: "**Ik ontbijt om 8 uur**." },
      { question: "Hoe zeg je \"Ik ga om half 9 naar mijn werk\"?", answer: "**Ik ga om half negen naar mijn werk**." },
      { question: "Hoe zeg je \"Ik kijk 's avonds televisie\"?", answer: "**Ik kijk 's avonds televisie**." },
      { question: "Hoe zeg je \"Ik ga om 11 uur naar bed\"?", answer: "**Ik ga om 11 uur naar bed**." },
      { question: "Hoe zeg je \"Ik laat de hond uit\"?", answer: "**Ik laat de hond uit**." },
      { question: "Hoe zeg je \"Eerst douche ik, dan ontbijt ik\"?", answer: "**Eerst douche ik, dan ontbijt ik**." },
      { question: "Welk voorzetsel gebruik je voor een specifieke tijd?", answer: "**Om**. Bijvoorbeeld: om 8 uur, om half 3." },
      { question: "Welk voorzetsel gebruik je voor een dag?", answer: "**Op**. Bijvoorbeeld: op maandag." },
      { question: "Welk voorzetsel gebruik je voor een maand?", answer: "**In**. Bijvoorbeeld: in januari." },
      { question: "Hoe vraag je \"Hoe laat sta jij op?\"", answer: "**Hoe laat sta jij op?**" },
      { question: "Wat betekent \"uitslapen\"?", answer: "Langer slapen dan normaal, niet vroeg opstaan." },
      { question: "Wat betekent \"boodschappen doen\"?", answer: "Eten en spullen kopen in de winkel." },
      { question: "Hoe zeg je \"Ik ben te laat\"?", answer: "**Ik ben te laat**." },
      { question: "Hoe zeg je \"Ik ben op tijd\"?", answer: "**Ik ben op tijd**." },
      { question: "Wat is het verschil tussen \"vroeg\" en \"laat\"?", answer: "**Vroeg** = aan het begin van de dag. **Laat** = aan het eind van de dag." },
      { question: "Hoe zeg je \"In het weekend slaap ik uit\"?", answer: "**In het weekend slaap ik uit**." },
      { question: "Hoe vraag je \"Wat doe jij 's avonds?\"", answer: "**Wat doe jij 's avonds?**" },
      { question: "Hoe zeg je \"Ik poets mijn tanden voordat ik naar bed ga\"?", answer: "**Ik poets mijn tanden voordat ik naar bed ga**." },
    ],
  },
    {
    id: "nl-boodschappen-1",
    title: "Boodschappen Doen",
    level: 1,
    topic: "Presentatie & Vocabulaire",
    body: "Leer hoe je in het Nederlands boodschappen doet. Je leert de namen van winkels, hoe je eten koopt op de markt en in de supermarkt, hoe je prijzen vraagt en begrijpt, en hoe je een gesprek voert met de verkoper. Na deze les kun je zelfstandig boodschappen doen!",
    overview:
      "Hier vind je een **volledig uitgewerkte** les over boodschappen doen. Je leert alle woorden voor winkels en producten, hoe je om informatie vraagt, hoe je prijzen leest en zegt, hoe je betaalt, en hoe je een praatje maakt met de verkoper op de markt of in de supermarkt. Alles met duidelijke voorbeelden, ezelsbruggetjes en praktische oefenvragen. Na deze les loop je met vertrouwen de winkel in!",
    anchorSectionId: "winkels",
    exercises: [],
    timeExpressionsLabel: "Winkels 🏪",
    timeExpressions: {
      header: "Nederlands | Uitleg",
      rows: [
        ["🏪 <strong>de supermarkt</strong>", "een grote winkel waar je bijna alles kunt kopen"],
        ["🎪 <strong>de markt</strong>", "een plek buiten met kramen waar je eten en spullen koopt"],
        ["🥖 <strong>de bakker</strong>", "een winkel waar je brood en gebak koopt"],
        ["🥩 <strong>de slager</strong>", "een winkel waar je vlees koopt"],
        ["🧀 <strong>de kaasboer</strong>", "een winkel waar je kaas koopt"],
        ["🍎 <strong>de groenteboer</strong>", "een winkel waar je groente en fruit koopt"],
        ["💊 <strong>de drogist</strong>", "een winkel waar je zeep, shampoo en medicijnen koopt"],
        ["🏬 <strong>het winkelcentrum</strong>", "een groot gebouw met veel winkels samen"],
      ],
    },
    details: [
      {
        title: "Producten in de Supermarkt 🛒",
        body: `
          <h3 class="text-lg font-bold mt-4 mb-2">Groente en fruit 🍎🥕</h3>
          <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
            <table class="w-full border-collapse">
              <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Nederlands</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Nederlands</th></tr></thead>
              <tbody>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">🍎 <strong>de appel</strong></td><td class="px-3 py-2 text-sm">🥕 <strong>de wortel</strong></td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">🍌 <strong>de banaan</strong></td><td class="px-3 py-2 text-sm">🧅 <strong>de ui</strong></td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">🍊 <strong>de sinaasappel</strong></td><td class="px-3 py-2 text-sm">🥔 <strong>de aardappel</strong></td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">🍇 <strong>de druiven</strong></td><td class="px-3 py-2 text-sm">🍅 <strong>de tomaat</strong></td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">🍓 <strong>de aardbei</strong></td><td class="px-3 py-2 text-sm">🥒 <strong>de komkommer</strong></td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">🍋 <strong>de citroen</strong></td><td class="px-3 py-2 text-sm">🥬 <strong>de sla</strong></td></tr>
              </tbody>
            </table>
          </div>
          <h3 class="text-lg font-bold mt-6 mb-2">Brood, ontbijt, vlees en vis 🍞🥩🐟</h3>
          <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
            <table class="w-full border-collapse">
              <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Nederlands</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Nederlands</th></tr></thead>
              <tbody>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">🍞 <strong>het brood</strong></td><td class="px-3 py-2 text-sm">🥩 <strong>het vlees</strong></td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">🧀 <strong>de kaas</strong></td><td class="px-3 py-2 text-sm">🍗 <strong>de kip</strong></td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">🥛 <strong>de melk</strong></td><td class="px-3 py-2 text-sm">🐟 <strong>de vis</strong></td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">🥚 <strong>het ei</strong></td><td class="px-3 py-2 text-sm">🌭 <strong>de worst</strong></td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">🍯 <strong>de jam</strong></td><td class="px-3 py-2 text-sm">🥓 <strong>de ham</strong></td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">🍫 <strong>de hagelslag</strong></td><td class="px-3 py-2 text-sm">🧈 <strong>de boter</strong></td></tr>
              </tbody>
            </table>
          </div>
          <h3 class="text-lg font-bold mt-6 mb-2">Dranken en andere producten 🥤🧹</h3>
          <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
            <table class="w-full border-collapse">
              <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Nederlands</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Nederlands</th></tr></thead>
              <tbody>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">💧 <strong>het water</strong></td><td class="px-3 py-2 text-sm">🧻 <strong>het wc-papier</strong></td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">☕ <strong>de koffie</strong></td><td class="px-3 py-2 text-sm">🧴 <strong>de shampoo</strong></td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">🍵 <strong>de thee</strong></td><td class="px-3 py-2 text-sm">🪥 <strong>de tandpasta</strong></td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">🥤 <strong>de frisdrank</strong></td><td class="px-3 py-2 text-sm">🍚 <strong>de rijst</strong></td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">🍺 <strong>het bier</strong></td><td class="px-3 py-2 text-sm">🍝 <strong>de pasta</strong></td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">🍷 <strong>de wijn</strong></td><td class="px-3 py-2 text-sm">🫒 <strong>de olie</strong></td></tr>
              </tbody>
            </table>
          </div>
        `,
      },
      {
        title: "Hoeveelheden en Verpakkingen 📦",
        body: `
          <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
            <table class="w-full border-collapse">
              <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Nederlands</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Uitleg</th></tr></thead>
              <tbody>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm"><strong>een pak</strong> melk 🥛</td><td class="px-3 py-2 text-sm">een kartonnen verpakking</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm"><strong>een fles</strong> water 💧</td><td class="px-3 py-2 text-sm">een glazen of plastic fles</td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm"><strong>een blikje</strong> cola 🥤</td><td class="px-3 py-2 text-sm">een klein metalen blikje</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm"><strong>een zak</strong> rijst 🍚</td><td class="px-3 py-2 text-sm">een plastic of papieren zak</td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm"><strong>een doosje</strong> eieren 🥚</td><td class="px-3 py-2 text-sm">een kartonnen doosje</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm"><strong>een pot</strong> jam 🍯</td><td class="px-3 py-2 text-sm">een glazen pot</td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm"><strong>een stuk</strong> kaas 🧀</td><td class="px-3 py-2 text-sm">een deel van een groot stuk</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm"><strong>een plakje</strong> ham 🥓</td><td class="px-3 py-2 text-sm">een dun gesneden stukje</td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm"><strong>een bosje</strong> wortels 🥕</td><td class="px-3 py-2 text-sm">meerdere wortels bij elkaar</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm"><strong>een kilo</strong></td><td class="px-3 py-2 text-sm">1000 gram</td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm"><strong>een halve kilo</strong></td><td class="px-3 py-2 text-sm">500 gram</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm"><strong>een ons</strong></td><td class="px-3 py-2 text-sm">100 gram</td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm"><strong>een liter</strong></td><td class="px-3 py-2 text-sm">1000 milliliter</td></tr>
              </tbody>
            </table>
          </div>
        `,
      },
      {
        title: "Prijzen Vragen en Zeggen 💶",
        body: `
          <h3 class="text-lg font-bold mt-4 mb-2">De vraag stellen</h3>
          <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
            <table class="w-full border-collapse">
              <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Nederlands</th></tr></thead>
              <tbody>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Wat kost dit?</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Hoeveel kost deze appel?</td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Wat is de prijs van deze kaas?</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Hoeveel moet ik betalen?</td></tr>
              </tbody>
            </table>
          </div>
          <h3 class="text-lg font-bold mt-6 mb-2">Prijzen zeggen</h3>
          <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
            <table class="w-full border-collapse">
              <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Prijs</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Nederlands</th></tr></thead>
              <tbody>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">€ 0,50</td><td class="px-3 py-2 text-sm"><strong>vijftig cent</strong></td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">€ 1,00</td><td class="px-3 py-2 text-sm"><strong>een euro</strong></td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">€ 1,50</td><td class="px-3 py-2 text-sm"><strong>een euro vijftig</strong></td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">€ 2,25</td><td class="px-3 py-2 text-sm"><strong>twee euro vijfentwintig</strong></td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">€ 3,75</td><td class="px-3 py-2 text-sm"><strong>drie euro vijfenzeventig</strong></td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">€ 10,00</td><td class="px-3 py-2 text-sm"><strong>tien euro</strong></td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">€ 2,99</td><td class="px-3 py-2 text-sm"><strong>twee negenennegentig</strong></td></tr>
              </tbody>
            </table>
          </div>
        `,
      },
      {
        title: "Gesprek op de Markt 🎪",
        body: `
          <div class="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 p-4 rounded-r-lg my-4">
            <p class="text-slate-700 dark:text-slate-300">
              <strong>Bij de groentekraam:</strong><br><br>
              <strong>Klant:</strong> Goedemorgen! 🍎<br>
              <strong>Verkoper:</strong> Goedemorgen! Wat kan ik voor u doen?<br>
              <strong>Klant:</strong> Ik wil graag zes appels. Wat kosten die?<br>
              <strong>Verkoper:</strong> Deze appels kosten € 2,50 per kilo.<br>
              <strong>Klant:</strong> Goed, doet u mij maar een kilo. En ook een bosje wortels. 🥕<br>
              <strong>Verkoper:</strong> Alstublieft. Anders nog iets?<br>
              <strong>Klant:</strong> Nee, dat was het. Hoeveel is het samen?<br>
              <strong>Verkoper:</strong> Dat is € 4,25 in totaal.<br>
              <strong>Klant:</strong> Alstublieft. (geeft geld) 💶<br>
              <strong>Verkoper:</strong> Dank u wel! Fijne dag nog!<br>
              <strong>Klant:</strong> Tot ziens! 👋
            </p>
          </div>
          <div class="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 p-4 rounded-r-lg my-4">
            <p class="text-slate-700 dark:text-slate-300">
              <strong>Bij de kaasboer:</strong><br><br>
              <strong>Klant:</strong> Goedemiddag! 🧀<br>
              <strong>Verkoper:</strong> Goedemiddag! Zegt u het maar.<br>
              <strong>Klant:</strong> Mag ik een stuk oude kaas? Ongeveer een halve kilo.<br>
              <strong>Verkoper:</strong> Natuurlijk. Iets meer dan een halve kilo, is dat goed?<br>
              <strong>Klant:</strong> Ja, prima. Wat kost dat?<br>
              <strong>Verkoper:</strong> Dat wordt € 6,30.<br>
              <strong>Klant:</strong> Hier heeft u € 10. 💶<br>
              <strong>Verkoper:</strong> En hier is uw wisselgeld: € 3,70. Alstublieft!<br>
              <strong>Klant:</strong> Dank u wel! Tot ziens! 👋
            </p>
          </div>
        `,
      },
      {
        title: "Gesprek in de Supermarkt 🛒",
        body: `
          <div class="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 p-4 rounded-r-lg my-4">
            <p class="text-slate-700 dark:text-slate-300">
              <strong>Klant zoekt iets:</strong><br><br>
              <strong>Klant:</strong> Pardon, waar vind ik de rijst? 🍚<br>
              <strong>Medewerker:</strong> De rijst staat in gangpad 4, aan de linkerkant.<br>
              <strong>Klant:</strong> Dank u wel!<br><br>
              ---<br><br>
              <strong>Aan de kassa:</strong><br><br>
              <strong>Caissière:</strong> Goedemiddag! Heeft u alles kunnen vinden?<br>
              <strong>Klant:</strong> Ja, dank u!<br>
              <strong>Caissière:</strong> Wilt u een bonnetje? 🧾<br>
              <strong>Klant:</strong> Nee, dank u. Ik wil graag pinnen. 💳<br>
              <strong>Caissière:</strong> Dat kan. Steekt u uw pas maar in het apparaat.<br>
              <strong>Klant:</strong> (pint) Alstublieft.<br>
              <strong>Caissière:</strong> Dank u wel! Fijne dag nog!<br>
              <strong>Klant:</strong> Tot ziens! 👋
            </p>
          </div>
        `,
      },
      {
        title: "Handige Zinnen en Betalen 🗣️💳",
        body: `
          <h3 class="text-lg font-bold mt-4 mb-2">Iets vragen in de winkel</h3>
          <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
            <table class="w-full border-collapse">
              <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Nederlands</th></tr></thead>
              <tbody>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Waar vind ik de melk? 🥛</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Heeft u ook verse vis? 🐟</td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Kunt u mij helpen?</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Heeft u dit ook in een kleinere verpakking?</td></tr>
              </tbody>
            </table>
          </div>
          <h3 class="text-lg font-bold mt-6 mb-2">Aan de kassa</h3>
          <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
            <table class="w-full border-collapse">
              <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Nederlands</th></tr></thead>
              <tbody>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Dat was het.</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Hoeveel is het samen?</td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Kan ik pinnen? 💳</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Mag ik een bonnetje? 🧾</td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Heeft u een tasje? 🛍️</td></tr>
              </tbody>
            </table>
          </div>
          <h3 class="text-lg font-bold mt-6 mb-2">Betalen</h3>
          <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
            <table class="w-full border-collapse">
              <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Nederlands</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Uitleg</th></tr></thead>
              <tbody>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">💶 <strong>contant</strong></td><td class="px-3 py-2 text-sm">met munten en briefgeld</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">💳 <strong>pinnen</strong></td><td class="px-3 py-2 text-sm">met je bankpas betalen</td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">📱 <strong>contactloos betalen</strong></td><td class="px-3 py-2 text-sm">je pas of telefoon tegen het apparaat houden</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">💰 <strong>wisselgeld</strong></td><td class="px-3 py-2 text-sm">het geld dat je terugkrijgt</td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">🏷️ <strong>de aanbieding</strong></td><td class="px-3 py-2 text-sm">iets is tijdelijk goedkoper</td></tr>
              </tbody>
            </table>
          </div>
        `,
      },
    ],
    rulesTable: [
      {
        rule: "Prijs vragen",
        structure: "**Wat kost** + enkelvoud? / **Wat kosten** + meervoud?",
        example: "Wat **kost** dit? Wat **kosten** de appels?",
        usage: "⚠️ PAS OP: Bij meervoud gebruik je **kosten**, niet **kost**.",
      },
      {
        rule: "Prijzen zeggen",
        structure: "getal + **euro** + getal + **cent** / getal + **euro** + getal",
        example: "**een euro vijftig** (€1,50), **twee vijfentwintig** (€2,25)",
        usage: "In spreektaal mag je 'euro' weglaten: 'twee vijftig' in plaats van 'twee euro vijftig'.",
      },
      {
        rule: "Hoeveelheden bestellen",
        structure: "**een** + verpakking + product / getal + verpakking + product",
        example: "**een kilo** appels, **een pak** melk, **twee flessen** water",
        usage: "Bij de toonbank: 'Mag ik **een ons** kaas?' of 'Kunt u mij **200 gram** ham snijden?'",
      },
      {
        rule: "Beleefd bestellen",
        structure: "**Mag ik** + product? / **Ik wil graag** + product. / **Doet u mij maar** + product.",
        example: "**Mag ik** een brood? **Ik wil graag** vier appels. **Doet u mij maar** een kilo.",
        usage: "⚠️ PAS OP: Zeg altijd 'alstublieft' bij het bestellen en 'dank u wel' bij het afrekenen.",
      },
      {
        rule: "Vragen waar iets ligt",
        structure: "**Waar vind ik** + product? / **Waar staat** + product?",
        example: "**Waar vind ik** de melk? **Waar staat** het brood?",
        usage: "In een supermarkt kun je ook vragen: 'Pardon, weet u waar de rijst is?'",
      },
      {
        rule: "Betalen – pinnen of contant",
        structure: "**Kan ik pinnen?** / **Ik wil graag pinnen.** / **Ik betaal contant.**",
        example: "**Kan ik pinnen?** Ja, dat kan. Steekt u uw pas maar in het apparaat.",
        usage: "Pinnen is het werkwoord voor betalen met je pinpas. Contant = met geld.",
      },
    ],
    callouts: [
      { type: "remember", label: "Onthoud 1", text: "Belangrijke winkels: **supermarkt, markt, bakker, slager, kaasboer, groenteboer, drogist**." },
      { type: "remember", label: "Onthoud 2", text: "Hoeveelheden: **een kilo, een halve kilo, een ons, een liter, een pak, een fles, een stuk, een plakje, een bosje**." },
      { type: "remember", label: "Onthoud 3", text: "Prijs vragen: **Wat kost dit? Hoeveel kost dat?**" },
      { type: "remember", label: "Onthoud 4", text: "Prijzen zeggen: **een euro vijftig, twee euro vijfentwintig, drie vijftig**." },
      { type: "remember", label: "Onthoud 5", text: "Betalen: **pinnen** (pinpas), **contant** (geld), **contactloos** (tegen apparaat houden)." },
      { type: "remember", label: "Onthoud 6", text: "Beleefdheid: zeg **alstublieft** bij bestellen en **dank u wel** bij afrekenen." },
      { type: "remember", label: "Onthoud 7", text: "Neem je **eigen tas** mee! In Nederland moet je vaak betalen voor een plastic tasje." },
    ],
    commonMistakes: [
      { incorrect: "Hoeveel kost de appels?", correct: "Hoeveel kosten de appels?", explanation: "Meervoud = kosten" },
      { incorrect: "Mag ik betalen met pin?", correct: "Mag ik pinnen?", explanation: "Pinnen is het werkwoord" },
      { incorrect: "Ik heb betaald met pin.", correct: "Ik heb gepind.", explanation: "Gebruik het werkwoord pinnen" },
      { incorrect: "Een kilo appels graag.", correct: "Een kilo appels, alstublieft.", explanation: "\"Alstublieft\" is beleefder" },
      { incorrect: "Dank u wel voor de boodschappen.", correct: "Dank u wel! / Bedankt!", explanation: "Je bedankt de persoon, niet de boodschappen" },
      { incorrect: "Hoe duur is dit?", correct: "Wat kost dit?", explanation: "\"Wat kost dit?\" is gebruikelijker" },
      { incorrect: "Kunt u mij helpen met vinden?", correct: "Kunt u mij helpen zoeken?", explanation: "\"Helpen zoeken\" is natuurlijker" },
    ],
    review: [
      "**Winkels:** supermarkt, markt, bakker, slager, kaasboer, groenteboer, drogist.",
      "**Groente/fruit:** appel, banaan, sinaasappel, druiven, aardbei, wortel, ui, aardappel, tomaat, komkommer.",
      "**Brood/ontbijt:** brood, stokbrood, croissant, boter, kaas, melk, ei, jam, hagelslag.",
      "**Vlees/vis:** vlees, kip, rundvlees, varkensvlees, vis, garnalen, worst, ham.",
      "**Dranken:** water, melk, koffie, thee, sinaasappelsap, appelsap, frisdrank, bier, wijn.",
      "**Hoeveelheden:** een kilo, een halve kilo, een ons, een liter, een pak, een fles, een blikje, een stuk, een plakje, een bosje.",
      "**Vragen naar prijs:** Wat kost dit? Hoeveel kost dat?",
      "**Prijzen zeggen:** een euro vijftig, twee euro vijfentwintig, drie vijftig.",
      "**Betalen:** pinnen, contant betalen, contactloos betalen.",
      "**Beleefdheid:** alstublieft, dank u wel, tot ziens.",
    ],
    qa: [
      { question: "Waar koop je brood?", answer: "Bij de **bakker** of in de **supermarkt**." },
      { question: "Waar koop je vlees?", answer: "Bij de **slager** of in de **supermarkt**." },
      { question: "Waar koop je kaas?", answer: "Bij de **kaasboer** of in de **supermarkt**." },
      { question: "Hoe vraag je wat iets kost?", answer: "**Wat kost dit?** of **Hoeveel kost dat?**" },
      { question: "Hoe zeg je € 1,50?", answer: "**Een euro vijftig** of **een vijftig**." },
      { question: "Hoe zeg je € 2,25?", answer: "**Twee euro vijfentwintig** of **twee vijfentwintig**." },
      { question: "Wat betekent \"een ons\"?", answer: "100 gram." },
      { question: "Wat betekent \"een kilo\"?", answer: "1000 gram." },
      { question: "Hoe vraag je waar iets ligt in de supermarkt?", answer: "**Waar vind ik de melk?** of **Waar staat het brood?**" },
      { question: "Hoe bestel je kaas aan de toonbank?", answer: "**Mag ik een half ons kaas?** of **Ik wil graag een stuk kaas.**" },
      { question: "Wat zeg je aan de kassa als je alles hebt?", answer: "**Dat was het.**" },
      { question: "Hoe vraag je of je kunt pinnen?", answer: "**Kan ik pinnen?**" },
      { question: "Hoe vraag je om een bonnetje?", answer: "**Mag ik een bonnetje?**" },
      { question: "Wat is het verschil tussen pinnen en contant betalen?", answer: "**Pinnen** = met je bankpas betalen. **Contant betalen** = met munten en briefgeld betalen." },
      { question: "Wat zeg je als je de winkel verlaat?", answer: "**Dank u wel! Tot ziens!**" },
      { question: "Wat betekent \"in de aanbieding\"?", answer: "Het product is tijdelijk goedkoper." },
      { question: "Hoe vraag je of iemand je kan helpen in de winkel?", answer: "**Kunt u mij helpen?** of **Pardon, weet u waar de rijst is?**" },
      { question: "Wat betekent \"wisselgeld\"?", answer: "Het geld dat je terugkrijgt als je contant betaalt." },
      { question: "Hoe zeg je \"I want to pay by card\"?", answer: "**Ik wil graag pinnen**." },
      { question: "Hoe zeg je \"Do you have a bag?\"?", answer: "**Heeft u een tasje?**" },
    ],
  },    {
    id: "nl-cafe-1",
    title: "In een Café of Restaurant",
    level: 1,
    topic: "Presentatie",
    body: "Leer hoe je in het Nederlands iets bestelt in een café of restaurant. Je leert hoe je een tafel kiest, eten en drinken bestelt, om de rekening vraagt en afrekent. Na deze les voel je je op je gemak in elk Nederlands café of restaurant!",
    overview:
      "Hier vind je een **volledig uitgewerkte** les over uit eten gaan. Je leert alle belangrijke woorden en zinnen voor in een café en restaurant, hoe je een gesprek voert met de ober, hoe je beleefd iets bestelt, en hoe je afrekent. Alles met duidelijke voorbeelden, ezelsbruggetjes en praktische oefenvragen. Na deze les bestel jij met vertrouwen je eten en drinken!",
    anchorSectionId: "binnenkomen",
    exercises: [],
    timeExpressionsLabel: "Dranken ☕🥤",
    timeExpressions: {
      header: "Nederlands",
      rows: [
        ["☕ <strong>een kop koffie</strong>"],
        ["🍵 <strong>een kop thee</strong>"],
        ["☕ <strong>een cappuccino</strong>"],
        ["☕ <strong>een latte macchiato</strong>"],
        ["💧 <strong>een glas water</strong>"],
        ["💧 <strong>een fles water</strong> (met of zonder bubbels)"],
        ["🍊 <strong>een sinaasappelsap</strong>"],
        ["🥤 <strong>een cola</strong>"],
        ["🍺 <strong>een biertje</strong> / <strong>een pils</strong>"],
        ["🍷 <strong>een glas witte wijn</strong>"],
        ["🍷 <strong>een glas rode wijn</strong>"],
      ],
    },
    details: [
      {
        title: "Binnenkomen en een Tafel Kiezen 🚶‍♂️🪑",
        body: `
          <h3 class="text-lg font-bold mt-4 mb-2">Binnenkomen</h3>
          <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
            <table class="w-full border-collapse">
              <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Nederlands</th></tr></thead>
              <tbody>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Goedemiddag! Heeft u een tafel voor twee?</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Goedenavond! Is er nog een tafeltje vrij?</td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Hallo! Ik heb gereserveerd op naam van Jansen.</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Kunnen we buiten zitten op het terras? ☀️</td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Mogen we binnen zitten? Het is wat koud. ❄️</td></tr>
              </tbody>
            </table>
          </div>
          <h3 class="text-lg font-bold mt-6 mb-2">De ober komt naar je toe</h3>
          <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
            <table class="w-full border-collapse">
              <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">De ober zegt</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Jij antwoordt</th></tr></thead>
              <tbody>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Heeft u gereserveerd?</td><td class="px-3 py-2 text-sm">Ja, op naam van Jansen. / Nee, we hebben niet gereserveerd.</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Hoeveel personen?</td><td class="px-3 py-2 text-sm">Twee personen. / Met z'n drieen.</td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Wilt u binnen of buiten zitten?</td><td class="px-3 py-2 text-sm">Binnen, alstublieft. / Buiten, graag. ☀️</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Ik breng de menukaart.</td><td class="px-3 py-2 text-sm">Dank u wel! 📋</td></tr>
              </tbody>
            </table>
          </div>
        `,
      },
      {
        title: "Eten Bestellen 🍝🥗🍰",
        body: `
          <h3 class="text-lg font-bold mt-4 mb-2">Soepen, broodjes en hoofdgerechten</h3>
          <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
            <table class="w-full border-collapse">
              <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Nederlands</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Nederlands</th></tr></thead>
              <tbody>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">🍅🍜 <strong>de tomatensoep</strong></td><td class="px-3 py-2 text-sm">🍝 <strong>de pasta</strong></td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">🥗 <strong>de salade</strong></td><td class="px-3 py-2 text-sm">🍳 <strong>de omelet</strong></td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">🧀🥪 <strong>het broodje kaas</strong></td><td class="px-3 py-2 text-sm">🥞 <strong>de pannenkoek</strong></td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">🥚🥪 <strong>het broodje ei</strong></td><td class="px-3 py-2 text-sm">🍟 <strong>de friet</strong></td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">🧀🥪 <strong>de tosti</strong></td><td class="px-3 py-2 text-sm">🍟 <strong>de friet met mayonaise</strong></td></tr>
              </tbody>
            </table>
          </div>
          <h3 class="text-lg font-bold mt-6 mb-2">Nagerechten</h3>
          <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
            <table class="w-full border-collapse">
              <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Nederlands</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Nederlands</th></tr></thead>
              <tbody>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">🍰 <strong>de appeltaart</strong></td><td class="px-3 py-2 text-sm">🍫🍰 <strong>de chocoladetaart</strong></td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">🍦 <strong>het ijsje</strong></td><td class="px-3 py-2 text-sm">🍓🍰 <strong>de aardbeientaart</strong></td></tr>
              </tbody>
            </table>
          </div>
          <h3 class="text-lg font-bold mt-6 mb-2">Extra vragen bij het bestellen</h3>
          <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
            <table class="w-full border-collapse">
              <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Nederlands</th></tr></thead>
              <tbody>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Wat raadt u aan?</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Wat is de specialiteit van het huis?</td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Is dit gerecht pittig? 🌶️</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Heeft u ook vegetarische gerechten? 🥗</td></tr>
              </tbody>
            </table>
          </div>
        `,
      },
      {
        title: "Tijdens het Eten & Iets Vragen 🍽️",
        body: `
          <h3 class="text-lg font-bold mt-4 mb-2">Tijdens het eten</h3>
          <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
            <table class="w-full border-collapse">
              <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">De ober vraagt</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Jij antwoordt</th></tr></thead>
              <tbody>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Smaakt het?</td><td class="px-3 py-2 text-sm">Ja, heerlijk! 😋</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Is alles naar wens?</td><td class="px-3 py-2 text-sm">Ja, dank u! Alles is prima.</td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Wilt u nog iets drinken?</td><td class="px-3 py-2 text-sm">Ja, nog een cola, alstublieft. 🥤</td></tr>
              </tbody>
            </table>
          </div>
          <h3 class="text-lg font-bold mt-6 mb-2">Iets vragen of klagen (beleefd!)</h3>
          <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
            <table class="w-full border-collapse">
              <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Nederlands</th></tr></thead>
              <tbody>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Pardon, mijn soep is koud. 🍜❄️</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Sorry, ik had zonder suiker besteld.</td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Mag ik een schoon glas? 🥛</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Kunt u een nieuw mes brengen? 🔪</td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Het duurt erg lang. Komt ons eten nog?</td></tr>
              </tbody>
            </table>
          </div>
        `,
      },
      {
        title: "De Rekening Vragen en Betalen 🧾💶",
        body: `
          <h3 class="text-lg font-bold mt-4 mb-2">De rekening vragen</h3>
          <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
            <table class="w-full border-collapse">
              <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Nederlands</th></tr></thead>
              <tbody>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Mag ik de rekening, alstublieft? 🧾</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Kunnen we afrekenen?</td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Kunnen we samen betalen of apart?</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Mogen we apart betalen?</td></tr>
              </tbody>
            </table>
          </div>
          <h3 class="text-lg font-bold mt-6 mb-2">De fooi geven</h3>
          <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
            <table class="w-full border-collapse">
              <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Nederlands</th></tr></thead>
              <tbody>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Het was heerlijk, hou het wisselgeld maar.</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Laat de rest maar zitten.</td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Doe er maar € 2,50 bij voor de fooi.</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Alstublieft, het is goed zo.</td></tr>
              </tbody>
            </table>
          </div>
        `,
      },
      {
        title: "Voorbeeldgesprek in een Café ☕",
        body: `
          <div class="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 p-4 rounded-r-lg my-4">
            <p class="text-slate-700 dark:text-slate-300">
              <strong>Lisa en Tom zitten op het terras:</strong><br><br>
              <strong>Ober:</strong> Goedemiddag! Heeft u al een keuze kunnen maken?<br>
              <strong>Lisa:</strong> Goedemiddag! Ik wil graag een cappuccino. ☕<br>
              <strong>Tom:</strong> Voor mij een verse muntthee, alstublieft. 🍵<br>
              <strong>Ober:</strong> Wilt u er ook iets bij eten?<br>
              <strong>Lisa:</strong> Ja, ik neem een stuk appeltaart. 🍰<br>
              <strong>Tom:</strong> Voor mij een broodje kaas. 🧀🥪<br>
              <strong>Ober:</strong> Komt eraan!<br><br>
              ---<br><br>
              <strong>Even later...</strong><br><br>
              <strong>Ober:</strong> Alstublieft, een cappuccino en een muntthee. Een appeltaart en een broodje kaas.<br>
              <strong>Lisa:</strong> Dank u wel!<br>
              <strong>Tom:</strong> Ziet er lekker uit!<br><br>
              ---<br><br>
              <strong>Na het eten:</strong><br><br>
              <strong>Lisa:</strong> Mag ik de rekening, alstublieft? 🧾<br>
              <strong>Ober:</strong> Natuurlijk! Dat is € 14,75 samen.<br>
              <strong>Tom:</strong> Wij betalen apart. Mag ik pinnen? 💳<br>
              <strong>Ober:</strong> Dat kan. Steekt u uw pas maar in het apparaat.<br>
              <strong>Tom:</strong> Alstublieft. € 7,50. Laat de rest maar zitten.<br>
              <strong>Lisa:</strong> Ik betaal contant. Hier is € 10. 💶<br>
              <strong>Ober:</strong> € 7,25 voor u. Hier is uw wisselgeld: € 2,75.<br>
              <strong>Lisa:</strong> Dank u wel! Houd het maar.<br>
              <strong>Ober:</strong> Dank u wel! Fijne dag nog!<br>
              <strong>Lisa en Tom:</strong> Tot ziens! 👋
            </p>
          </div>
        `,
      },
      {
        title: "Voorbeeldgesprek in een Restaurant 🍽️",
        body: `
          <div class="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 p-4 rounded-r-lg my-4">
            <p class="text-slate-700 dark:text-slate-300">
              <strong>Een stel komt binnen bij een restaurant:</strong><br><br>
              <strong>Ober:</strong> Goedenavond! Heeft u gereserveerd?<br>
              <strong>Klant:</strong> Goedenavond! Ja, op naam van De Vries.<br>
              <strong>Ober:</strong> Klopt, een tafel voor twee. Komt u maar mee. 🪑<br><br>
              ---<br><br>
              <strong>Aan tafel:</strong><br><br>
              <strong>Ober:</strong> Hier is de menukaart. 📋 Wilt u alvast iets drinken?<br>
              <strong>Klant:</strong> Graag! Een glas water voor mij. 💧<br>
              <strong>Partner:</strong> Voor mij een verse jus d'orange, alstublieft. 🍊<br>
              <strong>Ober:</strong> Komt eraan!<br><br>
              ---<br><br>
              <strong>Even later:</strong><br><br>
              <strong>Ober:</strong> Heeft u een keuze kunnen maken?<br>
              <strong>Klant:</strong> Ja, ik neem de tomatensoep vooraf. 🍅🍜<br>
              <strong>Partner:</strong> Ik begin met de salade. 🥗<br>
              <strong>Ober:</strong> En als hoofdgerecht?<br>
              <strong>Klant:</strong> Voor mij de pasta met groenten. 🍝<br>
              <strong>Partner:</strong> Ik neem de omelet met kaas. 🍳🧀<br>
              <strong>Ober:</strong> Wilt u er friet bij?<br>
              <strong>Klant:</strong> Ja, graag! 🍟<br>
              <strong>Partner:</strong> Nee, dank u.<br><br>
              ---<br><br>
              <strong>Na het hoofdgerecht:</strong><br><br>
              <strong>Ober:</strong> Heeft het gesmaakt?<br>
              <strong>Klant:</strong> Ja, heerlijk! 😋<br>
              <strong>Ober:</strong> Wilt u nog een toetje? We hebben heerlijke chocoladetaart. 🍫🍰<br>
              <strong>Partner:</strong> Ja, doe maar! Een stuk chocoladetaart en twee lepels.<br>
              <strong>Klant:</strong> En mag ik nog een kop koffie? ☕<br>
              <strong>Ober:</strong> Natuurlijk!<br><br>
              ---<br><br>
              <strong>Na het toetje:</strong><br><br>
              <strong>Klant:</strong> Mag ik de rekening, alstublieft? 🧾<br>
              <strong>Ober:</strong> Natuurlijk. Dat is € 42,50 in totaal.<br>
              <strong>Klant:</strong> Ik betaal. Mag ik pinnen? 💳<br>
              <strong>Ober:</strong> Ja, hoor.<br>
              <strong>Klant:</strong> Alstublieft, doe er maar € 46,00 van.<br>
              <strong>Ober:</strong> Dank u wel! Heel vriendelijk. Fijne avond nog!<br>
              <strong>Klant en partner:</strong> Dank u wel! Tot ziens! 👋
            </p>
          </div>
        `,
      },
    ],
    rulesTable: [
      {
        rule: "Drinken bestellen",
        structure: "**Ik wil graag** + hoeveelheid + drank. / **Mag ik** + hoeveelheid + drank?",
        example: "**Ik wil graag een kop koffie**. **Mag ik een glas water?**",
        usage: "⚠️ PAS OP: Je bestelt altijd de hoeveelheid erbij: een **kop** koffie, een **glas** water, een **fles** wijn.",
      },
      {
        rule: "Eten bestellen",
        structure: "**Ik neem** + gerecht. / **Voor mij** + gerecht + **alstublieft**.",
        example: "**Ik neem de tomatensoep**. **Voor mij de pasta, alstublieft**.",
        usage: "⚠️ PAS OP: 'Ik neem' is de standaard manier om eten te bestellen. Zeg altijd 'alstublieft' erbij.",
      },
      {
        rule: "Beleefd vragen",
        structure: "Maak van je bestelling altijd een **vraag** of gebruik **graag/alstublieft**.",
        example: "**Mag ik een cola?** (beter dan: Geef mij een cola). **Ik wil graag een broodje kaas**.",
        usage: "Een vraag stellen is altijd beleefder dan een bevel. Gebruik nooit 'Geef mij...' in een restaurant.",
      },
      {
        rule: "De rekening vragen",
        structure: "**Mag ik de rekening, alstublieft?** / **Kunnen we afrekenen?**",
        example: "**Mag ik de rekening, alstublieft?** **Kunnen we apart betalen?**",
        usage: "Eerst vraag je de rekening, dan betaal je. Apart betalen = ieder betaalt zijn eigen deel.",
      },
      {
        rule: "Fooi geven",
        structure: "**Laat de rest maar zitten**. / **Hou het wisselgeld maar**. / **Doe er maar € 2,50 bij**.",
        example: "Het was heerlijk, **laat de rest maar zitten**.",
        usage: "Fooi is niet verplicht in Nederland, maar 5-10% wordt gewaardeerd als je tevreden bent.",
      },
      {
        rule: "Zeggen dat het lekker was",
        structure: "**Het heeft gesmaakt!** / **Ja, heerlijk!** / **Het was erg lekker!**",
        example: "Ober: Heeft het gesmaakt? Jij: **Ja, heerlijk!** 😋",
        usage: "⚠️ PAS OP: Zeg niet 'Het was goed'. Zeg 'Het heeft gesmaakt!' of 'Het was heerlijk!'",
      },
    ],
    callouts: [
      { type: "remember", label: "Onthoud 1", text: "Binnenkomen: **Heeft u een tafel voor twee? Is er nog een tafeltje vrij?**" },
      { type: "remember", label: "Onthoud 2", text: "Drinken bestellen: **Ik wil graag een kop koffie. Mag ik een glas water?**" },
      { type: "remember", label: "Onthoud 3", text: "Eten bestellen: **Ik neem de tomatensoep. Voor mij de pasta, alstublieft.**" },
      { type: "remember", label: "Onthoud 4", text: "De rekening vragen: **Mag ik de rekening, alstublieft?**" },
      { type: "remember", label: "Onthoud 5", text: "Betalen: **Pinnen, graag. Contant, graag. Kunnen we apart betalen?**" },
      { type: "remember", label: "Onthoud 6", text: "Fooi geven: **Laat de rest maar zitten. Hou het wisselgeld maar.**" },
      { type: "remember", label: "Onthoud 7", text: "Beleefd zijn: maak van je bestelling altijd een vraag. Zeg **alstublieft** en **dank u wel**." },
      { type: "remember", label: "Onthoud 8", text: "Weet je niet wat je wilt? Vraag: **Wat raadt u aan?**" },
    ],
    commonMistakes: [
      { incorrect: "Ik wil een koffie.", correct: "Ik wil een kop koffie.", explanation: "Je bestelt een kop, niet alleen \"koffie\"" },
      { incorrect: "Mag ik de menu?", correct: "Mag ik de menukaart?", explanation: "Het heet menukaart, niet menu" },
      { incorrect: "Ik wil betalen de rekening.", correct: "Ik wil de rekening betalen.", explanation: "Eerst de rekening, dan betalen" },
      { incorrect: "Apart betalen graag.", correct: "Mogen we apart betalen?", explanation: "Maak er een vraag van, dat is beleefder" },
      { incorrect: "Geef mij een cola.", correct: "Mag ik een cola?", explanation: "Een vraag is beleefder dan een bevel" },
      { incorrect: "Ik heb klaar.", correct: "Ik ben klaar.", explanation: "Je bent klaar, niet hebt klaar" },
      { incorrect: "Het was goed.", correct: "Het heeft gesmaakt!", explanation: "Dit is de standaard manier om te zeggen dat het lekker was" },
    ],
    review: [
      "**Binnenkomen:** Heeft u een tafel voor twee? Is er nog een tafeltje vrij? Ik heb gereserveerd.",
      "**Drinken bestellen:** een kop koffie, een glas water, een cola, een sinaasappelsap.",
      "**Eten bestellen:** de tomatensoep, het broodje kaas, de pasta, de salade, de appeltaart.",
      "**Tijdens het eten:** Smaakt het? Ja, heerlijk! Alles is prima.",
      "**Iets vragen:** Mag ik een schoon glas? Kunt u een nieuw mes brengen?",
      "**Rekening vragen:** Mag ik de rekening? Kunnen we afrekenen? Apart of samen betalen?",
      "**Betalen:** pinnen, contant betalen, bonnetje.",
      "**Fooi:** Laat de rest maar zitten. Hou het wisselgeld maar.",
      "**Beleefdheid:** alstublieft, dank u wel, graag, mag ik.",
    ],
    qa: [
      { question: "Hoe vraag je om een tafel voor twee personen?", answer: "**Heeft u een tafel voor twee?** of **Is er nog een tafeltje vrij?**" },
      { question: "Hoe bestel je een kop koffie?", answer: "**Ik wil graag een kop koffie** of **Mag ik een koffie?**" },
      { question: "Hoe vraag je wat de ober aanraadt?", answer: "**Wat raadt u aan?** of **Wat is de specialiteit van het huis?**" },
      { question: "Hoe vraag je om de rekening?", answer: "**Mag ik de rekening, alstublieft?** of **Kunnen we afrekenen?**" },
      { question: "Hoe vraag je of je apart kunt betalen?", answer: "**Kunnen we apart betalen?** of **Mogen we apart betalen?**" },
      { question: "Hoe geef je fooi?", answer: "**Laat de rest maar zitten** of **Hou het wisselgeld maar**." },
      { question: "Wat zeg je als de ober vraagt of het gesmaakt heeft?", answer: "**Ja, heerlijk!** of **Ja, het was erg lekker!**" },
      { question: "Hoe zeg je dat je soep koud is?", answer: "**Pardon, mijn soep is koud.**" },
      { question: "Hoe vraag je om een schoon glas?", answer: "**Mag ik een schoon glas?**" },
      { question: "Wat betekent \"de menukaart\"?", answer: "De kaart waarop staat wat je kunt bestellen." },
      { question: "Wat betekent \"de fooi\"?", answer: "Extra geld voor de ober of serveerster als je tevreden bent." },
      { question: "Hoe zeg je \"I would like to pay by card\"?", answer: "**Ik wil graag pinnen.**" },
      { question: "Hoe zeg je \"The food was delicious\"?", answer: "**Het heeft gesmaakt!** of **Het was heerlijk!**" },
    ],
  },

];