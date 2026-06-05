import type { GrammarLesson } from "../types";

export const frGrammar: GrammarLesson[] = [
  {
    id: "fr-gram-1", title: "Le Présent (Present Tense)", level: 1, topic: "Verbs",
    body: `## Le Présent in French

The French present tense is used for habits, general truths, and actions happening now.

**Regular -ER verbs (parler = to speak):**
- Je parle (I speak)
- Tu parles (You speak - informal)
- Il/Elle parle (He/She speaks)
- Nous parlons (We speak)
- Vous parlez (You speak - formal/plural)
- Ils/Elles parlent (They speak)

**Regular -IR verbs (finir = to finish):**
- Je finis, Tu finis, Il finit
- Nous finissons, Vous finissez, Ils finissent

**Regular -RE verbs (vendre = to sell):**
- Je vends, Tu vends, Il vend
- Nous vendons, Vous vendez, Ils vendent

**Key irregular:** Être (to be) — Je suis, Tu es, Il est, Nous sommes, Vous êtes, Ils sont
Avoir (to have) — J'ai, Tu as, Il a, Nous avons, Vous avez, Ils ont`,
    exercises: [
      { question: "Je ___ français.", options: ["parle","parles","parlent","parlez"], answer: "parle" },
      { question: "Nous ___ à Paris.", options: ["habite","habites","habitons","habitent"], answer: "habitons" },
      { question: "Elle ___ contente.", options: ["suis","es","est","sont"], answer: "est" },
    ],
  },
  {
    id: "fr-gram-2", title: "Passé Composé vs Imparfait", level: 2, topic: "Verbs",
    body: `## Passé Composé vs Imparfait

**Passé Composé** — completed, one-time actions:
- Formed with *avoir* or *être* + past participle
- *J'ai mangé* (I ate / I have eaten)
- *Elle est allée* (She went)

**Imparfait** — ongoing, habitual, or descriptive past:
- Nous stem + -ais, -ais, -ait, -ions, -iez, -aient
- *Je mangeais* (I was eating / I used to eat)
- *Il faisait beau* (The weather was nice)

**When to use which?**
- Passé composé: specific completed event
  - *Hier, j'ai vu un film.* (Yesterday I saw a movie.)
- Imparfait: background, habits, descriptions
  - *Quand j'étais petit, je jouais au foot.* (When I was little, I used to play football.)`,
    exercises: [
      { question: "Hier, je ___ au cinéma.", options: ["vais","allais","suis allé","irai"], answer: "suis allé" },
      { question: "Quand j'étais jeune, je ___ du piano.", options: ["joue","ai joué","jouais","jouerai"], answer: "jouais" },
    ],
  },
];
