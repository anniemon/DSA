const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const [count, length] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

// should bring at least {length} meters' trees
let maxHeight = 0;
let start = 1;
let end = arr.reduce((acc, cur) => Math.max(acc, cur) , 0);

while(start <= end) {
  const height = Math.floor((start + end) / 2);
  let total = 0;
  for(const x of arr) {
    total += x - Math.min(x, height);
  }
  if(total >= length) {
    maxHeight = height;
    start = height + 1;
  } else {
    end = height - 1;
  }
}
console.log(maxHeight);
