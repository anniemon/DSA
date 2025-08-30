const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const pibo = [];
pibo.push(0);
pibo.push(1);

while(pibo[pibo.length - 1] < 1e9) {
  pibo.push(pibo[pibo.length - 2] + pibo[pibo.length - 1]);
}

for(let i = 1; i < input.length; i++) {
  let num = Number(input[i]);
  let k = pibo.length - 1;
  const result = [];
  while(num > 0) {
    if(num >= pibo[k]) {
      num = num - pibo[k];
      result.push(pibo[k]);
    } else {
      k--;
    }
  }
  console.log(result.reverse().join(' '));
}
