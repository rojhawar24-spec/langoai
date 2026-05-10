import type { Question } from "./index";

export const englishQuestions: Question[] = [
  // ---- VERBS ----
  { id: "en-v-1", topic: "Verbs", type: "multiple-choice", prompt: 'What does "to run" mean?', options: ["Marcher", "Courir", "Sauter", "Danser"], correctAnswer: "Courir", languageCode: "en" },
  { id: "en-v-2", topic: "Verbs", type: "multiple-choice", prompt: '"She ___ to school every day."', options: ["go", "goes", "going", "gone"], correctAnswer: "goes", languageCode: "en" },
  { id: "en-v-3", topic: "Verbs", type: "multiple-choice", prompt: 'What is the past tense of "eat"?', options: ["eated", "ate", "eaten", "eating"], correctAnswer: "ate", languageCode: "en" },
  { id: "en-v-4", topic: "Verbs", type: "multiple-choice", prompt: '"They ___ playing football right now."', options: ["is", "are", "am", "be"], correctAnswer: "are", languageCode: "en" },
  { id: "en-v-5", topic: "Verbs", type: "multiple-choice", prompt: 'What does "to write" mean?', options: ["Lire", "Écrire", "Parler", "Écouter"], correctAnswer: "Écrire", languageCode: "en" },
  { id: "en-v-6", topic: "Verbs", type: "multiple-choice", prompt: '"I have ___ that movie already."', options: ["saw", "see", "seen", "seeing"], correctAnswer: "seen", languageCode: "en" },
  { id: "en-v-7", topic: "Verbs", type: "multiple-choice", prompt: 'What is the opposite of "to give"?', options: ["Take", "Bring", "Send", "Offer"], correctAnswer: "Take", languageCode: "en" },
  { id: "en-v-8", topic: "Verbs", type: "multiple-choice", prompt: '"She ___ to music every evening."', options: ["listen", "listens", "listening", "listened"], correctAnswer: "listens", languageCode: "en" },

  // ---- NOUNS ----
  { id: "en-n-1", topic: "Nouns", type: "multiple-choice", prompt: 'What is the English word for "maison"?', options: ["House", "Home", "Building", "Room"], correctAnswer: "House", languageCode: "en" },
  { id: "en-n-2", topic: "Nouns", type: "multiple-choice", prompt: 'A place where you buy food is a ___', options: ["School", "Supermarket", "Hospital", "Library"], correctAnswer: "Supermarket", languageCode: "en" },
  { id: "en-n-3", topic: "Nouns", type: "multiple-choice", prompt: 'What is "friendship"?', options: ["A feeling", "A relationship", "An object", "A place"], correctAnswer: "A relationship", languageCode: "en" },
  { id: "en-n-4", topic: "Nouns", type: "multiple-choice", prompt: 'The plural of "child" is ___', options: ["childs", "childen", "children", "child"], correctAnswer: "children", languageCode: "en" },
  { id: "en-n-5", topic: "Nouns", type: "multiple-choice", prompt: '"Water" is a(n) ___ noun.', options: ["Countable", "Uncountable", "Proper", "Abstract"], correctAnswer: "Uncountable", languageCode: "en" },

  // ---- ADJECTIVES ----
  { id: "en-a-1", topic: "Adjectives", type: "multiple-choice", prompt: '"The opposite of "hot" is ___', options: ["Warm", "Cold", "Cool", "Mild"], correctAnswer: "Cold", languageCode: "en" },
  { id: "en-a-2", topic: "Adjectives", type: "multiple-choice", prompt: '"She is ___ than her sister."', options: ["tall", "taller", "tallest", "more tall"], correctAnswer: "taller", languageCode: "en" },
  { id: "en-a-3", topic: "Adjectives", type: "multiple-choice", prompt: 'What does "beautiful" mean?', options: ["Laid", "Beau/Belle", "Grand", "Petit"], correctAnswer: "Beau/Belle", languageCode: "en" },
  { id: "en-a-4", topic: "Adjectives", type: "multiple-choice", prompt: '"This is the ___ day of my life!"', options: ["good", "better", "best", "well"], correctAnswer: "best", languageCode: "en" },

  // ---- PHRASES ----
  { id: "en-p-1", topic: "Phrases", type: "multiple-choice", prompt: 'How do you say "Thank you very much"?', options: ["Merci", "Merci beaucoup", "Bonjour", "Au revoir"], correctAnswer: "Merci beaucoup", languageCode: "en" },
  { id: "en-p-2", topic: "Phrases", type: "multiple-choice", prompt: '"Nice to meet you" in English means:', options: ["A greeting when meeting someone new", "Goodbye", "How are you?", "See you later"], correctAnswer: "A greeting when meeting someone new", languageCode: "en" },
  { id: "en-p-3", topic: "Phrases", type: "multiple-choice", prompt: '"How are you?" — the typical response is:', options: ["I'm fine, thank you", "Goodbye", "Yes please", "You're welcome"], correctAnswer: "I'm fine, thank you", languageCode: "en" },
  { id: "en-p-4", topic: "Phrases", type: "multiple-choice", prompt: '"Excuse me, where is the bathroom?" is used to:', options: ["Order food", "Ask for directions", "Say goodbye", "Introduce yourself"], correctAnswer: "Ask for directions", languageCode: "en" },

  // ---- GREETINGS ----
  { id: "en-g-1", topic: "Greetings", type: "multiple-choice", prompt: 'What does "Bonjour" mean in English?', options: ["Goodbye", "Hello", "Thank you", "Please"], correctAnswer: "Hello", languageCode: "en" },
  { id: "en-g-2", topic: "Greetings", type: "multiple-choice", prompt: 'Which is a formal greeting?', options: ["Hey!", "Yo!", "Good morning", "What's up?"], correctAnswer: "Good morning", languageCode: "en" },
  { id: "en-g-3", topic: "Greetings", type: "multiple-choice", prompt: '"See you later" means:', options: ["À plus tard", "Bonjour", "Merci", "S'il vous plaît"], correctAnswer: "À plus tard", languageCode: "en" },

  // ---- NUMBERS ----
  { id: "en-num-1", topic: "Numbers", type: "multiple-choice", prompt: 'How do you write "twenty-five" in digits?', options: ["25", "52", "205", "15"], correctAnswer: "25", languageCode: "en" },
  { id: "en-num-2", topic: "Numbers", type: "multiple-choice", prompt: '"One hundred" is:', options: ["10", "100", "1000", "1"], correctAnswer: "100", languageCode: "en" },
  { id: "en-num-3", topic: "Numbers", type: "multiple-choice", prompt: 'What is "first" in numerical form?', options: ["1st", "2nd", "3rd", "4th"], correctAnswer: "1st", languageCode: "en" },

  // ---- FOOD & DRINK ----
  { id: "en-f-1", topic: "Food & Drink", type: "multiple-choice", prompt: '"Apple" is a type of ___', options: ["Vegetable", "Fruit", "Meat", "Drink"], correctAnswer: "Fruit", languageCode: "en" },
  { id: "en-f-2", topic: "Food & Drink", type: "multiple-choice", prompt: 'What do you drink in the morning?', options: ["Coffee", "Steak", "Bread", "Salad"], correctAnswer: "Coffee", languageCode: "en" },
  { id: "en-f-3", topic: "Food & Drink", type: "multiple-choice", prompt: '"Chicken" is a type of ___', options: ["Fish", "Meat", "Fruit", "Vegetable"], correctAnswer: "Meat", languageCode: "en" },
];
