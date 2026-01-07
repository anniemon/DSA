const fs = require('fs');
const lines = fs.readFileSync('/dev/stdin').toString().split('\n');
const n = Number(lines[0]);

const matrix = [];
for(let i = 1; i <= n; i++) {
  matrix.push(lines[i].split(' ').map(Number));
}

let minCost = Number.MAX_SAFE_INTEGER;
const visited = new Array(n).fill(false);

visited[0] = true;

const dfs = (depth, cur, cost) => {
    if(cost >= minCost) return;
    if(depth === n) {
      const back = matrix[cur][0];
      if(back === 0) return;
      minCost = Math.min(minCost, cost + back);
      return;
    }
    for(let i = 0; i < n; i++) {
      if(visited[i]) continue;

      const nextCost = matrix[cur][i];
      if(nextCost === 0) continue;

      visited[i] = true;
      dfs(depth + 1, i, cost + nextCost);
      visited[i] = false;
    }
}

dfs(1, 0, 0);
console.log(minCost);
