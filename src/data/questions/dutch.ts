import type { Question } from "./index";

export const dutchQuestions: Question[] = [
  // ---- VERBS ----
  { id: "nl-v-1", topic: "Verbs", type: "multiple-choice", prompt: 'What does "lopen" mean?', options: ["To walk", "To run", "To swim", "To fly"], correctAnswer: "To walk", languageCode: "nl" },
  { id: "nl-v-2", topic: "Verbs", type: "multiple-choice", prompt: '"Ik ___ een boek." (I read a book)', options: ["lees", "leest", "lezen", "las"], correctAnswer: "lees", languageCode: "nl" },
  { id: "nl-v-3", topic: "Verbs", type: "multiple-choice", prompt: 'What is the past tense of "zijn" (to be) for "ik"?', options: ["ben", "was", "waren", "is"], correctAnswer: "was", languageCode: "nl" },
  { id: "nl-v-4", topic: "Verbs", type: "multiple-choice", prompt: '"Wij ___ naar school." (We go to school)', options: ["ga", "gaat", "gaan", "ging"], correctAnswer: "gaan", languageCode: "nl" },
  { id: "nl-v-5", topic: "Verbs", type: "multiple-choice", prompt: 'What does "eten" mean?', options: ["To drink", "To eat", "To sleep", "To work"], correctAnswer: "To eat", languageCode: "nl" },
  { id: "nl-v-6", topic: "Verbs", type: "multiple-choice", prompt: '"Hij ___ Nederlands." (He speaks Dutch)', options: ["spreek", "spreekt", "spreken", "sprak"], correctAnswer: "spreekt", languageCode: "nl" },
  { id: "nl-v-7", topic: "Verbs", type: "multiple-choice", prompt: 'What does "slapen" mean?', options: ["To eat", "To walk", "To sleep", "To talk"], correctAnswer: "To sleep", languageCode: "nl" },
  { id: "nl-v-8", topic: "Verbs", type: "multiple-choice", prompt: '"Jij ___ mooi." (You are beautiful)', options: ["ben", "bent", "is", "zijn"], correctAnswer: "bent", languageCode: "nl" },

  // ---- NOUNS ----
  { id: "nl-n-1", topic: "Nouns", type: "multiple-choice", prompt: 'What is "huis" in English?', options: ["House", "Mouse", "Horse", "Home"], correctAnswer: "House", languageCode: "nl" },
  { id: "nl-n-2", topic: "Nouns", type: "multiple-choice", prompt: '"De ___ is groot." (The city is big)', options: ["stad", "dorp", "land", "straat"], correctAnswer: "stad", languageCode: "nl" },
  { id: "nl-n-3", topic: "Nouns", type: "multiple-choice", prompt: 'What is "boek" in English?', options: ["Book", "Box", "Back", "Bike"], correctAnswer: "Book", languageCode: "nl" },
  { id: "nl-n-4", topic: "Nouns", type: "multiple-choice", prompt: 'The plural of "kind" is ___', options: ["kinden", "kinderen", "kinds", "kindjes"], correctAnswer: "kinderen", languageCode: "nl" },
  { id: "nl-n-5", topic: "Nouns", type: "multiple-choice", prompt: '"Water" is ___ in Dutch', options: ["de water", "het water", "een water", "wateren"], correctAnswer: "het water", languageCode: "nl" },

  // ---- ADJECTIVES ----
  { id: "nl-a-1", topic: "Adjectives", type: "multiple-choice", prompt: '"De ___ auto." (The fast car)', options: ["snel", "snelle", "snelst", "sneller"], correctAnswer: "snelle", languageCode: "nl" },
  { id: "nl-a-2", topic: "Adjectives", type: "multiple-choice", prompt: '"Het huis is ___ dan dat huis." (bigger)', options: ["groot", "grote", "groter", "grootst"], correctAnswer: "groter", languageCode: "nl" },
  { id: "nl-a-3", topic: "Adjectives", type: "multiple-choice", prompt: 'What does "mooi" mean?', options: ["Ugly", "Beautiful", "Big", "Small"], correctAnswer: "Beautiful", languageCode: "nl" },
  { id: "nl-a-4", topic: "Adjectives", type: "multiple-choice", prompt: '"Een ___ dag." (A nice day)', options: ["leuk", "leuke", "leuker", "leukst"], correctAnswer: "leuke", languageCode: "nl" },

  // ---- PHRASES ----
  { id: "nl-p-1", topic: "Phrases", type: "multiple-choice", prompt: 'How do you say "Thank you" in Dutch?', options: ["Dank je wel", "Alsjeblieft", "Tot ziens", "Goedemorgen"], correctAnswer: "Dank je wel", languageCode: "nl" },
  { id: "nl-p-2", topic: "Phrases", type: "multiple-choice", prompt: '"Hoe gaat het?" means:', options: ["How are you?", "Where are you?", "What is that?", "Who are you?"], correctAnswer: "How are you?", languageCode: "nl" },
  { id: "nl-p-3", topic: "Phrases", type: "multiple-choice", prompt: '"Tot ziens" means:', options: ["Hello", "See you later", "Thank you", "Please"], correctAnswer: "See you later", languageCode: "nl" },
  { id: "nl-p-4", topic: "Phrases", type: "multiple-choice", prompt: '"Alstublieft" can mean:', options: ["Please / Here you go", "Goodbye", "Sorry", "Never mind"], correctAnswer: "Please / Here you go", languageCode: "nl" },

  // ---- GREETINGS ----
  { id: "nl-g-1", topic: "Greetings", type: "multiple-choice", prompt: '"Goedemorgen" means:', options: ["Good evening", "Good morning", "Good night", "Goodbye"], correctAnswer: "Good morning", languageCode: "nl" },
  { id: "nl-g-2", topic: "Greetings", type: "multiple-choice", prompt: 'Which is informal "hello" in Dutch?', options: ["Hallo", "Goedendag", "Hoi", "Both Hallo and Hoi"], correctAnswer: "Both Hallo and Hoi", languageCode: "nl" },
  { id: "nl-g-3", topic: "Greetings", type: "multiple-choice", prompt: '"Welterusten" means:', options: ["Good morning", "Good night (sleep well)", "Goodbye", "Welcome"], correctAnswer: "Good night (sleep well)", languageCode: "nl" },

  // ---- NUMBERS ----
  { id: "nl-num-1", topic: "Numbers", type: "multiple-choice", prompt: '"Tien" is the number:', options: ["5", "8", "10", "12"], correctAnswer: "10", languageCode: "nl" },
  { id: "nl-num-2", topic: "Numbers", type: "multiple-choice", prompt: '"Vijfentwintig" is:', options: ["15", "25", "35", "55"], correctAnswer: "25", languageCode: "nl" },
  { id: "nl-num-3", topic: "Numbers", type: "multiple-choice", prompt: '"Eerste" means:', options: ["First", "Second", "Third", "Last"], correctAnswer: "First", languageCode: "nl" },

  // ---- FOOD & DRINK ----
  { id: "nl-f-1", topic: "Food & Drink", type: "multiple-choice", prompt: '"Appel" is a(n):', options: ["Vegetable", "Fruit", "Meat", "Drink"], correctAnswer: "Fruit", languageCode: "nl" },
  { id: "nl-f-2", topic: "Food & Drink", type: "multiple-choice", prompt: '"Brood" means:', options: ["Bread", "Butter", "Cheese", "Milk"], correctAnswer: "Bread", languageCode: "nl" },
  { id: "nl-f-3", topic: "Food & Drink", type: "multiple-choice", prompt: '"Kaas" is very popular in the Netherlands:', options: ["Cheese", "Fish", "Chocolate", "Beer"], correctAnswer: "Cheese", languageCode: "nl" },
];
