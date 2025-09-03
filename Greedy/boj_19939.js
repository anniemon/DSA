const fs = require('fs');
let [n, k] = fs.readFileSync('/dev/stdin').toString().split(' ').map(Number);

let sum = 0;
for(let i = 1; i <= k; i++) {
  sum += i;
}
if(sum > n) {
  console.log(-1);
} else {
  n -= sum;
  if(n % k === 0) {
    console.log(k - 1);
  } else {
    console.log(k);
  }
}
