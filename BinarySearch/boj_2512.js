const fs = require('fs');
const inputLines = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = Number(inputLines[0]);
const states = inputLines[1].split(' ').map(v => Number(v));
const m = Number(inputLines[2]);

const max = states.reduce((acc, cur) => Math.max(acc, cur), 0);

let start = 1;
let end = max;
let result = 0;
while(start <= end) {
  let mid = Math.floor((start + end) / 2); // 상한액
  let total = 0;
  for(const s of states) {
    total += Math.min(mid, s);
  }
  if(total <= m) {
    result = mid;
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}

console.log(result);
