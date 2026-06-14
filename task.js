// unique-count.js
const lines = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const count = parseInt(lines[0].trim());

const numbers = [];
for (let i = 1; i <= count; i++) {
  numbers.push(parseInt(lines[i].trim()));
}

const freq = {};
for (const n of numbers) {
  freq[n] = (freq[n] || 0) + 1;
}

let uniqueCount = 0;
for (const n in freq) {
  if (freq[n] === 1) uniqueCount++;
}

console.log(`Unique: ${uniqueCount}`);