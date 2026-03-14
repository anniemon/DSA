const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const graph = Array.from({ length: n + 1}, () => []);
for(let i = 1; i <= n - 1; i++) {
  const [x, y, d] = input[i].split(' ').map(Number);
  graph[x].push([y, d]);
  graph[y].push([x, d]);
}

const dfsDistance = (start, target) => {
  const visited = new Array(n + 1).fill(false);
  let answer = -1;

  const dfs = (node, dist) => {
    if(node === target) {
      answer = dist;
      return true;
    }
    visited[node] = true;
    for (const [next, d] of graph[node]) {
      if(!visited[next]) {
        if (dfs(next, dist + d)) return true;
      }
    }
    return false;
  }

  dfs(start, 0);
  return answer;
}

let out = [];
for(let i = n; i < n + m; i++) {
  const [x, y] = input[i].split(' ').map(Number);
  out.push(String(dfsDistance(x, y)));
}
console.log(out.join('\n'));
