const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = Number(input[0]);
const stats = input[1].split(' ').map(Number);
stats.reverse();

function lowerBound(arr, target, left, right) {
  while(left < right) {
    let mid = Math.floor((left + right) / 2);
    if(arr[mid] >= target) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return right;
}


let arr = [0];
for(let i = 0; i < n; i++) {
  if (stats[i] > arr[arr.length - 1]) {
    arr.push(stats[i]);
  } else {
    const idx = lowerBound(arr, stats[i], 0, arr.length - 1);
    arr[idx] = stats[i];
  }
}
console.log(n - (arr.length - 1))
