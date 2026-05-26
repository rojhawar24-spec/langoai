import type { GrammarLesson } from "../types";

export const esGrammar: GrammarLesson[] = [
  // ── Les 1: El Presente — verbos regulares ────────────────
  {
    id: "es-gram-1",
    title: "El Presente — Verbos Regulares",
    level: 1,
    topic: "Gramática",
    anchorSectionId: "rules",

    overview:
      "El **presente de indicativo** expresa acciones que ocurren ahora, de forma habitual o general. Los verbos regulares en español siguen una pauta predecible según terminen en **-ar**, **-er** o **-ir**.",

    body: `## El Presente de Indicativo

El presente se usa para acciones que pasan:
- **Ahora mismo**: Yo **como** una manzana.
- **Habitualmente**: Nosotros **vivimos** en Madrid.
- **De forma general**: El gato **duerme** mucho.

**Tres grupos de verbos regulares**

| Infinitivo | Ejemplo singular | Patrón | Yo | Tú | Él/Ella |
|------------|-----------------|--------|----|----|---------|
| **-ar** | *hablar* |士多 o → o | hablo | hablas | habla |
| **-er** | *comer* |士多 e → o | como | comes | come |
| **-ir** | *vivir* |士多 i → o | vivo | vives | vive |`,

    rulesTable: [
      {
        rule:     "Verbos -ar",
        structure:"raíz + o / as / a / amos / áis / an",
        example:  "hablar → hablo, hablas, habla, hablamos, habláis, hablan",
        usage:    "Grupo más numeroso de verbos regulares.",
      },
      {
        rule:     "Verbos -er",
        structure:"raíz + o / es / e / emos / éis / en",
        example:  "comer → como, comes, come, comemos, coméis, comen",
        usage:    "Segundo grupo más frecuente.",
      },
      {
        rule:     "Verbos -ir",
        structure:"raíz + o / es / e + imos / ís / en",
        example:  "vivir → vivo, vives, vive, vivimos, vivís, viven",
        usage:    "Tercer grupo; la única diferencia con -er es *nosotros*: -imos.",
      },
    ],

    conjugationTable: {
      header: "Verbo | yo | tú | él/ella/usted | nosotros | vosotros | ellos/ustedes",
      rows: [
        ["hablar (-ar)",  "hablo",  "hablas", "habla",       "hablamos",  "habláis",  "hablan"],
        ["comer  (-er)",  "como",   "comes",  "come",        "comemos",   "coméis",   "comen"],
        ["vivir  (-ir)",  "vivo",   "vives",  "vive",        "vivimos",   "vivís",    "viven"],
      ],
    },

    details: [
      {
        title: "El acento escrito: ¿dónde va?",
        body: `En el presente, tú llévate solo una cosa para acordarte:
si la vocal de la sílaba **tónica** (la que se pronuncia más fuerte) **no va en la última sílaba**, escribes el acento ortográfico (´).
Solo cuando la palabra termina en *n*, *s* o **vocal** debes mirar la posición de la sílaba tónica.

**Regla rápida (palabras que terminan en n / s / vocal):**
| Última sílaba | Acento | Ejemplo |
|---|---|---|
| Penúltima (antepenúltima si hay 4+) | agudo ´ | habl**á**is, com**é**mos |
| Áltima | sin acento | hablan, comamos |

> **Nota:** A diferencia del neerlandés, en español **todas las palabras** tienen una sílaba tónica — lo que cambia es dónde cae.`,
      },
    ],

    callouts: [
      {
        type:  "key",
        label: "Recuerda",
        text:  "Verbos -ir en *nosotros* llevan **-imos** (vivimos), mientras que -er también lleva **-emos** (comemos).",
      },
      {
        type:  "tip",
        label: "Pronunciación",
        text:  "Los verbos -er y -ir se diferencian solo por *nosotros* y *vosotros* en el presente. Escucha a nativos: notarás que el resto es igual.",
      },
    ],

    commonMistakes: [
      {
        incorrect: "Yo hablo*mos* español.",
        correct:   "Yo hablo español.",
        explanation: "'Hablamos' es la forma **nosotros**, no yo. La forma de **yo** para -ar es *hablo*.",
      },
      {
        incorrect: "Tú com*en*.",
        correct:   "Tú comes.",
        explanation: "Los verbos -er en segunda persona terminan en **-es**: *com**es**.",
      },
      {
        incorrect: "Él viv*en*.",
        correct:   "Él vive.",
        explanation: "La forma *ellos/ustedes* es *viven*. Para **él/ella**, -ir termina en **-e**: *v**e***.",
      },
    ],

    review: [
      "**-ar**: habl**o** / habl**as** / habl**a** / habl**amos** / habl**áis** / habl**an**",
      "**-er**: com**o** / com**es** / com**e** / com**emos** / com**éis** / com**en**",
      "**-ir**: viv**o** / viv**es** / viv**e** / viv**imos** / viv**ís** / viv**en**",
      "La única diferencia entre **-ir** y **-er** es *nosotros* (-imos vs -emos) y *vosotros* (-ís vs -éis).",
      "Todos los verbos regulares siguen su patrón sin excepciones.",
    ],

    qa: [
      {
        question: "Conjuga *hablar* para la persona 'yo'.",
        answer:   "Yo **hablo**.",
      },
      {
        question: "¿Cómo se dice 'ellos comen' en la primera persona del plural?",
        answer:   "**Nosotros comemos**.",
      },
      {
        question: "¿Cuál es la raíz de *vivir*?",
        answer:   "**viv-**.",
      },
      {
        question: "Completa: 'Tú ___ (vivir) en Barcelona.'",
        answer:   "Tú **vives** en Barcelona.",
      },
    ],

    exercises: [
      {
        question: "Elige la forma correcta de *hablar*: Yo ___ español.",
        options: ["hablo", "hablas", "hablan"],
        answer: "hablo",
      },
      {
        question: "Elige: Tú ___ (comer) mucha fruta.",
        options: ["como", "comes", "come"],
        answer: "comes",
      },
      {
        question: "Ellos ___ (vivir) en Valencia.",
        options: ["viven", "vives", "vivimos"],
        answer: "viven",
      },
    ],
  },

  // ── Les 2: Verbos irregulares esenciales ──────────────────
  {
    id: "es-gram-irreg",
    title: "Los Verbos Irregulares Esenciales",
    level: 1,
    topic: "Gramática",
    anchorSectionId: "rules",

    overview:
      "Los verbos **ser**, **estar**, **tener**, **ir** y **hacer** son irregulares — no siguen los patrones regulares y debes memorizarlos. Son los más usados en la vida cotidiana.",

    body: `## Verbos Irregulares Esenciales

Cuatro verbos son irregulares en el presente. No hay atajos: hay que memorizarlos.

| Verbo | yo | tú | él/ella | nosotros | vosotros | ellos |
|-------|----|----|---------|----------|----------|-------|
| **ser** | soy | eres | es | somos | sois | son |
| **estar** | estoy | estás | está | estamos | estáis | están |
| **tener** | tengo | tienes | tiene | tenemos | tenéis | tienen |
| **ir** | voy | vas | va | vamos | vais | van |
| **hacer** | hago | haces | hace | hacemos | hacéis | hacen |`,

    rulesTable: [
      {
        rule:     "ser vs estar",
        structure:"ser = esencia / origen; estar = estado / ubicación temporal",
        example:  "Soy español / Estoy contento. Madrid es grande / Estoy en Madrid.",
        usage:    "Ambos significan 'ser/estar' pero con usos totalmente distintos.",
      },
      {
        rule:     "Cambios irregulares — yo",
        structure:"hacer → hago, tener → tengo, ir → voy, ser → soy",
        example:  "Yo hago, yo tengo, yo voy, yo soy.",
        usage:    "Estas cuatro formas de yo son completamente diferentes de las regulares.",
      },
      {
        rule:     "hacer → haces / hace",
        structure:"c → zc en 'tú/él': haces, hace",
        example:  "Tú haces la tarea / Él hace el café.",
        usage:    "La c cambia a zc delante de e.",
      },
    ],

    conjugationTable: {
      header: "Verbo | yo | tú | él/ella/usted | nosotros | vosotros | ellos/ustedes",
      rows: [
        ["ser",       "soy",      "eres",     "es",         "somos",    "sois",     "son"],
        ["estar",     "estoy",    "estás",    "está",       "estamos",  "estáis",   "están"],
        ["tener",     "tengo",    "tienes",   "tiene",      "tenemos",  "tenéis",   "tienen"],
        ["ir",        "voy",      "vas",      "va",         "vamos",    "vais",     "van"],
        ["hacer",     "hago",     "haces",    "hace",       "hacemos",  "hacéis",   "hacen"],
      ],
    },

    details: [
      {
        title: "Ser vs Estar — la gran distinción",
        body: `Ambos verbos significan "to be" pero no son intercambiables.

**SER** → esencia, identidad, origen, profesión
- *Soy María* (identidad)
- *La manzana es roja* (característica permanente)
- *Soy de España* (origen)
- *Soy doctor* (profesión)

**ESTAR** → ubicación o estado temporal
- *Estoy en casa* (ubicación)
- *Estoy cansado* (estado emocional/físico temporal)
- *Está lloviendo* (estado climático actual)

**Regla mnemotécnica**: SER = permanent characteristics; ESTAR = temporary situations and locations.`,
      },
    ],

    callouts: [
      {
        type:  "remember",
        label: "¡Atención!",
        text:  "*Ir* y *ser* comparten la tercera persona plural: *ellos **son**/van*. Recuerda: ir = irse (mover), ser = esencia.",
      },
    ],

    commonMistakes: [
      {
        incorrect: "Yo soy cansado.",
        correct:   "Yo estoy cansado.",
        explanation: "El estado emocional/físico temporal usa **estar**, no ser.",
      },
      {
        incorrect: "Yo hacer la tarea.",
        correct:   "Yo hago la tarea.",
        explanation: "'Hago' es la forma irregular de yo para *hacer*. No se puede decir *hacer* sin conjugar.",
      },
      {
        incorrect: "Madrid es en España.",
        correct:   "Madrid está en España.",
        explanation: "Ubicación geográfica usa **estar**: *está en*.",
      },
    ],

    review: [
      "**ser**: soy / eres / es / somos / sois / son — origen, esencia, profesión",
      "**estar**: estoy / estás / está / estamos / estáis / están — ubicación y estado temporal",
      "**tener**: tengo / tienes / tiene / tenemos / tenéis / tienen — posesión, edad",
      "**ir**: voy / vas / va / vamos / vais / van — movimiento, futuro próximo",
      "**hacer**: hago / haces / hace / hacemos / hacéis / hacen — acción general",
    ],

    qa: [
      {
        question: "¿Verbo: 'Yo ___ (ser) profesor'?",
        answer:   "Yo **soy** profesor.",
      },
      {
        question: "¿Ubicación: 'La biblioteca ___ en la esquina'?",
        answer:   "La biblioteca **está** en la esquina.",
      },
      {
        question: "'Vosotros ___ (tener) tres libros' → forma correcta.",
        answer:   "Vosotros **tenéis** tres libros.",
      },
      {
        question: "¿Cómo se dice 'I am going to school'?",
        answer:   "**Voy al colegio** (ir + a + el = al).",
      },
    ],

    exercises: [
      {
        question: "Elige: Yo ___ (ser) de México.",
        options: ["soy", "eres", "son"],
        answer: "soy",
      },
      {
        question: "Elige: Ella ___ (estar) muy feliz.",
        options: ["está", "es", "soy"],
        answer: "está",
      },
      {
        question: "Elige: Nosotros ___ (ir) al parque.",
        options: ["vamos", "van", "vas"],
        answer: "vamos",
      },
    ],
  },

  // ── Les 3: Preguntas y Negación ───────────────────────────
  {
    id: "es-gram-questions",
    title: "Preguntas y Negación",
    level: 1,
    topic: "Gramática",
    anchorSectionId: "rules",

    overview:
      "En español, las preguntas se forman invirtiendo el orden del sujeto y el verbo, o añadiendo partículas interrogativas como **qué**, **dónde**, **cuándo** o **por qué**. La negación se construye con **no** antes del verbo.",

    body: `## Preguntas y Negación

### Preguntas sí/no
Invierte el orden: **Verbo + sujeto + …?**
- *¿Tienes tiempo?* — Sí, **tengo** tiempo. / No, **no tengo** tiempo.
- *¿Vienes mañana?* — **Vengo** mañana.

### Preguntas con palabras interrogativas
Añade la partícula interrogativa:
- **¿Qué?** → ¿**Qué** haces? / ¿**Qué** es eso?
- **¿Dónde?** → ¿**Dónde** vives?
- **¿Cuándo?** → ¿**Cuándo** llegas?
- **¿Por qué?** → ¿**Por qué** te vas?
- **¿Quién/Quiénes?** → ¿**Quién** llama? / ¿**Quiénes** son?

### Negación
Coloca **no** delante del verbo conjugado:
- *Tengo hambre.* → *No tengo hambre.*
- *Vivo aquí.* → *No vivo aquí.*
- *Quiero café.* → *No quiero café.*`,

    rulesTable: [
      {
        rule:     "Pregunta sí/no",
        structure:"¿Verbo + sujeto?",
        example:  "¿Vienes? → Sí, vengo. / No, no vengo.",
        usage:    "Para preguntas de sí o no sin partícula interrogativa.",
      },
      {
        rule:     "Palabras interrogativas",
        structure:"¿Qué / Dónde / Cuándo / Por qué / Quién + verbo?",
        example:  "¿Dónde vives? → Vivo en Madrid.",
        usage:    "Para preguntas abiertas que requieren información específica.",
      },
      {
        rule:     "Negación",
        structure:"No + verbo conjugado",
        example:  "Tengo prisa → No tengo prisa.",
        usage:    "Niega cualquier afirmación con 'no' delante del verbo.",
      },
    ],

    conjugationTable: {
      header: "Frase | Afirmativa | Negativa | Pregunta",
      rows: [
        ["Yo tengo hambre.",  "Tengo hambre.",   "No tengo hambre.",   "¿Tengo hambre? / ¿Tienes hambre?"],
        ["Yo vivo en Madrid.","Vivo en Madrid.",  "No vivo en Madrid.", "¿Vives en Madrid?"],
        ["Yo quiero café.",   "Quiero café.",     "No quiero café.",    "¿Quieres café?"],
      ],
    },

    details: [
      {
        title: "¿Cuándo usar cada palabra interrogativa?",
        body: `| Palabra | Pregunta | Respuesta esperada |
|---------|----------|-------------------|
| **qué** | ¿Qué haces? | Una actividad |
| **dónde** | ¿Dónde vives? | Un lugar |
| **cuándo** | ¿Cuándo llegas? | Una fecha/hora |
| **por qué** | ¿Por qué te vas? | Una razón |
| **quién** | ¿Quién llama? | Una persona |`,
      },
    ],

    callouts: [
      {
        type:  "key",
        label: "Recuerda",
        text:  "En español, la **afirmación y la negación** usan la misma estructura — solo cambia el **no** delante del verbo. Las preguntas se marcan con signos de apertura y cierre **¿ ?**, única en el mundo.",
      },
      {
        type:  "remember",
        label: "Signos de interrogación",
        text:  "El signo de apertura es **¿** (invertido) y el de cierre **?** (normal). Nunca olvides abrir con '¿' — es característico del español.",
      },
    ],

    commonMistakes: [
      {
        incorrect: "¿Tienes tiempo no?",
        correct:   "¿Tienes tiempo?",
        explanation: "Las preguntas no necesitan 'no' al final. El 'no' ya cambia la estructura a negación: *No tienes tiempo.*",
      },
      {
        incorrect: "Vivo no en Madrid.",
        correct:   "No vivo en Madrid.",
        explanation: "El **no** siempre va **antes del verbo conjugado**, nunca entre el verbo y el complemento.",
      },
    ],

    review: [
      "**Pregunta sí/no**: invierte verbo + sujeto: ¿*Vienes?* → *Vengo*.",
      "**Palabras interrogativas**: qué, dónde, cuándo, por qué, quién.",
      "**Negación**: **no** antes del verbo conjugado.",
      "Respuesta corta: *Sí, ___* / *No, no ___*.",
      "Usa **¿ ?** (ambos signos) en las preguntas.",
    ],

    qa: [
      { question: "Convierte: 'Vivo en Barcelona' → pregunta.", answer: "¿**Vives** en Barcelona?" },
      { question: "'No tengo frío' — ¿qué es la negación de?", answer: "*Tengo frío*." },
      { question: "¿Qué palabra usas para preguntar el LUGAR?", answer: "**Dónde**." },
    ],

    exercises: [
      {
        question: "Convierte a pregunta: Tú tienes un perro.",
        options: ["¿Tienes un perro?", "¿Tú tienes un perro?", "¿Tene un perro?"],
        answer: "¿Tienes un perro?",
      },
      {
        question: "Niega: 'Yo como carne.'",
        options: ["Yo com carne.", "No yo como carne.", "No como carne."],
        answer: "No como carne.",
      },
      {
        question: "¿Qué palabra falta? '¿___ vienes de Madrid?'",
        options: ["Cómo", "Cuándo", "Dónde"],
        answer: "Dónde",
      },
    ],
  },
];
