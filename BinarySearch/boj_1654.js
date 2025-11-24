const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const [k, n] = input[0].split(' ').map(Number);

const lens = [];
for(let i = 1; i <= k; i++) {
  const len = input[i];
  lens.push(len);
}

let result;
let start = 1;
let end = lens.reduce((acc, cur) => Math.max(acc, cur), 0);
while(start <= end) {
  let mid = Math.floor((start + end) / 2);
  let count = 0;
  for(const l of lens) {
    count += Math.floor(l / mid);
  }
  if(count >= n) {
    result = mid;
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}

console.log(result);
