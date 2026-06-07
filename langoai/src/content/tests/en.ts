import type { TestItem } from "../types";

export const enTests: TestItem[] = [
  {
    id:"en-test-1", title:"Basic Verbs Quiz", passScore:70, languageCode:"en", topic:"Verbs",
    questions:[
      { prompt:'What does "to eat" mean?', options:["Manger","Boire","Dormir","Parler"], answer:"Manger" },
      { prompt:'She ___ to school every day.', options:["go","goes","going","gone"], answer:"goes" },
      { prompt:'What is the past tense of "eat"?', options:["eated","ate","eaten","eating"], answer:"ate" },
      { prompt:'They ___ playing football now.', options:["is","are","am","be"], answer:"are" },
      { prompt:'I have ___ that movie already.', options:["saw","see","seen","seeing"], answer:"seen" },
    ],
  },
  {
    id:"en-test-2", title:"Nouns & Articles", passScore:70, languageCode:"en", topic:"Nouns",
    questions:[
      { prompt:'The plural of "child" is:', options:["childs","childen","children","child"], answer:"children" },
      { prompt:'I saw ___ elephant.', options:["a","an","the","no article"], answer:"an" },
      { prompt:'___ sun rises in the east.', options:["A","An","The","No article"], answer:"The" },
      { prompt:'"Water" is a(n) ___ noun.', options:["Countable","Uncountable","Proper","Abstract"], answer:"Uncountable" },
    ],
  },
];
