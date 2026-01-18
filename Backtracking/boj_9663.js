const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString();
const n = Number(input);

const queens = [];
const isPossible = (row, col) => {
    for(const [x,y] of queens) {
        if(x === row || y === col || Math.abs(x - row) === Math.abs(y - col)) {
            return false;
        }
    }
    return true;
}
let cnt = 0;
const dfs = (row) => {
        if(row === n) {
            cnt++;
            return;
        }
        for(let i = 0; i < n; i++) {
            if(!isPossible(row, i)) continue;
            queens.push([row, i]);
            dfs(row + 1);
            queens.pop()
        }
}
dfs(0);
console.log(cnt)
