import type { GrammarLesson } from "../types";

export const nlGrammar: GrammarLesson[] = [
  
    
  
  // ════════════════════════════════════════════════════════════════
  // LES 1 – Volledige uitspraakgids met uitgebreide regels
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

    // ─── ALFABET (HTML in klank-kolom, Markdown in voorbeelden) ───
    timeExpressions: {
      header: "Ltr | Spelling | Klank | Voorbeelden",
      rows: [
        ["A", "‘aa’", "<strong>a</strong> (kort) / <strong>aa</strong> (lang) / doffe a", "kat, maan, bruikbaar"],
        ["B", "‘bee’", "<strong>b</strong> (eind → <strong class='text-rose-600'>p</strong>)", "been, web (klinkt als *wep*)"],
        ["C", "‘see’", "<strong>k</strong> vóór a/o/u; <strong>s</strong> vóór e/i", "club, cel"],
        ["D", "‘dee’", "<strong>d</strong> (eind → <strong class='text-rose-600'>t</strong>)", "dak, hond (klinkt als *hont*)"],
        ["E", "‘ee’", "<strong>e</strong> (kort) / <strong>ee</strong> (lang) / doffe e", "bed, heel, de"],
        ["F", "‘ef’", "<strong>f</strong>", "fiets"],
        ["G", "‘gee’", "<strong class='text-amber-600 dark:text-amber-400'>harde g</strong> (raspend, = ch)", "goed, lachen"],
        ["H", "‘haa’", "<strong>h</strong>", "huis"],
        ["I", "‘ie’", "<strong>i</strong> (kort) / <strong>ie</strong> (lang)", "pit, lief"],
        ["J", "‘jee’", "<strong>j</strong> (als Engelse *y*)", "ja"],
        ["K", "‘kaa’", "<strong>k</strong>", "kat"],
        ["L", "‘el’", "<strong>l</strong>", "land"],
        ["M", "‘em’", "<strong>m</strong>", "maan"],
        ["N", "‘en’", "<strong>n</strong>; vóór k/g als <strong class='text-indigo-600'>ng</strong>", "neus, denken"],
        ["O", "‘oo’", "<strong>o</strong> (kort) / <strong>oo</strong> (lang)", "pot, boom"],
        ["P", "‘pee’", "<strong>p</strong>", "paard"],
        ["Q", "‘kuu’", "<strong>kw</strong>", "quiz"],
        ["R", "‘er’", "rollend, keel‑r of Gooise r", "rood"],
        ["S", "‘es’", "<strong>s</strong>", "slang"],
        ["T", "‘tee’", "<strong>t</strong>", "tafel"],
        ["U", "‘uu’", "<strong>u</strong> (kort) / <strong>uu</strong> (lang)", "put, muur"],
        ["V", "‘vee’", "<strong>v</strong> (nooit aan woordeinde)", "vader, lief"],
        ["W", "‘wee’", "zachte <strong class='text-emerald-600'>w</strong> (tussen v en w)", "water"],
        ["X", "‘iks’", "<strong>ks</strong>", "examen"],
        ["Y", "‘ei’ / ‘i‑grec’", "<strong>ie</strong> of <strong>ei/ij</strong>", "yoghurt, y‑as"],
        ["Z", "‘zet’", "<strong>z</strong> (eind → <strong class='text-rose-600'>s</strong>)", "zee, huis (klinkt als *huiss*)"],
      ],
    },

    // ─── GEDETAILLEERDE UITLEG (HTML, geen Markdown) ───
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

    // ─── GRAMMATICAREGELS (uitgebreide kaartjes, Markdown) ───
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

    // ─── BELANGRIJKE PUNTEN (callouts, Markdown) ───
    callouts: [
      {
        type: "remember",
        label: "Regel 1",
        text: "**Open/gesloten lettergreep stuurt de klinkerlengte.** Gesloten en kort: *kat, bed, pit, pot, put*. Gesloten en lang: *maan, been, wiel, boom, muur*. Open: *ma‑nen, be‑ken, bo‑men* (lange klank met één letter).",
      },
      {
        type: "remember",
        label: "Regel 2",
        text: "**Korte klinker behouden** → verdubbel de medeklinker: *kat – katten, bed – bedden, bom – bommen*.",
      },
      {
        type: "remember",
        label: "Regel 3",
        text: "**Doffe e (sjwa)** in zwakke lettergrepen; nooit voluit ‘e’ zeggen.",
      },
      {
        type: "remember",
        label: "Regel 4",
        text: "**ei/ij** en **au/ou** zijn identiek; het zijn **glijders**, geen stilstaande klanken.",
      },
      {
        type: "remember",
        label: "Regel 5",
        text: "**eu** is een zuivere klinker – niet bewegen! (zoals in Frans *peur*)",
      },
      {
        type: "remember",
        label: "Regel 6",
        text: "**g = ch** – altijd de raspende keelklank.",
      },
      {
        type: "remember",
        label: "Regel 7",
        text: "**sch‑** = s + ch, nooit als Engelse *sh*.",
      },
      {
        type: "remember",
        label: "Regel 8",
        text: "**ng** is één neusklank, **nk** is ng + k.",
      },
      {
        type: "remember",
        label: "Regel 9",
        text: "**Eindklankverscherping:** d→t, b→p, z→s. (bv. *hond* → *hont*, *web* → *wep*, *huis* → *huiss*).",
      },
      {
        type: "remember",
        label: "Regel 10",
        text: "**w** is zacht (labiodentaal), niet de Engelse *w*.",
      },
    ],

    // ─── VEELGEMAAKTE FOUTEN (Markdown) ───
    commonMistakes: [
      { incorrect: "meisje als “mee‑sje”", correct: "**mei‑sje**", explanation: "ei/ij = e + i, geen ee" },
      { incorrect: "huis als “huus”", correct: "**h‑ui‑s** (getuite u + i)", explanation: "ui is een tweeklank, geen uu" },
      { incorrect: "leuk als “luuk”", correct: "**leuk** (zuivere eu)", explanation: "eu is een lange monoftong" },
      { incorrect: "school als “sjool”", correct: "**s‑ch‑ool**", explanation: "sch is s + ch, geen sh" },
      { incorrect: "ring met harde g", correct: "**ring** (ng‑klank)", explanation: "ng is één nasaal" },
      { incorrect: "hond met hoorbare d", correct: "**hont**", explanation: "eind‑d wordt t" },
      { incorrect: "web met hoorbare b", correct: "**wep**", explanation: "eind‑b wordt p" },
      { incorrect: "bomen met korte o", correct: "**boo‑men** (lange oo)", explanation: "open lettergreep = lange klinker" },
      { incorrect: "bommen met lange oo", correct: "**bòm‑men** (korte o)", explanation: "dubbel m houdt de klinker kort" },
      { incorrect: "lopen als “lo‑pèn”", correct: "**lopuh** (doffe e)", explanation: "uitgang -en is sjwa" },
      { incorrect: "auto als “ooto”", correct: "**auw‑to** (a + oe)", explanation: "au/ou is een tweeklank" },
      { incorrect: "leeuw als “leew”", correct: "**lee‑uw** (ee + oe)", explanation: "de w‑achtige glide moet hoorbaar zijn" },
      { incorrect: "w als Engelse w", correct: "zachte v‑achtige klank", explanation: "Nederlandse w is labiodentaal, niet bilabiaal" },
      { incorrect: "de, te voluit “ee”", correct: "**də, tə**", explanation: "de doffe e is de sjwa" },
    ],

    // ─── SNELLE HERHALING (Markdown) ───
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

    // ─── QUIZ (Markdown) ───
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

  {
    id: "nl-familie-1",
    title: "Familie en relaties",
    level: 1,
    topic: "Familie",
    body: "Leer praten over je familie: familieleden, relaties, bezittelijke voornaamwoorden en de werkwoorden hebben en zijn.",
    overview:
      "Om over familie en relaties te praten gebruik je **bezittelijke voornaamwoorden** (mijn, jouw, zijn, haar, ons/onze, jullie, hun) en de werkwoorden **hebben** en **zijn**. Woorden voor familieleden zijn meestal **de-woorden** (de vader, de tante) of soms **het-woorden** (het kind, het nichtje).",
    anchorSectionId: "alphabet",
    exercises: [],

    // Alfabet-achtige tabel voor de directe kernfamilie
    timeExpressions: {
      header: "Nederlands | Betekenis | Meervoud | Opmerking",
      rows: [
        ["de vader", "vader (pa, papa)", "de vaders", "ook: pa, papa"],
        ["de moeder", "moeder (ma, mama)", "de moeders", "ook: ma, mama"],
        ["de ouder(s)", "ouder(s)", "de ouders", "meervoud ouders"],
        ["de zoon", "zoon", "de zoons", ""],
        ["de dochter", "dochter", "de dochters", ""],
        ["het kind", "kind", "de kinderen", "onzijdig, meervoud met de"],
        ["de broer", "broer", "de broers", ""],
        ["de zus", "zus (zusje verklein)", "de zussen", "verklein: zusje"],
      ],
    },

    // Uitgebreide uitleg in meerdere accordions
    details: [
      {
        title: "Grootfamilie en aangetrouwde familie",
        body: `
          <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
            <table class="w-full border-collapse">
              <thead>
                <tr class="!bg-indigo-600">
                  <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Nederlands</th>
                  <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Betekenis</th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">de opa / grootvader</td><td class="px-3 py-2 text-sm">opa</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">de oma / grootmoeder</td><td class="px-3 py-2 text-sm">oma</td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">de grootouder(s)</td><td class="px-3 py-2 text-sm">grootouder(s)</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">de kleinzoon</td><td class="px-3 py-2 text-sm">kleinzoon</td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">de kleindochter</td><td class="px-3 py-2 text-sm">kleindochter</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">het kleinkind</td><td class="px-3 py-2 text-sm">kleinkind</td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">de oom</td><td class="px-3 py-2 text-sm">oom</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">de tante</td><td class="px-3 py-2 text-sm">tante</td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">de neef</td><td class="px-3 py-2 text-sm">neef (zoon van broer/zus OF oom/tante)</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">de nicht</td><td class="px-3 py-2 text-sm">nicht (dochter van broer/zus OF oom/tante)</td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">de schoonvader</td><td class="px-3 py-2 text-sm">schoonvader (vader van partner)</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">de schoonmoeder</td><td class="px-3 py-2 text-sm">schoonmoeder</td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">de schoonzoon</td><td class="px-3 py-2 text-sm">schoonzoon</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">de schoondochter</td><td class="px-3 py-2 text-sm">schoondochter</td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">de zwager</td><td class="px-3 py-2 text-sm">zwager (broer van partner OF man van zus)</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">de schoonzus</td><td class="px-3 py-2 text-sm">schoonzus (zus van partner OF vrouw van broer)</td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">de stiefvader</td><td class="px-3 py-2 text-sm">stiefvader</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">de stiefmoeder</td><td class="px-3 py-2 text-sm">stiefmoeder</td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">het stiefkind</td><td class="px-3 py-2 text-sm">stiefkind</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">de halfbroer</td><td class="px-3 py-2 text-sm">halfbroer</td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">de halfzus</td><td class="px-3 py-2 text-sm">halfzus</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">de peetvader</td><td class="px-3 py-2 text-sm">peetvader (doop)</td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">de peettante</td><td class="px-3 py-2 text-sm">peettante</td></tr>
              </tbody>
            </table>
          </div>
          <p><strong>Let op:</strong> <em>Neef</em> en <em>nicht</em> zijn dubbelzinnig. Verduidelijk met <em>de zoon van mijn oom</em> of <em>mijn neefje</em> (zoon van broer/zus).</p>
        `,
      },
      {
        title: "Relaties en burgerlijke staat",
        body: `
          <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
            <table class="w-full border-collapse">
              <thead>
                <tr class="!bg-indigo-600">
                  <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Nederlands</th>
                  <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Betekenis</th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">getrouwd (zijn)</td><td class="px-3 py-2 text-sm">married</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">ongehuwd</td><td class="px-3 py-2 text-sm">unmarried</td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">gescheiden (zijn)</td><td class="px-3 py-2 text-sm">divorced</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">weduwnaar / weduwe</td><td class="px-3 py-2 text-sm">widower / widow</td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">de partner</td><td class="px-3 py-2 text-sm">partner</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">de vriend / vriendin</td><td class="px-3 py-2 text-sm">boyfriend / girlfriend (ook gewoon vriend)</td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">de verloofde</td><td class="px-3 py-2 text-sm">fiancé(e)</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">samenwonen (ww)</td><td class="px-3 py-2 text-sm">to live together</td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">uit elkaar zijn</td><td class="px-3 py-2 text-sm">separated</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">de relatie</td><td class="px-3 py-2 text-sm">relationship</td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">de echtgenoot / echtgenote</td><td class="px-3 py-2 text-sm">husband / wife</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">de man / vrouw</td><td class="px-3 py-2 text-sm">husband / wife (ook gewoon man/vrouw)</td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">het huwelijk</td><td class="px-3 py-2 text-sm">marriage</td></tr>
              </tbody>
            </table>
          </div>
        `,
      },
      {
        title: "Bezittelijke voornaamwoorden",
        body: `
          <p class="mb-2">Gebruik deze woorden om over je familie te praten: <em>mijn vader</em>, <em>jouw zus</em>, <em>haar man</em>, <em>onze kinderen</em>.</p>
          <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
            <table class="w-full border-collapse">
              <thead>
                <tr class="!bg-indigo-600">
                  <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Persoon</th>
                  <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Basisvorm</th>
                  <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Bij de-woorden</th>
                  <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Bij het-woorden</th>
                  <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Meervoud</th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">ik</td><td class="px-3 py-2 text-sm"><strong>mijn</strong></td><td class="px-3 py-2 text-sm">mijn vader</td><td class="px-3 py-2 text-sm">mijn kind</td><td class="px-3 py-2 text-sm">mijn kinderen</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">jij</td><td class="px-3 py-2 text-sm"><strong>jouw</strong></td><td class="px-3 py-2 text-sm">jouw vader</td><td class="px-3 py-2 text-sm">jouw kind</td><td class="px-3 py-2 text-sm">jouw kinderen</td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">u</td><td class="px-3 py-2 text-sm"><strong>uw</strong></td><td class="px-3 py-2 text-sm">uw vader</td><td class="px-3 py-2 text-sm">uw kind</td><td class="px-3 py-2 text-sm">uw kinderen</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">hij</td><td class="px-3 py-2 text-sm"><strong>zijn</strong></td><td class="px-3 py-2 text-sm">zijn vader</td><td class="px-3 py-2 text-sm">zijn kind</td><td class="px-3 py-2 text-sm">zijn kinderen</td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">zij (enk.)</td><td class="px-3 py-2 text-sm"><strong>haar</strong></td><td class="px-3 py-2 text-sm">haar vader</td><td class="px-3 py-2 text-sm">haar kind</td><td class="px-3 py-2 text-sm">haar kinderen</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">het</td><td class="px-3 py-2 text-sm"><strong>zijn</strong></td><td class="px-3 py-2 text-sm">(bij het-onderwerp) zijn vader?</td><td class="px-3 py-2 text-sm">zijn kind</td><td class="px-3 py-2 text-sm">zijn kinderen</td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">wij</td><td class="px-3 py-2 text-sm"><strong>ons / onze</strong></td><td class="px-3 py-2 text-sm"><strong>onze</strong> vader</td><td class="px-3 py-2 text-sm"><strong>ons</strong> kind</td><td class="px-3 py-2 text-sm">onze kinderen</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">jullie</td><td class="px-3 py-2 text-sm"><strong>jullie</strong></td><td class="px-3 py-2 text-sm">jullie vader</td><td class="px-3 py-2 text-sm">jullie kind</td><td class="px-3 py-2 text-sm">jullie kinderen</td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">zij (mv.)</td><td class="px-3 py-2 text-sm"><strong>hun</strong></td><td class="px-3 py-2 text-sm">hun vader</td><td class="px-3 py-2 text-sm">hun kind</td><td class="px-3 py-2 text-sm">hun kinderen</td></tr>
              </tbody>
            </table>
          </div>
          <div class="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 rounded-r-lg my-4">
            <p class="font-semibold text-amber-700 dark:text-amber-300">
              <strong>Ons</strong> gebruik je voor <strong>het-woorden</strong> in het enkelvoud (ons kind, ons huis).<br>
              <strong>Onze</strong> gebruik je voor <strong>de-woorden en alle meervouden</strong> (onze vader, onze moeder, onze kinderen).
            </p>
          </div>
        `,
      },
      {
        title: "Werkwoorden: hebben, zijn, heten, wonen",
        body: `
          <h3 class="text-lg font-bold mt-4 mb-2">Hebben – bezit en relaties</h3>
          <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
            <table class="w-full border-collapse">
              <thead>
                <tr class="!bg-indigo-600">
                  <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Persoon</th>
                  <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Vervoeging</th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">ik</td><td class="px-3 py-2 text-sm">heb</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">jij</td><td class="px-3 py-2 text-sm">hebt</td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">u</td><td class="px-3 py-2 text-sm">hebt / heeft</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">hij / zij / het</td><td class="px-3 py-2 text-sm">heeft</td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">wij / jullie / zij</td><td class="px-3 py-2 text-sm">hebben</td></tr>
              </tbody>
            </table>
          </div>
          <p><strong>Voorbeelden:</strong></p>
          <ul class="list-disc pl-5 space-y-1 text-slate-700 dark:text-slate-300">
            <li>Ik <strong>heb</strong> een broer en twee zussen.</li>
            <li><strong>Heb</strong> jij een grote familie?</li>
            <li>Hij <strong>heeft</strong> geen neefjes.</li>
            <li>Wij <strong>hebben</strong> drie kinderen.</li>
            <li><strong>Hebt</strong> u familie in België? (of <em>Heeft u</em>)</li>
          </ul>

          <h3 class="text-lg font-bold mt-6 mb-2">Zijn – eigenschappen en status</h3>
          <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
            <table class="w-full border-collapse">
              <thead>
                <tr class="!bg-indigo-600">
                  <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Persoon</th>
                  <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Vervoeging</th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">ik</td><td class="px-3 py-2 text-sm">ben</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">jij</td><td class="px-3 py-2 text-sm">bent</td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">u</td><td class="px-3 py-2 text-sm">bent</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">hij / zij / het</td><td class="px-3 py-2 text-sm">is</td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">wij / jullie / zij</td><td class="px-3 py-2 text-sm">zijn</td></tr>
              </tbody>
            </table>
          </div>
          <ul class="list-disc pl-5 space-y-1 text-slate-700 dark:text-slate-300">
            <li>Mijn broer <strong>is</strong> getrouwd.</li>
            <li><strong>Ben</strong> jij enig kind?</li>
            <li>Mijn grootouders <strong>zijn</strong> al lang overleden.</li>
            <li>U <strong>bent</strong> weduwnaar.</li>
            <li>Zij <strong>zijn</strong> een gelukkig stel.</li>
          </ul>

          <h3 class="text-lg font-bold mt-6 mb-2">Heten – naam</h3>
          <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
            <table class="w-full border-collapse">
              <thead>
                <tr class="!bg-indigo-600">
                  <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Persoon</th>
                  <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Vervoeging</th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">ik</td><td class="px-3 py-2 text-sm">heet</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">jij / u</td><td class="px-3 py-2 text-sm">heet</td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">hij / zij / het</td><td class="px-3 py-2 text-sm">heet</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">wij / jullie / zij</td><td class="px-3 py-2 text-sm">heten</td></tr>
              </tbody>
            </table>
          </div>
          <ul class="list-disc pl-5 space-y-1 text-slate-700 dark:text-slate-300">
            <li>Mijn moeder <strong>heet</strong> Maria.</li>
            <li>Hoe <strong>heet</strong> jouw zus? (Inversie: <em>Hoe heet jouw zus?</em>)</li>
          </ul>

          <h3 class="text-lg font-bold mt-6 mb-2">Wonen – waar familie woont</h3>
          <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
            <table class="w-full border-collapse">
              <thead>
                <tr class="!bg-indigo-600">
                  <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Persoon</th>
                  <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Vervoeging</th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">ik</td><td class="px-3 py-2 text-sm">woon</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">jij / u</td><td class="px-3 py-2 text-sm">woont</td></tr>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">hij / zij / het</td><td class="px-3 py-2 text-sm">woont</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">wij / jullie / zij</td><td class="px-3 py-2 text-sm">wonen</td></tr>
              </tbody>
            </table>
          </div>
          <ul class="list-disc pl-5 space-y-1 text-slate-700 dark:text-slate-300">
            <li>Mijn oom <strong>woont</strong> in Antwerpen.</li>
            <li><strong>Wonen</strong> jouw ouders in Nederland? (Inversie met <em>wonen</em> want onderwerp <em>ouders</em> meervoud)</li>
          </ul>
        `,
      },
      {
        title: "Beschrijvingen van familieleden",
        body: `
          <p>Gebruik bijvoeglijke naamwoorden en de <strong>-e-regel</strong>.</p>
          <ul class="list-disc pl-5 space-y-1 text-slate-700 dark:text-slate-300">
            <li>Mijn vader is een <strong>lange</strong> man. (de-woord, <em>een</em> → wel -e)</li>
            <li>Mijn moeder is een <strong>mooie</strong> vrouw.</li>
            <li>Mijn broer heeft <strong>blauwe</strong> ogen.</li>
            <li>Mijn zus is <strong>intelligent</strong> en <strong>grappig</strong>. (predicatief, geen -e)</li>
            <li>Mijn opa is <strong>oud</strong> maar <strong>sterk</strong>.</li>
            <li>Mijn nichtje is een <strong>lief</strong> meisje. (het-woord, <em>een</em> → geen -e)</li>
          </ul>
          <p class="mt-2"><strong>Leeftijd:</strong> Mijn broer is 25 jaar. (zijn + leeftijd). Hij is <strong>jonger</strong> dan ik. (vergrotend) Zij is de <strong>oudste</strong> dochter. (overtreffend)</p>
        `,
      },
    ],

    // Grammaticaregels in kaartjes
    rulesTable: [
      {
        rule: "Ons vs. Onze",
        structure: "**Ons** → het-woorden enkelvoud. **Onze** → de-woorden en alle meervouden.",
        example: "**Ons** kind (het), **onze** vader (de), **onze** kinderen (meervoud).",
        usage: "Check of het woord een 'de'- of 'het'-woord is. Bij twijfel: meervoud altijd onze.",
      },
      {
        rule: "Leeftijd met 'zijn', niet 'hebben'",
        structure: "In het Nederlands zeg je **ik ben 20 jaar**.",
        example: "Mijn broer **is** 20 jaar. (niet 'heeft')",
        usage: "Onthoud: leeftijd = **zijn**. Fout: *Ik heb 20 jaar.*",
      },
      {
        rule: "'Getrouwd zijn' of 'gescheiden zijn'",
        structure: "**Getrouwd/gescheiden** zijn bijvoeglijke naamwoorden en gaan met **zijn**.",
        example: "Zij **is** getrouwd. Hij **is** gescheiden.",
        usage: "Nooit *zij heeft getrouwd*.",
      },
      {
        rule: "Hebben voor bezit van familieleden",
        structure: "Gebruik **hebben** als je zegt dat je een broer, zus, neef, etc. hebt.",
        example: "Ik **heb** drie zussen. Heb jij een neef?",
        usage: "Niet *ik ben drie zussen*.",
      },
    ],

    // Belangrijke punten (callouts)
    callouts: [
      {
        type: "remember",
        label: "Ons/Onze",
        text: "**Ons** kind (het-woord), **onze** vader (de-woord), **onze** kinderen (meervoud).",
      },
      {
        type: "remember",
        label: "Leeftijd",
        text: "In het Nederlands zeg je **ik ben 20 jaar**, niet *ik heb 20 jaar*.",
      },
      {
        type: "tip",
        label: "Getrouwd/gescheiden",
        text: "Dit zijn bijvoeglijke naamwoorden: **zij is getrouwd**, **hij is gescheiden**.",
      },
      {
        type: "tip",
        label: "Neef/nicht",
        text: "Kan dubbelzinnig zijn. Zeg indien nodig **de zoon van mijn oom** of **mijn neefje**.",
      },
    ],

    // Veelgemaakte fouten (tabel)
    commonMistakes: [
      { incorrect: "Mijn broer zijn 20.", correct: "Mijn broer **is** 20.", explanation: "Broer = hij, dus 'is'." },
      { incorrect: "Ik heb 20 jaar.", correct: "Ik **ben** 20 jaar.", explanation: "Leeftijd met **zijn**." },
      { incorrect: "Zij heeft getrouwd.", correct: "Zij **is** getrouwd.", explanation: "Getrouwd is een bijvoeglijk naamwoord, dus met **zijn**." },
      { incorrect: "Ik ben drie zussen.", correct: "Ik **heb** drie zussen.", explanation: "Bezit van familieleden met **hebben**." },
      { incorrect: "Mijn vader heten Jan.", correct: "Mijn vader **heet** Jan.", explanation: "Hij-vorm: heet." },
      { incorrect: "Ons moeder is lief.", correct: "**Onze** moeder is lief.", explanation: "Moeder is de-woord, dus **onze**." },
      { incorrect: "Onze kind heet Sam.", correct: "**Ons** kind heet Sam.", explanation: "Kind is het-woord, dus **ons**." },
      { incorrect: "Haar broer is getrouwt.", correct: "Haar broer is **getrouwd**.", explanation: "Getrouwd eindigt op -d." },
    ],

    // Snelle herhaling
    review: [
      "**Bezittelijke voornaamwoorden:** mijn, jouw, uw, zijn, haar, ons/onze, jullie, hun.",
      "**Ons** bij het-woorden, **onze** bij de-woorden en meervoud.",
      "**Hebben** om te zeggen dat je een familielid hebt: ik heb een broer.",
      "**Zijn** voor eigenschappen en burgerlijke staat: ik ben getrouwd, ik ben 30 jaar.",
      "Leeftijd: **zijn** (ik ben 20), niet **hebben**.",
      "Familieleden zijn meestal **de-woorden**, behalve **het kind**, **het nichtje**, **het kleinkind**.",
    ],

    // Oefenvragen (alle 40 vragen uit de les)
    qa: [
      // Deel 1: familiewoordenschat
      { question: "1. De vader van mijn vader is mijn __________.", answer: "opa / grootvader" },
      { question: "2. De dochter van mijn oom is mijn __________.", answer: "nicht" },
      { question: "3. De broer van mijn vrouw is mijn __________.", answer: "zwager" },
      { question: "4. De moeder van mijn man is mijn __________.", answer: "schoonmoeder" },
      { question: "5. Mijn kind is de __________ van mijn ouders.", answer: "kleinkind" },
      { question: "6. Mijn zus en ik zijn __________ (meervoud: broers en zussen).", answer: "broers en zussen" },
      { question: "7. Als mijn vader hertrouwt, krijgt hij een nieuwe vrouw. Die vrouw is mijn __________.", answer: "stiefmoeder" },
      { question: "8. Mijn partner en ik zijn niet getrouwd, maar we __________ (samenwonen).", answer: "wonen samen" },
      { question: "9. Na de scheiding is hij __________ (gescheiden).", answer: "gescheiden" },
      { question: "10. Een ander woord voor echtgenoot is __________.", answer: "man / echtgenoot" },

      // Deel 2: bezittelijk voornaamwoord
      { question: "11. (ik) __________ zus heet Lisa.", answer: "Mijn" },
      { question: "12. (jij) Hoe oud is __________ broer?", answer: "jouw" },
      { question: "13. (u) Is __________ man thuis?", answer: "uw" },
      { question: "14. (hij) __________ vrouw is lerares.", answer: "Zijn" },
      { question: "15. (zij enk.) __________ dochter is 5 jaar.", answer: "Haar" },
      { question: "16. (wij) __________ huis is groot. (het huis)", answer: "Ons" },
      { question: "17. (wij) __________ auto is blauw. (de auto)", answer: "Onze" },
      { question: "18. (jullie) Hoe gaat het met __________ ouders?", answer: "jullie" },
      { question: "19. (zij mv.) __________ kinderen spelen buiten.", answer: "Hun" },
      { question: "20. (wij) __________ kinderen zijn lief.", answer: "Onze" },

      // Deel 3: maak zinnen (we geven voorbeeldantwoorden; bij klik verschijnt het antwoord)
      { question: "21. Vertel in één zin dat je twee broers hebt.", answer: "Ik heb twee broers." },
      { question: "22. Zeg dat je oma 80 jaar is.", answer: "Mijn oma is 80 jaar." },
      { question: "23. Vraag aan je vriend of hij een neef heeft.", answer: "Heb jij een neef?" },
      { question: "24. Vertel dat jouw zus getrouwd is met een aardige man.", answer: "Mijn zus is getrouwd met een aardige man." },
      { question: "25. Beschrijf je vader: lengte (lang), haarkleur (bruin), karakter (vriendelijk).", answer: "Mijn vader is lang, heeft bruin haar en is vriendelijk." },
      { question: "26. Zeg dat je enig kind bent.", answer: "Ik ben enig kind." },
      { question: "27. Vraag aan een onbekende: “Mevrouw, hebt u kinderen?” (formeel, inversie)", answer: "Mevrouw, hebt u kinderen?" },
      { question: "28. Zeg dat jouw broer ouder is dan jij, maar dat jij langer bent.", answer: "Mijn broer is ouder dan ik, maar ik ben langer." },
      { question: "29. Vertel dat je twee nichtjes hebt en dat ze heel lief zijn.", answer: "Ik heb twee nichtjes en ze zijn heel lief." },
      { question: "30. Zeg dat je gescheiden bent en nu alleen woont.", answer: "Ik ben gescheiden en woon nu alleen." },

      // Eindtoets
      { question: "31. Vertaal: “Her brother is my husband.”", answer: "Haar broer is mijn man." },
      { question: "32. Vul in: “__________ (jullie) grootouders wonen in Brugge.”", answer: "Jullie" },
      { question: "33. Verbeter: “Mijn zus hebben twee kinderen.”", answer: "Mijn zus **heeft** twee kinderen." },
      { question: "34. Verbeter: “Ons dochter heet Emma.”", answer: "**Onze** dochter heet Emma." },
      { question: "35. Zet in de vraagvorm (jij): “Jij hebt een leuke familie.” → “__________?”", answer: "Heb jij een leuke familie?" },
      { question: "36. Zet in de vraagvorm (u): “U bent getrouwd.” → “__________?”", answer: "Bent u getrouwd?" },
      { question: "37. Wat is het verschil tussen *neef* (zoon van oom) en *neef* (zoon van broer)?", answer: "Je kunt **de zoon van mijn broer/zus** of **de zoon van mijn oom/tante** zeggen om te verduidelijken." },
      { question: "38. Beschrijf je moeder in drie zinnen (naam, leeftijd, uiterlijk).", answer: "Mijn moeder heet Maria. Ze is 45 jaar. Ze heeft bruin haar en is klein." },
      { question: "39. Maak een logische stamboomzin: “Mijn oom / de broer van / is / mijn vader.”", answer: "Mijn oom is de broer van mijn vader. (of: De broer van mijn vader is mijn oom.)" },
      { question: "40. Foutencorrectie: “Ik ben 2 broers en 1 zus. Mijn zus heten Anna.”", answer: "Ik **heb** 2 broers en 1 zus. Mijn zus **heet** Anna." },
    ],
  },
];
