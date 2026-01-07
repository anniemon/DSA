const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = Number(input[0]);
const graph = [];
for(let i = 0; i <= n; i++) {
  graph.push([0]);
}
for(let i = 1; i <= n; i++) {
  line = input[i].split(' ').map(Number);
  for(let j = 0; j < n; j++) {
    graph[i].push(line[j]);
  }
}

const visited = new Array(n + 1).fill(false);
const result = [];
let minValue = 1e9;

function dfs (depth) {
  if(depth === n - 1) {
    let totalCost = 0;
    let cur = 1;
    for(let i = 0; i < n - 1; i++) {
      let nextNode = result[i];
      let cost = graph[cur][nextNode];
      if(cost === 0) return;
      totalCost += cost;
      cur = nextNode;
    }
    const back = graph[cur][1];
    if(back === 0) return;
    minValue = Math.min(minValue, back + totalCost);
  }
  for(let i = 2; i <= n; i++) {
    if(visited[i]) continue;
    result.push(i);
    visited[i] = true;
    dfs(depth + 1);
    result.pop();
    visited[i] = false;
  }
}

dfs(0);
console.log(minValue)
