// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin');

const number = 3;
const arr = [];
for(let i = 1; i<= number; i++) {
  arr.push(i);
}
const visited = new Array(number).fill(false);

const bucket = [];
function backtrack(depth) {
  if(depth === number) {
    console.log(bucket.join(' '));
    return;
  }
  for(let i = 0; i < number; i++) {
    if(!visited[i]) {
      bucket.push(arr[i]);
      visited[i] = true;
      backtrack(depth + 1);
      bucket.pop();
      visited[i] = false;
    } 
  }
}

backtrack(0);





