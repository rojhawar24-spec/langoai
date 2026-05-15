import type { GrammarLesson } from "../types";

export const nlGrammar: GrammarLesson[] = [
  {
    id: "nl-gram-1", title: "Present Tense (Tegenwoordige Tijd)", level: 1, topic: "Verbs",
    body: `## Present Tense in Dutch (Tegenwoordige Tijd)

The Dutch present tense is used for habits, facts, AND actions happening now.

**Regular verb conjugation (werken = to work):**
- Ik werk (I work)
- Jij/U werkt (You work - informal/formal)
- Hij/Zij/Het werkt (He/She/It works)
- Wij werken (We work)
- Jullie werken (You all work)
- Zij werken (They work)

**Key rule:** The stem = infinitive minus **-en**. Add **-t** for hij/zij/jij/u.

**Example — lopen (to walk):**
- Ik loop, Jij loopt, Hij loopt, Wij lopen

**Inversion:** When the subject comes AFTER the verb (questions), jij loses the -t:
- Jij loopt → Loop jij?
- Werkt hij? (no change for hij/zij)`,
    exercises: [
      { question: "Ik ___ Nederlands.", options: ["spreek","spreekt","spreken","sprak"], answer: "spreek" },
      { question: "Hij ___ in Amsterdam.", options: ["woon","woont","wonen","woonde"], answer: "woont" },
      { question: "___ jij koffie?", options: ["Drink","Drinkt","Drinken","Dronk"], answer: "Drink" },
    ],
  },
  {
    id: "nl-gram-2", title: "De vs Het (Articles)", level: 1, topic: "Nouns",
    body: `## De and Het in Dutch

Dutch has two definite articles: **de** and **het**.

**De-words** (common gender — about 75% of nouns):
- De man (the man), De vrouw (the woman)
- De tafel (the table), De stoel (the chair)
- ALL plurals use **de**: De boeken (the books)

**Het-words** (neuter gender — about 25%):
- Het huis (the house), Het kind (the child)
- Het boek (the book), Het water (the water)
- Diminutives (-je): Het huisje (the little house)

**Indefinite article:** **een** (a/an) — same for all genders
- Een man, Een vrouw, Een huis

**Key tip:** When learning a new noun, always learn it with de or het!`,
    exercises: [
      { question: "___ boek (the book)", options: ["De","Het","Een","Die"], answer: "Het" },
      { question: "___ tafel (the table)", options: ["De","Het","Een","Dat"], answer: "De" },
      { question: "___ kinderen (the children)", options: ["De","Het","Een","Die"], answer: "De" },
    ],
  },
  {
    id: "nl-gram-3", title: "Word Order (Woordvolgorde)", level: 2, topic: "Sentences",
    body: `## Word Order in Dutch

Dutch follows **SVO** word order (Subject-Verb-Object), but changes in subordinate clauses.

**Main clauses:**
- Standard SVO: Ik lees een boek (I read a book)
- With time/place: Morgen lees ik thuis (Tomorrow I read at home)

**Subordinate clauses (after dat, want, omdat, etc.):**
- Subject comes AFTER the verb: Ik weet dat jij leest (I know that you read)

**Questions with question words:**
- Wie leest het boek? (Who reads the book?) - no inversion needed with "wie"

**Important:** Separable verbs split in main clauses:
- Ik bel *aan* → Ik bel later *aan*`,
    exercises: [
      { question: "___ ik wil leren (I want to learn)", options: ["Wat","Waar","Hoe","Waarom"], answer: "Wat" },
      { question: "Hij leest ___ (the book)", options: ["een boek","een boeken","een het boek","een de boek"], answer: "een boek" },
    ],
  },
];
