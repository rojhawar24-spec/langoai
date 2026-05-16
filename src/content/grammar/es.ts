import type { GrammarLesson } from "../types";

export const esGrammar: GrammarLesson[] = [
  /* ═══════════════════════════════════════════════════════════
   * es-gram-1 — Presente de Indicativo
   * ═══════════════════════════════════════════════════════════ */
  {
    id: "es-gram-1",
    title: "Presente de Indicativo (Present Tense)",
    level: 1,
    topic: "Verbs",
    anchorSectionId: "rules",

    overview:
      "**El Presente** se usa para hábitos, verdades generales y acciones que ocurren ahora. Hay tres grupos de verbos regulares (-AR, -ER, -IR) con sus propias terminaciones.",

    body: `## Presente de Indicativo
El presente describe verdades, habitos y acciones en progresso (ahora).
**Verbos regulares -AR (hablar = praten):**
- Yo hablo (Ik praat)
- Tú hablas (Jij praat — informeel)
- Él/Ella/Usted habla (Hij/Zij/U spreekt)
- Nosotros hablamos (Wij praten)
- Vosotros habláis (Jullie praten — Spanje)
- Ellos/Ellas/Ustedes hablan (Zij praten)
**Verbos regulares -ER (comer = eten):**
- Yo como, Tú comes, Él come
- Nosotros comemos, Vosotros coméis, Ellos comen
**Verbos regulares -IR (vivir = wonen):**
- Yo vivo, Tú vives, Él vive
- Nosotros vivimos, Vosotros vivís, Ellos viven`,

    rulesTable: [
      {
        rule:     "-AR verbs — all subjects",
        structure:"-o / -as / -a / -amos / -áis / -an",
        example:  "hablo, hablas, habla, hablamos, habláis, hablan",
        usage:    "Drop -ar ending; add new endings",
      },
      {
        rule:     "-ER verbs — all subjects",
        structure:"-o / -es / -e / -emos / -éis / -en",
        example:  "como, comes, come, comemos, coméis, comen",
        usage:    "Drop -er ending; add -ER present endings",
      },
      {
        rule:     "-IR verbs — all subjects",
        structure:"-o / -es / -e / -imos / -ís / -en",
        example:  "vivo, vives, vive, vivimos, vivís, viven",
        usage:    "Drop -ir ending; add -IR present endings",
      },
      {
        rule:     "-IR vs -ER difference",
        structure:"nosotros/vosotros/ellos: -imos / -ís / -en",
        example:  "vivimos (we live), comemos (we eat)",
        usage:    "Look at 'nosotros': -ER = -emos, -IR = -imos",
      },
      {
        rule:     "Irregular — ser (zijn)",
        structure:"soy / eres / es / somos / sois / son",
        example:  "Soy profesor, Ella es alta, Somos amigos",
        usage:    "Ser = essential/ permanent characteristics",
      },
      {
        rule:     "Irregular — estar (zijn)",
        structure:"estoy / estás / está / estamos / estáis / están",
        example:  "Estoy en casa, Ella está cansada",
        usage:    "Estar = temporary state or location",
      },
      {
        rule:     "Irregular — tener (hebben)",
        structure:"tengo / tienes / tiene / tenemos / tenéis / tienen",
        example:  "Tengo una casa, Ella tiene sed",
        usage:    "Tener = to have (possession)",
      },
      {
        rule:     "Negatief",
        structure:"no + werkwoord",
        example:  "Yo no hablo español (Ik spreek geen Spaans)",
        usage:    "Place 'no' before the verb",
      },
      {
        rule:     "Vraagzin",
        structure:"werkwoord + onderwerp + rest?",
        example:  "Hablas español? (Spreek je Spaans?)",
        usage:    "No need for auxiliary — just put the verb first",
      },
    ],

    conjugationTable: {
      header: "Persoon | HABLAR (-AR) | COMER (-ER) | VIVIR (-IR) | SER | ESTAR | TENER",
      rows: [
        ["yo (ik)",       "hablo",      "como",   "vivo",    "soy",   "estoy",  "tengo"],
        ["tú (jij)",      "hablas",     "comes",  "vives",   "eres",  "estás",  "tienes"],
        ["él/ella/usted", "habla",      "come",   "vive",    "es",    "está",   "tiene"],
        ["nosotros (wij)","hablamos",   "comemos","vivimos", "somos", "estamos","tenemos"],
        ["vosotros (jullie)","habláis", "coméis", "vivís",   "sois",  "estáis", "tenéis"],
        ["ellos/ellas/ustedes","hablan","comen",  "viven",   "son",   "están",  "tienen"],
      ],
    },

    timeExpressions: {
      header: "Tijdsuitdrukking | Regel | Voorbeeld",
      rows: [
        ["cada día / todas las semanas", "Gewoonte = Präsens", "Cada día estudio español."],
        ["siempre / a veces / nunca",     "Frequentie = Präsens", "Nunca como carne."],
        ["ahora / en este momento",       "Nu = Präsens",         "Ahora escribo un email."],
        ["los lunes / por la mañana",     "Vaste dag/tijdstip = Präsens", "Los lunes voy al gimnasio."],
        ["generalmente / normalmente",    "Gewoonte = Präsens",  "Normalmente hace sol."],
      ],
    },

    details: [
      {
        title: "1. Endings table by verb group",
        body: `## Terminazioni per gruppo
| Groep | Yo | Tú | Él | Nosotros | Vosotros | Ellos |
|-------|-----|-----|-----|---------|---------|-------|
| -AR | -o | -as | -a | -amos | -áis | -an |
| -ER | -o | -es | -e | -emos | -éis | -en |
| -IR | -o | -es | -e | -imos | -ís | -en |
\\> **Tip:** 'Nosotros' vorm verschilt per groep: -amos/-emos/-imos. Dit is het snelste manier om de groep te herkennen!`,
      },
      {
        title: "2. Ser vs Estar — beide 'zijn'",
        body: `## Twee werkwoorden voor 'zijn'
**SER** — permanente, essentiële eigenschappen:
- Soy profesor (Ik ben een leraar)
- Ella es de México (Zij is uit Mexico)
- Son las tres (Het is drie uur)
**ESTAR** — tijdelijke toestand of locatie:
- Estoy en casa (Ik ben thuis)
- Ella está cansada (Zij is moe)
- Está lloviendo (Het regent)
> 💡 **Ezelsbrug:** *"How you feel and where you are, always use the verb ESTAR!"*`,
      },
      {
        title: "3. Spelling changes in stem-changing verbs",
        body: `## Verandering van de stam
Sommige stamstammen veranderen in het Präsens:
| Type | Voorbeeld | Stamwijziging |
|------|-----------|--------------|
| e → ie | querer (willen) | quiero, quieres |
| o → ue | poder (kunnen) | puedo, puedes |
| e → i | seguir (volgen) | sigo, sigues |
| gue → go | llegar (aankomen) | llego, llegas |
> ⚠️ Wit: **Yo** en **Él/Ella/Usted** veranderen, maar niet **Nosotros/Vosotros**.`,
      },
    ],

    callouts: [
      {
        type:  "tip",
        label: "💡 Consejo",
        text:  "Zoals je de stam van een Spaans werkwoord afleidt, zo voeg je de uitgang toe: 'hablar' → 'habl-' + elke uitgang.",
      },
      {
        type:  "remember",
        label: "🔔 Recuerda",
        text:  "For 'nosotros': verschillende vorm per groep: -AR = hablamos, -ER = comemos, -IR = vivimos.",
      },
      {
        type:  "key",
        label: "🔑 Clave",
        text:  "Geen hulpwerk in Présent — het werkwoord gaat altijd eerst: 'Hablas Español?' (Spreek je Spaans?).",
      },
    ],

    commonMistakes: [
      {
        incorrect:  "Yo hablo español.",
        correct:    "Yo hablo español.",
        explanation: "Correct — pour 'yo' on utilise la forme en -o.",
      },
      {
        incorrect:  "Nosotros comemos juntos.",
        correct:    "Nosotros comemos juntos.",
        explanation: "Correct — 'nosotros' can be dropped since the ending already shows who you are.",
      },
      {
        incorrect:  "Ellos viven in Madrid.",
        correct:    "Ellos viven en Madrid.",
        explanation: "Correct — 'vivir' takes -en for ellos in -IR group.",
      },
    ],

    review: [
      "Presenter include: gewoonten, feiten, nu (niet werkwoord)",
      "-AR: amo-as-a-amos-áis-an; -ER: amo-es-e-emos-éis-en; -IR: amo-es-e-imos-ís-en",
      "Geen hulpwerk in Présents — werkwoord eerst",
      "Ser = permanent / essentieel; Estar = tijdelijk of locatie",
      "No negatie: ne ... pas → geen 'ne' in het Spaans: alleen 'no' + werkwoord",
    ],

    qa: [
      {
        question: "Welke uitgang voor 'vosotros' met -IR werkwoorden?",
        answer:  "-ís: 'vivir' → 'vosotros vivís'.",
      },
      {
        question: "'tener' voor 'él': welke vorm?",
        answer:  "tiene — 'tener' is onregelmatig: él tiene.",
      },
      {
        question: "Wat is het Présents verschil tussen 'ser' en 'estar'?",
        answer:  "Ser = permanent (identiteit, natuur), Estar = tijdelijk (toestand, locatie).",
      },
      {
        question: "Hoe maak je een vraag in het Présents?",
        answer:  "Zet het werkwoord eerst: 'Hablas español?' → 'Hablas Español?'",
      },
    ],

    exercises: [
      { question: "Yo ___ español.",             options: ["hablo","hablas","hablan","hablan"], answer: "hablo" },
      { question: "Tu ___ lejos.",               options: ["vivo","vives","vive","viven"], answer: "vives" },
      { question: "Ella ___ de España.",         options: ["soy","eres","es","son"], answer: "es" },
      { question: "Nosotros ___ en casa.",       options: ["está","estamos","estáis","están"], answer: "estamos" },
      { question: "Ellos ___ en Madrid ahora.",  options: ["vive","viven","vivimos","vive"], answer: "viven" },
      { question: "Yo ___ (tener) veinte años.",options: ["tengo","tienes","tiene","tenemos"], answer: "tengo" },
    ],
  },

  /* ═══════════════════════════════════════════════════════════
   * es-gram-2 — Ser vs Estar
   * ═══════════════════════════════════════════════════════════ */
  {
    id: "es-gram-2",
    title: "Ser vs Estar — Ambos Significan \"Ser\"",
    level: 1,
    topic: "Verbs",
    anchorSectionId: "rules",

    overview:
      "Spaans heeft **twee** werkwoorden die 'zijn' betekenen: **ser** en **estar**. Beide zijn onregelmatig en hebben verschillende gebruikscases. De ezelsbrug: *'How you feel and where you are = always use ESTAR!'*",

    body: `## Ser vs Estar
**SER (permanente toestanden):**
- Identiteit: *Soy profesor* (Ik ben leraar)
- Herkomst: *Ella es de México* (Zij is uit Mexico)
- Tijd/datum: *Son las tres* (Het is 3 uur)
- Eigenschappen: *Ella es guapa* (Zij is mooi)
**ESTAR (tijdelijke toestanden):**
- Locatie: *Estoy en casa* (Ik ben thuis)
- Gevoel/conditie: *Estoy cansado* (Ik ben moe)
- Actie op dit moment: *Está lloviendo* (Het regent)
\\> **Ezelsbrug:** *How you feel and where you are — always use ESTAR!*`,

    rulesTable: [
      {
        rule:     "SER — identiteit",
        structure:"[pron. subject] + ser (conjugated)",
        example:  "Soy Ana. Él es mi amigo.",
        usage:    "Wie je bent (permanent)",
      },
      {
        rule:     "SER — oorsprong",
        structure:"ser + de + plaats",
        example:  "Ella es de España (Zij is uit Spanje)",
        usage:    "Waar je vandaan komt — land of nationale identiteit",
      },
      {
        rule:     "SER — tijd en datum",
        structure:"ser + tijd/datum",
        example:  "Son las tres. Hoy es lunes.",
        usage:    "Tijdstippen, data, seizoenen",
      },
      {
        rule:     "ESTAR — locatie",
        structure:"[pron. subject] + estar + locatie",
        example:  "Estoy en Madrid. El libro está en la mesa.",
        usage:    "Plaats of locatie op dit moment",
      },
      {
        rule:     "ESTAR — gevoel/toestand",
        structure:"estar + bijvoeglijk naamwoord/staat",
        example:  "Estoy cansado. Ella está enferma.",
        usage:    "Gevoel of momentane toestand",
      },
      {
        rule:     "ESTAR — actie op dit moment (gerundio)",
        structure:"estar + gerundio (-ando / -iendo)",
        example:  "Estoy comiendo (Ik ben aan het eten)",
        usage:    "Huidige actie die nu gebeurt — zet -ando/-iendo toe",
      },
      {
        rule:     "No ser / estar — alternatieve betekenis",
        structure:"slechts betekenis verschil in spaans",
        example:  "Ella es lista (slim) vs Ella está lista (klaar)",
        usage:    "Woordkeuze verandert de betekenis",
      },
    ],

    conjugationTable: {
      header: "Persoon | SER | ESTAR",
      rows: [
        ["yo (ik)",      "soy",     "estoy"],
        ["tú (jij)",     "eres",    "estás"],
        ["él/ella/usted","es",      "está"],
        ["nosotros (wij)","somos",  "estamos"],
        ["vosotros (jullie)","sois","estáis"],
        ["ellos/ellas",   "son",     "están"],
      ],
    },

    timeExpressions: {
      header: "Signaalwoord / Uitdrukking | Met welk werkwoord? | Voorbeeld",
      rows: [
        ["de Madrid / de España",  "SER — oorsprong",   "Soy de España."],
        ["profesor / médico",      "SER — beroep",      "Es profesor."],
        ["las tres / lunes",       "SER — tijd",        "Son las tres."],
        ["en casa / en la playa",  "ESTAR — locatie",   "Estoy en la playa."],
        ["cansado / enfermo",      "ESTAR — gevoel",    "Estoy cansado."],
        ["ahora mismo / en este momento", "ESTAR — nu actie", "Estoy trabajando ahora."],
        ["lista / abierto",         "BEIDEN mogelijk",   "La puerta está abierta (ESTAR: momentane) / Él es abierto (SER: inherent)."],
      ],
    },

    details: [
      {
        title: "1. Ser: alle permanent cases",
        body: `## Tijd gebruik van SER
| Use case | Voorbeeld |
|---------|----------|
| Identiteit | Soy María. (Ik ben Maria.) |
| Oorsprong | Somos de Amsterdam. (Wij zijn uit Amsterdam.) |
| Beroep / nationaliteit | Él es médico. (Hij is arts.) |
| Tijd / datum | Es lunes. (Het is maandagag.) |
| Eigenschap (permanent) | El cielo es azul. (De lucht is blauw.) |
| Bezit | El libro es mío. (Het boek is van mij.)`,
      },
      {
        title: "2. Estar: alle temporary cases",
        body: `## Gebruik van ESTAR
| Use case | Voorbeeld |
|---------|----------|
| Locatie (nu) | Estoy en el parque. (Ik ben in het park.) |
| Gemoedstoestand | Estoy feliz. (Ik ben blij.) |
| Op dit moment: acties | Estoy estudiando. (Ik ben aan het studeren.) |
| Gezondheidstoestand | Está enfermo. (Hij is ziek.) |
| Resultaat van een actie | La ventana está cerrada. (Het raam is dicht.)`,
      },
      {
        title: "3. De ezelsbrug en veelgemaakte fouten",
        body: `## Hoe onthou je het verschil?
**Memoriseer deze ezelsbrug (onthoud dit!):**
> *"How you **feel** and where you **are** — always use the verb **ESTAR**!"*
**Veelgemaakte fouten:**
| Fout | Juist |
|------|-------|
| ❌ *Soy cansado.* | ✅ *Estoy cansado.* (Cansado = momentane toestand) |
| ❌ *Él es listo.* | ✅ *Él es inteligente.* (Listo = intelligent, niet klaar) |
| ❌ *Ella está de Madrid.* | ✅ *Ella es de Madrid.* (Oorsprong altijd ser)`,
      },
    ],

    callouts: [
      {
        type:  "key",
        label: "🔑 Clave",
        text:  "How you FEEL and where you ARE = ESTAR. Everything else = SER.",
      },
      {
        type:  "tip",
        label: "💡 Consejo",
        text:  "Listo can mean both 'clever' and 'ready': Él es listo (he is clever); Estoy listo (I am ready). Context matters!",
      },
      {
        type:  "remember",
        label: "🔔 Recuerda",
        text:  "Ser wordt gebruikt voor tijdstip (Son las tres), oorsprong (Soy de México) en beroep (Es profesor) — niet met estar!",
      },
    ],

    commonMistakes: [
      {
        incorrect:  "Soy enfermo.",
        correct:    "Estoy enfermo.",
        explanation: "'Enfermo' (ziek) is een tijdelijke toestand — gebruik 'estar', niet 'ser'.",
      },
      {
        incorrect:  "La sopa está buena.",
        correct:    "La sopa es buena.",
        explanation: "'La sopa is goed (in smaak)' is een permanente eigenschap — gebruik 'ser'.",
      },
      {
        incorrect:  "Él es listo → Hij is slim",
        correct:    "Él está listo → Hij is klaar (Diférente betekenis!)",
        explanation: "'Listo' betekent beide 'slim' (ser) en 'klaar' (estar) — kijk naar de context!",
      },
      {
        incorrect:  "Ella es en Madrid.",
        correct:    "Ella está en Madrid.",
        explanation: "Een locatie op dit moment = 'estar', niet 'ser'.",
      },
    ],

    review: [
      "Ser = permanent (identiteit, oorsprong, tijdstip, eigenschap)",
      "Estar = tijdelijk (locatie, gevoel, op dit moment actie)",
      "Ezelsbrug: How you FEEL and WHERE you ARE = ESTAR",
      "Sono dos las → Son dos las (tijd = ser)",
      "Estoy estudiando → gerundio (-ando/-iendo) na estar",
    ],

    qa: [
      {
        question: "Hé, 'Yo ___ cansado' — ser of estar?",
        answer:  "Estoy cansado — 'moe' is een tijdelijke toestand → ESTAR.",
      },
      {
        question: "SER of ESTAR: 'Ella ___ de Colombia.'",
        answer:  "Es — herkomst (oorsprong) = SER.",
      },
      {
        question: "Wat is het verschil? 'Él **es** abierto' vs 'La puerta **está** abierta'?",
        answer:  "Ser abierto = inherent open (persoonlijkheid); Estar abierta = momentane toestand (deur is open nu). Gelijk? Nee!",
      },
      {
        question: "Tijd: '___ (ser) las cuatro.'",
        answer:  "Son — tijdstippen gebruiken altijd 'ser': Son las tres = Het is drie uur.",
      },
    ],

    exercises: [
      { question: "Yo ___ de España.",           options: ["soy","estoy","es","está"], answer: "soy" },
      { question: "¿Dónde ___ el baño?",         options: ["es","está","soy","estoy"], answer: "está" },
      { question: "Ella ___ muy cansada hoy.",   options: ["es","está","soy","son"], answer: "está" },
      { question: "Este libro ___ interesante.", options: ["estás","es","está","eres"], answer: "es" },
      { question: "Nosotros ___ en la playa.",   options: ["somos","estamos","estáis","sois"], answer: "estamos" },
      { question: "Ellos ___ mis amigos.",       options: ["están","son","están","estamos"], answer: "son" },
    ],
  },
];
