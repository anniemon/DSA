const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

function dfs (graph, m, n, x, y) {
  if(x <= -1 || x >= m || y <= -1 || y >= n) {
    return false;
  }

  if(graph[y][x] === 1) {
    graph[y][x] = -1;

    dfs(graph, m, n, x+1, y);
    dfs(graph, m, n, x-1, y);
    dfs(graph, m, n, x, y+1);
    dfs(graph, m, n, x, y-1);

    return true;
  }
  return false;
}

let tc = Number(input[0]);
let line = 1;
while(tc--) {
  const [m, n, k] = input[line].split(' ').map(Number);
  const graph = Array.from({length: n}, () => new Array(m))
  for(let i = 1; i <= k; i++) {
    let [x, y] = input[line + i].split(' ').map(Number);
    graph[y][x] = 1;
  }
  let result = 0;
  for(let i = 0; i < n; i++) {
    for(let j = 0; j < m; j++) {
      if(dfs(graph, m, n, j, i)) result++;
    }
  }
  line += k + 1;
  console.log(result)
}
