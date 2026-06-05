import type { Question } from "./index";

export const frenchQuestions: Question[] = [
  // ---- VERBS ----
  { id: "fr-v-1", topic: "Verbs", type: "multiple-choice", prompt: 'What does "manger" mean?', options: ["To drink", "To eat", "To sleep", "To walk"], correctAnswer: "To eat", languageCode: "fr" },
  { id: "fr-v-2", topic: "Verbs", type: "multiple-choice", prompt: '"Je ___ français." (I speak French)', options: ["parle", "parles", "parlent", "parlez"], correctAnswer: "parle", languageCode: "fr" },
  { id: "fr-v-3", topic: "Verbs", type: "multiple-choice", prompt: 'What is the infinitive of "suis" (I am)?', options: ["Avoir", "Être", "Aller", "Faire"], correctAnswer: "Être", languageCode: "fr" },
  { id: "fr-v-4", topic: "Verbs", type: "multiple-choice", prompt: '"Nous ___ au cinéma." (We go to the cinema)', options: ["va", "vas", "allons", "allez"], correctAnswer: "allons", languageCode: "fr" },
  { id: "fr-v-5", topic: "Verbs", type: "multiple-choice", prompt: 'What does "dormir" mean?', options: ["To eat", "To give", "To sleep", "To talk"], correctAnswer: "To sleep", languageCode: "fr" },
  { id: "fr-v-6", topic: "Verbs", type: "multiple-choice", prompt: '"Elle ___ belle." (She is beautiful)', options: ["suis", "es", "est", "sommes"], correctAnswer: "est", languageCode: "fr" },
  { id: "fr-v-7", topic: "Verbs", type: "multiple-choice", prompt: '"Ils ___ du sport." (They do sports)', options: ["fait", "fais", "font", "faites"], correctAnswer: "font", languageCode: "fr" },
  { id: "fr-v-8", topic: "Verbs", type: "multiple-choice", prompt: 'What does "prendre" mean?', options: ["To take", "To give", "To learn", "To understand"], correctAnswer: "To take", languageCode: "fr" },

  // ---- NOUNS ----
  { id: "fr-n-1", topic: "Nouns", type: "multiple-choice", prompt: '"La maison" means:', options: ["The house", "The car", "The school", "The shop"], correctAnswer: "The house", languageCode: "fr" },
  { id: "fr-n-2", topic: "Nouns", type: "multiple-choice", prompt: '"Le livre" is masculine. What does it mean?', options: ["The book", "The table", "The chair", "The door"], correctAnswer: "The book", languageCode: "fr" },
  { id: "fr-n-3", topic: "Nouns", type: "multiple-choice", prompt: '"L\'école" is:', options: ["School", "Hospital", "Church", "Office"], correctAnswer: "School", languageCode: "fr" },
  { id: "fr-n-4", topic: "Nouns", type: "multiple-choice", prompt: 'The plural of "cheval" is:', options: ["chevals", "chevaux", "chevales", "cheval"], correctAnswer: "chevaux", languageCode: "fr" },
  { id: "fr-n-5", topic: "Nouns", type: "multiple-choice", prompt: '"L\'amitié" means:', options: ["Love", "Friendship", "Family", "Happiness"], correctAnswer: "Friendship", languageCode: "fr" },

  // ---- ADJECTIVES ----
  { id: "fr-a-1", topic: "Adjectives", type: "multiple-choice", prompt: 'The feminine form of "grand" is:', options: ["grande", "grands", "grandes", "grandi"], correctAnswer: "grande", languageCode: "fr" },
  { id: "fr-a-2", topic: "Adjectives", type: "multiple-choice", prompt: '"Plus ___ que" means "bigger than"', options: ["grand", "petit", "bon", "beau"], correctAnswer: "grand", languageCode: "fr" },
  { id: "fr-a-3", topic: "Adjectives", type: "multiple-choice", prompt: 'What does "joli(e)" mean?', options: ["Ugly", "Pretty", "Big", "Old"], correctAnswer: "Pretty", languageCode: "fr" },
  { id: "fr-a-4", topic: "Adjectives", type: "multiple-choice", prompt: '"C\'est le ___ restaurant." (It\'s the best restaurant)', options: ["bon", "meilleur", "mieux", "bien"], correctAnswer: "meilleur", languageCode: "fr" },

  // ---- PHRASES ----
  { id: "fr-p-1", topic: "Phrases", type: "multiple-choice", prompt: '"S\'il vous plaît" means:', options: ["Thank you", "Please", "Sorry", "You're welcome"], correctAnswer: "Please", languageCode: "fr" },
  { id: "fr-p-2", topic: "Phrases", type: "multiple-choice", prompt: '"Comment allez-vous?" means:', options: ["How are you? (formal)", "Where are you?", "What time is it?", "Who is it?"], correctAnswer: "How are you? (formal)", languageCode: "fr" },
  { id: "fr-p-3", topic: "Phrases", type: "multiple-choice", prompt: '"Je ne comprends pas" means:', options: ["I agree", "I don't understand", "I like it", "I'm leaving"], correctAnswer: "I don't understand", languageCode: "fr" },
  { id: "fr-p-4", topic: "Phrases", type: "multiple-choice", prompt: '"De rien" is said after:', options: ["Someone says thank you", "Meeting someone", "Saying goodbye", "Ordering food"], correctAnswer: "Someone says thank you", languageCode: "fr" },

  // ---- GREETINGS ----
  { id: "fr-g-1", topic: "Greetings", type: "multiple-choice", prompt: '"Bonsoir" means:', options: ["Good morning", "Good evening", "Good night", "Goodbye"], correctAnswer: "Good evening", languageCode: "fr" },
  { id: "fr-g-2", topic: "Greetings", type: "multiple-choice", prompt: 'Which is informal "hi" in French?', options: ["Bonjour", "Salut", "Bonsoir", "Adieu"], correctAnswer: "Salut", languageCode: "fr" },
  { id: "fr-g-3", topic: "Greetings", type: "multiple-choice", prompt: '"Enchanté(e)" is said when:', options: ["Meeting someone for the first time", "Leaving a party", "Ordering food", "Asking for help"], correctAnswer: "Meeting someone for the first time", languageCode: "fr" },

  // ---- NUMBERS ----
  { id: "fr-num-1", topic: "Numbers", type: "multiple-choice", prompt: '"Quatre-vingts" is the number:', options: ["60", "70", "80", "90"], correctAnswer: "80", languageCode: "fr" },
  { id: "fr-num-2", topic: "Numbers", type: "multiple-choice", prompt: '"Soixante-dix" is the number:', options: ["60", "70", "80", "90"], correctAnswer: "70", languageCode: "fr" },
  { id: "fr-num-3", topic: "Numbers", type: "multiple-choice", prompt: '"Premier" / "Première" means:', options: ["First", "Last", "Next", "Previous"], correctAnswer: "First", languageCode: "fr" },

  // ---- FOOD & DRINK ----
  { id: "fr-f-1", topic: "Food & Drink", type: "multiple-choice", prompt: '"Le pain" means:', options: ["Bread", "Wine", "Cheese", "Butter"], correctAnswer: "Bread", languageCode: "fr" },
  { id: "fr-f-2", topic: "Food & Drink", type: "multiple-choice", prompt: '"Le fromage" is very important in France:', options: ["Cheese", "Bread", "Wine", "Butter"], correctAnswer: "Cheese", languageCode: "fr" },
  { id: "fr-f-3", topic: "Food & Drink", type: "multiple-choice", prompt: '"L\'eau" means:', options: ["Wine", "Water", "Juice", "Milk"], correctAnswer: "Water", languageCode: "fr" },
];
