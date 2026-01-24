const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");
const [R, C] = input[0].split(" ").map(Number);

const board = Array.from({ length: R }, (_, i) =>
  [...input[i + 1].trim()].map(ch => ch.charCodeAt(0) - 65)
);

const used = Array(26).fill(false);
const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];

let maxLen = 1;

function dfs(y, x, len) {
  if (len > maxLen) maxLen = len;
  if (maxLen === 26) return; // 최댓값 도달하면 더 볼 필요 없음

  for (const [dy, dx] of dirs) {
    const ny = y + dy;
    const nx = x + dx;
    if (ny < 0 || ny >= R || nx < 0 || nx >= C) continue;

    const idx = board[ny][nx];
    if (used[idx]) continue;

    used[idx] = true;
    dfs(ny, nx, len + 1);
    used[idx] = false;
  }
}

used[board[0][0]] = true;
dfs(0, 0, 1);

console.log(maxLen);
