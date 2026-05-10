import type { GrammarLesson } from "../types";

export const enGrammar: GrammarLesson[] = [
  {
    id: "en-gram-1",
    title: "Present Simple Tense",
    level: 1,
    topic: "Verbs",
    body: `## Present Simple Tense

The **present simple** is used for habits, general truths, and repeated actions.

**Form:**  
- *I/You/We/They*: base form (e.g., *I go*, *They play*)  
- *He/She/It*: base form + **-s** / **-es** (e.g., *He goes*, *She watches*)

**Examples:**
- *I walk to school every day.*
- *She drinks coffee in the morning.*
- *They live in London.*

**Negative:** *do not / does not* + base form  
- *I don't like spiders.*  
- *He doesn't eat meat.*

**Questions:** *Do / Does* + subject + base form  
- *Do you speak English?*  
- *Does she play tennis?*

**Key tip:** Use the present simple for facts and routines, NOT for things happening right now!`,
    exercises: [
      { question: "She ___ to school every day.", options: ["go","goes","going","gone"], answer: "goes" },
      { question: "They ___ football on Sundays.", options: ["play","plays","playing","played"], answer: "play" },
      { question: "He ___ like coffee.", options: ["don't","doesn't","isn't","aren't"], answer: "doesn't" },
    ],
  },
  {
    id: "en-gram-2",
    title: "Present Continuous (Progressive)",
    level: 2,
    topic: "Verbs",
    body: `## Present Continuous Tense

The **present continuous** describes actions happening RIGHT NOW or around now.

**Form:** *am/is/are + verb-ing*

**Examples:**
- *I am reading a book.*
- *She is cooking dinner.*
- *They are watching TV.*

**Negative:** *am/is/are + not + verb-ing*  
- *I am not sleeping.*  
- *He isn't working today.*

**Questions:** *Am/Is/Are + subject + verb-ing*  
- *Are you listening?*  
- *Is she coming?*

**Compare with Present Simple:**
- *I read every night.* (habit — present simple)
- *I am reading right now.* (now — present continuous)`,
    exercises: [
      { question: "I ___ a book right now.", options: ["read","reading","am reading","reads"], answer: "am reading" },
      { question: "She ___ dinner at the moment.", options: ["cook","cooks","is cooking","cooked"], answer: "is cooking" },
    ],
  },
  {
    id: "en-gram-3",
    title: "Articles: A, An, The",
    level: 1,
    topic: "Nouns",
    body: `## Articles in English

English has three articles: **a**, **an**, and **the**.

**A / An** (indefinite — any one of a group)  
- Use **a** before consonant sounds: *a cat*, *a university*  
- Use **an** before vowel sounds: *an apple*, *an hour*

**The** (definite — a specific one)  
- *The sun is bright.* (only one sun)  
- *I saw the movie you recommended.* (specific movie)

**No article:** general plural or uncountable  
- *I like dogs.* (dogs in general)  
- *Water is important.* (water in general)

**Key rule:** First mention = a/an; second mention = the  
- *I saw **a** cat. **The** cat was black.*`,
    exercises: [
      { question: "I saw ___ elephant at the zoo.", options: ["a","an","the","no article"], answer: "an" },
      { question: "___ sun rises in the east.", options: ["A","An","The","No article"], answer: "The" },
      { question: "She is ___ best student in class.", options: ["a","an","the","no article"], answer: "the" },
    ],
  },
];
