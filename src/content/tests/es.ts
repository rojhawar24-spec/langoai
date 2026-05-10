import type { TestItem } from "../types";

export const esTests: TestItem[] = [
  {
    id:"es-test-1", title:"Verbos en Presente", passScore:70, languageCode:"es", topic:"Verbs",
    questions:[
      { prompt:'What does "comer" mean?', options:["To drink","To eat","To sleep","To run"], answer:"To eat" },
      { prompt:'Yo ___ español.', options:["hablo","hablas","habla","hablan"], answer:"hablo" },
      { prompt:'Nosotros ___ al cine.', options:["va","vas","vamos","van"], answer:"vamos" },
      { prompt:'Ella ___ bonita.', options:["soy","eres","es","son"], answer:"es" },
    ],
  },
  {
    id:"es-test-2", title:"Ser vs Estar", passScore:70, languageCode:"es", topic:"Verbs",
    questions:[
      { prompt:'Yo ___ de España. (origin)', options:["soy","estoy","es","está"], answer:"soy" },
      { prompt:'¿Dónde ___ el baño? (location)', options:["es","está","soy","estoy"], answer:"está" },
      { prompt:'Ella ___ cansada hoy. (temporary)', options:["es","está","soy","son"], answer:"está" },
    ],
  },
];
