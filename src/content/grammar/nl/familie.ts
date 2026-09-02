import type { GrammarLesson } from "../../types";

export const familie: GrammarLesson = {
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
};