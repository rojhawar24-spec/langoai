import type { TestItem } from "../types";

export const nlTests: TestItem[] = [
  {
    id:"nl-test-1", title:"Werkwoorden (Verbs)", passScore:70, languageCode:"nl", topic:"Verbs",
    questions:[
      { prompt:'What does "lopen" mean?', options:["To walk","To run","To swim","To fly"], answer:"To walk" },
      { prompt:'Ik ___ een boek.', options:["lees","leest","lezen","las"], answer:"lees" },
      { prompt:'Hij ___ Nederlands.', options:["spreek","spreekt","spreken","sprak"], answer:"spreekt" },
      { prompt:'Wij ___ naar school.', options:["ga","gaat","gaan","ging"], answer:"gaan" },
    ],
  },
  {
    id:"nl-test-2", title:"Lidwoorden (Articles)", passScore:70, languageCode:"nl", topic:"Nouns",
    questions:[
      { prompt:'___ huis is groot.', options:["De","Het","Een","Die"], answer:"Het" },
      { prompt:'___ tafel is rond.', options:["De","Het","Een","Dat"], answer:"De" },
      { prompt:'___ kinderen spelen buiten.', options:["De","Het","Een","Die"], answer:"De" },
    ],
  },
];
