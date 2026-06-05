import type { WOTDWord } from "@/utils/wotd";

//
// Word of the Day — Master word list.
// Admin: just add new words below. The system handles everything else.
//

export const ALL_WOTD_WORDS: WOTDWord[] = [
  // ── Dutch ──
  { id: "nl-appel", languageCode: "nl", word: "de appel", emoji: "🍎", hint: "Rond, rood of groen, groeit aan een boom", translation: "the apple" },
  { id: "nl-lopen", languageCode: "nl", word: "lopen", emoji: "🚶", hint: "Je doet dit met je benen, niet rennen", translation: "to walk" },
  { id: "nl-huis", languageCode: "nl", word: "het huis", emoji: "🏠", hint: "Hier woon je in", translation: "the house" },
  { id: "nl-boek", languageCode: "nl", word: "het boek", emoji: "📖", hint: "Je leest dit, heeft bladzijden", translation: "the book" },
  { id: "nl-water", languageCode: "nl", word: "het water", emoji: "💧", hint: "Nodig om te drinken, nat", translation: "the water" },
  { id: "nl-eten", languageCode: "nl", word: "eten", emoji: "🍽️", hint: "Doe je 3x per dag, met mes en vork", translation: "to eat" },
  { id: "nl-slapen", languageCode: "nl", word: "slapen", emoji: "😴", hint: "Doe je 's nachts in bed", translation: "to sleep" },
  { id: "nl-mooi", languageCode: "nl", word: "mooi", emoji: "✨", hint: "Als je iets heel leuk vindt om te zien", translation: "beautiful" },
  { id: "nl-hond", languageCode: "nl", word: "de hond", emoji: "🐕", hint: "Beste vriend van de mens, blaft", translation: "the dog" },
  { id: "nl-kat", languageCode: "nl", word: "de kat", emoji: "🐈", hint: "Miauwt, vangt muizen, onafhankelijk", translation: "the cat" },
  { id: "nl-zon", languageCode: "nl", word: "de zon", emoji: "☀️", hint: "Schijnt overdag, geeft warmte en licht", translation: "the sun" },
  { id: "nl-maan", languageCode: "nl", word: "de maan", emoji: "🌙", hint: "Zie je 's nachts in de lucht", translation: "the moon" },

  // ── English ──
  { id: "en-apple", languageCode: "en", word: "apple", emoji: "🍎", hint: "Round, red or green, grows on trees", translation: "de appel" },
  { id: "en-walk", languageCode: "en", word: "to walk", emoji: "🚶", hint: "You do this with your legs, not running", translation: "lopen" },
  { id: "en-house", languageCode: "en", word: "house", emoji: "🏠", hint: "Where you live", translation: "het huis" },
  { id: "en-book", languageCode: "en", word: "book", emoji: "📖", hint: "You read this, it has pages", translation: "het boek" },
  { id: "en-water", languageCode: "en", word: "water", emoji: "💧", hint: "Needed to drink, wet", translation: "het water" },
  { id: "en-eat", languageCode: "en", word: "to eat", emoji: "🍽️", hint: "You do this 3x a day, with fork and knife", translation: "eten" },
  { id: "en-sleep", languageCode: "en", word: "to sleep", emoji: "😴", hint: "You do this at night in bed", translation: "slapen" },
  { id: "en-beautiful", languageCode: "en", word: "beautiful", emoji: "✨", hint: "When you really like how something looks", translation: "mooi" },
  { id: "en-dog", languageCode: "en", word: "dog", emoji: "🐕", hint: "Man's best friend, barks", translation: "de hond" },
  { id: "en-cat", languageCode: "en", word: "cat", emoji: "🐈", hint: "Meows, catches mice, independent", translation: "de kat" },
  { id: "en-sun", languageCode: "en", word: "sun", emoji: "☀️", hint: "Shines during the day, gives warmth and light", translation: "de zon" },
  { id: "en-moon", languageCode: "en", word: "moon", emoji: "🌙", hint: "You see this at night in the sky", translation: "de maan" },

  // ── French ──
  { id: "fr-pomme", languageCode: "fr", word: "la pomme", emoji: "🍎", hint: "Rond, rouge ou vert, pousse sur un arbre", translation: "the apple" },
  { id: "fr-marcher", languageCode: "fr", word: "marcher", emoji: "🚶", hint: "Tu fais ça avec tes jambes, pas courir", translation: "to walk" },
  { id: "fr-maison", languageCode: "fr", word: "la maison", emoji: "🏠", hint: "Là où tu habites", translation: "the house" },
  { id: "fr-livre", languageCode: "fr", word: "le livre", emoji: "📖", hint: "Tu lis ça, il a des pages", translation: "the book" },
  { id: "fr-eau", languageCode: "fr", word: "l'eau", emoji: "💧", hint: "Nécessaire pour boire, mouillé", translation: "the water" },
  { id: "fr-manger", languageCode: "fr", word: "manger", emoji: "🍽️", hint: "Tu fais ça 3x par jour", translation: "to eat" },
  { id: "fr-dormir", languageCode: "fr", word: "dormir", emoji: "😴", hint: "Tu fais ça la nuit dans ton lit", translation: "to sleep" },
  { id: "fr-beau", languageCode: "fr", word: "beau/belle", emoji: "✨", hint: "Quand tu aimes vraiment comment ça a l'air", translation: "beautiful" },
  { id: "fr-chien", languageCode: "fr", word: "le chien", emoji: "🐕", hint: "Meilleur ami de l'homme, aboie", translation: "the dog" },
  { id: "fr-soleil", languageCode: "fr", word: "le soleil", emoji: "☀️", hint: "Brille pendant la journée, donne chaleur", translation: "the sun" },

  // ── German ──
  { id: "de-apfel", languageCode: "de", word: "der Apfel", emoji: "🍎", hint: "Rund, rot oder grün, wächst am Baum", translation: "the apple" },
  { id: "de-gehen", languageCode: "de", word: "gehen", emoji: "🚶", hint: "Du machst das mit deinen Beinen, nicht rennen", translation: "to walk" },
  { id: "de-haus", languageCode: "de", word: "das Haus", emoji: "🏠", hint: "Hier wohnst du", translation: "the house" },
  { id: "de-buch", languageCode: "de", word: "das Buch", emoji: "📖", hint: "Du liest das, es hat Seiten", translation: "the book" },
  { id: "de-wasser", languageCode: "de", word: "das Wasser", emoji: "💧", hint: "Nötig zum Trinken, nass", translation: "the water" },
  { id: "de-essen", languageCode: "de", word: "essen", emoji: "🍽️", hint: "Du machst das 3x am Tag", translation: "to eat" },
  { id: "de-schlafen", languageCode: "de", word: "schlafen", emoji: "😴", hint: "Du machst das nachts im Bett", translation: "to sleep" },
  { id: "de-schön", languageCode: "de", word: "schön", emoji: "✨", hint: "Wenn du etwas wirklich gerne ansiehst", translation: "beautiful" },
  { id: "de-hund", languageCode: "de", word: "der Hund", emoji: "🐕", hint: "Bester Freund des Menschen, bellt", translation: "the dog" },
  { id: "de-sonne", languageCode: "de", word: "die Sonne", emoji: "☀️", hint: "Scheint tagsüber, gibt Wärme und Licht", translation: "the sun" },

  // ── Spanish ──
  { id: "es-manzana", languageCode: "es", word: "la manzana", emoji: "🍎", hint: "Redonda, roja o verde, crece en un árbol", translation: "the apple" },
  { id: "es-caminar", languageCode: "es", word: "caminar", emoji: "🚶", hint: "Haces esto con las piernas, no correr", translation: "to walk" },
  { id: "es-casa", languageCode: "es", word: "la casa", emoji: "🏠", hint: "Donde vives", translation: "the house" },
  { id: "es-libro", languageCode: "es", word: "el libro", emoji: "📖", hint: "Lees esto, tiene páginas", translation: "the book" },
  { id: "es-agua", languageCode: "es", word: "el agua", emoji: "💧", hint: "Necesaria para beber, mojada", translation: "the water" },
  { id: "es-comer", languageCode: "es", word: "comer", emoji: "🍽️", hint: "Haces esto 3 veces al día", translation: "to eat" },
  { id: "es-dormir", languageCode: "es", word: "dormir", emoji: "😴", hint: "Haces esto por la noche en la cama", translation: "to sleep" },
  { id: "es-bonito", languageCode: "es", word: "bonito/a", emoji: "✨", hint: "Cuando algo te gusta mucho cómo se ve", translation: "beautiful" },
  { id: "es-perro", languageCode: "es", word: "el perro", emoji: "🐕", hint: "El mejor amigo del hombre, ladra", translation: "the dog" },
  { id: "es-sol", languageCode: "es", word: "el sol", emoji: "☀️", hint: "Brilla durante el día, da calor y luz", translation: "the sun" },
];
