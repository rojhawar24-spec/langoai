import type { GrammarLesson } from "../../types";

export const uitspraak: GrammarLesson = {
  id: "nl-uitspraak-1",
  title: "Uitspraak & Klanken: De Ultieme Visuele Gids",
  level: 1,
  topic: "Uitspraak",
  body: "Beheers de Nederlandse uitspraak met deze visuele gids: het alfabet, klinkers, tweeklanken, medeklinkers en de gouden spellingregels.",
  overview: "Hier vind je een prachtig uitgewerkt en volledig overzicht van de Nederlandse uitspraak. Alles is helder, overzichtelijk en ideaal om te leren of te herhalen. Met kleurrijke tabellen en duidelijke PAS OP-momenten leer je de lastigste klanken (zoals ui, eu, sch, ng) en de regels voor open en gesloten lettergrepen in een oogopslag.",
  anchorSectionId: "alphabet",
  exercises: [],
  timeExpressionsLabel: "Het Alfabet – 26 Letters & Hun Klanken 🔤",
  timeExpressions: {
    header: "Letter | Naam | Klank | Voorbeelden",
    rows: [
      ["A", "a", "a (kort) / aa (lang) / ə", "kat, maan, bal"],
      ["B", "bee", "b (eind → p)", "been, web (wep)"],
      ["C", "see", "k of s", "club, cel"],
      ["D", "dee", "d (eind → t)", "dak, hond (hont)"],
      ["E", "ee", "e (kort) / ee (lang) / ə", "bed, heel, de"],
      ["F", "ef", "f", "fiets"],
      ["G", "gee", "harde g (keel)", "goed, lachen"],
      ["H", "haa", "h", "huis"],
      ["I", "ie", "i (kort) / ie (lang)", "pit, lief"],
      ["J", "jee", "j (als Engelse y)", "ja"],
      ["K", "kaa", "k", "kat"],
      ["L", "el", "l", "land"],
      ["M", "em", "m", "maan"],
      ["N", "en", "n / ng", "neus, denken"],
      ["O", "oo", "o (kort) / oo (lang)", "pot, boom"],
      ["P", "pee", "p", "paard"],
      ["Q", "kuu", "kw", "quiz"],
      ["R", "er", "r (rollend/keel/Goois)", "rood"],
      ["S", "es", "s", "slang"],
      ["T", "tee", "t", "tafel"],
      ["U", "uu", "u (kort) / uu (lang)", "put, muur"],
      ["V", "vee", "v (eind → f)", "vader, lief"],
      ["W", "wee", "w (zachte v)", "water"],
      ["X", "iks", "ks", "examen"],
      ["Y", "ei/grec", "ie of ei/ij", "yoghurt, y-as"],
      ["Z", "zet", "z (eind → s)", "zee, huis (huiss)"],
    ],
  },
  details: [
    {
      title: "Deel 1: Klinkers & De Gouden Spellingregels 🧲",
      body: `
        <div class="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-emerald-700 dark:text-emerald-300 mb-2">🏆 De Gouden Regel: Open vs. Gesloten Lettergreep</h3>
          <ul class="space-y-2 list-none pl-0 text-slate-700 dark:text-slate-300">
            <li>✅ <strong>Gesloten lettergreep</strong> (eindigt op medeklinker) + 1 klinker = <strong>KORTE</strong> klank. <em>(kat, bed, pit)</em></li>
            <li>✅ <strong>Gesloten lettergreep</strong> + 2 klinkers = <strong>LANGE</strong> klank. <em>(maan, been, boom)</em></li>
            <li>✅ <strong>Open lettergreep</strong> (eindigt op klinker) + 1 klinker = <strong>LANGE</strong> klank. <em>(ma-nen, bo-men)</em></li>
          </ul>
        </div>

        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-gradient-to-r from-indigo-600 to-purple-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Korte Klinker</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Lange Klinker</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Doffe e (Sjwa / ə)</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm"><strong class="text-indigo-600">a</strong> (kat)</td><td class="px-4 py-3 text-sm"><strong class="text-purple-600">aa</strong> (maan)</td><td class="px-4 py-3 text-sm text-slate-500">-</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm"><strong class="text-indigo-600">e</strong> (pet)</td><td class="px-4 py-3 text-sm"><strong class="text-purple-600">ee</strong> (peet)</td><td class="px-4 py-3 text-sm"><strong class="text-amber-600">e</strong> in <em>de, lopen</em></td></tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm"><strong class="text-indigo-600">i</strong> (pit)</td><td class="px-4 py-3 text-sm"><strong class="text-purple-600">ie</strong> (piet)</td><td class="px-4 py-3 text-sm text-slate-500">-</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm"><strong class="text-indigo-600">o</strong> (pot)</td><td class="px-4 py-3 text-sm"><strong class="text-purple-600">oo</strong> (poot)</td><td class="px-4 py-3 text-sm text-slate-500">-</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-4 py-3 text-sm"><strong class="text-indigo-600">u</strong> (put)</td><td class="px-4 py-3 text-sm"><strong class="text-purple-600">uu</strong> (muur)</td><td class="px-4 py-3 text-sm text-slate-500">-</td></tr>
            </tbody>
          </table>
        </div>

        <div class="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 rounded-r-lg my-4">
          <p class="font-semibold text-amber-700 dark:text-amber-300 mb-1">💤 De Doffe E (Sjwa / ə)</p>
          <p class="text-sm text-slate-700 dark:text-slate-300">De meest voorkomende klank! Klinkt als een zacht 'uh'. Komt voor in: <strong>de, te, je</strong> en uitgangen zoals <strong>-en</strong> (<em>lopen</em> = lopuh) en <strong>-lijk</strong> (<em>vrolijk</em> = vrooluhk).</p>
        </div>
      `
    },
    {
      title: "Deel 2: Tweeklanken (Diftongen) & Combinaties 🎢",
      body: `
        <p class="text-sm text-slate-700 dark:text-slate-300 mb-4">Tweeklanken zijn 'glijders': je begint bij de ene klinker en glijdt naar de andere. Ze zijn altijd lang!</p>
        
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-gradient-to-r from-purple-600 to-pink-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Tweeklank</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Omschrijving</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Voorbeeld</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">⚠️ PAS OP</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-bold text-purple-600">ei / ij</td>
                <td class="px-4 py-3 text-sm">Korte e + ie-glide</td>
                <td class="px-4 py-3 text-sm">eind, tijd, meisje</td>
                <td class="px-4 py-3 text-sm text-rose-600 font-semibold">Nooit als 'ai' (main)!</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-bold text-purple-600">au / ou</td>
                <td class="px-4 py-3 text-sm">Open a + oe-glide</td>
                <td class="px-4 py-3 text-sm">auto, hout, blauw</td>
                <td class="px-4 py-3 text-sm text-rose-600 font-semibold">Eindig met lichte w</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50">
                <td class="px-4 py-3 text-sm font-bold text-purple-600">ui</td>
                <td class="px-4 py-3 text-sm">Getuite u + ie-glide</td>
                <td class="px-4 py-3 text-sm">huis, muis, duim</td>
                <td class="px-4 py-3 text-sm text-rose-600 font-semibold">Nooit als 'au' of 'uu'!</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="bg-rose-50 dark:bg-rose-900/20 border-l-4 border-rose-500 p-4 rounded-r-lg my-4">
          <p class="font-semibold text-rose-700 dark:text-rose-300 mb-1">🚨 Let op: 'eu' is GEEN tweeklank!</p>
          <p class="text-sm text-slate-700 dark:text-slate-300"><strong>eu</strong> is een zuivere, lange klinker (zoals in Frans <em>peur</em>). Je lippen zijn getuit, maar de klank glijdt niet. <em>Neus, deur, leuk</em>.</p>
        </div>

        <h3 class="text-lg font-bold mt-6 mb-2">🔗 Combinaties met Halfklinkers (j / w)</h3>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-indigo-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Combinatie</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Uitspraak</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Voorbeeld</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-bold text-indigo-600">aai</td><td class="px-4 py-3 text-sm">aa + i</td><td class="px-4 py-3 text-sm">draai</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-bold text-indigo-600">ooi</td><td class="px-4 py-3 text-sm">oo + i</td><td class="px-4 py-3 text-sm">mooi</td></tr>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-bold text-indigo-600">eeuw</td><td class="px-4 py-3 text-sm">ee + oe</td><td class="px-4 py-3 text-sm">leeuw</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-4 py-3 text-sm font-bold text-indigo-600">nieuw</td><td class="px-4 py-3 text-sm">ie + oe</td><td class="px-4 py-3 text-sm">nieuw</td></tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      title: "Deel 3: Medeklinkers & De Grootste Valkuilen 🗣️",
      body: `
        <h3 class="text-lg font-bold mt-4 mb-2">1. De Harde G en de CH-klank</h3>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-gradient-to-r from-emerald-600 to-teal-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Spelling</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Klank</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Voorbeeld</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">⚠️ PAS OP</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-bold">g</td><td class="px-4 py-3 text-sm">Harde keelschraap</td><td class="px-4 py-3 text-sm"><strong>g</strong>oed</td><td class="px-4 py-3 text-sm text-rose-600 font-semibold">Nooit als Engelse 'g' (good)</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-4 py-3 text-sm font-bold">ch</td><td class="px-4 py-3 text-sm">Zelfde schraap (stemloos)</td><td class="px-4 py-3 text-sm">la<strong>ch</strong>en</td><td class="px-4 py-3 text-sm text-rose-600 font-semibold">Klinkt exact hetzelfde als g</td></tr>
            </tbody>
          </table>
        </div>

        <h3 class="text-lg font-bold mt-6 mb-2">2. De SCH-klank en Neusklanken (NG / NK)</h3>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-gradient-to-r from-indigo-600 to-blue-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Spelling</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Klank</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Voorbeeld</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">⚠️ PAS OP</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-bold">sch</td><td class="px-4 py-3 text-sm">s + ch (keelschraap)</td><td class="px-4 py-3 text-sm"><strong>sch</strong>ool</td><td class="px-4 py-3 text-sm text-rose-600 font-semibold">Nooit 'sj'! Het is s-ggg-ool</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-bold">ng</td><td class="px-4 py-3 text-sm">Één nasale klank (sing)</td><td class="px-4 py-3 text-sm">ri<strong>ng</strong>, zi<strong>ng</strong>en</td><td class="px-4 py-3 text-sm text-rose-600 font-semibold">Nooit een harde g op het eind</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-4 py-3 text-sm font-bold">nk</td><td class="px-4 py-3 text-sm">ng + k</td><td class="px-4 py-3 text-sm">ba<strong>nk</strong></td><td class="px-4 py-3 text-sm text-rose-600 font-semibold">Klinkt als 'bang-k'</td></tr>
            </tbody>
          </table>
        </div>

        <h3 class="text-lg font-bold mt-6 mb-2">3. Speciale Medeklinkers</h3>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-gradient-to-r from-purple-600 to-pink-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Letter</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Klank</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Voorbeeld</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">⚠️ PAS OP</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-bold">w</td><td class="px-4 py-3 text-sm">Zachte v-achtige klank</td><td class="px-4 py-3 text-sm">water</td><td class="px-4 py-3 text-sm text-rose-600 font-semibold">Niet als Engelse w (rond)</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700"><td class="px-4 py-3 text-sm font-bold">j</td><td class="px-4 py-3 text-sm">Als Engelse y (yes)</td><td class="px-4 py-3 text-sm">ja</td><td class="px-4 py-3 text-sm text-slate-500">-</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-4 py-3 text-sm font-bold">sj</td><td class="px-4 py-3 text-sm">Als Engelse sh (shoe)</td><td class="px-4 py-3 text-sm">sjaal, douche</td><td class="px-4 py-3 text-sm text-slate-500">-</td></tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      title: "Deel 4: Eindklankverscherping (De 'Slik-regel') 🤫",
      body: `
        <div class="bg-rose-50 dark:bg-rose-900/20 border-l-4 border-rose-500 p-4 rounded-r-lg my-4">
          <h3 class="text-lg font-extrabold text-rose-700 dark:text-rose-300 mb-2">⚠️ De Gouden Regel: Stemhebbend → Stemloos op het eind</h3>
          <p class="text-sm text-slate-700 dark:text-slate-300">Aan het einde van een woord worden <strong>b, d en z</strong> altijd uitgesproken als <strong>p, t en s</strong>. Je 'slikt' de stem weg!</p>
        </div>

        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead>
              <tr class="!bg-gradient-to-r from-rose-600 to-red-600">
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Spelling (Woord)</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Uitspraak (Klank)</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Regel</th>
                <th class="text-white text-xs font-bold uppercase tracking-wider px-4 py-3 text-left">Met Klinker (Stem keert terug)</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-bold">hon<strong>d</strong></td>
                <td class="px-4 py-3 text-sm text-rose-600 font-bold">hont</td>
                <td class="px-4 py-3 text-sm">d → t</td>
                <td class="px-4 py-3 text-sm">hon<strong>d</strong>en (d klinkt weer als d)</td>
              </tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-700">
                <td class="px-4 py-3 text-sm font-bold">we<strong>b</strong></td>
                <td class="px-4 py-3 text-sm text-rose-600 font-bold">wep</td>
                <td class="px-4 py-3 text-sm">b → p</td>
                <td class="px-4 py-3 text-sm">we<strong>b</strong>ben (b klinkt weer als b)</td>
              </tr>
              <tr class="bg-white dark:bg-slate-800/50">
                <td class="px-4 py-3 text-sm font-bold">hui<strong>s</strong></td>
                <td class="px-4 py-3 text-sm text-rose-600 font-bold">huiss</td>
                <td class="px-4 py-3 text-sm">z → s</td>
                <td class="px-4 py-3 text-sm">hui<strong>z</strong>en (z klinkt weer als z)</td>
              </tr>
            </tbody>
          </table>
        </div>
      `
    }
  ],
  rulesTable: [
    {
      rule: "Open vs. Gesloten Lettergreep",
      structure: "Gesloten + 1 klinker = kort (kat). Gesloten + 2 klinkers = lang (maan). Open + 1 klinker = lang (ma-nen).",
      example: "kat (kort) – maan (lang) – manen (open, lang)",
      usage: "Dit is de basis van de Nederlandse spelling. Veranderd de klinkerlengte? Dan verandert de spelling (kat → katten)."
    },
    {
      rule: "Eindklankverscherping",
      structure: "Aan het woordeinde worden stemhebbende medeklinkers (b, d, z) stemloos (p, t, s).",
      example: "hond → hont, web → wep, huis → huiss",
      usage: "Spreek de laatste letter altijd stemloos uit. Zodra er een klinker volgt (honden), keert de stem terug."
    },
    {
      rule: "Tweeklanken zijn glijders",
      structure: "ei/ij, au/ou en ui zijn tweeklanken. Je glijdt van de ene naar de andere klank.",
      example: "ei/ij = e+i, au/ou = a+oe, ui = u+i",
      usage: "Verwar ui nooit met au of uu. Verwar ei/ij nooit met de Engelse 'ai'."
    },
    {
      rule: "De Harde G en CH",
      structure: "Zowel de g als de ch zijn een raspende keelklank.",
      example: "goed, lachen",
      usage: "Dit is de moeilijkste klank voor niet-moedertaalsprekers. Oefen met de 'zaagklank' achter in de keel."
    },
    {
      rule: "SCH = S + CH",
      structure: "De combinatie sch bestaat uit een s-klank direct gevolgd door de keel-ch.",
      example: "school = s-ggg-ool",
      usage: "Spreek het NOOIT uit als 'sj' (zoals in het Engels) of 'sk'. Het is echt een s + ch."
    },
    {
      rule: "NG en NK",
      structure: "ng is één nasale klank (als in Engels sing). nk is ng + k.",
      example: "zingen (ng), bank (ng-k)",
      usage: "Spreek ng NOOIT uit als n + een harde g. Het is één neusklank."
    }
  ],
  callouts: [
    { type: "remember", label: "🏆 Gouden Regel 1", text: "Open lettergreep = lange klinker (ma-nen). Gesloten lettergreep = korte klinker (kat) of dubbel (maan)." },
    { type: "remember", label: "🏆 Gouden Regel 2", text: "Eindklankverscherping: b, d, z worden p, t, s op het eind van een woord (hond = hont)." },
    { type: "remember", label: "⚠️ PAS OP 1", text: "ui is een tweeklank (u+i), GEEN uu of au. (huis ≠ huus of haus)." },
    { type: "remember", label: "⚠️ PAS OP 2", text: "eu is een zuivere klinker, GEEN tweeklank. (leuk ≠ luuk of luyk)." },
    { type: "remember", label: "⚠️ PAS OP 3", text: "sch is s + ch, NOOIT sj. (school = s-ggg-ool, niet sjoool)." },
    { type: "remember", label: "⚠️ PAS OP 4", text: "ng is één neusklank, NOOIT n + harde g. (zingen = zie-ngen)." },
    { type: "tip", label: "💡 Pro-tip", text: "De doffe e (sjwa / ə) is de meest voorkomende klank. Spreek de 'e' in 'lopen' of 'de' uit als een zacht 'uh', niet als 'ee'." }
  ],
  commonMistakes: [
    { incorrect: "meisje uitspreken als 'mee-sje'", correct: "mei-sje", explanation: "ei/ij is een tweeklank (e+i), geen lange ee." },
    { incorrect: "huis uitspreken als 'huus' of 'haus'", correct: "h-ui-s", explanation: "ui is een unieke tweeklank (getuite u + i)." },
    { incorrect: "leuk uitspreken als 'luuk'", correct: "leuk", explanation: "eu is een zuivere, lange klinker (zoals Frans peur), geen tweeklank." },
    { incorrect: "school uitspreken als 'sjoool'", correct: "s-ch-ool", explanation: "sch is s + ch (keelschraap), niet de Engelse sh/sj." },
    { incorrect: "hond uitspreken met een hoorbare d", correct: "hont", explanation: "Eindklankverscherping: d wordt t op het eind van een woord." },
    { incorrect: "bomen uitspreken met een korte o", correct: "boo-men", explanation: "Open lettergreep (bo) betekent dat de klinker lang is." },
    { incorrect: "lopen uitspreken als 'lo-pèn'", correct: "lo-puh", explanation: "De uitgang -en is een doffe e (sjwa), geen volle e." },
    { incorrect: "w uitspreken als de Engelse w", correct: "zachte v-achtige klank", explanation: "Nederlandse w is labiodentaal (lip op tand), niet bilabiaal (rond)." }
  ],
  review: [
    "✅ Korte klinkers in gesloten lettergreep: kat, bed, pit.",
    "✅ Lange klinkers in open lettergreep of dubbel: maan, been, bomen.",
    "✅ Doffe e (sjwa) in onbeklemtoonde lettergrepen: de, lopen.",
    "✅ Tweeklanken: ei/ij, au/ou, ui (het zijn glijders).",
    "✅ eu is een zuivere klinker, geen tweeklank.",
    "✅ g en ch zijn dezelfde raspende keelklank.",
    "✅ sch is s + ch, nooit sj.",
    "✅ ng is één neusklank, nk is ng + k.",
    "✅ Eindklankverscherping: d→t, b→p, z→s.",
    "✅ w is een zachte v-achtige klank, niet de Engelse w."
  ],
  qa: [
    { question: "Hoe spreek je 'hond' correct uit?", answer: "hont (de d wordt t door eindklankverscherping)." },
    { question: "Wat is de juiste uitspraak van 'school'?", answer: "s-ch-ool (s + keel-g). Nooit 'sjoool'." },
    { question: "Hoe klinkt de 'eu' in 'neus'?", answer: "Als de Franse 'eu' in 'peur'. Een zuivere, lange klinker zonder glide." },
    { question: "Hoe spreek je 'meisje' correct uit?", answer: "mei-sje. De ei/ij is een tweeklank (e+i), geen ee." },
    { question: "Wat is de klank van 'ui' in 'muis'?", answer: "Een getuite korte u, direct gevolgd door een ie-glide." },
    { question: "Hoe spreek je 'zingen' uit?", answer: "zie-ngen. De ng is één nasale klank, geen n + harde g." },
    { question: "Waarom is 'bomen' met 'oo' en 'bommen' met korte 'o'?", answer: "Bomen heeft een open lettergreep (bo), dus lange klinker. Bommen heeft een dubbele medeklinker (mm) die de lettergreep sluit, dus korte klinker." },
    { question: "Hoe klinkt 'web' aan het eind van een zin?", answer: "wep. De b wordt p door eindklankverscherping." }
  ]
};