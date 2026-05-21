import type { GrammarLesson } from "../types";

export const esGrammar: GrammarLesson[] = [
  /* ═══════════════════════════════════════════════════════════
   * es-uitspraak-1 — Alfabeto / Pronunciación
   * ═══════════════════════════════════════════════════════════ */
  {
    id: "es-uitspraak-1",
    title: "Alfabeto – 26 Letras: Guía completa de pronunciación",
    level: 1,
    topic: "Pronunciación",
    body: "Aprende la pronunciación del español con esta guía completa del alfabeto.",
    overview:
      "Aquí tienes una **guía completa** del alfabeto español con las 26 letras, su nombre, su sonido y ejemplos de palabras.",
    anchorSectionId: "alphabet",
    exercises: [],
    timeExpressions: {
      header: "Ltr | Spelling | Klank | Voorbeelden",
      rows: [
        ["A", "‘ah’", "<strong>a</strong> (kort, helder)", "agua, casa, amar"],
        ["B", "‘beh’", "<strong>b</strong> / zachte <strong>β</strong> (tussen klinkers)", "bueno, abuelo, vivir"],
        ["C", "‘seh’", "<strong>k</strong> vóór a/o/u; <strong>s</strong>/<strong>θ</strong> vóór e/i", "casa, cine, cena"],
        ["D", "‘deh’", "<strong>d</strong> / zachte <strong>ð</strong> (tussen klinkers)", "dedo, verdad, nada"],
        ["E", "‘eh’", "<strong>e</strong> (kort, helder, geen doffe e)", "estrella, café, mesa"],
        ["F", "‘efe’", "<strong>f</strong>", "fuego, difícil, café"],
        ["G", "‘heh’", "<strong>g</strong> vóór a/o/u; <strong>x</strong> vóór e/i", "gato, gente, agosto"],
        ["H", "‘ache’", "altijd stil (geen klank)", "hola, hora, ahora"],
        ["I", "‘ee’", "<strong>i</strong> (kort, helder)", "isla, vivo, cinco"],
        ["J", "‘jota’", "<strong>x</strong> (sterke keelklank)", "jamón, reloj, jardín"],
        ["K", "‘kah’", "<strong>k</strong> (alleen in leenwoorden)", "kilo, karate, koala"],
        ["L", "‘ele’", "<strong>l</strong>", "luna, malo, hablar"],
        ["M", "‘eme’", "<strong>m</strong>", "mano, amar, madre"],
        ["N", "‘ene’", "<strong>n</strong>", "noche, cana, año"],
        ["Ñ", "‘eñe’", "<strong>ñ</strong> (als *ny* in *canyon*)", "años, niño, español"],
        ["O", "‘oh’", "<strong>o</strong> (kort, helder, geen doffe o)", "oro, como, sol"],
        ["P", "‘peh’", "<strong>p</strong>", "padre, sopa, pensar"],
        ["Q", "‘kuh’", "<strong>k</strong> (altijd gevolgd door *ue* of *ui*)", "queso, qué, quiero"],
        ["R", "‘ere/erre’", "enkele <strong>ɾ</strong> / dubbele <strong>r</strong> (gerold)", "pero, perro, caro"],
        ["S", "‘ese’", "<strong>s</strong> (stemloos)", "sol, casa, semana"],
        ["T", "‘teh’", "<strong>t</strong> (zonder aspiratie)", "todo, pato, té"],
        ["U", "‘uh’", "<strong>u</strong> (kort, helder)", "uvas, tú, mucho"],
        ["V", "‘ve’ / ‘uve’", "<strong>b</strong> / zachte <strong>β</strong> (zelfde als b)", "vaca, vino, aventura"],
        ["W", "‘uve doble’", "<strong>w</strong> / <strong>b</strong> (leenwoorden)", "water, whisky, web"],
        ["X", "‘equis’", "<strong>ks</strong> / <strong>s</strong> / <strong>x</strong>", "exacto, México, xenofobia"],
        ["Y", "‘ye’ / ‘i griega’", "<strong>j</strong> (als *y* in *yes*) / <strong>i</strong>", "yo, rey, payaso"],
        ["Z", "‘zeta’", "<strong>s</strong> / <strong>θ</strong> (danklank)", "zapato, paz, azul"],
      ],
    },
    details: [
      {
        title: "Particularidades de la pronunciación española",
        body: `
          <h3 class="text-lg font-bold mt-4 mb-2">Letra Ñ</h3>
          <p>De <strong>ñ</strong> is een aparte letter in het Spaanse alfabet (niet gewoon een n met een streepje). Het klinkt als *ny* in het Engelse *canyon*: <em>años, niño, bañar</em>.</p>

          <h3 class="text-lg font-bold mt-6 mb-2">B / V</h3>
          <p>In het Spaans klinken <strong>b</strong> en <strong>v</strong> hetzelfde. Aan het begin van een woord of na een pauze klinken ze als een harde *b*. Tussen klinkers worden ze zacht (bilabiale fricatief). Voorbeelden: <em>bien, vino, haba, lava</em>.</p>

          <h3 class="text-lg font-bold mt-6 mb-2">C / Z</h3>
          <div class="overflow-x-auto rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm my-4">
            <table class="w-full border-collapse">
              <thead>
                <tr class="!bg-indigo-600">
                  <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Letter</th>
                  <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Klank (Spanje)</th>
                  <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Klank (Latijns-Amerika)</th>
                  <th class="text-white text-xs font-bold uppercase tracking-wider px-3 py-2 text-left">Voorbeeld</th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white dark:bg-slate-800/50"><td class="px-3 py-2 text-sm"><strong>c</strong> vóór e/i</td><td class="px-3 py-2 text-sm">θ (danklank)</td><td class="px-3 py-2 text-sm">s</td><td class="px-3 py-2 text-sm">cine, cena</td></tr>
                <tr class="bg-slate-50/60 dark:bg-slate-800/30"><td class="px-3 py-2 text-sm"><strong>z</strong></td><td class="px-3 py-2 text-sm">θ (danklank)</td><td class="px-3 py-2 text-sm">s</td><td class="px-3 py-2 text-sm">zapato, paz</td></tr>
              </tbody>
            </table>
          </div>
        `,
      },
    ],
    callouts: [
      {
        type: "remember",
        label: "Onthoud",
        text: "**B** en **V** klinken hetzelfde in het Spaans. **Ñ** is een aparte letter. **H** is altijd stil.",
      },
    ],
    commonMistakes: [
      { incorrect: "v als Engelse *v* uitspreken", correct: "**v** = b‑klank (vino klinkt als *bino*)", explanation: "B en V zijn identiek in het Spaans" },
      { incorrect: "h meespreken", correct: "**h** is altijd stil", explanation: "Hola klinkt als *ola*" },
      { incorrect: "r niet rollen", correct: "**r** wordt gerold met de tongpunt", explanation: "Pero vs perro is betekenisverschil" },
    ],
    review: [
      "27 letras (26 + Ñ)",
      "B = V (zelfde klank)",
      "H is altijd stil",
      "Ñ = ny-klank (canyon)",
      "J = sterke keelklank (x)",
      "R wordt gerold",
      "Q altijd gevolgd door ue of ui",
    ],
    qa: [
      { question: "Hoe spreek je *vino* uit?", answer: "**bino** (v = b-klank)." },
      { question: "Hoe klinkt de *ñ* in *años*?", answer: "**anyos** (ñ = ny)." },
      { question: "Wat is het verschil tussen *pero* en *perro*?", answer: "**pero** = enkele r, **perro** = dubbele gerolde r." },
      { question: "Hoe spreek je *jamón* uit?", answer: "**xamón** (j = sterke keelklank)." },
      { question: "Hoe spreek je *queso* uit?", answer: "**keso** (q = k, u is stil)." },
    ],
  },

  /* ═══════════════════════════════════════════════════════════
   * es-gram-1 — Presente de Indicativo
   * ═══════════════════════════════════════════════════════════ */
// ── Les 1 — Presente de Indicativo (OTT simpel) ──────────
{
  id: "es-gram-ott-simple",
  title: "Presente de Indicativo (OTT)",
  level: 1,
  topic: "Verbos",
  anchorSectionId: "rules",

  overview:
    "La **Presente** se usa para hablar de costumbres, hechos y lo que ocurre ahora. Los verbos españoles terminan en **-AR**, **-ER** o **-IR**: quita la terminación de la raíz para conjugarlos.",

  conceptCards: [
    {
      title: "Stam bepalen",
      structure: "infinitivo -ar/-er/-ir → stam",
      example: "hablar → habl-, comer → com-, vivir → viv-",
    },
    {
      title: "-AR uitgangen",
      structure: "-o / -as / -a / -amos / -áis / -an",
      example: "hablo · hablas · habla · hablamos · habláis · hablan",
    },
    {
      title: "-ER / -IR uitgangen",
      structure: "-o / -es / -e / -imos / -ídos / -en",
      example: "como · comes · come · comemos · coméis · comen",
    },
    {
      title: "Onregelmatig",
      structure: "ser / estar / tener / ir (uit je hoofd)",
      example: "soy · estoy · tengo · voy",
    },
  ],

  rulesTable: [
    {
      rule:     "Stam afleiden",
      structure:"infinitivo zonder -ar / -er / -ir",
      example:  "hablar → habl-, comer → com-, vivir → viv-",
      usage:    "Bepaal eerst de stam en het type (-AR, -ER, -IR)."
    },
    {
      rule:     "Uitgangen -AR",
      structure:"-o / -as / -a / -amos / -áis / -an",
      example:  "hablo, hablas, habla, hablamos, habláis, hablan",
      usage:    "Voor werkwoorden op -AR (grootste groep)."
    },
    {
      rule:     "Uitgangen -ER",
      structure:"-o / -es / -e / -emos / -éis / -en",
      example:  "como, comes, come, comemos, coméis, comen",
      usage:    "Voor werkwoorden op -ER."
    },
    {
      rule:     "Uitgangen -IR",
      structure:"-o / -es / -e / -imos / -ís / -en",
      example:  "vivo, vives, vive, vivimos, vivís, viven",
      usage:    "Voor werkwoorden op -IR (lijkt veel op -ER, alleen wij/jullie anders)."
    },
  ],

  conjugationTable: {
    header: "Persoon | HABLAR (-AR) | COMER (-ER) | VIVIR (-IR)",
    rows: [
      ["yo (ik)",            "hablo",    "como",    "vivo"],
      ["tú (jij)",           "hablas",   "comes",   "vives"],
      ["él/ella/usted",      "habla",    "come",    "vive"],
      ["nosotros (wij)",     "hablamos", "comemos", "vivimos"],
      ["vosotros (jullie)",  "habláis",  "coméis",  "vivís"],
      ["ellos/ellas/ustedes","hablan",   "comen",   "viven"],
    ]
  },

  details: [
    {
      title: "Belangrijke onregelmatige werkwoorden",
      body: `De volgende werkwoorden zijn onregelmatig en moet je uit je hoofd leren:

| Infinitief | yo | tú | él/ella | nosotros | vosotros | ellos |
|------------|----|----|---------|----------|----------|-------|
| **ser** (zijn) | soy | eres | es | somos | sois | son |
| **estar** (zijn, zich bevinden) | estoy | estás | está | estamos | estáis | están |
| **tener** (hebben) | tengo | tienes | tiene | tenemos | tenéis | tienen |
| **ir** (gaan) | voy | vas | va | vamos | vais | van |`
    },
  ],

  callouts: [
    {
      type:  "remember",
      label: "Onthoud",
      text:  "Spaans heeft **drie** groepen regelmatige werkwoorden: -AR, -ER, -IR. Leer eerst de uitgangen per groep."
    },
    {
      type:  "key",
      label: "Let op",
      text:  "**Ser** en **estar** betekenen allebei 'zijn', maar gebruik **ser** voor eigenschappen en **estar** voor toestanden/plaats."
    },
  ],

  review: [
    "-AR: -o, -as, -a, -amos, -áis, -an",
    "-ER: -o, -es, -e, -emos, -éis, -en",
    "-IR: -o, -es, -e, -imos, -ís, -en",
    "Ser (zijn): soy, eres, es, somos, sois, son",
    "Estar (zijn/plaats): estoy, estás, está, estamos, estáis, están",
  ],

  qa: [
    { question: "Wat is de stam van 'hablar'?", answer: "habl-" },
    { question: "Welke uitgang krijgt 'tú' bij -ER werkwoorden?", answer: "-es (comes)" },
    { question: "Hoe zeg je 'wij leven' (vivir)?", answer: "vivimos" },
    { question: "Vervoeg 'ser' voor 'yo'.", answer: "soy" },
  ],

  body: "—",
  exercises: [],
},];
