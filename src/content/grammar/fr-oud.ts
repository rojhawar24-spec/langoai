import type { GrammarLesson } from "../types";

export const frGrammar: GrammarLesson[] = [
  // ── Les 1: Le Présent — verbes réguliers ────────────────
  {
    id: "fr-gram-1",
    title: "Le Présent — Verbes Réguliers",
    level: 1,
    topic: "Grammaire",
    anchorSectionId: "rules",

    overview:
      "Le **présent de l'indicatif** exprime une action qui se déroule maintenant, habituellement ou en général. Les verbes réguliers français obéissent à une règle prévisible selon qu'ils se terminent par **-er**, **-ir** ou **-re**.",

    body: `## Le Présent de l'Indicatif

Le présent sert à exprimer :
- **Maintenant** : Je **mange** une pomme.
- **Habituellement** : Nous **habitons** à Lyon.
- **Généralité** : Le chat **dort** beaucoup.

**Trois groupes de verbes réguliers**

| Infinitif | Exemple | Terminaison | Je | Tu | Il/Elle |
|-----------|---------|-------------|----|----|---------|
| -er | *parler* | mów e ø | parle | parles | parle |
| -ir | *finir* | mów is is it / issons / issez / issent | finis | finis | finit |
| -re | *vendre* | mów s s ø / ons / ez / ent | vends | vends | vend |`,

    rulesTable: [
      {
        rule:     "Verbes en -er (groupe 1)",
        structure:"raiz + e / es / e / ons / ez / ent",
        example:  "parler → je parle, tu parles, il parle, nous parlons, vous parlez, ils parlent",
        usage:    "Groupe le plus important (>90 % des verbes courants).",
      },
      {
        rule:     "Verbes en -ir (groupe 2)",
        structure:"raiz + is / is / it / issons / issez / issent",
        example:  "finir → je finis, tu finis, il finit, nous finissons, vous finissez, ils finissent",
        usage:    "Le radical reste identique ; terminaison caractéristique -iss- en nous/vous/ils.",
      },
      {
        rule:     "Verbes en -re (groupe 3)",
        structure:"raiz (sans -e) + s / s / Ø / ons / ez / ent",
        example:  "vendre → je vends, tu vends, il vend, nous vendons, vous vendez, ils vendent",
        usage:    "Moins nombreux, terminaison irrégulière : pas de -e au radical de je/tu/il.",
      },
    ],

    conjugationTable: {
      header: "Verbe | je | tu | il/elle | nous | vous | ils/elles",
      rows: [
        ["parler (-er)", "parle", "parles", "parle", "parlons", "parlez", "parlent"],
        ["finir  (-ir)", "finis", "finis",  "finit","finissons","finissez","finissent"],
        ["vendre (-re)", "vends", "vends",  "vend", "vendons", "vendez", "vendent"],
      ],
    },

    details: [
      {
        title: "Découvrez l'accord du participe passé",
        body: `**Règle d'or du participe passé avec AVOIR :**
Le participe passé **s'accorde** seulement si le COD (complément d'objet direct) **est placé AVANT** le verbe.

✅ *J'ai acheté des pommes.* → **des pommes** vient après → pas d'accord
✅ *Les pommes que j'ai achetées sont fraîches.* → **les pommes** est avant → accord : *achetées*

**Avec ÊTRE** : le participe passé **s'accorde TOUJOURS** avec le sujet.

✅ *Elle est allée à Paris.* → accord féminin singulier
✅ *Ils sont partis.* → accord masculin pluriel`,
      },
    ],

    callouts: [
      {
        type:  "key",
        label: "Point clé",
        text:  "Les verbes en -ir du groupe 2 prennent **-iss-** à la 3e personne du pluriel : *nous finissons, vous finissez, ils finissent*. C'est le seul groupe à avoir ce -iss-.",
      },
      {
        type:  "remember",
        label: "Attention",
        text:  "Ne confonds pas *il vend* (il vend = il is selling) et *il vendent* — c'est incorrect : *il* est toujours suivi de la forme **sans -ent**.",
      },
    ],

    commonMistakes: [
      {
        incorrect: "Je parle**s** français.",
        correct:   "Je **parle** français.",
        explanation: "Je suis toujours suivi de la forme **sans finale** pour les verbes en -er : *parle*, pas *parles*.",
      },
      {
        incorrect: "Nous finis**sons** les devoirs. ✗ (raison : est correcte mais étudiants oublient l'**-iss-**)",
        correct: "Nous finissons les devoirs.",
        explanation: "Les verbes en -ir du groupe 2 prennent **-iss-** à la 1re/2e/3e personnes du pluriel.",
      },
      {
        incorrect: "Il vends du pain.",
        correct:   "Il **vend** du pain.",
        explanation: "Pour les verbes en -re, *je*, *tu* et *il/elle* prennent **-s/-s/-Ø** (pas de finale pour *il*).",
      },
    ],

    review: [
      "**-er** : parle / parles / parle / parlons / parlez / parlent",
      "**-ir** : finis / finis / finit / finissons / finissez / finissent",
      "**-re** : vends / vends / vend / vendons / vendez / vendent",
      "Seul -ir a **-iss-** en nous/vous/ils : finiss-",
      "Les verbes en -er représentent plus de 90 % des verbes courants.",
    ],

    qa: [
      { question: "Conjugue *parler* à la 1re personne du singulier.", answer: "Je **parle**." },
      { question: "Conjugue *finir* à la 3e personne du pluriel.", answer: "Ils/Elles **finissent**." },
      { question: "Conjugue *vendre* pour *tu*.", answer: "Tu **vends**." },
    ],

    exercises: [
      {
        question: "Choisis : Nous ___ (parler) anglais.",
        options: ["parlons", "parlez", "parles"],
        answer: "parlons",
      },
      {
        question: "Choisis : Vous ___ (finir) le travail.",
        options: ["finissez", "finissons", "finis"],
        answer: "finissez",
      },
      {
        question: "Choisis : Ils ___ (vendre) des fleurs.",
        options: ["vendent", "vendons", "vendez"],
        answer: "vendent",
      },
    ],
  },

  // ── Les 2: Verbes Irréguliers Essentiels ─────────────────
  {
    id: "fr-gram-irreg",
    title: "Les Verbes Irréguliers Essentiels",
    level: 1,
    topic: "Grammaire",
    anchorSectionId: "rules",

    overview:
      "Les verbes **être**, **avoir**, **aller**, **faire** et **pouvoir** sont irréguliers : ils ne suivent aucun modèle régulier et doivent être appris par cœur. Ce sont les verbes les plus utilisés en français.",

    body: `## Verbes Irréguliers Essentiels

Ces cinq verbes sont omniprésents : vous les rencontrerez dans toutes les conversations.

| Verbe | je | tu | il/elle | nous | vous | ils/elles |
|-------|----|----|---------|------|------|-----------|
| **être** | suis | es | est | sommes | êtes | sont |
| **avoir** | ai | as | a | avons | avez | ont |
| **aller**| vais | vas | va | allons | allez | vont |
| **faire** | fais | fais | fait | faisons | faites | font |
| **pouvoir**| peux | peux | peut | pouvons| pouvez| peuvent |

**Être et Avoir** sont aussi des verbes **auxiliaires** pour former les temps composés.`,
    rulesTable: [
      {
        rule:     "Être vs Avoir",
        structure:"Être = estado / identidad; Avoir = posesión / cantidad",
        example:  "Je **suis** content / J'**ai** un chat.",
        usage:    "Deux auxiliaires fondamentaux — ne jamais les confondre.",
      },
      {
        rule:     "Aller — futur proche",
        structure:"aller + à + infinitif = futur proche",
        example:  "Je **vais** manger = je vais manger bientôt.",
        usage:    "Construye el futuro próximo más cercano con aller + a + infinitivo.",
      },
      {
        rule:     "Faire — causa y acción",
        structure:"faire + [alguien] + [infinitif] = hacer que alguien haga algo",
        example:  "Je **fais** mes devoirs / Je **fais** nettoyer la chambre.",
        usage:    "Se usa tanto para acciones propias como para hacer que otro realice la acción.",
      },
    ],

    conjugationTable: {
      header: "Verbe | je | tu | il/elle | nous | vous | ils/elles",
      rows: [
        ["être",    "suis",    "es",     "est",     "sommes",   "êtes",     "sont"],
        ["avoir",   "ai",      "as",     "a",       "avons",    "avez",     "ont"],
        ["aller",   "vais",    "vas",     "va",      "allons",   "allez",    "vont"],
        ["faire",   "fais",    "fais",   "fait",    "faisons",  "faites",   "font"],
        ["pouvoir", "peux",    "peux",   "peut",    "pouvons",  "pouvez",   "peuvent"],
      ],
    },

    details: [
      {
        title: "Être et Avoir : deux auxiliaires",
        body: `En français, les temps composés (passé composé, plus-que-parfait, etc.) utilisent **ÊTRE** ou **AVOIR** comme auxiliaire.

**Avoir** est l'auxiliaire de la majorité des verbes transitifs :
- *J'ai mangé* = I have eaten
- *Elle a fini* = She has finished

**Être** est l'auxiliaire des verbes de **mouvement** et d'**état** (16 verbes mnémotechniques : **DR MRS V ANDERT P** — *Devenir, Rester, Mourir, Rentrer, Sortir, Venir, Aller, Naître, Descendre, Entrer, Rentrer, Tomber, Partir, Passer*)`,
      },
    ],

    callouts: [
      {
        type:  "remember",
        label: "Astuce",
        text:  "Pour le **futur proche**, utilise **aller + à + infinitif** : *Je vais étudier* = I'm going to study. C'est la forme du futur la plus naturelle dans la conversation.",
      },
    ],

    commonMistakes: [
      {
        incorrect: "Je suis une pomme. (= I am an apple — préservation)",
        correct:   "J'**ai** une pomme. (= I have an apple — possession)",
        explanation: "Pour tous les objets que l'on peut posséder, utilise **avoir**, pas être.",
      },
      {
        incorrect: "Je faire mes devoirs.",
        correct:   "Je **fais** mes devoirs.",
        explanation: "'Faire' est irrégulier à la 1re personne : je **fais**, pas *je faire*.",
      },
    ],

    review: [
      "**ÊTRE** : suis / es / est / sommes / êtes / sont — état, identité",
      "**AVOIR** : ai / as / a / avons / avez / ont — possession",
      "**ALLER** : vais / vas / va / allons / allez / vont — futur proche",
      "**FAIRE** : fais / fais / fait / faisons / faites / font — action",
      "**POUVOIR** : peux / peux / peut / pouvons / pouvez / peuvent — capacité",
    ],

    qa: [
      { question: "Conjugue *être* je-forme.", answer: "Je **suis**." },
      { question: "'Je ___ de Marseille' → correcte?", answer: "Je **viens** de Marseille." },
      { question: "Futur proche : 'Je ___ étudier ce soir.'", answer: "Je **vais** étudier ce soir." },
    ],

    exercises: [
      {
        question: "Choisis : Je ___ étudiant.",
        options: ["suis", "ai", "fais"],
        answer: "suis",
      },
      {
        question: "Choisis : Nous ___ une voiture.",
        options: ["avons", "sommes", "faisons"],
        answer: "avons",
      },
      {
        question: "Choisis : Tu ___ manger une glace.",
        options: ["vas", "es", "fais"],
        answer: "vas",
      },
    ],
  },

  // ── Les 3: Questions et Négation ─────────────────────────
  {
    id: "fr-gram-questions",
    title: "Questions et Négation",
    level: 1,
    topic: "Grammaire",
    anchorSectionId: "rules",

    overview:
      "En français, on forme des questions par **inversion** du sujet et du verbe, par l'ajout de **est-ce que**, ou simplement par l'**intonation**. La négation s'exprime en plaçant **ne … pas** de chaque côté du verbe.",

    body: `## Questions et Négation

### Trois manières de poser une question

**1. Montée d'intonation** (plus courant à l'oral)
- *Tu viens ?* → Oui, je viens. / Non, je ne viens pas.

**2. Est-ce que** (neutre, très utilisé à l'oral et écrit)
- *Est-ce que* tu viens ?
- *Est-ce que* tu as faim ?

**3. Inversion** (plus formel)
- *Viens-tu ?* / *Parlez-vous espagnol ?*

### Négation
Place **ne … pas** autour du verbe conjugué :
- *Je viens* → *Je **ne** viens **pas**.*
- *Elle a mangé* → *Elle **n'**a pas mangé.* (ne → n' devant a/é)`,

    rulesTable: [
      {
        rule:     "Intonation",
        structure:"Aucun mot ajouté — intonation montante",
        example:  "Tu viens ?",
        usage:    "Oral familier et courant.",
      },
      {
        rule:     "Est-ce que",
        structure:"Est-ce que + sujet + verbe",
        example:  "Est-ce que tu viens ?",
        usage:    "Le plus sûr pour débutants ; fonctionne avec tous les verbes.",
      },
      {
        rule:     "Inversion",
        structure:"verbe + sujet (tiret)",
        example:  "Parlez-vous français ?",
        usage:    "Plus formel ; utilisé dans les situations polies ou journalistiques.",
      },
      {
        rule:     "Négation ne…pas",
        structure:"ne + verbe + pas",
        example:  "Je ne viens pas. / Tu n'es pas là.",
        usage:    "N'importe quel verbe conjugué peut être nié avec ne…pas.",
      },
    ],

    conjugationTable: {
      header: "Forme | Phrase affirmative | Question (eston-ce que) | Négative",
      rows: [
        ["Tu viens",           "Tu viens.",                               "Est-ce que tu viens?",    "Tu ne viens pas."],
        ["Elle a mangé",        "Elle a mangé.",                           "Est-ce qu'elle a mangé?", "Elle n'a pas mangé."],
        ["Vous avez faim",      "Vous avez faim.",                         "Est-ce que vous avez faim ?","Vous n'avez pas faim."],
      ],
    },

    details: [
      {
        title: "Quand utiliser chaque forme de question ?",
        body: `| Forme | Oral / Écrit | Registre |
|-------|-------------|----------|
| Intonation | oral | informel / familier |
| Est-ce que | oral + écrit | neutre, sûr pour débutants |
| Inversion | écrit / discours formel | formel / poli |`,
      },
    ],

    callouts: [
      {
        type:  "key",
        label: "Point clé",
        text:  "Devant un **voyelle** ou un **h muet**, **ne** devient **n'** : *je n'ai pas, il n'est pas, elle n'habite pas*. Devant un **h aspiré** : on garde **ne** : *il ne hait pas*.",
      },
    ],

    commonMistakes: [
      {
        incorrect: "Tu viens pas.",
        correct:   "Tu **ne** viens **pas**.",
        explanation: "La négation complète est toujours **ne … pas**. *Tu viens pas* est de l'oral familier très relâché mais incorrect à l'écrit.",
      },
      {
        incorrect: "Il ne fait froid.",
        correct:   "**Il fait froid** — vraie phrase, mais négation serait : *Il ne fait pas froid.*",
        explanation: "*Il fait froid* n'a pas besoin de négation — c'est une affirmation. Si tu veux nier, ajoute *ne … pas*.",
      },
    ],

    review: [
      "**Question — intonation** : *Tu viens ?* (oral informel)",
      "**Question — est-ce que** : *Est-ce que tu viens ?* (neutre, sûr)",
      "**Question — inversion** : *Viens-tu ?* (formel)",
      "**Négation** : **ne + verbe + pas** → *je ne viens pas*",
      "**N'** (elision) devant voyelle / h muet : *n'ai, n'est, n'habite*",
    ],

    qa: [
      { question: "Transforme en question : 'Tu as faim.'", answer: "**Est-ce que** tu as faim ? / Tu as faim ? (intonation)" },
      { question: "Négation : 'Elle est française.' → ?", answer: "Elle **n'est pas** française." },
      { question: "Pourquoi dit-on 'n'ai' et pas 'ne ai' ?", answer: "Devant **a**, on fait l'**élision** : **ne** → **n'** (*je n'ai*, pas *je ne ai*)." },
    ],

    exercises: [
      {
        question: "Transforme : 'Tu es content.' → question (est-ce que).",
        options: ["Est-ce que tu content?", "Est-ce que tu es content?", "Tu es content?"],
        answer: "Est-ce que tu es content?",
      },
      {
        question: "Négation : 'Je parle français.'",
        options: ["Je ne parle pas français.", "Je parle pas français.", "Je ne parlons pas français."],
        answer: "Je ne parle pas français.",
      },
      {
        question: "Choisis la forme correcte : 'Elle ___ trop.'",
        options: ["ne mange pas", "mange pas", "ne mangent pas"],
        answer: "ne mange pas",
      },
    ],
  },
];
