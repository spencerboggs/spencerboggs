const fs = require('fs');
const path = './README.md';

const currentYear = new Date().getFullYear();
const birthYear = 2005;
const age = currentYear - birthYear;

const readmeContent = fs.readFileSync(path, 'utf8');
const updatedContent = readmeContent.replace(
  /I'm a \d+-year-old programmer/,
  `I'm a ${age}-year-old programmer`
);

fs.writeFileSync(path, updatedContent);
console.log('README updated with new age.');
