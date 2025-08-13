const fs = require('fs');
const inputLines = fs.readFileSync('/dev/stdin').toString().split('\n');

const count = Number(inputLines[0]);
const distances = inputLines[1].split(' ').map(BigInt);
const stations = inputLines[2].split(' ').map(BigInt);

let minValue = stations[0];
let cost = BigInt(0);

for(let i = 0; i < count - 1; i++) {
    if (minValue > stations[i]) {
      minValue = stations[i];
    }
    cost += minValue * distances[i];
}
console.log(cost.toString());
