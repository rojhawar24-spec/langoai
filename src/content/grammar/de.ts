import type { GrammarLesson } from "../types";

export const deGrammar: GrammarLesson[] = [
  {
    id: "de-gram-1", title: "Präsens & Verb Conjugation", level: 1, topic: "Verbs",
    body: `## German Present Tense (Präsens)

**Regular verb conjugation (machen = to make/do):**
- Ich mache (I make)
- Du machst (You make - informal)
- Er/Sie/Es macht (He/She/It makes)
- Wir machen (We make)
- Ihr macht (You all make)
- Sie machen (They/You formal make)

**Key irregular: Sein (to be)**
- Ich bin, Du bist, Er ist, Wir sind, Ihr seid, Sie sind

**Haben (to have)**
- Ich habe, Du hast, Er hat, Wir haben, Ihr habt, Sie haben

**Stem-changing verbs (sprechen = to speak):**
- Ich spreche, Du sprichst, Er spricht
- Wir sprechen, Ihr sprecht, Sie sprechen`,
    exercises: [
      { question: "Ich ___ Deutsch.", options: ["spreche","sprichst","spricht","sprechen"], answer: "spreche" },
      { question: "Du ___ müde.", options: ["bin","bist","ist","sind"], answer: "bist" },
      { question: "Wir ___ aus Berlin.", options: ["komme","kommst","kommt","kommen"], answer: "kommen" },
    ],
  },
  {
    id: "de-gram-2", title: "Der, Die, Das (German Cases)", level: 1, topic: "Nouns",
    body: `## German Articles — Nominative Case

**Definite articles:**
- **Der** — masculine (der Mann = the man)
- **Die** — feminine (die Frau = the woman)
- **Das** — neuter (das Kind = the child)
- **Die** — plural (die Leute = the people)

**Indefinite articles:**
- **Ein** — masculine/neuter (ein Mann, ein Kind)
- **Eine** — feminine (eine Frau)

**Tips for guessing gender:**
- **Der:** days/months/seasons, -ling, -ich, -ig endings
- **Die:** -ung, -heit, -keit, -schaft, -tion endings
- **Das:** -chen, -lein diminutives, infinitives used as nouns

**Always learn the article with the noun!**`,
    exercises: [
      { question: "___ Haus ist groß.", options: ["Der","Die","Das","Den"], answer: "Das" },
      { question: "___ Frau liest ein Buch.", options: ["Der","Die","Das","Dem"], answer: "Die" },
    ],
  },
];
