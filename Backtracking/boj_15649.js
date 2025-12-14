const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');
const [n, m] = input.map(Number);

let nums = [];
for(let i = 1; i <=n; i++) {
  nums.push(i);
}
let visited = new Array(n).fill(false);
let picked = [];
let answer = '';
function dfs(arr, count) {
  if(count === m) {
    let bucket = picked;
    answer += bucket.join(' ');
    answer += '\n';
    return;
  }
  for(let i = 0; i < arr.length; i++) {
    if(!visited[i]) {
      picked.push(arr[i]);
      visited[i] = true;
      dfs(arr, count + 1);
      picked.pop();
      visited[i] = false;
    }
    else {
      continue;
    }
  }
}

dfs(nums, 0);
console.log(answer)
