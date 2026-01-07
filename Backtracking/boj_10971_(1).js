const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = Number(input[0]);

// 1-indexed graph: graph[i][j]
const graph = Array.from({ length: n + 1 }, () => [0]);
for (let i = 1; i <= n; i++) {
  const row = input[i].trim().split(' ').map(Number);
  for (let j = 0; j < n; j++) graph[i].push(row[j]);
}

const visited = Array(n + 1).fill(false);
const result = []; // 방문 순서(1 제외): 길이 n-1이 되면 완성
let minValue = 1e9;

function dfs() {
  if (result.length === n - 1) {
    let totalCost = 0;
    let cur = 1;

    for (let i = 0; i < result.length; i++) {
      const next = result[i];
      const cost = graph[cur][next];
      if (cost === 0) return; // 길 없음
      totalCost += cost;
      cur = next;
    }

    const back = graph[cur][1];
    if (back === 0) return; // 돌아갈 길 없음

    minValue = Math.min(minValue, totalCost + back);
    return;
  }

  for (let next = 2; next <= n; next++) {
    if (visited[next]) continue;

    result.push(next);
    visited[next] = true;

    dfs();

    visited[next] = false;
    result.pop();
  }
}

dfs();
console.log(minValue);
