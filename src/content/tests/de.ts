import type { TestItem } from "../types";

export const deTests: TestItem[] = [
  {
    id:"de-test-1", title:"Verben im Präsens", passScore:70, languageCode:"de", topic:"Verbs",
    questions:[
      { prompt:'What does "essen" mean?', options:["To drink","To eat","To sleep","To be"], answer:"To eat" },
      { prompt:'Ich ___ Deutsch.', options:["spreche","sprichst","spricht","sprechen"], answer:"spreche" },
      { prompt:'Er ___ ein Buch.', options:["lese","liest","lest","lesen"], answer:"liest" },
      { prompt:'Wir ___ ins Kino.', options:["gehe","gehst","geht","gehen"], answer:"gehen" },
    ],
  },
  {
    id:"de-test-2", title:"Artikel (Der, Die, Das)", passScore:70, languageCode:"de", topic:"Nouns",
    questions:[
      { prompt:'___ Haus ist groß.', options:["Der","Die","Das","Den"], answer:"Das" },
      { prompt:'___ Frau liest.', options:["Der","Die","Das","Dem"], answer:"Die" },
      { prompt:'"Das" is for ___ nouns.', options:["Masculine","Feminine","Neuter","Plural"], answer:"Neuter" },
    ],
  },
];
