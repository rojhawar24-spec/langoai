import type { GrammarLesson } from "../../types";

export const accenttekens: GrammarLesson = {
  id: "nl-accenttekens-1",
  title: "Accenttekens: Nadruk, Uitspraak, Betekenisonderscheid en Trema",
  level: 2,
  topic: "Accenttekens", // [Sch] Schrijven – spelling
  body: "Leer alles over het accent aigu, accent grave en trema. Voor nadruk, uitspraak, betekenisverschil en klinkerbotsing. Met een schat aan voorbeelden en heldere regels.",
  overview:
    "Accenttekens zijn kleine tekens op letters, maar ze kunnen de betekenis van een woord helemaal veranderen, de uitspraak sturen of een woord extra kracht geven. In deze **supercomplete, extreem uitgebreide les** duiken we diep in de wereld van het **accent aigu**, **accent grave** en het **trema**. Je leert niet alleen de basis, maar ook de fijne kneepjes: wanneer je wél en geen accenten gebruikt voor nadruk, hoe je leenwoorden correct spelt, hoe het trema klinkerbotsing voorkomt, en hoe je met accenten betekenisverschil maakt (één/een, vóór/voor, wél/wel). Bovendien krijg je extra uitleg over hoofdletters met accenten, het verschil tussen trema en koppelteken, en vele voorbeelden uit de praktijk. Met een uitgebreide tabel, PAS OP‑waarschuwingen en 8 ijzersterke oefenvragen schrijf jij voortaan elk accent foutloos.",
  anchorSectionId: "belang",
  exercises: [],
  timeExpressionsLabel: "Soorten accenten en hun functie ✨",
  timeExpressions: {
    header: "Teken | Naam | Functie | Voorbeeld",
    rows: [
      ["**´**", "Accent aigu", "Nadruk, uitspraak, betekenisonderscheid", "héél, café, één"],
      ["**`**", "Accent grave", "Uitspraak, voorzetsel", "crème, hè, à"],
      ["**¨**", "Trema (deelteken)", "Klinkerbotsing voorkomen", "tweeën, geëerd, zeeën"],
    ],
  },
  details: [
    {
      title: "Waarom zijn accenttekens belangrijk? 🎯",
      body: `
        <p>Accenttekens kunnen de betekenis van een woord volledig veranderen, de uitspraak sturen of een woord extra kracht geven. Een verkeerd accent – of juist geen accent – kan leiden tot misverstanden. In deze les behandelen we de drie belangrijkste accenttekens: het **accent aigu**, het **accent grave** en het **trema**.</p>
      `,
    },
    {
      title: "Het accent aigu (´) – nadruk, uitspraak en betekenis 🗣️💥",
      body: `
        <p>Het accent aigu (de schuine streep van linksonder naar rechtsboven) heeft drie hoofdfuncties.</p>
        <h3 class="text-lg font-bold mt-4 mb-2">1. Nadruk leggen op een woord</h3>
        <p>Als je in een zin een bepaald woord extra wilt beklemtonen, zet je een accent aigu op de beklemtoonde klinker(s). Bij een dubbele klinker (aa, ee, oo, uu) krijgen <strong>beide letters</strong> een accent. Bij tweeklanken (ij, ei, ui, au, ou, eu, oe) wordt vrijwel nooit een accent gezet.</p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Zonder nadruk</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Met nadruk</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Welke letters?</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Het is heel mooi.</td><td class="px-3 py-2 text-sm">Het is <strong>héél</strong> mooi!</td><td class="px-3 py-2 text-sm">beide e's</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Ik heb het allemaal gezien.</td><td class="px-3 py-2 text-sm">Ik heb <strong>állemaal</strong> gezien!</td><td class="px-3 py-2 text-sm">á en á</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Dat is niet goed.</td><td class="px-3 py-2 text-sm">Dat is <strong>níét</strong> goed!</td><td class="px-3 py-2 text-sm">í en é</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">Ook jij bent uitgenodigd.</td><td class="px-3 py-2 text-sm"><strong>Óók</strong> jij bent uitgenodigd!</td><td class="px-3 py-2 text-sm">beide o's</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">Dat is mijn boek.</td><td class="px-3 py-2 text-sm">Dat is <strong>míj́n</strong> boek!</td><td class="px-3 py-2 text-sm">í (ij blijft onveranderd)</td></tr>
            </tbody>
          </table>
        </div>
        <p><span class="pas-op-highlight">⚠️ PAS OP</span> Nadrukaccenten gebruik je **alleen** als het echt nodig is. In formele teksten (brieven, schoolopdrachten) vermijd je ze. In informele teksten zoals chats, dagboeken en strips kun je ze wél gebruiken.</p>
        <p>Let op: bij woorden met een enkele klinker en een medeklinker erachter zet je het accent op die klinker: <em>dát, wél, níet</em>. Bij woorden op -lijk zet je het accent op de beklemtoonde lettergreep, niet op -lijk.</p>
        <h3 class="text-lg font-bold mt-6 mb-2">2. Uitspraak aangeven – de volle e in leenwoorden</h3>
        <p>Franse leenwoorden die eindigen op een <strong>e</strong>, krijgen een accent aigu als die e voluit moet klinken als een lange <strong>ee</strong>. Zonder accent zou de e stom (sjwa) zijn.</p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Met accent aigu</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Uitspraak</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">café</td><td class="px-3 py-2 text-sm">kaf‑fee (lange ee)</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">saté</td><td class="px-3 py-2 text-sm">sa‑tee</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">logé</td><td class="px-3 py-2 text-sm">lo‑zjee</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">comité</td><td class="px-3 py-2 text-sm">ko‑mie‑tee</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">procédé</td><td class="px-3 py-2 text-sm">pro‑see‑dee</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">rosé</td><td class="px-3 py-2 text-sm">ro‑zee</td></tr>
            </tbody>
          </table>
        </div>
        <h3 class="text-lg font-bold mt-6 mb-2">3. Betekenisonderscheid – voorkomen dat je het verkeerde woord leest</h3>
        <p>Sommige woorden verschillen alléén door een accent aigu van betekenis. Dit zijn de belangrijkste:</p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Met accent(en)</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Zonder accent</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Uitleg</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm"><strong>één</strong> (telwoord 1)</td><td class="px-3 py-2 text-sm">een (lidwoord)</td><td class="px-3 py-2 text-sm">Ik heb <strong>één</strong> appel. / Ik heb <strong>een</strong> appel.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm"><strong>vóór</strong> (nadruk/tegenstelling)</td><td class="px-3 py-2 text-sm">voor (gewoon voorzetsel)</td><td class="px-3 py-2 text-sm">Ik stem <strong>vóór</strong> het plan. / Ik sta <strong>voor</strong> de deur.</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm"><strong>wél</strong> (tegenstelling tot 'niet')</td><td class="px-3 py-2 text-sm">wel (bijwoord, 'waarschijnlijk')</td><td class="px-3 py-2 text-sm">Hij komt <strong>wél</strong>! (toch) / Hij komt <strong>wel</strong>. (waarschijnlijk)</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm"><strong>dát</strong> (aanwijzend, met nadruk)</td><td class="px-3 py-2 text-sm">dat (neutraal aanwijzend of betrekkelijk)</td><td class="px-3 py-2 text-sm"><strong>Dát</strong> is het probleem! / Het boek <strong>dat</strong> ik lees.</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm"><strong>wát</strong> (uitroep)</td><td class="px-3 py-2 text-sm">wat (vragend/betrekkelijk)</td><td class="px-3 py-2 text-sm"><strong>Wát</strong> een mooi huis! / <strong>Wat</strong> doe je?</td></tr>
            </tbody>
          </table>
        </div>
        <p><span class="pas-op-highlight">⚠️ PAS OP</span> Het telwoord <strong>één</strong> heeft in formele teksten altijd accenten als verwarring met het lidwoord mogelijk is. In zinnen waar het getal niet per se benadrukt wordt (bijv. <em>Ik heb er één</em>) zijn de accenten ook juist. Alleen in heel informele appjes worden ze soms weggelaten, maar dat is niet aan te raden.</p>
      `,
    },
    {
      title: "Het accent grave (`) – korte e en het voorzetsel à 🎵",
      body: `
        <h3 class="text-lg font-bold mt-4 mb-2">1. De korte e‑klank (è)</h3>
        <p>Het accent grave op de e geeft aan dat de e klinkt als een korte, open <strong>e</strong>, zoals in *bed* of *pet*. Dit komt voor in leenwoorden uit het Frans en in het Nederlandse tussenwerpsel <strong>hè</strong>.</p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Met accent grave</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Uitspraak</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">crème</td><td class="px-3 py-2 text-sm">krem (korte e)</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">scène</td><td class="px-3 py-2 text-sm">sen‑nuh (korte e)</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">gêne</td><td class="px-3 py-2 text-sm">zjee‑nuh (korte e)</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">hè</td><td class="px-3 py-2 text-sm">korte e (uitroep van verbazing of vermoeidheid)</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">première</td><td class="px-3 py-2 text-sm">pruh‑mjee‑ruh (korte e op de eerste e, accent grave; de laatste e is stom)</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">barrière</td><td class="px-3 py-2 text-sm">ba‑rjee‑ruh</td></tr>
            </tbody>
          </table>
        </div>
        <h3 class="text-lg font-bold mt-6 mb-2">2. Het voorzetsel à (per, voor, ten bedrage van)</h3>
        <p>Het voorzetsel <strong>à</strong> (uit het Frans) gebruik je in prijsaanduidingen en vaste uitdrukkingen. Het krijgt een accent grave om het te onderscheiden van het lidwoord *a* (dat niet bestaat in het Nederlands, maar het zou verwarrend zijn).</p>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">€ 3,50 <strong>à</strong> stuk</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">Kaarten <strong>à</strong> € 10,‑</li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">Hij verkocht ze <strong>à</strong> raison van… (verouderd)</li>
        </ul>
        <p><span class="pas-op-highlight">⚠️ PAS OP</span> Verwar <strong>à</strong> niet met het Nederlandse woordje <em>a</em> (als in <em>a-symmetrisch</em>, waar het een voorvoegsel is).</p>
      `,
    },
    {
      title: "Het trema (¨) – klinkerbotsing voorkomen 🧩",
      body: `
        <p>Het trema (de twee puntjes) plaats je op de <strong>eerste klinker van een nieuwe lettergreep</strong> om aan te geven dat twee opeenvolgende klinkers niet als één klank moeten worden uitgesproken, maar apart.</p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Met trema</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Zonder trema (fout of anders)</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Uitspraak</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm"><strong>tweeën</strong></td><td class="px-3 py-2 text-sm">tween (lange ee)</td><td class="px-3 py-2 text-sm">twee‑en</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm"><strong>zeeën</strong></td><td class="px-3 py-2 text-sm">zeen</td><td class="px-3 py-2 text-sm">zee‑en</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm"><strong>geëerd</strong></td><td class="px-3 py-2 text-sm">geerd (als in 'geel')</td><td class="px-3 py-2 text-sm">ge‑eerd</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm"><strong>coördinatie</strong></td><td class="px-3 py-2 text-sm">coordinatie (oo?)</td><td class="px-3 py-2 text-sm">co‑ordinatie</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm"><strong>reëel</strong></td><td class="px-3 py-2 text-sm">reel (lange ee)</td><td class="px-3 py-2 text-sm">re‑eel</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm"><strong>moskeeën</strong></td><td class="px-3 py-2 text-sm">moskeen (lange ee)</td><td class="px-3 py-2 text-sm">mos‑kee‑en</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm"><strong>geïrriteerd</strong></td><td class="px-3 py-2 text-sm">geirriteerd (ei)</td><td class="px-3 py-2 text-sm">ge‑irriteerd</td></tr>
            </tbody>
          </table>
        </div>
        <p>Het trema gebruik je bij:</p>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">Meervouden op -en van woorden die op een klinker eindigen: <strong>tweeën, reeën, knieën</strong></li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">Voorvoegsels + klinker: <strong>geëerd, geïmiteerd, beëindigen</strong></li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300">Bij klinkerbotsing midden in een woord: <strong>coördinatie, reëel, poëzie</strong></li>
        </ul>
        <p><span class="pas-op-highlight">⚠️ PAS OP</span> Gebruik geen trema, maar een <strong>koppelteken</strong> als er al een ander leesteken of hoofdletter in het spel is: <strong>A4-tje</strong>, <strong>auto-ongeluk</strong> (omdat auto eindigt op een klinker en ongeluk met een klinker begint? Nee, auto eindigt op o, ongeluk begint met o, maar de regel is: bij samenstellingen die anders een verkeerde uitspraak zouden geven, gebruik je een koppelteken. Hier is het koppelteken optioneel; officieel is het <em>autobaan</em>, maar <em>auto‑ongeluk</em> met koppelteken omdat anders de o's samenklinken. Het trema is alleen voor afleidingen en meervouden, niet voor samenstellingen.)</p>
      `,
    },
    {
      title: "Hoofdletters met accenten – hoe gaat dat? 🔠",
      body: `
        <p>Aan het begin van een zin kan een woord met een accentteken komen. De hoofdletter krijgt dan gewoon de accenten. Het is dus <strong>Één ding is zeker</strong> (met É). Ook <strong>Café</strong> aan het begin van een zin blijft <strong>Café</strong> met accent.</p>
        <p>Bij het trema geldt: als het hele woord in hoofdletters wordt geschreven (bijvoorbeeld in een opschrift), blijft het trema vaak behouden, maar het is geen verplichting. Normaal gesproken schrijf je <strong>Eén</strong>, <strong>Íéts</strong> (als je dat zou benadrukken), maar in gewone zinnen vermijd je nadrukaccenten aan het begin van een zin, omdat de beginpositie al nadruk geeft.</p>
      `,
    },
  ],
  rulesTable: [
    {
      rule: "Accent aigu (´) voor nadruk",
      structure: "Zet op de beklemtoonde klinker(s) een accent aigu om een woord kracht bij te zetten. Bij dubbele klinkers beide letters.",
      example: "héél, álles, óók, níét, míj́n",
      usage: "Spaarzaam gebruiken; niet in formele teksten.",
    },
    {
      rule: "Accent aigu op slot‑e in leenwoorden",
      structure: "Franse leenwoorden die eindigen op een volle e krijgen een accent aigu.",
      example: "café, saté, logé, comité, rosé",
      usage: "Spreek de e uit als lange ee.",
    },
    {
      rule: "Accent aigu voor betekenisonderscheid",
      structure: "Gebruik accenten op **één** (telwoord), **vóór** (nadruk), **wél**, **dát**, **wát** bij tegenstelling of uitroep.",
      example: "één / een, vóór / voor, wél / wel, dát / dat, wát / wat",
      usage: "Alleen als het telwoord of de nadruksvorm bedoeld is.",
    },
    {
      rule: "Accent grave (è) voor korte e‑klank",
      structure: "De è klinkt als de korte e in 'bed'. Gebruik in leenwoorden en in hè.",
      example: "crème, scène, barrière, hè",
      usage: "Ook het voorzetsel à krijgt accent grave.",
    },
    {
      rule: "Trema (¨) bij klinkerbotsing",
      structure: "Zet een trema op de eerste klinker van de nieuwe lettergreep om aparte uitspraak te waarborgen.",
      example: "tweeën, zeeën, geëerd, coördinatie, reëel",
      usage: "Geen trema bij samenstellingen (daar koppelteken).",
    },
    {
      rule: "Hoofdletters behouden het accent",
      structure: "Aan het begin van een zin schrijf je gewoon de hoofdletter met het bijbehorende accent.",
      example: "**Één** ding is zeker. **Café** de Zon is open.",
      usage: "Nadrukaccenten aan het begin van een zin zijn ongebruikelijk.",
    },
  ],
  callouts: [
    { type: "remember", label: "Onthoud 1", text: "**Accent aigu** (´) = nadruk (héél), volle e (café), en betekenisonderscheid (één, vóór)." },
    { type: "remember", label: "Onthoud 2", text: "**Accent grave** (`) = korte e (crème, hè) en voorzetsel à." },
    { type: "remember", label: "Onthoud 3", text: "**Trema** (¨) = klinkerbotsing oplossen: tweeën, geëerd, coördinatie." },
    { type: "remember", label: "Onthoud 4", text: "**één** (telwoord) vs. **een** (lidwoord) – altijd accenten bij het getal!" },
    { type: "remember", label: "Onthoud 5", text: "Nadrukaccenten gebruik je alleen in informele teksten of bij absolute noodzaak." },
    { type: "remember", label: "Onthoud 6", text: "Bij klinkerbotsing in samenstellingen: **koppelteken**, niet trema (auto-ongeluk)." },
  ],
  commonMistakes: [
    { incorrect: "een boek (als je 1 boek bedoelt en verwarring mogelijk is)", correct: "één boek", explanation: "Het telwoord krijgt accenten; het lidwoord niet." },
    { incorrect: "cafè (accent grave)", correct: "café", explanation: "Franse leenwoorden op een volle e krijgen een accent aigu." },
    { incorrect: "Heel veel (zonder nadruk, maar je wilt juist extra benadrukken)", correct: "Héél veel", explanation: "Voor extra nadruk zet je accenten op beide e's." },
    { incorrect: "twee-en (met streepje)", correct: "tweeën", explanation: "Trema, geen koppelteken, om de klinkerbotsing op te lossen." },
    { incorrect: "creme (zonder accent) als je crème bedoelt", correct: "crème", explanation: "Zonder accent grave klinkt het als 'kreem'." },
    { incorrect: "a stuk (zonder accent grave)", correct: "à stuk", explanation: "Het voorzetsel à schrijf je met accent grave." },
    { incorrect: "voor stemmen (als je tegenstelling met 'tegen' bedoelt)", correct: "vóór stemmen", explanation: "Je gebruikt het accent aigu om nadruk en betekenisonderscheid aan te geven." },
    { incorrect: "autoongeluk (zonder koppelteken)", correct: "auto-ongeluk", explanation: "Bij klinkerbotsing in een samenstelling gebruik je een koppelteken, geen trema." },
  ],
  review: [
    "Accent aigu (´): voor nadruk (héél), volle e (café), en betekenisonderscheid (één, vóór).",
    "Accent grave (`): voor korte e (crème, hè) en het voorzetsel à.",
    "Trema (¨): bij klinkerbotsing in meervouden en afleidingen (tweeën, geëerd).",
    "Nadrukaccenten spaarzaam gebruiken; niet in formele teksten.",
    "Het telwoord één heeft altijd accenten in formele teksten.",
    "Koppelteken bij klinkerbotsing in samenstellingen (auto-ongeluk).",
    "Hoofdletters behouden het accent (Één, Café).",
  ],
  qa: [
    {
      question: "Wanneer schrijf je “één” met accenten en wanneer “een” zonder? Leg het uit met een eigen voorbeeldzin.",
      answer: "Je schrijft **één** met accenten als je het telwoord bedoelt (het getal 1) en verwarring met het lidwoord mogelijk is. Bijvoorbeeld: *Ik heb maar één wens.* Je schrijft **een** zonder accenten als het het onbepaald lidwoord is. Bijvoorbeeld: *Ik heb een idee.*",
    },
    {
      question: "Waarom is “crème” met een accent grave en “café” met een accent aigu? Verklaar het verschil in uitspraak.",
      answer: "**café** heeft een accent aigu op de e, waardoor die e als een lange **ee** klinkt (kaf‑fee). **crème** heeft een accent grave op de e, waardoor die e als een korte **e** klinkt (krem), zoals in *hè*.",
    },
    {
      question: "Wat is het verschil in betekenis tussen “vóór” met accenten en “voor” zonder? Geef een voorbeeldzin bij elk.",
      answer: "**vóór** (met accenten) gebruik je met nadruk, vaak in de betekenis van 'ten gunste van' of in een tegenstelling met *tegen*. Bijvoorbeeld: *Ik ben vóór het voorstel.* **voor** (zonder accenten) is het gewone voorzetsel. Bijvoorbeeld: *Ik sta voor het raam.*",
    },
    {
      question: "Je ziet de zin: “Het is heel belangrijk.” Iemand wil extra benadrukken hoe belangrijk het is. Hoe schrijf je dat? Pas de zin aan en leg uit.",
      answer: "Je schrijft: **Het is héél belangrijk.** De accenten aigu op beide e's van *heel* leggen extra nadruk op het woord. Dit gebruik komt voor in informele teksten of wanneer je de spreektoon wilt weergeven.",
    },
    {
      question: "Waarom schrijf je “tweeën” met een trema en niet met een koppelteken?",
      answer: "Het trema geeft aan dat de twee e's niet als één lange ee-klank moeten worden uitgesproken, maar als twee aparte klanken: *twee‑en*. Een koppelteken gebruik je bij samenstellingen, niet om een klinkerbotsing in een meervoud of afleiding op te lossen.",
    },
    {
      question: "Corrigeer de fout: “Ik koop twee kaarten a 10 euro per stuk.”",
      answer: "De correcte zin is: **Ik koop twee kaarten à 10 euro per stuk.** Het voorzetsel *à* krijgt een accent grave.",
    },
    {
      question: "In de zin “Wat een prachtig huis!” wordt de nadruk gelegd op de uitroep. Hoe zou je dat schrijven om de uitroep extra kracht te geven? Leg uit waarom je dat accent gebruikt.",
      answer: "Je schrijft: **Wát een prachtig huis!** Het accent aigu op *wát* versterkt de uitroep en maakt duidelijk dat het om een verbaasde of bewonderende uitroep gaat, niet om een gewone vraag.",
    },
    {
      question: "Waarom schrijf je 'auto-ongeluk' met een koppelteken, maar 'tweeën' met een trema? Wat is het verschil?",
      answer: "**tweeën** is een meervoud van *twee*; de klinkerbotsing ontstaat door een uitgang. Daar gebruik je een trema. **auto-ongeluk** is een samenstelling van twee woorden. Bij samenstellingen los je een klinkerbotsing op met een koppelteken, niet met een trema.",
    },
  ],
};