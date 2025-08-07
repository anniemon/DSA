const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString()

let nInput = Number(input);
let result = 0;
let flag;
while(nInput >=0) {
  if(nInput === 0 || (nInput % 5) === 0) {
    result += parseInt(nInput / 5);
    flag = true;
    break;
  }
  nInput -= 3;
  result += 1;
}
if(!flag) {
  console.log(-1)
  return;
}
console.log(result)
