const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

let arrows = input[1].split(' ').map(Number);

const arr = new Array(1000001).fill(0);
let result = 0;
for(const a of arrows) {
  if(arr[a] > 0) {
    arr[a] -= 1;
    arr[a - 1] += 1;
  } else {
    result += 1;
    arr[a - 1] += 1;
  }
}
console.log(result)

