const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = Number(input[0]);
const cards = input[1].split(' ').map(Number);
const m = Number(input[2]);
const targets = input[3].split(' ').map(Number);

cards.sort((a,b) => a - b);

let result = '';
for(let i = 0; i < m; i++) {
  result += countByRange(targets[i], cards) + ' '
}
console.log(result)


function countByRange(target, arr) {
  return upperBound(0, arr.length, target, arr) - lowerBound(0, arr.length, target, arr);
}

function upperBound(left, right, target, arr) {
  while(left < right) {
    const mid = Math.floor((left + right) / 2);
    if(arr[mid] > target) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return right;
}

function lowerBound(left, right, target, arr) {
  while(left < right) {
    const mid = Math.floor((left + right) / 2);
    if(arr[mid] >= target) {
      right = mid;
    } else {
      left = mid +1;
    }
  }
  return right;
}

