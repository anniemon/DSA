const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = Number(input[0]);
const s = [0];
const b = [0];
for(let i = 1; i <= n; i++) {
    const [sour, bitter] = input[i].split(' ').map(Number);
    s.push(sour);k
    b.push(bitter);
}

let min = Number.MAX_SAFE_INTEGER;
const dfs = (sAcc, bAcc, depth, start) => {
    if(depth > 0) {
        const diff = Math.abs(sAcc - bAcc);
        min = Math.min(min, diff);
    }
    for(let i = start; i <= n; i++) {
        dfs(sAcc * s[i], bAcc + b[i], depth + 1, i + 1);
    }
}
dfs(1, 0, 0, 1);
console.log(min);

