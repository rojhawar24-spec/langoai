const fs = require('fs');
const content = fs.readFileSync('src/components/GrammarLessonDesign.tsx', 'utf8');
const lines = content.split('\n');

let depth = 0;
let inJSX = false;
let openTags = [];
let closeTags = [];

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  let inString = false;
  let stringChar = '';
  
  for (let j = 0; j < line.length; j++) {
    const c = line[j];
    const nextTwo = line.substring(j, j+2);
    
    // Track string boundaries
    if ((c === '"' || c === "'" || c === '') && line[j-1] !== '\\\\') {
      if (!inString) {
        inString = true;
        stringChar = c;
      } else if (c === stringChar) {
        inString = false;
        stringChar = '';
      }
    }
    
    // Count JSX tags
    if (!inString) {
      if (nextTwo === '</') {
        const tag = line.substring(j+2, j+10).match(/^[a-zA-Z]+/);
        if (tag) {
          depth--;
          closeTags.push({line: i+1, tag: tag[0], depth: depth});
        }
      } else if (c === '<' && line[j+1] !== '/' && line[j+1] !== '>') {
        const tagMatch = line.substring(j).match(/^<[a-zA-Z]+/);
        if (tagMatch) {
          depth++;
          const tag = tagMatch[0].substring(1);
          openTags.push({line: i+1, tag: tag, depth: depth});
        }
      }
    }
  }
}

console.log('Open tags at end:', depth);
console.log('Last 20 open tags:', openTags.slice(-20));
console.log('Last 10 close tags:', closeTags.slice(-10));
