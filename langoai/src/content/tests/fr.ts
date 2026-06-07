import type { TestItem } from "../types";

export const frTests: TestItem[] = [
  {
    id:"fr-test-1", title:"Verbes au Présent", passScore:70, languageCode:"fr", topic:"Verbs",
    questions:[
      { prompt:'What does "manger" mean?', options:["To drink","To eat","To sleep","To walk"], answer:"To eat" },
      { prompt:'Je ___ français.', options:["parle","parles","parlent","parlez"], answer:"parle" },
      { prompt:'Nous ___ au cinéma.', options:["va","vas","allons","allez"], answer:"allons" },
      { prompt:'Elle ___ belle.', options:["suis","es","est","sommes"], answer:"est" },
    ],
  },
  {
    id:"fr-test-2", title:"Articles et Noms", passScore:70, languageCode:"fr", topic:"Nouns",
    questions:[
      { prompt:'"La maison" means:', options:["The house","The car","The school","The shop"], answer:"The house" },
      { prompt:'The plural of "cheval" is:', options:["chevals","chevaux","chevales","cheval"], answer:"chevaux" },
      { prompt:'"L\'amitié" means:', options:["Love","Friendship","Family","Happiness"], answer:"Friendship" },
    ],
  },
];
