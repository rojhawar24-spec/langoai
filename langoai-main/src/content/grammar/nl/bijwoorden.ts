import type { GrammarLesson } from "../../types";

export const bijwoorden: GrammarLesson = {
  id: "nl-bijwoorden-1",
  title: "Bijwoorden van Tijd, Plaats, Wijze, Hoeveelheid en Houding",
  level: 1,
  topic: "Bijwoorden", // [G] Grammatica
  body: "Leer alle belangrijke bijwoorden: van tijd, plaats, wijze, hoeveelheid, frequentie en houding. Met exacte plaats in de zin, valkuilen en talloze voorbeelden.",
  overview:
    "Bijwoorden vertellen **wanneer**, **waar**, **hoe**, **hoeveel** of met welke **houding** iets gebeurt. In deze **allesomvattende, supercomplete les** krijg je niet alleen de bijwoorden van tijd, plaats en wijze, maar ook die van **hoeveelheid** (heel, erg, veel, weinig, genoeg, bijna, helemaal, ongeveer, tamelijk, vrij, behoorlijk), **frequentie** (altijd, nooit, soms, vaak, zelden, meestal, dagelijks, wekelijks) en **houding/modaliteit** (misschien, wellicht, zeker, absoluut, helaas, gelukkig, natuurlijk, eigenlijk). Je leert het verschil met bijvoeglijke naamwoorden, de precieze plaats in de zin, hoe je bijwoorden combineert, en welke vaste uitdrukkingen je absoluut moet kennen. Met talloze voorbeelden, overzichtelijke tabellen en 7 ijzersterke oefenvragen beheers je élk bijwoord in het Nederlands.",
  anchorSectionId: "overzicht",
  exercises: [],
  timeExpressionsLabel: "Overzicht bijwoorden van tijd ⏱️",
  timeExpressions: {
    header: "Bijwoord van tijd | Betekenis | Voorbeeldzin",
    rows: [
      ["**gisteren**", "de dag voor vandaag", "**Gisteren** ben ik naar de markt geweest."],
      ["**vandaag**", "op deze dag", "**Vandaag** schijnt de zon."],
      ["**morgen**", "de dag na vandaag", "**Morgen** ga ik op reis."],
      ["**nu**", "op dit moment", "Ik heb **nu** geen tijd."],
      ["**straks**", "binnenkort, later vandaag", "**Straks** komt de monteur."],
      ["**dadelijk**", "heel binnenkort, direct", "Ik kom **dadelijk** naar je toe."],
      ["**altijd**", "op elk moment, voortdurend", "Zij is **altijd** vrolijk."],
      ["**nooit**", "op geen enkel moment", "Ik heb **nooit** gerookt."],
      ["**soms**", "op sommige momenten, af en toe", "**Soms** ga ik met de bus."],
      ["**vaak**", "veel keren, dikwijls", "We gaan **vaak** naar het park."],
      ["**eerst**", "voordat iets anders gebeurt", "**Eerst** maken we het huis schoon."],
      ["**daarna**", "na iets anders", "**Daarna** drinken we koffie."],
      ["**vroeger**", "in het verleden", "**Vroeger** woonde ik in een dorp."],
      ["**binnenkort**", "in de nabije toekomst", "**Binnenkort** verhuizen we."],
      ["**onlangs**", "kort geleden", "**Onlangs** heb ik haar nog gezien."],
      ["**tegenwoordig**", "in deze tijd, nu", "**Tegenwoordig** werkt iedereen thuis."],
      ["**onmiddellijk**", "meteen, direct", "Hij kwam **onmiddellijk**."],
      ["**binnenkort**", "spoedig", "**Binnenkort** vertrekken we."],
    ],
  },
  details: [
    {
      title: "Bijwoorden van tijd – wanneer, hoelang en hoe vaak ⏱️",
      body: `
        <p>Bijwoorden van tijd antwoorden op de vraag <strong>wanneer</strong>, <strong>hoelang</strong> of <strong>hoe vaak</strong> iets gebeurt. De meest gebruikte vind je hierboven in de tabel. Daarnaast zijn er veel samenstellingen met dagdelen: <em>gisterochtend, gisterenmiddag, morgenavond</em> (altijd aan elkaar).</p>
        <p><span class="pas-op-highlight">⚠️ PAS OP</span> <strong>Straks</strong> en <strong>dadelijk</strong> lijken op elkaar, maar <strong>dadelijk</strong> is nog dringender. <strong>Straks</strong> laat iets meer tijd: <em>Straks gaan we eten.</em> Ook <strong>eens</strong> is een tijdsbijwoord: <em>Ik wil het eens proberen</em> (een keer).</p>
        <p><strong>Bijwoorden van frequentie</strong> geven aan hoe vaak iets gebeurt: <strong>altijd, nooit, soms, vaak, zelden, meestal, dagelijks, wekelijks, jaarlijks, regelmatig, af en toe, zo nu en dan.</strong> Voorbeeld: <em>Ik ga <strong>zelden</strong> uit.</em></p>
      `,
    },
    {
      title: "Bijwoorden van plaats – waar gebeurt er iets? 📍",
      body: `
        <p>Deze bijwoorden antwoorden op de vraag <strong>waar</strong> of <strong>waarheen</strong>. Ze duiden een locatie aan.</p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Bijwoord</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Betekenis</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Voorbeeld</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">hier</td><td class="px-3 py-2 text-sm">op deze plek, dichtbij</td><td class="px-3 py-2 text-sm">Kom <strong>hier</strong> zitten.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">daar</td><td class="px-3 py-2 text-sm">op die plek, verder weg</td><td class="px-3 py-2 text-sm"><strong>Daar</strong> ligt het boek.</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">binnen</td><td class="px-3 py-2 text-sm">in een gebouw of ruimte</td><td class="px-3 py-2 text-sm">Kom <strong>binnen</strong>.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">buiten</td><td class="px-3 py-2 text-sm">in de open lucht</td><td class="px-3 py-2 text-sm">We zitten <strong>buiten</strong>.</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">boven</td><td class="px-3 py-2 text-sm">op een hogere verdieping</td><td class="px-3 py-2 text-sm">De slaapkamer is <strong>boven</strong>.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">beneden</td><td class="px-3 py-2 text-sm">op een lagere verdieping</td><td class="px-3 py-2 text-sm">De keuken is <strong>beneden</strong>.</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">overal</td><td class="px-3 py-2 text-sm">op alle plekken</td><td class="px-3 py-2 text-sm">Er ligt <strong>overal</strong> speelgoed.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">nergens</td><td class="px-3 py-2 text-sm">op geen enkele plek</td><td class="px-3 py-2 text-sm">Ik kan het <strong>nergens</strong> vinden.</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">ergens</td><td class="px-3 py-2 text-sm">op een onbekende plek</td><td class="px-3 py-2 text-sm">Het moet <strong>ergens</strong> zijn.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">vlakbij</td><td class="px-3 py-2 text-sm">op korte afstand</td><td class="px-3 py-2 text-sm">Er is <strong>vlakbij</strong> een bakker.</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">ver</td><td class="px-3 py-2 text-sm">op grote afstand</td><td class="px-3 py-2 text-sm">Het strand is <strong>ver</strong>.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">opzij</td><td class="px-3 py-2 text-sm">naar de zijkant</td><td class="px-3 py-2 text-sm">Ga <strong>opzij</strong>.</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">rechtdoor</td><td class="px-3 py-2 text-sm">in een rechte lijn</td><td class="px-3 py-2 text-sm">Loop <strong>rechtdoor</strong>.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">links / rechts</td><td class="px-3 py-2 text-sm">aan de linker- / rechterkant</td><td class="px-3 py-2 text-sm">De winkel is hier <strong>links</strong>.</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">omhoog / omlaag</td><td class="px-3 py-2 text-sm">naar boven / naar beneden</td><td class="px-3 py-2 text-sm">Klim <strong>omhoog</strong>.</td></tr>
            </tbody>
          </table>
        </div>
        <p>💡 <strong>Ezelsbrug:</strong> <strong>Hier</strong> dichtbij, <strong>daar</strong> verder weg – net als <strong>deze</strong> en <strong>die</strong>.</p>
      `,
    },
    {
      title: "Bijwoorden van wijze – hoe gebeurt er iets? 😊",
      body: `
        <p>Deze bijwoorden antwoorden op de vraag <strong>hoe</strong> of <strong>op welke manier</strong>.</p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Bijwoord</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Betekenis</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Voorbeeldzin</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">graag</td><td class="px-3 py-2 text-sm">met plezier</td><td class="px-3 py-2 text-sm">Ik drink <strong>graag</strong> thee.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">snel</td><td class="px-3 py-2 text-sm">in hoog tempo</td><td class="px-3 py-2 text-sm">Hij loopt <strong>snel</strong>.</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">langzaam</td><td class="px-3 py-2 text-sm">in laag tempo</td><td class="px-3 py-2 text-sm">De schildpad beweegt <strong>langzaam</strong>.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">goed</td><td class="px-3 py-2 text-sm">op een juiste manier</td><td class="px-3 py-2 text-sm">Je hebt <strong>goed</strong> geslapen.</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">slecht</td><td class="px-3 py-2 text-sm">op een onjuiste manier</td><td class="px-3 py-2 text-sm">Het ging <strong>slecht</strong>.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">hard</td><td class="px-3 py-2 text-sm">luid of met kracht</td><td class="px-3 py-2 text-sm">Zet de muziek niet te <strong>hard</strong>.</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">zacht</td><td class="px-3 py-2 text-sm">stil of zachtjes</td><td class="px-3 py-2 text-sm">Praat <strong>zacht</strong>.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">grappig</td><td class="px-3 py-2 text-sm">op humoristische wijze</td><td class="px-3 py-2 text-sm">Hij vertelt <strong>grappig</strong>.</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">vriendelijk</td><td class="px-3 py-2 text-sm">op aardige manier</td><td class="px-3 py-2 text-sm">Ze lachte <strong>vriendelijk</strong>.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">gemakkelijk</td><td class="px-3 py-2 text-sm">zonder moeite</td><td class="px-3 py-2 text-sm">Dat is <strong>gemakkelijk</strong> gezegd.</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">stiekem</td><td class="px-3 py-2 text-sm">in het geheim</td><td class="px-3 py-2 text-sm"><strong>Stiekem</strong> pakte hij een koekje.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">samen</td><td class="px-3 py-2 text-sm">met elkaar</td><td class="px-3 py-2 text-sm">We lopen <strong>samen</strong>.</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">alleen</td><td class="px-3 py-2 text-sm">zonder anderen</td><td class="px-3 py-2 text-sm">Ik wandel <strong>alleen</strong>.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">voorzichtig</td><td class="px-3 py-2 text-sm">met beleid</td><td class="px-3 py-2 text-sm">Rijd <strong>voorzichtig</strong>.</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">duidelijk</td><td class="px-3 py-2 text-sm">goed verstaanbaar</td><td class="px-3 py-2 text-sm">Spreek <strong>duidelijk</strong>.</td></tr>
            </tbody>
          </table>
        </div>
        <p>💡 Veel bijwoorden van wijze lijken op bijvoeglijke naamwoorden. Het bijwoord blijft onverbogen (geen -e): <em>een <strong>snelle</strong> auto</em> (bijv. nw.) vs. <em>Hij rijdt <strong>snel</strong></em> (bijwoord).</p>
      `,
    },
    {
      title: "Bijwoorden van hoeveelheid en graad – hoe sterk of hoeveel? 📏",
      body: `
        <p>Deze bijwoorden geven intensiteit, mate of hoeveelheid aan. Ze beantwoorden de vraag <strong>hoeveel</strong> of <strong>in welke mate</strong>.</p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Bijwoord</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Betekenis</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Voorbeeldzin</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">heel</td><td class="px-3 py-2 text-sm">in hoge mate</td><td class="px-3 py-2 text-sm">Het is <strong>heel</strong> koud.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">erg</td><td class="px-3 py-2 text-sm">in hoge mate</td><td class="px-3 py-2 text-sm">Ik ben <strong>erg</strong> moe.</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">veel</td><td class="px-3 py-2 text-sm">grote hoeveelheid</td><td class="px-3 py-2 text-sm">Ik heb <strong>veel</strong> gegeten.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">weinig</td><td class="px-3 py-2 text-sm">kleine hoeveelheid</td><td class="px-3 py-2 text-sm">Er is <strong>weinig</strong> tijd.</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">genoeg</td><td class="px-3 py-2 text-sm">voldoende</td><td class="px-3 py-2 text-sm">We hebben <strong>genoeg</strong>.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">bijna</td><td class="px-3 py-2 text-sm">nagenoeg, op een haar na</td><td class="px-3 py-2 text-sm">Ik ben <strong>bijna</strong> klaar.</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">helemaal</td><td class="px-3 py-2 text-sm">volledig, totaal</td><td class="px-3 py-2 text-sm">Ik begrijp het <strong>helemaal</strong>.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">ongeveer</td><td class="px-3 py-2 text-sm">ruw geschat</td><td class="px-3 py-2 text-sm">Het kost <strong>ongeveer</strong> tien euro.</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">tamelijk</td><td class="px-3 py-2 text-sm">nogal, redelijk</td><td class="px-3 py-2 text-sm">Het is <strong>tamelijk</strong> druk.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">vrij</td><td class="px-3 py-2 text-sm">tamelijk, redelijk</td><td class="px-3 py-2 text-sm">Het is <strong>vrij</strong> groot.</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">behoorlijk</td><td class="px-3 py-2 text-sm">aanzienlijk</td><td class="px-3 py-2 text-sm">Het is <strong>behoorlijk</strong> warm.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">nauwelijks</td><td class="px-3 py-2 text-sm">bijna niet</td><td class="px-3 py-2 text-sm">Ik kon hem <strong>nauwelijks</strong> verstaan.</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">volkomen</td><td class="px-3 py-2 text-sm">helemaal, totaal</td><td class="px-3 py-2 text-sm">Dat is <strong>volkomen</strong> juist.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">enigszins</td><td class="px-3 py-2 text-sm">in zekere mate</td><td class="px-3 py-2 text-sm">Het is <strong>enigszins</strong> vreemd.</td></tr>
            </tbody>
          </table>
        </div>
        <p>Deze bijwoorden kunnen ook met een bijvoeglijk naamwoord of ander bijwoord gecombineerd worden: <em>heel erg snel, vrij gemakkelijk</em>.</p>
      `,
    },
    {
      title: "Bijwoorden van houding en modaliteit – hoe staat de spreker erin? 🧐",
      body: `
        <p>Deze bijwoorden geven een oordeel, gevoel of waarschijnlijkheid van de spreker weer. Ze antwoorden vaak op de vraag <strong>hoe zeker</strong> of <strong>met welke houding</strong>.</p>
        <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
          <table class="w-full border-collapse">
            <thead><tr class="!bg-indigo-600"><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Bijwoord</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Betekenis</th><th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Voorbeeldzin</th></tr></thead>
            <tbody>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">misschien</td><td class="px-3 py-2 text-sm">wellicht, mogelijk</td><td class="px-3 py-2 text-sm"><strong>Misschien</strong> komt hij nog.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">wellicht</td><td class="px-3 py-2 text-sm">misschien</td><td class="px-3 py-2 text-sm"><strong>Wellicht</strong> hebt u gelijk.</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">zeker</td><td class="px-3 py-2 text-sm">ongetwijfeld</td><td class="px-3 py-2 text-sm">Hij komt <strong>zeker</strong>.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">absoluut</td><td class="px-3 py-2 text-sm">volledig, zonder twijfel</td><td class="px-3 py-2 text-sm">Dat is <strong>absoluut</strong> waar.</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">helaas</td><td class="px-3 py-2 text-sm">jammer genoeg</td><td class="px-3 py-2 text-sm"><strong>Helaas</strong> kan ik niet komen.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">gelukkig</td><td class="px-3 py-2 text-sm">tot blijdschap</td><td class="px-3 py-2 text-sm"><strong>Gelukkig</strong> is alles goed.</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">natuurlijk</td><td class="px-3 py-2 text-sm">vanzelfsprekend</td><td class="px-3 py-2 text-sm"><strong>Natuurlijk</strong> mag dat.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">eigenlijk</td><td class="px-3 py-2 text-sm">in werkelijkheid</td><td class="px-3 py-2 text-sm"><strong>Eigenlijk</strong> had ik geen zin.</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">blijkbaar</td><td class="px-3 py-2 text-sm">naar het schijnt</td><td class="px-3 py-2 text-sm"><strong>Blijkbaar</strong> is hij verhuisd.</td></tr>
              <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm">schijnbaar</td><td class="px-3 py-2 text-sm">naar het uiterlijk</td><td class="px-3 py-2 text-sm"><strong>Schijnbaar</strong> was het niet waar.</td></tr>
              <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm">mogelijk</td><td class="px-3 py-2 text-sm">misschien</td><td class="px-3 py-2 text-sm"><strong>Mogelijk</strong> krijgen we regen.</td></tr>
            </tbody>
          </table>
        </div>
        <p>Ze staan vaak vooraan in de zin of direct na de persoonsvorm. <strong>Helaas</strong> en <strong>gelukkig</strong> geven een emotionele lading.</p>
      `,
    },
    {
      title: "De plaats van bijwoorden in de zin – perfecte zinsbouw 🏗️",
      body: `
        <p>De plek van het bijwoord kan de nadruk en zelfs de betekenis veranderen. Houd de volgende vuistregels aan:</p>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>Vooraan:</strong> om tijd, plaats of wijze extra nadruk te geven. <em>Gisteren ging ik naar de tandarts.</em></li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>Middenin:</strong> vaak direct na de persoonsvorm (eerste werkwoord). <em>Ik ben gisteren naar de tandarts geweest.</em></li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>Achteraan:</strong> als de bepaling minder nadruk heeft. <em>Ik heb hem gisteren gezien.</em></li>
        </ul>
        <p>Bij meerdere bijwoorden in één zin geldt meestal de volgorde: <strong>tijd – wijze – plaats</strong>. Voorbeeld: <em>Ik ben <strong>gisteren</strong> (tijd) <strong>snel</strong> (wijze) <strong>naar huis</strong> (plaats) gegaan.</em> Deze regel is niet onwrikbaar, maar helpt bij een natuurlijke zinsbouw.</p>
        <p>In bijzinnen (met 'dat', 'omdat', etc.) komen de bijwoorden vóór het werkwoordelijke gezegde: <em>...omdat ik <strong>gisteren</strong> thuis ben gebleven.</em></p>
      `,
    },
    {
      title: "Figuurlijk gebruik en vaste uitdrukkingen 🧠",
      body: `
        <p>Sommige bijwoorden komen voor in vaste combinaties die figuurlijk bedoeld zijn. Leer deze als geheel:</p>
        <ul class="my-2 space-y-1.5 pl-1">
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>Nu en dan</strong> = af en toe, soms. <em>Nu en dan belt hij even.</em></li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>Verder</strong> = daarnaast, bovendien. <em>Verder wil ik nog zeggen dat...</em></li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>Opeens</strong> = plotseling. <em>Opeens begon het te regenen.</em></li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>Ergens</strong> kan ook een onbepaald gevoel uitdrukken: <em>Ik voel me ergens niet lekker.</em></li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>Zo</strong> wijst een graad aan: <em>Het was zo koud!</em></li>
          <li class="ml-1.5 my-1 relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-400 dark:before:bg-indigo-500 text-slate-700 dark:text-slate-300"><strong>Helemaal</strong> kan ook 'geheel' betekenen: <em>Ik ben het er helemaal mee eens.</em></li>
        </ul>
      `,
    },
  ],
  rulesTable: [
    {
      rule: "Bijwoord vs. bijvoeglijk naamwoord",
      structure: "Een bijwoord zegt iets over een werkwoord, een ander bijwoord, of een bijvoeglijk naamwoord. Een bijvoeglijk naamwoord zegt iets over een zelfstandig naamwoord.",
      example: "**snel** lopen (bijwoord) – een **snelle** auto (bijvoeglijk naamwoord).",
      usage: "Bijwoorden blijven meestal onverbogen (geen -e), behalve in een paar vaste combinaties.",
    },
    {
      rule: "Volgorde van bijwoorden: tijd – wijze – plaats",
      structure: "Als er meerdere bijwoorden in één zin staan, zet je ze meestal in de volgorde: eerst tijd, dan wijze, dan plaats.",
      example: "Ik ben **gisteren** (tijd) **snel** (wijze) **naar huis** (plaats) gegaan.",
      usage: "Deze volgorde is niet verplicht, maar geeft een natuurlijke zinsbouw.",
    },
    {
      rule: "Plaats van het bijwoord: vooraan, middenin of achteraan",
      structure: "Zet het bijwoord vooraan voor extra nadruk, middenin (na de persoonsvorm) voor neutrale nadruk, of achteraan als het minder belangrijk is.",
      example: "**Gisteren** ging ik naar de tandarts. Ik ben **gisteren** naar de tandarts geweest. Ik ging **gisteren** naar de tandarts.",
      usage: "Experimenteer met de plaats om de klemtoon te verleggen.",
    },
    {
      rule: "Bijwoorden van hoeveelheid versterken bijvoeglijke naamwoorden",
      structure: "Woorden als **heel, erg, tamelijk, vrij, behoorlijk, enigszins** zet je vóór het bijvoeglijk naamwoord dat ze versterken of afzwakken.",
      example: "Het is **heel** koud, **tamelijk** duur, **vrij** gemakkelijk.",
      usage: "Gebruik niet 'heel veel' als je 'erg veel' bedoelt; 'heel' en 'erg' zijn inwisselbaar bij bijvoeglijke naamwoorden, maar 'heel' kan ook een zelfstandig naamwoord bepalen: 'de hele dag' (geen bijwoord).",
    },
    {
      rule: "Modaliteitsbijwoorden geven houding weer en staan vaak vooraan",
      structure: "Woorden als **misschien, helaas, gelukkig, natuurlijk, eigenlijk** zet je vaak aan het begin van de zin, of direct na de persoonsvorm, om de gevoelswaarde te uiten.",
      example: "**Misschien** komt hij. Ik ben **helaas** te laat.",
      usage: "Let op: bij inversie kan de volgorde wisselen, maar het bijwoord behoudt de nadruk.",
    },
  ],
  callouts: [
    { type: "remember", label: "Onthoud 1", text: "Bijwoorden van tijd: gisteren, vandaag, morgen, nu, straks, dadelijk, altijd, nooit, soms, vaak, vroeger, onlangs." },
    { type: "remember", label: "Onthoud 2", text: "Bijwoorden van plaats: hier, daar, binnen, buiten, boven, beneden, overal, nergens, ergens, vlakbij, ver, opzij, rechtdoor, links, rechts." },
    { type: "remember", label: "Onthoud 3", text: "Bijwoorden van wijze: graag, snel, langzaam, goed, slecht, hard, zacht, grappig, vriendelijk, stiekem, samen, alleen, voorzichtig." },
    { type: "remember", label: "Onthoud 4", text: "Bijwoorden van hoeveelheid/graad: heel, erg, veel, weinig, genoeg, bijna, helemaal, ongeveer, tamelijk, vrij, behoorlijk, nauwelijks." },
    { type: "remember", label: "Onthoud 5", text: "Modaliteitsbijwoorden: misschien, wellicht, zeker, absoluut, helaas, gelukkig, natuurlijk, eigenlijk, blijkbaar." },
    { type: "remember", label: "Onthoud 6", text: "Volgorde bij meerdere bijwoorden: tijd – wijze – plaats. Zet ze vooraan voor nadruk, of middenin voor normale zinnen." },
  ],
  commonMistakes: [
    { incorrect: "Ik wil graag een ijsje. (als je nadruk wilt op tijd, maar normaal is 'graag' middenin ook prima)", correct: "Graag wil ik een ijsje. (vooraan = extra nadruk op plezier)", explanation: "Vooraan zetten geeft meer klemtoon op het bijwoord." },
    { incorrect: "Ik ben geweest gisteren naar de markt.", correct: "Ik ben gisteren naar de markt geweest.", explanation: "Bijwoord van tijd liefst direct na de persoonsvorm of vooraan." },
    { incorrect: "Hij rijdt hard auto.", correct: "Hij rijdt hard.", explanation: "Hard is bijwoord; geen 'harde auto' hier." },
    { incorrect: "Altijd ik kom te laat.", correct: "Ik kom altijd te laat.", explanation: "Bijwoord niet vóór het onderwerp (tenzij sterke nadruk)." },
    { incorrect: "Gisterenavond (los)", correct: "Gisteravond of gisterenavond", explanation: "Aaneenschrijven." },
    { incorrect: "Het is heel veel warm.", correct: "Het is heel / erg warm.", explanation: "'Heel veel' is overdreven; gebruik 'heel' of 'erg' voor bijvoeglijke naamwoorden." },
    { incorrect: "Misschien ik kom.", correct: "Misschien kom ik.", explanation: "Na 'misschien' volgt inversie (persoonsvorm voor onderwerp)." },
    { incorrect: "Ik heb het helemaal begrijpen.", correct: "Ik begrijp het helemaal.", explanation: "'Helemaal' staat achteraan of na de persoonsvorm, niet voor de infinitief." },
  ],
  review: [
    "Bijwoorden van tijd: gisteren, vandaag, morgen, nu, straks, dadelijk, altijd, nooit, soms, vaak, eerst, daarna, vroeger, binnenkort, onlangs, onmiddellijk.",
    "Bijwoorden van plaats: hier, daar, binnen, buiten, boven, beneden, overal, nergens, ergens, vlakbij, ver, opzij, rechtdoor, links, rechts, omhoog, omlaag.",
    "Bijwoorden van wijze: graag, snel, langzaam, goed, slecht, hard, zacht, grappig, vriendelijk, gemakkelijk, stiekem, samen, alleen, voorzichtig, duidelijk.",
    "Bijwoorden van hoeveelheid/graad: heel, erg, veel, weinig, genoeg, bijna, helemaal, ongeveer, tamelijk, vrij, behoorlijk, nauwelijks, volkomen, enigszins.",
    "Modaliteitsbijwoorden: misschien, wellicht, zeker, absoluut, helaas, gelukkig, natuurlijk, eigenlijk, blijkbaar, schijnbaar, mogelijk.",
    "Volgorde bij meerdere: tijd – wijze – plaats.",
    "Bijwoord blijft onverbogen; bijvoeglijk naamwoord wel verbogen.",
    "Plaats in de zin: vooraan (nadruk), middenin (neutraal), achteraan (weinig nadruk).",
    "Na 'misschien', 'helaas' etc. vaak inversie.",
  ],
  qa: [
    {
      question: "Wat is het verschil tussen een bijwoord van tijd en een bijwoord van plaats? Geef van allebei een voorbeeldzin.",
      answer: "Een bijwoord van tijd zegt **wanneer** iets gebeurt, bijvoorbeeld: **Gisteren** ben ik naar de film geweest. Een bijwoord van plaats zegt **waar** iets gebeurt, bijvoorbeeld: Kom **hier** staan.",
    },
    {
      question: "Zet de bijwoorden in de juiste volgorde: 'Ik ben geweest naar het park gisteren snel.'",
      answer: "De correcte volgorde is: **Ik ben gisteren snel naar het park geweest.** Eerst tijd (gisteren), dan wijze (snel), dan plaats (naar het park).",
    },
    {
      question: "Waarom is 'hard rijden' een bijwoord en 'een harde auto' een bijvoeglijk naamwoord? Leg uit.",
      answer: "In 'hard rijden' zegt **hard** iets over het werkwoord *rijden*, dus het is een bijwoord (onverbogen). In 'een harde auto' zegt **harde** iets over het zelfstandig naamwoord *auto*, dus het is een bijvoeglijk naamwoord (met -e).",
    },
    {
      question: "Maak een zin met het modaliteitsbijwoord 'misschien' en leg uit waarom de woordvolgorde verandert.",
      answer: "**Misschien kom ik morgen.** Na 'misschien' volgt inversie: de persoonsvorm *kom* staat direct achter het bijwoord, voor het onderwerp *ik*. Dit is een vaste regel.",
    },
    {
      question: "Wat is het verschil tussen 'heel' en 'erg' als bijwoorden van hoeveelheid?",
      answer: "Ze betekenen vrijwel hetzelfde en kunnen vaak door elkaar gebruikt worden: *heel moe / erg moe*. 'Heel' kan ook 'de hele' betekenen (de hele dag), wat geen bijwoord is. In combinatie met 'veel' is alleen 'erg veel' gebruikelijk, niet 'heel veel'.",
    },
    {
      question: "Bedenk een zin met een bijwoord van tijd, wijze en plaats tegelijk. Gebruik 'gisteren', 'snel', 'naar boven'.",
      answer: "**Gisteren** ben ik **snel** **naar boven** gegaan. Volgorde: tijd – wijze – plaats.",
    },
    {
      question: "Leg uit waarom 'Hij heeft het helemaal begrijpen' fout is en verbeter de zin.",
      answer: "Het bijwoord 'helemaal' moet na de persoonsvorm of achteraan staan, niet voor de infinitief. Correct: **Hij begrijpt het helemaal.** Of: **Hij heeft het helemaal begrepen.**",
    },
  ],
};