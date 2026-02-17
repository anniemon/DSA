const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const cnt = Number(input[0]);
const lines = Number(input[1]);

const graph = Array.from({ length: cnt + 1 }, () => []);

for (let i = 2; i < lines + 2; i++) {
  const [m, n] = input[i].split(' ').map(Number);
  graph[m].push(n);
  graph[n].push(m);
}

const visited = new Array(cnt + 1).fill(false);
let result = 0;

function dfs(v) {
  visited[v] = true;
  for (const next of graph[v]) {
    if (!visited[next]) {
      result++;
      dfs(next);
    }
  }
}

dfs(1);
console.log(result);
