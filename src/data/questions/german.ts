import type { Question } from "./index";

export const germanQuestions: Question[] = [
  // ---- VERBS ----
  { id: "de-v-1", topic: "Verbs", type: "multiple-choice", prompt: 'What does "essen" mean?', options: ["To drink", "To eat", "To sleep", "To be"], correctAnswer: "To eat", languageCode: "de" },
  { id: "de-v-2", topic: "Verbs", type: "multiple-choice", prompt: '"Ich ___ Deutsch." (I speak German)', options: ["spreche", "sprichst", "spricht", "sprechen"], correctAnswer: "spreche", languageCode: "de" },
  { id: "de-v-3", topic: "Verbs", type: "multiple-choice", prompt: 'What is the infinitive of "bin" (I am)?', options: ["Haben", "Sein", "Werden", "Gehen"], correctAnswer: "Sein", languageCode: "de" },
  { id: "de-v-4", topic: "Verbs", type: "multiple-choice", prompt: '"Wir ___ ins Kino." (We go to the cinema)', options: ["gehe", "gehst", "geht", "gehen"], correctAnswer: "gehen", languageCode: "de" },
  { id: "de-v-5", topic: "Verbs", type: "multiple-choice", prompt: 'What does "schlafen" mean?', options: ["To work", "To sleep", "To swim", "To write"], correctAnswer: "To sleep", languageCode: "de" },
  { id: "de-v-6", topic: "Verbs", type: "multiple-choice", prompt: '"Er ___ ein Buch." (He reads a book)', options: ["lese", "liest", "lest", "lesen"], correctAnswer: "liest", languageCode: "de" },
  { id: "de-v-7", topic: "Verbs", type: "multiple-choice", prompt: '"Sie ___ müde." (They are tired)', options: ["bin", "bist", "ist", "sind"], correctAnswer: "sind", languageCode: "de" },
  { id: "de-v-8", topic: "Verbs", type: "multiple-choice", prompt: 'What does "machen" mean?', options: ["To make/do", "To want", "To come", "To say"], correctAnswer: "To make/do", languageCode: "de" },

  // ---- NOUNS ----
  { id: "de-n-1", topic: "Nouns", type: "multiple-choice", prompt: '"Das Haus" means:', options: ["The house", "The mouse", "The tree", "The car"], correctAnswer: "The house", languageCode: "de" },
  { id: "de-n-2", topic: "Nouns", type: "multiple-choice", prompt: '"Der Hund" is a ___ noun.', options: ["Masculine", "Feminine", "Neuter", "Plural"], correctAnswer: "Masculine", languageCode: "de" },
  { id: "de-n-3", topic: "Nouns", type: "multiple-choice", prompt: '"Die Schule" means:', options: ["School", "Shop", "Street", "Church"], correctAnswer: "School", languageCode: "de" },
  { id: "de-n-4", topic: "Nouns", type: "multiple-choice", prompt: 'The plural of "das Kind" is:', options: ["Kinds", "Kinder", "Kindern", "Kindes"], correctAnswer: "Kinder", languageCode: "de" },
  { id: "de-n-5", topic: "Nouns", type: "multiple-choice", prompt: '"Die Freundschaft" means:', options: ["Friendship", "Family", "Freedom", "Happiness"], correctAnswer: "Friendship", languageCode: "de" },

  // ---- ADJECTIVES ----
  { id: "de-a-1", topic: "Adjectives", type: "multiple-choice", prompt: '"Das ___ Auto." (The fast car — nominative)', options: ["schnell", "schnelle", "schneller", "schnelles"], correctAnswer: "schnelle", languageCode: "de" },
  { id: "de-a-2", topic: "Adjectives", type: "multiple-choice", prompt: '"___ als" means "bigger than"', options: ["Groß", "Größer", "Am größten", "Große"], correctAnswer: "Größer", languageCode: "de" },
  { id: "de-a-3", topic: "Adjectives", type: "multiple-choice", prompt: 'What does "schön" mean?', options: ["Already", "Beautiful", "Fast", "Small"], correctAnswer: "Beautiful", languageCode: "de" },
  { id: "de-a-4", topic: "Adjectives", type: "multiple-choice", prompt: '"Das ist das ___ Restaurant." (It\'s the best restaurant)', options: ["gut", "besser", "beste", "besten"], correctAnswer: "beste", languageCode: "de" },

  // ---- PHRASES ----
  { id: "de-p-1", topic: "Phrases", type: "multiple-choice", prompt: '"Danke schön" means:', options: ["Thank you very much", "Please", "You're welcome", "Goodbye"], correctAnswer: "Thank you very much", languageCode: "de" },
  { id: "de-p-2", topic: "Phrases", type: "multiple-choice", prompt: '"Wie geht es Ihnen?" means:', options: ["How are you? (formal)", "Where do you live?", "What is your name?", "How old are you?"], correctAnswer: "How are you? (formal)", languageCode: "de" },
  { id: "de-p-3", topic: "Phrases", type: "multiple-choice", prompt: '"Ich verstehe nicht" means:', options: ["I don't understand", "I don't know", "I don't like it", "I can't"], correctAnswer: "I don't understand", languageCode: "de" },
  { id: "de-p-4", topic: "Phrases", type: "multiple-choice", prompt: '"Bitte schön" can mean:', options: ["You're welcome / Here you go", "Please", "Sorry", "Excuse me"], correctAnswer: "You're welcome / Here you go", languageCode: "de" },

  // ---- GREETINGS ----
  { id: "de-g-1", topic: "Greetings", type: "multiple-choice", prompt: '"Guten Morgen" means:', options: ["Good evening", "Good morning", "Good night", "Good afternoon"], correctAnswer: "Good morning", languageCode: "de" },
  { id: "de-g-2", topic: "Greetings", type: "multiple-choice", prompt: 'Which is informal "hi" in German?', options: ["Guten Tag", "Hallo", "Auf Wiedersehen", "Gute Nacht"], correctAnswer: "Hallo", languageCode: "de" },
  { id: "de-g-3", topic: "Greetings", type: "multiple-choice", prompt: '"Tschüss" means:', options: ["Hello", "Bye (informal)", "Please", "Sorry"], correctAnswer: "Bye (informal)", languageCode: "de" },

  // ---- NUMBERS ----
  { id: "de-num-1", topic: "Numbers", type: "multiple-choice", prompt: '"Zwanzig" is the number:', options: ["12", "20", "30", "2"], correctAnswer: "20", languageCode: "de" },
  { id: "de-num-2", topic: "Numbers", type: "multiple-choice", prompt: '"Einundzwanzig" is:', options: ["11", "21", "31", "12"], correctAnswer: "21", languageCode: "de" },
  { id: "de-num-3", topic: "Numbers", type: "multiple-choice", prompt: '"Erste" means:', options: ["First", "Last", "Next", "Only"], correctAnswer: "First", languageCode: "de" },

  // ---- FOOD & DRINK ----
  { id: "de-f-1", topic: "Food & Drink", type: "multiple-choice", prompt: '"Das Brot" means:', options: ["Bread", "Butter", "Cheese", "Milk"], correctAnswer: "Bread", languageCode: "de" },
  { id: "de-f-2", topic: "Food & Drink", type: "multiple-choice", prompt: '"Das Bier" is very famous in Germany:', options: ["Beer", "Wine", "Water", "Juice"], correctAnswer: "Beer", languageCode: "de" },
  { id: "de-f-3", topic: "Food & Drink", type: "multiple-choice", prompt: '"Der Kaffee" means:', options: ["Tea", "Coffee", "Milk", "Hot chocolate"], correctAnswer: "Coffee", languageCode: "de" },
];
