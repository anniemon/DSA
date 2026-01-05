const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');
const [n, m] = input.map(Number);

const arr = [];
for(let i = 1; i <= n; i++) {
    arr.push(i);
}
let answer = '';
const dfs = (depth, arr, selected) => {
    if(depth === m) {
        answer += selected.join(' ');
        answer += '\n';
        return;
    }
    for(let i = 0; i < arr.length; i++) {
        selected.push(arr[i]);
        dfs(depth + 1, arr, selected);
        selected.pop();
    }
}
dfs(0, arr, [])
console.log(answer);
