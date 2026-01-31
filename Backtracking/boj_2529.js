const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const k = Number(input[0]);
const signs = input[1].split(' ');
const visited = new Array(10).fill(false);

let maxNum = Number.MIN_SAFE_INTEGER;
let minNum = Number.MAX_SAFE_INTEGER;

const dfs = (depth, picked) => {
  if(depth === k + 1) {
    const num = parseInt(picked.join(''));
    maxNum = Math.max(maxNum, num);
    minNum = Math.min(minNum, num);
    return;
  }
  for(let i = 0; i < 10; i++) {
    if(visited[i]) continue;
    const lastNum = picked[picked.length - 1];
    const curSign = signs[picked.length - 1];
    if(picked.length === 0 || curSign === '>' && lastNum > i || curSign === '<' && lastNum < i) {
      visited[i] = true;
      picked.push(i)
      dfs(depth + 1, picked);
      visited[i] = false;
      picked.pop();
    }
  }
}
dfs(0, [])
console.log(maxNum.toString());
console.log(minNum.toString().padStart(k + 1, '0'));
