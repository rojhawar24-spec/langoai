import type { GrammarLesson } from "../types";

export const esGrammar: GrammarLesson[] = [
  {
    id: "es-gram-1", title: "Presente de Indicativo", level: 1, topic: "Verbs",
    body: `## Spanish Present Tense (Presente)

**Regular -AR verbs (hablar = to speak):**
- Yo hablo (I speak)
- Tú hablas (You speak - informal)
- Él/Ella/Usted habla (He/She/You formal speak)
- Nosotros hablamos (We speak)
- Vosotros habláis (You all speak - Spain)
- Ellos/Ellas/Ustedes hablan (They/You all speak)

**Regular -ER verbs (comer = to eat):**
- Yo como, Tú comes, Él come
- Nosotros comemos, Vosotros coméis, Ellos comen

**Regular -IR verbs (vivir = to live):**
- Yo vivo, Tú vives, Él vive
- Nosotros vivimos, Vosotros vivís, Ellos viven

**Key irregulars:**
- Ser: soy, eres, es, somos, sois, son
- Estar: estoy, estás, está, estamos, estáis, están
- Tener: tengo, tienes, tiene, tenemos, tenéis, tienen`,
    exercises: [
      { question: "Yo ___ español.", options: ["hablo","hablas","habla","hablan"], answer: "hablo" },
      { question: "Tú ___ en Madrid.", options: ["vivo","vives","vive","viven"], answer: "vives" },
      { question: "Ella ___ alta.", options: ["soy","eres","es","son"], answer: "es" },
    ],
  },
  {
    id: "es-gram-2", title: "Ser vs Estar", level: 1, topic: "Verbs",
    body: `## Ser vs Estar — Both Mean "To Be"

**SER** — permanent/essential characteristics:
- Identity: *Soy profesor* (I am a teacher)
- Origin: *Ella es de México* (She is from Mexico)
- Time/date: *Son las tres* (It's three o'clock)
- Possession: *El libro es mío* (The book is mine)

**ESTAR** — temporary states & location:
- Location: *Estoy en casa* (I am at home)
- Mood/condition: *Estoy cansado* (I am tired)
- Ongoing actions: *Está lloviendo* (It is raining)

**Memory trick:**  
*"How you feel and where you are, always use the verb ESTAR!"*

**Compare:**
- *Ella es guapa.* (She is beautiful — permanent trait)
- *Ella está guapa hoy.* (She looks beautiful today — temporary)`,
    exercises: [
      { question: "Yo ___ de España.", options: ["soy","estoy","es","está"], answer: "soy" },
      { question: "¿Dónde ___ el baño?", options: ["es","está","soy","estoy"], answer: "está" },
      { question: "Ella ___ muy cansada hoy.", options: ["es","está","soy","son"], answer: "está" },
    ],
  },
];
