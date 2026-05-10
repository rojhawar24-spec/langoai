import type { Question } from "./index";

export const spanishQuestions: Question[] = [
  // ---- VERBS ----
  { id: "es-v-1", topic: "Verbs", type: "multiple-choice", prompt: 'What does "comer" mean?', options: ["To drink", "To eat", "To sleep", "To run"], correctAnswer: "To eat", languageCode: "es" },
  { id: "es-v-2", topic: "Verbs", type: "multiple-choice", prompt: '"Yo ___ español." (I speak Spanish)', options: ["hablo", "hablas", "habla", "hablan"], correctAnswer: "hablo", languageCode: "es" },
  { id: "es-v-3", topic: "Verbs", type: "multiple-choice", prompt: 'What is the infinitive of "soy" (I am)?', options: ["Estar", "Ser", "Tener", "Hacer"], correctAnswer: "Ser", languageCode: "es" },
  { id: "es-v-4", topic: "Verbs", type: "multiple-choice", prompt: '"Nosotros ___ al cine." (We go to the cinema)', options: ["va", "vas", "vamos", "van"], correctAnswer: "vamos", languageCode: "es" },
  { id: "es-v-5", topic: "Verbs", type: "multiple-choice", prompt: 'What does "dormir" mean?', options: ["To eat", "To sleep", "To give", "To walk"], correctAnswer: "To sleep", languageCode: "es" },
  { id: "es-v-6", topic: "Verbs", type: "multiple-choice", prompt: '"Ella ___ bonita." (She is pretty — temporary)', options: ["soy", "eres", "es", "está"], correctAnswer: "es", languageCode: "es" },
  { id: "es-v-7", topic: "Verbs", type: "multiple-choice", prompt: '"Ellos ___ agua." (They drink water)', options: ["bebe", "bebes", "beben", "bebemos"], correctAnswer: "beben", languageCode: "es" },
  { id: "es-v-8", topic: "Verbs", type: "multiple-choice", prompt: 'What does "tener" mean?', options: ["To be", "To have", "To go", "To make"], correctAnswer: "To have", languageCode: "es" },

  // ---- NOUNS ----
  { id: "es-n-1", topic: "Nouns", type: "multiple-choice", prompt: '"La casa" means:', options: ["The house", "The car", "The school", "The face"], correctAnswer: "The house", languageCode: "es" },
  { id: "es-n-2", topic: "Nouns", type: "multiple-choice", prompt: '"El libro" is ___ gender.', options: ["Masculine", "Feminine"], correctAnswer: "Masculine", languageCode: "es" },
  { id: "es-n-3", topic: "Nouns", type: "multiple-choice", prompt: '"La escuela" means:', options: ["School", "Hospital", "Church", "Office"], correctAnswer: "School", languageCode: "es" },
  { id: "es-n-4", topic: "Nouns", type: "multiple-choice", prompt: 'The plural of "el pez" is:', options: ["pezes", "peces", "pezos", "pez"], correctAnswer: "peces", languageCode: "es" },
  { id: "es-n-5", topic: "Nouns", type: "multiple-choice", prompt: '"La amistad" means:', options: ["Love", "Friendship", "Family", "Kindness"], correctAnswer: "Friendship", languageCode: "es" },

  // ---- ADJECTIVES ----
  { id: "es-a-1", topic: "Adjectives", type: "multiple-choice", prompt: 'The feminine form of "grande" is:', options: ["grande", "granda", "grandi", "grandes"], correctAnswer: "grande", languageCode: "es" },
  { id: "es-a-2", topic: "Adjectives", type: "multiple-choice", prompt: '"Más ___ que" means "bigger than"', options: ["grande", "pequeño", "bueno", "malo"], correctAnswer: "grande", languageCode: "es" },
  { id: "es-a-3", topic: "Adjectives", type: "multiple-choice", prompt: 'What does "bonito/a" mean?', options: ["Ugly", "Pretty/Nice", "Big", "Old"], correctAnswer: "Pretty/Nice", languageCode: "es" },
  { id: "es-a-4", topic: "Adjectives", type: "multiple-choice", prompt: '"Es el ___ restaurante." (It\'s the best restaurant)', options: ["bueno", "mejor", "bien", "mejores"], correctAnswer: "mejor", languageCode: "es" },

  // ---- PHRASES ----
  { id: "es-p-1", topic: "Phrases", type: "multiple-choice", prompt: '"Por favor" means:', options: ["Thank you", "Please", "Sorry", "You're welcome"], correctAnswer: "Please", languageCode: "es" },
  { id: "es-p-2", topic: "Phrases", type: "multiple-choice", prompt: '"¿Cómo estás?" means:', options: ["How are you? (informal)", "Where are you?", "What time is it?", "Who are you?"], correctAnswer: "How are you? (informal)", languageCode: "es" },
  { id: "es-p-3", topic: "Phrases", type: "multiple-choice", prompt: '"No entiendo" means:', options: ["I don't know", "I don't understand", "I don't like it", "I can't"], correctAnswer: "I don't understand", languageCode: "es" },
  { id: "es-p-4", topic: "Phrases", type: "multiple-choice", prompt: '"De nada" is said after:', options: ["Someone says gracias", "Meeting someone", "Saying goodbye", "Ordering food"], correctAnswer: "Someone says gracias", languageCode: "es" },

  // ---- GREETINGS ----
  { id: "es-g-1", topic: "Greetings", type: "multiple-choice", prompt: '"Buenas noches" means:', options: ["Good morning", "Good evening/night", "Good afternoon", "Goodbye"], correctAnswer: "Good evening/night", languageCode: "es" },
  { id: "es-g-2", topic: "Greetings", type: "multiple-choice", prompt: 'Which is informal "hi" in Spanish?', options: ["Buenos días", "Hola", "Buenas tardes", "Adiós"], correctAnswer: "Hola", languageCode: "es" },
  { id: "es-g-3", topic: "Greetings", type: "multiple-choice", prompt: '"Mucho gusto" is said when:', options: ["Meeting someone for the first time", "Leaving a party", "Ordering food", "Asking for help"], correctAnswer: "Meeting someone for the first time", languageCode: "es" },

  // ---- NUMBERS ----
  { id: "es-num-1", topic: "Numbers", type: "multiple-choice", prompt: '"Veinte" is the number:', options: ["10", "20", "30", "12"], correctAnswer: "20", languageCode: "es" },
  { id: "es-num-2", topic: "Numbers", type: "multiple-choice", prompt: '"Cien" is the number:', options: ["10", "50", "100", "1000"], correctAnswer: "100", languageCode: "es" },
  { id: "es-num-3", topic: "Numbers", type: "multiple-choice", prompt: '"Primero/a" means:', options: ["First", "Last", "Next", "Only"], correctAnswer: "First", languageCode: "es" },

  // ---- FOOD & DRINK ----
  { id: "es-f-1", topic: "Food & Drink", type: "multiple-choice", prompt: '"El pan" means:', options: ["Bread", "Wine", "Cheese", "Meat"], correctAnswer: "Bread", languageCode: "es" },
  { id: "es-f-2", topic: "Food & Drink", type: "multiple-choice", prompt: '"El agua" is ___ gender in Spanish.', options: ["Masculine", "Feminine"], correctAnswer: "Feminine", languageCode: "es" },
  { id: "es-f-3", topic: "Food & Drink", type: "multiple-choice", prompt: '"La fruta" means:', options: ["Vegetable", "Fruit", "Meat", "Bread"], correctAnswer: "Fruit", languageCode: "es" },
];
