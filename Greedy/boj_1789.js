const fs = require('fs');
const input = parseInt(fs.readFileSync('/dev/stdin').toString());

let num = 0;
let sum = 0;
let result = 0;
while(sum <= input) {
  num += 1;
  sum += num;
  result += 1;
}
console.log(result - 1);
